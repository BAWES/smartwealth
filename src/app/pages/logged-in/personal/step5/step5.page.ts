import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AccountService } from 'src/app/providers/logged-in/account.service';
import { AuthService } from 'src/app/providers/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-step5',
  templateUrl: './step5.page.html',
  styleUrls: ['./step5.page.scss'],
})
export class Step5Page implements OnInit {
 
  public form: FormGroup;
  
  mobNumberPattern = "^((\\+965-?)|0)?[0-9]{8}$";

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public _fb: FormBuilder, 
    public accountService: AccountService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    this.form = this._fb.group({
      city: [localStorage.getItem('city'), Validators.required],
      area: [localStorage.getItem('area'), Validators.required],
      street: [localStorage.getItem('street'), Validators.required],
      avenue: [localStorage.getItem('avenue'), Validators.required],
      block: [localStorage.getItem('block'), Validators.required],
      houseNumber: [localStorage.getItem('houseNumber'), Validators.required],
      mobileNumber: [localStorage.getItem('mobileNumber'), Validators.required]
    }); 
  } 

  ionViewWillEnter() {
    this.authService.disableMenu = true;
  }

  back() {
    this.navCtrl.back();
  }

  continue() {

    let params = this.form.value;

    this.accountService.saveStep5(params).subscribe(data => {
      this.router.navigate(['step6']);
    });    
  }
}
