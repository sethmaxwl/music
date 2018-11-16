import { MusicMakerModule } from './music-maker.module';

describe('MusicMakerModule', () => {
  let musicMakerModule: MusicMakerModule;

  beforeEach(() => {
    musicMakerModule = new MusicMakerModule();
  });

  it('should create an instance', () => {
    expect(musicMakerModule).toBeTruthy();
  });
});
