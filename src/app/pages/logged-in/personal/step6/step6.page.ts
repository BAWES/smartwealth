import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { AuthService } from 'src/app/providers/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-step6',
  templateUrl: './step6.page.html',
  styleUrls: ['./step6.page.scss'],
})
export class Step6Page implements OnInit {
 
  public form: FormGroup;

  public industrylistData = [
    { industry_name_en: 'Consumer &amp; Industrial Products' },
    { industry_name_en: 'Energy &amp; Resources' },
    { industry_name_en: 'Financial Services' },
    { industry_name_en: 'Life Sciences and Health Care' },
    { industry_name_en: 'Manufacturing / Industrial' },
    { industry_name_en: 'Public Sector' },
    { industry_name_en: 'Real Estate' },
    { industry_name_en: 'Technology, Media &amp; Telecommunications' }
  ];
  
  constructor(
    public router: Router,
    public _fb: FormBuilder, 
    public navCtrl: NavController,
    public accountService: AccountService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    this.form = this._fb.group({
      employmentStatus: [localStorage.getItem('employmentStatus'), Validators.required],
      employer: [localStorage.getItem('employer')],
      position: [localStorage.getItem('position')],
      industry: [localStorage.getItem('industry')],
    }); 

    this.form.get('employmentStatus').valueChanges.subscribe(value => {
 
      if(['Self Employed', 'Employed'].indexOf(value) > -1) {
        this.form.get('employer').setValidators(Validators.required);
        this.form.get('position').setValidators(Validators.required);
        this.form.get('industry').setValidators(Validators.required);
      } else {
        this.form.get('employer').setValidators(null);
        this.form.get('position').setValidators(null);
        this.form.get('industry').setValidators(null);
      }

      this.form.controls.employer.updateValueAndValidity();
      this.form.controls.position.updateValueAndValidity();
      this.form.controls.industry.updateValueAndValidity();
    }); 
  } 

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  back() {
    this.navCtrl.back();
  }

  continue() {

    if(['Self Employed', 'Employed'].indexOf(this.form.value.employmentStatus) == -1) {
      this.form.controls.employer.setValue(null);
      this.form.controls.position.setValue(null);
      this.form.controls.industry.setValue(null);
    } 

    let params = this.form.value;

    this.accountService.saveStep6(params).subscribe(data => {
      this.router.navigate(['step7']);
    });    
  }
}
