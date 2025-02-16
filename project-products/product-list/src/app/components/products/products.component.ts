import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchText: string = '';

  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large', 
      name: 'Apple iPhone 13',
      description: 'Apple iPhone 13 128Gb',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium', 
      name: 'Apple 20W USB-C Power Adapter',
      description: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium', 
      name: 'iPhone 16 Pro Max',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h64/87059455344670.png?format=gallery-medium', 
      name: 'Apple Lightning (M), USB TypeC (M)',
      description: 'Кабель Apple Lightning (M), USB TypeC (M) белый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h78/82920434892830.jpg?format=gallery-medium', 
      name: 'NRS17083',
      description: 'Чехол NRS1708 розовый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/nrs1708-rozovyi-112638500/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium', 
      name: 'Электрочайник',
      description: 'Электрочайник BEREKE BR-810 серый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium', 
      name: 'Блендер Slaouwo',
      description: 'Блендер Slaouwo HB-2075 черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium', 
      name: 'Morbido диван',
      description: 'Morbido диван прямой Комфорт, обивка микровелюр, 80х210х80 см, серый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h95/85993320710174.jpg?format=gallery-medium', 
      name: 'Стол письменный',
      description: 'Стол письменный с надстройкой 40x114x140 см, stolpis002',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/stol-pis-mennyi-s-nadstroikoi-40x114x140-sm-stolpis002-106541589/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/hd6/63970146680862.jpg?format=gallery-medium', 
      name: 'Детское пюре',
      description: 'Детское пюре ФрутоНяня яблоко, абрикос, сливки 90 г',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/frutonjanja-jabloko-abrikos-slivki-90-g-100975503/?c=750000000'
    }
  ];

  filteredProducts() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      p.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  share(link: string, platform: string) {
    let url = '';
    if (platform === 'whatsapp') {
      url = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(url, '_blank');
  }
}
