import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  Optional,
  Self,
} from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ZuiInputControl } from './zui-input-control.class';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[zuiInput], textarea[zuiInput]',
  template: '',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.ng-invalid]': 'ngControl?.invalid',
    '[class.ng-valid]': 'ngControl?.valid',
    '[class.ng-dirty]': 'ngControl?.dirty',
    '[class.ng-touched]': 'ngControl?.touched',
    '[class.ng-filled]': 'empty',
    '[disabled]': 'disabled',
    '[required]': 'required',
  },
  styleUrls: ['zui-input-text.directive.less'],
  providers: [{ provide: ZuiInputControl, useExisting: ZuiInputTextComponent }, ZuiDestroyService],
})
export class ZuiInputTextComponent implements ZuiInputControl<string>, DoCheck, OnDestroy {
  /**
   * Disabled input
   */
  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  protected _disabled = false;

  /**
   * Required input
   */
  @Input()
  get required(): boolean {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }

  set required(value: boolean) {
    this._required = value;
  }

  protected _required: boolean | undefined;

  public invalid = false;

  public readonly stateChanges: Subject<void> = new Subject<void>();

  /**
   * Input value input
   */
  get value(): string {
    return this.ngControl?.value || this._inputValue.value;
  }

  @Input()
  set value(value: any) {
    if (value !== this.value) {
      if (this.ngControl) {
        this.ngControl.valueAccessor.writeValue(value);
      } else {
        this._inputValue.value = value;
        this.updateEmptyState();
        this.stateChanges.next();
      }
    }
  }
  private _inputValue: { value: any };

  /**
   * Empty state
   */
  public empty: boolean;

  /**
   * Focus state
   */
  public focused: boolean;

  /**
   * Touched state
   */
  public touched: boolean;

  /**
   * Create instance
   */
  constructor(
    @Optional() @Self() public readonly ngControl: NgControl,
    private readonly elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
    private readonly zuiDestroyService: ZuiDestroyService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this._inputValue = elementRef.nativeElement;
  }

  ngOnInit(): void {
    if (this.ngControl) this.initControlListener();
  }

  ngDoCheck(): void {
    this.updateEmptyState();
    this.updateErrorState();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('input', ['$event'])
  onInput(): void {
    this.updateEmptyState();
    this._inputValue.value = this.elementRef.nativeElement.value;
    this.stateChanges.next();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('focus', ['$event'])
  onFocus(): void {
    this.focused = true;
    this.stateChanges.next();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('blur', ['$event'])
  onBlur(): void {
    this.focused = false;
    this.touched = true;
    this.stateChanges.next();
  }

  private initControlListener(): void {
    this.ngControl.statusChanges
      .pipe(
        tap(() => {
          this.updateEmptyState();
          this.updateErrorState();
          this.cdr.markForCheck();
        }),
        takeUntil(this.zuiDestroyService)
      )
      .subscribe();

    this.ngControl.valueChanges
      .pipe(
        tap(() => {
          this.updateEmptyState();
          this.updateErrorState();
          this.stateChanges.next();
        }),
        takeUntil(this.zuiDestroyService)
      )
      .subscribe();
  }

  private updateEmptyState(): void {
    this.empty = !(
      (this.elementRef.nativeElement.value && this.elementRef.nativeElement.value.length) ||
      (this.ngControl && this.ngControl.value)
    );
  }

  private updateErrorState(): void {
    this.invalid = this.ngControl && this.ngControl.invalid;
  }

  public clear(): void {
    this.ngControl?.reset();
    this.elementRef.nativeElement.value = '';
    this._inputValue.value = '';
    this.updateEmptyState();
  }
}