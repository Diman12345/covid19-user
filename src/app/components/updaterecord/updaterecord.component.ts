import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-updaterecord',
  templateUrl: './updaterecord.component.html',
  styleUrls: ['./updaterecord.component.scss'],
})
export class UpdaterecordComponent implements OnInit {

  @Input() id: string;
  @Input() type: string;
  @Input() name: string;
  @Input() age: number;
  @Input() address: string;
  @Input() loc: string;

  constructor(
    private firestore: AngularFirestore,
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  UpdateRecord(name, age, address, type, loc){
    let updaterecord = {}
    updaterecord['name'] = name,
    updaterecord['age'] = age,
    updaterecord['address'] = address,
    updaterecord['type'] = type,
    updaterecord['loc'] = loc,
    this.firestore.doc('/Covid/'+this.id).update(updaterecord).then(()=>{
      this.modalController.dismiss()
    })
  }

  CloseModal(){
    this.modalController.dismiss()
  }

}
