import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit {
  @Input("myForEm") numbers: number[] = [];
  constructor(
    private conainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
  ngOnInit(): void {
    for (let number of this.numbers) {
      this.conainer.createEmbeddedView(this.template, { $implicit: number });
    }
    console.log(this.numbers);
  }
}
