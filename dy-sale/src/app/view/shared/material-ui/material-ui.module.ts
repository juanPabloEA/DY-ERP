import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
})
export class MaterialUiModule {}
