import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../../question.interface';
import { techStack } from '../../data/tech.stack';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public onTech: EventEmitter<string> = new EventEmitter<string>();
  public technology: string = 'angular';
  public questions: Question[] = techStack[this.technology];
  public techStack: string[] = Object.keys(techStack);

  public chooseTech(technology: string): void {
    this.technology = technology;
    this.onTech.next(this.technology);
  }
}
