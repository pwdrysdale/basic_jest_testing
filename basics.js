const basics = {
    add: (a, b) => {
        if (typeof a === "number" && typeof b === "number") return a + b;
        return "Must take two numbers to be able to add them together";
    },

    null: null,

    zero: 0,

    team: "team",

    Christoph: "Christoph",

    shoppingList: ["milk", "cookie dough", "ice cream", "yoghurt"],

    makeError: () => {
        throw new Error("Errorata");
    },
};

module.exports = basics;
