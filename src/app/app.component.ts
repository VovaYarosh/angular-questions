import {Component, OnInit} from '@angular/core';
import {questionsArray} from 'src/questions.array';
import {Question} from "./question.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  searchText = '';
  questions = questionsArray;


  public onSearch(event: Event): void {
    console.log(this.questions)
    this.searchText = (event.target as HTMLInputElement).value;
  }
}
