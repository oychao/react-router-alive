const Block = require('./block');

class Miner {
    constructor(name, chain, broadcaster) {
        this.name = name;
        this.chain = chain;
        this.broadcaster = broadcaster;
    }

    start() {
        if (this.chain) {
            let block = new Block(this.name, Math.random(), this.chain.prevBlock);
            setInterval(() => {
                let i = 0;
                if (block.validDiffculty()) {
                    this.chain.accept(block);
                    this.broadcast(block);
                    console.log(`${this.name} mined block ${block.index}, hash: ${block.hash}`);
                    block = new Block(this.name, Math.random(), this.chain.prevBlock);
                } else {
                    while (i++ < 100 && !block.validDiffculty()) {
                        block.calcHash(this.chain.prevBlock);
                    }
                }
            }, 0);
        }
    }

    broadcast(block) {
        this.broadcaster.send(block);
    }

    receive(block) {
        this.chain.accept(block);
        console.log(`${this.name} accept block ${block.index} from ${block.payload.miner}, data: ${block.payload.data}`);
    }

    log(block) {
    }
}

module.exports = Miner;
