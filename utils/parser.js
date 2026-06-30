module.exports = function parseReceipt(text) {

    let amount = 0;
    let title = "Unknown Store";

    const totalRegex = /(totale|tot|euro|valore)\s*[:€]*\s*([0-9]+[.,][0-9]{2})/i;

    const match = text.match(totalRegex);

    if (match) {
        amount = Number(
            match[2].replace(",", ".")
        );
    }

    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);

    if (lines.length > 0) {
        title = lines[0];
    }

    return {
        title,
        amount,
        category: "Groceries"
    };
};