'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BlockChain = function () {
    function BlockChain() {
        _classCallCheck(this, BlockChain);

        this.chain = [this.createGenesisBlock()];
        this.difficulty = 1;
    }

    _createClass(BlockChain, [{
        key: 'createGenesisBlock',
        value: function createGenesisBlock() {
            return new _block2.default(0, '01/01/2020', 'genesis block');
        }
    }, {
        key: 'getLatestBlock',
        value: function getLatestBlock() {
            return this.chain[this.chain.length - 1];
        }
    }, {
        key: 'addBlock',
        value: function addBlock(newBlock) {
            newBlock.previousHash = this.getLatestBlock().hash;
            //newBlock.hash= newBlock.calculateHash();
            newBlock.mineBlock(this.difficulty);
            this.chain.push(newBlock);
        }
    }, {
        key: 'isChainValid',
        value: function isChainValid() {
            for (var i = 1; i < this.chain.length; i++) {
                var currentBlock = this.chain[i];
                var previousBlock = this.chain[i - 1];
                if (currentBlock.hash !== currentBlock.calculateHash()) {
                    return false;
                }
                if (currentBlock.previousHash !== previousBlock.hash) {
                    return false;
                }
            }
            return true;
        }
    }]);

    return BlockChain;
}();

exports.default = BlockChain;
//# sourceMappingURL=blockchain.js.map