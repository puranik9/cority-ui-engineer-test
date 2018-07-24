import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../MockListItems';
import { NEWITEMS } from '../MockNewListItems'

@Component({
  selector: 'app-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.css']
})
export class UiListComponent implements OnInit {

  today = new Date();
  show = 3;

  collapsed: Boolean = false;
  toggle() {
    this.collapsed = !this.collapsed;
  }

  items = ITEMS;
  newitems = NEWITEMS;

  countNewItems = 0;

  add(index:number, event): void {
    this.items.splice(index, 0, this.newitems[0]);
    this.countNewItems += 1;
    if(this.countNewItems > 9) {
      event.target.classList.add('high-list-new-items')
    }
  }

  remove(index:number, event): void {
    this.items.splice(index, 1);
    if(this.countNewItems > 0) {
      this.countNewItems -= 1;
    }
    if(this.countNewItems > 9) {
      event.target.classList.remove('high-list-new-items')
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
