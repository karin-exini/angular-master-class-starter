import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../models/contact"

@Component({
  selector: 'trm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact: Contact;
  @Output() edit: EventEmitter<any> = new EventEmitter()
  @Output() cancel: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
