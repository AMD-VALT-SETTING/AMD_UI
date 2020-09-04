export interface License {
mobileLicense:{
  idLicense: string;
  dsLicenseKey: string;
  dsLicenseActivation: string;
  dsLicenseExpiration: string;
  nmLicenseMaxUsers: number;
  nmLicenseFree: number;

  },
  mainLicense:{
    idClicense: string;
    dsClicensekey:string;
    dsClicenseSaleContract:string;
    dsClicenseSupportContract:string;
    dsClicenseActivation:string;
    dsClicenseExpiration:string;
    nmClicenseRenawal:number;
    cdAppVersion:number;
    dsLinkAppDownload:string;
  }
  
  }
  