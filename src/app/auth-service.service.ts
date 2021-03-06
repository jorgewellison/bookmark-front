import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {

  public usuarioAutenticado : boolean = false;
  mostrarNavEmitter = new EventEmitter<boolean>();
  ocultarNavEmitter = new EventEmitter<boolean>();

 constructor(private router: Router) {

  }
  fazerLogin(usuario: string, senha: string) : any {
    if (usuario === 'usuario@email.com' && senha === '123456') {
      localStorage.setItem('username', 'Usuario');
      this.mostrarNavEmitter.emit(true);
      this.router.navigate(['dashboard']);
      this.usuarioAutenticado = true;
    } else {
      this.usuarioAutenticado = false;
    }
  }

  logout() : any {
    localStorage.removeItem('username');
    this.ocultarNavEmitter.emit(true);
  }
  getUser() : any { return localStorage.getItem('username');}
  logado(): boolean { return this.getUser() !== null;}

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}

