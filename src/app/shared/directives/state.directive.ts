import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() { }

  ngOnChanges() {
    this.tdClassName = `state-${this.appState.toLocaleLowerCase()}`; 
  }
}
