import { Pipe, PipeTransform } from '@angular/core';
import {Question} from "../question.interface";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Question[], value: string): Question[] {
    if (!items) return [];
    if(value) {
      let filteredTitles = items
        .filter(({title}) => title.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1)
      let titlesWithWhat = filteredTitles
        .filter(({title}) => title.toLocaleLowerCase().indexOf('what') > -1)
      let filteredEnglish = items
        .filter(({english}) => english.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1)
      let filteredUkrainian  = items
        .filter(({ukrainian}) => ukrainian.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1)

      return [...titlesWithWhat,...filteredTitles, ...filteredEnglish, ...filteredUkrainian]
             .filter((value, index, self) => self.indexOf(value) === index)


    }
    else {
      return items;
    }
  }

}
