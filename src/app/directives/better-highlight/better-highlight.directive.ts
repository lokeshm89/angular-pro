import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
//using renderer instead of elementref
  //using elementref to get the element
  constructor(private ref:ElementRef,private renderer : Renderer2) { }
  //to react to the events when we are not using renderer in that case use hostbinding
  //bind it to the property and give the styel as argument
  @HostBinding('style.backgroundColor') Color:string = 'transparent';
  ngOnInit() {
    //setStyle is used to set the style for a element by adding the element //use ref to get the element
    //pass the reference for the element as the first argument , style as 2nd and value as 3rd
    this.renderer.setStyle(this.ref.nativeElement,'text-transform','uppercase')
    this.renderer.setStyle(this.ref.nativeElement,'backgroundColor','orange')
    this.renderer.removeStyle(this.ref.nativeElement,'backgroundColor')
  }

  //reacting to events that occurs on element, using Hostlistener decorator
  //adding the method to react on the event occur
  //specify the event occuring inside the decorator as argument as string
  //receiving event data using variable eventData type of event
  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.ref.nativeElement,'backgroundColor','orange')
    this.Color='blue'
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.ref.nativeElement,'backgroundColor','teal')
    this.Color='transparent'
  }

}
