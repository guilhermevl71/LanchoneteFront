import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { noAuthGuard } from './core/guards/no-auth.guard';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { LanchesComponent } from './pages/lanches/lanches.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { authGuard } from './core/guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
        canActivate: [noAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full',
        canActivate: [noAuthGuard]
    },
    {
        path: 'bebidas',
        component: BebidasComponent
    },
    {
        path: 'lanches',
        component: LanchesComponent
    },
    {
        path: 'carrinho',
        component: CarrinhoComponent,
        canActivate: [authGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [adminGuard]
    }
];
