// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EventPoolImplementation {

    address public token;
    uint256 public threshold;
    address[] public participants;
    mapping(address => bool) public isParticipant;

    bool public initialized = false;

    // eventos
    event Deposit(address indexed from, uint256 amount);
    event Withdraw(address indexed to, uint256 amount);

    // ---------- INIT ----------
    function initialize(
        address _token,
        address[] calldata _participants,
        uint256 _threshold
    ) external {
        require(!initialized, "Already initialized");
        require(_threshold > 0 && _threshold <= _participants.length, "Invalid threshold");

        token = _token;
        participants = _participants;
        threshold = _threshold;

        for(uint i = 0; i < _participants.length; i++){
            isParticipant[_participants[i]] = true;
        }

        initialized = true;
    }

    // ---------- DEPOSIT ----------
    function deposit(uint256 amount) external payable {
        require(isParticipant[msg.sender], "Not participant");

        if(token == address(0)){
            require(msg.value == amount, "ETH amount mismatch");
        } else {
            (bool success, ) = token.call(
                abi.encodeWithSignature("transferFrom(address,address,uint256)", msg.sender, address(this), amount)
            );
            require(success, "Token transfer failed");
        }

        emit Deposit(msg.sender, amount);
    }

    // ---------- WITHDRAW ----------
    function withdraw(address to, uint256 amount) external {
        require(isParticipant[msg.sender], "Not participant");

        if(token == address(0)){
            payable(to).transfer(amount);
        } else {
            (bool success, ) = token.call(
                abi.encodeWithSignature("transfer(address,uint256)", to, amount)
            );
            require(success, "Token transfer failed");
        }

        emit Withdraw(to, amount);
    }

    // fallback receive
    receive() external payable {}
}
