import { Pipe, PipeTransform, inject, effect, signal } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {
  private translationService = inject(TranslationService);
  private updateSignal = signal(0);

  constructor() {
    // Trigger pipe update when language changes
    effect(() => {
      this.translationService.language; // Track language changes
      this.updateSignal.update(v => v + 1); // Force pipe update
    });
  }

  transform(key: string): string {
    this.updateSignal(); // Read signal to trigger reactivity
    return this.translationService.translate(key);
  }
}