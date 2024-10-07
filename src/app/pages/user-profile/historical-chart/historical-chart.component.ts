import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CountUnit, HistoryEntry, HistoryFile, HistoryIndex } from 'src/app/service/vanity-db-history.service';
import { ProfileStatsBase } from 'src/app/service/vanity-db.service';

@Component({
    selector: 'app-historical-chart',
    templateUrl: './historical-chart.component.html',
    styleUrl: './historical-chart.component.scss',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, BaseChartDirective, CommonModule, MatRippleModule],
})
export class HistoricalChartComponent {
    public tension = 0.2;
    public chartType: ChartType = 'line';
    public pointRadius = 1;
    private readonly _defaultChartOptions: ChartConfiguration['options'] = {
        maintainAspectRatio: false,
        elements: {
            bar: {
                borderWidth: 0,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    padding: 15,
                },
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                display: true,
            },
            y: {
                display: true,
                min: 0,
                ticks: {
                    callback: function (value) {
                        let outputVal = 0;
                        value = value as number;
                        if (value < 1000) {
                            return value.toString();
                        } else if (value < 1000000) {
                            outputVal = value / 1000;
                            return outputVal.toFixed(0).toString() + 'K';
                        } else if (value < 1000000000) {
                            outputVal = value / 1000000;
                            return outputVal.toFixed(0).toString() + 'M';
                        } else {
                            outputVal = value / 1000000000;
                            return outputVal.toFixed(0).toString() + 'B';
                        }
                    },
                },
            },
        },
    };
    public chartData: ChartData = {
        labels: [],
        datasets: [],
    };
    public chartOptions = this._defaultChartOptions;

    public platformColorMappings: Map<string, string[]> = new Map<string, string[]>([
        ['default', ['#5e67a4', '#878ba3']],
        ['YouTube', ['#de0d0d', '#e06c6c']],
        ['Threads', ['#373738', '#5f5f61']],
        ['Twitter', ['#22ccf2', '#afe2ed']],
        ['Spotify', ['#18de2c', '#a9deae']],
        ['Newgrounds', ['#ebb915', '#f5ca3d']],
        ['SoundCloud', ['#f78119', '#f2b47e']],
        ['Twitch', ['#761cd6', '#ac7fdb']],
        ['Tik Tok', ['#6e023a', '#663e53']],
        ['Facebook', ['#190fd6', '#332bd6']],
        ['Instagram', ['#cf1776', '#d45b99']],
    ]);
    public platformChartCounts: Map<string, number> = new Map<string, number>();

    private _historyData: HistoryFile = new HistoryFile();
    @Input({ required: true }) public set historyData(hist: HistoryFile) {
        if (hist.histories.length === 0) {
            return;
        }
        if (JSON.stringify(this._historyData) != JSON.stringify(hist)) {
            this._historyData = structuredClone(hist);
            this.loadData(structuredClone(hist));
            this.init = true;
        }
    }
    private _statsArray: ProfileStatsBase[] = [];
    @Input({ required: true }) public set statsArray(stats: ProfileStatsBase[]) {
        this._statsArray = stats;
        if (this._historyData) {
            this.loadData(structuredClone(this._historyData));
        }
    }
    @Input() public cumulative: boolean = false;
    @Input() public platform: string = 'All';
    @Input() counts: 'Followers' | 'Views' = 'Followers';
    @Input() dayCount: number = 90;

    /** Don't show chart until init is true (data should be loaded) */
    public init = false;
    constructor(private _datePipe: DatePipe) {}

    /** Update the current date range of the chart to be the last {count} days */
    public changeDateRange(count: number) {
        this.dayCount = count;
        this.loadData(structuredClone(this._historyData));
    }

    /** Plot current component data using its assigned settings */
    private loadData(histData: HistoryFile) {
        console.log(this.statsArray);
        this.platformChartCounts = new Map<string, number>();
        if (this.counts == 'Followers') {
            // Display all the accounts for a single platform
            if (this.platform !== 'All' && !this.cumulative) {
                histData.histories = histData.histories.filter((h) => h.platformName == this.platform);
                this.loadAllAccountsWithTotal(histData);
            }
            // Display just the accumulated total for a single platform
            else if (this.platform !== 'All' && this.cumulative) {
                histData.histories = histData.histories.filter((h) => h.platformName == this.platform);
                this.loadPlatformSummationsWithTotal(histData);
            }
            // Display accumulations of every platform
            else if (this.platform === 'All' && this.cumulative) {
                this.loadPlatformSummationsWithTotal(histData);
            }
            // Display all accounts for every platform (gross looking)
            else if (this.platform === 'All' && !this.cumulative) {
                this.loadAllAccountsWithTotal(histData);
            }
        }
    }

    /** Creates a single plotted line for each platform's cumulative follower count + a running total */
    private loadPlatformSummationsWithTotal(histData: HistoryFile) {
        const followerCounts = histData.histories.filter((d) => d.countUnits == CountUnit.Followers);
        const timestamps = this.getDateTimestamps(this.dayCount);
        const dates: string[] = timestamps.map((d) => this._datePipe.transform(d, 'shortDate') ?? '-');

        const platforms: Set<string> = new Set<string>();
        for (const record of histData.histories) {
            platforms.add(record.platformName);
        }
        const platformsArr = Array.from(platforms);
        const datasets = platformsArr.map((p) =>
            this.getCumulativeDatasetFromHistoryIndex(
                timestamps,
                followerCounts.filter((f) => f.platformName == p),
                p,
                0,
                p
            )
        );
        if (platformsArr.length > 1) {
            // Include another plot for the total number of followers
            this.chartData = {
                labels: dates,
                datasets: [this.getCumulativeDatasetFromHistoryIndex(timestamps, followerCounts), ...datasets],
            };
        } else {
            // Only 1 platform was selected, so only plot is needed
            this.chartData = {
                labels: dates,
                datasets: [...datasets],
            };
        }
    }

    /** Creates a plotted line for each account within the history data + a running total */
    private loadAllAccountsWithTotal(histData: HistoryFile) {
        const followerCounts = histData.histories.filter((d) => d.countUnits == CountUnit.Followers);
        const timestamps = this.getDateTimestamps(this.dayCount);
        const dates: string[] = timestamps.map((d) => this._datePipe.transform(d, 'shortDate') ?? '-');
        if (followerCounts.length > 1) {
            this.chartData = {
                labels: dates,
                datasets: [
                    this.getCumulativeDatasetFromHistoryIndex(timestamps, followerCounts),
                    ...followerCounts.map((d) => this.getDatasetFromHistoryIndex(timestamps, d)),
                ],
            };
        } else {
            this.chartData = {
                labels: dates,
                datasets: [...followerCounts.map((d) => this.getDatasetFromHistoryIndex(timestamps, d))],
            };
        }
    }

    /** Create a dataset for the running total of a set of history indexes */
    private getCumulativeDatasetFromHistoryIndex(
        timestamps: number[],
        historyIndexes: HistoryIndex[],
        platform: string = '',
        count: number = 0,
        label: string = ''
    ) {
        const individualDatasets: number[][] = historyIndexes.map((d) =>
            this.historicalCountsToChartData(timestamps, d.historicalCounts)
        );
        const values: number[] = individualDatasets[0].map(() => 0);
        for (const dataset of individualDatasets) {
            dataset.forEach((value: number, index: number) => {
                values[index] += value;
            });
        }
        return {
            label: label !== '' ? label : 'Total',
            data: values,
            fill: false,
            pointRadius: this.pointRadius,
            pointHitRadius: 10,
            tension: this.tension,
            hidden: false,
            borderColor: this.mapPlatformToColor(platform, count),
        };
    }

    /** Return the color that properly represents a platform, with varying shades in case of multiple plotted line instances */
    private mapPlatformToColor(platform: string, count: number) {
        let colors: string[] | undefined = this.platformColorMappings.get(platform);
        if (!colors) {
            colors = this.platformColorMappings.get('default');
        }
        return !colors ? '' : this.interpolateColor(colors[0], colors[1], count / 10);
    }

    /**
     * Linear interpolation of hexadecimal colors
     * @param amount decimal number value between 0 and 1
     * @NOTE https://gist.github.com/rosszurowski/67f04465c424a9bc0dae
     */
    private interpolateColor(a: string, b: string, amount: number) {
        const ah = parseInt(a.replace(/#/g, ''), 16),
            ar = ah >> 16,
            ag = (ah >> 8) & 0xff,
            ab = ah & 0xff,
            bh = parseInt(b.replace(/#/g, ''), 16),
            br = bh >> 16,
            bg = (bh >> 8) & 0xff,
            bb = bh & 0xff,
            rr = ar + amount * (br - ar),
            rg = ag + amount * (bg - ag),
            rb = ab + amount * (bb - ab);
        return '#' + (((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1);
    }

    /** Transform a history index into a chart-able dataset by placing it within the proper time frame indexes */
    private getDatasetFromHistoryIndex(timestamps: number[], historyIndex: HistoryIndex) {
        let count: number | undefined = this.platformChartCounts.get(historyIndex.platformName);
        if (count === undefined) {
            count = 0;
        } else {
            count++;
        }
        this.platformChartCounts.set(historyIndex.platformName, count);
        const account = this._statsArray.find(
            (f) => f.platformName === historyIndex.platformName && f.username === historyIndex.username
        );
        const displayName = account?.displayName ?? historyIndex.username;
        return {
            label: `${displayName} ${historyIndex.platformName}`,
            data: this.historicalCountsToChartData(timestamps, historyIndex.historicalCounts),
            fill: false,
            pointRadius: this.pointRadius,
            pointHitRadius: 10,
            tension: this.tension,
            hidden: false,
            borderColor: this.mapPlatformToColor(historyIndex.platformName, count),
        };
    }

    /** Return a set of timestamps corresponding with the last {dayCount} days preceding the current date */
    private getDateTimestamps(dayCount: number): number[] {
        const times: number[] = [];
        const dayTimeSpan: number = 24 * 60 * 60 * 1000;
        const now = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
        for (let i = 0; i < dayCount; i++) {
            times.push(now - dayTimeSpan * i);
        }
        return times.reverse();
    }

    private historicalCountsToChartData(dates: number[], counts: HistoryEntry[]): number[] {
        const values: number[] = dates.map(() => 0);
        for (const count of counts) {
            /**
             * - Find which timestamp bracket the count belongs within
             * - Set the value for every timestamp bracket proceeding it
             * - Subsequent values will overwrite proceeding bracket if their values are more recent
             */
            for (let i = 0; i <= dates.length; i++) {
                if (count.timestamp > dates[i] && (i == dates.length - 1 || count.timestamp < dates[i + 1])) {
                    values[i] = count.count;
                    const startIndex = i;
                    for (let j = startIndex; j < dates.length; j++) {
                        values[j] = count.count;
                    }
                    break;
                }
            }
        }
        return values;
    }
}
