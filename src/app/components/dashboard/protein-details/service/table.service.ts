import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../../../../core/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class TableService {
private readonly products:Product[] = [
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    manufacturer: 'Bamboo Inc.',
    warranty: '2 years',
    color: 'Brown',
    weight: '0.5 kg',
    dimensions: '10x10x5 cm'
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    manufacturer: 'Bamboo Inc.',
    warranty: '2 years',
    color: 'Brown',
    weight: '0.5 kg',
    dimensions: '10x10x5 cm'
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    manufacturer: 'Bamboo Inc.',
    warranty: '2 years',
    color: 'Brown',
    weight: '0.5 kg',
    dimensions: '10x10x5 cm'
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    manufacturer: 'Bamboo Inc.',
    warranty: '2 years',
    color: 'Brown',
    weight: '0.5 kg',
    dimensions: '10x10x5 cm'
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    manufacturer: 'Bamboo Inc.',
    warranty: '2 years',
    color: 'Brown',
    weight: '0.5 kg',
    dimensions: '10x10x5 cm'
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    manufacturer: 'Bamboo Inc.',
    warranty: '2 years',
    color: 'Brown',
    weight: '0.5 kg',
    dimensions: '10x10x5 cm'
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    manufacturer: 'Bamboo Inc.',
    warranty: '2 years',
    color: 'Brown',
    weight: '0.5 kg',
    dimensions: '10x10x5 cm'
  }
];
public readonly productDetailsProvider:WritableSignal<Product[]> = signal<Product[]>(this.products);
  constructor() { }
}
