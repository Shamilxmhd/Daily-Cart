import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts: any = []
  constructor(private api: ApiService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getAllProduct()
  }

  getAllProduct() {
    this.api.getAllProductsAPI().subscribe({
      next: (res: any) => {
        this.allProducts = res
      },
      error: (reason: any) => {
        console.log(reason);

      }
    })
  }

  addToWishlist(product: any) {
    if (sessionStorage.getItem('token')) {
      // proceed to wishlist
      this.api.addtowishlistAPI(product).subscribe({
        next: (res: any) => {
          this.toaster.success(`Product ${res.title} added to your wishlist`)
          this.api.getWishlistCount()
        },
        error: (reason: any) => {
          console.log(reason);
          this.toaster.warning(reason.error)
        }
      })
    } else {
      this.toaster.info('Please Login!!!')
    }
  }

  addToCart(product: any) {
    if (sessionStorage.getItem('token')) {
      // proceed to cart
      product.quantity = 1
      this.api.addToCartAPI(product).subscribe({
        next: (res: any) => {
          this.toaster.success(res)
          this.api.getCardCount()
        },
        error: (reason: any) => {
          this.toaster.warning(reason.error)
        }
      })
    } else {
      this.toaster.info('Please Login!!!')
    }
  }


}
