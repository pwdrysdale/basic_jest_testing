const axios = require("axios");

const asyncFns = {
    getData: async () => {
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            return data;
        } catch (err) {
            throw new Error("Error");
        }
    },
};

module.exports = asyncFns;
