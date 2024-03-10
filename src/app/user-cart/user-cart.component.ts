import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  allProducts: any = []
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.getCart()
    }
  }

  getCart() {
    this.api.getCartAPI().subscribe({
      next: (res: any) => {
        this.allProducts = res
        console.log(this.allProducts);

      },
      error: (reason: any) => {
        console.log(reason);

      }
    })
  }

  deleteItem(id: any) {
    this.api.removeCartItemAPI(id).subscribe({
      next: (res: any) => {
        this.getCart()
        this.api.getCardCount()
      },
      error: (reason: any) => {
        console.log(reason.error);
      }
    })
  }

  incrementQuantity(id: any) {
    this.api.incrementCartAPI(id).subscribe({
      next: (res: any) => {
        this.getCart()
        this.api.getCardCount()
      },
      error: (reason: any) => {
        console.log(reason.error);
      }
    })
  }

  decrementQuantity(id: any) {
    this.api.decrementCartAPI(id).subscribe({
      next: (res: any) => {
        this.getCart()
        this.api.getCardCount()
      },
      error: (reason: any) => {
        console.log(reason.error);
      }
    })
  }

  emptyCart(){
    this.api.emptyCartAPI().subscribe({
      next: (res: any) => {
        this.getCart()
        this.api.getCardCount()
      },
      error: (reason: any) => {
        console.log(reason.error);
      }
    })
  }

}
