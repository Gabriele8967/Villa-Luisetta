import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../shared/navigation/navigation.component';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './cookie-policy.html',
  styleUrls: ['./cookie-policy.css']
})
export class CookiePolicy {
  
}