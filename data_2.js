const fs = require('fs');

// Create data_2.csv
fs.writeFileSync("data_2.csv", "id, username, order_value\n");

for (let i = 1; i <= 50; i++) {
    let r = Math.random() * 100;
    fs.appendFileSync(
        "data_2.csv",
        `${i}, username ${i}, ${r}\n`
    );
}

// Read data_2.csv using a stream
const stream = fs.createReadStream("data_2.csv", "utf-8");

let count = 0;

stream.on("data", (chunk) => {
    console.log(chunk);
    count++;
});

stream.on("end", () => {
    console.log("data stream is completed");
    console.log("Number of chunks:", count);
});