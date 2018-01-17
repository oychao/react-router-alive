const crypto = require('crypto');

class Block {
    constructor(data, index = 0, prevHash = 'Ouyang') {
        this.difficulty = 3;

        this.index = index;
        this.prevHash = prevHash;
        this.data = data;
        this.timestamp = new Date().getTime();
        this.nonce = 0;
        this.hash = this.calcHash();
    }

    calcHash() {
        let hash = '';
        while (!this.validDiffculty(hash)) {
            this.nonce++;
            hash = crypto
                .createHash("sha256")
                .update(this.index + this.prevHash + this.timestamp + this.data + this.nonce)
                .digest("hex");
        }
        return hash;
    }

    validDiffculty(hash) {
        for (let i = 0; i < this.difficulty; i++) {
            if (hash.charAt(i) !== '0') {
                return false;
            }
        }
        return true;
    }
}

module.exports = Block;
