import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatLegacyMenuHarness} from '@angular/material/legacy-menu/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {MatLegacyMenuModule} from '@angular/material/legacy-menu';
import {MenuHarnessExample} from './menu-harness-example';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('MenuHarnessExample', () => {
  let fixture: ComponentFixture<MenuHarnessExample>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatLegacyMenuModule, NoopAnimationsModule],
      declarations: [MenuHarnessExample],
    }).compileComponents();
    fixture = TestBed.createComponent(MenuHarnessExample);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should load all menu harnesses', async () => {
    const menues = await loader.getAllHarnesses(MatLegacyMenuHarness);
    expect(menues.length).toBe(2);
  });

  it('should get disabled state', async () => {
    const [enabledMenu, disabledMenu] = await loader.getAllHarnesses(MatLegacyMenuHarness);
    expect(await enabledMenu.isDisabled()).toBe(false);
    expect(await disabledMenu.isDisabled()).toBe(true);
  });

  it('should get menu text', async () => {
    const [firstMenu, secondMenu] = await loader.getAllHarnesses(MatLegacyMenuHarness);
    expect(await firstMenu.getTriggerText()).toBe('Settings');
    expect(await secondMenu.getTriggerText()).toBe('Disabled menu');
  });

  it('should open and close', async () => {
    const menu = await loader.getHarness(MatLegacyMenuHarness.with({triggerText: 'Settings'}));
    expect(await menu.isOpen()).toBe(false);
    await menu.open();
    expect(await menu.isOpen()).toBe(true);
    await menu.close();
    expect(await menu.isOpen()).toBe(false);
  });

  it('should get all items', async () => {
    const menu = await loader.getHarness(MatLegacyMenuHarness.with({triggerText: 'Settings'}));
    await menu.open();
    expect((await menu.getItems()).length).toBe(2);
  });
});
