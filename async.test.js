const axios = require("axios");

const asyncFns = require("./async");

// By calling a function
// Probably the most helpful and strainghtforward way
test("Get async data", async () => {
    const data = await asyncFns.getData();
    expect(data).toEqual({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
    });
});

// ##############################################################################################################################
// Using resolve / reject
// One of these will fail. If it resolved, then the reject will auto fail
// i.e. comment one of these out always

test("should get data on success", async () => {
    await expect(asyncFns.getData()).resolves.toEqual({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
    });
});

// test("should get the right error", async () => {
//     await expect(asyncFns.getData()).rejects.toEqual("Error");
// });
