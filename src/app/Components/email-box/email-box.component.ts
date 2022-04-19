import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.scss'],
})
export class EmailBoxComponent implements OnInit {
  boxs = [
    {
      name: 'Inbox',
      value: 'inbox',
      open: false,
    },
    {
      name: 'Finance',
      value: 'finance',
      open: false,
    },
    {
      name: 'Travel',
      value: 'travel',
      open: false,
    },
    {
      name: 'Personal',
      value: 'personal',
      open: false,
    },
    {
      name: 'Drafts',
      value: 'drafts',
      open: false,
    },
    {
      name: 'Sent',
      value: 'sent',
      open: false,
    },
  ];
  active: string = 'inbox';
  constructor(private router: Router, route: ActivatedRoute) {}

  ngOnInit(): void {
    this.boxs[0].open = true;
  }

  openBox(box: any) {
    this.boxs.forEach((box) => {
      box.open = false;
    });
    box.open = !box.open;
    this.active = box.value;
    this.router.navigate(['messages/' + box.value]);
  }
}
