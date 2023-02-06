import { Pipe, PipeTransform } from '@angular/core';
import {Question} from "../question.interface";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Question[], value: string): Question[] {
    if (!items) return [];
    if(value) {
      return items.filter(({title, english, ukrainian}) => {
        return(
          title.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
          ||
          english?.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
          ||
          ukrainian?.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
        )
      });

    }
    else {
      return items;
    }
  }

}
