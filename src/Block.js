const crypto = require("crypto-js/sha256");
class Block {
    constructor(index, timestamp, data, prevHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.computeHash();
    }

    computeHash = () => {
        return crypto(
            this.index + this.prevHash + this.timestamp + JSON.stringify(this.data)
        ).toString();
    };
}

module.exports = Block;