import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SenacComponent } from './components/senac/senac.component';
import { UnidadesComponent } from './components/unidades/unidades.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'',component: ContentComponent},
    {path:'cursos',component: CursosComponent},
    {path:'senac',component: SenacComponent},
    {path:'unidades',component: UnidadesComponent},
    {path: 'login', component: LoginComponent},
    
];
