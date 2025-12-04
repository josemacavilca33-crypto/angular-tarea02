import { Routes } from '@angular/router';
import { NewComponent } from './pages/doctor/new/new.component';
import { ListComponent } from './pages/doctor/list/list.component';
import { EditComponent } from './pages/doctor/edit/edit.component';
import { DetailComponent } from './pages/doctor/detail/detail.component';
import { NewPacienteComponent } from './pages/paciente/new-paciente/new-paciente.component';
import { ListPacienteComponent } from './pages/paciente/list-paciente/list-paciente.component';
import { EditPacienteComponent } from './pages/paciente/edit-paciente/edit-paciente.component';
import { DetailPacienteComponent } from './pages/paciente/detail-paciente/detail-paciente.component';

export const routes: Routes = [

{
 path: 'new',
 component: NewComponent   
},
{
    path: 'list',
    component: ListComponent
},
{
    path: 'edit/:id',
    component: EditComponent
},
{
    path: 'detail/:id',
    component: DetailComponent
},
{
 path: 'newAfiliado',
 component: NewPacienteComponent   
},
{
    path: 'listAfiliado',
    component: ListPacienteComponent
},
{
    path: 'editAfiliado/:id',
    component: EditPacienteComponent
},
{
    path: 'detailAfiliado/:id',
    component: DetailPacienteComponent
},




{
    path: '**', redirectTo:'list'
}

];
