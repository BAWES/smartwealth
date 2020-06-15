import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }


  saveStep1(params) {

    localStorage.setItem('gender', params.gender? params.gender: '');
    localStorage.setItem('firstName', params.firstName? params.firstName: '');
    localStorage.setItem('lastName', params.lastName? params.lastName: '');
    localStorage.setItem('middleName', params.middleName? params.middleName: '');
    localStorage.setItem('country', params.country? params.country: '');
    localStorage.setItem('dob', params.dob? params.dob: '');
    localStorage.setItem('civilId', params.civilId? params.civilId: '');
    localStorage.setItem('civilIdSerialNumber', params.civilIdSerialNumber? params.civilIdSerialNumber: '');
    localStorage.setItem('civilIdExpiryDate', params.civilIdExpiryDate? params.civilIdExpiryDate: '');

    return of({
      'operation': 'success'
    });
  }

  saveStep2(params) {

    localStorage.setItem('nationality', params.nationality? params.nationality: '');
    localStorage.setItem('passport', params.passport? params.passport: '');
    localStorage.setItem('passportCountry', params.passportCountry? params.passportCountry: '');
    localStorage.setItem('passportExpiry', params.passportExpiry? params.passportExpiry: '');

    return of({
      'operation': 'success'
    });
  }

  saveStep3(params) {

    localStorage.setItem('isGuardianshpAccount', params.isGuardianshpAccount? params.isGuardianshpAccount: '');
    localStorage.setItem('guardianFullName', params.guardianFullName? params.guardianFullName: '');
    localStorage.setItem('guardianNationality', params.guardianNationality? params.guardianNationality: '');
    localStorage.setItem('guardianCivilIdNumber', params.guardianCivilIdNumber? params.guardianCivilIdNumber: '');

    return of({
      'operation': 'success'
    });
  }

  saveStep4(params) {

    localStorage.setItem('isPoliticallyExposed', params.isPoliticallyExposed? params.isPoliticallyExposed: '');
    localStorage.setItem('havePoliticalPosition', params.havePoliticalPosition? params.havePoliticalPosition: '');
    localStorage.setItem('politicalPositionName', params.politicalPositionName? params.politicalPositionName: '');
    localStorage.setItem('politicalPositionRelation', params.politicalPositionRelation? params.politicalPositionRelation: '');
    localStorage.setItem('politicalPosition', params.politicalPosition? params.politicalPosition: '');

    return of({
      'operation': 'success'
    });
  }

  saveStep5(params) {

    localStorage.setItem('city', params.city? params.city: '');
    localStorage.setItem('area', params.area? params.area: '');
    localStorage.setItem('street', params.street? params.street: '');
    localStorage.setItem('avenue', params.avenue? params.avenue: '');
    localStorage.setItem('block', params.block? params.block: '');
    localStorage.setItem('houseNumber', params.houseNumber? params.houseNumber: '');
    localStorage.setItem('mobileNumber', params.mobileNumber? params.mobileNumber: '');
    
    return of({
      'operation': 'success'
    });
  }

  saveStep6(params) {

    localStorage.setItem('employmentStatus', params.employmentStatus? params.employmentStatus: '');
    localStorage.setItem('employer', params.employer? params.employer: '');
    localStorage.setItem('position', params.position? params.position: '');
    localStorage.setItem('industry', params.industry? params.industry: '');

    return of({
      'operation': 'success'
    });
  }  
  
  saveStep7(params) {

    localStorage.setItem('annualIncome', params.annualIncome? params.annualIncome: '');
    localStorage.setItem('incomeSource', params.incomeSource? JSON.stringify(params.incomeSource): '');
    localStorage.setItem('totalInvestment', params.totalInvestment? params.totalInvestment: '');

    return of({
      'operation': 'success'
    });
  }  

  saveStep8(params) {

    localStorage.setItem('bank', params.bank? params.bank: '');
    localStorage.setItem('existingClient', params.existingClient? params.existingClient: '');
    localStorage.setItem('haveRelationship', params.haveRelationship? params.haveRelationship: '');
    localStorage.setItem('relationship', params.relationship? params.relationship: '');

    return of({
      'operation': 'success'
    });
  }  

  saveStep9(params) {

    localStorage.setItem('isUSCitizen', params.isUSCitizen? params.isUSCitizen: '');
    localStorage.setItem('taxPayerIDNumber', params.taxPayerIDNumber? params.taxPayerIDNumber: '');
    localStorage.setItem('usAddress1', params.usAddress1? params.usAddress1: '');
    localStorage.setItem('usAddress2', params.usAddress2? params.usAddress2: '');

    return of({
      'operation': 'success'
    });
  }  

  saveStep10(params) {

    localStorage.setItem('payTaxInAnotherCountry', params.payTaxInAnotherCountry? params.payTaxInAnotherCountry: '');
    localStorage.setItem('taxCountry', JSON.stringify(params.taxCountry)? params.taxCountry: '');

    return of({
      'operation': 'success'
    });
  }  

  saveStep11(params) {

    localStorage.setItem('applyForSomeoneElse', params.applyForSomeoneElse? params.applyForSomeoneElse: '');
    localStorage.setItem('beneficiaryName', params.beneficiaryName? params.beneficiaryName: '');
    localStorage.setItem('beneficiaryRelation', params.beneficiaryRelation? params.beneficiaryRelation: '');
    localStorage.setItem('beneficiaryNationality', params.beneficiaryNationality? params.beneficiaryNationality: '');
    localStorage.setItem('beneficiaryAddress', params.beneficiaryAddress? params.beneficiaryAddress: '');
    localStorage.setItem('beneficiaryID', params.beneficiaryID? params.beneficiaryID: '');

    return of({
      'operation': 'success'
    });
  }  

  saveStep12(params) {

    localStorage.setItem('addPowerOfAttorney', params.addPowerOfAttorney? params.addPowerOfAttorney: '');
    localStorage.setItem('powerOfAttorneyName', params.powerOfAttorneyName? params.powerOfAttorneyName: '');
    localStorage.setItem('powerOfAttorneyNationality', params.powerOfAttorneyNationality? params.powerOfAttorneyNationality: '');
    localStorage.setItem('powerOfAttorneyID', params.powerOfAttorneyID? params.powerOfAttorneyID: '');

    return of({
      'operation': 'success'
    });
  }  
}
