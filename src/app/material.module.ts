import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule, MatTableDataSource, MatFormFieldModule, MatInputModule, MatGridListModule,
MatToolbarModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatStepperModule, MatDividerModule, MatRadioModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatToolbarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatDividerModule,
  MatRadioModule
  ],
  exports: [
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatToolbarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatDividerModule,
  MatRadioModule
  ]
})
export class MaterialModule { }
