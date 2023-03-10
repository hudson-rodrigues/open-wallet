import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._elementRef.nativeElement. //style.backgroundColor = 'yellow';
    console.log('ok')
    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  constructor(private _elementRef: ElementRef) {
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
 }

}
