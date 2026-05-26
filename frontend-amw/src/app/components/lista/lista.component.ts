import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WydarzenieService } from '../../services/wydarzenie'; 
import { Wydarzenie } from '../../models/wydarzenie'; 

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {
  wydarzenia: Wydarzenie[] = [];

  constructor(private wydarzenieService: WydarzenieService) {}

  ngOnInit(): void {
    this.pobierzWydarzenia();
  }

  pobierzWydarzenia(): void {
    this.wydarzenieService.getWydarzenia().subscribe(dane => {
      this.wydarzenia = dane;
    });
  }

  usun(id: string | number | undefined): void {
    if (!id) return;
    if(confirm("Czy na pewno chcesz usunąć to wydarzenie?")) {
      this.wydarzenieService.deleteWydarzenie(id).subscribe(() => {
        this.pobierzWydarzenia(); 
      });
    }
  }
}