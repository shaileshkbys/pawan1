import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  name: string
  banner_data: Array<any> = [
    {title: 'Get Lost Love Back', img: '../../assets/images/b1.jpg'},
    {title: 'Family Problem Solution', img: '../../assets/images/b2.jpg'},
    {title: 'Business Problem Solution', img: '../../assets/images/b3.jpg'},
    {title: 'Love Marriage Solution', img: '../../assets/images/b4.jpg'}
  ]

  constructor(private dataService: DataService) {
    this.name = dataService.name
  }

  ngOnInit(): void {
  }

}
