import { Directive, HostBinding, Input, HostListener } from '@angular/core';
import { DragService } from "./drag.service";
// import { HostListener } from '@angular/core/src/metadata/directives';

@Directive({
    selector: '[formDraggable]'
})
export class DraggableDirective {

    private options: DraggableOptions = {};

    constructor(private dragService: DragService) {}


    @HostBinding('draggable')
    get draggable() {
        return true;
    }
    
    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        console.log(event);
        const { zone = 'zone', data = {} } = this.options;
        this.dragService.startDrag(zone);
        event.dataTransfer.setData('Text', JSON.stringify(data));
    }

    @HostListener('dragend', ['$event'])
    onDragEnd(event){
        console.log(event)
    }

    @Input()
    set formDraggable(options: DraggableOptions) {
        if (options) {
            this.options = options;
        }
    }

    

}

export interface DraggableOptions {
    zone?: string;
    data?: any;

}

