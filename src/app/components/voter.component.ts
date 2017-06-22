import {Component, Inject} from '@angular/core';
import {APP_STORE} from '../store/app-store';
import {VoteActions} from "../store/votes/vote-actions"
import {Store} from "../store/store"
import {ApplicationState} from "../store/root-reducer"

@Component({
  selector: 'trm-voter',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-between center" fxFlex style="padding-left:10px;">
      <button md-fab class="yes" mdTooltip="Vote Yes!" (click)="increment()">
        <md-icon class="md-24">thumb_up</md-icon>
      </button>

      <ng-content></ng-content>

      <button md-fab class="no" mdTooltip="Vote No!" (click)="decrement()">
        <md-icon class="md-24">thumb_down</md-icon>
      </button>
    </div>
  `,
  styles : [
    `button.yes { background-color: darkgreen; }`,
    `button.no { background-color: red; }`
  ]
})
export class VoterComponent {

  /**
   * Inject the appstore
   */
  constructor(@Inject(APP_STORE) private store: Store<ApplicationState>) { }

  private increment() {
    this.store.dispatch({type:VoteActions.YES})
  }

  private decrement() {
    this.store.dispatch({type:VoteActions.NO})
  }
}
