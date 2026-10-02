import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import BurgerBuilder from './BurgerBuilder';

let container;

const buttons = (text) =>
    Array.from(container.querySelectorAll('button')).filter(b => b.textContent === text);
// Stepper buttons, in order Salad, Bacon, Cheese, Meat
const steppers = (kind) =>
    Array.from(container.querySelectorAll('button[aria-label^="' + kind + ' "]'));
const click = (button) => act(() => { Simulate.click(button); });
const dialog = () => container.querySelector('[role="dialog"]');
const isOpen = () => dialog().getAttribute('aria-hidden') === 'false';
const pressEscape = () => act(() => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
});

beforeEach(() => {
    container = document.createElement('div');
    act(() => { ReactDOM.render(<BurgerBuilder />, container); });
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
});

it('starts at the base price with ordering disabled', () => {
    expect(container.textContent).toContain('Current price: $4.00');
    expect(buttons('ORDER NOW')[0].disabled).toBe(true);
    steppers('Less').forEach(b => expect(b.disabled).toBe(true));
});

it('adds and removes ingredients, updating the price', () => {
    click(steppers('More')[3]);
    expect(container.textContent).toContain('Current price: $5.30');
    expect(buttons('ORDER NOW')[0].disabled).toBe(false);

    click(steppers('Less')[3]);
    expect(container.textContent).toContain('Current price: $4.00');
    expect(buttons('ORDER NOW')[0].disabled).toBe(true);
});

it('confirms an order and resets for a new one', () => {
    click(steppers('More')[0]);
    click(buttons('ORDER NOW')[0]);
    expect(isOpen()).toBe(true);
    expect(dialog().textContent).toContain('Total$4.50');

    click(buttons('CONTINUE')[0]);
    expect(container.textContent).toContain('Order confirmed!');
    expect(container.textContent).toContain('Total paid: $4.50');

    click(buttons('BUILD ANOTHER BURGER')[0]);
    expect(container.textContent).not.toContain('Order confirmed!');
    expect(container.textContent).toContain('Current price: $4.00');
});

it('lists only the ingredients on the burger, with subtotals', () => {
    click(steppers('More')[3]);
    click(steppers('More')[3]);
    click(buttons('ORDER NOW')[0]);

    const lines = Array.from(dialog().querySelectorAll('li')).map(li => li.textContent);
    expect(lines).toEqual(['Burger base$4.00', 'meat × 2$2.60']);
    expect(dialog().textContent).toContain('Total$6.60');
});

it('closes the order summary with Escape', () => {
    click(steppers('More')[0]);
    click(buttons('ORDER NOW')[0]);
    expect(isOpen()).toBe(true);

    pressEscape();
    expect(isOpen()).toBe(false);
    // Cancelling keeps the burger as it was
    expect(container.textContent).toContain('Current price: $4.50');
});
