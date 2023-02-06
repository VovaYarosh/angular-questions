import {Component, EventEmitter, Output} from '@angular/core';
import {techStack, techStackEnum, TechStackType} from '../../data/tech.stack';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent{
  @Output() public onTech: EventEmitter<string> = new EventEmitter<string>();
  public technology: string = techStackEnum.REACT;
  public techStack: TechStackType = techStack;
  public techStackArray: string[] = Object.values(techStackEnum);
  public countOfQuestions: number = techStack[techStackEnum.REACT].length

  public chooseTech(technology: string): void {
    this.technology = technology;
    this.countOfQuestions = techStack[this.technology as keyof TechStackType].length
    this.onTech.next(this.technology);
  }
}
