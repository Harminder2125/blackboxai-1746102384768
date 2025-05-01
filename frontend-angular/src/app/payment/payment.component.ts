import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent {
  paymentSuccess = false;

  simulatePayment() {
    // Simulate payment process
    setTimeout(() => {
      this.paymentSuccess = true;
    }, 2000);
  }
}
