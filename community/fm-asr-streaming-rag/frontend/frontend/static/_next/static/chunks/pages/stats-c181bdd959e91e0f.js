(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [368],
  {
    3397: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/stats",
        function () {
          return e(9400);
        },
      ]);
    },
    8339: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return GradioPortal;
        },
      });
      var i = e(5893),
        r = e(6649),
        c = e(6572);
      let o = {
        wrapper: { "text-align": "center", margin: "10px", height: "100vh" },
        portal: {
          "min-width": "85%",
          width: "1px",
          border: "0px",
          height: "100%",
          padding: "5px",
        },
      };
      function GradioPortal(n) {
        let { src: t } = n,
          { theme: e } = (0, c.oR)();
        return (0, i.jsx)("div", {
          style: o.wrapper,
          children: (0, i.jsx)(r.Z, {
            src: t + "/?__theme=" + e,
            style: o.portal,
          }),
        });
      }
    },
    9400: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return Home;
          },
        });
      var i = e(5893),
        r = e(9008),
        c = e.n(r),
        o = e(8339);
      function Home() {
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
              children: (0, i.jsx)(o.Z, { src: "/content/stats" }),
            }),
          ],
        });
      }
    },
  },
  function (n) {
    n.O(0, [78, 774, 888, 179], function () {
      return n((n.s = 3397));
    }),
      (_N_E = n.O());
  },
]);
