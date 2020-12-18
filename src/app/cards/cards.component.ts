import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards: Array<any> = [
    { img: '../../assets/images/card1.png', title: 'Islamic Dua' },
    { img: '../../assets/images/card2.png', title: 'Allah Ibadat In Islam' },
    { img: '../../assets/images/card3.png', title: 'Black Magic' },
    { img: '../../assets/images/card4.png', title: 'Sifli Ilm' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
