import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { timingSafeEqual } from 'crypto';
import { ValueTransformer } from '../../../node_modules/@angular/compiler/src/util';
import { LatLngBounds } from '../../../node_modules/@agm/core';
import { Observable } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-maindash',
  templateUrl: './maindash.component.html',
  styleUrls: ['./maindash.component.css']
})
export class MaindashComponent implements OnInit {
  lat: number = 30.3753;
  lng: number = 69.3451;
  mylat:number;
  mylng:number;
  zoom: number = 8;
  public origin: {}
  public destination: {}
  icon: string = "assets/images/icon.png";
  routemarker :any[];
  //city_name: any[];
  a:any[];
  public mstation:any[];
  constructor(private service: AllservicesService) {

  }

  ngOnInit() {
     this.getUserLocation();
    this.getDirection();

     this.GetRoutemarker();
 

  }
  // choselocation(event) {
  //   console.log(event);
  //   this.lat = event.coords.lat;
  //   this.lng = event.coords.lng;
  // }
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.mylat=this.lat;
        this.mylng=this.lng;
      });
    }
  //   setTimeout(() => {    //<<<---    using ()=> syntax
  //     this.getUserLocation();
  //     this.lat = 32.4945;
  //     this.lng = 74.5229;

  //   }, 5000);
   }
  // removeMarker(marker) {
  //   console.log("remove marker is clicked");
  //   for (var i = 0; i < this.markers.length; i++) {
  //     if (marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
  //       this.markers.splice(i, 1);
  //     }
  //   }
  // }
  // onChange(deviceValue) {
  //   console.log(deviceValue);
  //   this.addMarker();
  // }
  // markers: marker[] = [
  //   {
  //     name: 'Sialkot',
  //     lat: 32.4945,
  //     lng: 74.5229,

  //     label: 'S',
  //     draggable: false
  //   },
  //   {
  //     name: 'Lahore',
  //     lat: 31.5204,
  //     lng: 74.3587,

  //     label: 'L',
  //     draggable: false
  //   },
  //   {
  //     name: 'Islamabad',
  //     lat: 33.6844,
  //     lng: 73.0479,

  //     label: 'I',
  //     draggable: false
  //   }
  // ]
  // addMarker(){
  //   this.markers.push({
  //     name:'Karachi',
  //     lat: 24.8607,
  //     lng:  67.0011,

  //     label: 'K',
  //     draggable: false
  //   })
  // }
  
  getDirection() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat+" LAT AND LNG "+this.lng);
        this.mylat=Number(this.lat);
        this.mylng=Number(this.lng);
      })
    }
    
     this.mylat=33.6844;
     this.mylng=73.0479;
    this.origin = { lat:this.mylat, lng:this.mylng}
    this.destination = { lat: 31.5204, lng: 74.3587 }
    console.log(this.origin);
    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label}--${index}`)
  }

  city_name : any = [];
  GetRoutemarker() {
    this.service.getTrainRoutes().forEach(element => {
      console.log(element);
    });
    this.routemarker=this.service.getdataofroute();
    console.log("route marker array ="+this.routemarker);
    
    this.city_name = this.service.getdataofcity_name();
    this.city_name.forEach(value =>  {
      console.log("this is value of city_name"+value);
    });
    this.routemarker = this.service.getdataofroute();
    
      // console.log(this.city_name[1]);
    
    
    
  }

 arr:any = [];
  addStation(value?){

    // this.service.UpdateStations();

    console.log("update is called");
    
    console.log("new sttion value = "+value);
    
 
   // this.arr = this.service.get_cities_station();

    this.service.MoreStation().subscribe(i =>this.mstation = i );
    this.arr = this.service.get_cities_station();
    // this.mstation.forEach(value=>{
    //   console.log(value);
      
    // });
    setTimeout(() => {
    this.arr.forEach(element => {
      console.log(element);
      ///this.a.push(element);
    });
    this.a=this.arr;
  this.a.push("N8GH891UB2XhtU0vvEQz");
  this.service.UpdateStations(this.a);
  },2000);
  
 
    // this.arr.forEach(value=>{
    //   console.log(value);
     
    // });
    // this.a.forEach(value=>{
    //   console.log(value);
     
    // });
    
    ;
    //console.log(this.mstation[0]);
  }




}



// just an interface for type safety.
interface marker {
  name: string,
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}


