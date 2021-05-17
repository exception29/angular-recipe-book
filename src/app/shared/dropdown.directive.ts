import { ElementRef } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  
    constructor(private _el: ElementRef) { 
    }
    @HostBinding('class.show') isOpen = false;
    @HostListener('click') toggleOpen(){
      this.isOpen=!this.isOpen;
      if(this.isOpen){
        this._el.nativeElement.querySelector('.dropdown-menu').classList.add('show'); 
      }
      else{
        this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
      }
    }

    // @HostBinding('class.open') isOpen= false;

  // @HostListener('click') toggleOpen(){
  //   this.isOpen =!this.isOpen;
  // }

  

  // constructor() { }

}
