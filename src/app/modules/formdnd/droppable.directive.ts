import { DragService } from './drag.service';
import { DraggableOptions } from './draggable.directive';
import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[formDroppable]'
})
export class DroppableDirective {

  private options: DraggableOptions = {};

  @Input()
  set formDroppable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(e) {
    console.log('Drop event', e)
  }


  @HostListener('dragenter', ['$event'])
  onDragEnter(e) {
    console.log('Drag Entere', e);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e) {
    console.log('Drag Leave', e);
  }

  constructor(private dragService: DragService) { }

}
