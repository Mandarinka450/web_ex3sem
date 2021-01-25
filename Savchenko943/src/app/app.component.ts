import { Input,Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []

})
export class AppComponent {
  title = 'Список покупок';
  
 
  constructor(){}

  ngOnInit(): void {
    
  }
}