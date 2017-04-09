import { Component } from '@angular/core';

@Component({
    selector: 'app-techblog',
    templateUrl: './techblog.component.html',
    styleUrls: ['./techblog.component.css']
})
export class TechblogComponent  {
    primaryText: string;
    secondaryText: string;
    
    constructor() {
        this.primaryText = '"Technology is the campfire around which we tell our stories."';
        this.secondaryText = 'Laurie Anderson';
    }

}
