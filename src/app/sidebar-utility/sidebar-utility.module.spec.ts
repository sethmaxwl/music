import { SidebarUtilityModule } from './sidebar-utility.module';

describe('SidebarUtilityModule', () => {
  let sidebarUtilityModule: SidebarUtilityModule;

  beforeEach(() => {
    sidebarUtilityModule = new SidebarUtilityModule();
  });

  it('should create an instance', () => {
    expect(sidebarUtilityModule).toBeTruthy();
  });
});
