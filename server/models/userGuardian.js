class UserGuardian{
    constructor(user_Guardian_Id, user_information_id, guardian_id, relationship){
        this.user_Guardian_Id=user_Guardian_Id;
        this.user_information_id=user_information_id;
        this.guardian_id=guardian_id;
        this.relationship=relationship;
    }
}

module.exports = UserGuardian;