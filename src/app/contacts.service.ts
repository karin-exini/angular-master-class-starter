import { Injectable } from '@angular/core';
import { CONTACT_DATA } from 'app/data/contact-data';
import { Contact } from 'app/models/contact'

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(): Contact[] {
    return CONTACT_DATA;
  }
}
