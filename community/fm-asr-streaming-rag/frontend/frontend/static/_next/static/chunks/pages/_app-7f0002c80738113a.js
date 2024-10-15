(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    4184: function (d, f) {
      var h;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var S = {}.hasOwnProperty;
        function classNames() {
          for (var d = [], f = 0; f < arguments.length; f++) {
            var h = arguments[f];
            if (h) {
              var w = typeof h;
              if ("string" === w || "number" === w) d.push(h);
              else if (Array.isArray(h)) {
                if (h.length) {
                  var B = classNames.apply(null, h);
                  B && d.push(B);
                }
              } else if ("object" === w) {
                if (
                  h.toString !== Object.prototype.toString &&
                  !h.toString.toString().includes("[native code]")
                ) {
                  d.push(h.toString());
                  continue;
                }
                for (var D in h) S.call(h, D) && h[D] && d.push(D);
              }
            }
          }
          return d.join(" ");
        }
        d.exports
          ? ((classNames.default = classNames), (d.exports = classNames))
          : void 0 !==
              (h = function () {
                return classNames;
              }.apply(f, [])) && (d.exports = h);
      })();
    },
    8875: function (d, f, h) {
      var S, w, B;
      (B = {
        canUseDOM: (w = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        )),
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners:
          w && !!(window.addEventListener || window.attachEvent),
        canUseViewport: w && !!window.screen,
      }),
        void 0 !==
          (S = function () {
            return B;
          }.call(f, h, f, d)) && (d.exports = S);
    },
    6840: function (d, f, h) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return h(221);
        },
      ]);
    },
    7498: function (d, f) {
      "use strict";
      var h, S;
      Object.defineProperty(f, "__esModule", { value: !0 }),
        (function (d, f) {
          for (var h in f)
            Object.defineProperty(d, h, { enumerable: !0, get: f[h] });
        })(f, {
          PrefetchKind: function () {
            return h;
          },
          ACTION_REFRESH: function () {
            return w;
          },
          ACTION_NAVIGATE: function () {
            return B;
          },
          ACTION_RESTORE: function () {
            return D;
          },
          ACTION_SERVER_PATCH: function () {
            return F;
          },
          ACTION_PREFETCH: function () {
            return H;
          },
          ACTION_FAST_REFRESH: function () {
            return $;
          },
          ACTION_SERVER_ACTION: function () {
            return M;
          },
        });
      let w = "refresh",
        B = "navigate",
        D = "restore",
        F = "server-patch",
        H = "prefetch",
        $ = "fast-refresh",
        M = "server-action";
      ((S = h || (h = {})).AUTO = "auto"),
        (S.FULL = "full"),
        (S.TEMPORARY = "temporary"),
        ("function" == typeof f.default ||
          ("object" == typeof f.default && null !== f.default)) &&
          void 0 === f.default.__esModule &&
          (Object.defineProperty(f.default, "__esModule", { value: !0 }),
          Object.assign(f.default, f),
          (d.exports = f.default));
    },
    30: function (d, f, h) {
      "use strict";
      function getDomainLocale(d, f, h, S) {
        return !1;
      }
      Object.defineProperty(f, "__esModule", { value: !0 }),
        Object.defineProperty(f, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        }),
        h(2866),
        ("function" == typeof f.default ||
          ("object" == typeof f.default && null !== f.default)) &&
          void 0 === f.default.__esModule &&
          (Object.defineProperty(f.default, "__esModule", { value: !0 }),
          Object.assign(f.default, f),
          (d.exports = f.default));
    },
    5170: function (d, f, h) {
      "use strict";
      Object.defineProperty(f, "__esModule", { value: !0 }),
        Object.defineProperty(f, "default", {
          enumerable: !0,
          get: function () {
            return ee;
          },
        });
      let S = h(8754),
        w = S._(h(7294)),
        B = h(4450),
        D = h(2227),
        F = h(4364),
        H = h(109),
        $ = h(3607),
        M = h(1823),
        V = h(9031),
        j = h(920),
        Z = h(30),
        q = h(7192),
        K = h(7498),
        J = new Set();
      function prefetch(d, f, h, S, w, B) {
        if (!B && !(0, D.isLocalURL)(f)) return;
        if (!S.bypassPrefetchedCheck) {
          let w =
              void 0 !== S.locale
                ? S.locale
                : "locale" in d
                ? d.locale
                : void 0,
            B = f + "%" + h + "%" + w;
          if (J.has(B)) return;
          J.add(B);
        }
        let F = B ? d.prefetch(f, w) : d.prefetch(f, h, S);
        Promise.resolve(F).catch((d) => {});
      }
      function formatStringOrUrl(d) {
        return "string" == typeof d ? d : (0, F.formatUrl)(d);
      }
      let Q = w.default.forwardRef(function (d, f) {
          let h, S;
          let {
            href: F,
            as: J,
            children: Q,
            prefetch: ee = null,
            passHref: et,
            replace: er,
            shallow: en,
            scroll: eo,
            locale: ei,
            onClick: ea,
            onMouseEnter: el,
            onTouchStart: ec,
            legacyBehavior: es = !1,
            ...ed
          } = d;
          (h = Q),
            es &&
              ("string" == typeof h || "number" == typeof h) &&
              (h = w.default.createElement("a", null, h));
          let ef = w.default.useContext(M.RouterContext),
            eu = w.default.useContext(V.AppRouterContext),
            eg = null != ef ? ef : eu,
            ep = !ef,
            em = !1 !== ee,
            eh = null === ee ? K.PrefetchKind.AUTO : K.PrefetchKind.FULL,
            { href: eb, as: ey } = w.default.useMemo(() => {
              if (!ef) {
                let d = formatStringOrUrl(F);
                return { href: d, as: J ? formatStringOrUrl(J) : d };
              }
              let [d, f] = (0, B.resolveHref)(ef, F, !0);
              return { href: d, as: J ? (0, B.resolveHref)(ef, J) : f || d };
            }, [ef, F, J]),
            ev = w.default.useRef(eb),
            e_ = w.default.useRef(ey);
          es && (S = w.default.Children.only(h));
          let eS = es ? S && "object" == typeof S && S.ref : f,
            [ex, ew, eB] = (0, j.useIntersection)({ rootMargin: "200px" }),
            eA = w.default.useCallback(
              (d) => {
                (e_.current !== ey || ev.current !== eb) &&
                  (eB(), (e_.current = ey), (ev.current = eb)),
                  ex(d),
                  eS &&
                    ("function" == typeof eS
                      ? eS(d)
                      : "object" == typeof eS && (eS.current = d));
              },
              [ey, eS, eb, eB, ex]
            );
          w.default.useEffect(() => {
            eg &&
              ew &&
              em &&
              prefetch(eg, eb, ey, { locale: ei }, { kind: eh }, ep);
          }, [ey, eb, ew, ei, em, null == ef ? void 0 : ef.locale, eg, ep, eh]);
          let eD = {
            ref: eA,
            onClick(d) {
              es || "function" != typeof ea || ea(d),
                es &&
                  S.props &&
                  "function" == typeof S.props.onClick &&
                  S.props.onClick(d),
                eg &&
                  !d.defaultPrevented &&
                  (function (d, f, h, S, B, F, H, $, M, V) {
                    let { nodeName: j } = d.currentTarget,
                      Z = "A" === j.toUpperCase();
                    if (
                      Z &&
                      ((function (d) {
                        let f = d.currentTarget,
                          h = f.getAttribute("target");
                        return (
                          (h && "_self" !== h) ||
                          d.metaKey ||
                          d.ctrlKey ||
                          d.shiftKey ||
                          d.altKey ||
                          (d.nativeEvent && 2 === d.nativeEvent.which)
                        );
                      })(d) ||
                        (!M && !(0, D.isLocalURL)(h)))
                    )
                      return;
                    d.preventDefault();
                    let navigate = () => {
                      let d = null == H || H;
                      "beforePopState" in f
                        ? f[B ? "replace" : "push"](h, S, {
                            shallow: F,
                            locale: $,
                            scroll: d,
                          })
                        : f[B ? "replace" : "push"](S || h, {
                            forceOptimisticNavigation: !V,
                            scroll: d,
                          });
                    };
                    M ? w.default.startTransition(navigate) : navigate();
                  })(d, eg, eb, ey, er, en, eo, ei, ep, em);
            },
            onMouseEnter(d) {
              es || "function" != typeof el || el(d),
                es &&
                  S.props &&
                  "function" == typeof S.props.onMouseEnter &&
                  S.props.onMouseEnter(d),
                eg &&
                  (em || !ep) &&
                  prefetch(
                    eg,
                    eb,
                    ey,
                    { locale: ei, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: eh },
                    ep
                  );
            },
            onTouchStart(d) {
              es || "function" != typeof ec || ec(d),
                es &&
                  S.props &&
                  "function" == typeof S.props.onTouchStart &&
                  S.props.onTouchStart(d),
                eg &&
                  (em || !ep) &&
                  prefetch(
                    eg,
                    eb,
                    ey,
                    { locale: ei, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: eh },
                    ep
                  );
            },
          };
          if ((0, H.isAbsoluteUrl)(ey)) eD.href = ey;
          else if (!es || et || ("a" === S.type && !("href" in S.props))) {
            let d = void 0 !== ei ? ei : null == ef ? void 0 : ef.locale,
              f =
                (null == ef ? void 0 : ef.isLocaleDomain) &&
                (0, Z.getDomainLocale)(
                  ey,
                  d,
                  null == ef ? void 0 : ef.locales,
                  null == ef ? void 0 : ef.domainLocales
                );
            eD.href =
              f ||
              (0, q.addBasePath)(
                (0, $.addLocale)(ey, d, null == ef ? void 0 : ef.defaultLocale)
              );
          }
          return es
            ? w.default.cloneElement(S, eD)
            : w.default.createElement("a", { ...ed, ...eD }, h);
        }),
        ee = Q;
      ("function" == typeof f.default ||
        ("object" == typeof f.default && null !== f.default)) &&
        void 0 === f.default.__esModule &&
        (Object.defineProperty(f.default, "__esModule", { value: !0 }),
        Object.assign(f.default, f),
        (d.exports = f.default));
    },
    920: function (d, f, h) {
      "use strict";
      Object.defineProperty(f, "__esModule", { value: !0 }),
        Object.defineProperty(f, "useIntersection", {
          enumerable: !0,
          get: function () {
            return useIntersection;
          },
        });
      let S = h(7294),
        w = h(3436),
        B = "function" == typeof IntersectionObserver,
        D = new Map(),
        F = [];
      function useIntersection(d) {
        let { rootRef: f, rootMargin: h, disabled: H } = d,
          $ = H || !B,
          [M, V] = (0, S.useState)(!1),
          j = (0, S.useRef)(null),
          Z = (0, S.useCallback)((d) => {
            j.current = d;
          }, []);
        (0, S.useEffect)(() => {
          if (B) {
            if ($ || M) return;
            let d = j.current;
            if (d && d.tagName) {
              let S = (function (d, f, h) {
                let {
                  id: S,
                  observer: w,
                  elements: B,
                } = (function (d) {
                  let f;
                  let h = { root: d.root || null, margin: d.rootMargin || "" },
                    S = F.find(
                      (d) => d.root === h.root && d.margin === h.margin
                    );
                  if (S && (f = D.get(S))) return f;
                  let w = new Map(),
                    B = new IntersectionObserver((d) => {
                      d.forEach((d) => {
                        let f = w.get(d.target),
                          h = d.isIntersecting || d.intersectionRatio > 0;
                        f && h && f(h);
                      });
                    }, d);
                  return (
                    (f = { id: h, observer: B, elements: w }),
                    F.push(h),
                    D.set(h, f),
                    f
                  );
                })(h);
                return (
                  B.set(d, f),
                  w.observe(d),
                  function () {
                    if ((B.delete(d), w.unobserve(d), 0 === B.size)) {
                      w.disconnect(), D.delete(S);
                      let d = F.findIndex(
                        (d) => d.root === S.root && d.margin === S.margin
                      );
                      d > -1 && F.splice(d, 1);
                    }
                  }
                );
              })(d, (d) => d && V(d), {
                root: null == f ? void 0 : f.current,
                rootMargin: h,
              });
              return S;
            }
          } else if (!M) {
            let d = (0, w.requestIdleCallback)(() => V(!0));
            return () => (0, w.cancelIdleCallback)(d);
          }
        }, [$, h, f, M, j.current]);
        let q = (0, S.useCallback)(() => {
          V(!1);
        }, []);
        return [Z, M, q];
      }
      ("function" == typeof f.default ||
        ("object" == typeof f.default && null !== f.default)) &&
        void 0 === f.default.__esModule &&
        (Object.defineProperty(f.default, "__esModule", { value: !0 }),
        Object.assign(f.default, f),
        (d.exports = f.default));
    },
    6572: function (d, f, h) {
      "use strict";
      h.d(f, {
        g3: function () {
          return StoreProvider;
        },
        oR: function () {
          return useStore;
        },
      });
      var S = h(5893),
        w = h(6607),
        B = h(7294);
      let D = (0, B.createContext)({
          collapsed: !1,
          setCollapsed: () => null,
          theme: "light",
          setTheme: () => null,
        }),
        F = "is-kui-collapsed",
        H = "is-kui-theme-dark-mode-enabled",
        useStore = () => (0, B.useContext)(D),
        StoreProvider = (d) => {
          let { children: f } = d,
            [h, $] = (0, B.useState)(!1),
            [M, V] = (0, B.useState)(!1),
            [j, Z] = (0, B.useState)("light"),
            q = (0, w.ac)("md");
          return (
            (0, B.useEffect)(() => {
              $(!0);
              let d = window.localStorage.getItem(F),
                f = window.localStorage.getItem(H);
              null !== d && V(JSON.parse(d)), null !== f && Z(JSON.parse(f));
            }, []),
            (0, B.useEffect)(() => {
              q ? V(!0) : V(!1);
            }, [q]),
            (0, B.useEffect)(() => {
              window.localStorage.setItem(F, JSON.stringify(M));
            }, [M]),
            (0, B.useEffect)(() => {
              window.localStorage.setItem(H, JSON.stringify(j));
            }, [j]),
            (0, S.jsx)(D.Provider, {
              value: { collapsed: M, setCollapsed: V, theme: j, setTheme: Z },
              children: h && f,
            })
          );
        };
    },
    221: function (d, f, h) {
      "use strict";
      let S, w;
      h.r(f),
        h.d(f, {
          default: function () {
            return App;
          },
        });
      var B,
        D,
        F,
        H,
        $,
        M,
        V,
        j,
        Z,
        q,
        K,
        J,
        Q,
        ee,
        et = h(5893);
      h(2352);
      var er = h(6572),
        en = h(571),
        eo = h(7294),
        ei = h.t(eo, 2);
      let ea = (0, en.iv)({
          display: "block",
          backgroundColor: en.rS.colors.displayBgCanvas,
          color: en.rS.colors.displayFgLowPrimary,
          fontFamily: en.rS.fonts.nvidiaSans,
          fontSize: en.rS.fontSizes.md,
          lineHeight: en.rS.lineHeights.body,
        }),
        el = { theme: "light", withCanvas: !1, withFonts: !1, withReset: !1 },
        ec = new Map([
          ["light", en.ib.className],
          ["dark", en.Cs.className],
        ]),
        r = (d) => (d ? ec.get(d) ?? d : "");
      var es = h(4184),
        ed = { exports: {} },
        ef = {};
      ed.exports = (function () {
        if (V) return ef;
        V = 1;
        var d = Symbol.for("react.element"),
          f = Symbol.for("react.fragment"),
          h = Object.prototype.hasOwnProperty,
          S =
            eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          w = { key: !0, ref: !0, __self: !0, __source: !0 };
        function g(f, B, D) {
          var F,
            H = {},
            $ = null,
            M = null;
          for (F in (void 0 !== D && ($ = "" + D),
          void 0 !== B.key && ($ = "" + B.key),
          void 0 !== B.ref && (M = B.ref),
          B))
            h.call(B, F) && !w.hasOwnProperty(F) && (H[F] = B[F]);
          if (f && f.defaultProps)
            for (F in (B = f.defaultProps)) void 0 === H[F] && (H[F] = B[F]);
          return {
            $$typeof: d,
            type: f,
            key: $,
            ref: M,
            props: H,
            _owner: S.current,
          };
        }
        return (ef.Fragment = f), (ef.jsx = g), (ef.jsxs = g), ef;
      })();
      var eu = ed.exports;
      let eg = eu.jsx,
        ep = "u" > typeof window ? eo.useLayoutEffect : eo.useEffect,
        em = (0, eo.createContext)(void 0),
        jr = () => (0, eo.useContext)(em),
        eh = (0, eo.forwardRef)(
          (
            {
              className: d,
              children: f,
              css: h,
              theme: S = el.theme,
              withCanvas: w = el.withCanvas,
              withFonts: B = el.withFonts,
              withReset: D = el.withReset,
              ...F
            },
            H
          ) => {
            let $ = w ? ea({ css: h }) : (0, en.cT)({ css: h }),
              M = r(S);
            return (
              ep(() => {
                B && (0, en.BG)(), D && (0, en.I_)();
              }, [B, D]),
              eg(em.Provider, {
                value: S,
                children: eg("div", {
                  className: es(d, $, M),
                  "data-testid": "kui-theme",
                  ref: H,
                  ...F,
                  children: f,
                }),
              })
            );
          }
        );
      eh.displayName = "ThemeProvider";
      let eb = (0, en.iv)({
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
        Root = (d) => {
          let { children: f } = d,
            { collapsed: h, theme: S } = (0, er.oR)();
          return (0, et.jsx)(eh, {
            theme: S,
            withCanvas: !0,
            withReset: !0,
            children: (0, et.jsx)("div", {
              className: eb({ isCollapsed: h }),
              children: f,
            }),
          });
        },
        ey = (0, en.iv)({
          gridArea: "navbar",
          height: "".concat(3, "rem"),
          backgroundColor: en.rS.colors.displayBgLow,
          borderBottom: "1px solid ".concat(en.rS.colors.displayBorderStatic),
          position: "sticky",
          top: 0,
          zIndex: 10,
        }),
        NavbarContainer = (d) => {
          let { children: f } = d;
          return (0, et.jsx)("div", { className: ey(), children: f });
        },
        ev = (0, en.iv)({ gridArea: "content" }),
        ContentContainer = (d) => {
          let { children: f } = d;
          return (0, et.jsx)("div", { className: ev(), children: f });
        };
      var e_ = h(6607);
      let eS = (0, en.iv)({
          display: "flex",
          variants: {
            align: (0, en.S8)(en.So, (d) => ({ alignItems: d })),
            direction: (0, en.S8)(en.GD, (d) => ({ flexDirection: d })),
            gap: (0, en.S8)(en.sG, (d) => ({ gap: en.rS.space[d] })),
            justify: (0, en.S8)(en.Gq, (d) => ({ justifyContent: d })),
            wrap: (0, en.S8)(en.xB, (d) => ({ flexWrap: d })),
          },
        }),
        ex = {
          align: "stretch",
          css: {},
          direction: "row",
          gap: "none",
          justify: "flex-start",
          wrap: "nowrap",
        },
        ew = { Inline: "kui-inline" },
        eB = { ...ex, direction: "row", gap: "none" };
      var eA = { exports: {} },
        eD = {};
      eA.exports = (function () {
        if (j) return eD;
        j = 1;
        var d = Symbol.for("react.element"),
          f = Symbol.for("react.fragment"),
          h = Object.prototype.hasOwnProperty,
          S =
            eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          w = { key: !0, ref: !0, __self: !0, __source: !0 };
        function O(f, B, D) {
          var F,
            H = {},
            $ = null,
            M = null;
          for (F in (void 0 !== D && ($ = "" + D),
          void 0 !== B.key && ($ = "" + B.key),
          void 0 !== B.ref && (M = B.ref),
          B))
            h.call(B, F) && !w.hasOwnProperty(F) && (H[F] = B[F]);
          if (f && f.defaultProps)
            for (F in (B = f.defaultProps)) void 0 === H[F] && (H[F] = B[F]);
          return {
            $$typeof: d,
            type: f,
            key: $,
            ref: M,
            props: H,
            _owner: S.current,
          };
        }
        return (eD.Fragment = f), (eD.jsx = O), (eD.jsxs = O), eD;
      })();
      var eF = eA.exports;
      let ek = eF.jsx,
        eE = (0, eo.forwardRef)(
          (
            {
              align: d = eB.align,
              children: f,
              className: h,
              css: S,
              direction: w = eB.direction,
              slotDivider: B,
              gap: D,
              justify: F = eB.justify,
              wrap: H = eB.wrap,
              ...$
            },
            M
          ) => {
            let V = eS({
                align: d,
                css: S,
                direction: w,
                gap: D,
                justify: F,
                wrap: H,
              }).className,
              j = B
                ? (0, e_.xR)({
                    children: f,
                    slotDivider: B,
                    testIdNameSpace: ew.Inline,
                  })
                : f;
            return ek("div", {
              className: es(V, h),
              "data-testid": ew.Inline,
              ref: M,
              ...$,
              children: j,
            });
          }
        );
      eE.displayName = "Inline";
      let eH = {
          name: "all_black_text_horizontal",
          data: '<svg viewBox="0 0 164 30"><defs><path id="a" d=""/></defs><g fill="none" fill-rule="evenodd"><path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331" fill="#1A1919"/><mask id="b" fill="#fff"><use href="#a"/></mask><path d="m96.374 5.707.002 19.66h5.552V5.707h-5.554zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.989zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659H88.37zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001zM146.1 9.3l3.364 9.204h-6.833l3.47-9.204z" fill="#000" mask="url(#b)"/><path d="M16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.82 6.82 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.89 18.89 0 0 1-1.838-.096V30h28.375V.047H16.89zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852zM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943z" fill="#76B900" mask="url(#b)"/></g></svg>',
        },
        eC = {
          name: "all_white_text_horizontal",
          data: '<svg viewBox="0 0 164 30"><defs><path id="a" d=""/></defs><g fill="none" fill-rule="evenodd"><path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331" fill="#FFF"/><mask id="b" fill="#fff"><use href="#a"/></mask><path d="m96.374 5.707.002 19.66h5.552V5.707h-5.554zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.989zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659H88.37zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001zM146.1 9.3l3.364 9.204h-6.833l3.47-9.204z" fill="#FFF" mask="url(#b)"/><path d="M16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.82 6.82 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.89 18.89 0 0 1-1.838-.096V30h28.375V.047H16.89zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852zM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943z" fill="#76B900" mask="url(#b)"/></g></svg>',
        },
        eI = [
          {
            name: "all_black_horizontal",
            data: '<svg viewBox="0 0 164 30"><defs><path id="a" d=""/></defs><g fill="none" fill-rule="evenodd"><path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331" fill="#050505"/><mask id="b" fill="#fff"><use href="#a"/></mask><path d="m96.374 5.707.002 19.66h5.552V5.707h-5.554zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.989zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659H88.37zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001zM146.1 9.3l3.364 9.204h-6.833l3.47-9.204zM16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.82 6.82 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.89 18.89 0 0 1-1.838-.096V30h28.375V.047H16.89zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852zM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943z" fill="#050505" mask="url(#b)"/></g></svg>',
          },
          eH,
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
          eC,
          {
            name: "all_white_text_vertical",
            data: '<svg viewBox="0 0 99 75"><path d="M13.246 20.365s6.442-9.537 19.304-10.523v-3.46C18.304 7.53 5.967 19.636 5.967 19.636S12.954 39.904 32.55 41.76v-3.678c-14.38-1.816-19.304-17.717-19.304-17.717zM32.55 30.768v3.368c-10.868-1.944-13.885-13.28-13.885-13.28s5.219-5.8 13.885-6.74v3.695l-.016-.002c-4.548-.548-8.102 3.716-8.102 3.716s1.99 7.177 8.118 9.243zM32.55 0v6.382c.419-.033.837-.06 1.257-.075 16.198-.547 26.751 13.329 26.751 13.329S48.436 34.425 35.809 34.425a18.55 18.55 0 0 1-3.259-.289v3.946a21.4 21.4 0 0 0 2.714.176c11.751 0 20.25-6.02 28.479-13.148 1.363 1.097 6.949 3.763 8.098 4.932-7.825 6.571-26.059 11.869-36.396 11.869-.997 0-1.955-.06-2.895-.15v5.544h44.664V0H32.55zm0 14.115V9.842c.414-.03.832-.051 1.257-.065 11.648-.367 19.29 10.042 19.29 10.042S44.843 31.32 35.994 31.32a10.71 10.71 0 0 1-3.444-.552V17.81c4.535.55 5.447 2.56 8.173 7.118l6.063-5.129s-4.425-5.824-11.886-5.824c-.812 0-1.588.057-2.35.14zm65.847 58.283c0 .728-.528 1.217-1.153 1.217v-.005c-.642.005-1.16-.484-1.16-1.212s.518-1.216 1.16-1.216c.625 0 1.153.488 1.153 1.216m.469 0c0-1-.767-1.58-1.622-1.58-.86 0-1.627.58-1.627 1.58 0 .998.766 1.58 1.627 1.58.855 0 1.622-.582 1.622-1.58m-1.892.132h.175l.402.716h.442l-.446-.745c.23-.016.42-.128.42-.442 0-.39-.266-.515-.715-.515h-.65v1.702h.372v-.716m0-.287v-.41h.26c.142 0 .336.012.336.186 0 .19-.1.224-.267.224h-.329M84.162 58.756l3.03 8.399h-6.157l3.127-8.4zm-3.248-3.27-6.986 17.928h4.933l1.105-3.169h8.268l1.046 3.17h5.355l-7.039-17.931-6.682.001zM66.89 73.42h5.004V55.48l-5.005-.002.001 17.942zM32.142 55.478l-4.175 14.22-4-14.218-5.401-.002 5.713 17.942h7.211l5.759-17.942h-5.107zm20.232 3.907h2.15c3.121 0 5.139 1.42 5.139 5.103s-2.018 5.103-5.138 5.103h-2.151V59.385zm-4.963-3.907V73.42h8.114c4.323 0 5.735-.729 7.26-2.361 1.08-1.146 1.776-3.663 1.776-6.412 0-2.522-.59-4.773-1.62-6.173-1.853-2.506-4.523-2.996-8.509-2.996h-7.02zM0 55.453V73.42h5.047V59.778l3.91.001c1.296 0 2.218.327 2.842 1 .791.855 1.114 2.233 1.114 4.752v7.89h4.89v-9.927c0-7.085-4.458-8.04-8.82-8.04H0zm39.355.025.002 17.942h5.003V55.478h-5.005z" fill="#FFF" fill-rule="evenodd"/></svg>',
          },
          {
            name: "all_white_vertical",
            data: '<svg viewBox="0 0 71 47"><path d="M7.255 20.234s6.419-9.476 19.236-10.455V6.34C12.294 7.481 0 19.51 0 19.51s6.963 20.138 26.491 21.982v-3.655C12.161 36.032 7.255 20.234 7.255 20.234zM26.49 30.57v3.346c-10.83-1.931-13.837-13.194-13.837-13.194s5.2-5.764 13.837-6.698v3.672l-.016-.002c-4.532-.544-8.074 3.692-8.074 3.692s1.984 7.131 8.09 9.184zm0-30.57v6.341c.417-.033.834-.06 1.253-.074 16.14-.544 26.658 13.242 26.658 13.242s-12.08 14.694-24.663 14.694c-1.153 0-2.234-.107-3.248-.287v3.92a21.24 21.24 0 0 0 2.704.176c11.71 0 20.18-5.982 28.38-13.063 1.359 1.089 6.925 3.738 8.07 4.9-7.797 6.529-25.968 11.792-36.27 11.792-.993 0-1.947-.06-2.884-.15V47H71V0H26.491zm0 14.024V9.78c.412-.03.829-.052 1.253-.065 11.607-.365 19.222 9.977 19.222 9.977S38.742 31.12 29.923 31.12c-1.27 0-2.407-.205-3.432-.55V17.697c4.52.546 5.428 2.543 8.145 7.073l6.042-5.096s-4.41-5.787-11.845-5.787c-.81 0-1.583.057-2.342.138z" fill="#FFF" fill-rule="evenodd"/></svg>',
          },
        ],
        eR = (0, en.iv)({
          display: "inline-flex",
          variants: {
            type: {
              horizontal: { svg: { height: "1.25rem", minHeight: "15px" } },
              vertical: { svg: { height: "2.5rem", minHeight: "38px" } },
            },
          },
        }),
        dist_s = (d) => ("dark" === d ? eC : eH),
        p = ({ name: d, theme: f }) =>
          eI.find((f) => f.name === d) ?? dist_s(f),
        L = (d) => (/vert/g.test(d) ? "vertical" : "horizontal");
      var __read = function (d, f) {
          var h = "function" == typeof Symbol && d[Symbol.iterator];
          if (!h) return d;
          var S,
            w,
            B = h.call(d),
            D = [];
          try {
            for (; (void 0 === f || f-- > 0) && !(S = B.next()).done; )
              D.push(S.value);
          } catch (d) {
            w = { error: d };
          } finally {
            try {
              S && !S.done && (h = B.return) && h.call(B);
            } finally {
              if (w) throw w.error;
            }
          }
          return D;
        },
        eP = [
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
        eO = {
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
        __assign = function () {
          return (__assign =
            Object.assign ||
            function (d) {
              for (var f, h = 1, S = arguments.length; h < S; h++)
                for (var w in (f = arguments[h]))
                  Object.prototype.hasOwnProperty.call(f, w) && (d[w] = f[w]);
              return d;
            }).apply(this, arguments);
        },
        esm_read = function (d, f) {
          var h = "function" == typeof Symbol && d[Symbol.iterator];
          if (!h) return d;
          var S,
            w,
            B = h.call(d),
            D = [];
          try {
            for (; (void 0 === f || f-- > 0) && !(S = B.next()).done; )
              D.push(S.value);
          } catch (d) {
            w = { error: d };
          } finally {
            try {
              S && !S.done && (h = B.return) && h.call(B);
            } finally {
              if (w) throw w.error;
            }
          }
          return D;
        },
        __spreadArray = function (d, f, h) {
          if (h || 2 == arguments.length)
            for (var S, w = 0, B = f.length; w < B; w++)
              (!S && w in f) ||
                (S || (S = Array.prototype.slice.call(f, 0, w)), (S[w] = f[w]));
          return d.concat(S || Array.prototype.slice.call(f));
        };
      function convertFromNode(d, f) {
        if ((void 0 === f && (f = {}), !d || !(d instanceof Node))) return null;
        var h,
          S,
          w,
          B,
          D,
          F = f.actions,
          H = void 0 === F ? [] : F,
          $ = f.index,
          M = f.level,
          V = void 0 === M ? 0 : M,
          j = f.randomKey,
          Z = d,
          q = "".concat(V, "-").concat(void 0 === $ ? 0 : $),
          K = [];
        if (
          (j &&
            0 === V &&
            (q = ""
              .concat(
                (function (d) {
                  void 0 === d && (d = 6);
                  for (
                    var f =
                        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                      h = "",
                      S = d;
                    S > 0;
                    --S
                  )
                    h += f[Math.round(Math.random() * (f.length - 1))];
                  return h;
                })(),
                "-"
              )
              .concat(q)),
          Array.isArray(H) &&
            H.forEach(function (f) {
              f.condition(Z, q, V) &&
                ("function" != typeof f.pre ||
                  (Z = f.pre(Z, q, V)) instanceof Node ||
                  (Z = d),
                "function" == typeof f.post && K.push(f.post(Z, q, V)));
            }),
          K.length)
        )
          return K;
        switch (Z.nodeType) {
          case 1:
            return eo.createElement(
              ((h = Z.nodeName),
              /[a-z]+[A-Z]+[a-z]+/.test(h) ? h : h.toLowerCase()),
              (function (d, f) {
                var h = { key: f };
                if (d instanceof Element) {
                  var S = d.getAttribute("class");
                  S && (h.className = S),
                    __spreadArray([], esm_read(d.attributes), !1).forEach(
                      function (d) {
                        switch (d.name) {
                          case "class":
                            break;
                          case "style":
                            h[d.name] = d.value
                              .split(/ ?; ?/)
                              .reduce(function (d, f) {
                                var h = __read(f.split(/ ?: ?/), 2),
                                  S = h[0],
                                  w = h[1];
                                return (
                                  S &&
                                    w &&
                                    (d[
                                      S.replace(/-(\w)/g, function (d, f) {
                                        return f.toUpperCase();
                                      })
                                    ] = Number.isNaN(Number(w))
                                      ? w
                                      : Number(w)),
                                  d
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
                            h[eO[d.name] || d.name] = !0;
                            break;
                          default:
                            h[eO[d.name] || d.name] = d.value;
                        }
                      }
                    );
                }
                return h;
              })(Z, q),
              ((S = Z.childNodes),
              (w = f),
              (B = __spreadArray([], esm_read(S), !1)
                .map(function (d, f) {
                  return convertFromNode(
                    d,
                    __assign(__assign({}, w), { index: f, level: V + 1 })
                  );
                })
                .filter(Boolean)).length
                ? B
                : null)
            );
          case 3:
            var J =
              (null === (D = Z.nodeValue) || void 0 === D
                ? void 0
                : D.toString()) || "";
            if (/^\s+$/.test(J) && !/[\u00A0\u202F]/.test(J)) return null;
            if (!Z.parentNode) return J;
            var Q = Z.parentNode.nodeName.toLowerCase();
            if (eP.includes(Q))
              return (
                /\S/.test(J) &&
                  console.warn(
                    "A textNode is not allowed inside '"
                      .concat(Q, "'. Your text \"")
                      .concat(J, '" will be ignored')
                  ),
                null
              );
            return J;
          default:
            return null;
        }
      }
      function convert(d, f) {
        return (void 0 === f && (f = {}), "string" == typeof d)
          ? (function (d, f) {
              if ((void 0 === f && (f = {}), !d || "string" != typeof d))
                return null;
              var h = f.nodeOnly,
                S = f.selector,
                w = f.type;
              try {
                var B = new DOMParser()
                  .parseFromString(d, void 0 === w ? "text/html" : w)
                  .querySelector(void 0 === S ? "body > *" : S);
                if (!(B instanceof Node))
                  throw TypeError("Error parsing input");
                if (void 0 !== h && h) return B;
                return convertFromNode(B, f);
              } catch (d) {}
              return null;
            })(d, f)
          : d instanceof Node
          ? convertFromNode(d, f)
          : null;
      }
      var eN = h(8875),
        e$ = {
          FAILED: "failed",
          LOADED: "loaded",
          LOADING: "loading",
          PENDING: "pending",
          READY: "ready",
          UNSUPPORTED: "unsupported",
        };
      function canUseDOM() {
        return eN.canUseDOM;
      }
      var ez =
          ((B = function (d, f) {
            return (B =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (d, f) {
                  d.__proto__ = f;
                }) ||
              function (d, f) {
                for (var h in f)
                  Object.prototype.hasOwnProperty.call(f, h) && (d[h] = f[h]);
              })(d, f);
          }),
          function (d, f) {
            if ("function" != typeof f && null !== f)
              throw TypeError(
                "Class extends value " +
                  String(f) +
                  " is not a constructor or null"
              );
            function __() {
              this.constructor = d;
            }
            B(d, f),
              (d.prototype =
                null === f
                  ? Object.create(f)
                  : ((__.prototype = f.prototype), new __()));
          }),
        esm_assign = function () {
          return (esm_assign =
            Object.assign ||
            function (d) {
              for (var f, h = 1, S = arguments.length; h < S; h++)
                for (var w in (f = arguments[h]))
                  Object.prototype.hasOwnProperty.call(f, w) && (d[w] = f[w]);
              return d;
            }).apply(this, arguments);
        },
        react_inlinesvg_esm_read = function (d, f) {
          var h = "function" == typeof Symbol && d[Symbol.iterator];
          if (!h) return d;
          var S,
            w,
            B = h.call(d),
            D = [];
          try {
            for (; (void 0 === f || f-- > 0) && !(S = B.next()).done; )
              D.push(S.value);
          } catch (d) {
            w = { error: d };
          } finally {
            try {
              S && !S.done && (h = B.return) && h.call(B);
            } finally {
              if (w) throw w.error;
            }
          }
          return D;
        },
        esm_spreadArray = function (d, f, h) {
          if (h || 2 == arguments.length)
            for (var S, w = 0, B = f.length; w < B; w++)
              (!S && w in f) ||
                (S || (S = Array.prototype.slice.call(f, 0, w)), (S[w] = f[w]));
          return d.concat(S || Array.prototype.slice.call(f));
        },
        eT = Object.create(null),
        eM = (function (d) {
          function InlineSVG(f) {
            var h = d.call(this, f) || this;
            return (
              Object.defineProperty(h, "isInitialized", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(h, "isActive", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(h, "hash", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(h, "handleLoad", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (d) {
                  h.isActive &&
                    h.setState({ content: d, status: e$.LOADED }, h.getElement);
                },
              }),
              Object.defineProperty(h, "handleError", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (d) {
                  var f = h.props.onError,
                    S =
                      "Browser does not support SVG" === d.message
                        ? e$.UNSUPPORTED
                        : e$.FAILED;
                  h.isActive &&
                    h.setState({ status: S }, function () {
                      "function" == typeof f && f(d);
                    });
                },
              }),
              Object.defineProperty(h, "request", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  var d = h.props,
                    f = d.cacheRequests,
                    S = d.fetchOptions,
                    w = d.src;
                  try {
                    return (
                      f && (eT[w] = { content: "", status: e$.LOADING }),
                      fetch(w, S)
                        .then(function (d) {
                          var f = d.headers.get("content-type"),
                            h = react_inlinesvg_esm_read(
                              (f || "").split(/ ?; ?/),
                              1
                            )[0];
                          if (d.status > 299) throw Error("Not found");
                          if (
                            !["image/svg+xml", "text/plain"].some(function (d) {
                              return h.includes(d);
                            })
                          )
                            throw Error("Content type isn't valid: ".concat(h));
                          return d.text();
                        })
                        .then(function (d) {
                          var S = h.props.src;
                          if (w !== S) {
                            eT[w].status === e$.LOADING && delete eT[w];
                            return;
                          }
                          if ((h.handleLoad(d), f)) {
                            var B = eT[w];
                            B && ((B.content = d), (B.status = e$.LOADED));
                          }
                        })
                        .catch(function (d) {
                          h.handleError(d), f && eT[w] && delete eT[w];
                        })
                    );
                  } catch (d) {
                    return h.handleError(Error(d.message));
                  }
                },
              }),
              (h.state = {
                content: "",
                element: null,
                hasCache: !!f.cacheRequests && !!eT[f.src],
                status: e$.PENDING,
              }),
              (h.hash =
                f.uniqueHash ||
                (function (d) {
                  for (
                    var f = "abcdefghijklmnopqrstuvwxyz",
                      h = ""
                        .concat(f)
                        .concat(f.toUpperCase())
                        .concat("1234567890"),
                      S = "",
                      w = 0;
                    w < 8;
                    w++
                  )
                    S += h[Math.floor(Math.random() * h.length)];
                  return S;
                })(0)),
              h
            );
          }
          return (
            ez(InlineSVG, d),
            Object.defineProperty(InlineSVG.prototype, "componentDidMount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                if (
                  ((this.isActive = !0), canUseDOM() && !this.isInitialized)
                ) {
                  var d = this.state.status,
                    f = this.props.src;
                  try {
                    if (d === e$.PENDING) {
                      if (
                        !(
                          (function () {
                            if (!document) return !1;
                            var d = document.createElement("div");
                            d.innerHTML = "<svg />";
                            var f = d.firstChild;
                            return (
                              !!f &&
                              "http://www.w3.org/2000/svg" === f.namespaceURI
                            );
                          })() &&
                          "undefined" != typeof window &&
                          null !== window
                        )
                      )
                        throw Error("Browser does not support SVG");
                      if (!f) throw Error("Missing src");
                      this.load();
                    }
                  } catch (d) {
                    this.handleError(d);
                  }
                  this.isInitialized = !0;
                }
              },
            }),
            Object.defineProperty(InlineSVG.prototype, "componentDidUpdate", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (d, f) {
                if (canUseDOM()) {
                  var h = this.state,
                    S = h.hasCache,
                    w = h.status,
                    B = this.props,
                    D = B.onLoad,
                    F = B.src;
                  if (
                    (f.status !== e$.READY && w === e$.READY && D && D(F, S),
                    d.src !== F)
                  ) {
                    if (!F) {
                      this.handleError(Error("Missing src"));
                      return;
                    }
                    this.load();
                  }
                }
              },
            }),
            Object.defineProperty(InlineSVG.prototype, "componentWillUnmount", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.isActive = !1;
              },
            }),
            Object.defineProperty(InlineSVG.prototype, "getNode", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var d = this.props,
                  f = d.description,
                  h = d.title;
                try {
                  var S = this.processSVG(),
                    w = convert(S, { nodeOnly: !0 });
                  if (!w || !(w instanceof SVGSVGElement))
                    throw Error("Could not convert the src to a DOM Node");
                  var B = this.updateSVGAttributes(w);
                  if (f) {
                    var D = B.querySelector("desc");
                    D && D.parentNode && D.parentNode.removeChild(D);
                    var F = document.createElement("desc");
                    (F.innerHTML = f), B.prepend(F);
                  }
                  if (h) {
                    var H = B.querySelector("title");
                    H && H.parentNode && H.parentNode.removeChild(H);
                    var $ = document.createElement("title");
                    ($.innerHTML = h), B.prepend($);
                  }
                  return B;
                } catch (d) {
                  return this.handleError(d);
                }
              },
            }),
            Object.defineProperty(InlineSVG.prototype, "getElement", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                try {
                  var d = this.getNode(),
                    f = convert(d);
                  if (!f || !eo.isValidElement(f))
                    throw Error("Could not convert the src to a React element");
                  this.setState({ element: f, status: e$.READY });
                } catch (d) {
                  this.handleError(Error(d.message));
                }
              },
            }),
            Object.defineProperty(InlineSVG.prototype, "load", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var d = this;
                this.isActive &&
                  this.setState(
                    { content: "", element: null, status: e$.LOADING },
                    function () {
                      var f,
                        h = d.props,
                        S = h.cacheRequests,
                        w = h.src,
                        B = S && eT[w];
                      if (B && B.status === e$.LOADED) {
                        d.handleLoad(B.content);
                        return;
                      }
                      var D = w.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);
                      if (
                        (D
                          ? (f = D[1]
                              ? window.atob(D[2])
                              : decodeURIComponent(D[2]))
                          : w.includes("<svg") && (f = w),
                        f)
                      ) {
                        d.handleLoad(f);
                        return;
                      }
                      d.request();
                    }
                  );
              },
            }),
            Object.defineProperty(InlineSVG.prototype, "updateSVGAttributes", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (d) {
                var f = this,
                  h = this.props,
                  S = h.baseURL,
                  w = void 0 === S ? "" : S,
                  B = h.uniquifyIDs,
                  D = [
                    "id",
                    "href",
                    "xlink:href",
                    "xlink:role",
                    "xlink:arcrole",
                  ],
                  F = ["href", "xlink:href"];
                return (
                  B &&
                    esm_spreadArray(
                      [],
                      react_inlinesvg_esm_read(d.children),
                      !1
                    ).map(function (d) {
                      if (d.attributes && d.attributes.length) {
                        var h = Object.values(d.attributes).map(function (d) {
                          var h = d.value.match(/url\((.*?)\)/);
                          return (
                            h &&
                              h[1] &&
                              (d.value = d.value.replace(
                                h[0],
                                "url("
                                  .concat(w)
                                  .concat(h[1], "__")
                                  .concat(f.hash, ")")
                              )),
                            d
                          );
                        });
                        D.forEach(function (d) {
                          var S,
                            w = h.find(function (f) {
                              return f.name === d;
                            });
                          w &&
                            ((S = w.value),
                            !F.includes(d) || !S || S.includes("#")) &&
                            (w.value = "".concat(w.value, "__").concat(f.hash));
                        });
                      }
                      return d.children.length ? f.updateSVGAttributes(d) : d;
                    }),
                  d
                );
              },
            }),
            Object.defineProperty(InlineSVG.prototype, "processSVG", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var d = this.state.content,
                  f = this.props.preProcessor;
                return f ? f(d) : d;
              },
            }),
            Object.defineProperty(InlineSVG.prototype, "render", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var d = this.state,
                  f = d.element,
                  h = d.status,
                  S = this.props,
                  w = S.children,
                  B = S.innerRef,
                  D = S.loader,
                  F = void 0 === D ? null : D,
                  H = (function (d) {
                    for (var f = [], h = 1; h < arguments.length; h++)
                      f[h - 1] = arguments[h];
                    var S = {};
                    for (var w in d)
                      ({}).hasOwnProperty.call(d, w) &&
                        !f.includes(w) &&
                        (S[w] = d[w]);
                    return S;
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
                return canUseDOM()
                  ? f
                    ? eo.cloneElement(f, esm_assign({ ref: B }, H))
                    : [e$.UNSUPPORTED, e$.FAILED].includes(h)
                    ? void 0 === w
                      ? null
                      : w
                    : F
                  : F;
              },
            }),
            Object.defineProperty(InlineSVG, "defaultProps", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { cacheRequests: !0, uniquifyIDs: !1 },
            }),
            InlineSVG
          );
        })(eo.PureComponent),
        eL = { exports: {} },
        eW = {};
      eL.exports = (function () {
        if (Z) return eW;
        Z = 1;
        var d = Symbol.for("react.element"),
          f = Symbol.for("react.fragment"),
          h = Object.prototype.hasOwnProperty,
          S =
            eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          w = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(f, B, D) {
          var F,
            H = {},
            $ = null,
            M = null;
          for (F in (void 0 !== D && ($ = "" + D),
          void 0 !== B.key && ($ = "" + B.key),
          void 0 !== B.ref && (M = B.ref),
          B))
            h.call(B, F) && !w.hasOwnProperty(F) && (H[F] = B[F]);
          if (f && f.defaultProps)
            for (F in (B = f.defaultProps)) void 0 === H[F] && (H[F] = B[F]);
          return {
            $$typeof: d,
            type: f,
            key: $,
            ref: M,
            props: H,
            _owner: S.current,
          };
        }
        return (eW.Fragment = f), (eW.jsx = T), (eW.jsxs = T), eW;
      })();
      var eV = eL.exports;
      let ej = eV.jsx,
        eU = (0, eo.forwardRef)(
          ({ className: d, css: f, name: h, ...S }, w) => {
            let B = jr(),
              [D, F] = (0, eo.useMemo)(() => {
                let d = p({ name: h, theme: B });
                return [d, L(d.name)];
              }, [h, B]),
              H = eR({ css: f, type: F }).className;
            return ej("div", {
              className: es(H, d),
              "data-testid": "kui-logo",
              ref: w,
              ...S,
              children: ej(eM, { src: D.data }),
            });
          }
        );
      eU.displayName = "Logo";
      let eG = (0, en.iv)({
          cursor: "pointer",
          border: `1px solid ${en.rS.colors.g500}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: en.rS.space.xs,
          fontSize: en.rS.fontSizes.ms,
          fontWeight: en.rS.fontWeights.medium,
          fontFamily: en.rS.fonts.nvidiaSans,
          lineHeight: en.rS.lineHeights.text,
          padding: `${en.rS.space.sm} ${en.rS.space.ms}`,
          "&:disabled:hover": { cursor: "not-allowed" },
          variants: {
            size: {
              large: { fontSize: en.rS.fontSizes.md, padding: en.rS.space.ms },
              small: { fontSize: en.rS.fontSizes.sm, padding: en.rS.space.ss },
              standard: {
                fontSize: en.rS.fontSizes.ms,
                padding: en.rS.space.sm,
              },
              tiny: { fontSize: en.rS.fontSizes.sm, padding: en.rS.space.xs },
            },
            tone: {
              primary: {
                backgroundColor: en.rS.colors.actionBgPrimary,
                borderColor: en.rS.colors.actionBorderPrimary,
                color: en.rS.colors.actionFgPrimary,
                "&:hover": {
                  backgroundColor: en.rS.colors.actionBgPrimaryHover,
                  borderColor: en.rS.colors.actionBorderPrimaryHover,
                  color: en.rS.colors.actionFgPrimaryHover,
                },
                "&:active": {
                  backgroundColor: en.rS.colors.actionBgPrimaryActive,
                  borderColor: en.rS.colors.actionBorderPrimaryActive,
                  color: en.rS.colors.actionFgPrimaryActive,
                },
                "&:disabled": {
                  backgroundColor: en.rS.colors.actionBgPrimaryDisabled,
                  borderColor: en.rS.colors.actionBorderPrimaryDisabled,
                  color: en.rS.colors.actionFgPrimaryDisabled,
                },
              },
              secondary: {
                backgroundColor: en.rS.colors.actionBgSecondary,
                borderColor: en.rS.colors.actionBorderSecondary,
                color: en.rS.colors.actionFgSecondary,
                "&:hover": {
                  backgroundColor: en.rS.colors.actionBgSecondaryHover,
                  borderColor: en.rS.colors.actionBorderSecondaryHover,
                  color: en.rS.colors.actionFgSecondaryHover,
                },
                "&:active": {
                  backgroundColor: en.rS.colors.actionBgSecondaryActive,
                  borderColor: en.rS.colors.actionBorderSecondaryActive,
                  color: en.rS.colors.actionFgSecondaryActive,
                },
                "&:disabled": {
                  backgroundColor: en.rS.colors.actionBgSecondaryDisabled,
                  borderColor: en.rS.colors.actionBorderSecondaryDisabled,
                  color: en.rS.colors.actionFgSecondaryDisabled,
                },
              },
              tertiary: {
                backgroundColor: "transparent",
                borderColor: "transparent",
                color: en.rS.colors.actionFgTertiary,
                "&:hover": {
                  backgroundColor: en.rS.colors.actionBgTertiaryHover,
                  borderColor: "transparent",
                  color: en.rS.colors.actionFgTertiaryHover,
                },
                "&:active": {
                  backgroundColor: en.rS.colors.actionBgTertiaryActive,
                  borderColor: "transparent",
                  color: en.rS.colors.actionFgTertiaryActive,
                },
                "&:disabled": {
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  color: en.rS.colors.actionFgTertiaryDisabled,
                },
              },
            },
            danger: {
              true: {
                backgroundColor: en.rS.colors.actionBgPrimaryDanger,
                borderColor: en.rS.colors.actionBorderPrimaryDanger,
                color: en.rS.colors.actionFgPrimaryDanger,
                "&:hover:not(:disabled)": {
                  backgroundColor: en.rS.colors.actionBgPrimaryDangerHover,
                  borderColor: en.rS.colors.actionBorderPrimaryDangerHover,
                },
                "&:active:not(:disabled)": {
                  backgroundColor: en.rS.colors.actionBgPrimaryDangerActive,
                  borderColor: en.rS.colors.actionBorderPrimaryDangerActive,
                },
              },
            },
          },
          compoundVariants: [
            {
              tone: "secondary",
              danger: !0,
              css: {
                backgroundColor: en.rS.colors.actionBgSecondaryDanger,
                borderColor: en.rS.colors.actionBorderSecondaryDanger,
                color: en.rS.colors.actionFgSecondaryDanger,
                "&:hover:not(:disabled)": {
                  backgroundColor: en.rS.colors.actionBgSecondaryDangerHover,
                  borderColor: en.rS.colors.actionBorderSecondaryDangerHover,
                  color: en.rS.colors.actionFgSecondaryDangerHover,
                },
                "&:active:not(:disabled)": {
                  backgroundColor: en.rS.colors.actionBgSecondaryDangerActive,
                  borderColor: en.rS.colors.actionBorderSecondaryDangerActive,
                  color: en.rS.colors.actionFgSecondaryDangerActive,
                },
              },
            },
            {
              tone: "tertiary",
              danger: !0,
              css: {
                backgroundColor: "transparent",
                borderColor: "transparent",
                color: en.rS.colors.actionFgTertiaryDanger,
                "&:hover:not(:disabled)": {
                  backgroundColor: en.rS.colors.actionBgTertiaryDangerHover,
                  borderColor: "transparent",
                  color: en.rS.colors.actionFgTertiaryDanger,
                },
                "&:active:not(:disabled)": {
                  backgroundColor: en.rS.colors.actionBgTertiaryDangerActive,
                  borderColor: "transparent",
                  color: en.rS.colors.actionFgTertiaryDangerActive,
                },
              },
            },
          ],
        }),
        eX = { danger: !1, size: "standard", tone: "primary" };
      var eY = { exports: {} },
        eZ = {};
      eY.exports = (function () {
        if (q) return eZ;
        q = 1;
        var d = Symbol.for("react.element"),
          f = Symbol.for("react.fragment"),
          h = Object.prototype.hasOwnProperty,
          S =
            eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          w = { key: !0, ref: !0, __self: !0, __source: !0 };
        function R(f, B, D) {
          var F,
            H = {},
            $ = null,
            M = null;
          for (F in (void 0 !== D && ($ = "" + D),
          void 0 !== B.key && ($ = "" + B.key),
          void 0 !== B.ref && (M = B.ref),
          B))
            h.call(B, F) && !w.hasOwnProperty(F) && (H[F] = B[F]);
          if (f && f.defaultProps)
            for (F in (B = f.defaultProps)) void 0 === H[F] && (H[F] = B[F]);
          return {
            $$typeof: d,
            type: f,
            key: $,
            ref: M,
            props: H,
            _owner: S.current,
          };
        }
        return (eZ.Fragment = f), (eZ.jsx = R), (eZ.jsxs = R), eZ;
      })();
      var eq = eY.exports;
      let eK = eq.jsx,
        eJ = (0, eo.forwardRef)(
          (
            {
              children: d,
              className: f,
              css: h,
              danger: S = eX.danger,
              size: w = eX.size,
              tone: B = eX.tone,
              ...D
            },
            F
          ) => {
            let H = eG({ css: h, danger: S, size: w, tone: B }).className;
            return eK("button", {
              className: es(H, f),
              "data-testid": "kui-button",
              ref: F,
              ...D,
              children: d,
            });
          }
        );
      eJ.displayName = "Button";
      var eQ = { exports: {} },
        e0 = {};
      eQ.exports = (function () {
        if (K) return e0;
        K = 1;
        var d = Symbol.for("react.element"),
          f = Symbol.for("react.fragment"),
          h = Object.prototype.hasOwnProperty,
          S =
            eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          w = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(f, B, D) {
          var F,
            H = {},
            $ = null,
            M = null;
          for (F in (void 0 !== D && ($ = "" + D),
          void 0 !== B.key && ($ = "" + B.key),
          void 0 !== B.ref && (M = B.ref),
          B))
            h.call(B, F) && !w.hasOwnProperty(F) && (H[F] = B[F]);
          if (f && f.defaultProps)
            for (F in (B = f.defaultProps)) void 0 === H[F] && (H[F] = B[F]);
          return {
            $$typeof: d,
            type: f,
            key: $,
            ref: M,
            props: H,
            _owner: S.current,
          };
        }
        return (e0.Fragment = f), (e0.jsx = _), (e0.jsxs = _), e0;
      })();
      var e1 = eQ.exports;
      let e2 = e1.jsx,
        e5 = (0, eo.forwardRef)(
          (
            {
              align: d = ex.align,
              className: f,
              children: h,
              css: S,
              direction: w = ex.direction,
              gap: B,
              justify: D = ex.justify,
              wrap: F = ex.wrap,
              ...H
            },
            $
          ) => {
            let M = eS({
              align: d,
              css: S,
              direction: w,
              gap: B,
              justify: D,
              wrap: F,
            }).className;
            return e2("div", {
              className: es(M, f),
              "data-testid": "kui-flex",
              ref: $,
              ...H,
              children: h,
            });
          }
        );
      e5.displayName = "Flex";
      let e8 = (0, en.iv)({
          backgroundColor: en.rS.colors.menuBgBase,
          alignItems: "center",
          display: "flex",
          height: "56px",
          padding: `${en.rS.space.ms} ${en.rS.space.sm}`,
          width: "100%",
        }),
        e4 = (0, en.iv)({ marginLeft: "auto", marginRight: "auto" }),
        e3 = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M13 4H3V3h10v1Zm0 4H3V7h10v1Zm0 4H3v-1h10v1Z",
              clipRule: "evenodd",
            })
          )
        ),
        e7 = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M7.5 4V2h1v2h-1ZM4.818 5.525 3.404 4.111l.707-.707 1.414 1.414-.707.707Zm6.364 0-.707-.707 1.414-1.414.707.707-1.414 1.414ZM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 .5H2v-1h2v1Zm10 0h-2v-1h2v1Zm-9.89 4.096-.706-.707 1.414-1.414.707.707-1.414 1.414Zm7.78 0-1.415-1.414.707-.707 1.414 1.414-.707.707ZM8.5 12v2h-1v-2h1Z",
              clipRule: "evenodd",
            })
          )
        ),
        e6 = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m7.311 2.946 1.004.063a5 5 0 1 1-4.48 7.76L3.28 9.93l1.004.063a4 4 0 0 0 3.584-6.209l-.556-.838Zm1.882 1.235A4.99 4.99 0 0 1 8.866 8.5a4.99 4.99 0 0 1-3.576 2.443A4 4 0 1 0 9.194 4.18Z",
              clipRule: "evenodd",
            })
          )
        ),
        e9 = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M8 9.293 4.354 5.646l-.708.708L8 10.707l4.354-4.353-.707-.708L8 9.293Z",
              clipRule: "evenodd",
            })
          )
        ),
        te = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m6.707 8 3.647 3.646-.708.708L5.293 8l4.353-4.354.707.708L6.708 8Z",
              clipRule: "evenodd",
            })
          )
        ),
        tt = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M9.293 8 5.646 4.354l.708-.708L10.707 8l-4.353 4.354-.708-.708L9.293 8Z",
              clipRule: "evenodd",
            })
          )
        ),
        tr = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m8 6.707-3.646 3.647-.708-.708L8 5.293l4.354 4.353-.707.708L8 6.707Z",
              clipRule: "evenodd",
            })
          )
        ),
        tn = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M13 4H3V3h10v1Zm0 4H3V7h10v1Zm0 4H3v-1h10v1Z",
              clipRule: "evenodd",
            })
          )
        ),
        to = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              d: "M7.5 2v2h1V2h-1ZM3.404 4.11l1.414 1.415.707-.707-1.414-1.414-.707.707Zm7.071.708.707.707 1.414-1.414-.707-.707-1.414 1.414ZM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 8.5h2v-1H2v1Zm10 0h2v-1h-2v1Zm-8.596 3.39.707.706 1.414-1.414-.707-.707-1.414 1.414Zm7.071-.708 1.414 1.414.707-.707-1.414-1.414-.707.707ZM8.5 14v-2h-1v2h1Z",
            })
          )
        ),
        ti = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              d: "m8.315 3.009-1.004-.063.556.839a4 4 0 0 1-3.584 6.208L3.279 9.93l.556.839a5 5 0 1 0 4.48-7.76Z",
            })
          )
        ),
        ta = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M8 9.293 4.354 5.646l-.708.708L8 10.707l4.354-4.353-.707-.708L8 9.293Z",
              clipRule: "evenodd",
            })
          )
        ),
        tl = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m6.707 8 3.647 3.646-.707.708L5.293 8l4.354-4.354.707.708L6.707 8Z",
              clipRule: "evenodd",
            })
          )
        ),
        tc = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M9.293 8 5.646 4.354l.708-.708L10.707 8l-4.353 4.354-.708-.708L9.293 8Z",
              clipRule: "evenodd",
            })
          )
        ),
        ts = (0, eo.forwardRef)((d, f) =>
          eo.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 16 16",
              width: "1em",
              height: "1em",
              display: "inline-block",
              ref: f,
              ...d,
            },
            eo.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m8 6.707-3.646 3.647-.708-.708L8 5.293l4.354 4.353-.707.708L8 6.707Z",
              clipRule: "evenodd",
            })
          )
        ),
        td = (0, eo.forwardRef)(({ variant: d, ...f }, h) =>
          "line" === d
            ? eo.createElement(e3, { ...f, ref: h })
            : eo.createElement(tn, { ...f, ref: h })
        ),
        tf = (0, eo.forwardRef)(({ variant: d, ...f }, h) =>
          "line" === d
            ? eo.createElement(e7, { ...f, ref: h })
            : eo.createElement(to, { ...f, ref: h })
        ),
        tu = (0, eo.forwardRef)(({ variant: d, ...f }, h) =>
          "line" === d
            ? eo.createElement(e6, { ...f, ref: h })
            : eo.createElement(ti, { ...f, ref: h })
        ),
        tg =
          (({ variant: d, ...f }, h) =>
            "line" === d
              ? eo.createElement(e9, { ...f, ref: h })
              : eo.createElement(ta, { ...f, ref: h }),
          (0, eo.forwardRef)(({ variant: d, ...f }, h) =>
            "line" === d
              ? eo.createElement(te, { ...f, ref: h })
              : eo.createElement(tl, { ...f, ref: h })
          )),
        tp = (0, eo.forwardRef)(({ variant: d, ...f }, h) =>
          "line" === d
            ? eo.createElement(tt, { ...f, ref: h })
            : eo.createElement(tc, { ...f, ref: h })
        );
      ({ variant: d, ...f }, h) =>
        "line" === d
          ? eo.createElement(tr, { ...f, ref: h })
          : eo.createElement(ts, { ...f, ref: h });
      var tm = { exports: {} },
        th = {};
      tm.exports = (function () {
        if (J) return th;
        J = 1;
        var d = Symbol.for("react.element"),
          f = Symbol.for("react.fragment"),
          h = Object.prototype.hasOwnProperty,
          S =
            eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          w = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(f, B, D) {
          var F,
            H = {},
            $ = null,
            M = null;
          for (F in (void 0 !== D && ($ = "" + D),
          void 0 !== B.key && ($ = "" + B.key),
          void 0 !== B.ref && (M = B.ref),
          B))
            h.call(B, F) && !w.hasOwnProperty(F) && (H[F] = B[F]);
          if (f && f.defaultProps)
            for (F in (B = f.defaultProps)) void 0 === H[F] && (H[F] = B[F]);
          return {
            $$typeof: d,
            type: f,
            key: $,
            ref: M,
            props: H,
            _owner: S.current,
          };
        }
        return (th.Fragment = f), (th.jsx = T), (th.jsxs = T), th;
      })();
      var tb = tm.exports;
      let ty = tb.jsx,
        tv = tb.jsxs,
        t_ = (0, eo.forwardRef)(
          (
            {
              children: d,
              className: f,
              css: h,
              expanderOnClick: S,
              slotCenter: w,
              slotLeft: B,
              slotLogo: D = ty(eU, {}),
              slotRight: F,
              ...H
            },
            $
          ) => {
            let M = e8({ css: h }).className;
            return ty("div", {
              className: es(M, f),
              "data-testid": "kui-app-bar",
              ref: $,
              ...H,
              children: tv(e5, {
                align: "center",
                css: { width: "100%" },
                gap: "ss",
                justify: "space-between",
                children: [
                  tv(e5, {
                    align: "center",
                    gap: "ms",
                    children: [
                      S &&
                        ty(eJ, {
                          onClick: S,
                          tone: "tertiary",
                          children: ty(td, {
                            color: "5e5e5e",
                            height: "14px",
                            width: "14px",
                            variant: "fill",
                          }),
                        }),
                      D,
                      B,
                    ],
                  }),
                  w &&
                    ty(e5, {
                      align: "center",
                      className: e4({ css: h }),
                      gap: "ms",
                      children: w,
                    }),
                  F && ty(e5, { align: "center", gap: "ms", children: F }),
                ],
              }),
            });
          }
        );
      t_.displayName = "AppBar";
      var tS = h(1664),
        tx = h.n(tS),
        tw = h(1841);
      let tB = en.rS.space.md,
        tA = en.rS.space.sm,
        tD = {
          textDecorationColor: en.rS.colors.menuBorderSelected,
          textDecorationThickness: en.rS.space.xxs,
          textDecorationLine: "underline",
          textUnderlineOffset: en.rS.space.xs,
        },
        tF = { ...tD, textDecorationColor: en.rS.colors.menuBorderHover },
        tk = {
          ...tw.OX.menuNavActive,
          fontWeight: en.rS.fontWeights.medium,
          color: en.rS.colors.menuFgSelected,
          ...tD,
        },
        tE = (0, en.iv)({
          background: "none",
          border: "none",
          cursor: "pointer",
          font: "inherit",
          color: en.rS.colors.menuFgPrimary,
          variants: { selected: { true: tk } },
        }),
        tH = (0, en.iv)({
          color: en.rS.colors.menuFgPrimary,
          display: "inline-flex",
          alignItems: "center",
          gap: en.rS.space.sm,
          textDecoration: "none",
          whiteSpace: "nowrap",
          "&:hover": { color: en.rS.colors.menuFgHover, ...tF },
        }),
        tC = (0, en.iv)({
          color: en.rS.colors.menuFgPrimary,
          cursor: "pointer",
          listStyle: "none",
          padding: `${tA} ${tB}`,
          position: "relative",
          scrollSnapAlign: "start",
          width: "100%",
          ...tw.OX.menuNavDefault,
          variants: {
            disabled: {
              true: {
                color: en.rS.colors.menuFgPlaceholder,
                pointerEvents: "none",
                [`.${tH.className}`]: { color: en.rS.colors.menuFgPlaceholder },
              },
            },
            selected: { true: tk },
            inMenu: { true: { padding: en.rS.space.sm } },
          },
          compoundVariants: [
            {
              selected: !0,
              inMenu: !0,
              css: {
                textDecoration: "none",
                color: en.rS.colors.menuFgActive,
                backgroundColor: en.rS.colors.menuBgActive,
                fontWeight: en.rS.fontWeights.regular,
                [`.${tH.className}`]: {
                  color: en.rS.colors.menuFgActive,
                  backgroundColor: en.rS.colors.menuBgActive,
                },
              },
            },
            { selected: !0, inMenu: !1, css: { [`.${tH.className}`]: tk } },
          ],
          "&:hover": {
            color: en.rS.colors.menuFgHover,
            ...tF,
            [`.${tH.className}, .${tE.className}`]: {
              color: en.rS.colors.menuFgHover,
              ...tF,
            },
          },
        }),
        tI = (0, en.iv)({
          color: en.rS.colors.displayFgLowPrimary,
          display: "flex",
          flexWrap: "nowrap",
          fontFamily: en.rS.fonts.nvidiaSans,
          fontSize: en.rS.fontSizes.ms,
          lineHeight: en.rS.lineHeights.body,
          listStyleType: "none",
          margin: 0,
          overflow: "hidden",
          padding: 0,
        }),
        tR = (0, en.iv)({
          display: "flex",
          flexGrow: 0,
          flexShrink: 1,
          overflowX: "auto",
          position: "relative",
          scrollSnapType: "x mandatory",
          variants: { showButtons: { true: { overflowX: "hidden" } } },
        }),
        tP =
          ((0, en.iv)({
            border: ` 1px solid ${en.rS.colors.menuBorderDefault}`,
            boxShadow: en.rS.shadows.menuDropdown,
          }),
          (0, en.iv)({
            $$gradientColor: en.rS.colors.menuBgDefault,
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
        tO = (0, en.iv)({ position: "relative", overflowX: "auto" }),
        tN = {
          HorizontalNavRoot: "kui-horizontal-nav-root",
          HorizontalNavItem: "kui-horizontal-nav-item",
          HorizontalNavControl: "kui-horizontal-nav-control",
          HorizontalNavLink: "kui-horizontal-nav-link",
          HorizontalNavList: "kui-horizontal-nav-list",
          HorizontalNavScrollContainer: "kui-horizontal-nav-scroll-container",
        },
        t$ = { direction: "left", showButtons: !1, showNavControl: !1 },
        tz = { disabled: !1, selected: !1, inMenu: !1 },
        tT = {
          css: {},
          gradientColor: en.rS.colors.menuBgBase,
          showButtons: !1,
          showGradients: !1,
          showLeftControl: !1,
          showRightControl: !1,
        };
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (d) {
              for (var f = 1; f < arguments.length; f++) {
                var h = arguments[f];
                for (var S in h)
                  Object.prototype.hasOwnProperty.call(h, S) && (d[S] = h[S]);
              }
              return d;
            }).apply(this, arguments);
      }
      function $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        d,
        f,
        { checkForDefaultPrevented: h = !0 } = {}
      ) {
        return function (S) {
          if ((null == d || d(S), !1 === h || !S.defaultPrevented))
            return null == f ? void 0 : f(S);
        };
      }
      function $6ed0406888f73fc4$export$43e446d32b3d21af(...d) {
        return (f) =>
          d.forEach((d) => {
            "function" == typeof d ? d(f) : null != d && (d.current = f);
          });
      }
      function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...d) {
        return (0, eo.useCallback)(
          $6ed0406888f73fc4$export$43e446d32b3d21af(...d),
          d
        );
      }
      function $c512c27ab02ef895$export$50c7b4e9d9f19c1(d, f = []) {
        let h = [],
          createScope = () => {
            let f = h.map((d) => (0, eo.createContext)(d));
            return function (h) {
              let S = (null == h ? void 0 : h[d]) || f;
              return (0, eo.useMemo)(
                () => ({ [`__scope${d}`]: { ...h, [d]: S } }),
                [h, S]
              );
            };
          };
        return (
          (createScope.scopeName = d),
          [
            function (f, S) {
              let w = (0, eo.createContext)(S),
                B = h.length;
              function Provider(f) {
                let { scope: h, children: S, ...D } = f,
                  F = (null == h ? void 0 : h[d][B]) || w,
                  H = (0, eo.useMemo)(() => D, Object.values(D));
                return (0, eo.createElement)(F.Provider, { value: H }, S);
              }
              return (
                (h = [...h, S]),
                (Provider.displayName = f + "Provider"),
                [
                  Provider,
                  function (h, D) {
                    let F = (null == D ? void 0 : D[d][B]) || w,
                      H = (0, eo.useContext)(F);
                    if (H) return H;
                    if (void 0 !== S) return S;
                    throw Error(`\`${h}\` must be used within \`${f}\``);
                  },
                ]
              );
            },
            (function (...d) {
              let f = d[0];
              if (1 === d.length) return f;
              let createScope1 = () => {
                let h = d.map((d) => ({
                  useScope: d(),
                  scopeName: d.scopeName,
                }));
                return function (d) {
                  let S = h.reduce((f, { useScope: h, scopeName: S }) => {
                    let w = h(d),
                      B = w[`__scope${S}`];
                    return { ...f, ...B };
                  }, {});
                  return (0, eo.useMemo)(
                    () => ({ [`__scope${f.scopeName}`]: S }),
                    [S]
                  );
                };
              };
              return (createScope1.scopeName = f.scopeName), createScope1;
            })(createScope, ...f),
          ]
        );
      }
      var tM = h(3935);
      let tL = (0, eo.forwardRef)((d, f) => {
        let { children: h, ...S } = d,
          w = eo.Children.toArray(h),
          B = w.find($5e63c961fc1ce211$var$isSlottable);
        if (B) {
          let d = B.props.children,
            h = w.map((f) =>
              f !== B
                ? f
                : eo.Children.count(d) > 1
                ? eo.Children.only(null)
                : (0, eo.isValidElement)(d)
                ? d.props.children
                : null
            );
          return (0, eo.createElement)(
            tW,
            _extends({}, S, { ref: f }),
            (0, eo.isValidElement)(d)
              ? (0, eo.cloneElement)(d, void 0, h)
              : null
          );
        }
        return (0, eo.createElement)(tW, _extends({}, S, { ref: f }), h);
      });
      tL.displayName = "Slot";
      let tW = (0, eo.forwardRef)((d, f) => {
        let { children: h, ...S } = d;
        return (0, eo.isValidElement)(h)
          ? (0, eo.cloneElement)(h, {
              ...(function (d, f) {
                let h = { ...f };
                for (let S in f) {
                  let w = d[S],
                    B = f[S],
                    D = /^on[A-Z]/.test(S);
                  D
                    ? w && B
                      ? (h[S] = (...d) => {
                          B(...d), w(...d);
                        })
                      : w && (h[S] = w)
                    : "style" === S
                    ? (h[S] = { ...w, ...B })
                    : "className" === S &&
                      (h[S] = [w, B].filter(Boolean).join(" "));
                }
                return { ...d, ...h };
              })(S, h.props),
              ref: f
                ? $6ed0406888f73fc4$export$43e446d32b3d21af(f, h.ref)
                : h.ref,
            })
          : eo.Children.count(h) > 1
          ? eo.Children.only(null)
          : null;
      });
      tW.displayName = "SlotClone";
      let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: d }) =>
        (0, eo.createElement)(eo.Fragment, null, d);
      function $5e63c961fc1ce211$var$isSlottable(d) {
        return (
          (0, eo.isValidElement)(d) &&
          d.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
        );
      }
      let tV = [
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
      ].reduce((d, f) => {
        let h = (0, eo.forwardRef)((d, h) => {
          let { asChild: S, ...w } = d,
            B = S ? tL : f;
          return (
            (0, eo.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, eo.createElement)(B, _extends({}, w, { ref: h }))
          );
        });
        return (h.displayName = `Primitive.${f}`), { ...d, [f]: h };
      }, {});
      function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(d) {
        let f = (0, eo.useRef)(d);
        return (
          (0, eo.useEffect)(() => {
            f.current = d;
          }),
          (0, eo.useMemo)(
            () =>
              (...d) => {
                var h;
                return null === (h = f.current) || void 0 === h
                  ? void 0
                  : h.call(f, ...d);
              },
            []
          )
        );
      }
      let tj = "dismissableLayer.update",
        tU = (0, eo.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        tG = (0, eo.forwardRef)((d, f) => {
          var h;
          let {
              disableOutsidePointerEvents: w = !1,
              onEscapeKeyDown: B,
              onPointerDownOutside: D,
              onFocusOutside: F,
              onInteractOutside: H,
              onDismiss: $,
              ...M
            } = d,
            V = (0, eo.useContext)(tU),
            [j, Z] = (0, eo.useState)(null),
            q =
              null !== (h = null == j ? void 0 : j.ownerDocument) &&
              void 0 !== h
                ? h
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, K] = (0, eo.useState)({}),
            J = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(f, (d) => Z(d)),
            Q = Array.from(V.layers),
            [ee] = [...V.layersWithOutsidePointerEventsDisabled].slice(-1),
            et = Q.indexOf(ee),
            er = j ? Q.indexOf(j) : -1,
            en = V.layersWithOutsidePointerEventsDisabled.size > 0,
            ei = er >= et,
            ea = (function (
              d,
              f = null == globalThis ? void 0 : globalThis.document
            ) {
              let h = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(d),
                S = (0, eo.useRef)(!1),
                w = (0, eo.useRef)(() => {});
              return (
                (0, eo.useEffect)(() => {
                  let handlePointerDown = (d) => {
                      if (d.target && !S.current) {
                        let S = { originalEvent: d };
                        function handleAndDispatchPointerDownOutsideEvent() {
                          $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
                            "dismissableLayer.pointerDownOutside",
                            h,
                            S,
                            { discrete: !0 }
                          );
                        }
                        "touch" === d.pointerType
                          ? (f.removeEventListener("click", w.current),
                            (w.current =
                              handleAndDispatchPointerDownOutsideEvent),
                            f.addEventListener("click", w.current, {
                              once: !0,
                            }))
                          : handleAndDispatchPointerDownOutsideEvent();
                      }
                      S.current = !1;
                    },
                    d = window.setTimeout(() => {
                      f.addEventListener("pointerdown", handlePointerDown);
                    }, 0);
                  return () => {
                    window.clearTimeout(d),
                      f.removeEventListener("pointerdown", handlePointerDown),
                      f.removeEventListener("click", w.current);
                  };
                }, [f, h]),
                { onPointerDownCapture: () => (S.current = !0) }
              );
            })((d) => {
              let f = d.target,
                h = [...V.branches].some((d) => d.contains(f));
              !ei ||
                h ||
                (null == D || D(d),
                null == H || H(d),
                d.defaultPrevented || null == $ || $());
            }, q),
            el = (function (
              d,
              f = null == globalThis ? void 0 : globalThis.document
            ) {
              let h = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(d),
                S = (0, eo.useRef)(!1);
              return (
                (0, eo.useEffect)(() => {
                  let handleFocus = (d) => {
                    d.target &&
                      !S.current &&
                      $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
                        "dismissableLayer.focusOutside",
                        h,
                        { originalEvent: d },
                        { discrete: !1 }
                      );
                  };
                  return (
                    f.addEventListener("focusin", handleFocus),
                    () => f.removeEventListener("focusin", handleFocus)
                  );
                }, [f, h]),
                {
                  onFocusCapture: () => (S.current = !0),
                  onBlurCapture: () => (S.current = !1),
                }
              );
            })((d) => {
              let f = d.target,
                h = [...V.branches].some((d) => d.contains(f));
              h ||
                (null == F || F(d),
                null == H || H(d),
                d.defaultPrevented || null == $ || $());
            }, q);
          return (
            !(function (
              d,
              f = null == globalThis ? void 0 : globalThis.document
            ) {
              let h = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(d);
              (0, eo.useEffect)(() => {
                let handleKeyDown = (d) => {
                  "Escape" === d.key && h(d);
                };
                return (
                  f.addEventListener("keydown", handleKeyDown),
                  () => f.removeEventListener("keydown", handleKeyDown)
                );
              }, [h, f]);
            })((d) => {
              let f = er === V.layers.size - 1;
              f &&
                (null == B || B(d),
                !d.defaultPrevented && $ && (d.preventDefault(), $()));
            }, q),
            (0, eo.useEffect)(() => {
              if (j)
                return (
                  w &&
                    (0 === V.layersWithOutsidePointerEventsDisabled.size &&
                      ((S = q.body.style.pointerEvents),
                      (q.body.style.pointerEvents = "none")),
                    V.layersWithOutsidePointerEventsDisabled.add(j)),
                  V.layers.add(j),
                  $5cb92bef7577960e$var$dispatchUpdate(),
                  () => {
                    w &&
                      1 === V.layersWithOutsidePointerEventsDisabled.size &&
                      (q.body.style.pointerEvents = S);
                  }
                );
            }, [j, q, w, V]),
            (0, eo.useEffect)(
              () => () => {
                j &&
                  (V.layers.delete(j),
                  V.layersWithOutsidePointerEventsDisabled.delete(j),
                  $5cb92bef7577960e$var$dispatchUpdate());
              },
              [j, V]
            ),
            (0, eo.useEffect)(() => {
              let handleUpdate = () => K({});
              return (
                document.addEventListener(tj, handleUpdate),
                () => document.removeEventListener(tj, handleUpdate)
              );
            }, []),
            (0, eo.createElement)(
              tV.div,
              _extends({}, M, {
                ref: J,
                style: {
                  pointerEvents: en ? (ei ? "auto" : "none") : void 0,
                  ...d.style,
                },
                onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  d.onFocusCapture,
                  el.onFocusCapture
                ),
                onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  d.onBlurCapture,
                  el.onBlurCapture
                ),
                onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  d.onPointerDownCapture,
                  ea.onPointerDownCapture
                ),
              })
            )
          );
        });
      function $5cb92bef7577960e$var$dispatchUpdate() {
        let d = new CustomEvent(tj);
        document.dispatchEvent(d);
      }
      function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
        d,
        f,
        h,
        { discrete: S }
      ) {
        let w = h.originalEvent.target,
          B = new CustomEvent(d, { bubbles: !1, cancelable: !0, detail: h });
        (f && w.addEventListener(d, f, { once: !0 }), S)
          ? w && (0, tM.flushSync)(() => w.dispatchEvent(B))
          : w.dispatchEvent(B);
      }
      let tX = 0;
      function $3db38b7d1fb3fe6a$var$createFocusGuard() {
        let d = document.createElement("span");
        return (
          d.setAttribute("data-radix-focus-guard", ""),
          (d.tabIndex = 0),
          (d.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          d
        );
      }
      let tY = "focusScope.autoFocusOnMount",
        tZ = "focusScope.autoFocusOnUnmount",
        tq = { bubbles: !1, cancelable: !0 },
        tK = (0, eo.forwardRef)((d, f) => {
          let {
              loop: h = !1,
              trapped: S = !1,
              onMountAutoFocus: w,
              onUnmountAutoFocus: B,
              ...D
            } = d,
            [F, H] = (0, eo.useState)(null),
            $ = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(w),
            M = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(B),
            V = (0, eo.useRef)(null),
            j = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(f, (d) => H(d)),
            Z = (0, eo.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, eo.useEffect)(() => {
            if (S) {
              function handleFocusIn(d) {
                if (Z.paused || !F) return;
                let f = d.target;
                F.contains(f)
                  ? (V.current = f)
                  : $d3863c46a17e8a28$var$focus(V.current, { select: !0 });
              }
              function handleFocusOut(d) {
                if (Z.paused || !F) return;
                let f = d.relatedTarget;
                null === f ||
                  F.contains(f) ||
                  $d3863c46a17e8a28$var$focus(V.current, { select: !0 });
              }
              document.addEventListener("focusin", handleFocusIn),
                document.addEventListener("focusout", handleFocusOut);
              let d = new MutationObserver(function (d) {
                let f = document.activeElement;
                for (let h of d)
                  h.removedNodes.length > 0 &&
                    !(null != F && F.contains(f)) &&
                    $d3863c46a17e8a28$var$focus(F);
              });
              return (
                F && d.observe(F, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", handleFocusIn),
                    document.removeEventListener("focusout", handleFocusOut),
                    d.disconnect();
                }
              );
            }
          }, [S, F, Z.paused]),
            (0, eo.useEffect)(() => {
              if (F) {
                tJ.add(Z);
                let d = document.activeElement,
                  f = F.contains(d);
                if (!f) {
                  let f = new CustomEvent(tY, tq);
                  F.addEventListener(tY, $),
                    F.dispatchEvent(f),
                    f.defaultPrevented ||
                      ((function (d, { select: f = !1 } = {}) {
                        let h = document.activeElement;
                        for (let S of d)
                          if (
                            ($d3863c46a17e8a28$var$focus(S, { select: f }),
                            document.activeElement !== h)
                          )
                            return;
                      })(
                        $d3863c46a17e8a28$var$getTabbableCandidates(F).filter(
                          (d) => "A" !== d.tagName
                        ),
                        { select: !0 }
                      ),
                      document.activeElement === d &&
                        $d3863c46a17e8a28$var$focus(F));
                }
                return () => {
                  F.removeEventListener(tY, $),
                    setTimeout(() => {
                      let f = new CustomEvent(tZ, tq);
                      F.addEventListener(tZ, M),
                        F.dispatchEvent(f),
                        f.defaultPrevented ||
                          $d3863c46a17e8a28$var$focus(
                            null != d ? d : document.body,
                            { select: !0 }
                          ),
                        F.removeEventListener(tZ, M),
                        tJ.remove(Z);
                    }, 0);
                };
              }
            }, [F, $, M, Z]);
          let q = (0, eo.useCallback)(
            (d) => {
              if ((!h && !S) || Z.paused) return;
              let f = "Tab" === d.key && !d.altKey && !d.ctrlKey && !d.metaKey,
                w = document.activeElement;
              if (f && w) {
                let f = d.currentTarget,
                  [S, B] = (function (d) {
                    let f = $d3863c46a17e8a28$var$getTabbableCandidates(d),
                      h = $d3863c46a17e8a28$var$findVisible(f, d),
                      S = $d3863c46a17e8a28$var$findVisible(f.reverse(), d);
                    return [h, S];
                  })(f),
                  D = S && B;
                D
                  ? d.shiftKey || w !== B
                    ? d.shiftKey &&
                      w === S &&
                      (d.preventDefault(),
                      h && $d3863c46a17e8a28$var$focus(B, { select: !0 }))
                    : (d.preventDefault(),
                      h && $d3863c46a17e8a28$var$focus(S, { select: !0 }))
                  : w === f && d.preventDefault();
              }
            },
            [h, S, Z.paused]
          );
          return (0, eo.createElement)(
            tV.div,
            _extends({ tabIndex: -1 }, D, { ref: j, onKeyDown: q })
          );
        });
      function $d3863c46a17e8a28$var$getTabbableCandidates(d) {
        let f = [],
          h = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (d) => {
              let f = "INPUT" === d.tagName && "hidden" === d.type;
              return d.disabled || d.hidden || f
                ? NodeFilter.FILTER_SKIP
                : d.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; h.nextNode(); ) f.push(h.currentNode);
        return f;
      }
      function $d3863c46a17e8a28$var$findVisible(d, f) {
        for (let h of d)
          if (
            !(function (d, { upTo: f }) {
              if ("hidden" === getComputedStyle(d).visibility) return !0;
              for (; d && (void 0 === f || d !== f); ) {
                if ("none" === getComputedStyle(d).display) return !0;
                d = d.parentElement;
              }
              return !1;
            })(h, { upTo: f })
          )
            return h;
      }
      function $d3863c46a17e8a28$var$focus(d, { select: f = !1 } = {}) {
        if (d && d.focus) {
          var h;
          let S = document.activeElement;
          d.focus({ preventScroll: !0 }),
            d !== S &&
              (h = d) instanceof HTMLInputElement &&
              "select" in h &&
              f &&
              d.select();
        }
      }
      let tJ =
        ((w = []),
        {
          add(d) {
            let f = w[0];
            d !== f && (null == f || f.pause()),
              (w = $d3863c46a17e8a28$var$arrayRemove(w, d)).unshift(d);
          },
          remove(d) {
            var f;
            null === (f = (w = $d3863c46a17e8a28$var$arrayRemove(w, d))[0]) ||
              void 0 === f ||
              f.resume();
          },
        });
      function $d3863c46a17e8a28$var$arrayRemove(d, f) {
        let h = [...d],
          S = h.indexOf(f);
        return -1 !== S && h.splice(S, 1), h;
      }
      let tQ = (null == globalThis ? void 0 : globalThis.document)
          ? eo.useLayoutEffect
          : () => {},
        t0 = ei["useId".toString()] || (() => void 0),
        t1 = 0;
      function floating_ui_core_browser_min_t(d) {
        return d.split("-")[1];
      }
      function floating_ui_core_browser_min_e(d) {
        return "y" === d ? "height" : "width";
      }
      function floating_ui_core_browser_min_n(d) {
        return d.split("-")[0];
      }
      function floating_ui_core_browser_min_o(d) {
        return ["top", "bottom"].includes(floating_ui_core_browser_min_n(d))
          ? "x"
          : "y";
      }
      function floating_ui_core_browser_min_i(d, f, h) {
        let S,
          { reference: w, floating: B } = d,
          D = w.x + w.width / 2 - B.width / 2,
          F = w.y + w.height / 2 - B.height / 2,
          H = floating_ui_core_browser_min_o(f),
          $ = floating_ui_core_browser_min_e(H),
          M = w[$] / 2 - B[$] / 2,
          V = "x" === H;
        switch (floating_ui_core_browser_min_n(f)) {
          case "top":
            S = { x: D, y: w.y - B.height };
            break;
          case "bottom":
            S = { x: D, y: w.y + w.height };
            break;
          case "right":
            S = { x: w.x + w.width, y: F };
            break;
          case "left":
            S = { x: w.x - B.width, y: F };
            break;
          default:
            S = { x: w.x, y: w.y };
        }
        switch (floating_ui_core_browser_min_t(f)) {
          case "start":
            S[H] -= M * (h && V ? -1 : 1);
            break;
          case "end":
            S[H] += M * (h && V ? -1 : 1);
        }
        return S;
      }
      let floating_ui_core_browser_min_r = async (d, f, h) => {
        let {
            placement: S = "bottom",
            strategy: w = "absolute",
            middleware: B = [],
            platform: D,
          } = h,
          F = B.filter(Boolean),
          H = await (null == D.isRTL ? void 0 : D.isRTL(f)),
          $ = await D.getElementRects({
            reference: d,
            floating: f,
            strategy: w,
          }),
          { x: M, y: V } = floating_ui_core_browser_min_i($, S, H),
          j = S,
          Z = {},
          q = 0;
        for (let h = 0; h < F.length; h++) {
          let { name: B, fn: K } = F[h],
            {
              x: J,
              y: Q,
              data: ee,
              reset: et,
            } = await K({
              x: M,
              y: V,
              initialPlacement: S,
              placement: j,
              strategy: w,
              middlewareData: Z,
              rects: $,
              platform: D,
              elements: { reference: d, floating: f },
            });
          (M = null != J ? J : M),
            (V = null != Q ? Q : V),
            (Z = { ...Z, [B]: { ...Z[B], ...ee } }),
            et &&
              q <= 50 &&
              (q++,
              "object" == typeof et &&
                (et.placement && (j = et.placement),
                et.rects &&
                  ($ =
                    !0 === et.rects
                      ? await D.getElementRects({
                          reference: d,
                          floating: f,
                          strategy: w,
                        })
                      : et.rects),
                ({ x: M, y: V } = floating_ui_core_browser_min_i($, j, H))),
              (h = -1));
        }
        return { x: M, y: V, placement: j, strategy: w, middlewareData: Z };
      };
      function floating_ui_core_browser_min_a(d, f) {
        return "function" == typeof d ? d(f) : d;
      }
      function floating_ui_core_browser_min_l(d) {
        return "number" != typeof d
          ? { top: 0, right: 0, bottom: 0, left: 0, ...d }
          : { top: d, right: d, bottom: d, left: d };
      }
      function floating_ui_core_browser_min_s(d) {
        return {
          ...d,
          top: d.y,
          left: d.x,
          right: d.x + d.width,
          bottom: d.y + d.height,
        };
      }
      async function floating_ui_core_browser_min_c(d, f) {
        var h;
        void 0 === f && (f = {});
        let { x: S, y: w, platform: B, rects: D, elements: F, strategy: H } = d,
          {
            boundary: $ = "clippingAncestors",
            rootBoundary: M = "viewport",
            elementContext: V = "floating",
            altBoundary: j = !1,
            padding: Z = 0,
          } = floating_ui_core_browser_min_a(f, d),
          q = floating_ui_core_browser_min_l(Z),
          K = F[j ? ("floating" === V ? "reference" : "floating") : V],
          J = floating_ui_core_browser_min_s(
            await B.getClippingRect({
              element:
                null ==
                  (h = await (null == B.isElement ? void 0 : B.isElement(K))) ||
                h
                  ? K
                  : K.contextElement ||
                    (await (null == B.getDocumentElement
                      ? void 0
                      : B.getDocumentElement(F.floating))),
              boundary: $,
              rootBoundary: M,
              strategy: H,
            })
          ),
          Q = "floating" === V ? { ...D.floating, x: S, y: w } : D.reference,
          ee = await (null == B.getOffsetParent
            ? void 0
            : B.getOffsetParent(F.floating)),
          et = ((await (null == B.isElement ? void 0 : B.isElement(ee))) &&
            (await (null == B.getScale ? void 0 : B.getScale(ee)))) || {
            x: 1,
            y: 1,
          },
          er = floating_ui_core_browser_min_s(
            B.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await B.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: Q,
                  offsetParent: ee,
                  strategy: H,
                })
              : Q
          );
        return {
          top: (J.top - er.top + q.top) / et.y,
          bottom: (er.bottom - J.bottom + q.bottom) / et.y,
          left: (J.left - er.left + q.left) / et.x,
          right: (er.right - J.right + q.right) / et.x,
        };
      }
      let t2 = Math.min,
        t5 = Math.max,
        floating_ui_core_browser_min_g = (d) => ({
          name: "arrow",
          options: d,
          async fn(f) {
            let {
                x: h,
                y: S,
                placement: w,
                rects: B,
                platform: D,
                elements: F,
              } = f,
              { element: H, padding: $ = 0 } =
                floating_ui_core_browser_min_a(d, f) || {};
            if (null == H) return {};
            let M = floating_ui_core_browser_min_l($),
              V = { x: h, y: S },
              j = floating_ui_core_browser_min_o(w),
              Z = floating_ui_core_browser_min_e(j),
              q = await D.getDimensions(H),
              K = "y" === j,
              J = K ? "clientHeight" : "clientWidth",
              Q = B.reference[Z] + B.reference[j] - V[j] - B.floating[Z],
              ee = V[j] - B.reference[j],
              et = await (null == D.getOffsetParent
                ? void 0
                : D.getOffsetParent(H)),
              er = et ? et[J] : 0;
            (er && (await (null == D.isElement ? void 0 : D.isElement(et)))) ||
              (er = F.floating[J] || B.floating[Z]);
            let en = er / 2 - q[Z] / 2 - 1,
              eo = t2(M[K ? "top" : "left"], en),
              ei = t2(M[K ? "bottom" : "right"], en),
              ea = er - q[Z] - ei,
              el = er / 2 - q[Z] / 2 + (Q / 2 - ee / 2),
              ec = t5(eo, t2(el, ea)),
              es =
                null != floating_ui_core_browser_min_t(w) &&
                el != ec &&
                B.reference[Z] / 2 - (el < eo ? eo : ei) - q[Z] / 2 < 0
                  ? el < eo
                    ? eo - el
                    : ea - el
                  : 0;
            return {
              [j]: V[j] - es,
              data: { [j]: ec, centerOffset: el - ec + es },
            };
          },
        }),
        t8 = ["top", "right", "bottom", "left"],
        t4 =
          (t8.reduce((d, f) => d.concat(f, f + "-start", f + "-end"), []),
          { left: "right", right: "left", bottom: "top", top: "bottom" });
      function floating_ui_core_browser_min_y(d) {
        return d.replace(/left|right|bottom|top/g, (d) => t4[d]);
      }
      let t3 = { start: "end", end: "start" };
      function floating_ui_core_browser_min_v(d) {
        return d.replace(/start|end/g, (d) => t3[d]);
      }
      function floating_ui_core_browser_min_R(d, f) {
        return {
          top: d.top - f.height,
          right: d.right - f.width,
          bottom: d.bottom - f.height,
          left: d.left - f.width,
        };
      }
      function floating_ui_core_browser_min_P(d) {
        return t8.some((f) => d[f] >= 0);
      }
      function floating_ui_core_browser_min_k(d) {
        return "x" === d ? "y" : "x";
      }
      function floating_ui_dom_browser_min_n(d) {
        var f;
        return (
          (null == (f = d.ownerDocument) ? void 0 : f.defaultView) || window
        );
      }
      function floating_ui_dom_browser_min_o(d) {
        return floating_ui_dom_browser_min_n(d).getComputedStyle(d);
      }
      function floating_ui_dom_browser_min_i(d) {
        return d instanceof floating_ui_dom_browser_min_n(d).Node;
      }
      function floating_ui_dom_browser_min_r(d) {
        return floating_ui_dom_browser_min_i(d)
          ? (d.nodeName || "").toLowerCase()
          : "#document";
      }
      function floating_ui_dom_browser_min_c(d) {
        return d instanceof floating_ui_dom_browser_min_n(d).HTMLElement;
      }
      function floating_ui_dom_browser_min_l(d) {
        return d instanceof floating_ui_dom_browser_min_n(d).Element;
      }
      function floating_ui_dom_browser_min_s(d) {
        return (
          "undefined" != typeof ShadowRoot &&
          (d instanceof floating_ui_dom_browser_min_n(d).ShadowRoot ||
            d instanceof ShadowRoot)
        );
      }
      function floating_ui_dom_browser_min_f(d) {
        let {
          overflow: f,
          overflowX: h,
          overflowY: S,
          display: w,
        } = floating_ui_dom_browser_min_o(d);
        return (
          /auto|scroll|overlay|hidden|clip/.test(f + S + h) &&
          !["inline", "contents"].includes(w)
        );
      }
      function floating_ui_dom_browser_min_d(d) {
        let f = floating_ui_dom_browser_min_a(),
          h = floating_ui_dom_browser_min_o(d);
        return (
          "none" !== h.transform ||
          "none" !== h.perspective ||
          (!f && !!h.backdropFilter && "none" !== h.backdropFilter) ||
          (!f && !!h.filter && "none" !== h.filter) ||
          ["transform", "perspective", "filter"].some((d) =>
            (h.willChange || "").includes(d)
          ) ||
          ["paint", "layout", "strict", "content"].some((d) =>
            (h.contain || "").includes(d)
          )
        );
      }
      function floating_ui_dom_browser_min_a() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function floating_ui_dom_browser_min_h(d) {
        return ["html", "body", "#document"].includes(
          floating_ui_dom_browser_min_r(d)
        );
      }
      let t7 = Math.min,
        t6 = Math.max,
        t9 = Math.round,
        rt = Math.floor,
        floating_ui_dom_browser_min_w = (d) => ({ x: d, y: d });
      function floating_ui_dom_browser_min_x(d) {
        let f = floating_ui_dom_browser_min_o(d),
          h = parseFloat(f.width) || 0,
          S = parseFloat(f.height) || 0,
          w = floating_ui_dom_browser_min_c(d),
          B = w ? d.offsetWidth : h,
          D = w ? d.offsetHeight : S,
          F = t9(h) !== B || t9(S) !== D;
        return F && ((h = B), (S = D)), { width: h, height: S, $: F };
      }
      function floating_ui_dom_browser_min_v(d) {
        return floating_ui_dom_browser_min_l(d) ? d : d.contextElement;
      }
      function floating_ui_dom_browser_min_b(d) {
        let f = floating_ui_dom_browser_min_v(d);
        if (!floating_ui_dom_browser_min_c(f))
          return floating_ui_dom_browser_min_w(1);
        let h = f.getBoundingClientRect(),
          { width: S, height: w, $: B } = floating_ui_dom_browser_min_x(f),
          D = (B ? t9(h.width) : h.width) / S,
          F = (B ? t9(h.height) : h.height) / w;
        return (
          (D && Number.isFinite(D)) || (D = 1),
          (F && Number.isFinite(F)) || (F = 1),
          { x: D, y: F }
        );
      }
      let rr = floating_ui_dom_browser_min_w(0);
      function floating_ui_dom_browser_min_R(d, f, h) {
        var S, w;
        if ((void 0 === f && (f = !0), !floating_ui_dom_browser_min_a()))
          return rr;
        let B = d ? floating_ui_dom_browser_min_n(d) : window;
        return !h || (f && h !== B)
          ? rr
          : {
              x: (null == (S = B.visualViewport) ? void 0 : S.offsetLeft) || 0,
              y: (null == (w = B.visualViewport) ? void 0 : w.offsetTop) || 0,
            };
      }
      function floating_ui_dom_browser_min_T(d, f, h, S) {
        void 0 === f && (f = !1), void 0 === h && (h = !1);
        let w = d.getBoundingClientRect(),
          B = floating_ui_dom_browser_min_v(d),
          D = floating_ui_dom_browser_min_w(1);
        f &&
          (S
            ? floating_ui_dom_browser_min_l(S) &&
              (D = floating_ui_dom_browser_min_b(S))
            : (D = floating_ui_dom_browser_min_b(d)));
        let F = floating_ui_dom_browser_min_R(B, h, S),
          H = (w.left + F.x) / D.x,
          $ = (w.top + F.y) / D.y,
          M = w.width / D.x,
          V = w.height / D.y;
        if (B) {
          let d = floating_ui_dom_browser_min_n(B),
            f =
              S && floating_ui_dom_browser_min_l(S)
                ? floating_ui_dom_browser_min_n(S)
                : S,
            h = d.frameElement;
          for (; h && S && f !== d; ) {
            let d = floating_ui_dom_browser_min_b(h),
              f = h.getBoundingClientRect(),
              S = getComputedStyle(h),
              w = f.left + (h.clientLeft + parseFloat(S.paddingLeft)) * d.x,
              B = f.top + (h.clientTop + parseFloat(S.paddingTop)) * d.y;
            (H *= d.x),
              ($ *= d.y),
              (M *= d.x),
              (V *= d.y),
              (H += w),
              ($ += B),
              (h = floating_ui_dom_browser_min_n(h).frameElement);
          }
        }
        return floating_ui_core_browser_min_s({
          width: M,
          height: V,
          x: H,
          y: $,
        });
      }
      function floating_ui_dom_browser_min_S(d) {
        return (
          (floating_ui_dom_browser_min_i(d) ? d.ownerDocument : d.document) ||
          window.document
        ).documentElement;
      }
      function floating_ui_dom_browser_min_E(d) {
        return floating_ui_dom_browser_min_l(d)
          ? { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop }
          : { scrollLeft: d.pageXOffset, scrollTop: d.pageYOffset };
      }
      function floating_ui_dom_browser_min_C(d) {
        return (
          floating_ui_dom_browser_min_T(floating_ui_dom_browser_min_S(d)).left +
          floating_ui_dom_browser_min_E(d).scrollLeft
        );
      }
      function floating_ui_dom_browser_min_F(d) {
        if ("html" === floating_ui_dom_browser_min_r(d)) return d;
        let f =
          d.assignedSlot ||
          d.parentNode ||
          (floating_ui_dom_browser_min_s(d) && d.host) ||
          floating_ui_dom_browser_min_S(d);
        return floating_ui_dom_browser_min_s(f) ? f.host : f;
      }
      function floating_ui_dom_browser_min_D(d, f) {
        var h;
        void 0 === f && (f = []);
        let S = (function floating_ui_dom_browser_min_W(d) {
            let f = floating_ui_dom_browser_min_F(d);
            return floating_ui_dom_browser_min_h(f)
              ? d.ownerDocument
                ? d.ownerDocument.body
                : d.body
              : floating_ui_dom_browser_min_c(f) &&
                floating_ui_dom_browser_min_f(f)
              ? f
              : floating_ui_dom_browser_min_W(f);
          })(d),
          w = S === (null == (h = d.ownerDocument) ? void 0 : h.body),
          B = floating_ui_dom_browser_min_n(S);
        return w
          ? f.concat(
              B,
              B.visualViewport || [],
              floating_ui_dom_browser_min_f(S) ? S : []
            )
          : f.concat(S, floating_ui_dom_browser_min_D(S));
      }
      function floating_ui_dom_browser_min_H(d, f, h) {
        let S;
        if ("viewport" === f)
          S = (function (d, f) {
            let h = floating_ui_dom_browser_min_n(d),
              S = floating_ui_dom_browser_min_S(d),
              w = h.visualViewport,
              B = S.clientWidth,
              D = S.clientHeight,
              F = 0,
              H = 0;
            if (w) {
              (B = w.width), (D = w.height);
              let d = floating_ui_dom_browser_min_a();
              (!d || (d && "fixed" === f)) &&
                ((F = w.offsetLeft), (H = w.offsetTop));
            }
            return { width: B, height: D, x: F, y: H };
          })(d, h);
        else if ("document" === f)
          S = (function (d) {
            let f = floating_ui_dom_browser_min_S(d),
              h = floating_ui_dom_browser_min_E(d),
              S = d.ownerDocument.body,
              w = t6(
                f.scrollWidth,
                f.clientWidth,
                S.scrollWidth,
                S.clientWidth
              ),
              B = t6(
                f.scrollHeight,
                f.clientHeight,
                S.scrollHeight,
                S.clientHeight
              ),
              D = -h.scrollLeft + floating_ui_dom_browser_min_C(d),
              F = -h.scrollTop;
            return (
              "rtl" === floating_ui_dom_browser_min_o(S).direction &&
                (D += t6(f.clientWidth, S.clientWidth) - w),
              { width: w, height: B, x: D, y: F }
            );
          })(floating_ui_dom_browser_min_S(d));
        else if (floating_ui_dom_browser_min_l(f))
          S = (function (d, f) {
            let h = floating_ui_dom_browser_min_T(d, !0, "fixed" === f),
              S = h.top + d.clientTop,
              w = h.left + d.clientLeft,
              B = floating_ui_dom_browser_min_c(d)
                ? floating_ui_dom_browser_min_b(d)
                : floating_ui_dom_browser_min_w(1);
            return {
              width: d.clientWidth * B.x,
              height: d.clientHeight * B.y,
              x: w * B.x,
              y: S * B.y,
            };
          })(f, h);
        else {
          let h = floating_ui_dom_browser_min_R(d);
          S = { ...f, x: f.x - h.x, y: f.y - h.y };
        }
        return floating_ui_core_browser_min_s(S);
      }
      function floating_ui_dom_browser_min_M(d, f) {
        return floating_ui_dom_browser_min_c(d) &&
          "fixed" !== floating_ui_dom_browser_min_o(d).position
          ? f
            ? f(d)
            : d.offsetParent
          : null;
      }
      function floating_ui_dom_browser_min_P(d, f) {
        let h = floating_ui_dom_browser_min_n(d);
        if (!floating_ui_dom_browser_min_c(d)) return h;
        let S = floating_ui_dom_browser_min_M(d, f);
        for (
          ;
          S &&
          ["table", "td", "th"].includes(floating_ui_dom_browser_min_r(S)) &&
          "static" === floating_ui_dom_browser_min_o(S).position;

        )
          S = floating_ui_dom_browser_min_M(S, f);
        return S &&
          ("html" === floating_ui_dom_browser_min_r(S) ||
            ("body" === floating_ui_dom_browser_min_r(S) &&
              "static" === floating_ui_dom_browser_min_o(S).position &&
              !floating_ui_dom_browser_min_d(S)))
          ? h
          : S ||
              (function (d) {
                let f = floating_ui_dom_browser_min_F(d);
                for (
                  ;
                  floating_ui_dom_browser_min_c(f) &&
                  !floating_ui_dom_browser_min_h(f);

                ) {
                  if (floating_ui_dom_browser_min_d(f)) return f;
                  f = floating_ui_dom_browser_min_F(f);
                }
                return null;
              })(d) ||
              h;
      }
      let rn = {
        getClippingRect: function (d) {
          let { element: f, boundary: h, rootBoundary: S, strategy: w } = d,
            B =
              "clippingAncestors" === h
                ? (function (d, f) {
                    let h = f.get(d);
                    if (h) return h;
                    let S = floating_ui_dom_browser_min_D(d).filter(
                        (d) =>
                          floating_ui_dom_browser_min_l(d) &&
                          "body" !== floating_ui_dom_browser_min_r(d)
                      ),
                      w = null,
                      B = "fixed" === floating_ui_dom_browser_min_o(d).position,
                      D = B ? floating_ui_dom_browser_min_F(d) : d;
                    for (
                      ;
                      floating_ui_dom_browser_min_l(D) &&
                      !floating_ui_dom_browser_min_h(D);

                    ) {
                      let f = floating_ui_dom_browser_min_o(D),
                        h = floating_ui_dom_browser_min_d(D);
                      h || "fixed" !== f.position || (w = null),
                        (
                          B
                            ? !h && !w
                            : (!h &&
                                "static" === f.position &&
                                w &&
                                ["absolute", "fixed"].includes(w.position)) ||
                              (floating_ui_dom_browser_min_f(D) &&
                                !h &&
                                (function floating_ui_dom_browser_min_O(d, f) {
                                  let h = floating_ui_dom_browser_min_F(d);
                                  return (
                                    !(
                                      h === f ||
                                      !floating_ui_dom_browser_min_l(h) ||
                                      floating_ui_dom_browser_min_h(h)
                                    ) &&
                                    ("fixed" ===
                                      floating_ui_dom_browser_min_o(h)
                                        .position ||
                                      floating_ui_dom_browser_min_O(h, f))
                                  );
                                })(d, D))
                        )
                          ? (S = S.filter((d) => d !== D))
                          : (w = f),
                        (D = floating_ui_dom_browser_min_F(D));
                    }
                    return f.set(d, S), S;
                  })(f, this._c)
                : [].concat(h),
            D = [...B, S],
            F = D[0],
            H = D.reduce((d, h) => {
              let S = floating_ui_dom_browser_min_H(f, h, w);
              return (
                (d.top = t6(S.top, d.top)),
                (d.right = t7(S.right, d.right)),
                (d.bottom = t7(S.bottom, d.bottom)),
                (d.left = t6(S.left, d.left)),
                d
              );
            }, floating_ui_dom_browser_min_H(f, F, w));
          return {
            width: H.right - H.left,
            height: H.bottom - H.top,
            x: H.left,
            y: H.top,
          };
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function (d) {
          let { rect: f, offsetParent: h, strategy: S } = d,
            w = floating_ui_dom_browser_min_c(h),
            B = floating_ui_dom_browser_min_S(h);
          if (h === B) return f;
          let D = { scrollLeft: 0, scrollTop: 0 },
            F = floating_ui_dom_browser_min_w(1),
            H = floating_ui_dom_browser_min_w(0);
          if (
            (w || (!w && "fixed" !== S)) &&
            (("body" !== floating_ui_dom_browser_min_r(h) ||
              floating_ui_dom_browser_min_f(B)) &&
              (D = floating_ui_dom_browser_min_E(h)),
            floating_ui_dom_browser_min_c(h))
          ) {
            let d = floating_ui_dom_browser_min_T(h);
            (F = floating_ui_dom_browser_min_b(h)),
              (H.x = d.x + h.clientLeft),
              (H.y = d.y + h.clientTop);
          }
          return {
            width: f.width * F.x,
            height: f.height * F.y,
            x: f.x * F.x - D.scrollLeft * F.x + H.x,
            y: f.y * F.y - D.scrollTop * F.y + H.y,
          };
        },
        isElement: floating_ui_dom_browser_min_l,
        getDimensions: function (d) {
          return floating_ui_dom_browser_min_x(d);
        },
        getOffsetParent: floating_ui_dom_browser_min_P,
        getDocumentElement: floating_ui_dom_browser_min_S,
        getScale: floating_ui_dom_browser_min_b,
        async getElementRects(d) {
          let { reference: f, floating: h, strategy: S } = d,
            w = this.getOffsetParent || floating_ui_dom_browser_min_P,
            B = this.getDimensions;
          return {
            reference: (function (d, f, h) {
              let S = floating_ui_dom_browser_min_c(f),
                w = floating_ui_dom_browser_min_S(f),
                B = "fixed" === h,
                D = floating_ui_dom_browser_min_T(d, !0, B, f),
                F = { scrollLeft: 0, scrollTop: 0 },
                H = floating_ui_dom_browser_min_w(0);
              if (S || (!S && !B)) {
                if (
                  (("body" !== floating_ui_dom_browser_min_r(f) ||
                    floating_ui_dom_browser_min_f(w)) &&
                    (F = floating_ui_dom_browser_min_E(f)),
                  floating_ui_dom_browser_min_c(f))
                ) {
                  let d = floating_ui_dom_browser_min_T(f, !0, B, f);
                  (H.x = d.x + f.clientLeft), (H.y = d.y + f.clientTop);
                } else w && (H.x = floating_ui_dom_browser_min_C(w));
              }
              return {
                x: D.left + F.scrollLeft - H.x,
                y: D.top + F.scrollTop - H.y,
                width: D.width,
                height: D.height,
              };
            })(f, await w(h), S),
            floating: { x: 0, y: 0, ...(await B(h)) },
          };
        },
        getClientRects: (d) => Array.from(d.getClientRects()),
        isRTL: (d) => "rtl" === floating_ui_dom_browser_min_o(d).direction,
      };
      function floating_ui_dom_browser_min_B(d, f, h, S) {
        void 0 === S && (S = {});
        let {
            ancestorScroll: w = !0,
            ancestorResize: B = !0,
            elementResize: D = !0,
            layoutShift: F = "function" == typeof IntersectionObserver,
            animationFrame: H = !1,
          } = S,
          $ = floating_ui_dom_browser_min_v(d),
          M =
            w || B
              ? [
                  ...($ ? floating_ui_dom_browser_min_D($) : []),
                  ...floating_ui_dom_browser_min_D(f),
                ]
              : [];
        M.forEach((d) => {
          w && d.addEventListener("scroll", h, { passive: !0 }),
            B && d.addEventListener("resize", h);
        });
        let V =
            $ && F
              ? (function (d, f) {
                  let h,
                    S = null,
                    w = floating_ui_dom_browser_min_S(d);
                  function r() {
                    clearTimeout(h), S && S.disconnect(), (S = null);
                  }
                  return (
                    (function c(B, D) {
                      void 0 === B && (B = !1), void 0 === D && (D = 1), r();
                      let {
                        left: F,
                        top: H,
                        width: $,
                        height: M,
                      } = d.getBoundingClientRect();
                      if ((B || f(), !$ || !M)) return;
                      let V = rt(H),
                        j = rt(w.clientWidth - (F + $)),
                        Z = rt(w.clientHeight - (H + M)),
                        q = rt(F),
                        K = !0;
                      (S = new IntersectionObserver(
                        (d) => {
                          let f = d[0].intersectionRatio;
                          if (f !== D) {
                            if (!K) return c();
                            0 === f
                              ? (h = setTimeout(() => {
                                  c(!1, 1e-7);
                                }, 100))
                              : c(!1, f);
                          }
                          K = !1;
                        },
                        {
                          rootMargin:
                            -V + "px " + -j + "px " + -Z + "px " + -q + "px",
                          threshold: D,
                        }
                      )).observe(d);
                    })(!0),
                    r
                  );
                })($, h)
              : null,
          j,
          Z = null;
        D &&
          ((Z = new ResizeObserver(h)), $ && !H && Z.observe($), Z.observe(f));
        let q = H ? floating_ui_dom_browser_min_T(d) : null;
        return (
          H &&
            (function e() {
              let f = floating_ui_dom_browser_min_T(d);
              q &&
                (f.x !== q.x ||
                  f.y !== q.y ||
                  f.width !== q.width ||
                  f.height !== q.height) &&
                h(),
                (q = f),
                (j = requestAnimationFrame(e));
            })(),
          h(),
          () => {
            M.forEach((d) => {
              w && d.removeEventListener("scroll", h),
                B && d.removeEventListener("resize", h);
            }),
              V && V(),
              Z && Z.disconnect(),
              (Z = null),
              H && cancelAnimationFrame(j);
          }
        );
      }
      let floating_ui_dom_browser_min_N = (d, f, h) => {
          let S = new Map(),
            w = { platform: rn, ...h },
            B = { ...w.platform, _c: S };
          return floating_ui_core_browser_min_r(d, f, { ...w, platform: B });
        },
        floating_ui_react_dom_esm_arrow = (d) => ({
          name: "arrow",
          options: d,
          fn(f) {
            let { element: h, padding: S } = "function" == typeof d ? d(f) : d;
            if (h && {}.hasOwnProperty.call(h, "current")) {
              if (null != h.current)
                return floating_ui_core_browser_min_g({
                  element: h.current,
                  padding: S,
                }).fn(f);
            } else if (h)
              return floating_ui_core_browser_min_g({
                element: h,
                padding: S,
              }).fn(f);
            return {};
          },
        });
      var ro =
        "undefined" != typeof document ? eo.useLayoutEffect : eo.useEffect;
      function deepEqual(d, f) {
        let h, S, w;
        if (d === f) return !0;
        if (typeof d != typeof f) return !1;
        if ("function" == typeof d && d.toString() === f.toString()) return !0;
        if (d && f && "object" == typeof d) {
          if (Array.isArray(d)) {
            if ((h = d.length) != f.length) return !1;
            for (S = h; 0 != S--; ) if (!deepEqual(d[S], f[S])) return !1;
            return !0;
          }
          if ((h = (w = Object.keys(d)).length) !== Object.keys(f).length)
            return !1;
          for (S = h; 0 != S--; )
            if (!{}.hasOwnProperty.call(f, w[S])) return !1;
          for (S = h; 0 != S--; ) {
            let h = w[S];
            if (("_owner" !== h || !d.$$typeof) && !deepEqual(d[h], f[h]))
              return !1;
          }
          return !0;
        }
        return d != d && f != f;
      }
      function getDPR(d) {
        if ("undefined" == typeof window) return 1;
        let f = d.ownerDocument.defaultView || window;
        return f.devicePixelRatio || 1;
      }
      function roundByDPR(d, f) {
        let h = getDPR(d);
        return Math.round(f * h) / h;
      }
      function useLatestRef(d) {
        let f = eo.useRef(d);
        return (
          ro(() => {
            f.current = d;
          }),
          f
        );
      }
      let ri = (0, eo.forwardRef)((d, f) => {
          let { children: h, width: S = 10, height: w = 5, ...B } = d;
          return (0, eo.createElement)(
            tV.svg,
            _extends({}, B, {
              ref: f,
              width: S,
              height: w,
              viewBox: "0 0 30 10",
              preserveAspectRatio: "none",
            }),
            d.asChild
              ? h
              : (0, eo.createElement)("polygon", { points: "0,0 30,0 15,10" })
          );
        }),
        ra = "Popper",
        [rl, rc] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(ra),
        [rs, rd] = rl(ra),
        rf = (0, eo.forwardRef)((d, f) => {
          let { __scopePopper: h, virtualRef: S, ...w } = d,
            B = rd("PopperAnchor", h),
            D = (0, eo.useRef)(null),
            F = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(f, D);
          return (
            (0, eo.useEffect)(() => {
              B.onAnchorChange((null == S ? void 0 : S.current) || D.current);
            }),
            S
              ? null
              : (0, eo.createElement)(tV.div, _extends({}, w, { ref: F }))
          );
        }),
        ru = "PopperContent",
        [rg, rp] = rl(ru),
        rm = (0, eo.forwardRef)((d, f) => {
          var h, S, w, B, D, F, H, $, M, V, j, Z, q, K;
          let {
              __scopePopper: J,
              side: Q = "bottom",
              sideOffset: ee = 0,
              align: et = "center",
              alignOffset: er = 0,
              arrowPadding: en = 0,
              collisionBoundary: ei = [],
              collisionPadding: ea = 0,
              sticky: el = "partial",
              hideWhenDetached: ec = !1,
              avoidCollisions: es = !0,
              onPlaced: ed,
              ...ef
            } = d,
            eu = rd(ru, J),
            [eg, ep] = (0, eo.useState)(null),
            em = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(f, (d) => ep(d)),
            [eh, eb] = (0, eo.useState)(null),
            ey = (function (d) {
              let [f, h] = (0, eo.useState)(void 0);
              return (
                tQ(() => {
                  if (d) {
                    h({ width: d.offsetWidth, height: d.offsetHeight });
                    let f = new ResizeObserver((f) => {
                      let S, w;
                      if (!Array.isArray(f) || !f.length) return;
                      let B = f[0];
                      if ("borderBoxSize" in B) {
                        let d = B.borderBoxSize,
                          f = Array.isArray(d) ? d[0] : d;
                        (S = f.inlineSize), (w = f.blockSize);
                      } else (S = d.offsetWidth), (w = d.offsetHeight);
                      h({ width: S, height: w });
                    });
                    return (
                      f.observe(d, { box: "border-box" }), () => f.unobserve(d)
                    );
                  }
                  h(void 0);
                }, [d]),
                f
              );
            })(eh),
            ev =
              null !== (h = null == ey ? void 0 : ey.width) && void 0 !== h
                ? h
                : 0,
            e_ =
              null !== (S = null == ey ? void 0 : ey.height) && void 0 !== S
                ? S
                : 0,
            eS =
              "number" == typeof ea
                ? ea
                : { top: 0, right: 0, bottom: 0, left: 0, ...ea },
            ex = Array.isArray(ei) ? ei : [ei],
            ew = ex.length > 0,
            eB = {
              padding: eS,
              boundary: ex.filter($cf1ac5d9fe0e8206$var$isNotNull),
              altBoundary: ew,
            },
            {
              refs: eA,
              floatingStyles: eD,
              placement: eF,
              isPositioned: ek,
              middlewareData: eE,
            } = (function (d) {
              void 0 === d && (d = {});
              let {
                  placement: f = "bottom",
                  strategy: h = "absolute",
                  middleware: S = [],
                  platform: w,
                  elements: { reference: B, floating: D } = {},
                  transform: F = !0,
                  whileElementsMounted: H,
                  open: $,
                } = d,
                [M, V] = eo.useState({
                  x: 0,
                  y: 0,
                  strategy: h,
                  placement: f,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [j, Z] = eo.useState(S);
              deepEqual(j, S) || Z(S);
              let [q, K] = eo.useState(null),
                [J, Q] = eo.useState(null),
                ee = eo.useCallback(
                  (d) => {
                    d != ei.current && ((ei.current = d), K(d));
                  },
                  [K]
                ),
                et = eo.useCallback(
                  (d) => {
                    d !== ea.current && ((ea.current = d), Q(d));
                  },
                  [Q]
                ),
                er = B || q,
                en = D || J,
                ei = eo.useRef(null),
                ea = eo.useRef(null),
                el = eo.useRef(M),
                ec = useLatestRef(H),
                es = useLatestRef(w),
                ed = eo.useCallback(() => {
                  if (!ei.current || !ea.current) return;
                  let d = { placement: f, strategy: h, middleware: j };
                  es.current && (d.platform = es.current),
                    floating_ui_dom_browser_min_N(
                      ei.current,
                      ea.current,
                      d
                    ).then((d) => {
                      let f = { ...d, isPositioned: !0 };
                      ef.current &&
                        !deepEqual(el.current, f) &&
                        ((el.current = f),
                        tM.flushSync(() => {
                          V(f);
                        }));
                    });
                }, [j, f, h, es]);
              ro(() => {
                !1 === $ &&
                  el.current.isPositioned &&
                  ((el.current.isPositioned = !1),
                  V((d) => ({ ...d, isPositioned: !1 })));
              }, [$]);
              let ef = eo.useRef(!1);
              ro(
                () => (
                  (ef.current = !0),
                  () => {
                    ef.current = !1;
                  }
                ),
                []
              ),
                ro(() => {
                  if (
                    (er && (ei.current = er), en && (ea.current = en), er && en)
                  ) {
                    if (ec.current) return ec.current(er, en, ed);
                    ed();
                  }
                }, [er, en, ed, ec]);
              let eu = eo.useMemo(
                  () => ({
                    reference: ei,
                    floating: ea,
                    setReference: ee,
                    setFloating: et,
                  }),
                  [ee, et]
                ),
                eg = eo.useMemo(
                  () => ({ reference: er, floating: en }),
                  [er, en]
                ),
                ep = eo.useMemo(() => {
                  let d = { position: h, left: 0, top: 0 };
                  if (!eg.floating) return d;
                  let f = roundByDPR(eg.floating, M.x),
                    S = roundByDPR(eg.floating, M.y);
                  return F
                    ? {
                        ...d,
                        transform: "translate(" + f + "px, " + S + "px)",
                        ...(getDPR(eg.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: h, left: f, top: S };
                }, [h, F, eg.floating, M.x, M.y]);
              return eo.useMemo(
                () => ({
                  ...M,
                  update: ed,
                  refs: eu,
                  elements: eg,
                  floatingStyles: ep,
                }),
                [M, ed, eu, eg, ep]
              );
            })({
              strategy: "fixed",
              placement: Q + ("center" !== et ? "-" + et : ""),
              whileElementsMounted: floating_ui_dom_browser_min_B,
              elements: { reference: eu.anchor },
              middleware: [
                {
                  name: "offset",
                  options: (M = { mainAxis: ee + e_, alignmentAxis: er }),
                  async fn(d) {
                    let { x: f, y: h } = d,
                      S = await (async function (d, f) {
                        let { placement: h, platform: S, elements: w } = d,
                          B = await (null == S.isRTL
                            ? void 0
                            : S.isRTL(w.floating)),
                          D = floating_ui_core_browser_min_n(h),
                          F = floating_ui_core_browser_min_t(h),
                          H = "x" === floating_ui_core_browser_min_o(h),
                          $ = ["left", "top"].includes(D) ? -1 : 1,
                          M = B && H ? -1 : 1,
                          V = floating_ui_core_browser_min_a(f, d),
                          {
                            mainAxis: j,
                            crossAxis: Z,
                            alignmentAxis: q,
                          } = "number" == typeof V
                            ? { mainAxis: V, crossAxis: 0, alignmentAxis: null }
                            : {
                                mainAxis: 0,
                                crossAxis: 0,
                                alignmentAxis: null,
                                ...V,
                              };
                        return (
                          F &&
                            "number" == typeof q &&
                            (Z = "end" === F ? -1 * q : q),
                          H ? { x: Z * M, y: j * $ } : { x: j * $, y: Z * M }
                        );
                      })(d, M);
                    return { x: f + S.x, y: h + S.y, data: S };
                  },
                },
                es && {
                  name: "shift",
                  options: (j = {
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === el
                        ? (void 0 === V && (V = {}),
                          {
                            options: V,
                            fn(d) {
                              let {
                                  x: f,
                                  y: h,
                                  placement: S,
                                  rects: w,
                                  middlewareData: B,
                                } = d,
                                {
                                  offset: D = 0,
                                  mainAxis: F = !0,
                                  crossAxis: H = !0,
                                } = floating_ui_core_browser_min_a(V, d),
                                $ = { x: f, y: h },
                                M = floating_ui_core_browser_min_o(S),
                                j = floating_ui_core_browser_min_k(M),
                                Z = $[M],
                                q = $[j],
                                K = floating_ui_core_browser_min_a(D, d),
                                J =
                                  "number" == typeof K
                                    ? { mainAxis: K, crossAxis: 0 }
                                    : { mainAxis: 0, crossAxis: 0, ...K };
                              if (F) {
                                let d = "y" === M ? "height" : "width",
                                  f =
                                    w.reference[M] - w.floating[d] + J.mainAxis,
                                  h =
                                    w.reference[M] +
                                    w.reference[d] -
                                    J.mainAxis;
                                Z < f ? (Z = f) : Z > h && (Z = h);
                              }
                              if (H) {
                                var Q, ee;
                                let d = "y" === M ? "width" : "height",
                                  f = ["top", "left"].includes(
                                    floating_ui_core_browser_min_n(S)
                                  ),
                                  h =
                                    w.reference[j] -
                                    w.floating[d] +
                                    ((f &&
                                      (null == (Q = B.offset)
                                        ? void 0
                                        : Q[j])) ||
                                      0) +
                                    (f ? 0 : J.crossAxis),
                                  D =
                                    w.reference[j] +
                                    w.reference[d] +
                                    (f
                                      ? 0
                                      : (null == (ee = B.offset)
                                          ? void 0
                                          : ee[j]) || 0) -
                                    (f ? J.crossAxis : 0);
                                q < h ? (q = h) : q > D && (q = D);
                              }
                              return { [M]: Z, [j]: q };
                            },
                          })
                        : void 0,
                    ...eB,
                  }),
                  async fn(d) {
                    let { x: f, y: h, placement: S } = d,
                      {
                        mainAxis: w = !0,
                        crossAxis: B = !1,
                        limiter: D = {
                          fn: (d) => {
                            let { x: f, y: h } = d;
                            return { x: f, y: h };
                          },
                        },
                        ...F
                      } = floating_ui_core_browser_min_a(j, d),
                      H = { x: f, y: h },
                      $ = await floating_ui_core_browser_min_c(d, F),
                      M = floating_ui_core_browser_min_o(
                        floating_ui_core_browser_min_n(S)
                      ),
                      V = floating_ui_core_browser_min_k(M),
                      Z = H[M],
                      q = H[V];
                    if (w) {
                      let d = "y" === M ? "bottom" : "right";
                      Z = t5(
                        Z + $["y" === M ? "top" : "left"],
                        t2(Z, Z - $[d])
                      );
                    }
                    B &&
                      (q = t5(
                        q + $["y" === V ? "top" : "left"],
                        t2(q, q - $["y" === V ? "bottom" : "right"])
                      ));
                    let K = D.fn({ ...d, [M]: Z, [V]: q });
                    return { ...K, data: { x: K.x - f, y: K.y - h } };
                  },
                },
                es && {
                  name: "flip",
                  options: (Z = { ...eB }),
                  async fn(d) {
                    var f, h, S, w;
                    let {
                        placement: B,
                        middlewareData: D,
                        rects: F,
                        initialPlacement: H,
                        platform: $,
                        elements: M,
                      } = d,
                      {
                        mainAxis: V = !0,
                        crossAxis: j = !0,
                        fallbackPlacements: q,
                        fallbackStrategy: K = "bestFit",
                        fallbackAxisSideDirection: J = "none",
                        flipAlignment: Q = !0,
                        ...ee
                      } = floating_ui_core_browser_min_a(Z, d),
                      et = floating_ui_core_browser_min_n(B),
                      er = floating_ui_core_browser_min_n(H) === H,
                      en = await (null == $.isRTL
                        ? void 0
                        : $.isRTL(M.floating)),
                      eo =
                        q ||
                        (er || !Q
                          ? [floating_ui_core_browser_min_y(H)]
                          : (function (d) {
                              let f = floating_ui_core_browser_min_y(d);
                              return [
                                floating_ui_core_browser_min_v(d),
                                f,
                                floating_ui_core_browser_min_v(f),
                              ];
                            })(H));
                    q ||
                      "none" === J ||
                      eo.push(
                        ...(function (d, f, h, S) {
                          let w = floating_ui_core_browser_min_t(d),
                            B = (function (d, f, h) {
                              let S = ["left", "right"],
                                w = ["right", "left"];
                              switch (d) {
                                case "top":
                                case "bottom":
                                  return h ? (f ? w : S) : f ? S : w;
                                case "left":
                                case "right":
                                  return f
                                    ? ["top", "bottom"]
                                    : ["bottom", "top"];
                                default:
                                  return [];
                              }
                            })(
                              floating_ui_core_browser_min_n(d),
                              "start" === h,
                              S
                            );
                          return (
                            w &&
                              ((B = B.map((d) => d + "-" + w)),
                              f &&
                                (B = B.concat(
                                  B.map(floating_ui_core_browser_min_v)
                                ))),
                            B
                          );
                        })(H, Q, J, en)
                      );
                    let ei = [H, ...eo],
                      ea = await floating_ui_core_browser_min_c(d, ee),
                      el = [],
                      ec = (null == (f = D.flip) ? void 0 : f.overflows) || [];
                    if ((V && el.push(ea[et]), j)) {
                      let { main: d, cross: f } = (function (d, f, h) {
                        void 0 === h && (h = !1);
                        let S = floating_ui_core_browser_min_t(d),
                          w = floating_ui_core_browser_min_o(d),
                          B = floating_ui_core_browser_min_e(w),
                          D =
                            "x" === w
                              ? S === (h ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === S
                              ? "bottom"
                              : "top";
                        return (
                          f.reference[B] > f.floating[B] &&
                            (D = floating_ui_core_browser_min_y(D)),
                          { main: D, cross: floating_ui_core_browser_min_y(D) }
                        );
                      })(B, F, en);
                      el.push(ea[d], ea[f]);
                    }
                    if (
                      ((ec = [...ec, { placement: B, overflows: el }]),
                      !el.every((d) => d <= 0))
                    ) {
                      let d =
                          ((null == (h = D.flip) ? void 0 : h.index) || 0) + 1,
                        f = ei[d];
                      if (f)
                        return {
                          data: { index: d, overflows: ec },
                          reset: { placement: f },
                        };
                      let F =
                        null ==
                        (S = ec
                          .filter((d) => d.overflows[0] <= 0)
                          .sort((d, f) => d.overflows[1] - f.overflows[1])[0])
                          ? void 0
                          : S.placement;
                      if (!F)
                        switch (K) {
                          case "bestFit": {
                            let d =
                              null ==
                              (w = ec
                                .map((d) => [
                                  d.placement,
                                  d.overflows
                                    .filter((d) => d > 0)
                                    .reduce((d, f) => d + f, 0),
                                ])
                                .sort((d, f) => d[1] - f[1])[0])
                                ? void 0
                                : w[0];
                            d && (F = d);
                            break;
                          }
                          case "initialPlacement":
                            F = H;
                        }
                      if (B !== F) return { reset: { placement: F } };
                    }
                    return {};
                  },
                },
                {
                  name: "size",
                  options: (q = {
                    ...eB,
                    apply: ({
                      elements: d,
                      rects: f,
                      availableWidth: h,
                      availableHeight: S,
                    }) => {
                      let { width: w, height: B } = f.reference,
                        D = d.floating.style;
                      D.setProperty("--radix-popper-available-width", `${h}px`),
                        D.setProperty(
                          "--radix-popper-available-height",
                          `${S}px`
                        ),
                        D.setProperty("--radix-popper-anchor-width", `${w}px`),
                        D.setProperty("--radix-popper-anchor-height", `${B}px`);
                    },
                  }),
                  async fn(d) {
                    let f, h;
                    let {
                        placement: S,
                        rects: w,
                        platform: B,
                        elements: D,
                      } = d,
                      { apply: F = () => {}, ...H } =
                        floating_ui_core_browser_min_a(q, d),
                      $ = await floating_ui_core_browser_min_c(d, H),
                      M = floating_ui_core_browser_min_n(S),
                      V = floating_ui_core_browser_min_t(S),
                      j = "x" === floating_ui_core_browser_min_o(S),
                      { width: Z, height: K } = w.floating;
                    "top" === M || "bottom" === M
                      ? ((f = M),
                        (h =
                          V ===
                          ((await (null == B.isRTL
                            ? void 0
                            : B.isRTL(D.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((h = M), (f = "end" === V ? "top" : "bottom"));
                    let J = K - $[f],
                      Q = Z - $[h],
                      ee = !d.middlewareData.shift,
                      et = J,
                      er = Q;
                    if (j) {
                      let d = Z - $.left - $.right;
                      er = V || ee ? t2(Q, d) : d;
                    } else {
                      let d = K - $.top - $.bottom;
                      et = V || ee ? t2(J, d) : d;
                    }
                    if (ee && !V) {
                      let d = t5($.left, 0),
                        f = t5($.right, 0),
                        h = t5($.top, 0),
                        S = t5($.bottom, 0);
                      j
                        ? (er =
                            Z -
                            2 *
                              (0 !== d || 0 !== f
                                ? d + f
                                : t5($.left, $.right)))
                        : (et =
                            K -
                            2 *
                              (0 !== h || 0 !== S
                                ? h + S
                                : t5($.top, $.bottom)));
                    }
                    await F({ ...d, availableWidth: er, availableHeight: et });
                    let en = await B.getDimensions(D.floating);
                    return Z !== en.width || K !== en.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                eh &&
                  floating_ui_react_dom_esm_arrow({ element: eh, padding: en }),
                $cf1ac5d9fe0e8206$var$transformOrigin({
                  arrowWidth: ev,
                  arrowHeight: e_,
                }),
                ec && {
                  name: "hide",
                  options: (K = { strategy: "referenceHidden" }),
                  async fn(d) {
                    let { rects: f } = d,
                      { strategy: h = "referenceHidden", ...S } =
                        floating_ui_core_browser_min_a(K, d);
                    switch (h) {
                      case "referenceHidden": {
                        let h = floating_ui_core_browser_min_R(
                          await floating_ui_core_browser_min_c(d, {
                            ...S,
                            elementContext: "reference",
                          }),
                          f.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: h,
                            referenceHidden: floating_ui_core_browser_min_P(h),
                          },
                        };
                      }
                      case "escaped": {
                        let h = floating_ui_core_browser_min_R(
                          await floating_ui_core_browser_min_c(d, {
                            ...S,
                            altBoundary: !0,
                          }),
                          f.floating
                        );
                        return {
                          data: {
                            escapedOffsets: h,
                            escaped: floating_ui_core_browser_min_P(h),
                          },
                        };
                      }
                      default:
                        return {};
                    }
                  },
                },
              ],
            }),
            [eH, eC] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(eF),
            eI = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(ed);
          tQ(() => {
            ek && (null == eI || eI());
          }, [ek, eI]);
          let eR = null === (w = eE.arrow) || void 0 === w ? void 0 : w.x,
            eP = null === (B = eE.arrow) || void 0 === B ? void 0 : B.y,
            eO =
              (null === (D = eE.arrow) || void 0 === D
                ? void 0
                : D.centerOffset) !== 0,
            [eN, e$] = (0, eo.useState)();
          return (
            tQ(() => {
              eg && e$(window.getComputedStyle(eg).zIndex);
            }, [eg]),
            (0, eo.createElement)(
              "div",
              {
                ref: eA.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...eD,
                  transform: ek ? eD.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: eN,
                  "--radix-popper-transform-origin": [
                    null === (F = eE.transformOrigin) || void 0 === F
                      ? void 0
                      : F.x,
                    null === (H = eE.transformOrigin) || void 0 === H
                      ? void 0
                      : H.y,
                  ].join(" "),
                },
                dir: d.dir,
              },
              (0, eo.createElement)(
                rg,
                {
                  scope: J,
                  placedSide: eH,
                  onArrowChange: eb,
                  arrowX: eR,
                  arrowY: eP,
                  shouldHideArrow: eO,
                },
                (0, eo.createElement)(
                  tV.div,
                  _extends({ "data-side": eH, "data-align": eC }, ef, {
                    ref: em,
                    style: {
                      ...ef.style,
                      animation: ek ? void 0 : "none",
                      opacity:
                        null !== ($ = eE.hide) &&
                        void 0 !== $ &&
                        $.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        rh = { top: "bottom", right: "left", bottom: "top", left: "right" };
      function $cf1ac5d9fe0e8206$var$isNotNull(d) {
        return null !== d;
      }
      let $cf1ac5d9fe0e8206$var$transformOrigin = (d) => ({
        name: "transformOrigin",
        options: d,
        fn(f) {
          var h, S, w, B, D;
          let { placement: F, rects: H, middlewareData: $ } = f,
            M =
              (null === (h = $.arrow) || void 0 === h
                ? void 0
                : h.centerOffset) !== 0,
            V = M ? 0 : d.arrowWidth,
            j = M ? 0 : d.arrowHeight,
            [Z, q] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(F),
            K = { start: "0%", center: "50%", end: "100%" }[q],
            J =
              (null !==
                (S = null === (w = $.arrow) || void 0 === w ? void 0 : w.x) &&
              void 0 !== S
                ? S
                : 0) +
              V / 2,
            Q =
              (null !==
                (B = null === (D = $.arrow) || void 0 === D ? void 0 : D.y) &&
              void 0 !== B
                ? B
                : 0) +
              j / 2,
            ee = "",
            et = "";
          return (
            "bottom" === Z
              ? ((ee = M ? K : `${J}px`), (et = `${-j}px`))
              : "top" === Z
              ? ((ee = M ? K : `${J}px`), (et = `${H.floating.height + j}px`))
              : "right" === Z
              ? ((ee = `${-j}px`), (et = M ? K : `${Q}px`))
              : "left" === Z &&
                ((ee = `${H.floating.width + j}px`), (et = M ? K : `${Q}px`)),
            { data: { x: ee, y: et } }
          );
        },
      });
      function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(d) {
        let [f, h = "center"] = d.split("-");
        return [f, h];
      }
      let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = (d) => {
          let { __scopePopper: f, children: h } = d,
            [S, w] = (0, eo.useState)(null);
          return (0, eo.createElement)(
            rs,
            { scope: f, anchor: S, onAnchorChange: w },
            h
          );
        },
        rb = (0, eo.forwardRef)((d, f) => {
          var h;
          let {
            container: S = null == globalThis
              ? void 0
              : null === (h = globalThis.document) || void 0 === h
              ? void 0
              : h.body,
            ...w
          } = d;
          return S
            ? tM.createPortal(
                (0, eo.createElement)(tV.div, _extends({}, w, { ref: f })),
                S
              )
            : null;
        }),
        $921a889cee6df7e8$export$99c2b779aa4e8b8b = (d) => {
          let { present: f, children: h } = d,
            S = (function (d) {
              var f;
              let [h, S] = (0, eo.useState)(),
                w = (0, eo.useRef)({}),
                B = (0, eo.useRef)(d),
                D = (0, eo.useRef)("none"),
                F = d ? "mounted" : "unmounted",
                [H, $] =
                  ((f = {
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
                  (0, eo.useReducer)((d, h) => {
                    let S = f[d][h];
                    return null != S ? S : d;
                  }, F));
              return (
                (0, eo.useEffect)(() => {
                  let d = $921a889cee6df7e8$var$getAnimationName(w.current);
                  D.current = "mounted" === H ? d : "none";
                }, [H]),
                tQ(() => {
                  let f = w.current,
                    h = B.current,
                    S = h !== d;
                  if (S) {
                    let S = D.current,
                      w = $921a889cee6df7e8$var$getAnimationName(f);
                    d
                      ? $("MOUNT")
                      : "none" === w ||
                        (null == f ? void 0 : f.display) === "none"
                      ? $("UNMOUNT")
                      : h && S !== w
                      ? $("ANIMATION_OUT")
                      : $("UNMOUNT"),
                      (B.current = d);
                  }
                }, [d, $]),
                tQ(() => {
                  if (h) {
                    let handleAnimationEnd = (d) => {
                        let f = $921a889cee6df7e8$var$getAnimationName(
                            w.current
                          ),
                          S = f.includes(d.animationName);
                        d.target === h &&
                          S &&
                          (0, tM.flushSync)(() => $("ANIMATION_END"));
                      },
                      handleAnimationStart = (d) => {
                        d.target === h &&
                          (D.current = $921a889cee6df7e8$var$getAnimationName(
                            w.current
                          ));
                      };
                    return (
                      h.addEventListener(
                        "animationstart",
                        handleAnimationStart
                      ),
                      h.addEventListener("animationcancel", handleAnimationEnd),
                      h.addEventListener("animationend", handleAnimationEnd),
                      () => {
                        h.removeEventListener(
                          "animationstart",
                          handleAnimationStart
                        ),
                          h.removeEventListener(
                            "animationcancel",
                            handleAnimationEnd
                          ),
                          h.removeEventListener(
                            "animationend",
                            handleAnimationEnd
                          );
                      }
                    );
                  }
                  $("ANIMATION_END");
                }, [h, $]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(H),
                  ref: (0, eo.useCallback)((d) => {
                    d && (w.current = getComputedStyle(d)), S(d);
                  }, []),
                }
              );
            })(f),
            w =
              "function" == typeof h
                ? h({ present: S.isPresent })
                : eo.Children.only(h),
            B = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(S.ref, w.ref),
            D = "function" == typeof h;
          return D || S.isPresent ? (0, eo.cloneElement)(w, { ref: B }) : null;
        };
      function $921a889cee6df7e8$var$getAnimationName(d) {
        return (null == d ? void 0 : d.animationName) || "none";
      }
      $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
      var ry = new WeakMap(),
        rv = new WeakMap(),
        r_ = {},
        rS = 0,
        unwrapHost = function (d) {
          return d && (d.host || unwrapHost(d.parentNode));
        },
        applyAttributeToOthers = function (d, f, h, S) {
          var w = (Array.isArray(d) ? d : [d])
            .map(function (d) {
              if (f.contains(d)) return d;
              var h = unwrapHost(d);
              return h && f.contains(h)
                ? h
                : (console.error(
                    "aria-hidden",
                    d,
                    "in not contained inside",
                    f,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (d) {
              return !!d;
            });
          r_[h] || (r_[h] = new WeakMap());
          var B = r_[h],
            D = [],
            F = new Set(),
            H = new Set(w),
            keep = function (d) {
              !d || F.has(d) || (F.add(d), keep(d.parentNode));
            };
          w.forEach(keep);
          var deep = function (d) {
            !d ||
              H.has(d) ||
              Array.prototype.forEach.call(d.children, function (d) {
                if (F.has(d)) deep(d);
                else {
                  var f = d.getAttribute(S),
                    w = null !== f && "false" !== f,
                    H = (ry.get(d) || 0) + 1,
                    $ = (B.get(d) || 0) + 1;
                  ry.set(d, H),
                    B.set(d, $),
                    D.push(d),
                    1 === H && w && rv.set(d, !0),
                    1 === $ && d.setAttribute(h, "true"),
                    w || d.setAttribute(S, "true");
                }
              });
          };
          return (
            deep(f),
            F.clear(),
            rS++,
            function () {
              D.forEach(function (d) {
                var f = ry.get(d) - 1,
                  w = B.get(d) - 1;
                ry.set(d, f),
                  B.set(d, w),
                  f || (rv.has(d) || d.removeAttribute(S), rv.delete(d)),
                  w || d.removeAttribute(h);
              }),
                --rS ||
                  ((ry = new WeakMap()),
                  (ry = new WeakMap()),
                  (rv = new WeakMap()),
                  (r_ = {}));
            }
          );
        },
        hideOthers = function (d, f, h) {
          void 0 === h && (h = "data-aria-hidden");
          var S = Array.from(Array.isArray(d) ? d : [d]),
            w =
              f ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(d) ? d[0] : d).ownerDocument.body);
          return w
            ? (S.push.apply(S, Array.from(w.querySelectorAll("[aria-live]"))),
              applyAttributeToOthers(S, w, h, "aria-hidden"))
            : function () {
                return null;
              };
        },
        tslib_es6_assign = function () {
          return (tslib_es6_assign =
            Object.assign ||
            function (d) {
              for (var f, h = 1, S = arguments.length; h < S; h++)
                for (var w in (f = arguments[h]))
                  Object.prototype.hasOwnProperty.call(f, w) && (d[w] = f[w]);
              return d;
            }).apply(this, arguments);
        };
      function __rest(d, f) {
        var h = {};
        for (var S in d)
          Object.prototype.hasOwnProperty.call(d, S) &&
            0 > f.indexOf(S) &&
            (h[S] = d[S]);
        if (null != d && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var w = 0, S = Object.getOwnPropertySymbols(d);
            w < S.length;
            w++
          )
            0 > f.indexOf(S[w]) &&
              Object.prototype.propertyIsEnumerable.call(d, S[w]) &&
              (h[S[w]] = d[S[w]]);
        return h;
      }
      var rx = "right-scroll-bar-position",
        rw = "width-before-scroll-bar",
        rB =
          (void 0 === D && (D = {}),
          ((void 0 === F &&
            (F = function (d) {
              return d;
            }),
          (H = []),
          ($ = !1),
          (M = {
            read: function () {
              if ($)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return H.length ? H[H.length - 1] : null;
            },
            useMedium: function (d) {
              var f = F(d, $);
              return (
                H.push(f),
                function () {
                  H = H.filter(function (d) {
                    return d !== f;
                  });
                }
              );
            },
            assignSyncMedium: function (d) {
              for ($ = !0; H.length; ) {
                var f = H;
                (H = []), f.forEach(d);
              }
              H = {
                push: function (f) {
                  return d(f);
                },
                filter: function () {
                  return H;
                },
              };
            },
            assignMedium: function (d) {
              $ = !0;
              var f = [];
              if (H.length) {
                var h = H;
                (H = []), h.forEach(d), (f = H);
              }
              var executeQueue = function () {
                  var h = f;
                  (f = []), h.forEach(d);
                },
                cycle = function () {
                  return Promise.resolve().then(executeQueue);
                };
              cycle(),
                (H = {
                  push: function (d) {
                    f.push(d), cycle();
                  },
                  filter: function (d) {
                    return (f = f.filter(d)), H;
                  },
                });
            },
          })).options = tslib_es6_assign({ async: !0, ssr: !1 }, D)),
          M),
        nothing = function () {},
        rA = eo.forwardRef(function (d, f) {
          var h,
            S,
            w,
            B = eo.useRef(null),
            D = eo.useState({
              onScrollCapture: nothing,
              onWheelCapture: nothing,
              onTouchMoveCapture: nothing,
            }),
            F = D[0],
            H = D[1],
            $ = d.forwardProps,
            M = d.children,
            V = d.className,
            j = d.removeScrollBar,
            Z = d.enabled,
            q = d.shards,
            K = d.sideCar,
            J = d.noIsolation,
            Q = d.inert,
            ee = d.allowPinchZoom,
            et = d.as,
            er = void 0 === et ? "div" : et,
            en = __rest(d, [
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
            ei =
              ((h = [B, f]),
              (S = function (d) {
                return h.forEach(function (f) {
                  return (
                    "function" == typeof f ? f(d) : f && (f.current = d), f
                  );
                });
              }),
              ((w = (0, eo.useState)(function () {
                return {
                  value: null,
                  callback: S,
                  facade: {
                    get current() {
                      return w.value;
                    },
                    set current(value) {
                      var d = w.value;
                      d !== value && ((w.value = value), w.callback(value, d));
                    },
                  },
                };
              })[0]).callback = S),
              w.facade),
            ea = tslib_es6_assign(tslib_es6_assign({}, en), F);
          return eo.createElement(
            eo.Fragment,
            null,
            Z &&
              eo.createElement(K, {
                sideCar: rB,
                removeScrollBar: j,
                shards: q,
                noIsolation: J,
                inert: Q,
                setCallbacks: H,
                allowPinchZoom: !!ee,
                lockRef: B,
              }),
            $
              ? eo.cloneElement(
                  eo.Children.only(M),
                  tslib_es6_assign(tslib_es6_assign({}, ea), { ref: ei })
                )
              : eo.createElement(
                  er,
                  tslib_es6_assign({}, ea, { className: V, ref: ei }),
                  M
                )
          );
        });
      (rA.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (rA.classNames = { fullWidth: rw, zeroRight: rx });
      var SideCar = function (d) {
        var f = d.sideCar,
          h = __rest(d, ["sideCar"]);
        if (!f)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var S = f.read();
        if (!S) throw Error("Sidecar medium not found");
        return eo.createElement(S, tslib_es6_assign({}, h));
      };
      SideCar.isSideCarExport = !0;
      var stylesheetSingleton = function () {
          var d = 0,
            f = null;
          return {
            add: function (S) {
              if (
                0 == d &&
                (f = (function () {
                  if (!document) return null;
                  var d = document.createElement("style");
                  d.type = "text/css";
                  var f = Q || h.nc;
                  return f && d.setAttribute("nonce", f), d;
                })())
              ) {
                var w, B;
                (w = f).styleSheet
                  ? (w.styleSheet.cssText = S)
                  : w.appendChild(document.createTextNode(S)),
                  (B = f),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(B);
              }
              d++;
            },
            remove: function () {
              --d ||
                !f ||
                (f.parentNode && f.parentNode.removeChild(f), (f = null));
            },
          };
        },
        styleHookSingleton = function () {
          var d = stylesheetSingleton();
          return function (f, h) {
            eo.useEffect(
              function () {
                return (
                  d.add(f),
                  function () {
                    d.remove();
                  }
                );
              },
              [f && h]
            );
          };
        },
        styleSingleton = function () {
          var d = styleHookSingleton();
          return function (f) {
            return d(f.styles, f.dynamic), null;
          };
        },
        rD = { left: 0, top: 0, right: 0, gap: 0 },
        parse = function (d) {
          return parseInt(d || "", 10) || 0;
        },
        getOffset = function (d) {
          var f = window.getComputedStyle(document.body),
            h = f["padding" === d ? "paddingLeft" : "marginLeft"],
            S = f["padding" === d ? "paddingTop" : "marginTop"],
            w = f["padding" === d ? "paddingRight" : "marginRight"];
          return [parse(h), parse(S), parse(w)];
        },
        getGapWidth = function (d) {
          if ((void 0 === d && (d = "margin"), "undefined" == typeof window))
            return rD;
          var f = getOffset(d),
            h = document.documentElement.clientWidth,
            S = window.innerWidth;
          return {
            left: f[0],
            top: f[1],
            right: f[2],
            gap: Math.max(0, S - h + f[2] - f[0]),
          };
        },
        rF = styleSingleton(),
        getStyles = function (d, f, h, S) {
          var w = d.left,
            B = d.top,
            D = d.right,
            F = d.gap;
          return (
            void 0 === h && (h = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(S, ";\n   padding-right: ")
              .concat(F, "px ")
              .concat(S, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(S, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  f && "position: relative ".concat(S, ";"),
                  "margin" === h &&
                    "\n    padding-left: "
                      .concat(w, "px;\n    padding-top: ")
                      .concat(B, "px;\n    padding-right: ")
                      .concat(
                        D,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(F, "px ")
                      .concat(S, ";\n    "),
                  "padding" === h &&
                    "padding-right: ".concat(F, "px ").concat(S, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(rx, " {\n    right: ")
              .concat(F, "px ")
              .concat(S, ";\n  }\n  \n  .")
              .concat(rw, " {\n    margin-right: ")
              .concat(F, "px ")
              .concat(S, ";\n  }\n  \n  .")
              .concat(rx, " .")
              .concat(rx, " {\n    right: 0 ")
              .concat(S, ";\n  }\n  \n  .")
              .concat(rw, " .")
              .concat(rw, " {\n    margin-right: 0 ")
              .concat(S, ";\n  }\n  \n  body {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(F, "px;\n  }\n")
          );
        },
        RemoveScrollBar = function (d) {
          var f = d.noRelative,
            h = d.noImportant,
            S = d.gapMode,
            w = void 0 === S ? "margin" : S,
            B = eo.useMemo(
              function () {
                return getGapWidth(w);
              },
              [w]
            );
          return eo.createElement(rF, {
            styles: getStyles(B, !f, w, h ? "" : "!important"),
          });
        },
        rk = !1;
      if ("undefined" != typeof window)
        try {
          var rE = Object.defineProperty({}, "passive", {
            get: function () {
              return (rk = !0), !0;
            },
          });
          window.addEventListener("test", rE, rE),
            window.removeEventListener("test", rE, rE);
        } catch (d) {
          rk = !1;
        }
      var rH = !!rk && { passive: !1 },
        elementCanBeScrolled = function (d, f) {
          var h = window.getComputedStyle(d);
          return (
            "hidden" !== h[f] &&
            !(
              h.overflowY === h.overflowX &&
              "TEXTAREA" !== d.tagName &&
              "visible" === h[f]
            )
          );
        },
        locationCouldBeScrolled = function (d, f) {
          var h = f;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                h instanceof ShadowRoot &&
                (h = h.host),
              elementCouldBeScrolled(d, h))
            ) {
              var S = getScrollVariables(d, h);
              if (S[1] > S[2]) return !0;
            }
            h = h.parentNode;
          } while (h && h !== document.body);
          return !1;
        },
        elementCouldBeScrolled = function (d, f) {
          return "v" === d
            ? elementCanBeScrolled(f, "overflowY")
            : elementCanBeScrolled(f, "overflowX");
        },
        getScrollVariables = function (d, f) {
          return "v" === d
            ? [f.scrollTop, f.scrollHeight, f.clientHeight]
            : [f.scrollLeft, f.scrollWidth, f.clientWidth];
        },
        handleScroll = function (d, f, h, S, w) {
          var B,
            D =
              ((B = window.getComputedStyle(f).direction),
              "h" === d && "rtl" === B ? -1 : 1),
            F = D * S,
            H = h.target,
            $ = f.contains(H),
            M = !1,
            V = F > 0,
            j = 0,
            Z = 0;
          do {
            var q = getScrollVariables(d, H),
              K = q[0],
              J = q[1] - q[2] - D * K;
            (K || J) && elementCouldBeScrolled(d, H) && ((j += J), (Z += K)),
              (H = H.parentNode);
          } while (
            (!$ && H !== document.body) ||
            ($ && (f.contains(H) || f === H))
          );
          return (
            V && ((w && 0 === j) || (!w && F > j))
              ? (M = !0)
              : !V && ((w && 0 === Z) || (!w && -F > Z)) && (M = !0),
            M
          );
        },
        getTouchXY = function (d) {
          return "changedTouches" in d
            ? [d.changedTouches[0].clientX, d.changedTouches[0].clientY]
            : [0, 0];
        },
        getDeltaXY = function (d) {
          return [d.deltaX, d.deltaY];
        },
        extractRef = function (d) {
          return d && "current" in d ? d.current : d;
        },
        rC = 0,
        rI = [],
        rR =
          (rB.useMedium(function (d) {
            var f = eo.useRef([]),
              h = eo.useRef([0, 0]),
              S = eo.useRef(),
              w = eo.useState(rC++)[0],
              B = eo.useState(function () {
                return styleSingleton();
              })[0],
              D = eo.useRef(d);
            eo.useEffect(
              function () {
                D.current = d;
              },
              [d]
            ),
              eo.useEffect(
                function () {
                  if (d.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(w)
                    );
                    var f = (function (d, f, h) {
                      if (h || 2 == arguments.length)
                        for (var S, w = 0, B = f.length; w < B; w++)
                          (!S && w in f) ||
                            (S || (S = Array.prototype.slice.call(f, 0, w)),
                            (S[w] = f[w]));
                      return d.concat(S || Array.prototype.slice.call(f));
                    })(
                      [d.lockRef.current],
                      (d.shards || []).map(extractRef),
                      !0
                    ).filter(Boolean);
                    return (
                      f.forEach(function (d) {
                        return d.classList.add(
                          "allow-interactivity-".concat(w)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(w)
                        ),
                          f.forEach(function (d) {
                            return d.classList.remove(
                              "allow-interactivity-".concat(w)
                            );
                          });
                      }
                    );
                  }
                },
                [d.inert, d.lockRef.current, d.shards]
              );
            var F = eo.useCallback(function (d, f) {
                if ("touches" in d && 2 === d.touches.length)
                  return !D.current.allowPinchZoom;
                var w,
                  B = getTouchXY(d),
                  F = h.current,
                  H = "deltaX" in d ? d.deltaX : F[0] - B[0],
                  $ = "deltaY" in d ? d.deltaY : F[1] - B[1],
                  M = d.target,
                  V = Math.abs(H) > Math.abs($) ? "h" : "v";
                if ("touches" in d && "h" === V && "range" === M.type)
                  return !1;
                var j = locationCouldBeScrolled(V, M);
                if (!j) return !0;
                if (
                  (j
                    ? (w = V)
                    : ((w = "v" === V ? "h" : "v"),
                      (j = locationCouldBeScrolled(V, M))),
                  !j)
                )
                  return !1;
                if (
                  (!S.current &&
                    "changedTouches" in d &&
                    (H || $) &&
                    (S.current = w),
                  !w)
                )
                  return !0;
                var Z = S.current || w;
                return handleScroll(Z, f, d, "h" === Z ? H : $, !0);
              }, []),
              H = eo.useCallback(function (d) {
                if (rI.length && rI[rI.length - 1] === B) {
                  var h = "deltaY" in d ? getDeltaXY(d) : getTouchXY(d),
                    S = f.current.filter(function (f) {
                      var S;
                      return (
                        f.name === d.type &&
                        f.target === d.target &&
                        (S = f.delta)[0] === h[0] &&
                        S[1] === h[1]
                      );
                    })[0];
                  if (S && S.should) {
                    d.cancelable && d.preventDefault();
                    return;
                  }
                  if (!S) {
                    var w = (D.current.shards || [])
                      .map(extractRef)
                      .filter(Boolean)
                      .filter(function (f) {
                        return f.contains(d.target);
                      });
                    (w.length > 0 ? F(d, w[0]) : !D.current.noIsolation) &&
                      d.cancelable &&
                      d.preventDefault();
                  }
                }
              }, []),
              $ = eo.useCallback(function (d, h, S, w) {
                var B = { name: d, delta: h, target: S, should: w };
                f.current.push(B),
                  setTimeout(function () {
                    f.current = f.current.filter(function (d) {
                      return d !== B;
                    });
                  }, 1);
              }, []),
              M = eo.useCallback(function (d) {
                (h.current = getTouchXY(d)), (S.current = void 0);
              }, []),
              V = eo.useCallback(function (f) {
                $(f.type, getDeltaXY(f), f.target, F(f, d.lockRef.current));
              }, []),
              j = eo.useCallback(function (f) {
                $(f.type, getTouchXY(f), f.target, F(f, d.lockRef.current));
              }, []);
            eo.useEffect(function () {
              return (
                rI.push(B),
                d.setCallbacks({
                  onScrollCapture: V,
                  onWheelCapture: V,
                  onTouchMoveCapture: j,
                }),
                document.addEventListener("wheel", H, rH),
                document.addEventListener("touchmove", H, rH),
                document.addEventListener("touchstart", M, rH),
                function () {
                  (rI = rI.filter(function (d) {
                    return d !== B;
                  })),
                    document.removeEventListener("wheel", H, rH),
                    document.removeEventListener("touchmove", H, rH),
                    document.removeEventListener("touchstart", M, rH);
                }
              );
            }, []);
            var Z = d.removeScrollBar,
              q = d.inert;
            return eo.createElement(
              eo.Fragment,
              null,
              q
                ? eo.createElement(B, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        w,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(w, " {pointer-events: all;}\n"),
                  })
                : null,
              Z
                ? eo.createElement(RemoveScrollBar, { gapMode: "margin" })
                : null
            );
          }),
          SideCar),
        rP = eo.forwardRef(function (d, f) {
          return eo.createElement(
            rA,
            tslib_es6_assign({}, d, { ref: f, sideCar: rR })
          );
        });
      rP.classNames = rA.classNames;
      let rO = "Popover",
        [rN, r$] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(rO, [rc]),
        rz = rc(),
        [rT, rM] = rN(rO),
        rL =
          ((d, f) => {
            let { __scopePopover: h, ...S } = d,
              w = rM("PopoverTrigger", h),
              B = rz(h),
              D = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(f, w.triggerRef),
              F = (0, eo.createElement)(
                tV.button,
                _extends(
                  {
                    type: "button",
                    "aria-haspopup": "dialog",
                    "aria-expanded": w.open,
                    "aria-controls": w.contentId,
                    "data-state": $cb5cc270b50c6fcd$var$getState(w.open),
                  },
                  S,
                  {
                    ref: D,
                    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      d.onClick,
                      w.onOpenToggle
                    ),
                  }
                )
              );
            return w.hasCustomAnchor
              ? F
              : (0, eo.createElement)(rf, _extends({ asChild: !0 }, B), F);
          },
          "PopoverPortal"),
        [rW, rV] = rN(rL, { forceMount: void 0 }),
        rj = "PopoverContent",
        rU =
          ((d, f) => {
            let h = rV(rj, d.__scopePopover),
              { forceMount: S = h.forceMount, ...w } = d,
              B = rM(rj, d.__scopePopover);
            return (0, eo.createElement)(
              $921a889cee6df7e8$export$99c2b779aa4e8b8b,
              { present: S || B.open },
              B.modal
                ? (0, eo.createElement)(rU, _extends({}, w, { ref: f }))
                : (0, eo.createElement)(rG, _extends({}, w, { ref: f }))
            );
          },
          (0, eo.forwardRef)((d, f) => {
            let h = rM(rj, d.__scopePopover),
              S = (0, eo.useRef)(null),
              w = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(f, S),
              B = (0, eo.useRef)(!1);
            return (
              (0, eo.useEffect)(() => {
                let d = S.current;
                if (d) return hideOthers(d);
              }, []),
              (0, eo.createElement)(
                rP,
                { as: tL, allowPinchZoom: !0 },
                (0, eo.createElement)(
                  rX,
                  _extends({}, d, {
                    ref: w,
                    trapFocus: h.open,
                    disableOutsidePointerEvents: !0,
                    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      d.onCloseAutoFocus,
                      (d) => {
                        var f;
                        d.preventDefault(),
                          B.current ||
                            null === (f = h.triggerRef.current) ||
                            void 0 === f ||
                            f.focus();
                      }
                    ),
                    onPointerDownOutside:
                      $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                        d.onPointerDownOutside,
                        (d) => {
                          let f = d.detail.originalEvent,
                            h = 0 === f.button && !0 === f.ctrlKey,
                            S = 2 === f.button || h;
                          B.current = S;
                        },
                        { checkForDefaultPrevented: !1 }
                      ),
                    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      d.onFocusOutside,
                      (d) => d.preventDefault(),
                      { checkForDefaultPrevented: !1 }
                    ),
                  })
                )
              )
            );
          })),
        rG = (0, eo.forwardRef)((d, f) => {
          let h = rM(rj, d.__scopePopover),
            S = (0, eo.useRef)(!1),
            w = (0, eo.useRef)(!1);
          return (0, eo.createElement)(
            rX,
            _extends({}, d, {
              ref: f,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (f) => {
                var B, D;
                null === (B = d.onCloseAutoFocus) ||
                  void 0 === B ||
                  B.call(d, f),
                  f.defaultPrevented ||
                    (S.current ||
                      null === (D = h.triggerRef.current) ||
                      void 0 === D ||
                      D.focus(),
                    f.preventDefault()),
                  (S.current = !1),
                  (w.current = !1);
              },
              onInteractOutside: (f) => {
                var B, D;
                null === (B = d.onInteractOutside) ||
                  void 0 === B ||
                  B.call(d, f),
                  f.defaultPrevented ||
                    ((S.current = !0),
                    "pointerdown" !== f.detail.originalEvent.type ||
                      (w.current = !0));
                let F = f.target,
                  H =
                    null === (D = h.triggerRef.current) || void 0 === D
                      ? void 0
                      : D.contains(F);
                H && f.preventDefault(),
                  "focusin" === f.detail.originalEvent.type &&
                    w.current &&
                    f.preventDefault();
              },
            })
          );
        }),
        rX = (0, eo.forwardRef)((d, f) => {
          let {
              __scopePopover: h,
              trapFocus: S,
              onOpenAutoFocus: w,
              onCloseAutoFocus: B,
              disableOutsidePointerEvents: D,
              onEscapeKeyDown: F,
              onPointerDownOutside: H,
              onFocusOutside: $,
              onInteractOutside: M,
              ...V
            } = d,
            j = rM(rj, h),
            Z = rz(h);
          return (
            (0, eo.useEffect)(() => {
              var d, f;
              let h = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (d = h[0]) && void 0 !== d
                    ? d
                    : $3db38b7d1fb3fe6a$var$createFocusGuard()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (f = h[1]) && void 0 !== f
                    ? f
                    : $3db38b7d1fb3fe6a$var$createFocusGuard()
                ),
                tX++,
                () => {
                  1 === tX &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((d) => d.remove()),
                    tX--;
                }
              );
            }, []),
            (0, eo.createElement)(
              tK,
              {
                asChild: !0,
                loop: !0,
                trapped: S,
                onMountAutoFocus: w,
                onUnmountAutoFocus: B,
              },
              (0, eo.createElement)(
                tG,
                {
                  asChild: !0,
                  disableOutsidePointerEvents: D,
                  onInteractOutside: M,
                  onEscapeKeyDown: F,
                  onPointerDownOutside: H,
                  onFocusOutside: $,
                  onDismiss: () => j.onOpenChange(!1),
                },
                (0, eo.createElement)(
                  rm,
                  _extends(
                    {
                      "data-state": $cb5cc270b50c6fcd$var$getState(j.open),
                      role: "dialog",
                      id: j.contentId,
                    },
                    Z,
                    V,
                    {
                      ref: f,
                      style: {
                        ...V.style,
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
      function $cb5cc270b50c6fcd$var$getState(d) {
        return d ? "open" : "closed";
      }
      var rY = { exports: {} },
        rZ = {};
      rY.exports = (function () {
        if (ee) return rZ;
        ee = 1;
        var d = Symbol.for("react.element"),
          f = Symbol.for("react.fragment"),
          h = Object.prototype.hasOwnProperty,
          S =
            eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          w = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(f, B, D) {
          var F,
            H = {},
            $ = null,
            M = null;
          for (F in (void 0 !== D && ($ = "" + D),
          void 0 !== B.key && ($ = "" + B.key),
          void 0 !== B.ref && (M = B.ref),
          B))
            h.call(B, F) && !w.hasOwnProperty(F) && (H[F] = B[F]);
          if (f && f.defaultProps)
            for (F in (B = f.defaultProps)) void 0 === H[F] && (H[F] = B[F]);
          return {
            $$typeof: d,
            type: f,
            key: $,
            ref: M,
            props: H,
            _owner: S.current,
          };
        }
        return (rZ.Fragment = f), (rZ.jsx = C), (rZ.jsxs = C), rZ;
      })();
      var rq = rY.exports;
      rq.Fragment;
      let rK = rq.jsx,
        rJ = rq.jsxs,
        dist_Xr = (d, f) =>
          f.top >= d.top - 1 &&
          f.left >= d.left - 1 &&
          f.bottom <= d.bottom + 1 &&
          f.right <= d.right + 1,
        dist_Zr = (d, f) => {
          let h = null;
          for (let S of f)
            if (dist_Xr(d, S.getBoundingClientRect())) {
              h = S;
              break;
            }
          return h;
        },
        rQ = (0, eo.forwardRef)(
          (
            {
              className: d,
              css: f,
              container: h,
              direction: S = t$.direction,
              showNavControl: w = t$.showNavControl,
              showButtons: B = t$.showButtons,
              ...D
            },
            F
          ) => {
            let H = (0, en.cT)({ css: f }).className,
              $ = (0, en.iv)({
                color: en.rS.colors.displayFgLowPrimary,
              }).className;
            return B
              ? rK(eJ, {
                  className: es(H, d),
                  "data-testid": tN.HorizontalNavControl,
                  tone: "tertiary",
                  ref: F,
                  css: { display: w ? "block" : "none" },
                  onClick: () => {
                    if (!h.current) return;
                    let d = h.current.getBoundingClientRect(),
                      f = [...h.current.children],
                      w = dist_Zr(d, f),
                      B =
                        null == w
                          ? void 0
                          : w[
                              `${
                                "right" === S
                                  ? "nextElementSibling"
                                  : "previousElementSibling"
                              }`
                            ];
                    if (B) {
                      let f = B.getBoundingClientRect();
                      h.current.scrollBy({
                        left: f.left - d.left,
                        behavior: "smooth",
                      });
                    }
                  },
                  ...D,
                  children:
                    "left" === S
                      ? rK(tg, {
                          className: $,
                          style: { alignSelf: "center" },
                          variant: "line",
                        })
                      : rK(tp, {
                          className: $,
                          style: { alignSelf: "center" },
                          variant: "line",
                        }),
                })
              : null;
          }
        );
      rQ.displayName = "HorizontalNavControl";
      let r0 = (0, eo.forwardRef)(
        (
          {
            className: d,
            css: f,
            children: h,
            disabled: S = tz.disabled,
            selected: w = tz.selected,
            inMenu: B = tz.inMenu,
            ...D
          },
          F
        ) => {
          let H = tC({ css: f, disabled: S, inMenu: B, selected: w }).className;
          return rK("li", {
            className: es(H, d),
            "data-testid": tN.HorizontalNavItem,
            ref: F,
            ...D,
            children: h,
          });
        }
      );
      r0.displayName = "HorizontalNavItem";
      let r1 = (0, eo.forwardRef)(
        ({ className: d, children: f, css: h, to: S, ...w }, B) => {
          let D = tH({ css: h }).className;
          return rK("a", {
            className: es(D, d),
            "data-testid": tN.HorizontalNavLink,
            ref: B,
            href: S,
            ...w,
            children: f,
          });
        }
      );
      r1.displayName = "HorizontalNavLink";
      let r2 = (0, eo.forwardRef)(
        ({ className: d, children: f, css: h, ...S }, w) => {
          let B = tI({ css: h }).className;
          return rK("ul", {
            className: es(B, d),
            "data-testid": tN.HorizontalNavList,
            ref: w,
            ...S,
            children: f,
          });
        }
      );
      (r2.displayName = "HorizontalNavList"),
        parseInt(tw.v2.md.replace(/\D/g, ""), 10),
        parseInt(tw.v2.sm.replace(/\D/g, ""), 10);
      let r5 = (0, eo.forwardRef)(
        ({ className: d, children: f, css: h, ...S }, w) => {
          let B = (0, en.cT)({ css: h }).className;
          return rK("nav", {
            className: es(B, d),
            "data-testid": tN.HorizontalNavRoot,
            ref: w,
            ...S,
            children: f,
          });
        }
      );
      r5.displayName = "HorizontalNavRoot";
      let r8 = (0, eo.forwardRef)(
        (
          {
            className: d,
            children: f,
            css: h,
            gradientColor: S = tT.gradientColor,
            showButtons: w = tT.showButtons,
            showGradients: B = tT.showGradients,
            showLeftControl: D = tT.showLeftControl,
            showRightControl: F = tT.showRightControl,
            ...H
          },
          $
        ) => {
          let M = tR({ css: h, showButtons: w }).className,
            V = tO().className,
            j = tP({
              type: "left",
              hide: !D || !B,
              css: { $$gradientColor: S },
            }).className,
            Z = tP({
              type: "right",
              hide: !F || !B,
              css: { $$gradientColor: S },
            }).className;
          return rJ("div", {
            className: V,
            children: [
              rK("div", { className: j }),
              rK("div", { className: Z }),
              rK("div", {
                className: es(M, d),
                "data-testid": tN.HorizontalNavScrollContainer,
                ref: $,
                ...H,
                children: f,
              }),
            ],
          });
        }
      );
      function NavbarLink(d) {
        let { label: f, to: h } = d;
        return (0, et.jsx)(tx(), {
          href: h,
          passHref: !0,
          legacyBehavior: !0,
          children: (0, et.jsx)(r0, {
            selected: window.location.pathname == h,
            css: { height: "100%", width: "unset" },
            children: (0, et.jsx)("span", {
              style: { textTransform: "capitalize" },
              children: f,
            }),
          }),
        });
      }
      r8.displayName = "HorizontalNavScrollContainer";
      let Navbar = () => {
        let { theme: d, setTheme: f } = (0, er.oR)();
        return (0, et.jsx)(t_, {
          slotLogo: (0, et.jsx)(eU, {
            name:
              "light" == d
                ? "all_black_text_horizontal"
                : "all_white_text_horizontal",
          }),
          slotLeft: "FM ASR DEMO",
          slotRight: (0, et.jsxs)(eE, {
            gap: "none",
            css: { height: "100%", padding: "0 25px 0 0" },
            children: [
              (0, et.jsx)(NavbarLink, { label: "waveform", to: "/waveform" }),
              (0, et.jsx)(NavbarLink, { label: "stats", to: "/stats" }),
              (0, et.jsx)(NavbarLink, { label: "converse", to: "/converse" }),
              (0, et.jsx)(NavbarLink, { label: "knowledge base", to: "/kb" }),
              (0, et.jsx)(eJ, {
                tone: "tertiary",
                onClick: () => {
                  f("light" === d ? "dark" : "light");
                },
                children:
                  "dark" === d
                    ? (0, et.jsx)(tu, { variant: "line" })
                    : (0, et.jsx)(tf, { variant: "line" }),
              }),
            ],
          }),
        });
      };
      function App(d) {
        let { Component: f, pageProps: h } = d;
        return (0, et.jsx)(er.g3, {
          children: (0, et.jsxs)(Root, {
            children: [
              (0, et.jsx)(NavbarContainer, {
                children: (0, et.jsx)(Navbar, {}),
              }),
              (0, et.jsx)(ContentContainer, {
                children: (0, et.jsx)(f, { ...h }),
              }),
            ],
          }),
        });
      }
    },
    2352: function () {},
    1664: function (d, f, h) {
      d.exports = h(5170);
    },
    6607: function (d, f, h) {
      "use strict";
      h.d(f, {
        ac: function () {
          return R;
        },
        iJ: function () {
          return T;
        },
        xR: function () {
          return L;
        },
      });
      var S = h(7294),
        w = h(571);
      "u" > typeof window ? S.useLayoutEffect : S.useEffect;
      let R = (d) => {
        let o = (f) =>
            "u" > typeof window && !!d && window.matchMedia(f).matches,
          f = d ? w.u3[d] : "",
          [h, B] = (0, S.useState)(o(f));
        function s() {
          B(o(f));
        }
        return (
          (0, S.useEffect)(() => {
            let d = window.matchMedia(f);
            return (
              s(),
              d.addEventListener("change", s),
              () => {
                d.removeEventListener("change", s);
              }
            );
          }, [f]),
          h
        );
      };
      function T() {
        let d = (0, S.useRef)(null),
          f = (0, S.useRef)(null),
          h = (0, S.useRef)(null),
          [w, B] = (0, S.useState)(!1),
          [D, F] = (0, S.useState)(!1);
        return (
          (0, S.useEffect)(() => {
            if (!(h.current && d.current && f.current)) return;
            let S = new IntersectionObserver(
              (h) => {
                h.forEach((h) => {
                  h.target === d.current && B(h.intersectionRatio < 0.5),
                    h.target === f.current && F(h.intersectionRatio < 0.5);
                });
              },
              { root: h.current, rootMargin: "0px", threshold: 0.5 }
            );
            return (
              S.observe(d.current), S.observe(f.current), () => S.disconnect()
            );
          }, []),
          {
            showLeftControl: w,
            showRightControl: D,
            leftRef: d,
            rightRef: f,
            mainRef: h,
          }
        );
      }
      function L({ children: d, slotDivider: f, testIdNameSpace: h }) {
        let w = S.Children.toArray(d).filter((d) => (0, S.isValidElement)(d));
        return w.reduce(
          (d, B, D) => (
            D === w.length - 1
              ? d.push((0, S.cloneElement)(B, { "data-is-last": !0 }))
              : d.push(B),
            D < w.length - 1 &&
              d.push((0, S.cloneElement)(f, { key: `${h}-slotDivider-${D}` })),
            d
          ),
          []
        );
      }
    },
    571: function (d, f, h) {
      "use strict";
      h.d(f, {
        So: function () {
          return eD;
        },
        u3: function () {
          return ed;
        },
        Cs: function () {
          return eC;
        },
        GD: function () {
          return ek;
        },
        cT: function () {
          return eR;
        },
        BG: function () {
          return eB;
        },
        I_: function () {
          return eA;
        },
        Gq: function () {
          return eF;
        },
        ib: function () {
          return eH;
        },
        sG: function () {
          return eI;
        },
        xB: function () {
          return eE;
        },
        S8: function () {
          return re;
        },
        iv: function () {
          return eg;
        },
        rS: function () {
          return eb;
        },
      });
      var S,
        w = h(1841),
        B = "colors",
        D = "sizes",
        F = "space",
        H = {
          gap: F,
          gridGap: F,
          columnGap: F,
          gridColumnGap: F,
          rowGap: F,
          gridRowGap: F,
          inset: F,
          insetBlock: F,
          insetBlockEnd: F,
          insetBlockStart: F,
          insetInline: F,
          insetInlineEnd: F,
          insetInlineStart: F,
          margin: F,
          marginTop: F,
          marginRight: F,
          marginBottom: F,
          marginLeft: F,
          marginBlock: F,
          marginBlockEnd: F,
          marginBlockStart: F,
          marginInline: F,
          marginInlineEnd: F,
          marginInlineStart: F,
          padding: F,
          paddingTop: F,
          paddingRight: F,
          paddingBottom: F,
          paddingLeft: F,
          paddingBlock: F,
          paddingBlockEnd: F,
          paddingBlockStart: F,
          paddingInline: F,
          paddingInlineEnd: F,
          paddingInlineStart: F,
          top: F,
          right: F,
          bottom: F,
          left: F,
          scrollMargin: F,
          scrollMarginTop: F,
          scrollMarginRight: F,
          scrollMarginBottom: F,
          scrollMarginLeft: F,
          scrollMarginX: F,
          scrollMarginY: F,
          scrollMarginBlock: F,
          scrollMarginBlockEnd: F,
          scrollMarginBlockStart: F,
          scrollMarginInline: F,
          scrollMarginInlineEnd: F,
          scrollMarginInlineStart: F,
          scrollPadding: F,
          scrollPaddingTop: F,
          scrollPaddingRight: F,
          scrollPaddingBottom: F,
          scrollPaddingLeft: F,
          scrollPaddingX: F,
          scrollPaddingY: F,
          scrollPaddingBlock: F,
          scrollPaddingBlockEnd: F,
          scrollPaddingBlockStart: F,
          scrollPaddingInline: F,
          scrollPaddingInlineEnd: F,
          scrollPaddingInlineStart: F,
          fontSize: "fontSizes",
          background: B,
          backgroundColor: B,
          backgroundImage: B,
          borderImage: B,
          border: B,
          borderBlock: B,
          borderBlockEnd: B,
          borderBlockStart: B,
          borderBottom: B,
          borderBottomColor: B,
          borderColor: B,
          borderInline: B,
          borderInlineEnd: B,
          borderInlineStart: B,
          borderLeft: B,
          borderLeftColor: B,
          borderRight: B,
          borderRightColor: B,
          borderTop: B,
          borderTopColor: B,
          caretColor: B,
          color: B,
          columnRuleColor: B,
          fill: B,
          outline: B,
          outlineColor: B,
          stroke: B,
          textDecorationColor: B,
          fontFamily: "fonts",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          blockSize: D,
          minBlockSize: D,
          maxBlockSize: D,
          inlineSize: D,
          minInlineSize: D,
          maxInlineSize: D,
          width: D,
          minWidth: D,
          maxWidth: D,
          height: D,
          minHeight: D,
          maxHeight: D,
          flexBasis: D,
          gridTemplateColumns: D,
          gridTemplateRows: D,
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
        o = (d, f) =>
          "function" == typeof f
            ? { "()": Function.prototype.toString.call(f) }
            : f,
        l = () => {
          let d = Object.create(null);
          return (f, h, ...S) => {
            let w = JSON.stringify(f, o);
            return w in d ? d[w] : (d[w] = h(f, ...S));
          };
        },
        $ = Symbol.for("sxs.internal"),
        a = (d, f) =>
          Object.defineProperties(d, Object.getOwnPropertyDescriptors(f)),
        c = (d) => {
          for (let f in d) return !0;
          return !1;
        },
        { hasOwnProperty: M } = Object.prototype,
        g = (d) =>
          d.includes("-")
            ? d
            : d.replace(/[A-Z]/g, (d) => "-" + d.toLowerCase()),
        V = /\s+(?![^()]*\))/,
        u = (d) => (f) =>
          d(...("string" == typeof f ? String(f).split(V) : [f])),
        j = {
          appearance: (d) => ({ WebkitAppearance: d, appearance: d }),
          backfaceVisibility: (d) => ({
            WebkitBackfaceVisibility: d,
            backfaceVisibility: d,
          }),
          backdropFilter: (d) => ({
            WebkitBackdropFilter: d,
            backdropFilter: d,
          }),
          backgroundClip: (d) => ({
            WebkitBackgroundClip: d,
            backgroundClip: d,
          }),
          boxDecorationBreak: (d) => ({
            WebkitBoxDecorationBreak: d,
            boxDecorationBreak: d,
          }),
          clipPath: (d) => ({ WebkitClipPath: d, clipPath: d }),
          content: (d) => ({
            content:
              d.includes('"') ||
              d.includes("'") ||
              /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
                d
              )
                ? d
                : `"${d}"`,
          }),
          hyphens: (d) => ({ WebkitHyphens: d, hyphens: d }),
          maskImage: (d) => ({ WebkitMaskImage: d, maskImage: d }),
          maskSize: (d) => ({ WebkitMaskSize: d, maskSize: d }),
          tabSize: (d) => ({ MozTabSize: d, tabSize: d }),
          textSizeAdjust: (d) => ({
            WebkitTextSizeAdjust: d,
            textSizeAdjust: d,
          }),
          userSelect: (d) => ({ WebkitUserSelect: d, userSelect: d }),
          marginBlock: u((d, f) => ({
            marginBlockStart: d,
            marginBlockEnd: f || d,
          })),
          marginInline: u((d, f) => ({
            marginInlineStart: d,
            marginInlineEnd: f || d,
          })),
          maxSize: u((d, f) => ({ maxBlockSize: d, maxInlineSize: f || d })),
          minSize: u((d, f) => ({ minBlockSize: d, minInlineSize: f || d })),
          paddingBlock: u((d, f) => ({
            paddingBlockStart: d,
            paddingBlockEnd: f || d,
          })),
          paddingInline: u((d, f) => ({
            paddingInlineStart: d,
            paddingInlineEnd: f || d,
          })),
        },
        Z = /([\d.]+)([^]*)/,
        m = (d, f) =>
          d.length
            ? d.reduce(
                (d, h) => (
                  d.push(
                    ...f.map((d) =>
                      d.includes("&")
                        ? d.replace(
                            /&/g,
                            /[ +>|~]/.test(h) && /&.*&/.test(d)
                              ? `:is(${h})`
                              : h
                          )
                        : h + " " + d
                    )
                  ),
                  d
                ),
                []
              )
            : f,
        b = (d, f) =>
          d in q && "string" == typeof f
            ? f.replace(
                /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
                (f, h, S, w) =>
                  h +
                  ("stretch" === S
                    ? `-moz-available${w};${g(d)}:${h}-webkit-fill-available`
                    : `-moz-fit-content${w};${g(d)}:${h}fit-content`) +
                  w
              )
            : String(f),
        q = {
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
        k = (d) => (d ? d + "-" : ""),
        y = (d, f, h) =>
          d.replace(
            /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
            (d, S, w, B, D) =>
              ("$" == B) == !!w
                ? d
                : (S || "--" == B ? "calc(" : "") +
                  "var(--" +
                  ("$" === B
                    ? k(f) +
                      (D.includes("$") ? "" : k(h)) +
                      D.replace(/\$/g, "-")
                    : D) +
                  ")" +
                  (S || "--" == B ? "*" + (S || "") + (w || "1") + ")" : "")
          ),
        K = /\s*,\s*(?![^()]*\))/,
        J = Object.prototype.toString,
        x = (d, f, h, S, w) => {
          let B, D, F;
          let a = (d, f, h) => {
            let H, $;
            let p = (d) => {
              var M;
              for (H in d) {
                let V = 64 === H.charCodeAt(0),
                  q = V && Array.isArray(d[H]) ? d[H] : [d[H]];
                for ($ of q) {
                  let d = /[A-Z]/.test((M = H))
                      ? M
                      : M.replace(/-[^]/g, (d) => d[1].toUpperCase()),
                    q =
                      "object" == typeof $ &&
                      $ &&
                      $.toString === J &&
                      (!S.utils[d] || !f.length);
                  if (d in S.utils && !q) {
                    let f = S.utils[d];
                    if (f !== D) {
                      (D = f), p(f($)), (D = null);
                      continue;
                    }
                  } else if (d in j) {
                    let f = j[d];
                    if (f !== F) {
                      (F = f), p(f($)), (F = null);
                      continue;
                    }
                  }
                  if (
                    (V &&
                      (H = (
                        H.slice(1) in S.media
                          ? "@media " + S.media[H.slice(1)]
                          : H
                      ).replace(
                        /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                        (d, f, h, S, w, B) => {
                          let D = Z.test(f),
                            F = 0.0625 * (D ? -1 : 1),
                            [H, $] = D ? [S, f] : [f, S];
                          return (
                            "(" +
                            ("=" === h[0]
                              ? ""
                              : (">" === h[0]) === D
                              ? "max-"
                              : "min-") +
                            H +
                            ":" +
                            ("=" !== h[0] && 1 === h.length
                              ? $.replace(
                                  Z,
                                  (d, f, S) =>
                                    Number(f) + F * (">" === h ? 1 : -1) + S
                                )
                              : $) +
                            (w
                              ? ") and (" +
                                (">" === w[0] ? "min-" : "max-") +
                                H +
                                ":" +
                                (1 === w.length
                                  ? B.replace(
                                      Z,
                                      (d, f, h) =>
                                        Number(f) + F * (">" === w ? -1 : 1) + h
                                    )
                                  : B)
                              : "") +
                            ")"
                          );
                        }
                      )),
                    q)
                  ) {
                    let d = V ? h.concat(H) : [...h],
                      S = V ? [...f] : m(f, H.split(K));
                    void 0 !== B && w(I(...B)), (B = void 0), a($, S, d);
                  } else
                    void 0 === B && (B = [[], f, h]),
                      (H =
                        V || 36 !== H.charCodeAt(0)
                          ? H
                          : `--${k(S.prefix)}${H.slice(1).replace(
                              /\$/g,
                              "-"
                            )}`),
                      ($ = q
                        ? $
                        : "number" == typeof $
                        ? $ && d in Q
                          ? String($) + "px"
                          : String($)
                        : y(b(d, null == $ ? "" : $), S.prefix, S.themeMap[d])),
                      B[0].push(`${V ? `${H} ` : `${g(H)}:`}${$}`);
                }
              }
            };
            p(d), void 0 !== B && w(I(...B)), (B = void 0);
          };
          a(d, f, h);
        },
        I = (d, f, h) =>
          `${h.map((d) => `${d}{`).join("")}${
            f.length ? `${f.join(",")}{` : ""
          }${d.join(";")}${f.length ? "}" : ""}${Array(
            h.length ? h.length + 1 : 0
          ).join("}")}`,
        Q = {
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
        z = (d) => String.fromCharCode(d + (d > 25 ? 39 : 97)),
        W = (d) =>
          ((d) => {
            let f,
              h = "";
            for (f = Math.abs(d); f > 52; f = (f / 52) | 0) h = z(f % 52) + h;
            return z(f % 52) + h;
          })(
            ((d, f) => {
              let h = f.length;
              for (; h; ) d = (33 * d) ^ f.charCodeAt(--h);
              return d;
            })(5381, JSON.stringify(d)) >>> 0
          ),
        ee = [
          "themed",
          "global",
          "styled",
          "onevar",
          "resonevar",
          "allvar",
          "inline",
        ],
        E = (d) => {
          if (d.href && !d.href.startsWith(location.origin)) return !1;
          try {
            return !!d.cssRules;
          } catch (d) {
            return !1;
          }
        },
        T = (d) => {
          let f;
          let n = () => {
              let { cssRules: d } = f.sheet;
              return [].map
                .call(d, (h, S) => {
                  let { cssText: w } = h,
                    B = "";
                  if (w.startsWith("--sxs")) return "";
                  if (d[S - 1] && (B = d[S - 1].cssText).startsWith("--sxs")) {
                    if (!h.cssRules.length) return "";
                    for (let d in f.rules)
                      if (f.rules[d].group === h)
                        return `--sxs{--sxs:${[...f.rules[d].cache].join(
                          " "
                        )}}${w}`;
                    return h.cssRules.length ? `${B}${w}` : "";
                  }
                  return w;
                })
                .join("");
            },
            r = () => {
              if (f) {
                let { rules: d, sheet: h } = f;
                if (!h.deleteRule) {
                  for (; 3 === Object(Object(h.cssRules)[0]).type; )
                    h.cssRules.splice(0, 1);
                  h.cssRules = [];
                }
                for (let f in d) delete d[f];
              }
              let h = Object(d).styleSheets || [];
              for (let d of h)
                if (E(d)) {
                  for (let h = 0, S = d.cssRules; S[h]; ++h) {
                    let w = Object(S[h]);
                    if (1 !== w.type) continue;
                    let B = Object(S[h + 1]);
                    if (4 !== B.type) continue;
                    ++h;
                    let { cssText: D } = w;
                    if (!D.startsWith("--sxs")) continue;
                    let F = D.slice(14, -3).trim().split(/\s+/),
                      H = ee[F[0]];
                    H &&
                      (f ||
                        (f = { sheet: d, reset: r, rules: {}, toString: n }),
                      (f.rules[H] = { group: B, index: h, cache: new Set(F) }));
                  }
                  if (f) break;
                }
              if (!f) {
                let i = (d, f) => ({
                  type: f,
                  cssRules: [],
                  insertRule(d, f) {
                    this.cssRules.splice(
                      f,
                      0,
                      i(
                        d,
                        { import: 3, undefined: 1 }[
                          (d.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                        ] || 4
                      )
                    );
                  },
                  get cssText() {
                    return "@media{}" === d
                      ? `@media{${[].map
                          .call(this.cssRules, (d) => d.cssText)
                          .join("")}}`
                      : d;
                  },
                });
                f = {
                  sheet: d
                    ? (d.head || d).appendChild(document.createElement("style"))
                        .sheet
                    : i("", "text/css"),
                  rules: {},
                  reset: r,
                  toString: n,
                };
              }
              let { sheet: S, rules: w } = f;
              for (let d = ee.length - 1; d >= 0; --d) {
                let f = ee[d];
                if (!w[f]) {
                  let h = ee[d + 1],
                    B = w[h] ? w[h].index : S.cssRules.length;
                  S.insertRule("@media{}", B),
                    S.insertRule(`--sxs{--sxs:${d}}`, B),
                    (w[f] = {
                      group: S.cssRules[B + 1],
                      index: B,
                      cache: new Set([d]),
                    });
                }
                v(w[f]);
              }
            };
          return r(), f;
        },
        v = (d) => {
          let f = d.group,
            h = f.cssRules.length;
          d.apply = (d) => {
            try {
              f.insertRule(d, h), ++h;
            } catch (d) {}
          };
        },
        et = Symbol(),
        er = l(),
        C = (d, f) =>
          er(d, () => (...h) => {
            let S = { type: null, composers: new Set() };
            for (let f of h)
              if (null != f) {
                if (f[$])
                  for (let d of (null == S.type && (S.type = f[$].type),
                  f[$].composers))
                    S.composers.add(d);
                else
                  f.constructor !== Object || f.$$typeof
                    ? null == S.type && (S.type = f)
                    : S.composers.add(P(f, d));
              }
            return (
              null == S.type && (S.type = "span"),
              S.composers.size || S.composers.add(["PJLV", {}, [], [], {}, []]),
              L(d, S, f)
            );
          }),
        P = (
          { variants: d, compoundVariants: f, defaultVariants: h, ...S },
          w
        ) => {
          let B = `${k(w.prefix)}c-${W(S)}`,
            D = [],
            F = [],
            H = Object.create(null),
            $ = [];
          for (let d in h) H[d] = String(h[d]);
          if ("object" == typeof d && d)
            for (let f in d) {
              M.call(H, f) || (H[f] = "undefined");
              let h = d[f];
              for (let d in h) {
                let S = { [f]: String(d) };
                "undefined" === String(d) && $.push(f);
                let w = h[d],
                  B = [S, w, !c(w)];
                D.push(B);
              }
            }
          if ("object" == typeof f && f)
            for (let d of f) {
              let { css: f, ...h } = d;
              for (let d in ((f = ("object" == typeof f && f) || {}), h))
                h[d] = String(h[d]);
              let S = [h, f, !c(f)];
              F.push(S);
            }
          return [B, S, D, F, H, $];
        },
        L = (d, f, h) => {
          let [S, w, B, D] = O(f.composers),
            F =
              "function" == typeof f.type || f.type.$$typeof
                ? ((d) => {
                    function t() {
                      for (let f = 0; f < t[et].length; f++) {
                        let [h, S] = t[et][f];
                        d.rules[h].apply(S);
                      }
                      return (t[et] = []), null;
                    }
                    return (
                      (t[et] = []),
                      (t.rules = {}),
                      ee.forEach(
                        (d) =>
                          (t.rules[d] = { apply: (f) => t[et].push([d, f]) })
                      ),
                      t
                    );
                  })(h)
                : null,
            H = (F || h).rules,
            M = `.${S}${
              w.length > 1 ? `:where(.${w.slice(1).join(".")})` : ""
            }`,
            p = ($) => {
              $ = ("object" == typeof $ && $) || en;
              let { css: V, ...j } = $,
                Z = {};
              for (let d in B)
                if ((delete j[d], d in $)) {
                  let f = $[d];
                  "object" == typeof f && f
                    ? (Z[d] = { "@initial": B[d], ...f })
                    : ((f = String(f)),
                      (Z[d] = "undefined" !== f || D.has(d) ? f : B[d]));
                } else Z[d] = B[d];
              let q = new Set([...w]);
              for (let [S, w, B, D] of f.composers) {
                h.rules.styled.cache.has(S) ||
                  (h.rules.styled.cache.add(S),
                  x(w, [`.${S}`], [], d, (d) => {
                    H.styled.apply(d);
                  }));
                let f = A(B, Z, d.media),
                  F = A(D, Z, d.media, !0);
                for (let w of f)
                  if (void 0 !== w)
                    for (let [f, B, D] of w) {
                      let w = `${S}-${W(B)}-${f}`;
                      q.add(w);
                      let F = (D ? h.rules.resonevar : h.rules.onevar).cache,
                        $ = D ? H.resonevar : H.onevar;
                      F.has(w) ||
                        (F.add(w),
                        x(B, [`.${w}`], [], d, (d) => {
                          $.apply(d);
                        }));
                    }
                for (let f of F)
                  if (void 0 !== f)
                    for (let [w, B] of f) {
                      let f = `${S}-${W(B)}-${w}`;
                      q.add(f),
                        h.rules.allvar.cache.has(f) ||
                          (h.rules.allvar.cache.add(f),
                          x(B, [`.${f}`], [], d, (d) => {
                            H.allvar.apply(d);
                          }));
                    }
              }
              if ("object" == typeof V && V) {
                let f = `${S}-i${W(V)}-css`;
                q.add(f),
                  h.rules.inline.cache.has(f) ||
                    (h.rules.inline.cache.add(f),
                    x(V, [`.${f}`], [], d, (d) => {
                      H.inline.apply(d);
                    }));
              }
              for (let d of String($.className || "")
                .trim()
                .split(/\s+/))
                d && q.add(d);
              let K = (j.className = [...q].join(" "));
              return {
                type: f.type,
                className: K,
                selector: M,
                props: j,
                toString: () => K,
                deferredInjector: F,
              };
            };
          return a(p, {
            className: S,
            selector: M,
            [$]: f,
            toString: () => (h.rules.styled.cache.has(S) || p(), S),
          });
        },
        O = (d) => {
          let f = "",
            h = [],
            S = {},
            w = [];
          for (let [B, , , , D, F] of d)
            for (let d in ("" === f && (f = B), h.push(B), w.push(...F), D)) {
              let f = D[d];
              (void 0 === S[d] || "undefined" !== f || F.includes(f)) &&
                (S[d] = f);
            }
          return [f, h, S, new Set(w)];
        },
        A = (d, f, h, S) => {
          let w = [];
          e: for (let [B, D, F] of d) {
            if (F) continue;
            let d,
              H = 0,
              $ = !1;
            for (d in B) {
              let S = B[d],
                w = f[d];
              if (w !== S) {
                if ("object" != typeof w || !w) continue e;
                {
                  let d,
                    f,
                    B = 0;
                  for (let D in w) {
                    if (S === String(w[D])) {
                      if ("@initial" !== D) {
                        let d = D.slice(1);
                        (f = f || []).push(
                          d in h ? h[d] : D.replace(/^@media ?/, "")
                        ),
                          ($ = !0);
                      }
                      (H += B), (d = !0);
                    }
                    ++B;
                  }
                  if (
                    (f && f.length && (D = { ["@media " + f.join(", ")]: D }),
                    !d)
                  )
                    continue e;
                }
              }
            }
            (w[H] = w[H] || []).push([S ? "cv" : `${d}-${B[d]}`, D, $]);
          }
          return w;
        },
        en = {},
        eo = l(),
        N = (d, f) =>
          eo(d, () => (...h) => {
            let r = () => {
              for (let S of h) {
                let h = W((S = ("object" == typeof S && S) || {}));
                if (!f.rules.global.cache.has(h)) {
                  if ((f.rules.global.cache.add(h), "@import" in S)) {
                    let d =
                      [].indexOf.call(f.sheet.cssRules, f.rules.themed.group) -
                      1;
                    for (let h of [].concat(S["@import"]))
                      (h = h.includes('"') || h.includes("'") ? h : `"${h}"`),
                        f.sheet.insertRule(`@import ${h};`, d++);
                    delete S["@import"];
                  }
                  x(S, [], [], d, (d) => {
                    f.rules.global.apply(d);
                  });
                }
              }
              return "";
            };
            return a(r, { toString: r });
          }),
        ei = l(),
        G = (d, f) =>
          ei(d, () => (h) => {
            let S = `${k(d.prefix)}k-${W(h)}`,
              i = () => {
                if (!f.rules.global.cache.has(S)) {
                  f.rules.global.cache.add(S);
                  let w = [];
                  x(h, [], [], d, (d) => w.push(d));
                  let B = `@keyframes ${S}{${w.join("")}}`;
                  f.rules.global.apply(B);
                }
                return S;
              };
            return a(i, {
              get name() {
                return i();
              },
              toString: i,
            });
          }),
        ea = class {
          constructor(d, f, h, S) {
            (this.token = null == d ? "" : String(d)),
              (this.value = null == f ? "" : String(f)),
              (this.scale = null == h ? "" : String(h)),
              (this.prefix = null == S ? "" : String(S));
          }
          get computedValue() {
            return "var(" + this.variable + ")";
          }
          get variable() {
            return "--" + k(this.prefix) + k(this.scale) + this.token;
          }
          toString() {
            return this.computedValue;
          }
        },
        el = l(),
        U = (d, f) =>
          el(d, () => (h, S) => {
            S = ("object" == typeof h && h) || Object(S);
            let w = `.${(h =
                (h = "string" == typeof h ? h : "") ||
                `${k(d.prefix)}t-${W(S)}`)}`,
              B = {},
              D = [];
            for (let f in S)
              for (let h in ((B[f] = {}), S[f])) {
                let w = `--${k(d.prefix)}${f}-${h}`,
                  F = y(String(S[f][h]), d.prefix, f);
                (B[f][h] = new ea(h, F, f, d.prefix)), D.push(`${w}:${F}`);
              }
            let s = () => {
              if (D.length && !f.rules.themed.cache.has(h)) {
                f.rules.themed.cache.add(h);
                let w = `${S === d.theme ? ":root," : ""}.${h}{${D.join(";")}}`;
                f.rules.themed.apply(w);
              }
              return h;
            };
            return {
              ...B,
              get className() {
                return s();
              },
              selector: w,
              toString: s,
            };
          }),
        ec = l(),
        X = (d) => {
          let f = !1,
            h = ec(d, (d) => {
              f = !0;
              let h =
                  "prefix" in (d = ("object" == typeof d && d) || {})
                    ? String(d.prefix)
                    : "",
                S = ("object" == typeof d.media && d.media) || {},
                w =
                  "object" == typeof d.root
                    ? d.root || null
                    : globalThis.document || null,
                B = ("object" == typeof d.theme && d.theme) || {},
                D = {
                  prefix: h,
                  media: S,
                  theme: B,
                  themeMap: ("object" == typeof d.themeMap && d.themeMap) || {
                    ...H,
                  },
                  utils: ("object" == typeof d.utils && d.utils) || {},
                },
                F = T(w),
                $ = {
                  css: C(D, F),
                  globalCss: N(D, F),
                  keyframes: G(D, F),
                  createTheme: U(D, F),
                  reset() {
                    F.reset(), $.theme.toString();
                  },
                  theme: {},
                  sheet: F,
                  config: D,
                  prefix: h,
                  getCssText: F.toString,
                  toString: F.toString,
                };
              return String(($.theme = $.createTheme(B))), $;
            });
          return f || h.reset(), h;
        },
        Y = () => S || (S = X());
      let es = {
          nvidiaSans: `"${w.Fr.nvidiaSans}", "${w.Fr.nvidiaSans} Fallback"`,
          jetbrainsMono: `"${w.Fr.jetbrainsMono}", "${w.Fr.jetbrainsMono} Fallback"`,
        },
        ed = {
          xxl: `(max-width: ${w.wY.xxl})`,
          xl: `(max-width: ${w.wY.xl})`,
          lg: `(max-width: ${w.wY.lg})`,
          md: `(max-width: ${w.wY.md})`,
          sm: `(max-width: ${w.wY.sm})`,
          xs: `(max-width: ${w.wY.xs})`,
        },
        {
          config: ef,
          createTheme: eu,
          css: eg,
          globalCss: ep,
          getCssText: em,
          reset: eh,
          theme: eb,
        } = X({
          media: ed,
          theme: {
            colors: { ...w.x3, ...w.F2 },
            shadows: { ...w.pI, ...w.t0 },
            borderWidths: w.CM,
            fonts: es,
            fontWeights: { bold: 700, light: 300, medium: 500, regular: 400 },
            fontSizes: w.g_,
            lineHeights: w.XS,
            letterSpacings: w.sb,
            space: w.v2,
          },
        }),
        dist_n = (d) =>
          `url("https://brand-assets.cne.ngc.nvidia.com/assets/fonts/nvidia-sans/1.0.0/NVIDIASans_${d}.woff2") format("woff2")`,
        ey = "fallback",
        ev = "normal",
        e_ = "italic",
        eS = `"${w.Fr.nvidiaSans}"`,
        ex = `"${w.Fr.nvidiaSans} Fallback"`,
        ew = `"${w.Fr.jetbrainsMono} Fallback"`,
        eB = ep({
          "@font-face": [
            {
              fontFamily: eS,
              fontStyle: ev,
              fontWeight: 300,
              fontDisplay: ey,
              src: dist_n("Lt"),
            },
            {
              fontFamily: eS,
              fontStyle: e_,
              fontWeight: 300,
              fontDisplay: ey,
              src: dist_n("LtIt"),
            },
            {
              fontFamily: eS,
              fontStyle: ev,
              fontWeight: 400,
              fontDisplay: ey,
              src: dist_n("Rg"),
            },
            {
              fontFamily: eS,
              fontStyle: e_,
              fontWeight: 400,
              fontDisplay: ey,
              src: dist_n("It"),
            },
            {
              fontFamily: eS,
              fontStyle: ev,
              fontWeight: 500,
              fontDisplay: ey,
              src: dist_n("Md"),
            },
            {
              fontFamily: eS,
              fontStyle: e_,
              fontWeight: 500,
              fontDisplay: ey,
              src: dist_n("MdIt"),
            },
            {
              fontFamily: eS,
              fontStyle: ev,
              fontWeight: 700,
              fontDisplay: ey,
              src: dist_n("Bd"),
            },
            {
              fontFamily: eS,
              fontStyle: e_,
              fontWeight: 700,
              fontDisplay: ey,
              src: dist_n("BdIt"),
            },
            {
              fontFamily: ew,
              fontStyle: e_,
              fontWeight: 300,
              src: "local('Courier New Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ew,
              fontStyle: e_,
              fontWeight: 400,
              src: "local('Courier New Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ew,
              fontStyle: e_,
              fontWeight: 500,
              src: "local('Courier New Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ew,
              fontStyle: e_,
              fontWeight: 700,
              src: "local('Courier New Bold Italic')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ew,
              fontStyle: ev,
              fontWeight: 300,
              src: "local('Courier New')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ew,
              fontStyle: ev,
              fontWeight: 400,
              src: "local('Courier New')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ew,
              fontStyle: ev,
              fontWeight: 500,
              src: "local('Courier New')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ew,
              fontStyle: ev,
              fontWeight: 700,
              src: "local('Courier New Bold')",
              ascentOverride: "102.02%",
              descentOverride: "30.00%",
              lineGapOverride: "0.00%",
              sizeAdjust: "99.98%",
            },
            {
              fontFamily: ex,
              fontStyle: e_,
              fontWeight: 300,
              src: "local('Arial Italic')",
              ascentOverride: "97.18%",
              descentOverride: "27.77%",
              lineGapOverride: "0.00%",
              sizeAdjust: "100.84%",
            },
            {
              fontFamily: ex,
              fontStyle: e_,
              fontWeight: 400,
              src: "local('Arial Italic')",
              ascentOverride: "96.18%",
              descentOverride: "27.48%",
              lineGapOverride: "0.00%",
              sizeAdjust: "101.89%",
            },
            {
              fontFamily: ex,
              fontStyle: e_,
              fontWeight: 500,
              src: "local('Arial Italic')",
              ascentOverride: "94.81%",
              descentOverride: "27.09%",
              lineGapOverride: "0.00%",
              sizeAdjust: "103.36%",
            },
            {
              fontFamily: ex,
              fontStyle: e_,
              fontWeight: 700,
              src: "local('Arial Bold Italic')",
              ascentOverride: "101.13%",
              descentOverride: "28.90%",
              lineGapOverride: "0.00%",
              sizeAdjust: "96.90%",
            },
            {
              fontFamily: ex,
              fontStyle: ev,
              fontWeight: 300,
              src: "local('Arial')",
              ascentOverride: "93.59%",
              descentOverride: "26.74%",
              lineGapOverride: "0.00%",
              sizeAdjust: "104.71%",
            },
            {
              fontFamily: ex,
              fontStyle: ev,
              fontWeight: 400,
              src: "local('Arial')",
              ascentOverride: "92.70%",
              descentOverride: "26.49%",
              lineGapOverride: "0.00%",
              sizeAdjust: "105.71%",
            },
            {
              fontFamily: ex,
              fontStyle: ev,
              fontWeight: 500,
              src: "local('Arial')",
              ascentOverride: "91.53%",
              descentOverride: "26.15%",
              lineGapOverride: "0.00%",
              sizeAdjust: "107.07%",
            },
            {
              fontFamily: ex,
              fontStyle: ev,
              fontWeight: 700,
              src: "local('Arial Bold')",
              ascentOverride: "97.74%",
              descentOverride: "27.93%",
              lineGapOverride: "0.00%",
              sizeAdjust: "100.26%",
            },
          ],
        }),
        eA = ep({
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
          },
        }),
        eD = ["baseline", "center", "flex-end", "flex-start", "stretch"],
        eF = [
          "center",
          "flex-end",
          "flex-start",
          "space-around",
          "space-between",
          "space-evenly",
        ],
        ek = ["column", "column-reverse", "row", "row-reverse"],
        eE = ["nowrap", "wrap", "wrap-reverse"],
        eH = eu({
          colors: { ...w.x3, ...w.F2 },
          shadows: { ...w.pI, ...w.t0 },
        }),
        eC = eu({
          colors: { ...w.x3, ...w.X3 },
          shadows: { ...w.pI, ...w.$y },
        }),
        eI =
          (Object.keys(eb.colors),
          Object.keys(eb.fontSizes),
          Object.keys(eb.space));
      function re(d, f) {
        let h = {};
        for (let S of d) h[S] = f(S);
        return h;
      }
      let eR = ((...d) => Y().css(...d))({});
    },
    1841: function (d, f, h) {
      "use strict";
      h.d(f, {
        $y: function () {
          return Z;
        },
        CM: function () {
          return V;
        },
        F2: function () {
          return q;
        },
        Fr: function () {
          return w;
        },
        OX: function () {
          return J;
        },
        X3: function () {
          return j;
        },
        XS: function () {
          return B;
        },
        g_: function () {
          return D;
        },
        pI: function () {
          return M;
        },
        sb: function () {
          return F;
        },
        t0: function () {
          return K;
        },
        v2: function () {
          return $;
        },
        wY: function () {
          return H;
        },
        x3: function () {
          return S;
        },
      });
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
        w =
          (Object.keys(S),
          { nvidiaSans: "NVIDIA Sans", jetbrainsMono: "JetBrains Mono" }),
        B =
          (Object.keys(w),
          { caps: "90%", text: "100%", heading: "125%", body: "150%" }),
        D =
          (Object.keys(B),
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
        F =
          (Object.keys(D),
          { less: "-0.015rem", none: "0rem", more: "0.05rem" }),
        H =
          (Object.keys(F),
          {
            xxl: "1600px",
            xl: "1200px",
            lg: "992px",
            md: "768px",
            sm: "576px",
            xs: "320px",
          }),
        $ =
          (Object.keys(H),
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
        M =
          (Object.keys($),
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
        V = (Object.keys(M), { lg: "4px", md: "2px", sm: "1px" }),
        j =
          (Object.keys(V),
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
        Z =
          (Object.keys(j),
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
        q =
          (Object.keys(Z),
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
        K =
          (Object.keys(q),
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
        J =
          (Object.keys(K),
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
  function (d) {
    var __webpack_exec__ = function (f) {
      return d((d.s = f));
    };
    d.O(0, [774, 179], function () {
      return __webpack_exec__(6840), __webpack_exec__(9974);
    }),
      (_N_E = d.O());
  },
]);
