// learn about 'new' keyword, prototype in more detail.these topics are not clear to me
// study call,apply and bind in much more detail. these topics are not clear to me

function setUserName(username) {
    //complex DB calls
    console.log("called");
     this.username=username;
     
    function useMe(params) {
        this.useMe='useMee';
        
    } 
}

function createUser(username,email,password){
    setUserName.call(this,username); // yha 'this' iss function ka current context dusre function ko de deta hai.
    setUserName.useMe.call(this); // yha 'this' iss function ka current context dusre function ko de deta hai.
    this.email=email;
    this.password=password;
// console.log(this.username);
// console.log(this.password);
// console.log(this.email);
}

// console.log(createUser('ankur','ankur@gmail.com','1234'));// this will give undefined
console.log(new createUser('ankur','ankur@gmail.com','1234'));

