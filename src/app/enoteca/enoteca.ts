import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';

interface Wine {
  id: number;
  name: string;
  producer?: string;
  description: string;
  price: string;
  type?: string;
  showAllergens?: boolean;
  allergens?: string[];
}

interface WineSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  wines: Wine[];
  expanded: boolean;
}

@Component({
  selector: 'app-enoteca',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  templateUrl: './enoteca.html',
  styleUrl: './enoteca.css'
})
export class Enoteca {
  selectedSection: string | null = null;

  wineSections: WineSection[] = [
    {
      id: 'cantina-ippolito',
      title: 'Cantina Ippolito',
      subtitle: 'Eccellenza Calabrese',
      description: 'Vini di tradizione calabrese che esprimono il carattere autentico del territorio',
      expanded: false,
      wines: [
        {
          id: 1,
          name: 'Cirò Rosso DOC',
          description: 'Vino rosso tradizionale calabrese dal carattere deciso',
          price: '€15',
          type: 'DOC',
          allergens: ['Solfiti']
        },
        {
          id: 2,
          name: 'Mare Chiaro Cirò Bianco DOC',
          description: 'Bianco fresco e minerale dalle colline del Cirò',
          price: '€15',
          type: 'DOC',
          allergens: ['Solfiti']
        },
        {
          id: 3,
          name: 'Pecorello Bianco IGT Calabria',
          description: 'Vitigno autoctono dal sapore unico e distintivo',
          price: '€18',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 4,
          name: 'Pesca Nera Rosé IGT Calabria',
          description: 'Rosato elegante con note fruttate e fresche',
          price: '€18',
          type: 'IGT',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'cantine-spadafora',
      title: 'Cantine Spadafora',
      subtitle: 'Innovazione e Tradizione',
      description: 'Vini moderni che rispettano la tradizione calabrese con tecniche innovative',
      expanded: false,
      wines: [
        {
          id: 5,
          name: 'Albamonte Calabria IGP Rosso 2024',
          description: 'Rosso giovane e fresco dall\'annata 2024',
          price: '€15',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 6,
          name: 'Albamonte Calabria IGP Rosé 2024',
          description: 'Rosato della nuova annata, fresco e beverino',
          price: '€15',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 7,
          name: 'Dolcemare Calabria IGP Bianco 2024',
          description: 'Bianco aromatico con note dolci e marine',
          price: '€20',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 8,
          name: 'Luna Piena Terre di Cosenza Bianco 2024',
          description: 'Bianco dalle terre cosentine, elegante e raffinato',
          price: '€24',
          type: 'Terre di Cosenza',
          allergens: ['Solfiti']
        },
        {
          id: 9,
          name: 'Pandosia Calabria IGP Bianco Pecorello 2024',
          description: 'Pecorello in purezza, espressione del territorio',
          price: '€28',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 10,
          name: 'Rosa Spina Calabria IGP Rosato 2024',
          description: 'Rosato intenso con carattere deciso',
          price: '€25',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 11,
          name: 'Sole Nero Calabria IGP Rosso 2024',
          description: 'Rosso corposo che racchiude il sole della Calabria',
          price: '€20',
          type: 'IGP',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'cantina-antonello-lombardo',
      title: 'Cantina Antonello Lombardo',
      subtitle: 'Vini d\'Autore',
      description: 'Produzioni limitate di altissima qualità per intenditori',
      expanded: false,
      wines: [
        {
          id: 12,
          name: 'Greco Bianco',
          description: 'Vitigno antico dalle note complesse e strutturate',
          price: '€36',
          type: 'Vitigno Autoctono',
          allergens: ['Solfiti']
        },
        {
          id: 13,
          name: 'Aoristo Rosso Gaglioppo',
          description: 'Gaglioppo di alta gamma, elegante e longevo',
          price: '€45',
          type: 'Vitigno Autoctono',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'librandi',
      title: 'Librandi',
      subtitle: 'Tradizione dal 1950',
      description: 'Una delle cantine storiche più prestigiose della Calabria',
      expanded: false,
      wines: [
        {
          id: 14,
          name: 'Critone IGT Calabria Bianco Summer Edition 2024',
          description: 'Edizione estiva fresca e minerale',
          price: '€18',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 15,
          name: 'Cirò Rosso Classico DOC 2023',
          description: 'Il classico Cirò nella sua espressione più pura',
          price: '€15',
          type: 'DOC',
          allergens: ['Solfiti']
        },
        {
          id: 16,
          name: 'Cirò Rosato DOC 2024',
          description: 'Rosato dal territorio del Cirò, fresco e sapido',
          price: '€15',
          type: 'DOC',
          allergens: ['Solfiti']
        },
        {
          id: 17,
          name: 'Cirò Bianco DOC 2024',
          description: 'Bianco tradizionale dal territorio del Cirò',
          price: '€15',
          type: 'DOC',
          allergens: ['Solfiti']
        },
        {
          id: 18,
          name: 'Efeso Bianco IGT Calabria',
          description: 'Bianco di carattere con personalità distintiva',
          price: '€24',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 19,
          name: 'Gravello Rosso IGT Calabria 2022',
          description: 'Rosso di grande struttura e complessità',
          price: '€30',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 20,
          name: 'Megonio Rosso IGT Calabria',
          description: 'Rosso importante dal carattere deciso',
          price: '€24',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 21,
          name: 'Duca San Felice Cirò Rosso',
          description: 'Cirò rosso di alta gamma e prestigio',
          price: '€22',
          type: 'Cirò',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'tramontana',
      title: 'Tramontana',
      subtitle: 'Venti di Calabria',
      description: 'Vini che portano i profumi del mare e della montagna calabrese',
      expanded: false,
      wines: [
        {
          id: 22,
          name: 'Vorea Calabria Rosso IGT 2024',
          description: 'Rosso giovane e immediato dall\'ultima annata',
          price: '€18',
          type: 'IGT',
          allergens: ['Solfiti']
        },
        {
          id: 23,
          name: 'Gramà Costa Viola IGT Bianco (Zibibbo)',
          description: 'Zibibbo dalla Costa Viola, aromatico e mediterraneo',
          price: '€20',
          type: 'IGT',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'magna-grecia',
      title: 'Magna Grecia',
      subtitle: 'Storia Antica',
      description: 'Vini che raccontano la storia millenaria della Magna Grecia',
      expanded: false,
      wines: [
        {
          id: 24,
          name: 'Rosso Baronè 2017 IGP Calabria',
          description: 'Rosso invecchiato di grande struttura e complessità',
          price: '€30',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 25,
          name: 'Bianco Baronè 2024 IGP Calabria',
          description: 'Bianco elegante dalla nuova annata',
          price: '€22',
          type: 'IGP',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'casa-comerci',
      title: 'Casa Comerci Calabria',
      subtitle: 'Espressioni Autoctone',
      description: 'Vitigni autoctoni calabresi in espressioni pure e caratteristiche',
      expanded: false,
      wines: [
        {
          id: 26,
          name: 'Rèfulu Greco Bianco IGP Calabria 2024',
          description: 'Greco bianco in purezza, fresco e minerale',
          price: '€20',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 27,
          name: 'Libìci Magliocco Canino Rosso IGP Calabria 2022',
          description: 'Magliocco canino di carattere, rosso tipicamente calabrese',
          price: '€22',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 28,
          name: 'Granàtu Magliocco Canino Rosato IGP Calabria 2024',
          description: 'Rosato da Magliocco canino, fresco e fruttato',
          price: '€20',
          type: 'IGP',
          allergens: ['Solfiti']
        }
      ]
    },
    {
      id: 'serracavallo',
      title: 'Serracavallo',
      subtitle: 'Essenza del Territorio',
      description: 'Vini che esprimono l\'essenza più pura del territorio calabrese',
      expanded: false,
      wines: [
        {
          id: 29,
          name: 'Settechiese Rosso IGP Calabria 2024',
          description: 'Rosso territoriale dalla nuova annata',
          price: '€15',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 30,
          name: 'Settechiese Bianco IGP Calabria 2024',
          description: 'Bianco fresco e immediato',
          price: '€15',
          type: 'IGP',
          allergens: ['Solfiti']
        },
        {
          id: 31,
          name: 'FILI\' Rosato IGP Calabria 2024',
          description: 'Rosato delicato e beverino',
          price: '€15',
          type: 'IGP',
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