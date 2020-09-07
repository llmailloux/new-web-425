/*
===================================
; Title: app-routing.modules.ts
; Author: Laurie Mailloux
; Date: 05 September 2020
; Description: App-Routing Modules
===================================
*/



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
