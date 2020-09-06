import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './content/login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootReducers } from './store/index.state';
import { AuthEffects } from './store/effects/auth.effects';
import { AuthRoutingModule } from './auth.routing.module';
import { PropertypipePipe } from '@pipes/propertypipe.pipe';

@NgModule({
  declarations: [LoginComponent, PropertypipePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    AuthRoutingModule,
    StoreModule.forRoot(rootReducers, {}),
    EffectsModule.forRoot([AuthEffects]),
  ],
})
export class AuthModule {}
