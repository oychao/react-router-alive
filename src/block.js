const crypto = require('crypto');

difficulty = 5;

class Block {
    constructor(miner, data, prevBlock = {
        index: -1,
        hash: 'Hello Block Chain'
    }) {
        this.payload = { miner, data };
        this.nonce = 0;
        this.prevBlock = prevBlock;
        this.calcHash();
    }

    calcHash(prevBlock) {
        this.prevBlock = prevBlock || this.prevBlock;
        this.index = this.prevBlock.index + 1;
        this.prevHash = this.prevBlock.hash;
        this.timestamp = new Date().getTime();
        this.hash = crypto
            .createHash("sha256")
            .update(this.index + this.prevHash + this.timestamp + this.miner + this.data + ++this.nonce)
            .digest("hex");
    }

    validDiffculty() {
        for (let i = 0; i < difficulty; i++) {
            if (this.hash.charAt(i) !== '0') {
                return false;
            }
        }
        return true;
    }
}

module.exports = Block;
