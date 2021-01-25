import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { EditProductComponent } from './ui/edit-product/edit-product.component';
import { AddProductComponent } from './ui/add-product/add-product.component';
import { MypypiPipe } from './shared/pipes/mypypi.pipe';
import { Mypypi2Pipe } from './shared/pipes/mypypi2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoComponent,
    TableWorkersComponent,
    EditProductComponent,
    AddProductComponent,
    MypypiPipe,
    Mypypi2Pipe,
    
  ],
  imports: [
    BrowserModule,FormsModule, NgbModule,
    TextMaskModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
