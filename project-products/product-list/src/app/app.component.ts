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
