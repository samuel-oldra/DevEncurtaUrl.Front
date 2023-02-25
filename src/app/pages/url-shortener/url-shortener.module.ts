import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/components/card/card.component';
import { ButtonComponent } from './../../components/button/button.component';
import { CreateUrlComponent } from './create/create-url.component';
import { EditUrlComponent } from './edit/edit-url.component';
import { UrlShortenerRoutingModule } from './url-shortener-routing.module';
import { UrlShortenerComponent } from './url-shortener.component';
import { UrlsTableComponent } from './components/urls-table/urls-table.component';
import { SimpleModalComponent } from 'src/app/components/simple-modal/simple-modal.component';

@NgModule({
  declarations: [
    UrlShortenerComponent,
    ButtonComponent,
    CreateUrlComponent,
    CardComponent,
    EditUrlComponent,
    UrlsTableComponent,
    SimpleModalComponent,
  ],
  imports: [
    CommonModule,
    UrlShortenerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UrlShortenerModule {}
