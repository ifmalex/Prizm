import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { FormControl } from '@angular/forms';
import { PrizmDateItemTemplate, PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-multi-example',
  templateUrl: './input-date-multi.component.html',
  styleUrls: ['./input-date-multi.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateMultiRelativeComponent implements OnInit {
  public readonly valueControl = new FormControl();
  @ViewChild('dateRelativeTime', { static: true }) dateRelativeTime: TemplateRef<unknown>;
  @ViewChild('dateTime', { static: true }) dateTime: TemplateRef<unknown>;

  public currentIdx = 0;
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-date-multi-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-date-multi-base-example.component.html?raw'),
  };

  readonly exampleFour: TuiDocExample = {
    TypeScript: import('./examples/four/input-date-multi-four-example.component.ts?raw'),
    HTML: import('./examples/four/input-date-multi-four-example.component.html?raw'),
  };

  public readonly timeControl = new FormControl([new PrizmDay(2017, 2, 15), new PrizmTime(12, 30)]);
  public readonly relativeControl = new FormControl();
  public items: PrizmDateItemTemplate[] = [];

  public ngOnInit(): void {
    this.items = [
      {
        template: this.dateTime,
        name: 'Абсолютное время',
      },
      {
        template: this.dateRelativeTime,
        name: 'Относительное время',
      },
    ];
  }
}
