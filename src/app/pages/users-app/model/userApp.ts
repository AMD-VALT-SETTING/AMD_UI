import { Clist } from './clist';

export class UsersApp {
    idDevice: number;
    appVersion: number;
    configVersion: string;
    model: string;
    androidID: string;
    license: string;
    userNameApp: string;
    userAliasApp: string;
    phoneNumber: string;
    emergencyContacts: string;
    osVersion: number;
    enabledLicense: boolean;
    update: string;
    resetPassword: boolean;
    clist: Clist[];
}
