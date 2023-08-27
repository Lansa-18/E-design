// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
"use strict";

// import Swiper from 'swiper';
// import 'swiper/scss/bundle';
var amtAdd = document.querySelector(".amount-plus");
var amtSub = document.querySelector(".amount-minus");
var amtVal = document.querySelector(".amount-value");
var amtSubmit = document.querySelector(".amount__submit");
var cartAmt = document.querySelector(".cart-amount");
var mImg = document.querySelectorAll(".m-img");
var mImg2 = document.querySelectorAll(".m-img2");
var renderedImg = document.querySelector(".render-img");
var renderedImg2 = document.querySelector(".render-img2");
var cartIcon = document.querySelector(".img-cart");
var cartDrop = document.querySelector(".cart__dropdown");
var cartDropCont = document.querySelector(".cart__dropdown--contents");
var cartConth3 = document.querySelector(".cart__content--h3");

// Defining img file path of the images
var thumb1 = "/image-product-1-thumbnail.64dcbb28.jpg";
var popup = document.querySelector(".popup");
var closeIcon = document.querySelector(".svg-close");
var prevsIcon = document.querySelector(".prevs-icon");
var nextIcon = document.querySelector(".next-icon");

// Slider
var slides = document.querySelectorAll('.slide');
slides.forEach(function (s, i) {
  return s.style.transform = "translateX(".concat(100 * i, ")");
});

// Implemwnting the plus sign
amtAdd.addEventListener("click", function (e) {
  e.preventDefault();
  amtVal.textContent >= 0 ? amtVal.textContent++ : 0;
});

// Implemwnting the minus sign
amtSub.addEventListener("click", function (e) {
  e.preventDefault();
  amtVal.textContent > 0 ? amtVal.textContent-- : 0;
});
var cartItem;
cartItem = document.createElement("div");
cartItem.classList.add("cart__content--flex");
//  Function responsibe for adding items into the cart
var addToCart = function addToCart(cartamt) {
  // calculation of the price of shoe
  var priceShoe = 125 * cartamt;
  cartItem.innerHTML = "\n    <img class=\"img-thumb\" src = ".concat(thumb1, " alt=\"shoe1-thumb\">\n    <div class=\"content-texts\">\n      <p class=\"p1\">Fall Limited Edition Sneakers</p>\n      <p class=\"p2\">$125 x ").concat(cartamt, " = <span>$").concat(priceShoe, ".00</span></p>\n    </div>\n    <img class=\"img-delete\" src=\"/icon-delete.022a9515.svg\" alt=\"icon-delete\">\n    ");
  cartDropCont.appendChild(cartItem);

  // Event delegation for the functionality
  cartDropCont.addEventListener("click", function (e) {
    // checking if the clicked element contains the 'img-delete' class.
    if (e.target.classList.contains("img-delete")) {
      cartItem = e.target.closest(".cart__content--flex");
      if (cartItem) {
        cartItem.remove();
        cartAmt.style.display = "none";
        cartConth3.classList.remove("hidden");
      }
    }
  });
};

// Implementing the add to cart functionality
var cartAmtHolder = [];
amtSubmit.addEventListener("click", function () {
  // setting the cart amount to be visible
  cartAmt.style.display = "block";
  cartAmtHolder.push(amtVal.textContent);
  amtVal.textContent = 0;

  // adding up all the numbers in the holders array and then storing it into a variable
  var amtTotal = cartAmtHolder.reduce(function (acc, amt) {
    return acc + parseFloat(amt);
  }, 0);

  // Updating the UI based on the condition true or false of the amtTotal variable.
  amtTotal > 0 ? (cartAmt.textContent = amtTotal, cartConth3.classList.add("hidden"), cartItem.style.display = "flex") : (cartAmt.style.display = "none", cartItem.style.display = "none");

  // calling the function addToCart to display the UI in the cart.
  addToCart(cartAmt.textContent);
});

// function that changes img-thumbnails on click
var img1 = "/image-product-1.12c5dacc.jpg";
var img2 = "image-product-2.a6df5b34.jpg";
var img3 = "/image-product-3.143cec63.jpg";
var img4 = "/image-product-4.8eede8d0.jpg";
var changeImg = function changeImg(imgNodeList, imgRender) {
  // Implementing the img-thumbnail functionality

  imgNodeList.forEach(function (cur, i, arr) {
    cur.addEventListener("click", function () {
      if (i === 0) {
        imgRender.setAttribute("src", img1);
      } else if (i === 1) {
        imgRender.setAttribute("src", img2);
      } else if (i === 2) {
        imgRender.setAttribute("src", img3);
      } else if (i === 3) {
        imgRender.setAttribute("src", img4);
      }

      // Removing the active-img class from other images
      imgNodeList.forEach(function (img, index) {
        if (index !== i) {
          img.classList.remove("active-img");
        }
      });

      // Adding the active-img class to the currently clicked image
      cur.classList.add("active-img");
    });
  });
};
changeImg(mImg, renderedImg);
changeImg(mImg2, renderedImg2);

// Implementing the cart dropdown functionality
cartIcon.addEventListener("click", function () {
  cartDrop.classList.toggle("hidden");
});

// Implementing img-popup
renderedImg.addEventListener("click", function () {
  popup.classList.remove("hidden");
});
closeIcon.addEventListener("click", function () {
  popup.classList.add("hidden");
});

// Implementing the NEXT nd PREVS icon functionality.

// creating an array containing the images that would be changing.
var newMimg2 = [img1, img2, img3, img4];

// setting a new count to keep track of the current index.
var currentIndex = 0;

// the next icon functionality
// nextIcon.addEventListener("click", (e) => {
//   e.preventDefault();
//   currentIndex = (currentIndex + 1) % newMimg2.length;
//   renderedImg2.setAttribute("src", newMimg2[currentIndex]);

//   console.log("Next was clicked");
// });

// prevsIcon.addEventListener("click", (e) => {
//   e.preventDefault();
//   currentIndex = (currentIndex - 1 + newMimg2.length) % newMimg2.length;
//   renderedImg2.setAttribute("src", newMimg2[currentIndex]);

//   console.log("prevs was clicked");
// });

// console.log(mImg);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53996" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map