import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  myForm2: FormGroup = new FormGroup({
    "name": new FormControl("",[Validators.required]),
    "quantity": new FormControl("", [Validators.required]),
    "status": new FormControl("", [Validators.required]),
  });
  @Input() name: string;
  @Input() id: number;
  @Input() quantity: number;
  @Input() status: boolean;
  @Input() type: 0;
  @Output() editProduct = new EventEmitter<object>();
  @Output() deleteProductedit = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  onEditProduct() {
    this.editProduct.emit({
      id: this.id,
      name: this.myForm2.controls["name"].value ,
      quantity: this.myForm2.controls["quantity"].value,
      type:0,
      status: this.myForm2.controls["status"].value,
    });
  }
  onDeleteProduct(id: number) {
    this.deleteProductedit.emit(this.id);
  }

}
