// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;
pragma experimental ABIEncoderV2;

contract RaffleOrganizer {
  // Think of storing this data to offchain
  struct Raffle 
  {
    string Name;
    string description;
  }

  mapping(address => Raffle) public raffles;
  address[] public creatorAddresses;

  function addRaffle(string memory _name, string memory _description) public {
    raffles[msg.sender] = Raffle(_name, _description);
    creatorAddresses.push(msg.sender);
  }

  function getRaffle(address _ownerAddress) public view returns(string memory, string memory) {
    return (raffles[_ownerAddress].Name, raffles[_ownerAddress].description);
  }
  // work arround for returning mapping
  function getAllRaffle() public view returns (address[] memory, Raffle[] memory) {

    address[] memory raffleCreatorAddresses = new address[](creatorAddresses.length);
    Raffle[] memory raffleInfo = new Raffle[](creatorAddresses.length); 
    for(uint i = 0; i < creatorAddresses.length; i++) {
      raffleCreatorAddresses[i] = creatorAddresses[i]; 
      raffleInfo[i] = raffles[creatorAddresses[i]]; 
    }
    return (raffleCreatorAddresses, raffleInfo);

  }

}

/*



*/
