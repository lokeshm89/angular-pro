import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  //attribute directive
  selector: '[appBasicHighlight]'
  })
export class BasicHighlightDirective implements OnInit{
  //giving arguments to the constructor which is to be retrieved whenever instance for this class is created
  //elementRef is the reference to the element the directive was placed on
  //elementRef is both property of the class and value gets assigned to it
constructor( private elementRef : ElementRef) {
}
ngOnInit() {
  this.elementRef.nativeElement.style.backgroundColor='pink';
}
}
