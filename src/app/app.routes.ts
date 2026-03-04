import { Routes } from '@angular/router';
import { MainlayoutComponent } from './mainlayout.component/mainlayout.component';

export const ROUTES = {
  MAIN: 'main',
  LIST: 'list',
  CREATE: 'create',
  EDIT: 'edit',
};

export const PARAMS = {
  ID: 'id',
}

export const routes: Routes = [
  { path: ROUTES.MAIN, component: MainlayoutComponent, children: [
    { path: ROUTES.LIST, loadComponent: () => import('./categoria-list.component/categoria-list.component').then((m) => m.CategoriaListComponent) },
    { path: ROUTES.CREATE, loadComponent: () => import('./categoria-form.component/categoria-form.component').then((m) => m.CategoriaFormComponent) },
    { path: `${ROUTES.EDIT}/:${PARAMS.ID}`, loadComponent: () => import('./categoria-form.component/categoria-form.component').then((m) => m.CategoriaFormComponent) },
  ]},
  { path: '**', redirectTo: ROUTES.MAIN }];
