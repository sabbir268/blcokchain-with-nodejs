const crypto = require("crypto-js/sha256");
const blake = require('blakejs');

class Block {
    constructor(index, timestamp, data, prevHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.computeHash();
        this.nonce = 0;
    }

    /** Using sha256 */

    // computeHash = () => {
    //     return crypto(
    //         this.index +
    //         this.prevHash +
    //         this.timestamp +
    //         JSON.stringify(this.data) +
    //         this.nonce
    //     ).toString();
    // };

    // proofOfWork = (difficulty) => {
    //     while (
    //         this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("a")
    //     ) {
    //         this.nonce++;
    //         this.hash = this.computeHash();
    //         console.log("nonce sha256:" + this.nonce);
    //     }
    // };

    /** Using blake2b */

    computeHash = () => {
        return blake.blake2bHex(
            this.index +
            this.prevHash +
            this.timestamp +
            JSON.stringify(this.data) +
            this.nonce
        );
    }

    proofOfWork = (difficulty) => {
        while (
            this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
        ) {
            this.nonce++;
            this.hash = this.computeHash();
            console.log("nonce blake2b:" + this.nonce);
        }
    }
}

module.exports = Block;