'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c3b7ae02303a9783700b9cb540aed581",
".git/config": "319ad3ff5f6e60d83c94ab7198f048ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "79cbc312307696b3d3817dc7a37bf856",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ef1dcb76b7db07ceb41c65a1ee7b724e",
".git/logs/refs/heads/master": "ef1dcb76b7db07ceb41c65a1ee7b724e",
".git/logs/refs/remotes/origin/master": "31b19131cb830adcda0dd6f882d1166d",
".git/objects/00/8ec5d13664dfd9fc7ee18a0be4f43eddaae0a1": "007e5fb3057a20014fe9c47f95e0e704",
".git/objects/01/1e4c32f3230931c750617394643c08ad863ddb": "ea752a49caa1fcf8a0cf82b628dc07db",
".git/objects/01/909baeac545b1733e4dc542c2f335742ec84f9": "5d575e583a8bad56a4a0c03c89d05f69",
".git/objects/01/b66b4a444aacb586b120d4c7b3ddea0d061e98": "fe590a9ae8bfb589f4b9309ae530beef",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/8ebcb0ac2a964794139a7a4f47d645c5b05b7e": "4494c8489e14b7ee74e2ec58a9fe04f5",
".git/objects/0b/b9ce9ccb11dccdf76de36c19afc43a9ed70616": "b376a85807804f88e34452e8db436f72",
".git/objects/11/92c69b01dd6243a2f8be49c3a74b8edd50fd79": "b2d06079d80d288b29fd6b5041a66829",
".git/objects/1d/bf5f096595318b74287555bed7ddd54f0bb9a7": "a955949a738efa601e67537d47b566b2",
".git/objects/1f/ab0ceeef8f7d77e9602a4041458cb2f1132828": "897767427b7b7079a088b82770c472d7",
".git/objects/20/57c4a87dcdd2f470532e328ed7797f3c7aaef5": "bada38fb3dc9151cda85690ede026c84",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/06e67b58865cc8155d4e99850bfcf0fb75d43b": "c973b890b69e093eba5d823d61764854",
".git/objects/22/28b9dd143ebcc8792c4390013ed618dc139976": "67731faa8a1598beec3798aca64f62bc",
".git/objects/23/71c13be01f732daefb5dcc7ca3cebd55dec81d": "fa5027d66f2783af7e925365eba7814b",
".git/objects/23/92b699b49968fbcbbd519d377ad56b7253e4ee": "d2b62af02974222a5229dc4fb6a7a790",
".git/objects/23/b8c8e44969a68b79f59e86d6663a3e6cb8df23": "971f8299181d357a6f5b95a9d0649822",
".git/objects/28/5402919484c0a87532a2c77900ee3d4f57bb3b": "7d8a8bdc3f654a7617f17b971c82e157",
".git/objects/2a/e7b7ad5313aaee3d0a0c646a9bcd21adde1e8b": "43f3ec0e251b6818800e82aa1a2a064e",
".git/objects/2b/da1d2cd0c1932af9bd53c669a9f4f131fab575": "d385ad483fc9ac37ccf43f4e973cb3f2",
".git/objects/2c/6f295753f1351391a6b05fc350760220f31774": "42f39fdbde628e63c9627361f73b5cec",
".git/objects/2e/8b50117aed70ea314d7bda70cefd73a352f7f9": "b3c85857e77ddeba1ae1fac621aec7e5",
".git/objects/2f/11a2130a19b8b9e0979a7d4f478387bca501c9": "be2ae12727769e33d94042c4b0b1c872",
".git/objects/2f/cd26d8281bf807e593908fe273a7a51039c549": "2725e0d25173506a7c2cc7958251f2d8",
".git/objects/30/f77d169958d4fab9bb710de19f56145197ad4a": "94f83fdf37770ad48e00ccdeecdc098d",
".git/objects/31/3a33d08924cad6c97e80fc73a2d11fb06aecb4": "42059df75eabfba1c58509acebf31a5e",
".git/objects/32/298be1dbb5b101f7711335856c914a051a3f60": "20ea2b5dc3b92fc0b95680a92d61e805",
".git/objects/32/fe32eb79634811ea73e81470976c583fffacf9": "d46066ec16214c4af3effe5ee1bb1011",
".git/objects/33/15c7ac51858e37c004938a6d2c302aa4fc71d3": "316c21cec3d3426625fe0f3fa89856b4",
".git/objects/33/832ddb0131cf93cede8de5069ff9f426a1410e": "c6d957f61add38bdd11bcfeb4e2f98ae",
".git/objects/33/931c80a7459da84597141d5bce87eed0ef3b4b": "df1b1a5dfc885e5dbd4ec2eabcddcf0e",
".git/objects/33/c9d4f87ec15d83b4997a17de0ac30626086262": "b1b947de52451299a0f46d3f94f7ec77",
".git/objects/36/1347aba438b20fb8e982e7ff72faa300d27bcb": "1f1fa90c7ff0c72d6f82b93b154927c5",
".git/objects/36/c4e1ca8a01dbb84056d2a6ca54f380558add09": "23aff91a77b39b366464db14055245c4",
".git/objects/38/e5dbac81a8cd89f44f68e37dbabfd401ddfe1b": "8a50c42925faefbe3832b5afd5526b5e",
".git/objects/3a/1b73348020ea82d22295217f8427e166c0ac95": "925211af1338eb4eb0f7ef0b842b3541",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/49/022e399eb3f72662790f222a2ca42560be992c": "98f00a812a875f5621612e7a08be1433",
".git/objects/4b/48de4ca63d06a6960ffe165631c6f551e3bed4": "7ad2ae65da01c084d4b5ef1f6e063065",
".git/objects/4d/11741d45418652121833b0a1614ee06800c78e": "9b8dabf677e9365d2eba30c5d36d7be9",
".git/objects/52/7ba9507c9778d2b632837825ce346a190632aa": "dba8cecd3a287c080ee3e1d528e551a0",
".git/objects/5e/f416ba8c515160ba6ab3758b3f71d3caea5ca9": "5c7f4f2313822ccacc3fe560fb9ae06d",
".git/objects/62/67518d0cf615f57f4295ba390d74e1f806f7c9": "befe783836007dd6ff9ceb115afe7fe1",
".git/objects/65/da654e7706645dc77139a365b37d85c66c6225": "76658945f310a89eefa179ca3e5e1202",
".git/objects/65/e18ddc717643618a6db35dd57024cf8557bd38": "66bddfdc8be75b3f22d9b044a217037c",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/67/5ba293145db4594ba4bfa475a136c6f866947d": "58c0a7593ce665ad30315e3711d0f84f",
".git/objects/67/cedc36d8ac648efc93b9316eb2e26a05c50855": "621c5d60d6d415762cb5046672b45c3e",
".git/objects/67/e800f42ff3dcbd5e53705809e744c934664854": "9d73e4476c4752523a687f70f461e5cd",
".git/objects/69/0b8f20a931cb3881aaba8cf7543bf1c3eb194d": "8538f743f2895ff29f2cefc7cb2e800b",
".git/objects/6a/59ba97dd7bc8f8a415a740a98084d3ef6c41c1": "704256ecca98337bcce83974cd9abf3a",
".git/objects/6c/b90380e1ccbc19ddd6863b94117ef156b0a6ad": "798145786d37577c001814326a69aabd",
".git/objects/6e/81ddab165cd22658082ab0c30e5c3fe293e279": "f3560ad2ca6630e2d49b881fcf2d8908",
".git/objects/6f/0aa8411a769578140caf4076ac7a727e91312c": "77ecb974cd9e14c1c83a6bf92c598f29",
".git/objects/6f/bc244a63f10a1bf6cd53d4127cdcb688e037e2": "5a96ea7c4bc2e190f7bef853b4ef19d3",
".git/objects/70/ea2705d70fcc6f9118c80759ae1f465aca0900": "c40011fee039dcae24dfa1a09009b804",
".git/objects/72/9689351996bf86153b5744db235c18a46f1929": "f7edfd50bf92891381dc7c52d875977b",
".git/objects/74/e463d32472140742eb9c6c49e56de4a579834c": "c8ea447d1596f0c282091803047c108a",
".git/objects/75/370f733f400cf800ea86a1982218920f83b1f8": "0a77c7e9487e759af8142c323f7837be",
".git/objects/75/39e2b630227ca9c231645d5ba86ac178d42494": "ff80582076320c8cbdd7e1d2fd005a4a",
".git/objects/76/42f5a1ddb02419de20fa55de0ad024c4b33947": "2b92f3c2b1e06e6431238c190f89dfcf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/6862f5d076b0859ffaff266968183c44b7ec0c": "0b3cc1f6f1b3b4aa4b725ae5a2b03c53",
".git/objects/7d/5bcb921eddf44420bce385da87f9434fafabee": "95653b732efd6c16cdb993c8b7a4c861",
".git/objects/7e/f530e52e938dde48367e0a8866b99da8693dce": "a87ff58927dcff19b2ecbda5fcc01fa3",
".git/objects/80/edb7a5823fe74d95b16e5f98229096b1f517cb": "dbd63713bc79199909d5daf5cef67cdd",
".git/objects/81/16c16b5eacd189b62f0b0707eabd16ad8566cf": "57996cb91cf3cb13c73398052132845c",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/7469c4f6393577a68ffd981260dceda85b43a6": "af5897a48d3a34c106bb35e4304d699d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f3320a4a7893e2cb4a17b80583fe38acccff66": "bde4c60b4476de49499309efd968a593",
".git/objects/8c/474afdb21320f87ae5aa61dfb18e8d5fda083c": "44cd24137a84f372d6acd9f09af3ef8e",
".git/objects/8d/5536bdb38d7b53c3bb15886ca629f649a74524": "8d4233c4bcc582ce87467a1c2c434ec2",
".git/objects/8d/8d82f84d5bb79fea15c4b127e39b087dc406c9": "2b6c1994cfe1089a9ca1430f502ed482",
".git/objects/8e/e237e32f69491adc260426c0bef2f91d882438": "7dfc985ee6df00f4938d1c1da7786b4d",
".git/objects/90/11e84c1a451ec3b57e1a8c8cf8bae8fffc472b": "73c51be853410e154309a83451571feb",
".git/objects/90/3372c4925d071a43f5a7848c6f407e33249b83": "c1771f11c6751ade42730d92fe0ec2b8",
".git/objects/90/4870d39fd791f63fd5169080270ae28e28ee9e": "f230b52d6a351998b315404ff4abc239",
".git/objects/95/4e327aaaf5aba20ba2aaa1d03e096c8f78759a": "a7ccb7e9cf16a7d0ba86cd169f2e1f12",
".git/objects/9d/3e38e34b291108211b9c336fea454a8b016d15": "a764b34a60c853474aa7dd4291faaded",
".git/objects/9e/5a1868bfd16e5a8604e45a364d427fec2b58f5": "3bc0cecc3e769545f5ebd7b0c6249fd3",
".git/objects/9e/9fc7d9312608f3bdabb9f230b2c0e212afcd45": "1f9d1eaaa1cac25ff08c51b57d340c93",
".git/objects/9f/3dbf603cf626f5f74b389889e471b01d56cf4b": "5b5baaa41aacd4ad341219123cf4572e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/15d687b662d4a105fc116492d0a3add6435cfb": "465e04e6ca52ae0238c420f575f27413",
".git/objects/a2/8c22ba59214880dbbec5adc5c0676e7d7bdb9e": "cb8cf55295794bac264b904d94098955",
".git/objects/a3/9626a29bad2cf13be2470277b6f7816f98b451": "910feea4788a468db18d88926840fda1",
".git/objects/a5/fc1c9bf2280415b728419035c2be0a867d784d": "800da8631c787049d691820932686d40",
".git/objects/a7/21f732791729265de740ad362a6600e764a4c2": "e233ce02c6b753f270d6419112386c2a",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/61b44d2b3f4a35b16ec26723bff0e4b3139f69": "2a423598d83b947d5594fd6b123b38f9",
".git/objects/ae/ef98f6d0161b99a38458c61015434a74c0a806": "1ad1c765b3ba077732def5740629bef1",
".git/objects/af/8db04680c552e455b73ed93d7ca6d1080e0c80": "b5076c4f0fc7a9c7fb66f66c4afb31cc",
".git/objects/b0/3a5f982292df0bbc54bdf6b69a0c3e11ec4215": "823fd30d2f4e292d89c64cee01fa98a0",
".git/objects/b0/a68f925efe94c465435aae00ea058480e1449e": "3c93b9e7f20e8ccd0da7e3cddd6f7584",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ef2c07e3f9a3cf976340e53615f616d457f354": "64ee52a477025b33ffe4d0c8c1ae6492",
".git/objects/ba/70071c547d93b81f3f4a2bd79cd689f58c407a": "ee79738e886aec2bbb7a6d8010e51fa0",
".git/objects/ba/fafe4ceea138f0f4f9825675444164973f9d73": "df15d63d240f9ef850e303f92c3e974a",
".git/objects/bb/176db91d4e437e3fb9bbe585beae652d1f562f": "adae1ef81f1b7dbf44dc70232934147d",
".git/objects/bd/1f2c43f107a8adcd54b44f45e1830a293c2d7c": "d9a3eb04fe674278a2b5cd48e791d2b6",
".git/objects/bd/4d8bf5afd573835c33d62df1646514409d1763": "e045c92703cb747eaa3cb16fa8ddec53",
".git/objects/c0/5929ddb7d5495920576e1ee9560b99a97822dd": "0dda8e5563aa2527766ec927e459527f",
".git/objects/c3/4a9b69516c990f63e1ba4165ba66d008225d87": "9183ce51c18b9ad7734c83518689d790",
".git/objects/c4/0a4619075d7d363b830ef99ef197462e4df209": "9b801ebd696d2cb7aa7ae3d8668073a8",
".git/objects/c5/57299c5fc64ac6f496063e4eb5e251c0f83b03": "718eccb1342510fd9c165e6f75684c8f",
".git/objects/c5/fbc7d8274c9f118abb07ac62db119dbe1959d7": "ce12d6175e4037e3ef11c9da92763c87",
".git/objects/c6/3be9bbf5e5619a17e626823fad78e669dec63d": "552ba3a59dff3f07fca365617bae2f83",
".git/objects/c6/f0fb0e86536c4eedbdeea4c0d3efdc0b9133a8": "7e60ef32298e7b7fff15c997e709b432",
".git/objects/c8/0308cf6375ad1650aa44b68a15e2f844544074": "7c3315c9c31bfae252bb3856e54f5e7b",
".git/objects/c8/fc425e73056313fb898906951aac104edd1b53": "89f71911583eafd4d6c3afdc4492b74f",
".git/objects/c9/7e213ab01e6fbb785d61a31c7b93ec0d5a0ec1": "a7d1291cd4590da144b7a149aaf6bfb8",
".git/objects/d1/6deec836fc7a44ada4acb498daa1a6d8bb1f56": "eec3200183463bcd620cdf8e66ea5c52",
".git/objects/d4/883cb77ca03f2b3af66de6a565a90266301279": "2005aa58922442a02d91e287edc4c4e1",
".git/objects/d4/fe0d9d4cec359afbe403c74332adb852b1d43e": "7262df30c41856ca6675c73f99e3357c",
".git/objects/d5/458d338ec283b0246c5559a0bc0c3e96985c0b": "5e38c6481826e898d040dcb534649e60",
".git/objects/d7/07a6da2d30bb1b134ccd77eeb6300e97094e86": "df6046d0a265595706d269a095644161",
".git/objects/d7/eb593c219e5d7574f0f3563c0913730fbf5d4f": "12145997fd037e20083db9574a620651",
".git/objects/d8/e6dd49d59e2299eaa472514f741fe75581e759": "c93bfa13c1f7c58829846bf8aa8471f9",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/db/cffe0415afff86c7a53364745b285d111bb2ff": "8e8a4b671495a9313b2f2e017210f7a9",
".git/objects/e1/724c89a9e09b192826fc35db357d55e155d448": "e293c714b4b9e0c2c62e50ad95e8e032",
".git/objects/e4/3bad533fbab84dc772b7d6ab876ac62bc5f52d": "4406193c722c17338dbb45b582666e30",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/c66aaa190f7f00fec201ee7d8262fffe08155f": "81e9700873c97f441ccda40f5c3c6f10",
".git/objects/e7/bcf145e3d83f0c889cc17bd7c568f0fa7172b5": "19807489e749053a66bc6483b0d351be",
".git/objects/e8/1eb0bac33ab43d16e1930ed324a3193a300978": "6831dae688e7f9a067474691b36ee6c0",
".git/objects/e9/acb2e055e4cf2f958fb9b010c91dbc12fd51c6": "c273ce1c5482a329f21764b3b6893908",
".git/objects/e9/eaaf09d4cbfe4456977eeb21dd2bf257da07bc": "82bf7a5956d641145031548161583a0e",
".git/objects/ea/720108ffa9fdea60d31646b406ab2f6f430cbb": "07b9d7e7e425e0292cd48bc7dc652d26",
".git/objects/ec/9a2b4fc029aec8719b863b54aab1dc0603f271": "a35ec7855d1dc5231778fa8180be6821",
".git/objects/f1/b0b97ac077795d16dee3a08b922a7cf1bb01be": "f8a57570493e968281f664fb81a46742",
".git/objects/f2/12e62f41a17e25153a532a99bad60684dfed9a": "167500e4ef703851a3e92382ad5bc5e8",
".git/objects/f2/1f5221a1bcf53b4f2feda38ad1efbe44889d2a": "63581dfb699e1cb6ec89790cdb9a9321",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/7326dcefd594652a411f78554a5db0192cfa0a": "4e6c1eb721ed75b538fda6742ea07795",
".git/objects/fb/0d002a5f5f6b2783ba27c796a361d1ee15148a": "1454f1f8cad40d183efb739c67503464",
".git/objects/fe/ab9683af1d414362d1c8d8e39d67f8ad5006f8": "ef30b0e5c9d40686c1d39615bb3f6f0d",
".git/refs/heads/master": "8cf98aac7e43a6d7a6a1d14f9c61b871",
".git/refs/remotes/origin/master": "8cf98aac7e43a6d7a6a1d14f9c61b871",
"assets/AssetManifest.json": "8e5014ac0458e10e2d0cc49956269c3d",
"assets/assets/bozenik.png": "535e6328dd1e2d110469b6bdcef2712f",
"assets/assets/csharplogo.png": "e8460f0d8b9df01e9460bfd1ade0e8c8",
"assets/assets/cv.pdf": "2a7b95bed58eabf7e0042117a1ff8b80",
"assets/assets/CVpublic.pdf": "36db0cfe678b5e432eceb58bbe2edc29",
"assets/assets/dartlogo.png": "d0bd88197ab839d6c7321291d667c9cd",
"assets/assets/disneybackground.png": "14fadd993578b9916f855cebafb71e62",
"assets/assets/disneybackgroundt.png": "55bdae95e0d8c31b44b9f03899b9a853",
"assets/assets/flutterlogo.png": "812b78fbb32267d61aa08fa4b3753b84",
"assets/assets/ironman.jpg": "6bef823f785c0144e6433820c66545e2",
"assets/assets/ironman2.jpg": "3d5b87378a7cbe4f58efd8c177aacfe8",
"assets/assets/ironman3.jpg": "4753ce01806b04952e7d014eac7d8417",
"assets/assets/lacasa.jpg": "05a0e67e520b16593972ce1bd15b21c8",
"assets/assets/lyceumvos.jpg": "7265699b6573e52512e8d75a91fabcc2",
"assets/assets/myoctopusteacher.jpeg": "581cadec39756cfe3cc40cf716f80091",
"assets/assets/netflixlogolang.png": "73a72898a5265702b913ff227b8a0204",
"assets/assets/profielfoto.png": "42d58210aa307416d33f99d48f899ef8",
"assets/assets/pythonlogo.png": "dc199ecc9e90e4bc7e9ed9b31e3c2b5f",
"assets/assets/seaspiracy.jpg": "41c07b2309bbd0f91c39116b38da22d1",
"assets/assets/strangerthings.jpg": "eee60b868b009ef159d96cf78a988771",
"assets/assets/wijnhaven.png": "0626f7aecdf6ba33a37a1499a8f2bed0",
"assets/FontManifest.json": "dc1df1acbfc892f525ece41ca35db556",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/waltograph.ttf": "8376e936fde943e3c0d5ca2ef30b497d",
"assets/NOTICES": "b89f52f33e644a545049f4e72c8c1c7a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a478e72c44aa895398a03aaab8071bba",
"/": "a478e72c44aa895398a03aaab8071bba",
"main.dart.js": "c06fe8d4d98c172033446e98a76103ae",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
