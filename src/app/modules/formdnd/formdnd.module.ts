import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormdndComponent} from './formdnd.component';
import {DraggableDirective} from './draggable.directive';
import {DroppableDirective} from './droppable.directive';
import {DragService} from "./drag.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FormdndComponent,
        DraggableDirective,
        DroppableDirective
    ],
    exports: [
        FormdndComponent,
        DraggableDirective,
        DroppableDirective
    ],
    providers: [
        DragService
    ]
})
export class FormdndModule {
}
