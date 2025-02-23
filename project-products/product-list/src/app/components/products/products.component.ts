import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  likes: number;
  categoryId: number; // ID категории
}
interface Category {
  id: number;
  name: string;
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
   @Input() selectedCategoryId: number | null = null;

  categories: Category[] = [  
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Аксессуары' },
    { id: 3, name: 'Бытовая техника' },
    { id: 4, name: 'Мебель' }
  ];

  products: Product[] = [
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg', 
      name: 'Apple iPhone 13', 
      description: 'Apple iPhone 13 128Gb', 
      rating: 4.9, 
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/', 
      likes: 0,
      categoryId: 1 // Смартфоны
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png', 
      name: 'iPhone 16 Pro Max', 
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/', 
      likes: 0,
      categoryId: 1 
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium', 
      name: 'Xiaomi Redmi 13C', 
      description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000', 
      likes: 0,
      categoryId: 1 
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p1f/19792401.jpeg?format=gallery-medium', 
      name: 'Poco X7 Pro', 
      description: 'Смартфон Poco X7 Pro 12 ГБ/512 ГБ черный', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/poco-x7-pro-12-gb-512-gb-chernyi-133345346/?c=750000000', 
      likes: 0,
      categoryId: 1 
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium', 
      name: 'Samsung Galaxy S23 Ultra 12', 
      description: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000', 
      likes: 0,
      categoryId: 1 
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg', 
      name: 'Apple 20W USB-C Power Adapter', 
      description: 'Зарядное устройство Apple 20W USB-C', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/', 
      likes: 0,
      categoryId: 2 // Аксессуары
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium', 
      name: 'Apple iPhone 13', 
      description: 'Чехол Для Apple iPhone 13 прозрачный', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000', 
      likes: 0,
      categoryId: 2
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h2a/84622225866782.jpg?format=gallery-medium', 
      name: 'Apple iPhone 13', 
      description: 'Чехол Для Apple iPhone 13 черный', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-chernyi-113767097/?c=750000000', 
      likes: 0,
      categoryId: 2
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/hb4/87349468266526.jpg?format=gallery-medium', 
      name: 'Чехол EMY', 
      description: 'Чехол EMY для Apple iPhone 16 Pro прозрачный', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/emy-dlja-apple-iphone-16-pro-prozrachnyi-124504364/?c=750000000', 
      likes: 0,
      categoryId: 2
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h64/87059455344670.png', 
      name: 'Apple Lightning Cable', 
      description: 'Кабель Apple Lightning - USB TypeC', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/', 
      likes: 0,
      categoryId: 2
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg', 
      name: 'Электрочайник BEREKE BR-810', 
      description: 'Электрочайник серый', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/', 
      likes: 0,
      categoryId: 3 // Бытовая техника
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium', 
      name: 'Deerma DX700', 
      description: 'Пылесос Deerma DX700 белый', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000', 
      likes: 0,
      categoryId: 3
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/hd5/63935744770078.jpg?format=gallery-medium', 
      name: 'Electronic SF-400', 
      description: 'Кухонные весы Electronic SF-400', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/electronic-sf-400-100806263/?c=750000000', 
      likes: 0,
      categoryId: 3
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/p85/19829459.png?format=gallery-medium', 
      name: 'Smayda WH', 
      description: 'Пароочиститель Smayda WH-QX001 белый', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/smayda-wh-qx001-belyi-121366248/?c=750000000', 
      likes: 0,
      categoryId: 3
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg', 
      name: 'Блендер Slaouwo HB-2075', 
      description: 'Блендер черный', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/', 
      likes: 0,
      categoryId: 3
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png', 
      name: 'Morbido диван', 
      description: 'Morbido диван прямой', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/', 
      likes: 0,
      categoryId: 4 // Мебель
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h95/85993320710174.jpg', 
      name: 'Стол письменный', 
      description: 'Стол письменный с надстройкой', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/stol-pis-mennyi-s-nadstroikoi-40x114x140-sm-stolpis002-106541589/', 
      likes: 0,
      categoryId: 4
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium', 
      name: 'Вешалка напольная', 
      description: 'Вешалка напольная, izox, металл, 110x150 см, черный', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000', 
      likes: 0,
      categoryId: 4
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-medium', 
      name: 'ТВ-тумба напольная', 
      description: 'Вешалка напольная, izox, металл, 110x150 см, черный', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000', 
      likes: 0,
      categoryId: 4
    },
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hea/84870309380126.png?format=gallery-medium', 
      name: 'Матрас Ортопед без пружин', 
      description: 'Матрас Ортопед без пружин, 160x200x22 см, чехол вискоза, жаккард', 
      rating: 4.8, 
      link: 'https://kaspi.kz/shop/p/matras-ortoped-bez-pruzhin-160x200x22-sm-chehol-viskoza-zhakkard-115839796/?c=750000000', 
      likes: 0,
      categoryId: 4
    },
    
  ];


  filteredProducts() {
    return this.products.filter(p =>
      (this.selectedCategoryId === null || p.categoryId === this.selectedCategoryId) &&
      (p.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
       p.description.toLowerCase().includes(this.searchText.toLowerCase()))
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

  sortAscending() {
    this.products.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  sortDescending() {
    this.products.sort((a, b) => b.name.localeCompare(a.name));
  }
  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
  
  likeProduct(index: number) {
    this.products[index].likes++;
  }
  
}
