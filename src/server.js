const express = require("express");
const app = express();
const Block = require("./Block");
const BlockChain = require("./BlockChain");
app.get("/", (req, res) => {
    let blockChain = new BlockChain();
    blockChain.addNewBlock(
        new Block(1, "01/06/2020", {
            sender: "Iris Ljesnjanin",
            recipient: "Cosima Mielke",
            quantity: 50,
        })
    );
    blockChain.addNewBlock(
        new Block(1, "01/07/2020", {
            sender: "Vitaly Friedman",
            recipient: "Ricardo Gimenes",
            quantity: 100,
        })
    );
    blockChain.addNewBlock(
        new Block(2, "01/07/2020", {
            sender: "Atik Khan",
            recipient: "Laxman",
            quantity: 300,
        })
    );

    res.send(blockChain);
});

const port = Number(process.env.PORT || 3331);
app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));