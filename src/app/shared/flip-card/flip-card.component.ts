import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flip-card-container" 
         [class.flipped]="isFlipped"
         [class.support-3d]="supports3D"
         (click)="handleClick()">
      
      <!-- 3D Flip Implementation -->
      <div class="flip-card-inner" *ngIf="supports3D">
        <div class="flip-card-front">
          <ng-content select="[slot=front]"></ng-content>
        </div>
        <div class="flip-card-back">
          <ng-content select="[slot=back]"></ng-content>
        </div>
      </div>
      
      <!-- Fallback Implementation (Fade) -->
      <div class="flip-card-fallback" *ngIf="!supports3D">
        <div class="flip-card-front" 
             [class.hidden]="isFlipped">
          <ng-content select="[slot=front]"></ng-content>
        </div>
        <div class="flip-card-back" 
             [class.visible]="isFlipped">
          <ng-content select="[slot=back]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrl: './flip-card.component.css'
})
export class FlipCardComponent implements OnInit {
  @Input() isFlipped = false;
  @Input() disabled = false;
  @Output() flipChange = new EventEmitter<boolean>();

  supports3D = true;

  ngOnInit() {
    this.check3DSupport();
  }

  private check3DSupport(): void {
    // Controlla il supporto per preserve-3d
    const testElement = document.createElement('div');
    testElement.style.transformStyle = 'preserve-3d';
    
    // Test più robusto per il supporto 3D
    this.supports3D = testElement.style.transformStyle === 'preserve-3d' && 
                      !this.isFirefox() && 
                      !this.isOldBrowser();
  }

  private isFirefox(): boolean {
    return navigator.userAgent.toLowerCase().includes('firefox');
  }

  private isOldBrowser(): boolean {
    // Controlla se è un browser vecchio che non supporta bene le 3D
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes('msie') || 
           userAgent.includes('trident') || 
           (userAgent.includes('chrome') && parseInt(userAgent.split('chrome/')[1]) < 36);
  }

  handleClick(): void {
    if (this.disabled) return;
    
    this.isFlipped = !this.isFlipped;
    this.flipChange.emit(this.isFlipped);
  }

  // Metodi pubblici per controllo esterno
  flip(): void {
    if (!this.disabled) {
      this.isFlipped = true;
      this.flipChange.emit(this.isFlipped);
    }
  }

  unflip(): void {
    if (!this.disabled) {
      this.isFlipped = false;
      this.flipChange.emit(this.isFlipped);
    }
  }

  toggle(): void {
    this.handleClick();
  }
}