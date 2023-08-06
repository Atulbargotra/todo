import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

export enum RoomType {
  DELUX,
  REGULAR
}

export interface Room{
  number: number;
  price: number;
  type: RoomType;
  newRow?: boolean;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [MessageService],
})
export class RoomsComponent implements OnInit{

  hotelName: string =  'Clinton Hotel';
  rooms: Room[] = [];
  selectedRoom !:Room;


  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.rooms = [
      {number: 1, price: 4000, type: RoomType.REGULAR},
      {number: 2, price: 5000, type: RoomType.REGULAR},
      {number: 3, price: 6000, type: RoomType.DELUX},
      {number: 4, price: 7000, type: RoomType.DELUX},

    ]
  }

  onRoomSelected(room: Room){
    this.selectedRoom = room;
    this.messageService.add({severity:'success', summary: 'Room Selected', detail: room.number.toString()});
  }

  addRoom(){
    let room: Room = {number: 5, price: 20202, type:RoomType.REGULAR}
    this.rooms = [...this.rooms,room]
  }

}
