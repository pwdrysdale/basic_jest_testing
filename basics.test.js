const basics = require("./basics");

// Real basic tests to get you started
test("Add two numbers together", () => expect(basics.add(1, 2)).toBe(3));

test("Add a number and a string", () =>
    expect(basics.add("One", 2)).toBe(
        "Must take two numbers to be able to add them together"
    ));

// The general structure is that you specify a test, then put in what you are testing and what you should expect out of it
// test(name of test, callback then what you are doing, and what is expected)

// ##############################################################################################################################

//  Matchers

// These are the test logicals that we can use
// Examples include .toBe (as above)
// These can include math, etc. docs at:
// https://jestjs.io/docs/using-matchers

// Before moving on it is worth considering !'s
// the .not operator
test("Check that adding 2 and 2 is not 5", () =>
    expect(basics.add(2, 2)).not.toBe(5));

// ##############################################################################################################################

// Truthy tests
test("null", () => {
    const n = basics.null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test("zero", () => {
    const z = basics.zero;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

// ##############################################################################################################################

// You can string tests together too. It is worth noting that this does give
// less feedback when a test does fail
// Number tests
test("More on adding - just two numbers", () => {
    const value = basics.add(3, 4);
    expect(value).toBe(7);
    expect(value).toEqual(7);
    expect(value).not.toBe(5);
    expect(value).toBeGreaterThan(6.5);
    expect(value).toBeLessThanOrEqual(7);
    expect(value).toBeCloseTo(7);
});

// ##############################################################################################################################

// String tests

// the only special test here is toMatch, which just checks if the string is contained (regex).
// you can use .not and .toBe as well

test("there is no I in team", () => {
    expect(basics.team).not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect(basics.Christoph).toMatch(/stop/);
});

// ##############################################################################################################################

// Arrays

// the addition here is .toContain, rather self explainatory

test("Does it contain?", () => {
    expect(basics.shoppingList).toContain("milk");
});

// testing for an exact match
// note that .toEqual works here, but .toBe does not (serialisation)
test("Equal arrays", () => {
    expect(basics.shoppingList).toEqual([
        "milk",
        "cookie dough",
        "ice cream",
        "yoghurt",
    ]);
});

// order of an array obviously matters (note the .not)
test("Change the order", () => {
    expect(basics.shoppingList).not.toEqual([
        "milk",
        "cookie dough",
        "yoghurt",
        "ice cream",
    ]);
});

// ##############################################################################################################################

// Errors

// You can check if they are thrown, and their error messages

test("Checking the errors", () => {
    expect(() => basics.makeError()).toThrow();
    expect(() => basics.makeError()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => basics.makeError()).toThrow("Errorata");
    expect(() => basics.makeError()).toThrow(/Error/);
});

// For even more: https://jestjs.io/docs/expect
