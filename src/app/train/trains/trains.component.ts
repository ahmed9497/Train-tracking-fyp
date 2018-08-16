import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Train } from '../shared/train.model';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {


  trainU : Train;
  train :Train;

  constructor(private trainservice : AllservicesService , private toastr  : ToastrService) { }

  ngOnInit() {
    this.trainservice.casttrain.subscribe(train => 
      this.trainU = train
      );
      this.train = {   
        id : this.trainU.id,
        name : this.trainU.name,
        Train_No : '',
        Engine_No : '',
        Bogies : '',
        Seats : '',
        Economy_seats : '',
        Business_class : '',
        Destination : '',
        Source : '',
      }

  }

  onSubmit(){
    if(this.train.id == ''){
    this.trainservice.insertTrain(this.train);
    this.toastr.success("successfully Added","Congratulation");
  }
    else{
      this.trainservice.updateTrain(this.train);
      this.toastr.success("successfully Updated");
    }
  }

  
  
  }

