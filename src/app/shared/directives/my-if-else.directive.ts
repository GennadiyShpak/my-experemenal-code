import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIf]'
})

export class MyIfElseDirective implements OnInit {
  private show = false;

  @Input() set appIf(show: boolean) {
    console.log('show', show)
    this.show = show;
    this.displayTemplate();
  }

  @Input() appIfElse?: TemplateRef<unknown>;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.displayTemplate();
    console.log(this.appIfElse);
    
  }

  private displayTemplate() {
    this.vcr.clear();
    if (this.show) {
      this.vcr.createEmbeddedView(this.templateRef);
    } else if (this.appIfElse) {
      this.vcr.createEmbeddedView(this.appIfElse);
    }
  }
}
