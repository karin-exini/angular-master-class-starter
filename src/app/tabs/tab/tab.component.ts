import {Component, Input, OnInit} from '@angular/core';
import {TabsComponent} from "../tabs/tabs.component"

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() title: string;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit() {
  }

}
