import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../Services/data.service';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss'],
})
export class EmailPreviewComponent implements OnInit {
  dataPreview: any[] = [];
  toggleUp = false;
  toggleDown = false;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.dataPreview = this.dataService.getDataBox(param['id']);
    });
  }
  sortDate(event: any) {
    const dataToggle = event.target.getAttribute('data-toggle');
    if (dataToggle === 'buttonDown') {
      this.toggleDown = !this.toggleDown;
      this.toggleUp = false;
      this.dataPreview.sort((a, b) => {
        const dateItem_1 = a.date.toLowerCase();
        const dateItem_2 = b.date.toLowerCase();
        if (dateItem_1 < dateItem_2) {
          return 1;
        } else if (dateItem_1 > dateItem_2) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    if (dataToggle === 'buttonUp') {
      this.toggleUp = !this.toggleUp;
      this.toggleDown = false;
      this.dataPreview.sort((a, b) => {
        const dateItem_1 = a.date.toLowerCase();
        const dateItem_2 = b.date.toLowerCase();
        if (dateItem_1 < dateItem_2) {
          return -1;
        } else if (dateItem_1 > dateItem_2) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }
}
