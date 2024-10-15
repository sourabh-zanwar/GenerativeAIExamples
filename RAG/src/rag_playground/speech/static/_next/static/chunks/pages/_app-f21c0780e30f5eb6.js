(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    4184: function (e, t) {
      var r;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var a = typeof r;
              if ("string" === a || "number" === a) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var o = i.apply(null, r);
                  o && e.push(o);
                }
              } else if ("object" === a) {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes("[native code]")
                ) {
                  e.push(r.toString());
                  continue;
                }
                for (var l in r) n.call(r, l) && r[l] && e.push(l);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 !==
              (r = function () {
                return i;
              }.apply(t, [])) && (e.exports = r);
      })();
    },
    8875: function (e, t, r) {
      var n, i, a;
      (a = {
        canUseDOM: (i = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        )),
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners:
          i && !!(window.addEventListener || window.attachEvent),
        canUseViewport: i && !!window.screen,
      }),
        void 0 !==
          (n = function () {
            return a;
          }.call(t, r, t, e)) && (e.exports = n);
    },
    2693: function () {
      (() => {
        "use strict";
        var e = {
            701: (e) => {
              let t = 0;
              e.exports = { incr: () => ++t, decr: () => --t, curr: () => t };
            },
            941: (e) => {
              e.exports = (e, t, r = "") => {
                let n = /url\(['"]?#([\w:.-]+)['"]?\)/g,
                  i = /#([\w:.-]+)/g;
                return (
                  t.match(n) &&
                    (t = t.replace(n, function (t, r) {
                      return e[r] ? `url(#${e[r]})` : t;
                    })),
                  ["href", "xlink:href"].includes(r) &&
                    t.match(i) &&
                    (t = t.replace(i, function (t, r) {
                      return e[r] ? `#${e[r]}` : t;
                    })),
                  t
                );
              };
            },
            905: (e) => {
              e.exports = (e, t, r) => {
                let n = RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|s*{)", "g");
                return e.replace(n, function (e, n, i) {
                  if (
                    n.match(
                      /^\s*(@media|@.*keyframes|to|from|@font-face|1?[0-9]?[0-9])/
                    )
                  )
                    return n + i;
                  let a = n.match(/#(\w+)/);
                  return (
                    a && r[a[1]] && (n = n.replace(a[0], `#${r[a[1]]}`)),
                    (n = n.replace(/^(\s*)/, "$1" + t + " ")) + i
                  );
                });
              };
            },
            678: (e, t, r) => {
              let n;
              function i(e) {
                return new Promise((t, r) => {
                  (e.oncomplete = e.onsuccess = () => t(e.result)),
                    (e.onabort = e.onerror = () => r(e.error));
                });
              }
              function a(e, t) {
                let r = indexedDB.open(e);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                let n = i(r);
                return (e, r) =>
                  n.then((n) => r(n.transaction(t, e).objectStore(t)));
              }
              function o() {
                return n || (n = a("keyval-store", "keyval")), n;
              }
              function l(e, t = o()) {
                return t("readonly", (t) => i(t.get(e)));
              }
              function c(e, t, r = o()) {
                return r("readwrite", (r) => (r.put(t, e), i(r.transaction)));
              }
              function s(e, t = o()) {
                return t(
                  "readwrite",
                  (t) => (e.forEach((e) => t.put(e[1], e[0])), i(t.transaction))
                );
              }
              function d(e, t = o()) {
                return t("readonly", (t) =>
                  Promise.all(e.map((e) => i(t.get(e))))
                );
              }
              function f(e, t, r = o()) {
                return r(
                  "readwrite",
                  (r) =>
                    new Promise((n, a) => {
                      r.get(e).onsuccess = function () {
                        try {
                          r.put(t(this.result), e), n(i(r.transaction));
                        } catch (e) {
                          a(e);
                        }
                      };
                    })
                );
              }
              function u(e, t = o()) {
                return t("readwrite", (t) => (t.delete(e), i(t.transaction)));
              }
              function g(e, t = o()) {
                return t(
                  "readwrite",
                  (t) => (e.forEach((e) => t.delete(e)), i(t.transaction))
                );
              }
              function p(e = o()) {
                return e("readwrite", (e) => (e.clear(), i(e.transaction)));
              }
              function v(e, t) {
                return (
                  (e.openCursor().onsuccess = function () {
                    this.result && (t(this.result), this.result.continue());
                  }),
                  i(e.transaction)
                );
              }
              function m(e = o()) {
                return e("readonly", (e) => {
                  if (e.getAllKeys) return i(e.getAllKeys());
                  let t = [];
                  return v(e, (e) => t.push(e.key)).then(() => t);
                });
              }
              function h(e = o()) {
                return e("readonly", (e) => {
                  if (e.getAll) return i(e.getAll());
                  let t = [];
                  return v(e, (e) => t.push(e.value)).then(() => t);
                });
              }
              function y(e = o()) {
                return e("readonly", (t) => {
                  if (t.getAll && t.getAllKeys)
                    return Promise.all([i(t.getAllKeys()), i(t.getAll())]).then(
                      ([e, t]) => e.map((e, r) => [e, t[r]])
                    );
                  let r = [];
                  return e("readonly", (e) =>
                    v(e, (e) => r.push([e.key, e.value])).then(() => r)
                  );
                });
              }
              r.r(t),
                r.d(t, {
                  clear: () => p,
                  createStore: () => a,
                  del: () => u,
                  delMany: () => g,
                  entries: () => y,
                  get: () => l,
                  getMany: () => d,
                  keys: () => m,
                  promisifyRequest: () => i,
                  set: () => c,
                  setMany: () => s,
                  update: () => f,
                  values: () => h,
                });
            },
          },
          t = {};
        function r(n) {
          var i = t[n];
          if (void 0 !== i) return i.exports;
          var a = (t[n] = { exports: {} });
          return e[n](a, a.exports, r), a.exports;
        }
        (r.d = (e, t) => {
          for (var n in t)
            r.o(t, n) &&
              !r.o(e, n) &&
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
          (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (r.r = (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (() => {
            let e;
            let { get: t, set: n, del: i, entries: a } = r(678),
              o = r(905),
              l = r(941),
              c = r(701),
              s = [],
              d = {},
              f = (e, t, r) => {
                let {
                    enableJs: n,
                    disableUniqueIds: i,
                    disableCssScoping: a,
                  } = t,
                  f = new DOMParser().parseFromString(r, "text/html"),
                  u = f.querySelector("svg"),
                  g = (() => {
                    if (s.length) return s;
                    for (let e in document.head)
                      e.startsWith("on") && s.push(e);
                    return s;
                  })(),
                  p = d[e.getAttribute("data-id")] || new Set(),
                  v = e.getAttribute("data-id") || `svg-loader_${c.incr()}`,
                  m = {};
                i ||
                  Array.from(f.querySelectorAll("[id]")).forEach((e) => {
                    let t = e.getAttribute("id"),
                      r = `${t}_${c.incr()}`;
                    e.setAttribute("id", r), (m[t] = r);
                  }),
                  Array.from(f.querySelectorAll("*")).forEach((t) => {
                    if ("script" === t.tagName) {
                      if ((t.remove(), !n)) return;
                      {
                        let r = document.createElement("script");
                        r.appendChild(t.childNodes[0]), e.appendChild(r);
                      }
                    }
                    let r = [];
                    for (let e = 0; e < t.attributes.length; e++) {
                      let { name: i, value: a } = t.attributes[e],
                        o = l(m, a, i);
                      a !== o && t.setAttribute(i, o),
                        !g.includes(i.toLowerCase()) || n
                          ? ["href", "xlink:href"].includes(i) &&
                            a.startsWith("javascript") &&
                            !n &&
                            r.push(i)
                          : r.push(i);
                    }
                    if (
                      (r.forEach((e) => t.removeAttribute(e)),
                      "style" === t.tagName && !a)
                    ) {
                      let e = o(t.innerHTML, `[data-id="${v}"]`, m);
                      (e = l(m, e)) !== t.innerHTML && (t.innerHTML = e);
                    }
                  });
                for (let t = 0; t < u.attributes.length; t++) {
                  let { name: r, value: n } = u.attributes[t];
                  (e.getAttribute(r) && !p.has(r)) ||
                    (p.add(r), e.setAttribute(r, n));
                }
                (d[v] = p),
                  e.setAttribute("data-id", v),
                  (e.innerHTML = u.innerHTML);
                let h = new CustomEvent("iconload", { bubbles: !0 });
                if ((e.dispatchEvent(h), e.getAttribute("oniconload"))) {
                  e.setAttribute("onauxclick", e.getAttribute("oniconload"));
                  let t = new CustomEvent("auxclick", {
                    bubbles: !1,
                    view: window,
                  });
                  e.dispatchEvent(t), e.removeAttribute("onauxclick");
                }
              },
              u = {},
              g = {},
              p = async (e) => {
                let r = e.getAttribute("data-src"),
                  a = e.getAttribute("data-cache"),
                  o = "enabled" === e.getAttribute("data-js"),
                  l = "disabled" === e.getAttribute("data-unique-ids"),
                  c = "disabled" === e.getAttribute("data-css-scoping"),
                  s = await (async (e) => {
                    let r;
                    try {
                      r = await t(`loader_${e}`);
                    } catch (e) {}
                    if (!r)
                      try {
                        r = localStorage.getItem(`loader_${e}`);
                      } catch (e) {}
                    if (r)
                      return (
                        (r = JSON.parse(r)),
                        Date.now() < r.expiry ? r.data : void i(`loader_${e}`)
                      );
                  })(r),
                  d = "disabled" !== a,
                  v = f.bind(self, e, {
                    enableJs: o,
                    disableUniqueIds: l,
                    disableCssScoping: c,
                  });
                if (g[r] || (d && s)) {
                  let e = g[r] || s;
                  v(e);
                } else {
                  if (u[r]) return void setTimeout(() => p(e), 20);
                  (u[r] = !0),
                    fetch(r)
                      .then((e) => {
                        if (!e.ok)
                          throw Error(
                            `Request for '${r}' returned ${e.status} (${e.statusText})`
                          );
                        return e.text();
                      })
                      .then((e) => {
                        let t = e.toLowerCase().trim();
                        if (!t.startsWith("<svg") && !t.startsWith("<?xml"))
                          throw Error(
                            `Resource '${r}' returned an invalid SVG file`
                          );
                        d &&
                          (async (e, t, r) => {
                            let i = parseInt(r, 10),
                              a = JSON.stringify({
                                data: t,
                                expiry:
                                  Date.now() + (Number.isNaN(i) ? 2592e6 : i),
                              });
                            try {
                              await n(`loader_${e}`, a);
                            } catch (t) {
                              try {
                                localStorage.setItem(`loader_${e}`, a);
                              } catch (e) {
                                console.warn("Failed to set cache: ", e);
                              }
                            }
                          })(r, e, a),
                          (g[r] = e),
                          v(e);
                      })
                      .catch((e) => {
                        console.error(e);
                      })
                      .finally(() => {
                        delete u[r];
                      });
                }
              };
            globalThis.IntersectionObserver &&
              (e = new IntersectionObserver(
                (t) => {
                  t.forEach((t) => {
                    t.isIntersecting && (p(t.target), e.unobserve(t.target));
                  });
                },
                { rootMargin: "1200px" }
              ));
            let v = [];
            function m() {
              Array.from(
                document.querySelectorAll("svg[data-src]:not([data-id])")
              ).forEach((t) => {
                -1 === v.indexOf(t) &&
                  (v.push(t),
                  "lazy" === t.getAttribute("data-loading")
                    ? e.observe(t)
                    : p(t));
              });
            }
            let h = !1;
            if (globalThis.addEventListener) {
              let e = setInterval(() => {
                m();
              }, 100);
              function y() {
                clearInterval(e),
                  m(),
                  h ||
                    ((h = !0),
                    new MutationObserver((e) => {
                      e.some((e) =>
                        Array.from(e.addedNodes).some(
                          (e) =>
                            e.nodeType === Node.ELEMENT_NODE &&
                            ((e.getAttribute("data-src") &&
                              !e.getAttribute("data-id")) ||
                              e.querySelector("svg[data-src]:not([data-id])"))
                        )
                      ) && m(),
                        e.forEach((e) => {
                          "attributes" === e.type && p(e.target);
                        });
                    }).observe(document.documentElement, {
                      attributeFilter: ["data-src"],
                      attributes: !0,
                      childList: !0,
                      subtree: !0,
                    }));
              }
              "interactive" === document.readyState
                ? y()
                : globalThis.addEventListener("DOMContentLoaded", () => {
                    y();
                  });
            }
            (globalThis.SVGLoader = {}),
              (globalThis.SVGLoader.destroyCache = async () => {
                try {
                  let e = await a();
                  for (let t of e)
                    t[0].startsWith("loader_") && (await i(t[0]));
                } catch (e) {}
                Object.keys(localStorage).forEach((e) => {
                  e.startsWith("loader_") && localStorage.removeItem(e);
                });
              });
          })();
      })();
    },
    6840: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(8738);
        },
      ]);
    },
    3991: function (e, t) {
      "use strict";
      var r, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          PrefetchKind: function () {
            return r;
          },
          ACTION_REFRESH: function () {
            return i;
          },
          ACTION_NAVIGATE: function () {
            return a;
          },
          ACTION_RESTORE: function () {
            return o;
          },
          ACTION_SERVER_PATCH: function () {
            return l;
          },
          ACTION_PREFETCH: function () {
            return c;
          },
          ACTION_FAST_REFRESH: function () {
            return s;
          },
          ACTION_SERVER_ACTION: function () {
            return d;
          },
        });
      let i = "refresh",
        a = "navigate",
        o = "restore",
        l = "server-patch",
        c = "prefetch",
        s = "fast-refresh",
        d = "server-action";
      ((n = r || (r = {})).AUTO = "auto"),
        (n.FULL = "full"),
        (n.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1516: function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(2387),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5569: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return S;
          },
        });
      let n = r(8754),
        i = n._(r(7294)),
        a = r(4532),
        o = r(3353),
        l = r(1410),
        c = r(9064),
        s = r(370),
        d = r(9955),
        f = r(4224),
        u = r(508),
        g = r(1516),
        p = r(4266),
        v = r(3991),
        m = new Set();
      function h(e, t, r, n, i, a) {
        if (!a && !(0, o.isLocalURL)(t)) return;
        if (!n.bypassPrefetchedCheck) {
          let i =
              void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0,
            a = t + "%" + r + "%" + i;
          if (m.has(a)) return;
          m.add(a);
        }
        let l = a ? e.prefetch(t, i) : e.prefetch(t, r, n);
        Promise.resolve(l).catch((e) => {});
      }
      function y(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let b = i.default.forwardRef(function (e, t) {
          let r, n;
          let {
            href: l,
            as: m,
            children: b,
            prefetch: S = null,
            passHref: B,
            replace: x,
            shallow: F,
            scroll: A,
            locale: w,
            onClick: O,
            onMouseEnter: k,
            onTouchStart: D,
            legacyBehavior: H = !1,
            ...j
          } = e;
          (r = b),
            H &&
              ("string" == typeof r || "number" == typeof r) &&
              (r = i.default.createElement("a", null, r));
          let C = i.default.useContext(d.RouterContext),
            E = i.default.useContext(f.AppRouterContext),
            P = null != C ? C : E,
            N = !C,
            I = !1 !== S,
            M = null === S ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
            { href: z, as: T } = i.default.useMemo(() => {
              if (!C) {
                let e = y(l);
                return { href: e, as: m ? y(m) : e };
              }
              let [e, t] = (0, a.resolveHref)(C, l, !0);
              return { href: e, as: m ? (0, a.resolveHref)(C, m) : t || e };
            }, [C, l, m]),
            L = i.default.useRef(z),
            W = i.default.useRef(T);
          H && (n = i.default.Children.only(r));
          let R = H ? n && "object" == typeof n && n.ref : t,
            [$, V, G] = (0, u.useIntersection)({ rootMargin: "200px" }),
            _ = i.default.useCallback(
              (e) => {
                (W.current !== T || L.current !== z) &&
                  (G(), (W.current = T), (L.current = z)),
                  $(e),
                  R &&
                    ("function" == typeof R
                      ? R(e)
                      : "object" == typeof R && (R.current = e));
              },
              [T, R, z, G, $]
            );
          i.default.useEffect(() => {
            P && V && I && h(P, z, T, { locale: w }, { kind: M }, N);
          }, [T, z, V, w, I, null == C ? void 0 : C.locale, P, N, M]);
          let U = {
            ref: _,
            onClick(e) {
              H || "function" != typeof O || O(e),
                H &&
                  n.props &&
                  "function" == typeof n.props.onClick &&
                  n.props.onClick(e),
                P &&
                  !e.defaultPrevented &&
                  (function (e, t, r, n, a, l, c, s, d, f) {
                    let { nodeName: u } = e.currentTarget,
                      g = "A" === u.toUpperCase();
                    if (
                      g &&
                      ((function (e) {
                        let t = e.currentTarget,
                          r = t.getAttribute("target");
                        return (
                          (r && "_self" !== r) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!d && !(0, o.isLocalURL)(r)))
                    )
                      return;
                    e.preventDefault();
                    let p = () => {
                      let e = null == c || c;
                      "beforePopState" in t
                        ? t[a ? "replace" : "push"](r, n, {
                            shallow: l,
                            locale: s,
                            scroll: e,
                          })
                        : t[a ? "replace" : "push"](n || r, {
                            forceOptimisticNavigation: !f,
                            scroll: e,
                          });
                    };
                    d ? i.default.startTransition(p) : p();
                  })(e, P, z, T, x, F, A, w, N, I);
            },
            onMouseEnter(e) {
              H || "function" != typeof k || k(e),
                H &&
                  n.props &&
                  "function" == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(e),
                P &&
                  (I || !N) &&
                  h(
                    P,
                    z,
                    T,
                    { locale: w, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: M },
                    N
                  );
            },
            onTouchStart(e) {
              H || "function" != typeof D || D(e),
                H &&
                  n.props &&
                  "function" == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(e),
                P &&
                  (I || !N) &&
                  h(
                    P,
                    z,
                    T,
                    { locale: w, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: M },
                    N
                  );
            },
          };
          if ((0, c.isAbsoluteUrl)(T)) U.href = T;
          else if (!H || B || ("a" === n.type && !("href" in n.props))) {
            let e = void 0 !== w ? w : null == C ? void 0 : C.locale,
              t =
                (null == C ? void 0 : C.isLocaleDomain) &&
                (0, g.getDomainLocale)(
                  T,
                  e,
                  null == C ? void 0 : C.locales,
                  null == C ? void 0 : C.domainLocales
                );
            U.href =
              t ||
              (0, p.addBasePath)(
                (0, s.addLocale)(T, e, null == C ? void 0 : C.defaultLocale)
              );
          }
          return H
            ? i.default.cloneElement(n, U)
            : i.default.createElement("a", { ...j, ...U }, r);
        }),
        S = b;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    508: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let n = r(7294),
        i = r(29),
        a = "function" == typeof IntersectionObserver,
        o = new Map(),
        l = [];
      function c(e) {
        let { rootRef: t, rootMargin: r, disabled: c } = e,
          s = c || !a,
          [d, f] = (0, n.useState)(!1),
          u = (0, n.useRef)(null),
          g = (0, n.useCallback)((e) => {
            u.current = e;
          }, []);
        (0, n.useEffect)(() => {
          if (a) {
            if (s || d) return;
            let e = u.current;
            if (e && e.tagName) {
              let n = (function (e, t, r) {
                let {
                  id: n,
                  observer: i,
                  elements: a,
                } = (function (e) {
                  let t;
                  let r = { root: e.root || null, margin: e.rootMargin || "" },
                    n = l.find(
                      (e) => e.root === r.root && e.margin === r.margin
                    );
                  if (n && (t = o.get(n))) return t;
                  let i = new Map(),
                    a = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = i.get(e.target),
                          r = e.isIntersecting || e.intersectionRatio > 0;
                        t && r && t(r);
                      });
                    }, e);
                  return (
                    (t = { id: r, observer: a, elements: i }),
                    l.push(r),
                    o.set(r, t),
                    t
                  );
                })(r);
                return (
                  a.set(e, t),
                  i.observe(e),
                  function () {
                    if ((a.delete(e), i.unobserve(e), 0 === a.size)) {
                      i.disconnect(), o.delete(n);
                      let e = l.findIndex(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                      e > -1 && l.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && f(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: r,
              });
              return n;
            }
          } else if (!d) {
            let e = (0, i.requestIdleCallback)(() => f(!0));
            return () => (0, i.cancelIdleCallback)(e);
          }
        }, [s, r, t, d, u.current]);
        let p = (0, n.useCallback)(() => {
          f(!1);
        }, []);
        return [g, d, p];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8738: function (e, t, r) {
      "use strict";
      let n, i;
      r.r(t),
        r.d(t, {
          default: function () {
            return ct;
          },
        });
      var a,
        o,
        l,
        c,
        s,
        d,
        f,
        u,
        g,
        p,
        v,
        m,
        h,
        y,
        b = r(5893);
      r(7952);
      let S = {
        brand: "#76b900",
        n000: "#ffffff",
        n050: "#f2f2f2",
        n100: "#e2e2e2",
        n200: "#d8d8d8",
        n300: "#c6c6c6",
        n400: "#8f8f8f",
        n500: "#767676",
        n600: "#5e5e5e",
        n700: "#343434",
        n800: "#292929",
        n900: "#202020",
        n950: "#121212",
        n1000: "#000000",
        g050: "#e4fabe",
        g100: "#caf087",
        g200: "#b6e95d",
        g300: "#9fd73d",
        g400: "#659f00",
        g500: "#538300",
        g600: "#4d6721",
        g700: "#253a00",
        g800: "#1d2e00",
        g900: "#172400",
        g950: "#0d1400",
        b050: "#e9f4fb",
        b100: "#cde6fa",
        b200: "#badef8",
        b300: "#9accf2",
        b400: "#3a96d9",
        b500: "#2378ca",
        b600: "#2a63ba",
        b700: "#013076",
        b800: "#00265e",
        b900: "#001e4b",
        b950: "#00112c",
        y050: "#f9f4ca",
        y100: "#f6e383",
        y200: "#f3d85d",
        y300: "#e7c32b",
        y400: "#c58420",
        y500: "#a96700",
        y600: "#924c00",
        y700: "#5a2400",
        y800: "#491c00",
        y900: "#3a1500",
        y950: "#220c00",
        r050: "#ffefed",
        r100: "#ffdad6",
        r200: "#ffceca",
        r300: "#feb3ad",
        r400: "#ec6358",
        r500: "#dc3528",
        r600: "#b6251b",
        r700: "#6c0d08",
        r800: "#570704",
        r900: "#480200",
        r950: "#2d0100",
        t050: "#e1f7f3",
        t100: "#b7eee4",
        t200: "#a0e6d9",
        t300: "#7cd7c7",
        t400: "#1fa18d",
        t500: "#008471",
        t600: "#006b5e",
        t700: "#003b35",
        t800: "#002f2b",
        t900: "#002522",
        t950: "#001514",
        p050: "#fbeefe",
        p100: "#f1dcf7",
        p200: "#ead1f3",
        p300: "#debae8",
        p400: "#b579c6",
        p500: "#a05ab4",
        p600: "#8c3ca0",
        p700: "#5a066d",
        p800: "#490457",
        p900: "#3b0047",
        p950: "#25002c",
      };
      Object.keys(S);
      let B = { nvidiaSans: "NVIDIA Sans", jetbrainsMono: "JetBrains Mono" };
      Object.keys(B);
      let x = { caps: "90%", text: "100%", heading: "125%", body: "150%" };
      Object.keys(x);
      let F = {
        xxl: "48px",
        xl: "32px",
        lg: "24px",
        ml: "20px",
        md: "16px",
        ms: "14px",
        sm: "12px",
        xs: "10px",
      };
      Object.keys(F);
      let A = { less: "-0.015rem", none: "0rem", more: "0.05rem" };
      Object.keys(A);
      let w = {
        xxl: "1600px",
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
        xs: "320px",
      };
      Object.keys(w);
      let O = {
        xxl: "64px",
        xl: "48px",
        lg: "32px",
        ml: "24px",
        md: "16px",
        ms: "12px",
        sm: "8px",
        ss: "6px",
        xs: "4px",
        xxs: "2px",
        none: "0px",
      };
      Object.keys(O);
      let k = {
        lightHigh: "0px 8px 10px 0 #00000026",
        lightMid: "0px 4px 5px 0 #0000001f",
        lightLow: "0px 2px 3px 0 #00000024",
        lightLower: "0px 1px 3px 0 #00000033",
        darkHigh: "0px 8px 10px 0 #0000004d",
        darkMid: "0px 4px 5px 0 #0000003d",
        darkLow: "0px 2px 4px 0 #00000047",
        darkLower: "0px 1px 3px 0 #00000066",
      };
      Object.keys(k);
      let D = { lg: "4px", md: "2px", sm: "1px" };
      Object.keys(D);
      let H = {
        displayBgHighest: "#000000",
        displayBgHighestHover: "#202020",
        displayBgHighestActive: "#343434",
        displayBgHigher: "#343434",
        displayBgHigherHover: "#292929",
        displayBgHigherActive: "#121212",
        displayBgHigh: "#292929",
        displayBgHighHover: "#202020",
        displayBgHighActive: "#000000",
        displayBgMid: "#202020",
        displayBgMidHover: "#343434",
        displayBgMidActive: "#5e5e5e",
        displayBgLow: "#121212",
        displayBgLowHover: "#292929",
        displayBgLowActive: "#343434",
        displayBgCanvas: "#202020",
        displayBgAccent1Hover: "#013076",
        displayBgAccent1Active: "#9accf2",
        displayBgAccent1Solid: "#9accf2",
        displayBgAccent1SolidHover: "#badef8",
        displayBgAccent1SolidActive: "#2a63ba",
        displayBgAccent1Bold: "#2a63ba",
        displayBgAccent1Disabled: "#8f8f8f",
        displayBgAccent2Hover: "#253a00",
        displayBgAccent2Active: "#9fd73d",
        displayBgAccent2Solid: "#9fd73d",
        displayBgAccent2SolidHover: "#b6e95d",
        displayBgAccent2SolidActive: "#4d6721",
        displayBgAccent2Bold: "#4d6721",
        displayBgAccent2Disabled: "#8f8f8f",
        displayBgAccent3Hover: "#5a2400",
        displayBgAccent3Active: "#e7c32b",
        displayBgAccent3Solid: "#e7c32b",
        displayBgAccent3SolidHover: "#f3d85d",
        displayBgAccent3SolidActive: "#924c00",
        displayBgAccent3Bold: "#924c00",
        displayBgAccent3Disabled: "#8f8f8f",
        displayBgAccent4Hover: "#6c0d08",
        displayBgAccent4Active: "#feb3ad",
        displayBgAccent4Solid: "#feb3ad",
        displayBgAccent4SolidHover: "#ffceca",
        displayBgAccent4SolidActive: "#b6251b",
        displayBgAccent4Bold: "#b6251b",
        displayBgAccent4Disabled: "#8f8f8f",
        displayBgAccent5Hover: "#5a066d",
        displayBgAccent5Active: "#debae8",
        displayBgAccent5Solid: "#debae8",
        displayBgAccent5SolidHover: "#ead1f3",
        displayBgAccent5SolidActive: "#8c3ca0",
        displayBgAccent5Bold: "#8c3ca0",
        displayBgAccent5Disabled: "#8f8f8f",
        displayBgAccent6Hover: "#003b35",
        displayBgAccent6Active: "#7cd7c7",
        displayBgAccent6Solid: "#7cd7c7",
        displayBgAccent6SolidHover: "#a0e6d9",
        displayBgAccent6SolidActive: "#006b5e",
        displayBgAccent6Bold: "#006b5e",
        displayBgAccent6Disabled: "#8f8f8f",
        displayBgAccent7Hover: "#e2e2e2",
        displayBgAccent7Active: "#d8d8d8",
        displayBgAccent7Solid: "#c6c6c6",
        displayBgAccent7SolidHover: "#d8d8d8",
        displayBgAccent7SolidActive: "#5e5e5e",
        displayBgAccent7Bold: "#5e5e5e",
        displayBgAccent7Disabled: "#8f8f8f",
        displayFgHighestPrimary: "#f2f2f2",
        displayFgHighestSecondary: "#c6c6c6",
        displayFgHighestDisabled: "#8f8f8f",
        displayFgHighestPlaceholder: "#767676",
        displayFgHighestStrong: "#ffffff",
        displayFgHighestSelected: "#659f00",
        displayFgHighestSelectedHover: "#9fd73d",
        displayFgHigherPrimary: "#f2f2f2",
        displayFgHigherSecondary: "#c6c6c6",
        displayFgHigherDisabled: "#8f8f8f",
        displayFgHigherPlaceholder: "#767676",
        displayFgHigherStrong: "#ffffff",
        displayFgHigherSelected: "#659f00",
        displayFgHigherSelectedHover: "#9fd73d",
        displayFgHighPrimary: "#f2f2f2",
        displayFgHighSecondary: "#c6c6c6",
        displayFgHighDisabled: "#8f8f8f",
        displayFgHighPlaceholder: "#767676",
        displayFgHighStrong: "#ffffff",
        displayFgHighSelected: "#659f00",
        displayFgHighSelectedHover: "#9fd73d",
        displayFgMidPrimary: "#f2f2f2",
        displayFgMidSecondary: "#c6c6c6",
        displayFgMidDisabled: "#8f8f8f",
        displayFgMidPlaceholder: "#767676",
        displayFgMidStrong: "#ffffff",
        displayFgMidSelected: "#659f00",
        displayFgMidSelectedHover: "#9fd73d",
        displayFgLowPrimary: "#f2f2f2",
        displayFgLowSecondary: "#c6c6c6",
        displayFgLowDisabled: "#8f8f8f",
        displayFgLowPlaceholder: "#767676",
        displayFgLowStrong: "#ffffff",
        displayFgLowSelected: "#659f00",
        displayFgLowSelectedHover: "#9fd73d",
        displayFgAccent1: "#9accf2",
        displayFgAccent1Solid: "#001e4b",
        displayFgAccent1Bold: "#e9f4fb",
        displayFgAccent1Disabled: "#8f8f8f",
        displayFgAccent2: "#9fd73d",
        displayFgAccent2Solid: "#172400",
        displayFgAccent2Bold: "#e4fabe",
        displayFgAccent2Disabled: "#8f8f8f",
        displayFgAccent3: "#e7c32b",
        displayFgAccent3Solid: "#3a1500",
        displayFgAccent3Bold: "#f9f4ca",
        displayFgAccent3Disabled: "#8f8f8f",
        displayFgAccent4: "#feb3ad",
        displayFgAccent4Solid: "#480200",
        displayFgAccent4Bold: "#ffefed",
        displayFgAccent4Disabled: "#8f8f8f",
        displayFgAccent5: "#debae8",
        displayFgAccent5Solid: "#3b0047",
        displayFgAccent5Bold: "#fbeefe",
        displayFgAccent5Disabled: "#8f8f8f",
        displayFgAccent6: "#7cd7c7",
        displayFgAccent6Solid: "#002522",
        displayFgAccent6Bold: "#e1f7f3",
        displayFgAccent6Disabled: "#8f8f8f",
        displayFgAccent7: "#e2e2e2",
        displayFgAccent7Solid: "#202020",
        displayFgAccent7Bold: "#f2f2f2",
        displayFgAccent7Disabled: "#8f8f8f",
        displayFgInverse: "#ffffff",
        displayFgSubtle: "#202020",
        displayBorderHighest: "#343434",
        displayBorderHighestHover: "#767676",
        displayBorderHighestActive: "#c6c6c6",
        displayBorderHighestDisabled: "#292929",
        displayBorderHighestBase: "#000000",
        displayBorderHighestSelected: "#659f00",
        displayBorderHighestSelectedHover: "#9fd73d",
        displayBorderHigher: "#343434",
        displayBorderHigherHover: "#767676",
        displayBorderHigherActive: "#c6c6c6",
        displayBorderHigherDisabled: "#292929",
        displayBorderHigherBase: "#343434",
        displayBorderHigherSelected: "#659f00",
        displayBorderHigherSelectedHover: "#9fd73d",
        displayBorderHigh: "#343434",
        displayBorderHighHover: "#767676",
        displayBorderHighActive: "#c6c6c6",
        displayBorderHighDisabled: "#292929",
        displayBorderHighBase: "#292929",
        displayBorderHighSelected: "#659f00",
        displayBorderHighSelectedHover: "#9fd73d",
        displayBorderMid: "#343434",
        displayBorderMidHover: "#767676",
        displayBorderMidActive: "#c6c6c6",
        displayBorderMidDisabled: "#292929",
        displayBorderMidBase: "#202020",
        displayBorderMidSelected: "#659f00",
        displayBorderMidSelectedHover: "#9fd73d",
        displayBorderLow: "#343434",
        displayBorderLowHover: "#767676",
        displayBorderLowActive: "#c6c6c6",
        displayBorderLowDisabled: "#292929",
        displayBorderLowBase: "#121212",
        displayBorderLowSelected: "#659f00",
        displayBorderLowSelectedHover: "#9fd73d",
        displayBorderAccent1: "#9accf2",
        displayBorderAccent1Disabled: "#8f8f8f",
        displayBorderAccent2: "#9fd73d",
        displayBorderAccent2Disabled: "#8f8f8f",
        displayBorderAccent3: "#e7c32b",
        displayBorderAccent3Disabled: "#8f8f8f",
        displayBorderAccent4: "#feb3ad",
        displayBorderAccent4Disabled: "#8f8f8f",
        displayBorderAccent5: "#debae8",
        displayBorderAccent5Disabled: "#8f8f8f",
        displayBorderAccent6: "#7cd7c7",
        displayBorderAccent6Disabled: "#8f8f8f",
        displayBorderAccent7: "#e2e2e2",
        displayBorderAccent7Disabled: "#8f8f8f",
        displayBorderStatic: "#5e5e5e",
        menuBgDefault: "#292929",
        menuBgHover: "#343434",
        menuBgActive: "#5e5e5e",
        menuBgComplete: "#9fd73d",
        menuBgSelected: "#202020",
        menuBgDisabled: "#343434",
        menuBgPlaceholder: "#292929",
        menuBgDanger: "#292929",
        menuBgDangerHover: "#2d0100",
        menuBgBase: "#000000",
        menuBgBaseSelected: "#000000",
        menuFgDefault: "#c6c6c6",
        menuFgHover: "#f2f2f2",
        menuFgActive: "#f2f2f2",
        menuFgComplete: "#f2f2f2",
        menuFgSelected: "#f2f2f2",
        menuFgDisabled: "#8f8f8f",
        menuFgPlaceholder: "#767676",
        menuFgDanger: "#dc3528",
        menuFgDangerHover: "#dc3528",
        menuFgPrimary: "#f2f2f2",
        menuFgHeader: "#c6c6c6",
        menuFgFooter: "#c6c6c6",
        menuBorderDefault: "#343434",
        menuBorderHover: "#767676",
        menuBorderActive: "#343434",
        menuBorderComplete: "#659f00",
        menuBorderSelected: "#659f00",
        menuBorderDisabled: "#343434",
        menuBorderPlaceholder: "#343434",
        inputBgDefault: "#202020",
        inputBgHover: "#202020",
        inputBgActive: "#343434",
        inputBgComplete: "#000000",
        inputBgDisabled: "#343434",
        inputBgError: "#343434",
        inputBgSuccess: "#000000",
        inputFgDefault: "#767676",
        inputFgHover: "#767676",
        inputFgActive: "#f2f2f2",
        inputFgComplete: "#f2f2f2",
        inputFgDisabled: "#8f8f8f",
        inputFgError: "#f2f2f2",
        inputFgErrorMessage: "#dc3528",
        inputFgSuccess: "#f2f2f2",
        inputFgSuccessMessage: "#659f00",
        inputFgLabel: "#c6c6c6",
        inputFgRequired: "#dc3528",
        inputFgIcon: "#c6c6c6",
        inputFgIconHover: "#f2f2f2",
        inputFgIconActive: "#f2f2f2",
        inputFgIconComplete: "#c6c6c6",
        inputFgIconDisabled: "#8f8f8f",
        inputFgIconError: "#dc3528",
        inputFgIconSuccess: "#659f00",
        inputBorderDefault: "#8f8f8f",
        inputBorderHover: "#d8d8d8",
        inputBorderActive: "#659f00",
        inputBorderComplete: "#8f8f8f",
        inputBorderDisabled: "#767676",
        inputBorderError: "#dc3528",
        inputBorderSuccess: "#659f00",
        actionBgDefault: "#292929",
        actionBgHover: "#121212",
        actionBgActive: "#000000",
        actionBgDisabled: "#202020",
        actionBgSelected: "#172400",
        actionBgSelectedHover: "#1d2e00",
        actionBgSelectedActive: "#253a00",
        actionBgSelectedDisabled: "#202020",
        actionBgError: "#2d0100",
        actionBgErrorHover: "#480200",
        actionBgErrorActive: "#6c0d08",
        actionBgErrorDisabled: "#202020",
        actionBgPrimary: "#659f00",
        actionBgPrimaryHover: "#538300",
        actionBgPrimaryActive: "#253a00",
        actionBgPrimaryDisabled: "#343434",
        actionBgSecondary: "#292929",
        actionBgSecondaryHover: "#121212",
        actionBgSecondaryActive: "#000000",
        actionBgSecondaryDisabled: "#292929",
        actionBgTertiaryHover: "#121212",
        actionBgTertiaryActive: "#000000",
        actionBgPrimaryDanger: "#dc3528",
        actionBgPrimaryDangerHover: "#b6251b",
        actionBgPrimaryDangerActive: "#6c0d08",
        actionBgPrimaryDangerDisabled: "#343434",
        actionBgSecondaryDanger: "#292929",
        actionBgSecondaryDangerHover: "#480200",
        actionBgSecondaryDangerActive: "#6c0d08",
        actionBgSecondaryDangerDisabled: "#292929",
        actionBgTertiaryDangerHover: "#480200",
        actionBgTertiaryDangerActive: "#6c0d08",
        actionBgBase: "#5e5e5e",
        actionBgBaseDisabled: "#343434",
        actionBgOn: "#659f00",
        actionBgOnDisabled: "#4d6721",
        actionFgDefault: "#f2f2f2",
        actionFgHover: "#f2f2f2",
        actionFgActive: "#f2f2f2",
        actionFgDisabled: "#8f8f8f",
        actionFgStrong: "#ffffff",
        actionFgSelected: "#659f00",
        actionFgSelectedHover: "#538300",
        actionFgSelectedActive: "#9fd73d",
        actionFgSelectedDisabled: "#8f8f8f",
        actionFgError: "#dc3528",
        actionFgErrorHover: "#b6251b",
        actionFgErrorActive: "#ec6358",
        actionFgErrorDisabled: "#8f8f8f",
        actionFgPrimary: "#ffffff",
        actionFgPrimaryHover: "#ffffff",
        actionFgPrimaryActive: "#ffffff",
        actionFgPrimaryDisabled: "#767676",
        actionFgSecondary: "#e2e2e2",
        actionFgSecondaryHover: "#ffffff",
        actionFgSecondaryActive: "#ffffff",
        actionFgSecondaryDisabled: "#767676",
        actionFgTertiary: "#e2e2e2",
        actionFgTertiaryHover: "#ffffff",
        actionFgTertiaryActive: "#ffffff",
        actionFgTertiaryDisabled: "#767676",
        actionFgPrimaryDanger: "#ffffff",
        actionFgPrimaryDangerHover: "#ffffff",
        actionFgPrimaryDangerActive: "#ffffff",
        actionFgPrimaryDangerDisabled: "#ffffff",
        actionFgSecondaryDanger: "#dc3528",
        actionFgSecondaryDangerHover: "#ec6358",
        actionFgSecondaryDangerActive: "#feb3ad",
        actionFgSecondaryDangerDisabled: "#767676",
        actionFgTertiaryDanger: "#dc3528",
        actionFgTertiaryDangerHover: "#ec6358",
        actionFgTertiaryDangerActive: "#feb3ad",
        actionFgTertiaryDangerDisabled: "#767676",
        actionFgInverse: "#ffffff",
        actionFgOn: "#ffffff",
        actionFgOnDisabled: "#8f8f8f",
        actionBorderDefault: "#767676",
        actionBorderHover: "#8f8f8f",
        actionBorderActive: "#d8d8d8",
        actionBorderDisabled: "#5e5e5e",
        actionBorderSelected: "#659f00",
        actionBorderSelectedHover: "#538300",
        actionBorderSelectedActive: "#9fd73d",
        actionBorderSelectedDisabled: "#343434",
        actionBorderError: "#dc3528",
        actionBorderErrorHover: "#b6251b",
        actionBorderErrorActive: "#ec6358",
        actionBorderErrorDisabled: "#343434",
        actionBorderPrimary: "#659f00",
        actionBorderPrimaryHover: "#9fd73d",
        actionBorderPrimaryActive: "#9fd73d",
        actionBorderPrimaryDisabled: "#767676",
        actionBorderSecondary: "#c6c6c6",
        actionBorderSecondaryHover: "#c6c6c6",
        actionBorderSecondaryActive: "#e2e2e2",
        actionBorderSecondaryDisabled: "#767676",
        actionBorderPrimaryDanger: "#dc3528",
        actionBorderPrimaryDangerHover: "#ec6358",
        actionBorderPrimaryDangerActive: "#ec6358",
        actionBorderPrimaryDangerDisabled: "#767676",
        actionBorderSecondaryDanger: "#dc3528",
        actionBorderSecondaryDangerHover: "#dc3528",
        actionBorderSecondaryDangerActive: "#ec6358",
        actionBorderSecondaryDangerDisabled: "#767676",
        actionBorderInverse: "#ffffff",
        actionBorderBase: "#767676",
        feedbackBgInfo: "#cde6fa",
        feedbackBgInfoSolid: "#2378ca",
        feedbackBgSuccess: "#caf087",
        feedbackBgSuccessSolid: "#659f00",
        feedbackBgCaution: "#f6e383",
        feedbackBgCautionSolid: "#e7c32b",
        feedbackBgError: "#ffdad6",
        feedbackBgErrorSolid: "#dc3528",
        feedbackBgNeutral: "#d8d8d8",
        feedbackBgProgress: "#292929",
        feedbackBgTooltip: "#343434",
        feedbackBgBase: "#343434",
        feedbackFgInfo: "#2378ca",
        feedbackFgInfoHover: "#2a63ba",
        feedbackFgInfoActive: "#013076",
        feedbackFgSuccess: "#659f00",
        feedbackFgSuccessHover: "#538300",
        feedbackFgSuccessActive: "#4d6721",
        feedbackFgCaution: "#a96700",
        feedbackFgCautionHover: "#924c00",
        feedbackFgCautionActive: "#5a2400",
        feedbackFgError: "#dc3528",
        feedbackFgErrorHover: "#b6251b",
        feedbackFgErrorActive: "#6c0d08",
        feedbackFgNeutral: "#5e5e5e",
        feedbackFgNeutralHover: "#343434",
        feedbackFgNeutralActive: "#000000",
        feedbackFgProgress: "#659f00",
        feedbackFgProgressActive: "#538300",
        feedbackFgTooltip: "#f2f2f2",
        feedbackFgPrimary: "#f2f2f2",
        feedbackFgSecondary: "#c6c6c6",
        feedbackFgInverse: "#ffffff",
        feedbackFgReverse: "#202020",
        feedbackBorderInfo: "#2378ca",
        feedbackBorderSuccess: "#659f00",
        feedbackBorderCaution: "#a96700",
        feedbackBorderError: "#dc3528",
        feedbackBorderNeutral: "#8f8f8f",
        feedbackBorderProgress: "#5e5e5e",
      };
      Object.keys(H);
      let j = {
        displayModal: "0px 8px 10px 0 #0000004d",
        displayPageHeader: "0px 2px 4px 0 #00000047",
        displayPopover: "0px 4px 5px 0 #0000003d",
        displayCarouselButton: "0px 2px 3px 0 #00000024",
        displaySidePanelRight: "-4px 0px 5px 0 #00000040",
        displaySidePanelLeft: "4px 0px 5px 0 #00000040",
        menuDropdown: "0px 4px 5px 0 #0000003d",
        menuPopout: "0px 2px 4px 0 #00000047",
        inputToggle: "0px 1px 3px 0 #00000066",
        feedbackNotification: "0px 4px 5px 0 #0000003d",
      };
      Object.keys(j);
      let C = {
        displayBgHighest: "#ffffff",
        displayBgHighestHover: "#f2f2f2",
        displayBgHighestActive: "#e2e2e2",
        displayBgHigher: "#ffffff",
        displayBgHigherHover: "#f2f2f2",
        displayBgHigherActive: "#e2e2e2",
        displayBgHigh: "#ffffff",
        displayBgHighHover: "#f2f2f2",
        displayBgHighActive: "#e2e2e2",
        displayBgMid: "#ffffff",
        displayBgMidHover: "#f2f2f2",
        displayBgMidActive: "#e2e2e2",
        displayBgLow: "#f2f2f2",
        displayBgLowHover: "#e2e2e2",
        displayBgLowActive: "#d8d8d8",
        displayBgCanvas: "#f2f2f2",
        displayBgAccent1Hover: "#e9f4fb",
        displayBgAccent1Active: "#2a63ba",
        displayBgAccent1Solid: "#e9f4fb",
        displayBgAccent1SolidHover: "#cde6fa",
        displayBgAccent1SolidActive: "#2a63ba",
        displayBgAccent1Bold: "#2a63ba",
        displayBgAccent1Disabled: "#8f8f8f",
        displayBgAccent2Hover: "#e4fabe",
        displayBgAccent2Active: "#4d6721",
        displayBgAccent2Solid: "#e4fabe",
        displayBgAccent2SolidHover: "#caf087",
        displayBgAccent2SolidActive: "#4d6721",
        displayBgAccent2Bold: "#4d6721",
        displayBgAccent2Disabled: "#8f8f8f",
        displayBgAccent3Hover: "#f9f4ca",
        displayBgAccent3Active: "#924c00",
        displayBgAccent3Solid: "#f9f4ca",
        displayBgAccent3SolidHover: "#f6e383",
        displayBgAccent3SolidActive: "#924c00",
        displayBgAccent3Bold: "#924c00",
        displayBgAccent3Disabled: "#8f8f8f",
        displayBgAccent4Hover: "#ffefed",
        displayBgAccent4Active: "#b6251b",
        displayBgAccent4Solid: "#ffefed",
        displayBgAccent4SolidHover: "#ffdad6",
        displayBgAccent4SolidActive: "#b6251b",
        displayBgAccent4Bold: "#b6251b",
        displayBgAccent4Disabled: "#8f8f8f",
        displayBgAccent5Hover: "#fbeefe",
        displayBgAccent5Active: "#8c3ca0",
        displayBgAccent5Solid: "#fbeefe",
        displayBgAccent5SolidHover: "#f1dcf7",
        displayBgAccent5SolidActive: "#8c3ca0",
        displayBgAccent5Bold: "#8c3ca0",
        displayBgAccent5Disabled: "#8f8f8f",
        displayBgAccent6Hover: "#e1f7f3",
        displayBgAccent6Active: "#006b5e",
        displayBgAccent6Solid: "#e1f7f3",
        displayBgAccent6SolidHover: "#b7eee4",
        displayBgAccent6SolidActive: "#006b5e",
        displayBgAccent6Bold: "#006b5e",
        displayBgAccent6Disabled: "#8f8f8f",
        displayBgAccent7Hover: "#e2e2e2",
        displayBgAccent7Active: "#343434",
        displayBgAccent7Solid: "#d8d8d8",
        displayBgAccent7SolidHover: "#c6c6c6",
        displayBgAccent7SolidActive: "#343434",
        displayBgAccent7Bold: "#343434",
        displayBgAccent7Disabled: "#8f8f8f",
        displayFgHighestPrimary: "#202020",
        displayFgHighestSecondary: "#5e5e5e",
        displayFgHighestDisabled: "#767676",
        displayFgHighestPlaceholder: "#8f8f8f",
        displayFgHighestStrong: "#000000",
        displayFgHighestSelected: "#659f00",
        displayFgHighestSelectedHover: "#538300",
        displayFgHigherPrimary: "#202020",
        displayFgHigherSecondary: "#5e5e5e",
        displayFgHigherDisabled: "#767676",
        displayFgHigherPlaceholder: "#8f8f8f",
        displayFgHigherStrong: "#000000",
        displayFgHigherSelected: "#659f00",
        displayFgHigherSelectedHover: "#538300",
        displayFgHighPrimary: "#202020",
        displayFgHighSecondary: "#5e5e5e",
        displayFgHighDisabled: "#767676",
        displayFgHighPlaceholder: "#8f8f8f",
        displayFgHighStrong: "#000000",
        displayFgHighSelected: "#659f00",
        displayFgHighSelectedHover: "#538300",
        displayFgMidPrimary: "#202020",
        displayFgMidSecondary: "#5e5e5e",
        displayFgMidDisabled: "#767676",
        displayFgMidPlaceholder: "#8f8f8f",
        displayFgMidStrong: "#000000",
        displayFgMidSelected: "#659f00",
        displayFgMidSelectedHover: "#538300",
        displayFgLowPrimary: "#202020",
        displayFgLowSecondary: "#5e5e5e",
        displayFgLowDisabled: "#767676",
        displayFgLowPlaceholder: "#8f8f8f",
        displayFgLowStrong: "#000000",
        displayFgLowSelected: "#659f00",
        displayFgLowSelectedHover: "#538300",
        displayFgAccent1: "#2a63ba",
        displayFgAccent1Solid: "#2a63ba",
        displayFgAccent1Bold: "#e9f4fb",
        displayFgAccent1Disabled: "#8f8f8f",
        displayFgAccent2: "#4d6721",
        displayFgAccent2Solid: "#4d6721",
        displayFgAccent2Bold: "#e4fabe",
        displayFgAccent2Disabled: "#8f8f8f",
        displayFgAccent3: "#924c00",
        displayFgAccent3Solid: "#924c00",
        displayFgAccent3Bold: "#f9f4ca",
        displayFgAccent3Disabled: "#8f8f8f",
        displayFgAccent4: "#b6251b",
        displayFgAccent4Solid: "#b6251b",
        displayFgAccent4Bold: "#ffefed",
        displayFgAccent4Disabled: "#8f8f8f",
        displayFgAccent5: "#8c3ca0",
        displayFgAccent5Solid: "#8c3ca0",
        displayFgAccent5Bold: "#fbeefe",
        displayFgAccent5Disabled: "#8f8f8f",
        displayFgAccent6: "#006b5e",
        displayFgAccent6Solid: "#006b5e",
        displayFgAccent6Bold: "#e1f7f3",
        displayFgAccent6Disabled: "#8f8f8f",
        displayFgAccent7: "#343434",
        displayFgAccent7Solid: "#343434",
        displayFgAccent7Bold: "#f2f2f2",
        displayFgAccent7Disabled: "#8f8f8f",
        displayFgInverse: "#ffffff",
        displayFgSubtle: "#f2f2f2",
        displayBorderHighest: "#d8d8d8",
        displayBorderHighestHover: "#8f8f8f",
        displayBorderHighestActive: "#5e5e5e",
        displayBorderHighestDisabled: "#e2e2e2",
        displayBorderHighestBase: "#ffffff",
        displayBorderHighestSelected: "#659f00",
        displayBorderHighestSelectedHover: "#538300",
        displayBorderHigher: "#d8d8d8",
        displayBorderHigherHover: "#8f8f8f",
        displayBorderHigherActive: "#5e5e5e",
        displayBorderHigherDisabled: "#e2e2e2",
        displayBorderHigherBase: "#ffffff",
        displayBorderHigherSelected: "#659f00",
        displayBorderHigherSelectedHover: "#538300",
        displayBorderHigh: "#d8d8d8",
        displayBorderHighHover: "#8f8f8f",
        displayBorderHighActive: "#5e5e5e",
        displayBorderHighDisabled: "#e2e2e2",
        displayBorderHighBase: "#ffffff",
        displayBorderHighSelected: "#659f00",
        displayBorderHighSelectedHover: "#538300",
        displayBorderMid: "#d8d8d8",
        displayBorderMidHover: "#8f8f8f",
        displayBorderMidActive: "#5e5e5e",
        displayBorderMidDisabled: "#e2e2e2",
        displayBorderMidBase: "#ffffff",
        displayBorderMidSelected: "#659f00",
        displayBorderMidSelectedHover: "#538300",
        displayBorderLow: "#d8d8d8",
        displayBorderLowHover: "#8f8f8f",
        displayBorderLowActive: "#5e5e5e",
        displayBorderLowDisabled: "#e2e2e2",
        displayBorderLowBase: "#f2f2f2",
        displayBorderLowSelected: "#659f00",
        displayBorderLowSelectedHover: "#538300",
        displayBorderAccent1: "#2a63ba",
        displayBorderAccent1Disabled: "#8f8f8f",
        displayBorderAccent2: "#4d6721",
        displayBorderAccent2Disabled: "#8f8f8f",
        displayBorderAccent3: "#924c00",
        displayBorderAccent3Disabled: "#8f8f8f",
        displayBorderAccent4: "#b6251b",
        displayBorderAccent4Disabled: "#8f8f8f",
        displayBorderAccent5: "#8c3ca0",
        displayBorderAccent5Disabled: "#8f8f8f",
        displayBorderAccent6: "#006b5e",
        displayBorderAccent6Disabled: "#8f8f8f",
        displayBorderAccent7: "#343434",
        displayBorderAccent7Disabled: "#8f8f8f",
        displayBorderStatic: "#c6c6c6",
        menuBgDefault: "#ffffff",
        menuBgHover: "#f2f2f2",
        menuBgActive: "#e2e2e2",
        menuBgComplete: "#9fd73d",
        menuBgSelected: "#f2f2f2",
        menuBgDisabled: "#f2f2f2",
        menuBgPlaceholder: "#ffffff",
        menuBgDanger: "#ffffff",
        menuBgDangerHover: "#ffefed",
        menuBgBase: "#ffffff",
        menuBgBaseSelected: "#ffffff",
        menuFgDefault: "#5e5e5e",
        menuFgHover: "#202020",
        menuFgActive: "#202020",
        menuFgComplete: "#202020",
        menuFgSelected: "#202020",
        menuFgDisabled: "#767676",
        menuFgPlaceholder: "#8f8f8f",
        menuFgDanger: "#dc3528",
        menuFgDangerHover: "#dc3528",
        menuFgPrimary: "#202020",
        menuFgHeader: "#5e5e5e",
        menuFgFooter: "#5e5e5e",
        menuBorderDefault: "#d8d8d8",
        menuBorderHover: "#8f8f8f",
        menuBorderActive: "#d8d8d8",
        menuBorderComplete: "#659f00",
        menuBorderSelected: "#659f00",
        menuBorderDisabled: "#d8d8d8",
        menuBorderPlaceholder: "#d8d8d8",
        inputBgDefault: "#ffffff",
        inputBgHover: "#ffffff",
        inputBgActive: "#f2f2f2",
        inputBgComplete: "#ffffff",
        inputBgDisabled: "#f2f2f2",
        inputBgError: "#f2f2f2",
        inputBgSuccess: "#ffffff",
        inputFgDefault: "#8f8f8f",
        inputFgHover: "#8f8f8f",
        inputFgActive: "#202020",
        inputFgComplete: "#202020",
        inputFgDisabled: "#767676",
        inputFgError: "#202020",
        inputFgErrorMessage: "#dc3528",
        inputFgSuccess: "#202020",
        inputFgSuccessMessage: "#659f00",
        inputFgLabel: "#5e5e5e",
        inputFgRequired: "#dc3528",
        inputFgIcon: "#5e5e5e",
        inputFgIconHover: "#202020",
        inputFgIconActive: "#202020",
        inputFgIconComplete: "#5e5e5e",
        inputFgIconDisabled: "#767676",
        inputFgIconError: "#dc3528",
        inputFgIconSuccess: "#659f00",
        inputBorderDefault: "#c6c6c6",
        inputBorderHover: "#767676",
        inputBorderActive: "#659f00",
        inputBorderComplete: "#c6c6c6",
        inputBorderDisabled: "#d8d8d8",
        inputBorderError: "#dc3528",
        inputBorderSuccess: "#659f00",
        actionBgDefault: "#ffffff",
        actionBgHover: "#e2e2e2",
        actionBgActive: "#c6c6c6",
        actionBgDisabled: "#f2f2f2",
        actionBgSelected: "#e4fabe",
        actionBgSelectedHover: "#caf087",
        actionBgSelectedActive: "#9fd73d",
        actionBgSelectedDisabled: "#f2f2f2",
        actionBgError: "#ffefed",
        actionBgErrorHover: "#ffdad6",
        actionBgErrorActive: "#feb3ad",
        actionBgErrorDisabled: "#f2f2f2",
        actionBgPrimary: "#659f00",
        actionBgPrimaryHover: "#538300",
        actionBgPrimaryActive: "#253a00",
        actionBgPrimaryDisabled: "#d8d8d8",
        actionBgSecondary: "#ffffff",
        actionBgSecondaryHover: "#e2e2e2",
        actionBgSecondaryActive: "#c6c6c6",
        actionBgSecondaryDisabled: "#ffffff",
        actionBgTertiaryHover: "#e2e2e2",
        actionBgTertiaryActive: "#c6c6c6",
        actionBgPrimaryDanger: "#dc3528",
        actionBgPrimaryDangerHover: "#b6251b",
        actionBgPrimaryDangerActive: "#570704",
        actionBgPrimaryDangerDisabled: "#d8d8d8",
        actionBgSecondaryDanger: "#ffffff",
        actionBgSecondaryDangerHover: "#ffdad6",
        actionBgSecondaryDangerActive: "#feb3ad",
        actionBgSecondaryDangerDisabled: "#ffffff",
        actionBgTertiaryDangerHover: "#ffdad6",
        actionBgTertiaryDangerActive: "#feb3ad",
        actionBgBase: "#c6c6c6",
        actionBgBaseDisabled: "#e2e2e2",
        actionBgOn: "#659f00",
        actionBgOnDisabled: "#9fd73d",
        actionFgDefault: "#202020",
        actionFgHover: "#202020",
        actionFgActive: "#202020",
        actionFgDisabled: "#767676",
        actionFgStrong: "#000000",
        actionFgSelected: "#659f00",
        actionFgSelectedHover: "#538300",
        actionFgSelectedActive: "#253a00",
        actionFgSelectedDisabled: "#767676",
        actionFgError: "#dc3528",
        actionFgErrorHover: "#b6251b",
        actionFgErrorActive: "#570704",
        actionFgErrorDisabled: "#767676",
        actionFgPrimary: "#ffffff",
        actionFgPrimaryHover: "#ffffff",
        actionFgPrimaryActive: "#ffffff",
        actionFgPrimaryDisabled: "#ffffff",
        actionFgSecondary: "#5e5e5e",
        actionFgSecondaryHover: "#343434",
        actionFgSecondaryActive: "#202020",
        actionFgSecondaryDisabled: "#c6c6c6",
        actionFgTertiary: "#5e5e5e",
        actionFgTertiaryHover: "#343434",
        actionFgTertiaryActive: "#202020",
        actionFgTertiaryDisabled: "#c6c6c6",
        actionFgPrimaryDanger: "#ffffff",
        actionFgPrimaryDangerHover: "#ffffff",
        actionFgPrimaryDangerActive: "#ffffff",
        actionFgPrimaryDangerDisabled: "#ffffff",
        actionFgSecondaryDanger: "#dc3528",
        actionFgSecondaryDangerHover: "#b6251b",
        actionFgSecondaryDangerActive: "#6c0d08",
        actionFgSecondaryDangerDisabled: "#c6c6c6",
        actionFgTertiaryDanger: "#dc3528",
        actionFgTertiaryDangerHover: "#b6251b",
        actionFgTertiaryDangerActive: "#6c0d08",
        actionFgTertiaryDangerDisabled: "#c6c6c6",
        actionFgInverse: "#ffffff",
        actionFgOn: "#ffffff",
        actionFgOnDisabled: "#f2f2f2",
        actionBorderDefault: "#8f8f8f",
        actionBorderHover: "#767676",
        actionBorderActive: "#343434",
        actionBorderDisabled: "#c6c6c6",
        actionBorderSelected: "#659f00",
        actionBorderSelectedHover: "#538300",
        actionBorderSelectedActive: "#253a00",
        actionBorderSelectedDisabled: "#d8d8d8",
        actionBorderError: "#dc3528",
        actionBorderErrorHover: "#b6251b",
        actionBorderErrorActive: "#570704",
        actionBorderErrorDisabled: "#d8d8d8",
        actionBorderPrimary: "#659f00",
        actionBorderPrimaryHover: "#253a00",
        actionBorderPrimaryActive: "#253a00",
        actionBorderPrimaryDisabled: "#d8d8d8",
        actionBorderSecondary: "#5e5e5e",
        actionBorderSecondaryHover: "#5e5e5e",
        actionBorderSecondaryActive: "#202020",
        actionBorderSecondaryDisabled: "#d8d8d8",
        actionBorderPrimaryDanger: "#dc3528",
        actionBorderPrimaryDangerHover: "#570704",
        actionBorderPrimaryDangerActive: "#570704",
        actionBorderPrimaryDangerDisabled: "#d8d8d8",
        actionBorderSecondaryDanger: "#dc3528",
        actionBorderSecondaryDangerHover: "#dc3528",
        actionBorderSecondaryDangerActive: "#6c0d08",
        actionBorderSecondaryDangerDisabled: "#d8d8d8",
        actionBorderInverse: "#ffffff",
        actionBorderBase: "#8f8f8f",
        feedbackBgInfo: "#e9f4fb",
        feedbackBgInfoSolid: "#2378ca",
        feedbackBgSuccess: "#e4fabe",
        feedbackBgSuccessSolid: "#659f00",
        feedbackBgCaution: "#f9f4ca",
        feedbackBgCautionSolid: "#e7c32b",
        feedbackBgError: "#ffefed",
        feedbackBgErrorSolid: "#dc3528",
        feedbackBgNeutral: "#e2e2e2",
        feedbackBgProgress: "#ffffff",
        feedbackBgTooltip: "#343434",
        feedbackBgBase: "#ffffff",
        feedbackFgInfo: "#2378ca",
        feedbackFgInfoHover: "#2a63ba",
        feedbackFgInfoActive: "#013076",
        feedbackFgSuccess: "#659f00",
        feedbackFgSuccessHover: "#538300",
        feedbackFgSuccessActive: "#4d6721",
        feedbackFgCaution: "#a96700",
        feedbackFgCautionHover: "#924c00",
        feedbackFgCautionActive: "#5a2400",
        feedbackFgError: "#dc3528",
        feedbackFgErrorHover: "#b6251b",
        feedbackFgErrorActive: "#6c0d08",
        feedbackFgNeutral: "#5e5e5e",
        feedbackFgNeutralHover: "#343434",
        feedbackFgNeutralActive: "#000000",
        feedbackFgProgress: "#659f00",
        feedbackFgProgressActive: "#538300",
        feedbackFgTooltip: "#f2f2f2",
        feedbackFgPrimary: "#202020",
        feedbackFgSecondary: "#5e5e5e",
        feedbackFgInverse: "#ffffff",
        feedbackFgReverse: "#202020",
        feedbackBorderInfo: "#2378ca",
        feedbackBorderSuccess: "#659f00",
        feedbackBorderCaution: "#a96700",
        feedbackBorderError: "#dc3528",
        feedbackBorderNeutral: "#8f8f8f",
        feedbackBorderProgress: "#d8d8d8",
      };
      Object.keys(C);
      let E = {
        displayModal: "0px 8px 10px 0 #00000026",
        displayPageHeader: "0px 2px 3px 0 #00000024",
        displayPopover: "0px 4px 5px 0 #0000001f",
        displayCarouselButton: "0px 2px 3px 0 #00000024",
        displaySidePanelRight: "-4px 0px 5px 0 #0000001f",
        displaySidePanelLeft: "4px 0px 5px 0 #0000001f",
        menuDropdown: "0px 4px 5px 0 #0000001f",
        menuPopout: "0px 2px 3px 0 #00000024",
        inputToggle: "0px 1px 3px 0 #00000033",
        feedbackNotification: "0px 4px 5px 0 #0000001f",
      };
      Object.keys(E);
      var P,
        N = "colors",
        I = "sizes",
        M = "space",
        z = {
          gap: M,
          gridGap: M,
          columnGap: M,
          gridColumnGap: M,
          rowGap: M,
          gridRowGap: M,
          inset: M,
          insetBlock: M,
          insetBlockEnd: M,
          insetBlockStart: M,
          insetInline: M,
          insetInlineEnd: M,
          insetInlineStart: M,
          margin: M,
          marginTop: M,
          marginRight: M,
          marginBottom: M,
          marginLeft: M,
          marginBlock: M,
          marginBlockEnd: M,
          marginBlockStart: M,
          marginInline: M,
          marginInlineEnd: M,
          marginInlineStart: M,
          padding: M,
          paddingTop: M,
          paddingRight: M,
          paddingBottom: M,
          paddingLeft: M,
          paddingBlock: M,
          paddingBlockEnd: M,
          paddingBlockStart: M,
          paddingInline: M,
          paddingInlineEnd: M,
          paddingInlineStart: M,
          top: M,
          right: M,
          bottom: M,
          left: M,
          scrollMargin: M,
          scrollMarginTop: M,
          scrollMarginRight: M,
          scrollMarginBottom: M,
          scrollMarginLeft: M,
          scrollMarginX: M,
          scrollMarginY: M,
          scrollMarginBlock: M,
          scrollMarginBlockEnd: M,
          scrollMarginBlockStart: M,
          scrollMarginInline: M,
          scrollMarginInlineEnd: M,
          scrollMarginInlineStart: M,
          scrollPadding: M,
          scrollPaddingTop: M,
          scrollPaddingRight: M,
          scrollPaddingBottom: M,
          scrollPaddingLeft: M,
          scrollPaddingX: M,
          scrollPaddingY: M,
          scrollPaddingBlock: M,
          scrollPaddingBlockEnd: M,
          scrollPaddingBlockStart: M,
          scrollPaddingInline: M,
          scrollPaddingInlineEnd: M,
          scrollPaddingInlineStart: M,
          fontSize: "fontSizes",
          background: N,
          backgroundColor: N,
          backgroundImage: N,
          borderImage: N,
          border: N,
          borderBlock: N,
          borderBlockEnd: N,
          borderBlockStart: N,
          borderBottom: N,
          borderBottomColor: N,
          borderColor: N,
          borderInline: N,
          borderInlineEnd: N,
          borderInlineStart: N,
          borderLeft: N,
          borderLeftColor: N,
          borderRight: N,
          borderRightColor: N,
          borderTop: N,
          borderTopColor: N,
          caretColor: N,
          color: N,
          columnRuleColor: N,
          fill: N,
          outline: N,
          outlineColor: N,
          stroke: N,
          textDecorationColor: N,
          fontFamily: "fonts",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          blockSize: I,
          minBlockSize: I,
          maxBlockSize: I,
          inlineSize: I,
          minInlineSize: I,
          maxInlineSize: I,
          width: I,
          minWidth: I,
          maxWidth: I,
          height: I,
          minHeight: I,
          maxHeight: I,
          flexBasis: I,
          gridTemplateColumns: I,
          gridTemplateRows: I,
          borderWidth: "borderWidths",
          borderTopWidth: "borderWidths",
          borderRightWidth: "borderWidths",
          borderBottomWidth: "borderWidths",
          borderLeftWidth: "borderWidths",
          borderStyle: "borderStyles",
          borderTopStyle: "borderStyles",
          borderRightStyle: "borderStyles",
          borderBottomStyle: "borderStyles",
          borderLeftStyle: "borderStyles",
          borderRadius: "radii",
          borderTopLeftRadius: "radii",
          borderTopRightRadius: "radii",
          borderBottomRightRadius: "radii",
          borderBottomLeftRadius: "radii",
          boxShadow: "shadows",
          textShadow: "shadows",
          transition: "transitions",
          zIndex: "zIndices",
        },
        T = (e, t) =>
          "function" == typeof t
            ? { "()": Function.prototype.toString.call(t) }
            : t,
        L = () => {
          let e = Object.create(null);
          return (t, r, ...n) => {
            let i = JSON.stringify(t, T);
            return i in e ? e[i] : (e[i] = r(t, ...n));
          };
        },
        W = Symbol.for("sxs.internal"),
        R = (e, t) =>
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
        $ = (e) => {
          for (let t in e) return !0;
          return !1;
        },
        { hasOwnProperty: V } = Object.prototype,
        G = (e) =>
          e.includes("-")
            ? e
            : e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()),
        _ = /\s+(?![^()]*\))/,
        U = (e) => (t) =>
          e(...("string" == typeof t ? String(t).split(_) : [t])),
        q = {
          appearance: (e) => ({ WebkitAppearance: e, appearance: e }),
          backfaceVisibility: (e) => ({
            WebkitBackfaceVisibility: e,
            backfaceVisibility: e,
          }),
          backdropFilter: (e) => ({
            WebkitBackdropFilter: e,
            backdropFilter: e,
          }),
          backgroundClip: (e) => ({
            WebkitBackgroundClip: e,
            backgroundClip: e,
          }),
          boxDecorationBreak: (e) => ({
            WebkitBoxDecorationBreak: e,
            boxDecorationBreak: e,
          }),
          clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }),
          content: (e) => ({
            content:
              e.includes('"') ||
              e.includes("'") ||
              /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
                e
              )
                ? e
                : `"${e}"`,
          }),
          hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }),
          maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }),
          maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }),
          tabSize: (e) => ({ MozTabSize: e, tabSize: e }),
          textSizeAdjust: (e) => ({
            WebkitTextSizeAdjust: e,
            textSizeAdjust: e,
          }),
          userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }),
          marginBlock: U((e, t) => ({
            marginBlockStart: e,
            marginBlockEnd: t || e,
          })),
          marginInline: U((e, t) => ({
            marginInlineStart: e,
            marginInlineEnd: t || e,
          })),
          maxSize: U((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })),
          minSize: U((e, t) => ({ minBlockSize: e, minInlineSize: t || e })),
          paddingBlock: U((e, t) => ({
            paddingBlockStart: e,
            paddingBlockEnd: t || e,
          })),
          paddingInline: U((e, t) => ({
            paddingInlineStart: e,
            paddingInlineEnd: t || e,
          })),
        },
        Y = /([\d.]+)([^]*)/,
        K = (e, t) =>
          e.length
            ? e.reduce(
                (e, r) => (
                  e.push(
                    ...t.map((e) =>
                      e.includes("&")
                        ? e.replace(
                            /&/g,
                            /[ +>|~]/.test(r) && /&.*&/.test(e)
                              ? `:is(${r})`
                              : r
                          )
                        : r + " " + e
                    )
                  ),
                  e
                ),
                []
              )
            : t,
        X = (e, t) =>
          e in Z && "string" == typeof t
            ? t.replace(
                /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
                (t, r, n, i) =>
                  r +
                  ("stretch" === n
                    ? `-moz-available${i};${G(e)}:${r}-webkit-fill-available`
                    : `-moz-fit-content${i};${G(e)}:${r}fit-content`) +
                  i
              )
            : String(t),
        Z = {
          blockSize: 1,
          height: 1,
          inlineSize: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          width: 1,
        },
        J = (e) => (e ? e + "-" : ""),
        Q = (e, t, r) =>
          e.replace(
            /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
            (e, n, i, a, o) =>
              ("$" == a) == !!i
                ? e
                : (n || "--" == a ? "calc(" : "") +
                  "var(--" +
                  ("$" === a
                    ? J(t) +
                      (o.includes("$") ? "" : J(r)) +
                      o.replace(/\$/g, "-")
                    : o) +
                  ")" +
                  (n || "--" == a ? "*" + (n || "") + (i || "1") + ")" : "")
          ),
        ee = /\s*,\s*(?![^()]*\))/,
        et = Object.prototype.toString,
        er = (e, t, r, n, i) => {
          let a, o, l;
          let c = (e, t, r) => {
            let s, d;
            let f = (e) => {
              var u;
              for (s in e) {
                let g = 64 === s.charCodeAt(0),
                  p = g && Array.isArray(e[s]) ? e[s] : [e[s]];
                for (d of p) {
                  let e = /[A-Z]/.test((u = s))
                      ? u
                      : u.replace(/-[^]/g, (e) => e[1].toUpperCase()),
                    p =
                      "object" == typeof d &&
                      d &&
                      d.toString === et &&
                      (!n.utils[e] || !t.length);
                  if (e in n.utils && !p) {
                    let t = n.utils[e];
                    if (t !== o) {
                      (o = t), f(t(d)), (o = null);
                      continue;
                    }
                  } else if (e in q) {
                    let t = q[e];
                    if (t !== l) {
                      (l = t), f(t(d)), (l = null);
                      continue;
                    }
                  }
                  if (
                    (g &&
                      (s = (
                        s.slice(1) in n.media
                          ? "@media " + n.media[s.slice(1)]
                          : s
                      ).replace(
                        /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                        (e, t, r, n, i, a) => {
                          let o = Y.test(t),
                            l = 0.0625 * (o ? -1 : 1),
                            [c, s] = o ? [n, t] : [t, n];
                          return (
                            "(" +
                            ("=" === r[0]
                              ? ""
                              : (">" === r[0]) === o
                              ? "max-"
                              : "min-") +
                            c +
                            ":" +
                            ("=" !== r[0] && 1 === r.length
                              ? s.replace(
                                  Y,
                                  (e, t, n) =>
                                    Number(t) + l * (">" === r ? 1 : -1) + n
                                )
                              : s) +
                            (i
                              ? ") and (" +
                                (">" === i[0] ? "min-" : "max-") +
                                c +
                                ":" +
                                (1 === i.length
                                  ? a.replace(
                                      Y,
                                      (e, t, r) =>
                                        Number(t) + l * (">" === i ? -1 : 1) + r
                                    )
                                  : a)
                              : "") +
                            ")"
                          );
                        }
                      )),
                    p)
                  ) {
                    let e = g ? r.concat(s) : [...r],
                      n = g ? [...t] : K(t, s.split(ee));
                    void 0 !== a && i(en(...a)), (a = void 0), c(d, n, e);
                  } else
                    void 0 === a && (a = [[], t, r]),
                      (s =
                        g || 36 !== s.charCodeAt(0)
                          ? s
                          : `--${J(n.prefix)}${s
                              .slice(1)
                              .replace(/\$/g, "-")}`),
                      (d = p
                        ? d
                        : "number" == typeof d
                        ? d && e in ei
                          ? String(d) + "px"
                          : String(d)
                        : Q(X(e, null == d ? "" : d), n.prefix, n.themeMap[e])),
                      a[0].push(`${g ? `${s} ` : `${G(s)}:`}${d}`);
                }
              }
            };
            f(e), void 0 !== a && i(en(...a)), (a = void 0);
          };
          c(e, t, r);
        },
        en = (e, t, r) =>
          `${r.map((e) => `${e}{`).join("")}${
            t.length ? `${t.join(",")}{` : ""
          }${e.join(";")}${t.length ? "}" : ""}${Array(
            r.length ? r.length + 1 : 0
          ).join("}")}`,
        ei = {
          animationDelay: 1,
          animationDuration: 1,
          backgroundSize: 1,
          blockSize: 1,
          border: 1,
          borderBlock: 1,
          borderBlockEnd: 1,
          borderBlockEndWidth: 1,
          borderBlockStart: 1,
          borderBlockStartWidth: 1,
          borderBlockWidth: 1,
          borderBottom: 1,
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
          borderBottomWidth: 1,
          borderEndEndRadius: 1,
          borderEndStartRadius: 1,
          borderInlineEnd: 1,
          borderInlineEndWidth: 1,
          borderInlineStart: 1,
          borderInlineStartWidth: 1,
          borderInlineWidth: 1,
          borderLeft: 1,
          borderLeftWidth: 1,
          borderRadius: 1,
          borderRight: 1,
          borderRightWidth: 1,
          borderSpacing: 1,
          borderStartEndRadius: 1,
          borderStartStartRadius: 1,
          borderTop: 1,
          borderTopLeftRadius: 1,
          borderTopRightRadius: 1,
          borderTopWidth: 1,
          borderWidth: 1,
          bottom: 1,
          columnGap: 1,
          columnRule: 1,
          columnRuleWidth: 1,
          columnWidth: 1,
          containIntrinsicSize: 1,
          flexBasis: 1,
          fontSize: 1,
          gap: 1,
          gridAutoColumns: 1,
          gridAutoRows: 1,
          gridTemplateColumns: 1,
          gridTemplateRows: 1,
          height: 1,
          inlineSize: 1,
          inset: 1,
          insetBlock: 1,
          insetBlockEnd: 1,
          insetBlockStart: 1,
          insetInline: 1,
          insetInlineEnd: 1,
          insetInlineStart: 1,
          left: 1,
          letterSpacing: 1,
          margin: 1,
          marginBlock: 1,
          marginBlockEnd: 1,
          marginBlockStart: 1,
          marginBottom: 1,
          marginInline: 1,
          marginInlineEnd: 1,
          marginInlineStart: 1,
          marginLeft: 1,
          marginRight: 1,
          marginTop: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          offsetDistance: 1,
          offsetRotate: 1,
          outline: 1,
          outlineOffset: 1,
          outlineWidth: 1,
          overflowClipMargin: 1,
          padding: 1,
          paddingBlock: 1,
          paddingBlockEnd: 1,
          paddingBlockStart: 1,
          paddingBottom: 1,
          paddingInline: 1,
          paddingInlineEnd: 1,
          paddingInlineStart: 1,
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
          perspective: 1,
          right: 1,
          rowGap: 1,
          scrollMargin: 1,
          scrollMarginBlock: 1,
          scrollMarginBlockEnd: 1,
          scrollMarginBlockStart: 1,
          scrollMarginBottom: 1,
          scrollMarginInline: 1,
          scrollMarginInlineEnd: 1,
          scrollMarginInlineStart: 1,
          scrollMarginLeft: 1,
          scrollMarginRight: 1,
          scrollMarginTop: 1,
          scrollPadding: 1,
          scrollPaddingBlock: 1,
          scrollPaddingBlockEnd: 1,
          scrollPaddingBlockStart: 1,
          scrollPaddingBottom: 1,
          scrollPaddingInline: 1,
          scrollPaddingInlineEnd: 1,
          scrollPaddingInlineStart: 1,
          scrollPaddingLeft: 1,
          scrollPaddingRight: 1,
          scrollPaddingTop: 1,
          shapeMargin: 1,
          textDecoration: 1,
          textDecorationThickness: 1,
          textIndent: 1,
          textUnderlineOffset: 1,
          top: 1,
          transitionDelay: 1,
          transitionDuration: 1,
          verticalAlign: 1,
          width: 1,
          wordSpacing: 1,
        },
        ea = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)),
        eo = (e) =>
          ((e) => {
            let t,
              r = "";
            for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = ea(t % 52) + r;
            return ea(t % 52) + r;
          })(
            ((e, t) => {
              let r = t.length;
              for (; r; ) e = (33 * e) ^ t.charCodeAt(--r);
              return e;
            })(5381, JSON.stringify(e)) >>> 0
          ),
        el = [
          "themed",
          "global",
          "styled",
          "onevar",
          "resonevar",
          "allvar",
          "inline",
        ],
        ec = (e) => {
          if (e.href && !e.href.startsWith(location.origin)) return !1;
          try {
            return !!e.cssRules;
          } catch (e) {
            return !1;
          }
        },
        es = (e) => {
          let t;
          let r = () => {
              let { cssRules: e } = t.sheet;
              return [].map
                .call(e, (r, n) => {
                  let { cssText: i } = r,
                    a = "";
                  if (i.startsWith("--sxs")) return "";
                  if (e[n - 1] && (a = e[n - 1].cssText).startsWith("--sxs")) {
                    if (!r.cssRules.length) return "";
                    for (let e in t.rules)
                      if (t.rules[e].group === r)
                        return `--sxs{--sxs:${[...t.rules[e].cache].join(
                          " "
                        )}}${i}`;
                    return r.cssRules.length ? `${a}${i}` : "";
                  }
                  return i;
                })
                .join("");
            },
            n = () => {
              if (t) {
                let { rules: e, sheet: r } = t;
                if (!r.deleteRule) {
                  for (; 3 === Object(Object(r.cssRules)[0]).type; )
                    r.cssRules.splice(0, 1);
                  r.cssRules = [];
                }
                for (let t in e) delete e[t];
              }
              let i = Object(e).styleSheets || [];
              for (let e of i)
                if (ec(e)) {
                  for (let i = 0, a = e.cssRules; a[i]; ++i) {
                    let o = Object(a[i]);
                    if (1 !== o.type) continue;
                    let l = Object(a[i + 1]);
                    if (4 !== l.type) continue;
                    ++i;
                    let { cssText: c } = o;
                    if (!c.startsWith("--sxs")) continue;
                    let s = c.slice(14, -3).trim().split(/\s+/),
                      d = el[s[0]];
                    d &&
                      (t ||
                        (t = { sheet: e, reset: n, rules: {}, toString: r }),
                      (t.rules[d] = { group: l, index: i, cache: new Set(s) }));
                  }
                  if (t) break;
                }
              if (!t) {
                let i = (e, t) => ({
                  type: t,
                  cssRules: [],
                  insertRule(e, t) {
                    this.cssRules.splice(
                      t,
                      0,
                      i(
                        e,
                        { import: 3, undefined: 1 }[
                          (e.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                        ] || 4
                      )
                    );
                  },
                  get cssText() {
                    return "@media{}" === e
                      ? `@media{${[].map
                          .call(this.cssRules, (e) => e.cssText)
                          .join("")}}`
                      : e;
                  },
                });
                t = {
                  sheet: e
                    ? (e.head || e).appendChild(document.createElement("style"))
                        .sheet
                    : i("", "text/css"),
                  rules: {},
                  reset: n,
                  toString: r,
                };
              }
              let { sheet: a, rules: o } = t;
              for (let e = el.length - 1; e >= 0; --e) {
                let t = el[e];
                if (!o[t]) {
                  let r = el[e + 1],
                    n = o[r] ? o[r].index : a.cssRules.length;
                  a.insertRule("@media{}", n),
                    a.insertRule(`--sxs{--sxs:${e}}`, n),
                    (o[t] = {
                      group: a.cssRules[n + 1],
                      index: n,
                      cache: new Set([e]),
                    });
                }
                ed(o[t]);
              }
            };
          return n(), t;
        },
        ed = (e) => {
          let t = e.group,
            r = t.cssRules.length;
          e.apply = (e) => {
            try {
              t.insertRule(e, r), ++r;
            } catch (e) {}
          };
        },
        ef = Symbol(),
        eu = L(),
        eg = (e, t) =>
          eu(e, () => (...r) => {
            let n = { type: null, composers: new Set() };
            for (let t of r)
              if (null != t) {
                if (t[W])
                  for (let e of (null == n.type && (n.type = t[W].type),
                  t[W].composers))
                    n.composers.add(e);
                else
                  t.constructor !== Object || t.$$typeof
                    ? null == n.type && (n.type = t)
                    : n.composers.add(ep(t, e));
              }
            return (
              null == n.type && (n.type = "span"),
              n.composers.size || n.composers.add(["PJLV", {}, [], [], {}, []]),
              ev(e, n, t)
            );
          }),
        ep = (
          { variants: e, compoundVariants: t, defaultVariants: r, ...n },
          i
        ) => {
          let a = `${J(i.prefix)}c-${eo(n)}`,
            o = [],
            l = [],
            c = Object.create(null),
            s = [];
          for (let e in r) c[e] = String(r[e]);
          if ("object" == typeof e && e)
            for (let t in e) {
              V.call(c, t) || (c[t] = "undefined");
              let r = e[t];
              for (let e in r) {
                let n = { [t]: String(e) };
                "undefined" === String(e) && s.push(t);
                let i = r[e],
                  a = [n, i, !$(i)];
                o.push(a);
              }
            }
          if ("object" == typeof t && t)
            for (let e of t) {
              let { css: t, ...r } = e;
              for (let e in ((t = ("object" == typeof t && t) || {}), r))
                r[e] = String(r[e]);
              let n = [r, t, !$(t)];
              l.push(n);
            }
          return [a, n, o, l, c, s];
        },
        ev = (e, t, r) => {
          let [n, i, a, o] = em(t.composers),
            l =
              "function" == typeof t.type || t.type.$$typeof
                ? ((e) => {
                    function t() {
                      for (let r = 0; r < t[ef].length; r++) {
                        let [n, i] = t[ef][r];
                        e.rules[n].apply(i);
                      }
                      return (t[ef] = []), null;
                    }
                    return (
                      (t[ef] = []),
                      (t.rules = {}),
                      el.forEach(
                        (e) =>
                          (t.rules[e] = { apply: (r) => t[ef].push([e, r]) })
                      ),
                      t
                    );
                  })(r)
                : null,
            c = (l || r).rules,
            s = `.${n}${
              i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""
            }`,
            d = (d) => {
              d = ("object" == typeof d && d) || ey;
              let { css: f, ...u } = d,
                g = {};
              for (let e in a)
                if ((delete u[e], e in d)) {
                  let t = d[e];
                  "object" == typeof t && t
                    ? (g[e] = { "@initial": a[e], ...t })
                    : ((t = String(t)),
                      (g[e] = "undefined" !== t || o.has(e) ? t : a[e]));
                } else g[e] = a[e];
              let p = new Set([...i]);
              for (let [n, i, a, o] of t.composers) {
                r.rules.styled.cache.has(n) ||
                  (r.rules.styled.cache.add(n),
                  er(i, [`.${n}`], [], e, (e) => {
                    c.styled.apply(e);
                  }));
                let t = eh(a, g, e.media),
                  l = eh(o, g, e.media, !0);
                for (let i of t)
                  if (void 0 !== i)
                    for (let [t, a, o] of i) {
                      let i = `${n}-${eo(a)}-${t}`;
                      p.add(i);
                      let l = (o ? r.rules.resonevar : r.rules.onevar).cache,
                        s = o ? c.resonevar : c.onevar;
                      l.has(i) ||
                        (l.add(i),
                        er(a, [`.${i}`], [], e, (e) => {
                          s.apply(e);
                        }));
                    }
                for (let t of l)
                  if (void 0 !== t)
                    for (let [i, a] of t) {
                      let t = `${n}-${eo(a)}-${i}`;
                      p.add(t),
                        r.rules.allvar.cache.has(t) ||
                          (r.rules.allvar.cache.add(t),
                          er(a, [`.${t}`], [], e, (e) => {
                            c.allvar.apply(e);
                          }));
                    }
              }
              if ("object" == typeof f && f) {
                let t = `${n}-i${eo(f)}-css`;
                p.add(t),
                  r.rules.inline.cache.has(t) ||
                    (r.rules.inline.cache.add(t),
                    er(f, [`.${t}`], [], e, (e) => {
                      c.inline.apply(e);
                    }));
              }
              for (let e of String(d.className || "")
                .trim()
                .split(/\s+/))
                e && p.add(e);
              let v = (u.className = [...p].join(" "));
              return {
                type: t.type,
                className: v,
                selector: s,
                props: u,
                toString: () => v,
                deferredInjector: l,
              };
            };
          return R(d, {
            className: n,
            selector: s,
            [W]: t,
            toString: () => (r.rules.styled.cache.has(n) || d(), n),
          });
        },
        em = (e) => {
          let t = "",
            r = [],
            n = {},
            i = [];
          for (let [a, , , , o, l] of e)
            for (let e in ("" === t && (t = a), r.push(a), i.push(...l), o)) {
              let t = o[e];
              (void 0 === n[e] || "undefined" !== t || l.includes(t)) &&
                (n[e] = t);
            }
          return [t, r, n, new Set(i)];
        },
        eh = (e, t, r, n) => {
          let i = [];
          e: for (let [a, o, l] of e) {
            if (l) continue;
            let e,
              c = 0,
              s = !1;
            for (e in a) {
              let n = a[e],
                i = t[e];
              if (i !== n) {
                if ("object" != typeof i || !i) continue e;
                {
                  let e,
                    t,
                    a = 0;
                  for (let o in i) {
                    if (n === String(i[o])) {
                      if ("@initial" !== o) {
                        let e = o.slice(1);
                        (t = t || []).push(
                          e in r ? r[e] : o.replace(/^@media ?/, "")
                        ),
                          (s = !0);
                      }
                      (c += a), (e = !0);
                    }
                    ++a;
                  }
                  if (
                    (t && t.length && (o = { ["@media " + t.join(", ")]: o }),
                    !e)
                  )
                    continue e;
                }
              }
            }
            (i[c] = i[c] || []).push([n ? "cv" : `${e}-${a[e]}`, o, s]);
          }
          return i;
        },
        ey = {},
        eb = L(),
        eS = (e, t) =>
          eb(e, () => (...r) => {
            let n = () => {
              for (let n of r) {
                let r = eo((n = ("object" == typeof n && n) || {}));
                if (!t.rules.global.cache.has(r)) {
                  if ((t.rules.global.cache.add(r), "@import" in n)) {
                    let e =
                      [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) -
                      1;
                    for (let r of [].concat(n["@import"]))
                      (r = r.includes('"') || r.includes("'") ? r : `"${r}"`),
                        t.sheet.insertRule(`@import ${r};`, e++);
                    delete n["@import"];
                  }
                  er(n, [], [], e, (e) => {
                    t.rules.global.apply(e);
                  });
                }
              }
              return "";
            };
            return R(n, { toString: n });
          }),
        eB = L(),
        ex = (e, t) =>
          eB(e, () => (r) => {
            let n = `${J(e.prefix)}k-${eo(r)}`,
              i = () => {
                if (!t.rules.global.cache.has(n)) {
                  t.rules.global.cache.add(n);
                  let i = [];
                  er(r, [], [], e, (e) => i.push(e));
                  let a = `@keyframes ${n}{${i.join("")}}`;
                  t.rules.global.apply(a);
                }
                return n;
              };
            return R(i, {
              get name() {
                return i();
              },
              toString: i,
            });
          }),
        eF = class {
          constructor(e, t, r, n) {
            (this.token = null == e ? "" : String(e)),
              (this.value = null == t ? "" : String(t)),
              (this.scale = null == r ? "" : String(r)),
              (this.prefix = null == n ? "" : String(n));
          }
          get computedValue() {
            return "var(" + this.variable + ")";
          }
          get variable() {
            return "--" + J(this.prefix) + J(this.scale) + this.token;
          }
          toString() {
            return this.computedValue;
          }
        },
        eA = L(),
        ew = (e, t) =>
          eA(e, () => (r, n) => {
            n = ("object" == typeof r && r) || Object(n);
            let i = `.${(r =
                (r = "string" == typeof r ? r : "") ||
                `${J(e.prefix)}t-${eo(n)}`)}`,
              a = {},
              o = [];
            for (let t in n)
              for (let r in ((a[t] = {}), n[t])) {
                let i = `--${J(e.prefix)}${t}-${r}`,
                  l = Q(String(n[t][r]), e.prefix, t);
                (a[t][r] = new eF(r, l, t, e.prefix)), o.push(`${i}:${l}`);
              }
            let l = () => {
              if (o.length && !t.rules.themed.cache.has(r)) {
                t.rules.themed.cache.add(r);
                let i = `${n === e.theme ? ":root," : ""}.${r}{${o.join(";")}}`;
                t.rules.themed.apply(i);
              }
              return r;
            };
            return {
              ...a,
              get className() {
                return l();
              },
              selector: i,
              toString: l,
            };
          }),
        eO = L(),
        ek = (e) => {
          let t = !1,
            r = eO(e, (e) => {
              t = !0;
              let r =
                  "prefix" in (e = ("object" == typeof e && e) || {})
                    ? String(e.prefix)
                    : "",
                n = ("object" == typeof e.media && e.media) || {},
                i =
                  "object" == typeof e.root
                    ? e.root || null
                    : globalThis.document || null,
                a = ("object" == typeof e.theme && e.theme) || {},
                o = {
                  prefix: r,
                  media: n,
                  theme: a,
                  themeMap: ("object" == typeof e.themeMap && e.themeMap) || {
                    ...z,
                  },
                  utils: ("object" == typeof e.utils && e.utils) || {},
                },
                l = es(i),
                c = {
                  css: eg(o, l),
                  globalCss: eS(o, l),
                  keyframes: ex(o, l),
                  createTheme: ew(o, l),
                  reset() {
                    l.reset(), c.theme.toString();
                  },
                  theme: {},
                  sheet: l,
                  config: o,
                  prefix: r,
                  getCssText: l.toString,
                  toString: l.toString,
                };
              return String((c.theme = c.createTheme(a))), c;
            });
          return t || r.reset(), r;
        },
        eD = () => P || (P = ek()),
        eH = (...e) => eD().css(...e);
      let ej = {
          nvidiaSans: `"${B.nvidiaSans}", "${B.nvidiaSans} Fallback"`,
          jetbrainsMono: `"${B.jetbrainsMono}", "${B.jetbrainsMono} Fallback"`,
        },
        eC = {
          xxl: `(max-width: ${w.xxl})`,
          xl: `(max-width: ${w.xl})`,
          lg: `(max-width: ${w.lg})`,
          md: `(max-width: ${w.md})`,
          sm: `(max-width: ${w.sm})`,
          xs: `(max-width: ${w.xs})`,
        },
        {
          config: eE,
          createTheme: eP,
          css: eN,
          getCssText: eI,
          globalCss: eM,
          keyframes: ez,
          reset: eT,
          theme: eL,
        } = ek({
          media: eC,
          theme: {
            colors: Object.assign(Object.assign({}, S), C),
            shadows: Object.assign(Object.assign({}, k), E),
            borderWidths: D,
            fonts: ej,
            fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
            fontSizes: F,
            lineHeights: x,
            letterSpacings: A,
            space: O,
          },
        });
      Object.keys(eL.colors),
        Object.keys(eL.fontSizes),
        Object.keys(eL.space),
        eP({
          colors: Object.assign(Object.assign({}, S), C),
          shadows: Object.assign(Object.assign({}, k), E),
        }),
        eP({
          colors: Object.assign(Object.assign({}, S), H),
          shadows: Object.assign(Object.assign({}, k), j),
        });
      let eW = (e) =>
          `url("https://brand-assets.cne.ngc.nvidia.com/assets/fonts/nvidia-sans/1.0.0/NVIDIASans_${e}.woff2") format("woff2")`,
        eR = "fallback",
        e$ = "normal",
        eV = "italic",
        eG = `"${B.nvidiaSans}"`,
        e_ = `"${B.nvidiaSans} Fallback"`,
        eU = `"${B.jetbrainsMono} Fallback"`;
      eM({
        "@font-face": [
          {
            fontFamily: eG,
            fontStyle: e$,
            fontWeight: 300,
            fontDisplay: eR,
            src: eW("Lt"),
          },
          {
            fontFamily: eG,
            fontStyle: eV,
            fontWeight: 300,
            fontDisplay: eR,
            src: eW("LtIt"),
          },
          {
            fontFamily: eG,
            fontStyle: e$,
            fontWeight: 400,
            fontDisplay: eR,
            src: eW("Rg"),
          },
          {
            fontFamily: eG,
            fontStyle: eV,
            fontWeight: 400,
            fontDisplay: eR,
            src: eW("It"),
          },
          {
            fontFamily: eG,
            fontStyle: e$,
            fontWeight: 500,
            fontDisplay: eR,
            src: eW("Md"),
          },
          {
            fontFamily: eG,
            fontStyle: eV,
            fontWeight: 500,
            fontDisplay: eR,
            src: eW("MdIt"),
          },
          {
            fontFamily: eG,
            fontStyle: e$,
            fontWeight: 700,
            fontDisplay: eR,
            src: eW("Bd"),
          },
          {
            fontFamily: eG,
            fontStyle: eV,
            fontWeight: 700,
            fontDisplay: eR,
            src: eW("BdIt"),
          },
          {
            fontFamily: eU,
            fontStyle: eV,
            fontWeight: 300,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: eU,
            fontStyle: eV,
            fontWeight: 400,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: eU,
            fontStyle: eV,
            fontWeight: 500,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: eU,
            fontStyle: eV,
            fontWeight: 700,
            src: "local('Courier New Bold Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: eU,
            fontStyle: e$,
            fontWeight: 300,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: eU,
            fontStyle: e$,
            fontWeight: 400,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: eU,
            fontStyle: e$,
            fontWeight: 500,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: eU,
            fontStyle: e$,
            fontWeight: 700,
            src: "local('Courier New Bold')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: e_,
            fontStyle: eV,
            fontWeight: 300,
            src: "local('Arial Italic')",
            ascentOverride: "97.18%",
            descentOverride: "27.77%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.84%",
          },
          {
            fontFamily: e_,
            fontStyle: eV,
            fontWeight: 400,
            src: "local('Arial Italic')",
            ascentOverride: "96.18%",
            descentOverride: "27.48%",
            lineGapOverride: "0.00%",
            sizeAdjust: "101.89%",
          },
          {
            fontFamily: e_,
            fontStyle: eV,
            fontWeight: 500,
            src: "local('Arial Italic')",
            ascentOverride: "94.81%",
            descentOverride: "27.09%",
            lineGapOverride: "0.00%",
            sizeAdjust: "103.36%",
          },
          {
            fontFamily: e_,
            fontStyle: eV,
            fontWeight: 700,
            src: "local('Arial Bold Italic')",
            ascentOverride: "101.13%",
            descentOverride: "28.90%",
            lineGapOverride: "0.00%",
            sizeAdjust: "96.90%",
          },
          {
            fontFamily: e_,
            fontStyle: e$,
            fontWeight: 300,
            src: "local('Arial')",
            ascentOverride: "93.59%",
            descentOverride: "26.74%",
            lineGapOverride: "0.00%",
            sizeAdjust: "104.71%",
          },
          {
            fontFamily: e_,
            fontStyle: e$,
            fontWeight: 400,
            src: "local('Arial')",
            ascentOverride: "92.70%",
            descentOverride: "26.49%",
            lineGapOverride: "0.00%",
            sizeAdjust: "105.71%",
          },
          {
            fontFamily: e_,
            fontStyle: e$,
            fontWeight: 500,
            src: "local('Arial')",
            ascentOverride: "91.53%",
            descentOverride: "26.15%",
            lineGapOverride: "0.00%",
            sizeAdjust: "107.07%",
          },
          {
            fontFamily: e_,
            fontStyle: e$,
            fontWeight: 700,
            src: "local('Arial Bold')",
            ascentOverride: "97.74%",
            descentOverride: "27.93%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.26%",
          },
        ],
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
        },
      }),
        Object.assign({ initial: "initial" }, w),
        eH({});
      var eq = r(7294),
        eY = r.t(eq, 2);
      let eK = (e) => {
          let t = (e) =>
              "undefined" != typeof window && window.matchMedia(e).matches,
            r = eC[e],
            [n, i] = (0, eq.useState)(t(r));
          function a() {
            i(t(r));
          }
          return (
            (0, eq.useEffect)(() => {
              let e = window.matchMedia(r);
              return (
                a(),
                e.addEventListener("change", a),
                () => {
                  e.removeEventListener("change", a);
                }
              );
            }, [r]),
            n
          );
        },
        eX = (0, eq.createContext)({
          collapsed: !1,
          setCollapsed: () => null,
          theme: "light",
          setTheme: () => null,
        }),
        eZ = "is-kui-collapsed",
        eJ = "is-kui-theme-dark-mode-enabled",
        eQ = () => (0, eq.useContext)(eX),
        e0 = (e) => {
          let { children: t } = e,
            [r, n] = (0, eq.useState)(!1),
            [i, a] = (0, eq.useState)(!1),
            [o, l] = (0, eq.useState)("light"),
            c = eK("md");
          return (
            (0, eq.useEffect)(() => {
              n(!0);
              let e = window.localStorage.getItem(eZ),
                t = window.localStorage.getItem(eJ);
              null !== e && a(JSON.parse(e)), null !== t && l(JSON.parse(t));
            }, []),
            (0, eq.useEffect)(() => {
              c ? a(!0) : a(!1);
            }, [c]),
            (0, eq.useEffect)(() => {
              window.localStorage.setItem(eZ, JSON.stringify(i));
            }, [i]),
            (0, eq.useEffect)(() => {
              window.localStorage.setItem(eJ, JSON.stringify(o));
            }, [o]),
            (0, b.jsx)(eX.Provider, {
              value: { collapsed: i, setCollapsed: a, theme: o, setTheme: l },
              children: r && t,
            })
          );
        },
        e2 = {
          brand: "#76b900",
          n000: "#ffffff",
          n050: "#f2f2f2",
          n100: "#e2e2e2",
          n200: "#d8d8d8",
          n300: "#c6c6c6",
          n400: "#8f8f8f",
          n500: "#767676",
          n600: "#5e5e5e",
          n700: "#343434",
          n800: "#292929",
          n900: "#202020",
          n950: "#121212",
          n1000: "#000000",
          g050: "#e4fabe",
          g100: "#caf087",
          g200: "#b6e95d",
          g300: "#9fd73d",
          g400: "#659f00",
          g500: "#538300",
          g600: "#4d6721",
          g700: "#253a00",
          g800: "#1d2e00",
          g900: "#172400",
          g950: "#0d1400",
          t050: "#e1f7f3",
          t100: "#b7eee4",
          t200: "#a0e6d9",
          t300: "#7cd7c7",
          t400: "#1fa18d",
          t500: "#008471",
          t600: "#006b5e",
          t700: "#003b35",
          t800: "#002f2b",
          t900: "#002522",
          t950: "#001514",
          b050: "#e9f4fb",
          b100: "#cde6fa",
          b200: "#badef8",
          b300: "#9accf2",
          b400: "#3a96d9",
          b500: "#2378ca",
          b600: "#2a63ba",
          b700: "#013076",
          b800: "#00265e",
          b900: "#001e4b",
          b950: "#00112c",
          p050: "#fbeefe",
          p100: "#f1dcf7",
          p200: "#ead1f3",
          p300: "#debae8",
          p400: "#b579c6",
          p500: "#a05ab4",
          p600: "#8c3ca0",
          p700: "#5a066d",
          p800: "#490457",
          p900: "#3b0047",
          p950: "#25002c",
          r050: "#ffefed",
          r100: "#ffdad6",
          r200: "#ffceca",
          r300: "#feb3ad",
          r400: "#ec6358",
          r500: "#dc3528",
          r600: "#b6251b",
          r700: "#6c0d08",
          r800: "#570704",
          r900: "#480200",
          r950: "#2d0100",
          y050: "#f9f4ca",
          y100: "#f6e383",
          y200: "#f3d85d",
          y300: "#e7c32b",
          y400: "#c58420",
          y500: "#a96700",
          y600: "#924c00",
          y700: "#5a2400",
          y800: "#491c00",
          y900: "#3a1500",
          y950: "#220c00",
        };
      Object.keys(e2);
      let e1 = { nvidiaSans: "NVIDIA Sans", jetbrainsMono: "JetBrains Mono" };
      Object.keys(e1);
      let e5 = { heading: "125%", text: "100%", body: "150%" };
      Object.keys(e5);
      let e3 = {
        xs: "10px",
        sm: "12px",
        ms: "14px",
        md: "16px",
        ml: "20px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
      };
      Object.keys(e3);
      let e8 = { less: "-1.5%", none: "0%", more: "5%" };
      Object.keys(e8);
      let e4 = {
        xxl: "64rem",
        xl: "48rem",
        lg: "32rem",
        ml: "24rem",
        md: "16rem",
        ms: "12rem",
        sm: "8rem",
        xs: "4rem",
        xxs: "2rem",
      };
      Object.keys(e4);
      let e6 = {
        xxl: "64px",
        xl: "48px",
        lg: "32px",
        ml: "24px",
        md: "16px",
        ms: "12px",
        sm: "8px",
        xs: "4px",
        xxs: "2px",
      };
      Object.keys(e6);
      let e7 = { lg: "4px", md: "2px", sm: "1px" };
      Object.keys(e7);
      let e9 = {
        xxl: "1600px",
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
        xs: "320px",
      };
      Object.keys(e9);
      let te = {
        lightHigh: "0px 8px 10px 0 #00000026",
        lightMid: "0px 4px 5px 0 #0000001f",
        lightLow: "0px 2px 3px 0 #00000024",
        lightLower: "0px 1px 3px 0 #00000033",
        darkHigh: "0px 8px 10px 0 #0000004d",
        darkMid: "0px 4px 5px 0 #0000003d",
        darkLow: "0px 2px 4px 0 #00000047",
        darkLower: "0px 1px 3px 0 #00000066",
      };
      Object.keys(te);
      let tt = {
        surfaceFgHighestPrimary: "#f2f2f2",
        surfaceFgHighestSecondary: "#c6c6c6",
        surfaceFgHighestDisabled: "#8f8f8f",
        surfaceFgHighestPlaceholder: "#767676",
        surfaceFgHighestStrong: "#ffffff",
        surfaceFgHighestActive: "#659f00",
        surfaceFgHighestActiveHover: "#9fd73d",
        surfaceFgHigherPrimary: "#f2f2f2",
        surfaceFgHigherSecondary: "#c6c6c6",
        surfaceFgHigherDisabled: "#8f8f8f",
        surfaceFgHigherPlaceholder: "#767676",
        surfaceFgHigherStrong: "#ffffff",
        surfaceFgHigherActive: "#659f00",
        surfaceFgHigherActiveHover: "#9fd73d",
        surfaceFgHighPrimary: "#f2f2f2",
        surfaceFgHighSecondary: "#c6c6c6",
        surfaceFgHighDisabled: "#8f8f8f",
        surfaceFgHighPlaceholder: "#767676",
        surfaceFgHighStrong: "#ffffff",
        surfaceFgHighActive: "#659f00",
        surfaceFgHighActiveHover: "#9fd73d",
        surfaceFgMidPrimary: "#f2f2f2",
        surfaceFgMidSecondary: "#c6c6c6",
        surfaceFgMidDisabled: "#8f8f8f",
        surfaceFgMidPlaceholder: "#767676",
        surfaceFgMidStrong: "#ffffff",
        surfaceFgMidActive: "#659f00",
        surfaceFgMidActiveHover: "#9fd73d",
        surfaceFgLowPrimary: "#f2f2f2",
        surfaceFgLowSecondary: "#c6c6c6",
        surfaceFgLowDisabled: "#8f8f8f",
        surfaceFgLowPlaceholder: "#767676",
        surfaceFgLowStrong: "#ffffff",
        surfaceFgLowActive: "#659f00",
        surfaceFgLowActiveHover: "#9fd73d",
        surfaceFgLowerPrimary: "#f2f2f2",
        surfaceFgLowerSecondary: "#c6c6c6",
        surfaceFgLowerDisabled: "#8f8f8f",
        surfaceFgLowerPlaceholder: "#767676",
        surfaceFgLowerStrong: "#ffffff",
        surfaceFgLowerActive: "#659f00",
        surfaceFgLowerActiveHover: "#9fd73d",
        surfaceFgLowestPrimary: "#f2f2f2",
        surfaceFgLowestSecondary: "#c6c6c6",
        surfaceFgLowestDisabled: "#8f8f8f",
        surfaceFgLowestPlaceholder: "#767676",
        surfaceFgLowestStrong: "#ffffff",
        surfaceFgLowestActive: "#659f00",
        surfaceFgLowestActiveHover: "#9fd73d",
        surfaceFgInverse: "#f2f2f2",
        surfaceFgTooltip: "#202020",
        surfaceFgSubtle: "#202020",
        surfaceFillDefault: "#343434",
        surfaceFillHover: "#767676",
        surfaceFillActive: "#659f00",
        surfaceFillActiveHover: "#538300",
        surfaceFillSelected: "#9fd73d",
        surfaceFillSelectedDisabled: "#9fd73d",
        surfaceBgHighest: "#000000",
        surfaceBgHigher: "#5e5e5e",
        surfaceBgHigh: "#5e5e5e",
        surfaceBgMid: "#343434",
        surfaceBgLow: "#292929",
        surfaceBgLower: "#202020",
        surfaceBgLowest: "#121212",
        surfaceBgCanvas: "#202020",
        surfaceBgTooltip: "#343434",
        surfaceBorderHighest: "#343434",
        surfaceBorderHighestHover: "#767676",
        surfaceBorderHighestDisabled: "#292929",
        surfaceBorderHighestActive: "#659f00",
        surfaceBorderHighestActiveHover: "#9fd73d",
        surfaceBorderHigher: "#343434",
        surfaceBorderHigherHover: "#767676",
        surfaceBorderHigherDisabled: "#292929",
        surfaceBorderHigherActive: "#659f00",
        surfaceBorderHigherActiveHover: "#9fd73d",
        surfaceBorderHigh: "#343434",
        surfaceBorderHighHover: "#767676",
        surfaceBorderHighDisabled: "#292929",
        surfaceBorderHighActive: "#659f00",
        surfaceBorderHighActiveHover: "#9fd73d",
        surfaceBorderMid: "#343434",
        surfaceBorderMidHover: "#767676",
        surfaceBorderMidDisabled: "#292929",
        surfaceBorderMidActive: "#659f00",
        surfaceBorderMidActiveHover: "#9fd73d",
        surfaceBorderLow: "#343434",
        surfaceBorderLowHover: "#767676",
        surfaceBorderLowDisabled: "#292929",
        surfaceBorderLowActive: "#659f00",
        surfaceBorderLowActiveHover: "#9fd73d",
        surfaceBorderLower: "#343434",
        surfaceBorderLowerHover: "#767676",
        surfaceBorderLowerDisabled: "#292929",
        surfaceBorderLowerActive: "#659f00",
        surfaceBorderLowerActiveHover: "#9fd73d",
        surfaceBorderLowest: "#343434",
        surfaceBorderLowestHover: "#767676",
        surfaceBorderLowestDisabled: "#292929",
        surfaceBorderLowestActive: "#659f00",
        surfaceBorderLowestActiveHover: "#9fd73d",
        surfaceBorderStatic: "#5e5e5e",
        menuFgDefault: "#c6c6c6",
        menuFgHover: "#f2f2f2",
        menuFgActive: "#f2f2f2",
        menuFgComplete: "#f2f2f2",
        menuFgSelected: "#f2f2f2",
        menuFgDisabled: "#8f8f8f",
        menuFgPlaceholder: "#767676",
        menuFgDanger: "#dc3528",
        menuFgDangerHover: "#ffffff",
        menuFgPrimary: "#f2f2f2",
        menuFgHeader: "#c6c6c6",
        menuFgFooter: "#c6c6c6",
        menuBgDefault: "#292929",
        menuBgHover: "#343434",
        menuBgActive: "#5e5e5e",
        menuBgComplete: "#9fd73d",
        menuBgSelected: "#202020",
        menuBgDisabled: "#292929",
        menuBgPlaceholder: "#292929",
        menuBgDanger: "#292929",
        menuBgDangerHover: "#dc3528",
        menuBgBase: "#000000",
        menuBgBaseSelected: "#000000",
        menuBorderDefault: "#343434",
        menuBorderHover: "#767676",
        menuBorderActive: "#343434",
        menuBorderComplete: "#659f00",
        menuBorderSelected: "#659f00",
        menuBorderDisabled: "#343434",
        menuBorderPlaceholder: "#343434",
        inputFgDefault: "#767676",
        inputFgHover: "#767676",
        inputFgActive: "#f2f2f2",
        inputFgComplete: "#f2f2f2",
        inputFgDisabled: "#8f8f8f",
        inputFgError: "#f2f2f2",
        inputFgErrorMessage: "#dc3528",
        inputFgSuccess: "#f2f2f2",
        inputFgSuccessMessage: "#659f00",
        inputFgLabel: "#c6c6c6",
        inputFgRequired: "#dc3528",
        inputFgSelected: "#ffffff",
        inputFgSelectedDisabled: "#8f8f8f",
        inputFgIcon: "#c6c6c6",
        inputFgIconHover: "#f2f2f2",
        inputFgIconActive: "#f2f2f2",
        inputFgIconComplete: "#c6c6c6",
        inputFgIconDisabled: "#8f8f8f",
        inputFgIconError: "#dc3528",
        inputFgIconSuccess: "#659f00",
        inputBgDefault: "#202020",
        inputBgHover: "#202020",
        inputBgActive: "#343434",
        inputBgComplete: "#000000",
        inputBgDisabled: "#343434",
        inputBgError: "#343434",
        inputBgSuccess: "#000000",
        inputBgBase: "#5e5e5e",
        inputBgBaseDisabled: "#343434",
        inputBgSelected: "#659f00",
        inputBgSelectedDisabled: "#4d6721",
        inputBorderDefault: "#8f8f8f",
        inputBorderHover: "#d8d8d8",
        inputBorderActive: "#659f00",
        inputBorderComplete: "#8f8f8f",
        inputBorderDisabled: "#767676",
        inputBorderError: "#dc3528",
        inputBorderSuccess: "#659f00",
        inputBorderBase: "#767676",
        actionFgDefault: "#f2f2f2",
        actionFgHover: "#f2f2f2",
        actionFgActive: "#f2f2f2",
        actionFgDisabled: "#8f8f8f",
        actionFgSelected: "#659f00",
        actionFgSelectedHover: "#538300",
        actionFgSelectedActive: "#9fd73d",
        actionFgSelectedDisabled: "#8f8f8f",
        actionFgError: "#dc3528",
        actionFgErrorHover: "#b6251b",
        actionFgErrorActive: "#ec6358",
        actionFgErrorDisabled: "#8f8f8f",
        actionFgPrimary: "#ffffff",
        actionFgPrimaryHover: "#ffffff",
        actionFgPrimaryActive: "#ffffff",
        actionFgPrimaryDisabled: "#767676",
        actionFgSecondary: "#f2f2f2",
        actionFgSecondaryHover: "#f2f2f2",
        actionFgSecondaryActive: "#f2f2f2",
        actionFgSecondaryDisabled: "#767676",
        actionFgTertiary: "#f2f2f2",
        actionFgTertiaryHover: "#f2f2f2",
        actionFgTertiaryActive: "#f2f2f2",
        actionFgTertiaryDisabled: "#767676",
        actionFgPrimaryDanger: "#ffffff",
        actionFgPrimaryDangerHover: "#ffffff",
        actionFgPrimaryDangerActive: "#ffffff",
        actionFgPrimaryDangerDisabled: "#ffffff",
        actionFgSecondaryDanger: "#dc3528",
        actionFgSecondaryDangerHover: "#dc3528",
        actionFgSecondaryDangerActive: "#ec6358",
        actionFgSecondaryDangerDisabled: "#767676",
        actionFgTertiaryDanger: "#dc3528",
        actionFgTertiaryDangerHover: "#dc3528",
        actionFgTertiaryDangerActive: "#ec6358",
        actionFgTertiaryDangerDisabled: "#767676",
        actionFgInverse: "#ffffff",
        actionBgDefault: "#292929",
        actionBgHover: "#121212",
        actionBgActive: "#000000",
        actionBgDisabled: "#202020",
        actionBgSelected: "#172400",
        actionBgSelectedHover: "#1d2e00",
        actionBgSelectedActive: "#253a00",
        actionBgSelectedDisabled: "#202020",
        actionBgError: "#2d0100",
        actionBgErrorHover: "#480200",
        actionBgErrorActive: "#6c0d08",
        actionBgErrorDisabled: "#202020",
        actionBgPrimary: "#659f00",
        actionBgPrimaryHover: "#538300",
        actionBgPrimaryActive: "#253a00",
        actionBgPrimaryDisabled: "#343434",
        actionBgSecondary: "#292929",
        actionBgSecondaryHover: "#121212",
        actionBgSecondaryActive: "#000000",
        actionBgSecondaryDisabled: "#292929",
        actionBgTertiaryHover: "#202020",
        actionBgTertiaryActive: "#000000",
        actionBgPrimaryDanger: "#dc3528",
        actionBgPrimaryDangerHover: "#b6251b",
        actionBgPrimaryDangerActive: "#6c0d08",
        actionBgPrimaryDangerDisabled: "#343434",
        actionBgSecondaryDanger: "#292929",
        actionBgSecondaryDangerHover: "#480200",
        actionBgSecondaryDangerActive: "#6c0d08",
        actionBgSecondaryDangerDisabled: "#292929",
        actionBgTertiaryDangerHover: "#2d0100",
        actionBgTertiaryDangerActive: "#6c0d08",
        actionBorderDefault: "#767676",
        actionBorderHover: "#8f8f8f",
        actionBorderActive: "#d8d8d8",
        actionBorderDisabled: "#5e5e5e",
        actionBorderSelected: "#659f00",
        actionBorderSelectedHover: "#538300",
        actionBorderSelectedActive: "#9fd73d",
        actionBorderSelectedDisabled: "#343434",
        actionBorderError: "#dc3528",
        actionBorderErrorHover: "#b6251b",
        actionBorderErrorActive: "#ec6358",
        actionBorderErrorDisabled: "#343434",
        actionBorderPrimary: "#659f00",
        actionBorderPrimaryHover: "#9fd73d",
        actionBorderPrimaryActive: "#9fd73d",
        actionBorderPrimaryDisabled: "#767676",
        actionBorderSecondary: "#c6c6c6",
        actionBorderSecondaryHover: "#c6c6c6",
        actionBorderSecondaryActive: "#e2e2e2",
        actionBorderSecondaryDisabled: "#767676",
        actionBorderPrimaryDanger: "#dc3528",
        actionBorderPrimaryDangerHover: "#ec6358",
        actionBorderPrimaryDangerActive: "#ec6358",
        actionBorderPrimaryDangerDisabled: "#767676",
        actionBorderSecondaryDanger: "#dc3528",
        actionBorderSecondaryDangerHover: "#dc3528",
        actionBorderSecondaryDangerActive: "#ec6358",
        actionBorderSecondaryDangerDisabled: "#767676",
        actionBorderInverse: "#ffffff",
        statusFgInfo: "#2378ca",
        statusFgInfoHover: "#2a63ba",
        statusFgInfoActive: "#013076",
        statusFgSuccess: "#659f00",
        statusFgSuccessHover: "#538300",
        statusFgSuccessActive: "#4d6721",
        statusFgCaution: "#a96700",
        statusFgCautionHover: "#924c00",
        statusFgCautionActive: "#5a2400",
        statusFgError: "#dc3528",
        statusFgErrorHover: "#b6251b",
        statusFgErrorActive: "#6c0d08",
        statusFgNeutral: "#5e5e5e",
        statusFgNeutralHover: "#343434",
        statusFgNeutralActive: "#000000",
        statusFgPrimary: "#f2f2f2",
        statusFgSecondary: "#c6c6c6",
        statusFgInverse: "#f2f2f2",
        statusFgReverse: "#202020",
        statusBgInfo: "#cde6fa",
        statusBgSuccess: "#caf087",
        statusBgCaution: "#f6e383",
        statusBgError: "#ffdad6",
        statusBgNeutral: "#d8d8d8",
        statusBgBase: "#343434",
        statusBgSolidInfo: "#2378ca",
        statusBgSolidSuccess: "#659f00",
        statusBgSolidCaution: "#e7c32b",
        statusBgSolidError: "#dc3528",
        statusBorderInfo: "#2378ca",
        statusBorderSuccess: "#659f00",
        statusBorderCaution: "#a96700",
        statusBorderError: "#dc3528",
        statusBorderNeutral: "#8f8f8f",
        accentFgTeal: "#008471",
        accentFgRed: "#dc3528",
        accentFgGray: "#343434",
        accentFgBlue: "#2378ca",
        accentFgPurple: "#a05ab4",
        accentFgYellow: "#924c00",
        accentFgGreen: "#4d6721",
        accentFgInverse: "#ffffff",
        accentBgTealHover: "#e1f7f3",
        accentBgTealActive: "#b7eee4",
        accentBgRedHover: "#ffefed",
        accentBgRedActive: "#ffdad6",
        accentBgGrayHover: "#e2e2e2",
        accentBgGrayActive: "#d8d8d8",
        accentBgBlueHover: "#e9f4fb",
        accentBgBlueActive: "#cde6fa",
        accentBgPurpleHover: "#fbeefe",
        accentBgPurpleActive: "#f1dcf7",
        accentBgYellowHover: "#f9f4ca",
        accentBgYellowActive: "#f6e383",
        accentBgGreenHover: "#e4fabe",
        accentBgGreenActive: "#caf087",
        accentBgSolidTeal: "#008471",
        accentBgSolidTealHover: "#006b5e",
        accentBgSolidTealActive: "#003b35",
        accentBgSolidRed: "#dc3528",
        accentBgSolidRedHover: "#b6251b",
        accentBgSolidRedActive: "#6c0d08",
        accentBgSolidGray: "#5e5e5e",
        accentBgSolidGrayHover: "#343434",
        accentBgSolidGrayActive: "#000000",
        accentBgSolidBlue: "#2378ca",
        accentBgSolidBlueHover: "#2a63ba",
        accentBgSolidBlueActive: "#013076",
        accentBgSolidPurple: "#a05ab4",
        accentBgSolidPurpleHover: "#8c3ca0",
        accentBgSolidPurpleActive: "#5a066d",
        accentBgSolidYellow: "#a96700",
        accentBgSolidYellowHover: "#924c00",
        accentBgSolidYellowActive: "#5a2400",
        accentBgSolidGreen: "#538300",
        accentBgSolidGreenHover: "#4d6721",
        accentBgSolidGreenActive: "#253a00",
        accentBorderTeal: "#008471",
        accentBorderRed: "#dc3528",
        accentBorderGray: "#343434",
        accentBorderBlue: "#2378ca",
        accentBorderPurple: "#a05ab4",
        accentBorderYellow: "#924c00",
        accentBorderGreen: "#4d6721",
      };
      Object.keys(tt);
      let tr = {
        surfaceModal: "0px 8px 10px 0 #0000004d",
        surfacePageHeader: "0px 2px 4px 0 #00000047",
        surfacePopover: "0px 4px 5px 0 #0000003d",
        surfaceCarouselButton: "0px 2px 3px 0 #00000024",
        surfaceSidePanelRight: "-4px 0px 5px 0 #00000040",
        surfaceSidePanelLeft: "4px 0px 5px 0 #00000040",
        menuDropdown: "0px 4px 5px 0 #0000003d",
        menuPopout: "0px 2px 4px 0 #00000047",
        inputToggle: "0px 1px 3px 0 #00000066",
        statusNotification: "0px 4px 5px 0 #0000003d",
      };
      Object.keys(tr);
      let tn = {
        surfaceFgHighestPrimary: "#202020",
        surfaceFgHighestSecondary: "#5e5e5e",
        surfaceFgHighestDisabled: "#767676",
        surfaceFgHighestPlaceholder: "#8f8f8f",
        surfaceFgHighestStrong: "#000000",
        surfaceFgHighestActive: "#659f00",
        surfaceFgHighestActiveHover: "#538300",
        surfaceFgHigherPrimary: "#202020",
        surfaceFgHigherSecondary: "#5e5e5e",
        surfaceFgHigherDisabled: "#767676",
        surfaceFgHigherPlaceholder: "#8f8f8f",
        surfaceFgHigherStrong: "#000000",
        surfaceFgHigherActive: "#659f00",
        surfaceFgHigherActiveHover: "#538300",
        surfaceFgHighPrimary: "#202020",
        surfaceFgHighSecondary: "#5e5e5e",
        surfaceFgHighDisabled: "#767676",
        surfaceFgHighPlaceholder: "#8f8f8f",
        surfaceFgHighStrong: "#000000",
        surfaceFgHighActive: "#659f00",
        surfaceFgHighActiveHover: "#538300",
        surfaceFgMidPrimary: "#202020",
        surfaceFgMidSecondary: "#5e5e5e",
        surfaceFgMidDisabled: "#767676",
        surfaceFgMidPlaceholder: "#8f8f8f",
        surfaceFgMidStrong: "#000000",
        surfaceFgMidActive: "#659f00",
        surfaceFgMidActiveHover: "#538300",
        surfaceFgLowPrimary: "#202020",
        surfaceFgLowSecondary: "#5e5e5e",
        surfaceFgLowDisabled: "#767676",
        surfaceFgLowPlaceholder: "#8f8f8f",
        surfaceFgLowStrong: "#000000",
        surfaceFgLowActive: "#659f00",
        surfaceFgLowActiveHover: "#538300",
        surfaceFgLowerPrimary: "#202020",
        surfaceFgLowerSecondary: "#5e5e5e",
        surfaceFgLowerDisabled: "#767676",
        surfaceFgLowerPlaceholder: "#8f8f8f",
        surfaceFgLowerStrong: "#000000",
        surfaceFgLowerActive: "#659f00",
        surfaceFgLowerActiveHover: "#538300",
        surfaceFgLowestPrimary: "#202020",
        surfaceFgLowestSecondary: "#5e5e5e",
        surfaceFgLowestDisabled: "#767676",
        surfaceFgLowestPlaceholder: "#8f8f8f",
        surfaceFgLowestStrong: "#000000",
        surfaceFgLowestActive: "#659f00",
        surfaceFgLowestActiveHover: "#538300",
        surfaceFgInverse: "#ffffff",
        surfaceFgTooltip: "#f2f2f2",
        surfaceFgSubtle: "#f2f2f2",
        surfaceBgHighest: "#ffffff",
        surfaceBgHigher: "#d8d8d8",
        surfaceBgHigh: "#e2e2e2",
        surfaceBgMid: "#f2f2f2",
        surfaceBgLow: "#ffffff",
        surfaceBgLower: "#ffffff",
        surfaceBgLowest: "#f2f2f2",
        surfaceBgCanvas: "#f2f2f2",
        surfaceBgTooltip: "#343434",
        surfaceBorderHighest: "#d8d8d8",
        surfaceBorderHighestHover: "#8f8f8f",
        surfaceBorderHighestDisabled: "#e2e2e2",
        surfaceBorderHighestActive: "#659f00",
        surfaceBorderHighestActiveHover: "#538300",
        surfaceBorderHigher: "#d8d8d8",
        surfaceBorderHigherHover: "#8f8f8f",
        surfaceBorderHigherDisabled: "#e2e2e2",
        surfaceBorderHigherActive: "#659f00",
        surfaceBorderHigherActiveHover: "#538300",
        surfaceBorderHigh: "#d8d8d8",
        surfaceBorderHighHover: "#8f8f8f",
        surfaceBorderHighDisabled: "#e2e2e2",
        surfaceBorderHighActive: "#659f00",
        surfaceBorderHighActiveHover: "#538300",
        surfaceBorderMid: "#d8d8d8",
        surfaceBorderMidHover: "#8f8f8f",
        surfaceBorderMidDisabled: "#e2e2e2",
        surfaceBorderMidActive: "#659f00",
        surfaceBorderMidActiveHover: "#538300",
        surfaceBorderLow: "#d8d8d8",
        surfaceBorderLowHover: "#8f8f8f",
        surfaceBorderLowDisabled: "#e2e2e2",
        surfaceBorderLowActive: "#659f00",
        surfaceBorderLowActiveHover: "#538300",
        surfaceBorderLower: "#d8d8d8",
        surfaceBorderLowerHover: "#8f8f8f",
        surfaceBorderLowerDisabled: "#e2e2e2",
        surfaceBorderLowerActive: "#659f00",
        surfaceBorderLowerActiveHover: "#538300",
        surfaceBorderLowest: "#d8d8d8",
        surfaceBorderLowestHover: "#8f8f8f",
        surfaceBorderLowestDisabled: "#e2e2e2",
        surfaceBorderLowestActive: "#659f00",
        surfaceBorderLowestActiveHover: "#538300",
        surfaceBorderStatic: "#c6c6c6",
        menuFgDefault: "#5e5e5e",
        menuFgHover: "#202020",
        menuFgActive: "#202020",
        menuFgComplete: "#202020",
        menuFgSelected: "#202020",
        menuFgDisabled: "#767676",
        menuFgPlaceholder: "#8f8f8f",
        menuFgDanger: "#dc3528",
        menuFgDangerHover: "#ffffff",
        menuFgPrimary: "#202020",
        menuFgHeader: "#5e5e5e",
        menuFgFooter: "#5e5e5e",
        menuBgDefault: "#ffffff",
        menuBgHover: "#f2f2f2",
        menuBgActive: "#e2e2e2",
        menuBgComplete: "#9fd73d",
        menuBgSelected: "#f2f2f2",
        menuBgDisabled: "#ffffff",
        menuBgPlaceholder: "#ffffff",
        menuBgDanger: "#ffffff",
        menuBgDangerHover: "#dc3528",
        menuBgBase: "#ffffff",
        menuBgBaseSelected: "#ffffff",
        menuBorderDefault: "#d8d8d8",
        menuBorderHover: "#8f8f8f",
        menuBorderActive: "#d8d8d8",
        menuBorderComplete: "#659f00",
        menuBorderSelected: "#659f00",
        menuBorderDisabled: "#d8d8d8",
        menuBorderPlaceholder: "#d8d8d8",
        inputFgDefault: "#8f8f8f",
        inputFgHover: "#8f8f8f",
        inputFgActive: "#202020",
        inputFgComplete: "#202020",
        inputFgDisabled: "#767676",
        inputFgError: "#202020",
        inputFgErrorMessage: "#dc3528",
        inputFgSuccess: "#202020",
        inputFgSuccessMessage: "#659f00",
        inputFgLabel: "#5e5e5e",
        inputFgRequired: "#dc3528",
        inputFgSelected: "#ffffff",
        inputFgSelectedDisabled: "#f2f2f2",
        inputFgIcon: "#5e5e5e",
        inputFgIconHover: "#202020",
        inputFgIconActive: "#202020",
        inputFgIconComplete: "#5e5e5e",
        inputFgIconDisabled: "#767676",
        inputFgIconError: "#dc3528",
        inputFgIconSuccess: "#659f00",
        inputBgDefault: "#ffffff",
        inputBgHover: "#ffffff",
        inputBgActive: "#f2f2f2",
        inputBgComplete: "#ffffff",
        inputBgDisabled: "#f2f2f2",
        inputBgError: "#f2f2f2",
        inputBgSuccess: "#ffffff",
        inputBgBase: "#c6c6c6",
        inputBgBaseDisabled: "#e2e2e2",
        inputBgSelected: "#659f00",
        inputBgSelectedDisabled: "#9fd73d",
        inputBorderDefault: "#c6c6c6",
        inputBorderHover: "#767676",
        inputBorderActive: "#659f00",
        inputBorderComplete: "#c6c6c6",
        inputBorderDisabled: "#d8d8d8",
        inputBorderError: "#dc3528",
        inputBorderSuccess: "#659f00",
        inputBorderBase: "#8f8f8f",
        actionFgDefault: "#5e5e5e",
        actionFgHover: "#5e5e5e",
        actionFgActive: "#5e5e5e",
        actionFgDisabled: "#767676",
        actionFgSelected: "#659f00",
        actionFgSelectedHover: "#538300",
        actionFgSelectedActive: "#253a00",
        actionFgSelectedDisabled: "#767676",
        actionFgError: "#dc3528",
        actionFgErrorHover: "#b6251b",
        actionFgErrorActive: "#570704",
        actionFgErrorDisabled: "#767676",
        actionFgPrimary: "#ffffff",
        actionFgPrimaryHover: "#ffffff",
        actionFgPrimaryActive: "#ffffff",
        actionFgPrimaryDisabled: "#ffffff",
        actionFgSecondary: "#5e5e5e",
        actionFgSecondaryHover: "#5e5e5e",
        actionFgSecondaryActive: "#202020",
        actionFgSecondaryDisabled: "#c6c6c6",
        actionFgTertiary: "#5e5e5e",
        actionFgTertiaryHover: "#5e5e5e",
        actionFgTertiaryActive: "#202020",
        actionFgTertiaryDisabled: "#c6c6c6",
        actionFgPrimaryDanger: "#ffffff",
        actionFgPrimaryDangerHover: "#ffffff",
        actionFgPrimaryDangerActive: "#ffffff",
        actionFgPrimaryDangerDisabled: "#ffffff",
        actionFgSecondaryDanger: "#dc3528",
        actionFgSecondaryDangerHover: "#dc3528",
        actionFgSecondaryDangerActive: "#6c0d08",
        actionFgSecondaryDangerDisabled: "#c6c6c6",
        actionFgTertiaryDanger: "#dc3528",
        actionFgTertiaryDangerHover: "#dc3528",
        actionFgTertiaryDangerActive: "#6c0d08",
        actionFgTertiaryDangerDisabled: "#c6c6c6",
        actionFgInverse: "#ffffff",
        actionBgDefault: "#ffffff",
        actionBgHover: "#e2e2e2",
        actionBgActive: "#c6c6c6",
        actionBgDisabled: "#f2f2f2",
        actionBgSelected: "#e4fabe",
        actionBgSelectedHover: "#caf087",
        actionBgSelectedActive: "#9fd73d",
        actionBgSelectedDisabled: "#f2f2f2",
        actionBgError: "#ffefed",
        actionBgErrorHover: "#ffdad6",
        actionBgErrorActive: "#feb3ad",
        actionBgErrorDisabled: "#f2f2f2",
        actionBgPrimary: "#659f00",
        actionBgPrimaryHover: "#538300",
        actionBgPrimaryActive: "#253a00",
        actionBgPrimaryDisabled: "#d8d8d8",
        actionBgSecondary: "#ffffff",
        actionBgSecondaryHover: "#e2e2e2",
        actionBgSecondaryActive: "#c6c6c6",
        actionBgSecondaryDisabled: "#ffffff",
        actionBgTertiaryHover: "#f2f2f2",
        actionBgTertiaryActive: "#c6c6c6",
        actionBgPrimaryDanger: "#dc3528",
        actionBgPrimaryDangerHover: "#b6251b",
        actionBgPrimaryDangerActive: "#570704",
        actionBgPrimaryDangerDisabled: "#d8d8d8",
        actionBgSecondaryDanger: "#ffffff",
        actionBgSecondaryDangerHover: "#ffdad6",
        actionBgSecondaryDangerActive: "#feb3ad",
        actionBgSecondaryDangerDisabled: "#ffffff",
        actionBgTertiaryDangerHover: "#ffefed",
        actionBgTertiaryDangerActive: "#feb3ad",
        actionBorderDefault: "#8f8f8f",
        actionBorderHover: "#767676",
        actionBorderActive: "#343434",
        actionBorderDisabled: "#c6c6c6",
        actionBorderSelected: "#659f00",
        actionBorderSelectedHover: "#538300",
        actionBorderSelectedActive: "#253a00",
        actionBorderSelectedDisabled: "#d8d8d8",
        actionBorderError: "#dc3528",
        actionBorderErrorHover: "#b6251b",
        actionBorderErrorActive: "#570704",
        actionBorderErrorDisabled: "#d8d8d8",
        actionBorderPrimary: "#659f00",
        actionBorderPrimaryHover: "#253a00",
        actionBorderPrimaryActive: "#253a00",
        actionBorderPrimaryDisabled: "#d8d8d8",
        actionBorderSecondary: "#5e5e5e",
        actionBorderSecondaryHover: "#5e5e5e",
        actionBorderSecondaryActive: "#202020",
        actionBorderSecondaryDisabled: "#d8d8d8",
        actionBorderPrimaryDanger: "#dc3528",
        actionBorderPrimaryDangerHover: "#570704",
        actionBorderPrimaryDangerActive: "#570704",
        actionBorderPrimaryDangerDisabled: "#d8d8d8",
        actionBorderSecondaryDanger: "#dc3528",
        actionBorderSecondaryDangerHover: "#dc3528",
        actionBorderSecondaryDangerActive: "#6c0d08",
        actionBorderSecondaryDangerDisabled: "#d8d8d8",
        actionBorderInverse: "#ffffff",
        statusFgInfo: "#2378ca",
        statusFgInfoHover: "#2a63ba",
        statusFgInfoActive: "#013076",
        statusFgSuccess: "#659f00",
        statusFgSuccessHover: "#538300",
        statusFgSuccessActive: "#4d6721",
        statusFgCaution: "#a96700",
        statusFgCautionHover: "#924c00",
        statusFgCautionActive: "#5a2400",
        statusFgError: "#dc3528",
        statusFgErrorHover: "#b6251b",
        statusFgErrorActive: "#6c0d08",
        statusFgNeutral: "#5e5e5e",
        statusFgNeutralHover: "#343434",
        statusFgNeutralActive: "#000000",
        statusFgPrimary: "#202020",
        statusFgSecondary: "#5e5e5e",
        statusFgInverse: "#f2f2f2",
        statusFgReverse: "#202020",
        statusBgInfo: "#e9f4fb",
        statusBgSuccess: "#e4fabe",
        statusBgCaution: "#f9f4ca",
        statusBgError: "#ffefed",
        statusBgNeutral: "#e2e2e2",
        statusBgBase: "#ffffff",
        statusBgSolidInfo: "#2378ca",
        statusBgSolidSuccess: "#659f00",
        statusBgSolidCaution: "#e7c32b",
        statusBgSolidError: "#dc3528",
        statusBorderInfo: "#2378ca",
        statusBorderSuccess: "#659f00",
        statusBorderCaution: "#a96700",
        statusBorderError: "#dc3528",
        statusBorderNeutral: "#8f8f8f",
        accentFgTeal: "#008471",
        accentFgRed: "#dc3528",
        accentFgGray: "#343434",
        accentFgBlue: "#2378ca",
        accentFgPurple: "#a05ab4",
        accentFgYellow: "#924c00",
        accentFgGreen: "#4d6721",
        accentFgInverse: "#ffffff",
        accentBgTealHover: "#e1f7f3",
        accentBgTealActive: "#b7eee4",
        accentBgRedHover: "#ffefed",
        accentBgRedActive: "#ffdad6",
        accentBgGrayHover: "#e2e2e2",
        accentBgGrayActive: "#d8d8d8",
        accentBgBlueHover: "#e9f4fb",
        accentBgBlueActive: "#cde6fa",
        accentBgPurpleHover: "#fbeefe",
        accentBgPurpleActive: "#f1dcf7",
        accentBgYellowHover: "#f9f4ca",
        accentBgYellowActive: "#f6e383",
        accentBgGreenHover: "#e4fabe",
        accentBgGreenActive: "#caf087",
        accentBgSolidTeal: "#008471",
        accentBgSolidTealHover: "#006b5e",
        accentBgSolidTealActive: "#003b35",
        accentBgSolidRed: "#dc3528",
        accentBgSolidRedHover: "#b6251b",
        accentBgSolidRedActive: "#6c0d08",
        accentBgSolidGray: "#5e5e5e",
        accentBgSolidGrayHover: "#343434",
        accentBgSolidGrayActive: "#000000",
        accentBgSolidBlue: "#2378ca",
        accentBgSolidBlueHover: "#2a63ba",
        accentBgSolidBlueActive: "#013076",
        accentBgSolidPurple: "#a05ab4",
        accentBgSolidPurpleHover: "#8c3ca0",
        accentBgSolidPurpleActive: "#5a066d",
        accentBgSolidYellow: "#a96700",
        accentBgSolidYellowHover: "#924c00",
        accentBgSolidYellowActive: "#5a2400",
        accentBgSolidGreen: "#538300",
        accentBgSolidGreenHover: "#4d6721",
        accentBgSolidGreenActive: "#253a00",
        accentBorderTeal: "#008471",
        accentBorderRed: "#dc3528",
        accentBorderGray: "#343434",
        accentBorderBlue: "#2378ca",
        accentBorderPurple: "#a05ab4",
        accentBorderYellow: "#924c00",
        accentBorderGreen: "#4d6721",
      };
      Object.keys(tn);
      let ti = {
        surfaceModal: "0px 8px 10px 0 #00000026",
        surfacePageHeader: "0px 2px 3px 0 #00000024",
        surfacePopover: "0px 4px 5px 0 #0000001f",
        surfaceCarouselButton: "0px 2px 3px 0 #00000024",
        surfaceSidePanelRight: "-4px 0px 5px 0 #0000001f",
        surfaceSidePanelLeft: "4px 0px 5px 0 #0000001f",
        menuDropdown: "0px 4px 5px 0 #0000001f",
        menuPopout: "0px 2px 3px 0 #00000024",
        inputToggle: "0px 1px 3px 0 #00000033",
        statusNotification: "0px 4px 5px 0 #0000001f",
      };
      Object.keys(ti);
      let {
        config: ta,
        createTheme: to,
        css: tl,
        getCssText: tc,
        globalCss: ts,
        keyframes: td,
        reset: tf,
        theme: tu,
      } = ek({
        media: {
          xxl: `(max-width: ${e9.xxl})`,
          xl: `(max-width: ${e9.xl})`,
          lg: `(max-width: ${e9.lg})`,
          md: `(max-width: ${e9.md})`,
          sm: `(max-width: ${e9.sm})`,
          xs: `(max-width: ${e9.xs})`,
        },
        theme: {
          colors: Object.assign(Object.assign({}, e2), tn),
          shadows: te,
          borderWidths: e7,
          fonts: e1,
          fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
          fontSizes: e3,
          lineHeights: e5,
          letterSpacings: e8,
          sizes: e4,
          space: e6,
        },
      });
      Object.keys(tu.colors),
        Object.keys(tu.space),
        to({ colors: Object.assign(Object.assign({}, e2), tn), shadows: ti }),
        to({ colors: Object.assign(Object.assign({}, e2), tt), shadows: tr });
      let tg =
        "https://kui-storybook.ngc.nvidia.com/assets/fonts/NVIDIA_Sans_WOFF";
      ts({
        "@font-face": [
          {
            fontFamily: e1.nvidiaSans,
            fontStyle: "normal",
            fontWeight: 300,
            fontDisplay: "fallback",
            src: `url("${tg}/NVIDIASans_W_Lt.woff") format('woff')`,
          },
          {
            fontFamily: e1.nvidiaSans,
            fontStyle: "italic",
            fontWeight: 300,
            fontDisplay: "fallback",
            src: `url("${tg}/NVIDIASans_W_LtIt.woff") format('woff')`,
          },
          {
            fontFamily: e1.nvidiaSans,
            fontStyle: "normal",
            fontWeight: 400,
            fontDisplay: "fallback",
            src: `url("${tg}/NVIDIASans_W_Rg.woff") format('woff')`,
          },
          {
            fontFamily: e1.nvidiaSans,
            fontStyle: "italic",
            fontWeight: 400,
            fontDisplay: "fallback",
            src: `url("${tg}/NVIDIASans_W_It.woff") format('woff')`,
          },
          {
            fontFamily: e1.nvidiaSans,
            fontStyle: "normal",
            fontWeight: 500,
            fontDisplay: "fallback",
            src: `url("${tg}/NVIDIASans_W_Md.woff") format('woff')`,
          },
          {
            fontFamily: e1.nvidiaSans,
            fontStyle: "italic",
            fontWeight: 500,
            fontDisplay: "fallback",
            src: `url("${tg}/NVIDIASans_W_MdIt.woff") format('woff')`,
          },
          {
            fontFamily: e1.nvidiaSans,
            fontStyle: "normal",
            fontWeight: 700,
            fontDisplay: "fallback",
            src: `url("${tg}/NVIDIASans_W_Bd.woff") format('woff')`,
          },
          {
            fontFamily: e1.nvidiaSans,
            fontStyle: "italic",
            fontWeight: 700,
            fontDisplay: "fallback",
            src: `url("${tg}/NVIDIASans_W_BdIt.woff") format('woff')`,
          },
        ],
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
        },
      }),
        Object.assign({ initial: "initial" }, e9),
        eH({});
      let tp = {
          nvidiaSans: `"${B.nvidiaSans}", "${B.nvidiaSans} Fallback"`,
          jetbrainsMono: `"${B.jetbrainsMono}", "${B.jetbrainsMono} Fallback"`,
        },
        tv = {
          xxl: `(max-width: ${w.xxl})`,
          xl: `(max-width: ${w.xl})`,
          lg: `(max-width: ${w.lg})`,
          md: `(max-width: ${w.md})`,
          sm: `(max-width: ${w.sm})`,
          xs: `(max-width: ${w.xs})`,
        },
        {
          config: tm,
          createTheme: th,
          css: ty,
          getCssText: tb,
          globalCss: tS,
          keyframes: tB,
          reset: tx,
          theme: tF,
        } = ek({
          media: tv,
          theme: {
            colors: Object.assign(Object.assign({}, S), C),
            shadows: Object.assign(Object.assign({}, k), E),
            borderWidths: D,
            fonts: tp,
            fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
            fontSizes: F,
            lineHeights: x,
            letterSpacings: A,
            space: O,
          },
        });
      Object.keys(tF.colors),
        Object.keys(tF.fontSizes),
        Object.keys(tF.space),
        th({
          colors: Object.assign(Object.assign({}, S), C),
          shadows: Object.assign(Object.assign({}, k), E),
        }),
        th({
          colors: Object.assign(Object.assign({}, S), H),
          shadows: Object.assign(Object.assign({}, k), j),
        });
      let tA = (e) =>
          `url("https://brand-assets.cne.ngc.nvidia.com/assets/fonts/nvidia-sans/1.0.0/NVIDIASans_${e}.woff2") format("woff2")`,
        tw = "fallback",
        tO = "normal",
        tk = "italic",
        tD = `"${B.nvidiaSans}"`,
        tH = `"${B.nvidiaSans} Fallback"`,
        tj = `"${B.jetbrainsMono} Fallback"`;
      tS({
        "@font-face": [
          {
            fontFamily: tD,
            fontStyle: tO,
            fontWeight: 300,
            fontDisplay: tw,
            src: tA("Lt"),
          },
          {
            fontFamily: tD,
            fontStyle: tk,
            fontWeight: 300,
            fontDisplay: tw,
            src: tA("LtIt"),
          },
          {
            fontFamily: tD,
            fontStyle: tO,
            fontWeight: 400,
            fontDisplay: tw,
            src: tA("Rg"),
          },
          {
            fontFamily: tD,
            fontStyle: tk,
            fontWeight: 400,
            fontDisplay: tw,
            src: tA("It"),
          },
          {
            fontFamily: tD,
            fontStyle: tO,
            fontWeight: 500,
            fontDisplay: tw,
            src: tA("Md"),
          },
          {
            fontFamily: tD,
            fontStyle: tk,
            fontWeight: 500,
            fontDisplay: tw,
            src: tA("MdIt"),
          },
          {
            fontFamily: tD,
            fontStyle: tO,
            fontWeight: 700,
            fontDisplay: tw,
            src: tA("Bd"),
          },
          {
            fontFamily: tD,
            fontStyle: tk,
            fontWeight: 700,
            fontDisplay: tw,
            src: tA("BdIt"),
          },
          {
            fontFamily: tj,
            fontStyle: tk,
            fontWeight: 300,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: tj,
            fontStyle: tk,
            fontWeight: 400,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: tj,
            fontStyle: tk,
            fontWeight: 500,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: tj,
            fontStyle: tk,
            fontWeight: 700,
            src: "local('Courier New Bold Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: tj,
            fontStyle: tO,
            fontWeight: 300,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: tj,
            fontStyle: tO,
            fontWeight: 400,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: tj,
            fontStyle: tO,
            fontWeight: 500,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: tj,
            fontStyle: tO,
            fontWeight: 700,
            src: "local('Courier New Bold')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: tH,
            fontStyle: tk,
            fontWeight: 300,
            src: "local('Arial Italic')",
            ascentOverride: "97.18%",
            descentOverride: "27.77%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.84%",
          },
          {
            fontFamily: tH,
            fontStyle: tk,
            fontWeight: 400,
            src: "local('Arial Italic')",
            ascentOverride: "96.18%",
            descentOverride: "27.48%",
            lineGapOverride: "0.00%",
            sizeAdjust: "101.89%",
          },
          {
            fontFamily: tH,
            fontStyle: tk,
            fontWeight: 500,
            src: "local('Arial Italic')",
            ascentOverride: "94.81%",
            descentOverride: "27.09%",
            lineGapOverride: "0.00%",
            sizeAdjust: "103.36%",
          },
          {
            fontFamily: tH,
            fontStyle: tk,
            fontWeight: 700,
            src: "local('Arial Bold Italic')",
            ascentOverride: "101.13%",
            descentOverride: "28.90%",
            lineGapOverride: "0.00%",
            sizeAdjust: "96.90%",
          },
          {
            fontFamily: tH,
            fontStyle: tO,
            fontWeight: 300,
            src: "local('Arial')",
            ascentOverride: "93.59%",
            descentOverride: "26.74%",
            lineGapOverride: "0.00%",
            sizeAdjust: "104.71%",
          },
          {
            fontFamily: tH,
            fontStyle: tO,
            fontWeight: 400,
            src: "local('Arial')",
            ascentOverride: "92.70%",
            descentOverride: "26.49%",
            lineGapOverride: "0.00%",
            sizeAdjust: "105.71%",
          },
          {
            fontFamily: tH,
            fontStyle: tO,
            fontWeight: 500,
            src: "local('Arial')",
            ascentOverride: "91.53%",
            descentOverride: "26.15%",
            lineGapOverride: "0.00%",
            sizeAdjust: "107.07%",
          },
          {
            fontFamily: tH,
            fontStyle: tO,
            fontWeight: 700,
            src: "local('Arial Bold')",
            ascentOverride: "97.74%",
            descentOverride: "27.93%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.26%",
          },
        ],
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
        },
      }),
        Object.assign({ initial: "initial" }, w),
        eH({});
      let tC = ({
          bgColor: e = "menuBgHover",
          showBar: t = !1,
          showBg: r = !0,
        }) => {
          let { colors: n, space: i } = tF,
            a = r ? n[e] : "transparent",
            o = i.xs,
            l = t ? n.menuBorderSelected : a;
          return `linear-gradient(to right, ${l}, ${l} ${o}, ${a} ${o}, ${a})`;
        },
        tE = () => ({
          display: "none",
          opacity: 0,
          pointerEvents: "none",
          visibility: "none",
          zIndex: "-1",
        }),
        tP = parseInt(`${F.md}`.replace(/\D/g, ""), 10),
        tN = -((32 + tP / 2 - 1) * 1);
      ty({});
      let tI = ty({
          color: tF.colors.menuFgPrimary,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
          flex: "0 0 48px",
          height: "48px",
          width: "48px",
          variants: {
            isActive: {
              true: {
                color: tF.colors.menuFgSelected,
                background: tC({ showBar: !0 }),
              },
            },
            isAccordionHeader: { true: { position: "absolute", right: 0 } },
            isInverted: { true: { transform: "rotate(180deg)" } },
            hasActiveSubItem: { true: { color: tF.colors.menuFgSelected } },
          },
        }),
        tM = ty({ display: "flex", height: "32px", position: "relative" }),
        tz = ty({
          color: tF.colors.menuFgPrimary,
          lineHeight: tF.lineHeights.text,
          display: "flex",
          alignItems: "center",
          height: "100%",
          flex: "1 1 100%",
          position: "absolute",
          inset: "0",
          zIndex: 5,
          textDecoration: "underline",
          textDecorationColor: "transparent",
          textDecorationThickness: "2px",
          textUnderlineOffset: "3px",
          "&:hover": {
            color: tF.colors.menuFgHover,
            background: tC({ showBar: !1 }),
          },
          variants: {
            hasActiveSubItem: { true: {} },
            isActive: {
              true: {
                color: tF.colors.menuFgSelected,
                fontWeight: tF.fontWeights.medium,
                textDecorationColor: tF.colors.menuBorderSelected,
                "&, &:hover": { background: tC({ showBar: !0 }) },
              },
            },
            isCollapsed: {
              true: { paddingLeft: tF.space.md },
              false: { paddingLeft: "48px" },
            },
            isAccordionOpen: { true: {} },
            isTooltipOpen: { true: {} },
          },
          compoundVariants: [
            {
              isAccordionOpen: !0,
              hasActiveSubItem: !0,
              css: {
                "&": { background: tC({ showBar: !0, showBg: !1 }) },
                "&:hover": { background: tC({ showBar: !0 }) },
              },
            },
          ],
        }),
        tT = `.${tz.className}`,
        tL = ty({
          color: tF.colors.menuFgPrimary,
          fontWeight: tF.fontWeights.bold,
          lineHeight: tF.lineHeights.text,
          display: "flex",
          alignItems: "center",
          height: "100%",
          flex: "1 1 100%",
          zIndex: 5,
          position: "absolute",
          inset: "0",
          textDecoration: "underline",
          textDecorationColor: "transparent",
          textDecorationThickness: "2px",
          textUnderlineOffset: "3px",
          variants: {
            isCollapsed: {
              true: { paddingLeft: tF.space.md },
              false: { paddingLeft: "48px" },
            },
          },
        }),
        tW = `.${tL.className}`,
        tR = ty({
          backgroundColor: tF.colors.menuBgBase,
          height: "100%",
          position: "relative",
          variants: { isCollapsed: { true: { width: "48px" } } },
        }),
        t$ = ty({ variants: { isCollapsed: { true: tE() } } }),
        tV = ty({
          position: "relative",
          variants: {
            hasActiveSubItem: {
              true: { background: tC({ showBar: !0, showBg: !1 }) },
            },
          },
        }),
        tG = ty({
          display: "flex",
          alignItems: "center",
          height: "48px",
          fontWeight: 500,
          position: "relative",
          variants: {
            hasActiveSubItem: {
              true: {
                [`${tT}, ${tW}`]: {
                  background: tC({ showBar: !0, showBg: !1 }),
                },
              },
            },
          },
        }),
        t_ = ty({}),
        tU = ty({
          background: "none",
          border: "0 none",
          cursor: "pointer",
          fontSize: "initial",
          display: "flex",
          position: "relative",
          height: "48px",
          zIndex: 10,
          "&:hover": { backgroundColor: tF.colors.menuBgHover },
          variants: {
            isAccordionHeader: {
              true: { width: "100%", flex: "0 0 100%" },
              false: {
                width: "48px",
                flex: "0 0 48px",
                marginLeft: "auto",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          },
        }),
        tq = ty({ variants: { isCollapsed: { false: tE() } } }),
        tY = ty({}),
        tK = ty({
          display: "flex",
          alignItems: "center",
          height: "32px",
          fontWeight: 500,
          position: "relative",
        }),
        tX = ty({
          backgroundColor: tF.colors.menuBgBase,
          borderRight: `1px solid ${tF.colors.menuBorderDefault}`,
          boxShadow: tF.shadows.menuPopout,
          minWidth: "240px",
        }),
        tZ = ty({
          background: "none",
          border: "0 none",
          cursor: "pointer",
          fontSize: "initial",
          position: "relative",
          zIndex: 10,
          "&:hover": { background: tC({ showBar: !1 }) },
          variants: {
            hasActiveSubItem: {
              true: { "&, &:hover": { background: tC({ showBar: !0 }) } },
            },
          },
        });
      ((a = u || (u = {})).VerticalNav = "kui-vertical-nav"),
        (a.VerticalNavIcon = "kui-vertical-nav-icon"),
        (a.VerticalNavItem = "kui-vertical-nav-item"),
        (a.VerticalNavLink = "kui-vertical-nav-link"),
        (a.VerticalNavText = "kui-vertical-nav-text"),
        (a.VerticalNavMask = "kui-vertical-nav-mask"),
        (a.VerticalNavAccordionItem = "kui-vertical-nav-accordion-item"),
        (a.VerticalNavAccordionRoot = "kui-vertical-nav-accordion-root"),
        (a.VerticalNavAccordion = "kui-vertical-nav-accordion"),
        (a.VerticalNavAccordionHeader = "kui-vertical-nav-accordion-header"),
        (a.VerticalNavAccordionTrigger = "kui-vertical-nav-accordion-trigger"),
        (a.VerticalNavAccordionContent = "kui-vertical-nav-accordion-content"),
        (a.VerticalNavTooltipRoot = "kui-vertical-nav-tooltip-root"),
        (a.VerticalNavTooltip = "kui-vertical-nav-Tooltip"),
        (a.VerticalNavTooltipHeader = "kui-vertical-nav-tooltip-header"),
        (a.VerticalNavTooltipTrigger = "kui-vertical-nav-tooltip-trigger"),
        (a.VerticalNavTooltipContent = "kui-vertical-nav-tooltip-content");
      let tJ = {
          nvidiaSans: `"${B.nvidiaSans}", "${B.nvidiaSans} Fallback"`,
          jetbrainsMono: `"${B.jetbrainsMono}", "${B.jetbrainsMono} Fallback"`,
        },
        tQ = {
          xxl: `(max-width: ${w.xxl})`,
          xl: `(max-width: ${w.xl})`,
          lg: `(max-width: ${w.lg})`,
          md: `(max-width: ${w.md})`,
          sm: `(max-width: ${w.sm})`,
          xs: `(max-width: ${w.xs})`,
        },
        {
          config: t0,
          createTheme: t2,
          css: t1,
          getCssText: t5,
          globalCss: t3,
          keyframes: t8,
          reset: t4,
          theme: t6,
        } = ek({
          media: tQ,
          theme: {
            colors: Object.assign(Object.assign({}, S), C),
            shadows: Object.assign(Object.assign({}, k), E),
            borderWidths: D,
            fonts: tJ,
            fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
            fontSizes: F,
            lineHeights: x,
            letterSpacings: A,
            space: O,
          },
        });
      Object.keys(t6.colors),
        Object.keys(t6.fontSizes),
        Object.keys(t6.space),
        t2({
          colors: Object.assign(Object.assign({}, S), C),
          shadows: Object.assign(Object.assign({}, k), E),
        }),
        t2({
          colors: Object.assign(Object.assign({}, S), H),
          shadows: Object.assign(Object.assign({}, k), j),
        });
      let t7 = (e) =>
          `url("https://brand-assets.cne.ngc.nvidia.com/assets/fonts/nvidia-sans/1.0.0/NVIDIASans_${e}.woff2") format("woff2")`,
        t9 = "fallback",
        re = "normal",
        rt = "italic",
        rr = `"${B.nvidiaSans}"`,
        rn = `"${B.nvidiaSans} Fallback"`,
        ri = `"${B.jetbrainsMono} Fallback"`,
        ra = t3({
          "@font-face": [
            {
              fontFamily: rr,
              fontStyle: re,
              fontWeight: 300,
              fontDisplay: t9,
              src: t7("Lt"),
            },
            {
              fontFamily: rr,
              fontStyle: rt,
              fontWeight: 300,
              fontDisplay: t9,
              src: t7("LtIt"),
            },
            {
              fontFamily: rr,
              fontStyle: re,
              fontWeight: 400,
              fontDisplay: t9,
              src: t7("Rg"),
            },
            {
              fontFamily: rr,
              fontStyle: rt,
              fontWeight: 400,
              fontDisplay: t9,
              src: t7("It"),
            },
            {
              fontFamily: rr,
              fontStyle: re,
              fontWeight: 500,
              fontDisplay: t9,
              src: t7("Md"),
            },
            {
              fontFamily: rr,
              fontStyle: rt,
              fontWeight: 500,
              fontDisplay: t9,
              src: t7("MdIt"),
            },
            {
              fontFamily: rr,
              fontStyle: re,
              fontWeight: 700,
              fontDisplay: t9,
              src: t7("Bd"),
            },
            {
              fontFamily: rr,
              fontStyle: rt,
              fontWeight: 700,
              fontDisplay: t9,
              src: t7("BdIt"),
            },
            {
              fontFamily: ri,
              fontStyle: rt,
              fontWeight: 300,
              src: "local('Courier New Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ri,
              fontStyle: rt,
              fontWeight: 400,
              src: "local('Courier New Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ri,
              fontStyle: rt,
              fontWeight: 500,
              src: "local('Courier New Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ri,
              fontStyle: rt,
              fontWeight: 700,
              src: "local('Courier New Bold Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ri,
              fontStyle: re,
              fontWeight: 300,
              src: "local('Courier New')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ri,
              fontStyle: re,
              fontWeight: 400,
              src: "local('Courier New')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ri,
              fontStyle: re,
              fontWeight: 500,
              src: "local('Courier New')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ri,
              fontStyle: re,
              fontWeight: 700,
              src: "local('Courier New Bold')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: rn,
              fontStyle: rt,
              fontWeight: 300,
              src: "local('Arial Italic')",
              ascentOverride: "97.18%",
              descentOverride: "27.77%",
              lineGapOverride: "0.00%",
              sizeAdjust: "100.84%",
            },
            {
              fontFamily: rn,
              fontStyle: rt,
              fontWeight: 400,
              src: "local('Arial Italic')",
              ascentOverride: "96.18%",
              descentOverride: "27.48%",
              lineGapOverride: "0.00%",
              sizeAdjust: "101.89%",
            },
            {
              fontFamily: rn,
              fontStyle: rt,
              fontWeight: 500,
              src: "local('Arial Italic')",
              ascentOverride: "94.81%",
              descentOverride: "27.09%",
              lineGapOverride: "0.00%",
              sizeAdjust: "103.36%",
            },
            {
              fontFamily: rn,
              fontStyle: rt,
              fontWeight: 700,
              src: "local('Arial Bold Italic')",
              ascentOverride: "101.13%",
              descentOverride: "28.90%",
              lineGapOverride: "0.00%",
              sizeAdjust: "96.90%",
            },
            {
              fontFamily: rn,
              fontStyle: re,
              fontWeight: 300,
              src: "local('Arial')",
              ascentOverride: "93.59%",
              descentOverride: "26.74%",
              lineGapOverride: "0.00%",
              sizeAdjust: "104.71%",
            },
            {
              fontFamily: rn,
              fontStyle: re,
              fontWeight: 400,
              src: "local('Arial')",
              ascentOverride: "92.70%",
              descentOverride: "26.49%",
              lineGapOverride: "0.00%",
              sizeAdjust: "105.71%",
            },
            {
              fontFamily: rn,
              fontStyle: re,
              fontWeight: 500,
              src: "local('Arial')",
              ascentOverride: "91.53%",
              descentOverride: "26.15%",
              lineGapOverride: "0.00%",
              sizeAdjust: "107.07%",
            },
            {
              fontFamily: rn,
              fontStyle: re,
              fontWeight: 700,
              src: "local('Arial Bold')",
              ascentOverride: "97.74%",
              descentOverride: "27.93%",
              lineGapOverride: "0.00%",
              sizeAdjust: "100.26%",
            },
          ],
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
          },
        });
      Object.assign({ initial: "initial" }, w);
      let ro = eH({}),
        rl = {
          nvidiaSans: `"${B.nvidiaSans}", "${B.nvidiaSans} Fallback"`,
          jetbrainsMono: `"${B.jetbrainsMono}", "${B.jetbrainsMono} Fallback"`,
        },
        rc = {
          xxl: `(max-width: ${w.xxl})`,
          xl: `(max-width: ${w.xl})`,
          lg: `(max-width: ${w.lg})`,
          md: `(max-width: ${w.md})`,
          sm: `(max-width: ${w.sm})`,
          xs: `(max-width: ${w.xs})`,
        },
        {
          config: rs,
          createTheme: rd,
          css: rf,
          getCssText: ru,
          globalCss: rg,
          keyframes: rp,
          reset: rv,
          theme: rm,
        } = ek({
          media: rc,
          theme: {
            colors: Object.assign(Object.assign({}, S), C),
            shadows: Object.assign(Object.assign({}, k), E),
            borderWidths: D,
            fonts: rl,
            fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
            fontSizes: F,
            lineHeights: x,
            letterSpacings: A,
            space: O,
          },
        });
      Object.keys(rm.colors), Object.keys(rm.fontSizes), Object.keys(rm.space);
      let rh = rd({
          colors: Object.assign(Object.assign({}, S), C),
          shadows: Object.assign(Object.assign({}, k), E),
        }),
        ry = rd({
          colors: Object.assign(Object.assign({}, S), H),
          shadows: Object.assign(Object.assign({}, k), j),
        }),
        rb = (e) =>
          `url("https://brand-assets.cne.ngc.nvidia.com/assets/fonts/nvidia-sans/1.0.0/NVIDIASans_${e}.woff2") format("woff2")`,
        rS = "fallback",
        rB = "normal",
        rx = "italic",
        rF = `"${B.nvidiaSans}"`,
        rA = `"${B.nvidiaSans} Fallback"`,
        rw = `"${B.jetbrainsMono} Fallback"`;
      rg({
        "@font-face": [
          {
            fontFamily: rF,
            fontStyle: rB,
            fontWeight: 300,
            fontDisplay: rS,
            src: rb("Lt"),
          },
          {
            fontFamily: rF,
            fontStyle: rx,
            fontWeight: 300,
            fontDisplay: rS,
            src: rb("LtIt"),
          },
          {
            fontFamily: rF,
            fontStyle: rB,
            fontWeight: 400,
            fontDisplay: rS,
            src: rb("Rg"),
          },
          {
            fontFamily: rF,
            fontStyle: rx,
            fontWeight: 400,
            fontDisplay: rS,
            src: rb("It"),
          },
          {
            fontFamily: rF,
            fontStyle: rB,
            fontWeight: 500,
            fontDisplay: rS,
            src: rb("Md"),
          },
          {
            fontFamily: rF,
            fontStyle: rx,
            fontWeight: 500,
            fontDisplay: rS,
            src: rb("MdIt"),
          },
          {
            fontFamily: rF,
            fontStyle: rB,
            fontWeight: 700,
            fontDisplay: rS,
            src: rb("Bd"),
          },
          {
            fontFamily: rF,
            fontStyle: rx,
            fontWeight: 700,
            fontDisplay: rS,
            src: rb("BdIt"),
          },
          {
            fontFamily: rw,
            fontStyle: rx,
            fontWeight: 300,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: rw,
            fontStyle: rx,
            fontWeight: 400,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: rw,
            fontStyle: rx,
            fontWeight: 500,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: rw,
            fontStyle: rx,
            fontWeight: 700,
            src: "local('Courier New Bold Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: rw,
            fontStyle: rB,
            fontWeight: 300,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: rw,
            fontStyle: rB,
            fontWeight: 400,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: rw,
            fontStyle: rB,
            fontWeight: 500,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: rw,
            fontStyle: rB,
            fontWeight: 700,
            src: "local('Courier New Bold')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: rA,
            fontStyle: rx,
            fontWeight: 300,
            src: "local('Arial Italic')",
            ascentOverride: "97.18%",
            descentOverride: "27.77%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.84%",
          },
          {
            fontFamily: rA,
            fontStyle: rx,
            fontWeight: 400,
            src: "local('Arial Italic')",
            ascentOverride: "96.18%",
            descentOverride: "27.48%",
            lineGapOverride: "0.00%",
            sizeAdjust: "101.89%",
          },
          {
            fontFamily: rA,
            fontStyle: rx,
            fontWeight: 500,
            src: "local('Arial Italic')",
            ascentOverride: "94.81%",
            descentOverride: "27.09%",
            lineGapOverride: "0.00%",
            sizeAdjust: "103.36%",
          },
          {
            fontFamily: rA,
            fontStyle: rx,
            fontWeight: 700,
            src: "local('Arial Bold Italic')",
            ascentOverride: "101.13%",
            descentOverride: "28.90%",
            lineGapOverride: "0.00%",
            sizeAdjust: "96.90%",
          },
          {
            fontFamily: rA,
            fontStyle: rB,
            fontWeight: 300,
            src: "local('Arial')",
            ascentOverride: "93.59%",
            descentOverride: "26.74%",
            lineGapOverride: "0.00%",
            sizeAdjust: "104.71%",
          },
          {
            fontFamily: rA,
            fontStyle: rB,
            fontWeight: 400,
            src: "local('Arial')",
            ascentOverride: "92.70%",
            descentOverride: "26.49%",
            lineGapOverride: "0.00%",
            sizeAdjust: "105.71%",
          },
          {
            fontFamily: rA,
            fontStyle: rB,
            fontWeight: 500,
            src: "local('Arial')",
            ascentOverride: "91.53%",
            descentOverride: "26.15%",
            lineGapOverride: "0.00%",
            sizeAdjust: "107.07%",
          },
          {
            fontFamily: rA,
            fontStyle: rB,
            fontWeight: 700,
            src: "local('Arial Bold')",
            ascentOverride: "97.74%",
            descentOverride: "27.93%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.26%",
          },
        ],
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
        },
      }),
        Object.assign({ initial: "initial" }, w),
        eH({});
      let rO = rf({
        display: "block",
        backgroundColor: rm.colors.displayBgCanvas,
        color: rm.colors.displayFgLowPrimary,
        fontFamily: rm.fonts.nvidiaSans,
        fontSize: rm.fontSizes.md,
        lineHeight: rm.lineHeights.body,
      });
      (g || (g = {})).Theme = "kui-theme";
      let rk = { theme: "light", withCanvas: !1, withReset: !1 },
        rD = new Map([
          ["light", rh.className],
          ["dark", ry.className],
        ]),
        rH = (e) => {
          var t;
          return e ? (null !== (t = rD.get(e)) && void 0 !== t ? t : e) : "";
        };
      var rj = r(4184);
      let rC = (0, eq.createContext)(void 0),
        rE = "undefined" != typeof window ? eq.useLayoutEffect : eq.useEffect,
        rP = () => (0, eq.useContext)(rC),
        rN = (0, eq.forwardRef)((e, t) => {
          var {
              className: r,
              css: n,
              theme: i = rk.theme,
              withCanvas: a = rk.withCanvas,
              withReset: o = rk.withReset,
            } = e,
            l = (function (e, t) {
              var r = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  0 > t.indexOf(n) &&
                  (r[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var i = 0, n = Object.getOwnPropertySymbols(e);
                  i < n.length;
                  i++
                )
                  0 > t.indexOf(n[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                    (r[n[i]] = e[n[i]]);
              return r;
            })(e, ["className", "css", "theme", "withCanvas", "withReset"]);
          let c = a ? rO({ css: n }) : ro({ css: n }),
            s = rH(i);
          return (
            rE(() => {
              o && ra();
            }, [o]),
            (0, b.jsx)(
              rC.Provider,
              Object.assign(
                { value: i },
                {
                  children: (0, b.jsx)(
                    "div",
                    Object.assign(
                      {
                        className: rj(r, c, s),
                        "data-testid": g.Theme,
                        ref: t,
                      },
                      l
                    )
                  ),
                }
              )
            )
          );
        });
      rN.displayName = "ThemeProvider";
      let rI = tl({
          display: "grid",
          flexGrow: 1,
          gridTemplateAreas: "'navbar navbar''sidebar content''sidebar footer'",
          gridTemplateRows: "3rem auto 1fr auto",
          "@lg": {
            gridTemplateAreas:
              "'navbar navbar''sidebar crumbs''sidebar content''sidebar footer'",
            gridTemplateColumns: "15rem 1fr",
            gridTemplateRows: "3rem auto 1fr auto",
          },
          variants: {
            isCollapsed: {
              true: { gridTemplateColumns: "".concat(48, "px 1fr auto") },
              false: { gridTemplateColumns: "15rem 1fr auto" },
            },
          },
        }),
        rM = (e) => {
          let { children: t } = e,
            { collapsed: r, theme: n } = eQ();
          return (0, b.jsx)(rN, {
            theme: n,
            withCanvas: !0,
            withReset: !0,
            children: (0, b.jsx)("div", {
              className: rI({ isCollapsed: r }),
              children: t,
            }),
          });
        },
        rz = tl({
          gridArea: "navbar",
          height: "".concat(3, "rem"),
          backgroundColor: tu.colors.surfaceBgLow,
          borderBottom: "1px solid ".concat(tu.colors.surfaceBorderStatic),
          position: "sticky",
          top: 0,
          zIndex: 10,
        }),
        rT = (e) => {
          let { children: t } = e;
          return (0, b.jsx)("div", { className: rz(), children: t });
        },
        rL = tl({
          boxSizing: "padding-box",
          gridArea: "sidebar",
          backgroundColor: tu.colors.surfaceBgLow,
          borderRight: "1px solid ".concat(tu.colors.surfaceBorderStatic),
          overflowY: "auto",
          maxHeight: "calc(100vh - ".concat(3, "rem)"),
          height: "100vh",
          position: "sticky",
          top: "".concat(3, "rem"),
          zIndex: 5,
        }),
        rW = (e) => {
          let { children: t } = e;
          return (0, b.jsx)("div", { className: rL(), children: t });
        },
        rR = tl({ gridArea: "content" }),
        r$ = (e) => {
          let { children: t } = e;
          return (0, b.jsx)("div", { className: rR(), children: t });
        },
        rV = {
          nvidiaSans: `"${B.nvidiaSans}", "${B.nvidiaSans} Fallback"`,
          jetbrainsMono: `"${B.jetbrainsMono}", "${B.jetbrainsMono} Fallback"`,
        },
        rG = {
          xxl: `(max-width: ${w.xxl})`,
          xl: `(max-width: ${w.xl})`,
          lg: `(max-width: ${w.lg})`,
          md: `(max-width: ${w.md})`,
          sm: `(max-width: ${w.sm})`,
          xs: `(max-width: ${w.xs})`,
        },
        {
          config: r_,
          createTheme: rU,
          css: rq,
          getCssText: rY,
          globalCss: rK,
          keyframes: rX,
          reset: rZ,
          theme: rJ,
        } = ek({
          media: rG,
          theme: {
            colors: Object.assign(Object.assign({}, S), C),
            shadows: Object.assign(Object.assign({}, k), E),
            borderWidths: D,
            fonts: rV,
            fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
            fontSizes: F,
            lineHeights: x,
            letterSpacings: A,
            space: O,
          },
        });
      Object.keys(rJ.colors),
        Object.keys(rJ.fontSizes),
        Object.keys(rJ.space),
        rU({
          colors: Object.assign(Object.assign({}, S), C),
          shadows: Object.assign(Object.assign({}, k), E),
        }),
        rU({
          colors: Object.assign(Object.assign({}, S), H),
          shadows: Object.assign(Object.assign({}, k), j),
        });
      let rQ = (e) =>
          `url("https://brand-assets.cne.ngc.nvidia.com/assets/fonts/nvidia-sans/1.0.0/NVIDIASans_${e}.woff2") format("woff2")`,
        r0 = "fallback",
        r2 = "normal",
        r1 = "italic",
        r5 = `"${B.nvidiaSans}"`,
        r3 = `"${B.nvidiaSans} Fallback"`,
        r8 = `"${B.jetbrainsMono} Fallback"`;
      rK({
        "@font-face": [
          {
            fontFamily: r5,
            fontStyle: r2,
            fontWeight: 300,
            fontDisplay: r0,
            src: rQ("Lt"),
          },
          {
            fontFamily: r5,
            fontStyle: r1,
            fontWeight: 300,
            fontDisplay: r0,
            src: rQ("LtIt"),
          },
          {
            fontFamily: r5,
            fontStyle: r2,
            fontWeight: 400,
            fontDisplay: r0,
            src: rQ("Rg"),
          },
          {
            fontFamily: r5,
            fontStyle: r1,
            fontWeight: 400,
            fontDisplay: r0,
            src: rQ("It"),
          },
          {
            fontFamily: r5,
            fontStyle: r2,
            fontWeight: 500,
            fontDisplay: r0,
            src: rQ("Md"),
          },
          {
            fontFamily: r5,
            fontStyle: r1,
            fontWeight: 500,
            fontDisplay: r0,
            src: rQ("MdIt"),
          },
          {
            fontFamily: r5,
            fontStyle: r2,
            fontWeight: 700,
            fontDisplay: r0,
            src: rQ("Bd"),
          },
          {
            fontFamily: r5,
            fontStyle: r1,
            fontWeight: 700,
            fontDisplay: r0,
            src: rQ("BdIt"),
          },
          {
            fontFamily: r8,
            fontStyle: r1,
            fontWeight: 300,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: r8,
            fontStyle: r1,
            fontWeight: 400,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: r8,
            fontStyle: r1,
            fontWeight: 500,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: r8,
            fontStyle: r1,
            fontWeight: 700,
            src: "local('Courier New Bold Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: r8,
            fontStyle: r2,
            fontWeight: 300,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: r8,
            fontStyle: r2,
            fontWeight: 400,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: r8,
            fontStyle: r2,
            fontWeight: 500,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: r8,
            fontStyle: r2,
            fontWeight: 700,
            src: "local('Courier New Bold')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: r3,
            fontStyle: r1,
            fontWeight: 300,
            src: "local('Arial Italic')",
            ascentOverride: "97.18%",
            descentOverride: "27.77%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.84%",
          },
          {
            fontFamily: r3,
            fontStyle: r1,
            fontWeight: 400,
            src: "local('Arial Italic')",
            ascentOverride: "96.18%",
            descentOverride: "27.48%",
            lineGapOverride: "0.00%",
            sizeAdjust: "101.89%",
          },
          {
            fontFamily: r3,
            fontStyle: r1,
            fontWeight: 500,
            src: "local('Arial Italic')",
            ascentOverride: "94.81%",
            descentOverride: "27.09%",
            lineGapOverride: "0.00%",
            sizeAdjust: "103.36%",
          },
          {
            fontFamily: r3,
            fontStyle: r1,
            fontWeight: 700,
            src: "local('Arial Bold Italic')",
            ascentOverride: "101.13%",
            descentOverride: "28.90%",
            lineGapOverride: "0.00%",
            sizeAdjust: "96.90%",
          },
          {
            fontFamily: r3,
            fontStyle: r2,
            fontWeight: 300,
            src: "local('Arial')",
            ascentOverride: "93.59%",
            descentOverride: "26.74%",
            lineGapOverride: "0.00%",
            sizeAdjust: "104.71%",
          },
          {
            fontFamily: r3,
            fontStyle: r2,
            fontWeight: 400,
            src: "local('Arial')",
            ascentOverride: "92.70%",
            descentOverride: "26.49%",
            lineGapOverride: "0.00%",
            sizeAdjust: "105.71%",
          },
          {
            fontFamily: r3,
            fontStyle: r2,
            fontWeight: 500,
            src: "local('Arial')",
            ascentOverride: "91.53%",
            descentOverride: "26.15%",
            lineGapOverride: "0.00%",
            sizeAdjust: "107.07%",
          },
          {
            fontFamily: r3,
            fontStyle: r2,
            fontWeight: 700,
            src: "local('Arial Bold')",
            ascentOverride: "97.74%",
            descentOverride: "27.93%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.26%",
          },
        ],
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
        },
      }),
        Object.assign({ initial: "initial" }, w),
        eH({});
      let r4 = rq({
          cursor: "pointer",
          border: `1px solid ${rJ.colors.g500}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: rJ.space.xs,
          fontSize: rJ.fontSizes.ms,
          fontWeight: rJ.fontWeights.medium,
          fontFamily: rJ.fonts.nvidiaSans,
          lineHeight: rJ.lineHeights.text,
          padding: `${rJ.space.sm} ${rJ.space.ms}`,
          "&:disabled:hover": { cursor: "not-allowed" },
          variants: {
            size: {
              large: { fontSize: rJ.fontSizes.md, padding: rJ.space.ms },
              small: { fontSize: rJ.fontSizes.sm, padding: rJ.space.ss },
              standard: { fontSize: rJ.fontSizes.ms, padding: rJ.space.sm },
              tiny: { fontSize: rJ.fontSizes.sm, padding: rJ.space.xs },
            },
            tone: {
              primary: {
                backgroundColor: rJ.colors.actionBgPrimary,
                borderColor: rJ.colors.actionBorderPrimary,
                color: rJ.colors.actionFgPrimary,
                "&:hover": {
                  backgroundColor: rJ.colors.actionBgPrimaryHover,
                  borderColor: rJ.colors.actionBorderPrimaryHover,
                  color: rJ.colors.actionFgPrimaryHover,
                },
                "&:active": {
                  backgroundColor: rJ.colors.actionBgPrimaryActive,
                  borderColor: rJ.colors.actionBorderPrimaryActive,
                  color: rJ.colors.actionFgPrimaryActive,
                },
                "&:disabled": {
                  backgroundColor: rJ.colors.actionBgPrimaryDisabled,
                  borderColor: rJ.colors.actionBorderPrimaryDisabled,
                  color: rJ.colors.actionFgPrimaryDisabled,
                },
              },
              secondary: {
                backgroundColor: rJ.colors.actionBgSecondary,
                borderColor: rJ.colors.actionBorderSecondary,
                color: rJ.colors.actionFgSecondary,
                "&:hover": {
                  backgroundColor: rJ.colors.actionBgSecondaryHover,
                  borderColor: rJ.colors.actionBorderSecondaryHover,
                  color: rJ.colors.actionFgSecondaryHover,
                },
                "&:active": {
                  backgroundColor: rJ.colors.actionBgSecondaryActive,
                  borderColor: rJ.colors.actionBorderSecondaryActive,
                  color: rJ.colors.actionFgSecondaryActive,
                },
                "&:disabled": {
                  backgroundColor: rJ.colors.actionBgSecondaryDisabled,
                  borderColor: rJ.colors.actionBorderSecondaryDisabled,
                  color: rJ.colors.actionFgSecondaryDisabled,
                },
              },
              tertiary: {
                backgroundColor: "transparent",
                borderColor: "transparent",
                color: rJ.colors.actionFgTertiary,
                "&:hover": {
                  backgroundColor: rJ.colors.actionBgTertiaryHover,
                  borderColor: "transparent",
                  color: rJ.colors.actionFgTertiaryHover,
                },
                "&:active": {
                  backgroundColor: rJ.colors.actionBgTertiaryActive,
                  borderColor: "transparent",
                  color: rJ.colors.actionFgTertiaryActive,
                },
                "&:disabled": {
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  color: rJ.colors.actionFgTertiaryDisabled,
                },
              },
            },
            danger: {
              true: {
                backgroundColor: rJ.colors.actionBgPrimaryDanger,
                borderColor: rJ.colors.actionBorderPrimaryDanger,
                color: rJ.colors.actionFgPrimaryDanger,
                "&:hover:not(:disabled)": {
                  backgroundColor: rJ.colors.actionBgPrimaryDangerHover,
                  borderColor: rJ.colors.actionBorderPrimaryDangerHover,
                },
                "&:active:not(:disabled)": {
                  backgroundColor: rJ.colors.actionBgPrimaryDangerActive,
                  borderColor: rJ.colors.actionBorderPrimaryDangerActive,
                },
              },
            },
          },
          compoundVariants: [
            {
              tone: "secondary",
              danger: !0,
              css: {
                backgroundColor: rJ.colors.actionBgSecondaryDanger,
                borderColor: rJ.colors.actionBorderSecondaryDanger,
                color: rJ.colors.actionFgSecondaryDanger,
                "&:hover:not(:disabled)": {
                  backgroundColor: rJ.colors.actionBgSecondaryDangerHover,
                  borderColor: rJ.colors.actionBorderSecondaryDangerHover,
                  color: rJ.colors.actionFgSecondaryDangerHover,
                },
                "&:active:not(:disabled)": {
                  backgroundColor: rJ.colors.actionBgSecondaryDangerActive,
                  borderColor: rJ.colors.actionBorderSecondaryDangerActive,
                  color: rJ.colors.actionFgSecondaryDangerActive,
                },
              },
            },
            {
              tone: "tertiary",
              danger: !0,
              css: {
                backgroundColor: "transparent",
                borderColor: "transparent",
                color: rJ.colors.actionFgTertiaryDanger,
                "&:hover:not(:disabled)": {
                  backgroundColor: rJ.colors.actionBgTertiaryDangerHover,
                  borderColor: "transparent",
                  color: rJ.colors.actionFgTertiaryDanger,
                },
                "&:active:not(:disabled)": {
                  backgroundColor: rJ.colors.actionBgTertiaryDangerActive,
                  borderColor: "transparent",
                  color: rJ.colors.actionFgTertiaryDangerActive,
                },
              },
            },
          ],
        }),
        r6 = { danger: !1, size: "standard", tone: "primary" };
      (p || (p = {})).Button = "kui-button";
      let r7 = (0, eq.forwardRef)((e, t) => {
        var {
            children: r,
            className: n,
            css: i,
            danger: a = r6.danger,
            size: o = r6.size,
            tone: l = r6.tone,
          } = e,
          c = (function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                0 > t.indexOf(n) &&
                (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var i = 0, n = Object.getOwnPropertySymbols(e);
                i < n.length;
                i++
              )
                0 > t.indexOf(n[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                  (r[n[i]] = e[n[i]]);
            return r;
          })(e, ["children", "className", "css", "danger", "size", "tone"]);
        let s = r4({ css: i, danger: a, size: o, tone: l }).className;
        return (0, b.jsx)(
          "button",
          Object.assign(
            { className: rj(s, n), "data-testid": p.Button, ref: t },
            c,
            { children: r }
          )
        );
      });
      r7.displayName = "Button";
      let r9 = {
          nvidiaSans: `"${B.nvidiaSans}", "${B.nvidiaSans} Fallback"`,
          jetbrainsMono: `"${B.jetbrainsMono}", "${B.jetbrainsMono} Fallback"`,
        },
        ne = {
          xxl: `(max-width: ${w.xxl})`,
          xl: `(max-width: ${w.xl})`,
          lg: `(max-width: ${w.lg})`,
          md: `(max-width: ${w.md})`,
          sm: `(max-width: ${w.sm})`,
          xs: `(max-width: ${w.xs})`,
        },
        {
          config: nt,
          createTheme: nr,
          css: nn,
          getCssText: ni,
          globalCss: na,
          keyframes: no,
          reset: nl,
          theme: nc,
        } = ek({
          media: ne,
          theme: {
            colors: Object.assign(Object.assign({}, S), C),
            shadows: Object.assign(Object.assign({}, k), E),
            borderWidths: D,
            fonts: r9,
            fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
            fontSizes: F,
            lineHeights: x,
            letterSpacings: A,
            space: O,
          },
        });
      Object.keys(nc.colors), Object.keys(nc.fontSizes);
      let ns = Object.keys(nc.space);
      nr({
        colors: Object.assign(Object.assign({}, S), C),
        shadows: Object.assign(Object.assign({}, k), E),
      }),
        nr({
          colors: Object.assign(Object.assign({}, S), H),
          shadows: Object.assign(Object.assign({}, k), j),
        });
      let nd = (e) =>
          `url("https://brand-assets.cne.ngc.nvidia.com/assets/fonts/nvidia-sans/1.0.0/NVIDIASans_${e}.woff2") format("woff2")`,
        nf = "fallback",
        nu = "normal",
        ng = "italic",
        np = `"${B.nvidiaSans}"`,
        nv = `"${B.nvidiaSans} Fallback"`,
        nm = `"${B.jetbrainsMono} Fallback"`;
      function nh(e, t) {
        let r = {};
        for (let n of e) r[n] = t(n);
        return r;
      }
      na({
        "@font-face": [
          {
            fontFamily: np,
            fontStyle: nu,
            fontWeight: 300,
            fontDisplay: nf,
            src: nd("Lt"),
          },
          {
            fontFamily: np,
            fontStyle: ng,
            fontWeight: 300,
            fontDisplay: nf,
            src: nd("LtIt"),
          },
          {
            fontFamily: np,
            fontStyle: nu,
            fontWeight: 400,
            fontDisplay: nf,
            src: nd("Rg"),
          },
          {
            fontFamily: np,
            fontStyle: ng,
            fontWeight: 400,
            fontDisplay: nf,
            src: nd("It"),
          },
          {
            fontFamily: np,
            fontStyle: nu,
            fontWeight: 500,
            fontDisplay: nf,
            src: nd("Md"),
          },
          {
            fontFamily: np,
            fontStyle: ng,
            fontWeight: 500,
            fontDisplay: nf,
            src: nd("MdIt"),
          },
          {
            fontFamily: np,
            fontStyle: nu,
            fontWeight: 700,
            fontDisplay: nf,
            src: nd("Bd"),
          },
          {
            fontFamily: np,
            fontStyle: ng,
            fontWeight: 700,
            fontDisplay: nf,
            src: nd("BdIt"),
          },
          {
            fontFamily: nm,
            fontStyle: ng,
            fontWeight: 300,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nm,
            fontStyle: ng,
            fontWeight: 400,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nm,
            fontStyle: ng,
            fontWeight: 500,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nm,
            fontStyle: ng,
            fontWeight: 700,
            src: "local('Courier New Bold Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nm,
            fontStyle: nu,
            fontWeight: 300,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nm,
            fontStyle: nu,
            fontWeight: 400,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nm,
            fontStyle: nu,
            fontWeight: 500,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nm,
            fontStyle: nu,
            fontWeight: 700,
            src: "local('Courier New Bold')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nv,
            fontStyle: ng,
            fontWeight: 300,
            src: "local('Arial Italic')",
            ascentOverride: "97.18%",
            descentOverride: "27.77%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.84%",
          },
          {
            fontFamily: nv,
            fontStyle: ng,
            fontWeight: 400,
            src: "local('Arial Italic')",
            ascentOverride: "96.18%",
            descentOverride: "27.48%",
            lineGapOverride: "0.00%",
            sizeAdjust: "101.89%",
          },
          {
            fontFamily: nv,
            fontStyle: ng,
            fontWeight: 500,
            src: "local('Arial Italic')",
            ascentOverride: "94.81%",
            descentOverride: "27.09%",
            lineGapOverride: "0.00%",
            sizeAdjust: "103.36%",
          },
          {
            fontFamily: nv,
            fontStyle: ng,
            fontWeight: 700,
            src: "local('Arial Bold Italic')",
            ascentOverride: "101.13%",
            descentOverride: "28.90%",
            lineGapOverride: "0.00%",
            sizeAdjust: "96.90%",
          },
          {
            fontFamily: nv,
            fontStyle: nu,
            fontWeight: 300,
            src: "local('Arial')",
            ascentOverride: "93.59%",
            descentOverride: "26.74%",
            lineGapOverride: "0.00%",
            sizeAdjust: "104.71%",
          },
          {
            fontFamily: nv,
            fontStyle: nu,
            fontWeight: 400,
            src: "local('Arial')",
            ascentOverride: "92.70%",
            descentOverride: "26.49%",
            lineGapOverride: "0.00%",
            sizeAdjust: "105.71%",
          },
          {
            fontFamily: nv,
            fontStyle: nu,
            fontWeight: 500,
            src: "local('Arial')",
            ascentOverride: "91.53%",
            descentOverride: "26.15%",
            lineGapOverride: "0.00%",
            sizeAdjust: "107.07%",
          },
          {
            fontFamily: nv,
            fontStyle: nu,
            fontWeight: 700,
            src: "local('Arial Bold')",
            ascentOverride: "97.74%",
            descentOverride: "27.93%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.26%",
          },
        ],
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
        },
      }),
        Object.assign({ initial: "initial" }, w),
        eH({});
      let ny = nn({
        display: "flex",
        variants: {
          align: nh(
            ["baseline", "center", "flex-end", "flex-start", "stretch"],
            (e) => ({ alignItems: e })
          ),
          direction: nh(
            ["column", "column-reverse", "row", "row-reverse"],
            (e) => ({ flexDirection: e })
          ),
          gap: nh(ns, (e) => ({ gap: nc.space[e] })),
          justify: nh(
            [
              "center",
              "flex-end",
              "flex-start",
              "space-around",
              "space-between",
              "space-evenly",
            ],
            (e) => ({ justifyContent: e })
          ),
          wrap: nh(["nowrap", "wrap", "wrap-reverse"], (e) => ({
            flexWrap: e,
          })),
        },
      });
      (v || (v = {})).Flex = "kui-flex";
      let nb = {
          nvidiaSans: `"${B.nvidiaSans}", "${B.nvidiaSans} Fallback"`,
          jetbrainsMono: `"${B.jetbrainsMono}", "${B.jetbrainsMono} Fallback"`,
        },
        nS = {
          xxl: `(max-width: ${w.xxl})`,
          xl: `(max-width: ${w.xl})`,
          lg: `(max-width: ${w.lg})`,
          md: `(max-width: ${w.md})`,
          sm: `(max-width: ${w.sm})`,
          xs: `(max-width: ${w.xs})`,
        },
        {
          config: nB,
          createTheme: nx,
          css: nF,
          getCssText: nA,
          globalCss: nw,
          keyframes: nO,
          reset: nk,
          theme: nD,
        } = ek({
          media: nS,
          theme: {
            colors: Object.assign(Object.assign({}, S), C),
            shadows: Object.assign(Object.assign({}, k), E),
            borderWidths: D,
            fonts: nb,
            fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
            fontSizes: F,
            lineHeights: x,
            letterSpacings: A,
            space: O,
          },
        });
      Object.keys(nD.colors), Object.keys(nD.fontSizes);
      let nH = Object.keys(nD.space);
      nx({
        colors: Object.assign(Object.assign({}, S), C),
        shadows: Object.assign(Object.assign({}, k), E),
      }),
        nx({
          colors: Object.assign(Object.assign({}, S), H),
          shadows: Object.assign(Object.assign({}, k), j),
        });
      let nj = (e) =>
          `url("https://brand-assets.cne.ngc.nvidia.com/assets/fonts/nvidia-sans/1.0.0/NVIDIASans_${e}.woff2") format("woff2")`,
        nC = "fallback",
        nE = "normal",
        nP = "italic",
        nN = `"${B.nvidiaSans}"`,
        nI = `"${B.nvidiaSans} Fallback"`,
        nM = `"${B.jetbrainsMono} Fallback"`;
      function nz(e, t) {
        let r = {};
        for (let n of e) r[n] = t(n);
        return r;
      }
      nw({
        "@font-face": [
          {
            fontFamily: nN,
            fontStyle: nE,
            fontWeight: 300,
            fontDisplay: nC,
            src: nj("Lt"),
          },
          {
            fontFamily: nN,
            fontStyle: nP,
            fontWeight: 300,
            fontDisplay: nC,
            src: nj("LtIt"),
          },
          {
            fontFamily: nN,
            fontStyle: nE,
            fontWeight: 400,
            fontDisplay: nC,
            src: nj("Rg"),
          },
          {
            fontFamily: nN,
            fontStyle: nP,
            fontWeight: 400,
            fontDisplay: nC,
            src: nj("It"),
          },
          {
            fontFamily: nN,
            fontStyle: nE,
            fontWeight: 500,
            fontDisplay: nC,
            src: nj("Md"),
          },
          {
            fontFamily: nN,
            fontStyle: nP,
            fontWeight: 500,
            fontDisplay: nC,
            src: nj("MdIt"),
          },
          {
            fontFamily: nN,
            fontStyle: nE,
            fontWeight: 700,
            fontDisplay: nC,
            src: nj("Bd"),
          },
          {
            fontFamily: nN,
            fontStyle: nP,
            fontWeight: 700,
            fontDisplay: nC,
            src: nj("BdIt"),
          },
          {
            fontFamily: nM,
            fontStyle: nP,
            fontWeight: 300,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nM,
            fontStyle: nP,
            fontWeight: 400,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nM,
            fontStyle: nP,
            fontWeight: 500,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nM,
            fontStyle: nP,
            fontWeight: 700,
            src: "local('Courier New Bold Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nM,
            fontStyle: nE,
            fontWeight: 300,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nM,
            fontStyle: nE,
            fontWeight: 400,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nM,
            fontStyle: nE,
            fontWeight: 500,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nM,
            fontStyle: nE,
            fontWeight: 700,
            src: "local('Courier New Bold')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: nI,
            fontStyle: nP,
            fontWeight: 300,
            src: "local('Arial Italic')",
            ascentOverride: "97.18%",
            descentOverride: "27.77%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.84%",
          },
          {
            fontFamily: nI,
            fontStyle: nP,
            fontWeight: 400,
            src: "local('Arial Italic')",
            ascentOverride: "96.18%",
            descentOverride: "27.48%",
            lineGapOverride: "0.00%",
            sizeAdjust: "101.89%",
          },
          {
            fontFamily: nI,
            fontStyle: nP,
            fontWeight: 500,
            src: "local('Arial Italic')",
            ascentOverride: "94.81%",
            descentOverride: "27.09%",
            lineGapOverride: "0.00%",
            sizeAdjust: "103.36%",
          },
          {
            fontFamily: nI,
            fontStyle: nP,
            fontWeight: 700,
            src: "local('Arial Bold Italic')",
            ascentOverride: "101.13%",
            descentOverride: "28.90%",
            lineGapOverride: "0.00%",
            sizeAdjust: "96.90%",
          },
          {
            fontFamily: nI,
            fontStyle: nE,
            fontWeight: 300,
            src: "local('Arial')",
            ascentOverride: "93.59%",
            descentOverride: "26.74%",
            lineGapOverride: "0.00%",
            sizeAdjust: "104.71%",
          },
          {
            fontFamily: nI,
            fontStyle: nE,
            fontWeight: 400,
            src: "local('Arial')",
            ascentOverride: "92.70%",
            descentOverride: "26.49%",
            lineGapOverride: "0.00%",
            sizeAdjust: "105.71%",
          },
          {
            fontFamily: nI,
            fontStyle: nE,
            fontWeight: 500,
            src: "local('Arial')",
            ascentOverride: "91.53%",
            descentOverride: "26.15%",
            lineGapOverride: "0.00%",
            sizeAdjust: "107.07%",
          },
          {
            fontFamily: nI,
            fontStyle: nE,
            fontWeight: 700,
            src: "local('Arial Bold')",
            ascentOverride: "97.74%",
            descentOverride: "27.93%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.26%",
          },
        ],
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
        },
      }),
        Object.assign({ initial: "initial" }, w),
        eH({}),
        nF({
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          variants: {
            distributeX: nz(
              [
                "center",
                "flex-end",
                "flex-start",
                "space-around",
                "space-between",
                "space-evenly",
              ],
              (e) => ({ justifyContent: e })
            ),
            distributeY: nz(
              ["baseline", "center", "flex-end", "flex-start", "stretch"],
              (e) => ({ alignItems: e })
            ),
            gap: nz(nH, (e) => ({ gap: nD.space[e] })),
          },
        }),
        ((m || (m = {})).Inline = "kui-inline");
      let nT = (0, eq.forwardRef)((e, t) => {
        var {
            className: r,
            css: n,
            distributeX: i,
            distributeY: a,
            gap: o,
          } = e,
          l = (function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                0 > t.indexOf(n) &&
                (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var i = 0, n = Object.getOwnPropertySymbols(e);
                i < n.length;
                i++
              )
                0 > t.indexOf(n[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                  (r[n[i]] = e[n[i]]);
            return r;
          })(e, ["className", "css", "distributeX", "distributeY", "gap"]);
        let c = ny({
          align: a,
          css: n,
          direction: "row",
          gap: o,
          justify: i,
        }).className;
        return (0, b.jsx)(
          "div",
          Object.assign(
            { className: rj(c, r), "data-testid": m.Inline, ref: t },
            l
          )
        );
      });
      nT.displayName = "Inline";
      let nL = {
          nvidiaSans: `"${B.nvidiaSans}", "${B.nvidiaSans} Fallback"`,
          jetbrainsMono: `"${B.jetbrainsMono}", "${B.jetbrainsMono} Fallback"`,
        },
        nW = {
          xxl: `(max-width: ${w.xxl})`,
          xl: `(max-width: ${w.xl})`,
          lg: `(max-width: ${w.lg})`,
          md: `(max-width: ${w.md})`,
          sm: `(max-width: ${w.sm})`,
          xs: `(max-width: ${w.xs})`,
        },
        {
          config: nR,
          createTheme: n$,
          css: nV,
          getCssText: nG,
          globalCss: n_,
          keyframes: nU,
          reset: nq,
          theme: nY,
        } = ek({
          media: nW,
          theme: {
            colors: Object.assign(Object.assign({}, S), C),
            shadows: Object.assign(Object.assign({}, k), E),
            borderWidths: D,
            fonts: nL,
            fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
            fontSizes: F,
            lineHeights: x,
            letterSpacings: A,
            space: O,
          },
        });
      Object.keys(nY.colors),
        Object.keys(nY.fontSizes),
        Object.keys(nY.space),
        n$({
          colors: Object.assign(Object.assign({}, S), C),
          shadows: Object.assign(Object.assign({}, k), E),
        }),
        n$({
          colors: Object.assign(Object.assign({}, S), H),
          shadows: Object.assign(Object.assign({}, k), j),
        });
      let nK = (e) =>
          `url("https://brand-assets.cne.ngc.nvidia.com/assets/fonts/nvidia-sans/1.0.0/NVIDIASans_${e}.woff2") format("woff2")`,
        nX = "fallback",
        nZ = "normal",
        nJ = "italic",
        nQ = `"${B.nvidiaSans}"`,
        n0 = `"${B.nvidiaSans} Fallback"`,
        n2 = `"${B.jetbrainsMono} Fallback"`;
      n_({
        "@font-face": [
          {
            fontFamily: nQ,
            fontStyle: nZ,
            fontWeight: 300,
            fontDisplay: nX,
            src: nK("Lt"),
          },
          {
            fontFamily: nQ,
            fontStyle: nJ,
            fontWeight: 300,
            fontDisplay: nX,
            src: nK("LtIt"),
          },
          {
            fontFamily: nQ,
            fontStyle: nZ,
            fontWeight: 400,
            fontDisplay: nX,
            src: nK("Rg"),
          },
          {
            fontFamily: nQ,
            fontStyle: nJ,
            fontWeight: 400,
            fontDisplay: nX,
            src: nK("It"),
          },
          {
            fontFamily: nQ,
            fontStyle: nZ,
            fontWeight: 500,
            fontDisplay: nX,
            src: nK("Md"),
          },
          {
            fontFamily: nQ,
            fontStyle: nJ,
            fontWeight: 500,
            fontDisplay: nX,
            src: nK("MdIt"),
          },
          {
            fontFamily: nQ,
            fontStyle: nZ,
            fontWeight: 700,
            fontDisplay: nX,
            src: nK("Bd"),
          },
          {
            fontFamily: nQ,
            fontStyle: nJ,
            fontWeight: 700,
            fontDisplay: nX,
            src: nK("BdIt"),
          },
          {
            fontFamily: n2,
            fontStyle: nJ,
            fontWeight: 300,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: n2,
            fontStyle: nJ,
            fontWeight: 400,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: n2,
            fontStyle: nJ,
            fontWeight: 500,
            src: "local('Courier New Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: n2,
            fontStyle: nJ,
            fontWeight: 700,
            src: "local('Courier New Bold Italic')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: n2,
            fontStyle: nZ,
            fontWeight: 300,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: n2,
            fontStyle: nZ,
            fontWeight: 400,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: n2,
            fontStyle: nZ,
            fontWeight: 500,
            src: "local('Courier New')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: n2,
            fontStyle: nZ,
            fontWeight: 700,
            src: "local('Courier New Bold')",
            ascentOverride: "102.02%",
            descentOverride: "30.00%",
            lineGapOverride: "0.00%",
            sizeAdjust: "99.98%",
          },
          {
            fontFamily: n0,
            fontStyle: nJ,
            fontWeight: 300,
            src: "local('Arial Italic')",
            ascentOverride: "97.18%",
            descentOverride: "27.77%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.84%",
          },
          {
            fontFamily: n0,
            fontStyle: nJ,
            fontWeight: 400,
            src: "local('Arial Italic')",
            ascentOverride: "96.18%",
            descentOverride: "27.48%",
            lineGapOverride: "0.00%",
            sizeAdjust: "101.89%",
          },
          {
            fontFamily: n0,
            fontStyle: nJ,
            fontWeight: 500,
            src: "local('Arial Italic')",
            ascentOverride: "94.81%",
            descentOverride: "27.09%",
            lineGapOverride: "0.00%",
            sizeAdjust: "103.36%",
          },
          {
            fontFamily: n0,
            fontStyle: nJ,
            fontWeight: 700,
            src: "local('Arial Bold Italic')",
            ascentOverride: "101.13%",
            descentOverride: "28.90%",
            lineGapOverride: "0.00%",
            sizeAdjust: "96.90%",
          },
          {
            fontFamily: n0,
            fontStyle: nZ,
            fontWeight: 300,
            src: "local('Arial')",
            ascentOverride: "93.59%",
            descentOverride: "26.74%",
            lineGapOverride: "0.00%",
            sizeAdjust: "104.71%",
          },
          {
            fontFamily: n0,
            fontStyle: nZ,
            fontWeight: 400,
            src: "local('Arial')",
            ascentOverride: "92.70%",
            descentOverride: "26.49%",
            lineGapOverride: "0.00%",
            sizeAdjust: "105.71%",
          },
          {
            fontFamily: n0,
            fontStyle: nZ,
            fontWeight: 500,
            src: "local('Arial')",
            ascentOverride: "91.53%",
            descentOverride: "26.15%",
            lineGapOverride: "0.00%",
            sizeAdjust: "107.07%",
          },
          {
            fontFamily: n0,
            fontStyle: nZ,
            fontWeight: 700,
            src: "local('Arial Bold')",
            ascentOverride: "97.74%",
            descentOverride: "27.93%",
            lineGapOverride: "0.00%",
            sizeAdjust: "100.26%",
          },
        ],
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
        },
      }),
        Object.assign({ initial: "initial" }, w),
        eH({});
      let n1 = nV({
        display: "inline-flex",
        variants: {
          type: {
            horizontal: { svg: { height: "1.25rem", minHeight: "15px" } },
            vertical: { svg: { height: "2.5rem", minHeight: "38px" } },
          },
        },
      });
      (h || (h = {})).Logo = "kui-logo";
      let n5 = {
          name: "all_black_text_horizontal",
          data: '<svg viewBox="0 0 164 30"><defs><path id="a" d=""/></defs><g fill="none" fill-rule="evenodd"><path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331" fill="#1A1919"/><mask id="b" fill="#fff"><use href="#a"/></mask><path d="m96.374 5.707.002 19.66h5.552V5.707h-5.554zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.989zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659H88.37zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001zM146.1 9.3l3.364 9.204h-6.833l3.47-9.204z" fill="#000" mask="url(#b)"/><path d="M16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.82 6.82 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.89 18.89 0 0 1-1.838-.096V30h28.375V.047H16.89zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852zM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943z" fill="#76B900" mask="url(#b)"/></g></svg>',
        },
        n3 = {
          name: "all_white_text_horizontal",
          data: '<svg viewBox="0 0 164 30"><defs><path id="a" d=""/></defs><g fill="none" fill-rule="evenodd"><path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331" fill="#FFF"/><mask id="b" fill="#fff"><use href="#a"/></mask><path d="m96.374 5.707.002 19.66h5.552V5.707h-5.554zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.989zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659H88.37zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001zM146.1 9.3l3.364 9.204h-6.833l3.47-9.204z" fill="#FFF" mask="url(#b)"/><path d="M16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.82 6.82 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.89 18.89 0 0 1-1.838-.096V30h28.375V.047H16.89zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852zM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943z" fill="#76B900" mask="url(#b)"/></g></svg>',
        },
        n8 = [
          {
            name: "all_black_horizontal",
            data: '<svg viewBox="0 0 164 30"><defs><path id="a" d=""/></defs><g fill="none" fill-rule="evenodd"><path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331" fill="#050505"/><mask id="b" fill="#fff"><use href="#a"/></mask><path d="m96.374 5.707.002 19.66h5.552V5.707h-5.554zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.989zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659H88.37zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001zM146.1 9.3l3.364 9.204h-6.833l3.47-9.204zM16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.82 6.82 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.89 18.89 0 0 1-1.838-.096V30h28.375V.047H16.89zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852zM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943z" fill="#050505" mask="url(#b)"/></g></svg>',
          },
          n5,
          {
            name: "all_black_text_vertical",
            data: '<svg viewBox="0 0 99 75"><path d="M13.246 20.365s6.442-9.537 19.304-10.523v-3.46C18.304 7.53 5.967 19.636 5.967 19.636S12.954 39.904 32.55 41.76v-3.678c-14.38-1.816-19.304-17.717-19.304-17.717zM32.55 30.768v3.368c-10.868-1.944-13.885-13.28-13.885-13.28s5.219-5.8 13.885-6.74v3.695l-.016-.002c-4.548-.548-8.102 3.716-8.102 3.716s1.99 7.177 8.118 9.243zM32.55 0v6.382c.419-.033.837-.06 1.257-.075 16.198-.547 26.751 13.329 26.751 13.329S48.436 34.425 35.809 34.425a18.55 18.55 0 0 1-3.259-.289v3.946a21.4 21.4 0 0 0 2.714.176c11.751 0 20.25-6.02 28.479-13.148 1.363 1.097 6.949 3.763 8.098 4.932-7.825 6.571-26.059 11.869-36.396 11.869-.997 0-1.955-.06-2.895-.15v5.544h44.664V0H32.55zm0 14.115V9.842c.414-.03.832-.051 1.257-.065 11.648-.367 19.29 10.042 19.29 10.042S44.843 31.32 35.994 31.32a10.71 10.71 0 0 1-3.444-.552V17.81c4.535.55 5.447 2.56 8.173 7.118l6.063-5.129s-4.425-5.824-11.886-5.824c-.812 0-1.588.057-2.35.14zm65.847 58.283c0 .728-.528 1.217-1.153 1.217v-.005c-.642.005-1.16-.484-1.16-1.212s.518-1.216 1.16-1.216c.625 0 1.153.488 1.153 1.216m.469 0c0-1-.767-1.58-1.622-1.58-.86 0-1.627.58-1.627 1.58 0 .998.766 1.58 1.627 1.58.855 0 1.622-.582 1.622-1.58m-1.892.132h.175l.402.716h.442l-.446-.745c.23-.016.42-.128.42-.442 0-.39-.266-.515-.715-.515h-.65v1.702h.372v-.716m0-.287v-.41h.26c.142 0 .336.012.336.186 0 .19-.1.224-.267.224h-.329M84.162 58.756l3.03 8.399h-6.157l3.127-8.4zm-3.248-3.27-6.986 17.928h4.933l1.105-3.169h8.268l1.046 3.17h5.355l-7.039-17.931-6.682.001zM66.89 73.42h5.004V55.48l-5.005-.002.001 17.942zM32.142 55.478l-4.175 14.22-4-14.218-5.401-.002 5.713 17.942h7.211l5.759-17.942h-5.107zm20.232 3.907h2.15c3.121 0 5.139 1.42 5.139 5.103s-2.018 5.103-5.138 5.103h-2.151V59.385zm-4.963-3.907V73.42h8.114c4.323 0 5.735-.729 7.26-2.361 1.08-1.146 1.776-3.663 1.776-6.412 0-2.522-.59-4.773-1.62-6.173-1.853-2.506-4.523-2.996-8.509-2.996h-7.02zM0 55.453V73.42h5.047V59.778l3.91.001c1.296 0 2.218.327 2.842 1 .791.855 1.114 2.233 1.114 4.752v7.89h4.89v-9.927c0-7.085-4.458-8.04-8.82-8.04H0zm39.355.025.002 17.942h5.003V55.478h-5.005z" fill-rule="evenodd"/></svg>',
          },
          {
            name: "all_black_vertical",
            data: '<svg viewBox="0 0 71 47"><path d="M7.255 20.234s6.419-9.476 19.236-10.455V6.34C12.294 7.481 0 19.51 0 19.51s6.963 20.138 26.491 21.982v-3.655C12.161 36.032 7.255 20.234 7.255 20.234zM26.49 30.57v3.346c-10.83-1.931-13.837-13.194-13.837-13.194s5.2-5.764 13.837-6.698v3.672l-.016-.002c-4.532-.544-8.074 3.692-8.074 3.692s1.984 7.131 8.09 9.184zm0-30.57v6.341c.417-.033.834-.06 1.253-.074 16.14-.544 26.658 13.242 26.658 13.242s-12.08 14.694-24.663 14.694c-1.153 0-2.234-.107-3.248-.287v3.92a21.24 21.24 0 0 0 2.704.176c11.71 0 20.18-5.982 28.38-13.063 1.359 1.089 6.925 3.738 8.07 4.9-7.797 6.529-25.968 11.792-36.27 11.792-.993 0-1.947-.06-2.884-.15V47H71V0H26.491zm0 14.024V9.78c.412-.03.829-.052 1.253-.065 11.607-.365 19.222 9.977 19.222 9.977S38.742 31.12 29.923 31.12c-1.27 0-2.407-.205-3.432-.55V17.697c4.52.546 5.428 2.543 8.145 7.073l6.042-5.096s-4.41-5.787-11.845-5.787c-.81 0-1.583.057-2.342.138z" fill-rule="evenodd"/></svg>',
          },
          {
            name: "all_white_horizontal",
            data: '<svg viewBox="0 0 164 30"><defs><path id="a" d=""/></defs><g fill="none" fill-rule="evenodd"><path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331" fill="#FFF"/><mask id="b" fill="#fff"><use href="#a"/></mask><path d="m96.374 5.707.002 19.66h5.552V5.707h-5.554zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.989zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659H88.37zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001zM146.1 9.3l3.364 9.204h-6.833l3.47-9.204zM16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.82 6.82 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.89 18.89 0 0 1-1.838-.096V30h28.375V.047H16.89zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852zM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943z" fill="#FFF" mask="url(#b)"/></g></svg>',
          },
          n3,
          {
            name: "all_white_text_vertical",
            data: '<svg viewBox="0 0 99 75"><path d="M13.246 20.365s6.442-9.537 19.304-10.523v-3.46C18.304 7.53 5.967 19.636 5.967 19.636S12.954 39.904 32.55 41.76v-3.678c-14.38-1.816-19.304-17.717-19.304-17.717zM32.55 30.768v3.368c-10.868-1.944-13.885-13.28-13.885-13.28s5.219-5.8 13.885-6.74v3.695l-.016-.002c-4.548-.548-8.102 3.716-8.102 3.716s1.99 7.177 8.118 9.243zM32.55 0v6.382c.419-.033.837-.06 1.257-.075 16.198-.547 26.751 13.329 26.751 13.329S48.436 34.425 35.809 34.425a18.55 18.55 0 0 1-3.259-.289v3.946a21.4 21.4 0 0 0 2.714.176c11.751 0 20.25-6.02 28.479-13.148 1.363 1.097 6.949 3.763 8.098 4.932-7.825 6.571-26.059 11.869-36.396 11.869-.997 0-1.955-.06-2.895-.15v5.544h44.664V0H32.55zm0 14.115V9.842c.414-.03.832-.051 1.257-.065 11.648-.367 19.29 10.042 19.29 10.042S44.843 31.32 35.994 31.32a10.71 10.71 0 0 1-3.444-.552V17.81c4.535.55 5.447 2.56 8.173 7.118l6.063-5.129s-4.425-5.824-11.886-5.824c-.812 0-1.588.057-2.35.14zm65.847 58.283c0 .728-.528 1.217-1.153 1.217v-.005c-.642.005-1.16-.484-1.16-1.212s.518-1.216 1.16-1.216c.625 0 1.153.488 1.153 1.216m.469 0c0-1-.767-1.58-1.622-1.58-.86 0-1.627.58-1.627 1.58 0 .998.766 1.58 1.627 1.58.855 0 1.622-.582 1.622-1.58m-1.892.132h.175l.402.716h.442l-.446-.745c.23-.016.42-.128.42-.442 0-.39-.266-.515-.715-.515h-.65v1.702h.372v-.716m0-.287v-.41h.26c.142 0 .336.012.336.186 0 .19-.1.224-.267.224h-.329M84.162 58.756l3.03 8.399h-6.157l3.127-8.4zm-3.248-3.27-6.986 17.928h4.933l1.105-3.169h8.268l1.046 3.17h5.355l-7.039-17.931-6.682.001zM66.89 73.42h5.004V55.48l-5.005-.002.001 17.942zM32.142 55.478l-4.175 14.22-4-14.218-5.401-.002 5.713 17.942h7.211l5.759-17.942h-5.107zm20.232 3.907h2.15c3.121 0 5.139 1.42 5.139 5.103s-2.018 5.103-5.138 5.103h-2.151V59.385zm-4.963-3.907V73.42h8.114c4.323 0 5.735-.729 7.26-2.361 1.08-1.146 1.776-3.663 1.776-6.412 0-2.522-.59-4.773-1.62-6.173-1.853-2.506-4.523-2.996-8.509-2.996h-7.02zM0 55.453V73.42h5.047V59.778l3.91.001c1.296 0 2.218.327 2.842 1 .791.855 1.114 2.233 1.114 4.752v7.89h4.89v-9.927c0-7.085-4.458-8.04-8.82-8.04H0zm39.355.025.002 17.942h5.003V55.478h-5.005z" fill="#FFF" fill-rule="evenodd"/></svg>',
          },
          {
            name: "all_white_vertical",
            data: '<svg viewBox="0 0 71 47"><path d="M7.255 20.234s6.419-9.476 19.236-10.455V6.34C12.294 7.481 0 19.51 0 19.51s6.963 20.138 26.491 21.982v-3.655C12.161 36.032 7.255 20.234 7.255 20.234zM26.49 30.57v3.346c-10.83-1.931-13.837-13.194-13.837-13.194s5.2-5.764 13.837-6.698v3.672l-.016-.002c-4.532-.544-8.074 3.692-8.074 3.692s1.984 7.131 8.09 9.184zm0-30.57v6.341c.417-.033.834-.06 1.253-.074 16.14-.544 26.658 13.242 26.658 13.242s-12.08 14.694-24.663 14.694c-1.153 0-2.234-.107-3.248-.287v3.92a21.24 21.24 0 0 0 2.704.176c11.71 0 20.18-5.982 28.38-13.063 1.359 1.089 6.925 3.738 8.07 4.9-7.797 6.529-25.968 11.792-36.27 11.792-.993 0-1.947-.06-2.884-.15V47H71V0H26.491zm0 14.024V9.78c.412-.03.829-.052 1.253-.065 11.607-.365 19.222 9.977 19.222 9.977S38.742 31.12 29.923 31.12c-1.27 0-2.407-.205-3.432-.55V17.697c4.52.546 5.428 2.543 8.145 7.073l6.042-5.096s-4.41-5.787-11.845-5.787c-.81 0-1.583.057-2.342.138z" fill="#FFF" fill-rule="evenodd"/></svg>',
          },
        ];
      var n4 = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            a = r.call(e),
            o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              o.push(n.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              n && !n.done && (r = a.return) && r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        },
        n6 = [
          "br",
          "col",
          "colgroup",
          "dl",
          "hr",
          "iframe",
          "img",
          "input",
          "link",
          "menuitem",
          "meta",
          "ol",
          "param",
          "select",
          "table",
          "tbody",
          "tfoot",
          "thead",
          "tr",
          "ul",
          "wbr",
        ],
        n7 = {
          "accept-charset": "acceptCharset",
          acceptcharset: "acceptCharset",
          accesskey: "accessKey",
          allowfullscreen: "allowFullScreen",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          charset: "charSet",
          class: "className",
          classid: "classID",
          classname: "className",
          colspan: "colSpan",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controlslist: "controlsList",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          datetime: "dateTime",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          enctype: "encType",
          for: "htmlFor",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          maxlength: "maxLength",
          mediagroup: "mediaGroup",
          minlength: "minLength",
          nomodule: "noModule",
          novalidate: "noValidate",
          playsinline: "playsInline",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rowspan: "rowSpan",
          spellcheck: "spellCheck",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          tabindex: "tabIndex",
          typemustmatch: "typeMustMatch",
          usemap: "useMap",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          diffuseconstant: "diffuseConstant",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          edgemode: "edgeMode",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          externalresourcesrequired: "externalResourcesRequired",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          numoctaves: "numOctaves",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          ychannelselector: "yChannelSelector",
          zoomandpan: "zoomAndPan",
          onblur: "onBlur",
          onchange: "onChange",
          onclick: "onClick",
          oncontextmenu: "onContextMenu",
          ondoubleclick: "onDoubleClick",
          ondrag: "onDrag",
          ondragend: "onDragEnd",
          ondragenter: "onDragEnter",
          ondragexit: "onDragExit",
          ondragleave: "onDragLeave",
          ondragover: "onDragOver",
          ondragstart: "onDragStart",
          ondrop: "onDrop",
          onerror: "onError",
          onfocus: "onFocus",
          oninput: "onInput",
          oninvalid: "onInvalid",
          onkeydown: "onKeyDown",
          onkeypress: "onKeyPress",
          onkeyup: "onKeyUp",
          onload: "onLoad",
          onmousedown: "onMouseDown",
          onmouseenter: "onMouseEnter",
          onmouseleave: "onMouseLeave",
          onmousemove: "onMouseMove",
          onmouseout: "onMouseOut",
          onmouseover: "onMouseOver",
          onmouseup: "onMouseUp",
          onscroll: "onScroll",
          onsubmit: "onSubmit",
          ontouchcancel: "onTouchCancel",
          ontouchend: "onTouchEnd",
          ontouchmove: "onTouchMove",
          ontouchstart: "onTouchStart",
          onwheel: "onWheel",
        },
        n9 = function () {
          return (n9 =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        ie = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            a = r.call(e),
            o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              o.push(n.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              n && !n.done && (r = a.return) && r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        },
        it = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, i = 0, a = t.length; i < a; i++)
              (!n && i in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        };
      function ir(e, t) {
        if ((void 0 === t && (t = {}), !e || !(e instanceof Node))) return null;
        var r,
          n,
          i,
          a,
          o,
          l = t.actions,
          c = void 0 === l ? [] : l,
          s = t.index,
          d = t.level,
          f = void 0 === d ? 0 : d,
          u = t.randomKey,
          g = e,
          p = "".concat(f, "-").concat(void 0 === s ? 0 : s),
          v = [];
        if (
          (u &&
            0 === f &&
            (p = ""
              .concat(
                (function (e) {
                  void 0 === e && (e = 6);
                  for (
                    var t =
                        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                      r = "",
                      n = e;
                    n > 0;
                    --n
                  )
                    r += t[Math.round(Math.random() * (t.length - 1))];
                  return r;
                })(),
                "-"
              )
              .concat(p)),
          Array.isArray(c) &&
            c.forEach(function (t) {
              t.condition(g, p, f) &&
                ("function" != typeof t.pre ||
                  (g = t.pre(g, p, f)) instanceof Node ||
                  (g = e),
                "function" == typeof t.post && v.push(t.post(g, p, f)));
            }),
          v.length)
        )
          return v;
        switch (g.nodeType) {
          case 1:
            return eq.createElement(
              ((r = g.nodeName),
              /[a-z]+[A-Z]+[a-z]+/.test(r) ? r : r.toLowerCase()),
              (function (e, t) {
                var r = { key: t };
                if (e instanceof Element) {
                  var n = e.getAttribute("class");
                  n && (r.className = n),
                    it([], ie(e.attributes), !1).forEach(function (e) {
                      switch (e.name) {
                        case "class":
                          break;
                        case "style":
                          r[e.name] = e.value
                            .split(/ ?; ?/)
                            .reduce(function (e, t) {
                              var r = n4(t.split(/ ?: ?/), 2),
                                n = r[0],
                                i = r[1];
                              return (
                                n &&
                                  i &&
                                  (e[
                                    n.replace(/-(\w)/g, function (e, t) {
                                      return t.toUpperCase();
                                    })
                                  ] = Number.isNaN(Number(i)) ? i : Number(i)),
                                e
                              );
                            }, {});
                          break;
                        case "allowfullscreen":
                        case "allowpaymentrequest":
                        case "async":
                        case "autofocus":
                        case "autoplay":
                        case "checked":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "formnovalidate":
                        case "hidden":
                        case "ismap":
                        case "itemscope":
                        case "loop":
                        case "multiple":
                        case "muted":
                        case "nomodule":
                        case "novalidate":
                        case "open":
                        case "readonly":
                        case "required":
                        case "reversed":
                        case "selected":
                        case "typemustmatch":
                          r[n7[e.name] || e.name] = !0;
                          break;
                        default:
                          r[n7[e.name] || e.name] = e.value;
                      }
                    });
                }
                return r;
              })(g, p),
              ((n = g.childNodes),
              (i = t),
              (a = it([], ie(n), !1)
                .map(function (e, t) {
                  return ir(e, n9(n9({}, i), { index: t, level: f + 1 }));
                })
                .filter(Boolean)).length
                ? a
                : null)
            );
          case 3:
            var m =
              (null === (o = g.nodeValue) || void 0 === o
                ? void 0
                : o.toString()) || "";
            if (/^\s+$/.test(m) && !/[\u00A0\u202F]/.test(m)) return null;
            if (!g.parentNode) return m;
            var h = g.parentNode.nodeName.toLowerCase();
            if (n6.includes(h))
              return (
                /\S/.test(m) &&
                  console.warn(
                    "A textNode is not allowed inside '"
                      .concat(h, "'. Your text \"")
                      .concat(m, '" will be ignored')
                  ),
                null
              );
            return m;
          default:
            return null;
        }
      }
      function ii(e, t) {
        return (void 0 === t && (t = {}), "string" == typeof e)
          ? (function (e, t) {
              if ((void 0 === t && (t = {}), !e || "string" != typeof e))
                return null;
              var r = t.nodeOnly,
                n = t.selector,
                i = t.type;
              try {
                var a = new DOMParser()
                  .parseFromString(e, void 0 === i ? "text/html" : i)
                  .querySelector(void 0 === n ? "body > *" : n);
                if (!(a instanceof Node))
                  throw TypeError("Error parsing input");
                if (void 0 !== r && r) return a;
                return ir(a, t);
              } catch (e) {}
              return null;
            })(e, t)
          : e instanceof Node
          ? ir(e, t)
          : null;
      }
      var ia = r(8875),
        io = {
          FAILED: "failed",
          LOADED: "loaded",
          LOADING: "loading",
          PENDING: "pending",
          READY: "ready",
          UNSUPPORTED: "unsupported",
        };
      function il() {
        return ia.canUseDOM;
      }
      var ic =
          ((o = function (e, t) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            o(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        is = function () {
          return (is =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        id = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            a = r.call(e),
            o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              o.push(n.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              n && !n.done && (r = a.return) && r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        },
        iu = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, i = 0, a = t.length; i < a; i++)
              (!n && i in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        ig = Object.create(null),
        ip = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              Object.defineProperty(r, "isInitialized", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(r, "isActive", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(r, "hash", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(r, "handleLoad", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  r.isActive &&
                    r.setState({ content: e, status: io.LOADED }, r.getElement);
                },
              }),
              Object.defineProperty(r, "handleError", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  var t = r.props.onError,
                    n =
                      "Browser does not support SVG" === e.message
                        ? io.UNSUPPORTED
                        : io.FAILED;
                  r.isActive &&
                    r.setState({ status: n }, function () {
                      "function" == typeof t && t(e);
                    });
                },
              }),
              Object.defineProperty(r, "request", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var e = r.props,
                    t = e.cacheRequests,
                    n = e.fetchOptions,
                    i = e.src;
                  try {
                    return (
                      t && (ig[i] = { content: "", status: io.LOADING }),
                      fetch(i, n)
                        .then(function (e) {
                          var t = e.headers.get("content-type"),
                            r = id((t || "").split(/ ?; ?/), 1)[0];
                          if (e.status > 299) throw Error("Not found");
                          if (
                            !["image/svg+xml", "text/plain"].some(function (e) {
                              return r.includes(e);
                            })
                          )
                            throw Error("Content type isn't valid: ".concat(r));
                          return e.text();
                        })
                        .then(function (e) {
                          var n = r.props.src;
                          if (i !== n) {
                            ig[i].status === io.LOADING && delete ig[i];
                            return;
                          }
                          if ((r.handleLoad(e), t)) {
                            var a = ig[i];
                            a && ((a.content = e), (a.status = io.LOADED));
                          }
                        })
                        .catch(function (e) {
                          r.handleError(e), t && ig[i] && delete ig[i];
                        })
                    );
                  } catch (e) {
                    return r.handleError(Error(e.message));
                  }
                },
              }),
              (r.state = {
                content: "",
                element: null,
                hasCache: !!t.cacheRequests && !!ig[t.src],
                status: io.PENDING,
              }),
              (r.hash =
                t.uniqueHash ||
                (function (e) {
                  for (
                    var t = "abcdefghijklmnopqrstuvwxyz",
                      r = ""
                        .concat(t)
                        .concat(t.toUpperCase())
                        .concat("1234567890"),
                      n = "",
                      i = 0;
                    i < 8;
                    i++
                  )
                    n += r[Math.floor(Math.random() * r.length)];
                  return n;
                })(0)),
              r
            );
          }
          return (
            ic(t, e),
            Object.defineProperty(t.prototype, "componentDidMount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                if (((this.isActive = !0), il() && !this.isInitialized)) {
                  var e = this.state.status,
                    t = this.props.src;
                  try {
                    if (e === io.PENDING) {
                      if (
                        !(
                          (function () {
                            if (!document) return !1;
                            var e = document.createElement("div");
                            e.innerHTML = "<svg />";
                            var t = e.firstChild;
                            return (
                              !!t &&
                              "http://www.w3.org/2000/svg" === t.namespaceURI
                            );
                          })() &&
                          "undefined" != typeof window &&
                          null !== window
                        )
                      )
                        throw Error("Browser does not support SVG");
                      if (!t) throw Error("Missing src");
                      this.load();
                    }
                  } catch (e) {
                    this.handleError(e);
                  }
                  this.isInitialized = !0;
                }
              },
            }),
            Object.defineProperty(t.prototype, "componentDidUpdate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                if (il()) {
                  var r = this.state,
                    n = r.hasCache,
                    i = r.status,
                    a = this.props,
                    o = a.onLoad,
                    l = a.src;
                  if (
                    (t.status !== io.READY && i === io.READY && o && o(l, n),
                    e.src !== l)
                  ) {
                    if (!l) {
                      this.handleError(Error("Missing src"));
                      return;
                    }
                    this.load();
                  }
                }
              },
            }),
            Object.defineProperty(t.prototype, "componentWillUnmount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.isActive = !1;
              },
            }),
            Object.defineProperty(t.prototype, "getNode", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.props,
                  t = e.description,
                  r = e.title;
                try {
                  var n = this.processSVG(),
                    i = ii(n, { nodeOnly: !0 });
                  if (!i || !(i instanceof SVGSVGElement))
                    throw Error("Could not convert the src to a DOM Node");
                  var a = this.updateSVGAttributes(i);
                  if (t) {
                    var o = a.querySelector("desc");
                    o && o.parentNode && o.parentNode.removeChild(o);
                    var l = document.createElement("desc");
                    (l.innerHTML = t), a.prepend(l);
                  }
                  if (r) {
                    var c = a.querySelector("title");
                    c && c.parentNode && c.parentNode.removeChild(c);
                    var s = document.createElement("title");
                    (s.innerHTML = r), a.prepend(s);
                  }
                  return a;
                } catch (e) {
                  return this.handleError(e);
                }
              },
            }),
            Object.defineProperty(t.prototype, "getElement", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                try {
                  var e = this.getNode(),
                    t = ii(e);
                  if (!t || !eq.isValidElement(t))
                    throw Error("Could not convert the src to a React element");
                  this.setState({ element: t, status: io.READY });
                } catch (e) {
                  this.handleError(Error(e.message));
                }
              },
            }),
            Object.defineProperty(t.prototype, "load", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this;
                this.isActive &&
                  this.setState(
                    { content: "", element: null, status: io.LOADING },
                    function () {
                      var t,
                        r = e.props,
                        n = r.cacheRequests,
                        i = r.src,
                        a = n && ig[i];
                      if (a && a.status === io.LOADED) {
                        e.handleLoad(a.content);
                        return;
                      }
                      var o = i.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);
                      if (
                        (o
                          ? (t = o[1]
                              ? window.atob(o[2])
                              : decodeURIComponent(o[2]))
                          : i.includes("<svg") && (t = i),
                        t)
                      ) {
                        e.handleLoad(t);
                        return;
                      }
                      e.request();
                    }
                  );
              },
            }),
            Object.defineProperty(t.prototype, "updateSVGAttributes", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this,
                  r = this.props,
                  n = r.baseURL,
                  i = void 0 === n ? "" : n,
                  a = r.uniquifyIDs,
                  o = [
                    "id",
                    "href",
                    "xlink:href",
                    "xlink:role",
                    "xlink:arcrole",
                  ],
                  l = ["href", "xlink:href"];
                return (
                  a &&
                    iu([], id(e.children), !1).map(function (e) {
                      if (e.attributes && e.attributes.length) {
                        var r = Object.values(e.attributes).map(function (e) {
                          var r = e.value.match(/url\((.*?)\)/);
                          return (
                            r &&
                              r[1] &&
                              (e.value = e.value.replace(
                                r[0],
                                "url("
                                  .concat(i)
                                  .concat(r[1], "__")
                                  .concat(t.hash, ")")
                              )),
                            e
                          );
                        });
                        o.forEach(function (e) {
                          var n,
                            i = r.find(function (t) {
                              return t.name === e;
                            });
                          i &&
                            ((n = i.value),
                            !l.includes(e) || !n || n.includes("#")) &&
                            (i.value = "".concat(i.value, "__").concat(t.hash));
                        });
                      }
                      return e.children.length ? t.updateSVGAttributes(e) : e;
                    }),
                  e
                );
              },
            }),
            Object.defineProperty(t.prototype, "processSVG", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.state.content,
                  t = this.props.preProcessor;
                return t ? t(e) : e;
              },
            }),
            Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this.state,
                  t = e.element,
                  r = e.status,
                  n = this.props,
                  i = n.children,
                  a = n.innerRef,
                  o = n.loader,
                  l = void 0 === o ? null : o,
                  c = (function (e) {
                    for (var t = [], r = 1; r < arguments.length; r++)
                      t[r - 1] = arguments[r];
                    var n = {};
                    for (var i in e)
                      ({}).hasOwnProperty.call(e, i) &&
                        !t.includes(i) &&
                        (n[i] = e[i]);
                    return n;
                  })(
                    this.props,
                    "baseURL",
                    "cacheRequests",
                    "children",
                    "description",
                    "fetchOptions",
                    "innerRef",
                    "loader",
                    "onError",
                    "onLoad",
                    "preProcessor",
                    "src",
                    "title",
                    "uniqueHash",
                    "uniquifyIDs"
                  );
                return il()
                  ? t
                    ? eq.cloneElement(t, is({ ref: a }, c))
                    : [io.UNSUPPORTED, io.FAILED].includes(r)
                    ? void 0 === i
                      ? null
                      : i
                    : l
                  : l;
              },
            }),
            Object.defineProperty(t, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { cacheRequests: !0, uniquifyIDs: !1 },
            }),
            t
          );
        })(eq.PureComponent);
      let iv = (e) => ("dark" === e ? n3 : n5),
        im = ({ name: e, theme: t }) => {
          var r;
          return null !== (r = n8.find((t) => t.name === e)) && void 0 !== r
            ? r
            : iv(t);
        },
        ih = (e) => (/vert/g.test(e) ? "vertical" : "horizontal"),
        iy = (0, eq.forwardRef)((e, t) => {
          var { className: r, css: n, name: i } = e,
            a = (function (e, t) {
              var r = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  0 > t.indexOf(n) &&
                  (r[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var i = 0, n = Object.getOwnPropertySymbols(e);
                  i < n.length;
                  i++
                )
                  0 > t.indexOf(n[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                    (r[n[i]] = e[n[i]]);
              return r;
            })(e, ["className", "css", "name"]);
          let o = rP(),
            [l, c] = (0, eq.useMemo)(() => {
              let e = im({ name: i, theme: o });
              return [e, ih(e.name)];
            }, [i, o]),
            s = n1({ css: n, type: c }).className;
          return (0, b.jsx)(
            "div",
            Object.assign(
              { className: rj(s, r), "data-testid": h.Logo, ref: t },
              a,
              { children: (0, b.jsx)(ip, { src: l.data }) }
            )
          );
        });
      iy.displayName = "Logo";
      let ib = (e, t) =>
          `https://brand-assets.cne.ngc.nvidia.com/assets/icons/2.0.1/${t}/${e}.svg`,
        iS = (0, eq.forwardRef)((e, t) =>
          (0, b.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
            display: "inline-block",
            ref: t,
            ...e,
            children: (0, b.jsx)("path", {
              stroke: "currentColor",
              d: "M3 3.5h10m-10 4h10m-10 4h10",
            }),
          })
        ),
        iB = (0, eq.forwardRef)((e, t) =>
          (0, b.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
            display: "inline-block",
            ref: t,
            ...e,
            children: (0, b.jsx)("path", {
              stroke: "currentColor",
              d: "m3.757 3.757 1.415 1.415m7.07-1.415-1.414 1.415m0 5.656 1.415 1.415m-7.071-1.415-1.415 1.415M2 8h2m8 0h2M8 2v2m0 10v-2m2.5-4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
            }),
          })
        ),
        ix = (0, eq.forwardRef)((e, t) =>
          (0, b.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
            display: "inline-block",
            ref: t,
            ...e,
            children: (0, b.jsx)("path", {
              stroke: "currentColor",
              d: "M4.252 10.492a4.5 4.5 0 0 0 4.032-6.984 4.5 4.5 0 1 1-4.032 6.984Z",
            }),
          })
        ),
        iF = (0, eq.forwardRef)((e, t) =>
          (0, b.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
            display: "inline-block",
            ref: t,
            ...e,
            children: (0, b.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M13 4H3V3h10v1Zm0 4H3V7h10v1Zm0 4H3v-1h10v1Z",
              clipRule: "evenodd",
            }),
          })
        ),
        iA = (0, eq.forwardRef)((e, t) =>
          (0, b.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
            display: "inline-block",
            ref: t,
            ...e,
            children: (0, b.jsx)("path", {
              fill: "currentColor",
              d: "M7.5 2v2h1V2h-1ZM3.404 4.11l1.414 1.415.707-.707-1.414-1.414-.707.707Zm7.071.708.707.707 1.414-1.414-.707-.707-1.414 1.414ZM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 8.5h2v-1H2v1Zm10 0h2v-1h-2v1Zm-8.596 3.39.707.706 1.414-1.414-.707-.707-1.414 1.414Zm7.071-.708 1.414 1.414.707-.707-1.414-1.414-.707.707ZM8.5 14v-2h-1v2h1Z",
            }),
          })
        ),
        iw = (0, eq.forwardRef)((e, t) =>
          (0, b.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
            display: "inline-block",
            ref: t,
            ...e,
            children: (0, b.jsx)("path", {
              fill: "currentColor",
              d: "m8.315 3.009-1.004-.063.556.839a4 4 0 0 1-3.584 6.208L3.279 9.93l.556.839a5 5 0 1 0 4.48-7.76Z",
            }),
          })
        ),
        iO = (0, eq.forwardRef)(({ variant: e, ...t }, r) =>
          "line" === e
            ? (0, b.jsx)(iS, { ...t, ref: r })
            : (0, b.jsx)(iF, { ...t, ref: r })
        ),
        ik = (0, eq.forwardRef)(({ variant: e, ...t }, r) =>
          "line" === e
            ? (0, b.jsx)(iB, { ...t, ref: r })
            : (0, b.jsx)(iA, { ...t, ref: r })
        ),
        iD = (0, eq.forwardRef)(({ variant: e, ...t }, r) =>
          "line" === e
            ? (0, b.jsx)(ix, { ...t, ref: r })
            : (0, b.jsx)(iw, { ...t, ref: r })
        );
      var iH = r(1664),
        ij = r.n(iH);
      let iC = {
          root: tl({ height: "100%", paddingRight: tu.space.ms }),
          menuLink: tl({ height: "100%", width: "".concat(48, "px") }),
          logoLink: tl({ lineHeight: 0 }),
          iconGroup: tl({ height: "100%" }),
        },
        iE = () => {
          let { theme: e, setTheme: t, setCollapsed: r } = eQ();
          return (0, b.jsxs)(nT, {
            className: iC.root(),
            distributeX: "space-between",
            distributeY: "center",
            gap: "xl",
            children: [
              (0, b.jsxs)(nT, {
                distributeY: "center",
                css: { height: "100%" },
                children: [
                  (0, b.jsx)(r7, {
                    className: iC.menuLink(),
                    tone: "tertiary",
                    onClick: () => {
                      r((e) => !e);
                    },
                    children: (0, b.jsx)(iO, { variant: "line" }),
                  }),
                  (0, b.jsx)(ij(), {
                    className: iC.logoLink(),
                    href: "/",
                    children: (0, b.jsx)(iy, {}),
                  }),
                  "\xa0\xa0\xa0\xa0\xa0LLM Dashboard",
                ],
              }),
              (0, b.jsx)(nT, {
                className: iC.iconGroup(),
                gap: "sm",
                children: (0, b.jsx)(r7, {
                  tone: "tertiary",
                  onClick: () => {
                    t("light" === e ? "dark" : "light");
                  },
                  children:
                    "dark" === e
                      ? (0, b.jsx)(ik, { variant: "line" })
                      : (0, b.jsx)(iD, { variant: "line" }),
                }),
              }),
            ],
          });
        };
      r(2693);
      let iP = (0, eq.forwardRef)(
        ({ iconName: e, lazyLoading: t, size: r, variant: n, ...i }, a) =>
          (0, b.jsx)(
            "svg",
            {
              "data-src": ib(e, n),
              height: r ?? "1em",
              width: r ?? "1em",
              display: "inline-block",
              "data-icon-name": e,
              ...i,
              ...(t ? { "data-loading": "lazy" } : {}),
              ref: a,
            },
            `${e}:${n}`
          )
      );
      iP.displayName = "NvidiaGUIIcon";
      let iN = (0, eq.forwardRef)((e, t) =>
          (0, b.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
            display: "inline-block",
            ref: t,
            ...e,
            children: (0, b.jsx)("path", {
              stroke: "currentColor",
              d: "m12 6-4 4-4-4",
            }),
          })
        ),
        iI = (0, eq.forwardRef)((e, t) =>
          (0, b.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
            display: "inline-block",
            ref: t,
            ...e,
            children: (0, b.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M8 9.293 4.354 5.646l-.708.708L8 10.707l4.354-4.353-.707-.708L8 9.293Z",
              clipRule: "evenodd",
            }),
          })
        ),
        iM = (0, eq.forwardRef)(({ variant: e, ...t }, r) =>
          "line" === e
            ? (0, b.jsx)(iN, { ...t, ref: r })
            : (0, b.jsx)(iI, { ...t, ref: r })
        );
      function iz() {
        return (iz = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function iT(e) {
        let t = (0, eq.useRef)(e);
        return (
          (0, eq.useEffect)(() => {
            t.current = e;
          }),
          (0, eq.useMemo)(
            () =>
              (...e) => {
                var r;
                return null === (r = t.current) || void 0 === r
                  ? void 0
                  : r.call(t, ...e);
              },
            []
          )
        );
      }
      let iL = (null == globalThis ? void 0 : globalThis.document)
        ? eq.useLayoutEffect
        : () => {};
      function iW(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function iR(...e) {
        return (0, eq.useCallback)(iW(...e), e);
      }
      var i$ = r(3935);
      let iV = (0, eq.forwardRef)((e, t) => {
        let { children: r, ...n } = e,
          i = eq.Children.toArray(r),
          a = i.find(iU);
        if (a) {
          let e = a.props.children,
            r = i.map((t) =>
              t !== a
                ? t
                : eq.Children.count(e) > 1
                ? eq.Children.only(null)
                : (0, eq.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, eq.createElement)(
            iG,
            iz({}, n, { ref: t }),
            (0, eq.isValidElement)(e)
              ? (0, eq.cloneElement)(e, void 0, r)
              : null
          );
        }
        return (0, eq.createElement)(iG, iz({}, n, { ref: t }), r);
      });
      iV.displayName = "Slot";
      let iG = (0, eq.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        return (0, eq.isValidElement)(r)
          ? (0, eq.cloneElement)(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let i = e[n],
                    a = t[n],
                    o = /^on[A-Z]/.test(n);
                  o
                    ? i && a
                      ? (r[n] = (...e) => {
                          a(...e), i(...e);
                        })
                      : i && (r[n] = i)
                    : "style" === n
                    ? (r[n] = { ...i, ...a })
                    : "className" === n &&
                      (r[n] = [i, a].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(n, r.props),
              ref: iW(t, r.ref),
            })
          : eq.Children.count(r) > 1
          ? eq.Children.only(null)
          : null;
      });
      iG.displayName = "SlotClone";
      let i_ = ({ children: e }) => (0, eq.createElement)(eq.Fragment, null, e);
      function iU(e) {
        return (0, eq.isValidElement)(e) && e.type === i_;
      }
      let iq = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = (0, eq.forwardRef)((e, r) => {
            let { asChild: n, ...i } = e,
              a = n ? iV : t;
            return (
              (0, eq.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, eq.createElement)(a, iz({}, i, { ref: r }))
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {}),
        iY = (e) => {
          let { present: t, children: r } = e,
            n = (function (e) {
              var t;
              let [r, n] = (0, eq.useState)(),
                i = (0, eq.useRef)({}),
                a = (0, eq.useRef)(e),
                o = (0, eq.useRef)("none"),
                l = e ? "mounted" : "unmounted",
                [c, s] =
                  ((t = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  (0, eq.useReducer)((e, r) => {
                    let n = t[e][r];
                    return null != n ? n : e;
                  }, l));
              return (
                (0, eq.useEffect)(() => {
                  let e = iK(i.current);
                  o.current = "mounted" === c ? e : "none";
                }, [c]),
                iL(() => {
                  let t = i.current,
                    r = a.current,
                    n = r !== e;
                  if (n) {
                    let n = o.current,
                      i = iK(t);
                    e
                      ? s("MOUNT")
                      : "none" === i ||
                        (null == t ? void 0 : t.display) === "none"
                      ? s("UNMOUNT")
                      : r && n !== i
                      ? s("ANIMATION_OUT")
                      : s("UNMOUNT"),
                      (a.current = e);
                  }
                }, [e, s]),
                iL(() => {
                  if (r) {
                    let e = (e) => {
                        let t = iK(i.current),
                          n = t.includes(e.animationName);
                        e.target === r &&
                          n &&
                          (0, i$.flushSync)(() => s("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === r && (o.current = iK(i.current));
                      };
                    return (
                      r.addEventListener("animationstart", t),
                      r.addEventListener("animationcancel", e),
                      r.addEventListener("animationend", e),
                      () => {
                        r.removeEventListener("animationstart", t),
                          r.removeEventListener("animationcancel", e),
                          r.removeEventListener("animationend", e);
                      }
                    );
                  }
                  s("ANIMATION_END");
                }, [r, s]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(c),
                  ref: (0, eq.useCallback)((e) => {
                    e && (i.current = getComputedStyle(e)), n(e);
                  }, []),
                }
              );
            })(t),
            i =
              "function" == typeof r
                ? r({ present: n.isPresent })
                : eq.Children.only(r),
            a = iR(n.ref, i.ref),
            o = "function" == typeof r;
          return o || n.isPresent ? (0, eq.cloneElement)(i, { ref: a }) : null;
        };
      function iK(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      iY.displayName = "Presence";
      let iX = eY["useId".toString()] || (() => void 0),
        iZ = 0,
        iJ = "Collapsible",
        [iQ, i0] = (function (e, t = []) {
          let r = [],
            n = () => {
              let t = r.map((e) => (0, eq.createContext)(e));
              return function (r) {
                let n = (null == r ? void 0 : r[e]) || t;
                return (0, eq.useMemo)(
                  () => ({ [`__scope${e}`]: { ...r, [e]: n } }),
                  [r, n]
                );
              };
            };
          return (
            (n.scopeName = e),
            [
              function (t, n) {
                let i = (0, eq.createContext)(n),
                  a = r.length;
                function o(t) {
                  let { scope: r, children: n, ...o } = t,
                    l = (null == r ? void 0 : r[e][a]) || i,
                    c = (0, eq.useMemo)(() => o, Object.values(o));
                  return (0, eq.createElement)(l.Provider, { value: c }, n);
                }
                return (
                  (r = [...r, n]),
                  (o.displayName = t + "Provider"),
                  [
                    o,
                    function (r, o) {
                      let l = (null == o ? void 0 : o[e][a]) || i,
                        c = (0, eq.useContext)(l);
                      if (c) return c;
                      if (void 0 !== n) return n;
                      throw Error(`\`${r}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let r = () => {
                  let r = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let n = r.reduce((t, { useScope: r, scopeName: n }) => {
                      let i = r(e),
                        a = i[`__scope${n}`];
                      return { ...t, ...a };
                    }, {});
                    return (0, eq.useMemo)(
                      () => ({ [`__scope${t.scopeName}`]: n }),
                      [n]
                    );
                  };
                };
                return (r.scopeName = t.scopeName), r;
              })(n, ...t),
            ]
          );
        })(iJ),
        [i2, i1] = iQ(iJ),
        i5 = (0, eq.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: r,
              open: n,
              defaultOpen: i,
              disabled: a,
              onOpenChange: o,
              ...l
            } = e,
            [c = !1, s] = (function ({
              prop: e,
              defaultProp: t,
              onChange: r = () => {},
            }) {
              let [n, i] = (function ({ defaultProp: e, onChange: t }) {
                  let r = (0, eq.useState)(e),
                    [n] = r,
                    i = (0, eq.useRef)(n),
                    a = iT(t);
                  return (
                    (0, eq.useEffect)(() => {
                      i.current !== n && (a(n), (i.current = n));
                    }, [n, i, a]),
                    r
                  );
                })({ defaultProp: t, onChange: r }),
                a = void 0 !== e,
                o = a ? e : n,
                l = iT(r),
                c = (0, eq.useCallback)(
                  (t) => {
                    if (a) {
                      let r = "function" == typeof t ? t(e) : t;
                      r !== e && l(r);
                    } else i(t);
                  },
                  [a, e, i, l]
                );
              return [o, c];
            })({ prop: n, defaultProp: i, onChange: o });
          return (0, eq.createElement)(
            i2,
            {
              scope: r,
              disabled: a,
              contentId: (function (e) {
                let [t, r] = eq.useState(iX());
                return (
                  iL(() => {
                    e || r((e) => (null != e ? e : String(iZ++)));
                  }, [e]),
                  e || (t ? `radix-${t}` : "")
                );
              })(),
              open: c,
              onOpenToggle: (0, eq.useCallback)(() => s((e) => !e), [s]),
            },
            (0, eq.createElement)(
              iq.div,
              iz({ "data-state": i7(c), "data-disabled": a ? "" : void 0 }, l, {
                ref: t,
              })
            )
          );
        }),
        i3 = (0, eq.forwardRef)((e, t) => {
          let { __scopeCollapsible: r, ...n } = e,
            i = i1("CollapsibleTrigger", r);
          return (0, eq.createElement)(
            iq.button,
            iz(
              {
                type: "button",
                "aria-controls": i.contentId,
                "aria-expanded": i.open || !1,
                "data-state": i7(i.open),
                "data-disabled": i.disabled ? "" : void 0,
                disabled: i.disabled,
              },
              n,
              {
                ref: t,
                onClick: (function (
                  e,
                  t,
                  { checkForDefaultPrevented: r = !0 } = {}
                ) {
                  return function (n) {
                    if ((null == e || e(n), !1 === r || !n.defaultPrevented))
                      return null == t ? void 0 : t(n);
                  };
                })(e.onClick, i.onOpenToggle),
              }
            )
          );
        }),
        i8 = "CollapsibleContent",
        i4 = (0, eq.forwardRef)((e, t) => {
          let { forceMount: r, ...n } = e,
            i = i1(i8, e.__scopeCollapsible);
          return (0, eq.createElement)(
            iY,
            { present: r || i.open },
            ({ present: e }) =>
              (0, eq.createElement)(i6, iz({}, n, { ref: t, present: e }))
          );
        }),
        i6 = (0, eq.forwardRef)((e, t) => {
          let { __scopeCollapsible: r, present: n, children: i, ...a } = e,
            o = i1(i8, r),
            [l, c] = (0, eq.useState)(n),
            s = (0, eq.useRef)(null),
            d = iR(t, s),
            f = (0, eq.useRef)(0),
            u = f.current,
            g = (0, eq.useRef)(0),
            p = g.current,
            v = o.open || l,
            m = (0, eq.useRef)(v),
            h = (0, eq.useRef)();
          return (
            (0, eq.useEffect)(() => {
              let e = requestAnimationFrame(() => (m.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            iL(() => {
              let e = s.current;
              if (e) {
                (h.current = h.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (f.current = t.height),
                  (g.current = t.width),
                  m.current ||
                    ((e.style.transitionDuration =
                      h.current.transitionDuration),
                    (e.style.animationName = h.current.animationName)),
                  c(n);
              }
            }, [o.open, n]),
            (0, eq.createElement)(
              iq.div,
              iz(
                {
                  "data-state": i7(o.open),
                  "data-disabled": o.disabled ? "" : void 0,
                  id: o.contentId,
                  hidden: !v,
                },
                a,
                {
                  ref: d,
                  style: {
                    "--radix-collapsible-content-height": u ? `${u}px` : void 0,
                    "--radix-collapsible-content-width": p ? `${p}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              v && i
            )
          );
        });
      function i7(e) {
        return e ? "open" : "closed";
      }
      function i9(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((null == e || e(n), !1 === r || !n.defaultPrevented))
            return null == t ? void 0 : t(n);
        };
      }
      function ae(...e) {
        return (0, eq.useCallback)(
          (function (...e) {
            return (t) =>
              e.forEach((e) => {
                "function" == typeof e ? e(t) : null != e && (e.current = t);
              });
          })(...e),
          e
        );
      }
      function at(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((null == e || e(n), !1 === r || !n.defaultPrevented))
            return null == t ? void 0 : t(n);
        };
      }
      let ar = (0, eq.forwardRef)((e, t) => {
        let { children: r, ...n } = e,
          i = eq.Children.toArray(r),
          a = i.find(aa);
        if (a) {
          let e = a.props.children,
            r = i.map((t) =>
              t !== a
                ? t
                : eq.Children.count(e) > 1
                ? eq.Children.only(null)
                : (0, eq.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, eq.createElement)(
            an,
            iz({}, n, { ref: t }),
            (0, eq.isValidElement)(e)
              ? (0, eq.cloneElement)(e, void 0, r)
              : null
          );
        }
        return (0, eq.createElement)(an, iz({}, n, { ref: t }), r);
      });
      ar.displayName = "Slot";
      let an = (0, eq.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        return (0, eq.isValidElement)(r)
          ? (0, eq.cloneElement)(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let i = e[n],
                    a = t[n],
                    o = /^on[A-Z]/.test(n);
                  o
                    ? i && a
                      ? (r[n] = (...e) => {
                          a(...e), i(...e);
                        })
                      : i && (r[n] = i)
                    : "style" === n
                    ? (r[n] = { ...i, ...a })
                    : "className" === n &&
                      (r[n] = [i, a].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(n, r.props),
              ref: t
                ? (function (...e) {
                    return (t) =>
                      e.forEach((e) => {
                        "function" == typeof e
                          ? e(t)
                          : null != e && (e.current = t);
                      });
                  })(t, r.ref)
                : r.ref,
            })
          : eq.Children.count(r) > 1
          ? eq.Children.only(null)
          : null;
      });
      an.displayName = "SlotClone";
      let ai = ({ children: e }) => (0, eq.createElement)(eq.Fragment, null, e);
      function aa(e) {
        return (0, eq.isValidElement)(e) && e.type === ai;
      }
      let ao = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let r = (0, eq.forwardRef)((e, r) => {
          let { asChild: n, ...i } = e,
            a = n ? ar : t;
          return (
            (0, eq.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, eq.createElement)(a, iz({}, i, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
      }, {});
      function al(e) {
        let t = (0, eq.useRef)(e);
        return (
          (0, eq.useEffect)(() => {
            t.current = e;
          }),
          (0, eq.useMemo)(
            () =>
              (...e) => {
                var r;
                return null === (r = t.current) || void 0 === r
                  ? void 0
                  : r.call(t, ...e);
              },
            []
          )
        );
      }
      let ac = "dismissableLayer.update",
        as = (0, eq.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        ad = (0, eq.forwardRef)((e, t) => {
          var r;
          let {
              disableOutsidePointerEvents: i = !1,
              onEscapeKeyDown: a,
              onPointerDownOutside: o,
              onFocusOutside: l,
              onInteractOutside: c,
              onDismiss: s,
              ...d
            } = e,
            f = (0, eq.useContext)(as),
            [u, g] = (0, eq.useState)(null),
            p =
              null !== (r = null == u ? void 0 : u.ownerDocument) &&
              void 0 !== r
                ? r
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, v] = (0, eq.useState)({}),
            m = (function (...e) {
              return (0, eq.useCallback)(
                (function (...e) {
                  return (t) =>
                    e.forEach((e) => {
                      "function" == typeof e
                        ? e(t)
                        : null != e && (e.current = t);
                    });
                })(...e),
                e
              );
            })(t, (e) => g(e)),
            h = Array.from(f.layers),
            [y] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
            b = h.indexOf(y),
            S = u ? h.indexOf(u) : -1,
            B = f.layersWithOutsidePointerEventsDisabled.size > 0,
            x = S >= b,
            F = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = al(e),
                n = (0, eq.useRef)(!1),
                i = (0, eq.useRef)(() => {});
              return (
                (0, eq.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !n.current) {
                        let n = { originalEvent: e };
                        function a() {
                          au("dismissableLayer.pointerDownOutside", r, n, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", i.current),
                            (i.current = a),
                            t.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : a();
                      }
                      n.current = !1;
                    },
                    a = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(a),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", i.current);
                  };
                }, [t, r]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...f.branches].some((e) => e.contains(t));
              !x ||
                r ||
                (null == o || o(e),
                null == c || c(e),
                e.defaultPrevented || null == s || s());
            }, p),
            A = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = al(e),
                n = (0, eq.useRef)(!1);
              return (
                (0, eq.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !n.current &&
                      au(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, r]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })((e) => {
              let t = e.target,
                r = [...f.branches].some((e) => e.contains(t));
              r ||
                (null == l || l(e),
                null == c || c(e),
                e.defaultPrevented || null == s || s());
            }, p);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = al(e);
              (0, eq.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && r(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [r, t]);
            })((e) => {
              let t = S === f.layers.size - 1;
              t &&
                (null == a || a(e),
                !e.defaultPrevented && s && (e.preventDefault(), s()));
            }, p),
            (0, eq.useEffect)(() => {
              if (u)
                return (
                  i &&
                    (0 === f.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = p.body.style.pointerEvents),
                      (p.body.style.pointerEvents = "none")),
                    f.layersWithOutsidePointerEventsDisabled.add(u)),
                  f.layers.add(u),
                  af(),
                  () => {
                    i &&
                      1 === f.layersWithOutsidePointerEventsDisabled.size &&
                      (p.body.style.pointerEvents = n);
                  }
                );
            }, [u, p, i, f]),
            (0, eq.useEffect)(
              () => () => {
                u &&
                  (f.layers.delete(u),
                  f.layersWithOutsidePointerEventsDisabled.delete(u),
                  af());
              },
              [u, f]
            ),
            (0, eq.useEffect)(() => {
              let e = () => v({});
              return (
                document.addEventListener(ac, e),
                () => document.removeEventListener(ac, e)
              );
            }, []),
            (0, eq.createElement)(
              ao.div,
              iz({}, d, {
                ref: m,
                style: {
                  pointerEvents: B ? (x ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: at(e.onFocusCapture, A.onFocusCapture),
                onBlurCapture: at(e.onBlurCapture, A.onBlurCapture),
                onPointerDownCapture: at(
                  e.onPointerDownCapture,
                  F.onPointerDownCapture
                ),
              })
            )
          );
        });
      function af() {
        let e = new CustomEvent(ac);
        document.dispatchEvent(e);
      }
      function au(e, t, r, { discrete: n }) {
        let i = r.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        (t && i.addEventListener(e, t, { once: !0 }), n)
          ? i && (0, i$.flushSync)(() => i.dispatchEvent(a))
          : i.dispatchEvent(a);
      }
      let ag = 0;
      function ap() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      let av = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = (0, eq.forwardRef)((e, r) => {
            let { asChild: n, ...i } = e,
              a = n ? ar : t;
            return (
              (0, eq.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, eq.createElement)(a, iz({}, i, { ref: r }))
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {}),
        am = "focusScope.autoFocusOnMount",
        ah = "focusScope.autoFocusOnUnmount",
        ay = { bubbles: !1, cancelable: !0 },
        ab = (0, eq.forwardRef)((e, t) => {
          let {
              loop: r = !1,
              trapped: n = !1,
              onMountAutoFocus: i,
              onUnmountAutoFocus: a,
              ...o
            } = e,
            [l, c] = (0, eq.useState)(null),
            s = al(i),
            d = al(a),
            f = (0, eq.useRef)(null),
            u = (function (...e) {
              return (0, eq.useCallback)(
                (function (...e) {
                  return (t) =>
                    e.forEach((e) => {
                      "function" == typeof e
                        ? e(t)
                        : null != e && (e.current = t);
                    });
                })(...e),
                e
              );
            })(t, (e) => c(e)),
            g = (0, eq.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, eq.useEffect)(() => {
            if (n) {
              function e(e) {
                if (g.paused || !l) return;
                let t = e.target;
                l.contains(t) ? (f.current = t) : ax(f.current, { select: !0 });
              }
              function t(e) {
                if (g.paused || !l) return;
                let t = e.relatedTarget;
                null === t || l.contains(t) || ax(f.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let r = new MutationObserver(function (e) {
                let t = document.activeElement;
                for (let r of e)
                  r.removedNodes.length > 0 &&
                    !(null != l && l.contains(t)) &&
                    ax(l);
              });
              return (
                l && r.observe(l, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    r.disconnect();
                }
              );
            }
          }, [n, l, g.paused]),
            (0, eq.useEffect)(() => {
              if (l) {
                aF.add(g);
                let e = document.activeElement,
                  t = l.contains(e);
                if (!t) {
                  let t = new CustomEvent(am, ay);
                  l.addEventListener(am, s),
                    l.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let r = document.activeElement;
                        for (let n of e)
                          if (
                            (ax(n, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        aS(l).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && ax(l));
                }
                return () => {
                  l.removeEventListener(am, s),
                    setTimeout(() => {
                      let t = new CustomEvent(ah, ay);
                      l.addEventListener(ah, d),
                        l.dispatchEvent(t),
                        t.defaultPrevented ||
                          ax(null != e ? e : document.body, { select: !0 }),
                        l.removeEventListener(ah, d),
                        aF.remove(g);
                    }, 0);
                };
              }
            }, [l, s, d, g]);
          let p = (0, eq.useCallback)(
            (e) => {
              if ((!r && !n) || g.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                i = document.activeElement;
              if (t && i) {
                let t = e.currentTarget,
                  [n, a] = (function (e) {
                    let t = aS(e),
                      r = aB(t, e),
                      n = aB(t.reverse(), e);
                    return [r, n];
                  })(t),
                  o = n && a;
                o
                  ? e.shiftKey || i !== a
                    ? e.shiftKey &&
                      i === n &&
                      (e.preventDefault(), r && ax(a, { select: !0 }))
                    : (e.preventDefault(), r && ax(n, { select: !0 }))
                  : i === t && e.preventDefault();
              }
            },
            [r, n, g.paused]
          );
          return (0, eq.createElement)(
            av.div,
            iz({ tabIndex: -1 }, o, { ref: u, onKeyDown: p })
          );
        });
      function aS(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function aB(e, t) {
        for (let r of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(r, { upTo: t })
          )
            return r;
      }
      function ax(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var r;
          let n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n &&
              (r = e) instanceof HTMLInputElement &&
              "select" in r &&
              t &&
              e.select();
        }
      }
      let aF =
        ((i = []),
        {
          add(e) {
            let t = i[0];
            e !== t && (null == t || t.pause()), (i = aA(i, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (i = aA(i, e))[0]) || void 0 === t || t.resume();
          },
        });
      function aA(e, t) {
        let r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r;
      }
      let aw = (null == globalThis ? void 0 : globalThis.document)
          ? eq.useLayoutEffect
          : () => {},
        aO = eY["useId".toString()] || (() => void 0),
        ak = 0;
      function aD(e) {
        return e.split("-")[1];
      }
      function aH(e) {
        return "y" === e ? "height" : "width";
      }
      function aj(e) {
        return e.split("-")[0];
      }
      function aC(e) {
        return ["top", "bottom"].includes(aj(e)) ? "x" : "y";
      }
      function aE(e, t, r) {
        let n,
          { reference: i, floating: a } = e,
          o = i.x + i.width / 2 - a.width / 2,
          l = i.y + i.height / 2 - a.height / 2,
          c = aC(t),
          s = aH(c),
          d = i[s] / 2 - a[s] / 2,
          f = "x" === c;
        switch (aj(t)) {
          case "top":
            n = { x: o, y: i.y - a.height };
            break;
          case "bottom":
            n = { x: o, y: i.y + i.height };
            break;
          case "right":
            n = { x: i.x + i.width, y: l };
            break;
          case "left":
            n = { x: i.x - a.width, y: l };
            break;
          default:
            n = { x: i.x, y: i.y };
        }
        switch (aD(t)) {
          case "start":
            n[c] -= d * (r && f ? -1 : 1);
            break;
          case "end":
            n[c] += d * (r && f ? -1 : 1);
        }
        return n;
      }
      let aP = async (e, t, r) => {
        let {
            placement: n = "bottom",
            strategy: i = "absolute",
            middleware: a = [],
            platform: o,
          } = r,
          l = a.filter(Boolean),
          c = await (null == o.isRTL ? void 0 : o.isRTL(t)),
          s = await o.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: d, y: f } = aE(s, n, c),
          u = n,
          g = {},
          p = 0;
        for (let r = 0; r < l.length; r++) {
          let { name: a, fn: v } = l[r],
            {
              x: m,
              y: h,
              data: y,
              reset: b,
            } = await v({
              x: d,
              y: f,
              initialPlacement: n,
              placement: u,
              strategy: i,
              middlewareData: g,
              rects: s,
              platform: o,
              elements: { reference: e, floating: t },
            });
          (d = null != m ? m : d),
            (f = null != h ? h : f),
            (g = { ...g, [a]: { ...g[a], ...y } }),
            b &&
              p <= 50 &&
              (p++,
              "object" == typeof b &&
                (b.placement && (u = b.placement),
                b.rects &&
                  (s =
                    !0 === b.rects
                      ? await o.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : b.rects),
                ({ x: d, y: f } = aE(s, u, c))),
              (r = -1));
        }
        return { x: d, y: f, placement: u, strategy: i, middlewareData: g };
      };
      function aN(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function aI(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function aM(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      async function az(e, t) {
        var r;
        void 0 === t && (t = {});
        let { x: n, y: i, platform: a, rects: o, elements: l, strategy: c } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: f = "floating",
            altBoundary: u = !1,
            padding: g = 0,
          } = aN(t, e),
          p = aI(g),
          v = l[u ? ("floating" === f ? "reference" : "floating") : f],
          m = aM(
            await a.getClippingRect({
              element:
                null ==
                  (r = await (null == a.isElement ? void 0 : a.isElement(v))) ||
                r
                  ? v
                  : v.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(l.floating))),
              boundary: s,
              rootBoundary: d,
              strategy: c,
            })
          ),
          h = "floating" === f ? { ...o.floating, x: n, y: i } : o.reference,
          y = await (null == a.getOffsetParent
            ? void 0
            : a.getOffsetParent(l.floating)),
          b = ((await (null == a.isElement ? void 0 : a.isElement(y))) &&
            (await (null == a.getScale ? void 0 : a.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          S = aM(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: h,
                  offsetParent: y,
                  strategy: c,
                })
              : h
          );
        return {
          top: (m.top - S.top + p.top) / b.y,
          bottom: (S.bottom - m.bottom + p.bottom) / b.y,
          left: (m.left - S.left + p.left) / b.x,
          right: (S.right - m.right + p.right) / b.x,
        };
      }
      let aT = Math.min,
        aL = Math.max,
        aW = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: r,
                y: n,
                placement: i,
                rects: a,
                platform: o,
                elements: l,
              } = t,
              { element: c, padding: s = 0 } = aN(e, t) || {};
            if (null == c) return {};
            let d = aI(s),
              f = { x: r, y: n },
              u = aC(i),
              g = aH(u),
              p = await o.getDimensions(c),
              v = "y" === u,
              m = v ? "clientHeight" : "clientWidth",
              h = a.reference[g] + a.reference[u] - f[u] - a.floating[g],
              y = f[u] - a.reference[u],
              b = await (null == o.getOffsetParent
                ? void 0
                : o.getOffsetParent(c)),
              S = b ? b[m] : 0;
            (S && (await (null == o.isElement ? void 0 : o.isElement(b)))) ||
              (S = l.floating[m] || a.floating[g]);
            let B = S / 2 - p[g] / 2 - 1,
              x = aT(d[v ? "top" : "left"], B),
              F = aT(d[v ? "bottom" : "right"], B),
              A = S - p[g] - F,
              w = S / 2 - p[g] / 2 + (h / 2 - y / 2),
              O = aL(x, aT(w, A)),
              k =
                null != aD(i) &&
                w != O &&
                a.reference[g] / 2 - (w < x ? x : F) - p[g] / 2 < 0
                  ? w < x
                    ? x - w
                    : A - w
                  : 0;
            return { [u]: f[u] - k, data: { [u]: O, centerOffset: w - O + k } };
          },
        }),
        aR = ["top", "right", "bottom", "left"],
        a$ =
          (aR.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
          { left: "right", right: "left", bottom: "top", top: "bottom" });
      function aV(e) {
        return e.replace(/left|right|bottom|top/g, (e) => a$[e]);
      }
      let aG = { start: "end", end: "start" };
      function a_(e) {
        return e.replace(/start|end/g, (e) => aG[e]);
      }
      function aU(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function aq(e) {
        return aR.some((t) => e[t] >= 0);
      }
      function aY(e) {
        return "x" === e ? "y" : "x";
      }
      function aK(e) {
        var t;
        return (
          (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        );
      }
      function aX(e) {
        return aK(e).getComputedStyle(e);
      }
      function aZ(e) {
        return e instanceof aK(e).Node;
      }
      function aJ(e) {
        return aZ(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function aQ(e) {
        return e instanceof aK(e).HTMLElement;
      }
      function a0(e) {
        return e instanceof aK(e).Element;
      }
      function a2(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof aK(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      function a1(e) {
        let { overflow: t, overflowX: r, overflowY: n, display: i } = aX(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
          !["inline", "contents"].includes(i)
        );
      }
      function a5(e) {
        let t = a3(),
          r = aX(e);
        return (
          "none" !== r.transform ||
          "none" !== r.perspective ||
          (!t && !!r.backdropFilter && "none" !== r.backdropFilter) ||
          (!t && !!r.filter && "none" !== r.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (r.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (r.contain || "").includes(e)
          )
        );
      }
      function a3() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function a8(e) {
        return ["html", "body", "#document"].includes(aJ(e));
      }
      let a4 = Math.min,
        a6 = Math.max,
        a7 = Math.round,
        a9 = Math.floor,
        oe = (e) => ({ x: e, y: e });
      function ot(e) {
        let t = aX(e),
          r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0,
          i = aQ(e),
          a = i ? e.offsetWidth : r,
          o = i ? e.offsetHeight : n,
          l = a7(r) !== a || a7(n) !== o;
        return l && ((r = a), (n = o)), { width: r, height: n, $: l };
      }
      function or(e) {
        return a0(e) ? e : e.contextElement;
      }
      function on(e) {
        let t = or(e);
        if (!aQ(t)) return oe(1);
        let r = t.getBoundingClientRect(),
          { width: n, height: i, $: a } = ot(t),
          o = (a ? a7(r.width) : r.width) / n,
          l = (a ? a7(r.height) : r.height) / i;
        return (
          (o && Number.isFinite(o)) || (o = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: o, y: l }
        );
      }
      let oi = oe(0);
      function oa(e, t, r) {
        var n, i;
        if ((void 0 === t && (t = !0), !a3())) return oi;
        let a = e ? aK(e) : window;
        return !r || (t && r !== a)
          ? oi
          : {
              x: (null == (n = a.visualViewport) ? void 0 : n.offsetLeft) || 0,
              y: (null == (i = a.visualViewport) ? void 0 : i.offsetTop) || 0,
            };
      }
      function oo(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        let i = e.getBoundingClientRect(),
          a = or(e),
          o = oe(1);
        t && (n ? a0(n) && (o = on(n)) : (o = on(e)));
        let l = oa(a, r, n),
          c = (i.left + l.x) / o.x,
          s = (i.top + l.y) / o.y,
          d = i.width / o.x,
          f = i.height / o.y;
        if (a) {
          let e = aK(a),
            t = n && a0(n) ? aK(n) : n,
            r = e.frameElement;
          for (; r && n && t !== e; ) {
            let e = on(r),
              t = r.getBoundingClientRect(),
              n = getComputedStyle(r),
              i = t.left + (r.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              a = t.top + (r.clientTop + parseFloat(n.paddingTop)) * e.y;
            (c *= e.x),
              (s *= e.y),
              (d *= e.x),
              (f *= e.y),
              (c += i),
              (s += a),
              (r = aK(r).frameElement);
          }
        }
        return aM({ width: d, height: f, x: c, y: s });
      }
      function ol(e) {
        return ((aZ(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function oc(e) {
        return a0(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function os(e) {
        return oo(ol(e)).left + oc(e).scrollLeft;
      }
      function od(e) {
        if ("html" === aJ(e)) return e;
        let t = e.assignedSlot || e.parentNode || (a2(e) && e.host) || ol(e);
        return a2(t) ? t.host : t;
      }
      function of(e, t) {
        var r;
        void 0 === t && (t = []);
        let n = (function e(t) {
            let r = od(t);
            return a8(r)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : aQ(r) && a1(r)
              ? r
              : e(r);
          })(e),
          i = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = aK(n);
        return i
          ? t.concat(a, a.visualViewport || [], a1(n) ? n : [])
          : t.concat(n, of(n));
      }
      function ou(e, t, r) {
        let n;
        if ("viewport" === t)
          n = (function (e, t) {
            let r = aK(e),
              n = ol(e),
              i = r.visualViewport,
              a = n.clientWidth,
              o = n.clientHeight,
              l = 0,
              c = 0;
            if (i) {
              (a = i.width), (o = i.height);
              let e = a3();
              (!e || (e && "fixed" === t)) &&
                ((l = i.offsetLeft), (c = i.offsetTop));
            }
            return { width: a, height: o, x: l, y: c };
          })(e, r);
        else if ("document" === t)
          n = (function (e) {
            let t = ol(e),
              r = oc(e),
              n = e.ownerDocument.body,
              i = a6(
                t.scrollWidth,
                t.clientWidth,
                n.scrollWidth,
                n.clientWidth
              ),
              a = a6(
                t.scrollHeight,
                t.clientHeight,
                n.scrollHeight,
                n.clientHeight
              ),
              o = -r.scrollLeft + os(e),
              l = -r.scrollTop;
            return (
              "rtl" === aX(n).direction &&
                (o += a6(t.clientWidth, n.clientWidth) - i),
              { width: i, height: a, x: o, y: l }
            );
          })(ol(e));
        else if (a0(t))
          n = (function (e, t) {
            let r = oo(e, !0, "fixed" === t),
              n = r.top + e.clientTop,
              i = r.left + e.clientLeft,
              a = aQ(e) ? on(e) : oe(1);
            return {
              width: e.clientWidth * a.x,
              height: e.clientHeight * a.y,
              x: i * a.x,
              y: n * a.y,
            };
          })(t, r);
        else {
          let r = oa(e);
          n = { ...t, x: t.x - r.x, y: t.y - r.y };
        }
        return aM(n);
      }
      function og(e, t) {
        return aQ(e) && "fixed" !== aX(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function op(e, t) {
        let r = aK(e);
        if (!aQ(e)) return r;
        let n = og(e, t);
        for (
          ;
          n &&
          ["table", "td", "th"].includes(aJ(n)) &&
          "static" === aX(n).position;

        )
          n = og(n, t);
        return n &&
          ("html" === aJ(n) ||
            ("body" === aJ(n) && "static" === aX(n).position && !a5(n)))
          ? r
          : n ||
              (function (e) {
                let t = od(e);
                for (; aQ(t) && !a8(t); ) {
                  if (a5(t)) return t;
                  t = od(t);
                }
                return null;
              })(e) ||
              r;
      }
      let ov = {
        getClippingRect: function (e) {
          let { element: t, boundary: r, rootBoundary: n, strategy: i } = e,
            a =
              "clippingAncestors" === r
                ? (function (e, t) {
                    let r = t.get(e);
                    if (r) return r;
                    let n = of(e).filter((e) => a0(e) && "body" !== aJ(e)),
                      i = null,
                      a = "fixed" === aX(e).position,
                      o = a ? od(e) : e;
                    for (; a0(o) && !a8(o); ) {
                      let t = aX(o),
                        r = a5(o);
                      r || "fixed" !== t.position || (i = null),
                        (
                          a
                            ? !r && !i
                            : (!r &&
                                "static" === t.position &&
                                i &&
                                ["absolute", "fixed"].includes(i.position)) ||
                              (a1(o) &&
                                !r &&
                                (function e(t, r) {
                                  let n = od(t);
                                  return (
                                    !(n === r || !a0(n) || a8(n)) &&
                                    ("fixed" === aX(n).position || e(n, r))
                                  );
                                })(e, o))
                        )
                          ? (n = n.filter((e) => e !== o))
                          : (i = t),
                        (o = od(o));
                    }
                    return t.set(e, n), n;
                  })(t, this._c)
                : [].concat(r),
            o = [...a, n],
            l = o[0],
            c = o.reduce((e, r) => {
              let n = ou(t, r, i);
              return (
                (e.top = a6(n.top, e.top)),
                (e.right = a4(n.right, e.right)),
                (e.bottom = a4(n.bottom, e.bottom)),
                (e.left = a6(n.left, e.left)),
                e
              );
            }, ou(t, l, i));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top,
          };
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { rect: t, offsetParent: r, strategy: n } = e,
            i = aQ(r),
            a = ol(r);
          if (r === a) return t;
          let o = { scrollLeft: 0, scrollTop: 0 },
            l = oe(1),
            c = oe(0);
          if (
            (i || (!i && "fixed" !== n)) &&
            (("body" !== aJ(r) || a1(a)) && (o = oc(r)), aQ(r))
          ) {
            let e = oo(r);
            (l = on(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop);
          }
          return {
            width: t.width * l.x,
            height: t.height * l.y,
            x: t.x * l.x - o.scrollLeft * l.x + c.x,
            y: t.y * l.y - o.scrollTop * l.y + c.y,
          };
        },
        isElement: a0,
        getDimensions: function (e) {
          return ot(e);
        },
        getOffsetParent: op,
        getDocumentElement: ol,
        getScale: on,
        async getElementRects(e) {
          let { reference: t, floating: r, strategy: n } = e,
            i = this.getOffsetParent || op,
            a = this.getDimensions;
          return {
            reference: (function (e, t, r) {
              let n = aQ(t),
                i = ol(t),
                a = "fixed" === r,
                o = oo(e, !0, a, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                c = oe(0);
              if (n || (!n && !a)) {
                if ((("body" !== aJ(t) || a1(i)) && (l = oc(t)), aQ(t))) {
                  let e = oo(t, !0, a, t);
                  (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
                } else i && (c.x = os(i));
              }
              return {
                x: o.left + l.scrollLeft - c.x,
                y: o.top + l.scrollTop - c.y,
                width: o.width,
                height: o.height,
              };
            })(t, await i(r), n),
            floating: { x: 0, y: 0, ...(await a(r)) },
          };
        },
        getClientRects: (e) => Array.from(e.getClientRects()),
        isRTL: (e) => "rtl" === aX(e).direction,
      };
      function om(e, t, r, n) {
        void 0 === n && (n = {});
        let {
            ancestorScroll: i = !0,
            ancestorResize: a = !0,
            elementResize: o = !0,
            layoutShift: l = "function" == typeof IntersectionObserver,
            animationFrame: c = !1,
          } = n,
          s = or(e),
          d = i || a ? [...(s ? of(s) : []), ...of(t)] : [];
        d.forEach((e) => {
          i && e.addEventListener("scroll", r, { passive: !0 }),
            a && e.addEventListener("resize", r);
        });
        let f =
            s && l
              ? (function (e, t) {
                  let r,
                    n = null,
                    i = ol(e);
                  function a() {
                    clearTimeout(r), n && n.disconnect(), (n = null);
                  }
                  return (
                    (function o(l, c) {
                      void 0 === l && (l = !1), void 0 === c && (c = 1), a();
                      let {
                        left: s,
                        top: d,
                        width: f,
                        height: u,
                      } = e.getBoundingClientRect();
                      if ((l || t(), !f || !u)) return;
                      let g = a9(d),
                        p = a9(i.clientWidth - (s + f)),
                        v = a9(i.clientHeight - (d + u)),
                        m = a9(s),
                        h = !0;
                      (n = new IntersectionObserver(
                        (e) => {
                          let t = e[0].intersectionRatio;
                          if (t !== c) {
                            if (!h) return o();
                            0 === t
                              ? (r = setTimeout(() => {
                                  o(!1, 1e-7);
                                }, 100))
                              : o(!1, t);
                          }
                          h = !1;
                        },
                        {
                          rootMargin:
                            -g + "px " + -p + "px " + -v + "px " + -m + "px",
                          threshold: c,
                        }
                      )).observe(e);
                    })(!0),
                    a
                  );
                })(s, r)
              : null,
          u,
          g = null;
        o &&
          ((g = new ResizeObserver(r)), s && !c && g.observe(s), g.observe(t));
        let p = c ? oo(e) : null;
        return (
          c &&
            (function t() {
              let n = oo(e);
              p &&
                (n.x !== p.x ||
                  n.y !== p.y ||
                  n.width !== p.width ||
                  n.height !== p.height) &&
                r(),
                (p = n),
                (u = requestAnimationFrame(t));
            })(),
          r(),
          () => {
            d.forEach((e) => {
              i && e.removeEventListener("scroll", r),
                a && e.removeEventListener("resize", r);
            }),
              f && f(),
              g && g.disconnect(),
              (g = null),
              c && cancelAnimationFrame(u);
          }
        );
      }
      let oh = (e, t, r) => {
          let n = new Map(),
            i = { platform: ov, ...r },
            a = { ...i.platform, _c: n };
          return aP(e, t, { ...i, platform: a });
        },
        oy = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: r, padding: n } = "function" == typeof e ? e(t) : e;
            if (r && {}.hasOwnProperty.call(r, "current")) {
              if (null != r.current)
                return aW({ element: r.current, padding: n }).fn(t);
            } else if (r) return aW({ element: r, padding: n }).fn(t);
            return {};
          },
        });
      var ob =
        "undefined" != typeof document ? eq.useLayoutEffect : eq.useEffect;
      function oS(e, t) {
        let r, n, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) != t.length) return !1;
            for (n = r; 0 != n--; ) if (!oS(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (i = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(t, i[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = i[n];
            if (("_owner" !== r || !e.$$typeof) && !oS(e[r], t[r])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function oB(e) {
        if ("undefined" == typeof window) return 1;
        let t = e.ownerDocument.defaultView || window;
        return t.devicePixelRatio || 1;
      }
      function ox(e, t) {
        let r = oB(e);
        return Math.round(t * r) / r;
      }
      function oF(e) {
        let t = eq.useRef(e);
        return (
          ob(() => {
            t.current = e;
          }),
          t
        );
      }
      let oA = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = (0, eq.forwardRef)((e, r) => {
            let { asChild: n, ...i } = e,
              a = n ? ar : t;
            return (
              (0, eq.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, eq.createElement)(a, iz({}, i, { ref: r }))
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {}),
        ow = (0, eq.forwardRef)((e, t) => {
          let { children: r, width: n = 10, height: i = 5, ...a } = e;
          return (0, eq.createElement)(
            oA.svg,
            iz({}, a, {
              ref: t,
              width: n,
              height: i,
              viewBox: "0 0 30 10",
              preserveAspectRatio: "none",
            }),
            e.asChild
              ? r
              : (0, eq.createElement)("polygon", { points: "0,0 30,0 15,10" })
          );
        });
      function oO(...e) {
        return (0, eq.useCallback)(
          (function (...e) {
            return (t) =>
              e.forEach((e) => {
                "function" == typeof e ? e(t) : null != e && (e.current = t);
              });
          })(...e),
          e
        );
      }
      let ok = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = (0, eq.forwardRef)((e, r) => {
            let { asChild: n, ...i } = e,
              a = n ? ar : t;
            return (
              (0, eq.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, eq.createElement)(a, iz({}, i, { ref: r }))
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {}),
        oD = (null == globalThis ? void 0 : globalThis.document)
          ? eq.useLayoutEffect
          : () => {},
        oH = (null == globalThis ? void 0 : globalThis.document)
          ? eq.useLayoutEffect
          : () => {},
        oj = "Popper",
        [oC, oE] = (function (e, t = []) {
          let r = [],
            n = () => {
              let t = r.map((e) => (0, eq.createContext)(e));
              return function (r) {
                let n = (null == r ? void 0 : r[e]) || t;
                return (0, eq.useMemo)(
                  () => ({ [`__scope${e}`]: { ...r, [e]: n } }),
                  [r, n]
                );
              };
            };
          return (
            (n.scopeName = e),
            [
              function (t, n) {
                let i = (0, eq.createContext)(n),
                  a = r.length;
                function o(t) {
                  let { scope: r, children: n, ...o } = t,
                    l = (null == r ? void 0 : r[e][a]) || i,
                    c = (0, eq.useMemo)(() => o, Object.values(o));
                  return (0, eq.createElement)(l.Provider, { value: c }, n);
                }
                return (
                  (r = [...r, n]),
                  (o.displayName = t + "Provider"),
                  [
                    o,
                    function (r, o) {
                      let l = (null == o ? void 0 : o[e][a]) || i,
                        c = (0, eq.useContext)(l);
                      if (c) return c;
                      if (void 0 !== n) return n;
                      throw Error(`\`${r}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let r = () => {
                  let r = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let n = r.reduce((t, { useScope: r, scopeName: n }) => {
                      let i = r(e),
                        a = i[`__scope${n}`];
                      return { ...t, ...a };
                    }, {});
                    return (0, eq.useMemo)(
                      () => ({ [`__scope${t.scopeName}`]: n }),
                      [n]
                    );
                  };
                };
                return (r.scopeName = t.scopeName), r;
              })(n, ...t),
            ]
          );
        })(oj),
        [oP, oN] = oC(oj),
        oI = (0, eq.forwardRef)((e, t) => {
          let { __scopePopper: r, virtualRef: n, ...i } = e,
            a = oN("PopperAnchor", r),
            o = (0, eq.useRef)(null),
            l = oO(t, o);
          return (
            (0, eq.useEffect)(() => {
              a.onAnchorChange((null == n ? void 0 : n.current) || o.current);
            }),
            n ? null : (0, eq.createElement)(ok.div, iz({}, i, { ref: l }))
          );
        }),
        oM = "PopperContent",
        [oz, oT] = oC(oM),
        oL = (0, eq.forwardRef)((e, t) => {
          var r, n, i, a, o, l, c, s, d, f, u, g, p, v;
          let {
              __scopePopper: m,
              side: h = "bottom",
              sideOffset: y = 0,
              align: b = "center",
              alignOffset: S = 0,
              arrowPadding: B = 0,
              collisionBoundary: x = [],
              collisionPadding: F = 0,
              sticky: A = "partial",
              hideWhenDetached: w = !1,
              avoidCollisions: O = !0,
              onPlaced: k,
              ...D
            } = e,
            H = oN(oM, m),
            [j, C] = (0, eq.useState)(null),
            E = oO(t, (e) => C(e)),
            [P, N] = (0, eq.useState)(null),
            I = (function (e) {
              let [t, r] = (0, eq.useState)(void 0);
              return (
                oH(() => {
                  if (e) {
                    r({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let n, i;
                      if (!Array.isArray(t) || !t.length) return;
                      let a = t[0];
                      if ("borderBoxSize" in a) {
                        let e = a.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (n = t.inlineSize), (i = t.blockSize);
                      } else (n = e.offsetWidth), (i = e.offsetHeight);
                      r({ width: n, height: i });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  r(void 0);
                }, [e]),
                t
              );
            })(P),
            M =
              null !== (r = null == I ? void 0 : I.width) && void 0 !== r
                ? r
                : 0,
            z =
              null !== (n = null == I ? void 0 : I.height) && void 0 !== n
                ? n
                : 0,
            T =
              "number" == typeof F
                ? F
                : { top: 0, right: 0, bottom: 0, left: 0, ...F },
            L = Array.isArray(x) ? x : [x],
            W = L.length > 0,
            R = { padding: T, boundary: L.filter(oR), altBoundary: W },
            {
              refs: $,
              floatingStyles: V,
              placement: G,
              isPositioned: _,
              middlewareData: U,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: r = "absolute",
                  middleware: n = [],
                  platform: i,
                  elements: { reference: a, floating: o } = {},
                  transform: l = !0,
                  whileElementsMounted: c,
                  open: s,
                } = e,
                [d, f] = eq.useState({
                  x: 0,
                  y: 0,
                  strategy: r,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [u, g] = eq.useState(n);
              oS(u, n) || g(n);
              let [p, v] = eq.useState(null),
                [m, h] = eq.useState(null),
                y = eq.useCallback(
                  (e) => {
                    e != x.current && ((x.current = e), v(e));
                  },
                  [v]
                ),
                b = eq.useCallback(
                  (e) => {
                    e !== F.current && ((F.current = e), h(e));
                  },
                  [h]
                ),
                S = a || p,
                B = o || m,
                x = eq.useRef(null),
                F = eq.useRef(null),
                A = eq.useRef(d),
                w = oF(c),
                O = oF(i),
                k = eq.useCallback(() => {
                  if (!x.current || !F.current) return;
                  let e = { placement: t, strategy: r, middleware: u };
                  O.current && (e.platform = O.current),
                    oh(x.current, F.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      D.current &&
                        !oS(A.current, t) &&
                        ((A.current = t),
                        i$.flushSync(() => {
                          f(t);
                        }));
                    });
                }, [u, t, r, O]);
              ob(() => {
                !1 === s &&
                  A.current.isPositioned &&
                  ((A.current.isPositioned = !1),
                  f((e) => ({ ...e, isPositioned: !1 })));
              }, [s]);
              let D = eq.useRef(!1);
              ob(
                () => (
                  (D.current = !0),
                  () => {
                    D.current = !1;
                  }
                ),
                []
              ),
                ob(() => {
                  if ((S && (x.current = S), B && (F.current = B), S && B)) {
                    if (w.current) return w.current(S, B, k);
                    k();
                  }
                }, [S, B, k, w]);
              let H = eq.useMemo(
                  () => ({
                    reference: x,
                    floating: F,
                    setReference: y,
                    setFloating: b,
                  }),
                  [y, b]
                ),
                j = eq.useMemo(() => ({ reference: S, floating: B }), [S, B]),
                C = eq.useMemo(() => {
                  let e = { position: r, left: 0, top: 0 };
                  if (!j.floating) return e;
                  let t = ox(j.floating, d.x),
                    n = ox(j.floating, d.y);
                  return l
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + n + "px)",
                        ...(oB(j.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: r, left: t, top: n };
                }, [r, l, j.floating, d.x, d.y]);
              return eq.useMemo(
                () => ({
                  ...d,
                  update: k,
                  refs: H,
                  elements: j,
                  floatingStyles: C,
                }),
                [d, k, H, j, C]
              );
            })({
              strategy: "fixed",
              placement: h + ("center" !== b ? "-" + b : ""),
              whileElementsMounted: om,
              elements: { reference: H.anchor },
              middleware: [
                {
                  name: "offset",
                  options: (d = { mainAxis: y + z, alignmentAxis: S }),
                  async fn(e) {
                    let { x: t, y: r } = e,
                      n = await (async function (e, t) {
                        let { placement: r, platform: n, elements: i } = e,
                          a = await (null == n.isRTL
                            ? void 0
                            : n.isRTL(i.floating)),
                          o = aj(r),
                          l = aD(r),
                          c = "x" === aC(r),
                          s = ["left", "top"].includes(o) ? -1 : 1,
                          d = a && c ? -1 : 1,
                          f = aN(t, e),
                          {
                            mainAxis: u,
                            crossAxis: g,
                            alignmentAxis: p,
                          } = "number" == typeof f
                            ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
                            : {
                                mainAxis: 0,
                                crossAxis: 0,
                                alignmentAxis: null,
                                ...f,
                              };
                        return (
                          l &&
                            "number" == typeof p &&
                            (g = "end" === l ? -1 * p : p),
                          c ? { x: g * d, y: u * s } : { x: u * s, y: g * d }
                        );
                      })(e, d);
                    return { x: t + n.x, y: r + n.y, data: n };
                  },
                },
                O && {
                  name: "shift",
                  options: (u = {
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === A
                        ? (void 0 === f && (f = {}),
                          {
                            options: f,
                            fn(e) {
                              let {
                                  x: t,
                                  y: r,
                                  placement: n,
                                  rects: i,
                                  middlewareData: a,
                                } = e,
                                {
                                  offset: o = 0,
                                  mainAxis: l = !0,
                                  crossAxis: c = !0,
                                } = aN(f, e),
                                s = { x: t, y: r },
                                d = aC(n),
                                u = aY(d),
                                g = s[d],
                                p = s[u],
                                v = aN(o, e),
                                m =
                                  "number" == typeof v
                                    ? { mainAxis: v, crossAxis: 0 }
                                    : { mainAxis: 0, crossAxis: 0, ...v };
                              if (l) {
                                let e = "y" === d ? "height" : "width",
                                  t =
                                    i.reference[d] - i.floating[e] + m.mainAxis,
                                  r =
                                    i.reference[d] +
                                    i.reference[e] -
                                    m.mainAxis;
                                g < t ? (g = t) : g > r && (g = r);
                              }
                              if (c) {
                                var h, y;
                                let e = "y" === d ? "width" : "height",
                                  t = ["top", "left"].includes(aj(n)),
                                  r =
                                    i.reference[u] -
                                    i.floating[e] +
                                    ((t &&
                                      (null == (h = a.offset)
                                        ? void 0
                                        : h[u])) ||
                                      0) +
                                    (t ? 0 : m.crossAxis),
                                  o =
                                    i.reference[u] +
                                    i.reference[e] +
                                    (t
                                      ? 0
                                      : (null == (y = a.offset)
                                          ? void 0
                                          : y[u]) || 0) -
                                    (t ? m.crossAxis : 0);
                                p < r ? (p = r) : p > o && (p = o);
                              }
                              return { [d]: g, [u]: p };
                            },
                          })
                        : void 0,
                    ...R,
                  }),
                  async fn(e) {
                    let { x: t, y: r, placement: n } = e,
                      {
                        mainAxis: i = !0,
                        crossAxis: a = !1,
                        limiter: o = {
                          fn: (e) => {
                            let { x: t, y: r } = e;
                            return { x: t, y: r };
                          },
                        },
                        ...l
                      } = aN(u, e),
                      c = { x: t, y: r },
                      s = await az(e, l),
                      d = aC(aj(n)),
                      f = aY(d),
                      g = c[d],
                      p = c[f];
                    if (i) {
                      let e = "y" === d ? "bottom" : "right";
                      g = aL(
                        g + s["y" === d ? "top" : "left"],
                        aT(g, g - s[e])
                      );
                    }
                    a &&
                      (p = aL(
                        p + s["y" === f ? "top" : "left"],
                        aT(p, p - s["y" === f ? "bottom" : "right"])
                      ));
                    let v = o.fn({ ...e, [d]: g, [f]: p });
                    return { ...v, data: { x: v.x - t, y: v.y - r } };
                  },
                },
                O && {
                  name: "flip",
                  options: (g = { ...R }),
                  async fn(e) {
                    var t, r, n, i;
                    let {
                        placement: a,
                        middlewareData: o,
                        rects: l,
                        initialPlacement: c,
                        platform: s,
                        elements: d,
                      } = e,
                      {
                        mainAxis: f = !0,
                        crossAxis: u = !0,
                        fallbackPlacements: p,
                        fallbackStrategy: v = "bestFit",
                        fallbackAxisSideDirection: m = "none",
                        flipAlignment: h = !0,
                        ...y
                      } = aN(g, e),
                      b = aj(a),
                      S = aj(c) === c,
                      B = await (null == s.isRTL
                        ? void 0
                        : s.isRTL(d.floating)),
                      x =
                        p ||
                        (S || !h
                          ? [aV(c)]
                          : (function (e) {
                              let t = aV(e);
                              return [a_(e), t, a_(t)];
                            })(c));
                    p ||
                      "none" === m ||
                      x.push(
                        ...(function (e, t, r, n) {
                          let i = aD(e),
                            a = (function (e, t, r) {
                              let n = ["left", "right"],
                                i = ["right", "left"];
                              switch (e) {
                                case "top":
                                case "bottom":
                                  return r ? (t ? i : n) : t ? n : i;
                                case "left":
                                case "right":
                                  return t
                                    ? ["top", "bottom"]
                                    : ["bottom", "top"];
                                default:
                                  return [];
                              }
                            })(aj(e), "start" === r, n);
                          return (
                            i &&
                              ((a = a.map((e) => e + "-" + i)),
                              t && (a = a.concat(a.map(a_)))),
                            a
                          );
                        })(c, h, m, B)
                      );
                    let F = [c, ...x],
                      A = await az(e, y),
                      w = [],
                      O = (null == (t = o.flip) ? void 0 : t.overflows) || [];
                    if ((f && w.push(A[b]), u)) {
                      let { main: e, cross: t } = (function (e, t, r) {
                        void 0 === r && (r = !1);
                        let n = aD(e),
                          i = aC(e),
                          a = aH(i),
                          o =
                            "x" === i
                              ? n === (r ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === n
                              ? "bottom"
                              : "top";
                        return (
                          t.reference[a] > t.floating[a] && (o = aV(o)),
                          { main: o, cross: aV(o) }
                        );
                      })(a, l, B);
                      w.push(A[e], A[t]);
                    }
                    if (
                      ((O = [...O, { placement: a, overflows: w }]),
                      !w.every((e) => e <= 0))
                    ) {
                      let e =
                          ((null == (r = o.flip) ? void 0 : r.index) || 0) + 1,
                        t = F[e];
                      if (t)
                        return {
                          data: { index: e, overflows: O },
                          reset: { placement: t },
                        };
                      let l =
                        null ==
                        (n = O.filter((e) => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1]
                        )[0])
                          ? void 0
                          : n.placement;
                      if (!l)
                        switch (v) {
                          case "bestFit": {
                            let e =
                              null ==
                              (i = O.map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ]).sort((e, t) => e[1] - t[1])[0])
                                ? void 0
                                : i[0];
                            e && (l = e);
                            break;
                          }
                          case "initialPlacement":
                            l = c;
                        }
                      if (a !== l) return { reset: { placement: l } };
                    }
                    return {};
                  },
                },
                {
                  name: "size",
                  options: (p = {
                    ...R,
                    apply: ({
                      elements: e,
                      rects: t,
                      availableWidth: r,
                      availableHeight: n,
                    }) => {
                      let { width: i, height: a } = t.reference,
                        o = e.floating.style;
                      o.setProperty("--radix-popper-available-width", `${r}px`),
                        o.setProperty(
                          "--radix-popper-available-height",
                          `${n}px`
                        ),
                        o.setProperty("--radix-popper-anchor-width", `${i}px`),
                        o.setProperty("--radix-popper-anchor-height", `${a}px`);
                    },
                  }),
                  async fn(e) {
                    let t, r;
                    let {
                        placement: n,
                        rects: i,
                        platform: a,
                        elements: o,
                      } = e,
                      { apply: l = () => {}, ...c } = aN(p, e),
                      s = await az(e, c),
                      d = aj(n),
                      f = aD(n),
                      u = "x" === aC(n),
                      { width: g, height: v } = i.floating;
                    "top" === d || "bottom" === d
                      ? ((t = d),
                        (r =
                          f ===
                          ((await (null == a.isRTL
                            ? void 0
                            : a.isRTL(o.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((r = d), (t = "end" === f ? "top" : "bottom"));
                    let m = v - s[t],
                      h = g - s[r],
                      y = !e.middlewareData.shift,
                      b = m,
                      S = h;
                    if (u) {
                      let e = g - s.left - s.right;
                      S = f || y ? aT(h, e) : e;
                    } else {
                      let e = v - s.top - s.bottom;
                      b = f || y ? aT(m, e) : e;
                    }
                    if (y && !f) {
                      let e = aL(s.left, 0),
                        t = aL(s.right, 0),
                        r = aL(s.top, 0),
                        n = aL(s.bottom, 0);
                      u
                        ? (S =
                            g -
                            2 *
                              (0 !== e || 0 !== t
                                ? e + t
                                : aL(s.left, s.right)))
                        : (b =
                            v -
                            2 *
                              (0 !== r || 0 !== n
                                ? r + n
                                : aL(s.top, s.bottom)));
                    }
                    await l({ ...e, availableWidth: S, availableHeight: b });
                    let B = await a.getDimensions(o.floating);
                    return g !== B.width || v !== B.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                P && oy({ element: P, padding: B }),
                o$({ arrowWidth: M, arrowHeight: z }),
                w && {
                  name: "hide",
                  options: (v = { strategy: "referenceHidden" }),
                  async fn(e) {
                    let { rects: t } = e,
                      { strategy: r = "referenceHidden", ...n } = aN(v, e);
                    switch (r) {
                      case "referenceHidden": {
                        let r = aU(
                          await az(e, { ...n, elementContext: "reference" }),
                          t.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: r,
                            referenceHidden: aq(r),
                          },
                        };
                      }
                      case "escaped": {
                        let r = aU(
                          await az(e, { ...n, altBoundary: !0 }),
                          t.floating
                        );
                        return { data: { escapedOffsets: r, escaped: aq(r) } };
                      }
                      default:
                        return {};
                    }
                  },
                },
              ],
            }),
            [q, Y] = oV(G),
            K = al(k);
          oD(() => {
            _ && (null == K || K());
          }, [_, K]);
          let X = null === (i = U.arrow) || void 0 === i ? void 0 : i.x,
            Z = null === (a = U.arrow) || void 0 === a ? void 0 : a.y,
            J =
              (null === (o = U.arrow) || void 0 === o
                ? void 0
                : o.centerOffset) !== 0,
            [Q, ee] = (0, eq.useState)();
          return (
            oD(() => {
              j && ee(window.getComputedStyle(j).zIndex);
            }, [j]),
            (0, eq.createElement)(
              "div",
              {
                ref: $.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...V,
                  transform: _ ? V.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: Q,
                  "--radix-popper-transform-origin": [
                    null === (l = U.transformOrigin) || void 0 === l
                      ? void 0
                      : l.x,
                    null === (c = U.transformOrigin) || void 0 === c
                      ? void 0
                      : c.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, eq.createElement)(
                oz,
                {
                  scope: m,
                  placedSide: q,
                  onArrowChange: N,
                  arrowX: X,
                  arrowY: Z,
                  shouldHideArrow: J,
                },
                (0, eq.createElement)(
                  ok.div,
                  iz({ "data-side": q, "data-align": Y }, D, {
                    ref: E,
                    style: {
                      ...D.style,
                      animation: _ ? void 0 : "none",
                      opacity:
                        null !== (s = U.hide) &&
                        void 0 !== s &&
                        s.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        oW = { top: "bottom", right: "left", bottom: "top", left: "right" };
      function oR(e) {
        return null !== e;
      }
      let o$ = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var r, n, i, a, o;
          let { placement: l, rects: c, middlewareData: s } = t,
            d =
              (null === (r = s.arrow) || void 0 === r
                ? void 0
                : r.centerOffset) !== 0,
            f = d ? 0 : e.arrowWidth,
            u = d ? 0 : e.arrowHeight,
            [g, p] = oV(l),
            v = { start: "0%", center: "50%", end: "100%" }[p],
            m =
              (null !==
                (n = null === (i = s.arrow) || void 0 === i ? void 0 : i.x) &&
              void 0 !== n
                ? n
                : 0) +
              f / 2,
            h =
              (null !==
                (a = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== a
                ? a
                : 0) +
              u / 2,
            y = "",
            b = "";
          return (
            "bottom" === g
              ? ((y = d ? v : `${m}px`), (b = `${-u}px`))
              : "top" === g
              ? ((y = d ? v : `${m}px`), (b = `${c.floating.height + u}px`))
              : "right" === g
              ? ((y = `${-u}px`), (b = d ? v : `${h}px`))
              : "left" === g &&
                ((y = `${c.floating.width + u}px`), (b = d ? v : `${h}px`)),
            { data: { x: y, y: b } }
          );
        },
      });
      function oV(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r];
      }
      let oG = (e) => {
          let { __scopePopper: t, children: r } = e,
            [n, i] = (0, eq.useState)(null);
          return (0, eq.createElement)(
            oP,
            { scope: t, anchor: n, onAnchorChange: i },
            r
          );
        },
        o_ = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = (0, eq.forwardRef)((e, r) => {
            let { asChild: n, ...i } = e,
              a = n ? ar : t;
            return (
              (0, eq.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, eq.createElement)(a, iz({}, i, { ref: r }))
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {}),
        oU = (0, eq.forwardRef)((e, t) => {
          var r;
          let {
            container: n = null == globalThis
              ? void 0
              : null === (r = globalThis.document) || void 0 === r
              ? void 0
              : r.body,
            ...i
          } = e;
          return n
            ? i$.createPortal(
                (0, eq.createElement)(o_.div, iz({}, i, { ref: t })),
                n
              )
            : null;
        }),
        oq = (e) => {
          let { present: t, children: r } = e,
            n = (function (e) {
              var t;
              let [r, n] = (0, eq.useState)(),
                i = (0, eq.useRef)({}),
                a = (0, eq.useRef)(e),
                o = (0, eq.useRef)("none"),
                l = e ? "mounted" : "unmounted",
                [c, s] =
                  ((t = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  (0, eq.useReducer)((e, r) => {
                    let n = t[e][r];
                    return null != n ? n : e;
                  }, l));
              return (
                (0, eq.useEffect)(() => {
                  let e = oY(i.current);
                  o.current = "mounted" === c ? e : "none";
                }, [c]),
                aw(() => {
                  let t = i.current,
                    r = a.current,
                    n = r !== e;
                  if (n) {
                    let n = o.current,
                      i = oY(t);
                    e
                      ? s("MOUNT")
                      : "none" === i ||
                        (null == t ? void 0 : t.display) === "none"
                      ? s("UNMOUNT")
                      : r && n !== i
                      ? s("ANIMATION_OUT")
                      : s("UNMOUNT"),
                      (a.current = e);
                  }
                }, [e, s]),
                aw(() => {
                  if (r) {
                    let e = (e) => {
                        let t = oY(i.current),
                          n = t.includes(e.animationName);
                        e.target === r &&
                          n &&
                          (0, i$.flushSync)(() => s("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === r && (o.current = oY(i.current));
                      };
                    return (
                      r.addEventListener("animationstart", t),
                      r.addEventListener("animationcancel", e),
                      r.addEventListener("animationend", e),
                      () => {
                        r.removeEventListener("animationstart", t),
                          r.removeEventListener("animationcancel", e),
                          r.removeEventListener("animationend", e);
                      }
                    );
                  }
                  s("ANIMATION_END");
                }, [r, s]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(c),
                  ref: (0, eq.useCallback)((e) => {
                    e && (i.current = getComputedStyle(e)), n(e);
                  }, []),
                }
              );
            })(t),
            i =
              "function" == typeof r
                ? r({ present: n.isPresent })
                : eq.Children.only(r),
            a = ae(n.ref, i.ref),
            o = "function" == typeof r;
          return o || n.isPresent ? (0, eq.cloneElement)(i, { ref: a }) : null;
        };
      function oY(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      oq.displayName = "Presence";
      let oK = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let r = (0, eq.forwardRef)((e, r) => {
          let { asChild: n, ...i } = e,
            a = n ? ar : t;
          return (
            (0, eq.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, eq.createElement)(a, iz({}, i, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
      }, {});
      var oX = new WeakMap(),
        oZ = new WeakMap(),
        oJ = {},
        oQ = 0,
        o0 = function (e) {
          return e && (e.host || o0(e.parentNode));
        },
        o2 = function (e, t, r, n) {
          var i = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var r = o0(e);
              return r && t.contains(r)
                ? r
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          oJ[r] || (oJ[r] = new WeakMap());
          var a = oJ[r],
            o = [],
            l = new Set(),
            c = new Set(i),
            s = function (e) {
              !e || l.has(e) || (l.add(e), s(e.parentNode));
            };
          i.forEach(s);
          var d = function (e) {
            !e ||
              c.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (l.has(e)) d(e);
                else {
                  var t = e.getAttribute(n),
                    i = null !== t && "false" !== t,
                    c = (oX.get(e) || 0) + 1,
                    s = (a.get(e) || 0) + 1;
                  oX.set(e, c),
                    a.set(e, s),
                    o.push(e),
                    1 === c && i && oZ.set(e, !0),
                    1 === s && e.setAttribute(r, "true"),
                    i || e.setAttribute(n, "true");
                }
              });
          };
          return (
            d(t),
            l.clear(),
            oQ++,
            function () {
              o.forEach(function (e) {
                var t = oX.get(e) - 1,
                  i = a.get(e) - 1;
                oX.set(e, t),
                  a.set(e, i),
                  t || (oZ.has(e) || e.removeAttribute(n), oZ.delete(e)),
                  i || e.removeAttribute(r);
              }),
                --oQ ||
                  ((oX = new WeakMap()),
                  (oX = new WeakMap()),
                  (oZ = new WeakMap()),
                  (oJ = {}));
            }
          );
        },
        o1 = function (e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n = Array.from(Array.isArray(e) ? e : [e]),
            i =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return i
            ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live]"))),
              o2(n, i, r, "aria-hidden"))
            : function () {
                return null;
              };
        },
        o5 = function () {
          return (o5 =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      function o3(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, n = Object.getOwnPropertySymbols(e);
            i < n.length;
            i++
          )
            0 > t.indexOf(n[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        return r;
      }
      var o8 = "right-scroll-bar-position",
        o4 = "width-before-scroll-bar",
        o6 =
          (void 0 === l && (l = {}),
          void 0 === c &&
            (c = function (e) {
              return e;
            }),
          (s = []),
          (d = !1),
          ((f = {
            read: function () {
              if (d)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return s.length ? s[s.length - 1] : null;
            },
            useMedium: function (e) {
              var t = c(e, d);
              return (
                s.push(t),
                function () {
                  s = s.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (d = !0; s.length; ) {
                var t = s;
                (s = []), t.forEach(e);
              }
              s = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return s;
                },
              };
            },
            assignMedium: function (e) {
              d = !0;
              var t = [];
              if (s.length) {
                var r = s;
                (s = []), r.forEach(e), (t = s);
              }
              var n = function () {
                  var r = t;
                  (t = []), r.forEach(e);
                },
                i = function () {
                  return Promise.resolve().then(n);
                };
              i(),
                (s = {
                  push: function (e) {
                    t.push(e), i();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), s;
                  },
                });
            },
          }).options = o5({ async: !0, ssr: !1 }, l)),
          f),
        o7 = function () {},
        o9 = eq.forwardRef(function (e, t) {
          var r,
            n,
            i,
            a = eq.useRef(null),
            o = eq.useState({
              onScrollCapture: o7,
              onWheelCapture: o7,
              onTouchMoveCapture: o7,
            }),
            l = o[0],
            c = o[1],
            s = e.forwardProps,
            d = e.children,
            f = e.className,
            u = e.removeScrollBar,
            g = e.enabled,
            p = e.shards,
            v = e.sideCar,
            m = e.noIsolation,
            h = e.inert,
            y = e.allowPinchZoom,
            b = e.as,
            S = void 0 === b ? "div" : b,
            B = o3(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            x =
              ((r = [a, t]),
              (n = function (e) {
                return r.forEach(function (t) {
                  return (
                    "function" == typeof t ? t(e) : t && (t.current = e), t
                  );
                });
              }),
              ((i = (0, eq.useState)(function () {
                return {
                  value: null,
                  callback: n,
                  facade: {
                    get current() {
                      return i.value;
                    },
                    set current(value) {
                      var e = i.value;
                      e !== value && ((i.value = value), i.callback(value, e));
                    },
                  },
                };
              })[0]).callback = n),
              i.facade),
            F = o5(o5({}, B), l);
          return eq.createElement(
            eq.Fragment,
            null,
            g &&
              eq.createElement(v, {
                sideCar: o6,
                removeScrollBar: u,
                shards: p,
                noIsolation: m,
                inert: h,
                setCallbacks: c,
                allowPinchZoom: !!y,
                lockRef: a,
              }),
            s
              ? eq.cloneElement(eq.Children.only(d), o5(o5({}, F), { ref: x }))
              : eq.createElement(S, o5({}, F, { className: f, ref: x }), d)
          );
        });
      (o9.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (o9.classNames = { fullWidth: o4, zeroRight: o8 });
      var le = function (e) {
        var t = e.sideCar,
          r = o3(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var n = t.read();
        if (!n) throw Error("Sidecar medium not found");
        return eq.createElement(n, o5({}, r));
      };
      le.isSideCarExport = !0;
      var lt = function () {
          var e = 0,
            t = null;
          return {
            add: function (n) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = y || r.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, a;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = n)
                  : i.appendChild(document.createTextNode(n)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        lr = function () {
          var e = lt();
          return function (t, r) {
            eq.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && r]
            );
          };
        },
        ln = function () {
          var e = lr();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        li = { left: 0, top: 0, right: 0, gap: 0 },
        la = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        lo = function (e) {
          var t = window.getComputedStyle(document.body),
            r = t["padding" === e ? "paddingLeft" : "marginLeft"],
            n = t["padding" === e ? "paddingTop" : "marginTop"],
            i = t["padding" === e ? "paddingRight" : "marginRight"];
          return [la(r), la(n), la(i)];
        },
        ll = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return li;
          var t = lo(e),
            r = document.documentElement.clientWidth,
            n = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, n - r + t[2] - t[0]),
          };
        },
        lc = ln(),
        ls = function (e, t, r, n) {
          var i = e.left,
            a = e.top,
            o = e.right,
            l = e.gap;
          return (
            void 0 === r && (r = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(n, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(n, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(n, ";"),
                  "margin" === r &&
                    "\n    padding-left: "
                      .concat(i, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        o,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(n, ";\n    "),
                  "padding" === r &&
                    "padding-right: ".concat(l, "px ").concat(n, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(o8, " {\n    right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(o4, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(o8, " .")
              .concat(o8, " {\n    right: 0 ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(o4, " .")
              .concat(o4, " {\n    margin-right: 0 ")
              .concat(n, ";\n  }\n  \n  body {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        ld = function (e) {
          var t = e.noRelative,
            r = e.noImportant,
            n = e.gapMode,
            i = void 0 === n ? "margin" : n,
            a = eq.useMemo(
              function () {
                return ll(i);
              },
              [i]
            );
          return eq.createElement(lc, {
            styles: ls(a, !t, i, r ? "" : "!important"),
          });
        },
        lf = !1;
      if ("undefined" != typeof window)
        try {
          var lu = Object.defineProperty({}, "passive", {
            get: function () {
              return (lf = !0), !0;
            },
          });
          window.addEventListener("test", lu, lu),
            window.removeEventListener("test", lu, lu);
        } catch (e) {
          lf = !1;
        }
      var lg = !!lf && { passive: !1 },
        lp = function (e, t) {
          var r = window.getComputedStyle(e);
          return (
            "hidden" !== r[t] &&
            !(
              r.overflowY === r.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === r[t]
            )
          );
        },
        lv = function (e, t) {
          var r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              lm(e, r))
            ) {
              var n = lh(e, r);
              if (n[1] > n[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== document.body);
          return !1;
        },
        lm = function (e, t) {
          return "v" === e ? lp(t, "overflowY") : lp(t, "overflowX");
        },
        lh = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        ly = function (e, t, r, n, i) {
          var a,
            o =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            l = o * n,
            c = r.target,
            s = t.contains(c),
            d = !1,
            f = l > 0,
            u = 0,
            g = 0;
          do {
            var p = lh(e, c),
              v = p[0],
              m = p[1] - p[2] - o * v;
            (v || m) && lm(e, c) && ((u += m), (g += v)), (c = c.parentNode);
          } while (
            (!s && c !== document.body) ||
            (s && (t.contains(c) || t === c))
          );
          return (
            f && ((i && 0 === u) || (!i && l > u))
              ? (d = !0)
              : !f && ((i && 0 === g) || (!i && -l > g)) && (d = !0),
            d
          );
        },
        lb = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        lS = function (e) {
          return [e.deltaX, e.deltaY];
        },
        lB = function (e) {
          return e && "current" in e ? e.current : e;
        },
        lx = 0,
        lF = [],
        lA =
          (o6.useMedium(function (e) {
            var t = eq.useRef([]),
              r = eq.useRef([0, 0]),
              n = eq.useRef(),
              i = eq.useState(lx++)[0],
              a = eq.useState(function () {
                return ln();
              })[0],
              o = eq.useRef(e);
            eq.useEffect(
              function () {
                o.current = e;
              },
              [e]
            ),
              eq.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(i)
                    );
                    var t = (function (e, t, r) {
                      if (r || 2 == arguments.length)
                        for (var n, i = 0, a = t.length; i < a; i++)
                          (!n && i in t) ||
                            (n || (n = Array.prototype.slice.call(t, 0, i)),
                            (n[i] = t[i]));
                      return e.concat(n || Array.prototype.slice.call(t));
                    })(
                      [e.lockRef.current],
                      (e.shards || []).map(lB),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(i)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(i)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(i)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var l = eq.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !o.current.allowPinchZoom;
                var i,
                  a = lb(e),
                  l = r.current,
                  c = "deltaX" in e ? e.deltaX : l[0] - a[0],
                  s = "deltaY" in e ? e.deltaY : l[1] - a[1],
                  d = e.target,
                  f = Math.abs(c) > Math.abs(s) ? "h" : "v";
                if ("touches" in e && "h" === f && "range" === d.type)
                  return !1;
                var u = lv(f, d);
                if (!u) return !0;
                if (
                  (u ? (i = f) : ((i = "v" === f ? "h" : "v"), (u = lv(f, d))),
                  !u)
                )
                  return !1;
                if (
                  (!n.current &&
                    "changedTouches" in e &&
                    (c || s) &&
                    (n.current = i),
                  !i)
                )
                  return !0;
                var g = n.current || i;
                return ly(g, t, e, "h" === g ? c : s, !0);
              }, []),
              c = eq.useCallback(function (e) {
                if (lF.length && lF[lF.length - 1] === a) {
                  var r = "deltaY" in e ? lS(e) : lb(e),
                    n = t.current.filter(function (t) {
                      var n;
                      return (
                        t.name === e.type &&
                        t.target === e.target &&
                        (n = t.delta)[0] === r[0] &&
                        n[1] === r[1]
                      );
                    })[0];
                  if (n && n.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!n) {
                    var i = (o.current.shards || [])
                      .map(lB)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (i.length > 0 ? l(e, i[0]) : !o.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              s = eq.useCallback(function (e, r, n, i) {
                var a = { name: e, delta: r, target: n, should: i };
                t.current.push(a),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== a;
                    });
                  }, 1);
              }, []),
              d = eq.useCallback(function (e) {
                (r.current = lb(e)), (n.current = void 0);
              }, []),
              f = eq.useCallback(function (t) {
                s(t.type, lS(t), t.target, l(t, e.lockRef.current));
              }, []),
              u = eq.useCallback(function (t) {
                s(t.type, lb(t), t.target, l(t, e.lockRef.current));
              }, []);
            eq.useEffect(function () {
              return (
                lF.push(a),
                e.setCallbacks({
                  onScrollCapture: f,
                  onWheelCapture: f,
                  onTouchMoveCapture: u,
                }),
                document.addEventListener("wheel", c, lg),
                document.addEventListener("touchmove", c, lg),
                document.addEventListener("touchstart", d, lg),
                function () {
                  (lF = lF.filter(function (e) {
                    return e !== a;
                  })),
                    document.removeEventListener("wheel", c, lg),
                    document.removeEventListener("touchmove", c, lg),
                    document.removeEventListener("touchstart", d, lg);
                }
              );
            }, []);
            var g = e.removeScrollBar,
              p = e.inert;
            return eq.createElement(
              eq.Fragment,
              null,
              p
                ? eq.createElement(a, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        i,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(i, " {pointer-events: all;}\n"),
                  })
                : null,
              g ? eq.createElement(ld, { gapMode: "margin" }) : null
            );
          }),
          le),
        lw = eq.forwardRef(function (e, t) {
          return eq.createElement(o9, o5({}, e, { ref: t, sideCar: lA }));
        });
      lw.classNames = o9.classNames;
      let lO = "Popover",
        [lk, lD] = (function (e, t = []) {
          let r = [],
            n = () => {
              let t = r.map((e) => (0, eq.createContext)(e));
              return function (r) {
                let n = (null == r ? void 0 : r[e]) || t;
                return (0, eq.useMemo)(
                  () => ({ [`__scope${e}`]: { ...r, [e]: n } }),
                  [r, n]
                );
              };
            };
          return (
            (n.scopeName = e),
            [
              function (t, n) {
                let i = (0, eq.createContext)(n),
                  a = r.length;
                function o(t) {
                  let { scope: r, children: n, ...o } = t,
                    l = (null == r ? void 0 : r[e][a]) || i,
                    c = (0, eq.useMemo)(() => o, Object.values(o));
                  return (0, eq.createElement)(l.Provider, { value: c }, n);
                }
                return (
                  (r = [...r, n]),
                  (o.displayName = t + "Provider"),
                  [
                    o,
                    function (r, o) {
                      let l = (null == o ? void 0 : o[e][a]) || i,
                        c = (0, eq.useContext)(l);
                      if (c) return c;
                      if (void 0 !== n) return n;
                      throw Error(`\`${r}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let r = () => {
                  let r = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let n = r.reduce((t, { useScope: r, scopeName: n }) => {
                      let i = r(e),
                        a = i[`__scope${n}`];
                      return { ...t, ...a };
                    }, {});
                    return (0, eq.useMemo)(
                      () => ({ [`__scope${t.scopeName}`]: n }),
                      [n]
                    );
                  };
                };
                return (r.scopeName = t.scopeName), r;
              })(n, ...t),
            ]
          );
        })(lO, [oE]),
        lH = oE(),
        [lj, lC] = lk(lO),
        lE = (0, eq.forwardRef)((e, t) => {
          let { __scopePopover: r, ...n } = e,
            i = lC("PopoverTrigger", r),
            a = lH(r),
            o = ae(t, i.triggerRef),
            l = (0, eq.createElement)(
              oK.button,
              iz(
                {
                  type: "button",
                  "aria-haspopup": "dialog",
                  "aria-expanded": i.open,
                  "aria-controls": i.contentId,
                  "data-state": lR(i.open),
                },
                n,
                { ref: o, onClick: i9(e.onClick, i.onOpenToggle) }
              )
            );
          return i.hasCustomAnchor
            ? l
            : (0, eq.createElement)(oI, iz({ asChild: !0 }, a), l);
        }),
        lP = "PopoverPortal",
        [lN, lI] = lk(lP, { forceMount: void 0 }),
        lM = "PopoverContent",
        lz = (0, eq.forwardRef)((e, t) => {
          let r = lI(lM, e.__scopePopover),
            { forceMount: n = r.forceMount, ...i } = e,
            a = lC(lM, e.__scopePopover);
          return (0, eq.createElement)(
            oq,
            { present: n || a.open },
            a.modal
              ? (0, eq.createElement)(lT, iz({}, i, { ref: t }))
              : (0, eq.createElement)(lL, iz({}, i, { ref: t }))
          );
        }),
        lT = (0, eq.forwardRef)((e, t) => {
          let r = lC(lM, e.__scopePopover),
            n = (0, eq.useRef)(null),
            i = ae(t, n),
            a = (0, eq.useRef)(!1);
          return (
            (0, eq.useEffect)(() => {
              let e = n.current;
              if (e) return o1(e);
            }, []),
            (0, eq.createElement)(
              lw,
              { as: ar, allowPinchZoom: !0 },
              (0, eq.createElement)(
                lW,
                iz({}, e, {
                  ref: i,
                  trapFocus: r.open,
                  disableOutsidePointerEvents: !0,
                  onCloseAutoFocus: i9(e.onCloseAutoFocus, (e) => {
                    var t;
                    e.preventDefault(),
                      a.current ||
                        null === (t = r.triggerRef.current) ||
                        void 0 === t ||
                        t.focus();
                  }),
                  onPointerDownOutside: i9(
                    e.onPointerDownOutside,
                    (e) => {
                      let t = e.detail.originalEvent,
                        r = 0 === t.button && !0 === t.ctrlKey,
                        n = 2 === t.button || r;
                      a.current = n;
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                  onFocusOutside: i9(
                    e.onFocusOutside,
                    (e) => e.preventDefault(),
                    { checkForDefaultPrevented: !1 }
                  ),
                })
              )
            )
          );
        }),
        lL = (0, eq.forwardRef)((e, t) => {
          let r = lC(lM, e.__scopePopover),
            n = (0, eq.useRef)(!1),
            i = (0, eq.useRef)(!1);
          return (0, eq.createElement)(
            lW,
            iz({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var a, o;
                null === (a = e.onCloseAutoFocus) ||
                  void 0 === a ||
                  a.call(e, t),
                  t.defaultPrevented ||
                    (n.current ||
                      null === (o = r.triggerRef.current) ||
                      void 0 === o ||
                      o.focus(),
                    t.preventDefault()),
                  (n.current = !1),
                  (i.current = !1);
              },
              onInteractOutside: (t) => {
                var a, o;
                null === (a = e.onInteractOutside) ||
                  void 0 === a ||
                  a.call(e, t),
                  t.defaultPrevented ||
                    ((n.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (i.current = !0));
                let l = t.target,
                  c =
                    null === (o = r.triggerRef.current) || void 0 === o
                      ? void 0
                      : o.contains(l);
                c && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    i.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        lW = (0, eq.forwardRef)((e, t) => {
          let {
              __scopePopover: r,
              trapFocus: n,
              onOpenAutoFocus: i,
              onCloseAutoFocus: a,
              disableOutsidePointerEvents: o,
              onEscapeKeyDown: l,
              onPointerDownOutside: c,
              onFocusOutside: s,
              onInteractOutside: d,
              ...f
            } = e,
            u = lC(lM, r),
            g = lH(r);
          return (
            (0, eq.useEffect)(() => {
              var e, t;
              let r = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = r[0]) && void 0 !== e ? e : ap()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = r[1]) && void 0 !== t ? t : ap()
                ),
                ag++,
                () => {
                  1 === ag &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    ag--;
                }
              );
            }, []),
            (0, eq.createElement)(
              ab,
              {
                asChild: !0,
                loop: !0,
                trapped: n,
                onMountAutoFocus: i,
                onUnmountAutoFocus: a,
              },
              (0, eq.createElement)(
                ad,
                {
                  asChild: !0,
                  disableOutsidePointerEvents: o,
                  onInteractOutside: d,
                  onEscapeKeyDown: l,
                  onPointerDownOutside: c,
                  onFocusOutside: s,
                  onDismiss: () => u.onOpenChange(!1),
                },
                (0, eq.createElement)(
                  oL,
                  iz(
                    {
                      "data-state": lR(u.open),
                      role: "dialog",
                      id: u.contentId,
                    },
                    g,
                    f,
                    {
                      ref: t,
                      style: {
                        ...f.style,
                        "--radix-popover-content-transform-origin":
                          "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width":
                          "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height":
                          "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width":
                          "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height":
                          "var(--radix-popper-anchor-height)",
                      },
                    }
                  )
                )
              )
            )
          );
        });
      function lR(e) {
        return e ? "open" : "closed";
      }
      let l$ = (e) => {
          let {
              __scopePopover: t,
              children: r,
              open: n,
              defaultOpen: i,
              onOpenChange: a,
              modal: o = !1,
            } = e,
            l = lH(t),
            c = (0, eq.useRef)(null),
            [s, d] = (0, eq.useState)(!1),
            [f = !1, u] = (function ({
              prop: e,
              defaultProp: t,
              onChange: r = () => {},
            }) {
              let [n, i] = (function ({ defaultProp: e, onChange: t }) {
                  let r = (0, eq.useState)(e),
                    [n] = r,
                    i = (0, eq.useRef)(n),
                    a = al(t);
                  return (
                    (0, eq.useEffect)(() => {
                      i.current !== n && (a(n), (i.current = n));
                    }, [n, i, a]),
                    r
                  );
                })({ defaultProp: t, onChange: r }),
                a = void 0 !== e,
                o = a ? e : n,
                l = al(r),
                c = (0, eq.useCallback)(
                  (t) => {
                    if (a) {
                      let r = "function" == typeof t ? t(e) : t;
                      r !== e && l(r);
                    } else i(t);
                  },
                  [a, e, i, l]
                );
              return [o, c];
            })({ prop: n, defaultProp: i, onChange: a });
          return (0, eq.createElement)(
            oG,
            l,
            (0, eq.createElement)(
              lj,
              {
                scope: t,
                contentId: (function (e) {
                  let [t, r] = eq.useState(aO());
                  return (
                    aw(() => {
                      e || r((e) => (null != e ? e : String(ak++)));
                    }, [e]),
                    e || (t ? `radix-${t}` : "")
                  );
                })(),
                triggerRef: c,
                open: f,
                onOpenChange: u,
                onOpenToggle: (0, eq.useCallback)(() => u((e) => !e), [u]),
                hasCustomAnchor: s,
                onCustomAnchorAdd: (0, eq.useCallback)(() => d(!0), []),
                onCustomAnchorRemove: (0, eq.useCallback)(() => d(!1), []),
                modal: o,
              },
              r
            )
          );
        },
        lV = (e) => {
          let {
              __scopePopover: t,
              forceMount: r,
              children: n,
              container: i,
            } = e,
            a = lC(lP, t);
          return (0, eq.createElement)(
            lN,
            { scope: t, forceMount: r },
            (0, eq.createElement)(
              oq,
              { present: r || a.open },
              (0, eq.createElement)(oU, { asChild: !0, container: i }, n)
            )
          );
        };
      function lG(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, n = Object.getOwnPropertySymbols(e);
            i < n.length;
            i++
          )
            0 > t.indexOf(n[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        return r;
      }
      let l_ = (e, t) => {
          let r = new Set(t);
          return r.has(e) ? r.delete(e) : r.add(e), r;
        },
        lU = (e, t) => `${e}_${t}`,
        lq = (0, eq.forwardRef)((e, t) => {
          var {
              className: r,
              css: n,
              hasActiveSubItem: i,
              open: a,
              onOpenChange: o,
            } = e,
            l = lG(e, [
              "className",
              "css",
              "hasActiveSubItem",
              "open",
              "onOpenChange",
            ]);
          let c = tV({ css: n, hasActiveSubItem: i }).className;
          return (0, b.jsx)(
            i5,
            Object.assign(
              { onOpenChange: o, open: a },
              {
                children: (0, b.jsx)(
                  "div",
                  Object.assign(
                    {
                      className: rj(c, r),
                      "data-testid": u.VerticalNavAccordion,
                      ref: t,
                    },
                    l
                  )
                ),
              }
            )
          );
        });
      lq.displayName = "VerticalNavAccordion";
      let lY = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n } = e,
          i = lG(e, ["className", "css"]);
        let a = t_({ css: n }).className;
        return (0, b.jsx)(
          i4,
          Object.assign(
            {
              className: rj(a, r),
              "data-testid": u.VerticalNavAccordionContent,
              ref: t,
              role: "list",
            },
            i
          )
        );
      });
      lY.displayName = "VerticalNavAccordionContent";
      let lK = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n, hasActiveSubItem: i } = e,
          a = lG(e, ["className", "css", "hasActiveSubItem"]);
        let o = tG({ css: n, hasActiveSubItem: i }).className;
        return (0, b.jsx)(
          "div",
          Object.assign(
            {
              className: rj(o, r),
              "data-testid": u.VerticalNavAccordionHeader,
              ref: t,
            },
            a
          )
        );
      });
      lK.displayName = "VerticalNavAccordionHeader";
      let lX = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n, isCollapsed: i } = e,
          a = lG(e, ["className", "css", "isCollapsed"]);
        let o = t$({ css: n, isCollapsed: i }).className;
        return (0, b.jsx)(
          "div",
          Object.assign(
            {
              className: rj(o, r),
              "data-testid": u.VerticalNavAccordionRoot,
              ref: t,
            },
            a
          )
        );
      });
      lX.displayName = "VerticalNavAccordionRoot";
      let lZ = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n, isAccordionHeader: i } = e,
          a = lG(e, ["className", "css", "isAccordionHeader"]);
        let o = tU({ css: n, isAccordionHeader: i }).className;
        return (0, b.jsx)(
          i3,
          Object.assign(
            {
              className: rj(o, r),
              "data-testid": u.VerticalNavAccordionTrigger,
              ref: t,
            },
            a
          )
        );
      });
      lZ.displayName = "VerticalNavAccordionTrigger";
      let lJ = (0, eq.forwardRef)((e, t) => {
        var {
            className: r,
            css: n,
            hasActiveSubItem: i,
            isAccordionHeader: a,
            isActive: o,
            isInverted: l,
          } = e,
          c = lG(e, [
            "className",
            "css",
            "hasActiveSubItem",
            "isAccordionHeader",
            "isActive",
            "isInverted",
          ]);
        let s = tI({
          css: n,
          hasActiveSubItem: i,
          isAccordionHeader: a,
          isActive: o,
          isInverted: l,
        }).className;
        return (0, b.jsx)(
          "div",
          Object.assign(
            { className: rj(s, r), "data-testid": u.VerticalNavIcon, ref: t },
            c
          )
        );
      });
      lJ.displayName = "VerticalNavIcon";
      let lQ = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n } = e,
          i = lG(e, ["className", "css"]);
        let a = tM({ css: n }).className;
        return (0, b.jsx)(
          "div",
          Object.assign(
            {
              className: rj(a, r),
              "data-testid": u.VerticalNavItem,
              ref: t,
              role: "listitem",
            },
            i
          )
        );
      });
      lQ.displayName = "VerticalNavItem";
      let l0 = (0, eq.forwardRef)((e, t) => {
        var {
            children: r,
            className: n,
            css: i,
            hasActiveSubItem: a,
            isAccordionOpen: o,
            isActive: l,
            isCollapsed: c,
            isTooltipOpen: s,
          } = e,
          d = lG(e, [
            "children",
            "className",
            "css",
            "hasActiveSubItem",
            "isAccordionOpen",
            "isActive",
            "isCollapsed",
            "isTooltipOpen",
          ]);
        let f = tz({
          css: i,
          hasActiveSubItem: a,
          isAccordionOpen: o,
          isActive: l,
          isCollapsed: c,
          isTooltipOpen: s,
        }).className;
        return (0, b.jsx)(
          "a",
          Object.assign(
            { className: rj(f, n), "data-testid": u.VerticalNavLink, ref: t },
            d,
            { children: r }
          )
        );
      });
      l0.displayName = "VerticalNavLink";
      let l2 = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n, isCollapsed: i } = e,
          a = lG(e, ["className", "css", "isCollapsed"]);
        let o = tR({ css: n, isCollapsed: i }).className;
        return (0, b.jsx)(
          "div",
          Object.assign(
            { className: rj(o, r), "data-testid": u.VerticalNavMask, ref: t },
            a
          )
        );
      });
      l2.displayName = "VerticalNavMask";
      let l1 = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n, isCollapsed: i } = e,
          a = lG(e, ["className", "css", "isCollapsed"]);
        let o = tL({ css: n, isCollapsed: i }).className;
        return (0, b.jsx)(
          "div",
          Object.assign(
            {
              className: rj(o, r),
              "data-testid": u.VerticalNavText,
              ref: t,
              role: "listitem",
            },
            a
          )
        );
      });
      l1.displayName = "VerticalNavText";
      let l5 = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n, open: i, onOpenChange: a } = e,
          o = lG(e, ["className", "css", "open", "onOpenChange"]);
        let l = tY({ css: n }).className;
        return (0, b.jsx)(
          l$,
          Object.assign(
            { open: i, onOpenChange: a },
            {
              children: (0, b.jsx)(
                "div",
                Object.assign(
                  {
                    className: rj(l, r),
                    "data-testid": u.VerticalNavTooltip,
                    ref: t,
                  },
                  o
                )
              ),
            }
          )
        );
      });
      l5.displayName = "VerticalNavTooltip";
      let l3 = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n } = e,
          i = lG(e, ["className", "css"]);
        let a = rP(),
          o = tX().className;
        return (0, b.jsx)(lV, {
          children: (0, b.jsx)(
            lz,
            Object.assign(
              {
                align: "start",
                alignOffset: 48,
                side: "bottom",
                sideOffset: tN,
              },
              {
                children: (0, b.jsx)(
                  rN,
                  Object.assign(
                    { theme: a, withCanvas: !0 },
                    {
                      children: (0, b.jsx)(
                        "div",
                        Object.assign(
                          {
                            className: rj(o, r),
                            "data-testid": u.VerticalNavTooltipContent,
                            ref: t,
                          },
                          i
                        )
                      ),
                    }
                  )
                ),
              }
            )
          ),
        });
      });
      l3.displayName = "VerticalNavTooltipContent";
      let l8 = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n } = e,
          i = lG(e, ["className", "css"]);
        let a = tK({ css: n }).className;
        return (0, b.jsx)(
          "div",
          Object.assign(
            {
              className: rj(a, r),
              "data-testid": u.VerticalNavTooltipHeader,
              ref: t,
            },
            i
          )
        );
      });
      l8.displayName = "VerticalNavTooltipHeader";
      let l4 = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n, isCollapsed: i } = e,
          a = lG(e, ["className", "css", "isCollapsed"]);
        let o = tq({ isCollapsed: i }).className;
        return (0, b.jsx)(
          "div",
          Object.assign(
            {
              className: rj(o, r),
              "data-testid": u.VerticalNavTooltipRoot,
              ref: t,
            },
            a
          )
        );
      });
      l4.displayName = "VerticalNavTooltipRoot";
      let l6 = (0, eq.forwardRef)((e, t) => {
        var { className: r, css: n, hasActiveSubItem: i } = e,
          a = lG(e, ["className", "css", "hasActiveSubItem"]);
        let o = tZ({ css: n, hasActiveSubItem: i }).className;
        return (0, b.jsx)(
          lE,
          Object.assign(
            {
              className: rj(o, r),
              "data-testid": u.VerticalNavTooltipTrigger,
              ref: t,
            },
            a
          )
        );
      });
      l6.displayName = "VerticalNavTooltipTrigger";
      let l7 = ({
        isCollapsed: e = !1,
        sections: t = [],
        canCloseAccordion: r = () => !0,
        canCloseTooltip: n = () => !0,
        onOpenAccordion: i = () => null,
        onOpenTooltip: a = () => null,
        isLinkActive: o = () => !1,
        isOpenAccordion: l = () => !1,
        isOpenTooltip: c = () => !1,
        renderIcon: s = ({ name: e }) =>
          (0, b.jsx)(iP, { iconName: e, lazyLoading: !0, variant: "line" }),
        renderLink: d = (e) => {
          var { label: t, to: r } = e,
            n = lG(e, ["label", "to"]);
          return (0, b.jsx)(l0, Object.assign({ href: r }, n, { children: t }));
        },
      }) => {
        let f = (0, eq.useMemo)(() => {
            let e = new Map(),
              r = new Set();
            return (
              t.forEach((t, n) =>
                t.links.forEach((i, a) => {
                  o({ link: i, section: t }) &&
                    (e.set(lU(n, a), { section: n, link: a }), r.add(n));
                })
              ),
              { links: e, sections: r }
            );
          }, [o, t]),
          [u, g] = (0, eq.useState)(() =>
            t.reduce(
              (e, t, r) => (l({ section: t, index: r }) ? e.add(r) : e),
              new Set()
            )
          ),
          [p, v] = (0, eq.useState)(() =>
            t.reduce(
              (e, t, r) => (c({ section: t, index: r }) ? e.add(r) : e),
              new Set()
            )
          );
        return (0, b.jsxs)(
          l2,
          Object.assign(
            { isCollapsed: e },
            {
              children: [
                (0, b.jsx)(
                  lX,
                  Object.assign(
                    { isCollapsed: e },
                    {
                      children: t.map((t, n) => {
                        let a = f.sections.has(n),
                          o = u.has(n);
                        return (0, b.jsxs)(
                          lq,
                          Object.assign(
                            {
                              open: o,
                              onOpenChange: () => {
                                let e = r({ hasActiveSubItem: a, section: t });
                                (!o || (l && e)) &&
                                  (g((e) => l_(n, e)),
                                  i({ index: n, section: t }));
                              },
                            },
                            {
                              children: [
                                (0, b.jsx)(
                                  lK,
                                  Object.assign(
                                    { hasActiveSubItem: a },
                                    {
                                      children: (0, b.jsxs)(
                                        lZ,
                                        Object.assign(
                                          { isAccordionHeader: !0 },
                                          {
                                            children: [
                                              (0, b.jsx)(
                                                lJ,
                                                Object.assign(
                                                  { hasActiveSubItem: a },
                                                  {
                                                    children: s({
                                                      name: t.icon,
                                                    }),
                                                  }
                                                )
                                              ),
                                              (0, b.jsx)(
                                                l1,
                                                Object.assign(
                                                  { isCollapsed: e },
                                                  { children: t.header }
                                                )
                                              ),
                                              (0, b.jsx)(
                                                lJ,
                                                Object.assign(
                                                  {
                                                    isAccordionHeader: !0,
                                                    isInverted: o,
                                                  },
                                                  {
                                                    children: (0, b.jsx)(iM, {
                                                      variant: "line",
                                                    }),
                                                  }
                                                )
                                              ),
                                            ],
                                          }
                                        )
                                      ),
                                    }
                                  )
                                ),
                                (0, b.jsx)(lY, {
                                  children: t.links.map((t, r) =>
                                    (0, b.jsx)(
                                      lQ,
                                      {
                                        children: d(
                                          Object.assign(Object.assign({}, t), {
                                            hasActiveSubItem: a,
                                            isAccordionOpen: o,
                                            isActive: f.links.has(lU(n, r)),
                                            isCollapsed: e,
                                            isTooltipOpen: !1,
                                          })
                                        ),
                                      },
                                      r
                                    )
                                  ),
                                }),
                              ],
                            }
                          ),
                          n
                        );
                      }),
                    }
                  )
                ),
                (0, b.jsx)(
                  l4,
                  Object.assign(
                    { isCollapsed: e },
                    {
                      children: t.map((t, r) => {
                        let i = f.sections.has(r),
                          o = p.has(r);
                        return (0, b.jsxs)(
                          l5,
                          Object.assign(
                            {
                              open: o && e,
                              onOpenChange: () => {
                                let e = n({ hasActiveSubItem: i, section: t });
                                (!o || (c && e)) &&
                                  (v((e) => l_(r, e)),
                                  a({ index: r, section: t }));
                              },
                            },
                            {
                              children: [
                                (0, b.jsx)(
                                  l6,
                                  Object.assign(
                                    { hasActiveSubItem: i },
                                    {
                                      children: (0, b.jsx)(
                                        lJ,
                                        Object.assign(
                                          { hasActiveSubItem: i },
                                          { children: s({ name: t.icon }) }
                                        )
                                      ),
                                    }
                                  )
                                ),
                                (0, b.jsxs)(l3, {
                                  children: [
                                    (0, b.jsx)(l8, {
                                      children: (0, b.jsx)(
                                        l1,
                                        Object.assign(
                                          { isCollapsed: e },
                                          { children: t.header }
                                        )
                                      ),
                                    }),
                                    t.links.map((t, n) =>
                                      (0, b.jsx)(
                                        lQ,
                                        {
                                          children: d(
                                            Object.assign(
                                              Object.assign({}, t),
                                              {
                                                hasActiveSubItem: i,
                                                isAccordionOpen: !1,
                                                isActive: f.links.has(lU(r, n)),
                                                isCollapsed: e,
                                                isTooltipOpen: o,
                                              }
                                            )
                                          ),
                                        },
                                        n
                                      )
                                    ),
                                  ],
                                }),
                              ],
                            }
                          ),
                          r
                        );
                      }),
                    }
                  )
                ),
              ],
            }
          )
        );
      };
      l7.displayName = "VerticalNav";
      var l9 = r(1163);
      let ce = () => {
        let { asPath: e } = (0, l9.useRouter)(),
          { collapsed: t } = eQ();
        return (0, b.jsx)(b.Fragment, {
          children: (0, b.jsx)(l7, {
            isCollapsed: t,
            isOpenAccordion: () => !0,
            isLinkActive: (t) => {
              let { link: r } = t;
              return e.startsWith(r.to);
            },
            renderLink: (e) => {
              let { label: t, to: r, ...n } = e;
              return (0, b.jsx)(ij(), {
                href: r,
                passHref: !0,
                legacyBehavior: !0,
                children: (0, b.jsx)(l0, {
                  ...n,
                  children: (0, b.jsx)("span", {
                    style: { textTransform: "capitalize" },
                    children: t,
                  }),
                }),
              });
            },
            sections: [
              {
                icon: "common-help-circle",
                header: "LLM Preview",
                links: [
                  { label: "Conversation", to: "/converse" },
                  { label: "Parameter Tuning", to: "/tuning" },
                ],
              },
            ],
          }),
        });
      };
      function ct(e) {
        let { Component: t, pageProps: r } = e;
        return (0, b.jsx)(e0, {
          children: (0, b.jsxs)(rM, {
            children: [
              (0, b.jsx)(rT, { children: (0, b.jsx)(iE, {}) }),
              (0, b.jsx)(rW, { children: (0, b.jsx)(ce, {}) }),
              (0, b.jsx)(r$, { children: (0, b.jsx)(t, { ...r }) }),
            ],
          }),
        });
      }
    },
    7952: function () {},
    1664: function (e, t, r) {
      e.exports = r(5569);
    },
    1163: function (e, t, r) {
      e.exports = r(6885);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(6885);
    }),
      (_N_E = e.O());
  },
]);
