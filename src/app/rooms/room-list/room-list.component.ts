import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {Room, RoomType} from '../rooms.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent implements OnInit, OnChanges{

  @Input() rooms: Room[] = [];
  @Output() selectedRoom = new EventEmitter<Room>();

  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['rooms'] && !changes['rooms'].isFirstChange()){
      let currentChanges: Room[] = changes['rooms'].currentValue;
      let previousChanges: Room[] = changes['rooms'].previousValue;
      let lastIndex: number = currentChanges.length - 1;
      currentChanges[lastIndex].newRow = true;

    }
  }

  ngOnInit(): void {

  }

  roomSelected(room: Room){
    this.selectedRoom.emit(room);
  }




}
