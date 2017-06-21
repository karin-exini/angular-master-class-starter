import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import {ContactsService} from "../contacts.service"
import {Observable} from "rxjs/Observable"
import {Contact} from "../models/contact"

@Component({
  selector: 'trm-contact-details-view',
  templateUrl: './contact-details-view.component.html',
  styleUrls: ['./contact-details-view.component.css']
})
export class ContactDetailsViewComponent implements OnInit {

  private contact$: Observable<Contact>;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id']
    this.contact$ = this.contactsService.getContact(id)
  }

  edit() {
    this.router.navigate(["edit"], {relativeTo: this.route})
  }

  cancel() {
    this.router.navigate(["/"])
  }
}
