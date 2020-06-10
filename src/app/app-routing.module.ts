import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthService} from './providers/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthService],
    data: {
      disableMenu: false
    }
  },
  {
    path: 'question-view',
    loadChildren: () => import('./pages/logged-in/question/question-view/question-view.module').then( m => m.QuestionViewPageModule),
    canActivate: [AuthService],
    data: {
      disableMenu: false
    }
  },
  {
    path: 'plan',
    loadChildren: () => import('./pages/logged-in/plan/plan.module').then( m => m.PlanPageModule),
    canActivate: [AuthService],
    data: {
      disableMenu: false
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/start-pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthService],
    data: {
      disableMenu: true
    }
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/start-pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [AuthService],
    data: {
      disableMenu: true
    }
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/start-pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    canActivate: [AuthService],
    data: {
      disableMenu: true
    }
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start-pages/landing/landing.module').then( m => m.LandingPageModule),
    canActivate: [AuthService],
    data: {
      disableMenu: true
    }
  },  
  {
    path: 'step1',
    loadChildren: () => import('./pages/logged-in/personal/step1/step1.module').then( m => m.Step1PageModule)
  },
  {
    path: 'step2',
    loadChildren: () => import('./pages/logged-in/personal/step2/step2.module').then( m => m.Step2PageModule)
  },  
  {
    path: 'step3',
    loadChildren: () => import('./pages/logged-in/personal/step3/step3.module').then( m => m.Step3PageModule)
  },
  {
    path: 'step4',
    loadChildren: () => import('./pages/logged-in/personal/step4/step4.module').then( m => m.Step4PageModule)
  },
  {
    // path: 'pending-profile-sections',
    path: 'pending',
    loadChildren: () => import('./pages/logged-in/pending-profile-sections/pending-profile-sections.module').then( m => m.PendingProfileSectionsPageModule),
    canActivate: [AuthService],
    data: {
      disableMenu: true
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
