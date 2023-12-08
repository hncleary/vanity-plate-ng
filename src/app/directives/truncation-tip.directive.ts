import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[appTruncationTip]'
})
export class TruncationTipDirective {
  private _coords: number[] = [0, 0];
  constructor(private el: ElementRef, private tooltip: MatTooltip) {
      // Truncate host
      const element = this.el.nativeElement as HTMLElement;
      element.style.whiteSpace = 'nowrap';
      element.style.overflow = 'hidden';
      element.style.textOverflow = 'ellipsis';
  }
  /** When the user moves the cursor over the element, record the current mouse coordinates if the element has text overflowing text */
  @HostListener('mousemove', ['$event']) onMouseMove(event: CustomEvent<any>) {
      if (this.isTextOverflow()) {
          // Get user's current mouse coordinates from the mouse event
          const e = event as CustomEvent;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          this._coords = [e['clientX'] as number, e['clientY'] as number];
      }
  }
  /** When the user moves the cursor over the element, create a tooltip at the current mouse position if the element has overflowing text */
  @HostListener('mouseover') mouseover() {
      if (this.isTextOverflow()) {
          this.tooltip.message = (this.el.nativeElement as HTMLElement).innerHTML as string;
          this.tooltip.position = 'right';
          this.tooltip.show();
          setTimeout(() => {
              /** Set containing overlay overlay panel to be at (0,0) origin
               * Otherwise, the tooltip may be offset by its parent component */
              const tooltipPanels = document.getElementsByClassName('mat-mdc-tooltip-panel');
              if (tooltipPanels.length > 0) {
                  const parentPanel = tooltipPanels[0] as HTMLElement;
                  parentPanel['style'].position = 'absolute';
                  parentPanel['style'].left = '0px';
                  parentPanel['style'].top = '0px';
              }
              // Get tool tip element from the DOM and place next to the mouse cursor
              const matches = document.getElementsByClassName('mdc-tooltip');
              if (matches.length > 0) {
                  const tooltip = matches[0] as HTMLElement;
                  tooltip.id = 'truncate-mat-tooltip';
                  /** If position styling is not updated here, the tooltip will appear in the top left of the parent component */
                  tooltip['style'].position = 'absolute';
                  tooltip['style'].width = 'max-content';
                  tooltip['style'].color = 'white';
                  tooltip['style'].backgroundColor = '#737373';
                  tooltip['style'].padding = '5px';
                  tooltip['style'].borderRadius = '5px';
                  // Timeout prevents timing issue that would cause tooltip to not fully complete offset translation
                  setTimeout(() => {
                      const screenWidth: number = window.innerWidth;
                      tooltip['style'].display = 'flex';
                      let left: number = this._coords[0];
                      /** Determine if the length of the current tooltip would extend past the bounds of the current window size
                       * If so, offset the absolute position of the component to stay within the bounds
                       */
                      if (left + tooltip.clientWidth > screenWidth) {
                          left -= tooltip.clientWidth;
                      }
                      const top: number = this._coords[1] + 10;
                      tooltip['style'].left = left.toString() + 'px';
                      tooltip['style'].top = top.toString() + 'px';
                  });

                  tooltip.innerHTML = this.tooltip.message;
              }
          });
      }
  }
  /** When the mouse leaves the element, hide the matToolTip */
  @HostListener('mouseleave') mouseleave() {
      this.tooltip.hide();
      const tooltip = document.getElementById('truncate-mat-tooltip');
      if (tooltip) {
          tooltip.id = '';
      }
  }
  /**
   * Check the referenced element to see if its text overflows
   */
  public isTextOverflow(): boolean {
      const elem = this.el.nativeElement as HTMLElement;
      return elem ? elem.offsetWidth < elem.scrollWidth : false;
  }

}
