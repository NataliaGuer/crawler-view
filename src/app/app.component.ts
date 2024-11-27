import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';
import { LinkGraphComponent } from './link-graph/link-graph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, LinkGraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crawler-view';
}
