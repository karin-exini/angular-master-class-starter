import {Component, OnInit} from '@angular/core';
import {Contact} from "app/models/contact"
import {ContactsService} from "app/contacts.service"
import {Observable} from "rxjs/Observable"
import {Subject} from "rxjs/Subject"
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/delay'

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  public contacts$: Observable<Contact[]>;
  public search$: Subject<string> = new Subject()

  constructor(private contactService: ContactsService) {
  }

  ngOnInit() {
    let c$: Observable<Contact[]> = this.contactService.getContacts()

    let searchResult$: Observable<Contact[]> = this.contactService.search(this.search$)

    this.contacts$ = c$.merge(searchResult$)

  }

}
