import { Component } from '@angular/core';
import { MathServiceService } from 'libs/my-app-lib/src/lib/math-service/math-service.service';

@Component({
  standalone:true,
  selector: 'hltingnx-math-component',
  templateUrl: './math-component.component.html',
  styleUrls: ['./math-component.component.css'],
})
export class MathComponentComponent {

  constructor(private serv:MathServiceService){

  }

  getPow(){
     const result = this.serv.getPower(4,5);
     alert(result);
  }
}
