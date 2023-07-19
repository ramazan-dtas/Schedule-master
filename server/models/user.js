class User{
    constructor(id, surname, email, passwordHash, emailConfirmed,lockoutEnabled,phoneConfirmed,twofactorEnabled,tryFailedCount,lockoutEnd){
        this.id=id;
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