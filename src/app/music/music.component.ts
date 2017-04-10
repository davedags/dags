import { Component } from '@angular/core';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css']
})
export class MusicComponent  {
    primaryText: string;
    secondaryText: string;

    constructor() {
        this.primaryText = '"When words leave off, music begins."';
        this.secondaryText = 'Hienrich Heine';
    }



}
