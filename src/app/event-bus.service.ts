import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject"
import {Observable} from "rxjs/Observable"

interface Event {
  type: string,
  data: any
}

@Injectable()
export class EventBusService {

  private bus: Subject<Event> = new Subject()

  constructor() {
  }

  emit(type: string, data: any) {
    this.bus.next({type: type, data: data})
  }

  observe(type: string): Observable<any> {
    return this.bus.filter(event => event.type === type).map(e => e.data)
  }

}
