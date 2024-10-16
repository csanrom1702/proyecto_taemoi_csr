import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EndpointsService } from '../../../../servicios/endpoints/endpoints.service';

@Component({
  selector: 'app-slider-tocable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-tocable.component.html',
  styleUrl: './slider-tocable.component.scss',
})
export class SliderTocableComponent implements OnInit {
  eventos: any[] = [];
  defaultFotos: any[] = [
    {
      titulo: 'Evento 1',
      descripcion: 'Descripción del evento 1',
      fotoEvento: {
        tipo: 'image/webp',
        datos: '../../../../assets/media/default.webp',
      },
    },
    {
      titulo: 'Evento 2',
      descripcion: 'Descripción del evento 2',
      fotoEvento: {
        tipo: 'image/webp',
        datos: '../../../../assets/media/default.webp',
      },
    },
    {
      titulo: 'Evento 3',
      descripcion: 'Descripción del evento 3',
      fotoEvento: {
        tipo: 'image/webp',
        datos: '../../../../assets/media/default.webp',
      },
    },
    {
      titulo: 'Evento 4',
      descripcion: 'Descripción del evento 4',
      fotoEvento: {
        tipo: 'image/webp',
        datos: '../../../../assets/media/default.webp',
      },
    },
    {
      titulo: 'Evento 5',
      descripcion: 'Descripción del evento 5',
      fotoEvento: {
        tipo: 'image/webp',
        datos: '../../../../assets/media/default.webp',
      },
    },
  ];

  usuarioLogueado: boolean = false;

  constructor(private readonly endpointsService: EndpointsService) {}

  ngOnInit(): void {
    this.obtenerEventos();
  }

  obtenerEventos() {
    this.endpointsService.obtenerEventos().subscribe({
      next: (response) => {
        this.eventos = response.length
          ? response.slice(0, 5)
          : this.defaultFotos; // Mostrar fotos predeterminadas si no hay eventos
      },
      error: (error) => {
        Swal.fire({
          title: 'Error',
          text: 'No hemos podido obtener los eventos.',
          icon: 'error',
        });
        this.eventos = this.defaultFotos; // Mostrar fotos predeterminadas en caso de error
      },
    });
  }
}
