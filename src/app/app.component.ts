import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environment/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public version = environment.version;
    public title = 'vanity-plate-social';
    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        this.matIconRegistry.addSvgIcon(
            'youtube',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgs/youtube.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'instagram',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgs/instagram.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'threads',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgs/threads.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'spotify',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgs/spotify.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'newgrounds',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgs/newgrounds.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'soundcloud',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgs/soundcloud.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'twitter',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgs/twitter.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'twitch',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgs/twitch.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'tiktok',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgs/tiktok.svg')
        );
    }
}
