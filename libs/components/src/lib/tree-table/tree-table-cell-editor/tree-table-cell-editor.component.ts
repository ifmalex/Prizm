import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { TTEditableColumn } from 'primeng/treetable';
import { ZyfraTreeTableEditableColumnDirective } from '../directives/tree-table-editable-column.directive';
import { ZyfraTreeTableTemplateDirective } from '../directives/tree-table-template.directive';

@Component({
  selector: 'zyfra-tree-table-cell-editor',
  templateUrl: './tree-table-cell-editor.component.html',
  providers: [
    {
      provide: TTEditableColumn,
      useFactory: (treeTableEditableColumnDirective) => treeTableEditableColumnDirective,
      deps: [ZyfraTreeTableEditableColumnDirective],
    },
  ],
})
export class ZyfraTreeTableCellEditorComponent implements AfterContentInit {
  @ContentChildren(ZyfraTreeTableTemplateDirective) templates: QueryList<ZyfraTreeTableTemplateDirective>;

  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  inputTemplate: TemplateRef<unknown>;

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  ngAfterContentInit(): void {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'input':
          this.inputTemplate = item.template;
          break;
      }
    });
  }
}
