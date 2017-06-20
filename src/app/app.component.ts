import { Component, OnInit } from '@angular/core';
import { Contact, Address } from './models/contact';
import {ContactsService} from "./contacts.service"

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class ContactsAppComponent implements OnInit {

  public contacts: Contact[];

  constructor(private contactService: ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
}
