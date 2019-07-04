import { Component } from '@angular/core';
//import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ="my app"
  message:any;
  
  ngOnInit(){
    
  }
 //pc:string="hi priyanka";
 m($event){
   this.message=$event;
   console.log(this.message);
   
 }
}
