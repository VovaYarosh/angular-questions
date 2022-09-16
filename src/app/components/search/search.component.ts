import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();

  public inputSearchValue(event: Event): void {
    this.onSearch.next((event.target as HTMLInputElement).value);
  }
}
