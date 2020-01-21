import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import{MatButtonModule,
MatTableModule,
MatSortModule,
MatToolbarModule,
MatSidenavModule,
MatListModule,
MatPaginatorModule,
MatDialogModule,
MatFormFieldModule,
MatSelectModule,
MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
MatExpansionModule,
MatIconModule,
MatGridListModule,
} from '@angular/material';


const Material =[
MatButtonModule,
MatTableModule,
MatSortModule,
MatToolbarModule,
MatSidenavModule,
MatListModule,
MatPaginatorModule,
MatDialogModule,
MatFormFieldModule,
MatSelectModule,
MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
HttpClientModule,
FormsModule,
MatExpansionModule,
MatIconModule,
ChartsModule,
MatGridListModule,
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
