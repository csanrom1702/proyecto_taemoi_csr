import { Component } from '@angular/core';
import { EndpointsService } from '../../../servicios/endpoints/endpoints.service';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../servicios/generales/sidebar.service';
import { SidebarComponent } from '../../vistas/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-listado-alumnos-completo',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './listado-alumnos-completo.component.html',
  styleUrl: './listado-alumnos-completo.component.scss'
})
export class ListadoAlumnosCompletoDTOComponent {
  alumnos: any[] = [];

  constructor(private endpointsService: EndpointsService, private sidebarService: SidebarService) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
    this.obtenerAlumnos();
    }
  }

  obtenerAlumnos() {
    const token = localStorage.getItem('token');

    if (token) {
      this.endpointsService.enviarToken(token).subscribe({
        next: (response) => {
          this.alumnos = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  alternarVisibilidadSidebar(): void {
    this.sidebarService.alternarSidebar();
  }
}
