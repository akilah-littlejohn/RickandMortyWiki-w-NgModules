import { Component, inject, signal, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { CharacterdataService } from '../../services/characterdata.service';
import { CharCardComponent } from '../char-card/char-card.component';
import { RandmsvgComponent } from '../../home-svgtemplate/randmsvg/randmsvg.component';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule, CharCardComponent, RandmsvgComponent],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  private readonly characterService = inject(CharacterdataService);
  private readonly destroyRef = inject(DestroyRef);

  searchedCharacters = signal<Character[]>([]);
  pageNumber = signal(1);

  searchByName(name: string, page: number): void {
    if (!name.trim()) {
      this.searchedCharacters.set([]);
      return;
    }

    this.characterService
      .getCharacterData(name, page)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.searchedCharacters.set(response.results);
        },
        error: () => {
          this.searchedCharacters.set([]);
        },
      });
  }
}
