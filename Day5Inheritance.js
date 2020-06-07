class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */Rectangle.prototype.area = function() {
    return ( this.w * this.h );
}

class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}
