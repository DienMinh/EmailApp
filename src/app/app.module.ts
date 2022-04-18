import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailBoxComponent } from './Components/email-box/email-box.component';
import { EmailPreviewComponent } from './Components/email-preview/email-preview.component';
import { EmailDetailComponent } from './Components/email-detail/email-detail.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { PreferencesComponent } from './Components/preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailBoxComponent,
    EmailPreviewComponent,
    EmailDetailComponent,
    NavBarComponent,
    PageNotFoundComponent,
    MessagesComponent,
    ContactsComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
