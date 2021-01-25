import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypypi2'
})
export class Mypypi2Pipe implements PipeTransform {

  transform(products:any[]):any[] {
    products = products.sort((a,b) => a.status - b.status);
    return products.sort((a,b) => a.status.localeCompare(b.status));
    
  }

}
