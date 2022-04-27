import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { VideosComponent } from './components/videos/videos.component';
import { PeopleComponent } from './components/people/people.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SidebarActivityComponent } from './components/sidebar-activity/sidebar-activity.component';
import { SidebarChannelsComponent } from './components/sidebar-channels/sidebar-channels.component';
import {LayoutModule} from '@angular/cdk/layout';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    PeopleComponent,
    DocumentsComponent,
    MenubarComponent,
    SidebarActivityComponent,
    SidebarChannelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
