import {Routes} from "@angular/router"
import {ContactsListComponent} from "./contacts-list/contacts-list.component"
import {ContactDetailsViewComponent} from "app/contact-details-view/contact-details-view.component";
import {ContactEditorComponent} from "./contact-editor/contact-editor.component"

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ContactsListComponent
  },
  {
    path: 'contact/:id',
    component: ContactDetailsViewComponent
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
