import { Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component'; 
import { FormularzComponent } from './components/formularz/formularz.component';

export const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'dodaj', component: FormularzComponent }
];