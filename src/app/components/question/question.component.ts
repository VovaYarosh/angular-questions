import { Component, Input } from '@angular/core';
import { Question } from '../../question.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() public question!: Question;
  @Input() public searchText: string = '';
}
