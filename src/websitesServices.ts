import { Injectable } from '@angular/core';

@Injectable()
export class WebsitesServices {
  getProductsData() {
    return [
      {
        name: 'منصة الانستجرام',
        image: '../assets/images/instagram.jpg',
      },
      {
        name: 'منصة الواتس اب',
        image: '../assets/images/whatsapp.png',
      },
      {
        name: 'منصة الفيسبوك',
        image: '../assets/images/facebook.png',
      },
      {
        name: 'منصة التلجرام',
        image: '../assets/images/telegram.png',
      },
      {
        name: 'منصة التويتر',
        image: '../assets/images/twitter.png',
      },
      {
        name: 'منصة لينكد ان',
        image: '../assets/images/linkedin.png',
      },
    ];
  }

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }

  async getProductsWithOrdersSmall() {
    const products = await this.getProductsWithOrders();
    return Promise.resolve(products.slice(0, 10));
  }

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsData());
  }
}
