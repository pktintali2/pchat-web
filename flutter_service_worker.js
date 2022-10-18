'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "c68d0bea34cd0c25b64ebbb23440e9cf",
"assets/AssetManifest.json": "9236308182cbba9eab435a701c9364b2",
"assets/shaders/ink_sparkle.frag": "6f41b9dc089f4cd72e747e756cf6bc9d",
"assets/assets/sounds/selected_wrong.mp3": "9a74a10be602e2c7e109d45ae11fd297",
"assets/assets/sounds/you_won.mp3": "f6770e81732fb5ca80c374cf73c36c95",
"assets/assets/sounds/selected_right.mp3": "e10fb2df41fc12e50443c5e81c409d41",
"assets/assets/sounds/joined.mp3": "7fcc1eab9f35348e0b28916d7910a908",
"assets/assets/sounds/you_loose.mp3": "6783d86e383e3359c5895c27e4d465e0",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"version.json": "28444066c179eb1281370ea7b9681104",
"manifest.json": "7dcaba90c708ef32190b5df62fc414a5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "f1ec9ad42776bb264018ea4081d497cc",
".git/config": "414e7fb26dc9ca5e5a4c7efdb8c52aaa",
".git/logs/refs/heads/main": "c34e5df9f938df998b2ad0c944247606",
".git/logs/refs/remotes/origin/main": "aaa7a6ee230931fb307425b17401a90e",
".git/logs/HEAD": "e9fa62d3c3019c99ee4138066745ffa1",
".git/index": "9f6220c7bc2e0fdd3f1952a15e8812c5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/refs/heads/main": "b2a7ae74c9b800df3a623202ca9af4a1",
".git/refs/remotes/origin/main": "b2a7ae74c9b800df3a623202ca9af4a1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/95f17a57bc927bc4741733eb84d23f6a9f2fb9": "f9d5b553b77f0a1c3e0cc1abeae0e283",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/16/747a10b271c316d0e9ac8b791b214fd135ef25": "61102bf4eb8b508f97dd31c343376753",
".git/objects/2c/6e24bfb0e9af7bb321b31b8b12f283ccb9ac12": "efacfb10ea770d7a58cb906d3c162cd8",
".git/objects/c0/e1292b0cef93aec0a13a589dcdf25169d290ec": "dcc6740f7df50d9723a5da02faba1865",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/c4/baf7dc1fcecef37b70eaf21f6ca4dfb6b20a04": "98facac01675fe25b2e9252dad92b5a6",
".git/objects/e3/339247e06c9fb26cd2c0959f35e7206ace6a86": "99254638c93e0f2ee93700deec891307",
".git/objects/50/e31b8c47b708bf4667d318ffdc73da14bc35b7": "0ef145fc2d172d4f4b91372397ffc5b6",
".git/objects/70/db23a2316ea59b6640c08f5509c2f9c04629b0": "cc05951eae87fb5f2f931ee4bac34145",
".git/objects/bc/2bd857450be4a91ec2f3409e26a3584e03b1c8": "b143272356f6de8935f1e41c59509211",
".git/objects/96/0495e3a637e2e165b08d7f753254ddf736c746": "d993a0bef3329fbb517d7cb4e69c13ae",
".git/objects/8f/608f434b41237338fb0ada7dbb5e55130db1c7": "1397f1f18ed2b883bf11ded4fac3e14d",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/fa/5d6d94be086510569cb76925ef457041bd0a12": "97c3f9e7b6697432d5bb9891b4e9d7e2",
".git/objects/52/b816c30c617b5f8efd129e45d662baf405c60b": "fba30fec5bac40992aa92f6fc7dc74cf",
".git/objects/d1/202363c18ce00977daa9266d8cdd02135ea531": "75f3e876b6ad56b2b8591407b14c689d",
".git/objects/d1/54273d8d3ff4f266e9627c8d74835e60c80905": "4697f085dc05445e42c7bd7ae6bc7eea",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/fd3548849bf35c5abd33d259492b224772dcdb": "01edc3ac8ef0a673980cb5103d128a71",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/88/357d197d59c361886e5f22ecae71bbc0c862cf": "172cf2e5dd8705eab2b40d6eb604cb64",
".git/objects/88/ba432cce40b90d4e1a55fc90293b54c0ed5e5e": "98885bb3e7149360a9c29a1db830118b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/94c3fa4522b797ac0db790db9a7aa6a9d090a1": "6df1a5d319e415c2939894d570a8af20",
".git/objects/a9/80206e9510c74413d7542badfdab25cacae6d9": "da2feddceea6e2444c0e37b5514137e4",
".git/objects/a9/17ad4c2051b5dd7b63c75d7b692a84bfd81ceb": "b8c269c41de1b351ae083124b3d17b9c",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/4d/3af0dd936857ec6466a23e623a44f47629d82a": "0cddbb8199727398209699c05973cbff",
".git/objects/4d/66f4f0988e29ef85ca8b49233e0382b69b3b63": "be7ae01aae5db9f4480a5eae377f822b",
".git/objects/4e/ef472f2ba68b435c640d00b76fea0dfeab07f5": "a4a1a6e35451f96b743a6227363f6d4e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/66/8d653faec9f5f3ba256dbe23a19b2fde1f524f": "4c9d5983c751cee8a264299ba168c32f",
".git/objects/66/83cf75cd504472fe9e53a2c2bc07863cd3e224": "67b50056c84bbfc328d1bcbfac825c59",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1c/9e0f342806d31843d528ec0378841ac4eb20dc": "a3eaa136c7132df4fbfaca71e4168639",
".git/objects/1c/a3cacd06935472d3567fb02caf80f041b68b7d": "c8ec61192b1770dda57992ccb0d445c4",
".git/objects/cf/f2f05731560c5b16184b9a3bed7a4867fc2cf2": "cd6d3b8036f69c694e018870dd215c71",
".git/objects/ca/14b0141bf6258f3b793a7a7c357edb04f81556": "2224786a366c0306414c96a0f53d08f9",
".git/objects/be/f51fdd3401cc47b63fd8475e2de46a954b0898": "2d05834446255901600d7529d6ba58aa",
".git/objects/b1/8bc4c3a7dcee05c0736b5745a816263444cbc2": "dc6d0ec8fe0260dc29d21a1fe944ee26",
".git/objects/b1/d970aa923c4dbafbcb6453f6eef7670712276f": "948e2abcaed159de3aea90c3461c1ae8",
".git/objects/02/80e3462c7a8e7dbeba129dca54ada58785574b": "2eee5578ef9538f57864aa2ed03a245d",
".git/objects/02/061bc486c0568140450c1bb3829414d8ea778a": "9d9fb4019ff09c73d61d5ed04ef56fec",
".git/objects/02/5af97a160b6a0f483fb7b4ebfd11058756720c": "34609dcf9c1e74c3b6907716d4def96c",
".git/objects/0e/a2029e3d2055f3af03baefb1f6a9d2e48c7a1d": "68c575de53ed8497fb03ffd64f4e3ce0",
".git/objects/0e/8a31d915c79536c34bca930895e700a15232b5": "931ba4842591f87d9ec9322f2c366825",
".git/objects/86/3860dc220ea557b5fdcc30f83b39095dba021c": "e351d7fc527a293b1096d5620807c8ab",
".git/objects/e8/f27d10f3ef7e83fc15b8ac80854d124f6d54d7": "8c377820ee2af72afdc5ee8e0d666803",
".git/objects/e8/ddad4c215d30d3a50730ae49d39dc3ca1a8f07": "f1c6568e3d76caad116e8573fb25acee",
".git/objects/99/a3037efba336f5cb58a56d9930d20dc77ff899": "4567618ebe46e91b1414569b5fe2938d",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/e9/d1c069a2673c7b84a83ccbd4635551fbd5ca5a": "4c61666f11016f57e1bdee8fb18dab77",
".git/objects/e9/f7dd8748631a29b538041235b7f79853ddb80e": "3f9b164033a122862fae1e19138678e1",
".git/objects/e9/905e4ef6596cd3b7566beb219082f0eb537ad7": "f68829b487d8588de67a97b92412d47f",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/b2/7bbcbdba63ec92502702955448484be2e13e22": "d409b9b5d78f4ba6d274505df20b7013",
".git/objects/b2/05784949b47119af225e66d8e5f933d926a2c8": "c612c6faf61db6f0fa4cd5a4a2562d02",
".git/objects/b2/7c9057971d0991fd6d71732d5d3c09f4908384": "465876c228b5981c7545e513b11c7bdc",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/5e/d101ebfedef15b8b4d2458dcdc326fb8b54a86": "c6ab42f004144f261e7493700e3a1ef0",
".git/objects/74/baaeacd1ea504bc1769a5c290e995841be90ac": "50ca94dcc89bed00b9567b84fb3b959e",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/72/39112c6c7d721cfafd94d7f22ed70907f199e5": "4ec882c7653e608e5dd686eb571dc855",
".git/objects/72/004e45f1dad50b5076d3b5738736383c196fef": "6c3d812d7d891cb6dc190770805b230c",
".git/objects/72/cd0848f5a51361bea376b2c3a10bad8ae4ac22": "4e3d5e907d317c9e9741f831cabdaf88",
".git/objects/95/03e0b8de802a6b5a159cb77f38455cf13a58ed": "0427fcf6d47e2f2eacf2c8a421125ae0",
".git/objects/32/4100bb708fa9c3697cd64cb25ff6d149aec0d3": "4df7c2e0ce56e56a8f6ebafbb180166a",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/71370255e7b6634cf5b738ce2ceae4225809f0": "7a0421f5f07de84434bf0c726a4481bf",
".git/objects/5a/bd5f6e834d2d57fc679f364da2a3f5d9f5a604": "0f9bb40da50a71ce742ce8a1e26921d3",
".git/objects/42/a9fb1e8633cf0190aa21623b1b77e9d0ea032c": "ce8f87d50536314cea011191ea9e0b24",
".git/objects/c1/19e274e86720ffadd81fb81763c61a7eaaf569": "6d091e84b65508743b68dbb771b97309",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/85d70cd0f019a4d6469c117deca13691669eff": "63dac58773a202f7d0f939fb2b4ee29f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/54/b2e44b27ee544c4532fbbf05b93812c94818ba": "f7f11eb651420b308828bde75cb138af",
".git/objects/f8/c749f0f836f2443a96622f63849da0103a48f1": "18a9ea724fe07874af073f69b67c0a99",
".git/objects/9c/9d3a9ec362c10ec91514822364ab0bbe4071e0": "c963e70a9ed6a0d000aabd7db3587a74",
".git/objects/bf/9e2646e4297d7a3bbfc74295a3bcee66c69842": "c01de6403d1869dbf723ed130d73ad99",
".git/objects/82/83ab77bb9cbc055a583dcd81e29ca021af9d5f": "698e0c2a5420ff39389397055f6e6630",
".git/objects/30/ed1167935cf6783436578c18fb2914e0788e1f": "de903dd24c9b190ac03a886e97bf3b40",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b5/5e68978a1d1ccd1ef8164c760f2548d38877fa": "08b75fc5634b1274b5da480de7298a01",
".git/objects/b5/4556c5a260e422e7daeb21606b52ef32b8f070": "ed7ced656ecd250d6337661512a5f149",
".git/objects/d5/7b666786f296dde189239a0484e9247a08c959": "ad75c0ea2b98fb14490b122663c651cd",
".git/objects/9e/3ad16f7ddf3be833ba1f661f765eb275e32e6c": "afb64e3401913a5e65d56f30f2c44f5e",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/18/e4ddd6bef55a9dd63b8545ec05d4f766e20ad9": "dc2d5530111e2fd3f9326fc9b90ffacf",
".git/objects/22/11ad0cc21ad18083267534367a34aa2bb19145": "b462d3b2453be51fde381ca84bd27d77",
".git/objects/7f/05f94157eeb54060c35d44bf021ea13747f332": "40cd4a449e5eb72bde734aa5991c44f7",
".git/objects/7f/5fc99eb56ee9abb308ec0b230fe314d690901a": "b4146fd4fbf7405c95fd7e90a4f040d7",
".git/objects/9a/b9de5b1e387ebe14e8a00f2dd4a2f363b99834": "6fea72d0a73acee806bc2e0a5e1ecc80",
".git/objects/9a/f25eb5f55456b2a208692ee1742f29896f3fc4": "8dedd39c3e9c94f503928386fe532422",
".git/objects/f3/294297f7b9eb72cd8ae25ec8058e6aea3bfc48": "63b96f309c1f4b3a92bec4a41edd11cf",
".git/objects/1e/60a3fa864478a0cb2885850663a2dd0ac819f5": "0270c26d33f39b5e9f5c87eca185dfb2",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/4a048067709a342f3e32541ac08622ce35d1ee": "f2c576d69d037d15d2cd11c39b8f3959",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/5f/6fca9042a6b6e7dcdbd1992b9895ffa0429310": "52f2127dfaa96b112b9a8af2ebc69bdb",
".git/objects/0a/d0f4a5b877bc56e38eb7f2a7928d0a9a439375": "50caf93931cd6c33a3b120ca4dc36021",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/b4/b9e187bcb0ceed49ffed94715342ace7b07dda": "989bbbb06bfe244fda21619a301c4d44",
".git/objects/23/16cfb06b9a889502d793d7fee3dc9b8f445dab": "56e84de8d4f05d4f4acd244e029d31e5",
".git/objects/23/3ba3737f9ab746e60c11506503038a1aa1b31c": "080f1b87639225ccda46d22ba5308184",
".git/objects/d0/2564c4def205237066d2d96c5ae302be86afb7": "fce1bf75e24c09d1039890f42689509f",
".git/objects/2e/e561ad939434b47ed90d669485108d8ebc0697": "b115a76b9e29ba2ae436865dd516dc2b",
".git/objects/09/c675ea35ed0e58a2517e17c8228d636997d9ca": "2d1c02d68953bdd9191a8409db66f832",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/ef/0269dceb8f52b10a7df1127f60d87691edf4e9": "6ccfc0ed047864b0b54aa4c003be2681",
".git/objects/28/ef1b3b56dc2c38ba343827e83d52d89ab6133d": "7966bd0ac518c2c2a133da930c5115c5",
".git/objects/9f/cdabc4d92d7d611a7b8797acc21387e6525a70": "1b7eed491a7d5381e228c09325671f06",
".git/objects/9f/9eb3e4b434b07d333e0dfafff8a3dde6ba6fb5": "96881182829adacb6fc7826b04a966c3",
".git/objects/9f/769d765c01f3f8af54e9541392e212b94d8592": "f7cf79836a2048e5a8d498b3531f9b9a",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/61/d06ce5346b7ef09ec78f012f1dad2ebe5b663e": "2c71c1ce35de8dc6f2d31e5c06c86be5",
".git/objects/26/5d9e4e55048f9f339fe084540608855827851f": "c71432204ae3b2a7dbae1673f821c9bc",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/2f/1901005ce7d89d3659745a6a1ac3f9d0c3629e": "780382bf008c14bc83dff80916216bd4",
".git/objects/f1/d771a9303c635007d37981ce90644b9833e51e": "55ffd804371cca6e446aef5f5b4b1bed",
".git/objects/b3/8dc4ec9ca3205f0c79900b4913b3b9651f65d3": "884fb4f51083765d6d6d06a9c14ff691",
".git/objects/4a/943ebdfbec449b744cc8cb678573fb888c711b": "0ae24fcca53dcfb1f445b8e5a1db52e7",
".git/objects/4a/634b1185db0c4ceddfa01229ab314cc3371f61": "2a1fe009a979bb001a4eda59b26e6b4c",
".git/objects/6d/883bab53ccb63e8d98132f5d787b16fd2440a9": "3eb566680ddaa81994b3b477e477a1f5",
".git/objects/58/4d860c7ada1eda849e7621770af094df1b9394": "a081683df28459ae9b8cfeb5765b138e",
".git/objects/58/cafe4b0062cd49883756327433867b146cdff8": "ab9b09b5c9f3e3afbb13aa4bf2d3b933",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/0c/34a4b9678c4529661d61d46acba7d7efb5c4eb": "381235f4d4d773117a3bab2e20082f32",
".git/objects/2b/98623977f03c3dc20ebe7353b29ae646505d8b": "003d4e711715304f5beed6e5fd4de5eb",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/709d6f3bc29bd4c96ad09587e718867635d79f": "45405e986c29953d28574d29d7992bbf",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/f0/eece3352444725825edbac4639001859adb4bb": "a7868517456179109f81b7ed85182d36",
".git/objects/3d/9fbac8504e783ff4817ef02a053f2c592aa797": "898c32b6342a45c211dc6f11faad3e12",
".git/objects/3d/4f51c5769f97c5333f46cbdfa021a641c39da3": "9e96434dcc1debbdc967b607dc7d9891",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/df/bcac1c7eacc4f369b5bcb1a4fe4ca7b342d6bb": "7366f6309f596a3be14112ad043b7b6a",
".git/objects/1f/d3e3afd3be828ae69c83a1ffcd24ec023ad992": "af75e117397b56f41c6cdf0a24d28092",
".git/objects/1f/423fed35dc17ef0451a01b55b8c8ea209ca5c4": "089702f704a28d30ecd513a0284bef32",
".git/objects/08/38e2dc6261e7ab2c978dbbb1aebcb6507b8246": "f952d45dc80dbd08fc003fe402d8cab1",
".git/objects/06/873b03739779c5248dd64339d8334caa608459": "74ac05772eb862418a5688cf2c623547",
".git/objects/84/da21fb969cf9fea8d929126a468d793c33108b": "2f0278979443df7035b71b40569b0551",
".git/objects/84/e9a6454a9f25945605a8e9c1052508d3b47f93": "03ede858a4fad0098a48faf0880e168a",
".git/objects/9b/b39565a396e0e7b235ca962ab98ba4d9e602e9": "8bb09c399d1176a75f6a1668055f690c",
".git/objects/ff/e549050425c90e73b0e10034f3687d6bfec193": "a943c667c736a0f0e55f815f6169dee8",
".git/objects/2d/65987248f5245a8f9429488453349113a8eca9": "c2b6c9f78c7c8b230d670de369234192",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/6e/551857370690eafc9a8afea6c573d4152853e3": "65b998d3af9b01a5bd051dc142d16679",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/12/dc6fde7e5e3ded674356cf5b7c00912c5cf50b": "3f321df3bbfaebf511a38fa0b5d25f96",
".git/objects/c3/90b2ad47e17c4a133bc21fd3d316c881ef7be6": "eca1fdada3ff1e94ac9d8cbc5721531e",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/78/e8826fbc653850df01aaa8bd51ff687ef6591d": "93bbb9450382d388ebc50dfd27c9daee",
".git/objects/78/fccfbdec8e634f3bfae70116ecbb3a90cc8069": "aba595fc04d79cb65b0779680ca025f0",
".git/objects/78/d8db397646ece0d40f60c61c9adcb2113f83c4": "365ea0621a9c2fcb358c40c79494aa17",
".git/objects/0b/57094b54c42a1a7b299bad7fa86af67543c00a": "5376a283a549bb3aeba444c3921a44e9",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0b/e0c6f32017ddececcb4df90f687019501a84eb": "e8ae46f310bb3fde910eed3046314020",
".git/objects/8b/348cdd07b2f576330b60952226c2ecaab2690d": "8866e49e3afaea027aeea0ee182f4101",
".git/objects/8b/f70da8340a8b2152279d84c63ef7eb047bed4b": "5b311f47aaf32b8e1b1b622f75365b9c",
".git/objects/83/318aae1497b08a24ed9ea6ae3aceaefb97a749": "1fd9c401322fdfcab37166a38f4e524b",
".git/objects/b9/3eb83fb17895daa4514b01f0203e8fd9abc2aa": "3a84d64ccec3692e4de82e6d85e6bd2c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/85/944c3c5287b5dc219d1ea4608de6d80cf66ddb": "bee6d9c8d4422f6274d2f39789c6b1a8",
".git/objects/8d/295e48c863f9abff8f1d7d3e885c7506275ac3": "b69c6b4a2b2015b1417f26383b4a2cca",
".git/objects/8d/b35837738cc1e70b04f5ff211849701a620afa": "1b9e002baccd437e144503e186442d7c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/d3/45b0677479945d9d70c7a4c640b7e843271f84": "bed066e65ddc2f7198ed6e25a5f2207b",
".git/objects/2a/f26377ed52c902ec67ff73c61ee91eb33cad4f": "d48fce7609841b0559cc5258516b13e0",
".git/objects/2a/87cc9466f48e5d251388fdfb5c8f09de06ad48": "af735cbb127a9c17da67e7af2275f329",
".git/objects/d6/afef7fb17b947d4fc20fb2f745eee35c07db78": "7c08349705259dae4ab817546e49ebf1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/20/b11686609bcfaa2febc6a53205cc7b50224a60": "8247a8164047b0a437a85e0d2a545c97",
".git/objects/a2/1f804e2d5f858024cdcaaca40bf987b6184586": "7c53a44002438fdfe6a490ca202f248b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/57/3a15b281464c63ee7ae66b6ad1c59bb8a6b3d4": "ee3347d40b7d860da8f682676230c140",
".git/objects/ec/71220fee25fa3f441228881531636d8c231ade": "70f55db5051e9bedf0acd93444c12646",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/aaa444baa8a4c6858ccf3d6f467cb56779861f": "55ee2717a40eed4f5084773a70a68eba",
".git/objects/3f/dfb420c4e194e7c71f919b60ddaae3d3a73449": "078e21d20d26f81920015c606f3bee57",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/4b/5b196f783e1345d882e17a0e5f213867a464e9": "7f7f2e6b496f2f6ee5b053ecee44746f",
".git/COMMIT_EDITMSG": "aee9e29d50e7fa7ef2da8f189b29dea1",
".git/ORIG_HEAD": "f9f72f0c745a8a2d827addc9dece8034",
".git/FETCH_HEAD": "ea2e4f3c32bfb0fafd065cffb53a0d85",
"index.html": "c175a8d793267c4e0dc51a3cc68ed6ce",
"/": "c175a8d793267c4e0dc51a3cc68ed6ce",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
