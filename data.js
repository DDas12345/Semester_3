const fs = require('fs')
fs.writeFileSync("data.csv", "id, username, order_value\n");
for (let i = 1; i <= 4; i++) {
    let r = Math.random() * 100;
    fs.appendFileSync("data.csv", `${i}, username ${i}, ${r}\n`)
}