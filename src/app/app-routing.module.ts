import { EmailDetailComponent } from './Components/email-detail/email-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagesComponent } from './Components/messages/messages.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { PreferencesComponent } from './Components/preferences/preferences.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'messages',
    pathMatch: 'full',
  },
  {
    path: 'messages',
    redirectTo: 'messages/inbox',
    pathMatch: 'full',
  },
  {
    path: 'messages/:id',
    component: MessagesComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
  },
  {
    path: ':id',
    component: EmailDetailComponent,
    outlet: 'detail',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
