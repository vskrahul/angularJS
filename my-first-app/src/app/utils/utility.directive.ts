import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";


@Directive({
  selector: '[customIf]'
})
export class Utility {

  @Input('customIf') set anything(condition: boolean) {
    if(condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

}
