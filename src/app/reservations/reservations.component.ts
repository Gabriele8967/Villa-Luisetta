import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../shared/navigation/navigation.component';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  standalone: true,
  imports: [CommonModule, NavigationComponent]
})
export class ReservationsComponent {
  
  timeSlots = [
    {
      id: 1,
      time: '19:00 - 20:30',
      label: 'Prenotazione',
      whatsappMessage: encodeURIComponent('Ciao Villa Luisetta! Vorrei prenotare un tavolo per le 19:00-20:30. Grazie!')
    },
    {
      id: 2,
      time: '20:30 - 22:30',
      label: 'Prenotazione',
      whatsappMessage: encodeURIComponent('Ciao Villa Luisetta! Vorrei prenotare un tavolo per le 20:30-22:30. Grazie!')
    },
    {
      id: 3,
      time: '22:30 - 00:30',
      label: 'Prenotazione',
      whatsappMessage: encodeURIComponent('Ciao Villa Luisetta! Vorrei prenotare un tavolo per le 22:30-00:30. Grazie!')
    }
  ];

  openWhatsApp(message: string) {
    const whatsappUrl = `https://wa.me/393247829723?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
}