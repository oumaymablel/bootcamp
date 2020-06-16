import { Component } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'FormSubscription';
  public user = { firstname: '',lastname:'',age:'',phone:'',email:'',region:'',motivation:''}
  constructor(private registerService: RegisterService){}
  ngOnInit(){
  }
  post() {
    this.registerService.postEvents(this.user);
}
}


