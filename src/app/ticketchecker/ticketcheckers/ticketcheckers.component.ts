import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Ticketchecker } from '../shared/ticketchecker.model';

@Component({
  selector: 'app-ticketcheckers',
  templateUrl: './ticketcheckers.component.html',
  styleUrls: ['./ticketcheckers.component.css']
})
export class TicketcheckersComponent implements OnInit {

  ticketcheckerU : Ticketchecker;
  ticketchecker : Ticketchecker;
  constructor(private ticketcheckerservice : AllservicesService , private toastr  : ToastrService) { }

  ngOnInit() {
    this.ticketcheckerservice.castticketcheckrer.subscribe(ticketchecker => 
      this.ticketcheckerU = ticketchecker
      );
      this.ticketchecker = {   
        id : this.ticketcheckerU.id,
        name : this.ticketcheckerU.name,
        Cnic : '',
        ContactNo: '',
        Experience : '',
        Skills : '',
        Education : '',
        Address : '',
        Email : '',
        Password : '',
      }

  }

  onSubmit(){
    if(this.ticketchecker.id == ''){
    this.ticketcheckerservice.insertTicketChecker(this.ticketchecker);
    this.toastr.success("successfully Added","Congratulation");
      
  }
    else{
      this.ticketcheckerservice.updateTicketChecker(this.ticketchecker);
      this.toastr.success("successfully Updated");
      
    }
  }

  
}
