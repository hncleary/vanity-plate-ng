import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberTruncate'
})
/** Generate an abbreviated string to represent a rounded number (ex. 1,100,000 => '1.1M', 2,300 => '2.3K') */
export class NumberTruncatePipe implements PipeTransform {

  transform(num: number, decimalCount = 1): string {
    let outputVal = 0;
    if(num < 1000) { 
      return num.toString();
    } else if(num < 1000000) { 
      outputVal = (num / 1000);
      return outputVal.toFixed(decimalCount).toString() + 'K';
    } else if (num < 1000000000) { 
      outputVal = (num / 1000000);
      return outputVal.toFixed(decimalCount).toString() + 'M';
    } else {
      outputVal = (num / 1000000000);
      return outputVal.toFixed(decimalCount).toString() + 'B';
    }
  }

}
