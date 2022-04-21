import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  active = '';
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.dataPreview = this.dataService.getDataBox(param['id']);
    });
  }
  sortUp() {
    this.toggleUp = !this.toggleUp;
    this.toggleDown = false;
    if (this.toggleUp) {
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
  sortDown() {
    this.toggleDown = !this.toggleDown;
    this.toggleUp = false;
    if (this.toggleDown) {
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
  }
  openEmailDetail(data: any) {
    this.active = data._id;
    this.router.navigateByUrl(
      this.router.url.split('(')[0] + `(detail:${data._id})`
    );
  }
}
