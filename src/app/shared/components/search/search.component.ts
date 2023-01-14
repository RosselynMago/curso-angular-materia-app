import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchToFind = new EventEmitter<string>();

  inputControl : FormControl = new FormControl<string>('',{
    nonNullable: true,
  });

  ngOnInit(): void {
    this.inputChanges();
  }

  inputChanges(){
    this.inputControl.valueChanges.pipe(
      map(value => value.trim()),
      filter(value => value.toString().trim() != "" && value != null),
      distinctUntilChanged()
    ).subscribe(value => this.searchToFind.emit(value))
  }
}
function eventEmitter<T>() {
  throw new Error('Function not implemented.');
}

