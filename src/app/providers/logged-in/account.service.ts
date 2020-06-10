import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }


  saveStep1(params) {

    localStorage.setItem('gender', params.gender);
    localStorage.setItem('firstName', params.firstName);
    localStorage.setItem('lastName', params.lastName);
    localStorage.setItem('middleName', params.middleName);
    localStorage.setItem('country', params.country);
    localStorage.setItem('civilId', params.civilId);
    localStorage.setItem('civilIdSerialNumber', params.civilIdSerialNumber);
    localStorage.setItem('civilIdExpiryDate', params.civilIdExpiryDate);

    return of({
      'operation': 'success'
    });
  }

  saveStep2(params) {

    localStorage.setItem('nationality', params.nationality);
    localStorage.setItem('passport', params.passport);
    localStorage.setItem('passportCountry', params.passportCountry);
    localStorage.setItem('passportExpiry', params.passportExpiry);

    return of({
      'operation': 'success'
    });
  }

  saveStep3(params) {

    localStorage.setItem('isGuardianshpAccount', params.isGuardianshpAccount);
    localStorage.setItem('guardianFullName', params.guardianFullName);
    localStorage.setItem('guardianNationality', params.guardianNationality);
    localStorage.setItem('guardianCivilIdNumber', params.guardianCivilIdNumber);

    return of({
      'operation': 'success'
    });
  }

  saveStep4(params) {

    localStorage.setItem('isPoliticallyExposed', params.isPoliticallyExposed);
    localStorage.setItem('havePoliticalPosition', params.havePoliticalPosition);
    localStorage.setItem('politicalPositionName', params.politicalPositionName);
    localStorage.setItem('politicalPositionRelation', params.politicalPositionRelation);
    localStorage.setItem('position', params.position);

    return of({
      'operation': 'success'
    });
  }
}
