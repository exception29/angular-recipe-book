import { EventEmitter } from "@angular/core";
import { Address } from "../person/address.model";
import { Personal } from "../person/personal.model";

export class PersonService{

    persons:Personal[] =[new Personal('Ankita Walunj', 23, '29-04-1999', new Address('flat 8 ', 'Shaan Terrace','Marketyard','Pune')),
    new Personal('Ayush', 16, '11-01-2006', new Address('flat 8 ', 'Shaan Terrace','Marketyard','Pune')),
    new Personal('Ronak Sehgal', 20, '29-06-2001', new Address('flat 10', 'Ram Niwas','Tagore Road','Banglore'))]

    getDetails(){
        return this.persons.slice();  // create a copy of array of recipes and returns it 
        }   



   
}