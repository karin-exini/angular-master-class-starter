import {Routes} from "@angular/router"
import {ContactsListComponent} from "./contacts-list/contacts-list.component"
import {ContactDetailComponent} from "app/contact-detail/contact-detail.component";
import {ContactEditorComponent} from "./contact-editor/contact-editor.component"

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ContactsListComponent
  },
  {
    path: 'contact/:id',
    component: ContactDetailComponent
  },
  {
    path: 'contact/:id/edit',
    component: ContactEditorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]
