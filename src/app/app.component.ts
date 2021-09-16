import { Component } from '@angular/core';
import { CommsService } from './comms.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vac=[];
  unvac=[];
  numVac=0;
  numUnvac=0;
  

  constructor(private comm:CommsService){
  this.vac=[]
  this.unvac=[]
  this.comm.getAllVac().subscribe(data => this.buildVac(data))
  this.comm.getAllUnvac().subscribe(data => this.buildUnvac(data))
  }

  buildVac(data:any){
    this.vac=Object.entries(data);
    this.checkNum()
    this.checkAllVac()
  }

  buildUnvac(data:any){
    this.unvac=Object.entries(data);
    this.checkNum()
    this.checkAllVac()
  }

  Vaccinate(id: string){
    var tempPerson = this.unvac.find(person => person[0] === id)
    console.log(tempPerson)
    console.log(tempPerson[1]['doses'])
    var tempDoses = tempPerson[1]['doses']+1
    this.comm.updateVac(id,tempDoses).subscribe(res => console.log(res))

    if(tempPerson[1]['vaccineType'] === "A" && tempDoses ===1){
      this.comm.createPerson({"name":tempPerson[1]['name'],"age":tempPerson[1]['age'],"date":tempPerson[1]['date'],"disease":tempPerson[1]['disease'], "vaccineType":tempPerson[1]['vaccineType'],"vaccined":1,"doses":tempDoses}).subscribe(res => console.log(res))
      this.comm.deletePerson(id).subscribe(res => console.log(res))
    }else if(tempPerson[1]['vaccineType'] === "B"&& tempDoses ===2){
 
      this.comm.createPerson({"name":tempPerson[1]['name'],"age":tempPerson[1]['age'],"date":tempPerson[1]['date'],"disease":tempPerson[1]['disease'], "vaccineType":tempPerson[1]['vaccineType'],"vaccined":1,"doses":tempDoses}).subscribe(res => console.log(res))
      this.comm.deletePerson(id).subscribe(res => console.log(res))
    }else if(tempPerson[1]['vaccineType'] === "C"&& tempDoses ===3){
    
      this.comm.createPerson({"name":tempPerson[1]['name'],"age":tempPerson[1]['age'],"date":tempPerson[1]['date'],"disease":tempPerson[1]['disease'], "vaccineType":tempPerson[1]['vaccineType'],"vaccined":1,"doses":tempDoses}).subscribe(res => console.log(res))
      this.comm.deletePerson(id).subscribe(res => console.log(res))
    }
    
    this.vac=[]
    this.unvac=[]

    this.comm.getAllVac().subscribe(data => this.buildVac(data))
    this.comm.getAllUnvac().subscribe(data => this.buildUnvac(data))
    this.checkAllVac()
    


    window.location.reload();
  }

  checkAllVac():boolean{
    return this.unvac.find(person => person[1]['disease'] === false && person[1]['age'] >=18 ) !==undefined
  }

  checkNum(){
    this.numVac=0
    this.numUnvac=0
    this.numVac=this.vac.length
    this.numUnvac=this.unvac.length
  }
}