import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { ApplicationState } from './state/aplication/application.state';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeBarComponent } from './main/components/change-bar/change-bar.component';
import { BreadcrumbsBarComponent } from './main/components/breadcrumbs-bar/breadcrumbs-bar.component';
import { MainMenuComponent } from './main/components/main-menu/main-menu.component';

@NgModule({
  declarations: [
    ChangeBarComponent,
    BreadcrumbsBarComponent,
    MainMenuComponent,
    
    MainComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,

    MaterialModule,
    BrowserAnimationsModule,

    NgxsModule.forRoot([ApplicationState]),
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
