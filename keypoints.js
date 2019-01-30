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
/* Point 2) Observable */
var numberObservable = new Observable_1.Observable(function (observer) {
    observer.next(5);
    observer.next(7);
    setTimeout(function () {
        observer.next(10);
    }, 3000);
});
numberObservable.pipe(map_1.map(function (val) {
    console.log("Map Function");
    return val * 2;
})).subscribe(function (data) {
    console.log("Subscribe Function");
    console.log(data);
});
// Point 3) Any vs Object https://stackoverflow.com/questions/18961203/any-vs-object
var a;
a.title = 5;
console.log(a);
console.log(a.title);
// Point 4)
