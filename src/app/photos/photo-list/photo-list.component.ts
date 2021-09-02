import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import {Photo} from '../photo/photo'


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit{

  photos: Photo[]= [];
  filter: string = " "

  hasMore1: boolean = true;
  CurrentPage:number = 1;
  userName: string="";

  constructor(private activatedRoute: ActivatedRoute,
    private photoservice:PhotoService//quando a rota estiver ativada
    ){}//declaração de independência

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos']

  }
  load() {
    this.photoservice
        .listFromUserPaginated(this.userName, ++this.CurrentPage)
        .subscribe(photos => {
            this.filter = '';
            this.photos = this.photos.concat(photos);
            if(!photos.length) this.hasMore1 = false;
        });
  }
}


