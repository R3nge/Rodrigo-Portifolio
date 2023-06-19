import { ElementRef } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { ResponsiveDirective } from './responsive.directive';

describe('ResponsiveDirective', () => {
  it('should create an instance', () => {
    const directive = new ResponsiveDirective();
    expect(directive).toBeTruthy();
  });
});
