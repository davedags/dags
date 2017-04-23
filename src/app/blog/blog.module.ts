import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogNewComponent } from './blog-new/blog-new.component';

export const blogRoutes: Routes = [
    { path: 'blog', component: BlogComponent },
    { path: 'blog/new', component: BlogNewComponent }
];

@NgModule({
  imports: [
      FormsModule,
      BrowserModule,
      CommonModule,
      RouterModule.forChild(blogRoutes)
  ],
  declarations: [
      BlogComponent,
      BlogNewComponent]
})
export class BlogModule { }
