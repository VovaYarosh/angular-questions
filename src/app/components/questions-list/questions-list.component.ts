import { Component, Input } from '@angular/core';
import { Question } from '../../question.interface';
import { questionsArray } from '../../../questions.array';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
})
export class QuestionsListComponent {
  @Input() public searchText: string = '';
  public questions: Question[] = questionsArray;
}
