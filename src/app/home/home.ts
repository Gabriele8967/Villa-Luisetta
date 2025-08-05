import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, NavigationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone : true,
})
export class Home {
}