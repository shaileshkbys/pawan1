import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faWhatsapp = faWhatsapp
  name: string
  phone_number: string

  constructor(private dataService: DataService) {
    this.name = dataService.name
    this.phone_number = dataService.phone_number
  }

  ngOnInit(): void {
  }

}
