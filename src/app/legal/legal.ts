import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../shared/navigation/navigation.component';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './legal.html',
  styleUrls: ['./legal.css']
})
export class Legal {
  
}