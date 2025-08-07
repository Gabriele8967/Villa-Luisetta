import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../shared/navigation/navigation.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './privacy.html',
  styleUrls: ['./privacy.css']
})
export class Privacy {
  
}