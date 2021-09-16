import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytn'
})
export class VacunasPipe implements PipeTransform {

  transform(value: boolean, ): string {
    let ans = 'NO'
    if(value){
      ans = 'YES'
    }
    return ans;
  }

}