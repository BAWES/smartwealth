import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthService} from './providers/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'question-view',
    loadChildren: () => import('./pages/logged-in/question/question-view/question-view.module').then( m => m.QuestionViewPageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./pages/logged-in/plan/plan.module').then( m => m.PlanPageModule)
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
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
