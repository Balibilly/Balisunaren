/*
 MIT
 https://mths.be/codepointat v0.2.0 by @mathias */
var com; (function (f) { (function (f) { var g = function () { function g() { } g.VERSION = "16.0.141"; g.VERSION_RELEASE = "16.0"; g.VERSION_MAJOR = "16"; g.VERSION_MINOR = "0"; g.VERSION_PATCH = "141"; g.TIER = "stable"; g.VERSION_TAG = ""; g.VERSION_WITH_TAG = "16.0.141"; g.VERSION_ENVIRONMENT = "stable"; g.SENTRY_RELEASE = "release-16.0.141"; return g }(); f.KEYMAN_VERSION = g })(f.keyman || (f.keyman = {})) })(com || (com = {})); "undefined" != typeof module && "undefined" != typeof module.exports && (module.exports.KEYMAN_VERSION = com.keyman.KEYMAN_VERSION);
(function (f) { (function (f) { (function (g) { function f(e, b) { b = b || {}; for (var a in e) "object" === typeof e[a] && null != e[a] ? (b[a] = e[a].constructor === Array ? [] : {}, f(e[a], b[a])) : b[a] = e[a]; return b } g.deepCopy = f })(f.utils || (f.utils = {})) })(f.keyman || (f.keyman = {})) })(com || (com = {}));
(function (f) {
    (function (f) {
        (function (g) {
            var f; (function (a) { a.Chrome = "chrome"; a.Edge = "edge"; a.Firefox = "firefox"; a.Native = "native"; a.Opera = "opera"; a.Safari = "safari"; a.Other = "other" })(f = g.Browser || (g.Browser = {})); var e; (function (a) { a.Windows = "windows"; a.macOS = "macosx"; a.Linux = "linux"; a.Android = "android"; a.iOS = "ios"; a.Other = "other" })(e = g.OperatingSystem || (g.OperatingSystem = {})); var b; (function (a) { a.Desktop = "desktop"; a.Phone = "phone"; a.Tablet = "tablet" })(b = g.FormFactor || (g.FormFactor = {})); var a = function () {
                return function (a,
                    d, h, l) {
                        switch (a.toLowerCase()) { case f.Chrome: case f.Edge: case f.Firefox: case f.Native: case f.Opera: case f.Safari: this.browser = a.toLowerCase(); break; default: this.browser = f.Other }switch (d.toLowerCase()) { case b.Desktop: case b.Phone: case b.Tablet: this.formFactor = d.toLowerCase(); break; default: throw "Invalid form factor specified for device: " + d; }switch (h.toLowerCase()) {
                            case e.Windows.toLowerCase(): case e.macOS.toLowerCase(): case e.Linux.toLowerCase(): case e.Android.toLowerCase(): case e.iOS.toLowerCase(): this.OS =
                                h.toLowerCase(); break; default: this.OS = e.Other
                        }this.touchable = l
                }
            }(); g.DeviceSpec = a
        })(f.utils || (f.utils = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {})); (function (f) { (function (f) { (function (g) { g.getGlobalObject = function () { return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof self ? self : global } })(f.utils || (f.utils = {})) })(f.keyman || (f.keyman = {})) })(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var k = function () {
                function e(b) {
                    if (void 0 === b || null === b) this.components = [].concat(e.DEVELOPER_VERSION_FALLBACK.components); else if (Array.isArray(b)) { if (2 > b.length) throw Error("Version string must have at least a major and minor component!"); this.components = [].concat(b) } else {
                        b = b.split("."); var a = []; if (2 > b.length) throw Error("Version string must have at least a major and minor component!"); for (var c = 0; c < b.length; c++) {
                            var d = parseInt(b[c], 10); if (isNaN(d)) throw Error("Version string components must be numerical!");
                            a.push(d)
                        } this.components = a
                    }
                } Object.defineProperty(e.prototype, "major", { get: function () { return this.components[0] }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "minor", { get: function () { return this.components[1] }, enumerable: !1, configurable: !0 }); e.prototype.toString = function () { return this.components.join(".") }; e.prototype.toJSON = function () { return this.toString() }; e.prototype.equals = function (b) { return 0 == this.compareTo(b) }; e.prototype.precedes = function (b) { return 0 > this.compareTo(b) };
                e.prototype.compareTo = function (b) { var a = this.components.length < b.components.length, c = this.components.length < b.components.length ? this.components.length : b.components.length, d; for (d = 0; d < c; d++) { var h = this.components[d] - b.components[d]; if (0 != h) return h } b = a ? b.components : this.components; do { if (0 < b[d]) return a ? -1 : 1; d++ } while (d < b.length); return 0 }; e.CURRENT = new e(f.keyman.KEYMAN_VERSION.VERSION_RELEASE); e.DEVELOPER_VERSION_FALLBACK = new e([9, 0, 0]); e.NO_DEFAULT_KEYCAPS = new e([12, 0]); e.MAC_POSSIBLE_IPAD_ALIAS =
                    new e([10, 15]); return e
            }(); g.Version = k
        })(k.utils || (k.utils = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {})); String.kmwFromCharCode = function (f) { var k = [], g; for (g = 0; g < arguments.length; g++) { var n = Number(arguments[g]); if (!isFinite(n) || 0 > n || 1114111 < n || Math.floor(n) !== n) throw new RangeError("Invalid code point " + n); 65536 > n ? k.push(n) : (n -= 65536, k.push((n >> 10) + 55296), k.push(n % 1024 + 56320)) } return String.fromCharCode.apply(void 0, k) };
String.prototype.kmwCharCodeAt = function (f) { var k = String(this), g = 0; if (0 > f || f >= k.length) return NaN; for (var n = 0; n < f; n++)if (g = k.kmwNextChar(g), null === g) return NaN; f = k.charCodeAt(g); return 55296 <= f && 56319 >= f && k.length > g + 1 && (k = k.charCodeAt(g + 1), 56320 <= k && 57343 >= k) ? (f - 55296 << 10) + (k - 56320) + 65536 : f }; String.prototype.kmwIndexOf = function (f, k) { var g = String(this); f = g.indexOf(f, k); if (0 > f) return f; for (var n = k = 0; null !== n && n < f; n = g.kmwNextChar(n))k++; return k };
String.prototype.kmwLastIndexOf = function (f, k) { var g = String(this); f = g.lastIndexOf(f, k); if (0 > f) return f; for (var n = k = 0; null !== n && n < f; n = g.kmwNextChar(n))k++; return k }; String.prototype.kmwLength = function () { var f = String(this); if (0 == f.length) return 0; for (var k = 0, g = 0; null !== g; k++)g = f.kmwNextChar(g); return k }; String.prototype.kmwSlice = function (f, k) { var g = String(this); f = g.kmwCodePointToCodeUnit(f); k = g.kmwCodePointToCodeUnit(k); return null === f || null === k ? "" : g.slice(f, k) };
String.prototype.kmwSubstr = function (f, k) { var g = String(this); 0 > f && (f = g.kmwLength() + f); 0 > f && (f = 0); var n = g.kmwCodePointToCodeUnit(f), e = n; if (null === n) return ""; if (2 > arguments.length) e = g.length; else for (var b = 0; b < k; b++)e = g.kmwNextChar(e); return null === e ? g.substring(n) : g.substring(n, e) };
String.prototype.kmwSubstring = function (f, k) { var g = String(this); if ("undefined" == typeof k) f = g.kmwCodePointToCodeUnit(f), k = g.length; else { if (f > k) { var n = f; f = k; k = n } f = g.kmwCodePointToCodeUnit(f); k = g.kmwCodePointToCodeUnit(k) } if (isNaN(f) || null === f) f = 0; if (isNaN(k) || null === k) k = g.length; return g.substring(f, k) };
String.prototype.kmwNextChar = function (f) { var k = String(this); if (null === f || 0 > f || f >= k.length - 1) return null; var g = k.charCodeAt(f); return 55296 <= g && 56319 >= g && k.length > f + 1 && (g = k.charCodeAt(f + 1), 56320 <= g && 57343 >= g) ? f == k.length - 2 ? null : f + 2 : f + 1 }; String.prototype.kmwPrevChar = function (f) { var k = String(this); if (null == f || 0 >= f || f > k.length) return null; var g = k.charCodeAt(f - 1); return 56320 <= g && 57343 >= g && 1 < f && (k = k.charCodeAt(f - 2), 55296 <= k && 56319 >= k) ? f - 2 : f - 1 };
String.prototype.kmwCodePointToCodeUnit = function (f) { if (null === f) return null; var k = String(this), g = 0; if (0 > f) { g = k.length; for (var n = 0; n > f; n--)g = k.kmwPrevChar(g); return g } if (f == k.kmwLength()) return k.length; for (n = 0; n < f; n++)g = k.kmwNextChar(g); return g }; String.prototype.kmwCodeUnitToCodePoint = function (f) { var k = String(this); return null === f ? null : 0 == f ? 0 : 0 > f ? k.substr(f).kmwLength() : k.substr(0, f).kmwLength() }; String.prototype.kmwCharAt = function (f) { var k = String(this); return 0 <= f ? k.kmwSubstr(f, 1) : "" };
String.prototype.kmwBMPNextChar = function (f) { var k = String(this); return 0 > f || f >= k.length - 1 ? null : f + 1 }; String.prototype.kmwBMPPrevChar = function (f) { var k = String(this); return 0 >= f || f > k.length ? null : f - 1 }; String.prototype.kmwBMPCodePointToCodeUnit = function (f) { return f }; String.prototype.kmwBMPCodeUnitToCodePoint = function (f) { return f }; String.prototype.kmwBMPLength = function () { return String(this).length };
String.prototype.kmwBMPSubstr = function (f, k) { var g = String(this); return -1 < f ? g.substr(f, k) : g.substr(g.length + f, -f) };
String.kmwEnableSupplementaryPlane = function (f) {
    var k = String.prototype; String._kmwFromCharCode = f ? String.kmwFromCharCode : String.fromCharCode; k._kmwCharAt = f ? k.kmwCharAt : k.charAt; k._kmwCharCodeAt = f ? k.kmwCharCodeAt : k.charCodeAt; k._kmwIndexOf = f ? k.kmwIndexOf : k.indexOf; k._kmwLastIndexOf = f ? k.kmwLastIndexOf : k.lastIndexOf; k._kmwSlice = f ? k.kmwSlice : k.slice; k._kmwSubstring = f ? k.kmwSubstring : k.substring; k._kmwSubstr = f ? k.kmwSubstr : k.kmwBMPSubstr; k._kmwLength = f ? k.kmwLength : k.kmwBMPLength; k._kmwNextChar = f ? k.kmwNextChar :
        k.kmwBMPNextChar; k._kmwPrevChar = f ? k.kmwPrevChar : k.kmwBMPPrevChar; k._kmwCodePointToCodeUnit = f ? k.kmwCodePointToCodeUnit : k.kmwBMPCodePointToCodeUnit; k._kmwCodeUnitToCodePoint = f ? k.kmwCodeUnitToCodePoint : k.kmwBMPCodeUnitToCodePoint
};
function LMLayerWorkerCode() {
    String.prototype.codePointAt || function () {
        var a = function () { try { var a = {}, b = Object.defineProperty, c = b(a, a, a) && b } catch (G) { } return c }(), b = function (a) { if (null == this) throw TypeError(); var b = String(this), c = b.length, d = a ? Number(a) : 0; d != d && (d = 0); if (!(0 > d || d >= c)) return a = b.charCodeAt(d), 55296 <= a && 56319 >= a && c > d + 1 && (b = b.charCodeAt(d + 1), 56320 <= b && 57343 >= b) ? 1024 * (a - 55296) + b - 56320 + 65536 : a }; a ? a(String.prototype, "codePointAt", { value: b, configurable: !0, writable: !0 }) : String.prototype.codePointAt =
            b
    }(); Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", { value: function (a, b, c) { if (null == this) throw new TypeError("this is null or not defined"); var d = Object(this), h = d.length >>> 0; b >>= 0; b = 0 > b ? Math.max(h + b, 0) : Math.min(b, h); c = void 0 === c ? h : c >> 0; for (h = 0 > c ? Math.max(h + c, 0) : Math.min(c, h); b < h;)d[b] = a, b++; return d } }); Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function (a, b) {
            if (null == this) throw new TypeError('"this" is null or not defined'); var c = Object(this),
                d = c.length >>> 0; if ("function" !== typeof a) throw new TypeError("predicate must be a function"); for (var h = 0; h < d;) { if (a.call(b, c[h], h, c)) return h; h++ } return -1
        }, configurable: !0, writable: !0
    }); Array.from || (Array.from = function () {
        var a = Object.prototype.toString, b = function (b) { return "function" === typeof b || "[object Function]" === a.call(b) }, c = Math.pow(2, 53) - 1; return function (a) {
            var d = Object(a); if (null == a) throw new TypeError("Array.from requires an array-like object - not null or undefined"); var h = 1 < arguments.length ?
                arguments[1] : void 0, l; if ("undefined" !== typeof h) { if (!b(h)) throw new TypeError("Array.from: when provided, the second argument must be a function"); 2 < arguments.length && (l = arguments[2]) } var m = Number(d.length); m = isNaN(m) ? 0 : 0 !== m && isFinite(m) ? (0 < m ? 1 : -1) * Math.floor(Math.abs(m)) : m; m = Math.min(Math.max(m, 0), c); for (var e = b(this) ? Object(new this(m)) : Array(m), g = 0, f; g < m;)f = d[g], e[g] = h ? "undefined" === typeof l ? h(f, g) : h.call(l, f, g) : f, g += 1; e.length = m; return e
        }
    }()); Array.prototype.includes || (Array.prototype.includes =
        function (a) { return !!~this.indexOf(a) }); Object.keys || (Object.keys = function () {
            var a = Object.prototype.hasOwnProperty, b = !{ toString: null }.propertyIsEnumerable("toString"), c = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "), d = c.length; return function (h) {
                if ("function" !== typeof h && ("object" !== typeof h || null === h)) throw new TypeError("Object.keys called on non-object"); var l = [], m; for (m in h) a.call(h, m) && l.push(m); if (b) for (m = 0; m < d; m++)a.call(h, c[m]) &&
                    l.push(c[m]); return l
            }
        }()); var f = Function.bind.call(Function.call, Array.prototype.reduce), k = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), g = Function.bind.call(Function.call, Array.prototype.concat), n = Object.keys; Object.values || (Object.values = function (a) { return f(n(a), function (b, c) { return g(b, "string" === typeof c && k(a, c) ? [a[c]] : []) }, []) }); Object.entries || (Object.entries = function (a) { return f(n(a), function (b, c) { return g(b, "string" === typeof c && k(a, c) ? [[c, a[c]]] : []) }, []) }); !function (a,
            b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = b(a) : b(a) }("undefined" != typeof window ? window : self ? self : global, function (a) {
                var b = Object.defineProperty, c = Object.defineProperties, d = 0, h = [], l = Array.prototype.slice, m = "object" == typeof a.ES6 ? a.ES6 : a.ES6 = {}, e = Array.isArray, g = Object.prototype.toString, f = Array.prototype.push, q = function () { }, k = function (a) { return a }, w = function () { }, t = function (a, b) { this._array = a; this._flag = b; this._nextIndex = 0 }, n = function (a, b) {
                    this._string = a; this._flag =
                        b; this._nextIndex = 0
                }, y = function (a) { return null !== a && ("object" == typeof a || "function" == typeof a) }, v = function (a, b) { if ("number" == typeof a.length && 0 <= a.length && "number" == typeof b.length && 0 <= b.length) { var c = Math.floor(a.length), d = Math.floor(b.length), h = 0; for (a.length = c + d; h < d; ++h)b.hasOwnProperty(h) && (a[c + h] = b[h]) } }, r = function (a, b) { if ("function" != typeof a || "function" != typeof b) throw new TypeError("Child and Parent must be function type"); a.prototype = Object.create(b.prototype); a.prototype.constructor = a },
                z = function K(a) { if (a = void 0 === a ? "" : String(a), this instanceof K) throw new TypeError("Symbol is not a constructor"); var b = Object.create(K.prototype); return c(b, { _description: { value: a }, _isSymbol: { value: !0 }, _id: { value: d++ } }), b }; c(z, {
                    for: { value: function (a) { a = String(a); for (var b, c = h.length, d = 0; d < c; ++d)if ((b = h[d]).key === a) return b.symbol; return b = { key: a, symbol: z(a) }, h.push(b), b.symbol }, writable: !0, configurable: !0 }, keyFor: {
                        value: function (a) {
                            if (!m.isSymbol(a)) throw new TypeError(String(a) + " is not a symbol");
                            for (var b, c = h.length, d = 0; d < c; ++d)if ((b = h[d]).symbol === a) return b.key
                        }, writable: !0, configurable: !0
                    }, hasInstance: { value: z("Symbol.hasInstance") }, isConcatSpreadable: { value: z("Symbol.isConcatSpreadable") }, iterator: { value: z("Symbol.iterator") }, toStringTag: { value: z("Symbol.toStringTag") }
                }); z.prototype.toString = function () { return "@@_____" + this._id + "_____" }; z.prototype.valueOf = function () { return this }; b(w.prototype, z.iterator.toString(), { value: function () { return this }, writable: !0, configurable: !0 }); r(t, w); r(n,
                    w); b(t.prototype, z.toStringTag.toString(), { value: "Array Iterator", configurable: !0 }); b(n.prototype, z.toStringTag.toString(), { value: "String Iterator", configurable: !0 }); t.prototype.next = function () {
                        if (!(this instanceof t)) throw new TypeError("Method Array Iterator.prototype.next called on incompatible receiver " + String(this)); var a; return -1 === this._nextIndex ? { done: !0, value: void 0 } : "number" == typeof this._array.length && 0 <= this._array.length && this._nextIndex < Math.floor(this._array.length) ? (1 === this._flag ?
                            a = [this._nextIndex, this._array[this._nextIndex]] : 2 === this._flag ? a = this._array[this._nextIndex] : 3 === this._flag && (a = this._nextIndex), this._nextIndex++, { done: !1, value: a }) : (this._nextIndex = -1, { done: !0, value: void 0 })
                    }; n.prototype.next = function () {
                        if (!(this instanceof n)) throw new TypeError("Method String Iterator.prototype.next called on incompatible receiver " + String(this)); var a, b = new String(this._string); return -1 === this._nextIndex ? { done: !0, value: void 0 } : this._nextIndex < b.length ? (a = b[this._nextIndex],
                            this._nextIndex++, { done: !1, value: a }) : (this._nextIndex = -1, { done: !0, value: void 0 })
                    }; var E = function (a, b) { this._target = a; this._values = []; this._thisArg = b }; E.prototype.spread = function () { var a = this; return l.call(arguments).forEach(function (b) { m.forOf(b, function (b) { a._values.push(b) }) }), a }; E.prototype.add = function () { var a = this; return l.call(arguments).forEach(function (b) { a._values.push(b) }), a }; E.prototype.call = function (a) {
                        if ("function" != typeof this._target) throw new TypeError("Target is not a function");
                        return a = 0 >= arguments.length ? this._thisArg : a, this._target.apply(a, this._values)
                    }; E.prototype.new = function () { if ("function" != typeof this._target) throw new TypeError("Target is not a constructor"); var a, b; return a = Object.create(this._target.prototype), b = this._target.apply(a, this._values), y(b) ? b : a }; E.prototype.array = function () { if (!e(this._target)) throw new TypeError("Target is not a array"); return f.apply(this._target, this._values), this._target }; return c(m, {
                        isSymbol: {
                            value: function (a) {
                                return a instanceof
                                    z && !0 === a._isSymbol && "number" == typeof a._id && "string" == typeof a._description
                            }, writable: !0, configurable: !0
                        }, instanceOf: { value: function (a, b) { if (!y(b)) throw new TypeError("Right-hand side of 'instanceof' is not an object"); var c = b[z.hasInstance]; if (void 0 === c) return a instanceof b; if ("function" != typeof c) throw new TypeError(typeof c + " is not a function"); return c.call(b, a) }, writable: !0, configurable: !0 }, forOf: {
                            value: function (a, b, c) {
                                if (b = "function" != typeof b ? q : b, "function" != typeof a[z.iterator]) throw new TypeError("Iterable[Symbol.iterator] is not a function");
                                var d; a = a[z.iterator](); if ("function" != typeof a.next) throw new TypeError(".iterator.next is not a function"); for (; ;) { if (d = a.next(), !y(d)) throw new TypeError("Iterator result " + d + " is not an object"); if (d.done) break; b.call(c, d.value) }
                            }, writable: !0, configurable: !0
                        }, spreadOperator: { value: function (a, b) { if ("function" != typeof a && !e(a)) throw new TypeError("Spread operator only supports on array and function objects at this moment"); return new E(a, b) }, writable: !0, configurable: !0 }
                    }), b(a, "Symbol", {
                        value: z,
                        writable: !0, configurable: !0
                    }), b(Function.prototype, z.hasInstance.toString(), { value: function (a) { return "function" == typeof this && a instanceof this } }), b(Array.prototype, "concat", {
                        value: function () { if (void 0 === this || null === this) throw new TypeError("Array.prototype.concat called on null or undefined"); var a = Object(this), b = l.call(arguments), c = []; return b.unshift(a), b.forEach(function (a) { y(a) ? void 0 !== a[z.isConcatSpreadable] ? a[z.isConcatSpreadable] ? v(c, a) : c.push(a) : e(a) ? v(c, a) : c.push(a) : c.push(a) }), c }, writable: !0,
                        configurable: !0
                    }), b(Object.prototype, "toString", { value: function () { return void 0 === this || null === this ? g.call(this) : "string" == typeof this[z.toStringTag] ? "[object " + this[z.toStringTag] + "]" : g.call(this) }, writable: !0, configurable: !0 }), b(Array.prototype, z.iterator.toString(), { value: function () { if (void 0 === this || null === this) throw new TypeError("Cannot convert undefined or null to object"); return new t(Object(this), 2) }, writable: !0, configurable: !0 }), b(Array, "from", {
                        value: function (a, b, c) {
                            var d, h, l = 0; if (d = "function" ==
                                typeof this ? this : Array, void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object"); if (a = Object(a), void 0 === b) b = k; else if ("function" != typeof b) throw new TypeError(b + " is not a function"); if (void 0 === a[z.iterator]) { if (!("number" == typeof a.length && 0 <= a.length)) return (h = new d(0)).length = 0, h; var e = Math.floor(a.length); for ((h = new d(e)).length = e; l < e; ++l)h[l] = b.call(c, a[l]) } else (h = new d).length = 0, m.forOf(a, function (a) { h.length++; h[h.length - 1] = b.call(c, a) }); return h
                        }, writable: !0,
                        configurable: !0
                    }), b(Array.prototype, "entries", { value: function () { if (void 0 === this || null === this) throw new TypeError("Cannot convert undefined or null to object"); return new t(Object(this), 1) }, writable: !0, configurable: !0 }), b(Array.prototype, "keys", { value: function () { if (void 0 === this || null === this) throw new TypeError("Cannot convert undefined or null to object"); return new t(Object(this), 3) }, writable: !0, configurable: !0 }), b(String.prototype, z.iterator.toString(), {
                        value: function () {
                            if (void 0 === this || null ===
                                this) throw new TypeError("String.prototype[Symbol.iterator] called on null or undefined"); return new n(String(this), 0)
                        }, writable: !0, configurable: !0
                    }), m
            }); "use strict"; var e; (function (a) {
                (function (a) { var b = function () { function a() { } a.VERSION = "16.0.141"; a.VERSION_RELEASE = "16.0"; a.VERSION_MAJOR = "16"; a.VERSION_MINOR = "0"; a.VERSION_PATCH = "141"; a.TIER = "stable"; a.VERSION_TAG = ""; a.VERSION_WITH_TAG = "16.0.141"; a.VERSION_ENVIRONMENT = "stable"; a.SENTRY_RELEASE = "release-16.0.141"; return a }(); a.KEYMAN_VERSION = b })(a.keyman ||
                    (a.keyman = {}))
            })(e || (e = {})); "undefined" != typeof module && "undefined" != typeof module.exports && (module.exports.KEYMAN_VERSION = e.keyman.KEYMAN_VERSION); (function (a) { (function (a) { (function (a) { function b(a, c) { c = c || {}; for (var d in a) "object" === typeof a[d] && null != a[d] ? (c[d] = a[d].constructor === Array ? [] : {}, b(a[d], c[d])) : c[d] = a[d]; return c } a.deepCopy = b })(a.utils || (a.utils = {})) })(a.keyman || (a.keyman = {})) })(e || (e = {})); (function (a) {
                (function (a) {
                    (function (a) {
                        var b; (function (a) {
                            a.Chrome = "chrome"; a.Edge = "edge"; a.Firefox =
                                "firefox"; a.Native = "native"; a.Opera = "opera"; a.Safari = "safari"; a.Other = "other"
                        })(b = a.Browser || (a.Browser = {})); var c; (function (a) { a.Windows = "windows"; a.macOS = "macosx"; a.Linux = "linux"; a.Android = "android"; a.iOS = "ios"; a.Other = "other" })(c = a.OperatingSystem || (a.OperatingSystem = {})); var d; (function (a) { a.Desktop = "desktop"; a.Phone = "phone"; a.Tablet = "tablet" })(d = a.FormFactor || (a.FormFactor = {})); var h = function () {
                            return function (a, h, l, m) {
                                switch (a.toLowerCase()) {
                                    case b.Chrome: case b.Edge: case b.Firefox: case b.Native: case b.Opera: case b.Safari: this.browser =
                                        a.toLowerCase(); break; default: this.browser = b.Other
                                }switch (h.toLowerCase()) { case d.Desktop: case d.Phone: case d.Tablet: this.formFactor = h.toLowerCase(); break; default: throw "Invalid form factor specified for device: " + h; }switch (l.toLowerCase()) { case c.Windows.toLowerCase(): case c.macOS.toLowerCase(): case c.Linux.toLowerCase(): case c.Android.toLowerCase(): case c.iOS.toLowerCase(): this.OS = l.toLowerCase(); break; default: this.OS = c.Other }this.touchable = m
                            }
                        }(); a.DeviceSpec = h
                    })(a.utils || (a.utils = {}))
                })(a.keyman ||
                    (a.keyman = {}))
            })(e || (e = {})); (function (a) { (function (a) { (function (a) { a.getGlobalObject = function () { return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof self ? self : global } })(a.utils || (a.utils = {})) })(a.keyman || (a.keyman = {})) })(e || (e = {})); (function (a) {
                (function (b) {
                    (function (b) {
                        var c = function () {
                            function b(a) {
                                if (void 0 === a || null === a) this.components = [].concat(b.DEVELOPER_VERSION_FALLBACK.components); else if (Array.isArray(a)) {
                                    if (2 > a.length) throw Error("Version string must have at least a major and minor component!");
                                    this.components = [].concat(a)
                                } else { a = a.split("."); var c = []; if (2 > a.length) throw Error("Version string must have at least a major and minor component!"); for (var d = 0; d < a.length; d++) { var h = parseInt(a[d], 10); if (isNaN(h)) throw Error("Version string components must be numerical!"); c.push(h) } this.components = c }
                            } Object.defineProperty(b.prototype, "major", { get: function () { return this.components[0] }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype, "minor", {
                                get: function () { return this.components[1] },
                                enumerable: !1, configurable: !0
                            }); b.prototype.toString = function () { return this.components.join(".") }; b.prototype.toJSON = function () { return this.toString() }; b.prototype.equals = function (a) { return 0 == this.compareTo(a) }; b.prototype.precedes = function (a) { return 0 > this.compareTo(a) }; b.prototype.compareTo = function (a) {
                                var b = this.components.length < a.components.length, c = this.components.length < a.components.length ? this.components.length : a.components.length, d; for (d = 0; d < c; d++) {
                                    var h = this.components[d] - a.components[d];
                                    if (0 != h) return h
                                } a = b ? a.components : this.components; do { if (0 < a[d]) return b ? -1 : 1; d++ } while (d < a.length); return 0
                            }; b.CURRENT = new b(a.keyman.KEYMAN_VERSION.VERSION_RELEASE); b.DEVELOPER_VERSION_FALLBACK = new b([9, 0, 0]); b.NO_DEFAULT_KEYCAPS = new b([12, 0]); b.MAC_POSSIBLE_IPAD_ALIAS = new b([10, 15]); return b
                        }(); b.Version = c
                    })(b.utils || (b.utils = {}))
                })(a.keyman || (a.keyman = {}))
            })(e || (e = {})); String.kmwFromCharCode = function (a) {
                var b = [], c; for (c = 0; c < arguments.length; c++) {
                    var d = Number(arguments[c]); if (!isFinite(d) || 0 > d ||
                        1114111 < d || Math.floor(d) !== d) throw new RangeError("Invalid code point " + d); 65536 > d ? b.push(d) : (d -= 65536, b.push((d >> 10) + 55296), b.push(d % 1024 + 56320))
                } return String.fromCharCode.apply(void 0, b)
            }; String.prototype.kmwCharCodeAt = function (a) { var b = String(this), c = 0; if (0 > a || a >= b.length) return NaN; for (var d = 0; d < a; d++)if (c = b.kmwNextChar(c), null === c) return NaN; a = b.charCodeAt(c); return 55296 <= a && 56319 >= a && b.length > c + 1 && (b = b.charCodeAt(c + 1), 56320 <= b && 57343 >= b) ? (a - 55296 << 10) + (b - 56320) + 65536 : a }; String.prototype.kmwIndexOf =
                function (a, b) { var c = String(this); a = c.indexOf(a, b); if (0 > a) return a; for (var d = b = 0; null !== d && d < a; d = c.kmwNextChar(d))b++; return b }; String.prototype.kmwLastIndexOf = function (a, b) { var c = String(this); a = c.lastIndexOf(a, b); if (0 > a) return a; for (var d = b = 0; null !== d && d < a; d = c.kmwNextChar(d))b++; return b }; String.prototype.kmwLength = function () { var a = String(this); if (0 == a.length) return 0; for (var b = 0, c = 0; null !== c; b++)c = a.kmwNextChar(c); return b }; String.prototype.kmwSlice = function (a, b) {
                    var c = String(this); a = c.kmwCodePointToCodeUnit(a);
                    b = c.kmwCodePointToCodeUnit(b); return null === a || null === b ? "" : c.slice(a, b)
                }; String.prototype.kmwSubstr = function (a, b) { var c = String(this); 0 > a && (a = c.kmwLength() + a); 0 > a && (a = 0); var d = c.kmwCodePointToCodeUnit(a), h = d; if (null === d) return ""; if (2 > arguments.length) h = c.length; else for (var l = 0; l < b; l++)h = c.kmwNextChar(h); return null === h ? c.substring(d) : c.substring(d, h) }; String.prototype.kmwSubstring = function (a, b) {
                    var c = String(this); if ("undefined" == typeof b) a = c.kmwCodePointToCodeUnit(a), b = c.length; else {
                        if (a > b) {
                            var d =
                                a; a = b; b = d
                        } a = c.kmwCodePointToCodeUnit(a); b = c.kmwCodePointToCodeUnit(b)
                    } if (isNaN(a) || null === a) a = 0; if (isNaN(b) || null === b) b = c.length; return c.substring(a, b)
                }; String.prototype.kmwNextChar = function (a) { var b = String(this); if (null === a || 0 > a || a >= b.length - 1) return null; var c = b.charCodeAt(a); return 55296 <= c && 56319 >= c && b.length > a + 1 && (c = b.charCodeAt(a + 1), 56320 <= c && 57343 >= c) ? a == b.length - 2 ? null : a + 2 : a + 1 }; String.prototype.kmwPrevChar = function (a) {
                    var b = String(this); if (null == a || 0 >= a || a > b.length) return null; var c = b.charCodeAt(a -
                        1); return 56320 <= c && 57343 >= c && 1 < a && (b = b.charCodeAt(a - 2), 55296 <= b && 56319 >= b) ? a - 2 : a - 1
                }; String.prototype.kmwCodePointToCodeUnit = function (a) { if (null === a) return null; var b = String(this), c = 0; if (0 > a) { c = b.length; for (var d = 0; d > a; d--)c = b.kmwPrevChar(c); return c } if (a == b.kmwLength()) return b.length; for (d = 0; d < a; d++)c = b.kmwNextChar(c); return c }; String.prototype.kmwCodeUnitToCodePoint = function (a) { var b = String(this); return null === a ? null : 0 == a ? 0 : 0 > a ? b.substr(a).kmwLength() : b.substr(0, a).kmwLength() }; String.prototype.kmwCharAt =
                    function (a) { var b = String(this); return 0 <= a ? b.kmwSubstr(a, 1) : "" }; String.prototype.kmwBMPNextChar = function (a) { var b = String(this); return 0 > a || a >= b.length - 1 ? null : a + 1 }; String.prototype.kmwBMPPrevChar = function (a) { var b = String(this); return 0 >= a || a > b.length ? null : a - 1 }; String.prototype.kmwBMPCodePointToCodeUnit = function (a) { return a }; String.prototype.kmwBMPCodeUnitToCodePoint = function (a) { return a }; String.prototype.kmwBMPLength = function () { return String(this).length }; String.prototype.kmwBMPSubstr = function (a, b) {
                        var c =
                            String(this); return -1 < a ? c.substr(a, b) : c.substr(c.length + a, -a)
                    }; String.kmwEnableSupplementaryPlane = function (a) {
                        var b = String.prototype; String._kmwFromCharCode = a ? String.kmwFromCharCode : String.fromCharCode; b._kmwCharAt = a ? b.kmwCharAt : b.charAt; b._kmwCharCodeAt = a ? b.kmwCharCodeAt : b.charCodeAt; b._kmwIndexOf = a ? b.kmwIndexOf : b.indexOf; b._kmwLastIndexOf = a ? b.kmwLastIndexOf : b.lastIndexOf; b._kmwSlice = a ? b.kmwSlice : b.slice; b._kmwSubstring = a ? b.kmwSubstring : b.substring; b._kmwSubstr = a ? b.kmwSubstr : b.kmwBMPSubstr; b._kmwLength =
                            a ? b.kmwLength : b.kmwBMPLength; b._kmwNextChar = a ? b.kmwNextChar : b.kmwBMPNextChar; b._kmwPrevChar = a ? b.kmwPrevChar : b.kmwBMPPrevChar; b._kmwCodePointToCodeUnit = a ? b.kmwCodePointToCodeUnit : b.kmwBMPCodePointToCodeUnit; b._kmwCodeUnitToCodePoint = a ? b.kmwCodeUnitToCodePoint : b.kmwBMPCodeUnitToCodePoint
                    }; var b; (function (a) {
                        function b(a) { "string" == typeof a && (a = a.charCodeAt(0)); return 55296 <= a && 56319 >= a } function c(a) { "string" == typeof a && (a = a.charCodeAt(0)); return 56320 <= a && 57343 >= a } a.SENTINEL_CODE_UNIT = "\ufdd0"; a.applyTransform =
                            function (a, b) { var c = b.left || "", d = c.kmwLength(); c = c.kmwSubstr(0, d - (d < a.deleteLeft ? d : a.deleteLeft)) + (a.insert || ""); d = b.right || ""; var h = d.kmwLength(); a = d.kmwSubstr(h < a.deleteRight ? h : a.deleteRight); return { left: c, right: a, startOfBuffer: b.startOfBuffer, endOfBuffer: b.endOfBuffer, casingForm: b.casingForm } }; a.buildMergedTransform = function (a, b) {
                                var c = a.insert, d = b.deleteLeft; b.deleteLeft && (d = a.insert.kmwLength(), d <= b.deleteLeft ? (c = "", d = b.deleteLeft - d) : (c = a.insert.kmwSubstr(0, d - b.deleteLeft), d = 0)); return {
                                    insert: c +
                                        b.insert, deleteLeft: a.deleteLeft + d, deleteRight: (a.deleteRight || 0) + (b.deleteRight || 0)
                                }
                            }; a.isHighSurrogate = b; a.isLowSurrogate = c; a.isSentinel = function (b) { return b == a.SENTINEL_CODE_UNIT }; a.transformToSuggestion = function (a, b) { a = { transform: a, transformId: a.id, displayAs: a.insert }; if (0 === b || b) a.p = b; return a }; a.defaultApplyCasing = function (a, d) {
                                switch (a) {
                                    case "lower": return d.toLowerCase(); case "upper": return d.toUpperCase(); case "initial": return a = 1, 1 < d.length && b(d.charAt(0)) && c(d.charCodeAt(1)) && (a = 2), d.substring(0,
                                        a).toUpperCase().concat(d.substring(a))
                                }
                            }
                    })(b || (b = {})); (function (a) {
                        var b = function () {
                            function a(a, b) { void 0 === b && (b = []); this.comparator = a; this.heap = Array.from(b); this.heapify() } a.leftChildIndex = function (a) { return 2 * a + 1 }; a.rightChildIndex = function (a) { return 2 * a + 2 }; a.parentIndex = function (a) { return Math.floor((a - 1) / 2) }; a.prototype.heapify = function (b, c) {
                                void 0 != b && void 0 != c || this.heapify(0, this.count - 1); for (var d = [], h = -1, l = c; l >= b; l--)c = a.parentIndex(l), this.siftDown(l) && c < b && h != c && (d.push(c), h = c); for (h =
                                    -1; 0 < d.length;)b = d.shift(), c = a.parentIndex(b), this.siftDown(b) && 0 <= c && h != c && (d.push(c), h = c)
                            }; Object.defineProperty(a.prototype, "count", { get: function () { return this.heap.length }, enumerable: !1, configurable: !0 }); a.prototype.peek = function () { return this.heap[0] }; a.prototype.enqueue = function (b) { var c = this.heap.length; this.heap.push(b); b = a.parentIndex; for (var d = b(c); 0 !== c && 0 > this.comparator(this.heap[c], this.heap[d]);) { var h = this.heap[c]; this.heap[c] = this.heap[d]; this.heap[d] = h; c = d; d = b(c) } }; a.prototype.enqueueAll =
                                function (b) { if (0 != b.length) { var c = this.count; this.heap = this.heap.concat(b); b = a.parentIndex(c); this.heapify(0 <= b ? b : 0, a.parentIndex(this.count - 1)) } }; a.prototype.dequeue = function () { if (0 != this.count) { var a = this.heap[0], b = this.heap.pop(); 0 < this.heap.length && (this.heap[0] = b, this.siftDown(0)); return a } }; a.prototype.siftDown = function (b) {
                                    var c = a.leftChildIndex(b), d = a.rightChildIndex(b), h = b; c < this.heap.length && 0 > this.comparator(this.heap[c], this.heap[h]) && (h = c); d < this.heap.length && 0 > this.comparator(this.heap[d],
                                        this.heap[h]) && (h = d); return h != b ? (c = this.heap[b], this.heap[b] = this.heap[h], this.heap[h] = c, this.siftDown(h), !0) : !1
                                }; a.prototype.toArray = function () { return Array.from(this.heap) }; return a
                        }(); a.PriorityQueue = b
                    })(b || (b = {})); (function (a) {
                        function b(a, b) {
                            b = b || { left: void 0, startOfBuffer: void 0, endOfBuffer: void 0 }; var c = a(b.left || "") || [], d = a(b.right || "") || [], h; 0 < c.length && (h = c[c.length - 1]); if (1 < c.length) {
                                var l = c[c.length - 2]; l.end == h.start && "'" == h.text && (h = {
                                    text: l.text + h.text, start: l.start, end: h.end, length: l.length +
                                        h.length
                                }, c.pop(), c.pop(), c.push(h))
                            } l = { left: c.map(function (a) { return a.text }), right: d.map(function (a) { return a.text }), caretSplitsToken: !1 }; if (0 < c.length && 0 < d.length) { c = d[0]; d = 0 != c.start; if (h.end != b.left.length || d) return l; 1 == a(h.text + c.text).length && (l.caretSplitsToken = !0) } return l
                        } function c(a, c) { a = b(a, c); return 0 < a.left.length ? a.left.pop() : "" } a.tokenize = b; a.getLastPreCaretToken = c; a.wordbreak = function (a, b) { return c(a, b) }
                    })(b || (b = {})); var a = this && this.__generator || function (a, b) {
                        function c(a) {
                            return function (b) {
                                return d([a,
                                    b])
                            }
                        } function d(c) {
                            if (l) throw new TypeError("Generator is already executing."); for (; h;)try {
                                if (l = 1, m && (e = c[0] & 2 ? m["return"] : c[0] ? m["throw"] || ((e = m["return"]) && e.call(m), 0) : m.next) && !(e = e.call(m, c[1])).done) return e; if (m = 0, e) c = [c[0] & 2, e.value]; switch (c[0]) {
                                    case 0: case 1: e = c; break; case 4: return h.label++, { value: c[1], done: !1 }; case 5: h.label++; m = c[1]; c = [0]; continue; case 7: c = h.ops.pop(); h.trys.pop(); continue; default: if (!(e = h.trys, e = 0 < e.length && e[e.length - 1]) && (6 === c[0] || 2 === c[0])) { h = 0; continue } if (3 === c[0] &&
                                        (!e || c[1] > e[0] && c[1] < e[3])) h.label = c[1]; else if (6 === c[0] && h.label < e[1]) h.label = e[1], e = c; else if (e && h.label < e[2]) h.label = e[2], h.ops.push(c); else { e[2] && h.ops.pop(); h.trys.pop(); continue }
                                }c = b.call(a, h)
                            } catch (H) { c = [6, H], m = 0 } finally { l = e = 0 } if (c[0] & 5) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }
                        } var h = { label: 0, sent: function () { if (e[0] & 1) throw e[1]; return e[1] }, trys: [], ops: [] }, l, m, e, g; return g = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (g[Symbol.iterator] = function () { return this }),
                            g
                    }; (function (b) {
                        function d(a, b, c) { void 0 === c && (c = 0); if ("leaf" === a.type || c === b.length) return a; var h = b[c]; return a.children[h] ? d(a.children[h], b, c + 1) : null } function h(a, c, d, h) {
                            void 0 === h && (h = 12); var l = new b.PriorityQueue(function (a, b) { return (b ? b.weight : 0) - (a ? a.weight : 0) }), m = []; if ("leaf" === a.type) { var e = 0; for (a = a.entries; e < a.length; e++) { var g = a[e]; if (0 == g.key.indexOf(c) && (m.push({ text: g.content, p: g.weight / d }), m.length >= h)) break } } else {
                                l.enqueue(a); var f = void 0; c = function () {
                                    if ("type" in f) if ("leaf" === f.type) l.enqueueAll(f.entries);
                                    else { var a = f; l.enqueueAll(f.values.map(function (b) { return a.children[b] })) } else if (m.push({ text: f.content, p: f.weight / d }), m.length >= h) return { value: m }
                                }; for (; f = l.dequeue();)if (e = c(), "object" === typeof e) return e.value
                            } return m
                        } function l(a) { return a.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() } var m = function () {
                            function d(a, b) {
                                void 0 === b && (b = {}); this.languageUsesCasing = b.languageUsesCasing; this.applyCasing = b.applyCasing; this._trie = new e(a.root, a.totalWeight, b.searchTermToKey || l); (a = b.wordBreaker) ||
                                    (a = ("undefined" !== typeof c ? c : require("@keymanapp/models-wordBreakers").wordBreakers)["default"]); this.breakWords = a; this.punctuation = b.punctuation
                            } d.prototype.configure = function (a) { return this.configuration = { leftContextCodePoints: a.maxLeftContextCodePoints, rightContextCodePoints: a.maxRightContextCodePoints } }; d.prototype.toKey = function (a) { return this._trie.toKey(a) }; d.prototype.predict = function (a, c) {
                                function d(a) { for (var b = [], c = 0; c < a.length; c++) { var d = a[c]; b.push({ sample: d, p: d.p }) } return b } if (!a.insert &&
                                    !c.left && !c.right && c.startOfBuffer && c.endOfBuffer) return d(this._trie.firstN(12).map(function (a) { var b = a.text; return { transform: { insert: b, deleteLeft: 0 }, displayAs: b, p: a.p } })); c = b.applyTransform(a, c); var h = a.deleteLeft - a.insert.kmwLength(), l = b.getLastPreCaretToken(this.breakWords, c); return d(this._trie.lookup(l).map(function (a) { var c = a.p; return b.transformToSuggestion({ insert: a.text, deleteLeft: h + l.kmwLength() }, c) }))
                            }; Object.defineProperty(d.prototype, "wordbreaker", {
                                get: function () { return this.breakWords },
                                enumerable: !1, configurable: !0
                            }); d.prototype.traverseFromRoot = function () { return new d.Traversal(this._trie.root, "") }; d.Traversal = function () {
                                function c(a, b) { this.root = a; this.prefix = b } c.prototype.children = function () {
                                    var c, h, l, m, e, g, f, q, k, w, n, x; return a(this, function (p) {
                                        switch (p.label) {
                                            case 0: c = this.root; if ("internal" != c.type) return [3, 5]; h = function (h) {
                                                var m, e, g, f, q, k, w, n, x; return a(this, function (p) {
                                                    switch (p.label) {
                                                        case 0: m = c.children[h]; if (!b.isHighSurrogate(h)) return [3, 8]; if ("internal" != m.type) return [3,
                                                            5]; e = m; g = function (b) { var c; return a(this, function (a) { switch (a.label) { case 0: return c = l.prefix + h + b, [4, { char: h + b, traversal: function () { return new d.Traversal(e.children[b], c) } }]; case 1: return a.sent(), [2] } }) }; f = 0; q = e.values; p.label = 1; case 1: if (!(f < q.length)) return [3, 4]; k = q[f]; return [5, g(k)]; case 2: p.sent(), p.label = 3; case 3: return f++, [3, 1]; case 4: return [3, 7]; case 5: return w = m.entries[0].key, h += w[l.prefix.length + 1], n = l.prefix + h, [4, { char: h, traversal: function () { return new d.Traversal(m, n) } }]; case 6: p.sent(),
                                                                p.label = 7; case 7: return [3, 12]; case 8: return b.isSentinel(h) ? [2, "continue"] : [3, 9]; case 9: return h ? [3, 10] : [2, "continue"]; case 10: return x = l.prefix + h, [4, { char: h, traversal: function () { return new d.Traversal(m, x) } }]; case 11: p.sent(), p.label = 12; case 12: return [2]
                                                    }
                                                })
                                            }; l = this; m = 0; e = c.values; p.label = 1; case 1: if (!(m < e.length)) return [3, 4]; g = e[m]; return [5, h(g)]; case 2: p.sent(), p.label = 3; case 3: return m++, [3, 1]; case 4: return [2]; case 5: f = this.prefix, q = c.entries.filter(function (a) { return a.key != f && f.length < a.key.length }),
                                                k = function (h) { var l; return a(this, function (a) { switch (a.label) { case 0: return l = h[f.length], b.isHighSurrogate(l) && (l += h[f.length + 1]), [4, { char: l, traversal: function () { return new d.Traversal(c, f + l) } }]; case 1: return a.sent(), [2] } }) }, w = 0, n = q, p.label = 6; case 6: if (!(w < n.length)) return [3, 9]; x = n[w].key; return [5, k(x)]; case 7: p.sent(), p.label = 8; case 8: return w++, [3, 6]; case 9: return [2]
                                        }
                                    })
                                }; Object.defineProperty(c.prototype, "entries", {
                                    get: function () {
                                        if ("leaf" == this.root.type) {
                                            var a = this.prefix; return this.root.entries.filter(function (b) {
                                                return b.key ==
                                                    a
                                            }).map(function (a) { return a.content })
                                        } var c = this.root.children[b.SENTINEL_CODE_UNIT]; return c && "leaf" == c.type ? c.entries.map(function (a) { return a.content }) : []
                                    }, enumerable: !1, configurable: !0
                                }); return c
                            }(); return d
                        }(); b.TrieModel = m; var e = function () { function a(a, b, c) { this.root = a; this.toKey = c; this.totalWeight = b } a.prototype.lookup = function (a) { a = this.toKey(a); var b = d(this.root, a); return null === b ? [] : h(b, a, this.totalWeight) }; a.prototype.firstN = function (a) { return h(this.root, "", this.totalWeight, a) }; return a }()
                    })(b ||
                        (b = {})); (function (a) {
                            (function (a) { a.noQuotes = "no-quotes"; a.useQuotes = "use-quotes"; a["default"] = "default-quotes" })(a.QuoteBehavior || (a.QuoteBehavior = {})); (function (a) {
                                a.apply = function (b, c, d, h) {
                                    if (h == a.default || !h) throw "Specified quote behavior may be ambiguous - default behavior not specified (may not be .default)"; b == a.default && (b = h); switch (b) {
                                        case a.noQuotes: return c; case a.useQuotes: return b = d.quotesForKeepSuggestion, b.open + c + b.close; default: throw "Unsupported quote behavior state detected; implementation missing!";
                                    }
                                }
                            })(a.QuoteBehavior || (a.QuoteBehavior = {}))
                        })(b || (b = {})); "undefined" != typeof module && "undefined" != typeof module.exports && (module.exports.models = b); var c; (function (a) {
                            a.ascii = function (a) { for (var c = /[A-Za-z0-9']+/g, d = [], h; null !== (h = c.exec(a));)d.push(new b(h[0], h.index)); return d }; var b = function () {
                                function a(a, b) { this.text = a; this.start = b } Object.defineProperty(a.prototype, "length", { get: function () { return this.text.length }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "end", {
                                    get: function () {
                                        return this.start +
                                            this.text.length
                                    }, enumerable: !1, configurable: !0
                                }); return a
                            }()
                        })(c || (c = {})); (function (a) {
                            a = a.data || (a.data = {}); a.propertyMap = "Other LF Newline CR WSegSpace Double_Quote Single_Quote MidNum MidNumLet Numeric MidLetter ALetter ExtendNumLet Format Extend Hebrew_Letter ZWJ Katakana Regional_Indicator sot eot".split(" "); a.WORD_BREAK_PROPERTY = [[0, 0], [10, 1], [11, 2], [13, 3], [14, 0], [32, 4], [33, 0], [34, 5], [35, 0], [39, 6], [40, 0], [44, 7], [45, 0], [46, 8], [47, 0], [48, 9], [58, 10], [59, 7], [60, 0], [65, 11], [91, 0], [95, 12], [96, 0],
                            [97, 11], [123, 0], [133, 2], [134, 0], [170, 11], [171, 0], [173, 13], [174, 0], [181, 11], [182, 0], [183, 10], [184, 0], [186, 11], [187, 0], [192, 11], [215, 0], [216, 11], [247, 0], [248, 11], [728, 0], [734, 11], [768, 14], [880, 11], [885, 0], [886, 11], [888, 0], [890, 11], [894, 7], [895, 11], [896, 0], [902, 11], [903, 10], [904, 11], [907, 0], [908, 11], [909, 0], [910, 11], [930, 0], [931, 11], [1014, 0], [1015, 11], [1154, 0], [1155, 14], [1162, 11], [1328, 0], [1329, 11], [1367, 0], [1369, 11], [1373, 0], [1374, 11], [1375, 10], [1376, 11], [1417, 7], [1418, 11], [1419, 0], [1425, 14], [1470,
                                0], [1471, 14], [1472, 0], [1473, 14], [1475, 0], [1476, 14], [1478, 0], [1479, 14], [1480, 0], [1488, 15], [1515, 0], [1519, 15], [1523, 11], [1524, 10], [1525, 0], [1536, 13], [1542, 0], [1548, 7], [1550, 0], [1552, 14], [1563, 0], [1564, 13], [1565, 0], [1568, 11], [1611, 14], [1632, 9], [1642, 0], [1643, 9], [1644, 7], [1645, 0], [1646, 11], [1648, 14], [1649, 11], [1748, 0], [1749, 11], [1750, 14], [1757, 13], [1758, 0], [1759, 14], [1765, 11], [1767, 14], [1769, 0], [1770, 14], [1774, 11], [1776, 9], [1786, 11], [1789, 0], [1791, 11], [1792, 0], [1807, 13], [1808, 11], [1809, 14], [1810, 11],
                            [1840, 14], [1867, 0], [1869, 11], [1958, 14], [1969, 11], [1970, 0], [1984, 9], [1994, 11], [2027, 14], [2036, 11], [2038, 0], [2040, 7], [2041, 0], [2042, 11], [2043, 0], [2045, 14], [2046, 0], [2048, 11], [2070, 14], [2074, 11], [2075, 14], [2084, 11], [2085, 14], [2088, 11], [2089, 14], [2094, 0], [2112, 11], [2137, 14], [2140, 0], [2144, 11], [2155, 0], [2208, 11], [2229, 0], [2230, 11], [2248, 0], [2259, 14], [2274, 13], [2275, 14], [2308, 11], [2362, 14], [2365, 11], [2366, 14], [2384, 11], [2385, 14], [2392, 11], [2402, 14], [2404, 0], [2406, 9], [2416, 0], [2417, 11], [2433, 14], [2436, 0],
                            [2437, 11], [2445, 0], [2447, 11], [2449, 0], [2451, 11], [2473, 0], [2474, 11], [2481, 0], [2482, 11], [2483, 0], [2486, 11], [2490, 0], [2492, 14], [2493, 11], [2494, 14], [2501, 0], [2503, 14], [2505, 0], [2507, 14], [2510, 11], [2511, 0], [2519, 14], [2520, 0], [2524, 11], [2526, 0], [2527, 11], [2530, 14], [2532, 0], [2534, 9], [2544, 11], [2546, 0], [2556, 11], [2557, 0], [2558, 14], [2559, 0], [2561, 14], [2564, 0], [2565, 11], [2571, 0], [2575, 11], [2577, 0], [2579, 11], [2601, 0], [2602, 11], [2609, 0], [2610, 11], [2612, 0], [2613, 11], [2615, 0], [2616, 11], [2618, 0], [2620, 14], [2621,
                                0], [2622, 14], [2627, 0], [2631, 14], [2633, 0], [2635, 14], [2638, 0], [2641, 14], [2642, 0], [2649, 11], [2653, 0], [2654, 11], [2655, 0], [2662, 9], [2672, 14], [2674, 11], [2677, 14], [2678, 0], [2689, 14], [2692, 0], [2693, 11], [2702, 0], [2703, 11], [2706, 0], [2707, 11], [2729, 0], [2730, 11], [2737, 0], [2738, 11], [2740, 0], [2741, 11], [2746, 0], [2748, 14], [2749, 11], [2750, 14], [2758, 0], [2759, 14], [2762, 0], [2763, 14], [2766, 0], [2768, 11], [2769, 0], [2784, 11], [2786, 14], [2788, 0], [2790, 9], [2800, 0], [2809, 11], [2810, 14], [2816, 0], [2817, 14], [2820, 0], [2821, 11], [2829,
                                0], [2831, 11], [2833, 0], [2835, 11], [2857, 0], [2858, 11], [2865, 0], [2866, 11], [2868, 0], [2869, 11], [2874, 0], [2876, 14], [2877, 11], [2878, 14], [2885, 0], [2887, 14], [2889, 0], [2891, 14], [2894, 0], [2901, 14], [2904, 0], [2908, 11], [2910, 0], [2911, 11], [2914, 14], [2916, 0], [2918, 9], [2928, 0], [2929, 11], [2930, 0], [2946, 14], [2947, 11], [2948, 0], [2949, 11], [2955, 0], [2958, 11], [2961, 0], [2962, 11], [2966, 0], [2969, 11], [2971, 0], [2972, 11], [2973, 0], [2974, 11], [2976, 0], [2979, 11], [2981, 0], [2984, 11], [2987, 0], [2990, 11], [3002, 0], [3006, 14], [3011, 0], [3014,
                                14], [3017, 0], [3018, 14], [3022, 0], [3024, 11], [3025, 0], [3031, 14], [3032, 0], [3046, 9], [3056, 0], [3072, 14], [3077, 11], [3085, 0], [3086, 11], [3089, 0], [3090, 11], [3113, 0], [3114, 11], [3130, 0], [3133, 11], [3134, 14], [3141, 0], [3142, 14], [3145, 0], [3146, 14], [3150, 0], [3157, 14], [3159, 0], [3160, 11], [3163, 0], [3168, 11], [3170, 14], [3172, 0], [3174, 9], [3184, 0], [3200, 11], [3201, 14], [3204, 0], [3205, 11], [3213, 0], [3214, 11], [3217, 0], [3218, 11], [3241, 0], [3242, 11], [3252, 0], [3253, 11], [3258, 0], [3260, 14], [3261, 11], [3262, 14], [3269, 0], [3270, 14], [3273,
                                0], [3274, 14], [3278, 0], [3285, 14], [3287, 0], [3294, 11], [3295, 0], [3296, 11], [3298, 14], [3300, 0], [3302, 9], [3312, 0], [3313, 11], [3315, 0], [3328, 14], [3332, 11], [3341, 0], [3342, 11], [3345, 0], [3346, 11], [3387, 14], [3389, 11], [3390, 14], [3397, 0], [3398, 14], [3401, 0], [3402, 14], [3406, 11], [3407, 0], [3412, 11], [3415, 14], [3416, 0], [3423, 11], [3426, 14], [3428, 0], [3430, 9], [3440, 0], [3450, 11], [3456, 0], [3457, 14], [3460, 0], [3461, 11], [3479, 0], [3482, 11], [3506, 0], [3507, 11], [3516, 0], [3517, 11], [3518, 0], [3520, 11], [3527, 0], [3530, 14], [3531, 0], [3535,
                                14], [3541, 0], [3542, 14], [3543, 0], [3544, 14], [3552, 0], [3558, 9], [3568, 0], [3570, 14], [3572, 0], [3633, 14], [3634, 0], [3636, 14], [3643, 0], [3655, 14], [3663, 0], [3664, 9], [3674, 0], [3761, 14], [3762, 0], [3764, 14], [3773, 0], [3784, 14], [3790, 0], [3792, 9], [3802, 0], [3840, 11], [3841, 0], [3864, 14], [3866, 0], [3872, 9], [3882, 0], [3893, 14], [3894, 0], [3895, 14], [3896, 0], [3897, 14], [3898, 0], [3902, 14], [3904, 11], [3912, 0], [3913, 11], [3949, 0], [3953, 14], [3973, 0], [3974, 14], [3976, 11], [3981, 14], [3992, 0], [3993, 14], [4029, 0], [4038, 14], [4039, 0], [4139,
                                14], [4159, 0], [4160, 9], [4170, 0], [4182, 14], [4186, 0], [4190, 14], [4193, 0], [4194, 14], [4197, 0], [4199, 14], [4206, 0], [4209, 14], [4213, 0], [4226, 14], [4238, 0], [4239, 14], [4240, 9], [4250, 14], [4254, 0], [4256, 11], [4294, 0], [4295, 11], [4296, 0], [4301, 11], [4302, 0], [4304, 11], [4347, 0], [4348, 11], [4681, 0], [4682, 11], [4686, 0], [4688, 11], [4695, 0], [4696, 11], [4697, 0], [4698, 11], [4702, 0], [4704, 11], [4745, 0], [4746, 11], [4750, 0], [4752, 11], [4785, 0], [4786, 11], [4790, 0], [4792, 11], [4799, 0], [4800, 11], [4801, 0], [4802, 11], [4806, 0], [4808, 11], [4823,
                                0], [4824, 11], [4881, 0], [4882, 11], [4886, 0], [4888, 11], [4955, 0], [4957, 14], [4960, 0], [4992, 11], [5008, 0], [5024, 11], [5110, 0], [5112, 11], [5118, 0], [5121, 11], [5741, 0], [5743, 11], [5760, 4], [5761, 11], [5787, 0], [5792, 11], [5867, 0], [5870, 11], [5881, 0], [5888, 11], [5901, 0], [5902, 11], [5906, 14], [5909, 0], [5920, 11], [5938, 14], [5941, 0], [5952, 11], [5970, 14], [5972, 0], [5984, 11], [5997, 0], [5998, 11], [6001, 0], [6002, 14], [6004, 0], [6068, 14], [6100, 0], [6109, 14], [6110, 0], [6112, 9], [6122, 0], [6155, 14], [6158, 13], [6159, 0], [6160, 9], [6170, 0], [6176,
                                11], [6265, 0], [6272, 11], [6277, 14], [6279, 11], [6313, 14], [6314, 11], [6315, 0], [6320, 11], [6390, 0], [6400, 11], [6431, 0], [6432, 14], [6444, 0], [6448, 14], [6460, 0], [6470, 9], [6480, 0], [6608, 9], [6618, 0], [6656, 11], [6679, 14], [6684, 0], [6741, 14], [6751, 0], [6752, 14], [6781, 0], [6783, 14], [6784, 9], [6794, 0], [6800, 9], [6810, 0], [6832, 14], [6849, 0], [6912, 14], [6917, 11], [6964, 14], [6981, 11], [6988, 0], [6992, 9], [7002, 0], [7019, 14], [7028, 0], [7040, 14], [7043, 11], [7073, 14], [7086, 11], [7088, 9], [7098, 11], [7142, 14], [7156, 0], [7168, 11], [7204, 14], [7224,
                                0], [7232, 9], [7242, 0], [7245, 11], [7248, 9], [7258, 11], [7294, 0], [7296, 11], [7305, 0], [7312, 11], [7355, 0], [7357, 11], [7360, 0], [7376, 14], [7379, 0], [7380, 14], [7401, 11], [7405, 14], [7406, 11], [7412, 14], [7413, 11], [7415, 14], [7418, 11], [7419, 0], [7424, 11], [7616, 14], [7674, 0], [7675, 14], [7680, 11], [7958, 0], [7960, 11], [7966, 0], [7968, 11], [8006, 0], [8008, 11], [8014, 0], [8016, 11], [8024, 0], [8025, 11], [8026, 0], [8027, 11], [8028, 0], [8029, 11], [8030, 0], [8031, 11], [8062, 0], [8064, 11], [8117, 0], [8118, 11], [8125, 0], [8126, 11], [8127, 0], [8130, 11],
                            [8133, 0], [8134, 11], [8141, 0], [8144, 11], [8148, 0], [8150, 11], [8156, 0], [8160, 11], [8173, 0], [8178, 11], [8181, 0], [8182, 11], [8189, 0], [8192, 4], [8199, 0], [8200, 4], [8203, 0], [8204, 14], [8205, 16], [8206, 13], [8208, 0], [8216, 8], [8218, 0], [8228, 8], [8229, 0], [8231, 10], [8232, 2], [8234, 13], [8239, 12], [8240, 0], [8255, 12], [8257, 0], [8260, 7], [8261, 0], [8276, 12], [8277, 0], [8287, 4], [8288, 13], [8293, 0], [8294, 13], [8304, 0], [8305, 11], [8306, 0], [8319, 11], [8320, 0], [8336, 11], [8349, 0], [8400, 14], [8433, 0], [8450, 11], [8451, 0], [8455, 11], [8456, 0], [8458,
                                11], [8468, 0], [8469, 11], [8470, 0], [8473, 11], [8478, 0], [8484, 11], [8485, 0], [8486, 11], [8487, 0], [8488, 11], [8489, 0], [8490, 11], [8494, 0], [8495, 11], [8506, 0], [8508, 11], [8512, 0], [8517, 11], [8522, 0], [8526, 11], [8527, 0], [8544, 11], [8585, 0], [9398, 11], [9450, 0], [11264, 11], [11311, 0], [11312, 11], [11359, 0], [11360, 11], [11493, 0], [11499, 11], [11503, 14], [11506, 11], [11508, 0], [11520, 11], [11558, 0], [11559, 11], [11560, 0], [11565, 11], [11566, 0], [11568, 11], [11624, 0], [11631, 11], [11632, 0], [11647, 14], [11648, 11], [11671, 0], [11680, 11], [11687,
                                0], [11688, 11], [11695, 0], [11696, 11], [11703, 0], [11704, 11], [11711, 0], [11712, 11], [11719, 0], [11720, 11], [11727, 0], [11728, 11], [11735, 0], [11736, 11], [11743, 0], [11744, 14], [11776, 0], [11823, 11], [11824, 0], [12288, 4], [12289, 0], [12293, 11], [12294, 0], [12330, 14], [12336, 0], [12337, 17], [12342, 0], [12347, 11], [12349, 0], [12441, 14], [12443, 17], [12445, 0], [12448, 17], [12539, 0], [12540, 17], [12544, 0], [12549, 11], [12592, 0], [12593, 11], [12687, 0], [12704, 11], [12736, 0], [12784, 17], [12800, 0], [13008, 17], [13055, 0], [13056, 17], [13144, 0], [40960,
                                11], [42125, 0], [42192, 11], [42238, 0], [42240, 11], [42509, 0], [42512, 11], [42528, 9], [42538, 11], [42540, 0], [42560, 11], [42607, 14], [42611, 0], [42612, 14], [42622, 0], [42623, 11], [42654, 14], [42656, 11], [42736, 14], [42738, 0], [42760, 11], [42944, 0], [42946, 11], [42955, 0], [42997, 11], [43010, 14], [43011, 11], [43014, 14], [43015, 11], [43019, 14], [43020, 11], [43043, 14], [43048, 0], [43052, 14], [43053, 0], [43072, 11], [43124, 0], [43136, 14], [43138, 11], [43188, 14], [43206, 0], [43216, 9], [43226, 0], [43232, 14], [43250, 11], [43256, 0], [43259, 11], [43260, 0],
                            [43261, 11], [43263, 14], [43264, 9], [43274, 11], [43302, 14], [43310, 0], [43312, 11], [43335, 14], [43348, 0], [43360, 11], [43389, 0], [43392, 14], [43396, 11], [43443, 14], [43457, 0], [43471, 11], [43472, 9], [43482, 0], [43493, 14], [43494, 0], [43504, 9], [43514, 0], [43520, 11], [43561, 14], [43575, 0], [43584, 11], [43587, 14], [43588, 11], [43596, 14], [43598, 0], [43600, 9], [43610, 0], [43643, 14], [43646, 0], [43696, 14], [43697, 0], [43698, 14], [43701, 0], [43703, 14], [43705, 0], [43710, 14], [43712, 0], [43713, 14], [43714, 0], [43744, 11], [43755, 14], [43760, 0], [43762,
                                11], [43765, 14], [43767, 0], [43777, 11], [43783, 0], [43785, 11], [43791, 0], [43793, 11], [43799, 0], [43808, 11], [43815, 0], [43816, 11], [43823, 0], [43824, 11], [43882, 0], [43888, 11], [44003, 14], [44011, 0], [44012, 14], [44014, 0], [44016, 9], [44026, 0], [44032, 11], [55204, 0], [55216, 11], [55239, 0], [55243, 11], [55292, 0], [64256, 11], [64263, 0], [64275, 11], [64280, 0], [64285, 15], [64286, 14], [64287, 15], [64297, 0], [64298, 15], [64311, 0], [64312, 15], [64317, 0], [64318, 15], [64319, 0], [64320, 15], [64322, 0], [64323, 15], [64325, 0], [64326, 15], [64336, 11], [64434,
                                0], [64467, 11], [64830, 0], [64848, 11], [64912, 0], [64914, 11], [64968, 0], [65008, 11], [65020, 0], [65024, 14], [65040, 7], [65041, 0], [65043, 10], [65044, 7], [65045, 0], [65056, 14], [65072, 0], [65075, 12], [65077, 0], [65101, 12], [65104, 7], [65105, 0], [65106, 8], [65107, 0], [65108, 7], [65109, 10], [65110, 0], [65136, 11], [65141, 0], [65142, 11], [65277, 0], [65279, 13], [65280, 0], [65287, 8], [65288, 0], [65292, 7], [65293, 0], [65294, 8], [65295, 0], [65296, 9], [65306, 10], [65307, 7], [65308, 0], [65313, 11], [65339, 0], [65343, 12], [65344, 0], [65345, 11], [65371, 0], [65382,
                                17], [65438, 14], [65440, 11], [65471, 0], [65474, 11], [65480, 0], [65482, 11], [65488, 0], [65490, 11], [65496, 0], [65498, 11], [65501, 0], [65529, 13], [65532, 0], [65536, 11], [65548, 0], [65549, 11], [65575, 0], [65576, 11], [65595, 0], [65596, 11], [65598, 0], [65599, 11], [65614, 0], [65616, 11], [65630, 0], [65664, 11], [65787, 0], [65856, 11], [65909, 0], [66045, 14], [66046, 0], [66176, 11], [66205, 0], [66208, 11], [66257, 0], [66272, 14], [66273, 0], [66304, 11], [66336, 0], [66349, 11], [66379, 0], [66384, 11], [66422, 14], [66427, 0], [66432, 11], [66462, 0], [66464, 11], [66500,
                                0], [66504, 11], [66512, 0], [66513, 11], [66518, 0], [66560, 11], [66718, 0], [66720, 9], [66730, 0], [66736, 11], [66772, 0], [66776, 11], [66812, 0], [66816, 11], [66856, 0], [66864, 11], [66916, 0], [67072, 11], [67383, 0], [67392, 11], [67414, 0], [67424, 11], [67432, 0], [67584, 11], [67590, 0], [67592, 11], [67593, 0], [67594, 11], [67638, 0], [67639, 11], [67641, 0], [67644, 11], [67645, 0], [67647, 11], [67670, 0], [67680, 11], [67703, 0], [67712, 11], [67743, 0], [67808, 11], [67827, 0], [67828, 11], [67830, 0], [67840, 11], [67862, 0], [67872, 11], [67898, 0], [67968, 11], [68024,
                                0], [68030, 11], [68032, 0], [68096, 11], [68097, 14], [68100, 0], [68101, 14], [68103, 0], [68108, 14], [68112, 11], [68116, 0], [68117, 11], [68120, 0], [68121, 11], [68150, 0], [68152, 14], [68155, 0], [68159, 14], [68160, 0], [68192, 11], [68221, 0], [68224, 11], [68253, 0], [68288, 11], [68296, 0], [68297, 11], [68325, 14], [68327, 0], [68352, 11], [68406, 0], [68416, 11], [68438, 0], [68448, 11], [68467, 0], [68480, 11], [68498, 0], [68608, 11], [68681, 0], [68736, 11], [68787, 0], [68800, 11], [68851, 0], [68864, 11], [68900, 14], [68904, 0], [68912, 9], [68922, 0], [69248, 11], [69290,
                                0], [69291, 14], [69293, 0], [69296, 11], [69298, 0], [69376, 11], [69405, 0], [69415, 11], [69416, 0], [69424, 11], [69446, 14], [69457, 0], [69552, 11], [69573, 0], [69600, 11], [69623, 0], [69632, 14], [69635, 11], [69688, 14], [69703, 0], [69734, 9], [69744, 0], [69759, 14], [69763, 11], [69808, 14], [69819, 0], [69821, 13], [69822, 0], [69837, 13], [69838, 0], [69840, 11], [69865, 0], [69872, 9], [69882, 0], [69888, 14], [69891, 11], [69927, 14], [69941, 0], [69942, 9], [69952, 0], [69956, 11], [69957, 14], [69959, 11], [69960, 0], [69968, 11], [70003, 14], [70004, 0], [70006, 11], [70007,
                                0], [70016, 14], [70019, 11], [70067, 14], [70081, 11], [70085, 0], [70089, 14], [70093, 0], [70094, 14], [70096, 9], [70106, 11], [70107, 0], [70108, 11], [70109, 0], [70144, 11], [70162, 0], [70163, 11], [70188, 14], [70200, 0], [70206, 14], [70207, 0], [70272, 11], [70279, 0], [70280, 11], [70281, 0], [70282, 11], [70286, 0], [70287, 11], [70302, 0], [70303, 11], [70313, 0], [70320, 11], [70367, 14], [70379, 0], [70384, 9], [70394, 0], [70400, 14], [70404, 0], [70405, 11], [70413, 0], [70415, 11], [70417, 0], [70419, 11], [70441, 0], [70442, 11], [70449, 0], [70450, 11], [70452, 0], [70453,
                                11], [70458, 0], [70459, 14], [70461, 11], [70462, 14], [70469, 0], [70471, 14], [70473, 0], [70475, 14], [70478, 0], [70480, 11], [70481, 0], [70487, 14], [70488, 0], [70493, 11], [70498, 14], [70500, 0], [70502, 14], [70509, 0], [70512, 14], [70517, 0], [70656, 11], [70709, 14], [70727, 11], [70731, 0], [70736, 9], [70746, 0], [70750, 14], [70751, 11], [70754, 0], [70784, 11], [70832, 14], [70852, 11], [70854, 0], [70855, 11], [70856, 0], [70864, 9], [70874, 0], [71040, 11], [71087, 14], [71094, 0], [71096, 14], [71105, 0], [71128, 11], [71132, 14], [71134, 0], [71168, 11], [71216, 14],
                            [71233, 0], [71236, 11], [71237, 0], [71248, 9], [71258, 0], [71296, 11], [71339, 14], [71352, 11], [71353, 0], [71360, 9], [71370, 0], [71453, 14], [71468, 0], [71472, 9], [71482, 0], [71680, 11], [71724, 14], [71739, 0], [71840, 11], [71904, 9], [71914, 0], [71935, 11], [71943, 0], [71945, 11], [71946, 0], [71948, 11], [71956, 0], [71957, 11], [71959, 0], [71960, 11], [71984, 14], [71990, 0], [71991, 14], [71993, 0], [71995, 14], [71999, 11], [72E3, 14], [72001, 11], [72002, 14], [72004, 0], [72016, 9], [72026, 0], [72096, 11], [72104, 0], [72106, 11], [72145, 14], [72152, 0], [72154, 14],
                            [72161, 11], [72162, 0], [72163, 11], [72164, 14], [72165, 0], [72192, 11], [72193, 14], [72203, 11], [72243, 14], [72250, 11], [72251, 14], [72255, 0], [72263, 14], [72264, 0], [72272, 11], [72273, 14], [72284, 11], [72330, 14], [72346, 0], [72349, 11], [72350, 0], [72384, 11], [72441, 0], [72704, 11], [72713, 0], [72714, 11], [72751, 14], [72759, 0], [72760, 14], [72768, 11], [72769, 0], [72784, 9], [72794, 0], [72818, 11], [72848, 0], [72850, 14], [72872, 0], [72873, 14], [72887, 0], [72960, 11], [72967, 0], [72968, 11], [72970, 0], [72971, 11], [73009, 14], [73015, 0], [73018, 14], [73019,
                                0], [73020, 14], [73022, 0], [73023, 14], [73030, 11], [73031, 14], [73032, 0], [73040, 9], [73050, 0], [73056, 11], [73062, 0], [73063, 11], [73065, 0], [73066, 11], [73098, 14], [73103, 0], [73104, 14], [73106, 0], [73107, 14], [73112, 11], [73113, 0], [73120, 9], [73130, 0], [73440, 11], [73459, 14], [73463, 0], [73648, 11], [73649, 0], [73728, 11], [74650, 0], [74752, 11], [74863, 0], [74880, 11], [75076, 0], [77824, 11], [78895, 0], [78896, 13], [78905, 0], [82944, 11], [83527, 0], [92160, 11], [92729, 0], [92736, 11], [92767, 0], [92768, 9], [92778, 0], [92880, 11], [92910, 0], [92912,
                                14], [92917, 0], [92928, 11], [92976, 14], [92983, 0], [92992, 11], [92996, 0], [93008, 9], [93018, 0], [93027, 11], [93048, 0], [93053, 11], [93072, 0], [93760, 11], [93824, 0], [93952, 11], [94027, 0], [94031, 14], [94032, 11], [94033, 14], [94088, 0], [94095, 14], [94099, 11], [94112, 0], [94176, 11], [94178, 0], [94179, 11], [94180, 14], [94181, 0], [94192, 14], [94194, 0], [110592, 17], [110593, 0], [110948, 17], [110952, 0], [113664, 11], [113771, 0], [113776, 11], [113789, 0], [113792, 11], [113801, 0], [113808, 11], [113818, 0], [113821, 14], [113823, 0], [113824, 13], [113828,
                                0], [119141, 14], [119146, 0], [119149, 14], [119155, 13], [119163, 14], [119171, 0], [119173, 14], [119180, 0], [119210, 14], [119214, 0], [119362, 14], [119365, 0], [119808, 11], [119893, 0], [119894, 11], [119965, 0], [119966, 11], [119968, 0], [119970, 11], [119971, 0], [119973, 11], [119975, 0], [119977, 11], [119981, 0], [119982, 11], [119994, 0], [119995, 11], [119996, 0], [119997, 11], [120004, 0], [120005, 11], [120070, 0], [120071, 11], [120075, 0], [120077, 11], [120085, 0], [120086, 11], [120093, 0], [120094, 11], [120122, 0], [120123, 11], [120127, 0], [120128, 11], [120133,
                                0], [120134, 11], [120135, 0], [120138, 11], [120145, 0], [120146, 11], [120486, 0], [120488, 11], [120513, 0], [120514, 11], [120539, 0], [120540, 11], [120571, 0], [120572, 11], [120597, 0], [120598, 11], [120629, 0], [120630, 11], [120655, 0], [120656, 11], [120687, 0], [120688, 11], [120713, 0], [120714, 11], [120745, 0], [120746, 11], [120771, 0], [120772, 11], [120780, 0], [120782, 9], [120832, 0], [121344, 14], [121399, 0], [121403, 14], [121453, 0], [121461, 14], [121462, 0], [121476, 14], [121477, 0], [121499, 14], [121504, 0], [121505, 14], [121520, 0], [122880, 14], [122887,
                                0], [122888, 14], [122905, 0], [122907, 14], [122914, 0], [122915, 14], [122917, 0], [122918, 14], [122923, 0], [123136, 11], [123181, 0], [123184, 14], [123191, 11], [123198, 0], [123200, 9], [123210, 0], [123214, 11], [123215, 0], [123584, 11], [123628, 14], [123632, 9], [123642, 0], [124928, 11], [125125, 0], [125136, 14], [125143, 0], [125184, 11], [125252, 14], [125259, 11], [125260, 0], [125264, 9], [125274, 0], [126464, 11], [126468, 0], [126469, 11], [126496, 0], [126497, 11], [126499, 0], [126500, 11], [126501, 0], [126503, 11], [126504, 0], [126505, 11], [126515, 0], [126516,
                                11], [126520, 0], [126521, 11], [126522, 0], [126523, 11], [126524, 0], [126530, 11], [126531, 0], [126535, 11], [126536, 0], [126537, 11], [126538, 0], [126539, 11], [126540, 0], [126541, 11], [126544, 0], [126545, 11], [126547, 0], [126548, 11], [126549, 0], [126551, 11], [126552, 0], [126553, 11], [126554, 0], [126555, 11], [126556, 0], [126557, 11], [126558, 0], [126559, 11], [126560, 0], [126561, 11], [126563, 0], [126564, 11], [126565, 0], [126567, 11], [126571, 0], [126572, 11], [126579, 0], [126580, 11], [126584, 0], [126585, 11], [126589, 0], [126590, 11], [126591, 0], [126592,
                                11], [126602, 0], [126603, 11], [126620, 0], [126625, 11], [126628, 0], [126629, 11], [126634, 0], [126635, 11], [126652, 0], [127280, 11], [127306, 0], [127312, 11], [127338, 0], [127344, 11], [127370, 0], [127462, 18], [127488, 0], [127995, 14], [128E3, 0], [130032, 9], [130042, 0], [917505, 13], [917506, 0], [917536, 14], [917632, 0], [917760, 14], [918E3, 0]]
                        })(c || (c = {})); var d = this && this.__spreadArray || function (a, b, c) {
                            if (c || 2 === arguments.length) for (var d = 0, h = b.length, l; d < h; d++)!l && d in b || (l || (l = Array.prototype.slice.call(b, 0, d)), l[d] = b[d]); return a.concat(l ||
                                Array.prototype.slice.call(b))
                        }; (function (a) {
                            function b(a, b) { return !Array.from(a).map(function (a) { return l(a, b) }).every(function (a) { return 3 === a || 1 === a || 2 === a || 4 === a }) } function c(a, b) {
                                function c(b) { return b >= a.length ? a.length : h(a[b]) ? b + 2 : b + 1 } if (0 === a.length) return []; b && !b.rules && (b.rules = []); var l = []; var m = 0; var e = new q(a, b, m), g = 0; do {
                                    var f = m; m = c(m); e = e.next(m); if (e.match(null, [19], null, null)) l.push(f); else {
                                        if (e.match(null, null, [20], null)) { l.push(f); break } if (!e.match(null, [3], [1], null)) {
                                            var k = [2, 3,
                                                1]; if (e.match(null, k, null, null)) l.push(f); else if (e.match(null, null, k, null)) l.push(f); else if (!e.match(null, [4], [4], null)) {
                                                    for (k = [13, 14, 16]; e.match(null, null, k, null);)m = [m, c(m)], f = m[0], m = m[1], e = e.ignoringRight(m); if (20 === e.right) { l.push(f); break } for (; e.match(null, null, null, k);)m = c(m), e = e.ignoringLookahead(m); k = [11, 15]; var w = [8, 6]; if (null === b || void 0 === b ? 0 : b.rules) { for (var n = !1, x = 0, p = b.rules; x < p.length; x++) { var y = p[x]; if (n = y.match(e)) { y.breakIfMatch && l.push(f); break } } if (n) continue } if (!(e.match(null,
                                                        k, k, null) || (n = d([10], w, !0), e.match(null, k, n, k) || e.match(k, n, k, null) || e.match(null, [15], [6], null) || e.match(null, [15], [5], [15]) || e.match([15], [5], [15], null) || e.match(null, [9], [9], null) || e.match(null, k, [9], null) || e.match(null, [9], k, null) || (w = d([7], w, !0), e.match([9], w, [9], null) || e.match(null, [9], w, [9]) || e.match(null, [17], [17], null) || (k = d([17, 9], k, !0), e.match(null, k, [12], null) || e.match(null, [12], [12], null) || e.match(null, [12], k, null)))))) { if (18 === e.right) { if (g += 1, 1 == g % 2) continue } else g = 0; l.push(f) }
                                                }
                                        }
                                    }
                                } while (f <
                                    a.length); return l
                            } function h(a) { a = a.charCodeAt(0); return 55296 <= a && 56319 >= a } function l(a, b) { if (null === b || void 0 === b ? 0 : b.propertyMapping) { var c = b.propertyMapping(a); if (c) return m(c, b) } a = a.codePointAt(0); return e(a, 0, g.length - 1) } function m(b, c) { var d, h, l = function (a) { return a.toLowerCase() == b.toLowerCase() }; c = null !== (h = null === (d = null === c || void 0 === c ? void 0 : c.customProperties) || void 0 === d ? void 0 : d.findIndex(l)) && void 0 !== h ? h : -1; return -1 != c ? -c - 1 : a.data.propertyMap.findIndex(l) } function e(a, b, c) {
                                if (c <
                                    b) return 0; var d = b + ~~((c - b) / 2), h = g[d], l = g[d + 1]; l = l ? l[0] : Infinity; return a < h[0] ? e(a, b, d - 1) : a >= l ? e(a, d + 1, c) : h[1]
                            } a.default_ = function (a, d) { var h = c(a, d); if (0 == h.length) return []; for (var l = [], m = 0; m < h.length - 1; m++) { var e = h[m + 1], g = new f(a, h[m], e); b(g.text, d) ? l.push(g) : m == h.length - 2 && (g = new f(a, e, e), l.push(g)) } return l }; var g = a.data.WORD_BREAK_PROPERTY, f = function () {
                                function a(a, b, c) { this._source = a; this.start = b; this.end = c } Object.defineProperty(a.prototype, "text", {
                                    get: function () {
                                        return this._source.substring(this.start,
                                            this.end)
                                    }, enumerable: !1, configurable: !0
                                }); Object.defineProperty(a.prototype, "length", { get: function () { return this.end - this.start }, enumerable: !1, configurable: !0 }); return a
                            }(), q = function () {
                                function a(a, b, c, d, h, l) { this.right = this.left = this.lookbehind = 19; this.text = a; this.options = b; 3 == arguments.length ? this.lookahead = this.wordbreakPropertyAt(c) : (this.lookbehind = c, this.left = d, this.right = h, this.lookahead = l) } a.prototype.next = function (b) {
                                    b = this.wordbreakPropertyAt(b); return new a(this.text, this.options, this.left,
                                        this.right, this.lookahead, b)
                                }; a.prototype.ignoringRight = function (b) { b = this.wordbreakPropertyAt(b); return new a(this.text, this.options, this.lookbehind, this.left, this.lookahead, b) }; a.prototype.ignoringLookahead = function (b) { b = this.wordbreakPropertyAt(b); return new a(this.text, this.options, this.lookbehind, this.left, this.right, b) }; a.prototype.wordbreakPropertyAt = function (a) { return 0 > a ? 19 : a >= this.text.length ? 20 : h(this.text[a]) ? l(this.text[a] + this.text[a + 1]) : l(this.text[a], this.options) }; a.prototype.match =
                                    function (a, b, c, d) { var h, l, m, e; return (a = (a = (a = null !== (h = null === a || void 0 === a ? void 0 : a.includes(this.lookbehind)) && void 0 !== h ? h : !0) && (null !== (l = null === b || void 0 === b ? void 0 : b.includes(this.left)) && void 0 !== l ? l : !0)) && (null !== (m = null === c || void 0 === c ? void 0 : c.includes(this.right)) && void 0 !== m ? m : !0)) && (null !== (e = null === d || void 0 === d ? void 0 : d.includes(this.lookahead)) && void 0 !== e ? e : !0) }; a.prototype.propertyMatch = function (a, b, c, d) {
                                        var h = this, l = function (a) { return m(a, h.options) }; return this.match(null === a ||
                                            void 0 === a ? void 0 : a.map(l), null === b || void 0 === b ? void 0 : b.map(l), null === c || void 0 === c ? void 0 : c.map(l), null === d || void 0 === d ? void 0 : d.map(l))
                                    }; return a
                            }(); a.BreakerContext = q
                        })(c || (c = {})); c["default"] = c.default_; (function (a) { a.placeholder = function (a) { var b = 0; return a.split(/\s+/).map(function (a) { a = { start: b, end: b + a.length, text: a, length: a.length }; b = a.end; return a }) } })(c || (c = {})); "undefined" !== typeof module && module.exports && (module.exports.wordBreakers = c); var h = this && this.__values || function (a) {
                            var b = "function" ===
                                typeof Symbol && Symbol.iterator, c = b && a[b], d = 0; if (c) return c.call(a); if (a && "number" === typeof a.length) return { next: function () { a && d >= a.length && (a = void 0); return { value: a && a[d++], done: !a } } }; throw new TypeError(b ? "Object is not iterable." : "Symbol.iterator is not defined.");
                        }; (function (a) {
                            var b = function () {
                                function a(a) { a = a || {}; this._futureSuggestions = a.futureSuggestions ? a.futureSuggestions.slice() : []; a.punctuation && (this.punctuation = a.punctuation) } a.prototype.configure = function (a) {
                                    return this.configuration =
                                        { leftContextCodePoints: a.maxLeftContextCodePoints, rightContextCodePoints: a.maxRightContextCodePoints }
                                }; a.prototype.predict = function (a, b, c) { a = function (a) { var b, c = []; try { for (var d = h(a), l = d.next(); !l.done; l = d.next())c.push({ sample: l.value, p: 1 }) } catch (T) { var m = { error: T } } finally { try { l && !l.done && (b = d.return) && b.call(d) } finally { if (m) throw m.error; } } return c }; return c ? a(c) : (c = this._futureSuggestions.shift()) ? a(c) : [] }; return a
                            }(); a.DummyModel = b
                        })(b || (b = {})); var l = this && this.__read || function (a, b) {
                            var c = "function" ===
                                typeof Symbol && a[Symbol.iterator]; if (!c) return a; a = c.call(a); var d, h = []; try { for (; (void 0 === b || 0 < b--) && !(d = a.next()).done;)h.push(d.value) } catch (B) { var l = { error: B } } finally { try { d && !d.done && (c = a["return"]) && c.call(a) } finally { if (l) throw l.error; } } return h
                        }, m; (function (a) {
                            var c = function () {
                                function a(a) {
                                    this.diagonalWidth = 2; this.inputSequence = []; this.matchSequence = []; if (a) {
                                        var b = a.resolvedDistances.length; this.resolvedDistances = Array(b); for (var c = 0; c < b; c++)this.resolvedDistances[c] = Array.from(a.resolvedDistances[c]);
                                        this.inputSequence = Array.from(a.inputSequence); this.matchSequence = Array.from(a.matchSequence); this.diagonalWidth = a.diagonalWidth
                                    } else this.resolvedDistances = []
                                } a.prototype.getTrueIndex = function (a, b, c) { a = { row: a, col: b - a + c, sparse: !1 }; if (0 > a.col || a.col > 2 * c) a.sparse = !0; return a }; a.prototype.getCostAt = function (a, b, c) { void 0 === c && (c = this.diagonalWidth); if (0 > a || 0 > b) return -1 == a && -1 <= b ? b + 1 : -1 == b && -1 <= a ? a + 1 : Number.MAX_VALUE; a = this.getTrueIndex(a, b, c); return a.sparse ? Number.MAX_VALUE : this.resolvedDistances[a.row][a.col] };
                                a.prototype.getFinalCost = function () { for (var a = this, b = a.getHeuristicFinalCost(); b > a.diagonalWidth;)a = a.increaseMaxDistance(), b = a.getHeuristicFinalCost(); return b }; a.prototype.getHeuristicFinalCost = function () { return this.getCostAt(this.inputSequence.length - 1, this.matchSequence.length - 1) }; a.prototype.hasFinalCostWithin = function (a) { var b = this, c = b.getHeuristicFinalCost(), d = this.diagonalWidth; do { if (c <= a) return !0; if (d < a) b = b.increaseMaxDistance(), d++, c = b.getHeuristicFinalCost(); else break } while (1); return !1 };
                                a.prototype.editPath = function (b, c) {
                                    void 0 === b && (b = this.inputSequence.length - 1); void 0 === c && (c = this.matchSequence.length - 1); var d = this.getCostAt(b, c), h = null, m = null, e = this.getCostAt(b, c - 1), g = this.getCostAt(b - 1, c), f = this.getCostAt(b - 1, c - 1), q = l(a.getTransposeParent(this, b, c), 2), k = q[0]; q = q[1]; if (0 <= k && 0 <= q) {
                                        m = 1; h = ["transpose-start"]; if (k != b - 1) { var w = b - k - 1; h = h.concat(Array(w).fill("transpose-delete")) } else w = c - q - 1, h = h.concat(Array(w).fill("transpose-insert")); m += w; h.push("transpose-end"); this.getCostAt(k -
                                            1, q - 1) != d - m && (h = null); m = [k - 1, q - 1]
                                    } h || (f == d - 1 ? (h = ["substitute"], m = [b - 1, c - 1]) : e == d - 1 ? (h = ["insert"], m = [b, c - 1]) : g == d - 1 ? (h = ["delete"], m = [b - 1, c]) : (h = ["match"], m = [b - 1, c - 1])); return 0 <= m[0] && 0 <= m[1] ? this.editPath(m[0], m[1]).concat(h) : -1 < m[0] ? Array(m[0] + 1).fill("delete").concat(h) : -1 < m[1] ? Array(m[1] + 1).fill("insert").concat(h) : h
                                }; a.getTransposeParent = function (a, b, c) {
                                    if (0 > b || 0 > c || a.inputSequence[b].key == a.matchSequence[c].key) return [-1, -1]; for (var d = -1, h = b - 1; 0 <= h; h--)if (a.inputSequence[h].key == a.matchSequence[c].key) {
                                        d =
                                        h; break
                                    } var l = -1; for (h = c - 1; 0 <= h; h--)if (a.matchSequence[h].key == a.inputSequence[b].key) { l = h; break } return [d, l]
                                }; a.initialCostAt = function (b, c, d, h, m) { var e = b.inputSequence[c].key == b.matchSequence[d].key ? 0 : 1; e = b.getCostAt(c - 1, d - 1) + e; h = h || b.getCostAt(c, d - 1) + 1; m = m || b.getCostAt(c - 1, d) + 1; var g = Number.MAX_VALUE; if (0 < c && 0 < d) { var f = l(a.getTransposeParent(b, c, d), 2); g = f[0]; f = f[1]; g = b.getCostAt(g - 1, f - 1) + (c - g - 1) + 1 + (d - f - 1) } return Math.min(e, m, h, g) }; a.prototype.getSubset = function (b, c) {
                                    var d = new a(this); if (b > this.inputSequence.length ||
                                        c > this.matchSequence.length) throw "Invalid dimensions specified for trim operation"; d.inputSequence.splice(b); d.matchSequence.splice(c); d.resolvedDistances.splice(b); b = this.getTrueIndex(b - 1, c - 1, this.diagonalWidth); for (c = b.col; c <= 2 * this.diagonalWidth; c++) { var h = b.row - (c - b.col); if (0 > h) break; if (0 > c) d.resolvedDistances[h] = Array(2 * d.diagonalWidth + 1).fill(Number.MAX_VALUE); else { var l = 2 * this.diagonalWidth - c, m = d.resolvedDistances[h].splice(0, c + 1); l = Array(l).fill(Number.MAX_VALUE); d.resolvedDistances[h] = m.concat(l) } } return d
                                };
                                a.forDiagonalOfAxis = function (a, b, c, d) { c = c - b < a ? c - b + a : 2 * a; a = b - a; for (b = (0 > a ? 0 : a) - a; b <= c; b++)d(a + b, b) }; a.prototype.addInputChar = function (b) { var c = new a(this), d = c.inputSequence.length; c.inputSequence.push(b); var h = Array(2 * c.diagonalWidth + 1).fill(Number.MAX_VALUE); c.resolvedDistances[d] = h; if (0 == c.matchSequence.length) return c; a.forDiagonalOfAxis(c.diagonalWidth, d, c.matchSequence.length - 1, function (b, l) { h[l] = a.initialCostAt(c, d, b) }); return c }; a.prototype.addMatchChar = function (b) {
                                    var c = new a(this), d = c.matchSequence.length;
                                    c.matchSequence.push(b); if (0 == c.inputSequence.length) return c; a.forDiagonalOfAxis(c.diagonalWidth, d, c.inputSequence.length - 1, function (b, h) { c.resolvedDistances[b][2 * c.diagonalWidth - h] = a.initialCostAt(c, b, d) }); return c
                                }; a.prototype.increaseMaxDistance = function () {
                                    function b(a, b, d, h) { var l = 2 * (c.diagonalWidth - 1), m = d.length - 1; l = l < m - a ? l : m - a; for (m = 0; m <= l; m++)b == d[a + m].key && h(a + m, m) } var c = new a(this); c.diagonalWidth++; if (1 > c.inputSequence.length || 1 > c.matchSequence.length) return c; for (var d = function (d) {
                                        var m =
                                            Number.MAX_VALUE, e = d - c.diagonalWidth; if (0 <= e) { var g = m = a.initialCostAt(c, d, e, 0 == e ? d + 2 : Number.MAX_VALUE, void 0); if (e < c.matchSequence.length - 1) { a.propagateUpdateFrom(c, d, e + 1, g + 1, 0); var f = d + 2; d + 2 < h.inputSequence.length && b(e + 3, c.inputSequence[d + 1].key, c.matchSequence, function (b, d) { a.propagateUpdateFrom(c, f, b, g + d + 2, d) }) } } var q = Number.MAX_VALUE; e = d + c.diagonalWidth; if (e < c.matchSequence.length) {
                                                q = 0 == d ? e + 2 : Number.MAX_VALUE; l = c.getCostAt(d, e - 1, h.diagonalWidth) + 1; var k = q = a.initialCostAt(c, d, e, l, q); if (d < c.inputSequence.length -
                                                    1) { a.propagateUpdateFrom(c, d + 1, e, k + 1, 2 * h.diagonalWidth); var w = e + 2; e + 2 < h.matchSequence.length && b(d + 3, c.matchSequence[d + 1].key, c.inputSequence, function (b, d) { a.propagateUpdateFrom(c, b, w, k + d + 2, 2 * (c.diagonalWidth - 1) - d) }) }
                                            } c.resolvedDistances[d] = [m].concat(c.resolvedDistances[d], q)
                                    }, h = this, l, m = 0; m < c.inputSequence.length; m++)d(m); return c
                                }; a.propagateUpdateFrom = function (a, b, c, d, h) {
                                    if (d < a.resolvedDistances[b][h]) {
                                        a.resolvedDistances[b][h] = d; var l = b < a.inputSequence.length - 1, m = c < a.matchSequence.length - 1; h <
                                            2 * (a.diagonalWidth - 1) && m && this.propagateUpdateFrom(a, b, c + 1, d + 1, h + 1); 0 < h && l && this.propagateUpdateFrom(a, b + 1, c, d + 1, h - 1); if (l && m) {
                                                l = d + (a.inputSequence[b + 1].key == a.matchSequence[c + 1].key ? 0 : 1); this.propagateUpdateFrom(a, b + 1, c + 1, l, h); h = -1; for (l = b + 2; l < a.inputSequence.length; l++)if (a.inputSequence[l].key == a.matchSequence[c + 1].key) { h = l; break } m = -1; for (l = c + 2; l < a.matchSequence.length; l++)if (a.matchSequence[l].key == a.inputSequence[b + 1].key) { m = l; break } 0 < h && 0 < m && this.propagateUpdateFrom(a, h, m, d + (h - b - 2) + 1 + (m - c - 2),
                                                    a.diagonalWidth - 1 + m - h)
                                            }
                                    }
                                }; Object.defineProperty(a.prototype, "mapKey", { get: function () { var a = this.inputSequence.map(function (a) { return a.key }).join(""), c = this.matchSequence.map(function (a) { return a.key }).join(""); return a + b.SENTINEL_CODE_UNIT + c + b.SENTINEL_CODE_UNIT + this.diagonalWidth }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "lastInputEntry", { get: function () { return this.inputSequence[this.inputSequence.length - 1] }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype,
                                    "lastMatchEntry", { get: function () { return this.matchSequence[this.matchSequence.length - 1] }, enumerable: !1, configurable: !0 }); a.computeDistance = function (b, c, d) { void 0 === d && (d = 1); var h = new a; h.diagonalWidth = d || 1; for (d = 0; d < b.length; d++)h = h.addInputChar(b[d]); for (b = 0; b < c.length; b++)h = h.addMatchChar(c[b]); return h }; return a
                            }(); a.ClassicalDistanceCalculation = c
                        })(m || (m = {})); a = this && this.__generator || function (a, b) {
                            function c(a) { return function (b) { return d([a, b]) } } function d(c) {
                                if (l) throw new TypeError("Generator is already executing.");
                                for (; h;)try {
                                    if (l = 1, m && (e = c[0] & 2 ? m["return"] : c[0] ? m["throw"] || ((e = m["return"]) && e.call(m), 0) : m.next) && !(e = e.call(m, c[1])).done) return e; if (m = 0, e) c = [c[0] & 2, e.value]; switch (c[0]) {
                                        case 0: case 1: e = c; break; case 4: return h.label++, { value: c[1], done: !1 }; case 5: h.label++; m = c[1]; c = [0]; continue; case 7: c = h.ops.pop(); h.trys.pop(); continue; default: if (!(e = h.trys, e = 0 < e.length && e[e.length - 1]) && (6 === c[0] || 2 === c[0])) { h = 0; continue } if (3 === c[0] && (!e || c[1] > e[0] && c[1] < e[3])) h.label = c[1]; else if (6 === c[0] && h.label < e[1]) h.label =
                                            e[1], e = c; else if (e && h.label < e[2]) h.label = e[2], h.ops.push(c); else { e[2] && h.ops.pop(); h.trys.pop(); continue }
                                    }c = b.call(a, h)
                                } catch (H) { c = [6, H], m = 0 } finally { l = e = 0 } if (c[0] & 5) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }
                            } var h = { label: 0, sent: function () { if (e[0] & 1) throw e[1]; return e[1] }, trys: [], ops: [] }, l, m, e, g; return g = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (g[Symbol.iterator] = function () { return this }), g
                        }; (function (c) {
                            c.QUEUE_NODE_COMPARATOR = function (a, b) { return a.currentCost - b.currentCost };
                            var d = function () {
                                function a(b, d) { this.toKey = function (a) { return a }; d = d || function (a) { return a }; b instanceof a ? (this.calculation = b.calculation, this.currentTraversal = b.currentTraversal, this.priorInput = b.priorInput, this.toKey = b.toKey) : (this.calculation = new c.ClassicalDistanceCalculation, this.currentTraversal = b, this.priorInput = [], this.toKey = d) } Object.defineProperty(a.prototype, "knownCost", { get: function () { return this.calculation.getHeuristicFinalCost() }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype,
                                    "inputSamplingCost", { get: function () { if (void 0 === this._inputCost) { var a = e.MIN_KEYSTROKE_PROBABILITY; this._inputCost = this.priorInput.map(function (b) { return b.p > a ? b.p : a }).reduce(function (a, b) { return a - Math.log(b) }, 0) } return this._inputCost }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "currentCost", { get: function () { return e.EDIT_DISTANCE_COST_SCALE * this.knownCost + this.inputSamplingCost }, enumerable: !1, configurable: !0 }); a.prototype.buildInsertionEdges = function () {
                                        var b, c = []; try {
                                            for (var d =
                                                h(this.currentTraversal.children()), l = d.next(); !l.done; l = d.next()) { var m = l.value, e = m.traversal(), g = this.calculation.addMatchChar({ key: m.char, traversal: e }), f = new a(this); f.calculation = g; f.priorInput = this.priorInput; f.currentTraversal = e; c.push(f) }
                                        } catch (J) { var q = { error: J } } finally { try { l && !l.done && (b = d.return) && b.call(d) } finally { if (q) throw q.error; } } return c
                                    }; a.prototype.buildDeletionEdges = function (c) {
                                        var d, l = []; try {
                                            for (var m = h(c), g = m.next(); !g.done; g = m.next()) {
                                                var f = g.value; if (f.p < c[0].p * Math.exp(-e.EDIT_DISTANCE_COST_SCALE)) break;
                                                var q = this.calculation, k = f.sample; k.deleteLeft && (q = q.getSubset(q.inputSequence.length - k.deleteLeft, q.matchSequence.length)); var w = Array.from(this.priorInput); w.push(f); for (var n = 0; n < k.insert.length; n++) { var y = k.insert[n]; b.isHighSurrogate(y) && (n++, y += k.insert[n]); var p = this.toKey(y); p && (q = q.addInputChar({ key: p })) } var v = new a(this); v.calculation = q; v.priorInput = w; l.push(v)
                                            }
                                        } catch (S) { var r = { error: S } } finally { try { g && !g.done && (d = m.return) && d.call(m) } finally { if (r) throw r.error; } } return l
                                    }; a.prototype.buildSubstitutionEdges =
                                        function (b) {
                                            var c, d, l; b = this.buildDeletionEdges(b); var m = []; try { for (var e = h(this.currentTraversal.children()), g = e.next(); !g.done; g = e.next()) { var f = g.value; try { for (var q = (d = void 0, h(b)), k = q.next(); !k.done; k = q.next()) { var w = k.value, n = f.traversal(), y = w.calculation.addMatchChar({ key: f.char, traversal: n }), p = new a(this); p.calculation = y; p.priorInput = w.priorInput; p.currentTraversal = n; m.push(p) } } catch (I) { d = { error: I } } finally { try { k && !k.done && (l = q.return) && l.call(q) } finally { if (d) throw d.error; } } } } catch (I) {
                                                var v =
                                                    { error: I }
                                            } finally { try { g && !g.done && (c = e.return) && c.call(e) } finally { if (v) throw v.error; } } return m
                                        }; Object.defineProperty(a.prototype, "mapKey", { get: function () { var a = this.priorInput.map(function (a) { return "+" + a.sample.insert + "-" + a.sample.deleteLeft }).join(""), c = this.calculation.matchSequence.map(function (a) { return a.key }).join(""); return a + b.SENTINEL_CODE_UNIT + c }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "isFullReplacement", {
                                            get: function () {
                                                return this.knownCost && this.knownCost ==
                                                    this.priorInput.length
                                            }, enumerable: !1, configurable: !0
                                        }); return a
                            }(); c.SearchNode = d; var l = function () { function a(a, d) { this.processed = []; this.index = a; this.correctionQueue = new b.PriorityQueue(c.QUEUE_NODE_COMPARATOR, d) } a.prototype.increaseMaxEditDistance = function () { var a = this.correctionQueue.toArray(); a.forEach(function (a) { a.calculation = a.calculation.increaseMaxDistance() }); this.correctionQueue = new b.PriorityQueue(c.QUEUE_NODE_COMPARATOR, a) }; return a }(), m = function () {
                                function a(a) { this.resultNode = a } Object.defineProperty(a.prototype,
                                    "inputSequence", { get: function () { return this.resultNode.priorInput }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "matchSequence", { get: function () { return this.resultNode.calculation.matchSequence }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "matchString", { get: function () { return this.matchSequence.map(function (a) { return a.key }).join("") }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "knownCost", {
                                        get: function () { return this.resultNode.knownCost },
                                        enumerable: !1, configurable: !0
                                    }); Object.defineProperty(a.prototype, "inputSamplingCost", { get: function () { return this.resultNode.inputSamplingCost }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "totalCost", { get: function () { return this.resultNode.currentCost }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "finalTraversal", { get: function () { return this.resultNode.currentTraversal }, enumerable: !1, configurable: !0 }); return a
                            }(); c.SearchResult = m; var e = function () {
                                function h(a) {
                                    this.tierOrdering =
                                    []; this.inputSequence = []; this.minInputCost = []; this.returnedValues = {}; this.processedEdgeSet = {}; if (!a) throw "The LexicalModel parameter must not be null / undefined."; if (!a.traverseFromRoot) throw "The provided model does not implement the `traverseFromRoot` function, which is needed to support robust correction searching."; this.buildQueueSpaceComparator(); this.selectionQueue = new b.PriorityQueue(this.QUEUE_SPACE_COMPARATOR); this.rootNode = new d(a.traverseFromRoot(), a.toKey ? a.toKey.bind(a) : null); this.completedPaths =
                                        [this.rootNode]; a = new l(0, [this.rootNode]); this.tierOrdering.push(a); this.selectionQueue.enqueue(a)
                                } h.prototype.buildQueueSpaceComparator = function () { var a = this; this.QUEUE_SPACE_COMPARATOR = function (b, c) { var d = b.correctionQueue.peek(), h = c.correctionQueue.peek(); b = b.index; c = c.index; var l = 0, m = 1; c < b && (m = c, c = b, b = m, m = -1); for (; b < c; b++)l += a.minInputCost[b]; return d && h ? d.currentCost - h.currentCost + m * l : h ? 1 : -1 } }; h.prototype.increaseMaxEditDistance = function () { this.tierOrdering.forEach(function (a) { a.increaseMaxEditDistance() }) };
                                h.prototype.addInput = function (a) { this.inputSequence.push(a); this.minInputCost.push(-Math.log(a[0].p)); var b = [], c = this.completedPaths.map(function (b) { var c = b.buildDeletionEdges(a); b = b.buildSubstitutionEdges(a); return c.concat(b) }); this.completedPaths = []; this.returnedValues = {}; c.forEach(function (a) { b = b.concat(a) }); c = new l(this.tierOrdering.length, b); this.tierOrdering.push(c); this.selectionQueue.enqueue(c) }; h.prototype.removeLastInput = function () { }; h.prototype.hasNextMatchEntry = function () {
                                    var a = this.selectionQueue.peek();
                                    return a ? 0 < a.correctionQueue.count : !1
                                }; h.prototype.handleNextNode = function () {
                                    if (!this.hasNextMatchEntry()) return { type: "none" }; var a = this.selectionQueue.dequeue(), c = a.correctionQueue.dequeue(), d = { type: "intermediate", cost: c.currentCost }; if (this.processedEdgeSet[c.mapKey]) return this.selectionQueue.enqueue(a), d; this.processedEdgeSet[c.mapKey] = !0; var l = !1; if (2 < c.knownCost) return d; 2 == c.knownCost && (l = !0); for (var m = 0, e = 0; e <= a.index; e++)m += this.minInputCost[e]; if (c.currentCost > m + 2.5 * h.EDIT_DISTANCE_COST_SCALE) return d;
                                    l || (m = c.buildInsertionEdges(), a.correctionQueue.enqueueAll(m)); if (a.index == this.tierOrdering.length - 1) return this.completedPaths.push(c), this.selectionQueue.enqueue(a), { type: "complete", cost: c.currentCost, finalNode: c }; a = this.tierOrdering[a.index + 1]; e = a.index; m = []; l || (m = c.buildDeletionEdges(this.inputSequence[e - 1])); c = c.buildSubstitutionEdges(this.inputSequence[e - 1]); a.correctionQueue.enqueueAll(m.concat(c)); this.selectionQueue = new b.PriorityQueue(this.QUEUE_SPACE_COMPARATOR, this.tierOrdering); return d
                                };
                                h.prototype.getBestMatches = function (d) {
                                    var l, e, g, f, q, k, w, n, y, p, v, r, u, t, x, B; return a(this, function (a) {
                                        switch (a.label) {
                                            case 0: l = this; e = {}; g = 0 == d ? Infinity : void 0 == d || Number.isNaN(d) ? h.DEFAULT_ALLOTTED_CORRECTION_TIME_INTERVAL : d; f = function () {
                                                function a(a, b) { this.largestIntervals = [0]; this.loopStart = this.start = Date.now(); this.maxExecutionTime = a; this.maxTrueTime = b } a.prototype.startLoop = function () { this.loopStart = Date.now() }; a.prototype.markIteration = function () {
                                                    var a = Date.now() - this.loopStart; this.executionTime +=
                                                        a; a && (2 < this.largestIntervals.length && a > this.largestIntervals[0] ? this.largestIntervals[0] = a : this.largestIntervals.push(a), this.largestIntervals.sort(), this.updateOutliers())
                                                }; a.prototype.updateOutliers = function () { 2 < this.largestIntervals.length && this.largestIntervals[2] >= 2 * (this.largestIntervals[0] + this.largestIntervals[1]) && (this.executionTime -= this.largestIntervals[2], this.largestIntervals.pop()) }; a.prototype.shouldTimeout = function () {
                                                    return Date.now() - this.start > this.maxTrueTime ? !0 : this.executionTime >
                                                        this.maxExecutionTime
                                                }; a.prototype.resetOutlierCheck = function () { this.largestIntervals = [] }; return a
                                            }(); q = function () {
                                                function a() { this.currentCost = Number.MIN_SAFE_INTEGER; this.entries = [] } a.prototype.checkAndAdd = function (a) { var b = null; a.currentCost > this.currentCost && (b = this.tryFinalize(), this.currentCost = a.currentCost); var c = a.calculation.matchSequence.map(function (a) { return a.key }).join(""); l.returnedValues[c] || (l.returnedValues[c] = a); e[c] || (this.entries.push(new m(a)), e[c] = a); return b }; a.prototype.tryFinalize =
                                                    function () { var a = null; 0 < this.entries.length && (a = this.entries, this.entries = []); return a }; return a
                                            }(); k = new q; w = new f(1.5 * g, g); n = Object.values(this.returnedValues); if (!(0 < n.length)) return [3, 6]; y = new b.PriorityQueue(c.QUEUE_NODE_COMPARATOR, n); w.startLoop(); a.label = 1; case 1: if (!(0 < y.count)) return [3, 4]; p = y.dequeue(); if (p.isFullReplacement) return [3, 1]; v = k.checkAndAdd(p); w.markIteration(); return v ? [4, v] : [3, 3]; case 2: a.sent(), a.label = 3; case 3: return [3, 1]; case 4: return (r = k.tryFinalize()) ? [4, r] : [3, 6]; case 5: a.sent(),
                                                a.label = 6; case 6: w.resetOutlierCheck(), w.startLoop(), u = !1, a.label = 7; case 7: t = void 0; do t = this.handleNextNode(), w.markIteration(), w.shouldTimeout() && (u = !0); while (!u && "intermediate" == t.type); x = void 0; if ("none" == t.type) return [3, 10]; if ("complete" == t.type) { if (t.finalNode.isFullReplacement) return [3, 10]; x = k.checkAndAdd(t.finalNode) } return x ? [4, x] : [3, 9]; case 8: a.sent(), a.label = 9; case 9: if (!u && this.hasNextMatchEntry()) return [3, 7]; a.label = 10; case 10: return (B = k.tryFinalize()) ? [4, B] : [3, 12]; case 11: a.sent(), a.label =
                                                    12; case 12: return [2, null]
                                        }
                                    })
                                }; h.EDIT_DISTANCE_COST_SCALE = 5; h.MIN_KEYSTROKE_PROBABILITY = 1E-4; h.DEFAULT_ALLOTTED_CORRECTION_TIME_INTERVAL = 33; return h
                            }(); c.SearchSpace = e
                        })(m || (m = {})); var q = this && this.__extends || function () {
                            var a = function (b, c) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]) }; return a(b, c) }; return function (b, c) {
                                function d() { this.constructor = b } if ("function" !== typeof c &&
                                    null !== c) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null"); a(b, c); b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
                            }
                        }(); (function (a) {
                            function d(a, b) { for (var c = [], d = 0; d < a.kmwLength(); d++) { var h = { insert: a.kmwCharAt(d), deleteLeft: 0, id: b }; c.push(h) } return c } var l = function () { return function () { } }(); a.TrackedContextSuggestion = l; var m = function () {
                                function a() { this.transformDistributions = []; this.activeReplacementId = -1 } Object.defineProperty(a.prototype,
                                    "currentText", { get: function () { return void 0 === this.replacementText || null === this.replacementText ? this.raw : this.replacementText }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "replacement", { get: function () { var a = this.activeReplacementId; return this.replacements.find(function (b) { return b.suggestion.id == a }) }, enumerable: !1, configurable: !0 }); a.prototype.revert = function () { delete this.activeReplacementId }; return a
                            }(); a.TrackedContextToken = m; var e = function () {
                                function b(c) {
                                    this.searchSpace =
                                    []; c instanceof b ? (this.tokens = c.tokens.map(function (a) { var b = new m; b.raw = a.raw; b.replacements = a.replacements; b.activeReplacementId = a.activeReplacementId; b.transformDistributions = a.transformDistributions; a.replacementText && (b.replacementText = a.replacementText); return b }), this.searchSpace = c.searchSpace, this.indexOffset = 0, this.model = c.model) : (this.tokens = [], this.indexOffset = Number.MIN_SAFE_INTEGER, (this.model = c) && c.traverseFromRoot && (this.searchSpace = [new a.SearchSpace(c)]))
                                } Object.defineProperty(b.prototype,
                                    "head", { get: function () { return this.tokens[0] }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype, "tail", { get: function () { return this.tokens[this.tokens.length - 1] }, enumerable: !1, configurable: !0 }); b.prototype.popHead = function () { this.tokens.splice(0, 2); --this.indexOffset }; b.prototype.pushTail = function (b) { this.searchSpace = this.model && this.model.traverseFromRoot ? [new a.SearchSpace(this.model)] : []; this.tokens.push(b); var c = this; 0 < c.searchSpace.length && b.transformDistributions.forEach(function (a) { return c.searchSpace[0].addInput(a) }) };
                                b.prototype.pushWhitespaceToTail = function (a) { void 0 === a && (a = null); var b = new m; b.transformDistributions = a ? [a] : []; b.raw = null; this.tokens.push(b) }; b.prototype.replaceTailForBackspace = function (a, b) { this.tokens.pop(); b = d(a, b).map(function (a) { return [{ sample: a, p: 1 }] }); var c = new m; c.raw = a; c.transformDistributions = b; this.pushTail(c) }; b.prototype.updateTail = function (a, b) {
                                    var c = this.tail; b = b || ("" === b ? "" : c.raw); a && 0 < a.length && (c.transformDistributions.push(a), this.searchSpace && this.searchSpace.forEach(function (b) { return b.addInput(a) }));
                                    c.raw = b
                                }; b.prototype.toRawTokenization = function () { var a, b = []; try { for (var c = h(this.tokens), d = c.next(); !d.done; d = c.next()) { var l = d.value; null !== l.currentText && b.push(l.currentText) } } catch (T) { var m = { error: T } } finally { try { d && !d.done && (a = c.return) && a.call(c) } finally { if (m) throw m.error; } } return b }; return b
                            }(); a.TrackedContextState = e; l = function (h) {
                                function l() { return null !== h && h.apply(this, arguments) || this } q(l, h); l.attemptMatchContext = function (b, c, d) {
                                    var h = c.toRawTokenization(); h = a.ClassicalDistanceCalculation.computeDistance(h.map(function (a) { return { key: a } }),
                                        b.map(function (a) { return { key: a } }), 1).editPath(); var l = !1, g = !1; if (1 < h.length) { if ("insert" == h[0] && ("substitute" != h[1] || 2 != h.length) || 0 <= h[0].indexOf("transpose")) return null; "delete" == h[0] && (l = !0) } var f = h.length - 1, q = !1; if ("delete" == h[f] || 0 <= h[0].indexOf("transpose")) return null; "insert" == h[f] ? g = !0 : 0 < f && "insert" == h[f - 1] && "substitute" == h[f] && (q = g = !0); if (0 < f && "delete" == h[f - 1] && "substitute" == h[f]) return null; for (var k = 1; k < h.length - (q ? 2 : 1); k++)if ("match" != h[k]) return null; g && (q && (c.tail.replacementText =
                                            b[b.length - 2]), c = new e(c)); (q = d && Array.isArray(d) ? d[0].sample : null) && "" == q.insert && 0 == q.deleteLeft && !q.deleteRight && (q = null); k = q && r.isWhitespace(q); var w = q && r.isBackspace(q), n = b[b.length - 1]; 1 < h.length ? (l && c.popHead(), g ? (b = b[b.length - 1], h = new m, h.raw = b, k || !q ? (c.pushWhitespaceToTail(null !== d && void 0 !== d ? d : []), h.transformDistributions = []) : (c.pushWhitespaceToTail(), h.transformDistributions = d ? [d] : []), c.pushTail(h)) : w ? c.replaceTailForBackspace(n, q.id) : c.updateTail(q ? d : null, n)) : "insert" == h[f] ? (h = new m, h.raw =
                                                b[0], h.transformDistributions = [d], c.pushTail(h)) : w ? c.replaceTailForBackspace(n, q.id) : c.updateTail(q ? d : null, n); return c
                                }; l.modelContextState = function (a, b, c) { a = a.map(function (a) { var b = new m; b.raw = a; b.transformDistributions = b.raw ? d(b.raw).map(function (a) { return [{ sample: a, p: 1 }] }) : []; return b }); c = new e(c); for (0 < a.length && c.pushTail(a.splice(0, 1)[0]); 0 < a.length;)c.pushWhitespaceToTail(), c.pushTail(a.splice(0, 1)[0]); 0 == c.tokens.length && (a = new m, a.raw = "", c.pushTail(a)); return c }; l.prototype.analyzeState =
                                    function (a, d, h) { if (!a.traverseFromRoot) throw "This lexical model does not provide adequate data for correction algorithms and context reuse"; var m = b.tokenize(a.wordbreaker || c.default, d); if (0 < m.left.length) for (var e = this.count - 1; 0 <= e; e--) { var g = l.attemptMatchContext(m.left, this.item(e), h); if (g) return g.taggedContext = d, g != this.item(e) && this.enqueue(g), g } a = l.modelContextState(m.left, h, a); a.taggedContext = d; this.enqueue(a); return a }; return l
                            }(function () {
                                function a(b) {
                                    void 0 === b && (b = a.DEFAULT_ARRAY_SIZE);
                                    this.currentTail = this.currentHead = 0; this.circle = Array(b)
                                } Object.defineProperty(a.prototype, "count", { get: function () { var a = this.currentHead - this.currentTail; 0 > a && (a += this.circle.length); return a }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "maxCount", { get: function () { return this.circle.length }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "oldest", { get: function () { if (0 != this.count) return this.item(0) }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype,
                                    "newest", { get: function () { if (0 != this.count) return this.item(this.count - 1) }, enumerable: !1, configurable: !0 }); a.prototype.enqueue = function (a) { var b = null, c = (this.currentHead + 1) % this.maxCount; c == this.currentTail && (b = this.circle[this.currentTail], this.currentTail = (this.currentTail + 1) % this.maxCount); this.circle[this.currentHead] = a; this.currentHead = c; return b }; a.prototype.dequeue = function () {
                                        if (this.currentTail == this.currentHead) return null; var a = this.circle[this.currentTail]; this.currentTail = (this.currentTail +
                                            1) % this.maxCount; return a
                                    }; a.prototype.popNewest = function () { if (this.currentTail == this.currentHead) return null; var a = this.circle[this.currentHead]; this.currentHead = (this.currentHead - 1 + this.maxCount) % this.maxCount; return a }; a.prototype.item = function (a) { if (a >= this.count) throw "Invalid array index"; return this.circle[(this.currentTail + a) % this.maxCount] }; a.DEFAULT_ARRAY_SIZE = 5; return a
                            }()); a.ContextTracker = l
                        })(m || (m = {})); var w = this && this.__assign || function () {
                            w = Object.assign || function (a) {
                                for (var b, c = 1, d =
                                    arguments.length; c < d; c++) { b = arguments[c]; for (var h in b) Object.prototype.hasOwnProperty.call(b, h) && (a[h] = b[h]) } return a
                            }; return w.apply(this, arguments)
                        }, y = function () {
                            function a(b, c) { this.SUGGESTION_ID_SEED = 0; this.testMode = !1; this.lexicalModel = b; b.traverseFromRoot && (this.contextTracker = new m.ContextTracker); this.punctuation = a.determinePunctuationFromModel(b); this.testMode = !!c } a.prototype.predictFromCorrections = function (a, b) {
                                var c, d = [], l = function (a) {
                                    var c = m.lexicalModel.predict(a.sample, b).map(function (b) {
                                        var c =
                                            a.sample, d = a.p; void 0 !== c.id && (b.sample.transformId = c.id); return { sample: b.sample, p: b.p * d }
                                    }, m); d = d.concat(c)
                                }, m = this; try { for (var e = h(a), g = e.next(); !g.done; g = e.next())l(g.value) } catch (H) { var f = { error: H } } finally { try { g && !g.done && (c = e.return) && c.call(e) } finally { if (f) throw f.error; } } return d
                            }; a.prototype.predict = function (c, d) {
                                var l, e, g = [], f = this.lexicalModel, q = this.punctuation; c instanceof Array ? 0 == c.length && c.push({ sample: { insert: "", deleteLeft: 0 }, p: 1 }) : c = [{ sample: c, p: 1 }]; var k = c.sort(function (a, b) {
                                    return b.p -
                                        a.p
                                })[0].sample, n = r.isWhitespace(k), y = r.isBackspace(k), p = b.applyTransform(k, d), v = this.wordbreak(p), u = null, t = [], J = null; if (this.contextTracker) {
                                    var D = this.contextTracker.analyzeState(this.lexicalModel, d, null); J = this.contextTracker.analyzeState(this.lexicalModel, p, r.isEmpty(k) ? null : c); c = J.searchSpace[0]; var U = 0, z = J.tokens; D = z.length - D.tokens.length; if (0 == z.length || 0 < D) { if (U = 0, r.isWhitespace(k)) { var E = k; d = p; D = J } } else U = 0 > D ? this.wordbreak(p).kmwLength() + k.deleteLeft : this.wordbreak(d).kmwLength(); var S =
                                        1 >= z[z.length - 1].transformDistributions.length; D = void 0; z = this.testMode ? 0 : m.SearchSpace.DEFAULT_ALLOTTED_CORRECTION_TIME_INTERVAL; try {
                                            for (var I = h(c.getBestMatches(z)), K = I.next(); !K.done; K = I.next()) {
                                                var ba = K.value; L = ba.map(function (b) { var c = { insert: b.matchString, deleteLeft: U, id: k.id }; b = b.totalCost; S && (b *= a.SINGLE_CHAR_KEY_PROB_EXPONENT); return { sample: c, p: Math.exp(-b) } }, this); var ca = this.predictFromCorrections(L, d); 0 < ca.length && void 0 === D && (D = -Math.log(L[0].p)); t = t.concat(ca); var V = ba[0].totalCost;
                                                if (V >= D + 8) break; else if (t.length >= a.MAX_SUGGESTIONS) if (V >= D + 4) break; else if (t.sort(function (a, b) { return b.p - a.p }), t[a.MAX_SUGGESTIONS - 1].p > Math.exp(-V)) break
                                            }
                                        } catch (Y) { var M = { error: Y } } finally { try { K && !K.done && (l = I.return) && l.call(I) } finally { if (M) throw M.error; } }
                                } else { var L = void 0; n ? (L = [{ sample: k, p: 1 }], E = k) : L = c.map(function (a) { var b = a.sample; return r.isWhitespace(b) && !n || r.isBackspace(b) && !y ? null : a }); L = L.filter(function (a) { return !!a }); t = this.predictFromCorrections(L, d) } M = {}; l = null; f.languageUsesCasing &&
                                    (l = this.detectCurrentCasing(p)); f = this.wordbreak(d); try {
                                        for (var R = h(t), P = R.next(); !P.done; P = R.next()) {
                                            var F = P.value, Q = F.sample.displayAs; t = Q == v; this.lexicalModel.languageUsesCasing && (t = t || Q == this.lexicalModel.applyCasing("lower", v)); if (t) if (u) u.p && F.p && (u.p += F.p); else { var W = F.sample.transform, X = { insert: v, deleteLeft: W.deleteLeft, deleteRight: W.deleteRight, id: W.id }, ea = b.transformToSuggestion(X, F.p); u = this.toAnnotatedSuggestion(ea, "keep", b.QuoteBehavior.noQuotes); u.matchesModel = !0; u.transformId = F.sample.transformId } else {
                                                l &&
                                                "lower" != l && (this.applySuggestionCasing(F.sample, f, l), Q = F.sample.displayAs); var Z = M[Q]; Z ? Z.p += F.p : M[Q] = F
                                            }
                                        }
                                    } catch (Y) { var da = { error: Y } } finally { try { P && !P.done && (e = R.return) && e.call(R) } finally { if (da) throw da.error; } } u || "" == v || (X = w({}, k), u = b.transformToSuggestion(X, 1), u.displayAs = v, u = this.toAnnotatedSuggestion(u, "keep"), u.matchesModel = !1); for (var fa in M) g.push(M[fa]); g = g.sort(function (a, b) { return b.p - a.p }); g = g.splice(0, a.MAX_SUGGESTIONS).map(function (a) {
                                        a.sample.p && (a.sample["lexical-p"] = a.sample.p, a.sample["correction-p"] =
                                            a.p / a.sample.p, a.sample.p = a.p); return a.sample
                                    }); u && (g = [u].concat(g)); var aa = this; g.forEach(function (a) { if (d.right) { var c = aa.tokenize(d); c && c.caretSplitsToken && (a.transform.insert += q.insertAfterWord) } else a.transform.insert += q.insertAfterWord; E && (c = b.buildMergedTransform(E, a.transform), c.id = a.transformId, a.transform = c); a.id = aa.SUGGESTION_ID_SEED; aa.SUGGESTION_ID_SEED++ }); J && (J.tail.replacements = g.map(function (a) { return { suggestion: a, tokenWidth: 1 } })); return g
                            }; a.prototype.applySuggestionCasing = function (a,
                                b, c) { var d = b.kmwLength() - a.transform.deleteLeft; 0 < d && (a.transform.deleteLeft += d, a.transform.insert = b.kmwSubstr(0, d) + a.transform.insert); a.transform.insert = this.lexicalModel.applyCasing(c, a.transform.insert); a.displayAs = this.lexicalModel.applyCasing(c, a.displayAs) }; a.prototype.toAnnotatedSuggestion = function (a, c, d) {
                                    void 0 === d && (d = b.QuoteBehavior.default); var h = b.QuoteBehavior, l = h.noQuotes; if ("keep" == c || "revert" == c) l = h.useQuotes; return {
                                        transform: a.transform, transformId: a.transformId, displayAs: h.apply(d,
                                            a.displayAs, this.punctuation, l), tag: c, p: a.p
                                    }
                                }; a.determinePunctuationFromModel = function (a) { var b = v; if (!a.punctuation) return b; a = a.punctuation; var c = a.insertAfterWord; "" === c || c || (c = b.insertAfterWord); var d = a.quotesForKeepSuggestion; d || (d = b.quotesForKeepSuggestion); return { insertAfterWord: c, quotesForKeepSuggestion: d, isRTL: a.isRTL } }; a.prototype.acceptSuggestion = function (a, c, d) {
                                    var h = a.transform, l = c.left.kmwSubstr(-h.deleteLeft, h.deleteLeft); h = h.insert.kmwLength(); l = { insert: l, deleteLeft: h }; h = c; d && (l = b.buildMergedTransform(l,
                                        d), h = b.applyTransform(d, h)); var m = this.tokenize(h); m ? (d = 0 < m.left.length ? m.left[m.left.length - 1] : "", d += m.caretSplitsToken ? m.right[0] : "") : d = this.wordbreak(h); l = b.transformToSuggestion(l); l.displayAs = d; d = this.toAnnotatedSuggestion(l, "revert"); null != a.transformId && (d.transformId = -a.transformId); null != a.id ? d.id = -a.id : (d.id = -this.SUGGESTION_ID_SEED, this.SUGGESTION_ID_SEED++); this.contextTracker && ((l = this.contextTracker.newest) || (l = this.contextTracker.analyzeState(this.lexicalModel, c)), l.tail.activeReplacementId =
                                            a.id, a = b.applyTransform(a.transform, c), this.contextTracker.analyzeState(this.lexicalModel, a)); return d
                                }; a.prototype.applyReversion = function (a, c) {
                                    var d = this, h = function () { var h = b.applyTransform(a.transform, c); h = d.predict({ insert: "", deleteLeft: 0 }, h); h.forEach(function (b) { b.transformId = -a.transformId }); return h }; if (!this.contextTracker) return h(); for (var l = !1, m = this.contextTracker.count - 1; 0 <= m; m--)if (this.contextTracker.item(m).tail.activeReplacementId == -a.id) { l = !0; break } if (!l) return h(); for (; this.contextTracker.newest.tail.activeReplacementId !=
                                        -a.id;)this.contextTracker.popNewest(); this.contextTracker.newest.tail.revert(); h = this.contextTracker.newest.tail.replacements.map(function (a) { return a.suggestion }); h.forEach(function (b) { b.transformId = -a.transformId }); return h
                                }; a.prototype.wordbreak = function (a) { var d = this.lexicalModel; return d.wordbreaker || !d.wordbreak ? b.wordbreak(d.wordbreaker || c.default, a) : d.wordbreak(a) }; a.prototype.tokenize = function (a) { var c = this.lexicalModel; return c.wordbreaker ? b.tokenize(c.wordbreaker, a) : null }; a.prototype.resetContext =
                                    function (a) { this.contextTracker && (a = b.tokenize(this.lexicalModel.wordbreaker || c.default, a), a = m.ContextTracker.modelContextState(a.left, null, this.lexicalModel), this.contextTracker.enqueue(a)) }; a.prototype.detectCurrentCasing = function (a) {
                                        var b, c = this.lexicalModel, d = this.wordbreak(a); if (!c.languageUsesCasing) throw "Invalid attempt to detect casing: languageUsesCasing is set to false"; if (!c.applyCasing) throw "Invalid LMLayer state:  languageUsesCasing is set to true, but no applyCasing function exists";
                                        return "upper" == a.casingForm || "initial" == a.casingForm ? a.casingForm : c.applyCasing("lower", d) == d ? "lower" : c.applyCasing("upper", d) == d ? 1 < d.kmwLength() ? "upper" : "initial" : c.applyCasing("initial", d) == d ? "initial" : null !== (b = a.casingForm) && void 0 !== b ? b : null
                                    }; a.MAX_SUGGESTIONS = 12; a.SINGLE_CHAR_KEY_PROB_EXPONENT = 16; return a
                        }(), v = { quotesForKeepSuggestion: { open: "\u201c", close: "\u201d" }, insertAfterWord: " " }, r = function () {
                            function a() { } a.isWhitespace = function (a) { return null != a.insert.match(/^[\u0009\u000A\u000D\u0020\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u202f\u205f\u3000]+$/i) };
                            a.isBackspace = function (a) { return "" == a.insert && 0 < a.deleteLeft && !a.deleteRight }; a.isEmpty = function (a) { return "" == a.insert && 0 == a.deleteLeft && !a.deleteRight }; return a
                        }(); e = function () {
                            function a(a) { void 0 === a && (a = { importScripts: null, postMessage: null }); this._testMode = !1; this._postMessage = a.postMessage || postMessage; this._importScripts = a.importScripts || importScripts; this.setupConfigState() } a.prototype.error = function (a, b) { this.cast("error", { log: a, error: b && b.stack ? b.stack : void 0 }) }; a.prototype.onMessage = function (a) {
                                if (!a.data.message) throw Error("Missing required 'message' property: ".concat(a.data));
                                a = a.data; if ("load" == a.message) { var b = !1; this._currentModelSource && a.source.type == this._currentModelSource.type && ("file" == a.source.type && a.source.file == this._currentModelSource.file ? b = !0 : "raw" == a.source.type && a.source.code == this._currentModelSource.code && (b = !0)); if (b) { "undefined" !== typeof console && console.warn("Duplicate model load message detected - squashing!"); return } this._currentModelSource = a.source } else "unload" == a.message && (this._currentModelSource = null); this.state.handleMessage(a)
                            }; a.prototype.cast =
                                function (a, b) { var c = this._postMessage; c(w({ message: a }, b)) }; a.prototype.loadModel = function (a) {
                                    try {
                                        var c = a.configure(this._platformCapabilities); c.leftContextCodePoints || (c.leftContextCodePoints = c.leftContextCodeUnits); c.rightContextCodePoints || (c.rightContextCodePoints = c.rightContextCodeUnits); c.leftContextCodePoints || (c.leftContextCodePoints = this._platformCapabilities.maxLeftContextCodePoints); c.rightContextCodePoints || (c.rightContextCodePoints = this._platformCapabilities.maxRightContextCodePoints ||
                                            0); a.languageUsesCasing && !a.applyCasing && (a.applyCasing = b.defaultApplyCasing); var d = this.transitionToReadyState(a); void 0 === c.wordbreaksAfterSuggestions && (c.wordbreaksAfterSuggestions = "" != d.punctuation.insertAfterWord); this.cast("ready", { configuration: c })
                                    } catch (A) { this.error("loadModel failed!", A) }
                                }; a.prototype.loadModelFile = function (a) { try { this._importScripts(a) } catch (u) { this.error("Error occurred when attempting to load dictionary", u) } }; a.prototype.unloadModel = function () { this.transitionToLoadingState() };
                            a.prototype.setupConfigState = function () { var a = this; this.state = { name: "unconfigured", handleMessage: function (b) { if ("config" !== b.message) throw Error("invalid message; expected 'config' but got ".concat(b.message)); a._platformCapabilities = b.capabilities; a._testMode = !!b.testMode; a.transitionToLoadingState() } } }; a.prototype.transitionToLoadingState = function () {
                                var a = this; this.state = {
                                    name: "modelless", handleMessage: function (d) {
                                        if ("load" !== d.message) throw Error("invalid message; expected 'load' but got ".concat(d.message));
                                        if ("file" == d.source.type) a.loadModelFile(d.source.file); else { var h = d.source.code; (function (a, b, c, d) { eval(h) })(a, b, m, c) }
                                    }
                                }
                            }; a.prototype.transitionToReadyState = function (a) {
                                var d = this, h = new y(a, this._testMode); this.state = {
                                    name: "ready", handleMessage: function (l) {
                                        switch (l.message) {
                                            case "predict": var m = l.context; m = h.predict(l.transform, m); d.cast("suggestions", { token: l.token, suggestions: m }); break; case "wordbreak": m = b.wordbreak(a.wordbreaker || c.default, l.context); d.cast("currentword", { token: l.token, word: m });
                                                break; case "unload": d.unloadModel(); break; case "accept": var e = l.suggestion; m = l.context; e = h.acceptSuggestion(e, m, l.postTransform); d.cast("postaccept", { token: l.token, reversion: e }); break; case "revert": e = l.reversion; m = l.context; m = h.applyReversion(e, m); d.cast("postrevert", { token: l.token, suggestions: m }); break; case "reset-context": m = l.context; h.resetContext(m); break; default: throw Error("invalid message; expected one of {'predict', 'wordbreak', 'accept', 'revert', 'reset-context', 'unload'} but got ".concat(l.message));
                                        }
                                    }, compositor: h
                                }; return h
                            }; a.install = function (d) { var h = new a({ postMessage: d.postMessage, importScripts: d.importScripts.bind(d) }); d.onmessage = h.onMessage.bind(h); h.self = d; d.LMLayerWorker = h; d.models = b; d.correction = m; d.wordBreakers = c; return h }; return a
                        }(); "undefined" !== typeof module && "undefined" !== typeof module.exports ? (module.exports = e, module.exports.correction = m, module.exports.models = b, module.exports.wordBreakers = c, module.exports.ModelCompositor = y, module.exports.TransformUtils = r) : "undefined" !== typeof self &&
                            "postMessage" in self && "importScripts" in self ? e.install(self) : window.LMLayerWorker = e
}
(function (f) {
    (function (f) {
        (function (g) {
            (function (g) {
                var e = function () {
                    function b() { this._promises = new Map } Object.defineProperty(b.prototype, "length", { get: function () { return this._promises.size }, enumerable: !1, configurable: !0 }); b.prototype.make = function (a, b, d) { if (this._promises.has(a)) return d("Existing request with token ".concat(a)); this._promises.set(a, { reject: d, resolve: b }) }; b.prototype.keep = function (a, b) {
                        var c = this._promises.get(a); if (!c) throw Error("No promise associated with token: ".concat(a));
                        c = c.resolve; this._promises.delete(a); return c(b)
                    }; b.prototype.break = function (a, b) { var c = this._promises.get(a); if (!c) throw Error("No promise associated with token: ".concat(a)); this._promises.delete(a); c.reject(b) }; return b
                }(); g.PromiseStore = e
            })(g.prediction || (g.prediction = {}))
        })(f.text || (f.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (g) {
            (function (g) {
                var e = function () {
                    function b(a, b, d) { this._worker = b || g.DefaultWorker.constructInstance(); this._worker.onmessage = this.onMessage.bind(this); this._declareLMLayerReady = null; this._predictPromises = new g.PromiseStore; this._wordbreakPromises = new g.PromiseStore; this._acceptPromises = new g.PromiseStore; this._revertPromises = new g.PromiseStore; this._nextToken = Number.MIN_SAFE_INTEGER; this.sendConfig(a, !!d) } b.prototype.sendConfig = function (a, b) {
                        this._worker.postMessage({
                            message: "config",
                            capabilities: a, testMode: b
                        })
                    }; b.prototype.loadModel = function (a, b) { var c = this; void 0 === b && (b = "file"); return new Promise(function (d, l) { c._declareLMLayerReady = d; d = { type: b }; "file" == b ? d.file = a : d.code = a; c._worker.postMessage({ message: "load", source: d }) }) }; b.prototype.unloadModel = function () { this._worker.postMessage({ message: "unload" }) }; b.prototype.predict = function (a, b) {
                        var c = this, h = this._nextToken++; return new Promise(function (d, m) {
                            c._predictPromises.make(h, d, m); c._worker.postMessage({
                                message: "predict", token: h,
                                transform: a, context: b
                            })
                        })
                    }; b.prototype.wordbreak = function (a) { var b = this, d = this._nextToken++; return new Promise(function (c, l) { b._wordbreakPromises.make(d, c, l); b._worker.postMessage({ message: "wordbreak", token: d, context: a }) }) }; b.prototype.acceptSuggestion = function (a, b, d) { var c = this, l = this._nextToken++; return new Promise(function (h, e) { c._acceptPromises.make(l, h, e); c._worker.postMessage({ message: "accept", token: l, suggestion: a, context: b, postTransform: d }) }) }; b.prototype.revertSuggestion = function (a, b) {
                        var c =
                            this, h = this._nextToken++; return new Promise(function (d, m) { c._revertPromises.make(h, d, m); c._worker.postMessage({ message: "revert", token: h, reversion: a, context: b }) })
                    }; b.prototype.resetContext = function (a) { this._worker.postMessage({ message: "reset-context", context: a }) }; b.prototype.onMessage = function (a) {
                        var b = a.data; if ("error" === b.message) console.error(b.log), b.error && console.error(b.error); else if ("ready" === b.message) this._declareLMLayerReady(a.data.configuration); else if ("suggestions" === b.message) this._predictPromises.keep(b.token,
                            b.suggestions); else if ("currentword" === b.message) this._wordbreakPromises.keep(b.token, b.word); else if ("postaccept" === b.message) this._acceptPromises.keep(b.token, b.reversion); else if ("postrevert" === b.message) this._revertPromises.keep(b.token, b.suggestions); else throw Error("Message not implemented: ".concat(b.message));
                    }; b.prototype.shutdown = function () { this._worker.terminate() }; b.unwrap = function (a) { return a.toString().match(/function[^{]+{((?:.|\r|\n)+)}[^}]*$/)[1] }; return b
                }(); g.LMLayer = e
            })(g.prediction ||
                (g.prediction = {}))
        })(f.text || (f.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {})); (function () { var f = com.keyman.text.prediction; "undefined" !== typeof module && "undefined" !== typeof module.exports ? (module.exports = f.LMLayer, f.LMLayer.PromiseStore = f.PromiseStore) : window.LMLayer = f.LMLayer })();
(function (f) { (function (f) { (function (g) { (function (g) { var e = function () { function b() { } b.constructInstance = function () { return new Worker(this.asBlobURI(LMLayerWorkerCode)) }; b.asBlobURI = function (a) { a = g.LMLayer.unwrap(a); a = new Blob([a], { type: "text/javascript" }); return URL.createObjectURL(a) }; return b }(); g.DefaultWorker = e })(g.prediction || (g.prediction = {})) })(f.text || (f.text = {})) })(f.keyman || (f.keyman = {})) })(com || (com = {})); var has = Object.prototype.hasOwnProperty, prefix = "~"; function Events() { }
Object.create && (Events.prototype = Object.create(null), (new Events).__proto__ || (prefix = !1)); function EE(f, k, g) { this.fn = f; this.context = k; this.once = g || !1 } function addListener(f, k, g, n, e) { if ("function" !== typeof g) throw new TypeError("The listener must be a function"); g = new EE(g, n || f, e); k = prefix ? prefix + k : k; f._events[k] ? f._events[k].fn ? f._events[k] = [f._events[k], g] : f._events[k].push(g) : (f._events[k] = g, f._eventsCount++); return f }
function clearEvent(f, k) { 0 === --f._eventsCount ? f._events = new Events : delete f._events[k] } function EventEmitter() { this._events = new Events; this._eventsCount = 0 } EventEmitter.prototype.eventNames = function () { var f = [], k, g; if (0 === this._eventsCount) return f; for (g in k = this._events) has.call(k, g) && f.push(prefix ? g.slice(1) : g); return Object.getOwnPropertySymbols ? f.concat(Object.getOwnPropertySymbols(k)) : f };
EventEmitter.prototype.listeners = function (f) { f = this._events[prefix ? prefix + f : f]; if (!f) return []; if (f.fn) return [f.fn]; for (var k = 0, g = f.length, n = Array(g); k < g; k++)n[k] = f[k].fn; return n }; EventEmitter.prototype.listenerCount = function (f) { return (f = this._events[prefix ? prefix + f : f]) ? f.fn ? 1 : f.length : 0 };
EventEmitter.prototype.emit = function (f, k, g, n, e, b) {
    var a = prefix ? prefix + f : f; if (!this._events[a]) return !1; a = this._events[a]; var c = arguments.length, d; if (a.fn) {
        a.once && this.removeListener(f, a.fn, void 0, !0); switch (c) { case 1: return a.fn.call(a.context), !0; case 2: return a.fn.call(a.context, k), !0; case 3: return a.fn.call(a.context, k, g), !0; case 4: return a.fn.call(a.context, k, g, n), !0; case 5: return a.fn.call(a.context, k, g, n, e), !0; case 6: return a.fn.call(a.context, k, g, n, e, b), !0 }var h = 1; for (d = Array(c - 1); h < c; h++)d[h -
            1] = arguments[h]; a.fn.apply(a.context, d)
    } else { var l = a.length; for (h = 0; h < l; h++)switch (a[h].once && this.removeListener(f, a[h].fn, void 0, !0), c) { case 1: a[h].fn.call(a[h].context); break; case 2: a[h].fn.call(a[h].context, k); break; case 3: a[h].fn.call(a[h].context, k, g); break; case 4: a[h].fn.call(a[h].context, k, g, n); break; default: if (!d) { var m = 1; for (d = Array(c - 1); m < c; m++)d[m - 1] = arguments[m] } a[h].fn.apply(a[h].context, d) } } return !0
}; EventEmitter.prototype.on = function (f, k, g) { return addListener(this, f, k, g, !1) };
EventEmitter.prototype.once = function (f, k, g) { return addListener(this, f, k, g, !0) }; EventEmitter.prototype.removeListener = function (f, k, g, n) { f = prefix ? prefix + f : f; if (!this._events[f]) return this; if (!k) return clearEvent(this, f), this; var e = this._events[f]; if (e.fn) e.fn !== k || n && !e.once || g && e.context !== g || clearEvent(this, f); else { for (var b = 0, a = [], c = e.length; b < c; b++)(e[b].fn !== k || n && !e[b].once || g && e[b].context !== g) && a.push(e[b]); a.length ? this._events[f] = 1 === a.length ? a[0] : a : clearEvent(this, f) } return this };
EventEmitter.prototype.removeAllListeners = function (f) { f ? (f = prefix ? prefix + f : f, this._events[f] && clearEvent(this, f)) : (this._events = new Events, this._eventsCount = 0); return this }; EventEmitter.prototype.off = EventEmitter.prototype.removeListener; EventEmitter.prototype.addListener = EventEmitter.prototype.on; EventEmitter.prefixed = prefix; EventEmitter.EventEmitter = EventEmitter; "undefined" !== typeof module && (module.exports = EventEmitter);
(function (f) {
    (function (f) {
        (function (g) {
            var f = function () {
                function e(b, a, c) { this.left = b.getTextBeforeCaret(); this.startOfBuffer = this.left._kmwLength() <= a.leftContextCodePoints; this.startOfBuffer || (this.left = this.left._kmwSubstr(-a.leftContextCodePoints)); this.right = b.getTextAfterCaret(); this.endOfBuffer = this.right._kmwLength() <= a.rightContextCodePoints; this.endOfBuffer || (this.right = this.right._kmwSubstr(0, a.rightContextCodePoints)); this.casingForm = "shift" == c ? "initial" : "caps" == c ? "upper" : null } e.prototype.toMock =
                    function () { var b = this.left._kmwLength(); return new g.Mock(this.left + (this.right || ""), b) }; e.ENGINE_RULE_WINDOW = { leftContextCodePoints: 64, rightContextCodePoints: 32 }; return e
            }(); g.ContextWindow = f
        })(f.text || (f.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
var __extends = this && this.__extends || function () { var f = function (k, g) { f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (g, e) { g.__proto__ = e } || function (g, e) { for (var b in e) Object.prototype.hasOwnProperty.call(e, b) && (g[b] = e[b]) }; return f(k, g) }; return function (k, g) { function n() { this.constructor = k } if ("function" !== typeof g && null !== g) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null"); f(k, g); k.prototype = null === g ? Object.create(g) : (n.prototype = g.prototype, new n) } }();
(function (f) {
    (function (f) {
        (function (g) {
            (function (f) {
                var e = function () { return function (a, b) { this.suggestions = a; this.transcriptionID = b } }(); f.ReadySuggestions = e; var b = function (a) {
                    function b() { var b = null !== a && a.apply(this, arguments) || this; b.recentTranscriptions = []; b._mayPredict = !0; b._mayCorrect = !0; return b } __extends(b, a); b.prototype.init = function (a) { void 0 === a && (a = !1); a = { maxLeftContextCodePoints: 64, maxRightContextCodePoints: a ? 0 : 64 }; this.canEnable() && (this.lmEngine = new f.LMLayer(a)) }; Object.defineProperty(b.prototype,
                        "activeModel", { get: function () { return this.currentModel }, enumerable: !1, configurable: !0 }); b.prototype.unloadModel = function () { this.lmEngine.unloadModel(); delete this.currentModel; delete this.configuration; this.emit("statechange", "inactive") }; b.prototype.loadModel = function (a) {
                            if (!a) throw Error("Null reference not allowed."); var b = a.path ? "file" : "raw", c = "file" == b ? a.path : a.code, d = this; d.currentModel = a; this.mayPredict && d.emit("statechange", "active"); return this.lmEngine.loadModel(c, b).then(function (a) {
                                d.configuration =
                                a; d.emit("statechange", "configured")
                            }).catch(function (b) { console.error("Could not load model '" + a.id + "': " + (b instanceof Error ? b.message : String(b))); d.currentModel = null; d.emit("statechange", "inactive") })
                        }; b.prototype.invalidateContext = function (a, b) { this.emit("invalidatesuggestions", "context"); this.currentModel && this.configuration && this.isActive && a && (a = a.buildTranscriptionFrom(a, null, !1), this.predict_internal(a, !0, b)) }; b.prototype.wordbreak = function (a, b) {
                            if (!this.isActive) return null; a = new g.ContextWindow(g.Mock.from(a,
                                !1), this.configuration, b); return this.lmEngine.wordbreak(a)
                        }; b.prototype.predict = function (a, b) { if (!this.isActive || !this.currentModel || !this.configuration) return null; this.emit("invalidatesuggestions", "new"); return this.predict_internal(a, !1, b) }; b.prototype.applySuggestion = function (a, b, c) {
                            if (!b) throw "Accepting suggestions requires a destination OutputTarget instance."; var d = this.getPredictionState(a.transformId); if (d) {
                                var h = g.Mock.from(d.preInput, !1); h.apply(a.transform); h = h.buildTransformFrom(b);
                                b.apply(h); this.emit("suggestionapplied", b); g.Mock.from(d.preInput, !1).apply(d.transform); h = new g.ContextWindow(d.preInput, this.configuration, c()); a = this.lmEngine.acceptSuggestion(a, h, d.transform); var l = this; return a = a.then(function (a) { a = { transform: d.transform, transformId: -d.token, displayAs: a.displayAs, id: a.id, tag: a.tag }; l.predictFromTarget(b, c()); return a })
                            } console.warn("Could not apply the Suggestion!"); return null
                        }; b.prototype.applyReversion = function (a, b) {
                            if (!b) throw "Accepting suggestions requires a destination OutputTarget instance.";
                            var c = this.getPredictionState(-a.transformId); if (c) { var d = g.Mock.from(c.preInput, !1); d.apply(a.transform); var h = d.buildTransformFrom(b); b.apply(h); var f = this; return this.lmEngine.revertSuggestion(a, new g.ContextWindow(c.preInput, this.configuration, null)).then(function (a) { var b = new e(a, h.id); f.emit("suggestionsready", b); f.currentPromise = null; return a }) } console.warn("Could not apply the Suggestion!")
                        }; b.prototype.predictFromTarget = function (a, b) {
                            if (!a) return null; a = a.buildTranscriptionFrom(a, null, !1);
                            return this.predict(a, b)
                        }; b.prototype.predict_internal = function (a, b, c) { if (!a) return null; c = new g.ContextWindow(a.preInput, this.configuration, c); this.recordTranscription(a); b && this.lmEngine.resetContext(c); (b = a.alternates) && 0 != b.length || (b = [{ sample: a.transform, p: 1 }]); var d = a.transform, h = this.currentPromise = this.lmEngine.predict(b, c), l = this; return h.then(function (a) { if (h == l.currentPromise) { var b = new e(a, d.id); l.emit("suggestionsready", b); l.currentPromise = null } return a }) }; b.prototype.recordTranscription =
                            function (a) { this.recentTranscriptions.push(a); this.recentTranscriptions.length > b.TRANSCRIPTION_BUFFER && this.recentTranscriptions.splice(0, 1) }; b.prototype.getPredictionState = function (a) { var b = this.recentTranscriptions.filter(function (b) { return b.token == a }); return 0 == b.length ? null : b[0] }; b.prototype.shutdown = function () { this.lmEngine.shutdown() }; Object.defineProperty(b.prototype, "isActive", {
                                get: function () { return this.canEnable() ? (this.activeModel || !1) && this._mayPredict : this._mayPredict = !1 }, enumerable: !1,
                                configurable: !0
                            }); b.prototype.canEnable = function () { return !0 }; Object.defineProperty(b.prototype, "mayPredict", { get: function () { return this._mayPredict }, set: function (a) { if (this.canEnable()) { var b = this._mayPredict; this._mayPredict = a; b != a && this.activeModel && this.emit("statechange", a ? "active" : "inactive") } }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype, "mayCorrect", { get: function () { return this._mayCorrect }, set: function (a) { this._mayCorrect = a }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype,
                                "wordbreaksAfterSuggestions", { get: function () { return this.configuration.wordbreaksAfterSuggestions }, enumerable: !1, configurable: !0 }); b.prototype.tryAcceptSuggestion = function (a) { var b = { shouldSwallow: !1 }; this.emit("tryaccept", a, b); return b.shouldSwallow }; b.prototype.tryRevertSuggestion = function () { var a = { shouldSwallow: !1 }; this.emit("tryrevert", a); return a.shouldSwallow }; b.TRANSCRIPTION_BUFFER = 10; return b
                }(EventEmitter); f.LanguageProcessor = b
            })(g.prediction || (g.prediction = {}))
        })(f.text || (f.text = {}))
    })(f.keyman ||
        (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function () {
                function e(b, a) { if (!b) throw Error("device must be defined"); a || (a = e.DEFAULT_OPTIONS); this.contextDevice = b; this.kbdProcessor = new g.KeyboardProcessor(b, a); this.lngProcessor = new g.prediction.LanguageProcessor } Object.defineProperty(e.prototype, "languageProcessor", { get: function () { return this.lngProcessor }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "keyboardProcessor", { get: function () { return this.kbdProcessor }, enumerable: !1, configurable: !0 });
                Object.defineProperty(e.prototype, "keyboardInterface", { get: function () { return this.keyboardProcessor.keyboardInterface }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "activeKeyboard", { get: function () { return this.keyboardInterface.activeKeyboard }, set: function (b) { this.keyboardInterface.activeKeyboard = b; this.resetContext() }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "activeModel", { get: function () { return this.languageProcessor.activeModel }, enumerable: !1, configurable: !0 });
                e.prototype.processNewContextEvent = function (b) { var a = this.keyboardProcessor.processNewContextEvent(this.contextDevice, b); a && a.finalize(this.keyboardProcessor, b, !0); return a }; e.prototype.processKeyEvent = function (b, a) { var c = b.srcKeyboard && this.activeKeyboard != b.srcKeyboard, d = this.activeKeyboard; try { return c && (this.keyboardInterface.activeKeyboard = b.srcKeyboard), this._processKeyEvent(b, a) } finally { c && (this.keyboardInterface.activeKeyboard = d) } }; e.prototype._processKeyEvent = function (b, a) {
                    var c, d, h = b.isSynthetic;
                    if ((b.device.formFactor == k.utils.FormFactor.Desktop || !this.activeKeyboard || this.activeKeyboard.usesDesktopLayoutOnDevice(b.device)) && h && this.keyboardProcessor.selectLayer(b) || this.keyboardProcessor.doModifierPress(b, a, !h) && !h || this.languageProcessor.isActive && (("K_BKSP" == b.kName || b.Lcode == g.Codes.keyCodes.K_BKSP) && this.languageProcessor.tryRevertSuggestion() || ("K_SPACE" == b.kName || b.Lcode == g.Codes.keyCodes.K_SPACE) && this.languageProcessor.tryAcceptSuggestion("space"))) return new g.RuleBehavior; var l =
                        g.Mock.from(a, !0), m = this.keyboardProcessor.layerId; h = this.keyboardProcessor.processKeystroke(b, a); b.kNextLayer && this.keyboardProcessor.selectLayer(b); var e = g.Codes.isKnownOSKModifierKey(b.kName); (null === (d = null === (c = null === h || void 0 === h ? void 0 : h.transcription) || void 0 === c ? void 0 : c.transform) || void 0 === d ? 0 : d.isNoOp()) && b.kNextLayer && (e = !0); (c = null != h) ? (d = e ? null : this.buildAlternates(h, b, l), h.finalize(this.keyboardProcessor, a, !1), d && 0 < d.length && (h.transcription.alternates = d)) : (h = new g.RuleBehavior, h.transcription =
                            a.buildTranscriptionFrom(a, null, !1), h.triggersDefaultCommand = !0); b = h.setStore[g.KeyboardInterface.TSS_LAYER] || b.kNextLayer; this.keyboardProcessor.newLayerStore.set(b ? this.keyboardProcessor.layerId : ""); this.keyboardProcessor.oldLayerStore.set(b ? m : ""); (b = this.keyboardProcessor.processPostKeystroke(this.contextDevice, a)) && b.finalize(this.keyboardProcessor, a, !0); h.predictionPromise = this.languageProcessor.predict(h.transcription, this.keyboardProcessor.layerId); h.triggersDefaultCommand || a.doInputEvent();
                    return c ? h : null
                }; e.prototype.buildAlternates = function (b, a, c) {
                    if (this.languageProcessor.isActive && !b.triggersDefaultCommand) {
                        var d = a.keyDistribution; c = (new g.ContextWindow(c, g.ContextWindow.ENGINE_RULE_WINDOW, this.keyboardProcessor.layerId)).toMock(); if (d && a.kbdLayer) {
                            var h = Number.MAX_VALUE, l = f.keyman.utils.getGlobalObject(), m = void 0; l.performance && l.performance.now && (m = function () { return l.performance.now() }, h = m() + 16); var e = Math.exp(-5); d.sort(function (a, b) { return b.p - a.p }); var k = this.activeKeyboard.layout(a.device.formFactor);
                            var n = []; for (var v = 0, r = 0; r < d.length; r++) { var t = d[r]; if (t.p < e) { v += t.p; break } else if (m && m() >= h) break; var p = g.Mock.from(c, !1), u = k.getLayer(a.kbdLayer).getKey(t.keyId); u ? (u = u.constructKeyEvent(this.keyboardProcessor, a.device), (p = this.keyboardProcessor.processKeystroke(u, p)) && !p.beep && 0 < t.p && (p = p.transcription.transform, p.id = b.transcription.token, n.push({ sample: p, p: t.p }), v += t.p)) : console.warn("Potential fat-finger key could not be found in layer!") } n.forEach(function (a) { a.p /= v })
                        }
                    } return n
                }; e.prototype.resetContext =
                    function (b) { this.keyboardProcessor.resetContext(); this.languageProcessor.invalidateContext(b, this.keyboardProcessor.layerId); b && this.processNewContextEvent(b) }; e.DEFAULT_OPTIONS = { baseLayout: "us" }; return e
            }(); g.InputProcessor = n
        })(k.text || (k.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {})); (function () { var f = com.keyman.text; "undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports = f.InputProcessor, f.InputProcessor.com = com) })();
(function (f) {
    (function (f) {
        (function (g) {
            var f = function () { function b(a, c) { this.p = a; this.d = c; this.o = b.ordinalSeed++ } b.prototype.match = function (a, b) { return this.p == a && this.d == b }; b.prototype.set = function () { this.matched = 1 }; b.prototype.reset = function () { this.matched = 0 }; b.prototype.before = function (a) { return this.o < a.o }; b.prototype.clone = function () { var a = new b(this.p, this.d); a.o = this.o; return a }; b.ordinalSeed = 0; b.sortFunc = function (a, b) { return a.p != b.p ? b.p - a.p : b.o - a.o }; return b }(); g.Deadkey = f; var e = function () {
                function b() {
                    this.dks =
                    []
                } b.prototype.toSortedArray = function () { this.dks = this.dks.sort(f.sortFunc); return [].concat(this.dks) }; b.prototype.clone = function () { var a = new b, c = this.toSortedArray(); a.dks = []; c.forEach(function (b) { a.dks.push(b.clone()) }); return a }; b.prototype.isMatch = function (a, b, d) { if (0 == this.dks.length) return !1; b = a - b; for (a = 0; a < this.dks.length; a++)if (this.dks[a].match(b, d) && !this.dks[a].matched) return this.dks[a].set(), !0; this.resetMatched(); return !1 }; b.prototype.add = function (a) { this.dks = this.dks.concat(a) }; b.prototype.remove =
                    function (a) { a = this.dks.indexOf(a); this.dks.splice(a, 1) }; b.prototype.clear = function () { this.dks = [] }; b.prototype.resetMatched = function () { for (var a = 0, b = this.dks; a < b.length; a++)b[a].reset() }; b.prototype.deleteMatched = function () { for (var a = 0; a < this.dks.length; a++)this.dks[a].matched && this.dks.splice(a--, 1) }; b.prototype.adjustPositions = function (a, b) { if (0 != b) for (var c = 0, h = this.dks; c < h.length; c++) { var l = h[c]; l.p > a && (l.p += b) } }; b.prototype.count = function () { return this.dks.length }; return b
            }(); g.DeadkeyTracker =
                e
        })(f.text || (f.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {})); (function (f) { (function (f) { (function (g) { var f = function () { function e() { this.isSynthetic = !0 } e.constructNullKeyEvent = function (b) { var a = new e; a.Lcode = 0; a.kName = ""; a.device = b; return a }; return e }(); g.KeyEvent = f })(f.text || (f.text = {})) })(f.keyman || (f.keyman = {})) })(com || (com = {}));
__extends = this && this.__extends || function () { var f = function (k, g) { f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (g, e) { g.__proto__ = e } || function (g, e) { for (var b in e) Object.prototype.hasOwnProperty.call(e, b) && (g[b] = e[b]) }; return f(k, g) }; return function (k, g) { function n() { this.constructor = k } if ("function" !== typeof g && null !== g) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null"); f(k, g); k.prototype = null === g ? Object.create(g) : (n.prototype = g.prototype, new n) } }();
(function (f) {
    (function (f) {
        var g; (function (f) {
            var e = function () { function a(a, b, c) { this.insert = a; this.deleteLeft = b; this.deleteRight = c || 0 } a.prototype.isNoOp = function () { return "" === this.insert && 0 === this.deleteLeft && 0 === this.deleteRight }; a.nil = new a("", 0, 0); return a }(); f.TextTransform = e; var b = function () {
                function a(b, c, d, e) { var h = this.token = a.tokenSeed++; this.keystroke = b; this.transform = c; this.alternates = e; this.preInput = d; this.transform.id = this.token; e && e.forEach(function (a) { a.sample.id = h }) } a.tokenSeed = 0;
                return a
            }(); f.Transcription = b; var a = function () {
                function a() { this._dks = new g.DeadkeyTracker } Object.defineProperty(a.prototype, "isSynthetic", { get: function () { return !0 }, enumerable: !1, configurable: !0 }); a.prototype.resetContext = function () { this.deadkeys().clear() }; a.prototype.deadkeys = function () { return this._dks }; a.prototype.hasDeadkeyMatch = function (a, b) { return this.deadkeys().isMatch(this.getDeadkeyCaret(), a, b) }; a.prototype.insertDeadkeyBeforeCaret = function (a) {
                    a = new f.Deadkey(this.getDeadkeyCaret(), a);
                    this.deadkeys().add(a)
                }; a.prototype.adjustDeadkeys = function (a) { this.deadkeys().adjustPositions(this.getDeadkeyCaret(), a) }; a.prototype.setDeadkeys = function (a) { this._dks = a.clone() }; a.prototype.buildTransformFrom = function (a) {
                    var b = this.getText(), c = a.getText(), d = a.getDeadkeyCaret(); a = this.getDeadkeyCaret(); for (var h = b._kmwCodePointToCodeUnit(d < a ? d : a), g = 0, f = h; g < f;) { var k = Math.floor((f + g + 1) / 2), n = c.substr(g, k - g), p = b.substr(g, k - g); n == p ? g = k : f = k - 1 } 0 < f && f < h && (h = c.charCodeAt(f - 1), g = c.charCodeAt(f), k = b.charCodeAt(f),
                        55296 <= h && 56319 >= h && (56320 <= g && 57343 >= g || 56320 <= k && 57343 >= k) && --f); h = c._kmwCodeUnitToCodePoint(f); f = d - h; h = b._kmwSubstr(h, a - h); g = b._kmwLength() - a; c = c._kmwLength() - d - g; 0 > c && (h += b._kmwSubstr(a, -c), c = 0); return new e(h, f, c)
                }; a.prototype.buildTranscriptionFrom = function (a, d, m, e) { var h = this.buildTransformFrom(a); return new b(d, h, c.from(a, m), e) }; a.prototype.restoreTo = function (a) { this.setTextBeforeCaret(a.getTextBeforeCaret()); this.setTextAfterCaret(a.getTextAfterCaret()); this._dks = a._dks.clone() }; a.prototype.apply =
                    function (a) { a.deleteRight && this.setTextAfterCaret(this.getTextAfterCaret()._kmwSubstr(a.deleteRight)); a.deleteLeft && this.deleteCharsBeforeCaret(a.deleteLeft); a.insert && this.insertTextBeforeCaret(a.insert); this._dks.clear() }; a.prototype.setTextBeforeCaret = function (a) { this.deleteCharsBeforeCaret(this.getTextBeforeCaret()._kmwLength()); this.insertTextBeforeCaret(a) }; a.prototype.saveProperties = function () { }; a.prototype.restoreProperties = function () { }; return a
            }(); f.OutputTarget = a; var c = function (a) {
                function b(b,
                    c) { var d = a.call(this) || this; d.text = b ? b : ""; b = d.text._kmwLength(); d.caretIndex = "number" == typeof c ? c : b; return d } __extends(b, a); b.from = function (a, c) { if (a instanceof b) c = new b(a.text, a.caretIndex); else if (c) { c = a.getText(); var d = a.getTextAfterCaret(); d = c._kmwLength() - d._kmwLength(); c = new b(c, d) } else c = a.getTextBeforeCaret(), d = c._kmwLength(), c = new b(c + a.getTextAfterCaret(), d); c.setDeadkeys(a.deadkeys()); return c }; b.prototype.clearSelection = function () { }; b.prototype.invalidateSelection = function () { }; b.prototype.isSelectionEmpty =
                        function () { return !0 }; b.prototype.hasSelection = function () { return !0 }; b.prototype.getDeadkeyCaret = function () { return this.caretIndex }; b.prototype.setDeadkeyCaret = function (a) { if (0 > a || a > this.text._kmwLength()) throw Error("Provided caret index is out of range."); this.caretIndex = a }; b.prototype.getTextBeforeCaret = function () { return this.text.kmwSubstr(0, this.caretIndex) }; b.prototype.getTextAfterCaret = function () { return this.text.kmwSubstr(this.caretIndex) }; b.prototype.getText = function () { return this.text }; b.prototype.deleteCharsBeforeCaret =
                            function (a) { 0 <= a && (a > this.caretIndex && (a = this.caretIndex), this.adjustDeadkeys(-a), this.text = this.text.kmwSubstr(0, this.caretIndex - a) + this.getTextAfterCaret(), this.caretIndex -= a) }; b.prototype.insertTextBeforeCaret = function (a) { this.adjustDeadkeys(a._kmwLength()); this.text = this.getTextBeforeCaret() + a + this.getTextAfterCaret(); this.caretIndex += a.kmwLength() }; b.prototype.handleNewlineAtCaret = function () { this.insertTextBeforeCaret("\n") }; b.prototype.setTextAfterCaret = function (a) {
                                this.text = this.getTextBeforeCaret() +
                                    a
                            }; b.prototype.doInputEvent = function () { }; return b
            }(a); f.Mock = c
        })(g = f.text || (f.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            g.Codes = {
                modifierCodes: { LCTRL: 1, RCTRL: 2, LALT: 4, RALT: 8, SHIFT: 16, CTRL: 32, ALT: 64, META: 128, CAPS: 256, NO_CAPS: 512, NUM_LOCK: 1024, NO_NUM_LOCK: 2048, SCROLL_LOCK: 4096, NO_SCROLL_LOCK: 8192, VIRTUAL_KEY: 16384, VIRTUAL_CHAR_KEY: 32768 }, modifierBitmasks: { ALL: 127, ALT_GR_SIM: 5, CHIRAL: 31, IS_CHIRAL: 15, NON_CHIRAL: 112 }, stateBitmasks: { ALL: 16128, CAPS: 768, NUM_LOCK: 3072, SCROLL_LOCK: 12288 }, keyCodes: {
                    K_BKSP: 8, K_TAB: 9, K_ENTER: 13, K_SHIFT: 16, K_CONTROL: 17, K_ALT: 18, K_PAUSE: 19, K_CAPS: 20, K_ESC: 27,
                    K_SPACE: 32, K_PGUP: 33, K_PGDN: 34, K_END: 35, K_HOME: 36, K_LEFT: 37, K_UP: 38, K_RIGHT: 39, K_DOWN: 40, K_SEL: 41, K_PRINT: 42, K_EXEC: 43, K_INS: 45, K_DEL: 46, K_HELP: 47, K_0: 48, K_1: 49, K_2: 50, K_3: 51, K_4: 52, K_5: 53, K_6: 54, K_7: 55, K_8: 56, K_9: 57, K_A: 65, K_B: 66, K_C: 67, K_D: 68, K_E: 69, K_F: 70, K_G: 71, K_H: 72, K_I: 73, K_J: 74, K_K: 75, K_L: 76, K_M: 77, K_N: 78, K_O: 79, K_P: 80, K_Q: 81, K_R: 82, K_S: 83, K_T: 84, K_U: 85, K_V: 86, K_W: 87, K_X: 88, K_Y: 89, K_Z: 90, K_NP0: 96, K_NP1: 97, K_NP2: 98, K_NP3: 99, K_NP4: 100, K_NP5: 101, K_NP6: 102, K_NP7: 103, K_NP8: 104, K_NP9: 105, K_NPSTAR: 106,
                    K_NPPLUS: 107, K_SEPARATOR: 108, K_NPMINUS: 109, K_NPDOT: 110, K_NPSLASH: 111, K_F1: 112, K_F2: 113, K_F3: 114, K_F4: 115, K_F5: 116, K_F6: 117, K_F7: 118, K_F8: 119, K_F9: 120, K_F10: 121, K_F11: 122, K_F12: 123, K_NUMLOCK: 144, K_SCROLL: 145, K_LSHIFT: 160, K_RSHIFT: 161, K_LCONTROL: 162, K_RCONTROL: 163, K_LALT: 164, K_RALT: 165, K_COLON: 186, K_EQUAL: 187, K_COMMA: 188, K_HYPHEN: 189, K_PERIOD: 190, K_SLASH: 191, K_BKQUOTE: 192, K_LBRKT: 219, K_BKSLASH: 220, K_RBRKT: 221, K_QUOTE: 222, K_oE2: 226, K_OE2: 226, K_LOPT: 50001, K_ROPT: 50002, K_NUMERALS: 50003, K_SYMBOLS: 50004,
                    K_CURRENCIES: 50005, K_UPPER: 50006, K_LOWER: 50007, K_ALPHA: 50008, K_SHIFTED: 50009, K_ALTGR: 50010, K_TABBACK: 50011, K_TABFWD: 50012
                }, codesUS: [["0123456789", ";=,-./`", "[\\]'"], [")!@#$%^&*(", ":+<_>?~", '{|}"']], isKnownOSKModifierKey: function (k) { switch (k) { case "K_SHIFT": case "K_LOPT": case "K_ROPT": case "K_NUMLOCK": case "K_CAPS": return !0; default: if (5E4 <= g.Codes.keyCodes[k]) return !0; k = f.keyman.text.Codes[k]; if (5E4 < k && 50011 > k) return !0 }return !1 }
            }
        })(k.text || (k.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (g) {
            var f = function () {
                function e() { this.transcription = null; this.setStore = {}; this.saveStore = {}; this.variableStores = {}; this.triggersDefaultCommand = !1 } e.prototype.finalize = function (b, a, c) {
                    if (!this.transcription) throw "Cannot finalize a RuleBehavior with no transcription."; b.beepHandler && this.beep && b.beepHandler(a); for (var d in this.setStore) if (c = b.keyboardInterface.systemStores[d]) try { c.set(this.setStore[d]) } catch (h) { b.errorLogger && b.errorLogger("Rule attempted to perform illegal operation - 'platform' may not be changed.") } else b.warningLogger &&
                        b.warningLogger("Unknown store affected by keyboard rule: " + d); b.keyboardInterface.applyVariableStores(this.variableStores); if (b.keyboardInterface.variableStoreSerializer) for (d in this.saveStore) b.keyboardInterface.variableStoreSerializer.saveStore(b.activeKeyboard.id, d, this.saveStore[d]); this.triggersDefaultCommand && g.DefaultOutput.applyCommand(this.transcription.keystroke, a); b.warningLogger && this.warningLog ? b.warningLogger(this.warningLog) : b.errorLogger && this.errorLog && b.errorLogger(this.errorLog)
                };
                e.prototype.mergeInDefaults = function (b) {
                    var a = this.transcription.keystroke, c = b.transcription.keystroke; if (a.Lcode != c.Lcode || a.Lmodifiers != c.Lmodifiers) throw "RuleBehavior default-merge not supported unless keystrokes are identical!"; this.triggersDefaultCommand = this.triggersDefaultCommand || b.triggersDefaultCommand; c = g.Mock.from(this.transcription.preInput, !1); c.apply(this.transcription.transform); c.apply(b.transcription.transform); this.transcription = c.buildTranscriptionFrom(this.transcription.preInput,
                        a, !1, this.transcription.alternates)
                }; return e
            }(); g.RuleBehavior = f
        })(f.text || (f.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (g) {
            var k; (function (b) { b.Enter = "\n"; b.Backspace = "\b" })(k = g.EmulationKeystrokes || (g.EmulationKeystrokes = {})); var e = function () {
                function b() { } b.codeForEvent = function (a) { return g.Codes.keyCodes[a.kName] || a.Lcode }; b.forAny = function (a, c, d) { var h; if (null != (h = b.forSpecialEmulation(a, d))) return h; if (c || null == (h = b.forNumpadKeys(a, d))) { if (null != (h = b.forUnicodeKeynames(a, d)) || null != (h = b.forBaseKeys(a, d))) return h; b.codeForEvent(a); return null } return h }; b.isCommand = function (a) {
                    b.codeForEvent(a);
                    return !1
                }; b.applyCommand = function (a, b) { }; b.forSpecialEmulation = function (a, c) { switch (b.codeForEvent(a)) { case g.Codes.keyCodes.K_BKSP: return k.Backspace; case g.Codes.keyCodes.K_ENTER: return k.Enter; default: return null } }; b.forNumpadKeys = function (a, b) { return a.Lcode >= g.Codes.keyCodes.K_NP0 && a.Lcode <= g.Codes.keyCodes.K_NPSLASH ? String._kmwFromCharCode(106 > a.Lcode ? a.Lcode - 48 : a.Lcode - 64) : null }; b.forUnicodeKeynames = function (a, b) {
                    var c = a.kName; return f.keyboards.ActiveKey.unicodeIDToText(c, function (a) {
                        b.errorLog =
                        "Suppressing Unicode control code in " + c + ": " + a
                    })
                }; b.forBaseKeys = function (a, b) {
                    var c = a.Lcode; a = a.Lmodifiers; if (a == g.Codes.modifierCodes.SHIFT) a = 1; else if (0 != a) return b && (b.warningLog = "KMW only defines default key output for the 'default' and 'shift' layers!"), null; try {
                        if (c == g.Codes.keyCodes.K_SPACE) return " "; if (c >= g.Codes.keyCodes.K_0 && c <= g.Codes.keyCodes.K_9) return g.Codes.codesUS[a][0][c - g.Codes.keyCodes.K_0]; if (c >= g.Codes.keyCodes.K_A && c <= g.Codes.keyCodes.K_Z) return String.fromCharCode(c + (a ? 0 :
                            32)); if (c >= g.Codes.keyCodes.K_COLON && c <= g.Codes.keyCodes.K_BKQUOTE) return g.Codes.codesUS[a][1][c - g.Codes.keyCodes.K_COLON]; if (c >= g.Codes.keyCodes.K_LBRKT && c <= g.Codes.keyCodes.K_QUOTE) return g.Codes.codesUS[a][2][c - g.Codes.keyCodes.K_LBRKT]
                    } catch (h) { b && (b.errorLog = "Error detected with default mapping for key:  code = " + c + ", shift state = " + (1 == a ? "shift" : "default")) } return null
                }; return b
            }(); g.DefaultOutput = e
        })(f.text || (f.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = f.keyman.text.Codes, e = function () {
                function b() { } b.buildDefaultLayout = function (a, c, d) {
                    var h = d; "object" != typeof b.dfltLayout[h] && (h = "desktop"); var l = n.modifierBitmasks.NON_CHIRAL, m = k.utils.Version.CURRENT; c && (l = c.modifierBitmask, m = c.compilerVersion); a || (a = this.DEFAULT_RAW_SPEC); h = k.utils.deepCopy(b.dfltLayout[h]); var e = h.layer, g = a.KLS, f = a.K102, v, r, t = 0 != (l & n.modifierBitmasks.IS_CHIRAL); a.F && (l = /^(?:(?:italic|bold) )* *[0-9.eE-]+(?:[a-z]+) "(.+)"$/.exec(a.F)) &&
                        (h.font = l[1]); (r = !("undefined" == typeof g || !g)) || (g = a.KLS = b.processLegacyDefinitions(a.BK)); a = Object.getOwnPropertyNames(g); var p = []; a.splice(a.indexOf("default"), 1); a = ["default"].concat(a); c && c.emulatesAltGr && (-1 == a.indexOf("leftctrl-leftalt") && -1 != a.indexOf("rightalt") && (a.push("leftctrl-leftalt"), g["leftctrl-leftalt"] = g.rightalt), -1 == a.indexOf("leftctrl-leftalt-shift") && -1 != a.indexOf("rightalt-shift") && (a.push("leftctrl-leftalt-shift"), g["leftctrl-leftalt-shift"] = g["rightalt-shift"])); h.displayUnderlying =
                            c ? !!c.scriptObject.KDU : !1; if ("desktop" == d) for (p = b.generateLayerIds(t), l = 0; l < p.length; l++)-1 != a.indexOf(p[l]) && p.splice(l--, 1); var u = a.concat(p); if (r && "desktop" != d) { c = null; r = e[0].row; for (l = 0; l < r.length; l++) { var x = r[l].key; for (var A = 0; A < x.length; A++)p = x[A], "K_SHIFT" == p.id && (c = p) } if (c) for (v in c.sk = [], g) "default" != v && "shift" != v && (l = b.modifierSpecials[v], c.sk.push({ id: "K_" + l, text: l, sp: "1", nextlayer: v })); else console.warn("Error in default layout - cannot find default Shift key!") } for (l = 0; l < u.length; l++)0 <
                                l && (e[l] = k.utils.deepCopy(e[0])), e[l].id = u[l], e[l].nextlayer = u[l], b.formatDefaultLayer(e[l], t, d, !!f); for (l = 0; l < e.length; l++) {
                                    t = e[l]; var G = A = u = c = null, B = g[t.id], N = "shift" == t.id ? 1 : 0, O = "default" == t.id || N ? 1 : 0; r = t.row; for (v = 0; v < r.length; v++)for (x = r[v].key, f = 0; f < x.length; f++) {
                                        p = x[f]; var C = b.dfltCodes.indexOf(p.id); if (B || O) B && 0 <= C && C < B.length && (p.text = B[C]), O && m.precedes(k.utils.Version.NO_DEFAULT_KEYCAPS) && "K_SPACE" != p.id && C + 65 * N < b.dfltText.length && null !== p.text && (p.text = p.text || b.dfltText[C + 65 * N]); null !==
                                            p.text && (p.text = p.text || ""); switch (p.id) { case "K_SHIFT": c = p; break; case "K_CAPS": u = p; break; case "K_NUMLOCK": A = p; break; case "K_SCROLL": G = p }if (null != p.sk) { for (C = 0; C < p.sk.length; C++)-1 == a.indexOf(p.sk[C].nextlayer) && p.sk.splice(C--, 1); 0 == p.sk.length && (p.sk = null) }
                                    } t.shiftKey = c; t.capsKey = u; t.numKey = A; t.scrollKey = G; "desktop" != d && 0 < l && null != c && (c.sp = b.buttonClasses["SHIFT-ON"], c.sk = null, c.text = b.modifierSpecials[e[l].id] ? b.modifierSpecials[e[l].id] : "*Shift*")
                                } return h
                }; b.getLayerId = function (a) {
                    var b = n.modifierCodes,
                    d = ""; if (0 == a) return "default"; a & b.LCTRL && (d = (0 < d.length ? d + "-" : "") + "leftctrl"); a & b.RCTRL && (d = (0 < d.length ? d + "-" : "") + "rightctrl"); a & b.LALT && (d = (0 < d.length ? d + "-" : "") + "leftalt"); a & b.RALT && (d = (0 < d.length ? d + "-" : "") + "rightalt"); a & b.SHIFT && (d = (0 < d.length ? d + "-" : "") + "shift"); a & b.CTRL && (d = (0 < d.length ? d + "-" : "") + "ctrl"); a & b.ALT && (d = (0 < d.length ? d + "-" : "") + "alt"); return d
                }; b.generateLayerIds = function (a) { if (a) { a = 32; var c = 1 } else a = 8, c = 16; for (var d = [], h = 0; h < a; h++)d.push(b.getLayerId(h * c)); return d }; b.formatDefaultLayer =
                    function (a, c, d, h) {
                        for (var l = a.id, m = b.buttonClasses, e = 0; e < a.row.length; e++)for (var g = a.row[e].key, f = 0; f < g.length; f++) {
                            var k = g[f]; switch (k.id) {
                                case "K_SHIFT": case "K_LSHIFT": case "K_RSHIFT": -1 != l.indexOf("shift") && (k.sp = m["SHIFT-ON"]); "desktop" != d && (k.nextlayer = "default" != l ? "default" : "shift"); break; case "K_LCTRL": case "K_LCONTROL": if (c) { -1 != l.indexOf("leftctrl") && (k.sp = m["SHIFT-ON"]); break } case "K_RCTRL": case "K_RCONTROL": if (c) { -1 != l.indexOf("rightctrl") && (k.sp = m["SHIFT-ON"]); break } case "K_CONTROL": -1 ==
                                    l.indexOf("ctrl") || c && (-1 == l.indexOf("leftctrl") || -1 == l.indexOf("rightctrl")) || (k.sp = m["SHIFT-ON"]); break; case "K_LALT": if (c) { -1 != l.indexOf("leftalt") && (k.sp = m["SHIFT-ON"]); break } case "K_RALT": if (c) { -1 != l.indexOf("rightalt") && (k.sp = m["SHIFT-ON"]); break } case "K_ALT": -1 == l.indexOf("alt") || c && (-1 == l.indexOf("leftalt") || -1 == l.indexOf("rightalt")) || (k.sp = m["SHIFT-ON"]); break; case "K_oE2": "undefined" != typeof h && h || ("desktop" == d ? (g.splice(f--, 1), g[0].width = "200") : g[f].sp = m.HIDDEN)
                            }
                        }
                    }; b.processLegacyDefinitions =
                        function (a) { for (var c = b.generateLayerIds(!1), d = {}, h = 0; h < c.length; h++) { for (var l = c[h], m = [], e = !1, g = 0; 65 > g; g++) { var f = g + 65 * h; m.push(a[f]); f < a.length && "" != a[f] && g != b.dfltCodes.indexOf("K_SPACE") && (e = !0) } e && (d[l] = m) } "undefined" != typeof d["default"] && d["default"] || (d["default"] = [""]); "undefined" != typeof d.shift && d.shift || (d.shift = [""]); return d }; b.dfltCodes = "K_BKQUOTE K_1 K_2 K_3 K_4 K_5 K_6 K_7 K_8 K_9 K_0 K_HYPHEN K_EQUAL K_* K_* K_* K_Q K_W K_E K_R K_T K_Y K_U K_I K_O K_P K_LBRKT K_RBRKT K_BKSLASH K_* K_* K_* K_A K_S K_D K_F K_G K_H K_J K_K K_L K_COLON K_QUOTE K_* K_* K_* K_* K_* K_oE2 K_Z K_X K_C K_V K_B K_N K_M K_COMMA K_PERIOD K_SLASH K_* K_* K_* K_* K_* K_SPACE".split(" ");
                b.dfltText = "`1234567890-=\u00a7~~qwertyuiop[]\\~~~asdfghjkl;'~~~~~?zxcvbnm,./~~~~~ ~!@#$%^&*()_+\u00a7~~QWERTYUIOP{}\\~~~ASDFGHJKL:\"~~~~~?ZXCVBNM<>?~~~~~ "; b.DEFAULT_RAW_SPEC = { F: "Tahoma", BK: b.dfltText }; b.buttonClasses = { DEFAULT: 0, SHIFT: 1, "SHIFT-ON": 2, SPECIAL: 3, "SPECIAL-ON": 4, DEADKEY: 8, BLANK: 9, HIDDEN: 10 }; b.modifierSpecials = {
                    leftalt: "*LAlt*", rightalt: "*RAlt*", alt: "*Alt*", leftctrl: "*LCtrl*", rightctrl: "*RCtrl*", ctrl: "*Ctrl*", "ctrl-alt": "*AltGr*", "leftctrl-leftalt": "*LAltCtrl*", "rightctrl-rightalt": "*RAltCtrl*",
                    "leftctrl-leftalt-shift": "*LAltCtrlShift*", "rightctrl-rightalt-shift": "*RAltCtrlShift*", shift: "*Shift*", "shift-alt": "*AltShift*", "shift-ctrl": "*CtrlShift*", "shift-ctrl-alt": "*AltCtrlShift*", "leftalt-shift": "*LAltShift*", "rightalt-shift": "*RAltShift*", "leftctrl-shift": "*LCtrlShift*", "rightctrl-shift": "*RCtrlShift*"
                }; b.dfltLayout = {
                    desktop: {
                        font: "Tahoma,Helvetica", layer: [{
                            id: "default", row: [{
                                id: "1", key: [{ id: "K_BKQUOTE" }, { id: "K_1" }, { id: "K_2" }, { id: "K_3" }, { id: "K_4" }, { id: "K_5" }, { id: "K_6" }, { id: "K_7" }, { id: "K_8" },
                                { id: "K_9" }, { id: "K_0" }, { id: "K_HYPHEN" }, { id: "K_EQUAL" }, { id: "K_BKSP", text: "*BkSp*", sp: "1", width: "130" }]
                            }, { id: "2", key: [{ id: "K_TAB", text: "*Tab*", sp: "1", width: "130" }, { id: "K_Q" }, { id: "K_W" }, { id: "K_E" }, { id: "K_R" }, { id: "K_T" }, { id: "K_Y" }, { id: "K_U" }, { id: "K_I" }, { id: "K_O" }, { id: "K_P" }, { id: "K_LBRKT" }, { id: "K_RBRKT" }, { id: "K_BKSLASH" }] }, {
                                id: "3", key: [{ id: "K_CAPS", text: "*Caps*", sp: "1", width: "165" }, { id: "K_A" }, { id: "K_S" }, { id: "K_D" }, { id: "K_F" }, { id: "K_G" }, { id: "K_H" }, { id: "K_J" }, { id: "K_K" }, { id: "K_L" }, { id: "K_COLON" }, { id: "K_QUOTE" },
                                { id: "K_ENTER", text: "*Enter*", sp: "1", width: "165" }]
                            }, { id: "4", key: [{ id: "K_SHIFT", text: "*Shift*", sp: "1", width: "130" }, { id: "K_oE2" }, { id: "K_Z" }, { id: "K_X" }, { id: "K_C" }, { id: "K_V" }, { id: "K_B" }, { id: "K_N" }, { id: "K_M" }, { id: "K_COMMA" }, { id: "K_PERIOD" }, { id: "K_SLASH" }, { id: "K_RSHIFT", text: "*Shift*", sp: "1", width: "130" }] }, {
                                id: "5", key: [{ id: "K_LCONTROL", text: "*Ctrl*", sp: "1", width: "170" }, { id: "K_LALT", text: "*Alt*", sp: "1", width: "160" }, { id: "K_SPACE", text: "", width: "770" }, { id: "K_RALT", text: "*Alt*", sp: "1", width: "160" }, {
                                    id: "K_RCONTROL",
                                    text: "*Ctrl*", sp: "1", width: "170"
                                }]
                            }]
                        }]
                    }, tablet: {
                        font: "Tahoma,Helvetica", layer: [{
                            id: "default", row: [{ id: "0", key: [{ id: "K_1" }, { id: "K_2" }, { id: "K_3" }, { id: "K_4" }, { id: "K_5" }, { id: "K_6" }, { id: "K_7" }, { id: "K_8" }, { id: "K_9" }, { id: "K_0" }, { id: "K_HYPHEN" }, { id: "K_EQUAL" }, { sp: "10", width: "1" }] }, { id: "1", key: [{ id: "K_Q", pad: "25" }, { id: "K_W" }, { id: "K_E" }, { id: "K_R" }, { id: "K_T" }, { id: "K_Y" }, { id: "K_U" }, { id: "K_I" }, { id: "K_O" }, { id: "K_P" }, { id: "K_LBRKT" }, { id: "K_RBRKT" }, { sp: "10", width: "1" }] }, {
                                id: "2", key: [{ id: "K_A", pad: "50" }, { id: "K_S" },
                                { id: "K_D" }, { id: "K_F" }, { id: "K_G" }, { id: "K_H" }, { id: "K_J" }, { id: "K_K" }, { id: "K_L" }, { id: "K_COLON" }, { id: "K_QUOTE" }, { id: "K_BKSLASH", width: "90" }]
                            }, { id: "3", key: [{ id: "K_oE2", width: "90" }, { id: "K_Z" }, { id: "K_X" }, { id: "K_C" }, { id: "K_V" }, { id: "K_B" }, { id: "K_N" }, { id: "K_M" }, { id: "K_COMMA" }, { id: "K_PERIOD" }, { id: "K_SLASH" }, { id: "K_BKQUOTE" }, { sp: "10", width: "1" }] }, {
                                id: "4", key: [{
                                    id: "K_SHIFT", text: "*Shift*", sp: "1", width: "200", sk: [{ id: "K_LCONTROL", text: "*Ctrl*", sp: "1", width: "50", nextlayer: "ctrl" }, {
                                        id: "K_LCONTROL", text: "*LCtrl*", sp: "1",
                                        width: "50", nextlayer: "leftctrl"
                                    }, { id: "K_RCONTROL", text: "*RCtrl*", sp: "1", width: "50", nextlayer: "rightctrl" }, { id: "K_LALT", text: "*Alt*", sp: "1", width: "50", nextlayer: "alt" }, { id: "K_LALT", text: "*LAlt*", sp: "1", width: "50", nextlayer: "leftalt" }, { id: "K_RALT", text: "*RAlt*", sp: "1", width: "50", nextlayer: "rightalt" }, { id: "K_ALTGR", text: "*AltGr*", sp: "1", width: "50", nextlayer: "ctrl-alt" }]
                                }, { id: "K_LOPT", text: "*Menu*", sp: "1", width: "150" }, { id: "K_SPACE", text: "", width: "570" }, { id: "K_BKSP", text: "*BkSp*", sp: "1", width: "150" }, {
                                    id: "K_ENTER",
                                    text: "*Enter*", sp: "1", width: "200"
                                }]
                            }]
                        }]
                    }, phone: {
                        font: "Tahoma,Helvetica", layer: [{
                            id: "default", row: [{ id: "0", key: [{ id: "K_1" }, { id: "K_2" }, { id: "K_3" }, { id: "K_4" }, { id: "K_5" }, { id: "K_6" }, { id: "K_7" }, { id: "K_8" }, { id: "K_9" }, { id: "K_0" }, { id: "K_HYPHEN" }, { id: "K_EQUAL" }, { sp: "10", width: "1" }] }, { id: "1", key: [{ id: "K_Q", pad: "25" }, { id: "K_W" }, { id: "K_E" }, { id: "K_R" }, { id: "K_T" }, { id: "K_Y" }, { id: "K_U" }, { id: "K_I" }, { id: "K_O" }, { id: "K_P" }, { id: "K_LBRKT" }, { id: "K_RBRKT" }, { sp: "10", width: "1" }] }, {
                                id: "2", key: [{ id: "K_A", pad: "50" }, { id: "K_S" },
                                { id: "K_D" }, { id: "K_F" }, { id: "K_G" }, { id: "K_H" }, { id: "K_J" }, { id: "K_K" }, { id: "K_L" }, { id: "K_COLON" }, { id: "K_QUOTE" }, { id: "K_BKSLASH", width: "90" }]
                            }, { id: "3", key: [{ id: "K_oE2", width: "90" }, { id: "K_Z" }, { id: "K_X" }, { id: "K_C" }, { id: "K_V" }, { id: "K_B" }, { id: "K_N" }, { id: "K_M" }, { id: "K_COMMA" }, { id: "K_PERIOD" }, { id: "K_SLASH" }, { id: "K_BKQUOTE" }, { sp: "10", width: "1" }] }, {
                                id: "4", key: [{
                                    id: "K_SHIFT", text: "*Shift*", sp: "1", width: "200", sk: [{ id: "K_LCONTROL", text: "*Ctrl*", sp: "1", width: "50", nextlayer: "ctrl" }, {
                                        id: "K_LCONTROL", text: "*LCtrl*", sp: "1",
                                        width: "50", nextlayer: "leftctrl"
                                    }, { id: "K_RCONTROL", text: "*RCtrl*", sp: "1", width: "50", nextlayer: "rightctrl" }, { id: "K_LALT", text: "*Alt*", sp: "1", width: "50", nextlayer: "alt" }, { id: "K_LALT", text: "*LAlt*", sp: "1", width: "50", nextlayer: "leftalt" }, { id: "K_RALT", text: "*RAlt*", sp: "1", width: "50", nextlayer: "rightalt" }, { id: "K_ALTGR", text: "*AltGr*", sp: "1", width: "50", nextlayer: "ctrl-alt" }]
                                }, { id: "K_LOPT", text: "*Menu*", width: "150", sp: "1" }, { id: "K_SPACE", width: "570", text: "" }, { id: "K_BKSP", text: "*BkSp*", width: "150", sp: "1" }, {
                                    id: "K_ENTER",
                                    text: "*Enter*", width: "200", sp: "1"
                                }]
                            }]
                        }]
                    }
                }; return b
            }(); g.Layouts = e
        })(k.keyboards || (k.keyboards = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
var __decorate = this && this.__decorate || function (f, k, g, n) { var e = arguments.length, b = 3 > e ? k : null === n ? n = Object.getOwnPropertyDescriptor(k, g) : n, a; if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) b = Reflect.decorate(f, k, g, n); else for (var c = f.length - 1; 0 <= c; c--)if (a = f[c]) b = (3 > e ? a(b) : 3 < e ? a(k, g, b) : a(k, g)) || b; return 3 < e && b && Object.defineProperty(k, g, b), b };
(function (f) {
    (function (f) {
        (function (g) {
            function k(a, b, c) { c.enumerable = !0 } var e = function () {
                function a() { this.isMnemonic = !1 } Object.defineProperty(a.prototype, "baseKeyID", { get: function () { if ("undefined" !== typeof this.id) return this.id }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "isPadding", { get: function () { return 10 == this.sp }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "coreID", {
                    get: function () {
                        if ("undefined" !== typeof this.id) {
                            var a = this.id || ""; this.displayLayer !=
                                this.layer && (a = a + "+" + this.layer); return a
                        }
                    }, enumerable: !1, configurable: !0
                }); Object.defineProperty(a.prototype, "elementID", { get: function () { if ("undefined" !== typeof this.id) return this.displayLayer + "-" + this.coreID }, enumerable: !1, configurable: !0 }); a.unicodeIDToText = function (a, b) { if (!a || "U_" != a.substring(0, 2)) return null; var c = "", d = 0; for (a = a.substring(2).split("_"); d < a.length; d++) { var h = a[d], l = parseInt(h, 16); 0 <= l && 31 >= l || 128 <= l && 159 >= l || isNaN(l) ? b && b(h) : c += String.kmwFromCharCode(l) } return c ? c : null }; a.sanitize =
                    function (b) { "string" == typeof b.width && (b.width = parseInt(b.width, 10)); b.width || (b.width = a.DEFAULT_KEY_WIDTH); "string" == typeof b.pad && (b.pad = parseInt(b.pad, 10)); b.pad || (b.pad = a.DEFAULT_PAD); "string" == typeof b.sp && (b.sp = Number.parseInt(b.sp, 10)); b.sp || (b.sp = 0) }; a.polyfill = function (b, c, d) {
                        var h = new a, l = Object.getPrototypeOf(h), m; for (m in h) if (!b.hasOwnProperty(m)) { var e = Object.getOwnPropertyDescriptor(l, m); e ? Object.defineProperty(b, m, e) : b[m] = h[m] } if (b.sk) for (h = 0, l = b.sk; h < l.length; h++)a.polyfill(l[h],
                            c, d); b.displayLayer = d; b.layer = b.layer || d; b.constructBaseKeyEvent(c, d)
                    }; a.prototype.constructBaseKeyEvent = function (a, b) {
                        var c = this.layer || b || "", d = this.id ? this.id.toUpperCase() : null; b = { Lmodifiers: f.text.KeyboardProcessor.getModifierState(c), Lstates: f.text.KeyboardProcessor.getStateFromLayer(c), Lcode: d ? f.text.Codes.keyCodes[d] : 0, LisVirtualKey: !0, vkCode: 0, kName: d, kLayer: c, kbdLayer: b, kNextLayer: this.nextlayer, device: null, isSynthetic: !0 }; a.keyboard && (c = a.keyboard, !c.isMnemonic || a.isDefault && "desktop" !=
                            a.formFactor ? b.vkCode = b.Lcode : b.Lcode != f.text.Codes.keyCodes.K_SPACE && (b.vkCode = b.Lcode, this.isMnemonic = !0), c.definesPositionalOrMnemonic || (b.Lcode = f.KeyMapping._USKeyCodeToCharCode(this.constructKeyEvent(null, null)), b.LisVirtualKey = !1)); this.baseKeyEvent = b
                    }; a.prototype.constructKeyEvent = function (a, b) {
                        var c = f.utils.deepCopy(this.baseKeyEvent); c.device = b; this.isMnemonic && f.text.KeyboardProcessor.setMnemonicCode(c, -1 != this.layer.indexOf("shift"), a ? a.stateKeys.K_CAPS : !1); a && (a.setSyntheticEventDefaults(c),
                            a = { K_CAPS: f.text.Codes.stateBitmasks.CAPS, K_NUMLOCK: f.text.Codes.stateBitmasks.NUM_LOCK, K_SCROLL: f.text.Codes.stateBitmasks.SCROLL_LOCK }[c.kName]) && (c.Lstates ^= a, c.LmodifierChange = !0); return c
                    }; a.prototype.getSubkey = function (a) { if (this.sk) for (var b = 0, c = this.sk; b < c.length; b++) { var d = c[b]; if (d.coreID == a) return d } return null }; a.DEFAULT_PAD = 15; a.DEFAULT_RIGHT_MARGIN = 15; a.DEFAULT_KEY_WIDTH = 100; a.DEFAULT_KEY = { text: "", width: a.DEFAULT_KEY_WIDTH, sp: 0, pad: a.DEFAULT_PAD }; __decorate([k], a.prototype, "baseKeyID",
                        null); __decorate([k], a.prototype, "isPadding", null); __decorate([k], a.prototype, "coreID", null); __decorate([k], a.prototype, "elementID", null); return a
            }(); g.ActiveKey = e; var b = function () {
                function a() { } a.sanitize = function (a) { for (var b = 0, c = a.key; b < c.length; b++) { var d = c[b]; null == d ? --a.key.length : e.sanitize(d) } "string" == typeof a.id && (a.id = Number.parseInt(a.id, 10)) }; a.polyfill = function (b, c, d, f, g) {
                    for (var h = b.key, l = 0; l < h.length; l++) {
                        var m = h[l]; for (k in e.DEFAULT_KEY) "string" != typeof m[k] && "number" != typeof m[k] &&
                            (m[k] = e.DEFAULT_KEY[k]); switch (m.sp) { case "1": a.SPECIAL_LABEL.test(m.text) || "" == m.text || (m.sp = "3"); break; case "2": a.SPECIAL_LABEL.test(m.text) || "" == m.text || (m.sp = "4") }e.polyfill(m, c, d)
                    } for (l = c = 0; l < h.length - 1; l++) { d = m = h[l]; var k = m.pad / f; var q = m.width / f, w = c; d.proportionalPad = k; d.proportionalWidth = q; d.proportionalX = w + k + q / 2; c += m.proportionalPad; c += m.proportionalWidth } d = e.DEFAULT_RIGHT_MARGIN / f; 0 < h.length && (l = h[h.length - 1], 1 == h.length && 0 > l.pad ? (f = l.width / f, h = 1 - (c + f + d), l.proportionalPad = h, l.proportionalWidth =
                        f, l.proportionalX = c + h + f / 2) : (f = l.pad / f, h = 1 - (c + f + d), l.proportionalPad = f, l.proportionalWidth = h, l.proportionalX = c + f + h / 2)); c = new a; for (m in c) b.hasOwnProperty(m) || (b[m] = c[m]); b.proportionalY = g
                }; a.prototype.populateKeyMap = function (a) { this.key.forEach(function (b) { b.coreID && (a[b.coreID] = b) }) }; a.SPECIAL_LABEL = /\*\w+\*/; return a
            }(); g.ActiveRow = b; var a = function () {
                function a() { } a.sanitize = function (a) { var c = 0; for (a = a.row; c < a.length; c++)b.sanitize(a[c]) }; a.polyfill = function (c, d) {
                    c.aligned = !1; for (var h = 0, l = 0, f =
                        c.row; l < f.length; l++) { for (var g = 0, k = 0, n = f[l].key; k < n.length; k++) { var t = n[k]; g += t.width + t.pad } g > h && (h = g) } h = "desktop" == d.formFactor ? h + 5 : h + e.DEFAULT_RIGHT_MARGIN; l = c.row.length; for (f = 0; f < l; f++)b.polyfill(c.row[f], d, c.id, h, (f + .5) / l); d = new a; for (t in d) c.hasOwnProperty(t) || (c[t] = d[t]); c.totalWidth = h; c.defaultKeyProportionalWidth = e.DEFAULT_KEY.width / h; c.rowProportionalHeight = 1 / l; c.keyMap = c.constructKeyMap()
                }; a.prototype.constructKeyMap = function () {
                    var a = {}; this.row.forEach(function (b) { b.populateKeyMap(a) });
                    return a
                }; a.prototype.getTouchProbabilities = function (a, b) { a = this.simpleTouchDistribution(a, b); b = []; for (var c in a) b.push({ keyId: c, p: a[c] }); return b.sort(function (a, b) { return b.p - a.p }) }; a.prototype.simpleTouchDistribution = function (a, b) { a = this.keyTouchDistances(a, b); b = {}; var c = 0, d; for (d in a) c += b[d] = 1 / (Math.pow(a[d], 2) + 1E-6); for (d in b) b[d] /= c; return b }; a.prototype.keyTouchDistances = function (a, b) {
                    var c = this, d = {}; this.row.forEach(function (h) {
                        h.key.forEach(function (l) {
                            if (l.baseKeyID && !f.text.Codes.isKnownOSKModifierKey(l.baseKeyID) &&
                                !l.isPadding) { var e = Math.abs(a.x - l.proportionalX), m = Math.abs(a.y - h.proportionalY); if (e > .5 * l.proportionalWidth) { var g = e - .5 * l.proportionalWidth; e = .5 } else g = 0, e /= l.proportionalWidth; if (m > .5 * c.rowProportionalHeight) { var k = m - .5 * c.rowProportionalHeight; m = .5 } else k = 0, m /= c.rowProportionalHeight; g *= b; g += e * c.rowProportionalHeight; k += m * c.rowProportionalHeight; d[l.coreID] = g * g + k * k }
                        })
                    }); return d
                }; a.prototype.getKey = function (a) {
                    0 == a.indexOf(this.id + "-") && (a = a.replace(this.id + "-", "")); var b = a.split("::"); return 1 <
                        b.length ? this.keyMap[b[0]].getSubkey(b[1]) : this.keyMap[a]
                }; return a
            }(); g.ActiveLayer = a; var c = function () {
                function b() { } b.prototype.getLayer = function (a) { return this.layerMap[a] }; b.correctLayerEmptyRowBug = function (a) { for (var b = 0; b < a.length; b++) { var c = a[b].row, d; for (d = c.length - 1; 0 <= d; d--)Array.isArray(c[d].key) && 0 != c[d].key.length || c.splice(d, 1) } }; b.sanitize = function (c) { b.correctLayerEmptyRowBug(c.layer); var d = 0; for (c = c.layer; d < c.length; d++)a.sanitize(c[d]) }; b.polyfill = function (c, d, e) {
                    if (null == c) throw Error("Cannot build an ActiveLayout for a null specification.");
                    this.sanitize(c); var h = {}, l = c.layer, m = new b, f; for (f in m) c.hasOwnProperty(f) || (c[f] = m[f]); c.keyboard = d; c.formFactor = e; for (d = 0; d < l.length; d++)a.polyfill(l[d], c), h[l[d].id] = l[d]; c.layerMap = h; return c
                }; return b
            }(); g.ActiveLayout = c
        })(f.keyboards || (f.keyboards = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            var g = function () { function b(a) { this.id = a } b.prototype.set = function (a) { throw Error("System store with ID " + this.id + " may not be directly set."); }; return b }(); f.SystemStore = g; var e = function (b) {
                function a(a, d) { a = b.call(this, a) || this; a.handler = null; a._value = d; return a } __extends(a, b); Object.defineProperty(a.prototype, "value", { get: function () { return this._value }, enumerable: !1, configurable: !0 }); a.prototype.matches = function (a) { return this._value == a }; a.prototype.set = function (a) {
                    this.handler &&
                    this.handler(this, a) || (this._value = a)
                }; return a
            }(g); f.MutableSystemStore = e; g = function (b) {
                function a(a) { var c = b.call(this, f.KeyboardInterface.TSS_PLATFORM) || this; c.kbdInterface = a; return c } __extends(a, b); a.prototype.matches = function (a) {
                    var b = a.split(" "), c = this.kbdInterface.activeDevice; for (a = 0; a < b.length; a++) {
                        var l = b[a].toLowerCase(); switch (l) {
                            case "touch": case "hardware": if (c.touchable != ("touch" == l)) return !1; break; case "macos": case "mac": l = "macosx"; case "macosx": case "windows": case "android": case "ios": case "linux": if (c.OS !=
                                l) return !1; break; case "tablet": case "phone": case "desktop": if (c.formFactor != l) return !1; break; case "web": if ("native" == c.browser) return !1; break; case "native": case "chrome": case "firefox": case "safari": case "edge": case "opera": if (c.browser != l) return !1; break; default: return !1
                        }
                    } return !0
                }; return a
            }(g); f.PlatformSystemStore = g
        })(f.text || (f.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function () { return function () { } }(); g.KeyInformation = n; (function () { return function () { } })(); (function () { return function () { } })(); (function () { return function () { } })(); (function () { return function () { } })(); (function () { return function () { } })(); (function () { return function () { } })(); var e = function () {
                function a() { } a.prototype.reset = function () { this._cache = [] }; a.prototype.get = function (a, b) {
                    return "undefined" == typeof this._cache[a] || "undefined" == typeof this._cache[a][b] ? null :
                        this._cache[a][b]
                }; a.prototype.set = function (a, b, c) { "undefined" == typeof this._cache[a] && (this._cache[a] = []); this._cache[a][b] = c }; return a
            }(), b = function () {
                function a() { } a.prototype.reset = function () { this._cache = [] }; a.prototype.get = function (a, b) { return "undefined" == typeof this._cache[a] || "undefined" == typeof this._cache[a][b] ? null : this._cache[a][b] }; a.prototype.set = function (a, b, c) { "undefined" == typeof this._cache[a] && (this._cache[a] = []); this._cache[a][b] = c }; a.prototype.clone = function () {
                    var b = new a; b._cache =
                        this._cache; return b
                }; return a
            }(), a = function () {
                function a(c) {
                    void 0 === c && (c = null); this.cachedContext = new e; this.cachedContextEx = new b; this._AnyIndices = []; this.systemStores = {}; this.systemStores[a.TSS_PLATFORM] = new g.PlatformSystemStore(this); this.systemStores[a.TSS_LAYER] = new g.MutableSystemStore(a.TSS_LAYER, "default"); this.systemStores[a.TSS_NEWLAYER] = new g.MutableSystemStore(a.TSS_NEWLAYER, ""); this.systemStores[a.TSS_OLDLAYER] = new g.MutableSystemStore(a.TSS_OLDLAYER, ""); this.variableStoreSerializer =
                        c
                } a.prototype.saveFocus = function () { }; a.prototype.registerKeyboard = function (a) { this.activeKeyboard = new k.keyboards.Keyboard(a) }; a.prototype.context = function (a, b, c) { var d = this.cachedContext.get(a, b); if (null !== d) return d; c = this.KC_(a, b, c); this.cachedContext.set(a, b, c); return c }; a.prototype.KC_ = function (a, b, c) { c = c.isSelectionEmpty() ? c.getTextBeforeCaret() : ""; c._kmwLength() < a && (c = Array(a - c._kmwLength() + 1).join("\ufffe") + c); return c._kmwSubstr(-a)._kmwSubstr(0, b) }; a.prototype.nul = function (a, b) {
                    return "\ufffe" ===
                        this.context(a + 1, 1, b)
                }; a.prototype.contextMatch = function (a, b, c, e) { if (this.context(a, e, b) === c) return !0; b.deadkeys().resetMatched(); return !1 }; a.prototype._BuildExtendedContext = function (a, b, c) {
                    var d = this.cachedContextEx.get(a, b); if (null !== d) return d; d = this.cachedContextEx.get(a, a); if (null === d) {
                        var h = c.deadkeys().toSortedArray(), l = 0; for (d = { valContext: [], deadContext: [] }; d.valContext.length < a;) {
                            var e = c.getDeadkeyCaret() - l; 0 < h.length && h[0].p > e ? h.splice(0, 1) : 0 < h.length && h[0].p == e ? (d.deadContext[a - d.valContext.length -
                                1] = h[0], d.valContext = [h[0].d].concat(d.valContext), h.splice(0, 1)) : (e = this.context(++l, 1, c), d.valContext = [e].concat(d.valContext))
                        } this.cachedContextEx.set(a, a, d)
                    } c = d; c.valContext = c.valContext.slice(0, b); for (d = 0; d < c.valContext.length; d++)"\ufffe" == c[d] && (c.valContext.splice(0, 1), c.deadContext.splice(0, 1)); 0 == c.valContext.length && (c.valContext = ["\ufffe"], c.deadContext = []); this.cachedContextEx.set(a, b, c); return c
                }; a.prototype.fullContextMatch = function (a, b, c) {
                    var d = this._BuildExtendedContext(a, c.length,
                        b); this.ruleContextEx = this.cachedContextEx.clone(); a = d.valContext; d = d.deadContext; for (var h = !1, l = 0; l < c.length; l++)if ("string" == typeof c[l]) { if (c[l] !== a[l]) { h = !0; break } } else {
                            var e = c[l]; switch (e.t) {
                                case "d": e.d !== a[l] ? h = !0 : d[l].set(); break; case "a": var f = this.any(l, "string" == typeof a[l] ? a[l] : { t: "d", d: a[l] }, e.a); e.n ? e.n && (f || "\ufffe" === a[l]) && (h = !0) : f ? void 0 !== d[l] && d[l].set() : h = !0; break; case "i": e = this._Index(e.i, e.o); void 0 !== e && ("string" == typeof e ? e : e.d) !== a[l] ? h = !0 : void 0 !== d[l] && d[l].set(); break;
                                case "c": a[e.c - 1] !== a[l] ? h = !0 : void 0 !== d[l] && d[l].set(); break; case "n": "\ufffe" != a[l] && (h = !0); break; default: throw Error("Unexpected object in fullContextMatch specification: " + e);
                            }
                        } h && (b.deadkeys().resetMatched(), this._AnyIndices = []); return !h
                }; a.prototype.isKeypress = function (a) { return this.activeKeyboard.isMnemonic ? !a.LisVirtualKey : k.KeyMapping._USKeyCodeToCharCode(a) ? !0 : !1 }; a.matchModifiersToRuleChirality = function (a, b) {
                    var c = g.Codes.modifierCodes.LALT | g.Codes.modifierCodes.RALT, d = g.Codes.modifierCodes.LCTRL |
                        g.Codes.modifierCodes.RCTRL; b & c || (c &= a) && (a ^= c | g.Codes.modifierCodes.ALT); b & d || (b = a & d) && (a ^= b | g.Codes.modifierCodes.CTRL); return a
                }; a.prototype.keyMatch = function (b, c, l) {
                    var d = !1, h = 173 == b.Lcode ? 189 : b.Lcode, e = this.activeKeyboard.modifierBitmask, g = f.keyman.text.Codes, k = e & g.modifierBitmasks.ALL; e &= g.stateBitmasks.ALL; g = a.matchModifiersToRuleChirality(b.Lmodifiers, c); 255 < b.vkCode && (h = b.vkCode); if (b.LisVirtualKey || 255 < h) { if (16384 == (c & 16384) || 255 < h) d = l == h && (c & k) == g && this.stateMatch(b, c & e) } else 0 == (c & 16384) &&
                        (d = h == l); d || this.activeTargetOutput.deadkeys().resetMatched(); return d
                }; a.prototype.stateMatch = function (a, b) { return (b & a.Lstates) == b }; a.prototype.keyInformation = function (a) { var b = new n; b.vk = a.LisVirtualKey; b.code = a.Lcode; b.modifiers = a.Lmodifiers; return b }; a.prototype.deadkeyMatch = function (a, b, c) { return b.hasDeadkeyMatch(a, c) }; a.prototype.beep = function (a) { this.resetContextCache(); this.ruleBehavior.beep = !0 }; a.prototype._ExplodeStore = function (a) {
                    if ("string" == typeof a) {
                        var b = this.activeKeyboard.explodedStores;
                        if (b[a]) return b[a]; for (var c = [], d = 0; d < a._kmwLength(); d++)c.push(a._kmwCharAt(d)); return b[a] = c
                    } return a
                }; a.prototype.any = function (a, b, c) { if ("" == b) return !1; c = this._ExplodeStore(c); for (var d = -1, h = 0; h < c.length; h++)if ("string" == typeof c[h]) { if (c[h] == b) { d = h; break } } else if (c[h].d === b.d) { d = h; break } this._AnyIndices[a] = d; return 0 <= d }; a.prototype._Index = function (a, b) {
                    a = this._ExplodeStore(a); if (this._AnyIndices[b - 1] < a.length) return a[this._AnyIndices[b - 1]]; console.warn("Unmatched contextual index() statement detected in rule with index " +
                        b + "!"); return ""
                }; a.prototype.indexOutput = function (a, b, c, e) { this.resetContextCache(); b = this._Index(b, c); if ("" !== b) if ("string" == typeof b) this.output(a, e, b); else if (b.t) switch (b.t) { case "b": this.beep(e); break; case "d": this.deadkeyOutput(a, e, b.d); break; default: throw Error("Unexpected object in fullContextMatch specification: " + b); } else this.deadkeyOutput(a, e, b.d) }; a.prototype.deleteContext = function (a, b) {
                    if (0 < a) {
                        var c = this._BuildExtendedContext(a, a, b); for (var d = 0, h = 0; h < c.valContext.length; h++) {
                            var e = c.deadContext[h];
                            e ? (b.deadkeys().remove(e), a--) : "\ufffe" == c.valContext[h] && d++
                        } c = c.valContext.length - d; a > c && (a = c)
                    } b.deadkeys().resetMatched(); this.output(a, b, "")
                }; a.prototype.output = function (a, b, c) { this.resetContextCache(); b.saveProperties(); b.clearSelection(); b.deadkeys().deleteMatched(); 0 <= a && b.deleteCharsBeforeCaret(a); b.insertTextBeforeCaret(c); b.restoreProperties() }; a.prototype.contextExOutput = function (a, b, c, e) {
                    this.resetContextCache(); 0 <= a && this.output(a, b, ""); c = this.ruleContextEx.get(c, c); a = c.deadContext[e -
                        1]; e = c.valContext[e - 1]; if (a) b.insertDeadkeyBeforeCaret(a.d); else if ("string" == typeof e) this.output(-1, b, e); else throw Error("contextExOutput: should never be a numeric valContext with no corresponding deadContext");
                }; a.prototype.deadkeyOutput = function (a, b, c) { this.resetContextCache(); 0 <= a && this.output(a, b, ""); b.insertDeadkeyBeforeCaret(c) }; a.prototype.ifStore = function (a, b, c) { c = !0; (a = this.systemStores[a]) && (c = a.matches(b)); return c }; a.prototype.setStore = function (b, c, l) {
                    this.resetContextCache(); if (b ==
                        a.TSS_LAYER && this.activeDevice.touchable) this.ruleBehavior.setStore[b] = c; else return !1
                }; a.prototype.loadStore = function (a, b, c) { this.resetContextCache(); return this.variableStoreSerializer ? this.variableStoreSerializer.loadStore(a, b)[b] || c : c }; a.prototype.saveStore = function (a, b) {
                    this.resetContextCache(); var c = this.activeKeyboard; if (!c || "undefined" == typeof c.id || "" == c.id) return !1; c = {}; c[a] = b; this.ruleBehavior ? this.ruleBehavior.saveStore[a] = c : this.variableStoreSerializer.saveStore(this.activeKeyboard.id,
                        a, c); return !0
                }; a.prototype.resetContextCache = function () { this.cachedContext.reset(); this.cachedContextEx.reset() }; a.prototype.defaultBackspace = function (a) { a.isSelectionEmpty() ? this.output(1, a, "") : this.output(0, a, "") }; a.prototype.processNewContextEvent = function (a, b) { if (!this.activeKeyboard) throw "No active keyboard for keystroke processing!"; return this.process(this.activeKeyboard.processNewContextEvent.bind(this.activeKeyboard), a, b, !0) }; a.prototype.processPostKeystroke = function (a, b) {
                    if (!this.activeKeyboard) throw "No active keyboard for keystroke processing!";
                    return this.process(this.activeKeyboard.processPostKeystroke.bind(this.activeKeyboard), a, b, !0)
                }; a.prototype.processKeystroke = function (a, b) { if (!this.activeKeyboard) throw "No active keyboard for keystroke processing!"; return this.process(this.activeKeyboard.process.bind(this.activeKeyboard), a, b, !1) }; a.prototype.process = function (a, b, c, e) {
                    if (b) { if (!this.activeKeyboard) throw "No active keyboard for keystroke processing!"; if (!a) throw "No callee for keystroke processing!"; } else throw "No target specified for keyboard output!";
                    b.invalidateSelection(); b.deadkeys().resetMatched(); this.resetContextCache(); var d = g.Mock.from(b, !0), h = this.activeKeyboard.variableStores; this.ruleBehavior = new g.RuleBehavior; this.activeDevice = c.device; this.activeTargetOutput = b; a = a(b, c); this.activeTargetOutput = null; this.ruleBehavior.transcription = b.buildTranscriptionFrom(d, c, e); this.ruleBehavior.variableStores = this.activeKeyboard.variableStores; this.activeKeyboard.variableStores = h; this.ruleBehavior.triggerKeyDefault = !a; b = this.ruleBehavior; this.ruleBehavior =
                        null; return b
                }; a.prototype.applyVariableStores = function (a) { this.activeKeyboard.variableStores = a }; a.__publishShorthandAPI = function () {
                    var a = this.prototype, b = function (b, c) { a[b] = a[c] }; b("KSF", "saveFocus"); b("KBR", "beepReset"); b("KT", "insertText"); b("KR", "registerKeyboard"); b("KRS", "registerStub"); b("KC", "context"); b("KN", "nul"); b("KCM", "contextMatch"); b("KFCM", "fullContextMatch"); b("KIK", "isKeypress"); b("KKM", "keyMatch"); b("KSM", "stateMatch"); b("KKI", "keyInformation"); b("KDM", "deadkeyMatch"); b("KB", "beep");
                    b("KA", "any"); b("KDC", "deleteContext"); b("KO", "output"); b("KDO", "deadkeyOutput"); b("KCXO", "contextExOutput"); b("KIO", "indexOutput"); b("KIFS", "ifStore"); b("KSETS", "setStore"); b("KLOAD", "loadStore"); b("KSAVE", "saveStore")
                }; a.GLOBAL_NAME = "KeymanWeb"; a.TSS_LAYER = 33; a.TSS_PLATFORM = 31; a.TSS_NEWLAYER = 42; a.TSS_OLDLAYER = 43; return a
            }(); g.KeyboardInterface = a; a.__publishShorthandAPI()
        })(k.text || (k.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (g) {
            var k = function () { return function () { this.stores = {} } }(), e; (function (a) { a[a.NOT_LOADED = void 0] = "NOT_LOADED"; a[a.POLYFILLED = 1] = "POLYFILLED"; a[a.CALIBRATED = 2] = "CALIBRATED" })(e = g.LayoutState || (g.LayoutState = {})); var b = function () {
                function a(b) { this.scriptObject = b ? b : a.DEFAULT_SCRIPT_OBJECT; this.layoutStates = {} } a.prototype.process = function (a, b) { return this.scriptObject.gs(a, b) }; a.prototype.processNewContextEvent = function (a, b) {
                    return this.scriptObject.gn ? this.scriptObject.gn(a,
                        b) : !1
                }; a.prototype.processPostKeystroke = function (a, b) { return this.scriptObject.gpk ? this.scriptObject.gpk(a, b) : !1 }; Object.defineProperty(a.prototype, "isHollow", { get: function () { return this.scriptObject == a.DEFAULT_SCRIPT_OBJECT }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "id", { get: function () { return this.scriptObject.KI }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "name", { get: function () { return this.scriptObject.KN }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype,
                    "variableStores", { get: function () { var a = this.scriptObject.KVS, b = {}; if (Array.isArray(a)) for (var h = 0; h < a.length; h++) { var l = a[h]; b[l] = this.scriptObject[l] } return b }, set: function (a) { var b = this.scriptObject.KVS; if (Array.isArray(b)) for (var c = 0; c < b.length; c++) { var l = b[c]; "string" == typeof a[l] && (this.scriptObject[l] = a[l]) } }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "_legacyLayoutSpec", { get: function () { return this.scriptObject.KV }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype,
                        "_layouts", { get: function () { return this.scriptObject.KVKL }, set: function (a) { this.scriptObject.KVKL = a }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "compilerVersion", { get: function () { return new f.utils.Version(this.scriptObject.KVER) }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "isMnemonic", { get: function () { return !!this.scriptObject.KM }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "definesPositionalOrMnemonic", {
                            get: function () {
                                return "undefined" !=
                                    typeof this.scriptObject.KM
                            }, enumerable: !1, configurable: !0
                        }); Object.defineProperty(a.prototype, "helpText", { get: function () { return this.scriptObject.KH }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "hasScript", { get: function () { return !!this.scriptObject.KHF }, enumerable: !1, configurable: !0 }); a.prototype.embedScript = function (a) { this.scriptObject.KHF(a) }; Object.defineProperty(a.prototype, "oskStyling", { get: function () { return this.scriptObject.KCSS }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype,
                            "isCJK", { get: function () { var a; "undefined" != typeof this.scriptObject.KLC ? a = this.scriptObject.KLC : "undefined" != typeof this.scriptObject.LanguageCode && (a = this.scriptObject.LanguageCode); return "cmn" == a || "jpn" == a || "kor" == a }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "isRTL", { get: function () { return !!this.scriptObject.KRTL }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "modifierBitmask", {
                                get: function () { return this.scriptObject.KMBM || f.text.Codes.modifierBitmasks.NON_CHIRAL },
                                enumerable: !1, configurable: !0
                            }); Object.defineProperty(a.prototype, "isChiral", { get: function () { return !!(this.modifierBitmask & f.text.Codes.modifierBitmasks.IS_CHIRAL) }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "desktopFont", { get: function () { return this.scriptObject.KV ? this.scriptObject.KV.F : null }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "cacheTag", {
                                get: function () { var a = this.scriptObject._kmw; a || (a = new k, this.scriptObject._kmw = a); return a }, enumerable: !1,
                                configurable: !0
                            }); Object.defineProperty(a.prototype, "explodedStores", { get: function () { return this.cacheTag.stores }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "emulatesAltGr", {
                                get: function () {
                                    var a = f.text.Codes.modifierCodes; if (!this.isChiral || null == this._legacyLayoutSpec) return !1; var b = this._legacyLayoutSpec.KLS; if (!b) return !1; var h = a.LCTRL | a.LALT, l = b[g.Layouts.getLayerId(h)]; h = b[g.Layouts.getLayerId(a.SHIFT | h)]; return null != l && l != b[g.Layouts.getLayerId(a.RALT)] || null != h && h !=
                                        b[g.Layouts.getLayerId(a.RALT | a.SHIFT)] ? !1 : !0
                                }, enumerable: !1, configurable: !0
                            }); Object.defineProperty(a.prototype, "usesSupplementaryPlaneChars", { get: function () { var a = this.scriptObject; return a && (a.KS && 1 == a.KS || "Hieroglyphic" == a.KN) }, enumerable: !1, configurable: !0 }); a.prototype.usesDesktopLayoutOnDevice = function (a) { return this.scriptObject.KVKL ? a.formFactor == f.utils.FormFactor.Desktop : !0 }; a.prototype.notify = function (a, b, h) { "function" == typeof this.scriptObject.KNS && this.scriptObject.KNS(a, b, h) }; a.prototype.findOrConstructLayout =
                                function (a) {
                                    if (this._layouts) { if (void 0 !== this._layouts[a]) return this._layouts[a]; if (a == f.utils.FormFactor.Phone && this._layouts[f.utils.FormFactor.Tablet]) return this._layouts[f.utils.FormFactor.Phone] = this._layouts[f.utils.FormFactor.Tablet]; if (a == f.utils.FormFactor.Tablet && this._layouts[f.utils.FormFactor.Phone]) return this._layouts[f.utils.FormFactor.Tablet] = this._layouts[f.utils.FormFactor.Phone] } var b = null; if (null != this._legacyLayoutSpec && this._legacyLayoutSpec.KLS) b = this._legacyLayoutSpec;
                                    else if (null != this._legacyLayoutSpec && null != this._legacyLayoutSpec.BK) for (var c = this._legacyLayoutSpec.BK, l = 0; l < c.length; l++)if (0 < c[l].length) { b = this._legacyLayoutSpec; break } b || "" != this.helpText && a == f.utils.FormFactor.Desktop || (b = { F: "Tahoma", BK: g.Layouts.dfltText }); this._layouts || (this._layouts = {}); return b ? (a = this._layouts[a] = g.Layouts.buildDefaultLayout(b, this, a), a.isDefault = !0, a) : this._layouts[a] = null
                                }; a.prototype.layout = function (a) {
                                    var b = this.findOrConstructLayout(a); return b ? (this.layoutStates[a] ==
                                        e.NOT_LOADED && (b = g.ActiveLayout.polyfill(b, this, a), this.layoutStates[a] = e.POLYFILLED), b) : null
                                }; a.prototype.refreshLayouts = function () { var a = this;[f.utils.FormFactor.Desktop, f.utils.FormFactor.Phone, f.utils.FormFactor.Tablet].forEach(function (b) { a.layoutStates[b] = e.NOT_LOADED }) }; a.prototype.markLayoutCalibrated = function (a) { this.layoutStates[a] != e.NOT_LOADED && (this.layoutStates[a] = e.CALIBRATED) }; a.prototype.getLayoutState = function (a) { return this.layoutStates[a] }; a.DEFAULT_SCRIPT_OBJECT = {
                                    gs: function (a,
                                        b) { return !1 }, KI: "", KN: "", KV: g.Layouts.DEFAULT_RAW_SPEC, KM: 0
                                }; return a
            }(); g.Keyboard = b
        })(f.keyboards || (f.keyboards = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        var g = function () { return function () { } }(), k = function () { return function () { this.FF = new g; this.Safari = new g; this.Opera = new g; this.FF.k61 = 187; this.FF.k59 = 186; this.FF.k173 = 189 } }(), e = function () { return function () { this.se = new g; this.se.k220 = 192; this.se.k187 = 189; this.se.k219 = 187; this.se.k221 = 219; this.se.k186 = 221; this.se.k191 = 220; this.se.k192 = 186; this.se.k189 = 191; this.uk = new g; this.uk.k223 = 192; this.uk.k192 = 222; this.uk.k222 = 226; this.uk.k220 = 220 } }(), b = function () {
            function a() { } a._usCodeInit =
                function () {
                    var b = new g, d = new g; b.k192 = 96; b.k49 = 49; b.k50 = 50; b.k51 = 51; b.k52 = 52; b.k53 = 53; b.k54 = 54; b.k55 = 55; b.k56 = 56; b.k57 = 57; b.k48 = 48; b.k189 = 45; b.k187 = 61; b.k81 = 113; b.k87 = 119; b.k69 = 101; b.k82 = 114; b.k84 = 116; b.k89 = 121; b.k85 = 117; b.k73 = 105; b.k79 = 111; b.k80 = 112; b.k219 = 91; b.k221 = 93; b.k220 = 92; b.k65 = 97; b.k83 = 115; b.k68 = 100; b.k70 = 102; b.k71 = 103; b.k72 = 104; b.k74 = 106; b.k75 = 107; b.k76 = 108; b.k186 = 59; b.k222 = 39; b.k90 = 122; b.k88 = 120; b.k67 = 99; b.k86 = 118; b.k66 = 98; b.k78 = 110; b.k77 = 109; b.k188 = 44; b.k190 = 46; b.k191 = 47; d.k192 = 126; d.k49 =
                        33; d.k50 = 64; d.k51 = 35; d.k52 = 36; d.k53 = 37; d.k54 = 94; d.k55 = 38; d.k56 = 42; d.k57 = 40; d.k48 = 41; d.k189 = 95; d.k187 = 43; d.k81 = 81; d.k87 = 87; d.k69 = 69; d.k82 = 82; d.k84 = 84; d.k89 = 89; d.k85 = 85; d.k73 = 73; d.k79 = 79; d.k80 = 80; d.k219 = 123; d.k221 = 125; d.k220 = 124; d.k65 = 65; d.k83 = 83; d.k68 = 68; d.k70 = 70; d.k71 = 71; d.k72 = 72; d.k74 = 74; d.k75 = 75; d.k76 = 76; d.k186 = 58; d.k222 = 34; d.k90 = 90; d.k88 = 88; d.k67 = 67; d.k86 = 86; d.k66 = 66; d.k78 = 78; d.k77 = 77; d.k188 = 60; d.k190 = 62; d.k191 = 63; a._usCharCodes = [b, d]
                }; a._USKeyCodeToCharCode = function (b) {
                    return a.usCharCodes[b.Lmodifiers &
                        16 ? 1 : 0]["k" + b.Lcode]
                }; Object.defineProperty(a, "usCharCodes", { get: function () { a._usCharCodes || a._usCodeInit(); return a._usCharCodes }, enumerable: !1, configurable: !0 }); a.browserMap = new k; a.languageMap = new e; return a
        }(); f.KeyMapping = b
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (g) {
            var k = function () {
                function e(b, a) { this.stateKeys = { K_CAPS: !1, K_NUMLOCK: !1, K_SCROLL: !1 }; this.modStateFlags = 0; a || (a = e.DEFAULT_OPTIONS); this.contextDevice = b; this.baseLayout = a.baseLayout || e.DEFAULT_OPTIONS.baseLayout; this.keyboardInterface = new g.KeyboardInterface(a.variableStoreSerializer); this.installInterface() } e.prototype.installInterface = function () {
                    f.utils.getGlobalObject()[g.KeyboardInterface.GLOBAL_NAME] = this.keyboardInterface; this.activeKeyboard && (this.keyboardInterface.activeKeyboard =
                        this.activeKeyboard)
                }; Object.defineProperty(e.prototype, "activeKeyboard", { get: function () { return this.keyboardInterface.activeKeyboard }, set: function (b) { this.keyboardInterface.activeKeyboard = b; this.resetContext() }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "layerStore", { get: function () { return this.keyboardInterface.systemStores[g.KeyboardInterface.TSS_LAYER] }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "newLayerStore", {
                    get: function () { return this.keyboardInterface.systemStores[g.KeyboardInterface.TSS_NEWLAYER] },
                    enumerable: !1, configurable: !0
                }); Object.defineProperty(e.prototype, "oldLayerStore", { get: function () { return this.keyboardInterface.systemStores[g.KeyboardInterface.TSS_OLDLAYER] }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "layerId", { get: function () { return this.layerStore.value }, set: function (b) { this.layerStore.set(b) }, enumerable: !1, configurable: !0 }); e.prototype.defaultRuleBehavior = function (b, a, c) {
                    var d = g.Mock.from(a, c), h = new g.RuleBehavior, l = !1, e; if (b.isSynthetic || a.isSynthetic) if (l =
                        !0, g.DefaultOutput.isCommand(b)) h.triggersDefaultCommand = !0; else if (null != (e = g.DefaultOutput.forSpecialEmulation(b))) switch (e) { case g.EmulationKeystrokes.Backspace: this.keyboardInterface.defaultBackspace(a); break; case g.EmulationKeystrokes.Enter: a.handleNewlineAtCaret(); break; default: h.errorLog = "Unexpected 'special emulation' character (\\u" + e.kmwCharCodeAt(0).toString(16) + ") went unhandled!" } else l = !1; e = this.activeKeyboard && this.activeKeyboard.isMnemonic; if (!l) if (null != (l = g.DefaultOutput.forAny(b,
                            e))) if (e = g.DefaultOutput.forSpecialEmulation(b), e == g.EmulationKeystrokes.Backspace) this.keyboardInterface.defaultBackspace(a); else { if (e || g.DefaultOutput.isCommand(b)) return null; this.keyboardInterface.output(0, a, l) } else return null; if (h.errorLog) return h; b = a.buildTranscriptionFrom(d, b, c); h.transcription = b; return h
                }; e.prototype.setSyntheticEventDefaults = function (b) {
                    b.device.touchable || (b.Lstates |= this.stateKeys.K_CAPS ? g.Codes.modifierCodes.CAPS : g.Codes.modifierCodes.NO_CAPS, b.Lstates |= this.stateKeys.K_NUMLOCK ?
                        g.Codes.modifierCodes.NUM_LOCK : g.Codes.modifierCodes.NO_NUM_LOCK, b.Lstates |= this.stateKeys.K_SCROLL ? g.Codes.modifierCodes.SCROLL_LOCK : g.Codes.modifierCodes.NO_SCROLL_LOCK); b.kName && "U_" == b.kName.substr(0, 2) && (b.LisVirtualKey = !1); "undefined" == typeof b.Lcode && (b.Lcode = this.getVKDictionaryCode(b.kName), b.Lcode || (b.Lcode = 1)); (b.Lmodifiers & g.Codes.modifierBitmasks.ALT_GR_SIM) == g.Codes.modifierBitmasks.ALT_GR_SIM && this.activeKeyboard.emulatesAltGr && (b.Lmodifiers &= ~g.Codes.modifierBitmasks.ALT_GR_SIM, b.Lmodifiers |=
                            g.Codes.modifierCodes.RALT)
                }; e.prototype.constructNullKeyEvent = function (b) { b = g.KeyEvent.constructNullKeyEvent(b); this.setSyntheticEventDefaults(b); return b }; e.prototype.processNewContextEvent = function (b, a) { return this.activeKeyboard ? this.keyboardInterface.processNewContextEvent(a, this.constructNullKeyEvent(b)) : null }; e.prototype.processPostKeystroke = function (b, a) { return this.activeKeyboard ? this.keyboardInterface.processPostKeystroke(a, this.constructNullKeyEvent(b)) : null }; e.prototype.processKeystroke =
                    function (b, a) { if (this.activeKeyboard && 0 != b.Lcode) { this.installInterface(); var c = this.keyboardInterface.processKeystroke(a, b) } if (!c || c.triggerKeyDefault) { b.Lcode = b.vkCode || b.Lcode; this.keyboardInterface.activeTargetOutput = a; if (b = this.defaultRuleBehavior(b, a, !1)) c ? c.mergeInDefaults(b) : c = b, c.triggerKeyDefault = !1; this.keyboardInterface.activeTargetOutput = null } return c }; e.setMnemonicCode = function (b, a, c) {
                        if (b.Lcode != g.Codes.keyCodes.K_SPACE) {
                            var d = new g.KeyEvent, h; for (h in b) d[h] = b[h]; d.kName = "K_xxxx";
                            d.Lmodifiers = a ? 16 : 0; a = g.DefaultOutput.forAny(d, !0); b.vkCode = b.Lcode; a ? b.Lcode = a.charCodeAt(0) : e.isModifier(b) || delete b.Lcode
                        } c && (65 <= b.Lcode && 90 >= b.Lcode || 97 <= b.Lcode && 122 >= b.Lcode) && (b.Lmodifiers ^= 16, b.Lcode ^= 32)
                    }; e.getModifierState = function (b) {
                        var a = 0; 0 <= b.indexOf("shift") && (a |= g.Codes.modifierCodes.SHIFT); var c = !1; 0 <= b.indexOf("leftctrl") && (a |= g.Codes.modifierCodes.LCTRL, c = !0); 0 <= b.indexOf("rightctrl") && (a |= g.Codes.modifierCodes.RCTRL, c = !0); 0 <= b.indexOf("ctrl") && !c && (a |= g.Codes.modifierCodes.CTRL);
                        c = !1; 0 <= b.indexOf("leftalt") && (a |= g.Codes.modifierCodes.LALT, c = !0); 0 <= b.indexOf("rightalt") && (a |= g.Codes.modifierCodes.RALT, c = !0); 0 <= b.indexOf("alt") && !c && (a |= g.Codes.modifierCodes.ALT); return a
                    }; e.getStateFromLayer = function (b) { var a = 0; return a = 0 <= b.indexOf("caps") ? a | g.Codes.modifierCodes.CAPS : a | g.Codes.modifierCodes.NO_CAPS }; e.prototype.getVKDictionaryCode = function (b) {
                        var a = this.activeKeyboard; if (!a.scriptObject.VKDictionary) {
                            var c = []; if ("string" == typeof a.scriptObject.KVKD) for (var d = a.scriptObject.KVKD.split(" "),
                                h = 0; h < d.length; h++)c[d[h].toUpperCase()] = h + 256; a.scriptObject.VKDictionary = c
                        } return (b = a.scriptObject.VKDictionary[b.toUpperCase()]) ? b : 0
                    }; e.prototype._UpdateVKShift = function (b) {
                        var a = 0, c = ["CAPS", "NUM_LOCK", "SCROLL_LOCK"], d = ["K_CAPS", "K_NUMLOCK", "K_SCROLL"]; if (!this.activeKeyboard) return !0; if (b) {
                            a = b.Lmodifiers; this.activeKeyboard.isChiral && this.activeKeyboard.emulatesAltGr && (this.modStateFlags & g.Codes.modifierBitmasks.ALT_GR_SIM) == g.Codes.modifierBitmasks.ALT_GR_SIM && (a |= g.Codes.modifierBitmasks.ALT_GR_SIM,
                                a &= ~g.Codes.modifierCodes.RALT); for (var h = 0; h < c.length; h++)b.Lstates & g.Codes.stateBitmasks[c[h]] && (this.stateKeys[d[h]] = !!(b.Lstates & g.Codes.modifierCodes[c[h]]))
                        } this.updateStates(); this.activeKeyboard.isMnemonic && this.stateKeys.K_CAPS && (b && e.isModifier(b) || (a ^= g.Codes.modifierCodes.SHIFT)); this.layerId = this.getLayerId(a); return !0
                    }; e.prototype.updateStates = function () {
                        for (var b = ["CAPS", "NUM_LOCK", "SCROLL_LOCK"], a = ["K_CAPS", "K_NUMLOCK", "K_SCROLL"], c = 0; c < a.length; c++) {
                            var d = b[c], h = "NO_" + b[c]; this.stateKeys[a[c]] ?
                                (this.modStateFlags |= g.Codes.modifierCodes[d], this.modStateFlags &= ~g.Codes.modifierCodes[h]) : (this.modStateFlags &= ~g.Codes.modifierCodes[d], this.modStateFlags |= g.Codes.modifierCodes[h])
                        }
                    }; e.prototype.getLayerId = function (b) { return f.keyboards.Layouts.getLayerId(b) }; e.prototype.selectLayer = function (b) {
                        var a = b.kName, c = b.kNextLayer, d = this.activeKeyboard && this.activeKeyboard.isChiral; "number" == typeof c && (c = this.getLayerId(16 * c)); if (!c) switch (a) {
                            case "K_LSHIFT": case "K_RSHIFT": case "K_SHIFT": c = "shift";
                                break; case "K_LCONTROL": case "K_LCTRL": if (d) { c = "leftctrl"; break } case "K_RCONTROL": case "K_RCTRL": if (d) { c = "rightctrl"; break } case "K_CTRL": c = "ctrl"; break; case "K_LMENU": case "K_LALT": if (d) { c = "leftalt"; break } case "K_RMENU": case "K_RALT": if (d) { c = "rightalt"; break } case "K_ALT": c = "alt"; break; case "K_ALTGR": c = d ? "leftctrl-rightalt" : "ctrl-alt"; break; case "K_CURRENCIES": case "K_NUMERALS": case "K_SHIFTED": case "K_UPPER": case "K_LOWER": case "K_SYMBOLS": c = "default"
                        }if (!c) return !1; this.updateLayer(b, c); return !0
                    };
                e.prototype.updateLayer = function (b, a) {
                    var c = this.layerId, d = c; if (a == c && b.device.formFactor != f.utils.FormFactor.Desktop) return !1; var h = a, l; if (b.device.formFactor == f.utils.FormFactor.Desktop) {
                        var m = "leftctrl rightctrl ctrl leftalt rightalt alt shift".split(" "); for (l = 0; l < m.length; l++)h = h.replace(m[l] + "-", ""), h = h.replace(m[l], ""); if ("default" == c || "numeric" == c || "symbol" == c || "currency" == c || "" != h) d = a; else {
                            c = e.getModifierState(d); for (l = 0; l < m.length; l++)d = d.replace(m[l] + "-", ""), d = d.replace(m[l], ""); switch (a) {
                                case "shift": c ^=
                                    g.Codes.modifierCodes.SHIFT; break; case "leftctrl": c ^= g.Codes.modifierCodes.LCTRL; break; case "rightctrl": c ^= g.Codes.modifierCodes.RCTRL; break; case "ctrl": c ^= g.Codes.modifierCodes.CTRL; break; case "leftalt": c ^= g.Codes.modifierCodes.LALT; break; case "rightalt": c ^= g.Codes.modifierCodes.RALT; break; case "alt": c ^= g.Codes.modifierCodes.ALT; break; default: d = a
                            }"default" != d && (d = "" == d ? this.getLayerId(c) : this.getLayerId(c) + "-" + d)
                        } "" == d && (d = "default")
                    } else d = a; this.activeKeyboard.layout(b.device.formFactor).getLayer(d) ?
                        this.layerId = d : this.layerId = "default"; this.modStateFlags = g.KeyboardProcessor.getModifierState(this.layerId) | b.Lstates
                }; e.isModifier = function (b) { switch (b.Lcode) { case 16: case 17: case 18: case 20: case 144: case 145: return !0; default: return !1 } }; e.prototype.doModifierPress = function (b, a, c) {
                    if (!this.activeKeyboard) return !1; if (8 == b.Lcode) a.deadkeys().clear(); else if (e.isModifier(b)) return this.activeKeyboard.notify(b.Lcode, a, c ? 1 : 0), b.device.touchable ? !0 : this._UpdateVKShift(b); b.LmodifierChange && (this.activeKeyboard.notify(0,
                        a, 1), b.device.touchable || this._UpdateVKShift(b)); return !1
                }; e.prototype.resetContext = function () { this.layerId = "default"; this.keyboardInterface.resetContextCache(); this.contextDevice.touchable || this._UpdateVKShift(null) }; e.prototype.setNumericLayer = function (b) { this.activeKeyboard && this.activeKeyboard.layout(b.formFactor).getLayer("numeric") && (this.layerId = "numeric") }; e.DEFAULT_OPTIONS = { baseLayout: "us" }; return e
            }(); g.KeyboardProcessor = k
        })(f.text || (f.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function () { var f = com.keyman.text; "undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports = f.KeyboardProcessor, f.KeyboardProcessor.com = com) })(); (function (f) { (function (f) { var g = function () { return function (f, e, b) { this.interface = f; this.keyboard = e; this.touchEnabled = b || !1 } }(); f.AttachmentInfo = g })(f.keyman || (f.keyman = {})) })(com || (com = {})); (function (f) { f.keyman || (f.keyman = {}) })(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            g.KeyboardInterface.prototype.registerKeyboard = function (g) { f.keyman.singleton.keyboardManager._registerKeyboard(g) }; g.KeyboardInterface.prototype.registerStub = function (g) { var e = f.keyman.singleton.keyboardManager; if (e.keymanweb.initialized) for (var b = 0; b < e.keyboardStubs.length; b++)if (e.keyboardStubs[b].KI == g.KI && ("" == g.KLC || e.keyboardStubs[b].KLC == g.KLC)) return 1; e._registerStub(g); return null }; g.KeyboardInterface.prototype.insertText = function (g, e) {
                var b = f.keyman.singleton;
                this.resetContextCache(); var a = this.activeTargetOutput ? this.activeTargetOutput : k.dom.Utils.getOutputTarget(); return null != a ? (b.uiManager.setActivatingUI(!0), k.dom.DOMEventHandlers.states._IgnoreNextSelChange = 100, b.domManager.focusLastActiveElement(), k.dom.DOMEventHandlers.states._IgnoreNextSelChange = 0, null != g && this.output(0, a, g), "undefined" !== typeof e && null !== e && this.deadkeyOutput(0, a, e), a.invalidateSelection(), !0) : !1
            }; g.KeyboardInterface.prototype.saveFocus = function () {
                k.dom.DOMEventHandlers.states._IgnoreNextSelChange =
                1
            }; g.KeyboardInterface.prototype.getLastActiveElement = function () { return k.dom.Utils.getOutputTarget() }; g.KeyboardInterface.prototype.focusLastActiveElement = function () { f.keyman.singleton.domManager.focusLastActiveElement() }; g.KeyboardInterface.prototype.hideHelp = function () { f.keyman.singleton.osk.startHide(!0) }; g.KeyboardInterface.prototype.showHelp = function (g, e) { var b = f.keyman.singleton; b.osk instanceof k.osk.FloatingOSKView ? b.osk.presentAtPosition(g, e) : b.osk.present() }; g.KeyboardInterface.prototype.showPinnedHelp =
                function () { var g = f.keyman.singleton; !(g.osk instanceof k.osk.FloatingOSKView) || g.core.activeKeyboard.isCJK && this.ruleBehavior || (g.osk.userPositioned = !0); g.osk.present() }; g.KeyboardInterface.prototype.GetLastActiveElement = g.KeyboardInterface.prototype.getLastActiveElement; g.KeyboardInterface.prototype.FocusLastActiveElement = g.KeyboardInterface.prototype.focusLastActiveElement; g.KeyboardInterface.prototype.HideHelp = g.KeyboardInterface.prototype.hideHelp; g.KeyboardInterface.prototype.ShowHelp = g.KeyboardInterface.prototype.showHelp;
            g.KeyboardInterface.prototype.ShowPinnedHelp = g.KeyboardInterface.prototype.showPinnedHelp
        })(k.text || (k.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function () {
                function e() { } e._GetEventKeyCode = function (b) { return b.keyCode ? b.keyCode : b.which ? b.which : null }; e._GetKeyEventProperties = function (b, a) {
                    a = f.keyman.singleton; var c = a.core, d = new k.text.KeyEvent; if (!0 === b.cancelBubble) return null; d.Lcode = this._GetEventKeyCode(b); if (null == d.Lcode) return null; var h = c.keyboardProcessor.modStateFlags, l = !1, e = !1; var g = k.text.Codes.keyCodes; switch (d.Lcode) {
                        case g.K_CTRL: case g.K_LCTRL: case g.K_RCTRL: case g.K_CONTROL: case g.K_LCONTROL: case g.K_RCONTROL: l =
                            !0; break; case g.K_LMENU: case g.K_RMENU: case g.K_ALT: case g.K_LALT: case g.K_RALT: e = !0
                    }g = 0 | (b.getModifierState("Shift") ? 16 : 0); var n = k.text.Codes.modifierCodes; b.getModifierState("Control") && (g |= 0 != b.location && l ? 1 == b.location ? n.LCTRL : n.RCTRL : h & 3); b.getModifierState("Alt") && (g |= 0 != b.location && e ? 1 == b.location ? n.LALT : n.RALT : h & 12); d.Lstates = 0; d.Lstates |= b.getModifierState("CapsLock") ? n.CAPS : n.NO_CAPS; d.Lstates |= b.getModifierState("NumLock") ? n.NUM_LOCK : n.NO_NUM_LOCK; d.Lstates |= b.getModifierState("ScrollLock") ?
                        n.SCROLL_LOCK : n.NO_SCROLL_LOCK; g |= d.Lstates; d.LmodifierChange = c.keyboardProcessor.modStateFlags != g; c.keyboardProcessor.modStateFlags = g; l = n.RALT | n.LCTRL; (h & l) == l && (g & l) != l && (g &= ~l); g & n.RALT && (g &= ~n.LCTRL); l = k.text.Codes.modifierBitmasks; (h = c.activeKeyboard) && h.isChiral ? (d.Lmodifiers = g & l.CHIRAL, h.emulatesAltGr && (d.Lmodifiers & l.ALT_GR_SIM) == l.ALT_GR_SIM && (d.Lmodifiers ^= l.ALT_GR_SIM, d.Lmodifiers |= n.RALT)) : d.Lmodifiers = g & 16 | (g & (n.LCTRL | n.RCTRL) ? 32 : 0) | (g & (n.LALT | n.RALT) ? 64 : 0); d.Lmodifiers |= b.metaKey ? n.META :
                            0; d.device = a.util.physicalDevice.coreSpec; !a.isEmbedded && d.device.browser == k.utils.Browser.Firefox && k.KeyMapping.browserMap.FF["k" + d.Lcode] && (d.Lcode = k.KeyMapping.browserMap.FF["k" + d.Lcode]); h && h.isMnemonic && k.text.KeyboardProcessor.setMnemonicCode(d, b.getModifierState("Shift"), b.getModifierState("CapsLock")); d.LisVirtualKey = "undefined" != typeof b.charCode && null != b.charCode && (0 == b.charCode || 0 != (d.Lmodifiers & 111)) || "keypress" != b.type; d.isSynthetic = !1; h && !h.isMnemonic && ((b = k.KeyMapping.languageMap[c.keyboardProcessor.baseLayout]) &&
                                b["k" + d.Lcode] && (d.Lcode = b["k" + d.Lcode]), h.definesPositionalOrMnemonic || d.Lmodifiers & 96 || (d = { Lcode: k.KeyMapping._USKeyCodeToCharCode(d), Lmodifiers: 0, LisVirtualKey: !1, vkCode: d.Lcode, Lstates: d.Lstates, kName: "", device: a.util.physicalDevice.coreSpec, isSynthetic: !1 })); return d
                }; e.getEventOutputTarget = function (b) { b = f.keyman.singleton.util.eventTarget(b); if (null == b) return null; 3 == b.nodeType && (b = b.parentNode); return g.Utils.getOutputTarget(b) }; e.keyDown = function (b) {
                    var a = f.keyman.singleton.core; g.DOMEventHandlers.states.swallowKeypress =
                        !1; var c = this._GetKeyEventProperties(b, !0); if (null == c) return !0; var d = e.getEventOutputTarget(b); (a = (a = a.processKeyEvent(c, d)) && !a.triggerKeyDefault) ? (b && b.preventDefault && (b.preventDefault(), b.stopPropagation()), g.DOMEventHandlers.states.swallowKeypress = !!c.Lcode, 8 == c.Lcode && (g.DOMEventHandlers.states.swallowKeypress = !1)) : g.DOMEventHandlers.states.swallowKeypress = !1; return !a
                }; e.keyUp = function (b) {
                    var a = f.keyman.singleton.core, c = this._GetKeyEventProperties(b, !1); if (null == c) return !0; b = e.getEventOutputTarget(b);
                    return a.keyboardProcessor.doModifierPress(c, b, !1)
                }; e.keyPress = function (b) {
                    var a = f.keyman.singleton, c = a.core, d = this._GetKeyEventProperties(b); if (null == d || d.LisVirtualKey) return !0; if (!c.activeKeyboard.isMnemonic) return !g.DOMEventHandlers.states.swallowKeypress || 32 > d.Lcode || a._BrowserIsSafari && 63232 < d.Lcode && 63744 > d.Lcode ? !0 : !1; a = e.getEventOutputTarget(b); if (g.DOMEventHandlers.states.swallowKeypress || c.keyboardInterface.processKeystroke(a, d)) return g.DOMEventHandlers.states.swallowKeypress = !1, b && b.preventDefault &&
                        (b.preventDefault(), b.stopPropagation()), !1; g.DOMEventHandlers.states.swallowKeypress = !1; return !0
                }; return e
            }(); g.PreProcessor = n
        })(k.dom || (k.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
__extends = this && this.__extends || function () { var f = function (k, g) { f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (f, e) { f.__proto__ = e } || function (f, e) { for (var b in e) Object.prototype.hasOwnProperty.call(e, b) && (f[b] = e[b]) }; return f(k, g) }; return function (k, g) { function n() { this.constructor = k } if ("function" !== typeof g && null !== g) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null"); f(k, g); k.prototype = null === g ? Object.create(g) : (n.prototype = g.prototype, new n) } }();
(function (f) {
    (function (k) {
        (function (g) {
            var k = function () { function a() { this._DisableInput = !1; this._IgnoreNextSelChange = 0; this._IgnoreBlurFocus = !1; this._SelectionControl = this._Selection = null } a.prototype.setFocusTimer = function () { this.focusing = !0; this.focusTimer = window.setTimeout(function () { this.focusing = !1 }.bind(this), 50) }; return a }(); g.CommonDOMStates = k; var e = function () {
                function a(b) {
                    this._ControlFocus = function (b) {
                        b = this.keyman.util.eventTarget(b); if (null == b) return !0; b.body && (b = b.body); if (b.ownerDocument &&
                            b instanceof b.ownerDocument.defaultView.HTMLInputElement) { var c = b.type.toLowerCase(); if ("text" != c && "search" != c) return !0 } c = a.states._lastActiveElement; 3 == b.nodeType && (b = b.parentNode); var d = b; b.ownerDocument && b instanceof b.ownerDocument.defaultView.HTMLIFrameElement && (this.keyman.domManager._AttachToIframe(b), b = b.contentWindow.document.body); this.keyman.domManager.lastActiveElement = b; this.keyman.domManager.activeElement = b; this.keyman.uiManager.justActivated ? this._BlurKeyboardSettings(b) : this._FocusKeyboardSettings(b,
                                c ? !1 : !0); if (this._CommonFocusHelper(b)) return !0; b.ownerDocument && b instanceof b.ownerDocument.defaultView.HTMLElement && this.keyman.domManager._SetTargDir(b); this.doControlFocused(d, this.keyman.domManager.lastActiveElement); return !0
                    }.bind(this); this._ControlBlur = function (b) {
                        var c = this.keyman.util.eventTarget(b); if (null == c) return !0; c.body && (c = c.body); if (a.states._IgnoreNextSelChange) return a.states._IgnoreNextSelChange--, b.cancelBubble = !0, b.stopPropagation(), !0; if (a.states._IgnoreBlurFocus) return b.cancelBubble =
                            !0, b.stopPropagation(), !0; 3 == c.nodeType && (c = c.parentNode); c.ownerDocument && c instanceof c.ownerDocument.defaultView.HTMLIFrameElement && (c = c.contentWindow.frameElement); this.keyman.domManager.lastActiveElement && this._BlurKeyboardSettings(this.keyman.domManager.lastActiveElement); this.keyman.domManager.activeElement = null; this.keyman.domManager.lastActiveElement = c; this.keyman.uiManager.justActivated = !1; var d = this.keyman.uiManager.isActivating, e = f.keyman.singleton.core.activeKeyboard; !d && e && e.notify(0,
                                g.Utils.getOutputTarget(c), 0); this.doControlBlurred(c, b, d); this.doChangeEvent(c); this.keyman.resetContext(); return !0
                    }.bind(this); this._KeyDown = function (b) { var c, d = this.keyman.core.activeKeyboard, e = this.keyman.util; if (a.states._DisableInput || null == d) return !0; d = e.eventTarget(b); if (e.device.touchable) { if (d && "undefined" != typeof d.kmwInput && 0 == d.kmwInput) return !0 } else if (0 <= (null === (c = null === d || void 0 === d ? void 0 : d.className) || void 0 === c ? void 0 : c.indexOf("kmw-disabled"))) return !0; return g.PreProcessor.keyDown(b) }.bind(this);
                    this._Click = function (a) { (a = a.target) && a.base && (a = a.base); f.keyman.singleton.core.processNewContextEvent(g.Utils.getOutputTarget(a)); return !0 }.bind(this); this._KeyPress = function (b) { return a.states._DisableInput || null == this.keyman.core.activeKeyboard ? !0 : g.PreProcessor.keyPress(b) }.bind(this); this._KeyUp = function (a) {
                        var b = g.PreProcessor._GetKeyEventProperties(a, !1); if (null == b) return !0; var c = g.PreProcessor.getEventOutputTarget(a), d = c.getElement(); return 13 != b.Lcode || (b = !1, c instanceof d.ownerDocument.defaultView.HTMLTextAreaElement &&
                            (b = !0), d.base && d.base instanceof d.base.ownerDocument.defaultView.HTMLTextAreaElement && (b = !0), b) ? g.PreProcessor.keyUp(a) : (d instanceof d.ownerDocument.defaultView.HTMLInputElement && ("search" == d.type || "submit" == d.type ? d.form.submit() : this.keyman.domManager.moveToNext(!1)), !0)
                    }.bind(this); this.keyman = b
                } a.prototype.doControlFocused = function (a, b) { var c = {}; c.target = a; c.activeControl = b; return this.keyman.util.callEvent("kmw.controlfocused", c) }; a.prototype.doControlBlurred = function (a, b, h) {
                    var c = {}; c.target =
                        a; c.event = b; c.isActivating = h; return this.keyman.util.callEvent("kmw.controlblurred", c)
                }; a.prototype._BlurKeyboardSettings = function (a, b, h) { var c = this.keyman.core.activeKeyboard ? this.keyman.core.activeKeyboard.id : "", d = this.keyman.keyboardManager.getActiveLanguage(); void 0 !== b && void 0 !== h && (c = b, d = h); a && null != a._kmwAttachment.keyboard ? (a._kmwAttachment.keyboard = c, a._kmwAttachment.languageCode = d) : (this.keyman.globalKeyboard = c, this.keyman.globalLanguageCode = d) }; a.prototype._FocusKeyboardSettings = function (a,
                    b) { var c; a && null != a._kmwAttachment.keyboard ? this.keyman.keyboardManager.setActiveKeyboard(a._kmwAttachment.keyboard, a._kmwAttachment.languageCode) : b || this.keyman.keyboardManager.setActiveKeyboard(this.keyman.globalKeyboard, this.keyman.globalLanguageCode); this.keyman.modelManager && (a = g.Utils.getOutputTarget(a), this.keyman.core.languageProcessor.invalidateContext(a, null === (c = this.keyman.core.keyboardProcessor) || void 0 === c ? void 0 : c.layerId)) }; a.prototype._CommonFocusHelper = function (c) {
                        var d, h = f.keyman.singleton,
                        l = this.keyman.uiManager; if (c.ownerDocument && c instanceof c.ownerDocument.defaultView.HTMLIFrameElement && !this.keyman.domManager._IsEditableIframe(c, 1)) return a.states._DisableInput = !0; a.states._DisableInput = !1; var e = g.Utils.getOutputTarget(c); h.util.device.touchable && e && this instanceof b && this.scrollBody(c); var k = h.core.activeKeyboard; l.justActivated || (c && e && e.deadkeys().clear(), k && k.notify(0, e, 1)); l.justActivated || a.states._SelectionControl == c || (l.isActivating = !1); l.justActivated = !1; (a.states._SelectionControl =
                            c) && e && window.setTimeout(function () { f.keyman.singleton.core.processNewContextEvent(e) }); h.core.languageProcessor.isActive && h.core.languageProcessor.predictFromTarget(e, null === (d = h.core.keyboardProcessor) || void 0 === d ? void 0 : d.layerId); return !1
                    }; a.prototype.doChangeEvent = function (b) { if (a.states.changed) { var c = new Event("change", { bubbles: !0, cancelable: !1 }); b.dispatchEvent(c) } a.states.changed = !1 }; a.states = new k; return a
            }(); g.DOMEventHandlers = e; var b = function (a) {
                function b(b) {
                    b = a.call(this, b) || this; b.dragEnd =
                        function (a) { a.stopPropagation(); this.firstTouch = null }.bind(b); return b
                } __extends(b, a); b.prototype.cancelInput = function () { this.keyman.domManager.activeElement = null; this.keyman.domManager.lastActiveElement = null; this.keyman.osk.hideNow() }; b.prototype.scrollBody = function (a) { var b = this.keyman.osk; if (a && b) { var c = g.Utils.getAbsoluteY(a), d = window.pageYOffset; c < d ? a = c - d : (a = c - d - (window.innerHeight - b._Box.offsetHeight - a.offsetHeight - 2), 0 > a && (a = 0)); 0 != a && window.scrollTo(0, a + window.pageYOffset) } }; return b
            }(e);
            g.DOMTouchHandlers = b
        })(k.dom || (k.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = k.text.DefaultOutput, e = k.text.Codes, b = n.isCommand, a = n.applyCommand; n.isCommand = function (a) { switch (n.codeForEvent(a)) { case e.keyCodes.K_TAB: case e.keyCodes.K_TABBACK: case e.keyCodes.K_TABFWD: return !0; default: return b(a) } }; n.applyCommand = function (b, d) {
                var c = n.codeForEvent(b), l = f.keyman.singleton.domManager; switch (c) {
                    case e.keyCodes.K_TAB: l.moveToNext(0 != (b.Lmodifiers & k.text.Codes.modifierCodes.SHIFT)); break; case e.keyCodes.K_TABBACK: l.moveToNext(!0); break;
                    case e.keyCodes.K_TABFWD: l.moveToNext(!1)
                }a(b, d)
            }
        })(k.dom || (k.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            k.text.prediction.LanguageProcessor.prototype.canEnable = function () { return "function" != typeof Worker ? (console.warn("WebWorkers are not supported by this browser."), !1) : !0 }; var n = k.text.RuleBehavior.prototype.finalize; k.text.RuleBehavior.prototype.finalize = function (e, b, a) {
                var c = f.keyman.singleton; n.call(this, e); a || (e = this.transcription.transform, ("" != e.insert || 0 < e.deleteLeft || 0 < e.deleteRight) && b instanceof g.targets.OutputTarget && b.getElement() == c.domManager.activeElement &&
                    (g.DOMEventHandlers.states.changed = !0), c.isEmbedded && (c.oninserttext(e.deleteLeft, e.insert, e.deleteRight), b instanceof g.targets.OutputTarget && c.refreshElementContent(b.getElement())))
            }
        })(k.dom || (k.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            (function (g) {
                var e = function (b) {
                    function a() { return null !== b && b.apply(this, arguments) || this } __extends(a, b); a.prototype.focus = function () { var a = this.getElement(); a.focus && a.focus() }; a.prototype.dispatchInputEventOn = function (a) { var b; window.InputEvent && (b = new InputEvent("input", { bubbles: !0, cancelable: !1 })); a && b && a.dispatchEvent(b) }; a.prototype.apply = function (a) {
                        b.prototype.apply.call(this, a); var c = f.keyman.singleton; if (c && c.oninserttext && c.isEmbedded) c.oninserttext(a.deleteLeft,
                            a.insert, a.deleteRight)
                    }; return a
                }(k.text.OutputTarget); g.OutputTarget = e
            })(g.targets || (g.targets = {}))
        })(k.dom || (k.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            (function (k) {
                var e = function (b) {
                    function a(a) { var c = b.call(this) || this; c.root = a; c._cachedSelectionStart = -1; return c } __extends(a, b); Object.defineProperty(a.prototype, "isSynthetic", { get: function () { return !1 }, enumerable: !1, configurable: !0 }); a.prototype.getElement = function () { return this.root }; a.prototype.clearSelection = function () {
                        this.getCaret(); this.root.value = this.root.value._kmwSubstring(0, this.processedSelectionStart) + this.root.value._kmwSubstring(this.processedSelectionEnd);
                        this.setCaret(this.processedSelectionStart)
                    }; a.prototype.isSelectionEmpty = function () { return this.root.selectionStart == this.root.selectionEnd }; a.prototype.hasSelection = function () { return !0 }; a.prototype.invalidateSelection = function () { this._cachedSelectionStart = -1 }; a.prototype.getCaret = function () {
                        this.root.selectionStart != this._cachedSelectionStart && (this._cachedSelectionStart = this.root.selectionStart, this.processedSelectionStart = this.root.value._kmwCodeUnitToCodePoint(this.root.selectionStart), this.processedSelectionEnd =
                            this.root.value._kmwCodeUnitToCodePoint(this.root.selectionEnd)); return "forward" == this.root.selectionDirection ? this.processedSelectionEnd : this.processedSelectionStart
                    }; a.prototype.getDeadkeyCaret = function () { return this.getCaret() }; a.prototype.setCaret = function (a) { this.setSelection(a, a, "none") }; a.prototype.setSelection = function (a, b, h) {
                        var c = this.root.value._kmwCodePointToCodeUnit(a), d = this.root.value._kmwCodePointToCodeUnit(b); this.root.setSelectionRange(c, d, h); this.processedSelectionStart = a; this.processedSelectionEnd =
                            b; g.Utils.forceScroll(this.root)
                    }; a.prototype.getSelectionDirection = function () { return this.root.selectionDirection }; a.prototype.getTextBeforeCaret = function () { this.getCaret(); return this.getText()._kmwSubstring(0, this.processedSelectionStart) }; a.prototype.setTextBeforeCaret = function (a) {
                        this.getCaret(); var b = this.processedSelectionEnd - this.processedSelectionStart, c = this.getSelectionDirection(), l = a._kmwLength(); this.root.value = a + this.getText()._kmwSubstring(this.processedSelectionStart); this.setSelection(l,
                            l + b, c)
                    }; a.prototype.setTextAfterCaret = function (a) { this.getCaret(); var b = this.getSelectionDirection(); this.root.value = this.getTextBeforeCaret() + a; this.setSelection(this.processedSelectionStart, this.processedSelectionEnd, b) }; a.prototype.getTextAfterCaret = function () { this.getCaret(); return this.getText()._kmwSubstring(this.processedSelectionEnd) }; a.prototype.getText = function () { return this.root.value }; a.prototype.deleteCharsBeforeCaret = function (a) {
                        if (0 < a) {
                            var b = this.getTextBeforeCaret(), c = this.processedSelectionStart;
                            a > c && (a = c); this.adjustDeadkeys(-a); this.setTextBeforeCaret(b.kmwSubstring(0, c - a)); this.setCaret(c - a)
                        }
                    }; a.prototype.insertTextBeforeCaret = function (a) { if (a) { var b = this.getCaret(), c = this.getTextBeforeCaret(), l = this.getText()._kmwSubstring(this.processedSelectionStart); this.adjustDeadkeys(a._kmwLength()); this.root.value = c + a + l; this.setCaret(b + a._kmwLength()) } }; a.prototype.handleNewlineAtCaret = function () { a.newlineHandler(this.root) }; a.newlineHandler = function (a) {
                        !a || "search" != a.type && "submit" != a.type ? f.keyman.singleton &&
                            f.keyman.singleton.domManager.moveToNext(!1) : (a.disabled = !1, a.form.submit())
                    }; a.prototype.doInputEvent = function () { this.dispatchInputEventOn(this.root) }; return a
                }(k.OutputTarget); k.Input = e
            })(g.targets || (g.targets = {}))
        })(k.dom || (k.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            (function (g) {
                var e = function (b) {
                    function a(a) { var c = b.call(this) || this; c.root = a; c._cachedSelectionStart = -1; return c } __extends(a, b); Object.defineProperty(a.prototype, "isSynthetic", { get: function () { return !1 }, enumerable: !1, configurable: !0 }); a.prototype.getElement = function () { return this.root }; a.prototype.clearSelection = function () {
                        this.getCaret(); this.root.value = this.root.value._kmwSubstring(0, this.processedSelectionStart) + this.root.value._kmwSubstring(this.processedSelectionEnd);
                        this.setCaret(this.processedSelectionStart)
                    }; a.prototype.isSelectionEmpty = function () { return this.root.selectionStart == this.root.selectionEnd }; a.prototype.hasSelection = function () { return !0 }; a.prototype.invalidateSelection = function () { this._cachedSelectionStart = -1 }; a.prototype.getCaret = function () {
                        this.root.selectionStart != this._cachedSelectionStart && (this._cachedSelectionStart = this.root.selectionStart, this.processedSelectionStart = this.root.value._kmwCodeUnitToCodePoint(this.root.selectionStart), this.processedSelectionEnd =
                            this.root.value._kmwCodeUnitToCodePoint(this.root.selectionEnd)); return "forward" == this.root.selectionDirection ? this.processedSelectionEnd : this.processedSelectionStart
                    }; a.prototype.getDeadkeyCaret = function () { return this.getCaret() }; a.prototype.setCaret = function (a) { this.setSelection(a, a, "none") }; a.prototype.setSelection = function (a, b, h) {
                        var c = this.root.value._kmwCodePointToCodeUnit(a), d = this.root.value._kmwCodePointToCodeUnit(b); this.root.setSelectionRange(c, d, h); this.processedSelectionStart = a; this.processedSelectionEnd =
                            b; f.Utils.forceScroll(this.root)
                    }; a.prototype.getSelectionDirection = function () { return this.root.selectionDirection }; a.prototype.getTextBeforeCaret = function () { this.getCaret(); return this.getText()._kmwSubstring(0, this.processedSelectionStart) }; a.prototype.setTextBeforeCaret = function (a) {
                        this.getCaret(); var b = this.processedSelectionEnd - this.processedSelectionStart, c = this.getSelectionDirection(), l = a._kmwLength(); this.root.value = a + this.getText()._kmwSubstring(this.processedSelectionStart); this.setSelection(l,
                            l + b, c)
                    }; a.prototype.setTextAfterCaret = function (a) { this.getCaret(); var b = this.getSelectionDirection(); this.root.value = this.getTextBeforeCaret() + a; this.setSelection(this.processedSelectionStart, this.processedSelectionEnd, b) }; a.prototype.getTextAfterCaret = function () { this.getCaret(); return this.getText()._kmwSubstring(this.processedSelectionEnd) }; a.prototype.getText = function () { return this.root.value }; a.prototype.deleteCharsBeforeCaret = function (a) {
                        if (0 < a) {
                            var b = this.getTextBeforeCaret(), c = this.processedSelectionStart;
                            a > c && (a = c); this.adjustDeadkeys(-a); this.setTextBeforeCaret(b.kmwSubstring(0, c - a)); this.setCaret(c - a)
                        }
                    }; a.prototype.insertTextBeforeCaret = function (a) { if (a) { var b = this.getCaret(), c = this.getTextBeforeCaret(), l = this.getText()._kmwSubstring(this.processedSelectionStart); this.adjustDeadkeys(a._kmwLength()); this.root.value = c + a + l; this.setCaret(b + a._kmwLength()) } }; a.prototype.handleNewlineAtCaret = function () { this.insertTextBeforeCaret("\n") }; a.prototype.doInputEvent = function () { this.dispatchInputEventOn(this.root) };
                    return a
                }(g.OutputTarget); g.TextArea = e
            })(f.targets || (f.targets = {}))
        })(f.dom || (f.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            (function (f) {
                var e = function () { return function (a, b) { this.node = a; this.offset = b } }(), b = function () { return function (a, b) { this.start = a; this.end = b } }(), a = function (a) {
                    function c(b) { if (b.isContentEditable) { var c = a.call(this) || this; c.root = b } else throw "Specified element is not already content-editable!"; return c } __extends(c, a); Object.defineProperty(c.prototype, "isSynthetic", { get: function () { return !1 }, enumerable: !1, configurable: !0 }); c.prototype.getElement = function () { return this.root };
                    c.prototype.isSelectionEmpty = function () { return this.hasSelection() ? this.root.ownerDocument.getSelection().isCollapsed : !0 }; c.prototype.hasSelection = function () { var a = this.root.ownerDocument.getSelection(); return this.root != a.anchorNode && !this.root.contains(a.anchorNode) || this.root != a.focusNode && !this.root.contains(a.focusNode) ? !1 : !0 }; c.prototype.clearSelection = function () { if (this.hasSelection()) { var a = this.root.ownerDocument.getSelection(); a.isCollapsed || a.deleteFromDocument() } else console.warn("Attempted to clear an unowned Selection!") };
                    c.prototype.invalidateSelection = function () { }; c.prototype.getCarets = function () { var a = this.root.ownerDocument.getSelection(), c = a.anchorNode.compareDocumentPosition(a.focusNode); if (a.isCollapsed) return c = new e(a.anchorNode, a.anchorOffset), new b(c, c); var d = new e(a.anchorNode, a.anchorOffset); a = new e(a.focusNode, a.focusOffset); d.node == a.node && (c = 0 < a.offset - d.offset ? 2 : 4); return c & 2 ? new b(d, a) : new b(a, d) }; c.prototype.getDeadkeyCaret = function () { return this.getTextBeforeCaret().kmwLength() }; c.prototype.getTextBeforeCaret =
                        function () { if (this.hasSelection()) { var a = this.getCarets().start; return 3 != a.node.nodeType ? "" : a.node.textContent.substr(0, a.offset) } }; c.prototype.getTextAfterCaret = function () { if (!this.hasSelection()) return ""; var a = this.getCarets().end; return 3 != a.node.nodeType ? "" : a.node.textContent.substr(a.offset) }; c.prototype.getText = function () { return this.root.innerText }; c.prototype.deleteCharsBeforeCaret = function (a) {
                            if (this.hasSelection() && !(0 >= a)) {
                                var b = this.getCarets().start; a > b.offset && (a = b.offset); if (3 != b.node.nodeType) console.warn("Deletion of characters requested without available context!");
                                else { var c = this.root.ownerDocument.createRange(), d = b.offset - b.node.nodeValue.substr(0, b.offset)._kmwSubstr(-a).length; c.setStart(b.node, d); c.setEnd(b.node, b.offset); this.adjustDeadkeys(-a); c.deleteContents() }
                            }
                        }; c.prototype.insertTextBeforeCaret = function (a) {
                            if (this.hasSelection()) {
                                var b = this.getCarets().start, c = a._kmwLength(), d = this.root.ownerDocument.getSelection(); if (0 != c) {
                                    this.adjustDeadkeys(c); c = this.root.ownerDocument.createRange(); if (3 == b.node.nodeType) {
                                        var h = b.node; h.insertData(b.offset, a);
                                        c.setStart(h, b.offset + a.length)
                                    } else { h = b.node.ownerDocument.createTextNode(a); var e = this.root.ownerDocument.createRange(); e.setStart(b.node, b.offset); e.collapse(!0); e.insertNode(h); c.setStart(h, a.length) } c.collapse(!0); d.removeAllRanges(); try { d.addRange(c) } catch (v) { b.node.parentElement.scrollIntoView(), d.addRange(c) } d.collapseToEnd()
                                }
                            }
                        }; c.prototype.handleNewlineAtCaret = function () { }; c.prototype.setTextAfterCaret = function (a) {
                            if (this.hasSelection()) {
                                var b = this.getCarets().end, c = a._kmwLength(); this.root.ownerDocument.getSelection();
                                0 != c && (3 == b.node.nodeType ? (c = b.node, c.replaceData(b.offset, c.length, a)) : (a = b.node.ownerDocument.createTextNode(a), c = this.root.ownerDocument.createRange(), c.setStart(b.node, b.offset), c.collapse(!0), c.insertNode(a)))
                            }
                        }; c.prototype.doInputEvent = function () { this.dispatchInputEventOn(this.root) }; return c
                }(f.OutputTarget); f.ContentEditable = a
            })(f.targets || (f.targets = {}))
        })(f.dom || (f.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            (function (f) {
                var e = function () { return function (a, b) { this.node = a; this.offset = b } }(), b = function () { return function (a, b) { this.start = a; this.end = b } }(), a = function () { return function (a, b) { this.cmd = a; this.stateType = b } }(), c = function (c) {
                    function d(a) {
                        var b = c.call(this) || this; b.root = a; if (a.contentWindow && a.contentWindow.document && "on" == a.contentWindow.document.designMode) b.doc = a.contentWindow.document, b.docRoot = a.contentWindow.document.documentElement; else throw "Specified IFrame is not in design-mode!";
                        return b
                    } __extends(d, c); Object.defineProperty(d.prototype, "isSynthetic", { get: function () { return !1 }, enumerable: !1, configurable: !0 }); d.prototype.getElement = function () { return this.root }; d.prototype.focus = function () { this.doc.defaultView.focus() }; d.prototype.isSelectionEmpty = function () { return this.hasSelection() ? this.doc.getSelection().isCollapsed : !0 }; d.prototype.hasSelection = function () { this.doc.getSelection(); document.getSelection(); return !0 }; d.prototype.clearSelection = function () {
                        if (this.hasSelection()) {
                            var a =
                                this.doc.getSelection(); a.isCollapsed || a.deleteFromDocument()
                        } else console.warn("Attempted to clear an unowned Selection!")
                    }; d.prototype.invalidateSelection = function () { }; d.prototype.getCarets = function () {
                        var a = this.doc.getSelection(), c = a.anchorNode.compareDocumentPosition(a.focusNode); if (a.isCollapsed) return c = new e(a.anchorNode, a.anchorOffset), new b(c, c); var d = new e(a.anchorNode, a.anchorOffset); a = new e(a.focusNode, a.focusOffset); d.node == a.node && (c = 0 < a.offset - d.offset ? 2 : 4); return c & 2 ? new b(d, a) : new b(a,
                            d)
                    }; d.prototype.getDeadkeyCaret = function () { return this.getTextBeforeCaret().kmwLength() }; d.prototype.getTextBeforeCaret = function () { if (this.hasSelection()) { var a = this.getCarets().start; return 3 != a.node.nodeType ? "" : a.node.textContent.substr(0, a.offset) } }; d.prototype.getTextAfterCaret = function () { if (!this.hasSelection()) return ""; var a = this.getCarets().end; return 3 != a.node.nodeType ? "" : a.node.textContent.substr(a.offset) }; d.prototype.getText = function () { return this.docRoot.innerText }; d.prototype.deleteCharsBeforeCaret =
                        function (a) { if (this.hasSelection() && !(0 >= a)) { var b = this.getCarets().start; a > b.offset && (a = b.offset); if (3 != b.node.nodeType) console.warn("Deletion of characters requested without available context!"); else { var c = this.doc.createRange(), d = b.offset - b.node.nodeValue.substr(0, b.offset)._kmwSubstr(-a).length; c.setStart(b.node, d); c.setEnd(b.node, b.offset); this.adjustDeadkeys(-a); c.deleteContents() } } }; d.prototype.insertTextBeforeCaret = function (a) {
                            if (this.hasSelection()) {
                                var b = this.getCarets().start, c = a._kmwLength(),
                                d = this.doc.getSelection(); if (0 != c) { this.adjustDeadkeys(c); c = this.root.ownerDocument.createRange(); if (3 == b.node.nodeType) { var h = b.node; h.insertData(b.offset, a); c.setStart(h, b.offset + a.length) } else { h = this.doc.createTextNode(a); var l = this.doc.createRange(); l.setStart(b.node, b.offset); l.collapse(!0); l.insertNode(h); c.setStart(h, a.length) } c.collapse(!0); d.removeAllRanges(); try { d.addRange(c) } catch (r) { b.node.parentElement.scrollIntoView(), d.addRange(c) } d.collapseToEnd() }
                            }
                        }; d.prototype.handleNewlineAtCaret =
                            function () { }; d.prototype.setTextAfterCaret = function (a) { if (this.hasSelection()) { var b = this.getCarets().end, c = a._kmwLength(); this.doc.getSelection(); 0 != c && (3 == b.node.nodeType ? (c = b.node, c.replaceData(b.offset, c.length, a)) : (a = b.node.ownerDocument.createTextNode(a), c = this.root.ownerDocument.createRange(), c.setStart(b.node, b.offset), c.collapse(!0), c.insertNode(a))) } }; d.prototype.saveProperties = function () {
                                var b = [new a("backcolor", 1), new a("fontname", 1), new a("fontsize", 1), new a("forecolor", 1), new a("bold",
                                    0), new a("italic", 0), new a("strikethrough", 0), new a("subscript", 0), new a("superscript", 0), new a("underline", 0)]; this.doc.defaultView && b.push(new a("hilitecolor", 1)); for (var c = 0; c < b.length; c++) { var d = b[c]; d.cache = 1 == d.stateType ? this.doc.queryCommandValue(d.cmd) : this.doc.queryCommandState(d.cmd) } this.commandCache = b
                            }; d.prototype.restoreProperties = function (a) {
                                this.commandCache || console.error("No command cache exists to restore!"); for (var b = 0; b < this.commandCache.length; b++) {
                                    var c = this.commandCache[b];
                                    1 == c.stateType ? this.doc.queryCommandValue(c.cmd) != c.cache && (a && a(), this.doc.execCommand(c.cmd, !1, c.cache)) : this.doc.queryCommandState(c.cmd) != c.cache && (a && a(), this.doc.execCommand(c.cmd, !1, null))
                                }
                            }; d.prototype.doInputEvent = function () { this.dispatchInputEventOn(this.root) }; return d
                }(f.OutputTarget); f.DesignIFrame = c
            })(f.targets || (f.targets = {}))
        })(f.dom || (f.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) { (function (f) { (function (f) { (function (g) { g.wrapElement = function (e) { return f.Utils.instanceof(e, "HTMLInputElement") ? new g.Input(e) : f.Utils.instanceof(e, "HTMLTextAreaElement") ? new g.TextArea(e) : f.Utils.instanceof(e, "HTMLIFrameElement") && e.contentWindow && e.contentWindow.document && "on" == e.contentWindow.document.designMode ? new g.DesignIFrame(e) : e.isContentEditable ? new g.ContentEditable(e) : null } })(f.targets || (f.targets = {})) })(f.dom || (f.dom = {})) })(f.keyman || (f.keyman = {})) })(com || (com = {}));
(function (f) { (function (k) { (function (g) { var k = function () { function e() { } e.prototype.loadStore = function (b, a) { b = f.keyman.singleton.util.loadCookie("KeymanWeb_" + b + "_Option_" + a); "undefined" != typeof b[a] && (b[a] = decodeURIComponent(b[a])); return b || {} }; e.prototype.saveStore = function (b, a, c) { b = "KeymanWeb_" + b + "_Option_" + a; c[a] = encodeURIComponent(c[a]); f.keyman.singleton.util.saveCookie(b, c) }; return e }(); g.VariableStoreCookieSerializer = k })(k.dom || (k.dom = {})) })(f.keyman || (f.keyman = {})) })(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function () { function b(a) { this.e = a; this.c = a.style.backgroundColor } b.prototype.reset = function () { this.e.style.backgroundColor = this.c }; return b }(), e = function () {
                function b(a) {
                    this.inputList = []; this.sortedInputs = []; this._BeepObjects = []; this._BeepTimeout = 0; this.deactivateOnRelease = this.deactivateOnScroll = !1; this.nonKMWTouchHandler = function (a) { g.DOMEventHandlers.states.focusing = !1; clearTimeout(g.DOMEventHandlers.states.focusTimer); this.keyman.osk.hideNow() }.bind(this);
                    this._EnablementMutationObserverCore = function (a) {
                        for (var b = 0; b < a.length; b++) {
                            var c = a[b], l = c.oldValue ? 0 <= c.oldValue.indexOf("kmw-disabled") : !1, e = 0 <= c.target.className.indexOf("kmw-disabled"); l && !e ? this._EnableControl(c.target) : !l && e && this._DisableControl(c.target); !e && "readonly" == c.attributeName && (l = c.oldValue ? null != c.oldValue : !1, e = c.target, e instanceof e.ownerDocument.defaultView.HTMLInputElement || e instanceof e.ownerDocument.defaultView.HTMLTextAreaElement) && (e = e.readOnly, l && !e ? this._EnableControl(c.target) :
                                !l && e && this._DisableControl(c.target))
                        }
                    }.bind(this); this._AutoAttachObserverCore = function (a) {
                        for (var b = [], c = [], l = 0; l < a.length; l++) { for (var e = a[l], f = 0; f < e.addedNodes.length; f++)b = b.concat(this._GetDocumentEditables(e.addedNodes[f])); for (f = 0; f < e.removedNodes.length; f++)c = c.concat(this._GetDocumentEditables(e.removedNodes[f])) } for (a = 0; a < b.length; a++)this.isKMWInput(b[a]) && this._MutationAdditionObserved(b[a]); for (a = 0; a < c.length; a++)this.isKMWInput(c[a]) && this._MutationRemovalObserved(c[a]); if (b.length ||
                            c.length) if (!this.keyman.util.device.touchable) this.listInputs(); else if (this.keyman.util.device.touchable) { var g = this; window.setTimeout(function () { g.listInputs() }.bind(this), 1) }
                    }.bind(this); this._InputModeObserverCore = function (a) { var b = f.keyman.singleton; this.disableInputModeObserver(); try { for (var c = 0; c < a.length; c++) { var l = a[c].target; this.isAttached(l) && (l._kmwAttachment.inputMode = l.inputMode, b.util.device.touchable && (l.inputMode = "none")) } } finally { this.enableInputModeObserver() } }.bind(this); this._MutationAdditionObserved =
                        function (a) { if (a instanceof a.ownerDocument.defaultView.HTMLIFrameElement) { var b = this; a.addEventListener("load", function () { window.setTimeout(function () { b.attachToControl(a) }, 1) }) } else this.attachToControl(a) }; this._MutationRemovalObserved = function (a) { this.keyman.util.device.touchable && this.disableTouchElement(a); this.disableInputElement(a); this.clearElementAttachment(a) }; this.enableControl = function (a) {
                            this.isAttached(a) || console.warn("KeymanWeb is not attached to element " + a); var b = a.className; 0 <=
                                b.indexOf("kmw-disabled") && (a.className = b.replace("kmw-disabled", "").trim())
                        }; this._WindowLoad = function (a) { document.body.scrollTop = 0; "undefined" != typeof document.documentElement && (document.documentElement.scrollTop = 0) }.bind(this); this._WindowUnload = function () { this.keyman.uiManager.doUnload(); this.keyman.osk && (this.keyman.osk.shutdown(), this.keyman.osk._Unload && this.keyman.osk._Unload()); this.lastActiveElement = null }.bind(this); this.init = function (a) {
                            var c = this.keyman.util; var h = c.device; this.keyman.core.keyboardProcessor.beepHandler =
                                this.doBeep.bind(this); this.keyman.core.keyboardProcessor.warningLogger = console.warn.bind(console); this.keyman.core.keyboardProcessor.errorLogger = console.error.bind(console); var l = function (a) { if (0 == a.length) return a; "/" != a.substr(a.length - 1, 1) && (a += "/"); return "http" == a.replace(/^(http)s?:.*/, "$1") || "file" == a.replace(/^(file):.*/, "$1") ? a : "//" == a.substr(0, 2) ? this.keyman.protocol + a : "/" == a.substr(0, 1) ? this.keyman.rootPath + a.substr(1) : this.keyman.srcPath + a }.bind(this); var e = this.keyman.options; if ("object" ==
                                    typeof a && null !== a) for (k in e) a.hasOwnProperty(k) && (e[k] = a[k]); "" != e.root && (this.keyman.rootPath = l(e.root)); "" == e.resources && (e.resources = this.keyman.srcPath); e.resources = l(e.resources); e.keyboards = l(e.keyboards); e.fonts = l(e.fonts); this.keyman.setDefaultDeviceOptions(e); if (this.keyman.initialized) return Promise.resolve(); this.keyman.linkStylesheetResources(); var k = this.keyman; var n = this; if ("complete" !== document.readyState) return new Promise(function (b) {
                                        window.setTimeout(function () { n.init(a).then(function () { b() }) },
                                            50)
                                    }); k.modelManager.init(); this.keyman._MasterDocument = window.document; this.keyman.setInitialized(1); this.keyman.osk = h.touchable ? new f.keyman.osk.AnchoredOSKView(h.coreSpec) : new f.keyman.osk.FloatingOSKView(h.coreSpec); c.prepareWait(); this.keyman.keyboardManager.endDeferment(); this.initializeUI(); if (this.keyman.isEmbedded) return this.keyman.keyboardManager.setDefaultKeyboard(), Promise.resolve(); this.keyman.appliedFont = this.keyman.baseFont = this.getBaseFont(); h.touchable && this.keyman.handleRotationEvents();
                            "manual" != this.keyman.options.attachType && this._SetupDocument(document.documentElement); this.listInputs(); if (h.touchable) {
                                var y = k.osk; y._Box.addEventListener("touchend", function (a) { a.stopPropagation() }, !1); c = document.createElement("DIV"); k = c.style; k.width = "100%"; k.height = screen.width / 2 + "px"; document.body.appendChild(c); var v = this; this.touchStartActivationHandler = function (a) {
                                    v.deactivateOnRelease = !0; v.touchY = a.touches[0].screenY; v.deactivateOnScroll = !1; if ("Android" == h.OS && 0 < navigator.userAgent.indexOf("Chrome")) {
                                        if ("undefined" ==
                                            typeof y._Box || "undefined" == typeof y._Box.style) return !1; a = a.target.parentElement; if ("undefined" != typeof a && null != a && (0 <= a.className.indexOf("kmw-key-") || "undefined" != typeof a.parentElement && null != a.parentElement && (a = a.parentElement, 0 <= a.className.indexOf("kmw-key-")))) return !1; v.deactivateOnScroll = !0
                                    } return !1
                                }; this.touchMoveActivationHandler = function (a) {
                                    v.deactivateOnScroll && (g.DOMEventHandlers.states.focusing = !1, v.activeElement = null); a = a.touches[0].screenY; var b = v.touchY; if (5 < a - b || 5 > b - a) v.deactivateOnRelease =
                                        !1; return !1
                                }; this.touchEndActivationHandler = function () { !v.deactivateOnRelease || y.lgList || g.DOMEventHandlers.states.focusing || (v.activeElement = null); return v.deactivateOnRelease = !1 }; this.keyman.util.attachDOMEvent(document.body, "touchstart", this.touchStartActivationHandler, !1); this.keyman.util.attachDOMEvent(document.body, "touchmove", this.touchMoveActivationHandler, !1); this.keyman.util.attachDOMEvent(document.body, "touchend", this.touchEndActivationHandler, !1)
                            } this.keyman.keyboardManager.restoreCurrentKeyboard();
                            "function" == typeof MutationObserver ? (c = document.querySelector("body"), "manual" != this.keyman.options.attachType && (k = { childList: !0, subtree: !0 }, this.attachmentObserver = new MutationObserver(this._AutoAttachObserverCore), this.attachmentObserver.observe(c, k)), k = { subtree: !0, attributes: !0, attributeOldValue: !0, attributeFilter: ["class", "readonly"] }, this.enablementObserver = new MutationObserver(this._EnablementMutationObserverCore), this.enablementObserver.observe(c, k), this.inputModeObserver = new MutationObserver(this._InputModeObserverCore),
                                this.enableInputModeObserver()) : console.warn("Your browser is outdated and does not support MutationObservers, a web feature needed by KeymanWeb to support dynamically-added elements."); this.keyman.util.attachDOMEvent(document.body, "focus", b.suppressFocusCheck, !0); this.keyman.util.attachDOMEvent(document.body, "blur", b.suppressFocusCheck, !0); this.keyman.setInitialized(2); return Promise.resolve()
                        }.bind(this); this.keyman = a; a.util.device.touchable && (this.touchHandlers = new g.DOMTouchHandlers(a)); this.nonTouchHandlers =
                            new g.DOMEventHandlers(a)
                } b.prototype.shutdown = function () {
                    try {
                        this.enablementObserver && this.enablementObserver.disconnect(); this.attachmentObserver && this.attachmentObserver.disconnect(); this.inputModeObserver && this.inputModeObserver.disconnect(); for (var a = 0, c = this.inputList; a < c.length; a++)this.disableInputElement(c[a]); this.keyman.util.detachDOMEvent(document.body, "focus", b.suppressFocusCheck, !0); this.keyman.util.detachDOMEvent(document.body, "blur", b.suppressFocusCheck, !0); this.touchStartActivationHandler &&
                            (this.keyman.util.detachDOMEvent(document.body, "touchstart", this.touchStartActivationHandler, !1), this.keyman.util.detachDOMEvent(document.body, "touchmove", this.touchMoveActivationHandler, !1), this.keyman.util.detachDOMEvent(document.body, "touchend", this.touchEndActivationHandler, !1))
                    } catch (d) { console.error("Error occurred during shutdown"), console.error(d) }
                }; b.prototype.doBeep = function (a) {
                    var b = f.keyman.singleton; if ("beepKeyboard" in b) b.beepKeyboard(); else if (a instanceof g.targets.OutputTarget && (b =
                        a.getElement(), a instanceof g.targets.DesignIFrame && (b = a.docRoot), b && b.style && "undefined" != typeof b.style.backgroundColor)) { for (a = 0; a < this._BeepObjects.length; a++)if (this._BeepObjects[a].e == b) return; this._BeepObjects = f.keyman.singleton._push(this._BeepObjects, new n(b)); b.style.backgroundColor = "#000000"; 0 == this._BeepTimeout && (this._BeepTimeout = 1, window.setTimeout(this.beepReset.bind(this), 50)) }
                }; b.prototype.beepReset = function () {
                    f.keyman.singleton.core.keyboardInterface.resetContextCache(); var a; for (a =
                        this._BeepTimeout = 0; a < this._BeepObjects.length; a++)this._BeepObjects[a].reset(); this._BeepObjects = []
                }; b.prototype.getHandlers = function (a) { return (a = a.base ? a.base._kmwAttachment : a._kmwAttachment) ? a.touchEnabled ? this.touchHandlers : this.nonTouchHandlers : this.keyman.touchAliasing }; b.prototype.enableTouchElement = function (a) {
                    if (this.isKMWDisabled(a)) return this.setupNonKMWTouchElement(a), !1; a.kmwInput = !0; a.removeEventListener("touchstart", this.nonKMWTouchHandler); this.isAttached(a) || this.setupElementAttachment(a);
                    this.enableInputElement(a); var b = this.touchHandlers; a.addEventListener("touchmove", function (a) { a.stopPropagation() }, !1); a.addEventListener("touchend", b.dragEnd, !1); return !0
                }; b.prototype.disableTouchElement = function (a) { if (this.isAttached(a)) { var b = a._kmwAttachment.inputMode; this.disableInputModeObserver(); a.inputMode = b; this.enableInputModeObserver() } this.setupNonKMWTouchElement(a) }; b.prototype.setupNonKMWTouchElement = function (a) {
                    this.keyman.util.attachDOMEvent(a, "touchstart", this.nonKMWTouchHandler,
                        !1); this.isAttached(a) && (a._kmwAttachment.touchEnabled = !1)
                }; b.prototype.enableInputElement = function (a) {
                    var b; this.isKMWDisabled(a) || (a instanceof a.ownerDocument.defaultView.HTMLIFrameElement ? this._AttachToIframe(a) : (this.setupElementAttachment(a), a._kmwAttachment.inputMode = null !== (b = a.inputMode) && void 0 !== b ? b : "text", this.disableInputModeObserver(), a.inputMode = "none", this.enableInputModeObserver(), a.classList.add("keymanweb-font"), this.inputList.push(a), this.keyman.util.attachDOMEvent(a, "focus", this.getHandlers(a)._ControlFocus),
                        this.keyman.util.attachDOMEvent(a, "blur", this.getHandlers(a)._ControlBlur), this.keyman.util.attachDOMEvent(a, "click", this.getHandlers(a)._Click), a.onkeypress = this.getHandlers(a)._KeyPress, a.onkeydown = this.getHandlers(a)._KeyDown, a.onkeyup = this.getHandlers(a)._KeyUp))
                }; b.prototype.disableInputElement = function (a, b) {
                    a && (a.ownerDocument.defaultView && a instanceof a.ownerDocument.defaultView.HTMLIFrameElement || a instanceof HTMLIFrameElement ? this._DetachFromIframe(a) : (0 <= a.className.indexOf("keymanweb-font") &&
                        !b && (a.className = a.className.replace("keymanweb-font", "").trim()), b = this.inputList.indexOf(a), -1 < b && this.inputList.splice(b, 1), this.keyman.util.detachDOMEvent(a, "focus", this.getHandlers(a)._ControlFocus), this.keyman.util.detachDOMEvent(a, "blur", this.getHandlers(a)._ControlBlur), this.keyman.util.detachDOMEvent(a, "click", this.getHandlers(a)._Click), a.onkeypress = null, a.onkeydown = null, a.onkeyup = null), b = this.lastActiveElement, b == a && (this.activeElement == b && (this.activeElement = null), this.lastActiveElement =
                            null, this.keyman.osk.startHide(!1)))
                }; b.prototype.isKMWDisabled = function (a) { var b = a.className; return a.readOnly || b && 0 <= b.indexOf("kmw-disabled") ? !0 : !1 }; b.prototype.attachToControl = function (a) { var b = this.keyman.util.device.touchable; if (!this.isAttached(a) || a instanceof a.ownerDocument.defaultView.HTMLIFrameElement) this.isKMWInput(a) ? this.isKMWDisabled(a) ? b && this.setupNonKMWTouchElement(a) : b && !this.keyman.isEmbedded ? this.enableTouchElement(a) : this.enableInputElement(a) : b && this.setupNonKMWTouchElement(a) };
                b.prototype.detachFromControl = function (a) { if (this.isAttached(a) || a instanceof a.ownerDocument.defaultView.HTMLIFrameElement) this.isKMWInput(a) && (this.isKMWDisabled(a) || this._DisableControl(a)), this.clearElementAttachment(a) }; b.prototype.isAttached = function (a) { return a._kmwAttachment ? !0 : !1 }; b.prototype.isKMWInput = function (a) {
                    if (a instanceof a.ownerDocument.defaultView.HTMLTextAreaElement) return !0; if (a instanceof a.ownerDocument.defaultView.HTMLInputElement) { if ("text" == a.type || "search" == a.type) return !0 } else if (a instanceof
                        a.ownerDocument.defaultView.HTMLIFrameElement) try { if (a.contentWindow) { var b = a.contentWindow.document; if (b) return this.keyman.util.device.touchable && "on" == b.designMode.toLowerCase() ? !1 : !0 } } catch (d) { console.warn("Error during attachment to / detachment from iframe: "), console.warn(d) } else if (a.isContentEditable) return !0; return !1
                }; b.prototype.setupElementAttachment = function (a) {
                    if (!a._kmwAttachment) {
                        var b = g.targets.wrapElement(a); b || g.Utils.instanceof(a, "HTMLIFrameElement") || console.warn("Could not create processing interface for newly-attached element!");
                        a._kmwAttachment = new k.AttachmentInfo(b, null, this.keyman.util.device.touchable)
                    }
                }; b.prototype.clearElementAttachment = function (a) { a._kmwAttachment = null }; b.prototype._AttachToIframe = function (a) {
                    var b = this.keyman.util; try {
                        var d = a.contentWindow.document; d && ("on" == d.designMode.toLowerCase() ? ("firefox" == b.device.browser ? (b.attachDOMEvent(d, "focus", this.getHandlers(a)._ControlFocus), b.attachDOMEvent(d, "blur", this.getHandlers(a)._ControlBlur)) : (b.attachDOMEvent(d.body, "focus", this.getHandlers(a)._ControlFocus),
                            b.attachDOMEvent(d.body, "blur", this.getHandlers(a)._ControlBlur)), b.attachDOMEvent(d.body, "keydown", this.getHandlers(a)._KeyDown), b.attachDOMEvent(d.body, "keypress", this.getHandlers(a)._KeyPress), b.attachDOMEvent(d.body, "keyup", this.getHandlers(a)._KeyUp), this.setupElementAttachment(a), d.body._kmwAttachment = a._kmwAttachment) : this._SetupDocument(d.body))
                    } catch (h) { }
                }; b.prototype._DetachFromIframe = function (a) {
                    var b = this.keyman.util; try {
                        var d = a.contentWindow.document; d && ("on" == d.designMode.toLowerCase() ?
                            ("firefox" == b.device.browser ? (b.detachDOMEvent(d, "focus", this.getHandlers(a)._ControlFocus), b.detachDOMEvent(d, "blur", this.getHandlers(a)._ControlBlur)) : (b.detachDOMEvent(d.body, "focus", this.getHandlers(a)._ControlFocus), b.detachDOMEvent(d.body, "blur", this.getHandlers(a)._ControlBlur)), b.detachDOMEvent(d.body, "keydown", this.getHandlers(a)._KeyDown), b.detachDOMEvent(d.body, "keypress", this.getHandlers(a)._KeyPress), b.detachDOMEvent(d.body, "keyup", this.getHandlers(a)._KeyUp), d.body._kmwAttachment = null) :
                            this._ClearDocument(d.body))
                    } catch (h) { }
                }; b.prototype._GetDocumentEditables = function (a) {
                    var b = this.keyman.util, d = []; if (a.ownerDocument && a instanceof a.ownerDocument.defaultView.HTMLElement) { var h = a.ownerDocument.defaultView; a instanceof h.HTMLInputElement || a instanceof h.HTMLTextAreaElement ? d.push(a) : a instanceof h.HTMLIFrameElement && d.push(a) } a.getElementsByTagName && (d = d.concat(b.arrayFromNodeList(a.getElementsByTagName("INPUT")), b.arrayFromNodeList(a.getElementsByTagName("TEXTAREA")), b.arrayFromNodeList(a.getElementsByTagName("IFRAME"))));
                    a.querySelectorAll && (d = d.concat(b.arrayFromNodeList(a.querySelectorAll("[contenteditable]")))); a.ownerDocument && a instanceof a.ownerDocument.defaultView.HTMLElement && a.isContentEditable && d.push(a); return d
                }; b.prototype._SetupDocument = function (a) { a = this._GetDocumentEditables(a); for (var b = 0; b < a.length; b++)this.attachToControl(a[b]) }; b.prototype._ClearDocument = function (a) { a = this._GetDocumentEditables(a); for (var b = 0; b < a.length; b++)this.detachFromControl(a[b]) }; b.prototype._SetTargDir = function (a) {
                    var b =
                        f.keyman.singleton.core.activeKeyboard; b = b && b.isRTL ? "rtl" : "ltr"; a && (a instanceof a.ownerDocument.defaultView.HTMLInputElement || a instanceof a.ownerDocument.defaultView.HTMLTextAreaElement ? 0 == a.value.length && (a.dir = b) : "string" == typeof a.textContent && 0 == a.textContent.length && (a.dir = b))
                }; b.prototype._DisableControl = function (a) { if (this.isAttached(a) || a instanceof a.ownerDocument.defaultView.HTMLIFrameElement) this.keyman.util.device.touchable && this.disableTouchElement(a), this.listInputs(), this.disableInputElement(a) };
                b.prototype._EnableControl = function (a) { if (this.isAttached(a)) if (this.keyman.util.device.touchable) { this.enableTouchElement(a); var b = this.keyman; window.setTimeout(function () { b.domManager.listInputs() }.bind(this), 1) } else this.enableInputElement(a) }; b.prototype.listInputs = function () {
                    var a, b = [], d = document.getElementsByTagName("input"), h = document.getElementsByTagName("textarea"); for (a = 0; a < d.length; a++)switch (d[a].type) {
                        case "text": case "search": case "email": case "url": 0 > d[a].className.indexOf("kmw-disabled") &&
                            b.push({ ip: d[a], x: g.Utils.getAbsoluteX(d[a]), y: g.Utils.getAbsoluteY(d[a]) })
                    }for (a = 0; a < h.length; a++)0 > h[a].className.indexOf("kmw-disabled") && b.push({ ip: h[a], x: g.Utils.getAbsoluteX(h[a]), y: g.Utils.getAbsoluteY(h[a]) }); b.sort(function (a, b) { return a.y != b.y ? a.y - b.y : a.x - b.x }); d = []; for (a = 0; a < b.length; a++)d.push(b[a].ip); this.sortedInputs = d
                }; b.prototype.disableControl = function (a) {
                    this.isAttached(a) || console.warn("KeymanWeb is not attached to element " + a); var b = a.className; 0 > b.indexOf("kmw-disabled") && (a.className =
                        b ? b + " kmw-disabled" : "kmw-disabled")
                }; b.prototype.setKeyboardForControl = function (a, b, d) {
                    if (a) if (null !== b && void 0 !== b ? 0 > b.indexOf("Keyboard_") && "" != b && (b = "Keyboard_" + b) : d = null, a instanceof a.ownerDocument.defaultView.HTMLIFrameElement) console.warn("'keymanweb.setKeyboardForControl' cannot set keyboard on iframes."); else if (this.isAttached(a)) {
                        a._kmwAttachment.keyboard = b; a._kmwAttachment.languageCode = d; var c = this.lastActiveElement; c && c == a && (null != b && null != d ? this.keyman.keyboardManager.setActiveKeyboard(b,
                            d) : this.keyman.keyboardManager.setActiveKeyboard(this.keyman.globalKeyboard, this.keyman.globalLanguageCode))
                    } else console.error("KeymanWeb is not attached to element " + a)
                }; b.prototype.getKeyboardForControl = function (a) { if (this.isAttached(a)) return a._kmwAttachment.keyboard; console.error("KeymanWeb is not attached to element " + a); return null }; b.prototype.getLanguageForControl = function (a) {
                    if (this.isAttached(a)) return a._kmwAttachment.languageCode; console.error("KeymanWeb is not attached to element " +
                        a); return null
                }; b.prototype.focusLastActiveElement = function () { var a = this.lastActiveElement; a && (this.keyman.uiManager.justActivated = !0, g.Utils.getOutputTarget(a).focus()) }; Object.defineProperty(b.prototype, "lastActiveElement", { get: function () { return g.DOMEventHandlers.states._lastActiveElement }, set: function (a) { g.DOMEventHandlers.states._lastActiveElement = a; (a = this.keyman.osk) && null == this.lastActiveElement && null == this.activeElement && (a.activeTarget = null, this.keyman.osk.hideNow()) }, enumerable: !1, configurable: !0 });
                Object.defineProperty(b.prototype, "activeElement", { get: function () { return g.DOMEventHandlers.states._activeElement }, set: function (a) { var b; g.DOMEventHandlers.states._activeElement = a; var d = this.keyman.uiManager.isActivating, h = this.keyman.osk; h && (a = (null === (b = null === a || void 0 === a ? void 0 : a._kmwAttachment) || void 0 === b ? void 0 : b.interface) || null, !h || !a && d || (h.activeTarget = a)) }, enumerable: !1, configurable: !0 }); b.prototype.setActiveElement = function (a, b) {
                    "string" == typeof a && (a = document.getElementById(a)); if (this.keyman.isEmbedded) this.isAttached(a) ||
                        this.attachToControl(a); else if (!this.isAttached(a)) { console.warn("Cannot set an element KMW is not attached to as the active element."); return } this.keyman.isEmbedded || this.keyman.touchAliasing._BlurKeyboardSettings(this.keyman.domManager.lastActiveElement); this.activeElement != a && this.keyman.resetContext(a); this.activeElement = this.lastActiveElement = a; this.keyman.isEmbedded || this.keyman.touchAliasing._FocusKeyboardSettings(a, !1); 1 < arguments.length && b && this.focusLastActiveElement(); f.keyman.singleton.core.processNewContextEvent(g.Utils.getOutputTarget(a))
                };
                b.prototype.initActiveElement = function (a) { null == this.activeElement && (this.activeElement = a) }; b.prototype.moveToNext = function (a) { var b, d = this.sortedInputs, h = this.activeElement; if (0 != d.length) { this.keyman.util.device.touchable && (h = h.base); for (b = 0; b < d.length && d[b] != h; b++); b = a ? b - 1 : b + 1; b = b >= d.length ? b - d.length : b; b = 0 > b ? b + d.length : b; d[b].focus() } }; b.prototype.moveToElement = function (a) { "string" == typeof a && (a = document.getElementById(a)); a.focus() }; b.prototype._IsEditableIframe = function (a, b) {
                    var c; a = a && (c = a.defaultView) &&
                        c.frameElement; return !b && a || b && (!a || "on" == c.document.designMode.toLowerCase())
                }; b.prototype.getBaseFont = function () {
                    var a = this.keyman.util, b = document.getElementsByTagName("input"), d = document.getElementsByTagName("textarea"), h = 0; if (0 == b.length && 0 == d.length) h = 0; else if (0 < b.length && 0 == d.length) h = 1; else if (0 == b.length && 0 < d.length) h = 2; else { var l = b[0], e = d[0]; l.offsetTop < e.offsetTop ? h = 1 : l.offsetTop > e.offsetTop ? h = 2 : l.offsetLeft < e.offsetLeft ? h = 1 : l.offsetLeft > e.offsetLeft && (h = 2) } switch (h) {
                        case 0: case 1: a.getStyleValue(b[0],
                            "font-family"); case 2: var f = a.getStyleValue(d[0], "font-family")
                    }if ("undefined" == typeof f || "monospace" == f) f = "Arial,sans-serif"; return f
                }; b.prototype.enableInputModeObserver = function () { var a, b = document.querySelector("body"), d = { subtree: !0, attributes: !0, attributeFilter: ["inputmode"] }; null === (a = this.inputModeObserver) || void 0 === a ? void 0 : a.observe(b, d) }; b.prototype.disableInputModeObserver = function () { var a; null === (a = this.inputModeObserver) || void 0 === a ? void 0 : a.disconnect() }; b.prototype.initializeUI = function () {
                    this.keyman.ui &&
                    this.keyman.ui.initialize instanceof Function ? (this.keyman.ui.initialize(), this.keyman.osk.present()) : this.keyman.isEmbedded || window.setTimeout(this.initializeUI.bind(this), 1E3)
                }; b.suppressFocusCheck = function (a) { g.DOMEventHandlers.states._IgnoreBlurFocus && (a.stopPropagation(), a.cancelBubble = !0); return !0 }; return b
            }(); g.DOMManager = e
        })(k.dom || (k.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) { (function (f) { (function (f) { var g = function () { function e(b) { this.popupCanvasBackgroundColor = b.OS == f.OperatingSystem.Android ? "#999" : e.prefersDarkMode() ? "#0f1319" : "#ffffff" } e.prefersDarkMode = function () { return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches }; return e }(); f.StyleConstants = g })(f.utils || (f.utils = {})) })(f.keyman || (f.keyman = {})) })(com || (com = {}));
(function (f) {
    (function (f) {
        var g = function () {
            function g() { this.detected = !1; this.touchable = !!("ontouchstart" in window); this.OS = ""; this.formFactor = "desktop"; this.dyLandscape = this.dyPortrait = 0; this.version = "0"; this.orientation = window.orientation; this.browser = "" } g.prototype.getDPI = function () {
                var e = document.createElement("DIV"), b = e.style, a = 96; if ("complete" !== document.readyState) return a; e.id = "calculateDPI"; b.position = "absolute"; b.display = "block"; b.visibility = "hidden"; b.left = "10px"; b.top = "10px"; b.width = "1in";
                b.height = "10px"; document.body.appendChild(e); a = "undefined" == typeof window.devicePixelRatio ? e.offsetWidth : e.offsetWidth * window.devicePixelRatio; document.body.removeChild(e); return a
            }; g.prototype.detect = function () {
                var e = !1; if (navigator && navigator.userAgent) {
                    var b = navigator.userAgent; if (0 <= b.indexOf("iPad")) this.OS = "iOS", this.formFactor = "tablet", this.dyPortrait = this.dyLandscape = 0; else if (0 <= b.indexOf("iPhone")) this.OS = "iOS", this.formFactor = "phone", this.dyPortrait = this.dyLandscape = 25; else if (0 <= b.indexOf("Android")) {
                        this.OS =
                        "Android"; this.formFactor = "phone"; this.dyPortrait = 75; this.dyLandscape = 25; try { this.version = b.match(/(?:Android\s+)(\d+\.\d+\.\d+)/)[1] } catch (c) { }
                    } else 0 <= b.indexOf("Linux") ? this.OS = "Linux" : 0 <= b.indexOf("Macintosh") ? (b = /Intel Mac OS X (\d+(?:[_\.]\d+)+)/i.exec(b), b) ? 1 < b.length && b[1] && (e = b[1].replace("_", "."), e = new f.utils.Version(e), e = 0 >= f.utils.Version.MAC_POSSIBLE_IPAD_ALIAS.compareTo(e), this.OS = "MacOSX") : (console.warn("KMW could not properly parse the user agent string.A suboptimal keyboard layout may result."),
                        this.OS = "MacOSX") : 0 <= b.indexOf("Windows NT") && (this.OS = "Windows", 0 <= b.indexOf("Touch") && (this.formFactor = "phone"), "number" == typeof navigator.msMaxTouchPoints && 0 < navigator.msMaxTouchPoints && (this.touchable = !0))
                } b = Math.min(screen.width, screen.height); var a = b / Math.max(screen.width, screen.height); "iOS" != this.OS && "phone" == this.formFactor && (600 <= b && .5625 < a || .625 <= a) && (this.formFactor = "tablet"); b = "Win32" == navigator.platform || "MacIntel" == navigator.platform; "iOS" != this.OS || "ongesturestart" in window || b || (this.OS =
                    "Android"); this.browser = "web"; if ("iOS" == this.OS || "macosx" == this.OS.toLowerCase()) this.browser = "safari"; /Firefox|Chrome|OPR|Safari|Edge/.test(navigator.userAgent) && (0 <= navigator.userAgent.indexOf("Firefox") && "onmozorientationchange" in screen ? this.browser = "firefox" : 0 <= navigator.userAgent.indexOf("OPR") ? this.browser = "opera" : 0 <= navigator.userAgent.indexOf(" Edge/") ? this.browser = "edge" : 0 <= navigator.userAgent.indexOf("Chrome") ? this.browser = "chrome" : 0 <= navigator.userAgent.indexOf("Safari") && (this.browser =
                        "safari")); e && "safari" == this.browser && window.TouchEvent && (this.OS = "iOS", this.formFactor = "tablet", this.dyPortrait = this.dyLandscape = 0, e = screen.height / screen.width, 1 > e && (e = 1 / e), 1.6 < e && (this.formFactor = "phone", this.dyPortrait = this.dyLandscape = 25)); this.colorScheme = f.utils.StyleConstants.prefersDarkMode() ? "dark" : "light"; this.detected = !0
            }; Object.defineProperty(g.prototype, "coreSpec", { get: function () { return new f.utils.DeviceSpec(this.browser, this.formFactor, this.OS, this.touchable) }, enumerable: !1, configurable: !0 });
            return g
        }(); f.Device = g
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var k = function () {
                function e() { } e.getOutputTarget = function (b) { if (!b) { var a = f.keyman.singleton; a && (b = a.domManager.lastActiveElement); if (!b) return null } if (b._kmwAttachment && b._kmwAttachment.interface) return b._kmwAttachment.interface; throw Error("OSK could not find element output target data!"); }; e.getAbsoluteX = function (b) {
                    if (!b) return 0; var a = b.offsetLeft ? b.offsetLeft : 0; var c = b; if (c.offsetParent) {
                        for (; c.offsetParent;)c = c.offsetParent, a += c.offsetLeft; var d = c.ownerDocument;
                        "fixed" == c.style.position && d && d.scrollingElement && (a += d.scrollingElement.scrollLeft)
                    } return c && c.ownerDocument && b.ownerDocument != window.document && (b = c.ownerDocument) && b.defaultView && b.defaultView.frameElement ? a + e.getAbsoluteX(b.defaultView.frameElement) - b.documentElement.scrollLeft : a
                }; e.getAbsoluteY = function (b) {
                    if (!b) return 0; var a = b.offsetTop ? b.offsetTop : 0; var c = b; if (c.ownerDocument && c instanceof c.ownerDocument.defaultView.HTMLElement) {
                        for (; c.offsetParent;)c = c.offsetParent, a += c.offsetTop; var d =
                            c.ownerDocument; "fixed" == c.style.position && d && d.scrollingElement && (a += d.scrollingElement.scrollTop)
                    } return c && c.ownerDocument && b.ownerDocument != window.document && (b = c.ownerDocument) && b.defaultView && b.defaultView.frameElement ? a + e.getAbsoluteY(b.defaultView.frameElement) : a
                }; e.instanceof = function (b, a) {
                    var c; if (!b) return !1; if (b.Window) return "Window" == a; b.defaultView ? c = b.defaultView[a] : b.ownerDocument ? c = b.ownerDocument.defaultView[a] : b.target && (this.instanceof(b.target, "Window") ? c = b.target[a] : this.instanceof(b.target,
                        "Document") ? c = b.target.defaultView[a] : this.instanceof(b.target, "HTMLElement") && (c = b.target.ownerDocument.defaultView[a])); return c ? b instanceof c : !1
                }; e.forceScroll = function (b) { if (f && f.keyman && f.keyman.DOMEventHandlers && !f.keyman.singleton.isEmbedded) { var a = f.keyman.DOMEventHandlers, c = b.selectionStart, d = b.selectionEnd; a.states._IgnoreBlurFocus = !0; b.blur(); b.focus(); a.states._IgnoreBlurFocus = !1; b.selectionStart = c; b.selectionEnd = d } }; return e
            }(); g.Utils = k
        })(k.dom || (k.dom = {}))
    })(f.keyman || (f.keyman = {}))
})(com ||
    (com = {}));
(function (f) {
    (function (f) {
        var g = function () { function e(b, a, c, d) { this.Pelem = b; this.Peventname = a.toLowerCase(); this.Phandler = c; this.PuseCapture = d } e.prototype.equals = function (b) { return this.Pelem == b.Pelem && this.Peventname == b.Peventname && this.Phandler == b.Phandler && this.PuseCapture == b.PuseCapture }; return e }(), k = function () {
            function e(b) {
                this.linkedStylesheets = []; this.events = {}; this.currentEvents = []; this.domEvents = []; this.embeddedFonts = []; this._GetAbsolute = this.getAbsolute; this.selectStartHandler = function () { return !1 };
                this._CancelMouse = function (a) { a && a.preventDefault && a.preventDefault(); a && (a.cancelBubble = !0); return !1 }; this.createElement = this._CreateElement; this.initDevices(); this.keyman = b
            } e.prototype.getLanguageCodes = function (b) { return -1 == b.indexOf("-") ? [b] : b.split("-") }; e.prototype.initDevices = function () {
                this.device = new f.Device; this.physicalDevice = new f.Device; this.activeDevice = this.device; this.device.detect(); "desktop" == this.device.formFactor && (this.device.touchable = !1); this.physicalDevice = new f.Device; this.physicalDevice.touchable =
                    !1; this.physicalDevice.browser = this.device.browser; this.physicalDevice.formFactor = "desktop"; this.physicalDevice.OS = this.device.OS
            }; e.prototype.arrayFromNodeList = function (b) { for (var a = [], c = 0; c < b.length; c++)a.push(b[c]); return a }; e.prototype.addEventListener = function (b, a) { this.removeEventListener(b, a); this.events[b].push(a); return !0 }; e.prototype.removeEventListener = function (b, a) {
                "undefined" == typeof this.events[b] && (this.events[b] = []); for (var c = 0; c < this.events[b].length; c++)if (this.events[b][c] == a) return this.events[b].splice(c,
                    1), !0; return !1
            }; e.prototype.callEvent = function (b, a) { if ("undefined" == typeof this.events[b]) return !0; if (-1 != this.currentEvents.indexOf(b)) return !1; this.currentEvents.push(b); for (var c = 0; c < this.events[b].length; c++) { var d = this.events[b][c], h = !1; try { h = d(a) } catch (l) { console.error(l), h = !1 } if (!1 === h) return this.currentEvents.pop(), !1 } this.currentEvents.pop(); return !0 }; e.prototype.attachDOMEvent = function (b, a, c, d) { this.detachDOMEvent(b, a, c, d); b.addEventListener(a, c, d ? !0 : !1); b = new g(b, a, c, d); this.domEvents.push(b) };
            e.prototype.detachDOMEvent = function (b, a, c, d) { b.removeEventListener(a, c, d); b = new g(b, a, c, d); for (a = 0; a < this.domEvents.length; a++)if (this.domEvents[a].equals(b)) { this.domEvents.splice(a, 1); break } }; e.prototype.getOption = function (b, a) { return b in this.keyman.options ? this.keyman.options[b] : 1 < arguments.length ? a : "" }; e.prototype.hasClass = function (b, a) { a = " " + a + " "; return 0 <= (" " + b.className + " ").replace(/[\n\t\r\f]/g, " ").indexOf(a) }; e.prototype.setOption = function (b, a) { this.keyman.options[b] = a }; e.prototype.getAbsoluteX =
                function (b) { return f.dom.Utils.getAbsoluteX(b) }; e.prototype.getAbsoluteY = function (b) { return f.dom.Utils.getAbsoluteY(b) }; e.prototype.getAbsolute = function (b) { return { x: this.getAbsoluteX(b), y: this.getAbsoluteY(b) } }; e.prototype._CreateElement = function (b) { b = document.createElement(b); b.style.MozUserSelect = "none"; b.style.KhtmlUserSelect = "none"; b.style.UserSelect = "none"; b.style.WebkitUserSelect = "none"; return b }; e.prototype.getStyleValue = function (b, a) {
                    try {
                        if (b && "undefined" != typeof window.getComputedStyle) return window.getComputedStyle(b,
                            "").getPropertyValue(a)
                    } catch (c) { } return ""
                }; e.prototype.getStyleInt = function (b, a, c) { b = parseInt(this.getStyleValue(b, a), 10); return isNaN(b) ? "number" == typeof c ? c : 0 : b }; e.prototype.isTouchDevice = function () { return this.device.touchable }; e.prototype.portraitView = function () { return !this.landscapeView() }; e.prototype.landscapeView = function () {
                    if ("undefined" != typeof window.orientation) var b = window.orientation; else "undefined" != typeof window.screen.orientation && (b = window.screen.orientation.angle); return void 0 !==
                        b ? 1 == Math.abs(b / 90) : !1
                }; e.prototype.getViewportScale = function () { try { if ("desktop" == this.device.formFactor) return 1; var b = document.documentElement.clientWidth; if (screen.width > b) return 1; var a = screen.width; this.landscapeView() ? screen.width < screen.height && (a = screen.height) : screen.width > screen.height && (a = screen.height); return Math.round(100 * a / b) / 100 } catch (c) { return 1 } }; e.prototype.barHeight = function () {
                    var b = 0; "phone" == this.device.formFactor && (b = screen.height / 2 - window.innerHeight - (this.landscapeView() ?
                        this.device.dyLandscape : this.device.dyPortrait)); return b
                }; e.prototype._EncodeEntities = function (b) { return b.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;") }; e.prototype.createShim = function () { console.warn("The util.createShim function is deprecated, as its old functionality is no longer needed.  It and references to its previously-produced shims may be safely removed.") }; e.prototype.showShim = function (b, a, c) { console.warn("The util.showShim function is deprecated, as its old functionality is no longer needed.  It may be safely removed.") };
            e.prototype.hideShim = function (b) { console.warn("The util.hideShim function is deprecated, as its old functionality is no longer needed.  It may be safely removed.") }; e.prototype.rgba = function (b, a, c, d, h) { b = "transparent"; try { b = "rgba(" + a + "," + c + "," + d + "," + h + ")" } catch (l) { b = "rgb(" + a + "," + c + "," + d + ")" } return b }; e.prototype.addStyleSheet = function (b) {

            }; e.prototype.addFontFaceStyleSheet = function (b) {
                if ("undefined" != typeof b && ("undefined" == typeof b.files && (b.files = b.source), "undefined" != typeof b.files)) {
                    var a, c = "", d = "", h = "", l = "", e = []; for (a = 0; a < this.embeddedFonts.length; a++)if (this.embeddedFonts[a] == b.family) return; "string" == typeof b.files ? e[0] = b.files : e = b.files; for (a = 0; a < e.length; a++)0 < e[a].toLowerCase().indexOf(".otf") && (c = e[a]), 0 < e[a].toLowerCase().indexOf(".ttf") &&
                        (c = e[a]), 0 < e[a].toLowerCase().indexOf(".woff") && (d = e[a]), 0 < e[a].toLowerCase().indexOf(".eot") && (h = e[a]), 0 < e[a].toLowerCase().indexOf(".svg") && (l = e[a]); "" != c && 0 > c.indexOf("/") && (c = this.keyman.options.fonts + c); "" != d && 0 > d.indexOf("/") && (d = this.keyman.options.fonts + d); "" != h && h.indexOf("/"); "" != l && 0 > l.indexOf("/") && (l = this.keyman.options.fonts + l); a = "@font-face {\nfont-family:" + b.family + ";\nfont-style:normal;\nfont-weight:normal;\n"; if ("iOS" == this.device.OS) if ("" != c) c = this.unCached(c), a = a + "src:url('" + c +
                            "') format('truetype');"; else return; else { h = []; "Android" == this.device.OS ? ("" != l && h.push("url('" + l + "') format('svg')"), "" != d && h.push("url('" + d + "') format('woff')"), "" != c && h.push("url('" + c + "') format('truetype')")) : ("" != d && h.push("url('" + d + "') format('woff')"), "" != c && h.push("url('" + c + "') format('truetype')"), "" != l && h.push("url('" + l + "') format('svg')")); if (0 == h.length) return; a += "src:" + h.join(",") + ";" } this.addStyleSheet(a + "\n}\n"); this.embeddedFonts.push(b.family)
                }
            }; e.prototype.unCached = function (b) { return b };
            e.prototype.loadCookie = function (b) { var a = {}; if (0 < arguments.length) { var c = this.loadCookie(), d; for (d in c) if (d == b) for (var h = decodeURIComponent(c[d]).split(";"), l = 0; l < h.length; l++) { var e = h[l].split("="); a[e[0]] = 1 < e.length ? e[1] : "" } } else if ("undefined" != typeof document.cookie && "" != document.cookie) for (c = document.cookie.split(/;\s*/), l = 0; l < c.length; l++)h = c[l].split("="), 2 == h.length && (a[h[0]] = h[1]); return a }; e.prototype.saveCookie = function (b, a) {
                var c = "", d; for (d in a) c = c + d + "=" + a[d] + ";"; a = (new Date((new Date).valueOf() +
                    2592E6)).toUTCString(); document.cookie = b + "=" + encodeURIComponent(c) + "; path=/; expires=" + a
            }; e.prototype.toNumber = function (b, a) { b = parseInt(b, 10); return isNaN(b) ? a : b }; e.prototype.toFloat = function (b, a) { b = parseFloat(b); return isNaN(b) ? a : b }; e.prototype.nzString = function (b, a) { var c = ""; 1 < arguments.length && (c = a); return "undefined" == typeof b || null == b || 0 == b || "" == b ? c : "" + b }; e.prototype.eventTarget = function (b) { return b ? b.target ? b.target : b.srcElement ? b.srcElement : null : null }; e.prototype.eventType = function (b) {
                return b &&
                    b.type ? b.type : ""
            }; e.prototype.alert = function (b, a) { var c = this.waiting, d = c.firstChild.childNodes; d[0].style.display = "block"; d[1].className = "kmw-alert-text"; d[1].innerHTML = b; d[2].style.display = "none"; c.style.display = "block"; c.dismiss = 1 < arguments.length ? a : null }; e.prototype.wait = function (b) { }; e.prototype.internalAlert = function (b, a) { this.keyman.options.useAlerts && this.alert(b, a) }; e.prototype.prepareWait = function () {
                var b = document.createElement("DIV"), a = document.createElement("DIV"), c = document.createElement("DIV"),
                d = document.createElement("DIV"), h = document.createElement("DIV"); b.className = "kmw-wait-background"; a.className = "kmw-wait-box"; b.dismiss = null; c.className = "kmw-wait-text"; d.className = "kmw-wait-graphic"; h.className = "kmw-alert-close"; a.onmousedown = a.onclick = function (a) { "block" == h.style.display && (b.style.display = "none", b.dismiss && b.dismiss()) }; a.addEventListener("touchstart", a.onclick, !1); b.onmousedown = b.onclick = function (a) { a.preventDefault(); a.stopPropagation() }; b.addEventListener("touchstart", b.onclick,
                    !1); a.appendChild(h); a.appendChild(c); a.appendChild(d); b.appendChild(a); document.body.appendChild(b); this.waiting = b
            }; e.prototype.shutdown = function () { this.events = {}; for (var b = 0, a = this.domEvents; b < a.length; b++) { var c = a[b]; this.detachDOMEvent(c.Pelem, c.Peventname, c.Phandler, c.PuseCapture) } this.waiting.parentNode.removeChild(this.waiting); b = 0; for (a = this.linkedStylesheets; b < a.length; b++)c = a[b], c.remove ? c.remove() : c.parentNode && c.parentNode.removeChild(c) }; e.prototype.myPath = function (b) {
                var a, c = document.getElementsByTagName("script");
                for (a = 0; a < c.length; a++) { var d = c[a]; if (0 <= d.src.indexOf(b)) return d.src.substr(0, d.src.lastIndexOf("/") + 1) } return ""
            }; e.prototype.prependProtocol = function (b) { return /^https?:/.test(b) ? b : "//" == b.substr(0, 2) ? this.keyman.protocol + b : "/" == b.substr(0, 1) ? this.keyman.protocol + "/" + b : this.keyman.protocol + "//" + b }; return e
        }(); f.Util = k
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
var Util = com.keyman.Util, __assign = this && this.__assign || function () { __assign = Object.assign || function (f) { for (var k, g = 1, n = arguments.length; g < n; g++) { k = arguments[g]; for (var e in k) Object.prototype.hasOwnProperty.call(k, e) && (f[e] = k[e]) } return f }; return __assign.apply(this, arguments) }, __awaiter = this && this.__awaiter || function (f, k, g, n) {
    function e(b) { return b instanceof g ? b : new g(function (a) { a(b) }) } return new (g || (g = Promise))(function (b, a) {
        function c(b) { try { h(n.next(b)) } catch (m) { a(m) } } function d(b) { try { h(n["throw"](b)) } catch (m) { a(m) } }
        function h(a) { a.done ? b(a.value) : e(a.value).then(c, d) } h((n = n.apply(f, k || [])).next())
    })
}, __generator = this && this.__generator || function (f, k) {
    function g(a) { return function (b) { return n([a, b]) } } function n(d) {
        if (b) throw new TypeError("Generator is already executing."); for (; e;)try {
            if (b = 1, a && (c = d[0] & 2 ? a["return"] : d[0] ? a["throw"] || ((c = a["return"]) && c.call(a), 0) : a.next) && !(c = c.call(a, d[1])).done) return c; if (a = 0, c) d = [d[0] & 2, c.value]; switch (d[0]) {
                case 0: case 1: c = d; break; case 4: return e.label++, { value: d[1], done: !1 };
                case 5: e.label++; a = d[1]; d = [0]; continue; case 7: d = e.ops.pop(); e.trys.pop(); continue; default: if (!(c = e.trys, c = 0 < c.length && c[c.length - 1]) && (6 === d[0] || 2 === d[0])) { e = 0; continue } if (3 === d[0] && (!c || d[1] > c[0] && d[1] < c[3])) e.label = d[1]; else if (6 === d[0] && e.label < c[1]) e.label = c[1], c = d; else if (c && e.label < c[2]) e.label = c[2], e.ops.push(d); else { c[2] && e.ops.pop(); e.trys.pop(); continue }
            }d = k.call(f, e)
        } catch (l) { d = [6, l], a = 0 } finally { b = c = 0 } if (d[0] & 5) throw d[1]; return { value: d[0] ? d[1] : void 0, done: !0 }
    } var e = {
        label: 0, sent: function () {
            if (c[0] &
                1) throw c[1]; return c[1]
        }, trys: [], ops: []
    }, b, a, c, d; return d = { next: g(0), "throw": g(1), "return": g(2) }, "function" === typeof Symbol && (d[Symbol.iterator] = function () { return this }), d
};
(function (f) {
    (function (k) {
        (function (g) {
            var n = function () { function a(a, b) { this.id = a; this.language = b } a.prototype.toString = function () { var a = this.id; this.language ? (a = a + "@" + this.language, this.version && (a = a + "@" + this.version)) : this.version && (a = a + "@@" + this.version); return a }; return a }(), e = function () { return function (a, b) { this.family = a.family; this.files = a.source; this.path = b } }(), b = function () {
                function a(a, b) { this.KI = "Keyboard_" + a; this.KLC = b } a.toStubs = function (b) {
                    var c = ""; b ? b.id ? b.languages || (c = "KeyboardStub has undefined languages") :
                        c = "KeyboardStub has undefined id" : c = "Stub undefined"; if ("" != c) return [{ error: Error(c) }]; var d = []; "object" === typeof b.languages ? d.push(b.languages) : b.languages.foreach(function (a) { d.push(a) }); var h = []; d.forEach(function (c) { var d = new a(b.id, c.id); b.name && (d.KN = b.name); b.filename && (d.KF = b.filename); b.displayName && (d.displayName = b.displayName); c.name && (d.KL = c.name); c.region && (d.KR = c.region); c.font && (d.KFont = c.font); c.oskFont && (d.KOskFont = c.oskFont); h.push(d) }); return h
                }; return a
            }(); g.KeyboardStub = b; var a =
                function () { return function () { this.stores = {} } }(); g.KeyboardTag = a; var c = function () {
                    function c(a) {
                        this.activeStub = null; this.keyboardStubs = []; this.dfltStub = this.deferment = null; this.keyboards = []; this.registrationResolvers = {}; this.languageList = this.languageListPromise = null; this.linkedScripts = []; this._GetKeyboardDetail = function (a, b) {
                            var c = {}; c.Name = a.KN; c.InternalName = a.KI; c.LanguageName = a.KL; c.LanguageCode = a.KLC; c.RegionName = a.KR; c.RegionCode = a.KRC; c.CountryName = a.KC; c.CountryCode = a.KCC; c.KeyboardID = a.KD;
                            c.Font = a.KFont; c.OskFont = a.KOskFont; c.HasLoaded = !!b; c.IsRTL = b ? !!b.KRTL : null; return c
                        }; this.keymanweb = a; var b = this; this.deferment = new Promise(function (a) { b.endDeferment = a })
                    } c.prototype.getActiveKeyboardName = function () { var a = f.keyman.singleton.core; return a.activeKeyboard ? a.activeKeyboard.id : "" }; c.prototype.getActiveLanguage = function (a) { return null == this.activeStub ? "" : a ? this.activeStub.KL : this.activeStub.KLC }; c.prototype.getDetailedKeyboards = function () {
                        var a = [], b; for (b = 0; b < this.keyboardStubs.length; b++) {
                            var c =
                                this.keyboardStubs[b]; var d = this.keyboards.find(function (a) { return a.KI == c.KI }); d = this._GetKeyboardDetail(c, d); a = this.keymanweb._push(a, d)
                        } return a
                    }; c.prototype.addStub = function (a) {
                        if ("string" != typeof a.id) return !1; "undefined" != typeof a.language && (console.warn("The 'language' property for keyboard stubs has been deprecated.  Please use the 'languages' property instead."), a.languages = a.language); if ("undefined" == typeof a.languages) return !1; "string" != typeof a.name && (a.name = a.id.replace("_", " "), a.name =
                            a.name.substr(0, 1).toUpperCase() + a.name.substr(1)); var b = a.languages, c = []; "undefined" == typeof b.length ? c[0] = b : c = b; var d = { keyboardBaseUri: this.keymanweb.options.keyboards, fontBaseUri: this.keymanweb.options.fonts }; for (b = 0; b < c.length; b++)this.mergeStub(a, c[b], d); return !0
                    }; c.prototype.mergeStub = function (a, d, f) {
                        var h = this.findStub(a.id, d.id), l = !1; null == h && (h = new b(a.id, d.id), this.keyboardStubs.push(h), l = !0); var g = d.region, m = 0; if ("number" == typeof g) m = 1 > g || 9 < g ? 0 : g - 1; else if ("string" == typeof g) for (var k =
                            2 == g.length ? c.regionCodes : c.regions, n = 0; n < k.length; n++)if (g.toLowerCase() == k[n].toLowerCase()) { m = n; break } h.KL = "undefined" === typeof h.KL ? d.name : h.KL; h.KR = "undefined" === typeof h.KR ? c.regions[m] : h.KR; h.KRC = "undefined" === typeof h.KRC ? c.regionCodes[m] : h.KRC; h.KN = "undefined" === typeof h.KN ? a.name : h.KN; h.displayName = "undefined" === typeof h.displayName ? a.displayName : h.displayName; "undefined" == typeof h.KF && (g = /^(([\.]\/)|([\.][\.]\/)|(\/))|(:)/, h.KF = a.filename, g.test(h.KF) || (h.KF = f.keyboardBaseUri + h.KF)); a =
                                f.fontBaseUri; "" != this.keymanweb.options.fonts ? (a = this.keymanweb.options.fonts, g = /^https?\:/, g.test(a) || (a = "//" == a.substr(0, 2) ? this.keymanweb.protocol + a : "/" == a.substr(0, 1) ? this.keymanweb.rootPath + a.substr(1) : this.keymanweb.rootPath + a)) : this.keymanweb.options.fonts = a; "undefined" != typeof d.font && (h.KFont = "undefined" === typeof h.KFont ? new e(d.font, a) : h.KFont); "undefined" != typeof d.oskFont && (h.KOskFont = "undefined" === typeof h.KOskFont ? new e(d.oskFont, a) : h.KOskFont); this.doKeyboardRegistered(h.KI, h.KL, h.KN,
                                    h.KLC, h.KP); !this.activeStub && l && 1 == this.keyboardStubs.length && "true" == this.keymanweb.options.setActiveOnRegister && (this.doBeforeKeyboardChange(h.KI, h.KLC), this._SetActiveKeyboard(h.KI, h.KLC, !1), this.doKeyboardChange(h.KI, h.KLC))
                    }; c.prototype.findStub = function (a, b) { var c; for (c = 0; c < this.keyboardStubs.length; c++)if (this.keyboardStubs[c].KI == "Keyboard_" + a && this.keyboardStubs[c].KLC == b) return this.keyboardStubs[c]; return null }; c.prototype.setDefaultKeyboard = function () {
                        return 0 < this.keyboardStubs.length ?
                            (this._SetActiveKeyboard(this.keyboardStubs[0].KI, this.keyboardStubs[0].KLC), !0) : !1
                    }; c.prototype.setActiveKeyboard = function (a, b) {
                        !this.keymanweb.isEmbedded && a && 0 != a.indexOf("Keyboard_") && (a = "Keyboard_" + a); this.doBeforeKeyboardChange(a, b); var c = this._SetActiveKeyboard(a, b, !0); null != this.keymanweb.domManager.lastActiveElement && this.keymanweb.domManager.focusLastActiveElement(); var d = this; c.then(function () { d.doKeyboardChange(a, b) }); c.catch(function (c) {
                            throw Error('Unable to load keyboard with internal name "' +
                                a + '", language code "' + b + '": ' + c);
                        }); return c
                    }; c.prototype._SetActiveKeyboard = function (a, b, c) {
                        var d, h, e, l = f.keyman.singleton, m = l.util, k = l.osk, n = l.core.activeKeyboard; if (2 > arguments.length || !b) b = "---"; for (h = 0; h < this.keyboardStubs.length && (a != this.keyboardStubs[h].KI || b != this.keyboardStubs[h].KLC && "---" != b); h++); m.device.touchable && ("" == a || null == a || h >= this.keyboardStubs.length) && 0 != this.keyboardStubs.length && (a = this.keyboardStubs[0].KI, b = this.keyboardStubs[0].KLC); 2 < arguments.length && c && this.saveCurrentKeyboard(a,
                            b); if (this.activeStub && n && n.id == a && this.activeStub.KI == a && this.activeStub.KLC == b && !this.keymanweb.mustReloadKeyboard) return Promise.resolve(); if (n && n.id == a) for (e = 0; e < this.keyboardStubs.length; e++)if (this.keyboardStubs[e].KI == a && this.keyboardStubs[e].KLC == b) return this.activeStub = this.keyboardStubs[e], null === (d = k.vkbd) || void 0 === d ? void 0 : d.appendStyleSheet(), this.keymanweb.mustReloadKeyboard && (n.refreshLayouts(), k && k._Load()), Promise.resolve(); this.activeStub = l.core.activeKeyboard = null; if ("" == a) return k.startHide(!1),
                                this.keymanweb.isEmbedded || m.wait(!1), Promise.resolve(); for (e = 0; e < this.keyboards.length; e++)if (this.keyboards[e].KI == a) { l.core.activeKeyboard = new g.Keyboard(this.keyboards[e]); l.core.activeKeyboard.refreshLayouts(); this.keymanweb.domManager._SetTargDir(this.keymanweb.domManager.lastActiveElement); for (d = 0; d < this.keyboardStubs.length; d++)if (this.keyboardStubs[d].KI == a && (this.keyboardStubs[d].KLC == b || "---" == b)) { this.activeStub = this.keyboardStubs[d]; break } break } if (null == l.core.activeKeyboard) {
                                    for (e = 0; e <
                                        this.keyboardStubs.length; e++)if (this.keyboardStubs[e].KI == a && (this.keyboardStubs[e].KLC == b || "---" == b)) {
                                            if (this.isCJK(this.keyboardStubs[e]) || m.device.touchable) k.displayIfActive = !0; if (!this.keyboardStubs[e].asyncLoader) {
                                                k && k.startHide(!1); var u = this.keyboardStubs[e]; u.asyncLoader = {}; var x = u.KN, A = u.KL; x = x.replace(/\s*keyboard\s*/i, ""); u.asyncLoader.callback = function (a, b) {
                                                    var c = a || "Sorry, the " + x + " keyboard for " + A + " is not currently available."; this.keymanweb.isEmbedded || (m.wait(!1), m.internalAlert(a ||
                                                        c, function () { this.keymanweb.setActiveKeyboard("") }.bind(this))); switch (b) { case "err": console.error(c); break; default: console.warn(c) }0 < e && (a = this.keyboardStubs[0], this._SetActiveKeyboard(a.KI, a.KLC, !0))
                                                }.bind(this); u.asyncLoader.timer = window.setTimeout(u.asyncLoader.callback, 1E4); this.keymanweb.isEmbedded || m.wait("Installing keyboard<br/>" + x); var G = this; u.asyncLoader.promise = new Promise(function (a, b) { window.setTimeout(function () { G.installKeyboard(a, b, u) }, 0) })
                                            } this.activeStub = this.keyboardStubs[e];
                                            return this.keyboardStubs[e].asyncLoader.promise
                                        } this.keymanweb.domManager._SetTargDir(this.keymanweb.domManager.lastActiveElement)
                                } k && k._Load(); return Promise.resolve()
                    }; c.prototype.installKeyboard = function (a, b, c) {
                        var d = this.keymanweb.util, h = this.keymanweb.osk, e = d._CreateElement("script"); e.charset = "UTF-8"; e.type = "text/javascript"; this.keymanweb.isEmbedded && (e.id = c.KI); var l = c.KL, m = c.KN, n = this.keymanweb.getKeyboardPath(c.KF), p = this, u = f.keyman.singleton.core; e.addEventListener("error", function () {
                            null !==
                            c.asyncLoader.timer && (window.clearTimeout(c.asyncLoader.timer), c.asyncLoader.timer = null); var a = "Cannot find the " + m + " keyboard for " + l + " at " + n + "."; c.asyncLoader.callback(a, "warn"); c.asyncLoader = null; b(a)
                        }); e.addEventListener("load", function () {
                            null !== c.asyncLoader.timer && (window.clearTimeout(c.asyncLoader.timer), c.asyncLoader.timer = null); var e = p.getKeyboardByID(c.KI); e ? (c == p.activeStub && (p.doBeforeKeyboardChange(e.KI, c.KLC), u.activeKeyboard = new g.Keyboard(e), null != p.keymanweb.domManager.lastActiveElement &&
                                (p.keymanweb.uiManager.justActivated = !0, p.keymanweb.domManager._SetTargDir(p.keymanweb.domManager.lastActiveElement)), p.saveCurrentKeyboard(e.KI, c.KLC), h && h._Load(), null != p.keymanweb.domManager.lastActiveElement && u.processNewContextEvent(k.dom.Utils.getOutputTarget(p.keymanweb.domManager.lastActiveElement))), p.keymanweb.isEmbedded || d.wait(!1), c.asyncLoader = null, a()) : (e = "Error registering the " + m + " keyboard for " + l + "; keyboard script at " + n + " may contain an error.", c.asyncLoader.callback(e, "error"),
                                    c.asyncLoader = null, b(e))
                        }, !1); e.src = n; try { document.body.appendChild(e) } catch (x) { try { document.getElementsByTagName("head")[0].appendChild(e) } catch (A) { b("Error registering script " + n + ": " + A); return } } this.linkedScripts.push(e)
                    }; c.prototype.saveCurrentKeyboard = function (a, b) { this.keymanweb.util.saveCookie("KeymanWeb_Keyboard", { current: a + ":" + b }); this.keymanweb.isEmbedded || this.keymanweb.touchAliasing._BlurKeyboardSettings(this.keymanweb.domManager.lastActiveElement, a, b) }; c.prototype.restoreCurrentKeyboard =
                        function () { var a = this.keyboardStubs, b = a.length, c = f.keyman.singleton.core; if (!(1 > a.length)) { var d = this.getSavedKeyboard(); d.split(":"); var e = d.split(":"); 2 > e.length && (e[1] = ""); for (d = 0; d < b && (a[d].KI != e[0] || a[d].KLC != e[1] && "" != e[1]); d++); if (d < b || null == c.activeKeyboard) this._SetActiveKeyboard(e[0], e[1], !1), this.keymanweb.globalKeyboard = e[0], this.keymanweb.globalLanguageCode = e[1], this.doKeyboardChange(e[0], e[1]) } }; c.prototype.getSavedKeyboard = function () {
                            var a = this.keymanweb.util.loadCookie("KeymanWeb_Keyboard");
                            if ("string" != typeof a.current) return "Keyboard_us:eng"; var b, c = this.keyboardStubs; for (b = 0; b < c.length; b++) { var d = c[b].KI + ":" + c[b].KLC; if (d == a.current) return d } for (b = 0; b < c.length; b++)if (d = c[b].KI + ":" + c[b].KLC, "Keyboard_us:eng" == d) return d; return 0 < c.length ? c[0].KI + ":" + c[0].KLC : "Keyboard_us:eng"
                        }; c.prototype.isCJK = function (a) { var b; "undefined" != typeof a.KLC ? b = a.KLC : "undefined" != typeof a.LanguageCode && (b = a.LanguageCode); return "cmn" == b || "jpn" == b || "kor" == b }; c.prototype.getKeyboardByID = function (a) {
                            var b;
                            for (b = 0; b < this.keyboards.length; b++)if (a == this.keyboards[b].KI) return this.keyboards[b]; return null
                        }; c.prototype.isUniqueRequest = function (a, b) { var c; if (null == this.findStub(b.id, b.language)) { for (c = 0; c < a.length; c++)if (a[c].id == b.id && a[c].language == b.language) return !1; return !0 } return !1 }; c.prototype.mergeAndResolveStubPromises = function (a, b) { return 0 == b.length ? Promise.resolve(a) : 0 == a.length ? Promise.reject(b) : Promise.resolve(a.concat(b)) }; c.prototype.addKeyboardArray = function (a) {
                            return __awaiter(this, void 0,
                                void 0, function () {
                                    var c, d, h, e, f, g, k, t, p, u, x, A, G, B, N, O; return __generator(this, function (l) {
                                        switch (l.label) {
                                            case 0: return c = [], this.keymanweb.initialized ? [3, 2] : [4, this.deferment]; case 1: l.sent(), l.label = 2; case 2: if (0 == a.length) return d = { error: Error("No keyboards to add") }, c.push(d), [2, Promise.resolve(c)]; g = f = ""; k = []; t = []; for (h = 0; h < a.length; h++) {
                                                if ("string" == typeof a[h] && 0 < a[h].length) for (u = a[h].split("@"), x = [""], "english" == u[0].toLowerCase() && (u[0] = "us"), 1 < u.length && (x = u[1].split(",")), e = 0; e < x.length; e++)p =
                                                    new n(u[0]), "" != x[e] && (p.language = x[e]), 2 < u.length && (p.version = u[2]), this.isUniqueRequest(k, p) && k.push(p); if ("object" == typeof a[h] && null != a[h]) {
                                                        if ("string" == typeof a[h].filename) this.addStub(a[h]) || this.keymanweb.util.internalAlert("To use a custom keyboard, you must specify file name, keyboard name, language, language code and region code."); else {
                                                            a[h].language && (console.warn("The 'language' property for keyboard stubs has been deprecated.  Please use the 'languages' property instead."), a[h].languages =
                                                                a[h].language); x = a[h].languages; if (!x) { A = "To use keyboard '" + a[h].id + "', you must specify languages."; G = { keyboard: { id: a[h].id, name: a[h].name }, error: Error(A) }; c.push(G); continue } if ("number" == typeof x.length) for (e = 0; e < x.length; e++)p = new n(a[h].id, a[h].languages[e].id), this.isUniqueRequest(k, p) && k.push(p); else p = new n(a[h].id, a[h].languages.id), this.isUniqueRequest(k, p) && k.push(p)
                                                        } B = b.toStubs(a[h]); B.forEach(function (a) { a instanceof b ? t.push(a) : c.push(a) })
                                                    }
                                            } try {
                                                if (0 == k.length) return [2, this.mergeAndResolveStubPromises(t,
                                                    c)]
                                            } catch (H) { return console.error(H), [2, Promise.reject(H)] } f = "&keyboardid="; for (h = 0; h < k.length; h++)f = f + g + k[h].toString(), g = ","; l.label = 3; case 3: return l.trys.push([3, 5, , 6]), [4, this.keymanCloudRequest(f, !1)]; case 4: return N = l.sent(), [2, this.mergeAndResolveStubPromises(N, c)]; case 5: return O = l.sent(), console.error(O), d = { error: O }, c.push(d), [2, Promise.reject(c)]; case 6: return [2, Promise.resolve(c)]
                                        }
                                    })
                                })
                        }; c.prototype.registerLanguagesForKeyboard = function (a, b, c) {
                            var d, h = 0; var e = ""; if ("undefined" != typeof a) if ("string" ==
                                typeof b.keyboardid && (e = b.keyboardid.split(",")[c]), "number" == typeof a.length) if (1 == a.length || "$" == e.substr(-1, 1) || "" == e) for (e = 0; e < a.length; e++)this.registerLanguagesForKeyboard(a[e], b, c); else { for (e = 0; e < a.length; e++) { var l = a[e].id.toLowerCase(); "us" == l && (l = "english"); for (d = 0; d < a[e].languages.length; d++)if (l == a[e].languages[d].name.toLowerCase()) { h = e; break } } this.registerLanguagesForKeyboard(a[h], b, c) } else if (c = e.split("@")[1], "string" == typeof c && (c = c.replace(/\$$/, "")), h = a.languages, "undefined" != typeof h) if ("number" ==
                                    typeof h.length) for (e = 0; e < h.length; e++)"undefined" != typeof c && h[e].id != c || this.mergeStub(a, h[e], b); else this.mergeStub(a, h, b)
                        }; c.prototype.register = function (a) { var b = a.timerid; try { var c = this._registerCore(a) } catch (q) { c = Error("Error occurred while registering keyboards: " + q) } if (b && (a = this.registrationResolvers[b], window.clearTimeout(b), a)) try { c instanceof Error ? a.reject(c) : a.resolve(c) } finally { delete this.registrationResolvers[b] } }; c.prototype._registerCore = function (a) {
                            var b = a.options, c = this.keyboardStubs.length;
                            if ("string" == typeof a.error) return b = "", "string" == typeof a.keyboardid && (b = a.keyboardid.substr(0, 1).toUpperCase() + a.keyboardid.substr(1)), Error(b + " keyboard not found."); if ("undefined" == typeof b || "undefined" == typeof b.context) return Error("Could not find a keyboard with that ID."); if ("keyboard" == b.context) { var d = a.keyboard; if ("number" == typeof d.length) for (a = 0; a < d.length; a++)this.registerLanguagesForKeyboard(d[a], b, a); else this.registerLanguagesForKeyboard(d, b, 0) } else "language" == b.context && (this.languageList =
                                a.languages); return this.keyboardStubs.slice(c)
                        }; c.prototype.addLanguageKeyboards = function (a) {
                            var b = this, c = []; if (null == this.languageList) {
                                null == this.languageListPromise && (this.languageListPromise = this.keymanCloudRequest("", !0).catch(function (a) { console.error(a); c.push({ error: a }); return c })); var d = this; return (new Promise(function (b, c) { if (d.languageListPromise) return d.languageListPromise.then(function () { b(d.addLanguageKeyboards(a)) }).catch(function (a) { c(a) }); b(d.addLanguageKeyboards(a)) })).then(function (a) {
                                    if (a instanceof
                                        Error) throw a; return a
                                })
                            } for (var h = "", e = 0; e < a.length; e++) { var f = a[e].toLowerCase(), g = "$" == f.substr(-1, 1); g && (f = f.substr(0, f.length - 1)); for (var k = !1, n = 0; n < this.languageList.length; n++)if (f == this.languageList[n].name.toLowerCase()) { "" != h && (h += ","); h = h + "@" + this.languageList[n].id; g && (h += "$"); k = !0; break } k || (f = { language: { name: f }, error: Error(this.alertLanguageUnavailable(f)) }, c.push(f)) } return "" == h ? Promise.reject(c) : this.keymanCloudRequest("&keyboardid=" + h, !1).then(function (a) {
                                return b.mergeAndResolveStubPromises(a,
                                    c)
                            }, function (a) { console.error(a); c.push({ error: a }); return Promise.reject(c) })
                        }; c.prototype.keymanCloudRequest = function (a, b) {
                            var c = this, d = this.keymanweb, h = "https://api.keyman.com/cloud/4.0/" + (1 < arguments.length && b ? "languages" : "keyboards"); return new Promise(function (b, e) {
                                var f = d.util._CreateElement("script"), l = "?jsonp=keyman.register&languageidtype=bcp47&version=" + d.version, g = window.setTimeout(function () { delete c.registrationResolvers[g]; e(Error("The Cloud API request timed out.")) }, 1E4); c.registrationResolvers[g] =
                                    { resolve: b, reject: e }; f.onload = function (a) { window.clearTimeout(g); if (c.registrationResolvers[g]) try { e(Error("The Cloud API failed to find an appropriate keyboard.")) } finally { delete c.registrationResolvers[g] } }; f.onerror = function (a, b, d, h, f) { window.clearTimeout(g); try { a = "Could not find a keyboard with that ID.", f && (a = a + ": " + f.message), e(Error(a)) } finally { delete c.registrationResolvers[g] } }; f.src = h + l + a + ("&timerid=" + g); try { document.body.appendChild(f) } catch (u) { document.getElementsByTagName("head")[0].appendChild(f) }
                            })
                        };
                    c.prototype.alertLanguageUnavailable = function (a) { a = "No keyboards are available for " + a + ". Does it have another language name?"; this.keymanweb.util.internalAlert(a); return a }; c.prototype.serverUnavailable = function (a) { this.keymanweb.util.internalAlert("" == a ? "Unable to connect to Keyman Cloud server!" : a); this.keymanweb.warned = !0 }; c.prototype.removeKeyboards = function (a, b) {
                        if (0 == arguments.length) return !1; var c, d, h = !0, e = !1, f = !1; for (c = 0; c < arguments.length; c++) {
                            for (d = this.keyboardStubs.length - 1; 0 <= d; d--)if ("Keyboard_" +
                                arguments[c] == this.keyboardStubs[d].KI) { "Keyboard_" + arguments[c] == this.getActiveKeyboardName() && (e = !0); f = !0; this.keyboardStubs.splice(d, 1); break } 0 > d && (h = !1)
                        } for (c = 0; c < arguments.length; c++)for (d = this.keyboards.length - 1; 0 <= d; d--)if ("Keyboard_" + arguments[c] == this.keyboards[d].KI) { this.keyboards.splice(d, 1); break } e && (0 < this.keyboardStubs.length ? this._SetActiveKeyboard(this.keyboardStubs[0].KI, this.keyboardStubs[0].KLC, !0) : this._SetActiveKeyboard("", "", !1), this.keymanweb.uiManager.justActivated = !0); f &&
                            this.doKeyboardUnregistered(); return h
                    }; c.prototype._registerKeyboard = function (b) {
                        return __awaiter(this, void 0, void 0, function () {
                            var c, d, h, e; return __generator(this, function (f) {
                                switch (f.label) {
                                    case 0: return this.keymanweb.initialized ? [3, 2] : [4, this.deferment]; case 1: f.sent(), f.label = 2; case 2: if (b._kmw) return console.error("The keyboard _kmw property is a reserved field for engine use only; this keyboard is invalid."), [2]; b._kmw = new a; this.keymanweb.isEmbedded && this.keymanweb.preserveID(b); e = h = this.activeStub;
                                        if (!(h && "KI" in h) || h.KI != b.KI) for (d = 0; d < this.keyboardStubs.length; d++) { h = this.keyboardStubs[d]; if (b.KI == h.KI) break; h = null } null == this.activeStub && null != h && (this.activeStub = h); for (c = 0; c < this.keyboards.length; c++)if (b.KI == this.keyboards[c].KI) return [2]; this.keyboards = this.keymanweb._push(this.keyboards, b); this.doKeyboardLoaded(b.KI); this.activeStub = e; return [2]
                                }
                            })
                        })
                    }; c.prototype._registerStub = function (a) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (b) {
                                switch (b.label) {
                                    case 0: return a =
                                        __assign({}, a), this.keymanweb.initialized ? [3, 2] : [4, this.deferment]; case 1: b.sent(), b.label = 2; case 2: return null == this.dfltStub && (this.dfltStub = a), this.keymanweb.isEmbedded && this.keymanweb.namespaceID(a), "undefined" == typeof a.KLC && (a.KLC = ""), "undefined" == typeof a.KL && (a.KL = "undefined"), this.keyboardStubs = this.keymanweb._push(this.keyboardStubs, a), this.doKeyboardRegistered(a.KI, a.KL, a.KN, a.KLC, a.KP), this.activeStub || this.dfltStub != a || 1 != this.keyboardStubs.length || "true" != this.keymanweb.options.setActiveOnRegister ||
                                            this.setActiveKeyboard(a.KI, a.KLC), [2, Promise.resolve(!1)]
                                }
                            })
                        })
                    }; c.prototype.doKeyboardRegistered = function (a, b, c, d, e) { a = { internalName: a, language: b, keyboardName: c, languageCode: d }; e && (a["package"] = e); return this.keymanweb.util.callEvent("kmw.keyboardregistered", a) }; c.prototype.doKeyboardUnregistered = function () { return this.keymanweb.util.callEvent("kmw.keyboardregistered", {}) }; c.prototype.doKeyboardLoaded = function (a) {
                        var b = {}; b.keyboardName = a; return this.keymanweb.util.callEvent("kmw.keyboardloaded",
                            b)
                    }; c.prototype.doBeforeKeyboardChange = function (a, b) { var c = {}; c.internalName = a; c.languageCode = b; return this.keymanweb.util.callEvent("kmw.beforekeyboardchange", c) }; c.prototype.doKeyboardChange = function (a, b, c) { return this.keymanweb.util.callEvent("kmw.keyboardchange", { internalName: a, languageCode: b, indirect: 2 < arguments.length ? c : !1 }) }; c.prototype.shutdown = function () { for (var a = 0, b = this.linkedScripts; a < b.length; a++) { var c = b[a]; c.remove ? c.remove() : c.parentNode && c.parentNode.removeChild(c) } }; c.regions = "World;Africa;Asia;Europe;South America;North America;Oceania;Central America;Middle East".split(";");
                    c.regionCodes = "un af as eu sa na oc ca me".split(" "); return c
                }(); g.KeyboardManager = c
        })(k.keyboards || (k.keyboards = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        var g = function () { function e(b, a, c) { this.code = b; this.shift = a; this.handler = c } e.prototype.matches = function (b, a) { return this.code == b && this.shift == a }; return e }(), k = function () {
            function e(b) {
                this.hotkeys = []; this._Process = function (a) {
                    a || (a = window.event); var b = f.dom.PreProcessor._GetEventKeyCode(a); if (null == b) return !1; for (var d = (a.shiftKey ? 16 : 0) | (a.ctrlKey ? 32 : 0) | (a.altKey ? 64 : 0), h = 0; h < this.hotkeys.length; h++)if (this.hotkeys[h].matches(b, d)) return this.hotkeys[h].handler(), a.returnValue =
                        !1, a && a.preventDefault && a.preventDefault(), a.cancelBubble = !0, !1; return !0
                }.bind(this); this.keyman = b
            } e.prototype.addHotKey = function (b, a, c) { for (var d = 0; d < this.hotkeys.length; d++)if (this.hotkeys[d].code == b && this.hotkeys[d].shift == a) { this.hotkeys[d].handler = c; return } this.hotkeys.push(new g(b, a, c)) }; e.prototype.removeHotkey = function (b, a) { for (var c = 0; c < this.hotkeys.length; c++)if (this.hotkeys[c].matches(b, a)) { this.hotkeys.splice(c, 1); break } }; return e
        }(); f.HotkeyManager = k
    })(f.keyman || (f.keyman = {}))
})(com ||
    (com = {}));
(function (f) {
    (function (f) {
        var g = function () { return function (e, b) { this.activationPending = e; this.activated = b } }(); f.UIState = g; var k = function () {
            function e(b) { this.justActivated = this.isActivating = !1; this.doUnload = function () { return this.keyman.util.callEvent("kmw.unloaduserinterface", {}) }; this.keyman = b } e.prototype.getUIState = function () { return new g(this.isActivating, this.justActivated) }; e.prototype.setActivatingUI = function (b) { this.isActivating = b ? !0 : !1 }; e.prototype.doLoad = function () { return this.keyman.util.callEvent("kmw.loaduserinterface", {}) };
            return e
        }(); f.UIManager = k
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function () {
                function e(b) { this.keyman = b; this.scrolling = !1; this.shim = this.constructShim() } e.prototype.constructShim = function () {
                    var b = this, a = this.keyman.util._CreateElement("div"), c = this.keyman.osk; a.id = "kmw-language-menu-background"; a.addEventListener("touchstart", function (a) {
                        a.preventDefault(); b.hide(); if (2 < a.touches.length) {
                            var d = a.touches[1].pageX; a = a.touches[1].pageY; var e = c.vkbd.spaceBar; d > e.offsetLeft && d < e.offsetLeft + e.offsetWidth && a > e.offsetTop && a <
                                e.offsetTop + e.offsetHeight && c.showBuild()
                        }
                    }, !1); return a
                }; e.prototype.show = function () {
                    var b = this.keyman.keyboardManager.keyboardStubs, a = this.keyman.util; if (!(1 > b.length)) {
                        var c = this.lgList = a._CreateElement("div"); this.lgList.id = "kmw-language-menu"; var d = this; document.body.appendChild(this.shim); var h = a._CreateElement("div"), e = h.style, f = a._CreateElement("div"); h.id = "kmw-menu-scroll-container"; f.id = "kmw-menu-scroller"; "WebkitOverflowScrolling" in e && (e.WebkitOverflowScrolling = "touch"); h.appendChild(f);
                        c.appendChild(h); var g; e = a._CreateElement("div"); e.id = "kmw-menu-index"; for (g = 1; 26 >= g; g++) { var k = a._CreateElement("p"); k.innerHTML = String.fromCharCode(g + 64); e.appendChild(k) } e.addEventListener("touchstart", function (a) { d.scrollToLanguage(a, h, f) }, !1); e.addEventListener("touchend", function (a) { a.stopPropagation() }, !1); c.appendChild(e); c.addEventListener("scroll", function (a) { d.scrolling = !0 }, !1); h.addEventListener("scroll", function (a) {
                            1 > h.scrollTop && (h.scrollTop = 1); h.scrollTop > h.scrollHeight - h.offsetHeight -
                                1 && (h.scrollTop = h.scrollHeight - h.offsetHeight - 1)
                        }, !1); this.activeLgNo = this.addLanguages(f, b); this.lgList.style.visibility = "hidden"; document.body.appendChild(this.lgList); "Android" == a.device.OS && "devicePixelRatio" in window && (this.lgList.style.fontSize = 2 / window.devicePixelRatio + "em"); "Android" == a.device.OS && "tablet" == a.device.formFactor && "devicePixelRatio" in window && (g = parseInt(a.getStyleValue(c, "width"), 10), b = c.style, isNaN(g) || (b.width = b.maxWidth = 2 * g / window.devicePixelRatio + "px"), g = parseInt(a.getStyleValue(h,
                            "width"), 10), b = h.style, isNaN(g) || (b.width = b.maxWidth = 2 * g / window.devicePixelRatio + "px"), g = parseInt(a.getStyleValue(f, "width"), 10), b = f.style, isNaN(g) || (b.width = b.maxWidth = 2 * g / window.devicePixelRatio + "px")); this.adjust(0); a = Math.floor(c.offsetHeight / 26); b = Math.round(100 * a / (e.childNodes[1].offsetTop - e.childNodes[0].offsetTop)) / 100; k = .6 < b ? 1 : 2; 1.25 < b && (b = 1.25); for (g = 0; 26 > g; g++) { var n = e.childNodes[g].style; 2 == k && 1 == g % 2 ? n.display = "none" : (n.fontSize = b * k + "em", n.lineHeight = a * k + "px") } g = h.offsetWidth; h.scrollHeight >
                                h.offsetHeight + 3 ? g += e.offsetWidth : e.style.display = "none"; c.style.width = g + "px"; this.lgList.style.visibility = ""; this.scrollToIndex(this.activeLgNo, h, f)
                    }
                }; e.prototype.adjust = function (b) {
                    var a = this.keyman.osk, c = this.keyman.util, d = c.device, h = this.lgList, e = h.firstChild, f = e.firstChild, g = h.style; h = h.childNodes[1]; var n = window.innerHeight - a.vkbd.lgKey.offsetHeight - 16; b = (f.childNodes.length + b - 1) * f.firstChild.firstChild.offsetHeight; "iOS" == d.OS && ("phone" == d.formFactor ? (d = c.landscapeView() ? 36 : 0, n = (window.innerHeight -
                        d - 16) * c.getViewportScale()) : "tablet" == d.formFactor && (d = c.landscapeView() ? 16 : 0, n -= d)); g.left = k.dom.Utils.getAbsoluteX(a.vkbd.lgKey) + "px"; b > n && (b = n); g.height = b + "px"; g.bottom = "0px"; h.style.height = e.style.height = g.height
                }; e.prototype.scrollToLanguage = function (b, a, c) {
                    b.stopImmediatePropagation(); b.stopPropagation(); b.preventDefault(); b = b.touches[0].target; if ("P" == b.nodeName) {
                        var d; b = b.innerHTML.charCodeAt(0); var h = c.childNodes; try {
                            for (d = 0; d < h.length - 1; d++) {
                                var e = h[d].firstChild.innerHTML.toUpperCase().charCodeAt(0);
                                if (e >= b) break
                            }
                        } catch (m) { } this.scrollToIndex(d, a, c)
                    }
                }; e.prototype.scrollToIndex = function (b, a, c) { try { var d = c.firstChild.getBoundingClientRect().height * (b - .5) + 1; a.scrollTop = d } catch (h) { } try { 0 > a.scrollTop && (a.scrollTop = 0), a.scrollTop > a.scrollHeight - a.offsetHeight - 1 && (a.scrollTop = a.scrollHeight - a.offsetHeight - 1) } catch (h) { } }; e.prototype.addLanguages = function (b, a) {
                    var c = a.length, d = this.keyman.util, h = d.device, e, f, g = []; for (f = 0; f < c; f++) { var k = a[f].KL; -1 == g.indexOf(k) && g.push(k) } g.sort(); var n = Math.round(100 /
                        d.getViewportScale()) / 100, v, r, t, p, u = -1; k = function () {
                            v = d._CreateElement("div"); v.className = "kbd-list-closed"; r = d._CreateElement("p"); r.kList = []; for (f = 0; f < c; f++)a[f].KL == g[e] && r.kList.push(a[f]); "iOS" == h.OS && (r.style.fontSize = n + "em"); v.appendChild(r); b.appendChild(v); g[e] == x.keyman.keyboardManager.activeStub.KL && (u = e); var l = x; if (1 < r.kList.length) for (r.className = "kbd-list", r.innerHTML = g[e] + "...", r.scrolled = !1, r.ontouchend = function (a) {
                                a.stopPropagation(); a.target.scrolled ? a.target.scrolled = !1 : this.parentNode.className =
                                    "kbd-list-closed" == this.parentNode.className ? "kbd-list-open" : "kbd-list-closed"; l.adjust("kbd-list-closed" == this.parentNode.className ? 0 : this.kList.length)
                            }, r.addEventListener("touchstart", function (a) { a.stopPropagation() }, !1), r.addEventListener("touchmove", function (a) { a.target.scrolled = !0; a.stopPropagation() }, !1), t = 0; t < r.kList.length; t++)p = d._CreateElement("p"), p.className = "kbd-list-entry", "iOS" == h.OS && (p.style.fontSize = n + "em"), x.addKeyboard(r.kList[t], p, !1), v.appendChild(p); else r.innerHTML = g[e], r.className =
                                "kbd-single-entry", x.addKeyboard(r.kList[0], r, !0); e == u && (r.className += " current")
                        }; var x = this; for (e = 0; e < g.length; e++)k(); k = d._CreateElement("div"); k.id = "kmw-menu-footer"; var A = function (a) { a.cancelable && a.preventDefault(); a.stopPropagation() }; k.addEventListener("touchstart", A, !1); k.addEventListener("touchmove", A, !1); k.addEventListener("touchend", A, !1); b.appendChild(k); return u
                }; e.prototype.addKeyboard = function (b, a, c) {
                    var d = this; a.kn = b.KI; a.kc = b.KLC; a.innerHTML = c ? b.KL : b.KN.replace(" Keyboard", ""); var h =
                        this, e = function () { if (d.originalBodyStyle) { var a = d.originalBodyStyle, b = document.body.style; b.overflowY = a.overflowY; b.height = a.height; d.originalBodyStyle = null } else console.error("Unexpected state:  `originalBodyStyle` is unset; cannot restore original body style") }; b = function (a) {
                            a.stopPropagation(); 0 >= this.className.indexOf("selected") && (this.className += " selected"); h.scrolling = !1; h.y0 = a.touches[0].pageY; if (d.originalBodyStyle) console.error("Unexpected state:  `originalBodyStyle` was not cleared by a previous `unlockBodyScroll()` call");
                            else { d.originalBodyStyle = {}; a = d.originalBodyStyle; var b = document.body.style; a.overflowY = b.overflowY; a.height = b.height; b.overflowY = "hidden"; b.height = "100%" }
                        }; c = function (a) {
                            a.stopImmediatePropagation(); var b = h.lgList.childNodes[0], c = b.scrollHeight - b.offsetHeight; if ("undefined" != typeof a.pageY) a = a.pageY; else if ("undefined" != typeof a.touches) a = a.touches[0].pageY; else return; var d = a - h.y0; if (0 > d) b.scrollTop >= c - 1 && (h.y0 = a); else if (0 < d) 2 > b.scrollTop && (h.y0 = a); else return; if (-5 > d || 5 < d) h.scrolling = !0, this.className =
                                this.className.replace(/\s*selected/, ""), h.y0 = a; return !0
                        }; var g = function (a) {
                            "undefined" != typeof a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.stopPropagation(); h.scrolling ? this.className = this.className.replace(/\s*selected/, "") : (f.keyman.dom.DOMEventHandlers.states.setFocusTimer(), h.lgList.style.display = "none", h.keyman.keyboardManager._SetActiveKeyboard(this.kn, this.kc, !0), h.keyman.keyboardManager.doKeyboardChange(this.kn, this.kc), h.keyman.domManager.focusLastActiveElement(), h.hide());
                            e(); return !0
                        }; a.onmspointerdown = b; a.addEventListener("touchstart", b, !1); a.onmspointermove = c; a.addEventListener("touchmove", c, !1); a.onmspointerout = g; a.addEventListener("touchend", g, !1); a.addEventListener("touchcancel", function (a) { e() }, !1)
                }; e.prototype.hide = function () {
                    var b = this.keyman.osk, a = this; this.lgList && (b.vkbd.highlightKey(b.vkbd.lgKey, !1), this.lgList.style.visibility = "hidden", window.setTimeout(function () { a.shim.parentElement && (document.body.removeChild(a.shim), document.body.removeChild(a.lgList)) },
                        500))
                }; return e
            }(); g.LanguageMenu = n
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            var g = function () {
                function e(b) { b = "string" == typeof b ? e.parseLengthStyle(b) : b; this.val = b.val; this.absolute = b.absolute; b.special && (this.special = b.special) } Object.defineProperty(e.prototype, "styleString", { get: function () { return this.absolute ? this.val + "px" : this.special ? this.val + this.special : 100 * this.val + "%" }, enumerable: !1, configurable: !0 }); e.prototype.scaledBy = function (b) { return new e({ val: b * this.val, absolute: this.absolute }) }; e.inPixels = function (b) {
                    return new e({
                        val: b,
                        absolute: !0
                    })
                }; e.inPercent = function (b) { return new e({ val: b / 100, absolute: !1 }) }; e.forScalar = function (b) { return new e({ val: b, absolute: !1 }) }; e.special = function (b, a) { return new e({ val: b, absolute: !1, special: a }) }; e.parseLengthStyle = function (b) {
                    var a = parseFloat(b); return isNaN(a) ? (console.error("Could not properly parse specified length style info: '" + b + "'."), null) : -1 != b.indexOf("px") ? { val: a, absolute: !0 } : -1 != b.indexOf("pt") ? { val: 4 * a / 3, absolute: !0 } : -1 != b.indexOf("%") ? { val: a / 100, absolute: !1 } : -1 != b.indexOf("rem") ?
                        { val: a, absolute: !1, special: "rem" } : -1 != b.indexOf("em") ? { val: a, absolute: !1, special: "em" } : { val: 4 * a / 3, absolute: !0 }
                }; return e
            }(); f.ParsedLengthStyle = g
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            (function (k) {
                var e = function () {
                    function b(a) { this.mouseCancellingHandler = function (a) { a.preventDefault(); a.cancelBubble = !0; return !1 }; this._element = this.buildResizeBar(); a && (this._resizeHandle.onmousedown = a.mouseDownHandler) } Object.defineProperty(b.prototype, "layoutHeight", { get: function () { return b.DISPLAY_HEIGHT }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype, "element", { get: function () { return this._element }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype,
                        "handle", { get: function () { return this._resizeHandle }, enumerable: !1, configurable: !0 }); b.prototype.allowResizing = function (a) { this._resizeHandle.style.display = a ? "block" : "none" }; b.prototype.markUnselectable = function (a) { a.style.MozUserSelect = "none"; a.style.KhtmlUserSelect = "none"; a.style.UserSelect = "none"; a.style.WebkitUserSelect = "none" }; b.prototype.buildResizeBar = function () {
                            var a = f.keyman.singleton.util, b = f.keyman.singleton.osk, d = document.createElement("div"); this.markUnselectable(d); d.className = "kmw-footer";
                            d.onmousedown = this.mouseCancellingHandler; var h = document.createElement("div"); this.markUnselectable(h); h.className = "kmw-footer-caption"; h.innerHTML = '<a href="https://keyman.com/developer/keymanweb/">KeymanWeb</a>'; h.id = "keymanweb-osk-footer-caption"; a.attachDOMEvent(h, "dblclick", function (a) { a && a.shiftKey && b.showBuild(); return !1 }.bind(this), !1); d.appendChild(h); a = document.createElement("div"); this.markUnselectable(a); a.className = "kmw-footer-resize"; d.appendChild(a); this._resizeHandle = a; return d
                        }; b.prototype.refreshLayout =
                            function () { }; b.DISPLAY_HEIGHT = g.ParsedLengthStyle.inPixels(16); return b
                }(); k.ResizeBar = e
            })(g.layouts || (g.layouts = {}))
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            var g = function () {
                function e(b, a, c) { this.x = b; this.y = a; c && (this.source = c) } e.fromEvent = function (b) { var a = window.TouchEvent && b instanceof TouchEvent ? b.changedTouches[0] : b.changedTouches ? b.changedTouches[0] : b; return a.pageX ? new e(a.pageX, a.pageY, b) : a.clientX ? new e(a.clientX + document.body.scrollLeft, a.clientY + document.body.scrollTop, b) : new e(null, null, b) }; Object.defineProperty(e.prototype, "activeInputCount", {
                    get: function () {
                        return window.TouchEvent && void 0 !== this.source.touches &&
                            null !== this.source.touches ? this.source.touches.length : 0 < this.source.buttons ? 1 : 0
                    }, enumerable: !1, configurable: !0
                }); Object.defineProperty(e.prototype, "target", { get: function () { var b; return null === (b = this.source) || void 0 === b ? void 0 : b.target }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "isFromTouch", { get: function () { return !this.isFromMouse }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "isFromMouse", {
                    get: function () { return this.source instanceof MouseEvent }, enumerable: !1,
                    configurable: !0
                }); return e
            }(); f.InputEventCoordinate = g
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            (function (g) {
                var e = function () {
                    function a(a) { this._VPreviousMouseMove = document.onmousemove; this._VPreviousMouseUp = document.onmouseup; this._VPreviousCursor = document.body.style.cursor; this._VPreviousMouseButton = "undefined" == typeof a.which ? a.button : a.which } a.prototype.restore = function () { document.onmousemove = this._VPreviousMouseMove; document.onmouseup = this._VPreviousMouseUp; document.body.style.cursor && (document.body.style.cursor = this._VPreviousCursor) }; a.prototype.matchesCausingClick =
                        function (a) { return this._VPreviousMouseButton == ("undefined" == typeof a.which ? a.button : a.which) }; return a
                }(), b = function () {
                    function a(a) { this.startHandler = this._VMoveMouseDown.bind(this); this.cursorType = a } Object.defineProperty(a.prototype, "enabled", { get: function () { return this._enabled }, set: function (a) { this._enabled = a }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype, "isActive", { get: function () { return !!this._mouseStartSnapshot }, enumerable: !1, configurable: !0 }); Object.defineProperty(a.prototype,
                        "mouseDownHandler", { get: function () { return this.startHandler }, enumerable: !1, configurable: !0 }); a.prototype._VMoveMouseDown = function (a) {
                            if (!a || !this._enabled) return !0; this._mouseStartSnapshot || (this._mouseStartSnapshot = new e(a)); this._startCoord = f.InputEventCoordinate.fromEvent(a); document.onmousemove = this._VMoveMouseMove.bind(this); document.onmouseup = this._VMoveMouseUp.bind(this); document.body.style.cursor && (document.body.style.cursor = this.cursorType); a.preventDefault(); a.cancelBubble = !0; this.onDragStart();
                            return !1
                        }; a.prototype._VMoveMouseMove = function (a) { if (!a || !this.enabled) return !0; a.preventDefault(); a.cancelBubble = !0; return this._mouseStartSnapshot.matchesCausingClick(a) ? (a = f.InputEventCoordinate.fromEvent(a), this.onDragMove(a.x - this._startCoord.x, a.y - this._startCoord.y), !1) : this._VMoveMouseUp(a) }; a.prototype._VMoveMouseUp = function (a) { if (!a) return !0; this._mouseStartSnapshot.restore(); this._mouseStartSnapshot = null; a.preventDefault(); a.cancelBubble = !0; this.onDragRelease(); return !1 }; return a
                }(); g.MouseDragOperation =
                    b
            })(f.layouts || (f.layouts = {}))
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            (function (k) {
                var e = function () {
                    function b(a) { this.mouseCancellingHandler = function (a) { a.preventDefault(); a.cancelBubble = !0; return !1 }; this._element = this.buildTitleBar(); this.configEnabled = this.helpEnabled = !1; a && (this.element.onmousedown = a.mouseDownHandler) } Object.defineProperty(b.prototype, "helpEnabled", { get: function () { return this._helpEnabled }, set: function (a) { this._helpEnabled = a; this._helpButton.style.display = a ? "inline" : "none" }, enumerable: !1, configurable: !0 });
                    Object.defineProperty(b.prototype, "configEnabled", { get: function () { return this._configEnabled }, set: function (a) { this._configEnabled = a; this._configButton.style.display = a ? "inline" : "none" }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype, "layoutHeight", { get: function () { return b.DISPLAY_HEIGHT }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype, "element", { get: function () { return this._element }, enumerable: !1, configurable: !0 }); b.prototype.setPinCJKOffset = function () {
                        this._unpinButton.style.left =
                        "15px"
                    }; b.prototype.showPin = function (a) { this._unpinButton.style.display = a ? "block" : "none" }; b.prototype.setTitle = function (a) { this._caption.innerHTML = a }; b.prototype.setTitleFromKeyboard = function (a) { this._caption.innerHTML = "<span style='font-weight:bold'>" + (null === a || void 0 === a ? void 0 : a.name) + "</span>" }; b.prototype.attachHandlers = function (a) {
                        var b = f.keyman.singleton.util; this._helpButton.onclick = function () { b.callEvent("osk.helpclick", {}); window.event && (window.event.returnValue = !1); return !1 }; this._configButton.onclick =
                            function () { b.callEvent("osk.configclick", {}); window.event && (window.event.returnValue = !1); return !1 }; this._closeButton.onclick = function () { a.startHide(!0); return !1 }; a instanceof g.FloatingOSKView && (this._unpinButton.onclick = function () { a.restorePosition(!0); return !1 })
                    }; b.prototype.buildTitleBar = function () {
                        var a = document.createElement("div"); this.markUnselectable(a); a.id = "keymanweb_title_bar"; a.className = "kmw-title-bar"; var b = this._caption = document.createElement("span"); this.markUnselectable(b); b.className =
                            "kmw-title-bar-caption"; b.style.color = "#fff"; a.appendChild(b); b = this._closeButton = this.buildCloseButton(); a.appendChild(b); b = this._helpButton = this.buildHelpButton(); a.appendChild(b); b = this._configButton = this.buildConfigButton(); a.appendChild(b); b = this._unpinButton = this.buildUnpinButton(); a.appendChild(b); return a
                    }; b.prototype.markUnselectable = function (a) { a.style.MozUserSelect = "none"; a.style.KhtmlUserSelect = "none"; a.style.UserSelect = "none"; a.style.WebkitUserSelect = "none" }; b.prototype.buildCloseButton =
                        function () { var a = document.createElement("div"); this.markUnselectable(a); a.id = "kmw-close-button"; a.className = "kmw-title-bar-image"; a.onmousedown = this.mouseCancellingHandler; return a }; b.prototype.buildHelpButton = function () { var a = document.createElement("div"); this.markUnselectable(a); a.id = "kmw-help-image"; a.className = "kmw-title-bar-image"; a.title = "KeymanWeb Help"; a.onmousedown = this.mouseCancellingHandler; return a }; b.prototype.buildConfigButton = function () {
                            var a = document.createElement("div"); this.markUnselectable(a);
                            a.id = "kmw-config-image"; a.className = "kmw-title-bar-image"; a.title = "KeymanWeb Configuration Options"; a.onmousedown = this.mouseCancellingHandler; return a
                        }; b.prototype.buildUnpinButton = function () { var a = document.createElement("div"); this.markUnselectable(a); a.id = "kmw-pin-image"; a.className = "kmw-title-bar-image"; a.title = "Pin the On Screen Keyboard to its default location on the active text box"; a.onmousedown = this.mouseCancellingHandler; return a }; b.prototype.refreshLayout = function () { }; b.DISPLAY_HEIGHT = g.ParsedLengthStyle.inPixels(20);
                    return b
                }(); k.TitleBar = e
            })(g.layouts || (g.layouts = {}))
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            (function (g) {
                var e = function () {
                    function b() { this.titleBar = new g.TitleBar(this.titleDragHandler); this.resizeBar = new g.ResizeBar(this.resizeDragHandler) } Object.defineProperty(b.prototype, "movementEnabled", { get: function () { return this.titleDragHandler.enabled }, set: function (a) { this.titleDragHandler.enabled = a; this.titleBar.showPin(a && this.oskView.userPositioned) }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype, "resizingEnabled", {
                        get: function () { return this.resizeDragHandler.enabled },
                        set: function (a) { this.resizeDragHandler.enabled = a; this.resizeBar.allowResizing(a) }, enumerable: !1, configurable: !0
                    }); Object.defineProperty(b.prototype, "isBeingMoved", { get: function () { return this.titleDragHandler.isActive }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype, "isBeingResized", { get: function () { return this.resizeDragHandler.isActive }, enumerable: !1, configurable: !0 }); b.prototype.attachToView = function (a) {
                        this.oskView = a; this.titleBar.attachHandlers(a); this.titleDragHandler.enabled =
                            !a.noDrag; this.resizeDragHandler.enabled = !0
                    }; Object.defineProperty(b.prototype, "titleDragHandler", {
                        get: function () {
                            var a = this; return this._moveHandler ? this._moveHandler : this._moveHandler = new (function (b) {
                                function c() { return b.call(this, "move") || this } __extends(c, b); c.prototype.onDragStart = function () { if (a.oskView) { this.startX = a.oskView._Box.offsetLeft; this.startY = a.oskView._Box.offsetTop; var b = f.keyman.singleton; b.isCJK() && a.titleBar.setPinCJKOffset(); b.uiManager.justActivated = !0 } }; c.prototype.onDragMove =
                                    function (b, c) { a.oskView && (a.titleBar.showPin(!0), a.oskView.userPositioned = !0, a.oskView._Box.style.left = this.startX + b + "px", a.oskView._Box.style.top = this.startY + c + "px", b = a.oskView.getRect(), a.oskView.setSize(b.width, b.height, !0), a.oskView.x = b.left, a.oskView.y = b.top) }; c.prototype.onDragRelease = function () {
                                        if (a.oskView) {
                                            var b = f.keyman.singleton; b.domManager.focusLastActiveElement(); b.uiManager.justActivated = !1; b.uiManager.setActivatingUI(!1); a.oskView.vkbd && (a.oskView.vkbd.currentKey = null); a.oskView.userPositioned =
                                                !0; a.oskView.doResizeMove(); a.oskView.saveCookie()
                                        }
                                    }; return c
                            }(g.MouseDragOperation))
                        }, enumerable: !1, configurable: !0
                    }); Object.defineProperty(b.prototype, "resizeDragHandler", {
                        get: function () {
                            var a = this; return this._resizeHandler ? this._resizeHandler : this._resizeHandler = new (function (b) {
                                function c() { return b.call(this, "se-resize") || this } __extends(c, b); c.prototype.onDragStart = function () {
                                    a.oskView && (this.startWidth = a.oskView.computedWidth, this.startHeight = a.oskView.computedHeight, f.keyman.singleton.uiManager.justActivated =
                                        !0)
                                }; c.prototype.onDragMove = function (b, c) { a.oskView && (b = this.startWidth + b, c = this.startHeight + c, b < .2 * screen.width && (b = .2 * screen.width), c < .1 * screen.height && (c = .1 * screen.height), b > .9 * screen.width && (b = .9 * screen.width), c > .5 * screen.height && (c = .5 * screen.height), a.oskView.setSize(b, c, !0)) }; c.prototype.onDragRelease = function () {
                                    if (a.oskView) {
                                        var b = f.keyman.singleton; b.domManager.focusLastActiveElement(); b.uiManager.justActivated = !1; b.uiManager.setActivatingUI(!1); a.oskView.vkbd && (a.oskView.vkbd.currentKey =
                                            null); a.oskView.vkbd && (this.startWidth = a.oskView.computedWidth, this.startHeight = a.oskView.computedHeight); a.oskView.refreshLayout(); a.oskView.doResizeMove(); a.oskView.saveCookie()
                                    }
                                }; return c
                            }(g.MouseDragOperation))
                        }, enumerable: !1, configurable: !0
                    }); return b
                }(); g.TargetedFloatLayout = e
            })(g.layouts || (g.layouts = {}))
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function () {
                function e() { } e.clickKey = function (b, a) { return (b = f.keyman.singleton.osk.vkbd.initKeyEvent(b, a)) ? this.raiseKeyEvent(b) : !0 }; e.raiseKeyEvent = function (b) {
                    var a = f.keyman.singleton, c = a.domManager.lastActiveElement; if (null != c) {
                        var d = k.dom.Utils.getOutputTarget(c); a.domManager.initActiveElement(c); d.invalidateSelection(); d.deadkeys().deleteMatched(); a.isEmbedded || (a.uiManager.setActivatingUI(!0), f.keyman.dom.DOMEventHandlers.states._IgnoreNextSelChange =
                            100, a.domManager.focusLastActiveElement(), f.keyman.dom.DOMEventHandlers.states._IgnoreNextSelChange = 0); b = e.handleClick(b, d, null); a.uiManager.setActivatingUI(!1); return b
                    } return !0
                }; e.handleClick = function (b, a, c) { var d = f.keyman.singleton; return "K_LOPT" == b.kName || "K_ROPT" == b.kName ? (d.osk.vkbd.optionKey(c, b.kName, !0), !0) : !!d.core.processKeyEvent(b, a) }; return e
            }(); g.PreProcessor = n
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) { (function (f) { (function (f) { f.getFontSizeStyle = function (g) { if ("string" == typeof g) var e = g; else e = g.style.fontSize, e || (e = getComputedStyle(g).fontSize); return new f.ParsedLengthStyle(e) } })(f.osk || (f.osk = {})) })(f.keyman || (f.keyman = {})) })(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            function n(a) { return a && "key" in a && a.key instanceof b } var e = function () { return function (a, b) { this.key = a; this.keyId = b } }(); g.KeyData = e; g.link = function (a, b) { for (var c in b) a.hasOwnProperty(c) || (a[c] = b[c]); return a }; g.isKey = n; g.getKeyFrom = function (a) { return n(a) ? a : null }; e = function () { return function (a, b, d, h, e, f) { this.id = a; this.text = b; this.width = d ? d : 50; this.sp = h; this.nextlayer = e; this.pad = f } }(); g.OSKKeySpec = e; var b = function () {
                function a(a, b) { this.spec = a; this.layer = b }
                a.prototype.setButtonClass = function () { var b, d = this.spec, h = this.btn, e = 0; "string" == typeof d.dk && "1" == d.dk && (e = 8); e = null !== (b = d.sp) && void 0 !== b ? b : e; if (0 > e || 10 < e) e = 0; h.className = "kmw-key kmw-key-" + a.BUTTON_CLASSES[e] }; a.prototype.setToggleState = function (b) {
                    var c = this.spec.sp; switch (a.BUTTON_CLASSES[c]) {
                        case "shift": case "shift-on": void 0 === b && (b = "shift" == a.BUTTON_CLASSES[c]); this.spec.sp = 1 + (b ? 1 : 0); break; case "special": case "special-on": void 0 === b && (b = "special" == a.BUTTON_CLASSES[c]); this.spec.sp = 3 + (b ?
                            1 : 0); break; default: return
                    }this.setButtonClass()
                }; a.prototype.isFrameKey = function () { switch (a.BUTTON_CLASSES[this.spec.sp || 0]) { case "default": case "deadkey": return !1; default: return !0 } }; a.prototype.allowsKeyTip = function () { return this.isFrameKey() ? !1 : !this.btn.classList.contains("kmw-spacebar") }; a.prototype.highlight = function (b) { var c = this.btn.classList; b ? c.contains(a.HIGHLIGHT_CLASS) || c.add(a.HIGHLIGHT_CLASS) : c.remove(a.HIGHLIGHT_CLASS) }; a.getTextMetrics = function (b, d, h) {
                    h = { fontFamily: h.fontFamily, fontSize: h.fontSize };
                    h.fontFamily || (h.fontFamily = getComputedStyle(document.body).fontFamily); h.fontSize && "" != h.fontSize || (h.fontSize = "1em"); var c = h.fontFamily; h = g.getFontSizeStyle(h.fontSize); d = h.absolute ? h.val + "px" : h.val * d + "px"; h = (a.getTextMetrics.canvas || (a.getTextMetrics.canvas = document.createElement("canvas"))).getContext("2d"); h.font = d + " " + c; return h.measureText(b)
                }; a.prototype.getIdealFontSize = function (b, d, h, e) {
                    var c = getComputedStyle(this.btn), f = parseFloat(c.width), l = 1, k = g.getFontSizeStyle(h.fontSize || "1em"); c.fontSize ?
                        e || (h = c) : (l = b.getKeyEmFontSize(), f = this.getKeyWidth(b)); b = g.getFontSizeStyle(h.fontSize || "1em"); d = a.getTextMetrics(d, l, h); var n, r; d.fontBoundingBoxAscent && (n = d.fontBoundingBoxAscent + d.fontBoundingBoxDescent); n = n ? n + 2 : 0; h.height && -1 != h.height.indexOf("px") && (r = Number.parseFloat(h.height.substring(0, h.height.indexOf("px")))); h = .9 * f / (d.width + 2); r = n && r ? .9 * r / n : void 0; f = h; r && r < h && (f = r); return 1 > f ? k.absolute ? f * b.val + "px" : f * k.val + "em" : k.absolute ? b.val + "px" : k.val + "em"
                }; a.prototype.getKeyWidth = function (a) {
                    return this.spec.proportionalWidth *
                        a.width
                }; a.prototype.renameSpecialKey = function (a, b) { switch (a) { case "*ZWNJ*": a = b.device.OS == f.keyman.utils.OperatingSystem.Android ? "*ZWNJAndroid*" : "*ZWNJiOS*"; break; case "*Enter*": a = b.isRTL ? "*RTLEnter*" : "*LTREnter*"; break; case "*BkSp*": a = b.isRTL ? "*RTLBkSp*" : "*LTRBkSp*" }b = 57344 + g.VisualKeyboard.specialCharacters[a]; return g.VisualKeyboard.specialCharacters[a] ? String.fromCharCode(b) : a }; Object.defineProperty(a.prototype, "keyText", {
                    get: function () {
                        var a = this.spec, b = null; null == a.text || "" == a.text ? ("string" ==
                            typeof a.id && (b = k.keyboards.ActiveKey.unicodeIDToText(a.id)), b = b || "\u00a0") : (b = a.text, "*Tab*" == b && "shift" == this.layer && (b = "*TabLeft*")); return b
                    }, enumerable: !1, configurable: !0
                }); a.prototype.generateKeyText = function (b) {
                    var c = this.spec, h = document.createElement("span"), e = h.style; h.className = "kmw-key-text"; var f = this.keyText, g = this.renameSpecialKey(f, b); g != f && (f = g, c.font = "SpecialOSK"); "string" == typeof c.font && "" != c.font && (e.fontFamily = c.font); "string" == typeof c.fontsize && "" != c.fontsize && (e.fontSize = c.fontsize);
                    c = { fontSize: e.fontSize }; c.fontFamily = e.fontFamily ? e.fontFamily : b.fontFamily; g = b.getKeyEmFontSize(); 0 == a.getTextMetrics(f, g, c).width && "" != f && "\u00a0" != f && b.isRTL && (f = "\u200f" + f); e.fontSize = this.getIdealFontSize(b, f, c); h.innerText = f; return h
                }; a.prototype.isUnderTouch = function (a) { var b = a.x; a = a.y; var c = this.btn, e = k.dom.Utils.getAbsoluteX(c), f = k.dom.Utils.getAbsoluteY(c), g = e + c.offsetWidth; c = f + c.offsetHeight; return b > e && b < g && a > f && a < c }; a.prototype.refreshLayout = function (a) {
                    this.label && (this.label.classList.contains("kmw-spacebar-caption") ?
                        (this.label.style.fontSize = "", a = this.getIdealFontSize(a, this.label.textContent, getComputedStyle(this.label), !0), this.label.style.setProperty("font-size", a, "important")) : this.label.style.fontSize = this.getIdealFontSize(a, this.keyText, this.btn.style))
                }; a.specialCharacters = {
                    "*Shift*": 8, "*Enter*": 5, "*Tab*": 6, "*BkSp*": 4, "*Menu*": 11, "*Hide*": 10, "*Alt*": 25, "*Ctrl*": 1, "*Caps*": 3, "*ABC*": 16, "*abc*": 17, "*123*": 19, "*Symbol*": 21, "*Currency*": 20, "*Shifted*": 9, "*AltGr*": 2, "*TabLeft*": 7, "*LAlt*": 86, "*RAlt*": 87, "*LCtrl*": 88,
                    "*RCtrl*": 89, "*LAltCtrl*": 96, "*RAltCtrl*": 97, "*LAltCtrlShift*": 98, "*RAltCtrlShift*": 99, "*AltShift*": 100, "*CtrlShift*": 101, "*AltCtrlShift*": 102, "*LAltShift*": 103, "*RAltShift*": 104, "*LCtrlShift*": 105, "*RCtrlShift*": 112, "*LTREnter*": 5, "*LTRBkSp*": 4, "*RTLEnter*": 113, "*RTLBkSp*": 114, "*ShiftLock*": 115, "*ShiftedLock*": 116, "*ZWNJ*": 117, "*ZWNJiOS*": 117, "*ZWNJAndroid*": 118
                }; a.BUTTON_CLASSES = "default shift shift-on special special-on    deadkey blank hidden".split(" "); a.HIGHLIGHT_CLASS = "kmw-key-touched"; return a
            }();
            g.OSKKey = b
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = f.keyman.text.Codes, e = function (b) {
                function a(a, d, h) { a = b.call(this, a, d) || this; a.row = h; return a } __extends(a, b); a.prototype.getId = function () { return this.spec.elementID }; a.prototype.getCoreId = function () { return this.spec.coreID }; a.prototype.getBaseId = function () { return this.spec.baseKeyID }; a.prototype.generateKeyCapLabel = function () {
                    var a = n.keyCodes[this.spec.baseKeyID]; switch (a) {
                        case 186: a = 59; break; case 187: a = 61; break; case 188: a = 44; break; case 189: a = 45; break;
                        case 190: a = 46; break; case 191: a = 47; break; case 192: a = 96; break; case 219: a = 91; break; case 220: a = 92; break; case 221: a = 93; break; case 222: a = 39; break; default: if (48 > a || 90 < a) a = 0
                    }var b = document.createElement("div"); b.className = "kmw-key-label"; 0 < a && (b.innerText = String.fromCharCode(a)); return b
                }; a.prototype.processSubkeys = function (a, b) {
                    var c, d = a.subKeys = this.spec.sk; for (c = 0; c < d.length; c++) { if (1 == d[c].sp || 2 == d[c].sp) d[c].text = this.renameSpecialKey(d[c].text, b); d[c].layer || (d[c].layer = a.key.layer) } b = document.createElement("div");
                    b.className = "kmw-key-popup-icon"; a.appendChild(b)
                }; a.prototype.construct = function (a) {
                    var b = this.spec, c = document.createElement("div"); c.className = "kmw-key-square"; var e = document.createElement("div"); e = this.btn = g.link(e, new g.KeyData(this, b.id)); this.setButtonClass(); var f = this.capLabel = this.generateKeyCapLabel(); e.appendChild(f); e.id = this.getId(); e.appendChild(this.label = this.generateKeyText(a)); "undefined" != typeof b.sk && null != b.sk ? this.processSubkeys(e, a) : e.subKeys = null; c.appendChild(e); return this.square =
                        c
                }; a.prototype.refreshLayout = function (a) {
                    var c = this.spec; this.square.style.width = a.layoutWidth.scaledBy(c.proportionalWidth).styleString; this.square.style.marginLeft = a.layoutWidth.scaledBy(c.proportionalPad).styleString; this.btn.style.width = a.usesFixedWidthScaling ? this.square.style.width : "100%"; this.square.style.height = a.usesFixedHeightScaling ? a.internalHeight.scaledBy(this.row.heightFraction).styleString : "100%"; b.prototype.refreshLayout.call(this, a); c = f.keyman.singleton.util; a = a.device; a.OS == k.utils.OperatingSystem.iOS &&
                        a.formFactor == k.utils.FormFactor.Phone && c.landscapeView() && this.capLabel && (this.capLabel.style.fontSize = "6px")
                }; Object.defineProperty(a.prototype, "displaysKeyCap", { get: function () { return this.capLabel && "block" == this.capLabel.style.display }, set: function (a) { if (!this.capLabel) throw Error("Key element not yet constructed; cannot display key cap"); this.capLabel.style.display = a ? "block" : "none" }, enumerable: !1, configurable: !0 }); return a
            }(g.OSKKey); g.OSKBaseKey = e
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com ||
    (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            var g = function () {
                function e(b, a, c) { var d = this.element = document.createElement("div"); d.className = "kmw-key-row"; this.heightFraction = 1 / a.row.length; c = c.key; this.keys = []; for (var e = 0; e < c.length; e++) { var g = new f.OSKBaseKey(c[e], a.id, this), k = g.construct(b); this.keys.push(g); d.appendChild(k) } } Object.defineProperty(e.prototype, "displaysKeyCaps", {
                    get: function () { if (0 < this.keys.length) return this.keys[0].displaysKeyCap }, set: function (b) {
                        for (var a = 0, c = this.keys; a < c.length; a++)c[a].displaysKeyCap =
                            b
                    }, enumerable: !1, configurable: !0
                }); e.prototype.refreshLayout = function (b) {
                    var a = this.element.style, c = b.internalHeight.scaledBy(this.heightFraction); a.maxHeight = a.lineHeight = a.height = c.styleString; a = b.usesFixedHeightScaling ? c : f.ParsedLengthStyle.forScalar(1); c = a.scaledBy(.075); for (var d = a.scaledBy(.85), e = 0, g = this.keys; e < g.length; e++) {
                        var k = g[e], n = k.btn; k = k.btn.parentElement.style; k.height = k.minHeight = a.styleString; k = n.style; k.top = c.styleString; k.height = k.lineHeight = k.minHeight = d.styleString; n.key &&
                            n.key.refreshLayout(b)
                    }
                }; return e
            }(); f.OSKRow = g
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            var g = function () {
                function e(b, a, c) {
                    this.spec = c; var d = this.element = document.createElement("div"), e = d.style; d.className = "kmw-key-layer"; 4 < c.row.length && "phone" == b.device.formFactor && (d.className += " kmw-5rows"); e.fontFamily = "font" in a ? a.font : ""; this.nextlayer = d.layer = c.id; "string" == typeof c.nextlayer && (d.nextLayer = this.nextlayer = c.nextlayer); e = c.row; this.rows = []; for (var g = 0; g < e.length; g++) {
                        var k = new f.OSKRow(b, c, e[g]); k.displaysKeyCaps = a.displayUnderlying; d.appendChild(k.element);
                        this.rows.push(k)
                    } b.device.touchable && (this.globeKey = this.findKey("K_LOPT"), this.hideKey = this.findKey("K_ROPT")); this.spaceBarKey = this.findKey("K_SPACE"); this.capsKey = this.findKey("K_CAPS"); this.numKey = this.findKey("K_NUMLOCK"); this.scrollKey = this.findKey("K_SCROLL")
                } Object.defineProperty(e.prototype, "rowHeight", { get: function () { return this._rowHeight }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "id", { get: function () { return this.spec.id }, enumerable: !1, configurable: !0 }); e.prototype.findKey =
                    function (b) { for (var a = 0, c = this.rows; a < c.length; a++)for (var d = 0, e = c[a].keys; d < e.length; d++) { var f = e[d]; if (f.getBaseId() == b) return f } return null }; e.prototype.refreshLayout = function (b, a) { var c = this.rows.length, d = this._rowHeight = Math.floor(a / (0 == c ? 1 : c)); b.usesFixedHeightScaling && (this.element.style.height = a + "px"); for (var e = 0; e < c; e++) { var f = this.rows[e], g = (c - e - 1) * d + 1; b.usesFixedHeightScaling && (this.spec.row[e].proportionalY = (a - g - d / 2) / a, e == c - 1 && (f.element.style.bottom = "1px")); f.refreshLayout(b) } }; return e
            }();
            f.OSKLayer = g
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            var g = function () { return function (e, b, a) { this.layers = {}; b = b.layout(a); a = this.element = document.createElement("div"); var c = a.style; a.className = "kmw-key-layer-group"; if (null != b) { var d = b.fontsize; c.fontSize = "undefined" == typeof d || null == d || "" == d ? "1em" : b.fontsize; d = b.layer; e.getDefaultKeyObject().fontsize = c.fontSize; for (c = 0; c < d.length; c++) { var h = d[c], g = new f.OSKLayer(e, b, h); this.layers[h.id] = g; g.element.style.display = 0 == c ? "block" : "none"; a.appendChild(g.element) } } } }();
            f.OSKLayerGroup = g
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            (function (g) {
                var e = function () {
                    function b(a) {
                        this.state = !1; var b = this.element = document.createElement("div"); b.className = "kmw-keytip"; b.id = "kmw-keytip"; b.style.pointerEvents = "none"; b.style.display = "none"; b.appendChild(this.tip = document.createElement("div")); b.appendChild(this.cap = document.createElement("div")); this.tip.appendChild(this.label = document.createElement("span")); this.tip.className = "kmw-keytip-tip"; this.cap.className = "kmw-keytip-cap"; this.label.className =
                            "kmw-keytip-label"; this.constrain = a
                    } b.prototype.show = function (a, b, d) {
                        var c = f.keyman.singleton, e = c.util; if (b && a.offsetParent) {
                            var g = a.key.row.element, k = a.getClientRects()[0]; g = g.getClientRects()[0]; var n = k.left - g.left; g = k.width; var y = k.height, v = a.key.label; k = this.element.style; var r = d.element.parentNode.getBoundingClientRect(), t = a.getBoundingClientRect(), p = t.bottom - r.top + 1, u = g + 2 * Math.ceil(.3 * g), x = Math.ceil(2.3 * y) + (p - Math.floor(p)); k.top = "auto"; k.bottom = Math.floor(c.osk.computedHeight - p) + "px"; k.textAlign =
                                "center"; k.overflow = "visible"; k.fontFamily = e.getStyleValue(v, "font-family"); k.width = u + "px"; k.height = x + "px"; e = e.getStyleInt(v, "font-size"); 0 != e && (k.fontSize = a.key.getIdealFontSize(d, a.key.keyText, { fontFamily: k.fontFamily, fontSize: 1.8 * e + "px", height: 1.6 * y + "px" }, !0)); this.label.textContent = v.textContent; d = (u - g) / 2; n < d ? (this.cap.style.left = "1px", n += d - 1) : n > window.innerWidth - g - d ? (this.cap.style.left = u - g - 1 + "px", n -= d - 1) : this.cap.style.left = d + "px"; k.left = n - d + "px"; e = getComputedStyle(this.element); c = c.osk.computedHeight;
                            d = parseFloat(e.bottom); e = parseFloat(e.height); n = Math.ceil(x / 2); this.cap.style.width = g + "px"; this.tip.style.height = n + "px"; this.cap.style.top = n - 3 + "px"; this.cap.style.height = t.bottom - r.top - Math.floor(p - x) - n + "px"; this.constrain && e + d > c && (g = e + d - c, k.height = x - g + "px", this.cap.style.height = Math.max(0, x - g - x / 2 + 2) + "px"); k.display = "block"
                        } else this.element.style.display = "none"; this.key = a; this.state = b
                    }; return b
                }(); g.KeyTip = e
            })(g.browser || (g.browser = {}))
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com =
    {}));
(function (f) {
    (function (f) {
        (function (f) {
            (function (g) {
                var e = function (b) {
                    function a(a, d) { if ("string" != typeof d || "" == d) throw "The 'layer' parameter for subkey construction must be properly defined."; return b.call(this, a, d) || this } __extends(a, b); a.prototype.getId = function () { return "popup-" + this.layer + "-" + this.spec.id }; a.prototype.construct = function (a, b, e) {
                        var c = this.spec, d = document.createElement("div"), h = a.getDefaultKeyObject(), g = d.style, k; for (k in h) "string" != typeof c[k] && (c[k] = h[k]); d.className = "kmw-key-square-ex"; e &&
                            (g.marginTop = "5px"); g.width = "undefined" != typeof c.width ? c.width * b.offsetWidth / 100 + "px" : b.offsetWidth + "px"; g.height = b.offsetHeight + "px"; e = document.createElement("div"); c = this.btn = f.link(e, new f.KeyData(this, c.id)); this.setButtonClass(); c.id = this.getId(); e = c.style; e.height = g.height; e.lineHeight = b.style.lineHeight; e.width = g.width; e.position = "absolute"; c.appendChild(this.label = this.generateKeyText(a)); d.appendChild(c); return this.square = d
                    }; a.prototype.allowsKeyTip = function () { return !1 }; return a
                }(f.OSKKey);
                g.OSKSubKey = e
            })(f.browser || (f.browser = {}))
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            (function (g) {
                var e = function () {
                    function b(a, b) {
                        var c = f.keyman.singleton, e = this; this.promise = new Promise(function (a) { e.resolver = a }); this.vkbd = a; this.currentSelection = this.baseKey = b; b.key.highlight(!0); var l = b.subKeys, m = this.element = document.createElement("div"); m.id = "kmw-popup-keys"; var n = m.style; n.fontFamily = a.fontFamily; n.fontSize = c.util.getStyleValue(b, "font-size"); n.visibility = "hidden"; c = l.length; var w = Math.min(Math.ceil(c / 9), 2); var y = Math.ceil(c / w); n.width =
                            y * b.offsetWidth + 5 * y + "px"; for (n = 0; n < c; n++) { var v = !1, r = Math.floor(n / y); 1 < w && 0 < r && (v = !0); r = b.key.layer; if ("string" != typeof r || "" == r) r = a.layerId; v = (new g.OSKSubKey(l[n], r)).construct(a, b, v); m.appendChild(v) } this.shim = document.createElement("div"); this.shim.id = "kmw-popup-shim"; a.device.formFactor == k.utils.FormFactor.Phone && this.selectDefaultSubkey(a, b, m)
                    } b.prototype.finalize = function (a) {
                        if (this.resolver) {
                            var b = null; this.currentSelection && (b = this.vkbd.initKeyEvent(this.currentSelection, a), this.currentSelection.key.highlight(!1));
                            this.resolver(b)
                        } this.resolver = null
                    }; b.prototype.reposition = function (a) {
                        var b = f.keyman.singleton, d = this.element, e = this.baseKey, g = a.element.offsetParent, m = e.key.row.element, n = d.style, w = e.offsetLeft + e.offsetParent.offsetLeft + .5 * (e.offsetWidth - d.offsetWidth), y = b.osk.computedWidth - d.offsetWidth; w > y && (w = y); 0 > w && (w = 0); n.left = w + "px"; g = g.getBoundingClientRect(); m = m.getBoundingClientRect(); n.top = m.top - g.top - d.offsetHeight - 3 + "px"; n.visibility = "visible"; b = b.isEmbedded; d = getComputedStyle(d); d = parseFloat(d.top);
                        m = 0; 0 > d && b && (m = 0 - d, n.top = "0px"); a.device.formFactor == k.utils.FormFactor.Phone && a.device.OS == k.utils.OperatingSystem.iOS && (this.callout = this.addCallout(e, m))
                    }; b.prototype.addCallout = function (a, b) {
                        var c = f.keyman.singleton; b = b || 0; if (0 < a.offsetHeight - b + 6) {
                            var e = document.createElement("div"), g = e.style; e.id = "kmw-popup-callout"; c.osk._Box.appendChild(e); a = a.getBoundingClientRect(); c = c.osk._Box.getBoundingClientRect(); b = Math.floor(a.top - c.top - 9 + b); g.top = b + "px"; g.left = a.left - c.left + "px"; g.width = a.width + "px";
                            g.height = a.bottom - c.top - b - 1 + "px"; return e
                        } return null
                    }; b.prototype.selectDefaultSubkey = function (a, b, d) { for (var c, e = b.subKeys, f = 0; f < e.length; f++) { var g = d.childNodes[f].firstChild; if (b.key && b.key.spec && e[f].elementID == b.key.spec.elementID) { c = g; break } } c && (a.keyPending = c, c.key.highlight(!0)) }; b.prototype.isVisible = function () { return "visible" == this.element.style.visibility }; b.prototype.clear = function () {
                        this.resolver = null; this.element.parentNode && this.element.parentNode.removeChild(this.element); this.shim.parentNode &&
                            this.shim.parentNode.removeChild(this.shim); this.callout && this.callout.parentNode && this.callout.parentNode.removeChild(this.callout)
                    }; b.prototype.updateTouch = function (a) {
                        this.currentSelection = null; this.baseKey.key.highlight(!1); for (var b = 0; b < this.baseKey.subKeys.length; b++)try { var d = this.element.childNodes[b].firstChild, e = d.key.isUnderTouch(a); e && (this.currentSelection = d); d.key.highlight(e) } catch (l) { l.message ? console.error("Unexpected error when attempting to update selected subkey:" + l.message) : console.error("Unexpected error (and error type) when attempting to update selected subkey.") } !this.currentSelection &&
                            this.baseKey.key.isUnderTouch(a) && (this.baseKey.key.highlight(!0), this.currentSelection = this.baseKey)
                    }; return b
                }(); g.SubkeyPopup = e
            })(g.browser || (g.browser = {}))
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            (function (f) {
                var e = function () {
                    function b(a, b) { this.popupDelay = 500; this.vkbd = a; this.baseKey = b; var c = this; this.promise = new Promise(function (a, b) { c.resolver = a; c.timerId = window.setTimeout(c.resolve.bind(c), c.popupDelay) }) } b.prototype.cancel = function () { this.timerId && (window.clearTimeout(this.timerId), this.timerId = null); this.resolver && (this.resolver(null), this.resolver = null) }; b.prototype.resolve = function () {
                        this.timerId && (window.clearTimeout(this.timerId), this.timerId =
                            null); this.resolver && this.resolver(new f.SubkeyPopup(this.vkbd, this.baseKey))
                    }; return b
                }(); f.PendingLongpress = e
            })(f.browser || (f.browser = {}))
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (g) {
            var k; (function (b) { b[b.Waiting = 0] = "Waiting"; b[b.Realized = 1] = "Realized"; b[b.Cancelled = 2] = "Cancelled" })(k = g.PendingMultiTapState || (g.PendingMultiTapState = {})); var e = function () {
                function b(a, b, d) {
                    var c, e, f; this._touches = 1; this._state = k.Waiting; this.cancelDelayFactor = 125; this.vkbd = a; this.count = d; this.baseKey = b; this._destinationLayerId = "caps"; a = null === (e = null === (c = null === b || void 0 === b ? void 0 : b.key) || void 0 === c ? void 0 : c.spec) || void 0 === e ? void 0 : e.multitap; (null === a ||
                        void 0 === a ? 0 : a.length) && (null === (f = a[0]) || void 0 === f ? 0 : f.nextlayer) && (this._destinationLayerId = a[0].nextlayer); var g = this; this._timeout = new Promise(function (a) { g.timerId = window.setTimeout(function () { g.cancel(); a() }, g.cancelDelayFactor * g.count) })
                } Object.defineProperty(b.prototype, "timeout", { get: function () { return this._timeout }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype, "realized", { get: function () { return this._state == k.Realized }, enumerable: !1, configurable: !0 }); Object.defineProperty(b.prototype,
                    "cancelled", { get: function () { return this._state == k.Cancelled }, enumerable: !1, configurable: !0 }); b.isValidTarget = function (a, b) { return 0 <= b.keyId.indexOf("K_SHIFT") && a.layerGroup.layers.caps && !b.subKeys && 1 == a.touchCount }; b.prototype.cleanup = function () { this.timerId && window.clearTimeout(this.timerId); this.timerId = null }; b.prototype.cancel = function () { this._state = k.Cancelled; this.cleanup() }; b.prototype.incrementTouch = function (a) {
                        var b; this._state == k.Waiting && ((null === (b = null === a || void 0 === a ? void 0 : a.keyId) ||
                            void 0 === b ? 0 : b.includes("K_SHIFT")) ? ++this._touches == this.count && this.realize() : this.cancel()); return this._state
                    }; b.prototype.realize = function () { if (this._state == k.Waiting) { this._state = k.Realized; this.cleanup(); var a = f.text.KeyEvent.constructNullKeyEvent(this.vkbd.device); a.kNextLayer = this._destinationLayerId; a.Lstates = f.text.Codes.stateBitmasks.CAPS; a.LmodifierChange = !0; g.PreProcessor.raiseKeyEvent(a) } }; return b
            }(); g.PendingMultiTap = e
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            var g = function () { function e(b) { this.config = b } e.prototype.onInputStart = function (b) { this.config.inputStartHandler && this.config.inputStartHandler(b) }; e.prototype.onInputMove = function (b) { this.config.inputMoveHandler && this.config.inputMoveHandler(b) }; e.prototype.onInputMoveCancel = function (b) { this.config.inputMoveCancelHandler && this.config.inputMoveCancelHandler(b) }; e.prototype.onInputEnd = function (b) { this.config.inputEndHandler && this.config.inputEndHandler(b) }; return e }();
            f.InputEventEngine = g
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            var g = function (e) {
                function b(a) { a = e.call(this, a) || this; a._touchStart = a.onTouchStart.bind(a); a._touchMove = a.onTouchMove.bind(a); a._touchEnd = a.onTouchEnd.bind(a); return a } __extends(b, e); b.forVisualKeyboard = function (a) {
                    a = { targetRoot: a.element, eventRoot: a.element, inputStartHandler: a.touch.bind(a), inputMoveHandler: a.moveOver.bind(a), inputMoveCancelHandler: a.moveCancel.bind(a), inputEndHandler: a.release.bind(a), coordConstrainedWithinInteractiveBounds: a.detectWithinInteractiveBounds.bind(a) };
                    return new b(a)
                }; b.forPredictiveBanner = function (a, c) { a = { targetRoot: a.getDiv(), eventRoot: a.getDiv(), inputStartHandler: c.touchStart.bind(c), inputMoveHandler: c.touchMove.bind(c), inputEndHandler: c.touchEnd.bind(c), coordConstrainedWithinInteractiveBounds: function () { return !0 } }; return new b(a) }; b.prototype.registerEventHandlers = function () {
                    this.config.eventRoot.addEventListener("touchstart", this._touchStart, !0); this.config.eventRoot.addEventListener("touchmove", this._touchMove, !1); this.config.eventRoot.addEventListener("touchend",
                        this._touchEnd, !0)
                }; b.prototype.unregisterEventHandlers = function () { this.config.eventRoot.removeEventListener("touchstart", this._touchStart, !0); this.config.eventRoot.removeEventListener("touchmove", this._touchMove, !1); this.config.eventRoot.removeEventListener("touchend", this._touchEnd, !0) }; b.prototype.preventPropagation = function (a) { a.preventDefault(); a.cancelBubble = !0; "function" == typeof a.stopImmediatePropagation ? a.stopImmediatePropagation() : "function" == typeof a.stopPropagation && a.stopPropagation() };
                b.prototype.onTouchStart = function (a) { this.onInputStart(f.InputEventCoordinate.fromEvent(a)) }; b.prototype.onTouchMove = function (a) { this.preventPropagation(a); a = f.InputEventCoordinate.fromEvent(a); if (this.config.coordConstrainedWithinInteractiveBounds(a)) this.onInputMove(a); else this.onInputMoveCancel(a) }; b.prototype.onTouchEnd = function (a) { this.onInputEnd(f.InputEventCoordinate.fromEvent(a)) }; return b
            }(f.InputEventEngine); f.TouchEventEngine = g
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com =
    {}));
(function (f) {
    (function (f) {
        (function (f) {
            var g = function (e) {
                function b(a) { a = e.call(this, a) || this; a.hasActiveClick = !1; a.ignoreSequence = !1; a._mouseStart = a.onMouseStart.bind(a); a._mouseMove = a.onMouseMove.bind(a); a._mouseEnd = a.onMouseEnd.bind(a); return a } __extends(b, e); b.forVisualKeyboard = function (a) { a = { targetRoot: a.element, eventRoot: document.body, inputStartHandler: a.touch.bind(a), inputMoveHandler: a.moveOver.bind(a), inputMoveCancelHandler: a.moveCancel.bind(a), inputEndHandler: a.release.bind(a), coordConstrainedWithinInteractiveBounds: a.detectWithinInteractiveBounds.bind(a) }; return new b(a) };
                b.forPredictiveBanner = function (a, c) { a = { targetRoot: a.getDiv(), eventRoot: document.body, inputStartHandler: c.touchStart.bind(c), inputMoveHandler: c.touchMove.bind(c), inputEndHandler: c.touchEnd.bind(c), coordConstrainedWithinInteractiveBounds: function () { return !0 } }; return new b(a) }; b.prototype.registerEventHandlers = function () {
                    this.config.eventRoot.addEventListener("mousedown", this._mouseStart, !0); this.config.eventRoot.addEventListener("mousemove", this._mouseMove, !1); this.config.eventRoot.addEventListener("mouseup",
                        this._mouseEnd, !0)
                }; b.prototype.unregisterEventHandlers = function () { this.config.eventRoot.removeEventListener("mousedown", this._mouseStart, !0); this.config.eventRoot.removeEventListener("mousemove", this._mouseMove, !1); this.config.eventRoot.removeEventListener("mouseup", this._mouseEnd, !0) }; b.prototype.preventPropagation = function (a) { a.preventDefault(); a.cancelBubble = !0; a.returnValue = !1; "function" == typeof a.stopImmediatePropagation ? a.stopImmediatePropagation() : "function" == typeof a.stopPropagation && a.stopPropagation() };
                b.prototype.onMouseStart = function (a) { this.config.targetRoot.contains(a.target) ? (this.preventPropagation(a), this.onInputStart(f.InputEventCoordinate.fromEvent(a)), this.hasActiveClick = !0) : this.ignoreSequence = !0 }; b.prototype.onMouseMove = function (a) {
                    if (!this.ignoreSequence) {
                        var b = f.InputEventCoordinate.fromEvent(a); if (!a.buttons) this.hasActiveClick && (this.hasActiveClick = !1, this.onInputMoveCancel(b)); else if (this.hasActiveClick) if (this.preventPropagation(a), this.config.coordConstrainedWithinInteractiveBounds(b)) this.onInputMove(b);
                        else this.onInputMoveCancel(b)
                    }
                }; b.prototype.onMouseEnd = function (a) { this.ignoreSequence ? this.ignoreSequence = !1 : (a.buttons || (this.hasActiveClick = !1), this.onInputEnd(f.InputEventCoordinate.fromEvent(a))) }; return b
            }(f.InputEventEngine); f.MouseEventEngine = g
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function () {
                function e(b, a, c, d) {
                    var e, f; this._layerId = "default"; this.layerIndex = 0; this._fixedWidthScaling = this.isStatic = !1; this._fixedHeightScaling = !0; this.repeatDelete = function () { this.deleting && (this.modelKeyClick(this.deleteKey), this.deleting = window.setTimeout(this.repeatDelete, 100)) }.bind(this); this.device = a; this.hostDevice = c || a; d && (this.isStatic = d); this._fixedWidthScaling = this.device.touchable && !this.isStatic; this._fixedHeightScaling = this.device.touchable &&
                        !this.isStatic; c = document.createElement("div"); b ? (d = this.kbdLayout = b.layout(a.formFactor), this.isRTL = b.isRTL) : (d = k.keyboards.Layouts.buildDefaultLayout(null, null, a.formFactor), d = this.kbdLayout = k.keyboards.ActiveLayout.polyfill(d, null, a.formFactor), this.isRTL = !1); this.fontFamily = "font" in d ? d.font : ""; d = a.formFactor; this.layoutKeyboard = b; this.layoutKeyboard || (this.layoutKeyboard = new k.keyboards.Keyboard(null)); this.layerGroup = new g.OSKLayerGroup(this, this.layoutKeyboard, d); this.layoutKeyboard.markLayoutCalibrated(d);
                    c.appendChild(this.layerGroup.element); this.kbdDiv = c; this.isStatic || (this.inputEngine = this.hostDevice.touchable ? g.TouchEventEngine.forVisualKeyboard(this) : g.MouseEventEngine.forVisualKeyboard(this), this.inputEngine.registerEventHandlers()); c.classList.add(a.formFactor, "kmw-osk-inner-frame"); b = null !== (f = null === (e = this.layoutKeyboard) || void 0 === e ? void 0 : e.id.replace("Keyboard_", "")) && void 0 !== f ? f : ""; e = b.indexOf("::"); -1 != e && (b = b.substring(e + 2)); this.element.classList.add("kmw-keyboard-" + b)
                } Object.defineProperty(e.prototype,
                    "layerId", { get: function () { return this._layerId }, set: function (b) { var a = b != this._layerId; if (this.layerGroup.layers[b]) this._layerId = b; else throw Error("Keyboard ".concat(this.layoutKeyboard.id, " does not have a layer with id ").concat(b)); a && this.updateState() }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "currentLayer", { get: function () { var b; return this.layerId ? null === (b = this.layerGroup) || void 0 === b ? void 0 : b.layers[this.layerId] : null }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype,
                        "lgKey", { get: function () { var b, a; return null === (a = null === (b = this.currentLayer) || void 0 === b ? void 0 : b.globeKey) || void 0 === a ? void 0 : a.btn }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "hkKey", { get: function () { var b, a; return null === (a = null === (b = this.currentLayer) || void 0 === b ? void 0 : b.hideKey) || void 0 === a ? void 0 : a.btn }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "spaceBar", {
                            get: function () {
                                var b, a; return null === (a = null === (b = this.currentLayer) || void 0 === b ? void 0 :
                                    b.spaceBarKey) || void 0 === a ? void 0 : a.btn
                            }, enumerable: !1, configurable: !0
                        }); Object.defineProperty(e.prototype, "element", { get: function () { return this.kbdDiv }, enumerable: !1, configurable: !0 }); e.prototype.postInsert = function () { }; Object.defineProperty(e.prototype, "width", { get: function () { return this._width }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "height", { get: function () { return this._height }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "layoutWidth", {
                            get: function () {
                                if (this.usesFixedWidthScaling) {
                                    var b =
                                        this.width, a = getComputedStyle(this.element); a.border && (a = (new g.ParsedLengthStyle(a.borderWidth)).val, b -= 2 * a); return g.ParsedLengthStyle.inPixels(b)
                                } return g.ParsedLengthStyle.forScalar(1)
                            }, enumerable: !1, configurable: !0
                        }); Object.defineProperty(e.prototype, "layoutHeight", {
                            get: function () { if (this.usesFixedHeightScaling) { var b = this.height, a = getComputedStyle(this.element); a.border && (a = (new g.ParsedLengthStyle(a.borderWidth)).val, b -= 2 * a); return g.ParsedLengthStyle.inPixels(b) } return g.ParsedLengthStyle.forScalar(1) },
                            enumerable: !1, configurable: !0
                        }); Object.defineProperty(e.prototype, "internalHeight", { get: function () { return this.usesFixedHeightScaling ? g.ParsedLengthStyle.inPixels(this.layoutHeight.val - this.getVerticalLayerGroupPadding()) : g.ParsedLengthStyle.forScalar(1) }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "fontSize", {
                            get: function () { this._fontSize || (this._fontSize = new g.ParsedLengthStyle("1em")); return this._fontSize }, set: function (b) { this._fontSize = b; this.kbdDiv.style.fontSize = b.styleString },
                            enumerable: !1, configurable: !0
                        }); Object.defineProperty(e.prototype, "usesFixedWidthScaling", { get: function () { return this._fixedWidthScaling }, set: function (b) { this._fixedWidthScaling = b }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "usesFixedHeightScaling", { get: function () { return this._fixedHeightScaling }, set: function (b) { this._fixedHeightScaling = b }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "usesFixedPositioning", {
                            get: function () {
                                for (var b = this.element; b;) {
                                    if ("fixed" ==
                                        getComputedStyle(b).position) return !0; b = b.offsetParent
                                } return !1
                            }, enumerable: !1, configurable: !0
                        }); e.prototype.setSize = function (b, a, c) { this._width = b; this._height = a; this.kbdDiv && (this.kbdDiv.style.width = b ? this._width + "px" : "", this.kbdDiv.style.height = a ? this._height + "px" : "", !this.device.touchable && a && (this.fontSize = new g.ParsedLengthStyle(this._height / 8 + "px")), c || this.refreshLayout()) }; e.prototype.getDefaultKeyObject = function () {
                            return new g.OSKKeySpec(void 0, "", k.keyboards.ActiveKey.DEFAULT_KEY.width,
                                k.keyboards.ActiveKey.DEFAULT_KEY.sp, null, k.keyboards.ActiveKey.DEFAULT_KEY.pad)
                        }; e.prototype.getTouchCoordinatesOnKeyboard = function (b) { var a = f.keyman.singleton.util.getAbsolute(this.kbdDiv); b = { x: b.x - a.x, y: b.y - a.y }; b.x /= this.layerGroup.element.offsetWidth; b.y /= this.kbdDiv.offsetHeight; return b }; e.prototype.getTouchProbabilities = function (b, a) {
                            if (!f.keyman.singleton.core.languageProcessor.mayCorrect) return null; b = this.getTouchCoordinatesOnKeyboard(b); var c = this.layerGroup.element, d = this.kbdDiv.offsetHeight;
                            if (!c.offsetWidth || !d) return null; c = c.offsetWidth / this.kbdDiv.offsetHeight; b = this.kbdLayout.getLayer(this.layerId).getTouchProbabilities(b, c); if (a && this.subkeyGesture && this.subkeyGesture.baseKey.key) {
                                c = 1; d = this.subkeyGesture.baseKey.key.spec.coreID; var e = 3; a = a.coreID; a == d ? (c += e, e = 0) : a = "".concat(d, "::").concat(a); for (var g = 1 / (1 + c + e), k = 0; k < b.length; k++) { var n = b[k]; n.keyId == d ? (c += n.p * g, b.splice(k, 1), k--) : n.keyId == a ? (e = +n.p * g, b.splice(k, 1), k--) : n.p *= g } k = []; 0 < e && k.push({ keyId: a, p: e * g }); k.push({
                                    keyId: d,
                                    p: c * g
                                }); return k = k.concat(b)
                            } return b
                        }; e.prototype.getInteractiveBoundingRect = function () { var b = k.dom.Utils.getAbsoluteX(this.element), a = k.dom.Utils.getAbsoluteY(this.element), c = .333 * this.height / this.currentLayer.rows.length; return { left: b - c, right: b + this.width + c, top: a - c, bottom: a + this.height + c } }; e.prototype.applyScreenMarginBoundsThresholding = function (b, a) {
                            var c = window.screenLeft - window.pageXOffset, d = window.screenTop - window.pageYOffset, e = __assign({}, b); a = new g.InputEventCoordinate(a.x + c, a.y + d); 5 <= a.x &&
                                2 >= b.left + c && (e.left = 2 - c); a.x <= screen.width - 5 && b.right + c >= screen.width - 2 && (e.right = screen.width - 2 - c); 5 <= a.y && 2 >= b.top + d && (e.top = 2 - d); a.y <= screen.height - 5 && b.bottom + d >= screen.height - 2 && (e.bottom = screen.height - 2 - d); return e
                        }; e.prototype.detectWithinInteractiveBounds = function (b) { if (null === b.x && null === b.y) return !0; var a = this.getInteractiveBoundingRect(); this.initTouchCoord && this.applyScreenMarginBoundsThresholding(a, this.initTouchCoord); return b.x < a.left || b.x > a.right ? !1 : b.y < a.top || b.y > a.bottom ? !1 : !0 };
                e.prototype.touch = function (b) {
                    var a = b.target, c = this.keyTarget(a); this.initTouchCoord = b; this.currentTarget = c; this.cancelDelete(); if (!this.subkeyGesture || !this.subkeyGesture.isVisible()) {
                        this.touchCount = b.activeInputCount; if (c && (0 <= c.className.indexOf("key-hidden") || 0 <= c.className.indexOf("key-blank")) || 0 <= a.className.indexOf("kmw-key-row")) b.isFromMouse || (c = this.findNearestKey(b, a)); null != c && (a = c.keyId, this.highlightKey(c, !0), "K_LOPT" == a || "K_ROPT" == a ? (window.setTimeout(function () {
                            this.modelKeyClick(c);
                            this.highlightKey(c, !0)
                        }.bind(this), 0), this.touchPending = this.keyPending = null) : "K_BKSP" == a ? (this.modelKeyClick(c, b), this.deleteKey = c, this.deleting = window.setTimeout(this.repeatDelete, 500), this.touchPending = this.keyPending = null) : (this.keyPending ? (this.highlightKey(this.keyPending, !1), this.subkeyGesture && this.subkeyGesture instanceof g.browser.SubkeyPopup ? (a = this.subkeyGesture, a.updateTouch(b), a.finalize(b)) : this.modelKeyClick(this.keyPending, this.touchPending), this.touchCount--) : this.initGestures(c,
                            b), this.keyPending = c, this.touchPending = b))
                    }
                }; e.prototype.release = function (b) {
                    var a = this.currentTarget; this.cancelDelete(); this.pendingMultiTap && this.pendingMultiTap.realized ? (this.pendingMultiTap = null, this.highlightKey(this.keyPending, !1), this.touchPending = this.keyPending = null) : (this.pendingMultiTap && this.pendingMultiTap.cancelled && (this.pendingMultiTap = null), this.subkeyGesture && this.subkeyGesture.isVisible() ? 0 < b.activeInputCount || (this.subkeyGesture instanceof g.browser.SubkeyPopup && this.subkeyGesture.finalize(b),
                        this.highlightKey(this.keyPending, !1), this.touchPending = this.keyPending = null) : (a && a.id && this.optionKey(a, a.id, !1), this.detectWithinInteractiveBounds(b) ? (a = this.touchCount, 0 < this.touchCount && this.touchCount--, this.keyPending ? (this.highlightKey(this.keyPending, !1), 0 > this.keyPending.className.indexOf("hidden") && 0 < a && this.modelKeyClick(this.keyPending, b), this.clearPopup(), this.touchPending = this.keyPending = null) : (a = this.keyTarget(b.target), a || (a = document.elementFromPoint(b.x - window.pageXOffset, b.y - window.pageYOffset),
                            a = this.findNearestKey(b, a)), this.highlightKey(a, !1))) : (this.moveCancel(b), this.touchCount--)))
                }; e.prototype.moveCancel = function (b) { 1 < b.activeInputCount || this.updateGestures(null, this.keyPending, b) || (this.cancelDelete(), this.highlightKey(this.keyPending, !1), this.showKeyTip(null, !1), this.clearPopup(), this.touchPending = this.keyPending = null) }; e.prototype.moveOver = function (b) {
                    if (0 == this.touchCount) this.cancelDelete(); else {
                        var a = b.x - window.pageXOffset, c = b.y - window.pageYOffset; this.touchPending = b; a = document.elementFromPoint(a,
                            c); c = this.keyPending; var d = this.keyTarget(a); if (d && 0 <= d.className.indexOf("key-hidden") || a && !d && 0 <= a.className.indexOf("key-row")) d = this.findNearestKey(b, a); d && "string" == typeof d.id && 0 > d.id.indexOf("-K_BKSP") && this.cancelDelete(); 1 < b.activeInputCount || this.updateGestures(d, c, b) || ((this.currentTarget = d) && this.keyPending && (this.highlightKey(c, !1), this.keyPending = d, this.touchPending = b), c && d && d != c && "" != d.id && (this.clearPopup(), this.initGestures(d, b)), this.keyPending && (c != d || 0 > d.className.indexOf(g.OSKKey.HIGHLIGHT_CLASS)) &&
                                this.highlightKey(d, !0))
                    }
                }; e.prototype.keyTarget = function (b) { try { if (b) { if (b.classList.contains("kmw-key")) return g.getKeyFrom(b); if (b.parentNode && b.parentNode.classList.contains("kmw-key")) return g.getKeyFrom(b.parentNode); if (b.firstChild && b.firstChild.classList.contains("kmw-key")) return g.getKeyFrom(b.firstChild) } } catch (a) { } return null }; e.prototype.findNearestKey = function (b, a) {
                    if (!b) return null; for (b = b.x; a && void 0 !== a.className && 0 > a.className.indexOf("key-row");)a = a.parentNode; if (!a) return null;
                    var c, d = 0, e = 24, f = 1E5; for (c = 0; c < a.childNodes.length; c++) { var g = a.childNodes[c]; var k = g.firstChild ? g.firstChild : g; if (void 0 === k.className || !(0 <= k.className.indexOf("key-hidden") || 0 <= k.className.indexOf("key-blank"))) { var n = g.offsetLeft; g = n + g.offsetWidth; if (b >= n && b <= g) return k; n -= b; 0 <= n && n < f && (d = c, f = n); n = b - g; 0 <= n && n < f && (d = c, f = n) } } return 1E5 > f && (a = a.childNodes[d], n = a.offsetLeft, g = n + a.offsetWidth, 40 < a.offsetWidth && (e = .6 * a.offsetWidth), 0 <= n - b && n - b < e || 0 <= b - g && b - g < e) ? a.firstChild : null
                }; e.prototype.cancelDelete =
                    function () { this.deleting && window.clearTimeout(this.deleting); this.deleting = 0 }; e.prototype.modelKeyClick = function (b, a) { b = this.initKeyEvent(b, a); g.PreProcessor.raiseKeyEvent(b) }; e.prototype.initKeyEvent = function (b, a) { this.highlightKey(b, !1); var c = b.key ? b.key.spec : null; return c ? this.keyEventFromSpec(c, a) : (console.error("OSK key with ID '" + b.id + "', keyID '" + b.keyId + "' missing needed specification"), null) }; e.prototype.keyEventFromSpec = function (b, a) {
                        var c = f.keyman.singleton.core, d = b.constructKeyEvent(c.keyboardProcessor,
                            this.device); d.srcKeyboard = this.layoutKeyboard; c.languageProcessor.isActive && a && (d.source = a, d.keyDistribution = this.getTouchProbabilities(a, b)); return d
                    }; e.prototype._UpdateVKShiftStyle = function (b) { var a, c = f.keyman.singleton.core; b || (b = this.layerId); if ((b = this.layerGroup.layers[b]) && null !== (a = c.activeKeyboard) && void 0 !== a && a.usesDesktopLayoutOnDevice(this.device)) { a = ["K_CAPS", "K_NUMLOCK", "K_SCROLL"]; var d = [b.capsKey, b.numKey, b.scrollKey]; for (b = 0; b < d.length; b++)null != d[b] && d[b].setToggleState(c.keyboardProcessor.stateKeys[a[b]]) } };
                e.prototype.clearPopup = function () { this.subkeyGesture && (this.subkeyGesture.clear(), this.subkeyGesture = null); this.pendingSubkey && (this.pendingSubkey.cancel(), this.pendingSubkey = null) }; e.prototype.showLanguage = function () {
                    var b = f.keyman.singleton, a = b.keyboardManager.activeStub; if (a) if (null != a.displayName) b = a.displayName; else {
                        var c = a.KL; a = a.KN; a = a.replace(/\s*keyboard\s*/i, ""); switch (b.options.spacebarText) {
                            case k.SpacebarText.KEYBOARD: b = a; break; case k.SpacebarText.LANGUAGE: b = c; break; case k.SpacebarText.LANGUAGE_KEYBOARD: b =
                                a == c ? c : c + " - " + a; break; case k.SpacebarText.BLANK: b = ""; break; default: b = a
                        }
                    } else b = "(System keyboard)"; try { var d = this.spaceBar.key.label, e = d.parentNode; "undefined" == typeof e.className || "" == e.className ? e.className = "kmw-spacebar" : -1 == e.className.indexOf("kmw-spacebar") && (e.className += " kmw-spacebar"); "kmw-spacebar-caption" != d.className && (d.className = "kmw-spacebar-caption"); if (d.innerText != b || "" == b) d.innerText = b; this.spaceBar.key.refreshLayout(this) } catch (l) { }
                }; e.prototype.highlightKey = function (b, a) {
                    !b ||
                    !b.key || "" == b.className || 0 <= b.className.indexOf("kmw-key-row") || (null != this.keytip && b.key.allowsKeyTip() ? this.showKeyTip(b, a) : (this.showKeyTip(null, !1), b.key.highlight(a)))
                }; e.prototype.getKeyEmFontSize = function () { if (!this.fontSize) return 0; if ("desktop" == this.device.formFactor) return this.fontSize.scaledBy(.8).val; var b = getComputedStyle(document.body).fontSize; b = g.getFontSizeStyle(b).val; var a = 1; if (!this.isStatic) { if (this.fontSize.absolute) return this.fontSize.val; a = this.fontSize.val } return b * a };
                e.prototype.updateState = function () { if (this.currentLayer) { var b, a = this.kbdDiv.childNodes[0].childNodes; this.nextLayer = this.layerId; this.currentLayer.nextlayer && (this.nextLayer = this.currentLayer.nextlayer); for (b = 0; b < a.length; b++) { var c = a[b]; c.layer == this.layerId ? (c.style.display = "block", this._UpdateVKShiftStyle()) : c.style.display = "none" } } }; e.prototype.refreshLayout = function () {
                    var b = f.keyman.singleton, a = 1; this.device.OS != k.utils.OperatingSystem.iOS || b.isEmbedded || (a /= b.util.getViewportScale()); this.height &&
                        this.computedAdjustedOskHeight(this.height); b = this.kbdDiv.style; var c = this.layerGroup.element.style; this.usesFixedHeightScaling && this.height && (b.height = b.maxHeight = this.height + "px"); b.fontSize = this.fontSize.styleString; c.fontSize = g.ParsedLengthStyle.forScalar(a).styleString; b = this.width && this.height; a = getComputedStyle(this.kbdDiv); c = "" != a.height && "auto" != a.height; if (b) this._computedWidth = this.width, this._computedHeight = this.height; else if (c) this._computedWidth = parseInt(a.width, 10), this._computedWidth ||
                            (b = getComputedStyle(this.kbdDiv.firstElementChild), this._computedWidth = parseInt(b.width, 10)), this._computedHeight = parseInt(a.height, 10); else return; this.currentLayer && this.currentLayer.refreshLayout(this, this._computedHeight - this.getVerticalLayerGroupPadding())
                }; e.prototype.getVerticalLayerGroupPadding = function () { var b = getComputedStyle(this.layerGroup.element), a = parseInt(b.paddingTop, 10) || 0; b = parseInt(b.paddingBottom, 10) || 0; return a + b }; e.prototype.computedAdjustedOskHeight = function (b) {
                    if (!this.layerGroup) return b;
                    var a = this.layerGroup.layers, c = 0, d; for (d in a) { var e = a[d].rows.length; e *= Math.floor(b / (0 == e ? 1 : e)); e > c && (c = e) } return c + 0
                }; e.prototype.appendStyleSheet = function () { var b = f.keyman.singleton, a = b.util, c = b.core.activeKeyboard, d = b.keyboardManager.activeStub; null != d && (this.styleSheet && a.removeStyleSheet(this.styleSheet), b = d.KFont, d = d.KOskFont, a.addFontFaceStyleSheet(b), a.addFontFaceStyleSheet(d), b = this.addFontStyle(b, d), null != c && "string" == typeof c.oskStyling && (b += c.oskStyling), this.styleSheet = a.addStyleSheet(b)) };
                e.prototype.addFontStyle = function (b, a) {
                    var c = f.keyman.singleton, d = c.baseFont; "undefined" != typeof b && "undefined" != typeof b.family && (d = b.family); d = d.replace(/\u0022/g, ""); var e = new RegExp("\\s?" + d + ",?"), g = c.appliedFont.replace(/\u0022/g, ""); g = g.replace(e, ""); g = g.replace(/,$/, ""); g = '"' + ("" == g ? d : d + "," + g).replace(/,\s?/g, '","') + '"'; d = ".keymanweb-font{\nfont-family:" + g + " !important;\n}\n"; "undefined" != typeof a ? d = d + '.kmw-key-text{\nfont-family:"' + a.family.replace(/\u0022/g, "").replace(/,/g, '","') + '";\n}\n' :
                        "undefined" != typeof b && (d = d + '.kmw-key-text{\nfont-family:"' + b.family.replace(/\u0022/g, "").replace(/,/g, '","') + '";\n}\n'); c.appliedFont = g; return d
                }; e.buildDocumentationKeyboard = function (b, a, c, d) {
                    if (!b) return null; a = "undefined" == typeof a ? "desktop" : a; c = "undefined" == typeof c ? "default" : c; var f = new k.Device; f.formFactor = a; "desktop" != a ? (f.OS = "iOS", f.touchable = !0) : (f.OS = "windows", f.touchable = !1); var l = b.layout(a), m = new e(b, f.coreSpec, f.coreSpec, !0); m.layerGroup.element.className = m.kbdDiv.className; m.layerGroup.element.classList.add(f.formFactor +
                        "-static"); var n = m.kbdDiv.childNodes[0], w = document.createElement("div"); w.classList.add(f.OS.toLowerCase(), f.formFactor); null != l ? (m.layerId = c, m.setSize(800, d), m.fontSize = g.OSKView.defaultFontSize(f.coreSpec, d, !1), m.refreshLayout(), n.style.fontSize = m.kbdDiv.style.fontSize, n.style.height = m.kbdDiv.style.height, n.style.maxHeight = m.kbdDiv.style.maxHeight) : n.innerHTML = "<p style='color:#c40; font-size:0.5em;margin:10px;'>No " + a + " layout is defined for " + b.name + ".</p>"; n.style.border = "1px solid #ccc"; var y =
                            new MutationObserver(function () { if (document.contains(n)) try { getComputedStyle(n) && n.style.fontSize && (m.fontSize = new g.ParsedLengthStyle(n.style.fontSize)); m.appendStyleSheet(); var a = m.styleSheet, b = a.parentElement; m.refreshLayout(); n.style.fontSize = m.kbdDiv.style.fontSize; m.shutdown(); b.appendChild(a) } finally { y.disconnect() } }); y.observe(document.body, { childList: !0, subtree: !0 }); w.append(n); return w
                }; e.prototype.onHide = function () { this.hkKey && this.highlightKey(this.hkKey, !1) }; e.prototype.startLongpress =
                    function (b) { var a = this; b = new g.browser.PendingLongpress(this, b); b.promise.then(function (b) { if (b) { var c = f.keyman.singleton; c.osk._Box.appendChild(b.element); c.osk._Box.appendChild(b.shim); b.reposition(a) } }); return b }; e.prototype.initGestures = function (b, a) {
                        var c = this; if (this.pendingMultiTap) switch (this.pendingMultiTap.incrementTouch(b)) { case g.PendingMultiTapState.Cancelled: this.pendingMultiTap = null; break; case g.PendingMultiTapState.Realized: return }!this.pendingMultiTap && g.PendingMultiTap.isValidTarget(this,
                            b) && (this.pendingMultiTap = new g.PendingMultiTap(this, b, 2), this.pendingMultiTap.timeout.then(function () { c.pendingMultiTap = null })); if (b.subKeys) { var d = this, e = this.startLongpress(b); null != e && (this.pendingSubkey = e, e.promise.then(function (a) { d.pendingSubkey == e && (d.pendingSubkey = null); a && (d.showKeyTip(null, !1), d.subkeyGesture = a, a.promise.then(function (a) { a && g.PreProcessor.raiseKeyEvent(a); d.clearPopup() })) })) }
                    }; e.prototype.updateGestures = function (b, a, c) {
                        !b && this.pendingMultiTap && (this.pendingMultiTap.cancel(),
                            this.pendingMultiTap = null); if (this.subkeyGesture) return a && a.key.highlight(!1), this.subkeyGesture.updateTouch(c), this.touchPending = this.keyPending = null, !0; this.currentTarget = null; b && null != b.subKeys && this.initTouchCoord && this.pendingSubkey && this.pendingSubkey instanceof g.browser.PendingLongpress && this.initTouchCoord.y - c.y > this.getLongpressFlickThreshold() && this.pendingSubkey.resolve(); return this.subkeyGesture || this.pendingSubkey ? !0 : !1
                    }; e.prototype.getLongpressFlickThreshold = function () {
                        return Math.max(this.currentLayer.rowHeight /
                            4, 5)
                    }; e.prototype.optionKey = function (b, a, c) { b = f.keyman.singleton; var d = b.osk; c && (0 <= a.indexOf("K_LOPT") ? d.showLanguageMenu() : 0 <= a.indexOf("K_ROPT") && (b.uiManager.setActivatingUI(!1), d.startHide(!0), b.domManager.lastActiveElement = null)) }; e.prototype.showKeyTip = function (b, a) { var c = this.keytip; if (null != c) { var d = this.subkeyGesture; d = d && d.isVisible(); c.show(b, d ? !1 : a, this) } }; e.prototype.createKeyTip = function () {
                        var b = f.keyman.singleton; "phone" == this.device.formFactor && (null == this.keytip && (this.keytip = new g.browser.KeyTip(b.isEmbedded)),
                            this.keytip && this.keytip.element && b.osk._Box.appendChild(this.keytip.element))
                    }; e.prototype.createGlobeHint = function () { }; e.prototype.shutdown = function () {
                        var b, a, c, d, e = f.keyman.singleton; this.styleSheet && e.util.removeStyleSheet(this.styleSheet); this.inputEngine && this.inputEngine.unregisterEventHandlers(); this.deleting && window.clearTimeout(this.deleting); this.touchPending = this.keyPending = null; null === (b = this.keytip) || void 0 === b ? void 0 : b.show(null, !1, this); null === (a = this.subkeyGesture) || void 0 === a ? void 0 :
                            a.clear(); null === (c = this.pendingMultiTap) || void 0 === c ? void 0 : c.cancel(); null === (d = this.pendingSubkey) || void 0 === d ? void 0 : d.cancel()
                    }; e.specialCharacters = g.OSKKey.specialCharacters; return e
            }(); g.VisualKeyboard = n
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function () { function b(a) { this.totalLength = 0; this.x = a.x; this.totalLength = 0 } b.prototype.updateTo = function (a) { var b = this.x; this.x = a.x; a = { deltaX: this.x - b }; this.totalLength += Math.abs(a.deltaX); return a }; Object.defineProperty(b.prototype, "hasScrolled", { get: function () { return this.totalLength > b.HAS_SCROLLED_FUDGE_FACTOR }, enumerable: !1, configurable: !0 }); b.HAS_SCROLLED_FUDGE_FACTOR = 10; return b }(), e = function () {
                function b(a, b, d) {
                    this.baseElement = a; this.rowClassMatch =
                        b; this.selectedTargetMatch = d
                } b.prototype.findTargetFromTouch = function (a, b, d) {
                    for (a = a.x; b && void 0 !== b.className && 0 > b.className.indexOf(this.rowClassMatch);)b = b.parentNode; if (!b) return null; var c = 0, e = 24, f = 1E5; for (d = 0; d < b.childNodes.length; d++) { var g = b.childNodes[d]; if (!this.isInvalidTarget(this.findTargetFrom(g))) { var k = g.offsetLeft; var n = k + g.offsetWidth; k -= a; 0 <= k && k < f && (c = d, f = k); n = a - n; 0 <= n && n < f && (c = d, f = n); if (0 > n && 0 > k) return this.findTargetFrom(g) } } return 1E5 > f && (b = b.childNodes[c], k = b.offsetLeft, n =
                        k + b.offsetWidth, 40 < b.offsetWidth && (e = .6 * b.offsetWidth), 0 <= k - a && k - a < e || 0 <= a - n && a - n < e) ? this.findTargetFrom(b) : null
                }; b.prototype.findBestTarget = function (a, b) { var c = b ? document.elementFromPoint(a.x + document.body.scrollLeft, a.y + document.body.scrollTop) : a.target; var e = this.findTargetFrom(c); e || (e = this.findTargetFromTouch(a, c, b)); return e }; b.prototype.isInvalidTarget = function (a) { return !1 }; b.prototype.touchStart = function (a) {
                    this.currentTarget = this.findBestTarget(a); this.touchX = a.x; this.touchY = a.y; this.touchCount =
                        a.activeInputCount; this.currentTarget && (this.scrollTouchState = this.currentTarget.clientWidth < this.currentTarget.scrollWidth ? new n(a) : null, this.highlight(this.currentTarget, !0), this.pendingTarget ? (this.highlight(this.pendingTarget, !1), this.select(this.pendingTarget), this.clearHolds(), this.touchCount--) : this.hold(this.currentTarget), this.pendingTarget = this.currentTarget)
                }; b.prototype.touchEnd = function (a) {
                    var b = this.currentTarget; if (this.isSubmenuActive() || this.hasModalPopup()) {
                        if (0 < a.activeInputCount) return;
                        if (null == b || 0 > b.id.indexOf("popup")) this.pendingTarget && this.highlight(this.pendingTarget, !1), this.clearHolds(), this.pendingTarget = null
                    } b = a.x; b = 2 > b && 5 < this.touchX || b > window.innerWidth - 2 && this.touchX < window.innerWidth - 5; this.scrollTouchState && (b = b || this.scrollTouchState.hasScrolled); var d = this.touchCount; 0 < this.touchCount && this.touchCount--; this.pendingTarget ? (this.highlight(this.pendingTarget, !1), 0 > this.pendingTarget.className.indexOf("hidden") && 0 < d && !b && this.select(this.pendingTarget), this.clearHolds(),
                        this.pendingTarget = null) : (b = this.findBestTarget(a)) && this.highlight(b, !1)
                }; b.prototype.touchMove = function (a) {
                    var b = f.keyman.singleton; if (!(1 < a.activeInputCount || 0 == this.touchCount)) if (this.currentTarget && null != this.scrollTouchState) a = this.scrollTouchState.updateTo(a).deltaX, this.currentTarget.scrollLeft -= window.devicePixelRatio * a; else {
                        var d = a.y, e = this.pendingTarget, g = this.findBestTarget(a, !0); if (this.hasModalPopup()) e && this.highlight(e, !1), this.pendingTarget = null; else {
                            this.currentTarget = g = this.dealiasSubTarget(g);
                            e && g && g !== e && this.highlight(e, !1); if (g && this.hasSubmenu(g)) { !b.isEmbedded && 5 < this.touchY - d && !this.isSubmenuActive() && this.displaySubmenuFor(g); if (g && 0 > g.id.indexOf("popup")) return; g && 0 > g.className.indexOf(this.selectedTargetMatch) && this.highlight(g, !0) } else { d = this.baseElement; b = k.dom.Utils.getAbsoluteY(d); d = d.offsetHeight; var m = Math.max(5, b - .25 * d); e && (a.y < m || a.y > b + d + .25 * d) && (this.highlight(e, !1), this.clearHolds(), this.pendingTarget = null) } g && this.pendingTarget && (this.pendingTarget = g); this.pendingTarget &&
                                g && (e != g || 0 > g.className.indexOf(this.selectedTargetMatch)) && this.highlight(g, !0); e && g && g != e && "" != g.id && this.hold(g)
                        }
                    }
                }; return b
            }(); g.UITouchHandlerBase = e
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function () {
                function a(b) { var c = f.keyman.singleton.util._CreateElement("div"); c.id = a.BANNER_ID; c.className = a.BANNER_CLASS; this.div = c; this.height = b; this.update() } Object.defineProperty(a.prototype, "height", { get: function () { return this._height }, set: function (a) { this._height = 0 < a ? a : 0; this.update() }, enumerable: !1, configurable: !0 }); a.prototype.update = function () {
                    var a = this.div.style, b = a.height, c = a.display; 0 < this._height ? (a.height = this._height + "px", a.display = "block") :
                        (a.height = "0px", a.display = "none"); return b !== a.height || c !== a.display
                }; a.prototype.appendStyleSheet = function () { }; a.prototype.getDiv = function () { return this.div }; a.prototype.activate = function () { }; a.prototype.deactivate = function () { }; a.DEFAULT_HEIGHT = 37; a.BANNER_CLASS = "kmw-banner-bar"; a.BANNER_ID = "kmw-banner-bar"; return a
            }(); g.Banner = n; var e = function (a) { function b() { return a.call(this, 0) || this } __extends(b, a); return b }(n); g.BlankBanner = e; e = function (a) {
                function b(b, c) {
                    if (0 < b.length) {
                        var d = a.call(this) ||
                            this; c && (d.height = c)
                    } else d = a.call(this, 0) || this; 0 <= b.indexOf("base64") ? console.log("Loading img from base64 data") : console.log("Loading img with src '" + b + "'"); d.img = document.createElement("img"); d.img.setAttribute("src", b); b = d.img.style; b.width = "100%"; b.height = "100%"; d.getDiv().appendChild(d.img); console.log("Image loaded."); return d
                } __extends(b, a); b.prototype.setImagePath = function (a) { this.img && this.img.setAttribute("src", a) }; return b
            }(n); g.ImageBanner = e; var b = function () {
                function b(a) {
                    var b = f.keyman.singleton;
                    this.index = a; this.constructRoot(); a = this.display = b.util._CreateElement("span"); this.div.appendChild(a)
                } b.prototype.constructRoot = function () { var c = f.keyman.singleton, d = this.div = c.util._CreateElement("div"), e = d.style; d.className = "kmw-suggest-option"; d.id = b.BASE_ID + this.index; if (c = c.keyboardManager.activeStub) c.KLC && (d.lang = c.KLC), (d = c.KFont) && d.family && "" != d.family && (e.fontFamily = this.fontFamily = d.family); e.width = (100 - a.MARGIN * (a.SUGGESTION_LIMIT - 1)) / a.SUGGESTION_LIMIT + "%"; this.div.suggestion = this };
                Object.defineProperty(b.prototype, "suggestion", { get: function () { return this._suggestion }, enumerable: !1, configurable: !0 }); b.prototype.update = function (a) { this._suggestion = a; this.updateText() }; b.prototype.updateText = function () { var a = this.generateSuggestionText(); this.div.replaceChild(a, this.display); this.display = a }; b.prototype.apply = function (a) {
                    var b = f.keyman.singleton; if (this.isEmpty()) return null; a || (a = k.dom.Utils.getOutputTarget()); return "revert" == this._suggestion.tag ? (b.core.languageProcessor.applyReversion(this._suggestion,
                        a), null) : b.core.languageProcessor.applySuggestion(this.suggestion, a, function () { return b.core.keyboardProcessor.layerId })
                }; b.prototype.isEmpty = function () { return !this._suggestion }; b.prototype.generateSuggestionText = function () { var a = f.keyman.singleton, b = this._suggestion, c = a.util._CreateElement("span"); c.className = "kmw-suggestion-text"; if (null == b) return c; null == b.displayAs || "" == b.displayAs ? b = "\u00a0" : (a = a.core.activeKeyboard, b = String.fromCharCode(a && a.isRTL ? 8238 : 8237) + b.displayAs); c.innerHTML = b; return c };
                b.BASE_ID = "kmw-suggestion-"; return b
            }(); g.BannerSuggestion = b; var a = function (a) {
                function d(e, g) {
                    g = a.call(this, g || n.DEFAULT_HEIGHT) || this; g.suggestionApplied = function (a) { var b, c = f.keyman.singleton; c.core.keyboardProcessor.newLayerStore.set(""); c.core.keyboardProcessor.oldLayerStore.set(""); null === (b = c.core.keyboardProcessor.processPostKeystroke(this.hostDevice, a)) || void 0 === b ? void 0 : b.finalize(c.core.keyboardProcessor, a, !0); return !0 }.bind(g); g.hostDevice = e; g.getDiv().className = g.getDiv().className +
                        " " + d.BANNER_CLASS; g.options = []; for (e = 0; e < d.SUGGESTION_LIMIT; e++) { var h = new b(e); g.options[e] = h } h = (e = f.keyman.singleton.core.activeKeyboard) && e.isRTL; for (e = 0; e < d.SUGGESTION_LIMIT; e++) { var k = h ? d.SUGGESTION_LIMIT - e - 1 : e; g.getDiv().appendChild(g.options[k].div); if (e != d.SUGGESTION_LIMIT) { k = f.keyman.singleton.util._CreateElement("div"); k.className = "kmw-banner-separator"; var l = k.style; l.marginLeft = d.MARGIN / 2 + "%"; l.marginRight = d.MARGIN / 2 + "%"; g.getDiv().appendChild(k) } } g.manager = new c(g.getDiv(), g.options);
                    g.setupInputHandling(); return g
                } __extends(d, a); d.prototype.setupInputHandling = function () { (this.hostDevice.touchable ? g.TouchEventEngine.forPredictiveBanner(this, this.manager) : g.MouseEventEngine.forPredictiveBanner(this, this.manager)).registerEventHandlers() }; d.prototype.activate = function () {
                    var a = f.keyman.singleton, b = this.manager; a.core.languageProcessor.addListener("invalidatesuggestions", b.invalidateSuggestions); a.core.languageProcessor.addListener("suggestionsready", b.updateSuggestions); a.core.languageProcessor.addListener("tryaccept",
                        b.tryAccept); a.core.languageProcessor.addListener("tryrevert", b.tryRevert); a.core.languageProcessor.addListener("suggestionapplied", this.suggestionApplied)
                }; d.prototype.postConfigure = function () { var a = f.keyman.singleton; a.core.languageProcessor.predictFromTarget(k.dom.Utils.getOutputTarget(), a.core.keyboardProcessor.layerId) }; d.prototype.deactivate = function () {
                    var a = f.keyman.singleton, b = this.manager; a.core.languageProcessor.removeListener("invalidatesuggestions", b.invalidateSuggestions); a.core.languageProcessor.removeListener("suggestionsready",
                        b.updateSuggestions); a.core.languageProcessor.removeListener("tryaccept", b.tryAccept); a.core.languageProcessor.removeListener("tryrevert", b.tryRevert); a.core.languageProcessor.removeListener("suggestionapplied", this.suggestionApplied)
                }; d.SUGGESTION_LIMIT = 3; d.MARGIN = 1; d.TOUCHED_CLASS = "kmw-suggest-touched"; d.BANNER_CLASS = "kmw-suggest-banner"; return d
            }(n); g.SuggestionBanner = a; var c = function (c) {
                function d(b, d) {
                    b = c.call(this, b, n.BANNER_CLASS, a.TOUCHED_CLASS) || this; b.initNewContext = !0; b.currentSuggestions =
                        []; b.recentAccept = !1; b.swallowPrediction = !1; b.doRevert = !1; b.recentRevert = !1; b.tryAccept = function (a, b) { var c = f.keyman.singleton; !this.recentAccept && this.selected ? (this.doAccept(this.selected), b.shouldSwallow = !0) : this.recentAccept && "space" == a ? (this.recentAccept = !1, b.shouldSwallow = !!c.core.languageProcessor.wordbreaksAfterSuggestions) : b.shouldSwallow = !1 }.bind(b); b.tryRevert = function (a) {
                            this.doRevert ? this.recentAccept = this.doRevert = !1 : this.recentAccept && (this.showRevert(), this.swallowPrediction = !0); a.shouldSwallow =
                                !1
                        }.bind(b); b.invalidateSuggestions = function (a) { this.initNewContext = !1; this.swallowPrediction && "context" != a || (this.recentRevert = this.doRevert = this.recentAccept = !1, "context" == a && (this.swallowPrediction = !1, this.initNewContext = !0)); this.options.forEach(function (a) { a.update(null) }) }.bind(b); b.updateSuggestions = function (a) {
                            this.currentSuggestions = a = a.suggestions; this.keepSuggestion = null; for (var b = 0; b < a.length; b++) { var c = a[b]; "keep" == c.tag && (this.keepSuggestion = c) } this.keepSuggestion && this.currentSuggestions.splice(this.currentSuggestions.indexOf(this.keepSuggestion),
                                1); this.swallowPrediction ? this.swallowPrediction = !1 : this.recentRevert = this.doRevert = this.recentAccept = !1; this.doUpdate()
                        }.bind(b); b.options = d; return b
                } __extends(d, c); d.prototype.findTargetFrom = function (a) { var b = f.keyman.singleton.util; try { if (a) { if (b.hasClass(a, "kmw-suggest-option")) return a; if (a.parentNode && b.hasClass(a.parentNode, "kmw-suggest-option")) return a.parentNode } } catch (q) { } return null }; d.prototype.highlight = function (c, d) {
                    var e = c.className, f = " " + a.TOUCHED_CLASS; -1 == c.id.indexOf(b.BASE_ID) ?
                        console.warn("Cannot find BannerSuggestion object for element to highlight!") : (this.selected = c.suggestion).isEmpty() && (d = !1, this.selected = null); d && 0 > e.indexOf(f) ? c.className = e + f : c.className = e.replace(f, "")
                }; d.prototype.select = function (a) { this.doAccept(a.suggestion) }; d.prototype.hold = function (a) { a = a.suggestion; var b = -1 == this.currentSuggestions.indexOf(a.suggestion); this.platformHold && this.platformHold(a, b) }; d.prototype.clearHolds = function () { }; d.prototype.hasModalPopup = function () {
                    var a = f.keyman.singleton;
                    return a.osk.vkbd.subkeyGesture && a.isEmbedded
                }; d.prototype.dealiasSubTarget = function (a) { return a }; d.prototype.hasSubmenu = function (a) { return !1 }; d.prototype.isSubmenuActive = function () { return !1 }; d.prototype.displaySubmenuFor = function (a) { throw Error("Method not implemented."); }; d.prototype.doAccept = function (a) {
                    var b = this; this.selected = null; this.doRevert = !1; (this.revertAcceptancePromise = a.apply()) ? (this.revertAcceptancePromise.then(function (a) { a && (b.revertSuggestion = a) }), this.recentAccept = !0, this.recentRevert =
                        !1, this.swallowPrediction = !0, this.doUpdate()) : a.suggestion && "revert" == a.suggestion.tag && (this.recentAccept = !1, this.recentRevert = !0, this.doUpdate())
                }; d.prototype.showRevert = function () { this.doRevert = !0; this.doUpdate() }; d.prototype.activateKeep = function () { return !this.recentAccept && !this.recentRevert && !this.initNewContext }; d.prototype.doUpdate = function () {
                    var a = []; this.activateKeep() && this.keepSuggestion && this.keepSuggestion.matchesModel ? a.push(this.keepSuggestion) : this.doRevert && a.push(this.revertSuggestion);
                    a = a.concat(this.currentSuggestions); this.options.forEach(function (b, c) { c < a.length ? b.update(a[c]) : b.update(null) })
                }; return d
            }(g.UITouchHandlerBase); g.SuggestionManager = c
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var k = function () {
                function e(b) { this._options = {}; this.imagePath = ""; this.constructContainer(); this.hostDevice = b; this.setOptions(e.DEFAULT_OPTIONS) } e.prototype.constructContainer = function () { var b = f.keyman.singleton.util._CreateElement("div"); b.id = "keymanweb_banner_container"; b.className = "kmw-banner-container"; return this.bannerContainer = b }; Object.defineProperty(e.prototype, "element", { get: function () { return this.bannerContainer }, enumerable: !1, configurable: !0 }); e.prototype.getOptions =
                    function () { var b = {}, a; for (a in this._options) b[a] = this._options[a]; return b }; e.prototype.setOptions = function (b) { var a = f.keyman.singleton, c; for (c in b) { switch (c) { case "alwaysShow": this.alwaysShow = b[c]; break; case "mayPredict": a.core.languageProcessor.mayPredict = b[c]; break; case "mayCorrect": a.core.languageProcessor.mayCorrect = b[c]; break; case "imagePath": this.imagePath = b[c] }this._options[c] = b[c]; this.activeBanner || this.selectBanner("inactive") } }; e.prototype.appendStyles = function () {
                        this.activeBanner &&
                        this.activeBanner.appendStyleSheet()
                    }; e.prototype.setBanner = function (b, a) { switch (b) { case "blank": a = new g.BlankBanner; break; case "image": a = new g.ImageBanner(this.imagePath, g.Banner.DEFAULT_HEIGHT); break; case "suggestion": a = new g.SuggestionBanner(this.hostDevice, a); break; default: throw Error("Invalid type specified for the banner!"); }this._activeType = b; a && (this._setBanner(a), a.activate()) }; e.prototype.selectBanner = function (b) {
                        "active" == b ? this.setBanner("suggestion") : "inactive" == b ? this.alwaysShow ? this.setBanner("image") :
                            this.setBanner("blank") : "configured" == b && (b = this.activeBanner, b.postConfigure && b.postConfigure())
                    }; e.prototype._setBanner = function (b) { if (this.activeBanner) { if (b == this.activeBanner) return; var a = this.activeBanner; a.deactivate(); this.bannerContainer.replaceChild(b.getDiv(), a.getDiv()) } this.activeBanner = b; this.bannerContainer.appendChild(b.getDiv()); b = f.keyman.singleton; b.osk && b.osk.refreshLayout() }; Object.defineProperty(e.prototype, "activeType", {
                        get: function () { return this._activeType }, enumerable: !1,
                        configurable: !0
                    }); Object.defineProperty(e.prototype, "height", { get: function () { return this.activeBanner ? this.activeBanner.height : 0 }, set: function (b) { this.activeBanner && (this.activeBanner.height = b) }, enumerable: !1, configurable: !0 }); Object.defineProperty(e.prototype, "layoutHeight", { get: function () { return g.ParsedLengthStyle.inPixels(this.height) }, enumerable: !1, configurable: !0 }); e.prototype.refreshLayout = function () { }; e.DEFAULT_OPTIONS = { alwaysShow: !1, mayPredict: !0, mayCorrect: !0, imagePath: "" }; return e
            }(); g.BannerManager =
                k
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (f) {
        (function (f) {
            var g = function () {
                function e(b) { this.kbd = b; var a = this.element = document.createElement("div"); a.style.userSelect = "none"; a.className = "kmw-osk-static"; a.id = e.ID; a.innerHTML = b.helpText } e.prototype.postInsert = function () { if (!this.element.parentElement || !document.getElementById(e.ID)) throw Error("The HelpPage root element has not yet been inserted into the DOM."); this.kbd.hasScript && this.kbd.embedScript(this.element.parentElement) }; e.prototype.updateState = function () { };
                e.prototype.refreshLayout = function () { }; Object.defineProperty(e.prototype, "layoutHeight", { get: function () { return f.ParsedLengthStyle.inPercent(100) }, enumerable: !1, configurable: !0 }); e.ID = "kmw-osk-help-page"; return e
            }(); f.HelpPageView = g
        })(f.osk || (f.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) { (function (f) { (function (f) { var g = function () { function e() { var b = this.element = document.createElement("div"); b.style.userSelect = "none"; b.className = "kmw-osk-none" } e.prototype.postInsert = function () { }; e.prototype.updateState = function () { }; e.prototype.refreshLayout = function () { }; Object.defineProperty(e.prototype, "layoutHeight", { get: function () { return f.ParsedLengthStyle.inPixels(0) }, enumerable: !1, configurable: !0 }); return e }(); f.EmptyView = g })(f.osk || (f.osk = {})) })(f.keyman || (f.keyman = {})) })(com ||
    (com = {}));

(function (f) {
    (function (k) {
        (function (g) {
            var n = function (e) {
                function b(a) {
                    a = e.call(this, a) || this; a.isResizing = !1; a.modifierCodes = k.text.Codes.modifierCodes; a.modifierBitmasks = k.text.Codes.modifierBitmasks; a.stateBitmasks = k.text.Codes.stateBitmasks; a.keyCodes = k.text.Codes.keyCodes; a.restorePosition = function (a) { }.bind(a); a._VKbdMouseOver = function (a) { f.keyman.singleton.uiManager.setActivatingUI(!0) }.bind(a); a._VKbdMouseOut = function (a) { f.keyman.singleton.uiManager.setActivatingUI(!1) }.bind(a); document.body.appendChild(a._Box);
                    f.keyman.singleton.isEmbedded && a.activationMode == g.ActivationMode.manual; return a
                } __extends(b, e); b.prototype._Unload = function () { this._Box = this.bannerView = this.keyboardView = null }; b.prototype.setBoxStyling = function () { var a = this._Box.style; a.zIndex = "9999"; a.display = "none"; a.width = "100%"; a.position = "fixed" }; b.prototype.refreshLayout = function (a) { if (!this.isResizing) { try { this.isResizing = !0, this.doResize() } finally { this.isResizing = !1 } e.prototype.refreshLayout.call(this, a) } }; b.prototype.doResize = function () {
                    if (this.vkbd &&
                        this.device.touchable) { var a = this.getDefaultKeyboardHeight(); this.setSize(this.getDefaultWidth(), a + this.banner.height) }
                }; b.prototype.postKeyboardLoad = function () { this.doResize(); this._Visible = !1; this._Box.onmouseover = this._VKbdMouseOver; this._Box.onmouseout = this._VKbdMouseOut; this.displayIfActive && this.present() }; b.prototype.getDefaultKeyboardHeight = function () {
                    var a, b, d = f.keyman.singleton, e = d.util.device; if ("function" == typeof d.getOskHeight) return d.getOskHeight(); var g = null === (a = null === document ||
                        void 0 === document ? void 0 : document.documentElement) || void 0 === a ? void 0 : a.clientWidth; a = null === (b = null === document || void 0 === document ? void 0 : document.documentElement) || void 0 === b ? void 0 : b.clientHeight; "undefined" == typeof g && (g = Math.min(screen.height, screen.width), a = Math.max(screen.height, screen.width), d.util.portraitView() || (b = g, g = a, a = b)); g = Math.floor(Math.min(a, g) / 2); "phone" == e.formFactor && (g = d.util.portraitView() ? Math.floor(a / 2.4) : Math.floor(a / 1.6)); "iOS" == e.OS && (g /= d.util.getViewportScale()); return g
                };
                b.prototype.getDefaultWidth = function () { var a, b = f.keyman.singleton, d = b.util.device; if ("function" == typeof b.getOskWidth) return b.getOskWidth(); b = null === (a = null === document || void 0 === document ? void 0 : document.documentElement) || void 0 === a ? void 0 : a.clientWidth; "undefined" == typeof b && (b = "iOS" == d.OS ? window.innerWidth : "Android" == d.OS ? screen.availWidth : screen.width); return b }; b.prototype.setRect = function (a) { }; b.prototype.getPos = function () {
                    var a = this._Box; return {
                        left: this._Visible ? a.offsetLeft : this.x, top: this._Visible ?
                            a.offsetTop : this.y
                    }
                }; b.prototype.setPos = function (a) { }; b.prototype.setDisplayPositioning = function () { var a = this._Box.style; this.vkbd && (a.position = "fixed", a.left = a.bottom = "0px", a.border = "none", a.borderTop = "1px solid gray") }; b.prototype.doShow = function (a) { return f.keyman.singleton.util.callEvent("osk.show", a) }; b.prototype.doHide = function (a) { return f.keyman.singleton.util.callEvent("osk.hide", a) }; return b
            }(g.OSKView); g.AnchoredOSKView = n
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function (e) {
                function b(a) {
                    a = e.call(this, a) || this; a.userPositioned = !1; a.specifiedPosition = !1; a.noDrag = !1; a.modifierCodes = k.text.Codes.modifierCodes; a.modifierBitmasks = k.text.Codes.modifierBitmasks; a.stateBitmasks = k.text.Codes.stateBitmasks; a.keyCodes = k.text.Codes.keyCodes; a.restorePosition = function (a) {
                        var b, c = this._Visible; c && this.activeTarget instanceof k.dom.targets.OutputTarget && (null === (b = this.activeTarget) || void 0 === b ? void 0 : b.focus()); this.loadCookie();
                        this.userPositioned = !1; a || (delete this.dfltX, delete this.dfltY); this.saveCookie(); c && this.present(); this.doResizeMove(); this.desktopLayout.titleBar.showPin(!1)
                    }.bind(a); a._VKbdMouseOver = function (a) { f.keyman.singleton.uiManager.setActivatingUI(!0) }.bind(a); a._VKbdMouseOut = function (a) { f.keyman.singleton.uiManager.setActivatingUI(!1) }.bind(a); document.body.appendChild(a._Box); a.loadCookie(); var b = a.desktopLayout = new g.layouts.TargetedFloatLayout; a.headerView = b.titleBar; b.titleBar.attachHandlers(a); return a
                }
                __extends(b, e); b.prototype._Unload = function () { this._Box = this.bannerView = this.keyboardView = null }; b.prototype.setBoxStyling = function () { var a = this._Box.style; a.zIndex = "9999"; a.display = "none"; a.width = "auto"; a.position = "absolute" }; b.prototype.postKeyboardLoad = function () {
                    this._Visible = !1; this._Box.onmouseover = this._VKbdMouseOver; this._Box.onmouseout = this._VKbdMouseOut; var a = this.desktopLayout; a.attachToView(this); this.activeKeyboard && this.desktopLayout.titleBar.setTitleFromKeyboard(this.activeKeyboard);
                    this.vkbd ? (this.footerView = a.resizeBar, this._Box.appendChild(this.footerView.element)) : (this.footerView && this._Box.removeChild(this.footerView.element), this.footerView = null); this.loadCookie(); this.setNeedsLayout(); this.displayIfActive && this.present()
                }; b.prototype.isEnabled = function () { return this.displayIfActive }; b.prototype.isVisible = function () { return this._Visible }; b.prototype.saveCookie = function () {
                    var a = f.keyman.singleton.util, b = a.loadCookie("KeymanWeb_OnScreenKeyboard"), d = this.getPos(); b.visible =
                        this.displayIfActive ? 1 : 0; b.userSet = this.userPositioned ? 1 : 0; b.left = d.left; b.top = d.top; b._version = k.utils.Version.CURRENT.toString(); this.vkbd && (b.width = this.width.val, b.height = this.height.val); a.saveCookie("KeymanWeb_OnScreenKeyboard", b)
                }; b.prototype.loadCookie = function () {
                    var a = f.keyman.singleton.util, b = a.loadCookie("KeymanWeb_OnScreenKeyboard"); this.displayIfActive = 1 == a.toNumber(b.visible, 1); this.userPositioned = 1 == a.toNumber(b.userSet, 0); this.x = a.toNumber(b.left, -1); this.y = a.toNumber(b.top, -1); a =
                        b._version; var d = .3 * screen.width, e = .15 * screen.height, g = parseInt(b.width, 10); b = parseInt(b.height, 10); var k = isNaN(b); g = isNaN(g) ? d : g; b = isNaN(b) ? e : b; g < .2 * screen.width && (g = .2 * screen.width); b < .1 * screen.height && (b = .1 * screen.height); g > .9 * screen.width && (g = .9 * screen.width); b > .5 * screen.height && (b = .5 * screen.height); if (k || !a) this.headerView && this.headerView.layoutHeight.absolute && (b += this.headerView.layoutHeight.val), this.footerView && this.footerView.layoutHeight.absolute && (b += this.footerView.layoutHeight.val);
                    this.setSize(g, b); -1 != this.x && -1 != this.y && this._Box || (this.userPositioned = !1); this.x < window.pageXOffset - .8 * g && (this.x = window.pageXOffset - .8 * g); 0 > this.y && (this.y = this.x = -1, this.userPositioned = !1); this.userPositioned && this._Box && this.setPos({ left: this.x, top: this.y })
                }; b.prototype.getDefaultKeyboardHeight = function () {
                    var a = f.keyman.singleton, b = a.util.device; if ("function" == typeof a.getOskHeight) return a.getOskHeight(); var d = Math.floor(Math.min(screen.availHeight, screen.availWidth) / 2); if ("phone" == b.formFactor) {
                        var e =
                            Math.min(screen.height, screen.width), g = Math.max(screen.height, screen.width); d = a.util.portraitView() ? Math.floor(Math.max(screen.availHeight, screen.availWidth) / 3) : g / e * d / 1.6
                    } "iOS" == b.OS && (d /= a.util.getViewportScale()); return d
                }; b.prototype.getDefaultWidth = function () {
                    var a = f.keyman.singleton, b = a.util.device; if ("function" == typeof a.getOskWidth) return a.getOskWidth(); if ("iOS" == b.OS) var d = window.innerWidth; else if ("Android" == b.OS) try { d = document.documentElement.clientWidth } catch (h) { d = screen.availWidth } else d =
                        screen.width; return d
                }; b.prototype.doResizeMove = function (a) { return f.keyman.singleton.util.callEvent("osk.resizemove", a) }; b.prototype.setRect = function (a) {
                    var b = f.keyman.singleton.util; if (null != this._Box && "desktop" == b.device.formFactor) {
                        b = this._Box; var d = b.style; "left" in a && (this.x = a.left - k.dom.Utils.getAbsoluteX(b) + b.offsetLeft, d.left = this.x + "px", this.dfltX = d.left); "top" in a && (this.y = a.top - k.dom.Utils.getAbsoluteY(b) + b.offsetTop, d.top = this.y + "px", this.dfltY = d.top); if (null != this.vkbd) {
                            var e = this.vkbd.kbdDiv;
                            d = e.style; if ("width" in a) { var g = a.width - (b.offsetWidth - e.offsetWidth); g < .2 * screen.width && (g = .2 * screen.width); g > .9 * screen.width && (g = .9 * screen.width); d.width = g + "px"; this.setSize(g, this.computedHeight, !0) } "height" in a && (b = a.height - (b.offsetHeight - e.offsetHeight), b < .1 * screen.height && (b = .1 * screen.height), b > .5 * screen.height && (b = .5 * screen.height), d.height = b + "px", d.fontSize = b / 8 + "px", this.setSize(this.computedWidth, b, !0)); "nosize" in a && (this.desktopLayout.resizingEnabled = !a.nosize)
                        } "nomove" in a && (this.noDrag =
                            a.nomove, this.desktopLayout.movementEnabled = !this.noDrag); this.saveCookie()
                    }
                }; b.prototype.getPos = function () { var a = this._Box; return { left: this._Visible ? a.offsetLeft : this.x, top: this._Visible ? a.offsetTop : this.y } }; b.prototype.setPos = function (a) {
                    if ("undefined" != typeof this._Box) {
                        if (this.userPositioned) {
                            var b = a.left; a = a.top; "undefined" != typeof b && (b < -.8 * this._Box.offsetWidth && (b = -.8 * this._Box.offsetWidth), this.userPositioned && (this._Box.style.left = b + "px", this.x = b)); "undefined" != typeof a && (0 > a && (a = 0), this.userPositioned &&
                                (this._Box.style.top = a + "px", this.y = a))
                        } this.desktopLayout && this.desktopLayout.titleBar.showPin(this.userPositioned)
                    }
                }; b.prototype.setDisplayPositioning = function () {
                    var a, b = this._Box.style; b.position = "absolute"; b.display = "block"; b.left = "0px"; if (this.specifiedPosition || this.userPositioned) b.left = this.x + "px", b.top = this.y + "px"; else {
                        var d = null; this.activeTarget instanceof k.dom.targets.OutputTarget && (d = null === (a = this.activeTarget) || void 0 === a ? void 0 : a.getElement()); this.dfltX ? b.left = this.dfltX : "undefined" !=
                            typeof d && null != d && (b.left = k.dom.Utils.getAbsoluteX(d) + "px"); this.dfltY ? b.top = this.dfltY : "undefined" != typeof d && null != d && (b.top = k.dom.Utils.getAbsoluteY(d) + d.offsetHeight + "px")
                    } this.specifiedPosition = !1
                }; b.prototype.presentAtPosition = function (a, b) { if (this.mayShow()) { if (this.specifiedPosition = 0 <= a || 0 <= b) this.x = a, this.y = b; this.specifiedPosition = this.specifiedPosition || this.userPositioned; this.present() } }; b.prototype.present = function () {
                    if (this.mayShow()) {
                        this.desktopLayout.titleBar.showPin(this.userPositioned);
                        e.prototype.present.call(this); var a = {}; a.x = this._Box.offsetLeft; a.y = this._Box.offsetTop; a.userLocated = this.userPositioned; this.doShow(a)
                    }
                }; b.prototype.startHide = function (a) { e.prototype.startHide.call(this, a); a && this.saveCookie() }; b.prototype.show = function (a) { e.prototype.show.call(this, a); this.saveCookie() }; b.prototype.userLocated = function () { return this.userPositioned }; return b
            }(g.OSKView); g.FloatingOSKView = n
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            var n = function (e) {
                function b(a, b) {
                    a = e.call(this, a, b) || this; a.modifierCodes = k.text.Codes.modifierCodes; a.modifierBitmasks = k.text.Codes.modifierBitmasks; a.stateBitmasks = k.text.Codes.stateBitmasks; a.keyCodes = k.text.Codes.keyCodes; a.restorePosition = function (a) { }.bind(a); a._VKbdMouseOver = function (a) { f.keyman.singleton.uiManager.setActivatingUI(!0) }.bind(a); a._VKbdMouseOut = function (a) { f.keyman.singleton.uiManager.setActivatingUI(!1) }.bind(a); a.activationMode = g.ActivationMode.manual;
                    return a
                } __extends(b, e); Object.defineProperty(b.prototype, "element", { get: function () { return this._Box }, enumerable: !1, configurable: !0 }); b.prototype._Unload = function () { this._Box = this.bannerView = this.keyboardView = null }; b.prototype.setBoxStyling = function () { var a = this._Box.style; a.display = "none"; a.position = "relative" }; b.prototype.postKeyboardLoad = function () { this._Visible = !1; this._Box.onmouseover = this._VKbdMouseOver; this._Box.onmouseout = this._VKbdMouseOut; this.displayIfActive && this.present() }; b.prototype.getDefaultKeyboardHeight =
                    function () { return this.keyboardView instanceof g.VisualKeyboard ? this.keyboardView.height : this.computedHeight }; b.prototype.getDefaultWidth = function () { return this.computedWidth }; b.prototype.setRect = function (a) { }; b.prototype.getPos = function () { var a = this._Box; return { left: this._Visible ? a.offsetLeft : void 0, top: this._Visible ? a.offsetTop : void 0 } }; b.prototype.setPos = function (a) { }; b.prototype.setDisplayPositioning = function () { }; b.prototype.doShow = function (a) {
                        return f.keyman.singleton.util.callEvent("osk.show",
                            a)
                    }; b.prototype.doHide = function (a) { return f.keyman.singleton.util.callEvent("osk.hide", a) }; b.prototype.allowsDeviceChange = function (a) { return !0 }; return b
            }(g.OSKView); g.InlinedOSKView = n
        })(k.osk || (k.osk = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        (function (g) {
            (function (g) {
                var e = function () {
                    function b() { this.registeredModels = {}; this.languageModelMap = {} } b.prototype.init = function () { f.keyman.singleton.addEventListener("keyboardchange", this.onKeyboardChange.bind(this)) }; b.prototype.onKeyboardChange = function (a) {
                        var b, d, e = f.keyman.singleton, g = e.core; "string" == typeof a && (a = (b = {}, b.internalName = e.keyboardManager.getActiveKeyboardName(), b.languageCode = a, b.indirect = !0, b)); a = null === (d = a.languageCode) || void 0 === d ? void 0 : d.toLowerCase();
                        d = this.languageModelMap[a]; g.activeModel && g.languageProcessor.unloadModel(); d && g.languageProcessor.loadModel(d)
                    }; b.prototype.register = function (a) { var b = f.keyman.singleton.keyboardManager.getActiveLanguage(); a.id = a.id.toLowerCase(); if (JSON.stringify(a) != JSON.stringify(this.registeredModels[a.id])) { this.registeredModels[a.id] = a; var d = this; a.languages.forEach(function (c) { if (c) { if (d.languageModelMap[c] = a, c == b) d.onKeyboardChange(c) } else console.warn("Null / undefined language codes are not permitted for registration.") }) } };
                    b.prototype.deregister = function (a) { var b = f.keyman.singleton.core; a = a.toLowerCase(); if (this.registeredModels[a]) { var d = this.registeredModels[a]; delete this.registeredModels[a]; b.activeModel && b.activeModel.id == a && b.languageProcessor.unloadModel(); var e = this; d.languages.forEach(function (b) { e.languageModelMap[b].id == a && delete e.languageModelMap[b] }) } }; b.prototype.isRegistered = function (a) { return !!this.registeredModels[a.id.toLowerCase()] }; return b
                }(); g.ModelManager = e
            })(g.prediction || (g.prediction = {}))
        })(k.text ||
            (k.text = {}))
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
(function (f) {
    (function (k) {
        var g; (function (e) { e.KEYBOARD = "keyboard"; e.LANGUAGE = "language"; e.LANGUAGE_KEYBOARD = "languageKeyboard"; e.BLANK = "blank" })(g = k.SpacebarText || (k.SpacebarText = {})); var n = function () {
            function e() {
                var b = this; this._MasterDocument = null; this._HotKeys = []; this.warned = !1; this.baseFont = "sans-serif"; this.protocol = this.rootPath = this.srcPath = this.appliedFont = ""; this.mustReloadKeyboard = !1; this.globalLanguageCode = this.globalKeyboard = null; this.isEmbedded = !1; this.refocusTimer = 0; this.isHeadless =
                    !1; this.build = 300; this.options = { root: "", resources: "", keyboards: "", fonts: "", attachType: "", ui: null, setActiveOnRegister: "true", spacebarText: g.LANGUAGE_KEYBOARD, useAlerts: !0 }; this.refreshElementContent = null; this.pageFocusHandler = function () { var a; !b.uiManager.isActivating && (null === (a = b.osk) || void 0 === a ? 0 : a.vkbd) && b.core.resetContext(null); return !1 }; this.util = this.util = new k.Util(this); this.ui = this.ui = {}; this.keyboardManager = new k.keyboards.KeyboardManager(this); this.domManager = new k.dom.DOMManager(this);
                this.hotkeyManager = new k.HotkeyManager(this); this.uiManager = new k.UIManager(this); var a = "undefined" !== typeof window.KeymanWeb_BaseLayout ? window.KeymanWeb_BaseLayout : "us"; this._BrowserIsSafari = 0 <= navigator.userAgent.indexOf("AppleWebKit"); this.core = new k.text.InputProcessor(this.util.device.coreSpec, { baseLayout: a, variableStoreSerializer: new k.dom.VariableStoreCookieSerializer }); this["interface"] = this.core.keyboardInterface; this.modelManager = new k.text.prediction.ModelManager; this.osk = this.osk = null;
                this.build = Number.parseInt(f.keyman.KEYMAN_VERSION.VERSION_PATCH, 10); this.srcPath = e._srcPath; this.rootPath = e._rootPath; this.protocol = e._protocol; this.version = f.keyman.KEYMAN_VERSION.VERSION_RELEASE; this.helpURL = "http://help.keyman.com/go"; this.setInitialized(0); this.loaded = !0
            } e.prototype.setDefaultDeviceOptions = function (b) { }; e.prototype.getStyleSheetPath = function (b) { return b }; e.prototype.linkStylesheetResources = function () { }; e.prototype.getKeyboardPath = function (b, a) { return b }; e.prototype.KC_ = function (b,
                a, c) { return "" }; e.prototype.handleRotationEvents = function () { }; e.prototype.alignInputs = function (b) { }; e.prototype.namespaceID = function (b) { }; e.prototype.preserveID = function (b) { }; e.prototype.setInitialized = function (b) { this.initialized = this.initialized = b }; e.prototype.delayedInit = function () { this.touchAliasing = this.util.device.touchable ? this.domManager.touchHandlers : this.domManager.nonTouchHandlers }; e.prototype.shutdown = function () {
                    this.util.detachDOMEvent(window, "focus", this.pageFocusHandler, !1); this.util.detachDOMEvent(window,
                        "blur", this.pageFocusHandler, !1); this.domManager.shutdown(); this.osk.shutdown(); this.util.shutdown(); this.keyboardManager.shutdown(); this.core.languageProcessor.shutdown(); this.ui && this.ui.shutdown && this.ui.shutdown(); k.dom.DOMEventHandlers.states = new k.dom.CommonDOMStates
                }; e.prototype.getDebugInfo = function () {
                    var b = { attachType: this.options.attachType, device: this.util.device, initialized: this.initialized, isEmbedded: this.isEmbedded, ui: this.ui ? this.ui.name : null }; this.util.device.touchable && (b.ui = "touch");
                    return b
                }; e.prototype.addEventListener = function (b, a) { return this.util.addEventListener("kmw." + b, a) }; e.prototype._push = function (b, a) { b.push ? b.push(a) : b = b.concat(a); return b }; e.prototype.attachToControl = function (b) { this.domManager.attachToControl(b) }; e.prototype.detachFromControl = function (b) { this.domManager.detachFromControl(b) }; e.prototype.addKeyboards = function () {
                    for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; if (b && b[0] && 0 != b[0].length) {
                        var c = []; Array.isArray(b[0]) ? b[0].forEach(function (a) { return c.push(a) }) :
                            Array.isArray(b) ? b.forEach(function (a) { return c.push(a) }) : c.push(b); return this.keyboardManager.addKeyboardArray(c)
                    } return this.keyboardManager.keymanCloudRequest("", !1).catch(function (a) { console.error(a); return Promise.reject([{ error: a }]) })
                }; e.prototype.addKeyboardsForLanguage = function (b) { return "string" === typeof b ? this.keyboardManager.addLanguageKeyboards(b.split(",").map(function (a) { return a.trim() })) : this.keyboardManager.addLanguageKeyboards(b) }; e.prototype.register = function (b) { this.keyboardManager.register(b) };
            e.prototype.removeKeyboards = function (b, a) { return this.keyboardManager.removeKeyboards(b) }; e.prototype.setActiveKeyboard = function (b, a) { return this.keyboardManager.setActiveKeyboard(b, a) }; e.prototype.getActiveKeyboard = function () { return this.keyboardManager.getActiveKeyboardName() }; e.prototype.getActiveLanguage = function (b) { return this.keyboardManager.getActiveLanguage(b) }; e.prototype.isAttached = function (b) { return this.domManager.isAttached(b) }; e.prototype.isCJK = function (b) {
                return (b = b ? new k.keyboards.Keyboard(b) :
                    this.core.activeKeyboard) && b.isCJK
            }; e.prototype.isChiral = function (b) { var a; if (b) { if ("string" == typeof b) if (a = this.keyboardManager.keyboards.find(function (a) { return a.KI == b })) b = a; else throw Error("Keyboard '".concat(b, "' has not been loaded.")); a = new k.keyboards.Keyboard(b) } else a = this.core.activeKeyboard; return a.isChiral }; e.prototype.getKeyboard = function (b, a) {
                var c, d = this.keyboardManager.getDetailedKeyboards(); for (c = 0; c < d.length; c++) {
                    var e = d[c]; if (e.InternalName == b || e.InternalName == "Keyboard_" + b) if (2 >
                        arguments.length || e.LanguageCode == a) return e
                } return null
            }; e.prototype.getKeyboards = function () { return this.keyboardManager.getDetailedKeyboards() }; e.prototype.getSavedKeyboard = function () { return this.keyboardManager.getSavedKeyboard() }; e.prototype.init = function (b) { return this.domManager.init(b) }; e.prototype.resetContext = function (b) { b || (b = this.domManager.activeElement); (b = k.dom.Utils.getOutputTarget(b)) && b.resetContext(); this.core.resetContext(b) }; e.prototype.setNumericLayer = function () { this.core.keyboardProcessor.setNumericLayer(this.util.device.coreSpec) };
            e.prototype.disableControl = function (b) { this.domManager.disableControl(b) }; e.prototype.enableControl = function (b) { this.domManager.enableControl(b) }; e.prototype.setKeyboardForControl = function (b, a, c) { this.domManager.setKeyboardForControl(b, a, c) }; e.prototype.getKeyboardForControl = function (b) { this.domManager.getKeyboardForControl(b) }; e.prototype.getLanguageForControl = function (b) { this.domManager.getLanguageForControl(b) }; e.prototype.focusLastActiveElement = function () { this.domManager.focusLastActiveElement() };
            e.prototype.getLastActiveElement = function () { return this.domManager.lastActiveElement }; e.prototype.setActiveElement = function (b, a) { return this.domManager.setActiveElement(b, a) }; e.prototype.moveToElement = function (b) { this.domManager.moveToElement(b) }; e.prototype.addHotKey = function (b, a, c) { this.hotkeyManager.addHotKey(b, a, c) }; e.prototype.removeHotKey = function (b, a) { this.hotkeyManager.removeHotkey(b, a) }; e.prototype.getUIState = function () { return this.uiManager.getUIState() }; e.prototype.activatingUI = function (b) { this.uiManager.setActivatingUI(b) };
            e.prototype.BuildVisualKeyboard = function (b, a, c, d) { a = null; if (null != b) { b = b.toLowerCase().replace("keyboard_", ""); for (var e = this.keyboardManager.keyboards, g = 0; g < e.length; g++)if (b == e[g].KI.toLowerCase().replace("keyboard_", "")) { a = new f.keyman.keyboards.Keyboard(e[g]); break } } a = a || this.core.activeKeyboard; b = this.getOskHeight; b = ("function" == typeof b ? b() : null) || this.osk.computedHeight || 200; return f.keyman.osk.VisualKeyboard.buildDocumentationKeyboard(a, c, d, b) }; return e
        }(); k.KeymanBase = n
    })(f.keyman || (f.keyman =
        {}))
})(com || (com = {})); var scripts = document.getElementsByTagName("script"), ss = scripts[scripts.length - 1].src, sPath = ss.substr(0, ss.lastIndexOf("/") + 1), KeymanBase = com.keyman.KeymanBase; KeymanBase._srcPath = sPath; KeymanBase._rootPath = sPath.replace(/(https?:\/\/)([^\/]*)(.*)/, "$1$2/"); KeymanBase._protocol = sPath.replace(/(.{3,5}:)(.*)/, "$1"); window.keyman && window.keyman.loaded || function () { window.keyman = com.keyman.singleton = com.keyman.singleton = new KeymanBase; window.keyman.core.languageProcessor.init() }();
window.keyman.initialized || function () {
    var f = window.keyman, k = f.util; f.debug = f.debug = function (g) {
        if (null == f.debugElement) { var k = document.createElement("DIV"); var e = k.style; e.position = "absolute"; e.width = "30%"; e.maxHeight = "50%"; e.top = "0"; e.right = "0"; e.minHeight = "50px"; e.border = "1px solid blue"; e.whiteSpace = "pre-line"; e.overflowY = "scroll"; e = document.createElement("P"); e.id = "debug_output"; e.style.margin = "2px"; k.appendChild(e); document.body.appendChild(k); f.debugElement = e } if (null != (e = document.getElementById("debug_output"))) if (0 ==
            arguments.length) "undefined" != typeof e.textContent ? e.textContent = "" : e.innerHTML = ""; else {
                k = (new Date).toTimeString().substr(3, 5) + " "; var b, a; for (b = 0; b < arguments.length; b++) { 0 < b && (k += "; "); var c = arguments[b]; if ("object" == typeof c) if (null == c) k += "null"; else { var d = ""; for (a in c) { 0 < d.length && (d += ", "); d = d + a + ":"; switch (typeof c[a]) { case "string": case "number": case "boolean": d += c[a]; break; default: d += typeof c[a] }if (1024 < d.length) { d = d.substr(0, 1E3) + "..."; break } } 0 < d.length && (k = k + "{" + d + "}") } else k += c } 1500 < k.length &&
                    (k = k.substr(0, 1500) + " (more)"); "undefined" != typeof e.textContent ? e.textContent = k + "\n" + e.textContent : e.innerHTML = k + "<br />" + e.innerHTML
        }
    }; f.debugElement = null; f.delayedInit(); k.attachDOMEvent(window, "load", f.domManager._WindowLoad, !1); k.attachDOMEvent(window, "unload", f.domManager._WindowUnload, !1); k.attachDOMEvent(document, "keyup", f.hotkeyManager._Process, !1); k.attachDOMEvent(window, "focus", f.pageFocusHandler, !1); k.attachDOMEvent(window, "blur", f.pageFocusHandler, !1); String.kmwEnableSupplementaryPlane(!0)
}();
(function (f) {
    (function (f) {
        var g = function () { function e() { this.innerWidth = window.innerWidth; this.innerHeight = window.innerHeight } e.prototype.equals = function (b) { return this.innerWidth == b.innerWidth && this.innerHeight == b.innerHeight }; return e }(), k = function () {
            function e(b) { this.idlePermutationCounter = e.IDLE_PERMUTATION_CAP; this.keyman = b } e.prototype.resolve = function () {
                var b = this.keyman.osk; b.hideLanguageMenu(); b.setNeedsLayout(); this.oskVisible && b.present(); this.isActive = !1; this.updateTimer && (window.clearInterval(this.updateTimer),
                    this.rotState = null)
            }; e.prototype.initNewRotation = function () { this.oskVisible = this.keyman.osk.isVisible(); this.keyman.osk.hideNow(); this.isActive = !0 }; e.prototype.init = function () {
                if (!this.keyman.isEmbedded) {
                    var b = this.keyman.util.device.OS, a = this.keyman.util, c = this; "iOS" == b ? (a.attachDOMEvent(window, "orientationchange", function () { c.iOSEventHandler(); return !1 }), a.attachDOMEvent(window, "resize", function () { c.iOSEventHandler(); return !1 })) : "Android" == b && ("onmozorientationchange" in screen ? a.attachDOMEvent(screen,
                        "mozorientationchange", function () { c.initNewRotation(); return !1 }) : a.attachDOMEvent(window, "orientationchange", function () { c.initNewRotation(); return !1 }), a.attachDOMEvent(window, "resize", function () { c.resolve(); return !1 }))
                }
            }; e.prototype.iOSEventHandler = function () { this.isActive || (this.initNewRotation(), this.rotState = new g, this.updateTimer = window.setInterval(this.iOSEventUpdate.bind(this), e.UPDATE_INTERVAL)); this.idlePermutationCounter = 0 }; e.prototype.iOSEventUpdate = function () {
                var b = new g; this.rotState.equals(b) ?
                    ++this.idlePermutationCounter == e.IDLE_PERMUTATION_CAP && this.resolve() : (this.rotState = b, this.idlePermutationCounter = 0)
            }; e.IDLE_PERMUTATION_CAP = 15; e.UPDATE_INTERVAL = 20; return e
        }(); f.RotationManager = k
    })(f.keyman || (f.keyman = {}))
})(com || (com = {}));
window.keyman.initialized || function () {
    var f = window.keyman, k = f.util, g = k.device; f.isEmbedded = !1; f.setDefaultDeviceOptions = function (f) { f.attachType || (f.attachType = g.touchable ? "manual" : "auto") }; k.wait = function (g) {
        var e = this.waiting; if ("undefined" != typeof e && null != e && !f.warned) {
            var b = e.firstChild.childNodes; g ? (e.pending = !0, window.setTimeout(function () {
                e.pending && f.options.useAlerts && (window.scrollTo(0, 0), b[0].style.display = "none", b[1].className = "kmw-wait-text", b[1].innerHTML = g, b[2].style.display = "block",
                    e.style.display = "block")
            }, 1E3)) : e.pending && (b[1].innerHTML = "", e.pending = !1, e.style.display = "none")
        }
    }; f.getStyleSheetPath = function (f) { return k.getOption("resources") + "osk/" + f }; f.getKeyboardPath = function (g) { return (/^(([\.]\/)|([\.][\.]\/)|(\/))|(:)/.test(g) ? "" : f.options.keyboards) + g }; f.isPositionSynthesized = function () { return g.touchable }; f.handleRotationEvents = function () { (new com.keyman.RotationManager(f)).init() }
}();
(function () { var f = window.keyman, k = window.setInterval(function () { "complete" === document.readyState && (window.clearInterval(k), f.init(null)) }, 10) })(); (function () { var f = com.keyman.Util.prototype; f._GetAbsoluteX = f.getAbsoluteX; f._GetAbsoluteY = f.getAbsoluteY; f._GetAbsolute = f.getAbsolute; f.toNzString = f.nzString })(); (function () { com.keyman.text.KeyboardInterface.__publishShorthandAPI() })();
//# sourceMappingURL=keymanweb.js.map