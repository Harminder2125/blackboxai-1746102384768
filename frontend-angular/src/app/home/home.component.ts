import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  invitationSamples = [
    { id: 1, title: 'Floral Wedding', imageUrl: 'https://images.pexels.com/photos/12345/flower-wedding.jpg' },
    { id: 2, title: 'Modern Party', imageUrl: 'https://images.pexels.com/photos/23456/party-modern.jpg' },
    { id: 3, title: 'Elegant Birthday', imageUrl: 'https://images.pexels.com/photos/34567/birthday-elegant.jpg' },
    { id: 4, title: 'Classic Invitation', imageUrl: 'https://images.pexels.com/photos/45678/classic-invitation.jpg' },
  ];
}
