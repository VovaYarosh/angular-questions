import { Component } from '@angular/core';
import {techStackEnum} from "./data/tech.stack";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public searchValue: string = '';
  public technology: string = techStackEnum.REACT;
}
