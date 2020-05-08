import { Component } from '@angular/core';
import { RootState, selectUser } from './reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms-ngrx';

  constructor(private store: Store<RootState>) {

   }
   user$ = this.store.pipe(select(selectUser));

}
