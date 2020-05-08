import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { RootState, LogAction } from '../reducers';
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('', Validators.required);

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.name.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.store.dispatch(LogAction({ user: value }));
    });
  }
  updateName() {
    this.name.setValue('Nancy');
  }
}
