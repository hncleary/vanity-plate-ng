import { AfterViewInit, Component, Input } from '@angular/core';
import { FastAverageColor } from 'fast-average-color';
import { VanityPlateProfileStats, VanityPlateSum } from 'src/app/service/vanity-db.service';
@Component({
    selector: 'app-user-plate',
    templateUrl: './user-plate.component.html',
    styleUrls: ['./user-plate.component.scss'],
})
export class UserPlateComponent implements AfterViewInit {
    @Input() public userStats: VanityPlateProfileStats = new VanityPlateProfileStats();
    @Input() public userSum: VanityPlateSum = new VanityPlateSum();

    public userColor = '';
    public isUserColorDark = false;

    ngAfterViewInit() {
        this.getProfileImgPalette();
    }

    public getProfileImgPalette() {
      const fac = new FastAverageColor();
      const profileImage = document.querySelector('#profileImage') as HTMLImageElement;
      fac.getColorAsync(profileImage).then((color) => { 
        this.userColor = color.rgb;
        this.isUserColorDark = color.isDark;
      });
    }
}
