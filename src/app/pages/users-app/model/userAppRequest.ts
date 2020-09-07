export class UserAppRequest {
    usernameExp?: string;
    aliasExp?: string;
    phoneExp?: string;

    constructor(usernameExp: string, aliasExp: string, phoneExp: string) {
        this.usernameExp = usernameExp;
        this.aliasExp = aliasExp;
        this.phoneExp = phoneExp;
    }
}
