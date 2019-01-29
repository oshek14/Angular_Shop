"use strict";
exports.__esModule = true;
var Observable_1 = require("rxjs/internal/Observable");
var map_1 = require("rxjs/internal/operators/map");
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
var observable = new Observable_1.Observable(function (observer) {
    observer.next(5);
    observer.next(7);
    setTimeout(function () {
        observer.next(10);
    }, 3000);
});
setTimeout(function () {
    observable.pipe(map_1.map(function (val) {
        console.log("Map Function");
        return val * 2;
    })).subscribe(function (data) {
        console.log("Subscribe Function");
        console.log(data);
    });
}, 5000);
