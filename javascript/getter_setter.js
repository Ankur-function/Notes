class User{
    
    constructor(email,password){
        this.email= email;
        this.password= password;
    }

    get password(){ // property ka hi method banana hota hai
        return `your password is ${this.abc}def`
    }

    set password(val){ // property ka hi method banana hota hai
        this.abc=val;
    }
}

const ankur = new User('ankur@gmail.com','ankur123');

console.log(ankur.password);



