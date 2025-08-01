import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarNavigationComponent } from "./modules/toolbar-navigation/toolbar-navigation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fake-store';
}
