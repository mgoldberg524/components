## API Report File for "components-srcs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { _AbstractConstructor } from '@angular/material/core';
import { AfterViewInit } from '@angular/core';
import { CanColor } from '@angular/material/core';
import { ChangeDetectorRef } from '@angular/core';
import { _Constructor } from '@angular/material/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i0 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/material/core';
import { InjectionToken } from '@angular/core';
import { NgZone } from '@angular/core';
import { NumberInput } from '@angular/cdk/coercion';
import { OnDestroy } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

// @public
export interface LegacyProgressAnimationEnd {
    // (undocumented)
    value: number;
}

// @public (undocumented)
export type LegacyProgressBarMode = 'determinate' | 'indeterminate' | 'buffer' | 'query';

// @public
export const MAT_LEGACY_PROGRESS_BAR_DEFAULT_OPTIONS: InjectionToken<MatLegacyProgressBarDefaultOptions>;

// @public
export const MAT_LEGACY_PROGRESS_BAR_LOCATION: InjectionToken<MatLegacyProgressBarLocation>;

// @public
export function MAT_LEGACY_PROGRESS_BAR_LOCATION_FACTORY(): MatLegacyProgressBarLocation;

// @public
export class MatLegacyProgressBar extends _MatProgressBarBase implements CanColor, AfterViewInit, OnDestroy {
    constructor(elementRef: ElementRef, _ngZone: NgZone, _animationMode?: string | undefined,
    location?: MatLegacyProgressBarLocation, defaults?: MatLegacyProgressBarDefaultOptions,
    _changeDetectorRef?: ChangeDetectorRef | undefined);
    readonly animationEnd: EventEmitter<LegacyProgressAnimationEnd>;
    // (undocumented)
    _animationMode?: string | undefined;
    _bufferTransform(): {
        transform: string;
    } | null;
    get bufferValue(): number;
    set bufferValue(v: number);
    _isNoopAnimation: boolean;
    mode: LegacyProgressBarMode;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    _primaryTransform(): {
        transform: string;
    };
    // (undocumented)
    _primaryValueBar: ElementRef;
    progressbarId: string;
    _rectangleFillValue: string;
    get value(): number;
    set value(v: NumberInput);
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatLegacyProgressBar, "mat-progress-bar", ["matProgressBar"], { "color": "color"; "value": "value"; "bufferValue": "bufferValue"; "mode": "mode"; }, { "animationEnd": "animationEnd"; }, never, never, false>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatLegacyProgressBar, [null, null, { optional: true; }, { optional: true; }, { optional: true; }, null]>;
}

// @public
export interface MatLegacyProgressBarDefaultOptions {
    color?: ThemePalette;
    mode?: LegacyProgressBarMode;
}

// @public
export interface MatLegacyProgressBarLocation {
    // (undocumented)
    getPathname: () => string;
}

// @public (undocumented)
export class MatLegacyProgressBarModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatLegacyProgressBarModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatLegacyProgressBarModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatLegacyProgressBarModule, [typeof i1.MatLegacyProgressBar], [typeof i2.CommonModule, typeof i3.MatCommonModule], [typeof i1.MatLegacyProgressBar, typeof i3.MatCommonModule]>;
}

// (No @packageDocumentation comment for this package)

```
