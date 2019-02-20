import Block from './block';

class BlockChain {
    constructor(){
        this.chain=[this.createGenesisBlock()];
        this.difficulty = 1;
    }
    createGenesisBlock(){
        return new Block(0, '01/01/2020','genesis block');
    }

    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        //newBlock.hash= newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid(){
        for(let i =1;i<this.chain.length;i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }

            
        }
        return true;
    }
}

export default BlockChain;