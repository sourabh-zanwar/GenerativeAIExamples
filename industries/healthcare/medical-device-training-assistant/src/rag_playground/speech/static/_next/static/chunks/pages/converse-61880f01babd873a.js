(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [255],
  {
    5689: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/converse",
        function () {
          return t(9886);
        },
      ]);
    },
    8763: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = t(5893),
        r = t(6649),
        c = t(7130);
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
      function o(n) {
        let { src: e } = n,
          { theme: t } = (0, c.oR)();
        return (0, i.jsx)("div", {
          style: s.wrapper,
          children: (0, i.jsx)(r.Z, {
            src: e + "/?__theme=" + t,
            style: s.portal,
          }),
        });
      }
    },
    9886: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return o;
          },
        });
      var i = t(5893),
        r = t(9008),
        c = t.n(r),
        s = t(8763);
      function o() {
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
              children: (0, i.jsx)(s.Z, { src: "/content/converse" }),
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
