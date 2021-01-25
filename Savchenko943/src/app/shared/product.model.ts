export class MyProduct{
    id?:number;
    name:string;
    type:number;
    quantity:number;
    status:boolean;
    constructor (id:number, name:string, type:number, status:boolean) {
        this.name = name;
        this.id = id;
        this.type = 0;
        this.status = false;
    }
}

export enum MyProductType{
    prod
}