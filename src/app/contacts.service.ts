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
    let url: string = "http://localhost:4201/api/contacts/" + id
    console.log(url)
    return this.http.get(url).map(res => res.json().item);
  }
}
