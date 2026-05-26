import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router, RouterLink } from '@angular/router';
import { WydarzenieService } from '../../services/wydarzenie';
import { Wydarzenie } from '../../models/wydarzenie';

@Component({
  selector: 'app-formularz',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './formularz.component.html'
})
export class FormularzComponent { 
  wydarzenie: Wydarzenie = {
    tytul: '',
    data: '',
    opis: ''
  };

  constructor(
    private wydarzenieService: WydarzenieService,
    private router: Router
  ) {}

  zapiszWydarzenie(): void {
    this.wydarzenieService.addWydarzenie(this.wydarzenie).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}