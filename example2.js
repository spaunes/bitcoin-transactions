https://btgexp.com/tx/cc9684a4243999d1a1fc21c7ad7dbd1b3462bb1fb29614ed16b4d2763ab12bd4

node tx.js BTG testamount prevamount=0.00998277 fees=0.00001001 amount=0.005

/*
--- Previous amount is: 0.00998277
--- Amount to spend is: 0.00500000
--- Network fees are: 0.00001001
--- Dev fees are: 0.00008500
--- Refunded amount to spending address is: 0.00488776
*/

node tx.js BTG create prevtx=d5a80b216e5966790617dd3828bc13152bad82f121b16208496e9d718664e206 prevaddr=GSjwHAAYmFfQ4WPArc2ErtjQGr3Q2nkjvo prevamount=0.00998277 previndex=31 privkey=privkey addr=GKz5ii8tWQG9hd196vNkwkLKsWHqaeKSoB amount=0.005 fees=0.00001001

/*
Version BTG
create
Creating transaction to send 0.005 (without fees) to GKz5ii8tWQG9hd196vNkwkLKsWHqaeKSoB from output number 31 with amount 0.00998277 owned by GSjwHAAYmFfQ4WPArc2ErtjQGr3Q2nkjvo in transaction d5a80b216e5966790617dd3828bc13152bad82f121b16208496e9d718664e206
--- Previous amount is: 0.00998277
--- Amount to spend is: 0.00500000
--- Network fees are: 0.00001001
--- Dev fees are: 0.00008500
--- Refunded amount to spending address is: 0.00488776
Address corresponding to private key is GSjwHAAYmFfQ4WPArc2ErtjQGr3Q2nkjvo
[ [ <Buffer 30 44 02 20 39 e2 ee e9 a1 4f d1 86 65 ec ee aa c8 af 87 88 87 04 ef 2b fa 14 af e8 50 b8 50 e6 fc 7f de a7 02 20 1d 3c 43 40 cc 69 98 73 82 95 17 63 ... >,
    <Buffer 21 03 9f 1e 16 0a 02 07 9a 6d 6b 7b e0 33 4c c4 d7 6a 12 5c d1 3a 6f 8d 71 31 b1 1c 26 3b c2 0b f9 18> ] ]
{ input:
   [ { hash: 'd5a80b216e5966790617dd3828bc13152bad82f121b16208496e9d718664e206',
       n: 31,
       scriptSigLen: <Buffer 6a>,
       scriptSig: [Object],
       data: null,
       script: null,
       nSequence: <Buffer ff ff ff ff>,
       privKey: <Buffer bb ed 76 a2 37 2c 42 95 a6 e3 53 3d c7 53 26 83 2d 22 a9 67 b5 0e 85 29 ab 1e a9 9d 14 49 48 1f>,
       pubKey: <Buffer 03 9f 1e 16 0a 02 07 9a 6d 6b 7b e0 33 4c c4 d7 6a 12 5c d1 3a 6f 8d 71 31 b1 1c 26 3b c2 0b f9 18>,
       prevscriptPubkey: <Buffer 76 a9 14 61 97 5b 3a 4b 9d 50 59 e3 db 3e 30 1e 39 4d 6d 13 27 5b 36 88 ac>,
       prevscriptPubkeyValue: 998277 } ],
  output:
   [ { nValue: 500000,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 17 7b 58 5b 54 01 ad 21 b6 0b 78 b1 b3 c9 19 96 f2 50 29 6d 88 ac>,
       address: 'GKz5ii8tWQG9hd196vNkwkLKsWHqaeKSoB',
       type: 'p2pkh' },
     { nValue: 488775,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 61 97 5b 3a 4b 9d 50 59 e3 db 3e 30 1e 39 4d 6d 13 27 5b 36 88 ac>,
       address: 'GSjwHAAYmFfQ4WPArc2ErtjQGr3Q2nkjvo',
       type: 'p2pkh' },
     { nValue: 8500,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 5b 79 a9 d2 9a 34 f2 f2 84 ec dd 33 00 9f fa 5e 02 52 b6 89 88 ac>,
       address: '',
       type: 'p2pkh' } ],
  fees: 1002,
  s: 8500,
  nLockTime: <Buffer 00 00 00 00>,
  nVersion: <Buffer 02 00 00 00>,
  sigHash: <Buffer 41 4f 00 00>,
  nbinput: 1,
  nboutput: 3,
  version: 'BTG' }
----- Transaction hash: cc9684a4243999d1a1fc21c7ad7dbd1b3462bb1fb29614ed16b4d2763ab12bd4
Transaction body:
020000000106e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d51f0000006a473044022039e2eee9a14fd18665eceeaac8af87888704ef2bfa14afe850b850e6fc7fdea702201d3c4340cc6998738295176320dc2597b3b6fcb93abc01add17b57b9ea70f0754121039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf918ffffffff0320a10700000000001976a914177b585b5401ad21b60b78b1b3c91996f250296d88ac47750700000000001976a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac34210000000000001976a9145b79a9d29a34f2f284ecdd33009ffa5e0252b68988ac00000000
Complete transaction:
e1476d4474780000000000000000000003010000d42bb13a020000000106e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d51f0000006a473044022039e2eee9a14fd18665eceeaac8af87888704ef2bfa14afe850b850e6fc7fdea702201d3c4340cc6998738295176320dc2597b3b6fcb93abc01add17b57b9ea70f0754121039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf918ffffffff0320a10700000000001976a914177b585b5401ad21b60b78b1b3c91996f250296d88ac47750700000000001976a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac34210000000000001976a9145b79a9d29a34f2f284ecdd33009ffa5e0252b68988ac00000000
Size 283 bytes
Network Fees: 1002 - 3.54 satoshis/byte
Dev Fees: 8500
------------- Check - deserialize
{ input:
   [ { hash: 'd5a80b216e5966790617dd3828bc13152bad82f121b16208496e9d718664e206',
       n: 31,
       scriptSigLen: <Buffer 6a>,
       scriptSig: [Object],
       data: null,
       nSequence: <Buffer ff ff ff ff> } ],
  output:
   [ { nValue: 500000,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 17 7b 58 5b 54 01 ad 21 b6 0b 78 b1 b3 c9 19 96 f2 50 29 6d 88 ac>,
       address: 'GKz5ii8tWQG9hd196vNkwkLKsWHqaeKSoB',
       type: 'p2pkh' },
     { nValue: 488775,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 61 97 5b 3a 4b 9d 50 59 e3 db 3e 30 1e 39 4d 6d 13 27 5b 36 88 ac>,
       address: 'GSjwHAAYmFfQ4WPArc2ErtjQGr3Q2nkjvo',
       type: 'p2pkh' },
     { nValue: 8500,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 5b 79 a9 d2 9a 34 f2 f2 84 ec dd 33 00 9f fa 5e 02 52 b6 89 88 ac>,
       address: 'GSBbeuKPu4d6HKJhtPgk7XayMcaXyQy8TS',
       type: 'p2pkh' } ],
  s: 0,
  nVersion: <Buffer 02 00 00 00>,
  nbinput: 1,
  nboutput: 3,
  nLockTime: <Buffer 00 00 00 00> }
------------- End Check - deserialize
------------- Check - verify
----- Transaction hash: cc9684a4243999d1a1fc21c7ad7dbd1b3462bb1fb29614ed16b4d2763ab12bd4
signature: 3044022039e2eee9a14fd18665eceeaac8af87888704ef2bfa14afe850b850e6fc7fdea702201d3c4340cc6998738295176320dc2597b3b6fcb93abc01add17b57b9ea70f075
message to be signed: 020000004ee41cbd7a9495aeff29b1827648a8855b64105bc2c10e83bf9280c73076d8a53bb13029ce7b1f559ef5e747fcac439f1455a2ec7c5f09b72290795e7066504406e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d51f0000001976a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac853b0f0000000000ffffffff8ea3b70975d956ba80b33d58cc1dcadceb5eb4cda36eb66e1a183db25069043100000000414f0000
----- Transaction verified
----- Transaction hash: cc9684a4243999d1a1fc21c7ad7dbd1b3462bb1fb29614ed16b4d2763ab12bd4
------------- End Check - verify
*/

node tx.js BTG decode 020000000106e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d51f0000006a473044022039e2eee9a14fd18665eceeaac8af87888704ef2bfa14afe850b850e6fc7fdea702201d3c4340cc6998738295176320dc2597b3b6fcb93abc01add17b57b9ea70f0754121039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf918ffffffff0320a10700000000001976a914177b585b5401ad21b60b78b1b3c91996f250296d88ac47750700000000001976a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac34210000000000001976a9145b79a9d29a34f2f284ecdd33009ffa5e0252b68988ac00000000

/*
Version BTG
decode
{ input:
   [ { hash: 'd5a80b216e5966790617dd3828bc13152bad82f121b16208496e9d718664e206',
       n: 31,
       scriptSigLen: <Buffer 6a>,
       scriptSig: [Object],
       data: null,
       nSequence: <Buffer ff ff ff ff> } ],
  output:
   [ { nValue: 500000,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 17 7b 58 5b 54 01 ad 21 b6 0b 78 b1 b3 c9 19 96 f2 50 29 6d 88 ac>,
       address: 'GKz5ii8tWQG9hd196vNkwkLKsWHqaeKSoB',
       type: 'p2pkh' },
     { nValue: 488775,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 61 97 5b 3a 4b 9d 50 59 e3 db 3e 30 1e 39 4d 6d 13 27 5b 36 88 ac>,
       address: 'GSjwHAAYmFfQ4WPArc2ErtjQGr3Q2nkjvo',
       type: 'p2pkh' },
     { nValue: 8500,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 5b 79 a9 d2 9a 34 f2 f2 84 ec dd 33 00 9f fa 5e 02 52 b6 89 88 ac>,
       address: 'GSBbeuKPu4d6HKJhtPgk7XayMcaXyQy8TS',
       type: 'p2pkh' } ],
  s: 0,
  nVersion: <Buffer 02 00 00 00>,
  nbinput: 1,
  nboutput: 3,
  nLockTime: <Buffer 00 00 00 00> }
*/

node tx.js BTG testconnect A.B.47.27

/*
Version BTG
testconnect
Sending to A.B.47.27
Connected to : A.B.47.27:8338
Sent version to A.B.47.27
------ Answer receiced from A.B.47.27
version
------ Answer receiced from A.B.47.27
verack
-------- Verack received - completing handshake with A.B.47.27
------ Answer receiced from A.B.47.27
sendheaders
------ Answer receiced from A.B.47.27
ping
addr
getheaders
feefilter
End connection with A.B.47.27:8338
*/

node tx.js BTG send e1476d4474780000000000000000000003010000d42bb13a020000000106e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d51f0000006a473044022039e2eee9a14fd18665eceeaac8af87888704ef2bfa14afe850b850e6fc7fdea702201d3c4340cc6998738295176320dc2597b3b6fcb93abc01add17b57b9ea70f0754121039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf918ffffffff0320a10700000000001976a914177b585b5401ad21b60b78b1b3c91996f250296d88ac47750700000000001976a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac34210000000000001976a9145b79a9d29a34f2f284ecdd33009ffa5e0252b68988ac00000000 A.B.47.27

/*
Version BTG
send
Sending to A.B.47.27
Connected to : A.B.47.27:8338
Sent version to A.B.47.27
------ Answer receiced from A.B.47.27
version
------ Answer receiced from A.B.47.27
verack
-------- Verack received - completing handshake with A.B.47.27
------ Sending transaction to A.B.47.27
Sent e1476d4474780000000000000000000003010000d42bb13a020000000106e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d51f0000006a473044022039e2eee9a14fd18665eceeaac8af87888704ef2bfa14afe850b850e6fc7fdea702201d3c4340cc6998738295176320dc2597b3b6fcb93abc01add17b57b9ea70f0754121039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf918ffffffff0320a10700000000001976a914177b585b5401ad21b60b78b1b3c91996f250296d88ac47750700000000001976a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac34210000000000001976a9145b79a9d29a34f2f284ecdd33009ffa5e0252b68988ac00000000 to A.B.47.27
------ Answer receiced from A.B.47.27
sendheaders
------ Answer receiced from A.B.47.27
ping
addr
getheaders
feefilter
End connection with A.B.47.27:8338
*/
//Check with cli if you can
bgold-cli decoderawtransaction cc9684a4243999d1a1fc21c7ad7dbd1b3462bb1fb29614ed16b4d2763ab12bd4

/*
{
  "amount": 0.00000000,
  "fee": -0.00001002,
  "confirmations": 0,
  "trusted": true,
  "txid": "cc9684a4243999d1a1fc21c7ad7dbd1b3462bb1fb29614ed16b4d2763ab12bd4",
  "walletconflicts": [
  ],
  "time": 1511873524,
  "timereceived": 1511873524,
  "bip125-replaceable": "no",
  "details": [
    {
      "account": "",
      "address": "GKz5ii8tWQG9hd196vNkwkLKsWHqaeKSoB",
      "category": "send",
      "amount": -0.00500000,
      "label": "",
      "vout": 0,
      "fee": -0.00001002,
      "abandoned": false
    },
    {
      "account": "",
      "address": "GSjwHAAYmFfQ4WPArc2ErtjQGr3Q2nkjvo",
      "category": "send",
      "amount": -0.00488775,
      "label": "",
      "vout": 1,
      "fee": -0.00001002,
      "abandoned": false
    },
    {
      "account": "",
      "address": "GKz5ii8tWQG9hd196vNkwkLKsWHqaeKSoB",
      "category": "receive",
      "amount": 0.00500000,
      "label": "",
      "vout": 0
    },
    {
      "account": "",
      "address": "GSjwHAAYmFfQ4WPArc2ErtjQGr3Q2nkjvo",
      "category": "receive",
      "amount": 0.00488775,
      "label": "",
      "vout": 1
    }
  ],
  "hex": "020000000106e26486719d6e490862b121f182ad2b1513bc2838dd17067966596e210ba8d51f0000006a473044022039e2eee9a14fd18665eceeaac8af87888704ef2bfa14afe850b850e6fc7fdea702201d3c4340cc6998738295176320dc2597b3b6fcb93abc01add17b57b9ea70f0754121039f1e160a02079a6d6b7be0334cc4d76a125cd13a6f8d7131b11c263bc20bf918ffffffff0320a10700000000001976a914177b585b5401ad21b60b78b1b3c91996f250296d88ac47750700000000001976a91461975b3a4b9d5059e3db3e301e394d6d13275b3688ac34210000000000001976a9145b79a9d29a34f2f284ecdd33009ffa5e0252b68988ac00000000"
  */
