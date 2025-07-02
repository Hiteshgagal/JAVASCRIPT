//q-1
let DATA ="seceet Information"
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    vieqData(){
        console.log("data = ", DATA)
    }
}

 let stu1 = new User("hitesh", "hitesha420@gmail.com")
 let stu2 = new User("hia", "hia4@gmail.com")
 let Teacher1 = new User("NielsSir", "np123@gmail.com")

 //q-2
 class Admin extends User{
    constructor(name, email){
        super(name, email)
    }
    editData() {
        DATA = "some New value"
    }
 }
 let admin1 = new Admin("admin", "Admin@gmail.com")