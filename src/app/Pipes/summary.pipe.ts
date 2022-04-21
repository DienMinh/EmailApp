import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number, ...args: unknown[]): unknown {
    limit = limit ? limit : 25;
    return value.length <= 25 ? value : `${value.substring(0, limit)}...`;
  }
}
