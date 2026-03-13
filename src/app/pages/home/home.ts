import { Component } from '@angular/core';
import { MenuTitle } from "../../components/menu-title/menu-title";
import { MenuBar } from "../../components/menu-bar/menu-bar";
import { BigCard } from "../../components/big-card/big-card";
import { SmallCard } from "../../components/small-card/small-card";

@Component({
  selector: 'app-home',
  imports: [MenuTitle, MenuBar, BigCard, SmallCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
