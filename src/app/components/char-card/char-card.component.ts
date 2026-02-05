import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-char-card',
  standalone: true,
  imports: [MatIconModule, MatListModule],
  templateUrl: './char-card.component.html',
  styleUrls: ['./char-card.component.css'],
})
export class CharCardComponent {
  characterInfo = input.required<Character>();
}
