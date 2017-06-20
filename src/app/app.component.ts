import { Component } from '@angular/core';
import { Contact, Address } from './models/contact';
import { CONTACT_DATA } from 'app/data/contact-data'

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class ContactsAppComponent {

  public contacts: Contact[] = CONTACT_DATA;


}
