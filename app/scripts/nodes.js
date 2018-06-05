'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    Gochain: "GO",
	ETH: "ETH",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    POA: "POA",
    TOMO: "TOMO",
    ELLA: "ELLA",
    ETSC: "ETSC",
    EGEM: "EGEM",
    CLO: "CLO",
    CLOT: "Testnet CLO",
    EAST: "EAST",
    Custom: "CUSTOM GO"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
	'GO': {
        'name': 'GO',
        'blockExplorerTX': 'https://explorer.gochain.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.gochain.io/addr/[[address]]',
        'type': nodes.nodeTypes.Gochain,
        'eip155': true,
        'chainId': 60,
        'tokenList': require('./tokens/gocTokens.json'),
        'abiList': require('./abiDefinitions/gocAbi.json'),
        'service': 'Gochain',
        'lib': new nodes.customNode('https://rpc.gochain.io', '')
    },
	'Testnet': {
        'name': 'Testnet',
        'blockExplorerTX': 'https://testnet-explorer.gochain.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://testnet-explorer.gochain.io/addr/[[address]]',
        'type': nodes.nodeTypes.Custom,
        'eip155': true,
        'chainId': 31337,
        'tokenList': require('./tokens/gocTokens.json'),
        'abiList': require('./abiDefinitions/gocAbi.json'),
        'service': 'Testnet',
        'lib': new nodes.customNode('https://testnet-rpc.gochain.io', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
