class Gaming{
    constructor(name, cost){
    this.name=  name;
    this.cost= cost;
}
get getname(){
    return this.name+ '  is from gaming';
}
get getcost(){
    return this.cost* 0.73
    // don't forget this 'this' in the upper line costed insanity
}
}
let himesh = new Gaming('himesh', 54)
//write yis on console man

class lazy extends Gaming{
    constructor(name){
    super(name);
}
    get getname(){
        return this.name+ ' is from lazy'
    }
}
let karmesh= new lazy('karmesh', 19);