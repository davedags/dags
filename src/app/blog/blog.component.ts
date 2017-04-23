import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    
    private blogs: any;
    
    constructor() {
        this.blogs = [
            { title: "Test Blog", slug: "This blog talks about test", created_at: "2017-04-17T12:45:00"},
            { title: "Test Blog 2", slug: "Googoo gaagaa", created_at: "2017-04-17T16:45:00"}
        ]
    }

    ngOnInit() {
    }

}
