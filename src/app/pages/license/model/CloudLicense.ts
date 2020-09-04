import { StringifyOptions } from 'querystring';

export interface CloudLicense {

    idClicense: string;
    dsClicenseKey:string;
    dsClicenseSaleContract:string;
    dsClicenseSupportContract:string;
    dsClicenseActivation:string;
    dsClicenseExpiration:string;
    nmClicenseRenawal:number;
    cdAppVersion:number;
    dsLinkAppDownload:string;
}