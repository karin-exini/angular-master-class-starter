import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component"

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit{

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.select(this.tabs.first)
  }

  select(tab: TabComponent) {
    this.tabs.forEach((tabi: TabComponent) => {
      tabi.selected = tab === tabi
    })
  }
}
