import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router"
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {MdToolbarModule, MdListModule, MdCardModule, MdButtonModule, MdInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {ContactsAppComponent} from './app.component';
import {ContactsService} from "./contacts.service";
import {ContactsListComponent} from './contacts-list/contacts-list.component'
import {APP_ROUTES} from "./app.routes";
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component'

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactDetailComponent, ContactEditorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ContactsService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
