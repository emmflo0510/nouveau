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
          imageUrl:"https://images-ext-2.discordapp.net/external/VNhQZjuevR_lph-jf65VGI-93UHl6e4okzGGurxqzTQ/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D2/https/images.pexels.com/photos/129458/pexels-photo-129458.jpeg?width=876&height=584 "
    
        },
        {
          id: 2,
          title:"Mon second facesnap",
          description: "description blablka du facesnap",
          createDate: new Date(),
          snaps: 0,
          imageUrl:"https://images-ext-1.discordapp.net/external/RlhgUN5eT4jDuAUtYE7CB5EezSVjQStXYwIfQAI-S10/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D2/https/images.pexels.com/photos/933054/pexels-photo-933054.jpeg?width=874&height=584 ",
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
    snapFaceSnapById(id: number, snapType: 'snap'| 'unsnap'){
        const faceSnap = this.getFaceSnapById(id);
        snapType ==='snap'? faceSnap.snaps++ : faceSnap.snaps--;
    }
    getNewFaceSnap(fromValue: {title: string, description: string, imageUrl: string, location?: string}){
        const newFaceSnap: FaceSnap = {
            ...fromValue,
            snaps: 0,
            createDate: new Date(),
            id: this.faceSnaps[this.faceSnaps.length-1].id+1
        };
        return newFaceSnap;
        
    }

    saveNewFaceSnap(newFaceSnap: FaceSnap){
        this.faceSnaps.push(newFaceSnap);
    }
}
