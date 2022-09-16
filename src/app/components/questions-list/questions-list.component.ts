import { Component, Input, OnChanges} from '@angular/core';
import { Question } from '../../question.interface';
import {techStack, techStackEnum} from '../../data/tech.stack';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
})
export class QuestionsListComponent implements OnChanges {
  @Input() public searchText: string = '';
  @Input() public technology: string = techStackEnum.ANGULAR;
  public questions: Question[] = techStack[this.technology];

  public ngOnChanges(): void {
    this.questions = techStack[this.technology];
  }
}
