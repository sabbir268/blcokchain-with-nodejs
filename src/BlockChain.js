const Block = require("./Block");
const moment = require("moment");
class BlockChain {
    constructor() {
        this.chains = [this.makeFirstBlock()];
        this.difficulty = 4;
    }

    makeFirstBlock = () => {
        return new Block(0, "01/01/2021", "Initial Block in the Chain", "0");
    };

    getLatestBlock = () => {
        return this.chains[this.chains.length - 1];
    };

    addNewBlock = (newBlock) => {
        newBlock.prevHash = this.getLatestBlock().hash;
        // newBlock.hash = newBlock.computeHash();
        newBlock.proofOfWork(this.difficulty);
        this.chains.push(newBlock);
    };

    checkChainValidity = () => {
        for (let i = 1; i < this.chains.length; i++) {
            const currentBlock = this.chains[i];
            const prevBlock = this.chains[i - 1];

            if (currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }
            if (currentBlock.prevHash !== chains.hash) return false;
        }
        return true;
    };
}

module.exports = BlockChain;