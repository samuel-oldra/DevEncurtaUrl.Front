import { EditUrlComponent } from './edit/edit-url.component';
import { CreateUrlComponent } from './create/create-url.component';
import { UrlShortenerComponent } from './url-shortener.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UrlShortenerComponent,
  },
  {
    path: 'create',
    component: CreateUrlComponent,
  },
  {
    path: 'edit',
    component: EditUrlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrlShortenerRoutingModule {}
