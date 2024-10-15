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
              var o = typeof r;
              if ("string" === o || "number" === o) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var a = i.apply(null, r);
                  a && e.push(a);
                }
              } else if ("object" === o) {
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
      var n, i, o;
      (o = {
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
            return o;
          }.call(t, r, t, e)) && (e.exports = n);
    },
    6840: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(4725);
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
            return o;
          },
          ACTION_RESTORE: function () {
            return a;
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
        o = "navigate",
        a = "restore",
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
        o = r(4532),
        a = r(3353),
        l = r(1410),
        c = r(9064),
        s = r(370),
        d = r(9955),
        f = r(4224),
        u = r(508),
        p = r(1516),
        g = r(4266),
        h = r(3991),
        m = new Set();
      function y(e, t, r, n, i, o) {
        if (!o && !(0, a.isLocalURL)(t)) return;
        if (!n.bypassPrefetchedCheck) {
          let i =
              void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0,
            o = t + "%" + r + "%" + i;
          if (m.has(o)) return;
          m.add(o);
        }
        let l = o ? e.prefetch(t, i) : e.prefetch(t, r, n);
        Promise.resolve(l).catch((e) => {});
      }
      function v(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let b = i.default.forwardRef(function (e, t) {
          let r, n;
          let {
            href: l,
            as: m,
            children: b,
            prefetch: S = null,
            passHref: x,
            replace: B,
            shallow: w,
            scroll: A,
            locale: D,
            onClick: F,
            onMouseEnter: k,
            onTouchStart: H,
            legacyBehavior: E = !1,
            ...C
          } = e;
          (r = b),
            E &&
              ("string" == typeof r || "number" == typeof r) &&
              (r = i.default.createElement("a", null, r));
          let I = i.default.useContext(d.RouterContext),
            R = i.default.useContext(f.AppRouterContext),
            P = null != I ? I : R,
            O = !I,
            N = !1 !== S,
            z = null === S ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
            { href: M, as: T } = i.default.useMemo(() => {
              if (!I) {
                let e = v(l);
                return { href: e, as: m ? v(m) : e };
              }
              let [e, t] = (0, o.resolveHref)(I, l, !0);
              return { href: e, as: m ? (0, o.resolveHref)(I, m) : t || e };
            }, [I, l, m]),
            L = i.default.useRef(M),
            _ = i.default.useRef(T);
          E && (n = i.default.Children.only(r));
          let j = E ? n && "object" == typeof n && n.ref : t,
            [W, V, $] = (0, u.useIntersection)({ rootMargin: "200px" }),
            U = i.default.useCallback(
              (e) => {
                (_.current !== T || L.current !== M) &&
                  ($(), (_.current = T), (L.current = M)),
                  W(e),
                  j &&
                    ("function" == typeof j
                      ? j(e)
                      : "object" == typeof j && (j.current = e));
              },
              [T, j, M, $, W]
            );
          i.default.useEffect(() => {
            P && V && N && y(P, M, T, { locale: D }, { kind: z }, O);
          }, [T, M, V, D, N, null == I ? void 0 : I.locale, P, O, z]);
          let G = {
            ref: U,
            onClick(e) {
              E || "function" != typeof F || F(e),
                E &&
                  n.props &&
                  "function" == typeof n.props.onClick &&
                  n.props.onClick(e),
                P &&
                  !e.defaultPrevented &&
                  (function (e, t, r, n, o, l, c, s, d, f) {
                    let { nodeName: u } = e.currentTarget,
                      p = "A" === u.toUpperCase();
                    if (
                      p &&
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
                        (!d && !(0, a.isLocalURL)(r)))
                    )
                      return;
                    e.preventDefault();
                    let g = () => {
                      let e = null == c || c;
                      "beforePopState" in t
                        ? t[o ? "replace" : "push"](r, n, {
                            shallow: l,
                            locale: s,
                            scroll: e,
                          })
                        : t[o ? "replace" : "push"](n || r, {
                            forceOptimisticNavigation: !f,
                            scroll: e,
                          });
                    };
                    d ? i.default.startTransition(g) : g();
                  })(e, P, M, T, B, w, A, D, O, N);
            },
            onMouseEnter(e) {
              E || "function" != typeof k || k(e),
                E &&
                  n.props &&
                  "function" == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(e),
                P &&
                  (N || !O) &&
                  y(
                    P,
                    M,
                    T,
                    { locale: D, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: z },
                    O
                  );
            },
            onTouchStart(e) {
              E || "function" != typeof H || H(e),
                E &&
                  n.props &&
                  "function" == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(e),
                P &&
                  (N || !O) &&
                  y(
                    P,
                    M,
                    T,
                    { locale: D, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: z },
                    O
                  );
            },
          };
          if ((0, c.isAbsoluteUrl)(T)) G.href = T;
          else if (!E || x || ("a" === n.type && !("href" in n.props))) {
            let e = void 0 !== D ? D : null == I ? void 0 : I.locale,
              t =
                (null == I ? void 0 : I.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  T,
                  e,
                  null == I ? void 0 : I.locales,
                  null == I ? void 0 : I.domainLocales
                );
            G.href =
              t ||
              (0, g.addBasePath)(
                (0, s.addLocale)(T, e, null == I ? void 0 : I.defaultLocale)
              );
          }
          return E
            ? i.default.cloneElement(n, G)
            : i.default.createElement("a", { ...C, ...G }, r);
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
        o = "function" == typeof IntersectionObserver,
        a = new Map(),
        l = [];
      function c(e) {
        let { rootRef: t, rootMargin: r, disabled: c } = e,
          s = c || !o,
          [d, f] = (0, n.useState)(!1),
          u = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            u.current = e;
          }, []);
        (0, n.useEffect)(() => {
          if (o) {
            if (s || d) return;
            let e = u.current;
            if (e && e.tagName) {
              let n = (function (e, t, r) {
                let {
                  id: n,
                  observer: i,
                  elements: o,
                } = (function (e) {
                  let t;
                  let r = { root: e.root || null, margin: e.rootMargin || "" },
                    n = l.find(
                      (e) => e.root === r.root && e.margin === r.margin
                    );
                  if (n && (t = a.get(n))) return t;
                  let i = new Map(),
                    o = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = i.get(e.target),
                          r = e.isIntersecting || e.intersectionRatio > 0;
                        t && r && t(r);
                      });
                    }, e);
                  return (
                    (t = { id: r, observer: o, elements: i }),
                    l.push(r),
                    a.set(r, t),
                    t
                  );
                })(r);
                return (
                  o.set(e, t),
                  i.observe(e),
                  function () {
                    if ((o.delete(e), i.unobserve(e), 0 === o.size)) {
                      i.disconnect(), a.delete(n);
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
        let g = (0, n.useCallback)(() => {
          f(!1);
        }, []);
        return [p, d, g];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7130: function (e, t, r) {
      "use strict";
      r.d(t, {
        g3: function () {
          return d;
        },
        oR: function () {
          return s;
        },
      });
      var n = r(5893),
        i = r(6607),
        o = r(7294);
      let a = (0, o.createContext)({
          collapsed: !1,
          setCollapsed: () => null,
          theme: "light",
          setTheme: () => null,
        }),
        l = "is-kui-collapsed",
        c = "is-kui-theme-dark-mode-enabled",
        s = () => (0, o.useContext)(a),
        d = (e) => {
          let { children: t } = e,
            [r, s] = (0, o.useState)(!1),
            [d, f] = (0, o.useState)(!1),
            [u, p] = (0, o.useState)("light"),
            g = (0, i.ac)("md");
          return (
            (0, o.useEffect)(() => {
              s(!0);
              let e = window.localStorage.getItem(l),
                t = window.localStorage.getItem(c);
              null !== e && f(JSON.parse(e)), null !== t && p(JSON.parse(t));
            }, []),
            (0, o.useEffect)(() => {
              g ? f(!0) : f(!1);
            }, [g]),
            (0, o.useEffect)(() => {
              window.localStorage.setItem(l, JSON.stringify(d));
            }, [d]),
            (0, o.useEffect)(() => {
              window.localStorage.setItem(c, JSON.stringify(u));
            }, [u]),
            (0, n.jsx)(a.Provider, {
              value: { collapsed: d, setCollapsed: f, theme: u, setTheme: p },
              children: r && t,
            })
          );
        };
    },
    4725: function (e, t, r) {
      "use strict";
      let n, i;
      r.r(t),
        r.d(t, {
          default: function () {
            return id;
          },
        });
      var o,
        a,
        l,
        c,
        s,
        d,
        f,
        u,
        p,
        g,
        h,
        m,
        y,
        v,
        b = r(5893);
      r(7952);
      var S = r(7130),
        x = r(571),
        B = r(7294),
        w = r.t(B, 2);
      let A = (0, x.iv)({
          display: "block",
          backgroundColor: x.rS.colors.displayBgCanvas,
          color: x.rS.colors.displayFgLowPrimary,
          fontFamily: x.rS.fonts.nvidiaSans,
          fontSize: x.rS.fontSizes.md,
          lineHeight: x.rS.lineHeights.body,
        }),
        D = { theme: "light", withCanvas: !1, withFonts: !1, withReset: !1 },
        F = new Map([
          ["light", x.ib.className],
          ["dark", x.Cs.className],
        ]),
        k = (e) => (e ? F.get(e) ?? e : "");
      var H = r(4184),
        E = { exports: {} },
        C = {};
      E.exports = (function () {
        if (f) return C;
        f = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          r = Object.prototype.hasOwnProperty,
          n =
            B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          i = { key: !0, ref: !0, __self: !0, __source: !0 };
        function o(t, o, a) {
          var l,
            c = {},
            s = null,
            d = null;
          for (l in (void 0 !== a && (s = "" + a),
          void 0 !== o.key && (s = "" + o.key),
          void 0 !== o.ref && (d = o.ref),
          o))
            r.call(o, l) && !i.hasOwnProperty(l) && (c[l] = o[l]);
          if (t && t.defaultProps)
            for (l in (o = t.defaultProps)) void 0 === c[l] && (c[l] = o[l]);
          return {
            $$typeof: e,
            type: t,
            key: s,
            ref: d,
            props: c,
            _owner: n.current,
          };
        }
        return (C.Fragment = t), (C.jsx = o), (C.jsxs = o), C;
      })();
      var I = E.exports;
      let R = I.jsx,
        P = "u" > typeof window ? B.useLayoutEffect : B.useEffect,
        O = (0, B.createContext)(void 0),
        N = () => (0, B.useContext)(O),
        z = (0, B.forwardRef)(
          (
            {
              className: e,
              children: t,
              css: r,
              theme: n = D.theme,
              withCanvas: i = D.withCanvas,
              withFonts: o = D.withFonts,
              withReset: a = D.withReset,
              ...l
            },
            c
          ) => {
            let s = i ? A({ css: r }) : (0, x.cT)({ css: r }),
              d = k(n);
            return (
              P(() => {
                o && (0, x.BG)(), a && (0, x.I_)();
              }, [o, a]),
              R(O.Provider, {
                value: n,
                children: R("div", {
                  className: H(e, s, d),
                  "data-testid": "kui-theme",
                  ref: c,
                  ...l,
                  children: t,
                }),
              })
            );
          }
        );
      z.displayName = "ThemeProvider";
      let M = (0, x.iv)({
          display: "grid",
          flexGrow: 1,
          gridTemplateAreas: "'navbar navbar''sidebar content''sidebar footer'",
          gridTemplateRows: "3rem auto 1fr auto",
          "@lg": {
            gridTemplateAreas:
              "'navbar navbar''sidebar content''sidebar footer'",
            gridTemplateColumns: "15rem 1fr",
            gridTemplateRows: "3rem auto 1fr auto",
          },
          variants: {
            isCollapsed: {
              true: { gridTemplateColumns: "0px 1fr auto" },
              false: { gridTemplateColumns: "0px 1fr auto" },
            },
          },
        }),
        T = (e) => {
          let { children: t } = e,
            { collapsed: r, theme: n } = (0, S.oR)();
          return (0, b.jsx)(z, {
            theme: n,
            withCanvas: !0,
            withReset: !0,
            children: (0, b.jsx)("div", {
              className: M({ isCollapsed: r }),
              children: t,
            }),
          });
        },
        L = (0, x.iv)({
          gridArea: "navbar",
          height: "".concat(3, "rem"),
          backgroundColor: x.rS.colors.displayBgLow,
          borderBottom: "1px solid ".concat(x.rS.colors.displayBorderStatic),
          position: "sticky",
          top: 0,
          zIndex: 10,
        }),
        _ = (e) => {
          let { children: t } = e;
          return (0, b.jsx)("div", { className: L(), children: t });
        },
        j = (0, x.iv)({ gridArea: "content" }),
        W = (e) => {
          let { children: t } = e;
          return (0, b.jsx)("div", { className: j(), children: t });
        };
      var V = r(6607);
      let $ = (0, x.iv)({
          display: "flex",
          variants: {
            align: (0, x.S8)(x.So, (e) => ({ alignItems: e })),
            direction: (0, x.S8)(x.GD, (e) => ({ flexDirection: e })),
            gap: (0, x.S8)(x.sG, (e) => ({ gap: x.rS.space[e] })),
            justify: (0, x.S8)(x.Gq, (e) => ({ justifyContent: e })),
            wrap: (0, x.S8)(x.xB, (e) => ({ flexWrap: e })),
          },
        }),
        U = {
          align: "stretch",
          css: {},
          direction: "row",
          gap: "none",
          justify: "flex-start",
          wrap: "nowrap",
        },
        G = { Inline: "kui-inline" },
        Z = { ...U, direction: "row", gap: "none" };
      var q = { exports: {} },
        Y = {};
      q.exports = (function () {
        if (u) return Y;
        u = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          r = Object.prototype.hasOwnProperty,
          n =
            B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          i = { key: !0, ref: !0, __self: !0, __source: !0 };
        function o(t, o, a) {
          var l,
            c = {},
            s = null,
            d = null;
          for (l in (void 0 !== a && (s = "" + a),
          void 0 !== o.key && (s = "" + o.key),
          void 0 !== o.ref && (d = o.ref),
          o))
            r.call(o, l) && !i.hasOwnProperty(l) && (c[l] = o[l]);
          if (t && t.defaultProps)
            for (l in (o = t.defaultProps)) void 0 === c[l] && (c[l] = o[l]);
          return {
            $$typeof: e,
            type: t,
            key: s,
            ref: d,
            props: c,
            _owner: n.current,
          };
        }
        return (Y.Fragment = t), (Y.jsx = o), (Y.jsxs = o), Y;
      })();
      var X = q.exports;
      let K = X.jsx,
        J = (0, B.forwardRef)(
          (
            {
              align: e = Z.align,
              children: t,
              className: r,
              css: n,
              direction: i = Z.direction,
              slotDivider: o,
              gap: a,
              justify: l = Z.justify,
              wrap: c = Z.wrap,
              ...s
            },
            d
          ) => {
            let f = $({
                align: e,
                css: n,
                direction: i,
                gap: a,
                justify: l,
                wrap: c,
              }).className,
              u = o
                ? (0, V.xR)({
                    children: t,
                    slotDivider: o,
                    testIdNameSpace: G.Inline,
                  })
                : t;
            return K("div", {
              className: H(f, r),
              "data-testid": G.Inline,
              ref: d,
              ...s,
              children: u,
            });
          }
        );
      J.displayName = "Inline";
      let Q = {
          name: "all_black_text_horizontal",
          data: '<svg viewBox="0 0 164 30"><defs><path id="a" d=""/></defs><g fill="none" fill-rule="evenodd"><path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331" fill="#1A1919"/><mask id="b" fill="#fff"><use href="#a"/></mask><path d="m96.374 5.707.002 19.66h5.552V5.707h-5.554zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.989zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659H88.37zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001zM146.1 9.3l3.364 9.204h-6.833l3.47-9.204z" fill="#000" mask="url(#b)"/><path d="M16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.82 6.82 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.89 18.89 0 0 1-1.838-.096V30h28.375V.047H16.89zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852zM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943z" fill="#76B900" mask="url(#b)"/></g></svg>',
        },
        ee = {
          name: "all_white_text_horizontal",
          data: '<svg viewBox="0 0 164 30"><defs><path id="a" d=""/></defs><g fill="none" fill-rule="evenodd"><path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331" fill="#FFF"/><mask id="b" fill="#fff"><use href="#a"/></mask><path d="m96.374 5.707.002 19.66h5.552V5.707h-5.554zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.989zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659H88.37zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001zM146.1 9.3l3.364 9.204h-6.833l3.47-9.204z" fill="#FFF" mask="url(#b)"/><path d="M16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.82 6.82 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.89 18.89 0 0 1-1.838-.096V30h28.375V.047H16.89zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852zM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943z" fill="#76B900" mask="url(#b)"/></g></svg>',
        },
        et = [
          {
            name: "all_black_horizontal",
            data: '<svg viewBox="0 0 164 30"><defs><path id="a" d=""/></defs><g fill="none" fill-rule="evenodd"><path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331" fill="#050505"/><mask id="b" fill="#fff"><use href="#a"/></mask><path d="m96.374 5.707.002 19.66h5.552V5.707h-5.554zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.989zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659H88.37zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001zM146.1 9.3l3.364 9.204h-6.833l3.47-9.204zM16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.82 6.82 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.89 18.89 0 0 1-1.838-.096V30h28.375V.047H16.89zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852zM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943z" fill="#050505" mask="url(#b)"/></g></svg>',
          },
          Q,
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
          ee,
          {
            name: "all_white_text_vertical",
            data: '<svg viewBox="0 0 99 75"><path d="M13.246 20.365s6.442-9.537 19.304-10.523v-3.46C18.304 7.53 5.967 19.636 5.967 19.636S12.954 39.904 32.55 41.76v-3.678c-14.38-1.816-19.304-17.717-19.304-17.717zM32.55 30.768v3.368c-10.868-1.944-13.885-13.28-13.885-13.28s5.219-5.8 13.885-6.74v3.695l-.016-.002c-4.548-.548-8.102 3.716-8.102 3.716s1.99 7.177 8.118 9.243zM32.55 0v6.382c.419-.033.837-.06 1.257-.075 16.198-.547 26.751 13.329 26.751 13.329S48.436 34.425 35.809 34.425a18.55 18.55 0 0 1-3.259-.289v3.946a21.4 21.4 0 0 0 2.714.176c11.751 0 20.25-6.02 28.479-13.148 1.363 1.097 6.949 3.763 8.098 4.932-7.825 6.571-26.059 11.869-36.396 11.869-.997 0-1.955-.06-2.895-.15v5.544h44.664V0H32.55zm0 14.115V9.842c.414-.03.832-.051 1.257-.065 11.648-.367 19.29 10.042 19.29 10.042S44.843 31.32 35.994 31.32a10.71 10.71 0 0 1-3.444-.552V17.81c4.535.55 5.447 2.56 8.173 7.118l6.063-5.129s-4.425-5.824-11.886-5.824c-.812 0-1.588.057-2.35.14zm65.847 58.283c0 .728-.528 1.217-1.153 1.217v-.005c-.642.005-1.16-.484-1.16-1.212s.518-1.216 1.16-1.216c.625 0 1.153.488 1.153 1.216m.469 0c0-1-.767-1.58-1.622-1.58-.86 0-1.627.58-1.627 1.58 0 .998.766 1.58 1.627 1.58.855 0 1.622-.582 1.622-1.58m-1.892.132h.175l.402.716h.442l-.446-.745c.23-.016.42-.128.42-.442 0-.39-.266-.515-.715-.515h-.65v1.702h.372v-.716m0-.287v-.41h.26c.142 0 .336.012.336.186 0 .19-.1.224-.267.224h-.329M84.162 58.756l3.03 8.399h-6.157l3.127-8.4zm-3.248-3.27-6.986 17.928h4.933l1.105-3.169h8.268l1.046 3.17h5.355l-7.039-17.931-6.682.001zM66.89 73.42h5.004V55.48l-5.005-.002.001 17.942zM32.142 55.478l-4.175 14.22-4-14.218-5.401-.002 5.713 17.942h7.211l5.759-17.942h-5.107zm20.232 3.907h2.15c3.121 0 5.139 1.42 5.139 5.103s-2.018 5.103-5.138 5.103h-2.151V59.385zm-4.963-3.907V73.42h8.114c4.323 0 5.735-.729 7.26-2.361 1.08-1.146 1.776-3.663 1.776-6.412 0-2.522-.59-4.773-1.62-6.173-1.853-2.506-4.523-2.996-8.509-2.996h-7.02zM0 55.453V73.42h5.047V59.778l3.91.001c1.296 0 2.218.327 2.842 1 .791.855 1.114 2.233 1.114 4.752v7.89h4.89v-9.927c0-7.085-4.458-8.04-8.82-8.04H0zm39.355.025.002 17.942h5.003V55.478h-5.005z" fill="#FFF" fill-rule="evenodd"/></svg>',
          },
          {
            name: "all_white_vertical",
            data: '<svg viewBox="0 0 71 47"><path d="M7.255 20.234s6.419-9.476 19.236-10.455V6.34C12.294 7.481 0 19.51 0 19.51s6.963 20.138 26.491 21.982v-3.655C12.161 36.032 7.255 20.234 7.255 20.234zM26.49 30.57v3.346c-10.83-1.931-13.837-13.194-13.837-13.194s5.2-5.764 13.837-6.698v3.672l-.016-.002c-4.532-.544-8.074 3.692-8.074 3.692s1.984 7.131 8.09 9.184zm0-30.57v6.341c.417-.033.834-.06 1.253-.074 16.14-.544 26.658 13.242 26.658 13.242s-12.08 14.694-24.663 14.694c-1.153 0-2.234-.107-3.248-.287v3.92a21.24 21.24 0 0 0 2.704.176c11.71 0 20.18-5.982 28.38-13.063 1.359 1.089 6.925 3.738 8.07 4.9-7.797 6.529-25.968 11.792-36.27 11.792-.993 0-1.947-.06-2.884-.15V47H71V0H26.491zm0 14.024V9.78c.412-.03.829-.052 1.253-.065 11.607-.365 19.222 9.977 19.222 9.977S38.742 31.12 29.923 31.12c-1.27 0-2.407-.205-3.432-.55V17.697c4.52.546 5.428 2.543 8.145 7.073l6.042-5.096s-4.41-5.787-11.845-5.787c-.81 0-1.583.057-2.342.138z" fill="#FFF" fill-rule="evenodd"/></svg>',
          },
        ],
        er = (0, x.iv)({
          display: "inline-flex",
          variants: {
            type: {
              horizontal: { svg: { height: "1.25rem", minHeight: "15px" } },
              vertical: { svg: { height: "2.5rem", minHeight: "38px" } },
            },
          },
        }),
        en = (e) => ("dark" === e ? ee : Q),
        ei = ({ name: e, theme: t }) => et.find((t) => t.name === e) ?? en(t),
        eo = (e) => (/vert/g.test(e) ? "vertical" : "horizontal");
      var ea = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        el = [
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
        ec = {
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
        es = function () {
          return (es =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        ed = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        ef = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, i = 0, o = t.length; i < o; i++)
              (!n && i in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        };
      function eu(e, t) {
        if ((void 0 === t && (t = {}), !e || !(e instanceof Node))) return null;
        var r,
          n,
          i,
          o,
          a,
          l = t.actions,
          c = void 0 === l ? [] : l,
          s = t.index,
          d = t.level,
          f = void 0 === d ? 0 : d,
          u = t.randomKey,
          p = e,
          g = "".concat(f, "-").concat(void 0 === s ? 0 : s),
          h = [];
        if (
          (u &&
            0 === f &&
            (g = ""
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
              .concat(g)),
          Array.isArray(c) &&
            c.forEach(function (t) {
              t.condition(p, g, f) &&
                ("function" != typeof t.pre ||
                  (p = t.pre(p, g, f)) instanceof Node ||
                  (p = e),
                "function" == typeof t.post && h.push(t.post(p, g, f)));
            }),
          h.length)
        )
          return h;
        switch (p.nodeType) {
          case 1:
            return B.createElement(
              ((r = p.nodeName),
              /[a-z]+[A-Z]+[a-z]+/.test(r) ? r : r.toLowerCase()),
              (function (e, t) {
                var r = { key: t };
                if (e instanceof Element) {
                  var n = e.getAttribute("class");
                  n && (r.className = n),
                    ef([], ed(e.attributes), !1).forEach(function (e) {
                      switch (e.name) {
                        case "class":
                          break;
                        case "style":
                          r[e.name] = e.value
                            .split(/ ?; ?/)
                            .reduce(function (e, t) {
                              var r = ea(t.split(/ ?: ?/), 2),
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
                          r[ec[e.name] || e.name] = !0;
                          break;
                        default:
                          r[ec[e.name] || e.name] = e.value;
                      }
                    });
                }
                return r;
              })(p, g),
              ((n = p.childNodes),
              (i = t),
              (o = ef([], ed(n), !1)
                .map(function (e, t) {
                  return eu(e, es(es({}, i), { index: t, level: f + 1 }));
                })
                .filter(Boolean)).length
                ? o
                : null)
            );
          case 3:
            var m =
              (null === (a = p.nodeValue) || void 0 === a
                ? void 0
                : a.toString()) || "";
            if (/^\s+$/.test(m) && !/[\u00A0\u202F]/.test(m)) return null;
            if (!p.parentNode) return m;
            var y = p.parentNode.nodeName.toLowerCase();
            if (el.includes(y))
              return (
                /\S/.test(m) &&
                  console.warn(
                    "A textNode is not allowed inside '"
                      .concat(y, "'. Your text \"")
                      .concat(m, '" will be ignored')
                  ),
                null
              );
            return m;
          default:
            return null;
        }
      }
      function ep(e, t) {
        return (void 0 === t && (t = {}), "string" == typeof e)
          ? (function (e, t) {
              if ((void 0 === t && (t = {}), !e || "string" != typeof e))
                return null;
              var r = t.nodeOnly,
                n = t.selector,
                i = t.type;
              try {
                var o = new DOMParser()
                  .parseFromString(e, void 0 === i ? "text/html" : i)
                  .querySelector(void 0 === n ? "body > *" : n);
                if (!(o instanceof Node))
                  throw TypeError("Error parsing input");
                if (void 0 !== r && r) return o;
                return eu(o, t);
              } catch (e) {}
              return null;
            })(e, t)
          : e instanceof Node
          ? eu(e, t)
          : null;
      }
      var eg = r(8875),
        eh = {
          FAILED: "failed",
          LOADED: "loaded",
          LOADING: "loading",
          PENDING: "pending",
          READY: "ready",
          UNSUPPORTED: "unsupported",
        };
      function em() {
        return eg.canUseDOM;
      }
      var ey =
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
        ev = function () {
          return (ev =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        eb = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        eS = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, i = 0, o = t.length; i < o; i++)
              (!n && i in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        ex = Object.create(null),
        eB = (function (e) {
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
                    r.setState({ content: e, status: eh.LOADED }, r.getElement);
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
                        ? eh.UNSUPPORTED
                        : eh.FAILED;
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
                      t && (ex[i] = { content: "", status: eh.LOADING }),
                      fetch(i, n)
                        .then(function (e) {
                          var t = e.headers.get("content-type"),
                            r = eb((t || "").split(/ ?; ?/), 1)[0];
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
                            ex[i].status === eh.LOADING && delete ex[i];
                            return;
                          }
                          if ((r.handleLoad(e), t)) {
                            var o = ex[i];
                            o && ((o.content = e), (o.status = eh.LOADED));
                          }
                        })
                        .catch(function (e) {
                          r.handleError(e), t && ex[i] && delete ex[i];
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
                hasCache: !!t.cacheRequests && !!ex[t.src],
                status: eh.PENDING,
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
            ey(t, e),
            Object.defineProperty(t.prototype, "componentDidMount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                if (((this.isActive = !0), em() && !this.isInitialized)) {
                  var e = this.state.status,
                    t = this.props.src;
                  try {
                    if (e === eh.PENDING) {
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
                if (em()) {
                  var r = this.state,
                    n = r.hasCache,
                    i = r.status,
                    o = this.props,
                    a = o.onLoad,
                    l = o.src;
                  if (
                    (t.status !== eh.READY && i === eh.READY && a && a(l, n),
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
                    i = ep(n, { nodeOnly: !0 });
                  if (!i || !(i instanceof SVGSVGElement))
                    throw Error("Could not convert the src to a DOM Node");
                  var o = this.updateSVGAttributes(i);
                  if (t) {
                    var a = o.querySelector("desc");
                    a && a.parentNode && a.parentNode.removeChild(a);
                    var l = document.createElement("desc");
                    (l.innerHTML = t), o.prepend(l);
                  }
                  if (r) {
                    var c = o.querySelector("title");
                    c && c.parentNode && c.parentNode.removeChild(c);
                    var s = document.createElement("title");
                    (s.innerHTML = r), o.prepend(s);
                  }
                  return o;
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
                    t = ep(e);
                  if (!t || !B.isValidElement(t))
                    throw Error("Could not convert the src to a React element");
                  this.setState({ element: t, status: eh.READY });
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
                    { content: "", element: null, status: eh.LOADING },
                    function () {
                      var t,
                        r = e.props,
                        n = r.cacheRequests,
                        i = r.src,
                        o = n && ex[i];
                      if (o && o.status === eh.LOADED) {
                        e.handleLoad(o.content);
                        return;
                      }
                      var a = i.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);
                      if (
                        (a
                          ? (t = a[1]
                              ? window.atob(a[2])
                              : decodeURIComponent(a[2]))
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
                  o = r.uniquifyIDs,
                  a = [
                    "id",
                    "href",
                    "xlink:href",
                    "xlink:role",
                    "xlink:arcrole",
                  ],
                  l = ["href", "xlink:href"];
                return (
                  o &&
                    eS([], eb(e.children), !1).map(function (e) {
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
                        a.forEach(function (e) {
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
                  o = n.innerRef,
                  a = n.loader,
                  l = void 0 === a ? null : a,
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
                return em()
                  ? t
                    ? B.cloneElement(t, ev({ ref: o }, c))
                    : [eh.UNSUPPORTED, eh.FAILED].includes(r)
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
        })(B.PureComponent),
        ew = { exports: {} },
        eA = {};
      ew.exports = (function () {
        if (p) return eA;
        p = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          r = Object.prototype.hasOwnProperty,
          n =
            B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          i = { key: !0, ref: !0, __self: !0, __source: !0 };
        function o(t, o, a) {
          var l,
            c = {},
            s = null,
            d = null;
          for (l in (void 0 !== a && (s = "" + a),
          void 0 !== o.key && (s = "" + o.key),
          void 0 !== o.ref && (d = o.ref),
          o))
            r.call(o, l) && !i.hasOwnProperty(l) && (c[l] = o[l]);
          if (t && t.defaultProps)
            for (l in (o = t.defaultProps)) void 0 === c[l] && (c[l] = o[l]);
          return {
            $$typeof: e,
            type: t,
            key: s,
            ref: d,
            props: c,
            _owner: n.current,
          };
        }
        return (eA.Fragment = t), (eA.jsx = o), (eA.jsxs = o), eA;
      })();
      var eD = ew.exports;
      let eF = eD.jsx,
        ek = (0, B.forwardRef)(({ className: e, css: t, name: r, ...n }, i) => {
          let o = N(),
            [a, l] = (0, B.useMemo)(() => {
              let e = ei({ name: r, theme: o });
              return [e, eo(e.name)];
            }, [r, o]),
            c = er({ css: t, type: l }).className;
          return eF("div", {
            className: H(c, e),
            "data-testid": "kui-logo",
            ref: i,
            ...n,
            children: eF(eB, { src: a.data }),
          });
        });
      ek.displayName = "Logo";
      let eH = (0, x.iv)({
          cursor: "pointer",
          border: `1px solid ${x.rS.colors.g500}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: x.rS.space.xs,
          fontSize: x.rS.fontSizes.ms,
          fontWeight: x.rS.fontWeights.medium,
          fontFamily: x.rS.fonts.nvidiaSans,
          lineHeight: x.rS.lineHeights.text,
          padding: `${x.rS.space.sm} ${x.rS.space.ms}`,
          "&:disabled:hover": { cursor: "not-allowed" },
          variants: {
            size: {
              large: { fontSize: x.rS.fontSizes.md, padding: x.rS.space.ms },
              small: { fontSize: x.rS.fontSizes.sm, padding: x.rS.space.ss },
              standard: { fontSize: x.rS.fontSizes.ms, padding: x.rS.space.sm },
              tiny: { fontSize: x.rS.fontSizes.sm, padding: x.rS.space.xs },
            },
            tone: {
              primary: {
                backgroundColor: x.rS.colors.actionBgPrimary,
                borderColor: x.rS.colors.actionBorderPrimary,
                color: x.rS.colors.actionFgPrimary,
                "&:hover": {
                  backgroundColor: x.rS.colors.actionBgPrimaryHover,
                  borderColor: x.rS.colors.actionBorderPrimaryHover,
                  color: x.rS.colors.actionFgPrimaryHover,
                },
                "&:active": {
                  backgroundColor: x.rS.colors.actionBgPrimaryActive,
                  borderColor: x.rS.colors.actionBorderPrimaryActive,
                  color: x.rS.colors.actionFgPrimaryActive,
                },
                "&:disabled": {
                  backgroundColor: x.rS.colors.actionBgPrimaryDisabled,
                  borderColor: x.rS.colors.actionBorderPrimaryDisabled,
                  color: x.rS.colors.actionFgPrimaryDisabled,
                },
              },
              secondary: {
                backgroundColor: x.rS.colors.actionBgSecondary,
                borderColor: x.rS.colors.actionBorderSecondary,
                color: x.rS.colors.actionFgSecondary,
                "&:hover": {
                  backgroundColor: x.rS.colors.actionBgSecondaryHover,
                  borderColor: x.rS.colors.actionBorderSecondaryHover,
                  color: x.rS.colors.actionFgSecondaryHover,
                },
                "&:active": {
                  backgroundColor: x.rS.colors.actionBgSecondaryActive,
                  borderColor: x.rS.colors.actionBorderSecondaryActive,
                  color: x.rS.colors.actionFgSecondaryActive,
                },
                "&:disabled": {
                  backgroundColor: x.rS.colors.actionBgSecondaryDisabled,
                  borderColor: x.rS.colors.actionBorderSecondaryDisabled,
                  color: x.rS.colors.actionFgSecondaryDisabled,
                },
              },
              tertiary: {
                backgroundColor: "transparent",
                borderColor: "transparent",
                color: x.rS.colors.actionFgTertiary,
                "&:hover": {
                  backgroundColor: x.rS.colors.actionBgTertiaryHover,
                  borderColor: "transparent",
                  color: x.rS.colors.actionFgTertiaryHover,
                },
                "&:active": {
                  backgroundColor: x.rS.colors.actionBgTertiaryActive,
                  borderColor: "transparent",
                  color: x.rS.colors.actionFgTertiaryActive,
                },
                "&:disabled": {
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  color: x.rS.colors.actionFgTertiaryDisabled,
                },
              },
            },
            danger: {
              true: {
                backgroundColor: x.rS.colors.actionBgPrimaryDanger,
                borderColor: x.rS.colors.actionBorderPrimaryDanger,
                color: x.rS.colors.actionFgPrimaryDanger,
                "&:hover:not(:disabled)": {
                  backgroundColor: x.rS.colors.actionBgPrimaryDangerHover,
                  borderColor: x.rS.colors.actionBorderPrimaryDangerHover,
                },
                "&:active:not(:disabled)": {
                  backgroundColor: x.rS.colors.actionBgPrimaryDangerActive,
                  borderColor: x.rS.colors.actionBorderPrimaryDangerActive,
                },
              },
            },
          },
          compoundVariants: [
            {
              tone: "secondary",
              danger: !0,
              css: {
                backgroundColor: x.rS.colors.actionBgSecondaryDanger,
                borderColor: x.rS.colors.actionBorderSecondaryDanger,
                color: x.rS.colors.actionFgSecondaryDanger,
                "&:hover:not(:disabled)": {
                  backgroundColor: x.rS.colors.actionBgSecondaryDangerHover,
                  borderColor: x.rS.colors.actionBorderSecondaryDangerHover,
                  color: x.rS.colors.actionFgSecondaryDangerHover,
                },
                "&:active:not(:disabled)": {
                  backgroundColor: x.rS.colors.actionBgSecondaryDangerActive,
                  borderColor: x.rS.colors.actionBorderSecondaryDangerActive,
                  color: x.rS.colors.actionFgSecondaryDangerActive,
                },
              },
            },
            {
              tone: "tertiary",
              danger: !0,
              css: {
                backgroundColor: "transparent",
                borderColor: "transparent",
                color: x.rS.colors.actionFgTertiaryDanger,
                "&:hover:not(:disabled)": {
                  backgroundColor: x.rS.colors.actionBgTertiaryDangerHover,
                  borderColor: "transparent",
                  color: x.rS.colors.actionFgTertiaryDanger,
                },
                "&:active:not(:disabled)": {
                  backgroundColor: x.rS.colors.actionBgTertiaryDangerActive,
                  borderColor: "transparent",
                  color: x.rS.colors.actionFgTertiaryDangerActive,
                },
              },
            },
          ],
        }),
        eE = { danger: !1, size: "standard", tone: "primary" };
      var eC = { exports: {} },
        eI = {};
      eC.exports = (function () {
        if (g) return eI;
        g = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          r = Object.prototype.hasOwnProperty,
          n =
            B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          i = { key: !0, ref: !0, __self: !0, __source: !0 };
        function o(t, o, a) {
          var l,
            c = {},
            s = null,
            d = null;
          for (l in (void 0 !== a && (s = "" + a),
          void 0 !== o.key && (s = "" + o.key),
          void 0 !== o.ref && (d = o.ref),
          o))
            r.call(o, l) && !i.hasOwnProperty(l) && (c[l] = o[l]);
          if (t && t.defaultProps)
            for (l in (o = t.defaultProps)) void 0 === c[l] && (c[l] = o[l]);
          return {
            $$typeof: e,
            type: t,
            key: s,
            ref: d,
            props: c,
            _owner: n.current,
          };
        }
        return (eI.Fragment = t), (eI.jsx = o), (eI.jsxs = o), eI;
      })();
      var eR = eC.exports;
      let eP = eR.jsx,
        eO = (0, B.forwardRef)(
          (
            {
              children: e,
              className: t,
              css: r,
              danger: n = eE.danger,
              size: i = eE.size,
              tone: o = eE.tone,
              ...a
            },
            l
          ) => {
            let c = eH({ css: r, danger: n, size: i, tone: o }).className;
            return eP("button", {
              className: H(c, t),
              "data-testid": "kui-button",
              ref: l,
              ...a,
              children: e,
            });
          }
        );
      eO.displayName = "Button";
      var eN = { exports: {} },
        ez = {};
      eN.exports = (function () {
        if (h) return ez;
        h = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          r = Object.prototype.hasOwnProperty,
          n =
            B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          i = { key: !0, ref: !0, __self: !0, __source: !0 };
        function o(t, o, a) {
          var l,
            c = {},
            s = null,
            d = null;
          for (l in (void 0 !== a && (s = "" + a),
          void 0 !== o.key && (s = "" + o.key),
          void 0 !== o.ref && (d = o.ref),
          o))
            r.call(o, l) && !i.hasOwnProperty(l) && (c[l] = o[l]);
          if (t && t.defaultProps)
            for (l in (o = t.defaultProps)) void 0 === c[l] && (c[l] = o[l]);
          return {
            $$typeof: e,
            type: t,
            key: s,
            ref: d,
            props: c,
            _owner: n.current,
          };
        }
        return (ez.Fragment = t), (ez.jsx = o), (ez.jsxs = o), ez;
      })();
      var eM = eN.exports;
      let eT = eM.jsx,
        eL = (0, B.forwardRef)(
          (
            {
              align: e = U.align,
              className: t,
              children: r,
              css: n,
              direction: i = U.direction,
              gap: o,
              justify: a = U.justify,
              wrap: l = U.wrap,
              ...c
            },
            s
          ) => {
            let d = $({
              align: e,
              css: n,
              direction: i,
              gap: o,
              justify: a,
              wrap: l,
            }).className;
            return eT("div", {
              className: H(d, t),
              "data-testid": "kui-flex",
              ref: s,
              ...c,
              children: r,
            });
          }
        );
      eL.displayName = "Flex";
      let e_ = (0, x.iv)({
          backgroundColor: x.rS.colors.menuBgBase,
          alignItems: "center",
          display: "flex",
          height: "56px",
          padding: `${x.rS.space.ms} ${x.rS.space.sm}`,
          width: "100%",
        }),
        ej = (0, x.iv)({ marginLeft: "auto", marginRight: "auto" }),
        eW = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M13 4H3V3h10v1Zm0 4H3V7h10v1Zm0 4H3v-1h10v1Z",
              clipRule: "evenodd",
            })
          )
        ),
        eV = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M7.5 4V2h1v2h-1ZM4.818 5.525 3.404 4.111l.707-.707 1.414 1.414-.707.707Zm6.364 0-.707-.707 1.414-1.414.707.707-1.414 1.414ZM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 .5H2v-1h2v1Zm10 0h-2v-1h2v1Zm-9.89 4.096-.706-.707 1.414-1.414.707.707-1.414 1.414Zm7.78 0-1.415-1.414.707-.707 1.414 1.414-.707.707ZM8.5 12v2h-1v-2h1Z",
              clipRule: "evenodd",
            })
          )
        ),
        e$ = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m7.311 2.946 1.004.063a5 5 0 1 1-4.48 7.76L3.28 9.93l1.004.063a4 4 0 0 0 3.584-6.209l-.556-.838Zm1.882 1.235A4.99 4.99 0 0 1 8.866 8.5a4.99 4.99 0 0 1-3.576 2.443A4 4 0 1 0 9.194 4.18Z",
              clipRule: "evenodd",
            })
          )
        ),
        eU = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M8 9.293 4.354 5.646l-.708.708L8 10.707l4.354-4.353-.707-.708L8 9.293Z",
              clipRule: "evenodd",
            })
          )
        ),
        eG = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m6.707 8 3.647 3.646-.708.708L5.293 8l4.353-4.354.707.708L6.708 8Z",
              clipRule: "evenodd",
            })
          )
        ),
        eZ = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M9.293 8 5.646 4.354l.708-.708L10.707 8l-4.353 4.354-.708-.708L9.293 8Z",
              clipRule: "evenodd",
            })
          )
        ),
        eq = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m8 6.707-3.646 3.647-.708-.708L8 5.293l4.354 4.353-.707.708L8 6.707Z",
              clipRule: "evenodd",
            })
          )
        ),
        eY = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M13 4H3V3h10v1Zm0 4H3V7h10v1Zm0 4H3v-1h10v1Z",
              clipRule: "evenodd",
            })
          )
        ),
        eX = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              d: "M7.5 2v2h1V2h-1ZM3.404 4.11l1.414 1.415.707-.707-1.414-1.414-.707.707Zm7.071.708.707.707 1.414-1.414-.707-.707-1.414 1.414ZM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 8.5h2v-1H2v1Zm10 0h2v-1h-2v1Zm-8.596 3.39.707.706 1.414-1.414-.707-.707-1.414 1.414Zm7.071-.708 1.414 1.414.707-.707-1.414-1.414-.707.707ZM8.5 14v-2h-1v2h1Z",
            })
          )
        ),
        eK = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              d: "m8.315 3.009-1.004-.063.556.839a4 4 0 0 1-3.584 6.208L3.279 9.93l.556.839a5 5 0 1 0 4.48-7.76Z",
            })
          )
        ),
        eJ = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M8 9.293 4.354 5.646l-.708.708L8 10.707l4.354-4.353-.707-.708L8 9.293Z",
              clipRule: "evenodd",
            })
          )
        ),
        eQ = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m6.707 8 3.647 3.646-.707.708L5.293 8l4.354-4.354.707.708L6.707 8Z",
              clipRule: "evenodd",
            })
          )
        ),
        e0 = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M9.293 8 5.646 4.354l.708-.708L10.707 8l-4.353 4.354-.708-.708L9.293 8Z",
              clipRule: "evenodd",
            })
          )
        ),
        e1 = (0, B.forwardRef)((e, t) =>
          B.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: t,
              ...e,
            },
            B.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m8 6.707-3.646 3.647-.708-.708L8 5.293l4.354 4.353-.707.708L8 6.707Z",
              clipRule: "evenodd",
            })
          )
        ),
        e2 = (0, B.forwardRef)(({ variant: e, ...t }, r) =>
          "line" === e
            ? B.createElement(eW, { ...t, ref: r })
            : B.createElement(eY, { ...t, ref: r })
        ),
        e5 = (0, B.forwardRef)(({ variant: e, ...t }, r) =>
          "line" === e
            ? B.createElement(eV, { ...t, ref: r })
            : B.createElement(eX, { ...t, ref: r })
        ),
        e8 = (0, B.forwardRef)(({ variant: e, ...t }, r) =>
          "line" === e
            ? B.createElement(e$, { ...t, ref: r })
            : B.createElement(eK, { ...t, ref: r })
        ),
        e4 =
          (({ variant: e, ...t }, r) =>
            "line" === e
              ? B.createElement(eU, { ...t, ref: r })
              : B.createElement(eJ, { ...t, ref: r }),
          (0, B.forwardRef)(({ variant: e, ...t }, r) =>
            "line" === e
              ? B.createElement(eG, { ...t, ref: r })
              : B.createElement(eQ, { ...t, ref: r })
          )),
        e3 = (0, B.forwardRef)(({ variant: e, ...t }, r) =>
          "line" === e
            ? B.createElement(eZ, { ...t, ref: r })
            : B.createElement(e0, { ...t, ref: r })
        );
      ({ variant: e, ...t }, r) =>
        "line" === e
          ? B.createElement(eq, { ...t, ref: r })
          : B.createElement(e1, { ...t, ref: r });
      var e7 = { exports: {} },
        e6 = {};
      e7.exports = (function () {
        if (m) return e6;
        m = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          r = Object.prototype.hasOwnProperty,
          n =
            B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          i = { key: !0, ref: !0, __self: !0, __source: !0 };
        function o(t, o, a) {
          var l,
            c = {},
            s = null,
            d = null;
          for (l in (void 0 !== a && (s = "" + a),
          void 0 !== o.key && (s = "" + o.key),
          void 0 !== o.ref && (d = o.ref),
          o))
            r.call(o, l) && !i.hasOwnProperty(l) && (c[l] = o[l]);
          if (t && t.defaultProps)
            for (l in (o = t.defaultProps)) void 0 === c[l] && (c[l] = o[l]);
          return {
            $$typeof: e,
            type: t,
            key: s,
            ref: d,
            props: c,
            _owner: n.current,
          };
        }
        return (e6.Fragment = t), (e6.jsx = o), (e6.jsxs = o), e6;
      })();
      var e9 = e7.exports;
      let te = e9.jsx,
        tt = e9.jsxs,
        tr = (0, B.forwardRef)(
          (
            {
              children: e,
              className: t,
              css: r,
              expanderOnClick: n,
              slotCenter: i,
              slotLeft: o,
              slotLogo: a = te(ek, {}),
              slotRight: l,
              ...c
            },
            s
          ) => {
            let d = e_({ css: r }).className;
            return te("div", {
              className: H(d, t),
              "data-testid": "kui-app-bar",
              ref: s,
              ...c,
              children: tt(eL, {
                align: "center",
                css: { width: "100%" },
                gap: "ss",
                justify: "space-between",
                children: [
                  tt(eL, {
                    align: "center",
                    gap: "ms",
                    children: [
                      n &&
                        te(eO, {
                          onClick: n,
                          tone: "tertiary",
                          children: te(e2, {
                            color: "5e5e5e",
                            height: "14px",
                            width: "14px",
                            variant: "fill",
                          }),
                        }),
                      a,
                      o,
                    ],
                  }),
                  i &&
                    te(eL, {
                      align: "center",
                      className: ej({ css: r }),
                      gap: "ms",
                      children: i,
                    }),
                  l && te(eL, { align: "center", gap: "ms", children: l }),
                ],
              }),
            });
          }
        );
      tr.displayName = "AppBar";
      var tn = r(1664),
        ti = r.n(tn),
        to = r(1841);
      let ta = x.rS.space.md,
        tl = x.rS.space.sm,
        tc = {
          textDecorationColor: x.rS.colors.menuBorderSelected,
          textDecorationThickness: x.rS.space.xxs,
          textDecorationLine: "underline",
          textUnderlineOffset: x.rS.space.xs,
        },
        ts = { ...tc, textDecorationColor: x.rS.colors.menuBorderHover },
        td = {
          ...to.OX.menuNavActive,
          fontWeight: x.rS.fontWeights.medium,
          color: x.rS.colors.menuFgSelected,
          ...tc,
        },
        tf = (0, x.iv)({
          background: "none",
          border: "none",
          cursor: "pointer",
          font: "inherit",
          color: x.rS.colors.menuFgPrimary,
          variants: { selected: { true: td } },
        }),
        tu = (0, x.iv)({
          color: x.rS.colors.menuFgPrimary,
          display: "inline-flex",
          alignItems: "center",
          gap: x.rS.space.sm,
          textDecoration: "none",
          whiteSpace: "nowrap",
          "&:hover": { color: x.rS.colors.menuFgHover, ...ts },
        }),
        tp = (0, x.iv)({
          color: x.rS.colors.menuFgPrimary,
          cursor: "pointer",
          listStyle: "none",
          padding: `${tl} ${ta}`,
          position: "relative",
          scrollSnapAlign: "start",
          width: "100%",
          ...to.OX.menuNavDefault,
          variants: {
            disabled: {
              true: {
                color: x.rS.colors.menuFgPlaceholder,
                pointerEvents: "none",
                [`.${tu.className}`]: { color: x.rS.colors.menuFgPlaceholder },
              },
            },
            selected: { true: td },
            inMenu: { true: { padding: x.rS.space.sm } },
          },
          compoundVariants: [
            {
              selected: !0,
              inMenu: !0,
              css: {
                textDecoration: "none",
                color: x.rS.colors.menuFgActive,
                backgroundColor: x.rS.colors.menuBgActive,
                fontWeight: x.rS.fontWeights.regular,
                [`.${tu.className}`]: {
                  color: x.rS.colors.menuFgActive,
                  backgroundColor: x.rS.colors.menuBgActive,
                },
              },
            },
            { selected: !0, inMenu: !1, css: { [`.${tu.className}`]: td } },
          ],
          "&:hover": {
            color: x.rS.colors.menuFgHover,
            ...ts,
            [`.${tu.className}, .${tf.className}`]: {
              color: x.rS.colors.menuFgHover,
              ...ts,
            },
          },
        }),
        tg = (0, x.iv)({
          color: x.rS.colors.displayFgLowPrimary,
          display: "flex",
          flexWrap: "nowrap",
          fontFamily: x.rS.fonts.nvidiaSans,
          fontSize: x.rS.fontSizes.ms,
          lineHeight: x.rS.lineHeights.body,
          listStyleType: "none",
          margin: 0,
          overflow: "hidden",
          padding: 0,
        }),
        th = (0, x.iv)({
          display: "flex",
          flexGrow: 0,
          flexShrink: 1,
          overflowX: "auto",
          position: "relative",
          scrollSnapType: "x mandatory",
          variants: { showButtons: { true: { overflowX: "hidden" } } },
        }),
        tm =
          ((0, x.iv)({
            border: ` 1px solid ${x.rS.colors.menuBorderDefault}`,
            boxShadow: x.rS.shadows.menuDropdown,
          }),
          (0, x.iv)({
            $$gradientColor: x.rS.colors.menuBgDefault,
            height: "100%",
            position: "absolute",
            width: "100px",
            zIndex: 10,
            opacity: 1,
            transition: "opacity 0.25s ease-in-out",
            variants: {
              type: {
                left: {
                  background:
                    "linear-gradient(90deg, $$gradientColor, transparent)",
                  inset: "0 auto 0 0",
                },
                right: {
                  background:
                    "linear-gradient(90deg, transparent, $$gradientColor)",
                  inset: "0 0 0 auto",
                },
              },
              hide: { true: { opacity: 0, pointerEvents: "none" } },
            },
          })),
        ty = (0, x.iv)({ position: "relative", overflowX: "auto" }),
        tv = {
          HorizontalNavRoot: "kui-horizontal-nav-root",
          HorizontalNavItem: "kui-horizontal-nav-item",
          HorizontalNavControl: "kui-horizontal-nav-control",
          HorizontalNavLink: "kui-horizontal-nav-link",
          HorizontalNavList: "kui-horizontal-nav-list",
          HorizontalNavScrollContainer: "kui-horizontal-nav-scroll-container",
        },
        tb = { direction: "left", showButtons: !1, showNavControl: !1 },
        tS = { disabled: !1, selected: !1, inMenu: !1 },
        tx = {
          css: {},
          gradientColor: x.rS.colors.menuBgBase,
          showButtons: !1,
          showGradients: !1,
          showLeftControl: !1,
          showRightControl: !1,
        };
      function tB() {
        return (tB = Object.assign
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
      function tw(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((null == e || e(n), !1 === r || !n.defaultPrevented))
            return null == t ? void 0 : t(n);
        };
      }
      function tA(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function tD(...e) {
        return (0, B.useCallback)(tA(...e), e);
      }
      function tF(e, t = []) {
        let r = [],
          n = () => {
            let t = r.map((e) => (0, B.createContext)(e));
            return function (r) {
              let n = (null == r ? void 0 : r[e]) || t;
              return (0, B.useMemo)(
                () => ({ [`__scope${e}`]: { ...r, [e]: n } }),
                [r, n]
              );
            };
          };
        return (
          (n.scopeName = e),
          [
            function (t, n) {
              let i = (0, B.createContext)(n),
                o = r.length;
              function a(t) {
                let { scope: r, children: n, ...a } = t,
                  l = (null == r ? void 0 : r[e][o]) || i,
                  c = (0, B.useMemo)(() => a, Object.values(a));
                return (0, B.createElement)(l.Provider, { value: c }, n);
              }
              return (
                (r = [...r, n]),
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (r, a) {
                    let l = (null == a ? void 0 : a[e][o]) || i,
                      c = (0, B.useContext)(l);
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
                      o = i[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return (0, B.useMemo)(
                    () => ({ [`__scope${t.scopeName}`]: n }),
                    [n]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(n, ...t),
          ]
        );
      }
      var tk = r(3935);
      let tH = (0, B.forwardRef)((e, t) => {
        let { children: r, ...n } = e,
          i = B.Children.toArray(r),
          o = i.find(tI);
        if (o) {
          let e = o.props.children,
            r = i.map((t) =>
              t !== o
                ? t
                : B.Children.count(e) > 1
                ? B.Children.only(null)
                : (0, B.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, B.createElement)(
            tE,
            tB({}, n, { ref: t }),
            (0, B.isValidElement)(e) ? (0, B.cloneElement)(e, void 0, r) : null
          );
        }
        return (0, B.createElement)(tE, tB({}, n, { ref: t }), r);
      });
      tH.displayName = "Slot";
      let tE = (0, B.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        return (0, B.isValidElement)(r)
          ? (0, B.cloneElement)(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let i = e[n],
                    o = t[n],
                    a = /^on[A-Z]/.test(n);
                  a
                    ? i && o
                      ? (r[n] = (...e) => {
                          o(...e), i(...e);
                        })
                      : i && (r[n] = i)
                    : "style" === n
                    ? (r[n] = { ...i, ...o })
                    : "className" === n &&
                      (r[n] = [i, o].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(n, r.props),
              ref: t ? tA(t, r.ref) : r.ref,
            })
          : B.Children.count(r) > 1
          ? B.Children.only(null)
          : null;
      });
      tE.displayName = "SlotClone";
      let tC = ({ children: e }) => (0, B.createElement)(B.Fragment, null, e);
      function tI(e) {
        return (0, B.isValidElement)(e) && e.type === tC;
      }
      let tR = [
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
        let r = (0, B.forwardRef)((e, r) => {
          let { asChild: n, ...i } = e,
            o = n ? tH : t;
          return (
            (0, B.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, B.createElement)(o, tB({}, i, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
      }, {});
      function tP(e) {
        let t = (0, B.useRef)(e);
        return (
          (0, B.useEffect)(() => {
            t.current = e;
          }),
          (0, B.useMemo)(
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
      let tO = "dismissableLayer.update",
        tN = (0, B.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        tz = (0, B.forwardRef)((e, t) => {
          var r;
          let {
              disableOutsidePointerEvents: i = !1,
              onEscapeKeyDown: o,
              onPointerDownOutside: a,
              onFocusOutside: l,
              onInteractOutside: c,
              onDismiss: s,
              ...d
            } = e,
            f = (0, B.useContext)(tN),
            [u, p] = (0, B.useState)(null),
            g =
              null !== (r = null == u ? void 0 : u.ownerDocument) &&
              void 0 !== r
                ? r
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, h] = (0, B.useState)({}),
            m = tD(t, (e) => p(e)),
            y = Array.from(f.layers),
            [v] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
            b = y.indexOf(v),
            S = u ? y.indexOf(u) : -1,
            x = f.layersWithOutsidePointerEventsDisabled.size > 0,
            w = S >= b,
            A = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = tP(e),
                n = (0, B.useRef)(!1),
                i = (0, B.useRef)(() => {});
              return (
                (0, B.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !n.current) {
                        let n = { originalEvent: e };
                        function o() {
                          tT("dismissableLayer.pointerDownOutside", r, n, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", i.current),
                            (i.current = o),
                            t.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : o();
                      }
                      n.current = !1;
                    },
                    o = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", i.current);
                  };
                }, [t, r]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...f.branches].some((e) => e.contains(t));
              !w ||
                r ||
                (null == a || a(e),
                null == c || c(e),
                e.defaultPrevented || null == s || s());
            }, g),
            D = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = tP(e),
                n = (0, B.useRef)(!1);
              return (
                (0, B.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !n.current &&
                      tT(
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
            }, g);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = tP(e);
              (0, B.useEffect)(() => {
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
                (null == o || o(e),
                !e.defaultPrevented && s && (e.preventDefault(), s()));
            }, g),
            (0, B.useEffect)(() => {
              if (u)
                return (
                  i &&
                    (0 === f.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = g.body.style.pointerEvents),
                      (g.body.style.pointerEvents = "none")),
                    f.layersWithOutsidePointerEventsDisabled.add(u)),
                  f.layers.add(u),
                  tM(),
                  () => {
                    i &&
                      1 === f.layersWithOutsidePointerEventsDisabled.size &&
                      (g.body.style.pointerEvents = n);
                  }
                );
            }, [u, g, i, f]),
            (0, B.useEffect)(
              () => () => {
                u &&
                  (f.layers.delete(u),
                  f.layersWithOutsidePointerEventsDisabled.delete(u),
                  tM());
              },
              [u, f]
            ),
            (0, B.useEffect)(() => {
              let e = () => h({});
              return (
                document.addEventListener(tO, e),
                () => document.removeEventListener(tO, e)
              );
            }, []),
            (0, B.createElement)(
              tR.div,
              tB({}, d, {
                ref: m,
                style: {
                  pointerEvents: x ? (w ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: tw(e.onFocusCapture, D.onFocusCapture),
                onBlurCapture: tw(e.onBlurCapture, D.onBlurCapture),
                onPointerDownCapture: tw(
                  e.onPointerDownCapture,
                  A.onPointerDownCapture
                ),
              })
            )
          );
        });
      function tM() {
        let e = new CustomEvent(tO);
        document.dispatchEvent(e);
      }
      function tT(e, t, r, { discrete: n }) {
        let i = r.originalEvent.target,
          o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        (t && i.addEventListener(e, t, { once: !0 }), n)
          ? i && (0, tk.flushSync)(() => i.dispatchEvent(o))
          : i.dispatchEvent(o);
      }
      let tL = 0;
      function t_() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      let tj = "focusScope.autoFocusOnMount",
        tW = "focusScope.autoFocusOnUnmount",
        tV = { bubbles: !1, cancelable: !0 },
        t$ = (0, B.forwardRef)((e, t) => {
          let {
              loop: r = !1,
              trapped: n = !1,
              onMountAutoFocus: i,
              onUnmountAutoFocus: o,
              ...a
            } = e,
            [l, c] = (0, B.useState)(null),
            s = tP(i),
            d = tP(o),
            f = (0, B.useRef)(null),
            u = tD(t, (e) => c(e)),
            p = (0, B.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, B.useEffect)(() => {
            if (n) {
              function e(e) {
                if (p.paused || !l) return;
                let t = e.target;
                l.contains(t) ? (f.current = t) : tZ(f.current, { select: !0 });
              }
              function t(e) {
                if (p.paused || !l) return;
                let t = e.relatedTarget;
                null === t || l.contains(t) || tZ(f.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let r = new MutationObserver(function (e) {
                let t = document.activeElement;
                for (let r of e)
                  r.removedNodes.length > 0 &&
                    !(null != l && l.contains(t)) &&
                    tZ(l);
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
          }, [n, l, p.paused]),
            (0, B.useEffect)(() => {
              if (l) {
                tq.add(p);
                let e = document.activeElement,
                  t = l.contains(e);
                if (!t) {
                  let t = new CustomEvent(tj, tV);
                  l.addEventListener(tj, s),
                    l.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let r = document.activeElement;
                        for (let n of e)
                          if (
                            (tZ(n, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        tU(l).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && tZ(l));
                }
                return () => {
                  l.removeEventListener(tj, s),
                    setTimeout(() => {
                      let t = new CustomEvent(tW, tV);
                      l.addEventListener(tW, d),
                        l.dispatchEvent(t),
                        t.defaultPrevented ||
                          tZ(null != e ? e : document.body, { select: !0 }),
                        l.removeEventListener(tW, d),
                        tq.remove(p);
                    }, 0);
                };
              }
            }, [l, s, d, p]);
          let g = (0, B.useCallback)(
            (e) => {
              if ((!r && !n) || p.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                i = document.activeElement;
              if (t && i) {
                let t = e.currentTarget,
                  [n, o] = (function (e) {
                    let t = tU(e),
                      r = tG(t, e),
                      n = tG(t.reverse(), e);
                    return [r, n];
                  })(t),
                  a = n && o;
                a
                  ? e.shiftKey || i !== o
                    ? e.shiftKey &&
                      i === n &&
                      (e.preventDefault(), r && tZ(o, { select: !0 }))
                    : (e.preventDefault(), r && tZ(n, { select: !0 }))
                  : i === t && e.preventDefault();
              }
            },
            [r, n, p.paused]
          );
          return (0, B.createElement)(
            tR.div,
            tB({ tabIndex: -1 }, a, { ref: u, onKeyDown: g })
          );
        });
      function tU(e) {
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
      function tG(e, t) {
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
      function tZ(e, { select: t = !1 } = {}) {
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
      let tq =
        ((i = []),
        {
          add(e) {
            let t = i[0];
            e !== t && (null == t || t.pause()), (i = tY(i, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (i = tY(i, e))[0]) || void 0 === t || t.resume();
          },
        });
      function tY(e, t) {
        let r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r;
      }
      let tX = (null == globalThis ? void 0 : globalThis.document)
          ? B.useLayoutEffect
          : () => {},
        tK = w["useId".toString()] || (() => void 0),
        tJ = 0;
      function tQ(e) {
        return e.split("-")[1];
      }
      function t0(e) {
        return "y" === e ? "height" : "width";
      }
      function t1(e) {
        return e.split("-")[0];
      }
      function t2(e) {
        return ["top", "bottom"].includes(t1(e)) ? "x" : "y";
      }
      function t5(e, t, r) {
        let n,
          { reference: i, floating: o } = e,
          a = i.x + i.width / 2 - o.width / 2,
          l = i.y + i.height / 2 - o.height / 2,
          c = t2(t),
          s = t0(c),
          d = i[s] / 2 - o[s] / 2,
          f = "x" === c;
        switch (t1(t)) {
          case "top":
            n = { x: a, y: i.y - o.height };
            break;
          case "bottom":
            n = { x: a, y: i.y + i.height };
            break;
          case "right":
            n = { x: i.x + i.width, y: l };
            break;
          case "left":
            n = { x: i.x - o.width, y: l };
            break;
          default:
            n = { x: i.x, y: i.y };
        }
        switch (tQ(t)) {
          case "start":
            n[c] -= d * (r && f ? -1 : 1);
            break;
          case "end":
            n[c] += d * (r && f ? -1 : 1);
        }
        return n;
      }
      let t8 = async (e, t, r) => {
        let {
            placement: n = "bottom",
            strategy: i = "absolute",
            middleware: o = [],
            platform: a,
          } = r,
          l = o.filter(Boolean),
          c = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          s = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: d, y: f } = t5(s, n, c),
          u = n,
          p = {},
          g = 0;
        for (let r = 0; r < l.length; r++) {
          let { name: o, fn: h } = l[r],
            {
              x: m,
              y: y,
              data: v,
              reset: b,
            } = await h({
              x: d,
              y: f,
              initialPlacement: n,
              placement: u,
              strategy: i,
              middlewareData: p,
              rects: s,
              platform: a,
              elements: { reference: e, floating: t },
            });
          (d = null != m ? m : d),
            (f = null != y ? y : f),
            (p = { ...p, [o]: { ...p[o], ...v } }),
            b &&
              g <= 50 &&
              (g++,
              "object" == typeof b &&
                (b.placement && (u = b.placement),
                b.rects &&
                  (s =
                    !0 === b.rects
                      ? await a.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : b.rects),
                ({ x: d, y: f } = t5(s, u, c))),
              (r = -1));
        }
        return { x: d, y: f, placement: u, strategy: i, middlewareData: p };
      };
      function t4(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function t3(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function t7(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      async function t6(e, t) {
        var r;
        void 0 === t && (t = {});
        let { x: n, y: i, platform: o, rects: a, elements: l, strategy: c } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: f = "floating",
            altBoundary: u = !1,
            padding: p = 0,
          } = t4(t, e),
          g = t3(p),
          h = l[u ? ("floating" === f ? "reference" : "floating") : f],
          m = t7(
            await o.getClippingRect({
              element:
                null ==
                  (r = await (null == o.isElement ? void 0 : o.isElement(h))) ||
                r
                  ? h
                  : h.contextElement ||
                    (await (null == o.getDocumentElement
                      ? void 0
                      : o.getDocumentElement(l.floating))),
              boundary: s,
              rootBoundary: d,
              strategy: c,
            })
          ),
          y = "floating" === f ? { ...a.floating, x: n, y: i } : a.reference,
          v = await (null == o.getOffsetParent
            ? void 0
            : o.getOffsetParent(l.floating)),
          b = ((await (null == o.isElement ? void 0 : o.isElement(v))) &&
            (await (null == o.getScale ? void 0 : o.getScale(v)))) || {
            x: 1,
            y: 1,
          },
          S = t7(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: y,
                  offsetParent: v,
                  strategy: c,
                })
              : y
          );
        return {
          top: (m.top - S.top + g.top) / b.y,
          bottom: (S.bottom - m.bottom + g.bottom) / b.y,
          left: (m.left - S.left + g.left) / b.x,
          right: (S.right - m.right + g.right) / b.x,
        };
      }
      let t9 = Math.min,
        re = Math.max,
        rt = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: r,
                y: n,
                placement: i,
                rects: o,
                platform: a,
                elements: l,
              } = t,
              { element: c, padding: s = 0 } = t4(e, t) || {};
            if (null == c) return {};
            let d = t3(s),
              f = { x: r, y: n },
              u = t2(i),
              p = t0(u),
              g = await a.getDimensions(c),
              h = "y" === u,
              m = h ? "clientHeight" : "clientWidth",
              y = o.reference[p] + o.reference[u] - f[u] - o.floating[p],
              v = f[u] - o.reference[u],
              b = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(c)),
              S = b ? b[m] : 0;
            (S && (await (null == a.isElement ? void 0 : a.isElement(b)))) ||
              (S = l.floating[m] || o.floating[p]);
            let x = S / 2 - g[p] / 2 - 1,
              B = t9(d[h ? "top" : "left"], x),
              w = t9(d[h ? "bottom" : "right"], x),
              A = S - g[p] - w,
              D = S / 2 - g[p] / 2 + (y / 2 - v / 2),
              F = re(B, t9(D, A)),
              k =
                null != tQ(i) &&
                D != F &&
                o.reference[p] / 2 - (D < B ? B : w) - g[p] / 2 < 0
                  ? D < B
                    ? B - D
                    : A - D
                  : 0;
            return { [u]: f[u] - k, data: { [u]: F, centerOffset: D - F + k } };
          },
        }),
        rr = ["top", "right", "bottom", "left"],
        rn =
          (rr.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
          { left: "right", right: "left", bottom: "top", top: "bottom" });
      function ri(e) {
        return e.replace(/left|right|bottom|top/g, (e) => rn[e]);
      }
      let ro = { start: "end", end: "start" };
      function ra(e) {
        return e.replace(/start|end/g, (e) => ro[e]);
      }
      function rl(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function rc(e) {
        return rr.some((t) => e[t] >= 0);
      }
      function rs(e) {
        return "x" === e ? "y" : "x";
      }
      function rd(e) {
        var t;
        return (
          (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        );
      }
      function rf(e) {
        return rd(e).getComputedStyle(e);
      }
      function ru(e) {
        return e instanceof rd(e).Node;
      }
      function rp(e) {
        return ru(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function rg(e) {
        return e instanceof rd(e).HTMLElement;
      }
      function rh(e) {
        return e instanceof rd(e).Element;
      }
      function rm(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof rd(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      function ry(e) {
        let { overflow: t, overflowX: r, overflowY: n, display: i } = rf(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
          !["inline", "contents"].includes(i)
        );
      }
      function rv(e) {
        let t = rb(),
          r = rf(e);
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
      function rb() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function rS(e) {
        return ["html", "body", "#document"].includes(rp(e));
      }
      let rx = Math.min,
        rB = Math.max,
        rw = Math.round,
        rA = Math.floor,
        rD = (e) => ({ x: e, y: e });
      function rF(e) {
        let t = rf(e),
          r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0,
          i = rg(e),
          o = i ? e.offsetWidth : r,
          a = i ? e.offsetHeight : n,
          l = rw(r) !== o || rw(n) !== a;
        return l && ((r = o), (n = a)), { width: r, height: n, $: l };
      }
      function rk(e) {
        return rh(e) ? e : e.contextElement;
      }
      function rH(e) {
        let t = rk(e);
        if (!rg(t)) return rD(1);
        let r = t.getBoundingClientRect(),
          { width: n, height: i, $: o } = rF(t),
          a = (o ? rw(r.width) : r.width) / n,
          l = (o ? rw(r.height) : r.height) / i;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: a, y: l }
        );
      }
      let rE = rD(0);
      function rC(e, t, r) {
        var n, i;
        if ((void 0 === t && (t = !0), !rb())) return rE;
        let o = e ? rd(e) : window;
        return !r || (t && r !== o)
          ? rE
          : {
              x: (null == (n = o.visualViewport) ? void 0 : n.offsetLeft) || 0,
              y: (null == (i = o.visualViewport) ? void 0 : i.offsetTop) || 0,
            };
      }
      function rI(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        let i = e.getBoundingClientRect(),
          o = rk(e),
          a = rD(1);
        t && (n ? rh(n) && (a = rH(n)) : (a = rH(e)));
        let l = rC(o, r, n),
          c = (i.left + l.x) / a.x,
          s = (i.top + l.y) / a.y,
          d = i.width / a.x,
          f = i.height / a.y;
        if (o) {
          let e = rd(o),
            t = n && rh(n) ? rd(n) : n,
            r = e.frameElement;
          for (; r && n && t !== e; ) {
            let e = rH(r),
              t = r.getBoundingClientRect(),
              n = getComputedStyle(r),
              i = t.left + (r.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              o = t.top + (r.clientTop + parseFloat(n.paddingTop)) * e.y;
            (c *= e.x),
              (s *= e.y),
              (d *= e.x),
              (f *= e.y),
              (c += i),
              (s += o),
              (r = rd(r).frameElement);
          }
        }
        return t7({ width: d, height: f, x: c, y: s });
      }
      function rR(e) {
        return ((ru(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function rP(e) {
        return rh(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function rO(e) {
        return rI(rR(e)).left + rP(e).scrollLeft;
      }
      function rN(e) {
        if ("html" === rp(e)) return e;
        let t = e.assignedSlot || e.parentNode || (rm(e) && e.host) || rR(e);
        return rm(t) ? t.host : t;
      }
      function rz(e, t) {
        var r;
        void 0 === t && (t = []);
        let n = (function e(t) {
            let r = rN(t);
            return rS(r)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : rg(r) && ry(r)
              ? r
              : e(r);
          })(e),
          i = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          o = rd(n);
        return i
          ? t.concat(o, o.visualViewport || [], ry(n) ? n : [])
          : t.concat(n, rz(n));
      }
      function rM(e, t, r) {
        let n;
        if ("viewport" === t)
          n = (function (e, t) {
            let r = rd(e),
              n = rR(e),
              i = r.visualViewport,
              o = n.clientWidth,
              a = n.clientHeight,
              l = 0,
              c = 0;
            if (i) {
              (o = i.width), (a = i.height);
              let e = rb();
              (!e || (e && "fixed" === t)) &&
                ((l = i.offsetLeft), (c = i.offsetTop));
            }
            return { width: o, height: a, x: l, y: c };
          })(e, r);
        else if ("document" === t)
          n = (function (e) {
            let t = rR(e),
              r = rP(e),
              n = e.ownerDocument.body,
              i = rB(
                t.scrollWidth,
                t.clientWidth,
                n.scrollWidth,
                n.clientWidth
              ),
              o = rB(
                t.scrollHeight,
                t.clientHeight,
                n.scrollHeight,
                n.clientHeight
              ),
              a = -r.scrollLeft + rO(e),
              l = -r.scrollTop;
            return (
              "rtl" === rf(n).direction &&
                (a += rB(t.clientWidth, n.clientWidth) - i),
              { width: i, height: o, x: a, y: l }
            );
          })(rR(e));
        else if (rh(t))
          n = (function (e, t) {
            let r = rI(e, !0, "fixed" === t),
              n = r.top + e.clientTop,
              i = r.left + e.clientLeft,
              o = rg(e) ? rH(e) : rD(1);
            return {
              width: e.clientWidth * o.x,
              height: e.clientHeight * o.y,
              x: i * o.x,
              y: n * o.y,
            };
          })(t, r);
        else {
          let r = rC(e);
          n = { ...t, x: t.x - r.x, y: t.y - r.y };
        }
        return t7(n);
      }
      function rT(e, t) {
        return rg(e) && "fixed" !== rf(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function rL(e, t) {
        let r = rd(e);
        if (!rg(e)) return r;
        let n = rT(e, t);
        for (
          ;
          n &&
          ["table", "td", "th"].includes(rp(n)) &&
          "static" === rf(n).position;

        )
          n = rT(n, t);
        return n &&
          ("html" === rp(n) ||
            ("body" === rp(n) && "static" === rf(n).position && !rv(n)))
          ? r
          : n ||
              (function (e) {
                let t = rN(e);
                for (; rg(t) && !rS(t); ) {
                  if (rv(t)) return t;
                  t = rN(t);
                }
                return null;
              })(e) ||
              r;
      }
      let r_ = {
        getClippingRect: function (e) {
          let { element: t, boundary: r, rootBoundary: n, strategy: i } = e,
            o =
              "clippingAncestors" === r
                ? (function (e, t) {
                    let r = t.get(e);
                    if (r) return r;
                    let n = rz(e).filter((e) => rh(e) && "body" !== rp(e)),
                      i = null,
                      o = "fixed" === rf(e).position,
                      a = o ? rN(e) : e;
                    for (; rh(a) && !rS(a); ) {
                      let t = rf(a),
                        r = rv(a);
                      r || "fixed" !== t.position || (i = null),
                        (
                          o
                            ? !r && !i
                            : (!r &&
                                "static" === t.position &&
                                i &&
                                ["absolute", "fixed"].includes(i.position)) ||
                              (ry(a) &&
                                !r &&
                                (function e(t, r) {
                                  let n = rN(t);
                                  return (
                                    !(n === r || !rh(n) || rS(n)) &&
                                    ("fixed" === rf(n).position || e(n, r))
                                  );
                                })(e, a))
                        )
                          ? (n = n.filter((e) => e !== a))
                          : (i = t),
                        (a = rN(a));
                    }
                    return t.set(e, n), n;
                  })(t, this._c)
                : [].concat(r),
            a = [...o, n],
            l = a[0],
            c = a.reduce((e, r) => {
              let n = rM(t, r, i);
              return (
                (e.top = rB(n.top, e.top)),
                (e.right = rx(n.right, e.right)),
                (e.bottom = rx(n.bottom, e.bottom)),
                (e.left = rB(n.left, e.left)),
                e
              );
            }, rM(t, l, i));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top,
          };
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { rect: t, offsetParent: r, strategy: n } = e,
            i = rg(r),
            o = rR(r);
          if (r === o) return t;
          let a = { scrollLeft: 0, scrollTop: 0 },
            l = rD(1),
            c = rD(0);
          if (
            (i || (!i && "fixed" !== n)) &&
            (("body" !== rp(r) || ry(o)) && (a = rP(r)), rg(r))
          ) {
            let e = rI(r);
            (l = rH(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop);
          }
          return {
            width: t.width * l.x,
            height: t.height * l.y,
            x: t.x * l.x - a.scrollLeft * l.x + c.x,
            y: t.y * l.y - a.scrollTop * l.y + c.y,
          };
        },
        isElement: rh,
        getDimensions: function (e) {
          return rF(e);
        },
        getOffsetParent: rL,
        getDocumentElement: rR,
        getScale: rH,
        async getElementRects(e) {
          let { reference: t, floating: r, strategy: n } = e,
            i = this.getOffsetParent || rL,
            o = this.getDimensions;
          return {
            reference: (function (e, t, r) {
              let n = rg(t),
                i = rR(t),
                o = "fixed" === r,
                a = rI(e, !0, o, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                c = rD(0);
              if (n || (!n && !o)) {
                if ((("body" !== rp(t) || ry(i)) && (l = rP(t)), rg(t))) {
                  let e = rI(t, !0, o, t);
                  (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
                } else i && (c.x = rO(i));
              }
              return {
                x: a.left + l.scrollLeft - c.x,
                y: a.top + l.scrollTop - c.y,
                width: a.width,
                height: a.height,
              };
            })(t, await i(r), n),
            floating: { x: 0, y: 0, ...(await o(r)) },
          };
        },
        getClientRects: (e) => Array.from(e.getClientRects()),
        isRTL: (e) => "rtl" === rf(e).direction,
      };
      function rj(e, t, r, n) {
        void 0 === n && (n = {});
        let {
            ancestorScroll: i = !0,
            ancestorResize: o = !0,
            elementResize: a = !0,
            layoutShift: l = "function" == typeof IntersectionObserver,
            animationFrame: c = !1,
          } = n,
          s = rk(e),
          d = i || o ? [...(s ? rz(s) : []), ...rz(t)] : [];
        d.forEach((e) => {
          i && e.addEventListener("scroll", r, { passive: !0 }),
            o && e.addEventListener("resize", r);
        });
        let f =
            s && l
              ? (function (e, t) {
                  let r,
                    n = null,
                    i = rR(e);
                  function o() {
                    clearTimeout(r), n && n.disconnect(), (n = null);
                  }
                  return (
                    (function a(l, c) {
                      void 0 === l && (l = !1), void 0 === c && (c = 1), o();
                      let {
                        left: s,
                        top: d,
                        width: f,
                        height: u,
                      } = e.getBoundingClientRect();
                      if ((l || t(), !f || !u)) return;
                      let p = rA(d),
                        g = rA(i.clientWidth - (s + f)),
                        h = rA(i.clientHeight - (d + u)),
                        m = rA(s),
                        y = !0;
                      (n = new IntersectionObserver(
                        (e) => {
                          let t = e[0].intersectionRatio;
                          if (t !== c) {
                            if (!y) return a();
                            0 === t
                              ? (r = setTimeout(() => {
                                  a(!1, 1e-7);
                                }, 100))
                              : a(!1, t);
                          }
                          y = !1;
                        },
                        {
                          rootMargin:
                            -p + "px " + -g + "px " + -h + "px " + -m + "px",
                          threshold: c,
                        }
                      )).observe(e);
                    })(!0),
                    o
                  );
                })(s, r)
              : null,
          u,
          p = null;
        a &&
          ((p = new ResizeObserver(r)), s && !c && p.observe(s), p.observe(t));
        let g = c ? rI(e) : null;
        return (
          c &&
            (function t() {
              let n = rI(e);
              g &&
                (n.x !== g.x ||
                  n.y !== g.y ||
                  n.width !== g.width ||
                  n.height !== g.height) &&
                r(),
                (g = n),
                (u = requestAnimationFrame(t));
            })(),
          r(),
          () => {
            d.forEach((e) => {
              i && e.removeEventListener("scroll", r),
                o && e.removeEventListener("resize", r);
            }),
              f && f(),
              p && p.disconnect(),
              (p = null),
              c && cancelAnimationFrame(u);
          }
        );
      }
      let rW = (e, t, r) => {
          let n = new Map(),
            i = { platform: r_, ...r },
            o = { ...i.platform, _c: n };
          return t8(e, t, { ...i, platform: o });
        },
        rV = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: r, padding: n } = "function" == typeof e ? e(t) : e;
            if (r && {}.hasOwnProperty.call(r, "current")) {
              if (null != r.current)
                return rt({ element: r.current, padding: n }).fn(t);
            } else if (r) return rt({ element: r, padding: n }).fn(t);
            return {};
          },
        });
      var r$ = "undefined" != typeof document ? B.useLayoutEffect : B.useEffect;
      function rU(e, t) {
        let r, n, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) != t.length) return !1;
            for (n = r; 0 != n--; ) if (!rU(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (i = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(t, i[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = i[n];
            if (("_owner" !== r || !e.$$typeof) && !rU(e[r], t[r])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function rG(e) {
        if ("undefined" == typeof window) return 1;
        let t = e.ownerDocument.defaultView || window;
        return t.devicePixelRatio || 1;
      }
      function rZ(e, t) {
        let r = rG(e);
        return Math.round(t * r) / r;
      }
      function rq(e) {
        let t = B.useRef(e);
        return (
          r$(() => {
            t.current = e;
          }),
          t
        );
      }
      let rY = (0, B.forwardRef)((e, t) => {
          let { children: r, width: n = 10, height: i = 5, ...o } = e;
          return (0, B.createElement)(
            tR.svg,
            tB({}, o, {
              ref: t,
              width: n,
              height: i,
              viewBox: "0 0 30 10",
              preserveAspectRatio: "none",
            }),
            e.asChild
              ? r
              : (0, B.createElement)("polygon", { points: "0,0 30,0 15,10" })
          );
        }),
        rX = "Popper",
        [rK, rJ] = tF(rX),
        [rQ, r0] = rK(rX),
        r1 = (0, B.forwardRef)((e, t) => {
          let { __scopePopper: r, virtualRef: n, ...i } = e,
            o = r0("PopperAnchor", r),
            a = (0, B.useRef)(null),
            l = tD(t, a);
          return (
            (0, B.useEffect)(() => {
              o.onAnchorChange((null == n ? void 0 : n.current) || a.current);
            }),
            n ? null : (0, B.createElement)(tR.div, tB({}, i, { ref: l }))
          );
        }),
        r2 = "PopperContent",
        [r5, r8] = rK(r2),
        r4 = (0, B.forwardRef)((e, t) => {
          var r, n, i, o, a, l, c, s, d, f, u, p, g, h;
          let {
              __scopePopper: m,
              side: y = "bottom",
              sideOffset: v = 0,
              align: b = "center",
              alignOffset: S = 0,
              arrowPadding: x = 0,
              collisionBoundary: w = [],
              collisionPadding: A = 0,
              sticky: D = "partial",
              hideWhenDetached: F = !1,
              avoidCollisions: k = !0,
              onPlaced: H,
              ...E
            } = e,
            C = r0(r2, m),
            [I, R] = (0, B.useState)(null),
            P = tD(t, (e) => R(e)),
            [O, N] = (0, B.useState)(null),
            z = (function (e) {
              let [t, r] = (0, B.useState)(void 0);
              return (
                tX(() => {
                  if (e) {
                    r({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let n, i;
                      if (!Array.isArray(t) || !t.length) return;
                      let o = t[0];
                      if ("borderBoxSize" in o) {
                        let e = o.borderBoxSize,
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
            })(O),
            M =
              null !== (r = null == z ? void 0 : z.width) && void 0 !== r
                ? r
                : 0,
            T =
              null !== (n = null == z ? void 0 : z.height) && void 0 !== n
                ? n
                : 0,
            L =
              "number" == typeof A
                ? A
                : { top: 0, right: 0, bottom: 0, left: 0, ...A },
            _ = Array.isArray(w) ? w : [w],
            j = _.length > 0,
            W = { padding: L, boundary: _.filter(r7), altBoundary: j },
            {
              refs: V,
              floatingStyles: $,
              placement: U,
              isPositioned: G,
              middlewareData: Z,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: r = "absolute",
                  middleware: n = [],
                  platform: i,
                  elements: { reference: o, floating: a } = {},
                  transform: l = !0,
                  whileElementsMounted: c,
                  open: s,
                } = e,
                [d, f] = B.useState({
                  x: 0,
                  y: 0,
                  strategy: r,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [u, p] = B.useState(n);
              rU(u, n) || p(n);
              let [g, h] = B.useState(null),
                [m, y] = B.useState(null),
                v = B.useCallback(
                  (e) => {
                    e != w.current && ((w.current = e), h(e));
                  },
                  [h]
                ),
                b = B.useCallback(
                  (e) => {
                    e !== A.current && ((A.current = e), y(e));
                  },
                  [y]
                ),
                S = o || g,
                x = a || m,
                w = B.useRef(null),
                A = B.useRef(null),
                D = B.useRef(d),
                F = rq(c),
                k = rq(i),
                H = B.useCallback(() => {
                  if (!w.current || !A.current) return;
                  let e = { placement: t, strategy: r, middleware: u };
                  k.current && (e.platform = k.current),
                    rW(w.current, A.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      E.current &&
                        !rU(D.current, t) &&
                        ((D.current = t),
                        tk.flushSync(() => {
                          f(t);
                        }));
                    });
                }, [u, t, r, k]);
              r$(() => {
                !1 === s &&
                  D.current.isPositioned &&
                  ((D.current.isPositioned = !1),
                  f((e) => ({ ...e, isPositioned: !1 })));
              }, [s]);
              let E = B.useRef(!1);
              r$(
                () => (
                  (E.current = !0),
                  () => {
                    E.current = !1;
                  }
                ),
                []
              ),
                r$(() => {
                  if ((S && (w.current = S), x && (A.current = x), S && x)) {
                    if (F.current) return F.current(S, x, H);
                    H();
                  }
                }, [S, x, H, F]);
              let C = B.useMemo(
                  () => ({
                    reference: w,
                    floating: A,
                    setReference: v,
                    setFloating: b,
                  }),
                  [v, b]
                ),
                I = B.useMemo(() => ({ reference: S, floating: x }), [S, x]),
                R = B.useMemo(() => {
                  let e = { position: r, left: 0, top: 0 };
                  if (!I.floating) return e;
                  let t = rZ(I.floating, d.x),
                    n = rZ(I.floating, d.y);
                  return l
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + n + "px)",
                        ...(rG(I.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: r, left: t, top: n };
                }, [r, l, I.floating, d.x, d.y]);
              return B.useMemo(
                () => ({
                  ...d,
                  update: H,
                  refs: C,
                  elements: I,
                  floatingStyles: R,
                }),
                [d, H, C, I, R]
              );
            })({
              strategy: "fixed",
              placement: y + ("center" !== b ? "-" + b : ""),
              whileElementsMounted: rj,
              elements: { reference: C.anchor },
              middleware: [
                {
                  name: "offset",
                  options: (d = { mainAxis: v + T, alignmentAxis: S }),
                  async fn(e) {
                    let { x: t, y: r } = e,
                      n = await (async function (e, t) {
                        let { placement: r, platform: n, elements: i } = e,
                          o = await (null == n.isRTL
                            ? void 0
                            : n.isRTL(i.floating)),
                          a = t1(r),
                          l = tQ(r),
                          c = "x" === t2(r),
                          s = ["left", "top"].includes(a) ? -1 : 1,
                          d = o && c ? -1 : 1,
                          f = t4(t, e),
                          {
                            mainAxis: u,
                            crossAxis: p,
                            alignmentAxis: g,
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
                            "number" == typeof g &&
                            (p = "end" === l ? -1 * g : g),
                          c ? { x: p * d, y: u * s } : { x: u * s, y: p * d }
                        );
                      })(e, d);
                    return { x: t + n.x, y: r + n.y, data: n };
                  },
                },
                k && {
                  name: "shift",
                  options: (u = {
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === D
                        ? (void 0 === f && (f = {}),
                          {
                            options: f,
                            fn(e) {
                              let {
                                  x: t,
                                  y: r,
                                  placement: n,
                                  rects: i,
                                  middlewareData: o,
                                } = e,
                                {
                                  offset: a = 0,
                                  mainAxis: l = !0,
                                  crossAxis: c = !0,
                                } = t4(f, e),
                                s = { x: t, y: r },
                                d = t2(n),
                                u = rs(d),
                                p = s[d],
                                g = s[u],
                                h = t4(a, e),
                                m =
                                  "number" == typeof h
                                    ? { mainAxis: h, crossAxis: 0 }
                                    : { mainAxis: 0, crossAxis: 0, ...h };
                              if (l) {
                                let e = "y" === d ? "height" : "width",
                                  t =
                                    i.reference[d] - i.floating[e] + m.mainAxis,
                                  r =
                                    i.reference[d] +
                                    i.reference[e] -
                                    m.mainAxis;
                                p < t ? (p = t) : p > r && (p = r);
                              }
                              if (c) {
                                var y, v;
                                let e = "y" === d ? "width" : "height",
                                  t = ["top", "left"].includes(t1(n)),
                                  r =
                                    i.reference[u] -
                                    i.floating[e] +
                                    ((t &&
                                      (null == (y = o.offset)
                                        ? void 0
                                        : y[u])) ||
                                      0) +
                                    (t ? 0 : m.crossAxis),
                                  a =
                                    i.reference[u] +
                                    i.reference[e] +
                                    (t
                                      ? 0
                                      : (null == (v = o.offset)
                                          ? void 0
                                          : v[u]) || 0) -
                                    (t ? m.crossAxis : 0);
                                g < r ? (g = r) : g > a && (g = a);
                              }
                              return { [d]: p, [u]: g };
                            },
                          })
                        : void 0,
                    ...W,
                  }),
                  async fn(e) {
                    let { x: t, y: r, placement: n } = e,
                      {
                        mainAxis: i = !0,
                        crossAxis: o = !1,
                        limiter: a = {
                          fn: (e) => {
                            let { x: t, y: r } = e;
                            return { x: t, y: r };
                          },
                        },
                        ...l
                      } = t4(u, e),
                      c = { x: t, y: r },
                      s = await t6(e, l),
                      d = t2(t1(n)),
                      f = rs(d),
                      p = c[d],
                      g = c[f];
                    if (i) {
                      let e = "y" === d ? "bottom" : "right";
                      p = re(
                        p + s["y" === d ? "top" : "left"],
                        t9(p, p - s[e])
                      );
                    }
                    o &&
                      (g = re(
                        g + s["y" === f ? "top" : "left"],
                        t9(g, g - s["y" === f ? "bottom" : "right"])
                      ));
                    let h = a.fn({ ...e, [d]: p, [f]: g });
                    return { ...h, data: { x: h.x - t, y: h.y - r } };
                  },
                },
                k && {
                  name: "flip",
                  options: (p = { ...W }),
                  async fn(e) {
                    var t, r, n, i;
                    let {
                        placement: o,
                        middlewareData: a,
                        rects: l,
                        initialPlacement: c,
                        platform: s,
                        elements: d,
                      } = e,
                      {
                        mainAxis: f = !0,
                        crossAxis: u = !0,
                        fallbackPlacements: g,
                        fallbackStrategy: h = "bestFit",
                        fallbackAxisSideDirection: m = "none",
                        flipAlignment: y = !0,
                        ...v
                      } = t4(p, e),
                      b = t1(o),
                      S = t1(c) === c,
                      x = await (null == s.isRTL
                        ? void 0
                        : s.isRTL(d.floating)),
                      B =
                        g ||
                        (S || !y
                          ? [ri(c)]
                          : (function (e) {
                              let t = ri(e);
                              return [ra(e), t, ra(t)];
                            })(c));
                    g ||
                      "none" === m ||
                      B.push(
                        ...(function (e, t, r, n) {
                          let i = tQ(e),
                            o = (function (e, t, r) {
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
                            })(t1(e), "start" === r, n);
                          return (
                            i &&
                              ((o = o.map((e) => e + "-" + i)),
                              t && (o = o.concat(o.map(ra)))),
                            o
                          );
                        })(c, y, m, x)
                      );
                    let w = [c, ...B],
                      A = await t6(e, v),
                      D = [],
                      F = (null == (t = a.flip) ? void 0 : t.overflows) || [];
                    if ((f && D.push(A[b]), u)) {
                      let { main: e, cross: t } = (function (e, t, r) {
                        void 0 === r && (r = !1);
                        let n = tQ(e),
                          i = t2(e),
                          o = t0(i),
                          a =
                            "x" === i
                              ? n === (r ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === n
                              ? "bottom"
                              : "top";
                        return (
                          t.reference[o] > t.floating[o] && (a = ri(a)),
                          { main: a, cross: ri(a) }
                        );
                      })(o, l, x);
                      D.push(A[e], A[t]);
                    }
                    if (
                      ((F = [...F, { placement: o, overflows: D }]),
                      !D.every((e) => e <= 0))
                    ) {
                      let e =
                          ((null == (r = a.flip) ? void 0 : r.index) || 0) + 1,
                        t = w[e];
                      if (t)
                        return {
                          data: { index: e, overflows: F },
                          reset: { placement: t },
                        };
                      let l =
                        null ==
                        (n = F.filter((e) => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1]
                        )[0])
                          ? void 0
                          : n.placement;
                      if (!l)
                        switch (h) {
                          case "bestFit": {
                            let e =
                              null ==
                              (i = F.map((e) => [
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
                      if (o !== l) return { reset: { placement: l } };
                    }
                    return {};
                  },
                },
                {
                  name: "size",
                  options: (g = {
                    ...W,
                    apply: ({
                      elements: e,
                      rects: t,
                      availableWidth: r,
                      availableHeight: n,
                    }) => {
                      let { width: i, height: o } = t.reference,
                        a = e.floating.style;
                      a.setProperty("--radix-popper-available-width", `${r}px`),
                        a.setProperty(
                          "--radix-popper-available-height",
                          `${n}px`
                        ),
                        a.setProperty("--radix-popper-anchor-width", `${i}px`),
                        a.setProperty("--radix-popper-anchor-height", `${o}px`);
                    },
                  }),
                  async fn(e) {
                    let t, r;
                    let {
                        placement: n,
                        rects: i,
                        platform: o,
                        elements: a,
                      } = e,
                      { apply: l = () => {}, ...c } = t4(g, e),
                      s = await t6(e, c),
                      d = t1(n),
                      f = tQ(n),
                      u = "x" === t2(n),
                      { width: p, height: h } = i.floating;
                    "top" === d || "bottom" === d
                      ? ((t = d),
                        (r =
                          f ===
                          ((await (null == o.isRTL
                            ? void 0
                            : o.isRTL(a.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((r = d), (t = "end" === f ? "top" : "bottom"));
                    let m = h - s[t],
                      y = p - s[r],
                      v = !e.middlewareData.shift,
                      b = m,
                      S = y;
                    if (u) {
                      let e = p - s.left - s.right;
                      S = f || v ? t9(y, e) : e;
                    } else {
                      let e = h - s.top - s.bottom;
                      b = f || v ? t9(m, e) : e;
                    }
                    if (v && !f) {
                      let e = re(s.left, 0),
                        t = re(s.right, 0),
                        r = re(s.top, 0),
                        n = re(s.bottom, 0);
                      u
                        ? (S =
                            p -
                            2 *
                              (0 !== e || 0 !== t
                                ? e + t
                                : re(s.left, s.right)))
                        : (b =
                            h -
                            2 *
                              (0 !== r || 0 !== n
                                ? r + n
                                : re(s.top, s.bottom)));
                    }
                    await l({ ...e, availableWidth: S, availableHeight: b });
                    let x = await o.getDimensions(a.floating);
                    return p !== x.width || h !== x.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                O && rV({ element: O, padding: x }),
                r6({ arrowWidth: M, arrowHeight: T }),
                F && {
                  name: "hide",
                  options: (h = { strategy: "referenceHidden" }),
                  async fn(e) {
                    let { rects: t } = e,
                      { strategy: r = "referenceHidden", ...n } = t4(h, e);
                    switch (r) {
                      case "referenceHidden": {
                        let r = rl(
                          await t6(e, { ...n, elementContext: "reference" }),
                          t.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: r,
                            referenceHidden: rc(r),
                          },
                        };
                      }
                      case "escaped": {
                        let r = rl(
                          await t6(e, { ...n, altBoundary: !0 }),
                          t.floating
                        );
                        return { data: { escapedOffsets: r, escaped: rc(r) } };
                      }
                      default:
                        return {};
                    }
                  },
                },
              ],
            }),
            [q, Y] = r9(U),
            X = tP(H);
          tX(() => {
            G && (null == X || X());
          }, [G, X]);
          let K = null === (i = Z.arrow) || void 0 === i ? void 0 : i.x,
            J = null === (o = Z.arrow) || void 0 === o ? void 0 : o.y,
            Q =
              (null === (a = Z.arrow) || void 0 === a
                ? void 0
                : a.centerOffset) !== 0,
            [ee, et] = (0, B.useState)();
          return (
            tX(() => {
              I && et(window.getComputedStyle(I).zIndex);
            }, [I]),
            (0, B.createElement)(
              "div",
              {
                ref: V.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...$,
                  transform: G ? $.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: ee,
                  "--radix-popper-transform-origin": [
                    null === (l = Z.transformOrigin) || void 0 === l
                      ? void 0
                      : l.x,
                    null === (c = Z.transformOrigin) || void 0 === c
                      ? void 0
                      : c.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, B.createElement)(
                r5,
                {
                  scope: m,
                  placedSide: q,
                  onArrowChange: N,
                  arrowX: K,
                  arrowY: J,
                  shouldHideArrow: Q,
                },
                (0, B.createElement)(
                  tR.div,
                  tB({ "data-side": q, "data-align": Y }, E, {
                    ref: P,
                    style: {
                      ...E.style,
                      animation: G ? void 0 : "none",
                      opacity:
                        null !== (s = Z.hide) &&
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
        r3 = { top: "bottom", right: "left", bottom: "top", left: "right" };
      function r7(e) {
        return null !== e;
      }
      let r6 = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var r, n, i, o, a;
          let { placement: l, rects: c, middlewareData: s } = t,
            d =
              (null === (r = s.arrow) || void 0 === r
                ? void 0
                : r.centerOffset) !== 0,
            f = d ? 0 : e.arrowWidth,
            u = d ? 0 : e.arrowHeight,
            [p, g] = r9(l),
            h = { start: "0%", center: "50%", end: "100%" }[g],
            m =
              (null !==
                (n = null === (i = s.arrow) || void 0 === i ? void 0 : i.x) &&
              void 0 !== n
                ? n
                : 0) +
              f / 2,
            y =
              (null !==
                (o = null === (a = s.arrow) || void 0 === a ? void 0 : a.y) &&
              void 0 !== o
                ? o
                : 0) +
              u / 2,
            v = "",
            b = "";
          return (
            "bottom" === p
              ? ((v = d ? h : `${m}px`), (b = `${-u}px`))
              : "top" === p
              ? ((v = d ? h : `${m}px`), (b = `${c.floating.height + u}px`))
              : "right" === p
              ? ((v = `${-u}px`), (b = d ? h : `${y}px`))
              : "left" === p &&
                ((v = `${c.floating.width + u}px`), (b = d ? h : `${y}px`)),
            { data: { x: v, y: b } }
          );
        },
      });
      function r9(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r];
      }
      let ne = (e) => {
          let { __scopePopper: t, children: r } = e,
            [n, i] = (0, B.useState)(null);
          return (0, B.createElement)(
            rQ,
            { scope: t, anchor: n, onAnchorChange: i },
            r
          );
        },
        nt = (0, B.forwardRef)((e, t) => {
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
            ? tk.createPortal(
                (0, B.createElement)(tR.div, tB({}, i, { ref: t })),
                n
              )
            : null;
        }),
        nr = (e) => {
          let { present: t, children: r } = e,
            n = (function (e) {
              var t;
              let [r, n] = (0, B.useState)(),
                i = (0, B.useRef)({}),
                o = (0, B.useRef)(e),
                a = (0, B.useRef)("none"),
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
                  (0, B.useReducer)((e, r) => {
                    let n = t[e][r];
                    return null != n ? n : e;
                  }, l));
              return (
                (0, B.useEffect)(() => {
                  let e = nn(i.current);
                  a.current = "mounted" === c ? e : "none";
                }, [c]),
                tX(() => {
                  let t = i.current,
                    r = o.current,
                    n = r !== e;
                  if (n) {
                    let n = a.current,
                      i = nn(t);
                    e
                      ? s("MOUNT")
                      : "none" === i ||
                        (null == t ? void 0 : t.display) === "none"
                      ? s("UNMOUNT")
                      : r && n !== i
                      ? s("ANIMATION_OUT")
                      : s("UNMOUNT"),
                      (o.current = e);
                  }
                }, [e, s]),
                tX(() => {
                  if (r) {
                    let e = (e) => {
                        let t = nn(i.current),
                          n = t.includes(e.animationName);
                        e.target === r &&
                          n &&
                          (0, tk.flushSync)(() => s("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === r && (a.current = nn(i.current));
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
                  ref: (0, B.useCallback)((e) => {
                    e && (i.current = getComputedStyle(e)), n(e);
                  }, []),
                }
              );
            })(t),
            i =
              "function" == typeof r
                ? r({ present: n.isPresent })
                : B.Children.only(r),
            o = tD(n.ref, i.ref),
            a = "function" == typeof r;
          return a || n.isPresent ? (0, B.cloneElement)(i, { ref: o }) : null;
        };
      function nn(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      nr.displayName = "Presence";
      var ni = new WeakMap(),
        no = new WeakMap(),
        na = {},
        nl = 0,
        nc = function (e) {
          return e && (e.host || nc(e.parentNode));
        },
        ns = function (e, t, r, n) {
          var i = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var r = nc(e);
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
          na[r] || (na[r] = new WeakMap());
          var o = na[r],
            a = [],
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
                    c = (ni.get(e) || 0) + 1,
                    s = (o.get(e) || 0) + 1;
                  ni.set(e, c),
                    o.set(e, s),
                    a.push(e),
                    1 === c && i && no.set(e, !0),
                    1 === s && e.setAttribute(r, "true"),
                    i || e.setAttribute(n, "true");
                }
              });
          };
          return (
            d(t),
            l.clear(),
            nl++,
            function () {
              a.forEach(function (e) {
                var t = ni.get(e) - 1,
                  i = o.get(e) - 1;
                ni.set(e, t),
                  o.set(e, i),
                  t || (no.has(e) || e.removeAttribute(n), no.delete(e)),
                  i || e.removeAttribute(r);
              }),
                --nl ||
                  ((ni = new WeakMap()),
                  (ni = new WeakMap()),
                  (no = new WeakMap()),
                  (na = {}));
            }
          );
        },
        nd = function (e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n = Array.from(Array.isArray(e) ? e : [e]),
            i =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return i
            ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live]"))),
              ns(n, i, r, "aria-hidden"))
            : function () {
                return null;
              };
        },
        nf = function () {
          return (nf =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      function nu(e, t) {
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
      var np = "right-scroll-bar-position",
        ng = "width-before-scroll-bar",
        nh =
          (void 0 === a && (a = {}),
          void 0 === l &&
            (l = function (e) {
              return e;
            }),
          (c = []),
          (s = !1),
          ((d = {
            read: function () {
              if (s)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return c.length ? c[c.length - 1] : null;
            },
            useMedium: function (e) {
              var t = l(e, s);
              return (
                c.push(t),
                function () {
                  c = c.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (s = !0; c.length; ) {
                var t = c;
                (c = []), t.forEach(e);
              }
              c = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return c;
                },
              };
            },
            assignMedium: function (e) {
              s = !0;
              var t = [];
              if (c.length) {
                var r = c;
                (c = []), r.forEach(e), (t = c);
              }
              var n = function () {
                  var r = t;
                  (t = []), r.forEach(e);
                },
                i = function () {
                  return Promise.resolve().then(n);
                };
              i(),
                (c = {
                  push: function (e) {
                    t.push(e), i();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), c;
                  },
                });
            },
          }).options = nf({ async: !0, ssr: !1 }, a)),
          d),
        nm = function () {},
        ny = B.forwardRef(function (e, t) {
          var r,
            n,
            i,
            o = B.useRef(null),
            a = B.useState({
              onScrollCapture: nm,
              onWheelCapture: nm,
              onTouchMoveCapture: nm,
            }),
            l = a[0],
            c = a[1],
            s = e.forwardProps,
            d = e.children,
            f = e.className,
            u = e.removeScrollBar,
            p = e.enabled,
            g = e.shards,
            h = e.sideCar,
            m = e.noIsolation,
            y = e.inert,
            v = e.allowPinchZoom,
            b = e.as,
            S = void 0 === b ? "div" : b,
            x = nu(e, [
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
            w =
              ((r = [o, t]),
              (n = function (e) {
                return r.forEach(function (t) {
                  return (
                    "function" == typeof t ? t(e) : t && (t.current = e), t
                  );
                });
              }),
              ((i = (0, B.useState)(function () {
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
            A = nf(nf({}, x), l);
          return B.createElement(
            B.Fragment,
            null,
            p &&
              B.createElement(h, {
                sideCar: nh,
                removeScrollBar: u,
                shards: g,
                noIsolation: m,
                inert: y,
                setCallbacks: c,
                allowPinchZoom: !!v,
                lockRef: o,
              }),
            s
              ? B.cloneElement(B.Children.only(d), nf(nf({}, A), { ref: w }))
              : B.createElement(S, nf({}, A, { className: f, ref: w }), d)
          );
        });
      (ny.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (ny.classNames = { fullWidth: ng, zeroRight: np });
      var nv = function (e) {
        var t = e.sideCar,
          r = nu(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var n = t.read();
        if (!n) throw Error("Sidecar medium not found");
        return B.createElement(n, nf({}, r));
      };
      nv.isSideCarExport = !0;
      var nb = function () {
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
                var i, o;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = n)
                  : i.appendChild(document.createTextNode(n)),
                  (o = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(o);
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
        nS = function () {
          var e = nb();
          return function (t, r) {
            B.useEffect(
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
        nx = function () {
          var e = nS();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        nB = { left: 0, top: 0, right: 0, gap: 0 },
        nw = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        nA = function (e) {
          var t = window.getComputedStyle(document.body),
            r = t["padding" === e ? "paddingLeft" : "marginLeft"],
            n = t["padding" === e ? "paddingTop" : "marginTop"],
            i = t["padding" === e ? "paddingRight" : "marginRight"];
          return [nw(r), nw(n), nw(i)];
        },
        nD = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return nB;
          var t = nA(e),
            r = document.documentElement.clientWidth,
            n = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, n - r + t[2] - t[0]),
          };
        },
        nF = nx(),
        nk = function (e, t, r, n) {
          var i = e.left,
            o = e.top,
            a = e.right,
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
                      .concat(o, "px;\n    padding-right: ")
                      .concat(
                        a,
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
              .concat(np, " {\n    right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(ng, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(np, " .")
              .concat(np, " {\n    right: 0 ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(ng, " .")
              .concat(ng, " {\n    margin-right: 0 ")
              .concat(n, ";\n  }\n  \n  body {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        nH = function (e) {
          var t = e.noRelative,
            r = e.noImportant,
            n = e.gapMode,
            i = void 0 === n ? "margin" : n,
            o = B.useMemo(
              function () {
                return nD(i);
              },
              [i]
            );
          return B.createElement(nF, {
            styles: nk(o, !t, i, r ? "" : "!important"),
          });
        },
        nE = !1;
      if ("undefined" != typeof window)
        try {
          var nC = Object.defineProperty({}, "passive", {
            get: function () {
              return (nE = !0), !0;
            },
          });
          window.addEventListener("test", nC, nC),
            window.removeEventListener("test", nC, nC);
        } catch (e) {
          nE = !1;
        }
      var nI = !!nE && { passive: !1 },
        nR = function (e, t) {
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
        nP = function (e, t) {
          var r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              nO(e, r))
            ) {
              var n = nN(e, r);
              if (n[1] > n[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== document.body);
          return !1;
        },
        nO = function (e, t) {
          return "v" === e ? nR(t, "overflowY") : nR(t, "overflowX");
        },
        nN = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        nz = function (e, t, r, n, i) {
          var o,
            a =
              ((o = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === o ? -1 : 1),
            l = a * n,
            c = r.target,
            s = t.contains(c),
            d = !1,
            f = l > 0,
            u = 0,
            p = 0;
          do {
            var g = nN(e, c),
              h = g[0],
              m = g[1] - g[2] - a * h;
            (h || m) && nO(e, c) && ((u += m), (p += h)), (c = c.parentNode);
          } while (
            (!s && c !== document.body) ||
            (s && (t.contains(c) || t === c))
          );
          return (
            f && ((i && 0 === u) || (!i && l > u))
              ? (d = !0)
              : !f && ((i && 0 === p) || (!i && -l > p)) && (d = !0),
            d
          );
        },
        nM = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        nT = function (e) {
          return [e.deltaX, e.deltaY];
        },
        nL = function (e) {
          return e && "current" in e ? e.current : e;
        },
        n_ = 0,
        nj = [],
        nW =
          (nh.useMedium(function (e) {
            var t = B.useRef([]),
              r = B.useRef([0, 0]),
              n = B.useRef(),
              i = B.useState(n_++)[0],
              o = B.useState(function () {
                return nx();
              })[0],
              a = B.useRef(e);
            B.useEffect(
              function () {
                a.current = e;
              },
              [e]
            ),
              B.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(i)
                    );
                    var t = (function (e, t, r) {
                      if (r || 2 == arguments.length)
                        for (var n, i = 0, o = t.length; i < o; i++)
                          (!n && i in t) ||
                            (n || (n = Array.prototype.slice.call(t, 0, i)),
                            (n[i] = t[i]));
                      return e.concat(n || Array.prototype.slice.call(t));
                    })(
                      [e.lockRef.current],
                      (e.shards || []).map(nL),
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
            var l = B.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !a.current.allowPinchZoom;
                var i,
                  o = nM(e),
                  l = r.current,
                  c = "deltaX" in e ? e.deltaX : l[0] - o[0],
                  s = "deltaY" in e ? e.deltaY : l[1] - o[1],
                  d = e.target,
                  f = Math.abs(c) > Math.abs(s) ? "h" : "v";
                if ("touches" in e && "h" === f && "range" === d.type)
                  return !1;
                var u = nP(f, d);
                if (!u) return !0;
                if (
                  (u ? (i = f) : ((i = "v" === f ? "h" : "v"), (u = nP(f, d))),
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
                var p = n.current || i;
                return nz(p, t, e, "h" === p ? c : s, !0);
              }, []),
              c = B.useCallback(function (e) {
                if (nj.length && nj[nj.length - 1] === o) {
                  var r = "deltaY" in e ? nT(e) : nM(e),
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
                    var i = (a.current.shards || [])
                      .map(nL)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (i.length > 0 ? l(e, i[0]) : !a.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              s = B.useCallback(function (e, r, n, i) {
                var o = { name: e, delta: r, target: n, should: i };
                t.current.push(o),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== o;
                    });
                  }, 1);
              }, []),
              d = B.useCallback(function (e) {
                (r.current = nM(e)), (n.current = void 0);
              }, []),
              f = B.useCallback(function (t) {
                s(t.type, nT(t), t.target, l(t, e.lockRef.current));
              }, []),
              u = B.useCallback(function (t) {
                s(t.type, nM(t), t.target, l(t, e.lockRef.current));
              }, []);
            B.useEffect(function () {
              return (
                nj.push(o),
                e.setCallbacks({
                  onScrollCapture: f,
                  onWheelCapture: f,
                  onTouchMoveCapture: u,
                }),
                document.addEventListener("wheel", c, nI),
                document.addEventListener("touchmove", c, nI),
                document.addEventListener("touchstart", d, nI),
                function () {
                  (nj = nj.filter(function (e) {
                    return e !== o;
                  })),
                    document.removeEventListener("wheel", c, nI),
                    document.removeEventListener("touchmove", c, nI),
                    document.removeEventListener("touchstart", d, nI);
                }
              );
            }, []);
            var p = e.removeScrollBar,
              g = e.inert;
            return B.createElement(
              B.Fragment,
              null,
              g
                ? B.createElement(o, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        i,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(i, " {pointer-events: all;}\n"),
                  })
                : null,
              p ? B.createElement(nH, { gapMode: "margin" }) : null
            );
          }),
          nv),
        nV = B.forwardRef(function (e, t) {
          return B.createElement(ny, nf({}, e, { ref: t, sideCar: nW }));
        });
      nV.classNames = ny.classNames;
      let n$ = "Popover",
        [nU, nG] = tF(n$, [rJ]),
        nZ = rJ(),
        [nq, nY] = nU(n$),
        nX =
          ((e, t) => {
            let { __scopePopover: r, ...n } = e,
              i = nY("PopoverTrigger", r),
              o = nZ(r),
              a = tD(t, i.triggerRef),
              l = (0, B.createElement)(
                tR.button,
                tB(
                  {
                    type: "button",
                    "aria-haspopup": "dialog",
                    "aria-expanded": i.open,
                    "aria-controls": i.contentId,
                    "data-state": n5(i.open),
                  },
                  n,
                  { ref: a, onClick: tw(e.onClick, i.onOpenToggle) }
                )
              );
            return i.hasCustomAnchor
              ? l
              : (0, B.createElement)(r1, tB({ asChild: !0 }, o), l);
          },
          "PopoverPortal"),
        [nK, nJ] = nU(nX, { forceMount: void 0 }),
        nQ = "PopoverContent",
        n0 =
          ((e, t) => {
            let r = nJ(nQ, e.__scopePopover),
              { forceMount: n = r.forceMount, ...i } = e,
              o = nY(nQ, e.__scopePopover);
            return (0, B.createElement)(
              nr,
              { present: n || o.open },
              o.modal
                ? (0, B.createElement)(n0, tB({}, i, { ref: t }))
                : (0, B.createElement)(n1, tB({}, i, { ref: t }))
            );
          },
          (0, B.forwardRef)((e, t) => {
            let r = nY(nQ, e.__scopePopover),
              n = (0, B.useRef)(null),
              i = tD(t, n),
              o = (0, B.useRef)(!1);
            return (
              (0, B.useEffect)(() => {
                let e = n.current;
                if (e) return nd(e);
              }, []),
              (0, B.createElement)(
                nV,
                { as: tH, allowPinchZoom: !0 },
                (0, B.createElement)(
                  n2,
                  tB({}, e, {
                    ref: i,
                    trapFocus: r.open,
                    disableOutsidePointerEvents: !0,
                    onCloseAutoFocus: tw(e.onCloseAutoFocus, (e) => {
                      var t;
                      e.preventDefault(),
                        o.current ||
                          null === (t = r.triggerRef.current) ||
                          void 0 === t ||
                          t.focus();
                    }),
                    onPointerDownOutside: tw(
                      e.onPointerDownOutside,
                      (e) => {
                        let t = e.detail.originalEvent,
                          r = 0 === t.button && !0 === t.ctrlKey,
                          n = 2 === t.button || r;
                        o.current = n;
                      },
                      { checkForDefaultPrevented: !1 }
                    ),
                    onFocusOutside: tw(
                      e.onFocusOutside,
                      (e) => e.preventDefault(),
                      { checkForDefaultPrevented: !1 }
                    ),
                  })
                )
              )
            );
          })),
        n1 = (0, B.forwardRef)((e, t) => {
          let r = nY(nQ, e.__scopePopover),
            n = (0, B.useRef)(!1),
            i = (0, B.useRef)(!1);
          return (0, B.createElement)(
            n2,
            tB({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var o, a;
                null === (o = e.onCloseAutoFocus) ||
                  void 0 === o ||
                  o.call(e, t),
                  t.defaultPrevented ||
                    (n.current ||
                      null === (a = r.triggerRef.current) ||
                      void 0 === a ||
                      a.focus(),
                    t.preventDefault()),
                  (n.current = !1),
                  (i.current = !1);
              },
              onInteractOutside: (t) => {
                var o, a;
                null === (o = e.onInteractOutside) ||
                  void 0 === o ||
                  o.call(e, t),
                  t.defaultPrevented ||
                    ((n.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (i.current = !0));
                let l = t.target,
                  c =
                    null === (a = r.triggerRef.current) || void 0 === a
                      ? void 0
                      : a.contains(l);
                c && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    i.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        n2 = (0, B.forwardRef)((e, t) => {
          let {
              __scopePopover: r,
              trapFocus: n,
              onOpenAutoFocus: i,
              onCloseAutoFocus: o,
              disableOutsidePointerEvents: a,
              onEscapeKeyDown: l,
              onPointerDownOutside: c,
              onFocusOutside: s,
              onInteractOutside: d,
              ...f
            } = e,
            u = nY(nQ, r),
            p = nZ(r);
          return (
            (0, B.useEffect)(() => {
              var e, t;
              let r = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = r[0]) && void 0 !== e ? e : t_()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = r[1]) && void 0 !== t ? t : t_()
                ),
                tL++,
                () => {
                  1 === tL &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    tL--;
                }
              );
            }, []),
            (0, B.createElement)(
              t$,
              {
                asChild: !0,
                loop: !0,
                trapped: n,
                onMountAutoFocus: i,
                onUnmountAutoFocus: o,
              },
              (0, B.createElement)(
                tz,
                {
                  asChild: !0,
                  disableOutsidePointerEvents: a,
                  onInteractOutside: d,
                  onEscapeKeyDown: l,
                  onPointerDownOutside: c,
                  onFocusOutside: s,
                  onDismiss: () => u.onOpenChange(!1),
                },
                (0, B.createElement)(
                  r4,
                  tB(
                    {
                      "data-state": n5(u.open),
                      role: "dialog",
                      id: u.contentId,
                    },
                    p,
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
      function n5(e) {
        return e ? "open" : "closed";
      }
      var n8 = { exports: {} },
        n4 = {};
      n8.exports = (function () {
        if (v) return n4;
        v = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          r = Object.prototype.hasOwnProperty,
          n =
            B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          i = { key: !0, ref: !0, __self: !0, __source: !0 };
        function o(t, o, a) {
          var l,
            c = {},
            s = null,
            d = null;
          for (l in (void 0 !== a && (s = "" + a),
          void 0 !== o.key && (s = "" + o.key),
          void 0 !== o.ref && (d = o.ref),
          o))
            r.call(o, l) && !i.hasOwnProperty(l) && (c[l] = o[l]);
          if (t && t.defaultProps)
            for (l in (o = t.defaultProps)) void 0 === c[l] && (c[l] = o[l]);
          return {
            $$typeof: e,
            type: t,
            key: s,
            ref: d,
            props: c,
            _owner: n.current,
          };
        }
        return (n4.Fragment = t), (n4.jsx = o), (n4.jsxs = o), n4;
      })();
      var n3 = n8.exports;
      n3.Fragment;
      let n7 = n3.jsx,
        n6 = n3.jsxs,
        n9 = (e, t) =>
          t.top >= e.top - 1 &&
          t.left >= e.left - 1 &&
          t.bottom <= e.bottom + 1 &&
          t.right <= e.right + 1,
        ie = (e, t) => {
          let r = null;
          for (let n of t)
            if (n9(e, n.getBoundingClientRect())) {
              r = n;
              break;
            }
          return r;
        },
        it = (0, B.forwardRef)(
          (
            {
              className: e,
              css: t,
              container: r,
              direction: n = tb.direction,
              showNavControl: i = tb.showNavControl,
              showButtons: o = tb.showButtons,
              ...a
            },
            l
          ) => {
            let c = (0, x.cT)({ css: t }).className,
              s = (0, x.iv)({
                color: x.rS.colors.displayFgLowPrimary,
              }).className;
            return o
              ? n7(eO, {
                  className: H(c, e),
                  "data-testid": tv.HorizontalNavControl,
                  tone: "tertiary",
                  ref: l,
                  css: { display: i ? "block" : "none" },
                  onClick: () => {
                    if (!r.current) return;
                    let e = r.current.getBoundingClientRect(),
                      t = [...r.current.children],
                      i = ie(e, t),
                      o =
                        null == i
                          ? void 0
                          : i[
                              `${
                                "right" === n
                                  ? "nextElementSibling"
                                  : "previousElementSibling"
                              }`
                            ];
                    if (o) {
                      let t = o.getBoundingClientRect();
                      r.current.scrollBy({
                        left: t.left - e.left,
                        behavior: "smooth",
                      });
                    }
                  },
                  ...a,
                  children:
                    "left" === n
                      ? n7(e4, {
                          className: s,
                          style: { alignSelf: "center" },
                          variant: "line",
                        })
                      : n7(e3, {
                          className: s,
                          style: { alignSelf: "center" },
                          variant: "line",
                        }),
                })
              : null;
          }
        );
      it.displayName = "HorizontalNavControl";
      let ir = (0, B.forwardRef)(
        (
          {
            className: e,
            css: t,
            children: r,
            disabled: n = tS.disabled,
            selected: i = tS.selected,
            inMenu: o = tS.inMenu,
            ...a
          },
          l
        ) => {
          let c = tp({ css: t, disabled: n, inMenu: o, selected: i }).className;
          return n7("li", {
            className: H(c, e),
            "data-testid": tv.HorizontalNavItem,
            ref: l,
            ...a,
            children: r,
          });
        }
      );
      ir.displayName = "HorizontalNavItem";
      let ii = (0, B.forwardRef)(
        ({ className: e, children: t, css: r, to: n, ...i }, o) => {
          let a = tu({ css: r }).className;
          return n7("a", {
            className: H(a, e),
            "data-testid": tv.HorizontalNavLink,
            ref: o,
            href: n,
            ...i,
            children: t,
          });
        }
      );
      ii.displayName = "HorizontalNavLink";
      let io = (0, B.forwardRef)(
        ({ className: e, children: t, css: r, ...n }, i) => {
          let o = tg({ css: r }).className;
          return n7("ul", {
            className: H(o, e),
            "data-testid": tv.HorizontalNavList,
            ref: i,
            ...n,
            children: t,
          });
        }
      );
      (io.displayName = "HorizontalNavList"),
        parseInt(to.v2.md.replace(/\D/g, ""), 10),
        parseInt(to.v2.sm.replace(/\D/g, ""), 10);
      let ia = (0, B.forwardRef)(
        ({ className: e, children: t, css: r, ...n }, i) => {
          let o = (0, x.cT)({ css: r }).className;
          return n7("nav", {
            className: H(o, e),
            "data-testid": tv.HorizontalNavRoot,
            ref: i,
            ...n,
            children: t,
          });
        }
      );
      ia.displayName = "HorizontalNavRoot";
      let il = (0, B.forwardRef)(
        (
          {
            className: e,
            children: t,
            css: r,
            gradientColor: n = tx.gradientColor,
            showButtons: i = tx.showButtons,
            showGradients: o = tx.showGradients,
            showLeftControl: a = tx.showLeftControl,
            showRightControl: l = tx.showRightControl,
            ...c
          },
          s
        ) => {
          let d = th({ css: r, showButtons: i }).className,
            f = ty().className,
            u = tm({
              type: "left",
              hide: !a || !o,
              css: { $$gradientColor: n },
            }).className,
            p = tm({
              type: "right",
              hide: !l || !o,
              css: { $$gradientColor: n },
            }).className;
          return n6("div", {
            className: f,
            children: [
              n7("div", { className: u }),
              n7("div", { className: p }),
              n7("div", {
                className: H(d, e),
                "data-testid": tv.HorizontalNavScrollContainer,
                ref: s,
                ...c,
                children: t,
              }),
            ],
          });
        }
      );
      function ic(e) {
        let { label: t, to: r } = e;
        return (0, b.jsx)(ti(), {
          href: r,
          passHref: !0,
          legacyBehavior: !0,
          children: (0, b.jsx)(ir, {
            selected: window.location.pathname == r,
            css: { height: "100%", width: "unset" },
            children: (0, b.jsx)("span", {
              style: { textTransform: "capitalize" },
              children: t,
            }),
          }),
        });
      }
      il.displayName = "HorizontalNavScrollContainer";
      let is = () => {
        let { theme: e, setTheme: t } = (0, S.oR)();
        return (0, b.jsx)(tr, {
          slotLogo: (0, b.jsx)(ek, {
            name:
              "light" == e
                ? "all_black_text_horizontal"
                : "all_white_text_horizontal",
          }),
          slotLeft: "LLM Playground",
          slotRight: (0, b.jsxs)(J, {
            gap: "none",
            css: { height: "100%", padding: "0 25px 0 0" },
            children: [
              (0, b.jsx)(ic, { label: "converse", to: "/converse" }),
              (0, b.jsx)(ic, { label: "knowledge base", to: "/kb" }),
              (0, b.jsx)(eO, {
                tone: "tertiary",
                onClick: () => {
                  t("light" === e ? "dark" : "light");
                },
                children:
                  "dark" === e
                    ? (0, b.jsx)(e8, { variant: "line" })
                    : (0, b.jsx)(e5, { variant: "line" }),
              }),
            ],
          }),
        });
      };
      function id(e) {
        let { Component: t, pageProps: r } = e;
        return (0, b.jsx)(S.g3, {
          children: (0, b.jsxs)(T, {
            children: [
              (0, b.jsx)(_, { children: (0, b.jsx)(is, {}) }),
              (0, b.jsx)(W, { children: (0, b.jsx)(t, { ...r }) }),
            ],
          }),
        });
      }
    },
    7952: function () {},
    1664: function (e, t, r) {
      e.exports = r(5569);
    },
    6607: function (e, t, r) {
      "use strict";
      r.d(t, {
        ac: function () {
          return o;
        },
        iJ: function () {
          return a;
        },
        xR: function () {
          return l;
        },
      });
      var n = r(7294),
        i = r(571);
      "u" > typeof window ? n.useLayoutEffect : n.useEffect;
      let o = (e) => {
        let t = (t) =>
            "u" > typeof window && !!e && window.matchMedia(t).matches,
          r = e ? i.u3[e] : "",
          [o, a] = (0, n.useState)(t(r));
        function l() {
          a(t(r));
        }
        return (
          (0, n.useEffect)(() => {
            let e = window.matchMedia(r);
            return (
              l(),
              e.addEventListener("change", l),
              () => {
                e.removeEventListener("change", l);
              }
            );
          }, [r]),
          o
        );
      };
      function a() {
        let e = (0, n.useRef)(null),
          t = (0, n.useRef)(null),
          r = (0, n.useRef)(null),
          [i, o] = (0, n.useState)(!1),
          [a, l] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            if (!(r.current && e.current && t.current)) return;
            let n = new IntersectionObserver(
              (r) => {
                r.forEach((r) => {
                  r.target === e.current && o(r.intersectionRatio < 0.5),
                    r.target === t.current && l(r.intersectionRatio < 0.5);
                });
              },
              { root: r.current, rootMargin: "0px", threshold: 0.5 }
            );
            return (
              n.observe(e.current), n.observe(t.current), () => n.disconnect()
            );
          }, []),
          {
            showLeftControl: i,
            showRightControl: a,
            leftRef: e,
            rightRef: t,
            mainRef: r,
          }
        );
      }
      function l({ children: e, slotDivider: t, testIdNameSpace: r }) {
        let i = n.Children.toArray(e).filter((e) => (0, n.isValidElement)(e));
        return i.reduce(
          (e, o, a) => (
            a === i.length - 1
              ? e.push((0, n.cloneElement)(o, { "data-is-last": !0 }))
              : e.push(o),
            a < i.length - 1 &&
              e.push((0, n.cloneElement)(t, { key: `${r}-slotDivider-${a}` })),
            e
          ),
          []
        );
      }
    },
    571: function (e, t, r) {
      "use strict";
      r.d(t, {
        So: function () {
          return ev;
        },
        u3: function () {
          return et;
        },
        Cs: function () {
          return ew;
        },
        GD: function () {
          return eS;
        },
        cT: function () {
          return eF;
        },
        BG: function () {
          return em;
        },
        I_: function () {
          return ey;
        },
        Gq: function () {
          return eb;
        },
        ib: function () {
          return eB;
        },
        sG: function () {
          return eA;
        },
        xB: function () {
          return ex;
        },
        S8: function () {
          return eD;
        },
        iv: function () {
          return ei;
        },
        rS: function () {
          return ec;
        },
      });
      var n,
        i = r(1841),
        o = "colors",
        a = "sizes",
        l = "space",
        c = {
          gap: l,
          gridGap: l,
          columnGap: l,
          gridColumnGap: l,
          rowGap: l,
          gridRowGap: l,
          inset: l,
          insetBlock: l,
          insetBlockEnd: l,
          insetBlockStart: l,
          insetInline: l,
          insetInlineEnd: l,
          insetInlineStart: l,
          margin: l,
          marginTop: l,
          marginRight: l,
          marginBottom: l,
          marginLeft: l,
          marginBlock: l,
          marginBlockEnd: l,
          marginBlockStart: l,
          marginInline: l,
          marginInlineEnd: l,
          marginInlineStart: l,
          padding: l,
          paddingTop: l,
          paddingRight: l,
          paddingBottom: l,
          paddingLeft: l,
          paddingBlock: l,
          paddingBlockEnd: l,
          paddingBlockStart: l,
          paddingInline: l,
          paddingInlineEnd: l,
          paddingInlineStart: l,
          top: l,
          right: l,
          bottom: l,
          left: l,
          scrollMargin: l,
          scrollMarginTop: l,
          scrollMarginRight: l,
          scrollMarginBottom: l,
          scrollMarginLeft: l,
          scrollMarginX: l,
          scrollMarginY: l,
          scrollMarginBlock: l,
          scrollMarginBlockEnd: l,
          scrollMarginBlockStart: l,
          scrollMarginInline: l,
          scrollMarginInlineEnd: l,
          scrollMarginInlineStart: l,
          scrollPadding: l,
          scrollPaddingTop: l,
          scrollPaddingRight: l,
          scrollPaddingBottom: l,
          scrollPaddingLeft: l,
          scrollPaddingX: l,
          scrollPaddingY: l,
          scrollPaddingBlock: l,
          scrollPaddingBlockEnd: l,
          scrollPaddingBlockStart: l,
          scrollPaddingInline: l,
          scrollPaddingInlineEnd: l,
          scrollPaddingInlineStart: l,
          fontSize: "fontSizes",
          background: o,
          backgroundColor: o,
          backgroundImage: o,
          borderImage: o,
          border: o,
          borderBlock: o,
          borderBlockEnd: o,
          borderBlockStart: o,
          borderBottom: o,
          borderBottomColor: o,
          borderColor: o,
          borderInline: o,
          borderInlineEnd: o,
          borderInlineStart: o,
          borderLeft: o,
          borderLeftColor: o,
          borderRight: o,
          borderRightColor: o,
          borderTop: o,
          borderTopColor: o,
          caretColor: o,
          color: o,
          columnRuleColor: o,
          fill: o,
          outline: o,
          outlineColor: o,
          stroke: o,
          textDecorationColor: o,
          fontFamily: "fonts",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          blockSize: a,
          minBlockSize: a,
          maxBlockSize: a,
          inlineSize: a,
          minInlineSize: a,
          maxInlineSize: a,
          width: a,
          minWidth: a,
          maxWidth: a,
          height: a,
          minHeight: a,
          maxHeight: a,
          flexBasis: a,
          gridTemplateColumns: a,
          gridTemplateRows: a,
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
        s = (e, t) =>
          "function" == typeof t
            ? { "()": Function.prototype.toString.call(t) }
            : t,
        d = () => {
          let e = Object.create(null);
          return (t, r, ...n) => {
            let i = JSON.stringify(t, s);
            return i in e ? e[i] : (e[i] = r(t, ...n));
          };
        },
        f = Symbol.for("sxs.internal"),
        u = (e, t) =>
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
        p = (e) => {
          for (let t in e) return !0;
          return !1;
        },
        { hasOwnProperty: g } = Object.prototype,
        h = (e) =>
          e.includes("-")
            ? e
            : e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()),
        m = /\s+(?![^()]*\))/,
        y = (e) => (t) =>
          e(...("string" == typeof t ? String(t).split(m) : [t])),
        v = {
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
          marginBlock: y((e, t) => ({
            marginBlockStart: e,
            marginBlockEnd: t || e,
          })),
          marginInline: y((e, t) => ({
            marginInlineStart: e,
            marginInlineEnd: t || e,
          })),
          maxSize: y((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })),
          minSize: y((e, t) => ({ minBlockSize: e, minInlineSize: t || e })),
          paddingBlock: y((e, t) => ({
            paddingBlockStart: e,
            paddingBlockEnd: t || e,
          })),
          paddingInline: y((e, t) => ({
            paddingInlineStart: e,
            paddingInlineEnd: t || e,
          })),
        },
        b = /([\d.]+)([^]*)/,
        S = (e, t) =>
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
        x = (e, t) =>
          e in B && "string" == typeof t
            ? t.replace(
                /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
                (t, r, n, i) =>
                  r +
                  ("stretch" === n
                    ? `-moz-available${i};${h(e)}:${r}-webkit-fill-available`
                    : `-moz-fit-content${i};${h(e)}:${r}fit-content`) +
                  i
              )
            : String(t),
        B = {
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
        w = (e) => (e ? e + "-" : ""),
        A = (e, t, r) =>
          e.replace(
            /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
            (e, n, i, o, a) =>
              ("$" == o) == !!i
                ? e
                : (n || "--" == o ? "calc(" : "") +
                  "var(--" +
                  ("$" === o
                    ? w(t) +
                      (a.includes("$") ? "" : w(r)) +
                      a.replace(/\$/g, "-")
                    : a) +
                  ")" +
                  (n || "--" == o ? "*" + (n || "") + (i || "1") + ")" : "")
          ),
        D = /\s*,\s*(?![^()]*\))/,
        F = Object.prototype.toString,
        k = (e, t, r, n, i) => {
          let o, a, l;
          let c = (e, t, r) => {
            let s, d;
            let f = (e) => {
              var u;
              for (s in e) {
                let p = 64 === s.charCodeAt(0),
                  g = p && Array.isArray(e[s]) ? e[s] : [e[s]];
                for (d of g) {
                  let e = /[A-Z]/.test((u = s))
                      ? u
                      : u.replace(/-[^]/g, (e) => e[1].toUpperCase()),
                    g =
                      "object" == typeof d &&
                      d &&
                      d.toString === F &&
                      (!n.utils[e] || !t.length);
                  if (e in n.utils && !g) {
                    let t = n.utils[e];
                    if (t !== a) {
                      (a = t), f(t(d)), (a = null);
                      continue;
                    }
                  } else if (e in v) {
                    let t = v[e];
                    if (t !== l) {
                      (l = t), f(t(d)), (l = null);
                      continue;
                    }
                  }
                  if (
                    (p &&
                      (s = (
                        s.slice(1) in n.media
                          ? "@media " + n.media[s.slice(1)]
                          : s
                      ).replace(
                        /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                        (e, t, r, n, i, o) => {
                          let a = b.test(t),
                            l = 0.0625 * (a ? -1 : 1),
                            [c, s] = a ? [n, t] : [t, n];
                          return (
                            "(" +
                            ("=" === r[0]
                              ? ""
                              : (">" === r[0]) === a
                              ? "max-"
                              : "min-") +
                            c +
                            ":" +
                            ("=" !== r[0] && 1 === r.length
                              ? s.replace(
                                  b,
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
                                  ? o.replace(
                                      b,
                                      (e, t, r) =>
                                        Number(t) + l * (">" === i ? -1 : 1) + r
                                    )
                                  : o)
                              : "") +
                            ")"
                          );
                        }
                      )),
                    g)
                  ) {
                    let e = p ? r.concat(s) : [...r],
                      n = p ? [...t] : S(t, s.split(D));
                    void 0 !== o && i(H(...o)), (o = void 0), c(d, n, e);
                  } else
                    void 0 === o && (o = [[], t, r]),
                      (s =
                        p || 36 !== s.charCodeAt(0)
                          ? s
                          : `--${w(n.prefix)}${s
                              .slice(1)
                              .replace(/\$/g, "-")}`),
                      (d = g
                        ? d
                        : "number" == typeof d
                        ? d && e in E
                          ? String(d) + "px"
                          : String(d)
                        : A(x(e, null == d ? "" : d), n.prefix, n.themeMap[e])),
                      o[0].push(`${p ? `${s} ` : `${h(s)}:`}${d}`);
                }
              }
            };
            f(e), void 0 !== o && i(H(...o)), (o = void 0);
          };
          c(e, t, r);
        },
        H = (e, t, r) =>
          `${r.map((e) => `${e}{`).join("")}${
            t.length ? `${t.join(",")}{` : ""
          }${e.join(";")}${t.length ? "}" : ""}${Array(
            r.length ? r.length + 1 : 0
          ).join("}")}`,
        E = {
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
        C = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)),
        I = (e) =>
          ((e) => {
            let t,
              r = "";
            for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = C(t % 52) + r;
            return C(t % 52) + r;
          })(
            ((e, t) => {
              let r = t.length;
              for (; r; ) e = (33 * e) ^ t.charCodeAt(--r);
              return e;
            })(5381, JSON.stringify(e)) >>> 0
          ),
        R = [
          "themed",
          "global",
          "styled",
          "onevar",
          "resonevar",
          "allvar",
          "inline",
        ],
        P = (e) => {
          if (e.href && !e.href.startsWith(location.origin)) return !1;
          try {
            return !!e.cssRules;
          } catch (e) {
            return !1;
          }
        },
        O = (e) => {
          let t;
          let r = () => {
              let { cssRules: e } = t.sheet;
              return [].map
                .call(e, (r, n) => {
                  let { cssText: i } = r,
                    o = "";
                  if (i.startsWith("--sxs")) return "";
                  if (e[n - 1] && (o = e[n - 1].cssText).startsWith("--sxs")) {
                    if (!r.cssRules.length) return "";
                    for (let e in t.rules)
                      if (t.rules[e].group === r)
                        return `--sxs{--sxs:${[...t.rules[e].cache].join(
                          " "
                        )}}${i}`;
                    return r.cssRules.length ? `${o}${i}` : "";
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
                if (P(e)) {
                  for (let i = 0, o = e.cssRules; o[i]; ++i) {
                    let a = Object(o[i]);
                    if (1 !== a.type) continue;
                    let l = Object(o[i + 1]);
                    if (4 !== l.type) continue;
                    ++i;
                    let { cssText: c } = a;
                    if (!c.startsWith("--sxs")) continue;
                    let s = c.slice(14, -3).trim().split(/\s+/),
                      d = R[s[0]];
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
              let { sheet: o, rules: a } = t;
              for (let e = R.length - 1; e >= 0; --e) {
                let t = R[e];
                if (!a[t]) {
                  let r = R[e + 1],
                    n = a[r] ? a[r].index : o.cssRules.length;
                  o.insertRule("@media{}", n),
                    o.insertRule(`--sxs{--sxs:${e}}`, n),
                    (a[t] = {
                      group: o.cssRules[n + 1],
                      index: n,
                      cache: new Set([e]),
                    });
                }
                N(a[t]);
              }
            };
          return n(), t;
        },
        N = (e) => {
          let t = e.group,
            r = t.cssRules.length;
          e.apply = (e) => {
            try {
              t.insertRule(e, r), ++r;
            } catch (e) {}
          };
        },
        z = Symbol(),
        M = d(),
        T = (e, t) =>
          M(e, () => (...r) => {
            let n = { type: null, composers: new Set() };
            for (let t of r)
              if (null != t) {
                if (t[f])
                  for (let e of (null == n.type && (n.type = t[f].type),
                  t[f].composers))
                    n.composers.add(e);
                else
                  t.constructor !== Object || t.$$typeof
                    ? null == n.type && (n.type = t)
                    : n.composers.add(L(t, e));
              }
            return (
              null == n.type && (n.type = "span"),
              n.composers.size || n.composers.add(["PJLV", {}, [], [], {}, []]),
              _(e, n, t)
            );
          }),
        L = (
          { variants: e, compoundVariants: t, defaultVariants: r, ...n },
          i
        ) => {
          let o = `${w(i.prefix)}c-${I(n)}`,
            a = [],
            l = [],
            c = Object.create(null),
            s = [];
          for (let e in r) c[e] = String(r[e]);
          if ("object" == typeof e && e)
            for (let t in e) {
              g.call(c, t) || (c[t] = "undefined");
              let r = e[t];
              for (let e in r) {
                let n = { [t]: String(e) };
                "undefined" === String(e) && s.push(t);
                let i = r[e],
                  o = [n, i, !p(i)];
                a.push(o);
              }
            }
          if ("object" == typeof t && t)
            for (let e of t) {
              let { css: t, ...r } = e;
              for (let e in ((t = ("object" == typeof t && t) || {}), r))
                r[e] = String(r[e]);
              let n = [r, t, !p(t)];
              l.push(n);
            }
          return [o, n, a, l, c, s];
        },
        _ = (e, t, r) => {
          let [n, i, o, a] = j(t.composers),
            l =
              "function" == typeof t.type || t.type.$$typeof
                ? ((e) => {
                    function t() {
                      for (let r = 0; r < t[z].length; r++) {
                        let [n, i] = t[z][r];
                        e.rules[n].apply(i);
                      }
                      return (t[z] = []), null;
                    }
                    return (
                      (t[z] = []),
                      (t.rules = {}),
                      R.forEach(
                        (e) =>
                          (t.rules[e] = { apply: (r) => t[z].push([e, r]) })
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
              d = ("object" == typeof d && d) || V;
              let { css: f, ...u } = d,
                p = {};
              for (let e in o)
                if ((delete u[e], e in d)) {
                  let t = d[e];
                  "object" == typeof t && t
                    ? (p[e] = { "@initial": o[e], ...t })
                    : ((t = String(t)),
                      (p[e] = "undefined" !== t || a.has(e) ? t : o[e]));
                } else p[e] = o[e];
              let g = new Set([...i]);
              for (let [n, i, o, a] of t.composers) {
                r.rules.styled.cache.has(n) ||
                  (r.rules.styled.cache.add(n),
                  k(i, [`.${n}`], [], e, (e) => {
                    c.styled.apply(e);
                  }));
                let t = W(o, p, e.media),
                  l = W(a, p, e.media, !0);
                for (let i of t)
                  if (void 0 !== i)
                    for (let [t, o, a] of i) {
                      let i = `${n}-${I(o)}-${t}`;
                      g.add(i);
                      let l = (a ? r.rules.resonevar : r.rules.onevar).cache,
                        s = a ? c.resonevar : c.onevar;
                      l.has(i) ||
                        (l.add(i),
                        k(o, [`.${i}`], [], e, (e) => {
                          s.apply(e);
                        }));
                    }
                for (let t of l)
                  if (void 0 !== t)
                    for (let [i, o] of t) {
                      let t = `${n}-${I(o)}-${i}`;
                      g.add(t),
                        r.rules.allvar.cache.has(t) ||
                          (r.rules.allvar.cache.add(t),
                          k(o, [`.${t}`], [], e, (e) => {
                            c.allvar.apply(e);
                          }));
                    }
              }
              if ("object" == typeof f && f) {
                let t = `${n}-i${I(f)}-css`;
                g.add(t),
                  r.rules.inline.cache.has(t) ||
                    (r.rules.inline.cache.add(t),
                    k(f, [`.${t}`], [], e, (e) => {
                      c.inline.apply(e);
                    }));
              }
              for (let e of String(d.className || "")
                .trim()
                .split(/\s+/))
                e && g.add(e);
              let h = (u.className = [...g].join(" "));
              return {
                type: t.type,
                className: h,
                selector: s,
                props: u,
                toString: () => h,
                deferredInjector: l,
              };
            };
          return u(d, {
            className: n,
            selector: s,
            [f]: t,
            toString: () => (r.rules.styled.cache.has(n) || d(), n),
          });
        },
        j = (e) => {
          let t = "",
            r = [],
            n = {},
            i = [];
          for (let [o, , , , a, l] of e)
            for (let e in ("" === t && (t = o), r.push(o), i.push(...l), a)) {
              let t = a[e];
              (void 0 === n[e] || "undefined" !== t || l.includes(t)) &&
                (n[e] = t);
            }
          return [t, r, n, new Set(i)];
        },
        W = (e, t, r, n) => {
          let i = [];
          e: for (let [o, a, l] of e) {
            if (l) continue;
            let e,
              c = 0,
              s = !1;
            for (e in o) {
              let n = o[e],
                i = t[e];
              if (i !== n) {
                if ("object" != typeof i || !i) continue e;
                {
                  let e,
                    t,
                    o = 0;
                  for (let a in i) {
                    if (n === String(i[a])) {
                      if ("@initial" !== a) {
                        let e = a.slice(1);
                        (t = t || []).push(
                          e in r ? r[e] : a.replace(/^@media ?/, "")
                        ),
                          (s = !0);
                      }
                      (c += o), (e = !0);
                    }
                    ++o;
                  }
                  if (
                    (t && t.length && (a = { ["@media " + t.join(", ")]: a }),
                    !e)
                  )
                    continue e;
                }
              }
            }
            (i[c] = i[c] || []).push([n ? "cv" : `${e}-${o[e]}`, a, s]);
          }
          return i;
        },
        V = {},
        $ = d(),
        U = (e, t) =>
          $(e, () => (...r) => {
            let n = () => {
              for (let n of r) {
                let r = I((n = ("object" == typeof n && n) || {}));
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
                  k(n, [], [], e, (e) => {
                    t.rules.global.apply(e);
                  });
                }
              }
              return "";
            };
            return u(n, { toString: n });
          }),
        G = d(),
        Z = (e, t) =>
          G(e, () => (r) => {
            let n = `${w(e.prefix)}k-${I(r)}`,
              i = () => {
                if (!t.rules.global.cache.has(n)) {
                  t.rules.global.cache.add(n);
                  let i = [];
                  k(r, [], [], e, (e) => i.push(e));
                  let o = `@keyframes ${n}{${i.join("")}}`;
                  t.rules.global.apply(o);
                }
                return n;
              };
            return u(i, {
              get name() {
                return i();
              },
              toString: i,
            });
          }),
        q = class {
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
            return "--" + w(this.prefix) + w(this.scale) + this.token;
          }
          toString() {
            return this.computedValue;
          }
        },
        Y = d(),
        X = (e, t) =>
          Y(e, () => (r, n) => {
            n = ("object" == typeof r && r) || Object(n);
            let i = `.${(r =
                (r = "string" == typeof r ? r : "") ||
                `${w(e.prefix)}t-${I(n)}`)}`,
              o = {},
              a = [];
            for (let t in n)
              for (let r in ((o[t] = {}), n[t])) {
                let i = `--${w(e.prefix)}${t}-${r}`,
                  l = A(String(n[t][r]), e.prefix, t);
                (o[t][r] = new q(r, l, t, e.prefix)), a.push(`${i}:${l}`);
              }
            let l = () => {
              if (a.length && !t.rules.themed.cache.has(r)) {
                t.rules.themed.cache.add(r);
                let i = `${n === e.theme ? ":root," : ""}.${r}{${a.join(";")}}`;
                t.rules.themed.apply(i);
              }
              return r;
            };
            return {
              ...o,
              get className() {
                return l();
              },
              selector: i,
              toString: l,
            };
          }),
        K = d(),
        J = (e) => {
          let t = !1,
            r = K(e, (e) => {
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
                o = ("object" == typeof e.theme && e.theme) || {},
                a = {
                  prefix: r,
                  media: n,
                  theme: o,
                  themeMap: ("object" == typeof e.themeMap && e.themeMap) || {
                    ...c,
                  },
                  utils: ("object" == typeof e.utils && e.utils) || {},
                },
                l = O(i),
                s = {
                  css: T(a, l),
                  globalCss: U(a, l),
                  keyframes: Z(a, l),
                  createTheme: X(a, l),
                  reset() {
                    l.reset(), s.theme.toString();
                  },
                  theme: {},
                  sheet: l,
                  config: a,
                  prefix: r,
                  getCssText: l.toString,
                  toString: l.toString,
                };
              return String((s.theme = s.createTheme(o))), s;
            });
          return t || r.reset(), r;
        },
        Q = () => n || (n = J());
      let ee = {
          nvidiaSans: `"${i.Fr.nvidiaSans}", "${i.Fr.nvidiaSans} Fallback"`,
          jetbrainsMono: `"${i.Fr.jetbrainsMono}", "${i.Fr.jetbrainsMono} Fallback"`,
        },
        et = {
          xxl: `(max-width: ${i.wY.xxl})`,
          xl: `(max-width: ${i.wY.xl})`,
          lg: `(max-width: ${i.wY.lg})`,
          md: `(max-width: ${i.wY.md})`,
          sm: `(max-width: ${i.wY.sm})`,
          xs: `(max-width: ${i.wY.xs})`,
        },
        {
          config: er,
          createTheme: en,
          css: ei,
          globalCss: eo,
          getCssText: ea,
          reset: el,
          theme: ec,
        } = J({
          media: et,
          theme: {
            colors: { ...i.x3, ...i.F2 },
            shadows: { ...i.pI, ...i.t0 },
            borderWidths: i.CM,
            fonts: ee,
            fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
            fontSizes: i.g_,
            lineHeights: i.XS,
            letterSpacings: i.sb,
            space: i.v2,
          },
        }),
        es = (e) =>
          `url("https://brand-assets.cne.ngc.nvidia.com/assets/fonts/nvidia-sans/1.0.0/NVIDIASans_${e}.woff2") format("woff2")`,
        ed = "fallback",
        ef = "normal",
        eu = "italic",
        ep = `"${i.Fr.nvidiaSans}"`,
        eg = `"${i.Fr.nvidiaSans} Fallback"`,
        eh = `"${i.Fr.jetbrainsMono} Fallback"`,
        em = eo({
          "@font-face": [
            {
              fontFamily: ep,
              fontStyle: ef,
              fontWeight: 300,
              fontDisplay: ed,
              src: es("Lt"),
            },
            {
              fontFamily: ep,
              fontStyle: eu,
              fontWeight: 300,
              fontDisplay: ed,
              src: es("LtIt"),
            },
            {
              fontFamily: ep,
              fontStyle: ef,
              fontWeight: 400,
              fontDisplay: ed,
              src: es("Rg"),
            },
            {
              fontFamily: ep,
              fontStyle: eu,
              fontWeight: 400,
              fontDisplay: ed,
              src: es("It"),
            },
            {
              fontFamily: ep,
              fontStyle: ef,
              fontWeight: 500,
              fontDisplay: ed,
              src: es("Md"),
            },
            {
              fontFamily: ep,
              fontStyle: eu,
              fontWeight: 500,
              fontDisplay: ed,
              src: es("MdIt"),
            },
            {
              fontFamily: ep,
              fontStyle: ef,
              fontWeight: 700,
              fontDisplay: ed,
              src: es("Bd"),
            },
            {
              fontFamily: ep,
              fontStyle: eu,
              fontWeight: 700,
              fontDisplay: ed,
              src: es("BdIt"),
            },
            {
              fontFamily: eh,
              fontStyle: eu,
              fontWeight: 300,
              src: "local('Courier New Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: eh,
              fontStyle: eu,
              fontWeight: 400,
              src: "local('Courier New Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: eh,
              fontStyle: eu,
              fontWeight: 500,
              src: "local('Courier New Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: eh,
              fontStyle: eu,
              fontWeight: 700,
              src: "local('Courier New Bold Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: eh,
              fontStyle: ef,
              fontWeight: 300,
              src: "local('Courier New')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: eh,
              fontStyle: ef,
              fontWeight: 400,
              src: "local('Courier New')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: eh,
              fontStyle: ef,
              fontWeight: 500,
              src: "local('Courier New')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: eh,
              fontStyle: ef,
              fontWeight: 700,
              src: "local('Courier New Bold')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: eg,
              fontStyle: eu,
              fontWeight: 300,
              src: "local('Arial Italic')",
              ascentOverride: "97.18%",
              descentOverride: "27.77%",
              lineGapOverride: "0.00%",
              sizeAdjust: "100.84%",
            },
            {
              fontFamily: eg,
              fontStyle: eu,
              fontWeight: 400,
              src: "local('Arial Italic')",
              ascentOverride: "96.18%",
              descentOverride: "27.48%",
              lineGapOverride: "0.00%",
              sizeAdjust: "101.89%",
            },
            {
              fontFamily: eg,
              fontStyle: eu,
              fontWeight: 500,
              src: "local('Arial Italic')",
              ascentOverride: "94.81%",
              descentOverride: "27.09%",
              lineGapOverride: "0.00%",
              sizeAdjust: "103.36%",
            },
            {
              fontFamily: eg,
              fontStyle: eu,
              fontWeight: 700,
              src: "local('Arial Bold Italic')",
              ascentOverride: "101.13%",
              descentOverride: "28.90%",
              lineGapOverride: "0.00%",
              sizeAdjust: "96.90%",
            },
            {
              fontFamily: eg,
              fontStyle: ef,
              fontWeight: 300,
              src: "local('Arial')",
              ascentOverride: "93.59%",
              descentOverride: "26.74%",
              lineGapOverride: "0.00%",
              sizeAdjust: "104.71%",
            },
            {
              fontFamily: eg,
              fontStyle: ef,
              fontWeight: 400,
              src: "local('Arial')",
              ascentOverride: "92.70%",
              descentOverride: "26.49%",
              lineGapOverride: "0.00%",
              sizeAdjust: "105.71%",
            },
            {
              fontFamily: eg,
              fontStyle: ef,
              fontWeight: 500,
              src: "local('Arial')",
              ascentOverride: "91.53%",
              descentOverride: "26.15%",
              lineGapOverride: "0.00%",
              sizeAdjust: "107.07%",
            },
            {
              fontFamily: eg,
              fontStyle: ef,
              fontWeight: 700,
              src: "local('Arial Bold')",
              ascentOverride: "97.74%",
              descentOverride: "27.93%",
              lineGapOverride: "0.00%",
              sizeAdjust: "100.26%",
            },
          ],
        }),
        ey = eo({
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
          },
        }),
        ev = ["baseline", "center", "flex-end", "flex-start", "stretch"],
        eb = [
          "center",
          "flex-end",
          "flex-start",
          "space-around",
          "space-between",
          "space-evenly",
        ],
        eS = ["column", "column-reverse", "row", "row-reverse"],
        ex = ["nowrap", "wrap", "wrap-reverse"],
        eB = en({
          colors: { ...i.x3, ...i.F2 },
          shadows: { ...i.pI, ...i.t0 },
        }),
        ew = en({
          colors: { ...i.x3, ...i.X3 },
          shadows: { ...i.pI, ...i.$y },
        }),
        eA =
          (Object.keys(ec.colors),
          Object.keys(ec.fontSizes),
          Object.keys(ec.space));
      function eD(e, t) {
        let r = {};
        for (let n of e) r[n] = t(n);
        return r;
      }
      let eF = ((...e) => Q().css(...e))({});
    },
    1841: function (e, t, r) {
      "use strict";
      r.d(t, {
        $y: function () {
          return p;
        },
        CM: function () {
          return f;
        },
        F2: function () {
          return g;
        },
        Fr: function () {
          return i;
        },
        OX: function () {
          return m;
        },
        X3: function () {
          return u;
        },
        XS: function () {
          return o;
        },
        g_: function () {
          return a;
        },
        pI: function () {
          return d;
        },
        sb: function () {
          return l;
        },
        t0: function () {
          return h;
        },
        v2: function () {
          return s;
        },
        wY: function () {
          return c;
        },
        x3: function () {
          return n;
        },
      });
      let n = {
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
          g050: "#ECFAD9",
          g100: "#d6f2ad",
          g200: "#bfe882",
          g300: "#a7db57",
          g400: "#8fcb2b",
          g500: "#76b900",
          g600: "#57920d",
          g700: "#407015",
          g800: "#2f521a",
          g900: "#23371a",
          g950: "#192116",
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
          tk000: "rgba(0,0,0,0.00)",
          tk050: "rgba(0,0,0,0.05)",
          tk100: "rgba(0,0,0,0.10)",
          tk120: "rgba(0,0,0,0.12)",
          tk150: "rgba(0,0,0,0.15)",
          tk200: "rgba(0,0,0,0.20)",
          tk300: "rgba(0,0,0,0.30)",
          tk400: "rgba(0,0,0,0.40)",
          tk500: "rgba(0,0,0,0.50)",
          tk600: "rgba(0,0,0,0.60)",
          tk700: "rgba(0,0,0,0.70)",
          tk800: "rgba(0,0,0,0.80)",
          tk900: "rgba(0,0,0,0.90)",
          tw000: "rgba(255,255,255,0.00)",
          tw050: "rgba(255,255,255,0.05)",
          tw100: "rgba(255,255,255,0.10)",
          tw120: "rgba(255,255,255,0.12)",
          tw250: "rgba(255,255,255,0.25)",
          tw200: "rgba(255,255,255,0.20)",
          tw300: "rgba(255,255,255,0.30)",
          tw400: "rgba(255,255,255,0.40)",
          tw500: "rgba(255,255,255,0.50)",
          tw600: "rgba(255,255,255,0.60)",
          tw700: "rgba(255,255,255,0.70)",
          tw800: "rgba(255,255,255,0.80)",
          tw900: "rgba(255,255,255,0.90)",
        },
        i =
          (Object.keys(n),
          { nvidiaSans: "NVIDIA Sans", jetbrainsMono: "JetBrains Mono" }),
        o =
          (Object.keys(i),
          { caps: "90%", text: "100%", heading: "125%", body: "150%" }),
        a =
          (Object.keys(o),
          {
            xxl: "48px",
            xl: "32px",
            lg: "24px",
            ml: "20px",
            md: "16px",
            ms: "14px",
            sm: "12px",
            xs: "10px",
          }),
        l =
          (Object.keys(a),
          { less: "-0.015rem", none: "0rem", more: "0.05rem" }),
        c =
          (Object.keys(l),
          {
            xxl: "1600px",
            xl: "1200px",
            lg: "992px",
            md: "768px",
            sm: "576px",
            xs: "320px",
          }),
        s =
          (Object.keys(c),
          {
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
          }),
        d =
          (Object.keys(s),
          {
            lightHigher: "0px 8px 10px 0 #00000026",
            lightHigh: "0px 4px 5px 0 #0000001f",
            lightMid: "0px 2px 3px 0 #00000024",
            lightLow: "0px 1px 3px 0 #00000033",
            darkHigher: "0px 8px 10px 0 #0000004d",
            darkHigh: "0px 4px 5px 0 #0000003d",
            darkMid: "0px 2px 4px 0 #00000047",
            darkLow: "0px 1px 3px 0 #00000066",
          }),
        f = (Object.keys(d), { lg: "4px", md: "2px", sm: "1px" }),
        u =
          (Object.keys(f),
          {
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
            displayBgAccent2Hover: "#407015",
            displayBgAccent2Active: "#a7db57",
            displayBgAccent2Solid: "#a7db57",
            displayBgAccent2SolidHover: "#bfe882",
            displayBgAccent2SolidActive: "#57920d",
            displayBgAccent2Bold: "#57920d",
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
            displayFgHighestSelected: "#76b900",
            displayFgHighestSelectedHover: "#8fcb2b",
            displayFgHigherPrimary: "#f2f2f2",
            displayFgHigherSecondary: "#c6c6c6",
            displayFgHigherDisabled: "#8f8f8f",
            displayFgHigherPlaceholder: "#767676",
            displayFgHigherStrong: "#ffffff",
            displayFgHigherSelected: "#76b900",
            displayFgHigherSelectedHover: "#8fcb2b",
            displayFgHighPrimary: "#f2f2f2",
            displayFgHighSecondary: "#c6c6c6",
            displayFgHighDisabled: "#8f8f8f",
            displayFgHighPlaceholder: "#767676",
            displayFgHighStrong: "#ffffff",
            displayFgHighSelected: "#76b900",
            displayFgHighSelectedHover: "#8fcb2b",
            displayFgMidPrimary: "#f2f2f2",
            displayFgMidSecondary: "#c6c6c6",
            displayFgMidDisabled: "#8f8f8f",
            displayFgMidPlaceholder: "#767676",
            displayFgMidStrong: "#ffffff",
            displayFgMidSelected: "#76b900",
            displayFgMidSelectedHover: "#8fcb2b",
            displayFgLowPrimary: "#f2f2f2",
            displayFgLowSecondary: "#c6c6c6",
            displayFgLowDisabled: "#8f8f8f",
            displayFgLowPlaceholder: "#767676",
            displayFgLowStrong: "#ffffff",
            displayFgLowSelected: "#76b900",
            displayFgLowSelectedHover: "#8fcb2b",
            displayFgAccent1: "#9accf2",
            displayFgAccent1Solid: "#001e4b",
            displayFgAccent1Bold: "#e9f4fb",
            displayFgAccent1Disabled: "#8f8f8f",
            displayFgAccent2: "#a7db57",
            displayFgAccent2Solid: "#23371a",
            displayFgAccent2Bold: "#ECFAD9",
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
            displayBorderHighestSelected: "#76b900",
            displayBorderHighestSelectedHover: "#8fcb2b",
            displayBorderHigher: "#5e5e5e",
            displayBorderHigherHover: "#8f8f8f",
            displayBorderHigherActive: "#d8d8d8",
            displayBorderHigherDisabled: "#292929",
            displayBorderHigherBase: "#343434",
            displayBorderHigherSelected: "#76b900",
            displayBorderHigherSelectedHover: "#8fcb2b",
            displayBorderHigh: "#5e5e5e",
            displayBorderHighHover: "#8f8f8f",
            displayBorderHighActive: "#d8d8d8",
            displayBorderHighDisabled: "#292929",
            displayBorderHighBase: "#292929",
            displayBorderHighSelected: "#76b900",
            displayBorderHighSelectedHover: "#8fcb2b",
            displayBorderMid: "#343434",
            displayBorderMidHover: "#767676",
            displayBorderMidActive: "#c6c6c6",
            displayBorderMidDisabled: "#292929",
            displayBorderMidBase: "#202020",
            displayBorderMidSelected: "#76b900",
            displayBorderMidSelectedHover: "#8fcb2b",
            displayBorderLow: "#343434",
            displayBorderLowHover: "#767676",
            displayBorderLowActive: "#c6c6c6",
            displayBorderLowDisabled: "#292929",
            displayBorderLowBase: "#121212",
            displayBorderLowSelected: "#76b900",
            displayBorderLowSelectedHover: "#8fcb2b",
            displayBorderAccent1: "#9accf2",
            displayBorderAccent1Disabled: "#8f8f8f",
            displayBorderAccent2: "#a7db57",
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
            menuBgComplete: "#8fcb2b",
            menuBgSelected: "#202020",
            menuBgDisabled: "#292929",
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
            menuBorderComplete: "#76b900",
            menuBorderSelected: "#76b900",
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
            inputFgSuccessMessage: "#76b900",
            inputFgLabel: "#c6c6c6",
            inputFgRequired: "#dc3528",
            inputFgIcon: "#c6c6c6",
            inputFgIconHover: "#f2f2f2",
            inputFgIconActive: "#f2f2f2",
            inputFgIconComplete: "#c6c6c6",
            inputFgIconDisabled: "#8f8f8f",
            inputFgIconError: "#dc3528",
            inputFgIconSuccess: "#76b900",
            inputBorderDefault: "#8f8f8f",
            inputBorderHover: "#d8d8d8",
            inputBorderActive: "#76b900",
            inputBorderComplete: "#8f8f8f",
            inputBorderDisabled: "#767676",
            inputBorderError: "#dc3528",
            inputBorderSuccess: "#76b900",
            actionBgDefault: "#292929",
            actionBgHover: "#121212",
            actionBgActive: "#000000",
            actionBgDisabled: "#202020",
            actionBgSelected: "#23371a",
            actionBgSelectedHover: "#2f521a",
            actionBgSelectedActive: "#407015",
            actionBgSelectedDisabled: "#202020",
            actionBgError: "#2d0100",
            actionBgErrorHover: "#480200",
            actionBgErrorActive: "#6c0d08",
            actionBgErrorDisabled: "#202020",
            actionBgPrimary: "#76b900",
            actionBgPrimaryHover: "#8fcb2b",
            actionBgPrimaryActive: "#a7db57",
            actionBgPrimaryDisabled: "#343434",
            actionBgSecondary: "rgba(255,255,255,0.00)",
            actionBgSecondaryHover: "rgba(255,255,255,0.12)",
            actionBgSecondaryActive: "rgba(255,255,255,0.25)",
            actionBgSecondaryDisabled: "rgba(255,255,255,0.00)",
            actionBgTertiary: "rgba(255,255,255,0.00)",
            actionBgTertiaryHover: "rgba(255,255,255,0.12)",
            actionBgTertiaryActive: "rgba(255,255,255,0.25)",
            actionBgTertiaryDisabled: "rgba(255,255,255,0.00)",
            actionBgSecondaryInverse: "rgba(0,0,0,0.00)",
            actionBgSecondaryInverseHover: "rgba(0,0,0,0.10)",
            actionBgSecondaryInverseActive: "rgba(0,0,0,0.20)",
            actionBgSecondaryInverseDisabled: "rgba(0,0,0,0.00)",
            actionBgTertiaryInverse: "rgba(0,0,0,0.00)",
            actionBgTertiaryInverseHover: "rgba(0,0,0,0.10)",
            actionBgTertiaryInverseActive: "rgba(0,0,0,0.20)",
            actionBgTertiaryInverseDisabled: "rgba(0,0,0,0.00)",
            actionBgPrimaryDanger: "#dc3528",
            actionBgPrimaryDangerHover: "#b6251b",
            actionBgPrimaryDangerActive: "#6c0d08",
            actionBgPrimaryDangerDisabled: "#343434",
            actionBgSecondaryDanger: "rgba(0,0,0,0.00)",
            actionBgSecondaryDangerHover: "#480200",
            actionBgSecondaryDangerActive: "#6c0d08",
            actionBgSecondaryDangerDisabled: "rgba(0,0,0,0.00)",
            actionBgTertiaryDanger: "rgba(0,0,0,0.00)",
            actionBgTertiaryDangerHover: "#480200",
            actionBgTertiaryDangerActive: "#6c0d08",
            actionBgTertiaryDangerDisabled: "rgba(0,0,0,0.00)",
            actionBgBase: "#5e5e5e",
            actionBgBaseDisabled: "#343434",
            actionBgOn: "#76b900",
            actionBgOnDisabled: "#407015",
            actionFgDefault: "#f2f2f2",
            actionFgHover: "#f2f2f2",
            actionFgActive: "#f2f2f2",
            actionFgDisabled: "#8f8f8f",
            actionFgStrong: "#ffffff",
            actionFgSelected: "#76b900",
            actionFgSelectedHover: "#57920d",
            actionFgSelectedActive: "#a7db57",
            actionFgSelectedDisabled: "#8f8f8f",
            actionFgError: "#dc3528",
            actionFgErrorHover: "#b6251b",
            actionFgErrorActive: "#ec6358",
            actionFgErrorDisabled: "#8f8f8f",
            actionFgPrimary: "#202020",
            actionFgPrimaryHover: "#202020",
            actionFgPrimaryActive: "#202020",
            actionFgPrimaryDisabled: "#c6c6c6",
            actionFgSecondary: "#f2f2f2",
            actionFgSecondaryHover: "#f2f2f2",
            actionFgSecondaryActive: "#f2f2f2",
            actionFgSecondaryDisabled: "#c6c6c6",
            actionFgTertiary: "#f2f2f2",
            actionFgTertiaryHover: "#f2f2f2",
            actionFgTertiaryActive: "#f2f2f2",
            actionFgTertiaryDisabled: "#c6c6c6",
            actionFgSecondaryInverse: "#000000",
            actionFgSecondaryInverseHover: "#000000",
            actionFgSecondaryInverseActive: "#000000",
            actionFgSecondaryInverseDisabled: "#767676",
            actionFgTertiaryInverse: "#000000",
            actionFgTertiaryInverseHover: "#000000",
            actionFgTertiaryInverseActive: "#000000",
            actionFgTertiaryInverseDisabled: "#767676",
            actionFgPrimaryDanger: "#ffffff",
            actionFgPrimaryDangerHover: "#ffffff",
            actionFgPrimaryDangerActive: "#ffffff",
            actionFgPrimaryDangerDisabled: "#c6c6c6",
            actionFgSecondaryDanger: "#dc3528",
            actionFgSecondaryDangerHover: "#ec6358",
            actionFgSecondaryDangerActive: "#feb3ad",
            actionFgSecondaryDangerDisabled: "#c6c6c6",
            actionFgTertiaryDanger: "#dc3528",
            actionFgTertiaryDangerHover: "#ec6358",
            actionFgTertiaryDangerActive: "#feb3ad",
            actionFgTertiaryDangerDisabled: "#c6c6c6",
            actionFgInverse: "#ffffff",
            actionFgOn: "#ffffff",
            actionFgOnDisabled: "#8f8f8f",
            actionBorderDefault: "#767676",
            actionBorderHover: "#8f8f8f",
            actionBorderActive: "#d8d8d8",
            actionBorderDisabled: "#5e5e5e",
            actionBorderSelected: "#76b900",
            actionBorderSelectedHover: "#57920d",
            actionBorderSelectedActive: "#a7db57",
            actionBorderSelectedDisabled: "#343434",
            actionBorderError: "#dc3528",
            actionBorderErrorHover: "#b6251b",
            actionBorderErrorActive: "#ec6358",
            actionBorderErrorDisabled: "#343434",
            actionBorderPrimary: "#76b900",
            actionBorderPrimaryHover: "#a7db57",
            actionBorderPrimaryActive: "#a7db57",
            actionBorderPrimaryDisabled: "#343434",
            actionBorderSecondary: "#e2e2e2",
            actionBorderSecondaryHover: "#ffffff",
            actionBorderSecondaryActive: "#ffffff",
            actionBorderSecondaryDisabled: "#c6c6c6",
            actionBorderSecondaryInverse: "#000000",
            actionBorderSecondaryInverseHover: "#000000",
            actionBorderSecondaryInverseActive: "#000000",
            actionBorderSecondaryInverseDisabled: "#767676",
            actionBorderPrimaryDanger: "#dc3528",
            actionBorderPrimaryDangerHover: "#ec6358",
            actionBorderPrimaryDangerActive: "#ec6358",
            actionBorderPrimaryDangerDisabled: "#343434",
            actionBorderSecondaryDanger: "#dc3528",
            actionBorderSecondaryDangerHover: "#dc3528",
            actionBorderSecondaryDangerActive: "#ec6358",
            actionBorderSecondaryDangerDisabled: "#c6c6c6",
            actionBorderInverse: "#ffffff",
            actionBorderBase: "#767676",
            feedbackBgInfo: "#cde6fa",
            feedbackBgInfoSolid: "#2378ca",
            feedbackBgSuccess: "#d6f2ad",
            feedbackBgSuccessSolid: "#76b900",
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
            feedbackFgSuccess: "#76b900",
            feedbackFgSuccessHover: "#57920d",
            feedbackFgSuccessActive: "#407015",
            feedbackFgCaution: "#a96700",
            feedbackFgCautionHover: "#924c00",
            feedbackFgCautionActive: "#5a2400",
            feedbackFgError: "#dc3528",
            feedbackFgErrorHover: "#b6251b",
            feedbackFgErrorActive: "#6c0d08",
            feedbackFgNeutral: "#5e5e5e",
            feedbackFgNeutralHover: "#343434",
            feedbackFgNeutralActive: "#000000",
            feedbackFgProgress: "#76b900",
            feedbackFgProgressActive: "#407015",
            feedbackFgTooltip: "#f2f2f2",
            feedbackFgPrimary: "#f2f2f2",
            feedbackFgSecondary: "#c6c6c6",
            feedbackFgInverse: "#ffffff",
            feedbackFgReverse: "#202020",
            feedbackBorderInfo: "#2378ca",
            feedbackBorderSucces: "#76b900",
            feedbackBorderCaution: "#a96700",
            feedbackBorderError: "#dc3528",
            feedbackBorderNeutral: "#8f8f8f",
            feedbackBorderProgress: "#5e5e5e",
            feedbackBorderTooltip: "#5e5e5e",
          }),
        p =
          (Object.keys(u),
          {
            displayModal: "0px 8px 10px 0 #0000004d",
            displayPageHeader: "0px 2px 4px 0 #00000047",
            displayPopover: "0px 4px 5px 0 #0000003d",
            displayCarouselButton: "0px 2px 3px 0 #00000024",
            displaySidePanelRight: "-4px 0px 5px 0 #00000040",
            displaySidePanelLeft: "4px 0px 5px 0 #00000040",
            feedbackTooltip: "0px 4px 5px 0 #0000003d",
            feedbackNotification: "0px 4px 5px 0 #0000003d",
            menuDropdown: "0px 4px 5px 0 #0000003d",
            menuPopout: "0px 2px 4px 0 #00000047",
            inputToggle: "0px 1px 3px 0 #00000066",
          }),
        g =
          (Object.keys(p),
          {
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
            displayBgAccent2Hover: "#ECFAD9",
            displayBgAccent2Active: "#57920d",
            displayBgAccent2Solid: "#ECFAD9",
            displayBgAccent2SolidHover: "#d6f2ad",
            displayBgAccent2SolidActive: "#57920d",
            displayBgAccent2Bold: "#57920d",
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
            displayFgHighestSelected: "#76b900",
            displayFgHighestSelectedHover: "#57920d",
            displayFgHigherPrimary: "#202020",
            displayFgHigherSecondary: "#5e5e5e",
            displayFgHigherDisabled: "#767676",
            displayFgHigherPlaceholder: "#8f8f8f",
            displayFgHigherStrong: "#000000",
            displayFgHigherSelected: "#76b900",
            displayFgHigherSelectedHover: "#57920d",
            displayFgHighPrimary: "#202020",
            displayFgHighSecondary: "#5e5e5e",
            displayFgHighDisabled: "#767676",
            displayFgHighPlaceholder: "#8f8f8f",
            displayFgHighStrong: "#000000",
            displayFgHighSelected: "#76b900",
            displayFgHighSelectedHover: "#57920d",
            displayFgMidPrimary: "#202020",
            displayFgMidSecondary: "#5e5e5e",
            displayFgMidDisabled: "#767676",
            displayFgMidPlaceholder: "#8f8f8f",
            displayFgMidStrong: "#000000",
            displayFgMidSelected: "#76b900",
            displayFgMidSelectedHover: "#57920d",
            displayFgLowPrimary: "#202020",
            displayFgLowSecondary: "#5e5e5e",
            displayFgLowDisabled: "#767676",
            displayFgLowPlaceholder: "#8f8f8f",
            displayFgLowStrong: "#000000",
            displayFgLowSelected: "#76b900",
            displayFgLowSelectedHover: "#57920d",
            displayFgAccent1: "#2a63ba",
            displayFgAccent1Solid: "#2a63ba",
            displayFgAccent1Bold: "#e9f4fb",
            displayFgAccent1Disabled: "#8f8f8f",
            displayFgAccent2: "#57920d",
            displayFgAccent2Solid: "#57920d",
            displayFgAccent2Bold: "#ECFAD9",
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
            displayBorderHighestSelected: "#76b900",
            displayBorderHighestSelectedHover: "#57920d",
            displayBorderHigher: "#d8d8d8",
            displayBorderHigherHover: "#8f8f8f",
            displayBorderHigherActive: "#5e5e5e",
            displayBorderHigherDisabled: "#e2e2e2",
            displayBorderHigherBase: "#ffffff",
            displayBorderHigherSelected: "#76b900",
            displayBorderHigherSelectedHover: "#57920d",
            displayBorderHigh: "#d8d8d8",
            displayBorderHighHover: "#8f8f8f",
            displayBorderHighActive: "#5e5e5e",
            displayBorderHighDisabled: "#e2e2e2",
            displayBorderHighBase: "#ffffff",
            displayBorderHighSelected: "#76b900",
            displayBorderHighSelectedHover: "#57920d",
            displayBorderMid: "#d8d8d8",
            displayBorderMidHover: "#8f8f8f",
            displayBorderMidActive: "#5e5e5e",
            displayBorderMidDisabled: "#e2e2e2",
            displayBorderMidBase: "#ffffff",
            displayBorderMidSelected: "#76b900",
            displayBorderMidSelectedHover: "#57920d",
            displayBorderLow: "#d8d8d8",
            displayBorderLowHover: "#8f8f8f",
            displayBorderLowActive: "#5e5e5e",
            displayBorderLowDisabled: "#e2e2e2",
            displayBorderLowBase: "#f2f2f2",
            displayBorderLowSelected: "#76b900",
            displayBorderLowSelectedHover: "#57920d",
            displayBorderAccent1: "#2a63ba",
            displayBorderAccent1Disabled: "#8f8f8f",
            displayBorderAccent2: "#57920d",
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
            menuBgComplete: "#8fcb2b",
            menuBgSelected: "#f2f2f2",
            menuBgDisabled: "#ffffff",
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
            menuBorderComplete: "#76b900",
            menuBorderSelected: "#76b900",
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
            inputFgSuccessMessage: "#76b900",
            inputFgLabel: "#5e5e5e",
            inputFgRequired: "#dc3528",
            inputFgIcon: "#5e5e5e",
            inputFgIconHover: "#202020",
            inputFgIconActive: "#202020",
            inputFgIconComplete: "#5e5e5e",
            inputFgIconDisabled: "#767676",
            inputFgIconError: "#dc3528",
            inputFgIconSuccess: "#76b900",
            inputBorderDefault: "#c6c6c6",
            inputBorderHover: "#767676",
            inputBorderActive: "#76b900",
            inputBorderComplete: "#c6c6c6",
            inputBorderDisabled: "#d8d8d8",
            inputBorderError: "#dc3528",
            inputBorderSuccess: "#76b900",
            actionBgDefault: "#ffffff",
            actionBgHover: "#e2e2e2",
            actionBgActive: "#c6c6c6",
            actionBgDisabled: "#f2f2f2",
            actionBgSelected: "#ECFAD9",
            actionBgSelectedHover: "#d6f2ad",
            actionBgSelectedActive: "#a7db57",
            actionBgSelectedDisabled: "#f2f2f2",
            actionBgError: "#ffefed",
            actionBgErrorHover: "#ffdad6",
            actionBgErrorActive: "#feb3ad",
            actionBgErrorDisabled: "#f2f2f2",
            actionBgPrimary: "#76b900",
            actionBgPrimaryHover: "#8fcb2b",
            actionBgPrimaryActive: "#a7db57",
            actionBgPrimaryDisabled: "#d8d8d8",
            actionBgSecondary: "rgba(0,0,0,0.00)",
            actionBgSecondaryHover: "rgba(0,0,0,0.05)",
            actionBgSecondaryActive: "rgba(0,0,0,0.15)",
            actionBgSecondaryDisabled: "rgba(0,0,0,0.00)",
            actionBgTertiary: "rgba(0,0,0,0.00)",
            actionBgTertiaryHover: "rgba(0,0,0,0.05)",
            actionBgTertiaryActive: "rgba(0,0,0,0.15)",
            actionBgTertiaryDisabled: "rgba(0,0,0,0.00)",
            actionBgSecondaryInverse: "rgba(0,0,0,0.00)",
            actionBgSecondaryInverseHover: "rgba(0,0,0,0.10)",
            actionBgSecondaryInverseActive: "rgba(0,0,0,0.20)",
            actionBgSecondaryInverseDisabled: "rgba(0,0,0,0.00)",
            actionBgTertiaryInverse: "rgba(0,0,0,0.00)",
            actionBgTertiaryInverseHover: "rgba(0,0,0,0.10)",
            actionBgTertiaryInverseActive: "rgba(0,0,0,0.20)",
            actionBgTertiaryInverseDisabled: "rgba(0,0,0,0.00)",
            actionBgPrimaryDanger: "#dc3528",
            actionBgPrimaryDangerHover: "#b6251b",
            actionBgPrimaryDangerActive: "#570704",
            actionBgPrimaryDangerDisabled: "#d8d8d8",
            actionBgSecondaryDanger: "rgba(0,0,0,0.00)",
            actionBgSecondaryDangerHover: "#ffdad6",
            actionBgSecondaryDangerActive: "#feb3ad",
            actionBgSecondaryDangerDisabled: "rgba(0,0,0,0.00)",
            actionBgTertiaryDanger: "rgba(0,0,0,0.00)",
            actionBgTertiaryDangerHover: "#ffdad6",
            actionBgTertiaryDangerActive: "#feb3ad",
            actionBgTertiaryDangerDisabled: "rgba(0,0,0,0.00)",
            actionBgBase: "#c6c6c6",
            actionBgBaseDisabled: "#e2e2e2",
            actionBgOn: "#76b900",
            actionBgOnDisabled: "#a7db57",
            actionFgDefault: "#202020",
            actionFgHover: "#202020",
            actionFgActive: "#202020",
            actionFgDisabled: "#767676",
            actionFgStrong: "#000000",
            actionFgSelected: "#76b900",
            actionFgSelectedHover: "#57920d",
            actionFgSelectedActive: "#407015",
            actionFgSelectedDisabled: "#767676",
            actionFgError: "#dc3528",
            actionFgErrorHover: "#b6251b",
            actionFgErrorActive: "#570704",
            actionFgErrorDisabled: "#767676",
            actionFgPrimary: "#202020",
            actionFgPrimaryHover: "#202020",
            actionFgPrimaryActive: "#202020",
            actionFgPrimaryDisabled: "#767676",
            actionFgSecondary: "#202020",
            actionFgSecondaryHover: "#202020",
            actionFgSecondaryActive: "#202020",
            actionFgSecondaryDisabled: "#8f8f8f",
            actionFgTertiary: "#202020",
            actionFgTertiaryHover: "#202020",
            actionFgTertiaryActive: "#202020",
            actionFgTertiaryDisabled: "#8f8f8f",
            actionFgSecondaryInverse: "#ffffff",
            actionFgSecondaryInverseHover: "#ffffff",
            actionFgSecondaryInverseActive: "#ffffff",
            actionFgSecondaryInverseDisabled: "#d8d8d8",
            actionFgTertiaryInverse: "#ffffff",
            actionFgTertiaryInverseHover: "#ffffff",
            actionFgTertiaryInverseActive: "#ffffff",
            actionFgTertiaryInverseDisabled: "#d8d8d8",
            actionFgPrimaryDanger: "#ffffff",
            actionFgPrimaryDangerHover: "#ffffff",
            actionFgPrimaryDangerActive: "#ffffff",
            actionFgPrimaryDangerDisabled: "#767676",
            actionFgSecondaryDanger: "#dc3528",
            actionFgSecondaryDangerHover: "#b6251b",
            actionFgSecondaryDangerActive: "#6c0d08",
            actionFgSecondaryDangerDisabled: "#8f8f8f",
            actionFgTertiaryDanger: "#dc3528",
            actionFgTertiaryDangerHover: "#b6251b",
            actionFgTertiaryDangerActive: "#6c0d08",
            actionFgTertiaryDangerDisabled: "#8f8f8f",
            actionFgInverse: "#ffffff",
            actionFgOn: "#ffffff",
            actionFgOnDisabled: "#f2f2f2",
            actionBorderDefault: "#8f8f8f",
            actionBorderHover: "#767676",
            actionBorderActive: "#343434",
            actionBorderDisabled: "#c6c6c6",
            actionBorderSelected: "#76b900",
            actionBorderSelectedHover: "#57920d",
            actionBorderSelectedActive: "#407015",
            actionBorderSelectedDisabled: "#d8d8d8",
            actionBorderError: "#dc3528",
            actionBorderErrorHover: "#b6251b",
            actionBorderErrorActive: "#570704",
            actionBorderErrorDisabled: "#d8d8d8",
            actionBorderPrimary: "#76b900",
            actionBorderPrimaryHover: "#a7db57",
            actionBorderPrimaryActive: "#a7db57",
            actionBorderPrimaryDisabled: "#d8d8d8",
            actionBorderSecondary: "#5e5e5e",
            actionBorderSecondaryHover: "#202020",
            actionBorderSecondaryActive: "#202020",
            actionBorderSecondaryDisabled: "#8f8f8f",
            actionBorderSecondaryInverse: "#ffffff",
            actionBorderSecondaryInverseHover: "#ffffff",
            actionBorderSecondaryInverseActive: "#ffffff",
            actionBorderSecondaryInverseDisabled: "#d8d8d8",
            actionBorderPrimaryDanger: "#dc3528",
            actionBorderPrimaryDangerHover: "#570704",
            actionBorderPrimaryDangerActive: "#570704",
            actionBorderPrimaryDangerDisabled: "#d8d8d8",
            actionBorderSecondaryDanger: "#dc3528",
            actionBorderSecondaryDangerHover: "#dc3528",
            actionBorderSecondaryDangerActive: "#6c0d08",
            actionBorderSecondaryDangerDisabled: "#8f8f8f",
            actionBorderInverse: "#ffffff",
            actionBorderBase: "#8f8f8f",
            feedbackBgInfo: "#e9f4fb",
            feedbackBgInfoSolid: "#2378ca",
            feedbackBgSuccess: "#ECFAD9",
            feedbackBgSuccessSolid: "#76b900",
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
            feedbackFgSuccess: "#76b900",
            feedbackFgSuccessHover: "#57920d",
            feedbackFgSuccessActive: "#407015",
            feedbackFgCaution: "#a96700",
            feedbackFgCautionHover: "#924c00",
            feedbackFgCautionActive: "#5a2400",
            feedbackFgError: "#dc3528",
            feedbackFgErrorHover: "#b6251b",
            feedbackFgErrorActive: "#6c0d08",
            feedbackFgNeutral: "#5e5e5e",
            feedbackFgNeutralHover: "#343434",
            feedbackFgNeutralActive: "#000000",
            feedbackFgProgress: "#76b900",
            feedbackFgProgressActive: "#407015",
            feedbackFgTooltip: "#f2f2f2",
            feedbackFgPrimary: "#202020",
            feedbackFgSecondary: "#5e5e5e",
            feedbackFgInverse: "#ffffff",
            feedbackFgReverse: "#202020",
            feedbackBorderInfo: "#2378ca",
            feedbackBorderSuccess: "#76b900",
            feedbackBorderCaution: "#a96700",
            feedbackBorderError: "#dc3528",
            feedbackBorderNeutral: "#8f8f8f",
            feedbackBorderProgress: "#d8d8d8",
            feedbackBorderTooltip: "#d8d8d8",
          }),
        h =
          (Object.keys(g),
          {
            displayModal: "0px 8px 10px 0 #00000026",
            displayPageHeader: "0px 2px 3px 0 #00000024",
            displayPopover: "0px 4px 5px 0 #0000001f",
            displayCarouselButton: "0px 2px 3px 0 #00000024",
            displaySidePanelRight: "-4px 0px 5px 0 #0000001f",
            displaySidePanelLeft: "4px 0px 5px 0 #0000001f",
            feedbackTooltip: "0px 4px 5px 0 #0000001f",
            feedbackNotification: "0px 4px 5px 0 #0000001f",
            menuDropdown: "0px 4px 5px 0 #0000001f",
            menuPopout: "0px 2px 3px 0 #00000024",
            inputToggle: "0px 1px 3px 0 #00000033",
          }),
        m =
          (Object.keys(h),
          {
            displayAccordionHeader: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayAccordionBody: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayAvatarInitialsXsmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "150%",
              fontSize: "10px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayAvatarInitialsSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "150%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayAvatarInitialsMedium: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "150%",
              fontSize: "20px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayAvatarInitialsLarge: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "150%",
              fontSize: "32px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayAvatarInitialsXlarge: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "125%",
              fontSize: "48px",
              letterSpacing: "-0.015rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayCardHeader: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "125%",
              fontSize: "16px",
              letterSpacing: "-0.015rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayCardSubhead: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayCardBody: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayHeroHeadlineSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "125%",
              fontSize: "32px",
              letterSpacing: "-0.015rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayHeroSubheadSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "90%",
              fontSize: "12px",
              letterSpacing: "0.05rem",
              paragraphSpacing: "0",
              textCase: "uppercase",
              textDecoration: "none",
            },
            displayHeroSubtextSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "16px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayHeroHeadlineMedium: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "125%",
              fontSize: "32px",
              letterSpacing: "-0.015rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayHeroSubheadMedium: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "90%",
              fontSize: "16px",
              letterSpacing: "0.05rem",
              paragraphSpacing: "0",
              textCase: "uppercase",
              textDecoration: "none",
            },
            displayHeroSubtextMedium: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "20px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayHeroHeadlineLarge: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "125%",
              fontSize: "48px",
              letterSpacing: "-0.015rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayHeroSubheadLarge: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "90%",
              fontSize: "20px",
              letterSpacing: "0.05rem",
              paragraphSpacing: "0",
              textCase: "uppercase",
              textDecoration: "none",
            },
            displayHeroSubtextLarge: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "24px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayModalHeader: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "125%",
              fontSize: "20px",
              letterSpacing: "-0.015rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayModalMessage: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayModalLink: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "underline",
            },
            displayPageHeaderTitle: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "125%",
              fontSize: "24px",
              letterSpacing: "-0.015rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displaySidePanelHeader: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "16px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displaySidePanelLabel: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displaySidePanelBody: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayTableHeader: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayTableCell: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayTagDefault: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            displayBadgeDefault: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "90%",
              fontSize: "10px",
              letterSpacing: "0.05rem",
              paragraphSpacing: "0",
              textCase: "uppercase",
              textDecoration: "none",
            },
            menuAppBarProduct: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuAppBarUsername: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuAppBarContext: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuBreadcrumbDefault: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuBreadcrumbHover: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "underline",
            },
            menuBreadcrumbActive: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuBreadcrumbDefaultSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuBreadcrumbHoverSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "underline",
            },
            menuBreadcrumbActiveSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuNavDefault: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuNavActive: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuNavSubhead: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuMenuDefault: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuMenuLarge: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "16px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuMenuSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuMenuHeader: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "90%",
              fontSize: "12px",
              letterSpacing: "0.05rem",
              paragraphSpacing: "0",
              textCase: "uppercase",
              textDecoration: "none",
            },
            menuMenuFooter: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuPaginationDefault: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuPaginationActive: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuTabDefault: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            menuTabActive: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputStandard: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputTextarea: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputLabel: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputStrong: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputValidation: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputLarge: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "16px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputLargeTextarea: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "16px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputLargeLabel: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputLargeStrong: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "16px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputLargeValidation: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputSmallTextarea: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputSmallLabel: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputSmallStrong: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputSmallValidation: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputInterval: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            inputIntervalStrong: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Bold",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            actionButtonStandard: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            actionButtonLarge: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "16px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            actionButtonSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            actionButtonTiny: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            actionCheckboxBase: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            actionRadioBase: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "100%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            feedbackBodyMessage: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            feedbackBodyLink: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Regular",
              lineHeight: "150%",
              fontSize: "14px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "underline",
            },
            feedbackHeadlineMedium: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "125%",
              fontSize: "24px",
              letterSpacing: "-0.015rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            feedbackHeadlineSmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "125%",
              fontSize: "20px",
              letterSpacing: "-0.015rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            feedbackHeadlineXsmall: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "125%",
              fontSize: "16px",
              letterSpacing: "-0.015rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
            feedbackTooltipMessage: {
              fontFamily: "NVIDIA Sans",
              fontWeight: "Medium",
              lineHeight: "100%",
              fontSize: "12px",
              letterSpacing: "0rem",
              paragraphSpacing: "0",
              textCase: "none",
              textDecoration: "none",
            },
          });
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
