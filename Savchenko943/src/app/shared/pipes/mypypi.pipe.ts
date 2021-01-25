import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypypi'
})
export class MypypiPipe implements PipeTransform {

  transform(products: any[], sortM: string): any[] {
    if (sortM === undefined){
      products = products.sort((function (a, b){
        if (a.status < b.status)
          return -1;
        else if (a.status > b.status)
          return 1;
        else
            return 0;
        }))
      return products
    } 
    else {
      switch(sortM){
        case 'alphavit':{
          products = products.sort((function (a, b){
            if (a.name < b.name)
              return -1;
            else if (a.name > b.name)
              return 1;
            else
                return 0;
            }))
            break;
        }
      }
      return products
    }
  }
}
