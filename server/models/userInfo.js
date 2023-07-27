class UserInfo{
    constructor(user_Info_Id, name, last_name, phone, date_of_birth, address, update_at, created_at){
        this.user_Info_Id=user_Info_Id;
        this.name=name;
        this.last_name= last_name;
        this.phone=phone;
        this.date_of_birth=date_of_birth;
        this.address=address;
        this.update_at=update_at;
        this.created_at=created_at;
    }
}

module.exports = UserInfo;