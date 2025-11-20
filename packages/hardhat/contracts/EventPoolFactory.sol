// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./EventPoolImplementation.sol";

contract EventPoolFactory {
    address public implementation;
    address[] public allPools;

    event PoolCreated(address indexed pool, address indexed creator);

    constructor(address _implementation){
        implementation = _implementation;
    }

    function createPool(
        address _token,
        address[] calldata _participants,
        uint256 _threshold
    ) external returns(address) {
        // crear clone y hacerlo payable
        address payable cloneAddress = payable(Clones.clone(implementation));

        // inicializar clone
        EventPoolImplementation clone = EventPoolImplementation(cloneAddress);
        clone.initialize(_token, _participants, _threshold);

        // guardar dirección
        allPools.push(address(clone));

        emit PoolCreated(address(clone), msg.sender);
        return address(clone);
    }

    function getAllPools() external view returns(address[] memory){
        return allPools;
    }
}
