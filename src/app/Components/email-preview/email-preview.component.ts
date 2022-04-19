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
  toggle: boolean = false;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.dataPreview = this.dataService.getDataBox(param['id']);
    });
  }
  sortDate() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.dataPreview.sort((a, b) => {
        let x = a.date.toLowerCase();
        let y = b.date.toLowerCase();
        if (x < y) {
          return -1;
        } else if (x > y) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      this.dataPreview.reverse();
    }
  }
}
