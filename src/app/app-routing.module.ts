import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {
    path: '', component: MenuComponent, children: [
      {
        path: '', redirectTo: '/', pathMatch: 'full'
      },
      {
        path: '', component: MainPageComponent
      },
      {
        path: 'projects', component: ProjectsComponent
      },
      {
        path: 'contacts', component: ContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
