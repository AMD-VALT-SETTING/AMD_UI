export class ResetPwdModel {
    userName: string;
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;

    constructor(user: string, oldpwd: string, newpwd: string, confirmpwd: string) {
        this.userName = user;
        this.oldPassword = oldpwd;
        this.newPassword = newpwd;
        this.confirmPassword = confirmpwd;
    }
}
