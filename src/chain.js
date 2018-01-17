const Block = require('./block');

class BlockChain {
    constructor() {
        this.chain = [];
        this.chain.push(this.prevBlock = new Block('hello_block_chain'));
    }

    mineBlock(data) {
        this.chain.push(this.prevBlock = new Block(data, this.chain.length, this.prevBlock.hash));
    }

    print() {
        this.chain.forEach(b => void console.log(b));
    }
}

module.exports = BlockChain;
