import { Pipe, PipeTransform, inject, effect, signal, DestroyRef } from '@angular/core';
import { I18nService } from '../services/i18n.service';

@Pipe({
  name: 'i18n',
  standalone: true,
  pure: false  // Importante: deve essere impure per reagire ai cambi di lingua
})
export class I18nPipe implements PipeTransform {
  private i18nService = inject(I18nService);
  private updateSignal = signal(0);
  private destroyRef = inject(DestroyRef);

  constructor() {
    // Effetto che forza l'aggiornamento quando cambia la lingua
    const effectRef = effect(() => {
      this.i18nService.currentLanguage$(); // Track della lingua corrente
      this.updateSignal.update(v => v + 1); // Forza l'aggiornamento del pipe
    });

    // Cleanup automatico quando il pipe viene distrutto
    this.destroyRef.onDestroy(() => effectRef.destroy());
  }

  transform(key: string): string {
    // Legge il segnale per assicurarsi che Angular rilevi i cambiamenti
    this.updateSignal();
    return this.i18nService.translate(key);
  }
}