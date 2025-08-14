import { Injectable, signal, effect } from '@angular/core';

export type SupportedLanguage = 'it' | 'en' | 'fr';

export interface TranslationData {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLanguage = signal<SupportedLanguage>('it');
  
  // Dizionario completo delle traduzioni
  private translations: Record<SupportedLanguage, TranslationData> = {
    it: {
      // Home Page
      'home.hero.title': 'Un nuovo concept di ospitalità e degustazione, immerso tra l\'arte e la storia della città di Palmi',
      'home.button.rooms': 'Stanze',
      'home.button.rooms.subtitle': 'Soggiorna con comfort',
      'home.button.gallery': 'Gallery',
      'home.button.gallery.subtitle': 'Scopri la bellezza',
      'home.button.food': 'Aperitivi',
      'home.button.food.subtitle': 'Esperienza culinaria',
      'home.button.bar': 'Bar',
      'home.button.bar.subtitle': 'Gin, Amari e Grappe',
      
      // Navigation
      'nav.rooms': 'Stanze',
      'nav.gallery': 'Gallery',
      'nav.menu': 'Menu',
      'nav.bar': 'Bar',
      'nav.enoteca': 'Enoteca',
      'nav.book': 'Prenota',
      
      // Footer
      'footer.description': 'Tradizione in evoluzione nel cuore dell\'eleganza italiana',
      'footer.follow': 'Seguici',
      'footer.map.hint': '📍 Ottieni indicazioni',
      
      // Apartments
      'apartments.hero.title.line1': 'Le nostre',
      'apartments.hero.title.line2': 'Stanze',
      'apartments.hero.description': 'Scopri il comfort dei nostri appartamenti dove ogni dettaglio è curato per offrirti un soggiorno piacevole a Villa Luisetta',
      'apartments.hero.stat.label': 'Stanze Disponibili',
      'apartments.showcase.title': 'Scegli la Tua Stanza',
      'apartments.contact.button': 'Contattaci',
      'apartments.cta.title': 'Pronto per il Tuo Soggiorno?',
      'apartments.cta.description': 'Contattaci per ricevere informazioni e scoprire le nostre disponibilità per le tue date',
      'apartments.cta.email': 'Richiedi Disponibilità',
      'apartments.cta.phone': 'Chiamaci',
      
      // Gallery  
      'gallery.hero.title': 'Gallery',
      'gallery.hero.subtitle': 'Scopri gli angoli più suggestivi di Villa Luisetta attraverso le nostre immagini',
      
      // Food
      'food.hero.title': 'Menu Apericena',
      'food.hero.subtitle': 'Scopri i nostri menu degustazione con prodotti locali e specialità calabresi',
      'food.cta.title': 'Prenota il Tuo Apericena',
      'food.cta.book': 'Prenota Ora',
      'food.cta.call': 'Chiamaci',
      
      // Food allergens and legal
      'food.allergens.contains': 'Contiene:',
      'food.allergens.label': 'Allergeni:',
      'food.legal.allergens': 'I prodotti evidenziati possono contenere allergeni.',
      'food.legal.frozen': 'I prodotti contrassegnati con asterisco potrebbero essere congelati in mancanza di disponibilità di prodotto fresco, secondo il decreto legislativo 17 luglio 2013.',
      'food.legal.variations': 'Non è consentito apportare variazioni al menù.',
      'food.legal.title': 'Informazioni Importanti',
      
      // Cocktails
      'cocktails.hero.title': 'Bar Villa Luisetta',
      'cocktails.hero.subtitle': 'Gin, amari, grappe e vini selezionati per un momento di puro relax',
      'cocktails.cta.description': 'Scegli il tuo orario e vieni a gustare i nostri cocktails e aperitivi',
      'cocktails.cta.book': 'Prenota Ora',
      'cocktails.cta.call': 'Chiamaci',
      'cocktails.allergens.title': 'Allergeni',
      
      // Enoteca
      'enoteca.hero.title': 'Enoteca Villa Luisetta',
      'enoteca.hero.subtitle': 'Tradizione vinicola e distillati d\'eccellenza nel cuore della Calabria',
      'enoteca.cta.title': 'Prenota la Tua Degustazione',
      'enoteca.cta.description': 'Scegli il tuo orario e vieni a degustare i nostri vini e distillati selezionati',
      'enoteca.cta.book': 'Prenota Ora',
      'enoteca.cta.call': 'Chiamaci',
      
      // Reservations
      'reservations.title': 'Prenota il Tuo Tavolo',
      'reservations.subtitle': 'Scegli l\'orario perfetto per la tua esperienza culinaria a Villa Luisetta',
      'reservations.book.whatsapp': 'Prenota via WhatsApp',
      'reservations.policy.title': 'Politica di Puntualità',
      'reservations.policy.text': 'Si prega di rispettare l\'orario di prenotazione. Trascorsi 15 minuti dall\'orario concordato, il tavolo verrà rilasciato per consentire l\'accoglienza di altri ospiti',
      'reservations.slot.label': 'Prenotazione',
      'reservations.slot.notice': 'Il tavolo deve essere liberato entro la fine dell\'orario prenotato',
      'reservations.info.title': 'Informazioni Prenotazioni',
      'reservations.info.confirm.title': 'Conferma Immediata',
      'reservations.info.confirm.text': 'Riceverai conferma della prenotazione tramite WhatsApp',
      'reservations.info.menu.title': 'Menu Completo',
      'reservations.info.menu.text': 'Tutti i nostri menu sono disponibili in ogni fascia oraria',
      
      // Footer Copyright
      'footer.copyright': '&copy; 2024 Villa Luisetta. Tutti i diritti riservati.',
      
      // Contact Info
      'contact.email': 'villaluisettareservations&#64;gmail.com',
      'contact.address': 'Via Roma 86, Palmi',
      'contact.address.full': 'Via Roma 86, Palmi, Italy',
      
      // Footer Links
      'footer.privacy': 'Privacy Policy',
      'footer.cookies': 'Cookie Policy',
      'footer.legal': 'Note Legali',
      
      // Menu Options
      'menu.aperitivo-classico.title': 'Aperitivo Classico',
      'menu.aperitivo-classico.beverage': '1 calice di vino (cantine Statti bianco-rosso-rosato) o cocktail base',
      'menu.apericena-terra.title': 'Apericena Villa Luisetta Terra',
      'menu.apericena-terra.beverage': '1 calice di vino (cantine Statti bianco-rosso-rosato) o cocktail base',
      'menu.apericena-mare.title': 'Apericena Premium Villa Luisetta Mare',
      'menu.apericena-mare.beverage': 'calice di vino (cantine Statti bianco-rosso-rosato) o cocktail premium',
      'menu.tradizione-ninetta.title': 'Aperitivo della Tradizione Ninetta',
      'menu.tradizione-ninetta.beverage': 'calice di vino (cantine Statti bianco-rosso-rosato) o cocktail premium',
      
      // Menu Items
      'menu.item.stuzzichini-vari.name': 'Stuzzichini Vari',
      'menu.item.stuzzichini-vari.ingredients': 'Selezione di stuzzichini misti',
      'menu.item.tagliere-salumi.name': 'Tagliere di Salumi e Formaggi',
      'menu.item.tagliere-salumi.ingredients': 'salumi tipici calabresi (secondo disponibilità), **lattosio pecorino**, miele',
      'menu.item.fiori-zucca-stracciatella.name': 'Fiori di Zucca con Stracciatella',
      'menu.item.fiori-zucca-stracciatella.ingredients': 'farina e **lattosio vaccino**',
      'menu.item.parmigiana-melanzane.name': 'Parmigiana di Melanzane',
      'menu.item.parmigiana-melanzane.ingredients': '**pomodoro**, mollica, **lattosio**, olio, **melanzane**',
      'menu.item.polpette-zucchine.name': 'Polpette di Zucchine',
      'menu.item.polpette-zucchine.ingredients': '**lattosio**, mollica, olio, zucchine',
      'menu.item.crepes-rucola.name': 'Crepes di Rucola con Stracciatella',
      'menu.item.crepes-rucola.ingredients': 'uova, farina, sale, rucola, **stracciatella**',
      
      // Mare Menu Items
      'menu.item.alzatina-crudo.name': 'Alzatina di Crudo di Mare',
      'menu.item.alzatina-crudo.ingredients': 'con **gambero rosso**',
      'menu.item.tartare-pescato.name': 'Tartare di Pescato',
      'menu.item.tartare-pescato.ingredients': 'secondo disponibilità',
      'menu.item.cannolo-mousse.name': 'Cannolo con Mousse di Bufala',
      'menu.item.cannolo-mousse.ingredients': 'mousse di **bufala** e **gambero**',
      'menu.item.ostrica.name': 'Ostrica',
      'menu.item.ostrica.ingredients': '**ostrica**',
      'menu.item.insalata-gambero.name': 'Insalata di Gambero',
      'menu.item.insalata-gambero.ingredients': '**gambero**, avocado e lime',
      'menu.item.polpette-pesce.name': 'Polpette di Pesce',
      'menu.item.polpette-pesce.ingredients': 'fatte con **lattosio**, mollica e **uova**, con pesto di fiori di zucca e **mandorle** tostate',
      'menu.item.involtino-pesce.name': 'Involtino di Pesce',
      'menu.item.involtino-pesce.ingredients': 'secondo disponibilità',
      'menu.item.polpo-arrosto.name': 'Polpo Arrosto',
      'menu.item.polpo-arrosto.ingredients': '**polpo** arrosto su vellutata di patate (patate, burro e latte)',
      
      // Tradizione Ninetta Menu Items
      'menu.item.peperone-ripieno.name': 'Peperone Ripieno',
      'menu.item.peperone-ripieno.ingredients': '**pomodoro**, mollica, **lattosio**, uova',
      'menu.item.melanzana-ripiena.name': 'Melanzana Ripiena',
      'menu.item.melanzana-ripiena.ingredients': '**pomodoro**, mollica, **lattosio**, uova',
      'menu.item.bruschette-miste.name': 'Bruschette Miste',
      'menu.item.bruschette-miste.ingredients': 'varie preparazioni',
      'menu.item.frittelle-fiori.name': 'Frittelle di Fiori di Zucca',
      'menu.item.frittelle-fiori.ingredients': '**aglio**, **lattosio**, farina, basilico',
      'menu.item.zeppole.name': 'Zeppole',
      'menu.item.zeppole.ingredients': 'farina, patate, lievito di birra, olio, sale',
      'menu.item.polpettine-sugo.name': 'Polpettine al Sugo',
      'menu.item.polpettine-sugo.ingredients': 'carne di **vitello**, **pomodoro**, aglio, **lattosio**, pane, prezzemolo, basilico',
      'menu.item.crocchette-patate.name': 'Crocchette di Patate',
      'menu.item.crocchette-patate.ingredients': '**lattosio**, patate, **uovo**',
      'menu.item.involtino-peperone.name': 'Involtino di Peperone Arrosto',
      'menu.item.involtino-peperone.ingredients': 'mollica, olio, sale',
      
      // Desserts
      'menu.dessert.tiramisu.name': 'Tiramisù',
      'menu.dessert.tiramisu.ingredients': '<strong>mascarpone</strong>, <strong>uova</strong>, savoiardi, caffè, zucchero',
      'menu.dessert.sorbetto.name': 'Sorbetto al Limone',
      'menu.dessert.sorbetto.ingredients': 'limone, zucchero, acqua',
      'menu.dessert.crostatina.name': 'Crostatina con Crema Pasticcera',
      'menu.dessert.crostatina.ingredients': 'crema pasticcera e frutta fresca',
      'menu.dessert.tartufo.name': 'Tartufo al Cioccolato',
      'menu.dessert.tartufo.ingredients': 'cioccolato fondente',
      
      // Beverages
      'menu.beverage.acqua-frizzante.name': 'Acqua San Pellegrino frizzante',
      'menu.beverage.acqua-naturale.name': 'Acqua Panna naturale',
      'menu.beverage.coca-cola.name': 'Coca Cola normale/zero',
      'menu.beverage.schweppes.name': 'Schweppes',
      
      // Cocktails
      'cocktail.gin-tonic-portofino.name': 'Gin Tonic Premium Portofino',
      'cocktail.gin-tonic-portofino.description': 'Gin Portofino, tonica premium India/Mediterranean, botaniche italiane',
      'cocktail.gin-tonic-emporia.name': 'Gin Tonic Premium Emporia',
      'cocktail.gin-tonic-emporia.description': 'Gin Emporia premium, acqua tonica India/Mediterranean',
      'cocktail.gin-tonic-base.name': 'Gin Tonic Base',
      'cocktail.gin-tonic-base.description': 'Gin classico, acqua tonica India/Mediterranean',
      'cocktail.capotonic.name': 'Capotonic',
      'cocktail.capotonic.description': 'Spritz di amaro del capo, dolcezza agrumata e piccantezza speziata, con un retrogusto persistente e soddisfacente (45ml amaro sprint, soda e buccia d\'arancia)',
      'cocktail.wine-glass.name': 'Calice di Vino',
      'cocktail.wine-glass.description': 'Selezione vini della casa - bianco, rosso, rosato',
      'cocktail.grappa-mangilli.name': 'Grappa Mangilli Invecchiata',
      'cocktail.grappa-mangilli.description': 'Grappa invecchiata barricata, distillazione artigianale',
      'cocktail.amaro-capo.name': 'Amaro del Capo al Peperoncino',
      'cocktail.amaro-capo.description': 'Amaro calabrese con note piccanti e aromatiche',
      'cocktail.prosecco-075.name': '075 Carati 75cl',
      'cocktail.prosecco-075.description': 'Bottiglia Prosecco 0,75 litri',
      
      // Wine Sections
      'wine.section.cantina-ippolito': 'Cantina Ippolito',
      'wine.section.cantine-spadafora': 'Cantine Spadafora',
      'wine.section.cantina-antonello-lombardo': 'Cantina Antonella Lombardo',
      'wine.section.librandi': 'Librandi',
      'wine.section.tramontana': 'Tramontana',
      'wine.section.magna-grecia': 'Magna Grecia',
      'wine.section.casa-comerci': 'Casa Comerci Calabria',
      'wine.section.serracavallo': 'Serracavallo',
      'wine.section.berlucchi': 'Cantina Berlucchi',
      
      // Missing Translations
      'apartments.image.click.hint': 'Clicca per vedere tutte le foto',
      'food.nav.title': 'Esplora la Nostra Selezione',
      'food.nav.bar': 'Bar & Cocktails',
      'food.nav.enoteca': 'Enoteca',
      'food.desserts.title': '🍰 Dessert',
      'food.beverages.title': '🥤 Bevande',
      'food.cta.description': 'Scegli il tuo orario e prenota subito il tavolo per vivere l\'esperienza Villa Luisetta',
      'food.menu.beverage.title': 'Bevanda Inclusa',
      'food.menu.dishes.title': 'Piatti del Menu',
      'gallery.lightbox.close': 'Chiudi',
      'gallery.lightbox.prev': 'Immagine precedente',
      'gallery.lightbox.next': 'Immagine successiva',
    },
    
    en: {
      // Home Page
      'home.hero.title': 'A new concept of hospitality and tasting, immersed in the art and history of the city of Palmi',
      'home.button.rooms': 'Rooms',
      'home.button.rooms.subtitle': 'Stay with comfort',
      'home.button.gallery': 'Gallery',
      'home.button.gallery.subtitle': 'Discover the beauty',
      'home.button.food': 'Aperitifs',
      'home.button.food.subtitle': 'Culinary experience',
      'home.button.bar': 'Bar',
      'home.button.bar.subtitle': 'Gin, Bitters and Grappa',
      
      // Navigation
      'nav.rooms': 'Rooms',
      'nav.gallery': 'Gallery',
      'nav.menu': 'Menu',
      'nav.bar': 'Bar',
      'nav.enoteca': 'Enoteca',
      'nav.book': 'Book',
      
      // Footer
      'footer.description': 'Tradition in evolution in the heart of Italian elegance',
      'footer.follow': 'Follow us',
      'footer.map.hint': '📍 Get directions',
      
      // Apartments
      'apartments.hero.title.line1': 'Our',
      'apartments.hero.title.line2': 'Rooms',
      'apartments.hero.description': 'Discover the comfort of our apartments where every detail is cared for to offer you a pleasant stay at Villa Luisetta',
      'apartments.hero.stat.label': 'Available Rooms',
      'apartments.showcase.title': 'Choose Your Room',
      'apartments.contact.button': 'Contact Us',
      'apartments.cta.title': 'Ready for Your Stay?',
      'apartments.cta.description': 'Contact us to receive information and discover our availability for your dates',
      'apartments.cta.email': 'Request Availability',
      'apartments.cta.phone': 'Call Us',
      
      // Gallery
      'gallery.hero.title': 'Gallery',
      'gallery.hero.subtitle': 'Discover the most evocative corners of Villa Luisetta through our images',
      
      // Food
      'food.hero.title': 'Aperitif Menu',
      'food.hero.subtitle': 'Discover our tasting menus with local products and Calabrian specialties',
      'food.cta.title': 'Book Your Aperitif',
      'food.cta.book': 'Book Now',
      'food.cta.call': 'Call Us',
      
      // Food allergens and legal
      'food.allergens.contains': 'Contains:',
      'food.allergens.label': 'Allergens:',
      'food.legal.allergens': 'Highlighted products may contain allergens.',
      'food.legal.frozen': 'Products marked with an asterisk may be frozen in the absence of fresh product availability, according to legislative decree July 17, 2013.',
      'food.legal.variations': 'Menu variations are not allowed.',
      'food.legal.title': 'Important Information',
      
      // Cocktails
      'cocktails.hero.title': 'Villa Luisetta Bar',
      'cocktails.hero.subtitle': 'Gin, bitters, grappa and selected wines for a moment of pure relaxation',
      'cocktails.cta.description': 'Choose your time and come taste our cocktails and aperitifs',
      'cocktails.cta.book': 'Book Now',
      'cocktails.cta.call': 'Call Us',
      'cocktails.allergens.title': 'Allergens',
      
      // Enoteca
      'enoteca.hero.title': 'Villa Luisetta Wine Shop',
      'enoteca.hero.subtitle': 'Wine tradition and excellent spirits in the heart of Calabria',
      'enoteca.cta.title': 'Book Your Wine Tasting',
      'enoteca.cta.description': 'Choose your time and come taste our selected wines and spirits',
      'enoteca.cta.book': 'Book Now',
      'enoteca.cta.call': 'Call Us',
      
      // Reservations
      'reservations.title': 'Book Your Table',
      'reservations.subtitle': 'Choose the perfect time for your culinary experience at Villa Luisetta',
      'reservations.book.whatsapp': 'Book via WhatsApp',
      'reservations.policy.title': 'Punctuality Policy',
      'reservations.policy.text': 'Please respect your reservation time. After 15 minutes from the agreed time, the table will be released to allow other guests to be accommodated',
      'reservations.slot.label': 'Reservation',
      'reservations.slot.notice': 'The table must be vacated by the end of the reserved time slot',
      'reservations.info.title': 'Reservation Information',
      'reservations.info.confirm.title': 'Immediate Confirmation',
      'reservations.info.confirm.text': 'You will receive booking confirmation via WhatsApp',
      'reservations.info.menu.title': 'Complete Menu',
      'reservations.info.menu.text': 'All our menus are available during every time slot',
      
      // Footer Copyright
      'footer.copyright': '&copy; 2024 Villa Luisetta. All rights reserved.',
      
      // Contact Info
      'contact.email': 'villaluisettareservations&#64;gmail.com',
      'contact.address': 'Via Roma 86, Palmi',
      'contact.address.full': 'Via Roma 86, Palmi, Italy',
      
      // Footer Links
      'footer.privacy': 'Privacy Policy',
      'footer.cookies': 'Cookie Policy',
      'footer.legal': 'Legal Notes',
      
      // Menu Options
      'menu.aperitivo-classico.title': 'Classic Aperitif',
      'menu.aperitivo-classico.beverage': '1 glass of wine (Statti winery white-red-rosé) or base cocktail',
      'menu.apericena-terra.title': 'Villa Luisetta Land Apericena',
      'menu.apericena-terra.beverage': '1 glass of wine (Statti winery white-red-rosé) or base cocktail',
      'menu.apericena-mare.title': 'Villa Luisetta Premium Sea Apericena',
      'menu.apericena-mare.beverage': 'glass of wine (Statti winery white-red-rosé) or premium cocktail',
      'menu.tradizione-ninetta.title': 'Ninetta Tradition Aperitif',
      'menu.tradizione-ninetta.beverage': 'glass of wine (Statti winery white-red-rosé) or premium cocktail',
      
      // Menu Items
      'menu.item.stuzzichini-vari.name': 'Mixed Appetizers',
      'menu.item.stuzzichini-vari.ingredients': 'Selection of mixed appetizers',
      'menu.item.tagliere-salumi.name': 'Cured Meats and Cheese Board',
      'menu.item.tagliere-salumi.ingredients': 'typical Calabrian cured meats (subject to availability), **pecorino lactose**, honey',
      'menu.item.fiori-zucca-stracciatella.name': 'Zucchini Flowers with Stracciatella',
      'menu.item.fiori-zucca-stracciatella.ingredients': 'flour and **cow lactose**',
      'menu.item.parmigiana-melanzane.name': 'Eggplant Parmigiana',
      'menu.item.parmigiana-melanzane.ingredients': '**tomato**, breadcrumbs, **lactose**, oil, **eggplant**',
      'menu.item.polpette-zucchine.name': 'Zucchini Meatballs',
      'menu.item.polpette-zucchine.ingredients': '**lactose**, breadcrumbs, oil, zucchini',
      'menu.item.crepes-rucola.name': 'Arugula Crepes with Stracciatella',
      'menu.item.crepes-rucola.ingredients': 'eggs, flour, salt, arugula, **stracciatella**',
      
      // Mare Menu Items
      'menu.item.alzatina-crudo.name': 'Raw Seafood Platter',
      'menu.item.alzatina-crudo.ingredients': 'with **red shrimp**',
      'menu.item.tartare-pescato.name': 'Catch of the Day Tartare',
      'menu.item.tartare-pescato.ingredients': 'subject to availability',
      'menu.item.cannolo-mousse.name': 'Cannolo with Buffalo Mousse',
      'menu.item.cannolo-mousse.ingredients': '**buffalo** mousse and **shrimp**',
      'menu.item.ostrica.name': 'Oyster',
      'menu.item.ostrica.ingredients': '**oyster**',
      'menu.item.insalata-gambero.name': 'Shrimp Salad',
      'menu.item.insalata-gambero.ingredients': '**shrimp**, avocado and lime',
      'menu.item.polpette-pesce.name': 'Fish Meatballs',
      'menu.item.polpette-pesce.ingredients': 'made with **lactose**, breadcrumbs and **eggs**, with zucchini flower pesto and toasted **almonds**',
      'menu.item.involtino-pesce.name': 'Fish Roll',
      'menu.item.involtino-pesce.ingredients': 'subject to availability',
      'menu.item.polpo-arrosto.name': 'Roasted Octopus',
      'menu.item.polpo-arrosto.ingredients': 'roasted **octopus** on potato cream (potatoes, butter and milk)',
      
      // Tradizione Ninetta Menu Items
      'menu.item.peperone-ripieno.name': 'Stuffed Pepper',
      'menu.item.peperone-ripieno.ingredients': '**tomato**, breadcrumbs, **lactose**, eggs',
      'menu.item.melanzana-ripiena.name': 'Stuffed Eggplant',
      'menu.item.melanzana-ripiena.ingredients': '**tomato**, breadcrumbs, **lactose**, eggs',
      'menu.item.bruschette-miste.name': 'Mixed Bruschetta',
      'menu.item.bruschette-miste.ingredients': 'various preparations',
      'menu.item.frittelle-fiori.name': 'Zucchini Flower Fritters',
      'menu.item.frittelle-fiori.ingredients': '**garlic**, **lactose**, flour, basil',
      'menu.item.zeppole.name': 'Zeppole',
      'menu.item.zeppole.ingredients': 'flour, potatoes, beer yeast, oil, salt',
      'menu.item.polpettine-sugo.name': 'Small Meatballs in Sauce',
      'menu.item.polpettine-sugo.ingredients': '**veal** meat, **tomato**, garlic, **lactose**, bread, parsley, basil',
      'menu.item.crocchette-patate.name': 'Potato Croquettes',
      'menu.item.crocchette-patate.ingredients': '**lactose**, potatoes, **egg**',
      'menu.item.involtino-peperone.name': 'Roasted Pepper Roll',
      'menu.item.involtino-peperone.ingredients': 'breadcrumbs, oil, salt',
      
      // Desserts
      'menu.dessert.tiramisu.name': 'Tiramisu',
      'menu.dessert.tiramisu.ingredients': '<strong>mascarpone</strong>, <strong>eggs</strong>, ladyfingers, coffee, sugar',
      'menu.dessert.sorbetto.name': 'Lemon Sorbet',
      'menu.dessert.sorbetto.ingredients': 'lemon, sugar, water',
      'menu.dessert.crostatina.name': 'Small Tart with Pastry Cream',
      'menu.dessert.crostatina.ingredients': 'pastry cream and fresh fruit',
      'menu.dessert.tartufo.name': 'Chocolate Truffle',
      'menu.dessert.tartufo.ingredients': 'dark chocolate',
      
      // Beverages
      'menu.beverage.acqua-frizzante.name': 'San Pellegrino Sparkling Water',
      'menu.beverage.acqua-naturale.name': 'Panna Natural Water',
      'menu.beverage.coca-cola.name': 'Coca Cola regular/zero',
      'menu.beverage.schweppes.name': 'Schweppes',
      
      // Cocktails
      'cocktail.gin-tonic-portofino.name': 'Premium Gin Tonic Portofino',
      'cocktail.gin-tonic-portofino.description': 'Portofino Gin, premium India/Mediterranean tonic, Italian botanicals',
      'cocktail.gin-tonic-emporia.name': 'Premium Gin Tonic Emporia',
      'cocktail.gin-tonic-emporia.description': 'Premium Emporia Gin, India/Mediterranean tonic water',
      'cocktail.gin-tonic-base.name': 'Classic Gin Tonic',
      'cocktail.gin-tonic-base.description': 'Classic gin, India/Mediterranean tonic water',
      'cocktail.capotonic.name': 'Capotonic',
      'cocktail.capotonic.description': 'Capo bitters spritz, citrusy sweetness and spicy heat, with a persistent and satisfying aftertaste (45ml bitters sprint, soda and orange peel)',
      'cocktail.wine-glass.name': 'Glass of Wine',
      'cocktail.wine-glass.description': 'House wine selection - white, red, rosé',
      'cocktail.grappa-mangilli.name': 'Aged Mangilli Grappa',
      'cocktail.grappa-mangilli.description': 'Barrel-aged grappa, artisanal distillation',
      'cocktail.amaro-capo.name': 'Chili Pepper Capo Bitters',
      'cocktail.amaro-capo.description': 'Calabrian bitters with spicy and aromatic notes',
      'cocktail.prosecco-075.name': '075 Carati 75cl',
      'cocktail.prosecco-075.description': 'Prosecco bottle 0.75 liters',
      
      // Wine Sections
      'wine.section.cantina-ippolito': 'Ippolito Winery',
      'wine.section.cantine-spadafora': 'Spadafora Wineries',
      'wine.section.cantina-antonello-lombardo': 'Antonella Lombardo Winery',
      'wine.section.librandi': 'Librandi',
      'wine.section.tramontana': 'Tramontana',
      'wine.section.magna-grecia': 'Magna Grecia',
      'wine.section.casa-comerci': 'Casa Comerci Calabria',
      'wine.section.serracavallo': 'Serracavallo',
      'wine.section.berlucchi': 'Berlucchi Winery',
      
      // Missing Translations
      'apartments.image.click.hint': 'Click to see all photos',
      'food.nav.title': 'Explore Our Selection',
      'food.nav.bar': 'Bar & Cocktails',
      'food.nav.enoteca': 'Wine Shop',
      'food.desserts.title': '🍰 Desserts',
      'food.beverages.title': '🥤 Beverages',
      'food.cta.description': 'Choose your time and book your table now to experience Villa Luisetta',
      'food.menu.beverage.title': 'Included Beverage',
      'food.menu.dishes.title': 'Menu Dishes',
      'gallery.lightbox.close': 'Close',
      'gallery.lightbox.prev': 'Previous image',
      'gallery.lightbox.next': 'Next image',
    },
    
    fr: {
      // Home Page
      'home.hero.title': 'Un nouveau concept d\'hospitalité et de dégustation, immergé dans l\'art et l\'histoire de la ville de Palmi',
      'home.button.rooms': 'Chambres',
      'home.button.rooms.subtitle': 'Séjournez confortablement',
      'home.button.gallery': 'Galerie',
      'home.button.gallery.subtitle': 'Découvrez la beauté',
      'home.button.food': 'Apéritifs',
      'home.button.food.subtitle': 'Expérience culinaire',
      'home.button.bar': 'Bar',
      'home.button.bar.subtitle': 'Gin, Amers et Grappa',
      
      // Navigation
      'nav.rooms': 'Chambres',
      'nav.gallery': 'Galerie',
      'nav.menu': 'Menu',
      'nav.bar': 'Bar',
      'nav.enoteca': 'Cave à vin',
      'nav.book': 'Réserver',
      
      // Footer
      'footer.description': 'Tradition en évolution au cœur de l\'élégance italienne',
      'footer.follow': 'Suivez-nous',
      'footer.map.hint': '📍 Obtenir des directions',
      
      // Apartments
      'apartments.hero.title.line1': 'Nos',
      'apartments.hero.title.line2': 'Chambres',
      'apartments.hero.description': 'Découvrez le confort de nos appartements où chaque détail est soigné pour vous offrir un séjour agréable à Villa Luisetta',
      'apartments.hero.stat.label': 'Chambres Disponibles',
      'apartments.showcase.title': 'Choisissez Votre Chambre',
      'apartments.contact.button': 'Contactez-nous',
      'apartments.cta.title': 'Prêt pour Votre Séjour?',
      'apartments.cta.description': 'Contactez-nous pour recevoir des informations et découvrir nos disponibilités pour vos dates',
      'apartments.cta.email': 'Demander Disponibilité',
      'apartments.cta.phone': 'Appelez-nous',
      
      // Gallery
      'gallery.hero.title': 'Galerie',
      'gallery.hero.subtitle': 'Découvrez les coins les plus évocateurs de Villa Luisetta à travers nos images',
      
      // Food
      'food.hero.title': 'Menu Apéritif',
      'food.hero.subtitle': 'Découvrez nos menus de dégustation avec des produits locaux et des spécialités calabraises',
      'food.cta.title': 'Réservez Votre Apéritif',
      'food.cta.book': 'Réserver Maintenant',
      'food.cta.call': 'Appelez-nous',
      
      // Food allergens and legal
      'food.allergens.contains': 'Contient:',
      'food.allergens.label': 'Allergènes:',
      'food.legal.allergens': 'Les produits mis en évidence peuvent contenir des allergènes.',
      'food.legal.frozen': 'Les produits marqués d\'un astérisque peuvent être congelés en l\'absence de disponibilité de produits frais, selon le décret législatif du 17 juillet 2013.',
      'food.legal.variations': 'Les variations du menu ne sont pas autorisées.',
      'food.legal.title': 'Informations Importantes',
      
      // Cocktails
      'cocktails.hero.title': 'Bar Villa Luisetta',
      'cocktails.hero.subtitle': 'Gin, amers, grappa et vins sélectionnés pour un moment de pure détente',
      'cocktails.cta.description': 'Choisissez votre horaire et venez déguster nos cocktails et apéritifs',
      'cocktails.cta.book': 'Réserver Maintenant',
      'cocktails.cta.call': 'Appelez-nous',
      'cocktails.allergens.title': 'Allergènes',
      
      // Enoteca
      'enoteca.hero.title': 'Cave à Vin Villa Luisetta',
      'enoteca.hero.subtitle': 'Tradition vinicole et spiritueux d\'excellence au cœur de la Calabre',
      'enoteca.cta.title': 'Réservez Votre Dégustation de Vins',
      'enoteca.cta.description': 'Choisissez votre horaire et venez déguster nos vins et spiritueux sélectionnés',
      'enoteca.cta.book': 'Réserver Maintenant',
      'enoteca.cta.call': 'Appelez-nous',
      
      // Reservations
      'reservations.title': 'Réservez Votre Table',
      'reservations.subtitle': 'Choisissez l\'heure parfaite pour votre expérience culinaire à Villa Luisetta',
      'reservations.book.whatsapp': 'Réserver via WhatsApp',
      'reservations.policy.title': 'Politique de Ponctualité',
      'reservations.policy.text': 'Veuillez respecter l\'heure de votre réservation. Après 15 minutes de l\'heure convenue, la table sera libérée pour permettre l\'accueil d\'autres clients',
      'reservations.slot.label': 'Réservation',
      'reservations.slot.notice': 'La table doit être libérée avant la fin de l\'horaire réservé',
      'reservations.info.title': 'Informations sur les Réservations',
      'reservations.info.confirm.title': 'Confirmation Immédiate',
      'reservations.info.confirm.text': 'Vous recevrez la confirmation de réservation via WhatsApp',
      'reservations.info.menu.title': 'Menu Complet',
      'reservations.info.menu.text': 'Tous nos menus sont disponibles à chaque créneau horaire',
      
      // Footer Copyright
      'footer.copyright': '&copy; 2024 Villa Luisetta. Tous droits réservés.',
      
      // Contact Info
      'contact.email': 'villaluisettareservations&#64;gmail.com',
      'contact.address': 'Via Roma 86, Palmi',
      'contact.address.full': 'Via Roma 86, Palmi, Italie',
      
      // Footer Links
      'footer.privacy': 'Politique de Confidentialité',
      'footer.cookies': 'Politique des Cookies',
      'footer.legal': 'Mentions Légales',
      
      // Menu Options
      'menu.aperitivo-classico.title': 'Apéritif Classique',
      'menu.aperitivo-classico.beverage': '1 verre de vin (cave Statti blanc-rouge-rosé) ou cocktail de base',
      'menu.apericena-terra.title': 'Apéricena Terre Villa Luisetta',
      'menu.apericena-terra.beverage': '1 verre de vin (cave Statti blanc-rouge-rosé) ou cocktail de base',
      'menu.apericena-mare.title': 'Apéricena Premium Mer Villa Luisetta',
      'menu.apericena-mare.beverage': 'verre de vin (cave Statti blanc-rouge-rosé) ou cocktail premium',
      'menu.tradizione-ninetta.title': 'Apéritif Tradition Ninetta',
      'menu.tradizione-ninetta.beverage': 'verre de vin (cave Statti blanc-rouge-rosé) ou cocktail premium',
      
      // Menu Items
      'menu.item.stuzzichini-vari.name': 'Amuse-bouches Variés',
      'menu.item.stuzzichini-vari.ingredients': 'Sélection d\'amuse-bouches mélangés',
      'menu.item.tagliere-salumi.name': 'Planche de Charcuteries et Fromages',
      'menu.item.tagliere-salumi.ingredients': 'charcuteries typiques calabraises (selon disponibilité), **lactose pecorino**, miel',
      'menu.item.fiori-zucca-stracciatella.name': 'Fleurs de Courgette avec Stracciatella',
      'menu.item.fiori-zucca-stracciatella.ingredients': 'farine et **lactose de vache**',
      'menu.item.parmigiana-melanzane.name': 'Parmigiana d\'Aubergines',
      'menu.item.parmigiana-melanzane.ingredients': '**tomate**, chapelure, **lactose**, huile, **aubergines**',
      'menu.item.polpette-zucchine.name': 'Boulettes de Courgettes',
      'menu.item.polpette-zucchine.ingredients': '**lactose**, chapelure, huile, courgettes',
      'menu.item.crepes-rucola.name': 'Crêpes de Roquette avec Stracciatella',
      'menu.item.crepes-rucola.ingredients': 'œufs, farine, sel, roquette, **stracciatella**',
      
      // Mare Menu Items
      'menu.item.alzatina-crudo.name': 'Plateau de Fruits de Mer Crus',
      'menu.item.alzatina-crudo.ingredients': 'avec **crevette rouge**',
      'menu.item.tartare-pescato.name': 'Tartare du Jour',
      'menu.item.tartare-pescato.ingredients': 'selon disponibilité',
      'menu.item.cannolo-mousse.name': 'Cannolo avec Mousse de Buffle',
      'menu.item.cannolo-mousse.ingredients': 'mousse de **buffle** et **crevette**',
      'menu.item.ostrica.name': 'Huître',
      'menu.item.ostrica.ingredients': '**huître**',
      'menu.item.insalata-gambero.name': 'Salade de Crevettes',
      'menu.item.insalata-gambero.ingredients': '**crevette**, avocat et citron vert',
      'menu.item.polpette-pesce.name': 'Boulettes de Poisson',
      'menu.item.polpette-pesce.ingredients': 'faites avec **lactose**, chapelure et **œufs**, avec pesto de fleurs de courgette et **amandes** grillées',
      'menu.item.involtino-pesce.name': 'Rouleau de Poisson',
      'menu.item.involtino-pesce.ingredients': 'selon disponibilité',
      'menu.item.polpo-arrosto.name': 'Poulpe Rôti',
      'menu.item.polpo-arrosto.ingredients': '**poulpe** rôti sur velouté de pommes de terre (pommes de terre, beurre et lait)',
      
      // Tradizione Ninetta Menu Items
      'menu.item.peperone-ripieno.name': 'Poivron Farci',
      'menu.item.peperone-ripieno.ingredients': '**tomate**, chapelure, **lactose**, œufs',
      'menu.item.melanzana-ripiena.name': 'Aubergine Farcie',
      'menu.item.melanzana-ripiena.ingredients': '**tomate**, chapelure, **lactose**, œufs',
      'menu.item.bruschette-miste.name': 'Bruschette Mixtes',
      'menu.item.bruschette-miste.ingredients': 'préparations variées',
      'menu.item.frittelle-fiori.name': 'Beignets de Fleurs de Courgette',
      'menu.item.frittelle-fiori.ingredients': '**ail**, **lactose**, farine, basilic',
      'menu.item.zeppole.name': 'Zeppole',
      'menu.item.zeppole.ingredients': 'farine, pommes de terre, levure de bière, huile, sel',
      'menu.item.polpettine-sugo.name': 'Petites Boulettes en Sauce',
      'menu.item.polpettine-sugo.ingredients': 'viande de **veau**, **tomate**, ail, **lactose**, pain, persil, basilic',
      'menu.item.crocchette-patate.name': 'Croquettes de Pommes de Terre',
      'menu.item.crocchette-patate.ingredients': '**lactose**, pommes de terre, **œuf**',
      'menu.item.involtino-peperone.name': 'Rouleau de Poivron Rôti',
      'menu.item.involtino-peperone.ingredients': 'chapelure, huile, sel',
      
      // Desserts
      'menu.dessert.tiramisu.name': 'Tiramisu',
      'menu.dessert.tiramisu.ingredients': '<strong>mascarpone</strong>, <strong>œufs</strong>, biscuits à la cuillère, café, sucre',
      'menu.dessert.sorbetto.name': 'Sorbet au Citron',
      'menu.dessert.sorbetto.ingredients': 'citron, sucre, eau',
      'menu.dessert.crostatina.name': 'Petite Tarte à la Crème Pâtissière',
      'menu.dessert.crostatina.ingredients': 'crème pâtissière et fruits frais',
      'menu.dessert.tartufo.name': 'Truffe au Chocolat',
      'menu.dessert.tartufo.ingredients': 'chocolat noir',
      
      // Beverages
      'menu.beverage.acqua-frizzante.name': 'Eau Pétillante San Pellegrino',
      'menu.beverage.acqua-naturale.name': 'Eau Naturelle Panna',
      'menu.beverage.coca-cola.name': 'Coca Cola normale/zéro',
      'menu.beverage.schweppes.name': 'Schweppes',
      
      // Cocktails
      'cocktail.gin-tonic-portofino.name': 'Gin Tonic Premium Portofino',
      'cocktail.gin-tonic-portofino.description': 'Gin Portofino, tonic premium India/Mediterranean, botaniques italiennes',
      'cocktail.gin-tonic-emporia.name': 'Gin Tonic Premium Emporia',
      'cocktail.gin-tonic-emporia.description': 'Gin Emporia premium, eau tonique India/Mediterranean',
      'cocktail.gin-tonic-base.name': 'Gin Tonic Classique',
      'cocktail.gin-tonic-base.description': 'Gin classique, eau tonique India/Mediterranean',
      'cocktail.capotonic.name': 'Capotonic',
      'cocktail.capotonic.description': 'Spritz d\'amer du capo, douceur agrumée et piquant épicé, avec un arrière-goût persistant et satisfaisant (45ml amer sprint, soda et zeste d\'orange)',
      'cocktail.wine-glass.name': 'Verre de Vin',
      'cocktail.wine-glass.description': 'Sélection de vins de la maison - blanc, rouge, rosé',
      'cocktail.grappa-mangilli.name': 'Grappa Mangilli Vieillie',
      'cocktail.grappa-mangilli.description': 'Grappa vieillie en fût, distillation artisanale',
      'cocktail.amaro-capo.name': 'Amer du Capo au Piment',
      'cocktail.amaro-capo.description': 'Amer calabrais aux notes épicées et aromatiques',
      'cocktail.prosecco-075.name': '075 Carati 75cl',
      'cocktail.prosecco-075.description': 'Bouteille de Prosecco 0,75 litres',
      
      // Wine Sections
      'wine.section.cantina-ippolito': 'Cave Ippolito',
      'wine.section.cantine-spadafora': 'Caves Spadafora',
      'wine.section.cantina-antonello-lombardo': 'Cave Antonella Lombardo',
      'wine.section.librandi': 'Librandi',
      'wine.section.tramontana': 'Tramontana',
      'wine.section.magna-grecia': 'Magna Grecia',
      'wine.section.casa-comerci': 'Casa Comerci Calabria',
      'wine.section.serracavallo': 'Serracavallo',
      'wine.section.berlucchi': 'Cave Berlucchi',
      
      // Missing Translations
      'apartments.image.click.hint': 'Cliquez pour voir toutes les photos',
      'food.nav.title': 'Explorez Notre Sélection',
      'food.nav.bar': 'Bar & Cocktails',
      'food.nav.enoteca': 'Cave à Vin',
      'food.desserts.title': '🍰 Desserts',
      'food.beverages.title': '🥤 Boissons',
      'food.cta.description': 'Choisissez votre horaire et réservez votre table maintenant pour vivre l\'expérience Villa Luisetta',
      'food.menu.beverage.title': 'Boisson Incluse',
      'food.menu.dishes.title': 'Plats du Menu',
      'gallery.lightbox.close': 'Fermer',
      'gallery.lightbox.prev': 'Image précédente',
      'gallery.lightbox.next': 'Image suivante',
    }
  };

  constructor() {
    // Inizializza la lingua dal localStorage o browser
    this.initializeLanguage();
  }

  get currentLanguage$() {
    return this.currentLanguage.asReadonly();
  }

  get language(): SupportedLanguage {
    return this.currentLanguage();
  }

  setLanguage(lang: SupportedLanguage): void {
    this.currentLanguage.set(lang);
    localStorage.setItem('villa-luisetta-language', lang);
    
    // Aggiorna il document lang per l'accessibilità
    document.documentElement.lang = this.getFullLocale(lang);
  }

  translate(key: string): string {
    const currentLang = this.currentLanguage();
    return this.translations[currentLang][key] || key;
  }

  private initializeLanguage(): void {
    // Recupera dal localStorage
    const savedLang = localStorage.getItem('villa-luisetta-language') as SupportedLanguage;
    
    // Rileva la lingua del browser
    let browserLang: SupportedLanguage = 'it';
    const browserLanguage = navigator.language.toLowerCase();
    
    if (browserLanguage.startsWith('en')) {
      browserLang = 'en';
    } else if (browserLanguage.startsWith('fr')) {
      browserLang = 'fr';
    }

    // Usa la lingua salvata o quella del browser
    const initialLang = savedLang || browserLang;
    this.setLanguage(initialLang);
  }

  private getFullLocale(lang: SupportedLanguage): string {
    switch (lang) {
      case 'en': return 'en-US';
      case 'fr': return 'fr-FR';
      case 'it':
      default: return 'it-IT';
    }
  }

  // Metodi di utilità
  getAvailableLanguages() {
    return [
      { code: 'it', name: 'Italiano', flag: '🇮🇹' },
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' }
    ] as const;
  }
}