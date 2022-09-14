import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  public transform(value: string, predicate: string): string {
    if(!predicate){
      return value;
    }
    return value?.replace(new RegExp(predicate, 'gi'), `<mark>${predicate}</mark>`);
    }

}
