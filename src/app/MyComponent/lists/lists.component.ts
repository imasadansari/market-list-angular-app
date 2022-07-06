import { Component, OnInit } from '@angular/core';
import { MarketList } from "../../Lists";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  title = 'list-component-title'
  marketlists: MarketList[];
  localItem: string = "";

  constructor() {
    this.localItem = (localStorage.getItem("marketlists") || "")
    if (this.localItem == "") {
      this.marketlists = []
    }
    else {
      this.marketlists = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
  }

  deleteMarketList(marketlist: MarketList) {
    console.log(marketlist)
    console.log(marketlist.title, "cdevsdv")
    const index = this.marketlists.indexOf(marketlist)
    this.marketlists.splice(index, 1)
    localStorage.setItem("marketlists", JSON.stringify(this.marketlists))
  }
  addMarketList(marketlist: MarketList) {
    console.log(marketlist);
    this.marketlists.push(marketlist);
    localStorage.setItem("marketlists", JSON.stringify(this.marketlists))
  }
  toggleMarketList(marketlist: MarketList) {
    console.log(marketlist);
    const index = this.marketlists.indexOf(marketlist)
    this.marketlists[index].active = !this.marketlists[index].active;
    localStorage.setItem("marketlists", JSON.stringify(this.marketlists))
  }

}
