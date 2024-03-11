import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import {expect, jest,} from '@jest/globals';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory(AppComponent);

  it('should make button behave correctly', () => {
    spectator = createComponent({props: {disableButton: true}});
    const component = spectator.component;
    expect(component.btnDisabled).toBeTruthy();
    expect(component.btnText).toEqual('Button disabled');
    let button: HTMLButtonElement | null = getButton();
    expect(button?.disabled).toBeTruthy();
    expect(button?.textContent).toEqual('Button disabled');

    spectator.setInput({ disableButton: false })

    expect(component.btnDisabled).toBeFalsy();
    expect(component.btnText).toEqual('Button enabled');
    button = getButton();
    expect(button?.disabled).toBeFalsy();
    expect(button?.textContent).toEqual('Button enabled');
  });

  function getButton(): HTMLButtonElement | null {
    return spectator.query('button');
  }

});
