import { Component } from '@angular/core';

@Component({
    selector: 'app-whats-new',
    templateUrl: './whats-new.component.html',
    styleUrl: './whats-new.component.scss',
})
export class WhatsNewComponent {
    public readonly entries: WhatsNewEntry[] = [
        {
            date: 'May 15, 2024',
            version: 'v1.1.5',
            updates: ['Added support for Facebook profile stats'],
        },
        {
            date: 'May 13, 2024',
            version: 'v1.1.4',
            updates: ['Website framework upgrade'],
        },
        {
            date: 'May 5, 2024',
            version: 'v1.1.3',
            updates: [
                "Added ability search through a user's list of accounts",
                "Added ability to sort a user's account alphabetically or by follower count",
            ],
        },
        {
            date: 'February 25, 2024',
            version: 'v1.1.1',
            updates: ['Added support for Instagram Threads profile stats'],
        },
    ];
}

export class WhatsNewEntry {
    public date: string = '';
    public version: string = '';
    public updates: string[] = [];
}
