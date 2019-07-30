import { MostrarLivroComponent } from './livro/mostrar-livro/mostrar-livro.component';
import { NovoLivroComponent } from './livro/novo-livro/novo-livro.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaDeLivrosComponent } from './livro/lista-de-livros/lista-de-livros.component';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: HomeComponent},
  { path: 'upload', loadChildren: './upload-file/upload-file.module#UploadFileModule'},
  { path: 'livros', component: ListaDeLivrosComponent},
  { path: 'livros/novo', component: NovoLivroComponent},
  { path: 'livro/:id', component: MostrarLivroComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

