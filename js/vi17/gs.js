//get and set in js
class User{
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if(value.length < 4){
            console.log("Name is too Short.")
            return;
        }
        this._name = value;
    }
}
 
let user = new User("Hitesh");
console.log(user.name);

user.name = "";
//console.log(user)