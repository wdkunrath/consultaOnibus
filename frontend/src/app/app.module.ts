import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { registerLocaleData } from  '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { RedDirective } from './directives/red.directive';
import { BlueDirective } from './directives/blue.directive';
import { ForDirective } from './directives/for.directive';

import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './helpers';

import { HomeComponent } from '@app/views/home';
import { LoginComponent } from '@app/views/login';
import { LotacaoComponent } from '@app/views/lotacao';
import { OnibusComponent } from '@app/views/onibus';

import { HeaderComponent } from '@components/template/header/header.component';
import { NavComponent } from '@components/template/nav/nav.component';
import { FooterComponent } from '@components/template/footer/footer.component';

import { LotacaoListarComponent } from '@components/lotacao/lotacao-listar/lotacao-listar.component';
import { LotacaoItinerarioComponent } from '@components/lotacao/lotacao-itinerario/lotacao-itinerario.component';
import { OnibusListarComponent } from '@components/onibus/onibus-listar/onibus-listar.component';
import { OnibusItinerarioComponent } from '@components/onibus/onibus-itinerario/onibus-itinerario.component'


registerLocaleData(localePt);

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      HeaderComponent,
      NavComponent,
      FooterComponent,

      OnibusComponent,
      OnibusListarComponent,
      OnibusItinerarioComponent,

      LotacaoComponent,
      LotacaoListarComponent,
      LotacaoItinerarioComponent,

      RedDirective,
      BlueDirective,
      ForDirective,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDF2s2CNdj2QkNc98AaEJRF6AhM0LTpaGs'
        })
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
