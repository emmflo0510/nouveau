import { FaceSnap } from "../models/face-snap.model";
import{Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
}
)

export class FaceSnapsService{
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

    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }
    getFaceSnapById(faceSnapId: number){
        const faceSnap =this.faceSnaps.find(faceSnap =>faceSnap.id === faceSnapId)

        if (faceSnap){
            return faceSnap;
        } else{
            throw new Error ('Facesnap unfound');
        }
    }

}