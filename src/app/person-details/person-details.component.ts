import { Component, OnInit } from '@angular/core';
import { Personal } from '../person/personal.model';
import { PersonService } from './Person.service';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
  providers:[PersonService]
})
export class PersonDetailsComponent implements OnInit {
  constructor(private personService:PersonService) { }
  persons:Personal[];
  ngOnInit(){
    this.persons = this.personService.getDetails();
    
  }
 


 

}
