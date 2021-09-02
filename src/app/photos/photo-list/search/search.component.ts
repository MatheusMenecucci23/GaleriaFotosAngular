import { debounceTime } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';
  debounce: Subject<string> = new Subject<string>();
  constructor() { }


  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.onTyping.emit(filter));
}

  ngOnDestroy(): void {
    this.debounce.unsubscribe()
  }
}
