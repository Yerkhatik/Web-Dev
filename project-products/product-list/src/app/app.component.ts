import { Component } from '@angular/core';
import { ProductsComponent } from './components/products/products.component'; 

@Component({
  selector: 'app-root',
  standalone: true, // Standalone-компонент
  imports: [ ProductsComponent], // Добавляем сюда ProductsComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-list';
}
/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';

// Интерфейс категории
interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategoryId: number | null = null;

  // ✅ Добавляем список категорий
  categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Аксессуары' },
    { id: 3, name: 'Бытовая техника' },
    { id: 4, name: 'Мебель' }
  ];

  // ✅ Метод для выбора категории
  selectCategory(categoryId: number | null) {
    this.selectedCategoryId = categoryId;
  }
}
*/ 