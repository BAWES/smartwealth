import { Injectable } from '@angular/core';
import { of } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public questions = [{
    questin_uuid: 1,
    question: 'What is your primary reason for investing?',
    type: 'radio',
    values: [
      'Capital preservation',
      'Outperform inflation',
      'Income generation',
      'Long term investment growth',
      'Aggressive growth and return'
    ]
  }, {
    questin_uuid: 2,
    question: 'What is your current age?',
    type: 'number',
  }, {
    questin_uuid: 3,
    question: 'What is your monthly income?',
    type: 'radio',
    values: [
      'Less than $3,000',
      '$3,001 to $7,500',
      '$7,501 to $12,000',
      '$12,001 to $15,000',
      'More than $15,001'
    ]
  },
  {
    questin_uuid: 4,
    question: 'What best describes your household?',
    type: 'radio',
    values: [
      'Retired',
      'Single income, at least one dependent',
      'Dual income, at least one dependent',
      'Single income, no dependents',
      'Dual income, no dependents'
    ]
  },
  {
    questin_uuid: 5,
    question: 'What is the total value of your cash and liquid investments (in USD)?',
    type: 'radio',
    values: [
      'Less than $50,000',
      '$50,000 to $330,000',
      '$330,000 to $1,000,000',
      '$1,000,000 to $5,000,000',
      'Greater than $5,000,000'
    ]
  },
  {
    questin_uuid: 6,
    question: 'I would rather have lower and predictable investment returns than ones which may be higher, but less predictable.',
    type: 'rating'
  },
  {
    questin_uuid: 7,
    question: 'I worry about losing money in the stock market.',
    type: 'rating'
  },
  {
    questin_uuid: 8,
    question: "If there's a chance of making better long-term returns, I am willing to take an investment risk.",
    type: 'rating'
  },
  {
    questin_uuid: 9,
    question: "I would be worried if I saw my investments had gone down in value.",
    type: 'rating'
  }];

  constructor() { }

  get(question_uuid) {
    let question = this.questions.filter((question) => question.questin_uuid == question_uuid);
    return of(question[0]);
  }

  save(params) {
    localStorage.setItem('question_' + params.questin_uuid, params.answer);

    return of({
      'operation': 'success'
    });
  }
}
