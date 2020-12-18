import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endlist',
  templateUrl: './endlist.component.html',
  styleUrls: ['./endlist.component.css'],
})
export class EndlistComponent implements OnInit {
  lists: Array<Array<string>>;

  constructor() {
    this.lists = [
      [
        'Vashikaran Services',
        'Vashikaran Specialist',
        'Vashikaran Expert Baba',
        'Vashikaran Mantra',
        'Love Vashikaran Expert',
        'Love Marriage Specialist',
        'Love Astrology Specialist',
        'Husband Wife Problem',
        'Love Intercaste Marriage Solution',
        'Vashikaran Specialist Baba Ji'
      ],
      [
        'Love Marriage Services',
        'Vashikaran For Love',
        'Muslim Astrologer In India',
        'Vashikaran Astrology In India',
        'Dua For Getting Married',
        'Dua For Getting Job',
        'Dua For Getting Job Abroad',
        'Dua For Something You Really Want',
        'Vashikaran Specialist In Jalandhar',
        'Love Vashikaran Specialist'
      ],
      [
        'Love Problem Services',
        'Fast Vashikaran',
        'Get Love Back By Vashikaran',
        'Dua For Love',
        'Dua For Strong Memory',
        'Dua For Health',
        'Most Powerful Vashikaran For Love',
        'Vashikaran Specialist In Pathankot',
        'Vashikaran For Husband',
        'Vashikaran Specialist In Mohali'
      ],
      [
        'Black Magic Services',
        'Islamic Vashikaran Specialist',
        'Best Vashikaran Specialist',
        'Dua For Girlfirend Back',
        'Dua For Boyfriend Back',
        'Dua For Husband And Wife Problem Solution',
        'Divorce Problem Solution',
        'Dua For Finding True Love',
        'Vashikaran Specialist In Pune',
        'Vashikaran For Wife'
      ]
    ];
  }

  ngOnInit(): void {}
}
