// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
  uint private counter;
  
  // Event with a single value
  event CounterInc(uint counter);

// Writing
  function count() public {
    counter++;
    console.log("Counter is now", counter);
    emit CounterInc(counter);
  }

  // Reading
  function getCounter() public view returns (uint32){
    return uint32(counter);
  }
}