const BlockchainGame = artifacts.require('BlockchainGame');

module.exports = function (deployer) {
  deployer.deploy(BlockchainGame);
}
