(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [409],
  {
    852: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/kb",
        function () {
          return e(6485);
        },
      ]);
    },
    8763: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(5893),
        r = e(6649),
        c = e(7130);
      let s = {
        wrapper: { "text-align": "center", margin: "10px", height: "100vh" },
        portal: {
          "min-width": "85%",
          width: "1px",
          border: "0px",
          height: "100%",
          padding: "5px",
        },
      };
      function u(n) {
        let { src: t } = n,
          { theme: e } = (0, c.oR)();
        return (0, i.jsx)("div", {
          style: s.wrapper,
          children: (0, i.jsx)(r.Z, {
            src: t + "/?__theme=" + e,
            style: s.portal,
          }),
        });
      }
    },
    6485: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return u;
          },
        });
      var i = e(5893),
        r = e(9008),
        c = e.n(r),
        s = e(8763);
      function u() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(c(), {
              children: [
                (0, i.jsx)("title", { children: "NVIDIA LLM Playground" }),
                (0, i.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, i.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, i.jsx)("main", {
              children: (0, i.jsx)(s.Z, { src: "/content/kb" }),
            }),
          ],
        });
      }
    },
  },
  function (n) {
    n.O(0, [78, 774, 888, 179], function () {
      return n((n.s = 852));
    }),
      (_N_E = n.O());
  },
]);
