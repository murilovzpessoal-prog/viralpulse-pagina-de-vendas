(function () {
  const D = document.createElement("link").relList;
  if (D && D.supports && D.supports("modulepreload")) return;
  for (const C of document.querySelectorAll('link[rel="modulepreload"]')) m(C);
  new MutationObserver((C) => {
    for (const w of C)
      if (w.type === "childList")
        for (const ll of w.addedNodes)
          ll.tagName === "LINK" && ll.rel === "modulepreload" && m(ll);
  }).observe(document, { childList: !0, subtree: !0 });
  function q(C) {
    const w = {};
    return (
      C.integrity && (w.integrity = C.integrity),
      C.referrerPolicy && (w.referrerPolicy = C.referrerPolicy),
      C.crossOrigin === "use-credentials"
        ? (w.credentials = "include")
        : C.crossOrigin === "anonymous"
          ? (w.credentials = "omit")
          : (w.credentials = "same-origin"),
      w
    );
  }
  function m(C) {
    if (C.ep) return;
    C.ep = !0;
    const w = q(C);
    fetch(C.href, w);
  }
})();
function Or(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default")
    ? j.default
    : j;
}
var sf = { exports: {} },
  zu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br;
function eh() {
  if (br) return zu;
  br = 1;
  var j = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.fragment");
  function q(m, C, w) {
    var ll = null;
    if (
      (w !== void 0 && (ll = "" + w),
      C.key !== void 0 && (ll = "" + C.key),
      "key" in C)
    ) {
      w = {};
      for (var pl in C) pl !== "key" && (w[pl] = C[pl]);
    } else w = C;
    return (
      (C = w.ref),
      { $$typeof: j, type: m, key: ll, ref: C !== void 0 ? C : null, props: w }
    );
  }
  return ((zu.Fragment = D), (zu.jsx = q), (zu.jsxs = q), zu);
}
var pr;
function ah() {
  return (pr || ((pr = 1), (sf.exports = eh())), sf.exports);
}
var f = ah(),
  df = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sr;
function uh() {
  if (Sr) return Y;
  Sr = 1;
  var j = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    w = Symbol.for("react.consumer"),
    ll = Symbol.for("react.context"),
    pl = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    N = Symbol.for("react.memo"),
    K = Symbol.for("react.lazy"),
    H = Symbol.for("react.activity"),
    rl = Symbol.iterator;
  function $l(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (rl && o[rl]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var Gl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ql = Object.assign,
    Ut = {};
  function Fl(o, z, T) {
    ((this.props = o),
      (this.context = z),
      (this.refs = Ut),
      (this.updater = T || Gl));
  }
  ((Fl.prototype.isReactComponent = {}),
    (Fl.prototype.setState = function (o, z) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, o, z, "setState");
    }),
    (Fl.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    }));
  function It() {}
  It.prototype = Fl.prototype;
  function Hl(o, z, T) {
    ((this.props = o),
      (this.context = z),
      (this.refs = Ut),
      (this.updater = T || Gl));
  }
  var st = (Hl.prototype = new It());
  ((st.constructor = Hl), ql(st, Fl.prototype), (st.isPureReactComponent = !0));
  var At = Array.isArray;
  function Ql() {}
  var W = { H: null, A: null, T: null, S: null },
    Xl = Object.prototype.hasOwnProperty;
  function Tt(o, z, T) {
    var _ = T.ref;
    return {
      $$typeof: j,
      type: o,
      key: z,
      ref: _ !== void 0 ? _ : null,
      props: T,
    };
  }
  function Ve(o, z) {
    return Tt(o.type, z, o.props);
  }
  function Et(o) {
    return typeof o == "object" && o !== null && o.$$typeof === j;
  }
  function wl(o) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (T) {
        return z[T];
      })
    );
  }
  var je = /\/+/g;
  function Ct(o, z) {
    return typeof o == "object" && o !== null && o.key != null
      ? wl("" + o.key)
      : z.toString(36);
  }
  function pt(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Ql, Ql)
            : ((o.status = "pending"),
              o.then(
                function (z) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = z));
                },
                function (z) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = z));
                },
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function b(o, z, T, _, G) {
    var Z = typeof o;
    (Z === "undefined" || Z === "boolean") && (o = null);
    var tl = !1;
    if (o === null) tl = !0;
    else
      switch (Z) {
        case "bigint":
        case "string":
        case "number":
          tl = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case j:
            case D:
              tl = !0;
              break;
            case K:
              return ((tl = o._init), b(tl(o._payload), z, T, _, G));
          }
      }
    if (tl)
      return (
        (G = G(o)),
        (tl = _ === "" ? "." + Ct(o, 0) : _),
        At(G)
          ? ((T = ""),
            tl != null && (T = tl.replace(je, "$&/") + "/"),
            b(G, z, T, "", function (Ma) {
              return Ma;
            }))
          : G != null &&
            (Et(G) &&
              (G = Ve(
                G,
                T +
                  (G.key == null || (o && o.key === G.key)
                    ? ""
                    : ("" + G.key).replace(je, "$&/") + "/") +
                  tl,
              )),
            z.push(G)),
        1
      );
    tl = 0;
    var Bl = _ === "" ? "." : _ + ":";
    if (At(o))
      for (var gl = 0; gl < o.length; gl++)
        ((_ = o[gl]), (Z = Bl + Ct(_, gl)), (tl += b(_, z, T, Z, G)));
    else if (((gl = $l(o)), typeof gl == "function"))
      for (o = gl.call(o), gl = 0; !(_ = o.next()).done; )
        ((_ = _.value), (Z = Bl + Ct(_, gl++)), (tl += b(_, z, T, Z, G)));
    else if (Z === "object") {
      if (typeof o.then == "function") return b(pt(o), z, T, _, G);
      throw (
        (z = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return tl;
  }
  function A(o, z, T) {
    if (o == null) return o;
    var _ = [],
      G = 0;
    return (
      b(o, _, "", "", function (Z) {
        return z.call(T, Z, G++);
      }),
      _
    );
  }
  function B(o) {
    if (o._status === -1) {
      var z = o._result;
      ((z = z()),
        z.then(
          function (T) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = T));
          },
          function (T) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = T));
          },
        ),
        o._status === -1 && ((o._status = 0), (o._result = z)));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var ul =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" &&
                  o !== null &&
                  typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(z)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    fl = {
      map: A,
      forEach: function (o, z, T) {
        A(
          o,
          function () {
            z.apply(this, arguments);
          },
          T,
        );
      },
      count: function (o) {
        var z = 0;
        return (
          A(o, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (o) {
        return (
          A(o, function (z) {
            return z;
          }) || []
        );
      },
      only: function (o) {
        if (!Et(o))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return o;
      },
    };
  return (
    (Y.Activity = H),
    (Y.Children = fl),
    (Y.Component = Fl),
    (Y.Fragment = q),
    (Y.Profiler = C),
    (Y.PureComponent = Hl),
    (Y.StrictMode = m),
    (Y.Suspense = M),
    (Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (Y.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return W.H.useMemoCache(o);
      },
    }),
    (Y.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (Y.cacheSignal = function () {
      return null;
    }),
    (Y.cloneElement = function (o, z, T) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + ".",
        );
      var _ = ql({}, o.props),
        G = o.key;
      if (z != null)
        for (Z in (z.key !== void 0 && (G = "" + z.key), z))
          !Xl.call(z, Z) ||
            Z === "key" ||
            Z === "__self" ||
            Z === "__source" ||
            (Z === "ref" && z.ref === void 0) ||
            (_[Z] = z[Z]);
      var Z = arguments.length - 2;
      if (Z === 1) _.children = T;
      else if (1 < Z) {
        for (var tl = Array(Z), Bl = 0; Bl < Z; Bl++)
          tl[Bl] = arguments[Bl + 2];
        _.children = tl;
      }
      return Tt(o.type, G, _);
    }),
    (Y.createContext = function (o) {
      return (
        (o = {
          $$typeof: ll,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: w, _context: o }),
        o
      );
    }),
    (Y.createElement = function (o, z, T) {
      var _,
        G = {},
        Z = null;
      if (z != null)
        for (_ in (z.key !== void 0 && (Z = "" + z.key), z))
          Xl.call(z, _) &&
            _ !== "key" &&
            _ !== "__self" &&
            _ !== "__source" &&
            (G[_] = z[_]);
      var tl = arguments.length - 2;
      if (tl === 1) G.children = T;
      else if (1 < tl) {
        for (var Bl = Array(tl), gl = 0; gl < tl; gl++)
          Bl[gl] = arguments[gl + 2];
        G.children = Bl;
      }
      if (o && o.defaultProps)
        for (_ in ((tl = o.defaultProps), tl))
          G[_] === void 0 && (G[_] = tl[_]);
      return Tt(o, Z, G);
    }),
    (Y.createRef = function () {
      return { current: null };
    }),
    (Y.forwardRef = function (o) {
      return { $$typeof: pl, render: o };
    }),
    (Y.isValidElement = Et),
    (Y.lazy = function (o) {
      return { $$typeof: K, _payload: { _status: -1, _result: o }, _init: B };
    }),
    (Y.memo = function (o, z) {
      return { $$typeof: N, type: o, compare: z === void 0 ? null : z };
    }),
    (Y.startTransition = function (o) {
      var z = W.T,
        T = {};
      W.T = T;
      try {
        var _ = o(),
          G = W.S;
        (G !== null && G(T, _),
          typeof _ == "object" &&
            _ !== null &&
            typeof _.then == "function" &&
            _.then(Ql, ul));
      } catch (Z) {
        ul(Z);
      } finally {
        (z !== null && T.types !== null && (z.types = T.types), (W.T = z));
      }
    }),
    (Y.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (Y.use = function (o) {
      return W.H.use(o);
    }),
    (Y.useActionState = function (o, z, T) {
      return W.H.useActionState(o, z, T);
    }),
    (Y.useCallback = function (o, z) {
      return W.H.useCallback(o, z);
    }),
    (Y.useContext = function (o) {
      return W.H.useContext(o);
    }),
    (Y.useDebugValue = function () {}),
    (Y.useDeferredValue = function (o, z) {
      return W.H.useDeferredValue(o, z);
    }),
    (Y.useEffect = function (o, z) {
      return W.H.useEffect(o, z);
    }),
    (Y.useEffectEvent = function (o) {
      return W.H.useEffectEvent(o);
    }),
    (Y.useId = function () {
      return W.H.useId();
    }),
    (Y.useImperativeHandle = function (o, z, T) {
      return W.H.useImperativeHandle(o, z, T);
    }),
    (Y.useInsertionEffect = function (o, z) {
      return W.H.useInsertionEffect(o, z);
    }),
    (Y.useLayoutEffect = function (o, z) {
      return W.H.useLayoutEffect(o, z);
    }),
    (Y.useMemo = function (o, z) {
      return W.H.useMemo(o, z);
    }),
    (Y.useOptimistic = function (o, z) {
      return W.H.useOptimistic(o, z);
    }),
    (Y.useReducer = function (o, z, T) {
      return W.H.useReducer(o, z, T);
    }),
    (Y.useRef = function (o) {
      return W.H.useRef(o);
    }),
    (Y.useState = function (o) {
      return W.H.useState(o);
    }),
    (Y.useSyncExternalStore = function (o, z, T) {
      return W.H.useSyncExternalStore(o, z, T);
    }),
    (Y.useTransition = function () {
      return W.H.useTransition();
    }),
    (Y.version = "19.2.4"),
    Y
  );
}
var zr;
function yf() {
  return (zr || ((zr = 1), (df.exports = uh())), df.exports);
}
var ft = yf();
const nh = Or(ft);
var of = { exports: {} },
  Nu = {},
  rf = { exports: {} },
  mf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr;
function ih() {
  return (
    Nr ||
      ((Nr = 1),
      (function (j) {
        function D(b, A) {
          var B = b.length;
          b.push(A);
          l: for (; 0 < B; ) {
            var ul = (B - 1) >>> 1,
              fl = b[ul];
            if (0 < C(fl, A)) ((b[ul] = A), (b[B] = fl), (B = ul));
            else break l;
          }
        }
        function q(b) {
          return b.length === 0 ? null : b[0];
        }
        function m(b) {
          if (b.length === 0) return null;
          var A = b[0],
            B = b.pop();
          if (B !== A) {
            b[0] = B;
            l: for (var ul = 0, fl = b.length, o = fl >>> 1; ul < o; ) {
              var z = 2 * (ul + 1) - 1,
                T = b[z],
                _ = z + 1,
                G = b[_];
              if (0 > C(T, B))
                _ < fl && 0 > C(G, T)
                  ? ((b[ul] = G), (b[_] = B), (ul = _))
                  : ((b[ul] = T), (b[z] = B), (ul = z));
              else if (_ < fl && 0 > C(G, B))
                ((b[ul] = G), (b[_] = B), (ul = _));
              else break l;
            }
          }
          return A;
        }
        function C(b, A) {
          var B = b.sortIndex - A.sortIndex;
          return B !== 0 ? B : b.id - A.id;
        }
        if (
          ((j.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var w = performance;
          j.unstable_now = function () {
            return w.now();
          };
        } else {
          var ll = Date,
            pl = ll.now();
          j.unstable_now = function () {
            return ll.now() - pl;
          };
        }
        var M = [],
          N = [],
          K = 1,
          H = null,
          rl = 3,
          $l = !1,
          Gl = !1,
          ql = !1,
          Ut = !1,
          Fl = typeof setTimeout == "function" ? setTimeout : null,
          It = typeof clearTimeout == "function" ? clearTimeout : null,
          Hl = typeof setImmediate < "u" ? setImmediate : null;
        function st(b) {
          for (var A = q(N); A !== null; ) {
            if (A.callback === null) m(N);
            else if (A.startTime <= b)
              (m(N), (A.sortIndex = A.expirationTime), D(M, A));
            else break;
            A = q(N);
          }
        }
        function At(b) {
          if (((ql = !1), st(b), !Gl))
            if (q(M) !== null) ((Gl = !0), Ql || ((Ql = !0), wl()));
            else {
              var A = q(N);
              A !== null && pt(At, A.startTime - b);
            }
        }
        var Ql = !1,
          W = -1,
          Xl = 5,
          Tt = -1;
        function Ve() {
          return Ut ? !0 : !(j.unstable_now() - Tt < Xl);
        }
        function Et() {
          if (((Ut = !1), Ql)) {
            var b = j.unstable_now();
            Tt = b;
            var A = !0;
            try {
              l: {
                ((Gl = !1), ql && ((ql = !1), It(W), (W = -1)), ($l = !0));
                var B = rl;
                try {
                  t: {
                    for (
                      st(b), H = q(M);
                      H !== null && !(H.expirationTime > b && Ve());
                    ) {
                      var ul = H.callback;
                      if (typeof ul == "function") {
                        ((H.callback = null), (rl = H.priorityLevel));
                        var fl = ul(H.expirationTime <= b);
                        if (((b = j.unstable_now()), typeof fl == "function")) {
                          ((H.callback = fl), st(b), (A = !0));
                          break t;
                        }
                        (H === q(M) && m(M), st(b));
                      } else m(M);
                      H = q(M);
                    }
                    if (H !== null) A = !0;
                    else {
                      var o = q(N);
                      (o !== null && pt(At, o.startTime - b), (A = !1));
                    }
                  }
                  break l;
                } finally {
                  ((H = null), (rl = B), ($l = !1));
                }
                A = void 0;
              }
            } finally {
              A ? wl() : (Ql = !1);
            }
          }
        }
        var wl;
        if (typeof Hl == "function")
          wl = function () {
            Hl(Et);
          };
        else if (typeof MessageChannel < "u") {
          var je = new MessageChannel(),
            Ct = je.port2;
          ((je.port1.onmessage = Et),
            (wl = function () {
              Ct.postMessage(null);
            }));
        } else
          wl = function () {
            Fl(Et, 0);
          };
        function pt(b, A) {
          W = Fl(function () {
            b(j.unstable_now());
          }, A);
        }
        ((j.unstable_IdlePriority = 5),
          (j.unstable_ImmediatePriority = 1),
          (j.unstable_LowPriority = 4),
          (j.unstable_NormalPriority = 3),
          (j.unstable_Profiling = null),
          (j.unstable_UserBlockingPriority = 2),
          (j.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (j.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Xl = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (j.unstable_getCurrentPriorityLevel = function () {
            return rl;
          }),
          (j.unstable_next = function (b) {
            switch (rl) {
              case 1:
              case 2:
              case 3:
                var A = 3;
                break;
              default:
                A = rl;
            }
            var B = rl;
            rl = A;
            try {
              return b();
            } finally {
              rl = B;
            }
          }),
          (j.unstable_requestPaint = function () {
            Ut = !0;
          }),
          (j.unstable_runWithPriority = function (b, A) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var B = rl;
            rl = b;
            try {
              return A();
            } finally {
              rl = B;
            }
          }),
          (j.unstable_scheduleCallback = function (b, A, B) {
            var ul = j.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? ul + B : ul))
                : (B = ul),
              b)
            ) {
              case 1:
                var fl = -1;
                break;
              case 2:
                fl = 250;
                break;
              case 5:
                fl = 1073741823;
                break;
              case 4:
                fl = 1e4;
                break;
              default:
                fl = 5e3;
            }
            return (
              (fl = B + fl),
              (b = {
                id: K++,
                callback: A,
                priorityLevel: b,
                startTime: B,
                expirationTime: fl,
                sortIndex: -1,
              }),
              B > ul
                ? ((b.sortIndex = B),
                  D(N, b),
                  q(M) === null &&
                    b === q(N) &&
                    (ql ? (It(W), (W = -1)) : (ql = !0), pt(At, B - ul)))
                : ((b.sortIndex = fl),
                  D(M, b),
                  Gl || $l || ((Gl = !0), Ql || ((Ql = !0), wl()))),
              b
            );
          }),
          (j.unstable_shouldYield = Ve),
          (j.unstable_wrapCallback = function (b) {
            var A = rl;
            return function () {
              var B = rl;
              rl = A;
              try {
                return b.apply(this, arguments);
              } finally {
                rl = B;
              }
            };
          }));
      })(mf)),
    mf
  );
}
var jr;
function ch() {
  return (jr || ((jr = 1), (rf.exports = ih())), rf.exports);
}
var hf = { exports: {} },
  Rl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ar;
function fh() {
  if (Ar) return Rl;
  Ar = 1;
  var j = yf();
  function D(M) {
    var N = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      N += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var K = 2; K < arguments.length; K++)
        N += "&args[]=" + encodeURIComponent(arguments[K]);
    }
    return (
      "Minified React error #" +
      M +
      "; visit " +
      N +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function q() {}
  var m = {
      d: {
        f: q,
        r: function () {
          throw Error(D(522));
        },
        D: q,
        C: q,
        L: q,
        m: q,
        X: q,
        S: q,
        M: q,
      },
      p: 0,
      findDOMNode: null,
    },
    C = Symbol.for("react.portal");
  function w(M, N, K) {
    var H =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: C,
      key: H == null ? null : "" + H,
      children: M,
      containerInfo: N,
      implementation: K,
    };
  }
  var ll = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function pl(M, N) {
    if (M === "font") return "";
    if (typeof N == "string") return N === "use-credentials" ? N : "";
  }
  return (
    (Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (Rl.createPortal = function (M, N) {
      var K =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!N || (N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11))
        throw Error(D(299));
      return w(M, N, null, K);
    }),
    (Rl.flushSync = function (M) {
      var N = ll.T,
        K = m.p;
      try {
        if (((ll.T = null), (m.p = 2), M)) return M();
      } finally {
        ((ll.T = N), (m.p = K), m.d.f());
      }
    }),
    (Rl.preconnect = function (M, N) {
      typeof M == "string" &&
        (N
          ? ((N = N.crossOrigin),
            (N =
              typeof N == "string"
                ? N === "use-credentials"
                  ? N
                  : ""
                : void 0))
          : (N = null),
        m.d.C(M, N));
    }),
    (Rl.prefetchDNS = function (M) {
      typeof M == "string" && m.d.D(M);
    }),
    (Rl.preinit = function (M, N) {
      if (typeof M == "string" && N && typeof N.as == "string") {
        var K = N.as,
          H = pl(K, N.crossOrigin),
          rl = typeof N.integrity == "string" ? N.integrity : void 0,
          $l = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
        K === "style"
          ? m.d.S(M, typeof N.precedence == "string" ? N.precedence : void 0, {
              crossOrigin: H,
              integrity: rl,
              fetchPriority: $l,
            })
          : K === "script" &&
            m.d.X(M, {
              crossOrigin: H,
              integrity: rl,
              fetchPriority: $l,
              nonce: typeof N.nonce == "string" ? N.nonce : void 0,
            });
      }
    }),
    (Rl.preinitModule = function (M, N) {
      if (typeof M == "string")
        if (typeof N == "object" && N !== null) {
          if (N.as == null || N.as === "script") {
            var K = pl(N.as, N.crossOrigin);
            m.d.M(M, {
              crossOrigin: K,
              integrity: typeof N.integrity == "string" ? N.integrity : void 0,
              nonce: typeof N.nonce == "string" ? N.nonce : void 0,
            });
          }
        } else N == null && m.d.M(M);
    }),
    (Rl.preload = function (M, N) {
      if (
        typeof M == "string" &&
        typeof N == "object" &&
        N !== null &&
        typeof N.as == "string"
      ) {
        var K = N.as,
          H = pl(K, N.crossOrigin);
        m.d.L(M, K, {
          crossOrigin: H,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0,
          type: typeof N.type == "string" ? N.type : void 0,
          fetchPriority:
            typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
          referrerPolicy:
            typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
          imageSrcSet:
            typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
          imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
          media: typeof N.media == "string" ? N.media : void 0,
        });
      }
    }),
    (Rl.preloadModule = function (M, N) {
      if (typeof M == "string")
        if (N) {
          var K = pl(N.as, N.crossOrigin);
          m.d.m(M, {
            as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
            crossOrigin: K,
            integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          });
        } else m.d.m(M);
    }),
    (Rl.requestFormReset = function (M) {
      m.d.r(M);
    }),
    (Rl.unstable_batchedUpdates = function (M, N) {
      return M(N);
    }),
    (Rl.useFormState = function (M, N, K) {
      return ll.H.useFormState(M, N, K);
    }),
    (Rl.useFormStatus = function () {
      return ll.H.useHostTransitionStatus();
    }),
    (Rl.version = "19.2.4"),
    Rl
  );
}
var Tr;
function sh() {
  if (Tr) return hf.exports;
  Tr = 1;
  function j() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (D) {
        console.error(D);
      }
  }
  return (j(), (hf.exports = fh()), hf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Er;
function dh() {
  if (Er) return Nu;
  Er = 1;
  var j = ch(),
    D = yf(),
    q = sh();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function C(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function w(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function ll(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function pl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function M(l) {
    if (w(l) !== l) throw Error(m(188));
  }
  function N(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = w(l)), t === null)) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return (M(u), l);
          if (n === a) return (M(u), t);
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (e.return !== a.return) ((e = u), (a = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          if (c === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            if (c === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (e.alternate !== a) throw Error(m(190));
    }
    if (e.tag !== 3) throw Error(m(188));
    return e.stateNode.current === e ? l : t;
  }
  function K(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = K(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign,
    rl = Symbol.for("react.element"),
    $l = Symbol.for("react.transitional.element"),
    Gl = Symbol.for("react.portal"),
    ql = Symbol.for("react.fragment"),
    Ut = Symbol.for("react.strict_mode"),
    Fl = Symbol.for("react.profiler"),
    It = Symbol.for("react.consumer"),
    Hl = Symbol.for("react.context"),
    st = Symbol.for("react.forward_ref"),
    At = Symbol.for("react.suspense"),
    Ql = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    Xl = Symbol.for("react.lazy"),
    Tt = Symbol.for("react.activity"),
    Ve = Symbol.for("react.memo_cache_sentinel"),
    Et = Symbol.iterator;
  function wl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Et && l[Et]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var je = Symbol.for("react.client.reference");
  function Ct(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === je ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case Fl:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case At:
        return "Suspense";
      case Ql:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Gl:
          return "Portal";
        case Hl:
          return l.displayName || "Context";
        case It:
          return (l._context.displayName || "Context") + ".Consumer";
        case st:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case W:
          return (
            (t = l.displayName || null),
            t !== null ? t : Ct(l.type) || "Memo"
          );
        case Xl:
          ((t = l._payload), (l = l._init));
          try {
            return Ct(l(t));
          } catch {}
      }
    return null;
  }
  var pt = Array.isArray,
    b = D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    A = q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    ul = [],
    fl = -1;
  function o(l) {
    return { current: l };
  }
  function z(l) {
    0 > fl || ((l.current = ul[fl]), (ul[fl] = null), fl--);
  }
  function T(l, t) {
    (fl++, (ul[fl] = l.current), (l.current = t));
  }
  var _ = o(null),
    G = o(null),
    Z = o(null),
    tl = o(null);
  function Bl(l, t) {
    switch ((T(Z, t), T(G, l), T(_, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? wo(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = wo(t)), (l = Zo(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (z(_), T(_, l));
  }
  function gl() {
    (z(_), z(G), z(Z));
  }
  function Ma(l) {
    l.memoizedState !== null && T(tl, l);
    var t = _.current,
      e = Zo(t, l.type);
    t !== e && (T(G, l), T(_, e));
  }
  function Au(l) {
    (G.current === l && (z(_), z(G)),
      tl.current === l && (z(tl), (xu._currentValue = B)));
  }
  var Vn, gf;
  function Ae(l) {
    if (Vn === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        ((Vn = (t && t[1]) || ""),
          (gf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Vn +
      l +
      gf
    );
  }
  var Ln = !1;
  function Kn(l, t) {
    if (!l || Ln) return "";
    Ln = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var S = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(S.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(S, []);
                } catch (g) {
                  var y = g;
                }
                Reflect.construct(l, [], S);
              } else {
                try {
                  S.call();
                } catch (g) {
                  y = g;
                }
                l.call(S.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                y = g;
              }
              (S = l()) &&
                typeof S.catch == "function" &&
                S.catch(function () {});
            }
          } catch (g) {
            if (g && y && typeof g.stack == "string") return [g.stack, y.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var s = i.split(`
`),
          v = c.split(`
`);
        for (
          u = a = 0;
          a < s.length && !s[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; u < v.length && !v[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === s.length || u === v.length)
          for (
            a = s.length - 1, u = v.length - 1;
            1 <= a && 0 <= u && s[a] !== v[u];
          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (s[a] !== v[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || s[a] !== v[u])) {
                  var x =
                    `
` + s[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", l.displayName)),
                    x
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      ((Ln = !1), (Error.prepareStackTrace = e));
    }
    return (e = l ? l.displayName || l.name : "") ? Ae(e) : "";
  }
  function Cr(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ae(l.type);
      case 16:
        return Ae("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Ae("Suspense Fallback")
          : Ae("Suspense");
      case 19:
        return Ae("SuspenseList");
      case 0:
      case 15:
        return Kn(l.type, !1);
      case 11:
        return Kn(l.type.render, !1);
      case 1:
        return Kn(l.type, !0);
      case 31:
        return Ae("Activity");
      default:
        return "";
    }
  }
  function xf(l) {
    try {
      var t = "",
        e = null;
      do ((t += Cr(l, e)), (e = l), (l = l.return));
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Jn = Object.prototype.hasOwnProperty,
    kn = j.unstable_scheduleCallback,
    Wn = j.unstable_cancelCallback,
    Hr = j.unstable_shouldYield,
    Rr = j.unstable_requestPaint,
    Il = j.unstable_now,
    qr = j.unstable_getCurrentPriorityLevel,
    bf = j.unstable_ImmediatePriority,
    pf = j.unstable_UserBlockingPriority,
    Tu = j.unstable_NormalPriority,
    Br = j.unstable_LowPriority,
    Sf = j.unstable_IdlePriority,
    Yr = j.log,
    Gr = j.unstable_setDisableYieldValue,
    Oa = null,
    Pl = null;
  function Pt(l) {
    if (
      (typeof Yr == "function" && Gr(l),
      Pl && typeof Pl.setStrictMode == "function")
    )
      try {
        Pl.setStrictMode(Oa, l);
      } catch {}
  }
  var lt = Math.clz32 ? Math.clz32 : wr,
    Qr = Math.log,
    Xr = Math.LN2;
  function wr(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Qr(l) / Xr) | 0)) | 0);
  }
  var Eu = 256,
    _u = 262144,
    Mu = 4194304;
  function Te(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ou(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~n),
          a !== 0
            ? (u = Te(a))
            : ((i &= c),
              i !== 0
                ? (u = Te(i))
                : e || ((e = c & ~l), e !== 0 && (u = Te(e)))))
        : ((c = a & ~n),
          c !== 0
            ? (u = Te(c))
            : i !== 0
              ? (u = Te(i))
              : e || ((e = a & ~l), e !== 0 && (u = Te(e)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (e = t & -t),
            n >= e || (n === 32 && (e & 4194048) !== 0))
          ? t
          : u
    );
  }
  function Da(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Zr(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zf() {
    var l = Mu;
    return ((Mu <<= 1), (Mu & 62914560) === 0 && (Mu = 4194304), l);
  }
  function $n(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ua(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Vr(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      s = l.expirationTimes,
      v = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var x = 31 - lt(e),
        S = 1 << x;
      ((c[x] = 0), (s[x] = -1));
      var y = v[x];
      if (y !== null)
        for (v[x] = null, x = 0; x < y.length; x++) {
          var g = y[x];
          g !== null && (g.lane &= -536870913);
        }
      e &= ~S;
    }
    (a !== 0 && Nf(l, a, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function Nf(l, t, e) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var a = 31 - lt(t);
    ((l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930)));
  }
  function jf(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - lt(e),
        u = 1 << a;
      ((u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u));
    }
  }
  function Af(l, t) {
    var e = t & -t;
    return (
      (e = (e & 42) !== 0 ? 1 : Fn(e)),
      (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    );
  }
  function Fn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function In(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Tf() {
    var l = A.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : rr(l.type));
  }
  function Ef(l, t) {
    var e = A.p;
    try {
      return ((A.p = l), t());
    } finally {
      A.p = e;
    }
  }
  var le = Math.random().toString(36).slice(2),
    Ml = "__reactFiber$" + le,
    Zl = "__reactProps$" + le,
    Le = "__reactContainer$" + le,
    Pn = "__reactEvents$" + le,
    Lr = "__reactListeners$" + le,
    Kr = "__reactHandles$" + le,
    _f = "__reactResources$" + le,
    Ca = "__reactMarker$" + le;
  function li(l) {
    (delete l[Ml], delete l[Zl], delete l[Pn], delete l[Lr], delete l[Kr]);
  }
  function Ke(l) {
    var t = l[Ml];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[Le] || e[Ml])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = $o(l); l !== null; ) {
            if ((e = l[Ml])) return e;
            l = $o(l);
          }
        return t;
      }
      ((l = e), (e = l.parentNode));
    }
    return null;
  }
  function Je(l) {
    if ((l = l[Ml] || l[Le])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Ha(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function ke(l) {
    var t = l[_f];
    return (
      t ||
        (t = l[_f] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function El(l) {
    l[Ca] = !0;
  }
  var Mf = new Set(),
    Of = {};
  function Ee(l, t) {
    (We(l, t), We(l + "Capture", t));
  }
  function We(l, t) {
    for (Of[l] = t, l = 0; l < t.length; l++) Mf.add(t[l]);
  }
  var Jr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Df = {},
    Uf = {};
  function kr(l) {
    return Jn.call(Uf, l)
      ? !0
      : Jn.call(Df, l)
        ? !1
        : Jr.test(l)
          ? (Uf[l] = !0)
          : ((Df[l] = !0), !1);
  }
  function Du(l, t, e) {
    if (kr(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Uu(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Ht(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function dt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Cf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Wr(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((e = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function ti(l) {
    if (!l._valueTracker) {
      var t = Cf(l) ? "checked" : "value";
      l._valueTracker = Wr(l, t, "" + l[t]);
    }
  }
  function Hf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = Cf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  function Cu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var $r = /[\n"\\]/g;
  function ot(l) {
    return l.replace($r, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ei(l, t, e, a, u, n, i, c) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + dt(t))
          : l.value !== "" + dt(t) && (l.value = "" + dt(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? ai(l, i, dt(t))
        : e != null
          ? ai(l, i, dt(e))
          : a != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + dt(c))
        : l.removeAttribute("name"));
  }
  function Rf(l, t, e, a, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        ti(l);
        return;
      }
      ((e = e != null ? "" + dt(e) : ""),
        (t = t != null ? "" + dt(t) : e),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = c ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      ti(l));
  }
  function ai(l, t, e) {
    (t === "number" && Cu(l.ownerDocument) === l) ||
      l.defaultValue === "" + e ||
      (l.defaultValue = "" + e);
  }
  function $e(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        ((u = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== u && (l[e].selected = u),
          u && a && (l[e].defaultSelected = !0));
    } else {
      for (e = "" + dt(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          ((l[u].selected = !0), a && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qf(l, t, e) {
    if (
      t != null &&
      ((t = "" + dt(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + dt(e) : "";
  }
  function Bf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(m(92));
        if (pt(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        e = a;
      }
      (e == null && (e = ""), (t = e));
    }
    ((e = dt(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a),
      ti(l));
  }
  function Fe(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Fr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Yf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : a
        ? l.setProperty(t, e)
        : typeof e != "number" || e === 0 || Fr.has(t)
          ? t === "float"
            ? (l.cssFloat = e)
            : (l[t] = ("" + e).trim())
          : (l[t] = e + "px");
  }
  function Gf(l, t, e) {
    if (t != null && typeof t != "object") throw Error(m(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
              ? (l.cssFloat = "")
              : (l[a] = ""));
      for (var u in t)
        ((a = t[u]), t.hasOwnProperty(u) && e[u] !== a && Yf(l, u, a));
    } else for (var n in t) t.hasOwnProperty(n) && Yf(l, n, t[n]);
  }
  function ui(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ir = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Pr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hu(l) {
    return Pr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Rt() {}
  var ni = null;
  function ii(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Ie = null,
    Pe = null;
  function Qf(l) {
    var t = Je(l);
    if (t && (l = t.stateNode)) {
      var e = l[Zl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (ei(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name,
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + ot("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[Zl] || null;
                if (!u) throw Error(m(90));
                ei(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < e.length; t++)
              ((a = e[t]), a.form === l.form && Hf(a));
          }
          break l;
        case "textarea":
          qf(l, e.value, e.defaultValue);
          break l;
        case "select":
          ((t = e.value), t != null && $e(l, !!e.multiple, t, !1));
      }
    }
  }
  var ci = !1;
  function Xf(l, t, e) {
    if (ci) return l(t, e);
    ci = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((ci = !1),
        (Ie !== null || Pe !== null) &&
          (zn(), Ie && ((t = Ie), (l = Pe), (Pe = Ie = null), Qf(t), l)))
      )
        for (t = 0; t < l.length; t++) Qf(l[t]);
    }
  }
  function Ra(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Zl] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(m(231, t, typeof e));
    return e;
  }
  var qt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    fi = !1;
  if (qt)
    try {
      var qa = {};
      (Object.defineProperty(qa, "passive", {
        get: function () {
          fi = !0;
        },
      }),
        window.addEventListener("test", qa, qa),
        window.removeEventListener("test", qa, qa));
    } catch {
      fi = !1;
    }
  var te = null,
    si = null,
    Ru = null;
  function wf() {
    if (Ru) return Ru;
    var l,
      t = si,
      e = t.length,
      a,
      u = "value" in te ? te.value : te.textContent,
      n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
    return (Ru = u.slice(l, 1 < a ? 1 - a : void 0));
  }
  function qu(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Bu() {
    return !0;
  }
  function Zf() {
    return !1;
  }
  function Vl(l) {
    function t(e, a, u, n, i) {
      ((this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in l)
        l.hasOwnProperty(c) && ((e = l[c]), (this[c] = e ? e(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Bu
          : Zf),
        (this.isPropagationStopped = Zf),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Bu));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Bu));
        },
        persist: function () {},
        isPersistent: Bu,
      }),
      t
    );
  }
  var _e = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yu = Vl(_e),
    Ba = H({}, _e, { view: 0, detail: 0 }),
    lm = Vl(Ba),
    di,
    oi,
    Ya,
    Gu = H({}, Ba, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: mi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ya &&
              (Ya && l.type === "mousemove"
                ? ((di = l.screenX - Ya.screenX), (oi = l.screenY - Ya.screenY))
                : (oi = di = 0),
              (Ya = l)),
            di);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : oi;
      },
    }),
    Vf = Vl(Gu),
    tm = H({}, Gu, { dataTransfer: 0 }),
    em = Vl(tm),
    am = H({}, Ba, { relatedTarget: 0 }),
    ri = Vl(am),
    um = H({}, _e, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nm = Vl(um),
    im = H({}, _e, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    cm = Vl(im),
    fm = H({}, _e, { data: 0 }),
    Lf = Vl(fm),
    sm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    om = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function rm(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = om[l])
        ? !!t[l]
        : !1;
  }
  function mi() {
    return rm;
  }
  var mm = H({}, Ba, {
      key: function (l) {
        if (l.key) {
          var t = sm[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = qu(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? dm[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: mi,
      charCode: function (l) {
        return l.type === "keypress" ? qu(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? qu(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    hm = Vl(mm),
    vm = H({}, Gu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Kf = Vl(vm),
    ym = H({}, Ba, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mi,
    }),
    gm = Vl(ym),
    xm = H({}, _e, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bm = Vl(xm),
    pm = H({}, Gu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Sm = Vl(pm),
    zm = H({}, _e, { newState: 0, oldState: 0 }),
    Nm = Vl(zm),
    jm = [9, 13, 27, 32],
    hi = qt && "CompositionEvent" in window,
    Ga = null;
  qt && "documentMode" in document && (Ga = document.documentMode);
  var Am = qt && "TextEvent" in window && !Ga,
    Jf = qt && (!hi || (Ga && 8 < Ga && 11 >= Ga)),
    kf = " ",
    Wf = !1;
  function $f(l, t) {
    switch (l) {
      case "keyup":
        return jm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ff(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var la = !1;
  function Tm(l, t) {
    switch (l) {
      case "compositionend":
        return Ff(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wf = !0), kf);
      case "textInput":
        return ((l = t.data), l === kf && Wf ? null : l);
      default:
        return null;
    }
  }
  function Em(l, t) {
    if (la)
      return l === "compositionend" || (!hi && $f(l, t))
        ? ((l = wf()), (Ru = si = te = null), (la = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Jf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _m = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function If(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!_m[l.type] : t === "textarea";
  }
  function Pf(l, t, e, a) {
    (Ie ? (Pe ? Pe.push(a) : (Pe = [a])) : (Ie = a),
      (t = Mn(t, "onChange")),
      0 < t.length &&
        ((e = new Yu("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t })));
  }
  var Qa = null,
    Xa = null;
  function Mm(l) {
    qo(l, 0);
  }
  function Qu(l) {
    var t = Ha(l);
    if (Hf(t)) return l;
  }
  function ls(l, t) {
    if (l === "change") return t;
  }
  var ts = !1;
  if (qt) {
    var vi;
    if (qt) {
      var yi = "oninput" in document;
      if (!yi) {
        var es = document.createElement("div");
        (es.setAttribute("oninput", "return;"),
          (yi = typeof es.oninput == "function"));
      }
      vi = yi;
    } else vi = !1;
    ts = vi && (!document.documentMode || 9 < document.documentMode);
  }
  function as() {
    Qa && (Qa.detachEvent("onpropertychange", us), (Xa = Qa = null));
  }
  function us(l) {
    if (l.propertyName === "value" && Qu(Xa)) {
      var t = [];
      (Pf(t, Xa, l, ii(l)), Xf(Mm, t));
    }
  }
  function Om(l, t, e) {
    l === "focusin"
      ? (as(), (Qa = t), (Xa = e), Qa.attachEvent("onpropertychange", us))
      : l === "focusout" && as();
  }
  function Dm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Qu(Xa);
  }
  function Um(l, t) {
    if (l === "click") return Qu(t);
  }
  function Cm(l, t) {
    if (l === "input" || l === "change") return Qu(t);
  }
  function Hm(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var tt = typeof Object.is == "function" ? Object.is : Hm;
  function wa(l, t) {
    if (tt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Jn.call(t, u) || !tt(l[u], t[u])) return !1;
    }
    return !0;
  }
  function ns(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function is(l, t) {
    var e = ns(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = ns(e);
    }
  }
  function cs(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? cs(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function fs(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Cu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Cu(l.document);
    }
    return t;
  }
  function gi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Rm = qt && "documentMode" in document && 11 >= document.documentMode,
    ta = null,
    xi = null,
    Za = null,
    bi = !1;
  function ss(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    bi ||
      ta == null ||
      ta !== Cu(a) ||
      ((a = ta),
      "selectionStart" in a && gi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Za && wa(Za, a)) ||
        ((Za = a),
        (a = Mn(xi, "onSelect")),
        0 < a.length &&
          ((t = new Yu("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = ta))));
  }
  function Me(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var ea = {
      animationend: Me("Animation", "AnimationEnd"),
      animationiteration: Me("Animation", "AnimationIteration"),
      animationstart: Me("Animation", "AnimationStart"),
      transitionrun: Me("Transition", "TransitionRun"),
      transitionstart: Me("Transition", "TransitionStart"),
      transitioncancel: Me("Transition", "TransitionCancel"),
      transitionend: Me("Transition", "TransitionEnd"),
    },
    pi = {},
    ds = {};
  qt &&
    ((ds = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ea.animationend.animation,
      delete ea.animationiteration.animation,
      delete ea.animationstart.animation),
    "TransitionEvent" in window || delete ea.transitionend.transition);
  function Oe(l) {
    if (pi[l]) return pi[l];
    if (!ea[l]) return l;
    var t = ea[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in ds) return (pi[l] = t[e]);
    return l;
  }
  var os = Oe("animationend"),
    rs = Oe("animationiteration"),
    ms = Oe("animationstart"),
    qm = Oe("transitionrun"),
    Bm = Oe("transitionstart"),
    Ym = Oe("transitioncancel"),
    hs = Oe("transitionend"),
    vs = new Map(),
    Si =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Si.push("scrollEnd");
  function St(l, t) {
    (vs.set(l, t), Ee(t, [l]));
  }
  var Xu =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    rt = [],
    aa = 0,
    zi = 0;
  function wu() {
    for (var l = aa, t = (zi = aa = 0); t < l; ) {
      var e = rt[t];
      rt[t++] = null;
      var a = rt[t];
      rt[t++] = null;
      var u = rt[t];
      rt[t++] = null;
      var n = rt[t];
      if (((rt[t++] = null), a !== null && u !== null)) {
        var i = a.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u));
      }
      n !== 0 && ys(e, u, n);
    }
  }
  function Zu(l, t, e, a) {
    ((rt[aa++] = l),
      (rt[aa++] = t),
      (rt[aa++] = e),
      (rt[aa++] = a),
      (zi |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a));
  }
  function Ni(l, t, e, a) {
    return (Zu(l, t, e, a), Vu(l));
  }
  function De(l, t) {
    return (Zu(l, null, null, t), Vu(l));
  }
  function ys(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - lt(e)),
          (l = n.hiddenUpdates),
          (a = l[u]),
          a === null ? (l[u] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        n)
      : null;
  }
  function Vu(l) {
    if (50 < ou) throw ((ou = 0), (Uc = null), Error(m(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var ua = {};
  function Gm(l, t, e, a) {
    ((this.tag = l),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function et(l, t, e, a) {
    return new Gm(l, t, e, a);
  }
  function ji(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Bt(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = et(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function gs(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Lu(l, t, e, a, u, n) {
    var i = 0;
    if (((a = l), typeof l == "function")) ji(l) && (i = 1);
    else if (typeof l == "string")
      i = V0(l, e, _.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case Tt:
          return (
            (l = et(31, e, t, u)),
            (l.elementType = Tt),
            (l.lanes = n),
            l
          );
        case ql:
          return Ue(e.children, u, n, t);
        case Ut:
          ((i = 8), (u |= 24));
          break;
        case Fl:
          return (
            (l = et(12, e, t, u | 2)),
            (l.elementType = Fl),
            (l.lanes = n),
            l
          );
        case At:
          return (
            (l = et(13, e, t, u)),
            (l.elementType = At),
            (l.lanes = n),
            l
          );
        case Ql:
          return (
            (l = et(19, e, t, u)),
            (l.elementType = Ql),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Hl:
                i = 10;
                break l;
              case It:
                i = 9;
                break l;
              case st:
                i = 11;
                break l;
              case W:
                i = 14;
                break l;
              case Xl:
                ((i = 16), (a = null));
                break l;
            }
          ((i = 29),
            (e = Error(m(130, l === null ? "null" : typeof l, ""))),
            (a = null));
      }
    return (
      (t = et(i, e, t, u)),
      (t.elementType = l),
      (t.type = a),
      (t.lanes = n),
      t
    );
  }
  function Ue(l, t, e, a) {
    return ((l = et(7, l, a, t)), (l.lanes = e), l);
  }
  function Ai(l, t, e) {
    return ((l = et(6, l, null, t)), (l.lanes = e), l);
  }
  function xs(l) {
    var t = et(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Ti(l, t, e) {
    return (
      (t = et(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var bs = new WeakMap();
  function mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = bs.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: xf(t) }), bs.set(l, t), t);
    }
    return { value: l, source: t, stack: xf(t) };
  }
  var na = [],
    ia = 0,
    Ku = null,
    Va = 0,
    ht = [],
    vt = 0,
    ee = null,
    _t = 1,
    Mt = "";
  function Yt(l, t) {
    ((na[ia++] = Va), (na[ia++] = Ku), (Ku = l), (Va = t));
  }
  function ps(l, t, e) {
    ((ht[vt++] = _t), (ht[vt++] = Mt), (ht[vt++] = ee), (ee = l));
    var a = _t;
    l = Mt;
    var u = 32 - lt(a) - 1;
    ((a &= ~(1 << u)), (e += 1));
    var n = 32 - lt(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (_t = (1 << (32 - lt(t) + u)) | (e << u) | a),
        (Mt = n + l));
    } else ((_t = (1 << n) | (e << u) | a), (Mt = l));
  }
  function Ei(l) {
    l.return !== null && (Yt(l, 1), ps(l, 1, 0));
  }
  function _i(l) {
    for (; l === Ku; )
      ((Ku = na[--ia]), (na[ia] = null), (Va = na[--ia]), (na[ia] = null));
    for (; l === ee; )
      ((ee = ht[--vt]),
        (ht[vt] = null),
        (Mt = ht[--vt]),
        (ht[vt] = null),
        (_t = ht[--vt]),
        (ht[vt] = null));
  }
  function Ss(l, t) {
    ((ht[vt++] = _t),
      (ht[vt++] = Mt),
      (ht[vt++] = ee),
      (_t = t.id),
      (Mt = t.overflow),
      (ee = l));
  }
  var Ol = null,
    dl = null,
    $ = !1,
    ae = null,
    yt = !1,
    Mi = Error(m(519));
  function ue(l) {
    var t = Error(
      m(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (La(mt(t, l)), Mi);
  }
  function zs(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[Ml] = l), (t[Zl] = a), e)) {
      case "dialog":
        (L("cancel", t), L("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        L("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < mu.length; e++) L(mu[e], t);
        break;
      case "source":
        L("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (L("error", t), L("load", t));
        break;
      case "details":
        L("toggle", t);
        break;
      case "input":
        (L("invalid", t),
          Rf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        L("invalid", t);
        break;
      case "textarea":
        (L("invalid", t), Bf(t, a.value, a.defaultValue, a.children));
    }
    ((e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Qo(t.textContent, e)
        ? (a.popover != null && (L("beforetoggle", t), L("toggle", t)),
          a.onScroll != null && L("scroll", t),
          a.onScrollEnd != null && L("scrollend", t),
          a.onClick != null && (t.onclick = Rt),
          (t = !0))
        : (t = !1),
      t || ue(l, !0));
  }
  function Ns(l) {
    for (Ol = l.return; Ol; )
      switch (Ol.tag) {
        case 5:
        case 31:
        case 13:
          yt = !1;
          return;
        case 27:
        case 3:
          yt = !0;
          return;
        default:
          Ol = Ol.return;
      }
  }
  function ca(l) {
    if (l !== Ol) return !1;
    if (!$) return (Ns(l), ($ = !0), !1);
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || Jc(l.type, l.memoizedProps))),
        (e = !e)),
      e && dl && ue(l),
      Ns(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(m(317));
      dl = Wo(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(m(317));
      dl = Wo(l);
    } else
      t === 27
        ? ((t = dl), xe(l.type) ? ((l = Ic), (Ic = null), (dl = l)) : (dl = t))
        : (dl = Ol ? xt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ce() {
    ((dl = Ol = null), ($ = !1));
  }
  function Oi() {
    var l = ae;
    return (
      l !== null &&
        (kl === null ? (kl = l) : kl.push.apply(kl, l), (ae = null)),
      l
    );
  }
  function La(l) {
    ae === null ? (ae = [l]) : ae.push(l);
  }
  var Di = o(null),
    He = null,
    Gt = null;
  function ne(l, t, e) {
    (T(Di, t._currentValue), (t._currentValue = e));
  }
  function Qt(l) {
    ((l._currentValue = Di.current), z(Di));
  }
  function Ui(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function Ci(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var s = 0; s < t.length; s++)
            if (c.context === t[s]) {
              ((n.lanes |= e),
                (c = n.alternate),
                c !== null && (c.lanes |= e),
                Ui(n.return, e, l),
                a || (i = null));
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(m(341));
        ((i.lanes |= e),
          (n = i.alternate),
          n !== null && (n.lanes |= e),
          Ui(i, e, l),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function fa(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(m(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          tt(u.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === tl.current) {
        if (((i = u.alternate), i === null)) throw Error(m(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(xu) : (l = [xu]));
      }
      u = u.return;
    }
    (l !== null && Ci(t, l, e, a), (t.flags |= 262144));
  }
  function Ju(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!tt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Re(l) {
    ((He = l),
      (Gt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Dl(l) {
    return js(He, l);
  }
  function ku(l, t) {
    return (He === null && Re(l), js(l, t));
  }
  function js(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Gt === null)) {
      if (l === null) throw Error(m(308));
      ((Gt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Gt = Gt.next = t;
    return e;
  }
  var Qm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                }));
            };
          },
    Xm = j.unstable_scheduleCallback,
    wm = j.unstable_NormalPriority,
    Sl = {
      $$typeof: Hl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hi() {
    return { controller: new Qm(), data: new Map(), refCount: 0 };
  }
  function Ka(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Xm(wm, function () {
          l.controller.abort();
        }));
  }
  var Ja = null,
    Ri = 0,
    sa = 0,
    da = null;
  function Zm(l, t) {
    if (Ja === null) {
      var e = (Ja = []);
      ((Ri = 0),
        (sa = Yc()),
        (da = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        }));
    }
    return (Ri++, t.then(As, As), t);
  }
  function As() {
    if (--Ri === 0 && Ja !== null) {
      da !== null && (da.status = "fulfilled");
      var l = Ja;
      ((Ja = null), (sa = 0), (da = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Vm(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var u = 0; u < e.length; u++) (0, e[u])(t);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        },
      ),
      a
    );
  }
  var Ts = b.S;
  b.S = function (l, t) {
    ((so = Il()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Zm(l, t),
      Ts !== null && Ts(l, t));
  };
  var qe = o(null);
  function qi() {
    var l = qe.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Wu(l, t) {
    t === null ? T(qe, qe.current) : T(qe, t.pool);
  }
  function Es() {
    var l = qi();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var oa = Error(m(460)),
    Bi = Error(m(474)),
    $u = Error(m(542)),
    Fu = { then: function () {} };
  function _s(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Ms(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(Rt, Rt), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Ds(l), l);
      default:
        if (typeof t.status == "string") t.then(Rt, Rt);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(m(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Ds(l), l);
        }
        throw ((Ye = t), oa);
    }
  }
  function Be(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((Ye = e), oa)
        : e;
    }
  }
  var Ye = null;
  function Os() {
    if (Ye === null) throw Error(m(459));
    var l = Ye;
    return ((Ye = null), l);
  }
  function Ds(l) {
    if (l === oa || l === $u) throw Error(m(483));
  }
  var ra = null,
    ka = 0;
  function Iu(l) {
    var t = ka;
    return ((ka += 1), ra === null && (ra = []), Ms(ra, l, t));
  }
  function Wa(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function Pu(l, t) {
    throw t.$$typeof === rl
      ? Error(m(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          m(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Us(l) {
    function t(r, d) {
      if (l) {
        var h = r.deletions;
        h === null ? ((r.deletions = [d]), (r.flags |= 16)) : h.push(d);
      }
    }
    function e(r, d) {
      if (!l) return null;
      for (; d !== null; ) (t(r, d), (d = d.sibling));
      return null;
    }
    function a(r) {
      for (var d = new Map(); r !== null; )
        (r.key !== null ? d.set(r.key, r) : d.set(r.index, r), (r = r.sibling));
      return d;
    }
    function u(r, d) {
      return ((r = Bt(r, d)), (r.index = 0), (r.sibling = null), r);
    }
    function n(r, d, h) {
      return (
        (r.index = h),
        l
          ? ((h = r.alternate),
            h !== null
              ? ((h = h.index), h < d ? ((r.flags |= 67108866), d) : h)
              : ((r.flags |= 67108866), d))
          : ((r.flags |= 1048576), d)
      );
    }
    function i(r) {
      return (l && r.alternate === null && (r.flags |= 67108866), r);
    }
    function c(r, d, h, p) {
      return d === null || d.tag !== 6
        ? ((d = Ai(h, r.mode, p)), (d.return = r), d)
        : ((d = u(d, h)), (d.return = r), d);
    }
    function s(r, d, h, p) {
      var U = h.type;
      return U === ql
        ? x(r, d, h.props.children, p, h.key)
        : d !== null &&
            (d.elementType === U ||
              (typeof U == "object" &&
                U !== null &&
                U.$$typeof === Xl &&
                Be(U) === d.type))
          ? ((d = u(d, h.props)), Wa(d, h), (d.return = r), d)
          : ((d = Lu(h.type, h.key, h.props, null, r.mode, p)),
            Wa(d, h),
            (d.return = r),
            d);
    }
    function v(r, d, h, p) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== h.containerInfo ||
        d.stateNode.implementation !== h.implementation
        ? ((d = Ti(h, r.mode, p)), (d.return = r), d)
        : ((d = u(d, h.children || [])), (d.return = r), d);
    }
    function x(r, d, h, p, U) {
      return d === null || d.tag !== 7
        ? ((d = Ue(h, r.mode, p, U)), (d.return = r), d)
        : ((d = u(d, h)), (d.return = r), d);
    }
    function S(r, d, h) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return ((d = Ai("" + d, r.mode, h)), (d.return = r), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case $l:
            return (
              (h = Lu(d.type, d.key, d.props, null, r.mode, h)),
              Wa(h, d),
              (h.return = r),
              h
            );
          case Gl:
            return ((d = Ti(d, r.mode, h)), (d.return = r), d);
          case Xl:
            return ((d = Be(d)), S(r, d, h));
        }
        if (pt(d) || wl(d))
          return ((d = Ue(d, r.mode, h, null)), (d.return = r), d);
        if (typeof d.then == "function") return S(r, Iu(d), h);
        if (d.$$typeof === Hl) return S(r, ku(r, d), h);
        Pu(r, d);
      }
      return null;
    }
    function y(r, d, h, p) {
      var U = d !== null ? d.key : null;
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return U !== null ? null : c(r, d, "" + h, p);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case $l:
            return h.key === U ? s(r, d, h, p) : null;
          case Gl:
            return h.key === U ? v(r, d, h, p) : null;
          case Xl:
            return ((h = Be(h)), y(r, d, h, p));
        }
        if (pt(h) || wl(h)) return U !== null ? null : x(r, d, h, p, null);
        if (typeof h.then == "function") return y(r, d, Iu(h), p);
        if (h.$$typeof === Hl) return y(r, d, ku(r, h), p);
        Pu(r, h);
      }
      return null;
    }
    function g(r, d, h, p, U) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return ((r = r.get(h) || null), c(d, r, "" + p, U));
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case $l:
            return (
              (r = r.get(p.key === null ? h : p.key) || null),
              s(d, r, p, U)
            );
          case Gl:
            return (
              (r = r.get(p.key === null ? h : p.key) || null),
              v(d, r, p, U)
            );
          case Xl:
            return ((p = Be(p)), g(r, d, h, p, U));
        }
        if (pt(p) || wl(p))
          return ((r = r.get(h) || null), x(d, r, p, U, null));
        if (typeof p.then == "function") return g(r, d, h, Iu(p), U);
        if (p.$$typeof === Hl) return g(r, d, h, ku(d, p), U);
        Pu(d, p);
      }
      return null;
    }
    function E(r, d, h, p) {
      for (
        var U = null, F = null, O = d, X = (d = 0), k = null;
        O !== null && X < h.length;
        X++
      ) {
        O.index > X ? ((k = O), (O = null)) : (k = O.sibling);
        var I = y(r, O, h[X], p);
        if (I === null) {
          O === null && (O = k);
          break;
        }
        (l && O && I.alternate === null && t(r, O),
          (d = n(I, d, X)),
          F === null ? (U = I) : (F.sibling = I),
          (F = I),
          (O = k));
      }
      if (X === h.length) return (e(r, O), $ && Yt(r, X), U);
      if (O === null) {
        for (; X < h.length; X++)
          ((O = S(r, h[X], p)),
            O !== null &&
              ((d = n(O, d, X)),
              F === null ? (U = O) : (F.sibling = O),
              (F = O)));
        return ($ && Yt(r, X), U);
      }
      for (O = a(O); X < h.length; X++)
        ((k = g(O, r, X, h[X], p)),
          k !== null &&
            (l && k.alternate !== null && O.delete(k.key === null ? X : k.key),
            (d = n(k, d, X)),
            F === null ? (U = k) : (F.sibling = k),
            (F = k)));
      return (
        l &&
          O.forEach(function (Ne) {
            return t(r, Ne);
          }),
        $ && Yt(r, X),
        U
      );
    }
    function R(r, d, h, p) {
      if (h == null) throw Error(m(151));
      for (
        var U = null, F = null, O = d, X = (d = 0), k = null, I = h.next();
        O !== null && !I.done;
        X++, I = h.next()
      ) {
        O.index > X ? ((k = O), (O = null)) : (k = O.sibling);
        var Ne = y(r, O, I.value, p);
        if (Ne === null) {
          O === null && (O = k);
          break;
        }
        (l && O && Ne.alternate === null && t(r, O),
          (d = n(Ne, d, X)),
          F === null ? (U = Ne) : (F.sibling = Ne),
          (F = Ne),
          (O = k));
      }
      if (I.done) return (e(r, O), $ && Yt(r, X), U);
      if (O === null) {
        for (; !I.done; X++, I = h.next())
          ((I = S(r, I.value, p)),
            I !== null &&
              ((d = n(I, d, X)),
              F === null ? (U = I) : (F.sibling = I),
              (F = I)));
        return ($ && Yt(r, X), U);
      }
      for (O = a(O); !I.done; X++, I = h.next())
        ((I = g(O, r, X, I.value, p)),
          I !== null &&
            (l && I.alternate !== null && O.delete(I.key === null ? X : I.key),
            (d = n(I, d, X)),
            F === null ? (U = I) : (F.sibling = I),
            (F = I)));
      return (
        l &&
          O.forEach(function (th) {
            return t(r, th);
          }),
        $ && Yt(r, X),
        U
      );
    }
    function cl(r, d, h, p) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === ql &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case $l:
            l: {
              for (var U = h.key; d !== null; ) {
                if (d.key === U) {
                  if (((U = h.type), U === ql)) {
                    if (d.tag === 7) {
                      (e(r, d.sibling),
                        (p = u(d, h.props.children)),
                        (p.return = r),
                        (r = p));
                      break l;
                    }
                  } else if (
                    d.elementType === U ||
                    (typeof U == "object" &&
                      U !== null &&
                      U.$$typeof === Xl &&
                      Be(U) === d.type)
                  ) {
                    (e(r, d.sibling),
                      (p = u(d, h.props)),
                      Wa(p, h),
                      (p.return = r),
                      (r = p));
                    break l;
                  }
                  e(r, d);
                  break;
                } else t(r, d);
                d = d.sibling;
              }
              h.type === ql
                ? ((p = Ue(h.props.children, r.mode, p, h.key)),
                  (p.return = r),
                  (r = p))
                : ((p = Lu(h.type, h.key, h.props, null, r.mode, p)),
                  Wa(p, h),
                  (p.return = r),
                  (r = p));
            }
            return i(r);
          case Gl:
            l: {
              for (U = h.key; d !== null; ) {
                if (d.key === U)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === h.containerInfo &&
                    d.stateNode.implementation === h.implementation
                  ) {
                    (e(r, d.sibling),
                      (p = u(d, h.children || [])),
                      (p.return = r),
                      (r = p));
                    break l;
                  } else {
                    e(r, d);
                    break;
                  }
                else t(r, d);
                d = d.sibling;
              }
              ((p = Ti(h, r.mode, p)), (p.return = r), (r = p));
            }
            return i(r);
          case Xl:
            return ((h = Be(h)), cl(r, d, h, p));
        }
        if (pt(h)) return E(r, d, h, p);
        if (wl(h)) {
          if (((U = wl(h)), typeof U != "function")) throw Error(m(150));
          return ((h = U.call(h)), R(r, d, h, p));
        }
        if (typeof h.then == "function") return cl(r, d, Iu(h), p);
        if (h.$$typeof === Hl) return cl(r, d, ku(r, h), p);
        Pu(r, h);
      }
      return (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
        ? ((h = "" + h),
          d !== null && d.tag === 6
            ? (e(r, d.sibling), (p = u(d, h)), (p.return = r), (r = p))
            : (e(r, d), (p = Ai(h, r.mode, p)), (p.return = r), (r = p)),
          i(r))
        : e(r, d);
    }
    return function (r, d, h, p) {
      try {
        ka = 0;
        var U = cl(r, d, h, p);
        return ((ra = null), U);
      } catch (O) {
        if (O === oa || O === $u) throw O;
        var F = et(29, O, null, r.mode);
        return ((F.lanes = p), (F.return = r), F);
      } finally {
      }
    };
  }
  var Ge = Us(!0),
    Cs = Us(!1),
    ie = !1;
  function Yi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Gi(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ce(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function fe(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (P & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        (t = Vu(l)),
        ys(l, null, e),
        t
      );
    }
    return (Zu(l, a, t, e), Vu(l));
  }
  function $a(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (e |= a), (t.lanes = e), jf(l, e));
    }
  }
  function Qi(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (e = e.next));
        } while (e !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e));
      return;
    }
    ((l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t));
  }
  var Xi = !1;
  function Fa() {
    if (Xi) {
      var l = da;
      if (l !== null) throw l;
    }
  }
  function Ia(l, t, e, a) {
    Xi = !1;
    var u = l.updateQueue;
    ie = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var s = c,
        v = s.next;
      ((s.next = null), i === null ? (n = v) : (i.next = v), (i = s));
      var x = l.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (c = x.lastBaseUpdate),
        c !== i &&
          (c === null ? (x.firstBaseUpdate = v) : (c.next = v),
          (x.lastBaseUpdate = s)));
    }
    if (n !== null) {
      var S = u.baseState;
      ((i = 0), (x = v = s = null), (c = n));
      do {
        var y = c.lane & -536870913,
          g = y !== c.lane;
        if (g ? (J & y) === y : (a & y) === y) {
          (y !== 0 && y === sa && (Xi = !0),
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var E = l,
              R = c;
            y = t;
            var cl = e;
            switch (R.tag) {
              case 1:
                if (((E = R.payload), typeof E == "function")) {
                  S = E.call(cl, S, y);
                  break l;
                }
                S = E;
                break l;
              case 3:
                E.flags = (E.flags & -65537) | 128;
              case 0:
                if (
                  ((E = R.payload),
                  (y = typeof E == "function" ? E.call(cl, S, y) : E),
                  y == null)
                )
                  break l;
                S = H({}, S, y);
                break l;
              case 2:
                ie = !0;
            }
          }
          ((y = c.callback),
            y !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [y]) : g.push(y)));
        } else
          ((g = {
            lane: y,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            x === null ? ((v = x = g), (s = S)) : (x = x.next = g),
            (i |= y));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((g = c),
            (c = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null));
        }
      } while (!0);
      (x === null && (s = S),
        (u.baseState = s),
        (u.firstBaseUpdate = v),
        (u.lastBaseUpdate = x),
        n === null && (u.shared.lanes = 0),
        (me |= i),
        (l.lanes = i),
        (l.memoizedState = S));
    }
  }
  function Hs(l, t) {
    if (typeof l != "function") throw Error(m(191, l));
    l.call(t);
  }
  function Rs(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) Hs(e[l], t);
  }
  var ma = o(null),
    ln = o(0);
  function qs(l, t) {
    ((l = Wt), T(ln, l), T(ma, t), (Wt = l | t.baseLanes));
  }
  function wi() {
    (T(ln, Wt), T(ma, ma.current));
  }
  function Zi() {
    ((Wt = ln.current), z(ma), z(ln));
  }
  var at = o(null),
    gt = null;
  function se(l) {
    var t = l.alternate;
    (T(xl, xl.current & 1),
      T(at, l),
      gt === null &&
        (t === null || ma.current !== null || t.memoizedState !== null) &&
        (gt = l));
  }
  function Vi(l) {
    (T(xl, xl.current), T(at, l), gt === null && (gt = l));
  }
  function Bs(l) {
    l.tag === 22
      ? (T(xl, xl.current), T(at, l), gt === null && (gt = l))
      : de();
  }
  function de() {
    (T(xl, xl.current), T(at, at.current));
  }
  function ut(l) {
    (z(at), gt === l && (gt = null), z(xl));
  }
  var xl = o(0);
  function tn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || $c(e) || Fc(e)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Xt = 0,
    Q = null,
    nl = null,
    zl = null,
    en = !1,
    ha = !1,
    Qe = !1,
    an = 0,
    Pa = 0,
    va = null,
    Lm = 0;
  function hl() {
    throw Error(m(321));
  }
  function Li(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!tt(l[e], t[e])) return !1;
    return !0;
  }
  function Ki(l, t, e, a, u, n) {
    return (
      (Xt = n),
      (Q = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? pd : cc),
      (Qe = !1),
      (n = e(a, u)),
      (Qe = !1),
      ha && (n = Gs(t, e, a, u)),
      Ys(l),
      n
    );
  }
  function Ys(l) {
    b.H = eu;
    var t = nl !== null && nl.next !== null;
    if (((Xt = 0), (zl = nl = Q = null), (en = !1), (Pa = 0), (va = null), t))
      throw Error(m(300));
    l === null ||
      Nl ||
      ((l = l.dependencies), l !== null && Ju(l) && (Nl = !0));
  }
  function Gs(l, t, e, a) {
    Q = l;
    var u = 0;
    do {
      if ((ha && (va = null), (Pa = 0), (ha = !1), 25 <= u))
        throw Error(m(301));
      if (((u += 1), (zl = nl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((b.H = Sd), (n = t(e, a)));
    } while (ha);
    return n;
  }
  function Km() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? lu(t) : t),
      (l = l.useState()[0]),
      (nl !== null ? nl.memoizedState : null) !== l && (Q.flags |= 1024),
      t
    );
  }
  function Ji() {
    var l = an !== 0;
    return ((an = 0), l);
  }
  function ki(l, t, e) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e));
  }
  function Wi(l) {
    if (en) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      en = !1;
    }
    ((Xt = 0), (zl = nl = Q = null), (ha = !1), (Pa = an = 0), (va = null));
  }
  function Yl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (zl === null ? (Q.memoizedState = zl = l) : (zl = zl.next = l), zl);
  }
  function bl() {
    if (nl === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = zl === null ? Q.memoizedState : zl.next;
    if (t !== null) ((zl = t), (nl = l));
    else {
      if (l === null)
        throw Q.alternate === null ? Error(m(467)) : Error(m(310));
      ((nl = l),
        (l = {
          memoizedState: nl.memoizedState,
          baseState: nl.baseState,
          baseQueue: nl.baseQueue,
          queue: nl.queue,
          next: null,
        }),
        zl === null ? (Q.memoizedState = zl = l) : (zl = zl.next = l));
    }
    return zl;
  }
  function un() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function lu(l) {
    var t = Pa;
    return (
      (Pa += 1),
      va === null && (va = []),
      (l = Ms(va, l, t)),
      (t = Q),
      (zl === null ? t.memoizedState : zl.next) === null &&
        ((t = t.alternate),
        (b.H = t === null || t.memoizedState === null ? pd : cc)),
      l
    );
  }
  function nn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return lu(l);
      if (l.$$typeof === Hl) return Dl(l);
    }
    throw Error(m(438, String(l)));
  }
  function $i(l) {
    var t = null,
      e = Q.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = Q.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = un()), (Q.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ve;
    return (t.index++, e);
  }
  function wt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function cn(l) {
    var t = bl();
    return Fi(t, nl, l);
  }
  function Fi(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((t.baseQueue = u = n), (a.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var c = (i = null),
        s = null,
        v = t,
        x = !1;
      do {
        var S = v.lane & -536870913;
        if (S !== v.lane ? (J & S) === S : (Xt & S) === S) {
          var y = v.revertLane;
          if (y === 0)
            (s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              S === sa && (x = !0));
          else if ((Xt & y) === y) {
            ((v = v.next), y === sa && (x = !0));
            continue;
          } else
            ((S = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              s === null ? ((c = s = S), (i = n)) : (s = s.next = S),
              (Q.lanes |= y),
              (me |= y));
          ((S = v.action),
            Qe && e(n, S),
            (n = v.hasEagerState ? v.eagerState : e(n, S)));
        } else
          ((y = {
            lane: S,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            s === null ? ((c = s = y), (i = n)) : (s = s.next = y),
            (Q.lanes |= S),
            (me |= S));
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (s === null ? (i = n) : (s.next = c),
        !tt(n, l.memoizedState) && ((Nl = !0), x && ((e = da), e !== null)))
      )
        throw e;
      ((l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = s),
        (a.lastRenderedState = n));
    }
    return (u === null && (a.lanes = 0), [l.memoizedState, a.dispatch]);
  }
  function Ii(l) {
    var t = bl(),
      e = t.queue;
    if (e === null) throw Error(m(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      u = e.pending,
      n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = (u = u.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== u);
      (tt(n, t.memoizedState) || (Nl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (e.lastRenderedState = n));
    }
    return [n, a];
  }
  function Qs(l, t, e) {
    var a = Q,
      u = bl(),
      n = $;
    if (n) {
      if (e === void 0) throw Error(m(407));
      e = e();
    } else e = t();
    var i = !tt((nl || u).memoizedState, e);
    if (
      (i && ((u.memoizedState = e), (Nl = !0)),
      (u = u.queue),
      tc(Zs.bind(null, a, u, l), [l]),
      u.getSnapshot !== t || i || (zl !== null && zl.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ya(9, { destroy: void 0 }, ws.bind(null, a, u, e, t), null),
        sl === null)
      )
        throw Error(m(349));
      n || (Xt & 127) !== 0 || Xs(a, t, e);
    }
    return e;
  }
  function Xs(l, t, e) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = Q.updateQueue),
      t === null
        ? ((t = un()), (Q.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l)));
  }
  function ws(l, t, e, a) {
    ((t.value = e), (t.getSnapshot = a), Vs(t) && Ls(l));
  }
  function Zs(l, t, e) {
    return e(function () {
      Vs(t) && Ls(l);
    });
  }
  function Vs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !tt(l, e);
    } catch {
      return !0;
    }
  }
  function Ls(l) {
    var t = De(l, 2);
    t !== null && Wl(t, l, 2);
  }
  function Pi(l) {
    var t = Yl();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), Qe)) {
        Pt(!0);
        try {
          e();
        } finally {
          Pt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Ks(l, t, e, a) {
    return ((l.baseState = e), Fi(l, nl, typeof a == "function" ? a : wt));
  }
  function Jm(l, t, e, a, u) {
    if (dn(l)) throw Error(m(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (b.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = t.pending),
        e === null
          ? ((n.next = t.pending = n), Js(t, n))
          : ((n.next = e.next), (t.pending = e.next = n)));
    }
  }
  function Js(l, t) {
    var e = t.action,
      a = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = b.T,
        i = {};
      b.T = i;
      try {
        var c = e(u, a),
          s = b.S;
        (s !== null && s(i, c), ks(l, t, c));
      } catch (v) {
        lc(l, t, v);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (b.T = n));
      }
    } else
      try {
        ((n = e(u, a)), ks(l, t, n));
      } catch (v) {
        lc(l, t, v);
      }
  }
  function ks(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            Ws(l, t, a);
          },
          function (a) {
            return lc(l, t, a);
          },
        )
      : Ws(l, t, e);
  }
  function Ws(l, t, e) {
    ((t.status = "fulfilled"),
      (t.value = e),
      $s(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), Js(l, e))));
  }
  function lc(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = e), $s(t), (t = t.next));
      while (t !== a);
    }
    l.action = null;
  }
  function $s(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Fs(l, t) {
    return t;
  }
  function Is(l, t) {
    if ($) {
      var e = sl.formState;
      if (e !== null) {
        l: {
          var a = Q;
          if ($) {
            if (dl) {
              t: {
                for (var u = dl, n = yt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = xt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((dl = xt(u.nextSibling)), (a = u.data === "F!"));
                break l;
              }
            }
            ue(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = Yl()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fs,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = gd.bind(null, Q, a)),
      (a.dispatch = e),
      (a = Pi(!1)),
      (n = ic.bind(null, Q, !1, a.queue)),
      (a = Yl()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = u),
      (e = Jm.bind(null, Q, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function Ps(l) {
    var t = bl();
    return ld(t, nl, l);
  }
  function ld(l, t, e) {
    if (
      ((t = Fi(l, t, Fs)[0]),
      (l = cn(wt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = lu(t);
      } catch (i) {
        throw i === oa ? $u : i;
      }
    else a = t;
    t = bl();
    var u = t.queue,
      n = u.dispatch;
    return (
      e !== t.memoizedState &&
        ((Q.flags |= 2048),
        ya(9, { destroy: void 0 }, km.bind(null, u, e), null)),
      [a, n, l]
    );
  }
  function km(l, t) {
    l.action = t;
  }
  function td(l) {
    var t = bl(),
      e = nl;
    if (e !== null) return ld(t, e, l);
    (bl(), (t = t.memoizedState), (e = bl()));
    var a = e.queue.dispatch;
    return ((e.memoizedState = l), [t, a, !1]);
  }
  function ya(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = Q.updateQueue),
      t === null && ((t = un()), (Q.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function ed() {
    return bl().memoizedState;
  }
  function fn(l, t, e, a) {
    var u = Yl();
    ((Q.flags |= l),
      (u.memoizedState = ya(
        1 | t,
        { destroy: void 0 },
        e,
        a === void 0 ? null : a,
      )));
  }
  function sn(l, t, e, a) {
    var u = bl();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    nl !== null && a !== null && Li(a, nl.memoizedState.deps)
      ? (u.memoizedState = ya(t, n, e, a))
      : ((Q.flags |= l), (u.memoizedState = ya(1 | t, n, e, a)));
  }
  function ad(l, t) {
    fn(8390656, 8, l, t);
  }
  function tc(l, t) {
    sn(2048, 8, l, t);
  }
  function Wm(l) {
    Q.flags |= 4;
    var t = Q.updateQueue;
    if (t === null) ((t = un()), (Q.updateQueue = t), (t.events = [l]));
    else {
      var e = t.events;
      e === null ? (t.events = [l]) : e.push(l);
    }
  }
  function ud(l) {
    var t = bl().memoizedState;
    return (
      Wm({ ref: t, nextImpl: l }),
      function () {
        if ((P & 2) !== 0) throw Error(m(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function nd(l, t) {
    return sn(4, 2, l, t);
  }
  function id(l, t) {
    return sn(4, 4, l, t);
  }
  function cd(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function fd(l, t, e) {
    ((e = e != null ? e.concat([l]) : null), sn(4, 4, cd.bind(null, t, l), e));
  }
  function ec() {}
  function sd(l, t) {
    var e = bl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Li(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function dd(l, t) {
    var e = bl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Li(t, a[1])) return a[0];
    if (((a = l()), Qe)) {
      Pt(!0);
      try {
        l();
      } finally {
        Pt(!1);
      }
    }
    return ((e.memoizedState = [a, t]), a);
  }
  function ac(l, t, e) {
    return e === void 0 || ((Xt & 1073741824) !== 0 && (J & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = ro()), (Q.lanes |= l), (me |= l), e);
  }
  function od(l, t, e, a) {
    return tt(e, t)
      ? e
      : ma.current !== null
        ? ((l = ac(l, e, a)), tt(l, t) || (Nl = !0), l)
        : (Xt & 42) === 0 || ((Xt & 1073741824) !== 0 && (J & 261930) === 0)
          ? ((Nl = !0), (l.memoizedState = e))
          : ((l = ro()), (Q.lanes |= l), (me |= l), t);
  }
  function rd(l, t, e, a, u) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var i = b.T,
      c = {};
    ((b.T = c), ic(l, !1, t, e));
    try {
      var s = u(),
        v = b.S;
      if (
        (v !== null && v(c, s),
        s !== null && typeof s == "object" && typeof s.then == "function")
      ) {
        var x = Vm(s, a);
        tu(l, t, x, ct(l));
      } else tu(l, t, a, ct(l));
    } catch (S) {
      tu(l, t, { then: function () {}, status: "rejected", reason: S }, ct());
    } finally {
      ((A.p = n),
        i !== null && c.types !== null && (i.types = c.types),
        (b.T = i));
    }
  }
  function $m() {}
  function uc(l, t, e, a) {
    if (l.tag !== 5) throw Error(m(476));
    var u = md(l).queue;
    rd(
      l,
      u,
      t,
      B,
      e === null
        ? $m
        : function () {
            return (hd(l), e(a));
          },
    );
  }
  function md(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wt,
        lastRenderedState: B,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: wt,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function hd(l) {
    var t = md(l);
    (t.next === null && (t = l.alternate.memoizedState),
      tu(l, t.next.queue, {}, ct()));
  }
  function nc() {
    return Dl(xu);
  }
  function vd() {
    return bl().memoizedState;
  }
  function yd() {
    return bl().memoizedState;
  }
  function Fm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = ct();
          l = ce(e);
          var a = fe(t, l, e);
          (a !== null && (Wl(a, t, e), $a(a, t, e)),
            (t = { cache: Hi() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Im(l, t, e) {
    var a = ct();
    ((e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      dn(l)
        ? xd(t, e)
        : ((e = Ni(l, t, e, a)), e !== null && (Wl(e, l, a), bd(e, t, a))));
  }
  function gd(l, t, e) {
    var a = ct();
    tu(l, t, e, a);
  }
  function tu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (dn(l)) xd(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, e);
          if (((u.hasEagerState = !0), (u.eagerState = c), tt(c, i)))
            return (Zu(l, t, u, 0), sl === null && wu(), !1);
        } catch {
        } finally {
        }
      if (((e = Ni(l, t, u, a)), e !== null))
        return (Wl(e, l, a), bd(e, t, a), !0);
    }
    return !1;
  }
  function ic(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Yc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      dn(l))
    ) {
      if (t) throw Error(m(479));
    } else ((t = Ni(l, e, a, 2)), t !== null && Wl(t, l, 2));
  }
  function dn(l) {
    var t = l.alternate;
    return l === Q || (t !== null && t === Q);
  }
  function xd(l, t) {
    ha = en = !0;
    var e = l.pending;
    (e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t));
  }
  function bd(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (e |= a), (t.lanes = e), jf(l, e));
    }
  }
  var eu = {
    readContext: Dl,
    use: nn,
    useCallback: hl,
    useContext: hl,
    useEffect: hl,
    useImperativeHandle: hl,
    useLayoutEffect: hl,
    useInsertionEffect: hl,
    useMemo: hl,
    useReducer: hl,
    useRef: hl,
    useState: hl,
    useDebugValue: hl,
    useDeferredValue: hl,
    useTransition: hl,
    useSyncExternalStore: hl,
    useId: hl,
    useHostTransitionStatus: hl,
    useFormState: hl,
    useActionState: hl,
    useOptimistic: hl,
    useMemoCache: hl,
    useCacheRefresh: hl,
  };
  eu.useEffectEvent = hl;
  var pd = {
      readContext: Dl,
      use: nn,
      useCallback: function (l, t) {
        return ((Yl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Dl,
      useEffect: ad,
      useImperativeHandle: function (l, t, e) {
        ((e = e != null ? e.concat([l]) : null),
          fn(4194308, 4, cd.bind(null, t, l), e));
      },
      useLayoutEffect: function (l, t) {
        return fn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        fn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = Yl();
        t = t === void 0 ? null : t;
        var a = l();
        if (Qe) {
          Pt(!0);
          try {
            l();
          } finally {
            Pt(!1);
          }
        }
        return ((e.memoizedState = [a, t]), a);
      },
      useReducer: function (l, t, e) {
        var a = Yl();
        if (e !== void 0) {
          var u = e(t);
          if (Qe) {
            Pt(!0);
            try {
              e(t);
            } finally {
              Pt(!1);
            }
          }
        } else u = t;
        return (
          (a.memoizedState = a.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (a.queue = l),
          (l = l.dispatch = Im.bind(null, Q, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Yl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = Pi(l);
        var t = l.queue,
          e = gd.bind(null, Q, t);
        return ((t.dispatch = e), [l.memoizedState, e]);
      },
      useDebugValue: ec,
      useDeferredValue: function (l, t) {
        var e = Yl();
        return ac(e, l, t);
      },
      useTransition: function () {
        var l = Pi(!1);
        return (
          (l = rd.bind(null, Q, l.queue, !0, !1)),
          (Yl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = Q,
          u = Yl();
        if ($) {
          if (e === void 0) throw Error(m(407));
          e = e();
        } else {
          if (((e = t()), sl === null)) throw Error(m(349));
          (J & 127) !== 0 || Xs(a, t, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: t };
        return (
          (u.queue = n),
          ad(Zs.bind(null, a, n, l), [l]),
          (a.flags |= 2048),
          ya(9, { destroy: void 0 }, ws.bind(null, a, n, e, t), null),
          e
        );
      },
      useId: function () {
        var l = Yl(),
          t = sl.identifierPrefix;
        if ($) {
          var e = Mt,
            a = _t;
          ((e = (a & ~(1 << (32 - lt(a) - 1))).toString(32) + e),
            (t = "_" + t + "R_" + e),
            (e = an++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "_"));
        } else ((e = Lm++), (t = "_" + t + "r_" + e.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: nc,
      useFormState: Is,
      useActionState: Is,
      useOptimistic: function (l) {
        var t = Yl();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e),
          (t = ic.bind(null, Q, !0, e)),
          (e.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: $i,
      useCacheRefresh: function () {
        return (Yl().memoizedState = Fm.bind(null, Q));
      },
      useEffectEvent: function (l) {
        var t = Yl(),
          e = { impl: l };
        return (
          (t.memoizedState = e),
          function () {
            if ((P & 2) !== 0) throw Error(m(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    cc = {
      readContext: Dl,
      use: nn,
      useCallback: sd,
      useContext: Dl,
      useEffect: tc,
      useImperativeHandle: fd,
      useInsertionEffect: nd,
      useLayoutEffect: id,
      useMemo: dd,
      useReducer: cn,
      useRef: ed,
      useState: function () {
        return cn(wt);
      },
      useDebugValue: ec,
      useDeferredValue: function (l, t) {
        var e = bl();
        return od(e, nl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = cn(wt)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : lu(l), t];
      },
      useSyncExternalStore: Qs,
      useId: vd,
      useHostTransitionStatus: nc,
      useFormState: Ps,
      useActionState: Ps,
      useOptimistic: function (l, t) {
        var e = bl();
        return Ks(e, nl, l, t);
      },
      useMemoCache: $i,
      useCacheRefresh: yd,
    };
  cc.useEffectEvent = ud;
  var Sd = {
    readContext: Dl,
    use: nn,
    useCallback: sd,
    useContext: Dl,
    useEffect: tc,
    useImperativeHandle: fd,
    useInsertionEffect: nd,
    useLayoutEffect: id,
    useMemo: dd,
    useReducer: Ii,
    useRef: ed,
    useState: function () {
      return Ii(wt);
    },
    useDebugValue: ec,
    useDeferredValue: function (l, t) {
      var e = bl();
      return nl === null ? ac(e, l, t) : od(e, nl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Ii(wt)[0],
        t = bl().memoizedState;
      return [typeof l == "boolean" ? l : lu(l), t];
    },
    useSyncExternalStore: Qs,
    useId: vd,
    useHostTransitionStatus: nc,
    useFormState: td,
    useActionState: td,
    useOptimistic: function (l, t) {
      var e = bl();
      return nl !== null
        ? Ks(e, nl, l, t)
        : ((e.baseState = l), [l, e.queue.dispatch]);
    },
    useMemoCache: $i,
    useCacheRefresh: yd,
  };
  Sd.useEffectEvent = ud;
  function fc(l, t, e, a) {
    ((t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : H({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e));
  }
  var sc = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = ct(),
        u = ce(a);
      ((u.payload = t),
        e != null && (u.callback = e),
        (t = fe(l, u, a)),
        t !== null && (Wl(t, l, a), $a(t, l, a)));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = ct(),
        u = ce(a);
      ((u.tag = 1),
        (u.payload = t),
        e != null && (u.callback = e),
        (t = fe(l, u, a)),
        t !== null && (Wl(t, l, a), $a(t, l, a)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = ct(),
        a = ce(e);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = fe(l, a, e)),
        t !== null && (Wl(t, l, e), $a(t, l, e)));
    },
  };
  function zd(l, t, e, a, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !wa(e, a) || !wa(u, n)
          : !0
    );
  }
  function Nd(l, t, e, a) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && sc.enqueueReplaceState(t, t.state, null));
  }
  function Xe(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = H({}, e));
      for (var u in l) e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function jd(l) {
    Xu(l);
  }
  function Ad(l) {
    console.error(l);
  }
  function Td(l) {
    Xu(l);
  }
  function on(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ed(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function dc(l, t, e) {
    return (
      (e = ce(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        on(l, t);
      }),
      e
    );
  }
  function _d(l) {
    return ((l = ce(l)), (l.tag = 3), l);
  }
  function Md(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          Ed(t, e, a);
        }));
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (Ed(t, e, a),
          typeof u != "function" &&
            (he === null ? (he = new Set([this])) : he.add(this)));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Pm(l, t, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && fa(t, e, u, !0),
        (e = at.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              gt === null ? Nn() : e.alternate === null && vl === 0 && (vl = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === Fu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  Rc(l, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === Fu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  Rc(l, a, u)),
              !1
            );
        }
        throw Error(m(435, e.tag));
      }
      return (Rc(l, a, u), Nn(), !1);
    }
    if ($)
      return (
        (t = at.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            a !== Mi && ((l = Error(m(422), { cause: a })), La(mt(l, e))))
          : (a !== Mi && ((t = Error(m(423), { cause: a })), La(mt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (a = mt(a, e)),
            (u = dc(l.stateNode, a, u)),
            Qi(l, u),
            vl !== 4 && (vl = 2)),
        !1
      );
    var n = Error(m(520), { cause: a });
    if (
      ((n = mt(n, e)),
      du === null ? (du = [n]) : du.push(n),
      vl !== 4 && (vl = 2),
      t === null)
    )
      return !0;
    ((a = mt(a, e)), (e = t));
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = u & -u),
            (e.lanes |= l),
            (l = dc(e.stateNode, a, l)),
            Qi(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (he === null || !he.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = _d(u)),
              Md(u, l, e, a),
              Qi(e, u),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var oc = Error(m(461)),
    Nl = !1;
  function Ul(l, t, e, a) {
    t.child = l === null ? Cs(t, null, e, a) : Ge(t, l.child, e, a);
  }
  function Od(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return (
      Re(t),
      (a = Ki(l, t, e, i, n, u)),
      (c = Ji()),
      l !== null && !Nl
        ? (ki(l, t, u), Zt(l, t, u))
        : ($ && c && Ei(t), (t.flags |= 1), Ul(l, t, a, u), t.child)
    );
  }
  function Dd(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" &&
        !ji(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = n), Ud(l, t, n, a, u))
        : ((l = Lu(e.type, null, a, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !bc(l, u))) {
      var i = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : wa), e(i, a) && l.ref === t.ref)
      )
        return Zt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = Bt(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Ud(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (wa(n, a) && l.ref === t.ref)
        if (((Nl = !1), (t.pendingProps = a = n), bc(l, u)))
          (l.flags & 131072) !== 0 && (Nl = !0);
        else return ((t.lanes = l.lanes), Zt(l, t, u));
    }
    return rc(l, t, e, a, u);
  }
  function Cd(l, t, e, a) {
    var u = a.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | e : e), l !== null)) {
          for (a = t.child = l.child, u = 0; a !== null; )
            ((u = u | a.lanes | a.childLanes), (a = a.sibling));
          a = u & ~n;
        } else ((a = 0), (t.child = null));
        return Hd(l, t, n, e, a);
      }
      if ((e & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Wu(t, n !== null ? n.cachePool : null),
          n !== null ? qs(t, n) : wi(),
          Bs(t));
      else
        return (
          (a = t.lanes = 536870912),
          Hd(l, t, n !== null ? n.baseLanes | e : e, e, a)
        );
    } else
      n !== null
        ? (Wu(t, n.cachePool), qs(t, n), de(), (t.memoizedState = null))
        : (l !== null && Wu(t, null), wi(), de());
    return (Ul(l, t, u, e), t.child);
  }
  function au(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Hd(l, t, e, a, u) {
    var n = qi();
    return (
      (n = n === null ? null : { parent: Sl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: e, cachePool: n }),
      l !== null && Wu(t, null),
      wi(),
      Bs(t),
      l !== null && fa(l, t, a, !0),
      (t.childLanes = u),
      null
    );
  }
  function rn(l, t) {
    return (
      (t = hn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Rd(l, t, e) {
    return (
      Ge(t, l.child, null, e),
      (l = rn(t, t.pendingProps)),
      (l.flags |= 2),
      ut(t),
      (t.memoizedState = null),
      l
    );
  }
  function l0(l, t, e) {
    var a = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if ($) {
        if (a.mode === "hidden")
          return ((l = rn(t, a)), (t.lanes = 536870912), au(null, l));
        if (
          (Vi(t),
          (l = dl)
            ? ((l = ko(l, yt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ee !== null ? { id: _t, overflow: Mt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = xs(l)),
                (e.return = t),
                (t.child = e),
                (Ol = t),
                (dl = null)))
            : (l = null),
          l === null)
        )
          throw ue(t);
        return ((t.lanes = 536870912), null);
      }
      return rn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Vi(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = Rd(l, t, e)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(m(558));
      else if (
        (Nl || fa(l, t, e, !1), (u = (e & l.childLanes) !== 0), Nl || u)
      ) {
        if (
          ((a = sl),
          a !== null && ((i = Af(a, e)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), De(l, i), Wl(a, l, i), oc);
        (Nn(), (t = Rd(l, t, e)));
      } else
        ((l = n.treeContext),
          (dl = xt(i.nextSibling)),
          (Ol = t),
          ($ = !0),
          (ae = null),
          (yt = !1),
          l !== null && Ss(t, l),
          (t = rn(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Bt(l.child, { mode: a.mode, children: a.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function mn(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(m(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function rc(l, t, e, a, u) {
    return (
      Re(t),
      (e = Ki(l, t, e, a, void 0, u)),
      (a = Ji()),
      l !== null && !Nl
        ? (ki(l, t, u), Zt(l, t, u))
        : ($ && a && Ei(t), (t.flags |= 1), Ul(l, t, e, u), t.child)
    );
  }
  function qd(l, t, e, a, u, n) {
    return (
      Re(t),
      (t.updateQueue = null),
      (e = Gs(t, a, e, u)),
      Ys(l),
      (a = Ji()),
      l !== null && !Nl
        ? (ki(l, t, n), Zt(l, t, n))
        : ($ && a && Ei(t), (t.flags |= 1), Ul(l, t, e, n), t.child)
    );
  }
  function Bd(l, t, e, a, u) {
    if ((Re(t), t.stateNode === null)) {
      var n = ua,
        i = e.contextType;
      (typeof i == "object" && i !== null && (n = Dl(i)),
        (n = new e(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = sc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Yi(t),
        (i = e.contextType),
        (n.context = typeof i == "object" && i !== null ? Dl(i) : ua),
        (n.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (fc(t, e, i, a), (n.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && sc.enqueueReplaceState(n, n.state, null),
          Ia(t, a, n, u),
          Fa(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        s = Xe(e, c);
      n.props = s;
      var v = n.context,
        x = e.contextType;
      ((i = ua), typeof x == "object" && x !== null && (i = Dl(x)));
      var S = e.getDerivedStateFromProps;
      ((x =
        typeof S == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        x ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || v !== i) && Nd(t, n, a, i)),
        (ie = !1));
      var y = t.memoizedState;
      ((n.state = y),
        Ia(t, a, n, u),
        Fa(),
        (v = t.memoizedState),
        c || y !== v || ie
          ? (typeof S == "function" && (fc(t, e, S, a), (v = t.memoizedState)),
            (s = ie || zd(t, e, s, a, y, v, i))
              ? (x ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = v)),
            (n.props = a),
            (n.state = v),
            (n.context = i),
            (a = s))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((n = t.stateNode),
        Gi(l, t),
        (i = t.memoizedProps),
        (x = Xe(e, i)),
        (n.props = x),
        (S = t.pendingProps),
        (y = n.context),
        (v = e.contextType),
        (s = ua),
        typeof v == "object" && v !== null && (s = Dl(v)),
        (c = e.getDerivedStateFromProps),
        (v =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== S || y !== s) && Nd(t, n, a, s)),
        (ie = !1),
        (y = t.memoizedState),
        (n.state = y),
        Ia(t, a, n, u),
        Fa());
      var g = t.memoizedState;
      i !== S ||
      y !== g ||
      ie ||
      (l !== null && l.dependencies !== null && Ju(l.dependencies))
        ? (typeof c == "function" && (fc(t, e, c, a), (g = t.memoizedState)),
          (x =
            ie ||
            zd(t, e, x, a, y, g, s) ||
            (l !== null && l.dependencies !== null && Ju(l.dependencies)))
            ? (v ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, g, s),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, g, s)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = g)),
          (n.props = a),
          (n.state = g),
          (n.context = s),
          (a = x))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      mn(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = Ge(t, l.child, null, u)),
              (t.child = Ge(t, null, e, u)))
            : Ul(l, t, e, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Zt(l, t, u)),
      l
    );
  }
  function Yd(l, t, e, a) {
    return (Ce(), (t.flags |= 256), Ul(l, t, e, a), t.child);
  }
  var mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function hc(l) {
    return { baseLanes: l, cachePool: Es() };
  }
  function vc(l, t, e) {
    return ((l = l !== null ? l.childLanes & ~e : 0), t && (l |= it), l);
  }
  function Gd(l, t, e) {
    var a = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (xl.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if ($) {
        if (
          (u ? se(t) : de(),
          (l = dl)
            ? ((l = ko(l, yt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ee !== null ? { id: _t, overflow: Mt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = xs(l)),
                (e.return = t),
                (t.child = e),
                (Ol = t),
                (dl = null)))
            : (l = null),
          l === null)
        )
          throw ue(t);
        return (Fc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = a.children;
      return (
        (a = a.fallback),
        u
          ? (de(),
            (u = t.mode),
            (c = hn({ mode: "hidden", children: c }, u)),
            (a = Ue(a, u, e, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (a = t.child),
            (a.memoizedState = hc(e)),
            (a.childLanes = vc(l, i, e)),
            (t.memoizedState = mc),
            au(null, a))
          : (se(t), yc(t, c))
      );
    }
    var s = l.memoizedState;
    if (s !== null && ((c = s.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (se(t), (t.flags &= -257), (t = gc(l, t, e)))
          : t.memoizedState !== null
            ? (de(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (de(),
              (c = a.fallback),
              (u = t.mode),
              (a = hn({ mode: "visible", children: a.children }, u)),
              (c = Ue(c, u, e, null)),
              (c.flags |= 2),
              (a.return = t),
              (c.return = t),
              (a.sibling = c),
              (t.child = a),
              Ge(t, l.child, null, e),
              (a = t.child),
              (a.memoizedState = hc(e)),
              (a.childLanes = vc(l, i, e)),
              (t.memoizedState = mc),
              (t = au(null, a)));
      else if ((se(t), Fc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var v = i.dgst;
        ((i = v),
          (a = Error(m(419))),
          (a.stack = ""),
          (a.digest = i),
          La({ value: a, source: null, stack: null }),
          (t = gc(l, t, e)));
      } else if (
        (Nl || fa(l, t, e, !1), (i = (e & l.childLanes) !== 0), Nl || i)
      ) {
        if (
          ((i = sl),
          i !== null && ((a = Af(i, e)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), De(l, a), Wl(i, l, a), oc);
        ($c(c) || Nn(), (t = gc(l, t, e)));
      } else
        $c(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = s.treeContext),
            (dl = xt(c.nextSibling)),
            (Ol = t),
            ($ = !0),
            (ae = null),
            (yt = !1),
            l !== null && Ss(t, l),
            (t = yc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (de(),
        (c = a.fallback),
        (u = t.mode),
        (s = l.child),
        (v = s.sibling),
        (a = Bt(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 65011712),
        v !== null ? (c = Bt(v, c)) : ((c = Ue(c, u, e, null)), (c.flags |= 2)),
        (c.return = t),
        (a.return = t),
        (a.sibling = c),
        (t.child = a),
        au(null, a),
        (a = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = hc(e))
          : ((u = c.cachePool),
            u !== null
              ? ((s = Sl._currentValue),
                (u = u.parent !== s ? { parent: s, pool: s } : u))
              : (u = Es()),
            (c = { baseLanes: c.baseLanes | e, cachePool: u })),
        (a.memoizedState = c),
        (a.childLanes = vc(l, i, e)),
        (t.memoizedState = mc),
        au(l.child, a))
      : (se(t),
        (e = l.child),
        (l = e.sibling),
        (e = Bt(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function yc(l, t) {
    return (
      (t = hn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function hn(l, t) {
    return ((l = et(22, l, null, t)), (l.lanes = 0), l);
  }
  function gc(l, t, e) {
    return (
      Ge(t, l.child, null, e),
      (l = yc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Qd(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    (a !== null && (a.lanes |= t), Ui(l.return, t, e));
  }
  function xc(l, t, e, a, u, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = e),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function Xd(l, t, e) {
    var a = t.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    a = a.children;
    var i = xl.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      T(xl, i),
      Ul(l, t, a, e),
      (a = $ ? Va : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Qd(l, e, t);
        else if (l.tag === 19) Qd(l, e, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (u) {
      case "forwards":
        for (e = t.child, u = null; e !== null; )
          ((l = e.alternate),
            l !== null && tn(l) === null && (u = e),
            (e = e.sibling));
        ((e = u),
          e === null
            ? ((u = t.child), (t.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          xc(t, !1, u, e, n, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && tn(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = e), (e = u), (u = l));
        }
        xc(t, !0, e, null, n, a);
        break;
      case "together":
        xc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Zt(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (me |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((fa(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        l = t.child, e = Bt(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (e = e.sibling = Bt(l, l.pendingProps)),
          (e.return = t));
      e.sibling = null;
    }
    return t.child;
  }
  function bc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Ju(l)));
  }
  function t0(l, t, e) {
    switch (t.tag) {
      case 3:
        (Bl(t, t.stateNode.containerInfo),
          ne(t, Sl, l.memoizedState.cache),
          Ce());
        break;
      case 27:
      case 5:
        Ma(t);
        break;
      case 4:
        Bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ne(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Vi(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (se(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
              ? Gd(l, t, e)
              : (se(t), (l = Zt(l, t, e)), l !== null ? l.sibling : null);
        se(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((a = (e & t.childLanes) !== 0),
          a || (fa(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          u)
        ) {
          if (a) return Xd(l, t, e);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          T(xl, xl.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Cd(l, t, e, t.pendingProps));
      case 24:
        ne(t, Sl, l.memoizedState.cache);
    }
    return Zt(l, t, e);
  }
  function wd(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Nl = !0;
      else {
        if (!bc(l, e) && (t.flags & 128) === 0) return ((Nl = !1), t0(l, t, e));
        Nl = (l.flags & 131072) !== 0;
      }
    else ((Nl = !1), $ && (t.flags & 1048576) !== 0 && ps(t, Va, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = Be(t.elementType)), (t.type = l), typeof l == "function"))
            ji(l)
              ? ((a = Xe(l, a)), (t.tag = 1), (t = Bd(null, t, l, a, e)))
              : ((t.tag = 0), (t = rc(null, t, l, a, e)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === st) {
                ((t.tag = 11), (t = Od(null, t, l, a, e)));
                break l;
              } else if (u === W) {
                ((t.tag = 14), (t = Dd(null, t, l, a, e)));
                break l;
              }
            }
            throw ((t = Ct(l) || l), Error(m(306, t, "")));
          }
        }
        return t;
      case 0:
        return rc(l, t, t.type, t.pendingProps, e);
      case 1:
        return ((a = t.type), (u = Xe(a, t.pendingProps)), Bd(l, t, a, u, e));
      case 3:
        l: {
          if ((Bl(t, t.stateNode.containerInfo), l === null))
            throw Error(m(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), Gi(l, t), Ia(t, a, null, e));
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            ne(t, Sl, a),
            a !== n.cache && Ci(t, [Sl], e, !0),
            Fa(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Yd(l, t, a, e);
              break l;
            } else if (a !== u) {
              ((u = mt(Error(m(424)), t)), La(u), (t = Yd(l, t, a, e)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                dl = xt(l.firstChild),
                  Ol = t,
                  $ = !0,
                  ae = null,
                  yt = !0,
                  e = Cs(t, null, a, e),
                  t.child = e;
                e;
              )
                ((e.flags = (e.flags & -3) | 4096), (e = e.sibling));
            }
          else {
            if ((Ce(), a === u)) {
              t = Zt(l, t, e);
              break l;
            }
            Ul(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          mn(l, t),
          l === null
            ? (e = lr(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : $ ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = On(Z.current).createElement(e)),
                (a[Ml] = t),
                (a[Zl] = l),
                Cl(a, e, l),
                El(a),
                (t.stateNode = a))
            : (t.memoizedState = lr(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ma(t),
          l === null &&
            $ &&
            ((a = t.stateNode = Fo(t.type, t.pendingProps, Z.current)),
            (Ol = t),
            (yt = !0),
            (u = dl),
            xe(t.type) ? ((Ic = u), (dl = xt(a.firstChild))) : (dl = u)),
          Ul(l, t, t.pendingProps.children, e),
          mn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            $ &&
            ((u = a = dl) &&
              ((a = D0(a, t.type, t.pendingProps, yt)),
              a !== null
                ? ((t.stateNode = a),
                  (Ol = t),
                  (dl = xt(a.firstChild)),
                  (yt = !1),
                  (u = !0))
                : (u = !1)),
            u || ue(t)),
          Ma(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = n.children),
          Jc(u, n) ? (a = null) : i !== null && Jc(u, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Ki(l, t, Km, null, null, e)), (xu._currentValue = u)),
          mn(l, t),
          Ul(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            $ &&
            ((l = e = dl) &&
              ((e = U0(e, t.pendingProps, yt)),
              e !== null
                ? ((t.stateNode = e), (Ol = t), (dl = null), (l = !0))
                : (l = !1)),
            l || ue(t)),
          null
        );
      case 13:
        return Gd(l, t, e);
      case 4:
        return (
          Bl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = Ge(t, null, a, e)) : Ul(l, t, a, e),
          t.child
        );
      case 11:
        return Od(l, t, t.type, t.pendingProps, e);
      case 7:
        return (Ul(l, t, t.pendingProps, e), t.child);
      case 8:
        return (Ul(l, t, t.pendingProps.children, e), t.child);
      case 12:
        return (Ul(l, t, t.pendingProps.children, e), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          ne(t, t.type, a.value),
          Ul(l, t, a.children, e),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (a = t.pendingProps.children),
          Re(t),
          (u = Dl(u)),
          (a = a(u)),
          (t.flags |= 1),
          Ul(l, t, a, e),
          t.child
        );
      case 14:
        return Dd(l, t, t.type, t.pendingProps, e);
      case 15:
        return Ud(l, t, t.type, t.pendingProps, e);
      case 19:
        return Xd(l, t, e);
      case 31:
        return l0(l, t, e);
      case 22:
        return Cd(l, t, e, t.pendingProps);
      case 24:
        return (
          Re(t),
          (a = Dl(Sl)),
          l === null
            ? ((u = qi()),
              u === null &&
                ((u = sl),
                (n = Hi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (t.memoizedState = { parent: a, cache: u }),
              Yi(t),
              ne(t, Sl, u))
            : ((l.lanes & e) !== 0 && (Gi(l, t), Ia(t, null, null, e), Fa()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  ne(t, Sl, a))
                : ((a = n.cache),
                  ne(t, Sl, a),
                  a !== u.cache && Ci(t, [Sl], e, !0))),
          Ul(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Vt(l) {
    l.flags |= 4;
  }
  function pc(l, t, e, a, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (yo()) l.flags |= 8192;
        else throw ((Ye = Fu), Bi);
    } else l.flags &= -16777217;
  }
  function Zd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !nr(t)))
      if (yo()) l.flags |= 8192;
      else throw ((Ye = Fu), Bi);
  }
  function vn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? zf() : 536870912), (l.lanes |= t), (pa |= t)));
  }
  function uu(l, t) {
    if (!$)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            (t.alternate !== null && (e = t), (t = t.sibling));
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            (e.alternate !== null && (a = e), (e = e.sibling));
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function ol(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= a), (l.childLanes = e), t);
  }
  function e0(l, t, e) {
    var a = t.pendingProps;
    switch ((_i(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ol(t), null);
      case 1:
        return (ol(t), null);
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Qt(Sl),
          gl(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (ca(t)
              ? Vt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Oi())),
          ol(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Vt(t),
              n !== null ? (ol(t), Zd(t, n)) : (ol(t), pc(t, u, null, a, e)))
            : n
              ? n !== l.memoizedState
                ? (Vt(t), ol(t), Zd(t, n))
                : (ol(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== a && Vt(t),
                ol(t),
                pc(t, u, l, a, e)),
          null
        );
      case 27:
        if (
          (Au(t),
          (e = Z.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== a && Vt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(m(166));
            return (ol(t), null);
          }
          ((l = _.current),
            ca(t) ? zs(t) : ((l = Fo(u, a, e)), (t.stateNode = l), Vt(t)));
        }
        return (ol(t), null);
      case 5:
        if ((Au(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Vt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(m(166));
            return (ol(t), null);
          }
          if (((n = _.current), ca(t))) zs(t);
          else {
            var i = On(Z.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (n.multiple = !0)
                        : a.size && (n.size = a.size));
                    break;
                  default:
                    n =
                      typeof a.is == "string"
                        ? i.createElement(u, { is: a.is })
                        : i.createElement(u);
                }
            }
            ((n[Ml] = t), (n[Zl] = a));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = n;
            l: switch ((Cl(n, u, a), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Vt(t);
          }
        }
        return (
          ol(t),
          pc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Vt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(m(166));
          if (((l = Z.current), ca(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (u = Ol),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            ((l[Ml] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Qo(l.nodeValue, e)
              )),
              l || ue(t, !0));
          } else
            ((l = On(l).createTextNode(a)), (l[Ml] = t), (t.stateNode = l));
        }
        return (ol(t), null);
      case 31:
        if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = ca(t)), e !== null)) {
            if (l === null) {
              if (!a) throw Error(m(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(m(557));
              l[Ml] = t;
            } else
              (Ce(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ol(t), (l = !1));
          } else
            ((e = Oi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (l = !0));
          if (!l) return t.flags & 256 ? (ut(t), t) : (ut(t), null);
          if ((t.flags & 128) !== 0) throw Error(m(558));
        }
        return (ol(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = ca(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[Ml] = t;
            } else
              (Ce(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ol(t), (u = !1));
          } else
            ((u = Oi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (ut(t), t) : (ut(t), null);
        }
        return (
          ut(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = e), t)
            : ((e = a !== null),
              (l = l !== null && l.memoizedState !== null),
              e &&
                ((a = t.child),
                (u = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (u = a.alternate.memoizedState.cachePool.pool),
                (n = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (n = a.memoizedState.cachePool.pool),
                n !== u && (a.flags |= 2048)),
              e !== l && e && (t.child.flags |= 8192),
              vn(t, t.updateQueue),
              ol(t),
              null)
        );
      case 4:
        return (gl(), l === null && wc(t.stateNode.containerInfo), ol(t), null);
      case 10:
        return (Qt(t.type), ol(t), null);
      case 19:
        if ((z(xl), (a = t.memoizedState), a === null)) return (ol(t), null);
        if (((u = (t.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) uu(a, !1);
          else {
            if (vl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = tn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      uu(a, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      vn(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;
                  )
                    (gs(e, l), (e = e.sibling));
                  return (
                    T(xl, (xl.current & 1) | 2),
                    $ && Yt(t, a.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              Il() > pn &&
              ((t.flags |= 128), (u = !0), uu(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = tn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                vn(t, l),
                uu(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !n.alternate &&
                  !$)
              )
                return (ol(t), null);
            } else
              2 * Il() - a.renderingStartTime > pn &&
                e !== 536870912 &&
                ((t.flags |= 128), (u = !0), uu(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = a.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (a.last = n));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = Il()),
            (l.sibling = null),
            (e = xl.current),
            T(xl, u ? (e & 1) | 2 : e & 1),
            $ && Yt(t, a.treeForkCount),
            l)
          : (ol(t), null);
      case 22:
      case 23:
        return (
          ut(t),
          Zi(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ol(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ol(t),
          (e = t.updateQueue),
          e !== null && vn(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && z(qe),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Qt(Sl),
          ol(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function a0(l, t) {
    switch ((_i(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Qt(Sl),
          gl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Au(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ut(t), t.alternate === null)) throw Error(m(340));
          Ce();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ut(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          Ce();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (z(xl), null);
      case 4:
        return (gl(), null);
      case 10:
        return (Qt(t.type), null);
      case 22:
      case 23:
        return (
          ut(t),
          Zi(),
          l !== null && z(qe),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (Qt(Sl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vd(l, t) {
    switch ((_i(t), t.tag)) {
      case 3:
        (Qt(Sl), gl());
        break;
      case 26:
      case 27:
      case 5:
        Au(t);
        break;
      case 4:
        gl();
        break;
      case 31:
        t.memoizedState !== null && ut(t);
        break;
      case 13:
        ut(t);
        break;
      case 19:
        z(xl);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        (ut(t), Zi(), l !== null && z(qe));
        break;
      case 24:
        Qt(Sl);
    }
  }
  function nu(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            ((a = n()), (i.destroy = a));
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      al(t, t.return, c);
    }
  }
  function oe(l, t, e) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = t));
              var s = e,
                v = c;
              try {
                v();
              } catch (x) {
                al(u, s, x);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (x) {
      al(t, t.return, x);
    }
  }
  function Ld(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Rs(t, e);
      } catch (a) {
        al(l, l.return, a);
      }
    }
  }
  function Kd(l, t, e) {
    ((e.props = Xe(l.type, l.memoizedProps)), (e.state = l.memoizedState));
    try {
      e.componentWillUnmount();
    } catch (a) {
      al(l, t, a);
    }
  }
  function iu(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (u) {
      al(l, t, u);
    }
  }
  function Ot(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          al(l, t, u);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          al(l, t, u);
        }
      else e.current = null;
  }
  function Jd(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function Sc(l, t, e) {
    try {
      var a = l.stateNode;
      (A0(a, l.type, e, t), (a[Zl] = t));
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function kd(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && xe(l.type)) ||
      l.tag === 4
    );
  }
  function zc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || kd(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && xe(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Nc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      ((l = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e
            ).insertBefore(l, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = Rt)));
    else if (
      a !== 4 &&
      (a === 27 && xe(l.type) && ((e = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Nc(l, t, e), l = l.sibling; l !== null; )
        (Nc(l, t, e), (l = l.sibling));
  }
  function yn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      ((l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l));
    else if (
      a !== 4 &&
      (a === 27 && xe(l.type) && (e = l.stateNode), (l = l.child), l !== null)
    )
      for (yn(l, t, e), l = l.sibling; l !== null; )
        (yn(l, t, e), (l = l.sibling));
  }
  function Wd(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (Cl(t, a, e), (t[Ml] = l), (t[Zl] = e));
    } catch (n) {
      al(l, l.return, n);
    }
  }
  var Lt = !1,
    jl = !1,
    jc = !1,
    $d = typeof WeakSet == "function" ? WeakSet : Set,
    _l = null;
  function u0(l, t) {
    if (((l = l.containerInfo), (Lc = Bn), (l = fs(l)), gi(l))) {
      if ("selectionStart" in l)
        var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              (e.nodeType, n.nodeType);
            } catch {
              e = null;
              break l;
            }
            var i = 0,
              c = -1,
              s = -1,
              v = 0,
              x = 0,
              S = l,
              y = null;
            t: for (;;) {
              for (
                var g;
                S !== e || (u !== 0 && S.nodeType !== 3) || (c = i + u),
                  S !== n || (a !== 0 && S.nodeType !== 3) || (s = i + a),
                  S.nodeType === 3 && (i += S.nodeValue.length),
                  (g = S.firstChild) !== null;
              )
                ((y = S), (S = g));
              for (;;) {
                if (S === l) break t;
                if (
                  (y === e && ++v === u && (c = i),
                  y === n && ++x === a && (s = i),
                  (g = S.nextSibling) !== null)
                )
                  break;
                ((S = y), (y = S.parentNode));
              }
              S = g;
            }
            e = c === -1 || s === -1 ? null : { start: c, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Kc = { focusedElem: l, selectionRange: e }, Bn = !1, _l = t;
      _l !== null;
    )
      if (
        ((t = _l), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (_l = l));
      else
        for (; _l !== null; ) {
          switch (((t = _l), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (e = 0; e < l.length; e++)
                  ((u = l[e]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (e = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode));
                try {
                  var E = Xe(e.type, u);
                  ((l = a.getSnapshotBeforeUpdate(E, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = l));
                } catch (R) {
                  al(e, e.return, R);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)
                )
                  Wc(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Wc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (_l = l));
            break;
          }
          _l = t.return;
        }
  }
  function Fd(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Jt(l, e), a & 4 && nu(5, e));
        break;
      case 1:
        if ((Jt(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              al(e, e.return, i);
            }
          else {
            var u = Xe(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              al(e, e.return, i);
            }
          }
        (a & 64 && Ld(e), a & 512 && iu(e, e.return));
        break;
      case 3:
        if ((Jt(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Rs(l, t);
          } catch (i) {
            al(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Wd(e);
      case 26:
      case 5:
        (Jt(l, e), t === null && a & 4 && Jd(e), a & 512 && iu(e, e.return));
        break;
      case 12:
        Jt(l, e);
        break;
      case 31:
        (Jt(l, e), a & 4 && lo(l, e));
        break;
      case 13:
        (Jt(l, e),
          a & 4 && to(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = m0.bind(null, e)), C0(l, e)))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Lt), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || jl), (u = Lt));
          var n = jl;
          ((Lt = a),
            (jl = t) && !n ? kt(l, e, (e.subtreeFlags & 8772) !== 0) : Jt(l, e),
            (Lt = u),
            (jl = n));
        }
        break;
      case 30:
        break;
      default:
        Jt(l, e);
    }
  }
  function Id(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), Id(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && li(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var ml = null,
    Ll = !1;
  function Kt(l, t, e) {
    for (e = e.child; e !== null; ) (Pd(l, t, e), (e = e.sibling));
  }
  function Pd(l, t, e) {
    if (Pl && typeof Pl.onCommitFiberUnmount == "function")
      try {
        Pl.onCommitFiberUnmount(Oa, e);
      } catch {}
    switch (e.tag) {
      case 26:
        (jl || Ot(e, t),
          Kt(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e)));
        break;
      case 27:
        jl || Ot(e, t);
        var a = ml,
          u = Ll;
        (xe(e.type) && ((ml = e.stateNode), (Ll = !1)),
          Kt(l, t, e),
          vu(e.stateNode),
          (ml = a),
          (Ll = u));
        break;
      case 5:
        jl || Ot(e, t);
      case 6:
        if (
          ((a = ml),
          (u = Ll),
          (ml = null),
          Kt(l, t, e),
          (ml = a),
          (Ll = u),
          ml !== null)
        )
          if (Ll)
            try {
              (ml.nodeType === 9
                ? ml.body
                : ml.nodeName === "HTML"
                  ? ml.ownerDocument.body
                  : ml
              ).removeChild(e.stateNode);
            } catch (n) {
              al(e, t, n);
            }
          else
            try {
              ml.removeChild(e.stateNode);
            } catch (n) {
              al(e, t, n);
            }
        break;
      case 18:
        ml !== null &&
          (Ll
            ? ((l = ml),
              Ko(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                e.stateNode,
              ),
              _a(l))
            : Ko(ml, e.stateNode));
        break;
      case 4:
        ((a = ml),
          (u = Ll),
          (ml = e.stateNode.containerInfo),
          (Ll = !0),
          Kt(l, t, e),
          (ml = a),
          (Ll = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (oe(2, e, t), jl || oe(4, e, t), Kt(l, t, e));
        break;
      case 1:
        (jl ||
          (Ot(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && Kd(e, t, a)),
          Kt(l, t, e));
        break;
      case 21:
        Kt(l, t, e);
        break;
      case 22:
        ((jl = (a = jl) || e.memoizedState !== null), Kt(l, t, e), (jl = a));
        break;
      default:
        Kt(l, t, e);
    }
  }
  function lo(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        _a(l);
      } catch (e) {
        al(t, t.return, e);
      }
    }
  }
  function to(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        _a(l);
      } catch (e) {
        al(t, t.return, e);
      }
  }
  function n0(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new $d()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new $d()),
          t
        );
      default:
        throw Error(m(435, l.tag));
    }
  }
  function gn(l, t) {
    var e = n0(l);
    t.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var u = h0.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function Kl(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (xe(c.type)) {
                ((ml = c.stateNode), (Ll = !1));
                break l;
              }
              break;
            case 5:
              ((ml = c.stateNode), (Ll = !1));
              break l;
            case 3:
            case 4:
              ((ml = c.stateNode.containerInfo), (Ll = !0));
              break l;
          }
          c = c.return;
        }
        if (ml === null) throw Error(m(160));
        (Pd(n, i, u),
          (ml = null),
          (Ll = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (eo(t, l), (t = t.sibling));
  }
  var zt = null;
  function eo(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Kl(t, l),
          Jl(l),
          a & 4 && (oe(3, l, l.return), nu(3, l), oe(5, l, l.return)));
        break;
      case 1:
        (Kl(t, l),
          Jl(l),
          a & 512 && (jl || e === null || Ot(e, e.return)),
          a & 64 &&
            Lt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? a : e.concat(a))))));
        break;
      case 26:
        var u = zt;
        if (
          (Kl(t, l),
          Jl(l),
          a & 512 && (jl || e === null || Ot(e, e.return)),
          a & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  ((a = l.type),
                    (e = l.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (a) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ca] ||
                          n[Ml] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        Cl(n, a, e),
                        (n[Ml] = l),
                        El(n),
                        (a = n));
                      break l;
                    case "link":
                      var i = ar("link", "href", u).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(a)),
                        Cl(n, a, e),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = ar("meta", "content", u).get(
                          a + (e.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(a)),
                        Cl(n, a, e),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(m(468, a));
                  }
                  ((n[Ml] = l), El(n), (a = n));
                }
                l.stateNode = a;
              } else ur(u, l.type, l.stateNode);
            else l.stateNode = er(u, a, l.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null
                  ? ur(u, l.type, l.stateNode)
                  : er(u, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                Sc(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        (Kl(t, l),
          Jl(l),
          a & 512 && (jl || e === null || Ot(e, e.return)),
          e !== null && a & 4 && Sc(l, l.memoizedProps, e.memoizedProps));
        break;
      case 5:
        if (
          (Kl(t, l),
          Jl(l),
          a & 512 && (jl || e === null || Ot(e, e.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            Fe(u, "");
          } catch (E) {
            al(l, l.return, E);
          }
        }
        (a & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), Sc(l, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (jc = !0));
        break;
      case 6:
        if ((Kl(t, l), Jl(l), a & 4)) {
          if (l.stateNode === null) throw Error(m(162));
          ((a = l.memoizedProps), (e = l.stateNode));
          try {
            e.nodeValue = a;
          } catch (E) {
            al(l, l.return, E);
          }
        }
        break;
      case 3:
        if (
          ((Cn = null),
          (u = zt),
          (zt = Dn(t.containerInfo)),
          Kl(t, l),
          (zt = u),
          Jl(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            _a(t.containerInfo);
          } catch (E) {
            al(l, l.return, E);
          }
        jc && ((jc = !1), ao(l));
        break;
      case 4:
        ((a = zt),
          (zt = Dn(l.stateNode.containerInfo)),
          Kl(t, l),
          Jl(l),
          (zt = a));
        break;
      case 12:
        (Kl(t, l), Jl(l));
        break;
      case 31:
        (Kl(t, l),
          Jl(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), gn(l, a))));
        break;
      case 13:
        (Kl(t, l),
          Jl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (bn = Il()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), gn(l, a))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null,
          v = Lt,
          x = jl;
        if (
          ((Lt = v || u),
          (jl = x || s),
          Kl(t, l),
          (jl = x),
          (Lt = v),
          Jl(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (e === null || s || Lt || jl || we(l)),
              e = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (((n = s.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = s.stateNode;
                    var S = s.memoizedProps.style,
                      y =
                        S != null && S.hasOwnProperty("display")
                          ? S.display
                          : null;
                    c.style.display =
                      y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (E) {
                  al(s, s.return, E);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (E) {
                  al(s, s.return, E);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var g = s.stateNode;
                  u ? Jo(g, !0) : Jo(s.stateNode, !1);
                } catch (E) {
                  al(s, s.return, E);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (e === t && (e = null), (t = t.return));
            }
            (e === t && (e = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), gn(l, e))));
        break;
      case 19:
        (Kl(t, l),
          Jl(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), gn(l, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Kl(t, l), Jl(l));
    }
  }
  function Jl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (kd(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(m(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = zc(l);
            yn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Fe(i, ""), (e.flags &= -33));
            var c = zc(l);
            yn(l, c, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo,
              v = zc(l);
            Nc(l, v, s);
            break;
          default:
            throw Error(m(161));
        }
      } catch (x) {
        al(l, l.return, x);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function ao(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (ao(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Jt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Fd(l, t.alternate, t), (t = t.sibling));
  }
  function we(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (oe(4, t, t.return), we(t));
          break;
        case 1:
          Ot(t, t.return);
          var e = t.stateNode;
          (typeof e.componentWillUnmount == "function" && Kd(t, t.return, e),
            we(t));
          break;
        case 27:
          vu(t.stateNode);
        case 26:
        case 5:
          (Ot(t, t.return), we(t));
          break;
        case 22:
          t.memoizedState === null && we(t);
          break;
        case 30:
          we(t);
          break;
        default:
          we(t);
      }
      l = l.sibling;
    }
  }
  function kt(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (kt(u, n, e), nu(4, n));
          break;
        case 1:
          if (
            (kt(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (v) {
              al(a, a.return, v);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var c = a.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++)
                  Hs(s[u], c);
            } catch (v) {
              al(a, a.return, v);
            }
          }
          (e && i & 64 && Ld(n), iu(n, n.return));
          break;
        case 27:
          Wd(n);
        case 26:
        case 5:
          (kt(u, n, e), e && a === null && i & 4 && Jd(n), iu(n, n.return));
          break;
        case 12:
          kt(u, n, e);
          break;
        case 31:
          (kt(u, n, e), e && i & 4 && lo(u, n));
          break;
        case 13:
          (kt(u, n, e), e && i & 4 && to(u, n));
          break;
        case 22:
          (n.memoizedState === null && kt(u, n, e), iu(n, n.return));
          break;
        case 30:
          break;
        default:
          kt(u, n, e);
      }
      t = t.sibling;
    }
  }
  function Ac(l, t) {
    var e = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && Ka(e)));
  }
  function Tc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ka(l)));
  }
  function Nt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (uo(l, t, e, a), (t = t.sibling));
  }
  function uo(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Nt(l, t, e, a), u & 2048 && nu(9, t));
        break;
      case 1:
        Nt(l, t, e, a);
        break;
      case 3:
        (Nt(l, t, e, a),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ka(l))));
        break;
      case 12:
        if (u & 2048) {
          (Nt(l, t, e, a), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (s) {
            al(t, t.return, s);
          }
        } else Nt(l, t, e, a);
        break;
      case 31:
        Nt(l, t, e, a);
        break;
      case 13:
        Nt(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Nt(l, t, e, a)
              : cu(l, t)
            : n._visibility & 2
              ? Nt(l, t, e, a)
              : ((n._visibility |= 2),
                ga(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Ac(i, t));
        break;
      case 24:
        (Nt(l, t, e, a), u & 2048 && Tc(t.alternate, t));
        break;
      default:
        Nt(l, t, e, a);
    }
  }
  function ga(l, t, e, a, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        i = t,
        c = e,
        s = a,
        v = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ga(n, i, c, s, u), nu(8, i));
          break;
        case 23:
          break;
        case 22:
          var x = i.stateNode;
          (i.memoizedState !== null
            ? x._visibility & 2
              ? ga(n, i, c, s, u)
              : cu(n, i)
            : ((x._visibility |= 2), ga(n, i, c, s, u)),
            u && v & 2048 && Ac(i.alternate, i));
          break;
        case 24:
          (ga(n, i, c, s, u), u && v & 2048 && Tc(i.alternate, i));
          break;
        default:
          ga(n, i, c, s, u);
      }
      t = t.sibling;
    }
  }
  function cu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          u = a.flags;
        switch (a.tag) {
          case 22:
            (cu(e, a), u & 2048 && Ac(a.alternate, a));
            break;
          case 24:
            (cu(e, a), u & 2048 && Tc(a.alternate, a));
            break;
          default:
            cu(e, a);
        }
        t = t.sibling;
      }
  }
  var fu = 8192;
  function xa(l, t, e) {
    if (l.subtreeFlags & fu)
      for (l = l.child; l !== null; ) (no(l, t, e), (l = l.sibling));
  }
  function no(l, t, e) {
    switch (l.tag) {
      case 26:
        (xa(l, t, e),
          l.flags & fu &&
            l.memoizedState !== null &&
            L0(e, zt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        xa(l, t, e);
        break;
      case 3:
      case 4:
        var a = zt;
        ((zt = Dn(l.stateNode.containerInfo)), xa(l, t, e), (zt = a));
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = fu), (fu = 16777216), xa(l, t, e), (fu = a))
            : xa(l, t, e));
        break;
      default:
        xa(l, t, e);
    }
  }
  function io(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function su(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          ((_l = a), fo(a, l));
        }
      io(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (co(l), (l = l.sibling));
  }
  function co(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (su(l), l.flags & 2048 && oe(9, l, l.return));
        break;
      case 3:
        su(l);
        break;
      case 12:
        su(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), xn(l))
          : su(l);
        break;
      default:
        su(l);
    }
  }
  function xn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          ((_l = a), fo(a, l));
        }
      io(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (oe(8, t, t.return), xn(t));
          break;
        case 22:
          ((e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), xn(t)));
          break;
        default:
          xn(t);
      }
      l = l.sibling;
    }
  }
  function fo(l, t) {
    for (; _l !== null; ) {
      var e = _l;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          oe(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ka(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) ((a.return = e), (_l = a));
      else
        l: for (e = l; _l !== null; ) {
          a = _l;
          var u = a.sibling,
            n = a.return;
          if ((Id(a), a === e)) {
            _l = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (_l = u));
            break l;
          }
          _l = n;
        }
    }
  }
  var i0 = {
      getCacheForType: function (l) {
        var t = Dl(Sl),
          e = t.data.get(l);
        return (e === void 0 && ((e = l()), t.data.set(l, e)), e);
      },
      cacheSignal: function () {
        return Dl(Sl).controller.signal;
      },
    },
    c0 = typeof WeakMap == "function" ? WeakMap : Map,
    P = 0,
    sl = null,
    V = null,
    J = 0,
    el = 0,
    nt = null,
    re = !1,
    ba = !1,
    Ec = !1,
    Wt = 0,
    vl = 0,
    me = 0,
    Ze = 0,
    _c = 0,
    it = 0,
    pa = 0,
    du = null,
    kl = null,
    Mc = !1,
    bn = 0,
    so = 0,
    pn = 1 / 0,
    Sn = null,
    he = null,
    Al = 0,
    ve = null,
    Sa = null,
    $t = 0,
    Oc = 0,
    Dc = null,
    oo = null,
    ou = 0,
    Uc = null;
  function ct() {
    return (P & 2) !== 0 && J !== 0 ? J & -J : b.T !== null ? Yc() : Tf();
  }
  function ro() {
    if (it === 0)
      if ((J & 536870912) === 0 || $) {
        var l = _u;
        ((_u <<= 1), (_u & 3932160) === 0 && (_u = 262144), (it = l));
      } else it = 536870912;
    return ((l = at.current), l !== null && (l.flags |= 32), it);
  }
  function Wl(l, t, e) {
    (((l === sl && (el === 2 || el === 9)) || l.cancelPendingCommit !== null) &&
      (za(l, 0), ye(l, J, it, !1)),
      Ua(l, e),
      ((P & 2) === 0 || l !== sl) &&
        (l === sl && ((P & 2) === 0 && (Ze |= e), vl === 4 && ye(l, J, it, !1)),
        Dt(l)));
  }
  function mo(l, t, e) {
    if ((P & 6) !== 0) throw Error(m(327));
    var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Da(l, t),
      u = a ? d0(l, t) : Hc(l, t, !0),
      n = a;
    do {
      if (u === 0) {
        ba && !a && ye(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), n && !f0(e))) {
          ((u = Hc(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = du;
              var s = c.current.memoizedState.isDehydrated;
              if ((s && (za(c, i).flags |= 256), (i = Hc(c, i, !1)), i !== 2)) {
                if (Ec && !s) {
                  ((c.errorRecoveryDisabledLanes |= n), (Ze |= n), (u = 4));
                  break l;
                }
                ((n = kl),
                  (kl = u),
                  n !== null &&
                    (kl === null ? (kl = n) : kl.push.apply(kl, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (za(l, 0), ye(l, t, 0, !0));
          break;
        }
        l: {
          switch (((a = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ye(a, t, it, !re);
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && ((u = bn + 300 - Il()), 10 < u)) {
            if ((ye(a, t, it, !re), Ou(a, 0, !0) !== 0)) break l;
            (($t = t),
              (a.timeoutHandle = Vo(
                ho.bind(
                  null,
                  a,
                  e,
                  kl,
                  Sn,
                  Mc,
                  t,
                  it,
                  Ze,
                  pa,
                  re,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break l;
          }
          ho(a, e, kl, Sn, Mc, t, it, Ze, pa, re, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Dt(l);
  }
  function ho(l, t, e, a, u, n, i, c, s, v, x, S, y, g) {
    if (
      ((l.timeoutHandle = -1),
      (S = t.subtreeFlags),
      S & 8192 || (S & 16785408) === 16785408)
    ) {
      ((S = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Rt,
      }),
        no(t, n, S));
      var E =
        (n & 62914560) === n ? bn - Il() : (n & 4194048) === n ? so - Il() : 0;
      if (((E = K0(S, E)), E !== null)) {
        (($t = n),
          (l.cancelPendingCommit = E(
            zo.bind(null, l, t, n, e, a, u, i, c, s, x, S, null, y, g),
          )),
          ye(l, n, i, !v));
        return;
      }
    }
    zo(l, t, n, e, a, u, i, c, s);
  }
  function f0(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!tt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        ((e.return = t), (t = e));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ye(l, t, e, a) {
    ((t &= ~_c),
      (t &= ~Ze),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - lt(u),
        i = 1 << n;
      ((a[n] = -1), (u &= ~i));
    }
    e !== 0 && Nf(l, e, t);
  }
  function zn() {
    return (P & 6) === 0 ? (ru(0), !1) : !0;
  }
  function Cc() {
    if (V !== null) {
      if (el === 0) var l = V.return;
      else ((l = V), (Gt = He = null), Wi(l), (ra = null), (ka = 0), (l = V));
      for (; l !== null; ) (Vd(l.alternate, l), (l = l.return));
      V = null;
    }
  }
  function za(l, t) {
    var e = l.timeoutHandle;
    (e !== -1 && ((l.timeoutHandle = -1), _0(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      ($t = 0),
      Cc(),
      (sl = l),
      (V = e = Bt(l.current, null)),
      (J = t),
      (el = 0),
      (nt = null),
      (re = !1),
      (ba = Da(l, t)),
      (Ec = !1),
      (pa = it = _c = Ze = me = vl = 0),
      (kl = du = null),
      (Mc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - lt(a),
          n = 1 << u;
        ((t |= l[u]), (a &= ~n));
      }
    return ((Wt = t), wu(), e);
  }
  function vo(l, t) {
    ((Q = null),
      (b.H = eu),
      t === oa || t === $u
        ? ((t = Os()), (el = 3))
        : t === Bi
          ? ((t = Os()), (el = 4))
          : (el =
              t === oc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (nt = t),
      V === null && ((vl = 1), on(l, mt(t, l.current))));
  }
  function yo() {
    var l = at.current;
    return l === null
      ? !0
      : (J & 4194048) === J
        ? gt === null
        : (J & 62914560) === J || (J & 536870912) !== 0
          ? l === gt
          : !1;
  }
  function go() {
    var l = b.H;
    return ((b.H = eu), l === null ? eu : l);
  }
  function xo() {
    var l = b.A;
    return ((b.A = i0), l);
  }
  function Nn() {
    ((vl = 4),
      re || ((J & 4194048) !== J && at.current !== null) || (ba = !0),
      ((me & 134217727) === 0 && (Ze & 134217727) === 0) ||
        sl === null ||
        ye(sl, J, it, !1));
  }
  function Hc(l, t, e) {
    var a = P;
    P |= 2;
    var u = go(),
      n = xo();
    ((sl !== l || J !== t) && ((Sn = null), za(l, t)), (t = !1));
    var i = vl;
    l: do
      try {
        if (el !== 0 && V !== null) {
          var c = V,
            s = nt;
          switch (el) {
            case 8:
              (Cc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              at.current === null && (t = !0);
              var v = el;
              if (((el = 0), (nt = null), Na(l, c, s, v), e && ba)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((v = el), (el = 0), (nt = null), Na(l, c, s, v));
          }
        }
        (s0(), (i = vl));
        break;
      } catch (x) {
        vo(l, x);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Gt = He = null),
      (P = a),
      (b.H = u),
      (b.A = n),
      V === null && ((sl = null), (J = 0), wu()),
      i
    );
  }
  function s0() {
    for (; V !== null; ) bo(V);
  }
  function d0(l, t) {
    var e = P;
    P |= 2;
    var a = go(),
      u = xo();
    sl !== l || J !== t
      ? ((Sn = null), (pn = Il() + 500), za(l, t))
      : (ba = Da(l, t));
    l: do
      try {
        if (el !== 0 && V !== null) {
          t = V;
          var n = nt;
          t: switch (el) {
            case 1:
              ((el = 0), (nt = null), Na(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (_s(n)) {
                ((el = 0), (nt = null), po(t));
                break;
              }
              ((t = function () {
                ((el !== 2 && el !== 9) || sl !== l || (el = 7), Dt(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              el = 7;
              break l;
            case 4:
              el = 5;
              break l;
            case 7:
              _s(n)
                ? ((el = 0), (nt = null), po(t))
                : ((el = 0), (nt = null), Na(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (V.tag) {
                case 26:
                  i = V.memoizedState;
                case 5:
                case 27:
                  var c = V;
                  if (i ? nr(i) : c.stateNode.complete) {
                    ((el = 0), (nt = null));
                    var s = c.sibling;
                    if (s !== null) V = s;
                    else {
                      var v = c.return;
                      v !== null ? ((V = v), jn(v)) : (V = null);
                    }
                    break t;
                  }
              }
              ((el = 0), (nt = null), Na(l, t, n, 5));
              break;
            case 6:
              ((el = 0), (nt = null), Na(l, t, n, 6));
              break;
            case 8:
              (Cc(), (vl = 6));
              break l;
            default:
              throw Error(m(462));
          }
        }
        o0();
        break;
      } catch (x) {
        vo(l, x);
      }
    while (!0);
    return (
      (Gt = He = null),
      (b.H = a),
      (b.A = u),
      (P = e),
      V !== null ? 0 : ((sl = null), (J = 0), wu(), vl)
    );
  }
  function o0() {
    for (; V !== null && !Hr(); ) bo(V);
  }
  function bo(l) {
    var t = wd(l.alternate, l, Wt);
    ((l.memoizedProps = l.pendingProps), t === null ? jn(l) : (V = t));
  }
  function po(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = qd(e, t, t.pendingProps, t.type, void 0, J);
        break;
      case 11:
        t = qd(e, t, t.pendingProps, t.type.render, t.ref, J);
        break;
      case 5:
        Wi(t);
      default:
        (Vd(e, t), (t = V = gs(t, Wt)), (t = wd(e, t, Wt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? jn(l) : (V = t));
  }
  function Na(l, t, e, a) {
    ((Gt = He = null), Wi(t), (ra = null), (ka = 0));
    var u = t.return;
    try {
      if (Pm(l, u, t, e, J)) {
        ((vl = 1), on(l, mt(e, l.current)), (V = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((V = u), n);
      ((vl = 1), on(l, mt(e, l.current)), (V = null));
      return;
    }
    t.flags & 32768
      ? ($ || a === 1
          ? (l = !0)
          : ba || (J & 536870912) !== 0
            ? (l = !1)
            : ((re = l = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = at.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        So(t, l))
      : jn(t);
  }
  function jn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        So(t, re);
        return;
      }
      l = t.return;
      var e = e0(t.alternate, t, Wt);
      if (e !== null) {
        V = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        V = t;
        return;
      }
      V = t = l;
    } while (t !== null);
    vl === 0 && (vl = 5);
  }
  function So(l, t) {
    do {
      var e = a0(l.alternate, l);
      if (e !== null) {
        ((e.flags &= 32767), (V = e));
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        V = l;
        return;
      }
      V = l = e;
    } while (l !== null);
    ((vl = 6), (V = null));
  }
  function zo(l, t, e, a, u, n, i, c, s) {
    l.cancelPendingCommit = null;
    do An();
    while (Al !== 0);
    if ((P & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= zi),
        Vr(l, e, n, i, c, s),
        l === sl && ((V = sl = null), (J = 0)),
        (Sa = t),
        (ve = l),
        ($t = e),
        (Oc = n),
        (Dc = u),
        (oo = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            v0(Tu, function () {
              return (Eo(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = b.T), (b.T = null), (u = A.p), (A.p = 2), (i = P), (P |= 4));
        try {
          u0(l, t, e);
        } finally {
          ((P = i), (A.p = u), (b.T = a));
        }
      }
      ((Al = 1), No(), jo(), Ao());
    }
  }
  function No() {
    if (Al === 1) {
      Al = 0;
      var l = ve,
        t = Sa,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        ((e = b.T), (b.T = null));
        var a = A.p;
        A.p = 2;
        var u = P;
        P |= 4;
        try {
          eo(t, l);
          var n = Kc,
            i = fs(l.containerInfo),
            c = n.focusedElem,
            s = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            cs(c.ownerDocument.documentElement, c)
          ) {
            if (s !== null && gi(c)) {
              var v = s.start,
                x = s.end;
              if ((x === void 0 && (x = v), "selectionStart" in c))
                ((c.selectionStart = v),
                  (c.selectionEnd = Math.min(x, c.value.length)));
              else {
                var S = c.ownerDocument || document,
                  y = (S && S.defaultView) || window;
                if (y.getSelection) {
                  var g = y.getSelection(),
                    E = c.textContent.length,
                    R = Math.min(s.start, E),
                    cl = s.end === void 0 ? R : Math.min(s.end, E);
                  !g.extend && R > cl && ((i = cl), (cl = R), (R = i));
                  var r = is(c, R),
                    d = is(c, cl);
                  if (
                    r &&
                    d &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== r.node ||
                      g.anchorOffset !== r.offset ||
                      g.focusNode !== d.node ||
                      g.focusOffset !== d.offset)
                  ) {
                    var h = S.createRange();
                    (h.setStart(r.node, r.offset),
                      g.removeAllRanges(),
                      R > cl
                        ? (g.addRange(h), g.extend(d.node, d.offset))
                        : (h.setEnd(d.node, d.offset), g.addRange(h)));
                  }
                }
              }
            }
            for (S = [], g = c; (g = g.parentNode); )
              g.nodeType === 1 &&
                S.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < S.length;
              c++
            ) {
              var p = S[c];
              ((p.element.scrollLeft = p.left), (p.element.scrollTop = p.top));
            }
          }
          ((Bn = !!Lc), (Kc = Lc = null));
        } finally {
          ((P = u), (A.p = a), (b.T = e));
        }
      }
      ((l.current = t), (Al = 2));
    }
  }
  function jo() {
    if (Al === 2) {
      Al = 0;
      var l = ve,
        t = Sa,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        ((e = b.T), (b.T = null));
        var a = A.p;
        A.p = 2;
        var u = P;
        P |= 4;
        try {
          Fd(l, t.alternate, t);
        } finally {
          ((P = u), (A.p = a), (b.T = e));
        }
      }
      Al = 3;
    }
  }
  function Ao() {
    if (Al === 4 || Al === 3) {
      ((Al = 0), Rr());
      var l = ve,
        t = Sa,
        e = $t,
        a = oo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Al = 5)
        : ((Al = 0), (Sa = ve = null), To(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (he = null),
        In(e),
        (t = t.stateNode),
        Pl && typeof Pl.onCommitFiberRoot == "function")
      )
        try {
          Pl.onCommitFiberRoot(Oa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = b.T), (u = A.p), (A.p = 2), (b.T = null));
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((b.T = t), (A.p = u));
        }
      }
      (($t & 3) !== 0 && An(),
        Dt(l),
        (u = l.pendingLanes),
        (e & 261930) !== 0 && (u & 42) !== 0
          ? l === Uc
            ? ou++
            : ((ou = 0), (Uc = l))
          : (ou = 0),
        ru(0));
    }
  }
  function To(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ka(t)));
  }
  function An() {
    return (No(), jo(), Ao(), Eo());
  }
  function Eo() {
    if (Al !== 5) return !1;
    var l = ve,
      t = Oc;
    Oc = 0;
    var e = In($t),
      a = b.T,
      u = A.p;
    try {
      ((A.p = 32 > e ? 32 : e), (b.T = null), (e = Dc), (Dc = null));
      var n = ve,
        i = $t;
      if (((Al = 0), (Sa = ve = null), ($t = 0), (P & 6) !== 0))
        throw Error(m(331));
      var c = P;
      if (
        ((P |= 4),
        co(n.current),
        uo(n, n.current, i, e),
        (P = c),
        ru(0, !1),
        Pl && typeof Pl.onPostCommitFiberRoot == "function")
      )
        try {
          Pl.onPostCommitFiberRoot(Oa, n);
        } catch {}
      return !0;
    } finally {
      ((A.p = u), (b.T = a), To(l, t));
    }
  }
  function _o(l, t, e) {
    ((t = mt(e, t)),
      (t = dc(l.stateNode, t, 2)),
      (l = fe(l, t, 2)),
      l !== null && (Ua(l, 2), Dt(l)));
  }
  function al(l, t, e) {
    if (l.tag === 3) _o(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _o(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (he === null || !he.has(a)))
          ) {
            ((l = mt(e, l)),
              (e = _d(2)),
              (a = fe(t, e, 2)),
              a !== null && (Md(e, a, t, l), Ua(a, 2), Dt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new c0();
      var u = new Set();
      a.set(t, u);
    } else ((u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u)));
    u.has(e) ||
      ((Ec = !0), u.add(e), (l = r0.bind(null, l, t, e)), t.then(l, l));
  }
  function r0(l, t, e) {
    var a = l.pingCache;
    (a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      sl === l &&
        (J & e) === e &&
        (vl === 4 || (vl === 3 && (J & 62914560) === J && 300 > Il() - bn)
          ? (P & 2) === 0 && za(l, 0)
          : (_c |= e),
        pa === J && (pa = 0)),
      Dt(l));
  }
  function Mo(l, t) {
    (t === 0 && (t = zf()), (l = De(l, t)), l !== null && (Ua(l, t), Dt(l)));
  }
  function m0(l) {
    var t = l.memoizedState,
      e = 0;
    (t !== null && (e = t.retryLane), Mo(l, e));
  }
  function h0(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    (a !== null && a.delete(t), Mo(l, e));
  }
  function v0(l, t) {
    return kn(l, t);
  }
  var Tn = null,
    ja = null,
    qc = !1,
    En = !1,
    Bc = !1,
    ge = 0;
  function Dt(l) {
    (l !== ja &&
      l.next === null &&
      (ja === null ? (Tn = ja = l) : (ja = ja.next = l)),
      (En = !0),
      qc || ((qc = !0), g0()));
  }
  function ru(l, t) {
    if (!Bc && En) {
      Bc = !0;
      do
        for (var e = !1, a = Tn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              ((n = (1 << (31 - lt(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((e = !0), Co(a, n));
          } else
            ((n = J),
              (n = Ou(
                a,
                a === sl ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Da(a, n) || ((e = !0), Co(a, n)));
          a = a.next;
        }
      while (e);
      Bc = !1;
    }
  }
  function y0() {
    Oo();
  }
  function Oo() {
    En = qc = !1;
    var l = 0;
    ge !== 0 && E0() && (l = ge);
    for (var t = Il(), e = null, a = Tn; a !== null; ) {
      var u = a.next,
        n = Do(a, t);
      (n === 0
        ? ((a.next = null),
          e === null ? (Tn = u) : (e.next = u),
          u === null && (ja = e))
        : ((e = a), (l !== 0 || (n & 3) !== 0) && (En = !0)),
        (a = u));
    }
    ((Al !== 0 && Al !== 5) || ru(l), ge !== 0 && (ge = 0));
  }
  function Do(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - lt(n),
        c = 1 << i,
        s = u[i];
      (s === -1
        ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = Zr(c, t))
        : s <= t && (l.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((t = sl),
      (e = J),
      (e = Ou(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (el === 2 || el === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Wn(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || Da(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && Wn(a), In(e))) {
        case 2:
        case 8:
          e = pf;
          break;
        case 32:
          e = Tu;
          break;
        case 268435456:
          e = Sf;
          break;
        default:
          e = Tu;
      }
      return (
        (a = Uo.bind(null, l)),
        (e = kn(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && Wn(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Uo(l, t) {
    if (Al !== 0 && Al !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var e = l.callbackNode;
    if (An() && l.callbackNode !== e) return null;
    var a = J;
    return (
      (a = Ou(
        l,
        l === sl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (mo(l, a, t),
          Do(l, Il()),
          l.callbackNode != null && l.callbackNode === e
            ? Uo.bind(null, l)
            : null)
    );
  }
  function Co(l, t) {
    if (An()) return null;
    mo(l, t, !0);
  }
  function g0() {
    M0(function () {
      (P & 6) !== 0 ? kn(bf, y0) : Oo();
    });
  }
  function Yc() {
    if (ge === 0) {
      var l = sa;
      (l === 0 && ((l = Eu), (Eu <<= 1), (Eu & 261888) === 0 && (Eu = 256)),
        (ge = l));
    }
    return ge;
  }
  function Ho(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Hu("" + l);
  }
  function Ro(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function x0(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = Ho((u[Zl] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[Zl] || null)
          ? Ho(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new Yu("action", "action", null, a, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ge !== 0) {
                  var s = i ? Ro(u, i) : new FormData(u);
                  uc(
                    e,
                    { pending: !0, data: s, method: u.method, action: n },
                    null,
                    s,
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (s = i ? Ro(u, i) : new FormData(u)),
                  uc(
                    e,
                    { pending: !0, data: s, method: u.method, action: n },
                    n,
                    s,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Gc = 0; Gc < Si.length; Gc++) {
    var Qc = Si[Gc],
      b0 = Qc.toLowerCase(),
      p0 = Qc[0].toUpperCase() + Qc.slice(1);
    St(b0, "on" + p0);
  }
  (St(os, "onAnimationEnd"),
    St(rs, "onAnimationIteration"),
    St(ms, "onAnimationStart"),
    St("dblclick", "onDoubleClick"),
    St("focusin", "onFocus"),
    St("focusout", "onBlur"),
    St(qm, "onTransitionRun"),
    St(Bm, "onTransitionStart"),
    St(Ym, "onTransitionCancel"),
    St(hs, "onTransitionEnd"),
    We("onMouseEnter", ["mouseout", "mouseover"]),
    We("onMouseLeave", ["mouseout", "mouseover"]),
    We("onPointerEnter", ["pointerout", "pointerover"]),
    We("onPointerLeave", ["pointerout", "pointerover"]),
    Ee(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ee(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ee("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ee(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ee(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ee(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var mu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    S0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(mu),
    );
  function qo(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              s = c.instance,
              v = c.currentTarget;
            if (((c = c.listener), s !== n && u.isPropagationStopped()))
              break l;
            ((n = c), (u.currentTarget = v));
            try {
              n(u);
            } catch (x) {
              Xu(x);
            }
            ((u.currentTarget = null), (n = s));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (s = c.instance),
              (v = c.currentTarget),
              (c = c.listener),
              s !== n && u.isPropagationStopped())
            )
              break l;
            ((n = c), (u.currentTarget = v));
            try {
              n(u);
            } catch (x) {
              Xu(x);
            }
            ((u.currentTarget = null), (n = s));
          }
      }
    }
  }
  function L(l, t) {
    var e = t[Pn];
    e === void 0 && (e = t[Pn] = new Set());
    var a = l + "__bubble";
    e.has(a) || (Bo(t, l, 2, !1), e.add(a));
  }
  function Xc(l, t, e) {
    var a = 0;
    (t && (a |= 4), Bo(e, l, a, t));
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function wc(l) {
    if (!l[_n]) {
      ((l[_n] = !0),
        Mf.forEach(function (e) {
          e !== "selectionchange" && (S0.has(e) || Xc(e, !1, l), Xc(e, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || ((t[_n] = !0), Xc("selectionchange", !1, t));
    }
  }
  function Bo(l, t, e, a) {
    switch (rr(t)) {
      case 2:
        var u = W0;
        break;
      case 8:
        u = $0;
        break;
      default:
        u = af;
    }
    ((e = u.bind(null, t, e, l)),
      (u = void 0),
      !fi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: u })
          : l.addEventListener(t, e, !0)
        : u !== void 0
          ? l.addEventListener(t, e, { passive: u })
          : l.addEventListener(t, e, !1));
  }
  function Zc(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Ke(c)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Xf(function () {
      var v = n,
        x = ii(e),
        S = [];
      l: {
        var y = vs.get(l);
        if (y !== void 0) {
          var g = Yu,
            E = l;
          switch (l) {
            case "keypress":
              if (qu(e) === 0) break l;
            case "keydown":
            case "keyup":
              g = hm;
              break;
            case "focusin":
              ((E = "focus"), (g = ri));
              break;
            case "focusout":
              ((E = "blur"), (g = ri));
              break;
            case "beforeblur":
            case "afterblur":
              g = ri;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Vf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = em;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = gm;
              break;
            case os:
            case rs:
            case ms:
              g = nm;
              break;
            case hs:
              g = bm;
              break;
            case "scroll":
            case "scrollend":
              g = lm;
              break;
            case "wheel":
              g = Sm;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = cm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Kf;
              break;
            case "toggle":
            case "beforetoggle":
              g = Nm;
          }
          var R = (t & 4) !== 0,
            cl = !R && (l === "scroll" || l === "scrollend"),
            r = R ? (y !== null ? y + "Capture" : null) : y;
          R = [];
          for (var d = v, h; d !== null; ) {
            var p = d;
            if (
              ((h = p.stateNode),
              (p = p.tag),
              (p !== 5 && p !== 26 && p !== 27) ||
                h === null ||
                r === null ||
                ((p = Ra(d, r)), p != null && R.push(hu(d, p, h))),
              cl)
            )
              break;
            d = d.return;
          }
          0 < R.length &&
            ((y = new g(y, E, null, e, x)), S.push({ event: y, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            y &&
              e !== ni &&
              (E = e.relatedTarget || e.fromElement) &&
              (Ke(E) || E[Le]))
          )
            break l;
          if (
            (g || y) &&
            ((y =
              x.window === x
                ? x
                : (y = x.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            g
              ? ((E = e.relatedTarget || e.toElement),
                (g = v),
                (E = E ? Ke(E) : null),
                E !== null &&
                  ((cl = w(E)),
                  (R = E.tag),
                  E !== cl || (R !== 5 && R !== 27 && R !== 6)) &&
                  (E = null))
              : ((g = null), (E = v)),
            g !== E)
          ) {
            if (
              ((R = Vf),
              (p = "onMouseLeave"),
              (r = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((R = Kf),
                (p = "onPointerLeave"),
                (r = "onPointerEnter"),
                (d = "pointer")),
              (cl = g == null ? y : Ha(g)),
              (h = E == null ? y : Ha(E)),
              (y = new R(p, d + "leave", g, e, x)),
              (y.target = cl),
              (y.relatedTarget = h),
              (p = null),
              Ke(x) === v &&
                ((R = new R(r, d + "enter", E, e, x)),
                (R.target = h),
                (R.relatedTarget = cl),
                (p = R)),
              (cl = p),
              g && E)
            )
              t: {
                for (R = z0, r = g, d = E, h = 0, p = r; p; p = R(p)) h++;
                p = 0;
                for (var U = d; U; U = R(U)) p++;
                for (; 0 < h - p; ) ((r = R(r)), h--);
                for (; 0 < p - h; ) ((d = R(d)), p--);
                for (; h--; ) {
                  if (r === d || (d !== null && r === d.alternate)) {
                    R = r;
                    break t;
                  }
                  ((r = R(r)), (d = R(d)));
                }
                R = null;
              }
            else R = null;
            (g !== null && Yo(S, y, g, R, !1),
              E !== null && cl !== null && Yo(S, cl, E, R, !0));
          }
        }
        l: {
          if (
            ((y = v ? Ha(v) : window),
            (g = y.nodeName && y.nodeName.toLowerCase()),
            g === "select" || (g === "input" && y.type === "file"))
          )
            var F = ls;
          else if (If(y))
            if (ts) F = Cm;
            else {
              F = Dm;
              var O = Om;
            }
          else
            ((g = y.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (y.type !== "checkbox" && y.type !== "radio")
                ? v && ui(v.elementType) && (F = ls)
                : (F = Um));
          if (F && (F = F(l, v))) {
            Pf(S, F, e, x);
            break l;
          }
          (O && O(l, y, v),
            l === "focusout" &&
              v &&
              y.type === "number" &&
              v.memoizedProps.value != null &&
              ai(y, "number", y.value));
        }
        switch (((O = v ? Ha(v) : window), l)) {
          case "focusin":
            (If(O) || O.contentEditable === "true") &&
              ((ta = O), (xi = v), (Za = null));
            break;
          case "focusout":
            Za = xi = ta = null;
            break;
          case "mousedown":
            bi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((bi = !1), ss(S, e, x));
            break;
          case "selectionchange":
            if (Rm) break;
          case "keydown":
          case "keyup":
            ss(S, e, x);
        }
        var X;
        if (hi)
          l: {
            switch (l) {
              case "compositionstart":
                var k = "onCompositionStart";
                break l;
              case "compositionend":
                k = "onCompositionEnd";
                break l;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break l;
            }
            k = void 0;
          }
        else
          la
            ? $f(l, e) && (k = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              (k = "onCompositionStart");
        (k &&
          (Jf &&
            e.locale !== "ko" &&
            (la || k !== "onCompositionStart"
              ? k === "onCompositionEnd" && la && (X = wf())
              : ((te = x),
                (si = "value" in te ? te.value : te.textContent),
                (la = !0))),
          (O = Mn(v, k)),
          0 < O.length &&
            ((k = new Lf(k, l, null, e, x)),
            S.push({ event: k, listeners: O }),
            X ? (k.data = X) : ((X = Ff(e)), X !== null && (k.data = X)))),
          (X = Am ? Tm(l, e) : Em(l, e)) &&
            ((k = Mn(v, "onBeforeInput")),
            0 < k.length &&
              ((O = new Lf("onBeforeInput", "beforeinput", null, e, x)),
              S.push({ event: O, listeners: k }),
              (O.data = X))),
          x0(S, l, v, e, x));
      }
      qo(S, t);
    });
  }
  function hu(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Mn(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ra(l, e)),
          u != null && a.unshift(hu(l, u, n)),
          (u = Ra(l, t)),
          u != null && a.push(hu(l, u, n))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function z0(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Yo(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e,
        s = c.alternate,
        v = c.stateNode;
      if (((c = c.tag), s !== null && s === a)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        v === null ||
        ((s = v),
        u
          ? ((v = Ra(e, n)), v != null && i.unshift(hu(e, v, s)))
          : u || ((v = Ra(e, n)), v != null && i.push(hu(e, v, s)))),
        (e = e.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var N0 = /\r\n?/g,
    j0 = /\u0000|\uFFFD/g;
  function Go(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        N0,
        `
`,
      )
      .replace(j0, "");
  }
  function Qo(l, t) {
    return ((t = Go(t)), Go(l) === t);
  }
  function il(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Fe(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Fe(l, "" + a);
        break;
      case "className":
        Uu(l, "class", a);
        break;
      case "tabIndex":
        Uu(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Uu(l, e, a);
        break;
      case "style":
        Gf(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Uu(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        ((a = Hu("" + a)), l.setAttribute(e, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (t !== "input" && il(l, t, "name", u.name, u, null),
                il(l, t, "formEncType", u.formEncType, u, null),
                il(l, t, "formMethod", u.formMethod, u, null),
                il(l, t, "formTarget", u.formTarget, u, null))
              : (il(l, t, "encType", u.encType, u, null),
                il(l, t, "method", u.method, u, null),
                il(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        ((a = Hu("" + a)), l.setAttribute(e, a));
        break;
      case "onClick":
        a != null && (l.onclick = Rt);
        break;
      case "onScroll":
        a != null && L("scroll", l);
        break;
      case "onScrollEnd":
        a != null && L("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((e = Hu("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "" + a)
          : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? l.setAttribute(e, a)
            : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        (L("beforetoggle", l), L("toggle", l), Du(l, "popover", a));
        break;
      case "xlinkActuate":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Du(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Ir.get(e) || e), Du(l, e, a));
    }
  }
  function Vc(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Gf(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Fe(l, a)
          : (typeof a == "number" || typeof a == "bigint") && Fe(l, "" + a);
        break;
      case "onScroll":
        a != null && L("scroll", l);
        break;
      case "onScrollEnd":
        a != null && L("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Rt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Of.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (t = e.slice(2, u ? e.length - 7 : void 0)),
              (n = l[Zl] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof a == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, u));
              break l;
            }
            e in l
              ? (l[e] = a)
              : a === !0
                ? l.setAttribute(e, "")
                : Du(l, e, a);
          }
    }
  }
  function Cl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (L("error", l), L("load", l));
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  il(l, t, n, i, e, null);
              }
          }
        (u && il(l, t, "srcSet", e.srcSet, e, null),
          a && il(l, t, "src", e.src, e, null));
        return;
      case "input":
        L("invalid", l);
        var c = (n = i = u = null),
          s = null,
          v = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var x = e[a];
            if (x != null)
              switch (a) {
                case "name":
                  u = x;
                  break;
                case "type":
                  i = x;
                  break;
                case "checked":
                  s = x;
                  break;
                case "defaultChecked":
                  v = x;
                  break;
                case "value":
                  n = x;
                  break;
                case "defaultValue":
                  c = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null) throw Error(m(137, t));
                  break;
                default:
                  il(l, t, a, x, e, null);
              }
          }
        Rf(l, n, c, s, v, i, u, !1);
        return;
      case "select":
        (L("invalid", l), (a = i = n = null));
        for (u in e)
          if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                il(l, t, u, c, e, null);
            }
        ((t = n),
          (e = i),
          (l.multiple = !!a),
          t != null ? $e(l, !!a, t, !1) : e != null && $e(l, !!a, e, !0));
        return;
      case "textarea":
        (L("invalid", l), (n = u = a = null));
        for (i in e)
          if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(m(91));
                break;
              default:
                il(l, t, i, c, e, null);
            }
        Bf(l, a, u, n);
        return;
      case "option":
        for (s in e)
          if (e.hasOwnProperty(s) && ((a = e[s]), a != null))
            switch (s) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                il(l, t, s, a, e, null);
            }
        return;
      case "dialog":
        (L("beforetoggle", l), L("toggle", l), L("cancel", l), L("close", l));
        break;
      case "iframe":
      case "object":
        L("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < mu.length; a++) L(mu[a], l);
        break;
      case "image":
        (L("error", l), L("load", l));
        break;
      case "details":
        L("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (L("error", l), L("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in e)
          if (e.hasOwnProperty(v) && ((a = e[v]), a != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                il(l, t, v, a, e, null);
            }
        return;
      default:
        if (ui(t)) {
          for (x in e)
            e.hasOwnProperty(x) &&
              ((a = e[x]), a !== void 0 && Vc(l, t, x, a, e, void 0));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && ((a = e[c]), a != null && il(l, t, c, a, e, null));
  }
  function A0(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          c = null,
          s = null,
          v = null,
          x = null;
        for (g in e) {
          var S = e[g];
          if (e.hasOwnProperty(g) && S != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = S;
              default:
                a.hasOwnProperty(g) || il(l, t, g, null, a, S);
            }
        }
        for (var y in a) {
          var g = a[y];
          if (((S = e[y]), a.hasOwnProperty(y) && (g != null || S != null)))
            switch (y) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                v = g;
                break;
              case "defaultChecked":
                x = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(m(137, t));
                break;
              default:
                g !== S && il(l, t, y, g, a, S);
            }
        }
        ei(l, i, c, s, v, x, n, u);
        return;
      case "select":
        g = i = c = y = null;
        for (n in e)
          if (((s = e[n]), e.hasOwnProperty(n) && s != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = s;
              default:
                a.hasOwnProperty(n) || il(l, t, n, null, a, s);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (s = e[u]),
            a.hasOwnProperty(u) && (n != null || s != null))
          )
            switch (u) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== s && il(l, t, u, n, a, s);
            }
        ((t = c),
          (e = i),
          (a = g),
          y != null
            ? $e(l, !!e, y, !1)
            : !!a != !!e &&
              (t != null ? $e(l, !!e, t, !0) : $e(l, !!e, e ? [] : "", !1)));
        return;
      case "textarea":
        g = y = null;
        for (c in e)
          if (
            ((u = e[c]),
            e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, c, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = e[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                y = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(m(91));
                break;
              default:
                u !== n && il(l, t, i, u, a, n);
            }
        qf(l, y, g);
        return;
      case "option":
        for (var E in e)
          if (
            ((y = e[E]),
            e.hasOwnProperty(E) && y != null && !a.hasOwnProperty(E))
          )
            switch (E) {
              case "selected":
                l.selected = !1;
                break;
              default:
                il(l, t, E, null, a, y);
            }
        for (s in a)
          if (
            ((y = a[s]),
            (g = e[s]),
            a.hasOwnProperty(s) && y !== g && (y != null || g != null))
          )
            switch (s) {
              case "selected":
                l.selected =
                  y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                il(l, t, s, y, a, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var R in e)
          ((y = e[R]),
            e.hasOwnProperty(R) &&
              y != null &&
              !a.hasOwnProperty(R) &&
              il(l, t, R, null, a, y));
        for (v in a)
          if (
            ((y = a[v]),
            (g = e[v]),
            a.hasOwnProperty(v) && y !== g && (y != null || g != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(m(137, t));
                break;
              default:
                il(l, t, v, y, a, g);
            }
        return;
      default:
        if (ui(t)) {
          for (var cl in e)
            ((y = e[cl]),
              e.hasOwnProperty(cl) &&
                y !== void 0 &&
                !a.hasOwnProperty(cl) &&
                Vc(l, t, cl, void 0, a, y));
          for (x in a)
            ((y = a[x]),
              (g = e[x]),
              !a.hasOwnProperty(x) ||
                y === g ||
                (y === void 0 && g === void 0) ||
                Vc(l, t, x, y, a, g));
          return;
        }
    }
    for (var r in e)
      ((y = e[r]),
        e.hasOwnProperty(r) &&
          y != null &&
          !a.hasOwnProperty(r) &&
          il(l, t, r, null, a, y));
    for (S in a)
      ((y = a[S]),
        (g = e[S]),
        !a.hasOwnProperty(S) ||
          y === g ||
          (y == null && g == null) ||
          il(l, t, S, y, a, g));
  }
  function Xo(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function T0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0;
        a < e.length;
        a++
      ) {
        var u = e[a],
          n = u.transferSize,
          i = u.initiatorType,
          c = u.duration;
        if (n && c && Xo(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a],
              v = s.startTime;
            if (v > c) break;
            var x = s.transferSize,
              S = s.initiatorType;
            x &&
              Xo(S) &&
              ((s = s.responseEnd), (i += x * (s < c ? 1 : (c - v) / (s - v))));
          }
          if ((--a, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Lc = null,
    Kc = null;
  function On(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function wo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Jc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var kc = null;
  function E0() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === kc
        ? !1
        : ((kc = l), !0)
      : ((kc = null), !1);
  }
  var Vo = typeof setTimeout == "function" ? setTimeout : void 0,
    _0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Lo = typeof Promise == "function" ? Promise : void 0,
    M0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Lo < "u"
          ? function (l) {
              return Lo.resolve(null).then(l).catch(O0);
            }
          : Vo;
  function O0(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function xe(l) {
    return l === "head";
  }
  function Ko(l, t) {
    var e = t,
      a = 0;
    do {
      var u = e.nextSibling;
      if ((l.removeChild(e), u && u.nodeType === 8))
        if (((e = u.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            (l.removeChild(u), _a(t));
            return;
          }
          a--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          a++;
        else if (e === "html") vu(l.ownerDocument.documentElement);
        else if (e === "head") {
          ((e = l.ownerDocument.head), vu(e));
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            (n[Ca] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(n),
              (n = i));
          }
        } else e === "body" && vu(l.ownerDocument.body);
      e = u;
    } while (e);
    _a(t);
  }
  function Jo(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? t
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (t
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (l === 0) break;
          l--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
      e = a;
    } while (e);
  }
  function Wc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Wc(e), li(e));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function D0(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ca])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = xt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function U0(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = xt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function ko(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = xt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function $c(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Fc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function C0(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), e.removeEventListener("DOMContentLoaded", a));
      };
      (e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a));
    }
  }
  function xt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Ic = null;
  function Wo(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return xt(l.nextSibling);
          t--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function $o(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else (e !== "/$" && e !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Fo(l, t, e) {
    switch (((t = On(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(m(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(m(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function vu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    li(l);
  }
  var bt = new Map(),
    Io = new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var Ft = A.d;
  A.d = { f: H0, r: R0, D: q0, C: B0, L: Y0, m: G0, X: X0, S: Q0, M: w0 };
  function H0() {
    var l = Ft.f(),
      t = zn();
    return l || t;
  }
  function R0(l) {
    var t = Je(l);
    t !== null && t.tag === 5 && t.type === "form" ? hd(t) : Ft.r(l);
  }
  var Aa = typeof document > "u" ? null : document;
  function Po(l, t, e) {
    var a = Aa;
    if (a && typeof t == "string" && t) {
      var u = ot(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        Io.has(u) ||
          (Io.add(u),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(u) === null &&
            ((t = a.createElement("link")),
            Cl(t, "link", l),
            El(t),
            a.head.appendChild(t))));
    }
  }
  function q0(l) {
    (Ft.D(l), Po("dns-prefetch", l, null));
  }
  function B0(l, t) {
    (Ft.C(l, t), Po("preconnect", l, t));
  }
  function Y0(l, t, e) {
    Ft.L(l, t, e);
    var a = Aa;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + ot(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + ot(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + ot(e.imageSizes) + '"]'))
        : (u += '[href="' + ot(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = Ta(l);
          break;
        case "script":
          n = Ea(l);
      }
      bt.has(n) ||
        ((l = H(
          {
            rel: "preload",
            href: t === "image" && e && e.imageSrcSet ? void 0 : l,
            as: t,
          },
          e,
        )),
        bt.set(n, l),
        a.querySelector(u) !== null ||
          (t === "style" && a.querySelector(yu(n))) ||
          (t === "script" && a.querySelector(gu(n))) ||
          ((t = a.createElement("link")),
          Cl(t, "link", l),
          El(t),
          a.head.appendChild(t)));
    }
  }
  function G0(l, t) {
    Ft.m(l, t);
    var e = Aa;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ot(a) + '"][href="' + ot(l) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ea(l);
      }
      if (
        !bt.has(n) &&
        ((l = H({ rel: "modulepreload", href: l }, t)),
        bt.set(n, l),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(gu(n))) return;
        }
        ((a = e.createElement("link")),
          Cl(a, "link", l),
          El(a),
          e.head.appendChild(a));
      }
    }
  }
  function Q0(l, t, e) {
    Ft.S(l, t, e);
    var a = Aa;
    if (a && l) {
      var u = ke(a).hoistableStyles,
        n = Ta(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = a.querySelector(yu(n)))) c.loading = 5;
        else {
          ((l = H({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = bt.get(n)) && Pc(l, e));
          var s = (i = a.createElement("link"));
          (El(s),
            Cl(s, "link", l),
            (s._p = new Promise(function (v, x) {
              ((s.onload = v), (s.onerror = x));
            })),
            s.addEventListener("load", function () {
              c.loading |= 1;
            }),
            s.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Un(i, t, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i));
      }
    }
  }
  function X0(l, t) {
    Ft.X(l, t);
    var e = Aa;
    if (e && l) {
      var a = ke(e).hoistableScripts,
        u = Ea(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(gu(u))),
        n ||
          ((l = H({ src: l, async: !0 }, t)),
          (t = bt.get(u)) && lf(l, t),
          (n = e.createElement("script")),
          El(n),
          Cl(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function w0(l, t) {
    Ft.M(l, t);
    var e = Aa;
    if (e && l) {
      var a = ke(e).hoistableScripts,
        u = Ea(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(gu(u))),
        n ||
          ((l = H({ src: l, async: !0, type: "module" }, t)),
          (t = bt.get(u)) && lf(l, t),
          (n = e.createElement("script")),
          El(n),
          Cl(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function lr(l, t, e, a) {
    var u = (u = Z.current) ? Dn(u) : null;
    if (!u) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = Ta(e.href)),
            (e = ke(u).hoistableStyles),
            (a = e.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = Ta(e.href);
          var n = ke(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(yu(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              bt.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                bt.set(l, e),
                n || Z0(u, l, e, i.state))),
            t && a === null)
          )
            throw Error(m(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ea(e)),
              (e = ke(u).hoistableScripts),
              (a = e.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(m(444, l));
    }
  }
  function Ta(l) {
    return 'href="' + ot(l) + '"';
  }
  function yu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function tr(l) {
    return H({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Z0(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Cl(t, "link", e),
        El(t),
        l.head.appendChild(t));
  }
  function Ea(l) {
    return '[src="' + ot(l) + '"]';
  }
  function gu(l) {
    return "script[async]" + l;
  }
  function er(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + ot(e.href) + '"]');
          if (a) return ((t.instance = a), El(a), a);
          var u = H({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            El(a),
            Cl(a, "style", u),
            Un(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          u = Ta(e.href);
          var n = l.querySelector(yu(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), El(n), n);
          ((a = tr(e)),
            (u = bt.get(u)) && Pc(a, u),
            (n = (l.ownerDocument || l).createElement("link")),
            El(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, s) {
              ((i.onload = c), (i.onerror = s));
            })),
            Cl(n, "link", a),
            (t.state.loading |= 4),
            Un(n, e.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Ea(e.src)),
            (u = l.querySelector(gu(n)))
              ? ((t.instance = u), El(u), u)
              : ((a = e),
                (u = bt.get(n)) && ((a = H({}, e)), lf(a, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                El(u),
                Cl(u, "link", a),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Un(a, e.precedence, l));
    return t.instance;
  }
  function Un(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function Pc(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function lf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Cn = null;
  function ar(l, t, e) {
    if (Cn === null) {
      var a = new Map(),
        u = (Cn = new Map());
      u.set(e, a);
    } else ((u = Cn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a)));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[Ca] ||
          n[Ml] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function ur(l, t, e) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function V0(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled),
              typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function nr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function L0(l, t, e, a) {
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = Ta(a.href),
          n = t.querySelector(yu(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Hn.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = n),
            El(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (a = tr(a)),
          (u = bt.get(u)) && Pc(a, u),
          (n = n.createElement("link")),
          El(n));
        var i = n;
        ((i._p = new Promise(function (c, s) {
          ((i.onload = c), (i.onerror = s));
        })),
          Cl(n, "link", a),
          (e.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = Hn.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  var tf = 0;
  function K0(l, t) {
    return (
      l.stylesheets && l.count === 0 && qn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((l.stylesheets && qn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && tf === 0 && (tf = 62500 * T0());
            var u = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && qn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > tf ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = e),
              function () {
                ((l.unsuspend = null), clearTimeout(a), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Hn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) qn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Rn = null;
  function qn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Rn = new Map()),
        t.forEach(J0, l),
        (Rn = null),
        Hn.call(l)));
  }
  function J0(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Rn.get(l);
      if (e) var a = e.get(null);
      else {
        ((e = new Map()), Rn.set(l, e));
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      ((u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = Hn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var xu = {
    $$typeof: Hl,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  };
  function k0(l, t, e, a, u, n, i, c, s) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = $n(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $n(0)),
      (this.hiddenUpdates = $n(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function ir(l, t, e, a, u, n, i, c, s, v, x, S) {
    return (
      (l = new k0(l, t, e, i, s, v, x, S, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = et(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Hi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: t }),
      Yi(n),
      l
    );
  }
  function cr(l) {
    return l ? ((l = ua), l) : ua;
  }
  function fr(l, t, e, a, u, n) {
    ((u = cr(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = ce(t)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = fe(l, a, t)),
      e !== null && (Wl(e, l, t), $a(e, l, t)));
  }
  function sr(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function ef(l, t) {
    (sr(l, t), (l = l.alternate) && sr(l, t));
  }
  function dr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = De(l, 67108864);
      (t !== null && Wl(t, l, 67108864), ef(l, 67108864));
    }
  }
  function or(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ct();
      t = Fn(t);
      var e = De(l, t);
      (e !== null && Wl(e, l, t), ef(l, t));
    }
  }
  var Bn = !0;
  function W0(l, t, e, a) {
    var u = b.T;
    b.T = null;
    var n = A.p;
    try {
      ((A.p = 2), af(l, t, e, a));
    } finally {
      ((A.p = n), (b.T = u));
    }
  }
  function $0(l, t, e, a) {
    var u = b.T;
    b.T = null;
    var n = A.p;
    try {
      ((A.p = 8), af(l, t, e, a));
    } finally {
      ((A.p = n), (b.T = u));
    }
  }
  function af(l, t, e, a) {
    if (Bn) {
      var u = uf(a);
      if (u === null) (Zc(l, t, a, Yn, e), mr(l, a));
      else if (I0(u, l, t, e, a)) a.stopPropagation();
      else if ((mr(l, a), t & 4 && -1 < F0.indexOf(l))) {
        for (; u !== null; ) {
          var n = Je(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Te(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << (31 - lt(i));
                      ((c.entanglements[1] |= s), (i &= ~s));
                    }
                    (Dt(n), (P & 6) === 0 && ((pn = Il() + 500), ru(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = De(n, 2)), c !== null && Wl(c, n, 2), zn(), ef(n, 2));
            }
          if (((n = uf(a)), n === null && Zc(l, t, a, Yn, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else Zc(l, t, a, null, e);
    }
  }
  function uf(l) {
    return ((l = ii(l)), nf(l));
  }
  var Yn = null;
  function nf(l) {
    if (((Yn = null), (l = Ke(l)), l !== null)) {
      var t = w(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = ll(t)), l !== null)) return l;
          l = null;
        } else if (e === 31) {
          if (((l = pl(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Yn = l), null);
  }
  function rr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qr()) {
          case bf:
            return 2;
          case pf:
            return 8;
          case Tu:
          case Br:
            return 32;
          case Sf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cf = !1,
    be = null,
    pe = null,
    Se = null,
    bu = new Map(),
    pu = new Map(),
    ze = [],
    F0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function mr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        be = null;
        break;
      case "dragenter":
      case "dragleave":
        pe = null;
        break;
      case "mouseover":
      case "mouseout":
        Se = null;
        break;
      case "pointerover":
      case "pointerout":
        bu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pu.delete(t.pointerId);
    }
  }
  function Su(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = Je(t)), t !== null && dr(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function I0(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return ((be = Su(be, l, t, e, a, u)), !0);
      case "dragenter":
        return ((pe = Su(pe, l, t, e, a, u)), !0);
      case "mouseover":
        return ((Se = Su(Se, l, t, e, a, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (bu.set(n, Su(bu.get(n) || null, l, t, e, a, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          pu.set(n, Su(pu.get(n) || null, l, t, e, a, u)),
          !0
        );
    }
    return !1;
  }
  function hr(l) {
    var t = Ke(l.target);
    if (t !== null) {
      var e = w(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = ll(e)), t !== null)) {
            ((l.blockedOn = t),
              Ef(l.priority, function () {
                or(e);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = pl(e)), t !== null)) {
            ((l.blockedOn = t),
              Ef(l.priority, function () {
                or(e);
              }));
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Gn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = uf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        ((ni = a), e.target.dispatchEvent(a), (ni = null));
      } else return ((t = Je(e)), t !== null && dr(t), (l.blockedOn = e), !1);
      t.shift();
    }
    return !0;
  }
  function vr(l, t, e) {
    Gn(l) && e.delete(t);
  }
  function P0() {
    ((cf = !1),
      be !== null && Gn(be) && (be = null),
      pe !== null && Gn(pe) && (pe = null),
      Se !== null && Gn(Se) && (Se = null),
      bu.forEach(vr),
      pu.forEach(vr));
  }
  function Qn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      cf ||
        ((cf = !0),
        j.unstable_scheduleCallback(j.unstable_NormalPriority, P0)));
  }
  var Xn = null;
  function yr(l) {
    Xn !== l &&
      ((Xn = l),
      j.unstable_scheduleCallback(j.unstable_NormalPriority, function () {
        Xn === l && (Xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            u = l[t + 2];
          if (typeof a != "function") {
            if (nf(a || e) === null) continue;
            break;
          }
          var n = Je(e);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            uc(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function _a(l) {
    function t(s) {
      return Qn(s, l);
    }
    (be !== null && Qn(be, l),
      pe !== null && Qn(pe, l),
      Se !== null && Qn(Se, l),
      bu.forEach(t),
      pu.forEach(t));
    for (var e = 0; e < ze.length; e++) {
      var a = ze[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < ze.length && ((e = ze[0]), e.blockedOn === null); )
      (hr(e), e.blockedOn === null && ze.shift());
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[Zl] || null;
        if (typeof n == "function") i || yr(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Zl] || null))) c = i.formAction;
            else if (nf(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)),
            yr(e));
        }
      }
  }
  function gr() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), a || setTimeout(e, 20));
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(e, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function ff(l) {
    this._internalRoot = l;
  }
  ((wn.prototype.render = ff.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      var e = t.current,
        a = ct();
      fr(e, a, l, t, null, null);
    }),
    (wn.prototype.unmount = ff.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (fr(l.current, 2, null, l, null, null), zn(), (t[Le] = null));
        }
      }));
  function wn(l) {
    this._internalRoot = l;
  }
  wn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Tf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < ze.length && t !== 0 && t < ze[e].priority; e++);
      (ze.splice(e, 0, l), e === 0 && hr(l));
    }
  };
  var xr = D.version;
  if (xr !== "19.2.4") throw Error(m(527, xr, "19.2.4"));
  A.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(m(188))
        : ((l = Object.keys(l).join(",")), Error(m(268, l)));
    return (
      (l = N(t)),
      (l = l !== null ? K(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var lh = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zn.isDisabled && Zn.supportsFiber)
      try {
        ((Oa = Zn.inject(lh)), (Pl = Zn));
      } catch {}
  }
  return (
    (Nu.createRoot = function (l, t) {
      if (!C(l)) throw Error(m(299));
      var e = !1,
        a = "",
        u = jd,
        n = Ad,
        i = Td;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = ir(l, 1, !1, null, null, e, a, null, u, n, i, gr)),
        (l[Le] = t.current),
        wc(l),
        new ff(t)
      );
    }),
    (Nu.hydrateRoot = function (l, t, e) {
      if (!C(l)) throw Error(m(299));
      var a = !1,
        u = "",
        n = jd,
        i = Ad,
        c = Td,
        s = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.formState !== void 0 && (s = e.formState)),
        (t = ir(l, 1, !0, t, e ?? null, a, u, s, n, i, c, gr)),
        (t.context = cr(null)),
        (e = t.current),
        (a = ct()),
        (a = Fn(a)),
        (u = ce(a)),
        (u.callback = null),
        fe(e, u, a),
        (e = a),
        (t.current.lanes = e),
        Ua(t, e),
        Dt(t),
        (l[Le] = t.current),
        wc(l),
        new wn(t)
      );
    }),
    (Nu.version = "19.2.4"),
    Nu
  );
}
var _r;
function oh() {
  if (_r) return of.exports;
  _r = 1;
  function j() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (D) {
        console.error(D);
      }
  }
  return (j(), (of.exports = dh()), of.exports);
}
var rh = oh();
const mh = Or(rh);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dr = (...j) =>
  j
    .filter((D, q, m) => !!D && D.trim() !== "" && m.indexOf(D) === q)
    .join(" ")
    .trim();
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hh = (j) => j.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vh = (j) =>
  j.replace(/^([A-Z])|[\s-_]+(\w)/g, (D, q, m) =>
    m ? m.toUpperCase() : q.toLowerCase(),
  );
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mr = (j) => {
  const D = vh(j);
  return D.charAt(0).toUpperCase() + D.slice(1);
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var yh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gh = (j) => {
  for (const D in j)
    if (D.startsWith("aria-") || D === "role" || D === "title") return !0;
  return !1;
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xh = ft.forwardRef(
  (
    {
      color: j = "currentColor",
      size: D = 24,
      strokeWidth: q = 2,
      absoluteStrokeWidth: m,
      className: C = "",
      children: w,
      iconNode: ll,
      ...pl
    },
    M,
  ) =>
    ft.createElement(
      "svg",
      {
        ref: M,
        ...yh,
        width: D,
        height: D,
        stroke: j,
        strokeWidth: m ? (Number(q) * 24) / Number(D) : q,
        className: Dr("lucide", C),
        ...(!w && !gh(pl) && { "aria-hidden": "true" }),
        ...pl,
      },
      [
        ...ll.map(([N, K]) => ft.createElement(N, K)),
        ...(Array.isArray(w) ? w : [w]),
      ],
    ),
);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jt = (j, D) => {
  const q = ft.forwardRef(({ className: m, ...C }, w) =>
    ft.createElement(xh, {
      ref: w,
      iconNode: D,
      className: Dr(`lucide-${hh(Mr(j))}`, `lucide-${j}`, m),
      ...C,
    }),
  );
  return ((q.displayName = Mr(j)), q);
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bh = [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }],
  ],
  ph = jt("chart-column", bh);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sh = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Tl = jt("check", Sh);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zh = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  ju = jt("chevron-down", zh);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nh = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  jh = jt("chevron-up", Nh);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ah = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  Th = jt("menu", Ah);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eh = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  _h = jt("play", Eh);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mh = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Oh = jt("shield-check", Mh);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dh = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  vf = jt("trending-up", Dh);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uh = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  Ch = jt("users", Uh);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hh = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Rh = jt("x", Hh);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qh = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  Bh = jt("zap", qh),
  yl = ({
    children: j,
    className: D = "",
    delay: q = 0,
    width: m = "auto",
    variant: C = "up",
    duration: w = 1e3,
  }) => {
    const [ll, pl] = ft.useState(!1),
      M = ft.useRef(null);
    ft.useEffect(() => {
      const K = new IntersectionObserver(
        ([H]) => {
          H.isIntersecting && (pl(!0), K.unobserve(H.target));
        },
        { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
      );
      return (
        M.current && K.observe(M.current),
        () => {
          M.current && K.unobserve(M.current);
        }
      );
    }, []);
    const N = () => {
      switch (C) {
        case "down":
          return ll ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12";
        case "left":
          return ll ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12";
        case "right":
          return ll ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
        case "zoom":
          return ll ? "opacity-100 scale-100" : "opacity-0 scale-90";
        case "blur":
          return ll ? "opacity-100 blur-0" : "opacity-0 blur-lg";
        case "up":
        default:
          return ll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16";
      }
    };
    return f.jsx("div", {
      ref: M,
      style: {
        width: m,
        transitionDelay: `${q}ms`,
        transitionDuration: `${w}ms`,
      },
      className: `transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)] transform will-change-transform ${N()} ${D}`,
      children: j,
    });
  },
  Yh = () => {
    const [j, D] = ft.useState(!1),
      [q, m] = ft.useState(!1);
    return (
      ft.useEffect(() => {
        const C = () => {
          m(window.scrollY > 20);
        };
        return (
          window.addEventListener("scroll", C),
          () => window.removeEventListener("scroll", C)
        );
      }, []),
      f.jsxs(f.Fragment, {
        children: [
          f.jsx("nav", {
            className: `fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${q ? "top-4" : "top-6 md:top-8"}`,
            children: f.jsxs("div", {
              className: `w-full max-w-5xl glass-panel bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-5 md:px-8 h-14 md:h-16 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 ${q ? "bg-black/60 shadow-brand-500/5" : ""}`,
              children: [
                f.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    f.jsx("img", {
                      src: "https://i.imgur.com/9yZ5oUJ.png",
                      alt: "ViralPulse",
                      className: "h-5 md:h-6 w-auto object-contain",
                    }),
                    f.jsx("span", {
                      className:
                        "font-bold text-lg md:text-xl text-white tracking-tight",
                      children: "ViralPulse",
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "hidden md:flex items-center gap-8",
                  children: [
                    f.jsx("a", {
                      href: "#home",
                      className:
                        "text-sm font-medium text-gray-300 hover:text-white transition-colors",
                      children: "Início",
                    }),
                    f.jsx("a", {
                      href: "#how-it-works",
                      className:
                        "text-sm font-medium text-gray-300 hover:text-white transition-colors",
                      children: "Como funciona",
                    }),
                    f.jsx("a", {
                      href: "#features",
                      className:
                        "text-sm font-medium text-gray-300 hover:text-white transition-colors",
                      children: "Recursos",
                    }),
                    f.jsx("a", {
                      href: "#pricing",
                      className:
                        "text-sm font-medium text-gray-300 hover:text-white transition-colors",
                      children: "Planos",
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "flex items-center gap-3 md:gap-4",
                  children: [
                    f.jsx("a", {
                      href: "#pricing",
                      className:
                        "hidden md:block custom-btn !px-6 !py-2 !text-sm !rounded-xl",
                      children: "Começar",
                    }),
                    f.jsx("button", {
                      className:
                        "md:hidden text-white p-2 -mr-2 hover:bg-white/10 rounded-full transition-colors active:scale-95",
                      onClick: () => D(!j),
                      "aria-label": "Menu",
                      children: j
                        ? f.jsx(Rh, { size: 24 })
                        : f.jsx(Th, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          f.jsx("div", {
            className: `fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-300 md:hidden ${j ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
            onClick: () => D(!1),
          }),
          f.jsx("div", {
            className: `fixed top-20 right-4 left-4 z-50 md:hidden transition-all duration-300 transform origin-top ${j ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"}`,
            children: f.jsxs("div", {
              className:
                "glass-panel bg-[#121212]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 overflow-y-auto max-h-[80vh]",
              children: [
                f.jsxs("a", {
                  href: "#home",
                  className:
                    "px-5 py-4 rounded-xl hover:bg-white/10 text-gray-200 hover:text-white transition-all flex items-center justify-between group active:bg-white/5",
                  onClick: () => D(!1),
                  children: [
                    f.jsx("span", {
                      className: "font-medium",
                      children: "Início",
                    }),
                    f.jsx(ju, {
                      className:
                        "-rotate-90 text-white/20 group-hover:text-white transition-colors",
                      size: 16,
                    }),
                  ],
                }),
                f.jsxs("a", {
                  href: "#how-it-works",
                  className:
                    "px-5 py-4 rounded-xl hover:bg-white/10 text-gray-200 hover:text-white transition-all flex items-center justify-between group active:bg-white/5",
                  onClick: () => D(!1),
                  children: [
                    f.jsx("span", {
                      className: "font-medium",
                      children: "Como funciona",
                    }),
                    f.jsx(ju, {
                      className:
                        "-rotate-90 text-white/20 group-hover:text-white transition-colors",
                      size: 16,
                    }),
                  ],
                }),
                f.jsxs("a", {
                  href: "#features",
                  className:
                    "px-5 py-4 rounded-xl hover:bg-white/10 text-gray-200 hover:text-white transition-all flex items-center justify-between group active:bg-white/5",
                  onClick: () => D(!1),
                  children: [
                    f.jsx("span", {
                      className: "font-medium",
                      children: "Recursos",
                    }),
                    f.jsx(ju, {
                      className:
                        "-rotate-90 text-white/20 group-hover:text-white transition-colors",
                      size: 16,
                    }),
                  ],
                }),
                f.jsxs("a", {
                  href: "#pricing",
                  className:
                    "px-5 py-4 rounded-xl hover:bg-white/10 text-gray-200 hover:text-white transition-all flex items-center justify-between group active:bg-white/5",
                  onClick: () => D(!1),
                  children: [
                    f.jsx("span", {
                      className: "font-medium",
                      children: "Planos",
                    }),
                    f.jsx(ju, {
                      className:
                        "-rotate-90 text-white/20 group-hover:text-white transition-colors",
                      size: 16,
                    }),
                  ],
                }),
                f.jsx("div", { className: "h-px bg-white/5 my-2 mx-4" }),
                f.jsx("a", {
                  href: "#pricing",
                  className:
                    "custom-btn w-full mt-2 !rounded-xl text-center justify-center",
                  onClick: () => D(!1),
                  children: "Começar Agora",
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Gh = () =>
    f.jsxs("section", {
      id: "home",
      className: "pt-32 md:pt-40 pb-32 md:pb-48 relative overflow-hidden",
      children: [
        f.jsx("div", {
          className:
            "absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-brand-500/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none",
        }),
        f.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10",
          children: [
            f.jsx(yl, {
              variant: "down",
              children: f.jsxs("div", {
                className:
                  "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-500 text-xs font-semibold tracking-wider uppercase mb-6 md:mb-8",
                children: [
                  f.jsx(Bh, { size: 12, className: "fill-current" }),
                  " Nova Era do TikTok Shop",
                ],
              }),
            }),
            f.jsx(yl, {
              delay: 100,
              variant: "blur",
              duration: 1500,
              children: f.jsxs("h1", {
                className:
                  "text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 leading-[1.1]",
                children: [
                  "Crie avatares e vídeos de IA ",
                  f.jsx("br", { className: "hidden md:block" }),
                  "que vendem ",
                  f.jsx("span", {
                    className: "text-brand-500",
                    children: "24 horas por dia",
                  }),
                ],
              }),
            }),
            f.jsx(yl, {
              delay: 200,
              variant: "up",
              children: f.jsx("p", {
                className:
                  "text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4",
                children:
                  "Economize 10 horas por semana criando conteúdo profissional com IA, sem ferramentas separadas. Sem aparecer e sem investir nada.",
              }),
            }),
            f.jsx(yl, {
              delay: 300,
              variant: "zoom",
              children: f.jsx("div", {
                className:
                  "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16 w-full px-4 sm:px-0",
                children: f.jsx("button", {
                  className:
                    "custom-btn w-full sm:w-auto text-center justify-center",
                  children: "Começar agora",
                }),
              }),
            }),
            f.jsx(yl, {
              delay: 400,
              className: "w-full px-2 md:px-0",
              variant: "zoom",
              duration: 1200,
              children: f.jsxs("div", {
                className:
                  "relative mx-auto w-full max-w-5xl animate-float perspective-1000",
                children: [
                  f.jsx("div", {
                    className:
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[120%] h-[80%] md:h-[120%] bg-brand-500/30 blur-[80px] md:blur-[120px] rounded-[100%] pointer-events-none -z-10",
                  }),
                  f.jsx("div", {
                    className:
                      "relative rounded-[1rem] md:rounded-2xl bg-[#0d0d0d] border border-gray-800 p-[1.5%] shadow-2xl z-10",
                    children: f.jsxs("div", {
                      className:
                        "relative rounded-[0.5rem] md:rounded-xl overflow-hidden bg-black aspect-[16/10] border border-white/5",
                      children: [
                        f.jsx("div", {
                          className:
                            "absolute top-0 left-1/2 -translate-x-1/2 w-[20%] md:w-32 h-[3%] md:h-4 bg-[#0d0d0d] rounded-b-md md:rounded-b-lg z-20 flex justify-center items-center",
                          children: f.jsx("div", {
                            className:
                              "w-[10%] h-[30%] rounded-full bg-[#1f1f1f] shadow-inner",
                          }),
                        }),
                        f.jsx("img", {
                          src: "https://i.imgur.com/XgTiHLL.png",
                          alt: "Dashboard ViralPulse",
                          className: "w-full h-full object-cover opacity-90",
                        }),
                      ],
                    }),
                  }),
                  f.jsx("div", {
                    className:
                      "relative mx-auto w-[100.5%] h-1.5 md:h-3 bg-[#1a1a1a] rounded-b-lg shadow-xl border-t border-black flex justify-center items-start",
                    children: f.jsx("div", {
                      className: "w-1/4 h-[2px] bg-[#2a2a2a] rounded-b-md mt-0",
                    }),
                  }),
                  f.jsx("div", {
                    className:
                      "absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-brand-500/20 blur-2xl rounded-[100%] pointer-events-none opacity-40",
                  }),
                ],
              }),
            }),
          ],
        }),
        f.jsx("div", {
          className:
            "absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20",
          children: f.jsx("svg", {
            className: "relative block w-full h-[50px] md:h-[70px] text-white",
            viewBox: "0 0 1440 70",
            preserveAspectRatio: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: f.jsx("path", {
              d: "M0,0 L200,0 C240,0 260,50 300,50 L1140,50 C1180,50 1200,0 1240,0 L1440,0 V70 H0 V0Z",
              fill: "currentColor",
            }),
          }),
        }),
      ],
    }),
  Qh = () => {
    const j = [
      {
        num: "01",
        title: "Mineração de Dados",
        desc: "Nossa IA varre o TikTok Shop em tempo real para encontrar produtos que estão viralizando agora.",
        image: "https://i.imgur.com/i3xW4B7.png",
        tag: "Analytics",
      },
      {
        num: "02",
        title: "Criação do Avatar",
        desc: "Escolha ou crie um influenciador virtual indistinguível da realidade para representar sua marca.",
        image: "https://i.imgur.com/dGQhgIw.png",
        tag: "Deepfake tech",
      },
      {
        num: "03",
        title: "Personalização de Cena",
        desc: "Defina o cenário, iluminação e estilo do vídeo sem precisar de estúdio físico ou equipamentos.",
        image: "https://i.imgur.com/ipJDnzG.png",
        tag: "Studio AI",
      },
      {
        num: "04",
        title: "Renderização e Venda",
        desc: "Gere centenas de variações de vídeos de alta conversão em minutos e publique.",
        image: "https://i.imgur.com/WWEJ8QY.png",
        tag: "Auto-Render",
      },
    ];
    return f.jsx("section", {
      id: "how-it-works",
      className: "pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white",
      children: f.jsxs("div", {
        className: "max-w-7xl mx-auto px-6 relative z-10",
        children: [
          f.jsx(yl, {
            variant: "blur",
            duration: 1200,
            children: f.jsxs("div", {
              className: "text-center mb-16 md:mb-20",
              children: [
                f.jsx("h2", {
                  className:
                    "text-3xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-900 to-gray-500",
                  children: "Em apenas 4 Passos",
                }),
                f.jsx("p", {
                  className:
                    "text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4 md:mt-6",
                  children:
                    "Do produto viral ao vídeo pronto em minutos. Simplificamos o complexo.",
                }),
              ],
            }),
          }),
          f.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
            children: j.map((D, q) =>
              f.jsx(
                yl,
                {
                  delay: q * 150,
                  className: "h-full",
                  variant: q % 2 === 0 ? "left" : "right",
                  children: f.jsxs("div", {
                    className:
                      "relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 border border-gray-200 min-h-[380px] md:min-h-[420px] flex flex-col justify-between shadow-lg h-full",
                    children: [
                      f.jsxs("div", {
                        className: "p-8 md:p-10 relative z-20",
                        children: [
                          f.jsxs("div", {
                            className: "flex justify-between items-start mb-6",
                            children: [
                              f.jsx("span", {
                                className:
                                  "text-5xl md:text-6xl font-bold text-gray-200 font-sans tracking-tighter",
                                children: D.num,
                              }),
                              f.jsx("div", {
                                className:
                                  "px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-500 backdrop-blur-md",
                                children: D.tag,
                              }),
                            ],
                          }),
                          f.jsx("h3", {
                            className:
                              "text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3",
                            children: D.title,
                          }),
                          f.jsx("p", {
                            className:
                              "text-gray-600 leading-relaxed text-sm md:text-base max-w-sm",
                            children: D.desc,
                          }),
                        ],
                      }),
                      f.jsx("div", {
                        className:
                          "relative mx-4 mb-4 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-56 md:h-64 border-t border-x border-gray-100 bg-white shadow-inner",
                        children: f.jsx("img", {
                          src: D.image,
                          alt: D.title,
                          className: "w-full h-full object-cover opacity-100",
                        }),
                      }),
                    ],
                  }),
                },
                q,
              ),
            ),
          }),
        ],
      }),
    });
  },
  Xh = () =>
    f.jsxs("section", {
      id: "features",
      className: "py-24 md:py-32 relative overflow-hidden",
      children: [
        f.jsx("div", {
          className:
            "absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-500/5 to-transparent pointer-events-none",
        }),
        f.jsx("div", {
          className:
            "absolute top-1/3 -left-[20%] w-[600px] h-[600px] bg-brand-500/15 blur-[150px] rounded-full pointer-events-none",
        }),
        f.jsx("div", {
          className:
            "absolute bottom-1/3 -right-[20%] w-[600px] h-[600px] bg-blue-500/15 blur-[150px] rounded-full pointer-events-none",
        }),
        f.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6 relative z-10",
          children: [
            f.jsx(yl, {
              variant: "left",
              children: f.jsxs("div", {
                className: "mb-12 md:mb-20 text-center md:text-left",
              children: [
                f.jsxs("h2", {
                  className: "text-3xl md:text-5xl font-bold mb-4 md:mb-6",
                  children: [
                    "Conheça a ",
                    f.jsx("span", {
                      className: "text-brand-500",
                      children: "ViralPulse",
                    }),
                  ],
                }),
                f.jsx("p", {
                  className:
                    "text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0",
                  children:
                    "A IA mais completa para TikTok Shop do Brasil. O arsenal completo dos afiliados que escalam.",
                }),
              ],
            }),
          }),
          f.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32",
            children: [
              f.jsx("div", {
                className: "md:col-span-2",
                children: f.jsx(yl, {
                  className: "h-full",
                  variant: "zoom",
                  delay: 0,
                  children: f.jsxs("div", {
                    className:
                      "glass-panel p-6 md:p-10 rounded-3xl border border-white/10 flex flex-col justify-between overflow-hidden relative group h-full min-h-[400px]",
                    children: [
                      f.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          f.jsx("div", {
                            className:
                              "mb-6 w-12 h-12 md:w-14 md:h-14 bg-brand-500/20 border border-brand-500/30 rounded-full flex items-center justify-center text-brand-500",
                            children: f.jsx(vf, {
                              size: 24,
                              className: "md:w-7 md:h-7",
                            }),
                          }),
                          f.jsx("h3", {
                            className:
                              "text-xl md:text-2xl font-bold mb-3 md:mb-4",
                            children: "Produtos que já estão vendendo agora",
                          }),
                          f.jsx("p", {
                            className:
                              "text-gray-400 mb-8 max-w-md text-sm md:text-base",
                            children:
                              "Pare de adivinhar. Veja o que está performando no TikTok Shop neste momento, com dados atualizados e receita estimada.",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "bg-[#0A0A0A] rounded-xl border border-white/5 p-3 md:p-4 relative overflow-hidden z-10",
                        children: [
                          f.jsxs("div", {
                            className:
                              "flex justify-between items-center mb-4 text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold px-2",
                            children: [
                              f.jsx("span", { children: "Produto Viral" }),
                              f.jsx("span", { children: "Faturamento (7d)" }),
                            ],
                          }),
                          f.jsxs("div", {
                            className:
                              "flex items-center justify-between p-2 md:p-3 rounded-lg bg-white/5 mb-2 border border-white/5",
                            children: [
                              f.jsxs("div", {
                                className: "flex items-center gap-2 md:gap-3",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "w-8 h-8 md:w-10 md:h-10 rounded bg-gray-800 bg-cover bg-center",
                                    style: {
                                      backgroundImage:
                                        "url(https://i.imgur.com/i3xW4B7.png)",
                                    },
                                  }),
                                  f.jsxs("div", {
                                    children: [
                                      f.jsx("div", {
                                        className:
                                          "text-xs md:text-sm font-medium text-white",
                                        children: "Modelador Postural",
                                      }),
                                      f.jsxs("div", {
                                        className:
                                          "text-[10px] md:text-xs text-green-400 flex items-center gap-1",
                                        children: [
                                          f.jsx(vf, { size: 10 }),
                                          " Em alta",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className: "text-right",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "text-xs md:text-sm font-bold text-white",
                                    children: "R$ 245.920,00",
                                  }),
                                  f.jsx("div", {
                                    className:
                                      "text-[10px] md:text-xs text-gray-500",
                                    children: "12.4k vendas",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className:
                              "flex items-center justify-between p-2 md:p-3 rounded-lg bg-white/5 mb-2 border border-white/5",
                            children: [
                              f.jsxs("div", {
                                className: "flex items-center gap-2 md:gap-3",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "w-8 h-8 md:w-10 md:h-10 rounded bg-gray-800 bg-cover bg-center",
                                    style: {
                                      backgroundImage:
                                        "url(https://i.imgur.com/ipJDnzG.png)",
                                    },
                                  }),
                                  f.jsxs("div", {
                                    children: [
                                      f.jsx("div", {
                                        className:
                                          "text-xs md:text-sm font-medium text-white",
                                        children: "Kit Clareador Dental",
                                      }),
                                      f.jsxs("div", {
                                        className:
                                          "text-[10px] md:text-xs text-green-400 flex items-center gap-1",
                                        children: [
                                          f.jsx(vf, { size: 10 }),
                                          " Tendência",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className: "text-right",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "text-xs md:text-sm font-bold text-white",
                                    children: "R$ 182.450,00",
                                  }),
                                  f.jsx("div", {
                                    className:
                                      "text-[10px] md:text-xs text-gray-500",
                                    children: "8.1k vendas",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsx("div", {
                            className:
                              "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none",
                          }),
                        ],
                      }),
                      f.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-[80px] rounded-full pointer-events-none",
                      }),
                    ],
                  }),
                }),
              }),
              f.jsx("div", {
                className: "md:row-span-2",
                children: f.jsx(yl, {
                  className: "h-full",
                  delay: 200,
                  variant: "zoom",
                  children: f.jsxs("div", {
                    className:
                      "glass-panel p-6 md:p-10 rounded-3xl border border-white/10 flex flex-col relative overflow-hidden h-full min-h-[400px]",
                    children: [
                      f.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full pointer-events-none",
                      }),
                      f.jsx("div", {
                        className:
                          "mb-6 w-12 h-12 md:w-14 md:h-14 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-500/20",
                        children: f.jsx(Ch, {
                          size: 24,
                          className: "md:w-6 md:h-6",
                        }),
                      }),
                      f.jsx("h3", {
                        className: "text-xl md:text-2xl font-bold mb-3 md:mb-4",
                        children: "Influencers Virtuais",
                      }),
                      f.jsx("p", {
                        className: "text-gray-400 mb-8 text-sm md:text-base",
                        children:
                          "Sem aparecer. Sem contratar criador. A IA auxilia na criação de avatar ultra-realistas segurando o produto, com iluminação natural e textura de pele.",
                      }),
                      f.jsxs("div", {
                        className:
                          "relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-gray-800 shadow-2xl border border-white/5",
                        children: [
                          f.jsx("img", {
                            src: "https://i.imgur.com/3ZdF8XU.png",
                            alt: "Avatar AI",
                            className: "w-full h-full object-cover",
                          }),
                          f.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none",
                          }),
                          f.jsxs("div", {
                            className:
                              "absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 flex items-center gap-2",
                            children: [
                              f.jsx("div", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0",
                              }),
                              f.jsx("span", {
                                className: "truncate",
                                children: "Gerado por IA",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              f.jsx("div", {
                className: "md:col-span-1",
                children: f.jsx(yl, {
                  className: "h-full",
                  delay: 150,
                  variant: "zoom",
                  children: f.jsxs("div", {
                    className:
                      "glass-panel p-6 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden group h-full",
                    children: [
                      f.jsx("div", {
                        className:
                          "mb-6 w-12 h-12 md:w-14 md:h-14 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400",
                        children: f.jsx(_h, {
                          size: 24,
                          className: "ml-1 md:w-6 md:h-6",
                        }),
                      }),
                      f.jsx("h3", {
                        className: "text-lg md:text-xl font-bold mb-3",
                        children: "Biblioteca Viral",
                      }),
                      f.jsx("p", {
                        className: "text-gray-400 text-sm",
                        children:
                          "Pare de inventar moda. Identifique o gancho que prende nos primeiros 3 segundos. Replique a estrutura vencedora.",
                      }),
                      f.jsx("div", {
                        className:
                          "absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors",
                      }),
                    ],
                  }),
                }),
              }),
              f.jsx("div", {
                className: "md:col-span-1",
                children: f.jsx(yl, {
                  className: "h-full",
                  delay: 300,
                  variant: "zoom",
                  children: f.jsxs("div", {
                    className:
                      "glass-panel p-6 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden group h-full",
                    children: [
                      f.jsx("div", {
                        className:
                          "mb-6 w-12 h-12 md:w-14 md:h-14 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center text-purple-400",
                        children: f.jsx(ph, {
                          size: 24,
                          className: "md:w-6 md:h-6",
                        }),
                      }),
                      f.jsx("h3", {
                        className: "text-lg md:text-xl font-bold mb-3",
                        children: "Inteligência Competitiva",
                      }),
                      f.jsx("p", {
                        className: "text-gray-400 text-sm",
                        children:
                          "Mapeie os criadores que dominam seu nicho. Veja frequência, abordagem e estilo.",
                      }),
                      f.jsx("div", {
                        className:
                          "absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-colors",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          f.jsxs("div", {
            className:
              "mt-16 md:mt-32 flex flex-col lg:flex-row items-center gap-20 lg:gap-24 overflow-visible",
            children: [
              f.jsxs("div", {
                className:
                  "flex-1 text-center lg:text-left space-y-8 px-4 min-w-[300px] relative z-10",
                children: [
                  f.jsx("div", {
                    className:
                      "absolute top-1/2 left-1/2 lg:left-0 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-1/4 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-brand-500/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0",
                  }),
                  f.jsx("div", {
                    className:
                      "absolute top-1/2 left-1/2 lg:left-1/4 -translate-y-1/2 -translate-x-1/2 lg:translate-x-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-blue-500/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0",
                  }),
                  f.jsx(yl, {
                    variant: "left",
                    children: f.jsxs("h3", {
                      className:
                        "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15] text-white",
                      children: [
                        "Assinar a ViralPulse é como ter uma ",
                        f.jsx("span", {
                          className: "text-brand-500 inline-block",
                          children: "central de inteligência",
                        }),
                        " que monitora o que está performando e organiza tudo em tempo real para você.",
                      ],
                    }),
                  }),
                  f.jsx(yl, {
                    delay: 200,
                    variant: "up",
                    children: f.jsx("div", {
                      className: "flex justify-center lg:justify-start",
                      children: f.jsx("a", {
                        href: "#pricing",
                        className:
                          "custom-btn w-full md:w-auto !py-4 !px-8 !text-lg !rounded-xl shadow-brand-500/25 shadow-lg",
                        children: "Quero viralizar ainda hoje!",
                      }),
                    }),
                  }),
                ],
              }),
              f.jsxs(yl, {
                className:
                  "flex-1 relative w-full flex flex-col items-center select-none lg:translate-x-0",
                delay: 300,
                variant: "right",
                children: [
                  f.jsx("style", {
                    children: `
                .mockup-wrapper {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transform-origin: center;
                    width: 100%;
                }

                /* Responsive MacBook Container */
                .macbook-lid {
                    position: relative;
                    width: 90vw; /* Responsive width */
                    max-width: 750px;
                    aspect-ratio: 16 / 10;
                    background: #000;
                    border-radius: clamp(8px, 2vw, 14px);
                    padding: 1.2%; 
                    border: 1px solid #333;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                    z-index: 10;
                    margin-left: auto;
                    margin-right: auto;
                }

                .macbook-screen {
                    width: 100%;
                    height: 100%;
                    background: #000;
                    border-radius: clamp(4px, 1vw, 8px);
                    overflow: hidden;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }

                .macbook-base {
                    width: 90.2vw;
                    max-width: 752px;
                    height: clamp(8px, 2vw, 14px);
                    background: linear-gradient(to bottom, #d1d5db 0%, #9ca3af 100%);
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    position: relative;
                    margin-top: -2px;
                    border: 1px solid #888;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.4);
                    display: flex;
                    justify-content: center;
                    margin-left: auto;
                    margin-right: auto;
                }

                .base-notch {
                    width: 10%;
                    height: 50%;
                    background: rgba(0,0,0,0.15);
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                }

                .mac-notch {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 13%;
                    height: 4%;
                    background: #000;
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                    z-index: 50;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .mac-camera {
                    width: 20%;
                    height: 50%;
                    background: #1a1a1a;
                    border-radius: 50%;
                }

                /* IPHONE */
                .iphone-container {
                    position: absolute;
                    bottom: -5%;
                    left: 0; 
                    width: 22%; /* Reduced for better proportion relative to macbook */
                    min-width: 80px;
                    max-width: 215px;
                    aspect-ratio: 1 / 2.14;
                    background: #111;
                    border-radius: clamp(20px, 4vw, 40px);
                    padding: 2%; 
                    box-shadow: 15px 30px 60px rgba(0,0,0,0.8);
                    border: 2px solid #333; 
                    z-index: 60;
                }

                /* Mobile Optimization */
                @media (max-width: 768px) {
                    .mockup-wrapper {
                        /* Shift right slightly so iPhone doesn't cut off */
                        padding-left: 0;
                        padding-right: 0;
                        margin-top: 2rem; /* Add space from button */
                    }
                    .macbook-lid, .macbook-base {
                        width: 95%;
                    }
                    .iphone-container {
                        left: 2%; 
                        bottom: -5%;
                        width: 25%; /* Explicitly smaller on mobile */
                        border-radius: 18px;
                        border-width: 1px;
                        box-shadow: 10px 20px 40px rgba(0,0,0,0.6);
                    }
                }

                .iphone-screen {
                    width: 100%;
                    height: 100%;
                    background: #000;
                    border-radius: clamp(18px, 3.5vw, 36px);
                    overflow: hidden; 
                    position: relative;
                    border: 1px solid rgba(255,255,255,0.05);
                }

                .dynamic-island {
                    width: 35%; 
                    height: 4%;
                    background: #000;
                    border-radius: 20px;
                    position: absolute;
                    top: 2.5%;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 100;
                }
             `,
                  }),
                  f.jsxs("div", {
                    className: "mockup-wrapper",
                    children: [
                      f.jsx("div", {
                        className: "macbook-lid",
                        children: f.jsxs("div", {
                          className: "macbook-screen",
                          children: [
                            f.jsx("div", {
                              className: "mac-notch",
                              children: f.jsx("div", {
                                className: "mac-camera",
                              }),
                            }),
                            f.jsx("img", {
                              src: "https://i.imgur.com/npvBQ2a.png",
                              className: "w-full h-full object-cover",
                              alt: "Interface Vyral Desktop",
                            }),
                          ],
                        }),
                      }),
                      f.jsx("div", {
                        className: "macbook-base",
                        children: f.jsx("div", { className: "base-notch" }),
                      }),
                      f.jsxs("div", {
                        className: "iphone-container",
                        children: [
                          f.jsx("div", { className: "dynamic-island" }),
                          f.jsx("div", {
                            className: "iphone-screen",
                            children: f.jsx("img", {
                              src: "https://i.imgur.com/z2Pt45c.png",
                              className: "w-full h-full object-cover",
                              alt: "Interface Vyral Mobile",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      ],
    }),
  wh = () =>
    f.jsxs("section", {
      id: "pricing",
      className: "py-24 md:py-32 relative overflow-hidden",
      children: [
        f.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-500/20 via-transparent to-blue-500/20 blur-[120px] pointer-events-none opacity-60",
        }),
        f.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6 relative z-10",
          children: [
            f.jsx(yl, {
              variant: "blur",
              children: f.jsxs("div", {
                className: "text-center mb-12 md:mb-16",
                children: [
                  f.jsx("h2", {
                    className:
                      "text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight",
                    children: "Planos",
                  }),
                  f.jsx("p", {
                    className:
                      "text-gray-400 max-w-lg mx-auto text-base md:text-lg font-light",
                    children: "Escolha a potência ideal para sua operação.",
                  }),
                ],
              }),
            }),
            f.jsxs("div", {
              className:
                "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 items-stretch",
              children: [
                f.jsx(yl, {
                  className: "flex flex-col h-full",
                  delay: 100,
                  variant: "up",
                  children: f.jsxs("div", {
                    className:
                      "flex flex-col p-6 md:p-8 rounded-[2rem] bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300 relative group overflow-hidden h-full",
                    children: [
                      f.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                      }),
                      f.jsxs("div", {
                        className: "mb-6",
                        children: [
                          f.jsx("h3", {
                            className: "text-xl font-bold text-white mb-6",
                            children: "Plano Mensal",
                          }),
                          f.jsxs("div", {
                            className: "space-y-4 mb-8",
                            children: [
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-gray-300 font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500/20",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-emerald-400",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Acesso completo por 1 mês",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-gray-300 font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500/20",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-emerald-400",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Produtos mais vendidos",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-gray-300 font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500/20",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-emerald-400",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Vídeos mais vendidos",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-gray-300 font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500/20",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-emerald-400",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Análise de concorrentes",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-gray-300 font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500/20",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-emerald-400",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Criação de avatar UGC ilimitada",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "mt-auto",
                        children: [
                          f.jsxs("div", {
                            className: "mb-6",
                            children: [
                              f.jsx("p", {
                                className:
                                  "text-gray-500 text-sm font-medium line-through mb-1",
                                children: "De R$ 297",
                              }),
                              f.jsx("p", {
                                className:
                                  "text-white text-sm font-medium mb-1",
                                children: "Por apenas",
                              }),
                              f.jsxs("div", {
                                className: "flex items-baseline gap-1",
                                children: [
                                  f.jsx("span", {
                                    className:
                                      "text-3xl md:text-4xl font-bold text-white tracking-tight",
                                    children: "R$ 127",
                                  }),
                                  f.jsx("span", {
                                    className: "text-gray-500 font-medium",
                                    children: "/mês",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsx("a", {
                            href: "https://go.perfectpay.com.br/PPU38CQ7Q0C",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-full py-3.5 rounded-xl font-bold text-sm transition-all bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center border border-white/5",
                            children: "Começar Mensal",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                f.jsx(yl, {
                  className: "flex flex-col h-full",
                  delay: 200,
                  variant: "up",
                  children: f.jsxs("div", {
                    className:
                      "flex flex-col p-6 md:p-8 rounded-[2rem] bg-[#1a1a1a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10 h-full",
                    children: [
                      f.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-b from-brand-500/20 to-transparent opacity-80 pointer-events-none",
                      }),
                      f.jsx("div", {
                        className: "absolute top-5 right-5",
                        children: f.jsx("span", {
                          className:
                            "px-3 py-1 rounded-full bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-brand-500/20",
                          children: "Popular",
                        }),
                      }),
                      f.jsxs("div", {
                        className: "mb-6 relative z-10",
                        children: [
                          f.jsx("h3", {
                            className: "text-xl font-bold text-white mb-6",
                            children: "Plano Anual",
                          }),
                          f.jsxs("div", {
                            className: "space-y-4 mb-8",
                            children: [
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-white font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-black",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Acesso completo por 1 ano",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-white font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-black",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Produtos mais vendidos",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-white font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-black",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Vídeos mais vendidos",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-white font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-black",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Análise de concorrentes",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-white font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-black",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Criação de avatar UGC ilimitada",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-brand-300 font-bold leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-black",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Economia de R$ 1.325/ano",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "mt-auto relative z-10",
                        children: [
                          f.jsxs("div", {
                            className: "mb-6",
                            children: [
                              f.jsx("p", {
                                className:
                                  "text-gray-400 text-sm font-medium line-through mb-1",
                                children: "De R$ 399",
                              }),
                              f.jsx("p", {
                                className:
                                  "text-white text-sm font-medium mb-1",
                                children: "Por apenas",
                              }),
                              f.jsxs("div", {
                                className: "flex items-baseline gap-1",
                                children: [
                                  f.jsx("span", {
                                    className:
                                      "text-xl text-gray-400 font-medium",
                                    children: "12x",
                                  }),
                                  f.jsx("span", {
                                    className:
                                      "text-4xl md:text-5xl font-bold text-white tracking-tight",
                                    children: "R$ 19,98",
                                  }),
                                ],
                              }),
                              f.jsx("p", {
                                className: "text-xs text-gray-400 mt-2",
                                children: "ou R$ 199 à vista",
                              }),
                            ],
                          }),
                          f.jsx("a", {
                            href: "https://go.perfectpay.com.br/PPU38CQ7Q0D",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-full custom-btn mb-0 !text-sm !py-3.5 !rounded-xl shadow-brand-500/20 font-bold",
                            children: "Assinar Anual",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                f.jsx(yl, {
                  className: "flex flex-col h-full",
                  delay: 300,
                  variant: "up",
                  children: f.jsxs("div", {
                    className:
                      "flex flex-col p-6 md:p-8 rounded-[2rem] bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300 relative group overflow-hidden h-full",
                    children: [
                      f.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                      }),
                      f.jsx("div", {
                        className: "absolute top-5 right-5",
                        children: f.jsx("span", {
                          className:
                            "px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(253,32,98,0.15)]",
                          children: "Pagamento Único",
                        }),
                      }),
                      f.jsxs("div", {
                        className: "mb-6",
                        children: [
                          f.jsx("h3", {
                            className: "text-xl font-bold text-brand-200 mb-6",
                            children: "Plano Vitalício",
                          }),
                          f.jsxs("div", {
                            className: "space-y-4 mb-8",
                            children: [
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-gray-300 font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500/20",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-emerald-400",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Acesso Vitalício (Pra sempre)",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-gray-300 font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500/20",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-emerald-400",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Produtos mais vendidos",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-gray-300 font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500/20",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-emerald-400",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Vídeos mais vendidos",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-gray-300 font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500/20",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-emerald-400",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Análise de concorrentes",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-start gap-3 text-sm text-gray-300 font-medium leading-tight",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "mt-0.5 p-0.5 rounded-full bg-emerald-500/20",
                                    children: f.jsx(Tl, {
                                      size: 12,
                                      className: "text-emerald-400",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  f.jsx("span", {
                                    children: "Criação de avatar UGC ilimitada",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "mt-auto",
                        children: [
                          f.jsxs("div", {
                            className: "mb-6",
                            children: [
                              f.jsx("p", {
                                className:
                                  "text-gray-500 text-sm font-medium line-through mb-1",
                                children: "De R$ 499",
                              }),
                              f.jsx("p", {
                                className:
                                  "text-white text-sm font-medium mb-1",
                                children: "Por apenas",
                              }),
                              f.jsxs("div", {
                                className: "flex items-baseline gap-1",
                                children: [
                                  f.jsx("span", {
                                    className:
                                      "text-xl text-gray-500 font-medium",
                                    children: "12x",
                                  }),
                                  f.jsx("span", {
                                    className:
                                      "text-3xl md:text-4xl font-bold text-white tracking-tight",
                                    children: "R$ 30,02",
                                  }),
                                ],
                              }),
                              f.jsx("p", {
                                className: "text-xs text-gray-500 mt-2",
                                children: "ou R$ 299 à vista",
                              }),
                            ],
                          }),
                          f.jsx("a", {
                            href: "https://go.perfectpay.com.br/PPU38CQ7Q0E",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-full py-3.5 rounded-xl font-bold text-sm transition-all bg-brand-500/10 border border-brand-500/20 text-brand-400 hover:bg-brand-500/20 flex items-center justify-center",
                            children: "Acesso Vitalício",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            f.jsx("div", {
              className: "mt-16 md:mt-20",
              children: f.jsx(yl, {
                delay: 400,
                variant: "up",
                children: f.jsxs("div", {
                  className:
                    "max-w-3xl mx-auto rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left",
                  children: [
                    f.jsx("div", {
                      className:
                        "shrink-0 p-4 rounded-full bg-white/5 text-brand-500",
                      children: f.jsx(Oh, { size: 32 }),
                    }),
                    f.jsxs("div", {
                      className: "flex-1",
                      children: [
                        f.jsx("h3", {
                          className: "text-xl font-bold mb-2",
                          children: "Garantia de 14 Dias",
                        }),
                        f.jsx("p", {
                          className:
                            "text-gray-400 text-sm leading-relaxed mb-4",
                          children:
                            "Experimente qualquer plano sem risco. Se não ficar satisfeito nos primeiros 14 dias, devolvemos 100% do seu dinheiro, sem perguntas.",
                        }),
                        f.jsxs("div", {
                          className:
                            "flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2",
                          children: [
                            f.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-sm text-gray-500",
                              children: [
                                f.jsx(Tl, {
                                  size: 14,
                                  className: "text-brand-500",
                                }),
                                f.jsx("span", {
                                  children: "Sem taxa de cancelamento",
                                }),
                              ],
                            }),
                            f.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-sm text-gray-500",
                              children: [
                                f.jsx(Tl, {
                                  size: 14,
                                  className: "text-brand-500",
                                }),
                                f.jsx("span", { children: "Pagamento seguro" }),
                              ],
                            }),
                            f.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-sm text-gray-500",
                              children: [
                                f.jsx(Tl, {
                                  size: 14,
                                  className: "text-brand-500",
                                }),
                                f.jsx("span", {
                                  children: "Funções ilimitadas",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  Zh = () => {
    const j = [
        {
          q: "O que é a ViralPulse?",
          a: "A ViralPulse é uma plataforma de inteligência artificial que mostra em tempo real quais vídeos e produtos estão vendendo milhares de reais no TikTok Shop, além de te ajudar a criar seu próprio avatar com IA.",
        },
        {
          q: "Funciona para quem está começando do zero?",
          a: "Sim. Você já entra modelando vídeos que estão vendendo hoje, sem meses de tentativa e erro.",
        },
        {
          q: "Como recebo meu acesso?",
          a: "Assim que a assinatura é confirmada, você recebe no e-mail o login com todas as instruções para acessar a plataforma.",
        },
        {
          q: "Funciona só no computador?",
          a: "Não. A ViralPulse pode ser acessada de qualquer dispositivo. Você pode usar no celular, tablet ou computador, direto pelo navegador, sem precisar instalar nada.",
        },
        {
          q: "E se eu não gostar?",
          a: "Você tem 14 dias para testar sem risco. Se não ajudar você a vender, devolvemos 100% do valor.",
        },
      ],
      [D, q] = ft.useState(0);
    return f.jsxs("section", {
      id: "faq",
      className: "py-24 relative overflow-hidden",
      children: [
        f.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none z-0",
        }),
        f.jsxs("div", {
          className: "max-w-3xl mx-auto px-6 relative z-10",
        children: [
          f.jsx(yl, {
            variant: "down",
            children: f.jsx("h2", {
              className:
                "text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12",
              children: "Perguntas Frequentes",
            }),
          }),
          f.jsx("div", {
            className: "flex flex-col gap-4",
            children: j.map((m, C) =>
              f.jsx(
                yl,
                {
                  delay: C * 100,
                  variant: "left",
                  children: f.jsxs("div", {
                    className:
                      "glass-panel rounded-2xl overflow-hidden border border-white/5 transition-all",
                    children: [
                      f.jsxs("button", {
                        className:
                          "w-full flex items-center justify-between p-4 md:p-6 text-left",
                        onClick: () => q(D === C ? null : C),
                        children: [
                          f.jsx("span", {
                            className:
                              "font-semibold text-base md:text-lg pr-4",
                            children: m.q,
                          }),
                          D === C
                            ? f.jsx(jh, {
                                className: "text-brand-500 shrink-0",
                              })
                            : f.jsx(ju, {
                                className: "text-gray-500 shrink-0",
                              }),
                        ],
                      }),
                      D === C &&
                        f.jsx("div", {
                          className:
                            "px-4 pb-4 md:px-6 md:pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 text-sm md:text-base",
                          children: m.a,
                        }),
                    ],
                  }),
                },
                C,
              ),
            ),
          }),
        ],
      }),
      ],
    });
  },
  Vh = () =>
    f.jsxs("div", {
      className:
        "bg-[#050505] text-white font-sans selection:bg-brand-500/30 overflow-x-hidden",
      children: [
        f.jsx(Yh, {}),
        f.jsx(Gh, {}),
        f.jsx(Qh, {}),
        f.jsx(Xh, {}),
        f.jsx(wh, {}),
        f.jsx(Zh, {}),
        f.jsx("footer", {
          className:
            "py-8 border-t border-white/5 text-center text-gray-500 text-sm px-4",
          children: f.jsxs("p", {
            children: [
              "© ",
              new Date().getFullYear(),
              " ViralPulse. Todos os direitos reservados.",
            ],
          }),
        }),
      ],
    }),
  Ur = document.getElementById("root");
if (!Ur) throw new Error("Could not find root element to mount to");
const Lh = mh.createRoot(Ur);
Lh.render(f.jsx(nh.StrictMode, { children: f.jsx(Vh, {}) }));
