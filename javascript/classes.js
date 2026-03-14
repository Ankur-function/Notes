class User {
    constructor(username,email,password) {//jaise hi 'new' keyword ka user karoge ussi time constructor call ho jata hai.
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }
}

const password = new User('ankur','ankur@gmail.com','123'); // ab yha 'new' ye direct constructor ko call kar dega.
console.log(password.encryptPassword());

// read about static property in classes.
