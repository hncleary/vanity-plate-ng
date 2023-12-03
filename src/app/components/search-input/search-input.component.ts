import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subject, debounceTime } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('filterInput') filterInput: ElementRef | null = null;
  @Output() OnKeyup = new EventEmitter<KeyboardEvent>();
  @Output() clear = new EventEmitter();
  private _value = '';
  @Input()
  public set value(val: string) {
      this._value = val;
      this.valueChange.emit(val);
  }
  public get value() {
      return this._value;
  }
  @Output() public valueChange = new EventEmitter<string>();
  @Input() public placeholder = 'Search ';
  @Input() public inputWidth = '100%';
  private filterSubject = new Subject<KeyboardEvent | undefined>();

  ngAfterViewInit() {
      this.filterSubject.pipe(debounceTime(250), untilDestroyed(this)).subscribe((event) => {
          this.OnKeyup.emit(event);
      });
  }
  public keyupEvent(event: KeyboardEvent) {
      this.filterSubject.next(event);
  }
  public onClearClick() {
      this.value = '';
      this.filterSubject.next(undefined);
      this.clear.emit();
  }
  public focus() {
    if(this.filterInput) { 
      this.filterInput.nativeElement.focus();
    }
  }
}
