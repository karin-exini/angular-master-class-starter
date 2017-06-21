import { Component, OnInit } from '@angular/core';
import {Contact} from "app/models/contact"
import {ContactsService} from "app/contacts.service"
import {Observable} from "rxjs/Observable"

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  public contacts: Observable<Contact[]>;

  constructor(private contactService: ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts()
  }

}
