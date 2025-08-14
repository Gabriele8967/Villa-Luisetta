import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { I18nPipe } from '../pipes/i18n.pipe';

@Component({
  selector: 'app-home',
  imports: [RouterModule, NavigationComponent, I18nPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone : true,
})
export class Home {
}