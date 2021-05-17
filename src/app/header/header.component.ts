import { Component, Output } from "@angular/core";
import {EventEmitter} from "@angular/core";
import { DataSorageService } from "../shared/data-storage.service";

@Component({

    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output() featureSelected = new EventEmitter<string>();  

    constructor(private dataStorageService:DataSorageService){

    }

    // gives selected feature to app.html
    //@Output allows child to send data to parent component ie. app 
    //featureSelected is name of @Output()
    //EventEmitter<string> -  the @Output()'s type
    //new EventEmitter<string>()  -tells Angular to create a new event emitter and that the data it emits is of type string.
    
    // onSelect(feature:string){

    //     this.featureSelected.emit(feature);

    // }

    onSaveData(){

        this.dataStorageService.storeRecipes();

    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe(); // as it returns data
    }

}
