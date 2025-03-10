/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {BaseHarnessFilters} from '@angular/cdk/testing';

/** A set of criteria that can be used to filter a list of `MatCardHarness` instances. */
export interface LegacyCardHarnessFilters extends BaseHarnessFilters {
  /** Only find instances whose text matches the given value. */
  text?: string | RegExp;
  /** Only find instances whose title matches the given value. */
  title?: string | RegExp;
  /** Only find instances whose subtitle matches the given value. */
  subtitle?: string | RegExp;
}
