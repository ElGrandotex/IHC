import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  private localStorage = this.document.defaultView?.localStorage;
  public username = this.localStorage?.getItem('username');
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ){}

  public sidebarItems = [
    {label: 'Lista', icon: 'format_list_bulleted', url:'./home'},
    {label: 'Pagos pendientes', icon: 'payments', url:'./pago'},
    {label: 'Beneficios', icon: 'redeem', url:'./beneficio'},
  ]

  logout(){
    this.localStorage!.removeItem('token');
    this.localStorage!.removeItem('username');
    this.router.navigate(['/auth']);
  }
}
