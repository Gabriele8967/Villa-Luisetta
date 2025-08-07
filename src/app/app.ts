import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieBannerComponent } from './shared/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CookieBannerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  title = 'VillaLuisetta';
}