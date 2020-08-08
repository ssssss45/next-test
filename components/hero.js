export default class Hero{

    constructor(){
        this.x = 0;
        this.y = 0;
        this.angle  = 0;
    }

    setTransofrms(){
        this.transforms = `translate(${this.x}px, ${this.y}px) rotate(${this.angle}deg)`;
    }

    set x(val){
        this._x = val;
        this.setTransofrms();
    }

    set y(val){
        this._y = val;
        this.setTransofrms();
    }

    set angle(val){
        this._angle = val;
        this.setTransofrms();
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get angle(){
        return this._angle;
    }
}