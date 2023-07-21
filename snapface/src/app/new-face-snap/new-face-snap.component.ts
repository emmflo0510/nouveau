
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';
import {FaceSnap} from '../models/face-snap.model';
import {Observable, map} from 'rxjs';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  urlRegex!: RegExp;
  faceSnapPreview$!: Observable<FaceSnap>;

  constructor(private formBuilder: FormBuilder,
              private faceSnapsService: FaceSnapsService,
              private router: Router) { }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group( {
      title: [null, [Validators.required] ],
      description: [null, [Validators.required] ],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)] ],
      location: [null]
    },{
      updateOn: 'blur'
    } );

    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue =>({
        ...formValue,
        createDate: new Date(),
        snaps: 0,
        id: 0
      }))
    );
  }

  onSubmitForm() {
    const newFaceSnap = this.faceSnapsService.getNewFaceSnap(this.snapForm.value);
    this.faceSnapsService.saveNewFaceSnap(newFaceSnap);
    this.router.navigateByUrl('/facesnaps');
  }


}
