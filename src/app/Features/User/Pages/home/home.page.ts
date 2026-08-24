import { Component } from '@angular/core';
import { Header } from "../../../../Shared/User/components/header/header.component";
import { RouterOutlet } from "@angular/router";
import { HomeHeroComponent } from "../../Components/home-hero/home-hero.component";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HomeHeroComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {}
