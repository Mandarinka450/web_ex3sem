import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyProduct } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  routeApi = 'http://localhost:3000/products';


  constructor(private http: HttpClient) { }

  getProducts():Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }
  postProducts(data: MyProduct){
    return this.http.post(this.routeApi, data).toPromise();
  }
  deleteProducts(id: number){
    const url = `${this.routeApi}/${id}`
    return this.http.delete(url).toPromise();
  }
  putProducts(product: MyProduct){
    const url = `${this.routeApi}/${product.id}`
    return this.http.put(url, product).toPromise();
  }
  
}
