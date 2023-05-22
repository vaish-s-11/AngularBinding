import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class  AppComponent{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  name:string='vaish';
  allowserverstatus=false;
  servername="";
  serverstatus="nothing animated";
  constructor(){
    setTimeout(()=>{
      this.allowserverstatus=true;
    },2000);
  }
 ngOnInit(){
   
 }
 onCreateserver(){
  this.serverstatus="ANIMATED!";
 }
 onUpdateServer(event:Event){
  this.servername=(<HTMLInputElement>event.target).value;
 }
}