const axios = require("axios");

exports.main = async ({ event } = {}, sendResponse) => {
    let quotesURL = "https://zenquotes.io/api/random/";
    let category = "";

    try {
        if (event.payload.operation === "fetchKeywordQuotes") {
            category = event.payload.keyword;
            quotesURL = `https://zenquotes.io/api/quotes/keyword=${category}`;
        }

        const response = await axios.get(quotesURL);

        const data = {
            keyword: category,
            quotesData: response.data.slice(0, 3),
        };

        sendResponse({ context: data });
    } catch (error) {
        sendResponse({
            context: { message: error.message },
        });
    }
};