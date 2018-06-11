/* prebid.js v0.34.13
Updated : 2018-05-31 */
!(function (e) {
    var t = window.pbjsChunk;
    window.pbjsChunk = function (n, o, a) {
        for (var s, u, d, c = 0, f = []; c < n.length; c++) u = n[c], r[u] && f.push(r[u][0]), r[u] = 0;
        for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
        for (t && t(n, o, a); f.length;) f.shift()();
        if (a)
            for (c = 0; c < a.length; c++) d = i(i.s = a[c]);
        return d
    };
    var n = {},
        r = {
            129: 0
        };

    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = n, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i.oe = function (e) {
        throw console.error(e), e
    }, i(i.s = 398)
})([(function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    t.parseSizesInput = function (e) {
        var t = [];
        if ("string" == typeof e) {
            var n = e.split(","),
                r = /^(\d)+x(\d)+$/i;
            if (n)
                for (var o in n) E(n, o) && n[o].match(r) && t.push(n[o])
        } else if ("object" === (void 0 === e ? "undefined" : i(e))) {
            var a = e.length;
            if (a > 0)
                if (2 === a && "number" == typeof e[0] && "number" == typeof e[1]) t.push(v(e));
                else
                    for (var s = 0; s < a; s++) t.push(v(e[s]))
        }
        return t
    }, t.parseGPTSingleSizeArray = v, t.uniques = S, t.flatten = T, t.getBidRequest = function (e) {
        return pbjs._bidsRequested.map((function (t) {
            return t.bids.find((function (t) {
                return t.bidId === e
            }))
        })).find((function (e) {
            return e
        }))
    }, t.getKeys = A, t.getValue = _, t.getBidderCodes = function () {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map((function (e) {
            return e.bids.map((function (e) {
                return e.bidder
            })).reduce(T, [])
        })).reduce(T).filter(S)
    }, t.isGptPubadsDefined = function () {
        if (window.googletag && t.isFn(window.googletag.pubads) && t.isFn(window.googletag.pubads().getSlots)) return !0
    }, t.getHighestCpm = function (e, t) {
        if (e.cpm === t.cpm) return e.timeToRespond > t.timeToRespond ? t : e;
        return e.cpm < t.cpm ? t : e
    }, t.shuffle = function (e) {
        var t = e.length;
        for (; t > 0;) {
            var n = Math.floor(Math.random() * t),
                r = e[--t];
            e[t] = e[n], e[n] = r
        }
        return e
    }, t.adUnitsFilter = function (e, t) {
        return e.includes(t && t.placementCode || t && t.adUnitCode)
    }, t.isSrcdocSupported = function (e) {
        return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
    }, t.deepClone = function (e) {
        return (0, u.default)(e)
    }, t.inIframe = function () {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    }, t.isSafariBrowser = function () {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    }, t.replaceAuctionPrice = function (e, t) {
        if (!e) return;
        return e.replace(/\$\{AUCTION_PRICE\}/g, t)
    }, t.getBidderRequestAllAdUnits = function (e) {
        return pbjs._bidsRequested.find((function (t) {
            return t.bidderCode === e
        }))
    }, t.getBidderRequest = function (e, t) {
        return pbjs._bidsRequested.find((function (n) {
            return n.bids.filter((function (n) {
                return n.bidder === e && n.placementCode === t
            })).length > 0
        })) || {
            start: null,
            requestId: null
        }
    }, t.cookiesAreEnabled = function () {
        if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
    }, t.delayExecution = function (e, t) {
        if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got " + t);
        var n = 0;
        return function () {
            ++n === t && e.apply(null, arguments)
        }
    }, t.groupBy = function (e, t) {
        return e.reduce((function (e, n) {
            return (e[n[t]] = e[n[t]] || []).push(n), e
        }), {})
    }, t.deepAccess = function (e, t) {
        t = String(t).split(".");
        for (var n = 0; n < t.length; n++)
            if (void 0 === (e = e[t[n]])) return;
        return e
    }, t.createContentToExecuteExtScriptInFriendlyFrame = function (e) {
        if (!e) return "";
        return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>'
    }, t.getDefinedParams = function (e, t) {
        return t.filter((function (t) {
            return e[t]
        })).reduce((function (t, n) {
            return r(t, (function (e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            })({}, n, e[n]))
        }), {})
    }, t.isValidMediaTypes = function (e) {
        var t = ["banner", "native", "video"];
        if (!Object.keys(e).every((function (e) {
                return t.includes(e)
            }))) return !1;
        if (e.video && e.video.context) return ["instream", "outstream"].includes(e.video.context);
        return !0
    }, t.unsupportedBidderMessage = function (e, t) {
        var n = e.mediaType || Object.keys(e.mediaTypes).join(", "),
            r = 1 === t.length ? "This bidder" : "These bidders";
        return "\n    " + e.code + " is a " + n + " ad unit\n    containing bidders that don't support " + n + ": " + t.join(", ") + ".\n    " + r + " won't fetch demand.\n  "
    };
    var o, a = n(8),
        s = n(61),
        u = (o = s) && o.__esModule ? o : {
            default: o
        };
    var d = n(2),
        c = !1,
        f = Object.prototype.toString,
        l = null;
    try {
        l = console.info.bind(window.console)
    } catch (e) {}
    t.replaceTokenInString = function (e, t, n) {
        return this._each(t, (function (t, r) {
            t = void 0 === t ? "" : t;
            var i = n + r.toUpperCase() + n,
                o = new RegExp(i, "g");
            e = e.replace(o, t)
        })), e
    };
    var p, g = (p = 0, function () {
        return ++p
    });

    function b() {
        return g() + Math.random().toString(16).substr(2)
    }

    function v(e) {
        if (t.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
    }

    function y() {
        return window.console && window.console.log
    }
    t.getUniqueIdentifierStr = b, t.generateUUID = function e(t) {
        return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
    }, t.getBidIdParameter = function (e, t) {
        return t && t[e] ? t[e] : ""
    }, t.tryAppendQueryString = function (e, t, n) {
        return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e
    }, t.parseQueryStringParameters = function (e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
        return t
    }, t.transformAdServerTargetingObj = function (e) {
        return e && Object.getOwnPropertyNames(e).length > 0 ? A(e).map((function (t) {
            return t + "=" + encodeURIComponent(_(e, t))
        })).join("&") : ""
    }, t.getTopWindowLocation = function () {
        var e = void 0;
        try {
            window.top.location.toString(), e = window.top.location
        } catch (t) {
            e = window.location
        }
        return e
    }, t.getTopWindowUrl = function () {
        var e = void 0;
        try {
            e = this.getTopWindowLocation().href
        } catch (t) {
            e = ""
        }
        return e
    }, t.getTopWindowReferrer = function () {
        try {
            return window.top.document.referrer
        } catch (e) {
            return document.referrer
        }
    }, t.logWarn = function (e) {
        m() && console.warn && console.warn("WARNING: " + e)
    }, t.logInfo = function (e, t) {
        m() && y() && l && (t && 0 !== t.length || (t = ""), l("INFO: " + e + ("" === t ? "" : " : params : "), t))
    }, t.logMessage = function (e) {
        m() && y() && console.log("MESSAGE: " + e)
    }, t.hasConsoleLogger = y;
    var m = function () {
        if (!1 === a.config.getConfig("debug") && !1 === c) {
            var e = "TRUE" === h(d.DEBUG_MODE).toUpperCase();
            a.config.setConfig({
                debug: e
            }), c = !0
        }
        return !!a.config.getConfig("debug")
    };
    t.debugTurnedOn = m, t.logError = function () {
        m() && window.console && window.console.error && console.error.apply(console, arguments)
    }, t.createInvisibleIframe = function () {
        var e = document.createElement("iframe");
        return e.id = b(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
    };
    var h = function (e) {
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
        return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
    };
    t.getParameterByName = h, t.hasValidBidRequest = function (e, t, n) {
        var r = !1;

        function i(e, n) {
            n === t[o] && (r = !0)
        }
        for (var o = 0; o < t.length; o++)
            if (r = !1, this._each(e, i), !r) return this.logError("Params are missing for bid request. One of these required paramaters are missing: " + t, n), !1;
        return !0
    }, t.addEventHandler = function (e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
    }, t.isA = function (e, t) {
        return f.call(e) === "[object " + t + "]"
    }, t.isFn = function (e) {
        return this.isA(e, "Function")
    }, t.isStr = function (e) {
        return this.isA(e, "String")
    }, t.isArray = function (e) {
        return this.isA(e, "Array")
    }, t.isNumber = function (e) {
        return this.isA(e, "Number")
    }, t.isEmpty = function (e) {
        if (!e) return !0;
        if (t.isArray(e) || t.isStr(e)) return !(e.length > 0);
        for (var n in e)
            if (hasOwnProperty.call(e, n)) return !1;
        return !0
    }, t.isEmptyStr = function (e) {
        return this.isStr(e) && (!e || 0 === e.length)
    }, t._each = function (e, t) {
        if (!this.isEmpty(e)) {
            if (this.isFn(e.forEach)) return e.forEach(t, this);
            var n = 0,
                r = e.length;
            if (r > 0)
                for (; n < r; n++) t(e[n], n, e);
            else
                for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
        }
    }, t.contains = function (e, t) {
        if (this.isEmpty(e)) return !1;
        if (this.isFn(e.indexOf)) return -1 !== e.indexOf(t);
        for (var n = e.length; n--;)
            if (e[n] === t) return !0;
        return !1
    }, t.indexOf = (function () {
        if (Array.prototype.indexOf) return Array.prototype.indexOf
    })(), t._map = function (e, t) {
        if (this.isEmpty(e)) return [];
        if (this.isFn(e.map)) return e.map(t);
        var n = [];
        return this._each(e, (function (r, i) {
            n.push(t(r, i, e))
        })), n
    };
    var E = function (e, t) {
        return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
    };

    function S(e, t, n) {
        return n.indexOf(e) === t
    }

    function T(e, t) {
        return e.concat(t)
    }

    function A(e) {
        return Object.keys(e)
    }

    function _(e, t) {
        return e[t]
    }
    t.insertElement = function (e, t, n) {
        t = t || document;
        var r = void 0;
        r = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
        try {
            (r = r.length ? r : t.getElementsByTagName("body")).length && (r = r[0]).insertBefore(e, r.firstChild)
        } catch (e) {}
    }, t.triggerPixel = function (e) {
        (new Image).src = e
    }, t.insertUserSyncIframe = function (e) {
        var n = this.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
            r = document.createElement("div");
        r.innerHTML = n;
        var i = r.firstChild;
        t.insertElement(i)
    }, t.createTrackPixelHtml = function (e) {
        if (!e) return "";
        var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
        return t += '<img src="' + encodeURI(e) + '"></div>'
    }, t.createTrackPixelIframeHtml = function (e) {
        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return e ? (n && (e = encodeURI(e)), r && (r = 'sandbox="' + r + '"'), "<iframe " + r + ' id="' + t.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0p;width:0p;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
    }, t.getIframeDocument = function (e) {
        if (e) {
            var t = void 0;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
            } catch (e) {
                this.logError("Cannot get iframe document", e)
            }
            return t
        }
    }, t.getValueString = function (e, t, n) {
        return null == t ? n : this.isStr(t) ? t : this.isNumber(t) ? t.toString() : void this.logWarn("Unsuported type for param: " + e + " required type: String")
    }
}), (function (e, t, n) {
    "use strict";
    var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(0),
        o = n(62),
        a = n(15),
        s = n(6),
        u = n(0),
        d = n(2),
        c = n(12),
        f = void 0,
        l = {};
    t.bidderRegistry = l;
    var p = {
            endpoint: d.S2S.DEFAULT_ENDPOINT,
            adapter: d.S2S.ADAPTER,
            syncEndpoint: d.S2S.SYNC_ENDPOINT
        },
        g = "random",
        b = {
            random: !0,
            fixed: !0
        },
        v = {},
        y = g;

    function m(e) {
        var t = e.bidderCode,
            n = e.requestId,
            s = e.bidderRequestId;
        return e.adUnits.map((function (e) {
            return e.bids.filter((function (e) {
                return e.bidder === t
            })).map((function (t) {
                var d = e.sizes;
                if (e.sizeMapping) {
                    var c = (0, o.mapSizes)(e);
                    if ("" === c) return "";
                    d = c
                }
                e.mediaTypes && (u.isValidMediaTypes(e.mediaTypes) ? t = r({}, t, {
                    mediaTypes: e.mediaTypes
                }) : u.logError("mediaTypes is not correctly configured for adunit " + e.code));
                var f = e.nativeParams || u.deepAccess(e, "mediaTypes.native");
                return f && (t = r({}, t, {
                    nativeParams: (0, a.processNativeAdUnitParams)(f)
                })), t = r({}, t, (0, i.getDefinedParams)(e, ["mediaType", "renderer"])), r({}, t, {
                    placementCode: e.code,
                    transactionId: e.transactionId,
                    sizes: d,
                    bidId: t.bid_id || u.getUniqueIdentifierStr(),
                    bidderRequestId: s,
                    requestId: n
                })
            }))
        })).reduce(i.flatten, []).filter((function (e) {
            return "" !== e
        }))
    }
    t.callBids = function (e) {
        var t = e.adUnits,
            n = e.cbTimeout,
            r = u.generateUUID(),
            a = Date.now(),
            s = {
                timestamp: a,
                requestId: r,
                timeout: n
            };
        c.emit(d.EVENTS.AUCTION_INIT, s);
        var b = (0, i.getBidderCodes)(t);
        y === g && (b = (0, i.shuffle)(b));
        var v = l[p.adapter];
        v && (v.setConfig(p), v.queueSync({
            bidderCodes: b
        }));
        var h = [],
            E = !1;
        if (p.enabled) {
            (E = p.testing && void 0 !== f) && (h = f.getSourceBidderMap(t)[f.CLIENT]);
            var S = p.bidders;
            b = b.filter((function (e) {
                return !S.includes(e) || h.includes(e)
            }));
            var T = u.deepClone(t);
            T.forEach((function (e) {
                var t, n;
                e.sizeMapping && (e.sizes = (0, o.mapSizes)(e), delete e.sizeMapping), e.sizes = (t = e, n = [], u.parseSizesInput(t.sizes).forEach((function (e) {
                    var t = e.split("x"),
                        r = {
                            w: parseInt(t[0]),
                            h: parseInt(t[1])
                        };
                    n.push(r)
                })), n), e.bids = e.bids.filter((function (e) {
                    return S.includes(e.bidder) && (!E || e.finalSource !== f.CLIENT)
                })).map((function (e) {
                    return e.bid_id = u.getUniqueIdentifierStr(), e
                }))
            })), T = T.filter((function (e) {
                return 0 !== e.bids.length
            }));
            var A = u.generateUUID();
            S.forEach((function (e) {
                var t = u.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        requestId: r,
                        bidderRequestId: t,
                        tid: A,
                        bids: m({
                            bidderCode: e,
                            requestId: r,
                            bidderRequestId: t,
                            adUnits: T
                        }),
                        start: (new Date).getTime(),
                        auctionStart: a,
                        timeout: p.timeout,
                        src: d.S2S.SRC
                    };
                0 !== n.bids.length && (pbjs._bidsRequested.push(n), c.emit(d.EVENTS.BID_REQUESTED, n))
            }));
            var _ = {
                tid: A,
                ad_units: T
            };
            u.logMessage("CALLING S2S HEADER BIDDERS ==== " + S.join(",")), _.ad_units.length && v.callBids(_)
        }
        var I = [],
            w = u.deepClone(t);
        w.forEach((function (e) {
            e.bids = e.bids.filter((function (e) {
                return !E || e.finalSource !== f.SERVER
            }))
        })), w = w.filter((function (e) {
            return 0 !== e.bids.length
        })), b.forEach((function (e) {
            if (l[e]) {
                var t = u.getUniqueIdentifierStr(),
                    i = {
                        bidderCode: e,
                        requestId: r,
                        bidderRequestId: t,
                        bids: m({
                            bidderCode: e,
                            requestId: r,
                            bidderRequestId: t,
                            adUnits: w
                        }),
                        auctionStart: a,
                        timeout: n
                    };
                i.bids && 0 !== i.bids.length && (pbjs._bidsRequested.push(i), I.push(i))
            } else u.logError("Adapter trying to be called which does not exist: " + e + " adaptermanager.callBids")
        })), I.forEach((function (e) {
            e.start = (new Date).getTime();
            var t = l[e.bidderCode];
            e.bids && 0 !== e.bids.length && (u.logMessage("CALLING BIDDER ======= " + e.bidderCode), c.emit(d.EVENTS.BID_REQUESTED, e), t.callBids(e))
        }))
    }, t.videoAdapters = [], t.registerBidAdapter = function (e, n) {
        var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
            i = void 0 === r ? [] : r;
        e && n ? "function" == typeof e.callBids ? (l[n] = e, i.includes("video") && t.videoAdapters.push(n), i.includes("native") && a.nativeAdapters.push(n)) : u.logError("Bidder adaptor error for bidder code: " + n + "bidder must implement a callBids() function") : u.logError("bidAdaptor or bidderCode not specified")
    }, t.aliasBidAdapter = function (e, n) {
        var i, o;
        if (void 0 === l[n]) {
            var d = l[e];
            if (void 0 === d) u.logError('bidderCode "' + e + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter");
            else try {
                var c = void 0,
                    f = (i = e, o = [], t.videoAdapters.includes(i) && o.push("video"), a.nativeAdapters.includes(i) && o.push("native"), o);
                if (d.constructor.prototype != Object.prototype)(c = new d.constructor).setBidderCode(n);
                else {
                    var p = d.getSpec();
                    c = (0, s.newBidder)(r({}, p, {
                        code: n
                    }))
                }
                this.registerBidAdapter(c, n, {
                    supportedMediaTypes: f
                })
            } catch (t) {
                u.logError(e + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
            }
        } else u.logMessage('alias name "' + n + '" has been already specified.')
    }, t.registerAnalyticsAdapter = function (e) {
        var t = e.adapter,
            n = e.code;
        t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, v[n] = t) : u.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : u.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
    }, t.enableAnalytics = function (e) {
        u.isArray(e) || (e = [e]), u._each(e, (function (e) {
            var t = v[e.provider];
            t ? t.enableAnalytics(e) : u.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
        }))
    }, t.setBidderSequence = function (e) {
        b[e] ? y = e : u.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.")
    }, t.getBidAdapter = function (e) {
        return l[e]
    }, t.setS2SConfig = function (e) {
        p = e
    }, t.setS2STestingModule = function (e) {
        f = e
    }
}), (function (e, t) {
    e.exports = {
        JSON_MAPPING: {
            PL_CODE: "code",
            PL_SIZE: "sizes",
            PL_BIDS: "bids",
            BD_BIDDER: "bidder",
            BD_ID: "paramsd",
            BD_PL_ID: "placementId",
            ADSERVER_TARGETING: "adserverTargeting",
            BD_SETTING_STANDARD: "standard"
        },
        REPO_AND_VERSION: "prebid_prebid_0.34.13",
        DEBUG_MODE: "pbjs_debug",
        STATUS: {
            GOOD: 1,
            NO_BID: 2
        },
        CB: {
            TYPE: {
                ALL_BIDS_BACK: "allRequestedBidsBack",
                AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                BID_WON: "bidWon",
                REQUEST_BIDS: "requestBids"
            }
        },
        EVENTS: {
            AUCTION_INIT: "auctionInit",
            AUCTION_END: "auctionEnd",
            BID_ADJUSTMENT: "bidAdjustment",
            BID_TIMEOUT: "bidTimeout",
            BID_REQUESTED: "bidRequested",
            BID_RESPONSE: "bidResponse",
            BID_WON: "bidWon",
            SET_TARGETING: "setTargeting",
            REQUEST_BIDS: "requestBids",
            ADD_AD_UNITS: "addAdUnits"
        },
        EVENT_ID_PATHS: {
            bidWon: "adUnitCode"
        },
        GRANULARITY_OPTIONS: {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        },
        TARGETING_KEYS: ["hb_bidder", "hb_adid", "hb_pb", "hb_size", "hb_deal"],
        S2S: {
            DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/auction",
            SRC: "s2s",
            ADAPTER: "prebidServer",
            SYNC_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/cookie_sync",
            SYNCED_BIDDERS_KEY: "pbjsSyncs"
        }
    }
}), (function (e, t, n) {
    "use strict";
    var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = (function () {
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function (e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        })(),
        o = n(0),
        a = n(34),
        s = n(15),
        u = n(35),
        d = n(63),
        c = n(17),
        f = n(8),
        l = n(64),
        p = n(2),
        g = p.EVENTS.AUCTION_END,
        b = n(0),
        v = n(12),
        y = {
            byAdUnit: [],
            all: [],
            oneTime: null,
            timer: !1
        },
        m = {};

    function h(e) {
        return e.bidderCode
    }

    function E(e) {
        return e.bidder
    }

    function S(e, t) {
        return e + t
    }

    function T() {
        return pbjs._bidsRequested.map((function (e) {
            return e.bids
        })).reduce(o.flatten, []).filter(o.adUnitsFilter.bind(this, pbjs._adUnitCodes)).map((function (e) {
            return "indexExchange" === e.bidder ? e.sizes.length : 1
        })).reduce((function (e, t) {
            return e + t
        }), 0) === pbjs._bidsReceived.filter(o.adUnitsFilter.bind(this, pbjs._adUnitCodes)).length
    }

    function A(e, t) {
        function n(t) {
            return "Invalid bid from " + e.bidderCode + ". Ignoring bid: " + t
        }
        return e ? t ? (0, o.getBidderRequest)(e.bidderCode, t).start ? "native" !== e.mediaType || (0, s.nativeBidIsValid)(e) ? "video" !== e.mediaType || (0, u.isValidVideoBid)(e) ? !("banner" === e.mediaType && !(function (e, t) {
            if ((e.width || 0 === e.width) && (e.height || 0 === e.height)) return !0;
            var n = (0, o.getBidderRequest)(e.bidderCode, t),
                r = n && n.bids && n.bids[0] && n.bids[0].sizes,
                a = b.parseSizesInput(r);
            if (1 === a.length) {
                var s = a[0].split("x"),
                    u = i(s, 2),
                    d = u[0],
                    c = u[1];
                return e.width = d, e.height = c, !0
            }
            return !1
        })(e, t)) || (b.logError(n("Banner bids require a width and height")), !1) : (b.logError(n("Video bid does not have required vastUrl or renderer property")), !1) : (b.logError(n("Native bid missing some required properties.")), !1) : (b.logError(n("Cannot find valid matching bid request.")), !1) : (b.logError(n("No adUnitCode was supplied to addBidResponse.")), !1) : (b.logError("Some adapter tried to add an undefined bid for " + t + "."), !1)
    }

    function _(e, t) {
        var n = (0, o.getBidderRequest)(e.bidderCode, t);
        r(e, {
            requestId: n.requestId,
            responseTimestamp: (new Date).getTime(),
            requestTimestamp: n.start,
            cpm: parseFloat(e.cpm) || 0,
            bidder: e.bidderCode,
            adUnitCode: t
        }), e.timeToRespond = e.responseTimestamp - e.requestTimestamp, v.emit(p.EVENTS.BID_ADJUSTMENT, e);
        var i = n.bids && n.bids[0] && n.bids[0].renderer;
        i && (e.renderer = c.Renderer.install({
            url: i.url
        }), e.renderer.setRender(i.render));
        var s, u = (0, a.getPriceBucketString)(e.cpm, f.config.getConfig("customPriceBucket"), f.config.getConfig("currency.granularityMultiplier"));
        e.pbLg = u.low, e.pbMg = u.med, e.pbHg = u.high, e.pbAg = u.auto, e.pbDg = u.dense, e.pbCg = u.custom, e.bidderCode && (e.cpm > 0 || e.dealId) && (s = j(e.bidderCode, e)), e.adserverTargeting = r(e.adserverTargeting || {}, s)
    }

    function I(e) {
        if (e.timeToRespond > pbjs.cbTimeout + pbjs.timeoutBuffer) {
            t.executeCallback(!0)
        }
    }

    function w(e) {
        var n, r;
        v.emit(p.EVENTS.BID_RESPONSE, e), pbjs._bidsReceived.push(e), e.adUnitCode && (function (e) {
            var t = this;
            return pbjs._bidsRequested.map((function (n) {
                return n.bids.filter(o.adUnitsFilter.bind(t, pbjs._adUnitCodes)).filter((function (t) {
                    return t.placementCode === e
                }))
            })).reduce(o.flatten, []).map((function (e) {
                return "indexExchange" === e.bidder ? e.sizes.length : 1
            })).reduce(S, 0) === pbjs._bidsReceived.filter((function (t) {
                return t.adUnitCode === e
            })).length
        })(e.adUnitCode) && (n = e.adUnitCode, r = [n], O(y.byAdUnit, r)), T() && t.executeCallback()
    }

    function j(e, t) {
        var n = {},
            i = pbjs.bidderSettings;
        t && i && C(n, P(), t);
        return e && t && i && i[e] && i[e][p.JSON_MAPPING.ADSERVER_TARGETING] ? (C(n, i[e], t), t.alwaysUseBid = i[e].alwaysUseBid, t.sendStandardTargeting = i[e].sendStandardTargeting) : m[e] && (C(n, m[e], t), t.alwaysUseBid = m[e].alwaysUseBid, t.sendStandardTargeting = m[e].sendStandardTargeting), t.native && (n = r({}, n, (0, s.getNativeTargeting)(t))), n
    }

    function C(e, t, n) {
        var r = t[p.JSON_MAPPING.ADSERVER_TARGETING];
        return n.size = n.getSize(), b._each(r, (function (r) {
            var i = r.key,
                o = r.val;
            if (e[i] && b.logWarn("The key: " + i + " is getting ovewritten"), b.isFn(o)) try {
                o = o(n)
            } catch (e) {
                b.logError("bidmanager", "ERROR", e)
            }(void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) && "hb_deal" !== i || !b.isEmptyStr(o) && null != o ? e[i] = o : b.logInfo("suppressing empty key '" + i + "' from adserver targeting")
        })), e
    }

    function O(e, t) {
        var n = this;
        b.isArray(e) && e.forEach((function (e) {
            var r = t || pbjs._adUnitCodes,
                i = [pbjs._bidsReceived.filter(o.adUnitsFilter.bind(n, r)).reduce(B, {})];
            e.apply(pbjs, i)
        }))
    }

    function B(e, t) {
        return e[t.adUnitCode] || (e[t.adUnitCode] = {
            bids: []
        }), e[t.adUnitCode].bids.push(t), e
    }

    function U(e) {
        var t = e.bidderCode,
            n = e.cpm,
            i = void 0;
        if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" == typeof pbjs.bidderSettings[t].bidCpmAdjustment ? i = pbjs.bidderSettings[t].bidCpmAdjustment : pbjs.bidderSettings[p.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[p.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (i = pbjs.bidderSettings[p.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), i)) try {
            n = i(e.cpm, r({}, e))
        } catch (e) {
            b.logError("Error during bid adjustment", "bidmanager.js", e)
        }
        n >= 0 && (e.cpm = n)
    }

    function P() {
        var e = f.config.getConfig("priceGranularity"),
            t = pbjs.bidderSettings;
        return t[p.JSON_MAPPING.BD_SETTING_STANDARD] || (t[p.JSON_MAPPING.BD_SETTING_STANDARD] = {}), t[p.JSON_MAPPING.BD_SETTING_STANDARD][p.JSON_MAPPING.ADSERVER_TARGETING] || (t[p.JSON_MAPPING.BD_SETTING_STANDARD][p.JSON_MAPPING.ADSERVER_TARGETING] = [{
            key: "hb_bidder",
            val: function (e) {
                return e.bidderCode
            }
        }, {
            key: "hb_adid",
            val: function (e) {
                return e.adId
            }
        }, {
            key: "hb_pb",
            val: function (t) {
                return e === p.GRANULARITY_OPTIONS.AUTO ? t.pbAg : e === p.GRANULARITY_OPTIONS.DENSE ? t.pbDg : e === p.GRANULARITY_OPTIONS.LOW ? t.pbLg : e === p.GRANULARITY_OPTIONS.MEDIUM ? t.pbMg : e === p.GRANULARITY_OPTIONS.HIGH ? t.pbHg : e === p.GRANULARITY_OPTIONS.CUSTOM ? t.pbCg : void 0
            }
        }, {
            key: "hb_size",
            val: function (e) {
                return e.size
            }
        }, {
            key: "hb_deal",
            val: function (e) {
                return e.dealId
            }
        }]), t[p.JSON_MAPPING.BD_SETTING_STANDARD]
    }
    t.getTimedOutBidders = function () {
        return pbjs._bidsRequested.map(h).filter(o.uniques).filter((function (e) {
            return pbjs._bidsReceived.map(E).filter(o.uniques).indexOf(e) < 0
        }))
    }, t.bidsBackAll = function () {
        return T()
    }, t.addBidResponse = (0, l.createHook)("asyncSeries", (function (e, t) {
        var n;
        A(t, e) && (_(t, e), "video" === t.mediaType ? (n = t, f.config.getConfig("usePrebidCache") && !n.videoCacheKey ? (0, d.store)([n], (function (e, t) {
            e ? b.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded.") : (n.videoCacheKey = t[0].uuid, n.vastUrl || (n.vastUrl = (0, d.getCacheUrl)(n.videoCacheKey)), w(n)), I(n)
        })) : (w(n), I(n))) : (w(t), I(t)))
    })), t.getKeyValueTargetingPairs = function () {
        return j.apply(void 0, arguments)
    }, t.registerDefaultBidderSetting = function (e, t) {
        m[e] = t
    }, t.executeCallback = function (e) {
        if (!e && y.timer && clearTimeout(y.timer), !0 !== y.all.called && (O(y.all), y.all.called = !0, e)) {
            var n = t.getTimedOutBidders();
            n.length && v.emit(p.EVENTS.BID_TIMEOUT, n)
        }
        if (y.oneTime) {
            v.emit(g);
            try {
                O([y.oneTime])
            } catch (e) {
                b.logError("Error executing bidsBackHandler", null, e)
            } finally {
                y.oneTime = null, y.timer = !1, pbjs.clearAuction()
            }
        }
    }, t.externalCallbackReset = function () {
        y.all.called = !1
    }, t.addOneTimeCallback = function (e, t) {
        y.oneTime = e, y.timer = t
    }, t.addCallback = function (e, t, n) {
        t.id = e, p.CB.TYPE.ALL_BIDS_BACK === n ? y.all.push(t) : p.CB.TYPE.AD_UNIT_BIDS_BACK === n && y.byAdUnit.push(t)
    }, v.on(p.EVENTS.BID_ADJUSTMENT, (function (e) {
        U(e)
    })), t.adjustBids = function () {
        return U.apply(void 0, arguments)
    }, t.getStandardBidderAdServerTargeting = function () {
        return P()[p.JSON_MAPPING.ADSERVER_TARGETING]
    }
}), (function (e, t, n) {
    "use strict";
    var r = n(0);
    t.createBid = function (e, t) {
        return new function (e, t) {
            var n = t && t.bidId || r.getUniqueIdentifierStr(),
                i = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = (function () {
                switch (i) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            })(), this.adId = n, this.mediaType = "banner", this.getStatusCode = function () {
                return i
            }, this.getSize = function () {
                return this.width + "x" + this.height
            }
        }(e, t)
    }
}), (function (e, t, n) {
    "use strict";
    var r = n(0),
        i = {};

    function o(e, t) {
        var n = document.createElement("script");
        n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function () {
            "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
        } : n.onload = function () {
            t()
        }), n.src = e;
        var r = document.getElementsByTagName("head");
        (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
    }
    t.loadScript = function (e, t, n) {
        e ? n ? i[e] ? t && "function" == typeof t && (i[e].loaded ? t() : i[e].callbacks.push(t)) : (i[e] = {
            loaded: !1,
            callbacks: []
        }, t && "function" == typeof t && i[e].callbacks.push(t), o(e, (function () {
            i[e].loaded = !0;
            try {
                for (var t = 0; t < i[e].callbacks.length; t++) i[e].callbacks[t]()
            } catch (e) {
                r.logError("Error executing callback", "adloader.js:loadScript", e)
            }
        }))) : o(e, t) : r.logError("Error attempting to request empty URL", "adloader.js:loadScript")
    }
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    t.registerBidder = function (e) {
        var t = Array.isArray(e.supportedMediaTypes) ? {
            supportedMediaTypes: e.supportedMediaTypes
        } : void 0;

        function n(e) {
            var n = v(e);
            a.default.registerBidAdapter(n, e.code, t)
        }
        n(e), Array.isArray(e.aliases) && e.aliases.forEach((function (t) {
            n(i({}, e, {
                code: t
            }))
        }))
    }, t.newBidder = v;
    var o = g(n(9)),
        a = g(n(1)),
        s = n(8),
        u = n(7),
        d = g(n(3)),
        c = g(n(4)),
        f = n(2),
        l = n(18),
        p = n(0);

    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var b = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];

    function v(e) {
        return i(new o.default(e.code), {
            getSpec: function () {
                return Object.freeze(e)
            },
            registerSyncs: t,
            callBids: function (o) {
                if (Array.isArray(o.bids)) {
                    var a = {},
                        s = [],
                        l = o.bids.filter(n);
                    if (0 !== l.length) {
                        var g = {};
                        l.forEach((function (e) {
                            g[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode)
                        }));
                        var v = e.buildRequests(l, o);
                        if (v && 0 !== v.length) {
                            Array.isArray(v) || (v = [v]);
                            var y = (0, p.delayExecution)(E, v.length);
                            v.forEach((function (t) {
                                switch (t.method) {
                                    case "GET":
                                        (0, u.ajax)("" + t.url + (function (e) {
                                            if (e) return "?" + ("object" === (void 0 === e ? "undefined" : r(e)) ? (0, p.parseQueryStringParameters)(e) : e);
                                            return ""
                                        })(t.data), {
                                            success: n,
                                            error: o
                                        }, void 0, i({
                                            method: "GET",
                                            withCredentials: !0
                                        }, t.options));
                                        break;
                                    case "POST":
                                        (0, u.ajax)(t.url, {
                                            success: n,
                                            error: o
                                        }, "string" == typeof t.data ? t.data : JSON.stringify(t.data), i({
                                            method: "POST",
                                            contentType: "text/plain",
                                            withCredentials: !0
                                        }, t.options));
                                        break;
                                    default:
                                        (0, p.logWarn)("Skipping invalid request from " + e.code + ". Request type " + t.type + " must be GET or POST"), y()
                                }

                                function n(n, r) {
                                    try {
                                        n = JSON.parse(n)
                                    } catch (e) {}
                                    n = {
                                        body: n,
                                        headers: {
                                            get: r.getResponseHeader.bind(r)
                                        }
                                    }, s.push(n);
                                    var o = void 0;
                                    try {
                                        o = e.interpretResponse(n, t)
                                    } catch (t) {
                                        return (0, p.logError)("Bidder " + e.code + " failed to interpret the server's response. Continuing without bids", null, t), void y()
                                    }

                                    function u(t) {
                                        if (u = t, d = Object.keys(u), b.every((function (e) {
                                                return d.includes(e)
                                            }))) {
                                            var n = g[t.requestId];
                                            if (n) {
                                                var r = i(c.default.createBid(f.STATUS.GOOD, n), t);
                                                o = n.placementCode, s = r, a[o] = !0, h(o, s)
                                            } else(0, p.logWarn)("Bidder " + e.code + " made bid for unknown request ID: " + t.requestId + ". Ignoring.")
                                        } else(0, p.logError)("Bidder " + e.code + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.");
                                        var o, s, u, d
                                    }
                                    o && (o.forEach ? o.forEach(u) : u(o)), y()
                                }

                                function o(t) {
                                    (0, p.logError)("Server call for " + e.code + " failed: " + t + ". Continuing without bids."), y()
                                }
                            }))
                        } else E()
                    } else E()
                }

                function m() {
                    o.bids.map((function (e) {
                        return e.placementCode
                    })).forEach((function (t) {
                        var n;
                        t && !a[t] && h(t, ((n = c.default.createBid(f.STATUS.NO_BID)).code = e.code, n.bidderCode = e.code, n))
                    }))
                }

                function h(e, t) {
                    try {
                        d.default.addBidResponse(e, t)
                    } catch (t) {
                        (0, p.logError)("Error adding bid", e, t)
                    }
                }

                function E() {
                    m(), t(s)
                }
            }
        });

        function t(t) {
            if (e.getUserSyncs) {
                var n = e.getUserSyncs({
                    iframeEnabled: s.config.getConfig("userSync.iframeEnabled"),
                    pixelEnabled: s.config.getConfig("userSync.pixelEnabled")
                }, t);
                n && (Array.isArray(n) || (n = [n]), n.forEach((function (t) {
                    l.userSync.registerSync(t.type, e.code, t.url)
                })))
            }
        }

        function n(t) {
            return !!e.isBidRequestValid(t) || ((0, p.logWarn)("Invalid bid sent to bidder " + e.code + ": " + JSON.stringify(t)), !1)
        }
    }
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    t.setAjaxTimeout = function (e) {
        u = e
    }, t.ajax = function (e, t, n) {
        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        try {
            var c = void 0,
                f = !1,
                l = d.method || (n ? "POST" : "GET"),
                p = "object" === (void 0 === t ? "undefined" : i(t)) ? t : {
                    success: function () {
                        a.logMessage("xhr success")
                    },
                    error: function (e) {
                        a.logError("xhr error", null, e)
                    }
                };
            if ("function" == typeof t && (p.success = t), window.XMLHttpRequest ? void 0 === (c = new window.XMLHttpRequest).responseType && (f = !0) : f = !0, f ? ((c = new window.XDomainRequest).onload = function () {
                    p.success(c.responseText, c)
                }, c.onerror = function () {
                    p.error("error", c)
                }, c.ontimeout = function () {
                    p.error("timeout", c)
                }, c.onprogress = function () {
                    a.logMessage("xhr onprogress")
                }) : c.onreadystatechange = function () {
                    if (c.readyState === s) {
                        var e = c.status;
                        e >= 200 && e < 300 || 304 === e ? p.success(c.responseText, c) : p.error(c.statusText, c)
                    }
                }, "GET" === l && n) {
                var g = (0, o.parse)(e, d);
                r(g.search, n), e = (0, o.format)(g)
            }
            c.open(l, e), c.timeout = u, f || (d.withCredentials && (c.withCredentials = !0), a._each(d.customHeaders, (function (e, t) {
                c.setRequestHeader(t, e)
            })), d.preflight && c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c.setRequestHeader("Content-Type", d.contentType || "text/plain")), c.send("POST" === l && n)
        } catch (e) {
            a.logError("xhr construction", e)
        }
    };
    var o = n(13),
        a = n(0),
        s = 4,
        u = 3e3
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.config = void 0;
    var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    t.newConfig = g;
    var o = n(34);
    var a = n(0),
        s = !1,
        u = 3e3,
        d = window.location.origin,
        c = 100,
        f = !1,
        l = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        },
        p = "*";

    function g() {
        var e = [],
            t = {},
            n = {
                _debug: s,
                get debug() {
                    return pbjs.logging || !1 === pbjs.logging ? pbjs.logging : this._debug
                },
                set debug(e) {
                    this._debug = e
                },
                _bidderTimeout: u,
                get bidderTimeout() {
                    return pbjs.bidderTimeout || this._bidderTimeout
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e
                },
                _publisherDomain: d,
                get publisherDomain() {
                    return pbjs.publisherDomain || this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _cookieSyncDelay: c,
                get cookieSyncDelay() {
                    return pbjs.cookieSyncDelay || this._cookieSyncDelay
                },
                set cookieSyncDelay(e) {
                    this._cookieSyncDelay = e
                },
                _priceGranularity: l.MEDIUM,
                set priceGranularity(e) {
                    (function (e) {
                        if (!e) return a.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                        if ("string" == typeof e) g(e) || a.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                        else if ("object" === (void 0 === e ? "undefined" : i(e)) && !(0, o.isValidPriceConfig)(e)) return a.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                        return !0
                    })(e) && ("string" == typeof e ? this._priceGranularity = g(e) ? e : l.MEDIUM : "object" === (void 0 === e ? "undefined" : i(e)) && (this._customPriceBucket = e, this._priceGranularity = l.CUSTOM, a.logMessage("Using custom price granularity")))
                },
                get priceGranularity() {
                    return this._priceGranularity
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket
                },
                _sendAllBids: f,
                get enableSendAllBids() {
                    return this._sendAllBids
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e
                },
                set bidderSequence(e) {
                    pbjs.setBidderSequence(e)
                },
                set s2sConfig(e) {
                    pbjs.setS2SConfig(e)
                }
            };

        function g(e) {
            return Object.keys(l).find((function (t) {
                return e === l[t]
            }))
        }
        return {
            getConfig: function () {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var t = arguments.length <= 0 ? void 0 : arguments[0];
                    return t ? a.deepAccess(n, t) : n
                }
                return function (t, n) {
                    var r = n;
                    if ("string" != typeof t && (r = t, t = p), "function" == typeof r) return e.push({
                            topic: t,
                            callback: r
                        }),
                        function () {
                            e.splice(e.indexOf(n), 1)
                        };
                    a.logError("listener must be a function")
                }.apply(void 0, arguments)
            },
            setConfig: function (o) {
                if ("object" === (void 0 === o ? "undefined" : i(o))) {
                    var s, u, d = Object.keys(o),
                        c = {};
                    d.forEach((function (e) {
                        var a = o[e];
                        "object" === i(t[e]) && "object" === (void 0 === a ? "undefined" : i(a)) && (a = r({}, t[e], a)), c[e] = n[e] = a
                    })), s = c, u = Object.keys(s), e.filter((function (e) {
                        return u.includes(e.topic)
                    })).forEach((function (e) {
                        var t, n, r;
                        e.callback((t = {}, n = e.topic, r = s[e.topic], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r, t))
                    })), e.filter((function (e) {
                        return e.topic === p
                    })).forEach((function (e) {
                        return e.callback(s)
                    }))
                } else a.logError("setConfig options must be an object")
            },
            setDefaults: function (e) {
                "object" === (void 0 === t ? "undefined" : i(t)) ? (r(t, e), r(n, e)) : a.logError("defaults must be an object")
            }
        }
    }
    t.config = g()
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        var t = e;
        return {
            callBids: function () {},
            setBidderCode: function (e) {
                t = e
            },
            getBidderCode: function () {
                return t
            }
        }
    }
}), , (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.NATIVE = "native", t.VIDEO = "video", t.BANNER = "banner"
}), (function (e, t, n) {
    "use strict";
    var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(0),
        o = n(2),
        a = Array.prototype.slice,
        s = Array.prototype.push,
        u = i._map(o.EVENTS, (function (e) {
            return e
        })),
        d = o.EVENT_ID_PATHS,
        c = [];
    e.exports = (function () {
        var e = {},
            t = {};
        return t.on = function (t, n, r) {
            if (a = t, i.contains(u, a)) {
                var o = e[t] || {
                    que: []
                };
                r ? (o[r] = o[r] || {
                    que: []
                }, o[r].que.push(n)) : o.que.push(n), e[t] = o
            } else i.logError("Wrong event name : " + t + " Valid event names :" + u);
            var a
        }, t.emit = function (t) {
            !(function (t, n) {
                i.logMessage("Emitting event for: " + t);
                var r = n[0] || {},
                    o = r[d[t]],
                    a = e[t] || {
                        que: []
                    },
                    u = i._map(a, (function (e, t) {
                        return t
                    })),
                    f = [];
                c.push({
                    eventType: t,
                    args: r,
                    id: o
                }), o && i.contains(u, o) && s.apply(f, a[o].que), s.apply(f, a.que), i._each(f, (function (e) {
                    if (e) try {
                        e.apply(null, n)
                    } catch (e) {
                        i.logError("Error executing handler:", "events.js", e)
                    }
                }))
            })(t, a.call(arguments, 1))
        }, t.off = function (t, n, r) {
            var o = e[t];
            i.isEmpty(o) || i.isEmpty(o.que) && i.isEmpty(o[r]) || r && (i.isEmpty(o[r]) || i.isEmpty(o[r].que)) || (r ? i._each(o[r].que, (function (e) {
                var t = o[r].que;
                e === n && t.splice(i.indexOf.call(t, e), 1)
            })) : i._each(o.que, (function (e) {
                var t = o.que;
                e === n && t.splice(i.indexOf.call(t, e), 1)
            })), e[t] = o)
        }, t.get = function () {
            return e
        }, t.getEvents = function () {
            var e = [];
            return i._each(c, (function (t) {
                var n = r({}, t);
                e.push(n)
            })), e
        }, t
    })()
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function () {
        return function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function (e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    })();

    function i(e) {
        return e ? e.replace(/^\?/, "").split("&").reduce((function (e, t) {
            var n = t.split("="),
                i = r(n, 2),
                o = i[0],
                a = i[1];
            return /\[\]$/.test(o) ? (e[o = o.replace("[]", "")] = e[o] || [], e[o].push(a)) : e[o] = a || "", e
        }), {}) : {}
    }

    function o(e) {
        return Object.keys(e).map((function (t) {
            return Array.isArray(e[t]) ? e[t].map((function (e) {
                return t + "[]=" + e
            })).join("&") : t + "=" + e[t]
        })).join("&")
    }
    t.parseQS = i, t.formatQS = o, t.parse = function (e, t) {
        var n = document.createElement("a");
        t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
        return {
            protocol: (n.protocol || "").replace(/:$/, ""),
            hostname: n.hostname,
            port: +n.port,
            pathname: n.pathname.replace(/^(?!\/)/, "/"),
            search: i(n.search || ""),
            hash: (n.hash || "").replace(/^#/, ""),
            host: n.host || window.location.host
        }
    }, t.format = function (e) {
        return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + o(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
    }
}), (function (e, t) {
    var n = e.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = n)
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.NATIVE_KEYS = t.nativeAdapters = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.processNativeAdUnitParams = function (e) {
        if (e && e.type && (function (e) {
                if (!e || !Object.keys(s).includes(e)) return (0, i.logError)(e + " nativeParam is not supported"), !1;
                return !0
            })(e.type)) return s[e.type];
        return e
    }, t.nativeBidIsValid = function (e) {
        var t = (0, i.getBidRequest)(e.adId);
        if (!t) return !1;
        if (!(0, i.deepAccess)(e, "native.clickUrl")) return !1;
        var n = t.nativeParams;
        if (!n) return !0;
        var r = Object.keys(n).filter((function (e) {
                return n[e].required
            })),
            o = Object.keys(e.native).filter((function (t) {
                return e.native[t]
            }));
        return r.every((function (e) {
            return o.includes(e)
        }))
    }, t.fireNativeTrackers = function (e, t) {
        var n = void 0;
        n = "click" === e.action ? t.native && t.native.clickTrackers : t.native && t.native.impressionTrackers;
        (n || []).forEach(i.triggerPixel)
    }, t.getNativeTargeting = function (e) {
        var t = {};
        return Object.keys(e.native).forEach((function (n) {
            var i = a[n],
                o = e.native[n];
            "object" === (void 0 === o ? "undefined" : r(o)) && o.url && (o = o.url), i && (t[i] = o)
        })), t
    };
    var i = n(0),
        o = t.nativeAdapters = [],
        a = t.NATIVE_KEYS = {
            title: "hb_native_title",
            body: "hb_native_body",
            sponsoredBy: "hb_native_brand",
            image: "hb_native_image",
            icon: "hb_native_icon",
            clickUrl: "hb_native_linkurl",
            cta: "hb_native_cta"
        },
        s = (t.NATIVE_TARGETING_KEYS = Object.keys(a).map((function (e) {
            return a[e]
        })), {
            image: {
                image: {
                    required: !0
                },
                title: {
                    required: !0
                },
                sponsoredBy: {
                    required: !0
                },
                clickUrl: {
                    required: !0
                },
                body: {
                    required: !1
                },
                icon: {
                    required: !1
                }
            }
        });
    t.nativeAdUnit = function (e) {
        var t = "native" === e.mediaType,
            n = (0, i.deepAccess)(e, "mediaTypes.native");
        return t || n
    };
    var u = t.nativeBidder = function (e) {
        return o.includes(e.bidder)
    };
    t.hasNonNativeBidder = function (e) {
        return e.bids.filter((function (e) {
            return !u(e)
        })).length
    }
}), (function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Renderer = o;
    var r = n(5),
        i = (function (e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }
        })(n(0));

    function o(e) {
        var t = this,
            n = e.url,
            o = e.config,
            a = e.id,
            s = e.callback,
            u = e.loaded;
        this.url = n, this.config = o, this.handlers = {}, this.id = a, this.loaded = u, this.cmd = [], this.push = function (e) {
            "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : i.logError("Commands given to Renderer.push must be wrapped in a function")
        }, this.callback = s || function () {
            t.loaded = !0, t.process()
        }, (0, r.loadScript)(n, this.callback, !0)
    }
    o.install = function (e) {
        return new o({
            url: e.url,
            config: e.config,
            id: e.id,
            callback: e.callback,
            loaded: e.loaded
        })
    }, o.prototype.getConfig = function () {
        return this.config
    }, o.prototype.setRender = function (e) {
        this.render = e
    }, o.prototype.setEventHandlers = function (e) {
        this.handlers = e
    }, o.prototype.handleVideoEvent = function (e) {
        var t = e.id,
            n = e.eventName;
        "function" == typeof this.handlers[n] && this.handlers[n](), i.logMessage("Prebid Renderer event for id " + t + " type " + n)
    }, o.prototype.process = function () {
        for (; this.cmd.length > 0;) try {
            this.cmd.shift().call()
        } catch (e) {
            i.logError("Error processing Renderer command: ", e)
        }
    }
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.userSync = void 0;
    var r = (function () {
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function (e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        })(),
        i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    t.newUserSync = s;
    var o = (function (e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }
        })(n(0)),
        a = n(8);

    function s(e) {
        var t = {},
            n = {
                image: [],
                iframe: []
            },
            s = !1,
            u = {},
            d = e.config;

        function c() {
            if (d.syncEnabled && e.browserSupportsCookies && !s) {
                try {
                    !(function () {
                        if (!d.pixelEnabled) return;
                        o.shuffle(n.image).forEach((function (e) {
                            var t = r(e, 2),
                                n = t[0],
                                i = t[1];
                            o.logMessage("Invoking image pixel user sync for bidder: " + n), o.triggerPixel(i)
                        }))
                    })(), (function () {
                        if (!d.iframeEnabled) return;
                        o.shuffle(n.iframe).forEach((function (e) {
                            var t = r(e, 2),
                                n = t[0],
                                i = t[1];
                            o.logMessage("Invoking iframe user sync for bidder: " + n), o.insertUserSyncIframe(i)
                        }))
                    })()
                } catch (e) {
                    return o.logError("Error firing user syncs", e)
                }
                n = {
                    image: [],
                    iframe: []
                }, s = !0
            }
        }
        return a.config.getConfig("userSync", (function (e) {
            d = i(d, e.userSync)
        })), t.registerSync = function (e, t, r) {
            return d.syncEnabled && o.isArray(n[e]) ? t ? Number(u[t]) >= d.syncsPerBidder ? o.logWarn('Number of user syncs exceeded for "{$bidder}"') : d.enabledBidders && d.enabledBidders.length && d.enabledBidders.indexOf(t) < 0 ? o.logWarn('Bidder "' + t + '" not supported') : (n[e].push([t, r]), (i = u)[a = t] ? i[a] += 1 : i[a] = 1, void(u = i)) : o.logWarn("Bidder is required for registering sync") : o.logWarn('User sync type "' + e + '" not supported');
            var i, a
        }, t.syncUsers = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            if (e) return window.setTimeout(c, Number(e));
            c()
        }, t.triggerUserSyncs = function () {
            d.enableOverride && t.syncUsers()
        }, t
    }
    a.config.setDefaults({
        userSync: {
            syncEnabled: !0,
            pixelEnabled: !0,
            syncsPerBidder: 5,
            syncDelay: 3e3
        }
    });
    var u = !o.isSafariBrowser() && o.cookiesAreEnabled();
    t.userSync = s({
        config: a.config.getConfig("userSync"),
        browserSupportsCookies: u
    })
}), (function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}), (function (e, t) {
    var n = e.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = n)
}), (function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}), (function (e, t, n) {
    var r = n(16),
        i = n(14),
        o = n(28),
        a = n(409),
        s = n(48),
        u = "prototype",
        d = function (e, t, n) {
            var c, f, l, p, g = e & d.F,
                b = e & d.G,
                v = e & d.S,
                y = e & d.P,
                m = e & d.B,
                h = b ? r : v ? r[t] || (r[t] = {}) : (r[t] || {})[u],
                E = b ? i : i[t] || (i[t] = {}),
                S = E[u] || (E[u] = {});
            for (c in b && (n = t), n) l = ((f = !g && h && void 0 !== h[c]) ? h : n)[c], p = m && f ? s(l, r) : y && "function" == typeof l ? s(Function.call, l) : l, h && a(h, c, l, e & d.U), E[c] != l && o(E, c, p), y && S[c] != l && (S[c] = l)
        };
    r.core = i, d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, e.exports = d
}), (function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}), (function (e, t, n) {
    var r = n(19),
        i = n(20),
        o = n(36),
        a = n(103),
        s = "prototype",
        u = function (e, t, n) {
            var d, c, f, l = e & u.F,
                p = e & u.G,
                g = e & u.S,
                b = e & u.P,
                v = e & u.B,
                y = e & u.W,
                m = p ? i : i[t] || (i[t] = {}),
                h = m[s],
                E = p ? r : g ? r[t] : (r[t] || {})[s];
            for (d in p && (n = t), n)(c = !l && E && void 0 !== E[d]) && d in m || (f = c ? E[d] : n[d], m[d] = p && "function" != typeof E[d] ? n[d] : v && c ? o(f, r) : y && E[d] == f ? (function (e) {
                var t = function (t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t[s] = e[s], t
            })(f) : b && "function" == typeof f ? o(Function.call, f) : f, b && ((m.virtual || (m.virtual = {}))[d] = f, e & u.R && h && !h[d] && a(h, d, f)))
        };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
}), (function (e, t, n) {
    e.exports = !n(37)((function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}), (function (e, t) {
    e.exports = function () {}
}), (function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(8),
        o = n(15);

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = n(3),
        u = n(0),
        d = n(2),
        c = t,
        f = [];

    function l(e) {
        return "string" == typeof e ? [e] : u.isArray(e) ? e : pbjs._adUnitCodes || []
    }

    function p() {
        return s.getStandardBidderAdServerTargeting().map((function (e) {
            return e.key
        })).concat(d.TARGETING_KEYS).filter(r.uniques)
    }

    function g(e) {
        return {
            adUnitCode: e,
            cpm: 0,
            adserverTargeting: {},
            timeToRespond: 0
        }
    }
    c.resetPresetTargeting = function (e) {
        if ((0, r.isGptPubadsDefined)()) {
            var t = l(e),
                n = pbjs.adUnits.filter((function (e) {
                    return t.includes(e.code)
                }));
            window.googletag.pubads().getSlots().forEach((function (e) {
                f.forEach((function (t) {
                    n.forEach((function (n) {
                        n.code !== e.getAdUnitPath() && n.code !== e.getSlotElementId() || e.setTargeting(t, null)
                    }))
                }))
            }))
        }
    }, c.getAllTargeting = function (e) {
        var t, n, s, u, b, v, y = l(e),
            m = (u = y, b = c.getWinningBids(u), v = p(), b = b.map((function (e) {
                return a({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter((function (t) {
                    return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === v.indexOf(t)
                })).map((function (t) {
                    return a({}, t.substring(0, 20), [e.adserverTargeting[t]])
                })))
            }))).concat(function (e) {
                var t = p();
                return pbjs._bidsReceived.filter(r.adUnitsFilter.bind(this, e)).map((function (e) {
                    if (e.alwaysUseBid) return a({}, e.adUnitCode, Object.keys(e.adserverTargeting).map((function (n) {
                        if (!(t.indexOf(n) > -1)) return a({}, n.substring(0, 20), [e.adserverTargeting[n]])
                    })).filter((function (e) {
                        return e
                    })))
                })).filter((function (e) {
                    return e
                }))
            }(y)).concat(i.config.getConfig("enableSendAllBids") ? (t = d.TARGETING_KEYS.concat(o.NATIVE_TARGETING_KEYS), n = [], s = (0, r.groupBy)(pbjs._bidsReceived, "adUnitCode"), Object.keys(s).forEach((function (e) {
                var t = (0, r.groupBy)(s[e], "bidderCode");
                Object.keys(t).forEach((function (e) {
                    return n.push(t[e].reduce(r.getHighestCpm, g()))
                }))
            })), n.map((function (e) {
                if (e.adserverTargeting) return a({}, e.adUnitCode, (n = e, t.filter((function (t) {
                    return void 0 !== e.adserverTargeting[t]
                })).map((function (e) {
                    return a({}, (e + "_" + n.bidderCode).substring(0, 20), [n.adserverTargeting[e]])
                }))));
                var n
            })).filter((function (e) {
                return e
            }))) : []);
        return m.map((function (e) {
            Object.keys(e).map((function (t) {
                e[t].map((function (e) {
                    -1 === f.indexOf(Object.keys(e)[0]) && (f = Object.keys(e).concat(f))
                }))
            }))
        })), m
    }, c.setTargeting = function (e) {
        window.googletag.pubads().getSlots().forEach((function (t) {
            e.filter((function (e) {
                return Object.keys(e)[0] === t.getAdUnitPath() || Object.keys(e)[0] === t.getSlotElementId()
            })).forEach((function (e) {
                return e[Object.keys(e)[0]].forEach((function (e) {
                    e[Object.keys(e)[0]].map((function (n) {
                        return u.logMessage("Attempting to set key value for slot: " + t.getSlotElementId() + " key: " + Object.keys(e)[0] + " value: " + n), n
                    })).forEach((function (n) {
                        t.setTargeting(Object.keys(e)[0], n)
                    }))
                }))
            }))
        }))
    }, c.getWinningBids = function (e) {
        var t = l(e);
        return pbjs._bidsReceived.filter((function (e) {
            return t.includes(e.adUnitCode)
        })).filter((function (e) {
            return e.cpm > 0
        })).map((function (e) {
            return e.adUnitCode
        })).filter(r.uniques).map((function (e) {
            return pbjs._bidsReceived.filter((function (t) {
                return t.adUnitCode === e ? t : null
            })).reduce(r.getHighestCpm, g(e))
        }))
    }, c.setTargetingForAst = function () {
        var e = pbjs.getAdserverTargeting();
        Object.keys(e).forEach((function (t) {
            return Object.keys(e[t]).forEach((function (n) {
                if (u.logMessage("Attempting to set targeting for targetId: " + t + " key: " + n + " value: " + e[t][n]), u.isStr(e[t][n]) || u.isArray(e[t][n])) {
                    var r = {};
                    r[n.toUpperCase()] = e[t][n], window.apntag.setKeywords(t, r)
                }
            }))
        }))
    }, c.isApntagDefined = function () {
        if (window.apntag && u.isFn(window.apntag.setKeywords)) return !0
    }
}), (function (e, t, n) {
    var r = n(403),
        i = n(408);
    e.exports = n(29) ? function (e, t, n) {
        return r.f(e, t, i(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}), (function (e, t, n) {
    e.exports = !n(30)((function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}), (function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}), (function (e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}), (function (e, t, n) {
    var r = n(50);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}), (function (e, t, n) {
    var r = n(55)("unscopables"),
        i = Array.prototype;
    null == i[r] && n(28)(i, r, {}), e.exports = function (e) {
        i[r][e] = !0
    }
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = 2,
        o = {
            buckets: [{
                min: 0,
                max: 5,
                increment: .5
            }]
        },
        a = {
            buckets: [{
                min: 0,
                max: 20,
                increment: .1
            }]
        },
        s = {
            buckets: [{
                min: 0,
                max: 20,
                increment: .01
            }]
        },
        u = {
            buckets: [{
                min: 0,
                max: 3,
                increment: .01
            }, {
                min: 3,
                max: 8,
                increment: .05
            }, {
                min: 8,
                max: 20,
                increment: .5
            }]
        },
        d = {
            buckets: [{
                min: 0,
                max: 5,
                increment: .05
            }, {
                min: 5,
                max: 10,
                increment: .1
            }, {
                min: 10,
                max: 20,
                increment: .5
            }]
        };

    function c(e, t, n) {
        var r = "";
        if (!f(t)) return r;
        var o = t.buckets.reduce((function (e, t) {
                return e.max > t.max ? e : t
            }), {
                max: 0
            }),
            a = t.buckets.find((function (t) {
                if (e > o.max * n) {
                    var a = t.precision;
                    void 0 === a && (a = i), r = (t.max * n).toFixed(a)
                } else if (e <= t.max * n && e >= t.min * n) return t
            }));
        return a && (r = (function (e, t, n, r) {
            void 0 === n && (n = i);
            var o = 1 / (t * r);
            return (Math.floor(e * o) / o).toFixed(n)
        })(e, a.increment, a.precision, n)), r
    }

    function f(e) {
        if (r.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
        var t = !0;
        return e.buckets.forEach((function (e) {
            void 0 !== e.min && e.max && e.increment || (t = !1)
        })), t
    }
    t.getPriceBucketString = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = parseFloat(e);
        return isNaN(r) && (r = ""), {
            low: "" === r ? "" : c(e, o, n),
            med: "" === r ? "" : c(e, a, n),
            high: "" === r ? "" : c(e, s, n),
            auto: "" === r ? "" : c(e, d, n),
            dense: "" === r ? "" : c(e, u, n),
            custom: "" === r ? "" : c(e, t, n)
        }
    }, t.isValidPriceConfig = f
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = void 0, t.isValidVideoBid = function (e) {
        var t = (0, i.getBidRequest)(e.adId),
            n = t && (0, i.deepAccess)(t, "mediaTypes.video"),
            r = n && (0, i.deepAccess)(n, "context");
        if (!t || n && r !== a) return o.config.getConfig("usePrebidCache") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, i.logError)("\n        This bid contains only vastXml and will not work when prebid-cache is disabled.\n        Try enabling prebid-cache with pbjs.setConfig({ usePrebidCache: true });\n      "), !1);
        if (r === a) return !(!e.renderer && !t.renderer);
        return !0
    };
    var r = n(1),
        i = n(0),
        o = n(8),
        a = "outstream",
        s = (t.videoAdUnit = function (e) {
            var t = "video" === e.mediaType,
                n = (0, i.deepAccess)(e, "mediaTypes.video");
            return t || n
        }, t.videoBidder = function (e) {
            return r.videoAdapters.includes(e.bidder)
        });
    t.hasNonVideoBidder = function (e) {
        return e.bids.filter((function (e) {
            return !s(e)
        })).length
    }
}), (function (e, t, n) {
    var r = n(102);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}), (function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}), , (function (e, t, n) {
    var r = n(40);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}), (function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}), (function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}), (function (e, t, n) {
    var r = n(43),
        i = Math.min;
    e.exports = function (e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}), (function (e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}), (function (e, t, n) {
    n(147), e.exports = n(20).Array.includes
}), (function (e, t) {
    var n;
    n = (function () {
        return this
    })();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getGlobal = function () {
        return window.pbjs
    }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
}), (function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}), (function (e, t, n) {
    var r = n(410);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}), (function (e, t, n) {
    var r = n(48),
        i = n(32),
        o = n(51),
        a = n(53),
        s = n(411);
    e.exports = function (e, t) {
        var n = 1 == e,
            u = 2 == e,
            d = 3 == e,
            c = 4 == e,
            f = 6 == e,
            l = 5 == e || f,
            p = t || s;
        return function (t, s, g) {
            for (var b, v, y = o(t), m = i(y), h = r(s, g, 3), E = a(m.length), S = 0, T = n ? p(t, E) : u ? p(t, 0) : void 0; E > S; S++)
                if ((l || S in m) && (v = h(b = m[S], S, y), e))
                    if (n) T[S] = v;
                    else if (v) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return b;
                case 6:
                    return S;
                case 2:
                    T.push(b)
            } else if (c) return !1;
            return f ? -1 : d || c ? c : T
        }
    }
}), (function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}), (function (e, t, n) {
    var r = n(52);
    e.exports = function (e) {
        return Object(r(e))
    }
}), (function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}), (function (e, t, n) {
    var r = n(54),
        i = Math.min;
    e.exports = function (e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}), (function (e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}), (function (e, t, n) {
    var r = n(56)("wks"),
        i = n(31),
        o = n(16).Symbol,
        a = "function" == typeof o;
    (e.exports = function (e) {
        return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
    }).store = r
}), (function (e, t, n) {
    var r = n(16),
        i = "__core-js_shared__",
        o = r[i] || (r[i] = {});
    e.exports = function (e) {
        return o[e] || (o[e] = {})
    }
}), (function (e, t, n) {
    var r = n(58),
        i = n(53),
        o = n(418);
    e.exports = function (e) {
        return function (t, n, a) {
            var s, u = r(t),
                d = i(u.length),
                c = o(a, d);
            if (e && n != n) {
                for (; d > c;)
                    if ((s = u[c++]) != s) return !0
            } else
                for (; d > c; c++)
                    if ((e || c in u) && u[c] === n) return e || c || 0;
            return !e && -1
        }
    }
}), (function (e, t, n) {
    var r = n(32),
        i = n(52);
    e.exports = function (e) {
        return r(i(e))
    }
}), , , (function (e, t) {
    e.exports = function e(t) {
        var n = Array.isArray(t) ? [] : {};
        for (var r in t) {
            var i = t[r];
            n[r] = i && "object" == typeof i ? e(i) : i
        }
        return n
    }
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setWindow = t.getScreenWidth = t.mapSizes = void 0;
    var r = (function (e) {
        {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }
    })(n(0));
    var i = void 0;

    function o(e) {
        var t = e || i || window,
            n = t.document;
        return t.innerWidth ? t.innerWidth : n.body.clientWidth ? n.body.clientWidth : n.documentElement.clientWidth ? n.documentElement.clientWidth : 0
    }
    t.mapSizes = function (e) {
        if (t = e.sizeMapping, !(r.isArray(t) && t.length > 0 || (r.logInfo("No size mapping defined"), 0))) return e.sizes;
        var t;
        var n = o();
        if (!n) {
            var i = e.sizeMapping.reduce((function (e, t) {
                return e.minWidth < t.minWidth ? t : e
            }));
            return i.sizes && i.sizes.length ? i.sizes : e.sizes
        }
        var a = "",
            s = e.sizeMapping.find((function (e) {
                return n >= e.minWidth
            }));
        return s && s.sizes && s.sizes.length ? (a = s.sizes, r.logMessage("AdUnit : " + e.code + " resized based on device width to : " + a)) : r.logMessage("AdUnit : " + e.code + " not mapped to any sizes for device width. This request will be suppressed."), a
    }, t.getScreenWidth = o, t.setWindow = function (e) {
        i = e
    }
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.store = function (e, t) {
        var n = {
            puts: e.map(o)
        };
        (0, r.ajax)(i, (a = t, {
            success: function (e) {
                var t = void 0;
                try {
                    t = JSON.parse(e).responses
                } catch (e) {
                    return void a(e, [])
                }
                t ? a(null, t) : a(new Error("The cache server didn't respond with a responses property."), [])
            },
            error: function (e, t) {
                a(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), [])
            }
        }), JSON.stringify(n), {
            contentType: "text/plain",
            withCredentials: !0
        });
        var a
    }, t.getCacheUrl = function (e) {
        return i + "?uuid=" + e
    };
    var r = n(7),
        i = "https://prebid.adnxs.com/pbc/v1/cache";

    function o(e) {
        return {
            type: "xml",
            value: e.vastXml ? e.vastXml : '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + e.vastUrl + "]]></VASTAdTagURI>\n        <Impression></Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
        }
    }
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    t.createHook = function (e, t, n) {
        var a = [{
                fn: t,
                priority: 0
            }],
            s = {
                sync: function () {
                    for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    a.forEach((function (t) {
                        t.fn.apply(e, n)
                    }))
                },
                asyncSeries: function () {
                    for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var o = 0;
                    return a[o].fn.apply(this, n.concat((function t() {
                        for (var n = arguments.length, r = Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                        var u = a[++o];
                        if ("object" === (void 0 === u ? "undefined" : i(u)) && "function" == typeof u.fn) return u.fn.apply(e, r.concat(t))
                    })))
                }
            };
        if (!s[e]) throw "invalid hook type";
        var u = {
            addHook: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                "function" == typeof e && (a.push({
                    fn: e,
                    priority: t
                }), a.sort((function (e, t) {
                    return t.priority - e.priority
                })))
            },
            removeHook: function (e) {
                a = a.filter((function (n) {
                    return n.fn === t || n.fn !== e
                }))
            }
        };
        "string" == typeof n && (o[n] = u);
        return r((function () {
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            if (0 === a.length) return t.apply(this, r);
            return s[e].apply(this, r)
        }), u)
    };
    var o = t.hooks = {}
}), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , (function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}), (function (e, t, n) {
    var r = n(104),
        i = n(109);
    e.exports = n(25) ? function (e, t, n) {
        return r.f(e, t, i(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}), (function (e, t, n) {
    var r = n(105),
        i = n(106),
        o = n(108),
        a = Object.defineProperty;
    t.f = n(25) ? Object.defineProperty : function (e, t, n) {
        if (r(e), t = o(t, !0), r(n), i) try {
            return a(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}), (function (e, t, n) {
    var r = n(21);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}), (function (e, t, n) {
    e.exports = !n(25) && !n(37)((function () {
        return 7 != Object.defineProperty(n(107)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}), (function (e, t, n) {
    var r = n(21),
        i = n(19).document,
        o = r(i) && r(i.createElement);
    e.exports = function (e) {
        return o ? i.createElement(e) : {}
    }
}), (function (e, t, n) {
    var r = n(21);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
        if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
        if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}), (function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , (function (e, t, n) {
    "use strict";
    var r = n(24),
        i = n(148)(!0);
    r(r.P, "Array", {
        includes: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(26)("includes")
}), (function (e, t, n) {
    var r = n(149),
        i = n(42),
        o = n(150);
    e.exports = function (e) {
        return function (t, n, a) {
            var s, u = r(t),
                d = i(u.length),
                c = o(a, d);
            if (e && n != n) {
                for (; d > c;)
                    if ((s = u[c++]) != s) return !0
            } else
                for (; d > c; c++)
                    if ((e || c in u) && u[c] === n) return e || c || 0;
            return !e && -1
        }
    }
}), (function (e, t, n) {
    var r = n(39),
        i = n(41);
    e.exports = function (e) {
        return r(i(e))
    }
}), (function (e, t, n) {
    var r = n(43),
        i = Math.max,
        o = Math.min;
    e.exports = function (e, t) {
        return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
    }
}), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , (function (e, t, n) {
    e.exports = n(399)
}), (function (e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = n(46),
        a = n(0),
        s = n(35),
        u = n(15);
    n(400);
    var d = n(13),
        c = n(428),
        f = n(18),
        l = n(5),
        p = n(7),
        g = n(8);

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var v = (0, o.getGlobal)(),
        y = n(2),
        m = n(0),
        h = n(3),
        E = n(1),
        S = n(4),
        T = n(12),
        A = n(429),
        _ = n(27),
        I = f.userSync.syncUsers,
        w = f.userSync.triggerUserSyncs,
        j = y.EVENTS.BID_WON,
        C = y.EVENTS.SET_TARGETING,
        O = y.EVENTS.ADD_AD_UNITS,
        B = !1,
        U = [],
        P = {
            bidWon: function (e) {
                var t = v._bidsRequested.map((function (e) {
                    return e.bids.map((function (e) {
                        return e.placementCode
                    }))
                })).reduce(a.flatten).filter(a.uniques);
                if (!m.contains(t, e)) return void m.logError('The "' + e + '" placement is not defined.');
                return !0
            }
        };

    function N(e, t, n) {
        e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
    }

    function R(e) {
        e.forEach((function (e) {
            if (void 0 === e.called) try {
                e.call(), e.called = !0
            } catch (e) {
                m.logError("Error processing command :", "prebid.js", e)
            }
        }))
    }
    v._bidsRequested = [], v._bidsReceived = [], v._adUnitCodes = [], v._winningBids = [], v._adsReceived = [], v.bidderSettings = v.bidderSettings || {}, v.bidderTimeout = v.bidderTimeout, v.cbTimeout = v.cbTimeout || 200, v.timeoutBuffer = 200, v.logging = v.logging, v.publisherDomain = v.publisherDomain, v.libLoaded = !0, v.version = "v0.34.13", m.logInfo("Prebid.js v0.34.13 loaded"), v.adUnits = v.adUnits || [], v.triggerUserSyncs = w, v.getAdserverTargetingForAdUnitCodeStr = function (e) {
        if (m.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
            var t = v.getAdserverTargetingForAdUnitCode(e);
            return m.transformAdServerTargetingObj(t)
        }
        m.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
    }, v.getAdserverTargetingForAdUnitCode = function (e) {
        return v.getAdserverTargeting(e)[e]
    }, v.getAdserverTargeting = function (e) {
        return m.logInfo("Invoking pbjs.getAdserverTargeting", arguments), _.getAllTargeting(e).map((function (e) {
            return b({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function (e) {
                return b({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
            })).reduce((function (e, t) {
                return i(t, e)
            }), {}))
        })).reduce((function (e, t) {
            var n = Object.keys(t)[0];
            return e[n] = i({}, e[n], t[n]), e
        }), {})
    }, v.getBidResponses = function () {
        m.logInfo("Invoking pbjs.getBidResponses", arguments);
        var e = v._bidsReceived.filter(a.adUnitsFilter.bind(this, v._adUnitCodes)),
            t = e && e.length && e[e.length - 1].requestId;
        return e.map((function (e) {
            return e.adUnitCode
        })).filter(a.uniques).map((function (n) {
            return e.filter((function (e) {
                return e.requestId === t && e.adUnitCode === n
            }))
        })).filter((function (e) {
            return e && e[0] && e[0].adUnitCode
        })).map((function (e) {
            return b({}, e[0].adUnitCode, {
                bids: e
            })
        })).reduce((function (e, t) {
            return i(e, t)
        }), {})
    }, v.getBidResponsesForAdUnitCode = function (e) {
        return {
            bids: v._bidsReceived.filter((function (t) {
                return t.adUnitCode === e
            }))
        }
    }, v.setTargetingForGPTAsync = function (e) {
        if (m.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), (0, a.isGptPubadsDefined)()) {
            var t = _.getAllTargeting(e);
            _.resetPresetTargeting(e), _.setTargeting(t), T.emit(C)
        } else m.logError("window.googletag is not defined on the page")
    }, v.setTargetingForAst = function () {
        m.logInfo("Invoking pbjs.setTargetingForAn", arguments), _.isApntagDefined() ? (_.setTargetingForAst(), T.emit(C)) : m.logError("window.apntag is not defined on the page")
    }, v.allBidsAvailable = function () {
        return m.logWarn("pbjs.allBidsAvailable will be removed in Prebid 1.0. Alternative solution is in progress. See https://github.com/prebid/Prebid.js/issues/1087 for more details."), m.logInfo("Invoking pbjs.allBidsAvailable", arguments), h.bidsBackAll()
    }, v.renderAd = function (e, t) {
        if (m.logInfo("Invoking pbjs.renderAd", arguments), m.logMessage("Calling renderAd with adId :" + t), e && t) try {
            var n = v._bidsReceived.find((function (e) {
                return e.adId === t
            }));
            if (n) {
                n.ad = m.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = m.replaceAuctionPrice(n.adUrl, n.cpm), v._winningBids.push(n), T.emit(j, n);
                var r = n.height,
                    i = n.width,
                    o = n.ad,
                    a = n.mediaType,
                    s = n.adUrl,
                    u = n.renderer;
                if (u && u.url) u.render(n);
                else if (e === document && !m.inIframe() || "video" === a) m.logError("Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.");
                else if (o) e.write(o), e.close(), N(e, i, r);
                else if (s) {
                    var d = m.createInvisibleIframe();
                    d.height = r, d.width = i, d.style.display = "inline", d.style.overflow = "hidden", d.src = s, m.insertElement(d, e, "body"), N(e, i, r)
                } else m.logError("Error trying to write ad. No ad for bid response id: " + t)
            } else m.logError("Error trying to write ad. Cannot find ad by given id : " + t)
        } catch (e) {
            m.logError("Error trying to write ad Id :" + t + " to the page:" + e.message)
        } else m.logError("Error trying to write ad Id :" + t + " to the page. Missing document or adId")
    }, v.removeAdUnit = function (e) {
        if (m.logInfo("Invoking pbjs.removeAdUnit", arguments), e)
            for (var t = 0; t < v.adUnits.length; t++) v.adUnits[t].code === e && v.adUnits.splice(t, 1)
    }, v.clearAuction = function () {
        B = !1;
        var e = g.config.getConfig("userSync") || {};
        e.enableOverride || I(e.syncDelay), m.logMessage("Prebid auction cleared"), U.length && U.shift()()
    }, v.requestBids = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.bidsBackHandler,
            n = e.timeout,
            r = e.adUnits,
            i = e.adUnitCodes;
        T.emit("requestBids");
        var o = v.cbTimeout = n || g.config.getConfig("bidderTimeout");
        if (r = r || v.adUnits, m.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter((function (e) {
                return i.includes(e.code)
            })) : i = r && r.map((function (e) {
                return e.code
            })), r.filter(s.videoAdUnit).filter(s.hasNonVideoBidder).forEach((function (e) {
                var t = e.bids.filter((function (e) {
                    return !(0, s.videoBidder)(e)
                })).map((function (e) {
                    return e.bidder
                }));
                m.logWarn(m.unsupportedBidderMessage(e, t)), e.bids = e.bids.filter(s.videoBidder)
            })), r.filter(u.nativeAdUnit).filter(u.hasNonNativeBidder).forEach((function (e) {
                var t = e.bids.filter((function (e) {
                    return !(0, u.nativeBidder)(e)
                })).map((function (e) {
                    return e.bidder
                }));
                m.logWarn(m.unsupportedBidderMessage(e, t)), e.bids = e.bids.filter(u.nativeBidder)
            })), B) U.push((function () {
            v.requestBids({
                bidsBackHandler: t,
                timeout: o,
                adUnits: r,
                adUnitCodes: i
            })
        }));
        else {
            if (B = !0, v._adUnitCodes = i, h.externalCallbackReset(), v._bidsRequested = [], v._bidsReceived = v._bidsReceived.filter((function (e) {
                    return !v._adUnitCodes.includes(e.adUnitCode)
                })), !r || 0 === r.length) return m.logMessage("No adUnits configured. No bids requested."), "function" == typeof t && h.addOneTimeCallback(t, !1), void h.executeCallback();
            var a = h.executeCallback.bind(h, !0),
                d = setTimeout(a, o);
            (0, p.setAjaxTimeout)(o), "function" == typeof t && h.addOneTimeCallback(t, d), E.callBids({
                adUnits: r,
                adUnitCodes: i,
                cbTimeout: o
            }), 0 === v._bidsRequested.length && h.executeCallback()
        }
    }, v.addAdUnits = function (e) {
        m.logInfo("Invoking pbjs.addAdUnits", arguments), m.isArray(e) ? (e.forEach((function (e) {
            return e.transactionId = m.generateUUID()
        })), v.adUnits.push.apply(v.adUnits, e)) : "object" === (void 0 === e ? "undefined" : r(e)) && (e.transactionId = m.generateUUID(), v.adUnits.push(e)), T.emit(O)
    }, v.onEvent = function (e, t, n) {
        m.logInfo("Invoking pbjs.onEvent", arguments), m.isFn(t) ? !n || P[e].call(null, n) ? T.on(e, t, n) : m.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : m.logError('The event handler provided is not a function and was not set on event "' + e + '".')
    }, v.offEvent = function (e, t, n) {
        m.logInfo("Invoking pbjs.offEvent", arguments), n && !P[e].call(null, n) || T.off(e, t, n)
    }, v.addCallback = function (e, t) {
        m.logWarn("pbjs.addCallback will be removed in Prebid 1.0. Please use onEvent instead"), m.logInfo("Invoking pbjs.addCallback", arguments);
        var n = null;
        return e && t && "function" == typeof t ? (n = m.getUniqueIdentifierStr, h.addCallback(n, t, e), n) : (m.logError("error registering callback. Check method signature"), n)
    }, v.removeCallback = function () {
        return m.logWarn("pbjs.removeCallback will be removed in Prebid 1.0. Please use offEvent instead."), null
    }, v.registerBidAdapter = function (e, t) {
        m.logInfo("Invoking pbjs.registerBidAdapter", arguments);
        try {
            E.registerBidAdapter(e(), t)
        } catch (e) {
            m.logError("Error registering bidder adapter : " + e.message)
        }
    }, v.registerAnalyticsAdapter = function (e) {
        m.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
        try {
            E.registerAnalyticsAdapter(e)
        } catch (e) {
            m.logError("Error registering analytics adapter : " + e.message)
        }
    }, v.bidsAvailableForAdapter = function (e) {
        m.logInfo("Invoking pbjs.bidsAvailableForAdapter", arguments), v._bidsRequested.find((function (t) {
            return t.bidderCode === e
        })).bids.map((function (t) {
            return i(t, S.createBid(1), {
                bidderCode: e,
                adUnitCode: t.placementCode
            })
        })).map((function (e) {
            return v._bidsReceived.push(e)
        }))
    }, v.createBid = function (e) {
        return m.logInfo("Invoking pbjs.createBid", arguments), S.createBid(e)
    }, v.addBidResponse = function (e, t) {
        m.logWarn("pbjs.addBidResponse will be removed in Prebid 1.0. Each bidder will be passed a reference to addBidResponse function in callBids as an argument. See https://github.com/prebid/Prebid.js/issues/1087 for more details."), m.logInfo("Invoking pbjs.addBidResponse", arguments), h.addBidResponse(e, t)
    }, v.loadScript = function (e, t, n) {
        m.logInfo("Invoking pbjs.loadScript", arguments), (0, l.loadScript)(e, t, n)
    }, v.enableAnalytics = function (e) {
        e && !m.isEmpty(e) ? (m.logInfo("Invoking pbjs.enableAnalytics for: ", e), E.enableAnalytics(e)) : m.logError("pbjs.enableAnalytics should be called with option {}")
    }, v.aliasBidder = function (e, t) {
        m.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? E.aliasBidAdapter(e, t) : m.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
    }, v.setPriceGranularity = function (e) {
        m.logWarn("pbjs.setPriceGranularity will be removed in Prebid 1.0. Use pbjs.setConfig({ priceGranularity: <granularity> }) instead."), m.logInfo("Invoking pbjs.setPriceGranularity", arguments), g.config.setConfig({
            priceGranularity: e
        })
    }, v.enableSendAllBids = function () {
        g.config.setConfig({
            enableSendAllBids: !0
        })
    }, v.getAllWinningBids = function () {
        return v._winningBids
    }, v.buildMasterVideoTagFromAdserverTag = function (e, t) {
        m.logWarn("pbjs.buildMasterVideoTagFromAdserverTag will be removed in Prebid 1.0. Include the dfpVideoSupport module in your build, and use the pbjs.adservers.dfp.buildVideoAdUrl function instead"), m.logInfo("Invoking pbjs.buildMasterVideoTagFromAdserverTag", arguments);
        var n = (0, d.parse)(e);
        if (0 === v._bidsReceived.length) return e;
        if ("dfp" === t.adserver.toLowerCase()) {
            var r = A.dfpAdserver(t, n);
            return r.verifyAdserverTag() || m.logError("Invalid adserverTag, required google params are missing in query string"), r.appendQueryParams(), (0, d.format)(r.urlComponents)
        }
        m.logError("Only DFP adserver is supported")
    }, v.setBidderSequence = E.setBidderSequence, v.getHighestCpmBids = function (e) {
        return _.getWinningBids(e)
    }, v.setS2SConfig = function (e) {
        if (m.contains(Object.keys(e), "accountId"))
            if (m.contains(Object.keys(e), "bidders")) {
                var t = i({
                    enabled: !1,
                    endpoint: y.S2S.DEFAULT_ENDPOINT,
                    timeout: 1e3,
                    maxBids: 1,
                    adapter: y.S2S.ADAPTER,
                    syncEndpoint: y.S2S.SYNC_ENDPOINT,
                    cookieSet: !0,
                    bidders: []
                }, e);
                E.setS2SConfig(t)
            } else m.logError("bidders missing in Server to Server config");
        else m.logError("accountId missing in Server to Server config")
    }, v.getConfig = g.config.getConfig, v.setConfig = g.config.setConfig, v.que.push((function () {
        return (0, c.listenMessagesFromCreative)()
    })), v.cmd.push = function (e) {
        if ("function" == typeof e) try {
            e.call()
        } catch (e) {
            m.logError("Error processing command :", e.message, e.stack)
        } else m.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
    }, v.que.push = v.cmd.push, v.processQueue = function () {
        R(v.que), R(v.cmd)
    }
}), (function (e, t, n) {
    "use strict";
    n(401), n(414), n(416), n(419), Number.isInteger = Number.isInteger || function (e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }
}), (function (e, t, n) {
    n(402), e.exports = n(14).Array.find
}), (function (e, t, n) {
    "use strict";
    var r = n(22),
        i = n(49)(5),
        o = "find",
        a = !0;
    o in [] && Array(1)[o]((function () {
        a = !1
    })), r(r.P + r.F * a, "Array", {
        find: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(33)(o)
}), (function (e, t, n) {
    var r = n(404),
        i = n(405),
        o = n(407),
        a = Object.defineProperty;
    t.f = n(29) ? Object.defineProperty : function (e, t, n) {
        if (r(e), t = o(t, !0), r(n), i) try {
            return a(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}), (function (e, t, n) {
    var r = n(23);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}), (function (e, t, n) {
    e.exports = !n(29) && !n(30)((function () {
        return 7 != Object.defineProperty(n(406)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}), (function (e, t, n) {
    var r = n(23),
        i = n(16).document,
        o = r(i) && r(i.createElement);
    e.exports = function (e) {
        return o ? i.createElement(e) : {}
    }
}), (function (e, t, n) {
    var r = n(23);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
        if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
        if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}), (function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}), (function (e, t, n) {
    var r = n(16),
        i = n(28),
        o = n(47),
        a = n(31)("src"),
        s = "toString",
        u = Function[s],
        d = ("" + u).split(s);
    n(14).inspectSource = function (e) {
        return u.call(e)
    }, (e.exports = function (e, t, n, s) {
        var u = "function" == typeof n;
        u && (o(n, "name") || i(n, "name", t)), e[t] !== n && (u && (o(n, a) || i(n, a, e[t] ? "" + e[t] : d.join(String(t)))), e === r ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
    })(Function.prototype, s, (function () {
        return "function" == typeof this && this[a] || u.call(this)
    }))
}), (function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}), (function (e, t, n) {
    var r = n(412);
    e.exports = function (e, t) {
        return new(r(e))(t)
    }
}), (function (e, t, n) {
    var r = n(23),
        i = n(413),
        o = n(55)("species");
    e.exports = function (e) {
        var t;
        return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
    }
}), (function (e, t, n) {
    var r = n(50);
    e.exports = Array.isArray || function (e) {
        return "Array" == r(e)
    }
}), (function (e, t, n) {
    n(415), e.exports = n(14).Array.findIndex
}), (function (e, t, n) {
    "use strict";
    var r = n(22),
        i = n(49)(6),
        o = "findIndex",
        a = !0;
    o in [] && Array(1)[o]((function () {
        a = !1
    })), r(r.P + r.F * a, "Array", {
        findIndex: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(33)(o)
}), (function (e, t, n) {
    n(417), e.exports = n(14).Array.includes
}), (function (e, t, n) {
    "use strict";
    var r = n(22),
        i = n(57)(!0);
    r(r.P, "Array", {
        includes: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(33)("includes")
}), (function (e, t, n) {
    var r = n(54),
        i = Math.max,
        o = Math.min;
    e.exports = function (e, t) {
        return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
    }
}), (function (e, t, n) {
    n(420), e.exports = n(14).Object.assign
}), (function (e, t, n) {
    var r = n(22);
    r(r.S + r.F, "Object", {
        assign: n(421)
    })
}), (function (e, t, n) {
    "use strict";
    var r = n(422),
        i = n(426),
        o = n(427),
        a = n(51),
        s = n(32),
        u = Object.assign;
    e.exports = !u || n(30)((function () {
        var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach((function (e) {
            t[e] = e
        })), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
    })) ? function (e, t) {
        for (var n = a(e), u = arguments.length, d = 1, c = i.f, f = o.f; u > d;)
            for (var l, p = s(arguments[d++]), g = c ? r(p).concat(c(p)) : r(p), b = g.length, v = 0; b > v;) f.call(p, l = g[v++]) && (n[l] = p[l]);
        return n
    } : u
}), (function (e, t, n) {
    var r = n(423),
        i = n(425);
    e.exports = Object.keys || function (e) {
        return r(e, i)
    }
}), (function (e, t, n) {
    var r = n(47),
        i = n(58),
        o = n(57)(!1),
        a = n(424)("IE_PROTO");
    e.exports = function (e, t) {
        var n, s = i(e),
            u = 0,
            d = [];
        for (n in s) n != a && r(s, n) && d.push(n);
        for (; t.length > u;) r(s, n = t[u++]) && (~o(d, n) || d.push(n));
        return d
    }
}), (function (e, t, n) {
    var r = n(56)("keys"),
        i = n(31);
    e.exports = function (e) {
        return r[e] || (r[e] = i(e))
    }
}), (function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}), (function (e, t) {
    t.f = Object.getOwnPropertySymbols
}), (function (e, t) {
    t.f = {}.propertyIsEnumerable
}), (function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.listenMessagesFromCreative = function () {
        addEventListener("message", u, !1)
    };
    var r, i = n(12),
        o = (r = i) && r.__esModule ? r : {
            default: r
        },
        a = n(15);
    var s = n(2).EVENTS.BID_WON;

    function u(e) {
        var t, n, r, i, u, d, c, f, l, p, g, b, v, y = e.message ? "message" : "data",
            m = {};
        try {
            m = JSON.parse(e[y])
        } catch (e) {
            return
        }
        if (m.adId) {
            var h = pbjs._bidsReceived.find((function (e) {
                return e.adId === m.adId
            }));
            "Prebid Request" === m.message && (t = h, n = m.adServerDomain, r = e.source, i = t.adId, u = t.ad, d = t.adUrl, c = t.width, f = t.height, i && (p = (l = t).adUnitCode, g = l.width, b = l.height, (v = document.getElementById(window.googletag.pubads().getSlots().find((function (e) {
                return e.getAdUnitPath() === p || e.getSlotElementId() === p
            })).getSlotElementId()).querySelector("iframe")).width = "" + g, v.height = "" + b, r.postMessage(JSON.stringify({
                message: "Prebid Response",
                ad: u,
                adUrl: d,
                adId: i,
                width: c,
                height: f
            }), n)), pbjs._winningBids.push(h), o.default.emit(s, h)), "Prebid Native" === m.message && ((0, a.fireNativeTrackers)(m, h), pbjs._winningBids.push(h), o.default.emit(s, h))
        }
    }
}), (function (e, t, n) {
    "use strict";
    var r = n(13),
        i = n(27);
    t.dfpAdserver = function (e, t) {
        var n = new function (e) {
            this.name = e.adserver, this.code = e.code, this.getWinningBidByCode = function () {
                return (0, i.getWinningBids)(this.code)[0]
            }
        }(e);
        n.urlComponents = t;
        var o = {
                env: "vp",
                gdfp_req: "1",
                impl: "s",
                unviewed_position_start: "1"
            },
            a = ["output", "iu", "sz", "url", "correlator", "description_url", "hl"];
        return n.appendQueryParams = function () {
            var e, t = n.getWinningBidByCode();
            t && (this.urlComponents.search.description_url = encodeURIComponent(t.vastUrl), this.urlComponents.search.cust_params = (e = t.adserverTargeting, encodeURIComponent((0, r.formatQS)(e))), this.urlComponents.search.correlator = Date.now())
        }, n.verifyAdserverTag = function () {
            for (var e in o)
                if (!this.urlComponents.search.hasOwnProperty(e) || this.urlComponents.search[e] !== o[e]) return !1;
            for (var t in a)
                if (!this.urlComponents.search.hasOwnProperty(a[t])) return !1;
            return !0
        }, n
    }
})]);
pbjsChunk([49], {
    145: function (a, e, t) {
        t(146), a.exports = t(151)
    },
    146: function (a, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.spec = void 0;
        var n, r = (function () {
                return function (a, e) {
                    if (Array.isArray(a)) return a;
                    if (Symbol.iterator in Object(a)) return (function (a, e) {
                        var t = [],
                            n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, d = a[Symbol.iterator](); !(n = (o = d.next()).done) && (t.push(o.value), !e || t.length !== e); n = !0);
                        } catch (a) {
                            r = !0, i = a
                        } finally {
                            try {
                                !n && d.return && d.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        return t
                    })(a, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            })(),
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                return typeof a
            } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            o = t(6),
            d = t(8),
            c = t(13),
            s = t(0),
            u = t(44),
            f = (n = u) && n.__esModule ? n : {
                default: n
            };
        var m = function (a) {
                return Array.isArray(a) && 2 === a.length ? a[0] + "x" + a[1] : a
            },
            p = function (a) {
                return (0, f.default)(["300x250", "320x50"], a)
            },
            l = function (a) {
                return (0, f.default)(["video", "native"], a)
            },
            b = function (a) {
                return "video" === a
            },
            h = function (a) {
                return "fullwidth" === a
            },
            v = function () {
                return encodeURIComponent((0, s.getTopWindowUrl)())
            },
            y = e.spec = {
                code: "audienceNetwork",
                supportedMediaTypes: ["video"],
                isBidRequestValid: function (a) {
                    return "object" === i(a.params) && "string" == typeof a.params.placementId && a.params.placementId.length > 0 && Array.isArray(a.sizes) && a.sizes.length > 0 && (!h(a.params.format) || a.sizes.map(m).some((function (a) {
                        return "300x250" === a
                    }))) && (l(a.params.format) || a.sizes.map(m).some(p))
                },
                buildRequests: function (a) {
                    var e = [],
                        t = [],
                        n = [],
                        i = [],
                        o = [];
                    a.forEach((function (a) {
                        return a.sizes.map(m).filter((function (e) {
                            return t = e, n = a.params.format, h(n) && "300x250" === m(t) || l(n) || p(m(t));
                            var t, n
                        })).slice(0, 1).forEach((function (r) {
                            var d;
                            e.push(a.params.placementId), t.push(a.params.format || r), n.push(r), i.push((d = a.params.format, b(d) ? "" : "5.5.web")), o.push(a.bidId)
                        }))
                    }));
                    var d = Boolean(window && window.location && "string" == typeof window.location.search && -1 !== window.location.search.indexOf("anhb_testmode")).toString(),
                        s = v(),
                        u = {
                            placementids: e,
                            adformats: t,
                            testmode: d,
                            pageurl: s,
                            sdk: i
                        },
                        f = t.findIndex(b);
                    if (-1 !== f) {
                        var y = n[f].split("x").map(Number),
                            g = r(y, 2);
                        u.playerwidth = g[0], u.playerheight = g[1]
                    }
                    var w = (0, c.formatQS)(u);
                    return [{
                        adformats: t,
                        data: w,
                        method: "GET",
                        requestIds: o,
                        sizes: n,
                        url: "https://an.facebook.com/v2/placementbid.json"
                    }]
                },
                interpretResponse: function (a, e) {
                    var t = a.body,
                        n = e.adformats,
                        i = e.requestIds,
                        o = e.sizes,
                        c = Number(d.config.getConfig().bidderTimeout);
                    return t.errors && t.errors.length ? [] : Object.keys(t.bids).map((function (a) {
                        return t.bids[a]
                    })).reduce((function (a, e) {
                        return a.concat(e)
                    }), []).map((function (a, e) {
                        var t, d, s = a.bid_id,
                            u = a.placement_id,
                            f = a.bid_price_cents,
                            p = n[e],
                            l = m(o[e]).split("x").map(Number),
                            h = r(l, 2),
                            y = h[0],
                            g = h[1],
                            w = "<html><head>" + ("native" === (d = p) ? '<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}<\/script>' : "") + "</head><body><div style=\"display:none;position:relative;\">\n<script type='text/javascript'>var data = {placementid:'" + (t = u) + "',format:'" + d + "',bidid:'" + s + "',onAdLoaded:function(e){console.log('Audience Network [" + t + "] ad loaded');e.style.display = 'block';},onAdError:function(c,m){console.log('Audience Network [" + t + "] error (' + c + ') ' + m);}};\n(function(a,b,c){var d='https://www.facebook.com',e='https://connect.facebook.net/en_US/fbadnw55.js',f={iframeLoaded:true,xhrLoaded:true},g=a.data,h=function(){if(Date.now){return Date.now();}else return +new Date();},i=function(aa){var ba=d+'/audience_network/client_event',ca={cb:h(),event_name:'ADNW_ADERROR',ad_pivot_type:'audience_network_mobile_web',sdk_version:'5.5.web',app_id:g.placementid.split('_')[0],publisher_id:g.placementid.split('_')[1],error_message:aa},da=[];for(var ea in ca)da.push(encodeURIComponent(ea)+'='+encodeURIComponent(ca[ea]));var fa=ba+'?'+da.join('&'),ga=new XMLHttpRequest();ga.open('GET',fa,true);ga.send();if(g.onAdError)g.onAdError('1000','Internal error.');},j=function(){if(b.currentScript){return b.currentScript;}else{var aa=b.getElementsByTagName('script');return aa[aa.length-1];}},k=function(aa){try{return aa.document.referrer;}catch(ba){}return '';},l=function(){var aa=a,ba=[aa];try{while(aa!==aa.parent&&aa.parent.document)ba.push(aa=aa.parent);}catch(ca){}return ba.reverse();},m=function(){var aa=l();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba],da=ca.ADNW||{};ca.ADNW=da;if(!ca.ADNW)continue;return da.v55=da.v55||{ads:[],window:ca};}throw new Error('no_writable_global');},n=function(aa){var ba=aa.indexOf('/',aa.indexOf('://')+3);if(ba===-1)return aa;return aa.substring(0,ba);},o=function(aa){return aa.location.href||k(aa);},p=function(aa){if(aa.sdkLoaded)return;var ba=aa.window.document,ca=ba.createElement('iframe');ca.name='fbadnw';ca.style.display='none';ba.body.appendChild(ca);var da=ca.contentDocument.createElement('script');da.src=e;da.async=true;ca.contentDocument.body.appendChild(da);aa.sdkLoaded=true;},q=function(aa){var ba=/^https?:\\/\\/www\\.google(\\.com?)?\\.\\w{2,3}$/;return !!aa.match(ba);},r=function(aa){return !!aa.match(/cdn\\.ampproject\\.org$/);},s=function(){var aa=c.ancestorOrigins||[],ba=aa[aa.length-1]||c.origin,ca=aa[aa.length-2]||c.origin;if(q(ba)&&r(ca)){return n(ca);}else return n(ba);},t=function(aa){try{return JSON.parse(aa);}catch(ba){i(ba.message);throw ba;}},u=function(aa,ba,ca){if(!aa.iframe){var da=ca.createElement('iframe');da.src=d+'/audiencenetwork/iframe/';da.style.display='none';ca.body.appendChild(da);aa.iframe=da;aa.iframeAppendedTime=h();aa.iframeData={};}ba.iframe=aa.iframe;ba.iframeData=aa.iframeData;ba.tagJsIframeAppendedTime=aa.iframeAppendedTime||0;},v=function(aa){var ba=d+'/audiencenetwork/xhr/?sdk=5.5.web';for(var ca in aa)if(typeof aa[ca]!=='function')ba+='&'+ca+'='+encodeURIComponent(aa[ca]);var da=new XMLHttpRequest();da.open('GET',ba,true);da.withCredentials=true;da.onreadystatechange=function(){if(da.readyState===4){var ea=t(da.response);aa.events.push({name:'xhrLoaded',source:aa.iframe.contentWindow,data:ea,postMessageTimestamp:h(),receivedTimestamp:h()});}};da.send();},w=function(aa,ba){var ca=d+'/audiencenetwork/xhriframe/?sdk=5.5.web';for(var da in ba)if(typeof ba[da]!=='function')ca+='&'+da+'='+encodeURIComponent(ba[da]);var ea=b.createElement('iframe');ea.src=ca;ea.style.display='none';b.body.appendChild(ea);ba.iframe=ea;ba.iframeData={};ba.tagJsIframeAppendedTime=h();},x=function(aa){var ba=function(event){try{var da=event.data;if(da.name in f)aa.events.push({name:da.name,source:event.source,data:da.data});}catch(ea){}},ca=aa.iframe.contentWindow.parent;ca.addEventListener('message',ba,false);},y=function(aa){if(aa.context&&aa.context.sourceUrl)return true;try{return !!JSON.parse(decodeURI(aa.name)).ampcontextVersion;}catch(ba){return false;}},z=function(aa){var ba=h(),ca=l()[0],da=j().parentElement,ea=ca!=a.top,fa=ca.$sf&&ca.$sf.ext,ga=o(ca),ha=m();p(ha);var ia={amp:y(ca),events:[],tagJsInitTime:ba,rootElement:da,iframe:null,tagJsIframeAppendedTime:ha.iframeAppendedTime||0,url:ga,domain:s(),channel:n(o(ca)),width:screen.width,height:screen.height,pixelratio:a.devicePixelRatio,placementindex:ha.ads.length,crossdomain:ea,safeframe:!!fa,placementid:g.placementid,format:g.format||'300x250',testmode:!!g.testmode,onAdLoaded:g.onAdLoaded,onAdError:g.onAdError};if(g.bidid)ia.bidid=g.bidid;if(ea){w(ha,ia);}else{u(ha,ia,ca.document);v(ia);}; x(ia);ia.rootElement.dataset.placementid=ia.placementid;ha.ads.push(ia);};try{z();}catch(aa){i(aa.message||aa);throw aa;}})(window,document,location);\n<\/script>\n" + ("native" === d ? '<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>' : "") + "</div></body></html>",
                            A = {
                                requestId: i[e],
                                cpm: f / 100,
                                width: y,
                                height: g,
                                ad: w,
                                ttl: c,
                                creativeId: u,
                                netRevenue: !0,
                                currency: "USD",
                                hb_bidder: "fan",
                                fb_bidid: s,
                                fb_format: p,
                                fb_placementid: u
                            };
                        if (b(p)) {
                            var _ = v();
                            A.mediaType = "video", A.vastUrl = "https://an.facebook.com/v1/instream/vast.xml?placementid=" + u + "&pageurl=" + _ + "&playerwidth=" + y + "&playerheight=" + g + "&bidid=" + s
                        }
                        return A
                    }))
                }
            };
        (0, o.registerBidder)(y)
    },
    151: function (a, e) {}
}, [145]);
pbjs.processQueue();
