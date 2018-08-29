class User {
    username: string;
    password: string;
    fullname: String;
    email: String;
    contactnumber: String;
    role: String;
    createdbyid: Number;
    cmpid:Number;

    constructor(
    ) {
        this.username = '';
        this.password = '';
        this.fullname = '';
        this.email    = '';
        this.contactnumber = '';
        this.role = '';
        this.createdbyid = 0;
        this.cmpid = 0;
     }

}

export default User;
