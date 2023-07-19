import { Component, OnInit, Input } from '@angular/core';
import{ FaceSnap} from '../models/face-snap.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-face-snap-preview',
  templateUrl: './face-snap-preview.component.html',
  styleUrls: ['./face-snap-preview.component.scss']
})
export class FaceSnapPreviewComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  constructor(private router : Router){ }

    ngOnInit(): void{

    }
    
    onViewFace(){
      this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }

 

}
