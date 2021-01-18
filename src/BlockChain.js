const Block = require("./Block");
const moment = require("moment");
class BlockChain {
    constructor() {
        this.chains = [this.makeFirstBlock()];
    }

    makeFirstBlock = () => {
        return new Block(0, "01/01/2021", "Initial Block in the Chain", "0");
    };

    getLatestBlock = () => {
        return this.chains[this.chains.length - 1];
    };

    addNewBlock = (newBlock) => {
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();

        this.chains.push(newBlock);
    };
}

module.exports = BlockChain;