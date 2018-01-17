const BlockChain = require('./src/chain');

const bc = new BlockChain();

bc.mineBlock('second');
bc.mineBlock('third');

bc.print();
