import { Observable } from "rxjs/internal/Observable";
import { map } from 'rxjs/internal/operators/map';
import { Product } from 'src/app/models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


/* Both are the same. second one (less syntax).it creates private variable and when passing argument,
    it automatically assigns to that field. x? - means it's optional.
*/

// class Point1{
//     private x;
//     constructor(x? : number){
//         this.x = x;
//     }
// }

// class Point2{
//     constructor(private x?:number){}
// }


/* Point 2) Observable */
const numberObservable:Observable<number> = new Observable((observer) => {
    observer.next(5);
    observer.next(7);
    setTimeout(() => {
        observer.next(10);
    }, 3000);
});


numberObservable.pipe(map( val => {
    console.log("Map Function");
    return val*2;
})).subscribe(data=>{
    console.log("Subscribe Function");
    console.log(data);
})



// Point 3) Any vs Object https://stackoverflow.com/questions/18961203/any-vs-object

// var objectEx1 : Object;
// var objectEx2 : {};
// var anyEx : any;
// var numEx : number;
// var stringEx : string;

// objectEx1 = numEx;
// numEx = objectEx1;


