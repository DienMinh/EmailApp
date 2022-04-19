import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number, ...args: unknown[]): unknown {
    limit = limit ? limit : 30;
    if (value.length <= 25) {
      return value;
    }

    return value.substring(0, limit) + '...';
  }
}
