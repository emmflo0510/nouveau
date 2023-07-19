import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {ActivatedRoute} from '@angular/router';
import {FaceSnapsService} from '../services/face-snaps.service'

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  snapped!: boolean;
  snappedButtonText!: string;

  constructor(private route: ActivatedRoute,
    private faceSnapsService: FaceSnapsService ){}

  ngOnInit(): void{
    this.snapped = false;
    this.snappedButtonText = "oh Snap!";
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId)
  }

  onSnap() {
    if (this.snapped){
      this.snapped = false;
      this.snappedButtonText='oh Snap';
    }else{
      this.snapped = true;
      this.snappedButtonText='Snapped!';
    }
  }

}
