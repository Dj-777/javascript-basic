class student{
    constructor(name,age,classs){
        this.myname=name;
        this.myage=age;
        this.useclasss=classs;
    }
    biodata(){
        console.log(`hey i am a ${this.myname} and i am a ${this.myage} year old and i am in ${this.useclasss} class`);
    }
}
class player extends student{
    constructor(name,age,classs,game){
        super(name,age,classs);
        this.mygame=game;
    }   
    game(){
        console.log(`${this.myname} is very good player in ${this.mygame} game at just age of ${this.myage}.`)
    }

}
let studentobject=new player('dj',20,'BE','cricket');
studentobject.biodata();
studentobject.game();
