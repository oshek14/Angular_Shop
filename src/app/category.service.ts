import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }


  getCategories() : Observable<any>{
    return this.db.list('/categories').snapshotChanges().pipe(map(changes=>{
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }))
  }
}
