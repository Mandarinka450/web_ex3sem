import { Component, OnInit } from '@angular/core';
import { MyProduct, MyProductType } from '../shared/product.model';
import { MyserviceService } from '../shared/services/myservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MyserviceService]
  
})
export class MainComponent implements OnInit {
  title = 'Список покупок';
  products:MyProduct[];
  myProductType = MyProductType;
  sortM: string;
  constructor(private MyserviceService: MyserviceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getByType(type:number){
    return this.products.filter((product) => product.type === type);
  }
  async getData(){
    try {
      this.products = await this.MyserviceService.getProducts();
    } catch (e){
      console.log(e)
    }
  }
  async onDeleteProduct(id: number){
    try {
      await this.MyserviceService.deleteProducts(id)
    } catch (e) {
      console.error(e)
    } finally {
      await this.getData()
    }
  }
  async onEditProduct(editBestWorker){
    try {
      await this.MyserviceService.putProducts(editBestWorker)
    } catch (e){
      console.error(e)
    } finally {
      await this.getData()
    }
  }

  async onAddProduct(product: MyProduct){
    let id = this.products.length>0? this.products[this.products.length -1].id+1:0;
    product.id=id;
    try {
      await this.MyserviceService.postProducts(product)
    } catch (e) {
      console.error(e);
    } finally {
      await this.getData()
    }
  }

}
