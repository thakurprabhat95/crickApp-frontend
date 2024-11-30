import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,UpperCasePipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crcikappfrontend';
}
