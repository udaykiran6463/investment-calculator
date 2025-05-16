import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InputFormComponent } from './input-form/input-form.component';

@Component({
  selector: 'app-root',
  imports:[HeaderComponent, InputFormComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl:"./app.component.css"
})
export class AppComponent {}
