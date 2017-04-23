import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Base Components
import { AppComponent } from './app.component';
import { CollapseDirective } from 'ng2-bootstrap';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeComponent } from './home/home.component';
import { TechblogComponent } from './techblog/techblog.component';
import { MusicComponent } from './music/music.component';

//Standalone Modules
import { BlogModule } from './blog/blog.module';

const appRoutes: Routes = [
    { path: 'tech', component: TechblogComponent},
    { path: 'music', component: MusicComponent },
    { path: '', component: HomeComponent}
]

@NgModule({
    declarations: [
        CollapseDirective,
        AppComponent,
        JumbotronComponent,
        TechblogComponent,
        MusicComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BlogModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
