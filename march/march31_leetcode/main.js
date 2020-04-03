// Kenneth cruz
// Leetcode Level : Easy
// Leetcode problem: Defanging an IP Address

var defangIPaddr = function(address) {
    let newAddress = address.split('.').join('[.]')
    return newAddress;
};
