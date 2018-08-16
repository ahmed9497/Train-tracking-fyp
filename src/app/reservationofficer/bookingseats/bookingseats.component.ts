import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { Driver } from 'selenium-webdriver/opera';
import { Train } from '../../train/shared/train.model';
import { emit } from 'cluster';
import { copyConfig } from '../../../../node_modules/@angular/router/src/config';

declare var $:any;
@Component({
  selector: 'app-bookingseats',
  templateUrl: './bookingseats.component.html',
  styleUrls: ['./bookingseats.component.css']
})
export class BookingseatsComponent implements OnInit,AfterViewInit {

  array = [];
  colour :boolean=true;   
  tempReserve = [];
  reserve_seats : any = [2,3,4,6,8];
  seat:number=200;
  trainTotalSeats : any = [];
  trainReservedSeats : any =[];
  item : any[];

  constructor(private service : AllservicesService) { 
  }
  ngAfterViewInit(){
    $('input').click(function(){
      // alert("Alert is calling on clik");
      // $(this).css("background-color", "red");
       if ($(this).css("background-color")=='rgb(255, 255, 255)'){
        $(this).css("background-color", "red");

        }
        else{
          $(this).css("background-color", "white");
        }
    
    });
  }
  ngOnInit() {
   
    this.populate(); 
    this.compare();
    this.array.forEach(i => console.log(i));
    this.trainReservedSeats = this.service.getTrainData2();
    console.log(this.trainReservedSeats);
    this.trainReservedSeats = this.service.getTraindataforid();
    console.log(this.trainReservedSeats);
    

  //  .forEach(element => {
  //    console.log(element);
  //  });

    // this.trainReservedSeats[0];
      
  //   $('button').click(function(){
  //    // alert("Alert is calling on clik");
  //     if (this.colour){
  //     $(this).css("color", "red");
  //       this.colour=false;
  //     }
  //     else{
  //       $(this).css("color", "blue");
  //       this.colour=true;
  //     }
     
  //   });
  //   $("#b").click(function(){
  //     alert("You entered p1!");
  // });
  //   $("p" , "#b").click(function(){
  //     alert("The paragraph was clicked.");
  //     $(this).hide(); 
  // });
   
}



populate(){
    for(let i=0;i < Number(this.trainReservedSeats) ;i++){  
      this.array.push(i.toString());

    }

    // $.each(this.array, function( index, value ) {
    //   alert( index + ": " + value );
    // });
  }

compare(){
  for(var i = 0; i<this.reserve_seats.length ; i++){
    for(var ii= 0 ; ii< this.array.length ; ii++){
      if(this.array[ii]== this.reserve_seats[i]){
        this.array[ii] = 'reserve';
      }
    }
  }
}



confirmClick(){
  for(var i = 0 ; i<=this.tempReserve.length ; i++){
    this.reserve_seats.push(this.tempReserve[i]);
  }
}

saveInTempArray(b){
   var a = true;
   for(var i = this.tempReserve.length - 1; i >= 0; i--) {
    if(this.tempReserve[i] === b) {
       this.tempReserve.splice(i, 1);
       a=false;
       this.tempReserve.forEach(i => console.log(i));
       
    }
  }  
  console.log(a);
  if(a==true){
      this.tempReserve.push(b);
    }
}
  COLOR(b,valuee){
    console.log("buttin is clicked"+b+" "+ valuee.target.value);
    // $('button').click(function(){
    //      // alert("Alert is calling on clik");
    //       if (this.colour){
    //       $(this).css("color", "red");
    //         this.colour=false;
    //       }
    //       else{
    //         $(this).css("color", "blue");
    //         this.colour=true;
    //       }
         
    //     });

}

}
