const fs = require('fs');

// Create big_data.csv
fs.writeFileSync("big_data.csv", "id, username, order_value\n");

for (let i = 1; i <= 50; i++) {
    let r = Math.random() * 100;
    fs.appendFileSync(
        "big_data.csv",
        `${i}, username ${i}, ${r}\n`
    );
}

// Read big_data.csv using a stream
const stream = fs.createReadStream("big_data.csv", "utf-8");

let count = 0;

stream.on("data", (chunk) => {
    console.log(chunk);
    count++;
});

stream.on("end", () => {
    console.log("data stream is completed");
    console.log("Number of chunks:", count);
});