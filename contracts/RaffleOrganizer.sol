// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract RaffleOrganizer {
  struct Raffle 
  {
    string Name;
    string description;
  }

  mapping(address => Raffle) raffles;

  function addRaffle(string memory _name, string memory _description) public {
    raffles[msg.sender] = Raffle(_name, _description);
  }

  function getRaffle(address _ownerAddress) public view returns(string memory, string memory) {
    return (raffles[_ownerAddress].Name, raffles[_ownerAddress].description);
  }
}

/*



*/
