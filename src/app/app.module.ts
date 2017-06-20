import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router"
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http"
import {MdToolbarModule, MdListModule, MdCardModule, MdButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {ContactsAppComponent} from './app.component';
import {ContactsService} from "./contacts.service";
import {ContactsListComponent} from './contacts-list/contacts-list.component'
import {APP_ROUTES} from "./app.routes";
import { ContactDetailComponent } from './contact-detail/contact-detail.component'

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ContactsService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
