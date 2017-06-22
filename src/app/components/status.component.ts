import {Component, Inject} from '@angular/core';
import {Store} from "../store/store"
import {ApplicationState} from "../store/root-reducer"
import {APP_STORE} from "../store/app-store"

@Component({
  selector: 'trm-status',
  template: `
    {{ votes.counter }}
    <div class="tip">All Votes!</div>
  `,
  styles : [
    `:host {  text-align:center; font-size:1.1em; font-weight: bolder  }`,
    `.tip { font-size:0.7em; padding-top:5px;font-weight: normal;  }`
  ]
})

export class StatusComponent {

  votes;

  /**
   * Inject the appStore here and listen
   * for vote changes!
   */
  constructor(@Inject(APP_STORE) private store: Store<ApplicationState>) {
    this.votes = store.getState().votes;

    store.subscribe(() => {
      this.votes = store.getState().votes;
      console.log(this.votes)
    })
  }
}

