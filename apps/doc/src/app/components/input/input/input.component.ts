import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ZuiInputSize, ZuiInputStatus } from '@digital-plant/zui-components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { default as d } from '!!raw-loader!../examples/input-phone-example/input-phone-example.component.less';

@Component({
  selector: 'zui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  public label: string = 'Заголовок';
  public outer: boolean = false;
  public size: ZuiInputSize = 'l';
  public sizesOuter: ZuiInputSize[] = ['l', 'm', 's'];
  public sizesInner: ZuiInputSize[] = ['l', 'm'];

  public status: ZuiInputStatus = 'default';
  public statuses: ZuiInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public readonly zyfraInputBasicExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!../examples/input-basic-example/input-basic-example.component.ts'),
    HTML: import('!!raw-loader!../examples/input-basic-example/input-basic-example.component.html'),
  };

  public readonly zyfraInputExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!../examples/input-example/input-example.component.ts'),
    HTML: import('!!raw-loader!../examples/input-example/input-example.component.html'),
  };

  public readonly zyfraInputIconButtonsExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!../examples/input-icon-buttons-example/input-icon-buttons-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!../examples/input-icon-buttons-example/input-icon-buttons-example.component.html'
    ),
    LESS: import(
      '!!raw-loader!../examples/input-icon-buttons-example/input-icon-buttons-example.component.less'
    ),
  };

  public readonly zyfraInputPhoneExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!../examples/input-phone-example/input-phone-example.component.ts'),
    HTML: import('!!raw-loader!../examples/input-phone-example/input-phone-example.component.html'),
    LESS: d,
  };

  public readonly zyfraInputMaskExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!../examples/input-mask-example/input-mask-example.component.ts'),
    HTML: import('!!raw-loader!../examples/input-mask-example/input-mask-example.component.html'),
    LESS: import('!!raw-loader!../examples/input-mask-example/input-mask-example.component.less'),
  };

  public readonly zyfraInputSizesExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!../examples/input-sizes-example/input-sizes-example.component.ts'),
    HTML: import('!!raw-loader!../examples/input-sizes-example/input-sizes-example.component.html'),
  };

  public readonly zyfraInputDisabledExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!../examples/input-disabled-example/input-disabled-example.component.ts'),
    HTML: import('!!raw-loader!../examples/input-disabled-example/input-disabled-example.component.html'),
  };

  public readonly zyfraInputStatusesExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!../examples/input-statuses-example/input-statuses-example.component.ts'),
    HTML: import('!!raw-loader!../examples/input-statuses-example/input-statuses-example.component.html'),
  };

  public readonly zyfraInputSubtextExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!../examples/input-subtext-example/input-subtext-example.component.ts'),
    HTML: import('!!raw-loader!../examples/input-subtext-example/input-subtext-example.component.html'),
  };

  public readonly zyfraInputValidationExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!../examples/input-validation-example/input-validation-example.component.ts'
    ),
    HTML: import('!!raw-loader!../examples/input-validation-example/input-validation-example.component.html'),
  };

  public readonly zyfraInputFormControlExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!../examples/input-form-control-example/input-form-control-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!../examples/input-form-control-example/input-form-control-example.component.html'
    ),
  };

  public readonly zyfraInputValidationCustomExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!../examples/input-validation-custom-example/input-validation-custom-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!../examples/input-validation-custom-example/input-validation-custom-example.component.html'
    ),
    Service: import(
      '!!raw-loader!../examples/input-validation-custom-example/input-validation-custom-texts.service.ts'
    ),
  };

  public readonly exampleModule: RawLoaderContent = import('!!raw-loader!../examples/import-module.md');
}