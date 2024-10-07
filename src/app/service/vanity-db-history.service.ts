import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VanityDbHistoryService {
    private readonly historyJsonSuffix: string = '-history.json';

    constructor(private _apiSvc: ApiService) {}
    /** Retrieve historical stats for a user */
    public async getHistoricalUserStats(username: string) {
        const json = await firstValueFrom(
            this._apiSvc.getUrl(`${this._apiSvc.statsFolderUrl}${username}${this.historyJsonSuffix}`)
        );
        return json as HistoryFile;
    }
}

export class HistoryFile {
    public histories: HistoryIndex[] = [];
}

export class HistoryIndex {
    public platformName: string = '';
    public username: string = '';
    public countUnits: CountUnit = CountUnit.Followers;
    public historicalCounts: HistoryEntry[] = [];
    constructor(platformName: string, username: string, countUnits: CountUnit = CountUnit.Followers) {
        this.platformName = platformName;
        this.username = username;
        this.countUnits = countUnits;
        this.historicalCounts = [];
    }
}

export class HistoryEntry {
    public count: number = 0;
    public timestamp: number = -1;
    constructor(count: number) {
        this.count = count;
        this.timestamp = new Date().getTime();
    }
}

export enum CountUnit {
    Followers,
    Views,
    Likes,
}
