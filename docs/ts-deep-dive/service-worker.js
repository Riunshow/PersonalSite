/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d4e51502c2f5c9257ef4a46be2154e0d"
  },
  {
    "url": "assets/css/0.styles.74a5b51e.css",
    "revision": "3d63ef955a1bd5c9193e861e9341e3d7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2494c4ce.js",
    "revision": "ca6917bd246acd1454dbc284481ad65e"
  },
  {
    "url": "assets/js/11.3fdb3789.js",
    "revision": "536558da5d3899b2b2360e506592e703"
  },
  {
    "url": "assets/js/12.8238cf68.js",
    "revision": "b8cc6c82cad022b4d91d940c5a7b48a2"
  },
  {
    "url": "assets/js/13.a0903cfa.js",
    "revision": "0d9a700a6816a975392812b5e20824c7"
  },
  {
    "url": "assets/js/14.806e4039.js",
    "revision": "6aebe9d44b21530d09c854c77583d04f"
  },
  {
    "url": "assets/js/15.af462ae1.js",
    "revision": "0bb23d06f74cf05be940e5f71159cb8a"
  },
  {
    "url": "assets/js/16.eecc8a9b.js",
    "revision": "2f7f095e7c58d35a92f0c644419daffc"
  },
  {
    "url": "assets/js/17.347ed6df.js",
    "revision": "6191bee29ae6886a51e16480c38ce34a"
  },
  {
    "url": "assets/js/18.67f1ad5d.js",
    "revision": "1af997c3c711b03f8bdfd9785dc4b2fe"
  },
  {
    "url": "assets/js/19.9e764ce0.js",
    "revision": "f158aaa08c13aff55e954d54732dfb1a"
  },
  {
    "url": "assets/js/2.bb210b4e.js",
    "revision": "6d65edfceee5c2debb10537bc9670855"
  },
  {
    "url": "assets/js/20.17a5f2c4.js",
    "revision": "ddf99b8a19d0d16e8e1d3e6be8937ed7"
  },
  {
    "url": "assets/js/21.e66341c6.js",
    "revision": "a7c8e7206521059509029ce234b6b3f5"
  },
  {
    "url": "assets/js/22.ba33ad3e.js",
    "revision": "df06df3a220bb4127dca45650c5c2bd4"
  },
  {
    "url": "assets/js/23.2d5deb54.js",
    "revision": "ac499b83856b9e77b3fffce4788d889d"
  },
  {
    "url": "assets/js/24.46559c29.js",
    "revision": "74a07e6ac45490ed333312e84c125fa1"
  },
  {
    "url": "assets/js/25.46332d35.js",
    "revision": "661d2003b02535f90689a82cc2155dc7"
  },
  {
    "url": "assets/js/26.676f0ef1.js",
    "revision": "ed3b0b53a458db5353d3d2d4417bc85f"
  },
  {
    "url": "assets/js/27.0dc6ab05.js",
    "revision": "3dd52d3c27720e5fb7373f39ee92e33f"
  },
  {
    "url": "assets/js/28.e2e906db.js",
    "revision": "b7c0e2ad0a7c817491f51cae36bb88ce"
  },
  {
    "url": "assets/js/29.d82136b9.js",
    "revision": "e40846a436ee013b39843154fd6ff05c"
  },
  {
    "url": "assets/js/3.f3bc3614.js",
    "revision": "0bbc8e85ba28c30a6fda5ff5d7eb2457"
  },
  {
    "url": "assets/js/30.151ce8dd.js",
    "revision": "0c8e5543a846aa136d947e41b0df3420"
  },
  {
    "url": "assets/js/31.6c375337.js",
    "revision": "0480c1ec0aaee99f34b91b11bec2f908"
  },
  {
    "url": "assets/js/32.84066920.js",
    "revision": "9c6e1eebdd49e26c284bc457ddb5b887"
  },
  {
    "url": "assets/js/33.4ad999fb.js",
    "revision": "ef6ef80a43d8452b8d6a89a65944561b"
  },
  {
    "url": "assets/js/34.a01261eb.js",
    "revision": "15ba93e900a649e4f702d946e9f661cf"
  },
  {
    "url": "assets/js/35.552d1c76.js",
    "revision": "69a9a8e3417b75024742e5913776fd95"
  },
  {
    "url": "assets/js/36.cda1130a.js",
    "revision": "afa578d61e0f358c665d880e5b893970"
  },
  {
    "url": "assets/js/37.d1a5eb87.js",
    "revision": "3604c866c5e4073a2b0e476f53bd041e"
  },
  {
    "url": "assets/js/38.dbcd9247.js",
    "revision": "9bad6ce8f0684a829f2125b2fa6425c3"
  },
  {
    "url": "assets/js/39.59b14a99.js",
    "revision": "001f392683686f1ebe3d3c20f46f0287"
  },
  {
    "url": "assets/js/4.97b407a0.js",
    "revision": "a32ad818e69d18178c02da39f08e4e9c"
  },
  {
    "url": "assets/js/40.08ebda50.js",
    "revision": "0b5e2b5fa25c2cdf03ac97150d9766f3"
  },
  {
    "url": "assets/js/41.07563f31.js",
    "revision": "b4438fb946588c38acc36967d31d0a75"
  },
  {
    "url": "assets/js/42.59f722db.js",
    "revision": "1d33ffa2729c1f0bc834ca0b74328bd6"
  },
  {
    "url": "assets/js/43.b4263aa8.js",
    "revision": "faafb2f2198e4a5799ca651651a27cdf"
  },
  {
    "url": "assets/js/44.0293a100.js",
    "revision": "402501bd4c5f1b6b7906586a79146e96"
  },
  {
    "url": "assets/js/45.995ee51a.js",
    "revision": "619b1573acd79d68ae3fc02bf5d51b7c"
  },
  {
    "url": "assets/js/46.dd3c4db2.js",
    "revision": "8181c9bc31b04a4207ef59cbb9809ff8"
  },
  {
    "url": "assets/js/47.2880b45d.js",
    "revision": "8b8b21ae2b4f09255bb2864a2ef1093b"
  },
  {
    "url": "assets/js/48.4d779578.js",
    "revision": "22c5e0ea077ec15b3e536e1d50f4e381"
  },
  {
    "url": "assets/js/49.d861d7ef.js",
    "revision": "a264cf3d3cd80ba4839e43558e4c50cf"
  },
  {
    "url": "assets/js/5.267e6652.js",
    "revision": "a8b1423647209cac06d633e109a70c1d"
  },
  {
    "url": "assets/js/50.d6937852.js",
    "revision": "ebff85b4e4276e3f7871f6895fbeefd6"
  },
  {
    "url": "assets/js/51.7e073da9.js",
    "revision": "529c4b67fab0c27b57031092152e1b38"
  },
  {
    "url": "assets/js/52.1601afb8.js",
    "revision": "3c20602fc386b928ddd9a91d0e2593ff"
  },
  {
    "url": "assets/js/53.0d315e67.js",
    "revision": "253973bc6c0d9583c99e5ee0bcb7d64f"
  },
  {
    "url": "assets/js/54.9ed4305b.js",
    "revision": "1aa5dd7c1db50ae07b3478a390f44a00"
  },
  {
    "url": "assets/js/55.7b16815c.js",
    "revision": "0636d7d2c1d28e27fca6ed106ddc3ac6"
  },
  {
    "url": "assets/js/56.43139dbd.js",
    "revision": "3841dd171820d2d3be76310da1812c38"
  },
  {
    "url": "assets/js/57.adbbf9eb.js",
    "revision": "42b006fe3209d3a6c995d8b8d7ce522d"
  },
  {
    "url": "assets/js/58.803f0fae.js",
    "revision": "e868c9d3420c25ba1860e611ec1ffe27"
  },
  {
    "url": "assets/js/59.68e0b20f.js",
    "revision": "b0c6fc1d7afbfbf9afa692f15ea77071"
  },
  {
    "url": "assets/js/6.e86d14cc.js",
    "revision": "ba998ee4a950c78ba4706393f163b2e9"
  },
  {
    "url": "assets/js/60.654775d1.js",
    "revision": "fea7330593252632e49b4ad92f62c0be"
  },
  {
    "url": "assets/js/61.aec32d35.js",
    "revision": "52fddb6e30a0f7381c356cc1b9cd4b20"
  },
  {
    "url": "assets/js/62.c3fe3303.js",
    "revision": "1323778d75f70b20b00d88f1d499d82f"
  },
  {
    "url": "assets/js/63.7718c912.js",
    "revision": "6e9925a4f531c8fd1f54928d47403830"
  },
  {
    "url": "assets/js/64.5a976914.js",
    "revision": "b1f946e8c2c4e72b4568cee62374a5dc"
  },
  {
    "url": "assets/js/65.36d98237.js",
    "revision": "335a6fa6b9ec66d0d1df2bd3b6c3a04f"
  },
  {
    "url": "assets/js/66.897ccdfc.js",
    "revision": "072e5acdd7d93f9ce713472692286cde"
  },
  {
    "url": "assets/js/67.0e36b652.js",
    "revision": "c997c12bbbddba51a1b9667775e05d65"
  },
  {
    "url": "assets/js/68.e2323660.js",
    "revision": "83a01c9e25285b7c5a68b2c342d99e16"
  },
  {
    "url": "assets/js/69.6f2b2c3c.js",
    "revision": "a75284762996a71e186840d2122d6fdf"
  },
  {
    "url": "assets/js/7.865886f8.js",
    "revision": "a874223d550bf5ec6f811bb6f5c55661"
  },
  {
    "url": "assets/js/70.9fa9ccfc.js",
    "revision": "28a1b93f657bd298abb80a0dc961a750"
  },
  {
    "url": "assets/js/71.64cb1fc2.js",
    "revision": "6be28f211330b888615f9a6477da02c6"
  },
  {
    "url": "assets/js/72.cecc30c5.js",
    "revision": "7f5f9733d9feb3d457ea83b5e079d4db"
  },
  {
    "url": "assets/js/73.d03f348e.js",
    "revision": "01c71816f726ff9f4d9db29ed30527d6"
  },
  {
    "url": "assets/js/74.ab0a8852.js",
    "revision": "6d5677ff0f9953305724fa0ec1910a9a"
  },
  {
    "url": "assets/js/75.60f237df.js",
    "revision": "68473c08fb9daff26123984b371c143b"
  },
  {
    "url": "assets/js/76.9e4ec412.js",
    "revision": "d09eb5b8016d1a9e6be019bf96071dca"
  },
  {
    "url": "assets/js/77.cf7ea8b6.js",
    "revision": "13b7d29f3023fe296693769e07d78d82"
  },
  {
    "url": "assets/js/78.c499f09b.js",
    "revision": "1d833d7fbfc8297faba5306471b1f569"
  },
  {
    "url": "assets/js/79.f36efb5b.js",
    "revision": "5d7bc91d76ac7a1d1b2041b4e3b011a8"
  },
  {
    "url": "assets/js/8.5d293f84.js",
    "revision": "39d70351a29779979c1360631e13df28"
  },
  {
    "url": "assets/js/80.6d5556a0.js",
    "revision": "996c1ba12ef5d1c7f43b380ae8eb4f57"
  },
  {
    "url": "assets/js/81.c79be742.js",
    "revision": "e7a49a0f2478f88a535a48a261ae57dc"
  },
  {
    "url": "assets/js/82.f9bf7608.js",
    "revision": "d498f471a72ae1f2dfa57a560fd67f1c"
  },
  {
    "url": "assets/js/83.814a7bcd.js",
    "revision": "e1dac86b19db23b8460080f40234ba63"
  },
  {
    "url": "assets/js/84.9eed976d.js",
    "revision": "fbf49217ff1f9063ba3e2848b3e935b8"
  },
  {
    "url": "assets/js/85.1e21efdd.js",
    "revision": "1f78d4217d32bd1d3a8f7ef6f9cdcaac"
  },
  {
    "url": "assets/js/86.2603c614.js",
    "revision": "df7007a80d3a36582443f20ef57f6693"
  },
  {
    "url": "assets/js/87.5a430a0c.js",
    "revision": "79b4d0277a3bd8f4d8e9c2035cded81e"
  },
  {
    "url": "assets/js/9.8e20a7da.js",
    "revision": "9e41ef780dcf35831c7d95456880a5db"
  },
  {
    "url": "assets/js/app.77b36577.js",
    "revision": "ade0a2217f3a929cfb3924b17a736702"
  },
  {
    "url": "compiler/ast.html",
    "revision": "261c26b36de3f73633ac2055f75ad6cc"
  },
  {
    "url": "compiler/binder.html",
    "revision": "06f8a65a0ea8e73ef3d860456aa037c3"
  },
  {
    "url": "compiler/checker.html",
    "revision": "12a6f8b0c60b11bf46276bf875a2b3e5"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "c7b3ca857183c5b3f06b98d72da864b5"
  },
  {
    "url": "compiler/overview.html",
    "revision": "d6741515be37c5d2b2aa9e20f8983cb8"
  },
  {
    "url": "compiler/parser.html",
    "revision": "8fe25994ea03dd34e8650464d52bf6e8"
  },
  {
    "url": "compiler/program.html",
    "revision": "28e58fb185589f4fbba856b9aea614fd"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "eeffbb977cdefd0c1a5a5f2f04f7aecc"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "4b11ead2ec1bcad3e19b5990c4f64408"
  },
  {
    "url": "error/interpreting.html",
    "revision": "73f9999588ef939d3dc729a24fa0285d"
  },
  {
    "url": "faqs/class.html",
    "revision": "0c77087b143d2f5eeb9a0e5301f34857"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "346b3fcddd3cd9f55b62935344fa9c0b"
  },
  {
    "url": "faqs/comments.html",
    "revision": "fbc4d2ae89cfe379a2186e8054db80e7"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "bd7d8920788f756f6cda785eec64872e"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "536074ffa18d0b4fa8efee1a73021ddf"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "f40f01e892370ff75719d57bfbb84a70"
  },
  {
    "url": "faqs/enums.html",
    "revision": "d8e9e6dd1092ad7dc23c859fa133d8e8"
  },
  {
    "url": "faqs/function.html",
    "revision": "de8c0449e95d496bbb738671564df602"
  },
  {
    "url": "faqs/generics.html",
    "revision": "1af5d30b260417a141751f58d0dfceef"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "c0a0bdfd37a6f7ae808a00159b7c18fe"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "711e7fa9ef4e8443728d5b22227cab1d"
  },
  {
    "url": "faqs/modules.html",
    "revision": "07491c24235cc3958d6bedeec9643d5f"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "a56d613722c7184461af802693254a10"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "471379cbb6c4376495dac1944dce94e7"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "dd47ce1b37c9d62974e26e1afe888785"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "e9edc08b582d08d78dfea76234601705"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "a1367891ffa09721fd56e868e07c10b2"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "50cb3f8e998a2d986846c9f6c4ae0b7b"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "cd346b52b85f6acf9a8f69242efe2484"
  },
  {
    "url": "jsx/support.html",
    "revision": "6c83153e028fc290bff6fed34e87c384"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "1f81b7ac1a02b905a278c658fdb7338e"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "c5cedcc367d2fb2ebcb3bf32a1c7d307"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "b0034b1b25994ebcb21d52fca6dab1e4"
  },
  {
    "url": "project/modules.html",
    "revision": "1d180f9817d0cc9459901e4e1a0b5f62"
  },
  {
    "url": "project/namespaces.html",
    "revision": "09a57bf871b8052c56767d313d439711"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "f9ce340f05063c13f6ce44368bd4491d"
  },
  {
    "url": "tips/barrel.html",
    "revision": "13b964dbbe6e89dac41c4600d43c4617"
  },
  {
    "url": "tips/bind.html",
    "revision": "235dc07c2eb71d671749fb56a21b19c9"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "ab5299d112bfe85a698e7ff83ca9916a"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "2a62f82cab10bef95c711b48508e48ce"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "5edf2f85f90008192e03384f104ccea3"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "6e952026c29e850978fb93c7020d226b"
  },
  {
    "url": "tips/curry.html",
    "revision": "605cd6661c877b1d051525f9d2563c3e"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "77cbcf939bee15b7b8a7544a1d4f1006"
  },
  {
    "url": "tips/infer.html",
    "revision": "324376ab229c195454caba07dc139f9e"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "fd00e5ac24613dadd82150d8ccf49296"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "fe8ec5ee9d372ad7081c6f8ca76862de"
  },
  {
    "url": "tips/metadata.html",
    "revision": "fc05ff4197befd69023356b86d608bbb"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "b3e347dbf47ea4ab3ce09a11eeb7d97b"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "1d0f1c2cc81f17c4dc201ab65f088f13"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "653b8dc7b66a6816fad01e66904b28a8"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "1c3844401f5422bedfb411abcbb47367"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "cf65106dcd9b85958ee5d0ad6bc2a31d"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "903d267b572a07cc6ec16c75f7cab305"
  },
  {
    "url": "tips/truthy.html",
    "revision": "0a473277aa248db51c16e7c1bd251ceb"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "b051ed0a502c3e65f52f24783c0fa01f"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "a111be9e368c122116d6e010c18d28b0"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "0d2c9bafc11f9f709d7b1233e5072acb"
  },
  {
    "url": "typings/callable.html",
    "revision": "e9b7d9f12391c5f5312f581369770408"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "eee48eb86a4d26813ff2e9d7c45faa6d"
  },
  {
    "url": "typings/enums.html",
    "revision": "2c2e0338253397e701c7583043ba3a1b"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "eaf991dd84ac700f3a7d99eb686a5087"
  },
  {
    "url": "typings/freshness.html",
    "revision": "459e98d2fb9ec303d5576d7538772537"
  },
  {
    "url": "typings/functions.html",
    "revision": "4b99aa70673fdcd086d7eb504c6337a3"
  },
  {
    "url": "typings/generices.html",
    "revision": "99cbcd7a365de56d64b107e54eeabc4a"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "85a1ae0138eadb0e4b1f659a1a152f3f"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "8c0f235f91326b3b577b5ebda21dceb8"
  },
  {
    "url": "typings/lib.html",
    "revision": "dd48b5008aacd6fb2da14fc7181f317b"
  },
  {
    "url": "typings/literals.html",
    "revision": "50674c5610f566f2defe1124e3ace39d"
  },
  {
    "url": "typings/migrating.html",
    "revision": "d5001b1329c3a66429a1f0a369137070"
  },
  {
    "url": "typings/mixins.html",
    "revision": "3ad4ac071f74a800828c2090a26c7f4f"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "e7f7c03d61ce884ea6c7695009ab2a8f"
  },
  {
    "url": "typings/neverType.html",
    "revision": "af5fce3ef2ecb992fc80fda12985940e"
  },
  {
    "url": "typings/overview.html",
    "revision": "881610659fccaa07b179d5eb59a0103f"
  },
  {
    "url": "typings/readonly.html",
    "revision": "3d45c196608c8767728eeaf1c1fd439f"
  },
  {
    "url": "typings/thisType.html",
    "revision": "514107ac704fafa109ab3afb7b36d828"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "9e6dcef249903dd86a3567f1398d87ee"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "ba701401fd48eef37471abb2d3be2f5d"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "7789553a28568d916c5d3a312f86ffe5"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "b4be7f651a7fe7500dcd9900d690e1ed"
  },
  {
    "url": "typings/types.html",
    "revision": "e33efd9c0ff8e5b2d317c97ae936368b"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
