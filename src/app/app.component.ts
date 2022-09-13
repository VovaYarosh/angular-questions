import {Component, OnInit} from '@angular/core';
import {questionsArray} from 'src/questions.array';
import {Question} from "./question.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  searchText = '';
  questions: Question[] = questionsArray;

  ngOnInit(){
    console.log(this.questions.length)
    this.questions.forEach((item, index) => {
      console.log(index)
      if(!item.english){
        console.log(item)
      }
    })

  }

  public onSearch(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }
}
