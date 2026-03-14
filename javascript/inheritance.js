class Student{
    constructor(username){
      this.username=username;
    }

    logMe(){
        `student name is: ${this.username}`
    }
}

class Teacher extends Student{
    constructor(username,email,password){
        super(username);
        this.email=email
        this.password=password
    }


    studentDetails(){
        console.log(`student details from here is: ${this.username}`);
        
    }
}

const ankur = new Teacher('rahul','rahul@gmail.com',1234);
ankur.studentDetails();






