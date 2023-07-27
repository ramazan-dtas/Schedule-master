class User{
    constructor(user_Id, surname, email, passwordHash, emailConfirmed,lockoutEnabled,phoneConfirmed,twofactorEnabled,tryFailedCount,lockoutEnd){
        this.user_Id=user_Id;
        this.surname=surname;
        this.email=email;
        this.passwordHash=passwordHash;
        this.emailConfirmed=emailConfirmed;
        this.lockoutEnabled=lockoutEnabled;
        this.phoneConfirmed=phoneConfirmed;
        this.twofactorEnabled=twofactorEnabled;
        this.tryFailedCount=tryFailedCount;
        this.lockoutEnd=lockoutEnd;
    }
}

module.exports = User;