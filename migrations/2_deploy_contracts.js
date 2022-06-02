var raffleOrganizer = artifacts.require("./RaffleOrganizer.sol");

module.exports = function(deployer) {
  deployer.deploy(raffleOrganizer);
};
