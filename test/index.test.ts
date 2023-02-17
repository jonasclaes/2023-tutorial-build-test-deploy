import {sum} from "../src";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds null + 1 to equal 1', () => {
    expect(sum(null, 1)).toBe(1);
});

test('adds 1 + null to equal 1', () => {
    expect(sum(1, null)).toBe(1);
});
