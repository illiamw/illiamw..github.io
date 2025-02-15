!(function () {
  "use strict";
  function e(e) {
    if (e) return e.src;
    try {
      throw new Error("Get script URL");
    } catch (e) {
      var t = e.stack;
      if (t) {
        var r = n(t),
          a = o(t),
          s = i(t);
        return r ? r[0] : a ? a[0] : s ? s[0] : null;
      }
    }
  }
  function t() {
    return document.currentScript
      ? document.currentScript
      : document.querySelector("script[jv-id]") ||
          document.querySelector("script[data-jv-id]");
  }
  function n(e) {
    return (
      e && e.match(/https?:\/\/(\S+\.com)\/(widget\.js|widget\/[A-Za-z0-9]+)/)
    );
  }
  function o(e) {
    return e && e.match(/^https?:\/\/(\S+)\/script\/widget\/([A-Za-z0-9]+)/);
  }
  function i(e) {
    return e && e.match(/https?:\/\/(\S+)\/script\/geo-widget\/([A-Za-z0-9]+)/);
  }
  function r() {
    var e = window.location && window.location.protocol;
    return -1 === ["http", "https"].indexOf(e || "") && (e = "https:"), e;
  }
  function a() {
    var n = window.jivo_config && window.jivo_config.base_url,
      o = n || e(t());
    if (!o) return null;
    var i = "main";
    return (
      ["jvs", "ru1", "sa1", "ya", "reg", "eu1"].forEach(function (e) {
        o && -1 !== o.indexOf(e) && (i = e);
      }),
      i
    );
  }
  function s(e, t, n) {
    var o;
    e.addEventListener
      ? e.addEventListener(t, n, !1)
      : e.attachEvent &&
        (e.attachEvent(
          "on" + t,
          ((o = e),
          function () {
            n.call(o, window.event);
          })
        ),
        (e = null));
  }
  function d(e) {
    try {
      s(window, "scroll", e), s(document.body, "mousemove", e);
    } catch (t) {
      e && e();
    }
  }
  function c(e, t, n) {
    if (window.removeEventListener) e.removeEventListener(t, n, !1);
    else {
      if (!window.detachEvent) return !1;
      e.detachEvent("on" + t, function () {
        n.call(e);
      });
    }
  }
  function l(e) {
    try {
      c(window, "scroll", e), c(document.body, "mousemove", e);
    } catch (e) {
      console.warn(e);
    }
  }
  function u() {
    var e = navigator.userAgent.toLowerCase();
    return (
      -1 == e.search(/google/gi) &&
      -1 == e.search(/\+http:\/\/yandex\.com\/bots/gi) &&
      -1 == e.search(/\+http:\/\/www\.cloudflare\.com\/always-online/gi) &&
      -1 == e.search(/linespider\//gi)
    );
  }
  function f(e, t, n, o, i) {
    i && i.error && (i = i.error),
      (i && i instanceof Error) || (i = {}),
      (i.stack = i.stack || "empty"),
      (i.message = "Bundle init error: " + e + " error.message: " + i.message),
      (i.columnNumber = o),
      (i.lineNumber = n),
      (i.url = t),
      window.parent.__jivoOnError(i);
  }
  var g = "loader_loaded",
    m = "no_widget_id_or_confighost",
    v = "error_code_1015",
    p = "widget_deleted",
    h = "ie_loading_blocked";
  (window.__jivoOnError = function (e) {
    if (u())
      try {
        var t = a(),
          n = "//err.jivosite.com/widget",
          o = "POST",
          i = {
            widget: "true",
            widget_version: window.jivo_version,
            level: 2,
            url:
              ((d = window.location), d.protocol + "//" + d.host + d.pathname),
            lineNumber: e && e.lineNumber,
            fileName: e && e.fileName,
            column: e && e.columnNumber,
            full_message: e && e.stack,
            short_message: e && e.message,
            shard: t,
          },
          s = new XMLHttpRequest();
        "withCredentials" in s
          ? s.open(o, r() + n, !0)
          : "undefined" != typeof XDomainRequest &&
            (s = new XDomainRequest()).open(o, n),
          s.setRequestHeader("Content-Type", "application/json"),
          s.send(JSON.stringify(i));
      } catch (e) {}
    var d;
  }),
    (function () {
      var c = 0.1;
      window.__hasStorage = !1;
      try {
        localStorage.setItem("testLocalStorage", "ok"),
          localStorage.removeItem("testLocalStorage"),
          (window.__hasStorage = !0);
      } catch (e) {}
      function w(c, w, _, b) {
        var y = c.console;
        if (
          (y || (y = { log: function () {}, error: function () {} }),
          (function () {
            if (
              c.google &&
              c.google.translate &&
              0 == c.location.href.search(/(http(s?)).+\.translate\.goog/gi)
            )
              return !1;
            return !!c.WebSocket;
          })())
        ) {
          if (void 0 === c.jivo_magic_var) {
            c.jivo_magic_var = !0;
            var S,
              j,
              C,
              E,
              I,
              L,
              T,
              N,
              O,
              A,
              H,
              k = {
                hasStorage: c.__hasStorage,
                jivoLoaderVersion: _,
                loadScript: function (e, t) {
                  var n = t || w,
                    o = n.getElementsByTagName("script")[0],
                    i = n.createElement("script");
                  he(i), (o.parentNode.insertBefore(i, o).src = e);
                },
                currentLoaderVersionCache: b,
              },
              B = navigator.userAgent.toLowerCase(),
              W = /iPhone|iPad|iPod|Android|Windows Phone/i.test(B),
              x = w.createElement("iframe"),
              R = w.createElement("div"),
              M = 0,
              q = 0,
              U = 0,
              D = [],
              J = !1,
              X = !1,
              P = ae(),
              G =
                JSON.parse(
                  '["AF","CG","CF","GW","ER","IR","IQ","KP","LR","LB","LY","ML","CU","PS","SO","SD","SY","ZW","YE"]'
                ) || null,
              z =
                JSON.parse(
                  '["127-129-12k-12i-12c-12h","12e-12i-12e-124-12c-12h","131-12e-12l-12m-124-12b-12c","124-12g-12o-129-12m-124-12g-12c-12h","127-124-12s-12c-12s","12g-124-12k-12c-12p-12n-124-12h-124","3n-12j-124-12d-12l","12g-129-12o-129-128-12k-12i-12h"]'
                ) || null;
            ye("Initialization"),
              (c.__jivoBundleOnLoad = function (e) {
                clearTimeout(I), (L = e);
                var t = (new Date().getTime() - T) / 1e3;
                t > 6 && se("loadTime", t);
                se("bundleLoaded", !0),
                  se("buildNumber", S.build_number),
                  ye("Bundle is loaded"),
                  (function () {
                    (E = w.body.lastChild),
                      R.style &&
                        ((R.style.opacity = "0"),
                        (R.style.visibility = "hidden"),
                        (R.style.width = 0),
                        (R.style.height = 0),
                        (R.style.overflow = "hidden"));
                    R.setAttribute("id", "jivo-iframe-container"),
                      R.appendChild(x),
                      E
                        ? E.parentNode.insertBefore(R, E.nextSibling)
                        : w.body.appendChild(R);
                    re();
                  })();
              }),
              (c.__jivoBundleInit = function (e) {
                (e.loaderContext = k),
                  (function () {
                    L = null;
                    var e = (function (e) {
                      if (e) {
                        var t =
                          e.querySelectorAll &&
                          e.querySelectorAll(".js-jivo-bundle");
                        return t && t.length > 0
                          ? t
                          : e.getElementsByClassName("js-jivo-bundle");
                      }
                    })(Se());
                    if (!e)
                      throw (
                        (y.error("Cannot get bundle script element"),
                        new Error("Cannot get bundle script element"))
                      );
                    for (var t = 0; t < e.length; t++)
                      e[t].parentNode && e[t].parentNode.removeChild(e[t]);
                    e = null;
                  })();
              }),
              (c.jivo_init = function () {
                M = 0;
                var e = w.createEvent("Event");
                e.initEvent("jBeforeunload", !0, !0), c.dispatchEvent(e), oe();
              }),
              (c.jivo_destroy = function () {
                M = 0;
                var e = w.createEvent("Event");
                e.initEvent("jBeforeunload", !0, !0),
                  c.dispatchEvent(e),
                  delete c.jivo_magic_var,
                  setTimeout(function () {
                    R.parentNode.removeChild(R);
                  }, 10);
              }),
              (k.getHostURL = be),
              (k.store = P),
              (k.setInStore = se);
            var V,
              F = !1,
              Z = function (e) {
                try {
                  e.blockedURI &&
                    -1 !== e.blockedURI.indexOf("jivosite") &&
                    ((F = !0),
                    w.removeEventListener("securitypolicyviolation", Z));
                } catch (e) {}
              }.bind(this);
            try {
              s(w, "securitypolicyviolation", Z);
            } catch (e) {}
            ue(),
              !(!(V = O) || (!/^\d+$/.test(V) && 10 != V.length)) ||
                ((O = null), (N = null), y.error("Widget id is not valid.")),
              Q(g, 5),
              (function () {
                (P = ae()).geoWidgetInfo.widgetId &&
                  ((O = P.geoWidgetInfo.widgetId),
                  (P = ae()),
                  (N = P.configHost));
                se("isNewCode", X), (k.store = P);
              })();
            var Y = null;
            A && (H = A.getAttribute("nonce")) && (c.jivo_cspNonce = H),
              O && N
                ? (ye("widgetId:", O, "configHost:", N), $(le()))
                : (O && N) ||
                  (Q(m, 5),
                  y.error("Failed to evaluate the widgetId or configHost"));
          }
        } else y.log("Not supported browser");
        function $(e, t) {
          if ((D.push(e), ++U > 4)) {
            ye("Config load limit is exceeded"),
              k.hasStorage && localStorage.removeItem("jv_loader_info_" + O);
            var n = new Error("Config load limit is exceeded"),
              o = "Config urls: " + D.join(";\r\n");
            try {
              n.stack = o;
            } catch (e) {
              n = new Error("Config load limit is exceeded. " + o);
            }
            c.__jivoOnError(n);
          } else if (
            (ye("Loading config from", e),
            P.deletedInfo.widgetId &&
              P.deletedInfo.widgetId === O &&
              P.deletedInfo.resolveTime &&
              parseInt(P.deletedInfo.resolveTime) >= new Date().getTime())
          )
            y.error("This widget is permanently removed");
          else {
            var i = new XMLHttpRequest();
            (i.onreadystatechange = function () {
              if (4 === i.readyState)
                if (200 === i.status) {
                  var e = Ie(we(i));
                  e
                    ? (ye("Config is loaded", e),
                      e.isDeleted
                        ? me()
                        : t
                        ? ((e.chat_mode = t.chat_mode),
                          (e.options = t.options),
                          (e.botmode = t.botmode),
                          (e.geoip = t.geoip),
                          (e.maintenance = !!t.maintenance),
                          ee(e, null))
                        : (function (e, t) {
                            var n = new XMLHttpRequest();
                            function o() {
                              return !1;
                            }
                            n.onreadystatechange = function () {
                              if (4 === n.readyState)
                                if (200 === n.status) {
                                  var o = Ie(we(n));
                                  if (!o)
                                    throw new Error("Load widget status error");
                                  var i = n.getResponseHeader("X-BotMode"),
                                    r = n.getResponseHeader("X-GeoIP"),
                                    a = o.agents && o.agents.length;
                                  ye("Status is loaded", o, i, r, a),
                                    (e.lastStatus = o),
                                    (e.botmode = "yes" === i ? "yes" : null),
                                    (e.geoip = r || ";;;"),
                                    (e.chat_mode = a ? "online" : "offline"),
                                    (e.options = o.premium ? 888 : 0),
                                    o.bots &&
                                      o.bots.length &&
                                      (e.bots = o.bots),
                                    (e.maintenance = !!o.maintenance),
                                    t(o.config_updated_ts);
                                } else if (0 !== n.status)
                                  throw (
                                    ((e.botmode = null),
                                    (e.geoip = ";;;"),
                                    (e.chat_mode = "offline"),
                                    (e.options = 0),
                                    t(null),
                                    480 == n.status &&
                                      ye(
                                        "Site is under maintenance, try again later."
                                      ),
                                    new Error(
                                      "Load widget status error: " + n.status
                                    ))
                                  );
                            };
                            var i = "/configs/development/status.json",
                              a = o()
                                ? i
                                : r() +
                                  "//" +
                                  e.comet.host +
                                  "/widget/status/" +
                                  e.site_id +
                                  "/" +
                                  e.widget_id +
                                  "?rnd=" +
                                  Math.random();
                            n.open("GET", a, !0), n.send(null);
                          })(e, function (t) {
                            ee(e, t);
                          }))
                    : ve(!0);
                } else 0 !== i.status && ve();
            }),
              i.open("GET", e, !0),
              i.send(null);
          }
        }
        function K(e) {
          var t = {
            event: e,
            widget_id: O,
            t: new Date().getTime(),
            param1: "46.10.0",
            shard: a(),
          };
          if (u())
            try {
              var n =
                r() + !0
                  ? "//telemetry.jivosite.com/w?cb=loader"
                  : "//telemetry.dev.jivosite.com:2443/w";
              for (var o in t) n += "&" + o + "=" + encodeURIComponent(t[o]);
              var i = new XMLHttpRequest();
              "withCredentials" in i
                ? i.open("GET", n, !0)
                : "undefined" != typeof XDomainRequest &&
                  (i = new XDomainRequest()).open("GET", n),
                i.send();
            } catch (e) {}
        }
        function Q(e, t) {
          Math.random() <= 0.01 * t && K(e);
        }
        function ee(e, t) {
          if ((ye("checkConfig", e.config_updated_ts, t), e.isDeleted)) me();
          else if (
            (function () {
              var e = navigator.userAgent.toLowerCase();
              return -1 !== e.indexOf("msie") || -1 !== e.indexOf("trident");
            })() &&
            e.disable_widget_on_ie11
          )
            K(h);
          else {
            if (t && e.config_updated_ts && e.config_updated_ts != t)
              return (
                ye("update configUpdatedTs in store", t),
                se("configUpdatedTs", t),
                $(le(), e)
              );
            if (e.regions && !P.isChatStarted) {
              var n = (function (e) {
                var t,
                  n,
                  o = e.regions,
                  i = ge(e.geoip);
                if (o) {
                  for (var r = Object.keys(o), a = 0; a < r.length; a++)
                    for (var s = o[r[a]], d = 0; d < s.length; d++)
                      if (1 != s.length || "default" !== s[d]) {
                        var c = ge(s[d]);
                        if (i.country === c.country) {
                          if (i.region === c.region)
                            return fe(r[a], s[d], e.geoip);
                          n || c.region || (n = fe(r[a], s[d], e.geoip));
                        }
                      } else t = r[a];
                  if (n) return n;
                  if (t) return fe(t, "default", e.geoip);
                }
              })(e);
              if (n.widgetId !== O)
                return (
                  ye("Wrong geo-widget widgetId", O),
                  se("geoWidgetInfo", n),
                  (O = n.widgetId),
                  void $(le())
                );
            }
            if (
              (Y = e.ab_segment) &&
              Y.name &&
              Y.host &&
              Y.staticHost &&
              1 !== e.site_id
            )
              if (
                (ye("AB-testing segmentation is enabled in config"),
                (function (e, t) {
                  var n = P.abTesting,
                    o = !1;
                  o =
                    n && n.name === e.name
                      ? n.match
                      : (function (e, t) {
                          if (
                            (ye(
                              'Check for criteria match of test "' +
                                e.name +
                                '"'
                            ),
                            e.device)
                          ) {
                            if (
                              !(function (e) {
                                if ("desktop" === e) return Ce() && !Ee();
                                if ("mobile" === e) return Ee();
                                if ("all" === e) return Ce() || Ee();
                                return !1;
                              })(e.device)
                            )
                              return (
                                ye(
                                  'Segment "' +
                                    e.name +
                                    '" is NOT matched. Criteria: device'
                                ),
                                !1
                              );
                          }
                          if (e.locale) {
                            if (!(e.locale === t.locale))
                              return (
                                ye(
                                  'Segment "' +
                                    e.name +
                                    '" is NOT matched. Criteria: locale'
                                ),
                                !1
                              );
                          }
                          if (e.percentage) {
                            if (
                              !((n = e.percentage), Math.random() <= 0.01 * n)
                            )
                              return (
                                ye(
                                  'Segment "' +
                                    e.name +
                                    '" is NOT matched. Criteria: percentage'
                                ),
                                !1
                              );
                          }
                          var n;
                          return ye('Segment "' + e.name + '" is matched!'), !0;
                        })(e, t);
                  return se("abTesting", { name: e.name, match: o }), o;
                })(Y, e))
              ) {
                ye("Ab-testing segment match! Segment:", Y.name);
                var o = "//" + Y.host;
                ye(
                  'Setting new base_url. Was: "' +
                    e.base_url +
                    '". New: "' +
                    o +
                    '".'
                ),
                  (e.base_url = o),
                  ye(
                    'Setting new static_host. Was: "' +
                      e.static_host +
                      '". New: "' +
                      Y.staticHost +
                      '".'
                  ),
                  (e.static_host = Y.staticHost);
              } else ye("Ab-testing segment is NOT matched");
            else
              se("abTesting", null),
                ye("AB-testing segmentation is NOT enabled in config"),
                se("configHost", N);
            !(function (e) {
              if (
                (se("log", !!e.logs),
                (c.jivo_config = S = e),
                (function () {
                  if (S.host_blacklist)
                    for (
                      var e = S.host_blacklist.split(","), t = 0;
                      t < e.length;
                      t++
                    )
                      if (c.location.host.indexOf(e[t].replace(" ", "")) >= 0)
                        return !0;
                  return !1;
                })())
              )
                throw (
                  (ye("Host is blacklisted", c.location.host),
                  new Error(
                    "Placing widget is forbidden on " + c.top.location.host
                  ))
                );
              if (((t = S.geoip.split(";")[0]), G.indexOf(t) >= 0))
                return y.log("[Jivo]: Service unavailable for country");
              if (
                !e.disable_stop_words &&
                (function () {
                  var e = !1,
                    t =
                      ((s = z),
                      s.map(function (e) {
                        return e
                          .split("-")
                          .map(function (e) {
                            return String.fromCharCode(parseInt(e, 32) - 20);
                          })
                          .join("");
                      })),
                    n = w.querySelector('meta[name="description"]'),
                    o = w.querySelector('meta[name="keywords"]'),
                    i = w.title,
                    r = n && n.content ? n.content : "",
                    a = o && o.content ? o.content : "";
                  var s;
                  (_e(i, t) || _e(r, t) || _e(a, t)) && (e = !0);
                  return e;
                })()
              )
                return K(v), void ye("Init error, code 1015.");
              if (W && S.disable_mobile)
                return void ye("Mobile widget is disabled");
              var t;
              0;
              S.static_host &&
                (~S.static_host.search(/\/\/cdn(-\w+)?.jivosite.com(\/\w)?/) ||
                  ~S.static_host.search(
                    /\/\/code(-\w+)?.jivosite.com(\/\w)?/
                  )) &&
                (J = !0);
              ye("isCdnProvider: ", J),
                "complete" == w.readyState
                  ? te()
                  : P.bundleLoaded && P.buildNumber == S.build_number
                  ? "interactive" == w.readyState
                    ? te()
                    : s(c, "DOMContentLoaded", te)
                  : (se("bundleLoaded", !1), s(c, "load", te));
            })(e);
          }
        }
        function te() {
          ye("Widget initialization"),
            (function () {
              ye("Iframe initialization"),
                (x.src = "javascript:void(0)"),
                (x.role = "presentation"),
                (x.allow = "autoplay"),
                (x.title = "Jivochat"),
                x.setAttribute("name", "jivo_container"),
                x.setAttribute("id", "jivo_container"),
                x.setAttribute("frameborder", "no"),
                H && x.setAttribute("nonce", H);
              c.atob && "complete" !== w.readyState ? s(c, "load", oe) : oe();
              s(c, "message", function (e) {
                if (e && e.data && "object" == typeof e.data) {
                  var t = e.data;
                  "in_node_webkit" == t.name &&
                    (c.jivo_cobrowse = { source: e.source, origin: e.origin }),
                    ("iframe_url_changed" != t.name &&
                      "iframe_url_changed" != t) ||
                      re();
                } else S && 1 === S.logs && y && y.log && y.log("Error receive postMessage, window message event is empty.");
              });
            })();
        }
        function ne() {
          var e = be();
          ye("loadBundleAfterWait", e, k), l(ne), ie(e);
        }
        function oe() {
          var e = be();
          if (!k.store.isChatStarted && S.enable_bundle_wait) {
            ye("addWaitActions");
            try {
              d(ne),
                setTimeout(function () {
                  ye("5s load", k.store), c.jivo_api || ne();
                }, 5e3);
            } catch (t) {
              ie(e);
            }
          } else ye("startLoadBundle", e), ie(e);
        }
        function ie(e) {
          ye("Insertion of bundle code from", e);
          var t = Se(),
            n = w.createElement("script"),
            o = (function (e) {
              var t = S.bundle_folder ? S.bundle_folder : "";
              return (
                e + t + "/js/bundle_" + S.locale + ".js?rand=" + S.build_number
              );
            })(e);
          (T = new Date().getTime()),
            he(n),
            (n.className = "js-jivo-bundle"),
            (n.src = r() + o),
            (k.bundleSrc = o),
            (n.onerror = function () {
              ye("loadBundle errorBundle", e),
                w.getElementById("jcont") &&
                  (function (e, t, n) {
                    if ((clearTimeout(I), ++q >= 5)) {
                      if (
                        (ye("Bundle load retries count is exceeded"),
                        ye("Bad csp is: " + F),
                        F)
                      )
                        return void y.error(
                          "Widget not loaded due CSP security policy."
                        );
                      var o = new Error(
                        "Bundle NOT loaded. Type: " +
                          e +
                          (t ? ". Host: " + t : "") +
                          (n ? ". Status code: " + n : "")
                      );
                      return void c.__jivoOnError(o);
                    }
                    oe();
                  })("errorBundle", e);
            }),
            t.appendChild(n);
        }
        function re() {
          if (!(M++ > 3)) {
            if (!L) return M--, oe();
            try {
              C = x.contentWindow.document;
            } catch (e) {
              (j = w.domain),
                (x.src =
                  "javascript:var d=document.open();d.domain='" +
                  j +
                  "';void(0);"),
                (C = x.contentWindow.document);
            }
            var e =
                '<meta name="google" content="notranslate"><meta http-equiv="X-UA-Compatible" content="IE=edge" />',
              t = "";
            try {
              t = "window.onerror = " + f.toString() + ";";
            } catch (e) {}
            var n = (S && !S.disable_error_reporting ? t : "") + L;
            if (
              !(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) &&
              C.head &&
              C.body
            ) {
              (C.body.class = "notranslate"), (C.head.innerHTML = e);
              var o = w.createElement("script");
              (o.type = "text/javascript"),
                H && o.setAttribute("nonce", H),
                (o.innerHTML = n),
                C.head.appendChild(o);
            } else {
              var i = '<body class="notranslate"></body>',
                r =
                  '<script type="text/javascript"' +
                  (H ? 'nonce="' + H + '"' : "") +
                  ">" +
                  n +
                  "</script>",
                a = "<head>" + e + r + "</head>";
              C.write("<!doctype HTML>" + a + i),
                (r = null),
                (i = null),
                (a = null);
            }
            C.close(), (n = null);
          }
        }
        function ae() {
          var e = {
            isChatStarted: null,
            geoWidgetInfo: {
              widgetId: null,
              clientLocation: null,
              region: null,
            },
            configHost: null,
            deletedInfo: { widgetId: null, resolveTime: null },
            abTesting: null,
            buildNumber: null,
            bundleLoaded: null,
            isNewCode: null,
            loadTime: null,
            log: null,
            configUpdatedTs: null,
          };
          if (k.hasStorage && (localStorage.removeItem("jv_loader_info"), O)) {
            var t = Ie(localStorage.getItem("jv_loader_info_" + O));
            t && de(t, e);
          }
          return e;
        }
        function se(e, t) {
          if (((P[e] = t), k.hasStorage && O)) {
            var n = {};
            de(P, n),
              localStorage.setItem(
                "jv_loader_info_" + O,
                ((o = n),
                c.MooTools && void 0 === JSON.stringify
                  ? JSON.encode(o)
                  : JSON.stringify(o))
              );
          }
          var o;
        }
        function de(e, t) {
          Object.keys(e).forEach(function (n) {
            (function (e) {
              if (ce(e)) return !0;
              if ("object" == typeof e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++)
                  if (!ce(e[t[n]])) return !1;
                return !0;
              }
            })(e[n]) || (t[n] = e[n]);
          });
        }
        function ce(e) {
          return null === e && "object" == typeof e;
        }
        function le() {
          var e = "";
          return (
            ye("getConfigUrl", P.configUpdatedTs),
            P.configUpdatedTs && (e = "?v=" + P.configUpdatedTs),
            r() + N + "/script/widget/config/" + O + e
          );
        }
        function ue() {
          var r = e((A = t()));
          if (r && r.match(/&lt;/)) ye("Invalid codeHost", r);
          else {
            var a,
              s = n(r),
              d = o(r),
              c = i(r);
            N ||
              (s
                ? ((N = "//" + s[1]), (X = !0))
                : d
                ? (N = "//" + d[1])
                : c && (N = "//" + c[1])),
              O ||
                (d && d[2]
                  ? ((O = d[2]), (X = !1))
                  : c && c[2]
                  ? ((O = c[2]), (X = !1))
                  : ((X = !0),
                    A &&
                      (O =
                        A.getAttribute("jv-id") ||
                        A.getAttribute("data-jv-id")),
                    O ||
                      ((a =
                        r && r.match(/https?:\/\/\S+\/widget\/([A-Za-z0-9]+)/)),
                      (O = a ? a[1] : null)))),
              ye("getWidgetIdAndConfigHost", O, N);
          }
        }
        function fe(e, t, n) {
          return { widgetId: e, region: t, clientLocation: n };
        }
        function ge(e) {
          if ("string" == typeof e && "" !== e) {
            var t = e.split(";");
            return { country: t[0], region: t[1], city: t[2] };
          }
        }
        function me() {
          ye("Widget was removed", O),
            se("configHost", null),
            P.geoWidgetInfo.widgetId || P.isChatStarted
              ? (se("geoWidgetInfo", fe(null, null, null)),
                se("isChatStarted", null),
                pe())
              : (se("deletedInfo", {
                  widgetId: O,
                  resolveTime: (new Date().getTime() + 6048e5).toString(),
                }),
                y.error("Widget " + O + " is permanently removed. Host: " + N),
                K(p));
        }
        function ve(e) {
          ye("Config loading error:", e ? "parse" : "request"),
            se("geoWidgetInfo", fe(null, null, null)),
            se("isChatStarted", null),
            se("configHost", null),
            e || pe();
        }
        function pe() {
          (O = null), (N = null), ue(), $(le());
        }
        function he(e) {
          if (e)
            return (
              (e.type = "text/javascript"),
              (e.async = !0),
              (e.charset = "UTF-8"),
              H && e.setAttribute("nonce", H),
              e
            );
        }
        function we(e) {
          return e.responseType && "text" !== e.responseType
            ? "document" === e.responseType
              ? e.responseXML
              : e.response
            : e.responseText;
        }
        function _e(e, t) {
          for (var n = !1, o = 0; o < t.length; o++) {
            var i = t[o].toLowerCase(),
              r = new RegExp("([, .]|^)" + i + "([, .]|$)", "gi");
            if (e.toLowerCase().search(r) > -1) {
              n = !0;
              break;
            }
          }
          return n;
        }
        function be() {
          return J ? S.static_host : S.base_url;
        }
        function ye() {
          if (P.log) {
            var e = Array.prototype.slice.call(arguments || []);
            e.unshift("Loader:"), y.log.apply(y, e);
          }
        }
        function Se() {
          var e = w.head || w.getElementsByTagName("head")[0];
          if (!e)
            throw (
              (y.error("Cannot get document head element"),
              new Error("Cannot get document head element"))
            );
          return e;
        }
        function je(e) {
          return -1 !== B.indexOf(e);
        }
        function Ce() {
          return (
            je("chrome") && !je("opr/") && "Google Inc." === c.navigator.vendor
          );
        }
        function Ee() {
          return !je("windows") && je("android");
        }
        function Ie(e) {
          try {
            return c.MooTools && void 0 === JSON.parse
              ? JSON.decode(e)
              : JSON.parse(e);
          } catch (e) {
            return (
              (e.message = "Config parse error: " + O + "\n\n" + e.message),
              c.__jivoOnError(e),
              null
            );
          }
        }
      }
      var _ = w,
        b = null;
      if (window.__hasStorage) {
        try {
          b = JSON.parse(localStorage.getItem("__jivoLoader"));
        } catch (e) {
          jivoLog("Loader cache parse error.");
        }
        b &&
          b.version > c &&
          (_ = new Function(
            "window",
            "document",
            "broswerCacheLoaderVersion",
            "currentLoaderVersionCache",
            "(" +
              b.code +
              ")(window, document, broswerCacheLoaderVersion, currentLoaderVersionCache)"
          ));
      }
      try {
        _(window, document, c, b ? b.version : c);
      } catch (e) {
        (e.message = e.message ? "Loader error. " + e.message : "Loader error"),
          window.__jivoOnError(e),
          delete window.jivo_magic_var,
          (_ = w)(window, document, c, c);
      }
    })();
})();
