import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolbarNavigationComponent } from '../modules/toolbar-navigation/toolbar-navigation.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ToolbarNavigationComponent
  ],
  exports: [ToolbarNavigationComponent],
})
export class SharedModule { }
