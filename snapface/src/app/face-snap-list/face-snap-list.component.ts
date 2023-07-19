import { Component, OnInit } from '@angular/core';
import{FaceSnap} from'../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{

  faceSnaps: FaceSnap[] =[
    {
      id: 1,
      title:"Mon premier facesnap",
      description: "description du facesnap",
      createDate: new Date(),
      snaps: 200,
      imageUrl:" "

    },
    {
      id: 2,
      title:"Mon second facesnap",
      description: "description blablka du facesnap",
      createDate: new Date(),
      snaps: 0,
      imageUrl:" ",
      location: "New York"
      
    }
  ]
  constructor(){

  }
  ngOnInit(): void{}

}
