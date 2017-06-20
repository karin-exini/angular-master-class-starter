import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {ContactsService} from "../contacts.service"
import {Contact} from "../models/contact"
import {Observable} from "rxjs/Observable"

@Component({
  selector: 'trm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  private contact: Contact;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id']
    this.contactsService.getContact(id).subscribe(c => this.contact = c)
  }

}
