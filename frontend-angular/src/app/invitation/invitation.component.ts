import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
})
export class InvitationComponent implements OnInit {
  invitationId: number | null = null;
  userInput = {
    name: '',
    date: '',
    location: '',
    message: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.invitationId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
