import { Component, Input, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { UpdaterecordComponent } from '../components/updaterecord/updaterecord.component';
import { AlertController, ModalController, NavController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Firebase } from '@ionic-native/firebase';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  doc:any;
  records: { id: string; name: string; age: number; address: string ; type: string; loc: string;}[];
  addrecord: {name: string; age: number; address: string; type: string; loc: string};
  captureDataUrl : string;

  @Input("UserURI") UserURI: Boolean = true;

  constructor(
    private firestore: AngularFirestore,
    private modalCOntroller: ModalController,
  ) {}

  ngOnInit(){
    this.addrecord = {name : '', age : null, address : '', type : '', loc:''}
    this.firestore.collection('/Covid/').snapshotChanges().subscribe(res=>{
      if (res) {
        this.records = res.map(e=>{
          return{
            id: e.payload.doc.id,
            name: e.payload.doc.data()['name'],
            age: e.payload.doc.data()['age'],
            address: e.payload.doc.data()['address'],
            type: e.payload.doc.data()['type'],
            loc: e.payload.doc.data()['loc']
          }
        })
      }
    })
  }

  getPicture(sourceType){
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      sourceType: sourceType
    };

    Camera.getPicture(cameraOptions)
      .then((captureDataUrl) => {
      this.captureDataUrl = 'data:image/jpeg;base64' + captureDataUrl;
    }, (err) => {
      console.error();
    });
  }

  AddRecord(name, age, address, type, loc){
    let addrecord = {}
    this.addrecord['name'] = name
    this.addrecord['age'] = age
    this.addrecord['address'] = address
    this.addrecord['type'] = type
    this.addrecord['loc'] = loc
    console.log(this.addrecord)
    this.firestore.collection('/Covid/').add(this.addrecord).then(()=>{
      this.addrecord = {name : '', age : null, address : '', type:'', loc:''}
    })
  }

  async UpdateRecord(id, name, age, address, type, loc){
    const modal = await this.modalCOntroller.create({
      component: UpdaterecordComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'id' : id,
        'name' : name,
        'age' : age,
        'address' : address,
        'type' : type,
        'loc' : loc,
      }
    });
    return await modal.present();
  }
  DeleteRecord(id){
    this.firestore.doc('/Covid/'+id).delete();
  }

}
