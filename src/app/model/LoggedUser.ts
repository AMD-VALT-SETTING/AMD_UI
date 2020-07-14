export interface LoggedUser {
    username: string;
    token: string;
    authorities: Array<string>;
}