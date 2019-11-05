importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
if (workbox) {

    // top-level routes we want to precache
    workbox.precaching.precacheAndRoute(['/', '/login', '/profile']);

    // injected assets by Workbox CLI
    workbox.precaching.precacheAndRoute([
  {
    "url": "css/app.css",
    "revision": "8331ecbb424f1323a590719c1ccc2ea9"
  },
  {
    "url": "css/circle.css",
    "revision": "9ba549201e3908b15f05d04884e43ed0"
  },
  {
    "url": "favicon.ico",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "fontawesome/css/all.css",
    "revision": "4cd5b86baba794f3e4f6e54b501f0b6e"
  },
  {
    "url": "fontawesome/css/all.min.css",
    "revision": "164a58dcca37a5b00c22e06ee8e2fc68"
  },
  {
    "url": "fontawesome/css/brands.css",
    "revision": "28ab16676debf5194d4a168ab7305611"
  },
  {
    "url": "fontawesome/css/brands.min.css",
    "revision": "27c105d6b1d79b59f9c59e0916d5251b"
  },
  {
    "url": "fontawesome/css/fontawesome.css",
    "revision": "f9696932582e4061778f0035eb8e8831"
  },
  {
    "url": "fontawesome/css/fontawesome.min.css",
    "revision": "df3b5091bcf015feb9f8dab2a8579ca9"
  },
  {
    "url": "fontawesome/css/regular.css",
    "revision": "2e526933cb77bfeab639228211e7887f"
  },
  {
    "url": "fontawesome/css/regular.min.css",
    "revision": "6b92c90246f17fbba6faf5d94e1f2aa9"
  },
  {
    "url": "fontawesome/css/solid.css",
    "revision": "d0a3f0ba3fe0c06e5471385f36ed244d"
  },
  {
    "url": "fontawesome/css/solid.min.css",
    "revision": "685230fe920360c8d423498ebe891455"
  },
  {
    "url": "fontawesome/css/svg-with-js.css",
    "revision": "ed43a369a56fecb6131bbebfc9f688f3"
  },
  {
    "url": "fontawesome/css/svg-with-js.min.css",
    "revision": "3b4cea40c72e186dd5fdea6e99195b88"
  },
  {
    "url": "fontawesome/css/v4-shims.css",
    "revision": "9062d26cf93b0264514b75c482f5b52d"
  },
  {
    "url": "fontawesome/css/v4-shims.min.css",
    "revision": "e0fe4a6191bf975ee1a105ea1cb4c41e"
  },
  {
    "url": "fontawesome/js/all.js",
    "revision": "f38c5190acb9d059c634356af7c80f4b"
  },
  {
    "url": "fontawesome/js/all.min.js",
    "revision": "5563cc970fa560d628cedd0ebbd47153"
  },
  {
    "url": "fontawesome/js/brands.js",
    "revision": "e6a43acdc75078e98f681abdbaa53a65"
  },
  {
    "url": "fontawesome/js/brands.min.js",
    "revision": "8755cdbe218a65a17e6a3cbe517545d3"
  },
  {
    "url": "fontawesome/js/conflict-detection.js",
    "revision": "fe424f6c0c670aed9af90a4c6125e5f7"
  },
  {
    "url": "fontawesome/js/conflict-detection.min.js",
    "revision": "e97e700b8bf08b2a5e12d591d5228263"
  },
  {
    "url": "fontawesome/js/fontawesome.js",
    "revision": "7f82df98b9fd7f44a8765946a0dd46d7"
  },
  {
    "url": "fontawesome/js/fontawesome.min.js",
    "revision": "617f7beea5b8e6b3fe3ab94e1f0b4a3b"
  },
  {
    "url": "fontawesome/js/regular.js",
    "revision": "c15b42bdcfb55e5e4e4191982518a265"
  },
  {
    "url": "fontawesome/js/regular.min.js",
    "revision": "a255ab15ced6ff938700dad67fe7d4a2"
  },
  {
    "url": "fontawesome/js/solid.js",
    "revision": "ee3dc2c59829e2f9469b3e632e9a0910"
  },
  {
    "url": "fontawesome/js/solid.min.js",
    "revision": "bed6930f7884e437f66310337b830030"
  },
  {
    "url": "fontawesome/js/v4-shims.js",
    "revision": "be504fc81a248c0e281d6a6b0f3e4c1c"
  },
  {
    "url": "fontawesome/js/v4-shims.min.js",
    "revision": "1447d228cbb72c451f058b83594f6c71"
  },
  {
    "url": "fontawesome/metadata/shims.json",
    "revision": "d30314bd45ab4710f0aa3c972adc2cbd"
  },
  {
    "url": "fontawesome/sprites/brands.svg",
    "revision": "539f7a51e2dae6e9db7da3758cf42e56"
  },
  {
    "url": "fontawesome/sprites/regular.svg",
    "revision": "dd2fb4021fc1a1ffb24678d7fa2763a6"
  },
  {
    "url": "fontawesome/sprites/solid.svg",
    "revision": "fbce60ad2be6b8df67f2b13be96c6365"
  },
  {
    "url": "fontawesome/svgs/brands/500px.svg",
    "revision": "e3046539308ff5570e6f10ac678da7d1"
  },
  {
    "url": "fontawesome/svgs/brands/accessible-icon.svg",
    "revision": "76b090bb64162cea3149923ec7d2f8bf"
  },
  {
    "url": "fontawesome/svgs/brands/accusoft.svg",
    "revision": "4380fd25b926702b304ab5d7abf7565a"
  },
  {
    "url": "fontawesome/svgs/brands/acquisitions-incorporated.svg",
    "revision": "9ce1a633fd8f6377da28d5a9ba2bd225"
  },
  {
    "url": "fontawesome/svgs/brands/adn.svg",
    "revision": "20928b4832af71f2eb64a3f96e43de16"
  },
  {
    "url": "fontawesome/svgs/brands/adobe.svg",
    "revision": "2d1ced52f528925f963e8d2ae861d8ef"
  },
  {
    "url": "fontawesome/svgs/brands/adversal.svg",
    "revision": "2472f670cd25005e1f5fe4b68b75ca32"
  },
  {
    "url": "fontawesome/svgs/brands/affiliatetheme.svg",
    "revision": "c8011c9d6106127752382718e2351b73"
  },
  {
    "url": "fontawesome/svgs/brands/airbnb.svg",
    "revision": "6f94803094a0d1e0840662da5570dc27"
  },
  {
    "url": "fontawesome/svgs/brands/algolia.svg",
    "revision": "c2cfae70ae4b81718842ccf0bb8410aa"
  },
  {
    "url": "fontawesome/svgs/brands/alipay.svg",
    "revision": "55914764c9f35c3139ac8d35dbdc581b"
  },
  {
    "url": "fontawesome/svgs/brands/amazon-pay.svg",
    "revision": "a04568abc841180e592217b765d9954f"
  },
  {
    "url": "fontawesome/svgs/brands/amazon.svg",
    "revision": "6c2684b8e214f348cca8e138abfd0e30"
  },
  {
    "url": "fontawesome/svgs/brands/amilia.svg",
    "revision": "8e9424bc40ede0a95eabbdd2da2b0912"
  },
  {
    "url": "fontawesome/svgs/brands/android.svg",
    "revision": "e6b74b41ad25b1bc5e6b5a921666fc6f"
  },
  {
    "url": "fontawesome/svgs/brands/angellist.svg",
    "revision": "280dd5482a6a823fbcc4a0b359626116"
  },
  {
    "url": "fontawesome/svgs/brands/angrycreative.svg",
    "revision": "f3048fd40653c1795811eba66085356d"
  },
  {
    "url": "fontawesome/svgs/brands/angular.svg",
    "revision": "f4dd711a0da5b8b2852e11951cbfa724"
  },
  {
    "url": "fontawesome/svgs/brands/app-store-ios.svg",
    "revision": "123627b9ebed24da3d4f8c4753bf4e24"
  },
  {
    "url": "fontawesome/svgs/brands/app-store.svg",
    "revision": "9166dbf22dc014f9aca99ee650a26d69"
  },
  {
    "url": "fontawesome/svgs/brands/apper.svg",
    "revision": "5bf605f8a792ea6659973f07802e7b01"
  },
  {
    "url": "fontawesome/svgs/brands/apple-pay.svg",
    "revision": "0bacebcaf24f8cccf78f2704311b7754"
  },
  {
    "url": "fontawesome/svgs/brands/apple.svg",
    "revision": "579645cb7c2ce23b4c144f46576a2f6b"
  },
  {
    "url": "fontawesome/svgs/brands/artstation.svg",
    "revision": "526e4d0c5b0a92a2fdab4ff27f09f492"
  },
  {
    "url": "fontawesome/svgs/brands/asymmetrik.svg",
    "revision": "3d7809f1ee8275948561576ec419cf0b"
  },
  {
    "url": "fontawesome/svgs/brands/atlassian.svg",
    "revision": "c10373bed78596deac183607b5b4e50f"
  },
  {
    "url": "fontawesome/svgs/brands/audible.svg",
    "revision": "9a6a39efd881c3cfb267fe06b84ecd61"
  },
  {
    "url": "fontawesome/svgs/brands/autoprefixer.svg",
    "revision": "40d926c4082e58aef7228ef254db9086"
  },
  {
    "url": "fontawesome/svgs/brands/avianex.svg",
    "revision": "f9bed15d3dc59ddba2e5aa1407f4acd4"
  },
  {
    "url": "fontawesome/svgs/brands/aviato.svg",
    "revision": "0cc0ca1492c8bdf4d35c59fdd27b8de0"
  },
  {
    "url": "fontawesome/svgs/brands/aws.svg",
    "revision": "8d3a04e93102181dd76ec75664e9cd81"
  },
  {
    "url": "fontawesome/svgs/brands/bandcamp.svg",
    "revision": "da272e9cb22773239a41ee2d3f096d01"
  },
  {
    "url": "fontawesome/svgs/brands/battle-net.svg",
    "revision": "29e4f7e1685027f167b2653f314aa91d"
  },
  {
    "url": "fontawesome/svgs/brands/behance-square.svg",
    "revision": "4048a26ed89d5e42ab1195d2716781cb"
  },
  {
    "url": "fontawesome/svgs/brands/behance.svg",
    "revision": "4719097efce2d3bae24a51eac4bccbe6"
  },
  {
    "url": "fontawesome/svgs/brands/bimobject.svg",
    "revision": "86e067d5b0fd1ff935a5a488d790dcda"
  },
  {
    "url": "fontawesome/svgs/brands/bitbucket.svg",
    "revision": "41cd698fec972808c5cdfb4f0fa89e0c"
  },
  {
    "url": "fontawesome/svgs/brands/bitcoin.svg",
    "revision": "5acf0f739fa974af2b4a00279066ca97"
  },
  {
    "url": "fontawesome/svgs/brands/bity.svg",
    "revision": "6697da2a691d7e39264102bd919ed3f4"
  },
  {
    "url": "fontawesome/svgs/brands/black-tie.svg",
    "revision": "eb0acbbdf7483092ae322e8da8767099"
  },
  {
    "url": "fontawesome/svgs/brands/blackberry.svg",
    "revision": "85f7caf7ebaaabb1d50ea07bafd7592a"
  },
  {
    "url": "fontawesome/svgs/brands/blogger-b.svg",
    "revision": "262699c46f792b60ddb9b4a6a8684975"
  },
  {
    "url": "fontawesome/svgs/brands/blogger.svg",
    "revision": "6e32e2c346a54fa6d6bdefc0e3922e5c"
  },
  {
    "url": "fontawesome/svgs/brands/bluetooth-b.svg",
    "revision": "0f2a457ab20d40eab6cf12c61858671d"
  },
  {
    "url": "fontawesome/svgs/brands/bluetooth.svg",
    "revision": "7a8e91ad22aec02193f7042452417ac5"
  },
  {
    "url": "fontawesome/svgs/brands/bootstrap.svg",
    "revision": "37b1d2952c5f6e3e645da86a676d341b"
  },
  {
    "url": "fontawesome/svgs/brands/btc.svg",
    "revision": "630fff1788f05a122659ec0d8403da05"
  },
  {
    "url": "fontawesome/svgs/brands/buffer.svg",
    "revision": "6d059dbd973fdd60f2396f8748218582"
  },
  {
    "url": "fontawesome/svgs/brands/buromobelexperte.svg",
    "revision": "0ee97c20b4589038082ac00dfd54fab7"
  },
  {
    "url": "fontawesome/svgs/brands/buysellads.svg",
    "revision": "19566df8532f8f3354caccb811cc039b"
  },
  {
    "url": "fontawesome/svgs/brands/canadian-maple-leaf.svg",
    "revision": "319d83c178cec5a9328bfa39a5c7d2b7"
  },
  {
    "url": "fontawesome/svgs/brands/cc-amazon-pay.svg",
    "revision": "292957141876735e39d926d311facd43"
  },
  {
    "url": "fontawesome/svgs/brands/cc-amex.svg",
    "revision": "9f26e9053af370c85a35dbf83d5f0ebf"
  },
  {
    "url": "fontawesome/svgs/brands/cc-apple-pay.svg",
    "revision": "d19e20a5e6e70c5c497dcdf5b50633d8"
  },
  {
    "url": "fontawesome/svgs/brands/cc-diners-club.svg",
    "revision": "1f9f04904b2c669569e6c989de296a9d"
  },
  {
    "url": "fontawesome/svgs/brands/cc-discover.svg",
    "revision": "cfbf43338d112ee0e681014e39b6c465"
  },
  {
    "url": "fontawesome/svgs/brands/cc-jcb.svg",
    "revision": "579a4adbc54a8290ffe010272a465e57"
  },
  {
    "url": "fontawesome/svgs/brands/cc-mastercard.svg",
    "revision": "73bb0b54749adbf9ae2789e2a30cb5ae"
  },
  {
    "url": "fontawesome/svgs/brands/cc-paypal.svg",
    "revision": "607f2030fc5cb5aeb89342a16652a08e"
  },
  {
    "url": "fontawesome/svgs/brands/cc-stripe.svg",
    "revision": "16774769459fe9ef3cd11bd49a534d94"
  },
  {
    "url": "fontawesome/svgs/brands/cc-visa.svg",
    "revision": "f5dcfb25126be04020a4f16911eb6c9e"
  },
  {
    "url": "fontawesome/svgs/brands/centercode.svg",
    "revision": "8a7a169e98deb370cf57cb7d3a1490ea"
  },
  {
    "url": "fontawesome/svgs/brands/centos.svg",
    "revision": "2bf7ac7e471b25a09a0d9c7484a3aab0"
  },
  {
    "url": "fontawesome/svgs/brands/chrome.svg",
    "revision": "18f7454378ae2802384b5df08e8a1538"
  },
  {
    "url": "fontawesome/svgs/brands/chromecast.svg",
    "revision": "43c9d2a6b3228f3a90cc747411820b52"
  },
  {
    "url": "fontawesome/svgs/brands/cloudscale.svg",
    "revision": "da76927674b17a9b8c7c30e90643a36d"
  },
  {
    "url": "fontawesome/svgs/brands/cloudsmith.svg",
    "revision": "0924c63cd80ede3379541dca9d46dd73"
  },
  {
    "url": "fontawesome/svgs/brands/cloudversify.svg",
    "revision": "bd017926ca17d873516f1cf120651eec"
  },
  {
    "url": "fontawesome/svgs/brands/codepen.svg",
    "revision": "2164c928f9f3c154430ef6024b2293a1"
  },
  {
    "url": "fontawesome/svgs/brands/codiepie.svg",
    "revision": "e9f11ca243bb1ef71442f66f4ab5b278"
  },
  {
    "url": "fontawesome/svgs/brands/confluence.svg",
    "revision": "e18ee343b19b8320333828490658124d"
  },
  {
    "url": "fontawesome/svgs/brands/connectdevelop.svg",
    "revision": "0a481057828a3e7f38478e1293476477"
  },
  {
    "url": "fontawesome/svgs/brands/contao.svg",
    "revision": "78a02f89a7e31dfe020d58b090fa8943"
  },
  {
    "url": "fontawesome/svgs/brands/cotton-bureau.svg",
    "revision": "a3496d895ab6a79f06e9a8e12cf37744"
  },
  {
    "url": "fontawesome/svgs/brands/cpanel.svg",
    "revision": "9d951c2538b1d23ff9796e7c98a16dbc"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-by.svg",
    "revision": "30a79c3728c863b34079486d64845d0a"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-nc-eu.svg",
    "revision": "e1cc58f1588922a300740f374ac422fa"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-nc-jp.svg",
    "revision": "96a0dd49bc60daafe5dc908af445e1ad"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-nc.svg",
    "revision": "bfd94f9476dd1b3827fad815633c39ae"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-nd.svg",
    "revision": "85d15b729f25ceb6258c7a1a2abd719e"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-pd-alt.svg",
    "revision": "fe289298d1c82ca0e2cf5e03e4cbd2f4"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-pd.svg",
    "revision": "5ca6410c04174b2574f23a76432039cf"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-remix.svg",
    "revision": "bf883d91b19a05b4222f064ae85498b9"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-sa.svg",
    "revision": "a4620d81e2cd3698bb7db29793c3c65b"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-sampling-plus.svg",
    "revision": "80e20687faed819d0100a0fcdcb905e3"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-sampling.svg",
    "revision": "5d139c0c752b379feecdbd798b495546"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-share.svg",
    "revision": "2225a1b58db43455f2451b7c10a54ba4"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons-zero.svg",
    "revision": "e34d0d9bb2134fe766b248b917671a8a"
  },
  {
    "url": "fontawesome/svgs/brands/creative-commons.svg",
    "revision": "c62130bb0ad653b52eff575c58fda70c"
  },
  {
    "url": "fontawesome/svgs/brands/critical-role.svg",
    "revision": "94fad123c71d9cafd635a99d79e1c012"
  },
  {
    "url": "fontawesome/svgs/brands/css3-alt.svg",
    "revision": "ac2bf97ccee7294e553dcd4beed0e6a1"
  },
  {
    "url": "fontawesome/svgs/brands/css3.svg",
    "revision": "0f6fcba76a741cc7cbc65721c432a46a"
  },
  {
    "url": "fontawesome/svgs/brands/cuttlefish.svg",
    "revision": "f5b916ae94797b1731223b4cb7c785fb"
  },
  {
    "url": "fontawesome/svgs/brands/d-and-d-beyond.svg",
    "revision": "375f649e924e3859229baa78e49d5b3b"
  },
  {
    "url": "fontawesome/svgs/brands/d-and-d.svg",
    "revision": "50c866e3768475f369b7ec80efb0e5a1"
  },
  {
    "url": "fontawesome/svgs/brands/dashcube.svg",
    "revision": "4bf3d937d403d837180724481f4a5668"
  },
  {
    "url": "fontawesome/svgs/brands/delicious.svg",
    "revision": "5271d07199fd110559143477aa4a68de"
  },
  {
    "url": "fontawesome/svgs/brands/deploydog.svg",
    "revision": "cb3b9ba19ae3725622213cb8ae00af0a"
  },
  {
    "url": "fontawesome/svgs/brands/deskpro.svg",
    "revision": "73aa2b9bd436dec86be42133a14cfb97"
  },
  {
    "url": "fontawesome/svgs/brands/dev.svg",
    "revision": "e565e0b8ee0398059a72f28f3587e23c"
  },
  {
    "url": "fontawesome/svgs/brands/deviantart.svg",
    "revision": "85b3737bdd51a51da54c296c1d02a412"
  },
  {
    "url": "fontawesome/svgs/brands/dhl.svg",
    "revision": "c77f9fdc9bcfd793132a870f60b45a1e"
  },
  {
    "url": "fontawesome/svgs/brands/diaspora.svg",
    "revision": "8d5629c9f6bc25f53198e8e3c5278a98"
  },
  {
    "url": "fontawesome/svgs/brands/digg.svg",
    "revision": "69fdfe89c41eab79f95a18485fe1857d"
  },
  {
    "url": "fontawesome/svgs/brands/digital-ocean.svg",
    "revision": "52717ce3ca4ca16b681ad0e3f3ca47bb"
  },
  {
    "url": "fontawesome/svgs/brands/discord.svg",
    "revision": "533b6d9160dda37719bba1f6c75c09b5"
  },
  {
    "url": "fontawesome/svgs/brands/discourse.svg",
    "revision": "6efb74b8b07174a1d5d4490c6e980e22"
  },
  {
    "url": "fontawesome/svgs/brands/dochub.svg",
    "revision": "b09f053a42c92c9e73d7c6de13821e35"
  },
  {
    "url": "fontawesome/svgs/brands/docker.svg",
    "revision": "00bf46cee737034a74ce2526cbefa345"
  },
  {
    "url": "fontawesome/svgs/brands/draft2digital.svg",
    "revision": "d44e8cb3dc0a04b8f90a4df034e9051d"
  },
  {
    "url": "fontawesome/svgs/brands/dribbble-square.svg",
    "revision": "ba0d05305be2a919c3550c4657862225"
  },
  {
    "url": "fontawesome/svgs/brands/dribbble.svg",
    "revision": "686dc64d90ba5a1d64a215d7a082dc57"
  },
  {
    "url": "fontawesome/svgs/brands/dropbox.svg",
    "revision": "4fa78cea897e5b86b62dd1e9dce4cb00"
  },
  {
    "url": "fontawesome/svgs/brands/drupal.svg",
    "revision": "a9076afca769a6bdd992b8e41ca75adc"
  },
  {
    "url": "fontawesome/svgs/brands/dyalog.svg",
    "revision": "640f378705cecfaef2f34788f18bbb45"
  },
  {
    "url": "fontawesome/svgs/brands/earlybirds.svg",
    "revision": "0fe214e332e963c59c5c116a3f993d65"
  },
  {
    "url": "fontawesome/svgs/brands/ebay.svg",
    "revision": "220d54e325cae3b506aabcfa0cf54a48"
  },
  {
    "url": "fontawesome/svgs/brands/edge.svg",
    "revision": "a5b1304a069416a79c9fb6e1efedd7f4"
  },
  {
    "url": "fontawesome/svgs/brands/elementor.svg",
    "revision": "d4d9ffc17352ca6e69f95837fba3f576"
  },
  {
    "url": "fontawesome/svgs/brands/ello.svg",
    "revision": "f1833a5a0aeca9bbc26c60ece1cffd9d"
  },
  {
    "url": "fontawesome/svgs/brands/ember.svg",
    "revision": "b56790ca59bfcfbfdde2a1cc13bec3d1"
  },
  {
    "url": "fontawesome/svgs/brands/empire.svg",
    "revision": "c6b4ebcf786b4f71e96c21f7c5f082e8"
  },
  {
    "url": "fontawesome/svgs/brands/envira.svg",
    "revision": "79d08533a02bc0484861b42531de6367"
  },
  {
    "url": "fontawesome/svgs/brands/erlang.svg",
    "revision": "8d7d22120947822bbd20004b7b49bdd5"
  },
  {
    "url": "fontawesome/svgs/brands/ethereum.svg",
    "revision": "8f78322a240fafec3bca2e940efc0827"
  },
  {
    "url": "fontawesome/svgs/brands/etsy.svg",
    "revision": "4330ef0c48f3d969d50a6a9999a55dde"
  },
  {
    "url": "fontawesome/svgs/brands/evernote.svg",
    "revision": "5ee907632d499b92560f5fb7b7f455f5"
  },
  {
    "url": "fontawesome/svgs/brands/expeditedssl.svg",
    "revision": "eae6313c09f8e24bc1354a216cad6703"
  },
  {
    "url": "fontawesome/svgs/brands/facebook-f.svg",
    "revision": "5df289e09c0f6bafdaed7f7d9910bb40"
  },
  {
    "url": "fontawesome/svgs/brands/facebook-messenger.svg",
    "revision": "c806635a9557e59a89cb1090f6792ae3"
  },
  {
    "url": "fontawesome/svgs/brands/facebook-square.svg",
    "revision": "cfdb2f96834f2a93420144df576db32d"
  },
  {
    "url": "fontawesome/svgs/brands/facebook.svg",
    "revision": "8c856a6a3ab70f90d3f1c2f92c2342fa"
  },
  {
    "url": "fontawesome/svgs/brands/fantasy-flight-games.svg",
    "revision": "0e359b25fce5da970948cd672104c44c"
  },
  {
    "url": "fontawesome/svgs/brands/fedex.svg",
    "revision": "6666d825529e562f84318b2daa4b8cfc"
  },
  {
    "url": "fontawesome/svgs/brands/fedora.svg",
    "revision": "642e1cd5afec689a3142d9179d369082"
  },
  {
    "url": "fontawesome/svgs/brands/figma.svg",
    "revision": "b8a7a56c37247e59e7f3322366dc50a4"
  },
  {
    "url": "fontawesome/svgs/brands/firefox.svg",
    "revision": "8a79344dac900a0a4db86482bebddf0e"
  },
  {
    "url": "fontawesome/svgs/brands/first-order-alt.svg",
    "revision": "7373bf1f29e990e77fd516ea51bb8428"
  },
  {
    "url": "fontawesome/svgs/brands/first-order.svg",
    "revision": "84978899d515e369b20f57c77ecc8ae3"
  },
  {
    "url": "fontawesome/svgs/brands/firstdraft.svg",
    "revision": "367b04155f52f90a62c3f36d603b5d75"
  },
  {
    "url": "fontawesome/svgs/brands/flickr.svg",
    "revision": "991cdbdd6b900302b2d4f77c7888775c"
  },
  {
    "url": "fontawesome/svgs/brands/flipboard.svg",
    "revision": "51ebf72bc0c5e2ddf20c196126033cc8"
  },
  {
    "url": "fontawesome/svgs/brands/fly.svg",
    "revision": "c98bff236b244d75416102b7b7d6215c"
  },
  {
    "url": "fontawesome/svgs/brands/font-awesome-alt.svg",
    "revision": "1ebe32d98d6da3f675e25779cb852c64"
  },
  {
    "url": "fontawesome/svgs/brands/font-awesome-flag.svg",
    "revision": "0d74473c79fdfc80c685d482805e9a2c"
  },
  {
    "url": "fontawesome/svgs/brands/font-awesome-logo-full.svg",
    "revision": "5258b45beb7504db7fb80f64b5abdb1f"
  },
  {
    "url": "fontawesome/svgs/brands/font-awesome.svg",
    "revision": "14a97152d7ef388dd90d63b9d776446f"
  },
  {
    "url": "fontawesome/svgs/brands/fonticons-fi.svg",
    "revision": "f29104c791fbbd4cde4bbe0d7c85707a"
  },
  {
    "url": "fontawesome/svgs/brands/fonticons.svg",
    "revision": "4ccd414efe101d7b6f2c13df40f9f0b3"
  },
  {
    "url": "fontawesome/svgs/brands/fort-awesome-alt.svg",
    "revision": "bd2abd9b243cf68ed3df4f74b60c299b"
  },
  {
    "url": "fontawesome/svgs/brands/fort-awesome.svg",
    "revision": "214be5d8069fd400a50f95e1d2c126e6"
  },
  {
    "url": "fontawesome/svgs/brands/forumbee.svg",
    "revision": "5768e3db63668e6ed9a47de2e82369fa"
  },
  {
    "url": "fontawesome/svgs/brands/foursquare.svg",
    "revision": "7ac6a856708a72ce75c258a5cb1a739d"
  },
  {
    "url": "fontawesome/svgs/brands/free-code-camp.svg",
    "revision": "a110a0fc00c6135905fc6c86b7b3aae3"
  },
  {
    "url": "fontawesome/svgs/brands/freebsd.svg",
    "revision": "19ae373563eb77787da32bfb414f4e0c"
  },
  {
    "url": "fontawesome/svgs/brands/fulcrum.svg",
    "revision": "b583619799d6129646adfb958b617369"
  },
  {
    "url": "fontawesome/svgs/brands/galactic-republic.svg",
    "revision": "1f4563410417ff842cbfa155de421e46"
  },
  {
    "url": "fontawesome/svgs/brands/galactic-senate.svg",
    "revision": "8718c2f0c1f7e92362bf9882076ae9bd"
  },
  {
    "url": "fontawesome/svgs/brands/get-pocket.svg",
    "revision": "82084c92a1ebfb3db624db82963af000"
  },
  {
    "url": "fontawesome/svgs/brands/gg-circle.svg",
    "revision": "100bdee6dca499110ae1088801851b25"
  },
  {
    "url": "fontawesome/svgs/brands/gg.svg",
    "revision": "dabaf20d893f51bfbe4e00ac634ac1d6"
  },
  {
    "url": "fontawesome/svgs/brands/git-alt.svg",
    "revision": "02d0d6c23198985b4074191c70c9f889"
  },
  {
    "url": "fontawesome/svgs/brands/git-square.svg",
    "revision": "add29e5a6a733ee7c6e323c8b6211e75"
  },
  {
    "url": "fontawesome/svgs/brands/git.svg",
    "revision": "4766bfb49aec6880ed85539d93346e4a"
  },
  {
    "url": "fontawesome/svgs/brands/github-alt.svg",
    "revision": "91051d680330cbedb52c97a36312f6f9"
  },
  {
    "url": "fontawesome/svgs/brands/github-square.svg",
    "revision": "358847e2e7341d3d8ef47de3b92102d1"
  },
  {
    "url": "fontawesome/svgs/brands/github.svg",
    "revision": "f5a069d24c7855d24188c14f570b6a57"
  },
  {
    "url": "fontawesome/svgs/brands/gitkraken.svg",
    "revision": "36504ce2b2e2a60a5f813c3fc6e15928"
  },
  {
    "url": "fontawesome/svgs/brands/gitlab.svg",
    "revision": "a28dd00591fb13eb26fe962f8a2a746e"
  },
  {
    "url": "fontawesome/svgs/brands/gitter.svg",
    "revision": "038047a6a8e234ce2f597eec31187beb"
  },
  {
    "url": "fontawesome/svgs/brands/glide-g.svg",
    "revision": "8058309bfe260bb3745fc219a32ad834"
  },
  {
    "url": "fontawesome/svgs/brands/glide.svg",
    "revision": "0d2534eb29de48dde18d8949a75a63c3"
  },
  {
    "url": "fontawesome/svgs/brands/gofore.svg",
    "revision": "5bfd3e80608bd0382011d547e57efb8d"
  },
  {
    "url": "fontawesome/svgs/brands/goodreads-g.svg",
    "revision": "6846ee540381a80d358e02eb6a236fd2"
  },
  {
    "url": "fontawesome/svgs/brands/goodreads.svg",
    "revision": "a0a2e80769e1a0a16414ff3f5830d269"
  },
  {
    "url": "fontawesome/svgs/brands/google-drive.svg",
    "revision": "b34f30436adf70b18c9bd10502813937"
  },
  {
    "url": "fontawesome/svgs/brands/google-play.svg",
    "revision": "a9f1b09e55af43d696277484bfa20f42"
  },
  {
    "url": "fontawesome/svgs/brands/google-plus-g.svg",
    "revision": "0768d91a513ad52cd82ed068ff4a15d4"
  },
  {
    "url": "fontawesome/svgs/brands/google-plus-square.svg",
    "revision": "d0e27cdf583a69b5b96e17adc4c779e1"
  },
  {
    "url": "fontawesome/svgs/brands/google-plus.svg",
    "revision": "9f639094b7c7fca18b346fc9b70e2195"
  },
  {
    "url": "fontawesome/svgs/brands/google-wallet.svg",
    "revision": "e05216329b4908c8df5fcf8673d70f8c"
  },
  {
    "url": "fontawesome/svgs/brands/google.svg",
    "revision": "1ba97428b0f6377ade94c49ead9f64a5"
  },
  {
    "url": "fontawesome/svgs/brands/gratipay.svg",
    "revision": "424b1c0a0cd496348705ad089dd7774e"
  },
  {
    "url": "fontawesome/svgs/brands/grav.svg",
    "revision": "a3b214b9f4add00f3c61541e2114fa11"
  },
  {
    "url": "fontawesome/svgs/brands/gripfire.svg",
    "revision": "8d9b991a3712a5855ce694c213a48edc"
  },
  {
    "url": "fontawesome/svgs/brands/grunt.svg",
    "revision": "471cea98dabca2a9be738870d23d21ad"
  },
  {
    "url": "fontawesome/svgs/brands/gulp.svg",
    "revision": "76f37f779cf615bc08d9b55867149fe1"
  },
  {
    "url": "fontawesome/svgs/brands/hacker-news-square.svg",
    "revision": "8cbbea85edf22692ab8c1c6f34851edc"
  },
  {
    "url": "fontawesome/svgs/brands/hacker-news.svg",
    "revision": "e3d12564d40471efd5515d69f01dc8cb"
  },
  {
    "url": "fontawesome/svgs/brands/hackerrank.svg",
    "revision": "c2e392d42df5084136e02d3f44b41c33"
  },
  {
    "url": "fontawesome/svgs/brands/hips.svg",
    "revision": "3d29ccd5e66f446093f1d3446527e0ea"
  },
  {
    "url": "fontawesome/svgs/brands/hire-a-helper.svg",
    "revision": "04f89d8ce6be9475dca0e83a38a27191"
  },
  {
    "url": "fontawesome/svgs/brands/hooli.svg",
    "revision": "16bafc16758a092273a128371a16a123"
  },
  {
    "url": "fontawesome/svgs/brands/hornbill.svg",
    "revision": "69a6de0d722c5df8db1a4810b2b3f1bc"
  },
  {
    "url": "fontawesome/svgs/brands/hotjar.svg",
    "revision": "e62117d6aa746e1785af70037f000c30"
  },
  {
    "url": "fontawesome/svgs/brands/houzz.svg",
    "revision": "93b5963f7d587c801159a830de5b0edc"
  },
  {
    "url": "fontawesome/svgs/brands/html5.svg",
    "revision": "580a57ca831e2f4e7732f5e8f17b5297"
  },
  {
    "url": "fontawesome/svgs/brands/hubspot.svg",
    "revision": "c35193e29d9329a1f9d2b7fffef4e1a7"
  },
  {
    "url": "fontawesome/svgs/brands/imdb.svg",
    "revision": "df2d9d7909cef69101bc54501b73f0e7"
  },
  {
    "url": "fontawesome/svgs/brands/instagram.svg",
    "revision": "6f7f616f44e4c4244580338661f876d9"
  },
  {
    "url": "fontawesome/svgs/brands/intercom.svg",
    "revision": "2bc618b33f31ec3f8b8f6793eb9b8010"
  },
  {
    "url": "fontawesome/svgs/brands/internet-explorer.svg",
    "revision": "c11622af48eb846a2e68450b1413d53f"
  },
  {
    "url": "fontawesome/svgs/brands/invision.svg",
    "revision": "de3ba0f2d0a66366a01a97ecc633897d"
  },
  {
    "url": "fontawesome/svgs/brands/ioxhost.svg",
    "revision": "c10c3a6bab82b7fce9417cec29305b0a"
  },
  {
    "url": "fontawesome/svgs/brands/itch-io.svg",
    "revision": "5927d364a982d27ef52d09c69d4c31a5"
  },
  {
    "url": "fontawesome/svgs/brands/itunes-note.svg",
    "revision": "da131685a7b68552ecb1383f1948d97f"
  },
  {
    "url": "fontawesome/svgs/brands/itunes.svg",
    "revision": "dcfbdbe09344d8d2df38a491a3a83ce1"
  },
  {
    "url": "fontawesome/svgs/brands/java.svg",
    "revision": "fcc95a9f827df8b1f3f5a70bc13f6212"
  },
  {
    "url": "fontawesome/svgs/brands/jedi-order.svg",
    "revision": "db55ad9d8f63dc421586a310d5cfdcf9"
  },
  {
    "url": "fontawesome/svgs/brands/jenkins.svg",
    "revision": "b76294e77dbb3b8f3d0a6742d76f0d45"
  },
  {
    "url": "fontawesome/svgs/brands/jira.svg",
    "revision": "50535b769ef9f23b5d1b0863cce89a59"
  },
  {
    "url": "fontawesome/svgs/brands/joget.svg",
    "revision": "01837a270e1de41e69da53a68d007f34"
  },
  {
    "url": "fontawesome/svgs/brands/joomla.svg",
    "revision": "513f137cf45bfc3b4f3d1e52ef88be14"
  },
  {
    "url": "fontawesome/svgs/brands/js-square.svg",
    "revision": "3fa7f140a2270a0e8f1d2e0b408b72c2"
  },
  {
    "url": "fontawesome/svgs/brands/js.svg",
    "revision": "b2bb28d76fb3d6bb797697427a7776cc"
  },
  {
    "url": "fontawesome/svgs/brands/jsfiddle.svg",
    "revision": "b0fc9a79ce1fc95421c9331170b3580b"
  },
  {
    "url": "fontawesome/svgs/brands/kaggle.svg",
    "revision": "07f29012ed25d45fa92a8ec68b2e82da"
  },
  {
    "url": "fontawesome/svgs/brands/keybase.svg",
    "revision": "0ad0dea1c17a1a890a5b72d826207570"
  },
  {
    "url": "fontawesome/svgs/brands/keycdn.svg",
    "revision": "f5a2a1bee1c2bb20994bdced9a7bb94f"
  },
  {
    "url": "fontawesome/svgs/brands/kickstarter-k.svg",
    "revision": "9b2bd0d1e547ba05f112d66813120b56"
  },
  {
    "url": "fontawesome/svgs/brands/kickstarter.svg",
    "revision": "8117548bc36aaf6087f2ab0380518750"
  },
  {
    "url": "fontawesome/svgs/brands/korvue.svg",
    "revision": "369ee8c617ca57be9dae5c4497f0b590"
  },
  {
    "url": "fontawesome/svgs/brands/laravel.svg",
    "revision": "df9eff39bf36b374d5b3ea159c4ccf5c"
  },
  {
    "url": "fontawesome/svgs/brands/lastfm-square.svg",
    "revision": "7e4f7c6b5315789f00aa036cd95adb4d"
  },
  {
    "url": "fontawesome/svgs/brands/lastfm.svg",
    "revision": "d526e6b31d0336a49a116e53cfeda484"
  },
  {
    "url": "fontawesome/svgs/brands/leanpub.svg",
    "revision": "168295089bd1ff2b393be7f6bba0a01f"
  },
  {
    "url": "fontawesome/svgs/brands/less.svg",
    "revision": "11cca26ce1d6acc1e45ac7e7d405909e"
  },
  {
    "url": "fontawesome/svgs/brands/line.svg",
    "revision": "5665d4ea26e49087c4a3f4a3824dbcc0"
  },
  {
    "url": "fontawesome/svgs/brands/linkedin-in.svg",
    "revision": "22bd17393aa39a4cfec33c206db5f0df"
  },
  {
    "url": "fontawesome/svgs/brands/linkedin.svg",
    "revision": "48a2133dd5c34ad46cc6ab6ff06c03ec"
  },
  {
    "url": "fontawesome/svgs/brands/linode.svg",
    "revision": "ca5ddf570051e9422f252a0d325f4b43"
  },
  {
    "url": "fontawesome/svgs/brands/linux.svg",
    "revision": "dcc66bfe12673f9c2983debb71ca1c5b"
  },
  {
    "url": "fontawesome/svgs/brands/lyft.svg",
    "revision": "5cf0ec685a671f58e68c89d3c5d4b629"
  },
  {
    "url": "fontawesome/svgs/brands/magento.svg",
    "revision": "a6d344b180bfff1f0fd9afbea10b2501"
  },
  {
    "url": "fontawesome/svgs/brands/mailchimp.svg",
    "revision": "ab32dab0b22167340d26809e8ddec1e4"
  },
  {
    "url": "fontawesome/svgs/brands/mandalorian.svg",
    "revision": "dca218e69e61e8f58a5f4f0bf19315b5"
  },
  {
    "url": "fontawesome/svgs/brands/markdown.svg",
    "revision": "49c339e4efc364ec53cda350c8cb4ee8"
  },
  {
    "url": "fontawesome/svgs/brands/mastodon.svg",
    "revision": "9cae5d15b75caca78e2b11ac494b89b6"
  },
  {
    "url": "fontawesome/svgs/brands/maxcdn.svg",
    "revision": "84906f5924420b7858dd637858cd961b"
  },
  {
    "url": "fontawesome/svgs/brands/medapps.svg",
    "revision": "5d11acb899f32707723b27185b8db283"
  },
  {
    "url": "fontawesome/svgs/brands/medium-m.svg",
    "revision": "1e3c8a70aabd5db8880122a2df82c61f"
  },
  {
    "url": "fontawesome/svgs/brands/medium.svg",
    "revision": "f1c256effced544a69018c4b72a6da66"
  },
  {
    "url": "fontawesome/svgs/brands/medrt.svg",
    "revision": "f3347612c1208c7566020faf4bc028e1"
  },
  {
    "url": "fontawesome/svgs/brands/meetup.svg",
    "revision": "40a75877a298d1b25e9b97134c68e0e3"
  },
  {
    "url": "fontawesome/svgs/brands/megaport.svg",
    "revision": "9773293e09c36d7361f9349ec84ccd2e"
  },
  {
    "url": "fontawesome/svgs/brands/mendeley.svg",
    "revision": "61c4875a99a6e59d9326167eb3bed3d7"
  },
  {
    "url": "fontawesome/svgs/brands/microsoft.svg",
    "revision": "5ae0f9406aef79e200027383783f33e0"
  },
  {
    "url": "fontawesome/svgs/brands/mix.svg",
    "revision": "9b8a6b00e59dfc58f92fb7fa65ac7acd"
  },
  {
    "url": "fontawesome/svgs/brands/mixcloud.svg",
    "revision": "eee9220eccfc53501fe5b9bf06641d0c"
  },
  {
    "url": "fontawesome/svgs/brands/mizuni.svg",
    "revision": "259413ed97fc5c01786fe430ee19f048"
  },
  {
    "url": "fontawesome/svgs/brands/modx.svg",
    "revision": "64c46ac8f5cae452d40b8a2303eecfbd"
  },
  {
    "url": "fontawesome/svgs/brands/monero.svg",
    "revision": "98410fd72081a7a44ff7ddb5ecd92e0d"
  },
  {
    "url": "fontawesome/svgs/brands/napster.svg",
    "revision": "547e28b540e62cef67182e00d89c9514"
  },
  {
    "url": "fontawesome/svgs/brands/neos.svg",
    "revision": "6f0d227a0a7699854a2ce32dd2f9686a"
  },
  {
    "url": "fontawesome/svgs/brands/nimblr.svg",
    "revision": "f9641e4a5c285fc98441f935b96a14eb"
  },
  {
    "url": "fontawesome/svgs/brands/node-js.svg",
    "revision": "ed3ec5db51451da1223baf5408c4f09e"
  },
  {
    "url": "fontawesome/svgs/brands/node.svg",
    "revision": "271dda2634e693c2b3ed5a0c4a96250a"
  },
  {
    "url": "fontawesome/svgs/brands/npm.svg",
    "revision": "07b3134cb45e0fb571a781aec2cba966"
  },
  {
    "url": "fontawesome/svgs/brands/ns8.svg",
    "revision": "6e7ed49931d7cb4d5686cc2a387bc668"
  },
  {
    "url": "fontawesome/svgs/brands/nutritionix.svg",
    "revision": "e5b8c36014ad3cf1be79a39dee39995e"
  },
  {
    "url": "fontawesome/svgs/brands/odnoklassniki-square.svg",
    "revision": "4b842ab2afff9a3ab264467deeeab050"
  },
  {
    "url": "fontawesome/svgs/brands/odnoklassniki.svg",
    "revision": "1f01a5c72a8524f641edd6cce67aee09"
  },
  {
    "url": "fontawesome/svgs/brands/old-republic.svg",
    "revision": "8fa4c92f0d1f32879c55d57e3683b77b"
  },
  {
    "url": "fontawesome/svgs/brands/opencart.svg",
    "revision": "d2d8954ae1e178787236120469d96e03"
  },
  {
    "url": "fontawesome/svgs/brands/openid.svg",
    "revision": "7c22803fc5639cae8634c8534853cded"
  },
  {
    "url": "fontawesome/svgs/brands/opera.svg",
    "revision": "99beeb265ad0b452be3e06f23a1c59ee"
  },
  {
    "url": "fontawesome/svgs/brands/optin-monster.svg",
    "revision": "8b9d7cd5d1d0095db0befcb1ab07ac61"
  },
  {
    "url": "fontawesome/svgs/brands/osi.svg",
    "revision": "bd3e421c6e0b9db2bd44e2b8cb016376"
  },
  {
    "url": "fontawesome/svgs/brands/page4.svg",
    "revision": "8bb3432b7f7bd173ccc8fcf30559f491"
  },
  {
    "url": "fontawesome/svgs/brands/pagelines.svg",
    "revision": "9e8fc2cb2e44ac3c6fef2952756c25f7"
  },
  {
    "url": "fontawesome/svgs/brands/palfed.svg",
    "revision": "7cf043e17f60fc4cc21a60ae9536e318"
  },
  {
    "url": "fontawesome/svgs/brands/patreon.svg",
    "revision": "7ce49116dac1ee23b3752ddaa036590c"
  },
  {
    "url": "fontawesome/svgs/brands/paypal.svg",
    "revision": "6f31ba6d2ee398dabbd4c5a54990cf03"
  },
  {
    "url": "fontawesome/svgs/brands/penny-arcade.svg",
    "revision": "8d7f21622bf28da468c6d48a1b4a4cc1"
  },
  {
    "url": "fontawesome/svgs/brands/periscope.svg",
    "revision": "2cd9a69df511f29b10f4666bd2bcd85d"
  },
  {
    "url": "fontawesome/svgs/brands/phabricator.svg",
    "revision": "05d30e8f1107d06bcfe93a41b7d809b8"
  },
  {
    "url": "fontawesome/svgs/brands/phoenix-framework.svg",
    "revision": "34c8df3f7fa42b01c44e49ecde158f35"
  },
  {
    "url": "fontawesome/svgs/brands/phoenix-squadron.svg",
    "revision": "8b31e30b710c88544312eefaf66b71fc"
  },
  {
    "url": "fontawesome/svgs/brands/php.svg",
    "revision": "2b6914a74a77d4317de4d9cd7cac32f3"
  },
  {
    "url": "fontawesome/svgs/brands/pied-piper-alt.svg",
    "revision": "6742a0ce0d8c4cd2aa415cd73e3584b6"
  },
  {
    "url": "fontawesome/svgs/brands/pied-piper-hat.svg",
    "revision": "445a63650d2e18ea51cc0822fd2ac309"
  },
  {
    "url": "fontawesome/svgs/brands/pied-piper-pp.svg",
    "revision": "9c350a9b04924c2fa6fe08db474ba33f"
  },
  {
    "url": "fontawesome/svgs/brands/pied-piper.svg",
    "revision": "0cfc239ac0f5ae726dab268afef43643"
  },
  {
    "url": "fontawesome/svgs/brands/pinterest-p.svg",
    "revision": "7f6ea8ed4f8fd24afafcb7731205e31a"
  },
  {
    "url": "fontawesome/svgs/brands/pinterest-square.svg",
    "revision": "024321351f538b4e314c5a255a4f89d5"
  },
  {
    "url": "fontawesome/svgs/brands/pinterest.svg",
    "revision": "e1ae73252c14f0db4e66b300705ee887"
  },
  {
    "url": "fontawesome/svgs/brands/playstation.svg",
    "revision": "410222074d48c9a596c136e15eef2bb6"
  },
  {
    "url": "fontawesome/svgs/brands/product-hunt.svg",
    "revision": "0b61d62e6f584fd8c7b57cf31c32014b"
  },
  {
    "url": "fontawesome/svgs/brands/pushed.svg",
    "revision": "749b39caf9121f008a74081e18fe2c8c"
  },
  {
    "url": "fontawesome/svgs/brands/python.svg",
    "revision": "16acf397419a5a4c218e50d780b6988a"
  },
  {
    "url": "fontawesome/svgs/brands/qq.svg",
    "revision": "eb13b08d9e2ca443712b665007f617ec"
  },
  {
    "url": "fontawesome/svgs/brands/quinscape.svg",
    "revision": "a4ec684e7fe92e7624c24b2f19fd16d2"
  },
  {
    "url": "fontawesome/svgs/brands/quora.svg",
    "revision": "cdcbfd16e828a9098b558dcb35825c95"
  },
  {
    "url": "fontawesome/svgs/brands/r-project.svg",
    "revision": "fef4780111b4b03df792f8aa5d9deebf"
  },
  {
    "url": "fontawesome/svgs/brands/raspberry-pi.svg",
    "revision": "1990089df92d0b1b24b039d5baf8e182"
  },
  {
    "url": "fontawesome/svgs/brands/ravelry.svg",
    "revision": "77d4fba7b08f24141e2ea0924885ba02"
  },
  {
    "url": "fontawesome/svgs/brands/react.svg",
    "revision": "3ece720a0831e851fbe789681bfa1c55"
  },
  {
    "url": "fontawesome/svgs/brands/reacteurope.svg",
    "revision": "7dc0c74fb1f50fc584f2fc75255a984f"
  },
  {
    "url": "fontawesome/svgs/brands/readme.svg",
    "revision": "46e1e8e9956bea17c193c320b7bad1e6"
  },
  {
    "url": "fontawesome/svgs/brands/rebel.svg",
    "revision": "0a10efb976e506c95616f20300461f01"
  },
  {
    "url": "fontawesome/svgs/brands/red-river.svg",
    "revision": "fdcd0414e70d6a090b99d6fdc87834e7"
  },
  {
    "url": "fontawesome/svgs/brands/reddit-alien.svg",
    "revision": "9253ff0b8f7e11d90b6469086b55c5c8"
  },
  {
    "url": "fontawesome/svgs/brands/reddit-square.svg",
    "revision": "8ddeb578d3e1bab91b7ea04f4ce19558"
  },
  {
    "url": "fontawesome/svgs/brands/reddit.svg",
    "revision": "84fb81983feb40905162b527e4424429"
  },
  {
    "url": "fontawesome/svgs/brands/redhat.svg",
    "revision": "651b2c89ca508a361ec10e8673563557"
  },
  {
    "url": "fontawesome/svgs/brands/renren.svg",
    "revision": "8dbd0712a5899126103114a759aaab80"
  },
  {
    "url": "fontawesome/svgs/brands/replyd.svg",
    "revision": "16a4c379741ecc66eb46a374ecb82240"
  },
  {
    "url": "fontawesome/svgs/brands/researchgate.svg",
    "revision": "963550051e4ef7809e5446cf16d3ea61"
  },
  {
    "url": "fontawesome/svgs/brands/resolving.svg",
    "revision": "4d495a96922b7e3b64491af8ad3aba42"
  },
  {
    "url": "fontawesome/svgs/brands/rev.svg",
    "revision": "f111c85f7900162ed29dcfb1266e044e"
  },
  {
    "url": "fontawesome/svgs/brands/rocketchat.svg",
    "revision": "6d49ddd966909de7cbb306c26a8af3ef"
  },
  {
    "url": "fontawesome/svgs/brands/rockrms.svg",
    "revision": "dee58b36dda1ee3f6d54d4ddda676be5"
  },
  {
    "url": "fontawesome/svgs/brands/safari.svg",
    "revision": "ba764f44bb0fe22dfd37b9a17f61d531"
  },
  {
    "url": "fontawesome/svgs/brands/salesforce.svg",
    "revision": "518fa05c15744f1c4bdf14465dac6b78"
  },
  {
    "url": "fontawesome/svgs/brands/sass.svg",
    "revision": "8b4a4ad7a9c970ad9ffa28f9c1ebaf6a"
  },
  {
    "url": "fontawesome/svgs/brands/schlix.svg",
    "revision": "a1c0883382c2192b37d25889af805fc6"
  },
  {
    "url": "fontawesome/svgs/brands/scribd.svg",
    "revision": "ad86e46df2f1323d008ed7bb2938c26d"
  },
  {
    "url": "fontawesome/svgs/brands/searchengin.svg",
    "revision": "67cb14fbc7a45358f8e1acd680b2fff0"
  },
  {
    "url": "fontawesome/svgs/brands/sellcast.svg",
    "revision": "ea64b3d9cb7684307d8126ad7919fa62"
  },
  {
    "url": "fontawesome/svgs/brands/sellsy.svg",
    "revision": "c478f68a3fd5627e1b0b94404e607a07"
  },
  {
    "url": "fontawesome/svgs/brands/servicestack.svg",
    "revision": "8dfcc5e11ea429bd5dd2d09a4ce8af96"
  },
  {
    "url": "fontawesome/svgs/brands/shirtsinbulk.svg",
    "revision": "51e4e1b3f9fcc2461117fea503512306"
  },
  {
    "url": "fontawesome/svgs/brands/shopware.svg",
    "revision": "d7374eaee6a17505121c2590e602eac1"
  },
  {
    "url": "fontawesome/svgs/brands/simplybuilt.svg",
    "revision": "65ef1ee545fb44a36c9bbf3165a58d7e"
  },
  {
    "url": "fontawesome/svgs/brands/sistrix.svg",
    "revision": "7c44f178e4c8a0d99af9c2ae05ce0180"
  },
  {
    "url": "fontawesome/svgs/brands/sith.svg",
    "revision": "910199168219fc8213034bcc09da4982"
  },
  {
    "url": "fontawesome/svgs/brands/sketch.svg",
    "revision": "739804999f21de314e3010e490b8f8d4"
  },
  {
    "url": "fontawesome/svgs/brands/skyatlas.svg",
    "revision": "57c1dab308644f43c94b785a34dc6398"
  },
  {
    "url": "fontawesome/svgs/brands/skype.svg",
    "revision": "3859d73702e70a8351ccac377dba5d98"
  },
  {
    "url": "fontawesome/svgs/brands/slack-hash.svg",
    "revision": "f750263e1f4d2c2f1b2811e281a8bd18"
  },
  {
    "url": "fontawesome/svgs/brands/slack.svg",
    "revision": "2a75872f983ce2c837a2a7f00336e252"
  },
  {
    "url": "fontawesome/svgs/brands/slideshare.svg",
    "revision": "0eed356c954520db818e0ff506935bf6"
  },
  {
    "url": "fontawesome/svgs/brands/snapchat-ghost.svg",
    "revision": "e9283cd9d969f3c0d33dad91c6fe484b"
  },
  {
    "url": "fontawesome/svgs/brands/snapchat-square.svg",
    "revision": "64fb077e3c41ce46bbd81f155b892e4d"
  },
  {
    "url": "fontawesome/svgs/brands/snapchat.svg",
    "revision": "986d35d297af1977cf55e6c9c6aca566"
  },
  {
    "url": "fontawesome/svgs/brands/soundcloud.svg",
    "revision": "4ebc3c05b7913a85392e136610b8fd62"
  },
  {
    "url": "fontawesome/svgs/brands/sourcetree.svg",
    "revision": "e52cd56b67e1cb1f5b9d591a3be26b47"
  },
  {
    "url": "fontawesome/svgs/brands/speakap.svg",
    "revision": "5b3e872ccb163e100c59e22bde76595e"
  },
  {
    "url": "fontawesome/svgs/brands/speaker-deck.svg",
    "revision": "db33b2fc5cb2a3daca4e132a33e64e61"
  },
  {
    "url": "fontawesome/svgs/brands/spotify.svg",
    "revision": "9c3dc69efaa2895ce4841103890ee00d"
  },
  {
    "url": "fontawesome/svgs/brands/squarespace.svg",
    "revision": "965796e00379ae76e459580a2628997a"
  },
  {
    "url": "fontawesome/svgs/brands/stack-exchange.svg",
    "revision": "26af9bc107bd8dbc1d91bc0f116188a9"
  },
  {
    "url": "fontawesome/svgs/brands/stack-overflow.svg",
    "revision": "e504f1440cb54d504c16984887f96e79"
  },
  {
    "url": "fontawesome/svgs/brands/stackpath.svg",
    "revision": "e201e10fc5f8e68b8d68680b364fb1fb"
  },
  {
    "url": "fontawesome/svgs/brands/staylinked.svg",
    "revision": "0e52f39790a42a1d88a280c129f6f2fb"
  },
  {
    "url": "fontawesome/svgs/brands/steam-square.svg",
    "revision": "c2899968ebc603ded0e4f225d0b4a3ff"
  },
  {
    "url": "fontawesome/svgs/brands/steam-symbol.svg",
    "revision": "12e79796bfbef718061d6f9a2af6d447"
  },
  {
    "url": "fontawesome/svgs/brands/steam.svg",
    "revision": "036f913a4e4360aa77b8f17fb268ea46"
  },
  {
    "url": "fontawesome/svgs/brands/sticker-mule.svg",
    "revision": "bc1464b3e2c58618d1b57c49f1adacd8"
  },
  {
    "url": "fontawesome/svgs/brands/strava.svg",
    "revision": "4ea1150bebc46d6704acd7bc96e132ef"
  },
  {
    "url": "fontawesome/svgs/brands/stripe-s.svg",
    "revision": "fe6fe698262f1988ca7d603bc44b0812"
  },
  {
    "url": "fontawesome/svgs/brands/stripe.svg",
    "revision": "470559cc9053974f7fbd66647b312f5f"
  },
  {
    "url": "fontawesome/svgs/brands/studiovinari.svg",
    "revision": "696eb234ae200ffd821ad14ec99d0c52"
  },
  {
    "url": "fontawesome/svgs/brands/stumbleupon-circle.svg",
    "revision": "bebe6573d1b70de55ed37435d7b9fc61"
  },
  {
    "url": "fontawesome/svgs/brands/stumbleupon.svg",
    "revision": "82b0f7177956e7a9aec7020ddb40434f"
  },
  {
    "url": "fontawesome/svgs/brands/superpowers.svg",
    "revision": "3ba7bbad0c7a5c87c0388a6f8ca3dc88"
  },
  {
    "url": "fontawesome/svgs/brands/supple.svg",
    "revision": "ad3cd433b3af4d8acd6922a0b7818a90"
  },
  {
    "url": "fontawesome/svgs/brands/suse.svg",
    "revision": "a413c6706d4368cfb532e78ac2909648"
  },
  {
    "url": "fontawesome/svgs/brands/symfony.svg",
    "revision": "811202813943359bc94a5203b0a3ad08"
  },
  {
    "url": "fontawesome/svgs/brands/teamspeak.svg",
    "revision": "147e5fa57395383b6ae0d0960013c444"
  },
  {
    "url": "fontawesome/svgs/brands/telegram-plane.svg",
    "revision": "cc576f140eebdbaf5ba84fc5085e39e7"
  },
  {
    "url": "fontawesome/svgs/brands/telegram.svg",
    "revision": "7bbc8f5259305c027cd5f3cfaa189265"
  },
  {
    "url": "fontawesome/svgs/brands/tencent-weibo.svg",
    "revision": "a38f28446cd1f43930999eb706ffa59d"
  },
  {
    "url": "fontawesome/svgs/brands/the-red-yeti.svg",
    "revision": "ddec6174cf0c3efe5aad83464d431a69"
  },
  {
    "url": "fontawesome/svgs/brands/themeco.svg",
    "revision": "f79e0e4d482ad377fa49fea285eed388"
  },
  {
    "url": "fontawesome/svgs/brands/themeisle.svg",
    "revision": "a71e713f3dda64b62e81e90cbd614b9f"
  },
  {
    "url": "fontawesome/svgs/brands/think-peaks.svg",
    "revision": "c0ffe0aa5bd676327c7defeb05d1b043"
  },
  {
    "url": "fontawesome/svgs/brands/trade-federation.svg",
    "revision": "7ccfa25e399a41d8abb5111f50748fff"
  },
  {
    "url": "fontawesome/svgs/brands/trello.svg",
    "revision": "5292bd8619e05480b7bd29da1e8f82c2"
  },
  {
    "url": "fontawesome/svgs/brands/tripadvisor.svg",
    "revision": "ae0d1ee08f142a7e8b216333a8486372"
  },
  {
    "url": "fontawesome/svgs/brands/tumblr-square.svg",
    "revision": "0b1e7819886113d8cb9a11c4a22554c6"
  },
  {
    "url": "fontawesome/svgs/brands/tumblr.svg",
    "revision": "94e61c1d9d6b7f81a20ff6a2ab48de7f"
  },
  {
    "url": "fontawesome/svgs/brands/twitch.svg",
    "revision": "05035a3d03bd86eafe68bd26a7e7a9dc"
  },
  {
    "url": "fontawesome/svgs/brands/twitter-square.svg",
    "revision": "99937442f7c5b44d7fc883847b7a4742"
  },
  {
    "url": "fontawesome/svgs/brands/twitter.svg",
    "revision": "0729c42ac6c88ea12311c6989df785d6"
  },
  {
    "url": "fontawesome/svgs/brands/typo3.svg",
    "revision": "4241d049e5f3eb9f2dc817eca40b53eb"
  },
  {
    "url": "fontawesome/svgs/brands/uber.svg",
    "revision": "7003bfac75957a91600bdc330b8cc325"
  },
  {
    "url": "fontawesome/svgs/brands/ubuntu.svg",
    "revision": "4c21274bc33df61f2464cfc1e01f934e"
  },
  {
    "url": "fontawesome/svgs/brands/uikit.svg",
    "revision": "858adaad1f74d39e564bc78e674fd0e8"
  },
  {
    "url": "fontawesome/svgs/brands/uniregistry.svg",
    "revision": "5828339c91ba755d93f3462d99c4a10a"
  },
  {
    "url": "fontawesome/svgs/brands/untappd.svg",
    "revision": "3b3367aca34625ce6cc6ba32f6f721a2"
  },
  {
    "url": "fontawesome/svgs/brands/ups.svg",
    "revision": "cf7c683f339adc405db16158b3c118b8"
  },
  {
    "url": "fontawesome/svgs/brands/usb.svg",
    "revision": "18e615ef4a7354641099323b945aea80"
  },
  {
    "url": "fontawesome/svgs/brands/usps.svg",
    "revision": "67e2fb73eb4d7ddcc14089695dd1ff84"
  },
  {
    "url": "fontawesome/svgs/brands/ussunnah.svg",
    "revision": "95026e694f67fb237f1c0a1ea26e4857"
  },
  {
    "url": "fontawesome/svgs/brands/vaadin.svg",
    "revision": "43d5fe972b6a4f8a414290db056e33be"
  },
  {
    "url": "fontawesome/svgs/brands/viacoin.svg",
    "revision": "2a5ea0f854de78ca7c49041d39759171"
  },
  {
    "url": "fontawesome/svgs/brands/viadeo-square.svg",
    "revision": "966af5527b1535bb126ce19934585e0c"
  },
  {
    "url": "fontawesome/svgs/brands/viadeo.svg",
    "revision": "97304ea73299c49eb67f127b95ab7718"
  },
  {
    "url": "fontawesome/svgs/brands/viber.svg",
    "revision": "8e7bc922efbc553614ff06a59b9b19e0"
  },
  {
    "url": "fontawesome/svgs/brands/vimeo-square.svg",
    "revision": "9f8b0484f355026b47bd2a32fe25ade8"
  },
  {
    "url": "fontawesome/svgs/brands/vimeo-v.svg",
    "revision": "4a02029f2531d0e73f48872f9c455111"
  },
  {
    "url": "fontawesome/svgs/brands/vimeo.svg",
    "revision": "d568c86a3a2d2679af00a9704d6dd0ee"
  },
  {
    "url": "fontawesome/svgs/brands/vine.svg",
    "revision": "3274d601898f13bcbee11a4993f9caf2"
  },
  {
    "url": "fontawesome/svgs/brands/vk.svg",
    "revision": "f1edfb758d4331c3c729f5316e9f7660"
  },
  {
    "url": "fontawesome/svgs/brands/vnv.svg",
    "revision": "cd120311939b69fff0efc04c783d5407"
  },
  {
    "url": "fontawesome/svgs/brands/vuejs.svg",
    "revision": "d79a1432a655eaa9753f8807c5ee775d"
  },
  {
    "url": "fontawesome/svgs/brands/waze.svg",
    "revision": "fc3ac92706002a070094c389bd3ab4fe"
  },
  {
    "url": "fontawesome/svgs/brands/weebly.svg",
    "revision": "0b2ffb1ca348ddc08a39c95b52551e35"
  },
  {
    "url": "fontawesome/svgs/brands/weibo.svg",
    "revision": "92ba3756e46cdcea344c83f7b8bc30d8"
  },
  {
    "url": "fontawesome/svgs/brands/weixin.svg",
    "revision": "5a0555d2670c5d11b1395a499ba3eefb"
  },
  {
    "url": "fontawesome/svgs/brands/whatsapp-square.svg",
    "revision": "ad0ff3be36058229d63366f9e672c116"
  },
  {
    "url": "fontawesome/svgs/brands/whatsapp.svg",
    "revision": "4746f7cbb0fcbf116e6029a28b23b9c3"
  },
  {
    "url": "fontawesome/svgs/brands/whmcs.svg",
    "revision": "713519dae81cfda4d8f1f208d91a4e78"
  },
  {
    "url": "fontawesome/svgs/brands/wikipedia-w.svg",
    "revision": "c0f83952e1b6c26bd72de533a494cadf"
  },
  {
    "url": "fontawesome/svgs/brands/windows.svg",
    "revision": "cd9774bc04f5ea532b8edf63962f8f2b"
  },
  {
    "url": "fontawesome/svgs/brands/wix.svg",
    "revision": "0b7ecb20cbc3426e4f6306450264efd7"
  },
  {
    "url": "fontawesome/svgs/brands/wizards-of-the-coast.svg",
    "revision": "5f3d4386e38adcde06266f8668cac977"
  },
  {
    "url": "fontawesome/svgs/brands/wolf-pack-battalion.svg",
    "revision": "f1f12797e22843653c7d6bc10d5a431b"
  },
  {
    "url": "fontawesome/svgs/brands/wordpress-simple.svg",
    "revision": "7c7c450a70d6a3646ce1eddb276ca49e"
  },
  {
    "url": "fontawesome/svgs/brands/wordpress.svg",
    "revision": "cfda331088effdc7124cc174e0f09356"
  },
  {
    "url": "fontawesome/svgs/brands/wpbeginner.svg",
    "revision": "856bdefd7912fb2656ae488ffa6d5a30"
  },
  {
    "url": "fontawesome/svgs/brands/wpexplorer.svg",
    "revision": "459fe6055e11ccf261e02863507ce34a"
  },
  {
    "url": "fontawesome/svgs/brands/wpforms.svg",
    "revision": "719766e3c08a7c51940f9e0292bbc20a"
  },
  {
    "url": "fontawesome/svgs/brands/wpressr.svg",
    "revision": "6e8e7f407c460275beafa8be0602438a"
  },
  {
    "url": "fontawesome/svgs/brands/xbox.svg",
    "revision": "7c118796667507136f19d5cefd5fc913"
  },
  {
    "url": "fontawesome/svgs/brands/xing-square.svg",
    "revision": "2d82be25eb19426521c62fc8102810c2"
  },
  {
    "url": "fontawesome/svgs/brands/xing.svg",
    "revision": "1aae2673bc61817b9c30745c3687c0ec"
  },
  {
    "url": "fontawesome/svgs/brands/y-combinator.svg",
    "revision": "86eafb5a188011b2e8a0230fdda9d09b"
  },
  {
    "url": "fontawesome/svgs/brands/yahoo.svg",
    "revision": "2f87e99effd9a2e58b224194b4baaf6d"
  },
  {
    "url": "fontawesome/svgs/brands/yammer.svg",
    "revision": "fcb274359c3e7d9ee71003f6d5bbd97f"
  },
  {
    "url": "fontawesome/svgs/brands/yandex-international.svg",
    "revision": "abd1d6fc63b097197f832c65a960c7b1"
  },
  {
    "url": "fontawesome/svgs/brands/yandex.svg",
    "revision": "9961e8fbacfe8ccf9e37d738d5ec119d"
  },
  {
    "url": "fontawesome/svgs/brands/yarn.svg",
    "revision": "74a9c688b3a9d8aa4e998c1cf9d7425a"
  },
  {
    "url": "fontawesome/svgs/brands/yelp.svg",
    "revision": "eeb54b858f25d2983587073dbbed1c46"
  },
  {
    "url": "fontawesome/svgs/brands/yoast.svg",
    "revision": "0d953eeca969d37f49a2603f2156a35a"
  },
  {
    "url": "fontawesome/svgs/brands/youtube-square.svg",
    "revision": "4c5eae12982ed1372fb422e998b6f122"
  },
  {
    "url": "fontawesome/svgs/brands/youtube.svg",
    "revision": "687c57215b71c7ae20fc0ab5d96b149a"
  },
  {
    "url": "fontawesome/svgs/brands/zhihu.svg",
    "revision": "ed2f5aeeba9e1454334255d5fe0af2e8"
  },
  {
    "url": "fontawesome/svgs/regular/address-book.svg",
    "revision": "ef9d5736cb942ae062e017400dd771b0"
  },
  {
    "url": "fontawesome/svgs/regular/address-card.svg",
    "revision": "3c6b4f898e140b69e504a2f7ad0b9702"
  },
  {
    "url": "fontawesome/svgs/regular/angry.svg",
    "revision": "ace616f676ec5c19d827e51203467794"
  },
  {
    "url": "fontawesome/svgs/regular/arrow-alt-circle-down.svg",
    "revision": "6c46e584bfebf26d1960a72d5be08b77"
  },
  {
    "url": "fontawesome/svgs/regular/arrow-alt-circle-left.svg",
    "revision": "9d7e852485296bbf66c1b81deec322e0"
  },
  {
    "url": "fontawesome/svgs/regular/arrow-alt-circle-right.svg",
    "revision": "65b1787d09861605116fd266599ab601"
  },
  {
    "url": "fontawesome/svgs/regular/arrow-alt-circle-up.svg",
    "revision": "ea82635aaf73a8388ed7dee18c88837f"
  },
  {
    "url": "fontawesome/svgs/regular/bell-slash.svg",
    "revision": "b42055095a7a3087ed0d08b8c1a91c8e"
  },
  {
    "url": "fontawesome/svgs/regular/bell.svg",
    "revision": "72101879f212b49974cb5707cf49d5d8"
  },
  {
    "url": "fontawesome/svgs/regular/bookmark.svg",
    "revision": "865666b8a4467d34edbfeb91574bcc3d"
  },
  {
    "url": "fontawesome/svgs/regular/building.svg",
    "revision": "71ef06e379cc7bd16782aa906055485e"
  },
  {
    "url": "fontawesome/svgs/regular/calendar-alt.svg",
    "revision": "78beb9f5c36acfaa21f29f01e9c79569"
  },
  {
    "url": "fontawesome/svgs/regular/calendar-check.svg",
    "revision": "db6e28026dfd7661014f3a046b9d8922"
  },
  {
    "url": "fontawesome/svgs/regular/calendar-minus.svg",
    "revision": "12f96f21732a601ab0261dc6a276f5df"
  },
  {
    "url": "fontawesome/svgs/regular/calendar-plus.svg",
    "revision": "52f1767e83a6de3a9b6ec624d42171ce"
  },
  {
    "url": "fontawesome/svgs/regular/calendar-times.svg",
    "revision": "38f97464bd77f0dee455a2af59cf4979"
  },
  {
    "url": "fontawesome/svgs/regular/calendar.svg",
    "revision": "059da4c9ed8e32263353b85dc6508f0c"
  },
  {
    "url": "fontawesome/svgs/regular/caret-square-down.svg",
    "revision": "c8ed579a48bc9ff80d2627811d448130"
  },
  {
    "url": "fontawesome/svgs/regular/caret-square-left.svg",
    "revision": "93de49cbded9787250113434dba50565"
  },
  {
    "url": "fontawesome/svgs/regular/caret-square-right.svg",
    "revision": "e163f94fb2ae8ff1697c87af48a01acc"
  },
  {
    "url": "fontawesome/svgs/regular/caret-square-up.svg",
    "revision": "1982150cfc52b0e0070209a39cd8f085"
  },
  {
    "url": "fontawesome/svgs/regular/chart-bar.svg",
    "revision": "c3a7ecb36e3c99dbb6833e804033fd1f"
  },
  {
    "url": "fontawesome/svgs/regular/check-circle.svg",
    "revision": "978a276df404887c6af9609ad5f80cee"
  },
  {
    "url": "fontawesome/svgs/regular/check-square.svg",
    "revision": "a20fda295acfc8a97ca5ff0be3f8ddc8"
  },
  {
    "url": "fontawesome/svgs/regular/circle.svg",
    "revision": "444f450c6543b1764bff038c60825923"
  },
  {
    "url": "fontawesome/svgs/regular/clipboard.svg",
    "revision": "c9aef99ad5844c44ca9f8acf5067407f"
  },
  {
    "url": "fontawesome/svgs/regular/clock.svg",
    "revision": "f34127b6f7bdee4e4eea102088c7fee7"
  },
  {
    "url": "fontawesome/svgs/regular/clone.svg",
    "revision": "18168fc6091f1a2dba70661e9b1b7394"
  },
  {
    "url": "fontawesome/svgs/regular/closed-captioning.svg",
    "revision": "0083db9e3c938c3ce704c2f6aef01ab8"
  },
  {
    "url": "fontawesome/svgs/regular/comment-alt.svg",
    "revision": "70ce3f4df5c8ec466c31a448faa4253a"
  },
  {
    "url": "fontawesome/svgs/regular/comment-dots.svg",
    "revision": "d4a4fc2d172489112162b03d54fc2418"
  },
  {
    "url": "fontawesome/svgs/regular/comment.svg",
    "revision": "383cd664df3e000747de0a6c1e1f7dcf"
  },
  {
    "url": "fontawesome/svgs/regular/comments.svg",
    "revision": "bb1258b4574637d79b5f36d1ce61afd8"
  },
  {
    "url": "fontawesome/svgs/regular/compass.svg",
    "revision": "02a60db6ada7c1f78f5470d71d8b1ca1"
  },
  {
    "url": "fontawesome/svgs/regular/copy.svg",
    "revision": "80543c0282665e720ec38df33031b2d2"
  },
  {
    "url": "fontawesome/svgs/regular/copyright.svg",
    "revision": "e193ef924d7ec80caf22c7cf9fea9a9a"
  },
  {
    "url": "fontawesome/svgs/regular/credit-card.svg",
    "revision": "b62b32e7f199d50bf5fb0e32e875c4b7"
  },
  {
    "url": "fontawesome/svgs/regular/dizzy.svg",
    "revision": "8b5ce35137280a8b13c022559b5fa1e9"
  },
  {
    "url": "fontawesome/svgs/regular/dot-circle.svg",
    "revision": "d3f6394505c19523166b0f886dd8b33e"
  },
  {
    "url": "fontawesome/svgs/regular/edit.svg",
    "revision": "6010d7e73c7c1a33542910a7ef007bba"
  },
  {
    "url": "fontawesome/svgs/regular/envelope-open.svg",
    "revision": "66d487c5ff7615dee3ef01aa88e11b78"
  },
  {
    "url": "fontawesome/svgs/regular/envelope.svg",
    "revision": "d4a4f1d4068793d41daa0367a4ab60a3"
  },
  {
    "url": "fontawesome/svgs/regular/eye-slash.svg",
    "revision": "315c2c3731700e33b5ff307061098a58"
  },
  {
    "url": "fontawesome/svgs/regular/eye.svg",
    "revision": "33e43412f0889ca9f5064d050ed1887a"
  },
  {
    "url": "fontawesome/svgs/regular/file-alt.svg",
    "revision": "af630b3864c32ef497a99fb1dfd9dddd"
  },
  {
    "url": "fontawesome/svgs/regular/file-archive.svg",
    "revision": "5680150a4777d5e6a1e57fdc9e0bb7d0"
  },
  {
    "url": "fontawesome/svgs/regular/file-audio.svg",
    "revision": "3d58b8cd96634f7e0829f795655ac2ff"
  },
  {
    "url": "fontawesome/svgs/regular/file-code.svg",
    "revision": "b27d3ab0463bb03c1d37e57e89f40f14"
  },
  {
    "url": "fontawesome/svgs/regular/file-excel.svg",
    "revision": "c5fb8d2c18d541cdece8cefe36e59e12"
  },
  {
    "url": "fontawesome/svgs/regular/file-image.svg",
    "revision": "ebb282e48be4e32a7c6d858ba6f97bf3"
  },
  {
    "url": "fontawesome/svgs/regular/file-pdf.svg",
    "revision": "cdc4bec36c0ea247cb7c9d6ed01ecbc0"
  },
  {
    "url": "fontawesome/svgs/regular/file-powerpoint.svg",
    "revision": "d482424727803b01655af84bd00bbaf6"
  },
  {
    "url": "fontawesome/svgs/regular/file-video.svg",
    "revision": "b25c1be31894cbab40308e3b49b2395c"
  },
  {
    "url": "fontawesome/svgs/regular/file-word.svg",
    "revision": "f8d11c707a068b68994cb01926526306"
  },
  {
    "url": "fontawesome/svgs/regular/file.svg",
    "revision": "431a529dc62c51e54670b0e1a7de340b"
  },
  {
    "url": "fontawesome/svgs/regular/flag.svg",
    "revision": "9494dadf4238d043c41c783232e73f06"
  },
  {
    "url": "fontawesome/svgs/regular/flushed.svg",
    "revision": "16187434c9bde684c6bea02900d6e51d"
  },
  {
    "url": "fontawesome/svgs/regular/folder-open.svg",
    "revision": "2c3a34d43301de5b6529d70f43a76a7f"
  },
  {
    "url": "fontawesome/svgs/regular/folder.svg",
    "revision": "c044d5db7e8906b7a1621aa934bd9da2"
  },
  {
    "url": "fontawesome/svgs/regular/font-awesome-logo-full.svg",
    "revision": "5258b45beb7504db7fb80f64b5abdb1f"
  },
  {
    "url": "fontawesome/svgs/regular/frown-open.svg",
    "revision": "476ebdbeee9c87b2b4d45e16b75bc85c"
  },
  {
    "url": "fontawesome/svgs/regular/frown.svg",
    "revision": "a5b19a1d6a14f836e0190687c0ceee6a"
  },
  {
    "url": "fontawesome/svgs/regular/futbol.svg",
    "revision": "2a1715380232b1cc4b3e222f91c3f700"
  },
  {
    "url": "fontawesome/svgs/regular/gem.svg",
    "revision": "a931709a5f1061a6f770ac1b592d91bf"
  },
  {
    "url": "fontawesome/svgs/regular/grimace.svg",
    "revision": "fa27b56522b01985a07222fc1dfa7f58"
  },
  {
    "url": "fontawesome/svgs/regular/grin-alt.svg",
    "revision": "cb423086786f6e0745c580f186a93889"
  },
  {
    "url": "fontawesome/svgs/regular/grin-beam-sweat.svg",
    "revision": "c649c4e1895026e37396f2f4bf83e8ef"
  },
  {
    "url": "fontawesome/svgs/regular/grin-beam.svg",
    "revision": "29f00a8ed36cfb87e9057d6658682bd6"
  },
  {
    "url": "fontawesome/svgs/regular/grin-hearts.svg",
    "revision": "dd2366e95f8dcb48b61d9f7119b0e2e5"
  },
  {
    "url": "fontawesome/svgs/regular/grin-squint-tears.svg",
    "revision": "4083d5ddffeb6daa99f2f5aebd1b3a64"
  },
  {
    "url": "fontawesome/svgs/regular/grin-squint.svg",
    "revision": "8f19da38753988218e99beed29f3e378"
  },
  {
    "url": "fontawesome/svgs/regular/grin-stars.svg",
    "revision": "2cb25d2ee643efa88638200d526dd370"
  },
  {
    "url": "fontawesome/svgs/regular/grin-tears.svg",
    "revision": "07bb93e04db75137eecf753f883f737d"
  },
  {
    "url": "fontawesome/svgs/regular/grin-tongue-squint.svg",
    "revision": "c5387926f57e4bb07b35ac0805eb76e9"
  },
  {
    "url": "fontawesome/svgs/regular/grin-tongue-wink.svg",
    "revision": "8d7443bbb0fd90c801be20ca8abc721f"
  },
  {
    "url": "fontawesome/svgs/regular/grin-tongue.svg",
    "revision": "fabe206083194f06dfc23f71f1476c02"
  },
  {
    "url": "fontawesome/svgs/regular/grin-wink.svg",
    "revision": "aa00844125997190f165b71bd351e12f"
  },
  {
    "url": "fontawesome/svgs/regular/grin.svg",
    "revision": "8a8284b390d672dc6390ed6f9365fd10"
  },
  {
    "url": "fontawesome/svgs/regular/hand-lizard.svg",
    "revision": "ad4c9261b67e07df2766b247dae2ed93"
  },
  {
    "url": "fontawesome/svgs/regular/hand-paper.svg",
    "revision": "3903337b99664dcd458bf55224579835"
  },
  {
    "url": "fontawesome/svgs/regular/hand-peace.svg",
    "revision": "a65fd2fb4adee0800cd327f35272e606"
  },
  {
    "url": "fontawesome/svgs/regular/hand-point-down.svg",
    "revision": "c5ead005cce33dbb934e3c5754635e23"
  },
  {
    "url": "fontawesome/svgs/regular/hand-point-left.svg",
    "revision": "95ce2fdfcc38f4882a6e3211167138d6"
  },
  {
    "url": "fontawesome/svgs/regular/hand-point-right.svg",
    "revision": "8534a4431580215811a17f31a404c3ab"
  },
  {
    "url": "fontawesome/svgs/regular/hand-point-up.svg",
    "revision": "da5e98703000949740d47580d400dc60"
  },
  {
    "url": "fontawesome/svgs/regular/hand-pointer.svg",
    "revision": "eeabcc7b103b933c12f058f000cff151"
  },
  {
    "url": "fontawesome/svgs/regular/hand-rock.svg",
    "revision": "e42f794e9a82289d652839cd5e43c34e"
  },
  {
    "url": "fontawesome/svgs/regular/hand-scissors.svg",
    "revision": "b163c251b6521d8c599e796607e3c773"
  },
  {
    "url": "fontawesome/svgs/regular/hand-spock.svg",
    "revision": "ddcb87e68c175d06a9456fc7c0585824"
  },
  {
    "url": "fontawesome/svgs/regular/handshake.svg",
    "revision": "87cbd0d8c746639d5e3c791a43a8f11b"
  },
  {
    "url": "fontawesome/svgs/regular/hdd.svg",
    "revision": "a2a0a564957911b0f2f6a74296f7695c"
  },
  {
    "url": "fontawesome/svgs/regular/heart.svg",
    "revision": "27b40c8c43cb66ec62f66db8508faf16"
  },
  {
    "url": "fontawesome/svgs/regular/hospital.svg",
    "revision": "f4e3dac654ed109c61083f4449099c13"
  },
  {
    "url": "fontawesome/svgs/regular/hourglass.svg",
    "revision": "b891c789fde0af8db9dd537d8adf3aca"
  },
  {
    "url": "fontawesome/svgs/regular/id-badge.svg",
    "revision": "4e6cd086b97be4d3e4f78bb51ae3732f"
  },
  {
    "url": "fontawesome/svgs/regular/id-card.svg",
    "revision": "cf439b6fd97374952de47fa3021cd8be"
  },
  {
    "url": "fontawesome/svgs/regular/image.svg",
    "revision": "2252b8e1ab2cbfeae1906e9851708154"
  },
  {
    "url": "fontawesome/svgs/regular/images.svg",
    "revision": "4de2873ce58e23058d1dec1244da1b2a"
  },
  {
    "url": "fontawesome/svgs/regular/keyboard.svg",
    "revision": "6b5de470c3e5f288f0fa3d81cad40305"
  },
  {
    "url": "fontawesome/svgs/regular/kiss-beam.svg",
    "revision": "0e7bf1c0684131f553059205b329c404"
  },
  {
    "url": "fontawesome/svgs/regular/kiss-wink-heart.svg",
    "revision": "60075bdebe1a805e8777a77b9a131733"
  },
  {
    "url": "fontawesome/svgs/regular/kiss.svg",
    "revision": "f4e8ef31ea2adb115b9f3199e98ac012"
  },
  {
    "url": "fontawesome/svgs/regular/laugh-beam.svg",
    "revision": "c6705f8b792804959c5fbe8f5fc069ef"
  },
  {
    "url": "fontawesome/svgs/regular/laugh-squint.svg",
    "revision": "3f22f46cee3b6f637069258a886fd6c0"
  },
  {
    "url": "fontawesome/svgs/regular/laugh-wink.svg",
    "revision": "ef4a7db393bff729e934b513c81a59fb"
  },
  {
    "url": "fontawesome/svgs/regular/laugh.svg",
    "revision": "82d4fc2ac256554d40bbe4c4a0fa7dfa"
  },
  {
    "url": "fontawesome/svgs/regular/lemon.svg",
    "revision": "d7bb7380b32d23d575bd6a30da3d3932"
  },
  {
    "url": "fontawesome/svgs/regular/life-ring.svg",
    "revision": "be9a8bbd5362a8bc1d2d01be7ae217f4"
  },
  {
    "url": "fontawesome/svgs/regular/lightbulb.svg",
    "revision": "f7f0b99e85cd2ebb29e820577b977ab5"
  },
  {
    "url": "fontawesome/svgs/regular/list-alt.svg",
    "revision": "b3a45c8f4ad99af874d2112d64732c41"
  },
  {
    "url": "fontawesome/svgs/regular/map.svg",
    "revision": "d67f86df349c2d7030cec0b16e0f34d4"
  },
  {
    "url": "fontawesome/svgs/regular/meh-blank.svg",
    "revision": "8269250b95273349e7604c0413eabf3d"
  },
  {
    "url": "fontawesome/svgs/regular/meh-rolling-eyes.svg",
    "revision": "231677f16402ca05df0a59aa27dd3426"
  },
  {
    "url": "fontawesome/svgs/regular/meh.svg",
    "revision": "244a3e88bb998a4a4a6f778ac11468aa"
  },
  {
    "url": "fontawesome/svgs/regular/minus-square.svg",
    "revision": "42e590f09be7eb78577d26e6a877a0bd"
  },
  {
    "url": "fontawesome/svgs/regular/money-bill-alt.svg",
    "revision": "14a44584a219a14495c8561d86b2b0ff"
  },
  {
    "url": "fontawesome/svgs/regular/moon.svg",
    "revision": "d0869567162577c5572deeb690545a63"
  },
  {
    "url": "fontawesome/svgs/regular/newspaper.svg",
    "revision": "7aec8849539fdea92379076b274ee9d0"
  },
  {
    "url": "fontawesome/svgs/regular/object-group.svg",
    "revision": "c3da5f69fcdd22b9349f905054c18b87"
  },
  {
    "url": "fontawesome/svgs/regular/object-ungroup.svg",
    "revision": "ccaaf5e966c5b2148c1ee757fa4dab18"
  },
  {
    "url": "fontawesome/svgs/regular/paper-plane.svg",
    "revision": "f5f4a640237df4e571de48832a775c53"
  },
  {
    "url": "fontawesome/svgs/regular/pause-circle.svg",
    "revision": "56317c9da7bf800a78366ffa5be457c5"
  },
  {
    "url": "fontawesome/svgs/regular/play-circle.svg",
    "revision": "a47c56fffe2350332fd75ba527b58bb5"
  },
  {
    "url": "fontawesome/svgs/regular/plus-square.svg",
    "revision": "aec856b5eadcf977edcc86b7d663b69b"
  },
  {
    "url": "fontawesome/svgs/regular/question-circle.svg",
    "revision": "0b26d2636590a52ab7a9113e571e7702"
  },
  {
    "url": "fontawesome/svgs/regular/registered.svg",
    "revision": "7587c6b501941e6f3410724120578515"
  },
  {
    "url": "fontawesome/svgs/regular/sad-cry.svg",
    "revision": "4d2bf4be04d018d52c03bf4ef2f7dbae"
  },
  {
    "url": "fontawesome/svgs/regular/sad-tear.svg",
    "revision": "57adcc07991a9a21b12c0d7bc292e89c"
  },
  {
    "url": "fontawesome/svgs/regular/save.svg",
    "revision": "b179a6a9624403f110effc5ee23c3f18"
  },
  {
    "url": "fontawesome/svgs/regular/share-square.svg",
    "revision": "432a70058889c55708465c13bb447414"
  },
  {
    "url": "fontawesome/svgs/regular/smile-beam.svg",
    "revision": "459e5b7b503ddd651dc9782e524e5756"
  },
  {
    "url": "fontawesome/svgs/regular/smile-wink.svg",
    "revision": "55849571bd195ba43d532f15303b7a7d"
  },
  {
    "url": "fontawesome/svgs/regular/smile.svg",
    "revision": "1ede85d05354d9b7f50cd4743f77c0c8"
  },
  {
    "url": "fontawesome/svgs/regular/snowflake.svg",
    "revision": "e88176b669619e8a97d385d6966612c9"
  },
  {
    "url": "fontawesome/svgs/regular/square.svg",
    "revision": "eb50623996f2284e7cf8d29c923b5c6a"
  },
  {
    "url": "fontawesome/svgs/regular/star-half.svg",
    "revision": "338abbf5756544635823a5e43f950c89"
  },
  {
    "url": "fontawesome/svgs/regular/star.svg",
    "revision": "274df83eab2fb258a166b4b0bc33c281"
  },
  {
    "url": "fontawesome/svgs/regular/sticky-note.svg",
    "revision": "690c70485075c08b87d502ba25f8608a"
  },
  {
    "url": "fontawesome/svgs/regular/stop-circle.svg",
    "revision": "7290c06a09914ffb8377c6dac93ad2e1"
  },
  {
    "url": "fontawesome/svgs/regular/sun.svg",
    "revision": "2cffe0e2cf94398177c66e72d926dceb"
  },
  {
    "url": "fontawesome/svgs/regular/surprise.svg",
    "revision": "5689fda3d7aa9cc5828fdf65fba99fbc"
  },
  {
    "url": "fontawesome/svgs/regular/thumbs-down.svg",
    "revision": "9d5c86c70f9258ffdc464d0fb229b1cc"
  },
  {
    "url": "fontawesome/svgs/regular/thumbs-up.svg",
    "revision": "bf12c4d7e45c437b57f797c97edcfacc"
  },
  {
    "url": "fontawesome/svgs/regular/times-circle.svg",
    "revision": "6832fc6da443cf11654ee34291e334e0"
  },
  {
    "url": "fontawesome/svgs/regular/tired.svg",
    "revision": "a2ea2cd22ccaeb030c1e856a93f59f7a"
  },
  {
    "url": "fontawesome/svgs/regular/trash-alt.svg",
    "revision": "974679dc6e460d15582b3699b83f3dd8"
  },
  {
    "url": "fontawesome/svgs/regular/user-circle.svg",
    "revision": "6eb38020fa280feee4cf3da4f6f47d06"
  },
  {
    "url": "fontawesome/svgs/regular/user.svg",
    "revision": "dc1fa075a50d0cd4f7acff9e9d29d082"
  },
  {
    "url": "fontawesome/svgs/regular/window-close.svg",
    "revision": "06d8ab6b2a75ce1926b7217b9fc453e0"
  },
  {
    "url": "fontawesome/svgs/regular/window-maximize.svg",
    "revision": "e3d93cde8e22407084e90c0e72d32cca"
  },
  {
    "url": "fontawesome/svgs/regular/window-minimize.svg",
    "revision": "e4747aa2b96505a634bb7a28ca96fce1"
  },
  {
    "url": "fontawesome/svgs/regular/window-restore.svg",
    "revision": "0223564cf0d9877abb7b441572cd0146"
  },
  {
    "url": "fontawesome/svgs/solid/ad.svg",
    "revision": "06bfc0ce9e08ad7a44f1fddea66db841"
  },
  {
    "url": "fontawesome/svgs/solid/address-book.svg",
    "revision": "0c2f35771a58d0156d4583b64eaf65ea"
  },
  {
    "url": "fontawesome/svgs/solid/address-card.svg",
    "revision": "a126ca33f0fcfc9457872404da5df7ea"
  },
  {
    "url": "fontawesome/svgs/solid/adjust.svg",
    "revision": "42916e7c2a10b2bdf0ac2591aec96a4e"
  },
  {
    "url": "fontawesome/svgs/solid/air-freshener.svg",
    "revision": "5e17c8639074958fd3e75c5676334fc6"
  },
  {
    "url": "fontawesome/svgs/solid/align-center.svg",
    "revision": "e4a1f55ba64793ce9e3df67972cd5eb1"
  },
  {
    "url": "fontawesome/svgs/solid/align-justify.svg",
    "revision": "a9e667717430368bcfcbc2033c79dd07"
  },
  {
    "url": "fontawesome/svgs/solid/align-left.svg",
    "revision": "bccd3f90f550c2e6ad0ca729677feb92"
  },
  {
    "url": "fontawesome/svgs/solid/align-right.svg",
    "revision": "dcdac2613bc14adfdaa0c7eda864aeea"
  },
  {
    "url": "fontawesome/svgs/solid/allergies.svg",
    "revision": "3fb0c69403b1d28bc56086ad14223126"
  },
  {
    "url": "fontawesome/svgs/solid/ambulance.svg",
    "revision": "338b02e3fbc8f9b2a85473b851d5abb1"
  },
  {
    "url": "fontawesome/svgs/solid/american-sign-language-interpreting.svg",
    "revision": "3e8c0f12b51050932a35fb71338b8c28"
  },
  {
    "url": "fontawesome/svgs/solid/anchor.svg",
    "revision": "c25bf5b56fed8337ce2fa1623903fa01"
  },
  {
    "url": "fontawesome/svgs/solid/angle-double-down.svg",
    "revision": "c894722fb893e649f8c818c230f9f41f"
  },
  {
    "url": "fontawesome/svgs/solid/angle-double-left.svg",
    "revision": "a430452ac768c5bfc4974342e434e0bf"
  },
  {
    "url": "fontawesome/svgs/solid/angle-double-right.svg",
    "revision": "6698ffe62f963bddad53a22f22eb4ffb"
  },
  {
    "url": "fontawesome/svgs/solid/angle-double-up.svg",
    "revision": "17dbe9af75b56d01956eceadcc686dad"
  },
  {
    "url": "fontawesome/svgs/solid/angle-down.svg",
    "revision": "4a0aa59c887ca20a42f8bb21b4fd4dc2"
  },
  {
    "url": "fontawesome/svgs/solid/angle-left.svg",
    "revision": "60f083e8bd35dddce744b0b658c7551b"
  },
  {
    "url": "fontawesome/svgs/solid/angle-right.svg",
    "revision": "239b97214e33bba9d59b4cfe5f766e18"
  },
  {
    "url": "fontawesome/svgs/solid/angle-up.svg",
    "revision": "b0817084e4de102b479bf1ec8a247a68"
  },
  {
    "url": "fontawesome/svgs/solid/angry.svg",
    "revision": "763a89f093bb38ae9bf98e7d4d6ec9b4"
  },
  {
    "url": "fontawesome/svgs/solid/ankh.svg",
    "revision": "c7c66e8a0c9d0eddd90da803aae94aaa"
  },
  {
    "url": "fontawesome/svgs/solid/apple-alt.svg",
    "revision": "090683283ad2a6271ff868f88cbfb888"
  },
  {
    "url": "fontawesome/svgs/solid/archive.svg",
    "revision": "30d13f43efbdce11a6065a639fd84f6b"
  },
  {
    "url": "fontawesome/svgs/solid/archway.svg",
    "revision": "10288a830570acb8a9c36bc6d385d063"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-alt-circle-down.svg",
    "revision": "670e216628688a6388a65e94246fb52a"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-alt-circle-left.svg",
    "revision": "dcb28c09aa47893cb0b01b803232377d"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-alt-circle-right.svg",
    "revision": "f0708eec6eea3ad893af3c269664792c"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-alt-circle-up.svg",
    "revision": "93bedc5240a980dd1e8e2c291f603a0b"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-circle-down.svg",
    "revision": "80972e666eec74cc068b019fe67f7fc5"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-circle-left.svg",
    "revision": "db56b7e5f5e2e6f2aa33fb540c6bae38"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-circle-right.svg",
    "revision": "5f4fb1f0b459b79249a5fec4ad232074"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-circle-up.svg",
    "revision": "0521496a8ecd6402250899f80467d0d8"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-down.svg",
    "revision": "6198c1b04731cc538f2cb0095d668463"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-left.svg",
    "revision": "b701e66a4714806a66acd39cc1448883"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-right.svg",
    "revision": "487c46655ea91c50b2a3c3c39c630060"
  },
  {
    "url": "fontawesome/svgs/solid/arrow-up.svg",
    "revision": "8160737008f7cd69fd0c4f41146ecf9d"
  },
  {
    "url": "fontawesome/svgs/solid/arrows-alt-h.svg",
    "revision": "0011749bef4a4bb97a2461b347f57525"
  },
  {
    "url": "fontawesome/svgs/solid/arrows-alt-v.svg",
    "revision": "e9bda4f7ca7567ed4847eb290c16f9fc"
  },
  {
    "url": "fontawesome/svgs/solid/arrows-alt.svg",
    "revision": "30a185d4506a8ca28c9c3cc036ab2c39"
  },
  {
    "url": "fontawesome/svgs/solid/assistive-listening-systems.svg",
    "revision": "26fa2cf94f74b60b9d76fbc8f7813ebb"
  },
  {
    "url": "fontawesome/svgs/solid/asterisk.svg",
    "revision": "c1d3cdf9d1d4aaa4d39420c8400f50f8"
  },
  {
    "url": "fontawesome/svgs/solid/at.svg",
    "revision": "af0b472ec87f38c02f10644bb55284cb"
  },
  {
    "url": "fontawesome/svgs/solid/atlas.svg",
    "revision": "2289a981731dc3d10b28779555907858"
  },
  {
    "url": "fontawesome/svgs/solid/atom.svg",
    "revision": "d0bf01f48a7e774827147fa677b622fa"
  },
  {
    "url": "fontawesome/svgs/solid/audio-description.svg",
    "revision": "359367e697d9674578e7df1ecc8a3345"
  },
  {
    "url": "fontawesome/svgs/solid/award.svg",
    "revision": "9217c76c841da085a5d33fe780f59cab"
  },
  {
    "url": "fontawesome/svgs/solid/baby-carriage.svg",
    "revision": "cc786d4ead21fdbfc20f631ecb65f422"
  },
  {
    "url": "fontawesome/svgs/solid/baby.svg",
    "revision": "93839e264f6a31a99d15fc737ed79e78"
  },
  {
    "url": "fontawesome/svgs/solid/backspace.svg",
    "revision": "c37b7ac34937b406e5a0d75f1ecca65e"
  },
  {
    "url": "fontawesome/svgs/solid/backward.svg",
    "revision": "a93421ce40aca250d93bcbac923c2dd6"
  },
  {
    "url": "fontawesome/svgs/solid/bacon.svg",
    "revision": "865a45654b36d4ce9205e690b5498f46"
  },
  {
    "url": "fontawesome/svgs/solid/balance-scale-left.svg",
    "revision": "c3817d16909ea39dee535fd809e94969"
  },
  {
    "url": "fontawesome/svgs/solid/balance-scale-right.svg",
    "revision": "d4f8b7e24d9bee4144ac3f8fe0b180bd"
  },
  {
    "url": "fontawesome/svgs/solid/balance-scale.svg",
    "revision": "3cf357f8087d871cad07a744c8378fc9"
  },
  {
    "url": "fontawesome/svgs/solid/ban.svg",
    "revision": "feeac21e7ab53a416fd61262caef6124"
  },
  {
    "url": "fontawesome/svgs/solid/band-aid.svg",
    "revision": "eac59dbf57350292ff051da5af9ee5e0"
  },
  {
    "url": "fontawesome/svgs/solid/barcode.svg",
    "revision": "8da843131d6e8aa75f87237be089d8cf"
  },
  {
    "url": "fontawesome/svgs/solid/bars.svg",
    "revision": "5e9fe16918edf79e37d3cd7afea9b9f8"
  },
  {
    "url": "fontawesome/svgs/solid/baseball-ball.svg",
    "revision": "46322a634577b78ff101739297241415"
  },
  {
    "url": "fontawesome/svgs/solid/basketball-ball.svg",
    "revision": "60c9a9f773c9f9382a87f0c83449f294"
  },
  {
    "url": "fontawesome/svgs/solid/bath.svg",
    "revision": "c7bd9b9e0ac5061a1be6d41158f10226"
  },
  {
    "url": "fontawesome/svgs/solid/battery-empty.svg",
    "revision": "b94735ed2ac0458125cce6b14f5a5416"
  },
  {
    "url": "fontawesome/svgs/solid/battery-full.svg",
    "revision": "60a4473a33a1883e09d948b9557c381a"
  },
  {
    "url": "fontawesome/svgs/solid/battery-half.svg",
    "revision": "568e2123d25d5664d4f7f433831d6c1e"
  },
  {
    "url": "fontawesome/svgs/solid/battery-quarter.svg",
    "revision": "98fdf9151b28f281ecaaf7da98f4971c"
  },
  {
    "url": "fontawesome/svgs/solid/battery-three-quarters.svg",
    "revision": "6f74a1164057b9bd1f22015895c8cc2d"
  },
  {
    "url": "fontawesome/svgs/solid/bed.svg",
    "revision": "05093bc38db6efa7f0b63b7ff15709fa"
  },
  {
    "url": "fontawesome/svgs/solid/beer.svg",
    "revision": "4c6c4fb3ae8d97a504c4f52bc297d7f5"
  },
  {
    "url": "fontawesome/svgs/solid/bell-slash.svg",
    "revision": "80d45d7bf190ceb761e0b0da0e258b40"
  },
  {
    "url": "fontawesome/svgs/solid/bell.svg",
    "revision": "d37eeee11b499747f2d2dcd8310ae552"
  },
  {
    "url": "fontawesome/svgs/solid/bezier-curve.svg",
    "revision": "3c05136e45cbfbcbd1989c3a7beb8262"
  },
  {
    "url": "fontawesome/svgs/solid/bible.svg",
    "revision": "f6682ad2580f765af3553feb2ec18054"
  },
  {
    "url": "fontawesome/svgs/solid/bicycle.svg",
    "revision": "3c4d3374d74ee254d21455568dc5b1e4"
  },
  {
    "url": "fontawesome/svgs/solid/biking.svg",
    "revision": "aeba2b62d695052a04786ea5a69b61e4"
  },
  {
    "url": "fontawesome/svgs/solid/binoculars.svg",
    "revision": "fce990bdec1af40288d0d0991d78027a"
  },
  {
    "url": "fontawesome/svgs/solid/biohazard.svg",
    "revision": "1dd89c777579d22b4321f0c30c87b794"
  },
  {
    "url": "fontawesome/svgs/solid/birthday-cake.svg",
    "revision": "a6645a34a8effd06049fb1950ac6f29c"
  },
  {
    "url": "fontawesome/svgs/solid/blender-phone.svg",
    "revision": "91ad544660b25135b27f6e7a77c77e3d"
  },
  {
    "url": "fontawesome/svgs/solid/blender.svg",
    "revision": "2873e6525e072e2d91462b207f667da8"
  },
  {
    "url": "fontawesome/svgs/solid/blind.svg",
    "revision": "a92dbfddb05b2bb0dd7f3819364b0028"
  },
  {
    "url": "fontawesome/svgs/solid/blog.svg",
    "revision": "dd8eec4c3c9b9ff1f0fcc5e472b1d405"
  },
  {
    "url": "fontawesome/svgs/solid/bold.svg",
    "revision": "4b27cf27e2143cdc2ce9ba649d8149d5"
  },
  {
    "url": "fontawesome/svgs/solid/bolt.svg",
    "revision": "2c4161e6bc81b9aec63b36297a11e2e2"
  },
  {
    "url": "fontawesome/svgs/solid/bomb.svg",
    "revision": "667e7d68c1935bd42f857d775f76af9f"
  },
  {
    "url": "fontawesome/svgs/solid/bone.svg",
    "revision": "8c5aa2f77e6e4bae31630f2e4fef9144"
  },
  {
    "url": "fontawesome/svgs/solid/bong.svg",
    "revision": "fad6a704bbff7d97ff7765b1a4c19a10"
  },
  {
    "url": "fontawesome/svgs/solid/book-dead.svg",
    "revision": "867768456993d3b10229b183555d0044"
  },
  {
    "url": "fontawesome/svgs/solid/book-medical.svg",
    "revision": "06d574df425a24d987c9f89f81513e77"
  },
  {
    "url": "fontawesome/svgs/solid/book-open.svg",
    "revision": "e567d8602a02af562aa9972e2b493871"
  },
  {
    "url": "fontawesome/svgs/solid/book-reader.svg",
    "revision": "f684326ac915e2986196487a02b28d17"
  },
  {
    "url": "fontawesome/svgs/solid/book.svg",
    "revision": "a8f683b30df5e32d08e098f17470e9cf"
  },
  {
    "url": "fontawesome/svgs/solid/bookmark.svg",
    "revision": "864b58c71895e8c9d5becfd915ab6b02"
  },
  {
    "url": "fontawesome/svgs/solid/border-all.svg",
    "revision": "986a597b4044fc952c9485310855f15d"
  },
  {
    "url": "fontawesome/svgs/solid/border-none.svg",
    "revision": "45db2d7daad28b79b8bbf6068e8a90b0"
  },
  {
    "url": "fontawesome/svgs/solid/border-style.svg",
    "revision": "708f84e850dd8e41d31484aab20d177c"
  },
  {
    "url": "fontawesome/svgs/solid/bowling-ball.svg",
    "revision": "7c4e2f6d84b1092994a643e61d339263"
  },
  {
    "url": "fontawesome/svgs/solid/box-open.svg",
    "revision": "5c54d3912ebe21612a100c8f51d9875a"
  },
  {
    "url": "fontawesome/svgs/solid/box.svg",
    "revision": "d6280afafc4a81041b2df518e1b21553"
  },
  {
    "url": "fontawesome/svgs/solid/boxes.svg",
    "revision": "e66f59df2a4060f937841cdc144f5984"
  },
  {
    "url": "fontawesome/svgs/solid/braille.svg",
    "revision": "bedaf12d03a563b6fbbc09130ab99ae1"
  },
  {
    "url": "fontawesome/svgs/solid/brain.svg",
    "revision": "dbcb94130612625b18c57c08b4f5f749"
  },
  {
    "url": "fontawesome/svgs/solid/bread-slice.svg",
    "revision": "f1a65114391a0e4f0d80eae2642440e2"
  },
  {
    "url": "fontawesome/svgs/solid/briefcase-medical.svg",
    "revision": "e3ec9faf01c7b047fd805f601b527592"
  },
  {
    "url": "fontawesome/svgs/solid/briefcase.svg",
    "revision": "591a8bd8c246004f63da9cf0341c328d"
  },
  {
    "url": "fontawesome/svgs/solid/broadcast-tower.svg",
    "revision": "5ae5e54510c9bbdef43833450bb4313f"
  },
  {
    "url": "fontawesome/svgs/solid/broom.svg",
    "revision": "4b95a81df103518984d21d61fecf8318"
  },
  {
    "url": "fontawesome/svgs/solid/brush.svg",
    "revision": "3273fc82754399f5af825eeac9652ab6"
  },
  {
    "url": "fontawesome/svgs/solid/bug.svg",
    "revision": "92af4e2c74f9838b363dfdccab7aec27"
  },
  {
    "url": "fontawesome/svgs/solid/building.svg",
    "revision": "88209aa4a5b49a05fdee7d28e43efd97"
  },
  {
    "url": "fontawesome/svgs/solid/bullhorn.svg",
    "revision": "b8eec1344917e4f343a45009a34ac22f"
  },
  {
    "url": "fontawesome/svgs/solid/bullseye.svg",
    "revision": "7976a0d502642d827d37bc6cfbad975a"
  },
  {
    "url": "fontawesome/svgs/solid/burn.svg",
    "revision": "c4d926224eeb8d45e40c01307153da17"
  },
  {
    "url": "fontawesome/svgs/solid/bus-alt.svg",
    "revision": "02b6ae355f565eef98706e90ccddaf71"
  },
  {
    "url": "fontawesome/svgs/solid/bus.svg",
    "revision": "0eda19a66494248883e85331f6827a10"
  },
  {
    "url": "fontawesome/svgs/solid/business-time.svg",
    "revision": "5d44033e44e6fa31491e0dfabd5a0c09"
  },
  {
    "url": "fontawesome/svgs/solid/calculator.svg",
    "revision": "65f8fec9d931e98c886676cbafc9ed21"
  },
  {
    "url": "fontawesome/svgs/solid/calendar-alt.svg",
    "revision": "ad2925bfa42ba73e40d53d8b4f1c3abb"
  },
  {
    "url": "fontawesome/svgs/solid/calendar-check.svg",
    "revision": "c7ea3aeae1493b7f34738063ed65243b"
  },
  {
    "url": "fontawesome/svgs/solid/calendar-day.svg",
    "revision": "c28b15ce2a3396524525462fc48aa38f"
  },
  {
    "url": "fontawesome/svgs/solid/calendar-minus.svg",
    "revision": "f50a03bdb70ee4e16a2f0577e33d9273"
  },
  {
    "url": "fontawesome/svgs/solid/calendar-plus.svg",
    "revision": "e8757ce48ac8957bbb5603db40ace2e2"
  },
  {
    "url": "fontawesome/svgs/solid/calendar-times.svg",
    "revision": "2b351cf57ea924b543d086756a7b8204"
  },
  {
    "url": "fontawesome/svgs/solid/calendar-week.svg",
    "revision": "d2f4ee3e5e58fffda3480b297e98f95d"
  },
  {
    "url": "fontawesome/svgs/solid/calendar.svg",
    "revision": "f4410bf2e7311d56fbe2b572555d8d2d"
  },
  {
    "url": "fontawesome/svgs/solid/camera-retro.svg",
    "revision": "fd42ba19cafec0bbdf53342b41c69d00"
  },
  {
    "url": "fontawesome/svgs/solid/camera.svg",
    "revision": "bbeb94896106a7f2b8955c9c8156e163"
  },
  {
    "url": "fontawesome/svgs/solid/campground.svg",
    "revision": "daf9c529a5e39145d9d722102a86faf4"
  },
  {
    "url": "fontawesome/svgs/solid/candy-cane.svg",
    "revision": "fcf686159c48fe5f32d5538c195d43ae"
  },
  {
    "url": "fontawesome/svgs/solid/cannabis.svg",
    "revision": "37cd653ddfab199bcbb9861f78b2ea82"
  },
  {
    "url": "fontawesome/svgs/solid/capsules.svg",
    "revision": "139a8c20dc761fbfd149b7293bc423b9"
  },
  {
    "url": "fontawesome/svgs/solid/car-alt.svg",
    "revision": "1099afbc7911f02ee7ea793a6865bf94"
  },
  {
    "url": "fontawesome/svgs/solid/car-battery.svg",
    "revision": "2c0a372a2a3b2f48c314939cd5c68415"
  },
  {
    "url": "fontawesome/svgs/solid/car-crash.svg",
    "revision": "870299ac112ace3ee9b3c5d895b6c502"
  },
  {
    "url": "fontawesome/svgs/solid/car-side.svg",
    "revision": "5f9ad3b485c3045538fa196b9585ec2f"
  },
  {
    "url": "fontawesome/svgs/solid/car.svg",
    "revision": "bf2f3cb73154777ef7918dd0202a69c7"
  },
  {
    "url": "fontawesome/svgs/solid/caret-down.svg",
    "revision": "9cbcc982b2faf61f7f88dc36648ca05e"
  },
  {
    "url": "fontawesome/svgs/solid/caret-left.svg",
    "revision": "fd9384c166a6f21b4c759ca30eb52436"
  },
  {
    "url": "fontawesome/svgs/solid/caret-right.svg",
    "revision": "d7b42ff2898812bfa2cd8289495e861d"
  },
  {
    "url": "fontawesome/svgs/solid/caret-square-down.svg",
    "revision": "d66290876d42c1c6bab7b4c842a26d16"
  },
  {
    "url": "fontawesome/svgs/solid/caret-square-left.svg",
    "revision": "8ed5a3b42d48be973ddf57759ecdf10b"
  },
  {
    "url": "fontawesome/svgs/solid/caret-square-right.svg",
    "revision": "29bdd2d71fad0e059453835e544b46aa"
  },
  {
    "url": "fontawesome/svgs/solid/caret-square-up.svg",
    "revision": "a3f5964e2f34a24139a692db1532f48c"
  },
  {
    "url": "fontawesome/svgs/solid/caret-up.svg",
    "revision": "28457809094dc38b94e9b1521a5d1d12"
  },
  {
    "url": "fontawesome/svgs/solid/carrot.svg",
    "revision": "506c9e6a2aff270d73ff77f483b1237e"
  },
  {
    "url": "fontawesome/svgs/solid/cart-arrow-down.svg",
    "revision": "d42d5d31aff5ef56c02a64330b05a12c"
  },
  {
    "url": "fontawesome/svgs/solid/cart-plus.svg",
    "revision": "7899d2279a195b6be5f5381a0d9bb139"
  },
  {
    "url": "fontawesome/svgs/solid/cash-register.svg",
    "revision": "1b77a6fda0e4a3a9d613565f90816045"
  },
  {
    "url": "fontawesome/svgs/solid/cat.svg",
    "revision": "8bf6aebc9564cb0b65ecbb71a8a53cfe"
  },
  {
    "url": "fontawesome/svgs/solid/certificate.svg",
    "revision": "d7b115203ceff1e5fc233376d013a8a7"
  },
  {
    "url": "fontawesome/svgs/solid/chair.svg",
    "revision": "83ae9e375fd3ee175d158405767ffcbb"
  },
  {
    "url": "fontawesome/svgs/solid/chalkboard-teacher.svg",
    "revision": "4b8b9358080638b958d4097db4e9ada6"
  },
  {
    "url": "fontawesome/svgs/solid/chalkboard.svg",
    "revision": "457292a3204b36244420353251f0d968"
  },
  {
    "url": "fontawesome/svgs/solid/charging-station.svg",
    "revision": "67e3565b1aa048fb5afaa0ff80f4ff5d"
  },
  {
    "url": "fontawesome/svgs/solid/chart-area.svg",
    "revision": "4dd1585259b0516b75e68920621dcb66"
  },
  {
    "url": "fontawesome/svgs/solid/chart-bar.svg",
    "revision": "371710b09fa1dec3c7e29a4c5f177f16"
  },
  {
    "url": "fontawesome/svgs/solid/chart-line.svg",
    "revision": "b453636e204dff000e4d7a35315601ad"
  },
  {
    "url": "fontawesome/svgs/solid/chart-pie.svg",
    "revision": "2e40500303b339c0d3a6863f7c34e39a"
  },
  {
    "url": "fontawesome/svgs/solid/check-circle.svg",
    "revision": "aef6f7d265d9f21b735320aa929e0d7a"
  },
  {
    "url": "fontawesome/svgs/solid/check-double.svg",
    "revision": "7ececfd1256df4b23bf93256ef22f37f"
  },
  {
    "url": "fontawesome/svgs/solid/check-square.svg",
    "revision": "3ad8700be41acb52efb0c7b009a257a1"
  },
  {
    "url": "fontawesome/svgs/solid/check.svg",
    "revision": "6dc82634667e844386a37b867340c645"
  },
  {
    "url": "fontawesome/svgs/solid/cheese.svg",
    "revision": "5d44ac70ef340561206c07e5e5b16f71"
  },
  {
    "url": "fontawesome/svgs/solid/chess-bishop.svg",
    "revision": "46de99704bd9cc0cd02f18ad849635bd"
  },
  {
    "url": "fontawesome/svgs/solid/chess-board.svg",
    "revision": "0fc4865e0e0a67364ce739868b281397"
  },
  {
    "url": "fontawesome/svgs/solid/chess-king.svg",
    "revision": "bf9b57d96c3c4987e45e23a6cd59db7e"
  },
  {
    "url": "fontawesome/svgs/solid/chess-knight.svg",
    "revision": "938ea5694f06653fd1c8abd15c1a5fef"
  },
  {
    "url": "fontawesome/svgs/solid/chess-pawn.svg",
    "revision": "63ce6eb9b527e21912913ba000216d21"
  },
  {
    "url": "fontawesome/svgs/solid/chess-queen.svg",
    "revision": "33948014d34d23ba4143b9ee351c8dbb"
  },
  {
    "url": "fontawesome/svgs/solid/chess-rook.svg",
    "revision": "e493299cbdb2671514fd0c7b8974ca7c"
  },
  {
    "url": "fontawesome/svgs/solid/chess.svg",
    "revision": "fc47850d795618fc9a2aa3c841a623a9"
  },
  {
    "url": "fontawesome/svgs/solid/chevron-circle-down.svg",
    "revision": "28ecaca753bb94f43957648853ab85a0"
  },
  {
    "url": "fontawesome/svgs/solid/chevron-circle-left.svg",
    "revision": "00c34accc34073bb3eb3d27f52e67478"
  },
  {
    "url": "fontawesome/svgs/solid/chevron-circle-right.svg",
    "revision": "0d443f062341aaa598b2223eb1543e7a"
  },
  {
    "url": "fontawesome/svgs/solid/chevron-circle-up.svg",
    "revision": "9f80ff1550f31083eadd56a7ea88e3d2"
  },
  {
    "url": "fontawesome/svgs/solid/chevron-down.svg",
    "revision": "b79f7d72a4a12acad952bdef728d3053"
  },
  {
    "url": "fontawesome/svgs/solid/chevron-left.svg",
    "revision": "c7552ce8c1730b613d60739e019be83c"
  },
  {
    "url": "fontawesome/svgs/solid/chevron-right.svg",
    "revision": "fa19fd039a8a44f11782bf26a330aab6"
  },
  {
    "url": "fontawesome/svgs/solid/chevron-up.svg",
    "revision": "81bc4e1ff873d441c12501d6e04a11b5"
  },
  {
    "url": "fontawesome/svgs/solid/child.svg",
    "revision": "d305d9ab2ef57a69f3158c7d46417bbd"
  },
  {
    "url": "fontawesome/svgs/solid/church.svg",
    "revision": "74efabb7e5393d5e3c3011d20d6d34ac"
  },
  {
    "url": "fontawesome/svgs/solid/circle-notch.svg",
    "revision": "4cccc6b0c98604139c6db8fbdb2c47fe"
  },
  {
    "url": "fontawesome/svgs/solid/circle.svg",
    "revision": "2811b8ea831c00fd0b933b7210f8c118"
  },
  {
    "url": "fontawesome/svgs/solid/city.svg",
    "revision": "967a2ef619faafe63287e4de6997e42a"
  },
  {
    "url": "fontawesome/svgs/solid/clinic-medical.svg",
    "revision": "635ad20c8ff33312864e4f612b86a6ef"
  },
  {
    "url": "fontawesome/svgs/solid/clipboard-check.svg",
    "revision": "853580314946243bd6c5d23c038c5dfe"
  },
  {
    "url": "fontawesome/svgs/solid/clipboard-list.svg",
    "revision": "5648b14553c14fd6b257c780a393e4ea"
  },
  {
    "url": "fontawesome/svgs/solid/clipboard.svg",
    "revision": "f0ea2796bcf00fd281571e8bce7b4047"
  },
  {
    "url": "fontawesome/svgs/solid/clock.svg",
    "revision": "819298c7c4212cdeec2e89599a42a943"
  },
  {
    "url": "fontawesome/svgs/solid/clone.svg",
    "revision": "62f2107ecf733d5a1c50a62333b8e011"
  },
  {
    "url": "fontawesome/svgs/solid/closed-captioning.svg",
    "revision": "3fcceae3c52cd0b3f1e277e14e128923"
  },
  {
    "url": "fontawesome/svgs/solid/cloud-download-alt.svg",
    "revision": "df2f70bfed99b86a6f33372a4044b7b0"
  },
  {
    "url": "fontawesome/svgs/solid/cloud-meatball.svg",
    "revision": "df53c8f9ad039a4b9c94175cb6645666"
  },
  {
    "url": "fontawesome/svgs/solid/cloud-moon-rain.svg",
    "revision": "cf76f52c789e8e828ec43d45c19e0621"
  },
  {
    "url": "fontawesome/svgs/solid/cloud-moon.svg",
    "revision": "163b031a544612a40b383485db55c206"
  },
  {
    "url": "fontawesome/svgs/solid/cloud-rain.svg",
    "revision": "34b9aca4ab9ba4dbf5e062fee9af253c"
  },
  {
    "url": "fontawesome/svgs/solid/cloud-showers-heavy.svg",
    "revision": "7761521d87574c7757d70ef9927b540a"
  },
  {
    "url": "fontawesome/svgs/solid/cloud-sun-rain.svg",
    "revision": "91cf5c87e1cd948d92b585bf651d1813"
  },
  {
    "url": "fontawesome/svgs/solid/cloud-sun.svg",
    "revision": "6179200408f6b0c4ae640d147e1c6fb8"
  },
  {
    "url": "fontawesome/svgs/solid/cloud-upload-alt.svg",
    "revision": "6e376f33d182b74f40181a5ac84de32d"
  },
  {
    "url": "fontawesome/svgs/solid/cloud.svg",
    "revision": "e5a308f2c2052745523e4ced1c69a038"
  },
  {
    "url": "fontawesome/svgs/solid/cocktail.svg",
    "revision": "220cfacb8f7f2c70b58179a19c462024"
  },
  {
    "url": "fontawesome/svgs/solid/code-branch.svg",
    "revision": "2f32860d0e3bba86c8eec17ef55ddec1"
  },
  {
    "url": "fontawesome/svgs/solid/code.svg",
    "revision": "b1f87b86f5313710ba75c3a56b65bd31"
  },
  {
    "url": "fontawesome/svgs/solid/coffee.svg",
    "revision": "23423edbaf69d205f376fbb598f7427a"
  },
  {
    "url": "fontawesome/svgs/solid/cog.svg",
    "revision": "8db53187ecfba9fa2a36378fb6c84e06"
  },
  {
    "url": "fontawesome/svgs/solid/cogs.svg",
    "revision": "9c1585ea07c748548a0675def2b5f853"
  },
  {
    "url": "fontawesome/svgs/solid/coins.svg",
    "revision": "f1b7a5a76363aaa4e84a1d2e51d6bb16"
  },
  {
    "url": "fontawesome/svgs/solid/columns.svg",
    "revision": "915520b0d985077679f3327477ca9ceb"
  },
  {
    "url": "fontawesome/svgs/solid/comment-alt.svg",
    "revision": "d94a55b16eb6f9086744e1161692bc95"
  },
  {
    "url": "fontawesome/svgs/solid/comment-dollar.svg",
    "revision": "75b0936427c126664a2da74c95331f09"
  },
  {
    "url": "fontawesome/svgs/solid/comment-dots.svg",
    "revision": "d00076e367673ce734604ec3dfb99500"
  },
  {
    "url": "fontawesome/svgs/solid/comment-medical.svg",
    "revision": "db59b1cad9aff17ed540210772d44b21"
  },
  {
    "url": "fontawesome/svgs/solid/comment-slash.svg",
    "revision": "7ec023692a6de19e18c5b6c023bdedbb"
  },
  {
    "url": "fontawesome/svgs/solid/comment.svg",
    "revision": "c92ad2b4c2744da74552eef0a3d7dbfe"
  },
  {
    "url": "fontawesome/svgs/solid/comments-dollar.svg",
    "revision": "7691a54543fd1cbe356ba14fcb102640"
  },
  {
    "url": "fontawesome/svgs/solid/comments.svg",
    "revision": "a6917b816a2b88195bf23b6bbb822254"
  },
  {
    "url": "fontawesome/svgs/solid/compact-disc.svg",
    "revision": "2b156813ccf645b31b3d85f7ef13d9d3"
  },
  {
    "url": "fontawesome/svgs/solid/compass.svg",
    "revision": "ef2af813be0666ed14d00f4657fee816"
  },
  {
    "url": "fontawesome/svgs/solid/compress-arrows-alt.svg",
    "revision": "0ccef47e02e29f8c95d6d77c00ae398a"
  },
  {
    "url": "fontawesome/svgs/solid/compress.svg",
    "revision": "8565709e5f1c9804725154dbf2a98eea"
  },
  {
    "url": "fontawesome/svgs/solid/concierge-bell.svg",
    "revision": "e5aaa89d5b59b9334802743cf225dcda"
  },
  {
    "url": "fontawesome/svgs/solid/cookie-bite.svg",
    "revision": "4b95a7fc0042513b25f85196610114fd"
  },
  {
    "url": "fontawesome/svgs/solid/cookie.svg",
    "revision": "37e9ca75cd3344f81a56453e7977df4c"
  },
  {
    "url": "fontawesome/svgs/solid/copy.svg",
    "revision": "9498bf4bf142e42569d5ad28c024a36c"
  },
  {
    "url": "fontawesome/svgs/solid/copyright.svg",
    "revision": "cc3ce5d3388869e3036e33f9383b125f"
  },
  {
    "url": "fontawesome/svgs/solid/couch.svg",
    "revision": "b14eea7b158be6aceafd89bfd1e22dc9"
  },
  {
    "url": "fontawesome/svgs/solid/credit-card.svg",
    "revision": "3504ab56fe3c4dbb0e342b699df609e6"
  },
  {
    "url": "fontawesome/svgs/solid/crop-alt.svg",
    "revision": "8eab26c727cd43f8e8d952fd94deef4f"
  },
  {
    "url": "fontawesome/svgs/solid/crop.svg",
    "revision": "b313cb03bbd623880097d2e281af3e54"
  },
  {
    "url": "fontawesome/svgs/solid/cross.svg",
    "revision": "faf0f3938101ad98d64d514499c3656b"
  },
  {
    "url": "fontawesome/svgs/solid/crosshairs.svg",
    "revision": "80b10d7a4ce825f247408465e55445ca"
  },
  {
    "url": "fontawesome/svgs/solid/crow.svg",
    "revision": "c665be62cb3468b2e18e1b859b7ef11d"
  },
  {
    "url": "fontawesome/svgs/solid/crown.svg",
    "revision": "52cc8d6b84d42e16d3a19d60be285202"
  },
  {
    "url": "fontawesome/svgs/solid/crutch.svg",
    "revision": "9e805d7dcb5cd861871423f43d2d1670"
  },
  {
    "url": "fontawesome/svgs/solid/cube.svg",
    "revision": "ccfab302aacc6fc08d7037b95f0bdfbe"
  },
  {
    "url": "fontawesome/svgs/solid/cubes.svg",
    "revision": "53078eac048f3a4e69d3fdd95dc51d97"
  },
  {
    "url": "fontawesome/svgs/solid/cut.svg",
    "revision": "289edbe81398d4af4b801b29c687db1d"
  },
  {
    "url": "fontawesome/svgs/solid/database.svg",
    "revision": "ad48bf75e9fe0530e771feda2acebd48"
  },
  {
    "url": "fontawesome/svgs/solid/deaf.svg",
    "revision": "136203def900a679a2b67676090bee16"
  },
  {
    "url": "fontawesome/svgs/solid/democrat.svg",
    "revision": "7af94ddacf61b5eb88bb6522feed79b6"
  },
  {
    "url": "fontawesome/svgs/solid/desktop.svg",
    "revision": "0ece97ff1f42c8b7182f1135d2daad31"
  },
  {
    "url": "fontawesome/svgs/solid/dharmachakra.svg",
    "revision": "91a711cd78ecc1dedb8cf4959472762a"
  },
  {
    "url": "fontawesome/svgs/solid/diagnoses.svg",
    "revision": "5b50074dcd394fabb4f5d469755959a9"
  },
  {
    "url": "fontawesome/svgs/solid/dice-d20.svg",
    "revision": "601bf3653036ecceccd04526059f5048"
  },
  {
    "url": "fontawesome/svgs/solid/dice-d6.svg",
    "revision": "2092691db12ce3e0edd2b99eee3ced49"
  },
  {
    "url": "fontawesome/svgs/solid/dice-five.svg",
    "revision": "2fc840f0d7706be565f772a338e3b6aa"
  },
  {
    "url": "fontawesome/svgs/solid/dice-four.svg",
    "revision": "15df5dc76f6d57ed7fbec56951d9d339"
  },
  {
    "url": "fontawesome/svgs/solid/dice-one.svg",
    "revision": "dd989e86793e898d0efcde6f0bf2b91e"
  },
  {
    "url": "fontawesome/svgs/solid/dice-six.svg",
    "revision": "3aa9af273068807fee42d7ca61b4a924"
  },
  {
    "url": "fontawesome/svgs/solid/dice-three.svg",
    "revision": "2d8ab18a1258bdc2a0989d2468b0a3de"
  },
  {
    "url": "fontawesome/svgs/solid/dice-two.svg",
    "revision": "87446ed79cd7650a08786e158e1a6552"
  },
  {
    "url": "fontawesome/svgs/solid/dice.svg",
    "revision": "fb365a86c9da1b7881bec6edcb95d756"
  },
  {
    "url": "fontawesome/svgs/solid/digital-tachograph.svg",
    "revision": "b4b841c34d69b0d47add2ece462b2d7c"
  },
  {
    "url": "fontawesome/svgs/solid/directions.svg",
    "revision": "4b41bee6a47c98204b15d65cbd4c767a"
  },
  {
    "url": "fontawesome/svgs/solid/divide.svg",
    "revision": "c2137155873933427b548bff25c5e1d9"
  },
  {
    "url": "fontawesome/svgs/solid/dizzy.svg",
    "revision": "f0f1b74f98d1a41d0ff10178ce1a136b"
  },
  {
    "url": "fontawesome/svgs/solid/dna.svg",
    "revision": "e515197764cd9b2cf0207766d981ebdb"
  },
  {
    "url": "fontawesome/svgs/solid/dog.svg",
    "revision": "89963d6ada10a7d5a8d94d91d5a38dc9"
  },
  {
    "url": "fontawesome/svgs/solid/dollar-sign.svg",
    "revision": "44fd6802de68c36c11fdcf239a4c0a61"
  },
  {
    "url": "fontawesome/svgs/solid/dolly-flatbed.svg",
    "revision": "8e49c78a808844398c410d49bb27ad9b"
  },
  {
    "url": "fontawesome/svgs/solid/dolly.svg",
    "revision": "97e64481f93d0fd3b2ff9596a2f9792a"
  },
  {
    "url": "fontawesome/svgs/solid/donate.svg",
    "revision": "4b5f2b7b0a31baab3a7b70b3bc8d02d6"
  },
  {
    "url": "fontawesome/svgs/solid/door-closed.svg",
    "revision": "3981b51b70835854eaf3e872d98d6e3a"
  },
  {
    "url": "fontawesome/svgs/solid/door-open.svg",
    "revision": "7af067d941c17331fd7cc9be9064592d"
  },
  {
    "url": "fontawesome/svgs/solid/dot-circle.svg",
    "revision": "36f07f08c9d7df269957104ead2f595f"
  },
  {
    "url": "fontawesome/svgs/solid/dove.svg",
    "revision": "90001e9339c582704a859fa6fc6d3a27"
  },
  {
    "url": "fontawesome/svgs/solid/download.svg",
    "revision": "5c58b06186556b33316a916d05b169a5"
  },
  {
    "url": "fontawesome/svgs/solid/drafting-compass.svg",
    "revision": "5f80111d28decf808535bfe947923dcb"
  },
  {
    "url": "fontawesome/svgs/solid/dragon.svg",
    "revision": "c65330712db988234747d8cb874117d0"
  },
  {
    "url": "fontawesome/svgs/solid/draw-polygon.svg",
    "revision": "2bf9097ce00968d6bc6ad2776e4f08fe"
  },
  {
    "url": "fontawesome/svgs/solid/drum-steelpan.svg",
    "revision": "1237070a6d3aaca81b9b736cc1279793"
  },
  {
    "url": "fontawesome/svgs/solid/drum.svg",
    "revision": "62bf47ffeb2bf232393e4d19353815c6"
  },
  {
    "url": "fontawesome/svgs/solid/drumstick-bite.svg",
    "revision": "b167141c3c5993f7d12214d1d1d9f278"
  },
  {
    "url": "fontawesome/svgs/solid/dumbbell.svg",
    "revision": "7f05ac62348e4f42e5decf97992d348d"
  },
  {
    "url": "fontawesome/svgs/solid/dumpster-fire.svg",
    "revision": "0eca254612ce5b07db73c2c00e7b53eb"
  },
  {
    "url": "fontawesome/svgs/solid/dumpster.svg",
    "revision": "7c52ca9bc15f14ae786e37284820ff8f"
  },
  {
    "url": "fontawesome/svgs/solid/dungeon.svg",
    "revision": "098cf78ca4c5f94de23d103dd9973167"
  },
  {
    "url": "fontawesome/svgs/solid/edit.svg",
    "revision": "eb9cee0e7537ce82a5a526f1f1d3f09a"
  },
  {
    "url": "fontawesome/svgs/solid/egg.svg",
    "revision": "8883dd75f8c3930b469c11ebb61cf43f"
  },
  {
    "url": "fontawesome/svgs/solid/eject.svg",
    "revision": "44c1148d3d58f2d9efe7d5761b20d9e0"
  },
  {
    "url": "fontawesome/svgs/solid/ellipsis-h.svg",
    "revision": "30fc3bdc738120178ef2bbe5b53a2902"
  },
  {
    "url": "fontawesome/svgs/solid/ellipsis-v.svg",
    "revision": "bf55a529737494c73af1498edbff84b3"
  },
  {
    "url": "fontawesome/svgs/solid/envelope-open-text.svg",
    "revision": "997b1656034860db76902f3e9c538720"
  },
  {
    "url": "fontawesome/svgs/solid/envelope-open.svg",
    "revision": "0dd9a658eebf55a2bf2261cbbe806122"
  },
  {
    "url": "fontawesome/svgs/solid/envelope-square.svg",
    "revision": "5a6ce3361478e21cbbeea2c926484ad5"
  },
  {
    "url": "fontawesome/svgs/solid/envelope.svg",
    "revision": "39c094f9f51fb898078a09cdea6e05b4"
  },
  {
    "url": "fontawesome/svgs/solid/equals.svg",
    "revision": "9af95fcb127c17096ae7c3513d749cfa"
  },
  {
    "url": "fontawesome/svgs/solid/eraser.svg",
    "revision": "b1d6e5c9800bee7c875d1dadd591be20"
  },
  {
    "url": "fontawesome/svgs/solid/ethernet.svg",
    "revision": "4001aac75a6d79e3b3fbb51d62e713ba"
  },
  {
    "url": "fontawesome/svgs/solid/euro-sign.svg",
    "revision": "a2d499fc0ea329f011346bd66681f8b0"
  },
  {
    "url": "fontawesome/svgs/solid/exchange-alt.svg",
    "revision": "c1b6511c0276a2ed6a8f9b192a4c0e1c"
  },
  {
    "url": "fontawesome/svgs/solid/exclamation-circle.svg",
    "revision": "86ec05a0466b3370ca70b87a5b916e78"
  },
  {
    "url": "fontawesome/svgs/solid/exclamation-triangle.svg",
    "revision": "ea10af7f06612f552afed255e19e4b95"
  },
  {
    "url": "fontawesome/svgs/solid/exclamation.svg",
    "revision": "607cd57cf7ad553e6c3a7d0a2a0048c2"
  },
  {
    "url": "fontawesome/svgs/solid/expand-arrows-alt.svg",
    "revision": "da1685aea587e0d4fd664b7ad475e4ed"
  },
  {
    "url": "fontawesome/svgs/solid/expand.svg",
    "revision": "2876c3c51f8573c62ec7ede8ca8ada3a"
  },
  {
    "url": "fontawesome/svgs/solid/external-link-alt.svg",
    "revision": "67629f3fb3fa7294844c68ac80736c65"
  },
  {
    "url": "fontawesome/svgs/solid/external-link-square-alt.svg",
    "revision": "9f62e363d285a85487f78779c7a2ef56"
  },
  {
    "url": "fontawesome/svgs/solid/eye-dropper.svg",
    "revision": "15690467e4265719942d028988aeddad"
  },
  {
    "url": "fontawesome/svgs/solid/eye-slash.svg",
    "revision": "9c85edaf43b246dfdc5d31f32f6a8bdd"
  },
  {
    "url": "fontawesome/svgs/solid/eye.svg",
    "revision": "0b2869a0e871603737ec41fe6a799c35"
  },
  {
    "url": "fontawesome/svgs/solid/fan.svg",
    "revision": "969a0fb188aa6275ebef7b562e3dd970"
  },
  {
    "url": "fontawesome/svgs/solid/fast-backward.svg",
    "revision": "bc802a2590a4d086a5172bd58a6abb37"
  },
  {
    "url": "fontawesome/svgs/solid/fast-forward.svg",
    "revision": "b11296b0abbdfd10988406ae023d0c1c"
  },
  {
    "url": "fontawesome/svgs/solid/fax.svg",
    "revision": "18dce12a23c4ac394adc192e9c387d85"
  },
  {
    "url": "fontawesome/svgs/solid/feather-alt.svg",
    "revision": "5ade927c1fe1f6525ce08cf7679e5974"
  },
  {
    "url": "fontawesome/svgs/solid/feather.svg",
    "revision": "3a3913928aeeddde4829ea5a88745e86"
  },
  {
    "url": "fontawesome/svgs/solid/female.svg",
    "revision": "06c7437f56217f91446842e049835f9d"
  },
  {
    "url": "fontawesome/svgs/solid/fighter-jet.svg",
    "revision": "fc66f806b6906b3e5e7801054eea99fb"
  },
  {
    "url": "fontawesome/svgs/solid/file-alt.svg",
    "revision": "ce7a496c9f52608a1b99b9d227f2051d"
  },
  {
    "url": "fontawesome/svgs/solid/file-archive.svg",
    "revision": "651eb6518f484d4ee59a32088f3853a4"
  },
  {
    "url": "fontawesome/svgs/solid/file-audio.svg",
    "revision": "9db9c0346c16afb3be2ac3a56a7f9ff3"
  },
  {
    "url": "fontawesome/svgs/solid/file-code.svg",
    "revision": "89972a85489eba6170ba7d0d3f921b4c"
  },
  {
    "url": "fontawesome/svgs/solid/file-contract.svg",
    "revision": "160108eb0e008e68b11ddf31f1a02d98"
  },
  {
    "url": "fontawesome/svgs/solid/file-csv.svg",
    "revision": "60cbf309348de0e47001e5d3d54ca835"
  },
  {
    "url": "fontawesome/svgs/solid/file-download.svg",
    "revision": "de312238955e26a521077d165901547f"
  },
  {
    "url": "fontawesome/svgs/solid/file-excel.svg",
    "revision": "2a5528dc76767eac28afcc44ebfc0d25"
  },
  {
    "url": "fontawesome/svgs/solid/file-export.svg",
    "revision": "51ffd42ccb5e2ba58bb2cb8291728786"
  },
  {
    "url": "fontawesome/svgs/solid/file-image.svg",
    "revision": "f8d28c3e5758f224a7605f5ad41e39e6"
  },
  {
    "url": "fontawesome/svgs/solid/file-import.svg",
    "revision": "7d4a1605d06a4da2bff5c78c3d6aa7a5"
  },
  {
    "url": "fontawesome/svgs/solid/file-invoice-dollar.svg",
    "revision": "69052305c8c626d85d44b90ab0ed43b4"
  },
  {
    "url": "fontawesome/svgs/solid/file-invoice.svg",
    "revision": "f864f7aca1f130cfad87f7f098f6244a"
  },
  {
    "url": "fontawesome/svgs/solid/file-medical-alt.svg",
    "revision": "8de3eb1197998256de9b21a324809a68"
  },
  {
    "url": "fontawesome/svgs/solid/file-medical.svg",
    "revision": "6eed2cee9d941705b77349fc83a7bec5"
  },
  {
    "url": "fontawesome/svgs/solid/file-pdf.svg",
    "revision": "417affebacc1b1196d5f80fd0df9985c"
  },
  {
    "url": "fontawesome/svgs/solid/file-powerpoint.svg",
    "revision": "e329f3e83e44194264786b1d2b792e4f"
  },
  {
    "url": "fontawesome/svgs/solid/file-prescription.svg",
    "revision": "d1870f38b3859a1f55ae7dffdbf54412"
  },
  {
    "url": "fontawesome/svgs/solid/file-signature.svg",
    "revision": "31f67b8fb2c06bcd56060096e91e0b8e"
  },
  {
    "url": "fontawesome/svgs/solid/file-upload.svg",
    "revision": "cfbb142836ea9c5f0566ed8f8958d84c"
  },
  {
    "url": "fontawesome/svgs/solid/file-video.svg",
    "revision": "ab3f6eb31bd578508a6c0acaf7af32d9"
  },
  {
    "url": "fontawesome/svgs/solid/file-word.svg",
    "revision": "99f494090fb329b0c8643ac07937447a"
  },
  {
    "url": "fontawesome/svgs/solid/file.svg",
    "revision": "248c4289beabe32d14a5bf286fa8d285"
  },
  {
    "url": "fontawesome/svgs/solid/fill-drip.svg",
    "revision": "dbbe6379efc84a610d333ac1dfade753"
  },
  {
    "url": "fontawesome/svgs/solid/fill.svg",
    "revision": "aae1bc6c161204063f053d357ecb3511"
  },
  {
    "url": "fontawesome/svgs/solid/film.svg",
    "revision": "cc9a78760c2d762ad474a326b704e896"
  },
  {
    "url": "fontawesome/svgs/solid/filter.svg",
    "revision": "96505f4baf672e1905d179a8b033d9b0"
  },
  {
    "url": "fontawesome/svgs/solid/fingerprint.svg",
    "revision": "1d1ecc7ff94b06580d29c983a3d319f9"
  },
  {
    "url": "fontawesome/svgs/solid/fire-alt.svg",
    "revision": "10b0f7508f2069158b1933de1d846c8f"
  },
  {
    "url": "fontawesome/svgs/solid/fire-extinguisher.svg",
    "revision": "a838725cf66373fb0999a79c4fdecf4b"
  },
  {
    "url": "fontawesome/svgs/solid/fire.svg",
    "revision": "08d201a5dae8e4890dc8591182b03778"
  },
  {
    "url": "fontawesome/svgs/solid/first-aid.svg",
    "revision": "1a35e4f2906b1d8683b20a816695c639"
  },
  {
    "url": "fontawesome/svgs/solid/fish.svg",
    "revision": "cf9bb64ddb6515ba0f6010323e054324"
  },
  {
    "url": "fontawesome/svgs/solid/fist-raised.svg",
    "revision": "6038aa67374685fc551801a8f1b35eca"
  },
  {
    "url": "fontawesome/svgs/solid/flag-checkered.svg",
    "revision": "d41798621e2d1b29cb4a3748d324febb"
  },
  {
    "url": "fontawesome/svgs/solid/flag-usa.svg",
    "revision": "38e1e03addb49425629e0f8e3689e988"
  },
  {
    "url": "fontawesome/svgs/solid/flag.svg",
    "revision": "bed2a7091aa5b0da49627b6c17e8cde6"
  },
  {
    "url": "fontawesome/svgs/solid/flask.svg",
    "revision": "cbf8a990313d1769fe3a823503d2ce5f"
  },
  {
    "url": "fontawesome/svgs/solid/flushed.svg",
    "revision": "b416bc1c571fcb8ec00b73be07d45bf0"
  },
  {
    "url": "fontawesome/svgs/solid/folder-minus.svg",
    "revision": "5a0a784ccf35fa21aee285b4ab4d6f78"
  },
  {
    "url": "fontawesome/svgs/solid/folder-open.svg",
    "revision": "e647cb24c088580aabbf50c2dff51a2c"
  },
  {
    "url": "fontawesome/svgs/solid/folder-plus.svg",
    "revision": "83563d78be2dea5d32009072c6a69804"
  },
  {
    "url": "fontawesome/svgs/solid/folder.svg",
    "revision": "6a0879ece39c82576f1632f03908584f"
  },
  {
    "url": "fontawesome/svgs/solid/font-awesome-logo-full.svg",
    "revision": "5258b45beb7504db7fb80f64b5abdb1f"
  },
  {
    "url": "fontawesome/svgs/solid/font.svg",
    "revision": "cc47c77f8f190c1e89e5e931a2d50b38"
  },
  {
    "url": "fontawesome/svgs/solid/football-ball.svg",
    "revision": "0f3319941e155e7f08a2fdad5828cac4"
  },
  {
    "url": "fontawesome/svgs/solid/forward.svg",
    "revision": "16bbd97a5dc2e401eccf9928a4f0b326"
  },
  {
    "url": "fontawesome/svgs/solid/frog.svg",
    "revision": "0fd8787cf957c155d4f340f78e92a656"
  },
  {
    "url": "fontawesome/svgs/solid/frown-open.svg",
    "revision": "7d8516be0c300ba1030282e13fad4758"
  },
  {
    "url": "fontawesome/svgs/solid/frown.svg",
    "revision": "277a886e28b379efe00a8ca4f742c4af"
  },
  {
    "url": "fontawesome/svgs/solid/funnel-dollar.svg",
    "revision": "d92afa758795c5954a62de12657411ab"
  },
  {
    "url": "fontawesome/svgs/solid/futbol.svg",
    "revision": "b076a6925377d4eb15ff481fd89a8ffa"
  },
  {
    "url": "fontawesome/svgs/solid/gamepad.svg",
    "revision": "f3aae6ebbe085d9ba0e526ae320d7365"
  },
  {
    "url": "fontawesome/svgs/solid/gas-pump.svg",
    "revision": "12d75192100e92cfa002ecb0fba11a7d"
  },
  {
    "url": "fontawesome/svgs/solid/gavel.svg",
    "revision": "1aab12d8662f0dfd91cb96a0170d1c69"
  },
  {
    "url": "fontawesome/svgs/solid/gem.svg",
    "revision": "2f7e010bd9fad2df22979f4d66392b8e"
  },
  {
    "url": "fontawesome/svgs/solid/genderless.svg",
    "revision": "baa7f02c8682e333f77fa190b9ebb905"
  },
  {
    "url": "fontawesome/svgs/solid/ghost.svg",
    "revision": "8d83a5b463d0f0db6a65f1524474b96c"
  },
  {
    "url": "fontawesome/svgs/solid/gift.svg",
    "revision": "09ecabcbd7983479f909d32eda0469e1"
  },
  {
    "url": "fontawesome/svgs/solid/gifts.svg",
    "revision": "ee3a38d064e0e8909cbd7ef4ccbf43d5"
  },
  {
    "url": "fontawesome/svgs/solid/glass-cheers.svg",
    "revision": "33dc9d52e7db5e960cfe00ecfa0b12e3"
  },
  {
    "url": "fontawesome/svgs/solid/glass-martini-alt.svg",
    "revision": "dfadcf66d564421d501d11869deaac35"
  },
  {
    "url": "fontawesome/svgs/solid/glass-martini.svg",
    "revision": "74edc24aebf49c2d1bde2a8f45f44ad5"
  },
  {
    "url": "fontawesome/svgs/solid/glass-whiskey.svg",
    "revision": "c0436a778ad435506314527a0a9c4880"
  },
  {
    "url": "fontawesome/svgs/solid/glasses.svg",
    "revision": "7517b1d5ce60933e5828a2321fa28e8f"
  },
  {
    "url": "fontawesome/svgs/solid/globe-africa.svg",
    "revision": "5bf96b0b2587576cf48d57af047b10f2"
  },
  {
    "url": "fontawesome/svgs/solid/globe-americas.svg",
    "revision": "1f4ead63c4f7e635b437b0dbdb37495e"
  },
  {
    "url": "fontawesome/svgs/solid/globe-asia.svg",
    "revision": "e4f7f7010865070bbff806e6c6a19829"
  },
  {
    "url": "fontawesome/svgs/solid/globe-europe.svg",
    "revision": "dfe8ee3bba8987e166614c3cc61d3817"
  },
  {
    "url": "fontawesome/svgs/solid/globe.svg",
    "revision": "eca1a22913f3603df3d8fa6979848a5e"
  },
  {
    "url": "fontawesome/svgs/solid/golf-ball.svg",
    "revision": "6b4b307f72e3ab1ecdcb27a1565fa37e"
  },
  {
    "url": "fontawesome/svgs/solid/gopuram.svg",
    "revision": "951e9e4af722c5f8bd59c573d83fb6d6"
  },
  {
    "url": "fontawesome/svgs/solid/graduation-cap.svg",
    "revision": "1409ec1c4849b21cc7762189d38dbc1d"
  },
  {
    "url": "fontawesome/svgs/solid/greater-than-equal.svg",
    "revision": "9043d450b6175d9872ed85bc608b8793"
  },
  {
    "url": "fontawesome/svgs/solid/greater-than.svg",
    "revision": "a3be2d4f2bd244e42c83a8f2943c6ce2"
  },
  {
    "url": "fontawesome/svgs/solid/grimace.svg",
    "revision": "c89c1c8f4a0afcd164267f5b3c884381"
  },
  {
    "url": "fontawesome/svgs/solid/grin-alt.svg",
    "revision": "193a788475cca939e45722b3fa84e8ee"
  },
  {
    "url": "fontawesome/svgs/solid/grin-beam-sweat.svg",
    "revision": "405e0377fd86046849287b601943300f"
  },
  {
    "url": "fontawesome/svgs/solid/grin-beam.svg",
    "revision": "002fe3244dc47a901be626f6e1ae589e"
  },
  {
    "url": "fontawesome/svgs/solid/grin-hearts.svg",
    "revision": "65cc11ca1399a116b20bc58f1236064f"
  },
  {
    "url": "fontawesome/svgs/solid/grin-squint-tears.svg",
    "revision": "bf6c953a7b74822aa51428ce5d97e07c"
  },
  {
    "url": "fontawesome/svgs/solid/grin-squint.svg",
    "revision": "2ec62cf91f99da7ef4806ac2e3c8606c"
  },
  {
    "url": "fontawesome/svgs/solid/grin-stars.svg",
    "revision": "e03810216282badb2c71023143eec6db"
  },
  {
    "url": "fontawesome/svgs/solid/grin-tears.svg",
    "revision": "fdeb5308cd9fe30cba75926707bcacd4"
  },
  {
    "url": "fontawesome/svgs/solid/grin-tongue-squint.svg",
    "revision": "55ec3c2c75b1024d7a1f379346fd7656"
  },
  {
    "url": "fontawesome/svgs/solid/grin-tongue-wink.svg",
    "revision": "a52bedac0300b804228970c8159ac11e"
  },
  {
    "url": "fontawesome/svgs/solid/grin-tongue.svg",
    "revision": "6e20e1c176600383fd5aa9f138b65c7d"
  },
  {
    "url": "fontawesome/svgs/solid/grin-wink.svg",
    "revision": "b852cb03ef4fb468a6e9580028c55c36"
  },
  {
    "url": "fontawesome/svgs/solid/grin.svg",
    "revision": "c178ee89ccf0e7e697766cf33c4710b9"
  },
  {
    "url": "fontawesome/svgs/solid/grip-horizontal.svg",
    "revision": "a5f2f6c1c2cead3eadcfb477aab2e282"
  },
  {
    "url": "fontawesome/svgs/solid/grip-lines-vertical.svg",
    "revision": "86428561f65130b4858e43f44b829028"
  },
  {
    "url": "fontawesome/svgs/solid/grip-lines.svg",
    "revision": "470219dfe2a26ce78c86a33524620634"
  },
  {
    "url": "fontawesome/svgs/solid/grip-vertical.svg",
    "revision": "f1a8c0288e8ee6647b2bbf80473c4a5d"
  },
  {
    "url": "fontawesome/svgs/solid/guitar.svg",
    "revision": "205b1e6eb9661ef74312b53e2b1a669f"
  },
  {
    "url": "fontawesome/svgs/solid/h-square.svg",
    "revision": "9576a77e0f10bfd5be03992c68b154e4"
  },
  {
    "url": "fontawesome/svgs/solid/hamburger.svg",
    "revision": "7c781bcaf173a15ba4f5586103de4f1e"
  },
  {
    "url": "fontawesome/svgs/solid/hammer.svg",
    "revision": "e5bd88ba4dd08677c3ec769933c6fb0d"
  },
  {
    "url": "fontawesome/svgs/solid/hamsa.svg",
    "revision": "85d88d0d940048a6a83e83de89a749f0"
  },
  {
    "url": "fontawesome/svgs/solid/hand-holding-heart.svg",
    "revision": "1444f9e4e98199442609ac46693224e7"
  },
  {
    "url": "fontawesome/svgs/solid/hand-holding-usd.svg",
    "revision": "221b10a212620854f22bacbea04b806d"
  },
  {
    "url": "fontawesome/svgs/solid/hand-holding.svg",
    "revision": "12370445ac81186badd8bbdf176759ea"
  },
  {
    "url": "fontawesome/svgs/solid/hand-lizard.svg",
    "revision": "962c81b360dcea95806c08601774c448"
  },
  {
    "url": "fontawesome/svgs/solid/hand-middle-finger.svg",
    "revision": "97bbdef987583ac15bbd65ab434719a1"
  },
  {
    "url": "fontawesome/svgs/solid/hand-paper.svg",
    "revision": "d78ade254d515c8246639b20ccef5315"
  },
  {
    "url": "fontawesome/svgs/solid/hand-peace.svg",
    "revision": "ae36b51cc8ea1a95d8ce3f5c1f23d0b1"
  },
  {
    "url": "fontawesome/svgs/solid/hand-point-down.svg",
    "revision": "4abb01d25629c607535fd0e7d2cf96d8"
  },
  {
    "url": "fontawesome/svgs/solid/hand-point-left.svg",
    "revision": "e6bf260bc7dee5630923062cdff1c232"
  },
  {
    "url": "fontawesome/svgs/solid/hand-point-right.svg",
    "revision": "1433aa5b1403980e36d5469f58503720"
  },
  {
    "url": "fontawesome/svgs/solid/hand-point-up.svg",
    "revision": "507a0998163645470a77e9543596f2a7"
  },
  {
    "url": "fontawesome/svgs/solid/hand-pointer.svg",
    "revision": "f2ab05937c37127e5d4347b632a34e6c"
  },
  {
    "url": "fontawesome/svgs/solid/hand-rock.svg",
    "revision": "4170860143c86aedc374b02824b86f9a"
  },
  {
    "url": "fontawesome/svgs/solid/hand-scissors.svg",
    "revision": "278b40c9c38216d4b45e2c0666ab2a50"
  },
  {
    "url": "fontawesome/svgs/solid/hand-spock.svg",
    "revision": "498554dd73d7d949711e0e8d4db61c33"
  },
  {
    "url": "fontawesome/svgs/solid/hands-helping.svg",
    "revision": "4bd5a6fc3ff18b950ae723a57803defb"
  },
  {
    "url": "fontawesome/svgs/solid/hands.svg",
    "revision": "c1005f891991c1d1c210e088b438db22"
  },
  {
    "url": "fontawesome/svgs/solid/handshake.svg",
    "revision": "6c7fc1581d68d82b110b9142dd0a27eb"
  },
  {
    "url": "fontawesome/svgs/solid/hanukiah.svg",
    "revision": "3a6dc4cbee220a4e714ad7b1c6c2ee08"
  },
  {
    "url": "fontawesome/svgs/solid/hard-hat.svg",
    "revision": "9bd179e8038d4636202e5bd5feab699c"
  },
  {
    "url": "fontawesome/svgs/solid/hashtag.svg",
    "revision": "9a5f2f33df206f45664da6347a70efa7"
  },
  {
    "url": "fontawesome/svgs/solid/hat-wizard.svg",
    "revision": "ad6618bc206cef2647ed31f1d4960a81"
  },
  {
    "url": "fontawesome/svgs/solid/haykal.svg",
    "revision": "805c3eb975cea19e16822f209f05c432"
  },
  {
    "url": "fontawesome/svgs/solid/hdd.svg",
    "revision": "ade80ece16968a8d82a092aebac136f0"
  },
  {
    "url": "fontawesome/svgs/solid/heading.svg",
    "revision": "95b984f4f740acdbf3e26470eebd3e38"
  },
  {
    "url": "fontawesome/svgs/solid/headphones-alt.svg",
    "revision": "81a8e1aeb7d3557a8baadb0aafc9b0e5"
  },
  {
    "url": "fontawesome/svgs/solid/headphones.svg",
    "revision": "bb0b8bdfee23a3a90a7ec7b87a913a12"
  },
  {
    "url": "fontawesome/svgs/solid/headset.svg",
    "revision": "295ea6ce4c4bae46bdda0826807f26d4"
  },
  {
    "url": "fontawesome/svgs/solid/heart-broken.svg",
    "revision": "a7d971e508cd9bb500ba4f3d2a7b4ac1"
  },
  {
    "url": "fontawesome/svgs/solid/heart.svg",
    "revision": "9575be0c999948cabf564ec708ad6898"
  },
  {
    "url": "fontawesome/svgs/solid/heartbeat.svg",
    "revision": "fe514a8415d21e9b2cb8390ecf93de3c"
  },
  {
    "url": "fontawesome/svgs/solid/helicopter.svg",
    "revision": "5ab6b41bd0e59e79ce118f16cc025082"
  },
  {
    "url": "fontawesome/svgs/solid/highlighter.svg",
    "revision": "09507c3503c548cc9ef37823ecea0c22"
  },
  {
    "url": "fontawesome/svgs/solid/hiking.svg",
    "revision": "1d476762914ff4bf99f49ee82713f278"
  },
  {
    "url": "fontawesome/svgs/solid/hippo.svg",
    "revision": "664b00f5cd5bfa04cc711754a3cf37c1"
  },
  {
    "url": "fontawesome/svgs/solid/history.svg",
    "revision": "819ab9a6cb8ffcfe25cb85aa44292240"
  },
  {
    "url": "fontawesome/svgs/solid/hockey-puck.svg",
    "revision": "5cf1afdfcb4650841716ed558d11508c"
  },
  {
    "url": "fontawesome/svgs/solid/holly-berry.svg",
    "revision": "6dbb3503c0c59119634cca5c40e4b0c3"
  },
  {
    "url": "fontawesome/svgs/solid/home.svg",
    "revision": "6dd0ef2bb209ee3b6bfbf880b49288dd"
  },
  {
    "url": "fontawesome/svgs/solid/horse-head.svg",
    "revision": "a77f82e3f611b89e019d9bd7d4d35daf"
  },
  {
    "url": "fontawesome/svgs/solid/horse.svg",
    "revision": "8c44bf88d4c350574389a6ef5bdb4eac"
  },
  {
    "url": "fontawesome/svgs/solid/hospital-alt.svg",
    "revision": "3afdc623556403c36136e08bb5278a5b"
  },
  {
    "url": "fontawesome/svgs/solid/hospital-symbol.svg",
    "revision": "60d9ff8e179d357ae95b8ca8050118d4"
  },
  {
    "url": "fontawesome/svgs/solid/hospital.svg",
    "revision": "05d09ace3a0b2676cd3d0724a34d1ee7"
  },
  {
    "url": "fontawesome/svgs/solid/hot-tub.svg",
    "revision": "b9879b1a2d874eeac763aa0adaec3d33"
  },
  {
    "url": "fontawesome/svgs/solid/hotdog.svg",
    "revision": "4765b8b4d7bd40c5dc1bf34aebe0bebb"
  },
  {
    "url": "fontawesome/svgs/solid/hotel.svg",
    "revision": "090b74cc852e745a4b4ccd1ff3016efc"
  },
  {
    "url": "fontawesome/svgs/solid/hourglass-end.svg",
    "revision": "8f839b1edd0fdf9d75151223c404acbb"
  },
  {
    "url": "fontawesome/svgs/solid/hourglass-half.svg",
    "revision": "1fef2225b2058fd85b75614d73d212f8"
  },
  {
    "url": "fontawesome/svgs/solid/hourglass-start.svg",
    "revision": "6790a65bdc48a17efacee2f264802d70"
  },
  {
    "url": "fontawesome/svgs/solid/hourglass.svg",
    "revision": "32959fb53d3abbea79181919320410e2"
  },
  {
    "url": "fontawesome/svgs/solid/house-damage.svg",
    "revision": "d392f7213598df91975def0f0ad59cbc"
  },
  {
    "url": "fontawesome/svgs/solid/hryvnia.svg",
    "revision": "e2f5be4704b9365179eff4824436a3b2"
  },
  {
    "url": "fontawesome/svgs/solid/i-cursor.svg",
    "revision": "9573c0bb1f20dd15ad0cf0b679ff8856"
  },
  {
    "url": "fontawesome/svgs/solid/ice-cream.svg",
    "revision": "4c6867d9deaed241d00f1e3a1f24705a"
  },
  {
    "url": "fontawesome/svgs/solid/icicles.svg",
    "revision": "7628454a052cb2cadc48faa2426df6bb"
  },
  {
    "url": "fontawesome/svgs/solid/icons.svg",
    "revision": "bb657933e5cba74f9ffb944cde94d080"
  },
  {
    "url": "fontawesome/svgs/solid/id-badge.svg",
    "revision": "c203f53e2c240d93a0376449257c0c32"
  },
  {
    "url": "fontawesome/svgs/solid/id-card-alt.svg",
    "revision": "f0790cc7b55dc99d9a78d5a51c8e8fb5"
  },
  {
    "url": "fontawesome/svgs/solid/id-card.svg",
    "revision": "6cde4ad77ad1f952de3cde3e496a67f0"
  },
  {
    "url": "fontawesome/svgs/solid/igloo.svg",
    "revision": "7b460e2693d081357fbda90f61838a9b"
  },
  {
    "url": "fontawesome/svgs/solid/image.svg",
    "revision": "867950ccdc4403fe236e9281f71d9293"
  },
  {
    "url": "fontawesome/svgs/solid/images.svg",
    "revision": "2f683d4a67ccb9d45cc669e88ad6491e"
  },
  {
    "url": "fontawesome/svgs/solid/inbox.svg",
    "revision": "e8596628ab6d34b3aae2476a6724c3c2"
  },
  {
    "url": "fontawesome/svgs/solid/indent.svg",
    "revision": "6eb9ce2989b6884bf741a8c8280f66a9"
  },
  {
    "url": "fontawesome/svgs/solid/industry.svg",
    "revision": "ac3dc41a2b3b6ded2edbfc19df15b340"
  },
  {
    "url": "fontawesome/svgs/solid/infinity.svg",
    "revision": "91a1f0e1c4c0b9b1cdfefcf417b15a77"
  },
  {
    "url": "fontawesome/svgs/solid/info-circle.svg",
    "revision": "f988cd986fc1484fbb5d5c4a8fe7a8ed"
  },
  {
    "url": "fontawesome/svgs/solid/info.svg",
    "revision": "5d9127a6b2bf1300c0135cbe67f9e85d"
  },
  {
    "url": "fontawesome/svgs/solid/italic.svg",
    "revision": "7e855747f6c258dc70255cc1189979ed"
  },
  {
    "url": "fontawesome/svgs/solid/jedi.svg",
    "revision": "39fa3fbb5846b83a14125d983e54fafd"
  },
  {
    "url": "fontawesome/svgs/solid/joint.svg",
    "revision": "9f9816058775861b04e1d13b0edcb517"
  },
  {
    "url": "fontawesome/svgs/solid/journal-whills.svg",
    "revision": "590d9bc330cc8f0e26f2b2c564eb7fdd"
  },
  {
    "url": "fontawesome/svgs/solid/kaaba.svg",
    "revision": "9196ebf543ba1290a757517dc21a30f1"
  },
  {
    "url": "fontawesome/svgs/solid/key.svg",
    "revision": "6faa02d403b480e7769f2a04e91761a9"
  },
  {
    "url": "fontawesome/svgs/solid/keyboard.svg",
    "revision": "e88833abdf81f8ad3691f058f7e6dd82"
  },
  {
    "url": "fontawesome/svgs/solid/khanda.svg",
    "revision": "0ee462dd9500af09275ef9a96ce28a80"
  },
  {
    "url": "fontawesome/svgs/solid/kiss-beam.svg",
    "revision": "d9181e677059110b3d73c302b962c9cd"
  },
  {
    "url": "fontawesome/svgs/solid/kiss-wink-heart.svg",
    "revision": "92a9737c5be87f6bf9da084b090bf6ad"
  },
  {
    "url": "fontawesome/svgs/solid/kiss.svg",
    "revision": "930b07100901da8d7876c1621cd8e254"
  },
  {
    "url": "fontawesome/svgs/solid/kiwi-bird.svg",
    "revision": "b88bb0b8aa5b189291ee7082c29babfc"
  },
  {
    "url": "fontawesome/svgs/solid/landmark.svg",
    "revision": "7b34319ea4da0b1a4763d51ac7c45001"
  },
  {
    "url": "fontawesome/svgs/solid/language.svg",
    "revision": "801a916ea2907f9542000f9fc87a07e5"
  },
  {
    "url": "fontawesome/svgs/solid/laptop-code.svg",
    "revision": "f1f3bc7d11ab2d5639e8564c5491cbbc"
  },
  {
    "url": "fontawesome/svgs/solid/laptop-medical.svg",
    "revision": "e3100aeacbbbf098fed3073ba079f82a"
  },
  {
    "url": "fontawesome/svgs/solid/laptop.svg",
    "revision": "b03d0b53444ea96297ae352133949ebc"
  },
  {
    "url": "fontawesome/svgs/solid/laugh-beam.svg",
    "revision": "b210c9d4f2e76a4c94c013e71e077228"
  },
  {
    "url": "fontawesome/svgs/solid/laugh-squint.svg",
    "revision": "ccded88c5f4403cca8697c2411c72b94"
  },
  {
    "url": "fontawesome/svgs/solid/laugh-wink.svg",
    "revision": "8627213096285d3fc4208faa4663b8ac"
  },
  {
    "url": "fontawesome/svgs/solid/laugh.svg",
    "revision": "debfecc559217e2ec26e94fc864ec1c1"
  },
  {
    "url": "fontawesome/svgs/solid/layer-group.svg",
    "revision": "8f2493cb572ff422f25884485c045a8c"
  },
  {
    "url": "fontawesome/svgs/solid/leaf.svg",
    "revision": "7c6a9cf3da0eec5a7828f00960df8f90"
  },
  {
    "url": "fontawesome/svgs/solid/lemon.svg",
    "revision": "41192ad4ba95fb09f00005f6f8f8a039"
  },
  {
    "url": "fontawesome/svgs/solid/less-than-equal.svg",
    "revision": "82de5ea8e0b7ee4ba609f0f8b3ceeb81"
  },
  {
    "url": "fontawesome/svgs/solid/less-than.svg",
    "revision": "b2a8f58a3f8622731d1dd2f08d32588e"
  },
  {
    "url": "fontawesome/svgs/solid/level-down-alt.svg",
    "revision": "95e49c1bf455cd92611fda999fee0196"
  },
  {
    "url": "fontawesome/svgs/solid/level-up-alt.svg",
    "revision": "cc1fea7c27ec0f8d17de3d13e41bbd00"
  },
  {
    "url": "fontawesome/svgs/solid/life-ring.svg",
    "revision": "1025ca2000e881e287ebdd87a75010e2"
  },
  {
    "url": "fontawesome/svgs/solid/lightbulb.svg",
    "revision": "678e64b996cb4b1ec601692ad22d2042"
  },
  {
    "url": "fontawesome/svgs/solid/link.svg",
    "revision": "e44a278717c146b2d9a6cce3668a9474"
  },
  {
    "url": "fontawesome/svgs/solid/lira-sign.svg",
    "revision": "22651385836955c4bf5f2d3784c7219c"
  },
  {
    "url": "fontawesome/svgs/solid/list-alt.svg",
    "revision": "d48d341d7d5e80945fb3e3572a7c2119"
  },
  {
    "url": "fontawesome/svgs/solid/list-ol.svg",
    "revision": "f53f22b975c53b56647fa022d9438cd8"
  },
  {
    "url": "fontawesome/svgs/solid/list-ul.svg",
    "revision": "55c5eebe5823369d277be59172f83a55"
  },
  {
    "url": "fontawesome/svgs/solid/list.svg",
    "revision": "8c23face6e9a1ccec5966e9a122cdb16"
  },
  {
    "url": "fontawesome/svgs/solid/location-arrow.svg",
    "revision": "ce62002eb364bbcc8e19338bc6537472"
  },
  {
    "url": "fontawesome/svgs/solid/lock-open.svg",
    "revision": "f174c12d34fe6a7f79b500259e186c05"
  },
  {
    "url": "fontawesome/svgs/solid/lock.svg",
    "revision": "ef2ec8996206c45193aa880fe76ca397"
  },
  {
    "url": "fontawesome/svgs/solid/long-arrow-alt-down.svg",
    "revision": "50b3cd31935320a416e0375c73f9fd12"
  },
  {
    "url": "fontawesome/svgs/solid/long-arrow-alt-left.svg",
    "revision": "87b9658c2ecbe5ed3bfe1ec42ca210d2"
  },
  {
    "url": "fontawesome/svgs/solid/long-arrow-alt-right.svg",
    "revision": "6bb1f78bab3852acfa3065a979d117c9"
  },
  {
    "url": "fontawesome/svgs/solid/long-arrow-alt-up.svg",
    "revision": "3a369892e7f61ceaf421be24e72f9819"
  },
  {
    "url": "fontawesome/svgs/solid/low-vision.svg",
    "revision": "0d03f10b0f86d90a0aa5748cc12d22b6"
  },
  {
    "url": "fontawesome/svgs/solid/luggage-cart.svg",
    "revision": "dbf74050ce8e9c0cf2f5d3a2d96dc2a5"
  },
  {
    "url": "fontawesome/svgs/solid/magic.svg",
    "revision": "64425b062a72bc2b45ced74909227709"
  },
  {
    "url": "fontawesome/svgs/solid/magnet.svg",
    "revision": "d9e4c7291a208fd2c989fc02316c1093"
  },
  {
    "url": "fontawesome/svgs/solid/mail-bulk.svg",
    "revision": "b271267e776ce756ca4afc133015d912"
  },
  {
    "url": "fontawesome/svgs/solid/male.svg",
    "revision": "06d195605f0ff6e9858556f9721978ab"
  },
  {
    "url": "fontawesome/svgs/solid/map-marked-alt.svg",
    "revision": "2b77394187edf63c8d0f187f8ec2163e"
  },
  {
    "url": "fontawesome/svgs/solid/map-marked.svg",
    "revision": "45c01d660786ed0a948d4de0937ba0e5"
  },
  {
    "url": "fontawesome/svgs/solid/map-marker-alt.svg",
    "revision": "2f0e158681f223be2f12192a4bb1715b"
  },
  {
    "url": "fontawesome/svgs/solid/map-marker.svg",
    "revision": "70c2bf5d1e404acc222cfab4703d446e"
  },
  {
    "url": "fontawesome/svgs/solid/map-pin.svg",
    "revision": "f6345f0917b2b098c1e5b4d55034130e"
  },
  {
    "url": "fontawesome/svgs/solid/map-signs.svg",
    "revision": "b0c1e4d42488b204db0f65b9f9c79b43"
  },
  {
    "url": "fontawesome/svgs/solid/map.svg",
    "revision": "8f7b41e72865213b6b5476be599fbf2a"
  },
  {
    "url": "fontawesome/svgs/solid/marker.svg",
    "revision": "36a2989375d7eb8bf5f88570ffd1cd60"
  },
  {
    "url": "fontawesome/svgs/solid/mars-double.svg",
    "revision": "f43a9fd91d498e5f3f70e7af075f9f98"
  },
  {
    "url": "fontawesome/svgs/solid/mars-stroke-h.svg",
    "revision": "bcba2acceea989fccbd5f011c4a91686"
  },
  {
    "url": "fontawesome/svgs/solid/mars-stroke-v.svg",
    "revision": "0b6eca1490c7627e415819e928aac528"
  },
  {
    "url": "fontawesome/svgs/solid/mars-stroke.svg",
    "revision": "cdb820f27a66039cc6ee0edfe328bb43"
  },
  {
    "url": "fontawesome/svgs/solid/mars.svg",
    "revision": "dbadcd98e362ae85cb8fc2018697d8cb"
  },
  {
    "url": "fontawesome/svgs/solid/mask.svg",
    "revision": "5f8c12e4f6cf8014f552cfabc9d2413d"
  },
  {
    "url": "fontawesome/svgs/solid/medal.svg",
    "revision": "29e416d780ab696c8c8759bd9338fa41"
  },
  {
    "url": "fontawesome/svgs/solid/medkit.svg",
    "revision": "04a4db89702573360ce98dc67ad72e60"
  },
  {
    "url": "fontawesome/svgs/solid/meh-blank.svg",
    "revision": "642aeca3a3fa09cd9e3ee8b49fe6c325"
  },
  {
    "url": "fontawesome/svgs/solid/meh-rolling-eyes.svg",
    "revision": "dbcaabfe886ee061db1b38587e7b2d54"
  },
  {
    "url": "fontawesome/svgs/solid/meh.svg",
    "revision": "3e503ffd826fc42e2d5339c291a48a0f"
  },
  {
    "url": "fontawesome/svgs/solid/memory.svg",
    "revision": "b6cae1d9be6984fc6993d503b086e3d3"
  },
  {
    "url": "fontawesome/svgs/solid/menorah.svg",
    "revision": "44280f918140949e095ecaecd05c335c"
  },
  {
    "url": "fontawesome/svgs/solid/mercury.svg",
    "revision": "7166a75ea0e3ea675e8ea9f64cb994a2"
  },
  {
    "url": "fontawesome/svgs/solid/meteor.svg",
    "revision": "c424c105635491ca3348ea190eeae948"
  },
  {
    "url": "fontawesome/svgs/solid/microchip.svg",
    "revision": "377d2c98b11b78e923d1754ae6891556"
  },
  {
    "url": "fontawesome/svgs/solid/microphone-alt-slash.svg",
    "revision": "c011ef97f1d1062dda84603ab939bae4"
  },
  {
    "url": "fontawesome/svgs/solid/microphone-alt.svg",
    "revision": "cdc81d86e04e0af288f5ff2440811e83"
  },
  {
    "url": "fontawesome/svgs/solid/microphone-slash.svg",
    "revision": "3dc0ab95aa9abcba65510be530f9d50f"
  },
  {
    "url": "fontawesome/svgs/solid/microphone.svg",
    "revision": "26ce5d3b454c34959f4866f1446155a3"
  },
  {
    "url": "fontawesome/svgs/solid/microscope.svg",
    "revision": "53e222f33a6c4b96bcc40d1bb9063d25"
  },
  {
    "url": "fontawesome/svgs/solid/minus-circle.svg",
    "revision": "3df54807ddb695745abe6ebd0551004d"
  },
  {
    "url": "fontawesome/svgs/solid/minus-square.svg",
    "revision": "a14598e0f7754bc71f2e8c9a8f6cab1d"
  },
  {
    "url": "fontawesome/svgs/solid/minus.svg",
    "revision": "34a82cc58cef4934feb1b090d754d056"
  },
  {
    "url": "fontawesome/svgs/solid/mitten.svg",
    "revision": "0085c94a94fe60508a518b5fd3ef8820"
  },
  {
    "url": "fontawesome/svgs/solid/mobile-alt.svg",
    "revision": "2eb78e56bc27b886e83052f2b8cbca82"
  },
  {
    "url": "fontawesome/svgs/solid/mobile.svg",
    "revision": "3ca043f01eb64437316c554c8b1c7784"
  },
  {
    "url": "fontawesome/svgs/solid/money-bill-alt.svg",
    "revision": "943b50d6cc474c78fc5794a49a6f3994"
  },
  {
    "url": "fontawesome/svgs/solid/money-bill-wave-alt.svg",
    "revision": "da2bc69c8d28069b4cc19725f0601376"
  },
  {
    "url": "fontawesome/svgs/solid/money-bill-wave.svg",
    "revision": "ac5cb62697be0b6d0fe8b16b804406c1"
  },
  {
    "url": "fontawesome/svgs/solid/money-bill.svg",
    "revision": "5cdcce5b148ca828b96b93dda77d36c9"
  },
  {
    "url": "fontawesome/svgs/solid/money-check-alt.svg",
    "revision": "f538e6fb0510727f82de210d2f5eb7e9"
  },
  {
    "url": "fontawesome/svgs/solid/money-check.svg",
    "revision": "791e182f74450387919053237a3a6c28"
  },
  {
    "url": "fontawesome/svgs/solid/monument.svg",
    "revision": "3cdbfcdbf76177416fd6c4c8226c58d3"
  },
  {
    "url": "fontawesome/svgs/solid/moon.svg",
    "revision": "7eb128b5fb05688f69113b1677a40f36"
  },
  {
    "url": "fontawesome/svgs/solid/mortar-pestle.svg",
    "revision": "4afff4582e630e2a9f5b2f15a325ada4"
  },
  {
    "url": "fontawesome/svgs/solid/mosque.svg",
    "revision": "f08e0f213e2449c7cd8dbbbb4b1c121d"
  },
  {
    "url": "fontawesome/svgs/solid/motorcycle.svg",
    "revision": "659a143b66ff8966dc3132c46053e497"
  },
  {
    "url": "fontawesome/svgs/solid/mountain.svg",
    "revision": "c094c435659f0604d951b1cc6584b567"
  },
  {
    "url": "fontawesome/svgs/solid/mouse-pointer.svg",
    "revision": "0abb7383ce61a1ee7b185acdc47b3b2e"
  },
  {
    "url": "fontawesome/svgs/solid/mug-hot.svg",
    "revision": "e9beab7292863d437e8f1f7596c6d84d"
  },
  {
    "url": "fontawesome/svgs/solid/music.svg",
    "revision": "ff419e56a85947c91f0c0e450ed77589"
  },
  {
    "url": "fontawesome/svgs/solid/network-wired.svg",
    "revision": "5bb310c50f6861926b7d7e26d8cf559b"
  },
  {
    "url": "fontawesome/svgs/solid/neuter.svg",
    "revision": "67875f992877dd95018496db0f32e8de"
  },
  {
    "url": "fontawesome/svgs/solid/newspaper.svg",
    "revision": "b0270f42b62387e619bc0f6ce9b3a7e5"
  },
  {
    "url": "fontawesome/svgs/solid/not-equal.svg",
    "revision": "89ea17d5520ab309066e3ed9d880a7e2"
  },
  {
    "url": "fontawesome/svgs/solid/notes-medical.svg",
    "revision": "7ecb257ad9aa8cb398bd1a7d988ee674"
  },
  {
    "url": "fontawesome/svgs/solid/object-group.svg",
    "revision": "132c42b8d181207a8348db172880bdc3"
  },
  {
    "url": "fontawesome/svgs/solid/object-ungroup.svg",
    "revision": "09d6c5a786d4cc8df7d6e4665d03cde0"
  },
  {
    "url": "fontawesome/svgs/solid/oil-can.svg",
    "revision": "06d255f05972d78f276cd01d7773e5b1"
  },
  {
    "url": "fontawesome/svgs/solid/om.svg",
    "revision": "2f5bcda5b0c131f4be637c7559632ab6"
  },
  {
    "url": "fontawesome/svgs/solid/otter.svg",
    "revision": "9e90fa360cfb34db69bbd02d7c90c3d2"
  },
  {
    "url": "fontawesome/svgs/solid/outdent.svg",
    "revision": "1e05ec15583d79d2d266e0c8b2d0015a"
  },
  {
    "url": "fontawesome/svgs/solid/pager.svg",
    "revision": "ba7a04dfd9c1e848f10b2c89dabb3db1"
  },
  {
    "url": "fontawesome/svgs/solid/paint-brush.svg",
    "revision": "fae63e22e57fc2baab2e5c393be7ac1e"
  },
  {
    "url": "fontawesome/svgs/solid/paint-roller.svg",
    "revision": "a7c9abbf6431513929cae7322b67ca65"
  },
  {
    "url": "fontawesome/svgs/solid/palette.svg",
    "revision": "56add4df00f80d6e7520b3c7d350f59e"
  },
  {
    "url": "fontawesome/svgs/solid/pallet.svg",
    "revision": "0d0642dfb955fe64b597066142fd4b64"
  },
  {
    "url": "fontawesome/svgs/solid/paper-plane.svg",
    "revision": "47be7439720cee23ae38209479f5a33b"
  },
  {
    "url": "fontawesome/svgs/solid/paperclip.svg",
    "revision": "92a7a6f0ec478c7f2c04ee9b9bc55cdc"
  },
  {
    "url": "fontawesome/svgs/solid/parachute-box.svg",
    "revision": "b98d5542c96614c9c8a231ae45696d7a"
  },
  {
    "url": "fontawesome/svgs/solid/paragraph.svg",
    "revision": "750974056e2d1d145b61edd6cb08732a"
  },
  {
    "url": "fontawesome/svgs/solid/parking.svg",
    "revision": "3a2b230fcd873c6fd8ac11de8b38b709"
  },
  {
    "url": "fontawesome/svgs/solid/passport.svg",
    "revision": "c0f550f70b07da8511502471e1448212"
  },
  {
    "url": "fontawesome/svgs/solid/pastafarianism.svg",
    "revision": "302fecf70e31e8932bddf9c2c5106131"
  },
  {
    "url": "fontawesome/svgs/solid/paste.svg",
    "revision": "bfbf04a899de5ef1559539e2040cbf58"
  },
  {
    "url": "fontawesome/svgs/solid/pause-circle.svg",
    "revision": "9010e2b122d2b782b73d00cf58a110ed"
  },
  {
    "url": "fontawesome/svgs/solid/pause.svg",
    "revision": "31b7654bf5c122deacf4bec6c4a62029"
  },
  {
    "url": "fontawesome/svgs/solid/paw.svg",
    "revision": "fa804cba514feeb0d236b826372af27e"
  },
  {
    "url": "fontawesome/svgs/solid/peace.svg",
    "revision": "5241b75c8727b201cf0778e7b3673dba"
  },
  {
    "url": "fontawesome/svgs/solid/pen-alt.svg",
    "revision": "679e5ac4be117b667f42e4fd18410f82"
  },
  {
    "url": "fontawesome/svgs/solid/pen-fancy.svg",
    "revision": "45f646847bc838dbc219b421f4ebf603"
  },
  {
    "url": "fontawesome/svgs/solid/pen-nib.svg",
    "revision": "8cd40902995d8bd1e37ffef59b24c3ab"
  },
  {
    "url": "fontawesome/svgs/solid/pen-square.svg",
    "revision": "d748d166a0cd574ff7c7f04376f3037c"
  },
  {
    "url": "fontawesome/svgs/solid/pen.svg",
    "revision": "4a8de3d327f10b27b18856cbe7abd063"
  },
  {
    "url": "fontawesome/svgs/solid/pencil-alt.svg",
    "revision": "29f32609caa6f54eaa367355c1acd87b"
  },
  {
    "url": "fontawesome/svgs/solid/pencil-ruler.svg",
    "revision": "770bc5873a40db731bd6eacecaaff88c"
  },
  {
    "url": "fontawesome/svgs/solid/people-carry.svg",
    "revision": "176392a10b39d042e08e74f32c5067c4"
  },
  {
    "url": "fontawesome/svgs/solid/pepper-hot.svg",
    "revision": "fc4bdeee07e3091b13a877891c3d41b3"
  },
  {
    "url": "fontawesome/svgs/solid/percent.svg",
    "revision": "112babdfa404faba745a35e47094c479"
  },
  {
    "url": "fontawesome/svgs/solid/percentage.svg",
    "revision": "3f86fe65ecab5a553cb705a773b07178"
  },
  {
    "url": "fontawesome/svgs/solid/person-booth.svg",
    "revision": "4f4cfc04501148ab9fd14111b7dd5de0"
  },
  {
    "url": "fontawesome/svgs/solid/phone-alt.svg",
    "revision": "aa14fd02b5feb8341fc610d663886752"
  },
  {
    "url": "fontawesome/svgs/solid/phone-slash.svg",
    "revision": "1ab64cd2696a8ab08b001a53a84c4180"
  },
  {
    "url": "fontawesome/svgs/solid/phone-square-alt.svg",
    "revision": "e8ccbe67aaa4605c31f73597ee11c134"
  },
  {
    "url": "fontawesome/svgs/solid/phone-square.svg",
    "revision": "447f823199a9f01f478349636c96913b"
  },
  {
    "url": "fontawesome/svgs/solid/phone-volume.svg",
    "revision": "3c8f369bd40b36f9ade9474f20755300"
  },
  {
    "url": "fontawesome/svgs/solid/phone.svg",
    "revision": "b522cc6c1188c98c9baa2bef0d59c2d2"
  },
  {
    "url": "fontawesome/svgs/solid/photo-video.svg",
    "revision": "498639a561b39478bc758c7b43eb6b53"
  },
  {
    "url": "fontawesome/svgs/solid/piggy-bank.svg",
    "revision": "52be880de8cdb7c2a4a6482737d37c0c"
  },
  {
    "url": "fontawesome/svgs/solid/pills.svg",
    "revision": "ab0c2d36a1ddd039c2c8f75c380d95e0"
  },
  {
    "url": "fontawesome/svgs/solid/pizza-slice.svg",
    "revision": "b8976e7b33677bdc17c913a100922159"
  },
  {
    "url": "fontawesome/svgs/solid/place-of-worship.svg",
    "revision": "eb29bdb5710069aa72ae5193bd727400"
  },
  {
    "url": "fontawesome/svgs/solid/plane-arrival.svg",
    "revision": "fea656738ff3a11bad4fcc5abc312cbd"
  },
  {
    "url": "fontawesome/svgs/solid/plane-departure.svg",
    "revision": "63a644529f644b5f388921d0b13c2fba"
  },
  {
    "url": "fontawesome/svgs/solid/plane.svg",
    "revision": "806fec643812f6c63f97d6e36b90b3ab"
  },
  {
    "url": "fontawesome/svgs/solid/play-circle.svg",
    "revision": "5a7ddd3628f698c146b8f6bd350c84af"
  },
  {
    "url": "fontawesome/svgs/solid/play.svg",
    "revision": "1cc909e8daccf720d5ec3688694f4185"
  },
  {
    "url": "fontawesome/svgs/solid/plug.svg",
    "revision": "b914c6f851f9f7c32920dad28362fe93"
  },
  {
    "url": "fontawesome/svgs/solid/plus-circle.svg",
    "revision": "2b2138f3af2701eec3e6655191d37f4f"
  },
  {
    "url": "fontawesome/svgs/solid/plus-square.svg",
    "revision": "3703a6722e42c61c004f2d7945d44d24"
  },
  {
    "url": "fontawesome/svgs/solid/plus.svg",
    "revision": "be9a8c9e2c5b045fc26e11cdf6860c69"
  },
  {
    "url": "fontawesome/svgs/solid/podcast.svg",
    "revision": "73b0b2f42f63c6b507d3851f3a1a46e8"
  },
  {
    "url": "fontawesome/svgs/solid/poll-h.svg",
    "revision": "62030afbf99d5cde7876bf5990de3586"
  },
  {
    "url": "fontawesome/svgs/solid/poll.svg",
    "revision": "b347c2025cd071c376ac0f5a1f23a50e"
  },
  {
    "url": "fontawesome/svgs/solid/poo-storm.svg",
    "revision": "aee2fdb778192c3c70c2ecf246aed137"
  },
  {
    "url": "fontawesome/svgs/solid/poo.svg",
    "revision": "f7c33ad5d567bd32b3c8033e08a18ec8"
  },
  {
    "url": "fontawesome/svgs/solid/poop.svg",
    "revision": "f95c8bd83281bc02d416b0f5cd34ceff"
  },
  {
    "url": "fontawesome/svgs/solid/portrait.svg",
    "revision": "a1557200ea9588c4e39837066e361ff2"
  },
  {
    "url": "fontawesome/svgs/solid/pound-sign.svg",
    "revision": "e7706144e516ad197164baebd4b1eb49"
  },
  {
    "url": "fontawesome/svgs/solid/power-off.svg",
    "revision": "7d204314d43298b3795689015ee232cd"
  },
  {
    "url": "fontawesome/svgs/solid/pray.svg",
    "revision": "e3089f77d00220f5b0010d8531a1b5da"
  },
  {
    "url": "fontawesome/svgs/solid/praying-hands.svg",
    "revision": "a9b261f921b8d4b5530ac4035a83b089"
  },
  {
    "url": "fontawesome/svgs/solid/prescription-bottle-alt.svg",
    "revision": "7629d31b8c657faf5718a45535e930fa"
  },
  {
    "url": "fontawesome/svgs/solid/prescription-bottle.svg",
    "revision": "da258731819aea0c648d74ddc6f72908"
  },
  {
    "url": "fontawesome/svgs/solid/prescription.svg",
    "revision": "cf8c93f59dfe6d02f7321c75d54f91a1"
  },
  {
    "url": "fontawesome/svgs/solid/print.svg",
    "revision": "d223c98a33b7d5b4c7982d54a491e7d4"
  },
  {
    "url": "fontawesome/svgs/solid/procedures.svg",
    "revision": "a57f4768a416c38856f6d20fd4d63eb7"
  },
  {
    "url": "fontawesome/svgs/solid/project-diagram.svg",
    "revision": "91f6dbcb2d04e1db80cde1c1919db50d"
  },
  {
    "url": "fontawesome/svgs/solid/puzzle-piece.svg",
    "revision": "7a3e3dc52b70262b8816b94a8d1fe02a"
  },
  {
    "url": "fontawesome/svgs/solid/qrcode.svg",
    "revision": "ad6f59e7978a14f365c89bc36f58e5ba"
  },
  {
    "url": "fontawesome/svgs/solid/question-circle.svg",
    "revision": "b30cd145dde788b56113308947cd4235"
  },
  {
    "url": "fontawesome/svgs/solid/question.svg",
    "revision": "95be19e5dc3997959314c4b91be5309c"
  },
  {
    "url": "fontawesome/svgs/solid/quidditch.svg",
    "revision": "f748ef78383ba72dd682eaca9ece1e4f"
  },
  {
    "url": "fontawesome/svgs/solid/quote-left.svg",
    "revision": "a2015d7d8325ae4924bdfea582bef687"
  },
  {
    "url": "fontawesome/svgs/solid/quote-right.svg",
    "revision": "56221d471a2364bec2b8dc80a17ad1ca"
  },
  {
    "url": "fontawesome/svgs/solid/quran.svg",
    "revision": "e19d751ef1739f4e4aab2b71fb0bfc9a"
  },
  {
    "url": "fontawesome/svgs/solid/radiation-alt.svg",
    "revision": "f8ff222425e52a3267f0bb55c181a57e"
  },
  {
    "url": "fontawesome/svgs/solid/radiation.svg",
    "revision": "36acc55fb1ed428d9116935b839f0dd5"
  },
  {
    "url": "fontawesome/svgs/solid/rainbow.svg",
    "revision": "6a6f671f4e47fe10df58fb44febb9de2"
  },
  {
    "url": "fontawesome/svgs/solid/random.svg",
    "revision": "48d7784fea23ee39b9275e1853875405"
  },
  {
    "url": "fontawesome/svgs/solid/receipt.svg",
    "revision": "8559ba37445afe56a805cb2f8f8c86a7"
  },
  {
    "url": "fontawesome/svgs/solid/recycle.svg",
    "revision": "2caf053baf03f7800a66d9b2b72c554c"
  },
  {
    "url": "fontawesome/svgs/solid/redo-alt.svg",
    "revision": "55a0c503f4f845e78f6cc620409546b7"
  },
  {
    "url": "fontawesome/svgs/solid/redo.svg",
    "revision": "029554f9c5030c9bcf0ec1858f6be8af"
  },
  {
    "url": "fontawesome/svgs/solid/registered.svg",
    "revision": "1119380d15f4f53893588b75a9d121aa"
  },
  {
    "url": "fontawesome/svgs/solid/remove-format.svg",
    "revision": "140e4f29adc17d25183e8365e840cb84"
  },
  {
    "url": "fontawesome/svgs/solid/reply-all.svg",
    "revision": "5e43931a85c381d244da04d421830eb8"
  },
  {
    "url": "fontawesome/svgs/solid/reply.svg",
    "revision": "ad45a307c7e866787e3e71f6d7fbb42d"
  },
  {
    "url": "fontawesome/svgs/solid/republican.svg",
    "revision": "fb097145c6b92f1e92fff14170308dae"
  },
  {
    "url": "fontawesome/svgs/solid/restroom.svg",
    "revision": "9cecda264a8395e2917b83c7f441bc12"
  },
  {
    "url": "fontawesome/svgs/solid/retweet.svg",
    "revision": "e7cbcb45f76a1c11ff843336cbd839ff"
  },
  {
    "url": "fontawesome/svgs/solid/ribbon.svg",
    "revision": "7705bda42c26206f4807120165b27e27"
  },
  {
    "url": "fontawesome/svgs/solid/ring.svg",
    "revision": "624c3d558330a16cb83afbb630091fcf"
  },
  {
    "url": "fontawesome/svgs/solid/road.svg",
    "revision": "0a01565ddd78fd4aa1a36d12239ecbdc"
  },
  {
    "url": "fontawesome/svgs/solid/robot.svg",
    "revision": "324a0b77f6d67fabd8943549c383320e"
  },
  {
    "url": "fontawesome/svgs/solid/rocket.svg",
    "revision": "30b0c0ddc7858213844cf6ccbfeb45d9"
  },
  {
    "url": "fontawesome/svgs/solid/route.svg",
    "revision": "a57a1a54fda304774b549ff1666b4ef4"
  },
  {
    "url": "fontawesome/svgs/solid/rss-square.svg",
    "revision": "f51e29ba3a41d28699ac9e49d2709646"
  },
  {
    "url": "fontawesome/svgs/solid/rss.svg",
    "revision": "dbaa0714d76bdeaa9241be464e36fdbf"
  },
  {
    "url": "fontawesome/svgs/solid/ruble-sign.svg",
    "revision": "07a5c6e5f2da41a4574ce2a6ebf75429"
  },
  {
    "url": "fontawesome/svgs/solid/ruler-combined.svg",
    "revision": "88c9da59f7576b098d1ebf4477eae74b"
  },
  {
    "url": "fontawesome/svgs/solid/ruler-horizontal.svg",
    "revision": "dbc16c901cc9c2910c0077306d25e3b4"
  },
  {
    "url": "fontawesome/svgs/solid/ruler-vertical.svg",
    "revision": "99be7c29ca087a4d1d7bc0c12bd55018"
  },
  {
    "url": "fontawesome/svgs/solid/ruler.svg",
    "revision": "09c3ed09ae5ebb58970bb0f71a738c8d"
  },
  {
    "url": "fontawesome/svgs/solid/running.svg",
    "revision": "cd10b259d8545f419ee9c5d55754c0b9"
  },
  {
    "url": "fontawesome/svgs/solid/rupee-sign.svg",
    "revision": "5ec2c34cc01c1455bb4f8cc3c0ce33fd"
  },
  {
    "url": "fontawesome/svgs/solid/sad-cry.svg",
    "revision": "11f56a84229bac57600f941ee8c7b34c"
  },
  {
    "url": "fontawesome/svgs/solid/sad-tear.svg",
    "revision": "6c7879a24882b8b839ecbbcd3f11f4a6"
  },
  {
    "url": "fontawesome/svgs/solid/satellite-dish.svg",
    "revision": "c944a23f9a7b3efebbad4160ac4b900e"
  },
  {
    "url": "fontawesome/svgs/solid/satellite.svg",
    "revision": "60c4afc269fd9d55846814e09c5b7579"
  },
  {
    "url": "fontawesome/svgs/solid/save.svg",
    "revision": "e27ab5a5c8e1b0c78ff015f4a8fa17d6"
  },
  {
    "url": "fontawesome/svgs/solid/school.svg",
    "revision": "79d3ee959b4b0e4a451ff7bc76e243e1"
  },
  {
    "url": "fontawesome/svgs/solid/screwdriver.svg",
    "revision": "c2839199444b77448c08c2ad075c7772"
  },
  {
    "url": "fontawesome/svgs/solid/scroll.svg",
    "revision": "9f053ce741e0e573c05ecb249bf3f81b"
  },
  {
    "url": "fontawesome/svgs/solid/sd-card.svg",
    "revision": "28402674fece6947aa33371a9ac28589"
  },
  {
    "url": "fontawesome/svgs/solid/search-dollar.svg",
    "revision": "a5bb6d3ea9105dc07d0ab9c2a37737db"
  },
  {
    "url": "fontawesome/svgs/solid/search-location.svg",
    "revision": "67719b92587a98e387499f35a378babc"
  },
  {
    "url": "fontawesome/svgs/solid/search-minus.svg",
    "revision": "ff7fae74674ba6c274b2a12e835b3092"
  },
  {
    "url": "fontawesome/svgs/solid/search-plus.svg",
    "revision": "e1551a24f636fa35fc791fe82e861f47"
  },
  {
    "url": "fontawesome/svgs/solid/search.svg",
    "revision": "55473c271992498166a1e0682f38d393"
  },
  {
    "url": "fontawesome/svgs/solid/seedling.svg",
    "revision": "b71d08a0d6e05438017ca974f5137e1a"
  },
  {
    "url": "fontawesome/svgs/solid/server.svg",
    "revision": "ee2001fb8fa0303b4fe7fc09538bfc88"
  },
  {
    "url": "fontawesome/svgs/solid/shapes.svg",
    "revision": "066b6b9f2eedb5d927da90b74a33a6a1"
  },
  {
    "url": "fontawesome/svgs/solid/share-alt-square.svg",
    "revision": "38aa2a17cf8f1e29e815df2548ae5e15"
  },
  {
    "url": "fontawesome/svgs/solid/share-alt.svg",
    "revision": "e1687b6439ed47f1280e6e8044a1b6fa"
  },
  {
    "url": "fontawesome/svgs/solid/share-square.svg",
    "revision": "a4f5b0f32543c964d15c234189391799"
  },
  {
    "url": "fontawesome/svgs/solid/share.svg",
    "revision": "aaa018a562a6839cb0ab8d1bb1ace056"
  },
  {
    "url": "fontawesome/svgs/solid/shekel-sign.svg",
    "revision": "1894de14c3fd70543e42831b8d389160"
  },
  {
    "url": "fontawesome/svgs/solid/shield-alt.svg",
    "revision": "584ec5d778814fe4c594381429f1fcbc"
  },
  {
    "url": "fontawesome/svgs/solid/ship.svg",
    "revision": "04c196bbe4491b38b8546690c46f0357"
  },
  {
    "url": "fontawesome/svgs/solid/shipping-fast.svg",
    "revision": "a8bcb11309782c665236a361dd29f337"
  },
  {
    "url": "fontawesome/svgs/solid/shoe-prints.svg",
    "revision": "6c6d2cafb666316d2f56e37c776ace45"
  },
  {
    "url": "fontawesome/svgs/solid/shopping-bag.svg",
    "revision": "7118849a505017c9d6eae760e3019690"
  },
  {
    "url": "fontawesome/svgs/solid/shopping-basket.svg",
    "revision": "df79069608b5cf5e132fc40e46cc8e3a"
  },
  {
    "url": "fontawesome/svgs/solid/shopping-cart.svg",
    "revision": "95bc5ee0c1f6a78a4d6365a39817bd97"
  },
  {
    "url": "fontawesome/svgs/solid/shower.svg",
    "revision": "3630a42d6a33345ebbac08d59f256439"
  },
  {
    "url": "fontawesome/svgs/solid/shuttle-van.svg",
    "revision": "7fb08ade6b0a2464cad0ec6f0b6737a1"
  },
  {
    "url": "fontawesome/svgs/solid/sign-in-alt.svg",
    "revision": "4e13ba6a715f032f757fe2ae61da826f"
  },
  {
    "url": "fontawesome/svgs/solid/sign-language.svg",
    "revision": "8bbc9c70a50436a58fb5138b45f84c4a"
  },
  {
    "url": "fontawesome/svgs/solid/sign-out-alt.svg",
    "revision": "a7a76b478873c0bd9d53f1dc7948b1b2"
  },
  {
    "url": "fontawesome/svgs/solid/sign.svg",
    "revision": "a804deba82cad4fcbf9d56b1caf33159"
  },
  {
    "url": "fontawesome/svgs/solid/signal.svg",
    "revision": "990ad08d80cb3fbac305c42f09d0be3e"
  },
  {
    "url": "fontawesome/svgs/solid/signature.svg",
    "revision": "461ab50862df65ead1e18b1ceeccda1f"
  },
  {
    "url": "fontawesome/svgs/solid/sim-card.svg",
    "revision": "3c7cc25ceebbdec16af7c02f5779b83b"
  },
  {
    "url": "fontawesome/svgs/solid/sitemap.svg",
    "revision": "ca8682e6424727d9fa98403e5879743f"
  },
  {
    "url": "fontawesome/svgs/solid/skating.svg",
    "revision": "a3b5107b4028bee8d1932653fb3c50ea"
  },
  {
    "url": "fontawesome/svgs/solid/skiing-nordic.svg",
    "revision": "95357a5c61ccb7b0706773b54f3e9613"
  },
  {
    "url": "fontawesome/svgs/solid/skiing.svg",
    "revision": "c786d232e44ccc1aa3550a2316a0b129"
  },
  {
    "url": "fontawesome/svgs/solid/skull-crossbones.svg",
    "revision": "b09a481842129c7a3f69ff5e76a6e1a7"
  },
  {
    "url": "fontawesome/svgs/solid/skull.svg",
    "revision": "25ee2428f6d3fd5ad3fe12368ea463d4"
  },
  {
    "url": "fontawesome/svgs/solid/slash.svg",
    "revision": "cdbdf18fe927a46bd6d559aab8dc785c"
  },
  {
    "url": "fontawesome/svgs/solid/sleigh.svg",
    "revision": "cd2310752efa23c20c9c4d5aea9b75e5"
  },
  {
    "url": "fontawesome/svgs/solid/sliders-h.svg",
    "revision": "e02a94e0f6e730abae5914756c2d06f2"
  },
  {
    "url": "fontawesome/svgs/solid/smile-beam.svg",
    "revision": "55f13bbfccbcd23bfa2619be169f414e"
  },
  {
    "url": "fontawesome/svgs/solid/smile-wink.svg",
    "revision": "ba84b40fb73998c840bf425d632232fb"
  },
  {
    "url": "fontawesome/svgs/solid/smile.svg",
    "revision": "b9dd76c3dbb9f11e745cdebab1432ee3"
  },
  {
    "url": "fontawesome/svgs/solid/smog.svg",
    "revision": "be40947403dd3ec7eb16b775c8edac6a"
  },
  {
    "url": "fontawesome/svgs/solid/smoking-ban.svg",
    "revision": "33828e91a7d2ea868a99a03918531c8e"
  },
  {
    "url": "fontawesome/svgs/solid/smoking.svg",
    "revision": "1699626ba88991177435325f0327cc22"
  },
  {
    "url": "fontawesome/svgs/solid/sms.svg",
    "revision": "f09da7eb53d1b58445d8adb467592404"
  },
  {
    "url": "fontawesome/svgs/solid/snowboarding.svg",
    "revision": "d98bf0b59f60ccbcaf9279a7119582e4"
  },
  {
    "url": "fontawesome/svgs/solid/snowflake.svg",
    "revision": "37da57fd4c8e4969906fae38c660351f"
  },
  {
    "url": "fontawesome/svgs/solid/snowman.svg",
    "revision": "2051eb77fc43496b2dcb9cb607931d83"
  },
  {
    "url": "fontawesome/svgs/solid/snowplow.svg",
    "revision": "900e8a0dac1f0689fae7fdfdcdcccafa"
  },
  {
    "url": "fontawesome/svgs/solid/socks.svg",
    "revision": "850f9602c614bfa3db8717a30c2da6c1"
  },
  {
    "url": "fontawesome/svgs/solid/solar-panel.svg",
    "revision": "89cf6e57d3446572d0b72535ff3ea630"
  },
  {
    "url": "fontawesome/svgs/solid/sort-alpha-down-alt.svg",
    "revision": "5bdda2a946c9eb9ea5b76ed4e822c2f8"
  },
  {
    "url": "fontawesome/svgs/solid/sort-alpha-down.svg",
    "revision": "b73776eb658d91f6fdab8ed958455115"
  },
  {
    "url": "fontawesome/svgs/solid/sort-alpha-up-alt.svg",
    "revision": "91ce3d66fc1730ec4450e2a047f0f553"
  },
  {
    "url": "fontawesome/svgs/solid/sort-alpha-up.svg",
    "revision": "2aa1b8bbb56fe6b4dc09eaf5961d9bcb"
  },
  {
    "url": "fontawesome/svgs/solid/sort-amount-down-alt.svg",
    "revision": "c595a00fc44470aff7e8376345d745b2"
  },
  {
    "url": "fontawesome/svgs/solid/sort-amount-down.svg",
    "revision": "eab2f93a90f5071589be9c6ce2ddbcd6"
  },
  {
    "url": "fontawesome/svgs/solid/sort-amount-up-alt.svg",
    "revision": "7676b0b0439f890c090d1ad2fef795cc"
  },
  {
    "url": "fontawesome/svgs/solid/sort-amount-up.svg",
    "revision": "2987158e91dd691584b3fa6247313a9c"
  },
  {
    "url": "fontawesome/svgs/solid/sort-down.svg",
    "revision": "8882034d39764360148d7e11863a68b8"
  },
  {
    "url": "fontawesome/svgs/solid/sort-numeric-down-alt.svg",
    "revision": "e560e70263eb1a8528b37fc84c3cbd93"
  },
  {
    "url": "fontawesome/svgs/solid/sort-numeric-down.svg",
    "revision": "80b9605fd7a68fce0bc6874bead260f9"
  },
  {
    "url": "fontawesome/svgs/solid/sort-numeric-up-alt.svg",
    "revision": "a994ad381714cfd7b18a6fc2cd2ebb1c"
  },
  {
    "url": "fontawesome/svgs/solid/sort-numeric-up.svg",
    "revision": "a793d33ce4eafc0dc5216a605550ab85"
  },
  {
    "url": "fontawesome/svgs/solid/sort-up.svg",
    "revision": "28106c4a53d293d1afdd6cf0f643cc91"
  },
  {
    "url": "fontawesome/svgs/solid/sort.svg",
    "revision": "3f5e12b1d863d19a145ca2fb98a597de"
  },
  {
    "url": "fontawesome/svgs/solid/spa.svg",
    "revision": "3417ee34e2011381871cafdfd4aa2b3f"
  },
  {
    "url": "fontawesome/svgs/solid/space-shuttle.svg",
    "revision": "2721b6537798c4dc04965495a0a57175"
  },
  {
    "url": "fontawesome/svgs/solid/spell-check.svg",
    "revision": "480170ca7c0aa5a623c7074d2e7f337c"
  },
  {
    "url": "fontawesome/svgs/solid/spider.svg",
    "revision": "93df717454581c39264fa1e827e73b02"
  },
  {
    "url": "fontawesome/svgs/solid/spinner.svg",
    "revision": "d059232c8762e199199af3c8772918c9"
  },
  {
    "url": "fontawesome/svgs/solid/splotch.svg",
    "revision": "8eb45e54684dd24e6be95f6da460739c"
  },
  {
    "url": "fontawesome/svgs/solid/spray-can.svg",
    "revision": "c2205837a840fce464037a07bf1915e2"
  },
  {
    "url": "fontawesome/svgs/solid/square-full.svg",
    "revision": "c6fd7e8f47b3a84566296a63968c2bc4"
  },
  {
    "url": "fontawesome/svgs/solid/square-root-alt.svg",
    "revision": "a75c9f04de29b0ff30309ff7a460c3d2"
  },
  {
    "url": "fontawesome/svgs/solid/square.svg",
    "revision": "d4d69ca38b25f29e1f3ea2a4fad2666a"
  },
  {
    "url": "fontawesome/svgs/solid/stamp.svg",
    "revision": "ea6ba874be98c1588a6de21f7fb0efff"
  },
  {
    "url": "fontawesome/svgs/solid/star-and-crescent.svg",
    "revision": "8b8c739ca8d2f40ed4bb4f9ecc1e2c64"
  },
  {
    "url": "fontawesome/svgs/solid/star-half-alt.svg",
    "revision": "4e7de53324db6bc54e5dca26fa02ab27"
  },
  {
    "url": "fontawesome/svgs/solid/star-half.svg",
    "revision": "6ab157912f779f1364e42a70ebcf52ff"
  },
  {
    "url": "fontawesome/svgs/solid/star-of-david.svg",
    "revision": "b2bec2f27b05a1c8f1858ed9141b92a6"
  },
  {
    "url": "fontawesome/svgs/solid/star-of-life.svg",
    "revision": "c59ebbbc42070f72dcc9b71e321583b6"
  },
  {
    "url": "fontawesome/svgs/solid/star.svg",
    "revision": "0e6d7ada2dbd6f2a1207a8b33a4313ed"
  },
  {
    "url": "fontawesome/svgs/solid/step-backward.svg",
    "revision": "6a33ae2dfd7aa53a1b85c2a93e29dbc1"
  },
  {
    "url": "fontawesome/svgs/solid/step-forward.svg",
    "revision": "7e131474929f9c109a49fcc3f0b0c9bd"
  },
  {
    "url": "fontawesome/svgs/solid/stethoscope.svg",
    "revision": "a211ff71cf98c297202cf0945ecc7604"
  },
  {
    "url": "fontawesome/svgs/solid/sticky-note.svg",
    "revision": "e3954e630bd6a22217ae231dd8df2471"
  },
  {
    "url": "fontawesome/svgs/solid/stop-circle.svg",
    "revision": "54fb11882ef720dc4bee4075b16de847"
  },
  {
    "url": "fontawesome/svgs/solid/stop.svg",
    "revision": "d4d69ca38b25f29e1f3ea2a4fad2666a"
  },
  {
    "url": "fontawesome/svgs/solid/stopwatch.svg",
    "revision": "d7e975bbfc8eabd2976115e4b02184db"
  },
  {
    "url": "fontawesome/svgs/solid/store-alt.svg",
    "revision": "7263cdfc274ba5279e192af249ee39bf"
  },
  {
    "url": "fontawesome/svgs/solid/store.svg",
    "revision": "ea2b007855d020a979798be35740186a"
  },
  {
    "url": "fontawesome/svgs/solid/stream.svg",
    "revision": "365c404944fd7d9abf10a417ce6b4972"
  },
  {
    "url": "fontawesome/svgs/solid/street-view.svg",
    "revision": "a19e8d2e3ed6aee782a8d026d411e095"
  },
  {
    "url": "fontawesome/svgs/solid/strikethrough.svg",
    "revision": "5d8d5ead81d9b27fd40dbb83e22a532a"
  },
  {
    "url": "fontawesome/svgs/solid/stroopwafel.svg",
    "revision": "f5c00469ea103183914f024cce696f44"
  },
  {
    "url": "fontawesome/svgs/solid/subscript.svg",
    "revision": "9ed5c24e658a1dad59a6d4680f0bfe47"
  },
  {
    "url": "fontawesome/svgs/solid/subway.svg",
    "revision": "8d456c05e0c68a4e70ecf536d576d9d5"
  },
  {
    "url": "fontawesome/svgs/solid/suitcase-rolling.svg",
    "revision": "cdab734b2d4bb00c8e2afbfa22c0fc55"
  },
  {
    "url": "fontawesome/svgs/solid/suitcase.svg",
    "revision": "ec823795099c029ac1609b2c40bd2403"
  },
  {
    "url": "fontawesome/svgs/solid/sun.svg",
    "revision": "a0e76d5639bc0d0ae1c647535bd3418f"
  },
  {
    "url": "fontawesome/svgs/solid/superscript.svg",
    "revision": "b8828b3c6e045f3ca8ab1ce8e70e3655"
  },
  {
    "url": "fontawesome/svgs/solid/surprise.svg",
    "revision": "e492f0dfeadfaa6625e3d1dec8c99717"
  },
  {
    "url": "fontawesome/svgs/solid/swatchbook.svg",
    "revision": "b2064ef395ce95546af64e70adc948bd"
  },
  {
    "url": "fontawesome/svgs/solid/swimmer.svg",
    "revision": "bd52c7d33d83fa72e475eead27b03ff8"
  },
  {
    "url": "fontawesome/svgs/solid/swimming-pool.svg",
    "revision": "0f0b5e2f0f1048f2a6a70e2fdc19cadd"
  },
  {
    "url": "fontawesome/svgs/solid/synagogue.svg",
    "revision": "bc949d0642daf759f59307f062934b0f"
  },
  {
    "url": "fontawesome/svgs/solid/sync-alt.svg",
    "revision": "cc21bb0a022153518c6035621109b2c2"
  },
  {
    "url": "fontawesome/svgs/solid/sync.svg",
    "revision": "92f51119ca615c50708e1446e6dcf18e"
  },
  {
    "url": "fontawesome/svgs/solid/syringe.svg",
    "revision": "2182e20c71919f0da2c43c61b305cb66"
  },
  {
    "url": "fontawesome/svgs/solid/table-tennis.svg",
    "revision": "a53786b8fdce880f6c4fe1f3be5b673a"
  },
  {
    "url": "fontawesome/svgs/solid/table.svg",
    "revision": "5ff0497c40d654ce14ff82950e37ee40"
  },
  {
    "url": "fontawesome/svgs/solid/tablet-alt.svg",
    "revision": "4338cd0dfad7b1bf131f9e19af47039e"
  },
  {
    "url": "fontawesome/svgs/solid/tablet.svg",
    "revision": "72be395e14ea98d1bb7d6906f6571ef8"
  },
  {
    "url": "fontawesome/svgs/solid/tablets.svg",
    "revision": "4c0d42ec3b479500f3c1197de14c6de4"
  },
  {
    "url": "fontawesome/svgs/solid/tachometer-alt.svg",
    "revision": "9bd66ca2f8b001478894e058f1dac064"
  },
  {
    "url": "fontawesome/svgs/solid/tag.svg",
    "revision": "fb925ff1aac0da856688a8ba0dc1029c"
  },
  {
    "url": "fontawesome/svgs/solid/tags.svg",
    "revision": "7c095b925b98e2820e3e8e872e53b64f"
  },
  {
    "url": "fontawesome/svgs/solid/tape.svg",
    "revision": "9f25cf3a37f453e22bd204e0bd242454"
  },
  {
    "url": "fontawesome/svgs/solid/tasks.svg",
    "revision": "2549afdc61bb531eeb7f35ee0883ed9b"
  },
  {
    "url": "fontawesome/svgs/solid/taxi.svg",
    "revision": "259641c22cc0e198142d3d13fb71ad55"
  },
  {
    "url": "fontawesome/svgs/solid/teeth-open.svg",
    "revision": "d7ed3557bedf49d6b124e1bb5cc4583e"
  },
  {
    "url": "fontawesome/svgs/solid/teeth.svg",
    "revision": "c10e0faf4e5ce49b4e2ba8cdf8033653"
  },
  {
    "url": "fontawesome/svgs/solid/temperature-high.svg",
    "revision": "a23e0aa10fe58e9394068ab3acf0bcf7"
  },
  {
    "url": "fontawesome/svgs/solid/temperature-low.svg",
    "revision": "2516b7fb062b03eb20fef13c4bac07f2"
  },
  {
    "url": "fontawesome/svgs/solid/tenge.svg",
    "revision": "a3b2e1ca981b07bd5a34e1f340427037"
  },
  {
    "url": "fontawesome/svgs/solid/terminal.svg",
    "revision": "b9861e4a28a08438bb4695a2e85cde54"
  },
  {
    "url": "fontawesome/svgs/solid/text-height.svg",
    "revision": "834bedbf3ba2db08f2f01fb6dc6fc471"
  },
  {
    "url": "fontawesome/svgs/solid/text-width.svg",
    "revision": "b5d3a2983f16720d3060e11b643d3f1b"
  },
  {
    "url": "fontawesome/svgs/solid/th-large.svg",
    "revision": "6f46341c6c9c366c9db78a608a53277f"
  },
  {
    "url": "fontawesome/svgs/solid/th-list.svg",
    "revision": "51dca9ccc388a6711f72fdc87e9580e0"
  },
  {
    "url": "fontawesome/svgs/solid/th.svg",
    "revision": "16d566c5d2098acfa11a121b32a11b77"
  },
  {
    "url": "fontawesome/svgs/solid/theater-masks.svg",
    "revision": "99beca295a9686584e4642ed2001d20d"
  },
  {
    "url": "fontawesome/svgs/solid/thermometer-empty.svg",
    "revision": "8b987b47b40b7680f3546e503e7f13c8"
  },
  {
    "url": "fontawesome/svgs/solid/thermometer-full.svg",
    "revision": "b157432557a0f1ea222349d74653f92f"
  },
  {
    "url": "fontawesome/svgs/solid/thermometer-half.svg",
    "revision": "5ea62b05676e714dae6c603184f98e54"
  },
  {
    "url": "fontawesome/svgs/solid/thermometer-quarter.svg",
    "revision": "1378dd22844efa58cfe37f03ceab3b4c"
  },
  {
    "url": "fontawesome/svgs/solid/thermometer-three-quarters.svg",
    "revision": "247169e87dfc5ee2ba9b6659e8bf2ea9"
  },
  {
    "url": "fontawesome/svgs/solid/thermometer.svg",
    "revision": "000f73d4b0388ea2a3706514686d3bf2"
  },
  {
    "url": "fontawesome/svgs/solid/thumbs-down.svg",
    "revision": "f0a9848db16ffcbd1c0c7dd74e97254c"
  },
  {
    "url": "fontawesome/svgs/solid/thumbs-up.svg",
    "revision": "7966602ed8353222aeb477d88e77d857"
  },
  {
    "url": "fontawesome/svgs/solid/thumbtack.svg",
    "revision": "737815c85c880b9af3cd56de270f818d"
  },
  {
    "url": "fontawesome/svgs/solid/ticket-alt.svg",
    "revision": "198c37c759d8f3a285455b4e03ee7792"
  },
  {
    "url": "fontawesome/svgs/solid/times-circle.svg",
    "revision": "8ba8b286cacce728fd83c2678bc23edf"
  },
  {
    "url": "fontawesome/svgs/solid/times.svg",
    "revision": "fe2100226016c7273b36a7ada271889b"
  },
  {
    "url": "fontawesome/svgs/solid/tint-slash.svg",
    "revision": "5a83ab9442c848dfaa3023f784168d13"
  },
  {
    "url": "fontawesome/svgs/solid/tint.svg",
    "revision": "f3ec932edfa5706d8f626c92848dbdc7"
  },
  {
    "url": "fontawesome/svgs/solid/tired.svg",
    "revision": "8050052fd7ce0712bebe259975432c7b"
  },
  {
    "url": "fontawesome/svgs/solid/toggle-off.svg",
    "revision": "e500252a27eb6af0b0c0853d856b3647"
  },
  {
    "url": "fontawesome/svgs/solid/toggle-on.svg",
    "revision": "6043e62761589cf59240ed48b2b56544"
  },
  {
    "url": "fontawesome/svgs/solid/toilet-paper.svg",
    "revision": "14d40fc9f5af6151e62ee33e68be7cb2"
  },
  {
    "url": "fontawesome/svgs/solid/toilet.svg",
    "revision": "22b9dd3b972f462b0ade7b3c6076d1f7"
  },
  {
    "url": "fontawesome/svgs/solid/toolbox.svg",
    "revision": "0c788597621c9a54c5d490f0ed440cfc"
  },
  {
    "url": "fontawesome/svgs/solid/tools.svg",
    "revision": "a3090786effb440126167e744d0bf236"
  },
  {
    "url": "fontawesome/svgs/solid/tooth.svg",
    "revision": "fb37b94acb57f607ff33c41cd3c9ee7b"
  },
  {
    "url": "fontawesome/svgs/solid/torah.svg",
    "revision": "0d89f4f4961e23edac720870f61e09c0"
  },
  {
    "url": "fontawesome/svgs/solid/torii-gate.svg",
    "revision": "1172d81262bfa318c2d8502a13e26cac"
  },
  {
    "url": "fontawesome/svgs/solid/tractor.svg",
    "revision": "d16a1203d9db7d62a9d3c7e0a1096234"
  },
  {
    "url": "fontawesome/svgs/solid/trademark.svg",
    "revision": "ed02adff515935adc28e00a028552377"
  },
  {
    "url": "fontawesome/svgs/solid/traffic-light.svg",
    "revision": "0240adeb0990bc5add5cc1fe5725c7f2"
  },
  {
    "url": "fontawesome/svgs/solid/train.svg",
    "revision": "536d3fe6074daaec8c219c8e4feda614"
  },
  {
    "url": "fontawesome/svgs/solid/tram.svg",
    "revision": "d35e92e1afdb750ed22ef0a5e8bc5504"
  },
  {
    "url": "fontawesome/svgs/solid/transgender-alt.svg",
    "revision": "d82c58c4c046c530c9238d41ec8980b4"
  },
  {
    "url": "fontawesome/svgs/solid/transgender.svg",
    "revision": "b91e2f092cbbbabcece65b53d85b21c4"
  },
  {
    "url": "fontawesome/svgs/solid/trash-alt.svg",
    "revision": "762fa71bd93692ced8981bba810ae1a1"
  },
  {
    "url": "fontawesome/svgs/solid/trash-restore-alt.svg",
    "revision": "a811e056fc7d0e85cb8d90f3d6637795"
  },
  {
    "url": "fontawesome/svgs/solid/trash-restore.svg",
    "revision": "979d873e424376330e7004531b80df18"
  },
  {
    "url": "fontawesome/svgs/solid/trash.svg",
    "revision": "aff71bea5f4ac847c446f278b72cb057"
  },
  {
    "url": "fontawesome/svgs/solid/tree.svg",
    "revision": "a61c0af94a7640badfb285fe36cba0d3"
  },
  {
    "url": "fontawesome/svgs/solid/trophy.svg",
    "revision": "d9092b2165518a6cebf982d0b5e33b77"
  },
  {
    "url": "fontawesome/svgs/solid/truck-loading.svg",
    "revision": "6881d4bec08e4b0860992059e33ee922"
  },
  {
    "url": "fontawesome/svgs/solid/truck-monster.svg",
    "revision": "4eb9113fa3d2b67c4e8ea6a4b45e43b9"
  },
  {
    "url": "fontawesome/svgs/solid/truck-moving.svg",
    "revision": "addfd90944a701b4634e7b8e2eb65269"
  },
  {
    "url": "fontawesome/svgs/solid/truck-pickup.svg",
    "revision": "5416a5d50e7814e3a7c7ab21ed49bf3c"
  },
  {
    "url": "fontawesome/svgs/solid/truck.svg",
    "revision": "27e56064fd7e7eba8fa82afe8b0879a5"
  },
  {
    "url": "fontawesome/svgs/solid/tshirt.svg",
    "revision": "58f3548edd43401b143516b8b5623403"
  },
  {
    "url": "fontawesome/svgs/solid/tty.svg",
    "revision": "4aa75f503eafc2f9b158a6a63d1a2f08"
  },
  {
    "url": "fontawesome/svgs/solid/tv.svg",
    "revision": "5d11621ba5e18e1f1275ad8148ed78c0"
  },
  {
    "url": "fontawesome/svgs/solid/umbrella-beach.svg",
    "revision": "bd04d0992aba9e9c6c8fe035ba12aa82"
  },
  {
    "url": "fontawesome/svgs/solid/umbrella.svg",
    "revision": "5a008a8af9912588e84b14cb27dcfdf3"
  },
  {
    "url": "fontawesome/svgs/solid/underline.svg",
    "revision": "ca2ef5bd0a6df034065275f5110b4cc7"
  },
  {
    "url": "fontawesome/svgs/solid/undo-alt.svg",
    "revision": "5ee04a9492cf7f15bf12969d19ca801f"
  },
  {
    "url": "fontawesome/svgs/solid/undo.svg",
    "revision": "144aa79f1d0a593030d8a6a40a39bbc2"
  },
  {
    "url": "fontawesome/svgs/solid/universal-access.svg",
    "revision": "1194d8d3a80b1bb2b7270f6de117eb33"
  },
  {
    "url": "fontawesome/svgs/solid/university.svg",
    "revision": "4a0ff53e20d4a1220814c38ab0047730"
  },
  {
    "url": "fontawesome/svgs/solid/unlink.svg",
    "revision": "e3a6a6596706d3b11eaf12688529a475"
  },
  {
    "url": "fontawesome/svgs/solid/unlock-alt.svg",
    "revision": "647cdfe67771f25563b030529b7327ad"
  },
  {
    "url": "fontawesome/svgs/solid/unlock.svg",
    "revision": "fb18305a06ec1e4628e897cd1041922e"
  },
  {
    "url": "fontawesome/svgs/solid/upload.svg",
    "revision": "09e3921428d9f5879d43fe3b2d9db82d"
  },
  {
    "url": "fontawesome/svgs/solid/user-alt-slash.svg",
    "revision": "9c014fb4b111c9bc056b4ad6d65072e3"
  },
  {
    "url": "fontawesome/svgs/solid/user-alt.svg",
    "revision": "492ddda5335b2c531320ac318f02e699"
  },
  {
    "url": "fontawesome/svgs/solid/user-astronaut.svg",
    "revision": "e578c7279613794afc2c27f5af0ca582"
  },
  {
    "url": "fontawesome/svgs/solid/user-check.svg",
    "revision": "d92cd35e3d94710c6c928ee0751f8377"
  },
  {
    "url": "fontawesome/svgs/solid/user-circle.svg",
    "revision": "47078676c694de61b8120db8090f258d"
  },
  {
    "url": "fontawesome/svgs/solid/user-clock.svg",
    "revision": "097ad00145a9fcbe8c9a5730f9f44102"
  },
  {
    "url": "fontawesome/svgs/solid/user-cog.svg",
    "revision": "c9b55a06170cfde38288135cdb8805ef"
  },
  {
    "url": "fontawesome/svgs/solid/user-edit.svg",
    "revision": "c6850bd37302ad4b052fc8638a4719bc"
  },
  {
    "url": "fontawesome/svgs/solid/user-friends.svg",
    "revision": "f21aeaa482a775713cea0f3e0053c834"
  },
  {
    "url": "fontawesome/svgs/solid/user-graduate.svg",
    "revision": "357ac82777a0f77301b35f97ba084dcd"
  },
  {
    "url": "fontawesome/svgs/solid/user-injured.svg",
    "revision": "dd59e793751e902bb10d63d6781c140c"
  },
  {
    "url": "fontawesome/svgs/solid/user-lock.svg",
    "revision": "4da11be50101c91e3556effd09996080"
  },
  {
    "url": "fontawesome/svgs/solid/user-md.svg",
    "revision": "041e87be95c18aad996f762d04909d68"
  },
  {
    "url": "fontawesome/svgs/solid/user-minus.svg",
    "revision": "17647453844271b4f3c2fd7ed69c44a2"
  },
  {
    "url": "fontawesome/svgs/solid/user-ninja.svg",
    "revision": "124e3815ab8335d9a8d1fb857197a710"
  },
  {
    "url": "fontawesome/svgs/solid/user-nurse.svg",
    "revision": "2264da6e302dfc32b32e16fab4c301c9"
  },
  {
    "url": "fontawesome/svgs/solid/user-plus.svg",
    "revision": "a671f87a726eeb05fc38f81629557d93"
  },
  {
    "url": "fontawesome/svgs/solid/user-secret.svg",
    "revision": "b6a54582af4f19f39c7d8f278c63b15d"
  },
  {
    "url": "fontawesome/svgs/solid/user-shield.svg",
    "revision": "93ee9b788b39a4abddbeb41bb4f89636"
  },
  {
    "url": "fontawesome/svgs/solid/user-slash.svg",
    "revision": "754ed3ba1ae7f501b9eb30ea63769a4f"
  },
  {
    "url": "fontawesome/svgs/solid/user-tag.svg",
    "revision": "d2c1b516c8819dc9bae18a41da5b7655"
  },
  {
    "url": "fontawesome/svgs/solid/user-tie.svg",
    "revision": "f2016254fa4a1becf6a4e44300b0e30e"
  },
  {
    "url": "fontawesome/svgs/solid/user-times.svg",
    "revision": "e0b18a9723602ae036546c8a8cf77a84"
  },
  {
    "url": "fontawesome/svgs/solid/user.svg",
    "revision": "e086c24763139e41b0d4fa7ef5330336"
  },
  {
    "url": "fontawesome/svgs/solid/users-cog.svg",
    "revision": "f896a5dafc3cc6086f260eb579ce9d22"
  },
  {
    "url": "fontawesome/svgs/solid/users.svg",
    "revision": "0a1415e69c75888b621980c7911b9f3c"
  },
  {
    "url": "fontawesome/svgs/solid/utensil-spoon.svg",
    "revision": "e0161d237a3e8d8f97e30990e6e09c11"
  },
  {
    "url": "fontawesome/svgs/solid/utensils.svg",
    "revision": "8da08877ffdbb087eaadf2c0baae2f7c"
  },
  {
    "url": "fontawesome/svgs/solid/vector-square.svg",
    "revision": "a749bfac4189ef510088ccff62353830"
  },
  {
    "url": "fontawesome/svgs/solid/venus-double.svg",
    "revision": "f1a45dbe50722158cda9d38e62c20c58"
  },
  {
    "url": "fontawesome/svgs/solid/venus-mars.svg",
    "revision": "6e87624f0d696c322eabb5cd18d3a661"
  },
  {
    "url": "fontawesome/svgs/solid/venus.svg",
    "revision": "548bb92edaf1c4f97d951651fc8bba71"
  },
  {
    "url": "fontawesome/svgs/solid/vial.svg",
    "revision": "9d0692cafdeff250c627d6e09aa173e5"
  },
  {
    "url": "fontawesome/svgs/solid/vials.svg",
    "revision": "5f3e96ead67f9402656104f17d31cfc3"
  },
  {
    "url": "fontawesome/svgs/solid/video-slash.svg",
    "revision": "f3215a337e050a35307d81492b197e17"
  },
  {
    "url": "fontawesome/svgs/solid/video.svg",
    "revision": "108507924a6455b3c123e7eec4b60fea"
  },
  {
    "url": "fontawesome/svgs/solid/vihara.svg",
    "revision": "41d05acb3ac2ffe4d1876182e9c3e7a3"
  },
  {
    "url": "fontawesome/svgs/solid/voicemail.svg",
    "revision": "157c9600f4ed21a49a88b489e68e11b3"
  },
  {
    "url": "fontawesome/svgs/solid/volleyball-ball.svg",
    "revision": "8d3125ba012ca1e290f12701e46471c2"
  },
  {
    "url": "fontawesome/svgs/solid/volume-down.svg",
    "revision": "5c51b325e41591faa179fc6309004251"
  },
  {
    "url": "fontawesome/svgs/solid/volume-mute.svg",
    "revision": "4d9883c00b0fdbbcc188524b4966cea7"
  },
  {
    "url": "fontawesome/svgs/solid/volume-off.svg",
    "revision": "29eb9f0fd552bce4b5e0a1054b9124a7"
  },
  {
    "url": "fontawesome/svgs/solid/volume-up.svg",
    "revision": "4685354d38186469879075ac9a3c7279"
  },
  {
    "url": "fontawesome/svgs/solid/vote-yea.svg",
    "revision": "95cde216718c72e839b083823c7a766a"
  },
  {
    "url": "fontawesome/svgs/solid/vr-cardboard.svg",
    "revision": "b85ddf3b1f145997fbb7ed86949b1c9c"
  },
  {
    "url": "fontawesome/svgs/solid/walking.svg",
    "revision": "a1385d6a1a7627548713ca6e9fa33a8a"
  },
  {
    "url": "fontawesome/svgs/solid/wallet.svg",
    "revision": "f5bd04221af046320b800835b0522710"
  },
  {
    "url": "fontawesome/svgs/solid/warehouse.svg",
    "revision": "d57fe6fbb8bb0dd39c21c217fa8e19c8"
  },
  {
    "url": "fontawesome/svgs/solid/water.svg",
    "revision": "1094adf91e410a79fc47e32ac9bebf9a"
  },
  {
    "url": "fontawesome/svgs/solid/wave-square.svg",
    "revision": "e526e3311d1775ac5f701273b2ae7027"
  },
  {
    "url": "fontawesome/svgs/solid/weight-hanging.svg",
    "revision": "77cc5164da17c0e7bf9de6387703c283"
  },
  {
    "url": "fontawesome/svgs/solid/weight.svg",
    "revision": "e168395b44f95cbd4ac361bc5a84acf4"
  },
  {
    "url": "fontawesome/svgs/solid/wheelchair.svg",
    "revision": "114515040cb9d6c52a637a6295645a20"
  },
  {
    "url": "fontawesome/svgs/solid/wifi.svg",
    "revision": "b3a576286d27887de5d9be9688fc0630"
  },
  {
    "url": "fontawesome/svgs/solid/wind.svg",
    "revision": "cf2ddcf8a97fc1d8586211a71b20ca0c"
  },
  {
    "url": "fontawesome/svgs/solid/window-close.svg",
    "revision": "be9054c0545cb3e22128f056e427f27d"
  },
  {
    "url": "fontawesome/svgs/solid/window-maximize.svg",
    "revision": "cc54e8e95077ef678b3170cda25d9abf"
  },
  {
    "url": "fontawesome/svgs/solid/window-minimize.svg",
    "revision": "a1b925d7558be2fa1ed375110e5489dc"
  },
  {
    "url": "fontawesome/svgs/solid/window-restore.svg",
    "revision": "22d94a411cdefabab2fb1449353c9b0a"
  },
  {
    "url": "fontawesome/svgs/solid/wine-bottle.svg",
    "revision": "c6f18dea0245c48ca6ebe869a7dda0ac"
  },
  {
    "url": "fontawesome/svgs/solid/wine-glass-alt.svg",
    "revision": "9b8841f5abcb681e149a5b4bc222a3ba"
  },
  {
    "url": "fontawesome/svgs/solid/wine-glass.svg",
    "revision": "75c20d15bdbdd701ee1313db228c5b55"
  },
  {
    "url": "fontawesome/svgs/solid/won-sign.svg",
    "revision": "4e37a5965786d64b336c4f9ed9f3637e"
  },
  {
    "url": "fontawesome/svgs/solid/wrench.svg",
    "revision": "7c980e84aa7d68fe3e071e381406a862"
  },
  {
    "url": "fontawesome/svgs/solid/x-ray.svg",
    "revision": "cb2d8b17ef029c1a5015facd1e364038"
  },
  {
    "url": "fontawesome/svgs/solid/yen-sign.svg",
    "revision": "e760b300ce0033b55933983d6adbfcf9"
  },
  {
    "url": "fontawesome/svgs/solid/yin-yang.svg",
    "revision": "12df2abbcfdd212c61759526f723b5fd"
  },
  {
    "url": "fontawesome/webfonts/fa-brands-400.svg",
    "revision": "bfa9c38bd6081dafe7278dedc4aad1d9"
  },
  {
    "url": "fontawesome/webfonts/fa-regular-400.svg",
    "revision": "95f13e0be408d117bd3d9b366084a3ef"
  },
  {
    "url": "fontawesome/webfonts/fa-solid-900.svg",
    "revision": "6ed5e3bc9018d2a03e2f1fadbf8a0a4a"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-Black-webfont.svg",
    "revision": "a771641ea19cf0f3a27b0b29f867e303"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-BlackItalic-webfont.svg",
    "revision": "217b7a7db7eda4bb1880816016ced8a8"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-Bold-webfont.svg",
    "revision": "73d4f283372338742066c979bf9bbd22"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-BoldItalic-webfont.svg",
    "revision": "32c07b14a85ff1b18c9e3be512de1fb0"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-Italic-webfont.svg",
    "revision": "901cb93cadd710b5cdb1a273eabd6f49"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-Light-webfont.svg",
    "revision": "ae03617c87fd538d00b85155c559864b"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-LightItalic-webfont.svg",
    "revision": "e391dc6d5863d11a88e1e832d7d4422f"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-Medium-webfont.svg",
    "revision": "a5692169fc006c84bb7cb0e356fa96f7"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-MediumItalic-webfont.svg",
    "revision": "da6f6d7852aba4133f4fdc3b38a4f7dc"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-Regular-webfont.svg",
    "revision": "1d45bc40211734dc3226d06bbc836d7f"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-Thin-webfont.svg",
    "revision": "a6419bd0cc26e8e3d77d438e594a3ca3"
  },
  {
    "url": "fonts (copy 1)/roboto/Roboto-ThinItalic-webfont.svg",
    "revision": "92e65d4c89d53923c54455b2ffc5be8b"
  },
  {
    "url": "fonts (copy 1)/roboto/RobotoCondensed-Bold-webfont.svg",
    "revision": "2fae6e02c35123fcb8680ffad7385dfc"
  },
  {
    "url": "fonts (copy 1)/roboto/RobotoCondensed-BoldItalic-webfont.svg",
    "revision": "3e7ad87dcf333fdd362a771218c7d5d5"
  },
  {
    "url": "fonts (copy 1)/roboto/RobotoCondensed-Italic-webfont.svg",
    "revision": "067aa6d7c8014a552a95b6edd6e97791"
  },
  {
    "url": "fonts (copy 1)/roboto/RobotoCondensed-Light-webfont.svg",
    "revision": "6bbd85c0bee9e13ec9ba439109dd80cf"
  },
  {
    "url": "fonts (copy 1)/roboto/RobotoCondensed-LightItalic-webfont.svg",
    "revision": "cceda105d33e417bc866ba7daf137979"
  },
  {
    "url": "fonts (copy 1)/roboto/RobotoCondensed-Regular-webfont.svg",
    "revision": "a98d371a65dab351f3e613e57dc804e5"
  },
  {
    "url": "fonts/roboto/Roboto-Black-webfont.svg",
    "revision": "a771641ea19cf0f3a27b0b29f867e303"
  },
  {
    "url": "fonts/roboto/Roboto-BlackItalic-webfont.svg",
    "revision": "217b7a7db7eda4bb1880816016ced8a8"
  },
  {
    "url": "fonts/roboto/Roboto-Bold-webfont.svg",
    "revision": "73d4f283372338742066c979bf9bbd22"
  },
  {
    "url": "fonts/roboto/Roboto-BoldItalic-webfont.svg",
    "revision": "32c07b14a85ff1b18c9e3be512de1fb0"
  },
  {
    "url": "fonts/roboto/Roboto-Italic-webfont.svg",
    "revision": "901cb93cadd710b5cdb1a273eabd6f49"
  },
  {
    "url": "fonts/roboto/Roboto-Light-webfont.svg",
    "revision": "ae03617c87fd538d00b85155c559864b"
  },
  {
    "url": "fonts/roboto/Roboto-LightItalic-webfont.svg",
    "revision": "e391dc6d5863d11a88e1e832d7d4422f"
  },
  {
    "url": "fonts/roboto/Roboto-Medium-webfont.svg",
    "revision": "a5692169fc006c84bb7cb0e356fa96f7"
  },
  {
    "url": "fonts/roboto/Roboto-MediumItalic-webfont.svg",
    "revision": "da6f6d7852aba4133f4fdc3b38a4f7dc"
  },
  {
    "url": "fonts/roboto/Roboto-Regular-webfont.svg",
    "revision": "1d45bc40211734dc3226d06bbc836d7f"
  },
  {
    "url": "fonts/roboto/Roboto-Thin-webfont.svg",
    "revision": "a6419bd0cc26e8e3d77d438e594a3ca3"
  },
  {
    "url": "fonts/roboto/Roboto-ThinItalic-webfont.svg",
    "revision": "92e65d4c89d53923c54455b2ffc5be8b"
  },
  {
    "url": "fonts/roboto/RobotoCondensed-Bold-webfont.svg",
    "revision": "2fae6e02c35123fcb8680ffad7385dfc"
  },
  {
    "url": "fonts/roboto/RobotoCondensed-BoldItalic-webfont.svg",
    "revision": "3e7ad87dcf333fdd362a771218c7d5d5"
  },
  {
    "url": "fonts/roboto/RobotoCondensed-Italic-webfont.svg",
    "revision": "067aa6d7c8014a552a95b6edd6e97791"
  },
  {
    "url": "fonts/roboto/RobotoCondensed-Light-webfont.svg",
    "revision": "6bbd85c0bee9e13ec9ba439109dd80cf"
  },
  {
    "url": "fonts/roboto/RobotoCondensed-LightItalic-webfont.svg",
    "revision": "cceda105d33e417bc866ba7daf137979"
  },
  {
    "url": "fonts/roboto/RobotoCondensed-Regular-webfont.svg",
    "revision": "a98d371a65dab351f3e613e57dc804e5"
  },
  {
    "url": "images/avatars/1.jpg",
    "revision": "54726fafc32c4cc743f8232b792e4a4b"
  },
  {
    "url": "images/avatars/2.jpg",
    "revision": "7e9866d26ccf26821648ecf4aedf72c8"
  },
  {
    "url": "images/avatars/3.jpg",
    "revision": "ddbb28e0e52e5c3628e45827cda0a63f"
  },
  {
    "url": "images/avatars/4.jpg",
    "revision": "c05b96b1783261662a6b62117f62c776"
  },
  {
    "url": "images/character.jpg",
    "revision": "93917f73be2e8330f502402f9071278a"
  },
  {
    "url": "images/foods/1.jpg",
    "revision": "837fcbba2f009fdc53194d690cb94bac"
  },
  {
    "url": "images/foods/2.jpg",
    "revision": "8c4c6d90b67f43a006b9d68c4c52471c"
  },
  {
    "url": "images/foods/3.jpg",
    "revision": "15447acd5f3798b660c85b5949bb337a"
  },
  {
    "url": "images/foods/4.jpg",
    "revision": "c3d09024ce9a24bafc7dd70872739667"
  },
  {
    "url": "images/foods/5.jpg",
    "revision": "0184d7b1fa5567ed2384d74aa42af274"
  },
  {
    "url": "images/hormoz.jpg",
    "revision": "725596a7cb152562fb974b50644bbe12"
  },
  {
    "url": "images/isfahan.jpg",
    "revision": "4fcc912620cb2aa27e43d8b373230ec3"
  },
  {
    "url": "images/kerman.jpg",
    "revision": "0874570c10df9c536407b8a05c2d811a"
  },
  {
    "url": "images/kerman2.jpg",
    "revision": "4c09fe4e0a19b999d5d1ea1e39f13b92"
  },
  {
    "url": "images/kerman3.jpg",
    "revision": "12b084b9dcf43c862086f0d4540b98ed"
  },
  {
    "url": "images/lorestan.jpg",
    "revision": "d952c86aaf060657d64c04bfba5ea5ee"
  },
  {
    "url": "images/shiraz.jpg",
    "revision": "dcbfd2eed0e155604ee64c871a397696"
  },
  {
    "url": "images/yazd.jpg",
    "revision": "c0a4f5ded9817f1ae8395546f02d6bad"
  },
  {
    "url": "js/app.js",
    "revision": "8af2c311b1a5abd1b251a5a52b956e42"
  },
  {
    "url": "js/main.js",
    "revision": "9166613e762456d006462e2366803a20"
  },
  {
    "url": "mix-manifest.json",
    "revision": "207fd484b7c2ceeff7800b8c8a11b3b6"
  }
]);

    // match routes for homepage, blog and any sub-pages of blog
    workbox.routing.registerRoute(
        /^\/(?:(login)?(\/.*)?)$/,
        new workbox.strategies.NetworkFirst({
            cacheName: 'static-resources',
        })
    );

    // js/css files
    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-resources',
        })
    );

    // images
    workbox.routing.registerRoute(
        // Cache image files.
        /\.(?:png|jpg|jpeg|svg|gif)$/,
        // Use the cache if it's available.
        new workbox.strategies.CacheFirst({
            // Use a custom cache name.
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache upto 50 images.
                    maxEntries: 50,
                    // Cache for a maximum of a week.
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ],
        })
    );

}