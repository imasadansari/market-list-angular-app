import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarketList } from 'src/app/Lists';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {

  @Input() marketlist: MarketList = new MarketList;
  @Output() marketlistDelete: EventEmitter<MarketList> = new EventEmitter();
  @Output() marketlistCheckbox: EventEmitter<MarketList> = new EventEmitter();
  onstructor() { }

  ngOnInit(): void {
  }

  onClick(marketlist: MarketList) {
    //console.log(mar.title)
    this.marketlistDelete.emit(marketlist);
    console.log("Oncluck is triggered");
  }
  onCheckBoxClick(marketlist: MarketList) {
    this.marketlistCheckbox.emit(marketlist)
  }
}
