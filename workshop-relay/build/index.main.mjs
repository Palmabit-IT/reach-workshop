// Automatically generated with Reach 0.1.8 (bf654a17)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (bf654a17)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const v52 = stdlib.protect(ctc0, interact.amount, 'for Alice\'s interact field amount');
  
  const v55 = stdlib.protect(ctc1, await interact.getRelay(), {
    at: './index.rsh:15:54:application',
    fs: ['at ./index.rsh:13:9:application call to [unknown function] (defined at: ./index.rsh:13:13:function exp)'],
    msg: 'getRelay',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v52, v55],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:18:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [v52, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v57, v58], secs: v60, time: v59, didSend: v31, from: v56 } = txn1;
      
      sim_r.txns.push({
        amt: v57,
        kind: 'to',
        tok: undefined
        });
      const v63 = v58;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v57, v58], secs: v60, time: v59, didSend: v31, from: v56 } = txn1;
  ;
  const v63 = v58;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v68], secs: v70, time: v69, didSend: v43, from: v67 } = txn2;
  ;
  const v72 = stdlib.addressEq(v63, v67);
  stdlib.assert(v72, {
    at: './index.rsh:28:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  return;
  
  
  
  
  };
export async function Relay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Relay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Relay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v57, v58], secs: v60, time: v59, didSend: v31, from: v56 } = txn1;
  ;
  const v63 = ctc.iam(v58);
  const v66 = stdlib.protect(ctc1, await interact.getBob(), {
    at: './index.rsh:26:43:application',
    fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:13:function exp)'],
    msg: 'getBob',
    who: 'Relay'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v57, v63, v66],
    evt_cnt: 1,
    funcNum: 1,
    lct: v59,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v68], secs: v70, time: v69, didSend: v43, from: v67 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:28:5:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v72 = stdlib.addressEq(v63, v67);
      stdlib.assert(v72, {
        at: './index.rsh:28:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Relay'
        });
      sim_r.txns.push({
        amt: v57,
        kind: 'from',
        to: v68,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v68], secs: v70, time: v69, didSend: v43, from: v67 } = txn2;
  ;
  const v72 = stdlib.addressEq(v63, v67);
  stdlib.assert(v72, {
    at: './index.rsh:28:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Relay'
    });
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BSACAAEmAgABACI1ADEYQQFMKGRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoBFzYaAhc1BDYaAzUFSSMMQABeIxJEIzQBEkQ0BEkiEkw0AhIRRClkNQM0BTX/gARhvEE9NP9QsDQDVwggMQASRDQDIltJQQAMsbIII7IQNP+yB7MiSCKxsggjshAyCbIJMgqyB7MiSDEZgQUSREIAl0giNAESRDQESSISTDQCEhFENAUiWzX/NAVXCCA1/oAE6ZLS0jT/FlA0/lCwgaCNBklBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREg0/0lBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREg0/jX9NP8WNP1QKUsBVwAoZ0gjNQEyBjUCMRkiEkRCAAAoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yw==`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v58",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v58",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v68",
                "type": "address"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v68",
                "type": "address"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516107e63803806107e68339810160408190526100229161021d565b60008080554360035560408051602081018252918252517fbc3404376221c265064017179d37fefcb4531c2350a04e317e6d1ae0acec87a79061008990849081518152602091820151805183830152909101516001600160a01b0316604082015260600190565b60405180910390a16020820151516100a49034146007610125565b602082810180518201516001600160a01b039081168452604080518082018252600080825281860181815294515180835287518516865260019182905543909155825195860152925190911690830152906060016040516020818303038152906040526002908051906020019061011c92919061014e565b505050506102cb565b8161014a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461015a90610290565b90600052602060002090601f01602090048101928261017c57600085556101c2565b82601f1061019557805160ff19168380011785556101c2565b828001600101855582156101c2579182015b828111156101c25782518255916020019190600101906101a7565b506101ce9291506101d2565b5090565b5b808211156101ce57600081556001016101d3565b604080519081016001600160401b038111828210171561021757634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561023057600080fd5b6102386101e7565b835181526040601f198301121561024e57600080fd5b6102566101e7565b6020850151815260408501519092506001600160a01b038116811461027a57600080fd5b6020838101919091528101919091529392505050565b600181811c908216806102a457607f821691505b602082108114156102c557634e487b7160e01b600052602260045260246000fd5b50919050565b61050c806102da6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632b58c77d1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b366004610361565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610249565b604051610064929190610379565b6100c8600160005414600a6102e6565b6100e2813515806100db57506001548235145b600b6102e6565b6000808055600280546100f4906103d6565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103d6565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610420565b90507f13f136c74aa9ee1fa81f3718c3a141f047fc8c97bdb4e1752e216214707325b6826040516101b69190610484565b60405180910390a16101ca341560086102e6565b60208101516101e5906001600160a01b0316331460096102e6565b6101f560408301602084016104b2565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f1935050505015801561022e573d6000803e3d6000fd5b50600080805560018190556102459060029061030b565b5050565b60006060600054600280805461025e906103d6565b80601f016020809104026020016040519081016040528092919081815260200182805461028a906103d6565b80156102d75780601f106102ac576101008083540402835291602001916102d7565b820191906000526020600020905b8154815290600101906020018083116102ba57829003601f168201915b50505050509050915091509091565b816102455760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610317906103d6565b6000825580601f10610327575050565b601f0160209004906000526020600020908101906103459190610348565b50565b5b8082111561035d5760008155600101610349565b5090565b60006040828403121561037357600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103ad57858101830151858201606001528201610391565b818111156103bf576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103ea57607f821691505b6020821081141561037357634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461034557600080fd5b60006040828403121561043257600080fd5b6040516040810181811067ffffffffffffffff8211171561046357634e487b7160e01b600052604160045260246000fd5b6040528251815260208301516104788161040b565b60208201529392505050565b8135815260408101602083013561049a8161040b565b6001600160a01b031660209290920191909152919050565b6000602082840312156104c457600080fd5b81356104cf8161040b565b939250505056fea264697066735822122092a05bc7abc31ee95245a26c694676c8a97289165c0bedde02998a517fd0cadb64736f6c63430008090033`,
  BytecodeLen: 2022,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Relay": Relay
  };
export const _APIs = {
  };
