import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import {ContactsService} from "../contacts.service"
import {Contact} from "../models/contact"

@Component({
  selector: 'trm-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {

  // safe navigation operator can't be used with ngModel
  private contact: Contact = <Contact>{ address: {}};

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id']
    this.contactsService.getContact(id).subscribe(c => this.contact = c)
  }

  save(contact: Contact) {
    console.log("Save", contact)
    this.contactsService.updateContact(contact).subscribe(() => this.router.navigate([`/contact/${contact.id}`]))
  }

  cancel(contact: Contact) {
    this.contactsService.getContact(this.contact.id.toString()).subscribe(c => {
      this.contact = c
      this.router.navigate([`/contact/${contact.id}`])
    })
  }

}
