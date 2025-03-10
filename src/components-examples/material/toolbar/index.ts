import {NgModule} from '@angular/core';
import {MatLegacyButtonModule} from '@angular/material/legacy-button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarBasicExample} from './toolbar-basic/toolbar-basic-example';
import {ToolbarMultirowExample} from './toolbar-multirow/toolbar-multirow-example';
import {ToolbarOverviewExample} from './toolbar-overview/toolbar-overview-example';
import {ToolbarHarnessExample} from './toolbar-harness/toolbar-harness-example';

export {ToolbarBasicExample, ToolbarHarnessExample, ToolbarMultirowExample, ToolbarOverviewExample};

const EXAMPLES = [
  ToolbarBasicExample,
  ToolbarHarnessExample,
  ToolbarMultirowExample,
  ToolbarOverviewExample,
];

@NgModule({
  imports: [MatLegacyButtonModule, MatIconModule, MatToolbarModule],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class ToolbarExamplesModule {}
