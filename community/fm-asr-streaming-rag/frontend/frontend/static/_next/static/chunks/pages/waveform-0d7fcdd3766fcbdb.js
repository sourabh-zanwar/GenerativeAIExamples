(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [925],
  {
    4481: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/waveform",
        function () {
          return e(7151);
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
      var r = e(5893),
        i = e(6649),
        o = e(6572);
      let c = {
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
          { theme: e } = (0, o.oR)();
        return (0, r.jsx)("div", {
          style: c.wrapper,
          children: (0, r.jsx)(i.Z, {
            src: t + "/?__theme=" + e,
            style: c.portal,
          }),
        });
      }
    },
    7151: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return Home;
          },
        });
      var r = e(5893),
        i = e(9008),
        o = e.n(i),
        c = e(8339);
      function Home() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(o(), {
              children: [
                (0, r.jsx)("title", { children: "NVIDIA LLM Playground" }),
                (0, r.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, r.jsx)("main", {
              children: (0, r.jsx)(c.Z, { src: "/content/waveform" }),
            }),
          ],
        });
      }
    },
  },
  function (n) {
    n.O(0, [78, 774, 888, 179], function () {
      return n((n.s = 4481));
    }),
      (_N_E = n.O());
  },
]);
