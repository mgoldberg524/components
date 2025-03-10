import {createTestApp, patchDevkitTreeToExposeTypeScript} from '@angular/cdk/schematics/testing';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {createNewTestRunner, migrateComponents, THEME_FILE} from '../test-setup-helper';

describe('input styles', () => {
  let runner: SchematicTestRunner;
  let cliAppTree: UnitTestTree;

  async function runMigrationTest(oldFileContent: string, newFileContent: string) {
    cliAppTree.create(THEME_FILE, oldFileContent);
    const tree = await migrateComponents(['input'], runner, cliAppTree);
    expect(tree.readContent(THEME_FILE)).toBe(newFileContent);
  }

  beforeEach(async () => {
    runner = createNewTestRunner();
    cliAppTree = patchDevkitTreeToExposeTypeScript(await createTestApp(runner));
  });

  describe('mixin migrations', () => {
    it('should replace the old theme with the new ones', async () => {
      await runMigrationTest(
        `
        @use '@angular/material' as mat;
        $theme: ();
        @include mat.input-theme($theme);
      `,
        `
        @use '@angular/material' as mat;
        $theme: ();
        @include mat.mdc-input-theme($theme);
        @include mat.mdc-input-typography($theme);
      `,
      );
    });

    it('should use the correct namespace', async () => {
      await runMigrationTest(
        `
        @use '@angular/material' as arbitrary;
        $theme: ();
        @include arbitrary.input-theme($theme);
      `,
        `
        @use '@angular/material' as arbitrary;
        $theme: ();
        @include arbitrary.mdc-input-theme($theme);
        @include arbitrary.mdc-input-typography($theme);
      `,
      );
    });

    it('should handle updating multiple themes', async () => {
      await runMigrationTest(
        `
        @use '@angular/material' as mat;
        $light-theme: ();
        $dark-theme: ();
        @include mat.input-theme($light-theme);
        @include mat.input-theme($dark-theme);
      `,
        `
        @use '@angular/material' as mat;
        $light-theme: ();
        $dark-theme: ();
        @include mat.mdc-input-theme($light-theme);
        @include mat.mdc-input-typography($light-theme);
        @include mat.mdc-input-theme($dark-theme);
        @include mat.mdc-input-typography($dark-theme);
      `,
      );
    });

    it('should preserve whitespace', async () => {
      await runMigrationTest(
        `
        @use '@angular/material' as mat;
        $theme: ();


        @include mat.input-theme($theme);


      `,
        `
        @use '@angular/material' as mat;
        $theme: ();


        @include mat.mdc-input-theme($theme);
        @include mat.mdc-input-typography($theme);


      `,
      );
    });
  });

  describe('selector migrations', () => {
    it('should update the legacy mat-input classname', async () => {
      await runMigrationTest(
        `
        .mat-input-element {
          color: red;
        }
      `,
        `
        .mat-mdc-input-element {
          color: red;
        }
      `,
      );
    });

    it('should update a legacy classname w/ multiple selectors', async () => {
      await runMigrationTest(
        `
        .some-class.mat-input-element, .another-class {
          color: red;
        }
      `,
        `
        .some-class.mat-mdc-input-element, .another-class {
          color: red;
        }
      `,
      );
    });

    it('should preserve the whitespace of multiple selectors', async () => {
      await runMigrationTest(
        `
        .some-class,
        .mat-input-element,
        .another-class { color: red; }
      `,
        `
        .some-class,
        .mat-mdc-input-element,
        .another-class { color: red; }
      `,
      );
    });

    it('should add comment for potentially deprecated selector', async () => {
      await runMigrationTest(
        `
        .mat-input-server {
          color: red;
        }
      `,
        `
        /* TODO: The following rule targets internal classes of input that may no longer apply for the MDC version. */

        .mat-input-server {
          color: red;
        }
      `,
      );
    });

    it('should add comment for potentially deprecated multi-line selector', async () => {
      await runMigrationTest(
        `
        .some-class
        .mat-input-server {
          color: red;
        }
      `,
        `
        /* TODO: The following rule targets internal classes of input that may no longer apply for the MDC version. */

        .some-class
        .mat-input-server {
          color: red;
        }
      `,
      );
    });

    it('should update the legacy mat-input class and add comment for potentially deprecated selector', async () => {
      await runMigrationTest(
        `
        .mat-input-element.some-class, .mat-input-server {
          color: red;
        }
      `,
        `
        /* TODO: The following rule targets internal classes of input that may no longer apply for the MDC version. */

        .mat-mdc-input-element.some-class, .mat-input-server {
          color: red;
        }
      `,
      );
    });
  });
});
