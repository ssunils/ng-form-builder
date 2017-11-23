import {Directive, HostBinding, Input} from '@angular/core';
import {DragService} from "./drag.service";

@Directive({
    selector: '[formDraggable]'
})
export class DraggableDirective {

    private options: DraggableOptions = {};

    constructor(private dragService: DragService) {
    }


    @HostBinding('draggable')
    get draggable() {
        return true;
    }

    @Input()
    set formDraggable(options: DraggableOptions) {
        if (options) {
            this.options = options;
        }
    }

    onDragStart(event) {
        const {zone = 'zone', data = {}} = this.options;
        this.dragService.startDrag(zone);
        event.dataTransfer.setData('Text', JSON.stringify(data));
    }

}

export interface DraggableOptions {
    zone?: string;
    data?: any;

}

