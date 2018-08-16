import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservationform',
  templateUrl: './reservationform.component.html',
  styleUrls: ['./reservationform.component.css']
})
export class ReservationformComponent implements OnInit {
  name:string;
  cnic:string;
  date:Date;
  seat:string;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.name+"\n "+this.cnic+"\n "+this.date+"\n "+this.seat);
  }

}
