import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector : '[highlightdirective]'
})
export class HighlightDirective implements OnInit{

  // constructor( public highlight:ElementRef) {
  // }
  //
  // ngOnInit() {
  //   this.highlight.nativeElement.style.textAlign='center';
  //   this.highlight.nativeElement.style.color='brown';
  // }
  constructor(private ref:ElementRef,private renderer : Renderer2) { }
  @HostBinding('style.textTransform') transform:string='lowercase';
  ngOnInit() {
  }
  @HostListener('click') mouseclick(eventData:Event){
    // this.renderer.setStyle(this.ref.nativeElement,'text-transform','uppercase')
    this.transform='uppercase'
  }
}
