// Point 1

/* Both are the same. second one (less syntax).
    it creates private variable and when passing argument,
    it automatically assigns to that field.

    x? - means it's optional.
*/

class Point1{
    private x;
    constructor(x? : number){
        this.x = x;
    }
}

class Point2{
    constructor(private x?:number){}
}


// Point 2)




