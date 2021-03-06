import { Injectable } from '@angular/core';
import { Contact } from 'app/models/contact'
import {Http} from "@angular/http"
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable"

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get('http://localhost:4201/api/contacts').map(res => res.json().items);
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get(`http://localhost:4201/api/contacts/${id}`).map(res => res.json().item);
  }

  updateContact(contact: Contact) {
    return this.http.put(`http://localhost:4201/api/contacts/${contact.id}`, contact)
  }

  search(text$: Observable<string>): Observable<Contact[]>{

    let search$: Observable<string> = text$.debounceTime(500)
      .distinctUntilChanged()

    let searchResult$: Observable<Contact[]> = search$.switchMap(s => this.http.get(`http://localhost:4201/api/search?text=${s}`).map(res => res.json().items))

   return searchResult$;
  }
}
