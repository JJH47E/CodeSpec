function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$4 = Symbol.for("react.element"), n$7 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$4 = Symbol.for("react.profiler"), t$3 = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
function A$1(a2) {
  if (null === a2 || "object" !== typeof a2) return null;
  a2 = z$2 && a2[z$2] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var B$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$2 = Object.assign, D$2 = {};
function E$1(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$2;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$1.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$1.prototype;
function G$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$2;
}
var H$3 = G$2.prototype = new F$1();
H$3.constructor = G$2;
C$2(H$3, E$1.prototype);
H$3.isPureReactComponent = true;
var I$1 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a2, b2, e2) {
  var d, c2 = {}, k2 = null, h2 = null;
  if (null != b2) for (d in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$1.call(b2, d) && !L$2.hasOwnProperty(d) && (c2[d] = b2[d]);
  var g = arguments.length - 2;
  if (1 === g) c2.children = e2;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps) for (d in g = a2.defaultProps, g) void 0 === c2[d] && (c2[d] = g[d]);
  return { $$typeof: l$4, type: a2, key: k2, ref: h2, props: c2, _owner: K$2.current };
}
function N$1(a2, b2) {
  return { $$typeof: l$4, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$1(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$4;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$1 = /\/+/g;
function Q$2(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
}
function R$1(a2, b2, e2, d, c2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2) a2 = null;
  var h2 = false;
  if (null === a2) h2 = true;
  else switch (k2) {
    case "string":
    case "number":
      h2 = true;
      break;
    case "object":
      switch (a2.$$typeof) {
        case l$4:
        case n$7:
          h2 = true;
      }
  }
  if (h2) return h2 = a2, c2 = c2(h2), a2 = "" === d ? "." + Q$2(h2, 0) : d, I$1(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$1, "$&/") + "/"), R$1(c2, b2, e2, "", function(a3) {
    return a3;
  })) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a2)) for (var g = 0; g < a2.length; g++) {
    k2 = a2[g];
    var f2 = d + Q$2(k2, g);
    h2 += R$1(k2, b2, e2, f2, c2);
  }
  else if (f2 = A$1(a2), "function" === typeof f2) for (a2 = f2.call(a2), g = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f2 = d + Q$2(k2, g++), h2 += R$1(k2, b2, e2, f2, c2);
  else if ("object" === k2) throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$2(a2, b2, e2) {
  if (null == a2) return a2;
  var d = [], c2 = 0;
  R$1(a2, d, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d;
}
function T$1(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b3;
    });
    -1 === a2._status && (a2._status = 0, a2._result = b2);
  }
  if (1 === a2._status) return a2._result.default;
  throw a2._result;
}
var U$2 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$2 };
function X$2() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$2, forEach: function(a2, b2, e2) {
  S$2(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$2(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$2(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$1(a2)) throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$3;
react_production_min.Profiler = r$4;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$2;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.act = X$2;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d = C$2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps) var g = a2.type.defaultProps;
    for (f2 in b2) J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g ? g[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d.children = e2;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$4, type: a2.type, key: c2, ref: k2, props: d, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$3, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a2) {
  var b2 = M$2.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$2, render: a2 };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a2) {
  return { $$typeof: y, _payload: { _status: -1, _result: a2 }, _init: T$1 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a2();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = X$2;
react_production_min.useCallback = function(a2, b2) {
  return U$2.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$2.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$2.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$2.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$2.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$2.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$2.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$2.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$2.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$2.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$2.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$2.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = reactExports, k = Symbol.for("react.element"), l$3 = Symbol.for("react.fragment"), m$7 = Object.prototype.hasOwnProperty, n$6 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a2, g) {
  var b2, d = {}, e2 = null, h2 = null;
  void 0 !== g && (e2 = "" + g);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (h2 = a2.ref);
  for (b2 in a2) m$7.call(a2, b2) && !p$2.hasOwnProperty(b2) && (d[b2] = a2[b2]);
  if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d[b2] && (d[b2] = a2[b2]);
  return { $$typeof: k, type: c2, key: e2, ref: h2, props: d, _owner: n$6.current };
}
reactJsxRuntime_production_min.Fragment = l$3;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a: for (; 0 < c2; ) {
      var d = c2 - 1 >>> 1, e2 = a2[d];
      if (0 < g(e2, b2)) a2[d] = b2, a2[c2] = e2, c2 = d;
      else break a;
    }
  }
  function h2(a2) {
    return 0 === a2.length ? null : a2[0];
  }
  function k2(a2) {
    if (0 === a2.length) return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a: for (var d = 0, e2 = a2.length, w2 = e2 >>> 1; d < w2; ) {
        var m2 = 2 * (d + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
        if (0 > g(C2, c2)) n2 < e2 && 0 > g(x2, C2) ? (a2[d] = x2, a2[n2] = c2, d = n2) : (a2[d] = C2, a2[m2] = c2, d = m2);
        else if (n2 < e2 && 0 > g(x2, c2)) a2[d] = x2, a2[n2] = c2, d = n2;
        else break a;
      }
    }
    return b2;
  }
  function g(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback) k2(t2);
      else if (b2.startTime <= a2) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
    else {
      var b2 = h2(t2);
      null !== b2 && K2(H2, b2.startTime - a2);
    }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q3 = -1;
  function M2() {
    return exports.unstable_now() - Q3 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a2 = exports.unstable_now();
      Q3 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d + c2 : d) : c2 = d;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca$1 = schedulerExports;
function p$1(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da$1 = /* @__PURE__ */ new Set(), ea = {};
function fa$1(a2, b2) {
  ha$1(a2, b2);
  ha$1(a2 + "Capture", b2);
}
function ha$1(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++) da$1.add(b2[a2]);
}
var ia$1 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja$1 = Object.prototype.hasOwnProperty, ka$1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la$1 = {}, ma$1 = {};
function oa$1(a2) {
  if (ja$1.call(ma$1, a2)) return true;
  if (ja$1.call(la$1, a2)) return false;
  if (ka$1.test(a2)) return ma$1[a2] = true;
  la$1[a2] = true;
  return false;
}
function pa$1(a2, b2, c2, d) {
  if (null !== c2 && 0 === c2.type) return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d) return false;
      if (null !== c2) return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function qa$1(a2, b2, c2, d) {
  if (null === b2 || "undefined" === typeof b2 || pa$1(a2, b2, c2, d)) return true;
  if (d) return false;
  if (null !== c2) switch (c2.type) {
    case 3:
      return !b2;
    case 4:
      return false === b2;
    case 5:
      return isNaN(b2);
    case 6:
      return isNaN(b2) || 1 > b2;
  }
  return false;
}
function v$1(a2, b2, c2, d, e2, f2, g) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$1[a2] = new v$1(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$1[b2] = new v$1(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$1[a2] = new v$1(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra$1 = /[\-:]([a-z])/g;
function sa$1(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    ra$1,
    sa$1
  );
  z$1[b2] = new v$1(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(ra$1, sa$1);
  z$1[b2] = new v$1(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(ra$1, sa$1);
  z$1[b2] = new v$1(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$1.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$1[a2] = new v$1(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta(a2, b2, c2, d) {
  var e2 = z$1.hasOwnProperty(b2) ? z$1[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa$1(b2, c2, e2, d) && (c2 = null), d || null === e2 ? oa$1(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d ? a2.setAttributeNS(d, b2, c2) : a2.setAttribute(b2, c2)));
}
var ua$1 = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va$1 = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za$1 = Symbol.for("react.strict_mode"), Aa$1 = Symbol.for("react.profiler"), Ba$1 = Symbol.for("react.provider"), Ca$1 = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa$1 = Symbol.for("react.suspense_list"), Ga$1 = Symbol.for("react.memo"), Ha$1 = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja$1 = Symbol.iterator;
function Ka$1(a2) {
  if (null === a2 || "object" !== typeof a2) return null;
  a2 = Ja$1 && a2[Ja$1] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var A = Object.assign, La$1;
function Ma$1(a2) {
  if (void 0 === La$1) try {
    throw Error();
  } catch (c2) {
    var b2 = c2.stack.trim().match(/\n( *(at )?)/);
    La$1 = b2 && b2[1] || "";
  }
  return "\n" + La$1 + a2;
}
var Na$1 = false;
function Oa$1(a2, b2) {
  if (!a2 || Na$1) return "";
  Na$1 = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2) if (b2 = function() {
      throw Error();
    }, Object.defineProperty(b2.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b2, []);
      } catch (l2) {
        var d = l2;
      }
      Reflect.construct(a2, [], b2);
    } else {
      try {
        b2.call();
      } catch (l2) {
        d = l2;
      }
      a2.call(b2.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h2 = f2.length - 1; 1 <= g && 0 <= h2 && e2[g] !== f2[h2]; ) h2--;
      for (; 1 <= g && 0 <= h2; g--, h2--) if (e2[g] !== f2[h2]) {
        if (1 !== g || 1 !== h2) {
          do
            if (g--, h2--, 0 > h2 || e2[g] !== f2[h2]) {
              var k2 = "\n" + e2[g].replace(" at new ", " at ");
              a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
              return k2;
            }
          while (1 <= g && 0 <= h2);
        }
        break;
      }
    }
  } finally {
    Na$1 = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma$1(a2) : "";
}
function Pa$1(a2) {
  switch (a2.tag) {
    case 5:
      return Ma$1(a2.type);
    case 16:
      return Ma$1("Lazy");
    case 13:
      return Ma$1("Suspense");
    case 19:
      return Ma$1("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa$1(a2.type, false), a2;
    case 11:
      return a2 = Oa$1(a2.type.render, false), a2;
    case 1:
      return a2 = Oa$1(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa$1(a2) {
  if (null == a2) return null;
  if ("function" === typeof a2) return a2.displayName || a2.name || null;
  if ("string" === typeof a2) return a2;
  switch (a2) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa$1:
      return "Profiler";
    case za$1:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa$1:
      return "SuspenseList";
  }
  if ("object" === typeof a2) switch (a2.$$typeof) {
    case Ca$1:
      return (a2.displayName || "Context") + ".Consumer";
    case Ba$1:
      return (a2._context.displayName || "Context") + ".Provider";
    case Da:
      var b2 = a2.render;
      a2 = a2.displayName;
      a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      return a2;
    case Ga$1:
      return b2 = a2.displayName || null, null !== b2 ? b2 : Qa$1(a2.type) || "Memo";
    case Ha$1:
      b2 = a2._payload;
      a2 = a2._init;
      try {
        return Qa$1(a2(b2));
      } catch (c2) {
      }
  }
  return null;
}
function Ra(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa$1(b2);
    case 8:
      return b2 === za$1 ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2) return b2.displayName || b2.name || null;
      if ("string" === typeof b2) return b2;
  }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua$1(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a3) {
      d = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va$1(a2) {
  a2._valueTracker || (a2._valueTracker = Ua$1(a2));
}
function Wa$1(a2) {
  if (!a2) return false;
  var b2 = a2._valueTracker;
  if (!b2) return true;
  var c2 = b2.getValue();
  var d = "";
  a2 && (d = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa$1(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2) return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya$1(a2, b2) {
  var c2 = b2.checked;
  return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za$1(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a2, b2) {
  b2 = b2.checked;
  null != b2 && ta(a2, "checked", b2, false);
}
function bb(a2, b2) {
  ab(a2, b2);
  var c2 = Sa(b2.value), d = b2.type;
  if (null != c2) if ("number" === d) {
    if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
  } else a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d || "reset" === d) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function db(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d = b2.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b2.value && null !== b2.value)) return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function cb(a2, b2, c2) {
  if ("number" !== b2 || Xa$1(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a2, b2, c2, d) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++) e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML) throw Error(p$1(91));
  return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2) throw Error(p$1(92));
      if (eb(c2)) {
        if (1 < c2.length) throw Error(p$1(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d && (a2.defaultValue = "" + d);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb, nb = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d, e2);
    });
  } : a2;
}(function(a2, b2) {
  if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
    for (; b2.firstChild; ) a2.appendChild(b2.firstChild);
  }
});
function ob(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b2] = pb[a2];
  });
});
function rb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
}
function sb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
    var d = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d);
    "float" === c2 && (c2 = "cssFloat");
    d ? a2.setProperty(c2, e2) : a2[c2] = e2;
  }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a2, b2) {
  if (b2) {
    if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$1(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children) throw Error(p$1(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$1(61));
    }
    if (null != b2.style && "object" !== typeof b2.style) throw Error(p$1(62));
  }
}
function vb(a2, b2) {
  if (-1 === a2.indexOf("-")) return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb) throw Error(p$1(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2) for (a2 = 0; a2 < b2.length; a2++) Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b2, c2) {
  if (Ib) return a2(b2, c2);
  Ib = true;
  try {
    return Gb(a2, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2) return null;
  var d = Db(c2);
  if (null === d) return null;
  c2 = d[b2];
  a: switch (b2) {
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
      (d = !d.disabled) || (a2 = a2.type, d = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
      a2 = !d;
      break a;
    default:
      a2 = false;
  }
  if (a2) return null;
  if (c2 && "function" !== typeof c2) throw Error(p$1(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia$1) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a2) {
  Lb = false;
}
function Nb(a2, b2, c2, d, e2, f2, g, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
  Ob = true;
  Pb = a2;
} };
function Tb(a2, b2, c2, d, e2, f2, g, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b2, c2, d, e2, f2, g, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p$1(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate) for (; b2.return; ) b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2) return b2.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2) throw Error(p$1(188));
}
function Yb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Vb(a2);
    if (null === b2) throw Error(p$1(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d = b2; ; ) {
    var e2 = c2.return;
    if (null === e2) break;
    var f2 = e2.alternate;
    if (null === f2) {
      d = e2.return;
      if (null !== d) {
        c2 = d;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2) return Xb(e2), a2;
        if (f2 === d) return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$1(188));
    }
    if (c2.return !== d.return) c2 = e2, d = f2;
    else {
      for (var g = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g = true;
          c2 = e2;
          d = f2;
          break;
        }
        if (h2 === d) {
          g = true;
          d = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g = true;
            c2 = f2;
            d = e2;
            break;
          }
          if (h2 === d) {
            g = true;
            d = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g) throw Error(p$1(189));
      }
    }
    if (c2.alternate !== d) throw Error(p$1(190));
  }
  if (3 !== c2.tag) throw Error(p$1(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Zb(a2) {
  a2 = Yb(a2);
  return null !== a2 ? $b(a2) : null;
}
function $b(a2) {
  if (5 === a2.tag || 6 === a2.tag) return a2;
  for (a2 = a2.child; null !== a2; ) {
    var b2 = $b(a2);
    if (null !== b2) return b2;
    a2 = a2.sibling;
  }
  return null;
}
var ac$1 = ca$1.unstable_scheduleCallback, bc$1 = ca$1.unstable_cancelCallback, cc$1 = ca$1.unstable_shouldYield, dc$1 = ca$1.unstable_requestPaint, B$1 = ca$1.unstable_now, ec$1 = ca$1.unstable_getCurrentPriorityLevel, fc$1 = ca$1.unstable_ImmediatePriority, gc$1 = ca$1.unstable_UserBlockingPriority, hc$1 = ca$1.unstable_NormalPriority, ic = ca$1.unstable_LowPriority, jc = ca$1.unstable_IdlePriority, kc = null, lc = null;
function mc$1(a2) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
  } catch (b2) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc$1, pc = Math.log, qc = Math.LN2;
function nc$1(a2) {
  a2 >>>= 0;
  return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64, sc$1 = 4194304;
function tc$1(a2) {
  switch (a2 & -a2) {
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
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc$1(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2) return 0;
  var d = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g = c2 & 268435455;
  if (0 !== g) {
    var h2 = g & ~e2;
    0 !== h2 ? d = tc$1(h2) : (f2 &= g, 0 !== f2 && (d = tc$1(f2)));
  } else g = c2 & ~e2, 0 !== g ? d = tc$1(g) : 0 !== f2 && (d = tc$1(f2));
  if (0 === d) return 0;
  if (0 !== b2 && b2 !== d && 0 === (b2 & e2) && (e2 = d & -d, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
  0 !== (d & 4) && (d |= c2 & 16);
  b2 = a2.entangledLanes;
  if (0 !== b2) for (a2 = a2.entanglements, b2 &= d; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d |= a2[c2], b2 &= ~e2;
  return d;
}
function vc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h2 = 1 << g, k2 = e2[g];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d)) e2[g] = vc(h2, b2);
    } else k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a2);
  return b2;
}
function Ac(a2, b2, c2) {
  a2.pendingLanes |= b2;
  536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - oc(b2);
  a2[b2] = c2;
}
function Bc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d = 31 - oc(c2), e2 = 1 << d;
    e2 & b2 | a2[d] & b2 && (a2[d] |= b2);
    c2 &= ~e2;
  }
}
var C$1 = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec$1, Fc, Gc, Hc, Ic$1, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc$1(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc$1(a2, b2, c2, d, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2) return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
  a2.eventSystemFlags |= d;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function Uc(a2, b2, c2, d, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc$1(Lc, a2, b2, c2, d, e2), true;
    case "dragenter":
      return Mc = Tc$1(Mc, a2, b2, c2, d, e2), true;
    case "mouseover":
      return Nc = Tc$1(Nc, a2, b2, c2, d, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc$1(Oc.get(f2) || null, a2, b2, c2, d, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc$1(Pc.get(f2) || null, a2, b2, c2, d, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b2 = Wc(a2.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a2.blockedOn = b2;
          Ic$1(a2.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (null !== a2.blockedOn) return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null === c2) {
      c2 = a2.nativeEvent;
      var d = new c2.constructor(c2.type, c2);
      wb = d;
      c2.target.dispatchEvent(d);
      wb = null;
    } else return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a2, b2, c2) {
  Xc(a2) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca$1.unstable_scheduleCallback(ca$1.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b2(b3) {
    return ad(b3, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d = Kc[c2];
      d.blockedOn === a2 && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a2);
  null !== Mc && ad(Mc, a2);
  null !== Nc && ad(Nc, a2);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++) d = Qc[c2], d.blockedOn === a2 && (d.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua$1.ReactCurrentBatchConfig, dd = true;
function ed(a2, b2, c2, d) {
  var e2 = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 1, fd(a2, b2, c2, d);
  } finally {
    C$1 = e2, cd.transition = f2;
  }
}
function gd(a2, b2, c2, d) {
  var e2 = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 4, fd(a2, b2, c2, d);
  } finally {
    C$1 = e2, cd.transition = f2;
  }
}
function fd(a2, b2, c2, d) {
  if (dd) {
    var e2 = Yc(a2, b2, c2, d);
    if (null === e2) hd(a2, b2, d, id, c2), Sc$1(a2, d);
    else if (Uc(e2, a2, b2, c2, d)) d.stopPropagation();
    else if (Sc$1(a2, d), b2 & 4 && -1 < Rc.indexOf(a2)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec$1(f2);
        f2 = Yc(a2, b2, c2, d);
        null === f2 && hd(a2, b2, d, id, c2);
        if (f2 === e2) break;
        e2 = f2;
      }
      null !== e2 && d.stopPropagation();
    } else hd(a2, b2, d, null, c2);
  }
}
var id = null;
function Yc(a2, b2, c2, d) {
  id = null;
  a2 = xb(d);
  a2 = Wc(a2);
  if (null !== a2) if (b2 = Vb(a2), null === b2) a2 = null;
  else if (c2 = b2.tag, 13 === c2) {
    a2 = Wb(b2);
    if (null !== a2) return a2;
    a2 = null;
  } else if (3 === c2) {
    if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
    a2 = null;
  } else b2 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec$1()) {
        case fc$1:
          return 1;
        case gc$1:
          return 4;
        case hc$1:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a2, b2 = ld, c2 = b2.length, d, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++) ;
  var g = c2 - a2;
  for (d = 1; d <= g && b2[c2 - d] === e2[f2 - d]; d++) ;
  return md = e2.slice(a2, 1 < d ? 1 - d : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d, e2, f2, g) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c2 in a2) a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2) return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
  MozPrintableKey: "Unidentified"
}, Nd = {
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
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2) return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$1 = ia$1 && "CompositionEvent" in window, be$1 = null;
ia$1 && "documentMode" in document && (be$1 = document.documentMode);
var ce$1 = ia$1 && "TextEvent" in window && !be$1, de$1 = ia$1 && (!ae$1 || be$1 && 8 < be$1 && 11 >= be$1), ee$1 = String.fromCharCode(32), fe$1 = false;
function ge$1(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$1(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie$1 = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he$1(b2);
    case "keypress":
      if (32 !== b2.which) return null;
      fe$1 = true;
      return ee$1;
    case "textInput":
      return a2 = b2.data, a2 === ee$1 && fe$1 ? null : a2;
    default:
      return null;
  }
}
function ke$1(a2, b2) {
  if (ie$1) return "compositionend" === a2 || !ae$1 && ge$1(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie$1 = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length) return b2.char;
        if (b2.which) return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$1 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a2.type] : "textarea" === b2 ? true : false;
}
function ne$1(a2, b2, c2, d) {
  Eb(d);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d), a2.push({ event: c2, listeners: b2 }));
}
var pe$1 = null, qe$1 = null;
function re$1(a2) {
  se$1(a2, 0);
}
function te(a2) {
  var b2 = ue$1(a2);
  if (Wa$1(b2)) return a2;
}
function ve$1(a2, b2) {
  if ("change" === a2) return b2;
}
var we$1 = false;
if (ia$1) {
  var xe$1;
  if (ia$1) {
    var ye$1 = "oninput" in document;
    if (!ye$1) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye$1 = "function" === typeof ze.oninput;
    }
    xe$1 = ye$1;
  } else xe$1 = false;
  we$1 = xe$1 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$1() {
  pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), qe$1 = pe$1 = null);
}
function Be$1(a2) {
  if ("value" === a2.propertyName && te(qe$1)) {
    var b2 = [];
    ne$1(b2, qe$1, a2, xb(a2));
    Jb(re$1, b2);
  }
}
function Ce$1(a2, b2, c2) {
  "focusin" === a2 ? (Ae$1(), pe$1 = b2, qe$1 = c2, pe$1.attachEvent("onpropertychange", Be$1)) : "focusout" === a2 && Ae$1();
}
function De$1(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te(qe$1);
}
function Ee$1(a2, b2) {
  if ("click" === a2) return te(b2);
}
function Fe$1(a2, b2) {
  if ("input" === a2 || "change" === a2) return te(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He$1 = "function" === typeof Object.is ? Object.is : Ge;
function Ie$1(a2, b2) {
  if (He$1(a2, b2)) return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2) return false;
  var c2 = Object.keys(a2), d = Object.keys(b2);
  if (c2.length !== d.length) return false;
  for (d = 0; d < c2.length; d++) {
    var e2 = c2[d];
    if (!ja$1.call(b2, e2) || !He$1(a2[e2], b2[e2])) return false;
  }
  return true;
}
function Je$1(a2) {
  for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
  return a2;
}
function Ke(a2, b2) {
  var c2 = Je$1(a2);
  a2 = 0;
  for (var d; c2; ) {
    if (3 === c2.nodeType) {
      d = a2 + c2.textContent.length;
      if (a2 <= b2 && d >= b2) return { node: c2, offset: b2 - a2 };
      a2 = d;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je$1(c2);
  }
}
function Le$1(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le$1(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Me() {
  for (var a2 = window, b2 = Xa$1(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d) {
      c2 = false;
    }
    if (c2) a2 = b2.contentWindow;
    else break;
    b2 = Xa$1(a2.document);
  }
  return b2;
}
function Ne$1(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
function Oe(a2) {
  var b2 = Me(), c2 = a2.focusedElem, d = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le$1(c2.ownerDocument.documentElement, c2)) {
    if (null !== d && Ne$1(c2)) {
      if (b2 = d.start, a2 = d.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d.start, e2);
        d = void 0 === d.end ? f2 : Math.min(d.end, e2);
        !a2.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
        e2 = Ke(c2, f2);
        var g = Ke(
          c2,
          d
        );
        e2 && g && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g.node || a2.focusOffset !== g.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d ? (a2.addRange(b2), a2.extend(g.node, g.offset)) : (b2.setEnd(g.node, g.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++) a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe = ia$1 && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re$1 = null, Se$1 = null, Te$1 = false;
function Ue$1(a2, b2, c2) {
  var d = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te$1 || null == Qe || Qe !== Xa$1(d) || (d = Qe, "selectionStart" in d && Ne$1(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se$1 && Ie$1(Se$1, d) || (Se$1 = d, d = oe(Re$1, "onSelect"), 0 < d.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d }), b2.target = Qe)));
}
function Ve$1(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var We$1 = { animationend: Ve$1("Animation", "AnimationEnd"), animationiteration: Ve$1("Animation", "AnimationIteration"), animationstart: Ve$1("Animation", "AnimationStart"), transitionend: Ve$1("Transition", "TransitionEnd") }, Xe$1 = {}, Ye$1 = {};
ia$1 && (Ye$1 = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
function Ze$1(a2) {
  if (Xe$1[a2]) return Xe$1[a2];
  if (!We$1[a2]) return a2;
  var b2 = We$1[a2], c2;
  for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye$1) return Xe$1[a2] = b2[c2];
  return a2;
}
var $e$1 = Ze$1("animationend"), af = Ze$1("animationiteration"), bf = Ze$1("animationstart"), cf = Ze$1("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b2) {
  df.set(a2, b2);
  fa$1(b2, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$1, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha$1("onMouseEnter", ["mouseout", "mouseover"]);
ha$1("onMouseLeave", ["mouseout", "mouseover"]);
ha$1("onPointerEnter", ["pointerout", "pointerover"]);
ha$1("onPointerLeave", ["pointerout", "pointerover"]);
fa$1("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa$1("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa$1("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa$1("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa$1("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa$1("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b2, c2) {
  var d = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Ub(d, b2, void 0, a2);
  a2.currentTarget = null;
}
function se$1(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d = a2[c2], e2 = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b2) for (var g = d.length - 1; 0 <= g; g--) {
        var h2 = d[g], k2 = h2.instance, l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
      else for (g = 0; g < d.length; g++) {
        h2 = d[g];
        k2 = h2.instance;
        l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D$1(a2, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d = a2 + "__bubble";
  c2.has(d) || (pf(b2, a2, 2, false), c2.add(d));
}
function qf(a2, b2, c2) {
  var d = 0;
  b2 && (d |= 4);
  pf(c2, a2, d, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da$1.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
    });
    var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a2, b2, c2, d) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function hd(a2, b2, c2, d, e2) {
  var f2 = d;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d) a: for (; ; ) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h2 = d.stateNode.containerInfo;
      if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
      if (4 === g) for (g = d.return; null !== g; ) {
        var k2 = g.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
        }
        g = g.return;
      }
      for (; null !== h2; ) {
        g = Wc(h2);
        if (null === g) return;
        k2 = g.tag;
        if (5 === k2 || 6 === k2) {
          d = f2 = g;
          continue a;
        }
        h2 = h2.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function() {
    var d2 = f2, e3 = xb(c2), g2 = [];
    a: {
      var h3 = df.get(a2);
      if (void 0 !== h3) {
        var k3 = td, n2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$1:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g2.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue$1(k3);
            u2 = null == n2 ? h3 : ue$1(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g2, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d2 ? ue$1(d2) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve$1;
        else if (me(h3)) if (we$1) na = Fe$1;
        else {
          na = De$1;
          var xa = Ce$1;
        }
        else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$1);
        if (na && (na = na(a2, d2))) {
          ne$1(g2, na, c2, e3);
          break a;
        }
        xa && xa(a2, h3, d2);
        "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d2 ? ue$1(d2) : window;
      switch (a2) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re$1 = d2, Se$1 = null;
          break;
        case "focusout":
          Se$1 = Re$1 = Qe = null;
          break;
        case "mousedown":
          Te$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$1 = false;
          Ue$1(g2, c2, e3);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue$1(g2, c2, e3);
      }
      var $a2;
      if (ae$1) b: {
        switch (a2) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie$1 ? ge$1(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de$1 && "ko" !== c2.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g2.push({ event: ba, listeners: xa }), $a2 ? ba.data = $a2 : ($a2 = he$1(c2), null !== $a2 && (ba.data = $a2))));
      if ($a2 = ce$1 ? je(a2, c2) : ke$1(a2, c2)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a2);
    }
    se$1(g2, b2);
  });
}
function tf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe(a2, b2) {
  for (var c2 = b2 + "Capture", d = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d.push(tf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d;
}
function vf(a2) {
  if (null === a2) return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function wf(a2, b2, c2, d, e2) {
  for (var f2 = b2._reactName, g = []; null !== c2 && c2 !== d; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d) break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g.length && a2.push({ event: b2, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b2, c2) {
  b2 = zf(b2);
  if (zf(a2) !== b2 && c2) throw Error(p$1(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a2, b2) {
  return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b2) {
  var c2 = b2, d = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
      if (0 === d) {
        a2.removeChild(e2);
        bd(b2);
        return;
      }
      d--;
    } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2) break;
    if (8 === b2) {
      b2 = a2.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
      if ("/$" === b2) return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2) return a2;
        b2--;
      } else "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b2 = a2[Of];
  if (b2) return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
        if (c2 = a2[Of]) return c2;
        a2 = Mf(a2);
      }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue$1(a2) {
  if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
  throw Error(p$1(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a2) {
  return { current: a2 };
}
function E(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$1(a2, b2) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b2;
}
var Vf = {}, H$2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2) return Vf;
  var d = a2.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2) return d.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2) e2[f2] = b2[f2];
  d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function $f() {
  E(Wf);
  E(H$2);
}
function ag(a2, b2, c2) {
  if (H$2.current !== Vf) throw Error(p$1(168));
  G$1(H$2, b2);
  G$1(Wf, c2);
}
function bg(a2, b2, c2) {
  var d = a2.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c2;
  d = d.getChildContext();
  for (var e2 in d) if (!(e2 in b2)) throw Error(p$1(108, Ra(a2) || "Unknown", e2));
  return A({}, c2, d);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$2.current;
  G$1(H$2, a2);
  G$1(Wf, Wf.current);
  return true;
}
function dg(a2, b2, c2) {
  var d = a2.stateNode;
  if (!d) throw Error(p$1(169));
  c2 ? (a2 = bg(a2, b2, Xf), d.__reactInternalMemoizedMergedChildContext = a2, E(Wf), E(H$2), G$1(H$2, a2)) : E(Wf);
  G$1(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a2) {
  null === eg ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a2 = 0, b2 = C$1;
    try {
      var c2 = eg;
      for (C$1 = 1; a2 < c2.length; a2++) {
        var d = c2[a2];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a2 + 1)), ac$1(fc$1, jg), e2;
    } finally {
      C$1 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a2, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b2;
}
function ug(a2, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d = rg;
  a2 = sg;
  var e2 = 32 - oc(d) - 1;
  d &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g = e2 - e2 % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e2 -= g;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d;
    sg = f2 + a2;
  } else rg = 1 << f2 | c2 << e2 | d, sg = a2;
}
function vg(a2) {
  null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a2, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function Cg(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
}
function Eg(a2) {
  if (I) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a2, b2)) {
        if (Dg(a2)) throw Error(p$1(418));
        b2 = Lf(c2.nextSibling);
        var d = xg;
        b2 && Cg(a2, b2) ? Ag(d, c2) : (a2.flags = a2.flags & -4097 | 2, I = false, xg = a2);
      }
    } else {
      if (Dg(a2)) throw Error(p$1(418));
      a2.flags = a2.flags & -4097 | 2;
      I = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg) return false;
  if (!I) return Fg(a2), I = true, false;
  var b2;
  (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a2)) throw Hg(), Error(p$1(418));
    for (; b2; ) Ag(a2, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2) throw Error(p$1(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b2--;
          } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a2) {
  null === zg ? zg = [a2] : zg.push(a2);
}
var Kg = ua$1.ReactCurrentBatchConfig;
function Lg(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag) throw Error(p$1(309));
        var d = c2.stateNode;
      }
      if (!d) throw Error(p$1(147, a2));
      var e2 = d, f2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        null === a3 ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a2) throw Error(p$1(284));
    if (!c2._owner) throw Error(p$1(290, a2));
  }
  return a2;
}
function Mg(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$1(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function Ng(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function Og(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d2 = b3.deletions;
      null === d2 ? (b3.deletions = [c3], b3.flags |= 16) : d2.push(c3);
    }
  }
  function c2(c3, d2) {
    if (!a2) return null;
    for (; null !== d2; ) b2(c3, d2), d2 = d2.sibling;
    return null;
  }
  function d(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = Pg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d2) {
    b3.index = d2;
    if (!a2) return b3.flags |= 1048576, c3;
    d2 = b3.alternate;
    if (null !== d2) return d2 = d2.index, d2 < c3 ? (b3.flags |= 2, c3) : d2;
    b3.flags |= 2;
    return c3;
  }
  function g(b3) {
    a2 && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d2) {
    if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a3.mode, d2), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d2) {
    var f3 = c3.type;
    if (f3 === ya) return m2(a3, b3, c3.props.children, d2, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha$1 && Ng(f3) === b3.type)) return d2 = e2(b3, c3.props), d2.ref = Lg(a3, b3, c3), d2.return = a3, d2;
    d2 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d2);
    d2.ref = Lg(a3, b3, c3);
    d2.return = a3;
    return d2;
  }
  function l2(a3, b3, c3, d2) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a3.mode, d2), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d2, f3) {
    if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a3.mode, d2, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function q2(a3, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va$1:
          return c3 = Rg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b3), c3.return = a3, c3;
        case wa:
          return b3 = Sg(b3, a3.mode, c3), b3.return = a3, b3;
        case Ha$1:
          var d2 = b3._init;
          return q2(a3, d2(b3._payload), c3);
      }
      if (eb(b3) || Ka$1(b3)) return b3 = Tg(b3, a3.mode, c3, null), b3.return = a3, b3;
      Mg(a3, b3);
    }
    return null;
  }
  function r2(a3, b3, c3, d2) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a3, b3, "" + c3, d2);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va$1:
          return c3.key === e3 ? k2(a3, b3, c3, d2) : null;
        case wa:
          return c3.key === e3 ? l2(a3, b3, c3, d2) : null;
        case Ha$1:
          return e3 = c3._init, r2(
            a3,
            b3,
            e3(c3._payload),
            d2
          );
      }
      if (eb(c3) || Ka$1(c3)) return null !== e3 ? null : m2(a3, b3, c3, d2, null);
      Mg(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d2, e3) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a3 = a3.get(c3) || null, h2(b3, a3, "" + d2, e3);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va$1:
          return a3 = a3.get(null === d2.key ? c3 : d2.key) || null, k2(b3, a3, d2, e3);
        case wa:
          return a3 = a3.get(null === d2.key ? c3 : d2.key) || null, l2(b3, a3, d2, e3);
        case Ha$1:
          var f3 = d2._init;
          return y2(a3, b3, c3, f3(d2._payload), e3);
      }
      if (eb(d2) || Ka$1(d2)) return a3 = a3.get(c3) || null, m2(b3, a3, d2, e3, null);
      Mg(b3, d2);
    }
    return null;
  }
  function n2(e3, g2, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length) return c2(e3, u2), I && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e3, w2);
      return l3;
    }
    for (u2 = d(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I && tg(e3, w2);
    return l3;
  }
  function t2(e3, g2, h3, k3) {
    var l3 = Ka$1(h3);
    if ("function" !== typeof l3) throw Error(p$1(150));
    h3 = l3.call(h3);
    if (null == h3) throw Error(p$1(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a2 && m3 && null === t3.alternate && b2(e3, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c2(
      e3,
      m3
    ), I && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e3, w2);
      return l3;
    }
    for (m3 = d(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I && tg(e3, w2);
    return l3;
  }
  function J2(a3, d2, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va$1:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a3, l3.sibling);
                    d2 = e2(l3, f3.props.children);
                    d2.return = a3;
                    a3 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha$1 && Ng(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d2 = e2(l3, f3.props);
                  d2.ref = Lg(a3, l3, f3);
                  d2.return = a3;
                  a3 = d2;
                  break a;
                }
                c2(a3, l3);
                break;
              } else b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Tg(f3.props.children, a3.mode, h3, f3.key), d2.return = a3, a3 = d2) : (h3 = Rg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Lg(a3, d2, f3), h3.return = a3, a3 = h3);
          }
          return g(a3);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                c2(a3, d2.sibling);
                d2 = e2(d2, f3.children || []);
                d2.return = a3;
                a3 = d2;
                break a;
              } else {
                c2(a3, d2);
                break;
              }
              else b2(a3, d2);
              d2 = d2.sibling;
            }
            d2 = Sg(f3, a3.mode, h3);
            d2.return = a3;
            a3 = d2;
          }
          return g(a3);
        case Ha$1:
          return l3 = f3._init, J2(a3, d2, l3(f3._payload), h3);
      }
      if (eb(f3)) return n2(a3, d2, f3, h3);
      if (Ka$1(f3)) return t2(a3, d2, f3, h3);
      Mg(a3, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c2(a3, d2.sibling), d2 = e2(d2, f3), d2.return = a3, a3 = d2) : (c2(a3, d2), d2 = Qg(f3, a3.mode, h3), d2.return = a3, a3 = d2), g(a3)) : c2(a3, d2);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a2) {
  var b2 = Wg.current;
  E(Wg);
  a2._currentValue = b2;
}
function bh(a2, b2, c2) {
  for (; null !== a2; ) {
    var d = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d && (d.childLanes |= b2)) : null !== d && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
    if (a2 === c2) break;
    a2 = a2.return;
  }
}
function ch(a2, b2) {
  Xg = a2;
  Zg = Yg = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (dh = true), a2.firstContext = null);
}
function eh(a2) {
  var b2 = a2._currentValue;
  if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Yg) {
    if (null === Xg) throw Error(p$1(308));
    Yg = a2;
    Xg.dependencies = { lanes: 0, firstContext: a2 };
  } else Yg = Yg.next = a2;
  return b2;
}
var fh = null;
function gh(a2) {
  null === fh ? fh = [a2] : fh.push(a2);
}
function hh(a2, b2, c2, d) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return ih(a2, d);
}
function ih(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; ) a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var jh = false;
function kh(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function mh(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function nh(a2, b2, c2) {
  var d = a2.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K$1 & 2)) {
    var e2 = d.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d.pending = b2;
    return ih(a2, c2);
  }
  e2 = d.interleaved;
  null === e2 ? (b2.next = b2, gh(d)) : (b2.next = e2.next, e2.next = b2);
  d.interleaved = b2;
  return ih(a2, c2);
}
function oh(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d = b2.lanes;
    d &= a2.pendingLanes;
    c2 |= d;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
function ph(a2, b2) {
  var c2 = a2.updateQueue, d = a2.alternate;
  if (null !== d && (d = d.updateQueue, c2 === d)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g : f2 = f2.next = g;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else e2 = f2 = b2;
    c2 = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function qh(a2, b2, c2, d) {
  var e2 = a2.updateQueue;
  jh = false;
  var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a2.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h2 = h2.next;
      if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
      else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else null === f2 && (e2.shared.lanes = 0);
    rh |= g;
    a2.lanes = g;
    a2.memoizedState = q2;
  }
}
function sh(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2) for (b2 = 0; b2 < a2.length; b2++) {
    var d = a2[b2], e2 = d.callback;
    if (null !== e2) {
      d.callback = null;
      d = c2;
      if ("function" !== typeof e2) throw Error(p$1(191, e2));
      e2.call(d);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a2) {
  if (a2 === th) throw Error(p$1(174));
  return a2;
}
function yh(a2, b2) {
  G$1(wh, b2);
  G$1(vh, a2);
  G$1(uh, th);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
  }
  E(uh);
  G$1(uh, b2);
}
function zh() {
  E(uh);
  E(vh);
  E(wh);
}
function Ah(a2) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c2 = lb(b2, a2.type);
  b2 !== c2 && (G$1(vh, a2), G$1(uh, c2));
}
function Bh(a2) {
  vh.current === a2 && (E(uh), E(vh));
}
var L$1 = Uf(0);
function Ch(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128)) return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2) break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2) return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua$1.ReactCurrentDispatcher, Gh = ua$1.ReactCurrentBatchConfig, Hh = 0, M$1 = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P() {
  throw Error(p$1(321));
}
function Mh(a2, b2) {
  if (null === b2) return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++) if (!He$1(a2[c2], b2[c2])) return false;
  return true;
}
function Nh(a2, b2, c2, d, e2, f2) {
  Hh = f2;
  M$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
  a2 = c2(d, e2);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p$1(301));
      f2 += 1;
      O = N = null;
      b2.updateQueue = null;
      Fh.current = Qh;
      a2 = c2(d, e2);
    } while (Jh);
  }
  Fh.current = Rh;
  b2 = null !== N && null !== N.next;
  Hh = 0;
  O = N = M$1 = null;
  Ih = false;
  if (b2) throw Error(p$1(300));
  return a2;
}
function Sh() {
  var a2 = 0 !== Kh;
  Kh = 0;
  return a2;
}
function Th() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O ? M$1.memoizedState = O = a2 : O = O.next = a2;
  return O;
}
function Uh() {
  if (null === N) {
    var a2 = M$1.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else a2 = N.next;
  var b2 = null === O ? M$1.memoizedState : O.next;
  if (null !== b2) O = b2, N = a2;
  else {
    if (null === a2) throw Error(p$1(310));
    N = a2;
    a2 = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
    null === O ? M$1.memoizedState = O = a2 : O = O.next = a2;
  }
  return O;
}
function Vh(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function Wh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$1(311));
  c2.lastRenderedReducer = a2;
  var d = N, e2 = d.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g = e2.next;
      e2.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d = d.baseState;
    var h2 = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a2(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g = d) : k2 = k2.next = q2;
        M$1.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h2;
    He$1(d, b2.memoizedState) || (dh = true);
    b2.memoizedState = d;
    b2.baseState = g;
    b2.baseQueue = k2;
    c2.lastRenderedState = d;
  }
  a2 = c2.interleaved;
  if (null !== a2) {
    e2 = a2;
    do
      f2 = e2.lane, M$1.lanes |= f2, rh |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function Xh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$1(311));
  c2.lastRenderedReducer = a2;
  var d = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g = e2 = e2.next;
    do
      f2 = a2(f2, g.action), g = g.next;
    while (g !== e2);
    He$1(f2, b2.memoizedState) || (dh = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d];
}
function Yh() {
}
function Zh(a2, b2) {
  var c2 = M$1, d = Uh(), e2 = b2(), f2 = !He$1(d.memoizedState, e2);
  f2 && (d.memoizedState = e2, dh = true);
  d = d.queue;
  $h(ai$1.bind(null, c2, d, a2), [a2]);
  if (d.getSnapshot !== b2 || f2 || null !== O && O.memoizedState.tag & 1) {
    c2.flags |= 2048;
    bi$1(9, ci$1.bind(null, c2, d, e2, b2), void 0, null);
    if (null === Q$1) throw Error(p$1(349));
    0 !== (Hh & 30) || di(c2, b2, e2);
  }
  return e2;
}
function di(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = M$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$1.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
}
function ci$1(a2, b2, c2, d) {
  b2.value = c2;
  b2.getSnapshot = d;
  ei$1(b2) && fi(a2);
}
function ai$1(a2, b2, c2) {
  return c2(function() {
    ei$1(b2) && fi(a2);
  });
}
function ei$1(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !He$1(a2, c2);
  } catch (d) {
    return true;
  }
}
function fi(a2) {
  var b2 = ih(a2, 1);
  null !== b2 && gi$1(b2, a2, 1, -1);
}
function hi$1(a2) {
  var b2 = Th();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ii$1.bind(null, M$1, a2);
  return [b2.memoizedState, a2];
}
function bi$1(a2, b2, c2, d) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d, next: null };
  b2 = M$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$1.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d = c2.next, c2.next = a2, a2.next = d, b2.lastEffect = a2));
  return a2;
}
function ji$1() {
  return Uh().memoizedState;
}
function ki$1(a2, b2, c2, d) {
  var e2 = Th();
  M$1.flags |= a2;
  e2.memoizedState = bi$1(1 | b2, c2, void 0, void 0 === d ? null : d);
}
function li$1(a2, b2, c2, d) {
  var e2 = Uh();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== N) {
    var g = N.memoizedState;
    f2 = g.destroy;
    if (null !== d && Mh(d, g.deps)) {
      e2.memoizedState = bi$1(b2, c2, f2, d);
      return;
    }
  }
  M$1.flags |= a2;
  e2.memoizedState = bi$1(1 | b2, c2, f2, d);
}
function mi$1(a2, b2) {
  return ki$1(8390656, 8, a2, b2);
}
function $h(a2, b2) {
  return li$1(2048, 8, a2, b2);
}
function ni$1(a2, b2) {
  return li$1(4, 2, a2, b2);
}
function oi$1(a2, b2) {
  return li$1(4, 4, a2, b2);
}
function pi(a2, b2) {
  if ("function" === typeof b2) return a2 = a2(), b2(a2), function() {
    b2(null);
  };
  if (null !== b2 && void 0 !== b2) return a2 = a2(), b2.current = a2, function() {
    b2.current = null;
  };
}
function qi$1(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return li$1(4, 4, pi.bind(null, b2, a2), c2);
}
function ri$1() {
}
function si$1(a2, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d = c2.memoizedState;
  if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function ti$1(a2, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d = c2.memoizedState;
  if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function ui$1(a2, b2, c2) {
  if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
  He$1(c2, b2) || (c2 = yc(), M$1.lanes |= c2, rh |= c2, a2.baseState = true);
  return b2;
}
function vi$1(a2, b2) {
  var c2 = C$1;
  C$1 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a2(true);
  var d = Gh.transition;
  Gh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C$1 = c2, Gh.transition = d;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi$1(a2, b2, c2) {
  var d = yi$1(a2);
  c2 = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi$1(a2)) Ai$1(b2, c2);
  else if (c2 = hh(a2, b2, c2, d), null !== c2) {
    var e2 = R();
    gi$1(c2, a2, d, e2);
    Bi$1(c2, b2, d);
  }
}
function ii$1(a2, b2, c2) {
  var d = yi$1(a2), e2 = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi$1(a2)) Ai$1(b2, e2);
  else {
    var f2 = a2.alternate;
    if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
      var g = b2.lastRenderedState, h2 = f2(g, c2);
      e2.hasEagerState = true;
      e2.eagerState = h2;
      if (He$1(h2, g)) {
        var k2 = b2.interleaved;
        null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
        b2.interleaved = e2;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c2 = hh(a2, b2, e2, d);
    null !== c2 && (e2 = R(), gi$1(c2, a2, d, e2), Bi$1(c2, b2, d));
  }
}
function zi$1(a2) {
  var b2 = a2.alternate;
  return a2 === M$1 || null !== b2 && b2 === M$1;
}
function Ai$1(a2, b2) {
  Jh = Ih = true;
  var c2 = a2.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Bi$1(a2, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d = b2.lanes;
    d &= a2.pendingLanes;
    c2 |= d;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a2, b2) {
  Th().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: eh, useEffect: mi$1, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ki$1(
    4194308,
    4,
    pi.bind(null, b2, a2),
    c2
  );
}, useLayoutEffect: function(a2, b2) {
  return ki$1(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ki$1(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = Th();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d = Th();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d.memoizedState = d.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d.queue = a2;
  a2 = a2.dispatch = xi$1.bind(null, M$1, a2);
  return [d.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = Th();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: hi$1, useDebugValue: ri$1, useDeferredValue: function(a2) {
  return Th().memoizedState = a2;
}, useTransition: function() {
  var a2 = hi$1(false), b2 = a2[0];
  a2 = vi$1.bind(null, a2[1]);
  Th().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d = M$1, e2 = Th();
  if (I) {
    if (void 0 === c2) throw Error(p$1(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === Q$1) throw Error(p$1(349));
    0 !== (Hh & 30) || di(d, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  mi$1(ai$1.bind(
    null,
    d,
    f2,
    a2
  ), [a2]);
  d.flags |= 2048;
  bi$1(9, ci$1.bind(null, d, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = Th(), b2 = Q$1.identifierPrefix;
  if (I) {
    var c2 = sg;
    var d = rg;
    c2 = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Kh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si$1,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi$1,
  useInsertionEffect: ni$1,
  useLayoutEffect: oi$1,
  useMemo: ti$1,
  useReducer: Wh,
  useRef: ji$1,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri$1,
  useDeferredValue: function(a2) {
    var b2 = Uh();
    return ui$1(b2, N.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si$1, useContext: eh, useEffect: $h, useImperativeHandle: qi$1, useInsertionEffect: ni$1, useLayoutEffect: oi$1, useMemo: ti$1, useReducer: Xh, useRef: ji$1, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri$1, useDeferredValue: function(a2) {
  var b2 = Uh();
  return null === N ? b2.memoizedState = a2 : ui$1(b2, N.memoizedState, a2);
}, useTransition: function() {
  var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
  return [a2, b2];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci$1(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2) void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
function Di$1(a2, b2, c2, d) {
  b2 = a2.memoizedState;
  c2 = c2(d, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var Ei$1 = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d = R(), e2 = yi$1(a2), f2 = mh(d, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a2, f2, e2);
  null !== b2 && (gi$1(b2, a2, e2, d), oh(b2, a2, e2));
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d = R(), e2 = yi$1(a2), f2 = mh(d, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a2, f2, e2);
  null !== b2 && (gi$1(b2, a2, e2, d), oh(b2, a2, e2));
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = R(), d = yi$1(a2), e2 = mh(c2, d);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = nh(a2, e2, d);
  null !== b2 && (gi$1(b2, a2, d, c2), oh(b2, a2, d));
} };
function Fi$1(a2, b2, c2, d, e2, f2, g) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$1(c2, d) || !Ie$1(e2, f2) : true;
}
function Gi(a2, b2, c2) {
  var d = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H$2.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a2, e2) : Vf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Ei$1;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Hi$1(a2, b2, c2, d) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d);
  b2.state !== a2 && Ei$1.enqueueReplaceState(b2, b2.state, null);
}
function Ii$1(a2, b2, c2, d) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = {};
  kh(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H$2.current, e2.context = Yf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Di$1(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei$1.enqueueReplaceState(e2, e2.state, null), qh(a2, c2, e2, d), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
}
function Ji$1(a2, b2) {
  try {
    var c2 = "", d = b2;
    do
      c2 += Pa$1(d), d = d.return;
    while (d);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2, digest: null };
}
function Ki$1(a2, b2, c2) {
  return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Li$1(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Mi$1 = "function" === typeof WeakMap ? WeakMap : Map;
function Ni$1(a2, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d = b2.value;
  c2.callback = function() {
    Oi$1 || (Oi$1 = true, Pi$1 = d);
    Li$1(a2, b2);
  };
  return c2;
}
function Qi(a2, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  var d = a2.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e2 = b2.value;
    c2.payload = function() {
      return d(e2);
    };
    c2.callback = function() {
      Li$1(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Li$1(a2, b2);
    "function" !== typeof d && (null === Ri$1 ? Ri$1 = /* @__PURE__ */ new Set([this]) : Ri$1.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Si$1(a2, b2, c2) {
  var d = a2.pingCache;
  if (null === d) {
    d = a2.pingCache = new Mi$1();
    var e2 = /* @__PURE__ */ new Set();
    d.set(b2, e2);
  } else e2 = d.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ti$1.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Ui$1(a2) {
  do {
    var b2;
    if (b2 = 13 === a2.tag) b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2) return a2;
    a2 = a2.return;
  } while (null !== a2);
  return null;
}
function Vi$1(a2, b2, c2, d, e2) {
  if (0 === (a2.mode & 1)) return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Wi$1 = ua$1.ReactCurrentOwner, dh = false;
function Xi$1(a2, b2, c2, d) {
  b2.child = null === a2 ? Vg(b2, null, c2, d) : Ug(b2, a2.child, c2, d);
}
function Yi$1(a2, b2, c2, d, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  ch(b2, e2);
  d = Nh(a2, b2, c2, d, f2, e2);
  c2 = Sh();
  if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi$1(a2, b2, e2);
  I && c2 && vg(b2);
  b2.flags |= 1;
  Xi$1(a2, b2, d, e2);
  return b2.child;
}
function $i$1(a2, b2, c2, d, e2) {
  if (null === a2) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d, e2);
    a2 = Rg(c2.type, null, d, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if (0 === (a2.lanes & e2)) {
    var g = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie$1;
    if (c2(g, d) && a2.ref === b2.ref) return Zi$1(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = Pg(f2, d);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function bj(a2, b2, c2, d, e2) {
  if (null !== a2) {
    var f2 = a2.memoizedProps;
    if (Ie$1(f2, d) && a2.ref === b2.ref) if (dh = false, b2.pendingProps = d = f2, 0 !== (a2.lanes & e2)) 0 !== (a2.flags & 131072) && (dh = true);
    else return b2.lanes = a2.lanes, Zi$1(a2, b2, e2);
  }
  return cj(a2, b2, c2, d, e2);
}
function dj(a2, b2, c2) {
  var d = b2.pendingProps, e2 = d.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(ej, fj), fj |= c2;
  else {
    if (0 === (c2 & 1073741824)) return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(ej, fj), fj |= a2, null;
    b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d = null !== f2 ? f2.baseLanes : c2;
    G$1(ej, fj);
    fj |= d;
  }
  else null !== f2 ? (d = f2.baseLanes | c2, b2.memoizedState = null) : d = c2, G$1(ej, fj), fj |= d;
  Xi$1(a2, b2, e2, c2);
  return b2.child;
}
function gj(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a2, b2, c2, d, e2) {
  var f2 = Zf(c2) ? Xf : H$2.current;
  f2 = Yf(b2, f2);
  ch(b2, e2);
  c2 = Nh(a2, b2, c2, d, f2, e2);
  d = Sh();
  if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi$1(a2, b2, e2);
  I && d && vg(b2);
  b2.flags |= 1;
  Xi$1(a2, b2, c2, e2);
  return b2.child;
}
function hj(a2, b2, c2, d, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else f2 = false;
  ch(b2, e2);
  if (null === b2.stateNode) ij(a2, b2), Gi(b2, c2, d), Ii$1(b2, c2, d, e2), d = true;
  else if (null === a2) {
    var g = b2.stateNode, h2 = b2.memoizedProps;
    g.props = h2;
    var k2 = g.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H$2.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== d || k2 !== l2) && Hi$1(b2, g, d, l2);
    jh = false;
    var r2 = b2.memoizedState;
    g.state = r2;
    qh(b2, d, g, e2);
    k2 = b2.memoizedState;
    h2 !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di$1(b2, c2, m2, d), k2 = b2.memoizedState), (h2 = jh || Fi$1(b2, c2, h2, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h2) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), d = false);
  } else {
    g = b2.stateNode;
    lh(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Ci$1(b2.type, h2);
    g.props = l2;
    q2 = b2.pendingProps;
    r2 = g.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H$2.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi$1(b2, g, d, k2);
    jh = false;
    r2 = b2.memoizedState;
    g.state = r2;
    qh(b2, d, g, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di$1(b2, c2, y2, d), n2 = b2.memoizedState), (l2 = jh || Fi$1(b2, c2, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b2.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d = false);
  }
  return jj(a2, b2, c2, d, f2, e2);
}
function jj(a2, b2, c2, d, e2, f2) {
  gj(a2, b2);
  var g = 0 !== (b2.flags & 128);
  if (!d && !g) return e2 && dg(b2, c2, false), Zi$1(a2, b2, f2);
  d = b2.stateNode;
  Wi$1.current = b2;
  var h2 = g && "function" !== typeof c2.getDerivedStateFromError ? null : d.render();
  b2.flags |= 1;
  null !== a2 && g ? (b2.child = Ug(b2, a2.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi$1(a2, b2, h2, f2);
  b2.memoizedState = d.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function kj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
  yh(a2, b2.containerInfo);
}
function lj(a2, b2, c2, d, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Xi$1(a2, b2, c2, d);
  return b2.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function oj(a2, b2, c2) {
  var d = b2.pendingProps, e2 = L$1.current, f2 = false, g = 0 !== (b2.flags & 128), h2;
  (h2 = g) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  if (h2) f2 = true, b2.flags &= -129;
  else if (null === a2 || null !== a2.memoizedState) e2 |= 1;
  G$1(L$1, e2 & 1);
  if (null === a2) {
    Eg(b2);
    a2 = b2.memoizedState;
    if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g = d.children;
    a2 = d.fallback;
    return f2 ? (d = b2.mode, f2 = b2.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a2 = Tg(a2, d, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a2) : qj(b2, g);
  }
  e2 = a2.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a2, b2, g, d, h2, e2, c2);
  if (f2) {
    f2 = d.fallback;
    g = b2.mode;
    e2 = a2.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b2.child !== e2 ? (d = b2.child, d.childLanes = 0, d.pendingProps = k2, b2.deletions = null) : (d = Pg(e2, k2), d.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g, c2, null), f2.flags |= 2);
    f2.return = b2;
    d.return = b2;
    d.sibling = f2;
    b2.child = d;
    d = f2;
    f2 = b2.child;
    g = a2.child.memoizedState;
    g = null === g ? nj(c2) : { baseLanes: g.baseLanes | c2, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a2.childLanes & ~c2;
    b2.memoizedState = mj;
    return d;
  }
  f2 = a2.child;
  a2 = f2.sibling;
  d = Pg(f2, { mode: "visible", children: d.children });
  0 === (b2.mode & 1) && (d.lanes = c2);
  d.return = b2;
  d.sibling = null;
  null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
  b2.child = d;
  b2.memoizedState = null;
  return d;
}
function qj(a2, b2) {
  b2 = pj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function sj(a2, b2, c2, d) {
  null !== d && Jg(d);
  Ug(b2, a2.child, null, c2);
  a2 = qj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function rj(a2, b2, c2, d, e2, f2, g) {
  if (c2) {
    if (b2.flags & 256) return b2.flags &= -257, d = Ki$1(Error(p$1(422))), sj(a2, b2, g, d);
    if (null !== b2.memoizedState) return b2.child = a2.child, b2.flags |= 128, null;
    f2 = d.fallback;
    e2 = b2.mode;
    d = pj({ mode: "visible", children: d.children }, e2, 0, null);
    f2 = Tg(f2, e2, g, null);
    f2.flags |= 2;
    d.return = b2;
    f2.return = b2;
    d.sibling = f2;
    b2.child = d;
    0 !== (b2.mode & 1) && Ug(b2, a2.child, null, g);
    b2.child.memoizedState = nj(g);
    b2.memoizedState = mj;
    return f2;
  }
  if (0 === (b2.mode & 1)) return sj(a2, b2, g, null);
  if ("$!" === e2.data) {
    d = e2.nextSibling && e2.nextSibling.dataset;
    if (d) var h2 = d.dgst;
    d = h2;
    f2 = Error(p$1(419));
    d = Ki$1(f2, d, void 0);
    return sj(a2, b2, g, d);
  }
  h2 = 0 !== (g & a2.childLanes);
  if (dh || h2) {
    d = Q$1;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a2, e2), gi$1(d, a2, e2, -1));
    }
    tj();
    d = Ki$1(Error(p$1(421)));
    return sj(a2, b2, g, d);
  }
  if ("$?" === e2.data) return b2.flags |= 128, b2.child = a2.child, b2 = uj.bind(null, a2), e2._reactRetry = b2, null;
  a2 = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I = true;
  zg = null;
  null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
  b2 = qj(b2, d.children);
  b2.flags |= 4096;
  return b2;
}
function vj(a2, b2, c2) {
  a2.lanes |= b2;
  var d = a2.alternate;
  null !== d && (d.lanes |= b2);
  bh(a2.return, b2, c2);
}
function wj(a2, b2, c2, d, e2) {
  var f2 = a2.memoizedState;
  null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c2, f2.tailMode = e2);
}
function xj(a2, b2, c2) {
  var d = b2.pendingProps, e2 = d.revealOrder, f2 = d.tail;
  Xi$1(a2, b2, d.children, c2);
  d = L$1.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b2.child; null !== a2; ) {
      if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b2);
      else if (19 === a2.tag) vj(a2, c2, b2);
      else if (null !== a2.child) {
        a2.child.return = a2;
        a2 = a2.child;
        continue;
      }
      if (a2 === b2) break a;
      for (; null === a2.sibling; ) {
        if (null === a2.return || a2.return === b2) break a;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      a2 = a2.sibling;
    }
    d &= 1;
  }
  G$1(L$1, d);
  if (0 === (b2.mode & 1)) b2.memoizedState = null;
  else switch (e2) {
    case "forwards":
      c2 = b2.child;
      for (e2 = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e2 = c2), c2 = c2.sibling;
      c2 = e2;
      null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
      wj(b2, false, e2, c2, f2);
      break;
    case "backwards":
      c2 = null;
      e2 = b2.child;
      for (b2.child = null; null !== e2; ) {
        a2 = e2.alternate;
        if (null !== a2 && null === Ch(a2)) {
          b2.child = e2;
          break;
        }
        a2 = e2.sibling;
        e2.sibling = c2;
        c2 = e2;
        e2 = a2;
      }
      wj(b2, true, c2, null, f2);
      break;
    case "together":
      wj(b2, false, null, null, void 0);
      break;
    default:
      b2.memoizedState = null;
  }
  return b2.child;
}
function ij(a2, b2) {
  0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function Zi$1(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  rh |= b2.lanes;
  if (0 === (c2 & b2.childLanes)) return null;
  if (null !== a2 && b2.child !== a2.child) throw Error(p$1(153));
  if (null !== b2.child) {
    a2 = b2.child;
    c2 = Pg(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function yj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      kj(b2);
      Ig();
      break;
    case 5:
      Ah(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      yh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d = b2.type._context, e2 = b2.memoizedProps.value;
      G$1(Wg, d._currentValue);
      d._currentValue = e2;
      break;
    case 13:
      d = b2.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G$1(L$1, L$1.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes)) return oj(a2, b2, c2);
        G$1(L$1, L$1.current & 1);
        a2 = Zi$1(a2, b2, c2);
        return null !== a2 ? a2.sibling : null;
      }
      G$1(L$1, L$1.current & 1);
      break;
    case 19:
      d = 0 !== (c2 & b2.childLanes);
      if (0 !== (a2.flags & 128)) {
        if (d) return xj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$1(L$1, L$1.current);
      if (d) break;
      else return null;
    case 22:
    case 23:
      return b2.lanes = 0, dj(a2, b2, c2);
  }
  return Zi$1(a2, b2, c2);
}
var zj, Aj, Bj, Cj;
zj = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2) break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2) return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Aj = function() {
};
Bj = function(a2, b2, c2, d) {
  var e2 = a2.memoizedProps;
  if (e2 !== d) {
    a2 = b2.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya$1(a2, e2);
        d = Ya$1(a2, d);
        f2 = [];
        break;
      case "select":
        e2 = A({}, e2, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d = gb(a2, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a2.onclick = Bf);
    }
    ub(c2, d);
    var g;
    c2 = null;
    for (l2 in e2) if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
      var h2 = e2[l2];
      for (g in h2) h2.hasOwnProperty(g) && (c2 || (c2 = {}), c2[g] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
        for (g in h2) !h2.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c2 || (c2 = {}), c2[g] = "");
        for (g in k2) k2.hasOwnProperty(g) && h2[g] !== k2[g] && (c2 || (c2 = {}), c2[g] = k2[g]);
      } else c2 || (f2 || (f2 = []), f2.push(
        l2,
        c2
      )), c2 = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$1("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2) b2.flags |= 4;
  }
};
Cj = function(a2, b2, c2, d) {
  c2 !== d && (b2.flags |= 4);
};
function Dj(a2, b2) {
  if (!I) switch (a2.tailMode) {
    case "hidden":
      b2 = a2.tail;
      for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
      null === c2 ? a2.tail = null : c2.sibling = null;
      break;
    case "collapsed":
      c2 = a2.tail;
      for (var d = null; null !== c2; ) null !== c2.alternate && (d = c2), c2 = c2.sibling;
      null === d ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d.sibling = null;
  }
}
function S$1(a2) {
  var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d = 0;
  if (b2) for (var e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else for (e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d;
  a2.childLanes = c2;
  return b2;
}
function Ej(a2, b2, c2) {
  var d = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$1(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 3:
      d = b2.stateNode;
      zh();
      E(Wf);
      E(H$2);
      Eh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a2 || null === a2.child) Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a2, b2);
      S$1(b2);
      return null;
    case 5:
      Bh(b2);
      var e2 = xh(wh.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode) Bj(a2, b2, c2, d, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d) {
          if (null === b2.stateNode) throw Error(p$1(166));
          S$1(b2);
          return null;
        }
        a2 = xh(uh.current);
        if (Gg(b2)) {
          d = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d[Of] = b2;
          d[Pf] = f2;
          a2 = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$1("cancel", d);
              D$1("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$1("load", d);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++) D$1(lf[e2], d);
              break;
            case "source":
              D$1("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D$1(
                "error",
                d
              );
              D$1("load", d);
              break;
            case "details":
              D$1("toggle", d);
              break;
            case "input":
              Za$1(d, f2);
              D$1("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D$1("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D$1("invalid", d);
          }
          ub(c2, f2);
          e2 = null;
          for (var g in f2) if (f2.hasOwnProperty(g)) {
            var h2 = f2[g];
            "children" === g ? "string" === typeof h2 ? d.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
              d.textContent,
              h2,
              a2
            ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g) && null != h2 && "onScroll" === g && D$1("scroll", d);
          }
          switch (c2) {
            case "input":
              Va$1(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va$1(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e2;
          b2.updateQueue = d;
          null !== d && (b2.flags |= 4);
        } else {
          g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d.is ? a2 = g.createElement(c2, { is: d.is }) : (a2 = g.createElement(c2), "select" === c2 && (g = a2, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a2 = g.createElementNS(a2, c2);
          a2[Of] = b2;
          a2[Pf] = d;
          zj(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g = vb(c2, d);
            switch (c2) {
              case "dialog":
                D$1("cancel", a2);
                D$1("close", a2);
                e2 = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$1("load", a2);
                e2 = d;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++) D$1(lf[e2], a2);
                e2 = d;
                break;
              case "source":
                D$1("error", a2);
                e2 = d;
                break;
              case "img":
              case "image":
              case "link":
                D$1(
                  "error",
                  a2
                );
                D$1("load", a2);
                e2 = d;
                break;
              case "details":
                D$1("toggle", a2);
                e2 = d;
                break;
              case "input":
                Za$1(a2, d);
                e2 = Ya$1(a2, d);
                D$1("invalid", a2);
                break;
              case "option":
                e2 = d;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d.multiple };
                e2 = A({}, d, { value: void 0 });
                D$1("invalid", a2);
                break;
              case "textarea":
                hb(a2, d);
                e2 = gb(a2, d);
                D$1("invalid", a2);
                break;
              default:
                e2 = d;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2) if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$1("scroll", a2) : null != k2 && ta(a2, f2, k2, g));
            }
            switch (c2) {
              case "input":
                Va$1(a2);
                db(a2, d, false);
                break;
              case "textarea":
                Va$1(a2);
                jb(a2);
                break;
              case "option":
                null != d.value && a2.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a2.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a2, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a2,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a2.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$1(b2);
      return null;
    case 6:
      if (a2 && null != b2.stateNode) Cj(a2, b2, a2.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b2.stateNode) throw Error(p$1(166));
        c2 = xh(wh.current);
        xh(uh.current);
        if (Gg(b2)) {
          d = b2.stateNode;
          c2 = b2.memoizedProps;
          d[Of] = b2;
          if (f2 = d.nodeValue !== c2) {
            if (a2 = xg, null !== a2) switch (a2.tag) {
              case 3:
                Af(d.nodeValue, c2, 0 !== (a2.mode & 1));
                break;
              case 5:
                true !== a2.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c2, 0 !== (a2.mode & 1));
            }
          }
          f2 && (b2.flags |= 4);
        } else d = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d), d[Of] = b2, b2.stateNode = d;
      }
      S$1(b2);
      return null;
    case 13:
      E(L$1);
      d = b2.memoizedState;
      if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d && null !== d.dehydrated) {
          if (null === a2) {
            if (!f2) throw Error(p$1(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p$1(317));
            f2[Of] = b2;
          } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$1(b2);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
      d = null !== d;
      d !== (null !== a2 && null !== a2.memoizedState) && d && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (L$1.current & 1) ? 0 === T && (T = 3) : tj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$1(b2);
      return null;
    case 4:
      return zh(), Aj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$1(b2), null;
    case 10:
      return ah(b2.type._context), S$1(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 19:
      E(L$1);
      f2 = b2.memoizedState;
      if (null === f2) return S$1(b2), null;
      d = 0 !== (b2.flags & 128);
      g = f2.rendering;
      if (null === g) if (d) Dj(f2, false);
      else {
        if (0 !== T || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b2.child; null !== a2; ) {
          g = Ch(a2);
          if (null !== g) {
            b2.flags |= 128;
            Dj(f2, false);
            d = g.updateQueue;
            null !== d && (b2.updateQueue = d, b2.flags |= 4);
            b2.subtreeFlags = 0;
            d = c2;
            for (c2 = b2.child; null !== c2; ) f2 = c2, a2 = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a2 = g.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
            G$1(L$1, L$1.current & 1 | 2);
            return b2.child;
          }
          a2 = a2.sibling;
        }
        null !== f2.tail && B$1() > Gj && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
      }
      else {
        if (!d) if (a2 = Ch(g), null !== a2) {
          if (b2.flags |= 128, d = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S$1(b2), null;
        } else 2 * B$1() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c2 = f2.last, null !== c2 ? c2.sibling = g : b2.child = g, f2.last = g);
      }
      if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$1(), b2.sibling = null, c2 = L$1.current, G$1(L$1, d ? c2 & 1 | 2 : c2 & 1), b2;
      S$1(b2);
      return null;
    case 22:
    case 23:
      return Hj(), d = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d && (b2.flags |= 8192), d && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$1(156, b2.tag));
}
function Ij(a2, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return zh(), E(Wf), E(H$2), Eh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      E(L$1);
      a2 = b2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        if (null === b2.alternate) throw Error(p$1(340));
        Ig();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E(L$1), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b2.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U$1 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Lj(a2, b2) {
  var c2 = a2.ref;
  if (null !== c2) if ("function" === typeof c2) try {
    c2(null);
  } catch (d) {
    W(a2, b2, d);
  }
  else c2.current = null;
}
function Mj(a2, b2, c2) {
  try {
    c2();
  } catch (d) {
    W(a2, b2, d);
  }
}
var Nj = false;
function Oj(a2, b2) {
  Cf = dd;
  a2 = Me();
  if (Ne$1(a2)) {
    if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else a: {
      c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
      var d = c2.getSelection && c2.getSelection();
      if (d && 0 !== d.rangeCount) {
        c2 = d.anchorNode;
        var e2 = d.anchorOffset, f2 = d.focusNode;
        d = d.focusOffset;
        try {
          c2.nodeType, f2.nodeType;
        } catch (F2) {
          c2 = null;
          break a;
        }
        var g = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g + e2);
            q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
            3 === q2.nodeType && (g += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a2) break b;
            r2 === c2 && ++l2 === e2 && (h2 = g);
            r2 === f2 && ++m2 === d && (k2 = g);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
      } else c2 = null;
    }
    c2 = c2 || { start: 0, end: 0 };
  } else c2 = null;
  Df = { focusedElem: a2, selectionRange: c2 };
  dd = false;
  for (V = b2; null !== V; ) if (b2 = V, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2) a2.return = b2, V = a2;
  else for (; null !== V; ) {
    b2 = V;
    try {
      var n2 = b2.alternate;
      if (0 !== (b2.flags & 1024)) switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci$1(b2.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b2.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p$1(163));
      }
    } catch (F2) {
      W(b2, b2.return, F2);
    }
    a2 = b2.sibling;
    if (null !== a2) {
      a2.return = b2.return;
      V = a2;
      break;
    }
    V = b2.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a2, b2, c2) {
  var d = b2.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e2 = d = d.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Mj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d);
  }
}
function Qj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d = c2.create;
        c2.destroy = d();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Rj(a2) {
  var b2 = a2.ref;
  if (null !== b2) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    "function" === typeof b2 ? b2(a2) : b2.current = a2;
  }
}
function Sj(a2) {
  var b2 = a2.alternate;
  null !== b2 && (a2.alternate = null, Sj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Tj(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function Uj(a2) {
  a: for (; ; ) {
    for (; null === a2.sibling; ) {
      if (null === a2.return || Tj(a2.return)) return null;
      a2 = a2.return;
    }
    a2.sibling.return = a2.return;
    for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
      if (a2.flags & 2) continue a;
      if (null === a2.child || 4 === a2.tag) continue a;
      else a2.child.return = a2, a2 = a2.child;
    }
    if (!(a2.flags & 2)) return a2.stateNode;
  }
}
function Vj(a2, b2, c2) {
  var d = a2.tag;
  if (5 === d || 6 === d) a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d && (a2 = a2.child, null !== a2)) for (Vj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b2, c2), a2 = a2.sibling;
}
function Wj(a2, b2, c2) {
  var d = a2.tag;
  if (5 === d || 6 === d) a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d && (a2 = a2.child, null !== a2)) for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b2, c2), a2 = a2.sibling;
}
var X$1 = null, Xj = false;
function Yj(a2, b2, c2) {
  for (c2 = c2.child; null !== c2; ) Zj(a2, b2, c2), c2 = c2.sibling;
}
function Zj(a2, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c2);
  } catch (h2) {
  }
  switch (c2.tag) {
    case 5:
      U$1 || Lj(c2, b2);
    case 6:
      var d = X$1, e2 = Xj;
      X$1 = null;
      Yj(a2, b2, c2);
      X$1 = d;
      Xj = e2;
      null !== X$1 && (Xj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$1.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$1 && (Xj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$1, c2.stateNode));
      break;
    case 4:
      d = X$1;
      e2 = Xj;
      X$1 = c2.stateNode.containerInfo;
      Xj = true;
      Yj(a2, b2, c2);
      X$1 = d;
      Xj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$1 && (d = c2.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e2 = d = d.next;
        do {
          var f2 = e2, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Mj(c2, b2, g) : 0 !== (f2 & 4) && Mj(c2, b2, g));
          e2 = e2.next;
        } while (e2 !== d);
      }
      Yj(a2, b2, c2);
      break;
    case 1:
      if (!U$1 && (Lj(c2, b2), d = c2.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c2.memoizedProps, d.state = c2.memoizedState, d.componentWillUnmount();
      } catch (h2) {
        W(c2, b2, h2);
      }
      Yj(a2, b2, c2);
      break;
    case 21:
      Yj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$1 = (d = U$1) || null !== c2.memoizedState, Yj(a2, b2, c2), U$1 = d) : Yj(a2, b2, c2);
      break;
    default:
      Yj(a2, b2, c2);
  }
}
function ak(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Kj());
    b2.forEach(function(b3) {
      var d = bk.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d, d));
    });
  }
}
function ck(a2, b2) {
  var c2 = b2.deletions;
  if (null !== c2) for (var d = 0; d < c2.length; d++) {
    var e2 = c2[d];
    try {
      var f2 = a2, g = b2, h2 = g;
      a: for (; null !== h2; ) {
        switch (h2.tag) {
          case 5:
            X$1 = h2.stateNode;
            Xj = false;
            break a;
          case 3:
            X$1 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X$1 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h2 = h2.return;
      }
      if (null === X$1) throw Error(p$1(160));
      Zj(f2, g, e2);
      X$1 = null;
      Xj = false;
      var k2 = e2.alternate;
      null !== k2 && (k2.return = null);
      e2.return = null;
    } catch (l2) {
      W(e2, b2, l2);
    }
  }
  if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a2), b2 = b2.sibling;
}
function dk(a2, b2) {
  var c2 = a2.alternate, d = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b2, a2);
      ek(a2);
      if (d & 4) {
        try {
          Pj(3, a2, a2.return), Qj(3, a2);
        } catch (t2) {
          W(a2, a2.return, t2);
        }
        try {
          Pj(5, a2, a2.return);
        } catch (t2) {
          W(a2, a2.return, t2);
        }
      }
      break;
    case 1:
      ck(b2, a2);
      ek(a2);
      d & 512 && null !== c2 && Lj(c2, c2.return);
      break;
    case 5:
      ck(b2, a2);
      ek(a2);
      d & 512 && null !== c2 && Lj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W(a2, a2.return, t2);
        }
      }
      if (d & 4 && (e2 = a2.stateNode, null != e2)) {
        var f2 = a2.memoizedProps, g = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (null !== k2) try {
          "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
          vb(h2, g);
          var l2 = vb(h2, f2);
          for (g = 0; g < k2.length; g += 2) {
            var m2 = k2[g], q2 = k2[g + 1];
            "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
          }
          switch (h2) {
            case "input":
              bb(e2, f2);
              break;
            case "textarea":
              ib(e2, f2);
              break;
            case "select":
              var r2 = e2._wrapperState.wasMultiple;
              e2._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e2,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e2[Pf] = f2;
        } catch (t2) {
          W(a2, a2.return, t2);
        }
      }
      break;
    case 6:
      ck(b2, a2);
      ek(a2);
      if (d & 4) {
        if (null === a2.stateNode) throw Error(p$1(162));
        e2 = a2.stateNode;
        f2 = a2.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W(a2, a2.return, t2);
        }
      }
      break;
    case 3:
      ck(b2, a2);
      ek(a2);
      if (d & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
        bd(b2.containerInfo);
      } catch (t2) {
        W(a2, a2.return, t2);
      }
      break;
    case 4:
      ck(b2, a2);
      ek(a2);
      break;
    case 13:
      ck(b2, a2);
      ek(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B$1()));
      d & 4 && ak(a2);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a2.mode & 1 ? (U$1 = (l2 = U$1) || m2, ck(b2, a2), U$1 = l2) : ck(b2, a2);
      ek(a2);
      if (d & 8192) {
        l2 = null !== a2.memoizedState;
        if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V = a2, m2 = a2.child; null !== m2; ) {
          for (q2 = V = m2; null !== V; ) {
            r2 = V;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d = r2;
                  c2 = r2.return;
                  try {
                    b2 = d, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W(d, c2, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a2; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g));
              } catch (t2) {
                W(a2, a2.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W(a2, a2.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a2) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a2) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b2, a2);
      ek(a2);
      d & 4 && ak(a2);
      break;
    case 21:
      break;
    default:
      ck(
        b2,
        a2
      ), ek(a2);
  }
}
function ek(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; null !== c2; ) {
          if (Tj(c2)) {
            var d = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$1(160));
      }
      switch (d.tag) {
        case 5:
          var e2 = d.stateNode;
          d.flags & 32 && (ob(e2, ""), d.flags &= -33);
          var f2 = Uj(a2);
          Wj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h2 = Uj(a2);
          Vj(a2, h2, g);
          break;
        default:
          throw Error(p$1(161));
      }
    } catch (k2) {
      W(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function hk(a2, b2, c2) {
  V = a2;
  ik(a2);
}
function ik(a2, b2, c2) {
  for (var d = 0 !== (a2.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d) {
      var g = null !== e2.memoizedState || Jj;
      if (!g) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
        h2 = Jj;
        var l2 = U$1;
        Jj = g;
        if ((U$1 = k2) && !l2) for (V = e2; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g, V = k2) : jk(e2);
        for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
        V = e2;
        Jj = h2;
        U$1 = l2;
      }
      kk(a2);
    } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : kk(a2);
  }
}
function kk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            U$1 || Qj(5, b2);
            break;
          case 1:
            var d = b2.stateNode;
            if (b2.flags & 4 && !U$1) if (null === c2) d.componentDidMount();
            else {
              var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci$1(b2.type, c2.memoizedProps);
              d.componentDidUpdate(e2, c2.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b2.updateQueue;
            null !== f2 && sh(b2, f2, d);
            break;
          case 3:
            var g = b2.updateQueue;
            if (null !== g) {
              c2 = null;
              if (null !== b2.child) switch (b2.child.tag) {
                case 5:
                  c2 = b2.child.stateNode;
                  break;
                case 1:
                  c2 = b2.child.stateNode;
              }
              sh(b2, g, c2);
            }
            break;
          case 5:
            var h2 = b2.stateNode;
            if (null === c2 && b2.flags & 4) {
              c2 = h2;
              var k2 = b2.memoizedProps;
              switch (b2.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c2.focus();
                  break;
                case "img":
                  k2.src && (c2.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b2.memoizedState) {
              var l2 = b2.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p$1(163));
        }
        U$1 || b2.flags & 512 && Rj(b2);
      } catch (r2) {
        W(b2, b2.return, r2);
      }
    }
    if (b2 === a2) {
      V = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function gk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    if (b2 === a2) {
      V = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function jk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Qj(4, b2);
          } catch (k2) {
            W(b2, c2, k2);
          }
          break;
        case 1:
          var d = b2.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e2 = b2.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W(b2, f2, k2);
          }
          break;
        case 5:
          var g = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W(b2, g, k2);
          }
      }
    } catch (k2) {
      W(b2, b2.return, k2);
    }
    if (b2 === a2) {
      V = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V = h2;
      break;
    }
    V = b2.return;
  }
}
var lk = Math.ceil, mk = ua$1.ReactCurrentDispatcher, nk = ua$1.ReactCurrentOwner, ok = ua$1.ReactCurrentBatchConfig, K$1 = 0, Q$1 = null, Y$1 = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi$1 = false, Pi$1 = null, Ri$1 = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R() {
  return 0 !== (K$1 & 6) ? B$1() : -1 !== Ak ? Ak : Ak = B$1();
}
function yi$1(a2) {
  if (0 === (a2.mode & 1)) return 1;
  if (0 !== (K$1 & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a2 = C$1;
  if (0 !== a2) return a2;
  a2 = window.event;
  a2 = void 0 === a2 ? 16 : jd(a2.type);
  return a2;
}
function gi$1(a2, b2, c2, d) {
  if (50 < yk) throw yk = 0, zk = null, Error(p$1(185));
  Ac(a2, c2, d);
  if (0 === (K$1 & 2) || a2 !== Q$1) a2 === Q$1 && (0 === (K$1 & 2) && (qk |= c2), 4 === T && Ck(a2, Z)), Dk(a2, d), 1 === c2 && 0 === K$1 && 0 === (b2.mode & 1) && (Gj = B$1() + 500, fg && jg());
}
function Dk(a2, b2) {
  var c2 = a2.callbackNode;
  wc(a2, b2);
  var d = uc$1(a2, a2 === Q$1 ? Z : 0);
  if (0 === d) null !== c2 && bc$1(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d & -d, a2.callbackPriority !== b2) {
    null != c2 && bc$1(c2);
    if (1 === b2) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
      0 === (K$1 & 6) && jg();
    }), c2 = null;
    else {
      switch (Dc(d)) {
        case 1:
          c2 = fc$1;
          break;
        case 4:
          c2 = gc$1;
          break;
        case 16:
          c2 = hc$1;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc$1;
      }
      c2 = Fk(c2, Gk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Gk(a2, b2) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K$1 & 6)) throw Error(p$1(327));
  var c2 = a2.callbackNode;
  if (Hk() && a2.callbackNode !== c2) return null;
  var d = uc$1(a2, a2 === Q$1 ? Z : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a2.expiredLanes) || b2) b2 = Ik(a2, d);
  else {
    b2 = d;
    var e2 = K$1;
    K$1 |= 2;
    var f2 = Jk();
    if (Q$1 !== a2 || Z !== b2) uk = null, Gj = B$1() + 500, Kk(a2, b2);
    do
      try {
        Lk();
        break;
      } catch (h2) {
        Mk(a2, h2);
      }
    while (1);
    $g();
    mk.current = f2;
    K$1 = e2;
    null !== Y$1 ? b2 = 0 : (Q$1 = null, Z = 0, b2 = T);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a2), 0 !== e2 && (d = e2, b2 = Nk(a2, e2)));
    if (1 === b2) throw c2 = pk, Kk(a2, 0), Ck(a2, d), Dk(a2, B$1()), c2;
    if (6 === b2) Ck(a2, d);
    else {
      e2 = a2.current.alternate;
      if (0 === (d & 30) && !Ok(e2) && (b2 = Ik(a2, d), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d = f2, b2 = Nk(a2, f2))), 1 === b2)) throw c2 = pk, Kk(a2, 0), Ck(a2, d), Dk(a2, B$1()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$1(345));
        case 2:
          Pk(a2, tk, uk);
          break;
        case 3:
          Ck(a2, d);
          if ((d & 130023424) === d && (b2 = fk + 500 - B$1(), 10 < b2)) {
            if (0 !== uc$1(a2, 0)) break;
            e2 = a2.suspendedLanes;
            if ((e2 & d) !== d) {
              R();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b2);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 4:
          Ck(a2, d);
          if ((d & 4194240) === d) break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b2[g];
            g > e2 && (e2 = g);
            d &= ~f2;
          }
          d = e2;
          d = B$1() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
          if (10 < d) {
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 5:
          Pk(a2, tk, uk);
          break;
        default:
          throw Error(p$1(329));
      }
    }
  }
  Dk(a2, B$1());
  return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
}
function Nk(a2, b2) {
  var c2 = sk;
  a2.current.memoizedState.isDehydrated && (Kk(a2, b2).flags |= 256);
  a2 = Ik(a2, b2);
  2 !== a2 && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
  return a2;
}
function Fj(a2) {
  null === tk ? tk = a2 : tk.push.apply(tk, a2);
}
function Ok(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d = 0; d < c2.length; d++) {
        var e2 = c2[d], f2 = e2.getSnapshot;
        e2 = e2.value;
        try {
          if (!He$1(f2(), e2)) return false;
        } catch (g) {
          return false;
        }
      }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
    else {
      if (b2 === a2) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2) return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Ck(a2, b2) {
  b2 &= ~rk;
  b2 &= ~qk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d;
  }
}
function Ek(a2) {
  if (0 !== (K$1 & 6)) throw Error(p$1(327));
  Hk();
  var b2 = uc$1(a2, 0);
  if (0 === (b2 & 1)) return Dk(a2, B$1()), null;
  var c2 = Ik(a2, b2);
  if (0 !== a2.tag && 2 === c2) {
    var d = xc(a2);
    0 !== d && (b2 = d, c2 = Nk(a2, d));
  }
  if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b2), Dk(a2, B$1()), c2;
  if (6 === c2) throw Error(p$1(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Pk(a2, tk, uk);
  Dk(a2, B$1());
  return null;
}
function Qk(a2, b2) {
  var c2 = K$1;
  K$1 |= 1;
  try {
    return a2(b2);
  } finally {
    K$1 = c2, 0 === K$1 && (Gj = B$1() + 500, fg && jg());
  }
}
function Rk(a2) {
  null !== wk && 0 === wk.tag && 0 === (K$1 & 6) && Hk();
  var b2 = K$1;
  K$1 |= 1;
  var c2 = ok.transition, d = C$1;
  try {
    if (ok.transition = null, C$1 = 1, a2) return a2();
  } finally {
    C$1 = d, ok.transition = c2, K$1 = b2, 0 === (K$1 & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E(ej);
}
function Kk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
  if (null !== Y$1) for (c2 = Y$1.return; null !== c2; ) {
    var d = c2;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        zh();
        E(Wf);
        E(H$2);
        Eh();
        break;
      case 5:
        Bh(d);
        break;
      case 4:
        zh();
        break;
      case 13:
        E(L$1);
        break;
      case 19:
        E(L$1);
        break;
      case 10:
        ah(d.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c2 = c2.return;
  }
  Q$1 = a2;
  Y$1 = a2 = Pg(a2.current, null);
  Z = fj = b2;
  T = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d = c2.interleaved, null !== d) {
      c2.interleaved = null;
      var e2 = d.next, f2 = c2.pending;
      if (null !== f2) {
        var g = f2.next;
        f2.next = e2;
        d.next = g;
      }
      c2.pending = d;
    }
    fh = null;
  }
  return a2;
}
function Mk(a2, b2) {
  do {
    var c2 = Y$1;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d = M$1.memoizedState; null !== d; ) {
          var e2 = d.queue;
          null !== e2 && (e2.pending = null);
          d = d.next;
        }
        Ih = false;
      }
      Hh = 0;
      O = N = M$1 = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c2 || null === c2.return) {
        T = 1;
        pk = b2;
        Y$1 = null;
        break;
      }
      a: {
        var f2 = a2, g = c2.return, h2 = c2, k2 = b2;
        b2 = Z;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui$1(g);
          if (null !== y2) {
            y2.flags &= -257;
            Vi$1(y2, g, h2, f2, b2);
            y2.mode & 1 && Si$1(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Si$1(f2, l2, b2);
              tj();
              break a;
            }
            k2 = Error(p$1(426));
          }
        } else if (I && h2.mode & 1) {
          var J2 = Ui$1(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi$1(J2, g, h2, f2, b2);
            Jg(Ji$1(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ji$1(k2, h2);
        4 !== T && (T = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Ni$1(f2, k2, b2);
              ph(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri$1 || !Ri$1.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Qi(f2, h2, b2);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c2);
    } catch (na) {
      b2 = na;
      Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a2 = mk.current;
  mk.current = Rh;
  return null === a2 ? Rh : a2;
}
function tj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === Q$1 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q$1, Z);
}
function Ik(a2, b2) {
  var c2 = K$1;
  K$1 |= 2;
  var d = Jk();
  if (Q$1 !== a2 || Z !== b2) uk = null, Kk(a2, b2);
  do
    try {
      Tk();
      break;
    } catch (e2) {
      Mk(a2, e2);
    }
  while (1);
  $g();
  K$1 = c2;
  mk.current = d;
  if (null !== Y$1) throw Error(p$1(261));
  Q$1 = null;
  Z = 0;
  return T;
}
function Tk() {
  for (; null !== Y$1; ) Uk(Y$1);
}
function Lk() {
  for (; null !== Y$1 && !cc$1(); ) Uk(Y$1);
}
function Uk(a2) {
  var b2 = Vk(a2.alternate, a2, fj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Sk(a2) : Y$1 = b2;
  nk.current = null;
}
function Sk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Ej(c2, b2, fj), null !== c2) {
        Y$1 = c2;
        return;
      }
    } else {
      c2 = Ij(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y$1 = c2;
        return;
      }
      if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T = 6;
        Y$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$1 = b2;
      return;
    }
    Y$1 = b2 = a2;
  } while (null !== b2);
  0 === T && (T = 5);
}
function Pk(a2, b2, c2) {
  var d = C$1, e2 = ok.transition;
  try {
    ok.transition = null, C$1 = 1, Wk(a2, b2, c2, d);
  } finally {
    ok.transition = e2, C$1 = d;
  }
  return null;
}
function Wk(a2, b2, c2, d) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K$1 & 6)) throw Error(p$1(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (null === c2) return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current) throw Error(p$1(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a2, f2);
  a2 === Q$1 && (Y$1 = Q$1 = null, Z = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc$1, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g = C$1;
    C$1 = 1;
    var h2 = K$1;
    K$1 |= 4;
    nk.current = null;
    Oj(a2, c2);
    dk(c2, a2);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c2;
    hk(c2);
    dc$1();
    K$1 = h2;
    C$1 = g;
    ok.transition = f2;
  } else a2.current = c2;
  vk && (vk = false, wk = a2, xk = e2);
  f2 = a2.pendingLanes;
  0 === f2 && (Ri$1 = null);
  mc$1(c2.stateNode);
  Dk(a2, B$1());
  if (null !== b2) for (d = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Oi$1) throw Oi$1 = false, a2 = Pi$1, Pi$1 = null, a2;
  0 !== (xk & 1) && 0 !== a2.tag && Hk();
  f2 = a2.pendingLanes;
  0 !== (f2 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a2 = Dc(xk), b2 = ok.transition, c2 = C$1;
    try {
      ok.transition = null;
      C$1 = 16 > a2 ? 16 : a2;
      if (null === wk) var d = false;
      else {
        a2 = wk;
        wk = null;
        xk = 0;
        if (0 !== (K$1 & 6)) throw Error(p$1(331));
        var e2 = K$1;
        K$1 |= 4;
        for (V = a2.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V = q2;
                  else for (; null !== V; ) {
                    m2 = V;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V = r2;
                      break;
                    }
                    V = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
          else b: for (; null !== V; ) {
            f2 = V;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V = x2;
              break b;
            }
            V = f2.return;
          }
        }
        var w2 = a2.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
          else b: for (g = w2; null !== V; ) {
            h2 = V;
            if (0 !== (h2.flags & 2048)) try {
              switch (h2.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h2);
              }
            } catch (na) {
              W(h2, h2.return, na);
            }
            if (h2 === g) {
              V = null;
              break b;
            }
            var F2 = h2.sibling;
            if (null !== F2) {
              F2.return = h2.return;
              V = F2;
              break b;
            }
            V = h2.return;
          }
        }
        K$1 = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a2);
        } catch (na) {
        }
        d = true;
      }
      return d;
    } finally {
      C$1 = c2, ok.transition = b2;
    }
  }
  return false;
}
function Xk(a2, b2, c2) {
  b2 = Ji$1(c2, b2);
  b2 = Ni$1(a2, b2, 1);
  a2 = nh(a2, b2, 1);
  b2 = R();
  null !== a2 && (Ac(a2, 1, b2), Dk(a2, b2));
}
function W(a2, b2, c2) {
  if (3 === a2.tag) Xk(a2, a2, c2);
  else for (; null !== b2; ) {
    if (3 === b2.tag) {
      Xk(b2, a2, c2);
      break;
    } else if (1 === b2.tag) {
      var d = b2.stateNode;
      if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri$1 || !Ri$1.has(d))) {
        a2 = Ji$1(c2, a2);
        a2 = Qi(b2, a2, 1);
        b2 = nh(b2, a2, 1);
        a2 = R();
        null !== b2 && (Ac(b2, 1, a2), Dk(b2, a2));
        break;
      }
    }
    b2 = b2.return;
  }
}
function Ti$1(a2, b2, c2) {
  var d = a2.pingCache;
  null !== d && d.delete(b2);
  b2 = R();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  Q$1 === a2 && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B$1() - fk ? Kk(a2, 0) : rk |= c2);
  Dk(a2, b2);
}
function Yk(a2, b2) {
  0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc$1, sc$1 <<= 1, 0 === (sc$1 & 130023424) && (sc$1 = 4194304)));
  var c2 = R();
  a2 = ih(a2, b2);
  null !== a2 && (Ac(a2, b2, c2), Dk(a2, c2));
}
function uj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Yk(a2, c2);
}
function bk(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d = a2.stateNode;
      var e2 = a2.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d = a2.stateNode;
      break;
    default:
      throw Error(p$1(314));
  }
  null !== d && d.delete(b2);
  Yk(a2, c2);
}
var Vk;
Vk = function(a2, b2, c2) {
  if (null !== a2) if (a2.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a2, b2, c2);
    dh = 0 !== (a2.flags & 131072) ? true : false;
  }
  else dh = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d = b2.type;
      ij(a2, b2);
      a2 = b2.pendingProps;
      var e2 = Yf(b2, H$2.current);
      ch(b2, c2);
      e2 = Nh(null, b2, d, a2, e2, c2);
      var f2 = Sh();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei$1, b2.stateNode = e2, e2._reactInternals = b2, Ii$1(b2, d, a2, c2), b2 = jj(null, b2, d, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Xi$1(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d = b2.elementType;
      a: {
        ij(a2, b2);
        a2 = b2.pendingProps;
        e2 = d._init;
        d = e2(d._payload);
        b2.type = d;
        e2 = b2.tag = Zk(d);
        a2 = Ci$1(d, a2);
        switch (e2) {
          case 0:
            b2 = cj(null, b2, d, a2, c2);
            break a;
          case 1:
            b2 = hj(null, b2, d, a2, c2);
            break a;
          case 11:
            b2 = Yi$1(null, b2, d, a2, c2);
            break a;
          case 14:
            b2 = $i$1(null, b2, d, Ci$1(d.type, a2), c2);
            break a;
        }
        throw Error(p$1(
          306,
          d,
          ""
        ));
      }
      return b2;
    case 0:
      return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci$1(d, e2), cj(a2, b2, d, e2, c2);
    case 1:
      return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci$1(d, e2), hj(a2, b2, d, e2, c2);
    case 3:
      a: {
        kj(b2);
        if (null === a2) throw Error(p$1(387));
        d = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        lh(a2, b2);
        qh(b2, d, null, c2);
        var g = b2.memoizedState;
        d = g.element;
        if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
          e2 = Ji$1(Error(p$1(423)), b2);
          b2 = lj(a2, b2, d, c2, e2);
          break a;
        } else if (d !== e2) {
          e2 = Ji$1(Error(p$1(424)), b2);
          b2 = lj(a2, b2, d, c2, e2);
          break a;
        } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Vg(b2, null, d, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d === e2) {
            b2 = Zi$1(a2, b2, c2);
            break a;
          }
          Xi$1(a2, b2, d, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Ah(b2), null === a2 && Eg(b2), d = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b2.flags |= 32), gj(a2, b2), Xi$1(a2, b2, g, c2), b2.child;
    case 6:
      return null === a2 && Eg(b2), null;
    case 13:
      return oj(a2, b2, c2);
    case 4:
      return yh(b2, b2.stateNode.containerInfo), d = b2.pendingProps, null === a2 ? b2.child = Ug(b2, null, d, c2) : Xi$1(a2, b2, d, c2), b2.child;
    case 11:
      return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci$1(d, e2), Yi$1(a2, b2, d, e2, c2);
    case 7:
      return Xi$1(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Xi$1(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Xi$1(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g = e2.value;
        G$1(Wg, d._currentValue);
        d._currentValue = g;
        if (null !== f2) if (He$1(f2.value, g)) {
          if (f2.children === e2.children && !Wf.current) {
            b2 = Zi$1(a2, b2, c2);
            break a;
          }
        } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
          var h2 = f2.dependencies;
          if (null !== h2) {
            g = f2.child;
            for (var k2 = h2.firstContext; null !== k2; ) {
              if (k2.context === d) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c2 & -c2);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c2;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c2);
                bh(
                  f2.return,
                  c2,
                  b2
                );
                h2.lanes |= c2;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g = f2.type === b2.type ? null : f2.child;
          else if (18 === f2.tag) {
            g = f2.return;
            if (null === g) throw Error(p$1(341));
            g.lanes |= c2;
            h2 = g.alternate;
            null !== h2 && (h2.lanes |= c2);
            bh(g, c2, b2);
            g = f2.sibling;
          } else g = f2.child;
          if (null !== g) g.return = f2;
          else for (g = f2; null !== g; ) {
            if (g === b2) {
              g = null;
              break;
            }
            f2 = g.sibling;
            if (null !== f2) {
              f2.return = g.return;
              g = f2;
              break;
            }
            g = g.return;
          }
          f2 = g;
        }
        Xi$1(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d = d(e2), b2.flags |= 1, Xi$1(a2, b2, d, c2), b2.child;
    case 14:
      return d = b2.type, e2 = Ci$1(d, b2.pendingProps), e2 = Ci$1(d.type, e2), $i$1(a2, b2, d, e2, c2);
    case 15:
      return bj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci$1(d, e2), ij(a2, b2), b2.tag = 1, Zf(d) ? (a2 = true, cg(b2)) : a2 = false, ch(b2, c2), Gi(b2, d, e2), Ii$1(b2, d, e2, c2), jj(null, b2, d, true, a2, c2);
    case 19:
      return xj(a2, b2, c2);
    case 22:
      return dj(a2, b2, c2);
  }
  throw Error(p$1(156, b2.tag));
};
function Fk(a2, b2) {
  return ac$1(a2, b2);
}
function $k(a2, b2, c2, d) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b2, c2, d) {
  return new $k(a2, b2, c2, d);
}
function aj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Zk(a2) {
  if ("function" === typeof a2) return aj(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Da) return 11;
    if (a2 === Ga$1) return 14;
  }
  return 2;
}
function Pg(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function Rg(a2, b2, c2, d, e2, f2) {
  var g = 2;
  d = a2;
  if ("function" === typeof a2) aj(a2) && (g = 1);
  else if ("string" === typeof a2) g = 5;
  else a: switch (a2) {
    case ya:
      return Tg(c2.children, e2, f2, b2);
    case za$1:
      g = 8;
      e2 |= 8;
      break;
    case Aa$1:
      return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa$1, a2.lanes = f2, a2;
    case Ea:
      return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
    case Fa$1:
      return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa$1, a2.lanes = f2, a2;
    case Ia:
      return pj(c2, e2, f2, b2);
    default:
      if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
        case Ba$1:
          g = 10;
          break a;
        case Ca$1:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga$1:
          g = 14;
          break a;
        case Ha$1:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p$1(130, null == a2 ? a2 : typeof a2, ""));
  }
  b2 = Bg(g, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d;
  b2.lanes = f2;
  return b2;
}
function Tg(a2, b2, c2, d) {
  a2 = Bg(7, a2, d, b2);
  a2.lanes = c2;
  return a2;
}
function pj(a2, b2, c2, d) {
  a2 = Bg(22, a2, d, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  a2.stateNode = { isHidden: false };
  return a2;
}
function Qg(a2, b2, c2) {
  a2 = Bg(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function Sg(a2, b2, c2) {
  b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function al$1(a2, b2, c2, d, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function bl$1(a2, b2, c2, d, e2, f2, g, h2, k2) {
  a2 = new al$1(a2, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a2;
}
function cl$1(a2, b2, c2) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a2, containerInfo: b2, implementation: c2 };
}
function dl$1(a2) {
  if (!a2) return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p$1(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$1(171));
  }
  if (1 === a2.tag) {
    var c2 = a2.type;
    if (Zf(c2)) return bg(a2, c2, b2);
  }
  return b2;
}
function el$1(a2, b2, c2, d, e2, f2, g, h2, k2) {
  a2 = bl$1(c2, d, true, a2, e2, f2, g, h2, k2);
  a2.context = dl$1(null);
  c2 = a2.current;
  d = R();
  e2 = yi$1(c2);
  f2 = mh(d, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  nh(c2, f2, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d);
  Dk(a2, d);
  return a2;
}
function fl$1(a2, b2, c2, d) {
  var e2 = b2.current, f2 = R(), g = yi$1(e2);
  c2 = dl$1(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = mh(f2, g);
  b2.payload = { element: a2 };
  d = void 0 === d ? null : d;
  null !== d && (b2.callback = d);
  a2 = nh(e2, b2, g);
  null !== a2 && (gi$1(a2, e2, g, f2), oh(a2, e2, g));
  return g;
}
function gl$1(a2) {
  a2 = a2.current;
  if (!a2.child) return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function hl$1(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function il$1(a2, b2) {
  hl$1(a2, b2);
  (a2 = a2.alternate) && hl$1(a2, b2);
}
function jl() {
  return null;
}
var kl$1 = "function" === typeof reportError ? reportError : function(a2) {
  console.error(a2);
};
function ll$1(a2) {
  this._internalRoot = a2;
}
ml$1.prototype.render = ll$1.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (null === b2) throw Error(p$1(409));
  fl$1(a2, b2, null, null);
};
ml$1.prototype.unmount = ll$1.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (null !== a2) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Rk(function() {
      fl$1(null, a2, null, null);
    });
    b2[uf] = null;
  }
};
function ml$1(a2) {
  this._internalRoot = a2;
}
ml$1.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Hc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
    Qc.splice(c2, 0, a2);
    0 === c2 && Vc(a2);
  }
};
function nl(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
}
function ol$1(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function pl() {
}
function ql$1(a2, b2, c2, d, e2) {
  if (e2) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a3 = gl$1(g);
        f2.call(a3);
      };
    }
    var g = el$1(b2, d, a2, 0, null, false, false, "", pl);
    a2._reactRootContainer = g;
    a2[uf] = g.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Rk();
    return g;
  }
  for (; e2 = a2.lastChild; ) a2.removeChild(e2);
  if ("function" === typeof d) {
    var h2 = d;
    d = function() {
      var a3 = gl$1(k2);
      h2.call(a3);
    };
  }
  var k2 = bl$1(a2, 0, false, null, null, false, false, "", pl);
  a2._reactRootContainer = k2;
  a2[uf] = k2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  Rk(function() {
    fl$1(b2, k2, c2, d);
  });
  return k2;
}
function rl(a2, b2, c2, d, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = gl$1(g);
        h2.call(a3);
      };
    }
    fl$1(b2, g, a2, e2);
  } else g = ql$1(c2, b2, a2, e2, d);
  return gl$1(g);
}
Ec$1 = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc$1(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B$1()), 0 === (K$1 & 6) && (Gj = B$1() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b3 = ih(a2, 1);
        if (null !== b3) {
          var c3 = R();
          gi$1(b3, a2, 1, c3);
        }
      }), il$1(a2, 1);
  }
};
Fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = ih(a2, 134217728);
    if (null !== b2) {
      var c2 = R();
      gi$1(b2, a2, 134217728, c2);
    }
    il$1(a2, 134217728);
  }
};
Gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = yi$1(a2), c2 = ih(a2, b2);
    if (null !== c2) {
      var d = R();
      gi$1(c2, a2, b2, d);
    }
    il$1(a2, b2);
  }
};
Hc = function() {
  return C$1;
};
Ic$1 = function(a2, b2) {
  var c2 = C$1;
  try {
    return C$1 = a2, b2();
  } finally {
    C$1 = c2;
  }
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      bb(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d = c2[b2];
          if (d !== a2 && d.form === a2.form) {
            var e2 = Db(d);
            if (!e2) throw Error(p$1(90));
            Wa$1(d);
            bb(d, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl$1 = { usingClientEntryPoint: false, Events: [Cb, ue$1, Db, Eb, Fb, Qk] }, tl$1 = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul$1 = { bundleType: tl$1.bundleType, version: tl$1.version, rendererPackageName: tl$1.rendererPackageName, rendererConfig: tl$1.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua$1.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: tl$1.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl$1 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl$1.isDisabled && vl$1.supportsFiber) try {
    kc = vl$1.inject(ul$1), lc = vl$1;
  } catch (a2) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl$1;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b2)) throw Error(p$1(200));
  return cl$1(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!nl(a2)) throw Error(p$1(299));
  var c2 = false, d = "", e2 = kl$1;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = bl$1(a2, 1, false, null, null, c2, false, d, e2);
  a2[uf] = b2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  return new ll$1(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2) return null;
  if (1 === a2.nodeType) return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render) throw Error(p$1(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$1(268, a2));
  }
  a2 = Zb(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Rk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!ol$1(b2)) throw Error(p$1(200));
  return rl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!nl(a2)) throw Error(p$1(405));
  var d = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g = kl$1;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g = c2.onRecoverableError));
  b2 = el$1(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g);
  a2[uf] = b2.current;
  sf(a2);
  if (d) for (a2 = 0; a2 < d.length; a2++) c2 = d[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
    c2,
    e2
  );
  return new ml$1(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!ol$1(b2)) throw Error(p$1(200));
  return rl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!ol$1(a2)) throw Error(p$1(40));
  return a2._reactRootContainer ? (Rk(function() {
    rl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d) {
  if (!ol$1(c2)) throw Error(p$1(200));
  if (null == a2 || void 0 === a2._reactInternals) throw Error(p$1(38));
  return rl(a2, b2, c2, false, d);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m$6 = reactDomExports;
{
  client.createRoot = m$6.createRoot;
  client.hydrateRoot = m$6.hydrateRoot;
}
function Spinner({ size = 16, tone = "accent", className, style }) {
  const color = tone === "current" ? "inherit" : "var(--accent-fg)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      className: "spinner" + (className ? " " + className : ""),
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      style: { color, ...style },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "sp-track", cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2.4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "sp-arc", cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2.4", strokeDasharray: "15 60" })
      ]
    }
  );
}
function Button({
  variant = "secondary",
  size,
  icon,
  loading,
  children,
  disabled,
  className = "",
  ...rest
}) {
  const cls = [
    "btn",
    `btn-${variant}`,
    size && size !== "md" ? `btn-${size}` : null,
    !children ? "btn-icon" : null,
    className || null
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cls, disabled: disabled || loading, ...rest, children: [
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: size === "sm" ? 14 : 15, tone: "current", className: "ic" }) : icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ic", style: { display: "flex" }, children: icon }),
    children
  ] });
}
const e$i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,44H32A20,20,0,0,0,12,64V88a20,20,0,0,0,16,19.6V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V107.6A20,20,0,0,0,244,88V64A20,20,0,0,0,224,44ZM36,68H220V84H36ZM52,188V108H204v80Zm112-52a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,136Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-72,96H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm72-56H32V64H224V88Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,50H32A14,14,0,0,0,18,64V88a14,14,0,0,0,14,14h2v90a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V102h2a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM210,192a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V102H210ZM226,88a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM98,136a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H104A6,6,0,0,1,98,136Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,52H32A12,12,0,0,0,20,64V88a12,12,0,0,0,12,12h4v92a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V100h4a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52ZM212,192a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V100H212ZM228,88a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM100,136a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H104A4,4,0,0,1,100,136Z" }))
  ]
]);
const e$h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M228,48V96a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h19l-7.8-7.8a75.55,75.55,0,0,0-53.32-22.26h-.43A75.49,75.49,0,0,0,72.39,75.57,12,12,0,1,1,55.61,58.41a99.38,99.38,0,0,1,69.87-28.47H126A99.42,99.42,0,0,1,196.2,59.23L204,67V48a12,12,0,0,1,24,0ZM183.61,180.43a75.49,75.49,0,0,1-53.09,21.63h-.43A75.55,75.55,0,0,1,76.77,179.8L69,172H88a12,12,0,0,0,0-24H40a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V189l7.8,7.8A99.42,99.42,0,0,0,130,226.06h.56a99.38,99.38,0,0,0,69.87-28.47,12,12,0,0,0-16.78-17.16Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L180.65,72a79.48,79.48,0,0,0-54.72-22.09h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27,96,96,0,0,1,192,60.7l18.36-18.36A8,8,0,0,1,224,48ZM186.41,183.29A80,80,0,0,1,75.35,184l18.31-18.31A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66L64,195.3a95.42,95.42,0,0,0,66,26.76h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M220,48V96a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h38.34L184.89,70.54A84,84,0,0,0,66.8,69.85a4,4,0,1,1-5.6-5.72,92,92,0,0,1,129.34.76L212,86.34V48a4,4,0,0,1,8,0ZM189.2,186.15a83.44,83.44,0,0,1-58.68,23.91h-.47a83.52,83.52,0,0,1-58.94-24.6L49.66,164H88a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V169.66l21.46,21.45A91.43,91.43,0,0,0,130,218.06h.51a91.45,91.45,0,0,0,64.28-26.19,4,4,0,1,0-5.6-5.72Z" }))
  ]
]);
const e$g = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M240,56V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v87.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V80a32,32,0,0,1,32-32h64A8,8,0,0,1,240,56Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z" }))
  ]
]);
const t$2 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M208,96l-80,80L48,96Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }))
  ]
]);
const e$f = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M236.34,187.09A84,84,0,0,0,172.29,68.9,84,84,0,0,0,19.66,139.09l-6.84,23.26a20,20,0,0,0,24.83,24.83l23.26-6.84a83.94,83.94,0,0,0,22.76,6.74,84.06,84.06,0,0,0,111.42,41.26l23.26,6.84a20,20,0,0,0,24.83-24.83ZM62,155.5a11.88,11.88,0,0,0-3.39.49l-20.72,6.09L44,141.35a12,12,0,0,0-.93-9A60,60,0,1,1,67.7,156.92,12,12,0,0,0,62,155.5Zm150.89,24.8a12,12,0,0,0-.93,9l6.09,20.73L197.36,204a12,12,0,0,0-9.06.93A60,60,0,0,1,111,186.63a83.93,83.93,0,0,0,68.55-91.37,60,60,0,0,1,33.38,85Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M231.66,213.73a8,8,0,0,1-9.93,9.93L194,215.5A72.05,72.05,0,0,1,92.06,175.89h0c1.31.07,2.62.11,3.94.11a72,72,0,0,0,67.93-95.88h0A72,72,0,0,1,223.5,186Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86Zm-16.25,1.47L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M229.93,186.58A78,78,0,0,0,168.16,74.42,78,78,0,1,0,26.07,138.58L18.58,164A14,14,0,0,0,36,181.42l25.46-7.49a78,78,0,0,0,26.39,7.63,78,78,0,0,0,106.77,40.37L220,229.42A14,14,0,0,0,237.42,212ZM62,161.5a6.05,6.05,0,0,0-1.69.24l-27.77,8.17a2,2,0,0,1-2.48-2.48l8.17-27.77a6.05,6.05,0,0,0-.47-4.53,66,66,0,1,1,27.08,27.08A6,6,0,0,0,62,161.5Zm155.71,26.16,8.17,27.77a2,2,0,0,1-2.48,2.48l-27.77-8.17a6.06,6.06,0,0,0-4.53.47,66,66,0,0,1-90-28.4,77.92,77.92,0,0,0,71-94.68,66,66,0,0,1,46.07,96A6.05,6.05,0,0,0,217.74,187.66Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M227.79,186.39a76,76,0,0,0-61-110.07A76,76,0,1,0,28.21,138.39L20.5,164.6a12,12,0,0,0,14.9,14.9l26.21-7.71a75.93,75.93,0,0,0,27.6,7.9,76,76,0,0,0,105.18,40.1l26.21,7.71a12,12,0,0,0,14.9-14.9ZM60.9,163.66l-27.76,8.17a4,4,0,0,1-5-5l8.17-27.76a4.07,4.07,0,0,0-.31-3A68,68,0,1,1,63.92,164,4.06,4.06,0,0,0,60.9,163.66Zm165.92,55.16a4,4,0,0,1-4,1l-27.76-8.17a4.07,4.07,0,0,0-3,.31A68,68,0,0,1,98,180a76,76,0,0,0,71.5-95.28A68,68,0,0,1,220,184.08a4.07,4.07,0,0,0-.31,3l8.17,27.76A4,4,0,0,1,226.82,218.82Z" }))
  ]
]);
const a$b = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z" }))
  ]
]);
const a$a = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]);
const a$9 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,24.87a83.53,83.53,0,0,1,24,7.25V203.88a83.53,83.53,0,0,1-24,7.25ZM44,128a84.12,84.12,0,0,1,72-83.13V211.13A84.12,84.12,0,0,1,44,128Zm144,58.71V69.29a83.81,83.81,0,0,1,0,117.42Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M224,128a96,96,0,0,1-96,96V32A96,96,0,0,1,224,128Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm96,87.63V40.37a88,88,0,0,1,0,175.26Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88V216A88.1,88.1,0,0,1,40,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,12.2a89.86,89.86,0,0,1,20,3.63V214.17a89.86,89.86,0,0,1-20,3.63Zm32,8.23a90.48,90.48,0,0,1,20,12.81V196.76a90.48,90.48,0,0,1-20,12.81ZM38,128a90.12,90.12,0,0,1,84-89.8V217.8A90.12,90.12,0,0,1,38,128Zm160,56.5V71.5a89.81,89.81,0,0,1,0,113Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,16.37a86.4,86.4,0,0,1,16,3V212.67a86.4,86.4,0,0,1-16,3Zm32,9.26a87.81,87.81,0,0,1,16,10.54V195.83a87.81,87.81,0,0,1-16,10.54ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm160,50.54V77.46a87.82,87.82,0,0,1,0,101.08Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,8.09a91.58,91.58,0,0,1,24,4.27V215.64a91.58,91.58,0,0,1-24,4.27Zm32,7.25a92.21,92.21,0,0,1,24,15V197.69a92.21,92.21,0,0,1-24,15ZM36,128a92.11,92.11,0,0,1,88-91.91V219.91A92.11,92.11,0,0,1,36,128Zm160,61.9V66.1a91.83,91.83,0,0,1,0,123.8Z" }))
  ]
]);
const a$8 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM163.27,77l-56,24a12,12,0,0,0-6.3,6.3l-24,56A12,12,0,0,0,92.73,179l56-24a12,12,0,0,0,6.3-6.3l24-56A12,12,0,0,0,163.27,77Zm-28.41,57.89-24,10.29,10.29-24,24-10.29Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm16,112L80,176l32-64,64-32Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm51.58,57.79-32,64a4.08,4.08,0,0,1-1.79,1.79l-64,32a4,4,0,0,1-5.37-5.37l32-64a4.08,4.08,0,0,1,1.79-1.79l64-32A4,4,0,0,1,179.58,81.79Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM173.32,74.63l-64,32a6,6,0,0,0-2.69,2.69l-32,64A6,6,0,0,0,80,182a6.06,6.06,0,0,0,2.68-.63l64-32a6,6,0,0,0,2.69-2.69l32-64a6,6,0,0,0-8.05-8.05Zm-33.79,64.9L93.42,162.58l23-46.11,46.11-23Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM174.21,76.42l-64,32a4.08,4.08,0,0,0-1.79,1.79l-32,64A4,4,0,0,0,80,180a4.05,4.05,0,0,0,1.79-.42l64-32a4.08,4.08,0,0,0,1.79-1.79l32-64a4,4,0,0,0-5.37-5.37ZM141,141l-52.08,26L115,115l52.08-26Z" }))
  ]
]);
const H$1 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M156,88H100a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12V100A12,12,0,0,0,156,88Zm-12,56H112V112h32Zm88-4H220V116h12a12,12,0,0,0,0-24H220V56a20,20,0,0,0-20-20H164V24a12,12,0,0,0-24,0V36H116V24a12,12,0,0,0-24,0V36H56A20,20,0,0,0,36,56V92H24a12,12,0,0,0,0,24H36v24H24a12,12,0,0,0,0,24H36v36a20,20,0,0,0,20,20H92v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V220h36a20,20,0,0,0,20-20V164h12a12,12,0,0,0,0-24Zm-36,56H60V60H196Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M200,48H56a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48ZM152,152H104V104h48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Zm88,0H216V112h16a8,8,0,0,0,0-16H216V56a16,16,0,0,0-16-16H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H56A16,16,0,0,0,40,56V96H24a8,8,0,0,0,0,16H40v32H24a8,8,0,0,0,0,16H40v40a16,16,0,0,0,16,16H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h40a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,56H56V56H200v95.87s0,.09,0,.13,0,.09,0,.13V200Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M104,104h48v48H104Zm136,48a8,8,0,0,1-8,8H216v40a16,16,0,0,1-16,16H160v16a8,8,0,0,1-16,0V216H112v16a8,8,0,0,1-16,0V216H56a16,16,0,0,1-16-16V160H24a8,8,0,0,1,0-16H40V112H24a8,8,0,0,1,0-16H40V56A16,16,0,0,1,56,40H96V24a8,8,0,0,1,16,0V40h32V24a8,8,0,0,1,16,0V40h40a16,16,0,0,1,16,16V96h16a8,8,0,0,1,0,16H216v32h16A8,8,0,0,1,240,152ZM168,96a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M152,98H104a6,6,0,0,0-6,6v48a6,6,0,0,0,6,6h48a6,6,0,0,0,6-6V104A6,6,0,0,0,152,98Zm-6,48H110V110h36Zm86,0H214V110h18a6,6,0,0,0,0-12H214V56a14,14,0,0,0-14-14H158V24a6,6,0,0,0-12,0V42H110V24a6,6,0,0,0-12,0V42H56A14,14,0,0,0,42,56V98H24a6,6,0,0,0,0,12H42v36H24a6,6,0,0,0,0,12H42v42a14,14,0,0,0,14,14H98v18a6,6,0,0,0,12,0V214h36v18a6,6,0,0,0,12,0V214h42a14,14,0,0,0,14-14V158h18a6,6,0,0,0,0-12Zm-30,54a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Zm88,0H216V112h16a8,8,0,0,0,0-16H216V56a16,16,0,0,0-16-16H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H56A16,16,0,0,0,40,56V96H24a8,8,0,0,0,0,16H40v32H24a8,8,0,0,0,0,16H40v40a16,16,0,0,0,16,16H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h40a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,56H56V56H200v95.87s0,.09,0,.13,0,.09,0,.13V200Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M152,100H104a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V104A4,4,0,0,0,152,100Zm-4,48H108V108h40Zm84,0H212V108h20a4,4,0,0,0,0-8H212V56a12,12,0,0,0-12-12H156V24a4,4,0,0,0-8,0V44H108V24a4,4,0,0,0-8,0V44H56A12,12,0,0,0,44,56v44H24a4,4,0,0,0,0,8H44v40H24a4,4,0,0,0,0,8H44v44a12,12,0,0,0,12,12h44v20a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V212h44a12,12,0,0,0,12-12V156h20a4,4,0,0,0,0-8Zm-28,52a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4Z" }))
  ]
]);
const e$e = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm112-80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,132Zm0,40a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,172Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-36-84a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,136Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,168Z" }))
  ]
]);
const t$1 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,68H133.39l-26-29.29a20,20,0,0,0-15-6.71H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68ZM44,56H90.61l10.67,12H44ZM212,196H44V92H212Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M128,80H32V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,72H131.31L104,44.69A15.88,15.88,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.41,15.41,0,0,0,39.39,216h177.5A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,74H130.49l-27.9-27.9a13.94,13.94,0,0,0-9.9-4.1H40A14,14,0,0,0,26,56V200.62A13.39,13.39,0,0,0,39.38,214H216.89A13.12,13.12,0,0,0,230,200.89V88A14,14,0,0,0,216,74ZM40,54H92.69a2,2,0,0,1,1.41.59L113.51,74H38V56A2,2,0,0,1,40,54ZM218,200.89a1.11,1.11,0,0,1-1.11,1.11H39.38A1.4,1.4,0,0,1,38,200.62V86H216a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,76H129.66L101.17,47.52A11.9,11.9,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.62A11.4,11.4,0,0,0,39.38,212H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76ZM36,56a4,4,0,0,1,4-4H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36ZM220,200.89a3.12,3.12,0,0,1-3.11,3.11H39.38A3.39,3.39,0,0,1,36,200.62V84H216a4,4,0,0,1,4,4Z" }))
  ]
]);
const e$d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M248.23,112.31A20,20,0,0,0,232,104H220V88a20,20,0,0,0-20-20H132L105.34,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V208a12,12,0,0,0,12,12H211.1a12,12,0,0,0,11.33-8l28.49-81.47.06-.17A20,20,0,0,0,248.23,112.31ZM92,68l28.8,21.6A12,12,0,0,0,128,92h68v12H69.77a20,20,0,0,0-18.94,13.58L44,137.15V68ZM202.59,196H48.89l23.72-68H226.37Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M208,88v24H69.77a8,8,0,0,0-7.59,5.47L32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72A8,8,0,0,1,208,88Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M243.36,111.81A14,14,0,0,0,232,106H214V88a14,14,0,0,0-14-14H130L101.74,52.8a14.06,14.06,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V208a6,6,0,0,0,6,6H211.1a6,6,0,0,0,5.69-4.1l28.49-85.47A14,14,0,0,0,243.36,111.81ZM40,62H93.34a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h72a2,2,0,0,1,2,2v18H69.77a14,14,0,0,0-13.28,9.57L38,171V64A2,2,0,0,1,40,62Zm193.9,58.63L206.78,202H40.33l27.54-82.63a2,2,0,0,1,1.9-1.37H232a2,2,0,0,1,1.9,2.63Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M241.72,113a11.88,11.88,0,0,0-9.73-5H212V88a12,12,0,0,0-12-12H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V208a4,4,0,0,0,4,4H211.09a4,4,0,0,0,3.79-2.74l28.49-85.47A11.86,11.86,0,0,0,241.72,113ZM40,60H93.33a4,4,0,0,1,2.4.8L125.6,83.2a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4v20H69.76a12,12,0,0,0-11.38,8.21L36,183.35V64A4,4,0,0,1,40,60Zm195.78,61.26L208.2,204H37.55L66,118.74A4,4,0,0,1,69.76,116H232a4,4,0,0,1,3.79,5.26Z" }))
  ]
]);
const l$2 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z" }))
  ]
]);
const e$c = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M236,64a36,36,0,1,0-48,33.94V112a4,4,0,0,1-4,4H96a27.8,27.8,0,0,0-4,.29V97.94a36,36,0,1,0-24,0v60.12a36,36,0,1,0,24,0V144a4,4,0,0,1,4-4h88a28,28,0,0,0,28-28V97.94A36.07,36.07,0,0,0,236,64ZM80,52A12,12,0,1,1,68,64,12,12,0,0,1,80,52Zm0,152a12,12,0,1,1,12-12A12,12,0,0,1,80,204ZM200,76a12,12,0,1,1,12-12A12,12,0,0,1,200,76Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,64a24,24,0,1,1-24-24A24,24,0,0,1,224,64Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192ZM200,80a16,16,0,1,1,16-16A16,16,0,0,1,200,80Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M230,64a30,30,0,1,0-36,29.4V112a10,10,0,0,1-10,10H96a21.84,21.84,0,0,0-10,2.42v-31a30,30,0,1,0-12,0v69.2a30,30,0,1,0,12,0V144a10,10,0,0,1,10-10h88a22,22,0,0,0,22-22V93.4A30.05,30.05,0,0,0,230,64ZM62,64A18,18,0,1,1,80,82,18,18,0,0,1,62,64ZM98,192a18,18,0,1,1-18-18A18,18,0,0,1,98,192ZM200,82a18,18,0,1,1,18-18A18,18,0,0,1,200,82Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192ZM200,80a16,16,0,1,1,16-16A16,16,0,0,1,200,80Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M228,64a28,28,0,1,0-32,27.71V112a12,12,0,0,1-12,12H96a19.91,19.91,0,0,0-12,4V91.71a28,28,0,1,0-8,0v72.58a28,28,0,1,0,8,0V144a12,12,0,0,1,12-12h88a20,20,0,0,0,20-20V91.71A28,28,0,0,0,228,64ZM60,64A20,20,0,1,1,80,84,20,20,0,0,1,60,64Zm40,128a20,20,0,1,1-20-20A20,20,0,0,1,100,192ZM200,84a20,20,0,1,1,20-20A20,20,0,0,1,200,84Z" }))
  ]
]);
const e$b = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M108,64A36,36,0,1,0,60,97.94v60.12a36,36,0,1,0,24,0V97.94A36.07,36.07,0,0,0,108,64ZM72,52A12,12,0,1,1,60,64,12,12,0,0,1,72,52Zm0,152a12,12,0,1,1,12-12A12,12,0,0,1,72,204Zm140-45.94V110.63a27.81,27.81,0,0,0-8.2-19.8L173,60h19a12,12,0,0,0,0-24H144a12,12,0,0,0-12,12V96a12,12,0,0,0,24,0V77l30.83,30.83a4,4,0,0,1,1.17,2.83v47.43a36,36,0,1,0,24,0ZM200,204a12,12,0,1,1,12-12A12,12,0,0,1,200,204Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M96,64A24,24,0,1,1,72,40,24,24,0,0,1,96,64ZM200,168a24,24,0,1,0,24,24A24,24,0,0,0,200,168Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M104,64A32,32,0,1,0,64,95v66a32,32,0,1,0,16,0V95A32.06,32.06,0,0,0,104,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Zm120-31V110.63a23.85,23.85,0,0,0-7-17L163.31,56H192a8,8,0,0,0,0-16H144a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31L189.66,105a8,8,0,0,1,2.34,5.66V161a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,200,208Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M104,64A32,32,0,1,0,64,95v66a32,32,0,1,0,16,0V95A32.06,32.06,0,0,0,104,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Zm144,0a32,32,0,1,1-40-31V110.63a8,8,0,0,0-2.34-5.66L152,67.31V96a8,8,0,0,1-16,0V48a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H163.31L201,93.66a23.85,23.85,0,0,1,7,17V161A32.06,32.06,0,0,1,232,192Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M102,64A30,30,0,1,0,66,93.4v69.2a30,30,0,1,0,12,0V93.4A30.05,30.05,0,0,0,102,64ZM54,64A18,18,0,1,1,72,82,18,18,0,0,1,54,64ZM90,192a18,18,0,1,1-18-18A18,18,0,0,1,90,192Zm116-29.4v-52a21.88,21.88,0,0,0-6.44-15.56L158.48,54H192a6,6,0,0,0,0-12H144a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V62.48l41.07,41.08a9.91,9.91,0,0,1,2.93,7.07v52a30,30,0,1,0,12,0ZM200,210a18,18,0,1,1,18-18A18,18,0,0,1,200,210Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M104,64A32,32,0,1,0,64,95v66a32,32,0,1,0,16,0V95A32.06,32.06,0,0,0,104,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Zm120-31V110.63a23.85,23.85,0,0,0-7-17L163.31,56H192a8,8,0,0,0,0-16H144a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31L189.66,105a8,8,0,0,1,2.34,5.66V161a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,200,208Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M100,64A28,28,0,1,0,68,91.71v72.58a28,28,0,1,0,8,0V91.71A28,28,0,0,0,100,64ZM52,64A20,20,0,1,1,72,84,20,20,0,0,1,52,64ZM92,192a20,20,0,1,1-20-20A20,20,0,0,1,92,192Zm112-27.71V110.63a19.89,19.89,0,0,0-5.86-14.15L153.66,52H192a4,4,0,0,0,0-8H144a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V57.66l44.49,44.48a12,12,0,0,1,3.51,8.49v53.66a28,28,0,1,0,8,0ZM200,212a20,20,0,1,1,20-20A20,20,0,0,1,200,212Z" }))
  ]
]);
const a$7 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z" }))
  ]
]);
const a$6 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,178.57,87.73l-72-39.42Zm0,78.83L56,76,81.56,62l72,39.41ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l24-13.13V152a12,12,0,0,0,24,0V109.92l24-13.13v76.65Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,.7-3.25Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M222.72,67.91l-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,178.57,94.57,94.05,48.31ZM122,223,39,177.57a2,2,0,0,1-1-1.75V86.66l84,46ZM43.49,76,81.56,55.15l84.51,46.26L128,122.24ZM218,175.82a2,2,0,0,1-1,1.75h0L134,223V132.64l36-19.71V152a6,6,0,0,0,12,0V106.37l36-19.71Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,178.5,96.89a4,4,0,0,0-.58-.4l-88-48.18Zm1.92,96L39.33,76,81.56,52.87l88.67,48.54Zm-89.92,54.8a4,4,0,0,1-2.08-3.5V83.29l88,48.16v94.91Zm179.84,0h0l-85.92,47V131.45l40-21.89V152a4,4,0,0,0,8,0V105.18l40-21.89v92.53A4,4,0,0,1,217.92,179.32Z" }))
  ]
]);
const a$5 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM93,180l71-71,11,11-71,71ZM76,163,65,152l71-71,11,11ZM52,173l15.51,15.51h0L83,204H52ZM192,103,153,64l18.34-18.34,39,39Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160l90.35-90.35,16.68,16.69L68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188l90.35-90.35h0l16.68,16.69Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M225.9,74.78,181.21,30.09a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L225.9,94.58a14,14,0,0,0,0-19.8ZM48.49,160,136,72.48,155.51,92,68,179.51ZM46,208V174.48L81.51,210H48A2,2,0,0,1,46,208Zm50-.49L76.49,188,164,100.48,183.51,120ZM217.41,86.1,192,111.51,144.49,64,169.9,38.58a2,2,0,0,1,2.83,0l44.68,44.69a2,2,0,0,1,0,2.83Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L39.52,154.83A11.9,11.9,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a12,12,0,0,0,8.48-3.51L224.48,93.17a12,12,0,0,0,0-17ZM45.66,160,136,69.65,158.34,92,68,182.34ZM44,208V169.66l21.17,21.17h0L86.34,212H48A4,4,0,0,1,44,208Zm52,2.34L73.66,188,164,97.65,186.34,120ZM218.83,87.51,192,114.34,141.66,64l26.82-26.83a4,4,0,0,1,5.66,0l44.69,44.68a4,4,0,0,1,0,5.66Z" }))
  ]
]);
const a$4 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z" }))
  ]
]);
const a$3 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z" }))
  ]
]);
const e$a = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M227.85,46.89a20,20,0,0,0-18.74-18.74c-13.13-.77-46.65.42-74.48,28.24L131,60H74.36a19.83,19.83,0,0,0-14.14,5.86L25.87,100.19a20,20,0,0,0,11.35,33.95l37.14,5.18,42.32,42.32,5.19,37.18A19.88,19.88,0,0,0,135.34,235a20.13,20.13,0,0,0,6.37,1,19.9,19.9,0,0,0,14.1-5.87l34.34-34.35A19.85,19.85,0,0,0,196,181.64V125l3.6-3.59C227.43,93.54,228.62,60,227.85,46.89ZM76,84h31L75.75,115.28l-27.23-3.8ZM151.6,73.37A72.27,72.27,0,0,1,204,52a72.17,72.17,0,0,1-21.38,52.41L128,159,97,128ZM172,180l-27.49,27.49-3.8-27.23L172,149Zm-72,22c-8.71,11.85-26.19,26-60,26a12,12,0,0,1-12-12c0-33.84,14.12-51.32,26-60A12,12,0,1,1,68.18,175.3C62.3,179.63,55.51,187.8,53,203c15.21-2.51,23.37-9.3,27.7-15.18A12,12,0,1,1,100,202Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M184,120v61.65a8,8,0,0,1-2.34,5.65l-34.35,34.35a8,8,0,0,1-13.57-4.53L128,176ZM136,72H74.35a8,8,0,0,0-5.65,2.34L34.35,108.69a8,8,0,0,0,4.53,13.57L80,128ZM40,216c37.65,0,50.69-19.69,54.56-28.18L68.18,161.44C59.69,165.31,40,178.35,40,216Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M101.85,191.14C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Zm122-144a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.4,27.07h0L88,108.7A8,8,0,0,1,76.67,97.39l26.56-26.57A4,4,0,0,0,100.41,64H74.35A15.9,15.9,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A16,16,0,0,0,192,181.65V155.59a4,4,0,0,0-6.83-2.82l-26.57,26.56a8,8,0,0,1-11.71-.42,8.2,8.2,0,0,1,.6-11.1l49.27-49.27h0C223.45,91.86,224.6,59.71,223.85,47.12Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M221.86,47.24a14,14,0,0,0-13.11-13.1c-12.31-.73-43.77.39-69.88,26.5L133.52,66H74.35a13.9,13.9,0,0,0-9.89,4.1L30.11,104.44a14,14,0,0,0,7.94,23.76l39.13,5.46,45.16,45.16L127.8,218a14,14,0,0,0,23.76,7.92l34.35-34.35a13.91,13.91,0,0,0,4.1-9.89V122.48l5.35-5.35h0C221.46,91,222.59,59.56,221.86,47.24ZM38.11,115a2,2,0,0,1,.49-2L72.94,78.58A2,2,0,0,1,74.35,78h47.17L77.87,121.64l-38.14-5.32A1.93,1.93,0,0,1,38.11,115ZM178,181.65a2,2,0,0,1-.59,1.41L143.08,217.4a2,2,0,0,1-3.4-1.11l-5.32-38.16L178,134.48Zm8.87-73h0L128,167.51,88.49,128l58.87-58.88a78.47,78.47,0,0,1,60.69-23A2,2,0,0,1,209.88,48,78.47,78.47,0,0,1,186.88,108.64ZM100,190.31C95.68,199.84,81.13,222,40,222a6,6,0,0,1-6-6c0-41.13,22.16-55.68,31.69-60a6,6,0,1,1,5,10.92c-7,3.17-22.53,13.52-24.47,42.91,29.39-1.94,39.74-17.52,42.91-24.47a6,6,0,1,1,10.92,5Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M219.86,47.36a12,12,0,0,0-11.22-11.22c-12-.71-42.82.38-68.35,25.91L134.35,68h-60a11.9,11.9,0,0,0-8.48,3.52L31.52,105.85a12,12,0,0,0,6.81,20.37l39.79,5.55,46.11,46.11,5.55,39.81a12,12,0,0,0,20.37,6.79l34.34-34.35a11.9,11.9,0,0,0,3.52-8.48v-60l5.94-5.94C219.48,90.18,220.57,59.41,219.86,47.36ZM36.21,115.6a3.94,3.94,0,0,1,1-4.09L71.53,77.17A4,4,0,0,1,74.35,76h52L78.58,123.76,39.44,118.3A3.94,3.94,0,0,1,36.21,115.6ZM180,181.65a4,4,0,0,1-1.17,2.83l-34.35,34.34a4,4,0,0,1-6.79-2.25l-5.46-39.15L180,129.65Zm-52-11.31L85.66,128l60.28-60.29c23.24-23.24,51.25-24.23,62.22-23.58a3.93,3.93,0,0,1,3.71,3.71c.65,11-.35,39-23.58,62.22ZM98.21,189.48C94,198.66,80,220,40,220a4,4,0,0,1-4-4c0-40,21.34-54,30.52-58.21a4,4,0,0,1,3.32,7.28c-7.46,3.41-24.43,14.66-25.76,46.85,32.19-1.33,43.44-18.3,46.85-25.76a4,4,0,1,1,7.28,3.32Z" }))
  ]
]);
const e$9 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M68,102.06V40a12,12,0,0,0-24,0v62.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V169.94a36,36,0,0,0,0-67.88ZM56,148a12,12,0,1,1,12-12A12,12,0,0,1,56,148ZM164,88a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0V54.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V121.94A36.07,36.07,0,0,0,164,88Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,128,100Zm108,68a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0v94.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V201.94A36.07,36.07,0,0,0,236,168Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,200,180Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M80,136a24,24,0,1,1-24-24A24,24,0,0,1,80,136Zm48-72a24,24,0,1,0,24,24A24,24,0,0,0,128,64Zm72,80a24,24,0,1,0,24,24A24,24,0,0,0,200,144Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M84,136a28,28,0,0,1-20,26.83V216a8,8,0,0,1-16,0V162.83a28,28,0,0,1,0-53.66V40a8,8,0,0,1,16,0v69.17A28,28,0,0,1,84,136Zm52-74.83V40a8,8,0,0,0-16,0V61.17a28,28,0,0,0,0,53.66V216a8,8,0,0,0,16,0V114.83a28,28,0,0,0,0-53.66Zm72,80V40a8,8,0,0,0-16,0V141.17a28,28,0,0,0,0,53.66V216a8,8,0,0,0,16,0V194.83a28,28,0,0,0,0-53.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M62,106.6V40a6,6,0,0,0-12,0v66.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V165.4a30,30,0,0,0,0-58.8ZM56,154a18,18,0,1,1,18-18A18,18,0,0,1,56,154Zm78-95.4V40a6,6,0,0,0-12,0V58.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V117.4a30,30,0,0,0,0-58.8ZM128,106a18,18,0,1,1,18-18A18,18,0,0,1,128,106Zm102,62a30.05,30.05,0,0,0-24-29.4V40a6,6,0,0,0-12,0v98.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V197.4A30.05,30.05,0,0,0,230,168Zm-30,18a18,18,0,1,1,18-18A18,18,0,0,1,200,186Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M60,108.29V40a4,4,0,0,0-8,0v68.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V163.71a28,28,0,0,0,0-55.42ZM56,156a20,20,0,1,1,20-20A20,20,0,0,1,56,156Zm76-95.71V40a4,4,0,0,0-8,0V60.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V115.71a28,28,0,0,0,0-55.42ZM128,108a20,20,0,1,1,20-20A20,20,0,0,1,128,108Zm100,60a28,28,0,0,0-24-27.71V40a4,4,0,0,0-8,0V140.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V195.71A28,28,0,0,0,228,168Zm-28,20a20,20,0,1,1,20-20A20,20,0,0,1,200,188Z" }))
  ]
]);
const l$1 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M196.89,130.94,144.4,111.6,125.06,59.11a13.92,13.92,0,0,0-26.12,0L79.6,111.6,27.11,130.94a13.92,13.92,0,0,0,0,26.12L79.6,176.4l19.34,52.49a13.92,13.92,0,0,0,26.12,0L144.4,176.4l52.49-19.34a13.92,13.92,0,0,0,0-26.12Zm-4.15,14.86-55.08,20.3a6,6,0,0,0-3.56,3.56l-20.3,55.08a1.92,1.92,0,0,1-3.6,0L89.9,169.66a6,6,0,0,0-3.56-3.56L31.26,145.8a1.92,1.92,0,0,1,0-3.6l55.08-20.3a6,6,0,0,0,3.56-3.56l20.3-55.08a1.92,1.92,0,0,1,3.6,0l20.3,55.08a6,6,0,0,0,3.56,3.56l55.08,20.3a1.92,1.92,0,0,1,0,3.6ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M196.2,132.81l-53.36-19.65L123.19,59.8a11.93,11.93,0,0,0-22.38,0L81.16,113.16,27.8,132.81a11.93,11.93,0,0,0,0,22.38l53.36,19.65,19.65,53.36a11.93,11.93,0,0,0,22.38,0l19.65-53.36,53.36-19.65a11.93,11.93,0,0,0,0-22.38Zm-2.77,14.87L138.35,168a4,4,0,0,0-2.37,2.37l-20.3,55.08a3.92,3.92,0,0,1-7.36,0L88,170.35A4,4,0,0,0,85.65,168l-55.08-20.3a3.92,3.92,0,0,1,0-7.36L85.65,120A4,4,0,0,0,88,117.65l20.3-55.08a3.92,3.92,0,0,1,7.36,0L136,117.65a4,4,0,0,0,2.37,2.37l55.08,20.3a3.92,3.92,0,0,1,0,7.36ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z" }))
  ]
]);
const a$2 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M120,137,48,201A12,12,0,1,1,32,183l61.91-55L32,73A12,12,0,1,1,48,55l72,64A12,12,0,0,1,120,137Zm96,43H120a12,12,0,0,0,0,24h96a12,12,0,0,0,0-24Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,80V192H40V64H200A16,16,0,0,1,216,80Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM77.66,173.66a8,8,0,0,1-11.32-11.32L100.69,128,66.34,93.66A8,8,0,0,1,77.66,82.34l40,40a8,8,0,0,1,0,11.32ZM192,176H128a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M116,132.48l-72,64a6,6,0,0,1-8-9L103,128,36,68.49a6,6,0,0,1,8-9l72,64a6,6,0,0,1,0,9ZM216,186H120a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M116,128a4,4,0,0,1-1.34,3l-72,64a4,4,0,1,1-5.32-6L106,128,37.34,67a4,4,0,0,1,5.32-6l72,64A4,4,0,0,1,116,128Zm100,60H120a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Z" }))
  ]
]);
const e$8 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z" }))
  ]
]);
const e$7 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z" }))
  ]
]);
const a$1 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]);
const o$d = reactExports.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
const p = reactExports.forwardRef(
  (s16, a2) => {
    const {
      alt: n2,
      color: r2,
      size: t2,
      weight: o2,
      mirrored: c2,
      children: i,
      weights: m2,
      ...x2
    } = s16, {
      color: d = "currentColor",
      size: l2,
      weight: f2 = "regular",
      mirrored: g = false,
      ...w2
    } = reactExports.useContext(o$d);
    return /* @__PURE__ */ reactExports.createElement(
      "svg",
      {
        ref: a2,
        xmlns: "http://www.w3.org/2000/svg",
        width: t2 != null ? t2 : l2,
        height: t2 != null ? t2 : l2,
        fill: r2 != null ? r2 : d,
        viewBox: "0 0 256 256",
        transform: c2 || g ? "scale(-1, 1)" : void 0,
        ...w2,
        ...x2
      },
      !!n2 && /* @__PURE__ */ reactExports.createElement("title", null, n2),
      i,
      m2.get(o2 != null ? o2 : f2)
    );
  }
);
p.displayName = "IconBase";
const o$c = reactExports.forwardRef((r2, c2) => /* @__PURE__ */ reactExports.createElement(p, { ref: c2, ...r2, weights: e$i }));
o$c.displayName = "ArchiveIcon";
const s$9 = o$c;
const r$3 = reactExports.forwardRef((e2, s16) => /* @__PURE__ */ reactExports.createElement(p, { ref: s16, ...e2, weights: e$h }));
r$3.displayName = "ArrowsClockwiseIcon";
const m$5 = r$3;
const e$6 = reactExports.forwardRef((r2, t2) => /* @__PURE__ */ reactExports.createElement(p, { ref: t2, ...r2, weights: e$g }));
e$6.displayName = "BookOpenIcon";
const c$6 = e$6;
const e$5 = reactExports.forwardRef((r2, t2) => /* @__PURE__ */ reactExports.createElement(p, { ref: t2, ...r2, weights: t$2 }));
e$5.displayName = "CaretDownIcon";
const s$8 = e$5;
const o$b = reactExports.forwardRef((r2, t2) => /* @__PURE__ */ reactExports.createElement(p, { ref: t2, ...r2, weights: e$f }));
o$b.displayName = "ChatsCircleIcon";
const m$4 = o$b;
const o$a = reactExports.forwardRef((c2, r2) => /* @__PURE__ */ reactExports.createElement(p, { ref: r2, ...c2, weights: a$b }));
o$a.displayName = "CheckIcon";
const n$5 = o$a;
const c$5 = reactExports.forwardRef((o2, r2) => /* @__PURE__ */ reactExports.createElement(p, { ref: r2, ...o2, weights: a$a }));
c$5.displayName = "CheckCircleIcon";
const s$7 = c$5;
const o$9 = reactExports.forwardRef((r2, a2) => /* @__PURE__ */ reactExports.createElement(p, { ref: a2, ...r2, weights: a$9 }));
o$9.displayName = "CircleHalfIcon";
const l = o$9;
const s$6 = reactExports.forwardRef((a2, m2) => /* @__PURE__ */ reactExports.createElement(p, { ref: m2, ...a2, weights: a$8 }));
s$6.displayName = "CompassIcon";
const c$4 = s$6;
const e$4 = reactExports.forwardRef((r2, t2) => /* @__PURE__ */ reactExports.createElement(p, { ref: t2, ...r2, weights: H$1 }));
e$4.displayName = "CpuIcon";
const s$5 = e$4;
const o$8 = reactExports.forwardRef((t2, r2) => /* @__PURE__ */ reactExports.createElement(p, { ref: r2, ...t2, weights: e$e }));
o$8.displayName = "FileTextIcon";
const s$4 = o$8;
const e$3 = reactExports.forwardRef((r2, t2) => /* @__PURE__ */ reactExports.createElement(p, { ref: t2, ...r2, weights: t$1 }));
e$3.displayName = "FolderIcon";
const n$4 = e$3;
const e$2 = reactExports.forwardRef((r2, n2) => /* @__PURE__ */ reactExports.createElement(p, { ref: n2, ...r2, weights: e$d }));
e$2.displayName = "FolderOpenIcon";
const m$3 = e$2;
const o$7 = reactExports.forwardRef((r2, a2) => /* @__PURE__ */ reactExports.createElement(p, { ref: a2, ...r2, weights: l$2 }));
o$7.displayName = "GearSixIcon";
const s$3 = o$7;
const r$2 = reactExports.forwardRef((t2, a2) => /* @__PURE__ */ reactExports.createElement(p, { ref: a2, ...t2, weights: e$c }));
r$2.displayName = "GitBranchIcon";
const m$2 = r$2;
const t = reactExports.forwardRef((o2, r2) => /* @__PURE__ */ reactExports.createElement(p, { ref: r2, ...o2, weights: e$b }));
t.displayName = "GitPullRequestIcon";
const m$1 = t;
const o$6 = reactExports.forwardRef((s16, n2) => /* @__PURE__ */ reactExports.createElement(p, { ref: n2, ...s16, weights: a$7 }));
o$6.displayName = "MagnifyingGlassIcon";
const f = o$6;
const e$1 = reactExports.forwardRef((o2, c2) => /* @__PURE__ */ reactExports.createElement(p, { ref: c2, ...o2, weights: a$6 }));
e$1.displayName = "PackageIcon";
const n$3 = e$1;
const o$5 = reactExports.forwardRef((c2, r2) => /* @__PURE__ */ reactExports.createElement(p, { ref: r2, ...c2, weights: a$5 }));
o$5.displayName = "PencilIcon";
const m = o$5;
const a = reactExports.forwardRef((e2, r2) => /* @__PURE__ */ reactExports.createElement(p, { ref: r2, ...e2, weights: a$4 }));
a.displayName = "PlayIcon";
const n$2 = a;
const e = reactExports.forwardRef((r2, s16) => /* @__PURE__ */ reactExports.createElement(p, { ref: s16, ...r2, weights: a$3 }));
e.displayName = "PlusIcon";
const n$1 = e;
const c$3 = reactExports.forwardRef((e2, t2) => /* @__PURE__ */ reactExports.createElement(p, { ref: t2, ...e2, weights: e$a }));
c$3.displayName = "RocketLaunchIcon";
const s$2 = c$3;
const o$4 = reactExports.forwardRef((r2, s16) => /* @__PURE__ */ reactExports.createElement(p, { ref: s16, ...r2, weights: e$9 }));
o$4.displayName = "SlidersIcon";
const c$2 = o$4;
const o$3 = reactExports.forwardRef((r2, a2) => /* @__PURE__ */ reactExports.createElement(p, { ref: a2, ...r2, weights: l$1 }));
o$3.displayName = "SparkleIcon";
const s$1 = o$3;
const o$2 = reactExports.forwardRef((r2, a2) => /* @__PURE__ */ reactExports.createElement(p, { ref: a2, ...r2, weights: a$2 }));
o$2.displayName = "TerminalIcon";
const c$1 = o$2;
const r$1 = reactExports.forwardRef((a2, e2) => /* @__PURE__ */ reactExports.createElement(p, { ref: e2, ...a2, weights: e$8 }));
r$1.displayName = "TrashIcon";
const n = r$1;
const r = reactExports.forwardRef((n2, a2) => /* @__PURE__ */ reactExports.createElement(p, { ref: a2, ...n2, weights: e$7 }));
r.displayName = "WarningIcon";
const c = r;
const o$1 = reactExports.forwardRef((r2, c2) => /* @__PURE__ */ reactExports.createElement(p, { ref: c2, ...r2, weights: a$1 }));
o$1.displayName = "XCircleIcon";
const s = o$1;
const ICON_MAP = {
  archive: s$9,
  "arrows-clockwise": m$5,
  "book-open": c$6,
  "caret-down": s$8,
  chat: m$4,
  check: n$5,
  "check-circle": s$7,
  compass: c$4,
  cpu: s$5,
  "file-text": s$4,
  folder: n$4,
  "folder-open": m$3,
  "gear-six": s$3,
  "git-branch": m$2,
  magnifier: f,
  package: n$3,
  pencil: m,
  play: n$2,
  plus: n$1,
  progress: l,
  "pull-request": m$1,
  "rocket-launch": s$2,
  sliders: c$2,
  sparkle: s$1,
  terminal: c$1,
  trash: n,
  warning: c,
  "x-circle": s
};
function Icon({ name, size = 16, className, style }) {
  const Component = ICON_MAP[name];
  if (!Component) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      size,
      weight: "duotone",
      className,
      style: { display: "block", flex: "none", ...style }
    }
  );
}
const STATE_META = {
  draft: { label: "Draft", icon: "pencil", fg: "var(--state-draft-fg)", bg: "var(--state-draft-bg)" },
  proposed: { label: "Proposed", icon: "pull-request", fg: "var(--state-proposed-fg)", bg: "var(--state-proposed-bg)" },
  partial: { label: "Partial", icon: "progress", fg: "var(--state-partial-fg)", bg: "var(--state-partial-bg)" },
  applied: { label: "Applied", icon: "check-circle", fg: "var(--state-applied-fg)", bg: "var(--state-applied-bg)" },
  archived: { label: "Archived", icon: "archive", fg: "var(--state-archived-fg)", bg: "var(--state-archived-bg)" }
};
const TONE_META = {
  success: { fg: "var(--success-fg)", bg: "var(--success-muted)" },
  warning: { fg: "var(--warning-fg)", bg: "var(--warning-muted)" },
  danger: { fg: "var(--danger-fg)", bg: "var(--danger-muted)" },
  accent: { fg: "var(--accent-fg)", bg: "var(--accent-muted)" },
  neutral: { fg: "var(--fg-muted)", bg: "var(--bg-subtle)" }
};
function Badge({ state, tone, icon, children }) {
  if (state) {
    const m22 = STATE_META[state];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "badge", style: { color: m22.fg, background: m22.bg }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: m22.icon, size: 13 }),
      m22.label
    ] });
  }
  const m2 = TONE_META[tone ?? "neutral"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "badge", style: { color: m2.fg, background: m2.bg }, children: [
    icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: icon, size: 13 }),
    children
  ] });
}
function Field({ label, help, error, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "field", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "field-label", children: label }),
    children,
    help && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "field-help" + (error ? " error" : ""), children: help })
  ] });
}
function Input({ error, mono, className = "", ...rest }) {
  const cls = [
    "input",
    error ? "error" : null,
    mono ? "mono" : null,
    className || null
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: cls, ...rest });
}
function TextArea({ error, mono, className = "", ...rest }) {
  const cls = [
    "input",
    error ? "error" : null,
    mono ? "mono" : null,
    className || null
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: cls, ...rest });
}
function Select({ groups, value, onChange, icon }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) return;
    const handler = (e2) => {
      if (ref.current && !ref.current.contains(e2.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  const all = groups.flatMap((g) => g.options);
  const current = all.find((o2) => o2.value === value) ?? all[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "select-wrap", ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "select" + (open ? " open" : ""),
        onClick: () => setOpen((o2) => !o2),
        type: "button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "lead", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: current?.icon ?? icon ?? "cpu", size: 16, className: "ic" }),
            current?.label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "caret-down", size: 14, className: "caret" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover", role: "listbox", children: groups.map((g, gi2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      g.label && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pop-group", children: g.label }),
      g.options.map((o2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "opt" + (o2.value === value ? " selected" : ""),
          role: "option",
          "aria-selected": o2.value === value,
          onClick: () => {
            onChange?.(o2.value);
            setOpen(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: o2.icon ?? "cpu", size: 16, className: "ic" }),
            o2.label,
            o2.value === value && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", size: 13, className: "tick" })
          ]
        },
        o2.value
      ))
    ] }, gi2)) })
  ] });
}
function Segmented({ options, value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "segmented", children: options.map((o2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: "segment" + (o2.value === value ? " active" : ""),
      onClick: () => onChange?.(o2.value),
      children: [
        o2.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: o2.icon, size: 14 }),
        o2.label
      ]
    },
    o2.value
  )) });
}
function ConfirmDialog({ title, message, confirmLabel = "Confirm", onConfirm, onCancel }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.4)",
    zIndex: 100
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    background: "var(--bg-surface)",
    border: "1px solid var(--border-default)",
    borderRadius: "var(--radius-lg)",
    padding: "24px",
    maxWidth: 380,
    width: "90%",
    display: "flex",
    flexDirection: "column",
    gap: 12
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--fg-default)"
    }, children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      fontSize: "var(--text-sm)",
      color: "var(--fg-muted)",
      lineHeight: "var(--leading-relaxed)"
    }, children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 4 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onCancel, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", size: "sm", onClick: onConfirm, children: confirmLabel })
    ] })
  ] }) });
}
function RepoSelectorScreen({ onOpenRepo }) {
  const [loading, setLoading] = reactExports.useState(false);
  async function handleOpen() {
    setLoading(true);
    await onOpenRepo();
    setLoading(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--bg-app)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    maxWidth: 340,
    textAlign: "center",
    padding: "0 24px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      width: 56,
      height: 56,
      borderRadius: "var(--radius-lg)",
      background: "var(--accent-muted)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--accent-fg)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "terminal", size: 28 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: "var(--text-xl, 1.25rem)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--fg-default)"
      }, children: "CodeSpec" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-sm)", color: "var(--fg-subtle)", lineHeight: "var(--leading-relaxed)" }, children: "Open a repository to view and create OpenSpec proposals with your AI CLI tools." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "primary",
        size: "md",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "git-branch", size: 16 }),
        onClick: handleOpen,
        loading,
        children: "Open Repository"
      }
    )
  ] }) });
}
/**
 * Copyright (c) 2014-2024 The xterm.js authors. All rights reserved.
 * @license MIT
 *
 * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
 * @license MIT
 *
 * Originally forked from (with the author's permission):
 *   Fabrice Bellard's javascript vt100 for jslinux:
 *   http://bellard.org/jslinux/
 *   Copyright (c) 2011 Fabrice Bellard
 */
var zs = Object.defineProperty;
var Rl = Object.getOwnPropertyDescriptor;
var Ll = (s16, t2) => {
  for (var e2 in t2) zs(s16, e2, { get: t2[e2], enumerable: true });
};
var M = (s16, t2, e2, i) => {
  for (var r2 = i > 1 ? void 0 : i ? Rl(t2, e2) : t2, n2 = s16.length - 1, o2; n2 >= 0; n2--) (o2 = s16[n2]) && (r2 = (i ? o2(t2, e2, r2) : o2(r2)) || r2);
  return i && r2 && zs(t2, e2, r2), r2;
}, S = (s16, t2) => (e2, i) => t2(e2, i, s16);
var Gs = "Terminal input", mi = { get: () => Gs, set: (s16) => Gs = s16 }, $s = "Too much output to announce, navigate to rows manually to read", _i = { get: () => $s, set: (s16) => $s = s16 };
function Al(s16) {
  return s16.replace(/\r?\n/g, "\r");
}
function kl(s16, t2) {
  return t2 ? "\x1B[200~" + s16 + "\x1B[201~" : s16;
}
function Vs(s16, t2) {
  s16.clipboardData && s16.clipboardData.setData("text/plain", t2.selectionText), s16.preventDefault();
}
function qs(s16, t2, e2, i) {
  if (s16.stopPropagation(), s16.clipboardData) {
    let r2 = s16.clipboardData.getData("text/plain");
    Cn(r2, t2, e2, i);
  }
}
function Cn(s16, t2, e2, i) {
  s16 = Al(s16), s16 = kl(s16, e2.decPrivateModes.bracketedPasteMode && i.rawOptions.ignoreBracketedPasteMode !== true), e2.triggerDataEvent(s16, true), t2.value = "";
}
function Mn(s16, t2, e2) {
  let i = e2.getBoundingClientRect(), r2 = s16.clientX - i.left - 10, n2 = s16.clientY - i.top - 10;
  t2.style.width = "20px", t2.style.height = "20px", t2.style.left = `${r2}px`, t2.style.top = `${n2}px`, t2.style.zIndex = "1000", t2.focus();
}
function Pn(s16, t2, e2, i, r2) {
  Mn(s16, t2, e2), r2 && i.rightClickSelect(s16), t2.value = i.selectionText, t2.select();
}
function Ce(s16) {
  return s16 > 65535 ? (s16 -= 65536, String.fromCharCode((s16 >> 10) + 55296) + String.fromCharCode(s16 % 1024 + 56320)) : String.fromCharCode(s16);
}
function It(s16, t2 = 0, e2 = s16.length) {
  let i = "";
  for (let r2 = t2; r2 < e2; ++r2) {
    let n2 = s16[r2];
    n2 > 65535 ? (n2 -= 65536, i += String.fromCharCode((n2 >> 10) + 55296) + String.fromCharCode(n2 % 1024 + 56320)) : i += String.fromCharCode(n2);
  }
  return i;
}
var er = class {
  constructor() {
    this._interim = 0;
  }
  clear() {
    this._interim = 0;
  }
  decode(t2, e2) {
    let i = t2.length;
    if (!i) return 0;
    let r2 = 0, n2 = 0;
    if (this._interim) {
      let o2 = t2.charCodeAt(n2++);
      56320 <= o2 && o2 <= 57343 ? e2[r2++] = (this._interim - 55296) * 1024 + o2 - 56320 + 65536 : (e2[r2++] = this._interim, e2[r2++] = o2), this._interim = 0;
    }
    for (let o2 = n2; o2 < i; ++o2) {
      let l2 = t2.charCodeAt(o2);
      if (55296 <= l2 && l2 <= 56319) {
        if (++o2 >= i) return this._interim = l2, r2;
        let a2 = t2.charCodeAt(o2);
        56320 <= a2 && a2 <= 57343 ? e2[r2++] = (l2 - 55296) * 1024 + a2 - 56320 + 65536 : (e2[r2++] = l2, e2[r2++] = a2);
        continue;
      }
      l2 !== 65279 && (e2[r2++] = l2);
    }
    return r2;
  }
}, tr = class {
  constructor() {
    this.interim = new Uint8Array(3);
  }
  clear() {
    this.interim.fill(0);
  }
  decode(t2, e2) {
    let i = t2.length;
    if (!i) return 0;
    let r2 = 0, n2, o2, l2, a2, u2 = 0, h2 = 0;
    if (this.interim[0]) {
      let _2 = false, p2 = this.interim[0];
      p2 &= (p2 & 224) === 192 ? 31 : (p2 & 240) === 224 ? 15 : 7;
      let m2 = 0, f2;
      for (; (f2 = this.interim[++m2] & 63) && m2 < 4; ) p2 <<= 6, p2 |= f2;
      let A2 = (this.interim[0] & 224) === 192 ? 2 : (this.interim[0] & 240) === 224 ? 3 : 4, R2 = A2 - m2;
      for (; h2 < R2; ) {
        if (h2 >= i) return 0;
        if (f2 = t2[h2++], (f2 & 192) !== 128) {
          h2--, _2 = true;
          break;
        } else this.interim[m2++] = f2, p2 <<= 6, p2 |= f2 & 63;
      }
      _2 || (A2 === 2 ? p2 < 128 ? h2-- : e2[r2++] = p2 : A2 === 3 ? p2 < 2048 || p2 >= 55296 && p2 <= 57343 || p2 === 65279 || (e2[r2++] = p2) : p2 < 65536 || p2 > 1114111 || (e2[r2++] = p2)), this.interim.fill(0);
    }
    let c2 = i - 4, d = h2;
    for (; d < i; ) {
      for (; d < c2 && !((n2 = t2[d]) & 128) && !((o2 = t2[d + 1]) & 128) && !((l2 = t2[d + 2]) & 128) && !((a2 = t2[d + 3]) & 128); ) e2[r2++] = n2, e2[r2++] = o2, e2[r2++] = l2, e2[r2++] = a2, d += 4;
      if (n2 = t2[d++], n2 < 128) e2[r2++] = n2;
      else if ((n2 & 224) === 192) {
        if (d >= i) return this.interim[0] = n2, r2;
        if (o2 = t2[d++], (o2 & 192) !== 128) {
          d--;
          continue;
        }
        if (u2 = (n2 & 31) << 6 | o2 & 63, u2 < 128) {
          d--;
          continue;
        }
        e2[r2++] = u2;
      } else if ((n2 & 240) === 224) {
        if (d >= i) return this.interim[0] = n2, r2;
        if (o2 = t2[d++], (o2 & 192) !== 128) {
          d--;
          continue;
        }
        if (d >= i) return this.interim[0] = n2, this.interim[1] = o2, r2;
        if (l2 = t2[d++], (l2 & 192) !== 128) {
          d--;
          continue;
        }
        if (u2 = (n2 & 15) << 12 | (o2 & 63) << 6 | l2 & 63, u2 < 2048 || u2 >= 55296 && u2 <= 57343 || u2 === 65279) continue;
        e2[r2++] = u2;
      } else if ((n2 & 248) === 240) {
        if (d >= i) return this.interim[0] = n2, r2;
        if (o2 = t2[d++], (o2 & 192) !== 128) {
          d--;
          continue;
        }
        if (d >= i) return this.interim[0] = n2, this.interim[1] = o2, r2;
        if (l2 = t2[d++], (l2 & 192) !== 128) {
          d--;
          continue;
        }
        if (d >= i) return this.interim[0] = n2, this.interim[1] = o2, this.interim[2] = l2, r2;
        if (a2 = t2[d++], (a2 & 192) !== 128) {
          d--;
          continue;
        }
        if (u2 = (n2 & 7) << 18 | (o2 & 63) << 12 | (l2 & 63) << 6 | a2 & 63, u2 < 65536 || u2 > 1114111) continue;
        e2[r2++] = u2;
      }
    }
    return r2;
  }
};
var ir = "";
var we = " ";
var De = class s2 {
  constructor() {
    this.fg = 0;
    this.bg = 0;
    this.extended = new rt();
  }
  static toColorRGB(t2) {
    return [t2 >>> 16 & 255, t2 >>> 8 & 255, t2 & 255];
  }
  static fromColorRGB(t2) {
    return (t2[0] & 255) << 16 | (t2[1] & 255) << 8 | t2[2] & 255;
  }
  clone() {
    let t2 = new s2();
    return t2.fg = this.fg, t2.bg = this.bg, t2.extended = this.extended.clone(), t2;
  }
  isInverse() {
    return this.fg & 67108864;
  }
  isBold() {
    return this.fg & 134217728;
  }
  isUnderline() {
    return this.hasExtendedAttrs() && this.extended.underlineStyle !== 0 ? 1 : this.fg & 268435456;
  }
  isBlink() {
    return this.fg & 536870912;
  }
  isInvisible() {
    return this.fg & 1073741824;
  }
  isItalic() {
    return this.bg & 67108864;
  }
  isDim() {
    return this.bg & 134217728;
  }
  isStrikethrough() {
    return this.fg & 2147483648;
  }
  isProtected() {
    return this.bg & 536870912;
  }
  isOverline() {
    return this.bg & 1073741824;
  }
  getFgColorMode() {
    return this.fg & 50331648;
  }
  getBgColorMode() {
    return this.bg & 50331648;
  }
  isFgRGB() {
    return (this.fg & 50331648) === 50331648;
  }
  isBgRGB() {
    return (this.bg & 50331648) === 50331648;
  }
  isFgPalette() {
    return (this.fg & 50331648) === 16777216 || (this.fg & 50331648) === 33554432;
  }
  isBgPalette() {
    return (this.bg & 50331648) === 16777216 || (this.bg & 50331648) === 33554432;
  }
  isFgDefault() {
    return (this.fg & 50331648) === 0;
  }
  isBgDefault() {
    return (this.bg & 50331648) === 0;
  }
  isAttributeDefault() {
    return this.fg === 0 && this.bg === 0;
  }
  getFgColor() {
    switch (this.fg & 50331648) {
      case 16777216:
      case 33554432:
        return this.fg & 255;
      case 50331648:
        return this.fg & 16777215;
      default:
        return -1;
    }
  }
  getBgColor() {
    switch (this.bg & 50331648) {
      case 16777216:
      case 33554432:
        return this.bg & 255;
      case 50331648:
        return this.bg & 16777215;
      default:
        return -1;
    }
  }
  hasExtendedAttrs() {
    return this.bg & 268435456;
  }
  updateExtended() {
    this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
  }
  getUnderlineColor() {
    if (this.bg & 268435456 && ~this.extended.underlineColor) switch (this.extended.underlineColor & 50331648) {
      case 16777216:
      case 33554432:
        return this.extended.underlineColor & 255;
      case 50331648:
        return this.extended.underlineColor & 16777215;
      default:
        return this.getFgColor();
    }
    return this.getFgColor();
  }
  getUnderlineColorMode() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? this.extended.underlineColor & 50331648 : this.getFgColorMode();
  }
  isUnderlineColorRGB() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) === 50331648 : this.isFgRGB();
  }
  isUnderlineColorPalette() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) === 16777216 || (this.extended.underlineColor & 50331648) === 33554432 : this.isFgPalette();
  }
  isUnderlineColorDefault() {
    return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) === 0 : this.isFgDefault();
  }
  getUnderlineStyle() {
    return this.fg & 268435456 ? this.bg & 268435456 ? this.extended.underlineStyle : 1 : 0;
  }
  getUnderlineVariantOffset() {
    return this.extended.underlineVariantOffset;
  }
}, rt = class s3 {
  constructor(t2 = 0, e2 = 0) {
    this._ext = 0;
    this._urlId = 0;
    this._ext = t2, this._urlId = e2;
  }
  get ext() {
    return this._urlId ? this._ext & -469762049 | this.underlineStyle << 26 : this._ext;
  }
  set ext(t2) {
    this._ext = t2;
  }
  get underlineStyle() {
    return this._urlId ? 5 : (this._ext & 469762048) >> 26;
  }
  set underlineStyle(t2) {
    this._ext &= -469762049, this._ext |= t2 << 26 & 469762048;
  }
  get underlineColor() {
    return this._ext & 67108863;
  }
  set underlineColor(t2) {
    this._ext &= -67108864, this._ext |= t2 & 67108863;
  }
  get urlId() {
    return this._urlId;
  }
  set urlId(t2) {
    this._urlId = t2;
  }
  get underlineVariantOffset() {
    let t2 = (this._ext & 3758096384) >> 29;
    return t2 < 0 ? t2 ^ 4294967288 : t2;
  }
  set underlineVariantOffset(t2) {
    this._ext &= 536870911, this._ext |= t2 << 29 & 3758096384;
  }
  clone() {
    return new s3(this._ext, this._urlId);
  }
  isEmpty() {
    return this.underlineStyle === 0 && this._urlId === 0;
  }
};
var q = class s4 extends De {
  constructor() {
    super(...arguments);
    this.content = 0;
    this.fg = 0;
    this.bg = 0;
    this.extended = new rt();
    this.combinedData = "";
  }
  static fromCharData(e2) {
    let i = new s4();
    return i.setFromCharData(e2), i;
  }
  isCombined() {
    return this.content & 2097152;
  }
  getWidth() {
    return this.content >> 22;
  }
  getChars() {
    return this.content & 2097152 ? this.combinedData : this.content & 2097151 ? Ce(this.content & 2097151) : "";
  }
  getCode() {
    return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : this.content & 2097151;
  }
  setFromCharData(e2) {
    this.fg = e2[0], this.bg = 0;
    let i = false;
    if (e2[1].length > 2) i = true;
    else if (e2[1].length === 2) {
      let r2 = e2[1].charCodeAt(0);
      if (55296 <= r2 && r2 <= 56319) {
        let n2 = e2[1].charCodeAt(1);
        56320 <= n2 && n2 <= 57343 ? this.content = (r2 - 55296) * 1024 + n2 - 56320 + 65536 | e2[2] << 22 : i = true;
      } else i = true;
    } else this.content = e2[1].charCodeAt(0) | e2[2] << 22;
    i && (this.combinedData = e2[1], this.content = 2097152 | e2[2] << 22);
  }
  getAsCharData() {
    return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
  }
};
var js = "di$target", Hn = "di$dependencies", Fn = /* @__PURE__ */ new Map();
function Xs(s16) {
  return s16[Hn] || [];
}
function ie(s16) {
  if (Fn.has(s16)) return Fn.get(s16);
  let t2 = function(e2, i, r2) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    Pl(t2, e2, r2);
  };
  return t2._id = s16, Fn.set(s16, t2), t2;
}
function Pl(s16, t2, e2) {
  t2[js] === t2 ? t2[Hn].push({ id: s16, index: e2 }) : (t2[Hn] = [{ id: s16, index: e2 }], t2[js] = t2);
}
var F = ie("BufferService"), rr = ie("CoreMouseService"), ge = ie("CoreService"), Zs = ie("CharsetService"), xt = ie("InstantiationService");
var nr = ie("LogService"), H = ie("OptionsService"), sr = ie("OscLinkService"), Js = ie("UnicodeService"), Be = ie("DecorationService");
var wt = class {
  constructor(t2, e2, i) {
    this._bufferService = t2;
    this._optionsService = e2;
    this._oscLinkService = i;
  }
  provideLinks(t2, e2) {
    let i = this._bufferService.buffer.lines.get(t2 - 1);
    if (!i) {
      e2(void 0);
      return;
    }
    let r2 = [], n2 = this._optionsService.rawOptions.linkHandler, o2 = new q(), l2 = i.getTrimmedLength(), a2 = -1, u2 = -1, h2 = false;
    for (let c2 = 0; c2 < l2; c2++) if (!(u2 === -1 && !i.hasContent(c2))) {
      if (i.loadCell(c2, o2), o2.hasExtendedAttrs() && o2.extended.urlId) if (u2 === -1) {
        u2 = c2, a2 = o2.extended.urlId;
        continue;
      } else h2 = o2.extended.urlId !== a2;
      else u2 !== -1 && (h2 = true);
      if (h2 || u2 !== -1 && c2 === l2 - 1) {
        let d = this._oscLinkService.getLinkData(a2)?.uri;
        if (d) {
          let _2 = { start: { x: u2 + 1, y: t2 }, end: { x: c2 + (!h2 && c2 === l2 - 1 ? 1 : 0), y: t2 } }, p2 = false;
          if (!n2?.allowNonHttpProtocols) try {
            let m2 = new URL(d);
            ["http:", "https:"].includes(m2.protocol) || (p2 = true);
          } catch {
            p2 = true;
          }
          p2 || r2.push({ text: d, range: _2, activate: (m2, f2) => n2 ? n2.activate(m2, f2, _2) : Ol(m2, f2), hover: (m2, f2) => n2?.hover?.(m2, f2, _2), leave: (m2, f2) => n2?.leave?.(m2, f2, _2) });
        }
        h2 = false, o2.hasExtendedAttrs() && o2.extended.urlId ? (u2 = c2, a2 = o2.extended.urlId) : (u2 = -1, a2 = -1);
      }
    }
    e2(r2);
  }
};
wt = M([S(0, F), S(1, H), S(2, sr)], wt);
function Ol(s16, t2) {
  if (confirm(`Do you want to navigate to ${t2}?

WARNING: This link could potentially be dangerous`)) {
    let i = window.open();
    if (i) {
      try {
        i.opener = null;
      } catch {
      }
      i.location.href = t2;
    } else console.warn("Opening link blocked as opener could not be cleared");
  }
}
var nt = ie("CharSizeService"), ae = ie("CoreBrowserService"), Dt = ie("MouseService"), ce = ie("RenderService"), Qs = ie("SelectionService"), or = ie("CharacterJoinerService"), Re = ie("ThemeService"), lr = ie("LinkProviderService");
var Wn = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(t2) {
      setTimeout(() => {
        throw t2.stack ? ar.isErrorNoTelemetry(t2) ? new ar(t2.message + `

` + t2.stack) : new Error(t2.message + `

` + t2.stack) : t2;
      }, 0);
    };
  }
  addListener(t2) {
    return this.listeners.push(t2), () => {
      this._removeListener(t2);
    };
  }
  emit(t2) {
    this.listeners.forEach((e2) => {
      e2(t2);
    });
  }
  _removeListener(t2) {
    this.listeners.splice(this.listeners.indexOf(t2), 1);
  }
  setUnexpectedErrorHandler(t2) {
    this.unexpectedErrorHandler = t2;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(t2) {
    this.unexpectedErrorHandler(t2), this.emit(t2);
  }
  onUnexpectedExternalError(t2) {
    this.unexpectedErrorHandler(t2);
  }
}, Bl = new Wn();
function Lt(s16) {
  Nl(s16) || Bl.onUnexpectedError(s16);
}
var Un = "Canceled";
function Nl(s16) {
  return s16 instanceof bi ? true : s16 instanceof Error && s16.name === Un && s16.message === Un;
}
var bi = class extends Error {
  constructor() {
    super(Un), this.name = this.message;
  }
};
function eo(s16) {
  return new Error(`Illegal argument: ${s16}`);
}
var ar = class s5 extends Error {
  constructor(t2) {
    super(t2), this.name = "CodeExpectedError";
  }
  static fromError(t2) {
    if (t2 instanceof s5) return t2;
    let e2 = new s5();
    return e2.message = t2.message, e2.stack = t2.stack, e2;
  }
  static isErrorNoTelemetry(t2) {
    return t2.name === "CodeExpectedError";
  }
}, Rt = class s6 extends Error {
  constructor(t2) {
    super(t2 || "An unexpected bug occurred."), Object.setPrototypeOf(this, s6.prototype);
  }
};
function Se(s16, t2 = 0) {
  return s16[s16.length - (1 + t2)];
}
var ro;
((l2) => {
  function s16(a2) {
    return a2 < 0;
  }
  l2.isLessThan = s16;
  function t2(a2) {
    return a2 <= 0;
  }
  l2.isLessThanOrEqual = t2;
  function e2(a2) {
    return a2 > 0;
  }
  l2.isGreaterThan = e2;
  function i(a2) {
    return a2 === 0;
  }
  l2.isNeitherLessOrGreaterThan = i, l2.greaterThan = 1, l2.lessThan = -1, l2.neitherLessOrGreaterThan = 0;
})(ro ||= {});
function Kn(s16, t2) {
  let e2 = this, i = false, r2;
  return function() {
    if (i) return r2;
    if (i = true, t2) ;
    else r2 = s16.apply(e2, arguments);
    return r2;
  };
}
var zn;
((O2) => {
  function s16(I2) {
    return I2 && typeof I2 == "object" && typeof I2[Symbol.iterator] == "function";
  }
  O2.is = s16;
  let t2 = Object.freeze([]);
  function e2() {
    return t2;
  }
  O2.empty = e2;
  function* i(I2) {
    yield I2;
  }
  O2.single = i;
  function r2(I2) {
    return s16(I2) ? I2 : i(I2);
  }
  O2.wrap = r2;
  function n2(I2) {
    return I2 || t2;
  }
  O2.from = n2;
  function* o2(I2) {
    for (let k2 = I2.length - 1; k2 >= 0; k2--) yield I2[k2];
  }
  O2.reverse = o2;
  function l2(I2) {
    return !I2 || I2[Symbol.iterator]().next().done === true;
  }
  O2.isEmpty = l2;
  function a2(I2) {
    return I2[Symbol.iterator]().next().value;
  }
  O2.first = a2;
  function u2(I2, k2) {
    let P2 = 0;
    for (let oe2 of I2) if (k2(oe2, P2++)) return true;
    return false;
  }
  O2.some = u2;
  function h2(I2, k2) {
    for (let P2 of I2) if (k2(P2)) return P2;
  }
  O2.find = h2;
  function* c2(I2, k2) {
    for (let P2 of I2) k2(P2) && (yield P2);
  }
  O2.filter = c2;
  function* d(I2, k2) {
    let P2 = 0;
    for (let oe2 of I2) yield k2(oe2, P2++);
  }
  O2.map = d;
  function* _2(I2, k2) {
    let P2 = 0;
    for (let oe2 of I2) yield* k2(oe2, P2++);
  }
  O2.flatMap = _2;
  function* p2(...I2) {
    for (let k2 of I2) yield* k2;
  }
  O2.concat = p2;
  function m2(I2, k2, P2) {
    let oe2 = P2;
    for (let Me2 of I2) oe2 = k2(oe2, Me2);
    return oe2;
  }
  O2.reduce = m2;
  function* f2(I2, k2, P2 = I2.length) {
    for (k2 < 0 && (k2 += I2.length), P2 < 0 ? P2 += I2.length : P2 > I2.length && (P2 = I2.length); k2 < P2; k2++) yield I2[k2];
  }
  O2.slice = f2;
  function A2(I2, k2 = Number.POSITIVE_INFINITY) {
    let P2 = [];
    if (k2 === 0) return [P2, I2];
    let oe2 = I2[Symbol.iterator]();
    for (let Me2 = 0; Me2 < k2; Me2++) {
      let Pe2 = oe2.next();
      if (Pe2.done) return [P2, O2.empty()];
      P2.push(Pe2.value);
    }
    return [P2, { [Symbol.iterator]() {
      return oe2;
    } }];
  }
  O2.consume = A2;
  async function R2(I2) {
    let k2 = [];
    for await (let P2 of I2) k2.push(P2);
    return Promise.resolve(k2);
  }
  O2.asyncToArray = R2;
})(zn ||= {});
function fr(s16) {
  return s16;
}
function vi(s16, t2) {
}
function Gn(s16) {
  return s16;
}
function Ne(s16) {
  if (zn.is(s16)) {
    let t2 = [];
    for (let e2 of s16) if (e2) try {
      e2.dispose();
    } catch (i) {
      t2.push(i);
    }
    if (t2.length === 1) throw t2[0];
    if (t2.length > 1) throw new AggregateError(t2, "Encountered errors while disposing of store");
    return Array.isArray(s16) ? [] : s16;
  } else if (s16) return s16.dispose(), s16;
}
function ho(...s16) {
  let t2 = C(() => Ne(s16));
  return t2;
}
function C(s16) {
  let t2 = fr({ dispose: Kn(() => {
    s16();
  }) });
  return t2;
}
var dr = class dr2 {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set();
    this._isDisposed = false;
  }
  dispose() {
    this._isDisposed || (this._isDisposed = true, this.clear());
  }
  get isDisposed() {
    return this._isDisposed;
  }
  clear() {
    if (this._toDispose.size !== 0) try {
      Ne(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(t2) {
    if (!t2) return t2;
    if (t2 === this) throw new Error("Cannot register a disposable on itself!");
    return this._isDisposed ? dr2.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(t2), t2;
  }
  delete(t2) {
    if (t2) {
      if (t2 === this) throw new Error("Cannot dispose a disposable on itself!");
      this._toDispose.delete(t2), t2.dispose();
    }
  }
  deleteAndLeak(t2) {
    t2 && this._toDispose.has(t2) && (this._toDispose.delete(t2), vi());
  }
};
dr.DISABLE_DISPOSED_WARNING = false;
var Ee = dr, D = class {
  constructor() {
    this._store = new Ee();
    vi(this._store);
  }
  dispose() {
    this._store.dispose();
  }
  _register(t2) {
    if (t2 === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(t2);
  }
};
D.None = Object.freeze({ dispose() {
} });
var ye = class {
  constructor() {
    this._isDisposed = false;
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(t2) {
    this._isDisposed || t2 === this._value || (this._value?.dispose(), this._value = t2);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    let t2 = this._value;
    return this._value = void 0, t2;
  }
};
var fe = typeof window == "object" ? window : globalThis;
var kt = class kt2 {
  constructor(t2) {
    this.element = t2, this.next = kt2.Undefined, this.prev = kt2.Undefined;
  }
};
kt.Undefined = new kt(void 0);
var G = kt, Ct = class {
  constructor() {
    this._first = G.Undefined;
    this._last = G.Undefined;
    this._size = 0;
  }
  get size() {
    return this._size;
  }
  isEmpty() {
    return this._first === G.Undefined;
  }
  clear() {
    let t2 = this._first;
    for (; t2 !== G.Undefined; ) {
      let e2 = t2.next;
      t2.prev = G.Undefined, t2.next = G.Undefined, t2 = e2;
    }
    this._first = G.Undefined, this._last = G.Undefined, this._size = 0;
  }
  unshift(t2) {
    return this._insert(t2, false);
  }
  push(t2) {
    return this._insert(t2, true);
  }
  _insert(t2, e2) {
    let i = new G(t2);
    if (this._first === G.Undefined) this._first = i, this._last = i;
    else if (e2) {
      let n2 = this._last;
      this._last = i, i.prev = n2, n2.next = i;
    } else {
      let n2 = this._first;
      this._first = i, i.next = n2, n2.prev = i;
    }
    this._size += 1;
    let r2 = false;
    return () => {
      r2 || (r2 = true, this._remove(i));
    };
  }
  shift() {
    if (this._first !== G.Undefined) {
      let t2 = this._first.element;
      return this._remove(this._first), t2;
    }
  }
  pop() {
    if (this._last !== G.Undefined) {
      let t2 = this._last.element;
      return this._remove(this._last), t2;
    }
  }
  _remove(t2) {
    if (t2.prev !== G.Undefined && t2.next !== G.Undefined) {
      let e2 = t2.prev;
      e2.next = t2.next, t2.next.prev = e2;
    } else t2.prev === G.Undefined && t2.next === G.Undefined ? (this._first = G.Undefined, this._last = G.Undefined) : t2.next === G.Undefined ? (this._last = this._last.prev, this._last.next = G.Undefined) : t2.prev === G.Undefined && (this._first = this._first.next, this._first.prev = G.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let t2 = this._first;
    for (; t2 !== G.Undefined; ) yield t2.element, t2 = t2.next;
  }
};
var zl = globalThis.performance && typeof globalThis.performance.now == "function", mr = class s7 {
  static create(t2) {
    return new s7(t2);
  }
  constructor(t2) {
    this._now = zl && t2 === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
  }
  stop() {
    this._stopTime = this._now();
  }
  reset() {
    this._startTime = this._now(), this._stopTime = -1;
  }
  elapsed() {
    return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
  }
};
var $;
((Qe2) => {
  Qe2.None = () => D.None;
  function e2(y2, T2) {
    return d(y2, () => {
    }, 0, void 0, true, void 0, T2);
  }
  Qe2.defer = e2;
  function i(y2) {
    return (T2, g = null, w2) => {
      let E2 = false, x2;
      return x2 = y2((N2) => {
        if (!E2) return x2 ? x2.dispose() : E2 = true, T2.call(g, N2);
      }, null, w2), E2 && x2.dispose(), x2;
    };
  }
  Qe2.once = i;
  function r2(y2, T2, g) {
    return h2((w2, E2 = null, x2) => y2((N2) => w2.call(E2, T2(N2)), null, x2), g);
  }
  Qe2.map = r2;
  function n2(y2, T2, g) {
    return h2((w2, E2 = null, x2) => y2((N2) => {
      T2(N2), w2.call(E2, N2);
    }, null, x2), g);
  }
  Qe2.forEach = n2;
  function o2(y2, T2, g) {
    return h2((w2, E2 = null, x2) => y2((N2) => T2(N2) && w2.call(E2, N2), null, x2), g);
  }
  Qe2.filter = o2;
  function l2(y2) {
    return y2;
  }
  Qe2.signal = l2;
  function a2(...y2) {
    return (T2, g = null, w2) => {
      let E2 = ho(...y2.map((x2) => x2((N2) => T2.call(g, N2))));
      return c2(E2, w2);
    };
  }
  Qe2.any = a2;
  function u2(y2, T2, g, w2) {
    let E2 = g;
    return r2(y2, (x2) => (E2 = T2(E2, x2), E2), w2);
  }
  Qe2.reduce = u2;
  function h2(y2, T2) {
    let g, w2 = { onWillAddFirstListener() {
      g = y2(E2.fire, E2);
    }, onDidRemoveLastListener() {
      g?.dispose();
    } };
    let E2 = new v(w2);
    return T2?.add(E2), E2.event;
  }
  function c2(y2, T2) {
    return T2 instanceof Array ? T2.push(y2) : T2 && T2.add(y2), y2;
  }
  function d(y2, T2, g = 100, w2 = false, E2 = false, x2, N2) {
    let Z2, te2, Oe2, ze = 0, le2, et = { leakWarningThreshold: x2, onWillAddFirstListener() {
      Z2 = y2((ht) => {
        ze++, te2 = T2(te2, ht), w2 && !Oe2 && (me2.fire(te2), te2 = void 0), le2 = () => {
          let fi2 = te2;
          te2 = void 0, Oe2 = void 0, (!w2 || ze > 1) && me2.fire(fi2), ze = 0;
        }, typeof g == "number" ? (clearTimeout(Oe2), Oe2 = setTimeout(le2, g)) : Oe2 === void 0 && (Oe2 = 0, queueMicrotask(le2));
      });
    }, onWillRemoveListener() {
      E2 && ze > 0 && le2?.();
    }, onDidRemoveLastListener() {
      le2 = void 0, Z2.dispose();
    } };
    let me2 = new v(et);
    return N2?.add(me2), me2.event;
  }
  Qe2.debounce = d;
  function _2(y2, T2 = 0, g) {
    return Qe2.debounce(y2, (w2, E2) => w2 ? (w2.push(E2), w2) : [E2], T2, void 0, true, void 0, g);
  }
  Qe2.accumulate = _2;
  function p2(y2, T2 = (w2, E2) => w2 === E2, g) {
    let w2 = true, E2;
    return o2(y2, (x2) => {
      let N2 = w2 || !T2(x2, E2);
      return w2 = false, E2 = x2, N2;
    }, g);
  }
  Qe2.latch = p2;
  function m2(y2, T2, g) {
    return [Qe2.filter(y2, T2, g), Qe2.filter(y2, (w2) => !T2(w2), g)];
  }
  Qe2.split = m2;
  function f2(y2, T2 = false, g = [], w2) {
    let E2 = g.slice(), x2 = y2((te2) => {
      E2 ? E2.push(te2) : Z2.fire(te2);
    });
    w2 && w2.add(x2);
    let N2 = () => {
      E2?.forEach((te2) => Z2.fire(te2)), E2 = null;
    }, Z2 = new v({ onWillAddFirstListener() {
      x2 || (x2 = y2((te2) => Z2.fire(te2)), w2 && w2.add(x2));
    }, onDidAddFirstListener() {
      E2 && (T2 ? setTimeout(N2) : N2());
    }, onDidRemoveLastListener() {
      x2 && x2.dispose(), x2 = null;
    } });
    return w2 && w2.add(Z2), Z2.event;
  }
  Qe2.buffer = f2;
  function A2(y2, T2) {
    return (w2, E2, x2) => {
      let N2 = T2(new O2());
      return y2(function(Z2) {
        let te2 = N2.evaluate(Z2);
        te2 !== R2 && w2.call(E2, te2);
      }, void 0, x2);
    };
  }
  Qe2.chain = A2;
  let R2 = Symbol("HaltChainable");
  class O2 {
    constructor() {
      this.steps = [];
    }
    map(T2) {
      return this.steps.push(T2), this;
    }
    forEach(T2) {
      return this.steps.push((g) => (T2(g), g)), this;
    }
    filter(T2) {
      return this.steps.push((g) => T2(g) ? g : R2), this;
    }
    reduce(T2, g) {
      let w2 = g;
      return this.steps.push((E2) => (w2 = T2(w2, E2), w2)), this;
    }
    latch(T2 = (g, w2) => g === w2) {
      let g = true, w2;
      return this.steps.push((E2) => {
        let x2 = g || !T2(E2, w2);
        return g = false, w2 = E2, x2 ? E2 : R2;
      }), this;
    }
    evaluate(T2) {
      for (let g of this.steps) if (T2 = g(T2), T2 === R2) break;
      return T2;
    }
  }
  function I2(y2, T2, g = (w2) => w2) {
    let w2 = (...Z2) => N2.fire(g(...Z2)), E2 = () => y2.on(T2, w2), x2 = () => y2.removeListener(T2, w2), N2 = new v({ onWillAddFirstListener: E2, onDidRemoveLastListener: x2 });
    return N2.event;
  }
  Qe2.fromNodeEventEmitter = I2;
  function k2(y2, T2, g = (w2) => w2) {
    let w2 = (...Z2) => N2.fire(g(...Z2)), E2 = () => y2.addEventListener(T2, w2), x2 = () => y2.removeEventListener(T2, w2), N2 = new v({ onWillAddFirstListener: E2, onDidRemoveLastListener: x2 });
    return N2.event;
  }
  Qe2.fromDOMEventEmitter = k2;
  function P2(y2) {
    return new Promise((T2) => i(y2)(T2));
  }
  Qe2.toPromise = P2;
  function oe2(y2) {
    let T2 = new v();
    return y2.then((g) => {
      T2.fire(g);
    }, () => {
      T2.fire(void 0);
    }).finally(() => {
      T2.dispose();
    }), T2.event;
  }
  Qe2.fromPromise = oe2;
  function Me2(y2, T2) {
    return y2((g) => T2.fire(g));
  }
  Qe2.forward = Me2;
  function Pe2(y2, T2, g) {
    return T2(g), y2((w2) => T2(w2));
  }
  Qe2.runAndSubscribe = Pe2;
  class Ke2 {
    constructor(T2, g) {
      this._observable = T2;
      this._counter = 0;
      this._hasChanged = false;
      let w2 = { onWillAddFirstListener: () => {
        T2.addObserver(this);
      }, onDidRemoveLastListener: () => {
        T2.removeObserver(this);
      } };
      this.emitter = new v(w2), g && g.add(this.emitter);
    }
    beginUpdate(T2) {
      this._counter++;
    }
    handlePossibleChange(T2) {
    }
    handleChange(T2, g) {
      this._hasChanged = true;
    }
    endUpdate(T2) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function di2(y2, T2) {
    return new Ke2(y2, T2).emitter.event;
  }
  Qe2.fromObservable = di2;
  function V2(y2) {
    return (T2, g, w2) => {
      let E2 = 0, x2 = false, N2 = { beginUpdate() {
        E2++;
      }, endUpdate() {
        E2--, E2 === 0 && (y2.reportChanges(), x2 && (x2 = false, T2.call(g)));
      }, handlePossibleChange() {
      }, handleChange() {
        x2 = true;
      } };
      y2.addObserver(N2), y2.reportChanges();
      let Z2 = { dispose() {
        y2.removeObserver(N2);
      } };
      return w2 instanceof Ee ? w2.add(Z2) : Array.isArray(w2) && w2.push(Z2), Z2;
    };
  }
  Qe2.fromObservableLight = V2;
})($ ||= {});
var Mt = class Mt2 {
  constructor(t2) {
    this.listenerCount = 0;
    this.invocationCount = 0;
    this.elapsedOverall = 0;
    this.durations = [];
    this.name = `${t2}_${Mt2._idPool++}`, Mt2.all.add(this);
  }
  start(t2) {
    this._stopWatch = new mr(), this.listenerCount = t2;
  }
  stop() {
    if (this._stopWatch) {
      let t2 = this._stopWatch.elapsed();
      this.durations.push(t2), this.elapsedOverall += t2, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
Mt.all = /* @__PURE__ */ new Set(), Mt._idPool = 0;
var $n = Mt, po = -1;
var br = class br2 {
  constructor(t2, e2, i = (br2._idPool++).toString(16).padStart(3, "0")) {
    this._errorHandler = t2;
    this.threshold = e2;
    this.name = i;
    this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(t2, e2) {
    let i = this.threshold;
    if (i <= 0 || e2 < i) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    let r2 = this._stacks.get(t2.value) || 0;
    if (this._stacks.set(t2.value, r2 + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = i * 0.5;
      let [n2, o2] = this.getMostFrequentStack(), l2 = `[${this.name}] potential listener LEAK detected, having ${e2} listeners already. MOST frequent listener (${o2}):`;
      console.warn(l2), console.warn(n2);
      let a2 = new qn(l2, n2);
      this._errorHandler(a2);
    }
    return () => {
      let n2 = this._stacks.get(t2.value) || 0;
      this._stacks.set(t2.value, n2 - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let t2, e2 = 0;
    for (let [i, r2] of this._stacks) (!t2 || e2 < r2) && (t2 = [i, r2], e2 = r2);
    return t2;
  }
};
br._idPool = 1;
var Vn = br, gi = class s8 {
  constructor(t2) {
    this.value = t2;
  }
  static create() {
    let t2 = new Error();
    return new s8(t2.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, qn = class extends Error {
  constructor(t2, e2) {
    super(t2), this.name = "ListenerLeakError", this.stack = e2;
  }
}, Yn = class extends Error {
  constructor(t2, e2) {
    super(t2), this.name = "ListenerRefusalError", this.stack = e2;
  }
}, Vl = 0, Pt = class {
  constructor(t2) {
    this.value = t2;
    this.id = Vl++;
  }
}, ql = 2, _r;
var v = class {
  constructor(t2) {
    this._size = 0;
    this._options = t2, this._leakageMon = this._options?.leakWarningThreshold ? new Vn(t2?.onListenerError ?? Lt, this._options?.leakWarningThreshold ?? po) : void 0, this._perfMon = this._options?._profName ? new $n(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (t2, e2, i) => {
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        let a2 = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(a2);
        let u2 = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], h2 = new Yn(`${a2}. HINT: Stack shows most frequent listener (${u2[1]}-times)`, u2[0]);
        return (this._options?.onListenerError || Lt)(h2), D.None;
      }
      if (this._disposed) return D.None;
      e2 && (t2 = t2.bind(e2));
      let r2 = new Pt(t2), n2;
      this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (r2.stack = gi.create(), n2 = this._leakageMon.check(r2.stack, this._size + 1)), this._listeners ? this._listeners instanceof Pt ? (this._deliveryQueue ??= new jn(), this._listeners = [this._listeners, r2]) : this._listeners.push(r2) : (this._options?.onWillAddFirstListener?.(this), this._listeners = r2, this._options?.onDidAddFirstListener?.(this)), this._size++;
      let l2 = C(() => {
        n2?.(), this._removeListener(r2);
      });
      if (i instanceof Ee ? i.add(l2) : Array.isArray(i) && i.push(l2), _r) ;
      return l2;
    }, this._event;
  }
  _removeListener(t2) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    let e2 = this._listeners, i = e2.indexOf(t2);
    if (i === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, e2[i] = void 0;
    let r2 = this._deliveryQueue.current === this;
    if (this._size * ql <= e2.length) {
      let n2 = 0;
      for (let o2 = 0; o2 < e2.length; o2++) e2[o2] ? e2[n2++] = e2[o2] : r2 && (this._deliveryQueue.end--, n2 < this._deliveryQueue.i && this._deliveryQueue.i--);
      e2.length = n2;
    }
  }
  _deliver(t2, e2) {
    if (!t2) return;
    let i = this._options?.onListenerError || Lt;
    if (!i) {
      t2.value(e2);
      return;
    }
    try {
      t2.value(e2);
    } catch (r2) {
      i(r2);
    }
  }
  _deliverQueue(t2) {
    let e2 = t2.current._listeners;
    for (; t2.i < t2.end; ) this._deliver(e2[t2.i++], t2.value);
    t2.reset();
  }
  fire(t2) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof Pt) this._deliver(this._listeners, t2);
    else {
      let e2 = this._deliveryQueue;
      e2.enqueue(this, t2, this._listeners.length), this._deliverQueue(e2);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
};
var jn = class {
  constructor() {
    this.i = -1;
    this.end = 0;
  }
  enqueue(t2, e2, i) {
    this.i = 0, this.end = i, this.current = t2, this.value = e2;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
};
var gr = class gr2 {
  constructor() {
    this.mapWindowIdToZoomLevel = /* @__PURE__ */ new Map();
    this._onDidChangeZoomLevel = new v();
    this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event;
    this.mapWindowIdToZoomFactor = /* @__PURE__ */ new Map();
    this._onDidChangeFullscreen = new v();
    this.onDidChangeFullscreen = this._onDidChangeFullscreen.event;
    this.mapWindowIdToFullScreen = /* @__PURE__ */ new Map();
  }
  getZoomLevel(t2) {
    return this.mapWindowIdToZoomLevel.get(this.getWindowId(t2)) ?? 0;
  }
  setZoomLevel(t2, e2) {
    if (this.getZoomLevel(e2) === t2) return;
    let i = this.getWindowId(e2);
    this.mapWindowIdToZoomLevel.set(i, t2), this._onDidChangeZoomLevel.fire(i);
  }
  getZoomFactor(t2) {
    return this.mapWindowIdToZoomFactor.get(this.getWindowId(t2)) ?? 1;
  }
  setZoomFactor(t2, e2) {
    this.mapWindowIdToZoomFactor.set(this.getWindowId(e2), t2);
  }
  setFullscreen(t2, e2) {
    if (this.isFullscreen(e2) === t2) return;
    let i = this.getWindowId(e2);
    this.mapWindowIdToFullScreen.set(i, t2), this._onDidChangeFullscreen.fire(i);
  }
  isFullscreen(t2) {
    return !!this.mapWindowIdToFullScreen.get(this.getWindowId(t2));
  }
  getWindowId(t2) {
    return t2.vscodeWindowId;
  }
};
gr.INSTANCE = new gr();
var Si = gr;
function Xl(s16, t2, e2) {
  typeof t2 == "string" && (t2 = s16.matchMedia(t2)), t2.addEventListener("change", e2);
}
Si.INSTANCE.onDidChangeZoomLevel;
function mo(s16) {
  return Si.INSTANCE.getZoomFactor(s16);
}
Si.INSTANCE.onDidChangeFullscreen;
var Ot = typeof navigator == "object" ? navigator.userAgent : "", Ei = Ot.indexOf("Firefox") >= 0, Bt = Ot.indexOf("AppleWebKit") >= 0, Ti = Ot.indexOf("Chrome") >= 0, Sr = !Ti && Ot.indexOf("Safari") >= 0;
Ot.indexOf("Electron/") >= 0;
Ot.indexOf("Android") >= 0;
var vr = false;
if (typeof fe.matchMedia == "function") {
  let s16 = fe.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"), t2 = fe.matchMedia("(display-mode: fullscreen)");
  vr = s16.matches, Xl(fe, s16, ({ matches: e2 }) => {
    vr && t2.matches || (vr = e2);
  });
}
var Nt = "en", yr = false, xr = false, Ii = false, vo = false, Tr, Ir = Nt, bo = Nt, ia, $e, Ve = globalThis, xe;
typeof Ve.vscode < "u" && typeof Ve.vscode.process < "u" ? xe = Ve.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (xe = process);
var So = typeof xe?.versions?.electron == "string", ra = So && xe?.type === "renderer";
if (typeof xe == "object") {
  yr = xe.platform === "win32", xr = xe.platform === "darwin", Ii = xe.platform === "linux", Ii && !!xe.env.SNAP && !!xe.env.SNAP_REVISION, !!xe.env.CI || !!xe.env.BUILD_ARTIFACTSTAGINGDIRECTORY, Tr = Nt, Ir = Nt;
  let s16 = xe.env.VSCODE_NLS_CONFIG;
  if (s16) try {
    let t2 = JSON.parse(s16);
    Tr = t2.userLocale, bo = t2.osLocale, Ir = t2.resolvedLanguage || Nt, ia = t2.languagePack?.translationsConfigFile;
  } catch {
  }
  vo = true;
} else typeof navigator == "object" && !ra ? ($e = navigator.userAgent, yr = $e.indexOf("Windows") >= 0, xr = $e.indexOf("Macintosh") >= 0, ($e.indexOf("Macintosh") >= 0 || $e.indexOf("iPad") >= 0 || $e.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Ii = $e.indexOf("Linux") >= 0, $e?.indexOf("Mobi") >= 0, Ir = globalThis._VSCODE_NLS_LANGUAGE || Nt, Tr = navigator.language.toLowerCase(), bo = Tr) : console.error("Unable to resolve platform.");
var wr = yr, Te = xr, Zn = Ii;
var Dr = vo;
var Fe = $e, st = Ir, sa;
((i) => {
  function s16() {
    return st;
  }
  i.value = s16;
  function t2() {
    return st.length === 2 ? st === "en" : st.length >= 3 ? st[0] === "e" && st[1] === "n" && st[2] === "-" : false;
  }
  i.isDefaultVariant = t2;
  function e2() {
    return st === "en";
  }
  i.isDefault = e2;
})(sa ||= {});
var oa = typeof Ve.postMessage == "function" && !Ve.importScripts;
(() => {
  if (oa) {
    let s16 = [];
    Ve.addEventListener("message", (e2) => {
      if (e2.data && e2.data.vscodeScheduleAsyncWork) for (let i = 0, r2 = s16.length; i < r2; i++) {
        let n2 = s16[i];
        if (n2.id === e2.data.vscodeScheduleAsyncWork) {
          s16.splice(i, 1), n2.callback();
          return;
        }
      }
    });
    let t2 = 0;
    return (e2) => {
      let i = ++t2;
      s16.push({ id: i, callback: e2 }), Ve.postMessage({ vscodeScheduleAsyncWork: i }, "*");
    };
  }
  return (s16) => setTimeout(s16);
})();
var la = !!(Fe && Fe.indexOf("Chrome") >= 0);
!!(Fe && Fe.indexOf("Firefox") >= 0);
!!(!la && Fe && Fe.indexOf("Safari") >= 0);
!!(Fe && Fe.indexOf("Edg/") >= 0);
!!(Fe && Fe.indexOf("Android") >= 0);
var ot = typeof navigator == "object" ? navigator : {};
({ clipboard: { writeText: Dr || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(ot && ot.clipboard && ot.clipboard.writeText), readText: Dr || !!(ot && ot.clipboard && ot.clipboard.readText) } });
var yi = class {
  constructor() {
    this._keyCodeToStr = [], this._strToKeyCode = /* @__PURE__ */ Object.create(null);
  }
  define(t2, e2) {
    this._keyCodeToStr[t2] = e2, this._strToKeyCode[e2.toLowerCase()] = t2;
  }
  keyCodeToStr(t2) {
    return this._keyCodeToStr[t2];
  }
  strToKeyCode(t2) {
    return this._strToKeyCode[t2.toLowerCase()] || 0;
  }
}, Jn = new yi(), To = new yi(), Io = new yi(), yo = new Array(230);
var Qn;
((o2) => {
  function s16(l2) {
    return Jn.keyCodeToStr(l2);
  }
  o2.toString = s16;
  function t2(l2) {
    return Jn.strToKeyCode(l2);
  }
  o2.fromString = t2;
  function e2(l2) {
    return To.keyCodeToStr(l2);
  }
  o2.toUserSettingsUS = e2;
  function i(l2) {
    return Io.keyCodeToStr(l2);
  }
  o2.toUserSettingsGeneral = i;
  function r2(l2) {
    return To.strToKeyCode(l2) || Io.strToKeyCode(l2);
  }
  o2.fromUserSettings = r2;
  function n2(l2) {
    if (l2 >= 98 && l2 <= 113) return null;
    switch (l2) {
      case 16:
        return "Up";
      case 18:
        return "Down";
      case 15:
        return "Left";
      case 17:
        return "Right";
    }
    return Jn.keyCodeToStr(l2);
  }
  o2.toElectronAccelerator = n2;
})(Qn ||= {});
var Rr = class s9 {
  constructor(t2, e2, i, r2, n2) {
    this.ctrlKey = t2;
    this.shiftKey = e2;
    this.altKey = i;
    this.metaKey = r2;
    this.keyCode = n2;
  }
  equals(t2) {
    return t2 instanceof s9 && this.ctrlKey === t2.ctrlKey && this.shiftKey === t2.shiftKey && this.altKey === t2.altKey && this.metaKey === t2.metaKey && this.keyCode === t2.keyCode;
  }
  getHashCode() {
    let t2 = this.ctrlKey ? "1" : "0", e2 = this.shiftKey ? "1" : "0", i = this.altKey ? "1" : "0", r2 = this.metaKey ? "1" : "0";
    return `K${t2}${e2}${i}${r2}${this.keyCode}`;
  }
  isModifierKey() {
    return this.keyCode === 0 || this.keyCode === 5 || this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4;
  }
  toKeybinding() {
    return new es([this]);
  }
  isDuplicateModifierCase() {
    return this.ctrlKey && this.keyCode === 5 || this.shiftKey && this.keyCode === 4 || this.altKey && this.keyCode === 6 || this.metaKey && this.keyCode === 57;
  }
};
var es = class {
  constructor(t2) {
    if (t2.length === 0) throw eo("chords");
    this.chords = t2;
  }
  getHashCode() {
    let t2 = "";
    for (let e2 = 0, i = this.chords.length; e2 < i; e2++) e2 !== 0 && (t2 += ";"), t2 += this.chords[e2].getHashCode();
    return t2;
  }
  equals(t2) {
    if (t2 === null || this.chords.length !== t2.chords.length) return false;
    for (let e2 = 0; e2 < this.chords.length; e2++) if (!this.chords[e2].equals(t2.chords[e2])) return false;
    return true;
  }
};
function ca(s16) {
  if (s16.charCode) {
    let e2 = String.fromCharCode(s16.charCode).toUpperCase();
    return Qn.fromString(e2);
  }
  let t2 = s16.keyCode;
  if (t2 === 3) return 7;
  if (Ei) switch (t2) {
    case 59:
      return 85;
    case 60:
      if (Zn) return 97;
      break;
    case 61:
      return 86;
    case 107:
      return 109;
    case 109:
      return 111;
    case 173:
      return 88;
    case 224:
      if (Te) return 57;
      break;
  }
  else if (Bt) {
    if (Te && t2 === 93) return 57;
    if (!Te && t2 === 92) return 57;
  }
  return yo[t2] || 0;
}
var ua = Te ? 256 : 2048, ha = 512, da = 1024, fa = Te ? 2048 : 256;
var ft = class {
  constructor(t2) {
    this._standardKeyboardEventBrand = true;
    let e2 = t2;
    this.browserEvent = e2, this.target = e2.target, this.ctrlKey = e2.ctrlKey, this.shiftKey = e2.shiftKey, this.altKey = e2.altKey, this.metaKey = e2.metaKey, this.altGraphKey = e2.getModifierState?.("AltGraph"), this.keyCode = ca(e2), this.code = e2.code, this.ctrlKey = this.ctrlKey || this.keyCode === 5, this.altKey = this.altKey || this.keyCode === 6, this.shiftKey = this.shiftKey || this.keyCode === 4, this.metaKey = this.metaKey || this.keyCode === 57, this._asKeybinding = this._computeKeybinding(), this._asKeyCodeChord = this._computeKeyCodeChord();
  }
  preventDefault() {
    this.browserEvent && this.browserEvent.preventDefault && this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent && this.browserEvent.stopPropagation && this.browserEvent.stopPropagation();
  }
  toKeyCodeChord() {
    return this._asKeyCodeChord;
  }
  equals(t2) {
    return this._asKeybinding === t2;
  }
  _computeKeybinding() {
    let t2 = 0;
    this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (t2 = this.keyCode);
    let e2 = 0;
    return this.ctrlKey && (e2 |= ua), this.altKey && (e2 |= ha), this.shiftKey && (e2 |= da), this.metaKey && (e2 |= fa), e2 |= t2, e2;
  }
  _computeKeyCodeChord() {
    let t2 = 0;
    return this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (t2 = this.keyCode), new Rr(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, t2);
  }
};
var wo = /* @__PURE__ */ new WeakMap();
function pa(s16) {
  if (!s16.parent || s16.parent === s16) return null;
  try {
    let t2 = s16.location, e2 = s16.parent.location;
    if (t2.origin !== "null" && e2.origin !== "null" && t2.origin !== e2.origin) return null;
  } catch {
    return null;
  }
  return s16.parent;
}
var Lr = class {
  static getSameOriginWindowChain(t2) {
    let e2 = wo.get(t2);
    if (!e2) {
      e2 = [], wo.set(t2, e2);
      let i = t2, r2;
      do
        r2 = pa(i), r2 ? e2.push({ window: new WeakRef(i), iframeElement: i.frameElement || null }) : e2.push({ window: new WeakRef(i), iframeElement: null }), i = r2;
      while (i);
    }
    return e2.slice(0);
  }
  static getPositionOfChildWindowRelativeToAncestorWindow(t2, e2) {
    if (!e2 || t2 === e2) return { top: 0, left: 0 };
    let i = 0, r2 = 0, n2 = this.getSameOriginWindowChain(t2);
    for (let o2 of n2) {
      let l2 = o2.window.deref();
      if (i += l2?.scrollY ?? 0, r2 += l2?.scrollX ?? 0, l2 === e2 || !o2.iframeElement) break;
      let a2 = o2.iframeElement.getBoundingClientRect();
      i += a2.top, r2 += a2.left;
    }
    return { top: i, left: r2 };
  }
};
var qe = class {
  constructor(t2, e2) {
    this.timestamp = Date.now(), this.browserEvent = e2, this.leftButton = e2.button === 0, this.middleButton = e2.button === 1, this.rightButton = e2.button === 2, this.buttons = e2.buttons, this.target = e2.target, this.detail = e2.detail || 1, e2.type === "dblclick" && (this.detail = 2), this.ctrlKey = e2.ctrlKey, this.shiftKey = e2.shiftKey, this.altKey = e2.altKey, this.metaKey = e2.metaKey, typeof e2.pageX == "number" ? (this.posx = e2.pageX, this.posy = e2.pageY) : (this.posx = e2.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft, this.posy = e2.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop);
    let i = Lr.getPositionOfChildWindowRelativeToAncestorWindow(t2, e2.view);
    this.posx -= i.left, this.posy -= i.top;
  }
  preventDefault() {
    this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent.stopPropagation();
  }
};
var xi = class {
  constructor(t2, e2 = 0, i = 0) {
    this.browserEvent = t2 || null, this.target = t2 ? t2.target || t2.targetNode || t2.srcElement : null, this.deltaY = i, this.deltaX = e2;
    let r2 = false;
    if (Ti) {
      let n2 = navigator.userAgent.match(/Chrome\/(\d+)/);
      r2 = (n2 ? parseInt(n2[1]) : 123) <= 122;
    }
    if (t2) {
      let n2 = t2, o2 = t2, l2 = t2.view?.devicePixelRatio || 1;
      if (typeof n2.wheelDeltaY < "u") r2 ? this.deltaY = n2.wheelDeltaY / (120 * l2) : this.deltaY = n2.wheelDeltaY / 120;
      else if (typeof o2.VERTICAL_AXIS < "u" && o2.axis === o2.VERTICAL_AXIS) this.deltaY = -o2.detail / 3;
      else if (t2.type === "wheel") {
        let a2 = t2;
        a2.deltaMode === a2.DOM_DELTA_LINE ? Ei && !Te ? this.deltaY = -t2.deltaY / 3 : this.deltaY = -t2.deltaY : this.deltaY = -t2.deltaY / 40;
      }
      if (typeof n2.wheelDeltaX < "u") Sr && wr ? this.deltaX = -(n2.wheelDeltaX / 120) : r2 ? this.deltaX = n2.wheelDeltaX / (120 * l2) : this.deltaX = n2.wheelDeltaX / 120;
      else if (typeof o2.HORIZONTAL_AXIS < "u" && o2.axis === o2.HORIZONTAL_AXIS) this.deltaX = -t2.detail / 3;
      else if (t2.type === "wheel") {
        let a2 = t2;
        a2.deltaMode === a2.DOM_DELTA_LINE ? Ei && !Te ? this.deltaX = -t2.deltaX / 3 : this.deltaX = -t2.deltaX : this.deltaX = -t2.deltaX / 40;
      }
      this.deltaY === 0 && this.deltaX === 0 && t2.wheelDelta && (r2 ? this.deltaY = t2.wheelDelta / (120 * l2) : this.deltaY = t2.wheelDelta / 120);
    }
  }
  preventDefault() {
    this.browserEvent?.preventDefault();
  }
  stopPropagation() {
    this.browserEvent?.stopPropagation();
  }
};
var Do = Object.freeze(function(s16, t2) {
  let e2 = setTimeout(s16.bind(t2), 0);
  return { dispose() {
    clearTimeout(e2);
  } };
}), ma;
((i) => {
  function s16(r2) {
    return r2 === i.None || r2 === i.Cancelled || r2 instanceof ts ? true : !r2 || typeof r2 != "object" ? false : typeof r2.isCancellationRequested == "boolean" && typeof r2.onCancellationRequested == "function";
  }
  i.isCancellationToken = s16, i.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: $.None }), i.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: Do });
})(ma ||= {});
var ts = class {
  constructor() {
    this._isCancelled = false;
    this._emitter = null;
  }
  cancel() {
    this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    return this._isCancelled ? Do : (this._emitter || (this._emitter = new v()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
};
var Ye = class {
  constructor(t2, e2) {
    this._isDisposed = false;
    this._token = -1, typeof t2 == "function" && typeof e2 == "number" && this.setIfNotSet(t2, e2);
  }
  dispose() {
    this.cancel(), this._isDisposed = true;
  }
  cancel() {
    this._token !== -1 && (clearTimeout(this._token), this._token = -1);
  }
  cancelAndSet(t2, e2) {
    if (this._isDisposed) throw new Rt("Calling 'cancelAndSet' on a disposed TimeoutTimer");
    this.cancel(), this._token = setTimeout(() => {
      this._token = -1, t2();
    }, e2);
  }
  setIfNotSet(t2, e2) {
    if (this._isDisposed) throw new Rt("Calling 'setIfNotSet' on a disposed TimeoutTimer");
    this._token === -1 && (this._token = setTimeout(() => {
      this._token = -1, t2();
    }, e2));
  }
}, kr = class {
  constructor() {
    this.disposable = void 0;
    this.isDisposed = false;
  }
  cancel() {
    this.disposable?.dispose(), this.disposable = void 0;
  }
  cancelAndSet(t2, e2, i = globalThis) {
    if (this.isDisposed) throw new Rt("Calling 'cancelAndSet' on a disposed IntervalTimer");
    this.cancel();
    let r2 = i.setInterval(() => {
      t2();
    }, e2);
    this.disposable = C(() => {
      i.clearInterval(r2), this.disposable = void 0;
    });
  }
  dispose() {
    this.cancel(), this.isDisposed = true;
  }
};
var va;
((e2) => {
  async function s16(i) {
    let r2, n2 = await Promise.all(i.map((o2) => o2.then((l2) => l2, (l2) => {
      r2 || (r2 = l2);
    })));
    if (typeof r2 < "u") throw r2;
    return n2;
  }
  e2.settled = s16;
  function t2(i) {
    return new Promise(async (r2, n2) => {
      try {
        await i(r2, n2);
      } catch (o2) {
        n2(o2);
      }
    });
  }
  e2.withAsyncBody = t2;
})(va ||= {});
var _e = class _e2 {
  static fromArray(t2) {
    return new _e2((e2) => {
      e2.emitMany(t2);
    });
  }
  static fromPromise(t2) {
    return new _e2(async (e2) => {
      e2.emitMany(await t2);
    });
  }
  static fromPromises(t2) {
    return new _e2(async (e2) => {
      await Promise.all(t2.map(async (i) => e2.emitOne(await i)));
    });
  }
  static merge(t2) {
    return new _e2(async (e2) => {
      await Promise.all(t2.map(async (i) => {
        for await (let r2 of i) e2.emitOne(r2);
      }));
    });
  }
  constructor(t2, e2) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = e2, this._onStateChanged = new v(), queueMicrotask(async () => {
      let i = { emitOne: (r2) => this.emitOne(r2), emitMany: (r2) => this.emitMany(r2), reject: (r2) => this.reject(r2) };
      try {
        await Promise.resolve(t2(i)), this.resolve();
      } catch (r2) {
        this.reject(r2);
      } finally {
        i.emitOne = void 0, i.emitMany = void 0, i.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let t2 = 0;
    return { next: async () => {
      do {
        if (this._state === 2) throw this._error;
        if (t2 < this._results.length) return { done: false, value: this._results[t2++] };
        if (this._state === 1) return { done: true, value: void 0 };
        await $.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t2, e2) {
    return new _e2(async (i) => {
      for await (let r2 of t2) i.emitOne(e2(r2));
    });
  }
  map(t2) {
    return _e2.map(this, t2);
  }
  static filter(t2, e2) {
    return new _e2(async (i) => {
      for await (let r2 of t2) e2(r2) && i.emitOne(r2);
    });
  }
  filter(t2) {
    return _e2.filter(this, t2);
  }
  static coalesce(t2) {
    return _e2.filter(t2, (e2) => !!e2);
  }
  coalesce() {
    return _e2.coalesce(this);
  }
  static async toPromise(t2) {
    let e2 = [];
    for await (let i of t2) e2.push(i);
    return e2;
  }
  toPromise() {
    return _e2.toPromise(this);
  }
  emitOne(t2) {
    this._state === 0 && (this._results.push(t2), this._onStateChanged.fire());
  }
  emitMany(t2) {
    this._state === 0 && (this._results = this._results.concat(t2), this._onStateChanged.fire());
  }
  resolve() {
    this._state === 0 && (this._state = 1, this._onStateChanged.fire());
  }
  reject(t2) {
    this._state === 0 && (this._state = 2, this._error = t2, this._onStateChanged.fire());
  }
};
_e.EMPTY = _e.fromArray([]);
var { getWindow: be, getWindowId: Oo, onDidRegisterWindow: No } = function() {
  let s16 = /* @__PURE__ */ new Map();
  let t2 = { window: fe, disposables: new Ee() };
  s16.set(fe.vscodeWindowId, t2);
  let e2 = new v(), i = new v(), r2 = new v();
  function n2(o2, l2) {
    return (typeof o2 == "number" ? s16.get(o2) : void 0) ?? (l2 ? t2 : void 0);
  }
  return { onDidRegisterWindow: e2.event, onWillUnregisterWindow: r2.event, onDidUnregisterWindow: i.event, registerWindow(o2) {
    if (s16.has(o2.vscodeWindowId)) return D.None;
    let l2 = new Ee(), a2 = { window: o2, disposables: l2.add(new Ee()) };
    return s16.set(o2.vscodeWindowId, a2), l2.add(C(() => {
      s16.delete(o2.vscodeWindowId), i.fire(o2);
    })), l2.add(L(o2, Y.BEFORE_UNLOAD, () => {
      r2.fire(o2);
    })), e2.fire(a2), l2;
  }, getWindows() {
    return s16.values();
  }, getWindowsCount() {
    return s16.size;
  }, getWindowId(o2) {
    return o2.vscodeWindowId;
  }, hasWindow(o2) {
    return s16.has(o2);
  }, getWindowById: n2, getWindow(o2) {
    let l2 = o2;
    if (l2?.ownerDocument?.defaultView) return l2.ownerDocument.defaultView.window;
    let a2 = o2;
    return a2?.view ? a2.view.window : fe;
  }, getDocument(o2) {
    return be(o2).document;
  } };
}();
var ss = class {
  constructor(t2, e2, i, r2) {
    this._node = t2, this._type = e2, this._handler = i, this._options = r2 || false, this._node.addEventListener(this._type, this._handler, this._options);
  }
  dispose() {
    this._handler && (this._node.removeEventListener(this._type, this._handler, this._options), this._node = null, this._handler = null);
  }
};
function L(s16, t2, e2, i) {
  return new ss(s16, t2, e2, i);
}
var os = function(t2, e2, i, r2) {
  let n2 = i;
  return L(t2, e2, n2, r2);
};
var mt;
var Mr = class extends kr {
  constructor(t2) {
    super(), this.defaultTarget = t2 && be(t2);
  }
  cancelAndSet(t2, e2, i) {
    return super.cancelAndSet(t2, e2, i ?? this.defaultTarget);
  }
}, Di = class {
  constructor(t2, e2 = 0) {
    this._runner = t2, this.priority = e2, this._canceled = false;
  }
  dispose() {
    this._canceled = true;
  }
  execute() {
    if (!this._canceled) try {
      this._runner();
    } catch (t2) {
      Lt(t2);
    }
  }
  static sort(t2, e2) {
    return e2.priority - t2.priority;
  }
};
(function() {
  let s16 = /* @__PURE__ */ new Map(), t2 = /* @__PURE__ */ new Map(), e2 = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r2 = (n2) => {
    e2.set(n2, false);
    let o2 = s16.get(n2) ?? [];
    for (t2.set(n2, o2), s16.set(n2, []), i.set(n2, true); o2.length > 0; ) o2.sort(Di.sort), o2.shift().execute();
    i.set(n2, false);
  };
  mt = (n2, o2, l2 = 0) => {
    let a2 = Oo(n2), u2 = new Di(o2, l2), h2 = s16.get(a2);
    return h2 || (h2 = [], s16.set(a2, h2)), h2.push(u2), e2.get(a2) || (e2.set(a2, true), n2.requestAnimationFrame(() => r2(a2))), u2;
  };
})();
function Fo(s16) {
  let t2 = s16.getBoundingClientRect(), e2 = be(s16);
  return { left: t2.left + e2.scrollX, top: t2.top + e2.scrollY, width: t2.width, height: t2.height };
}
var Y = { CLICK: "click", MOUSE_DOWN: "mousedown", MOUSE_OVER: "mouseover", MOUSE_LEAVE: "mouseleave", MOUSE_WHEEL: "wheel", POINTER_UP: "pointerup", POINTER_DOWN: "pointerdown", POINTER_MOVE: "pointermove", KEY_DOWN: "keydown", KEY_UP: "keyup", BEFORE_UNLOAD: "beforeunload", CHANGE: "change", FOCUS: "focus", BLUR: "blur", INPUT: "input" };
var ls = class {
  constructor(t2) {
    this.domNode = t2;
    this._maxWidth = "";
    this._width = "";
    this._height = "";
    this._top = "";
    this._left = "";
    this._bottom = "";
    this._right = "";
    this._paddingTop = "";
    this._paddingLeft = "";
    this._paddingBottom = "";
    this._paddingRight = "";
    this._fontFamily = "";
    this._fontWeight = "";
    this._fontSize = "";
    this._fontStyle = "";
    this._fontFeatureSettings = "";
    this._fontVariationSettings = "";
    this._textDecoration = "";
    this._lineHeight = "";
    this._letterSpacing = "";
    this._className = "";
    this._display = "";
    this._position = "";
    this._visibility = "";
    this._color = "";
    this._backgroundColor = "";
    this._layerHint = false;
    this._contain = "none";
    this._boxShadow = "";
  }
  setMaxWidth(t2) {
    let e2 = Ie(t2);
    this._maxWidth !== e2 && (this._maxWidth = e2, this.domNode.style.maxWidth = this._maxWidth);
  }
  setWidth(t2) {
    let e2 = Ie(t2);
    this._width !== e2 && (this._width = e2, this.domNode.style.width = this._width);
  }
  setHeight(t2) {
    let e2 = Ie(t2);
    this._height !== e2 && (this._height = e2, this.domNode.style.height = this._height);
  }
  setTop(t2) {
    let e2 = Ie(t2);
    this._top !== e2 && (this._top = e2, this.domNode.style.top = this._top);
  }
  setLeft(t2) {
    let e2 = Ie(t2);
    this._left !== e2 && (this._left = e2, this.domNode.style.left = this._left);
  }
  setBottom(t2) {
    let e2 = Ie(t2);
    this._bottom !== e2 && (this._bottom = e2, this.domNode.style.bottom = this._bottom);
  }
  setRight(t2) {
    let e2 = Ie(t2);
    this._right !== e2 && (this._right = e2, this.domNode.style.right = this._right);
  }
  setPaddingTop(t2) {
    let e2 = Ie(t2);
    this._paddingTop !== e2 && (this._paddingTop = e2, this.domNode.style.paddingTop = this._paddingTop);
  }
  setPaddingLeft(t2) {
    let e2 = Ie(t2);
    this._paddingLeft !== e2 && (this._paddingLeft = e2, this.domNode.style.paddingLeft = this._paddingLeft);
  }
  setPaddingBottom(t2) {
    let e2 = Ie(t2);
    this._paddingBottom !== e2 && (this._paddingBottom = e2, this.domNode.style.paddingBottom = this._paddingBottom);
  }
  setPaddingRight(t2) {
    let e2 = Ie(t2);
    this._paddingRight !== e2 && (this._paddingRight = e2, this.domNode.style.paddingRight = this._paddingRight);
  }
  setFontFamily(t2) {
    this._fontFamily !== t2 && (this._fontFamily = t2, this.domNode.style.fontFamily = this._fontFamily);
  }
  setFontWeight(t2) {
    this._fontWeight !== t2 && (this._fontWeight = t2, this.domNode.style.fontWeight = this._fontWeight);
  }
  setFontSize(t2) {
    let e2 = Ie(t2);
    this._fontSize !== e2 && (this._fontSize = e2, this.domNode.style.fontSize = this._fontSize);
  }
  setFontStyle(t2) {
    this._fontStyle !== t2 && (this._fontStyle = t2, this.domNode.style.fontStyle = this._fontStyle);
  }
  setFontFeatureSettings(t2) {
    this._fontFeatureSettings !== t2 && (this._fontFeatureSettings = t2, this.domNode.style.fontFeatureSettings = this._fontFeatureSettings);
  }
  setFontVariationSettings(t2) {
    this._fontVariationSettings !== t2 && (this._fontVariationSettings = t2, this.domNode.style.fontVariationSettings = this._fontVariationSettings);
  }
  setTextDecoration(t2) {
    this._textDecoration !== t2 && (this._textDecoration = t2, this.domNode.style.textDecoration = this._textDecoration);
  }
  setLineHeight(t2) {
    let e2 = Ie(t2);
    this._lineHeight !== e2 && (this._lineHeight = e2, this.domNode.style.lineHeight = this._lineHeight);
  }
  setLetterSpacing(t2) {
    let e2 = Ie(t2);
    this._letterSpacing !== e2 && (this._letterSpacing = e2, this.domNode.style.letterSpacing = this._letterSpacing);
  }
  setClassName(t2) {
    this._className !== t2 && (this._className = t2, this.domNode.className = this._className);
  }
  toggleClassName(t2, e2) {
    this.domNode.classList.toggle(t2, e2), this._className = this.domNode.className;
  }
  setDisplay(t2) {
    this._display !== t2 && (this._display = t2, this.domNode.style.display = this._display);
  }
  setPosition(t2) {
    this._position !== t2 && (this._position = t2, this.domNode.style.position = this._position);
  }
  setVisibility(t2) {
    this._visibility !== t2 && (this._visibility = t2, this.domNode.style.visibility = this._visibility);
  }
  setColor(t2) {
    this._color !== t2 && (this._color = t2, this.domNode.style.color = this._color);
  }
  setBackgroundColor(t2) {
    this._backgroundColor !== t2 && (this._backgroundColor = t2, this.domNode.style.backgroundColor = this._backgroundColor);
  }
  setLayerHinting(t2) {
    this._layerHint !== t2 && (this._layerHint = t2, this.domNode.style.transform = this._layerHint ? "translate3d(0px, 0px, 0px)" : "");
  }
  setBoxShadow(t2) {
    this._boxShadow !== t2 && (this._boxShadow = t2, this.domNode.style.boxShadow = t2);
  }
  setContain(t2) {
    this._contain !== t2 && (this._contain = t2, this.domNode.style.contain = this._contain);
  }
  setAttribute(t2, e2) {
    this.domNode.setAttribute(t2, e2);
  }
  removeAttribute(t2) {
    this.domNode.removeAttribute(t2);
  }
  appendChild(t2) {
    this.domNode.appendChild(t2.domNode);
  }
  removeChild(t2) {
    this.domNode.removeChild(t2.domNode);
  }
};
function Ie(s16) {
  return typeof s16 == "number" ? `${s16}px` : s16;
}
function _t(s16) {
  return new ls(s16);
}
var Wt = class {
  constructor() {
    this._hooks = new Ee();
    this._pointerMoveCallback = null;
    this._onStopCallback = null;
  }
  dispose() {
    this.stopMonitoring(false), this._hooks.dispose();
  }
  stopMonitoring(t2, e2) {
    if (!this.isMonitoring()) return;
    this._hooks.clear(), this._pointerMoveCallback = null;
    let i = this._onStopCallback;
    this._onStopCallback = null, t2 && i && i(e2);
  }
  isMonitoring() {
    return !!this._pointerMoveCallback;
  }
  startMonitoring(t2, e2, i, r2, n2) {
    this.isMonitoring() && this.stopMonitoring(false), this._pointerMoveCallback = r2, this._onStopCallback = n2;
    let o2 = t2;
    try {
      t2.setPointerCapture(e2), this._hooks.add(C(() => {
        try {
          t2.releasePointerCapture(e2);
        } catch {
        }
      }));
    } catch {
      o2 = be(t2);
    }
    this._hooks.add(L(o2, Y.POINTER_MOVE, (l2) => {
      if (l2.buttons !== i) {
        this.stopMonitoring(true);
        return;
      }
      l2.preventDefault(), this._pointerMoveCallback(l2);
    })), this._hooks.add(L(o2, Y.POINTER_UP, (l2) => this.stopMonitoring(true)));
  }
};
function Wo(s16, t2, e2) {
  let i = null, r2 = null;
  if (typeof e2.value == "function" ? (i = "value", r2 = e2.value, r2.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof e2.get == "function" && (i = "get", r2 = e2.get), !r2) throw new Error("not supported");
  let n2 = `$memoize$${t2}`;
  e2[i] = function(...o2) {
    return this.hasOwnProperty(n2) || Object.defineProperty(this, n2, { configurable: false, enumerable: false, writable: false, value: r2.apply(this, o2) }), this[n2];
  };
}
var He;
((n2) => (n2.Tap = "-xterm-gesturetap", n2.Change = "-xterm-gesturechange", n2.Start = "-xterm-gesturestart", n2.End = "-xterm-gesturesend", n2.Contextmenu = "-xterm-gesturecontextmenu"))(He ||= {});
var Q = class Q2 extends D {
  constructor() {
    super();
    this.dispatched = false;
    this.targets = new Ct();
    this.ignoreTargets = new Ct();
    this.activeTouches = {}, this.handle = null, this._lastSetTapCountTime = 0, this._register($.runAndSubscribe(No, ({ window: e2, disposables: i }) => {
      i.add(L(e2.document, "touchstart", (r2) => this.onTouchStart(r2), { passive: false })), i.add(L(e2.document, "touchend", (r2) => this.onTouchEnd(e2, r2))), i.add(L(e2.document, "touchmove", (r2) => this.onTouchMove(r2), { passive: false }));
    }, { window: fe, disposables: this._store }));
  }
  static addTarget(e2) {
    if (!Q2.isTouchDevice()) return D.None;
    Q2.INSTANCE || (Q2.INSTANCE = Gn(new Q2()));
    let i = Q2.INSTANCE.targets.push(e2);
    return C(i);
  }
  static ignoreTarget(e2) {
    if (!Q2.isTouchDevice()) return D.None;
    Q2.INSTANCE || (Q2.INSTANCE = Gn(new Q2()));
    let i = Q2.INSTANCE.ignoreTargets.push(e2);
    return C(i);
  }
  static isTouchDevice() {
    return "ontouchstart" in fe || navigator.maxTouchPoints > 0;
  }
  dispose() {
    this.handle && (this.handle.dispose(), this.handle = null), super.dispose();
  }
  onTouchStart(e2) {
    let i = Date.now();
    this.handle && (this.handle.dispose(), this.handle = null);
    for (let r2 = 0, n2 = e2.targetTouches.length; r2 < n2; r2++) {
      let o2 = e2.targetTouches.item(r2);
      this.activeTouches[o2.identifier] = { id: o2.identifier, initialTarget: o2.target, initialTimeStamp: i, initialPageX: o2.pageX, initialPageY: o2.pageY, rollingTimestamps: [i], rollingPageX: [o2.pageX], rollingPageY: [o2.pageY] };
      let l2 = this.newGestureEvent(He.Start, o2.target);
      l2.pageX = o2.pageX, l2.pageY = o2.pageY, this.dispatchEvent(l2);
    }
    this.dispatched && (e2.preventDefault(), e2.stopPropagation(), this.dispatched = false);
  }
  onTouchEnd(e2, i) {
    let r2 = Date.now(), n2 = Object.keys(this.activeTouches).length;
    for (let o2 = 0, l2 = i.changedTouches.length; o2 < l2; o2++) {
      let a2 = i.changedTouches.item(o2);
      if (!this.activeTouches.hasOwnProperty(String(a2.identifier))) {
        console.warn("move of an UNKNOWN touch", a2);
        continue;
      }
      let u2 = this.activeTouches[a2.identifier], h2 = Date.now() - u2.initialTimeStamp;
      if (h2 < Q2.HOLD_DELAY && Math.abs(u2.initialPageX - Se(u2.rollingPageX)) < 30 && Math.abs(u2.initialPageY - Se(u2.rollingPageY)) < 30) {
        let c2 = this.newGestureEvent(He.Tap, u2.initialTarget);
        c2.pageX = Se(u2.rollingPageX), c2.pageY = Se(u2.rollingPageY), this.dispatchEvent(c2);
      } else if (h2 >= Q2.HOLD_DELAY && Math.abs(u2.initialPageX - Se(u2.rollingPageX)) < 30 && Math.abs(u2.initialPageY - Se(u2.rollingPageY)) < 30) {
        let c2 = this.newGestureEvent(He.Contextmenu, u2.initialTarget);
        c2.pageX = Se(u2.rollingPageX), c2.pageY = Se(u2.rollingPageY), this.dispatchEvent(c2);
      } else if (n2 === 1) {
        let c2 = Se(u2.rollingPageX), d = Se(u2.rollingPageY), _2 = Se(u2.rollingTimestamps) - u2.rollingTimestamps[0], p2 = c2 - u2.rollingPageX[0], m2 = d - u2.rollingPageY[0], f2 = [...this.targets].filter((A2) => u2.initialTarget instanceof Node && A2.contains(u2.initialTarget));
        this.inertia(e2, f2, r2, Math.abs(p2) / _2, p2 > 0 ? 1 : -1, c2, Math.abs(m2) / _2, m2 > 0 ? 1 : -1, d);
      }
      this.dispatchEvent(this.newGestureEvent(He.End, u2.initialTarget)), delete this.activeTouches[a2.identifier];
    }
    this.dispatched && (i.preventDefault(), i.stopPropagation(), this.dispatched = false);
  }
  newGestureEvent(e2, i) {
    let r2 = document.createEvent("CustomEvent");
    return r2.initEvent(e2, false, true), r2.initialTarget = i, r2.tapCount = 0, r2;
  }
  dispatchEvent(e2) {
    if (e2.type === He.Tap) {
      let i = (/* @__PURE__ */ new Date()).getTime(), r2 = 0;
      i - this._lastSetTapCountTime > Q2.CLEAR_TAP_COUNT_TIME ? r2 = 1 : r2 = 2, this._lastSetTapCountTime = i, e2.tapCount = r2;
    } else (e2.type === He.Change || e2.type === He.Contextmenu) && (this._lastSetTapCountTime = 0);
    if (e2.initialTarget instanceof Node) {
      for (let r2 of this.ignoreTargets) if (r2.contains(e2.initialTarget)) return;
      let i = [];
      for (let r2 of this.targets) if (r2.contains(e2.initialTarget)) {
        let n2 = 0, o2 = e2.initialTarget;
        for (; o2 && o2 !== r2; ) n2++, o2 = o2.parentElement;
        i.push([n2, r2]);
      }
      i.sort((r2, n2) => r2[0] - n2[0]);
      for (let [r2, n2] of i) n2.dispatchEvent(e2), this.dispatched = true;
    }
  }
  inertia(e2, i, r2, n2, o2, l2, a2, u2, h2) {
    this.handle = mt(e2, () => {
      let c2 = Date.now(), d = c2 - r2, _2 = 0, p2 = 0, m2 = true;
      n2 += Q2.SCROLL_FRICTION * d, a2 += Q2.SCROLL_FRICTION * d, n2 > 0 && (m2 = false, _2 = o2 * n2 * d), a2 > 0 && (m2 = false, p2 = u2 * a2 * d);
      let f2 = this.newGestureEvent(He.Change);
      f2.translationX = _2, f2.translationY = p2, i.forEach((A2) => A2.dispatchEvent(f2)), m2 || this.inertia(e2, i, c2, n2, o2, l2 + _2, a2, u2, h2 + p2);
    });
  }
  onTouchMove(e2) {
    let i = Date.now();
    for (let r2 = 0, n2 = e2.changedTouches.length; r2 < n2; r2++) {
      let o2 = e2.changedTouches.item(r2);
      if (!this.activeTouches.hasOwnProperty(String(o2.identifier))) {
        console.warn("end of an UNKNOWN touch", o2);
        continue;
      }
      let l2 = this.activeTouches[o2.identifier], a2 = this.newGestureEvent(He.Change, l2.initialTarget);
      a2.translationX = o2.pageX - Se(l2.rollingPageX), a2.translationY = o2.pageY - Se(l2.rollingPageY), a2.pageX = o2.pageX, a2.pageY = o2.pageY, this.dispatchEvent(a2), l2.rollingPageX.length > 3 && (l2.rollingPageX.shift(), l2.rollingPageY.shift(), l2.rollingTimestamps.shift()), l2.rollingPageX.push(o2.pageX), l2.rollingPageY.push(o2.pageY), l2.rollingTimestamps.push(i);
    }
    this.dispatched && (e2.preventDefault(), e2.stopPropagation(), this.dispatched = false);
  }
};
Q.SCROLL_FRICTION = -5e-3, Q.HOLD_DELAY = 700, Q.CLEAR_TAP_COUNT_TIME = 400, M([Wo], Q, "isTouchDevice", 1);
var Pr = Q;
var lt = class extends D {
  onclick(t2, e2) {
    this._register(L(t2, Y.CLICK, (i) => e2(new qe(be(t2), i))));
  }
  onmousedown(t2, e2) {
    this._register(L(t2, Y.MOUSE_DOWN, (i) => e2(new qe(be(t2), i))));
  }
  onmouseover(t2, e2) {
    this._register(L(t2, Y.MOUSE_OVER, (i) => e2(new qe(be(t2), i))));
  }
  onmouseleave(t2, e2) {
    this._register(L(t2, Y.MOUSE_LEAVE, (i) => e2(new qe(be(t2), i))));
  }
  onkeydown(t2, e2) {
    this._register(L(t2, Y.KEY_DOWN, (i) => e2(new ft(i))));
  }
  onkeyup(t2, e2) {
    this._register(L(t2, Y.KEY_UP, (i) => e2(new ft(i))));
  }
  oninput(t2, e2) {
    this._register(L(t2, Y.INPUT, e2));
  }
  onblur(t2, e2) {
    this._register(L(t2, Y.BLUR, e2));
  }
  onfocus(t2, e2) {
    this._register(L(t2, Y.FOCUS, e2));
  }
  onchange(t2, e2) {
    this._register(L(t2, Y.CHANGE, e2));
  }
  ignoreGesture(t2) {
    return Pr.ignoreTarget(t2);
  }
};
var Uo = 11, Or = class extends lt {
  constructor(t2) {
    super(), this._onActivate = t2.onActivate, this.bgDomNode = document.createElement("div"), this.bgDomNode.className = "arrow-background", this.bgDomNode.style.position = "absolute", this.bgDomNode.style.width = t2.bgWidth + "px", this.bgDomNode.style.height = t2.bgHeight + "px", typeof t2.top < "u" && (this.bgDomNode.style.top = "0px"), typeof t2.left < "u" && (this.bgDomNode.style.left = "0px"), typeof t2.bottom < "u" && (this.bgDomNode.style.bottom = "0px"), typeof t2.right < "u" && (this.bgDomNode.style.right = "0px"), this.domNode = document.createElement("div"), this.domNode.className = t2.className, this.domNode.style.position = "absolute", this.domNode.style.width = Uo + "px", this.domNode.style.height = Uo + "px", typeof t2.top < "u" && (this.domNode.style.top = t2.top + "px"), typeof t2.left < "u" && (this.domNode.style.left = t2.left + "px"), typeof t2.bottom < "u" && (this.domNode.style.bottom = t2.bottom + "px"), typeof t2.right < "u" && (this.domNode.style.right = t2.right + "px"), this._pointerMoveMonitor = this._register(new Wt()), this._register(os(this.bgDomNode, Y.POINTER_DOWN, (e2) => this._arrowPointerDown(e2))), this._register(os(this.domNode, Y.POINTER_DOWN, (e2) => this._arrowPointerDown(e2))), this._pointerdownRepeatTimer = this._register(new Mr()), this._pointerdownScheduleRepeatTimer = this._register(new Ye());
  }
  _arrowPointerDown(t2) {
    if (!t2.target || !(t2.target instanceof Element)) return;
    let e2 = () => {
      this._pointerdownRepeatTimer.cancelAndSet(() => this._onActivate(), 1e3 / 24, be(t2));
    };
    this._onActivate(), this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancelAndSet(e2, 200), this._pointerMoveMonitor.startMonitoring(t2.target, t2.pointerId, t2.buttons, (i) => {
    }, () => {
      this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancel();
    }), t2.preventDefault();
  }
};
var cs = class s10 {
  constructor(t2, e2, i, r2, n2, o2, l2) {
    this._forceIntegerValues = t2;
    this._scrollStateBrand = void 0;
    this._forceIntegerValues && (e2 = e2 | 0, i = i | 0, r2 = r2 | 0, n2 = n2 | 0, o2 = o2 | 0, l2 = l2 | 0), this.rawScrollLeft = r2, this.rawScrollTop = l2, e2 < 0 && (e2 = 0), r2 + e2 > i && (r2 = i - e2), r2 < 0 && (r2 = 0), n2 < 0 && (n2 = 0), l2 + n2 > o2 && (l2 = o2 - n2), l2 < 0 && (l2 = 0), this.width = e2, this.scrollWidth = i, this.scrollLeft = r2, this.height = n2, this.scrollHeight = o2, this.scrollTop = l2;
  }
  equals(t2) {
    return this.rawScrollLeft === t2.rawScrollLeft && this.rawScrollTop === t2.rawScrollTop && this.width === t2.width && this.scrollWidth === t2.scrollWidth && this.scrollLeft === t2.scrollLeft && this.height === t2.height && this.scrollHeight === t2.scrollHeight && this.scrollTop === t2.scrollTop;
  }
  withScrollDimensions(t2, e2) {
    return new s10(this._forceIntegerValues, typeof t2.width < "u" ? t2.width : this.width, typeof t2.scrollWidth < "u" ? t2.scrollWidth : this.scrollWidth, e2 ? this.rawScrollLeft : this.scrollLeft, typeof t2.height < "u" ? t2.height : this.height, typeof t2.scrollHeight < "u" ? t2.scrollHeight : this.scrollHeight, e2 ? this.rawScrollTop : this.scrollTop);
  }
  withScrollPosition(t2) {
    return new s10(this._forceIntegerValues, this.width, this.scrollWidth, typeof t2.scrollLeft < "u" ? t2.scrollLeft : this.rawScrollLeft, this.height, this.scrollHeight, typeof t2.scrollTop < "u" ? t2.scrollTop : this.rawScrollTop);
  }
  createScrollEvent(t2, e2) {
    let i = this.width !== t2.width, r2 = this.scrollWidth !== t2.scrollWidth, n2 = this.scrollLeft !== t2.scrollLeft, o2 = this.height !== t2.height, l2 = this.scrollHeight !== t2.scrollHeight, a2 = this.scrollTop !== t2.scrollTop;
    return { inSmoothScrolling: e2, oldWidth: t2.width, oldScrollWidth: t2.scrollWidth, oldScrollLeft: t2.scrollLeft, width: this.width, scrollWidth: this.scrollWidth, scrollLeft: this.scrollLeft, oldHeight: t2.height, oldScrollHeight: t2.scrollHeight, oldScrollTop: t2.scrollTop, height: this.height, scrollHeight: this.scrollHeight, scrollTop: this.scrollTop, widthChanged: i, scrollWidthChanged: r2, scrollLeftChanged: n2, heightChanged: o2, scrollHeightChanged: l2, scrollTopChanged: a2 };
  }
}, Ri = class extends D {
  constructor(e2) {
    super();
    this._scrollableBrand = void 0;
    this._onScroll = this._register(new v());
    this.onScroll = this._onScroll.event;
    this._smoothScrollDuration = e2.smoothScrollDuration, this._scheduleAtNextAnimationFrame = e2.scheduleAtNextAnimationFrame, this._state = new cs(e2.forceIntegerValues, 0, 0, 0, 0, 0, 0), this._smoothScrolling = null;
  }
  dispose() {
    this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), super.dispose();
  }
  setSmoothScrollDuration(e2) {
    this._smoothScrollDuration = e2;
  }
  validateScrollPosition(e2) {
    return this._state.withScrollPosition(e2);
  }
  getScrollDimensions() {
    return this._state;
  }
  setScrollDimensions(e2, i) {
    let r2 = this._state.withScrollDimensions(e2, i);
    this._setState(r2, !!this._smoothScrolling), this._smoothScrolling?.acceptScrollDimensions(this._state);
  }
  getFutureScrollPosition() {
    return this._smoothScrolling ? this._smoothScrolling.to : this._state;
  }
  getCurrentScrollPosition() {
    return this._state;
  }
  setScrollPositionNow(e2) {
    let i = this._state.withScrollPosition(e2);
    this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), this._setState(i, false);
  }
  setScrollPositionSmooth(e2, i) {
    if (this._smoothScrollDuration === 0) return this.setScrollPositionNow(e2);
    if (this._smoothScrolling) {
      e2 = { scrollLeft: typeof e2.scrollLeft > "u" ? this._smoothScrolling.to.scrollLeft : e2.scrollLeft, scrollTop: typeof e2.scrollTop > "u" ? this._smoothScrolling.to.scrollTop : e2.scrollTop };
      let r2 = this._state.withScrollPosition(e2);
      if (this._smoothScrolling.to.scrollLeft === r2.scrollLeft && this._smoothScrolling.to.scrollTop === r2.scrollTop) return;
      let n2;
      i ? n2 = new Nr(this._smoothScrolling.from, r2, this._smoothScrolling.startTime, this._smoothScrolling.duration) : n2 = this._smoothScrolling.combine(this._state, r2, this._smoothScrollDuration), this._smoothScrolling.dispose(), this._smoothScrolling = n2;
    } else {
      let r2 = this._state.withScrollPosition(e2);
      this._smoothScrolling = Nr.start(this._state, r2, this._smoothScrollDuration);
    }
    this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
      this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable = null, this._performSmoothScrolling());
    });
  }
  hasPendingScrollAnimation() {
    return !!this._smoothScrolling;
  }
  _performSmoothScrolling() {
    if (!this._smoothScrolling) return;
    let e2 = this._smoothScrolling.tick(), i = this._state.withScrollPosition(e2);
    if (this._setState(i, true), !!this._smoothScrolling) {
      if (e2.isDone) {
        this._smoothScrolling.dispose(), this._smoothScrolling = null;
        return;
      }
      this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
        this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable = null, this._performSmoothScrolling());
      });
    }
  }
  _setState(e2, i) {
    let r2 = this._state;
    r2.equals(e2) || (this._state = e2, this._onScroll.fire(this._state.createScrollEvent(r2, i)));
  }
}, Br = class {
  constructor(t2, e2, i) {
    this.scrollLeft = t2, this.scrollTop = e2, this.isDone = i;
  }
};
function as(s16, t2) {
  let e2 = t2 - s16;
  return function(i) {
    return s16 + e2 * ka(i);
  };
}
function La(s16, t2, e2) {
  return function(i) {
    return i < e2 ? s16(i / e2) : t2((i - e2) / (1 - e2));
  };
}
var Nr = class s11 {
  constructor(t2, e2, i, r2) {
    this.from = t2, this.to = e2, this.duration = r2, this.startTime = i, this.animationFrameDisposable = null, this._initAnimations();
  }
  _initAnimations() {
    this.scrollLeft = this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width), this.scrollTop = this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height);
  }
  _initAnimation(t2, e2, i) {
    if (Math.abs(t2 - e2) > 2.5 * i) {
      let n2, o2;
      return t2 < e2 ? (n2 = t2 + 0.75 * i, o2 = e2 - 0.75 * i) : (n2 = t2 - 0.75 * i, o2 = e2 + 0.75 * i), La(as(t2, n2), as(o2, e2), 0.33);
    }
    return as(t2, e2);
  }
  dispose() {
    this.animationFrameDisposable !== null && (this.animationFrameDisposable.dispose(), this.animationFrameDisposable = null);
  }
  acceptScrollDimensions(t2) {
    this.to = t2.withScrollPosition(this.to), this._initAnimations();
  }
  tick() {
    return this._tick(Date.now());
  }
  _tick(t2) {
    let e2 = (t2 - this.startTime) / this.duration;
    if (e2 < 1) {
      let i = this.scrollLeft(e2), r2 = this.scrollTop(e2);
      return new Br(i, r2, false);
    }
    return new Br(this.to.scrollLeft, this.to.scrollTop, true);
  }
  combine(t2, e2, i) {
    return s11.start(t2, e2, i);
  }
  static start(t2, e2, i) {
    i = i + 10;
    let r2 = Date.now() - 10;
    return new s11(t2, e2, r2, i);
  }
};
function Aa(s16) {
  return Math.pow(s16, 3);
}
function ka(s16) {
  return 1 - Aa(1 - s16);
}
var Fr = class extends D {
  constructor(t2, e2, i) {
    super(), this._visibility = t2, this._visibleClassName = e2, this._invisibleClassName = i, this._domNode = null, this._isVisible = false, this._isNeeded = false, this._rawShouldBeVisible = false, this._shouldBeVisible = false, this._revealTimer = this._register(new Ye());
  }
  setVisibility(t2) {
    this._visibility !== t2 && (this._visibility = t2, this._updateShouldBeVisible());
  }
  setShouldBeVisible(t2) {
    this._rawShouldBeVisible = t2, this._updateShouldBeVisible();
  }
  _applyVisibilitySetting() {
    return this._visibility === 2 ? false : this._visibility === 3 ? true : this._rawShouldBeVisible;
  }
  _updateShouldBeVisible() {
    let t2 = this._applyVisibilitySetting();
    this._shouldBeVisible !== t2 && (this._shouldBeVisible = t2, this.ensureVisibility());
  }
  setIsNeeded(t2) {
    this._isNeeded !== t2 && (this._isNeeded = t2, this.ensureVisibility());
  }
  setDomNode(t2) {
    this._domNode = t2, this._domNode.setClassName(this._invisibleClassName), this.setShouldBeVisible(false);
  }
  ensureVisibility() {
    if (!this._isNeeded) {
      this._hide(false);
      return;
    }
    this._shouldBeVisible ? this._reveal() : this._hide(true);
  }
  _reveal() {
    this._isVisible || (this._isVisible = true, this._revealTimer.setIfNotSet(() => {
      this._domNode?.setClassName(this._visibleClassName);
    }, 0));
  }
  _hide(t2) {
    this._revealTimer.cancel(), this._isVisible && (this._isVisible = false, this._domNode?.setClassName(this._invisibleClassName + (t2 ? " fade" : "")));
  }
};
var Ca = 140, Ut = class extends lt {
  constructor(t2) {
    super(), this._lazyRender = t2.lazyRender, this._host = t2.host, this._scrollable = t2.scrollable, this._scrollByPage = t2.scrollByPage, this._scrollbarState = t2.scrollbarState, this._visibilityController = this._register(new Fr(t2.visibility, "visible scrollbar " + t2.extraScrollbarClassName, "invisible scrollbar " + t2.extraScrollbarClassName)), this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._pointerMoveMonitor = this._register(new Wt()), this._shouldRender = true, this.domNode = _t(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this._visibilityController.setDomNode(this.domNode), this.domNode.setPosition("absolute"), this._register(L(this.domNode.domNode, Y.POINTER_DOWN, (e2) => this._domNodePointerDown(e2)));
  }
  _createArrow(t2) {
    let e2 = this._register(new Or(t2));
    this.domNode.domNode.appendChild(e2.bgDomNode), this.domNode.domNode.appendChild(e2.domNode);
  }
  _createSlider(t2, e2, i, r2) {
    this.slider = _t(document.createElement("div")), this.slider.setClassName("slider"), this.slider.setPosition("absolute"), this.slider.setTop(t2), this.slider.setLeft(e2), typeof i == "number" && this.slider.setWidth(i), typeof r2 == "number" && this.slider.setHeight(r2), this.slider.setLayerHinting(true), this.slider.setContain("strict"), this.domNode.domNode.appendChild(this.slider.domNode), this._register(L(this.slider.domNode, Y.POINTER_DOWN, (n2) => {
      n2.button === 0 && (n2.preventDefault(), this._sliderPointerDown(n2));
    })), this.onclick(this.slider.domNode, (n2) => {
      n2.leftButton && n2.stopPropagation();
    });
  }
  _onElementSize(t2) {
    return this._scrollbarState.setVisibleSize(t2) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = true, this._lazyRender || this.render()), this._shouldRender;
  }
  _onElementScrollSize(t2) {
    return this._scrollbarState.setScrollSize(t2) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = true, this._lazyRender || this.render()), this._shouldRender;
  }
  _onElementScrollPosition(t2) {
    return this._scrollbarState.setScrollPosition(t2) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = true, this._lazyRender || this.render()), this._shouldRender;
  }
  beginReveal() {
    this._visibilityController.setShouldBeVisible(true);
  }
  beginHide() {
    this._visibilityController.setShouldBeVisible(false);
  }
  render() {
    this._shouldRender && (this._shouldRender = false, this._renderDomNode(this._scrollbarState.getRectangleLargeSize(), this._scrollbarState.getRectangleSmallSize()), this._updateSlider(this._scrollbarState.getSliderSize(), this._scrollbarState.getArrowSize() + this._scrollbarState.getSliderPosition()));
  }
  _domNodePointerDown(t2) {
    t2.target === this.domNode.domNode && this._onPointerDown(t2);
  }
  delegatePointerDown(t2) {
    let e2 = this.domNode.domNode.getClientRects()[0].top, i = e2 + this._scrollbarState.getSliderPosition(), r2 = e2 + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize(), n2 = this._sliderPointerPosition(t2);
    i <= n2 && n2 <= r2 ? t2.button === 0 && (t2.preventDefault(), this._sliderPointerDown(t2)) : this._onPointerDown(t2);
  }
  _onPointerDown(t2) {
    let e2, i;
    if (t2.target === this.domNode.domNode && typeof t2.offsetX == "number" && typeof t2.offsetY == "number") e2 = t2.offsetX, i = t2.offsetY;
    else {
      let n2 = Fo(this.domNode.domNode);
      e2 = t2.pageX - n2.left, i = t2.pageY - n2.top;
    }
    let r2 = this._pointerDownRelativePosition(e2, i);
    this._setDesiredScrollPositionNow(this._scrollByPage ? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(r2) : this._scrollbarState.getDesiredScrollPositionFromOffset(r2)), t2.button === 0 && (t2.preventDefault(), this._sliderPointerDown(t2));
  }
  _sliderPointerDown(t2) {
    if (!t2.target || !(t2.target instanceof Element)) return;
    let e2 = this._sliderPointerPosition(t2), i = this._sliderOrthogonalPointerPosition(t2), r2 = this._scrollbarState.clone();
    this.slider.toggleClassName("active", true), this._pointerMoveMonitor.startMonitoring(t2.target, t2.pointerId, t2.buttons, (n2) => {
      let o2 = this._sliderOrthogonalPointerPosition(n2), l2 = Math.abs(o2 - i);
      if (wr && l2 > Ca) {
        this._setDesiredScrollPositionNow(r2.getScrollPosition());
        return;
      }
      let u2 = this._sliderPointerPosition(n2) - e2;
      this._setDesiredScrollPositionNow(r2.getDesiredScrollPositionFromDelta(u2));
    }, () => {
      this.slider.toggleClassName("active", false), this._host.onDragEnd();
    }), this._host.onDragStart();
  }
  _setDesiredScrollPositionNow(t2) {
    let e2 = {};
    this.writeScrollPosition(e2, t2), this._scrollable.setScrollPositionNow(e2);
  }
  updateScrollbarSize(t2) {
    this._updateScrollbarSize(t2), this._scrollbarState.setScrollbarSize(t2), this._shouldRender = true, this._lazyRender || this.render();
  }
  isNeeded() {
    return this._scrollbarState.isNeeded();
  }
};
var Kt = class s12 {
  constructor(t2, e2, i, r2, n2, o2) {
    this._scrollbarSize = Math.round(e2), this._oppositeScrollbarSize = Math.round(i), this._arrowSize = Math.round(t2), this._visibleSize = r2, this._scrollSize = n2, this._scrollPosition = o2, this._computedAvailableSize = 0, this._computedIsNeeded = false, this._computedSliderSize = 0, this._computedSliderRatio = 0, this._computedSliderPosition = 0, this._refreshComputedValues();
  }
  clone() {
    return new s12(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition);
  }
  setVisibleSize(t2) {
    let e2 = Math.round(t2);
    return this._visibleSize !== e2 ? (this._visibleSize = e2, this._refreshComputedValues(), true) : false;
  }
  setScrollSize(t2) {
    let e2 = Math.round(t2);
    return this._scrollSize !== e2 ? (this._scrollSize = e2, this._refreshComputedValues(), true) : false;
  }
  setScrollPosition(t2) {
    let e2 = Math.round(t2);
    return this._scrollPosition !== e2 ? (this._scrollPosition = e2, this._refreshComputedValues(), true) : false;
  }
  setScrollbarSize(t2) {
    this._scrollbarSize = Math.round(t2);
  }
  setOppositeScrollbarSize(t2) {
    this._oppositeScrollbarSize = Math.round(t2);
  }
  static _computeValues(t2, e2, i, r2, n2) {
    let o2 = Math.max(0, i - t2), l2 = Math.max(0, o2 - 2 * e2), a2 = r2 > 0 && r2 > i;
    if (!a2) return { computedAvailableSize: Math.round(o2), computedIsNeeded: a2, computedSliderSize: Math.round(l2), computedSliderRatio: 0, computedSliderPosition: 0 };
    let u2 = Math.round(Math.max(20, Math.floor(i * l2 / r2))), h2 = (l2 - u2) / (r2 - i), c2 = n2 * h2;
    return { computedAvailableSize: Math.round(o2), computedIsNeeded: a2, computedSliderSize: Math.round(u2), computedSliderRatio: h2, computedSliderPosition: Math.round(c2) };
  }
  _refreshComputedValues() {
    let t2 = s12._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
    this._computedAvailableSize = t2.computedAvailableSize, this._computedIsNeeded = t2.computedIsNeeded, this._computedSliderSize = t2.computedSliderSize, this._computedSliderRatio = t2.computedSliderRatio, this._computedSliderPosition = t2.computedSliderPosition;
  }
  getArrowSize() {
    return this._arrowSize;
  }
  getScrollPosition() {
    return this._scrollPosition;
  }
  getRectangleLargeSize() {
    return this._computedAvailableSize;
  }
  getRectangleSmallSize() {
    return this._scrollbarSize;
  }
  isNeeded() {
    return this._computedIsNeeded;
  }
  getSliderSize() {
    return this._computedSliderSize;
  }
  getSliderPosition() {
    return this._computedSliderPosition;
  }
  getDesiredScrollPositionFromOffset(t2) {
    if (!this._computedIsNeeded) return 0;
    let e2 = t2 - this._arrowSize - this._computedSliderSize / 2;
    return Math.round(e2 / this._computedSliderRatio);
  }
  getDesiredScrollPositionFromOffsetPaged(t2) {
    if (!this._computedIsNeeded) return 0;
    let e2 = t2 - this._arrowSize, i = this._scrollPosition;
    return e2 < this._computedSliderPosition ? i -= this._visibleSize : i += this._visibleSize, i;
  }
  getDesiredScrollPositionFromDelta(t2) {
    if (!this._computedIsNeeded) return 0;
    let e2 = this._computedSliderPosition + t2;
    return Math.round(e2 / this._computedSliderRatio);
  }
};
var Wr = class extends Ut {
  constructor(t2, e2, i) {
    let r2 = t2.getScrollDimensions(), n2 = t2.getCurrentScrollPosition();
    if (super({ lazyRender: e2.lazyRender, host: i, scrollbarState: new Kt(e2.horizontalHasArrows ? e2.arrowSize : 0, e2.horizontal === 2 ? 0 : e2.horizontalScrollbarSize, e2.vertical === 2 ? 0 : e2.verticalScrollbarSize, r2.width, r2.scrollWidth, n2.scrollLeft), visibility: e2.horizontal, extraScrollbarClassName: "horizontal", scrollable: t2, scrollByPage: e2.scrollByPage }), e2.horizontalHasArrows) throw new Error("horizontalHasArrows is not supported in xterm.js");
    this._createSlider(Math.floor((e2.horizontalScrollbarSize - e2.horizontalSliderSize) / 2), 0, void 0, e2.horizontalSliderSize);
  }
  _updateSlider(t2, e2) {
    this.slider.setWidth(t2), this.slider.setLeft(e2);
  }
  _renderDomNode(t2, e2) {
    this.domNode.setWidth(t2), this.domNode.setHeight(e2), this.domNode.setLeft(0), this.domNode.setBottom(0);
  }
  onDidScroll(t2) {
    return this._shouldRender = this._onElementScrollSize(t2.scrollWidth) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(t2.scrollLeft) || this._shouldRender, this._shouldRender = this._onElementSize(t2.width) || this._shouldRender, this._shouldRender;
  }
  _pointerDownRelativePosition(t2, e2) {
    return t2;
  }
  _sliderPointerPosition(t2) {
    return t2.pageX;
  }
  _sliderOrthogonalPointerPosition(t2) {
    return t2.pageY;
  }
  _updateScrollbarSize(t2) {
    this.slider.setHeight(t2);
  }
  writeScrollPosition(t2, e2) {
    t2.scrollLeft = e2;
  }
  updateOptions(t2) {
    this.updateScrollbarSize(t2.horizontal === 2 ? 0 : t2.horizontalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(t2.vertical === 2 ? 0 : t2.verticalScrollbarSize), this._visibilityController.setVisibility(t2.horizontal), this._scrollByPage = t2.scrollByPage;
  }
};
var Ur = class extends Ut {
  constructor(t2, e2, i) {
    let r2 = t2.getScrollDimensions(), n2 = t2.getCurrentScrollPosition();
    if (super({ lazyRender: e2.lazyRender, host: i, scrollbarState: new Kt(e2.verticalHasArrows ? e2.arrowSize : 0, e2.vertical === 2 ? 0 : e2.verticalScrollbarSize, 0, r2.height, r2.scrollHeight, n2.scrollTop), visibility: e2.vertical, extraScrollbarClassName: "vertical", scrollable: t2, scrollByPage: e2.scrollByPage }), e2.verticalHasArrows) throw new Error("horizontalHasArrows is not supported in xterm.js");
    this._createSlider(0, Math.floor((e2.verticalScrollbarSize - e2.verticalSliderSize) / 2), e2.verticalSliderSize, void 0);
  }
  _updateSlider(t2, e2) {
    this.slider.setHeight(t2), this.slider.setTop(e2);
  }
  _renderDomNode(t2, e2) {
    this.domNode.setWidth(e2), this.domNode.setHeight(t2), this.domNode.setRight(0), this.domNode.setTop(0);
  }
  onDidScroll(t2) {
    return this._shouldRender = this._onElementScrollSize(t2.scrollHeight) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(t2.scrollTop) || this._shouldRender, this._shouldRender = this._onElementSize(t2.height) || this._shouldRender, this._shouldRender;
  }
  _pointerDownRelativePosition(t2, e2) {
    return e2;
  }
  _sliderPointerPosition(t2) {
    return t2.pageY;
  }
  _sliderOrthogonalPointerPosition(t2) {
    return t2.pageX;
  }
  _updateScrollbarSize(t2) {
    this.slider.setWidth(t2);
  }
  writeScrollPosition(t2, e2) {
    t2.scrollTop = e2;
  }
  updateOptions(t2) {
    this.updateScrollbarSize(t2.vertical === 2 ? 0 : t2.verticalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(0), this._visibilityController.setVisibility(t2.vertical), this._scrollByPage = t2.scrollByPage;
  }
};
var Ma = 500, Ko = 50, us = class {
  constructor(t2, e2, i) {
    this.timestamp = t2, this.deltaX = e2, this.deltaY = i, this.score = 0;
  }
}, zr = class zr2 {
  constructor() {
    this._capacity = 5, this._memory = [], this._front = -1, this._rear = -1;
  }
  isPhysicalMouseWheel() {
    if (this._front === -1 && this._rear === -1) return false;
    let t2 = 1, e2 = 0, i = 1, r2 = this._rear;
    do {
      let n2 = r2 === this._front ? t2 : Math.pow(2, -i);
      if (t2 -= n2, e2 += this._memory[r2].score * n2, r2 === this._front) break;
      r2 = (this._capacity + r2 - 1) % this._capacity, i++;
    } while (true);
    return e2 <= 0.5;
  }
  acceptStandardWheelEvent(t2) {
    if (Ti) {
      let e2 = be(t2.browserEvent), i = mo(e2);
      this.accept(Date.now(), t2.deltaX * i, t2.deltaY * i);
    } else this.accept(Date.now(), t2.deltaX, t2.deltaY);
  }
  accept(t2, e2, i) {
    let r2 = null, n2 = new us(t2, e2, i);
    this._front === -1 && this._rear === -1 ? (this._memory[0] = n2, this._front = 0, this._rear = 0) : (r2 = this._memory[this._rear], this._rear = (this._rear + 1) % this._capacity, this._rear === this._front && (this._front = (this._front + 1) % this._capacity), this._memory[this._rear] = n2), n2.score = this._computeScore(n2, r2);
  }
  _computeScore(t2, e2) {
    if (Math.abs(t2.deltaX) > 0 && Math.abs(t2.deltaY) > 0) return 1;
    let i = 0.5;
    if ((!this._isAlmostInt(t2.deltaX) || !this._isAlmostInt(t2.deltaY)) && (i += 0.25), e2) {
      let r2 = Math.abs(t2.deltaX), n2 = Math.abs(t2.deltaY), o2 = Math.abs(e2.deltaX), l2 = Math.abs(e2.deltaY), a2 = Math.max(Math.min(r2, o2), 1), u2 = Math.max(Math.min(n2, l2), 1), h2 = Math.max(r2, o2), c2 = Math.max(n2, l2);
      h2 % a2 === 0 && c2 % u2 === 0 && (i -= 0.5);
    }
    return Math.min(Math.max(i, 0), 1);
  }
  _isAlmostInt(t2) {
    return Math.abs(Math.round(t2) - t2) < 0.01;
  }
};
zr.INSTANCE = new zr();
var hs = zr, ds = class extends lt {
  constructor(e2, i, r2) {
    super();
    this._onScroll = this._register(new v());
    this.onScroll = this._onScroll.event;
    this._onWillScroll = this._register(new v());
    this.onWillScroll = this._onWillScroll.event;
    this._options = Pa(i), this._scrollable = r2, this._register(this._scrollable.onScroll((o2) => {
      this._onWillScroll.fire(o2), this._onDidScroll(o2), this._onScroll.fire(o2);
    }));
    let n2 = { onMouseWheel: (o2) => this._onMouseWheel(o2), onDragStart: () => this._onDragStart(), onDragEnd: () => this._onDragEnd() };
    this._verticalScrollbar = this._register(new Ur(this._scrollable, this._options, n2)), this._horizontalScrollbar = this._register(new Wr(this._scrollable, this._options, n2)), this._domNode = document.createElement("div"), this._domNode.className = "xterm-scrollable-element " + this._options.className, this._domNode.setAttribute("role", "presentation"), this._domNode.style.position = "relative", this._domNode.appendChild(e2), this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode), this._domNode.appendChild(this._verticalScrollbar.domNode.domNode), this._options.useShadows ? (this._leftShadowDomNode = _t(document.createElement("div")), this._leftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._leftShadowDomNode.domNode), this._topShadowDomNode = _t(document.createElement("div")), this._topShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topShadowDomNode.domNode), this._topLeftShadowDomNode = _t(document.createElement("div")), this._topLeftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topLeftShadowDomNode.domNode)) : (this._leftShadowDomNode = null, this._topShadowDomNode = null, this._topLeftShadowDomNode = null), this._listenOnDomNode = this._options.listenOnDomNode || this._domNode, this._mouseWheelToDispose = [], this._setListeningToMouseWheel(this._options.handleMouseWheel), this.onmouseover(this._listenOnDomNode, (o2) => this._onMouseOver(o2)), this.onmouseleave(this._listenOnDomNode, (o2) => this._onMouseLeave(o2)), this._hideTimeout = this._register(new Ye()), this._isDragging = false, this._mouseIsOver = false, this._shouldRender = true, this._revealOnScroll = true;
  }
  get options() {
    return this._options;
  }
  dispose() {
    this._mouseWheelToDispose = Ne(this._mouseWheelToDispose), super.dispose();
  }
  getDomNode() {
    return this._domNode;
  }
  getOverviewRulerLayoutInfo() {
    return { parent: this._domNode, insertBefore: this._verticalScrollbar.domNode.domNode };
  }
  delegateVerticalScrollbarPointerDown(e2) {
    this._verticalScrollbar.delegatePointerDown(e2);
  }
  getScrollDimensions() {
    return this._scrollable.getScrollDimensions();
  }
  setScrollDimensions(e2) {
    this._scrollable.setScrollDimensions(e2, false);
  }
  updateClassName(e2) {
    this._options.className = e2, Te && (this._options.className += " mac"), this._domNode.className = "xterm-scrollable-element " + this._options.className;
  }
  updateOptions(e2) {
    typeof e2.handleMouseWheel < "u" && (this._options.handleMouseWheel = e2.handleMouseWheel, this._setListeningToMouseWheel(this._options.handleMouseWheel)), typeof e2.mouseWheelScrollSensitivity < "u" && (this._options.mouseWheelScrollSensitivity = e2.mouseWheelScrollSensitivity), typeof e2.fastScrollSensitivity < "u" && (this._options.fastScrollSensitivity = e2.fastScrollSensitivity), typeof e2.scrollPredominantAxis < "u" && (this._options.scrollPredominantAxis = e2.scrollPredominantAxis), typeof e2.horizontal < "u" && (this._options.horizontal = e2.horizontal), typeof e2.vertical < "u" && (this._options.vertical = e2.vertical), typeof e2.horizontalScrollbarSize < "u" && (this._options.horizontalScrollbarSize = e2.horizontalScrollbarSize), typeof e2.verticalScrollbarSize < "u" && (this._options.verticalScrollbarSize = e2.verticalScrollbarSize), typeof e2.scrollByPage < "u" && (this._options.scrollByPage = e2.scrollByPage), this._horizontalScrollbar.updateOptions(this._options), this._verticalScrollbar.updateOptions(this._options), this._options.lazyRender || this._render();
  }
  setRevealOnScroll(e2) {
    this._revealOnScroll = e2;
  }
  delegateScrollFromMouseWheelEvent(e2) {
    this._onMouseWheel(new xi(e2));
  }
  _setListeningToMouseWheel(e2) {
    if (this._mouseWheelToDispose.length > 0 !== e2 && (this._mouseWheelToDispose = Ne(this._mouseWheelToDispose), e2)) {
      let r2 = (n2) => {
        this._onMouseWheel(new xi(n2));
      };
      this._mouseWheelToDispose.push(L(this._listenOnDomNode, Y.MOUSE_WHEEL, r2, { passive: false }));
    }
  }
  _onMouseWheel(e2) {
    if (e2.browserEvent?.defaultPrevented) return;
    let i = hs.INSTANCE;
    i.acceptStandardWheelEvent(e2);
    let r2 = false;
    if (e2.deltaY || e2.deltaX) {
      let o2 = e2.deltaY * this._options.mouseWheelScrollSensitivity, l2 = e2.deltaX * this._options.mouseWheelScrollSensitivity;
      this._options.scrollPredominantAxis && (this._options.scrollYToX && l2 + o2 === 0 ? l2 = o2 = 0 : Math.abs(o2) >= Math.abs(l2) ? l2 = 0 : o2 = 0), this._options.flipAxes && ([o2, l2] = [l2, o2]);
      let a2 = !Te && e2.browserEvent && e2.browserEvent.shiftKey;
      (this._options.scrollYToX || a2) && !l2 && (l2 = o2, o2 = 0), e2.browserEvent && e2.browserEvent.altKey && (l2 = l2 * this._options.fastScrollSensitivity, o2 = o2 * this._options.fastScrollSensitivity);
      let u2 = this._scrollable.getFutureScrollPosition(), h2 = {};
      if (o2) {
        let c2 = Ko * o2, d = u2.scrollTop - (c2 < 0 ? Math.floor(c2) : Math.ceil(c2));
        this._verticalScrollbar.writeScrollPosition(h2, d);
      }
      if (l2) {
        let c2 = Ko * l2, d = u2.scrollLeft - (c2 < 0 ? Math.floor(c2) : Math.ceil(c2));
        this._horizontalScrollbar.writeScrollPosition(h2, d);
      }
      h2 = this._scrollable.validateScrollPosition(h2), (u2.scrollLeft !== h2.scrollLeft || u2.scrollTop !== h2.scrollTop) && (this._options.mouseWheelSmoothScroll && i.isPhysicalMouseWheel() ? this._scrollable.setScrollPositionSmooth(h2) : this._scrollable.setScrollPositionNow(h2), r2 = true);
    }
    let n2 = r2;
    !n2 && this._options.alwaysConsumeMouseWheel && (n2 = true), !n2 && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded()) && (n2 = true), n2 && (e2.preventDefault(), e2.stopPropagation());
  }
  _onDidScroll(e2) {
    this._shouldRender = this._horizontalScrollbar.onDidScroll(e2) || this._shouldRender, this._shouldRender = this._verticalScrollbar.onDidScroll(e2) || this._shouldRender, this._options.useShadows && (this._shouldRender = true), this._revealOnScroll && this._reveal(), this._options.lazyRender || this._render();
  }
  renderNow() {
    if (!this._options.lazyRender) throw new Error("Please use `lazyRender` together with `renderNow`!");
    this._render();
  }
  _render() {
    if (this._shouldRender && (this._shouldRender = false, this._horizontalScrollbar.render(), this._verticalScrollbar.render(), this._options.useShadows)) {
      let e2 = this._scrollable.getCurrentScrollPosition(), i = e2.scrollTop > 0, r2 = e2.scrollLeft > 0, n2 = r2 ? " left" : "", o2 = i ? " top" : "", l2 = r2 || i ? " top-left-corner" : "";
      this._leftShadowDomNode.setClassName(`shadow${n2}`), this._topShadowDomNode.setClassName(`shadow${o2}`), this._topLeftShadowDomNode.setClassName(`shadow${l2}${o2}${n2}`);
    }
  }
  _onDragStart() {
    this._isDragging = true, this._reveal();
  }
  _onDragEnd() {
    this._isDragging = false, this._hide();
  }
  _onMouseLeave(e2) {
    this._mouseIsOver = false, this._hide();
  }
  _onMouseOver(e2) {
    this._mouseIsOver = true, this._reveal();
  }
  _reveal() {
    this._verticalScrollbar.beginReveal(), this._horizontalScrollbar.beginReveal(), this._scheduleHide();
  }
  _hide() {
    !this._mouseIsOver && !this._isDragging && (this._verticalScrollbar.beginHide(), this._horizontalScrollbar.beginHide());
  }
  _scheduleHide() {
    !this._mouseIsOver && !this._isDragging && this._hideTimeout.cancelAndSet(() => this._hide(), Ma);
  }
};
var Kr = class extends ds {
  constructor(t2, e2, i) {
    super(t2, e2, i);
  }
  setScrollPosition(t2) {
    t2.reuseAnimation ? this._scrollable.setScrollPositionSmooth(t2, t2.reuseAnimation) : this._scrollable.setScrollPositionNow(t2);
  }
  getScrollPosition() {
    return this._scrollable.getCurrentScrollPosition();
  }
};
function Pa(s16) {
  let t2 = { lazyRender: typeof s16.lazyRender < "u" ? s16.lazyRender : false, className: typeof s16.className < "u" ? s16.className : "", useShadows: typeof s16.useShadows < "u" ? s16.useShadows : true, handleMouseWheel: typeof s16.handleMouseWheel < "u" ? s16.handleMouseWheel : true, flipAxes: typeof s16.flipAxes < "u" ? s16.flipAxes : false, consumeMouseWheelIfScrollbarIsNeeded: typeof s16.consumeMouseWheelIfScrollbarIsNeeded < "u" ? s16.consumeMouseWheelIfScrollbarIsNeeded : false, alwaysConsumeMouseWheel: typeof s16.alwaysConsumeMouseWheel < "u" ? s16.alwaysConsumeMouseWheel : false, scrollYToX: typeof s16.scrollYToX < "u" ? s16.scrollYToX : false, mouseWheelScrollSensitivity: typeof s16.mouseWheelScrollSensitivity < "u" ? s16.mouseWheelScrollSensitivity : 1, fastScrollSensitivity: typeof s16.fastScrollSensitivity < "u" ? s16.fastScrollSensitivity : 5, scrollPredominantAxis: typeof s16.scrollPredominantAxis < "u" ? s16.scrollPredominantAxis : true, mouseWheelSmoothScroll: typeof s16.mouseWheelSmoothScroll < "u" ? s16.mouseWheelSmoothScroll : true, arrowSize: typeof s16.arrowSize < "u" ? s16.arrowSize : 11, listenOnDomNode: typeof s16.listenOnDomNode < "u" ? s16.listenOnDomNode : null, horizontal: typeof s16.horizontal < "u" ? s16.horizontal : 1, horizontalScrollbarSize: typeof s16.horizontalScrollbarSize < "u" ? s16.horizontalScrollbarSize : 10, horizontalSliderSize: typeof s16.horizontalSliderSize < "u" ? s16.horizontalSliderSize : 0, horizontalHasArrows: typeof s16.horizontalHasArrows < "u" ? s16.horizontalHasArrows : false, vertical: typeof s16.vertical < "u" ? s16.vertical : 1, verticalScrollbarSize: typeof s16.verticalScrollbarSize < "u" ? s16.verticalScrollbarSize : 10, verticalHasArrows: typeof s16.verticalHasArrows < "u" ? s16.verticalHasArrows : false, verticalSliderSize: typeof s16.verticalSliderSize < "u" ? s16.verticalSliderSize : 0, scrollByPage: typeof s16.scrollByPage < "u" ? s16.scrollByPage : false };
  return t2.horizontalSliderSize = typeof s16.horizontalSliderSize < "u" ? s16.horizontalSliderSize : t2.horizontalScrollbarSize, t2.verticalSliderSize = typeof s16.verticalSliderSize < "u" ? s16.verticalSliderSize : t2.verticalScrollbarSize, Te && (t2.className += " mac"), t2;
}
var zt = class extends D {
  constructor(e2, i, r2, n2, o2, l2, a2, u2) {
    super();
    this._bufferService = r2;
    this._optionsService = a2;
    this._renderService = u2;
    this._onRequestScrollLines = this._register(new v());
    this.onRequestScrollLines = this._onRequestScrollLines.event;
    this._isSyncing = false;
    this._isHandlingScroll = false;
    this._suppressOnScrollHandler = false;
    let h2 = this._register(new Ri({ forceIntegerValues: false, smoothScrollDuration: this._optionsService.rawOptions.smoothScrollDuration, scheduleAtNextAnimationFrame: (c2) => mt(n2.window, c2) }));
    this._register(this._optionsService.onSpecificOptionChange("smoothScrollDuration", () => {
      h2.setSmoothScrollDuration(this._optionsService.rawOptions.smoothScrollDuration);
    })), this._scrollableElement = this._register(new Kr(i, { vertical: 1, horizontal: 2, useShadows: false, mouseWheelSmoothScroll: true, ...this._getChangeOptions() }, h2)), this._register(this._optionsService.onMultipleOptionChange(["scrollSensitivity", "fastScrollSensitivity", "overviewRuler"], () => this._scrollableElement.updateOptions(this._getChangeOptions()))), this._register(o2.onProtocolChange((c2) => {
      this._scrollableElement.updateOptions({ handleMouseWheel: !(c2 & 16) });
    })), this._scrollableElement.setScrollDimensions({ height: 0, scrollHeight: 0 }), this._register($.runAndSubscribe(l2.onChangeColors, () => {
      this._scrollableElement.getDomNode().style.backgroundColor = l2.colors.background.css;
    })), e2.appendChild(this._scrollableElement.getDomNode()), this._register(C(() => this._scrollableElement.getDomNode().remove())), this._styleElement = n2.mainDocument.createElement("style"), i.appendChild(this._styleElement), this._register(C(() => this._styleElement.remove())), this._register($.runAndSubscribe(l2.onChangeColors, () => {
      this._styleElement.textContent = [".xterm .xterm-scrollable-element > .scrollbar > .slider {", `  background: ${l2.colors.scrollbarSliderBackground.css};`, "}", ".xterm .xterm-scrollable-element > .scrollbar > .slider:hover {", `  background: ${l2.colors.scrollbarSliderHoverBackground.css};`, "}", ".xterm .xterm-scrollable-element > .scrollbar > .slider.active {", `  background: ${l2.colors.scrollbarSliderActiveBackground.css};`, "}"].join(`
`);
    })), this._register(this._bufferService.onResize(() => this.queueSync())), this._register(this._bufferService.buffers.onBufferActivate(() => {
      this._latestYDisp = void 0, this.queueSync();
    })), this._register(this._bufferService.onScroll(() => this._sync())), this._register(this._scrollableElement.onScroll((c2) => this._handleScroll(c2)));
  }
  scrollLines(e2) {
    let i = this._scrollableElement.getScrollPosition();
    this._scrollableElement.setScrollPosition({ reuseAnimation: true, scrollTop: i.scrollTop + e2 * this._renderService.dimensions.css.cell.height });
  }
  scrollToLine(e2, i) {
    i && (this._latestYDisp = e2), this._scrollableElement.setScrollPosition({ reuseAnimation: !i, scrollTop: e2 * this._renderService.dimensions.css.cell.height });
  }
  _getChangeOptions() {
    return { mouseWheelScrollSensitivity: this._optionsService.rawOptions.scrollSensitivity, fastScrollSensitivity: this._optionsService.rawOptions.fastScrollSensitivity, verticalScrollbarSize: this._optionsService.rawOptions.overviewRuler?.width || 14 };
  }
  queueSync(e2) {
    e2 !== void 0 && (this._latestYDisp = e2), this._queuedAnimationFrame === void 0 && (this._queuedAnimationFrame = this._renderService.addRefreshCallback(() => {
      this._queuedAnimationFrame = void 0, this._sync(this._latestYDisp);
    }));
  }
  _sync(e2 = this._bufferService.buffer.ydisp) {
    !this._renderService || this._isSyncing || (this._isSyncing = true, this._suppressOnScrollHandler = true, this._scrollableElement.setScrollDimensions({ height: this._renderService.dimensions.css.canvas.height, scrollHeight: this._renderService.dimensions.css.cell.height * this._bufferService.buffer.lines.length }), this._suppressOnScrollHandler = false, e2 !== this._latestYDisp && this._scrollableElement.setScrollPosition({ scrollTop: e2 * this._renderService.dimensions.css.cell.height }), this._isSyncing = false);
  }
  _handleScroll(e2) {
    if (!this._renderService || this._isHandlingScroll || this._suppressOnScrollHandler) return;
    this._isHandlingScroll = true;
    let i = Math.round(e2.scrollTop / this._renderService.dimensions.css.cell.height), r2 = i - this._bufferService.buffer.ydisp;
    r2 !== 0 && (this._latestYDisp = i, this._onRequestScrollLines.fire(r2)), this._isHandlingScroll = false;
  }
};
zt = M([S(2, F), S(3, ae), S(4, rr), S(5, Re), S(6, H), S(7, ce)], zt);
var Gt = class extends D {
  constructor(e2, i, r2, n2, o2) {
    super();
    this._screenElement = e2;
    this._bufferService = i;
    this._coreBrowserService = r2;
    this._decorationService = n2;
    this._renderService = o2;
    this._decorationElements = /* @__PURE__ */ new Map();
    this._altBufferIsActive = false;
    this._dimensionsChanged = false;
    this._container = document.createElement("div"), this._container.classList.add("xterm-decoration-container"), this._screenElement.appendChild(this._container), this._register(this._renderService.onRenderedViewportChange(() => this._doRefreshDecorations())), this._register(this._renderService.onDimensionsChange(() => {
      this._dimensionsChanged = true, this._queueRefresh();
    })), this._register(this._coreBrowserService.onDprChange(() => this._queueRefresh())), this._register(this._bufferService.buffers.onBufferActivate(() => {
      this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
    })), this._register(this._decorationService.onDecorationRegistered(() => this._queueRefresh())), this._register(this._decorationService.onDecorationRemoved((l2) => this._removeDecoration(l2))), this._register(C(() => {
      this._container.remove(), this._decorationElements.clear();
    }));
  }
  _queueRefresh() {
    this._animationFrame === void 0 && (this._animationFrame = this._renderService.addRefreshCallback(() => {
      this._doRefreshDecorations(), this._animationFrame = void 0;
    }));
  }
  _doRefreshDecorations() {
    for (let e2 of this._decorationService.decorations) this._renderDecoration(e2);
    this._dimensionsChanged = false;
  }
  _renderDecoration(e2) {
    this._refreshStyle(e2), this._dimensionsChanged && this._refreshXPosition(e2);
  }
  _createElement(e2) {
    let i = this._coreBrowserService.mainDocument.createElement("div");
    i.classList.add("xterm-decoration"), i.classList.toggle("xterm-decoration-top-layer", e2?.options?.layer === "top"), i.style.width = `${Math.round((e2.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, i.style.height = `${(e2.options.height || 1) * this._renderService.dimensions.css.cell.height}px`, i.style.top = `${(e2.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height}px`, i.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
    let r2 = e2.options.x ?? 0;
    return r2 && r2 > this._bufferService.cols && (i.style.display = "none"), this._refreshXPosition(e2, i), i;
  }
  _refreshStyle(e2) {
    let i = e2.marker.line - this._bufferService.buffers.active.ydisp;
    if (i < 0 || i >= this._bufferService.rows) e2.element && (e2.element.style.display = "none", e2.onRenderEmitter.fire(e2.element));
    else {
      let r2 = this._decorationElements.get(e2);
      r2 || (r2 = this._createElement(e2), e2.element = r2, this._decorationElements.set(e2, r2), this._container.appendChild(r2), e2.onDispose(() => {
        this._decorationElements.delete(e2), r2.remove();
      })), r2.style.display = this._altBufferIsActive ? "none" : "block", this._altBufferIsActive || (r2.style.width = `${Math.round((e2.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, r2.style.height = `${(e2.options.height || 1) * this._renderService.dimensions.css.cell.height}px`, r2.style.top = `${i * this._renderService.dimensions.css.cell.height}px`, r2.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`), e2.onRenderEmitter.fire(r2);
    }
  }
  _refreshXPosition(e2, i = e2.element) {
    if (!i) return;
    let r2 = e2.options.x ?? 0;
    (e2.options.anchor || "left") === "right" ? i.style.right = r2 ? `${r2 * this._renderService.dimensions.css.cell.width}px` : "" : i.style.left = r2 ? `${r2 * this._renderService.dimensions.css.cell.width}px` : "";
  }
  _removeDecoration(e2) {
    this._decorationElements.get(e2)?.remove(), this._decorationElements.delete(e2), e2.dispose();
  }
};
Gt = M([S(1, F), S(2, ae), S(3, Be), S(4, ce)], Gt);
var Gr = class {
  constructor() {
    this._zones = [];
    this._zonePool = [];
    this._zonePoolIndex = 0;
    this._linePadding = { full: 0, left: 0, center: 0, right: 0 };
  }
  get zones() {
    return this._zonePool.length = Math.min(this._zonePool.length, this._zones.length), this._zones;
  }
  clear() {
    this._zones.length = 0, this._zonePoolIndex = 0;
  }
  addDecoration(t2) {
    if (t2.options.overviewRulerOptions) {
      for (let e2 of this._zones) if (e2.color === t2.options.overviewRulerOptions.color && e2.position === t2.options.overviewRulerOptions.position) {
        if (this._lineIntersectsZone(e2, t2.marker.line)) return;
        if (this._lineAdjacentToZone(e2, t2.marker.line, t2.options.overviewRulerOptions.position)) {
          this._addLineToZone(e2, t2.marker.line);
          return;
        }
      }
      if (this._zonePoolIndex < this._zonePool.length) {
        this._zonePool[this._zonePoolIndex].color = t2.options.overviewRulerOptions.color, this._zonePool[this._zonePoolIndex].position = t2.options.overviewRulerOptions.position, this._zonePool[this._zonePoolIndex].startBufferLine = t2.marker.line, this._zonePool[this._zonePoolIndex].endBufferLine = t2.marker.line, this._zones.push(this._zonePool[this._zonePoolIndex++]);
        return;
      }
      this._zones.push({ color: t2.options.overviewRulerOptions.color, position: t2.options.overviewRulerOptions.position, startBufferLine: t2.marker.line, endBufferLine: t2.marker.line }), this._zonePool.push(this._zones[this._zones.length - 1]), this._zonePoolIndex++;
    }
  }
  setPadding(t2) {
    this._linePadding = t2;
  }
  _lineIntersectsZone(t2, e2) {
    return e2 >= t2.startBufferLine && e2 <= t2.endBufferLine;
  }
  _lineAdjacentToZone(t2, e2, i) {
    return e2 >= t2.startBufferLine - this._linePadding[i || "full"] && e2 <= t2.endBufferLine + this._linePadding[i || "full"];
  }
  _addLineToZone(t2, e2) {
    t2.startBufferLine = Math.min(t2.startBufferLine, e2), t2.endBufferLine = Math.max(t2.endBufferLine, e2);
  }
};
var We = { full: 0, left: 0, center: 0, right: 0 }, at = { full: 0, left: 0, center: 0, right: 0 }, Li = { full: 0, left: 0, center: 0, right: 0 }, bt = class extends D {
  constructor(e2, i, r2, n2, o2, l2, a2, u2) {
    super();
    this._viewportElement = e2;
    this._screenElement = i;
    this._bufferService = r2;
    this._decorationService = n2;
    this._renderService = o2;
    this._optionsService = l2;
    this._themeService = a2;
    this._coreBrowserService = u2;
    this._colorZoneStore = new Gr();
    this._shouldUpdateDimensions = true;
    this._shouldUpdateAnchor = true;
    this._lastKnownBufferLength = 0;
    this._canvas = this._coreBrowserService.mainDocument.createElement("canvas"), this._canvas.classList.add("xterm-decoration-overview-ruler"), this._refreshCanvasDimensions(), this._viewportElement.parentElement?.insertBefore(this._canvas, this._viewportElement), this._register(C(() => this._canvas?.remove()));
    let h2 = this._canvas.getContext("2d");
    if (h2) this._ctx = h2;
    else throw new Error("Ctx cannot be null");
    this._register(this._decorationService.onDecorationRegistered(() => this._queueRefresh(void 0, true))), this._register(this._decorationService.onDecorationRemoved(() => this._queueRefresh(void 0, true))), this._register(this._renderService.onRenderedViewportChange(() => this._queueRefresh())), this._register(this._bufferService.buffers.onBufferActivate(() => {
      this._canvas.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block";
    })), this._register(this._bufferService.onScroll(() => {
      this._lastKnownBufferLength !== this._bufferService.buffers.normal.lines.length && (this._refreshDrawHeightConstants(), this._refreshColorZonePadding());
    })), this._register(this._renderService.onRender(() => {
      (!this._containerHeight || this._containerHeight !== this._screenElement.clientHeight) && (this._queueRefresh(true), this._containerHeight = this._screenElement.clientHeight);
    })), this._register(this._coreBrowserService.onDprChange(() => this._queueRefresh(true))), this._register(this._optionsService.onSpecificOptionChange("overviewRuler", () => this._queueRefresh(true))), this._register(this._themeService.onChangeColors(() => this._queueRefresh())), this._queueRefresh(true);
  }
  get _width() {
    return this._optionsService.options.overviewRuler?.width || 0;
  }
  _refreshDrawConstants() {
    let e2 = Math.floor((this._canvas.width - 1) / 3), i = Math.ceil((this._canvas.width - 1) / 3);
    at.full = this._canvas.width, at.left = e2, at.center = i, at.right = e2, this._refreshDrawHeightConstants(), Li.full = 1, Li.left = 1, Li.center = 1 + at.left, Li.right = 1 + at.left + at.center;
  }
  _refreshDrawHeightConstants() {
    We.full = Math.round(2 * this._coreBrowserService.dpr);
    let e2 = this._canvas.height / this._bufferService.buffer.lines.length, i = Math.round(Math.max(Math.min(e2, 12), 6) * this._coreBrowserService.dpr);
    We.left = i, We.center = i, We.right = i;
  }
  _refreshColorZonePadding() {
    this._colorZoneStore.setPadding({ full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * We.full), left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * We.left), center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * We.center), right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * We.right) }), this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
  }
  _refreshCanvasDimensions() {
    this._canvas.style.width = `${this._width}px`, this._canvas.width = Math.round(this._width * this._coreBrowserService.dpr), this._canvas.style.height = `${this._screenElement.clientHeight}px`, this._canvas.height = Math.round(this._screenElement.clientHeight * this._coreBrowserService.dpr), this._refreshDrawConstants(), this._refreshColorZonePadding();
  }
  _refreshDecorations() {
    this._shouldUpdateDimensions && this._refreshCanvasDimensions(), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._colorZoneStore.clear();
    for (let i of this._decorationService.decorations) this._colorZoneStore.addDecoration(i);
    this._ctx.lineWidth = 1, this._renderRulerOutline();
    let e2 = this._colorZoneStore.zones;
    for (let i of e2) i.position !== "full" && this._renderColorZone(i);
    for (let i of e2) i.position === "full" && this._renderColorZone(i);
    this._shouldUpdateDimensions = false, this._shouldUpdateAnchor = false;
  }
  _renderRulerOutline() {
    this._ctx.fillStyle = this._themeService.colors.overviewRulerBorder.css, this._ctx.fillRect(0, 0, 1, this._canvas.height), this._optionsService.rawOptions.overviewRuler.showTopBorder && this._ctx.fillRect(1, 0, this._canvas.width - 1, 1), this._optionsService.rawOptions.overviewRuler.showBottomBorder && this._ctx.fillRect(1, this._canvas.height - 1, this._canvas.width - 1, this._canvas.height);
  }
  _renderColorZone(e2) {
    this._ctx.fillStyle = e2.color, this._ctx.fillRect(Li[e2.position || "full"], Math.round((this._canvas.height - 1) * (e2.startBufferLine / this._bufferService.buffers.active.lines.length) - We[e2.position || "full"] / 2), at[e2.position || "full"], Math.round((this._canvas.height - 1) * ((e2.endBufferLine - e2.startBufferLine) / this._bufferService.buffers.active.lines.length) + We[e2.position || "full"]));
  }
  _queueRefresh(e2, i) {
    this._shouldUpdateDimensions = e2 || this._shouldUpdateDimensions, this._shouldUpdateAnchor = i || this._shouldUpdateAnchor, this._animationFrame === void 0 && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
      this._refreshDecorations(), this._animationFrame = void 0;
    }));
  }
};
bt = M([S(2, F), S(3, Be), S(4, ce), S(5, H), S(6, Re), S(7, ae)], bt);
var b;
((E2) => (E2.NUL = "\0", E2.SOH = "", E2.STX = "", E2.ETX = "", E2.EOT = "", E2.ENQ = "", E2.ACK = "", E2.BEL = "\x07", E2.BS = "\b", E2.HT = "	", E2.LF = `
`, E2.VT = "\v", E2.FF = "\f", E2.CR = "\r", E2.SO = "", E2.SI = "", E2.DLE = "", E2.DC1 = "", E2.DC2 = "", E2.DC3 = "", E2.DC4 = "", E2.NAK = "", E2.SYN = "", E2.ETB = "", E2.CAN = "", E2.EM = "", E2.SUB = "", E2.ESC = "\x1B", E2.FS = "", E2.GS = "", E2.RS = "", E2.US = "", E2.SP = " ", E2.DEL = ""))(b ||= {});
var Ai;
((g) => (g.PAD = "", g.HOP = "", g.BPH = "", g.NBH = "", g.IND = "", g.NEL = "", g.SSA = "", g.ESA = "", g.HTS = "", g.HTJ = "", g.VTS = "", g.PLD = "", g.PLU = "", g.RI = "", g.SS2 = "", g.SS3 = "", g.DCS = "", g.PU1 = "", g.PU2 = "", g.STS = "", g.CCH = "", g.MW = "", g.SPA = "", g.EPA = "", g.SOS = "", g.SGCI = "", g.SCI = "", g.CSI = "", g.ST = "", g.OSC = "", g.PM = "", g.APC = ""))(Ai ||= {});
var fs;
((t2) => t2.ST = `${b.ESC}\\`)(fs ||= {});
var $t = class {
  constructor(t2, e2, i, r2, n2, o2) {
    this._textarea = t2;
    this._compositionView = e2;
    this._bufferService = i;
    this._optionsService = r2;
    this._coreService = n2;
    this._renderService = o2;
    this._isComposing = false, this._isSendingComposition = false, this._compositionPosition = { start: 0, end: 0 }, this._dataAlreadySent = "";
  }
  get isComposing() {
    return this._isComposing;
  }
  compositionstart() {
    this._isComposing = true, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
  }
  compositionupdate(t2) {
    this._compositionView.textContent = t2.data, this.updateCompositionElements(), setTimeout(() => {
      this._compositionPosition.end = this._textarea.value.length;
    }, 0);
  }
  compositionend() {
    this._finalizeComposition(true);
  }
  keydown(t2) {
    if (this._isComposing || this._isSendingComposition) {
      if (t2.keyCode === 20 || t2.keyCode === 229 || t2.keyCode === 16 || t2.keyCode === 17 || t2.keyCode === 18) return false;
      this._finalizeComposition(false);
    }
    return t2.keyCode === 229 ? (this._handleAnyTextareaChanges(), false) : true;
  }
  _finalizeComposition(t2) {
    if (this._compositionView.classList.remove("active"), this._isComposing = false, t2) {
      let e2 = { start: this._compositionPosition.start, end: this._compositionPosition.end };
      this._isSendingComposition = true, setTimeout(() => {
        if (this._isSendingComposition) {
          this._isSendingComposition = false;
          let i;
          e2.start += this._dataAlreadySent.length, this._isComposing ? i = this._textarea.value.substring(e2.start, this._compositionPosition.start) : i = this._textarea.value.substring(e2.start), i.length > 0 && this._coreService.triggerDataEvent(i, true);
        }
      }, 0);
    } else {
      this._isSendingComposition = false;
      let e2 = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
      this._coreService.triggerDataEvent(e2, true);
    }
  }
  _handleAnyTextareaChanges() {
    let t2 = this._textarea.value;
    setTimeout(() => {
      if (!this._isComposing) {
        let e2 = this._textarea.value, i = e2.replace(t2, "");
        this._dataAlreadySent = i, e2.length > t2.length ? this._coreService.triggerDataEvent(i, true) : e2.length < t2.length ? this._coreService.triggerDataEvent(`${b.DEL}`, true) : e2.length === t2.length && e2 !== t2 && this._coreService.triggerDataEvent(e2, true);
      }
    }, 0);
  }
  updateCompositionElements(t2) {
    if (this._isComposing) {
      if (this._bufferService.buffer.isCursorInViewport) {
        let e2 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), i = this._renderService.dimensions.css.cell.height, r2 = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height, n2 = e2 * this._renderService.dimensions.css.cell.width;
        this._compositionView.style.left = n2 + "px", this._compositionView.style.top = r2 + "px", this._compositionView.style.height = i + "px", this._compositionView.style.lineHeight = i + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
        let o2 = this._compositionView.getBoundingClientRect();
        this._textarea.style.left = n2 + "px", this._textarea.style.top = r2 + "px", this._textarea.style.width = Math.max(o2.width, 1) + "px", this._textarea.style.height = Math.max(o2.height, 1) + "px", this._textarea.style.lineHeight = o2.height + "px";
      }
      t2 || setTimeout(() => this.updateCompositionElements(true), 0);
    }
  }
};
$t = M([S(2, F), S(3, H), S(4, ge), S(5, ce)], $t);
var ue = 0, he = 0, de = 0, J = 0, ps = { css: "#00000000", rgba: 0 }, j;
((i) => {
  function s16(r2, n2, o2, l2) {
    return l2 !== void 0 ? `#${vt(r2)}${vt(n2)}${vt(o2)}${vt(l2)}` : `#${vt(r2)}${vt(n2)}${vt(o2)}`;
  }
  i.toCss = s16;
  function t2(r2, n2, o2, l2 = 255) {
    return (r2 << 24 | n2 << 16 | o2 << 8 | l2) >>> 0;
  }
  i.toRgba = t2;
  function e2(r2, n2, o2, l2) {
    return { css: i.toCss(r2, n2, o2, l2), rgba: i.toRgba(r2, n2, o2, l2) };
  }
  i.toColor = e2;
})(j ||= {});
var U;
((l2) => {
  function s16(a2, u2) {
    if (J = (u2.rgba & 255) / 255, J === 1) return { css: u2.css, rgba: u2.rgba };
    let h2 = u2.rgba >> 24 & 255, c2 = u2.rgba >> 16 & 255, d = u2.rgba >> 8 & 255, _2 = a2.rgba >> 24 & 255, p2 = a2.rgba >> 16 & 255, m2 = a2.rgba >> 8 & 255;
    ue = _2 + Math.round((h2 - _2) * J), he = p2 + Math.round((c2 - p2) * J), de = m2 + Math.round((d - m2) * J);
    let f2 = j.toCss(ue, he, de), A2 = j.toRgba(ue, he, de);
    return { css: f2, rgba: A2 };
  }
  l2.blend = s16;
  function t2(a2) {
    return (a2.rgba & 255) === 255;
  }
  l2.isOpaque = t2;
  function e2(a2, u2, h2) {
    let c2 = $r.ensureContrastRatio(a2.rgba, u2.rgba, h2);
    if (c2) return j.toColor(c2 >> 24 & 255, c2 >> 16 & 255, c2 >> 8 & 255);
  }
  l2.ensureContrastRatio = e2;
  function i(a2) {
    let u2 = (a2.rgba | 255) >>> 0;
    return [ue, he, de] = $r.toChannels(u2), { css: j.toCss(ue, he, de), rgba: u2 };
  }
  l2.opaque = i;
  function r2(a2, u2) {
    return J = Math.round(u2 * 255), [ue, he, de] = $r.toChannels(a2.rgba), { css: j.toCss(ue, he, de, J), rgba: j.toRgba(ue, he, de, J) };
  }
  l2.opacity = r2;
  function n2(a2, u2) {
    return J = a2.rgba & 255, r2(a2, J * u2 / 255);
  }
  l2.multiplyOpacity = n2;
  function o2(a2) {
    return [a2.rgba >> 24 & 255, a2.rgba >> 16 & 255, a2.rgba >> 8 & 255];
  }
  l2.toColorRGB = o2;
})(U ||= {});
var z;
((i) => {
  let s16, t2;
  try {
    let r2 = document.createElement("canvas");
    r2.width = 1, r2.height = 1;
    let n2 = r2.getContext("2d", { willReadFrequently: true });
    n2 && (s16 = n2, s16.globalCompositeOperation = "copy", t2 = s16.createLinearGradient(0, 0, 1, 1));
  } catch {
  }
  function e2(r2) {
    if (r2.match(/#[\da-f]{3,8}/i)) switch (r2.length) {
      case 4:
        return ue = parseInt(r2.slice(1, 2).repeat(2), 16), he = parseInt(r2.slice(2, 3).repeat(2), 16), de = parseInt(r2.slice(3, 4).repeat(2), 16), j.toColor(ue, he, de);
      case 5:
        return ue = parseInt(r2.slice(1, 2).repeat(2), 16), he = parseInt(r2.slice(2, 3).repeat(2), 16), de = parseInt(r2.slice(3, 4).repeat(2), 16), J = parseInt(r2.slice(4, 5).repeat(2), 16), j.toColor(ue, he, de, J);
      case 7:
        return { css: r2, rgba: (parseInt(r2.slice(1), 16) << 8 | 255) >>> 0 };
      case 9:
        return { css: r2, rgba: parseInt(r2.slice(1), 16) >>> 0 };
    }
    let n2 = r2.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
    if (n2) return ue = parseInt(n2[1]), he = parseInt(n2[2]), de = parseInt(n2[3]), J = Math.round((n2[5] === void 0 ? 1 : parseFloat(n2[5])) * 255), j.toColor(ue, he, de, J);
    if (!s16 || !t2) throw new Error("css.toColor: Unsupported css format");
    if (s16.fillStyle = t2, s16.fillStyle = r2, typeof s16.fillStyle != "string") throw new Error("css.toColor: Unsupported css format");
    if (s16.fillRect(0, 0, 1, 1), [ue, he, de, J] = s16.getImageData(0, 0, 1, 1).data, J !== 255) throw new Error("css.toColor: Unsupported css format");
    return { rgba: j.toRgba(ue, he, de, J), css: r2 };
  }
  i.toColor = e2;
})(z ||= {});
var ve;
((e2) => {
  function s16(i) {
    return t2(i >> 16 & 255, i >> 8 & 255, i & 255);
  }
  e2.relativeLuminance = s16;
  function t2(i, r2, n2) {
    let o2 = i / 255, l2 = r2 / 255, a2 = n2 / 255, u2 = o2 <= 0.03928 ? o2 / 12.92 : Math.pow((o2 + 0.055) / 1.055, 2.4), h2 = l2 <= 0.03928 ? l2 / 12.92 : Math.pow((l2 + 0.055) / 1.055, 2.4), c2 = a2 <= 0.03928 ? a2 / 12.92 : Math.pow((a2 + 0.055) / 1.055, 2.4);
    return u2 * 0.2126 + h2 * 0.7152 + c2 * 0.0722;
  }
  e2.relativeLuminance2 = t2;
})(ve ||= {});
var $r;
((n2) => {
  function s16(o2, l2) {
    if (J = (l2 & 255) / 255, J === 1) return l2;
    let a2 = l2 >> 24 & 255, u2 = l2 >> 16 & 255, h2 = l2 >> 8 & 255, c2 = o2 >> 24 & 255, d = o2 >> 16 & 255, _2 = o2 >> 8 & 255;
    return ue = c2 + Math.round((a2 - c2) * J), he = d + Math.round((u2 - d) * J), de = _2 + Math.round((h2 - _2) * J), j.toRgba(ue, he, de);
  }
  n2.blend = s16;
  function t2(o2, l2, a2) {
    let u2 = ve.relativeLuminance(o2 >> 8), h2 = ve.relativeLuminance(l2 >> 8);
    if (Xe(u2, h2) < a2) {
      if (h2 < u2) {
        let p2 = e2(o2, l2, a2), m2 = Xe(u2, ve.relativeLuminance(p2 >> 8));
        if (m2 < a2) {
          let f2 = i(o2, l2, a2), A2 = Xe(u2, ve.relativeLuminance(f2 >> 8));
          return m2 > A2 ? p2 : f2;
        }
        return p2;
      }
      let d = i(o2, l2, a2), _2 = Xe(u2, ve.relativeLuminance(d >> 8));
      if (_2 < a2) {
        let p2 = e2(o2, l2, a2), m2 = Xe(u2, ve.relativeLuminance(p2 >> 8));
        return _2 > m2 ? d : p2;
      }
      return d;
    }
  }
  n2.ensureContrastRatio = t2;
  function e2(o2, l2, a2) {
    let u2 = o2 >> 24 & 255, h2 = o2 >> 16 & 255, c2 = o2 >> 8 & 255, d = l2 >> 24 & 255, _2 = l2 >> 16 & 255, p2 = l2 >> 8 & 255, m2 = Xe(ve.relativeLuminance2(d, _2, p2), ve.relativeLuminance2(u2, h2, c2));
    for (; m2 < a2 && (d > 0 || _2 > 0 || p2 > 0); ) d -= Math.max(0, Math.ceil(d * 0.1)), _2 -= Math.max(0, Math.ceil(_2 * 0.1)), p2 -= Math.max(0, Math.ceil(p2 * 0.1)), m2 = Xe(ve.relativeLuminance2(d, _2, p2), ve.relativeLuminance2(u2, h2, c2));
    return (d << 24 | _2 << 16 | p2 << 8 | 255) >>> 0;
  }
  n2.reduceLuminance = e2;
  function i(o2, l2, a2) {
    let u2 = o2 >> 24 & 255, h2 = o2 >> 16 & 255, c2 = o2 >> 8 & 255, d = l2 >> 24 & 255, _2 = l2 >> 16 & 255, p2 = l2 >> 8 & 255, m2 = Xe(ve.relativeLuminance2(d, _2, p2), ve.relativeLuminance2(u2, h2, c2));
    for (; m2 < a2 && (d < 255 || _2 < 255 || p2 < 255); ) d = Math.min(255, d + Math.ceil((255 - d) * 0.1)), _2 = Math.min(255, _2 + Math.ceil((255 - _2) * 0.1)), p2 = Math.min(255, p2 + Math.ceil((255 - p2) * 0.1)), m2 = Xe(ve.relativeLuminance2(d, _2, p2), ve.relativeLuminance2(u2, h2, c2));
    return (d << 24 | _2 << 16 | p2 << 8 | 255) >>> 0;
  }
  n2.increaseLuminance = i;
  function r2(o2) {
    return [o2 >> 24 & 255, o2 >> 16 & 255, o2 >> 8 & 255, o2 & 255];
  }
  n2.toChannels = r2;
})($r ||= {});
function vt(s16) {
  let t2 = s16.toString(16);
  return t2.length < 2 ? "0" + t2 : t2;
}
function Xe(s16, t2) {
  return s16 < t2 ? (t2 + 0.05) / (s16 + 0.05) : (s16 + 0.05) / (t2 + 0.05);
}
var Vr = class extends De {
  constructor(e2, i, r2) {
    super();
    this.content = 0;
    this.combinedData = "";
    this.fg = e2.fg, this.bg = e2.bg, this.combinedData = i, this._width = r2;
  }
  isCombined() {
    return 2097152;
  }
  getWidth() {
    return this._width;
  }
  getChars() {
    return this.combinedData;
  }
  getCode() {
    return 2097151;
  }
  setFromCharData(e2) {
    throw new Error("not implemented");
  }
  getAsCharData() {
    return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
  }
}, ct = class {
  constructor(t2) {
    this._bufferService = t2;
    this._characterJoiners = [];
    this._nextCharacterJoinerId = 0;
    this._workCell = new q();
  }
  register(t2) {
    let e2 = { id: this._nextCharacterJoinerId++, handler: t2 };
    return this._characterJoiners.push(e2), e2.id;
  }
  deregister(t2) {
    for (let e2 = 0; e2 < this._characterJoiners.length; e2++) if (this._characterJoiners[e2].id === t2) return this._characterJoiners.splice(e2, 1), true;
    return false;
  }
  getJoinedCharacters(t2) {
    if (this._characterJoiners.length === 0) return [];
    let e2 = this._bufferService.buffer.lines.get(t2);
    if (!e2 || e2.length === 0) return [];
    let i = [], r2 = e2.translateToString(true), n2 = 0, o2 = 0, l2 = 0, a2 = e2.getFg(0), u2 = e2.getBg(0);
    for (let h2 = 0; h2 < e2.getTrimmedLength(); h2++) if (e2.loadCell(h2, this._workCell), this._workCell.getWidth() !== 0) {
      if (this._workCell.fg !== a2 || this._workCell.bg !== u2) {
        if (h2 - n2 > 1) {
          let c2 = this._getJoinedRanges(r2, l2, o2, e2, n2);
          for (let d = 0; d < c2.length; d++) i.push(c2[d]);
        }
        n2 = h2, l2 = o2, a2 = this._workCell.fg, u2 = this._workCell.bg;
      }
      o2 += this._workCell.getChars().length || we.length;
    }
    if (this._bufferService.cols - n2 > 1) {
      let h2 = this._getJoinedRanges(r2, l2, o2, e2, n2);
      for (let c2 = 0; c2 < h2.length; c2++) i.push(h2[c2]);
    }
    return i;
  }
  _getJoinedRanges(t2, e2, i, r2, n2) {
    let o2 = t2.substring(e2, i), l2 = [];
    try {
      l2 = this._characterJoiners[0].handler(o2);
    } catch (a2) {
      console.error(a2);
    }
    for (let a2 = 1; a2 < this._characterJoiners.length; a2++) try {
      let u2 = this._characterJoiners[a2].handler(o2);
      for (let h2 = 0; h2 < u2.length; h2++) ct._mergeRanges(l2, u2[h2]);
    } catch (u2) {
      console.error(u2);
    }
    return this._stringRangesToCellRanges(l2, r2, n2), l2;
  }
  _stringRangesToCellRanges(t2, e2, i) {
    let r2 = 0, n2 = false, o2 = 0, l2 = t2[r2];
    if (l2) {
      for (let a2 = i; a2 < this._bufferService.cols; a2++) {
        let u2 = e2.getWidth(a2), h2 = e2.getString(a2).length || we.length;
        if (u2 !== 0) {
          if (!n2 && l2[0] <= o2 && (l2[0] = a2, n2 = true), l2[1] <= o2) {
            if (l2[1] = a2, l2 = t2[++r2], !l2) break;
            l2[0] <= o2 ? (l2[0] = a2, n2 = true) : n2 = false;
          }
          o2 += h2;
        }
      }
      l2 && (l2[1] = this._bufferService.cols);
    }
  }
  static _mergeRanges(t2, e2) {
    let i = false;
    for (let r2 = 0; r2 < t2.length; r2++) {
      let n2 = t2[r2];
      if (i) {
        if (e2[1] <= n2[0]) return t2[r2 - 1][1] = e2[1], t2;
        if (e2[1] <= n2[1]) return t2[r2 - 1][1] = Math.max(e2[1], n2[1]), t2.splice(r2, 1), t2;
        t2.splice(r2, 1), r2--;
      } else {
        if (e2[1] <= n2[0]) return t2.splice(r2, 0, e2), t2;
        if (e2[1] <= n2[1]) return n2[0] = Math.min(e2[0], n2[0]), t2;
        e2[0] < n2[1] && (n2[0] = Math.min(e2[0], n2[0]), i = true);
        continue;
      }
    }
    return i ? t2[t2.length - 1][1] = e2[1] : t2.push(e2), t2;
  }
};
ct = M([S(0, F)], ct);
function Oa(s16) {
  return 57508 <= s16 && s16 <= 57558;
}
function Ba(s16) {
  return 9472 <= s16 && s16 <= 9631;
}
function $o(s16) {
  return Oa(s16) || Ba(s16);
}
function Vo() {
  return { css: { canvas: qr(), cell: qr() }, device: { canvas: qr(), cell: qr(), char: { width: 0, height: 0, left: 0, top: 0 } } };
}
function qr() {
  return { width: 0, height: 0 };
}
var Vt = class {
  constructor(t2, e2, i, r2, n2, o2, l2) {
    this._document = t2;
    this._characterJoinerService = e2;
    this._optionsService = i;
    this._coreBrowserService = r2;
    this._coreService = n2;
    this._decorationService = o2;
    this._themeService = l2;
    this._workCell = new q();
    this._columnSelectMode = false;
    this.defaultSpacing = 0;
  }
  handleSelectionChanged(t2, e2, i) {
    this._selectionStart = t2, this._selectionEnd = e2, this._columnSelectMode = i;
  }
  createRow(t2, e2, i, r2, n2, o2, l2, a2, u2, h2, c2) {
    let d = [], _2 = this._characterJoinerService.getJoinedCharacters(e2), p2 = this._themeService.colors, m2 = t2.getNoBgTrimmedLength();
    i && m2 < o2 + 1 && (m2 = o2 + 1);
    let f2, A2 = 0, R2 = "", O2 = 0, I2 = 0, k2 = 0, P2 = 0, oe2 = false, Me2 = 0, Pe2 = false, Ke2 = 0, di2 = 0, V2 = [], Qe2 = h2 !== -1 && c2 !== -1;
    for (let y2 = 0; y2 < m2; y2++) {
      t2.loadCell(y2, this._workCell);
      let T2 = this._workCell.getWidth();
      if (T2 === 0) continue;
      let g = false, w2 = y2 >= di2, E2 = y2, x2 = this._workCell;
      if (_2.length > 0 && y2 === _2[0][0] && w2) {
        let W2 = _2.shift(), An = this._isCellInSelection(W2[0], e2);
        for (O2 = W2[0] + 1; O2 < W2[1]; O2++) w2 &&= An === this._isCellInSelection(O2, e2);
        w2 &&= !i || o2 < W2[0] || o2 >= W2[1], w2 ? (g = true, x2 = new Vr(this._workCell, t2.translateToString(true, W2[0], W2[1]), W2[1] - W2[0]), E2 = W2[1] - 1, T2 = x2.getWidth()) : di2 = W2[1];
      }
      let N2 = this._isCellInSelection(y2, e2), Z2 = i && y2 === o2, te2 = Qe2 && y2 >= h2 && y2 <= c2, Oe2 = false;
      this._decorationService.forEachDecorationAtCell(y2, e2, void 0, (W2) => {
        Oe2 = true;
      });
      let ze = x2.getChars() || we;
      if (ze === " " && (x2.isUnderline() || x2.isOverline()) && (ze = " "), Ke2 = T2 * a2 - u2.get(ze, x2.isBold(), x2.isItalic()), !f2) f2 = this._document.createElement("span");
      else if (A2 && (N2 && Pe2 || !N2 && !Pe2 && x2.bg === I2) && (N2 && Pe2 && p2.selectionForeground || x2.fg === k2) && x2.extended.ext === P2 && te2 === oe2 && Ke2 === Me2 && !Z2 && !g && !Oe2 && w2) {
        x2.isInvisible() ? R2 += we : R2 += ze, A2++;
        continue;
      } else A2 && (f2.textContent = R2), f2 = this._document.createElement("span"), A2 = 0, R2 = "";
      if (I2 = x2.bg, k2 = x2.fg, P2 = x2.extended.ext, oe2 = te2, Me2 = Ke2, Pe2 = N2, g && o2 >= y2 && o2 <= E2 && (o2 = y2), !this._coreService.isCursorHidden && Z2 && this._coreService.isCursorInitialized) {
        if (V2.push("xterm-cursor"), this._coreBrowserService.isFocused) l2 && V2.push("xterm-cursor-blink"), V2.push(r2 === "bar" ? "xterm-cursor-bar" : r2 === "underline" ? "xterm-cursor-underline" : "xterm-cursor-block");
        else if (n2) switch (n2) {
          case "outline":
            V2.push("xterm-cursor-outline");
            break;
          case "block":
            V2.push("xterm-cursor-block");
            break;
          case "bar":
            V2.push("xterm-cursor-bar");
            break;
          case "underline":
            V2.push("xterm-cursor-underline");
            break;
        }
      }
      if (x2.isBold() && V2.push("xterm-bold"), x2.isItalic() && V2.push("xterm-italic"), x2.isDim() && V2.push("xterm-dim"), x2.isInvisible() ? R2 = we : R2 = x2.getChars() || we, x2.isUnderline() && (V2.push(`xterm-underline-${x2.extended.underlineStyle}`), R2 === " " && (R2 = " "), !x2.isUnderlineColorDefault())) if (x2.isUnderlineColorRGB()) f2.style.textDecorationColor = `rgb(${De.toColorRGB(x2.getUnderlineColor()).join(",")})`;
      else {
        let W2 = x2.getUnderlineColor();
        this._optionsService.rawOptions.drawBoldTextInBrightColors && x2.isBold() && W2 < 8 && (W2 += 8), f2.style.textDecorationColor = p2.ansi[W2].css;
      }
      x2.isOverline() && (V2.push("xterm-overline"), R2 === " " && (R2 = " ")), x2.isStrikethrough() && V2.push("xterm-strikethrough"), te2 && (f2.style.textDecoration = "underline");
      let le2 = x2.getFgColor(), et = x2.getFgColorMode(), me2 = x2.getBgColor(), ht = x2.getBgColorMode(), fi2 = !!x2.isInverse();
      if (fi2) {
        let W2 = le2;
        le2 = me2, me2 = W2;
        let An = et;
        et = ht, ht = An;
      }
      let tt, Qi2, pi2 = false;
      this._decorationService.forEachDecorationAtCell(y2, e2, void 0, (W2) => {
        W2.options.layer !== "top" && pi2 || (W2.backgroundColorRGB && (ht = 50331648, me2 = W2.backgroundColorRGB.rgba >> 8 & 16777215, tt = W2.backgroundColorRGB), W2.foregroundColorRGB && (et = 50331648, le2 = W2.foregroundColorRGB.rgba >> 8 & 16777215, Qi2 = W2.foregroundColorRGB), pi2 = W2.options.layer === "top");
      }), !pi2 && N2 && (tt = this._coreBrowserService.isFocused ? p2.selectionBackgroundOpaque : p2.selectionInactiveBackgroundOpaque, me2 = tt.rgba >> 8 & 16777215, ht = 50331648, pi2 = true, p2.selectionForeground && (et = 50331648, le2 = p2.selectionForeground.rgba >> 8 & 16777215, Qi2 = p2.selectionForeground)), pi2 && V2.push("xterm-decoration-top");
      let it;
      switch (ht) {
        case 16777216:
        case 33554432:
          it = p2.ansi[me2], V2.push(`xterm-bg-${me2}`);
          break;
        case 50331648:
          it = j.toColor(me2 >> 16, me2 >> 8 & 255, me2 & 255), this._addStyle(f2, `background-color:#${qo((me2 >>> 0).toString(16), "0", 6)}`);
          break;
        case 0:
        default:
          fi2 ? (it = p2.foreground, V2.push(`xterm-bg-${257}`)) : it = p2.background;
      }
      switch (tt || x2.isDim() && (tt = U.multiplyOpacity(it, 0.5)), et) {
        case 16777216:
        case 33554432:
          x2.isBold() && le2 < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && (le2 += 8), this._applyMinimumContrast(f2, it, p2.ansi[le2], x2, tt, void 0) || V2.push(`xterm-fg-${le2}`);
          break;
        case 50331648:
          let W2 = j.toColor(le2 >> 16 & 255, le2 >> 8 & 255, le2 & 255);
          this._applyMinimumContrast(f2, it, W2, x2, tt, Qi2) || this._addStyle(f2, `color:#${qo(le2.toString(16), "0", 6)}`);
          break;
        case 0:
        default:
          this._applyMinimumContrast(f2, it, p2.foreground, x2, tt, Qi2) || fi2 && V2.push(`xterm-fg-${257}`);
      }
      V2.length && (f2.className = V2.join(" "), V2.length = 0), !Z2 && !g && !Oe2 && w2 ? A2++ : f2.textContent = R2, Ke2 !== this.defaultSpacing && (f2.style.letterSpacing = `${Ke2}px`), d.push(f2), y2 = E2;
    }
    return f2 && A2 && (f2.textContent = R2), d;
  }
  _applyMinimumContrast(t2, e2, i, r2, n2, o2) {
    if (this._optionsService.rawOptions.minimumContrastRatio === 1 || $o(r2.getCode())) return false;
    let l2 = this._getContrastCache(r2), a2;
    if (!n2 && !o2 && (a2 = l2.getColor(e2.rgba, i.rgba)), a2 === void 0) {
      let u2 = this._optionsService.rawOptions.minimumContrastRatio / (r2.isDim() ? 2 : 1);
      a2 = U.ensureContrastRatio(n2 || e2, o2 || i, u2), l2.setColor((n2 || e2).rgba, (o2 || i).rgba, a2 ?? null);
    }
    return a2 ? (this._addStyle(t2, `color:${a2.css}`), true) : false;
  }
  _getContrastCache(t2) {
    return t2.isDim() ? this._themeService.colors.halfContrastCache : this._themeService.colors.contrastCache;
  }
  _addStyle(t2, e2) {
    t2.setAttribute("style", `${t2.getAttribute("style") || ""}${e2};`);
  }
  _isCellInSelection(t2, e2) {
    let i = this._selectionStart, r2 = this._selectionEnd;
    return !i || !r2 ? false : this._columnSelectMode ? i[0] <= r2[0] ? t2 >= i[0] && e2 >= i[1] && t2 < r2[0] && e2 <= r2[1] : t2 < i[0] && e2 >= i[1] && t2 >= r2[0] && e2 <= r2[1] : e2 > i[1] && e2 < r2[1] || i[1] === r2[1] && e2 === i[1] && t2 >= i[0] && t2 < r2[0] || i[1] < r2[1] && e2 === r2[1] && t2 < r2[0] || i[1] < r2[1] && e2 === i[1] && t2 >= i[0];
  }
};
Vt = M([S(1, or), S(2, H), S(3, ae), S(4, ge), S(5, Be), S(6, Re)], Vt);
function qo(s16, t2, e2) {
  for (; s16.length < e2; ) s16 = t2 + s16;
  return s16;
}
var Yr = class {
  constructor(t2, e2) {
    this._flat = new Float32Array(256);
    this._font = "";
    this._fontSize = 0;
    this._weight = "normal";
    this._weightBold = "bold";
    this._measureElements = [];
    this._container = t2.createElement("div"), this._container.classList.add("xterm-width-cache-measure-container"), this._container.setAttribute("aria-hidden", "true"), this._container.style.whiteSpace = "pre", this._container.style.fontKerning = "none";
    let i = t2.createElement("span");
    i.classList.add("xterm-char-measure-element");
    let r2 = t2.createElement("span");
    r2.classList.add("xterm-char-measure-element"), r2.style.fontWeight = "bold";
    let n2 = t2.createElement("span");
    n2.classList.add("xterm-char-measure-element"), n2.style.fontStyle = "italic";
    let o2 = t2.createElement("span");
    o2.classList.add("xterm-char-measure-element"), o2.style.fontWeight = "bold", o2.style.fontStyle = "italic", this._measureElements = [i, r2, n2, o2], this._container.appendChild(i), this._container.appendChild(r2), this._container.appendChild(n2), this._container.appendChild(o2), e2.appendChild(this._container), this.clear();
  }
  dispose() {
    this._container.remove(), this._measureElements.length = 0, this._holey = void 0;
  }
  clear() {
    this._flat.fill(-9999), this._holey = /* @__PURE__ */ new Map();
  }
  setFont(t2, e2, i, r2) {
    t2 === this._font && e2 === this._fontSize && i === this._weight && r2 === this._weightBold || (this._font = t2, this._fontSize = e2, this._weight = i, this._weightBold = r2, this._container.style.fontFamily = this._font, this._container.style.fontSize = `${this._fontSize}px`, this._measureElements[0].style.fontWeight = `${i}`, this._measureElements[1].style.fontWeight = `${r2}`, this._measureElements[2].style.fontWeight = `${i}`, this._measureElements[3].style.fontWeight = `${r2}`, this.clear());
  }
  get(t2, e2, i) {
    let r2 = 0;
    if (!e2 && !i && t2.length === 1 && (r2 = t2.charCodeAt(0)) < 256) {
      if (this._flat[r2] !== -9999) return this._flat[r2];
      let l2 = this._measure(t2, 0);
      return l2 > 0 && (this._flat[r2] = l2), l2;
    }
    let n2 = t2;
    e2 && (n2 += "B"), i && (n2 += "I");
    let o2 = this._holey.get(n2);
    if (o2 === void 0) {
      let l2 = 0;
      e2 && (l2 |= 1), i && (l2 |= 2), o2 = this._measure(t2, l2), o2 > 0 && this._holey.set(n2, o2);
    }
    return o2;
  }
  _measure(t2, e2) {
    let i = this._measureElements[e2];
    return i.textContent = t2.repeat(32), i.offsetWidth / 32;
  }
};
var ms = class {
  constructor() {
    this.clear();
  }
  clear() {
    this.hasSelection = false, this.columnSelectMode = false, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
  }
  update(t2, e2, i, r2 = false) {
    if (this.selectionStart = e2, this.selectionEnd = i, !e2 || !i || e2[0] === i[0] && e2[1] === i[1]) {
      this.clear();
      return;
    }
    let n2 = t2.buffers.active.ydisp, o2 = e2[1] - n2, l2 = i[1] - n2, a2 = Math.max(o2, 0), u2 = Math.min(l2, t2.rows - 1);
    if (a2 >= t2.rows || u2 < 0) {
      this.clear();
      return;
    }
    this.hasSelection = true, this.columnSelectMode = r2, this.viewportStartRow = o2, this.viewportEndRow = l2, this.viewportCappedStartRow = a2, this.viewportCappedEndRow = u2, this.startCol = e2[0], this.endCol = i[0];
  }
  isCellSelected(t2, e2, i) {
    return this.hasSelection ? (i -= t2.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? e2 >= this.startCol && i >= this.viewportCappedStartRow && e2 < this.endCol && i <= this.viewportCappedEndRow : e2 < this.startCol && i >= this.viewportCappedStartRow && e2 >= this.endCol && i <= this.viewportCappedEndRow : i > this.viewportStartRow && i < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && i === this.viewportStartRow && e2 >= this.startCol && e2 < this.endCol || this.viewportStartRow < this.viewportEndRow && i === this.viewportEndRow && e2 < this.endCol || this.viewportStartRow < this.viewportEndRow && i === this.viewportStartRow && e2 >= this.startCol) : false;
  }
};
function Yo() {
  return new ms();
}
var _s = "xterm-dom-renderer-owner-", Le = "xterm-rows", jr = "xterm-fg-", jo = "xterm-bg-", ki = "xterm-focus", Xr = "xterm-selection", Na = 1, Yt = class extends D {
  constructor(e2, i, r2, n2, o2, l2, a2, u2, h2, c2, d, _2, p2, m2) {
    super();
    this._terminal = e2;
    this._document = i;
    this._element = r2;
    this._screenElement = n2;
    this._viewportElement = o2;
    this._helperContainer = l2;
    this._linkifier2 = a2;
    this._charSizeService = h2;
    this._optionsService = c2;
    this._bufferService = d;
    this._coreService = _2;
    this._coreBrowserService = p2;
    this._themeService = m2;
    this._terminalClass = Na++;
    this._rowElements = [];
    this._selectionRenderModel = Yo();
    this.onRequestRedraw = this._register(new v()).event;
    this._rowContainer = this._document.createElement("div"), this._rowContainer.classList.add(Le), this._rowContainer.style.lineHeight = "normal", this._rowContainer.setAttribute("aria-hidden", "true"), this._refreshRowElements(this._bufferService.cols, this._bufferService.rows), this._selectionContainer = this._document.createElement("div"), this._selectionContainer.classList.add(Xr), this._selectionContainer.setAttribute("aria-hidden", "true"), this.dimensions = Vo(), this._updateDimensions(), this._register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this._register(this._themeService.onChangeColors((f2) => this._injectCss(f2))), this._injectCss(this._themeService.colors), this._rowFactory = u2.createInstance(Vt, document), this._element.classList.add(_s + this._terminalClass), this._screenElement.appendChild(this._rowContainer), this._screenElement.appendChild(this._selectionContainer), this._register(this._linkifier2.onShowLinkUnderline((f2) => this._handleLinkHover(f2))), this._register(this._linkifier2.onHideLinkUnderline((f2) => this._handleLinkLeave(f2))), this._register(C(() => {
      this._element.classList.remove(_s + this._terminalClass), this._rowContainer.remove(), this._selectionContainer.remove(), this._widthCache.dispose(), this._themeStyleElement.remove(), this._dimensionsStyleElement.remove();
    })), this._widthCache = new Yr(this._document, this._helperContainer), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
  }
  _updateDimensions() {
    let e2 = this._coreBrowserService.dpr;
    this.dimensions.device.char.width = this._charSizeService.width * e2, this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * e2), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.left = 0, this.dimensions.device.char.top = 0, this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols, this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows, this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / e2), this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / e2), this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols, this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;
    for (let r2 of this._rowElements) r2.style.width = `${this.dimensions.css.canvas.width}px`, r2.style.height = `${this.dimensions.css.cell.height}px`, r2.style.lineHeight = `${this.dimensions.css.cell.height}px`, r2.style.overflow = "hidden";
    this._dimensionsStyleElement || (this._dimensionsStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
    let i = `${this._terminalSelector} .${Le} span { display: inline-block; height: 100%; vertical-align: top;}`;
    this._dimensionsStyleElement.textContent = i, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
  }
  _injectCss(e2) {
    this._themeStyleElement || (this._themeStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
    let i = `${this._terminalSelector} .${Le} { pointer-events: none; color: ${e2.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`;
    i += `${this._terminalSelector} .${Le} .xterm-dim { color: ${U.multiplyOpacity(e2.foreground, 0.5).css};}`, i += `${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}`;
    let r2 = `blink_underline_${this._terminalClass}`, n2 = `blink_bar_${this._terminalClass}`, o2 = `blink_block_${this._terminalClass}`;
    i += `@keyframes ${r2} { 50% {  border-bottom-style: hidden; }}`, i += `@keyframes ${n2} { 50% {  box-shadow: none; }}`, i += `@keyframes ${o2} { 0% {  background-color: ${e2.cursor.css};  color: ${e2.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${e2.cursor.css}; }}`, i += `${this._terminalSelector} .${Le}.${ki} .xterm-cursor.xterm-cursor-blink.xterm-cursor-underline { animation: ${r2} 1s step-end infinite;}${this._terminalSelector} .${Le}.${ki} .xterm-cursor.xterm-cursor-blink.xterm-cursor-bar { animation: ${n2} 1s step-end infinite;}${this._terminalSelector} .${Le}.${ki} .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: ${o2} 1s step-end infinite;}${this._terminalSelector} .${Le} .xterm-cursor.xterm-cursor-block { background-color: ${e2.cursor.css}; color: ${e2.cursorAccent.css};}${this._terminalSelector} .${Le} .xterm-cursor.xterm-cursor-block:not(.xterm-cursor-blink) { background-color: ${e2.cursor.css} !important; color: ${e2.cursorAccent.css} !important;}${this._terminalSelector} .${Le} .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${e2.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .${Le} .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${e2.cursor.css} inset;}${this._terminalSelector} .${Le} .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${e2.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}`, i += `${this._terminalSelector} .${Xr} { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .${Xr} div { position: absolute; background-color: ${e2.selectionBackgroundOpaque.css};}${this._terminalSelector} .${Xr} div { position: absolute; background-color: ${e2.selectionInactiveBackgroundOpaque.css};}`;
    for (let [l2, a2] of e2.ansi.entries()) i += `${this._terminalSelector} .${jr}${l2} { color: ${a2.css}; }${this._terminalSelector} .${jr}${l2}.xterm-dim { color: ${U.multiplyOpacity(a2, 0.5).css}; }${this._terminalSelector} .${jo}${l2} { background-color: ${a2.css}; }`;
    i += `${this._terminalSelector} .${jr}${257} { color: ${U.opaque(e2.background).css}; }${this._terminalSelector} .${jr}${257}.xterm-dim { color: ${U.multiplyOpacity(U.opaque(e2.background), 0.5).css}; }${this._terminalSelector} .${jo}${257} { background-color: ${e2.foreground.css}; }`, this._themeStyleElement.textContent = i;
  }
  _setDefaultSpacing() {
    let e2 = this.dimensions.css.cell.width - this._widthCache.get("W", false, false);
    this._rowContainer.style.letterSpacing = `${e2}px`, this._rowFactory.defaultSpacing = e2;
  }
  handleDevicePixelRatioChange() {
    this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
  }
  _refreshRowElements(e2, i) {
    for (let r2 = this._rowElements.length; r2 <= i; r2++) {
      let n2 = this._document.createElement("div");
      this._rowContainer.appendChild(n2), this._rowElements.push(n2);
    }
    for (; this._rowElements.length > i; ) this._rowContainer.removeChild(this._rowElements.pop());
  }
  handleResize(e2, i) {
    this._refreshRowElements(e2, i), this._updateDimensions(), this.handleSelectionChanged(this._selectionRenderModel.selectionStart, this._selectionRenderModel.selectionEnd, this._selectionRenderModel.columnSelectMode);
  }
  handleCharSizeChanged() {
    this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
  }
  handleBlur() {
    this._rowContainer.classList.remove(ki), this.renderRows(0, this._bufferService.rows - 1);
  }
  handleFocus() {
    this._rowContainer.classList.add(ki), this.renderRows(this._bufferService.buffer.y, this._bufferService.buffer.y);
  }
  handleSelectionChanged(e2, i, r2) {
    if (this._selectionContainer.replaceChildren(), this._rowFactory.handleSelectionChanged(e2, i, r2), this.renderRows(0, this._bufferService.rows - 1), !e2 || !i || (this._selectionRenderModel.update(this._terminal, e2, i, r2), !this._selectionRenderModel.hasSelection)) return;
    let n2 = this._selectionRenderModel.viewportStartRow, o2 = this._selectionRenderModel.viewportEndRow, l2 = this._selectionRenderModel.viewportCappedStartRow, a2 = this._selectionRenderModel.viewportCappedEndRow, u2 = this._document.createDocumentFragment();
    if (r2) {
      let h2 = e2[0] > i[0];
      u2.appendChild(this._createSelectionElement(l2, h2 ? i[0] : e2[0], h2 ? e2[0] : i[0], a2 - l2 + 1));
    } else {
      let h2 = n2 === l2 ? e2[0] : 0, c2 = l2 === o2 ? i[0] : this._bufferService.cols;
      u2.appendChild(this._createSelectionElement(l2, h2, c2));
      let d = a2 - l2 - 1;
      if (u2.appendChild(this._createSelectionElement(l2 + 1, 0, this._bufferService.cols, d)), l2 !== a2) {
        let _2 = o2 === a2 ? i[0] : this._bufferService.cols;
        u2.appendChild(this._createSelectionElement(a2, 0, _2));
      }
    }
    this._selectionContainer.appendChild(u2);
  }
  _createSelectionElement(e2, i, r2, n2 = 1) {
    let o2 = this._document.createElement("div"), l2 = i * this.dimensions.css.cell.width, a2 = this.dimensions.css.cell.width * (r2 - i);
    return l2 + a2 > this.dimensions.css.canvas.width && (a2 = this.dimensions.css.canvas.width - l2), o2.style.height = `${n2 * this.dimensions.css.cell.height}px`, o2.style.top = `${e2 * this.dimensions.css.cell.height}px`, o2.style.left = `${l2}px`, o2.style.width = `${a2}px`, o2;
  }
  handleCursorMove() {
  }
  _handleOptionsChanged() {
    this._updateDimensions(), this._injectCss(this._themeService.colors), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
  }
  clear() {
    for (let e2 of this._rowElements) e2.replaceChildren();
  }
  renderRows(e2, i) {
    let r2 = this._bufferService.buffer, n2 = r2.ybase + r2.y, o2 = Math.min(r2.x, this._bufferService.cols - 1), l2 = this._coreService.decPrivateModes.cursorBlink ?? this._optionsService.rawOptions.cursorBlink, a2 = this._coreService.decPrivateModes.cursorStyle ?? this._optionsService.rawOptions.cursorStyle, u2 = this._optionsService.rawOptions.cursorInactiveStyle;
    for (let h2 = e2; h2 <= i; h2++) {
      let c2 = h2 + r2.ydisp, d = this._rowElements[h2], _2 = r2.lines.get(c2);
      if (!d || !_2) break;
      d.replaceChildren(...this._rowFactory.createRow(_2, c2, c2 === n2, a2, u2, o2, l2, this.dimensions.css.cell.width, this._widthCache, -1, -1));
    }
  }
  get _terminalSelector() {
    return `.${_s}${this._terminalClass}`;
  }
  _handleLinkHover(e2) {
    this._setCellUnderline(e2.x1, e2.x2, e2.y1, e2.y2, e2.cols, true);
  }
  _handleLinkLeave(e2) {
    this._setCellUnderline(e2.x1, e2.x2, e2.y1, e2.y2, e2.cols, false);
  }
  _setCellUnderline(e2, i, r2, n2, o2, l2) {
    r2 < 0 && (e2 = 0), n2 < 0 && (i = 0);
    let a2 = this._bufferService.rows - 1;
    r2 = Math.max(Math.min(r2, a2), 0), n2 = Math.max(Math.min(n2, a2), 0), o2 = Math.min(o2, this._bufferService.cols);
    let u2 = this._bufferService.buffer, h2 = u2.ybase + u2.y, c2 = Math.min(u2.x, o2 - 1), d = this._optionsService.rawOptions.cursorBlink, _2 = this._optionsService.rawOptions.cursorStyle, p2 = this._optionsService.rawOptions.cursorInactiveStyle;
    for (let m2 = r2; m2 <= n2; ++m2) {
      let f2 = m2 + u2.ydisp, A2 = this._rowElements[m2], R2 = u2.lines.get(f2);
      if (!A2 || !R2) break;
      A2.replaceChildren(...this._rowFactory.createRow(R2, f2, f2 === h2, _2, p2, c2, d, this.dimensions.css.cell.width, this._widthCache, l2 ? m2 === r2 ? e2 : 0 : -1, l2 ? (m2 === n2 ? i : o2) - 1 : -1));
    }
  }
};
Yt = M([S(7, xt), S(8, nt), S(9, H), S(10, F), S(11, ge), S(12, ae), S(13, Re)], Yt);
var jt = class extends D {
  constructor(e2, i, r2) {
    super();
    this._optionsService = r2;
    this.width = 0;
    this.height = 0;
    this._onCharSizeChange = this._register(new v());
    this.onCharSizeChange = this._onCharSizeChange.event;
    try {
      this._measureStrategy = this._register(new vs(this._optionsService));
    } catch {
      this._measureStrategy = this._register(new bs(e2, i, this._optionsService));
    }
    this._register(this._optionsService.onMultipleOptionChange(["fontFamily", "fontSize"], () => this.measure()));
  }
  get hasValidSize() {
    return this.width > 0 && this.height > 0;
  }
  measure() {
    let e2 = this._measureStrategy.measure();
    (e2.width !== this.width || e2.height !== this.height) && (this.width = e2.width, this.height = e2.height, this._onCharSizeChange.fire());
  }
};
jt = M([S(2, H)], jt);
var Zr = class extends D {
  constructor() {
    super(...arguments);
    this._result = { width: 0, height: 0 };
  }
  _validateAndSet(e2, i) {
    e2 !== void 0 && e2 > 0 && i !== void 0 && i > 0 && (this._result.width = e2, this._result.height = i);
  }
}, bs = class extends Zr {
  constructor(e2, i, r2) {
    super();
    this._document = e2;
    this._parentElement = i;
    this._optionsService = r2;
    this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W".repeat(32), this._measureElement.setAttribute("aria-hidden", "true"), this._measureElement.style.whiteSpace = "pre", this._measureElement.style.fontKerning = "none", this._parentElement.appendChild(this._measureElement);
  }
  measure() {
    return this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`, this._validateAndSet(Number(this._measureElement.offsetWidth) / 32, Number(this._measureElement.offsetHeight)), this._result;
  }
}, vs = class extends Zr {
  constructor(e2) {
    super();
    this._optionsService = e2;
    this._canvas = new OffscreenCanvas(100, 100), this._ctx = this._canvas.getContext("2d");
    let i = this._ctx.measureText("W");
    if (!("width" in i && "fontBoundingBoxAscent" in i && "fontBoundingBoxDescent" in i)) throw new Error("Required font metrics not supported");
  }
  measure() {
    this._ctx.font = `${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;
    let e2 = this._ctx.measureText("W");
    return this._validateAndSet(e2.width, e2.fontBoundingBoxAscent + e2.fontBoundingBoxDescent), this._result;
  }
};
var Jr = class extends D {
  constructor(e2, i, r2) {
    super();
    this._textarea = e2;
    this._window = i;
    this.mainDocument = r2;
    this._isFocused = false;
    this._cachedIsFocused = void 0;
    this._screenDprMonitor = this._register(new gs(this._window));
    this._onDprChange = this._register(new v());
    this.onDprChange = this._onDprChange.event;
    this._onWindowChange = this._register(new v());
    this.onWindowChange = this._onWindowChange.event;
    this._register(this.onWindowChange((n2) => this._screenDprMonitor.setWindow(n2))), this._register($.forward(this._screenDprMonitor.onDprChange, this._onDprChange)), this._register(L(this._textarea, "focus", () => this._isFocused = true)), this._register(L(this._textarea, "blur", () => this._isFocused = false));
  }
  get window() {
    return this._window;
  }
  set window(e2) {
    this._window !== e2 && (this._window = e2, this._onWindowChange.fire(this._window));
  }
  get dpr() {
    return this.window.devicePixelRatio;
  }
  get isFocused() {
    return this._cachedIsFocused === void 0 && (this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus(), queueMicrotask(() => this._cachedIsFocused = void 0)), this._cachedIsFocused;
  }
}, gs = class extends D {
  constructor(e2) {
    super();
    this._parentWindow = e2;
    this._windowResizeListener = this._register(new ye());
    this._onDprChange = this._register(new v());
    this.onDprChange = this._onDprChange.event;
    this._outerListener = () => this._setDprAndFireIfDiffers(), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._updateDpr(), this._setWindowResizeListener(), this._register(C(() => this.clearListener()));
  }
  setWindow(e2) {
    this._parentWindow = e2, this._setWindowResizeListener(), this._setDprAndFireIfDiffers();
  }
  _setWindowResizeListener() {
    this._windowResizeListener.value = L(this._parentWindow, "resize", () => this._setDprAndFireIfDiffers());
  }
  _setDprAndFireIfDiffers() {
    this._parentWindow.devicePixelRatio !== this._currentDevicePixelRatio && this._onDprChange.fire(this._parentWindow.devicePixelRatio), this._updateDpr();
  }
  _updateDpr() {
    this._outerListener && (this._resolutionMediaMatchList?.removeListener(this._outerListener), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`), this._resolutionMediaMatchList.addListener(this._outerListener));
  }
  clearListener() {
    !this._resolutionMediaMatchList || !this._outerListener || (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._outerListener = void 0);
  }
};
var Qr = class extends D {
  constructor() {
    super();
    this.linkProviders = [];
    this._register(C(() => this.linkProviders.length = 0));
  }
  registerLinkProvider(e2) {
    return this.linkProviders.push(e2), { dispose: () => {
      let i = this.linkProviders.indexOf(e2);
      i !== -1 && this.linkProviders.splice(i, 1);
    } };
  }
};
function Ci(s16, t2, e2) {
  let i = e2.getBoundingClientRect(), r2 = s16.getComputedStyle(e2), n2 = parseInt(r2.getPropertyValue("padding-left")), o2 = parseInt(r2.getPropertyValue("padding-top"));
  return [t2.clientX - i.left - n2, t2.clientY - i.top - o2];
}
function Xo(s16, t2, e2, i, r2, n2, o2, l2, a2) {
  if (!n2) return;
  let u2 = Ci(s16, t2, e2);
  if (u2) return u2[0] = Math.ceil((u2[0] + (a2 ? o2 / 2 : 0)) / o2), u2[1] = Math.ceil(u2[1] / l2), u2[0] = Math.min(Math.max(u2[0], 1), i + (a2 ? 1 : 0)), u2[1] = Math.min(Math.max(u2[1], 1), r2), u2;
}
var Xt = class {
  constructor(t2, e2) {
    this._renderService = t2;
    this._charSizeService = e2;
  }
  getCoords(t2, e2, i, r2, n2) {
    return Xo(window, t2, e2, i, r2, this._charSizeService.hasValidSize, this._renderService.dimensions.css.cell.width, this._renderService.dimensions.css.cell.height, n2);
  }
  getMouseReportCoords(t2, e2) {
    let i = Ci(window, t2, e2);
    if (this._charSizeService.hasValidSize) return i[0] = Math.min(Math.max(i[0], 0), this._renderService.dimensions.css.canvas.width - 1), i[1] = Math.min(Math.max(i[1], 0), this._renderService.dimensions.css.canvas.height - 1), { col: Math.floor(i[0] / this._renderService.dimensions.css.cell.width), row: Math.floor(i[1] / this._renderService.dimensions.css.cell.height), x: Math.floor(i[0]), y: Math.floor(i[1]) };
  }
};
Xt = M([S(0, ce), S(1, nt)], Xt);
var en = class {
  constructor(t2, e2) {
    this._renderCallback = t2;
    this._coreBrowserService = e2;
    this._refreshCallbacks = [];
  }
  dispose() {
    this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
  }
  addRefreshCallback(t2) {
    return this._refreshCallbacks.push(t2), this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh())), this._animationFrame;
  }
  refresh(t2, e2, i) {
    this._rowCount = i, t2 = t2 !== void 0 ? t2 : 0, e2 = e2 !== void 0 ? e2 : this._rowCount - 1, this._rowStart = this._rowStart !== void 0 ? Math.min(this._rowStart, t2) : t2, this._rowEnd = this._rowEnd !== void 0 ? Math.max(this._rowEnd, e2) : e2, !this._animationFrame && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
  }
  _innerRefresh() {
    if (this._animationFrame = void 0, this._rowStart === void 0 || this._rowEnd === void 0 || this._rowCount === void 0) {
      this._runRefreshCallbacks();
      return;
    }
    let t2 = Math.max(this._rowStart, 0), e2 = Math.min(this._rowEnd, this._rowCount - 1);
    this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(t2, e2), this._runRefreshCallbacks();
  }
  _runRefreshCallbacks() {
    for (let t2 of this._refreshCallbacks) t2(0);
    this._refreshCallbacks = [];
  }
};
var tn = {};
Ll(tn, { getSafariVersion: () => Ha, isChromeOS: () => Ts, isFirefox: () => Ss, isIpad: () => Wa, isIphone: () => Ua, isLegacyEdge: () => Fa, isLinux: () => Bi, isMac: () => Zt, isNode: () => Mi, isSafari: () => Zo, isWindows: () => Es });
var Mi = typeof process < "u" && "title" in process, Pi = Mi ? "node" : navigator.userAgent, Oi = Mi ? "node" : navigator.platform, Ss = Pi.includes("Firefox"), Fa = Pi.includes("Edge"), Zo = /^((?!chrome|android).)*safari/i.test(Pi);
function Ha() {
  if (!Zo) return 0;
  let s16 = Pi.match(/Version\/(\d+)/);
  return s16 === null || s16.length < 2 ? 0 : parseInt(s16[1]);
}
var Zt = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(Oi), Wa = Oi === "iPad", Ua = Oi === "iPhone", Es = ["Windows", "Win16", "Win32", "WinCE"].includes(Oi), Bi = Oi.indexOf("Linux") >= 0, Ts = /\bCrOS\b/.test(Pi);
var rn = class {
  constructor() {
    this._tasks = [];
    this._i = 0;
  }
  enqueue(t2) {
    this._tasks.push(t2), this._start();
  }
  flush() {
    for (; this._i < this._tasks.length; ) this._tasks[this._i]() || this._i++;
    this.clear();
  }
  clear() {
    this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
  }
  _start() {
    this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
  }
  _process(t2) {
    this._idleCallback = void 0;
    let e2 = 0, i = 0, r2 = t2.timeRemaining(), n2 = 0;
    for (; this._i < this._tasks.length; ) {
      if (e2 = performance.now(), this._tasks[this._i]() || this._i++, e2 = Math.max(1, performance.now() - e2), i = Math.max(e2, i), n2 = t2.timeRemaining(), i * 1.5 > n2) {
        r2 - e2 < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(r2 - e2))}ms`), this._start();
        return;
      }
      r2 = n2;
    }
    this.clear();
  }
}, Is = class extends rn {
  _requestCallback(t2) {
    return setTimeout(() => t2(this._createDeadline(16)));
  }
  _cancelCallback(t2) {
    clearTimeout(t2);
  }
  _createDeadline(t2) {
    let e2 = performance.now() + t2;
    return { timeRemaining: () => Math.max(0, e2 - performance.now()) };
  }
}, ys = class extends rn {
  _requestCallback(t2) {
    return requestIdleCallback(t2);
  }
  _cancelCallback(t2) {
    cancelIdleCallback(t2);
  }
}, Jt = !Mi && "requestIdleCallback" in window ? ys : Is, nn = class {
  constructor() {
    this._queue = new Jt();
  }
  set(t2) {
    this._queue.clear(), this._queue.enqueue(t2);
  }
  flush() {
    this._queue.flush();
  }
};
var Qt = class extends D {
  constructor(e2, i, r2, n2, o2, l2, a2, u2, h2) {
    super();
    this._rowCount = e2;
    this._optionsService = r2;
    this._charSizeService = n2;
    this._coreService = o2;
    this._coreBrowserService = u2;
    this._renderer = this._register(new ye());
    this._pausedResizeTask = new nn();
    this._observerDisposable = this._register(new ye());
    this._isPaused = false;
    this._needsFullRefresh = false;
    this._isNextRenderRedrawOnly = true;
    this._needsSelectionRefresh = false;
    this._canvasWidth = 0;
    this._canvasHeight = 0;
    this._selectionState = { start: void 0, end: void 0, columnSelectMode: false };
    this._onDimensionsChange = this._register(new v());
    this.onDimensionsChange = this._onDimensionsChange.event;
    this._onRenderedViewportChange = this._register(new v());
    this.onRenderedViewportChange = this._onRenderedViewportChange.event;
    this._onRender = this._register(new v());
    this.onRender = this._onRender.event;
    this._onRefreshRequest = this._register(new v());
    this.onRefreshRequest = this._onRefreshRequest.event;
    this._renderDebouncer = new en((c2, d) => this._renderRows(c2, d), this._coreBrowserService), this._register(this._renderDebouncer), this._syncOutputHandler = new xs(this._coreBrowserService, this._coreService, () => this._fullRefresh()), this._register(C(() => this._syncOutputHandler.dispose())), this._register(this._coreBrowserService.onDprChange(() => this.handleDevicePixelRatioChange())), this._register(a2.onResize(() => this._fullRefresh())), this._register(a2.buffers.onBufferActivate(() => this._renderer.value?.clear())), this._register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this._register(this._charSizeService.onCharSizeChange(() => this.handleCharSizeChanged())), this._register(l2.onDecorationRegistered(() => this._fullRefresh())), this._register(l2.onDecorationRemoved(() => this._fullRefresh())), this._register(this._optionsService.onMultipleOptionChange(["customGlyphs", "drawBoldTextInBrightColors", "letterSpacing", "lineHeight", "fontFamily", "fontSize", "fontWeight", "fontWeightBold", "minimumContrastRatio", "rescaleOverlappingGlyphs"], () => {
      this.clear(), this.handleResize(a2.cols, a2.rows), this._fullRefresh();
    })), this._register(this._optionsService.onMultipleOptionChange(["cursorBlink", "cursorStyle"], () => this.refreshRows(a2.buffer.y, a2.buffer.y, true))), this._register(h2.onChangeColors(() => this._fullRefresh())), this._registerIntersectionObserver(this._coreBrowserService.window, i), this._register(this._coreBrowserService.onWindowChange((c2) => this._registerIntersectionObserver(c2, i)));
  }
  get dimensions() {
    return this._renderer.value.dimensions;
  }
  _registerIntersectionObserver(e2, i) {
    if ("IntersectionObserver" in e2) {
      let r2 = new e2.IntersectionObserver((n2) => this._handleIntersectionChange(n2[n2.length - 1]), { threshold: 0 });
      r2.observe(i), this._observerDisposable.value = C(() => r2.disconnect());
    }
  }
  _handleIntersectionChange(e2) {
    this._isPaused = e2.isIntersecting === void 0 ? e2.intersectionRatio === 0 : !e2.isIntersecting, !this._isPaused && !this._charSizeService.hasValidSize && this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this._pausedResizeTask.flush(), this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = false);
  }
  refreshRows(e2, i, r2 = false) {
    if (this._isPaused) {
      this._needsFullRefresh = true;
      return;
    }
    if (this._coreService.decPrivateModes.synchronizedOutput) {
      this._syncOutputHandler.bufferRows(e2, i);
      return;
    }
    let n2 = this._syncOutputHandler.flush();
    n2 && (e2 = Math.min(e2, n2.start), i = Math.max(i, n2.end)), r2 || (this._isNextRenderRedrawOnly = false), this._renderDebouncer.refresh(e2, i, this._rowCount);
  }
  _renderRows(e2, i) {
    if (this._renderer.value) {
      if (this._coreService.decPrivateModes.synchronizedOutput) {
        this._syncOutputHandler.bufferRows(e2, i);
        return;
      }
      e2 = Math.min(e2, this._rowCount - 1), i = Math.min(i, this._rowCount - 1), this._renderer.value.renderRows(e2, i), this._needsSelectionRefresh && (this._renderer.value.handleSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = false), this._isNextRenderRedrawOnly || this._onRenderedViewportChange.fire({ start: e2, end: i }), this._onRender.fire({ start: e2, end: i }), this._isNextRenderRedrawOnly = true;
    }
  }
  resize(e2, i) {
    this._rowCount = i, this._fireOnCanvasResize();
  }
  _handleOptionsChanged() {
    this._renderer.value && (this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize());
  }
  _fireOnCanvasResize() {
    this._renderer.value && (this._renderer.value.dimensions.css.canvas.width === this._canvasWidth && this._renderer.value.dimensions.css.canvas.height === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.value.dimensions));
  }
  hasRenderer() {
    return !!this._renderer.value;
  }
  setRenderer(e2) {
    this._renderer.value = e2, this._renderer.value && (this._renderer.value.onRequestRedraw((i) => this.refreshRows(i.start, i.end, true)), this._needsSelectionRefresh = true, this._fullRefresh());
  }
  addRefreshCallback(e2) {
    return this._renderDebouncer.addRefreshCallback(e2);
  }
  _fullRefresh() {
    this._isPaused ? this._needsFullRefresh = true : this.refreshRows(0, this._rowCount - 1);
  }
  clearTextureAtlas() {
    this._renderer.value && (this._renderer.value.clearTextureAtlas?.(), this._fullRefresh());
  }
  handleDevicePixelRatioChange() {
    this._charSizeService.measure(), this._renderer.value && (this._renderer.value.handleDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1));
  }
  handleResize(e2, i) {
    this._renderer.value && (this._isPaused ? this._pausedResizeTask.set(() => this._renderer.value?.handleResize(e2, i)) : this._renderer.value.handleResize(e2, i), this._fullRefresh());
  }
  handleCharSizeChanged() {
    this._renderer.value?.handleCharSizeChanged();
  }
  handleBlur() {
    this._renderer.value?.handleBlur();
  }
  handleFocus() {
    this._renderer.value?.handleFocus();
  }
  handleSelectionChanged(e2, i, r2) {
    this._selectionState.start = e2, this._selectionState.end = i, this._selectionState.columnSelectMode = r2, this._renderer.value?.handleSelectionChanged(e2, i, r2);
  }
  handleCursorMove() {
    this._renderer.value?.handleCursorMove();
  }
  clear() {
    this._renderer.value?.clear();
  }
};
Qt = M([S(2, H), S(3, nt), S(4, ge), S(5, Be), S(6, F), S(7, ae), S(8, Re)], Qt);
var xs = class {
  constructor(t2, e2, i) {
    this._coreBrowserService = t2;
    this._coreService = e2;
    this._onTimeout = i;
    this._start = 0;
    this._end = 0;
    this._isBuffering = false;
  }
  bufferRows(t2, e2) {
    this._isBuffering ? (this._start = Math.min(this._start, t2), this._end = Math.max(this._end, e2)) : (this._start = t2, this._end = e2, this._isBuffering = true), this._timeout === void 0 && (this._timeout = this._coreBrowserService.window.setTimeout(() => {
      this._timeout = void 0, this._coreService.decPrivateModes.synchronizedOutput = false, this._onTimeout();
    }, 1e3));
  }
  flush() {
    if (this._timeout !== void 0 && (this._coreBrowserService.window.clearTimeout(this._timeout), this._timeout = void 0), !this._isBuffering) return;
    let t2 = { start: this._start, end: this._end };
    return this._isBuffering = false, t2;
  }
  dispose() {
    this._timeout !== void 0 && (this._coreBrowserService.window.clearTimeout(this._timeout), this._timeout = void 0);
  }
};
function Jo(s16, t2, e2, i) {
  let r2 = e2.buffer.x, n2 = e2.buffer.y;
  if (!e2.buffer.hasScrollback) return Ga(r2, n2, s16, t2, e2, i) + sn(n2, t2, e2, i) + $a(r2, n2, s16, t2, e2, i);
  let o2;
  if (n2 === t2) return o2 = r2 > s16 ? "D" : "C", Fi(Math.abs(r2 - s16), Ni(o2, i));
  o2 = n2 > t2 ? "D" : "C";
  let l2 = Math.abs(n2 - t2), a2 = za(n2 > t2 ? s16 : r2, e2) + (l2 - 1) * e2.cols + 1 + Ka(n2 > t2 ? r2 : s16);
  return Fi(a2, Ni(o2, i));
}
function Ka(s16, t2) {
  return s16 - 1;
}
function za(s16, t2) {
  return t2.cols - s16;
}
function Ga(s16, t2, e2, i, r2, n2) {
  return sn(t2, i, r2, n2).length === 0 ? "" : Fi(el(s16, t2, s16, t2 - gt(t2, r2), false, r2).length, Ni("D", n2));
}
function sn(s16, t2, e2, i) {
  let r2 = s16 - gt(s16, e2), n2 = t2 - gt(t2, e2), o2 = Math.abs(r2 - n2) - Va(s16, t2, e2);
  return Fi(o2, Ni(Qo(s16, t2), i));
}
function $a(s16, t2, e2, i, r2, n2) {
  let o2;
  sn(t2, i, r2, n2).length > 0 ? o2 = i - gt(i, r2) : o2 = t2;
  let l2 = i, a2 = qa(s16, t2, e2, i, r2, n2);
  return Fi(el(s16, o2, e2, l2, a2 === "C", r2).length, Ni(a2, n2));
}
function Va(s16, t2, e2) {
  let i = 0, r2 = s16 - gt(s16, e2), n2 = t2 - gt(t2, e2);
  for (let o2 = 0; o2 < Math.abs(r2 - n2); o2++) {
    let l2 = Qo(s16, t2) === "A" ? -1 : 1;
    e2.buffer.lines.get(r2 + l2 * o2)?.isWrapped && i++;
  }
  return i;
}
function gt(s16, t2) {
  let e2 = 0, i = t2.buffer.lines.get(s16), r2 = i?.isWrapped;
  for (; r2 && s16 >= 0 && s16 < t2.rows; ) e2++, i = t2.buffer.lines.get(--s16), r2 = i?.isWrapped;
  return e2;
}
function qa(s16, t2, e2, i, r2, n2) {
  let o2;
  return sn(e2, i, r2, n2).length > 0 ? o2 = i - gt(i, r2) : o2 = t2, s16 < e2 && o2 <= i || s16 >= e2 && o2 < i ? "C" : "D";
}
function Qo(s16, t2) {
  return s16 > t2 ? "A" : "B";
}
function el(s16, t2, e2, i, r2, n2) {
  let o2 = s16, l2 = t2, a2 = "";
  for (; (o2 !== e2 || l2 !== i) && l2 >= 0 && l2 < n2.buffer.lines.length; ) o2 += r2 ? 1 : -1, r2 && o2 > n2.cols - 1 ? (a2 += n2.buffer.translateBufferLineToString(l2, false, s16, o2), o2 = 0, s16 = 0, l2++) : !r2 && o2 < 0 && (a2 += n2.buffer.translateBufferLineToString(l2, false, 0, s16 + 1), o2 = n2.cols - 1, s16 = o2, l2--);
  return a2 + n2.buffer.translateBufferLineToString(l2, false, s16, o2);
}
function Ni(s16, t2) {
  let e2 = t2 ? "O" : "[";
  return b.ESC + e2 + s16;
}
function Fi(s16, t2) {
  s16 = Math.floor(s16);
  let e2 = "";
  for (let i = 0; i < s16; i++) e2 += t2;
  return e2;
}
var on = class {
  constructor(t2) {
    this._bufferService = t2;
    this.isSelectAllActive = false;
    this.selectionStartLength = 0;
  }
  clearSelection() {
    this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = false, this.selectionStartLength = 0;
  }
  get finalSelectionStart() {
    return this.isSelectAllActive ? [0, 0] : !this.selectionEnd || !this.selectionStart ? this.selectionStart : this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
  }
  get finalSelectionEnd() {
    if (this.isSelectAllActive) return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
    if (this.selectionStart) {
      if (!this.selectionEnd || this.areSelectionValuesReversed()) {
        let t2 = this.selectionStart[0] + this.selectionStartLength;
        return t2 > this._bufferService.cols ? t2 % this._bufferService.cols === 0 ? [this._bufferService.cols, this.selectionStart[1] + Math.floor(t2 / this._bufferService.cols) - 1] : [t2 % this._bufferService.cols, this.selectionStart[1] + Math.floor(t2 / this._bufferService.cols)] : [t2, this.selectionStart[1]];
      }
      if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
        let t2 = this.selectionStart[0] + this.selectionStartLength;
        return t2 > this._bufferService.cols ? [t2 % this._bufferService.cols, this.selectionStart[1] + Math.floor(t2 / this._bufferService.cols)] : [Math.max(t2, this.selectionEnd[0]), this.selectionEnd[1]];
      }
      return this.selectionEnd;
    }
  }
  areSelectionValuesReversed() {
    let t2 = this.selectionStart, e2 = this.selectionEnd;
    return !t2 || !e2 ? false : t2[1] > e2[1] || t2[1] === e2[1] && t2[0] > e2[0];
  }
  handleTrim(t2) {
    return this.selectionStart && (this.selectionStart[1] -= t2), this.selectionEnd && (this.selectionEnd[1] -= t2), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), true) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), false);
  }
};
function ws(s16, t2) {
  if (s16.start.y > s16.end.y) throw new Error(`Buffer range end (${s16.end.x}, ${s16.end.y}) cannot be before start (${s16.start.x}, ${s16.start.y})`);
  return t2 * (s16.end.y - s16.start.y) + (s16.end.x - s16.start.x + 1);
}
var Ds = 50, Ya = 15, ja = 50, Xa = 500, Za = " ", Ja = new RegExp(Za, "g");
var ei = class extends D {
  constructor(e2, i, r2, n2, o2, l2, a2, u2, h2) {
    super();
    this._element = e2;
    this._screenElement = i;
    this._linkifier = r2;
    this._bufferService = n2;
    this._coreService = o2;
    this._mouseService = l2;
    this._optionsService = a2;
    this._renderService = u2;
    this._coreBrowserService = h2;
    this._dragScrollAmount = 0;
    this._enabled = true;
    this._workCell = new q();
    this._mouseDownTimeStamp = 0;
    this._oldHasSelection = false;
    this._oldSelectionStart = void 0;
    this._oldSelectionEnd = void 0;
    this._onLinuxMouseSelection = this._register(new v());
    this.onLinuxMouseSelection = this._onLinuxMouseSelection.event;
    this._onRedrawRequest = this._register(new v());
    this.onRequestRedraw = this._onRedrawRequest.event;
    this._onSelectionChange = this._register(new v());
    this.onSelectionChange = this._onSelectionChange.event;
    this._onRequestScrollLines = this._register(new v());
    this.onRequestScrollLines = this._onRequestScrollLines.event;
    this._mouseMoveListener = (c2) => this._handleMouseMove(c2), this._mouseUpListener = (c2) => this._handleMouseUp(c2), this._coreService.onUserInput(() => {
      this.hasSelection && this.clearSelection();
    }), this._trimListener = this._bufferService.buffer.lines.onTrim((c2) => this._handleTrim(c2)), this._register(this._bufferService.buffers.onBufferActivate((c2) => this._handleBufferActivate(c2))), this.enable(), this._model = new on(this._bufferService), this._activeSelectionMode = 0, this._register(C(() => {
      this._removeMouseDownListeners();
    })), this._register(this._bufferService.onResize((c2) => {
      c2.rowsChanged && this.clearSelection();
    }));
  }
  reset() {
    this.clearSelection();
  }
  disable() {
    this.clearSelection(), this._enabled = false;
  }
  enable() {
    this._enabled = true;
  }
  get selectionStart() {
    return this._model.finalSelectionStart;
  }
  get selectionEnd() {
    return this._model.finalSelectionEnd;
  }
  get hasSelection() {
    let e2 = this._model.finalSelectionStart, i = this._model.finalSelectionEnd;
    return !e2 || !i ? false : e2[0] !== i[0] || e2[1] !== i[1];
  }
  get selectionText() {
    let e2 = this._model.finalSelectionStart, i = this._model.finalSelectionEnd;
    if (!e2 || !i) return "";
    let r2 = this._bufferService.buffer, n2 = [];
    if (this._activeSelectionMode === 3) {
      if (e2[0] === i[0]) return "";
      let l2 = e2[0] < i[0] ? e2[0] : i[0], a2 = e2[0] < i[0] ? i[0] : e2[0];
      for (let u2 = e2[1]; u2 <= i[1]; u2++) {
        let h2 = r2.translateBufferLineToString(u2, true, l2, a2);
        n2.push(h2);
      }
    } else {
      let l2 = e2[1] === i[1] ? i[0] : void 0;
      n2.push(r2.translateBufferLineToString(e2[1], true, e2[0], l2));
      for (let a2 = e2[1] + 1; a2 <= i[1] - 1; a2++) {
        let u2 = r2.lines.get(a2), h2 = r2.translateBufferLineToString(a2, true);
        u2?.isWrapped ? n2[n2.length - 1] += h2 : n2.push(h2);
      }
      if (e2[1] !== i[1]) {
        let a2 = r2.lines.get(i[1]), u2 = r2.translateBufferLineToString(i[1], true, 0, i[0]);
        a2 && a2.isWrapped ? n2[n2.length - 1] += u2 : n2.push(u2);
      }
    }
    return n2.map((l2) => l2.replace(Ja, " ")).join(Es ? `\r
` : `
`);
  }
  clearSelection() {
    this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
  }
  refresh(e2) {
    this._refreshAnimationFrame || (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._refresh())), Bi && e2 && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
  }
  _refresh() {
    this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({ start: this._model.finalSelectionStart, end: this._model.finalSelectionEnd, columnSelectMode: this._activeSelectionMode === 3 });
  }
  _isClickInSelection(e2) {
    let i = this._getMouseBufferCoords(e2), r2 = this._model.finalSelectionStart, n2 = this._model.finalSelectionEnd;
    return !r2 || !n2 || !i ? false : this._areCoordsInSelection(i, r2, n2);
  }
  isCellInSelection(e2, i) {
    let r2 = this._model.finalSelectionStart, n2 = this._model.finalSelectionEnd;
    return !r2 || !n2 ? false : this._areCoordsInSelection([e2, i], r2, n2);
  }
  _areCoordsInSelection(e2, i, r2) {
    return e2[1] > i[1] && e2[1] < r2[1] || i[1] === r2[1] && e2[1] === i[1] && e2[0] >= i[0] && e2[0] < r2[0] || i[1] < r2[1] && e2[1] === r2[1] && e2[0] < r2[0] || i[1] < r2[1] && e2[1] === i[1] && e2[0] >= i[0];
  }
  _selectWordAtCursor(e2, i) {
    let r2 = this._linkifier.currentLink?.link?.range;
    if (r2) return this._model.selectionStart = [r2.start.x - 1, r2.start.y - 1], this._model.selectionStartLength = ws(r2, this._bufferService.cols), this._model.selectionEnd = void 0, true;
    let n2 = this._getMouseBufferCoords(e2);
    return n2 ? (this._selectWordAt(n2, i), this._model.selectionEnd = void 0, true) : false;
  }
  selectAll() {
    this._model.isSelectAllActive = true, this.refresh(), this._onSelectionChange.fire();
  }
  selectLines(e2, i) {
    this._model.clearSelection(), e2 = Math.max(e2, 0), i = Math.min(i, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e2], this._model.selectionEnd = [this._bufferService.cols, i], this.refresh(), this._onSelectionChange.fire();
  }
  _handleTrim(e2) {
    this._model.handleTrim(e2) && this.refresh();
  }
  _getMouseBufferCoords(e2) {
    let i = this._mouseService.getCoords(e2, this._screenElement, this._bufferService.cols, this._bufferService.rows, true);
    if (i) return i[0]--, i[1]--, i[1] += this._bufferService.buffer.ydisp, i;
  }
  _getMouseEventScrollAmount(e2) {
    let i = Ci(this._coreBrowserService.window, e2, this._screenElement)[1], r2 = this._renderService.dimensions.css.canvas.height;
    return i >= 0 && i <= r2 ? 0 : (i > r2 && (i -= r2), i = Math.min(Math.max(i, -Ds), Ds), i /= Ds, i / Math.abs(i) + Math.round(i * (Ya - 1)));
  }
  shouldForceSelection(e2) {
    return Zt ? e2.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : e2.shiftKey;
  }
  handleMouseDown(e2) {
    if (this._mouseDownTimeStamp = e2.timeStamp, !(e2.button === 2 && this.hasSelection) && e2.button === 0) {
      if (!this._enabled) {
        if (!this.shouldForceSelection(e2)) return;
        e2.stopPropagation();
      }
      e2.preventDefault(), this._dragScrollAmount = 0, this._enabled && e2.shiftKey ? this._handleIncrementalClick(e2) : e2.detail === 1 ? this._handleSingleClick(e2) : e2.detail === 2 ? this._handleDoubleClick(e2) : e2.detail === 3 && this._handleTripleClick(e2), this._addMouseDownListeners(), this.refresh(true);
    }
  }
  _addMouseDownListeners() {
    this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(() => this._dragScroll(), ja);
  }
  _removeMouseDownListeners() {
    this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
  }
  _handleIncrementalClick(e2) {
    this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e2));
  }
  _handleSingleClick(e2) {
    if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = false, this._activeSelectionMode = this.shouldColumnSelect(e2) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e2), !this._model.selectionStart) return;
    this._model.selectionEnd = void 0;
    let i = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
    i && i.length !== this._model.selectionStart[0] && i.hasWidth(this._model.selectionStart[0]) === 0 && this._model.selectionStart[0]++;
  }
  _handleDoubleClick(e2) {
    this._selectWordAtCursor(e2, true) && (this._activeSelectionMode = 1);
  }
  _handleTripleClick(e2) {
    let i = this._getMouseBufferCoords(e2);
    i && (this._activeSelectionMode = 2, this._selectLineAt(i[1]));
  }
  shouldColumnSelect(e2) {
    return e2.altKey && !(Zt && this._optionsService.rawOptions.macOptionClickForcesSelection);
  }
  _handleMouseMove(e2) {
    if (e2.stopImmediatePropagation(), !this._model.selectionStart) return;
    let i = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
    if (this._model.selectionEnd = this._getMouseBufferCoords(e2), !this._model.selectionEnd) {
      this.refresh(true);
      return;
    }
    this._activeSelectionMode === 2 ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : this._activeSelectionMode === 1 && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e2), this._activeSelectionMode !== 3 && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
    let r2 = this._bufferService.buffer;
    if (this._model.selectionEnd[1] < r2.lines.length) {
      let n2 = r2.lines.get(this._model.selectionEnd[1]);
      n2 && n2.hasWidth(this._model.selectionEnd[0]) === 0 && this._model.selectionEnd[0] < this._bufferService.cols && this._model.selectionEnd[0]++;
    }
    (!i || i[0] !== this._model.selectionEnd[0] || i[1] !== this._model.selectionEnd[1]) && this.refresh(true);
  }
  _dragScroll() {
    if (!(!this._model.selectionEnd || !this._model.selectionStart) && this._dragScrollAmount) {
      this._onRequestScrollLines.fire({ amount: this._dragScrollAmount, suppressScrollEvent: false });
      let e2 = this._bufferService.buffer;
      this._dragScrollAmount > 0 ? (this._activeSelectionMode !== 3 && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e2.ydisp + this._bufferService.rows, e2.lines.length - 1)) : (this._activeSelectionMode !== 3 && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e2.ydisp), this.refresh();
    }
  }
  _handleMouseUp(e2) {
    let i = e2.timeStamp - this._mouseDownTimeStamp;
    if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && i < Xa && e2.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
      if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
        let r2 = this._mouseService.getCoords(e2, this._element, this._bufferService.cols, this._bufferService.rows, false);
        if (r2 && r2[0] !== void 0 && r2[1] !== void 0) {
          let n2 = Jo(r2[0] - 1, r2[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
          this._coreService.triggerDataEvent(n2, true);
        }
      }
    } else this._fireEventIfSelectionChanged();
  }
  _fireEventIfSelectionChanged() {
    let e2 = this._model.finalSelectionStart, i = this._model.finalSelectionEnd, r2 = !!e2 && !!i && (e2[0] !== i[0] || e2[1] !== i[1]);
    if (!r2) {
      this._oldHasSelection && this._fireOnSelectionChange(e2, i, r2);
      return;
    }
    !e2 || !i || (!this._oldSelectionStart || !this._oldSelectionEnd || e2[0] !== this._oldSelectionStart[0] || e2[1] !== this._oldSelectionStart[1] || i[0] !== this._oldSelectionEnd[0] || i[1] !== this._oldSelectionEnd[1]) && this._fireOnSelectionChange(e2, i, r2);
  }
  _fireOnSelectionChange(e2, i, r2) {
    this._oldSelectionStart = e2, this._oldSelectionEnd = i, this._oldHasSelection = r2, this._onSelectionChange.fire();
  }
  _handleBufferActivate(e2) {
    this.clearSelection(), this._trimListener.dispose(), this._trimListener = e2.activeBuffer.lines.onTrim((i) => this._handleTrim(i));
  }
  _convertViewportColToCharacterIndex(e2, i) {
    let r2 = i;
    for (let n2 = 0; i >= n2; n2++) {
      let o2 = e2.loadCell(n2, this._workCell).getChars().length;
      this._workCell.getWidth() === 0 ? r2-- : o2 > 1 && i !== n2 && (r2 += o2 - 1);
    }
    return r2;
  }
  setSelection(e2, i, r2) {
    this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e2, i], this._model.selectionStartLength = r2, this.refresh(), this._fireEventIfSelectionChanged();
  }
  rightClickSelect(e2) {
    this._isClickInSelection(e2) || (this._selectWordAtCursor(e2, false) && this.refresh(true), this._fireEventIfSelectionChanged());
  }
  _getWordAt(e2, i, r2 = true, n2 = true) {
    if (e2[0] >= this._bufferService.cols) return;
    let o2 = this._bufferService.buffer, l2 = o2.lines.get(e2[1]);
    if (!l2) return;
    let a2 = o2.translateBufferLineToString(e2[1], false), u2 = this._convertViewportColToCharacterIndex(l2, e2[0]), h2 = u2, c2 = e2[0] - u2, d = 0, _2 = 0, p2 = 0, m2 = 0;
    if (a2.charAt(u2) === " ") {
      for (; u2 > 0 && a2.charAt(u2 - 1) === " "; ) u2--;
      for (; h2 < a2.length && a2.charAt(h2 + 1) === " "; ) h2++;
    } else {
      let R2 = e2[0], O2 = e2[0];
      l2.getWidth(R2) === 0 && (d++, R2--), l2.getWidth(O2) === 2 && (_2++, O2++);
      let I2 = l2.getString(O2).length;
      for (I2 > 1 && (m2 += I2 - 1, h2 += I2 - 1); R2 > 0 && u2 > 0 && !this._isCharWordSeparator(l2.loadCell(R2 - 1, this._workCell)); ) {
        l2.loadCell(R2 - 1, this._workCell);
        let k2 = this._workCell.getChars().length;
        this._workCell.getWidth() === 0 ? (d++, R2--) : k2 > 1 && (p2 += k2 - 1, u2 -= k2 - 1), u2--, R2--;
      }
      for (; O2 < l2.length && h2 + 1 < a2.length && !this._isCharWordSeparator(l2.loadCell(O2 + 1, this._workCell)); ) {
        l2.loadCell(O2 + 1, this._workCell);
        let k2 = this._workCell.getChars().length;
        this._workCell.getWidth() === 2 ? (_2++, O2++) : k2 > 1 && (m2 += k2 - 1, h2 += k2 - 1), h2++, O2++;
      }
    }
    h2++;
    let f2 = u2 + c2 - d + p2, A2 = Math.min(this._bufferService.cols, h2 - u2 + d + _2 - p2 - m2);
    if (!(!i && a2.slice(u2, h2).trim() === "")) {
      if (r2 && f2 === 0 && l2.getCodePoint(0) !== 32) {
        let R2 = o2.lines.get(e2[1] - 1);
        if (R2 && l2.isWrapped && R2.getCodePoint(this._bufferService.cols - 1) !== 32) {
          let O2 = this._getWordAt([this._bufferService.cols - 1, e2[1] - 1], false, true, false);
          if (O2) {
            let I2 = this._bufferService.cols - O2.start;
            f2 -= I2, A2 += I2;
          }
        }
      }
      if (n2 && f2 + A2 === this._bufferService.cols && l2.getCodePoint(this._bufferService.cols - 1) !== 32) {
        let R2 = o2.lines.get(e2[1] + 1);
        if (R2?.isWrapped && R2.getCodePoint(0) !== 32) {
          let O2 = this._getWordAt([0, e2[1] + 1], false, false, true);
          O2 && (A2 += O2.length);
        }
      }
      return { start: f2, length: A2 };
    }
  }
  _selectWordAt(e2, i) {
    let r2 = this._getWordAt(e2, i);
    if (r2) {
      for (; r2.start < 0; ) r2.start += this._bufferService.cols, e2[1]--;
      this._model.selectionStart = [r2.start, e2[1]], this._model.selectionStartLength = r2.length;
    }
  }
  _selectToWordAt(e2) {
    let i = this._getWordAt(e2, true);
    if (i) {
      let r2 = e2[1];
      for (; i.start < 0; ) i.start += this._bufferService.cols, r2--;
      if (!this._model.areSelectionValuesReversed()) for (; i.start + i.length > this._bufferService.cols; ) i.length -= this._bufferService.cols, r2++;
      this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? i.start : i.start + i.length, r2];
    }
  }
  _isCharWordSeparator(e2) {
    return e2.getWidth() === 0 ? false : this._optionsService.rawOptions.wordSeparator.indexOf(e2.getChars()) >= 0;
  }
  _selectLineAt(e2) {
    let i = this._bufferService.buffer.getWrappedRangeForLine(e2), r2 = { start: { x: 0, y: i.first }, end: { x: this._bufferService.cols - 1, y: i.last } };
    this._model.selectionStart = [0, i.first], this._model.selectionEnd = void 0, this._model.selectionStartLength = ws(r2, this._bufferService.cols);
  }
};
ei = M([S(3, F), S(4, ge), S(5, Dt), S(6, H), S(7, ce), S(8, ae)], ei);
var Hi = class {
  constructor() {
    this._data = {};
  }
  set(t2, e2, i) {
    this._data[t2] || (this._data[t2] = {}), this._data[t2][e2] = i;
  }
  get(t2, e2) {
    return this._data[t2] ? this._data[t2][e2] : void 0;
  }
  clear() {
    this._data = {};
  }
};
var Wi = class {
  constructor() {
    this._color = new Hi();
    this._css = new Hi();
  }
  setCss(t2, e2, i) {
    this._css.set(t2, e2, i);
  }
  getCss(t2, e2) {
    return this._css.get(t2, e2);
  }
  setColor(t2, e2, i) {
    this._color.set(t2, e2, i);
  }
  getColor(t2, e2) {
    return this._color.get(t2, e2);
  }
  clear() {
    this._color.clear(), this._css.clear();
  }
};
var re = Object.freeze((() => {
  let s16 = [z.toColor("#2e3436"), z.toColor("#cc0000"), z.toColor("#4e9a06"), z.toColor("#c4a000"), z.toColor("#3465a4"), z.toColor("#75507b"), z.toColor("#06989a"), z.toColor("#d3d7cf"), z.toColor("#555753"), z.toColor("#ef2929"), z.toColor("#8ae234"), z.toColor("#fce94f"), z.toColor("#729fcf"), z.toColor("#ad7fa8"), z.toColor("#34e2e2"), z.toColor("#eeeeec")], t2 = [0, 95, 135, 175, 215, 255];
  for (let e2 = 0; e2 < 216; e2++) {
    let i = t2[e2 / 36 % 6 | 0], r2 = t2[e2 / 6 % 6 | 0], n2 = t2[e2 % 6];
    s16.push({ css: j.toCss(i, r2, n2), rgba: j.toRgba(i, r2, n2) });
  }
  for (let e2 = 0; e2 < 24; e2++) {
    let i = 8 + e2 * 10;
    s16.push({ css: j.toCss(i, i, i), rgba: j.toRgba(i, i, i) });
  }
  return s16;
})());
var St = z.toColor("#ffffff"), Ki = z.toColor("#000000"), tl = z.toColor("#ffffff"), il = Ki, Ui = { css: "rgba(255, 255, 255, 0.3)", rgba: 4294967117 }, Qa = St, ti = class extends D {
  constructor(e2) {
    super();
    this._optionsService = e2;
    this._contrastCache = new Wi();
    this._halfContrastCache = new Wi();
    this._onChangeColors = this._register(new v());
    this.onChangeColors = this._onChangeColors.event;
    this._colors = { foreground: St, background: Ki, cursor: tl, cursorAccent: il, selectionForeground: void 0, selectionBackgroundTransparent: Ui, selectionBackgroundOpaque: U.blend(Ki, Ui), selectionInactiveBackgroundTransparent: Ui, selectionInactiveBackgroundOpaque: U.blend(Ki, Ui), scrollbarSliderBackground: U.opacity(St, 0.2), scrollbarSliderHoverBackground: U.opacity(St, 0.4), scrollbarSliderActiveBackground: U.opacity(St, 0.5), overviewRulerBorder: St, ansi: re.slice(), contrastCache: this._contrastCache, halfContrastCache: this._halfContrastCache }, this._updateRestoreColors(), this._setTheme(this._optionsService.rawOptions.theme), this._register(this._optionsService.onSpecificOptionChange("minimumContrastRatio", () => this._contrastCache.clear())), this._register(this._optionsService.onSpecificOptionChange("theme", () => this._setTheme(this._optionsService.rawOptions.theme)));
  }
  get colors() {
    return this._colors;
  }
  _setTheme(e2 = {}) {
    let i = this._colors;
    if (i.foreground = K(e2.foreground, St), i.background = K(e2.background, Ki), i.cursor = U.blend(i.background, K(e2.cursor, tl)), i.cursorAccent = U.blend(i.background, K(e2.cursorAccent, il)), i.selectionBackgroundTransparent = K(e2.selectionBackground, Ui), i.selectionBackgroundOpaque = U.blend(i.background, i.selectionBackgroundTransparent), i.selectionInactiveBackgroundTransparent = K(e2.selectionInactiveBackground, i.selectionBackgroundTransparent), i.selectionInactiveBackgroundOpaque = U.blend(i.background, i.selectionInactiveBackgroundTransparent), i.selectionForeground = e2.selectionForeground ? K(e2.selectionForeground, ps) : void 0, i.selectionForeground === ps && (i.selectionForeground = void 0), U.isOpaque(i.selectionBackgroundTransparent) && (i.selectionBackgroundTransparent = U.opacity(i.selectionBackgroundTransparent, 0.3)), U.isOpaque(i.selectionInactiveBackgroundTransparent) && (i.selectionInactiveBackgroundTransparent = U.opacity(i.selectionInactiveBackgroundTransparent, 0.3)), i.scrollbarSliderBackground = K(e2.scrollbarSliderBackground, U.opacity(i.foreground, 0.2)), i.scrollbarSliderHoverBackground = K(e2.scrollbarSliderHoverBackground, U.opacity(i.foreground, 0.4)), i.scrollbarSliderActiveBackground = K(e2.scrollbarSliderActiveBackground, U.opacity(i.foreground, 0.5)), i.overviewRulerBorder = K(e2.overviewRulerBorder, Qa), i.ansi = re.slice(), i.ansi[0] = K(e2.black, re[0]), i.ansi[1] = K(e2.red, re[1]), i.ansi[2] = K(e2.green, re[2]), i.ansi[3] = K(e2.yellow, re[3]), i.ansi[4] = K(e2.blue, re[4]), i.ansi[5] = K(e2.magenta, re[5]), i.ansi[6] = K(e2.cyan, re[6]), i.ansi[7] = K(e2.white, re[7]), i.ansi[8] = K(e2.brightBlack, re[8]), i.ansi[9] = K(e2.brightRed, re[9]), i.ansi[10] = K(e2.brightGreen, re[10]), i.ansi[11] = K(e2.brightYellow, re[11]), i.ansi[12] = K(e2.brightBlue, re[12]), i.ansi[13] = K(e2.brightMagenta, re[13]), i.ansi[14] = K(e2.brightCyan, re[14]), i.ansi[15] = K(e2.brightWhite, re[15]), e2.extendedAnsi) {
      let r2 = Math.min(i.ansi.length - 16, e2.extendedAnsi.length);
      for (let n2 = 0; n2 < r2; n2++) i.ansi[n2 + 16] = K(e2.extendedAnsi[n2], re[n2 + 16]);
    }
    this._contrastCache.clear(), this._halfContrastCache.clear(), this._updateRestoreColors(), this._onChangeColors.fire(this.colors);
  }
  restoreColor(e2) {
    this._restoreColor(e2), this._onChangeColors.fire(this.colors);
  }
  _restoreColor(e2) {
    if (e2 === void 0) {
      for (let i = 0; i < this._restoreColors.ansi.length; ++i) this._colors.ansi[i] = this._restoreColors.ansi[i];
      return;
    }
    switch (e2) {
      case 256:
        this._colors.foreground = this._restoreColors.foreground;
        break;
      case 257:
        this._colors.background = this._restoreColors.background;
        break;
      case 258:
        this._colors.cursor = this._restoreColors.cursor;
        break;
      default:
        this._colors.ansi[e2] = this._restoreColors.ansi[e2];
    }
  }
  modifyColors(e2) {
    e2(this._colors), this._onChangeColors.fire(this.colors);
  }
  _updateRestoreColors() {
    this._restoreColors = { foreground: this._colors.foreground, background: this._colors.background, cursor: this._colors.cursor, ansi: this._colors.ansi.slice() };
  }
};
ti = M([S(0, H)], ti);
function K(s16, t2) {
  if (s16 !== void 0) try {
    return z.toColor(s16);
  } catch {
  }
  return t2;
}
var Rs = class {
  constructor(...t2) {
    this._entries = /* @__PURE__ */ new Map();
    for (let [e2, i] of t2) this.set(e2, i);
  }
  set(t2, e2) {
    let i = this._entries.get(t2);
    return this._entries.set(t2, e2), i;
  }
  forEach(t2) {
    for (let [e2, i] of this._entries.entries()) t2(e2, i);
  }
  has(t2) {
    return this._entries.has(t2);
  }
  get(t2) {
    return this._entries.get(t2);
  }
}, ln = class {
  constructor() {
    this._services = new Rs();
    this._services.set(xt, this);
  }
  setService(t2, e2) {
    this._services.set(t2, e2);
  }
  getService(t2) {
    return this._services.get(t2);
  }
  createInstance(t2, ...e2) {
    let i = Xs(t2).sort((o2, l2) => o2.index - l2.index), r2 = [];
    for (let o2 of i) {
      let l2 = this._services.get(o2.id);
      if (!l2) throw new Error(`[createInstance] ${t2.name} depends on UNKNOWN service ${o2.id._id}.`);
      r2.push(l2);
    }
    let n2 = i.length > 0 ? i[0].index : e2.length;
    if (e2.length !== n2) throw new Error(`[createInstance] First service dependency of ${t2.name} at position ${n2 + 1} conflicts with ${e2.length} static arguments`);
    return new t2(...e2, ...r2);
  }
};
var ec = { trace: 0, debug: 1, info: 2, warn: 3, error: 4, off: 5 }, tc = "xterm.js: ", ii = class extends D {
  constructor(e2) {
    super();
    this._optionsService = e2;
    this._logLevel = 5;
    this._updateLogLevel(), this._register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel()));
  }
  get logLevel() {
    return this._logLevel;
  }
  _updateLogLevel() {
    this._logLevel = ec[this._optionsService.rawOptions.logLevel];
  }
  _evalLazyOptionalParams(e2) {
    for (let i = 0; i < e2.length; i++) typeof e2[i] == "function" && (e2[i] = e2[i]());
  }
  _log(e2, i, r2) {
    this._evalLazyOptionalParams(r2), e2.call(console, (this._optionsService.options.logger ? "" : tc) + i, ...r2);
  }
  trace(e2, ...i) {
    this._logLevel <= 0 && this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, e2, i);
  }
  debug(e2, ...i) {
    this._logLevel <= 1 && this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, e2, i);
  }
  info(e2, ...i) {
    this._logLevel <= 2 && this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, e2, i);
  }
  warn(e2, ...i) {
    this._logLevel <= 3 && this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, e2, i);
  }
  error(e2, ...i) {
    this._logLevel <= 4 && this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, e2, i);
  }
};
ii = M([S(0, H)], ii);
var zi = class extends D {
  constructor(e2) {
    super();
    this._maxLength = e2;
    this.onDeleteEmitter = this._register(new v());
    this.onDelete = this.onDeleteEmitter.event;
    this.onInsertEmitter = this._register(new v());
    this.onInsert = this.onInsertEmitter.event;
    this.onTrimEmitter = this._register(new v());
    this.onTrim = this.onTrimEmitter.event;
    this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
  }
  get maxLength() {
    return this._maxLength;
  }
  set maxLength(e2) {
    if (this._maxLength === e2) return;
    let i = new Array(e2);
    for (let r2 = 0; r2 < Math.min(e2, this.length); r2++) i[r2] = this._array[this._getCyclicIndex(r2)];
    this._array = i, this._maxLength = e2, this._startIndex = 0;
  }
  get length() {
    return this._length;
  }
  set length(e2) {
    if (e2 > this._length) for (let i = this._length; i < e2; i++) this._array[i] = void 0;
    this._length = e2;
  }
  get(e2) {
    return this._array[this._getCyclicIndex(e2)];
  }
  set(e2, i) {
    this._array[this._getCyclicIndex(e2)] = i;
  }
  push(e2) {
    this._array[this._getCyclicIndex(this._length)] = e2, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
  }
  recycle() {
    if (this._length !== this._maxLength) throw new Error("Can only recycle when the buffer is full");
    return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
  }
  get isFull() {
    return this._length === this._maxLength;
  }
  pop() {
    return this._array[this._getCyclicIndex(this._length-- - 1)];
  }
  splice(e2, i, ...r2) {
    if (i) {
      for (let n2 = e2; n2 < this._length - i; n2++) this._array[this._getCyclicIndex(n2)] = this._array[this._getCyclicIndex(n2 + i)];
      this._length -= i, this.onDeleteEmitter.fire({ index: e2, amount: i });
    }
    for (let n2 = this._length - 1; n2 >= e2; n2--) this._array[this._getCyclicIndex(n2 + r2.length)] = this._array[this._getCyclicIndex(n2)];
    for (let n2 = 0; n2 < r2.length; n2++) this._array[this._getCyclicIndex(e2 + n2)] = r2[n2];
    if (r2.length && this.onInsertEmitter.fire({ index: e2, amount: r2.length }), this._length + r2.length > this._maxLength) {
      let n2 = this._length + r2.length - this._maxLength;
      this._startIndex += n2, this._length = this._maxLength, this.onTrimEmitter.fire(n2);
    } else this._length += r2.length;
  }
  trimStart(e2) {
    e2 > this._length && (e2 = this._length), this._startIndex += e2, this._length -= e2, this.onTrimEmitter.fire(e2);
  }
  shiftElements(e2, i, r2) {
    if (!(i <= 0)) {
      if (e2 < 0 || e2 >= this._length) throw new Error("start argument out of range");
      if (e2 + r2 < 0) throw new Error("Cannot shift elements in list beyond index 0");
      if (r2 > 0) {
        for (let o2 = i - 1; o2 >= 0; o2--) this.set(e2 + o2 + r2, this.get(e2 + o2));
        let n2 = e2 + i + r2 - this._length;
        if (n2 > 0) for (this._length += n2; this._length > this._maxLength; ) this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
      } else for (let n2 = 0; n2 < i; n2++) this.set(e2 + n2 + r2, this.get(e2 + n2));
    }
  }
  _getCyclicIndex(e2) {
    return (this._startIndex + e2) % this._maxLength;
  }
};
var B = 3;
var X = Object.freeze(new De()), an = 0, Ls = 2, Ze = class s13 {
  constructor(t2, e2, i = false) {
    this.isWrapped = i;
    this._combined = {};
    this._extendedAttrs = {};
    this._data = new Uint32Array(t2 * B);
    let r2 = e2 || q.fromCharData([0, ir, 1, 0]);
    for (let n2 = 0; n2 < t2; ++n2) this.setCell(n2, r2);
    this.length = t2;
  }
  get(t2) {
    let e2 = this._data[t2 * B + 0], i = e2 & 2097151;
    return [this._data[t2 * B + 1], e2 & 2097152 ? this._combined[t2] : i ? Ce(i) : "", e2 >> 22, e2 & 2097152 ? this._combined[t2].charCodeAt(this._combined[t2].length - 1) : i];
  }
  set(t2, e2) {
    this._data[t2 * B + 1] = e2[0], e2[1].length > 1 ? (this._combined[t2] = e2[1], this._data[t2 * B + 0] = t2 | 2097152 | e2[2] << 22) : this._data[t2 * B + 0] = e2[1].charCodeAt(0) | e2[2] << 22;
  }
  getWidth(t2) {
    return this._data[t2 * B + 0] >> 22;
  }
  hasWidth(t2) {
    return this._data[t2 * B + 0] & 12582912;
  }
  getFg(t2) {
    return this._data[t2 * B + 1];
  }
  getBg(t2) {
    return this._data[t2 * B + 2];
  }
  hasContent(t2) {
    return this._data[t2 * B + 0] & 4194303;
  }
  getCodePoint(t2) {
    let e2 = this._data[t2 * B + 0];
    return e2 & 2097152 ? this._combined[t2].charCodeAt(this._combined[t2].length - 1) : e2 & 2097151;
  }
  isCombined(t2) {
    return this._data[t2 * B + 0] & 2097152;
  }
  getString(t2) {
    let e2 = this._data[t2 * B + 0];
    return e2 & 2097152 ? this._combined[t2] : e2 & 2097151 ? Ce(e2 & 2097151) : "";
  }
  isProtected(t2) {
    return this._data[t2 * B + 2] & 536870912;
  }
  loadCell(t2, e2) {
    return an = t2 * B, e2.content = this._data[an + 0], e2.fg = this._data[an + 1], e2.bg = this._data[an + 2], e2.content & 2097152 && (e2.combinedData = this._combined[t2]), e2.bg & 268435456 && (e2.extended = this._extendedAttrs[t2]), e2;
  }
  setCell(t2, e2) {
    e2.content & 2097152 && (this._combined[t2] = e2.combinedData), e2.bg & 268435456 && (this._extendedAttrs[t2] = e2.extended), this._data[t2 * B + 0] = e2.content, this._data[t2 * B + 1] = e2.fg, this._data[t2 * B + 2] = e2.bg;
  }
  setCellFromCodepoint(t2, e2, i, r2) {
    r2.bg & 268435456 && (this._extendedAttrs[t2] = r2.extended), this._data[t2 * B + 0] = e2 | i << 22, this._data[t2 * B + 1] = r2.fg, this._data[t2 * B + 2] = r2.bg;
  }
  addCodepointToCell(t2, e2, i) {
    let r2 = this._data[t2 * B + 0];
    r2 & 2097152 ? this._combined[t2] += Ce(e2) : r2 & 2097151 ? (this._combined[t2] = Ce(r2 & 2097151) + Ce(e2), r2 &= -2097152, r2 |= 2097152) : r2 = e2 | 1 << 22, i && (r2 &= -12582913, r2 |= i << 22), this._data[t2 * B + 0] = r2;
  }
  insertCells(t2, e2, i) {
    if (t2 %= this.length, t2 && this.getWidth(t2 - 1) === 2 && this.setCellFromCodepoint(t2 - 1, 0, 1, i), e2 < this.length - t2) {
      let r2 = new q();
      for (let n2 = this.length - t2 - e2 - 1; n2 >= 0; --n2) this.setCell(t2 + e2 + n2, this.loadCell(t2 + n2, r2));
      for (let n2 = 0; n2 < e2; ++n2) this.setCell(t2 + n2, i);
    } else for (let r2 = t2; r2 < this.length; ++r2) this.setCell(r2, i);
    this.getWidth(this.length - 1) === 2 && this.setCellFromCodepoint(this.length - 1, 0, 1, i);
  }
  deleteCells(t2, e2, i) {
    if (t2 %= this.length, e2 < this.length - t2) {
      let r2 = new q();
      for (let n2 = 0; n2 < this.length - t2 - e2; ++n2) this.setCell(t2 + n2, this.loadCell(t2 + e2 + n2, r2));
      for (let n2 = this.length - e2; n2 < this.length; ++n2) this.setCell(n2, i);
    } else for (let r2 = t2; r2 < this.length; ++r2) this.setCell(r2, i);
    t2 && this.getWidth(t2 - 1) === 2 && this.setCellFromCodepoint(t2 - 1, 0, 1, i), this.getWidth(t2) === 0 && !this.hasContent(t2) && this.setCellFromCodepoint(t2, 0, 1, i);
  }
  replaceCells(t2, e2, i, r2 = false) {
    if (r2) {
      for (t2 && this.getWidth(t2 - 1) === 2 && !this.isProtected(t2 - 1) && this.setCellFromCodepoint(t2 - 1, 0, 1, i), e2 < this.length && this.getWidth(e2 - 1) === 2 && !this.isProtected(e2) && this.setCellFromCodepoint(e2, 0, 1, i); t2 < e2 && t2 < this.length; ) this.isProtected(t2) || this.setCell(t2, i), t2++;
      return;
    }
    for (t2 && this.getWidth(t2 - 1) === 2 && this.setCellFromCodepoint(t2 - 1, 0, 1, i), e2 < this.length && this.getWidth(e2 - 1) === 2 && this.setCellFromCodepoint(e2, 0, 1, i); t2 < e2 && t2 < this.length; ) this.setCell(t2++, i);
  }
  resize(t2, e2) {
    if (t2 === this.length) return this._data.length * 4 * Ls < this._data.buffer.byteLength;
    let i = t2 * B;
    if (t2 > this.length) {
      if (this._data.buffer.byteLength >= i * 4) this._data = new Uint32Array(this._data.buffer, 0, i);
      else {
        let r2 = new Uint32Array(i);
        r2.set(this._data), this._data = r2;
      }
      for (let r2 = this.length; r2 < t2; ++r2) this.setCell(r2, e2);
    } else {
      this._data = this._data.subarray(0, i);
      let r2 = Object.keys(this._combined);
      for (let o2 = 0; o2 < r2.length; o2++) {
        let l2 = parseInt(r2[o2], 10);
        l2 >= t2 && delete this._combined[l2];
      }
      let n2 = Object.keys(this._extendedAttrs);
      for (let o2 = 0; o2 < n2.length; o2++) {
        let l2 = parseInt(n2[o2], 10);
        l2 >= t2 && delete this._extendedAttrs[l2];
      }
    }
    return this.length = t2, i * 4 * Ls < this._data.buffer.byteLength;
  }
  cleanupMemory() {
    if (this._data.length * 4 * Ls < this._data.buffer.byteLength) {
      let t2 = new Uint32Array(this._data.length);
      return t2.set(this._data), this._data = t2, 1;
    }
    return 0;
  }
  fill(t2, e2 = false) {
    if (e2) {
      for (let i = 0; i < this.length; ++i) this.isProtected(i) || this.setCell(i, t2);
      return;
    }
    this._combined = {}, this._extendedAttrs = {};
    for (let i = 0; i < this.length; ++i) this.setCell(i, t2);
  }
  copyFrom(t2) {
    this.length !== t2.length ? this._data = new Uint32Array(t2._data) : this._data.set(t2._data), this.length = t2.length, this._combined = {};
    for (let e2 in t2._combined) this._combined[e2] = t2._combined[e2];
    this._extendedAttrs = {};
    for (let e2 in t2._extendedAttrs) this._extendedAttrs[e2] = t2._extendedAttrs[e2];
    this.isWrapped = t2.isWrapped;
  }
  clone() {
    let t2 = new s13(0);
    t2._data = new Uint32Array(this._data), t2.length = this.length;
    for (let e2 in this._combined) t2._combined[e2] = this._combined[e2];
    for (let e2 in this._extendedAttrs) t2._extendedAttrs[e2] = this._extendedAttrs[e2];
    return t2.isWrapped = this.isWrapped, t2;
  }
  getTrimmedLength() {
    for (let t2 = this.length - 1; t2 >= 0; --t2) if (this._data[t2 * B + 0] & 4194303) return t2 + (this._data[t2 * B + 0] >> 22);
    return 0;
  }
  getNoBgTrimmedLength() {
    for (let t2 = this.length - 1; t2 >= 0; --t2) if (this._data[t2 * B + 0] & 4194303 || this._data[t2 * B + 2] & 50331648) return t2 + (this._data[t2 * B + 0] >> 22);
    return 0;
  }
  copyCellsFrom(t2, e2, i, r2, n2) {
    let o2 = t2._data;
    if (n2) for (let a2 = r2 - 1; a2 >= 0; a2--) {
      for (let u2 = 0; u2 < B; u2++) this._data[(i + a2) * B + u2] = o2[(e2 + a2) * B + u2];
      o2[(e2 + a2) * B + 2] & 268435456 && (this._extendedAttrs[i + a2] = t2._extendedAttrs[e2 + a2]);
    }
    else for (let a2 = 0; a2 < r2; a2++) {
      for (let u2 = 0; u2 < B; u2++) this._data[(i + a2) * B + u2] = o2[(e2 + a2) * B + u2];
      o2[(e2 + a2) * B + 2] & 268435456 && (this._extendedAttrs[i + a2] = t2._extendedAttrs[e2 + a2]);
    }
    let l2 = Object.keys(t2._combined);
    for (let a2 = 0; a2 < l2.length; a2++) {
      let u2 = parseInt(l2[a2], 10);
      u2 >= e2 && (this._combined[u2 - e2 + i] = t2._combined[u2]);
    }
  }
  translateToString(t2, e2, i, r2) {
    e2 = e2 ?? 0, i = i ?? this.length, t2 && (i = Math.min(i, this.getTrimmedLength())), r2 && (r2.length = 0);
    let n2 = "";
    for (; e2 < i; ) {
      let o2 = this._data[e2 * B + 0], l2 = o2 & 2097151, a2 = o2 & 2097152 ? this._combined[e2] : l2 ? Ce(l2) : we;
      if (n2 += a2, r2) for (let u2 = 0; u2 < a2.length; ++u2) r2.push(e2);
      e2 += o2 >> 22 || 1;
    }
    return r2 && r2.push(e2), n2;
  }
};
function sl(s16, t2, e2, i, r2, n2) {
  let o2 = [];
  for (let l2 = 0; l2 < s16.length - 1; l2++) {
    let a2 = l2, u2 = s16.get(++a2);
    if (!u2.isWrapped) continue;
    let h2 = [s16.get(l2)];
    for (; a2 < s16.length && u2.isWrapped; ) h2.push(u2), u2 = s16.get(++a2);
    if (!n2 && i >= l2 && i < a2) {
      l2 += h2.length - 1;
      continue;
    }
    let c2 = 0, d = ri(h2, c2, t2), _2 = 1, p2 = 0;
    for (; _2 < h2.length; ) {
      let f2 = ri(h2, _2, t2), A2 = f2 - p2, R2 = e2 - d, O2 = Math.min(A2, R2);
      h2[c2].copyCellsFrom(h2[_2], p2, d, O2, false), d += O2, d === e2 && (c2++, d = 0), p2 += O2, p2 === f2 && (_2++, p2 = 0), d === 0 && c2 !== 0 && h2[c2 - 1].getWidth(e2 - 1) === 2 && (h2[c2].copyCellsFrom(h2[c2 - 1], e2 - 1, d++, 1, false), h2[c2 - 1].setCell(e2 - 1, r2));
    }
    h2[c2].replaceCells(d, e2, r2);
    let m2 = 0;
    for (let f2 = h2.length - 1; f2 > 0 && (f2 > c2 || h2[f2].getTrimmedLength() === 0); f2--) m2++;
    m2 > 0 && (o2.push(l2 + h2.length - m2), o2.push(m2)), l2 += h2.length - 1;
  }
  return o2;
}
function ol(s16, t2) {
  let e2 = [], i = 0, r2 = t2[i], n2 = 0;
  for (let o2 = 0; o2 < s16.length; o2++) if (r2 === o2) {
    let l2 = t2[++i];
    s16.onDeleteEmitter.fire({ index: o2 - n2, amount: l2 }), o2 += l2 - 1, n2 += l2, r2 = t2[++i];
  } else e2.push(o2);
  return { layout: e2, countRemoved: n2 };
}
function ll(s16, t2) {
  let e2 = [];
  for (let i = 0; i < t2.length; i++) e2.push(s16.get(t2[i]));
  for (let i = 0; i < e2.length; i++) s16.set(i, e2[i]);
  s16.length = t2.length;
}
function al(s16, t2, e2) {
  let i = [], r2 = s16.map((a2, u2) => ri(s16, u2, t2)).reduce((a2, u2) => a2 + u2), n2 = 0, o2 = 0, l2 = 0;
  for (; l2 < r2; ) {
    if (r2 - l2 < e2) {
      i.push(r2 - l2);
      break;
    }
    n2 += e2;
    let a2 = ri(s16, o2, t2);
    n2 > a2 && (n2 -= a2, o2++);
    let u2 = s16[o2].getWidth(n2 - 1) === 2;
    u2 && n2--;
    let h2 = u2 ? e2 - 1 : e2;
    i.push(h2), l2 += h2;
  }
  return i;
}
function ri(s16, t2, e2) {
  if (t2 === s16.length - 1) return s16[t2].getTrimmedLength();
  let i = !s16[t2].hasContent(e2 - 1) && s16[t2].getWidth(e2 - 1) === 1, r2 = s16[t2 + 1].getWidth(0) === 2;
  return i && r2 ? e2 - 1 : e2;
}
var un = class un2 {
  constructor(t2) {
    this.line = t2;
    this.isDisposed = false;
    this._disposables = [];
    this._id = un2._nextId++;
    this._onDispose = this.register(new v());
    this.onDispose = this._onDispose.event;
  }
  get id() {
    return this._id;
  }
  dispose() {
    this.isDisposed || (this.isDisposed = true, this.line = -1, this._onDispose.fire(), Ne(this._disposables), this._disposables.length = 0);
  }
  register(t2) {
    return this._disposables.push(t2), t2;
  }
};
un._nextId = 1;
var cn = un;
var ne = {}, Je = ne.B;
ne[0] = { "`": "◆", a: "▒", b: "␉", c: "␌", d: "␍", e: "␊", f: "°", g: "±", h: "␤", i: "␋", j: "┘", k: "┐", l: "┌", m: "└", n: "┼", o: "⎺", p: "⎻", q: "─", r: "⎼", s: "⎽", t: "├", u: "┤", v: "┴", w: "┬", x: "│", y: "≤", z: "≥", "{": "π", "|": "≠", "}": "£", "~": "·" };
ne.A = { "#": "£" };
ne.B = void 0;
ne[4] = { "#": "£", "@": "¾", "[": "ij", "\\": "½", "]": "|", "{": "¨", "|": "f", "}": "¼", "~": "´" };
ne.C = ne[5] = { "[": "Ä", "\\": "Ö", "]": "Å", "^": "Ü", "`": "é", "{": "ä", "|": "ö", "}": "å", "~": "ü" };
ne.R = { "#": "£", "@": "à", "[": "°", "\\": "ç", "]": "§", "{": "é", "|": "ù", "}": "è", "~": "¨" };
ne.Q = { "@": "à", "[": "â", "\\": "ç", "]": "ê", "^": "î", "`": "ô", "{": "é", "|": "ù", "}": "è", "~": "û" };
ne.K = { "@": "§", "[": "Ä", "\\": "Ö", "]": "Ü", "{": "ä", "|": "ö", "}": "ü", "~": "ß" };
ne.Y = { "#": "£", "@": "§", "[": "°", "\\": "ç", "]": "é", "`": "ù", "{": "à", "|": "ò", "}": "è", "~": "ì" };
ne.E = ne[6] = { "@": "Ä", "[": "Æ", "\\": "Ø", "]": "Å", "^": "Ü", "`": "ä", "{": "æ", "|": "ø", "}": "å", "~": "ü" };
ne.Z = { "#": "£", "@": "§", "[": "¡", "\\": "Ñ", "]": "¿", "{": "°", "|": "ñ", "}": "ç" };
ne.H = ne[7] = { "@": "É", "[": "Ä", "\\": "Ö", "]": "Å", "^": "Ü", "`": "é", "{": "ä", "|": "ö", "}": "å", "~": "ü" };
ne["="] = { "#": "ù", "@": "à", "[": "é", "\\": "ç", "]": "ê", "^": "î", _: "è", "`": "ô", "{": "ä", "|": "ö", "}": "ü", "~": "û" };
var cl = 4294967295, $i = class {
  constructor(t2, e2, i) {
    this._hasScrollback = t2;
    this._optionsService = e2;
    this._bufferService = i;
    this.ydisp = 0;
    this.ybase = 0;
    this.y = 0;
    this.x = 0;
    this.tabs = {};
    this.savedY = 0;
    this.savedX = 0;
    this.savedCurAttrData = X.clone();
    this.savedCharset = Je;
    this.markers = [];
    this._nullCell = q.fromCharData([0, ir, 1, 0]);
    this._whitespaceCell = q.fromCharData([0, we, 1, 32]);
    this._isClearing = false;
    this._memoryCleanupQueue = new Jt();
    this._memoryCleanupPosition = 0;
    this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new zi(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
  }
  getNullCell(t2) {
    return t2 ? (this._nullCell.fg = t2.fg, this._nullCell.bg = t2.bg, this._nullCell.extended = t2.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new rt()), this._nullCell;
  }
  getWhitespaceCell(t2) {
    return t2 ? (this._whitespaceCell.fg = t2.fg, this._whitespaceCell.bg = t2.bg, this._whitespaceCell.extended = t2.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new rt()), this._whitespaceCell;
  }
  getBlankLine(t2, e2) {
    return new Ze(this._bufferService.cols, this.getNullCell(t2), e2);
  }
  get hasScrollback() {
    return this._hasScrollback && this.lines.maxLength > this._rows;
  }
  get isCursorInViewport() {
    let e2 = this.ybase + this.y - this.ydisp;
    return e2 >= 0 && e2 < this._rows;
  }
  _getCorrectBufferLength(t2) {
    if (!this._hasScrollback) return t2;
    let e2 = t2 + this._optionsService.rawOptions.scrollback;
    return e2 > cl ? cl : e2;
  }
  fillViewportRows(t2) {
    if (this.lines.length === 0) {
      t2 === void 0 && (t2 = X);
      let e2 = this._rows;
      for (; e2--; ) this.lines.push(this.getBlankLine(t2));
    }
  }
  clear() {
    this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new zi(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
  }
  resize(t2, e2) {
    let i = this.getNullCell(X), r2 = 0, n2 = this._getCorrectBufferLength(e2);
    if (n2 > this.lines.maxLength && (this.lines.maxLength = n2), this.lines.length > 0) {
      if (this._cols < t2) for (let l2 = 0; l2 < this.lines.length; l2++) r2 += +this.lines.get(l2).resize(t2, i);
      let o2 = 0;
      if (this._rows < e2) for (let l2 = this._rows; l2 < e2; l2++) this.lines.length < e2 + this.ybase && (this._optionsService.rawOptions.windowsMode || this._optionsService.rawOptions.windowsPty.backend !== void 0 || this._optionsService.rawOptions.windowsPty.buildNumber !== void 0 ? this.lines.push(new Ze(t2, i)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + o2 + 1 ? (this.ybase--, o2++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new Ze(t2, i)));
      else for (let l2 = this._rows; l2 > e2; l2--) this.lines.length > e2 + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
      if (n2 < this.lines.maxLength) {
        let l2 = this.lines.length - n2;
        l2 > 0 && (this.lines.trimStart(l2), this.ybase = Math.max(this.ybase - l2, 0), this.ydisp = Math.max(this.ydisp - l2, 0), this.savedY = Math.max(this.savedY - l2, 0)), this.lines.maxLength = n2;
      }
      this.x = Math.min(this.x, t2 - 1), this.y = Math.min(this.y, e2 - 1), o2 && (this.y += o2), this.savedX = Math.min(this.savedX, t2 - 1), this.scrollTop = 0;
    }
    if (this.scrollBottom = e2 - 1, this._isReflowEnabled && (this._reflow(t2, e2), this._cols > t2)) for (let o2 = 0; o2 < this.lines.length; o2++) r2 += +this.lines.get(o2).resize(t2, i);
    this._cols = t2, this._rows = e2, this._memoryCleanupQueue.clear(), r2 > 0.1 * this.lines.length && (this._memoryCleanupPosition = 0, this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup()));
  }
  _batchedMemoryCleanup() {
    let t2 = true;
    this._memoryCleanupPosition >= this.lines.length && (this._memoryCleanupPosition = 0, t2 = false);
    let e2 = 0;
    for (; this._memoryCleanupPosition < this.lines.length; ) if (e2 += this.lines.get(this._memoryCleanupPosition++).cleanupMemory(), e2 > 100) return true;
    return t2;
  }
  get _isReflowEnabled() {
    let t2 = this._optionsService.rawOptions.windowsPty;
    return t2 && t2.buildNumber ? this._hasScrollback && t2.backend === "conpty" && t2.buildNumber >= 21376 : this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
  }
  _reflow(t2, e2) {
    this._cols !== t2 && (t2 > this._cols ? this._reflowLarger(t2, e2) : this._reflowSmaller(t2, e2));
  }
  _reflowLarger(t2, e2) {
    let i = this._optionsService.rawOptions.reflowCursorLine, r2 = sl(this.lines, this._cols, t2, this.ybase + this.y, this.getNullCell(X), i);
    if (r2.length > 0) {
      let n2 = ol(this.lines, r2);
      ll(this.lines, n2.layout), this._reflowLargerAdjustViewport(t2, e2, n2.countRemoved);
    }
  }
  _reflowLargerAdjustViewport(t2, e2, i) {
    let r2 = this.getNullCell(X), n2 = i;
    for (; n2-- > 0; ) this.ybase === 0 ? (this.y > 0 && this.y--, this.lines.length < e2 && this.lines.push(new Ze(t2, r2))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
    this.savedY = Math.max(this.savedY - i, 0);
  }
  _reflowSmaller(t2, e2) {
    let i = this._optionsService.rawOptions.reflowCursorLine, r2 = this.getNullCell(X), n2 = [], o2 = 0;
    for (let l2 = this.lines.length - 1; l2 >= 0; l2--) {
      let a2 = this.lines.get(l2);
      if (!a2 || !a2.isWrapped && a2.getTrimmedLength() <= t2) continue;
      let u2 = [a2];
      for (; a2.isWrapped && l2 > 0; ) a2 = this.lines.get(--l2), u2.unshift(a2);
      if (!i) {
        let I2 = this.ybase + this.y;
        if (I2 >= l2 && I2 < l2 + u2.length) continue;
      }
      let h2 = u2[u2.length - 1].getTrimmedLength(), c2 = al(u2, this._cols, t2), d = c2.length - u2.length, _2;
      this.ybase === 0 && this.y !== this.lines.length - 1 ? _2 = Math.max(0, this.y - this.lines.maxLength + d) : _2 = Math.max(0, this.lines.length - this.lines.maxLength + d);
      let p2 = [];
      for (let I2 = 0; I2 < d; I2++) {
        let k2 = this.getBlankLine(X, true);
        p2.push(k2);
      }
      p2.length > 0 && (n2.push({ start: l2 + u2.length + o2, newLines: p2 }), o2 += p2.length), u2.push(...p2);
      let m2 = c2.length - 1, f2 = c2[m2];
      f2 === 0 && (m2--, f2 = c2[m2]);
      let A2 = u2.length - d - 1, R2 = h2;
      for (; A2 >= 0; ) {
        let I2 = Math.min(R2, f2);
        if (u2[m2] === void 0) break;
        if (u2[m2].copyCellsFrom(u2[A2], R2 - I2, f2 - I2, I2, true), f2 -= I2, f2 === 0 && (m2--, f2 = c2[m2]), R2 -= I2, R2 === 0) {
          A2--;
          let k2 = Math.max(A2, 0);
          R2 = ri(u2, k2, this._cols);
        }
      }
      for (let I2 = 0; I2 < u2.length; I2++) c2[I2] < t2 && u2[I2].setCell(c2[I2], r2);
      let O2 = d - _2;
      for (; O2-- > 0; ) this.ybase === 0 ? this.y < e2 - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + o2) - e2 && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
      this.savedY = Math.min(this.savedY + d, this.ybase + e2 - 1);
    }
    if (n2.length > 0) {
      let l2 = [], a2 = [];
      for (let f2 = 0; f2 < this.lines.length; f2++) a2.push(this.lines.get(f2));
      let u2 = this.lines.length, h2 = u2 - 1, c2 = 0, d = n2[c2];
      this.lines.length = Math.min(this.lines.maxLength, this.lines.length + o2);
      let _2 = 0;
      for (let f2 = Math.min(this.lines.maxLength - 1, u2 + o2 - 1); f2 >= 0; f2--) if (d && d.start > h2 + _2) {
        for (let A2 = d.newLines.length - 1; A2 >= 0; A2--) this.lines.set(f2--, d.newLines[A2]);
        f2++, l2.push({ index: h2 + 1, amount: d.newLines.length }), _2 += d.newLines.length, d = n2[++c2];
      } else this.lines.set(f2, a2[h2--]);
      let p2 = 0;
      for (let f2 = l2.length - 1; f2 >= 0; f2--) l2[f2].index += p2, this.lines.onInsertEmitter.fire(l2[f2]), p2 += l2[f2].amount;
      let m2 = Math.max(0, u2 + o2 - this.lines.maxLength);
      m2 > 0 && this.lines.onTrimEmitter.fire(m2);
    }
  }
  translateBufferLineToString(t2, e2, i = 0, r2) {
    let n2 = this.lines.get(t2);
    return n2 ? n2.translateToString(e2, i, r2) : "";
  }
  getWrappedRangeForLine(t2) {
    let e2 = t2, i = t2;
    for (; e2 > 0 && this.lines.get(e2).isWrapped; ) e2--;
    for (; i + 1 < this.lines.length && this.lines.get(i + 1).isWrapped; ) i++;
    return { first: e2, last: i };
  }
  setupTabStops(t2) {
    for (t2 != null ? this.tabs[t2] || (t2 = this.prevStop(t2)) : (this.tabs = {}, t2 = 0); t2 < this._cols; t2 += this._optionsService.rawOptions.tabStopWidth) this.tabs[t2] = true;
  }
  prevStop(t2) {
    for (t2 == null && (t2 = this.x); !this.tabs[--t2] && t2 > 0; ) ;
    return t2 >= this._cols ? this._cols - 1 : t2 < 0 ? 0 : t2;
  }
  nextStop(t2) {
    for (t2 == null && (t2 = this.x); !this.tabs[++t2] && t2 < this._cols; ) ;
    return t2 >= this._cols ? this._cols - 1 : t2 < 0 ? 0 : t2;
  }
  clearMarkers(t2) {
    this._isClearing = true;
    for (let e2 = 0; e2 < this.markers.length; e2++) this.markers[e2].line === t2 && (this.markers[e2].dispose(), this.markers.splice(e2--, 1));
    this._isClearing = false;
  }
  clearAllMarkers() {
    this._isClearing = true;
    for (let t2 = 0; t2 < this.markers.length; t2++) this.markers[t2].dispose();
    this.markers.length = 0, this._isClearing = false;
  }
  addMarker(t2) {
    let e2 = new cn(t2);
    return this.markers.push(e2), e2.register(this.lines.onTrim((i) => {
      e2.line -= i, e2.line < 0 && e2.dispose();
    })), e2.register(this.lines.onInsert((i) => {
      e2.line >= i.index && (e2.line += i.amount);
    })), e2.register(this.lines.onDelete((i) => {
      e2.line >= i.index && e2.line < i.index + i.amount && e2.dispose(), e2.line > i.index && (e2.line -= i.amount);
    })), e2.register(e2.onDispose(() => this._removeMarker(e2))), e2;
  }
  _removeMarker(t2) {
    this._isClearing || this.markers.splice(this.markers.indexOf(t2), 1);
  }
};
var hn = class extends D {
  constructor(e2, i) {
    super();
    this._optionsService = e2;
    this._bufferService = i;
    this._onBufferActivate = this._register(new v());
    this.onBufferActivate = this._onBufferActivate.event;
    this.reset(), this._register(this._optionsService.onSpecificOptionChange("scrollback", () => this.resize(this._bufferService.cols, this._bufferService.rows))), this._register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops()));
  }
  reset() {
    this._normal = new $i(true, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new $i(false, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }), this.setupTabStops();
  }
  get alt() {
    return this._alt;
  }
  get active() {
    return this._activeBuffer;
  }
  get normal() {
    return this._normal;
  }
  activateNormalBuffer() {
    this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clearAllMarkers(), this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }));
  }
  activateAltBuffer(e2) {
    this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e2), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({ activeBuffer: this._alt, inactiveBuffer: this._normal }));
  }
  resize(e2, i) {
    this._normal.resize(e2, i), this._alt.resize(e2, i), this.setupTabStops(e2);
  }
  setupTabStops(e2) {
    this._normal.setupTabStops(e2), this._alt.setupTabStops(e2);
  }
};
var ks = 2, Cs = 1, ni = class extends D {
  constructor(e2) {
    super();
    this.isUserScrolling = false;
    this._onResize = this._register(new v());
    this.onResize = this._onResize.event;
    this._onScroll = this._register(new v());
    this.onScroll = this._onScroll.event;
    this.cols = Math.max(e2.rawOptions.cols || 0, ks), this.rows = Math.max(e2.rawOptions.rows || 0, Cs), this.buffers = this._register(new hn(e2, this)), this._register(this.buffers.onBufferActivate((i) => {
      this._onScroll.fire(i.activeBuffer.ydisp);
    }));
  }
  get buffer() {
    return this.buffers.active;
  }
  resize(e2, i) {
    let r2 = this.cols !== e2, n2 = this.rows !== i;
    this.cols = e2, this.rows = i, this.buffers.resize(e2, i), this._onResize.fire({ cols: e2, rows: i, colsChanged: r2, rowsChanged: n2 });
  }
  reset() {
    this.buffers.reset(), this.isUserScrolling = false;
  }
  scroll(e2, i = false) {
    let r2 = this.buffer, n2;
    n2 = this._cachedBlankLine, (!n2 || n2.length !== this.cols || n2.getFg(0) !== e2.fg || n2.getBg(0) !== e2.bg) && (n2 = r2.getBlankLine(e2, i), this._cachedBlankLine = n2), n2.isWrapped = i;
    let o2 = r2.ybase + r2.scrollTop, l2 = r2.ybase + r2.scrollBottom;
    if (r2.scrollTop === 0) {
      let a2 = r2.lines.isFull;
      l2 === r2.lines.length - 1 ? a2 ? r2.lines.recycle().copyFrom(n2) : r2.lines.push(n2.clone()) : r2.lines.splice(l2 + 1, 0, n2.clone()), a2 ? this.isUserScrolling && (r2.ydisp = Math.max(r2.ydisp - 1, 0)) : (r2.ybase++, this.isUserScrolling || r2.ydisp++);
    } else {
      let a2 = l2 - o2 + 1;
      r2.lines.shiftElements(o2 + 1, a2 - 1, -1), r2.lines.set(l2, n2.clone());
    }
    this.isUserScrolling || (r2.ydisp = r2.ybase), this._onScroll.fire(r2.ydisp);
  }
  scrollLines(e2, i) {
    let r2 = this.buffer;
    if (e2 < 0) {
      if (r2.ydisp === 0) return;
      this.isUserScrolling = true;
    } else e2 + r2.ydisp >= r2.ybase && (this.isUserScrolling = false);
    let n2 = r2.ydisp;
    r2.ydisp = Math.max(Math.min(r2.ydisp + e2, r2.ybase), 0), n2 !== r2.ydisp && (i || this._onScroll.fire(r2.ydisp));
  }
};
ni = M([S(0, H)], ni);
var si = { cols: 80, rows: 24, cursorBlink: false, cursorStyle: "block", cursorWidth: 1, cursorInactiveStyle: "outline", customGlyphs: true, drawBoldTextInBrightColors: true, documentOverride: null, fastScrollModifier: "alt", fastScrollSensitivity: 5, fontFamily: "monospace", fontSize: 15, fontWeight: "normal", fontWeightBold: "bold", ignoreBracketedPasteMode: false, lineHeight: 1, letterSpacing: 0, linkHandler: null, logLevel: "info", logger: null, scrollback: 1e3, scrollOnEraseInDisplay: false, scrollOnUserInput: true, scrollSensitivity: 1, screenReaderMode: false, smoothScrollDuration: 0, macOptionIsMeta: false, macOptionClickForcesSelection: false, minimumContrastRatio: 1, disableStdin: false, allowProposedApi: false, allowTransparency: false, tabStopWidth: 8, theme: {}, reflowCursorLine: false, rescaleOverlappingGlyphs: false, rightClickSelectsWord: Zt, windowOptions: {}, windowsMode: false, windowsPty: {}, wordSeparator: " ()[]{}',\"`", altClickMovesCursor: true, convertEol: false, termName: "xterm", cancelEvents: false, overviewRuler: {} }, nc = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"], dn = class extends D {
  constructor(e2) {
    super();
    this._onOptionChange = this._register(new v());
    this.onOptionChange = this._onOptionChange.event;
    let i = { ...si };
    for (let r2 in e2) if (r2 in i) try {
      let n2 = e2[r2];
      i[r2] = this._sanitizeAndValidateOption(r2, n2);
    } catch (n2) {
      console.error(n2);
    }
    this.rawOptions = i, this.options = { ...i }, this._setupOptions(), this._register(C(() => {
      this.rawOptions.linkHandler = null, this.rawOptions.documentOverride = null;
    }));
  }
  onSpecificOptionChange(e2, i) {
    return this.onOptionChange((r2) => {
      r2 === e2 && i(this.rawOptions[e2]);
    });
  }
  onMultipleOptionChange(e2, i) {
    return this.onOptionChange((r2) => {
      e2.indexOf(r2) !== -1 && i();
    });
  }
  _setupOptions() {
    let e2 = (r2) => {
      if (!(r2 in si)) throw new Error(`No option with key "${r2}"`);
      return this.rawOptions[r2];
    }, i = (r2, n2) => {
      if (!(r2 in si)) throw new Error(`No option with key "${r2}"`);
      n2 = this._sanitizeAndValidateOption(r2, n2), this.rawOptions[r2] !== n2 && (this.rawOptions[r2] = n2, this._onOptionChange.fire(r2));
    };
    for (let r2 in this.rawOptions) {
      let n2 = { get: e2.bind(this, r2), set: i.bind(this, r2) };
      Object.defineProperty(this.options, r2, n2);
    }
  }
  _sanitizeAndValidateOption(e2, i) {
    switch (e2) {
      case "cursorStyle":
        if (i || (i = si[e2]), !sc(i)) throw new Error(`"${i}" is not a valid value for ${e2}`);
        break;
      case "wordSeparator":
        i || (i = si[e2]);
        break;
      case "fontWeight":
      case "fontWeightBold":
        if (typeof i == "number" && 1 <= i && i <= 1e3) break;
        i = nc.includes(i) ? i : si[e2];
        break;
      case "cursorWidth":
        i = Math.floor(i);
      case "lineHeight":
      case "tabStopWidth":
        if (i < 1) throw new Error(`${e2} cannot be less than 1, value: ${i}`);
        break;
      case "minimumContrastRatio":
        i = Math.max(1, Math.min(21, Math.round(i * 10) / 10));
        break;
      case "scrollback":
        if (i = Math.min(i, 4294967295), i < 0) throw new Error(`${e2} cannot be less than 0, value: ${i}`);
        break;
      case "fastScrollSensitivity":
      case "scrollSensitivity":
        if (i <= 0) throw new Error(`${e2} cannot be less than or equal to 0, value: ${i}`);
        break;
      case "rows":
      case "cols":
        if (!i && i !== 0) throw new Error(`${e2} must be numeric, value: ${i}`);
        break;
      case "windowsPty":
        i = i ?? {};
        break;
    }
    return i;
  }
};
function sc(s16) {
  return s16 === "block" || s16 === "underline" || s16 === "bar";
}
function oi(s16, t2 = 5) {
  if (typeof s16 != "object") return s16;
  let e2 = Array.isArray(s16) ? [] : {};
  for (let i in s16) e2[i] = t2 <= 1 ? s16[i] : s16[i] && oi(s16[i], t2 - 1);
  return e2;
}
var ul = Object.freeze({ insertMode: false }), hl = Object.freeze({ applicationCursorKeys: false, applicationKeypad: false, bracketedPasteMode: false, cursorBlink: void 0, cursorStyle: void 0, origin: false, reverseWraparound: false, sendFocus: false, synchronizedOutput: false, wraparound: true }), li = class extends D {
  constructor(e2, i, r2) {
    super();
    this._bufferService = e2;
    this._logService = i;
    this._optionsService = r2;
    this.isCursorInitialized = false;
    this.isCursorHidden = false;
    this._onData = this._register(new v());
    this.onData = this._onData.event;
    this._onUserInput = this._register(new v());
    this.onUserInput = this._onUserInput.event;
    this._onBinary = this._register(new v());
    this.onBinary = this._onBinary.event;
    this._onRequestScrollToBottom = this._register(new v());
    this.onRequestScrollToBottom = this._onRequestScrollToBottom.event;
    this.modes = oi(ul), this.decPrivateModes = oi(hl);
  }
  reset() {
    this.modes = oi(ul), this.decPrivateModes = oi(hl);
  }
  triggerDataEvent(e2, i = false) {
    if (this._optionsService.rawOptions.disableStdin) return;
    let r2 = this._bufferService.buffer;
    i && this._optionsService.rawOptions.scrollOnUserInput && r2.ybase !== r2.ydisp && this._onRequestScrollToBottom.fire(), i && this._onUserInput.fire(), this._logService.debug(`sending data "${e2}"`), this._logService.trace("sending data (codes)", () => e2.split("").map((n2) => n2.charCodeAt(0))), this._onData.fire(e2);
  }
  triggerBinaryEvent(e2) {
    this._optionsService.rawOptions.disableStdin || (this._logService.debug(`sending binary "${e2}"`), this._logService.trace("sending binary (codes)", () => e2.split("").map((i) => i.charCodeAt(0))), this._onBinary.fire(e2));
  }
};
li = M([S(0, F), S(1, nr), S(2, H)], li);
var dl = { NONE: { events: 0, restrict: () => false }, X10: { events: 1, restrict: (s16) => s16.button === 4 || s16.action !== 1 ? false : (s16.ctrl = false, s16.alt = false, s16.shift = false, true) }, VT200: { events: 19, restrict: (s16) => s16.action !== 32 }, DRAG: { events: 23, restrict: (s16) => !(s16.action === 32 && s16.button === 3) }, ANY: { events: 31, restrict: (s16) => true } };
function Ms(s16, t2) {
  let e2 = (s16.ctrl ? 16 : 0) | (s16.shift ? 4 : 0) | (s16.alt ? 8 : 0);
  return s16.button === 4 ? (e2 |= 64, e2 |= s16.action) : (e2 |= s16.button & 3, s16.button & 4 && (e2 |= 64), s16.button & 8 && (e2 |= 128), s16.action === 32 ? e2 |= 32 : s16.action === 0 && !t2 && (e2 |= 3)), e2;
}
var Ps = String.fromCharCode, fl = { DEFAULT: (s16) => {
  let t2 = [Ms(s16, false) + 32, s16.col + 32, s16.row + 32];
  return t2[0] > 255 || t2[1] > 255 || t2[2] > 255 ? "" : `\x1B[M${Ps(t2[0])}${Ps(t2[1])}${Ps(t2[2])}`;
}, SGR: (s16) => {
  let t2 = s16.action === 0 && s16.button !== 4 ? "m" : "M";
  return `\x1B[<${Ms(s16, true)};${s16.col};${s16.row}${t2}`;
}, SGR_PIXELS: (s16) => {
  let t2 = s16.action === 0 && s16.button !== 4 ? "m" : "M";
  return `\x1B[<${Ms(s16, true)};${s16.x};${s16.y}${t2}`;
} }, ai = class extends D {
  constructor(e2, i, r2) {
    super();
    this._bufferService = e2;
    this._coreService = i;
    this._optionsService = r2;
    this._protocols = {};
    this._encodings = {};
    this._activeProtocol = "";
    this._activeEncoding = "";
    this._lastEvent = null;
    this._wheelPartialScroll = 0;
    this._onProtocolChange = this._register(new v());
    this.onProtocolChange = this._onProtocolChange.event;
    for (let n2 of Object.keys(dl)) this.addProtocol(n2, dl[n2]);
    for (let n2 of Object.keys(fl)) this.addEncoding(n2, fl[n2]);
    this.reset();
  }
  addProtocol(e2, i) {
    this._protocols[e2] = i;
  }
  addEncoding(e2, i) {
    this._encodings[e2] = i;
  }
  get activeProtocol() {
    return this._activeProtocol;
  }
  get areMouseEventsActive() {
    return this._protocols[this._activeProtocol].events !== 0;
  }
  set activeProtocol(e2) {
    if (!this._protocols[e2]) throw new Error(`unknown protocol "${e2}"`);
    this._activeProtocol = e2, this._onProtocolChange.fire(this._protocols[e2].events);
  }
  get activeEncoding() {
    return this._activeEncoding;
  }
  set activeEncoding(e2) {
    if (!this._encodings[e2]) throw new Error(`unknown encoding "${e2}"`);
    this._activeEncoding = e2;
  }
  reset() {
    this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null, this._wheelPartialScroll = 0;
  }
  consumeWheelEvent(e2, i, r2) {
    if (e2.deltaY === 0 || e2.shiftKey || i === void 0 || r2 === void 0) return 0;
    let n2 = i / r2, o2 = this._applyScrollModifier(e2.deltaY, e2);
    return e2.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (o2 /= n2 + 0, Math.abs(e2.deltaY) < 50 && (o2 *= 0.3), this._wheelPartialScroll += o2, o2 = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e2.deltaMode === WheelEvent.DOM_DELTA_PAGE && (o2 *= this._bufferService.rows), o2;
  }
  _applyScrollModifier(e2, i) {
    return i.altKey || i.ctrlKey || i.shiftKey ? e2 * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e2 * this._optionsService.rawOptions.scrollSensitivity;
  }
  triggerMouseEvent(e2) {
    if (e2.col < 0 || e2.col >= this._bufferService.cols || e2.row < 0 || e2.row >= this._bufferService.rows || e2.button === 4 && e2.action === 32 || e2.button === 3 && e2.action !== 32 || e2.button !== 4 && (e2.action === 2 || e2.action === 3) || (e2.col++, e2.row++, e2.action === 32 && this._lastEvent && this._equalEvents(this._lastEvent, e2, this._activeEncoding === "SGR_PIXELS")) || !this._protocols[this._activeProtocol].restrict(e2)) return false;
    let i = this._encodings[this._activeEncoding](e2);
    return i && (this._activeEncoding === "DEFAULT" ? this._coreService.triggerBinaryEvent(i) : this._coreService.triggerDataEvent(i, true)), this._lastEvent = e2, true;
  }
  explainEvents(e2) {
    return { down: !!(e2 & 1), up: !!(e2 & 2), drag: !!(e2 & 4), move: !!(e2 & 8), wheel: !!(e2 & 16) };
  }
  _equalEvents(e2, i, r2) {
    if (r2) {
      if (e2.x !== i.x || e2.y !== i.y) return false;
    } else if (e2.col !== i.col || e2.row !== i.row) return false;
    return !(e2.button !== i.button || e2.action !== i.action || e2.ctrl !== i.ctrl || e2.alt !== i.alt || e2.shift !== i.shift);
  }
};
ai = M([S(0, F), S(1, ge), S(2, H)], ai);
var Os = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]], ac = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]], se;
function cc(s16, t2) {
  let e2 = 0, i = t2.length - 1, r2;
  if (s16 < t2[0][0] || s16 > t2[i][1]) return false;
  for (; i >= e2; ) if (r2 = e2 + i >> 1, s16 > t2[r2][1]) e2 = r2 + 1;
  else if (s16 < t2[r2][0]) i = r2 - 1;
  else return true;
  return false;
}
var fn = class {
  constructor() {
    this.version = "6";
    if (!se) {
      se = new Uint8Array(65536), se.fill(1), se[0] = 0, se.fill(0, 1, 32), se.fill(0, 127, 160), se.fill(2, 4352, 4448), se[9001] = 2, se[9002] = 2, se.fill(2, 11904, 42192), se[12351] = 1, se.fill(2, 44032, 55204), se.fill(2, 63744, 64256), se.fill(2, 65040, 65050), se.fill(2, 65072, 65136), se.fill(2, 65280, 65377), se.fill(2, 65504, 65511);
      for (let t2 = 0; t2 < Os.length; ++t2) se.fill(0, Os[t2][0], Os[t2][1] + 1);
    }
  }
  wcwidth(t2) {
    return t2 < 32 ? 0 : t2 < 127 ? 1 : t2 < 65536 ? se[t2] : cc(t2, ac) ? 0 : t2 >= 131072 && t2 <= 196605 || t2 >= 196608 && t2 <= 262141 ? 2 : 1;
  }
  charProperties(t2, e2) {
    let i = this.wcwidth(t2), r2 = i === 0 && e2 !== 0;
    if (r2) {
      let n2 = Ae.extractWidth(e2);
      n2 === 0 ? r2 = false : n2 > i && (i = n2);
    }
    return Ae.createPropertyValue(0, i, r2);
  }
};
var Ae = class s14 {
  constructor() {
    this._providers = /* @__PURE__ */ Object.create(null);
    this._active = "";
    this._onChange = new v();
    this.onChange = this._onChange.event;
    let t2 = new fn();
    this.register(t2), this._active = t2.version, this._activeProvider = t2;
  }
  static extractShouldJoin(t2) {
    return (t2 & 1) !== 0;
  }
  static extractWidth(t2) {
    return t2 >> 1 & 3;
  }
  static extractCharKind(t2) {
    return t2 >> 3;
  }
  static createPropertyValue(t2, e2, i = false) {
    return (t2 & 16777215) << 3 | (e2 & 3) << 1 | (i ? 1 : 0);
  }
  dispose() {
    this._onChange.dispose();
  }
  get versions() {
    return Object.keys(this._providers);
  }
  get activeVersion() {
    return this._active;
  }
  set activeVersion(t2) {
    if (!this._providers[t2]) throw new Error(`unknown Unicode version "${t2}"`);
    this._active = t2, this._activeProvider = this._providers[t2], this._onChange.fire(t2);
  }
  register(t2) {
    this._providers[t2.version] = t2;
  }
  wcwidth(t2) {
    return this._activeProvider.wcwidth(t2);
  }
  getStringCellWidth(t2) {
    let e2 = 0, i = 0, r2 = t2.length;
    for (let n2 = 0; n2 < r2; ++n2) {
      let o2 = t2.charCodeAt(n2);
      if (55296 <= o2 && o2 <= 56319) {
        if (++n2 >= r2) return e2 + this.wcwidth(o2);
        let u2 = t2.charCodeAt(n2);
        56320 <= u2 && u2 <= 57343 ? o2 = (o2 - 55296) * 1024 + u2 - 56320 + 65536 : e2 += this.wcwidth(u2);
      }
      let l2 = this.charProperties(o2, i), a2 = s14.extractWidth(l2);
      s14.extractShouldJoin(l2) && (a2 -= s14.extractWidth(i)), e2 += a2, i = l2;
    }
    return e2;
  }
  charProperties(t2, e2) {
    return this._activeProvider.charProperties(t2, e2);
  }
};
var pn = class {
  constructor() {
    this.glevel = 0;
    this._charsets = [];
  }
  reset() {
    this.charset = void 0, this._charsets = [], this.glevel = 0;
  }
  setgLevel(t2) {
    this.glevel = t2, this.charset = this._charsets[t2];
  }
  setgCharset(t2, e2) {
    this._charsets[t2] = e2, this.glevel === t2 && (this.charset = e2);
  }
};
function Bs(s16) {
  let e2 = s16.buffer.lines.get(s16.buffer.ybase + s16.buffer.y - 1)?.get(s16.cols - 1), i = s16.buffer.lines.get(s16.buffer.ybase + s16.buffer.y);
  i && e2 && (i.isWrapped = e2[3] !== 0 && e2[3] !== 32);
}
var Vi = 2147483647, uc = 256, ci = class s15 {
  constructor(t2 = 32, e2 = 32) {
    this.maxLength = t2;
    this.maxSubParamsLength = e2;
    if (e2 > uc) throw new Error("maxSubParamsLength must not be greater than 256");
    this.params = new Int32Array(t2), this.length = 0, this._subParams = new Int32Array(e2), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(t2), this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
  }
  static fromArray(t2) {
    let e2 = new s15();
    if (!t2.length) return e2;
    for (let i = Array.isArray(t2[0]) ? 1 : 0; i < t2.length; ++i) {
      let r2 = t2[i];
      if (Array.isArray(r2)) for (let n2 = 0; n2 < r2.length; ++n2) e2.addSubParam(r2[n2]);
      else e2.addParam(r2);
    }
    return e2;
  }
  clone() {
    let t2 = new s15(this.maxLength, this.maxSubParamsLength);
    return t2.params.set(this.params), t2.length = this.length, t2._subParams.set(this._subParams), t2._subParamsLength = this._subParamsLength, t2._subParamsIdx.set(this._subParamsIdx), t2._rejectDigits = this._rejectDigits, t2._rejectSubDigits = this._rejectSubDigits, t2._digitIsSub = this._digitIsSub, t2;
  }
  toArray() {
    let t2 = [];
    for (let e2 = 0; e2 < this.length; ++e2) {
      t2.push(this.params[e2]);
      let i = this._subParamsIdx[e2] >> 8, r2 = this._subParamsIdx[e2] & 255;
      r2 - i > 0 && t2.push(Array.prototype.slice.call(this._subParams, i, r2));
    }
    return t2;
  }
  reset() {
    this.length = 0, this._subParamsLength = 0, this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
  }
  addParam(t2) {
    if (this._digitIsSub = false, this.length >= this.maxLength) {
      this._rejectDigits = true;
      return;
    }
    if (t2 < -1) throw new Error("values lesser than -1 are not allowed");
    this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = t2 > Vi ? Vi : t2;
  }
  addSubParam(t2) {
    if (this._digitIsSub = true, !!this.length) {
      if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) {
        this._rejectSubDigits = true;
        return;
      }
      if (t2 < -1) throw new Error("values lesser than -1 are not allowed");
      this._subParams[this._subParamsLength++] = t2 > Vi ? Vi : t2, this._subParamsIdx[this.length - 1]++;
    }
  }
  hasSubParams(t2) {
    return (this._subParamsIdx[t2] & 255) - (this._subParamsIdx[t2] >> 8) > 0;
  }
  getSubParams(t2) {
    let e2 = this._subParamsIdx[t2] >> 8, i = this._subParamsIdx[t2] & 255;
    return i - e2 > 0 ? this._subParams.subarray(e2, i) : null;
  }
  getSubParamsAll() {
    let t2 = {};
    for (let e2 = 0; e2 < this.length; ++e2) {
      let i = this._subParamsIdx[e2] >> 8, r2 = this._subParamsIdx[e2] & 255;
      r2 - i > 0 && (t2[e2] = this._subParams.slice(i, r2));
    }
    return t2;
  }
  addDigit(t2) {
    let e2;
    if (this._rejectDigits || !(e2 = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits) return;
    let i = this._digitIsSub ? this._subParams : this.params, r2 = i[e2 - 1];
    i[e2 - 1] = ~r2 ? Math.min(r2 * 10 + t2, Vi) : t2;
  }
};
var qi = [], mn = class {
  constructor() {
    this._state = 0;
    this._active = qi;
    this._id = -1;
    this._handlers = /* @__PURE__ */ Object.create(null);
    this._handlerFb = () => {
    };
    this._stack = { paused: false, loopPosition: 0, fallThrough: false };
  }
  registerHandler(t2, e2) {
    this._handlers[t2] === void 0 && (this._handlers[t2] = []);
    let i = this._handlers[t2];
    return i.push(e2), { dispose: () => {
      let r2 = i.indexOf(e2);
      r2 !== -1 && i.splice(r2, 1);
    } };
  }
  clearHandler(t2) {
    this._handlers[t2] && delete this._handlers[t2];
  }
  setHandlerFallback(t2) {
    this._handlerFb = t2;
  }
  dispose() {
    this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
    }, this._active = qi;
  }
  reset() {
    if (this._state === 2) for (let t2 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; t2 >= 0; --t2) this._active[t2].end(false);
    this._stack.paused = false, this._active = qi, this._id = -1, this._state = 0;
  }
  _start() {
    if (this._active = this._handlers[this._id] || qi, !this._active.length) this._handlerFb(this._id, "START");
    else for (let t2 = this._active.length - 1; t2 >= 0; t2--) this._active[t2].start();
  }
  _put(t2, e2, i) {
    if (!this._active.length) this._handlerFb(this._id, "PUT", It(t2, e2, i));
    else for (let r2 = this._active.length - 1; r2 >= 0; r2--) this._active[r2].put(t2, e2, i);
  }
  start() {
    this.reset(), this._state = 1;
  }
  put(t2, e2, i) {
    if (this._state !== 3) {
      if (this._state === 1) for (; e2 < i; ) {
        let r2 = t2[e2++];
        if (r2 === 59) {
          this._state = 2, this._start();
          break;
        }
        if (r2 < 48 || 57 < r2) {
          this._state = 3;
          return;
        }
        this._id === -1 && (this._id = 0), this._id = this._id * 10 + r2 - 48;
      }
      this._state === 2 && i - e2 > 0 && this._put(t2, e2, i);
    }
  }
  end(t2, e2 = true) {
    if (this._state !== 0) {
      if (this._state !== 3) if (this._state === 1 && this._start(), !this._active.length) this._handlerFb(this._id, "END", t2);
      else {
        let i = false, r2 = this._active.length - 1, n2 = false;
        if (this._stack.paused && (r2 = this._stack.loopPosition - 1, i = e2, n2 = this._stack.fallThrough, this._stack.paused = false), !n2 && i === false) {
          for (; r2 >= 0 && (i = this._active[r2].end(t2), i !== true); r2--) if (i instanceof Promise) return this._stack.paused = true, this._stack.loopPosition = r2, this._stack.fallThrough = false, i;
          r2--;
        }
        for (; r2 >= 0; r2--) if (i = this._active[r2].end(false), i instanceof Promise) return this._stack.paused = true, this._stack.loopPosition = r2, this._stack.fallThrough = true, i;
      }
      this._active = qi, this._id = -1, this._state = 0;
    }
  }
}, pe = class {
  constructor(t2) {
    this._handler = t2;
    this._data = "";
    this._hitLimit = false;
  }
  start() {
    this._data = "", this._hitLimit = false;
  }
  put(t2, e2, i) {
    this._hitLimit || (this._data += It(t2, e2, i), this._data.length > 1e7 && (this._data = "", this._hitLimit = true));
  }
  end(t2) {
    let e2 = false;
    if (this._hitLimit) e2 = false;
    else if (t2 && (e2 = this._handler(this._data), e2 instanceof Promise)) return e2.then((i) => (this._data = "", this._hitLimit = false, i));
    return this._data = "", this._hitLimit = false, e2;
  }
};
var Yi = [], _n = class {
  constructor() {
    this._handlers = /* @__PURE__ */ Object.create(null);
    this._active = Yi;
    this._ident = 0;
    this._handlerFb = () => {
    };
    this._stack = { paused: false, loopPosition: 0, fallThrough: false };
  }
  dispose() {
    this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
    }, this._active = Yi;
  }
  registerHandler(t2, e2) {
    this._handlers[t2] === void 0 && (this._handlers[t2] = []);
    let i = this._handlers[t2];
    return i.push(e2), { dispose: () => {
      let r2 = i.indexOf(e2);
      r2 !== -1 && i.splice(r2, 1);
    } };
  }
  clearHandler(t2) {
    this._handlers[t2] && delete this._handlers[t2];
  }
  setHandlerFallback(t2) {
    this._handlerFb = t2;
  }
  reset() {
    if (this._active.length) for (let t2 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; t2 >= 0; --t2) this._active[t2].unhook(false);
    this._stack.paused = false, this._active = Yi, this._ident = 0;
  }
  hook(t2, e2) {
    if (this.reset(), this._ident = t2, this._active = this._handlers[t2] || Yi, !this._active.length) this._handlerFb(this._ident, "HOOK", e2);
    else for (let i = this._active.length - 1; i >= 0; i--) this._active[i].hook(e2);
  }
  put(t2, e2, i) {
    if (!this._active.length) this._handlerFb(this._ident, "PUT", It(t2, e2, i));
    else for (let r2 = this._active.length - 1; r2 >= 0; r2--) this._active[r2].put(t2, e2, i);
  }
  unhook(t2, e2 = true) {
    if (!this._active.length) this._handlerFb(this._ident, "UNHOOK", t2);
    else {
      let i = false, r2 = this._active.length - 1, n2 = false;
      if (this._stack.paused && (r2 = this._stack.loopPosition - 1, i = e2, n2 = this._stack.fallThrough, this._stack.paused = false), !n2 && i === false) {
        for (; r2 >= 0 && (i = this._active[r2].unhook(t2), i !== true); r2--) if (i instanceof Promise) return this._stack.paused = true, this._stack.loopPosition = r2, this._stack.fallThrough = false, i;
        r2--;
      }
      for (; r2 >= 0; r2--) if (i = this._active[r2].unhook(false), i instanceof Promise) return this._stack.paused = true, this._stack.loopPosition = r2, this._stack.fallThrough = true, i;
    }
    this._active = Yi, this._ident = 0;
  }
}, ji = new ci();
ji.addParam(0);
var Xi = class {
  constructor(t2) {
    this._handler = t2;
    this._data = "";
    this._params = ji;
    this._hitLimit = false;
  }
  hook(t2) {
    this._params = t2.length > 1 || t2.params[0] ? t2.clone() : ji, this._data = "", this._hitLimit = false;
  }
  put(t2, e2, i) {
    this._hitLimit || (this._data += It(t2, e2, i), this._data.length > 1e7 && (this._data = "", this._hitLimit = true));
  }
  unhook(t2) {
    let e2 = false;
    if (this._hitLimit) e2 = false;
    else if (t2 && (e2 = this._handler(this._data, this._params), e2 instanceof Promise)) return e2.then((i) => (this._params = ji, this._data = "", this._hitLimit = false, i));
    return this._params = ji, this._data = "", this._hitLimit = false, e2;
  }
};
var Fs = class {
  constructor(t2) {
    this.table = new Uint8Array(t2);
  }
  setDefault(t2, e2) {
    this.table.fill(t2 << 4 | e2);
  }
  add(t2, e2, i, r2) {
    this.table[e2 << 8 | t2] = i << 4 | r2;
  }
  addMany(t2, e2, i, r2) {
    for (let n2 = 0; n2 < t2.length; n2++) this.table[e2 << 8 | t2[n2]] = i << 4 | r2;
  }
}, ke = 160, hc = function() {
  let s16 = new Fs(4095), e2 = Array.apply(null, Array(256)).map((a2, u2) => u2), i = (a2, u2) => e2.slice(a2, u2), r2 = i(32, 127), n2 = i(0, 24);
  n2.push(25), n2.push.apply(n2, i(28, 32));
  let o2 = i(0, 14), l2;
  s16.setDefault(1, 0), s16.addMany(r2, 0, 2, 0);
  for (l2 in o2) s16.addMany([24, 26, 153, 154], l2, 3, 0), s16.addMany(i(128, 144), l2, 3, 0), s16.addMany(i(144, 152), l2, 3, 0), s16.add(156, l2, 0, 0), s16.add(27, l2, 11, 1), s16.add(157, l2, 4, 8), s16.addMany([152, 158, 159], l2, 0, 7), s16.add(155, l2, 11, 3), s16.add(144, l2, 11, 9);
  return s16.addMany(n2, 0, 3, 0), s16.addMany(n2, 1, 3, 1), s16.add(127, 1, 0, 1), s16.addMany(n2, 8, 0, 8), s16.addMany(n2, 3, 3, 3), s16.add(127, 3, 0, 3), s16.addMany(n2, 4, 3, 4), s16.add(127, 4, 0, 4), s16.addMany(n2, 6, 3, 6), s16.addMany(n2, 5, 3, 5), s16.add(127, 5, 0, 5), s16.addMany(n2, 2, 3, 2), s16.add(127, 2, 0, 2), s16.add(93, 1, 4, 8), s16.addMany(r2, 8, 5, 8), s16.add(127, 8, 5, 8), s16.addMany([156, 27, 24, 26, 7], 8, 6, 0), s16.addMany(i(28, 32), 8, 0, 8), s16.addMany([88, 94, 95], 1, 0, 7), s16.addMany(r2, 7, 0, 7), s16.addMany(n2, 7, 0, 7), s16.add(156, 7, 0, 0), s16.add(127, 7, 0, 7), s16.add(91, 1, 11, 3), s16.addMany(i(64, 127), 3, 7, 0), s16.addMany(i(48, 60), 3, 8, 4), s16.addMany([60, 61, 62, 63], 3, 9, 4), s16.addMany(i(48, 60), 4, 8, 4), s16.addMany(i(64, 127), 4, 7, 0), s16.addMany([60, 61, 62, 63], 4, 0, 6), s16.addMany(i(32, 64), 6, 0, 6), s16.add(127, 6, 0, 6), s16.addMany(i(64, 127), 6, 0, 0), s16.addMany(i(32, 48), 3, 9, 5), s16.addMany(i(32, 48), 5, 9, 5), s16.addMany(i(48, 64), 5, 0, 6), s16.addMany(i(64, 127), 5, 7, 0), s16.addMany(i(32, 48), 4, 9, 5), s16.addMany(i(32, 48), 1, 9, 2), s16.addMany(i(32, 48), 2, 9, 2), s16.addMany(i(48, 127), 2, 10, 0), s16.addMany(i(48, 80), 1, 10, 0), s16.addMany(i(81, 88), 1, 10, 0), s16.addMany([89, 90, 92], 1, 10, 0), s16.addMany(i(96, 127), 1, 10, 0), s16.add(80, 1, 11, 9), s16.addMany(n2, 9, 0, 9), s16.add(127, 9, 0, 9), s16.addMany(i(28, 32), 9, 0, 9), s16.addMany(i(32, 48), 9, 9, 12), s16.addMany(i(48, 60), 9, 8, 10), s16.addMany([60, 61, 62, 63], 9, 9, 10), s16.addMany(n2, 11, 0, 11), s16.addMany(i(32, 128), 11, 0, 11), s16.addMany(i(28, 32), 11, 0, 11), s16.addMany(n2, 10, 0, 10), s16.add(127, 10, 0, 10), s16.addMany(i(28, 32), 10, 0, 10), s16.addMany(i(48, 60), 10, 8, 10), s16.addMany([60, 61, 62, 63], 10, 0, 11), s16.addMany(i(32, 48), 10, 9, 12), s16.addMany(n2, 12, 0, 12), s16.add(127, 12, 0, 12), s16.addMany(i(28, 32), 12, 0, 12), s16.addMany(i(32, 48), 12, 9, 12), s16.addMany(i(48, 64), 12, 0, 11), s16.addMany(i(64, 127), 12, 12, 13), s16.addMany(i(64, 127), 10, 12, 13), s16.addMany(i(64, 127), 9, 12, 13), s16.addMany(n2, 13, 13, 13), s16.addMany(r2, 13, 13, 13), s16.add(127, 13, 0, 13), s16.addMany([27, 156, 24, 26], 13, 14, 0), s16.add(ke, 0, 2, 0), s16.add(ke, 8, 5, 8), s16.add(ke, 6, 0, 6), s16.add(ke, 11, 0, 11), s16.add(ke, 13, 13, 13), s16;
}(), bn = class extends D {
  constructor(e2 = hc) {
    super();
    this._transitions = e2;
    this._parseStack = { state: 0, handlers: [], handlerPos: 0, transition: 0, chunkPos: 0 };
    this.initialState = 0, this.currentState = this.initialState, this._params = new ci(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._printHandlerFb = (i, r2, n2) => {
    }, this._executeHandlerFb = (i) => {
    }, this._csiHandlerFb = (i, r2) => {
    }, this._escHandlerFb = (i) => {
    }, this._errorHandlerFb = (i) => i, this._printHandler = this._printHandlerFb, this._executeHandlers = /* @__PURE__ */ Object.create(null), this._csiHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null), this._register(C(() => {
      this._csiHandlers = /* @__PURE__ */ Object.create(null), this._executeHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null);
    })), this._oscParser = this._register(new mn()), this._dcsParser = this._register(new _n()), this._errorHandler = this._errorHandlerFb, this.registerEscHandler({ final: "\\" }, () => true);
  }
  _identifier(e2, i = [64, 126]) {
    let r2 = 0;
    if (e2.prefix) {
      if (e2.prefix.length > 1) throw new Error("only one byte as prefix supported");
      if (r2 = e2.prefix.charCodeAt(0), r2 && 60 > r2 || r2 > 63) throw new Error("prefix must be in range 0x3c .. 0x3f");
    }
    if (e2.intermediates) {
      if (e2.intermediates.length > 2) throw new Error("only two bytes as intermediates are supported");
      for (let o2 = 0; o2 < e2.intermediates.length; ++o2) {
        let l2 = e2.intermediates.charCodeAt(o2);
        if (32 > l2 || l2 > 47) throw new Error("intermediate must be in range 0x20 .. 0x2f");
        r2 <<= 8, r2 |= l2;
      }
    }
    if (e2.final.length !== 1) throw new Error("final must be a single byte");
    let n2 = e2.final.charCodeAt(0);
    if (i[0] > n2 || n2 > i[1]) throw new Error(`final must be in range ${i[0]} .. ${i[1]}`);
    return r2 <<= 8, r2 |= n2, r2;
  }
  identToString(e2) {
    let i = [];
    for (; e2; ) i.push(String.fromCharCode(e2 & 255)), e2 >>= 8;
    return i.reverse().join("");
  }
  setPrintHandler(e2) {
    this._printHandler = e2;
  }
  clearPrintHandler() {
    this._printHandler = this._printHandlerFb;
  }
  registerEscHandler(e2, i) {
    let r2 = this._identifier(e2, [48, 126]);
    this._escHandlers[r2] === void 0 && (this._escHandlers[r2] = []);
    let n2 = this._escHandlers[r2];
    return n2.push(i), { dispose: () => {
      let o2 = n2.indexOf(i);
      o2 !== -1 && n2.splice(o2, 1);
    } };
  }
  clearEscHandler(e2) {
    this._escHandlers[this._identifier(e2, [48, 126])] && delete this._escHandlers[this._identifier(e2, [48, 126])];
  }
  setEscHandlerFallback(e2) {
    this._escHandlerFb = e2;
  }
  setExecuteHandler(e2, i) {
    this._executeHandlers[e2.charCodeAt(0)] = i;
  }
  clearExecuteHandler(e2) {
    this._executeHandlers[e2.charCodeAt(0)] && delete this._executeHandlers[e2.charCodeAt(0)];
  }
  setExecuteHandlerFallback(e2) {
    this._executeHandlerFb = e2;
  }
  registerCsiHandler(e2, i) {
    let r2 = this._identifier(e2);
    this._csiHandlers[r2] === void 0 && (this._csiHandlers[r2] = []);
    let n2 = this._csiHandlers[r2];
    return n2.push(i), { dispose: () => {
      let o2 = n2.indexOf(i);
      o2 !== -1 && n2.splice(o2, 1);
    } };
  }
  clearCsiHandler(e2) {
    this._csiHandlers[this._identifier(e2)] && delete this._csiHandlers[this._identifier(e2)];
  }
  setCsiHandlerFallback(e2) {
    this._csiHandlerFb = e2;
  }
  registerDcsHandler(e2, i) {
    return this._dcsParser.registerHandler(this._identifier(e2), i);
  }
  clearDcsHandler(e2) {
    this._dcsParser.clearHandler(this._identifier(e2));
  }
  setDcsHandlerFallback(e2) {
    this._dcsParser.setHandlerFallback(e2);
  }
  registerOscHandler(e2, i) {
    return this._oscParser.registerHandler(e2, i);
  }
  clearOscHandler(e2) {
    this._oscParser.clearHandler(e2);
  }
  setOscHandlerFallback(e2) {
    this._oscParser.setHandlerFallback(e2);
  }
  setErrorHandler(e2) {
    this._errorHandler = e2;
  }
  clearErrorHandler() {
    this._errorHandler = this._errorHandlerFb;
  }
  reset() {
    this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._parseStack.state !== 0 && (this._parseStack.state = 2, this._parseStack.handlers = []);
  }
  _preserveStack(e2, i, r2, n2, o2) {
    this._parseStack.state = e2, this._parseStack.handlers = i, this._parseStack.handlerPos = r2, this._parseStack.transition = n2, this._parseStack.chunkPos = o2;
  }
  parse(e2, i, r2) {
    let n2 = 0, o2 = 0, l2 = 0, a2;
    if (this._parseStack.state) if (this._parseStack.state === 2) this._parseStack.state = 0, l2 = this._parseStack.chunkPos + 1;
    else {
      if (r2 === void 0 || this._parseStack.state === 1) throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
      let u2 = this._parseStack.handlers, h2 = this._parseStack.handlerPos - 1;
      switch (this._parseStack.state) {
        case 3:
          if (r2 === false && h2 > -1) {
            for (; h2 >= 0 && (a2 = u2[h2](this._params), a2 !== true); h2--) if (a2 instanceof Promise) return this._parseStack.handlerPos = h2, a2;
          }
          this._parseStack.handlers = [];
          break;
        case 4:
          if (r2 === false && h2 > -1) {
            for (; h2 >= 0 && (a2 = u2[h2](), a2 !== true); h2--) if (a2 instanceof Promise) return this._parseStack.handlerPos = h2, a2;
          }
          this._parseStack.handlers = [];
          break;
        case 6:
          if (n2 = e2[this._parseStack.chunkPos], a2 = this._dcsParser.unhook(n2 !== 24 && n2 !== 26, r2), a2) return a2;
          n2 === 27 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
          break;
        case 5:
          if (n2 = e2[this._parseStack.chunkPos], a2 = this._oscParser.end(n2 !== 24 && n2 !== 26, r2), a2) return a2;
          n2 === 27 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
          break;
      }
      this._parseStack.state = 0, l2 = this._parseStack.chunkPos + 1, this.precedingJoinState = 0, this.currentState = this._parseStack.transition & 15;
    }
    for (let u2 = l2; u2 < i; ++u2) {
      switch (n2 = e2[u2], o2 = this._transitions.table[this.currentState << 8 | (n2 < 160 ? n2 : ke)], o2 >> 4) {
        case 2:
          for (let m2 = u2 + 1; ; ++m2) {
            if (m2 >= i || (n2 = e2[m2]) < 32 || n2 > 126 && n2 < ke) {
              this._printHandler(e2, u2, m2), u2 = m2 - 1;
              break;
            }
            if (++m2 >= i || (n2 = e2[m2]) < 32 || n2 > 126 && n2 < ke) {
              this._printHandler(e2, u2, m2), u2 = m2 - 1;
              break;
            }
            if (++m2 >= i || (n2 = e2[m2]) < 32 || n2 > 126 && n2 < ke) {
              this._printHandler(e2, u2, m2), u2 = m2 - 1;
              break;
            }
            if (++m2 >= i || (n2 = e2[m2]) < 32 || n2 > 126 && n2 < ke) {
              this._printHandler(e2, u2, m2), u2 = m2 - 1;
              break;
            }
          }
          break;
        case 3:
          this._executeHandlers[n2] ? this._executeHandlers[n2]() : this._executeHandlerFb(n2), this.precedingJoinState = 0;
          break;
        case 0:
          break;
        case 1:
          if (this._errorHandler({ position: u2, code: n2, currentState: this.currentState, collect: this._collect, params: this._params, abort: false }).abort) return;
          break;
        case 7:
          let c2 = this._csiHandlers[this._collect << 8 | n2], d = c2 ? c2.length - 1 : -1;
          for (; d >= 0 && (a2 = c2[d](this._params), a2 !== true); d--) if (a2 instanceof Promise) return this._preserveStack(3, c2, d, o2, u2), a2;
          d < 0 && this._csiHandlerFb(this._collect << 8 | n2, this._params), this.precedingJoinState = 0;
          break;
        case 8:
          do
            switch (n2) {
              case 59:
                this._params.addParam(0);
                break;
              case 58:
                this._params.addSubParam(-1);
                break;
              default:
                this._params.addDigit(n2 - 48);
            }
          while (++u2 < i && (n2 = e2[u2]) > 47 && n2 < 60);
          u2--;
          break;
        case 9:
          this._collect <<= 8, this._collect |= n2;
          break;
        case 10:
          let _2 = this._escHandlers[this._collect << 8 | n2], p2 = _2 ? _2.length - 1 : -1;
          for (; p2 >= 0 && (a2 = _2[p2](), a2 !== true); p2--) if (a2 instanceof Promise) return this._preserveStack(4, _2, p2, o2, u2), a2;
          p2 < 0 && this._escHandlerFb(this._collect << 8 | n2), this.precedingJoinState = 0;
          break;
        case 11:
          this._params.reset(), this._params.addParam(0), this._collect = 0;
          break;
        case 12:
          this._dcsParser.hook(this._collect << 8 | n2, this._params);
          break;
        case 13:
          for (let m2 = u2 + 1; ; ++m2) if (m2 >= i || (n2 = e2[m2]) === 24 || n2 === 26 || n2 === 27 || n2 > 127 && n2 < ke) {
            this._dcsParser.put(e2, u2, m2), u2 = m2 - 1;
            break;
          }
          break;
        case 14:
          if (a2 = this._dcsParser.unhook(n2 !== 24 && n2 !== 26), a2) return this._preserveStack(6, [], 0, o2, u2), a2;
          n2 === 27 && (o2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
          break;
        case 4:
          this._oscParser.start();
          break;
        case 5:
          for (let m2 = u2 + 1; ; m2++) if (m2 >= i || (n2 = e2[m2]) < 32 || n2 > 127 && n2 < ke) {
            this._oscParser.put(e2, u2, m2), u2 = m2 - 1;
            break;
          }
          break;
        case 6:
          if (a2 = this._oscParser.end(n2 !== 24 && n2 !== 26), a2) return this._preserveStack(5, [], 0, o2, u2), a2;
          n2 === 27 && (o2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
          break;
      }
      this.currentState = o2 & 15;
    }
  }
};
var dc = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, fc = /^[\da-f]+$/;
function Ws(s16) {
  if (!s16) return;
  let t2 = s16.toLowerCase();
  if (t2.indexOf("rgb:") === 0) {
    t2 = t2.slice(4);
    let e2 = dc.exec(t2);
    if (e2) {
      let i = e2[1] ? 15 : e2[4] ? 255 : e2[7] ? 4095 : 65535;
      return [Math.round(parseInt(e2[1] || e2[4] || e2[7] || e2[10], 16) / i * 255), Math.round(parseInt(e2[2] || e2[5] || e2[8] || e2[11], 16) / i * 255), Math.round(parseInt(e2[3] || e2[6] || e2[9] || e2[12], 16) / i * 255)];
    }
  } else if (t2.indexOf("#") === 0 && (t2 = t2.slice(1), fc.exec(t2) && [3, 6, 9, 12].includes(t2.length))) {
    let e2 = t2.length / 3, i = [0, 0, 0];
    for (let r2 = 0; r2 < 3; ++r2) {
      let n2 = parseInt(t2.slice(e2 * r2, e2 * r2 + e2), 16);
      i[r2] = e2 === 1 ? n2 << 4 : e2 === 2 ? n2 : e2 === 3 ? n2 >> 4 : n2 >> 8;
    }
    return i;
  }
}
function Hs(s16, t2) {
  let e2 = s16.toString(16), i = e2.length < 2 ? "0" + e2 : e2;
  switch (t2) {
    case 4:
      return e2[0];
    case 8:
      return i;
    case 12:
      return (i + i).slice(0, 3);
    default:
      return i + i;
  }
}
function ml(s16, t2 = 16) {
  let [e2, i, r2] = s16;
  return `rgb:${Hs(e2, t2)}/${Hs(i, t2)}/${Hs(r2, t2)}`;
}
var mc = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 }, ut = 131072, _l = 10;
function bl(s16, t2) {
  if (s16 > 24) return t2.setWinLines || false;
  switch (s16) {
    case 1:
      return !!t2.restoreWin;
    case 2:
      return !!t2.minimizeWin;
    case 3:
      return !!t2.setWinPosition;
    case 4:
      return !!t2.setWinSizePixels;
    case 5:
      return !!t2.raiseWin;
    case 6:
      return !!t2.lowerWin;
    case 7:
      return !!t2.refreshWin;
    case 8:
      return !!t2.setWinSizeChars;
    case 9:
      return !!t2.maximizeWin;
    case 10:
      return !!t2.fullscreenWin;
    case 11:
      return !!t2.getWinState;
    case 13:
      return !!t2.getWinPosition;
    case 14:
      return !!t2.getWinSizePixels;
    case 15:
      return !!t2.getScreenSizePixels;
    case 16:
      return !!t2.getCellSizePixels;
    case 18:
      return !!t2.getWinSizeChars;
    case 19:
      return !!t2.getScreenSizeChars;
    case 20:
      return !!t2.getIconTitle;
    case 21:
      return !!t2.getWinTitle;
    case 22:
      return !!t2.pushTitle;
    case 23:
      return !!t2.popTitle;
    case 24:
      return !!t2.setWinLines;
  }
  return false;
}
var vl = 5e3, gl = 0, vn = class extends D {
  constructor(e2, i, r2, n2, o2, l2, a2, u2, h2 = new bn()) {
    super();
    this._bufferService = e2;
    this._charsetService = i;
    this._coreService = r2;
    this._logService = n2;
    this._optionsService = o2;
    this._oscLinkService = l2;
    this._coreMouseService = a2;
    this._unicodeService = u2;
    this._parser = h2;
    this._parseBuffer = new Uint32Array(4096);
    this._stringDecoder = new er();
    this._utf8Decoder = new tr();
    this._windowTitle = "";
    this._iconName = "";
    this._windowTitleStack = [];
    this._iconNameStack = [];
    this._curAttrData = X.clone();
    this._eraseAttrDataInternal = X.clone();
    this._onRequestBell = this._register(new v());
    this.onRequestBell = this._onRequestBell.event;
    this._onRequestRefreshRows = this._register(new v());
    this.onRequestRefreshRows = this._onRequestRefreshRows.event;
    this._onRequestReset = this._register(new v());
    this.onRequestReset = this._onRequestReset.event;
    this._onRequestSendFocus = this._register(new v());
    this.onRequestSendFocus = this._onRequestSendFocus.event;
    this._onRequestSyncScrollBar = this._register(new v());
    this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event;
    this._onRequestWindowsOptionsReport = this._register(new v());
    this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event;
    this._onA11yChar = this._register(new v());
    this.onA11yChar = this._onA11yChar.event;
    this._onA11yTab = this._register(new v());
    this.onA11yTab = this._onA11yTab.event;
    this._onCursorMove = this._register(new v());
    this.onCursorMove = this._onCursorMove.event;
    this._onLineFeed = this._register(new v());
    this.onLineFeed = this._onLineFeed.event;
    this._onScroll = this._register(new v());
    this.onScroll = this._onScroll.event;
    this._onTitleChange = this._register(new v());
    this.onTitleChange = this._onTitleChange.event;
    this._onColor = this._register(new v());
    this.onColor = this._onColor.event;
    this._parseStack = { paused: false, cursorStartX: 0, cursorStartY: 0, decodedLength: 0, position: 0 };
    this._specialColors = [256, 257, 258];
    this._register(this._parser), this._dirtyRowTracker = new Zi(this._bufferService), this._activeBuffer = this._bufferService.buffer, this._register(this._bufferService.buffers.onBufferActivate((c2) => this._activeBuffer = c2.activeBuffer)), this._parser.setCsiHandlerFallback((c2, d) => {
      this._logService.debug("Unknown CSI code: ", { identifier: this._parser.identToString(c2), params: d.toArray() });
    }), this._parser.setEscHandlerFallback((c2) => {
      this._logService.debug("Unknown ESC code: ", { identifier: this._parser.identToString(c2) });
    }), this._parser.setExecuteHandlerFallback((c2) => {
      this._logService.debug("Unknown EXECUTE code: ", { code: c2 });
    }), this._parser.setOscHandlerFallback((c2, d, _2) => {
      this._logService.debug("Unknown OSC code: ", { identifier: c2, action: d, data: _2 });
    }), this._parser.setDcsHandlerFallback((c2, d, _2) => {
      d === "HOOK" && (_2 = _2.toArray()), this._logService.debug("Unknown DCS code: ", { identifier: this._parser.identToString(c2), action: d, payload: _2 });
    }), this._parser.setPrintHandler((c2, d, _2) => this.print(c2, d, _2)), this._parser.registerCsiHandler({ final: "@" }, (c2) => this.insertChars(c2)), this._parser.registerCsiHandler({ intermediates: " ", final: "@" }, (c2) => this.scrollLeft(c2)), this._parser.registerCsiHandler({ final: "A" }, (c2) => this.cursorUp(c2)), this._parser.registerCsiHandler({ intermediates: " ", final: "A" }, (c2) => this.scrollRight(c2)), this._parser.registerCsiHandler({ final: "B" }, (c2) => this.cursorDown(c2)), this._parser.registerCsiHandler({ final: "C" }, (c2) => this.cursorForward(c2)), this._parser.registerCsiHandler({ final: "D" }, (c2) => this.cursorBackward(c2)), this._parser.registerCsiHandler({ final: "E" }, (c2) => this.cursorNextLine(c2)), this._parser.registerCsiHandler({ final: "F" }, (c2) => this.cursorPrecedingLine(c2)), this._parser.registerCsiHandler({ final: "G" }, (c2) => this.cursorCharAbsolute(c2)), this._parser.registerCsiHandler({ final: "H" }, (c2) => this.cursorPosition(c2)), this._parser.registerCsiHandler({ final: "I" }, (c2) => this.cursorForwardTab(c2)), this._parser.registerCsiHandler({ final: "J" }, (c2) => this.eraseInDisplay(c2, false)), this._parser.registerCsiHandler({ prefix: "?", final: "J" }, (c2) => this.eraseInDisplay(c2, true)), this._parser.registerCsiHandler({ final: "K" }, (c2) => this.eraseInLine(c2, false)), this._parser.registerCsiHandler({ prefix: "?", final: "K" }, (c2) => this.eraseInLine(c2, true)), this._parser.registerCsiHandler({ final: "L" }, (c2) => this.insertLines(c2)), this._parser.registerCsiHandler({ final: "M" }, (c2) => this.deleteLines(c2)), this._parser.registerCsiHandler({ final: "P" }, (c2) => this.deleteChars(c2)), this._parser.registerCsiHandler({ final: "S" }, (c2) => this.scrollUp(c2)), this._parser.registerCsiHandler({ final: "T" }, (c2) => this.scrollDown(c2)), this._parser.registerCsiHandler({ final: "X" }, (c2) => this.eraseChars(c2)), this._parser.registerCsiHandler({ final: "Z" }, (c2) => this.cursorBackwardTab(c2)), this._parser.registerCsiHandler({ final: "`" }, (c2) => this.charPosAbsolute(c2)), this._parser.registerCsiHandler({ final: "a" }, (c2) => this.hPositionRelative(c2)), this._parser.registerCsiHandler({ final: "b" }, (c2) => this.repeatPrecedingCharacter(c2)), this._parser.registerCsiHandler({ final: "c" }, (c2) => this.sendDeviceAttributesPrimary(c2)), this._parser.registerCsiHandler({ prefix: ">", final: "c" }, (c2) => this.sendDeviceAttributesSecondary(c2)), this._parser.registerCsiHandler({ final: "d" }, (c2) => this.linePosAbsolute(c2)), this._parser.registerCsiHandler({ final: "e" }, (c2) => this.vPositionRelative(c2)), this._parser.registerCsiHandler({ final: "f" }, (c2) => this.hVPosition(c2)), this._parser.registerCsiHandler({ final: "g" }, (c2) => this.tabClear(c2)), this._parser.registerCsiHandler({ final: "h" }, (c2) => this.setMode(c2)), this._parser.registerCsiHandler({ prefix: "?", final: "h" }, (c2) => this.setModePrivate(c2)), this._parser.registerCsiHandler({ final: "l" }, (c2) => this.resetMode(c2)), this._parser.registerCsiHandler({ prefix: "?", final: "l" }, (c2) => this.resetModePrivate(c2)), this._parser.registerCsiHandler({ final: "m" }, (c2) => this.charAttributes(c2)), this._parser.registerCsiHandler({ final: "n" }, (c2) => this.deviceStatus(c2)), this._parser.registerCsiHandler({ prefix: "?", final: "n" }, (c2) => this.deviceStatusPrivate(c2)), this._parser.registerCsiHandler({ intermediates: "!", final: "p" }, (c2) => this.softReset(c2)), this._parser.registerCsiHandler({ intermediates: " ", final: "q" }, (c2) => this.setCursorStyle(c2)), this._parser.registerCsiHandler({ final: "r" }, (c2) => this.setScrollRegion(c2)), this._parser.registerCsiHandler({ final: "s" }, (c2) => this.saveCursor(c2)), this._parser.registerCsiHandler({ final: "t" }, (c2) => this.windowOptions(c2)), this._parser.registerCsiHandler({ final: "u" }, (c2) => this.restoreCursor(c2)), this._parser.registerCsiHandler({ intermediates: "'", final: "}" }, (c2) => this.insertColumns(c2)), this._parser.registerCsiHandler({ intermediates: "'", final: "~" }, (c2) => this.deleteColumns(c2)), this._parser.registerCsiHandler({ intermediates: '"', final: "q" }, (c2) => this.selectProtected(c2)), this._parser.registerCsiHandler({ intermediates: "$", final: "p" }, (c2) => this.requestMode(c2, true)), this._parser.registerCsiHandler({ prefix: "?", intermediates: "$", final: "p" }, (c2) => this.requestMode(c2, false)), this._parser.setExecuteHandler(b.BEL, () => this.bell()), this._parser.setExecuteHandler(b.LF, () => this.lineFeed()), this._parser.setExecuteHandler(b.VT, () => this.lineFeed()), this._parser.setExecuteHandler(b.FF, () => this.lineFeed()), this._parser.setExecuteHandler(b.CR, () => this.carriageReturn()), this._parser.setExecuteHandler(b.BS, () => this.backspace()), this._parser.setExecuteHandler(b.HT, () => this.tab()), this._parser.setExecuteHandler(b.SO, () => this.shiftOut()), this._parser.setExecuteHandler(b.SI, () => this.shiftIn()), this._parser.setExecuteHandler(Ai.IND, () => this.index()), this._parser.setExecuteHandler(Ai.NEL, () => this.nextLine()), this._parser.setExecuteHandler(Ai.HTS, () => this.tabSet()), this._parser.registerOscHandler(0, new pe((c2) => (this.setTitle(c2), this.setIconName(c2), true))), this._parser.registerOscHandler(1, new pe((c2) => this.setIconName(c2))), this._parser.registerOscHandler(2, new pe((c2) => this.setTitle(c2))), this._parser.registerOscHandler(4, new pe((c2) => this.setOrReportIndexedColor(c2))), this._parser.registerOscHandler(8, new pe((c2) => this.setHyperlink(c2))), this._parser.registerOscHandler(10, new pe((c2) => this.setOrReportFgColor(c2))), this._parser.registerOscHandler(11, new pe((c2) => this.setOrReportBgColor(c2))), this._parser.registerOscHandler(12, new pe((c2) => this.setOrReportCursorColor(c2))), this._parser.registerOscHandler(104, new pe((c2) => this.restoreIndexedColor(c2))), this._parser.registerOscHandler(110, new pe((c2) => this.restoreFgColor(c2))), this._parser.registerOscHandler(111, new pe((c2) => this.restoreBgColor(c2))), this._parser.registerOscHandler(112, new pe((c2) => this.restoreCursorColor(c2))), this._parser.registerEscHandler({ final: "7" }, () => this.saveCursor()), this._parser.registerEscHandler({ final: "8" }, () => this.restoreCursor()), this._parser.registerEscHandler({ final: "D" }, () => this.index()), this._parser.registerEscHandler({ final: "E" }, () => this.nextLine()), this._parser.registerEscHandler({ final: "H" }, () => this.tabSet()), this._parser.registerEscHandler({ final: "M" }, () => this.reverseIndex()), this._parser.registerEscHandler({ final: "=" }, () => this.keypadApplicationMode()), this._parser.registerEscHandler({ final: ">" }, () => this.keypadNumericMode()), this._parser.registerEscHandler({ final: "c" }, () => this.fullReset()), this._parser.registerEscHandler({ final: "n" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "o" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "|" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "}" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "~" }, () => this.setgLevel(1)), this._parser.registerEscHandler({ intermediates: "%", final: "@" }, () => this.selectDefaultCharset()), this._parser.registerEscHandler({ intermediates: "%", final: "G" }, () => this.selectDefaultCharset());
    for (let c2 in ne) this._parser.registerEscHandler({ intermediates: "(", final: c2 }, () => this.selectCharset("(" + c2)), this._parser.registerEscHandler({ intermediates: ")", final: c2 }, () => this.selectCharset(")" + c2)), this._parser.registerEscHandler({ intermediates: "*", final: c2 }, () => this.selectCharset("*" + c2)), this._parser.registerEscHandler({ intermediates: "+", final: c2 }, () => this.selectCharset("+" + c2)), this._parser.registerEscHandler({ intermediates: "-", final: c2 }, () => this.selectCharset("-" + c2)), this._parser.registerEscHandler({ intermediates: ".", final: c2 }, () => this.selectCharset("." + c2)), this._parser.registerEscHandler({ intermediates: "/", final: c2 }, () => this.selectCharset("/" + c2));
    this._parser.registerEscHandler({ intermediates: "#", final: "8" }, () => this.screenAlignmentPattern()), this._parser.setErrorHandler((c2) => (this._logService.error("Parsing error: ", c2), c2)), this._parser.registerDcsHandler({ intermediates: "$", final: "q" }, new Xi((c2, d) => this.requestStatusString(c2, d)));
  }
  getAttrData() {
    return this._curAttrData;
  }
  _preserveStack(e2, i, r2, n2) {
    this._parseStack.paused = true, this._parseStack.cursorStartX = e2, this._parseStack.cursorStartY = i, this._parseStack.decodedLength = r2, this._parseStack.position = n2;
  }
  _logSlowResolvingAsync(e2) {
    this._logService.logLevel <= 3 && Promise.race([e2, new Promise((i, r2) => setTimeout(() => r2("#SLOW_TIMEOUT"), vl))]).catch((i) => {
      if (i !== "#SLOW_TIMEOUT") throw i;
      console.warn(`async parser handler taking longer than ${vl} ms`);
    });
  }
  _getCurrentLinkId() {
    return this._curAttrData.extended.urlId;
  }
  parse(e2, i) {
    let r2, n2 = this._activeBuffer.x, o2 = this._activeBuffer.y, l2 = 0, a2 = this._parseStack.paused;
    if (a2) {
      if (r2 = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, i)) return this._logSlowResolvingAsync(r2), r2;
      n2 = this._parseStack.cursorStartX, o2 = this._parseStack.cursorStartY, this._parseStack.paused = false, e2.length > ut && (l2 = this._parseStack.position + ut);
    }
    if (this._logService.logLevel <= 1 && this._logService.debug(`parsing data ${typeof e2 == "string" ? ` "${e2}"` : ` "${Array.prototype.map.call(e2, (c2) => String.fromCharCode(c2)).join("")}"`}`), this._logService.logLevel === 0 && this._logService.trace("parsing data (codes)", typeof e2 == "string" ? e2.split("").map((c2) => c2.charCodeAt(0)) : e2), this._parseBuffer.length < e2.length && this._parseBuffer.length < ut && (this._parseBuffer = new Uint32Array(Math.min(e2.length, ut))), a2 || this._dirtyRowTracker.clearRange(), e2.length > ut) for (let c2 = l2; c2 < e2.length; c2 += ut) {
      let d = c2 + ut < e2.length ? c2 + ut : e2.length, _2 = typeof e2 == "string" ? this._stringDecoder.decode(e2.substring(c2, d), this._parseBuffer) : this._utf8Decoder.decode(e2.subarray(c2, d), this._parseBuffer);
      if (r2 = this._parser.parse(this._parseBuffer, _2)) return this._preserveStack(n2, o2, _2, c2), this._logSlowResolvingAsync(r2), r2;
    }
    else if (!a2) {
      let c2 = typeof e2 == "string" ? this._stringDecoder.decode(e2, this._parseBuffer) : this._utf8Decoder.decode(e2, this._parseBuffer);
      if (r2 = this._parser.parse(this._parseBuffer, c2)) return this._preserveStack(n2, o2, c2, 0), this._logSlowResolvingAsync(r2), r2;
    }
    (this._activeBuffer.x !== n2 || this._activeBuffer.y !== o2) && this._onCursorMove.fire();
    let u2 = this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp), h2 = this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
    h2 < this._bufferService.rows && this._onRequestRefreshRows.fire({ start: Math.min(h2, this._bufferService.rows - 1), end: Math.min(u2, this._bufferService.rows - 1) });
  }
  print(e2, i, r2) {
    let n2, o2, l2 = this._charsetService.charset, a2 = this._optionsService.rawOptions.screenReaderMode, u2 = this._bufferService.cols, h2 = this._coreService.decPrivateModes.wraparound, c2 = this._coreService.modes.insertMode, d = this._curAttrData, _2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
    this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._activeBuffer.x && r2 - i > 0 && _2.getWidth(this._activeBuffer.x - 1) === 2 && _2.setCellFromCodepoint(this._activeBuffer.x - 1, 0, 1, d);
    let p2 = this._parser.precedingJoinState;
    for (let m2 = i; m2 < r2; ++m2) {
      if (n2 = e2[m2], n2 < 127 && l2) {
        let O2 = l2[String.fromCharCode(n2)];
        O2 && (n2 = O2.charCodeAt(0));
      }
      let f2 = this._unicodeService.charProperties(n2, p2);
      o2 = Ae.extractWidth(f2);
      let A2 = Ae.extractShouldJoin(f2), R2 = A2 ? Ae.extractWidth(p2) : 0;
      if (p2 = f2, a2 && this._onA11yChar.fire(Ce(n2)), this._getCurrentLinkId() && this._oscLinkService.addLineToLink(this._getCurrentLinkId(), this._activeBuffer.ybase + this._activeBuffer.y), this._activeBuffer.x + o2 - R2 > u2) {
        if (h2) {
          let O2 = _2, I2 = this._activeBuffer.x - R2;
          for (this._activeBuffer.x = R2, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), true)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = true), _2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y), R2 > 0 && _2 instanceof Ze && _2.copyCellsFrom(O2, I2, 0, R2, false); I2 < u2; ) O2.setCellFromCodepoint(I2++, 0, 1, d);
        } else if (this._activeBuffer.x = u2 - 1, o2 === 2) continue;
      }
      if (A2 && this._activeBuffer.x) {
        let O2 = _2.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
        _2.addCodepointToCell(this._activeBuffer.x - O2, n2, o2);
        for (let I2 = o2 - R2; --I2 >= 0; ) _2.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, d);
        continue;
      }
      if (c2 && (_2.insertCells(this._activeBuffer.x, o2 - R2, this._activeBuffer.getNullCell(d)), _2.getWidth(u2 - 1) === 2 && _2.setCellFromCodepoint(u2 - 1, 0, 1, d)), _2.setCellFromCodepoint(this._activeBuffer.x++, n2, o2, d), o2 > 0) for (; --o2; ) _2.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, d);
    }
    this._parser.precedingJoinState = p2, this._activeBuffer.x < u2 && r2 - i > 0 && _2.getWidth(this._activeBuffer.x) === 0 && !_2.hasContent(this._activeBuffer.x) && _2.setCellFromCodepoint(this._activeBuffer.x, 0, 1, d), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
  }
  registerCsiHandler(e2, i) {
    return e2.final === "t" && !e2.prefix && !e2.intermediates ? this._parser.registerCsiHandler(e2, (r2) => bl(r2.params[0], this._optionsService.rawOptions.windowOptions) ? i(r2) : true) : this._parser.registerCsiHandler(e2, i);
  }
  registerDcsHandler(e2, i) {
    return this._parser.registerDcsHandler(e2, new Xi(i));
  }
  registerEscHandler(e2, i) {
    return this._parser.registerEscHandler(e2, i);
  }
  registerOscHandler(e2, i) {
    return this._parser.registerOscHandler(e2, new pe(i));
  }
  bell() {
    return this._onRequestBell.fire(), true;
  }
  lineFeed() {
    return this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows ? this._activeBuffer.y = this._bufferService.rows - 1 : this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), true;
  }
  carriageReturn() {
    return this._activeBuffer.x = 0, true;
  }
  backspace() {
    if (!this._coreService.decPrivateModes.reverseWraparound) return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, true;
    if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0) this._activeBuffer.x--;
    else if (this._activeBuffer.x === 0 && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)?.isWrapped) {
      this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
      let e2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
      e2.hasWidth(this._activeBuffer.x) && !e2.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
    }
    return this._restrictCursor(), true;
  }
  tab() {
    if (this._activeBuffer.x >= this._bufferService.cols) return true;
    let e2 = this._activeBuffer.x;
    return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e2), true;
  }
  shiftOut() {
    return this._charsetService.setgLevel(1), true;
  }
  shiftIn() {
    return this._charsetService.setgLevel(0), true;
  }
  _restrictCursor(e2 = this._bufferService.cols - 1) {
    this._activeBuffer.x = Math.min(e2, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
  }
  _setCursor(e2, i) {
    this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e2, this._activeBuffer.y = this._activeBuffer.scrollTop + i) : (this._activeBuffer.x = e2, this._activeBuffer.y = i), this._restrictCursor(), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
  }
  _moveCursor(e2, i) {
    this._restrictCursor(), this._setCursor(this._activeBuffer.x + e2, this._activeBuffer.y + i);
  }
  cursorUp(e2) {
    let i = this._activeBuffer.y - this._activeBuffer.scrollTop;
    return i >= 0 ? this._moveCursor(0, -Math.min(i, e2.params[0] || 1)) : this._moveCursor(0, -(e2.params[0] || 1)), true;
  }
  cursorDown(e2) {
    let i = this._activeBuffer.scrollBottom - this._activeBuffer.y;
    return i >= 0 ? this._moveCursor(0, Math.min(i, e2.params[0] || 1)) : this._moveCursor(0, e2.params[0] || 1), true;
  }
  cursorForward(e2) {
    return this._moveCursor(e2.params[0] || 1, 0), true;
  }
  cursorBackward(e2) {
    return this._moveCursor(-(e2.params[0] || 1), 0), true;
  }
  cursorNextLine(e2) {
    return this.cursorDown(e2), this._activeBuffer.x = 0, true;
  }
  cursorPrecedingLine(e2) {
    return this.cursorUp(e2), this._activeBuffer.x = 0, true;
  }
  cursorCharAbsolute(e2) {
    return this._setCursor((e2.params[0] || 1) - 1, this._activeBuffer.y), true;
  }
  cursorPosition(e2) {
    return this._setCursor(e2.length >= 2 ? (e2.params[1] || 1) - 1 : 0, (e2.params[0] || 1) - 1), true;
  }
  charPosAbsolute(e2) {
    return this._setCursor((e2.params[0] || 1) - 1, this._activeBuffer.y), true;
  }
  hPositionRelative(e2) {
    return this._moveCursor(e2.params[0] || 1, 0), true;
  }
  linePosAbsolute(e2) {
    return this._setCursor(this._activeBuffer.x, (e2.params[0] || 1) - 1), true;
  }
  vPositionRelative(e2) {
    return this._moveCursor(0, e2.params[0] || 1), true;
  }
  hVPosition(e2) {
    return this.cursorPosition(e2), true;
  }
  tabClear(e2) {
    let i = e2.params[0];
    return i === 0 ? delete this._activeBuffer.tabs[this._activeBuffer.x] : i === 3 && (this._activeBuffer.tabs = {}), true;
  }
  cursorForwardTab(e2) {
    if (this._activeBuffer.x >= this._bufferService.cols) return true;
    let i = e2.params[0] || 1;
    for (; i--; ) this._activeBuffer.x = this._activeBuffer.nextStop();
    return true;
  }
  cursorBackwardTab(e2) {
    if (this._activeBuffer.x >= this._bufferService.cols) return true;
    let i = e2.params[0] || 1;
    for (; i--; ) this._activeBuffer.x = this._activeBuffer.prevStop();
    return true;
  }
  selectProtected(e2) {
    let i = e2.params[0];
    return i === 1 && (this._curAttrData.bg |= 536870912), (i === 2 || i === 0) && (this._curAttrData.bg &= -536870913), true;
  }
  _eraseInBufferLine(e2, i, r2, n2 = false, o2 = false) {
    let l2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e2);
    l2.replaceCells(i, r2, this._activeBuffer.getNullCell(this._eraseAttrData()), o2), n2 && (l2.isWrapped = false);
  }
  _resetBufferLine(e2, i = false) {
    let r2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e2);
    r2 && (r2.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), i), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e2), r2.isWrapped = false);
  }
  eraseInDisplay(e2, i = false) {
    this._restrictCursor(this._bufferService.cols);
    let r2;
    switch (e2.params[0]) {
      case 0:
        for (r2 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(r2), this._eraseInBufferLine(r2++, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, i); r2 < this._bufferService.rows; r2++) this._resetBufferLine(r2, i);
        this._dirtyRowTracker.markDirty(r2);
        break;
      case 1:
        for (r2 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(r2), this._eraseInBufferLine(r2, 0, this._activeBuffer.x + 1, true, i), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(r2 + 1).isWrapped = false); r2--; ) this._resetBufferLine(r2, i);
        this._dirtyRowTracker.markDirty(0);
        break;
      case 2:
        if (this._optionsService.rawOptions.scrollOnEraseInDisplay) {
          for (r2 = this._bufferService.rows, this._dirtyRowTracker.markRangeDirty(0, r2 - 1); r2-- && !this._activeBuffer.lines.get(this._activeBuffer.ybase + r2)?.getTrimmedLength(); ) ;
          for (; r2 >= 0; r2--) this._bufferService.scroll(this._eraseAttrData());
        } else {
          for (r2 = this._bufferService.rows, this._dirtyRowTracker.markDirty(r2 - 1); r2--; ) this._resetBufferLine(r2, i);
          this._dirtyRowTracker.markDirty(0);
        }
        break;
      case 3:
        let n2 = this._activeBuffer.lines.length - this._bufferService.rows;
        n2 > 0 && (this._activeBuffer.lines.trimStart(n2), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - n2, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - n2, 0), this._onScroll.fire(0));
        break;
    }
    return true;
  }
  eraseInLine(e2, i = false) {
    switch (this._restrictCursor(this._bufferService.cols), e2.params[0]) {
      case 0:
        this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, i);
        break;
      case 1:
        this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, false, i);
        break;
      case 2:
        this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, true, i);
        break;
    }
    return this._dirtyRowTracker.markDirty(this._activeBuffer.y), true;
  }
  insertLines(e2) {
    this._restrictCursor();
    let i = e2.params[0] || 1;
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let r2 = this._activeBuffer.ybase + this._activeBuffer.y, n2 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, o2 = this._bufferService.rows - 1 + this._activeBuffer.ybase - n2 + 1;
    for (; i--; ) this._activeBuffer.lines.splice(o2 - 1, 1), this._activeBuffer.lines.splice(r2, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
  }
  deleteLines(e2) {
    this._restrictCursor();
    let i = e2.params[0] || 1;
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let r2 = this._activeBuffer.ybase + this._activeBuffer.y, n2;
    for (n2 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, n2 = this._bufferService.rows - 1 + this._activeBuffer.ybase - n2; i--; ) this._activeBuffer.lines.splice(r2, 1), this._activeBuffer.lines.splice(n2, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
  }
  insertChars(e2) {
    this._restrictCursor();
    let i = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
    return i && (i.insertCells(this._activeBuffer.x, e2.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
  }
  deleteChars(e2) {
    this._restrictCursor();
    let i = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
    return i && (i.deleteCells(this._activeBuffer.x, e2.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
  }
  scrollUp(e2) {
    let i = e2.params[0] || 1;
    for (; i--; ) this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  scrollDown(e2) {
    let i = e2.params[0] || 1;
    for (; i--; ) this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(X));
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  scrollLeft(e2) {
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let i = e2.params[0] || 1;
    for (let r2 = this._activeBuffer.scrollTop; r2 <= this._activeBuffer.scrollBottom; ++r2) {
      let n2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + r2);
      n2.deleteCells(0, i, this._activeBuffer.getNullCell(this._eraseAttrData())), n2.isWrapped = false;
    }
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  scrollRight(e2) {
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let i = e2.params[0] || 1;
    for (let r2 = this._activeBuffer.scrollTop; r2 <= this._activeBuffer.scrollBottom; ++r2) {
      let n2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + r2);
      n2.insertCells(0, i, this._activeBuffer.getNullCell(this._eraseAttrData())), n2.isWrapped = false;
    }
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  insertColumns(e2) {
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let i = e2.params[0] || 1;
    for (let r2 = this._activeBuffer.scrollTop; r2 <= this._activeBuffer.scrollBottom; ++r2) {
      let n2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + r2);
      n2.insertCells(this._activeBuffer.x, i, this._activeBuffer.getNullCell(this._eraseAttrData())), n2.isWrapped = false;
    }
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  deleteColumns(e2) {
    if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return true;
    let i = e2.params[0] || 1;
    for (let r2 = this._activeBuffer.scrollTop; r2 <= this._activeBuffer.scrollBottom; ++r2) {
      let n2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + r2);
      n2.deleteCells(this._activeBuffer.x, i, this._activeBuffer.getNullCell(this._eraseAttrData())), n2.isWrapped = false;
    }
    return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
  }
  eraseChars(e2) {
    this._restrictCursor();
    let i = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
    return i && (i.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e2.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
  }
  repeatPrecedingCharacter(e2) {
    let i = this._parser.precedingJoinState;
    if (!i) return true;
    let r2 = e2.params[0] || 1, n2 = Ae.extractWidth(i), o2 = this._activeBuffer.x - n2, a2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(o2), u2 = new Uint32Array(a2.length * r2), h2 = 0;
    for (let d = 0; d < a2.length; ) {
      let _2 = a2.codePointAt(d) || 0;
      u2[h2++] = _2, d += _2 > 65535 ? 2 : 1;
    }
    let c2 = h2;
    for (let d = 1; d < r2; ++d) u2.copyWithin(c2, 0, h2), c2 += h2;
    return this.print(u2, 0, c2), true;
  }
  sendDeviceAttributesPrimary(e2) {
    return e2.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(b.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(b.ESC + "[?6c")), true;
  }
  sendDeviceAttributesSecondary(e2) {
    return e2.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(b.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(b.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e2.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(b.ESC + "[>83;40003;0c")), true;
  }
  _is(e2) {
    return (this._optionsService.rawOptions.termName + "").indexOf(e2) === 0;
  }
  setMode(e2) {
    for (let i = 0; i < e2.length; i++) switch (e2.params[i]) {
      case 4:
        this._coreService.modes.insertMode = true;
        break;
      case 20:
        this._optionsService.options.convertEol = true;
        break;
    }
    return true;
  }
  setModePrivate(e2) {
    for (let i = 0; i < e2.length; i++) switch (e2.params[i]) {
      case 1:
        this._coreService.decPrivateModes.applicationCursorKeys = true;
        break;
      case 2:
        this._charsetService.setgCharset(0, Je), this._charsetService.setgCharset(1, Je), this._charsetService.setgCharset(2, Je), this._charsetService.setgCharset(3, Je);
        break;
      case 3:
        this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
        break;
      case 6:
        this._coreService.decPrivateModes.origin = true, this._setCursor(0, 0);
        break;
      case 7:
        this._coreService.decPrivateModes.wraparound = true;
        break;
      case 12:
        this._optionsService.options.cursorBlink = true;
        break;
      case 45:
        this._coreService.decPrivateModes.reverseWraparound = true;
        break;
      case 66:
        this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire();
        break;
      case 9:
        this._coreMouseService.activeProtocol = "X10";
        break;
      case 1e3:
        this._coreMouseService.activeProtocol = "VT200";
        break;
      case 1002:
        this._coreMouseService.activeProtocol = "DRAG";
        break;
      case 1003:
        this._coreMouseService.activeProtocol = "ANY";
        break;
      case 1004:
        this._coreService.decPrivateModes.sendFocus = true, this._onRequestSendFocus.fire();
        break;
      case 1005:
        this._logService.debug("DECSET 1005 not supported (see #2507)");
        break;
      case 1006:
        this._coreMouseService.activeEncoding = "SGR";
        break;
      case 1015:
        this._logService.debug("DECSET 1015 not supported (see #2507)");
        break;
      case 1016:
        this._coreMouseService.activeEncoding = "SGR_PIXELS";
        break;
      case 25:
        this._coreService.isCursorHidden = false;
        break;
      case 1048:
        this.saveCursor();
        break;
      case 1049:
        this.saveCursor();
      case 47:
      case 1047:
        this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(void 0), this._onRequestSyncScrollBar.fire();
        break;
      case 2004:
        this._coreService.decPrivateModes.bracketedPasteMode = true;
        break;
      case 2026:
        this._coreService.decPrivateModes.synchronizedOutput = true;
        break;
    }
    return true;
  }
  resetMode(e2) {
    for (let i = 0; i < e2.length; i++) switch (e2.params[i]) {
      case 4:
        this._coreService.modes.insertMode = false;
        break;
      case 20:
        this._optionsService.options.convertEol = false;
        break;
    }
    return true;
  }
  resetModePrivate(e2) {
    for (let i = 0; i < e2.length; i++) switch (e2.params[i]) {
      case 1:
        this._coreService.decPrivateModes.applicationCursorKeys = false;
        break;
      case 3:
        this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
        break;
      case 6:
        this._coreService.decPrivateModes.origin = false, this._setCursor(0, 0);
        break;
      case 7:
        this._coreService.decPrivateModes.wraparound = false;
        break;
      case 12:
        this._optionsService.options.cursorBlink = false;
        break;
      case 45:
        this._coreService.decPrivateModes.reverseWraparound = false;
        break;
      case 66:
        this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire();
        break;
      case 9:
      case 1e3:
      case 1002:
      case 1003:
        this._coreMouseService.activeProtocol = "NONE";
        break;
      case 1004:
        this._coreService.decPrivateModes.sendFocus = false;
        break;
      case 1005:
        this._logService.debug("DECRST 1005 not supported (see #2507)");
        break;
      case 1006:
        this._coreMouseService.activeEncoding = "DEFAULT";
        break;
      case 1015:
        this._logService.debug("DECRST 1015 not supported (see #2507)");
        break;
      case 1016:
        this._coreMouseService.activeEncoding = "DEFAULT";
        break;
      case 25:
        this._coreService.isCursorHidden = true;
        break;
      case 1048:
        this.restoreCursor();
        break;
      case 1049:
      case 47:
      case 1047:
        this._bufferService.buffers.activateNormalBuffer(), e2.params[i] === 1049 && this.restoreCursor(), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(void 0), this._onRequestSyncScrollBar.fire();
        break;
      case 2004:
        this._coreService.decPrivateModes.bracketedPasteMode = false;
        break;
      case 2026:
        this._coreService.decPrivateModes.synchronizedOutput = false, this._onRequestRefreshRows.fire(void 0);
        break;
    }
    return true;
  }
  requestMode(e2, i) {
    let r2;
    ((P2) => (P2[P2.NOT_RECOGNIZED = 0] = "NOT_RECOGNIZED", P2[P2.SET = 1] = "SET", P2[P2.RESET = 2] = "RESET", P2[P2.PERMANENTLY_SET = 3] = "PERMANENTLY_SET", P2[P2.PERMANENTLY_RESET = 4] = "PERMANENTLY_RESET"))(r2 ||= {});
    let n2 = this._coreService.decPrivateModes, { activeProtocol: o2, activeEncoding: l2 } = this._coreMouseService, a2 = this._coreService, { buffers: u2, cols: h2 } = this._bufferService, { active: c2, alt: d } = u2, _2 = this._optionsService.rawOptions, p2 = (A2, R2) => (a2.triggerDataEvent(`${b.ESC}[${i ? "" : "?"}${A2};${R2}$y`), true), m2 = (A2) => A2 ? 1 : 2, f2 = e2.params[0];
    return i ? f2 === 2 ? p2(f2, 4) : f2 === 4 ? p2(f2, m2(a2.modes.insertMode)) : f2 === 12 ? p2(f2, 3) : f2 === 20 ? p2(f2, m2(_2.convertEol)) : p2(f2, 0) : f2 === 1 ? p2(f2, m2(n2.applicationCursorKeys)) : f2 === 3 ? p2(f2, _2.windowOptions.setWinLines ? h2 === 80 ? 2 : h2 === 132 ? 1 : 0 : 0) : f2 === 6 ? p2(f2, m2(n2.origin)) : f2 === 7 ? p2(f2, m2(n2.wraparound)) : f2 === 8 ? p2(f2, 3) : f2 === 9 ? p2(f2, m2(o2 === "X10")) : f2 === 12 ? p2(f2, m2(_2.cursorBlink)) : f2 === 25 ? p2(f2, m2(!a2.isCursorHidden)) : f2 === 45 ? p2(f2, m2(n2.reverseWraparound)) : f2 === 66 ? p2(f2, m2(n2.applicationKeypad)) : f2 === 67 ? p2(f2, 4) : f2 === 1e3 ? p2(f2, m2(o2 === "VT200")) : f2 === 1002 ? p2(f2, m2(o2 === "DRAG")) : f2 === 1003 ? p2(f2, m2(o2 === "ANY")) : f2 === 1004 ? p2(f2, m2(n2.sendFocus)) : f2 === 1005 ? p2(f2, 4) : f2 === 1006 ? p2(f2, m2(l2 === "SGR")) : f2 === 1015 ? p2(f2, 4) : f2 === 1016 ? p2(f2, m2(l2 === "SGR_PIXELS")) : f2 === 1048 ? p2(f2, 1) : f2 === 47 || f2 === 1047 || f2 === 1049 ? p2(f2, m2(c2 === d)) : f2 === 2004 ? p2(f2, m2(n2.bracketedPasteMode)) : f2 === 2026 ? p2(f2, m2(n2.synchronizedOutput)) : p2(f2, 0);
  }
  _updateAttrColor(e2, i, r2, n2, o2) {
    return i === 2 ? (e2 |= 50331648, e2 &= -16777216, e2 |= De.fromColorRGB([r2, n2, o2])) : i === 5 && (e2 &= -50331904, e2 |= 33554432 | r2 & 255), e2;
  }
  _extractColor(e2, i, r2) {
    let n2 = [0, 0, -1, 0, 0, 0], o2 = 0, l2 = 0;
    do {
      if (n2[l2 + o2] = e2.params[i + l2], e2.hasSubParams(i + l2)) {
        let a2 = e2.getSubParams(i + l2), u2 = 0;
        do
          n2[1] === 5 && (o2 = 1), n2[l2 + u2 + 1 + o2] = a2[u2];
        while (++u2 < a2.length && u2 + l2 + 1 + o2 < n2.length);
        break;
      }
      if (n2[1] === 5 && l2 + o2 >= 2 || n2[1] === 2 && l2 + o2 >= 5) break;
      n2[1] && (o2 = 1);
    } while (++l2 + i < e2.length && l2 + o2 < n2.length);
    for (let a2 = 2; a2 < n2.length; ++a2) n2[a2] === -1 && (n2[a2] = 0);
    switch (n2[0]) {
      case 38:
        r2.fg = this._updateAttrColor(r2.fg, n2[1], n2[3], n2[4], n2[5]);
        break;
      case 48:
        r2.bg = this._updateAttrColor(r2.bg, n2[1], n2[3], n2[4], n2[5]);
        break;
      case 58:
        r2.extended = r2.extended.clone(), r2.extended.underlineColor = this._updateAttrColor(r2.extended.underlineColor, n2[1], n2[3], n2[4], n2[5]);
    }
    return l2;
  }
  _processUnderline(e2, i) {
    i.extended = i.extended.clone(), (!~e2 || e2 > 5) && (e2 = 1), i.extended.underlineStyle = e2, i.fg |= 268435456, e2 === 0 && (i.fg &= -268435457), i.updateExtended();
  }
  _processSGR0(e2) {
    e2.fg = X.fg, e2.bg = X.bg, e2.extended = e2.extended.clone(), e2.extended.underlineStyle = 0, e2.extended.underlineColor &= -67108864, e2.updateExtended();
  }
  charAttributes(e2) {
    if (e2.length === 1 && e2.params[0] === 0) return this._processSGR0(this._curAttrData), true;
    let i = e2.length, r2, n2 = this._curAttrData;
    for (let o2 = 0; o2 < i; o2++) r2 = e2.params[o2], r2 >= 30 && r2 <= 37 ? (n2.fg &= -50331904, n2.fg |= 16777216 | r2 - 30) : r2 >= 40 && r2 <= 47 ? (n2.bg &= -50331904, n2.bg |= 16777216 | r2 - 40) : r2 >= 90 && r2 <= 97 ? (n2.fg &= -50331904, n2.fg |= 16777216 | r2 - 90 | 8) : r2 >= 100 && r2 <= 107 ? (n2.bg &= -50331904, n2.bg |= 16777216 | r2 - 100 | 8) : r2 === 0 ? this._processSGR0(n2) : r2 === 1 ? n2.fg |= 134217728 : r2 === 3 ? n2.bg |= 67108864 : r2 === 4 ? (n2.fg |= 268435456, this._processUnderline(e2.hasSubParams(o2) ? e2.getSubParams(o2)[0] : 1, n2)) : r2 === 5 ? n2.fg |= 536870912 : r2 === 7 ? n2.fg |= 67108864 : r2 === 8 ? n2.fg |= 1073741824 : r2 === 9 ? n2.fg |= 2147483648 : r2 === 2 ? n2.bg |= 134217728 : r2 === 21 ? this._processUnderline(2, n2) : r2 === 22 ? (n2.fg &= -134217729, n2.bg &= -134217729) : r2 === 23 ? n2.bg &= -67108865 : r2 === 24 ? (n2.fg &= -268435457, this._processUnderline(0, n2)) : r2 === 25 ? n2.fg &= -536870913 : r2 === 27 ? n2.fg &= -67108865 : r2 === 28 ? n2.fg &= -1073741825 : r2 === 29 ? n2.fg &= 2147483647 : r2 === 39 ? (n2.fg &= -67108864, n2.fg |= X.fg & 16777215) : r2 === 49 ? (n2.bg &= -67108864, n2.bg |= X.bg & 16777215) : r2 === 38 || r2 === 48 || r2 === 58 ? o2 += this._extractColor(e2, o2, n2) : r2 === 53 ? n2.bg |= 1073741824 : r2 === 55 ? n2.bg &= -1073741825 : r2 === 59 ? (n2.extended = n2.extended.clone(), n2.extended.underlineColor = -1, n2.updateExtended()) : r2 === 100 ? (n2.fg &= -67108864, n2.fg |= X.fg & 16777215, n2.bg &= -67108864, n2.bg |= X.bg & 16777215) : this._logService.debug("Unknown SGR attribute: %d.", r2);
    return true;
  }
  deviceStatus(e2) {
    switch (e2.params[0]) {
      case 5:
        this._coreService.triggerDataEvent(`${b.ESC}[0n`);
        break;
      case 6:
        let i = this._activeBuffer.y + 1, r2 = this._activeBuffer.x + 1;
        this._coreService.triggerDataEvent(`${b.ESC}[${i};${r2}R`);
        break;
    }
    return true;
  }
  deviceStatusPrivate(e2) {
    switch (e2.params[0]) {
      case 6:
        let i = this._activeBuffer.y + 1, r2 = this._activeBuffer.x + 1;
        this._coreService.triggerDataEvent(`${b.ESC}[?${i};${r2}R`);
        break;
    }
    return true;
  }
  softReset(e2) {
    return this._coreService.isCursorHidden = false, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = X.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = false, true;
  }
  setCursorStyle(e2) {
    let i = e2.length === 0 ? 1 : e2.params[0];
    if (i === 0) this._coreService.decPrivateModes.cursorStyle = void 0, this._coreService.decPrivateModes.cursorBlink = void 0;
    else {
      switch (i) {
        case 1:
        case 2:
          this._coreService.decPrivateModes.cursorStyle = "block";
          break;
        case 3:
        case 4:
          this._coreService.decPrivateModes.cursorStyle = "underline";
          break;
        case 5:
        case 6:
          this._coreService.decPrivateModes.cursorStyle = "bar";
          break;
      }
      let r2 = i % 2 === 1;
      this._coreService.decPrivateModes.cursorBlink = r2;
    }
    return true;
  }
  setScrollRegion(e2) {
    let i = e2.params[0] || 1, r2;
    return (e2.length < 2 || (r2 = e2.params[1]) > this._bufferService.rows || r2 === 0) && (r2 = this._bufferService.rows), r2 > i && (this._activeBuffer.scrollTop = i - 1, this._activeBuffer.scrollBottom = r2 - 1, this._setCursor(0, 0)), true;
  }
  windowOptions(e2) {
    if (!bl(e2.params[0], this._optionsService.rawOptions.windowOptions)) return true;
    let i = e2.length > 1 ? e2.params[1] : 0;
    switch (e2.params[0]) {
      case 14:
        i !== 2 && this._onRequestWindowsOptionsReport.fire(0);
        break;
      case 16:
        this._onRequestWindowsOptionsReport.fire(1);
        break;
      case 18:
        this._bufferService && this._coreService.triggerDataEvent(`${b.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);
        break;
      case 22:
        (i === 0 || i === 2) && (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > _l && this._windowTitleStack.shift()), (i === 0 || i === 1) && (this._iconNameStack.push(this._iconName), this._iconNameStack.length > _l && this._iconNameStack.shift());
        break;
      case 23:
        (i === 0 || i === 2) && this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), (i === 0 || i === 1) && this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
        break;
    }
    return true;
  }
  saveCursor(e2) {
    return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, true;
  }
  restoreCursor(e2) {
    return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), true;
  }
  setTitle(e2) {
    return this._windowTitle = e2, this._onTitleChange.fire(e2), true;
  }
  setIconName(e2) {
    return this._iconName = e2, true;
  }
  setOrReportIndexedColor(e2) {
    let i = [], r2 = e2.split(";");
    for (; r2.length > 1; ) {
      let n2 = r2.shift(), o2 = r2.shift();
      if (/^\d+$/.exec(n2)) {
        let l2 = parseInt(n2);
        if (Sl(l2)) if (o2 === "?") i.push({ type: 0, index: l2 });
        else {
          let a2 = Ws(o2);
          a2 && i.push({ type: 1, index: l2, color: a2 });
        }
      }
    }
    return i.length && this._onColor.fire(i), true;
  }
  setHyperlink(e2) {
    let i = e2.indexOf(";");
    if (i === -1) return true;
    let r2 = e2.slice(0, i).trim(), n2 = e2.slice(i + 1);
    return n2 ? this._createHyperlink(r2, n2) : r2.trim() ? false : this._finishHyperlink();
  }
  _createHyperlink(e2, i) {
    this._getCurrentLinkId() && this._finishHyperlink();
    let r2 = e2.split(":"), n2, o2 = r2.findIndex((l2) => l2.startsWith("id="));
    return o2 !== -1 && (n2 = r2[o2].slice(3) || void 0), this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = this._oscLinkService.registerLink({ id: n2, uri: i }), this._curAttrData.updateExtended(), true;
  }
  _finishHyperlink() {
    return this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = 0, this._curAttrData.updateExtended(), true;
  }
  _setOrReportSpecialColor(e2, i) {
    let r2 = e2.split(";");
    for (let n2 = 0; n2 < r2.length && !(i >= this._specialColors.length); ++n2, ++i) if (r2[n2] === "?") this._onColor.fire([{ type: 0, index: this._specialColors[i] }]);
    else {
      let o2 = Ws(r2[n2]);
      o2 && this._onColor.fire([{ type: 1, index: this._specialColors[i], color: o2 }]);
    }
    return true;
  }
  setOrReportFgColor(e2) {
    return this._setOrReportSpecialColor(e2, 0);
  }
  setOrReportBgColor(e2) {
    return this._setOrReportSpecialColor(e2, 1);
  }
  setOrReportCursorColor(e2) {
    return this._setOrReportSpecialColor(e2, 2);
  }
  restoreIndexedColor(e2) {
    if (!e2) return this._onColor.fire([{ type: 2 }]), true;
    let i = [], r2 = e2.split(";");
    for (let n2 = 0; n2 < r2.length; ++n2) if (/^\d+$/.exec(r2[n2])) {
      let o2 = parseInt(r2[n2]);
      Sl(o2) && i.push({ type: 2, index: o2 });
    }
    return i.length && this._onColor.fire(i), true;
  }
  restoreFgColor(e2) {
    return this._onColor.fire([{ type: 2, index: 256 }]), true;
  }
  restoreBgColor(e2) {
    return this._onColor.fire([{ type: 2, index: 257 }]), true;
  }
  restoreCursorColor(e2) {
    return this._onColor.fire([{ type: 2, index: 258 }]), true;
  }
  nextLine() {
    return this._activeBuffer.x = 0, this.index(), true;
  }
  keypadApplicationMode() {
    return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire(), true;
  }
  keypadNumericMode() {
    return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire(), true;
  }
  selectDefaultCharset() {
    return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, Je), true;
  }
  selectCharset(e2) {
    return e2.length !== 2 ? (this.selectDefaultCharset(), true) : (e2[0] === "/" || this._charsetService.setgCharset(mc[e2[0]], ne[e2[1]] || Je), true);
  }
  index() {
    return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), true;
  }
  tabSet() {
    return this._activeBuffer.tabs[this._activeBuffer.x] = true, true;
  }
  reverseIndex() {
    if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
      let e2 = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
      this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e2, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
    } else this._activeBuffer.y--, this._restrictCursor();
    return true;
  }
  fullReset() {
    return this._parser.reset(), this._onRequestReset.fire(), true;
  }
  reset() {
    this._curAttrData = X.clone(), this._eraseAttrDataInternal = X.clone();
  }
  _eraseAttrData() {
    return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= this._curAttrData.bg & 67108863, this._eraseAttrDataInternal;
  }
  setgLevel(e2) {
    return this._charsetService.setgLevel(e2), true;
  }
  screenAlignmentPattern() {
    let e2 = new q();
    e2.content = 1 << 22 | 69, e2.fg = this._curAttrData.fg, e2.bg = this._curAttrData.bg, this._setCursor(0, 0);
    for (let i = 0; i < this._bufferService.rows; ++i) {
      let r2 = this._activeBuffer.ybase + this._activeBuffer.y + i, n2 = this._activeBuffer.lines.get(r2);
      n2 && (n2.fill(e2), n2.isWrapped = false);
    }
    return this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), true;
  }
  requestStatusString(e2, i) {
    let r2 = (a2) => (this._coreService.triggerDataEvent(`${b.ESC}${a2}${b.ESC}\\`), true), n2 = this._bufferService.buffer, o2 = this._optionsService.rawOptions, l2 = { block: 2, underline: 4, bar: 6 };
    return r2(e2 === '"q' ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q` : e2 === '"p' ? 'P1$r61;1"p' : e2 === "r" ? `P1$r${n2.scrollTop + 1};${n2.scrollBottom + 1}r` : e2 === "m" ? "P1$r0m" : e2 === " q" ? `P1$r${l2[o2.cursorStyle] - (o2.cursorBlink ? 1 : 0)} q` : "P0$r");
  }
  markRangeDirty(e2, i) {
    this._dirtyRowTracker.markRangeDirty(e2, i);
  }
}, Zi = class {
  constructor(t2) {
    this._bufferService = t2;
    this.clearRange();
  }
  clearRange() {
    this.start = this._bufferService.buffer.y, this.end = this._bufferService.buffer.y;
  }
  markDirty(t2) {
    t2 < this.start ? this.start = t2 : t2 > this.end && (this.end = t2);
  }
  markRangeDirty(t2, e2) {
    t2 > e2 && (gl = t2, t2 = e2, e2 = gl), t2 < this.start && (this.start = t2), e2 > this.end && (this.end = e2);
  }
  markAllDirty() {
    this.markRangeDirty(0, this._bufferService.rows - 1);
  }
};
Zi = M([S(0, F)], Zi);
function Sl(s16) {
  return 0 <= s16 && s16 < 256;
}
var _c = 5e7, El = 12, bc = 50, gn = class extends D {
  constructor(e2) {
    super();
    this._action = e2;
    this._writeBuffer = [];
    this._callbacks = [];
    this._pendingData = 0;
    this._bufferOffset = 0;
    this._isSyncWriting = false;
    this._syncCalls = 0;
    this._didUserInput = false;
    this._onWriteParsed = this._register(new v());
    this.onWriteParsed = this._onWriteParsed.event;
  }
  handleUserInput() {
    this._didUserInput = true;
  }
  writeSync(e2, i) {
    if (i !== void 0 && this._syncCalls > i) {
      this._syncCalls = 0;
      return;
    }
    if (this._pendingData += e2.length, this._writeBuffer.push(e2), this._callbacks.push(void 0), this._syncCalls++, this._isSyncWriting) return;
    this._isSyncWriting = true;
    let r2;
    for (; r2 = this._writeBuffer.shift(); ) {
      this._action(r2);
      let n2 = this._callbacks.shift();
      n2 && n2();
    }
    this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = false, this._syncCalls = 0;
  }
  write(e2, i) {
    if (this._pendingData > _c) throw new Error("write data discarded, use flow control to avoid losing data");
    if (!this._writeBuffer.length) {
      if (this._bufferOffset = 0, this._didUserInput) {
        this._didUserInput = false, this._pendingData += e2.length, this._writeBuffer.push(e2), this._callbacks.push(i), this._innerWrite();
        return;
      }
      setTimeout(() => this._innerWrite());
    }
    this._pendingData += e2.length, this._writeBuffer.push(e2), this._callbacks.push(i);
  }
  _innerWrite(e2 = 0, i = true) {
    let r2 = e2 || performance.now();
    for (; this._writeBuffer.length > this._bufferOffset; ) {
      let n2 = this._writeBuffer[this._bufferOffset], o2 = this._action(n2, i);
      if (o2) {
        let a2 = (u2) => performance.now() - r2 >= El ? setTimeout(() => this._innerWrite(0, u2)) : this._innerWrite(r2, u2);
        o2.catch((u2) => (queueMicrotask(() => {
          throw u2;
        }), Promise.resolve(false))).then(a2);
        return;
      }
      let l2 = this._callbacks[this._bufferOffset];
      if (l2 && l2(), this._bufferOffset++, this._pendingData -= n2.length, performance.now() - r2 >= El) break;
    }
    this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > bc && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(() => this._innerWrite())) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
  }
};
var ui = class {
  constructor(t2) {
    this._bufferService = t2;
    this._nextId = 1;
    this._entriesWithId = /* @__PURE__ */ new Map();
    this._dataByLinkId = /* @__PURE__ */ new Map();
  }
  registerLink(t2) {
    let e2 = this._bufferService.buffer;
    if (t2.id === void 0) {
      let a2 = e2.addMarker(e2.ybase + e2.y), u2 = { data: t2, id: this._nextId++, lines: [a2] };
      return a2.onDispose(() => this._removeMarkerFromLink(u2, a2)), this._dataByLinkId.set(u2.id, u2), u2.id;
    }
    let i = t2, r2 = this._getEntryIdKey(i), n2 = this._entriesWithId.get(r2);
    if (n2) return this.addLineToLink(n2.id, e2.ybase + e2.y), n2.id;
    let o2 = e2.addMarker(e2.ybase + e2.y), l2 = { id: this._nextId++, key: this._getEntryIdKey(i), data: i, lines: [o2] };
    return o2.onDispose(() => this._removeMarkerFromLink(l2, o2)), this._entriesWithId.set(l2.key, l2), this._dataByLinkId.set(l2.id, l2), l2.id;
  }
  addLineToLink(t2, e2) {
    let i = this._dataByLinkId.get(t2);
    if (i && i.lines.every((r2) => r2.line !== e2)) {
      let r2 = this._bufferService.buffer.addMarker(e2);
      i.lines.push(r2), r2.onDispose(() => this._removeMarkerFromLink(i, r2));
    }
  }
  getLinkData(t2) {
    return this._dataByLinkId.get(t2)?.data;
  }
  _getEntryIdKey(t2) {
    return `${t2.id};;${t2.uri}`;
  }
  _removeMarkerFromLink(t2, e2) {
    let i = t2.lines.indexOf(e2);
    i !== -1 && (t2.lines.splice(i, 1), t2.lines.length === 0 && (t2.data.id !== void 0 && this._entriesWithId.delete(t2.key), this._dataByLinkId.delete(t2.id)));
  }
};
ui = M([S(0, F)], ui);
var Tl = false, Sn = class extends D {
  constructor(e2) {
    super();
    this._windowsWrappingHeuristics = this._register(new ye());
    this._onBinary = this._register(new v());
    this.onBinary = this._onBinary.event;
    this._onData = this._register(new v());
    this.onData = this._onData.event;
    this._onLineFeed = this._register(new v());
    this.onLineFeed = this._onLineFeed.event;
    this._onResize = this._register(new v());
    this.onResize = this._onResize.event;
    this._onWriteParsed = this._register(new v());
    this.onWriteParsed = this._onWriteParsed.event;
    this._onScroll = this._register(new v());
    this._instantiationService = new ln(), this.optionsService = this._register(new dn(e2)), this._instantiationService.setService(H, this.optionsService), this._bufferService = this._register(this._instantiationService.createInstance(ni)), this._instantiationService.setService(F, this._bufferService), this._logService = this._register(this._instantiationService.createInstance(ii)), this._instantiationService.setService(nr, this._logService), this.coreService = this._register(this._instantiationService.createInstance(li)), this._instantiationService.setService(ge, this.coreService), this.coreMouseService = this._register(this._instantiationService.createInstance(ai)), this._instantiationService.setService(rr, this.coreMouseService), this.unicodeService = this._register(this._instantiationService.createInstance(Ae)), this._instantiationService.setService(Js, this.unicodeService), this._charsetService = this._instantiationService.createInstance(pn), this._instantiationService.setService(Zs, this._charsetService), this._oscLinkService = this._instantiationService.createInstance(ui), this._instantiationService.setService(sr, this._oscLinkService), this._inputHandler = this._register(new vn(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService)), this._register($.forward(this._inputHandler.onLineFeed, this._onLineFeed)), this._register(this._inputHandler), this._register($.forward(this._bufferService.onResize, this._onResize)), this._register($.forward(this.coreService.onData, this._onData)), this._register($.forward(this.coreService.onBinary, this._onBinary)), this._register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom(true))), this._register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput())), this._register(this.optionsService.onMultipleOptionChange(["windowsMode", "windowsPty"], () => this._handleWindowsPtyOptionChange())), this._register(this._bufferService.onScroll(() => {
      this._onScroll.fire({ position: this._bufferService.buffer.ydisp }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
    })), this._writeBuffer = this._register(new gn((i, r2) => this._inputHandler.parse(i, r2))), this._register($.forward(this._writeBuffer.onWriteParsed, this._onWriteParsed));
  }
  get onScroll() {
    return this._onScrollApi || (this._onScrollApi = this._register(new v()), this._onScroll.event((e2) => {
      this._onScrollApi?.fire(e2.position);
    })), this._onScrollApi.event;
  }
  get cols() {
    return this._bufferService.cols;
  }
  get rows() {
    return this._bufferService.rows;
  }
  get buffers() {
    return this._bufferService.buffers;
  }
  get options() {
    return this.optionsService.options;
  }
  set options(e2) {
    for (let i in e2) this.optionsService.options[i] = e2[i];
  }
  write(e2, i) {
    this._writeBuffer.write(e2, i);
  }
  writeSync(e2, i) {
    this._logService.logLevel <= 3 && !Tl && (this._logService.warn("writeSync is unreliable and will be removed soon."), Tl = true), this._writeBuffer.writeSync(e2, i);
  }
  input(e2, i = true) {
    this.coreService.triggerDataEvent(e2, i);
  }
  resize(e2, i) {
    isNaN(e2) || isNaN(i) || (e2 = Math.max(e2, ks), i = Math.max(i, Cs), this._bufferService.resize(e2, i));
  }
  scroll(e2, i = false) {
    this._bufferService.scroll(e2, i);
  }
  scrollLines(e2, i) {
    this._bufferService.scrollLines(e2, i);
  }
  scrollPages(e2) {
    this.scrollLines(e2 * (this.rows - 1));
  }
  scrollToTop() {
    this.scrollLines(-this._bufferService.buffer.ydisp);
  }
  scrollToBottom(e2) {
    this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
  }
  scrollToLine(e2) {
    let i = e2 - this._bufferService.buffer.ydisp;
    i !== 0 && this.scrollLines(i);
  }
  registerEscHandler(e2, i) {
    return this._inputHandler.registerEscHandler(e2, i);
  }
  registerDcsHandler(e2, i) {
    return this._inputHandler.registerDcsHandler(e2, i);
  }
  registerCsiHandler(e2, i) {
    return this._inputHandler.registerCsiHandler(e2, i);
  }
  registerOscHandler(e2, i) {
    return this._inputHandler.registerOscHandler(e2, i);
  }
  _setup() {
    this._handleWindowsPtyOptionChange();
  }
  reset() {
    this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
  }
  _handleWindowsPtyOptionChange() {
    let e2 = false, i = this.optionsService.rawOptions.windowsPty;
    i && i.buildNumber !== void 0 && i.buildNumber !== void 0 ? e2 = i.backend === "conpty" && i.buildNumber < 21376 : this.optionsService.rawOptions.windowsMode && (e2 = true), e2 ? this._enableWindowsWrappingHeuristics() : this._windowsWrappingHeuristics.clear();
  }
  _enableWindowsWrappingHeuristics() {
    if (!this._windowsWrappingHeuristics.value) {
      let e2 = [];
      e2.push(this.onLineFeed(Bs.bind(null, this._bufferService))), e2.push(this.registerCsiHandler({ final: "H" }, () => (Bs(this._bufferService), false))), this._windowsWrappingHeuristics.value = C(() => {
        for (let i of e2) i.dispose();
      });
    }
  }
};
var gc = { 48: ["0", ")"], 49: ["1", "!"], 50: ["2", "@"], 51: ["3", "#"], 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "^"], 55: ["7", "&"], 56: ["8", "*"], 57: ["9", "("], 186: [";", ":"], 187: ["=", "+"], 188: [",", "<"], 189: ["-", "_"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"], 219: ["[", "{"], 220: ["\\", "|"], 221: ["]", "}"], 222: ["'", '"'] };
function Il(s16, t2, e2, i) {
  let r2 = { type: 0, cancel: false, key: void 0 }, n2 = (s16.shiftKey ? 1 : 0) | (s16.altKey ? 2 : 0) | (s16.ctrlKey ? 4 : 0) | (s16.metaKey ? 8 : 0);
  switch (s16.keyCode) {
    case 0:
      s16.key === "UIKeyInputUpArrow" ? t2 ? r2.key = b.ESC + "OA" : r2.key = b.ESC + "[A" : s16.key === "UIKeyInputLeftArrow" ? t2 ? r2.key = b.ESC + "OD" : r2.key = b.ESC + "[D" : s16.key === "UIKeyInputRightArrow" ? t2 ? r2.key = b.ESC + "OC" : r2.key = b.ESC + "[C" : s16.key === "UIKeyInputDownArrow" && (t2 ? r2.key = b.ESC + "OB" : r2.key = b.ESC + "[B");
      break;
    case 8:
      r2.key = s16.ctrlKey ? "\b" : b.DEL, s16.altKey && (r2.key = b.ESC + r2.key);
      break;
    case 9:
      if (s16.shiftKey) {
        r2.key = b.ESC + "[Z";
        break;
      }
      r2.key = b.HT, r2.cancel = true;
      break;
    case 13:
      r2.key = s16.altKey ? b.ESC + b.CR : b.CR, r2.cancel = true;
      break;
    case 27:
      r2.key = b.ESC, s16.altKey && (r2.key = b.ESC + b.ESC), r2.cancel = true;
      break;
    case 37:
      if (s16.metaKey) break;
      n2 ? r2.key = b.ESC + "[1;" + (n2 + 1) + "D" : t2 ? r2.key = b.ESC + "OD" : r2.key = b.ESC + "[D";
      break;
    case 39:
      if (s16.metaKey) break;
      n2 ? r2.key = b.ESC + "[1;" + (n2 + 1) + "C" : t2 ? r2.key = b.ESC + "OC" : r2.key = b.ESC + "[C";
      break;
    case 38:
      if (s16.metaKey) break;
      n2 ? r2.key = b.ESC + "[1;" + (n2 + 1) + "A" : t2 ? r2.key = b.ESC + "OA" : r2.key = b.ESC + "[A";
      break;
    case 40:
      if (s16.metaKey) break;
      n2 ? r2.key = b.ESC + "[1;" + (n2 + 1) + "B" : t2 ? r2.key = b.ESC + "OB" : r2.key = b.ESC + "[B";
      break;
    case 45:
      !s16.shiftKey && !s16.ctrlKey && (r2.key = b.ESC + "[2~");
      break;
    case 46:
      n2 ? r2.key = b.ESC + "[3;" + (n2 + 1) + "~" : r2.key = b.ESC + "[3~";
      break;
    case 36:
      n2 ? r2.key = b.ESC + "[1;" + (n2 + 1) + "H" : t2 ? r2.key = b.ESC + "OH" : r2.key = b.ESC + "[H";
      break;
    case 35:
      n2 ? r2.key = b.ESC + "[1;" + (n2 + 1) + "F" : t2 ? r2.key = b.ESC + "OF" : r2.key = b.ESC + "[F";
      break;
    case 33:
      s16.shiftKey ? r2.type = 2 : s16.ctrlKey ? r2.key = b.ESC + "[5;" + (n2 + 1) + "~" : r2.key = b.ESC + "[5~";
      break;
    case 34:
      s16.shiftKey ? r2.type = 3 : s16.ctrlKey ? r2.key = b.ESC + "[6;" + (n2 + 1) + "~" : r2.key = b.ESC + "[6~";
      break;
    case 112:
      n2 ? r2.key = b.ESC + "[1;" + (n2 + 1) + "P" : r2.key = b.ESC + "OP";
      break;
    case 113:
      n2 ? r2.key = b.ESC + "[1;" + (n2 + 1) + "Q" : r2.key = b.ESC + "OQ";
      break;
    case 114:
      n2 ? r2.key = b.ESC + "[1;" + (n2 + 1) + "R" : r2.key = b.ESC + "OR";
      break;
    case 115:
      n2 ? r2.key = b.ESC + "[1;" + (n2 + 1) + "S" : r2.key = b.ESC + "OS";
      break;
    case 116:
      n2 ? r2.key = b.ESC + "[15;" + (n2 + 1) + "~" : r2.key = b.ESC + "[15~";
      break;
    case 117:
      n2 ? r2.key = b.ESC + "[17;" + (n2 + 1) + "~" : r2.key = b.ESC + "[17~";
      break;
    case 118:
      n2 ? r2.key = b.ESC + "[18;" + (n2 + 1) + "~" : r2.key = b.ESC + "[18~";
      break;
    case 119:
      n2 ? r2.key = b.ESC + "[19;" + (n2 + 1) + "~" : r2.key = b.ESC + "[19~";
      break;
    case 120:
      n2 ? r2.key = b.ESC + "[20;" + (n2 + 1) + "~" : r2.key = b.ESC + "[20~";
      break;
    case 121:
      n2 ? r2.key = b.ESC + "[21;" + (n2 + 1) + "~" : r2.key = b.ESC + "[21~";
      break;
    case 122:
      n2 ? r2.key = b.ESC + "[23;" + (n2 + 1) + "~" : r2.key = b.ESC + "[23~";
      break;
    case 123:
      n2 ? r2.key = b.ESC + "[24;" + (n2 + 1) + "~" : r2.key = b.ESC + "[24~";
      break;
    default:
      if (s16.ctrlKey && !s16.shiftKey && !s16.altKey && !s16.metaKey) s16.keyCode >= 65 && s16.keyCode <= 90 ? r2.key = String.fromCharCode(s16.keyCode - 64) : s16.keyCode === 32 ? r2.key = b.NUL : s16.keyCode >= 51 && s16.keyCode <= 55 ? r2.key = String.fromCharCode(s16.keyCode - 51 + 27) : s16.keyCode === 56 ? r2.key = b.DEL : s16.keyCode === 219 ? r2.key = b.ESC : s16.keyCode === 220 ? r2.key = b.FS : s16.keyCode === 221 && (r2.key = b.GS);
      else if ((!e2 || i) && s16.altKey && !s16.metaKey) {
        let l2 = gc[s16.keyCode]?.[s16.shiftKey ? 1 : 0];
        if (l2) r2.key = b.ESC + l2;
        else if (s16.keyCode >= 65 && s16.keyCode <= 90) {
          let a2 = s16.ctrlKey ? s16.keyCode - 64 : s16.keyCode + 32, u2 = String.fromCharCode(a2);
          s16.shiftKey && (u2 = u2.toUpperCase()), r2.key = b.ESC + u2;
        } else if (s16.keyCode === 32) r2.key = b.ESC + (s16.ctrlKey ? b.NUL : " ");
        else if (s16.key === "Dead" && s16.code.startsWith("Key")) {
          let a2 = s16.code.slice(3, 4);
          s16.shiftKey || (a2 = a2.toLowerCase()), r2.key = b.ESC + a2, r2.cancel = true;
        }
      } else e2 && !s16.altKey && !s16.ctrlKey && !s16.shiftKey && s16.metaKey ? s16.keyCode === 65 && (r2.type = 1) : s16.key && !s16.ctrlKey && !s16.altKey && !s16.metaKey && s16.keyCode >= 48 && s16.key.length === 1 ? r2.key = s16.key : s16.key && s16.ctrlKey && (s16.key === "_" && (r2.key = b.US), s16.key === "@" && (r2.key = b.NUL));
      break;
  }
  return r2;
}
var ee = 0, En = class {
  constructor(t2) {
    this._getKey = t2;
    this._array = [];
    this._insertedValues = [];
    this._flushInsertedTask = new Jt();
    this._isFlushingInserted = false;
    this._deletedIndices = [];
    this._flushDeletedTask = new Jt();
    this._isFlushingDeleted = false;
  }
  clear() {
    this._array.length = 0, this._insertedValues.length = 0, this._flushInsertedTask.clear(), this._isFlushingInserted = false, this._deletedIndices.length = 0, this._flushDeletedTask.clear(), this._isFlushingDeleted = false;
  }
  insert(t2) {
    this._flushCleanupDeleted(), this._insertedValues.length === 0 && this._flushInsertedTask.enqueue(() => this._flushInserted()), this._insertedValues.push(t2);
  }
  _flushInserted() {
    let t2 = this._insertedValues.sort((n2, o2) => this._getKey(n2) - this._getKey(o2)), e2 = 0, i = 0, r2 = new Array(this._array.length + this._insertedValues.length);
    for (let n2 = 0; n2 < r2.length; n2++) i >= this._array.length || this._getKey(t2[e2]) <= this._getKey(this._array[i]) ? (r2[n2] = t2[e2], e2++) : r2[n2] = this._array[i++];
    this._array = r2, this._insertedValues.length = 0;
  }
  _flushCleanupInserted() {
    !this._isFlushingInserted && this._insertedValues.length > 0 && this._flushInsertedTask.flush();
  }
  delete(t2) {
    if (this._flushCleanupInserted(), this._array.length === 0) return false;
    let e2 = this._getKey(t2);
    if (e2 === void 0 || (ee = this._search(e2), ee === -1) || this._getKey(this._array[ee]) !== e2) return false;
    do
      if (this._array[ee] === t2) return this._deletedIndices.length === 0 && this._flushDeletedTask.enqueue(() => this._flushDeleted()), this._deletedIndices.push(ee), true;
    while (++ee < this._array.length && this._getKey(this._array[ee]) === e2);
    return false;
  }
  _flushDeleted() {
    this._isFlushingDeleted = true;
    let t2 = this._deletedIndices.sort((n2, o2) => n2 - o2), e2 = 0, i = new Array(this._array.length - t2.length), r2 = 0;
    for (let n2 = 0; n2 < this._array.length; n2++) t2[e2] === n2 ? e2++ : i[r2++] = this._array[n2];
    this._array = i, this._deletedIndices.length = 0, this._isFlushingDeleted = false;
  }
  _flushCleanupDeleted() {
    !this._isFlushingDeleted && this._deletedIndices.length > 0 && this._flushDeletedTask.flush();
  }
  *getKeyIterator(t2) {
    if (this._flushCleanupInserted(), this._flushCleanupDeleted(), this._array.length !== 0 && (ee = this._search(t2), !(ee < 0 || ee >= this._array.length) && this._getKey(this._array[ee]) === t2)) do
      yield this._array[ee];
    while (++ee < this._array.length && this._getKey(this._array[ee]) === t2);
  }
  forEachByKey(t2, e2) {
    if (this._flushCleanupInserted(), this._flushCleanupDeleted(), this._array.length !== 0 && (ee = this._search(t2), !(ee < 0 || ee >= this._array.length) && this._getKey(this._array[ee]) === t2)) do
      e2(this._array[ee]);
    while (++ee < this._array.length && this._getKey(this._array[ee]) === t2);
  }
  values() {
    return this._flushCleanupInserted(), this._flushCleanupDeleted(), [...this._array].values();
  }
  _search(t2) {
    let e2 = 0, i = this._array.length - 1;
    for (; i >= e2; ) {
      let r2 = e2 + i >> 1, n2 = this._getKey(this._array[r2]);
      if (n2 > t2) i = r2 - 1;
      else if (n2 < t2) e2 = r2 + 1;
      else {
        for (; r2 > 0 && this._getKey(this._array[r2 - 1]) === t2; ) r2--;
        return r2;
      }
    }
    return e2;
  }
};
var Us = 0, yl = 0, Tn = class extends D {
  constructor() {
    super();
    this._decorations = new En((e2) => e2?.marker.line);
    this._onDecorationRegistered = this._register(new v());
    this.onDecorationRegistered = this._onDecorationRegistered.event;
    this._onDecorationRemoved = this._register(new v());
    this.onDecorationRemoved = this._onDecorationRemoved.event;
    this._register(C(() => this.reset()));
  }
  get decorations() {
    return this._decorations.values();
  }
  registerDecoration(e2) {
    if (e2.marker.isDisposed) return;
    let i = new Ks(e2);
    if (i) {
      let r2 = i.marker.onDispose(() => i.dispose()), n2 = i.onDispose(() => {
        n2.dispose(), i && (this._decorations.delete(i) && this._onDecorationRemoved.fire(i), r2.dispose());
      });
      this._decorations.insert(i), this._onDecorationRegistered.fire(i);
    }
    return i;
  }
  reset() {
    for (let e2 of this._decorations.values()) e2.dispose();
    this._decorations.clear();
  }
  *getDecorationsAtCell(e2, i, r2) {
    let n2 = 0, o2 = 0;
    for (let l2 of this._decorations.getKeyIterator(i)) n2 = l2.options.x ?? 0, o2 = n2 + (l2.options.width ?? 1), e2 >= n2 && e2 < o2 && (!r2 || (l2.options.layer ?? "bottom") === r2) && (yield l2);
  }
  forEachDecorationAtCell(e2, i, r2, n2) {
    this._decorations.forEachByKey(i, (o2) => {
      Us = o2.options.x ?? 0, yl = Us + (o2.options.width ?? 1), e2 >= Us && e2 < yl && (!r2 || (o2.options.layer ?? "bottom") === r2) && n2(o2);
    });
  }
}, Ks = class extends Ee {
  constructor(e2) {
    super();
    this.options = e2;
    this.onRenderEmitter = this.add(new v());
    this.onRender = this.onRenderEmitter.event;
    this._onDispose = this.add(new v());
    this.onDispose = this._onDispose.event;
    this._cachedBg = null;
    this._cachedFg = null;
    this.marker = e2.marker, this.options.overviewRulerOptions && !this.options.overviewRulerOptions.position && (this.options.overviewRulerOptions.position = "full");
  }
  get backgroundColorRGB() {
    return this._cachedBg === null && (this.options.backgroundColor ? this._cachedBg = z.toColor(this.options.backgroundColor) : this._cachedBg = void 0), this._cachedBg;
  }
  get foregroundColorRGB() {
    return this._cachedFg === null && (this.options.foregroundColor ? this._cachedFg = z.toColor(this.options.foregroundColor) : this._cachedFg = void 0), this._cachedFg;
  }
  dispose() {
    this._onDispose.fire(), super.dispose();
  }
};
var Sc = 1e3, In = class {
  constructor(t2, e2 = Sc) {
    this._renderCallback = t2;
    this._debounceThresholdMS = e2;
    this._lastRefreshMs = 0;
    this._additionalRefreshRequested = false;
  }
  dispose() {
    this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
  }
  refresh(t2, e2, i) {
    this._rowCount = i, t2 = t2 !== void 0 ? t2 : 0, e2 = e2 !== void 0 ? e2 : this._rowCount - 1, this._rowStart = this._rowStart !== void 0 ? Math.min(this._rowStart, t2) : t2, this._rowEnd = this._rowEnd !== void 0 ? Math.max(this._rowEnd, e2) : e2;
    let r2 = performance.now();
    if (r2 - this._lastRefreshMs >= this._debounceThresholdMS) this._lastRefreshMs = r2, this._innerRefresh();
    else if (!this._additionalRefreshRequested) {
      let n2 = r2 - this._lastRefreshMs, o2 = this._debounceThresholdMS - n2;
      this._additionalRefreshRequested = true, this._refreshTimeoutID = window.setTimeout(() => {
        this._lastRefreshMs = performance.now(), this._innerRefresh(), this._additionalRefreshRequested = false, this._refreshTimeoutID = void 0;
      }, o2);
    }
  }
  _innerRefresh() {
    if (this._rowStart === void 0 || this._rowEnd === void 0 || this._rowCount === void 0) return;
    let t2 = Math.max(this._rowStart, 0), e2 = Math.min(this._rowEnd, this._rowCount - 1);
    this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(t2, e2);
  }
};
var xl = 20;
var Tt = class extends D {
  constructor(e2, i, r2, n2) {
    super();
    this._terminal = e2;
    this._coreBrowserService = r2;
    this._renderService = n2;
    this._rowColumns = /* @__PURE__ */ new WeakMap();
    this._liveRegionLineCount = 0;
    this._charsToConsume = [];
    this._charsToAnnounce = "";
    let o2 = this._coreBrowserService.mainDocument;
    this._accessibilityContainer = o2.createElement("div"), this._accessibilityContainer.classList.add("xterm-accessibility"), this._rowContainer = o2.createElement("div"), this._rowContainer.setAttribute("role", "list"), this._rowContainer.classList.add("xterm-accessibility-tree"), this._rowElements = [];
    for (let l2 = 0; l2 < this._terminal.rows; l2++) this._rowElements[l2] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[l2]);
    if (this._topBoundaryFocusListener = (l2) => this._handleBoundaryFocus(l2, 0), this._bottomBoundaryFocusListener = (l2) => this._handleBoundaryFocus(l2, 1), this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._accessibilityContainer.appendChild(this._rowContainer), this._liveRegion = o2.createElement("div"), this._liveRegion.classList.add("live-region"), this._liveRegion.setAttribute("aria-live", "assertive"), this._accessibilityContainer.appendChild(this._liveRegion), this._liveRegionDebouncer = this._register(new In(this._renderRows.bind(this))), !this._terminal.element) throw new Error("Cannot enable accessibility before Terminal.open");
    this._terminal.element.insertAdjacentElement("afterbegin", this._accessibilityContainer), this._register(this._terminal.onResize((l2) => this._handleResize(l2.rows))), this._register(this._terminal.onRender((l2) => this._refreshRows(l2.start, l2.end))), this._register(this._terminal.onScroll(() => this._refreshRows())), this._register(this._terminal.onA11yChar((l2) => this._handleChar(l2))), this._register(this._terminal.onLineFeed(() => this._handleChar(`
`))), this._register(this._terminal.onA11yTab((l2) => this._handleTab(l2))), this._register(this._terminal.onKey((l2) => this._handleKey(l2.key))), this._register(this._terminal.onBlur(() => this._clearLiveRegion())), this._register(this._renderService.onDimensionsChange(() => this._refreshRowsDimensions())), this._register(L(o2, "selectionchange", () => this._handleSelectionChange())), this._register(this._coreBrowserService.onDprChange(() => this._refreshRowsDimensions())), this._refreshRowsDimensions(), this._refreshRows(), this._register(C(() => {
      this._accessibilityContainer.remove(), this._rowElements.length = 0;
    }));
  }
  _handleTab(e2) {
    for (let i = 0; i < e2; i++) this._handleChar(" ");
  }
  _handleChar(e2) {
    this._liveRegionLineCount < xl + 1 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e2 && (this._charsToAnnounce += e2) : this._charsToAnnounce += e2, e2 === `
` && (this._liveRegionLineCount++, this._liveRegionLineCount === xl + 1 && (this._liveRegion.textContent += _i.get())));
  }
  _clearLiveRegion() {
    this._liveRegion.textContent = "", this._liveRegionLineCount = 0;
  }
  _handleKey(e2) {
    this._clearLiveRegion(), new RegExp("\\p{Control}", "u").test(e2) || this._charsToConsume.push(e2);
  }
  _refreshRows(e2, i) {
    this._liveRegionDebouncer.refresh(e2, i, this._terminal.rows);
  }
  _renderRows(e2, i) {
    let r2 = this._terminal.buffer, n2 = r2.lines.length.toString();
    for (let o2 = e2; o2 <= i; o2++) {
      let l2 = r2.lines.get(r2.ydisp + o2), a2 = [], u2 = l2?.translateToString(true, void 0, void 0, a2) || "", h2 = (r2.ydisp + o2 + 1).toString(), c2 = this._rowElements[o2];
      c2 && (u2.length === 0 ? (c2.textContent = " ", this._rowColumns.set(c2, [0, 1])) : (c2.textContent = u2, this._rowColumns.set(c2, a2)), c2.setAttribute("aria-posinset", h2), c2.setAttribute("aria-setsize", n2), this._alignRowWidth(c2));
    }
    this._announceCharacters();
  }
  _announceCharacters() {
    this._charsToAnnounce.length !== 0 && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
  }
  _handleBoundaryFocus(e2, i) {
    let r2 = e2.target, n2 = this._rowElements[i === 0 ? 1 : this._rowElements.length - 2], o2 = r2.getAttribute("aria-posinset"), l2 = i === 0 ? "1" : `${this._terminal.buffer.lines.length}`;
    if (o2 === l2 || e2.relatedTarget !== n2) return;
    let a2, u2;
    if (i === 0 ? (a2 = r2, u2 = this._rowElements.pop(), this._rowContainer.removeChild(u2)) : (a2 = this._rowElements.shift(), u2 = r2, this._rowContainer.removeChild(a2)), a2.removeEventListener("focus", this._topBoundaryFocusListener), u2.removeEventListener("focus", this._bottomBoundaryFocusListener), i === 0) {
      let h2 = this._createAccessibilityTreeNode();
      this._rowElements.unshift(h2), this._rowContainer.insertAdjacentElement("afterbegin", h2);
    } else {
      let h2 = this._createAccessibilityTreeNode();
      this._rowElements.push(h2), this._rowContainer.appendChild(h2);
    }
    this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(i === 0 ? -1 : 1), this._rowElements[i === 0 ? 1 : this._rowElements.length - 2].focus(), e2.preventDefault(), e2.stopImmediatePropagation();
  }
  _handleSelectionChange() {
    if (this._rowElements.length === 0) return;
    let e2 = this._coreBrowserService.mainDocument.getSelection();
    if (!e2) return;
    if (e2.isCollapsed) {
      this._rowContainer.contains(e2.anchorNode) && this._terminal.clearSelection();
      return;
    }
    if (!e2.anchorNode || !e2.focusNode) {
      console.error("anchorNode and/or focusNode are null");
      return;
    }
    let i = { node: e2.anchorNode, offset: e2.anchorOffset }, r2 = { node: e2.focusNode, offset: e2.focusOffset };
    if ((i.node.compareDocumentPosition(r2.node) & Node.DOCUMENT_POSITION_PRECEDING || i.node === r2.node && i.offset > r2.offset) && ([i, r2] = [r2, i]), i.node.compareDocumentPosition(this._rowElements[0]) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING) && (i = { node: this._rowElements[0].childNodes[0], offset: 0 }), !this._rowContainer.contains(i.node)) return;
    let n2 = this._rowElements.slice(-1)[0];
    if (r2.node.compareDocumentPosition(n2) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_PRECEDING) && (r2 = { node: n2, offset: n2.textContent?.length ?? 0 }), !this._rowContainer.contains(r2.node)) return;
    let o2 = ({ node: u2, offset: h2 }) => {
      let c2 = u2 instanceof Text ? u2.parentNode : u2, d = parseInt(c2?.getAttribute("aria-posinset"), 10) - 1;
      if (isNaN(d)) return console.warn("row is invalid. Race condition?"), null;
      let _2 = this._rowColumns.get(c2);
      if (!_2) return console.warn("columns is null. Race condition?"), null;
      let p2 = h2 < _2.length ? _2[h2] : _2.slice(-1)[0] + 1;
      return p2 >= this._terminal.cols && (++d, p2 = 0), { row: d, column: p2 };
    }, l2 = o2(i), a2 = o2(r2);
    if (!(!l2 || !a2)) {
      if (l2.row > a2.row || l2.row === a2.row && l2.column >= a2.column) throw new Error("invalid range");
      this._terminal.select(l2.column, l2.row, (a2.row - l2.row) * this._terminal.cols - l2.column + a2.column);
    }
  }
  _handleResize(e2) {
    this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
    for (let i = this._rowContainer.children.length; i < this._terminal.rows; i++) this._rowElements[i] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[i]);
    for (; this._rowElements.length > e2; ) this._rowContainer.removeChild(this._rowElements.pop());
    this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
  }
  _createAccessibilityTreeNode() {
    let e2 = this._coreBrowserService.mainDocument.createElement("div");
    return e2.setAttribute("role", "listitem"), e2.tabIndex = -1, this._refreshRowDimensions(e2), e2;
  }
  _refreshRowsDimensions() {
    if (this._renderService.dimensions.css.cell.height) {
      Object.assign(this._accessibilityContainer.style, { width: `${this._renderService.dimensions.css.canvas.width}px`, fontSize: `${this._terminal.options.fontSize}px` }), this._rowElements.length !== this._terminal.rows && this._handleResize(this._terminal.rows);
      for (let e2 = 0; e2 < this._terminal.rows; e2++) this._refreshRowDimensions(this._rowElements[e2]), this._alignRowWidth(this._rowElements[e2]);
    }
  }
  _refreshRowDimensions(e2) {
    e2.style.height = `${this._renderService.dimensions.css.cell.height}px`;
  }
  _alignRowWidth(e2) {
    e2.style.transform = "";
    let i = e2.getBoundingClientRect().width, r2 = this._rowColumns.get(e2)?.slice(-1)?.[0];
    if (!r2) return;
    let n2 = r2 * this._renderService.dimensions.css.cell.width;
    e2.style.transform = `scaleX(${n2 / i})`;
  }
};
Tt = M([S(1, xt), S(2, ae), S(3, ce)], Tt);
var hi = class extends D {
  constructor(e2, i, r2, n2, o2) {
    super();
    this._element = e2;
    this._mouseService = i;
    this._renderService = r2;
    this._bufferService = n2;
    this._linkProviderService = o2;
    this._linkCacheDisposables = [];
    this._isMouseOut = true;
    this._wasResized = false;
    this._activeLine = -1;
    this._onShowLinkUnderline = this._register(new v());
    this.onShowLinkUnderline = this._onShowLinkUnderline.event;
    this._onHideLinkUnderline = this._register(new v());
    this.onHideLinkUnderline = this._onHideLinkUnderline.event;
    this._register(C(() => {
      Ne(this._linkCacheDisposables), this._linkCacheDisposables.length = 0, this._lastMouseEvent = void 0, this._activeProviderReplies?.clear();
    })), this._register(this._bufferService.onResize(() => {
      this._clearCurrentLink(), this._wasResized = true;
    })), this._register(L(this._element, "mouseleave", () => {
      this._isMouseOut = true, this._clearCurrentLink();
    })), this._register(L(this._element, "mousemove", this._handleMouseMove.bind(this))), this._register(L(this._element, "mousedown", this._handleMouseDown.bind(this))), this._register(L(this._element, "mouseup", this._handleMouseUp.bind(this)));
  }
  get currentLink() {
    return this._currentLink;
  }
  _handleMouseMove(e2) {
    this._lastMouseEvent = e2;
    let i = this._positionFromMouseEvent(e2, this._element, this._mouseService);
    if (!i) return;
    this._isMouseOut = false;
    let r2 = e2.composedPath();
    for (let n2 = 0; n2 < r2.length; n2++) {
      let o2 = r2[n2];
      if (o2.classList.contains("xterm")) break;
      if (o2.classList.contains("xterm-hover")) return;
    }
    (!this._lastBufferCell || i.x !== this._lastBufferCell.x || i.y !== this._lastBufferCell.y) && (this._handleHover(i), this._lastBufferCell = i);
  }
  _handleHover(e2) {
    if (this._activeLine !== e2.y || this._wasResized) {
      this._clearCurrentLink(), this._askForLink(e2, false), this._wasResized = false;
      return;
    }
    this._currentLink && this._linkAtPosition(this._currentLink.link, e2) || (this._clearCurrentLink(), this._askForLink(e2, true));
  }
  _askForLink(e2, i) {
    (!this._activeProviderReplies || !i) && (this._activeProviderReplies?.forEach((n2) => {
      n2?.forEach((o2) => {
        o2.link.dispose && o2.link.dispose();
      });
    }), this._activeProviderReplies = /* @__PURE__ */ new Map(), this._activeLine = e2.y);
    let r2 = false;
    for (let [n2, o2] of this._linkProviderService.linkProviders.entries()) i ? this._activeProviderReplies?.get(n2) && (r2 = this._checkLinkProviderResult(n2, e2, r2)) : o2.provideLinks(e2.y, (l2) => {
      if (this._isMouseOut) return;
      let a2 = l2?.map((u2) => ({ link: u2 }));
      this._activeProviderReplies?.set(n2, a2), r2 = this._checkLinkProviderResult(n2, e2, r2), this._activeProviderReplies?.size === this._linkProviderService.linkProviders.length && this._removeIntersectingLinks(e2.y, this._activeProviderReplies);
    });
  }
  _removeIntersectingLinks(e2, i) {
    let r2 = /* @__PURE__ */ new Set();
    for (let n2 = 0; n2 < i.size; n2++) {
      let o2 = i.get(n2);
      if (o2) for (let l2 = 0; l2 < o2.length; l2++) {
        let a2 = o2[l2], u2 = a2.link.range.start.y < e2 ? 0 : a2.link.range.start.x, h2 = a2.link.range.end.y > e2 ? this._bufferService.cols : a2.link.range.end.x;
        for (let c2 = u2; c2 <= h2; c2++) {
          if (r2.has(c2)) {
            o2.splice(l2--, 1);
            break;
          }
          r2.add(c2);
        }
      }
    }
  }
  _checkLinkProviderResult(e2, i, r2) {
    if (!this._activeProviderReplies) return r2;
    let n2 = this._activeProviderReplies.get(e2), o2 = false;
    for (let l2 = 0; l2 < e2; l2++) (!this._activeProviderReplies.has(l2) || this._activeProviderReplies.get(l2)) && (o2 = true);
    if (!o2 && n2) {
      let l2 = n2.find((a2) => this._linkAtPosition(a2.link, i));
      l2 && (r2 = true, this._handleNewLink(l2));
    }
    if (this._activeProviderReplies.size === this._linkProviderService.linkProviders.length && !r2) for (let l2 = 0; l2 < this._activeProviderReplies.size; l2++) {
      let a2 = this._activeProviderReplies.get(l2)?.find((u2) => this._linkAtPosition(u2.link, i));
      if (a2) {
        r2 = true, this._handleNewLink(a2);
        break;
      }
    }
    return r2;
  }
  _handleMouseDown() {
    this._mouseDownLink = this._currentLink;
  }
  _handleMouseUp(e2) {
    if (!this._currentLink) return;
    let i = this._positionFromMouseEvent(e2, this._element, this._mouseService);
    i && this._mouseDownLink && Ec(this._mouseDownLink.link, this._currentLink.link) && this._linkAtPosition(this._currentLink.link, i) && this._currentLink.link.activate(e2, this._currentLink.link.text);
  }
  _clearCurrentLink(e2, i) {
    !this._currentLink || !this._lastMouseEvent || (!e2 || !i || this._currentLink.link.range.start.y >= e2 && this._currentLink.link.range.end.y <= i) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, Ne(this._linkCacheDisposables), this._linkCacheDisposables.length = 0);
  }
  _handleNewLink(e2) {
    if (!this._lastMouseEvent) return;
    let i = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
    i && this._linkAtPosition(e2.link, i) && (this._currentLink = e2, this._currentLink.state = { decorations: { underline: e2.link.decorations === void 0 ? true : e2.link.decorations.underline, pointerCursor: e2.link.decorations === void 0 ? true : e2.link.decorations.pointerCursor }, isHovered: true }, this._linkHover(this._element, e2.link, this._lastMouseEvent), e2.link.decorations = {}, Object.defineProperties(e2.link.decorations, { pointerCursor: { get: () => this._currentLink?.state?.decorations.pointerCursor, set: (r2) => {
      this._currentLink?.state && this._currentLink.state.decorations.pointerCursor !== r2 && (this._currentLink.state.decorations.pointerCursor = r2, this._currentLink.state.isHovered && this._element.classList.toggle("xterm-cursor-pointer", r2));
    } }, underline: { get: () => this._currentLink?.state?.decorations.underline, set: (r2) => {
      this._currentLink?.state && this._currentLink?.state?.decorations.underline !== r2 && (this._currentLink.state.decorations.underline = r2, this._currentLink.state.isHovered && this._fireUnderlineEvent(e2.link, r2));
    } } }), this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange((r2) => {
      if (!this._currentLink) return;
      let n2 = r2.start === 0 ? 0 : r2.start + 1 + this._bufferService.buffer.ydisp, o2 = this._bufferService.buffer.ydisp + 1 + r2.end;
      if (this._currentLink.link.range.start.y >= n2 && this._currentLink.link.range.end.y <= o2 && (this._clearCurrentLink(n2, o2), this._lastMouseEvent)) {
        let l2 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
        l2 && this._askForLink(l2, false);
      }
    })));
  }
  _linkHover(e2, i, r2) {
    this._currentLink?.state && (this._currentLink.state.isHovered = true, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(i, true), this._currentLink.state.decorations.pointerCursor && e2.classList.add("xterm-cursor-pointer")), i.hover && i.hover(r2, i.text);
  }
  _fireUnderlineEvent(e2, i) {
    let r2 = e2.range, n2 = this._bufferService.buffer.ydisp, o2 = this._createLinkUnderlineEvent(r2.start.x - 1, r2.start.y - n2 - 1, r2.end.x, r2.end.y - n2 - 1, void 0);
    (i ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(o2);
  }
  _linkLeave(e2, i, r2) {
    this._currentLink?.state && (this._currentLink.state.isHovered = false, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(i, false), this._currentLink.state.decorations.pointerCursor && e2.classList.remove("xterm-cursor-pointer")), i.leave && i.leave(r2, i.text);
  }
  _linkAtPosition(e2, i) {
    let r2 = e2.range.start.y * this._bufferService.cols + e2.range.start.x, n2 = e2.range.end.y * this._bufferService.cols + e2.range.end.x, o2 = i.y * this._bufferService.cols + i.x;
    return r2 <= o2 && o2 <= n2;
  }
  _positionFromMouseEvent(e2, i, r2) {
    let n2 = r2.getCoords(e2, i, this._bufferService.cols, this._bufferService.rows);
    if (n2) return { x: n2[0], y: n2[1] + this._bufferService.buffer.ydisp };
  }
  _createLinkUnderlineEvent(e2, i, r2, n2, o2) {
    return { x1: e2, y1: i, x2: r2, y2: n2, cols: this._bufferService.cols, fg: o2 };
  }
};
hi = M([S(1, Dt), S(2, ce), S(3, F), S(4, lr)], hi);
function Ec(s16, t2) {
  return s16.text === t2.text && s16.range.start.x === t2.range.start.x && s16.range.start.y === t2.range.start.y && s16.range.end.x === t2.range.end.x && s16.range.end.y === t2.range.end.y;
}
var yn = class extends Sn {
  constructor(e2 = {}) {
    super(e2);
    this._linkifier = this._register(new ye());
    this.browser = tn;
    this._keyDownHandled = false;
    this._keyDownSeen = false;
    this._keyPressHandled = false;
    this._unprocessedDeadKey = false;
    this._accessibilityManager = this._register(new ye());
    this._onCursorMove = this._register(new v());
    this.onCursorMove = this._onCursorMove.event;
    this._onKey = this._register(new v());
    this.onKey = this._onKey.event;
    this._onRender = this._register(new v());
    this.onRender = this._onRender.event;
    this._onSelectionChange = this._register(new v());
    this.onSelectionChange = this._onSelectionChange.event;
    this._onTitleChange = this._register(new v());
    this.onTitleChange = this._onTitleChange.event;
    this._onBell = this._register(new v());
    this.onBell = this._onBell.event;
    this._onFocus = this._register(new v());
    this._onBlur = this._register(new v());
    this._onA11yCharEmitter = this._register(new v());
    this._onA11yTabEmitter = this._register(new v());
    this._onWillOpen = this._register(new v());
    this._setup(), this._decorationService = this._instantiationService.createInstance(Tn), this._instantiationService.setService(Be, this._decorationService), this._linkProviderService = this._instantiationService.createInstance(Qr), this._instantiationService.setService(lr, this._linkProviderService), this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(wt)), this._register(this._inputHandler.onRequestBell(() => this._onBell.fire())), this._register(this._inputHandler.onRequestRefreshRows((i) => this.refresh(i?.start ?? 0, i?.end ?? this.rows - 1))), this._register(this._inputHandler.onRequestSendFocus(() => this._reportFocus())), this._register(this._inputHandler.onRequestReset(() => this.reset())), this._register(this._inputHandler.onRequestWindowsOptionsReport((i) => this._reportWindowsOptions(i))), this._register(this._inputHandler.onColor((i) => this._handleColorEvent(i))), this._register($.forward(this._inputHandler.onCursorMove, this._onCursorMove)), this._register($.forward(this._inputHandler.onTitleChange, this._onTitleChange)), this._register($.forward(this._inputHandler.onA11yChar, this._onA11yCharEmitter)), this._register($.forward(this._inputHandler.onA11yTab, this._onA11yTabEmitter)), this._register(this._bufferService.onResize((i) => this._afterResize(i.cols, i.rows))), this._register(C(() => {
      this._customKeyEventHandler = void 0, this.element?.parentNode?.removeChild(this.element);
    }));
  }
  get linkifier() {
    return this._linkifier.value;
  }
  get onFocus() {
    return this._onFocus.event;
  }
  get onBlur() {
    return this._onBlur.event;
  }
  get onA11yChar() {
    return this._onA11yCharEmitter.event;
  }
  get onA11yTab() {
    return this._onA11yTabEmitter.event;
  }
  get onWillOpen() {
    return this._onWillOpen.event;
  }
  _handleColorEvent(e2) {
    if (this._themeService) for (let i of e2) {
      let r2, n2 = "";
      switch (i.index) {
        case 256:
          r2 = "foreground", n2 = "10";
          break;
        case 257:
          r2 = "background", n2 = "11";
          break;
        case 258:
          r2 = "cursor", n2 = "12";
          break;
        default:
          r2 = "ansi", n2 = "4;" + i.index;
      }
      switch (i.type) {
        case 0:
          let o2 = U.toColorRGB(r2 === "ansi" ? this._themeService.colors.ansi[i.index] : this._themeService.colors[r2]);
          this.coreService.triggerDataEvent(`${b.ESC}]${n2};${ml(o2)}${fs.ST}`);
          break;
        case 1:
          if (r2 === "ansi") this._themeService.modifyColors((l2) => l2.ansi[i.index] = j.toColor(...i.color));
          else {
            let l2 = r2;
            this._themeService.modifyColors((a2) => a2[l2] = j.toColor(...i.color));
          }
          break;
        case 2:
          this._themeService.restoreColor(i.index);
          break;
      }
    }
  }
  _setup() {
    super._setup(), this._customKeyEventHandler = void 0;
  }
  get buffer() {
    return this.buffers.active;
  }
  focus() {
    this.textarea && this.textarea.focus({ preventScroll: true });
  }
  _handleScreenReaderModeOptionChange(e2) {
    e2 ? !this._accessibilityManager.value && this._renderService && (this._accessibilityManager.value = this._instantiationService.createInstance(Tt, this)) : this._accessibilityManager.clear();
  }
  _handleTextAreaFocus(e2) {
    this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(b.ESC + "[I"), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
  }
  blur() {
    return this.textarea?.blur();
  }
  _handleTextAreaBlur() {
    this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(b.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
  }
  _syncTextArea() {
    if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper.isComposing || !this._renderService) return;
    let e2 = this.buffer.ybase + this.buffer.y, i = this.buffer.lines.get(e2);
    if (!i) return;
    let r2 = Math.min(this.buffer.x, this.cols - 1), n2 = this._renderService.dimensions.css.cell.height, o2 = i.getWidth(r2), l2 = this._renderService.dimensions.css.cell.width * o2, a2 = this.buffer.y * this._renderService.dimensions.css.cell.height, u2 = r2 * this._renderService.dimensions.css.cell.width;
    this.textarea.style.left = u2 + "px", this.textarea.style.top = a2 + "px", this.textarea.style.width = l2 + "px", this.textarea.style.height = n2 + "px", this.textarea.style.lineHeight = n2 + "px", this.textarea.style.zIndex = "-5";
  }
  _initGlobal() {
    this._bindKeys(), this._register(L(this.element, "copy", (i) => {
      this.hasSelection() && Vs(i, this._selectionService);
    }));
    let e2 = (i) => qs(i, this.textarea, this.coreService, this.optionsService);
    this._register(L(this.textarea, "paste", e2)), this._register(L(this.element, "paste", e2)), Ss ? this._register(L(this.element, "mousedown", (i) => {
      i.button === 2 && Pn(i, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
    })) : this._register(L(this.element, "contextmenu", (i) => {
      Pn(i, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
    })), Bi && this._register(L(this.element, "auxclick", (i) => {
      i.button === 1 && Mn(i, this.textarea, this.screenElement);
    }));
  }
  _bindKeys() {
    this._register(L(this.textarea, "keyup", (e2) => this._keyUp(e2), true)), this._register(L(this.textarea, "keydown", (e2) => this._keyDown(e2), true)), this._register(L(this.textarea, "keypress", (e2) => this._keyPress(e2), true)), this._register(L(this.textarea, "compositionstart", () => this._compositionHelper.compositionstart())), this._register(L(this.textarea, "compositionupdate", (e2) => this._compositionHelper.compositionupdate(e2))), this._register(L(this.textarea, "compositionend", () => this._compositionHelper.compositionend())), this._register(L(this.textarea, "input", (e2) => this._inputEvent(e2), true)), this._register(this.onRender(() => this._compositionHelper.updateCompositionElements()));
  }
  open(e2) {
    if (!e2) throw new Error("Terminal requires a parent element.");
    if (e2.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this.element?.ownerDocument.defaultView && this._coreBrowserService) {
      this.element.ownerDocument.defaultView !== this._coreBrowserService.window && (this._coreBrowserService.window = this.element.ownerDocument.defaultView);
      return;
    }
    this._document = e2.ownerDocument, this.options.documentOverride && this.options.documentOverride instanceof Document && (this._document = this.optionsService.rawOptions.documentOverride), this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), e2.appendChild(this.element);
    let i = this._document.createDocumentFragment();
    this._viewportElement = this._document.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), i.appendChild(this._viewportElement), this.screenElement = this._document.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._register(L(this.screenElement, "mousemove", (o2) => this.updateCursorStyle(o2))), this._helperContainer = this._document.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), i.appendChild(this.screenElement);
    let r2 = this.textarea = this._document.createElement("textarea");
    this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", mi.get()), Ts || this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this._register(this.optionsService.onSpecificOptionChange("disableStdin", () => r2.readOnly = this.optionsService.rawOptions.disableStdin)), this.textarea.readOnly = this.optionsService.rawOptions.disableStdin, this._coreBrowserService = this._register(this._instantiationService.createInstance(Jr, this.textarea, e2.ownerDocument.defaultView ?? window, this._document ?? typeof window < "u" ? window.document : null)), this._instantiationService.setService(ae, this._coreBrowserService), this._register(L(this.textarea, "focus", (o2) => this._handleTextAreaFocus(o2))), this._register(L(this.textarea, "blur", () => this._handleTextAreaBlur())), this._helperContainer.appendChild(this.textarea), this._charSizeService = this._instantiationService.createInstance(jt, this._document, this._helperContainer), this._instantiationService.setService(nt, this._charSizeService), this._themeService = this._instantiationService.createInstance(ti), this._instantiationService.setService(Re, this._themeService), this._characterJoinerService = this._instantiationService.createInstance(ct), this._instantiationService.setService(or, this._characterJoinerService), this._renderService = this._register(this._instantiationService.createInstance(Qt, this.rows, this.screenElement)), this._instantiationService.setService(ce, this._renderService), this._register(this._renderService.onRenderedViewportChange((o2) => this._onRender.fire(o2))), this.onResize((o2) => this._renderService.resize(o2.cols, o2.rows)), this._compositionView = this._document.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance($t, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this._mouseService = this._instantiationService.createInstance(Xt), this._instantiationService.setService(Dt, this._mouseService);
    let n2 = this._linkifier.value = this._register(this._instantiationService.createInstance(hi, this.screenElement));
    this.element.appendChild(i);
    try {
      this._onWillOpen.fire(this.element);
    } catch {
    }
    this._renderService.hasRenderer() || this._renderService.setRenderer(this._createRenderer()), this._register(this.onCursorMove(() => {
      this._renderService.handleCursorMove(), this._syncTextArea();
    })), this._register(this.onResize(() => this._renderService.handleResize(this.cols, this.rows))), this._register(this.onBlur(() => this._renderService.handleBlur())), this._register(this.onFocus(() => this._renderService.handleFocus())), this._viewport = this._register(this._instantiationService.createInstance(zt, this.element, this.screenElement)), this._register(this._viewport.onRequestScrollLines((o2) => {
      super.scrollLines(o2, false), this.refresh(0, this.rows - 1);
    })), this._selectionService = this._register(this._instantiationService.createInstance(ei, this.element, this.screenElement, n2)), this._instantiationService.setService(Qs, this._selectionService), this._register(this._selectionService.onRequestScrollLines((o2) => this.scrollLines(o2.amount, o2.suppressScrollEvent))), this._register(this._selectionService.onSelectionChange(() => this._onSelectionChange.fire())), this._register(this._selectionService.onRequestRedraw((o2) => this._renderService.handleSelectionChanged(o2.start, o2.end, o2.columnSelectMode))), this._register(this._selectionService.onLinuxMouseSelection((o2) => {
      this.textarea.value = o2, this.textarea.focus(), this.textarea.select();
    })), this._register($.any(this._onScroll.event, this._inputHandler.onScroll)(() => {
      this._selectionService.refresh(), this._viewport?.queueSync();
    })), this._register(this._instantiationService.createInstance(Gt, this.screenElement)), this._register(L(this.element, "mousedown", (o2) => this._selectionService.handleMouseDown(o2))), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager.value = this._instantiationService.createInstance(Tt, this)), this._register(this.optionsService.onSpecificOptionChange("screenReaderMode", (o2) => this._handleScreenReaderModeOptionChange(o2))), this.options.overviewRuler.width && (this._overviewRulerRenderer = this._register(this._instantiationService.createInstance(bt, this._viewportElement, this.screenElement))), this.optionsService.onSpecificOptionChange("overviewRuler", (o2) => {
      !this._overviewRulerRenderer && o2 && this._viewportElement && this.screenElement && (this._overviewRulerRenderer = this._register(this._instantiationService.createInstance(bt, this._viewportElement, this.screenElement)));
    }), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
  }
  _createRenderer() {
    return this._instantiationService.createInstance(Yt, this, this._document, this.element, this.screenElement, this._viewportElement, this._helperContainer, this.linkifier);
  }
  bindMouse() {
    let e2 = this, i = this.element;
    function r2(l2) {
      let a2 = e2._mouseService.getMouseReportCoords(l2, e2.screenElement);
      if (!a2) return false;
      let u2, h2;
      switch (l2.overrideType || l2.type) {
        case "mousemove":
          h2 = 32, l2.buttons === void 0 ? (u2 = 3, l2.button !== void 0 && (u2 = l2.button < 3 ? l2.button : 3)) : u2 = l2.buttons & 1 ? 0 : l2.buttons & 4 ? 1 : l2.buttons & 2 ? 2 : 3;
          break;
        case "mouseup":
          h2 = 0, u2 = l2.button < 3 ? l2.button : 3;
          break;
        case "mousedown":
          h2 = 1, u2 = l2.button < 3 ? l2.button : 3;
          break;
        case "wheel":
          if (e2._customWheelEventHandler && e2._customWheelEventHandler(l2) === false) return false;
          let c2 = l2.deltaY;
          if (c2 === 0 || e2.coreMouseService.consumeWheelEvent(l2, e2._renderService?.dimensions?.device?.cell?.height, e2._coreBrowserService?.dpr) === 0) return false;
          h2 = c2 < 0 ? 0 : 1, u2 = 4;
          break;
        default:
          return false;
      }
      return h2 === void 0 || u2 === void 0 || u2 > 4 ? false : e2.coreMouseService.triggerMouseEvent({ col: a2.col, row: a2.row, x: a2.x, y: a2.y, button: u2, action: h2, ctrl: l2.ctrlKey, alt: l2.altKey, shift: l2.shiftKey });
    }
    let n2 = { mouseup: null, wheel: null, mousedrag: null, mousemove: null }, o2 = { mouseup: (l2) => (r2(l2), l2.buttons || (this._document.removeEventListener("mouseup", n2.mouseup), n2.mousedrag && this._document.removeEventListener("mousemove", n2.mousedrag)), this.cancel(l2)), wheel: (l2) => (r2(l2), this.cancel(l2, true)), mousedrag: (l2) => {
      l2.buttons && r2(l2);
    }, mousemove: (l2) => {
      l2.buttons || r2(l2);
    } };
    this._register(this.coreMouseService.onProtocolChange((l2) => {
      l2 ? (this.optionsService.rawOptions.logLevel === "debug" && this._logService.debug("Binding to mouse events:", this.coreMouseService.explainEvents(l2)), this.element.classList.add("enable-mouse-events"), this._selectionService.disable()) : (this._logService.debug("Unbinding from mouse events."), this.element.classList.remove("enable-mouse-events"), this._selectionService.enable()), l2 & 8 ? n2.mousemove || (i.addEventListener("mousemove", o2.mousemove), n2.mousemove = o2.mousemove) : (i.removeEventListener("mousemove", n2.mousemove), n2.mousemove = null), l2 & 16 ? n2.wheel || (i.addEventListener("wheel", o2.wheel, { passive: false }), n2.wheel = o2.wheel) : (i.removeEventListener("wheel", n2.wheel), n2.wheel = null), l2 & 2 ? n2.mouseup || (n2.mouseup = o2.mouseup) : (this._document.removeEventListener("mouseup", n2.mouseup), n2.mouseup = null), l2 & 4 ? n2.mousedrag || (n2.mousedrag = o2.mousedrag) : (this._document.removeEventListener("mousemove", n2.mousedrag), n2.mousedrag = null);
    })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this._register(L(i, "mousedown", (l2) => {
      if (l2.preventDefault(), this.focus(), !(!this.coreMouseService.areMouseEventsActive || this._selectionService.shouldForceSelection(l2))) return r2(l2), n2.mouseup && this._document.addEventListener("mouseup", n2.mouseup), n2.mousedrag && this._document.addEventListener("mousemove", n2.mousedrag), this.cancel(l2);
    })), this._register(L(i, "wheel", (l2) => {
      if (!n2.wheel) {
        if (this._customWheelEventHandler && this._customWheelEventHandler(l2) === false) return false;
        if (!this.buffer.hasScrollback) {
          if (l2.deltaY === 0) return false;
          if (e2.coreMouseService.consumeWheelEvent(l2, e2._renderService?.dimensions?.device?.cell?.height, e2._coreBrowserService?.dpr) === 0) return this.cancel(l2, true);
          let h2 = b.ESC + (this.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (l2.deltaY < 0 ? "A" : "B");
          return this.coreService.triggerDataEvent(h2, true), this.cancel(l2, true);
        }
      }
    }, { passive: false }));
  }
  refresh(e2, i) {
    this._renderService?.refreshRows(e2, i);
  }
  updateCursorStyle(e2) {
    this._selectionService?.shouldColumnSelect(e2) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
  }
  _showCursor() {
    this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = true, this.refresh(this.buffer.y, this.buffer.y));
  }
  scrollLines(e2, i) {
    this._viewport ? this._viewport.scrollLines(e2) : super.scrollLines(e2, i), this.refresh(0, this.rows - 1);
  }
  scrollPages(e2) {
    this.scrollLines(e2 * (this.rows - 1));
  }
  scrollToTop() {
    this.scrollLines(-this._bufferService.buffer.ydisp);
  }
  scrollToBottom(e2) {
    e2 && this._viewport ? this._viewport.scrollToLine(this.buffer.ybase, true) : this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
  }
  scrollToLine(e2) {
    let i = e2 - this._bufferService.buffer.ydisp;
    i !== 0 && this.scrollLines(i);
  }
  paste(e2) {
    Cn(e2, this.textarea, this.coreService, this.optionsService);
  }
  attachCustomKeyEventHandler(e2) {
    this._customKeyEventHandler = e2;
  }
  attachCustomWheelEventHandler(e2) {
    this._customWheelEventHandler = e2;
  }
  registerLinkProvider(e2) {
    return this._linkProviderService.registerLinkProvider(e2);
  }
  registerCharacterJoiner(e2) {
    if (!this._characterJoinerService) throw new Error("Terminal must be opened first");
    let i = this._characterJoinerService.register(e2);
    return this.refresh(0, this.rows - 1), i;
  }
  deregisterCharacterJoiner(e2) {
    if (!this._characterJoinerService) throw new Error("Terminal must be opened first");
    this._characterJoinerService.deregister(e2) && this.refresh(0, this.rows - 1);
  }
  get markers() {
    return this.buffer.markers;
  }
  registerMarker(e2) {
    return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e2);
  }
  registerDecoration(e2) {
    return this._decorationService.registerDecoration(e2);
  }
  hasSelection() {
    return this._selectionService ? this._selectionService.hasSelection : false;
  }
  select(e2, i, r2) {
    this._selectionService.setSelection(e2, i, r2);
  }
  getSelection() {
    return this._selectionService ? this._selectionService.selectionText : "";
  }
  getSelectionPosition() {
    if (!(!this._selectionService || !this._selectionService.hasSelection)) return { start: { x: this._selectionService.selectionStart[0], y: this._selectionService.selectionStart[1] }, end: { x: this._selectionService.selectionEnd[0], y: this._selectionService.selectionEnd[1] } };
  }
  clearSelection() {
    this._selectionService?.clearSelection();
  }
  selectAll() {
    this._selectionService?.selectAll();
  }
  selectLines(e2, i) {
    this._selectionService?.selectLines(e2, i);
  }
  _keyDown(e2) {
    if (this._keyDownHandled = false, this._keyDownSeen = true, this._customKeyEventHandler && this._customKeyEventHandler(e2) === false) return false;
    let i = this.browser.isMac && this.options.macOptionIsMeta && e2.altKey;
    if (!i && !this._compositionHelper.keydown(e2)) return this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(true), false;
    !i && (e2.key === "Dead" || e2.key === "AltGraph") && (this._unprocessedDeadKey = true);
    let r2 = Il(e2, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
    if (this.updateCursorStyle(e2), r2.type === 3 || r2.type === 2) {
      let n2 = this.rows - 1;
      return this.scrollLines(r2.type === 2 ? -n2 : n2), this.cancel(e2, true);
    }
    if (r2.type === 1 && this.selectAll(), this._isThirdLevelShift(this.browser, e2) || (r2.cancel && this.cancel(e2, true), !r2.key) || e2.key && !e2.ctrlKey && !e2.altKey && !e2.metaKey && e2.key.length === 1 && e2.key.charCodeAt(0) >= 65 && e2.key.charCodeAt(0) <= 90) return true;
    if (this._unprocessedDeadKey) return this._unprocessedDeadKey = false, true;
    if ((r2.key === b.ETX || r2.key === b.CR) && (this.textarea.value = ""), this._onKey.fire({ key: r2.key, domEvent: e2 }), this._showCursor(), this.coreService.triggerDataEvent(r2.key, true), !this.optionsService.rawOptions.screenReaderMode || e2.altKey || e2.ctrlKey) return this.cancel(e2, true);
    this._keyDownHandled = true;
  }
  _isThirdLevelShift(e2, i) {
    let r2 = e2.isMac && !this.options.macOptionIsMeta && i.altKey && !i.ctrlKey && !i.metaKey || e2.isWindows && i.altKey && i.ctrlKey && !i.metaKey || e2.isWindows && i.getModifierState("AltGraph");
    return i.type === "keypress" ? r2 : r2 && (!i.keyCode || i.keyCode > 47);
  }
  _keyUp(e2) {
    this._keyDownSeen = false, !(this._customKeyEventHandler && this._customKeyEventHandler(e2) === false) && (Tc(e2) || this.focus(), this.updateCursorStyle(e2), this._keyPressHandled = false);
  }
  _keyPress(e2) {
    let i;
    if (this._keyPressHandled = false, this._keyDownHandled || this._customKeyEventHandler && this._customKeyEventHandler(e2) === false) return false;
    if (this.cancel(e2), e2.charCode) i = e2.charCode;
    else if (e2.which === null || e2.which === void 0) i = e2.keyCode;
    else if (e2.which !== 0 && e2.charCode !== 0) i = e2.which;
    else return false;
    return !i || (e2.altKey || e2.ctrlKey || e2.metaKey) && !this._isThirdLevelShift(this.browser, e2) ? false : (i = String.fromCharCode(i), this._onKey.fire({ key: i, domEvent: e2 }), this._showCursor(), this.coreService.triggerDataEvent(i, true), this._keyPressHandled = true, this._unprocessedDeadKey = false, true);
  }
  _inputEvent(e2) {
    if (e2.data && e2.inputType === "insertText" && (!e2.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
      if (this._keyPressHandled) return false;
      this._unprocessedDeadKey = false;
      let i = e2.data;
      return this.coreService.triggerDataEvent(i, true), this.cancel(e2), true;
    }
    return false;
  }
  resize(e2, i) {
    if (e2 === this.cols && i === this.rows) {
      this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
      return;
    }
    super.resize(e2, i);
  }
  _afterResize(e2, i) {
    this._charSizeService?.measure();
  }
  clear() {
    if (!(this.buffer.ybase === 0 && this.buffer.y === 0)) {
      this.buffer.clearAllMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
      for (let e2 = 1; e2 < this.rows; e2++) this.buffer.lines.push(this.buffer.getBlankLine(X));
      this._onScroll.fire({ position: this.buffer.ydisp }), this.refresh(0, this.rows - 1);
    }
  }
  reset() {
    this.options.rows = this.rows, this.options.cols = this.cols;
    let e2 = this._customKeyEventHandler;
    this._setup(), super.reset(), this._selectionService?.reset(), this._decorationService.reset(), this._customKeyEventHandler = e2, this.refresh(0, this.rows - 1);
  }
  clearTextureAtlas() {
    this._renderService?.clearTextureAtlas();
  }
  _reportFocus() {
    this.element?.classList.contains("focus") ? this.coreService.triggerDataEvent(b.ESC + "[I") : this.coreService.triggerDataEvent(b.ESC + "[O");
  }
  _reportWindowsOptions(e2) {
    if (this._renderService) switch (e2) {
      case 0:
        let i = this._renderService.dimensions.css.canvas.width.toFixed(0), r2 = this._renderService.dimensions.css.canvas.height.toFixed(0);
        this.coreService.triggerDataEvent(`${b.ESC}[4;${r2};${i}t`);
        break;
      case 1:
        let n2 = this._renderService.dimensions.css.cell.width.toFixed(0), o2 = this._renderService.dimensions.css.cell.height.toFixed(0);
        this.coreService.triggerDataEvent(`${b.ESC}[6;${o2};${n2}t`);
        break;
    }
  }
  cancel(e2, i) {
    if (!(!this.options.cancelEvents && !i)) return e2.preventDefault(), e2.stopPropagation(), false;
  }
};
function Tc(s16) {
  return s16.keyCode === 16 || s16.keyCode === 17 || s16.keyCode === 18;
}
var xn = class {
  constructor() {
    this._addons = [];
  }
  dispose() {
    for (let t2 = this._addons.length - 1; t2 >= 0; t2--) this._addons[t2].instance.dispose();
  }
  loadAddon(t2, e2) {
    let i = { instance: e2, dispose: e2.dispose, isDisposed: false };
    this._addons.push(i), e2.dispose = () => this._wrappedAddonDispose(i), e2.activate(t2);
  }
  _wrappedAddonDispose(t2) {
    if (t2.isDisposed) return;
    let e2 = -1;
    for (let i = 0; i < this._addons.length; i++) if (this._addons[i] === t2) {
      e2 = i;
      break;
    }
    if (e2 === -1) throw new Error("Could not dispose an addon that has not been loaded");
    t2.isDisposed = true, t2.dispose.apply(t2.instance), this._addons.splice(e2, 1);
  }
};
var wn = class {
  constructor(t2) {
    this._line = t2;
  }
  get isWrapped() {
    return this._line.isWrapped;
  }
  get length() {
    return this._line.length;
  }
  getCell(t2, e2) {
    if (!(t2 < 0 || t2 >= this._line.length)) return e2 ? (this._line.loadCell(t2, e2), e2) : this._line.loadCell(t2, new q());
  }
  translateToString(t2, e2, i) {
    return this._line.translateToString(t2, e2, i);
  }
};
var Ji = class {
  constructor(t2, e2) {
    this._buffer = t2;
    this.type = e2;
  }
  init(t2) {
    return this._buffer = t2, this;
  }
  get cursorY() {
    return this._buffer.y;
  }
  get cursorX() {
    return this._buffer.x;
  }
  get viewportY() {
    return this._buffer.ydisp;
  }
  get baseY() {
    return this._buffer.ybase;
  }
  get length() {
    return this._buffer.lines.length;
  }
  getLine(t2) {
    let e2 = this._buffer.lines.get(t2);
    if (e2) return new wn(e2);
  }
  getNullCell() {
    return new q();
  }
};
var Dn = class extends D {
  constructor(e2) {
    super();
    this._core = e2;
    this._onBufferChange = this._register(new v());
    this.onBufferChange = this._onBufferChange.event;
    this._normal = new Ji(this._core.buffers.normal, "normal"), this._alternate = new Ji(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active));
  }
  get active() {
    if (this._core.buffers.active === this._core.buffers.normal) return this.normal;
    if (this._core.buffers.active === this._core.buffers.alt) return this.alternate;
    throw new Error("Active buffer is neither normal nor alternate");
  }
  get normal() {
    return this._normal.init(this._core.buffers.normal);
  }
  get alternate() {
    return this._alternate.init(this._core.buffers.alt);
  }
};
var Rn = class {
  constructor(t2) {
    this._core = t2;
  }
  registerCsiHandler(t2, e2) {
    return this._core.registerCsiHandler(t2, (i) => e2(i.toArray()));
  }
  addCsiHandler(t2, e2) {
    return this.registerCsiHandler(t2, e2);
  }
  registerDcsHandler(t2, e2) {
    return this._core.registerDcsHandler(t2, (i, r2) => e2(i, r2.toArray()));
  }
  addDcsHandler(t2, e2) {
    return this.registerDcsHandler(t2, e2);
  }
  registerEscHandler(t2, e2) {
    return this._core.registerEscHandler(t2, e2);
  }
  addEscHandler(t2, e2) {
    return this.registerEscHandler(t2, e2);
  }
  registerOscHandler(t2, e2) {
    return this._core.registerOscHandler(t2, e2);
  }
  addOscHandler(t2, e2) {
    return this.registerOscHandler(t2, e2);
  }
};
var Ln = class {
  constructor(t2) {
    this._core = t2;
  }
  register(t2) {
    this._core.unicodeService.register(t2);
  }
  get versions() {
    return this._core.unicodeService.versions;
  }
  get activeVersion() {
    return this._core.unicodeService.activeVersion;
  }
  set activeVersion(t2) {
    this._core.unicodeService.activeVersion = t2;
  }
};
var Ic = ["cols", "rows"], Ue = 0, Dl = class extends D {
  constructor(t2) {
    super(), this._core = this._register(new yn(t2)), this._addonManager = this._register(new xn()), this._publicOptions = { ...this._core.options };
    let e2 = (r2) => this._core.options[r2], i = (r2, n2) => {
      this._checkReadonlyOptions(r2), this._core.options[r2] = n2;
    };
    for (let r2 in this._core.options) {
      let n2 = { get: e2.bind(this, r2), set: i.bind(this, r2) };
      Object.defineProperty(this._publicOptions, r2, n2);
    }
  }
  _checkReadonlyOptions(t2) {
    if (Ic.includes(t2)) throw new Error(`Option "${t2}" can only be set in the constructor`);
  }
  _checkProposedApi() {
    if (!this._core.optionsService.rawOptions.allowProposedApi) throw new Error("You must set the allowProposedApi option to true to use proposed API");
  }
  get onBell() {
    return this._core.onBell;
  }
  get onBinary() {
    return this._core.onBinary;
  }
  get onCursorMove() {
    return this._core.onCursorMove;
  }
  get onData() {
    return this._core.onData;
  }
  get onKey() {
    return this._core.onKey;
  }
  get onLineFeed() {
    return this._core.onLineFeed;
  }
  get onRender() {
    return this._core.onRender;
  }
  get onResize() {
    return this._core.onResize;
  }
  get onScroll() {
    return this._core.onScroll;
  }
  get onSelectionChange() {
    return this._core.onSelectionChange;
  }
  get onTitleChange() {
    return this._core.onTitleChange;
  }
  get onWriteParsed() {
    return this._core.onWriteParsed;
  }
  get element() {
    return this._core.element;
  }
  get parser() {
    return this._parser || (this._parser = new Rn(this._core)), this._parser;
  }
  get unicode() {
    return this._checkProposedApi(), new Ln(this._core);
  }
  get textarea() {
    return this._core.textarea;
  }
  get rows() {
    return this._core.rows;
  }
  get cols() {
    return this._core.cols;
  }
  get buffer() {
    return this._buffer || (this._buffer = this._register(new Dn(this._core))), this._buffer;
  }
  get markers() {
    return this._checkProposedApi(), this._core.markers;
  }
  get modes() {
    let t2 = this._core.coreService.decPrivateModes, e2 = "none";
    switch (this._core.coreMouseService.activeProtocol) {
      case "X10":
        e2 = "x10";
        break;
      case "VT200":
        e2 = "vt200";
        break;
      case "DRAG":
        e2 = "drag";
        break;
      case "ANY":
        e2 = "any";
        break;
    }
    return { applicationCursorKeysMode: t2.applicationCursorKeys, applicationKeypadMode: t2.applicationKeypad, bracketedPasteMode: t2.bracketedPasteMode, insertMode: this._core.coreService.modes.insertMode, mouseTrackingMode: e2, originMode: t2.origin, reverseWraparoundMode: t2.reverseWraparound, sendFocusMode: t2.sendFocus, synchronizedOutputMode: t2.synchronizedOutput, wraparoundMode: t2.wraparound };
  }
  get options() {
    return this._publicOptions;
  }
  set options(t2) {
    for (let e2 in t2) this._publicOptions[e2] = t2[e2];
  }
  blur() {
    this._core.blur();
  }
  focus() {
    this._core.focus();
  }
  input(t2, e2 = true) {
    this._core.input(t2, e2);
  }
  resize(t2, e2) {
    this._verifyIntegers(t2, e2), this._core.resize(t2, e2);
  }
  open(t2) {
    this._core.open(t2);
  }
  attachCustomKeyEventHandler(t2) {
    this._core.attachCustomKeyEventHandler(t2);
  }
  attachCustomWheelEventHandler(t2) {
    this._core.attachCustomWheelEventHandler(t2);
  }
  registerLinkProvider(t2) {
    return this._core.registerLinkProvider(t2);
  }
  registerCharacterJoiner(t2) {
    return this._checkProposedApi(), this._core.registerCharacterJoiner(t2);
  }
  deregisterCharacterJoiner(t2) {
    this._checkProposedApi(), this._core.deregisterCharacterJoiner(t2);
  }
  registerMarker(t2 = 0) {
    return this._verifyIntegers(t2), this._core.registerMarker(t2);
  }
  registerDecoration(t2) {
    return this._checkProposedApi(), this._verifyPositiveIntegers(t2.x ?? 0, t2.width ?? 0, t2.height ?? 0), this._core.registerDecoration(t2);
  }
  hasSelection() {
    return this._core.hasSelection();
  }
  select(t2, e2, i) {
    this._verifyIntegers(t2, e2, i), this._core.select(t2, e2, i);
  }
  getSelection() {
    return this._core.getSelection();
  }
  getSelectionPosition() {
    return this._core.getSelectionPosition();
  }
  clearSelection() {
    this._core.clearSelection();
  }
  selectAll() {
    this._core.selectAll();
  }
  selectLines(t2, e2) {
    this._verifyIntegers(t2, e2), this._core.selectLines(t2, e2);
  }
  dispose() {
    super.dispose();
  }
  scrollLines(t2) {
    this._verifyIntegers(t2), this._core.scrollLines(t2);
  }
  scrollPages(t2) {
    this._verifyIntegers(t2), this._core.scrollPages(t2);
  }
  scrollToTop() {
    this._core.scrollToTop();
  }
  scrollToBottom() {
    this._core.scrollToBottom();
  }
  scrollToLine(t2) {
    this._verifyIntegers(t2), this._core.scrollToLine(t2);
  }
  clear() {
    this._core.clear();
  }
  write(t2, e2) {
    this._core.write(t2, e2);
  }
  writeln(t2, e2) {
    this._core.write(t2), this._core.write(`\r
`, e2);
  }
  paste(t2) {
    this._core.paste(t2);
  }
  refresh(t2, e2) {
    this._verifyIntegers(t2, e2), this._core.refresh(t2, e2);
  }
  reset() {
    this._core.reset();
  }
  clearTextureAtlas() {
    this._core.clearTextureAtlas();
  }
  loadAddon(t2) {
    this._addonManager.loadAddon(this, t2);
  }
  static get strings() {
    return { get promptLabel() {
      return mi.get();
    }, set promptLabel(t2) {
      mi.set(t2);
    }, get tooMuchOutput() {
      return _i.get();
    }, set tooMuchOutput(t2) {
      _i.set(t2);
    } };
  }
  _verifyIntegers(...t2) {
    for (Ue of t2) if (Ue === 1 / 0 || isNaN(Ue) || Ue % 1 !== 0) throw new Error("This API only accepts integers");
  }
  _verifyPositiveIntegers(...t2) {
    for (Ue of t2) if (Ue && (Ue === 1 / 0 || isNaN(Ue) || Ue % 1 !== 0 || Ue < 0)) throw new Error("This API only accepts positive integers");
  }
};
/**
 * Copyright (c) 2014-2024 The xterm.js authors. All rights reserved.
 * @license MIT
 *
 * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
 * @license MIT
 *
 * Originally forked from (with the author's permission):
 *   Fabrice Bellard's javascript vt100 for jslinux:
 *   http://bellard.org/jslinux/
 *   Copyright (c) 2011 Fabrice Bellard
 */
var h = 2, _ = 1, o = class {
  activate(e2) {
    this._terminal = e2;
  }
  dispose() {
  }
  fit() {
    let e2 = this.proposeDimensions();
    if (!e2 || !this._terminal || isNaN(e2.cols) || isNaN(e2.rows)) return;
    let t2 = this._terminal._core;
    (this._terminal.rows !== e2.rows || this._terminal.cols !== e2.cols) && (t2._renderService.clear(), this._terminal.resize(e2.cols, e2.rows));
  }
  proposeDimensions() {
    if (!this._terminal || !this._terminal.element || !this._terminal.element.parentElement) return;
    let t2 = this._terminal._core._renderService.dimensions;
    if (t2.css.cell.width === 0 || t2.css.cell.height === 0) return;
    let s16 = this._terminal.options.scrollback === 0 ? 0 : this._terminal.options.overviewRuler?.width || 14, r2 = window.getComputedStyle(this._terminal.element.parentElement), l2 = parseInt(r2.getPropertyValue("height")), a2 = Math.max(0, parseInt(r2.getPropertyValue("width"))), i = window.getComputedStyle(this._terminal.element), n2 = { top: parseInt(i.getPropertyValue("padding-top")), bottom: parseInt(i.getPropertyValue("padding-bottom")), right: parseInt(i.getPropertyValue("padding-right")), left: parseInt(i.getPropertyValue("padding-left")) }, m2 = n2.top + n2.bottom, d = n2.right + n2.left, c2 = l2 - m2, p2 = a2 - d - s16;
    return { cols: Math.max(h, Math.floor(p2 / t2.css.cell.width)), rows: Math.max(_, Math.floor(c2 / t2.css.cell.height)) };
  }
};
const STEP_ORDER = ["welcome", "npm-install", "init", "cli-tool", "baseline", "how-to"];
const STEP_LABELS = {
  "welcome": "Welcome",
  "npm-install": "Install",
  "init": "Initialize",
  "cli-tool": "CLI Tool",
  "baseline": "Baseline",
  "how-to": "How-To"
};
const EmbeddedTerminal = reactExports.forwardRef(
  function EmbeddedTerminal2({ style }, ref) {
    const containerRef = reactExports.useRef(null);
    const termRef = reactExports.useRef(null);
    const fitRef = reactExports.useRef(null);
    reactExports.useImperativeHandle(ref, () => ({
      write(data) {
        termRef.current?.write(data);
      },
      clear() {
        termRef.current?.clear();
      },
      getDimensions() {
        const t2 = termRef.current;
        return { cols: t2?.cols || 80, rows: t2?.rows || 24 };
      }
    }));
    reactExports.useEffect(() => {
      if (!containerRef.current) return;
      const term = new Dl({
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 12,
        lineHeight: 1.5,
        cursorBlink: true,
        theme: {
          background: "#0d1117",
          foreground: "#c9d1d9",
          cursor: "#c9d1d9",
          black: "#0d1117",
          red: "#ff7b72",
          green: "#3fb950",
          yellow: "#d29922",
          blue: "#58a6ff",
          magenta: "#bc8cff",
          cyan: "#39c5cf",
          white: "#b1bac4",
          brightBlack: "#6e7681",
          brightRed: "#ffa198",
          brightGreen: "#56d364",
          brightYellow: "#e3b341",
          brightBlue: "#79c0ff",
          brightMagenta: "#d2a8ff",
          brightCyan: "#56d4dd",
          brightWhite: "#f0f6fc"
        }
      });
      const fit = new o();
      term.loadAddon(fit);
      term.open(containerRef.current);
      const dataDispose = term.onData((data) => window.api.onboard.write(data));
      const ro2 = new ResizeObserver(() => {
        if (!containerRef.current) return;
        const { offsetWidth, offsetHeight } = containerRef.current;
        if (offsetWidth === 0 || offsetHeight === 0) return;
        fit.fit();
        window.api.onboard.resize({ cols: term.cols, rows: term.rows });
      });
      ro2.observe(containerRef.current);
      requestAnimationFrame(() => {
        fit.fit();
        window.api.onboard.resize({ cols: term.cols, rows: term.rows });
      });
      termRef.current = term;
      fitRef.current = fit;
      return () => {
        dataDispose.dispose();
        ro2.disconnect();
        term.dispose();
        termRef.current = null;
        fitRef.current = null;
      };
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: containerRef,
        style: {
          background: "#0d1117",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          ...style
        }
      }
    );
  }
);
function StepIndicator({ current }) {
  const currentIdx = STEP_ORDER.indexOf(current);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    marginBottom: 32
  }, children: STEP_ORDER.map((step, idx) => {
    const done = idx < currentIdx;
    const active = idx === currentIdx;
    const pending = idx > currentIdx;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", flex: idx < STEP_ORDER.length - 1 ? 1 : 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: 28,
          height: 28,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: "var(--weight-semibold)",
          transition: "background 0.2s, color 0.2s",
          background: done ? "var(--accent-fg)" : active ? "var(--accent-muted)" : "var(--bg-inset)",
          color: done ? "var(--bg-app)" : active ? "var(--accent-fg)" : "var(--fg-faint)",
          border: active ? "2px solid var(--accent-fg)" : "2px solid transparent"
        }, children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", size: 12 }) : idx + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontSize: 10,
          fontWeight: active ? "var(--weight-semibold)" : "var(--weight-normal)",
          color: pending ? "var(--fg-faint)" : active ? "var(--accent-fg)" : "var(--fg-muted)",
          whiteSpace: "nowrap"
        }, children: STEP_LABELS[step] })
      ] }),
      idx < STEP_ORDER.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        flex: 1,
        height: 2,
        background: done ? "var(--accent-fg)" : "var(--border-muted)",
        marginBottom: 22,
        marginLeft: 4,
        marginRight: 4,
        transition: "background 0.2s"
      } })
    ] }, step);
  }) });
}
function AbandonLink({ onAbandon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: onAbandon,
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--fg-subtle)",
        fontSize: "var(--text-sm)",
        padding: "4px 0",
        marginTop: 8,
        textDecoration: "underline",
        textDecorationColor: "var(--border-muted)"
      },
      children: "Back to project selector"
    }
  );
}
function WelcomeStep({ onNext, onAbandon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      width: 56,
      height: 56,
      borderRadius: "var(--radius-lg)",
      background: "var(--accent-muted)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--accent-fg)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "rocket-launch", size: 28 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-xl)", fontWeight: "var(--weight-semibold)", color: "var(--fg-default)" }, children: "Set up OpenSpec" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-sm)", color: "var(--fg-subtle)", lineHeight: "var(--leading-relaxed)" }, children: "This project doesn't have OpenSpec initialized yet. OpenSpec is a spec-driven workflow that lets you define what to build before asking your AI coding tool to implement it — keeping changes reviewable, structured, and trackable." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "var(--bg-inset)",
      border: "1px solid var(--border-muted)",
      borderRadius: "var(--radius-md)",
      padding: "14px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-xs)", fontWeight: "var(--weight-semibold)", color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }, children: "This wizard will" }),
      [
        { icon: "package", label: "Install the OpenSpec npm package" },
        { icon: "folder-open", label: "Initialize OpenSpec in your project" },
        { icon: "terminal", label: "Register an AI CLI tool (Claude Code, Aider, etc.)" },
        { icon: "sparkle", label: "Generate specs for each capability of your app" },
        { icon: "book-open", label: "Show you how to create and apply changes" }
      ].map(({ icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: icon, size: 15, style: { color: "var(--accent-fg)", flexShrink: 0 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "var(--text-sm)", color: "var(--fg-default)" }, children: label })
      ] }, label))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: onNext, children: "Get Started" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AbandonLink, { onAbandon })
    ] })
  ] });
}
function NpmInstallStep({ onNext, onAbandon }) {
  const [status, setStatus] = reactExports.useState("idle");
  const termRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const unsub = window.api.onboard.onData((data) => termRef.current?.write(data));
    return unsub;
  }, []);
  async function handleInstall() {
    termRef.current?.clear();
    setStatus("running");
    const { exitCode } = await window.api.onboard.exec({
      command: "npm",
      args: ["install", "-g", "openspec"],
      cwd: "/"
    });
    setStatus(exitCode === 0 ? "success" : "error");
  }
  async function handleContinue() {
    await window.api.onboard.cancel();
    onNext();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)", color: "var(--fg-default)" }, children: "Install OpenSpec" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "var(--text-sm)", color: "var(--fg-subtle)", lineHeight: "var(--leading-relaxed)" }, children: [
        "Install the OpenSpec CLI globally via npm. This gives you the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: { fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--bg-inset)", padding: "1px 5px", borderRadius: 4 }, children: "openspec" }),
        " command used throughout this workflow."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      background: "var(--bg-inset)",
      border: "1px solid var(--border-muted)",
      borderRadius: "var(--radius-md)",
      padding: "10px 14px",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--fg-muted)"
    }, children: "npm install -g openspec" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmbeddedTerminal,
      {
        ref: termRef,
        style: { height: 320, display: status === "idle" ? "none" : "block" }
      }
    ),
    status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBanner, { type: "error", children: "Installation failed. Check the output above and ensure npm is available on your PATH, then retry." }),
    status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBanner, { type: "success", children: "OpenSpec installed successfully." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
        status === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: handleInstall, children: "Install" }),
        status === "running" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", loading: true, children: "Installing…" }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "md", onClick: handleInstall, children: "Retry" }),
        status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: handleContinue, children: "Continue" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AbandonLink, { onAbandon })
    ] })
  ] });
}
function InitStep({ projectPath, onNext, onAbandon }) {
  const [repoType, setRepoType] = reactExports.useState("single");
  const [packages, setPackages] = reactExports.useState([]);
  const [scanning, setScanning] = reactExports.useState(false);
  const [status, setStatus] = reactExports.useState("idle");
  const [currentPkg, setCurrentPkg] = reactExports.useState("");
  const termRef = reactExports.useRef(null);
  const statusRef = reactExports.useRef("idle");
  const pollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const unsub = window.api.onboard.onData((data) => termRef.current?.write(data));
    return () => {
      unsub();
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);
  function markStatus(s16) {
    statusRef.current = s16;
    setStatus(s16);
  }
  async function handleRepoTypeChange(type) {
    setRepoType(type);
    markStatus("idle");
    if (type === "monorepo" && packages.length === 0) {
      setScanning(true);
      const found = await window.api.repo.listPackages(projectPath);
      setPackages(found.map((p2) => ({ ...p2, checked: true })));
      setScanning(false);
    }
  }
  function togglePackage(path) {
    setPackages((prev) => prev.map((p2) => p2.path === path ? { ...p2, checked: !p2.checked } : p2));
  }
  async function handleInit() {
    termRef.current?.clear();
    markStatus("running");
    if (pollRef.current) clearInterval(pollRef.current);
    const targets = repoType === "single" ? [projectPath] : packages.filter((p2) => p2.checked).map((p2) => p2.path);
    (async () => {
      for (const cwd of targets) {
        if (statusRef.current !== "running") return;
        setCurrentPkg(repoType === "monorepo" ? cwd.split("/").pop() : "project");
        const { exitCode } = await window.api.onboard.exec({ command: "openspec", args: ["init"], cwd });
        if (exitCode !== 0 && statusRef.current === "running") {
          markStatus("error");
          return;
        }
      }
      if (statusRef.current === "running") markStatus("success");
    })();
    pollRef.current = setInterval(async () => {
      if (statusRef.current !== "running") {
        clearInterval(pollRef.current);
        return;
      }
      const checks = await Promise.all(
        targets.map((cwd) => window.api.repo.checkPath(`${cwd}/openspec/config.yaml`))
      );
      if (checks.every(Boolean)) {
        clearInterval(pollRef.current);
        markStatus("success");
      }
    }, 2e3);
  }
  async function handleContinue() {
    if (pollRef.current) clearInterval(pollRef.current);
    await window.api.onboard.cancel();
    onNext();
  }
  const selectedCount = repoType === "monorepo" ? packages.filter((p2) => p2.checked).length : 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)", color: "var(--fg-default)" }, children: "Initialize OpenSpec" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "var(--text-sm)", color: "var(--fg-subtle)", lineHeight: "var(--leading-relaxed)" }, children: [
        "Run ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: { fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--bg-inset)", padding: "1px 5px", borderRadius: 4 }, children: "openspec init" }),
        " to create the spec folder structure in your project."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 8 }, children: ["single", "monorepo"].map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => handleRepoTypeChange(type),
        style: {
          flex: 1,
          padding: "10px 14px",
          borderRadius: "var(--radius-md)",
          border: `2px solid ${repoType === type ? "var(--accent-fg)" : "var(--border-muted)"}`,
          background: repoType === type ? "var(--accent-muted)" : "var(--bg-inset)",
          color: repoType === type ? "var(--accent-fg)" : "var(--fg-muted)",
          cursor: "pointer",
          fontSize: "var(--text-sm)",
          fontWeight: repoType === type ? "var(--weight-semibold)" : "var(--weight-normal)",
          textAlign: "left",
          transition: "border-color 0.15s, background 0.15s"
        },
        children: type === "single" ? "Single app" : "Monorepo"
      },
      type
    )) }),
    repoType === "monorepo" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: scanning ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, color: "var(--fg-subtle)", fontSize: "var(--text-sm)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 14 }),
      "Scanning for packages…"
    ] }) : packages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "var(--text-sm)", color: "var(--fg-subtle)", padding: "8px 0" }, children: [
      "No packages with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: { fontFamily: "var(--font-mono)", fontSize: 11 }, children: "package.json" }),
      " found in the root. Will initialize in the root directory."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      border: "1px solid var(--border-muted)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden"
    }, children: packages.map((pkg, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          borderTop: idx > 0 ? "1px solid var(--border-muted)" : "none",
          cursor: "pointer",
          background: "var(--bg-subtle)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: pkg.checked,
              onChange: () => togglePackage(pkg.path),
              style: { accentColor: "var(--accent-fg)", width: 14, height: 14, flexShrink: 0 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "var(--text-sm)", color: "var(--fg-default)", fontFamily: "var(--font-mono)" }, children: pkg.name })
        ]
      },
      pkg.path
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmbeddedTerminal,
      {
        ref: termRef,
        style: { height: 320, display: status === "idle" ? "none" : "block" }
      }
    ),
    status === "running" && currentPkg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "var(--text-xs)", color: "var(--fg-subtle)" }, children: [
      "Initializing ",
      currentPkg,
      "…"
    ] }),
    status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBanner, { type: "error", children: "Initialization failed. Check the output above and retry." }),
    status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBanner, { type: "success", children: "OpenSpec initialized successfully." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
        status === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: handleInit, disabled: repoType === "monorepo" && selectedCount === 0, children: "Initialize" }),
        status === "running" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", loading: true, children: "Initializing…" }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "md", onClick: handleInit, children: "Retry" }),
        status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: handleContinue, children: "Continue" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AbandonLink, { onAbandon })
    ] })
  ] });
}
function CliToolStep({ prefs, onPrefsChange, onToolRegistered, onNext, onAbandon }) {
  const [detecting, setDetecting] = reactExports.useState(true);
  const [detectedTools, setDetected] = reactExports.useState([]);
  const [selectedId, setSelectedId] = reactExports.useState(null);
  const [manualLabel, setManualLabel] = reactExports.useState("");
  const [manualCmd, setManualCmd] = reactExports.useState("");
  const [manualArgs, setManualArgs] = reactExports.useState("");
  const [saved, setSaved] = reactExports.useState(false);
  reactExports.useEffect(() => {
    window.api.cli.detectTools().then((found) => {
      setDetected(found);
      if (found.length > 0) setSelectedId(found[0].id);
      setDetecting(false);
    });
  }, []);
  function handleAddTool() {
    let newTool;
    if (detectedTools.length > 0 && selectedId) {
      const found = detectedTools.find((t2) => t2.id === selectedId);
      newTool = { id: found.id, label: found.label, command: found.command, args: found.args };
    } else {
      const id2 = slugify$1(manualLabel) || `tool-${Date.now()}`;
      newTool = {
        id: prefs.cliTools.find((t2) => t2.id === id2) ? `${id2}-${Date.now()}` : id2,
        label: manualLabel.trim(),
        command: manualCmd.trim(),
        args: manualArgs.trim().split(/\s+/).filter(Boolean)
      };
    }
    const next = [...prefs.cliTools.filter((t2) => t2.id !== newTool.id), newTool];
    onPrefsChange({ ...prefs, cliTools: next, defaultTool: newTool.id });
    onToolRegistered(newTool.id);
    setSaved(true);
  }
  function handleSkip() {
    onToolRegistered(null);
    onNext();
  }
  const manualValid = manualLabel.trim() && manualCmd.trim() && manualArgs.trim();
  const argsWarning = manualArgs.trim().length > 0 && !manualArgs.includes("{command}");
  if (detecting) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StepHeader, { title: "Set Up CLI Tool", subtitle: "Detecting installed AI CLI tools…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, color: "var(--fg-subtle)", fontSize: "var(--text-sm)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 14 }),
        " Detecting tools…"
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StepHeader,
      {
        title: "Set Up CLI Tool",
        subtitle: "Register the AI coding tool you'll use to apply proposals. CodeSpec invokes it on your behalf."
      }
    ),
    saved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBanner, { type: "success", children: "Tool registered and set as default." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: onNext, children: "Continue" })
    ] }) : detectedTools.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-xs)", fontWeight: "var(--weight-semibold)", color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }, children: "Detected tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          border: "1px solid var(--border-muted)",
          borderRadius: "var(--radius-md)",
          overflow: "hidden"
        }, children: detectedTools.map((tool, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 14px",
              borderTop: idx > 0 ? "1px solid var(--border-muted)" : "none",
              cursor: "pointer",
              background: selectedId === tool.id ? "var(--accent-muted)" : "var(--bg-subtle)",
              transition: "background 0.1s"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "radio",
                  name: "detected-tool",
                  value: tool.id,
                  checked: selectedId === tool.id,
                  onChange: () => setSelectedId(tool.id),
                  style: { accentColor: "var(--accent-fg)", flexShrink: 0 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--fg-default)" }, children: tool.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--fg-subtle)", marginTop: 2 }, children: [
                  tool.command,
                  " ",
                  tool.args.join(" ")
                ] })
              ] })
            ]
          },
          tool.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: handleAddTool, disabled: !selectedId, children: "Add Tool" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleSkip,
              style: { background: "none", border: "none", cursor: "pointer", color: "var(--fg-subtle)", fontSize: "var(--text-sm)", padding: "4px 0" },
              children: "Skip for now"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AbandonLink, { onAbandon })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: "var(--bg-inset)",
        border: "1px solid var(--border-muted)",
        borderRadius: "var(--radius-md)",
        padding: "14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-xs)", color: "var(--fg-subtle)" }, children: "No tools detected automatically. Enter your tool details manually." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InlineField, { label: "Label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            style: inputStyle,
            placeholder: "Claude Code",
            value: manualLabel,
            onChange: (e2) => setManualLabel(e2.target.value)
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InlineField, { label: "Command", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            style: { ...inputStyle, fontFamily: "var(--font-mono)" },
            placeholder: "claude",
            value: manualCmd,
            onChange: (e2) => setManualCmd(e2.target.value)
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InlineField, { label: "Args", warning: argsWarning ? "Must include {command} placeholder" : void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            style: { ...inputStyle, fontFamily: "var(--font-mono)" },
            placeholder: "{command}",
            value: manualArgs,
            onChange: (e2) => setManualArgs(e2.target.value)
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: handleAddTool, disabled: !manualValid, children: "Add Tool" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleSkip,
              style: { background: "none", border: "none", cursor: "pointer", color: "var(--fg-subtle)", fontSize: "var(--text-sm)", padding: "4px 0" },
              children: "Skip for now"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AbandonLink, { onAbandon })
      ] })
    ] })
  ] });
}
function BaselineStep({
  projectPath,
  prefs,
  registeredToolId,
  onNext,
  onAbandon
}) {
  const [status, setStatus] = reactExports.useState("idle");
  const [hasFiles, setHasFiles] = reactExports.useState(null);
  const termRef = reactExports.useRef(null);
  const statusRef = reactExports.useRef("idle");
  const pollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const unsub = window.api.onboard.onData((data) => termRef.current?.write(data));
    return () => {
      unsub();
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);
  reactExports.useEffect(() => {
    window.api.repo.hasAppFiles(projectPath).then(setHasFiles);
  }, [projectPath]);
  function markStatus(s16) {
    statusRef.current = s16;
    setStatus(s16);
  }
  async function handleRunBaseline() {
    if (!registeredToolId) return;
    const tool = prefs.cliTools.find((t2) => t2.id === registeredToolId);
    if (!tool) return;
    termRef.current?.clear();
    markStatus("running");
    if (pollRef.current) clearInterval(pollRef.current);
    const prompt = "Run /openspec explore to understand this project — what it does, its key capabilities, and how it is structured. Only look at files within this project directory. Do not look in parent directories or outside this project under any circumstances. Once you have that context, create a spec file for each major capability under openspec/specs/<capability-name>/spec.md, using the OpenSpec spec format (Requirements with SHALL statements and Scenarios with WHEN/THEN). Cover every distinct feature or function. If the project has little or no application code yet, base the specs on any signals within this directory (README, package.json, config files, folder names). If you find absolutely nothing to work from, create a single placeholder spec at openspec/specs/core/spec.md that describes a generic starting capability, and note that the project is empty so the user should update it once they have added code.";
    const resolvedArgs = tool.args.map((a2) => a2.replace("{command}", prompt));
    window.api.onboard.exec({ command: tool.command, args: resolvedArgs, cwd: projectPath }).then(({ exitCode }) => {
      if (statusRef.current === "running") markStatus(exitCode === 0 ? "success" : "error");
    });
    const specsDir = `${projectPath}/openspec/specs`;
    pollRef.current = setInterval(async () => {
      if (statusRef.current !== "running") {
        clearInterval(pollRef.current);
        return;
      }
      const hasSpecs = await window.api.repo.dirHasEntries(specsDir);
      if (hasSpecs) {
        clearInterval(pollRef.current);
        markStatus("success");
      }
    }, 3e3);
  }
  async function handleContinue() {
    if (pollRef.current) clearInterval(pollRef.current);
    await window.api.onboard.cancel();
    onNext();
  }
  if (hasFiles === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StepHeader, { title: "Generate Specs", subtitle: "Checking project…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, color: "var(--fg-subtle)", fontSize: "var(--text-sm)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 14 }),
        " Scanning project files…"
      ] })
    ] });
  }
  if (!registeredToolId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StepHeader,
        {
          title: "Generate Specs",
          subtitle: "Skipped — no CLI tool was registered."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        background: "var(--bg-inset)",
        border: "1px solid var(--border-muted)",
        borderRadius: "var(--radius-md)",
        padding: "14px 16px",
        fontSize: "var(--text-sm)",
        color: "var(--fg-subtle)",
        lineHeight: "var(--leading-relaxed)"
      }, children: "You can generate baseline specs later by registering a CLI tool in Settings and running the explore prompt from the terminal." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: onNext, children: "Continue" })
    ] });
  }
  if (!hasFiles) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StepHeader,
        {
          title: "Generate Specs",
          subtitle: "Skipped — empty project."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: "var(--bg-inset)",
        border: "1px solid var(--border-muted)",
        borderRadius: "var(--radius-md)",
        padding: "14px 16px",
        fontSize: "var(--text-sm)",
        color: "var(--fg-subtle)",
        lineHeight: "var(--leading-relaxed)"
      }, children: [
        "This project has no application files yet. Once you've added code, come back and run spec generation from the terminal — your AI tool will explore the codebase and populate ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: { fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--bg-app)", padding: "1px 5px", borderRadius: 4 }, children: "openspec/specs/" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: onNext, children: "Continue" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StepHeader,
      {
        title: "Generate Specs",
        subtitle: "Your AI CLI tool will explore this project and generate a spec file for each major capability under openspec/specs/. This may take a few minutes."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmbeddedTerminal,
      {
        ref: termRef,
        style: { height: 400, display: status === "idle" ? "none" : "block" }
      }
    ),
    status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBanner, { type: "error", children: "Spec generation failed. Check the output above and retry, or skip." }),
    status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBanner, { type: "success", children: "Specs generated successfully." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
        status === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: handleRunBaseline, children: "Generate Specs" }),
        status === "running" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", loading: true, children: "Generating…" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleContinue,
              style: { background: "none", border: "none", cursor: "pointer", color: "var(--fg-subtle)", fontSize: "var(--text-sm)", padding: "4px 0" },
              children: "Continue anyway"
            }
          )
        ] }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "md", onClick: handleRunBaseline, children: "Retry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleContinue,
              style: { background: "none", border: "none", cursor: "pointer", color: "var(--fg-subtle)", fontSize: "var(--text-sm)", padding: "4px 0" },
              children: "Skip"
            }
          )
        ] }),
        status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "var(--text-xs)", color: "var(--fg-subtle)" }, children: "Only continue once the AI has finished its response." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: handleContinue, children: "Continue" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AbandonLink, { onAbandon })
    ] })
  ] });
}
function HowToStep({ projectPath, onFinish, onAbandon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-xl)", fontWeight: "var(--weight-semibold)", color: "var(--fg-default)" }, children: "You're ready!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-sm)", color: "var(--fg-subtle)", lineHeight: "var(--leading-relaxed)" }, children: "Here's how the core OpenSpec workflow works." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
      {
        num: "1",
        title: "Create a proposal",
        desc: "Click New Proposal in the toolbar. Describe what you want to build and your AI CLI tool will generate a structured proposal document with a spec and task list."
      },
      {
        num: "2",
        title: "Review the proposal",
        desc: "Read through the generated proposal and task list in the sidebar. You can edit any artifact before applying."
      },
      {
        num: "3",
        title: "Apply the proposal",
        desc: "Click Apply to invoke your CLI tool again — this time to implement the tasks defined in the proposal, one by one."
      },
      {
        num: "4",
        title: "Archive when done",
        desc: "Once all tasks are complete, archive the change to keep your workspace clean. Archived changes are preserved for reference."
      }
    ].map(({ num, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      gap: 14,
      padding: "14px 16px",
      background: "var(--bg-inset)",
      border: "1px solid var(--border-muted)",
      borderRadius: "var(--radius-md)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "var(--accent-muted)",
        color: "var(--accent-fg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: "var(--weight-semibold)",
        flexShrink: 0,
        marginTop: 1
      }, children: num }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--fg-default)" }, children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-sm)", color: "var(--fg-subtle)", lineHeight: "var(--leading-relaxed)" }, children: desc })
      ] })
    ] }, num)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "md", onClick: onFinish, children: "Open Project" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AbandonLink, { onAbandon })
    ] })
  ] });
}
function OnboardingWizard({ projectPath, prefs, onPrefsChange, onComplete, onAbandon }) {
  const [currentStep, setCurrentStep] = reactExports.useState("welcome");
  const [registeredToolId, setRegisteredToolId] = reactExports.useState(null);
  const projectName = projectPath.split("/").pop() ?? projectPath;
  function next() {
    const idx = STEP_ORDER.indexOf(currentStep);
    if (idx < STEP_ORDER.length - 1) setCurrentStep(STEP_ORDER[idx + 1]);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    height: "100vh",
    background: "var(--bg-app)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflowY: "auto",
    padding: "40px 24px"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    width: "100%",
    maxWidth: 540,
    display: "flex",
    flexDirection: "column",
    gap: 0
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 24,
      color: "var(--fg-subtle)",
      fontSize: "var(--text-sm)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "folder", size: 14 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: "var(--font-mono)", fontSize: 12 }, children: projectName })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { current: currentStep }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "var(--bg-subtle)",
      border: "1px solid var(--border-muted)",
      borderRadius: "var(--radius-lg)",
      padding: "28px 28px"
    }, children: [
      currentStep === "welcome" && /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeStep, { onNext: next, onAbandon }),
      currentStep === "npm-install" && /* @__PURE__ */ jsxRuntimeExports.jsx(NpmInstallStep, { onNext: next, onAbandon }),
      currentStep === "init" && /* @__PURE__ */ jsxRuntimeExports.jsx(InitStep, { projectPath, onNext: next, onAbandon }),
      currentStep === "cli-tool" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        CliToolStep,
        {
          prefs,
          onPrefsChange,
          onToolRegistered: (id2) => {
            setRegisteredToolId(id2);
            if (id2) next();
          },
          onNext: next,
          onAbandon
        }
      ),
      currentStep === "baseline" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        BaselineStep,
        {
          projectPath,
          prefs,
          registeredToolId,
          onNext: next,
          onAbandon
        }
      ),
      currentStep === "how-to" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        HowToStep,
        {
          projectPath,
          onFinish: () => onComplete(projectPath),
          onAbandon
        }
      )
    ] })
  ] }) });
}
function StepHeader({ title, subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)", color: "var(--fg-default)" }, children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-sm)", color: "var(--fg-subtle)", lineHeight: "var(--leading-relaxed)" }, children: subtitle })
  ] });
}
function StatusBanner({ type, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    padding: "10px 14px",
    borderRadius: "var(--radius-md)",
    background: type === "success" ? "var(--success-muted, #dcfce7)" : "var(--danger-muted)",
    color: type === "success" ? "var(--success-fg, #15803d)" : "var(--danger-fg)",
    fontSize: "var(--text-sm)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: type === "success" ? "check-circle" : "warning", size: 16, style: { flexShrink: 0, marginTop: 1 } }),
    children
  ] });
}
function InlineField({ label, warning, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontSize: "var(--text-xs)", fontWeight: "var(--weight-semibold)", color: "var(--fg-muted)" }, children: label }),
    children,
    warning && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "var(--text-xs)", color: "var(--danger-fg)" }, children: warning })
  ] });
}
const inputStyle = {
  width: "100%",
  padding: "7px 10px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--border-default)",
  background: "var(--bg-app)",
  color: "var(--fg-default)",
  fontSize: "var(--text-sm)",
  outline: "none",
  boxSizing: "border-box"
};
function slugify$1(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function Header({ repoPath, prefs, onNewProposal, onRefresh, onOpenRepo, onSettings }) {
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const repoName = repoPath.split("/").pop() ?? repoPath;
  async function handleRefresh() {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  }
  const hasTools = prefs.cliTools.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { style: {
    height: 48,
    flexShrink: 0,
    background: "var(--bg-surface)",
    borderBottom: "1px solid var(--border-default)",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "0 12px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, color: "var(--accent-fg)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "terminal", size: 18 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--fg-default)"
      }, children: "CodeSpec" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 1, height: 18, background: "var(--border-default)", margin: "0 4px" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        title: "Switch repository",
        onClick: onOpenRepo,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "var(--fg-muted)",
          fontSize: "var(--text-sm)",
          borderRadius: "var(--radius-md)",
          padding: "4px 8px",
          maxWidth: 220,
          overflow: "hidden"
        },
        className: "repo-switch-btn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "git-branch", size: 15 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: repoName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "caret-down", size: 13, style: { flexShrink: 0 } })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "primary",
        size: "sm",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "plus", size: 14 }),
        onClick: onNewProposal,
        disabled: !hasTools,
        title: hasTools ? "Create a new proposal" : "Add a CLI tool in Settings first",
        children: "New Proposal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "ghost",
        size: "sm",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "arrows-clockwise", size: 15 }),
        loading: refreshing,
        onClick: handleRefresh,
        title: "Refresh changes",
        children: "Refresh"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "ghost",
        size: "sm",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "gear-six", size: 15 }),
        onClick: onSettings,
        title: "Settings"
      }
    )
  ] });
}
function ChangeList({ changes, filter, onFilterChange, selectedChange, onSelect, width, onDragStart }) {
  const [handleHovered, setHandleHovered] = reactExports.useState(false);
  const FILTER_OPTIONS = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "archived", label: "Archived" }
  ];
  const visible = changes.filter((c2) => {
    if (filter === "all") return true;
    if (filter === "active") return c2.status === "active" || c2.status === "in-progress" || c2.status === "done";
    return c2.status === filter;
  });
  const active = visible.filter((c2) => c2.status === "active" || c2.status === "in-progress" || c2.status === "done");
  const archived = visible.filter((c2) => c2.status === "archived");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { style: {
    width,
    flexShrink: 0,
    position: "relative",
    background: "var(--bg-surface)",
    borderRight: "1px solid var(--border-default)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      padding: "10px 12px",
      borderBottom: "1px solid var(--border-muted)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--fg-default)"
      }, children: "Changes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Segmented,
        {
          options: FILTER_OPTIONS,
          value: filter,
          onChange: (v2) => onFilterChange(v2)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, overflowY: "auto" }, children: visible.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      padding: 24,
      textAlign: "center",
      fontSize: "var(--text-sm)",
      color: "var(--fg-subtle)",
      lineHeight: "var(--leading-relaxed)"
    }, children: filter === "archived" ? "No archived changes." : "No changes yet. Create a new proposal to get started." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      active.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        filter === "all" && /* @__PURE__ */ jsxRuntimeExports.jsx(GroupLabel, { label: "Active", count: active.length }),
        active.map((c2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChangeListItem,
          {
            change: c2,
            selected: selectedChange?.path === c2.path,
            onClick: () => onSelect(c2)
          },
          c2.path
        ))
      ] }),
      archived.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        filter === "all" && /* @__PURE__ */ jsxRuntimeExports.jsx(GroupLabel, { label: "Archived", count: archived.length }),
        archived.map((c2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChangeListItem,
          {
            change: c2,
            selected: selectedChange?.path === c2.path,
            onClick: () => onSelect(c2)
          },
          c2.path
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        onPointerDown: (e2) => {
          e2.preventDefault();
          onDragStart(e2.clientX);
        },
        onMouseEnter: () => setHandleHovered(true),
        onMouseLeave: () => setHandleHovered(false),
        style: {
          position: "absolute",
          right: -3,
          top: 0,
          bottom: 0,
          width: 6,
          cursor: "col-resize",
          zIndex: 10,
          background: handleHovered ? "var(--accent-default)" : "transparent",
          opacity: handleHovered ? 0.4 : 1,
          transition: "background 0.15s"
        }
      }
    )
  ] });
}
function GroupLabel({ label, count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    padding: "8px 12px 4px",
    fontSize: 10,
    fontWeight: "var(--weight-semibold)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--fg-faint)",
    display: "flex",
    alignItems: "center",
    gap: 6
  }, children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      minWidth: 16,
      height: 16,
      padding: "0 4px",
      borderRadius: "var(--radius-full)",
      background: "var(--bg-subtle)",
      color: "var(--fg-faint)",
      fontSize: 10,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: count })
  ] });
}
function ChangeListItem({ change, selected, onClick }) {
  const icon = change.status === "archived" ? "archive" : change.status === "in-progress" ? "git-branch" : change.status === "done" ? "check-circle" : "pull-request";
  const icStyle = change.status === "archived" ? { background: "var(--state-archived-bg)", color: "var(--state-archived-fg)" } : change.status === "in-progress" ? { background: "var(--warning-muted)", color: "var(--warning-fg)" } : change.status === "done" ? { background: "var(--success-muted)", color: "var(--success-fg)" } : { background: "var(--accent-subtle)", color: "var(--accent-fg)" };
  const badgeTone = change.status === "archived" ? "neutral" : change.status === "in-progress" ? "warning" : change.status === "done" ? "success" : "accent";
  const badgeLabel = change.status === "archived" ? "Archived" : change.status === "in-progress" ? "In Progress" : change.status === "done" ? "Done" : "Active";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "row-item" + (selected ? " selected" : ""),
      onClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row-ic", style: icStyle, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: icon, size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minWidth: 0, flex: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row-title", style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: change.name }),
          change.createdAt && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row-sub", children: change.createdAt })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { tone: badgeTone, icon, children: badgeLabel })
      ]
    }
  );
}
function countIncomplete(tasksText) {
  if (!tasksText) return 0;
  return (tasksText.match(/^- \[ \]/gm) ?? []).length;
}
function ChangeDetail({ change, proposalText, designText, tasksText, onApply, onContinue, onDelete, onArchive }) {
  const [activeTab, setActiveTab] = reactExports.useState("proposal");
  const [confirmAction, setConfirmAction] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setActiveTab("proposal");
    setConfirmAction(null);
  }, [change?.path]);
  if (!change) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      background: "var(--bg-app)",
      color: "var(--fg-subtle)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "file-text", size: 36 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-sm)" }, children: "Select a change to view its proposal." })
    ] });
  }
  const icon = change.status === "archived" ? "archive" : change.status === "in-progress" ? "git-branch" : change.status === "done" ? "check-circle" : "pull-request";
  const badgeTone = change.status === "archived" ? "neutral" : change.status === "in-progress" ? "warning" : change.status === "done" ? "success" : "accent";
  const badgeLabel = change.status === "archived" ? "Archived" : change.status === "in-progress" ? "In Progress" : change.status === "done" ? "Done" : "Active";
  const tabs = [
    { id: "proposal", label: "Proposal" },
    { id: "design", label: "Design" },
    { id: "tasks", label: "Tasks" }
  ];
  const activeText = activeTab === "proposal" ? proposalText : activeTab === "design" ? designText : tasksText;
  const emptyMessage = activeTab === "proposal" ? "No proposal written yet." : activeTab === "design" ? "No design document yet." : "No tasks written yet.";
  const incomplete = countIncomplete(tasksText);
  const confirmTitle = confirmAction === "delete" ? "Delete this change?" : "Archive this change?";
  const confirmMessage = confirmAction && change?.status === "in-progress" ? `${incomplete} task${incomplete !== 1 ? "s are" : " is"} not yet complete. Are you sure you want to ${confirmAction} this change?` : confirmAction === "delete" ? "This will permanently remove the change directory. This cannot be undone." : "This will move the change to the archive.";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: "var(--bg-app)",
    position: "relative"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      padding: "12px 20px",
      borderBottom: "1px solid var(--border-default)",
      background: "var(--bg-surface)",
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: "var(--text-base)",
          fontWeight: "var(--weight-semibold)",
          color: "var(--fg-default)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }, children: change.name }),
        change.schema && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: "var(--text-xs)",
          color: "var(--fg-subtle)",
          fontFamily: "var(--font-mono)",
          marginTop: 2
        }, children: change.schema })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        change.status !== "archived" && onApply && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "play", size: 14 }),
            onClick: onApply,
            children: "Apply"
          }
        ),
        change.status !== "archived" && onContinue && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "terminal", size: 14 }),
            onClick: onContinue,
            children: "Continue"
          }
        ),
        change.status !== "archived" && onArchive && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "archive", size: 14 }),
            onClick: () => setConfirmAction("archive"),
            children: "Archive"
          }
        ),
        change.status !== "archived" && onDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "danger",
            size: "sm",
            onClick: () => setConfirmAction("delete"),
            children: "Delete"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { tone: badgeTone, icon, children: badgeLabel })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "flex",
      borderBottom: "1px solid var(--border-default)",
      background: "var(--bg-surface)",
      flexShrink: 0,
      paddingLeft: 20,
      gap: 0
    }, children: tabs.map((tab) => {
      const isActive = tab.id === activeTab;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveTab(tab.id),
          style: {
            background: "none",
            border: "none",
            borderBottom: isActive ? "2px solid var(--accent-default)" : "2px solid transparent",
            padding: "8px 14px",
            fontSize: "var(--text-sm)",
            fontWeight: isActive ? "var(--weight-semibold)" : "var(--weight-normal)",
            color: isActive ? "var(--fg-default)" : "var(--fg-subtle)",
            cursor: "pointer",
            marginBottom: -1
          },
          children: tab.label
        },
        tab.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, overflowY: "auto", padding: 24 }, children: activeText === null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      height: "100%",
      color: "var(--fg-subtle)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "file-text", size: 32 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "var(--text-sm)" }, children: emptyMessage })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxWidth: 680 }, children: renderMarkdown(activeText) }) }),
    confirmAction && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        title: confirmTitle,
        message: confirmMessage,
        confirmLabel: confirmAction === "delete" ? "Delete" : "Archive",
        onConfirm: () => {
          setConfirmAction(null);
          if (confirmAction === "delete") onDelete?.();
          else onArchive?.();
        },
        onCancel: () => setConfirmAction(null)
      }
    )
  ] });
}
function renderMarkdown(text) {
  const lines = text.split("\n");
  const elements = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "var(--text-base)",
          fontWeight: "var(--weight-semibold)",
          color: "var(--fg-default)",
          margin: "24px 0 8px",
          lineHeight: 1.4,
          paddingBottom: 6,
          borderBottom: "1px solid var(--border-muted)"
        }, children: line.slice(3) }, i)
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: "var(--text-sm)",
          fontWeight: "var(--weight-semibold)",
          color: "var(--fg-default)",
          margin: "16px 0 6px",
          lineHeight: 1.4
        }, children: line.slice(4) }, i)
      );
    } else if (line.startsWith("- ")) {
      const bullets = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        bullets.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: { margin: "6px 0", paddingLeft: 20 }, children: bullets.map((b2, j2) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: {
          fontSize: "var(--text-sm)",
          color: "var(--fg-muted)",
          lineHeight: "var(--leading-relaxed)",
          marginBottom: 3
        }, children: renderInline(b2) }, j2)) }, `ul-${i}`)
      );
      continue;
    } else if (line.trim()) {
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "var(--text-sm)",
          color: "var(--fg-muted)",
          lineHeight: "var(--leading-relaxed)",
          margin: "6px 0"
        }, children: renderInline(line) }, i)
      );
    }
    i++;
  }
  return elements;
}
function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { fontWeight: "var(--weight-semibold)", color: "var(--fg-default)" }, children: part.slice(2, -2) }, i);
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: {
        fontFamily: "var(--font-mono)",
        fontSize: "0.875em",
        background: "var(--bg-subtle)",
        padding: "1px 5px",
        borderRadius: "var(--radius-sm)",
        color: "var(--fg-default)"
      }, children: part.slice(1, -1) }, i);
    }
    return part;
  });
}
const EMPTY_FORM = { label: "", command: "", argsStr: "" };
function SettingsSheet({ prefs, onPrefsChange, onClose }) {
  const [tools, setTools] = reactExports.useState(prefs.cliTools);
  const [defaultTool, setDefaultTool] = reactExports.useState(prefs.defaultTool);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [adding, setAdding] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [confirmRemove, setConfirmRemove] = reactExports.useState(null);
  const [detectedTools, setDetectedTools] = reactExports.useState([]);
  const [detecting, setDetecting] = reactExports.useState(true);
  const [quickAddValue, setQuickAddValue] = reactExports.useState("");
  reactExports.useEffect(() => {
    const handler = (e2) => {
      if (e2.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);
  reactExports.useEffect(() => {
    window.api.cli.detectTools().then((found) => {
      setDetectedTools(found);
      setDetecting(false);
    });
  }, []);
  function commit(nextTools, nextDefault) {
    setTools(nextTools);
    setDefaultTool(nextDefault);
    onPrefsChange({ ...prefs, cliTools: nextTools, defaultTool: nextDefault });
  }
  function handleSaveNew() {
    if (!isFormValid(form)) return;
    const id2 = slugify(form.label) || `tool-${Date.now()}`;
    const newTool = {
      id: tools.find((t2) => t2.id === id2) ? `${id2}-${Date.now()}` : id2,
      label: form.label.trim(),
      command: form.command.trim(),
      args: form.argsStr.trim().split(/\s+/).filter(Boolean)
    };
    const next = [...tools, newTool];
    const nextDefault = defaultTool ?? newTool.id;
    commit(next, nextDefault);
    setAdding(false);
    setForm(EMPTY_FORM);
  }
  function handleSaveEdit(id2) {
    if (!isFormValid(form)) return;
    const next = tools.map(
      (t2) => t2.id === id2 ? { ...t2, label: form.label.trim(), command: form.command.trim(), args: form.argsStr.trim().split(/\s+/).filter(Boolean) } : t2
    );
    commit(next, defaultTool);
    setEditingId(null);
    setForm(EMPTY_FORM);
  }
  function handleRemove(id2) {
    const next = tools.filter((t2) => t2.id !== id2);
    const nextDefault = defaultTool === id2 ? next[0]?.id ?? null : defaultTool;
    commit(next, nextDefault);
    setConfirmRemove(null);
  }
  function handleSetDefault(id2) {
    setDefaultTool(id2);
    onPrefsChange({ ...prefs, cliTools: tools, defaultTool: id2 });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sheet-overlay", onClick: (e2) => {
    if (e2.target === e2.currentTarget) onClose();
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet", style: { width: 520 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sheet-title", children: "Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "x-circle", size: 16 }), onClick: onClose })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-body", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "CLI Tools" }),
      tools.length === 0 && !adding && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        padding: "20px 0",
        textAlign: "center",
        color: "var(--fg-subtle)",
        fontSize: "var(--text-sm)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "terminal", size: 28, style: { color: "var(--fg-faint)" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "No CLI tools configured yet.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Add one to start creating proposals."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          background: "var(--bg-inset)",
          border: "1px solid var(--border-muted)",
          borderRadius: "var(--radius-md)",
          padding: "10px 14px",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--fg-muted)",
          textAlign: "left",
          lineHeight: 1.7
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--fg-faint)", marginBottom: 4 }, children: "Example — Claude Code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Label: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--fg-default)" }, children: "Claude Code" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Command: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--fg-default)" }, children: "claude" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Args: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--fg-default)" }, children: [
              "-p ",
              "{command}"
            ] })
          ] })
        ] })
      ] }),
      tools.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        marginBottom: 12
      }, children: tools.map((tool, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        idx > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 1, background: "var(--border-muted)" } }),
        editingId === tool.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          ToolForm,
          {
            form,
            onChange: setForm,
            onSave: () => handleSaveEdit(tool.id),
            onCancel: () => {
              setEditingId(null);
              setForm(EMPTY_FORM);
            }
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          ToolRow,
          {
            tool,
            isDefault: defaultTool === tool.id,
            confirmingRemove: confirmRemove === tool.id,
            onEdit: () => {
              setEditingId(tool.id);
              setAdding(false);
              setForm({ label: tool.label, command: tool.command, argsStr: tool.args.join(" ") });
            },
            onRemoveClick: () => setConfirmRemove(tool.id),
            onRemoveConfirm: () => handleRemove(tool.id),
            onRemoveCancel: () => setConfirmRemove(null),
            onSetDefault: () => handleSetDefault(tool.id)
          }
        )
      ] }, tool.id)) }),
      adding && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        border: "1px solid var(--border-focus)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        marginBottom: 12
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ToolForm,
        {
          form,
          onChange: setForm,
          onSave: handleSaveNew,
          onCancel: () => {
            setAdding(false);
            setForm(EMPTY_FORM);
          }
        }
      ) }),
      !adding && editingId === null && (detecting ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: 14 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "var(--text-sm)", color: "var(--fg-subtle)" }, children: "Detecting tools…" })
      ] }) : detectedTools.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          groups: buildQuickAddGroups(detectedTools),
          value: quickAddValue,
          onChange: (v2) => {
            if (v2 === "__manual__") {
              setAdding(true);
              setForm(EMPTY_FORM);
              setQuickAddValue("");
            } else if (v2) {
              const tool = detectedTools.find((t2) => t2.id === v2);
              if (tool) {
                setAdding(true);
                setForm({ label: tool.label, command: tool.command, argsStr: tool.args.join(" ") });
              }
              setQuickAddValue("");
            }
          }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "plus", size: 14 }),
          onClick: () => {
            setAdding(true);
            setForm(EMPTY_FORM);
          },
          children: "Add Tool"
        }
      ))
    ] })
  ] }) });
}
function buildQuickAddGroups(detected) {
  return [
    { options: [{ value: "", label: "Quick add…", icon: "plus" }] },
    { label: "Detected", options: detected.map((t2) => ({ value: t2.id, label: t2.label, icon: "terminal" })) },
    { options: [{ value: "__manual__", label: "Enter manually", icon: "pencil" }] }
  ];
}
function ToolRow({ tool, isDefault, confirmingRemove, onEdit, onRemoveClick, onRemoveConfirm, onRemoveCancel, onSetDefault }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "12px 14px", display: "flex", flexDirection: "column", gap: 6 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--fg-default)", flex: 1 }, children: tool.label }),
      isDefault && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        fontSize: 11,
        fontWeight: "var(--weight-medium)",
        color: "var(--accent-fg)",
        background: "var(--accent-muted)",
        padding: "2px 7px",
        borderRadius: "var(--radius-full)"
      }, children: "Default" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--fg-subtle)"
    }, children: [
      tool.command,
      " ",
      tool.args.join(" ")
    ] }),
    confirmingRemove ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 4 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "var(--text-xs)", color: "var(--danger-fg)" }, children: "Remove this tool?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", size: "sm", onClick: onRemoveConfirm, children: "Remove" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onRemoveCancel, children: "Cancel" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 6, marginTop: 4 }, children: [
      !isDefault && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onSetDefault, children: "Set as Default" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", size: 13 }), onClick: onEdit, children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "trash", size: 13 }), onClick: onRemoveClick, children: "Remove" })
    ] })
  ] });
}
function ToolForm({ form, onChange, onSave, onCancel }) {
  const argsWarning = form.argsStr.trim().length > 0 && !form.argsStr.includes("{command}");
  const valid = isFormValid(form);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "14px", display: "flex", flexDirection: "column", gap: 12, background: "var(--bg-subtle)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Label", help: "Display name for this tool", error: !form.label.trim(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        placeholder: "Claude Code",
        value: form.label,
        onChange: (e2) => onChange({ ...form, label: e2.target.value }),
        autoFocus: true
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Command", help: "The CLI executable (must be on PATH)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        placeholder: "claude",
        value: form.command,
        onChange: (e2) => onChange({ ...form, command: e2.target.value }),
        mono: true
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Field,
      {
        label: "Args",
        help: argsWarning ? "Use {command} as a placeholder for the OpenSpec command" : "Space-separated — use {command} as placeholder",
        error: argsWarning,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "-p {command}",
            value: form.argsStr,
            onChange: (e2) => onChange({ ...form, argsStr: e2.target.value }),
            mono: true
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onCancel, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "sm", onClick: onSave, disabled: !valid, children: "Save" })
    ] })
  ] });
}
function isFormValid(form) {
  return form.label.trim().length > 0 && form.command.trim().length > 0 && form.argsStr.trim().length > 0;
}
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function buildCliCommand(toolId, op) {
  if (toolId === "claude-code") {
    if (op.type === "propose") return `/opsx:propose "${op.description}"`;
    return `/opsx:apply "${op.changeName}"`;
  }
  if (op.type === "propose") {
    return `Create a new OpenSpec change proposal for the following request: "${op.description}". Set up the change directory under openspec/changes/ with .openspec.yaml, proposal.md, design.md, a specs/ folder, and tasks.md, following the spec-driven OpenSpec workflow.`;
  }
  return `Read openspec/changes/${op.changeName}/proposal.md, design.md, specs/, and tasks.md, then implement all incomplete tasks marked "- [ ]", updating each to "- [x]" as you complete it.`;
}
const TerminalPane = reactExports.forwardRef(
  function TerminalPane2({ style, active, visible }, ref) {
    const containerRef = reactExports.useRef(null);
    const termRef = reactExports.useRef(null);
    const fitRef = reactExports.useRef(null);
    const activeRef = reactExports.useRef(active);
    reactExports.useEffect(() => {
      activeRef.current = active;
    }, [active]);
    reactExports.useImperativeHandle(ref, () => ({
      write(data) {
        termRef.current?.write(data);
      },
      getDimensions() {
        const t2 = termRef.current;
        return { cols: t2?.cols || 80, rows: t2?.rows || 24 };
      }
    }));
    reactExports.useEffect(() => {
      if (!containerRef.current) return;
      const term = new Dl({
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 12,
        lineHeight: 1.5,
        cursorBlink: true,
        theme: {
          background: "#0d1117",
          foreground: "#c9d1d9",
          cursor: "#c9d1d9",
          black: "#0d1117",
          red: "#ff7b72",
          green: "#3fb950",
          yellow: "#d29922",
          blue: "#58a6ff",
          magenta: "#bc8cff",
          cyan: "#39c5cf",
          white: "#b1bac4",
          brightBlack: "#6e7681",
          brightRed: "#ffa198",
          brightGreen: "#56d364",
          brightYellow: "#e3b341",
          brightBlue: "#79c0ff",
          brightMagenta: "#d2a8ff",
          brightCyan: "#56d4dd",
          brightWhite: "#f0f6fc"
        }
      });
      const fit = new o();
      term.loadAddon(fit);
      term.open(containerRef.current);
      termRef.current = term;
      fitRef.current = fit;
      const dataDispose = term.onData((data) => {
        if (activeRef.current) window.api.cli.write(data);
      });
      const ro2 = new ResizeObserver(() => {
        if (!containerRef.current) return;
        const { offsetWidth, offsetHeight } = containerRef.current;
        if (offsetWidth === 0 || offsetHeight === 0) return;
        fit.fit();
        window.api.cli.resize({ cols: term.cols, rows: term.rows });
      });
      ro2.observe(containerRef.current);
      return () => {
        dataDispose.dispose();
        ro2.disconnect();
        term.dispose();
        termRef.current = null;
        fitRef.current = null;
      };
    }, []);
    reactExports.useEffect(() => {
      if (!visible || !fitRef.current || !termRef.current) return;
      const id2 = requestAnimationFrame(() => {
        fitRef.current?.fit();
        if (termRef.current) {
          window.api.cli.resize({ cols: termRef.current.cols, rows: termRef.current.rows });
        }
      });
      return () => cancelAnimationFrame(id2);
    }, [visible]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: containerRef,
        style: {
          background: "#0d1117",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          ...style
        }
      }
    );
  }
);
function NewProposalSheet({ repoPath, prefs, onSuccess, onClose }) {
  const [phase, setPhase] = reactExports.useState("input");
  const [description, setDescription] = reactExports.useState("");
  const [toolId, setToolId] = reactExports.useState(prefs.defaultTool ?? prefs.cliTools[0]?.id ?? "");
  const [exitCode, setExitCode] = reactExports.useState(null);
  const [proposalReady, setProposalReady] = reactExports.useState(false);
  const terminalRef = reactExports.useRef(null);
  const cancelledRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    return window.api.cli.onData((data) => {
      terminalRef.current?.write(data);
    });
  }, []);
  reactExports.useEffect(() => {
    return window.api.cli.onProposalReady(() => {
      setProposalReady(true);
    });
  }, []);
  reactExports.useEffect(() => {
    const handler = (e2) => {
      if (e2.key === "Escape" && (phase === "input" || phase === "complete" || phase === "error")) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [phase]);
  const hasTools = prefs.cliTools.length > 0;
  const canSubmit = description.trim().length > 0 && hasTools && toolId !== "";
  const toolGroups = [{
    options: prefs.cliTools.map((t2) => ({ value: t2.id, label: t2.label, icon: "terminal" }))
  }];
  async function handleSubmit() {
    if (!canSubmit) return;
    cancelledRef.current = false;
    setPhase("running");
    setExitCode(null);
    setProposalReady(false);
    const escapedDesc = description.replace(/"/g, '\\"');
    const command = buildCliCommand(toolId, { type: "propose", description: escapedDesc });
    const dims = terminalRef.current?.getDimensions() ?? { cols: 80, rows: 24 };
    const result = await window.api.cli.invoke({ toolId, command, repoPath, ...dims });
    setExitCode(result.exitCode);
    if (cancelledRef.current) return;
    if (result.exitCode === 0) {
      setPhase("complete");
    } else {
      if (result.exitCode === -2) {
        terminalRef.current?.write(
          "\r\nExecutable not found — verify the command in Settings or launch the app from a terminal.\r\n"
        );
      }
      setPhase("error");
    }
  }
  function killAndClose(callback) {
    window.api.cli.cancel();
    callback();
  }
  function handleCancel() {
    cancelledRef.current = true;
    killAndClose(onClose);
  }
  function handleClose() {
    if (phase === "complete") {
      killAndClose(onSuccess);
    } else {
      killAndClose(onClose);
    }
  }
  const showTerminal = phase === "running" || phase === "complete" || phase === "error";
  const showInputs = phase === "input" || phase === "error";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "sheet-overlay",
      onClick: (e2) => {
        if (e2.target === e2.currentTarget && phase !== "running") handleClose();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet", style: { width: 860 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pull-request", size: 18, style: { color: "var(--accent-fg)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sheet-title", children: phase === "complete" ? "Proposal created" : phase === "error" ? "Error" : "New Proposal" })
          ] }),
          phase !== "running" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "x-circle", size: 16 }), onClick: handleClose })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-body", style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
          !hasTools && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "12px 14px",
            borderRadius: "var(--radius-md)",
            background: "var(--warning-muted)",
            color: "var(--warning-fg)",
            fontSize: "var(--text-sm)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "warning", size: 16, style: { flexShrink: 0, marginTop: 1 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "No CLI tools configured. Add one in ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Settings" }),
              " first."
            ] })
          ] }),
          phase === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "12px 14px",
            borderRadius: "var(--radius-md)",
            background: "var(--danger-muted)",
            color: "var(--danger-fg)",
            fontSize: "var(--text-sm)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "warning", size: 16, style: { flexShrink: 0, marginTop: 1 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "CLI exited with code ",
              exitCode,
              ". See output below."
            ] })
          ] }),
          phase === "running" && proposalReady && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "12px 14px",
            borderRadius: "var(--radius-md)",
            background: "var(--success-muted)",
            color: "var(--success-fg)",
            fontSize: "var(--text-sm)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", size: 16, style: { flexShrink: 0, marginTop: 1 } }),
            "Proposal created. Click ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Done" }),
            " to view it."
          ] }),
          phase === "complete" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "12px 14px",
            borderRadius: "var(--radius-md)",
            background: "var(--success-muted)",
            color: "var(--success-fg)",
            fontSize: "var(--text-sm)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", size: 16, style: { flexShrink: 0, marginTop: 1 } }),
            "Proposal created. Click ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Done" }),
            " to view it."
          ] }),
          showInputs && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Description", help: "Describe what you want to build in plain language.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                placeholder: "e.g. Add user authentication with JWT tokens…",
                value: description,
                onChange: (e2) => setDescription(e2.target.value),
                style: { minHeight: 100, resize: "vertical" },
                disabled: phase === "error",
                autoFocus: phase === "input"
              }
            ) }),
            hasTools && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CLI Tool", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { groups: toolGroups, value: toolId, onChange: setToolId, icon: "terminal" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TerminalPane,
            {
              ref: terminalRef,
              active: phase === "running",
              visible: showTerminal,
              style: {
                display: showTerminal ? "block" : "none",
                minHeight: 320,
                maxHeight: 520
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-footer", children: [
          phase === "input" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => killAndClose(onClose), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "primary",
                size: "sm",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pull-request", size: 14 }),
                onClick: handleSubmit,
                disabled: !canSubmit,
                children: "Create Proposal"
              }
            )
          ] }),
          phase === "running" && !proposalReady && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", size: "sm", onClick: handleCancel, children: "Cancel" }),
          phase === "running" && proposalReady && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", size: 14 }), onClick: () => killAndClose(onSuccess), children: "Done" }),
          phase === "complete" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", size: 14 }), onClick: handleClose, children: "Done" }),
          phase === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => killAndClose(onClose), children: "Close" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "primary",
                size: "sm",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "play", size: 14 }),
                onClick: () => setPhase("input"),
                children: "Try Again"
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function ConversationSheet({ repoPath, changeName, proposalText, prefs, onPrefsChange, onSuccess, onClose }) {
  const initialTool = prefs.perChangeTool?.[changeName] ?? prefs.defaultTool ?? prefs.cliTools[0]?.id ?? "";
  const [phase, setPhase] = reactExports.useState("input");
  const [instruction, setInstruction] = reactExports.useState("");
  const [toolId, setToolId] = reactExports.useState(initialTool);
  const [exitCode, setExitCode] = reactExports.useState(null);
  const terminalRef = reactExports.useRef(null);
  const cancelledRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    return window.api.cli.onData((data) => {
      terminalRef.current?.write(data);
    });
  }, []);
  reactExports.useEffect(() => {
    const handler = (e2) => {
      if (e2.key === "Escape" && phase !== "running") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [phase]);
  const hasTools = prefs.cliTools.length > 0;
  const canSubmit = instruction.trim().length > 0 && hasTools && toolId !== "";
  const toolGroups = [{
    options: prefs.cliTools.map((t2) => ({ value: t2.id, label: t2.label, icon: "terminal" }))
  }];
  function handleToolChange(newToolId) {
    setToolId(newToolId);
    onPrefsChange({ ...prefs, perChangeTool: { ...prefs.perChangeTool, [changeName]: newToolId } });
  }
  async function handleSubmit() {
    if (!canSubmit) return;
    cancelledRef.current = false;
    onPrefsChange({ ...prefs, perChangeTool: { ...prefs.perChangeTool, [changeName]: toolId } });
    setPhase("running");
    setExitCode(null);
    const dims = terminalRef.current?.getDimensions() ?? { cols: 80, rows: 24 };
    const command = proposalText ? `I'm working on a change called "${changeName}". Here is its proposal:

---
${proposalText}
---

${instruction}

Please update the spec and other openspec files for this change as needed, keeping the existing OpenSpec format and structure.` : instruction;
    const result = await window.api.cli.invoke({ toolId, command, repoPath, ...dims });
    setExitCode(result.exitCode);
    if (cancelledRef.current) return;
    if (result.exitCode === 0) {
      setPhase("complete");
    } else {
      if (result.exitCode === -2) {
        terminalRef.current?.write(
          "\r\nExecutable not found — verify the command in Settings or launch the app from a terminal.\r\n"
        );
      }
      setPhase("error");
    }
  }
  function killAndClose(callback) {
    window.api.cli.cancel();
    callback();
  }
  function handleCancel() {
    cancelledRef.current = true;
    killAndClose(onClose);
  }
  function handleClose() {
    if (phase === "complete") {
      killAndClose(onSuccess);
    } else {
      killAndClose(onClose);
    }
  }
  const showTerminal = phase === "running" || phase === "complete" || phase === "error";
  const showInputs = phase === "input" || phase === "error";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "sheet-overlay",
      onClick: (e2) => {
        if (e2.target === e2.currentTarget && phase !== "running") handleClose();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet", style: { width: 860 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "terminal", size: 18, style: { color: "var(--accent-fg)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sheet-title", children: phase === "complete" ? "Session complete" : phase === "error" ? "Error" : "Continue Conversation" })
          ] }),
          phase !== "running" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "x-circle", size: 16 }), onClick: handleClose })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-body", style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
          phase === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "12px 14px",
            borderRadius: "var(--radius-md)",
            background: "var(--danger-muted)",
            color: "var(--danger-fg)",
            fontSize: "var(--text-sm)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "warning", size: 16, style: { flexShrink: 0, marginTop: 1 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "CLI exited with code ",
              exitCode,
              ". See output below."
            ] })
          ] }),
          phase === "complete" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "12px 14px",
            borderRadius: "var(--radius-md)",
            background: "var(--success-muted)",
            color: "var(--success-fg)",
            fontSize: "var(--text-sm)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", size: 16, style: { flexShrink: 0, marginTop: 1 } }),
            "Session complete. Click ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Done" }),
            " to return to the change."
          ] }),
          showInputs && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Instruction", help: "Describe the changes you'd like to make to this proposal.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                placeholder: "e.g. Update the spec to also require email verification…",
                value: instruction,
                onChange: (e2) => setInstruction(e2.target.value),
                style: { minHeight: 100, resize: "vertical" },
                disabled: phase === "error",
                autoFocus: phase === "input"
              }
            ) }),
            hasTools && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CLI Tool", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { groups: toolGroups, value: toolId, onChange: handleToolChange, icon: "terminal" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TerminalPane,
            {
              ref: terminalRef,
              active: phase === "running",
              visible: showTerminal,
              style: {
                display: showTerminal ? "block" : "none",
                minHeight: 320,
                maxHeight: 520
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-footer", children: [
          phase === "input" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => killAndClose(onClose), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "primary",
                size: "sm",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "terminal", size: 14 }),
                onClick: handleSubmit,
                disabled: !canSubmit,
                children: "Send"
              }
            )
          ] }),
          phase === "running" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", size: "sm", onClick: handleCancel, children: "Cancel" }),
          phase === "complete" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", size: 14 }), onClick: handleClose, children: "Done" }),
          phase === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => killAndClose(onClose), children: "Close" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "primary",
                size: "sm",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "play", size: 14 }),
                onClick: () => setPhase("input"),
                children: "Try Again"
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function ApplyProposalSheet({ repoPath, changeName, prefs, onPrefsChange, onSuccess, onClose }) {
  const initialTool = prefs.perChangeTool?.[changeName] ?? prefs.defaultTool ?? prefs.cliTools[0]?.id ?? "";
  const [phase, setPhase] = reactExports.useState("input");
  const [toolId, setToolId] = reactExports.useState(initialTool);
  const [exitCode, setExitCode] = reactExports.useState(null);
  const terminalRef = reactExports.useRef(null);
  const cancelledRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    return window.api.cli.onData((data) => {
      terminalRef.current?.write(data);
    });
  }, []);
  reactExports.useEffect(() => {
    const handler = (e2) => {
      if (e2.key === "Escape" && phase !== "running") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [phase]);
  const hasTools = prefs.cliTools.length > 0;
  const canSubmit = hasTools && toolId !== "";
  const toolGroups = [{
    options: prefs.cliTools.map((t2) => ({ value: t2.id, label: t2.label, icon: "terminal" }))
  }];
  function handleToolChange(newToolId) {
    setToolId(newToolId);
    onPrefsChange({ ...prefs, perChangeTool: { ...prefs.perChangeTool, [changeName]: newToolId } });
  }
  async function handleSubmit() {
    if (!canSubmit) return;
    cancelledRef.current = false;
    onPrefsChange({ ...prefs, perChangeTool: { ...prefs.perChangeTool, [changeName]: toolId } });
    setPhase("running");
    setExitCode(null);
    const dims = terminalRef.current?.getDimensions() ?? { cols: 80, rows: 24 };
    const result = await window.api.cli.invoke({ toolId, command: buildCliCommand(toolId, { type: "apply", changeName }), repoPath, ...dims });
    setExitCode(result.exitCode);
    if (cancelledRef.current) return;
    if (result.exitCode === 0) {
      setPhase("complete");
    } else {
      if (result.exitCode === -2) {
        terminalRef.current?.write(
          "\r\nExecutable not found — verify the command in Settings or launch the app from a terminal.\r\n"
        );
      }
      setPhase("error");
    }
  }
  function killAndClose(callback) {
    window.api.cli.cancel();
    callback();
  }
  function handleCancel() {
    cancelledRef.current = true;
    killAndClose(onClose);
  }
  function handleClose() {
    if (phase === "complete") {
      killAndClose(onSuccess);
    } else {
      killAndClose(onClose);
    }
  }
  const showTerminal = phase === "running" || phase === "complete" || phase === "error";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "sheet-overlay",
      onClick: (e2) => {
        if (e2.target === e2.currentTarget && phase !== "running") killAndClose(onClose);
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet", style: { width: 860 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "play", size: 18, style: { color: "var(--accent-fg)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sheet-title", children: phase === "complete" ? "Apply complete" : phase === "error" ? "Error" : "Apply Proposal" })
          ] }),
          phase !== "running" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "x-circle", size: 16 }), onClick: handleClose })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-body", style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
          phase === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "12px 14px",
            borderRadius: "var(--radius-md)",
            background: "var(--danger-muted)",
            color: "var(--danger-fg)",
            fontSize: "var(--text-sm)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "warning", size: 16, style: { flexShrink: 0, marginTop: 1 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "CLI exited with code ",
              exitCode,
              ". See output below."
            ] })
          ] }),
          phase === "complete" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "12px 14px",
            borderRadius: "var(--radius-md)",
            background: "var(--success-muted)",
            color: "var(--success-fg)",
            fontSize: "var(--text-sm)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", size: 16, style: { flexShrink: 0, marginTop: 1 } }),
            "Apply complete. Click ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Done" }),
            " to return to the change."
          ] }),
          phase === "input" && hasTools && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CLI Tool", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { groups: toolGroups, value: toolId, onChange: handleToolChange, icon: "terminal" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TerminalPane,
            {
              ref: terminalRef,
              active: phase === "running",
              visible: showTerminal,
              style: {
                display: showTerminal ? "block" : "none",
                minHeight: 320,
                maxHeight: 520
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-footer", children: [
          phase === "input" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => killAndClose(onClose), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "primary",
                size: "sm",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "play", size: 14 }),
                onClick: handleSubmit,
                disabled: !canSubmit,
                children: "Apply"
              }
            )
          ] }),
          phase === "running" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "danger", size: "sm", onClick: handleCancel, children: "Cancel" }),
          phase === "complete" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", size: 14 }), onClick: handleClose, children: "Done" }),
          phase === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => killAndClose(onClose), children: "Close" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "primary",
                size: "sm",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "play", size: 14 }),
                onClick: () => setPhase("input"),
                children: "Try Again"
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function App() {
  const [prefs, setPrefs] = reactExports.useState({ repoPath: null, cliTools: [], defaultTool: null, perChangeTool: {} });
  const [repoPath, setRepoPath] = reactExports.useState(null);
  const [pendingOnboardingPath, setPendingOnboardingPath] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [changes, setChanges] = reactExports.useState([]);
  const [selectedChange, setSelectedChange] = reactExports.useState(null);
  const [proposalText, setProposalText] = reactExports.useState(null);
  const [designText, setDesignText] = reactExports.useState(null);
  const [tasksText, setTasksText] = reactExports.useState(null);
  const [proposalVersion, setProposalVersion] = reactExports.useState(0);
  const [filter, setFilter] = reactExports.useState("all");
  const [settingsOpen, setSettingsOpen] = reactExports.useState(false);
  const [proposalOpen, setProposalOpen] = reactExports.useState(false);
  const [conversationOpen, setConversationOpen] = reactExports.useState(false);
  const [applyOpen, setApplyOpen] = reactExports.useState(false);
  const [sidebarWidth, setSidebarWidth] = reactExports.useState(280);
  const sidebarWidthRef = reactExports.useRef(280);
  reactExports.useEffect(() => {
    window.api.prefs.get().then((p2) => {
      setPrefs(p2);
      if (p2.repoPath) setRepoPath(p2.repoPath);
      const w2 = p2.sidebarWidth ?? 280;
      setSidebarWidth(w2);
      sidebarWidthRef.current = w2;
      setLoading(false);
    });
  }, []);
  const loadChanges = reactExports.useCallback(async (path) => {
    const list = await window.api.changes.readChangeList(path);
    setChanges(list);
    return list;
  }, []);
  reactExports.useEffect(() => {
    if (repoPath) loadChanges(repoPath);
  }, [repoPath, loadChanges]);
  reactExports.useEffect(() => {
    if (!selectedChange) {
      setProposalText(null);
      setDesignText(null);
      setTasksText(null);
      return;
    }
    Promise.all([
      window.api.changes.readProposal(selectedChange.path),
      window.api.changes.readArtifact(selectedChange.path, "design.md"),
      window.api.changes.readArtifact(selectedChange.path, "tasks.md")
    ]).then(([proposal, design, tasks]) => {
      setProposalText(proposal);
      setDesignText(design);
      setTasksText(tasks);
    });
  }, [selectedChange, proposalVersion]);
  async function handleOpenRepo() {
    const result = await window.api.repo.openDirectory();
    if (!result) return null;
    if ("error" in result && result.error === "not-openspec-repo") {
      handleBeginOnboarding(result.path);
      return null;
    }
    const newPath = result.path;
    setRepoPath(newPath);
    setSelectedChange(null);
    setChanges([]);
    await window.api.prefs.set({ repoPath: newPath });
    return null;
  }
  function handleBeginOnboarding(path) {
    setRepoPath(null);
    setSelectedChange(null);
    setChanges([]);
    setPendingOnboardingPath(path);
  }
  function handleAbandonOnboarding() {
    setPendingOnboardingPath(null);
  }
  async function handleCompleteOnboarding(path) {
    setPendingOnboardingPath(null);
    setRepoPath(path);
    setSelectedChange(null);
    setChanges([]);
    await window.api.prefs.set({ repoPath: path });
  }
  async function handleRefresh() {
    if (repoPath) await loadChanges(repoPath);
  }
  async function handleProposalSuccess() {
    setProposalOpen(false);
    if (repoPath) {
      const list = await loadChanges(repoPath);
      const newest = list.find((c2) => c2.status === "active") ?? null;
      setSelectedChange(newest);
    }
  }
  function handleConversationSuccess() {
    setConversationOpen(false);
    setProposalVersion((v2) => v2 + 1);
  }
  function handleApplySuccess() {
    setApplyOpen(false);
    setProposalVersion((v2) => v2 + 1);
  }
  async function handleDelete(change) {
    const result = await window.api.changes.delete(change.path);
    if ("error" in result) {
      alert(result.error);
      return;
    }
    setSelectedChange(null);
    if (repoPath) loadChanges(repoPath);
  }
  async function handleArchive(change) {
    const result = await window.api.changes.archive(change.path);
    if ("error" in result) {
      alert(result.error);
      return;
    }
    setSelectedChange(null);
    if (repoPath) loadChanges(repoPath);
  }
  function handleSidebarDrag(startX) {
    const startWidth = sidebarWidthRef.current;
    function onMove(e2) {
      const next = Math.min(480, Math.max(180, startWidth + (e2.clientX - startX)));
      setSidebarWidth(next);
      sidebarWidthRef.current = next;
    }
    function onUp() {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      window.api.prefs.set({ sidebarWidth: sidebarWidthRef.current });
    }
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  }
  function handlePrefsChange(updated) {
    setPrefs(updated);
    window.api.prefs.set(updated);
  }
  if (loading) return null;
  if (pendingOnboardingPath) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      OnboardingWizard,
      {
        projectPath: pendingOnboardingPath,
        prefs,
        onPrefsChange: handlePrefsChange,
        onComplete: handleCompleteOnboarding,
        onAbandon: handleAbandonOnboarding
      }
    );
  }
  if (!repoPath) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RepoSelectorScreen, { onOpenRepo: handleOpenRepo });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Header,
        {
          repoPath,
          prefs,
          onNewProposal: () => setProposalOpen(true),
          onRefresh: handleRefresh,
          onOpenRepo: handleOpenRepo,
          onSettings: () => setSettingsOpen(true)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, display: "flex", overflow: "hidden" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChangeList,
          {
            changes,
            filter,
            onFilterChange: setFilter,
            selectedChange,
            onSelect: setSelectedChange,
            width: sidebarWidth,
            onDragStart: handleSidebarDrag
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChangeDetail,
          {
            change: selectedChange,
            proposalText,
            designText,
            tasksText,
            onApply: () => setApplyOpen(true),
            onContinue: () => setConversationOpen(true),
            onDelete: selectedChange ? () => handleDelete(selectedChange) : void 0,
            onArchive: selectedChange ? () => handleArchive(selectedChange) : void 0
          }
        )
      ] })
    ] }),
    settingsOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingsSheet,
      {
        prefs,
        onPrefsChange: handlePrefsChange,
        onClose: () => setSettingsOpen(false)
      }
    ),
    proposalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      NewProposalSheet,
      {
        repoPath,
        prefs,
        onSuccess: handleProposalSuccess,
        onClose: () => setProposalOpen(false)
      }
    ),
    applyOpen && selectedChange && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ApplyProposalSheet,
      {
        repoPath,
        changeName: selectedChange.name,
        prefs,
        onPrefsChange: handlePrefsChange,
        onSuccess: handleApplySuccess,
        onClose: () => {
          setApplyOpen(false);
        }
      }
    ),
    conversationOpen && selectedChange && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConversationSheet,
      {
        repoPath,
        changeName: selectedChange.name,
        proposalText,
        prefs,
        onPrefsChange: handlePrefsChange,
        onSuccess: handleConversationSuccess,
        onClose: () => {
          setConversationOpen(false);
          setProposalVersion((v2) => v2 + 1);
        }
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
