import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nTimes'
})
export class TimesPipe implements PipeTransform {
    transform(value: any): any {
        const result = new Array(value).fill(0);

        return result;
    }
}