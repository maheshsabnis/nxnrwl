import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathServiceService {

  constructor() {
    console.log('====================================');
    console.log("The Service");
    console.log('====================================');
   }

   getPower(x: number,y:number):number{
    return Math.pow(x,y);
   }

}
