import { Component } from '@angular/core';
import { NgIconsComponent } from '../../../ng-icons/src/public-api';

@Component({
  selector: 'app-root',
  imports: [NgIconsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-icons-app';
}
