import { PhotoService } from './../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File;
  photoForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private photoService:PhotoService,
    private router: Router) { }
  preview:string

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }
  upload(){
    const description = this.photoForm.get("description").value;
    const allowComments = this.photoForm.get("allowComments").value;
    this.photoService.upload(description,allowComments,this.file).
    subscribe(()=>this.router.navigate(['']))
  }
  handleFile(file:File){//convertendo o arqquivo do upload em base 64
    this.file = file
    const reader = new FileReader();//convertendo o arqquivo do upload em base 64
    reader.onload = (event:any) => this.preview = event.currentTarget.result;
    reader.readAsDataURL(file);
  }
}
