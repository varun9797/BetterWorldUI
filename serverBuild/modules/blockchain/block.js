'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sha = require('crypto-js/sha256');

var _sha2 = _interopRequireDefault(_sha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function () {
    function Block(index, timestamp, data) {
        var previousHash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

        _classCallCheck(this, Block);

        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    _createClass(Block, [{
        key: 'calculateHash',
        value: function calculateHash() {
            return (0, _sha2.default)(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data) + this.nonce).toString();
        }
    }, {
        key: 'mineBlock',
        value: function mineBlock(difficulty) {
            while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
                this.nonce++;
                this.hash = this.calculateHash();
            }
        }
    }]);

    return Block;
}();

exports.default = Block;
//# sourceMappingURL=block.js.map