(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [255],
  {
    5689: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/converse",
        function () {
          return t(389);
        },
      ]);
    },
    8339: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return GradioPortal;
        },
      });
      var r = t(5893),
        i = t(6649),
        c = t(6572);
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
        let { src: e } = n,
          { theme: t } = (0, c.oR)();
        return (0, r.jsx)("div", {
          style: o.wrapper,
          children: (0, r.jsx)(i.Z, {
            src: e + "/?__theme=" + t,
            style: o.portal,
          }),
        });
      }
    },
    389: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return Home;
          },
        });
      var r = t(5893),
        i = t(9008),
        c = t.n(i),
        o = t(8339);
      function Home() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(c(), {
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
              children: (0, r.jsx)(o.Z, { src: "/content/converse" }),
            }),
          ],
        });
      }
    },
  },
  function (n) {
    n.O(0, [78, 774, 888, 179], function () {
      return n((n.s = 5689));
    }),
      (_N_E = n.O());
  },
]);
