const Chain = require('./src/chain');
const Miner = require('./src/miner');

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    const chain = new Chain();

    const handleMsg = msg => {
        switch (msg.type) {
            case 'broadcast':
                Object.keys(cluster.workers).forEach(k => {
                    const w = cluster.workers[k]
                    if (w.name === msg.from) {
                        return;
                    }
                    w.send(msg);
                });
                break;
            default: ;
        }
    };
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork();
        worker.name = `miner-${i}`;
        worker.send({
            type: 'init',
            payload: {
                name: worker.name,
                blocks: chain.blocks
            }
        });
        worker.on('message', handleMsg);
    }
} else {
    let miner;
    process.on('message', msg => {
        switch (msg.type) {
            case 'init':
                let { name, blocks } = msg.payload;
                const chain = new Chain(blocks);
                miner = new Miner(name, chain, {
                    send(block) {
                        process.send({
                            from: miner.name,
                            type: 'broadcast',
                            payload: block
                        });
                    }
                });
                console.log(`${miner.name} initialized.`);
                miner.start();
                break;
            case 'broadcast':
                miner.receive(msg.payload);
                break;
            default: ;
        }
    });
}
