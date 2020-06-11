import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { AuthService } from 'src/app/providers/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-step7',
  templateUrl: './step7.page.html',
  styleUrls: ['./step7.page.scss'],
})
export class Step7Page implements OnInit {
 
  public form: FormGroup;

  public sourcelistData = [
    { source: 'Pension' },
    { source: 'Inheritance' },
    { source: 'Private Business' },
    { source: 'Social Security' },
    { source: 'Investments' },
    { source: 'Job' }
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
      annualIncome: [localStorage.getItem('annualIncome'), Validators.required],
      incomeSource: [localStorage.getItem('incomeSource'), Validators.required],
      totalInvestment: [localStorage.getItem('totalInvestment'), Validators.required],
    }); 
  } 

  setTotalInv(value) {
    this.form.controls.totalInvestment.setValue(value);
    this.form.controls.totalInvestment.updateValueAndValidity();
  }

  setTotalIncome(value) {
    this.form.controls.annualIncome.setValue(value);
    this.form.controls.annualIncome.updateValueAndValidity();
  }

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  ionViewDidLeave() {
    this.authService.disableMenu = false;
  }

  back() {
    this.navCtrl.back();
  }

  continue() {

    let params = this.form.value;

    this.accountService.saveStep7(params).subscribe(data => {
      this.router.navigate(['step8']);
    });    
  }
}
