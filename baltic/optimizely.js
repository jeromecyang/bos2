!(function(e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var r = n[i] = {
      exports: {},
      id: i,
      loaded: !1
    };
    return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
  }
  var n = {};
  return t.m = e, t.c = n, t.p = "", t(0)
})([(function(e, t, n) {
  function i() {
    function e(e) {
      var t = n(140),
        i = [t];
      i.push(n(142)), i.push(n(148)), i.push(n(151)), i.push(n(154)), i.push(n(156)), i.push(n(166)), i.push(n(170)), i.push(n(173)), i.push(n(177)), i.push(n(181)), i.push(n(185)), i.push(n(190)), i.push(n(192)), i.push(n(195)), i.push(n(200)), p.initialize({
        clientData: e,
        plugins: i
      })
    }

    function t(e, t, n) {
      return "/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__", e).replace("__PROJECT_ID__", t).replace("__PREVIEW_LAYER_IDS__", n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__", !0)
    }
    window.performance && window.performance.mark && window.performance.mark("optimizely:blockBegin");
    var i = n(1);
    i.initialize();
    var r = n(76),
      a = n(15),
      o = n(18);
    n(120);
    var s = o.get("stores/directive"),
      u = n(84);
    if (!u.isCORSSupported()) throw new Error("CORS is not supported on this browser, aborting.");
    var c, l = n(122),
      d = n(110),
      f = n(123),
      g = {
        "layers": [{
          "holdback": 0,
          "activation": {},
          "integrationSettings": {},
          "integrationStringVersion": 2,
          "viewIds": ["9829870315"],
          "experiments": [{
            "weightDistributions": [{
              "entityId": "9833940272",
              "endOfRange": 5000
            }, {
              "entityId": "9825830109",
              "endOfRange": 10000
            }],
            "audienceName": null,
            "name": null,
            "bucketingStrategy": null,
            "variations": [{
              "id": "9833940272",
              "actions": [{
                "viewId": "9829870315",
                "changes": [{
                  "selector": ".subtitle",
                  "dependencies": [],
                  "attributes": {
                    "html": "1 May 27 - June 1, 2017"
                  },
                  "type": "attribute",
                  "id": "30933E99-12A4-451E-B064-EE53C7E7F06A",
                  "css": {}
                }]
              }],
              "name": null
            }, {
              "id": "9825830109",
              "actions": [{
                "viewId": "9829870315",
                "changes": [{
                  "selector": ".subtitle",
                  "dependencies": [],
                  "attributes": {
                    "html": "2nd: May 27 - June 1, 2017"
                  },
                  "type": "attribute",
                  "id": "5D8B00AB-5AD6-409D-AC9C-165D8AEDD809",
                  "css": {}
                }]
              }],
              "name": null
            }],
            "audienceIds": ["or", "9791930702"],
            "changes": null,
            "id": "9837430564",
            "integrationSettings": null
          }],
          "id": "9840130206",
          "weightDistributions": null,
          "name": null,
          "groupId": null,
          "commitId": "9835990387",
          "decisionMetadata": null,
          "policy": "single_experiment",
          "changes": null
        }],
        "listTargetingKeys": [],
        "groups": [],
        "views": [{
          "category": "other",
          "staticConditions": ["and", ["or", {
            "type": "url",
            "value": "https://jeromecyang.github.io/bos2/baltic/",
            "match": "simple"
          }]],
          "deactivation_enabled": false,
          "undo_on_deactivation": false,
          "name": null,
          "apiName": "9724864110_url_targeting_for_test_a_site",
          "tags": [],
          "id": "9829870315"
        }],
        "projectId": "9724864110",
        "namespace": "9724864110",
        "listTargetingCookies": [],
        "dimensions": [],
        "audiences": [{
          "conditions": ["and", ["or", ["or", {
              "value": "gc",
              "type": "browser_version",
              "name": null,
              "match": null
            }]],
            ["or", ["or", {
              "value": "desktop",
              "type": "device",
              "name": null,
              "match": null
            }]]
          ],
          "id": "9791930702",
          "name": null
        }],
        "integrationSettings": [],
        "anonymizeIP": true,
        "visitorAttributes": [],
        "accountId": "9733244614",
        "events": [],
        "revision": "158"
      },
      p = n(124);
    if (d.populateDirectiveData(), s.clientHasAlreadyInitialized()) return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");
    if (s.shouldBailForDesktopApp()) return void a.log("Main / Disabling because of desktop app.");
    if (s.conflictInObservingChanges()) return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");
    if (s.shouldLoadInnie()) l.registerFunction("getProjectId", (function() {
      return g.projectId
    })), f.addScriptAsync("https://app.optimizely.com/js/innie.js"), a.log("Main / Disabling in favor of the editor client.");
    else if (s.shouldLoadPreview()) {
      var h;
      h = s.isSlave() ? window.optimizely : window.optimizely = window.optimizely || [], h.push({
        type: "load",
        data: g
      }), a.log("Main / Disabling in favor of the preview client."), n(139).setupPreviewGlobal(), n(139).pushToPreviewGlobal({
        type: "pushPreviewData",
        name: "liveCommitData",
        data: g
      }), s.isSlave() || (l.registerFunction("getProjectId", (function() {
        return g.projectId
      })), f.addScriptSync("https://optimizely.s3.amazonaws.com/js/preview2/9724864110.js"))
    } else if (s.shouldBootstrapDataForPreview()) {
      l.registerFunction("initializeOptimizelyPreview", e);
      var v = s.isSlave() ? PROJECT_ID_FOR_SLAVE_PREVIEW : l.getFunction("getProjectId")();
      c = t(s.getProjectToken(), v, s.getPreviewLayerIds()), f.addScriptSync(c), n(139).setupPreviewGlobal(), f.addScriptAsync("/dist/js/preview_ui.js")
    } else s.shouldBootstrapDataForEditor() ? (l.registerFunction("initializeOptimizelyPreview", e), f.addScriptAsync(window.optimizely_editor_data_endpoint)) : s.shouldInitialize() && e(g);
    r.timeEnd("block")
  }
  try {
    i()
  } catch (e) {
    try {
      n(138).handleError(e)
    } catch (e) {
      console.log(e)
    }
  }
}), (function(e, t, n) {
  function i(e) {
    return f.isEmpty(e) ? I.resolve() : S.request({
      url: L,
      method: "POST",
      data: e
    })["catch"]((function(e) {
      m.error("Failed to collect rum data :", e)
    }))
  }

  function r() {
    var e = v.getCurrentScript();
    if (e) return e.src
  }

  function a() {
    var e = {
        id: R.getRumId(),
        v: k,
        account: D.getAccountId(),
        project: D.getSnippetId() || D.getProjectId(),
        snippet: D.getSnippetId(),
        revision: D.getRevision(),
        clientVersion: "0.80.0",
        hasSlave: !1,
        wxhr: !0
      },
      t = b.getBucketingId();
    t && (e["user"] = t);
    try {
      e["numBehaviorEvents"] = p.getEvents().length
    } catch (e) {
      m.debug("Unable to get behavior events for RUM:", e)
    }
    f.extend(e, o(), c()), _.dispatch(T.SET_RUM_DATA, {
      data: e
    })
  }

  function o() {
    var e = y.getGlobal("performance");
    if (e) {
      var t, n = R.getScriptSrc();
      try {
        if (n) {
          m.debug("Using derived script src: ", n);
          var i = e.getEntriesByName(n);
          i.length > 0 && (t = i[0])
        }
        if (!t) {
          var r = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;
          m.debug("Scanning resource timing entries with regex");
          var a = e.getEntriesByType("resource");
          t = f.find(a, (function(e) {
            return r.test(e.name)
          }))
        }
        if (t) return f.mapValues(A.ResourceTimingAttributes, (function(e, n) {
          return Math.round(1e3 * (t[n] || 0)) / 1e3
        }))
      } catch (e) {
        return
      }
    }
  }

  function s() {
    try {
      return !v.querySelector("body")
    } catch (e) {
      return null
    }
  }

  function u() {
    try {
      y.getGlobal("requestAnimationFrame")((function() {
        var e = R.getRumData().timebase;
        _.dispatch(T.SET_RUM_DATA, {
          data: {
            render: h.now() - (e || 0)
          }
        })
      }))
    } catch (e) {
      return
    }
  }

  function c() {
    return O.getDurationsFor(f.values(A.RUMPerformanceTimingAttributes))
  }

  function l() {
    var e = {
        numKeys: E.allKeys().length,
        sizeKeys: E.allKeys().toString().length,
        sizeValues: E.allValues().toString().length
      },
      t = y.getGlobal("performance"),
      n = t ? t.timing : {},
      r = O.getMarks() || {},
      a = R.getApiData(),
      o = R.getDOMObservationData(),
      s = P.get("state").getActiveExperimentIds(),
      u = {
        apiCalls: a,
        DOMObservationData: o,
        paintTimings: d(),
        activeExperimentIds: s,
        numPages: N.getNumberOfPages()
      },
      c = y.getGlobal("Prototype");
    c && !f.isUndefined(c.Version) && (u.prototypeJS = c.Version);
    var l = !1;
    l = !0;
    var g = C.getFrames();
    g.length && (u.xdFramesLoaded = g.length);
    var p = {
      id: R.getRumId(),
      v: k,
      project: D.getSnippetId() || D.getProjectId(),
      lsMetrics: e,
      navigationTimings: n,
      userTimings: r,
      xd: l,
      apis: f.keys(a),
      extras: u
    };
    i(p)
  }

  function d() {
    var e = y.getGlobal("performance");
    if (e) {
      var t = e.getEntriesByType("paint");
      if (!f.isEmpty(t)) return f.reduce(t, (function(e, t) {
        return e[t.name] = Math.round(t.startTime), e
      }), {})
    }
  }
  var f = n(2),
    g = n(5),
    p = n(6),
    h = n(10),
    v = n(70),
    _ = n(12),
    E = n(72).LocalStorage,
    m = n(15),
    I = n(77).Promise,
    y = n(71),
    S = n(84),
    T = n(8),
    A = n(16),
    w = n(18),
    D = w.get("stores/global"),
    b = w.get("stores/visitor_id"),
    R = w.get("stores/rum"),
    O = w.get("stores/performance"),
    C = w.get("stores/xdomain"),
    N = w.get("stores/view_data"),
    P = n(86),
    L = "https://rum.optimizely.com/rum",
    V = 3e3,
    k = "1.0",
    x = .003;
  t.initialize = function() {
    var e = g.generate().replace(/-/g, ""),
      t = Math.random() < x;
    if (t) return _.dispatch(T.SET_RUM_DATA, {
      id: e,
      RumHost: L,
      inRumSample: t,
      src: r(),
      data: {
        id: e,
        sync: s(),
        timebase: h.now(),
        sampleRate: x
      }
    }), u(), y.addEventListener("load", l), new I(function(e, t) {
      setTimeout((function() {
        a();
        var n = R.getRumData();
        n = f.pickBy(n, (function(e) {
          return !f.isUndefined(e)
        })), i(n).then(e, t)
      }), V)
    }).catch((function(e) {
      m.warn("RUM / Error sending data:", e)
    }))
  }
}), (function(e, t, n) {
  e.exports = n(3)._.noConflict()
}), (function(e, t, n) {
  (function(e, n) {
    (function() {
      function i(e, t) {
        return e.set(t[0], t[1]), e
      }

      function r(e, t) {
        return e.add(t), e
      }

      function a(e, t) {
        return u(be(e), gn)
      }

      function o(e, t) {
        return !!e.length && f(e, t, 0) > -1
      }

      function s(e, t, n) {
        for (var i = -1, r = e.length; ++i < r;)
          if (n(t, e[i])) return !0;
        return !1
      }

      function u(e, t) {
        for (var n = -1, i = t.length, r = e.length; ++n < i;) e[r + n] = t[n];
        return e
      }

      function c(e, t, n) {
        for (var i = -1, r = e.length; ++i < r;) {
          var a = e[i],
            o = t(a);
          if (null != o && (s === An ? o === o : n(o, s))) var s = o,
            u = a
        }
        return u
      }

      function l(e, t, n, i) {
        var r;
        return n(e, (function(e, n, a) {
          if (t(e, n, a)) return r = i ? n : e, !1
        })), r
      }

      function d(e, t, n) {
        for (var i = e.length, r = n ? i : -1; n ? r-- : ++r < i;)
          if (t(e[r], r, e)) return r;
        return -1
      }

      function f(e, t, n) {
        if (t !== t) return I(e, n);
        for (var i = n - 1, r = e.length; ++i < r;)
          if (e[i] === t) return i;
        return -1
      }

      function g(e, t, n, i, r) {
        return r(e, (function(e, r, a) {
          n = i ? (i = !1, e) : t(n, e, r, a)
        })), n
      }

      function p(e, t) {
        for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
        return i
      }

      function h(e) {
        return function(t) {
          return e(t)
        }
      }

      function v(e, t) {
        return me(t, (function(t) {
          return e[t]
        }))
      }

      function _(e) {
        return e && e.Object === Object ? e : null
      }

      function E(e, t) {
        if (e !== t) {
          var n = null === e,
            i = e === An,
            r = e === e,
            a = null === t,
            o = t === An,
            s = t === t;
          if (e > t && !a || !r || n && !o && s || i && s) return 1;
          if (e < t && !n || !s || a && !i && r || o && r) return -1
        }
        return 0
      }

      function m(e) {
        return pi[e]
      }

      function I(e, t, n) {
        for (var i = e.length, r = t + (n ? 0 : -1); n ? r-- : ++r < i;) {
          var a = e[r];
          if (a !== a) return r
        }
        return -1
      }

      function y(e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString) try {
          t = !!(e + "")
        } catch (e) {}
        return t
      }

      function S(e, t) {
        return e = "number" == typeof e || di.test(e) ? +e : -1, t = null == t ? Vn : t, e > -1 && e % 1 == 0 && e < t
      }

      function T(e) {
        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
        return n
      }

      function A(e) {
        var t = -1,
          n = Array(e.size);
        return e.forEach((function(e, i) {
          n[++t] = [i, e]
        })), n
      }

      function w(e) {
        var t = -1,
          n = Array(e.size);
        return e.forEach((function(e) {
          n[++t] = e
        })), n
      }

      function D(e) {
        if (jt(e) && !dr(e)) {
          if (e instanceof b) return e;
          if (bi.call(e, "__wrapped__")) return tt(e)
        }
        return new b(e)
      }

      function b(e, t) {
        this.e = e, this.t = [], this.i = !!t
      }

      function R() {}

      function O(e, t) {
        return N(e, t) && delete e[t]
      }

      function C(e, t) {
        if (Xi) {
          var n = e[t];
          return n === Rn ? An : n
        }
        return bi.call(e, t) ? e[t] : An
      }

      function N(e, t) {
        return Xi ? e[t] !== An : bi.call(e, t)
      }

      function P(e, t, n) {
        e[t] = Xi && n === An ? Rn : n
      }

      function L(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1])
        }
      }

      function V() {
        this.a = {
          hash: new R,
          map: Ki ? new Ki : [],
          string: new R
        }
      }

      function k(e) {
        var t = this.a;
        return Ze(e) ? O("string" == typeof e ? t.string : t.hash, e) : Ki ? t.map["delete"](e) : W(t.map, e)
      }

      function x(e) {
        var t = this.a;
        return Ze(e) ? C("string" == typeof e ? t.string : t.hash, e) : Ki ? t.map.get(e) : X(t.map, e)
      }

      function F(e) {
        var t = this.a;
        return Ze(e) ? N("string" == typeof e ? t.string : t.hash, e) : Ki ? t.map.has(e) : Q(t.map, e)
      }

      function M(e, t) {
        var n = this.a;
        return Ze(e) ? P("string" == typeof e ? n.string : n.hash, e, t) : Ki ? n.map.set(e, t) : J(n.map, e, t), this
      }

      function U(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.a = new L; ++t < n;) this.push(e[t])
      }

      function G(e, t) {
        var n = e.a;
        if (Ze(t)) {
          var i = n.a,
            r = "string" == typeof t ? i.string : i.hash;
          return r[t] === Rn
        }
        return n.has(t)
      }

      function B(e) {
        var t = this.a;
        if (Ze(e)) {
          var n = t.a,
            i = "string" == typeof e ? n.string : n.hash;
          i[e] = Rn
        } else t.set(e, Rn)
      }

      function z(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n;) {
          var i = e[t];
          this.set(i[0], i[1])
        }
      }

      function j() {
        this.a = {
          array: [],
          map: null
        }
      }

      function H(e) {
        var t = this.a,
          n = t.array;
        return n ? W(n, e) : t.map["delete"](e)
      }

      function Y(e) {
        var t = this.a,
          n = t.array;
        return n ? X(n, e) : t.map.get(e)
      }

      function K(e) {
        var t = this.a,
          n = t.array;
        return n ? Q(n, e) : t.map.has(e)
      }

      function q(e, t) {
        var n = this.a,
          i = n.array;
        i && (i.length < Dn - 1 ? J(i, e, t) : (n.array = null, n.map = new L(i)));
        var r = n.map;
        return r && r.set(e, t), this
      }

      function W(e, t) {
        var n = $(e, t);
        if (n < 0) return !1;
        var i = e.length - 1;
        return n == i ? e.pop() : zi.call(e, n, 1), !0
      }

      function X(e, t) {
        var n = $(e, t);
        return n < 0 ? An : e[n][1]
      }

      function Q(e, t) {
        return $(e, t) > -1
      }

      function $(e, t) {
        for (var n = e.length; n--;)
          if (Ct(e[n][0], t)) return n;
        return -1
      }

      function J(e, t, n) {
        var i = $(e, t);
        i < 0 ? e.push([t, n]) : e[i][1] = n
      }

      function Z(e, t, n, i) {
        return e === An || Ct(e, wi[n]) && !bi.call(i, n) ? t : e
      }

      function ee(e, t, n) {
        (n === An || Ct(e[t], n)) && ("number" != typeof t || n !== An || t in e) || (e[t] = n)
      }

      function te(e, t, n) {
        var i = e[t];
        bi.call(e, t) && Ct(i, n) && (n !== An || t in e) || (e[t] = n)
      }

      function ne(e, t) {
        return e && ir(t, sn(t), e)
      }

      function ie(e) {
        return "function" == typeof e ? e : vn
      }

      function re(e, t, n, i, r, a, o) {
        var s;
        if (i && (s = a ? i(e, r, a, o) : i(e)), s !== An) return s;
        if (!zt(e)) return e;
        var u = dr(e);
        if (u) {
          if (s = Xe(e), !t) return be(e, s)
        } else {
          var c = We(e),
            l = c == Gn || c == Bn;
          if (fr(e)) return Ce(e, t);
          if (c == Hn || c == kn || l && !a) {
            if (y(e)) return a ? e : {};
            if (s = Qe(l ? {} : e), !t) return s = ne(s, e), n ? Me(e, s) : s
          } else {
            if (!gi[c]) return a ? e : {};
            s = $e(e, c, t)
          }
        }
        o || (o = new z);
        var d = o.get(e);
        return d ? d : (o.set(e, s), (u ? tr : fe)(e, (function(r, a) {
          te(s, a, re(r, t, n, i, a, e, o))
        })), n && !u ? Me(e, s) : s)
      }

      function ae(e) {
        return zt(e) ? Gi(e) : {}
      }

      function oe(e, t, n) {
        if ("function" != typeof e) throw new TypeError(bn);
        return setTimeout((function() {
          e.apply(An, n)
        }), t)
      }

      function se(e, t, n, i) {
        var r = -1,
          a = o,
          u = !0,
          c = e.length,
          l = [],
          d = t.length;
        if (!c) return l;
        n && (t = me(t, h(n))), i ? (a = s, u = !1) : t.length >= Dn && (a = G, u = !1, t = new U(t));
        e: for (; ++r < c;) {
          var f = e[r],
            g = n ? n(f) : f;
          if (u && g === g) {
            for (var p = d; p--;)
              if (t[p] === g) continue e;
            l.push(f)
          } else a(t, g, i) || l.push(f)
        }
        return l
      }

      function ue(e, t) {
        var n = !0;
        return tr(e, (function(e, i, r) {
          return n = !!t(e, i, r)
        })), n
      }

      function ce(e, t) {
        var n = [];
        return tr(e, (function(e, i, r) {
          t(e, i, r) && n.push(e)
        })), n
      }

      function le(e, t, n, i) {
        i || (i = []);
        for (var r = -1, a = e.length; ++r < a;) {
          var o = e[r];
          t > 0 && Vt(o) && (n || dr(o) || Pt(o)) ? t > 1 ? le(o, t - 1, n, i) : u(i, o) : n || (i[i.length] = o)
        }
        return i
      }

      function de(e, t) {
        return null == e ? e : nr(e, t, un)
      }

      function fe(e, t) {
        return e && nr(e, t, sn)
      }

      function ge(e, t) {
        return ce(t, (function(t) {
          return Gt(e[t])
        }))
      }

      function pe(e, t, n, i, r) {
        return e === t || (null == e || null == t || !zt(e) && !jt(t) ? e !== e && t !== t : he(e, t, pe, n, i, r))
      }

      function he(e, t, n, i, r, a) {
        var o = dr(e),
          s = dr(t),
          u = xn,
          c = xn;
        o || (u = Ci.call(e), u = u == kn ? Hn : u), s || (c = Ci.call(t), c = c == kn ? Hn : c);
        var l = u == Hn && !y(e),
          d = c == Hn && !y(t),
          f = u == c;
        a || (a = []);
        var g = vt(a, (function(t) {
          return t[0] === e
        }));
        if (g && g[1]) return g[1] == t;
        if (a.push([e, t]), f && !l) {
          var p = o || $t(e) ? He(e, t, n, i, r, a) : Ye(e, t, u, n, i, r, a);
          return a.pop(), p
        }
        if (!(r & Pn)) {
          var h = l && bi.call(e, "__wrapped__"),
            v = d && bi.call(t, "__wrapped__");
          if (h || v) {
            var p = n(h ? e.value() : e, v ? t.value() : t, i, r, a);
            return a.pop(), p
          }
        }
        if (!f) return !1;
        var p = Ke(e, t, n, i, r, a);
        return a.pop(), p
      }

      function ve(e) {
        var t = typeof e;
        return "function" == t ? e : null == e ? vn : ("object" == t ? Ie : we)(e)
      }

      function _e(e) {
        return Hi(Object(e))
      }

      function Ee(e) {
        e = null == e ? e : Object(e);
        var t = [];
        for (var n in e) t.push(n);
        return t
      }

      function me(e, t) {
        var n = -1,
          i = Lt(e) ? Array(e.length) : [];
        return tr(e, (function(e, r, a) {
          i[++n] = t(e, r, a)
        })), i
      }

      function Ie(e) {
        var t = sn(e);
        return function(n) {
          var i = t.length;
          if (null == n) return !i;
          for (n = Object(n); i--;) {
            var r = t[i];
            if (!(r in n && pe(e[r], n[r], An, Nn | Pn))) return !1
          }
          return !0
        }
      }

      function ye(e, t, n, i, r) {
        if (e !== t) {
          var a = dr(t) || $t(t) ? An : un(t);
          tr(a || t, (function(o, s) {
            if (a && (s = o, o = t[s]), zt(o)) r || (r = new z), Se(e, t, s, n, ye, i, r);
            else {
              var u = i ? i(e[s], o, s + "", e, t, r) : An;
              u === An && (u = o), ee(e, s, u)
            }
          }))
        }
      }

      function Se(e, t, n, i, r, a, o) {
        var s = e[n],
          u = t[n],
          c = o.get(u);
        if (c) return void ee(e, n, c);
        var l = a ? a(s, u, n + "", e, t, o) : An,
          d = l === An;
        d && (l = u, dr(u) || $t(u) ? dr(s) ? l = s : Vt(s) ? l = be(s) : (d = !1, l = re(u, !a)) : Wt(u) || Pt(u) ? Pt(s) ? l = tn(s) : !zt(s) || i && Gt(s) ? (d = !1, l = re(u, !a)) : l = s : d = !1), o.set(u, l), d && r(l, u, i, a, o), o["delete"](u), ee(e, n, l)
      }

      function Te(e, t) {
        return e = Object(e), It(t, (function(t, n) {
          return n in e && (t[n] = e[n]), t
        }), {})
      }

      function Ae(e, t) {
        var n = {};
        return de(e, (function(e, i) {
          t(e, i) && (n[i] = e)
        })), n
      }

      function we(e) {
        return function(t) {
          return null == t ? An : t[e]
        }
      }

      function De(e, t, n) {
        var i = -1,
          r = e.length;
        t < 0 && (t = -t > r ? 0 : r + t), n = n > r ? r : n, n < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var a = Array(r); ++i < r;) a[i] = e[i + t];
        return a
      }

      function be(e) {
        return De(e, 0, e.length)
      }

      function Re(e, t) {
        var n;
        return tr(e, (function(e, i, r) {
          return n = t(e, i, r), !n
        })), !!n
      }

      function Oe(e, t) {
        var n = e;
        return It(t, (function(e, t) {
          return t.func.apply(t.thisArg, u([e], t.args))
        }), n)
      }

      function Ce(e, t) {
        if (t) return e.slice();
        var n = new e.constructor(e.length);
        return e.copy(n), n
      }

      function Ne(e) {
        var t = new e.constructor(e.byteLength);
        return new xi(t).set(new xi(e)), t
      }

      function Pe(e) {
        return It(A(e), i, new e.constructor)
      }

      function Le(e) {
        var t = new e.constructor(e.source, ci.exec(e));
        return t.lastIndex = e.lastIndex, t
      }

      function Ve(e) {
        return It(w(e), r, new e.constructor)
      }

      function ke(e) {
        return er ? Object(er.call(e)) : {}
      }

      function xe(e, t) {
        var n = t ? Ne(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
      }

      function Fe(e, t, n, i) {
        n || (n = {});
        for (var r = -1, a = t.length; ++r < a;) {
          var o = t[r],
            s = i ? i(n[o], e[o], o, n, e) : e[o];
          te(n, o, s)
        }
        return n
      }

      function Me(e, t) {
        return ir(e, ar(e), t)
      }

      function Ue(e) {
        return bt((function(t, n) {
          var i = -1,
            r = n.length,
            a = r > 1 ? n[r - 1] : An;
          for (a = "function" == typeof a ? (r--, a) : An, t = Object(t); ++i < r;) {
            var o = n[i];
            o && e(t, o, i, a)
          }
          return t
        }))
      }

      function Ge(e, t) {
        return function(n, i) {
          if (null == n) return n;
          if (!Lt(n)) return e(n, i);
          for (var r = n.length, a = t ? r : -1, o = Object(n);
            (t ? a-- : ++a < r) && i(o[a], a, o) !== !1;);
          return n
        }
      }

      function Be(e) {
        return function(t, n, i) {
          for (var r = -1, a = Object(t), o = i(t), s = o.length; s--;) {
            var u = o[e ? s : ++r];
            if (n(a[u], u, a) === !1) break
          }
          return t
        }
      }

      function ze(e) {
        return function() {
          var t = arguments,
            n = ae(e.prototype),
            i = e.apply(n, t);
          return zt(i) ? i : n
        }
      }

      function je(e, t, n, i) {
        function r() {
          for (var t = -1, s = arguments.length, u = -1, c = i.length, l = Array(c + s), d = this && this !== Ti && this instanceof r ? o : e; ++u < c;) l[u] = i[u];
          for (; s--;) l[u++] = arguments[++t];
          return d.apply(a ? n : this, l)
        }
        if ("function" != typeof e) throw new TypeError(bn);
        var a = t & On,
          o = ze(e);
        return r
      }

      function He(e, t, n, i, r, a) {
        var o = -1,
          s = r & Pn,
          u = r & Nn,
          c = e.length,
          l = t.length;
        if (c != l && !(s && l > c)) return !1;
        for (var d = !0; ++o < c;) {
          var f, g = e[o],
            p = t[o];
          if (f !== An) {
            if (f) continue;
            d = !1;
            break
          }
          if (u) {
            if (!Re(t, (function(e) {
                return g === e || n(g, e, i, r, a)
              }))) {
              d = !1;
              break
            }
          } else if (g !== p && !n(g, p, i, r, a)) {
            d = !1;
            break
          }
        }
        return d
      }

      function Ye(e, t, n, i, r, a, o) {
        switch (n) {
          case Fn:
          case Mn:
            return +e == +t;
          case Un:
            return e.name == t.name && e.message == t.message;
          case jn:
            return e != +e ? t != +t : e == +t;
          case Yn:
          case qn:
            return e == t + ""
        }
        return !1
      }

      function Ke(e, t, n, i, r, a) {
        var o = r & Pn,
          s = sn(e),
          u = s.length,
          c = sn(t),
          l = c.length;
        if (u != l && !o) return !1;
        for (var d = u; d--;) {
          var f = s[d];
          if (!(o ? f in t : bi.call(t, f))) return !1
        }
        for (var g = !0, p = o; ++d < u;) {
          f = s[d];
          var h, v = e[f],
            _ = t[f];
          if (!(h === An ? v === _ || n(v, _, i, r, a) : h)) {
            g = !1;
            break
          }
          p || (p = "constructor" == f)
        }
        if (g && !p) {
          var E = e.constructor,
            m = t.constructor;
          E != m && "constructor" in e && "constructor" in t && !("function" == typeof E && E instanceof E && "function" == typeof m && m instanceof m) && (g = !1)
        }
        return g
      }

      function qe(e, t) {
        var n = e[t];
        return Yt(n) ? n : An
      }

      function We(e) {
        return Ci.call(e)
      }

      function Xe(e) {
        var t = e.length,
          n = e.constructor(t);
        return t && "string" == typeof e[0] && bi.call(e, "index") && (n.index = e.index, n.input = e.input), n
      }

      function Qe(e) {
        return "function" != typeof e.constructor || et(e) ? {} : ae(Mi(e))
      }

      function $e(e, t, n) {
        var i = e.constructor;
        switch (t) {
          case Qn:
            return Ne(e);
          case Fn:
          case Mn:
            return new i(+e);
          case $n:
          case Jn:
          case Zn:
          case ei:
          case ti:
          case ni:
          case ii:
          case ri:
          case ai:
            return xe(e, n);
          case zn:
            return Pe(e);
          case jn:
          case qn:
            return new i(e);
          case Yn:
            return Le(e);
          case Kn:
            return Ve(e);
          case Wn:
            return ke(e)
        }
      }

      function Je(e) {
        var t = e ? e.length : An;
        return Bt(t) && (dr(e) || Qt(e) || Pt(e)) ? p(t, String) : null
      }

      function Ze(e) {
        var t = typeof e;
        return "number" == t || "boolean" == t || "string" == t && "__proto__" != e || null == e
      }

      function et(e) {
        var t = e && e.constructor,
          n = "function" == typeof t && t.prototype || wi;
        return e === n
      }

      function tt(e) {
        var t = new b(e.e, e.i);
        return t.t = be(e.t), t
      }

      function nt(e) {
        return ce(e, Boolean)
      }

      function it(e, t) {
        return e && e.length ? d(e, ve(t, 3)) : -1
      }

      function rt(e) {
        var t = e ? e.length : 0;
        return t ? le(e, 1) : []
      }

      function at(e) {
        var t = e ? e.length : 0;
        return t ? le(e, Ln) : []
      }

      function ot(e) {
        return e ? e[0] : An
      }

      function st(e, t, n) {
        var i = e ? e.length : 0;
        n = "number" == typeof n ? n < 0 ? Yi(i + n, 0) : n : 0;
        for (var r = (n || 0) - 1, a = t === t; ++r < i;) {
          var o = e[r];
          if (a ? o === t : o !== o) return r
        }
        return -1
      }

      function ut(e) {
        var t = e ? e.length : 0;
        return t ? e[t - 1] : An
      }

      function ct(e, t, n) {
        var i = e ? e.length : 0;
        return t = null == t ? 0 : +t, n = n === An ? i : +n, i ? De(e, t, n) : []
      }

      function lt(e) {
        var t = D(e);
        return t.i = !0, t
      }

      function dt(e, t) {
        return t(e), e
      }

      function ft(e, t) {
        return t(e)
      }

      function gt() {
        return Oe(this.e, this.t)
      }

      function pt(e, t, n) {
        return t = n ? An : t, ue(e, ve(t))
      }

      function ht(e, t) {
        return ce(e, ve(t))
      }

      function vt(e, t) {
        return l(e, ve(t), tr)
      }

      function _t(e, t) {
        return tr(e, ie(t))
      }

      function Et(e, t, n, i) {
        e = Lt(e) ? e : gn(e), n = n && !i ? gr(n) : 0;
        var r = e.length;
        return n < 0 && (n = Yi(r + n, 0)), Qt(e) ? n <= r && e.indexOf(t, n) > -1 : !!r && f(e, t, n) > -1
      }

      function mt(e, t) {
        return me(e, ve(t))
      }

      function It(e, t, n) {
        return g(e, ve(t), n, arguments.length < 3, tr)
      }

      function yt(e) {
        return null == e ? 0 : (e = Lt(e) ? e : sn(e), e.length)
      }

      function St(e, t, n) {
        return t = n ? An : t, Re(e, ve(t))
      }

      function Tt(e, t) {
        var n = 0;
        return t = ve(t), me(me(e, (function(e, i, r) {
          return {
            value: e,
            index: n++,
            criteria: t(e, i, r)
          }
        })).sort((function(e, t) {
          return E(e.criteria, t.criteria) || e.index - t.index
        })), we("value"))
      }

      function At(e, t) {
        var n;
        if ("function" != typeof t) throw new TypeError(bn);
        return e = gr(e),
          function() {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = An), n
          }
      }

      function wt(e) {
        if ("function" != typeof e) throw new TypeError(bn);
        return function() {
          return !e.apply(this, arguments)
        }
      }

      function Dt(e) {
        return At(2, e)
      }

      function bt(e, t) {
        if ("function" != typeof e) throw new TypeError(bn);
        return t = Yi(t === An ? e.length - 1 : gr(t), 0),
          function() {
            for (var n = arguments, i = -1, r = Yi(n.length - t, 0), a = Array(r); ++i < r;) a[i] = n[t + i];
            var o = Array(t + 1);
            for (i = -1; ++i < t;) o[i] = n[i];
            return o[t] = a, e.apply(this, o)
          }
      }

      function Rt(e) {
        return zt(e) ? dr(e) ? be(e) : ir(e, sn(e)) : e
      }

      function Ot(e) {
        return re(e, !0, !0)
      }

      function Ct(e, t) {
        return e === t || e !== e && t !== t
      }

      function Nt(e, t) {
        return e > t
      }

      function Pt(e) {
        return Vt(e) && bi.call(e, "callee") && (!Bi.call(e, "callee") || Ci.call(e) == kn)
      }

      function Lt(e) {
        return null != e && Bt(rr(e)) && !Gt(e)
      }

      function Vt(e) {
        return jt(e) && Lt(e)
      }

      function kt(e) {
        return e === !0 || e === !1 || jt(e) && Ci.call(e) == Fn
      }

      function xt(e) {
        return jt(e) && Ci.call(e) == Mn
      }

      function Ft(e) {
        if (Lt(e) && (dr(e) || Qt(e) || Gt(e.splice) || Pt(e))) return !e.length;
        for (var t in e)
          if (bi.call(e, t)) return !1;
        return !0
      }

      function Mt(e, t) {
        return pe(e, t)
      }

      function Ut(e) {
        return "number" == typeof e && ji(e)
      }

      function Gt(e) {
        var t = zt(e) ? Ci.call(e) : "";
        return t == Gn || t == Bn
      }

      function Bt(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Vn
      }

      function zt(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
      }

      function jt(e) {
        return !!e && "object" == typeof e
      }

      function Ht(e) {
        return qt(e) && e != +e
      }

      function Yt(e) {
        return null != e && (Gt(e) ? Pi.test(Di.call(e)) : jt(e) && (y(e) ? Pi : li).test(e))
      }

      function Kt(e) {
        return null === e
      }

      function qt(e) {
        return "number" == typeof e || jt(e) && Ci.call(e) == jn
      }

      function Wt(e) {
        if (!jt(e) || Ci.call(e) != Hn || y(e)) return !1;
        var t = Mi(e);
        if (null === t) return !0;
        var n = t.constructor;
        return "function" == typeof n && n instanceof n && Di.call(n) == Oi
      }

      function Xt(e) {
        return zt(e) && Ci.call(e) == Yn
      }

      function Qt(e) {
        return "string" == typeof e || !dr(e) && jt(e) && Ci.call(e) == qn
      }

      function $t(e) {
        return jt(e) && Bt(e.length) && !!fi[Ci.call(e)]
      }

      function Jt(e) {
        return e === An
      }

      function Zt(e, t) {
        return e < t
      }

      function en(e) {
        return Lt(e) ? e.length ? be(e) : [] : gn(e)
      }

      function tn(e) {
        return ir(e, un(e))
      }

      function nn(e) {
        return "string" == typeof e ? e : null == e ? "" : e + ""
      }

      function rn(e, t) {
        var n = ae(e);
        return t ? hr(n, t) : n
      }

      function an(e, t) {
        return e && fe(e, ie(t))
      }

      function on(e, t) {
        return null != e && bi.call(e, t)
      }

      function sn(e) {
        var t = et(e);
        if (!t && !Lt(e)) return _e(e);
        var n = Je(e),
          i = !!n,
          r = n || [],
          a = r.length;
        for (var o in e) !bi.call(e, o) || i && ("length" == o || S(o, a)) || t && "constructor" == o || r.push(o);
        return r
      }

      function un(e) {
        for (var t = -1, n = et(e), i = Ee(e), r = i.length, a = Je(e), o = !!a, s = a || [], u = s.length; ++t < r;) {
          var c = i[t];
          o && ("length" == c || S(c, u)) || "constructor" == c && (n || !bi.call(e, c)) || s.push(c)
        }
        return s
      }

      function cn(e, t) {
        var n = {};
        return t = ve(t, 3), fe(e, (function(e, i, r) {
          n[i] = t(e, i, r)
        })), n
      }

      function ln(e, t) {
        return t = ve(t), Ae(e, (function(e, n) {
          return !t(e, n)
        }))
      }

      function dn(e, t) {
        return null == e ? {} : Ae(e, ve(t))
      }

      function fn(e, t, n) {
        var i = null == e ? An : e[t];
        return i === An && (i = n), Gt(i) ? i.call(e) : i
      }

      function gn(e) {
        return e ? v(e, sn(e)) : []
      }

      function pn(e) {
        return e = nn(e), e && si.test(e) ? e.replace(oi, m) : e
      }

      function hn(e) {
        return function() {
          return e
        }
      }

      function vn(e) {
        return e
      }

      function _n(e) {
        return Ie(hr({}, e))
      }

      function En(e, t, n) {
        var i = sn(t),
          r = ge(t, i);
        null != n || zt(t) && (r.length || !i.length) || (n = t, t = e, e = this, r = ge(t, sn(t)));
        var a = !(zt(n) && "chain" in n) || n.chain,
          o = Gt(e);
        return tr(r, (function(n) {
          var i = t[n];
          e[n] = i, o && (e.prototype[n] = function() {
            var t = this.i;
            if (a || t) {
              var n = e(this.e),
                r = n.t = be(this.t);
              return r.push({
                func: i,
                args: arguments,
                thisArg: e
              }), n.i = t, n
            }
            return i.apply(e, u([this.value()], arguments))
          })
        })), e
      }

      function mn() {
        return Ti._ === this && (Ti._ = Ni), this
      }

      function In() {}

      function yn(e) {
        var t = ++Ri;
        return nn(e) + t
      }

      function Sn(e) {
        return e && e.length ? c(e, vn, Nt) : An
      }

      function Tn(e) {
        return e && e.length ? c(e, vn, Zt) : An
      }
      var An, wn = "4.6.1",
        Dn = 200,
        bn = "Expected a function",
        Rn = "__lodash_hash_undefined__",
        On = 1,
        Cn = 32,
        Nn = 1,
        Pn = 2,
        Ln = 1 / 0,
        Vn = 9007199254740991,
        kn = "[object Arguments]",
        xn = "[object Array]",
        Fn = "[object Boolean]",
        Mn = "[object Date]",
        Un = "[object Error]",
        Gn = "[object Function]",
        Bn = "[object GeneratorFunction]",
        zn = "[object Map]",
        jn = "[object Number]",
        Hn = "[object Object]",
        Yn = "[object RegExp]",
        Kn = "[object Set]",
        qn = "[object String]",
        Wn = "[object Symbol]",
        Xn = "[object WeakMap]",
        Qn = "[object ArrayBuffer]",
        $n = "[object Float32Array]",
        Jn = "[object Float64Array]",
        Zn = "[object Int8Array]",
        ei = "[object Int16Array]",
        ti = "[object Int32Array]",
        ni = "[object Uint8Array]",
        ii = "[object Uint8ClampedArray]",
        ri = "[object Uint16Array]",
        ai = "[object Uint32Array]",
        oi = /[&<>"'`]/g,
        si = RegExp(oi.source),
        ui = /[\\^$.*+?()[\]{}|]/g,
        ci = /\w*$/,
        li = /^\[object .+?Constructor\]$/,
        di = /^(?:0|[1-9]\d*)$/,
        fi = {};
      fi[$n] = fi[Jn] = fi[Zn] = fi[ei] = fi[ti] = fi[ni] = fi[ii] = fi[ri] = fi[ai] = !0, fi[kn] = fi[xn] = fi[Qn] = fi[Fn] = fi[Mn] = fi[Un] = fi[Gn] = fi[zn] = fi[jn] = fi[Hn] = fi[Yn] = fi[Kn] = fi[qn] = fi[Xn] = !1;
      var gi = {};
      gi[kn] = gi[xn] = gi[Qn] = gi[Fn] = gi[Mn] = gi[$n] = gi[Jn] = gi[Zn] = gi[ei] = gi[ti] = gi[zn] = gi[jn] = gi[Hn] = gi[Yn] = gi[Kn] = gi[qn] = gi[Wn] = gi[ni] = gi[ii] = gi[ri] = gi[ai] = !0, gi[Un] = gi[Gn] = gi[Xn] = !1;
      var pi = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "`": "&#96;"
        },
        hi = {
          "function": !0,
          object: !0
        },
        vi = hi[typeof t] && t && !t.nodeType ? t : An,
        _i = hi[typeof e] && e && !e.nodeType ? e : An,
        Ei = _i && _i.exports === vi ? vi : An,
        mi = _(vi && _i && "object" == typeof n && n),
        Ii = _(hi[typeof self] && self),
        yi = _(hi[typeof window] && window),
        Si = _(hi[typeof this] && this),
        Ti = mi || yi !== (Si && Si.window) && yi || Ii || Si || Function("return this")(),
        Ai = Array.prototype,
        wi = Object.prototype,
        Di = Function.prototype.toString,
        bi = wi.hasOwnProperty,
        Ri = 0,
        Oi = Di.call(Object),
        Ci = wi.toString,
        Ni = Ti._,
        Pi = RegExp("^" + Di.call(bi).replace(ui, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Li = Ei ? Ti.Buffer : An,
        Vi = Ti.Reflect,
        ki = Ti.Symbol,
        xi = Ti.Uint8Array,
        Fi = Vi ? Vi.enumerate : An,
        Mi = Object.getPrototypeOf,
        Ui = Object.getOwnPropertySymbols,
        Gi = Object.create,
        Bi = wi.propertyIsEnumerable,
        zi = Ai.splice,
        ji = Ti.isFinite,
        Hi = Object.keys,
        Yi = Math.max,
        Ki = qe(Ti, "Map"),
        qi = qe(Ti, "Set"),
        Wi = qe(Ti, "WeakMap"),
        Xi = qe(Object, "create"),
        Qi = Ki ? Di.call(Ki) : "",
        $i = qi ? Di.call(qi) : "",
        Ji = Wi ? Di.call(Wi) : "",
        Zi = ki ? ki.prototype : An,
        er = Zi ? Zi.valueOf : An,
        tr = Ge(fe),
        nr = Be();
      Fi && !Bi.call({
        valueOf: 1
      }, "valueOf") && (Ee = function(e) {
        return T(Fi(e))
      });
      var ir = Fe,
        rr = we("length"),
        ar = Ui || function() {
          return []
        };
      (Ki && We(new Ki) != zn || qi && We(new qi) != Kn || Wi && We(new Wi) != Xn) && (We = function(e) {
        var t = Ci.call(e),
          n = t == Hn ? e.constructor : null,
          i = "function" == typeof n ? Di.call(n) : "";
        if (i) switch (i) {
          case Qi:
            return zn;
          case $i:
            return Kn;
          case Ji:
            return Xn
        }
        return t
      });
      var or = bt((function(e, t) {
          return dr(e) || (e = null == e ? [] : [Object(e)]), t = le(t, 1), a(e, t)
        })),
        sr = bt((function(e, t, n) {
          return je(e, On | Cn, t, n)
        })),
        ur = bt((function(e, t) {
          return oe(e, 1, t)
        })),
        cr = bt((function(e, t, n) {
          return oe(e, pr(t) || 0, n)
        })),
        lr = bt((function(e, t) {
          return je(e, Cn, An, t)
        })),
        dr = Array.isArray,
        fr = Li ? function(e) {
          return e instanceof Li
        } : hn(!1),
        gr = Number,
        pr = Number,
        hr = Ue((function(e, t) {
          ir(t, sn(t), e)
        })),
        vr = Ue((function(e, t) {
          ir(t, un(t), e)
        })),
        _r = Ue((function(e, t, n, i) {
          Fe(t, un(t), e, i)
        })),
        Er = bt((function(e) {
          return e.push(An, Z), _r.apply(An, e)
        })),
        mr = Ue((function(e, t, n) {
          ye(e, t, n)
        })),
        Ir = bt((function(e, t) {
          return null == e ? {} : (t = me(le(t, 1), String), Te(e, se(un(e), t)))
        })),
        yr = bt((function(e, t) {
          return null == e ? {} : Te(e, le(t, 1))
        })),
        Sr = ve;
      b.prototype = ae(D.prototype), b.prototype.constructor = b, R.prototype = Xi ? Xi(null) : wi, L.prototype.clear = V, L.prototype["delete"] = k, L.prototype.get = x, L.prototype.has = F, L.prototype.set = M, U.prototype.push = B, z.prototype.clear = j, z.prototype["delete"] = H, z.prototype.get = Y, z.prototype.has = K, z.prototype.set = q, D.assign = hr, D.assignIn = vr, D.before = At, D.bind = sr, D.chain = lt, D.compact = nt, D.concat = or, D.create = rn, D.defaults = Er, D.defer = ur, D.delay = cr, D.filter = ht, D.flatten = rt, D.flattenDeep = at, D.iteratee = Sr, D.keys = sn, D.map = mt, D.mapValues = cn, D.matches = _n, D.merge = mr, D.mixin = En, D.negate = wt, D.omit = Ir, D.omitBy = ln, D.once = Dt, D.partial = lr, D.pick = yr, D.pickBy = dn, D.slice = ct, D.sortBy = Tt, D.tap = dt, D.thru = ft, D.toArray = en, D.values = gn, D.extend = vr, En(D, D), D.clone = Rt, D.cloneDeep = Ot, D.escape = pn, D.every = pt, D.find = vt, D.findIndex = it, D.forEach = _t, D.forOwn = an, D.has = on, D.head = ot, D.identity = vn, D.includes = Et, D.indexOf = st, D.isArguments = Pt, D.isArray = dr, D.isBoolean = kt, D.isDate = xt, D.isEmpty = Ft, D.isEqual = Mt, D.isFinite = Ut, D.isFunction = Gt, D.isNaN = Ht, D.isNull = Kt, D.isNumber = qt, D.isObject = zt, D.isRegExp = Xt, D.isString = Qt, D.isUndefined = Jt, D.last = ut, D.max = Sn, D.min = Tn, D.noConflict = mn, D.noop = In, D.reduce = It, D.result = fn, D.size = yt, D.some = St, D.uniqueId = yn, D.each = _t, D.first = ot, En(D, (function() {
        var e = {};
        return fe(D, (function(t, n) {
          bi.call(D.prototype, n) || (e[n] = t)
        })), e
      })(), {
        chain: !1
      }), D.VERSION = wn, tr(["pop", "join", "replace", "reverse", "split", "push", "shift", "sort", "splice", "unshift"], (function(e) {
        var t = (/^(?:replace|split)$/.test(e) ? String.prototype : Ai)[e],
          n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
          i = /^(?:pop|join|replace|shift)$/.test(e);
        D.prototype[e] = function() {
          var e = arguments;
          return i && !this.i ? t.apply(this.value(), e) : this[n]((function(n) {
            return t.apply(n, e)
          }))
        }
      })), D.prototype.toJSON = D.prototype.valueOf = D.prototype.value = gt, (yi || Ii || {})._ = D, vi && _i && (Ei && ((_i.exports = D)._ = D), vi._ = D)
    }).call(this)
  }).call(t, n(4)(e), (function() {
    return this
  })())
}), (function(e, t) {
  e.exports = function(e) {
    return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
  }
}), (function(e, t) {
  t.generate = function e(t) {
    return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
  }
}), (function(e, t, n) {
  var i = n(7);
  t.initializeStore = i.initialize, t.addEvent = i.addEvent, t.getEvents = i.getEvents, t.usageInBytes = i.usageInBytes
}), (function(e, t, n) {
  function i(e) {
    I.dispatch(_.SET_VISITOR_EVENTS, e)
  }

  function r(e) {
    I.dispatch(_.UPDATE_BEHAVIOR_STORE, {
      key: "baseMap",
      value: e
    })
  }

  function a(e) {
    I.dispatch(_.UPDATE_BEHAVIOR_STORE, {
      key: "eventQueue",
      value: e
    })
  }

  function o(e) {
    I.dispatch(_.UPDATE_BEHAVIOR_STORE, {
      key: "lastEvent",
      value: e
    })
  }

  function s(e) {
    I.dispatch(_.UPDATE_BEHAVIOR_STORE, {
      key: "cleared",
      value: e
    })
  }

  function u() {
    I.dispatch(_.UPDATE_BEHAVIOR_STORE, {
      key: "initialized",
      value: !0
    })
  }

  function c() {
    return O.getEvents()
  }

  function l() {
    return C.getBaseMap()
  }

  function d() {
    return C.getEventQueue()
  }

  function f() {
    return C.getLastEvent()
  }

  function g() {
    return C.getCleared()
  }

  function p() {
    return C.getInitialized()
  }

  function h() {
    return i(c().concat(d())), a([]), c().length > P && (i(c().slice(-P)), !0)
  }
  var v = n(2),
    _ = n(8),
    E = n(10),
    m = n(11),
    I = n(12),
    y = n(15),
    S = n(64),
    T = t,
    A = n(54).Event,
    w = n(55),
    D = n(54).EventBase,
    b = n(83),
    R = n(18),
    O = R.get("stores/visitor_events"),
    C = R.get("stores/visitor_events_manager"),
    N = {
      EVENTBASE: "eb",
      HASH: "h",
      TIMEBASE: "tb",
      TIMESTAMPS: "ts",
      DELTA: "d",
      INDEX: "i"
    },
    P = 1e3;
  t.initialize = function(e, t) {
    if (!p()) {
      T.u(e, t);
      var n = c();
      n.length > 0 && o(n[n.length - 1]);
      var i = d();
      i.length > 0 && o(i[i.length - 1]), u()
    }
  }, t.addEvent = function(e) {
    y.debug("Behavior store: adding event", e);
    var t = T.l(e);
    o(t), a(d().concat(t)), T.d(d())
  }, t.getEvents = function() {
    return d().length > 0 && (h() && b.sessionize(c()), T.f(c()), T.d(d())), c()
  }, T.u = function(e, t) {
    T.g(e, t) && (T.f(c()), T.d(d())), b.sessionize(c())
  }, T.g = function(e, t) {
    if (0 === e.length && 0 === t.length) return i([]), a([]), !1;
    var n = !1,
      r = e[0] || t[0];
    return N.EVENTBASE in r ? (i(T.h(e)), a(T.h(t))) : (n = !0, i(T.I(e)), a(T.I(t))), d().length > 0 && (h(), n = !0), i(T._updateBaseMapAndMaybeDedupe(c())), T._migrateEventBasesAndUpdateStore() && (n = !0), n
  }, T.I = function(e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var i = e[n],
        r = T.S(i);
      t[n] = new A(r, i[w.FIELDS.TIME])
    }
    return t
  }, T._migrateEventBasesAndUpdateStore = function() {
    var e = !1,
      t = T.T();
    return b.applyMigrations(t) && (e = !0, r({}), i(T._updateBaseMapAndMaybeDedupe(c())), a(T._updateBaseMapAndMaybeDedupe(d()))), e
  }, T.A = function() {
    return E.now()
  }, T.l = function(e) {
    var t, n = e.name,
      i = e.type || "default",
      r = e.category || m.OTHER,
      a = e.tags || {};
    e.revenue && (t = e.revenue);
    var o = new D(n, i, r, a, t);
    o = T.w(o);
    var s = T.A(),
      u = new A(o, s, -1);
    return b.updateSessionId(f(), u), u
  }, T._updateBaseMapAndMaybeDedupe = function(e) {
    for (var t = 0; t < e.length; t++) e[t].eventBase = T.w(e[t].eventBase);
    return e
  }, T.f = function(e) {
    var t = T.D(e);
    S.persistBehaviorEvents(t)
  }, T.d = function(e) {
    var t = T.D(e);
    S.persistBehaviorEventQueue(t)
  }, T.b = function() {
    g() || (i([]), a([]), T.f(c()), T.d(d()), r({}), o(null), s(!0))
  }, T.w = function(e) {
    var t = e.hash(),
      n = l(),
      i = n[t];
    if (v.isUndefined(i)) return n[t] = [e], r(n), e;
    for (var a = 0; a < i.length; a++)
      if (e.equals(i[a])) return i[a];
    return i.push(e), r(n), e
  }, T.T = function() {
    var e = [],
      t = l();
    for (var n in t) t.hasOwnProperty(n) && (e = e.concat(t[n]));
    return e
  }, T.D = function(e) {
    for (var t = function(e) {
        var t = {};
        t[w.FIELDS.NAME] = e.getValueOrDefault([w.FIELDS.NAME]), t[w.FIELDS.TYPE] = e.getValueOrDefault([w.FIELDS.TYPE]);
        var n = e.getValueOrDefault([w.FIELDS.CATEGORY]);
        v.isUndefined(n) || (t[w.FIELDS.CATEGORY] = n);
        var i = e.getValueOrDefault([w.FIELDS.REVENUE]);
        v.isUndefined(i) || (t[w.FIELDS.REVENUE] = i);
        var r = e.getValueOrDefault([w.FIELDS.OPTIONS]);
        return v.isUndefined(r) || (t[w.FIELDS.OPTIONS] = r), t
      }, n = N, i = [], r = "_idx_", a = 0; a < e.length; a++) {
      var o, s, u = e[a],
        c = u.eventBase;
      if (c.hasOwnProperty(r)) {
        o = i[c[r]];
        var l = u[w.FIELDS.TIME] - (o[n.TIMEBASE] || 0);
        s = {}, s[n.DELTA] = l, s[n.INDEX] = a, o[n.TIMESTAMPS].push(s)
      } else o = {}, o[n.EVENTBASE] = t(u), o[n.HASH] = c.hash(), o[n.TIMEBASE] = u[w.FIELDS.TIME], s = {}, s[n.DELTA] = 0, s[n.INDEX] = a, o[n.TIMESTAMPS] = [s], i.push(o), c[r] = i.length - 1
    }
    for (a = 0; a < e.length; a++) delete e[a].eventBase[r];
    return i
  }, T.S = function(e, t) {
    var n = new D(e[w.FIELDS.NAME], e[w.FIELDS.TYPE], e[w.FIELDS.CATEGORY], e[w.FIELDS.OPTIONS], e[w.FIELDS.REVENUE]);
    return v.isUndefined(t) || n.setHash(t), n
  }, T.h = function(e) {
    for (var t = N, n = [], i = 0; i < e.length; i++)
      for (var r = e[i], a = T.S(r[t.EVENTBASE], r[t.HASH]), o = r[t.TIMEBASE], s = r[t.TIMESTAMPS], u = 0; u < s.length; u++) {
        var c = s[u],
          l = new A(a, o + c[t.DELTA]),
          d = c[t.INDEX];
        n[d] = l
      }
    return n
  }, t.deserialize = function(e) {
    return T.h(e);
  }, t.mergeAllEvents = function(e) {
    var t = [].concat.apply([], e);
    return t.sort(b.sessionSortPredicate), b.sessionize(t), t
  }
}), (function(e, t, n) {
  var i = n(9);
  e.exports = i({
    LOG: null,
    SET_LOGLEVEL: null,
    INITIALIZE_STATE: null,
    SET_DOMCONTENTLOADED: null,
    ACTIVATE: null,
    UPDATE_BEHAVIOR_STORE: null,
    DATA_LOADED: null,
    LOAD_PERSISTED_LAYER_STATES: null,
    RECORD_GLOBAL_DECISION: null,
    RECORD_LAYER_DECISION: null,
    SET_VISITOR_ATTRIBUTES: null,
    SET_VISITOR_ATTRIBUTE_PENDING: null,
    LOAD_EXISTING_VISITOR_PROFILE: null,
    SET_VISITOR_EVENTS: null,
    SET_FOREIGN_VISITOR_EVENTS: null,
    SET_FOREIGN_VISITOR_EVENT_QUEUE: null,
    SET_VISITOR_ID: null,
    REFRESH_SESSION: null,
    LOAD_SESSION_STATE: null,
    UPDATE_VARIATION_ID_MAP: null,
    MERGE_VARIATION_ID_MAP: null,
    UPDATE_PREFERRED_LAYER_MAP: null,
    MERGE_PREFERRED_LAYER_MAP: null,
    RECORD_LAYER_DECISION_EVENT_ID: null,
    TRACK_VIEW_ACTIVATED_EVENT: null,
    REGISTER_ASYNC_DEFERRED: null,
    RESOLVE_DEFERRED: null,
    REJECT_DEFERRED: null,
    REGISTER_PLUGIN: null,
    ADD_CLEANUP_FN: null,
    CLEAR_CLEANUP_FN: null,
    ACTION_EXECUTED: null,
    REGISTER_ACTION: null,
    SET_VIEW_ACTIVE_STATE: null,
    UPDATE_PARSED_VIEW_METADATA: null,
    UPDATE_USER_SUPPLIED_METADATA: null,
    REGISTER_VIEWS: null,
    SET_GLOBAL_TAGS: null,
    SET_VIEW_BATCHING: null,
    ATTACH_EVENT_STREAM_PUBLISHERS: null,
    DETACH_EVENT_STREAM_PUBLISHERS: null,
    LOAD_DIRECTIVE: null,
    SET_COOKIE_AGE: null,
    SET_COOKIE_DOMAIN: null,
    XDOMAIN_SET_DEFAULT_FRAME: null,
    XDOMAIN_ADD_FRAME: null,
    XDOMAIN_SET_MESSAGE: null,
    XDOMAIN_ADD_SUBSCRIBER: null,
    XDOMAIN_SET_CANONICAL_ORIGINS: null,
    XDOMAIN_SET_DISABLED: null,
    ADD_EMITTER_HANDLER: null,
    REMOVE_EMITTER_HANDLER: null,
    SET_INTEGRATION_SETTINGS: null,
    ADD_CHANGE: null,
    SET_CHANGE_APPLIER: null,
    REMOVE_ACTION_STATE: null,
    ANNOUNCE_PENDING_REDIRECT: null,
    LOAD_REDIRECT_DATA: null,
    REGISTER_TRACKED_REDIRECT_DATA: null,
    SET_PENDING_EVENT: null,
    REMOVE_PENDING_EVENT: null,
    LOAD_PENDING_EVENTS: null,
    SANDBOXED_FUNCTIONS_ADDED: null,
    SET_RUM_DATA: null,
    RECORD_API_USAGE: null,
    RECORD_DOM_OBSERVATION_OCCURENCE: null,
    SET_PERFORMANCE_MARKS_DATA: null,
    FINALIZE_BATCH_SNAPSHOT: null,
    REGISTER_PREVIOUS_BATCH: null,
    REGISTER_TRACKER_VISITOR: null,
    REGISTER_TRACKER_EVENT: null,
    REGISTER_TRACKER_DECISION: null,
    RESET_TRACKER_EVENTS: null,
    RESET_TRACKER_PREVIOUS_BATCHES: null,
    RESET_TRACKER_STORE: null,
    SET_TRACKER_POLLING: null,
    SET_TRACKER_BATCHING: null,
    SET_TRACKER_SEND_EVENTS: null,
    SET_TRACKER_PERSISTABLE_STATE: null,
    SET_TRACKER_DIRTY: null,
    UPDATE_TRACKER_VISITOR_ATTRIBUTES: null,
    SET_UA_DATA: null
  })
}), (function(e, t) {
  "use strict";
  var n = function(e) {
    var t, n = {};
    if (!(e instanceof Object) || Array.isArray(e)) throw new Error("keyMirror(...): Argument must be an object.");
    for (t in e) e.hasOwnProperty(t) && (n[t] = t);
    return n
  };
  e.exports = n
}), (function(e, t) {
  t.now = function() {
    return +new Date
  }
}), (function(e, t) {
  e.exports = {
    OTHER: "other"
  }
}), (function(e, t, n) {
  var i = n(13);
  e.exports = i.create()
}), (function(e, t, n) {
  function i(e) {
    e = e || {}, this.R = {}, this.O = {}, this.C = 0, this.N = [], this.P = []
  }

  function r(e, t) {
    return function() {
      var n = e.indexOf(t);
      n !== -1 && e.splice(n, 1)
    }
  }
  var a = n(2),
    o = n(14);
  i.prototype.registerStores = function(e) {
    a.forOwn(e, function(e, t) {
      this.R[t] = new o(t, this, e)
    }.bind(this))
  }, i.prototype.getStore = function(e) {
    return this.R[e]
  }, i.prototype.dispatch = function(e, t) {
    this.dispatchId++, a.each(this.N, function(n) {
      n.call(this, e, t)
    }.bind(this)), a.forOwn(this.R, (function(n) {
      n.L(e, t)
    })), a.each(this.P, function(n) {
      n.call(this, e, t)
    }.bind(this)), a.forOwn(this.R, function(e, t) {
      e.hasChanges() && this.O[t] && (e.resetChange(), a.each(this.O[t], (function(t) {
        t(e)
      })))
    }.bind(this))
  }, i.prototype.reset = function() {
    this.O = {}, a.forOwn(this.R, (function(e, t) {
      e.V()
    }))
  }, i.prototype.getState = function() {
    var e = {};
    return a.forOwn(this.R, (function(t, n) {
      e[n] = t.k()
    })), e
  }, i.prototype.onPreAction = function(e) {
    var t = this.N;
    return t.push(e), r(t, e)
  }, i.prototype.onPostAction = function(e) {
    var t = this.P;
    return t.push(e), r(t, e)
  }, i.prototype.x = function(e, t) {
    this.O[e] || (this.O[e] = []), this.O[e].push(t);
    var n = this.O[e];
    return r(n, t)
  }, e.exports = {
    create: function(e) {
      return new i(e)
    }
  }
}), (function(e, t, n) {
  function i(e, t, n) {
    this.F = e, this.M = t, this.U = 0, this.G = !1, this.B = {}, r.extend(this, n), this.z = {}, this.initialize && this.initialize()
  }
  var r = n(2);
  i.prototype.L = function(e, t) {
    var n = this.B[e];
    n && "function" == typeof n && n.call(this, t, e)
  }, i.prototype.k = function() {
    return r.cloneDeep(this.z)
  }, i.prototype.on = function(e, t) {
    this.B[e] = t.bind(this)
  }, i.prototype.observe = function(e) {
    return this.M.x(this.F, e)
  }, i.prototype.emitChange = function() {
    this.G = !0, this.U++
  }, i.prototype.hasChanges = function() {
    return this.G
  }, i.prototype.resetChange = function() {
    this.G = !1
  }, i.prototype.getStateId = function() {
    return this.U
  }, i.prototype.V = function() {
    this.reset && "function" == typeof this.reset && this.reset(), this.initialize()
  }, e.exports = i
}), (function(e, t, n) {
  function i() {
    this.logLevel = null, this.logMatch = null, this.logs = [], this.timebase = o.now()
  }
  var r = n(2),
    a = n(8),
    o = n(10),
    s = n(16),
    u = n(12),
    c = n(17);
  i.prototype.j = function() {
    return !r.isNull(this.logLevel)
  }, i.prototype.setLogLevel = function(e) {
    var t = this.H(e);
    null === t ? console.error("Unknown log level: " + e) : this.logLevel !== t && (this.log("Setting log level to " + t), this.logLevel = t, this.flush())
  }, i.prototype.setLogMatcher = function(e) {
    r.isString(e) ? this.logMatcher = e : this.logMatcher = "", this.logGroup = 0
  }, i.prototype.shouldLog = function(e) {
    return this.j() && this.logLevel >= e
  }, i.prototype.matchesLogMessage = function(e, t) {
    var n = this.logMatcher;
    if (!this.logMatcher) return !0;
    if (this.logGroup) return "GROUPSTART" === e ? this.logGroup++ : "GROUPEND" === e && this.logGroup--, !0;
    var i = r.some(t, (function(e) {
      if (!r.isString(e)) try {
        e = c.stringify(e)
      } catch (e) {}
      return r.isString(e) && r.includes(e, n)
    }));
    return i && "GROUPSTART" === e && this.logGroup++, i
  }, i.prototype.storeLog = function(e, t) {
    var n = {
      logLevel: e,
      logMessage: t
    };
    u.dispatch(a.LOG, n)
  }, i.prototype.flush = function() {
    var e = n(18),
      t = e.get("stores/log");
    this.logGroup = 0;
    var i = t.getLogs();
    r.each(i, function(e) {
      this.Y(e.logLevel, e.logMessage, !0)
    }.bind(this))
  }, i.prototype.Y = function(e, t, n) {
    var i, a = e;
    if (console) switch (e) {
      case "GROUPSTART":
        i = console.groupCollapsed, a = s.LogLevel.DEBUG;
        break;
      case "GROUPEND":
        i = console.groupEnd, a = s.LogLevel.DEBUG;
        break;
      case s.LogLevel.ERROR:
        i = console.error;
        break;
      case s.LogLevel.WARN:
        i = console.warn;
        break;
      case s.LogLevel.DEBUG:
        i = console.debug;
        break;
      default:
        i = console.log
    }
    try {
      n || this.j() && !this.shouldLog(a) || (r.isArray(t) && r.isString(t[0]) && (t = this.K(t)), this.storeLog(e, t)), i && this.shouldLog(a) && this.matchesLogMessage(e, t) && i.apply(console, t)
    } catch (e) {
      console && (console.error ? console.error(e) : console.log(e))
    }
  }, i.prototype.debug = function() {
    this.Y(s.LogLevel.DEBUG, [].slice.call(arguments))
  }, i.prototype.log = function() {
    this.Y(s.LogLevel.INFO, [].slice.call(arguments))
  }, i.prototype.logAlways = function() {
    var e = this.K([].slice.call(arguments));
    console && console.log && console.log.apply && console.log.apply(console, e), this.storeLog(s.LogLevel.INFO, e)
  }, i.prototype.warn = function() {
    this.Y(s.LogLevel.WARN, [].slice.call(arguments))
  }, i.prototype.error = function(e) {
    var t = [].slice.call(arguments);
    1 === t.length && e.stack ? (this.Y(s.LogLevel.ERROR, [this.q(), e]), this.Y(s.LogLevel.INFO, [e.stack])) : this.Y(s.LogLevel.ERROR, t)
  }, i.prototype.groupCollapsed = function() {
    this.Y("GROUPSTART", [].slice.call(arguments))
  }, i.prototype.groupEnd = function() {
    this.Y("GROUPEND", [].slice.call(arguments))
  }, i.prototype.K = function(e) {
    var t = this.q().toString();
    return t.length < 6 && (t = ("     " + t).slice(-6)), [t + "| Optly / " + e[0]].concat(e.slice(1))
  }, i.prototype.q = function() {
    return this.timebase ? o.now() - this.timebase : 0
  }, i.prototype.H = function(e) {
    return e && (e = e.toUpperCase(), "TRUE" === e && (e = "INFO"), "FALSE" === e && (e = "OFF"), "ALL" === e && (e = "DEBUG"), !r.isUndefined(s.LogLevel[e])) ? s.LogLevel[e] : null
  }, e.exports = new i
}), (function(e, t, n) {
  var i = n(9);
  t.COOKIES = {
    OPT_OUT: "optimizelyOptOut",
    PREVIEW: "optimizelyPreview",
    REDIRECT: "optimizelyRedirectData",
    SESSION_STATE: "optimizelySessionState",
    TOKEN: "optimizelyToken",
    VISITOR_ID: "optimizelyEndUserId",
    VISITOR_UUID: "optimizelyPPID"
  }, t.LayerActivationTypes = {
    CONDITIONAL: "conditional",
    IMMEDIATE: "immediate",
    MANUAL: "manual",
    READY: "ready",
    TIMEOUT: "timeout"
  }, t.LogLevel = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    DEBUG: 4
  }, t.Lifecycle = i({
    preActivate: null,
    postVisitorProfileLoad: null,
    postViewsActivated: null,
    postActivate: null
  }), t.ViewActivationTypes = {
    immediate: "immediate",
    manual: "manual",
    callback: "callback",
    polling: "polling",
    URLChanged: "url_changed",
    DOMChanged: "dom_changed"
  }, t.StorageKeys = {
    PENDING_EVENTS: "pending_events"
  }, t.PluginTypes = i({
    visitorProfileProviders: null,
    viewProviders: null,
    audienceMatchers: null,
    viewMatchers: null,
    analyticsTrackers: null,
    viewTagLocators: null,
    userFeatureDefs: null,
    apiModules: null,
    changeAppliers: null,
    deciders: null,
    eventImplementations: null,
    viewTriggers: null
  }), t.ResourceTimingAttributes = i({
    connectStart: null,
    connectEnd: null,
    decodedBodySize: null,
    domainLookupStart: null,
    domainLookupEnd: null,
    duration: null,
    encodedBodySize: null,
    fetchStart: null,
    requestStart: null,
    responseStart: null,
    responseEnd: null,
    secureConnectionStart: null,
    startTime: null,
    transferSize: null
  }), t.RUMPerformanceTimingAttributes = i({
    blockTime: null
  }), t.AttributionTypes = i({
    FIRST_TOUCH: null,
    LAST_TOUCH: null
  }), t.SandboxedFunctions = i({
    XMLHttpRequest: null
  }), t.PerformanceData = i({
    performance_marks: null,
    resource_timing: null,
    performance_timing: null
  }), t.PerformanceCounters = i({
    mutation_observer_invocation: null,
    polling_invocation: null,
    match_selector_invocation: null
  }), t.VisitorStorageKeys = {
    EVENTS: "events",
    EVENT_QUEUE: "event_queue",
    LAYER_MAP: "layer_map",
    LAYER_STATES: "layer_states",
    SESSION_STATE: "session_state",
    VISITOR_PROFILE: "visitor_profile",
    VARIATION_MAP: "variation_map",
    TRACKER_OPTIMIZELY: "tracker_optimizely"
  }
}), (function(e, t, n) {
  function i(e) {
    var t = [Array.prototype],
      n = [];
    r.each(t, (function(e) {
      r.isUndefined(e.toJSON) || (n.push(e.toJSON), delete e.toJSON)
    }));
    var i, a;
    try {
      i = e()
    } catch (e) {
      a = e
    } finally {
      r.each(n, (function(e, n) {
        t[n].toJSON = e
      }))
    }
    if (a) throw a;
    return i
  }
  var r = n(2);
  t.stringify = function() {
    return i(function() {
      return JSON.stringify.apply(null, this)
    }.bind(arguments))
  }, t.parse = JSON.parse
}), (function(e, t, n) {
  var i = n(2),
    r = n(19),
    a = n(12),
    o = r.create(),
    s = {
      action_data: n(20),
      async_request: n(22),
      audience_data: n(23),
      change_data: n(24),
      cleanup: n(25),
      cookie_options: n(26),
      event_data: n(27),
      event_emitter: n(28),
      dimension_data: n(29),
      directive: n(30),
      global: n(31),
      global_state: n(32),
      integration_settings: n(33),
      layer: n(34),
      layer_data: n(35),
      log: n(37),
      observed_redirect: n(38),
      pending_events: n(39),
      performance: n(40),
      plugins: n(41),
      provider_status: n(42),
      pending_redirect: n(43),
      rum: n(44),
      sandbox: n(45),
      session: n(46),
      tracker_optimizely: n(47),
      ua_data: n(48),
      view: n(49),
      view_data: n(50),
      visitor: n(51),
      visitor_attribute_entity: n(52),
      visitor_events: n(53),
      visitor_events_manager: n(59),
      visitor_id: n(60),
      visitor_bucketing: n(61),
      xdomain: n(62)
    };
  s["group_data"] = n(63), a.registerStores(s), i.forOwn(s, (function(e, t) {
    o.register("stores/" + t, a.getStore(t))
  })), e.exports = o
}), (function(e, t, n) {
  function i() {
    this.W = {}
  }
  var r = n(2);
  i.prototype.register = function(e, t) {
    if (1 === arguments.length) {
      var n = this;
      return void r.each(e, (function(e, t) {
        n.register(t, e)
      }))
    }
    if (this.W[e]) throw new Error("Module already registered for: " + e);
    this.W[e] = t
  }, i.prototype.get = function(e) {
    return this.W[e]
  }, i.prototype.getModuleKeys = function() {
    var e = this.W;
    return r.keys(e)
  }, i.prototype.evaluate = function(e) {
    var t = e.length,
      n = e.slice(0, t - 1),
      i = e[t - 1];
    if ("function" != typeof i) throw new Error("Evaluate must take a function as last element in array");
    var a = r.map(n, this.get.bind(this));
    return i.apply(null, a)
  }, i.prototype.reset = function() {
    this.W = {}
  }, e.exports = {
    create: function() {
      return new i
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(21),
    o = n(15);
  e.exports = {
    initialize: function() {
      this.z = {
        actions: {},
        actionState: {}
      }, this.on(r.DATA_LOADED, this.X), this.on(r.ACTION_EXECUTED, this.Q), this.on(r.SET_CHANGE_APPLIER, this.$), this.on(r.REMOVE_ACTION_STATE, this.J)
    },
    X: function(e) {
      var t = this;
      i.isEmpty(e.data.layers) || (i.each(e.data.layers, (function(e) {
        var n;
        if (e.changes) {
          var r = "layerId:" + e.id;
          n = {
            id: r,
            layerId: e.id,
            changeSet: e.changes,
            type: "layer"
          }, a.deepFreeze(n), t.z.actions[r] = n
        }
        i.each(e.experiments, (function(r) {
          if (r.changes) {
            var o = "experimentId:" + r.id;
            n = {
              id: o,
              layerId: e.id,
              experimentId: r.id,
              changeSet: r.changes,
              type: "experiment"
            }, a.deepFreeze(n), t.z.actions[o] = n
          }
          i.each(r.variations, (function(o) {
            i.each(o.actions, (function(i) {
              var s = i.pageId || i.viewId,
                u = r.id + ":" + o.id + ":" + s;
              n = {
                id: u,
                layerId: e.id,
                experimentId: r.id,
                variationId: o.id,
                pageId: s,
                changeSet: i.changes,
                type: "variation"
              }, a.deepFreeze(n), t.z.actions[u] = n
            }))
          }))
        }))
      })), this.emitChange())
    },
    Q: function(e) {
      var t = e.actionId;
      i.isUndefined(t) || this.z.actionState[t] || (this.z.actionState[t] = {})
    },
    $: function(e) {
      var t = e.actionId,
        n = e.changeId;
      return this.z.actionState[t] ? void(this.z.actionState[t][n] = e.changeApplier) : void o.warn("Action Data / Attempted to set changeApplier for inactive action: ", t)
    },
    J: function(e) {
      delete this.z.actionState[e.actionId]
    },
    get: function(e) {
      return a.safeReference(this.z.actions[e])
    },
    getActionState: function(e) {
      return a.safeReference(this.z.actionState[e])
    },
    getByChangeId: function(e) {
      return i.find(this.z.actions, {
        changeSet: [{
          id: e
        }]
      })
    },
    getAllActionIdsByPageId: function(e) {
      return i.map(i.filter(this.z.actions, {
        pageId: e
      }), "id")
    },
    getChangeApplier: function(e, t) {
      var n = this.z.actionState[t];
      if (n) return n[e]
    },
    getExperimentVariationActions: function(e, t) {
      return a.safeReference(i.filter(this.z.actions, {
        experimentId: e,
        variationId: t
      }))
    },
    getLayerActions: function(e) {
      return a.safeReference(i.filter(this.z.actions, {
        id: "layerId:" + e
      }))
    },
    getExperimentActions: function(e) {
      return a.safeReference(i.filter(this.z.actions, {
        id: "experimentId:" + e
      }))
    },
    getAll: function() {
      return a.safeReference(i.values(this.z.actions))
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = !1;
  t.deepFreeze = function e(t) {
    r && i.isObject(t) && !i.isFunction(t) && (i.forOwn(t, e), Object.freeze(t))
  }, t.safeReference = function e(t) {
    return r ? !i.isObject(t) || i.isFunction(t) || Object.isFrozen(t) ? t : i.isArray(t) ? i.map(t, e) : i.reduce(t, (function(t, n, i) {
      return t[i] = e(n), t
    }), {}) : i.cloneDeep(t)
  }
}), (function(e, t, n) {
  var i = n(8);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(i.REGISTER_ASYNC_DEFERRED, this.Z), this.on(i.RESOLVE_DEFERRED, this.ee), this.on(i.REJECT_DEFERRED, this.te)
    },
    getRequest: function(e) {
      return this.z[e]
    },
    getPromise: function(e) {
      var t = this.getRequest(e);
      if (t) return t.promise
    },
    Z: function(e) {
      this.z[e.source] = {
        promise: e.promise,
        resolver: e.resolver,
        rejecter: e.rejecter
      }
    },
    ee: function(e) {
      var t = this.getRequest(e.source);
      if (!t) throw new Error("No request registered for source: " + e.source);
      t.resolver(e.resolveWith)
    },
    te: function(e) {
      var t = this.getRequest(e.source);
      if (!t) throw new Error("No request registered for source: " + e.source);
      if (!t.rejecter) throw new Error("No rejecter registered for source: " + e.source);
      t.rejecter(e.rejectWith)
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(21);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.DATA_LOADED, this.X)
    },
    X: function(e) {
      i.isEmpty(e.data.audiences) || (i.each(e.data.audiences, function(e) {
        a.deepFreeze(e), this.z[e.id] = e
      }.bind(this)), this.emitChange())
    },
    getAll: function() {
      return a.safeReference(i.values(this.z))
    },
    getAudiencesMap: function() {
      return a.safeReference(this.z)
    },
    get: function(e) {
      return a.safeReference(this.z[e])
    },
    getAudienceName: function(e) {
      var t = i.find(i.values(this.z), {
        id: e
      });
      return t.name || "Aud " + e
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(21);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.ADD_CHANGE, this.ne), this.on(r.DATA_LOADED, this.X)
    },
    getChange: function(e) {
      return this.z[e]
    },
    X: function(e) {
      i.isEmpty(e.data.changes) || i.each(e.data.changes, this.ne.bind(this))
    },
    ne: function(e) {
      a.deepFreeze(e), this.z[e.id] = e, this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(16);
  e.exports = {
    initialize: function() {
      this.z = {}, i.each(a.Lifecycle, function(e) {
        this.z[e] = []
      }.bind(this)), this.on(r.ADD_CLEANUP_FN, this.re), this.on(r.CLEAR_CLEANUP_FN, this.ae)
    },
    getCleanupFns: function(e) {
      return i.cloneDeep(this.z[e])
    },
    re: function(e) {
      this.z[e.lifecycle].push(e.cleanupFn), this.emitChange()
    },
    ae: function(e) {
      var t = this.z[e.lifecycle];
      if (e.cleanupFn) {
        var n = t.indexOf(e.cleanupFn);
        n > -1 && (t.splice(n, 1), this.emitChange())
      } else this.z[e.lifecycle] = [], this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(8),
    r = 31536e4;
  e.exports = {
    initialize: function() {
      this.z = {
        currentDomain: null,
        defaultAgeSeconds: r
      }, this.on(i.SET_COOKIE_DOMAIN, this.oe), this.on(i.SET_COOKIE_AGE, this.se)
    },
    getCurrentDomain: function() {
      return this.z.currentDomain
    },
    getDefaultAgeInSeconds: function() {
      return this.z.defaultAgeSeconds
    },
    oe: function(e) {
      this.z.currentDomain = e, this.emitChange()
    },
    se: function(e) {
      this.z.defaultAgeSeconds = e, this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(21);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.DATA_LOADED, this.X)
    },
    getAll: function() {
      return a.safeReference(i.values(this.z))
    },
    getEventsMap: function() {
      return a.safeReference(this.z)
    },
    get: function(e) {
      return a.safeReference(this.z[e])
    },
    getByApiName: function(e) {
      return a.safeReference(i.find(i.values(this.z), {
        apiName: e
      }))
    },
    getByPageId: function(e) {
      return a.safeReference(i.filter(this.z, {
        pageId: e
      }))
    },
    X: function(e) {
      i.isEmpty(e.data.events) || (i.each(e.data.events, function(e) {
        e.pageId || (e.pageId = e.viewId), a.deepFreeze(e), this.z[e.id] = e
      }.bind(this)), this.emitChange())
    }
  }
}), (function(e, t, n) {
  function i(e) {
    var t = [];
    return e && r.isObject(e) ? (e.type && t.push(e.type), t.push(o), e.type && e.name && t.push(e.name), t.join("")) : o
  }
  var r = n(2),
    a = n(8),
    o = "|";
  e.exports = {
    initialize: function() {
      this.z = {
        handlers: {}
      }, this.on(a.ADD_EMITTER_HANDLER, this.ue), this.on(a.REMOVE_EMITTER_HANDLER, this.ce)
    },
    getHandlers: function(e, t) {
      var n = [null, {
          type: e.type
        }, {
          type: e.type,
          name: e.name
        }],
        a = [];
      return r.each(n, function(e) {
        var t = i(e),
          n = this.z.handlers[t];
        n && (a = a.concat(n))
      }.bind(this)), t && (a = r.filter(a, (function(e) {
        return !e.publicOnly
      }))), a
    },
    ue: function(e) {
      var t = i(e.filter);
      this.z.handlers[t] || (this.z.handlers[t] = []), this.z.handlers[t].push({
        handler: e.handler,
        token: e.token,
        publicOnly: !!e.publicOnly,
        emitErrors: !!e.emitErrors
      }), this.emitChange()
    },
    ce: function(e) {
      var t = !1,
        n = e.token;
      r.forOwn(this.z.handlers, function(e, i) {
        var a = r.filter(e, (function(e) {
          return e.token !== n
        }));
        a.length !== e.length && (t = !0, this.z.handlers[i] = a)
      }.bind(this)), t && this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(21);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.DATA_LOADED, this.X)
    },
    X: function(e) {
      i.isEmpty(e.data.dimensions) || (i.each(e.data.dimensions, function(e) {
        a.deepFreeze(e), this.z[e.id] = e
      }.bind(this)), this.emitChange())
    },
    getAll: function() {
      return a.safeReference(i.values(this.z))
    },
    getById: function(e) {
      return a.safeReference(this.z[e])
    },
    getByApiName: function(e) {
      return a.safeReference(i.find(i.values(this.z), {
        apiName: e
      }))
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        disabled: !1,
        forceAudienceIds: [],
        forceVariationIds: [],
        alreadyInitialized: !1,
        mutationObserverAPISupported: !1,
        isEditor: !1,
        isPreview: !1,
        isLegacyPreview: !1,
        isSlave: !1,
        previewLayerIds: [],
        projectToken: null,
        shouldOptOut: !1,
        trackingDisabled: !1,
        isRunningInV2Editor: !1,
        isRunningInDesktopApp: !1,
        forceTracking: !1
      }, this.on(r.LOAD_DIRECTIVE, this.le)
    },
    getAll: function() {
      return i.cloneDeep(this.z)
    },
    conflictInObservingChanges: function() {
      return !1
    },
    isDisabled: function() {
      return this.z.disabled
    },
    isEditor: function() {
      return this.z.isEditor
    },
    clientHasAlreadyInitialized: function() {
      return this.z.alreadyInitialized
    },
    getForceAudienceIds: function() {
      return this.z.forceAudienceIds
    },
    getForceVariationIds: function() {
      return this.z.forceVariationIds
    },
    getPreviewLayerIds: function() {
      return this.z.previewLayerIds
    },
    getProjectToken: function() {
      return this.z.projectToken
    },
    getForceTracking: function() {
      return this.z.forceTracking
    },
    shouldActivate: function() {
      return !this.z.isEditor && !this.isDisabled()
    },
    shouldBootstrapDataForPreview: function() {
      return this.z.isPreview
    },
    shouldBootstrapDataForEditor: function() {
      return this.z.isEditor
    },
    shouldInitialize: function() {
      return !(this.shouldOptOut() || this.shouldLoadPreview() || this.isDisabled() || this.getProjectToken())
    },
    shouldLoadPreview: function() {
      return !(this.z.isPreview || this.z.isLegacyPreview || !this.getProjectToken() || this.z.isEditor)
    },
    shouldBailForDesktopApp: function() {
      return !this.z.isEditor && this.z.isRunningInDesktopApp
    },
    shouldLoadInnie: function() {
      return !this.z.isSlave && !this.z.isEditor && this.z.isRunningInV2Editor
    },
    shouldObserveChangesIndefinitely: function() {
      return !1
    },
    shouldOptOut: function() {
      return this.z.shouldOptOut
    },
    shouldSendTrackingData: function() {
      return !this.z.trackingDisabled && (!!this.z.forceTracking || !this.z.isPreview && i.isEmpty(this.getForceVariationIds()) && i.isEmpty(this.getForceAudienceIds()))
    },
    isSlave: function() {
      return this.z.isSlave
    },
    isRunningInDesktopApp: function() {
      return this.z.isRunningInDesktopApp
    },
    isRunningInV2Editor: function() {
      return this.z.isRunningInV2Editor
    },
    le: function(e) {
      i.extend(this.z, e), this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        holdback: 0,
        isGlobalHoldback: null,
        listTargetingCookies: [],
        revision: null,
        projectId: null,
        accountId: null,
        namespace: null,
        activationId: null,
        activationTimestamp: null,
        dcpServiceId: null,
        dcpKeyfieldLocators: [],
        recommenderServices: [],
        anonymizeIP: null,
        projectJS: null,
        snippetId: null,
        plugins: [],
        domContentLoaded: !1
      }, this.on(r.DATA_LOADED, this.de), this.on(r.ACTIVATE, this.fe), this.on(r.RECORD_GLOBAL_DECISION, this.ge), this.on(r.SET_DOMCONTENTLOADED, this.pe)
    },
    getRevision: function() {
      return this.z.revision
    },
    getGlobalHoldbackThreshold: function() {
      return this.z.holdback
    },
    getProjectId: function() {
      return this.z.projectId
    },
    getSnippetId: function() {
      return this.z.snippetId
    },
    getAccountId: function() {
      return this.z.accountId
    },
    getNamespace: function() {
      return this.z.namespace
    },
    getActivationId: function() {
      return this.z.activationId
    },
    getActivationTimestamp: function() {
      return this.z.activationTimestamp
    },
    getAnonymizeIP: function() {
      return this.z.anonymizeIP
    },
    isGlobalHoldback: function() {
      return !!this.z.isGlobalHoldback
    },
    getListTargetingCookieNames: function() {
      return this.z.listTargetingCookies.slice()
    },
    getDCPServiceId: function() {
      return this.z.dcpServiceId
    },
    getDCPKeyfieldLocators: function() {
      return this.z.dcpKeyfieldLocators
    },
    getRecommenderServices: function() {
      return this.z.recommenderServices
    },
    getProjectJS: function() {
      return this.z.projectJS
    },
    getPlugins: function() {
      return this.z.plugins
    },
    domContentLoadedHasFired: function() {
      return this.z.domContentLoaded
    },
    fe: function(e) {
      this.z.activationId = e.activationId, this.z.activationTimestamp = e.activationTimestamp, this.z.isGlobalHoldback = null
    },
    ge: function(e) {
      var t = e.isGlobalHoldback;
      if (null !== this.z.isGlobalHoldback && this.z.isGlobalHoldback !== t) throw new Error("Attempted to change already set global holdback!");
      this.z.isGlobalHoldback = t, this.emitChange()
    },
    de: function(e) {
      var t = i.pick(e.data, ["holdback", "accountId", "projectId", "snippetId", "namespace", "revision", "listTargetingCookies", "dcpServiceId", "dcpKeyfieldLocators", "recommenderServices", "anonymizeIP", "plugins", "projectJS"]);
      if (0 !== i.keys(t).length) {
        var n = {
          listTargetingCookies: [],
          dcpServiceId: null,
          dcpKeyfieldLocators: []
        };
        i.extend(this.z, n, t), this.emitChange()
      }
    },
    pe: function() {
      this.z.domContentLoaded = !0, this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        effectiveReferrer: null,
        effectiveVariationId: null
      }, this.on(r.INITIALIZE_STATE, this.he)
    },
    getEffectiveReferrer: function() {
      return this.z.effectiveReferrer
    },
    getEffectiveVariationId: function() {
      return this.z.effectiveVariationId
    },
    he: function(e) {
      i.isUndefined(e.effectiveReferrer) || (this.z.effectiveReferrer = e.effectiveReferrer), i.isUndefined(e.effectiveVariationId) || (this.z.effectiveVariationId = e.effectiveVariationId), this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.DATA_LOADED, this.X), this.on(r.SET_INTEGRATION_SETTINGS, this.ve)
    },
    X: function(e) {
      i.isEmpty(e.data.integrationSettings) || (i.each(e.data.integrationSettings, function(e) {
        this.z[e.id] = e
      }.bind(this)), this.emitChange())
    },
    ve: function(e) {
      var t = this.z[e.id];
      t ? i.extend(t, e) : this.z[e.id] = e
    },
    getAll: function() {
      return i.cloneDeep(i.values(this.z))
    },
    get: function(e) {
      return i.cloneDeep(this.z[e])
    },
    getReference: function(e) {
      return this.z[e]
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(15),
    o = "*";
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.LOAD_PERSISTED_LAYER_STATES, this._e), this.on(r.RECORD_LAYER_DECISION, this.Ee), this.on(r.RECORD_LAYER_DECISION_EVENT_ID, this.me)
    },
    getLayerState: function(e, t) {
      if (this.z[e]) {
        var n = this.z[e];
        if (i.keys(n).length > 1 && !t) throw new Error("View Id must be specified when more than one layerState for layer.");
        return t ? i.cloneDeep(i.find(n, {
          pageId: t
        })) : i.cloneDeep(n[o])
      }
    },
    getLayerStates: function(e) {
      var t = [];
      for (var n in this.z) i.forEach(this.z[n], (function(n) {
        (i.isUndefined(e) || n.namespace === e) && t.push(i.cloneDeep(n))
      }));
      return t
    },
    _e: function(e) {
      e.merge || (this.z = {}), i.each(e.layerStates, function(e) {
        var t = e.layerId;
        e.pageId || (e.pageId = e.viewId);
        var n = e.pageId || o,
          r = this.z[t];
        if (i.isUndefined(r)) this.z[t] = {}, this.z[t][n] = e;
        else {
          var a = r[n];
          (!a || e.decisionTimestamp > (a.decisionTimestamp || 0)) && (this.z[t][n] = e)
        }
      }.bind(this)), this.emitChange()
    },
    Ee: function(e) {
      var t = {
          layerId: e.layerId,
          revision: e.revision,
          namespace: e.namespace,
          pageId: e.pageId,
          decisionTicket: e.decisionTicket,
          decision: e.decision,
          decisionActivationId: e.activationId,
          decisionTimestamp: e.timestamp,
          decisionEventId: null
        },
        n = this.z[e.layerId] || {};
      e.pageId ? (delete n[o], n[e.pageId] = t) : (n = {}, n[o] = t), this.z[e.layerId] = n, this.emitChange()
    },
    me: function(e) {
      var t = e.layerId,
        n = e.pageId || o;
      return this.z[t] ? this.z[t][n] ? (this.z[t][n].decisionEventId = e.decisionId, void this.emitChange()) : void a.warn("Not recording decision event: Layer state not found for view", n) : void a.warn("Not recording decision event: Campaign not registered", t)
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(21),
    o = n(36);
  e.exports = {
    initialize: function() {
      this.z = {
        layers: {},
        experiments: {},
        variations: {}
      }, this.on(r.DATA_LOADED, this.X)
    },
    X: function(e) {
      if (!i.isEmpty(e.data.layers)) {
        var t = this;
        i.each(e.data.layers, (function(e) {
          i.each(e.experiments, (function(n) {
            e.pageIds || (e.pageIds = e.viewIds), n.campaignName || o.isSingleExperimentPolicy(e.policy) ? o.isSingleExperimentPolicy(e.policy) && e.groupId && (n.groupId = e.groupId) : n.campaignName = e.name, i.each(n.variations, (function(e) {
              i.each(e.actions, (function(e) {
                e.pageId || (e.pageId = e.viewId)
              })), t.z.variations[e.id] = e
            })), t.z.experiments[n.id] = n
          })), a.deepFreeze(e), t.z.layers[e.id] = e
        })), this.emitChange()
      }
    },
    getAll: function() {
      return a.safeReference(i.values(this.z.layers))
    },
    getCampaignsMap: function() {
      return a.safeReference(this.z.layers)
    },
    getExperimentsMap: function() {
      return a.safeReference(this.z.experiments)
    },
    getVariationsMap: function() {
      return a.safeReference(this.z.variations)
    },
    getCount: function() {
      return i.keys(this.z.layers).length
    },
    getAllByPageIds: function(e) {
      return a.safeReference(i.filter(i.values(this.z.layers), (function(t) {
        return i.some(e, i.partial(i.includes, t.pageIds))
      })))
    },
    get: function(e) {
      return a.safeReference(this.z.layers[e])
    },
    getLayerByExperimentId: function(e) {
      var t = i.values(this.z.layers),
        n = i.find(t, (function(t) {
          return i.find(t.experiments, {
            id: e
          })
        }));
      return a.safeReference(n)
    },
    getExperimentByVariationId: function(e) {
      var t, n = i.values(this.z.layers);
      return i.some(n, (function(n) {
        return i.some(n.experiments, (function(n) {
          return i.find(n.variations, {
            id: e
          }) && (t = n), t
        })), t
      })), a.safeReference(t)
    }
  }
}), (function(e, t) {
  var n = "single_experiment",
    i = "multivariate";
  t.isSingleExperimentPolicy = function(e) {
    return e === n || e === i
  }
}), (function(e, t, n) {
  var i = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        logs: []
      }, this.on(i.LOG, this.Ie)
    },
    getLogs: function() {
      return this.z.logs
    },
    Ie: function(e) {
      this.z.logs.push(e), this.emitChange()
    },
    k: function() {
      return this.z.logs.slice()
    }
  }
}), (function(e, t, n) {
  var i = n(8),
    r = n(21);
  e.exports = {
    initialize: function() {
      this.z = {
        data: null,
        hasTracked: null
      }, this.on(i.LOAD_REDIRECT_DATA, this.ye), this.on(i.REGISTER_TRACKED_REDIRECT_DATA, this.Se)
    },
    get: function() {
      return r.safeReference(this.z.data)
    },
    hasTracked: function() {
      return this.z.hasTracked
    },
    ye: function(e) {
      r.deepFreeze(e), this.z.data = e, this.z.hasTracked = !1, this.emitChange()
    },
    Se: function() {
      this.z.hasTracked = !0
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(17),
    o = 1e3;
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.SET_PENDING_EVENT, this.Te), this.on(r.REMOVE_PENDING_EVENT, this.Ae), this.on(r.LOAD_PENDING_EVENTS, this.we)
    },
    getEvents: function() {
      return this.z
    },
    getEventsString: function() {
      return a.stringify(this.z)
    },
    Te: function(e) {
      i.keys(this.z).length >= o && this.De();
      var t = e.id,
        n = e.retryCount;
      this.z[t] && this.z[t].retryCount === n || (this.z[t] = {
        id: t,
        timeStamp: e.timeStamp,
        data: e.data,
        retryCount: n
      }, this.emitChange())
    },
    Ae: function(e) {
      delete this.z[e.id], this.emitChange()
    },
    we: function(e) {
      this.z = e.events, this.De(), this.emitChange()
    },
    De: function() {
      for (var e = i.sortBy(this.z, "timeStamp"), t = 0; t <= e.length - o; t++) delete this.z[e[t].id];
      this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(16);
  e.exports = {
    initialize: function() {
      this.z = {}, this.z[a.PerformanceData.performance_marks] = {}, this.on(r.SET_PERFORMANCE_MARKS_DATA, this.be)
    },
    be: function(e) {
      i.isUndefined(this.z[a.PerformanceData.performance_marks][e.name]) && (this.z[a.PerformanceData.performance_marks][e.name] = []), this.z[a.PerformanceData.performance_marks][e.name].push(e.data), this.emitChange()
    },
    getMarks: function() {
      return i.mapValues(this.z[a.PerformanceData.performance_marks], (function(e) {
        return i.map(e, (function(e) {
          return [e.startTime, e.duration]
        }))
      }))
    },
    getDurationsFor: function(e) {
      return i.reduce(e, function(e, t) {
        var n = this.z[a.PerformanceData.performance_marks][t];
        return n && (e[t] = Math.round(i.reduce(n, (function(e, t) {
          return e + t.duration
        }), 0))), e
      }.bind(this), {})
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(16),
    o = n(15);
  e.exports = {
    initialize: function() {
      this.z = i.mapValues(a.PluginTypes, (function() {
        return {}
      })), this.on(r.REGISTER_PLUGIN, this.Re)
    },
    Re: function(e) {
      var t = e.type,
        n = e.name,
        i = e.plugin;
      if (!(t && n && i)) throw new Error("Missing information needed to register plugins: " + t + ":" + n);
      if (!this.z[t]) throw new Error("Invalid plugin type specified: " + t);
      this.z[t][n] = i, o.debug("Plugin Store: Registering Plugin :", e)
    },
    getAllPlugins: function(e) {
      if (e) {
        if (this.z[e]) return this.z[e];
        throw new Error("Invalid plugin type: " + e)
      }
      return this.z
    },
    getPlugin: function(e, t) {
      if (!t || !e) throw new Error("Missing plugin parameters");
      var n = this.getAllPlugins(e);
      return n[t] || null
    }
  }
}), (function(e, t, n) {
  var i = n(8);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(i.SET_VISITOR_ATTRIBUTE_PENDING, this.Oe)
    },
    getPendingAttributeValue: function(e) {
      if (this.z[e]) return this.z[e].pending
    },
    Oe: function(e) {
      this.z[e.key] = {
        pending: e.pending
      }, this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        layerId: null
      }, this.on(r.ANNOUNCE_PENDING_REDIRECT, this.ye)
    },
    isExpectingRedirect: function() {
      return i.isString(this.z.layerId)
    },
    getLayerId: function() {
      return this.z.layerId
    },
    ye: function(e) {
      this.isExpectingRedirect() || (this.z.layerId = e.layerId, this.emitChange())
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        inRumSample: !1,
        id: null,
        src: null,
        RumHost: null,
        data: {},
        apis: {},
        DOMObservation: {}
      }, this.on(r.SET_RUM_DATA, this.Ce), this.on(r.RECORD_API_USAGE, this.Ne), this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE, this.Pe)
    },
    Ce: function(e) {
      i.merge(this.z, e), this.emitChange()
    },
    Ne: function(e) {
      this.z.apis[e.methodName] || (this.z.apis[e.methodName] = 0), this.z.apis[e.methodName]++, this.emitChange()
    },
    Pe: function(e) {
      this.z.DOMObservation[e.counterName] || (this.z.DOMObservation[e.counterName] = 0), this.z.DOMObservation[e.counterName]++, this.emitChange()
    },
    getSampleRum: function() {
      return this.z.inRumSample
    },
    getRumId: function() {
      return this.z.id
    },
    getRumHost: function() {
      return this.z.RumHost
    },
    getApiData: function() {
      return this.z.apis
    },
    getDOMObservationData: function() {
      return this.z.DOMObservation
    },
    getRumData: function() {
      return i.cloneDeep(this.z.data)
    },
    getScriptSrc: function() {
      return this.z.src
    }
  }
}), (function(e, t, n) {
  var i = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        initialized: !1,
        natives: {}
      }, this.on(i.SANDBOXED_FUNCTIONS_ADDED, this.Le)
    },
    Le: function(e) {
      if (!e.sandboxedFunctions) throw new Error("No sandboxedFunctions found in payload");
      this.z.natives = e.sandboxedFunctions, this.z.initialized = !0, this.emitChange()
    },
    getAll: function() {
      return this.z.natives
    },
    get: function(e) {
      if (!e) throw new Error("Missing name parameter");
      return this.z.natives[e] || null
    },
    isInitialized: function() {
      return this.z.initialized
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(10),
    o = n(5),
    s = 18e5;
  e.exports = {
    initialize: function() {
      this.z = {
          lastSessionTimestamp: 0,
          sessionId: null
        }, this.on(r.REFRESH_SESSION, this.Ve),
        this.on(r.LOAD_SESSION_STATE, this.ke)
    },
    getState: function() {
      return i.cloneDeep(this.z)
    },
    getSessionId: function() {
      return this.z.sessionId
    },
    ke: function(e) {
      this.z.sessionId = e.sessionId, this.z.lastSessionTimestamp = e.lastSessionTimestamp, this.emitChange()
    },
    Ve: function() {
      var e = a.now(),
        t = this.z.lastSessionTimestamp;
      (!this.z.sessionId || e - t > s) && (this.z.sessionId = o.generate()), this.z.lastSessionTimestamp = e, this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.xe(), this.on(r.FINALIZE_BATCH_SNAPSHOT, this.Fe), this.on(r.REGISTER_PREVIOUS_BATCH, this.Me), this.on(r.REGISTER_TRACKER_VISITOR, this.Ue), this.on(r.REGISTER_TRACKER_EVENT, this.Ge), this.on(r.REGISTER_TRACKER_DECISION, this.Be), this.on(r.RESET_TRACKER_EVENTS, this.ze), this.on(r.RESET_TRACKER_STORE, this.xe), this.on(r.RESET_TRACKER_PREVIOUS_BATCHES, this.je), this.on(r.SET_TRACKER_POLLING, this.He), this.on(r.SET_TRACKER_BATCHING, this.Ye), this.on(r.SET_TRACKER_SEND_EVENTS, this.Ke), this.on(r.SET_TRACKER_PERSISTABLE_STATE, this.qe), this.on(r.SET_TRACKER_DIRTY, this.We), this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES, this.Xe)
    },
    getPersistableState: function() {
      return this.z.isDirty ? this.hasEventsToSend() || this.hasPreviousBatchesToSend() ? {
        data: this.z.data,
        decisions: this.z.decisions,
        decisionEvents: this.z.decisionEvents,
        previousBatches: this.z.previousBatches
      } : {} : null
    },
    qe: function(e) {
      i.isEmpty(this.z.data) || i.isEmpty(e.data) || (this.Fe(), this.z.previousBatches.push(this.getEventBatch())), this.z.data = e.data || {}, this.z.decisions = e.decisions || [], this.z.decisionEvents = e.decisionEvents || [], i.isEmpty(this.z.previousBatches) || i.isEmpty(e.previousBatches) ? this.z.previousBatches = e.previousBatches || [] : this.z.previousBatches = this.z.previousBatches.concat(e.previousBatches), this.emitChange()
    },
    We: function(e) {
      this.z.isDirty = e, this.emitChange()
    },
    Ge: function(e) {
      var t = this.Qe();
      !i.isEmpty(t.snapshots) && i.isEmpty(this.z.decisionEvents) || this.$e(), this.Je().events.push(e.event), this.We(!0)
    },
    Be: function(e) {
      this.z.decisions.push(e.decision), this.z.decisionEvents.push(e.decisionEvent), this.We(!0)
    },
    Ue: function(e) {
      i.isEmpty(this.z.data) ? this.z.data = e.data : this.Fe(), this.z.data.visitors.push(e.visitor), this.z.decisions = e.decisions, this.z.decisionEvents = [], this.We(!0)
    },
    Me: function(e) {
      this.z.previousBatches.push(e), this.We(!0)
    },
    xe: function() {
      this.z = {
        polling: !1,
        shouldBatch: !0,
        data: {},
        decisions: [],
        decisionEvents: [],
        canSend: !1,
        isDirty: !1,
        previousBatches: []
      }, this.emitChange()
    },
    ze: function() {
      var e = this.Qe();
      this.z.data.visitors = [e], e.snapshots = [], this.We(!0)
    },
    je: function() {
      this.z.previousBatches = [], this.We(!0)
    },
    He: function(e) {
      this.z.polling = e, this.emitChange()
    },
    Ye: function(e) {
      this.z.shouldBatch = e, this.emitChange()
    },
    Ke: function(e) {
      this.z.canSend = e, this.emitChange()
    },
    getEventBatch: function() {
      return i.cloneDeep(this.z.data)
    },
    getPreviousBatches: function() {
      return i.cloneDeep(this.z.previousBatches)
    },
    Ze: function() {
      return this.z.decisionEvents.slice()
    },
    et: function() {
      this.z.decisionEvents = []
    },
    tt: function() {
      return this.z.decisions.slice()
    },
    isPolling: function() {
      return this.z.polling
    },
    shouldBatch: function() {
      return this.z.shouldBatch
    },
    Je: function() {
      return i.last(this.Qe().snapshots)
    },
    Qe: function() {
      return i.last(this.z.data.visitors)
    },
    $e: function() {
      var e = this.Ze(),
        t = this.Qe();
      t.snapshots.push({
        decisions: this.tt(),
        events: e
      }), this.et(), this.We(!0)
    },
    Fe: function() {
      this.z.decisionEvents.length > 0 && this.$e()
    },
    hasEventsToSend: function() {
      if (!i.isEmpty(this.z.decisionEvents)) return !0;
      if (!i.isEmpty(this.z.data)) {
        var e = i.some(this.z.data.visitors || [], (function(e) {
          return e.snapshots.length > 0
        }));
        if (e) return !0
      }
      return !1
    },
    hasPreviousBatchesToSend: function() {
      return !i.isEmpty(this.z.previousBatches)
    },
    canSend: function() {
      return this.z.canSend
    },
    Xe: function(e) {
      var t = this.Qe();
      t && (t.attributes = e.attributes)
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.SET_UA_DATA, this.X)
    },
    X: function(e) {
      i.isEmpty(this.z) && (this.z = e.data)
    },
    get: function() {
      return i.cloneDeep(this.z)
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(15),
    o = {
      globalTags: {},
      viewStates: {},
      shouldBatch: !1
    };
  e.exports = {
    initialize: function() {
      this.z = i.cloneDeep(o), this.on(r.REGISTER_VIEWS, this.nt), this.on(r.SET_VIEW_ACTIVE_STATE, this.it), this.on(r.UPDATE_PARSED_VIEW_METADATA, this.rt), this.on(r.UPDATE_USER_SUPPLIED_METADATA, this.at), this.on(r.TRACK_VIEW_ACTIVATED_EVENT, this.ot), this.on(r.SET_GLOBAL_TAGS, this.st), this.on(r.ACTIVATE, this.ut), this.on(r.SET_VIEW_BATCHING, this.Ye)
    },
    getAll: function() {
      var e = {};
      for (var t in this.z.viewStates) e[t] = this.getViewState(t);
      return e
    },
    shouldBatch: function() {
      return this.z.shouldBatch
    },
    getViewState: function(e) {
      var t = i.cloneDeep(this.z.viewStates[e]),
        n = this.z.globalTags;
      return t.metadata = i.extend({}, t.parsedMetadata, n, t.userSuppliedMetadata), t
    },
    getActiveViewTags: function() {
      var e = this.getActiveViewStates(),
        t = i.map(e, (function(e) {
          return e.metadata
        })),
        n = [{}].concat(t);
      return i.extend.apply(i, n)
    },
    getActivationEventId: function(e) {
      return this.z.viewStates[e] ? this.z.viewStates[e].activationEventId : null
    },
    getActiveViewStates: function() {
      return i.reduce(this.z.viewStates, function(e, t, n) {
        return this.isViewActive(n) && e.push(this.getViewState(n)), e
      }.bind(this), [])
    },
    isViewActive: function(e) {
      var t = this.z.viewStates[e];
      return t || a.warn("No Page registered with id", e), !!t.isActive
    },
    getGlobalTags: function() {
      return i.cloneDeep(this.z.globalTags)
    },
    ut: function() {
      this.z.viewStates = {}, this.emitChange()
    },
    nt: function(e) {
      i.each(e.views, function(e) {
        var t = e.id;
        this.z.viewStates[t] = {
          id: t,
          isActive: !1,
          activatedTimestamp: null,
          activationEventId: null,
          parsedMetadata: {},
          userSuppliedMetadata: {}
        }
      }.bind(this)), this.emitChange()
    },
    it: function(e) {
      var t = e.view.id;
      if (!this.z.viewStates[t]) throw new Error("No view exists with id " + t);
      this.z.viewStates[t].isActive = e.isActive, e.isActive ? this.z.viewStates[t].activatedTimestamp = e.timestamp : (this.z.viewStates[t].parsedMetadata = {}, this.z.viewStates[t].userSuppliedMetadata = {}), this.emitChange()
    },
    rt: function(e) {
      var t = e.pageId;
      if (!this.z.viewStates[t]) throw new Error("No view exists with id " + t);
      i.merge(this.z.viewStates[t].parsedMetadata, e.metadata), this.emitChange()
    },
    at: function(e) {
      var t = e.pageId;
      if (!this.z.viewStates[t]) throw new Error("No view exists with id " + t);
      i.merge(this.z.viewStates[t].userSuppliedMetadata, e.metadata), this.emitChange()
    },
    ot: function(e) {
      var t = e.pageId;
      this.z.viewStates[t] && (this.z.viewStates[t].activationEventId = e.eventData.eventId, this.emitChange())
    },
    st: function(e) {
      i.extend(this.z.globalTags, e), this.emitChange()
    },
    Ye: function(e) {
      this.z.shouldBatch = e, this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(21);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.DATA_LOADED, this.X)
    },
    getAll: function() {
      return a.safeReference(i.values(this.z))
    },
    getPagesMap: function() {
      return a.safeReference(this.z)
    },
    get: function(e) {
      return a.safeReference(this.z[e])
    },
    getByApiName: function(e) {
      return a.safeReference(i.find(i.values(this.z), {
        apiName: e
      }))
    },
    getNumberOfPages: function() {
      return i.keys(this.z).length
    },
    getAllViewsForActivationType: function(e) {
      return i.filter(i.values(this.z), {
        activationType: e
      })
    },
    X: function(e) {
      i.isEmpty(e.data.views) || (i.each(e.data.views, function(e) {
        a.deepFreeze(e), this.z[e.id] = e
      }.bind(this)), this.emitChange())
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        profile: {},
        metadata: {}
      }, this.on(r.SET_VISITOR_ATTRIBUTES, this.ct), this.on(r.LOAD_EXISTING_VISITOR_PROFILE, this.dt)
    },
    getVisitorProfile: function() {
      return this.z.profile
    },
    getVisitorProfileMetadata: function() {
      return this.z.metadata
    },
    getAttribute: function(e, t) {
      var n = this.z.profile;
      return t && (n = n[t] || {}), i.cloneDeep(n[e])
    },
    getAttributeMetadata: function(e) {
      return i.cloneDeep(this.z.metadata[e])
    },
    dt: function(e) {
      this.z.profile = e.profile, this.z.metadata = e.metadata, this.emitChange()
    },
    ct: function(e) {
      var t, n;
      i.each(e.attributes, function(e) {
        t = this.z.profile, n = this.z.metadata, e.type && (t = this.z.profile[e.type] = this.z.profile[e.type] || {}), t[e.key] = e.value, e.metadata && i.forOwn(e.metadata, function(t, i) {
          e.type && (n = this.z.metadata[e.type] = this.z.metadata[e.type] || {}), n[e.key] = n[e.key] || {}, n[e.key][i] = t
        }.bind(this))
      }.bind(this)), this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.DATA_LOADED, this.ft)
    },
    getCustomBehavioralAttributes: function() {
      return i.filter(this.z, (function(e) {
        return !!e.rule_json
      }))
    },
    getVisitorAttribute: function(e) {
      var t = i.values(this.z);
      if (e.datasourceId && (t = i.filter(t, {
          dcp_datasource_id: String(e.datasourceId)
        })), e.attributeName && e.attributeId) throw new Error("Must not specify both attribute name and attribute ID");
      if (e.attributeId) {
        var n = this.z[e.attributeId];
        if (!n) throw new Error("Unrecognized attribute ID: " + e.attributeId);
        return n
      }
      if (e.attributeName) {
        var r = i.filter(t, {
          name: e.attributeName
        });
        if (!r.length) throw new Error("Unrecognized attribute name: " + e.attributeName);
        if (r.length > 1) throw new Error("Too many attributes with name: " + e.attributeName);
        return r[0]
      }
      throw new Error("Must specify attribute name or attribute ID")
    },
    ft: function(e) {
      i.isEmpty(e.data.visitorAttributes) || (i.each(e.data.visitorAttributes, function(e) {
        this.z[e.id] = e
      }.bind(this)), this.emitChange())
    }
  }
}), (function(e, t, n) {
  var i = (n(2), n(8));
  n(54).Event;
  e.exports = {
    initialize: function() {
      this.z = {
        events: [],
        foreignEvents: {},
        foreignEventQueues: {}
      }, this.on(i.SET_VISITOR_EVENTS, this.X), this.on(i.SET_FOREIGN_VISITOR_EVENTS, this.pt), this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE, this.ht)
    },
    getEvents: function() {
      return this.z.events
    },
    getForeignEvents: function() {
      return this.z.foreignEvents
    },
    getForeignEventQueues: function() {
      return this.z.foreignEventQueues
    },
    X: function(e) {
      this.z.events = e, this.emitChange()
    },
    pt: function(e) {
      this.z.foreignEvents[e.key] = e.value
    },
    ht: function(e) {
      this.z.foreignEventQueues[e.key] = e.value
    }
  }
}), (function(e, t, n) {
  function i(e, t, n, i, r) {
    this[o.FIELDS.NAME] = e, this[o.FIELDS.TYPE] = t, a.isString(n) && n.trim().length > 0 && (this[o.FIELDS.CATEGORY] = n), i && a.keys(i).length > 0 && (this[o.FIELDS.OPTIONS] = i), a.isUndefined(r) || (this[o.FIELDS.REVENUE] = r)
  }

  function r(e, t, n) {
    this.eventBase = e, this[o.FIELDS.TIME] = t, a.isUndefined(n) || (this[o.FIELDS.SESSION_ID] = n)
  }
  var a = n(2),
    o = n(55),
    s = n(56).getFieldValue,
    u = n(57);
  t.EventBase = i, i.prototype.digest = function() {
    var e = function(e, t) {
        return encodeURIComponent(e) + "=" + encodeURIComponent(t)
      },
      t = [];
    if (t.push(e(o.FIELDS.NAME, this[o.FIELDS.NAME])), t.push(e(o.FIELDS.TYPE, this[o.FIELDS.TYPE])), this[o.FIELDS.CATEGORY] && t.push(e(o.FIELDS.CATEGORY, this[o.FIELDS.CATEGORY])), this[o.FIELDS.REVENUE] && t.push(e(o.FIELDS.REVENUE, this[o.FIELDS.REVENUE])), !this[o.FIELDS.OPTIONS]) return t.join("&");
    var n = this[o.FIELDS.OPTIONS] || {},
      i = a.filter(a.keys(n), (function(e) {
        return n.hasOwnProperty(e)
      }));
    i = i.sort();
    for (var r = 0; r < i.length; r++) t.push(e(i[r], n[i[r]]));
    return t.join("&")
  }, i.prototype.hash = function() {
    return this.hash_ ? this.hash_ : (this.hash_ = u.hashToHex(u.toByteString(this.digest()), u.Seed.BEHAVIOR_EVENT), this.hash_)
  }, i.prototype.setHash = function(e) {
    this.hash_ = e
  }, i.prototype.reHash = function() {
    this.hash_ = null, this.hash()
  }, i.prototype.equals = function(e) {
    if (this.hash() !== e.hash()) return !1;
    if (this[o.FIELDS.NAME] !== e[o.FIELDS.NAME] || this[o.FIELDS.TYPE] !== e[o.FIELDS.TYPE] || this[o.FIELDS.CATEGORY] !== e[o.FIELDS.CATEGORY] || this[o.FIELDS.REVENUE] !== e[o.FIELDS.REVENUE]) return !1;
    if (!this[o.FIELDS.OPTIONS] && !e[o.FIELDS.OPTIONS]) return !0;
    var t = this[o.FIELDS.OPTIONS] || {},
      n = e[o.FIELDS.OPTIONS] || {},
      i = a.filter(a.keys(t), (function(e) {
        return t.hasOwnProperty(e)
      })),
      r = a.filter(a.keys(n), (function(e) {
        return n.hasOwnProperty(e)
      }));
    if (i.length !== r.length) return !1;
    for (var s = 0; s < i.length; s++) {
      var u = i[s];
      if (!n.hasOwnProperty(u) || t[u] !== n[u]) return !1
    }
    return !0
  }, i.prototype.getValueOrDefault = function(e, t) {
    var n = s(this, e);
    return a.isUndefined(n) ? t : n
  }, i.prototype.setFieldValue = function(e, t) {
    e !== o.FIELDS.NAME && e !== o.FIELDS.TYPE && e !== o.FIELDS.CATEGORY && e !== o.FIELDS.REVENUE && e !== o.FIELDS.OPTIONS || (this[e] = t, this.reHash())
  }, t.Event = r, r.prototype.getValueOrDefault = function(e, t) {
    if (0 === e.length) return this;
    var n = {};
    n[o.FIELDS.TIME] = this[o.FIELDS.TIME], n[o.FIELDS.SESSION_ID] = this[o.FIELDS.SESSION_ID];
    var i = s(n, e);
    return a.isUndefined(i) ? this.eventBase.getValueOrDefault(e, t) : i
  }, r.prototype.setFieldValue = function(e, t) {
    e === o.FIELDS.TIME || e === o.FIELDS.SESSION_ID ? this[e] = t : this.eventBase.setFieldValue(e, t)
  };
  var c = {
    n: "name",
    y: "type",
    c: "category",
    r: "revenue",
    s: "session_id",
    o: "tags"
  };
  r.prototype.readableEvent = function() {
    var e, t, n = function(e) {
        return a.isString(e) ? '"' + e + '"' : e
      },
      i = this,
      r = [];
    a.each([o.FIELDS.NAME, o.FIELDS.TYPE, o.FIELDS.CATEGORY, o.FIELDS.REVENUE, o.FIELDS.SESSION_ID], (function(o) {
      e = c[o], t = i.getValueOrDefault([o]), a.isUndefined(t) || r.push(e + ": " + n(t))
    }));
    var s = [];
    if (e = c[o.FIELDS.OPTIONS], t = i.getValueOrDefault([o.FIELDS.OPTIONS]), a.isUndefined(t) || (a.each(t, (function(e, t) {
        s.push(t + ": " + String(n(e)))
      })), r.push(e + ": {\n\t\t" + s.join(",\n\t\t") + "\n\t}")), t = i.getValueOrDefault([o.FIELDS.TIME]), a.isNumber(t) && (t = n(new Date(t).toString())), !a.isUndefined(t)) {
      var u = "timestamp";
      r.push(u + ": " + t)
    }
    return "{\n\t" + r.join(",\n\t") + "\n}"
  }, r.prototype.toObject = function(e) {
    var t, n, i = {},
      r = this;
    a.each([o.FIELDS.NAME, o.FIELDS.TYPE, o.FIELDS.CATEGORY, o.FIELDS.REVENUE, o.FIELDS.OPTIONS], (function(e) {
      t = c[e], n = r.getValueOrDefault([e], e === o.FIELDS.OPTIONS ? {} : void 0), a.isUndefined(n) || (i[t] = n)
    }));
    var s = c[o.FIELDS.OPTIONS],
      u = c[o.FIELDS.REVENUE];
    if (e && e.revenueAsTag && i[u] && (i[s] = i[s] || {}, i[s][u] = i[u], delete i[u]), n = r.getValueOrDefault([o.FIELDS.TIME]), a.isNumber(n))
      if (e && e.timeAsTimestamp) {
        var l = "timestamp";
        i[l] = new Date(n)
      } else {
        var d = "time";
        i[d] = n
      }
    return i
  }
}), (function(e, t) {
  t.FIELDS = {
    NAME: "n",
    TIME: "t",
    TYPE: "y",
    CATEGORY: "c",
    REVENUE: "r",
    SESSION_ID: "s",
    OPTIONS: "o"
  }, t.FIELDS_V0_2 = {
    name: t.FIELDS.NAME,
    time: t.FIELDS.TIME,
    type: t.FIELDS.TYPE,
    category: t.FIELDS.CATEGORY,
    tags: t.FIELDS.OPTIONS
  }
}), (function(e, t, n) {
  var i = n(2);
  t.getFieldValue = function(e, t) {
    if (i.isArray(t)) {
      for (var n = e, r = 0; r < t.length; r++) {
        var a = t[r];
        if (!i.isObject(n) || !n.hasOwnProperty(a)) return;
        n = n[a]
      }
      return n
    }
  }
}), (function(e, t, n) {
  var i = n(58).v3,
    r = {
      IGNORING: 0,
      BUCKETING: 1,
      FALLBACK: 2,
      HOLDBACK: 3,
      BEHAVIOR_EVENT: 2716770798
    },
    a = Math.pow(2, 32),
    o = function(e, t, n) {
      return Math.floor(u(e, t) * n)
    },
    s = function(e, t) {
      var n = i(e, t);
      return (n >>> 16).toString(16) + (65535 & n).toString(16)
    },
    u = function(e, t) {
      var n = i(e, t);
      return (n >>> 0) / a
    },
    c = function(e) {
      var t = String.fromCharCode;
      return e.replace(/[\S\s]/gi, (function(e) {
        e = e.charCodeAt(0);
        var n = t(255 & e);
        return e > 255 && (n = t(e >>> 8 & 255) + n), e > 65535 && (n = t(e >>> 16) + n), n
      }))
    };
  e.exports = {
    Seed: r,
    hashToHex: s,
    hashToInt: o,
    hashToReal: u,
    toByteString: c
  }
}), (function(e, t, n) {
  !(function() {
    function t(e, t) {
      for (var n, i = e.length, r = t ^ i, a = 0; i >= 4;) n = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), n ^= n >>> 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ n, i -= 4, ++a;
      switch (i) {
        case 3:
          r ^= (255 & e.charCodeAt(a + 2)) << 16;
        case 2:
          r ^= (255 & e.charCodeAt(a + 1)) << 8;
        case 1:
          r ^= 255 & e.charCodeAt(a), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16)
      }
      return r ^= r >>> 13, r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16), r ^= r >>> 15, r >>> 0
    }

    function n(e, t) {
      var n, i, r, a, o, s, u, c;
      for (n = 3 & e.length, i = e.length - n, r = t, o = 3432918353, s = 461845907, c = 0; c < i;) u = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24, ++c, u = (65535 & u) * o + (((u >>> 16) * o & 65535) << 16) & 4294967295, u = u << 15 | u >>> 17, u = (65535 & u) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295, r ^= u, r = r << 13 | r >>> 19, a = 5 * (65535 & r) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295, r = (65535 & a) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
      switch (u = 0, n) {
        case 3:
          u ^= (255 & e.charCodeAt(c + 2)) << 16;
        case 2:
          u ^= (255 & e.charCodeAt(c + 1)) << 8;
        case 1:
          u ^= 255 & e.charCodeAt(c), u = (65535 & u) * o + (((u >>> 16) * o & 65535) << 16) & 4294967295, u = u << 15 | u >>> 17, u = (65535 & u) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295, r ^= u
      }
      return r ^= e.length, r ^= r >>> 16, r = 2246822507 * (65535 & r) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 13, r = 3266489909 * (65535 & r) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 16, r >>> 0
    }
    var i = n;
    i.v2 = t, i.v3 = n;
    e.exports = i
  })()
}), (function(e, t, n) {
  var i = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        baseMap: {},
        eventQueue: [],
        lastEvent: null,
        initialized: !1,
        cleared: !1
      }, this.on(i.UPDATE_BEHAVIOR_STORE, this.vt)
    },
    getBaseMap: function() {
      return this.z.baseMap
    },
    getEventQueue: function() {
      return this.z.eventQueue
    },
    getLastEvent: function() {
      return this.z.lastEvent
    },
    getCleared: function() {
      return this.z.cleared
    },
    getInitialized: function() {
      return this.z.initialized
    },
    vt: function(e) {
      this.z[e.key] = e.value
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        randomId: null,
        UUID: null
      }, this.on(r.SET_VISITOR_ID, this.X)
    },
    getBucketingId: function() {
      return this.getUUID() || this.getRandomId()
    },
    getRandomId: function() {
      return this.z.randomId
    },
    getUUID: function() {
      return this.z.UUID
    },
    X: function(e) {
      i.extend(this.z, e), this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(17);
  e.exports = {
    initialize: function() {
      this.z = {
        variationIdMap: {},
        preferredLayerMap: {}
      }, this.on(r.UPDATE_VARIATION_ID_MAP, this._t), this.on(r.MERGE_VARIATION_ID_MAP, this.Et), this.on(r.UPDATE_PREFERRED_LAYER_MAP, this.mt), this.on(r.MERGE_PREFERRED_LAYER_MAP, this.It)
    },
    getVariationIdMap: function() {
      return i.cloneDeep(this.z.variationIdMap)
    },
    getVariationIdMapString: function() {
      return a.stringify(this.z.variationIdMap)
    },
    _t: function(e) {
      var t = this.z.variationIdMap,
        n = t[e.layerId] || {};
      n[e.experimentId] !== e.variationId && (n[e.experimentId] = e.variationId, this.z.variationIdMap[e.layerId] = n, this.emitChange())
    },
    Et: function(e) {
      var t = this.getVariationIdMap(),
        n = e.variationIdMap;
      i.merge(n, t), this.z.variationIdMap = n, this.emitChange()
    },
    getPreferredLayerMap: function() {
      return i.cloneDeep(this.z.preferredLayerMap)
    },
    getPreferredLayerMapString: function() {
      return a.stringify(this.z.preferredLayerMap)
    },
    getPreferredLayerId: function(e) {
      return this.z.preferredLayerMap[e]
    },
    mt: function(e) {
      this.z.preferredLayerMap[e.groupId] !== e.layerId && (this.z.preferredLayerMap[e.groupId] = e.layerId, this.emitChange())
    },
    It: function(e) {
      var t = this.getPreferredLayerMap(),
        n = e.preferredLayerMap;
      i.merge(n, t), this.z.preferredLayerMap = n, this.emitChange()
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8);
  e.exports = {
    initialize: function() {
      this.z = {
        frames: [],
        defaultFrame: null,
        messages: [],
        subscribers: [],
        canonicalOrigins: null,
        disabled: !1
      }, this.on(r.XDOMAIN_SET_DEFAULT_FRAME, this.yt), this.on(r.XDOMAIN_ADD_FRAME, this.St), this.on(r.XDOMAIN_SET_MESSAGE, this.Tt), this.on(r.XDOMAIN_ADD_SUBSCRIBER, this.At), this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS, this.wt), this.on(r.XDOMAIN_SET_DISABLED, this.Dt)
    },
    getMessages: function() {
      return i.cloneDeep(this.z.messages)
    },
    getNextMessageId: function() {
      return this.z.messages.length
    },
    getMessageById: function(e) {
      return this.z.messages[e]
    },
    getSubscribers: function() {
      return this.z.subscribers
    },
    getFrames: function() {
      return this.z.frames
    },
    getNextFrameId: function() {
      return this.z.frames.length
    },
    getDefaultFrame: function() {
      return this.z.defaultFrame
    },
    getCanonicalOrigins: function() {
      return i.cloneDeep(this.z.canonicalOrigins)
    },
    isDisabled: function() {
      return this.z.disabled
    },
    yt: function(e) {
      this.z.defaultFrame = e
    },
    St: function(e) {
      this.z.frames.push(e)
    },
    Tt: function(e) {
      this.z.messages[e.messageId] = e.message
    },
    At: function(e) {
      this.z.subscribers.push(e.subscriber)
    },
    wt: function(e) {
      this.z.canonicalOrigins = e.canonicalOrigins
    },
    Dt: function(e) {
      this.z.disabled = e.disabled
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(21);
  e.exports = {
    initialize: function() {
      this.z = {}, this.on(r.DATA_LOADED, this.X)
    },
    X: function(e) {
      i.isEmpty(e.data.groups) || (i.each(e.data.groups, function(e) {
        a.deepFreeze(e), this.z[e.id] = e
      }.bind(this)), this.emitChange())
    },
    getAll: function() {
      return a.safeReference(i.values(this.z))
    },
    getGroupsMap: function() {
      return a.safeReference(this.z)
    },
    get: function(e) {
      return a.safeReference(this.z[e])
    }
  }
}), (function(e, t, n) {
  function i() {
    return u(M.LAYER_MAP) || {}
  }

  function r(e, t) {
    D.dispatch(b.UPDATE_PREFERRED_LAYER_MAP, {
      groupId: e,
      layerId: t
    })
  }

  function a() {
    var e = H.getPreferredLayerMapString();
    f(M.LAYER_MAP, e, !0)
  }

  function o(e) {
    D.dispatch(b.SET_TRACKER_PERSISTABLE_STATE, e)
  }

  function s(e, t) {
    function n(e, n) {
      var i;
      t.attributionType && (i = N.now()), D.dispatch(b.SET_VISITOR_ATTRIBUTES, {
        attributes: [{
          key: e,
          value: n,
          metadata: {
            lastModified: i
          }
        }]
      })
    }
    if (t.getter) {
      var i, r = t.provides;
      if (!t.isSticky || w.isUndefined(e[r])) try {
        var a = P.evaluate(t.getter);
        w.isFunction(a) && (a = a((function() {
          return e[r]
        }), (function(e) {
          return n(r, e)
        }))), w.isUndefined(a) || (t.isAsync ? (i = a.then((function(e) {
          n(r, e)
        }), (function(e) {
          x.warn('Failed to evaluate provider for "' + t.provides + '"; error was:', e)
        })), D.dispatch(b.SET_VISITOR_ATTRIBUTE_PENDING, {
          key: r,
          pending: i
        })) : n(r, a))
      } catch (e) {
        x.warn('Failed to evaluate getter for provider for "' + t.provides + '"; error was: ' + e.message)
      }
      return i
    }
  }

  function u(e) {
    var t = g(e),
      n = k.getItem(t);
    if (!n) {
      var i = p(e);
      n = k.getItem(i), d(e, n)
    }
    return w.isString(n) && (n = A(n)), n
  }

  function c(e) {
    var t = [];
    return w.each(e, (function(e) {
      w.each(e.item, (function(n) {
        n.namespace = e.namespace, t.push(n)
      }))
    })), t
  }

  function l(e) {
    var t = j.getBucketingId(),
      n = [],
      i = t + "\\$\\$([^$]+?)\\$\\$" + e,
      r = new RegExp(i);
    return w.each(k.keys(), (function(e) {
      var i = e.match(r);
      if (i) {
        var a = {
          namespace: i[1],
          userId: t,
          item: A(k.getItem(e))
        };
        n.push(a)
      }
    })), n
  }

  function d(e, t) {
    var n = g(e),
      i = p(e);
    k.setItem(n, t), k.removeItem(i)
  }

  function f(e, t, i) {
    try {
      var r = g(e);
      i || (t = V.stringify(t));
      try {
        k.removeItem(p(e)), k.setItem(r, t)
      } catch (e) {
        throw x.warn("Visitor / Unable to set localStorage key, error was:", e), new Error("Unable to set localStorage")
      }
      n(81).setItem(r, t)
    } catch (e) {
      x.warn("Unable to persist visitor data:", e.message)
    }
  }

  function g(e) {
    var n = j.getBucketingId();
    if (!n) throw new Error("Visitor bucketingId not set");
    var i = t.getNamespace();
    if (!i) throw new Error("Namespace is not set");
    return [n, i, e].join("$$")
  }

  function p(e) {
    var t = j.getBucketingId();
    if (!t) throw new Error("Cannot get legacy key: visitor bucketingId not set");
    return [t, e].join("$$")
  }

  function h(e, t) {
    if (_(e, g(M.EVENT_QUEUE))) D.dispatch(b.SET_FOREIGN_VISITOR_EVENT_QUEUE, {
      key: e,
      value: O.deserialize(A(t))
    });
    else if (_(e, g(M.EVENTS))) D.dispatch(b.SET_FOREIGN_VISITOR_EVENTS, {
      key: e,
      value: O.deserialize(A(t))
    });
    else if (_(e, g(M.LAYER_STATES))) D.dispatch(b.LOAD_PERSISTED_LAYER_STATES, {
      layerStates: A(t),
      merge: !0
    });
    else if (_(e, g(M.VARIATION_MAP))) D.dispatch(b.MERGE_VARIATION_ID_MAP, {
      variationIdMap: A(t)
    });
    else if (_(e, g(M.VISITOR_PROFILE))) {
      var n = ["custom"],
        i = A(t);
      w.each(n, (function(e) {
        var t = B.getPlugin(L.PluginTypes.visitorProfileProviders, e);
        if (t) {
          if (i.profile && i.metadata) {
            var n = v(i, e, t.attributionType);
            if (!w.isEmpty(n)) {
              var r = [];
              w.forOwn(n.data, (function(t, i) {
                var a = n.metadata[i],
                  o = {
                    key: i,
                    value: t,
                    type: e,
                    metadata: a
                  };
                r.push(o)
              })), D.dispatch(b.SET_VISITOR_ATTRIBUTES, {
                attributes: r
              })
            }
          }
        } else x.debug("Attribute type", e, "not used by any audiences")
      }))
    }
  }

  function v(e, t, n) {
    var i = Y.getAttribute(t),
      r = Y.getAttributeMetadata(t),
      a = e.profile[t],
      o = e.metadata[t];
    if (w.isEmpty(i)) return {
      data: a,
      metadata: o
    };
    var s = {};
    return w.forOwn(a, (function(e, t) {
      var i;
      r && r[t] && (i = r[t].lastModified);
      var a;
      o && o[t] && (a = o[t].lastModified), (n === L.AttributionTypes.FIRST_TOUCH && i >= a || n === L.AttributionTypes.LAST_TOUCH && a >= i || w.isUndefined(i) && a) && (s.data = s.data || {}, s.data[t] = e, a && (s.metadata = s.metadata || {}, s.metadata[t] = s.metadata[t] || {}, s.metadata[t].lastModified = a))
    })), s
  }

  function _(e, t) {
    return e.indexOf(t) > 0
  }

  function E() {
    var e = Y.getVisitorProfile(),
      t = Y.getVisitorProfileMetadata(),
      n = B.getAllPlugins(L.PluginTypes.visitorProfileProviders);
    if (n) {
      var i = w.reduce(n, (function(e, t) {
        return t.provides && (e[t.provides] = t), e
      }), {});
      e = w.omitBy(e, (function(e, t) {
        var n = i[t];
        return n && n.isTransient
      }))
    }
    return {
      profile: e,
      metadata: t
    }
  }

  function m(e, t) {
    R.initializeStore(e, t)
  }

  function I(e) {
    D.dispatch(b.LOAD_PERSISTED_LAYER_STATES, {
      layerStates: w.filter(e, (function(e) {
        return !!e.decision
      }))
    })
  }

  function y(e) {
    e = w.extend({
      lastSessionTimestamp: 0,
      sessionId: null
    }, e), D.dispatch(b.LOAD_SESSION_STATE, e)
  }

  function S() {
    return "oeu" + N.now() + "r" + Math.random()
  }

  function T(e) {
    var t, n, i = B.getAllPlugins(L.PluginTypes.visitorProfileProviders),
      r = w.filter(i, (function(e) {
        return w.isFunction(e.restorer)
      }));
    e.profile && e.metadata ? (t = e.profile, n = e.metadata) : (t = e, n = {}), t = w.reduce(t, (function(e, t, n) {
      var i = t,
        a = w.find(r, {
          provides: n
        });
      return a && (i = a.restorer(t)), e[n] = i, e
    }), {}), D.dispatch(b.LOAD_EXISTING_VISITOR_PROFILE, {
      profile: t,
      metadata: n
    })
  }

  function A(e) {
    try {
      return V.parse(e)
    } catch (t) {
      return x.debug("Failed to parse: ", e, t), null
    }
  }
  var w = n(2),
    D = n(12),
    b = n(8),
    R = n(6),
    O = n(7),
    C = n(65),
    N = n(10),
    P = n(18),
    L = n(16),
    V = n(17),
    k = n(72).LocalStorage,
    x = n(15),
    F = n(77).Promise,
    M = n(16).VisitorStorageKeys,
    U = P.get("stores/global"),
    G = P.get("stores/layer"),
    B = P.get("stores/plugins"),
    z = P.get("stores/session"),
    j = P.get("stores/visitor_id"),
    H = P.get("stores/visitor_bucketing"),
    Y = P.get("stores/visitor"),
    K = P.get("stores/provider_status");
  t.getIdFromCookies = function() {
    var e, t = C.get(L.COOKIES.VISITOR_ID);
    return t || (t = S()), {
      randomId: t,
      UUID: e
    }
  }, t.setId = function(e) {
    var n = j.getBucketingId();
    if (D.dispatch(b.SET_VISITOR_ID, e), j.getBucketingId() !== n) {
      t.loadData();
      try {
        t.persistVisitorId(e)
      } catch (e) {
        if (x.error("Visitor / Unable to persist visitorId, disabling tracking"), D.dispatch(b.LOAD_DIRECTIVE, {
            trackingDisabled: !0
          }), e instanceof C.MismatchError) throw x.error("Visitor / Cookie not set to correct value:", e), new Error("Cookie mismatch error while persisting visitorId");
        throw e
      }
    }
    t.refreshSession()
  }, t.getVariationIdMap = function() {
    return u(M.VARIATION_MAP) || {}
  }, t.updateVariationIdMap = function(e, t, n) {
    D.dispatch(b.UPDATE_VARIATION_ID_MAP, {
      layerId: e,
      experimentId: t,
      variationId: n
    })
  }, t.persistVariationIdMap = function() {
    var e = H.getVariationIdMapString();
    f(M.VARIATION_MAP, e, !0)
  }, t.getPreferredLayerMap = i, t.updatePreferredLayerMap = r, t.persistTrackerOptimizelyData = function(e) {
    f(M.TRACKER_OPTIMIZELY, e)
  }, t.refreshSession = function() {
    D.dispatch(b.REFRESH_SESSION)
  }, t.populateEagerVisitorData = function(e, n) {
    var i = w.filter(e, (function(e) {
        return !e.isLazy
      })),
      r = t.populateVisitorData(i, n);
    return r
  }, t.populateLazyVisitorData = function(e, n) {
    var i = w.filter(e, (function(e) {
      return e.isLazy
    }));
    return t.populateVisitorData(i, n)
  }, t.populateVisitorData = function(e, t) {
    t = t || {};
    var n = w.partial(s, t),
      i = w(e).filter({
        isAsync: !0
      }).map(n).filter().value();
    return w.forEach(w.filter(e, (function(e) {
      return !e.isAsync
    })), n), i.length > 0 ? F.all(i) : F.resolve()
  }, t.loadData = function() {
    m(u(M.EVENTS) || [], u(M.EVENT_QUEUE) || []);
    var e = l(M.LAYER_STATES);
    I(c(e)), y(u(M.SESSION_STATE) || {}), T(u(M.VISITOR_PROFILE) || {});
    var n = u(M.TRACKER_OPTIMIZELY);
    n && o(n), t.loadForeignData(), t.removeLegacySessionStateCookies()
  }, t.persistBehaviorEvents = function(e) {
    f(M.EVENTS, e)
  }, t.persistBehaviorEventQueue = function(e) {
    f(M.EVENT_QUEUE, e)
  }, t.persistLayerStates = function() {
    var e = G.getLayerStates(t.getNamespace());
    e = w.map(e, (function(e) {
      return w.omit(e, "namespace")
    })), f(M.LAYER_STATES, e)
  }, t.persistSessionState = function() {
    f(M.SESSION_STATE, z.getState())
  }, t.persistVisitorProfile = function() {
    f(M.VISITOR_PROFILE, E())
  }, t.persistVisitorBucketingStore = function() {
    t.persistVariationIdMap(), a()
  }, t.getUserIdFromKey = function(e, n) {
    var i;
    return w.includes(e, n) && w.includes(e, "_") && w.includes(e, "$$") && w.includes(e.slice(e.indexOf("$$")), t.getNamespace()) && (i = e.slice(e.indexOf("_") + 1, e.indexOf("$$"))), i
  }, t.persistVisitorId = function(e) {
    w.isUndefined(e.UUID) ? e.randomId && C.set(L.COOKIES.VISITOR_ID, e.randomId) : null === e.UUID ? C.remove(L.COOKIES.VISITOR_UUID) : C.set(L.COOKIES.VISITOR_UUID, e.UUID)
  }, t.getAttribute = function(e) {
    return Y.getAttribute(e)
  }, t.getPendingAttributeValue = function(e) {
    return K.getPendingAttributeValue(e)
  }, t.loadForeignData = function() {
    w.each(k.keys(), (function(e) {
      var t = k.getItem(e);
      t && h(e, t)
    }))
  }, t.getNamespace = function() {
    return U.getNamespace()
  }, t.removeLegacySessionStateCookies = function() {
    var e = C.getAll();
    w.forEach(w.keys(e), (function(e) {
      0 === e.indexOf(L.COOKIES.SESSION_STATE + "$$") && C.remove(e)
    }))
  }
}), (function(e, t, n) {
  function i(e, n) {
    n !== !1 && (n = !0);
    for (var i, a, o = e.hostname.split("."), s = [], u = null, l = o.length - 1; l >= 0; l--)
      if (s.unshift(o[l]), i = s.join("."), !r.includes(h, i)) {
        a = {
          domain: n ? "." + i : i
        };
        try {
          t.set(v, Math.random().toString(), a), t.remove(v, a), u = a.domain;
          break
        } catch (e) {}
      }
    return d.dispatch(c.SET_COOKIE_DOMAIN, u), u
  }
  var r = n(2),
    a = n(66).create,
    o = n(10),
    s = n(70),
    u = n(71),
    c = n(8),
    l = n(18),
    d = n(12),
    f = l.get("stores/cookie_options"),
    g = t.SetError = a("CookieSetError"),
    p = t.MismatchError = a("CookieMismatchError");
  t.getAll = function(e) {
    r.isUndefined(e) && (e = !0);
    var n, i, a, o, u;
    n = s.getCookieString().split(/\s*;\s*/);
    var c = {};
    for (a = 0; a < n.length; a++)
      if (i = n[a], o = i.indexOf("="), o > 0 && (u = t.safeDecodeURIComponent(i.substring(0, o)), void 0 === c[u])) {
        var l = i.substring(o + 1);
        e && (l = t.safeDecodeURIComponent(l)), c[u] = l
      }
    return c
  }, t.safeDecodeURIComponent = function(e) {
    try {
      return decodeURIComponent(e)
    } catch (t) {
      return e
    }
  }, t.get = function(e, n) {
    var i = t.getAll(n);
    return i[e]
  }, t.set = function(e, n, a, c) {
    a = r.extend({
      encodeValue: !0
    }, a), c !== !1 && (c = !0);
    var l = [];
    if (r.isUndefined(a.domain)) {
      var d = f.getCurrentDomain();
      d || (d = i(u.getLocation(), !0)), a.domain = d
    }
    if (a.domain && l.push("domain=" + a.domain), r.isUndefined(a.path) && (a.path = "/"), a.path && l.push("path=" + a.path), r.isUndefined(a.expires)) {
      var h = r.isUndefined(a.maxAge) ? f.getDefaultAgeInSeconds() : a.maxAge;
      a.expires = new Date(o.now() + 1e3 * h)
    }
    if (r.isUndefined(a.expires) || l.push("expires=" + a.expires.toUTCString()), a.secure && l.push("secure"), l = l.join(";"), s.setCookie(e + "=" + (a.encodeValue ? encodeURIComponent(n) : n) + ";" + l), c) {
      var v = a.encodeValue,
        _ = t.get(e, v);
      if (_ !== n) {
        if (!_) throw new g('Failed to set cookie "' + e + '"');
        throw new p('Expected "' + n + '" for "' + e + '", got "' + _ + '"')
      }
    }
  }, t.remove = function(e, n) {
    t.set(e, null, r.extend({}, n, {
      expires: new Date(0)
    }), !1)
  };
  var h = ["optimizely.test"],
    v = "optimizelyDomainTestCookie"
}), (function(e, t, n) {
  var i = n(67),
    r = i("InternalError");
  t.BaseError = r, t.create = function(e) {
    return i(e, r)
  }
}), (function(e, t, n) {
  function i(e, t) {
    function n(t) {
      if (!(this instanceof n)) return new n(t);
      try {
        throw new Error(t)
      } catch (t) {
        t.name = e, this.stack = t.stack
      }
      r && this.stack && (this.stack = a(this.stack, e, t)), this.message = t || "", this.name = e
    }
    return n.prototype = new(t || Error), n.prototype.constructor = n, n.prototype.inspect = function() {
      return this.message ? "[" + e + ": " + this.message + "]" : "[" + e + "]"
    }, n.prototype.name = e, n
  }
  var r = n(68)(),
    a = n(69);
  e.exports = i
}), (function(e, t) {
  "use strict";
  e.exports = function() {
    var e = new Error("yep");
    return !!e.stack && "Error: yep\n" === e.stack.substr(0, 11)
  }
}), (function(e, t) {
  "use strict";
  e.exports = function(e, t, n) {
    var i = t;
    return n && (i += ": " + n), e = i + e.slice(e.indexOf("\n"))
  }
}), (function(e, t, n) {
  function i() {
    return "loading" === t.getReadyState()
  }
  var r = n(18),
    a = r.get("stores/global");
  t.getDocumentElement = function() {
    return document.documentElement
  }, t.getCookieString = function() {
    return document.cookie || ""
  }, t.setCookie = function(e) {
    document.cookie = e
  }, t.querySelector = function(e) {
    return document.querySelector(e)
  }, t.querySelectorAll = function(e) {
    return document.querySelectorAll(e)
  }, t.childrenOf = function(e) {
    return Array.prototype.slice.call(e.querySelectorAll("*"))
  }, t.createElement = function(e) {
    return document.createElement(e)
  }, t.isReady = function() {
    return a.domContentLoadedHasFired() || "interactive" === document.readyState || "complete" === document.readyState
  }, t.isLoaded = function() {
    return "complete" === document.readyState
  }, t.addReadyHandler = function(e) {
    return document.addEventListener("DOMContentLoaded", e),
      function() {
        t.removeReadyHandler(e)
      }
  }, t.removeReadyHandler = function(e) {
    return function() {
      document.removeEventListener("DOMContentLoaded", e)
    }
  }, t.getReferrer = function() {
    return document.referrer
  }, t.getReadyState = function() {
    return document.readyState
  }, t.write = function(e) {
    if (!i()) throw new Error("Aborting attempt to write to already-loaded document");
    document.write(e)
  }, t.appendToHead = function(e) {
    return t.appendTo(document.head, e)
  }, t.appendTo = function(e, t) {
    e.appendChild(t)
  }, t.addEventListener = function(e, t, n) {
    return document.addEventListener(e, t, n),
      function() {
        document.removeEventListener(e, t, n)
      }
  }, t.getCurrentScript = function() {
    if (document.currentScript) return document.currentScript
  }, t.parentElement = function(e) {
    for (var t = e.parentNode; t.nodeType !== Node.ELEMENT_NODE;) t = t.parentNode;
    return t
  }
}), (function(e, t, n) {
  var i = n(2);
  t.getUserAgent = function() {
    return window.navigator.userAgent
  }, t.getLocationSearch = function() {
    return window.location.search
  }, t.getNavigatorLanguage = function() {
    return window.navigator.language || window.navigator.userLanguage
  }, t.getHref = function() {
    return window.location.href;
  }, t.getLocation = function() {
    return window.location
  }, t.setLocation = function(e) {
    window.location.replace(e)
  }, t.setGlobal = function(e, t) {
    window[e] = t
  }, t.getGlobal = function(e) {
    return window[e]
  }, t.addEventListener = function() {
    return window.addEventListener.apply(window, arguments)
  }, t.isMutationObserverAPISupported = function() {
    return !i.isUndefined(window.MutationObserver)
  }
}), (function(e, t, n) {
  var i, r = "optimizely_data",
    a = n(73),
    o = n(66).create,
    s = n(75),
    u = n(71),
    c = t.Error = o("StorageError"),
    l = u.getGlobal("localStorage");
  l ? i = s.create(l, r) : (a.emitError(new c("Failed to initialize localStorage")), i = s.mockStorage), t.LocalStorage = i
}), (function(e, t, n) {
  var i = n(74);
  t.emitError = function(e, t, n) {
    var r = !0;
    i.emit({
      type: "error",
      name: e.name || "Error",
      data: {
        error: e,
        metadata: t
      }
    }, n || !1, r)
  }, t.emitInternalError = function(e, n) {
    t.emitError(e, n, !0)
  }, t.emitAnalyticsEvent = function(e, t) {
    var n = {
      type: "analytics",
      name: "trackEvent",
      data: e
    };
    i.emit(n, t)
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(5),
    a = n(8),
    o = n(73),
    s = n(18),
    u = n(12),
    c = n(15),
    l = s.get("stores/event_emitter");
  t.on = function(e) {
    return e.token || (e.token = r.generate()), u.dispatch(a.ADD_EMITTER_HANDLER, e), e.token
  }, t.off = function(e) {
    u.dispatch(a.REMOVE_EMITTER_HANDLER, {
      token: e
    })
  }, t.emit = function(e, t, n) {
    var r = l.getHandlers(e, t);
    i.each(r, (function(i) {
      try {
        i.handler.call({
          $di: s
        }, e)
      } catch (r) {
        !n && i.emitErrors ? (c.error("Error in handler for event:", e, r), o.emitError(r, null, t)) : c.warn("Suppressed error in handler for event:", e, r)
      }
    }))
  }
}), (function(e, t, n) {
  function i(e, t) {
    this.bt = e, this.Rt = t
  }
  var r = n(2),
    a = n(15),
    o = "$$";
  i.prototype.Ot = function(e) {
    return [this.Rt, e].join(o)
  }, i.prototype.Ct = function(e) {
    return e.replace(this.Rt + o, "")
  }, i.prototype.setItem = function(e, t) {
    try {
      this.bt.setItem(this.Ot(e), t)
    } catch (t) {
      a.warn("Failed to save", e, "to localStorage:", t)
    }
  }, i.prototype.removeItem = function(e) {
    this.bt.removeItem(this.Ot(e))
  }, i.prototype.getItem = function(e) {
    var t = null;
    try {
      t = this.bt.getItem(this.Ot(e))
    } catch (e) {}
    return t
  }, i.prototype.keys = function() {
    var e = r.keys(this.bt);
    return r.map(e, this.Ct.bind(this))
  }, i.prototype.allKeys = function() {
    return r.keys(this.bt)
  }, i.prototype.allValues = function() {
    return r.values(this.bt)
  }, e.exports = {
    create: function(e, t) {
      return new i(e, t)
    },
    mockStorage: {
      keys: function() {},
      getItem: function(e) {},
      removeItem: function(e) {},
      setItem: function(e, t) {}
    }
  }
}), (function(e, t, n) {
  function i() {
    return u.getGlobal("performance")
  }
  var r = n(8),
    a = n(66).create,
    o = n(10),
    s = n(12),
    u = n(71),
    c = n(18),
    l = c.get("stores/rum"),
    d = "optimizely:",
    f = t.Error = a("PerformanceError");
  t.time = function(e) {
    if (l.getSampleRum()) {
      var t = i();
      if (t && t.mark) {
        var n = d + e;
        t.clearMarks(n + "Begin"), t.mark(n + "Begin")
      }
    }
  }, t.timeEnd = function(e) {
    if (l.getSampleRum()) {
      var t = i();
      if (t && t.mark) {
        var n = d + e,
          a = t.getEntriesByName(n + "Begin");
        if (0 === a.length) throw new f("Called timeEnd without matching time: " + e);
        t.clearMarks(n + "End"), t.mark(n + "End");
        var o = t.getEntriesByName(n + "End"),
          u = e + "Time",
          c = o[0].startTime - a[0].startTime;
        s.dispatch(r.SET_PERFORMANCE_MARKS_DATA, {
          name: u,
          data: {
            startTime: Math.round(1e3 * a[0].startTime) / 1e3,
            duration: Math.round(1e3 * c) / 1e3
          }
        })
      }
    }
  }, t.now = function() {
    var e = i();
    return e ? e.now() : o.now()
  }
}), (function(e, t, n) {
  e.exports = n(78)
}), (function(e, t, n) {
  (function(t, i) {
    /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   4.1.0
     */
    !(function(t, n) {
      e.exports = n()
    })(this, (function() {
      "use strict";

      function e(e) {
        return "function" == typeof e || "object" == typeof e && null !== e
      }

      function r(e) {
        return "function" == typeof e
      }

      function a(e) {
        X = e
      }

      function o(e) {
        Q = e
      }

      function s() {
        return function() {
          return t.nextTick(f)
        }
      }

      function u() {
        return "undefined" != typeof W ? function() {
          W(f)
        } : d()
      }

      function c() {
        var e = 0,
          t = new Z(f),
          n = document.createTextNode("");
        return t.observe(n, {
            characterData: !0
          }),
          function() {
            n.data = e = ++e % 2
          }
      }

      function l() {
        var e = new MessageChannel;
        return e.port1.onmessage = f,
          function() {
            return e.port2.postMessage(0)
          }
      }

      function d() {
        var e = setTimeout;
        return function() {
          return e(f, 1)
        }
      }

      function f() {
        for (var e = 0; e < q; e += 2) {
          var t = ne[e],
            n = ne[e + 1];
          t(n), ne[e] = void 0, ne[e + 1] = void 0
        }
        q = 0
      }

      function g() {
        try {
          var e = n(80);
          return W = e.runOnLoop || e.runOnContext, u()
        } catch (e) {
          return d()
        }
      }

      function p(e, t) {
        var n = arguments,
          i = this,
          r = new this.constructor(v);
        void 0 === r[re] && k(r);
        var a = i._state;
        return a ? !(function() {
          var e = n[a - 1];
          Q((function() {
            return P(a, r, e, i._result)
          }))
        })() : R(i, r, e, t), r
      }

      function h(e) {
        var t = this;
        if (e && "object" == typeof e && e.constructor === t) return e;
        var n = new t(v);
        return A(n, e), n
      }

      function v() {}

      function _() {
        return new TypeError("You cannot resolve a promise with itself")
      }

      function E() {
        return new TypeError("A promises callback cannot return that same promise.")
      }

      function m(e) {
        try {
          return e.then
        } catch (e) {
          return ue.error = e, ue
        }
      }

      function I(e, t, n, i) {
        try {
          e.call(t, n, i)
        } catch (e) {
          return e
        }
      }

      function y(e, t, n) {
        Q((function(e) {
          var i = !1,
            r = I(n, t, (function(n) {
              i || (i = !0, t !== n ? A(e, n) : D(e, n))
            }), (function(t) {
              i || (i = !0, b(e, t))
            }), "Settle: " + (e._label || " unknown promise"));
          !i && r && (i = !0, b(e, r))
        }), e)
      }

      function S(e, t) {
        t._state === oe ? D(e, t._result) : t._state === se ? b(e, t._result) : R(t, void 0, (function(t) {
          return A(e, t)
        }), (function(t) {
          return b(e, t)
        }))
      }

      function T(e, t, n) {
        t.constructor === e.constructor && n === p && t.constructor.resolve === h ? S(e, t) : n === ue ? (b(e, ue.error), ue.error = null) : void 0 === n ? D(e, t) : r(n) ? y(e, t, n) : D(e, t)
      }

      function A(t, n) {
        t === n ? b(t, _()) : e(n) ? T(t, n, m(n)) : D(t, n)
      }

      function w(e) {
        e._onerror && e._onerror(e._result), O(e)
      }

      function D(e, t) {
        e._state === ae && (e._result = t, e._state = oe, 0 !== e._subscribers.length && Q(O, e))
      }

      function b(e, t) {
        e._state === ae && (e._state = se, e._result = t, Q(w, e))
      }

      function R(e, t, n, i) {
        var r = e._subscribers,
          a = r.length;
        e._onerror = null, r[a] = t, r[a + oe] = n, r[a + se] = i, 0 === a && e._state && Q(O, e)
      }

      function O(e) {
        var t = e._subscribers,
          n = e._state;
        if (0 !== t.length) {
          for (var i = void 0, r = void 0, a = e._result, o = 0; o < t.length; o += 3) i = t[o], r = t[o + n], i ? P(n, i, r, a) : r(a);
          e._subscribers.length = 0
        }
      }

      function C() {
        this.error = null
      }

      function N(e, t) {
        try {
          return e(t)
        } catch (e) {
          return ce.error = e, ce
        }
      }

      function P(e, t, n, i) {
        var a = r(n),
          o = void 0,
          s = void 0,
          u = void 0,
          c = void 0;
        if (a) {
          if (o = N(n, i), o === ce ? (c = !0, s = o.error, o.error = null) : u = !0, t === o) return void b(t, E())
        } else o = i, u = !0;
        t._state !== ae || (a && u ? A(t, o) : c ? b(t, s) : e === oe ? D(t, o) : e === se && b(t, o))
      }

      function L(e, t) {
        try {
          t((function(t) {
            A(e, t)
          }), (function(t) {
            b(e, t)
          }))
        } catch (t) {
          b(e, t)
        }
      }

      function V() {
        return le++
      }

      function k(e) {
        e[re] = le++, e._state = void 0, e._result = void 0, e._subscribers = []
      }

      function x(e, t) {
        this._instanceConstructor = e, this.promise = new e(v), this.promise[re] || k(this.promise), K(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? D(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && D(this.promise, this._result))) : b(this.promise, F())
      }

      function F() {
        return new Error("Array Methods must be provided an Array")
      }

      function M(e) {
        return new x(this, e).promise
      }

      function U(e) {
        var t = this;
        return new t(K(e) ? function(n, i) {
          for (var r = e.length, a = 0; a < r; a++) t.resolve(e[a]).then(n, i)
        } : function(e, t) {
          return t(new TypeError("You must pass an array to race."))
        })
      }

      function G(e) {
        var t = this,
          n = new t(v);
        return b(n, e), n
      }

      function B() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
      }

      function z() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
      }

      function j(e) {
        this[re] = V(), this._result = this._state = void 0, this._subscribers = [], v !== e && ("function" != typeof e && B(), this instanceof j ? L(this, e) : z())
      }

      function H() {
        var e = void 0;
        if ("undefined" != typeof i) e = i;
        else if ("undefined" != typeof self) e = self;
        else try {
          e = Function("return this")()
        } catch (e) {
          throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var t = e.Promise;
        if (t) {
          var n = null;
          try {
            n = Object.prototype.toString.call(t.resolve())
          } catch (e) {}
          if ("[object Promise]" === n && !t.cast) return
        }
        e.Promise = j
      }
      var Y = void 0;
      Y = Array.isArray ? Array.isArray : function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      };
      var K = Y,
        q = 0,
        W = void 0,
        X = void 0,
        Q = function(e, t) {
          ne[q] = e, ne[q + 1] = t, q += 2, 2 === q && (X ? X(f) : ie())
        },
        $ = "undefined" != typeof window ? window : void 0,
        J = $ || {},
        Z = J.MutationObserver || J.WebKitMutationObserver,
        ee = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
        te = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        ne = new Array(1e3),
        ie = void 0;
      ie = ee ? s() : Z ? c() : te ? l() : void 0 === $ ? g() : d();
      var re = Math.random().toString(36).substring(16),
        ae = void 0,
        oe = 1,
        se = 2,
        ue = new C,
        ce = new C,
        le = 0;
      return x.prototype._enumerate = function() {
        for (var e = this.length, t = this._input, n = 0; this._state === ae && n < e; n++) this._eachEntry(t[n], n)
      }, x.prototype._eachEntry = function(e, t) {
        var n = this._instanceConstructor,
          i = n.resolve;
        if (i === h) {
          var r = m(e);
          if (r === p && e._state !== ae) this._settledAt(e._state, t, e._result);
          else if ("function" != typeof r) this._remaining--, this._result[t] = e;
          else if (n === j) {
            var a = new n(v);
            T(a, e, r), this._willSettleAt(a, t)
          } else this._willSettleAt(new n(function(t) {
            return t(e)
          }), t)
        } else this._willSettleAt(i(e), t)
      }, x.prototype._settledAt = function(e, t, n) {
        var i = this.promise;
        i._state === ae && (this._remaining--, e === se ? b(i, n) : this._result[t] = n), 0 === this._remaining && D(i, this._result)
      }, x.prototype._willSettleAt = function(e, t) {
        var n = this;
        R(e, void 0, (function(e) {
          return n._settledAt(oe, t, e)
        }), (function(e) {
          return n._settledAt(se, t, e)
        }))
      }, j.all = M, j.race = U, j.resolve = h, j.reject = G, j._setScheduler = a, j._setAsap = o, j._asap = Q, j.prototype = {
        constructor: j,
        then: p,
        "catch": function(e) {
          return this.then(null, e)
        }
      }, j.polyfill = H, j.Promise = j, j
    }))
  }).call(t, n(79), (function() {
    return this
  })())
}), (function(e, t) {
  function n() {
    throw new Error("setTimeout has not been defined")
  }

  function i() {
    throw new Error("clearTimeout has not been defined")
  }

  function r(e) {
    if (l === setTimeout) return setTimeout(e, 0);
    if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
    try {
      return l(e, 0)
    } catch (t) {
      try {
        return l.call(null, e, 0)
      } catch (t) {
        return l.call(this, e, 0)
      }
    }
  }

  function a(e) {
    if (d === clearTimeout) return clearTimeout(e);
    if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
    try {
      return d(e)
    } catch (t) {
      try {
        return d.call(null, e)
      } catch (t) {
        return d.call(this, e)
      }
    }
  }

  function o() {
    h && g && (h = !1, g.length ? p = g.concat(p) : v = -1, p.length && s())
  }

  function s() {
    if (!h) {
      var e = r(o);
      h = !0;
      for (var t = p.length; t;) {
        for (g = p, p = []; ++v < t;) g && g[v].run();
        v = -1, t = p.length
      }
      g = null, h = !1, a(e)
    }
  }

  function u(e, t) {
    this.fun = e, this.array = t
  }

  function c() {}
  var l, d, f = e.exports = {};
  !(function() {
    try {
      l = "function" == typeof setTimeout ? setTimeout : n
    } catch (e) {
      l = n
    }
    try {
      d = "function" == typeof clearTimeout ? clearTimeout : i
    } catch (e) {
      d = i
    }
  })();
  var g, p = [],
    h = !1,
    v = -1;
  f.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    p.push(new u(e, t)), 1 !== p.length || h || r(s)
  }, u.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function(e) {
    return []
  }, f.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, f.cwd = function() {
    return "/"
  }, f.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, f.umask = function() {
    return 0
  }
}), (function(e, t) {}), (function(e, t, n) {
  function i(e) {
    var t;
    if (!o.find(I.getFrames(), {
        origin: e.origin
      })) return void m.debug("XDomain", "No frame found for origin: " + e.origin);
    try {
      t = h.parse(e.data)
    } catch (t) {
      return void m.debug("XDomain", "Ignoring malformed message event:", e)
    }
    if ("ERROR" === t.type) l.dispatch(u.XDOMAIN_SET_DISABLED, {
      disabled: !0
    }), d.emitInternalError(new y("Xdomain Error: " + t.response.toString()));
    else if ("SYNC" === t.type) o.each(I.getSubscribers(), (function(e) {
      e(t.response.key, t.response.value)
    }));
    else {
      var n = I.getMessageById(t.id);
      if (!n) {
        if (m.warn("XDomain", "No stored message found for ID", t.id), o.isNumber(t.id)) {
          var i = I.getNextMessageId();
          t.id >= i ? d.emitInternalError(new y("Message ID is greater than expected maximum ID (" + t.id + ">" + i + ")")) : t.id < 0 ? d.emitInternalError(new y("Message ID is < 0: " + t.id)) : d.emitInternalError(new y("No stored message found for message ID: " + t.id))
        } else d.emitInternalError(new y("Message ID is not a number: " + t.id.toString()));
        return
      }
      n.resolver(t.response), l.dispatch(u.XDOMAIN_SET_MESSAGE, {
        messageId: t.id,
        message: o.extend({}, n, {
          endTime: g.now(),
          response: t.response
        })
      })
    }
  }

  function r(e, t) {
    return t || (t = I.getDefaultFrame()), new s(function(n) {
      var i = {
        data: o.extend({}, e, {
          id: I.getNextMessageId()
        }),
        resolver: n
      };
      t ? I.isDisabled() || a(i, t) : l.dispatch(u.XDOMAIN_SET_MESSAGE, {
        messageId: i.data.id,
        message: i
      })
    })
  }

  function a(e, t) {
    var n = e.data;
    l.dispatch(u.XDOMAIN_SET_MESSAGE, {
      messageId: e.data.id,
      message: o.extend({}, e, {
        startTime: g.now()
      })
    }), t.target.postMessage(h.stringify(n), t.origin)
  }
  var o = n(2),
    s = n(77).Promise,
    u = n(8),
    c = n(18),
    l = n(12),
    d = n(73),
    f = n(66).create,
    g = n(10),
    p = n(70),
    h = n(17),
    v = n(82),
    _ = n(64),
    E = n(71),
    m = n(15),
    I = c.get("stores/xdomain"),
    y = t.Error = f("XDomainStorageError");
  t.setItem = function(e, t, n) {
    return r({
      type: "PUT",
      key: e,
      value: t
    }, n)
  }, t.getItem = function(e, t) {
    return r({
      type: "GET",
      key: e
    }, t)
  }, t.fetchAll = function(e) {
    return r({
      type: "GETALL"
    }, e)
  }, t.subscribe = function(e) {
    l.dispatch(u.XDOMAIN_ADD_SUBSCRIBER, {
      subscriber: e
    })
  }, t.loadIframe = function(e, t) {
    return new s(function(n) {
      var i = p.createElement("iframe");
      i.src = e + t, i.hidden = !0, i.setAttribute("aria-hidden", "true"), i.setAttribute("tabindex", "-1"), i.style.display = "none", i.height = 0, i.width = 0, i.onload = function() {
        var r = {
          id: I.getNextFrameId(),
          target: i.contentWindow,
          origin: e,
          path: t
        };
        l.dispatch(u.XDOMAIN_ADD_FRAME, r), n(r)
      }, p.appendTo(p.querySelector("body"), i)
    })
  }, t.loadCanonicalOrigins = function(e) {
    l.dispatch(u.XDOMAIN_SET_CANONICAL_ORIGINS, {
      canonicalOrigins: e
    })
  }, t.getXDomainUserId = function(e, t) {
    var n, i = {};
    return o.each(t, (function(t) {
      i[t] = [], o.each(o.keys(e), (function(e) {
        var r = _.getUserIdFromKey(e, t);
        !n && r && (n = r), r && !o.includes(i[t], r) && i[t].push(r)
      }))
    })), m.debug("XDomain: Found userIds:", i), n
  }, t.load = function(e, n) {
    E.addEventListener("message", i);
    var r = function() {
        return !!p.querySelector("body")
      },
      s = function() {
        return t.loadIframe(e, n)
      };
    return v.pollFor(r).then(s).then((function(e) {
      l.dispatch(u.XDOMAIN_SET_DEFAULT_FRAME, e), I.isDisabled() || o.each(I.getMessages(), (function(t) {
        t.startTime || a(t, e)
      }))
    }))
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(77).Promise,
    a = 100,
    o = 50;
  t.pollFor = function(e, t, n) {
    var s, u;
    return i.isFunction(n) ? u = n : (s = n || a, u = function() {
      return s--, s < -1
    }), t = t || o, new r(function(n, i) {
      !(function r() {
        var a;
        if (!u()) {
          try {
            var o = e();
            if (o) return n(o)
          } catch (e) {
            a = e
          }
          return setTimeout(r, t)
        }
        i(a || new Error("Poll timed out"))
      })()
    })
  }
}), (function(e, t, n) {
  function i(e, t) {
    var n = e.getValueOrDefault([o.FIELDS.TIME], 0),
      i = t.getValueOrDefault([o.FIELDS.TIME], 0);
    return Math.abs(n - i) < u
  }

  function r(e, t) {
    var n;
    n = i(e, t) ? e.getValueOrDefault([o.FIELDS.SESSION_ID]) : t.getValueOrDefault([o.FIELDS.TIME]), t.setFieldValue(o.FIELDS.SESSION_ID, n)
  }
  var a = n(54).Event,
    o = n(55),
    s = n(54).EventBase,
    u = 18e5;
  t.updateSessionId = function(e, t) {
    if (!e) return void t.setFieldValue(o.FIELDS.SESSION_ID, t.getValueOrDefault([o.FIELDS.TIME]));
    var n = e.getValueOrDefault([o.FIELDS.TIME]),
      i = e.getValueOrDefault([o.FIELDS.SESSION_ID]),
      u = t.getValueOrDefault([o.FIELDS.TIME]);
    n = "number" != typeof n ? u - 36e5 : n, i = "number" != typeof i ? n : i, e = new a(new s("", ""), n, i), r(e, t)
  }, t.sessionize = function(e) {
    var t = e.length;
    if (0 !== t) {
      e[0].setFieldValue(o.FIELDS.SESSION_ID, e[0].getValueOrDefault([o.FIELDS.TIME]));
      for (var n = 1; n < t; n++) r(e[n - 1], e[n])
    }
  }, t.sessionSortPredicate = function(e, t) {
    return e[o.FIELDS.TIME] - t[o.FIELDS.TIME]
  }, t.applyMigrations = function(e) {
    return !1
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(10),
    o = n(12),
    s = n(17),
    u = n(15),
    c = n(77).Promise,
    l = n(85),
    d = 3;
  t.isCORSSupported = function() {
    var e = l.get("XMLHttpRequest");
    return "withCredentials" in new e
  }, t.request = function(e) {
    return e = i.extend({
      method: "GET",
      async: !0,
      contentType: "text/plain;charset=UTF-8"
    }, e), new c(function(n, r) {
      if (!t.isCORSSupported()) return r("CORS is not supported");
      var a = l.get("XMLHttpRequest"),
        o = new a;
      o.onload = function() {
        e.success && e.success(o), n(o)
      }, o.onerror = function() {
        e.error && e.error(o), r(o)
      }, i.isObject(e.data) && (e.data = s.stringify(e.data)), o.open(e.method, e.url, e.async), o.setRequestHeader("Content-Type", e.contentType), o.send(e.data)
    })
  }, t.retryableRequest = function(e, n, s, l) {
    if (!n) return c.reject(new Error("No id specified for request."));
    if (!t.isCORSSupported()) return c.reject(new Error("CORS is not supported."));
    i.isUndefined(l) && (l = d), i.isUndefined(s) && (s = 0);
    var f = {
      id: n,
      timeStamp: a.now(),
      data: e,
      retryCount: s
    };
    return o.dispatch(r.SET_PENDING_EVENT, f), u.debug("Sending event ", n), t.request(e).then((function(e) {
      return o.dispatch(r.REMOVE_PENDING_EVENT, {
        id: n
      }), e
    }), (function(e) {
      throw f.retryCount >= l ? (o.dispatch(r.REMOVE_PENDING_EVENT, {
        id: n
      }), u.warn("Event ", f, " could not be sent after ", l, " attempts.")) : (f.retryCount++, o.dispatch(r.SET_PENDING_EVENT, f), u.debug("Event ", f, " failed to send, with error ", e, " It will be retried ", l - s, " times.")), e
    }))
  }, t.sendBeacon = t.request
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(10),
    o = n(18),
    s = n(70),
    u = n(16),
    c = n(12),
    l = n(15),
    d = o.get("stores/sandbox"),
    f = n(71);
  t.shouldSandbox = function() {
    return !1
  }, t.get = function(e) {
    if (!e) throw new Error("Name is required");
    if (t.shouldSandbox()) {
      d.isInitialized() || g();
      var n = d.get(e);
      if (n) return n
    }
    return f.getGlobal(e)
  };
  var g = function() {
    try {
      var e = "optimizely_" + a.now(),
        t = s.createElement("iframe");
      t.name = e, t.style.display = "none", s.appendToHead(t);
      var n = t.contentWindow,
        o = t.contentDocument;
      o.write("<script></script>"), o.close();
      var d = i.mapValues(u.SandboxedFunctions, (function(e) {
        return n[e]
      }));
      c.dispatch(r.SANDBOXED_FUNCTIONS_ADDED, {
        sandboxedFunctions: d
      }), t.parentNode.removeChild(t)
    } catch (e) {
      l.warn("Unable to create a sandbox: ", e)
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(15),
    a = n(87),
    o = n(18),
    s = o.get("stores/plugins"),
    u = n(8),
    c = n(16),
    l = n(12),
    d = [n(98), n(99), n(119)],
    f = ["disable", "load", "optOut"];
  t.push = function(e, t) {
    var n, a, o, s;
    if (!i.isArray(e) && i.isObject(e)) s = i.isUndefined(e.version) ? 1 : e.version, n = e.type, o = [e];
    else if (i.isArray(e)) s = 0, n = e[0], o = e.slice(1);
    else {
      if (!i.isString(e)) return r.warn("API / Ignoring non-array/object/string argument:", e), !1;
      s = 0, n = e, o = []
    }
    if (d[s] && (a = d[s][n]), t && f.indexOf(n) === -1) return r.debug("API / Ignoring non high priority function:", n, o), !1;
    if (!a) return r.warn('API / No function found for "' + n + '" (v' + s + ") with arguments:", o), !1;
    r.log('API / Executing: "' + n, '" with arguments:', o);
    try {
      a.apply(null, o), l.dispatch(u.RECORD_API_USAGE, {
        methodName: s ? "v" + s + "." + n : n
      })
    } catch (e) {
      r.error(e)
    }
    return !0
  }, t.get = function(e) {
    r.log('API / Getting module: "' + e + '"');
    var t = a[e];
    return t ? i.isArray(t) && (t = o.evaluate(t)) : t = s.getPlugin(c.PluginTypes.apiModules, e), t ? (l.dispatch(u.RECORD_API_USAGE, {
      methodName: "get." + e
    }), t) : void r.warn('Module "' + e + '" not found.')
  }
}), (function(e, t, n) {
  function i(e, t, n, i) {
    var r = e.getLayerState(i),
      a = t.get(i),
      s = n.get();
    if (!r || !a) return s ? {
      layer: {
        name: s.layerName,
        id: s.layerId,
        policy: s.layerPolicy,
        integrationStringVersion: s.integrationStringVersion
      },
      experiment: {
        name: s.experimentName,
        id: s.experimentId
      },
      variation: {
        name: s.variationName,
        id: s.variationId
      },
      isLayerHoldback: !1
    } : null;
    if (c.isSingleExperimentPolicy(a.policy) && r.decision.isLayerHoldback) return null;
    var u = r.decision.experimentId,
      l = r.decision.variationId;
    if (!u || !l) return null;
    var d, f;
    return (d = o.find(a.experiments, {
      id: u
    })) ? (f = o.find(d.variations, {
      id: l
    }), f ? {
      layer: {
        name: a.name,
        id: a.id,
        policy: a.policy,
        integrationStringVersion: a.integrationStringVersion
      },
      experiment: {
        name: d.name,
        id: d.id
      },
      variation: {
        name: f.name,
        id: f.id
      },
      isLayerHoldback: r.decision.isLayerHoldback
    } : null) : null
  }

  function r(e, t, n, i, r, s) {
    var u = [],
      d = e.getLayerStates();
    s.onlySingleExperiments && (d = o.filter(d, (function(e) {
      var n = t.get(e.layerId);
      return n && c.isSingleExperimentPolicy(n.policy)
    })));
    var f = o.map(d, (function(e) {
        var t = !!e.decision.variationId,
          n = e.decisionActivationId && e.decisionActivationId === i.getActivationId(),
          r = l.getExperimentAndVariation(),
          a = r ? r.variationId : null,
          s = t && e.decision.variationId === a;
        return o.extend(e, {
          isActive: t && n || s,
          visitorRedirected: s
        })
      })),
      g = r ? o.filter(f, r) : f;
    return o.each(g, (function(e) {
      var i = a(e, t, n, s.includeOfferConsistency);
      i && u.push(i)
    })), u
  }

  function a(e, t, n, i) {
    var r, a, s = e.layerId,
      u = t.get(s) || {},
      c = o.map(u.experiments, (function(e) {
        return o.pick(e, ["id", "name"])
      }));
    if (i || !u.decisionMetadata || !u.decisionMetadata.offerConsistency) {
      var l = {
        id: s,
        campaignName: u.name || null,
        experiment: null,
        allExperiments: c,
        variation: null,
        reason: e.decision.reason,
        isActive: e.isActive,
        visitorRedirected: e.visitorRedirected,
        isInCampaignHoldback: e.decision.isLayerHoldback
      };
      e.decision && e.decision.experimentId && (r = o.find(u.experiments, {
        id: e.decision.experimentId
      })), r && (l.experiment = o.pick(r, ["id", "name", "campaignName"])), r && e.decision.variationId && (a = o.find(r.variations, {
        id: e.decision.variationId
      })), a && (l.variation = o.pick(a, ["id", "name"]));
      var d = o.map(e.decisionTicket.audienceIds, (function(e) {
        return o.pick(n.get(e), ["id", "name"])
      }));
      return l.audiences = d, u.decisionMetadata && u.decisionMetadata.offerConsistency && (l.pageId = e.pageId), l
    }
  }
  var o = n(2),
    s = n(88),
    u = n(89),
    c = n(36),
    l = n(90);
  t.data = ["stores/audience_data", "stores/event_data", "stores/layer_data", "stores/view_data", "stores/group_data", "stores/global", function(e, t, n, i, r, a) {
    var o = {
      audiences: e.getAudiencesMap(),
      events: t.getEventsMap(),
      campaigns: n.getCampaignsMap(),
      pages: i.getPagesMap(),
      experiments: n.getExperimentsMap(),
      variations: n.getVariationsMap(),
      projectId: a.getProjectId(),
      snippetId: a.getSnippetId(),
      accountId: a.getAccountId(),
      dcpServiceId: a.getDCPServiceId(),
      revision: a.getRevision(),
      clientVersion: s.VERSION
    };
    return o.groups = r.getGroupsMap(), o
  }], t.session = ["stores/session", function(e) {
    return e.getState()
  }], t.visitor = ["stores/visitor", function(e) {
    return o.cloneDeep(e.getVisitorProfile())
  }], t.visitor_id = ["stores/visitor_id", function(e) {
    return {
      randomId: e.getRandomId(),
      UUID: e.getUUID()
    }
  }], t.state = ["stores/audience_data", "stores/layer_data", "stores/layer", "stores/view_data", "stores/view", "stores/global", "stores/observed_redirect", function(e, t, n, a, s, d, f) {
    return {
      getCampaignStates: function(i) {
        var a = {},
          s = r(n, t, e, d, i, {
            includeOfferConsistency: !1
          });
        return o.each(s, (function(e) {
          a[e.id] = e
        })), a
      },
      getExperimentStates: function(i) {
        var a = r(n, t, e, d, i, {
            includeOfferConsistency: !1,
            onlySingleExperiments: !0
          }),
          s = ["audiences", "variation", "reason", "visitorRedirected", "isActive"],
          u = o.reduce(a, (function(e, t) {
            var n = t.allExperiments[0];
            return e[n.id] = o.extend({}, o.pick(t, s), {
              id: n.id,
              experimentName: n.name,
              isInExperimentHoldback: t.isInCampaignHoldback
            }), e
          }), {});
        return u
      },
      getCampaignStateLists: function(i) {
        var a = {},
          s = r(n, t, e, d, i, {
            includeOfferConsistency: !0
          });
        return o.each(s, (function(e) {
          var t = e.id;
          a[t] || (a[t] = []), a[t].push(e)
        })), a
      },
      getPageStates: function(e) {
        var t = s.getAll(),
          n = o.reduce(t, (function(e, t) {
            var n = a.get(t.id);
            return e[t.id] = o.extend({}, o.pick(n, ["id", "name", "apiName", "category", "staticConditions", "tags"]), o.pick(t, ["isActive", "metadata"])), e
          }), {});
        return e ? o.pickBy(n, e) : n
      },
      isGlobalHoldback: function() {
        return d.isGlobalHoldback()
      },
      getActivationId: function() {
        return d.getActivationId()
      },
      getVariationMap: function() {
        var e = n.getLayerStates(),
          i = {};
        return o.each(e, (function(e) {
          var n = t.get(e.layerId);
          if (e.decision && e.decision.experimentId && (i[e.decision.experimentId] = {
              id: e.decision.variationId,
              name: null,
              index: null
            }, n)) {
            var r = o.find(n.experiments, {
              id: e.decision.experimentId
            });
            if (r && e.decision.variationId) var a = o.find(r.variations, {
                id: e.decision.variationId
              }),
              s = o.findIndex(r.variations, {
                id: e.decision.variationId
              });
            a && (i[e.decision.experimentId] = {
              id: e.decision.variationId,
              name: a.name,
              index: s
            })
          }
        })), i
      },
      getActiveExperimentIds: function() {
        var e = {};
        return o.each(this.getCampaignStateLists({
          isActive: !0
        }), (function(t) {
          o.each(t, (function(t) {
            e[t.experiment.id] = !0
          }))
        })), o.keys(e)
      },
      getRedirectInfo: function() {
        var e = l.getExperimentAndVariation();
        return e && (e.referrer = l.getReferrer()), e
      },
      getDecisionString: function(e) {
        if (!e) throw new Error("Must pass a config to getDecisionString");
        e = o.extend({
          maxLength: 255,
          shouldCleanString: !1
        }, e);
        var r = i(n, t, f, e.campaignId);
        return r ? u.generateAnalyticsString(r.layer, r.experiment, r.variation, r.isLayerHoldback, e.maxLength, e.shouldCleanString) : null
      },
      getDecisionObject: function(e) {
        if (!e) throw new Error("Must pass a config to getDecisionObject");
        e = o.extend({
          maxLength: 255,
          shouldCleanString: !1
        }, e);
        var r = i(n, t, f, e.campaignId);
        if (!r) return null;
        var a = u.formatNamesAndIdsForAnalytics(r.layer, r.experiment, r.variation, e.shouldCleanString),
          s = o.mapValues(a.names, (function(t, n) {
            return u.combineAndTruncateIdAndName(t, a.idStrings[n], e.maxLength)
          })),
          l = {
            experiment: s.experiment,
            variation: s.variation
          };
        return c.isSingleExperimentPolicy(r.layer.policy) || o.extend(l, {
          campaign: s.layer,
          holdback: r.isLayerHoldback
        }), l
      }
    }
  }], t.utils = n(91).create(), t.jquery = ["env/jquery", function(e) {
    return e
  }], t.event_emitter = n(97)
}), (function(e, t, n) {
  t.VERSION = "0.80.0", t.ENGINE = "js"
}), (function(e, t, n) {
  function i(e) {
    return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_")
  }

  function r(e) {
    return !u.isEmpty(e) && u.includes(["and", "or", "not"], e[0])
  }

  function a(e, t) {
    var n = "";
    return u.isEmpty(t) ? n = d : (n = u.reduce(t, (function(t, n) {
      var r = e.get(n);
      return r ? t + i(r.name ? r.name : r.id) + "," : t
    }), ""), n = n.slice(0, -1)), n
  }

  function o(e, n, i, r, a, o) {
    if (!v.isSingleExperimentPolicy(e.policy) || !r) {
      var s = !v.isSingleExperimentPolicy(e.policy) && r,
        c = t.formatNamesAndIdsForAnalytics(e, n, i, o),
        d = [c.names.experiment, c.names.variation],
        g = [c.idStrings.experiment, c.idStrings.variation];
      v.isSingleExperimentPolicy(e.policy) || (d.unshift(c.names.layer), g.unshift(c.idStrings.layer));
      var p = u.reduce(g, (function(e, t) {
          return e + t.length
        }), 0),
        h = d.length - 1 + (s ? 1 : 0),
        _ = h * l.length,
        E = p + _;
      if (s && (E += f.length), E > a) throw new Error("The analytics string size is too low to send the entity IDs.");
      for (var m = a - E, I = d.length, y = [], S = d.length - 1; S >= 0; S--) {
        var T = d[S],
          A = Math.min(T.length, Math.floor(m / I));
        m -= A, I--, y.unshift(T.substring(0, A))
      }
      var w = u.map(y, (function(e, t) {
        return e + g[t]
      }));
      return s && w.push(f), w.join(l)
    }
  }

  function s(e, n, i, r, a, o) {
    var s = r ? f : g,
      c = 3 * l.length,
      d = t.formatNamesAndIdsForAnalytics(e, n, i, o),
      p = d.names,
      h = d.idStrings,
      _ = u.reduce(h, (function(e, t) {
        return e + t.length
      }), 0);
    if (_ + c + s.length > a) throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");
    var E = a - _ - c - s.length,
      m = {};
    m.variation = Math.min(p.variation.length, Math.floor(E / 3)), E -= m.variation, m.experiment = Math.min(p.experiment.length, Math.floor(E / 2)), E -= m.experiment, m.layer = E;
    var I = {};
    u.each(p, (function(e, t) {
      I[t] = e.substring(0, m[t])
    }));
    var y = [];
    return v.isSingleExperimentPolicy(e.policy) || y.push(I.layer + h.layer), y = y.concat([I.experiment + h.experiment, I.variation + h.variation, s]), y.join(l)
  }
  var u = n(2),
    c = n(18),
    l = ":",
    d = "everyone_else",
    f = "holdback",
    g = "treatment",
    p = "",
    h = n(15),
    v = n(36);
  t.formatNamesAndIdsForAnalytics = function(e, t, n, o) {
    var s = {
      layer: e.name || p,
      experiment: t.name || p,
      variation: n.name || p
    };
    if (o && (s = u.mapValues(s, i)), s.experiment === p && (!e.integrationStringVersion || 1 === e.integrationStringVersion))
      if (r(t.audienceIds)) s.experiment = "Exp";
      else {
        var l = c.get("stores/audience_data");
        s.experiment = a(l, t.audienceIds)
      }
    var d = {
      layer: "(" + i(e.id) + ")",
      experiment: "(" + i(t.id) + ")",
      variation: "(" + i(n.id) + ")"
    };
    return {
      names: s,
      idStrings: d
    }
  }, t.combineAndTruncateIdAndName = function(e, t, n) {
    var i = n - t.length;
    if (i < 0 && (h.warn("maxLength must be at least long enough to fit the entity ID, which is length" + t.length + ". Defaulting to only use entity ID as name."), e = p), e === p) return t;
    if (e.length > i) {
      var r = Math.min(e.length, i);
      return e = e.substring(0, r), e + t
    }
    return e + " " + t
  }, t.generateAnalyticsString = function(e, t, n, i, r, a) {
    return e.integrationStringVersion && 2 === e.integrationStringVersion ? o(e, t, n, i, r, a) : s(e, t, n, i, r, a)
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(18),
    a = r.get("stores/global_state"),
    o = r.get("stores/layer_data"),
    s = r.get("stores/observed_redirect");
  t.getReferrer = function() {
    var e = s.get();
    return e ? e.referrer : i.isString(a.getEffectiveReferrer()) ? a.getEffectiveReferrer() : null
  }, t.getExperimentAndVariation = function() {
    var e = s.get();
    if (e && i.isString(e.variationId)) return i.pick(e, ["experimentId", "variationId"]);
    if (i.isString(a.getEffectiveVariationId())) {
      var t = a.getEffectiveVariationId(),
        n = o.getExperimentByVariationId(t),
        r = n ? n.id : null;
      return {
        experimentId: r,
        variationId: t
      }
    }
    return null
  }
}), (function(e, t, n) {
  var i = n(77).Promise,
    r = n(92).observeSelector,
    a = n(93).poll,
    o = n(95).waitForElement,
    s = n(96).waitUntil;
  t.create = function() {
    return {
      observeSelector: r,
      poll: a,
      Promise: i,
      waitForElement: o,
      waitUntil: s
    }
  }
}), (function(e, t, n) {
  function i() {
    if (f.shouldObserveChangesIndefinitely()) {
      var e = {
          attributes: !0,
          childList: !0,
          subtree: !0,
          characterData: !0
        },
        t = g.getDocumentElement(),
        n = new MutationObserver(function() {
          this.disconnect(), l.each(l.keys(_), a), this.observe(t, e)
        });
      return function(i) {
        var r = _[i];
        n.observe(t, e), r.cancelObservation = function() {
          delete _[i], l.isEmpty(_) && n.disconnect()
        }
      }
    }
    return function(e) {
      var t = h.poll(l.partial(a, e));
      _[e].cancelObservation = function() {
        t(), delete _[e]
      }
    }
  }

  function r(e) {
    var t = _[e];
    t && t.cancelObservation && t.cancelObservation()
  }

  function a(e) {
    if (_[e]) {
      if (o(_[e])) return 0 === _[e].matchedCount && l.isFunction(_[e].options.onTimeout) && _[e].options.onTimeout(), void r(e);
      var t = document.querySelectorAll(_[e].selector);
      t.length && (l.each(t, (function(t) {
        t.Nt && t.Nt[e] || _[e].callbackQueue.push(t)
      })), s(e))
    }
  }

  function o(e) {
    var t = e.options.timeout;
    if (null !== t)
      if ("function" == typeof t) try {
        return t()
      } catch (e) {} else if (Date.now() - e.startTime > t) return !0;
    return !1
  }

  function s(e) {
    for (; _[e] && _[e].callbackQueue.length;) {
      var t = _[e].callbackQueue.shift();
      if (u(t, e), _[e].matchedCount = _[e].matchedCount + 1, _[e].callback(t), _[e].options.once) return void r(e)
    }
  }

  function u(e, t) {
    e.Nt || (e.Nt = {}), e.Nt[t] = !0
  }

  function c(e) {
    try {
      document.querySelector(e)
    } catch (e) {
      return !1
    }
    return !0
  }
  var l = n(2),
    d = (n(8), n(18)),
    f = d.get("stores/directive"),
    g = n(70),
    p = (n(16), n(12), n(5).generate),
    h = n(93),
    v = (d.get("stores/rum"), {
      once: !1,
      onTimeout: null,
      timeout: null
    }),
    _ = {},
    E = function(e) {
      (E = i())(e)
    };
  t.observeSelector = function(e, t, n) {
    if (!c(e)) throw new Error("observeSelector expects a valid css selector as its first argument");
    if (!l.isFunction(t)) throw new Error("observeSelector expects a function as its second argument");
    if (n && (!l.isObject(n) || l.isFunction(n))) throw new Error("observeSelector expects an object as its third argument");
    var i = p();
    return n = l.merge({}, v, n || {}), _[i] = {
      callback: t,
      callbackQueue: [],
      matchedCount: 0,
      options: n,
      selector: e,
      startTime: Date.now()
    }, E(i), setTimeout(a.bind(null, i), 0), l.partial(r, i)
  }
}), (function(e, t, n) {
  function i(e) {
    c[e] && a.each(c[e].callbacks, (function(e) {
      e.call(null)
    }))
  }

  function r(e, t) {
    c[t] && c[t].callbacks[e] && (delete c[t].callbacks[e], a.some(c[t].callbacks) || (clearInterval(c[t].id), delete c[t]))
  }
  var a = n(2),
    o = (n(8), n(18)),
    s = (n(16), n(12), n(5).generate),
    u = (o.get("stores/rum"), n(94).DEFAULT_INTERVAL),
    c = {};
  t.poll = function(e, t) {
    a.isNumber(t) || (t = u), c[t] || (c[t] = {
      callbacks: {},
      id: setInterval(a.partial(i, t), t)
    });
    var n = s();
    return c[t].callbacks[n] = e, a.partial(r, n, t)
  }, t.cancelAll = function() {
    a.each(c, (function(e, t) {
      clearInterval(e.id), delete c[t]
    }))
  }
}), (function(e, t) {
  e.exports = {
    DEFAULT_INTERVAL: 20
  }
}), (function(e, t, n) {
  var i = n(77).Promise,
    r = n(92).observeSelector;
  t.waitForElement = function(e) {
    return new i(function(t, n) {
      r(e, t, {
        once: !0
      })
    })
  }
}), (function(e, t, n) {
  var i = n(77).Promise,
    r = n(93).poll;
  t.waitUntil = function(e) {
    return new i(function(t, n) {
      if (e()) return void t();
      var i = r((function() {
        e() && (i(), t())
      }))
    })
  }
}), (function(e, t, n) {
  var i = n(74);
  t.on = function(e) {
    return e.publicOnly = !0, i.on(e)
  }, t.off = i.off, t.emit = function(e) {
    i.emit(e)
  }
}), (function(e, t, n) {
  function i(e) {
    var t, n = {};
    if (e)
      if (r(e)) t = Number(e);
      else {
        if ("object" != typeof e) throw new Error("tracker", "Revenue argument", e, "not a number.");
        if (n = a.extend({}, e), "revenue" in n) {
          if (!r(n["revenue"])) throw new Error("tracker", "Revenue value", n["revenue"], "not a number.");
          t = Number(n["revenue"]), delete n["revenue"]
        }
      }
    return a.isUndefined(t) || (n.revenue = t), n
  }

  function r(e) {
    return a.isNumber(e) || a.isString(e) && Number(e) == e
  }
  var a = n(2),
    o = n(99);
  t.activateGeoDelayedExperiments = function(e, t) {
    t || (t = e.lists ? "odds" : "cdn3"), o.dataFromSource({
      data: e,
      source: t
    })
  }, t.activateSiteCatalyst = function(e) {
    e && e.sVariable && o.integrationSettings({
      id: "adobe_analytics",
      settings: {
        sVariableReference: e.sVariable
      }
    })
  }, t.bucketUser = t.bucketVisitor = function(e, t) {
    if (e && t) {
      var n = {
        experimentId: String(e)
      };
      t > 256 ? n.variationId = String(t) : n.variationIndex = String(t), o.bucketVisitor(n)
    }
  }, t.disable = function(e) {
    o.disable({
      scope: e
    })
  }, t.log = function(e) {
    a.isUndefined(e) && (e = !0), o.log({
      level: e ? "INFO" : "OFF"
    })
  }, t.optOut = function(e) {
    a.isUndefined(e) && (e = !0), o.optOut({
      isOptOut: e
    })
  }, t.setCookieDomain = function(e) {
    o.cookieDomain({
      cookieDomain: e
    })
  }, t.setCookieExpiration = function(e) {
    o.cookieExpiration({
      cookieExpirationDays: e
    })
  }, t.setDimensionValue = function(e, t) {
    var n = {};
    n[e] = t, o.user({
      attributes: n
    })
  }, t.setUserId = function(e) {
    o.user({
      userId: e
    })
  }, t.storeThirdPartyData = function(e, t) {
    o.dataFromSource({
      source: e,
      data: t
    })
  }, t.trackEvent = function(e, t) {
    o.event({
      eventName: e,
      tags: i(t)
    })
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(86),
    o = n(87),
    s = n(16),
    u = n(100),
    c = n(107),
    l = n(109),
    d = n(66).create,
    f = n(10),
    g = n(110),
    p = n(74),
    h = n(12),
    v = n(17),
    _ = n(15),
    E = n(113),
    m = n(114),
    I = n(64),
    y = n(81),
    S = n(18),
    T = S.get("stores/dimension_data"),
    A = S.get("stores/view_data"),
    w = S.get("stores/visitor_id"),
    D = S.get("stores/layer_data"),
    b = S.get("stores/directive"),
    R = 86400,
    O = 90,
    C = t.ApiListenerError = d("ApiListenerError");
  t.event = function(e) {
    m.updateAllViewTags();
    var t = function() {
      var t = u.trackCustomEvent(e.eventName, e.tags);
      t ? _.log("API / Tracking custom event:", e.eventName, e.tags) : _.log("API / Not tracking custom event:", e.eventName)
    };
    w.getBucketingId() ? t() : h.dispatch(r.ADD_CLEANUP_FN, {
      lifecycle: s.Lifecycle.postActivate,
      cleanupFn: t
    })
  }, t.page = function(e) {
    var t = A.getByApiName(e.pageName);
    if (!t) throw new Error('Unknown page "' + e.pageName + '"');
    var n = !e.hasOwnProperty("isActive") || e.isActive,
      i = function() {
        n ? m.activateViaAPI(t, e.tags) : (m.deactivate(t), _.log("API / Deactivated Page", m.description(t)))
      };
    w.getBucketingId() ? i() : h.dispatch(r.ADD_CLEANUP_FN, {
      lifecycle: s.Lifecycle.postViewsActivated,
      cleanupFn: i
    })
  }, t.tags = function(e) {
    m.setGlobalTags(e.tags)
  }, t.user = function(e) {
    i.each(e, (function(e, t) {
      "attributes" === t && (_.log("API / Setting visitor attributes:", e), i.each(e, (function(e, t) {
        var n, i = t,
          a = "custom",
          o = T.getById(t) || T.getByApiName(t);
        o && (i = o.id, n = o.segmentId || o.id);
        var u = function() {
          h.dispatch(r.SET_VISITOR_ATTRIBUTES, {
            attributes: [{
              key: i,
              value: {
                id: n,
                value: e
              },
              type: a,
              metadata: {
                lastModified: f.now()
              }
            }]
          })
        };
        w.getBucketingId() ? u() : h.dispatch(r.ADD_CLEANUP_FN, {
          lifecycle: s.Lifecycle.postVisitorProfileLoad,
          cleanupFn: u
        })
      })))
    }))
  }, t.optOut = function(e) {
    var t = !e.hasOwnProperty("isOptOut") || e.isOptOut;
    g.setOptOut(t)
  }, t.cookieExpiration = function(e) {
    var t = e.cookieExpirationDays;
    t < O && (_.error('Argument "cookieExpirationDays"=', t, "less than minimum days:", O, ", setting to minimum."), t = O), _.log("API / Setting cookie age to", t, "days."), h.dispatch(r.SET_COOKIE_AGE, t * R)
  }, t.cookieDomain = function(e) {
    _.log("API / Setting cookie domain to", e.cookieDomain), h.dispatch(r.SET_COOKIE_DOMAIN, e.cookieDomain)
  }, t.disable = function(e) {
    if (e.scope) {
      if ("tracking" !== e.scope) throw new Error('Unknown "scope" for disable: ' + e.scope);
      _.log("API / Disabling tracking"), h.dispatch(r.LOAD_DIRECTIVE, {
        trackingDisabled: !0
      })
    } else _.log("API / Disabling everything"), h.dispatch(r.LOAD_DIRECTIVE, {
      disabled: !0
    })
  }, t.log = function(e) {
    var t = e.level,
      n = e.match;
    i.isUndefined(t) && (t = "INFO"), i.isUndefined(n) && (n = ""), _.setLogMatcher(n), _.setLogLevel(t)
  }, t.registerModule = function(e) {
    var t = "custom/" + e.moduleName;
    if (o[t] || a.get(t)) throw new Error('Module name "' + t + '" is reserved. Will not be registered as plugin.');
    E.registerApiModule(t, e.module);
  }, t.dataFromSource = function(e) {
    var t = e.source;
    l.makeAsyncRequest(t), l.resolveRequest(t, e.data)
  }, t.addListener = function(e) {
    if (!i.isFunction(e.handler)) throw new Error("A handler function must be supplied");
    e = i.omit(e, "type"), e.publicOnly = !0, e.emitErrors = !0;
    var t = e.handler;
    e.handler = function(e) {
      try {
        return t(e)
      } catch (e) {
        throw new C(e)
      }
    }, p.on(e)
  }, t.removeListener = function(e) {
    if (!e.token) throw new Error("Must supply a token to removeListener");
    p.off(e.token)
  }, t.load = function(e) {
    h.dispatch(r.DATA_LOADED, {
      data: e.data
    })
  }, t.integrationSettings = function(e) {
    if (!e.id) throw new Error("id is required");
    if (!e.settings) throw new Error("settings is required");
    h.dispatch(r.SET_INTEGRATION_SETTINGS, i.extend({}, e.settings, {
      id: e.id
    }))
  }, t.bucketVisitor = function(e) {
    if (!e.variationId && i.isUndefined(e.variationIndex) || e.variationId && e.variationIndex) throw new Error("One of a variationId or a variationIndex is required.");
    if (!e.experimentId) throw new Error("An experimentId is required.");
    var t, n, r = e.campaignId;
    if (r) {
      if (t = D.get(r), !t) throw new Error("Could not find layer " + r)
    } else if (t = D.getLayerByExperimentId(e.experimentId), r = t.id, !r) throw new Error("Could not find layer for experiment " + e.experimentId);
    if (n = i.find(t.experiments, {
        id: e.experimentId
      }), !n) throw new Error("Could not find experiment " + e.experimentId + " in layer " + r);
    var a = e.variationId;
    if (i.isUndefined(e.variationIndex)) {
      if (!i.find(n.variations, {
          id: a
        })) throw new Error("Cound not find variation " + a + " in experiment " + e.experimentId)
    } else if (a = n.variations[e.variationIndex].id, !a) throw new Error("Could not find variation at index " + e.variationIndex + " in experiment " + e.experimentId);
    I.updateVariationIdMap(r, e.experimentId, a), w.getBucketingId() && I.persistVariationIdMap()
  }, t.waitForOriginSync = function(e) {
    if (!i.isArray(e.canonicalOrigins)) throw new Error("canonicalOrigins must be an array. Got: " + v.stringify(e.canonicalOrigins));
    i.each(e.canonicalOrigins, (function(e) {
      if (!i.isString(e)) throw new Error("Each item in canonicalOrigins must be a string. Found type " + typeof e)
    })), y.loadCanonicalOrigins(e.canonicalOrigins)
  }, t.activate = function() {
    b.shouldActivate() ? c.emitActivateEvent() : _.debug("Not activating.")
  }, t.sendEvents = function() {
    c.emitSendEvents()
  }, t.holdEvents = function() {
    c.emitHoldEvents()
  }
}), (function(e, t, n) {
  function i(e, t, n, i, r) {
    var a = q.get(t.layerId),
      o = V.description(a),
      s = c(e, t, n),
      u = l(s, t.isLayerHoldback, i),
      d = X.isExpectingRedirect(),
      f = X.getLayerId();
    if (d && f === a.id) {
      M.persist(s, r), k.log("Relaying decision for redirect Campaign", o, s);
      var g = G.TrackLayerDecisionTimingFlags.preRedirectPolicy;
      u.timing = g, E(g, [G.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT], u), k.log("Called trackLayerDecision for redirect Campaign", o, u)
    } else {
      var g = G.TrackLayerDecisionTimingFlags.nonRedirectPolicy;
      u.timing = g, E(g, [G.NonRedirectPolicies.TRACK_IMMEDIATELY], u), k.log("Called trackLayerDecision for non-redirect Campaign", o, u)
    }
  }

  function r(e, t, n, i, r) {
    var a = q.get(t.layerId),
      o = V.description(a),
      s = d(e, t, n, i);
    v("onLayerDecision", s, r ? "trackLayerDecision" : void 0), k.log("Analytics / Called onLayerDecision for Campaign", o, s)
  }

  function a(e, t) {
    var n = f({
        activeViewStates: H.getActiveViewStates(),
        visitorProfile: Q.getVisitorProfile(),
        layerStates: K.getLayerStates()
      }),
      i = J.getByApiName(e),
      r = i && i.pageId ? p(i) : H.getActiveViewTags(),
      a = I.extend({}, r, t),
      o = i && i.category ? i.category : O.OTHER;
    return I.extend(n, {
      eventEntityId: i && i.id,
      eventApiName: e,
      eventCategory: o,
      eventTags: a
    })
  }

  function o(e, t) {
    var n = f({
      activeViewStates: H.getActiveViewStates(),
      visitorProfile: Q.getVisitorProfile(),
      layerStates: K.getLayerStates()
    });
    return I.extend(n, {
      pageId: e.id,
      viewCategory: e.category,
      eventTags: t.metadata
    })
  }

  function s(e) {
    var t = f({
        activeViewStates: H.getActiveViewStates(),
        visitorProfile: Q.getVisitorProfile(),
        layerStates: K.getLayerStates()
      }),
      n = e.config && e.config.selector ? e.config.selector : e.eventFilter.selector,
      i = e && e.category ? e.category : O.OTHER,
      r = p(e);
    return I.extend(t, {
      event: e,
      eventCategory: i,
      eventTags: r,
      selector: n
    })
  }

  function u() {
    var e = f({
      activeViewStates: [],
      visitorProfile: Q.getVisitorProfile(),
      layerStates: K.getLayerStates()
    });
    return I.extend(e, {
      eventTags: {}
    })
  }

  function c(e, t, n) {
    var i = q.get(t.layerId),
      r = null,
      a = null,
      o = null;
    if (t.experimentId) {
      var s = I.find(i.experiments, {
        id: t.experimentId
      });
      if (s && (r = s.name || null, o = s.integrationSettings, t.variationId)) {
        var u = I.find(s.variations, {
          id: t.variationId
        });
        u && (a = u.name || null)
      }
    }
    var c = F.getReferrer() || b.getReferrer(),
      l = {
        sessionId: j.getSessionId(),
        decisionTicketAudienceIds: n.audienceIds,
        visitorId: Z.getRandomId(),
        visitorUUID: Z.getUUID(),
        decisionId: e,
        activationId: z.getActivationId(),
        namespace: z.getNamespace(),
        timestamp: w.now(),
        pageId: n.pageId || null,
        variationId: t.variationId,
        variationName: a,
        experimentId: t.experimentId,
        experimentName: r,
        layerId: t.layerId,
        layerName: i.name,
        layerPolicy: i.policy,
        accountId: z.getAccountId(),
        projectId: z.getProjectId(),
        revision: String(z.getRevision()),
        clientVersion: A.VERSION,
        referrer: c,
        integrationStringVersion: i.integrationStringVersion,
        integrationSettings: I.extend({}, i.integrationSettings, o)
      };
    return l
  }

  function l(e, t, n) {
    var i = I.extend({}, e, {
      isLayerHoldback: t,
      clientEngine: A.ENGINE,
      anonymizeIP: I.isNull(z.getAnonymizeIP()) ? void 0 : z.getAnonymizeIP(),
      userFeatures: h(n)
    });
    return i
  }

  function d(e, t, n, i) {
    return {
      decisionId: e,
      timestamp: w.now(),
      revision: z.getRevision(),
      clientEngine: A.ENGINE,
      clientVersion: A.VERSION,
      projectId: z.getProjectId(),
      accountId: z.getAccountId(),
      activationId: z.getActivationId(),
      sessionId: j.getSessionId(),
      visitorId: Z.getRandomId(),
      visitorUUID: Z.getUUID(),
      decision: t,
      decisionTicket: n,
      userFeatures: h(i)
    }
  }

  function f(e) {
    var t = {
      eventId: B.generate(),
      timestamp: w.now(),
      revision: z.getRevision(),
      clientEngine: A.ENGINE,
      clientVersion: A.VERSION,
      projectId: z.getProjectId(),
      accountId: z.getAccountId(),
      activationId: z.getActivationId(),
      sessionId: j.getSessionId(),
      isGlobalHoldback: z.isGlobalHoldback(),
      visitorId: Z.getRandomId(),
      visitorUUID: Z.getUUID(),
      activeViewStates: e.activeViewStates,
      layerStates: e.layerStates,
      userFeatures: h(e.visitorProfile)
    };
    return t
  }

  function g(e) {
    var t = H.getViewState(e),
      n = t && t.isActive ? t.metadata : {};
    return n
  }

  function p(e) {
    var t = {};
    return e.pageId ? g(e.pageId) : t
  }

  function h(e) {
    var t = Y.getAllPlugins(R.PluginTypes.visitorProfileProviders),
      n = I.filter(t, {
        shouldTrack: !0
      }),
      i = {
        id: null,
        type: null,
        name: "",
        value: null,
        shouldIndex: !0
      };
    return I.reduce(n, (function(t, n) {
      try {
        var r = n.provides,
          a = e[r],
          o = [];
        if (!I.isUndefined(a)) {
          I.isObject(a) ? o = I.map(a, (function(e, t) {
            var n = I.isObject(e) ? e : {
              value: e
            };
            return I.extend({}, {
              type: r,
              name: t
            }, n)
          })) : o.push({
            type: r,
            value: a
          });
          var s = I(o).map((function(e) {
            return I.pick(I.extend({}, i, e), I.keys(i))
          })).filter((function(e) {
            return !!e.value
          })).value();
          t = t.concat(s)
        }
      } catch (e) {
        k.warn("Error evaluating userFeature against visitorProfile:", e)
      }
      return t
    }), [])
  }

  function v(e, t, n) {
    var i = _(e, n);
    k.debug("Found " + i.length + " analytics integrations defining a " + e + " hook"), k.debug("Calling each with data: ", t), I.each(i, (function(e) {
      try {
        k.debug("Calling plugin: " + e.name), e.hookFn(t), k.debug("Called plugin: " + e.name)
      } catch (e) {
        k.error(e)
      }
    }))
  }

  function _(e, t) {
    var n = [];
    return I.each(Y.getAllPlugins(R.PluginTypes.analyticsTrackers), (function(i, r) {
      if (i[e] && (!t || !i[t])) try {
        n.push({
          name: r,
          hookFn: D.evaluate(i[e])
        })
      } catch (e) {
        k.error(e)
      }
    })), n
  }

  function E(e, t, n) {
    var i = m(e, t);
    k.debug("Found " + i.length + " analytics integrations  defining a trackLayerDecision " + e + " timing of " + t.join("|")), k.debug("Calling each with data: ", n), I.each(i, (function(e) {
      try {
        k.debug("Calling plugin: " + e.name), e.hookFn(n), k.debug("Called plugin: " + e.name)
      } catch (e) {
        k.error(e)
      }
    }))
  }

  function m(e, t) {
    var n = [];
    return I.each(Y.getAllPlugins(R.PluginTypes.analyticsTrackers), (function(i, r) {
      I.includes(t, i[e]) && n.push({
        name: r,
        hookFn: i.trackLayerDecision
      })
    })), n
  }
  var I = n(2),
    y = n(8),
    S = n(73),
    T = n(6),
    A = n(88),
    w = n(10),
    D = n(18),
    b = n(70),
    R = n(16),
    O = n(11),
    C = n(74),
    N = n(101),
    P = n(102),
    L = n(12),
    V = n(103),
    k = n(15),
    x = (n(76), n(77).Promise),
    F = n(90),
    M = n(104),
    U = n(106),
    G = n(105),
    B = n(5),
    z = D.get("stores/global"),
    j = D.get("stores/session"),
    H = D.get("stores/view"),
    Y = D.get("stores/plugins"),
    K = D.get("stores/layer"),
    q = D.get("stores/layer_data"),
    W = D.get("stores/observed_redirect"),
    X = D.get("stores/pending_redirect"),
    Q = D.get("stores/visitor"),
    $ = D.get("stores/directive"),
    J = D.get("stores/event_data"),
    Z = D.get("stores/visitor_id"),
    ee = "COOKIE",
    te = !0,
    ne = 1e3;
  t.trackClientActivation = function() {
    if ($.shouldSendTrackingData()) {
      var e = u();
      return v("onClientActivation", e), e
    }
  }, t.trackCustomEvent = function(e, t) {
    t = t || {};
    var n = a(e, t),
      i = J.getByApiName(e),
      r = {
        name: e,
        type: P.CUSTOM,
        category: n.eventCategory,
        tags: I.omit(n.eventTags, "revenue")
      };
    if (I.isUndefined(t.revenue) || (r.revenue = t.revenue), S.emitAnalyticsEvent({
        name: i ? i.name || i.apiName : e,
        apiName: i ? i.apiName : void 0,
        type: P.CUSTOM,
        tags: I.omit(n.eventTags, "revenue"),
        category: n.eventCategory,
        metrics: r.revenue ? {
          revenue: r.revenue
        } : {}
      }, !$.shouldSendTrackingData()), $.shouldSendTrackingData()) return T.addEvent(r), v("onCustomEvent", n), n
  }, t.trackDecisionEvent = function(e, t) {
    var n = q.get(e.layerId),
      a = V.description(n);
    if (!$.shouldSendTrackingData()) return void k.log("Analytics / Not tracking decision for Campaign", a);
    var o = B.generate();
    L.dispatch(y.RECORD_LAYER_DECISION_EVENT_ID, {
      layerId: e.layerId,
      pageId: t.pageId,
      decisionId: o
    });
    var s = Q.getVisitorProfile();
    ee ? (i(o, e, t, s, ee), r(o, e, t, s, !0)) : r(o, e, t, s, !1)
  }, t.trackPostRedirectDecisionEvent = function() {
    if (!$.shouldSendTrackingData()) return x.resolve();
    if (W.hasTracked()) return x.resolve();
    var e = W.get();
    if (!e) return x.resolve();
    var t = Q.getVisitorProfile(),
      n = l(e, !1, t),
      i = G.TrackLayerDecisionTimingFlags.postRedirectPolicy;
    if (n.timing = i, E(i, [G.PostRedirectPolicies.TRACK_IMMEDIATELY], n), te) {
      var r = new x(function(e, t) {
          var n = C.on({
            filter: {
              type: N.TYPES.LIFECYCLE,
              name: "originsSynced"
            },
            handler: function() {
              e(), C.off(n)
            }
          })
        }),
        a = U.makeTimeoutPromise(ne);
      return x.race([r, a]).then((function() {
        k.log("Calling trackers after successful sync")
      }), (function(e) {
        k.warn("Calling trackers after failed sync:", e)
      })).then((function() {
        t = Q.getVisitorProfile(), n = l(e, !1, t), n.timing = G.TrackLayerDecisionTimingFlags.postRedirectPolicy, E(G.TrackLayerDecisionTimingFlags.postRedirectPolicy, [G.PostRedirectPolicies.TRACK_AFTER_SYNC], n), L.dispatch(y.REGISTER_TRACKED_REDIRECT_DATA)
      }))["catch"]((function(e) {
        k.error("Error when calling trackers after sync:", e)
      }))
    }
    return E(G.TrackLayerDecisionTimingFlags.postRedirectPolicy, [G.PostRedirectPolicies.TRACK_AFTER_SYNC], n), L.dispatch(y.REGISTER_TRACKED_REDIRECT_DATA), x.resolve()
  }, t.trackClickEvent = function(e) {
    var t = s(e),
      n = {
        name: e.apiName,
        type: e.eventType,
        category: t.eventCategory,
        tags: t.eventTags
      };
    if (S.emitAnalyticsEvent({
        name: e.name || e.apiName,
        apiName: e ? e.apiName : void 0,
        type: e.eventType,
        category: t.eventCategory,
        tags: t.eventTags,
        metrics: {}
      }, !$.shouldSendTrackingData()), $.shouldSendTrackingData()) return T.addEvent(n), v("onClickEvent", t), t
  }, t.trackViewActivation = function(e) {
    var t = H.getViewState(e.id);
    if (!t.isActive) return void k.debug("Inactive view passed to `trackViewActivation`");
    var n = o(e, t),
      i = {
        name: e.apiName,
        type: P.PAGEVIEW,
        category: n.viewCategory,
        tags: n.eventTags
      };
    return S.emitAnalyticsEvent({
      name: e.name || e.apiName,
      apiName: e.apiName,
      type: P.PAGEVIEW,
      category: n.viewCategory,
      tags: n.eventTags,
      metrics: {}
    }, !$.shouldSendTrackingData()), $.shouldSendTrackingData() ? (T.addEvent(i), L.dispatch(y.TRACK_VIEW_ACTIVATED_EVENT, {
      pageId: e.id,
      eventData: n
    }), v("onPageActivated", n), n) : void 0
  }
}), (function(e, t) {
  t.TYPES = {
    ACTION: "action",
    ANALYTICS: "analytics",
    EDITOR: "editor",
    LIFECYCLE: "lifecycle"
  }
}), (function(e, t) {
  e.exports = {
    CLICK: "click",
    CUSTOM: "custom",
    ENGAGEMENT: "engagement",
    PAGEVIEW: "pageview"
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(10),
    o = n(18),
    s = n(12),
    u = o.get("stores/global"),
    c = o.get("stores/session"),
    l = 2e3;
  t.recordLayerDecision = function(e, t, n) {
    return s.dispatch(r.RECORD_LAYER_DECISION, {
      layerId: e,
      decision: n,
      decisionTicket: t,
      sessionId: c.getSessionId(),
      activationId: u.getActivationId(),
      timestamp: a.now(),
      revision: u.getRevision(),
      namespace: u.getNamespace(),
      pageId: t.pageId
    }), n
  }, t.relatedAudienceIds = function(e) {
    var t = {},
      n = ["and", "or", "not"];
    return i.each(e.experiments, (function(e) {
      i.each(i.flattenDeep(e.audienceIds), (function(e) {
        i.includes(n, e) || (t[e] = !0)
      }))
    })), i.keys(t)
  }, t.getActivationTimeout = function(e) {
    var t = e.activation;
    return t && null !== t.timeout && void 0 !== t.timeout ? t.timeout : l
  }, t.description = function(e) {
    return (e.name ? '"' + e.name + '" ' : "") + "(" + e.id + ")"
  }
}), (function(e, t, n) {
  function i(e) {
    try {
      var t = r(e)
    } catch (e) {
      return _.error("Relay / Error computing redirect relay cookie: ", e), void g.emitError(e)
    }
    _.debug("Relay / Setting redirect relay cookie:", t);
    try {
      f.set(h.COOKIES.REDIRECT, t, {
        maxAge: 5,
        encodeValue: !1
      })
    } catch (e) {
      _.error("Relay / Failed to set redirect relay cookie", e), g.emitError(e)
    }
  }

  function r(e) {
    var t = [],
      n = l.reduce(e, (function(e, n, i) {
        var r = S[i];
        return r ? (r.isMulti ? l.forEach(n, (function(t, n) {
          t = r.valueToValueString ? r.valueToValueString(t, n) : String(t), l.isNull(t) || (t = (r.encodeValueString || encodeURIComponent)(t), e.push(encodeURIComponent(r.relayName + I + n) + "=" + t))
        })) : l.isNull(n) || (n = (r.valueToValueString || String)(n), n = (r.encodeValueString || encodeURIComponent)(n), e.push(r.relayName + "=" + n)), e) : (t.push(i), e)
      }), []);
    if (t.length) throw new Error("Relay / Don't know how to relay some fields:", t);
    return n.sort(), n.join("&")
  }

  function a() {
    var e = f.get(h.COOKIES.REDIRECT, !1);
    if (e) {
      _.log("Relay / Found redirect cookie:", e);
      var t = o(e);
      if (!t.visitorId) {
        _.warn("Relay / Missing required field visitorId, attempting to load from VISITOR_ID cookie");
        var n = f.get(h.COOKIES.VISITOR_ID);
        t.visitorId = l.isString(n) ? n : null
      }
      if (!t.uuid, !1) {
        var i = f.get(h.COOKIES.VISITOR_UUID);
        t.visitorUUID = l.isString(i) ? i : null
      }
      return t
    }
  }

  function o(e) {
    var t = {},
      n = e.split("&");
    return l.forEach(n, (function(e) {
      var n = e.split("=");
      if (2 !== n.length) return void _.warn("Relay / Skipping invalid segment:", e);
      var i = f.safeDecodeURIComponent(n[0]),
        r = T[i];
      if (!r && (r = l.find(y, (function(e) {
          return e.isMulti && 0 === i.indexOf(e.relayName + I)
        })), !r)) return void _.warn("Relay / Skipping segment with unknown field identifier:", e, i);
      var a = n[1];
      try {
        if (r.isMulti) {
          t[r.name] = t[r.name] || {};
          var o = i.substring(r.relayName.length + I.length);
          a = (r.decodeValueString || f.safeDecodeURIComponent)(a), a = (r.valueFromValueString || l.identity)(a, o), t[r.name][o] = a
        } else a = (r.decodeValueString || f.safeDecodeURIComponent)(a), a = (r.valueFromValueString || l.identity)(a), t[r.name] = a
      } catch (t) {
        return _.warn("Relay / Skipping segment due to decode or parse error:", e, t), void g.emitError(t)
      }
    })), t
  }

  function s(e, t) {
    var n = null;
    if (e) {
      var i = m.getPlugin(h.PluginTypes.analyticsTrackers, t);
      if (i && l.isFunction(i.serializeSettings)) try {
        n = i.serializeSettings(e)
      } catch (e) {
        _.warn("Analytics / Failed to persist integrationSettings for plugin:", t, e)
      }
    }
    return n
  }

  function u(e, t) {
    var n = null,
      i = m.getPlugin(h.PluginTypes.analyticsTrackers, t);
    if (i && l.isFunction(i.deserializeSettings)) try {
      n = i.deserializeSettings(e)
    } catch (e) {
      _.warn("Analytics / Failed to persist integrationSettings for plugin:", t, e)
    }
    return n
  }

  function c(e) {
    var t = e.pageId || void 0;
    v.dispatch(d.RECORD_LAYER_DECISION, {
      layerId: e.layerId,
      decision: {
        layerId: e.layerId,
        experimentId: e.experimentId,
        variationId: e.variationId,
        isLayerHoldback: !1
      },
      decisionTicket: {
        audienceIds: e.decisionTicketAudienceIds,
        bucketingId: e.visitorUUID || e.visitorId,
        globalHoldback: 0,
        preferredVariationMap: void 0,
        pageId: t,
        activationId: e.activationId
      },
      sessionId: e.sessionId,
      activationId: e.activationId,
      timestamp: e.timestamp,
      revision: e.revision,
      namespace: e.namespace,
      pageId: t
    }), v.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID, {
      layerId: e.layerId,
      pageId: t,
      decisionId: e.decisionId
    }), v.dispatch(d.ACTION_EXECUTED, {
      sessionId: e.sessionId,
      layerId: e.layerId,
      pageId: e.pageId,
      timestamp: e.timestamp,
      activationId: e.activationId
    })
  }
  var l = n(2),
    d = n(8),
    f = n(65),
    g = n(73),
    p = n(18),
    h = n(16),
    v = n(12),
    _ = n(15),
    E = n(105),
    m = p.get("stores/plugins"),
    I = ".",
    y = [{
      name: "sessionId",
      relayName: "s"
    }, {
      name: "decisionTicketAudienceIds",
      relayName: "as",
      valueToValueString: function(e) {
        return l.map(e, encodeURIComponent).join(",")
      },
      encodeValueString: l.identity,
      decodeValueString: l.identity,
      valueFromValueString: function(e) {
        return l.map(e.split(","), f.safeDecodeURIComponent)
      }
    }, {
      name: "decisionId",
      relayName: "d"
    }, {
      name: "activationId",
      relayName: "aId"
    }, {
      name: "pageId",
      relayName: "vId",
      isNullable: !0
    }, {
      name: "variationId",
      relayName: "v",
      isNullable: !0
    }, {
      name: "referrer",
      relayName: "r"
    }, {
      name: "timestamp",
      relayName: "t",
      valueFromValueString: Number
    }, {
      name: "visitorId",
      relayName: "i"
    }, {
      name: "visitorUUID",
      relayName: "uuid",
      isNullable: !0
    }, {
      name: "projectId",
      relayName: "p"
    }, {
      name: "revision",
      relayName: "n"
    }, {
      name: "clientVersion",
      relayName: "cV"
    }, {
      name: "namespace",
      relayName: "ns"
    }, {
      name: "accountId",
      relayName: "a"
    }, {
      name: "layerId",
      relayName: "l"
    }, {
      name: "layerName",
      relayName: "lN",
      isNullable: !0
    }, {
      name: "layerPolicy",
      relayName: "lP"
    }, {
      name: "experimentId",
      relayName: "x",
      isNullable: !0
    }, {
      name: "experimentName",
      relayName: "xN",
      isNullable: !0
    }, {
      name: "variationName",
      relayName: "vN",
      isNullable: !0
    }, {
      name: "integrationStringVersion",
      relayName: "isv",
      valueFromValueString: Number,
      isNullable: !0
    }, {
      name: "integrationSettings",
      relayName: "iS",
      isMulti: !0,
      valueToValueString: s,
      valueFromValueString: u,
      isNullable: !0
    }],
    S = {},
    T = {};
  l.forEach(y, (function(e) {
    S[e.name] = e, T[e.relayName] = e
  })), t.persist = function(e, t) {
    t === E.RedirectRelayMedia.COOKIE ? i(e) : _.error("Relay / Unsupported redirect relay medium: " + t)
  }, t.load = function() {
    var e;
    if (e || (e = a()), e) {
      var t = [];
      return l.forEach(y, (function(n) {
        (l.isNull(e[n.name]) || l.isUndefined(e[n.name])) && (n.isNullable ? e[n.name] = null : (delete e[n.name], t.push(n.name)))
      })), t.length ? void _.error("Relay / Observed redirect data with missing fields:", t) : (v.dispatch(d.LOAD_REDIRECT_DATA, e), v.dispatch(d.ADD_CLEANUP_FN, {
        lifecycle: h.Lifecycle.postVisitorProfileLoad,
        cleanupFn: function() {
          c(e)
        }
      }), e)
    }
  }
}), (function(e, t, n) {
  var i = n(9);
  t.TrackLayerDecisionTimingFlags = i({
    preRedirectPolicy: null,
    postRedirectPolicy: null,
    nonRedirectPolicy: null
  }), t.PreRedirectPolicies = i({
    PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT: null,
    PERSIST_BEFORE_REDIRECT: null
  }), t.PostRedirectPolicies = i({
    TRACK_IMMEDIATELY: null,
    TRACK_AFTER_SYNC: null
  }), t.NonRedirectPolicies = i({
    TRACK_IMMEDIATELY: null
  }), t.RedirectRelayMedia = i({
    COOKIE: null
  })
}), (function(e, t, n) {
  var i = n(77).Promise;
  t.makeTimeoutPromise = function(e) {
    return new i(function(t, n) {
      setTimeout((function() {
        n(new Error("Timed out after " + e + " ms"))
      }), e)
    })
  }
}), (function(e, t, n) {
  function i(e) {
    var t = ["type", "selector", "attributes", "value"];
    return r.extend({}, e, {
      changeSet: r.map(e.changeSet, (function(e) {
        return r.pick(e, t)
      }))
    })
  }
  var r = n(2),
    a = n(18),
    o = a.get("stores/audience_data"),
    s = n(74),
    u = n(101),
    c = n(108);
  t.emitLayerDecided = function(e) {
    var t = e.decisionTicket ? e.decisionTicket.audienceIds : [],
      n = r.map(t, (function(e) {
        return {
          id: e,
          name: o.get(e).name
        }
      })),
      i = {
        type: u.TYPES.LIFECYCLE,
        name: "layerDecided",
        data: r.extend(e, {
          audiences: n
        })
      },
      a = c.translateLayerEventToCampaignEvent(i);
    s.emit(i), s.emit(a)
  }, t.emitViewActivated = function(e) {
    var t = {
        type: u.TYPES.LIFECYCLE,
        name: "viewActivated",
        data: e
      },
      n = c.translateViewActivatedToPageActivated(t);
    s.emit(t), s.emit(n)
  }, t.emitViewsActivated = function(e) {
    var t = {
      type: u.TYPES.LIFECYCLE,
      name: "viewsActivated",
      data: e
    };
    s.emit(t)
  }, t.emitPageDeactivated = function(e) {
    var t = {
      type: u.TYPES.LIFECYCLE,
      name: "pageDeactivated",
      data: e
    };
    s.emit(t)
  }, t.emitActivateEvent = function() {
    s.emit({
      type: u.TYPES.LIFECYCLE,
      name: "activate"
    }, !0)
  }, t.emitActivatedEvent = function() {
    s.emit({
      type: u.TYPES.LIFECYCLE,
      name: "activated"
    })
  }, t.emitInitializedEvent = function() {
    var e = {
      type: u.TYPES.LIFECYCLE,
      name: "initialized"
    };
    window.optimizely && (window.optimizely.initialized = !0), s.emit(e)
  }, t.emitOriginsSyncedEvent = function() {
    var e = {
      type: u.TYPES.LIFECYCLE,
      name: "originsSynced"
    };
    s.emit(e)
  }, t.emitActionAppliedEvent = function(e) {
    var t = {
      type: u.TYPES.ACTION,
      name: "applied",
      data: {
        type: e.type,
        changes: i(e).changeSet,
        campaignId: e.layerId,
        pageId: e.pageId,
        experimentId: e.experimentId,
        variationId: e.variationId
      }
    };
    s.emit(t)
  }, t.emitActionsForDecisionAppliedEvent = function(e, t) {
    var n = {
      type: u.TYPES.ACTION,
      name: "appliedAllForDecision",
      data: {
        actions: r.map(t, i),
        decision: e
      }
    };
    s.emit(n)
  }, t.emitSendEvents = function() {
    var e = {
      type: u.TYPES.ANALYTICS,
      name: "sendEvents"
    };
    s.emit(e)
  }, t.emitHoldEvents = function() {
    var e = {
      type: u.TYPES.ANALYTICS,
      name: "holdEvents"
    };
    s.emit(e)
  }
}), (function(e, t, n) {
  var i = n(2);
  t.translateDecisionToCampaignDecision = function(e) {
    return r(i.cloneDeep(e), {
      layerId: "campaignId",
      isLayerHoldback: "isCampaignHoldback"
    })
  }, t.translateLayerEventToCampaignEvent = function(e) {
    var t = {};
    return t.campaign = e.data.layer, t.decisionTicket = e.data.decisionTicket, t.decision = this.translateDecisionToCampaignDecision(e.data.decision), t.audiences = e.data.audiences, {
      type: "lifecycle",
      name: "campaignDecided",
      data: t
    }
  }, t.translateViewActivatedToPageActivated = function(e) {
    return {
      type: "lifecycle",
      name: "pageActivated",
      data: {
        page: e.data.view
      }
    }
  };
  var r = function(e, t) {
    var n = i.omit(e, i.keys(t));
    return i.each(t, (function(t, i) {
      n[t] = e[i]
    })), n
  }
}), (function(e, t, n) {
  var i = n(8),
    r = n(12),
    a = n(77).Promise,
    o = n(18),
    s = o.get("stores/async_request");
  t.makeAsyncRequest = function(e, t) {
    var n = s.getPromise(e);
    if (n) return n;
    var o, u, c = new a(function(e, t) {
      o = e, u = t
    });
    return r.dispatch(i.REGISTER_ASYNC_DEFERRED, {
      source: e,
      promise: c,
      resolver: o,
      rejecter: u
    }), t && t(), c
  }, t.resolveRequest = function(e, t) {
    r.dispatch(i.RESOLVE_DEFERRED, {
      source: e,
      resolveWith: t
    })
  }, t.rejectRequest = function(e, t) {
    r.dispatch(i.REJECT_DEFERRED, {
      source: e,
      rejectWith: t
    })
  }
}), (function(e, t, n) {
  function i() {
    var e = Boolean(m.result(window.optimizely, "initialized"));
    w.dispatch(I.LOAD_DIRECTIVE, {
      alreadyInitialized: e
    })
  }

  function r() {
    w.dispatch(I.LOAD_DIRECTIVE, {
      mutationObserverAPISupported: C.isMutationObserverAPISupported()
    })
  }

  function a() {
    var e = C.getUserAgent() || "";
    if (!m.isString(e)) return void D.warn("Directive / userAgent not a string");
    e = e.toLowerCase();
    var t = ["googlebot", "yahoo! slurp", "bingbot", "bingpreview", "msnbot", "keynote", "ktxn", "khte", "gomezagent", "alertsite", "yottaamonitor", "pingdom.com_bot", "aihitbot", "baiduspider", "adsbot-google", "mediapartners-google", "applebot", "catchpoint", "phantomjs", "moatbot", "facebookexternalhit"],
      n = function(t) {
        if (m.includes(e, t)) return D.warn("Directive / Matches bot:", t), !0
      };
    m.some(t, n) && (D.log("Directive / Disabling tracking"), w.dispatch(I.LOAD_DIRECTIVE, {
      trackingDisabled: !0
    }))
  }

  function o() {
    var e = S.get(A.COOKIES.OPT_OUT),
      n = R.getQueryParamValue(N.OPT_OUT);
    e ? n === e || "true" !== n && "false" !== n ? w.dispatch(I.LOAD_DIRECTIVE, {
      shouldOptOut: "true" === e
    }) : t.setOptOut("true" === n) : "true" === n && t.setOptOut(!0)
  }

  function s() {
    var e = !1,
      t = [N.AB_PREVIEW, N.DISABLE];
    t.push(N.EDITOR);
    for (var n = 0; n < t.length; n++)
      if ("true" === R.getQueryParamValue(t[n])) {
        D.warn("Directive / Not activating because " + t[n] + " is set."), e = !0;
        break
      }
    w.dispatch(I.LOAD_DIRECTIVE, {
      disabled: e
    })
  }

  function u() {
    w.dispatch(I.LOAD_DIRECTIVE, {
      isPreview: !1
    })
  }

  function c() {
    var e = R.getQueryParamValue(N.LEGACY_PREVIEW);
    e && D.log("Directive / Is legacy preview mode"), w.dispatch(I.LOAD_DIRECTIVE, {
      isLegacyPreview: !!e
    })
  }

  function l() {
    w.dispatch(I.LOAD_DIRECTIVE, {
      isEditor: !1
    })
  }

  function d() {
    w.dispatch(I.LOAD_DIRECTIVE, {
      isSlave: !1
    })
  }

  function f() {
    var e = C.getGlobal("optlyDesktop"),
      t = !(!e || m.isUndefined(e["p13nInner"]));
    t && D.log("Directive / Is running in desktop app editor"), w.dispatch(I.LOAD_DIRECTIVE, {
      isRunningInDesktopApp: t
    })
  }

  function g() {
    var e = "true" === R.getQueryParamValue(N.EDITOR_V2);
    e && D.log("Directive / Is running in editor"), w.dispatch(I.LOAD_DIRECTIVE, {
      isRunningInV2Editor: e
    })
  }

  function p() {
    var e = S.get(A.COOKIES.TOKEN) || null,
      t = R.getQueryParamValue(N.TOKEN) || e;
    w.dispatch(I.LOAD_DIRECTIVE, {
      projectToken: t
    })
  }

  function h() {
    var e = S.get(A.COOKIES.PREVIEW),
      t = [],
      n = R.getQueryParamValue(N.FORCE_AUDIENCES);
    if (n) t = n.split(",");
    else if (e) try {
      var i = O.parse(e);
      t = i.forceAudienceIds
    } catch (t) {
      var r = new b("Failed to parse previewCookie in registerForceAudienceIds: " + e),
        a = {
          originalMessage: t.message,
          userError: !0
        };
      y.emitError(r, a)
    }
    t.length && D.warn("Directive / Force parameters disabled - ignoring force audience IDs.")
  }

  function v() {
    var e = S.get(A.COOKIES.PREVIEW),
      t = [],
      n = R.getQueryParamValue(N.FORCE_VARIATIONS);
    if (n) t = n.split(",");
    else if (e) try {
      var i = O.parse(e);
      t = i.forceVariationIds
    } catch (t) {
      var r = new b("Failed to parse previewCookie in registerForceVariationIds: " + e),
        a = {
          originalMessage: t.message,
          userError: !0
        };
      y.emitError(r, a)
    }
    t.length && D.warn("Directive / Force parameters disabled - ignoring force variation IDs.")
  }

  function _() {
    var e = R.getQueryParamValue(N.FORCE_TRACKING);
    e && w.dispatch(I.LOAD_DIRECTIVE, {
      forceTracking: e
    })
  }

  function E() {
    var e = "OFF",
      t = R.getQueryParamValue("optimizely_log");
    if (t) {
      var n = t.split(":");
      "" !== n[0] && (e = String(n[0]).toUpperCase()), "undefined" != typeof n[1] && D.setLogMatch(n[1])
    }
    D.setLogLevel(e)
  }
  var m = n(2),
    I = n(8),
    y = n(73),
    S = n(65),
    T = n(66).create,
    A = n(16),
    w = n(12),
    D = n(15),
    b = t.JSONParseError = T("JSONParseError"),
    R = n(111),
    O = n(17),
    C = n(71),
    N = {
      AB_PREVIEW: "optimizely_show_preview",
      DISABLE: "optimizely_disable",
      EDITOR: "optimizely_editor",
      EDITOR_V2: "optimizely_p13n",
      FORCE_AUDIENCES: "optimizely_x_audiences",
      FORCE_VARIATIONS: "optimizely_x",
      LEGACY_PREVIEW: "optimizely_show_preview",
      OPT_OUT: "optimizely_opt_out",
      PREVIEW_LAYER_IDS: "optimizely_preview_layer_ids",
      TOKEN: "optimizely_token",
      FORCE_TRACKING: "optimizely_force_tracking"
    };
  t.populateDirectiveData = function() {
    E(), a(), i(), r(), o(), s(), l(), u(), c(), d(), f(), g(), p(), h(), v(), _()
  }, t.setOptOut = function(e) {
    e ? (D.warn("Directive / Opting out"), S.set(A.COOKIES.OPT_OUT, "true", null, !0)) : S.remove(A.COOKIES.OPT_OUT), w.dispatch(I.LOAD_DIRECTIVE, {
      shouldOptOut: e
    })
  }
}), (function(e, t, n) {
  var i = n(112),
    r = n(71);
  t.getLanguage = function() {
    return r.getNavigatorLanguage()
  }, t.getQueryParams = i.getQueryParams, t.getQueryParamValue = i.getQueryParamValue, t.getUrl = function() {
    return r.getHref()
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(71);
  t.getQueryParams = function() {
    var e = r.getLocationSearch() || "";
    if (0 === e.indexOf("?") && (e = e.substring(1)), 0 === e.length) return [];
    for (var t = e.split("&"), n = [], i = 0; i < t.length; i++) {
      var a = "",
        o = "",
        s = t[i].split("=");
      s.length > 0 && (a = s[0]), s.length > 1 && (o = s[1]), n.push([a, o])
    }
    return n
  }, t.getQueryParamValue = function(e) {
    for (var n = t.getQueryParams(), i = 0; i < n.length; i++)
      if (n[i][0] === e) return n[i][1];
    return null
  }, t.queryStringFromMap = function(e) {
    return i.map(e, (function(e, t) {
      return t + "=" + e
    })).join("&")
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(8),
    a = n(18),
    o = n(16),
    s = n(74),
    u = n(12);
  t.registerApiModule = function(e, t) {
    i.isArray(t) && (t = a.evaluate(t)), u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.apiModules,
      name: e,
      plugin: t
    })
  }, t.registerDependency = function(e, t) {
    var n = a.get(e);
    n || a.register(e, t)
  }, t.registerVisitorProfileProvider = function(e) {
    u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.visitorProfileProviders,
      name: e.provides,
      plugin: e
    })
  }, t.registerViewProvider = function(e) {
    u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.viewProviders,
      name: e.provides,
      plugin: e
    })
  }, t.registerAudienceMatcher = function(e, t) {
    u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.audienceMatchers,
      name: e,
      plugin: t
    })
  }, t.registerViewMatcher = function(e, t) {
    u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.viewMatchers,
      name: e,
      plugin: t
    })
  }, t.registerAnalyticsTracker = function(e, t) {
    u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.analyticsTrackers,
      name: e,
      plugin: t
    })
  }, t.registerViewTagLocator = function(e, t) {
    u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.viewTagLocators,
      name: e,
      plugin: t
    })
  }, t.registerAudiencePlugin = function(e) {
    e.dependencies && i.each(e.dependencies, (function(e, n) {
      t.registerDependency(n, e)
    }));
    var n, r = "vendor." + e.vendor;
    n = i.isString(e.provider) ? a.get(e.provider)(e.vendor) : i.isFunction(e.provider) ? e.provider(e.vendor) : i.cloneDeep(e.provider), t.registerVisitorProfileProvider(i.extend(n, {
      provides: r
    }));
    var o;
    o = i.isString(e.matcher) ? a.get(e.matcher) : e.matcher;
    var s = {
      fieldsNeeded: [r],
      match: function(e, t) {
        return o(e[r], t)
      }
    };
    t.registerAudienceMatcher(r, s)
  }, t.registerWidget = function(e) {
    i.isArray(e) && (e = a.evaluate(e));
    var t = s.on({
        filter: {
          type: "showWidget",
          name: e.widgetId
        },
        handler: e.showFn
      }),
      n = s.on({
        filter: {
          type: "hideWidget",
          name: e.widgetId
        },
        handler: e.hideFn
      });
    return {
      showToken: t,
      hideToken: n
    }
  }, t.registerChangeApplier = function(e, t) {
    u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.changeAppliers,
      name: e,
      plugin: t
    })
  }, t.registerDecider = function(e, t) {
    u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.deciders,
      name: e,
      plugin: t
    })
  }, t.registerEventImplementation = function(e, t) {
    u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.eventImplementations,
      name: e,
      plugin: t
    })
  }, t.registerViewTrigger = function(e, t) {
    u.dispatch(r.REGISTER_PLUGIN, {
      type: o.PluginTypes.viewTriggers,
      name: e,
      plugin: t
    })
  }
}), (function(e, t, n) {
  function i(e, t) {
    r.forEach(e, (function(e) {
      if (e.eventType !== d.CUSTOM) {
        var n = h.getPlugin(l.PluginTypes.eventImplementations, e.eventType);
        n ? t ? n.attach(e) : n.detach(e) : g.warn("No implementation found for event type:", e.eventType, "needed for event:", e)
      }
    }))
  }
  var r = n(2),
    a = n(8),
    o = n(107),
    s = n(115),
    u = n(10),
    c = n(18),
    l = n(16),
    d = n(102),
    f = n(12),
    g = n(15),
    p = n(116),
    h = c.get("stores/plugins"),
    v = c.get("stores/view"),
    _ = c.get("stores/view_data"),
    E = c.get("stores/event_data");
  t.parseViewTags = function(e) {
    var n = t.evaluateViewTags(e);
    t.setParsedViewTags(e.id, n)
  }, t.updateAllViewTags = function() {
    var e = v.getActiveViewStates();
    r.each(e, (function(e) {
      var n = _.get(e.id);
      t.parseViewTags(n)
    }))
  }, t.evaluateViewTags = function(e) {
    if (!e.tags) return {};
    var t = r.reduce(e.tags, (function(e, t) {
      try {
        e[t.apiName] = p.getTagValue(t)
      } catch (e) {
        e instanceof p.Error ? g.warn("Page / Ignoring unparseable tag", t, e) : g.error(e)
      }
      return e
    }), {});
    return t
  }, t.createViewTicket = function() {
    var e = {};
    return r.each(h.getAllPlugins(l.PluginTypes.viewProviders), (function(t) {
      e[t.provides] = c.evaluate(t.getter)
    })), e
  }, t.registerViews = function(e) {
    f.dispatch(a.REGISTER_VIEWS, {
      views: e
    })
  }, t.activateViaAPI = function(e, n) {
    n && t.setUserSuppliedViewTags(e.id, n), t.activateMultiple([e], n)
  }, t.getViewsAndActivate = function(e) {
    var n = _.getAllViewsForActivationType(e);
    t.activateMultiple(n)
  }, t.activateMultiple = function(e, n) {
    var a = [];
    r.each(e, (function(e) {
      var r = v.getViewState(e.id),
        s = t.createViewTicket();
      if (r.isActive) return void(e.deactivationEnabled ? t.hasValidStaticConditions(e, s) || t.deactivate(e) : g.log("Not activating Page, already active ", t.description(e)));
      if (!t.hasValidStaticConditions(e, s)) return void g.log("Page / Failed to match page conditions for " + t.description(e), e.staticConditions);
      a.push(e), t.setViewActiveState(e, !0), g.log("Activated Page", t.description(e)), o.emitViewActivated({
        view: e,
        metadata: n
      });
      var u = E.getByPageId(e.id);
      i(u, !0)
    })), r.isEmpty(a) || o.emitViewsActivated({
      views: a
    })
  }, t.deactivate = function(e) {
    var n = v.getViewState(e.id);
    if (!n.isActive) return void g.log("Not deactivating Page, already inactive ", t.description(e));
    t.setViewActiveState(e, !1), g.log("Deactivated Page", t.description(e)), o.emitPageDeactivated({
      page: e
    });
    var r = E.getByPageId(e.id);
    i(r, !1)
  }, t.setViewActiveState = function(e, t) {
    f.dispatch(a.SET_VIEW_ACTIVE_STATE, {
      view: e,
      timestamp: u.now(),
      isActive: t
    })
  }, t.setGlobalTags = function(e) {
    f.dispatch(a.SET_GLOBAL_TAGS, e)
  }, t.setParsedViewTags = function(e, t) {
    f.dispatch(a.UPDATE_PARSED_VIEW_METADATA, {
      pageId: e,
      metadata: t
    })
  }, t.setUserSuppliedViewTags = function(e, t) {
    f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA, {
      pageId: e,
      metadata: t
    })
  }, t.hasValidStaticConditions = function(e, t) {
    if (r.isEmpty(e.staticConditions)) return !0;
    var n = h.getAllPlugins(l.PluginTypes.viewMatchers);
    g.groupCollapsed("Page / Evaluating staticConditions:", e.staticConditions), g.debug("Matching to current value:", t);
    var i = s.evaluate(e.staticConditions, (function(e) {
      var i = e.type,
        r = n[i];
      if (!r) throw new Error("Page / No matcher found for type=" + i);
      return r.match(t, e)
    }));
    return g.groupEnd(), i
  }, t.description = function(e) {
    return '"' + e.name + '" (' + e.id + ")"
  }, t.shouldTriggerImmediately = function(e) {
    return e === l.ViewActivationTypes.DOMChanged || e === l.ViewActivationTypes.URLChanged
  }
}), (function(e, t, n) {
  function i(e, t) {
    for (var n, i, r = 0; r < e.length; r++) {
      if (n = o(e[r], t), n === !1) return !1;
      s.isUndefined(n) && (i = !0)
    }
    if (!i) return !0
  }

  function r(e, t) {
    for (var n, i = !1, r = 0; r < e.length; r++) {
      if (n = o(e[r], t), n === !0) return !0;
      s.isUndefined(n) && (i = !0)
    }
    if (!i) return !1
  }

  function a(e, t) {
    if (1 !== e.length) return !1;
    var n = o(e[0], t);
    return s.isUndefined(n) ? void 0 : !n
  }

  function o(e, t) {
    var n;
    if (s.isArray(e)) {
      var i, r;
      e[0] in d ? (i = e[0], r = e.slice(1)) : (i = l.OR, r = e), c.groupCollapsed('Condition / Applying operator "' + i + '" with args', u.stringify(r));
      try {
        n = d[i](r, t), c.debug("Condition / Result:", n)
      } finally {
        c.groupEnd()
      }
      return n
    }
    return n = t(e), c.debug("Condition / Evaluated:", u.stringify(e), ":", n), n
  }
  var s = n(2),
    u = n(17),
    c = n(15),
    l = {
      AND: "and",
      OR: "or",
      NOT: "not"
    },
    d = {};
  d[l.AND] = i, d[l.OR] = r, d[l.NOT] = a, e.exports = {
    evaluate: o
  }
}), (function(e, t, n) {
  var i = n(16).PluginTypes,
    r = n(18),
    a = r.get("stores/plugins");
  t.getTagValue = function(e) {
    var n = a.getPlugin(i.viewTagLocators, e.locatorType);
    if (!n) throw new t.Error("No locator registered for tag locatorType: " + e.locatorType);
    return n(e)
  }, t.enums = n(117), t.Error = n(118).Error
}), (function(e, t) {
  t.locatorType = {
    CSS_SELECTOR: "css_selector",
    JAVASCRIPT: "javascript",
    URL_REGEX: "url_regex"
  }, t.valueType = {
    STRING: "string",
    NUMBER: "number",
    CURRENCY: "currency"
  }, t.nodeNames = {
    INPUT: "INPUT",
    SELECT: "SELECT"
  }
}), (function(e, t, n) {
  var i = n(66).create;
  t.Error = i("TagError")
}), (function(e, t) {}), (function(e, t, n) {
  var i = n(18);
  i.register("env/jquery", n(121))
}), (function(e, t, n) {
  var i, r = n(71);
  try {
    i = $
  } catch (e) {}
  var a = r.getGlobal("$");
  i && i !== a ? e.exports = i : e.exports = a
}), (function(e, t, n) {
  var i = n(71),
    r = "optimizelyDataApi";
  t.registerFunction = function(e, t) {
    var n = i.getGlobal(r);
    n || (n = {}, i.setGlobal(r, n)), n[e] || (n[e] = t)
  }, t.getFunction = function(e) {
    return i.getGlobal(r)[e]
  }
}), (function(e, t, n) {
  var i = n(70),
    r = n(15),
    a = n(84);
  t.addScriptAsync = function(e, t) {
    var n = i.querySelector("head"),
      a = i.createElement("script");
    a.type = "text/javascript", a.async = !0, a.src = e, t && (a.onload = t), n.insertBefore(a, n.firstChild), r.debug("Asynchronously requesting " + e)
  }, t.addScriptSync = function(e, n) {
    try {
      var o = "optimizely_synchronous_script_" + Math.floor(1e5 * Math.random());
      if (e.indexOf('"') !== -1) return void r.error("Blocked attempt to load unsafe script: " + e);
      if (i.write('<script id="' + o + '" src="' + e + '"></script>'), !i.querySelector("#" + o)) throw new Error("Document.write failed to append script");
      n && n()
    } catch (i) {
      r.debug("Document.write failed for " + e + ": " + i.message);
      var s = function(e) {
        var t = new Function(e.responseText);
        t(), n && n()
      };
      return a.request({
        url: e,
        async: !1,
        contentType: "text/plain",
        success: s
      })["catch"]((function(i) {
        r.error("Failed to load " + e + " via synchronous XHR: " + i.message), t.addScriptAsync(e, n)
      }))
    }
  }
}), (function(e, t, n) {
  function i() {
    var e = null;
    w.isNumber(e) && 0 === pe.getCount() ? (W.log("Activating after delay of", e, "ms because no Experiments are running"), H.dispatch(C.SET_RUM_DATA, {
      data: {
        activateDfd: !0
      }
    }), setTimeout(P.emitActivateEvent, e)) : P.emitActivateEvent()
  }

  function r(e) {
    we.handleError(e.data.error, e.data.metadata)
  }

  function a() {
    w.isArray(window.optimizely) && (window.optimizely = w.filter(window.optimizely, (function(e) {
      var t = !0;
      return !Ae.push(e, t)
    })))
  }

  function o(e) {
    return w.each(e, (function(e, t) {
      q.setItem(t, e)
    })), e
  }

  function s() {
    var e = fe.getAccountId(),
      t = "https://a9733244614.cdn.optimizely.com".replace("__SUBDOMAIN__", "a" + e + "."),
      n = "/client_storage/a" + e + ".html";
    oe.subscribe(q.setItem);
    var i = oe.fetchAll().then((function(e) {
      var t = Te.getCanonicalOrigins();
      if (t) {
        var n = oe.getXDomainUserId(e, t);
        n && (W.log("Syncing cross-origin visitor randomId:", n), ae.persistVisitorId({
          randomId: n
        }))
      }
      return e
    })).then(o);
    return Z.all([oe.load(t, n), i.then((function() {
      ae.loadForeignData()
    })).then((function() {
      W.log("Loaded visitor data from foreign origins"), P.emitOriginsSyncedEvent()
    }), (function(e) {
      W.debug("Ignored error syncing foreign data (expected if waitForOriginSync used:", e.message), W.debug("Enqueuing sync to happen after visitorId set."), H.dispatch(C.ADD_CLEANUP_FN, {
        lifecycle: G.Lifecycle.postVisitorProfileLoad,
        cleanupFn: P.emitOriginsSyncedEvent
      })
    }))])
  }

  function u(e) {
    var t = Ee.getVisitorProfile();
    return ae.populateEagerVisitorData(e, t)
  }

  function c(e, t, n) {
    e = e || [];
    var i = _e.getAllPlugins(G.PluginTypes.visitorProfileProviders),
      r = fe.getGlobalHoldbackThreshold(),
      a = Ee.getVisitorProfile();
    ae.populateLazyVisitorData(i, a);
    var o = ye.getBucketingId();
    if (!o) throw new Error("bucketingId not set");
    var s, u = Ee.getVisitorProfile();
    if (t) {
      var c = Se.getVariationIdMap();
      s = c[t.id]
    }
    var l = {
      bucketingId: o,
      visitorProfile: u,
      audiences: e,
      globalHoldback: r,
      preferredVariationMap: s,
      layer: t
    };
    return t && n && F.isPageIdRelevant(t) ? w.map(n, (function(e) {
      return F.createTicket(w.extend({}, l, {
        pageId: e
      }))
    })) : [F.createTicket(l)]
  }

  function l(e) {
    return {
      bucketingId: ye.getBucketingId(),
      preferredLayerId: Se.getPreferredLayerMap()[e.id]
    }
  }

  function d(e) {
    var t = pe.getAllByPageIds(e),
      n = de.getForceVariationIds(),
      i = de.getForceAudienceIds(),
      r = w.reduce(t, (function(e, t) {
        return t.groupId ? e.groups[t.groupId] || (e.groups[t.groupId] = ge.get(t.groupId)) : e.individual.push(t), e
      }), {
        groups: {},
        individual: []
      });
    W.log("Deciding Campaigns/Experiments for Page(s)", e);
    var a = w.map(r.groups, Y.description).join(", ");
    W.log("Groups:", a);
    var o = w.map(r.individual, K.description).join(", ");
    W.log("Campaigns/Experiments not in Groups (by Campaign id):", o);
    var s = w.map(r.groups, w.partial(f, n, i, e)) || [],
      u = w.map(r.individual, (function(t) {
        var r = w.filter(t.pageIds, w.partial(w.includes, e));
        return g(n, i, r, t)
      })),
      c = s.concat(u);
    return Z.all(c).then((function(t) {
      var n = w.filter(t, (function(e) {
        return !!e
      }));
      return W.log("All Campaigns/Experiments for Page(s) (by Campaign id)", e, "resolved:", w.map(n, K.description).join(", ")), n
    }))
  }

  function f(e, n, i, r) {
    try {
      var a = l(r),
        o = F.decideGroup(r, a);
      if (o.reason) return W.debug("Not activating Group", Y.description(r), "; reason:", o.reason), Z.resolve();
      var s = pe.get(o.layerId);
      if (!s) return W.debug("Visitor was bucketed into a Campaign (" + o.layerId + ") which is not in this snippet"), Z.resolve();
      var u = w.filter(s.pageIds, w.partial(w.includes, i));
      return w.isEmpty(u) ? (W.debug("Not activating Group", Y.description(r), "; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"), Z.resolve()) : t.decideAndExecuteLayerASAP(e, n, u, s)
    } catch (e) {
      return W.error("Error getting decision for Group", Y.description(r), "; ", e), Z.reject(e)
    }
  }

  function g(e, t, n, i) {
    return new Z(function(r, a) {
      try {
        _(i, e, t, n, (function(a) {
          w.each(a, (function(r) {
            var a = r.pageId ? [r.pageId] : n;
            W.debug("Deciding layer: ", i, "with decisionTicket: ", r, "and actionViewIds: ", a), p(i, e, t, a, r)
          })), r(i)
        }))
      } catch (e) {
        W.error("Error getting decision for Campaign: " + K.description(i), e), a(e)
      }
    })
  }

  function p(e, t, n, i, r) {
    var a = K.description(e);
    W.log("Activating Campaign", a, "on Page(s)", i);
    var o = y(e, r, t, n),
      s = !(!t.length && !n.length),
      u = T(e, o, s) || [],
      c = A(u, i);
    if (h(c, e, o, i), w.forEach(i, (function() {
        N.trackDecisionEvent(o, r)
      })), o.error) throw o.error;
    return F.isInCohort(o) ? void v(c, e, o, i) : void W.log("Not activating Campaign: " + K.description(e) + "; not in the cohort because:", o.reason)
  }

  function h(e, t, n, i) {
    var r = K.description(t);
    W.log("Preparing actions", e, "for Campaign", r, "on Page(s)", i), w.forEach(e, O.prepareAction)
  }

  function v(e, t, n, i) {
    var r = K.description(t);
    return W.log("Executing actions", e, "for Campaign", r, "on Page(s)", i), Z.all(w.map(e, (function(e) {
      return O.executePreparedAction(e).then(w.partial(P.emitActionAppliedEvent, e))
    }))).then((function() {
      W.log("All page actions for", n, "applied:", e), P.emitActionsForDecisionAppliedEvent(n, e)
    }))["catch"]((function(e) {
      W.warn("Error evaluating page actions for decision", n, "because:", e)
    }))
  }

  function _(e, t, n, i, r) {
    if (t.length || n.length) return void r(c([], void 0, i));
    var a = K.relatedAudienceIds(e),
      o = w.reduce(a, (function(e, t) {
        var n = ue.get(t);
        return n && e.push(n), e
      }), []);
    I(o, K.getActivationTimeout(e), (function() {
      var t = c(o, e, i);
      w.map(t, (function(t) {
        E(t, o, e)
      })), r(t)
    }))
  }

  function E(e, t, n) {
    var i = w.map(e.audienceIds, ue.get.bind(ue)),
      r = w.filter(t, (function(t) {
        return !w.includes(e.audienceIds, t.id)
      }));
    W.log("When deciding Campaign", K.description(n), "visitor is in audiences:", m(i), "and not in audiences:", m(r))
  }

  function m(e) {
    var t = [];
    return w.each(e, (function(e) {
      t.push(e.name, e)
    })), t
  }

  function I(e, t, n) {
    var i = {},
      r = _e.getAllPlugins(G.PluginTypes.audienceMatchers);
    w.each(e, (function(e) {
      var t = L.requiredAudienceFields(e, r);
      w.each(t, (function(e) {
        i[e] = !0
      }))
    }));
    var a = w.reduce(i, (function(e, t, n) {
      if (w.isUndefined(ae.getAttribute(n))) {
        var i = ae.getPendingAttributeValue(n);
        w.isUndefined(i) || e.push(i)
      }
      return e
    }), []);
    if (0 === a.length) return n();
    var o = [].concat(e),
      s = ee.firstToResolve(w.map(a, (function(e) {
        return Z.resolve(e).then((function() {
          var e = Ee.getVisitorProfile();
          if (o = w.filter(o, (function(t) {
              return w.isUndefined(L.isInAudience(e, t, r))
            })), !w.isEmpty(o)) throw new Error("At least one audience is still pending")
        }))
      })));
    Z.race([s, new Z(function(e, n) {
      setTimeout(n, t)
    })]).then((function() {
      W.log("Activating Campaign after pending Audiences resolved", e), n()
    }), (function() {
      W.log("Activating Campaign after timeout on Audiences", e), n()
    }))
  }

  function y(e, t, n, i) {
    var r, a = K.description(e);
    return n.length ? r = F.getDummyLayerDecision(e, n) : (i.length && (W.log("Applying force audienceIds:", i, "to Campaign", a), t = w.cloneDeep(t), t.audienceIds = i), r = F.decideLayer(e, t)), W.log("Recording decision for Campaign", a, t, "->", r), K.recordLayerDecision(e.id, t, r), r.variationId && r.experimentId && ae.updateVariationIdMap(e.id, r.experimentId, r.variationId), e.groupId && ae.updatePreferredLayerMap(e.groupId, e.id), P.emitLayerDecided({
      layer: e,
      decisionTicket: t,
      decision: r
    }), r
  }

  function S(e) {
    var t = le.getCleanupFns(e);
    if (t.length > 0) {
      for (; t.length > 0;) t.shift()();
      H.dispatch(C.CLEAR_CLEANUP_FN, {
        lifecycle: e
      })
    }
  }

  function T(e, t, n) {
    var i = K.description(e),
      r = "NOT applying changes for Campaign";
    if (!n && fe.isGlobalHoldback()) return W.log(r, i, "(visitor is in global holdback)"), null;
    if (t.isLayerHoldback) return W.log(r, i, "(visitor is in layer holdback)"), null;
    if (!t.experimentId || !t.variationId) return W.log(r, i, "(visitor is not eligible for any Experiments)"), null;
    var a = [].concat(ce.getLayerActions(t.layerId) || [], ce.getExperimentActions(t.experimentId) || [], ce.getExperimentVariationActions(t.experimentId, t.variationId) || []);
    return W.log("Got Actions for Campaign:", i, a), a
  }

  function A(e, t) {
    return w.filter(e, (function(e) {
      return w.isUndefined(e.pageId) || w.includes(t, e.pageId)
    }))
  }
  var w = n(2),
    D = n(66).create,
    b = t.ActivationCodeError = D("ActivationCodeError"),
    R = t.ProjectJSError = D("ProjectJSError"),
    O = n(125),
    C = n(8),
    N = n(100),
    P = n(107),
    L = n(129),
    V = n(65),
    k = n(73),
    x = n(10),
    F = n(130),
    M = n(18),
    U = n(70),
    G = n(16),
    B = n(74),
    z = n(101),
    j = n(135),
    H = n(12),
    Y = n(134),
    K = n(103),
    q = n(72).LocalStorage,
    W = n(15),
    X = n(136),
    Q = n(76),
    $ = n(113),
    J = n(82),
    Z = n(77).Promise,
    ee = n(137),
    te = n(104),
    ne = n(106),
    ie = n(127),
    re = n(114),
    ae = n(64),
    oe = n(81),
    M = n(18),
    se = M.get("stores/session"),
    ue = M.get("stores/audience_data"),
    ce = M.get("stores/action_data"),
    le = M.get("stores/cleanup"),
    de = M.get("stores/directive"),
    fe = M.get("stores/global"),
    ge = M.get("stores/group_data"),
    pe = M.get("stores/layer_data"),
    he = M.get("stores/layer"),
    ve = M.get("stores/pending_events"),
    _e = M.get("stores/plugins"),
    Ee = M.get("stores/visitor"),
    me = M.get("stores/view_data"),
    Ie = M.get("stores/view"),
    ye = M.get("stores/visitor_id"),
    Se = M.get("stores/visitor_bucketing"),
    Te = M.get("stores/xdomain"),
    Ae = n(86),
    we = n(138),
    De = 1e3,
    be = !1,
    Re = 1e3,
    Oe = t;
  t.initialize = function(e) {
    if (B.on({
        filter: {
          type: "error"
        },
        handler: r
      }), H.dispatch(C.DATA_LOADED, {
        data: e.clientData
      }), W.log("Initialized with DATA:", e.clientData), a(), de.isDisabled() || de.shouldOptOut()) return void W.log("Controller / Is disabled");
    U.isReady() ? H.dispatch(C.SET_DOMCONTENTLOADED) : U.addReadyHandler((function() {
      H.dispatch(C.SET_DOMCONTENTLOADED)
    }));
    var n = !1,
      o = V.get(G.COOKIES.REDIRECT);
    if (o) {
      var u = o.match(/^(\d+)\|(.*)/);
      if (u) {
        W.debug("Found legacy redirect data:", o);
        var c = u[1],
          l = u[2];
        H.dispatch(C.INITIALIZE_STATE, {
          effectiveVariationId: c,
          effectiveReferrer: l
        }), n = !0
      }
    }
    Q.time("projectJS");
    var d = fe.getProjectJS();
    if (w.isFunction(d)) try {
      j.apply(d)
    } catch (e) {
      W.error("Error while executing projectJS: ", e), k.emitError(new R(e))
    }
    Q.timeEnd("projectJS"), w.each(e.plugins || [], (function(e) {
      try {
        e($)
      } catch (e) {
        k.emitInternalError(e)
      }
    })), w.each(fe.getPlugins() || [], (function(e) {
      try {
        j.apply(e, [$])
      } catch (e) {
        k.emitError(e)
      }
    })), n || te.load();
    var f = B.on({
      filter: {
        type: "lifecycle",
        name: "activated"
      },
      handler: function() {
        Ee.observe(ae.persistVisitorProfile), he.observe(ae.persistLayerStates), se.observe(ae.persistSessionState), ve.observe(X.persistPendingEvents), Se.observe(ae.persistVisitorBucketingStore), B.off(f)
      }
    });
    B.on({
      filter: {
        type: "lifecycle",
        name: "viewsActivated"
      },
      handler: t.onViewsActivated
    }), B.on({
      filter: {
        type: "lifecycle",
        name: "pageDeactivated"
      },
      handler: t.onPageDeactivated
    }), t.initializeApi();
    var g = X.getPendingEvents();
    if (g && (H.dispatch(C.LOAD_PENDING_EVENTS, {
        events: g
      }), X.retryPendingEvents(g)), B.on({
        filter: {
          type: "lifecycle",
          name: "activate"
        },
        handler: t.activate
      }), P.emitInitializedEvent(), !de.shouldActivate()) return Z.resolve();
    var p = [],
      h = s();
    if (p.push(h), Te.getCanonicalOrigins()) {
      var v = ne.makeTimeoutPromise(Re);
      Z.race([h, v])["catch"]((function(e) {
        W.error("Failed to initialize xDomain storage: ", e)
      })).then(i)["catch"](we.handleError)
    } else i();
    return Z.all(p)
  }, t.activate = function() {
    try {
      var e = [];
      W.log("Activated client"), w.forEach(Ie.getActiveViewStates(), (function(e) {
        re.deactivate(me.get(e.id))
      })), S(G.Lifecycle.preActivate);
      var t = x.now();
      H.dispatch(C.ACTIVATE, {
        activationId: String(t),
        activationTimestamp: t
      });
      var n = me.getAll();
      re.registerViews(n), ae.setId(ae.getIdFromCookies()), e.push(N.trackPostRedirectDecisionEvent()), H.dispatch(C.MERGE_VARIATION_ID_MAP, {
        variationIdMap: ae.getVariationIdMap()
      }), H.dispatch(C.MERGE_PREFERRED_LAYER_MAP, {
        preferredLayerMap: ae.getPreferredLayerMap()
      }), S(G.Lifecycle.postVisitorProfileLoad), e.push(u(_e.getAllPlugins(G.PluginTypes.visitorProfileProviders)).then((function() {
        W.log("Populated visitor profile")
      })));
      var i = c(),
        r = F.decideGlobal(i);
      W.log("Made global decision", i, "->", r), H.dispatch(C.RECORD_GLOBAL_DECISION, r);
      var a = N.trackClientActivation();
      a ? W.log("Tracked activation event", a) : W.log("Not tracking activation event");
      var o = Oe.setUpViewActivation(n);
      return be ? re.activateMultiple(o) : w.each(o, (function(e) {
        re.activateMultiple([e])
      })), S(G.Lifecycle.postViewsActivated), S(G.Lifecycle.postActivate), P.emitActivatedEvent(), Z.all(e).then((function() {
        B.emit({
          type: z.TYPES.LIFECYCLE,
          name: "activateDeferredDone"
        }), W.log("All immediate effects of activation resolved")
      }), k.emitError)
    } catch (e) {
      return k.emitError(e), Z.reject(e)
    }
  }, Oe.setUpViewActivation = function(e) {
    var t = [];
    return w.each(e, (function(e) {
      re.shouldTriggerImmediately(e.activationType) || !e.activationType ? t.push(e) : e.activationType === G.ViewActivationTypes.callback ? (W.debug("Setting up conditional activation for Page", re.description(e)), Oe.activateViewOnCallback(e)) : e.activationType === G.ViewActivationTypes.polling ? (W.debug("Setting up polling activation for Page", re.description(e)), J.pollFor(w.partial(j.apply, e.activationCode), null, w.partial(ie.isTimedOut, x.now())).then((function() {
        re.activateMultiple([e])
      }))["catch"]((function(t) {
        W.warn("Failed to activate view ", e, t)
      }))) : e.activationType !== G.ViewActivationTypes.manual && k.emitError(new Error("Unknown view activationType: " + e.activationType))
    })), t
  }, Oe.activateViewOnCallback = function(e) {
    var t = function(t) {
        var n = w.extend({}, t, {
          pageName: e.apiName,
          type: "page"
        });
        Ae.push(n)
      },
      n = {
        pageId: e.id
      };
    Object.defineProperty(n, "isActive", {
      get: function() {
        return Ie.isViewActive(e.id)
      }
    });
    try {
      j.apply(e.activationCode, [t, n])
    } catch (t) {
      var i = new b("(" + t.toString() + ") in activationCode for " + re.description(e));
      k.emitError(i, {
        originalError: t,
        userError: !0
      })
    }
  }, t.onViewsActivated = function(e) {
    var t, n = e.data.views,
      i = w.map(n, "id");
    try {
      if (!ye.getBucketingId()) throw new Error("View activated with no visitorId set");
      var r = d(i)["catch"](k.emitError);
      return t = Z.all(w.map(n, (function(e) {
        var t = function() {
          re.parseViewTags(e);
          var t = N.trackViewActivation(e);
          t ? W.log("Tracked activation for Page", re.description(e), t) : W.log("Not Tracking activation for Page", re.description(e))
        };
        return U.isReady() ? Z.resolve(t()) : J.pollFor(U.isReady, De).then(t)
      }))), Z.all([r, t])
    } catch (e) {
      k.emitError(e)
    }
  }, t.onPageDeactivated = function(e) {
    var t = e.data.page,
      n = ce.getAllActionIdsByPageId(t.id);
    w.each(n, (function(e) {
      var n = ce.getActionState(e);
      n && (w.each(n, (function(e) {
        if (e.cancel) try {
          e.cancel()
        } catch (e) {
          W.error("Controller / Error cancelling change observation upon deactivation of page.", e)
        }
      })), H.dispatch(C.REMOVE_ACTION_STATE, {
        actionId: e
      }), W.debug("Controller / Cancelled change observation due to deactivation of page:", t, e))
    }))
  }, t.initializeApi = function() {
    var e = {
        get: Ae.get,
        push: Ae.push
      },
      t = window.optimizely;
    w.isArray(t) && w.each(t, (function(t) {
      e.push(t)
    })), e.data = {
      note: "Obsolete, use optimizely.get('data') instead"
    }, e.state = {}, window.optimizely = e
  }, t.decideAndExecuteLayerASAP = g
}), (function(e, t, n) {
  function i(e, t, n) {
    var i = h.getActionState(t.id);
    if (!i) return void d.warn("Action / Attempted to prepare change for inactive action: ", t);
    var r = h.getChangeApplier(e.id, t.id);
    if (!a.isUndefined(r)) return void d.warn("Action / Attempted to prepare a change which is already being applied: ", e);
    var s = {
      changeId: e.id,
      actionId: t.id,
      changeApplier: E.create(e, t, n)
    };
    l.dispatch(o.SET_CHANGE_APPLIER, s)
  }

  function r(e, t, n, o) {
    if (a.includes(o, t)) return void d.error("Change with id " + t + " has circular dependencies: " + o.concat(t));
    if (!e[t]) {
      var c = v.getChange(t);
      if (!c) {
        var l = "Change with id " + t + " is absent";
        return o.length && (l += " but listed as a dependency for " + o[o.length - 1]), void d.warn(l)
      }
      e[t] = new f(function(l) {
        var p = a.map(c.dependencies || [], (function(i) {
          return r(e, i, n, o.concat([t]))
        }));
        if (c.src) {
          var _ = "change_" + c.src,
            E = s.makeAsyncRequest(_, (function() {
              return g.addScriptAsync("https://cdn.optimizely.com/public/9733244614/data" + c.src, (function() {
                s.resolveRequest(_)
              }))
            })).then((function() {
              c = v.getChange(c.id), i(c, n, u.now())
            }));
          p.push(E)
        }
        f.all(p).then((function() {
          var e = u.now(),
            i = h.getChangeApplier(t, n.id);
          return i ? (d.debug("Action / Applying change:", c), i.apply().then((function(t) {
            t ? d.log(t) : d.debug("Action / Applied change for the first time in " + (u.now() - e) + "ms:", c), l()
          }))) : (d.debug("Action / Not applying change ", t, " - No changeApplier found."), void l())
        }))["catch"]((function(e) {
          d.error("Action / Failed to apply change:", c, e), l()
        }))
      })
    }
    return e[t]
  }
  var a = n(2),
    o = n(8),
    s = n(109),
    u = n(10),
    c = n(18),
    l = n(12),
    d = n(15),
    f = n(77).Promise,
    g = n(123),
    p = c.get("stores/global"),
    h = c.get("stores/action_data"),
    v = c.get("stores/change_data"),
    _ = c.get("stores/session"),
    E = n(126),
    m = n(127);
  m.initialize(), t.prepareAction = function(e) {
    d.debug("Action / Preparing:", e), l.dispatch(o.ACTION_EXECUTED, {
      actionId: e.id,
      sessionId: _.getSessionId(),
      layerId: e.layerId,
      pageId: e.pageId,
      timestamp: u.now(),
      activationId: p.getActivationId()
    });
    var t = u.now();
    a.forEach(e.changeSet, (function(n) {
      var r = v.getChange(n.id);
      r || (l.dispatch(o.ADD_CHANGE, n), r = v.getChange(n.id)), r.src || i(r, e, t)
    }))
  }, t.executePreparedAction = function(e) {
    d.debug("Action / Executing:", e);
    var t = {},
      n = a.map(e.changeSet, (function(n) {
        return r(t, n.id, e, [])
      }));
    return f.all(n).then((function() {
      d.debug("changes for action id=" + e.id + " applied")
    }))
  }
}), (function(e, t, n) {
  var i = n(78).Promise,
    r = n(10),
    a = n(18),
    o = a.get("stores/plugins"),
    s = n(16),
    u = n(15);
  t.create = function(e, t, n) {
    var a = {
      identifier: e.id,
      action: t,
      startTime: n || r.now()
    };
    try {
      var c = o.getPlugin(s.PluginTypes.changeAppliers, e.type);
      if (!c) throw new Error("Unrecognized change type " + e.type);
      return new c(e, a)
    } catch (e) {
      u.error("Change applier was never properly constructed:", e);
      var l = {
        apply: function() {
          return i.reject(e)
        }
      };
      return l
    }
  }
}), (function(e, t, n) {
  function i() {
    "interactive" !== document.readyState && "complete" !== document.readyState || (t.domReadyTime = Date.now())
  }
  var r = n(128),
    a = n(18).get("stores/directive");
  t.domReadyTime = null, t.initialize = function() {
    i(), document.addEventListener("readystatechange", i, !0)
  }, t.isTimedOut = function(e) {
    var n = Date.now();
    if (!t.domReadyTime || !e) return !1;
    var i = Math.max(e, t.domReadyTime);
    return a.isEditor() && (i = t.domReadyTime), !(n - i < r.SELECTOR_POLLING_MAX_TIME)
  }
}), (function(e, t) {
  e.exports = {
    SELECTOR_POLLING_MAX_TIME: 2e3,
    CHANGE_DATA_KEY: "optimizelyChangeData",
    CHANGE_ID_ATTRIBUTE_PREFIX: "data-optly-"
  }
}), (function(e, t, n) {
  function i(e, t) {
    var n = {};
    return o.each(e, (function(e) {
      if (o.isArray(e)) o.extend(n, i(e, t));
      else if (o.isObject(e)) {
        var r = t[e.type];
        r && o.each(r.fieldsNeeded, (function(e) {
          n[e] = !0
        }))
      }
    })), n
  }

  function r(e, t) {
    return function(n) {
      var i = n.type,
        r = t[i];
      if (!r) throw new Error("Audience / No matcher found for type=" + i);
      if (r.fieldsNeeded)
        for (var a, s, c = 0; c < r.fieldsNeeded.length; c++)
          if (a = r.fieldsNeeded[c], s = e[a], o.isUndefined(s)) return void u.debug("Audience / Required field", a, "for type", i, "has no value");
      u.debug("Matching condition:", n, "to values:", e);
      var l = r.match(e, n);
      if (!o.isUndefined(l)) return !!l
    }
  }

  function a(e) {
    return e.name ? e.name + " (" + e.id + ")" : e.id
  }
  var o = n(2),
    s = n(115),
    u = n(15);
  t.isInAudience = function(e, t, n) {
    var i = r(e, n);
    u.groupCollapsed("Checking audience", t.name, t.id, t), u.debug("Visitor Profile:", e);
    var o;
    try {
      var c = s.evaluate(t.conditions, i)
    } catch (e) {
      o = e, c = !1
    }
    return u.groupEnd(), o && u.error("Audience / Error evaluating audience", a(t), ":", o), u.log("Is " + (c ? "in" : "NOT in") + " audience:", a(t)), c
  }, t.requiredAudienceFields = function(e, t) {
    return o.keys(i(e.conditions, t))
  }
}), (function(e, t, n) {
  function i(e, t) {
    _.debug("Decision / Deciding layer for group: ", h.description(e));
    var n, i, r = t.preferredLayerId,
      a = !!r;
    if (a) _.debug("Decision / Using preferredLayerMap to select layer for group:", h.description(e)), n = r;
    else try {
      n = l.chooseWeightedCandidate(t.bucketingId, e.id, e.weightDistributions), n && "None" !== n || (i = 'Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')
    } catch (e) {
      i = "Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."
    }
    if (i) return {
      layerId: null,
      reason: i
    };
    if (!s.find(e.weightDistributions, {
        entityId: n
      })) {
      var o = a ? " sticky-" : " non-sticky ",
        u = "Visitor was" + o + "bucketed into a campaign (" + n + ") which is not in the group";
      if (!a) throw new f(u);
      return {
        layerId: null,
        reason: u
      }
    }
    return {
      layerId: n
    }
  }

  function r(e, t) {
    for (var n = 0; n < e.experiments.length; n++)
      for (var i = 0; i < e.experiments[n].variations.length; i++)
        if (t.indexOf(e.experiments[n].variations[i].id) > -1) return {
          experimentId: e.experiments[n].id,
          variationId: e.experiments[n].variations[i].id
        };
    return null
  }

  function a(e) {
    var t = m.getPlugin(p.PluginTypes.deciders, e);
    if (s.isEmpty(t)) throw new Error("No deciders found for policy: " + e);
    return t
  }

  function o(e, t) {
    var n = m.getAllPlugins(p.PluginTypes.audienceMatchers);
    return s.reduce(t, (function(t, i) {
      return c.isInAudience(e, i, n) && t.push(i.id), t
    }), [])
  }
  var s = n(2),
    u = n(73),
    c = n(129),
    l = n(131),
    d = n(132),
    f = n(133).DecisionError,
    g = n(18),
    p = n(16),
    h = n(134),
    v = n(103),
    _ = n(15),
    E = n(36),
    m = g.get("stores/plugins"),
    I = g.get("stores/global"),
    y = g.get("stores/layer_data");
  t.isPageIdRelevant = function(e) {
    if (!e) return !1;
    var t = a(e.policy);
    return s.isFunction(t.includePageIdInDecisionTicket) ? t.includePageIdInDecisionTicket(e) : t.includePageIdInDecisionTicket === !0
  }, t.createTicket = function(e) {
    var t = s.pick(e, ["bucketingId", "globalHoldback", "preferredVariationMap", "pageId"]);
    return s.extend(t, {
      audienceIds: o(e.visitorProfile, e.audiences),
      activationId: I.getActivationId()
    }), t
  }, t.decideGlobal = function(e) {
    var t = l.isHoldback(e.bucketingId, {
      id: null,
      holdback: e.globalHoldback
    });
    return {
      isGlobalHoldback: t
    }
  }, t.decideGroup = i, t.decideLayer = function(e, t) {
    _.debug("Deciding: ", e, t);
    var n, i, r = a(e.policy),
      o = {
        layerId: e.id,
        experimentId: null,
        variationId: null,
        isLayerHoldback: l.isHoldback(t.bucketingId, e)
      };
    if (s.isEmpty(e.experiments)) throw new f("No experiments in layer.");
    try {
      if (r.decideLayer) {
        _.debug("Decision / Using decider's custom decideLayer.");
        var c = r.decideLayer(e, t);
        n = c.experiment, i = c.variation
      } else _.debug("Decision / Using default decideLayer behavior."), n = r.selectExperiment(e, t.audienceIds, t.bucketingId), i = d.selectVariation(n, t.audienceIds, t.bucketingId, t.activationId, t.preferredVariationMap)
    } catch (e) {
      e instanceof f ? o.reason = e.message : o.error = e
    }
    return o.experimentId = n ? n.id : null, o.variationId = i ? i.id : null, o.error && (o.error.name = "DecisionEngineError", u.emitError(o.error)), o
  }, t.getDummyLayerDecision = function(e, t) {
    var n, i = r(e, t);
    return i ? (_.log("Decision / Applying force variation:", i.variationId, "to Campaign", v.description(e)), n = {
      layerId: e.id,
      variationId: i.variationId,
      experimentId: i.experimentId,
      isLayerHoldback: !1,
      reason: "force"
    }) : (_.log("No variation matches ids:", t, "in Campaign", v.description(e)), n = {
      layerId: e.id,
      variationId: null,
      experimentId: null,
      isLayerHoldback: !1,
      reason: "force"
    }), n
  }, t.isInCohort = function(e) {
    if (!e.experimentId || !e.variationId) return !1;
    var t = y.get(e.layerId);
    return !(E.isSingleExperimentPolicy(t.policy) && e.isLayerHoldback)
  }
}), (function(e, t, n) {
  var i = n(57),
    r = t.TOTAL_POINTS = 1e4;
  t.bucketingNumber = function(e, t, n) {
    var a = i.hashToInt(e + t, n, r);
    return a
  }, t.isHoldback = function(e, n) {
    return t.bucketingNumber(e, n.id, i.Seed.IGNORING) < (n.holdback || 0)
  }, t.chooseWeightedCandidate = function(e, n, r) {
    for (var a = t.bucketingNumber(e, n, i.Seed.BUCKETING), o = 0; o < r.length; o++)
      if (r[o].endOfRange > a) return r[o].entityId;
    throw new Error("Unable to choose candidate")
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(131),
    a = n(115),
    o = n(133).DecisionError,
    s = n(15),
    u = "impression";
  t.isValidExperiment = function(e, t) {
    var n, r = i.partial(i.includes, e);
    return s.groupCollapsed("Decision / Evaluating audiences for experiment:", t, e), n = !t.audienceIds || a.evaluate(t.audienceIds, r), s.groupEnd(), s.debug("Decision / Experiment", t, "is valid?", n), n
  }, t.selectVariation = function(e, t, n, a, c) {
    if (!e.variations || 0 === e.variations.length) throw new o('No variations in selected experiment "' + e.id + '"');
    if (!e.weightDistributions && e.variations.length > 1) throw new o('On selected experiment "' + e.id + '", weightDistributions must be defined if # variations > 1');
    var l;
    if (e.bucketingStrategy && e.bucketingStrategy === u)
      if (1 === e.variations.length) l = e.variations[0].id;
      else {
        var d = a;
        l = r.chooseWeightedCandidate(n + d, e.id, e.weightDistributions)
      }
    else if (c && c[e.id]) {
      s.debug("Decision / Using preferredVariationMap to select variation for experiment:", e.id);
      var f = c[e.id];
      if (!i.find(e.variations, {
          id: f
        })) return s.debug("Decision / Preferred variation:", f, "not found on experiment:", e.id, ". Visitor not bucketed."), null;
      l = f
    } else l = 1 === e.variations.length ? e.variations[0].id : r.chooseWeightedCandidate(n, e.id, e.weightDistributions);
    var g = i.find(e.variations, {
      id: l
    });
    if (g) return s.debug("Decision / Selected variation:", g), g;
    throw new o('Unable to find selected variation: "' + l + '".')
  }, t.getExperimentById = function(e, t) {
    var n = i.find(e.experiments, {
      id: t
    });
    if (n) return n;
    throw new o("Unable to find selected experiment.")
  }, t.hasVariationActionsOnView = function(e, t) {
    return s.debug("Decision / Checking variation:", e, "for actions on pageId:", t), !!i.find(e.actions, (function(e) {
      return e.pageId === t && !i.isEmpty(e.changes)
    }))
  }
}), (function(e, t) {
  function n(e) {
    this.message = e
  }
  n.prototype = new Error, t.DecisionError = n
}), (function(e, t, n) {
  function i(e) {
    return r.map(e.weightDistributions, "entityId")
  }
  var r = n(2);
  t.description = function(e) {
    var t = !!e.name,
      n = t ? '"' + e.name + '" ' : "",
      r = i(e).join(", ");
    return n + "(id " + e.id + ", campaigns: " + r + ")"
  }
}), (function(module, exports, __webpack_require__) {
  var createError = __webpack_require__(67),
    di = __webpack_require__(18),
    Logger = __webpack_require__(15),
    CSP_MODE = !1,
    EXEC_WITH_JQUERY = !0,
    ExecError = exports.Error = createError("ExecError");
  exports.apply = function(e, t) {
    t = t || [], EXEC_WITH_JQUERY && (t = t.concat(di.get("env/jquery")));
    try {
      return e.apply(void 0, t)
    } catch (n) {
      throw Logger.warn("Error applying function", e, "with args:", t, n), new ExecError(n)
    }
  }, exports.eval = function(str) {
    if (CSP_MODE) throw new ExecError("eval is not supported in CSP mode");
    try {
      return EXEC_WITH_JQUERY && (str = "var $ = optimizely.get('jquery');" + str), eval(str)
    } catch (e) {
      throw Logger.warn("Error executing JS:", str, e), new ExecError(e)
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(73),
    a = n(16),
    o = n(17),
    s = n(72).LocalStorage,
    u = n(15),
    c = n(84),
    l = n(18),
    d = l.get("stores/pending_events"),
    f = a.StorageKeys.PENDING_EVENTS;
  t.persistPendingEvents = function() {
    try {
      var e = d.getEventsString();
      s.setItem(f, e), n(81).setItem(f, e)
    } catch (e) {
      u.warn("PendingEvents / Unable to set localStorage key, error was: ", e), r.emitInternalError(e)
    }
  }, t.getPendingEvents = function() {
    try {
      return o.parse(s.getItem(f))
    } catch (e) {
      return null
    }
  }, t.retryPendingEvents = function(e) {
    i.forOwn(e, (function(e, t) {
      c.retryableRequest(e.data, t, e.retryCount)
    })), i.isEmpty(e) || u.log("Retried pending events: ", e)
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(77).Promise;
  t.firstToResolve = function(e) {
    return new r(function(t) {
      i.each(e, (function(e) {
        r.resolve(e).then(t, (function() {}))
      }))
    })
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(88),
    a = n(66).BaseError,
    o = n(10),
    s = n(18),
    u = n(70),
    c = n(15),
    l = n(71),
    d = n(84),
    f = s.get("stores/global"),
    g = "https://errors.client.optimizely.com";
  t.handleError = function(e, t) {
    function n() {
      return d.request({
        url: g + "/log",
        method: "POST",
        data: v,
        contentType: "application/json"
      }).then((function(e) {
        c.log("Error Monitor / Logged error with response: ", e)
      }), (function(e) {
        c.error("Failed to log error, response was: ", e)
      }))
    }
    var s = e.name || "Error",
      p = e.message,
      h = e.stack || null;
    e instanceof a && (p instanceof Error ? (p = p.message, h = e.message.stack) : h = null);
    var v = {
      timestamp: o.now(),
      clientEngine: r.ENGINE,
      clientVersion: r.VERSION,
      accountId: f.getAccountId(),
      projectId: f.getProjectId(),
      errorClass: s,
      message: p,
      stacktrace: h
    };
    t && (v.metadata = i.reduce(t, (function(e, t, n) {
      return i.isObject(t) || e.push({
        key: n,
        value: String(t)
      }), e
    }), [])), c.error("Logging error", v), u.isLoaded() ? n() : l.addEventListener("load", n)
  }
}), (function(e, t, n) {
  function i(e) {
    var t = !1;
    if (a.isArray(window.optimizely) && a.each(window.optimizely, (function(n) {
        a.isArray(n) && "verifyPreviewProject" === n[0] && String(n[1]) === e && (t = !0)
      })), !t) throw new Error("Preview projectId: " + e + " does not match expected")
  }

  function r() {
    s.on({
      filter: {
        type: u.TYPES.ANALYTICS,
        name: "trackEvent"
      },
      handler: f
    }), s.on({
      filter: {
        type: u.TYPES.LIFECYCLE,
        name: "viewActivated"
      },
      handler: f
    }), s.on({
      filter: {
        type: u.TYPES.LIFECYCLE,
        name: "layerDecided"
      },
      handler: f
    }), s.on({
      filter: {
        type: "error"
      },
      publicOnly: !0,
      handler: f
    })
  }
  var a = n(2),
    o = n(18),
    s = n(74),
    u = n(101),
    c = n(71),
    l = o.get("stores/directive"),
    d = "optimizelyPreview",
    f = function(e) {
      var t = c.getGlobal(d);
      t.push(e)
    };
  t.initialize = function(e) {
    l.isSlave() && i(e), r()
  }, t.setupPreviewGlobal = function() {
    c.getGlobal(d) || c.setGlobal(d, [])
  }, t.pushToPreviewGlobal = function(e) {
    f(e)
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerVisitorProfileProvider(n(141))
  }
}), (function(e, t) {
  e.exports = {
    provides: "visitorId",
    getter: ["stores/visitor_id", function(e) {
      return e.getRandomId()
    }]
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerVisitorProfileProvider(n(143)), e.registerAudienceMatcher("behavior", n(145))
  }
}), (function(e, t, n) {
  var i = n(144);
  e.exports = {
    provides: "events",
    isTransient: !0,
    getter: ["stores/visitor_events", function(e) {
      return i.getEvents(e)
    }]
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(7);
  t.getEvents = function(e) {
    var t = r.getEvents(),
      n = [].concat.apply([], i.values(e.getForeignEvents())),
      a = [].concat.apply([], i.values(e.getForeignEventQueues()));
    return r.mergeAllEvents([t, n, a])
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(17),
    a = n(146),
    o = n(147);
  e.exports = {
    fieldsNeeded: ["events"],
    match: function(e, t) {
      var n = [],
        s = r.parse(t.value);
      return n = i.isUndefined(s.version) ? [s] : a.buildFromSpecV0_1(s), i.every(n, (function(t) {
        return o.isSatisfied(t, e.events)
      }))
    }
  }
}), (function(e, t, n) {
  function i(e) {
    return e = (e || "").toString().trim(), g[e] || e
  }

  function r(e, t, n) {
    var i = {
      where: t
    };
    if (e.count && (i["limit"] = e.count), e.modifier === s.FREQUENCY_FILTERS.MOST_FREQUENT) {
      var r = s.getFieldKeyPathForSource(e.name, n),
        a = s.aggregate("count"),
        o = s.aggregateField("count"),
        l = s.groupField(r);
      return u.extend(i, {
        select: [{
          field: l
        }],
        groupBy: s.groupBy([r]),
        aggregate: [a],
        orderBy: [{
          field: o,
          direction: "DESC"
        }]
      })
    }
    return u.extend(i, {
      orderBy: [{
        field: [c.FIELDS.TIME],
        direction: "DESC"
      }]
    })
  }

  function a(e) {
    var t = [];
    if (u.isUndefined(e)) throw new Error("rule is undefined");
    if (!u.isObject(e)) throw new Error("rule is not an Object");
    "0.2" !== e["version"] && t.push('version: not "0.2"'), e["filter"] && (u.isArray(e["filter"]) ? u.each(e["filter"], (function(e, n) {
      var i = s.validateFieldKeyPathV0_2(e["field"], s.FieldPurpose.FILTER);
      i && t.push("filter[" + n + "]: " + i);
      var r = s.validateComparatorAndValue(e["comparator"], e["value"]);
      r && t.push("filter[" + n + "]: " + r)
    })) : t.push("filter: not an array"));
    var n = [],
      i = [];
    if (e["sort"] && (e["reduce"] && e["reduce"]["aggregator"] && "nth" !== e["reduce"]["aggregator"] && t.push("sort: superfluous because we can apply aggregator " + l.stringify(e["reduce"]["aggregator"]) + " to unsorted items"), u.isArray(e["sort"]) ? u.each(e["sort"], (function(e, r) {
        var a = s.validateFieldKeyPathV0_2(e["field"], s.FieldPurpose.SORT);
        a && t.push("sort[" + r + "]: " + a), e["field"] && "frequency" === e["field"][0] ? n.push(e) : i.push(e);
        var u = o(e["direction"]);
        u && t.push("sort[" + r + "]: " + u)
      })) : t.push("sort: not an array"), n.length && i.length && t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'), n.length && !e["pick"] && t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')), e["pick"]) {
      e["reduce"] && "count" === e["reduce"]["aggregator"] && t.push('pick: superfluous because we can apply aggregator "count" to raw events');
      var r = s.validateFieldKeyPathV0_2(e["pick"]["field"]);
      r && t.push("pick: " + r)
    }
    if (e["reduce"]) {
      var a = e["reduce"]["aggregator"],
        c = "aggregator " + (l.stringify(a) || String(a)),
        d = e["reduce"]["n"],
        f = "index " + (l.stringify(d) || String(d));
      u.includes(["sum", "avg", "max", "min", "count", "nth"], a) || t.push("reduce: " + c + " is unknown"), u.includes(["sum", "avg", "max", "min"], a) && (e["pick"] || t.push("reduce: " + c + " is impossible to use because no values have been picked")), "nth" === a ? ((!u.isNumber(d) || isNaN(d) || parseInt(d, 10) !== d || d < 0) && t.push("reduce: " + f + " is not a non-negative integer (mandated by " + c + ")"), e["sort"] || t.push('reduce: aggregator "nth" is meaningless without a specific sort order')) : u.isUndefined(d) || t.push("reduce: " + f + " is defined (not mandated by " + c + ")")
    }
    if (t.length) throw new Error(t.join("\n"))
  }

  function o(e) {
    var t = "direction " + (l.stringify(e) || String(e));
    if (!u.includes(["ascending", "descending"], e)) return t + ' is not "ascending" or "descending"'
  }
  var s = t,
    u = n(2),
    c = {
      FIELDS: n(55).FIELDS,
      FIELDS_V0_2: n(55).FIELDS_V0_2
    },
    l = n(17),
    d = n(15),
    f = n(147);
  s.MILLIS_IN_A_DAY = 864e5, s.aggregateField = function(e, t) {
    return u.isString(t) && (t = [t]), t = t || f.DEFAULT_FIELD, [f.generateAlias(e, t)]
  }, s.groupField = function(e) {
    return u.isString(e) && (e = [e]), e = e || f.DEFAULT_FIELD, [e.join(".")]
  };
  var g = {
    "<": "lt",
    "<=": "lte",
    ">": "gt",
    ">=": "gte",
    "=": "eq",
    "==": "eq"
  };
  s.fieldComparison = function(e, t, n) {
    return e = i(e), u.isString(t) && (t = [t]), "exists" === e ? {
      op: e,
      args: [{
        field: t
      }]
    } : {
      op: e,
      args: [{
        field: t
      }, {
        value: n
      }]
    }
  }, s.relativeTimeComparison = function(e, t) {
    return {
      op: i(e),
      args: [{
        op: "-",
        args: [{
          eval: "now"
        }, {
          field: [c.FIELDS.TIME]
        }]
      }, {
        value: t * s.MILLIS_IN_A_DAY
      }]
    }
  }, s.rangeTimeComparison = function(e) {
    return u.isArray(e) ? {
      op: "between",
      args: [{
        field: [c.FIELDS.TIME]
      }, {
        value: [e[0] || +new Date(0), e[1] || +new Date]
      }]
    } : (d.error("Rule builder", "rangeTimeComparison passed invalid range", e), null)
  }, s.groupBy = function(e) {
    for (var t = [], n = 0; n < e.length; n++) t[n] = {
      field: e[n]
    };
    return t
  }, s.aggregate = function(e, t) {
    return u.isString(t) && (t = [t]), t = t || f.DEFAULT_FIELD, {
      op: e,
      args: [{
        field: t
      }]
    }
  }, s.SOURCE_TYPES = {
    BEHAVIOR: "events",
    CUSTOM_BEHAVIOR: "custom_behavior",
    DCP: "dcp"
  }, s.FREQUENCY_FILTERS = {
    MOST_FREQUENT: "most_frequent",
    LEAST_FREQUENT: "least_frequent"
  }, s.RECENCY_FILTERS = {
    MOST_RECENT: "most_recent",
    LEAST_RECENT: "least_recent"
  }, s.getFieldKeyPathForSource = function(e, t) {
    t = t || s.SOURCE_TYPES.BEHAVIOR;
    var n = [];
    return u.isString(e) ? (n = [e], t !== s.SOURCE_TYPES.BEHAVIOR || u.includes(u.values(c.FIELDS), e) || (n = [c.FIELDS.OPTIONS, e])) : n = e, n
  }, s.buildFromSpecV0_1 = function(e) {
    if (!(e.action || e.filters && 0 !== e.filters.length)) throw new Error('Audience spec must have an "action" field or at least one "filter" ' + l.stringify(e));
    var t = s.fieldComparison("gt", c.FIELDS.TIME, 0),
      n = [],
      i = [];
    if (e.action && (i.push(s.fieldComparison("eq", c.FIELDS.NAME, e.action.value)), e.action.type && i.push(s.fieldComparison("eq", c.FIELDS.TYPE, e.action.type))), e.time)
      if ("last_days" === e.time.type) i.push(s.relativeTimeComparison("lte", e.time.days));
      else if ("range" === e.time.type) {
      var a = s.rangeTimeComparison([e.time.start, e.time.stop]);
      a && i.push(a)
    } else d.error("Rule builder", 'Audience spec has bad "time" type', e.time.type);
    if (t = {
        op: "and",
        args: i
      }, e.count && n.push({
        where: s.fieldComparison(e.count.comparator, "0", e.count.value),
        from: {
          select: [{
            field: s.aggregateField("count")
          }],
          where: t,
          aggregate: [s.aggregate("count")]
        }
      }), e.filters && u.each(e.filters, (function(r) {
        var a, o, u = s.getFieldKeyPathForSource(r.name, e.source);
        if (r.modifier === s.FREQUENCY_FILTERS.MOST_FREQUENT ? (a = s.aggregate("count"), o = s.aggregateField("count")) : r.modifier === s.RECENCY_FILTERS.MOST_RECENT && (a = s.aggregate("max", c.FIELDS.TIME), o = s.aggregateField("max", c.FIELDS.TIME)), a) {
          var l = u,
            d = s.groupField(l);
          n.push({
            where: s.fieldComparison(r.comparator, "0", r.value),
            from: {
              select: [{
                field: d
              }],
              where: t,
              groupBy: s.groupBy([l]),
              aggregate: [a],
              orderBy: [{
                field: o,
                direction: "DESC"
              }],
              limit: 1
            }
          })
        } else i.push(s.fieldComparison(r.comparator, u, r.value))
      })), e.pick) {
      if (n.length > 0) throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers' + l.stringify(e));
      return [r(e.pick, t, e.source)]
    }
    return n.length > 0 ? n : [{
      where: t
    }]
  }, s.buildFromSpecV0_2 = function(e) {
    a(e);
    var t = {
      where: {
        op: "and",
        args: u.map(e["filter"] || [], (function(e) {
          return "age" === e["field"][0] ? s.relativeTimeComparison(e["comparator"] || "eq", e["value"] / s.MILLIS_IN_A_DAY) : s.fieldComparison(e["comparator"] || "eq", s.convertFieldKeyPathFromSpecV0_2(e["field"]), e["value"])
        }))
      }
    };
    if (e["reduce"] && "count" === e["reduce"]["aggregator"]) return u.extend(t, {
      aggregate: [{
        op: "count",
        args: [{
          field: ["*"]
        }]
      }],
      select: [{
        field: ["_count_*"]
      }]
    });
    var n = [],
      i = [];
    if (e["sort"] && (u.each(e["sort"], (function(e) {
        u.includes(["ascending", "descending"], e["direction"]) && (u.includes(["time", "age"], e["field"][0]) && i.push(e), "frequency" === e["field"][0] && n.push(e))
      })), i.length && !n.length && (t["orderBy"] = u.filter(u.map(i, (function(e) {
        return "time" === e["field"][0] ? {
          field: s.convertFieldKeyPathFromSpecV0_2(["time"]),
          direction: "ascending" === e["direction"] ? "ASC" : "DESC"
        } : "age" === e["field"][0] ? {
          field: s.convertFieldKeyPathFromSpecV0_2(["time"]),
          direction: "ascending" === e["direction"] ? "DESC" : "ASC"
        } : void 0
      }))))), e["pick"] && e["pick"]["field"]) {
      var r = s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);
      if (e["reduce"] && u.includes(["avg", "max", "min", "sum"], e["reduce"]["aggregator"])) return u.extend(t, {
        aggregate: [{
          op: e["reduce"]["aggregator"],
          args: [{
            field: r
          }]
        }],
        select: [{
          field: [f.generateAlias(e["reduce"]["aggregator"], r)]
        }]
      });
      t = n.length ? u.extend(t, {
        groupBy: [{
          field: r
        }],
        aggregate: [{
          op: "count",
          args: [{
            field: ["*"]
          }]
        }],
        orderBy: [{
          field: ["_count_*"],
          direction: "ascending" === n[0]["direction"] ? "ASC" : "DESC"
        }],
        select: [{
          field: [r.join(".")]
        }]
      }) : u.extend(t, {
        select: [{
          field: r
        }]
      })
    }
    if (e["reduce"] && "nth" === e["reduce"]["aggregator"]) {
      var o = e["reduce"]["n"];
      if (u.isNumber(o) && o >= 0 && Number(o) === Math.floor(Number(o))) return u.extend(t, {
        offset: o,
        limit: 1
      })
    }
    return t
  }, s.convertFieldKeyPathFromSpecV0_2 = function(e) {
    return "tags" === e[0] && "revenue" === e[1] ? ["r"] : [c.FIELDS_V0_2[e[0]]].concat(e.slice(1))
  }, s.FieldPurpose = {
    FILTER: "filter",
    SORT: "sort",
    PICK: "pick"
  }, s.validateFieldKeyPathV0_2 = function(e, t) {
    var n = "field " + (l.stringify(e) || String(e));
    if (!u.isArray(e) || !u.every(e, u.isString)) return n + " is not an array of strings";
    if ("tags" === e[0] && e.length > 2 || "tags" !== e[0] && e.length > 1) return n + " includes too many strings";
    if ("tags" === e[0] && e.length < 2) return n + " does not specify an exact tag";
    if (e.length < 1) return n + " does not specify a top-level field";
    var i = u.keys(c.FIELDS_V0_2),
      r = ["age", "frequency"];
    return t === s.FieldPurpose.FILTER && (i.push("age"), r = ["frequency"]), t === s.FieldPurpose.SORT && (i = ["time", "age", "frequency"], r = ["name", "type", "category", "tags"]), u.includes(r, e[0]) ? n + " is not supported here" : u.includes(i, e[0]) ? void 0 : n + " is unknown"
  }, s.validateComparatorAndValue = function(e, t) {
    var n = "comparator " + (l.stringify(e) || String(e)),
      i = "value " + (l.stringify(t) || String(t));
    if (!u.isString(e) && !u.isUndefined(e)) return n + " is not a string";
    switch (e) {
      case void 0:
      case "eq":
      case "is":
      case "contains":
        break;
      case "lt":
      case "gt":
      case "lte":
      case "gte":
        if (!u.isNumber(t)) return i + " is not a number (mandated by " + n + ")";
        break;
      case "in":
        if (!u.isArray(t)) return i + " is not an array (mandated by " + n + ")";
        break;
      case "between":
        if (!(u.isArray(t) && 2 === t.length && u.isNumber(t[0]) && u.isNumber(t[1]) && t[0] <= t[1])) return i + " is not a pair of increasing numbers (mandated by " + n + ")";
        break;
      case "regex":
        if (!(u.isString(t) || u.isArray(t) && 2 === t.length && u.isString(t[0]) && u.isString(t[1]))) return i + " is not a pattern string or a [pattern string, flags string] array (mandated by " + n + ")";
        break;
      case "exists":
        if (!u.isUndefined(t)) return i + " is not undefined (mandated by " + n + ")";
        break;
      default:
        return n + " is unknown"
    }
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(16),
    a = n(15),
    o = a.log.bind(a),
    s = n(10),
    u = n(56).getFieldValue,
    c = n(17),
    l = t;
  l.getValueOrDefault = function(e, t, n) {
    if (e.getValueOrDefault) return e.getValueOrDefault(t, n);
    var i = u(e, t);
    return "undefined" == typeof i && (i = n), i
  }, l.maybeTrimLowerCase = function(e) {
    return "string" == typeof e ? e.trim().toLowerCase() : e
  }, l.clause = {
    WHERE: "where",
    GROUP_BY: "groupBy",
    AGGREGATE: "aggregate",
    HAVING: "having",
    ORDER_BY: "orderBy",
    SELECT: "select",
    OFFSET: "offset",
    LIMIT: "limit",
    FROM: "from"
  }, l.DEFAULT_FIELD = ["*"], l.booleanOperators = {
    eq: function(e) {
      var t = i.map(e, l.maybeTrimLowerCase);
      return t[0] == t[1]
    },
    is: function(e) {
      return e[0] === e[1]
    },
    gt: function(e) {
      return e[0] > e[1]
    },
    lt: function(e) {
      return e[0] < e[1]
    },
    gte: function(e) {
      return e[0] >= e[1]
    },
    lte: function(e) {
      return e[0] <= e[1]
    },
    "in": function(e) {
      var t = i.map(e[1] || [], l.maybeTrimLowerCase);
      return i.includes(t, l.maybeTrimLowerCase(e[0]))
    },
    between: function(e) {
      return e[1][0] <= e[0] && e[0] <= e[1][1]
    },
    contains: function(e) {
      var t = i.map(e, (function(e) {
        return "string" == typeof e ? e.toLowerCase() : e
      }));
      return (t[0] || "").indexOf(t[1]) !== -1
    },
    regex: function(e) {
      try {
        var t, n;
        return i.isString(e[1]) ? (t = e[1], n = "i") : (t = e[1][0] || "", n = e[1][1] || ""), new RegExp(t, n).test(e[0])
      } catch (e) {
        return a.error("Rules", 'In operator "regex", error: ' + (e.message || "invalid RegExp /" + [t, n].join("/"))), !1
      }
    },
    exists: function(e) {
      return "undefined" != typeof e[0]
    },
    and: function(e) {
      return i.every(e, (function(e) {
        return e
      }))
    },
    or: function(e) {
      return i.some(e, (function(e) {
        return e
      }))
    },
    not: function(e) {
      return !e[0]
    }
  }, l.arithmeticOperators = {
    "+": function(e) {
      return (e[0] || 0) + (e[1] || 0)
    },
    "-": function(e) {
      return (e[0] || 0) - (e[1] || 0)
    },
    "/": function(e) {
      return (e[0] || 0) / (e[1] || 1)
    },
    "%": function(e) {
      return (e[0] || 0) % (e[1] || 1)
    }
  }, l.aggregateOperators = {
    sum: function(e, t) {
      for (var n = e[0] || l.DEFAULT_FIELD, i = 0, r = 0; r < t.length; r++) i += l.getValueOrDefault(t[r], n, 0);
      return i
    },
    avg: function(e, t) {
      if (0 === t.length) return 0;
      for (var n = e[0] || l.DEFAULT_FIELD, i = 0, r = 0; r < t.length; r++) i += l.getValueOrDefault(t[r], n, 0);
      return i / t.length
    },
    max: function(e, t) {
      for (var n = e[0] || l.DEFAULT_FIELD, i = Number.NEGATIVE_INFINITY, r = 0; r < t.length; r++) i = Math.max(i, l.getValueOrDefault(t[r], n, Number.NEGATIVE_INFINITY));
      return i
    },
    min: function(e, t) {
      for (var n = e[0] || l.DEFAULT_FIELD, i = Number.POSITIVE_INFINITY, r = 0; r < t.length; r++) i = Math.min(i, l.getValueOrDefault(t[r], n, Number.POSITIVE_INFINITY));
      return i
    },
    count: function(e, t) {
      return t.length
    }
  }, l.functions = {
    now: function() {
      return s.now()
    }
  }, l.getScalarOperator = function(e) {
    return e in l.booleanOperators ? l.booleanOperators[e] : e in l.arithmeticOperators ? l.arithmeticOperators[e] : null
  }, l.operate = function(e, t) {
    if (t.hasOwnProperty("value")) return t["value"];
    if (t.hasOwnProperty("field")) return l.getValueOrDefault(e, t["field"]);
    if (t.hasOwnProperty("eval")) return t["eval"] in l.functions ? l.functions[t["eval"]]() : void a.error("Rules", "Unknown function: " + t["eval"]);
    if (!t["op"]) return void a.error("Rules", "No operator specified: " + c.stringify(t));
    var n = l.getScalarOperator(t["op"]);
    if (!n) return void a.error("Rules", "Unknown operator: " + t["op"]);
    var r = i.partial(l.operate, e),
      o = t["args"] || [],
      s = i.map(o, (function(e) {
        return r(e)
      }));
    return n(s, e)
  }, l.groupBy = function(e, t) {
    var n = {};
    if ("undefined" == typeof e || !i.isArray(e) || 0 === e.length) return n["*"] = {
      fieldValues: {},
      events: t
    }, n;
    for (var r = i.map(e, (function(e) {
        return e["field"]
      })), a = 0; a < t.length; a++) {
      for (var o = t[a], s = [], u = {}, d = 0; d < r.length; d++) {
        var f = r[d],
          g = l.getValueOrDefault(o, f),
          p = f.join(".");
        u[p] = g, s.push(encodeURIComponent(p) + "=" + encodeURIComponent(c.stringify(g)))
      }
      var h = s.join("&");
      n.hasOwnProperty(h) || (n[h] = {
        fieldValues: u,
        events: []
      }), n[h].events.push(o)
    }
    return n
  }, l.generateAlias = function(e, t) {
    return "_" + e + "_" + t.join(".")
  }, l.aggregate = function(e, t) {
    var n = {};
    return i.each(t, (function(t, i) {
      n[i] = {};
      for (var r = 0; r < e.length; r++) {
        var o = e[r],
          s = o["op"];
        if (s in l.aggregateOperators) {
          var u = (o["args"] && o["args"][0] || {})["field"] || l.DEFAULT_FIELD,
            c = l.generateAlias(s, u),
            d = l.aggregateOperators[s]([u], t.events);
          n[i][c] = d
        } else a.error("Rules", "Unknown aggregate operator " + s)
      }
    })), n
  }, l.project = function(e, t) {
    var n = [];
    return i.each(e, (function(e, r) {
      var a = i.extend({}, e.fieldValues),
        o = t[r] || {};
      i.extend(a, o), n.push(a)
    })), n
  }, l.orderBy = function(e, t) {
    return i.isArray(e) ? 0 === e.length ? t : t.sort((function(t, n) {
      for (var i = 0; i < e.length; i++) {
        var r = e[i],
          a = r["direction"] || "ASC",
          o = "ASC" === a ? 1 : -1,
          s = r["field"],
          u = l.getValueOrDefault(t, s, 0),
          c = l.getValueOrDefault(n, s, 0);
        if (u < c) return -o;
        if (u > c) return o
      }
      return 0
    })) : (o("Rules", "groupBy rule must be an array"), t)
  }, l.rewrite = function(e) {
    function t(e, o) {
      if (i.isArray(e) && ("and" !== e[0] && "or" !== e[0] && "not" !== e[0] && a.error("Rules", "Unexpected operation " + e[0] + ". Continuing optimistically."), e = {
          op: e[0],
          args: e.slice(1)
        }), e.hasOwnProperty("field") || e.hasOwnProperty("value") || e.hasOwnProperty("eval")) return e;
      if (o && e["op"] in l.aggregateOperators) {
        var s = (e["args"] && e["args"][0] || {})["field"] || l.DEFAULT_FIELD,
          u = l.generateAlias(e["op"], s);
        return u in r || (n.push({
          op: e["op"],
          args: e["args"]
        }), r[u] = !0), {
          field: [u]
        }
      }
      for (var c = [], d = e["args"] || [], f = 0; f < d.length; f++) c[f] = t(d[f], o);
      return {
        op: e["op"],
        args: c
      }
    }
    var n = [],
      r = {},
      o = {};
    e.hasOwnProperty(l.clause.WHERE) && (o[l.clause.WHERE] = t(e[l.clause.WHERE], !1)), e.hasOwnProperty(l.clause.HAVING) && (o[l.clause.HAVING] = t(e[l.clause.HAVING], !0)), (e.hasOwnProperty(l.clause.AGGREGATE) || n.length > 0) && (o[l.clause.AGGREGATE] = (e[l.clause.AGGREGATE] || []).concat(n));
    for (var s = [l.clause.GROUP_BY, l.clause.ORDER_BY, l.clause.SELECT, l.clause.OFFSET, l.clause.LIMIT], u = 0; u < s.length; u++) e.hasOwnProperty(s[u]) && (o[s[u]] = e[s[u]]);
    return e.hasOwnProperty(l.clause.FROM) && (o[l.clause.FROM] = l.rewrite(e[l.clause.FROM])), o
  }, l.verify = function(e, t) {
    t = t || 0;
    var n = [];
    if (e.hasOwnProperty(l.clause.WHERE) ? e[l.clause.WHERE]["op"] ? e[l.clause.WHERE]["op"] in l.booleanOperators || n.push("Non-boolean WHERE clause operator") : n.push("Missing WHERE clause operator") : n.push("Missing WHERE clause"), e.hasOwnProperty(l.clause.HAVING) && (e[l.clause.HAVING]["op"] ? e[l.clause.HAVING]["op"] in l.booleanOperators || n.push("Non-boolean HAVING clause operator") : n.push("Missing HAVING clause operator")), e.hasOwnProperty(l.clause.GROUP_BY) && !e.hasOwnProperty(l.clause.AGGREGATE) && n.push("No AGGREGATE clause specified with GROUP_BY clause"), e.hasOwnProperty(l.clause.SELECT)) {
      var r = e[l.clause.SELECT];
      if (i.isArray(r))
        for (var a = 0; a < r.length; a++) r[a]["op"] && r[a]["op"] in l.aggregateOperators && n.push('In SELECT clause, aggregate operator "' + r[a]["op"] + '" specified in selector at index ' + a);
      else n.push("SELECT clause must be an array")
    }
    if (e.hasOwnProperty(l.clause.OFFSET)) {
      var o = e[l.clause.OFFSET];
      (!i.isNumber(o) || Number(o) < 0 || Number(o) !== Math.floor(Number(o))) && n.push("OFFSET must be a non-negative integer")
    }
    if (e.hasOwnProperty(l.clause.LIMIT)) {
      var s = e[l.clause.LIMIT];
      (!i.isNumber(s) || Number(s) < 0 || Number(s) !== Math.floor(Number(s))) && n.push("LIMIT must be a non-negative integer")
    }
    return t > 0 && (n = i.map(n, (function(e) {
      return "Sub-rule " + t + ": " + e
    }))), e.hasOwnProperty(l.clause.FROM) && (n = n.concat(l.verify(e[l.clause.FROM], t + 1))), n
  }, l.select = function(e, t) {
    return i.map(t, (function(t) {
      return i.map(e, (function(e) {
        return l.operate(t, e)
      }))
    }))
  }, l.executeRecursively = function(e, t) {
    var n = t;
    if (e.hasOwnProperty(l.clause.FROM) && (a.debug("Evaluating FROM clause:", e[l.clause.FROM]), n = l.executeRecursively(e[l.clause.FROM], n), a.debug("Results after FROM:", n)), a.debug("Evaluating WHERE clause:", e[l.clause.WHERE]), n = i.filter(n, (function(t) {
        return l.operate(t, e[l.clause.WHERE])
      })), a.debug("Results after WHERE:", n), e.hasOwnProperty(l.clause.AGGREGATE)) {
      a.debug("Evaluating AGGREGATE clause:", e[l.clause.AGGREGATE]);
      var r = l.groupBy(e[l.clause.GROUP_BY], n),
        o = l.aggregate(e[l.clause.AGGREGATE], r);
      n = l.project(r, o), a.debug("Results after AGGREGATE:", n)
    }
    e.hasOwnProperty(l.clause.HAVING) && (a.debug("Evaluating HAVING clause:", e[l.clause.HAVING]), n = i.filter(n, (function(t) {
      return l.operate(t, e[l.clause.HAVING])
    })), a.debug("Results after HAVING:", n)), e.hasOwnProperty(l.clause.ORDER_BY) && (a.debug("Evaluating ORDER_BY clause:", e[l.clause.ORDER_BY]), n = l.orderBy(e[l.clause.ORDER_BY], n), a.debug("Results after ORDER_BY:", n));
    var s = 0;
    e.hasOwnProperty(l.clause.OFFSET) && (a.debug("Evaluating OFFSET clause:", e[l.clause.OFFSET]), s = Number(e[l.clause.OFFSET]));
    var u;
    return e.hasOwnProperty(l.clause.LIMIT) && (a.debug("Evaluating LIMIT clause:", e[l.clause.LIMIT]), u = s + Number(e[l.clause.LIMIT])), (s > 0 || !i.isUndefined(u)) && (n = n.slice(s, u), a.debug("Results after OFFSET/LIMIT:", n)), e.hasOwnProperty(l.clause.SELECT) && (a.debug("Evaluating SELECT clause:", e[l.clause.SELECT]), n = l.select(e[l.clause.SELECT], n), a.debug("Results after SELECT:", n)), n
  }, l.execute = function(e, t) {
    e = l.rewrite(e), a.shouldLog(r.LogLevel.DEBUG) && a.groupCollapsed("Evaluating Behavioral Rule"), a.debug("Rule:", e, c.stringify(e)), a.debug("Events:", t);
    var n = l.verify(e);
    if (n.length > 0) throw new Error("Rule " + c.stringify(e) + " has violations: " + n.join("\n"));
    var i = l.executeRecursively(e, t);
    return a.debug("Rule result:", i), a.shouldLog(r.LogLevel.DEBUG) && a.groupEnd(), i
  }, l.isSatisfied = function(e, t) {
    try {
      return l.execute(e, t).length > 0
    } catch (t) {
      return a.error("Rules", "Error " + t.toString() + " while evaluating rule " + c.stringify(e)), !1
    }
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerVisitorProfileProvider(n(149))
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(150),
    a = n(144),
    o = n(17),
    s = n(146);
  e.exports = {
    provides: "customBehavior",
    shouldTrack: !0,
    isLazy: !1,
    getter: ["stores/global", "stores/visitor_attribute_entity", "stores/visitor_events", "stores/visitor", function(e, t, n) {
      var u = e.getProjectId(),
        c = i.filter(i.map(t.getCustomBehavioralAttributes(u), (function(e) {
          try {
            return {
              id: e.id,
              granularity: r.GRANULARITY.ALL,
              rule: s.buildFromSpecV0_2(o.parse(e.rule_json))
            }
          } catch (e) {
            return
          }
        }))),
        l = a.getEvents(n);
      return r.evaluate(c, l)
    }]
  }
}), (function(e, t, n) {
  function i(e) {
    if (0 === e.length) return [];
    for (var t = e.length - 1, n = o.FIELDS.SESSION_ID, i = e[t][n]; t > 0 && i === e[t - 1][n];) t--;
    return e.slice(t)
  }

  function r(e, t) {
    if (0 === e.length || t <= 0) return [];
    var n = +new Date - t * s.MILLIS_IN_A_DAY;
    n -= n % s.MILLIS_IN_A_DAY;
    for (var i = e.length; i > 0 && n <= e[i - 1][o.FIELDS.TIME];) i--;
    return e.slice(i)
  }
  var a = n(15),
    o = {
      FIELDS: n(55).FIELDS
    },
    s = n(146),
    u = n(147);
  t.GRANULARITY = {
    ALL: "all",
    CURRENT_SESSION: "current_session",
    LAST_30_DAYS: "last_30_days",
    LAST_60_DAYS: "last_60_days"
  }, t.evaluate = function(e, n) {
    var o = {};
    if (0 === n.length) {
      for (var s = 0; s < e.length; s++) o[e[s].id] = e[s].defaultValue;
      return o
    }
    var c = i(n),
      l = r(n, 60);
    for (s = 0; s < e.length; s++) {
      var d = e[s],
        f = n;
      d.granularity === t.GRANULARITY.CURRENT_SESSION ? f = c : d.granularity === t.GRANULARITY.LAST_60_DAYS && (f = l);
      try {
        var g = f;
        d.rule && (g = u.execute(d.rule, f)), o[d.id] = d.defaultValue, 1 === g.length ? o[d.id] = g[0][0] || d.defaultValue : a.debug("Behavior / Rule for", d.id, "returned", g.length, "results, expected 1")
      } catch (e) {
        a.error("Behavior / Rule for", d.id, "failed with", e.message || "")
      }
    }
    return o
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerVisitorProfileProvider(n(152)), e.registerAudienceMatcher("first_session", n(153))
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(55),
    a = n(144),
    o = n(56).getFieldValue;
  e.exports = {
    provides: "first_session",
    shouldTrack: !0,
    getter: ["stores/visitor_events", function(e) {
      var t = a.getEvents(e);
      if (t && t.length > 0) {
        var n = o(t[0], [r.FIELDS.SESSION_ID]);
        return i.every(t, (function(e) {
          return e[r.FIELDS.SESSION_ID] === n
        }))
      }
      return !0
    }]
  }
}), (function(e, t) {
  e.exports = {
    fieldsNeeded: ["first_session"],
    match: function(e) {
      return !!e.first_session
    }
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerApiModule("behavior", n(155))
  }
}), (function(e, t, n) {
  function i(e, t) {
    var n = d.buildFromSpecV0_1(t);
    if (1 !== n.length) throw new Error("Invalid query descriptor; verify that no aggregators are specified");
    return f.execute(n[0], e)
  }

  function r(e, t) {
    return c.map(e, (function(e) {
      return c.isFunction(e.toObject) ? e.toObject(t) : e
    }))
  }

  function a(e, t) {
    if (!e) return ["Descriptor not defined"];
    var n = [];
    return e.count && n.push('Unexpected "count" clause specified'), e.pick && e.pick.modifier && t.indexOf(e.pick.modifier) === -1 && n.push('Invalid "pick" modifier "' + e.pick.modifier + '"'), c.each(e.filters, (function(e) {
      c.isUndefined(e.modifier) || n.push('Unexpected "filter" modifier "' + e.modifier + '"')
    })), n.length > 0 ? n : void 0
  }

  function o(e, t) {
    var n, o = {
      revenueAsTag: !1,
      timeAsTimestamp: !0
    };
    if (c.isUndefined(t)) return n = l.getEvents(e), r(n, o);
    if (c.isNumber(t)) {
      if (t <= 0) throw new Error("Count must be a positive integer, got " + t);
      return n = l.getEvents(e), r(n.slice(-t), o)
    }
    var s = a(t, c.values(d.RECENCY_FILTERS));
    if (s) throw new Error(s.join("\n"));
    return n = l.getEvents(e), r(i(n, t), o)
  }

  function s(e, t) {
    if (t = c.cloneDeep(t) || {}, !t.pick) throw new Error('No "pick" clause provided in query descriptor');
    if (!t.pick.name) throw new Error('No field name provided in "pick" clause');
    t.pick.modifier = t.pick.modifier || d.FREQUENCY_FILTERS.MOST_FREQUENT;
    var n = a(t, c.values(d.FREQUENCY_FILTERS));
    if (n) throw new Error(n.join("\n"));
    var r = l.getEvents(e);
    return i(r, t)
  }

  function u(e, t) {
    var n = d.buildFromSpecV0_2(t),
      i = l.getEvents(e),
      a = r(f.execute(n, i), {
        revenueAsTag: !0,
        timeAsTimestamp: !1
      });
    return (t.pick || t.reduce && "count" === t.reduce.aggregator) && (a = c.flatten(a)), t.reduce && (a = a[0]), a
  }
  var c = n(2),
    l = n(144),
    d = n(146),
    f = n(147);
  e.exports = ["stores/visitor_events", function(e) {
    return {
      getEvents: c.partial(o, e),
      getByFrequency: c.partial(s, e),
      query: c.partial(u, e)
    }
  }]
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerDependency("sources/browser_id", n(157)), e.registerVisitorProfileProvider(n(162)), e.registerVisitorProfileProvider(n(163)), e.registerAudienceMatcher("browser_version", n(164))
  }
}), (function(e, t, n) {
  var i = n(158);
  t.getId = function() {
    return i.get().browser.id
  }, t.getVersion = function() {
    return i.get().browser.version
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(159),
    a = n(71),
    o = n(8),
    s = n(18),
    u = n(12),
    c = s.get("stores/ua_data");
  t.get = function() {
    var e = c.get();
    return i.isEmpty(e) && (e = r.parseUA(a.getUserAgent()), u.dispatch(o.SET_UA_DATA, {
      data: e
    })), e
  }
}), (function(e, t, n) {
  function i(e) {
    if (e = (e || "").toLowerCase(), e in u) return e;
    var t = a.keys(u);
    return a.find(t, (function(t) {
      var n = u[t];
      return a.includes(n, e)
    })) || "unknown"
  }

  function r(e, t, n) {
    return t ? t : "unknown" === e ? "unknown" : n ? "mobile" : "desktop_laptop"
  }
  var a = n(2),
    o = n(160);
  t.parseUA = function(e) {
    var t = new o(e),
      n = t.getBrowser(),
      a = t.getOS(),
      u = t.getDevice(),
      l = (a.name || "unknown").toLowerCase(),
      d = (n.name || "unknown").toLowerCase(),
      f = s(u.type, d, l);
    return {
      browser: {
        id: i(n.name),
        version: n.version
      },
      platform: {
        name: l,
        version: a.version
      },
      device: {
        model: c[u.model] || "unknown",
        type: r(d, u.type, f),
        isMobile: f
      }
    }
  };
  var s = function(e, t, n) {
      if (a.includes(["mobile", "tablet"], e)) return !0;
      if (a.includes(["opera mini"], t)) return !0;
      var i = ["android", "blackberry", "ios", "windows phone"];
      return !!a.includes(i, n)
    },
    u = {
      gc: ["chrome", "chromium", "silk", "yandex", "maxthon"],
      edge: ["edge"],
      ie: ["internet explorer", "iemobile"],
      ff: ["firefox", "iceweasel"],
      opera: ["opera", "opera mini", "opera tablet"],
      safari: ["safari", "mobile safari", "webkit"],
      ucbrowser: ["uc browser"]
    },
    c = {
      iPhone: "iphone",
      iPad: "ipad"
    }
}), (function(e, t, n) {
  var i;
  !(function(r, a) {
    "use strict";
    var o = "0.7.12",
      s = "",
      u = "?",
      c = "function",
      l = "undefined",
      d = "object",
      f = "string",
      g = "major",
      p = "model",
      h = "name",
      v = "type",
      _ = "vendor",
      E = "version",
      m = "architecture",
      I = "console",
      y = "mobile",
      S = "tablet",
      T = "smarttv",
      A = "wearable",
      w = "embedded",
      D = {
        extend: function(e, t) {
          var n = {};
          for (var i in e) t[i] && t[i].length % 2 === 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
          return n
        },
        has: function(e, t) {
          return "string" == typeof e && t.toLowerCase().indexOf(e.toLowerCase()) !== -1
        },
        lowerize: function(e) {
          return e.toLowerCase()
        },
        major: function(e) {
          return typeof e === f ? e.replace(/[^\d\.]/g, "").split(".")[0] : a
        },
        trim: function(e) {
          return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
      },
      b = {
        rgx: function() {
          for (var e, t, n, i, r, o, s, u = 0, f = arguments; u < f.length && !o;) {
            var g = f[u],
              p = f[u + 1];
            if (typeof e === l) {
              e = {};
              for (i in p) p.hasOwnProperty(i) && (r = p[i], typeof r === d ? e[r[0]] = a : e[r] = a)
            }
            for (t = n = 0; t < g.length && !o;)
              if (o = g[t++].exec(this.getUA()))
                for (i = 0; i < p.length; i++) s = o[++n], r = p[i], typeof r === d && r.length > 0 ? 2 == r.length ? typeof r[1] == c ? e[r[0]] = r[1].call(this, s) : e[r[0]] = r[1] : 3 == r.length ? typeof r[1] !== c || r[1].exec && r[1].test ? e[r[0]] = s ? s.replace(r[1], r[2]) : a : e[r[0]] = s ? r[1].call(this, s, r[2]) : a : 4 == r.length && (e[r[0]] = s ? r[3].call(this, s.replace(r[1], r[2])) : a) : e[r] = s ? s : a;
            u += 2
          }
          return e
        },
        str: function(e, t) {
          for (var n in t)
            if (typeof t[n] === d && t[n].length > 0) {
              for (var i = 0; i < t[n].length; i++)
                if (D.has(t[n][i], e)) return n === u ? a : n
            } else if (D.has(t[n], e)) return n === u ? a : n;
          return e
        }
      },
      R = {
        browser: {
          oldsafari: {
            version: {
              "1.0": "/8",
              1.2: "/1",
              1.3: "/3",
              "2.0": "/412",
              "2.0.2": "/416",
              "2.0.3": "/417",
              "2.0.4": "/419",
              "?": "/"
            }
          }
        },
        device: {
          amazon: {
            model: {
              "Fire Phone": ["SD", "KF"]
            }
          },
          sprint: {
            model: {
              "Evo Shift 4G": "7373KT"
            },
            vendor: {
              HTC: "APA",
              Sprint: "Sprint"
            }
          }
        },
        os: {
          windows: {
            version: {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2000: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM"
            }
          }
        }
      },
      O = {
        browser: [
          [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
          [h, E],
          [/(opios)[\/\s]+([\w\.]+)/i],
          [
            [h, "Opera Mini"], E
          ],
          [/\s(opr)\/([\w\.]+)/i],
          [
            [h, "Opera"], E
          ],
          [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
          [h, E],
          [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
          [
            [h, "IE"], E
          ],
          [/(edge)\/((\d+)?[\w\.]+)/i],
          [h, E],
          [/(yabrowser)\/([\w\.]+)/i],
          [
            [h, "Yandex"], E
          ],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [
            [h, /_/g, " "], E
          ],
          [/(micromessenger)\/([\w\.]+)/i],
          [
            [h, "WeChat"], E
          ],
          [/xiaomi\/miuibrowser\/([\w\.]+)/i],
          [E, [h, "MIUI Browser"]],
          [/\swv\).+(chrome)\/([\w\.]+)/i],
          [
            [h, /(.+)/, "$1 WebView"], E
          ],
          [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
          [E, [h, "Android Browser"]],
          [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
          [h, E],
          [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i],
          [
            [h, "UCBrowser"], E
          ],
          [/(dolfin)\/([\w\.]+)/i],
          [
            [h, "Dolphin"], E
          ],
          [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
          [
            [h, "Chrome"], E
          ],
          [/;fbav\/([\w\.]+);/i],
          [E, [h, "Facebook"]],
          [/fxios\/([\w\.-]+)/i],
          [E, [h, "Firefox"]],
          [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
          [E, [h, "Mobile Safari"]],
          [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
          [E, h],
          [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
          [h, [E, b.str, R.browser.oldsafari.version]],
          [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
          [h, E],
          [/(navigator|netscape)\/([\w\.-]+)/i],
          [
            [h, "Netscape"], E
          ],
          [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
          [h, E]
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
          [
            [m, "amd64"]
          ],
          [/(ia32(?=;))/i],
          [
            [m, D.lowerize]
          ],
          [/((?:i[346]|x)86)[;\)]/i],
          [
            [m, "ia32"]
          ],
          [/windows\s(ce|mobile);\sppc;/i],
          [
            [m, "arm"]
          ],
          [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
          [
            [m, /ower/, "", D.lowerize]
          ],
          [/(sun4\w)[;\)]/i],
          [
            [m, "sparc"]
          ],
          [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
          [
            [m, D.lowerize]
          ]
        ],
        device: [
          [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
          [p, _, [v, S]],
          [/applecoremedia\/[\w\.]+ \((ipad)/],
          [p, [_, "Apple"],
            [v, S]
          ],
          [/(apple\s{0,1}tv)/i],
          [
            [p, "Apple TV"],
            [_, "Apple"]
          ],
          [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
          [_, p, [v, S]],
          [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
          [p, [_, "Amazon"],
            [v, S]
          ],
          [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
          [
            [p, b.str, R.device.amazon.model],
            [_, "Amazon"],
            [v, y]
          ],
          [/\((ip[honed|\s\w*]+);.+(apple)/i],
          [p, _, [v, y]],
          [/\((ip[honed|\s\w*]+);/i],
          [p, [_, "Apple"],
            [v, y]
          ],
          [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
          [_, p, [v, y]],
          [/\(bb10;\s(\w+)/i],
          [p, [_, "BlackBerry"],
            [v, y]
          ],
          [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
          [p, [_, "Asus"],
            [v, S]
          ],
          [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
          [
            [_, "Sony"],
            [p, "Xperia Tablet"],
            [v, S]
          ],
          [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
          [
            [_, "Sony"],
            [p, "Xperia Phone"],
            [v, y]
          ],
          [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
          [_, p, [v, I]],
          [/android.+;\s(shield)\sbuild/i],
          [p, [_, "Nvidia"],
            [v, I]
          ],
          [/(playstation\s[34portablevi]+)/i],
          [p, [_, "Sony"],
            [v, I]
          ],
          [/(sprint\s(\w+))/i],
          [
            [_, b.str, R.device.sprint.vendor],
            [p, b.str, R.device.sprint.model],
            [v, y]
          ],
          [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
          [_, p, [v, S]],
          [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
          [_, [p, /_/g, " "],
            [v, y]
          ],
          [/(nexus\s9)/i],
          [p, [_, "HTC"],
            [v, S]
          ],
          [/(nexus\s6p)/i],
          [p, [_, "Huawei"],
            [v, y]
          ],
          [/(microsoft);\s(lumia[\s\w]+)/i],
          [_, p, [v, y]],
          [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
          [p, [_, "Microsoft"],
            [v, I]
          ],
          [/(kin\.[onetw]{3})/i],
          [
            [p, /\./g, " "],
            [_, "Microsoft"],
            [v, y]
          ],
          [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
          [p, [_, "Motorola"],
            [v, y]
          ],
          [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
          [p, [_, "Motorola"],
            [v, S]
          ],
          [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
          [
            [_, D.trim],
            [p, D.trim],
            [v, T]
          ],
          [/hbbtv.+maple;(\d+)/i],
          [
            [p, /^/, "SmartTV"],
            [_, "Samsung"],
            [v, T]
          ],
          [/\(dtv[\);].+(aquos)/i],
          [p, [_, "Sharp"],
            [v, T]
          ],
          [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
          [
            [_, "Samsung"], p, [v, S]
          ],
          [/smart-tv.+(samsung)/i],
          [_, [v, T], p],
          [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
          [
            [_, "Samsung"], p, [v, y]
          ],
          [/sie-(\w+)*/i],
          [p, [_, "Siemens"],
            [v, y]
          ],
          [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
          [
            [_, "Nokia"], p, [v, y]
          ],
          [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
          [p, [_, "Acer"],
            [v, S]
          ],
          [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
          [
            [_, "LG"], p, [v, S]
          ],
          [/(lg) netcast\.tv/i],
          [_, p, [v, T]],
          [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
          [p, [_, "LG"],
            [v, y]
          ],
          [/android.+(ideatab[a-z0-9\-\s]+)/i],
          [p, [_, "Lenovo"],
            [v, S]
          ],
          [/linux;.+((jolla));/i],
          [_, p, [v, y]],
          [/((pebble))app\/[\d\.]+\s/i],
          [_, p, [v, A]],
          [/android.+;\s(glass)\s\d/i],
          [p, [_, "Google"],
            [v, A]
          ],
          [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
          [
            [p, /_/g, " "],
            [_, "Xiaomi"],
            [v, y]
          ],
          [/android.+a000(1)\s+build/i],
          [p, [_, "OnePlus"],
            [v, y]
          ],
          [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
          [
            [v, D.lowerize], _, p
          ]
        ],
        engine: [
          [/windows.+\sedge\/([\w\.]+)/i],
          [E, [h, "EdgeHTML"]],
          [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
          [h, E],
          [/rv\:([\w\.]+).*(gecko)/i],
          [E, h]
        ],
        os: [
          [/microsoft\s(windows)\s(vista|xp)/i],
          [h, E],
          [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
          [h, [E, b.str, R.os.windows.version]],
          [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
          [
            [h, "Windows"],
            [E, b.str, R.os.windows.version]
          ],
          [/\((bb)(10);/i],
          [
            [h, "BlackBerry"], E
          ],
          [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
          [h, E],
          [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
          [
            [h, "Symbian"], E
          ],
          [/\((series40);/i],
          [h],
          [/mozilla.+\(mobile;.+gecko.+firefox/i],
          [
            [h, "Firefox OS"], E
          ],
          [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
          [h, E],
          [/(cros)\s[\w]+\s([\w\.]+\w)/i],
          [
            [h, "Chromium OS"], E
          ],
          [/(sunos)\s?([\w\.]+\d)*/i],
          [
            [h, "Solaris"], E
          ],
          [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
          [h, E],
          [/(haiku)\s(\w+)/i],
          [h, E],
          [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
          [
            [h, "iOS"],
            [E, /_/g, "."]
          ],
          [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
          [
            [h, "Mac OS"],
            [E, /_/g, "."]
          ],
          [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
          [h, E]
        ]
      },
      C = function(e, t) {
        if (!(this instanceof C)) return new C(e, t).getResult();
        var n = e || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : s),
          i = t ? D.extend(O, t) : O;
        return this.getBrowser = function() {
          var e = b.rgx.apply(this, i.browser);
          return e.major = D.major(e.version), e
        }, this.getCPU = function() {
          return b.rgx.apply(this, i.cpu)
        }, this.getDevice = function() {
          return b.rgx.apply(this, i.device)
        }, this.getEngine = function() {
          return b.rgx.apply(this, i.engine)
        }, this.getOS = function() {
          return b.rgx.apply(this, i.os)
        }, this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          }
        }, this.getUA = function() {
          return n
        }, this.setUA = function(e) {
          return n = e, this
        }, this
      };
    C.VERSION = o, C.BROWSER = {
      NAME: h,
      MAJOR: g,
      VERSION: E
    }, C.CPU = {
      ARCHITECTURE: m
    }, C.DEVICE = {
      MODEL: p,
      VENDOR: _,
      TYPE: v,
      CONSOLE: I,
      MOBILE: y,
      SMARTTV: T,
      TABLET: S,
      WEARABLE: A,
      EMBEDDED: w
    }, C.ENGINE = {
      NAME: h,
      VERSION: E
    }, C.OS = {
      NAME: h,
      VERSION: E
    }, typeof t !== l ? (typeof e !== l && e.exports && (t = e.exports = C), t.UAParser = C) : "function" === c && n(161) ? (i = function() {
      return C
    }.call(t, n, t, e), !(i !== a && (e.exports = i))) : r.UAParser = C;
    var N = r.jQuery || r.Zepto;
    if (typeof N !== l) {
      var P = new C;
      N.ua = P.getResult(), N.ua.get = function() {
        return P.getUA()
      }, N.ua.set = function(e) {
        P.setUA(e);
        var t = P.getResult();
        for (var n in t) N.ua[n] = t[n]
      }
    }
  })("object" == typeof window ? window : this)
}), (function(e, t) {
  (function(t) {
    e.exports = t
  }).call(t, {})
}), (function(e, t) {
  e.exports = {
    provides: "browserId",
    shouldTrack: !0,
    isSticky: !0,
    getter: ["sources/browser_id", function(e) {
      return e.getId()
    }]
  }
}), (function(e, t) {
  e.exports = {
    provides: "browserVersion",
    getter: ["sources/browser_id", function(e) {
      return e.getVersion()
    }]
  }
}), (function(e, t, n) {
  var i = n(165).compareVersion;
  e.exports = {
    fieldsNeeded: ["browserVersion", "browserId"],
    match: function(e, t) {
      var n = t.value,
        r = e.browserId,
        a = e.browserVersion;
      if (0 === n.indexOf(r)) {
        var o = n.substr(r.length);
        return 0 === i(a, o)
      }
      return !1
    }
  }
}), (function(e, t, n) {
  var i = n(2);
  t.compareVersion = function(e, t) {
    if (!t) return 0;
    for (var n = t.toString().split("."), r = e.toString().split("."), a = 0; a < n.length; a++) {
      if (i.isUndefined(r[a])) return -1;
      if (isNaN(Number(r[a]))) {
        if (r[a] !== n[a]) return -1
      } else {
        if (Number(r[a]) < Number(n[a])) return -1;
        if (Number(r[a]) > Number(n[a])) return 1
      }
    }
    return 0
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerVisitorProfileProvider(n(167)), e.registerAudienceMatcher("campaign", n(168))
  }
}), (function(e, t, n) {
  var i = n(111);
  e.exports = {
    provides: "campaign",
    shouldTrack: !0,
    isSticky: !0,
    getter: [function() {
      return i.getQueryParamValue("utm_campaign")
    }]
  }
}), (function(e, t, n) {
  var i = n(169);
  e.exports = {
    fieldsNeeded: ["campaign"],
    match: function(e, t) {
      return i.hasMatch(t.value, t.match, e.campaign)
    }
  }
}), (function(e, t, n) {
  var i = n(2);
  t.hasMatch = function(e, t, n) {
    var r = !i.isUndefined(n) && null !== n,
      a = !i.isUndefined(e) && null !== e,
      o = t || (a ? "exact" : "exists");
    switch (o) {
      case "exists":
        return r;
      case "exact":
        return r && String(n) === e;
      case "substring":
        return r && String(n).indexOf(e) > -1;
      case "regex":
        try {
          if (a && r) {
            var s = new RegExp(e);
            return s.test(String(n))
          }
          return !1
        } catch (e) {}
        return !1;
      case "range":
        var u = e.split(":"),
          c = parseFloat(u[0]),
          l = parseFloat(u[1]),
          d = parseFloat(n);
        return d >= c && d <= l;
      default:
        return !1
    }
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerVisitorProfileProvider(n(171));
    var t = n(172);
    e.registerAudienceMatcher("custom_attribute", t), e.registerAudienceMatcher("custom_dimension", t)
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(16),
    a = n(15),
    o = n(18),
    s = o.get("stores/dimension_data");
  e.exports = {
    provides: "custom",
    attributionType: r.AttributionTypes.LAST_TOUCH,
    restorer: function(e) {
      return i.reduce(e, (function(e, t, n) {
        var r = t,
          o = n,
          u = s.getByApiName(n),
          c = s.getById(n);
        return i.isObject(t) && !t.id && (u && !c ? (o = u.id, r = {
          id: u.segmentId || u.id,
          value: t.value
        }) : c || a.warn("Unable to determine ID for custom attribute:", n, "; segmentation is disabled.")), e[o] = r, e
      }), {})
    },
    shouldTrack: !0
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(169);
  t.match = function(e, t) {
    var n;
    return e.custom && (n = e.custom[t.name]), i.isObject(n) && (n = n.value), r.hasMatch(t.value, t.match, n)
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerDependency("sources/device", n(174)), e.registerVisitorProfileProvider(n(175)), e.registerAudienceMatcher("device", n(176))
  }
}), (function(e, t, n) {
  var i = n(158);
  t.getDevice = function() {
    var e = i.get().device;
    return "unknown" !== e.model ? e.model : "tablet" === e.type ? "tablet" : e.isMobile ? "mobile" : "desktop"
  }
}), (function(e, t) {
  e.exports = {
    provides: "device",
    shouldTrack: !0,
    isSticky: !0,
    getter: ["sources/device", function(e) {
      return e.getDevice()
    }]
  }
}), (function(e, t) {
  e.exports = {
    fieldsNeeded: ["device"],
    match: function(e, t) {
      return e.device === t.value
    }
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerVisitorProfileProvider(n(178)), e.registerAudienceMatcher("referrer", n(179))
  }
}), (function(e, t, n) {
  var i = n(70),
    r = n(90);
  e.exports = {
    provides: "referrer",
    shouldTrack: !0,
    isSticky: !0,
    getter: [function() {
      var e = r.getReferrer() || i.getReferrer();
      return "" === e && (e = null), e
    }]
  }
}), (function(e, t, n) {
  var i = n(180);
  t.fieldsNeeded = ["referrer"], t.match = function(e, t) {
    return null !== e.referrer && i(e.referrer, t)
  }
}), (function(e, t, n) {
  function i(e) {
    var t = e.indexOf("?");
    return t !== -1 && (e = e.substring(0, t)), t = e.indexOf("#"), t !== -1 && (e = e.substring(0, t)), e
  }

  function r(e) {
    return a(i(e))
  }

  function a(e, t) {
    e = e.replace("/?", "?"), e = e.toLowerCase().replace(/[\/&?]+$/, "");
    var n = l.slice(0);
    t || (n = n.concat(u));
    for (var i = n.length, r = 0; r < i; r++) {
      var a = n[r],
        o = new RegExp("^" + a);
      e = e.replace(o, "")
    }
    return e
  }

  function o(e) {
    var t = e.split("?");
    if (t[1]) {
      var n = t[1].split("#"),
        i = n[0],
        r = n[1],
        a = i.split("&"),
        o = [];
      return s.each(a, (function(e) {
        0 !== e.indexOf(c) && o.push(e)
      })), t[1] = "", o.length > 0 && (t[1] = "?" + o.join("&")), r && (t[1] += "#" + r), t.join("")
    }
    return e
  }
  var s = n(2);
  e.exports = function(e, t) {
    e = o(e);
    var n = t.value;
    switch (t.match) {
      case "exact":
        return e = a(e), e === a(n);
      case "regex":
        try {
          return Boolean(e.match(n))
        } catch (e) {}
        return !1;
      case "simple":
        return e = r(e), n = r(n), e === n;
      case "substring":
        return e = a(e, !0), n = a(n, !0), e.indexOf(n) !== -1;
      default:
        return !1
    }
  };
  var u = ["www."],
    c = "optimizely_",
    l = ["https?://.*?.?optimizelyedit.(com|test)/", "https?://.*.?optimizelypreview.(com|test)/", "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/", "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/", "https?://"]
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerVisitorProfileProvider(n(182)), e.registerAudienceMatcher("source_type", n(184))
  }
}), (function(e, t, n) {
  var i = n(111),
    r = n(70),
    a = n(90),
    o = n(183),
    s = ["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "https://(www)?\\.google\\..*?/$", "bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search", "baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];
  e.exports = {
    provides: "source_type",
    shouldTrack: !0,
    isSticky: !1,
    getter: [function() {
      return function(e, t) {
        var n = function() {
            if (i.getQueryParamValue("utm_source") || i.getQueryParamValue("gclid") || i.getQueryParamValue("otm_source")) return "campaign";
            for (var e = a.getReferrer() || r.getReferrer(), t = 0; t < s.length; t++) {
              var n = s[t],
                u = e.match(n);
              if (u) return "search"
            }
            return e && o.getDomain(e) !== o.getDomain(i.getUrl()) ? "referral" : "direct"
          },
          u = function(e, t) {
            return !e || "direct" !== t
          },
          c = e(),
          l = n();
        u(c, l) && t(l)
      }
    }]
  }
}), (function(e, t) {
  t.getDomain = function(e, t) {
    if (!e) return "";
    try {
      return t ? e.match(/:\/\/(.[^\/]+)/)[1] : e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]
    } catch (e) {
      return ""
    }
  }
}), (function(e, t, n) {
  var i = n(169);
  t.fieldsNeeded = ["source_type"], t.match = function(e, t) {
    return i.hasMatch(t.value, t.match, e.source_type)
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerVisitorProfileProvider(n(186)), e.registerVisitorProfileProvider(n(187)), e.registerAudienceMatcher("time_and_day", n(188))
  }
}), (function(e, t, n) {
  var i = n(10);
  e.exports = {
    provides: "currentTimestamp",
    shouldTrack: !0,
    isLazy: !0,
    getter: [function() {
      return i.now()
    }]
  }
}), (function(e, t) {
  e.exports = {
    provides: "offset",
    shouldTrack: !0,
    isLazy: !0,
    getter: [function() {
      return (new Date).getTimezoneOffset()
    }]
  }
}), (function(e, t, n) {
  var i = n(189);
  t.fieldsNeeded = ["currentTimestamp"], t.match = function(e, t) {
    return i.test(t.value, new Date(e.currentTimestamp))
  }
}), (function(e, t, n) {
  function i(e) {
    var t = e.split(o);
    if (3 !== t.length) throw new Error("Invalid time and day string " + e);
    var n = t[2].split(s);
    return {
      start_time: t[0],
      end_time: t[1],
      days: n
    }
  }

  function r(e) {
    var t = e.split(u);
    if (2 !== t.length) throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + e);
    return 60 * parseInt(t[0], 10) + parseInt(t[1], 10)
  }
  var a = n(2),
    o = "_",
    s = ",",
    u = ":";
  t.test = function(e, t) {
    var n = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      o = i(e),
      s = r(o.start_time),
      u = r(o.end_time),
      c = 60 * t.getHours() + t.getMinutes(),
      l = n[t.getDay()];
    return c >= s && c <= u && a.includes(o.days, l)
  }
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerAnalyticsTracker("avro", n(191))
  }
}), (function(e, t, n) {
  function i(e) {
    function t(e, t, n) {
      var i = h({
        type: R,
        name: n,
        value: t
      });
      return i && e.push(i), e
    }
    var n = m.keys(z),
      i = m.omit(e, n),
      r = m.pick(e, n),
      a = m.reduce(i, t, []),
      o = m.reduce(r, (function(e, n, i) {
        var r = z[i];
        r.excludeFeature || t(a, n, i);
        try {
          r.validate(n), n = r.sanitize(n), e.push({
            name: i,
            value: n
          })
        } catch (e) {
          I.emitError(new B("Bad value for eventMetrics[" + i + "]: " + e.message))
        }
        return e
      }), []);
    return {
      eventFeatures: a,
      eventMetrics: o
    }
  }

  function r(e, t) {
    var n = u(e, t),
      r = i(e.eventTags);
    return r.eventFeatures.push(h({
      type: b,
      name: "",
      value: e.viewCategory
    })), m.extend(n, r, {
      eventEntityId: e.pageId,
      eventType: O,
      eventName: e.pageId
    })
  }

  function a(e, t, n) {
    var i = u(e, t),
      r = [];
    return r.push(h({
      type: w,
      name: "selector",
      value: e.selector
    })), r.push(h({
      type: w,
      name: "view_id",
      value: e.event.pageId
    })), m.forOwn(e.eventTags, (function(e, t) {
      var n = h({
        type: R,
        name: t,
        value: e
      }, x);
      n && r.push(n)
    })), m.extend(i, {
      eventEntityId: e.event.id,
      eventType: e.event.category,
      eventName: e.event.apiName,
      eventFeatures: r
    })
  }

  function o(e, t) {
    var n = u(e, t),
      r = i(e.eventTags);
    return m.extend(n, r, {
      eventEntityId: e.eventEntityId,
      eventType: e.eventCategory,
      eventName: e.eventApiName
    })
  }

  function s(e, t) {
    var n = u(e, t);
    return n.layerStates = [], m.extend(n, {
      eventType: N,
      eventName: C
    })
  }

  function u(e, t) {
    var n = f(e.userFeatures),
      i = g(e.activeViewStates, t),
      r = d(e.layerStates),
      a = m.isNull(U.getAnonymizeIP()) ? void 0 : U.getAnonymizeIP();
    return {
      eventId: e.eventId,
      anonymizeIP: a,
      timestamp: e.timestamp,
      revision: e.revision,
      clientEngine: e.clientEngine,
      clientVersion: e.clientVersion,
      projectId: e.projectId,
      accountId: e.accountId,
      activationId: e.activationId,
      sessionId: E(e.sessionId),
      visitorId: e.visitorId,
      visitorUUID: e.visitorUUID,
      eventFeatures: [],
      eventMetrics: [],
      layerStates: r,
      userFeatures: n,
      activeViews: i,
      isGlobalHoldback: e.isGlobalHoldback
    }
  }

  function c(e) {
    var t = m.map(e.decisionTicketAudienceIds, (function(e) {
        return {
          id: e
        }
      })),
      n = f(e.userFeatures);
    return {
      decisionId: e.decisionId,
      anonymizeIP: e.anonymizeIP,
      timestamp: e.timestamp,
      revision: e.revision,
      clientEngine: e.clientEngine,
      clientVersion: e.clientVersion,
      projectId: e.projectId,
      accountId: e.accountId,
      layerId: e.layerId,
      activationId: e.activationId,
      sessionId: E(e.sessionId),
      visitorId: e.visitorId,
      visitorUUID: e.visitorUUID,
      decisionTicket: {
        audiences: t,
        bucketingId: e.visitorUUID || e.visitorId
      },
      decision: p(e),
      userFeatures: n,
      isGlobalHoldback: !1
    }
  }

  function l(e) {
    var t = e.decisionTicket,
      n = e.decision,
      i = m.map(t.audienceIds, (function(e) {
        return {
          id: e
        }
      })),
      r = f(e.userFeatures),
      a = m.isNull(U.getAnonymizeIP()) ? void 0 : U.getAnonymizeIP();
    return {
      decisionId: e.decisionId,
      anonymizeIP: a,
      timestamp: e.timestamp,
      revision: e.revision,
      clientEngine: e.clientEngine,
      clientVersion: e.clientVersion,
      projectId: e.projectId,
      accountId: e.accountId,
      layerId: n.layerId,
      activationId: e.activationId,
      sessionId: E(e.sessionId),
      visitorId: G.getRandomId(),
      visitorUUID: G.getUUID(),
      decisionTicket: {
        audiences: i,
        bucketingId: t.bucketingId
      },
      decision: p(n),
      userFeatures: r,
      isGlobalHoldback: U.isGlobalHoldback()
    }
  }

  function d(e) {
    var e = m.map(e, (function(e) {
      return {
        layerId: e.layerId,
        decision: p(e.decision),
        decisionEventId: e.decisionEventId
      }
    }));
    return e
  }

  function f(e) {
    return m.reduce(e, (function(e, t) {
      try {
        v(t.value), e.push(m.pick(t, ["id", "type", "name", "shouldIndex", "value"]))
      } catch (e) {
        x.warn("Error evaluating user feature", t, e)
      }
      return e
    }), [])
  }

  function g(e, t) {
    return m.map(e, (function(e) {
      var n = [];
      try {
        var i = t.get(e.id);
        n.push(h({
          type: b,
          name: "",
          value: i.category
        }))
      } catch (t) {
        x.error("Unable to find Page category for Page with id", e.id)
      }
      return m.forOwn(e.metadata, (function(e, t) {
        var i = h({
          type: D,
          name: t,
          value: e
        }, x);
        i && n.push(i)
      })), {
        viewId: e.id,
        activatedTimestamp: e.activatedTimestamp,
        viewFeatures: n
      }
    }))
  }

  function p(e) {
    return m.pick(e, ["experimentId", "variationId", "isLayerHoldback"])
  }

  function h(e) {
    var t = m.extend({
      id: null,
      shouldIndex: !0
    }, e);
    try {
      v(e.value)
    } catch (t) {
      return void x.error("Error evaluating feature:", e, t)
    }
    return t
  }

  function v(e) {
    if (null == e) throw new Error("Feature value is null");
    if ("object" == typeof e) {
      var t;
      try {
        t = k.stringify(e)
      } catch (e) {}
      throw new Error('Feature value is complex: "' + t || '[object]"')
    }
  }

  function _(e) {
    if (null == e) throw new Error("Metric value is null");
    if (!m.isNumber(e)) throw new Error("Metric value is not numeric")
  }

  function E(e) {
    return P ? L : e
  }
  var m = n(2),
    I = n(73),
    y = n(105),
    S = "https://logx.optimizely.com",
    T = S + "/log/decision",
    A = S + "/log/event",
    w = "event",
    D = "view_tag",
    b = "view_category",
    R = "tags",
    O = "view_activated",
    C = "client_activation",
    N = "client_activation",
    P = !0,
    L = "AUTO",
    V = n(66).create,
    k = n(17),
    x = n(15),
    F = n(84),
    M = n(18),
    U = M.get("stores/global"),
    G = M.get("stores/visitor_id"),
    B = t.Error = V("AvroError"),
    z = {
      revenue: {
        validate: _,
        sanitize: Math.floor,
        excludeFeature: !0
      },
      quantity: {
        validate: _,
        sanitize: Math.floor,
        excludeFeature: !0
      },
      value: {
        validate: _,
        sanitize: m.identity
      }
    };
  t.preRedirectPolicy = y.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT, t.postRedirectPolicy = y.PostRedirectPolicies.TRACK_AFTER_SYNC, t.nonRedirectPolicy = y.NonRedirectPolicies.TRACK_IMMEDIATELY, t.trackLayerDecision = function(e) {
    var t = c(e);
    t.userFeatures[0].value = "ff";
    console.log(t);
    F.retryableRequest({
      url: T,
      method: "POST",
      data: t
    }, t.decisionId)
  }, t.onLayerDecision = [function() {
    return function(e) {
      var t = l(e);
      t.userFeatures[0].value = "ff";
      console.log(t);
      F.retryableRequest({
        url: T,
        method: "POST",
        data: t
      }, t.decisionId)
    }
  }], t.onPageActivated = ["stores/view_data", function(e) {
    return function(t) {
      var n = r(t, e, x);
      n.userFeatures[0].value = "ff";
      console.log(n);
      F.retryableRequest({
        url: A,
        method: "POST",
        data: n
      }, n.eventId)
    }
  }], t.onClientActivation = ["stores/view_data", function(e) {
    return function(t) {
      var n = s(t, e, x);
      n.userFeatures[0].value = "ff";
      console.log(n);
      F.retryableRequest({
        url: A,
        method: "POST",
        data: n
      }, n.eventId)
    }
  }], t.onCustomEvent = ["stores/view_data", function(e) {
    return function(t) {
      var n = o(t, e);
      F.retryableRequest({
        url: A,
        method: "POST",
        data: n
      }, n.eventId)
    }
  }], t.onClickEvent = ["stores/view_data", "stores/view", function(e, t) {
    return function(n) {
      var i = a(n, e, t);
      F.retryableRequest({
        url: A,
        method: "POST",
        data: i
      }, i.eventId)
    }
  }]
}), (function(e, t, n) {
  e.exports = function(e) {
    e.registerViewProvider(n(193)), e.registerViewMatcher("url", n(194))
  }
}), (function(e, t, n) {
  var i = n(111);
  e.exports = {
    provides: "url",
    getter: [function() {
      return i.getUrl()
    }]
  }
}), (function(e, t, n) {
  var i = n(180);
  e.exports = {
    fieldsNeeded: ["url"],
    match: function(e, t) {
      return i(e.url, t)
    }
  }
}), (function(e, t, n) {
  function i(e, t) {
    this.change = r.cloneDeep(e), this.change = f.transformVisibilityAttributesToCSS(this.change), this.identifier = t.identifier, this.startTime = t.startTime
  }
  var r = n(2),
    a = n(128),
    o = n(196),
    s = n(197),
    u = n(18).get("stores/directive"),
    c = n(70),
    l = n(198),
    d = n(127),
    f = n(199),
    g = n(91).create();
  i.prototype.apply = function() {
    this.applyDeferred = s();
    try {
      var e = {};
      u.shouldObserveChangesIndefinitely() || (e = {
        timeout: r.partial(d.isTimedOut, this.startTime),
        onTimeout: r.partial(this.applyDeferred.reject, new Error("Unable to find selector."))
      }), this.unobserveSelector = g.observeSelector(this.change.selector, this.applyToElement.bind(this), e);
      var t = c.querySelectorAll(this.change.selector);
      r.each(t, this.applyToElement.bind(this))
    } catch (e) {
      this.applyDeferred.reject(e)
    }
    return this.applyDeferred
  }, i.prototype.applyToElement = function(e) {
    var t = a.CHANGE_ID_ATTRIBUTE_PREFIX + this.change.id;
    if (e.hasAttribute(t)) {
      var n = "AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. " + e;
      return void this.applyDeferred.resolve(n)
    }
    var i = {};
    r.forOwn(this.change.attributes, (function(n, a) {
      switch (a) {
        case l.selectorChangeType.CLASS:
          r.isUndefined(e.className) || (i[l.selectorChangeType.CLASS] = e.className, e.className = n);
          break;
        case l.selectorChangeType.HREF:
          r.isUndefined(e.href) || (i[l.selectorChangeType.HREF] = e.href, e.href = n);
          break;
        case l.selectorChangeType.HTML:
          r.isUndefined(e.innerHTML) || (i[l.selectorChangeType.HTML] = e.innerHTML, e.innerHTML = n, r.each(c.childrenOf(e), (function(e) {
            e.setAttribute(t, "")
          })));
          break;
        case l.selectorChangeType.SRC:
          r.isUndefined(e.src) || (i[l.selectorChangeType.SRC] = e.src, e.src = n);
          break;
        case l.selectorChangeType.STYLE:
          break;
        case l.selectorChangeType.TEXT:
          r.isUndefined(e.textContent) || (i[l.selectorChangeType.TEXT] = e.textContent, e.textContent = n);
          break;
        default:
          throw new Error("Unrecognized attribute: " + a)
      }
    }));
    var s = f.createStylesFromChange(e.style.cssText, this.change);
    r.isString(s) && (i[l.selectorChangeType.STYLE] = e.style.cssText, e.style.cssText = s), e.setAttribute(t, ""), o.setData(e, this.change.id, this.identifier, i), this.applyDeferred.resolve()
  }, i.prototype.cancel = function() {
    this.unobserveSelector && this.unobserveSelector()
  }, e.exports = function(e) {
    e.registerChangeApplier(l.changeType.ATTRIBUTE, i)
  }
}), (function(e, t, n) {
  function i(e, t) {
    return [e, t].join("_")
  }
  var r = n(2),
    a = n(128).CHANGE_DATA_KEY;
  t.getData = function(e, t, n) {
    var r = i(t, n);
    return e[a] && e[a][r] ? e[a][r] : null
  }, t.hasData = function(e) {
    return Boolean(e && e[a] && !r.isEmpty(e[a]))
  }, t.removeData = function(e, t, n) {
    e[a] && delete e[a][i(t, n)]
  }, t.setData = function(e, t, n, r) {
    if ("object" != typeof r) throw new Error("setData expects an object");
    e[a] || (e[a] = {}), e[a][i(t, n)] = r
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(77).Promise,
    a = function() {
      var e, t, n = new r(function(n, i) {
        e = n, t = i
      });
      return n.resolve = function() {
        return e.apply(null, i.toArray(arguments)), n
      }, n.reject = function() {
        return t.apply(null, i.toArray(arguments)), n
      }, n
    };
  e.exports = a
}), (function(e, t, n) {
  var i = n(9);
  e.exports = {
    changeType: {
      CUSTOM_CODE: "custom_code",
      ATTRIBUTE: "attribute",
      APPEND: "append",
      REARRANGE: "rearrange",
      REDIRECT: "redirect",
      WIDGET: "widget"
    },
    DOMInsertionType: {
      AFTER: "after",
      APPEND: "append",
      BEFORE: "before",
      PREPEND: "prepend"
    },
    insertAdjacentHTMLType: {
      AFTER_BEGIN: "afterbegin",
      AFTER_END: "afterend",
      BEFORE_BEGIN: "beforebegin",
      BEFORE_END: "beforeend"
    },
    selectorChangeType: {
      CLASS: "class",
      HTML: "html",
      HREF: "href",
      SRC: "src",
      STYLE: "style",
      TEXT: "text",
      HIDE: "hide",
      REMOVE: "remove"
    },
    changeApplierState: i({
      APPLIED: null,
      APPLYING: null,
      UNAPPLIED: null,
      UNDOING: null
    }),
    changeState: i({
      BLOCKED: null,
      UNAPPLIED: null,
      APPLIED: null,
      APPLYING: null,
      UNDOING: null,
      TIMED_OUT: null,
      IGNORED: null,
      ERROR: null
    })
  }
}), (function(e, t, n) {
  var i = n(2),
    r = n(198);
  t.transformVisibilityAttributesToCSS = function(e) {
    if (!e.attributes) return e;
    if (e.attributes[r.selectorChangeType.HIDE] || e.attributes[r.selectorChangeType.REMOVE]) {
      var t = i.extend({
        css: {}
      }, i.cloneDeep(e));
      return e.attributes[r.selectorChangeType.HIDE] && (t.css.visibility = "hidden", delete t.attributes[r.selectorChangeType.HIDE]), e.attributes[r.selectorChangeType.REMOVE] && (t.css.display = "none", delete t.attributes[r.selectorChangeType.REMOVE]), t
    }
    return e
  }, t.createStylesFromChange = function(e, t) {
    if (i.isEmpty(t.css)) return t.attributes.style;
    var n = "",
      r = t.attributes.style || "";
    return i.each(t.css, (function(e, t) {
      var i = new RegExp(t + "\\s?:");
      i.test(r) || (n += t + ":" + e + ";")
    })), i.isUndefined(t.attributes.style) ? (e || "") + n : n + r
  }
}), (function(e, t, n) {
  var i = n(132),
    r = n(133).DecisionError,
    a = "single_experiment",
    o = "multivariate",
    s = {
      selectExperiment: function(e, t, n) {
        if (e.experiments.length < 1) throw new r("Unable to find experiment to bucket user into");
        var a = e.experiments[0];
        if (!i.isValidExperiment(t, a)) throw new r('Audience conditions failed for experiment: "' + a.id + '".');
        return a
      }
    };
  e.exports = function(e) {
    e.registerDecider(a, s), e.registerDecider(o, s)
  }
})]);
