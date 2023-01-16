import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
      filter(value => value.trim() != "" && value != null),
      distinctUntilChanged(),
      debounceTime(500)
    ).subscribe(value => this.searchToFind.emit(value))
  }
}

