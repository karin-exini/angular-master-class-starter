
export const VoteActions = {
  NO : "NO",
  YES : "YES"
};


/**
 * To emulate a Redux store, simply
 * support the dispatch(), subscribe() methods and
 * use reducers to process actions with immutable instances
 */
export class AppStore {

  /**
   * Accessor to current store state
   */
  getState():any {
    return this.state;
  }

  /**
   *  Dispatch the action thru reducers to
   *  condistionally update the state
   */
  dispatch(action) {
    console.log('dispatch', action)
    const newState = this.reducer(this.state, action);
    if (newState !== this.state) {
      this.state = newState;
      this.listeners.forEach(notify => notify());
    }
  }

  /**
   * Allow views to listen for store synchronous
   * store changes
   */
  subscribe(notify) {
    this.listeners.push(notify);
  }

  /**
   * Use the custom actions to update the counter state!
   *
   */
  protected reducer(state, action){
    console.log('reducer state before', state)
    switch(action.type) {
      case 'vote':
        let c = action.data === VoteActions.YES ? 1 : -1;
        console.log('voting', c)
        state = {...state, counter: state.counter + c}
        console.log('new state', state)
        return state;
      default : return state;
    }
  }

  protected listeners = [];
  protected state = {
    counter : 0
  };

}


