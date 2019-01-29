import { Observable } from "rxjs/internal/Observable";
import { map } from 'rxjs/internal/operators/map';

// Point 1

/* Both are the same. second one (less syntax).
    it creates private variable and when passing argument,
    it automatically assigns to that field.

    x? - means it's optional.
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


// Point 2) using observables

//Observable vs Promise - https://medium.com/@mpodlasin/promises-vs-observables-4c123c51fe13
const observable:Observable<number> = new Observable((observer) => {
    observer.next(5);
    observer.next(7);
    setTimeout(() => {
        observer.next(10);
    }, 3000);
});


observable.pipe(map( val => {
    console.log("Map Function");
    return val*2;
})).subscribe(data=>{
    console.log("Subscribe Function");
    console.log(data);
}) 


