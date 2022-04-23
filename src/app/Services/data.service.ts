import { Injectable } from '@angular/core';
import data from 'src/assets/messages';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getDataBox(box: string) {
    return data.filter((item: any) => {
      return item.folder === box;
    });
  }
  getEmailDetail(id: any) {
    return data.find((email) => {
      return email._id === id;
    });
  }
}
