import {Component, OnInit} from '@angular/core';
import { Contact, Address } from './models/contact';
import {ContactsService} from "./contacts.service"
import {EventBusService} from "./event-bus.service"
import {Observable} from "rxjs/Observable"

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class ContactsAppComponent implements OnInit{

  title$: Observable<string>

  constructor(private bus: EventBusService) {

  }
  ngOnInit() {
    this.title$ = this.bus.observe('title')
  }
}
