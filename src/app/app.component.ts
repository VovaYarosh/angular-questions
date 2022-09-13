import { Component } from '@angular/core';
import questions from 'src/jsons/angular.json';
import {Question} from "./question.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText = '';
  questions: Question[] = questions;

  public onSearch(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }
}
