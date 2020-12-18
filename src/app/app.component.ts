import { Component } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'muslims-astrology';
  faArrowUp = faArrowUp
  faWhatsapp = faWhatsapp

  whatsapp = () => {
    window.open('https://wa.me/919521711833?text=Hi,%20I%20checked%20your%20site,%20I%20want%20your%20help!', 'blank');
  }
}
