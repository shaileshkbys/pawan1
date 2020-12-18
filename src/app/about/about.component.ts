import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: string
  phone_number: string

  constructor(private dataService: DataService) {
    this.name = dataService.name
    this.phone_number = dataService.phone_number
  }

  ngOnInit(): void {
  }

}
