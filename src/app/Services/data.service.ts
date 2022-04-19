import { Injectable } from '@angular/core';
import data from '../../assets/messages';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getDataBox(box: any) {
    return data.filter((item) => {
      return item.folder === box;
    });
  }
}
