import { Component, OnInit } from '@angular/core';
import  {FormBuilder,FormGroup, Validators } from '@angular/forms';
// import  } from  '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      lastCtrl: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}





















  // firstFormGroup:FormGroup;
  // secoundFormGroup:FormGroup;
  // priorities:string[] = ['high','Medium','Low'];
  // departments:object[]=[
  //   {
  //     id:1,
  //     name:'Complaints'
  //   },
  //   {
  //     id:2,
  //     name:'Loyality'
  //   },
  //   {
  //     id:3,
  //     name:'Promotions'
  //   }
  // ];

