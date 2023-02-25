import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'links',
    pathMatch: 'full',
  },
  {
    path: 'links',
    loadChildren: () =>
      import('./pages/url-shortener/url-shortener.module').then(
        (m) => m.UrlShortenerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
