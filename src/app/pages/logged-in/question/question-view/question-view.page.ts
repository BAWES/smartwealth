import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/providers/logged-in/question.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.page.html',
  styleUrls: ['./question-view.page.scss'],
})
export class QuestionViewPage implements OnInit {

  public loading = true;

  public question; 

  public question_uuid;

  public form: FormGroup;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public _fb: FormBuilder,
    public navCtrl: NavController,
    public questionService: QuestionService
  ) { }

  ngOnInit() {
    this.question_uuid = this.route.snapshot.paramMap.get('question_uuid');

    this.questionService.get(this.question_uuid).subscribe(data => {
      this.question = data;

      let answer = localStorage.getItem('question_' + this.question_uuid);

      this.form = this._fb.group({
        answer: [answer, Validators.required],
      });
    });
  }

  back() {
    this.navCtrl.back();
  }

  setAnswer(value) {
    this.form.controls.answer.setValue(value);
    this.form.updateValueAndValidity();
  }

  /**
   * move to next question 
   */
  continue() {

    let params = {
      question_uuid: this.question_uuid, 
      answer: this.form.value.answer
    }

    this.questionService.save(params).subscribe(data => {

      if(this.question_uuid == this.questionService.questions.length) {
        this.router.navigate(['plan']);
      } else {
        this.router.navigate(['question-view', parseInt(this.question_uuid) + 1]);
      }      
    });    
  }
}
