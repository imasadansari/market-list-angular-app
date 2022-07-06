import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MarketList } from 'src/app/Lists';

@Component({
  selector: 'app-add-market-list',
  templateUrl: './add-market-list.component.html',
  styleUrls: ['./add-market-list.component.css']
})
export class AddMarketListComponent implements OnInit {
  title: string = "";
  desc: string = "";
  @Output() marketlistAdd: EventEmitter<MarketList> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const marketlist = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.marketlistAdd.emit(marketlist)
  }

}
