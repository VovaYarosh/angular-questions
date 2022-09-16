import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../../question.interface';
import {techStack, techStackEnum} from '../../data/tech.stack';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public onTech: EventEmitter<string> = new EventEmitter<string>();
  public technology: string = techStackEnum.ANGULAR;
  public questions: Question[] = techStack[this.technology];
  public techStack: string[] = Object.keys(techStack);

  public chooseTech(technology: string): void {
    this.technology = technology;
    this.onTech.next(this.technology);
  }
}
