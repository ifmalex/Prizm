import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  TuiDataListModule,
  TuiDropdownModule,
  TuiGroupModule,
  TuiLinkModule,
  TuiModeModule,
  TuiNotificationModule,
  TuiPrimitiveTextfieldModule,
  TuiTextfieldControllerModule,
  TuiTooltipModule,
} from '@taiga-ui/core';
import {
  TuiBadgeModule,
  TuiDataListWrapperModule,
  TuiInputCountModule,
  TuiSelectModule,
  TuiToggleModule,
} from '@taiga-ui/kit';

import { PrizmInputOpacityModule } from '../../internal/input-opacity/input-opacity.module';
import { TuiDocDocumentationComponent } from './documentation.component';
import { TuiDocDocumentationPropertyConnectorDirective } from './documentation-property-connector.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TuiBadgeModule,
    TuiSelectModule,
    TuiToggleModule,
    TuiTooltipModule,
    TuiLinkModule,
    TuiInputCountModule,
    TuiModeModule,
    TuiGroupModule,
    PrizmInputOpacityModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    TuiDropdownModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiNotificationModule,
  ],
  declarations: [TuiDocDocumentationComponent, TuiDocDocumentationPropertyConnectorDirective],
  exports: [TuiDocDocumentationComponent, TuiDocDocumentationPropertyConnectorDirective],
})
export class PrizmDocDocumentationModule {}