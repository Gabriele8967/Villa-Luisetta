import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { I18nPipe } from '../pipes/i18n.pipe';
import { I18nService } from '../services/i18n.service';

interface Wine {
  id: number;
  name: string;
  producer?: string;
  price: string;
  type?: string;
  showAllergens?: boolean;
  allergens?: string[];
}

interface WineSection {
  id: string;
  title: string;
  wines: Wine[];
  expanded: boolean;
}

@Component({
  selector: 'app-enoteca',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, I18nPipe],
  templateUrl: './enoteca.html',
  styleUrl: './enoteca.css'
})
export class Enoteca {
  selectedSection: string | null = null;
  private i18nService = inject(I18nService);

  wineSections: WineSection[] = [
    {
      id: 'cantina-ippolito',
      title: this.i18nService.translate('wine.section.cantina-ippolito'),
      expanded: false,
      wines: [
        {
          id: 1,
          name: 'Cirò Rosso DOC',
          price: '€15',
          type: 'DOC',
          allergens: ['Solfiti']
        },
        {
          id: 2,
          name: 'Mare Chiaro Cirò Bianco DOC',
          price: '€15',
          type: 'DOC',
          allergens: ['Solfiti']
        },
        {
          id: 3,
          name: 'Pecorello Bianco IGT Calabria',
          price: '€18',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 4,
          name: 'Pesca Nera Rosé IGT Calabria',
          price: '€18',
          type: 'IGT',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'cantine-spadafora',
      title: this.i18nService.translate('wine.section.cantine-spadafora'),
      expanded: false,
      wines: [
        {
          id: 5,
          name: 'Albamonte Calabria IGP Rosso 2024',
          price: '€15',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 6,
          name: 'Albamonte Calabria IGP Rosé 2024',
          price: '€15',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 7,
          name: 'Dolcemare Calabria IGP Bianco 2024',
          price: '€20',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 8,
          name: 'Luna Piena Terre di Cosenza Bianco 2024',
          price: '€24',
          type: 'Terre di Cosenza',
          allergens: ['Solfiti']
        },
        {
          id: 9,
          name: 'Pandosia Calabria IGP Bianco Pecorello 2024',
          price: '€28',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 10,
          name: 'Rosa Spina Calabria IGP Rosato 2024',
          price: '€25',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 11,
          name: 'Sole Nero Calabria IGP Rosso 2024',
          price: '€20',
          type: 'IGP',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'cantina-antonello-lombardo',
      title: this.i18nService.translate('wine.section.cantina-antonello-lombardo'),
      expanded: false,
      wines: [
        {
          id: 12,
          name: 'Greco Bianco',
          price: '€36',
          type: 'Vitigno Autoctono',
          allergens: ['Solfiti']
        },
        {
          id: 13,
          name: 'Aoristo Rosso Gaglioppo',
          price: '€45',
          type: 'Vitigno Autoctono',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'librandi',
      title: this.i18nService.translate('wine.section.librandi'),
      expanded: false,
      wines: [
        {
          id: 14,
          name: 'Critone IGT Calabria Bianco Summer Edition 2024',
          price: '€18',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 15,
          name: 'Cirò Rosso Classico DOC 2023',
          price: '€15',
          type: 'DOC',
          allergens: ['Solfiti']
        },
        {
          id: 16,
          name: 'Cirò Rosato DOC 2024',
          price: '€15',
          type: 'DOC',
          allergens: ['Solfiti']
        },
        {
          id: 17,
          name: 'Cirò Bianco DOC 2024',
          price: '€15',
          type: 'DOC',
          allergens: ['Solfiti']
        },
        {
          id: 18,
          name: 'Efeso Bianco IGT Calabria',
          price: '€24',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 19,
          name: 'Gravello Rosso IGT Calabria 2022',
          price: '€30',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 20,
          name: 'Megonio Rosso IGT Calabria',
          price: '€24',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 21,
          name: 'Duca San Felice Cirò Rosso',
          price: '€22',
          type: 'Cirò',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'tramontana',
      title: this.i18nService.translate('wine.section.tramontana'),
      expanded: false,
      wines: [
        {
          id: 22,
          name: 'Vorea Calabria Rosso IGT 2024',
          price: '€18',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 23,
          name: 'Gramà Costa Viola IGT Bianco (Zibibbo)',
          price: '€20',
          type: 'IGT',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'magna-grecia',
      title: this.i18nService.translate('wine.section.magna-grecia'),
      expanded: false,
      wines: [
        {
          id: 24,
          name: 'Rosso Baronè 2017 IGP Calabria',
          price: '€30',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 25,
          name: 'Bianco Baronè 2024 IGP Calabria',
          price: '€22',
          type: 'IGP',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'casa-comerci',
      title: this.i18nService.translate('wine.section.casa-comerci'),
      expanded: false,
      wines: [
        {
          id: 26,
          name: 'Rèfulu Greco Bianco IGP Calabria 2024',
          price: '€20',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 27,
          name: 'Libìci Magliocco Canino Rosso IGP Calabria 2022',
          price: '€22',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 28,
          name: 'Granàtu Magliocco Canino Rosato IGP Calabria 2024',
          price: '€20',
          type: 'IGP',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'serracavallo',
      title: this.i18nService.translate('wine.section.serracavallo'),
      expanded: false,
      wines: [
        {
          id: 29,
          name: 'Settechiese Rosso IGP Calabria 2024',
          price: '€15',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 30,
          name: 'Settechiese Bianco IGP Calabria 2024',
          price: '€15',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 31,
          name: 'FILI\' Rosato IGP Calabria 2024',
          price: '€15',
          type: 'IGP',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'berlucchi',
      title: this.i18nService.translate('wine.section.berlucchi'),
      expanded: false,
      wines: [
        {
          id: 32,
          name: 'Berlucchi Franciacorta Satèn',
          price: '€30',
          type: 'Franciacorta DOCG',
          allergens: ['Solfiti']
        },
        {
          id: 33,
          name: 'Berlucchi Franciacorta Rosè',
          price: '€30',
          type: 'Franciacorta DOCG',
          allergens: ['Solfiti']
        },
        {
          id: 34,
          name: 'Berlucchi Franciacorta Brut',
          price: '€30',
          type: 'Franciacorta DOCG',
          allergens: ['Solfiti']
        }
      ]
    }
  ];

  selectSection(sectionId: string) {
    this.selectedSection = this.selectedSection === sectionId ? null : sectionId;
  }

  isSectionSelected(sectionId: string): boolean {
    return this.selectedSection === sectionId;
  }

  toggleAllergens(wineId: number) {
    this.wineSections.forEach(section => {
      const wine = section.wines.find(w => w.id === wineId);
      if (wine) {
        wine.showAllergens = !wine.showAllergens;
      }
    });
  }

  formatAllergens(allergens?: string[]): string {
    if (!allergens || allergens.length === 0) return '';
    return allergens.join(', ');
  }
}