import {runHarnessTests} from '@angular/material/legacy-button/testing/shared.spec';
import {MatButtonModule} from '../index';
import {MatButtonHarness} from './button-harness';

describe('MDC-based MatButtonHarness', () => {
  runHarnessTests(MatButtonModule, MatButtonHarness);
});
