import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe(`UT: ${AppComponent.name}`, () => {
  const enum should {
    createInstance = 'should create the app',
    haveTitleAndRenderIt = "should have as title 'angular-base' and redder it",
  }

  const createComponent = createComponentFactory({
    component: AppComponent,
  });
  let spectator: Spectator<AppComponent> = null;

  beforeEach(() => (spectator = createComponent()));

  it(should.createInstance, () => {
    expect(spectator).not.toBeNull();
    expect(spectator.component).toBeInstanceOf(AppComponent);
  });

  it(should.haveTitleAndRenderIt, () => {
    expect(spectator.component).toHaveProperty('title');
    expect(spectator.query('.card.highlight-card.card-small span')).toHaveText(
      spectator.component.title,
    );
  });
});
