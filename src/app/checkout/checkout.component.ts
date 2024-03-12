import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  checkoutStatus: boolean = false

  checkoutForm = this.fb.group({
    name: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.required]],
    address: ['', [Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required]],
    pincode: ['', [Validators.pattern('[0-9 ]*'), Validators.required]]
  })

  constructor(private fb: FormBuilder, private toaster: ToastrService) { }

  cancel() {
    this.checkoutForm.reset()
  }

  proceedToBuy() {
    if (this.checkoutForm.valid) {
      this.checkoutStatus = true
    } else {
      this.toaster.info('invalid form!!!')
    }

  }
}
