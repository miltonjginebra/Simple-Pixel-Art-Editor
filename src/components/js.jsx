webpackJsonp(
  [0],
  {
    "+prg": function (e, t, n) {
      "undefined" == typeof Promise &&
        (n("bJHr").enable(), (window.Promise = n("Nq5S"))),
        n("rplX"),
        (Object.assign = n("BEQ0"));
    },
    "/OLF": function (e, t, n) {
      "use strict";
      var r = n("GiK3"),
        i = n("BEQ0"),
        o = n("xW1K");

      function a(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(a(227));
      var l = !1,
        u = null,
        s = !1,
        c = null,
        f = {
          onError: function (e) {
            (l = !0), (u = e);
          },
        };

      function d(e, t, n, r, i, o, a, s, c) {
        (l = !1),
          (u = null),
          function (e, t, n, r, i, o, a, l, u) {
            var s = Array.prototype.slice.call(arguments, 3);
            try {
              t.apply(n, s);
            } catch (e) {
              this.onError(e);
            }
          }.apply(f, arguments);
      }
      var p = null,
        h = null,
        m = null;

      function v(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = m(n)),
          (function (e, t, n, r, i, o, f, p, h) {
            if ((d.apply(this, arguments), l)) {
              if (!l) throw Error(a(198));
              var m = u;
              (l = !1), (u = null), s || ((s = !0), (c = m));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      var y = null,
        g = {};

      function b() {
        if (y)
          for (var e in g) {
            var t = g[e],
              n = y.indexOf(e);
            if (!(-1 < n)) throw Error(a(96, e));
            if (!x[n]) {
              if (!t.extractEvents) throw Error(a(97, e));
              for (var r in ((x[n] = t), (n = t.eventTypes))) {
                var i = void 0,
                  o = n[r],
                  l = t,
                  u = r;
                if (E.hasOwnProperty(u)) throw Error(a(99, u));
                E[u] = o;
                var s = o.phasedRegistrationNames;
                if (s) {
                  for (i in s) s.hasOwnProperty(i) && w(s[i], l, u);
                  i = !0;
                } else
                  o.registrationName
                    ? (w(o.registrationName, l, u), (i = !0))
                    : (i = !1);
                if (!i) throw Error(a(98, r, e));
              }
            }
          }
      }

      function w(e, t, n) {
        if (k[e]) throw Error(a(100, e));
        (k[e] = t), (T[e] = t.eventTypes[n].dependencies);
      }
      var x = [],
        E = {},
        k = {},
        T = {};

      function _(e) {
        var t,
          n = !1;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var r = e[t];
            if (!g.hasOwnProperty(t) || g[t] !== r) {
              if (g[t]) throw Error(a(102, t));
              (g[t] = r), (n = !0);
            }
          }
        n && b();
      }
      var S = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        C = null,
        P = null,
        O = null;

      function R(e) {
        if ((e = h(e))) {
          if ("function" != typeof C) throw Error(a(280));
          var t = e.stateNode;
          t && ((t = p(t)), C(e.stateNode, e.type, t));
        }
      }

      function M(e) {
        P ? (O ? O.push(e) : (O = [e])) : (P = e);
      }

      function z() {
        if (P) {
          var e = P,
            t = O;
          if (((O = P = null), R(e), t)) for (e = 0; e < t.length; e++) R(t[e]);
        }
      }

      function D(e, t) {
        return e(t);
      }

      function N(e, t, n, r, i) {
        return e(t, n, r, i);
      }

      function I() {}
      var L = D,
        F = !1,
        A = !1;

      function j() {
        (null === P && null === O) || (I(), z());
      }

      function U(e, t, n) {
        if (A) return e(t, n);
        A = !0;
        try {
          return L(e, t, n);
        } finally {
          (A = !1), j();
        }
      }
      var B =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        W = Object.prototype.hasOwnProperty,
        H = {},
        V = {};

      function Q(e, t, n, r, i, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = i),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = o);
      }
      var q = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          q[e] = new Q(e, 0, !1, e, null, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          q[t] = new Q(t, 1, !1, e[1], null, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            q[e] = new Q(e, 2, !1, e.toLowerCase(), null, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          q[e] = new Q(e, 2, !1, e, null, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            q[e] = new Q(e, 3, !1, e.toLowerCase(), null, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          q[e] = new Q(e, 3, !0, e, null, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          q[e] = new Q(e, 4, !1, e, null, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          q[e] = new Q(e, 6, !1, e, null, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          q[e] = new Q(e, 5, !1, e.toLowerCase(), null, !1);
        });
      var $ = /[\-:]([a-z])/g;

      function K(e) {
        return e[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace($, K);
          q[t] = new Q(t, 1, !1, e, null, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace($, K);
            q[t] = new Q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace($, K);
          q[t] = new Q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          q[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1);
        }),
        (q.xlinkHref = new Q(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          q[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0);
        });
      var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

      function Y(e, t, n, r) {
        var i = q.hasOwnProperty(t) ? q[t] : null;
        (null !== i
          ? 0 === i.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null === t ||
              void 0 === t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, i, r) && (n = null),
          r || null === i
            ? (function (e) {
                return (
                  !!W.call(V, e) ||
                  (!W.call(H, e) &&
                    (B.test(e) ? (V[e] = !0) : ((H[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      G.hasOwnProperty("ReactCurrentDispatcher") ||
        (G.ReactCurrentDispatcher = {
          current: null,
        }),
        G.hasOwnProperty("ReactCurrentBatchConfig") ||
          (G.ReactCurrentBatchConfig = {
            suspense: null,
          });
      var X = /^(.*)[\\\/]/,
        J = "function" == typeof Symbol && Symbol.for,
        Z = J ? Symbol.for("react.element") : 60103,
        ee = J ? Symbol.for("react.portal") : 60106,
        te = J ? Symbol.for("react.fragment") : 60107,
        ne = J ? Symbol.for("react.strict_mode") : 60108,
        re = J ? Symbol.for("react.profiler") : 60114,
        ie = J ? Symbol.for("react.provider") : 60109,
        oe = J ? Symbol.for("react.context") : 60110,
        ae = J ? Symbol.for("react.concurrent_mode") : 60111,
        le = J ? Symbol.for("react.forward_ref") : 60112,
        ue = J ? Symbol.for("react.suspense") : 60113,
        se = J ? Symbol.for("react.suspense_list") : 60120,
        ce = J ? Symbol.for("react.memo") : 60115,
        fe = J ? Symbol.for("react.lazy") : 60116,
        de = J ? Symbol.for("react.block") : 60121,
        pe = "function" == typeof Symbol && Symbol.iterator;

      function he(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (pe && e[pe]) || e["@@iterator"])
          ? e
          : null;
      }

      function me(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case te:
            return "Fragment";
          case ee:
            return "Portal";
          case re:
            return "Profiler";
          case ne:
            return "StrictMode";
          case ue:
            return "Suspense";
          case se:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case oe:
              return "Context.Consumer";
            case ie:
              return "Context.Provider";
            case le:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case ce:
              return me(e.type);
            case de:
              return me(e.render);
            case fe:
              if ((e = 1 === e._status ? e._result : null)) return me(e);
          }
        return null;
      }

      function ve(e) {
        var t = "";
        do {
          e: switch (e.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
              var n = "";
              break e;
            default:
              var r = e._debugOwner,
                i = e._debugSource,
                o = me(e.type);
              (n = null),
                r && (n = me(r.type)),
                (r = o),
                (o = ""),
                i
                  ? (o =
                      " (at " +
                      i.fileName.replace(X, "") +
                      ":" +
                      i.lineNumber +
                      ")")
                  : n && (o = " (created by " + n + ")"),
                (n = "\n    in " + (r || "Unknown") + o);
          }
          (t += n), (e = e.return);
        } while (e);
        return t;
      }

      function ye(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }

      function ge(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }

      function be(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = ge(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== n &&
              "function" == typeof n.get &&
              "function" == typeof n.set
            ) {
              var i = n.get,
                o = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return i.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), o.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, {
                  enumerable: n.enumerable,
                }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }

      function we(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = ge(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }

      function xe(e, t) {
        var n = t.checked;
        return i({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }

      function Ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = ye(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }

      function ke(e, t) {
        null != (t = t.checked) && Y(e, "checked", t, !1);
      }

      function Te(e, t) {
        ke(e, t);
        var n = ye(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? Se(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            Se(e, t.type, ye(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }

      function _e(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }

      function Se(e, t, n) {
        ("number" === t && e.ownerDocument.activeElement === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }

      function Ce(e, t) {
        return (
          (e = i(
            {
              children: void 0,
            },
            t
          )),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }

      function Pe(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
          for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== i && (e[n].selected = i),
              i && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + ye(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n)
              return (
                (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
              );
            null !== t || e[i].disabled || (t = e[i]);
          }
          null !== t && (t.selected = !0);
        }
      }

      function Oe(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
        return i({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }

      function Re(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(a(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(a(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ""), (n = t);
        }
        e._wrapperState = {
          initialValue: ye(n),
        };
      }

      function Me(e, t) {
        var n = ye(t.value),
          r = ye(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }

      function ze(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      var De = "http://www.w3.org/1999/xhtml",
        Ne = "http://www.w3.org/2000/svg";

      function Ie(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }

      function Le(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? Ie(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var Fe,
        Ae,
        je =
          ((Ae = function (e, t) {
            if (e.namespaceURI !== Ne || "innerHTML" in e) e.innerHTML = t;
            else {
              for (
                (Fe = Fe || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = Fe.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return Ae(e, t);
                });
              }
            : Ae);

      function Ue(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }

      function Be(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var We = {
          animationend: Be("Animation", "AnimationEnd"),
          animationiteration: Be("Animation", "AnimationIteration"),
          animationstart: Be("Animation", "AnimationStart"),
          transitionend: Be("Transition", "TransitionEnd"),
        },
        He = {},
        Ve = {};

      function Qe(e) {
        if (He[e]) return He[e];
        if (!We[e]) return e;
        var t,
          n = We[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Ve) return (He[e] = n[t]);
        return e;
      }
      S &&
        ((Ve = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete We.animationend.animation,
          delete We.animationiteration.animation,
          delete We.animationstart.animation),
        "TransitionEvent" in window || delete We.transitionend.transition);
      var qe = Qe("animationend"),
        $e = Qe("animationiteration"),
        Ke = Qe("animationstart"),
        Ge = Qe("transitionend"),
        Ye =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        Xe = new ("function" == typeof WeakMap ? WeakMap : Map)();

      function Je(e) {
        var t = Xe.get(e);
        return void 0 === t && ((t = new Map()), Xe.set(e, t)), t;
      }

      function Ze(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }

      function et(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }

      function tt(e) {
        if (Ze(e) !== e) throw Error(a(188));
      }

      function nt(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ze(e))) throw Error(a(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var i = n.return;
              if (null === i) break;
              var o = i.alternate;
              if (null === o) {
                if (null !== (r = i.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (i.child === o.child) {
                for (o = i.child; o; ) {
                  if (o === n) return tt(i), e;
                  if (o === r) return tt(i), t;
                  o = o.sibling;
                }
                throw Error(a(188));
              }
              if (n.return !== r.return) (n = i), (r = o);
              else {
                for (var l = !1, u = i.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = i), (r = o);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = i), (n = o);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) {
                  for (u = o.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) throw Error(a(189));
                }
              }
              if (n.alternate !== r) throw Error(a(190));
            }
            if (3 !== n.tag) throw Error(a(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }

      function rt(e, t) {
        if (null == t) throw Error(a(30));
        return null == e
          ? t
          : Array.isArray(e)
          ? Array.isArray(t)
            ? (e.push.apply(e, t), e)
            : (e.push(t), e)
          : Array.isArray(t)
          ? [e].concat(t)
          : [e, t];
      }

      function it(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
      }
      var ot = null;

      function at(e) {
        if (e) {
          var t = e._dispatchListeners,
            n = e._dispatchInstances;
          if (Array.isArray(t))
            for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
              v(e, t[r], n[r]);
          else t && v(e, t, n);
          (e._dispatchListeners = null),
            (e._dispatchInstances = null),
            e.isPersistent() || e.constructor.release(e);
        }
      }

      function lt(e) {
        if ((null !== e && (ot = rt(ot, e)), (e = ot), (ot = null), e)) {
          if ((it(e, at), ot)) throw Error(a(95));
          if (s) throw ((e = c), (s = !1), (c = null), e);
        }
      }

      function ut(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }

      function st(e) {
        if (!S) return !1;
        var t = (e = "on" + e) in document;
        return (
          t ||
            ((t = document.createElement("div")).setAttribute(e, "return;"),
            (t = "function" == typeof t[e])),
          t
        );
      }
      var ct = [];

      function ft(e) {
        (e.topLevelType = null),
          (e.nativeEvent = null),
          (e.targetInst = null),
          (e.ancestors.length = 0),
          10 > ct.length && ct.push(e);
      }

      function dt(e, t, n, r) {
        if (ct.length) {
          var i = ct.pop();
          return (
            (i.topLevelType = e),
            (i.eventSystemFlags = r),
            (i.nativeEvent = t),
            (i.targetInst = n),
            i
          );
        }
        return {
          topLevelType: e,
          eventSystemFlags: r,
          nativeEvent: t,
          targetInst: n,
          ancestors: [],
        };
      }

      function pt(e) {
        var t = e.targetInst,
          n = t;
        do {
          if (!n) {
            e.ancestors.push(n);
            break;
          }
          var r = n;
          if (3 === r.tag) r = r.stateNode.containerInfo;
          else {
            for (; r.return; ) r = r.return;
            r = 3 !== r.tag ? null : r.stateNode.containerInfo;
          }
          if (!r) break;
          (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = On(r));
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
          t = e.ancestors[n];
          var i = ut(e.nativeEvent);
          r = e.topLevelType;
          var o = e.nativeEvent,
            a = e.eventSystemFlags;
          0 === n && (a |= 64);
          for (var l = null, u = 0; u < x.length; u++) {
            var s = x[u];
            s && (s = s.extractEvents(r, t, o, i, a)) && (l = rt(l, s));
          }
          lt(l);
        }
      }

      function ht(e, t, n) {
        if (!n.has(e)) {
          switch (e) {
            case "scroll":
              Kt(t, "scroll", !0);
              break;
            case "focus":
            case "blur":
              Kt(t, "focus", !0),
                Kt(t, "blur", !0),
                n.set("blur", null),
                n.set("focus", null);
              break;
            case "cancel":
            case "close":
              st(e) && Kt(t, e, !0);
              break;
            case "invalid":
            case "submit":
            case "reset":
              break;
            default:
              -1 === Ye.indexOf(e) && $t(e, t);
          }
          n.set(e, null);
        }
      }
      var mt,
        vt,
        yt,
        gt = !1,
        bt = [],
        wt = null,
        xt = null,
        Et = null,
        kt = new Map(),
        Tt = new Map(),
        _t = [],
        St =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
            " "
          ),
        Ct =
          "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
            " "
          );

      function Pt(e, t, n, r, i) {
        return {
          blockedOn: e,
          topLevelType: t,
          eventSystemFlags: 32 | n,
          nativeEvent: i,
          container: r,
        };
      }

      function Ot(e, t) {
        switch (e) {
          case "focus":
          case "blur":
            wt = null;
            break;
          case "dragenter":
          case "dragleave":
            xt = null;
            break;
          case "mouseover":
          case "mouseout":
            Et = null;
            break;
          case "pointerover":
          case "pointerout":
            kt.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Tt.delete(t.pointerId);
        }
      }

      function Rt(e, t, n, r, i, o) {
        return null === e || e.nativeEvent !== o
          ? ((e = Pt(t, n, r, i, o)),
            null !== t && null !== (t = Rn(t)) && vt(t),
            e)
          : ((e.eventSystemFlags |= r), e);
      }

      function Mt(e) {
        var t = On(e.target);
        if (null !== t) {
          var n = Ze(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = et(n)))
                return (
                  (e.blockedOn = t),
                  void o.unstable_runWithPriority(e.priority, function () {
                    yt(n);
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }

      function zt(e) {
        if (null !== e.blockedOn) return !1;
        var t = Yt(
          e.topLevelType,
          e.eventSystemFlags,
          e.container,
          e.nativeEvent
        );
        if (null !== t) {
          var n = Rn(t);
          return null !== n && vt(n), (e.blockedOn = t), !1;
        }
        return !0;
      }

      function Dt(e, t, n) {
        zt(e) && n.delete(t);
      }

      function Nt() {
        for (gt = !1; 0 < bt.length; ) {
          var e = bt[0];
          if (null !== e.blockedOn) {
            null !== (e = Rn(e.blockedOn)) && mt(e);
            break;
          }
          var t = Yt(
            e.topLevelType,
            e.eventSystemFlags,
            e.container,
            e.nativeEvent
          );
          null !== t ? (e.blockedOn = t) : bt.shift();
        }
        null !== wt && zt(wt) && (wt = null),
          null !== xt && zt(xt) && (xt = null),
          null !== Et && zt(Et) && (Et = null),
          kt.forEach(Dt),
          Tt.forEach(Dt);
      }

      function It(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          gt ||
            ((gt = !0),
            o.unstable_scheduleCallback(o.unstable_NormalPriority, Nt)));
      }

      function Lt(e) {
        function t(t) {
          return It(t, e);
        }
        if (0 < bt.length) {
          It(bt[0], e);
          for (var n = 1; n < bt.length; n++) {
            var r = bt[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== wt && It(wt, e),
            null !== xt && It(xt, e),
            null !== Et && It(Et, e),
            kt.forEach(t),
            Tt.forEach(t),
            n = 0;
          n < _t.length;
          n++
        )
          (r = _t[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < _t.length && null === (n = _t[0]).blockedOn; )
          Mt(n), null === n.blockedOn && _t.shift();
      }
      var Ft = {},
        At = new Map(),
        jt = new Map(),
        Ut = [
          "abort",
          "abort",
          qe,
          "animationEnd",
          $e,
          "animationIteration",
          Ke,
          "animationStart",
          "canplay",
          "canPlay",
          "canplaythrough",
          "canPlayThrough",
          "durationchange",
          "durationChange",
          "emptied",
          "emptied",
          "encrypted",
          "encrypted",
          "ended",
          "ended",
          "error",
          "error",
          "gotpointercapture",
          "gotPointerCapture",
          "load",
          "load",
          "loadeddata",
          "loadedData",
          "loadedmetadata",
          "loadedMetadata",
          "loadstart",
          "loadStart",
          "lostpointercapture",
          "lostPointerCapture",
          "playing",
          "playing",
          "progress",
          "progress",
          "seeking",
          "seeking",
          "stalled",
          "stalled",
          "suspend",
          "suspend",
          "timeupdate",
          "timeUpdate",
          Ge,
          "transitionEnd",
          "waiting",
          "waiting",
        ];

      function Bt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            i = e[n + 1],
            o = "on" + (i[0].toUpperCase() + i.slice(1));
          (o = {
            phasedRegistrationNames: {
              bubbled: o,
              captured: o + "Capture",
            },
            dependencies: [r],
            eventPriority: t,
          }),
            jt.set(r, t),
            At.set(r, o),
            (Ft[i] = o);
        }
      }
      Bt(
        "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
        Bt(
          "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
            " "
          ),
          1
        ),
        Bt(Ut, 2);
      for (
        var Wt =
            "change selectionchange textInput compositionstart compositionend compositionupdate".split(
              " "
            ),
          Ht = 0;
        Ht < Wt.length;
        Ht++
      )
        jt.set(Wt[Ht], 0);
      var Vt = o.unstable_UserBlockingPriority,
        Qt = o.unstable_runWithPriority,
        qt = !0;

      function $t(e, t) {
        Kt(t, e, !1);
      }

      function Kt(e, t, n) {
        var r = jt.get(t);
        switch (void 0 === r ? 2 : r) {
          case 0:
            r = function (e, t, n, r) {
              F || I();
              var i = Gt,
                o = F;
              F = !0;
              try {
                N(i, e, t, n, r);
              } finally {
                (F = o) || j();
              }
            }.bind(null, t, 1, e);
            break;
          case 1:
            r = function (e, t, n, r) {
              Qt(Vt, Gt.bind(null, e, t, n, r));
            }.bind(null, t, 1, e);
            break;
          default:
            r = Gt.bind(null, t, 1, e);
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
      }

      function Gt(e, t, n, r) {
        if (qt)
          if (0 < bt.length && -1 < St.indexOf(e))
            (e = Pt(null, e, t, n, r)), bt.push(e);
          else {
            var i = Yt(e, t, n, r);
            if (null === i) Ot(e, r);
            else if (-1 < St.indexOf(e)) (e = Pt(i, e, t, n, r)), bt.push(e);
            else if (
              !(function (e, t, n, r, i) {
                switch (t) {
                  case "focus":
                    return (wt = Rt(wt, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (xt = Rt(xt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Et = Rt(Et, e, t, n, r, i)), !0;
                  case "pointerover":
                    var o = i.pointerId;
                    return kt.set(o, Rt(kt.get(o) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (o = i.pointerId),
                      Tt.set(o, Rt(Tt.get(o) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            ) {
              Ot(e, r), (e = dt(e, r, null, t));
              try {
                U(pt, e);
              } finally {
                ft(e);
              }
            }
          }
      }

      function Yt(e, t, n, r) {
        if (null !== (n = On((n = ut(r))))) {
          var i = Ze(n);
          if (null === i) n = null;
          else {
            var o = i.tag;
            if (13 === o) {
              if (null !== (n = et(i))) return n;
              n = null;
            } else if (3 === o) {
              if (i.stateNode.hydrate)
                return 3 === i.tag ? i.stateNode.containerInfo : null;
              n = null;
            } else i !== n && (n = null);
          }
        }
        e = dt(e, r, n, t);
        try {
          U(pt, e);
        } finally {
          ft(e);
        }
        return null;
      }
      var Xt = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        Jt = ["Webkit", "ms", "Moz", "O"];

      function Zt(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
            "number" != typeof t ||
            0 === t ||
            (Xt.hasOwnProperty(e) && Xt[e])
          ? ("" + t).trim()
          : t + "px";
      }

      function en(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              i = Zt(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, i) : (e[n] = i);
          }
      }
      Object.keys(Xt).forEach(function (e) {
        Jt.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xt[t] = Xt[e]);
        });
      });
      var tn = i(
        {
          menuitem: !0,
        },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );

      function nn(e, t) {
        if (t) {
          if (
            tn[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(a(137, e, ""));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(a(60));
            if (
              !(
                "object" == typeof t.dangerouslySetInnerHTML &&
                "__html" in t.dangerouslySetInnerHTML
              )
            )
              throw Error(a(61));
          }
          if (null != t.style && "object" != typeof t.style)
            throw Error(a(62, ""));
        }
      }

      function rn(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var on = De;

      function an(e, t) {
        var n = Je(
          (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
        );
        t = T[t];
        for (var r = 0; r < t.length; r++) ht(t[r], e, n);
      }

      function ln() {}

      function un(e) {
        if (
          void 0 ===
          (e = e || ("undefined" != typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }

      function sn(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }

      function cn(e, t) {
        var n,
          r = sn(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return {
                node: r,
                offset: t - e,
              };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = sn(r);
        }
      }

      function fn() {
        for (var e = window, t = un(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href;
          } catch (e) {
            n = !1;
          }
          if (!n) break;
          t = un((e = t.contentWindow).document);
        }
        return t;
      }

      function dn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var pn = "$",
        hn = "/$",
        mn = "$?",
        vn = "$!",
        yn = null,
        gn = null;

      function bn(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }

      function wn(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var xn = "function" == typeof setTimeout ? setTimeout : void 0,
        En = "function" == typeof clearTimeout ? clearTimeout : void 0;

      function kn(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }

      function Tn(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if (n === pn || n === vn || n === mn) {
              if (0 === t) return e;
              t--;
            } else n === hn && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var _n = Math.random().toString(36).slice(2),
        Sn = "__reactInternalInstance$" + _n,
        Cn = "__reactEventHandlers$" + _n,
        Pn = "__reactContainere$" + _n;

      function On(e) {
        var t = e[Sn];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Pn] || n[Sn])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = Tn(e); null !== e; ) {
                if ((n = e[Sn])) return n;
                e = Tn(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }

      function Rn(e) {
        return !(e = e[Sn] || e[Pn]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }

      function Mn(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(a(33));
      }

      function zn(e) {
        return e[Cn] || null;
      }

      function Dn(e) {
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }

      function Nn(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = p(n);
        if (!r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
        return n;
      }

      function In(e, t, n) {
        (t = Nn(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
          ((n._dispatchListeners = rt(n._dispatchListeners, t)),
          (n._dispatchInstances = rt(n._dispatchInstances, e)));
      }

      function Ln(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
          for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Dn(t));
          for (t = n.length; 0 < t--; ) In(n[t], "captured", e);
          for (t = 0; t < n.length; t++) In(n[t], "bubbled", e);
        }
      }

      function Fn(e, t, n) {
        e &&
          n &&
          n.dispatchConfig.registrationName &&
          (t = Nn(e, n.dispatchConfig.registrationName)) &&
          ((n._dispatchListeners = rt(n._dispatchListeners, t)),
          (n._dispatchInstances = rt(n._dispatchInstances, e)));
      }

      function An(e) {
        e && e.dispatchConfig.registrationName && Fn(e._targetInst, null, e);
      }

      function jn(e) {
        it(e, Ln);
      }
      var Un = null,
        Bn = null,
        Wn = null;

      function Hn() {
        if (Wn) return Wn;
        var e,
          t,
          n = Bn,
          r = n.length,
          i = "value" in Un ? Un.value : Un.textContent,
          o = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++);
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
        return (Wn = i.slice(e, 1 < t ? 1 - t : void 0));
      }

      function Vn() {
        return !0;
      }

      function Qn() {
        return !1;
      }

      function qn(e, t, n, r) {
        for (var i in ((this.dispatchConfig = e),
        (this._targetInst = t),
        (this.nativeEvent = n),
        (e = this.constructor.Interface)))
          e.hasOwnProperty(i) &&
            ((t = e[i])
              ? (this[i] = t(n))
              : "target" === i
              ? (this.target = r)
              : (this[i] = n[i]));
        return (
          (this.isDefaultPrevented = (
            null != n.defaultPrevented
              ? n.defaultPrevented
              : !1 === n.returnValue
          )
            ? Vn
            : Qn),
          (this.isPropagationStopped = Qn),
          this
        );
      }

      function $n(e, t, n, r) {
        if (this.eventPool.length) {
          var i = this.eventPool.pop();
          return this.call(i, e, t, n, r), i;
        }
        return new this(e, t, n, r);
      }

      function Kn(e) {
        if (!(e instanceof this)) throw Error(a(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
      }

      function Gn(e) {
        (e.eventPool = []), (e.getPooled = $n), (e.release = Kn);
      }
      i(qn.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = Vn));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = Vn));
        },
        persist: function () {
          this.isPersistent = Vn;
        },
        isPersistent: Qn,
        destructor: function () {
          var e,
            t = this.constructor.Interface;
          for (e in t) this[e] = null;
          (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
            (this.isPropagationStopped = this.isDefaultPrevented = Qn),
            (this._dispatchInstances = this._dispatchListeners = null);
        },
      }),
        (qn.Interface = {
          type: null,
          target: null,
          currentTarget: function () {
            return null;
          },
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null,
        }),
        (qn.extend = function (e) {
          function t() {}

          function n() {
            return r.apply(this, arguments);
          }
          var r = this;
          t.prototype = r.prototype;
          var o = new t();
          return (
            i(o, n.prototype),
            (n.prototype = o),
            (n.prototype.constructor = n),
            (n.Interface = i({}, r.Interface, e)),
            (n.extend = r.extend),
            Gn(n),
            n
          );
        }),
        Gn(qn);
      var Yn = qn.extend({
          data: null,
        }),
        Xn = qn.extend({
          data: null,
        }),
        Jn = [9, 13, 27, 32],
        Zn = S && "CompositionEvent" in window,
        er = null;
      S && "documentMode" in document && (er = document.documentMode);
      var tr = S && "TextEvent" in window && !er,
        nr = S && (!Zn || (er && 8 < er && 11 >= er)),
        rr = String.fromCharCode(32),
        ir = {
          beforeInput: {
            phasedRegistrationNames: {
              bubbled: "onBeforeInput",
              captured: "onBeforeInputCapture",
            },
            dependencies: ["compositionend", "keypress", "textInput", "paste"],
          },
          compositionEnd: {
            phasedRegistrationNames: {
              bubbled: "onCompositionEnd",
              captured: "onCompositionEndCapture",
            },
            dependencies:
              "blur compositionend keydown keypress keyup mousedown".split(" "),
          },
          compositionStart: {
            phasedRegistrationNames: {
              bubbled: "onCompositionStart",
              captured: "onCompositionStartCapture",
            },
            dependencies:
              "blur compositionstart keydown keypress keyup mousedown".split(
                " "
              ),
          },
          compositionUpdate: {
            phasedRegistrationNames: {
              bubbled: "onCompositionUpdate",
              captured: "onCompositionUpdateCapture",
            },
            dependencies:
              "blur compositionupdate keydown keypress keyup mousedown".split(
                " "
              ),
          },
        },
        or = !1;

      function ar(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Jn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "blur":
            return !0;
          default:
            return !1;
        }
      }

      function lr(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var ur = !1;
      var sr = {
          eventTypes: ir,
          extractEvents: function (e, t, n, r) {
            var i;
            if (Zn)
              e: {
                switch (e) {
                  case "compositionstart":
                    var o = ir.compositionStart;
                    break e;
                  case "compositionend":
                    o = ir.compositionEnd;
                    break e;
                  case "compositionupdate":
                    o = ir.compositionUpdate;
                    break e;
                }
                o = void 0;
              }
            else
              ur
                ? ar(e, n) && (o = ir.compositionEnd)
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (o = ir.compositionStart);
            return (
              o
                ? (nr &&
                    "ko" !== n.locale &&
                    (ur || o !== ir.compositionStart
                      ? o === ir.compositionEnd && ur && (i = Hn())
                      : ((Bn = "value" in (Un = r) ? Un.value : Un.textContent),
                        (ur = !0))),
                  (o = Yn.getPooled(o, t, n, r)),
                  i ? (o.data = i) : null !== (i = lr(n)) && (o.data = i),
                  jn(o),
                  (i = o))
                : (i = null),
              (e = tr
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return lr(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((or = !0), rr);
                      case "textInput":
                        return (e = t.data) === rr && or ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (ur)
                      return "compositionend" === e || (!Zn && ar(e, t))
                        ? ((e = Hn()), (Wn = Bn = Un = null), (ur = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return nr && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n))
                ? (((t = Xn.getPooled(ir.beforeInput, t, n, r)).data = e),
                  jn(t))
                : (t = null),
              null === i ? t : null === t ? i : [i, t]
            );
          },
        },
        cr = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };

      function fr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!cr[e.type] : "textarea" === t;
      }
      var dr = {
        change: {
          phasedRegistrationNames: {
            bubbled: "onChange",
            captured: "onChangeCapture",
          },
          dependencies:
            "blur change click focus input keydown keyup selectionchange".split(
              " "
            ),
        },
      };

      function pr(e, t, n) {
        return (
          ((e = qn.getPooled(dr.change, e, t, n)).type = "change"),
          M(n),
          jn(e),
          e
        );
      }
      var hr = null,
        mr = null;

      function vr(e) {
        lt(e);
      }

      function yr(e) {
        if (we(Mn(e))) return e;
      }

      function gr(e, t) {
        if ("change" === e) return t;
      }
      var br = !1;

      function wr() {
        hr && (hr.detachEvent("onpropertychange", xr), (mr = hr = null));
      }

      function xr(e) {
        if ("value" === e.propertyName && yr(mr))
          if (((e = pr(mr, e, ut(e))), F)) lt(e);
          else {
            F = !0;
            try {
              D(vr, e);
            } finally {
              (F = !1), j();
            }
          }
      }

      function Er(e, t, n) {
        "focus" === e
          ? (wr(), (mr = n), (hr = t).attachEvent("onpropertychange", xr))
          : "blur" === e && wr();
      }

      function kr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return yr(mr);
      }

      function Tr(e, t) {
        if ("click" === e) return yr(t);
      }

      function _r(e, t) {
        if ("input" === e || "change" === e) return yr(t);
      }
      S &&
        (br =
          st("input") && (!document.documentMode || 9 < document.documentMode));
      var Sr = {
          eventTypes: dr,
          _isInputEventSupported: br,
          extractEvents: function (e, t, n, r) {
            var i = t ? Mn(t) : window,
              o = i.nodeName && i.nodeName.toLowerCase();
            if ("select" === o || ("input" === o && "file" === i.type))
              var a = gr;
            else if (fr(i))
              if (br) a = _r;
              else {
                a = kr;
                var l = Er;
              }
            else
              (o = i.nodeName) &&
                "input" === o.toLowerCase() &&
                ("checkbox" === i.type || "radio" === i.type) &&
                (a = Tr);
            if (a && (a = a(e, t))) return pr(a, n, r);
            l && l(e, i, t),
              "blur" === e &&
                (e = i._wrapperState) &&
                e.controlled &&
                "number" === i.type &&
                Se(i, "number", i.value);
          },
        },
        Cr = qn.extend({
          view: null,
          detail: null,
        }),
        Pr = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };

      function Or(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Pr[e]) && !!t[e];
      }

      function Rr() {
        return Or;
      }
      var Mr = 0,
        zr = 0,
        Dr = !1,
        Nr = !1,
        Ir = Cr.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: Rr,
          button: null,
          buttons: null,
          relatedTarget: function (e) {
            return (
              e.relatedTarget ||
              (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            );
          },
          movementX: function (e) {
            if ("movementX" in e) return e.movementX;
            var t = Mr;
            return (
              (Mr = e.screenX),
              Dr ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Dr = !0), 0)
            );
          },
          movementY: function (e) {
            if ("movementY" in e) return e.movementY;
            var t = zr;
            return (
              (zr = e.screenY),
              Nr ? ("mousemove" === e.type ? e.screenY - t : 0) : ((Nr = !0), 0)
            );
          },
        }),
        Lr = Ir.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null,
        }),
        Fr = {
          mouseEnter: {
            registrationName: "onMouseEnter",
            dependencies: ["mouseout", "mouseover"],
          },
          mouseLeave: {
            registrationName: "onMouseLeave",
            dependencies: ["mouseout", "mouseover"],
          },
          pointerEnter: {
            registrationName: "onPointerEnter",
            dependencies: ["pointerout", "pointerover"],
          },
          pointerLeave: {
            registrationName: "onPointerLeave",
            dependencies: ["pointerout", "pointerover"],
          },
        },
        Ar = {
          eventTypes: Fr,
          extractEvents: function (e, t, n, r, i) {
            var o = "mouseover" === e || "pointerover" === e,
              a = "mouseout" === e || "pointerout" === e;
            if (
              (o && 0 == (32 & i) && (n.relatedTarget || n.fromElement)) ||
              (!a && !o)
            )
              return null;
            ((o =
              r.window === r
                ? r
                : (o = r.ownerDocument)
                ? o.defaultView || o.parentWindow
                : window),
            a)
              ? ((a = t),
                null !==
                  (t = (t = n.relatedTarget || n.toElement) ? On(t) : null) &&
                  (t !== Ze(t) || (5 !== t.tag && 6 !== t.tag)) &&
                  (t = null))
              : (a = null);
            if (a === t) return null;
            if ("mouseout" === e || "mouseover" === e)
              var l = Ir,
                u = Fr.mouseLeave,
                s = Fr.mouseEnter,
                c = "mouse";
            else
              ("pointerout" !== e && "pointerover" !== e) ||
                ((l = Lr),
                (u = Fr.pointerLeave),
                (s = Fr.pointerEnter),
                (c = "pointer"));
            if (
              ((e = null == a ? o : Mn(a)),
              (o = null == t ? o : Mn(t)),
              ((u = l.getPooled(u, a, n, r)).type = c + "leave"),
              (u.target = e),
              (u.relatedTarget = o),
              ((n = l.getPooled(s, t, n, r)).type = c + "enter"),
              (n.target = o),
              (n.relatedTarget = e),
              (c = t),
              (r = a) && c)
            )
              e: {
                for (s = c, a = 0, e = l = r; e; e = Dn(e)) a++;
                for (e = 0, t = s; t; t = Dn(t)) e++;
                for (; 0 < a - e; ) (l = Dn(l)), a--;
                for (; 0 < e - a; ) (s = Dn(s)), e--;
                for (; a--; ) {
                  if (l === s || l === s.alternate) break e;
                  (l = Dn(l)), (s = Dn(s));
                }
                l = null;
              }
            else l = null;
            for (
              s = l, l = [];
              r && r !== s && (null === (a = r.alternate) || a !== s);

            )
              l.push(r), (r = Dn(r));
            for (
              r = [];
              c && c !== s && (null === (a = c.alternate) || a !== s);

            )
              r.push(c), (c = Dn(c));
            for (c = 0; c < l.length; c++) Fn(l[c], "bubbled", u);
            for (c = r.length; 0 < c--; ) Fn(r[c], "captured", n);
            return 0 == (64 & i) ? [u] : [u, n];
          },
        };
      var jr =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        Ur = Object.prototype.hasOwnProperty;

      function Br(e, t) {
        if (jr(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!Ur.call(t, n[r]) || !jr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      var Wr = S && "documentMode" in document && 11 >= document.documentMode,
        Hr = {
          select: {
            phasedRegistrationNames: {
              bubbled: "onSelect",
              captured: "onSelectCapture",
            },
            dependencies:
              "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
                " "
              ),
          },
        },
        Vr = null,
        Qr = null,
        qr = null,
        $r = !1;

      function Kr(e, t) {
        var n =
          t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return $r || null == Vr || Vr !== un(n)
          ? null
          : ("selectionStart" in (n = Vr) && dn(n)
              ? (n = {
                  start: n.selectionStart,
                  end: n.selectionEnd,
                })
              : (n = {
                  anchorNode: (n = (
                    (n.ownerDocument && n.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset,
                }),
            qr && Br(qr, n)
              ? null
              : ((qr = n),
                ((e = qn.getPooled(Hr.select, Qr, e, t)).type = "select"),
                (e.target = Vr),
                jn(e),
                e));
      }
      var Gr = {
          eventTypes: Hr,
          extractEvents: function (e, t, n, r, i, o) {
            if (
              !(o = !(i =
                o ||
                (r.window === r
                  ? r.document
                  : 9 === r.nodeType
                  ? r
                  : r.ownerDocument)))
            ) {
              e: {
                (i = Je(i)), (o = T.onSelect);
                for (var a = 0; a < o.length; a++)
                  if (!i.has(o[a])) {
                    i = !1;
                    break e;
                  }
                i = !0;
              }
              o = !i;
            }
            if (o) return null;
            switch (((i = t ? Mn(t) : window), e)) {
              case "focus":
                (fr(i) || "true" === i.contentEditable) &&
                  ((Vr = i), (Qr = t), (qr = null));
                break;
              case "blur":
                qr = Qr = Vr = null;
                break;
              case "mousedown":
                $r = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                return ($r = !1), Kr(n, r);
              case "selectionchange":
                if (Wr) break;
              case "keydown":
              case "keyup":
                return Kr(n, r);
            }
            return null;
          },
        },
        Yr = qn.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        Xr = qn.extend({
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        Jr = Cr.extend({
          relatedTarget: null,
        });

      function Zr(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      var ei = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        ti = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        ni = Cr.extend({
          key: function (e) {
            if (e.key) {
              var t = ei[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = Zr(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? ti[e.keyCode] || "Unidentified"
              : "";
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: Rr,
          charCode: function (e) {
            return "keypress" === e.type ? Zr(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? Zr(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        }),
        ri = Ir.extend({
          dataTransfer: null,
        }),
        ii = Cr.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: Rr,
        }),
        oi = qn.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        ai = Ir.extend({
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: null,
          deltaMode: null,
        }),
        li = {
          eventTypes: Ft,
          extractEvents: function (e, t, n, r) {
            var i = At.get(e);
            if (!i) return null;
            switch (e) {
              case "keypress":
                if (0 === Zr(n)) return null;
              case "keydown":
              case "keyup":
                e = ni;
                break;
              case "blur":
              case "focus":
                e = Jr;
                break;
              case "click":
                if (2 === n.button) return null;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                e = Ir;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                e = ri;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                e = ii;
                break;
              case qe:
              case $e:
              case Ke:
                e = Yr;
                break;
              case Ge:
                e = oi;
                break;
              case "scroll":
                e = Cr;
                break;
              case "wheel":
                e = ai;
                break;
              case "copy":
              case "cut":
              case "paste":
                e = Xr;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                e = Lr;
                break;
              default:
                e = qn;
            }
            return jn((t = e.getPooled(i, t, n, r))), t;
          },
        };
      if (y) throw Error(a(101));
      (y = Array.prototype.slice.call(
        "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
          " "
        )
      )),
        b(),
        (p = zn),
        (h = Rn),
        (m = Mn),
        _({
          SimpleEventPlugin: li,
          EnterLeaveEventPlugin: Ar,
          ChangeEventPlugin: Sr,
          SelectEventPlugin: Gr,
          BeforeInputEventPlugin: sr,
        });
      var ui = [],
        si = -1;

      function ci(e) {
        0 > si || ((e.current = ui[si]), (ui[si] = null), si--);
      }

      function fi(e, t) {
        (ui[++si] = e.current), (e.current = t);
      }
      var di = {},
        pi = {
          current: di,
        },
        hi = {
          current: !1,
        },
        mi = di;

      function vi(e, t) {
        var n = e.type.contextTypes;
        if (!n) return di;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var i,
          o = {};
        for (i in n) o[i] = t[i];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          o
        );
      }

      function yi(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }

      function gi() {
        ci(hi), ci(pi);
      }

      function bi(e, t, n) {
        if (pi.current !== di) throw Error(a(168));
        fi(pi, t), fi(hi, n);
      }

      function wi(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
          return n;
        for (var o in (r = r.getChildContext()))
          if (!(o in e)) throw Error(a(108, me(t) || "Unknown", o));
        return i({}, n, {}, r);
      }

      function xi(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            di),
          (mi = pi.current),
          fi(pi, e),
          fi(hi, hi.current),
          !0
        );
      }

      function Ei(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(a(169));
        n
          ? ((e = wi(e, t, mi)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            ci(hi),
            ci(pi),
            fi(pi, e))
          : ci(hi),
          fi(hi, n);
      }
      var ki = o.unstable_runWithPriority,
        Ti = o.unstable_scheduleCallback,
        _i = o.unstable_cancelCallback,
        Si = o.unstable_requestPaint,
        Ci = o.unstable_now,
        Pi = o.unstable_getCurrentPriorityLevel,
        Oi = o.unstable_ImmediatePriority,
        Ri = o.unstable_UserBlockingPriority,
        Mi = o.unstable_NormalPriority,
        zi = o.unstable_LowPriority,
        Di = o.unstable_IdlePriority,
        Ni = {},
        Ii = o.unstable_shouldYield,
        Li = void 0 !== Si ? Si : function () {},
        Fi = null,
        Ai = null,
        ji = !1,
        Ui = Ci(),
        Bi =
          1e4 > Ui
            ? Ci
            : function () {
                return Ci() - Ui;
              };

      function Wi() {
        switch (Pi()) {
          case Oi:
            return 99;
          case Ri:
            return 98;
          case Mi:
            return 97;
          case zi:
            return 96;
          case Di:
            return 95;
          default:
            throw Error(a(332));
        }
      }

      function Hi(e) {
        switch (e) {
          case 99:
            return Oi;
          case 98:
            return Ri;
          case 97:
            return Mi;
          case 96:
            return zi;
          case 95:
            return Di;
          default:
            throw Error(a(332));
        }
      }

      function Vi(e, t) {
        return (e = Hi(e)), ki(e, t);
      }

      function Qi(e, t, n) {
        return (e = Hi(e)), Ti(e, t, n);
      }

      function qi(e) {
        return null === Fi ? ((Fi = [e]), (Ai = Ti(Oi, Ki))) : Fi.push(e), Ni;
      }

      function $i() {
        if (null !== Ai) {
          var e = Ai;
          (Ai = null), _i(e);
        }
        Ki();
      }

      function Ki() {
        if (!ji && null !== Fi) {
          ji = !0;
          var e = 0;
          try {
            var t = Fi;
            Vi(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Fi = null);
          } catch (t) {
            throw (null !== Fi && (Fi = Fi.slice(e + 1)), Ti(Oi, $i), t);
          } finally {
            ji = !1;
          }
        }
      }

      function Gi(e, t, n) {
        return (
          1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
        );
      }

      function Yi(e, t) {
        if (e && e.defaultProps)
          for (var n in ((t = i({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      var Xi = {
          current: null,
        },
        Ji = null,
        Zi = null,
        eo = null;

      function to() {
        eo = Zi = Ji = null;
      }

      function no(e) {
        var t = Xi.current;
        ci(Xi), (e.type._context._currentValue = t);
      }

      function ro(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if (e.childExpirationTime < t)
            (e.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t);
          else {
            if (!(null !== n && n.childExpirationTime < t)) break;
            n.childExpirationTime = t;
          }
          e = e.return;
        }
      }

      function io(e, t) {
        (Ji = e),
          (eo = Zi = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (e.expirationTime >= t && (za = !0), (e.firstContext = null));
      }

      function oo(e, t) {
        if (eo !== e && !1 !== t && 0 !== t)
          if (
            (("number" == typeof t && 1073741823 !== t) ||
              ((eo = e), (t = 1073741823)),
            (t = {
              context: e,
              observedBits: t,
              next: null,
            }),
            null === Zi)
          ) {
            if (null === Ji) throw Error(a(308));
            (Zi = t),
              (Ji.dependencies = {
                expirationTime: 0,
                firstContext: t,
                responders: null,
              });
          } else Zi = Zi.next = t;
        return e._currentValue;
      }
      var ao = !1;

      function lo(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          baseQueue: null,
          shared: {
            pending: null,
          },
          effects: null,
        };
      }

      function uo(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              baseQueue: e.baseQueue,
              shared: e.shared,
              effects: e.effects,
            });
      }

      function so(e, t) {
        return ((e = {
          expirationTime: e,
          suspenseConfig: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        }).next = e);
      }

      function co(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }

      function fo(e, t) {
        var n = e.alternate;
        null !== n && uo(n, e),
          null === (n = (e = e.updateQueue).baseQueue)
            ? ((e.baseQueue = t.next = t), (t.next = t))
            : ((t.next = n.next), (n.next = t));
      }

      function po(e, t, n, r) {
        var o = e.updateQueue;
        ao = !1;
        var a = o.baseQueue,
          l = o.shared.pending;
        if (null !== l) {
          if (null !== a) {
            var u = a.next;
            (a.next = l.next), (l.next = u);
          }
          (a = l),
            (o.shared.pending = null),
            null !== (u = e.alternate) &&
              null !== (u = u.updateQueue) &&
              (u.baseQueue = l);
        }
        if (null !== a) {
          u = a.next;
          var s = o.baseState,
            c = 0,
            f = null,
            d = null,
            p = null;
          if (null !== u)
            for (var h = u; ; ) {
              if ((l = h.expirationTime) < r) {
                var m = {
                  expirationTime: h.expirationTime,
                  suspenseConfig: h.suspenseConfig,
                  tag: h.tag,
                  payload: h.payload,
                  callback: h.callback,
                  next: null,
                };
                null === p ? ((d = p = m), (f = s)) : (p = p.next = m),
                  l > c && (c = l);
              } else {
                null !== p &&
                  (p = p.next =
                    {
                      expirationTime: 1073741823,
                      suspenseConfig: h.suspenseConfig,
                      tag: h.tag,
                      payload: h.payload,
                      callback: h.callback,
                      next: null,
                    }),
                  mu(l, h.suspenseConfig);
                e: {
                  var v = e,
                    y = h;
                  switch (((l = t), (m = n), y.tag)) {
                    case 1:
                      if ("function" == typeof (v = y.payload)) {
                        s = v.call(m, s, l);
                        break e;
                      }
                      s = v;
                      break e;
                    case 3:
                      v.effectTag = (-4097 & v.effectTag) | 64;
                    case 0:
                      if (
                        null ===
                          (l =
                            "function" == typeof (v = y.payload)
                              ? v.call(m, s, l)
                              : v) ||
                        void 0 === l
                      )
                        break e;
                      s = i({}, s, l);
                      break e;
                    case 2:
                      ao = !0;
                  }
                }
                null !== h.callback &&
                  ((e.effectTag |= 32),
                  null === (l = o.effects) ? (o.effects = [h]) : l.push(h));
              }
              if (null === (h = h.next) || h === u) {
                if (null === (l = o.shared.pending)) break;
                (h = a.next = l.next),
                  (l.next = u),
                  (o.baseQueue = a = l),
                  (o.shared.pending = null);
              }
            }
          null === p ? (f = s) : (p.next = d),
            (o.baseState = f),
            (o.baseQueue = p),
            vu(c),
            (e.expirationTime = c),
            (e.memoizedState = s);
        }
      }

      function ho(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              i = r.callback;
            if (null !== i) {
              if (
                ((r.callback = null), (r = i), (i = n), "function" != typeof r)
              )
                throw Error(a(191, r));
              r.call(i);
            }
          }
      }
      var mo = G.ReactCurrentBatchConfig,
        vo = new r.Component().refs;

      function yo(e, t, n, r) {
        (n =
          null === (n = n(r, (t = e.memoizedState))) || void 0 === n
            ? t
            : i({}, t, n)),
          (e.memoizedState = n),
          0 === e.expirationTime && (e.updateQueue.baseState = n);
      }
      var go = {
        isMounted: function (e) {
          return !!(e = e._reactInternalFiber) && Ze(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = ru(),
            i = mo.suspense;
          ((i = so((r = iu(r, e, i)), i)).payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            co(e, i),
            ou(e, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = ru(),
            i = mo.suspense;
          ((i = so((r = iu(r, e, i)), i)).tag = 1),
            (i.payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            co(e, i),
            ou(e, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternalFiber;
          var n = ru(),
            r = mo.suspense;
          ((r = so((n = iu(n, e, r)), r)).tag = 2),
            void 0 !== t && null !== t && (r.callback = t),
            co(e, r),
            ou(e, n);
        },
      };

      function bo(e, t, n, r, i, o, a) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, o, a)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !Br(n, r) ||
              !Br(i, o);
      }

      function wo(e, t, n) {
        var r = !1,
          i = di,
          o = t.contextType;
        return (
          "object" == typeof o && null !== o
            ? (o = oo(o))
            : ((i = yi(t) ? mi : pi.current),
              (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                ? vi(e, i)
                : di)),
          (t = new t(n, o)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = go),
          (e.stateNode = t),
          (t._reactInternalFiber = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          t
        );
      }

      function xo(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && go.enqueueReplaceState(t, t.state, null);
      }

      function Eo(e, t, n, r) {
        var i = e.stateNode;
        (i.props = n), (i.state = e.memoizedState), (i.refs = vo), lo(e);
        var o = t.contextType;
        "object" == typeof o && null !== o
          ? (i.context = oo(o))
          : ((o = yi(t) ? mi : pi.current), (i.context = vi(e, o))),
          po(e, n, i, r),
          (i.state = e.memoizedState),
          "function" == typeof (o = t.getDerivedStateFromProps) &&
            (yo(e, t, o, n), (i.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof i.getSnapshotBeforeUpdate ||
            ("function" != typeof i.UNSAFE_componentWillMount &&
              "function" != typeof i.componentWillMount) ||
            ((t = i.state),
            "function" == typeof i.componentWillMount && i.componentWillMount(),
            "function" == typeof i.UNSAFE_componentWillMount &&
              i.UNSAFE_componentWillMount(),
            t !== i.state && go.enqueueReplaceState(i, i.state, null),
            po(e, n, i, r),
            (i.state = e.memoizedState)),
          "function" == typeof i.componentDidMount && (e.effectTag |= 4);
      }
      var ko = Array.isArray;

      function To(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" != typeof e &&
          "object" != typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(a(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(a(147, e));
            var i = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === i
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === vo && (t = r.refs = {}),
                    null === e ? delete t[i] : (t[i] = e);
                })._stringRef = i),
                t);
          }
          if ("string" != typeof e) throw Error(a(284));
          if (!n._owner) throw Error(a(290, e));
        }
        return e;
      }

      function _o(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            a(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t,
              ""
            )
          );
      }

      function So(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.effectTag = 8);
          }
        }

        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }

        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }

        function i(e, t) {
          return ((e = Du(e, t)).index = 0), (e.sibling = null), e;
        }

        function o(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.effectTag = 2), n)
                  : r
                : ((t.effectTag = 2), n)
              : n
          );
        }

        function l(t) {
          return e && null === t.alternate && (t.effectTag = 2), t;
        }

        function u(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Lu(n, e.mode, r)).return = e), t)
            : (((t = i(t, n)).return = e), t);
        }

        function s(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = i(t, n.props)).ref = To(e, t, n)), (r.return = e), r)
            : (((r = Nu(n.type, n.key, n.props, null, e.mode, r)).ref = To(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }

        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Fu(n, e.mode, r)).return = e), t)
            : (((t = i(t, n.children || [])).return = e), t);
        }

        function f(e, t, n, r, o) {
          return null === t || 7 !== t.tag
            ? (((t = Iu(n, e.mode, r, o)).return = e), t)
            : (((t = i(t, n)).return = e), t);
        }

        function d(e, t, n) {
          if ("string" == typeof t || "number" == typeof t)
            return ((t = Lu("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case Z:
                return (
                  ((n = Nu(t.type, t.key, t.props, null, e.mode, n)).ref = To(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case ee:
                return ((t = Fu(t, e.mode, n)).return = e), t;
            }
            if (ko(t) || he(t))
              return ((t = Iu(t, e.mode, n, null)).return = e), t;
            _o(e, t);
          }
          return null;
        }

        function p(e, t, n, r) {
          var i = null !== t ? t.key : null;
          if ("string" == typeof n || "number" == typeof n)
            return null !== i ? null : u(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case Z:
                return n.key === i
                  ? n.type === te
                    ? f(e, t, n.props.children, r, i)
                    : s(e, t, n, r)
                  : null;
              case ee:
                return n.key === i ? c(e, t, n, r) : null;
            }
            if (ko(n) || he(n)) return null !== i ? null : f(e, t, n, r, null);
            _o(e, n);
          }
          return null;
        }

        function h(e, t, n, r, i) {
          if ("string" == typeof r || "number" == typeof r)
            return u(t, (e = e.get(n) || null), "" + r, i);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case Z:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === te
                    ? f(t, e, r.props.children, i, r.key)
                    : s(t, e, r, i)
                );
              case ee:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  i
                );
            }
            if (ko(r) || he(r)) return f(t, (e = e.get(n) || null), r, i, null);
            _o(t, r);
          }
          return null;
        }

        function m(i, a, l, u) {
          for (
            var s = null, c = null, f = a, m = (a = 0), v = null;
            null !== f && m < l.length;
            m++
          ) {
            f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
            var y = p(i, f, l[m], u);
            if (null === y) {
              null === f && (f = v);
              break;
            }
            e && f && null === y.alternate && t(i, f),
              (a = o(y, a, m)),
              null === c ? (s = y) : (c.sibling = y),
              (c = y),
              (f = v);
          }
          if (m === l.length) return n(i, f), s;
          if (null === f) {
            for (; m < l.length; m++)
              null !== (f = d(i, l[m], u)) &&
                ((a = o(f, a, m)),
                null === c ? (s = f) : (c.sibling = f),
                (c = f));
            return s;
          }
          for (f = r(i, f); m < l.length; m++)
            null !== (v = h(f, i, m, l[m], u)) &&
              (e &&
                null !== v.alternate &&
                f.delete(null === v.key ? m : v.key),
              (a = o(v, a, m)),
              null === c ? (s = v) : (c.sibling = v),
              (c = v));
          return (
            e &&
              f.forEach(function (e) {
                return t(i, e);
              }),
            s
          );
        }

        function v(i, l, u, s) {
          var c = he(u);
          if ("function" != typeof c) throw Error(a(150));
          if (null == (u = c.call(u))) throw Error(a(151));
          for (
            var f = (c = null), m = l, v = (l = 0), y = null, g = u.next();
            null !== m && !g.done;
            v++, g = u.next()
          ) {
            m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
            var b = p(i, m, g.value, s);
            if (null === b) {
              null === m && (m = y);
              break;
            }
            e && m && null === b.alternate && t(i, m),
              (l = o(b, l, v)),
              null === f ? (c = b) : (f.sibling = b),
              (f = b),
              (m = y);
          }
          if (g.done) return n(i, m), c;
          if (null === m) {
            for (; !g.done; v++, g = u.next())
              null !== (g = d(i, g.value, s)) &&
                ((l = o(g, l, v)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return c;
          }
          for (m = r(i, m); !g.done; v++, g = u.next())
            null !== (g = h(m, i, v, g.value, s)) &&
              (e &&
                null !== g.alternate &&
                m.delete(null === g.key ? v : g.key),
              (l = o(g, l, v)),
              null === f ? (c = g) : (f.sibling = g),
              (f = g));
          return (
            e &&
              m.forEach(function (e) {
                return t(i, e);
              }),
            c
          );
        }
        return function (e, r, o, u) {
          var s =
            "object" == typeof o &&
            null !== o &&
            o.type === te &&
            null === o.key;
          s && (o = o.props.children);
          var c = "object" == typeof o && null !== o;
          if (c)
            switch (o.$$typeof) {
              case Z:
                e: {
                  for (c = o.key, s = r; null !== s; ) {
                    if (s.key === c) {
                      switch (s.tag) {
                        case 7:
                          if (o.type === te) {
                            n(e, s.sibling),
                              ((r = i(s, o.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                          break;
                        default:
                          if (s.elementType === o.type) {
                            n(e, s.sibling),
                              ((r = i(s, o.props)).ref = To(e, s, o)),
                              (r.return = e),
                              (e = r);
                            break e;
                          }
                      }
                      n(e, s);
                      break;
                    }
                    t(e, s), (s = s.sibling);
                  }
                  o.type === te
                    ? (((r = Iu(o.props.children, e.mode, u, o.key)).return =
                        e),
                      (e = r))
                    : (((u = Nu(o.type, o.key, o.props, null, e.mode, u)).ref =
                        To(e, r, o)),
                      (u.return = e),
                      (e = u));
                }
                return l(e);
              case ee:
                e: {
                  for (s = o.key; null !== r; ) {
                    if (r.key === s) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === o.containerInfo &&
                        r.stateNode.implementation === o.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = i(r, o.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Fu(o, e.mode, u)).return = e), (e = r);
                }
                return l(e);
            }
          if ("string" == typeof o || "number" == typeof o)
            return (
              (o = "" + o),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = i(r, o)).return = e), (e = r))
                : (n(e, r), ((r = Lu(o, e.mode, u)).return = e), (e = r)),
              l(e)
            );
          if (ko(o)) return m(e, r, o, u);
          if (he(o)) return v(e, r, o, u);
          if ((c && _o(e, o), void 0 === o && !s))
            switch (e.tag) {
              case 1:
              case 0:
                throw (
                  ((e = e.type),
                  Error(a(152, e.displayName || e.name || "Component")))
                );
            }
          return n(e, r);
        };
      }
      var Co = So(!0),
        Po = So(!1),
        Oo = {},
        Ro = {
          current: Oo,
        },
        Mo = {
          current: Oo,
        },
        zo = {
          current: Oo,
        };

      function Do(e) {
        if (e === Oo) throw Error(a(174));
        return e;
      }

      function No(e, t) {
        switch ((fi(zo, t), fi(Mo, e), fi(Ro, Oo), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Le(null, "");
            break;
          default:
            t = Le(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        ci(Ro), fi(Ro, t);
      }

      function Io() {
        ci(Ro), ci(Mo), ci(zo);
      }

      function Lo(e) {
        Do(zo.current);
        var t = Do(Ro.current),
          n = Le(t, e.type);
        t !== n && (fi(Mo, e), fi(Ro, n));
      }

      function Fo(e) {
        Mo.current === e && (ci(Ro), ci(Mo));
      }
      var Ao = {
        current: 0,
      };

      function jo(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) || n.data === mn || n.data === vn)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (64 & t.effectTag)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }

      function Uo(e, t) {
        return {
          responder: e,
          props: t,
        };
      }
      var Bo = G.ReactCurrentDispatcher,
        Wo = G.ReactCurrentBatchConfig,
        Ho = 0,
        Vo = null,
        Qo = null,
        qo = null,
        $o = !1;

      function Ko() {
        throw Error(a(321));
      }

      function Go(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!jr(e[n], t[n])) return !1;
        return !0;
      }

      function Yo(e, t, n, r, i, o) {
        if (
          ((Ho = o),
          (Vo = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.expirationTime = 0),
          (Bo.current = null === e || null === e.memoizedState ? ba : wa),
          (e = n(r, i)),
          t.expirationTime === Ho)
        ) {
          o = 0;
          do {
            if (((t.expirationTime = 0), !(25 > o))) throw Error(a(301));
            (o += 1),
              (qo = Qo = null),
              (t.updateQueue = null),
              (Bo.current = xa),
              (e = n(r, i));
          } while (t.expirationTime === Ho);
        }
        if (
          ((Bo.current = ga),
          (t = null !== Qo && null !== Qo.next),
          (Ho = 0),
          (qo = Qo = Vo = null),
          ($o = !1),
          t)
        )
          throw Error(a(300));
        return e;
      }

      function Xo() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === qo ? (Vo.memoizedState = qo = e) : (qo = qo.next = e), qo
        );
      }

      function Jo() {
        if (null === Qo) {
          var e = Vo.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Qo.next;
        var t = null === qo ? Vo.memoizedState : qo.next;
        if (null !== t) (qo = t), (Qo = e);
        else {
          if (null === e) throw Error(a(310));
          (e = {
            memoizedState: (Qo = e).memoizedState,
            baseState: Qo.baseState,
            baseQueue: Qo.baseQueue,
            queue: Qo.queue,
            next: null,
          }),
            null === qo ? (Vo.memoizedState = qo = e) : (qo = qo.next = e);
        }
        return qo;
      }

      function Zo(e, t) {
        return "function" == typeof t ? t(e) : t;
      }

      function ea(e) {
        var t = Jo(),
          n = t.queue;
        if (null === n) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = Qo,
          i = r.baseQueue,
          o = n.pending;
        if (null !== o) {
          if (null !== i) {
            var l = i.next;
            (i.next = o.next), (o.next = l);
          }
          (r.baseQueue = i = o), (n.pending = null);
        }
        if (null !== i) {
          (i = i.next), (r = r.baseState);
          var u = (l = o = null),
            s = i;
          do {
            var c = s.expirationTime;
            if (c < Ho) {
              var f = {
                expirationTime: s.expirationTime,
                suspenseConfig: s.suspenseConfig,
                action: s.action,
                eagerReducer: s.eagerReducer,
                eagerState: s.eagerState,
                next: null,
              };
              null === u ? ((l = u = f), (o = r)) : (u = u.next = f),
                c > Vo.expirationTime && ((Vo.expirationTime = c), vu(c));
            } else
              null !== u &&
                (u = u.next =
                  {
                    expirationTime: 1073741823,
                    suspenseConfig: s.suspenseConfig,
                    action: s.action,
                    eagerReducer: s.eagerReducer,
                    eagerState: s.eagerState,
                    next: null,
                  }),
                mu(c, s.suspenseConfig),
                (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
            s = s.next;
          } while (null !== s && s !== i);
          null === u ? (o = r) : (u.next = l),
            jr(r, t.memoizedState) || (za = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }

      function ta(e) {
        var t = Jo(),
          n = t.queue;
        if (null === n) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          i = n.pending,
          o = t.memoizedState;
        if (null !== i) {
          n.pending = null;
          var l = (i = i.next);
          do {
            (o = e(o, l.action)), (l = l.next);
          } while (l !== i);
          jr(o, t.memoizedState) || (za = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o);
        }
        return [o, r];
      }

      function na(e) {
        var t = Xo();
        return (
          "function" == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue =
            {
              pending: null,
              dispatch: null,
              lastRenderedReducer: Zo,
              lastRenderedState: e,
            }).dispatch =
            ya.bind(null, Vo, e)),
          [t.memoizedState, e]
        );
      }

      function ra(e, t, n, r) {
        return (
          (e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null,
          }),
          null === (t = Vo.updateQueue)
            ? ((t = {
                lastEffect: null,
              }),
              (Vo.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }

      function ia() {
        return Jo().memoizedState;
      }

      function oa(e, t, n, r) {
        var i = Xo();
        (Vo.effectTag |= e),
          (i.memoizedState = ra(1 | t, n, void 0, void 0 === r ? null : r));
      }

      function aa(e, t, n, r) {
        var i = Jo();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== Qo) {
          var a = Qo.memoizedState;
          if (((o = a.destroy), null !== r && Go(r, a.deps)))
            return void ra(t, n, o, r);
        }
        (Vo.effectTag |= e), (i.memoizedState = ra(1 | t, n, o, r));
      }

      function la(e, t) {
        return oa(516, 4, e, t);
      }

      function ua(e, t) {
        return aa(516, 4, e, t);
      }

      function sa(e, t) {
        return aa(4, 2, e, t);
      }

      function ca(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null !== t && void 0 !== t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }

      function fa(e, t, n) {
        return (
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
          aa(4, 2, ca.bind(null, t, e), n)
        );
      }

      function da() {}

      function pa(e, t) {
        return (Xo().memoizedState = [e, void 0 === t ? null : t]), e;
      }

      function ha(e, t) {
        var n = Jo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Go(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }

      function ma(e, t) {
        var n = Jo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Go(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }

      function va(e, t, n) {
        var r = Wi();
        Vi(98 > r ? 98 : r, function () {
          e(!0);
        }),
          Vi(97 < r ? 97 : r, function () {
            var r = Wo.suspense;
            Wo.suspense = void 0 === t ? null : t;
            try {
              e(!1), n();
            } finally {
              Wo.suspense = r;
            }
          });
      }

      function ya(e, t, n) {
        var r = ru(),
          i = mo.suspense;
        i = {
          expirationTime: (r = iu(r, e, i)),
          suspenseConfig: i,
          action: n,
          eagerReducer: null,
          eagerState: null,
          next: null,
        };
        var o = t.pending;
        if (
          (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
          (t.pending = i),
          (o = e.alternate),
          e === Vo || (null !== o && o === Vo))
        )
          ($o = !0), (i.expirationTime = Ho), (Vo.expirationTime = Ho);
        else {
          if (
            0 === e.expirationTime &&
            (null === o || 0 === o.expirationTime) &&
            null !== (o = t.lastRenderedReducer)
          )
            try {
              var a = t.lastRenderedState,
                l = o(a, n);
              if (((i.eagerReducer = o), (i.eagerState = l), jr(l, a))) return;
            } catch (e) {}
          ou(e, r);
        }
      }
      var ga = {
          readContext: oo,
          useCallback: Ko,
          useContext: Ko,
          useEffect: Ko,
          useImperativeHandle: Ko,
          useLayoutEffect: Ko,
          useMemo: Ko,
          useReducer: Ko,
          useRef: Ko,
          useState: Ko,
          useDebugValue: Ko,
          useResponder: Ko,
          useDeferredValue: Ko,
          useTransition: Ko,
        },
        ba = {
          readContext: oo,
          useCallback: pa,
          useContext: oo,
          useEffect: la,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              oa(4, 2, ca.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return oa(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = Xo();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = Xo();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
                {
                  pending: null,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }).dispatch =
                ya.bind(null, Vo, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (
              (e = {
                current: e,
              }),
              (Xo().memoizedState = e)
            );
          },
          useState: na,
          useDebugValue: da,
          useResponder: Uo,
          useDeferredValue: function (e, t) {
            var n = na(e),
              r = n[0],
              i = n[1];
            return (
              la(
                function () {
                  var n = Wo.suspense;
                  Wo.suspense = void 0 === t ? null : t;
                  try {
                    i(e);
                  } finally {
                    Wo.suspense = n;
                  }
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = na(!1),
              n = t[0];
            return (t = t[1]), [pa(va.bind(null, t, e), [t, e]), n];
          },
        },
        wa = {
          readContext: oo,
          useCallback: ha,
          useContext: oo,
          useEffect: ua,
          useImperativeHandle: fa,
          useLayoutEffect: sa,
          useMemo: ma,
          useReducer: ea,
          useRef: ia,
          useState: function () {
            return ea(Zo);
          },
          useDebugValue: da,
          useResponder: Uo,
          useDeferredValue: function (e, t) {
            var n = ea(Zo),
              r = n[0],
              i = n[1];
            return (
              ua(
                function () {
                  var n = Wo.suspense;
                  Wo.suspense = void 0 === t ? null : t;
                  try {
                    i(e);
                  } finally {
                    Wo.suspense = n;
                  }
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = ea(Zo),
              n = t[0];
            return (t = t[1]), [ha(va.bind(null, t, e), [t, e]), n];
          },
        },
        xa = {
          readContext: oo,
          useCallback: ha,
          useContext: oo,
          useEffect: ua,
          useImperativeHandle: fa,
          useLayoutEffect: sa,
          useMemo: ma,
          useReducer: ta,
          useRef: ia,
          useState: function () {
            return ta(Zo);
          },
          useDebugValue: da,
          useResponder: Uo,
          useDeferredValue: function (e, t) {
            var n = ta(Zo),
              r = n[0],
              i = n[1];
            return (
              ua(
                function () {
                  var n = Wo.suspense;
                  Wo.suspense = void 0 === t ? null : t;
                  try {
                    i(e);
                  } finally {
                    Wo.suspense = n;
                  }
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = ta(Zo),
              n = t[0];
            return (t = t[1]), [ha(va.bind(null, t, e), [t, e]), n];
          },
        },
        Ea = null,
        ka = null,
        Ta = !1;

      function _a(e, t) {
        var n = Mu(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.effectTag = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }

      function Sa(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 13:
          default:
            return !1;
        }
      }

      function Ca(e) {
        if (Ta) {
          var t = ka;
          if (t) {
            var n = t;
            if (!Sa(e, t)) {
              if (!(t = kn(n.nextSibling)) || !Sa(e, t))
                return (
                  (e.effectTag = (-1025 & e.effectTag) | 2),
                  (Ta = !1),
                  void (Ea = e)
                );
              _a(Ea, n);
            }
            (Ea = e), (ka = kn(t.firstChild));
          } else (e.effectTag = (-1025 & e.effectTag) | 2), (Ta = !1), (Ea = e);
        }
      }

      function Pa(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        Ea = e;
      }

      function Oa(e) {
        if (e !== Ea) return !1;
        if (!Ta) return Pa(e), (Ta = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !wn(t, e.memoizedProps))
        )
          for (t = ka; t; ) _a(e, t), (t = kn(t.nextSibling));
        if ((Pa(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(a(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if (n === hn) {
                  if (0 === t) {
                    ka = kn(e.nextSibling);
                    break e;
                  }
                  t--;
                } else (n !== pn && n !== vn && n !== mn) || t++;
              }
              e = e.nextSibling;
            }
            ka = null;
          }
        } else ka = Ea ? kn(e.stateNode.nextSibling) : null;
        return !0;
      }

      function Ra() {
        (ka = Ea = null), (Ta = !1);
      }
      var Ma = G.ReactCurrentOwner,
        za = !1;

      function Da(e, t, n, r) {
        t.child = null === e ? Po(t, null, n, r) : Co(t, e.child, n, r);
      }

      function Na(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return (
          io(t, i),
          (r = Yo(e, t, n, r, o, i)),
          null === e || za
            ? ((t.effectTag |= 1), Da(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= i && (e.expirationTime = 0),
              Xa(e, t, i))
        );
      }

      function Ia(e, t, n, r, i, o) {
        if (null === e) {
          var a = n.type;
          return "function" != typeof a ||
            zu(a) ||
            void 0 !== a.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Nu(n.type, null, r, null, t.mode, o)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = a), La(e, t, a, r, i, o));
        }
        return (
          (a = e.child),
          i < o &&
          ((i = a.memoizedProps),
          (n = null !== (n = n.compare) ? n : Br)(i, r) && e.ref === t.ref)
            ? Xa(e, t, o)
            : ((t.effectTag |= 1),
              ((e = Du(a, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }

      function La(e, t, n, r, i, o) {
        return null !== e &&
          Br(e.memoizedProps, r) &&
          e.ref === t.ref &&
          ((za = !1), i < o)
          ? ((t.expirationTime = e.expirationTime), Xa(e, t, o))
          : Aa(e, t, n, r, o);
      }

      function Fa(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.effectTag |= 128);
      }

      function Aa(e, t, n, r, i) {
        var o = yi(n) ? mi : pi.current;
        return (
          (o = vi(t, o)),
          io(t, i),
          (n = Yo(e, t, n, r, o, i)),
          null === e || za
            ? ((t.effectTag |= 1), Da(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= i && (e.expirationTime = 0),
              Xa(e, t, i))
        );
      }

      function ja(e, t, n, r, i) {
        if (yi(n)) {
          var o = !0;
          xi(t);
        } else o = !1;
        if ((io(t, i), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            wo(t, n, r),
            Eo(t, n, r, i),
            (r = !0);
        else if (null === e) {
          var a = t.stateNode,
            l = t.memoizedProps;
          a.props = l;
          var u = a.context,
            s = n.contextType;
          "object" == typeof s && null !== s
            ? (s = oo(s))
            : (s = vi(t, (s = yi(n) ? mi : pi.current)));
          var c = n.getDerivedStateFromProps,
            f =
              "function" == typeof c ||
              "function" == typeof a.getSnapshotBeforeUpdate;
          f ||
            ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
              "function" != typeof a.componentWillReceiveProps) ||
            ((l !== r || u !== s) && xo(t, a, r, s)),
            (ao = !1);
          var d = t.memoizedState;
          (a.state = d),
            po(t, r, a, i),
            (u = t.memoizedState),
            l !== r || d !== u || hi.current || ao
              ? ("function" == typeof c &&
                  (yo(t, n, c, r), (u = t.memoizedState)),
                (l = ao || bo(t, n, l, r, d, u, s))
                  ? (f ||
                      ("function" != typeof a.UNSAFE_componentWillMount &&
                        "function" != typeof a.componentWillMount) ||
                      ("function" == typeof a.componentWillMount &&
                        a.componentWillMount(),
                      "function" == typeof a.UNSAFE_componentWillMount &&
                        a.UNSAFE_componentWillMount()),
                    "function" == typeof a.componentDidMount &&
                      (t.effectTag |= 4))
                  : ("function" == typeof a.componentDidMount &&
                      (t.effectTag |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (a.props = r),
                (a.state = u),
                (a.context = s),
                (r = l))
              : ("function" == typeof a.componentDidMount && (t.effectTag |= 4),
                (r = !1));
        } else
          (a = t.stateNode),
            uo(e, t),
            (l = t.memoizedProps),
            (a.props = t.type === t.elementType ? l : Yi(t.type, l)),
            (u = a.context),
            "object" == typeof (s = n.contextType) && null !== s
              ? (s = oo(s))
              : (s = vi(t, (s = yi(n) ? mi : pi.current))),
            (f =
              "function" == typeof (c = n.getDerivedStateFromProps) ||
              "function" == typeof a.getSnapshotBeforeUpdate) ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                "function" != typeof a.componentWillReceiveProps) ||
              ((l !== r || u !== s) && xo(t, a, r, s)),
            (ao = !1),
            (u = t.memoizedState),
            (a.state = u),
            po(t, r, a, i),
            (d = t.memoizedState),
            l !== r || u !== d || hi.current || ao
              ? ("function" == typeof c &&
                  (yo(t, n, c, r), (d = t.memoizedState)),
                (c = ao || bo(t, n, l, r, u, d, s))
                  ? (f ||
                      ("function" != typeof a.UNSAFE_componentWillUpdate &&
                        "function" != typeof a.componentWillUpdate) ||
                      ("function" == typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, d, s),
                      "function" == typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, d, s)),
                    "function" == typeof a.componentDidUpdate &&
                      (t.effectTag |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate &&
                      (t.effectTag |= 256))
                  : ("function" != typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && u === e.memoizedState) ||
                      (t.effectTag |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && u === e.memoizedState) ||
                      (t.effectTag |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = d)),
                (a.props = r),
                (a.state = d),
                (a.context = s),
                (r = c))
              : ("function" != typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && u === e.memoizedState) ||
                  (t.effectTag |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && u === e.memoizedState) ||
                  (t.effectTag |= 256),
                (r = !1));
        return Ua(e, t, n, r, o, i);
      }

      function Ua(e, t, n, r, i, o) {
        Fa(e, t);
        var a = 0 != (64 & t.effectTag);
        if (!r && !a) return i && Ei(t, n, !1), Xa(e, t, o);
        (r = t.stateNode), (Ma.current = t);
        var l =
          a && "function" != typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.effectTag |= 1),
          null !== e && a
            ? ((t.child = Co(t, e.child, null, o)),
              (t.child = Co(t, null, l, o)))
            : Da(e, t, l, o),
          (t.memoizedState = r.state),
          i && Ei(t, n, !0),
          t.child
        );
      }

      function Ba(e) {
        var t = e.stateNode;
        t.pendingContext
          ? bi(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && bi(0, t.context, !1),
          No(e, t.containerInfo);
      }
      var Wa,
        Ha,
        Va,
        Qa,
        qa = {
          dehydrated: null,
          retryTime: 0,
        };

      function $a(e, t, n) {
        var r,
          i = t.mode,
          o = t.pendingProps,
          a = Ao.current,
          l = !1;
        if (
          ((r = 0 != (64 & t.effectTag)) ||
            (r = 0 != (2 & a) && (null === e || null !== e.memoizedState)),
          r
            ? ((l = !0), (t.effectTag &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === o.fallback ||
              !0 === o.unstable_avoidThisFallback ||
              (a |= 1),
          fi(Ao, 1 & a),
          null === e)
        ) {
          if ((void 0 !== o.fallback && Ca(t), l)) {
            if (
              ((l = o.fallback),
              ((o = Iu(null, i, 0, null)).return = t),
              0 == (2 & t.mode))
            )
              for (
                e = null !== t.memoizedState ? t.child.child : t.child,
                  o.child = e;
                null !== e;

              )
                (e.return = o), (e = e.sibling);
            return (
              ((n = Iu(l, i, n, null)).return = t),
              (o.sibling = n),
              (t.memoizedState = qa),
              (t.child = o),
              n
            );
          }
          return (
            (i = o.children),
            (t.memoizedState = null),
            (t.child = Po(t, null, i, n))
          );
        }
        if (null !== e.memoizedState) {
          if (((i = (e = e.child).sibling), l)) {
            if (
              ((o = o.fallback),
              ((n = Du(e, e.pendingProps)).return = t),
              0 == (2 & t.mode) &&
                (l = null !== t.memoizedState ? t.child.child : t.child) !==
                  e.child)
            )
              for (n.child = l; null !== l; ) (l.return = n), (l = l.sibling);
            return (
              ((i = Du(i, o)).return = t),
              (n.sibling = i),
              (n.childExpirationTime = 0),
              (t.memoizedState = qa),
              (t.child = n),
              i
            );
          }
          return (
            (n = Co(t, e.child, o.children, n)),
            (t.memoizedState = null),
            (t.child = n)
          );
        }
        if (((e = e.child), l)) {
          if (
            ((l = o.fallback),
            ((o = Iu(null, i, 0, null)).return = t),
            (o.child = e),
            null !== e && (e.return = o),
            0 == (2 & t.mode))
          )
            for (
              e = null !== t.memoizedState ? t.child.child : t.child,
                o.child = e;
              null !== e;

            )
              (e.return = o), (e = e.sibling);
          return (
            ((n = Iu(l, i, n, null)).return = t),
            (o.sibling = n),
            (n.effectTag |= 2),
            (o.childExpirationTime = 0),
            (t.memoizedState = qa),
            (t.child = o),
            n
          );
        }
        return (t.memoizedState = null), (t.child = Co(t, e, o.children, n));
      }

      function Ka(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t),
          ro(e.return, t);
      }

      function Ga(e, t, n, r, i, o) {
        var a = e.memoizedState;
        null === a
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailExpiration: 0,
              tailMode: i,
              lastEffect: o,
            })
          : ((a.isBackwards = t),
            (a.rendering = null),
            (a.renderingStartTime = 0),
            (a.last = r),
            (a.tail = n),
            (a.tailExpiration = 0),
            (a.tailMode = i),
            (a.lastEffect = o));
      }

      function Ya(e, t, n) {
        var r = t.pendingProps,
          i = r.revealOrder,
          o = r.tail;
        if ((Da(e, t, r.children, n), 0 != (2 & (r = Ao.current))))
          (r = (1 & r) | 2), (t.effectTag |= 64);
        else {
          if (null !== e && 0 != (64 & e.effectTag))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Ka(e, n);
              else if (19 === e.tag) Ka(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((fi(Ao, r), 0 == (2 & t.mode))) t.memoizedState = null;
        else
          switch (i) {
            case "forwards":
              for (n = t.child, i = null; null !== n; )
                null !== (e = n.alternate) && null === jo(e) && (i = n),
                  (n = n.sibling);
              null === (n = i)
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
                Ga(t, !1, i, n, o, t.lastEffect);
              break;
            case "backwards":
              for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === jo(e)) {
                  t.child = i;
                  break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
              }
              Ga(t, !0, n, null, o, t.lastEffect);
              break;
            case "together":
              Ga(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }

      function Xa(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if ((0 !== r && vu(r), t.childExpirationTime < n)) return null;
        if (null !== e && t.child !== e.child) throw Error(a(153));
        if (null !== t.child) {
          for (
            n = Du((e = t.child), e.pendingProps), t.child = n, n.return = t;
            null !== e.sibling;

          )
            (e = e.sibling),
              ((n = n.sibling = Du(e, e.pendingProps)).return = t);
          n.sibling = null;
        }
        return t.child;
      }

      function Ja(e, t) {
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
      }

      function Za(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return yi(t.type) && gi(), null;
          case 3:
            return (
              Io(),
              ci(hi),
              ci(pi),
              (n = t.stateNode).pendingContext &&
                ((n.context = n.pendingContext), (n.pendingContext = null)),
              (null !== e && null !== e.child) || !Oa(t) || (t.effectTag |= 4),
              Ha(t),
              null
            );
          case 5:
            Fo(t), (n = Do(zo.current));
            var o = t.type;
            if (null !== e && null != t.stateNode)
              Va(e, t, o, r, n), e.ref !== t.ref && (t.effectTag |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(a(166));
                return null;
              }
              if (((e = Do(Ro.current)), Oa(t))) {
                (r = t.stateNode), (o = t.type);
                var l = t.memoizedProps;
                switch (((r[Sn] = t), (r[Cn] = l), o)) {
                  case "iframe":
                  case "object":
                  case "embed":
                    $t("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < Ye.length; e++) $t(Ye[e], r);
                    break;
                  case "source":
                    $t("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    $t("error", r), $t("load", r);
                    break;
                  case "form":
                    $t("reset", r), $t("submit", r);
                    break;
                  case "details":
                    $t("toggle", r);
                    break;
                  case "input":
                    Ee(r, l), $t("invalid", r), an(n, "onChange");
                    break;
                  case "select":
                    (r._wrapperState = {
                      wasMultiple: !!l.multiple,
                    }),
                      $t("invalid", r),
                      an(n, "onChange");
                    break;
                  case "textarea":
                    Re(r, l), $t("invalid", r), an(n, "onChange");
                }
                for (var u in (nn(o, l), (e = null), l))
                  if (l.hasOwnProperty(u)) {
                    var s = l[u];
                    "children" === u
                      ? "string" == typeof s
                        ? r.textContent !== s && (e = ["children", s])
                        : "number" == typeof s &&
                          r.textContent !== "" + s &&
                          (e = ["children", "" + s])
                      : k.hasOwnProperty(u) && null != s && an(n, u);
                  }
                switch (o) {
                  case "input":
                    be(r), _e(r, l, !0);
                    break;
                  case "textarea":
                    be(r), ze(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof l.onClick && (r.onclick = ln);
                }
                (n = e), (t.updateQueue = n), null !== n && (t.effectTag |= 4);
              } else {
                switch (
                  ((u = 9 === n.nodeType ? n : n.ownerDocument),
                  e === on && (e = Ie(o)),
                  e === on
                    ? "script" === o
                      ? (((e = u.createElement("div")).innerHTML =
                          "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" == typeof r.is
                      ? (e = u.createElement(o, {
                          is: r.is,
                        }))
                      : ((e = u.createElement(o)),
                        "select" === o &&
                          ((u = e),
                          r.multiple
                            ? (u.multiple = !0)
                            : r.size && (u.size = r.size)))
                    : (e = u.createElementNS(e, o)),
                  (e[Sn] = t),
                  (e[Cn] = r),
                  Wa(e, t, !1, !1),
                  (t.stateNode = e),
                  (u = rn(o, r)),
                  o)
                ) {
                  case "iframe":
                  case "object":
                  case "embed":
                    $t("load", e), (s = r);
                    break;
                  case "video":
                  case "audio":
                    for (s = 0; s < Ye.length; s++) $t(Ye[s], e);
                    s = r;
                    break;
                  case "source":
                    $t("error", e), (s = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    $t("error", e), $t("load", e), (s = r);
                    break;
                  case "form":
                    $t("reset", e), $t("submit", e), (s = r);
                    break;
                  case "details":
                    $t("toggle", e), (s = r);
                    break;
                  case "input":
                    Ee(e, r),
                      (s = xe(e, r)),
                      $t("invalid", e),
                      an(n, "onChange");
                    break;
                  case "option":
                    s = Ce(e, r);
                    break;
                  case "select":
                    (e._wrapperState = {
                      wasMultiple: !!r.multiple,
                    }),
                      (s = i({}, r, {
                        value: void 0,
                      })),
                      $t("invalid", e),
                      an(n, "onChange");
                    break;
                  case "textarea":
                    Re(e, r),
                      (s = Oe(e, r)),
                      $t("invalid", e),
                      an(n, "onChange");
                    break;
                  default:
                    s = r;
                }
                nn(o, s);
                var c = s;
                for (l in c)
                  if (c.hasOwnProperty(l)) {
                    var f = c[l];
                    "style" === l
                      ? en(e, f)
                      : "dangerouslySetInnerHTML" === l
                      ? null != (f = f ? f.__html : void 0) && je(e, f)
                      : "children" === l
                      ? "string" == typeof f
                        ? ("textarea" !== o || "" !== f) && Ue(e, f)
                        : "number" == typeof f && Ue(e, "" + f)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        "autoFocus" !== l &&
                        (k.hasOwnProperty(l)
                          ? null != f && an(n, l)
                          : null != f && Y(e, l, f, u));
                  }
                switch (o) {
                  case "input":
                    be(e), _e(e, r, !1);
                    break;
                  case "textarea":
                    be(e), ze(e);
                    break;
                  case "option":
                    null != r.value &&
                      e.setAttribute("value", "" + ye(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (n = r.value)
                        ? Pe(e, !!r.multiple, n, !1)
                        : null != r.defaultValue &&
                          Pe(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof s.onClick && (e.onclick = ln);
                }
                bn(o, r) && (t.effectTag |= 4);
              }
              null !== t.ref && (t.effectTag |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Qa(e, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode)
                throw Error(a(166));
              (n = Do(zo.current)),
                Do(Ro.current),
                Oa(t)
                  ? ((n = t.stateNode),
                    (r = t.memoizedProps),
                    (n[Sn] = t),
                    n.nodeValue !== r && (t.effectTag |= 4))
                  : (((n = (
                      9 === n.nodeType ? n : n.ownerDocument
                    ).createTextNode(r))[Sn] = t),
                    (t.stateNode = n));
            }
            return null;
          case 13:
            return (
              ci(Ao),
              (r = t.memoizedState),
              0 != (64 & t.effectTag)
                ? ((t.expirationTime = n), t)
                : ((n = null !== r),
                  (r = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && Oa(t)
                    : ((r = null !== (o = e.memoizedState)),
                      n ||
                        null === o ||
                        (null !== (o = e.child.sibling) &&
                          (null !== (l = t.firstEffect)
                            ? ((t.firstEffect = o), (o.nextEffect = l))
                            : ((t.firstEffect = t.lastEffect = o),
                              (o.nextEffect = null)),
                          (o.effectTag = 8)))),
                  n &&
                    !r &&
                    0 != (2 & t.mode) &&
                    ((null === e &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & Ao.current)
                      ? Fl === Cl && (Fl = Rl)
                      : ((Fl !== Cl && Fl !== Rl) || (Fl = Ml),
                        0 !== Wl && null !== Nl && (ju(Nl, Ll), Uu(Nl, Wl)))),
                  (n || r) && (t.effectTag |= 4),
                  null)
            );
          case 4:
            return Io(), Ha(t), null;
          case 10:
            return no(t), null;
          case 17:
            return yi(t.type) && gi(), null;
          case 19:
            if ((ci(Ao), null === (r = t.memoizedState))) return null;
            if (((o = 0 != (64 & t.effectTag)), null === (l = r.rendering))) {
              if (o) Ja(r, !1);
              else if (Fl !== Cl || (null !== e && 0 != (64 & e.effectTag)))
                for (l = t.child; null !== l; ) {
                  if (null !== (e = jo(l))) {
                    for (
                      t.effectTag |= 64,
                        Ja(r, !1),
                        null !== (o = e.updateQueue) &&
                          ((t.updateQueue = o), (t.effectTag |= 4)),
                        null === r.lastEffect && (t.firstEffect = null),
                        t.lastEffect = r.lastEffect,
                        r = t.child;
                      null !== r;

                    )
                      (l = n),
                        ((o = r).effectTag &= 2),
                        (o.nextEffect = null),
                        (o.firstEffect = null),
                        (o.lastEffect = null),
                        null === (e = o.alternate)
                          ? ((o.childExpirationTime = 0),
                            (o.expirationTime = l),
                            (o.child = null),
                            (o.memoizedProps = null),
                            (o.memoizedState = null),
                            (o.updateQueue = null),
                            (o.dependencies = null))
                          : ((o.childExpirationTime = e.childExpirationTime),
                            (o.expirationTime = e.expirationTime),
                            (o.child = e.child),
                            (o.memoizedProps = e.memoizedProps),
                            (o.memoizedState = e.memoizedState),
                            (o.updateQueue = e.updateQueue),
                            (l = e.dependencies),
                            (o.dependencies =
                              null === l
                                ? null
                                : {
                                    expirationTime: l.expirationTime,
                                    firstContext: l.firstContext,
                                    responders: l.responders,
                                  })),
                        (r = r.sibling);
                    return fi(Ao, (1 & Ao.current) | 2), t.child;
                  }
                  l = l.sibling;
                }
            } else {
              if (!o)
                if (null !== (e = jo(l))) {
                  if (
                    ((t.effectTag |= 64),
                    (o = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.effectTag |= 4)),
                    Ja(r, !0),
                    null === r.tail && "hidden" === r.tailMode && !l.alternate)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                        (t.nextEffect = null),
                      null
                    );
                } else
                  2 * Bi() - r.renderingStartTime > r.tailExpiration &&
                    1 < n &&
                    ((t.effectTag |= 64),
                    (o = !0),
                    Ja(r, !1),
                    (t.expirationTime = t.childExpirationTime = n - 1));
              r.isBackwards
                ? ((l.sibling = t.child), (t.child = l))
                : (null !== (n = r.last) ? (n.sibling = l) : (t.child = l),
                  (r.last = l));
            }
            return null !== r.tail
              ? (0 === r.tailExpiration && (r.tailExpiration = Bi() + 500),
                (n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = Bi()),
                (n.sibling = null),
                (t = Ao.current),
                fi(Ao, o ? (1 & t) | 2 : 1 & t),
                n)
              : null;
        }
        throw Error(a(156, t.tag));
      }

      function el(e) {
        switch (e.tag) {
          case 1:
            yi(e.type) && gi();
            var t = e.effectTag;
            return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Io(), ci(hi), ci(pi), 0 != (64 & (t = e.effectTag))))
              throw Error(a(285));
            return (e.effectTag = (-4097 & t) | 64), e;
          case 5:
            return Fo(e), null;
          case 13:
            return (
              ci(Ao),
              4096 & (t = e.effectTag)
                ? ((e.effectTag = (-4097 & t) | 64), e)
                : null
            );
          case 19:
            return ci(Ao), null;
          case 4:
            return Io(), null;
          case 10:
            return no(e), null;
          default:
            return null;
        }
      }

      function tl(e, t) {
        return {
          value: e,
          source: t,
          stack: ve(t),
        };
      }
      (Wa = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Ha = function () {}),
        (Va = function (e, t, n, r, o) {
          var a = e.memoizedProps;
          if (a !== r) {
            var l,
              u,
              s = t.stateNode;
            switch ((Do(Ro.current), (e = null), n)) {
              case "input":
                (a = xe(s, a)), (r = xe(s, r)), (e = []);
                break;
              case "option":
                (a = Ce(s, a)), (r = Ce(s, r)), (e = []);
                break;
              case "select":
                (a = i({}, a, {
                  value: void 0,
                })),
                  (r = i({}, r, {
                    value: void 0,
                  })),
                  (e = []);
                break;
              case "textarea":
                (a = Oe(s, a)), (r = Oe(s, r)), (e = []);
                break;
              default:
                "function" != typeof a.onClick &&
                  "function" == typeof r.onClick &&
                  (s.onclick = ln);
            }
            for (l in (nn(n, r), (n = null), a))
              if (!r.hasOwnProperty(l) && a.hasOwnProperty(l) && null != a[l])
                if ("style" === l)
                  for (u in (s = a[l]))
                    s.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
                else
                  "dangerouslySetInnerHTML" !== l &&
                    "children" !== l &&
                    "suppressContentEditableWarning" !== l &&
                    "suppressHydrationWarning" !== l &&
                    "autoFocus" !== l &&
                    (k.hasOwnProperty(l)
                      ? e || (e = [])
                      : (e = e || []).push(l, null));
            for (l in r) {
              var c = r[l];
              if (
                ((s = null != a ? a[l] : void 0),
                r.hasOwnProperty(l) && c !== s && (null != c || null != s))
              )
                if ("style" === l)
                  if (s) {
                    for (u in s)
                      !s.hasOwnProperty(u) ||
                        (c && c.hasOwnProperty(u)) ||
                        (n || (n = {}), (n[u] = ""));
                    for (u in c)
                      c.hasOwnProperty(u) &&
                        s[u] !== c[u] &&
                        (n || (n = {}), (n[u] = c[u]));
                  } else n || (e || (e = []), e.push(l, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === l
                    ? ((c = c ? c.__html : void 0),
                      (s = s ? s.__html : void 0),
                      null != c && s !== c && (e = e || []).push(l, c))
                    : "children" === l
                    ? s === c ||
                      ("string" != typeof c && "number" != typeof c) ||
                      (e = e || []).push(l, "" + c)
                    : "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      (k.hasOwnProperty(l)
                        ? (null != c && an(o, l), e || s === c || (e = []))
                        : (e = e || []).push(l, c));
            }
            n && (e = e || []).push("style", n),
              (o = e),
              (t.updateQueue = o) && (t.effectTag |= 4);
          }
        }),
        (Qa = function (e, t, n, r) {
          n !== r && (t.effectTag |= 4);
        });
      var nl = "function" == typeof WeakSet ? WeakSet : Set;

      function rl(e, t) {
        var n = t.source,
          r = t.stack;
        null === r && null !== n && (r = ve(n)),
          null !== n && me(n.type),
          (t = t.value),
          null !== e && 1 === e.tag && me(e.type);
        try {
          console.error(t);
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }

      function il(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" == typeof t)
            try {
              t(null);
            } catch (t) {
              Cu(e, t);
            }
          else t.current = null;
      }

      function ol(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & t.effectTag && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : Yi(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(a(163));
      }

      function al(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = (t = t.next);
          do {
            if ((n.tag & e) === e) {
              var r = n.destroy;
              (n.destroy = void 0), void 0 !== r && r();
            }
            n = n.next;
          } while (n !== t);
        }
      }

      function ll(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = (t = t.next);
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r();
            }
            n = n.next;
          } while (n !== t);
        }
      }

      function ul(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return void ll(3, n);
          case 1:
            if (((e = n.stateNode), 4 & n.effectTag))
              if (null === t) e.componentDidMount();
              else {
                var r =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : Yi(n.type, t.memoizedProps);
                e.componentDidUpdate(
                  r,
                  t.memoizedState,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              }
            return void (null !== (t = n.updateQueue) && ho(n, t, e));
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                    e = n.child.stateNode;
                    break;
                  case 1:
                    e = n.child.stateNode;
                }
              ho(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.effectTag &&
                bn(n.type, n.memoizedProps) &&
                e.focus()
              )
            );
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n &&
                ((n = n.memoizedState),
                null !== n && ((n = n.dehydrated), null !== n && Lt(n))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
            return;
        }
        throw Error(a(163));
      }

      function sl(e, t, n) {
        switch (("function" == typeof Ru && Ru(t), t.tag)) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var r = e.next;
              Vi(97 < n ? 97 : n, function () {
                var e = r;
                do {
                  var n = e.destroy;
                  if (void 0 !== n) {
                    var i = t;
                    try {
                      n();
                    } catch (e) {
                      Cu(i, e);
                    }
                  }
                  e = e.next;
                } while (e !== r);
              });
            }
            break;
          case 1:
            il(t),
              "function" == typeof (n = t.stateNode).componentWillUnmount &&
                (function (e, t) {
                  try {
                    (t.props = e.memoizedProps),
                      (t.state = e.memoizedState),
                      t.componentWillUnmount();
                  } catch (t) {
                    Cu(e, t);
                  }
                })(t, n);
            break;
          case 5:
            il(t);
            break;
          case 4:
            pl(e, t, n);
        }
      }

      function cl(e) {
        var t = e.alternate;
        (e.return = null),
          (e.child = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.alternate = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.pendingProps = null),
          (e.memoizedProps = null),
          (e.stateNode = null),
          null !== t && cl(t);
      }

      function fl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }

      function dl(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (fl(t)) {
              var n = t;
              break e;
            }
            t = t.return;
          }
          throw Error(a(160));
        }
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(a(161));
        }
        16 & n.effectTag && (Ue(t, ""), (n.effectTag &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || fl(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.effectTag) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.effectTag)) {
            n = n.stateNode;
            break e;
          }
        }
        r
          ? (function e(t, n, r) {
              var i = t.tag,
                o = 5 === i || 6 === i;
              if (o)
                (t = o ? t.stateNode : t.stateNode.instance),
                  n
                    ? 8 === r.nodeType
                      ? r.parentNode.insertBefore(t, n)
                      : r.insertBefore(t, n)
                    : (8 === r.nodeType
                        ? ((n = r.parentNode), n.insertBefore(t, r))
                        : ((n = r), n.appendChild(t)),
                      (r = r._reactRootContainer),
                      (null !== r && void 0 !== r) ||
                        null !== n.onclick ||
                        (n.onclick = ln));
              else if (4 !== i && ((t = t.child), null !== t))
                for (e(t, n, r), t = t.sibling; null !== t; )
                  e(t, n, r), (t = t.sibling);
            })(e, n, t)
          : (function e(t, n, r) {
              var i = t.tag,
                o = 5 === i || 6 === i;
              if (o)
                (t = o ? t.stateNode : t.stateNode.instance),
                  n ? r.insertBefore(t, n) : r.appendChild(t);
              else if (4 !== i && ((t = t.child), null !== t))
                for (e(t, n, r), t = t.sibling; null !== t; )
                  e(t, n, r), (t = t.sibling);
            })(e, n, t);
      }

      function pl(e, t, n) {
        for (var r, i, o = t, l = !1; ; ) {
          if (!l) {
            l = o.return;
            e: for (;;) {
              if (null === l) throw Error(a(160));
              switch (((r = l.stateNode), l.tag)) {
                case 5:
                  i = !1;
                  break e;
                case 3:
                case 4:
                  (r = r.containerInfo), (i = !0);
                  break e;
              }
              l = l.return;
            }
            l = !0;
          }
          if (5 === o.tag || 6 === o.tag) {
            e: for (var u = e, s = o, c = n, f = s; ; )
              if ((sl(u, f, c), null !== f.child && 4 !== f.tag))
                (f.child.return = f), (f = f.child);
              else {
                if (f === s) break e;
                for (; null === f.sibling; ) {
                  if (null === f.return || f.return === s) break e;
                  f = f.return;
                }
                (f.sibling.return = f.return), (f = f.sibling);
              }
            i
              ? ((u = r),
                (s = o.stateNode),
                8 === u.nodeType
                  ? u.parentNode.removeChild(s)
                  : u.removeChild(s))
              : r.removeChild(o.stateNode);
          } else if (4 === o.tag) {
            if (null !== o.child) {
              (r = o.stateNode.containerInfo),
                (i = !0),
                (o.child.return = o),
                (o = o.child);
              continue;
            }
          } else if ((sl(e, o, n), null !== o.child)) {
            (o.child.return = o), (o = o.child);
            continue;
          }
          if (o === t) break;
          for (; null === o.sibling; ) {
            if (null === o.return || o.return === t) return;
            4 === (o = o.return).tag && (l = !1);
          }
          (o.sibling.return = o.return), (o = o.sibling);
        }
      }

      function hl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            return void al(3, t);
          case 1:
            return;
          case 5:
            var n = t.stateNode;
            if (null != n) {
              var r = t.memoizedProps,
                i = null !== e ? e.memoizedProps : r;
              e = t.type;
              var o = t.updateQueue;
              if (((t.updateQueue = null), null !== o)) {
                for (
                  n[Cn] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      ke(n, r),
                    rn(e, i),
                    t = rn(e, r),
                    i = 0;
                  i < o.length;
                  i += 2
                ) {
                  var l = o[i],
                    u = o[i + 1];
                  "style" === l
                    ? en(n, u)
                    : "dangerouslySetInnerHTML" === l
                    ? je(n, u)
                    : "children" === l
                    ? Ue(n, u)
                    : Y(n, l, u, t);
                }
                switch (e) {
                  case "input":
                    Te(n, r);
                    break;
                  case "textarea":
                    Me(n, r);
                    break;
                  case "select":
                    (t = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (e = r.value)
                        ? Pe(n, !!r.multiple, e, !1)
                        : t !== !!r.multiple &&
                          (null != r.defaultValue
                            ? Pe(n, !!r.multiple, r.defaultValue, !0)
                            : Pe(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(a(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void (
              (t = t.stateNode).hydrate &&
              ((t.hydrate = !1), Lt(t.containerInfo))
            );
          case 12:
            return;
          case 13:
            if (
              ((n = t),
              null === t.memoizedState
                ? (r = !1)
                : ((r = !0), (n = t.child), (Vl = Bi())),
              null !== n)
            )
              e: for (e = n; ; ) {
                if (5 === e.tag)
                  (o = e.stateNode),
                    r
                      ? "function" == typeof (o = o.style).setProperty
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none")
                      : ((o = e.stateNode),
                        (i =
                          void 0 !== (i = e.memoizedProps.style) &&
                          null !== i &&
                          i.hasOwnProperty("display")
                            ? i.display
                            : null),
                        (o.style.display = Zt("display", i)));
                else if (6 === e.tag)
                  e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                else {
                  if (
                    13 === e.tag &&
                    null !== e.memoizedState &&
                    null === e.memoizedState.dehydrated
                  ) {
                    ((o = e.child.sibling).return = e), (e = o);
                    continue;
                  }
                  if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                  }
                }
                if (e === n) break;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            return void ml(t);
          case 19:
            return void ml(t);
          case 17:
            return;
        }
        throw Error(a(163));
      }

      function ml(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new nl()),
            t.forEach(function (t) {
              var r = function (e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t),
                  0 == (t = 0) && (t = iu((t = ru()), e, null)),
                  null !== (e = au(e, t)) && uu(e);
              }.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      var vl = "function" == typeof WeakMap ? WeakMap : Map;

      function yl(e, t, n) {
        ((n = so(n, null)).tag = 3),
          (n.payload = {
            element: null,
          });
        var r = t.value;
        return (
          (n.callback = function () {
            $l || (($l = !0), (Kl = r)), rl(e, t);
          }),
          n
        );
      }

      function gl(e, t, n) {
        (n = so(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var i = t.value;
          n.payload = function () {
            return rl(e, t), r(i);
          };
        }
        var o = e.stateNode;
        return (
          null !== o &&
            "function" == typeof o.componentDidCatch &&
            (n.callback = function () {
              "function" != typeof r &&
                (null === Gl ? (Gl = new Set([this])) : Gl.add(this), rl(e, t));
              var n = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== n ? n : "",
              });
            }),
          n
        );
      }
      var bl,
        wl = Math.ceil,
        xl = G.ReactCurrentDispatcher,
        El = G.ReactCurrentOwner,
        kl = 0,
        Tl = 8,
        _l = 16,
        Sl = 32,
        Cl = 0,
        Pl = 1,
        Ol = 2,
        Rl = 3,
        Ml = 4,
        zl = 5,
        Dl = kl,
        Nl = null,
        Il = null,
        Ll = 0,
        Fl = Cl,
        Al = null,
        jl = 1073741823,
        Ul = 1073741823,
        Bl = null,
        Wl = 0,
        Hl = !1,
        Vl = 0,
        Ql = 500,
        ql = null,
        $l = !1,
        Kl = null,
        Gl = null,
        Yl = !1,
        Xl = null,
        Jl = 90,
        Zl = null,
        eu = 0,
        tu = null,
        nu = 0;

      function ru() {
        return (Dl & (_l | Sl)) !== kl
          ? 1073741821 - ((Bi() / 10) | 0)
          : 0 !== nu
          ? nu
          : (nu = 1073741821 - ((Bi() / 10) | 0));
      }

      function iu(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var r = Wi();
        if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if ((Dl & _l) !== kl) return Ll;
        if (null !== n) e = Gi(e, 0 | n.timeoutMs || 5e3, 250);
        else
          switch (r) {
            case 99:
              e = 1073741823;
              break;
            case 98:
              e = Gi(e, 150, 100);
              break;
            case 97:
            case 96:
              e = Gi(e, 5e3, 250);
              break;
            case 95:
              e = 2;
              break;
            default:
              throw Error(a(326));
          }
        return null !== Nl && e === Ll && --e, e;
      }

      function ou(e, t) {
        if (50 < eu) throw ((eu = 0), (tu = null), Error(a(185)));
        if (null !== (e = au(e, t))) {
          var n = Wi();
          1073741823 === t
            ? (Dl & Tl) !== kl && (Dl & (_l | Sl)) === kl
              ? su(e)
              : (uu(e), Dl === kl && $i())
            : uu(e),
            (4 & Dl) === kl ||
              (98 !== n && 99 !== n) ||
              (null === Zl
                ? (Zl = new Map([[e, t]]))
                : (void 0 === (n = Zl.get(e)) || n > t) && Zl.set(e, t));
        }
      }

      function au(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
          i = null;
        if (null === r && 3 === e.tag) i = e.stateNode;
        else
          for (; null !== r; ) {
            if (
              ((n = r.alternate),
              r.childExpirationTime < t && (r.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t),
              null === r.return && 3 === r.tag)
            ) {
              i = r.stateNode;
              break;
            }
            r = r.return;
          }
        return (
          null !== i && (Nl === i && (vu(t), Fl === Ml && ju(i, Ll)), Uu(i, t)),
          i
        );
      }

      function lu(e) {
        var t = e.lastExpiredTime;
        if (0 !== t) return t;
        if (!Au(e, (t = e.firstPendingTime))) return t;
        var n = e.lastPingedTime;
        return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e
          ? 0
          : e;
      }

      function uu(e) {
        if (0 !== e.lastExpiredTime)
          (e.callbackExpirationTime = 1073741823),
            (e.callbackPriority = 99),
            (e.callbackNode = qi(su.bind(null, e)));
        else {
          var t = lu(e),
            n = e.callbackNode;
          if (0 === t)
            null !== n &&
              ((e.callbackNode = null),
              (e.callbackExpirationTime = 0),
              (e.callbackPriority = 90));
          else {
            var r = ru();
            if (
              (1073741823 === t
                ? (r = 99)
                : 1 === t || 2 === t
                ? (r = 95)
                : (r =
                    0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                      ? 99
                      : 250 >= r
                      ? 98
                      : 5250 >= r
                      ? 97
                      : 95),
              null !== n)
            ) {
              var i = e.callbackPriority;
              if (e.callbackExpirationTime === t && i >= r) return;
              n !== Ni && _i(n);
            }
            (e.callbackExpirationTime = t),
              (e.callbackPriority = r),
              (t =
                1073741823 === t
                  ? qi(su.bind(null, e))
                  : Qi(
                      r,
                      function e(t, n) {
                        nu = 0;
                        if (n) return (n = ru()), Bu(t, n), uu(t), null;
                        var r = lu(t);
                        if (0 !== r) {
                          if (((n = t.callbackNode), (Dl & (_l | Sl)) !== kl))
                            throw Error(a(327));
                          if (
                            (Tu(),
                            (t === Nl && r === Ll) || du(t, r),
                            null !== Il)
                          ) {
                            var i = Dl;
                            Dl |= _l;
                            for (var o = hu(); ; )
                              try {
                                gu();
                                break;
                              } catch (e) {
                                pu(t, e);
                              }
                            if ((to(), (Dl = i), (xl.current = o), Fl === Pl))
                              throw ((n = Al), du(t, r), ju(t, r), uu(t), n);
                            if (null === Il)
                              switch (
                                ((o = t.finishedWork = t.current.alternate),
                                (t.finishedExpirationTime = r),
                                (i = Fl),
                                (Nl = null),
                                i)
                              ) {
                                case Cl:
                                case Pl:
                                  throw Error(a(345));
                                case Ol:
                                  Bu(t, 2 < r ? 2 : r);
                                  break;
                                case Rl:
                                  if (
                                    (ju(t, r),
                                    (i = t.lastSuspendedTime),
                                    r === i &&
                                      (t.nextKnownPendingLevel = xu(o)),
                                    1073741823 === jl &&
                                      10 < (o = Vl + Ql - Bi()))
                                  ) {
                                    if (Hl) {
                                      var l = t.lastPingedTime;
                                      if (0 === l || l >= r) {
                                        (t.lastPingedTime = r), du(t, r);
                                        break;
                                      }
                                    }
                                    if (0 !== (l = lu(t)) && l !== r) break;
                                    if (0 !== i && i !== r) {
                                      t.lastPingedTime = i;
                                      break;
                                    }
                                    t.timeoutHandle = xn(Eu.bind(null, t), o);
                                    break;
                                  }
                                  Eu(t);
                                  break;
                                case Ml:
                                  if (
                                    (ju(t, r),
                                    (i = t.lastSuspendedTime),
                                    r === i &&
                                      (t.nextKnownPendingLevel = xu(o)),
                                    Hl &&
                                      (0 === (o = t.lastPingedTime) || o >= r))
                                  ) {
                                    (t.lastPingedTime = r), du(t, r);
                                    break;
                                  }
                                  if (0 !== (o = lu(t)) && o !== r) break;
                                  if (0 !== i && i !== r) {
                                    t.lastPingedTime = i;
                                    break;
                                  }
                                  if (
                                    (1073741823 !== Ul
                                      ? (i = 10 * (1073741821 - Ul) - Bi())
                                      : 1073741823 === jl
                                      ? (i = 0)
                                      : ((i = 10 * (1073741821 - jl) - 5e3),
                                        (o = Bi()),
                                        (r = 10 * (1073741821 - r) - o),
                                        0 > (i = o - i) && (i = 0),
                                        (i =
                                          (120 > i
                                            ? 120
                                            : 480 > i
                                            ? 480
                                            : 1080 > i
                                            ? 1080
                                            : 1920 > i
                                            ? 1920
                                            : 3e3 > i
                                            ? 3e3
                                            : 4320 > i
                                            ? 4320
                                            : 1960 * wl(i / 1960)) - i),
                                        r < i && (i = r)),
                                    10 < i)
                                  ) {
                                    t.timeoutHandle = xn(Eu.bind(null, t), i);
                                    break;
                                  }
                                  Eu(t);
                                  break;
                                case zl:
                                  if (1073741823 !== jl && null !== Bl) {
                                    l = jl;
                                    var u = Bl;
                                    if (
                                      (0 >= (i = 0 | u.busyMinDurationMs)
                                        ? (i = 0)
                                        : ((o = 0 | u.busyDelayMs),
                                          (l =
                                            Bi() -
                                            (10 * (1073741821 - l) -
                                              (0 | u.timeoutMs || 5e3))),
                                          (i = l <= o ? 0 : o + i - l)),
                                      10 < i)
                                    ) {
                                      ju(t, r),
                                        (t.timeoutHandle = xn(
                                          Eu.bind(null, t),
                                          i
                                        ));
                                      break;
                                    }
                                  }
                                  Eu(t);
                                  break;
                                default:
                                  throw Error(a(329));
                              }
                            if ((uu(t), t.callbackNode === n))
                              return e.bind(null, t);
                          }
                        }
                        return null;
                      }.bind(null, e),
                      {
                        timeout: 10 * (1073741821 - t) - Bi(),
                      }
                    )),
              (e.callbackNode = t);
          }
        }
      }

      function su(e) {
        var t = e.lastExpiredTime;
        if (((t = 0 !== t ? t : 1073741823), (Dl & (_l | Sl)) !== kl))
          throw Error(a(327));
        if ((Tu(), (e === Nl && t === Ll) || du(e, t), null !== Il)) {
          var n = Dl;
          Dl |= _l;
          for (var r = hu(); ; )
            try {
              yu();
              break;
            } catch (t) {
              pu(e, t);
            }
          if ((to(), (Dl = n), (xl.current = r), Fl === Pl))
            throw ((n = Al), du(e, t), ju(e, t), uu(e), n);
          if (null !== Il) throw Error(a(261));
          (e.finishedWork = e.current.alternate),
            (e.finishedExpirationTime = t),
            (Nl = null),
            Eu(e),
            uu(e);
        }
        return null;
      }

      function cu(e, t) {
        var n = Dl;
        Dl |= 1;
        try {
          return e(t);
        } finally {
          (Dl = n) === kl && $i();
        }
      }

      function fu(e, t) {
        var n = Dl;
        (Dl &= -2), (Dl |= Tl);
        try {
          return e(t);
        } finally {
          (Dl = n) === kl && $i();
        }
      }

      function du(e, t) {
        (e.finishedWork = null), (e.finishedExpirationTime = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), En(n)), null !== Il))
          for (n = Il.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null !== (r = r.type.childContextTypes) && void 0 !== r && gi();
                break;
              case 3:
                Io(), ci(hi), ci(pi);
                break;
              case 5:
                Fo(r);
                break;
              case 4:
                Io();
                break;
              case 13:
              case 19:
                ci(Ao);
                break;
              case 10:
                no(r);
            }
            n = n.return;
          }
        (Nl = e),
          (Il = Du(e.current, null)),
          (Ll = t),
          (Fl = Cl),
          (Al = null),
          (Ul = jl = 1073741823),
          (Bl = null),
          (Wl = 0),
          (Hl = !1);
      }

      function pu(e, t) {
        for (;;) {
          try {
            if ((to(), (Bo.current = ga), $o))
              for (var n = Vo.memoizedState; null !== n; ) {
                var r = n.queue;
                null !== r && (r.pending = null), (n = n.next);
              }
            if (
              ((Ho = 0),
              (qo = Qo = Vo = null),
              ($o = !1),
              null === Il || null === Il.return)
            )
              return (Fl = Pl), (Al = t), (Il = null);
            e: {
              var i = e,
                o = Il.return,
                a = Il,
                l = t;
              if (
                ((t = Ll),
                (a.effectTag |= 2048),
                (a.firstEffect = a.lastEffect = null),
                null !== l &&
                  "object" == typeof l &&
                  "function" == typeof l.then)
              ) {
                var u = l;
                if (0 == (2 & a.mode)) {
                  var s = a.alternate;
                  s
                    ? ((a.updateQueue = s.updateQueue),
                      (a.memoizedState = s.memoizedState),
                      (a.expirationTime = s.expirationTime))
                    : ((a.updateQueue = null), (a.memoizedState = null));
                }
                var c = 0 != (1 & Ao.current),
                  f = o;
                do {
                  var d;
                  if ((d = 13 === f.tag)) {
                    var p = f.memoizedState;
                    if (null !== p) d = null !== p.dehydrated;
                    else {
                      var h = f.memoizedProps;
                      d =
                        void 0 !== h.fallback &&
                        (!0 !== h.unstable_avoidThisFallback || !c);
                    }
                  }
                  if (d) {
                    var m = f.updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(u), (f.updateQueue = v);
                    } else m.add(u);
                    if (0 == (2 & f.mode)) {
                      if (
                        ((f.effectTag |= 64),
                        (a.effectTag &= -2981),
                        1 === a.tag)
                      )
                        if (null === a.alternate) a.tag = 17;
                        else {
                          var y = so(1073741823, null);
                          (y.tag = 2), co(a, y);
                        }
                      a.expirationTime = 1073741823;
                      break e;
                    }
                    (l = void 0), (a = t);
                    var g = i.pingCache;
                    if (
                      (null === g
                        ? ((g = i.pingCache = new vl()),
                          (l = new Set()),
                          g.set(u, l))
                        : void 0 === (l = g.get(u)) &&
                          ((l = new Set()), g.set(u, l)),
                      !l.has(a))
                    ) {
                      l.add(a);
                      var b = Pu.bind(null, i, u, a);
                      u.then(b, b);
                    }
                    (f.effectTag |= 4096), (f.expirationTime = t);
                    break e;
                  }
                  f = f.return;
                } while (null !== f);
                l = Error(
                  (me(a.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                    ve(a)
                );
              }
              Fl !== zl && (Fl = Ol), (l = tl(l, a)), (f = o);
              do {
                switch (f.tag) {
                  case 3:
                    (u = l),
                      (f.effectTag |= 4096),
                      (f.expirationTime = t),
                      fo(f, yl(f, u, t));
                    break e;
                  case 1:
                    u = l;
                    var w = f.type,
                      x = f.stateNode;
                    if (
                      0 == (64 & f.effectTag) &&
                      ("function" == typeof w.getDerivedStateFromError ||
                        (null !== x &&
                          "function" == typeof x.componentDidCatch &&
                          (null === Gl || !Gl.has(x))))
                    ) {
                      (f.effectTag |= 4096),
                        (f.expirationTime = t),
                        fo(f, gl(f, u, t));
                      break e;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Il = wu(Il);
          } catch (e) {
            t = e;
            continue;
          }
          break;
        }
      }

      function hu() {
        var e = xl.current;
        return (xl.current = ga), null === e ? ga : e;
      }

      function mu(e, t) {
        e < jl && 2 < e && (jl = e),
          null !== t && e < Ul && 2 < e && ((Ul = e), (Bl = t));
      }

      function vu(e) {
        e > Wl && (Wl = e);
      }

      function yu() {
        for (; null !== Il; ) Il = bu(Il);
      }

      function gu() {
        for (; null !== Il && !Ii(); ) Il = bu(Il);
      }

      function bu(e) {
        var t = bl(e.alternate, e, Ll);
        return (
          (e.memoizedProps = e.pendingProps),
          null === t && (t = wu(e)),
          (El.current = null),
          t
        );
      }

      function wu(e) {
        Il = e;
        do {
          var t = Il.alternate;
          if (((e = Il.return), 0 == (2048 & Il.effectTag))) {
            if (
              ((t = Za(t, Il, Ll)), 1 === Ll || 1 !== Il.childExpirationTime)
            ) {
              for (var n = 0, r = Il.child; null !== r; ) {
                var i = r.expirationTime,
                  o = r.childExpirationTime;
                i > n && (n = i), o > n && (n = o), (r = r.sibling);
              }
              Il.childExpirationTime = n;
            }
            if (null !== t) return t;
            null !== e &&
              0 == (2048 & e.effectTag) &&
              (null === e.firstEffect && (e.firstEffect = Il.firstEffect),
              null !== Il.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = Il.firstEffect),
                (e.lastEffect = Il.lastEffect)),
              1 < Il.effectTag &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = Il)
                  : (e.firstEffect = Il),
                (e.lastEffect = Il)));
          } else {
            if (null !== (t = el(Il))) return (t.effectTag &= 2047), t;
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
          }
          if (null !== (t = Il.sibling)) return t;
          Il = e;
        } while (null !== Il);
        return Fl === Cl && (Fl = zl), null;
      }

      function xu(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e;
      }

      function Eu(e) {
        var t = Wi();
        return (
          Vi(
            99,
            function (e, t) {
              do {
                Tu();
              } while (null !== Xl);
              if ((Dl & (_l | Sl)) !== kl) throw Error(a(327));
              var n = e.finishedWork,
                r = e.finishedExpirationTime;
              if (null === n) return null;
              if (
                ((e.finishedWork = null),
                (e.finishedExpirationTime = 0),
                n === e.current)
              )
                throw Error(a(177));
              (e.callbackNode = null),
                (e.callbackExpirationTime = 0),
                (e.callbackPriority = 90),
                (e.nextKnownPendingLevel = 0);
              var i = xu(n);
              if (
                ((e.firstPendingTime = i),
                r <= e.lastSuspendedTime
                  ? (e.firstSuspendedTime =
                      e.lastSuspendedTime =
                      e.nextKnownPendingLevel =
                        0)
                  : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
                r <= e.lastPingedTime && (e.lastPingedTime = 0),
                r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
                e === Nl && ((Il = Nl = null), (Ll = 0)),
                1 < n.effectTag
                  ? null !== n.lastEffect
                    ? ((n.lastEffect.nextEffect = n), (i = n.firstEffect))
                    : (i = n)
                  : (i = n.firstEffect),
                null !== i)
              ) {
                var o = Dl;
                (Dl |= Sl), (El.current = null), (yn = qt);
                var l = fn();
                if (dn(l)) {
                  if ("selectionStart" in l)
                    var u = {
                      start: l.selectionStart,
                      end: l.selectionEnd,
                    };
                  else
                    e: {
                      var s =
                        (u = ((u = l.ownerDocument) && u.defaultView) || window)
                          .getSelection && u.getSelection();
                      if (s && 0 !== s.rangeCount) {
                        u = s.anchorNode;
                        var c = s.anchorOffset,
                          f = s.focusNode;
                        s = s.focusOffset;
                        try {
                          u.nodeType, f.nodeType;
                        } catch (e) {
                          u = null;
                          break e;
                        }
                        var d = 0,
                          p = -1,
                          h = -1,
                          m = 0,
                          v = 0,
                          y = l,
                          g = null;
                        t: for (;;) {
                          for (
                            var b;
                            y !== u ||
                              (0 !== c && 3 !== y.nodeType) ||
                              (p = d + c),
                              y !== f ||
                                (0 !== s && 3 !== y.nodeType) ||
                                (h = d + s),
                              3 === y.nodeType && (d += y.nodeValue.length),
                              null !== (b = y.firstChild);

                          )
                            (g = y), (y = b);
                          for (;;) {
                            if (y === l) break t;
                            if (
                              (g === u && ++m === c && (p = d),
                              g === f && ++v === s && (h = d),
                              null !== (b = y.nextSibling))
                            )
                              break;
                            g = (y = g).parentNode;
                          }
                          y = b;
                        }
                        u =
                          -1 === p || -1 === h
                            ? null
                            : {
                                start: p,
                                end: h,
                              };
                      } else u = null;
                    }
                  u = u || {
                    start: 0,
                    end: 0,
                  };
                } else u = null;
                (gn = {
                  activeElementDetached: null,
                  focusedElem: l,
                  selectionRange: u,
                }),
                  (qt = !1),
                  (ql = i);
                do {
                  try {
                    ku();
                  } catch (e) {
                    if (null === ql) throw Error(a(330));
                    Cu(ql, e), (ql = ql.nextEffect);
                  }
                } while (null !== ql);
                ql = i;
                do {
                  try {
                    for (l = e, u = t; null !== ql; ) {
                      var w = ql.effectTag;
                      if ((16 & w && Ue(ql.stateNode, ""), 128 & w)) {
                        var x = ql.alternate;
                        if (null !== x) {
                          var E = x.ref;
                          null !== E &&
                            ("function" == typeof E
                              ? E(null)
                              : (E.current = null));
                        }
                      }
                      switch (1038 & w) {
                        case 2:
                          dl(ql), (ql.effectTag &= -3);
                          break;
                        case 6:
                          dl(ql), (ql.effectTag &= -3), hl(ql.alternate, ql);
                          break;
                        case 1024:
                          ql.effectTag &= -1025;
                          break;
                        case 1028:
                          (ql.effectTag &= -1025), hl(ql.alternate, ql);
                          break;
                        case 4:
                          hl(ql.alternate, ql);
                          break;
                        case 8:
                          pl(l, (c = ql), u), cl(c);
                      }
                      ql = ql.nextEffect;
                    }
                  } catch (e) {
                    if (null === ql) throw Error(a(330));
                    Cu(ql, e), (ql = ql.nextEffect);
                  }
                } while (null !== ql);
                if (
                  ((E = gn),
                  (x = fn()),
                  (w = E.focusedElem),
                  (u = E.selectionRange),
                  x !== w &&
                    w &&
                    w.ownerDocument &&
                    (function e(t, n) {
                      return (
                        !(!t || !n) &&
                        (t === n ||
                          ((!t || 3 !== t.nodeType) &&
                            (n && 3 === n.nodeType
                              ? e(t, n.parentNode)
                              : "contains" in t
                              ? t.contains(n)
                              : !!t.compareDocumentPosition &&
                                !!(16 & t.compareDocumentPosition(n)))))
                      );
                    })(w.ownerDocument.documentElement, w))
                ) {
                  null !== u &&
                    dn(w) &&
                    ((x = u.start),
                    void 0 === (E = u.end) && (E = x),
                    "selectionStart" in w
                      ? ((w.selectionStart = x),
                        (w.selectionEnd = Math.min(E, w.value.length)))
                      : (E =
                          ((x = w.ownerDocument || document) &&
                            x.defaultView) ||
                          window).getSelection &&
                        ((E = E.getSelection()),
                        (c = w.textContent.length),
                        (l = Math.min(u.start, c)),
                        (u = void 0 === u.end ? l : Math.min(u.end, c)),
                        !E.extend && l > u && ((c = u), (u = l), (l = c)),
                        (c = cn(w, l)),
                        (f = cn(w, u)),
                        c &&
                          f &&
                          (1 !== E.rangeCount ||
                            E.anchorNode !== c.node ||
                            E.anchorOffset !== c.offset ||
                            E.focusNode !== f.node ||
                            E.focusOffset !== f.offset) &&
                          ((x = x.createRange()).setStart(c.node, c.offset),
                          E.removeAllRanges(),
                          l > u
                            ? (E.addRange(x), E.extend(f.node, f.offset))
                            : (x.setEnd(f.node, f.offset), E.addRange(x))))),
                    (x = []);
                  for (E = w; (E = E.parentNode); )
                    1 === E.nodeType &&
                      x.push({
                        element: E,
                        left: E.scrollLeft,
                        top: E.scrollTop,
                      });
                  for (
                    "function" == typeof w.focus && w.focus(), w = 0;
                    w < x.length;
                    w++
                  )
                    ((E = x[w]).element.scrollLeft = E.left),
                      (E.element.scrollTop = E.top);
                }
                (qt = !!yn), (gn = yn = null), (e.current = n), (ql = i);
                do {
                  try {
                    for (w = e; null !== ql; ) {
                      var k = ql.effectTag;
                      if ((36 & k && ul(w, ql.alternate, ql), 128 & k)) {
                        x = void 0;
                        var T = ql.ref;
                        if (null !== T) {
                          var _ = ql.stateNode;
                          switch (ql.tag) {
                            case 5:
                              x = _;
                              break;
                            default:
                              x = _;
                          }
                          "function" == typeof T ? T(x) : (T.current = x);
                        }
                      }
                      ql = ql.nextEffect;
                    }
                  } catch (e) {
                    if (null === ql) throw Error(a(330));
                    Cu(ql, e), (ql = ql.nextEffect);
                  }
                } while (null !== ql);
                (ql = null), Li(), (Dl = o);
              } else e.current = n;
              if (Yl) (Yl = !1), (Xl = e), (Jl = t);
              else
                for (ql = i; null !== ql; )
                  (t = ql.nextEffect), (ql.nextEffect = null), (ql = t);
              if (
                (0 === (t = e.firstPendingTime) && (Gl = null),
                1073741823 === t
                  ? e === tu
                    ? eu++
                    : ((eu = 0), (tu = e))
                  : (eu = 0),
                "function" == typeof Ou && Ou(n.stateNode, r),
                uu(e),
                $l)
              )
                throw (($l = !1), (e = Kl), (Kl = null), e);
              return (Dl & Tl) !== kl ? null : ($i(), null);
            }.bind(null, e, t)
          ),
          null
        );
      }

      function ku() {
        for (; null !== ql; ) {
          var e = ql.effectTag;
          0 != (256 & e) && ol(ql.alternate, ql),
            0 == (512 & e) ||
              Yl ||
              ((Yl = !0),
              Qi(97, function () {
                return Tu(), null;
              })),
            (ql = ql.nextEffect);
        }
      }

      function Tu() {
        if (90 !== Jl) {
          var e = 97 < Jl ? 97 : Jl;
          return (Jl = 90), Vi(e, _u);
        }
      }

      function _u() {
        if (null === Xl) return !1;
        var e = Xl;
        if (((Xl = null), (Dl & (_l | Sl)) !== kl)) throw Error(a(331));
        var t = Dl;
        for (Dl |= Sl, e = e.current.firstEffect; null !== e; ) {
          try {
            var n = e;
            if (0 != (512 & n.effectTag))
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                  al(5, n), ll(5, n);
              }
          } catch (t) {
            if (null === e) throw Error(a(330));
            Cu(e, t);
          }
          (n = e.nextEffect), (e.nextEffect = null), (e = n);
        }
        return (Dl = t), $i(), !0;
      }

      function Su(e, t, n) {
        co(e, (t = yl(e, (t = tl(n, t)), 1073741823))),
          null !== (e = au(e, 1073741823)) && uu(e);
      }

      function Cu(e, t) {
        if (3 === e.tag) Su(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Su(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" == typeof n.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch &&
                  (null === Gl || !Gl.has(r)))
              ) {
                co(n, (e = gl(n, (e = tl(t, e)), 1073741823))),
                  null !== (n = au(n, 1073741823)) && uu(n);
                break;
              }
            }
            n = n.return;
          }
      }

      function Pu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          Nl === e && Ll === n
            ? Fl === Ml || (Fl === Rl && 1073741823 === jl && Bi() - Vl < Ql)
              ? du(e, Ll)
              : (Hl = !0)
            : Au(e, n) &&
              ((0 !== (t = e.lastPingedTime) && t < n) ||
                ((e.lastPingedTime = n), uu(e)));
      }
      bl = function (e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
          var i = t.pendingProps;
          if (e.memoizedProps !== i || hi.current) za = !0;
          else {
            if (r < n) {
              switch (((za = !1), t.tag)) {
                case 3:
                  Ba(t), Ra();
                  break;
                case 5:
                  if ((Lo(t), 4 & t.mode && 1 !== n && i.hidden))
                    return (t.expirationTime = t.childExpirationTime = 1), null;
                  break;
                case 1:
                  yi(t.type) && xi(t);
                  break;
                case 4:
                  No(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  (r = t.memoizedProps.value),
                    (i = t.type._context),
                    fi(Xi, i._currentValue),
                    (i._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (r = t.child.childExpirationTime) && r >= n
                      ? $a(e, t, n)
                      : (fi(Ao, 1 & Ao.current),
                        null !== (t = Xa(e, t, n)) ? t.sibling : null);
                  fi(Ao, 1 & Ao.current);
                  break;
                case 19:
                  if (
                    ((r = t.childExpirationTime >= n), 0 != (64 & e.effectTag))
                  ) {
                    if (r) return Ya(e, t, n);
                    t.effectTag |= 64;
                  }
                  if (
                    (null !== (i = t.memoizedState) &&
                      ((i.rendering = null), (i.tail = null)),
                    fi(Ao, Ao.current),
                    !r)
                  )
                    return null;
              }
              return Xa(e, t, n);
            }
            za = !1;
          }
        } else za = !1;
        switch (((t.expirationTime = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (i = vi(t, pi.current)),
              io(t, n),
              (i = Yo(null, t, r, e, i, n)),
              (t.effectTag |= 1),
              "object" == typeof i &&
                null !== i &&
                "function" == typeof i.render &&
                void 0 === i.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                yi(r))
              ) {
                var o = !0;
                xi(t);
              } else o = !1;
              (t.memoizedState =
                null !== i.state && void 0 !== i.state ? i.state : null),
                lo(t);
              var l = r.getDerivedStateFromProps;
              "function" == typeof l && yo(t, r, l, e),
                (i.updater = go),
                (t.stateNode = i),
                (i._reactInternalFiber = t),
                Eo(t, r, e, n),
                (t = Ua(null, t, r, !0, o, n));
            } else (t.tag = 0), Da(null, t, i, n), (t = t.child);
            return t;
          case 16:
            e: {
              if (
                ((i = t.elementType),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (e = t.pendingProps),
                (function (e) {
                  if (-1 === e._status) {
                    e._status = 0;
                    var t = e._ctor;
                    (t = t()),
                      (e._result = t),
                      t.then(
                        function (t) {
                          0 === e._status &&
                            ((t = t.default), (e._status = 1), (e._result = t));
                        },
                        function (t) {
                          0 === e._status && ((e._status = 2), (e._result = t));
                        }
                      );
                  }
                })(i),
                1 !== i._status)
              )
                throw i._result;
              switch (
                ((i = i._result),
                (t.type = i),
                (o = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return zu(e) ? 1 : 0;
                    if (void 0 !== e && null !== e) {
                      if ((e = e.$$typeof) === le) return 11;
                      if (e === ce) return 14;
                    }
                    return 2;
                  })(i)),
                (e = Yi(i, e)),
                o)
              ) {
                case 0:
                  t = Aa(null, t, i, e, n);
                  break e;
                case 1:
                  t = ja(null, t, i, e, n);
                  break e;
                case 11:
                  t = Na(null, t, i, e, n);
                  break e;
                case 14:
                  t = Ia(null, t, i, Yi(i.type, e), r, n);
                  break e;
              }
              throw Error(a(306, i, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (i = t.pendingProps),
              Aa(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n)
            );
          case 1:
            return (
              (r = t.type),
              (i = t.pendingProps),
              ja(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n)
            );
          case 3:
            if ((Ba(t), (r = t.updateQueue), null === e || null === r))
              throw Error(a(282));
            if (
              ((r = t.pendingProps),
              (i = null !== (i = t.memoizedState) ? i.element : null),
              uo(e, t),
              po(t, r, null, n),
              (r = t.memoizedState.element) === i)
            )
              Ra(), (t = Xa(e, t, n));
            else {
              if (
                ((i = t.stateNode.hydrate) &&
                  ((ka = kn(t.stateNode.containerInfo.firstChild)),
                  (Ea = t),
                  (i = Ta = !0)),
                i)
              )
                for (n = Po(t, null, r, n), t.child = n; n; )
                  (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
              else Da(e, t, r, n), Ra();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Lo(t),
              null === e && Ca(t),
              (r = t.type),
              (i = t.pendingProps),
              (o = null !== e ? e.memoizedProps : null),
              (l = i.children),
              wn(r, i)
                ? (l = null)
                : null !== o && wn(r, o) && (t.effectTag |= 16),
              Fa(e, t),
              4 & t.mode && 1 !== n && i.hidden
                ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
                : (Da(e, t, l, n), (t = t.child)),
              t
            );
          case 6:
            return null === e && Ca(t), null;
          case 13:
            return $a(e, t, n);
          case 4:
            return (
              No(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Co(t, null, r, n)) : Da(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (i = t.pendingProps),
              Na(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n)
            );
          case 7:
            return Da(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Da(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (i = t.pendingProps),
                (l = t.memoizedProps),
                (o = i.value);
              var u = t.type._context;
              if ((fi(Xi, u._currentValue), (u._currentValue = o), null !== l))
                if (
                  ((u = l.value),
                  0 ===
                    (o = jr(u, o)
                      ? 0
                      : 0 |
                        ("function" == typeof r._calculateChangedBits
                          ? r._calculateChangedBits(u, o)
                          : 1073741823)))
                ) {
                  if (l.children === i.children && !hi.current) {
                    t = Xa(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                    var s = u.dependencies;
                    if (null !== s) {
                      l = u.child;
                      for (var c = s.firstContext; null !== c; ) {
                        if (c.context === r && 0 != (c.observedBits & o)) {
                          1 === u.tag &&
                            (((c = so(n, null)).tag = 2), co(u, c)),
                            u.expirationTime < n && (u.expirationTime = n),
                            null !== (c = u.alternate) &&
                              c.expirationTime < n &&
                              (c.expirationTime = n),
                            ro(u.return, n),
                            s.expirationTime < n && (s.expirationTime = n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      l = 10 === u.tag && u.type === t.type ? null : u.child;
                    if (null !== l) l.return = u;
                    else
                      for (l = u; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (u = l.sibling)) {
                          (u.return = l.return), (l = u);
                          break;
                        }
                        l = l.return;
                      }
                    u = l;
                  }
              Da(e, t, i.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (i = t.type),
              (r = (o = t.pendingProps).children),
              io(t, n),
              (r = r((i = oo(i, o.unstable_observedBits)))),
              (t.effectTag |= 1),
              Da(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (o = Yi((i = t.type), t.pendingProps)),
              Ia(e, t, i, (o = Yi(i.type, o)), r, n)
            );
          case 15:
            return La(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (i = t.pendingProps),
              (i = t.elementType === r ? i : Yi(r, i)),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (t.tag = 1),
              yi(r) ? ((e = !0), xi(t)) : (e = !1),
              io(t, n),
              wo(t, r, i),
              Eo(t, r, i, n),
              Ua(null, t, r, !0, e, n)
            );
          case 19:
            return Ya(e, t, n);
        }
        throw Error(a(156, t.tag));
      };
      var Ou = null,
        Ru = null;

      function Mu(e, t, n, r) {
        return new (function (e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.effectTag = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childExpirationTime = this.expirationTime = 0),
            (this.alternate = null);
        })(e, t, n, r);
      }

      function zu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }

      function Du(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Mu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.effectTag = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childExpirationTime = e.childExpirationTime),
          (n.expirationTime = e.expirationTime),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : {
                  expirationTime: t.expirationTime,
                  firstContext: t.firstContext,
                  responders: t.responders,
                }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }

      function Nu(e, t, n, r, i, o) {
        var l = 2;
        if (((r = e), "function" == typeof e)) zu(e) && (l = 1);
        else if ("string" == typeof e) l = 5;
        else
          e: switch (e) {
            case te:
              return Iu(n.children, i, o, t);
            case ae:
              (l = 8), (i |= 7);
              break;
            case ne:
              (l = 8), (i |= 1);
              break;
            case re:
              return (
                ((e = Mu(12, n, t, 8 | i)).elementType = re),
                (e.type = re),
                (e.expirationTime = o),
                e
              );
            case ue:
              return (
                ((e = Mu(13, n, t, i)).type = ue),
                (e.elementType = ue),
                (e.expirationTime = o),
                e
              );
            case se:
              return (
                ((e = Mu(19, n, t, i)).elementType = se),
                (e.expirationTime = o),
                e
              );
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case ie:
                    l = 10;
                    break e;
                  case oe:
                    l = 9;
                    break e;
                  case le:
                    l = 11;
                    break e;
                  case ce:
                    l = 14;
                    break e;
                  case fe:
                    (l = 16), (r = null);
                    break e;
                  case de:
                    l = 22;
                    break e;
                }
              throw Error(a(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = Mu(l, n, t, i)).elementType = e),
          (t.type = r),
          (t.expirationTime = o),
          t
        );
      }

      function Iu(e, t, n, r) {
        return ((e = Mu(7, e, r, t)).expirationTime = n), e;
      }

      function Lu(e, t, n) {
        return ((e = Mu(6, e, null, t)).expirationTime = n), e;
      }

      function Fu(e, t, n) {
        return (
          ((t = Mu(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).expirationTime = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }

      function Au(e, t) {
        var n = e.firstSuspendedTime;
        return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
      }

      function ju(e, t) {
        var n = e.firstSuspendedTime,
          r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t),
          (r > t || 0 === n) && (e.lastSuspendedTime = t),
          t <= e.lastPingedTime && (e.lastPingedTime = 0),
          t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
      }

      function Uu(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n &&
          (t >= n
            ? (e.firstSuspendedTime =
                e.lastSuspendedTime =
                e.nextKnownPendingLevel =
                  0)
            : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
          t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
      }

      function Bu(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t);
      }

      function Wu(e, t, n, r) {
        var i = t.current,
          o = ru(),
          l = mo.suspense;
        o = iu(o, i, l);
        e: if (n) {
          n = n._reactInternalFiber;
          t: {
            if (Ze(n) !== n || 1 !== n.tag) throw Error(a(170));
            var u = n;
            do {
              switch (u.tag) {
                case 3:
                  u = u.stateNode.context;
                  break t;
                case 1:
                  if (yi(u.type)) {
                    u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              u = u.return;
            } while (null !== u);
            throw Error(a(171));
          }
          if (1 === n.tag) {
            var s = n.type;
            if (yi(s)) {
              n = wi(n, s, u);
              break e;
            }
          }
          n = u;
        } else n = di;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = so(o, l)).payload = {
            element: e,
          }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          co(i, t),
          ou(i, o),
          o
        );
      }

      function Hu(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }

      function Vu(e, t) {
        null !== (e = e.memoizedState) &&
          null !== e.dehydrated &&
          e.retryTime < t &&
          (e.retryTime = t);
      }

      function Qu(e, t) {
        Vu(e, t), (e = e.alternate) && Vu(e, t);
      }

      function qu(e, t, n) {
        var r = new (function (e, t, n) {
            (this.tag = t),
              (this.current = null),
              (this.containerInfo = e),
              (this.pingCache = this.pendingChildren = null),
              (this.finishedExpirationTime = 0),
              (this.finishedWork = null),
              (this.timeoutHandle = -1),
              (this.pendingContext = this.context = null),
              (this.hydrate = n),
              (this.callbackNode = null),
              (this.callbackPriority = 90),
              (this.lastExpiredTime =
                this.lastPingedTime =
                this.nextKnownPendingLevel =
                this.lastSuspendedTime =
                this.firstSuspendedTime =
                this.firstPendingTime =
                  0);
          })(e, t, (n = null != n && !0 === n.hydrate)),
          i = Mu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        (r.current = i),
          (i.stateNode = r),
          lo(i),
          (e[Pn] = r.current),
          n &&
            0 !== t &&
            (function (e, t) {
              var n = Je(t);
              St.forEach(function (e) {
                ht(e, t, n);
              }),
                Ct.forEach(function (e) {
                  ht(e, t, n);
                });
            })(0, 9 === e.nodeType ? e : e.ownerDocument),
          (this._internalRoot = r);
      }

      function $u(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }

      function Ku(e, t, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
          var a = o._internalRoot;
          if ("function" == typeof i) {
            var l = i;
            i = function () {
              var e = Hu(a);
              l.call(e);
            };
          }
          Wu(t, a, e, i);
        } else {
          if (
            ((o = n._reactRootContainer =
              (function (e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e
                        ? 9 === e.nodeType
                          ? e.documentElement
                          : e.firstChild
                        : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )),
                  !t)
                )
                  for (var n; (n = e.lastChild); ) e.removeChild(n);
                return new qu(
                  e,
                  0,
                  t
                    ? {
                        hydrate: !0,
                      }
                    : void 0
                );
              })(n, r)),
            (a = o._internalRoot),
            "function" == typeof i)
          ) {
            var u = i;
            i = function () {
              var e = Hu(a);
              u.call(e);
            };
          }
          fu(function () {
            Wu(t, a, e, i);
          });
        }
        return Hu(a);
      }

      function Gu(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!$u(t)) throw Error(a(200));
        return (function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: ee,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        })(e, t, null, n);
      }
      (qu.prototype.render = function (e) {
        Wu(e, this._internalRoot, null, null);
      }),
        (qu.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Wu(null, e, null, function () {
            t[Pn] = null;
          });
        }),
        (mt = function (e) {
          if (13 === e.tag) {
            var t = Gi(ru(), 150, 100);
            ou(e, t), Qu(e, t);
          }
        }),
        (vt = function (e) {
          13 === e.tag && (ou(e, 3), Qu(e, 3));
        }),
        (yt = function (e) {
          if (13 === e.tag) {
            var t = ru();
            ou(e, (t = iu(t, e, null))), Qu(e, t);
          }
        }),
        (C = function (e, t, n) {
          switch (t) {
            case "input":
              if ((Te(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var i = zn(r);
                    if (!i) throw Error(a(90));
                    we(r), Te(r, i);
                  }
                }
              }
              break;
            case "textarea":
              Me(e, n);
              break;
            case "select":
              null != (t = n.value) && Pe(e, !!n.multiple, t, !1);
          }
        }),
        (D = cu),
        (N = function (e, t, n, r, i) {
          var o = Dl;
          Dl |= 4;
          try {
            return Vi(98, e.bind(null, t, n, r, i));
          } finally {
            (Dl = o) === kl && $i();
          }
        }),
        (I = function () {
          (Dl & (1 | _l | Sl)) === kl &&
            ((function () {
              if (null !== Zl) {
                var e = Zl;
                (Zl = null),
                  e.forEach(function (e, t) {
                    Bu(t, e), uu(t);
                  }),
                  $i();
              }
            })(),
            Tu());
        }),
        (L = function (e, t) {
          var n = Dl;
          Dl |= 2;
          try {
            return e(t);
          } finally {
            (Dl = n) === kl && $i();
          }
        });
      var Yu = {
        Events: [
          Rn,
          Mn,
          zn,
          _,
          E,
          jn,
          function (e) {
            it(e, An);
          },
          M,
          z,
          Gt,
          lt,
          Tu,
          {
            current: !1,
          },
        ],
      };
      !(function (e) {
        var t = e.findFiberByHostInstance;
        (function (e) {
          if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
          var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t.isDisabled || !t.supportsFiber) return !0;
          try {
            var n = t.inject(e);
            (Ou = function (e) {
              try {
                t.onCommitFiberRoot(
                  n,
                  e,
                  void 0,
                  64 == (64 & e.current.effectTag)
                );
              } catch (e) {}
            }),
              (Ru = function (e) {
                try {
                  t.onCommitFiberUnmount(n, e);
                } catch (e) {}
              });
          } catch (e) {}
        })(
          i({}, e, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: G.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = nt(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance: function (e) {
              return t ? t(e) : null;
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          })
        );
      })({
        findFiberByHostInstance: On,
        bundleType: 0,
        version: "16.13.1",
        rendererPackageName: "react-dom",
      }),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yu),
        (t.createPortal = Gu),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternalFiber;
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(a(188));
            throw Error(a(268, Object.keys(e)));
          }
          return (e = null === (e = nt(t)) ? null : e.stateNode);
        }),
        (t.flushSync = function (e, t) {
          if ((Dl & (_l | Sl)) !== kl) throw Error(a(187));
          var n = Dl;
          Dl |= 1;
          try {
            return Vi(99, e.bind(null, t));
          } finally {
            (Dl = n), $i();
          }
        }),
        (t.hydrate = function (e, t, n) {
          if (!$u(t)) throw Error(a(200));
          return Ku(null, e, t, !0, n);
        }),
        (t.render = function (e, t, n) {
          if (!$u(t)) throw Error(a(200));
          return Ku(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!$u(e)) throw Error(a(40));
          return (
            !!e._reactRootContainer &&
            (fu(function () {
              Ku(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Pn] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = cu),
        (t.unstable_createPortal = function (e, t) {
          return Gu(
            e,
            t,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null
          );
        }),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!$u(n)) throw Error(a(200));
          if (null == e || void 0 === e._reactInternalFiber) throw Error(a(38));
          return Ku(e, t, n, !1, r);
        }),
        (t.version = "16.13.1");
    },
    0: function (e, t, n) {
      n("+prg"), (e.exports = n("ctQG"));
    },
    "00be": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r,
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n("g5E5"),
        a =
          (r = o) && r.__esModule
            ? r
            : {
                default: r,
              };
      var l = 30,
        u = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.radius,
              r = void 0 === n ? l : n,
              i = t.enabled,
              o = void 0 === i || i,
              u = t.initialPoint,
              s =
                void 0 === u
                  ? {
                      x: 0,
                      y: 0,
                    }
                  : u;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.radius = r),
              (this._isEnabled = o),
              (this.pointer = new a.default(s.x, s.y)),
              (this.brush = new a.default(s.x, s.y)),
              (this.angle = 0),
              (this.distance = 0),
              (this._hasMoved = !1);
          }
          return (
            i(e, [
              {
                key: "enable",
                value: function () {
                  this._isEnabled = !0;
                },
              },
              {
                key: "disable",
                value: function () {
                  this._isEnabled = !1;
                },
              },
              {
                key: "isEnabled",
                value: function () {
                  return this._isEnabled;
                },
              },
              {
                key: "setRadius",
                value: function (e) {
                  this.radius = e;
                },
              },
              {
                key: "getRadius",
                value: function () {
                  return this.radius;
                },
              },
              {
                key: "getBrushCoordinates",
                value: function () {
                  return this.brush.toObject();
                },
              },
              {
                key: "getPointerCoordinates",
                value: function () {
                  return this.pointer.toObject();
                },
              },
              {
                key: "getBrush",
                value: function () {
                  return this.brush;
                },
              },
              {
                key: "getPointer",
                value: function () {
                  return this.pointer;
                },
              },
              {
                key: "getAngle",
                value: function () {
                  return this.angle;
                },
              },
              {
                key: "getDistance",
                value: function () {
                  return this.distance;
                },
              },
              {
                key: "brushHasMoved",
                value: function () {
                  return this._hasMoved;
                },
              },
              {
                key: "update",
                value: function (e) {
                  var t = (
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                    ).both,
                    n = void 0 !== t && t;
                  return (
                    (this._hasMoved = !1),
                    !(this.pointer.equalsTo(e) && !n) &&
                      (this.pointer.update(e),
                      n
                        ? ((this._hasMoved = !0), this.brush.update(e), !0)
                        : (this._isEnabled
                            ? ((this.distance = this.pointer.getDistanceTo(
                                this.brush
                              )),
                              (this.angle = this.pointer.getAngleTo(
                                this.brush
                              )),
                              this.distance > this.radius &&
                                (this.brush.moveByAngle(
                                  this.angle,
                                  this.distance - this.radius
                                ),
                                (this._hasMoved = !0)))
                            : ((this.distance = 0),
                              (this.angle = 0),
                              this.brush.update(e),
                              (this._hasMoved = !0)),
                          !0))
                  );
                },
              },
            ]),
            e
          );
        })();
      t.default = u;
    },
    "3Cgm": function (e, t, n) {
      "use strict";
      (function (t) {
        function n(e) {
          i.length || (r(), !0), (i[i.length] = e);
        }
        e.exports = n;
        var r,
          i = [],
          o = 0,
          a = 1024;

        function l() {
          for (; o < i.length; ) {
            var e = o;
            if (((o += 1), i[e].call(), o > a)) {
              for (var t = 0, n = i.length - o; t < n; t++) i[t] = i[t + o];
              (i.length -= o), (o = 0);
            }
          }
          (i.length = 0), (o = 0), !1;
        }
        var u,
          s,
          c,
          f = void 0 !== t ? t : self,
          d = f.MutationObserver || f.WebKitMutationObserver;

        function p(e) {
          return function () {
            var t = setTimeout(r, 0),
              n = setInterval(r, 50);

            function r() {
              clearTimeout(t), clearInterval(n), e();
            }
          };
        }
        "function" == typeof d
          ? ((u = 1),
            (s = new d(l)),
            (c = document.createTextNode("")),
            s.observe(c, {
              characterData: !0,
            }),
            (r = function () {
              (u = -u), (c.data = u);
            }))
          : (r = p(l)),
          (n.requestFlush = r),
          (n.makeRequestCallFromTimer = p);
      }.call(t, n("DuR2")));
    },
    BEQ0: function (e, t, n) {
      "use strict";
      var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (
              var n,
                a,
                l = (function (e) {
                  if (null === e || void 0 === e)
                    throw new TypeError(
                      "Object.assign cannot be called with null or undefined"
                    );
                  return Object(e);
                })(e),
                u = 1;
              u < arguments.length;
              u++
            ) {
              for (var s in (n = Object(arguments[u])))
                i.call(n, s) && (l[s] = n[s]);
              if (r) {
                a = r(n);
                for (var c = 0; c < a.length; c++)
                  o.call(n, a[c]) && (l[a[c]] = n[a[c]]);
              }
            }
            return l;
          };
    },
    DuR2: function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    FUgI: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      var i = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.x = t),
            (this.y = n);
        }
        return (
          r(e, [
            {
              key: "update",
              value: function (e) {
                (this.x = e.x), (this.y = e.y);
              },
            },
            {
              key: "getDifferenceTo",
              value: function (t) {
                return new e(this.x - t.x, this.y - t.y);
              },
            },
            {
              key: "getDistanceTo",
              value: function (e) {
                var t = this.getDifferenceTo(e);
                return Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2));
              },
            },
          ]),
          e
        );
      })();
      t.default = i;
    },
    GiK3: function (e, t, n) {
      "use strict";
      e.exports = n("vttU");
    },
    KSGD: function (e, t, n) {
      e.exports = n("Q4WQ")();
    },
    Nq5S: function (e, t, n) {
      "use strict";
      var r = n("se3Y");
      e.exports = r;
      var i = c(!0),
        o = c(!1),
        a = c(null),
        l = c(void 0),
        u = c(0),
        s = c("");

      function c(e) {
        var t = new r(r._44);
        return (t._83 = 1), (t._18 = e), t;
      }
      (r.resolve = function (e) {
        if (e instanceof r) return e;
        if (null === e) return a;
        if (void 0 === e) return l;
        if (!0 === e) return i;
        if (!1 === e) return o;
        if (0 === e) return u;
        if ("" === e) return s;
        if ("object" == typeof e || "function" == typeof e)
          try {
            var t = e.then;
            if ("function" == typeof t) return new r(t.bind(e));
          } catch (e) {
            return new r(function (t, n) {
              n(e);
            });
          }
        return c(e);
      }),
        (r.all = function (e) {
          var t = Array.prototype.slice.call(e);
          return new r(function (e, n) {
            if (0 === t.length) return e([]);
            var i = t.length;

            function o(a, l) {
              if (l && ("object" == typeof l || "function" == typeof l)) {
                if (l instanceof r && l.then === r.prototype.then) {
                  for (; 3 === l._83; ) l = l._18;
                  return 1 === l._83
                    ? o(a, l._18)
                    : (2 === l._83 && n(l._18),
                      void l.then(function (e) {
                        o(a, e);
                      }, n));
                }
                var u = l.then;
                if ("function" == typeof u)
                  return void new r(u.bind(l)).then(function (e) {
                    o(a, e);
                  }, n);
              }
              (t[a] = l), 0 == --i && e(t);
            }
            for (var a = 0; a < t.length; a++) o(a, t[a]);
          });
        }),
        (r.reject = function (e) {
          return new r(function (t, n) {
            n(e);
          });
        }),
        (r.race = function (e) {
          return new r(function (t, n) {
            e.forEach(function (e) {
              r.resolve(e).then(t, n);
            });
          });
        }),
        (r.prototype.catch = function (e) {
          return this.then(null, e);
        });
    },
    O27J: function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (e) {
            console.error(e);
          }
      })(),
        (e.exports = n("/OLF"));
    },
    Q4WQ: function (e, t, n) {
      "use strict";
      var r = n("gt/O");

      function i() {}

      function o() {}
      (o.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, o, a) {
            if (a !== r) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }

          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    TFEX: function (e, t, n) {
      "use strict";
      t.a = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ctx,
          n = e.img,
          r = e.x,
          i = e.y,
          o = e.w,
          a = e.h,
          l = e.offsetX,
          u = e.offsetY;
        "number" != typeof r && (r = 0);
        "number" != typeof i && (i = 0);
        "number" != typeof o && (o = t.canvas.width);
        "number" != typeof a && (a = t.canvas.height);
        "number" != typeof l && (l = 0.5);
        "number" != typeof u && (u = 0.5);
        l < 0 && (l = 0);
        u < 0 && (u = 0);
        l > 1 && (l = 1);
        u > 1 && (u = 1);
        var s,
          c,
          f,
          d,
          p = n.width,
          h = n.height,
          m = Math.min(o / p, a / h),
          v = p * m,
          y = h * m,
          g = 1;
        v < o && (g = o / v);
        Math.abs(g - 1) < 1e-14 && y < a && (g = a / y);
        (c = (h - (d = h / ((y *= g) / a))) * u),
          (s = (p - (f = p / ((v *= g) / o))) * l) < 0 && (s = 0);
        c < 0 && (c = 0);
        f > p && (f = p);
        d > h && (d = h);
        t.drawImage(n, s, c, f, d, r, i, o, a);
      };
    },
    TjXQ: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.Point = t.Catenary = void 0);
      var r = o(n("gBnf")),
        i = o(n("FUgI"));

      function o(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      (t.Catenary = r.default), (t.Point = i.default);
    },
    WifJ: function (e, t, n) {
      "use strict";
      var r, i, o, a, l;
      if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var u = null,
          s = null,
          c = function () {
            if (null !== u)
              try {
                var e = t.unstable_now();
                u(!0, e), (u = null);
              } catch (e) {
                throw (setTimeout(c, 0), e);
              }
          },
          f = Date.now();
        (t.unstable_now = function () {
          return Date.now() - f;
        }),
          (r = function (e) {
            null !== u ? setTimeout(r, 0, e) : ((u = e), setTimeout(c, 0));
          }),
          (i = function (e, t) {
            s = setTimeout(e, t);
          }),
          (o = function () {
            clearTimeout(s);
          }),
          (a = function () {
            return !1;
          }),
          (l = t.unstable_forceFrameRate = function () {});
      } else {
        var d = window.performance,
          p = window.Date,
          h = window.setTimeout,
          m = window.clearTimeout;
        if ("undefined" != typeof console) {
          var v = window.cancelAnimationFrame;
          "function" != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            ),
            "function" != typeof v &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              );
        }
        if ("object" == typeof d && "function" == typeof d.now)
          t.unstable_now = function () {
            return d.now();
          };
        else {
          var y = p.now();
          t.unstable_now = function () {
            return p.now() - y;
          };
        }
        var g = !1,
          b = null,
          w = -1,
          x = 5,
          E = 0;
        (a = function () {
          return t.unstable_now() >= E;
        }),
          (l = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
                )
              : (x = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var k = new MessageChannel(),
          T = k.port2;
        (k.port1.onmessage = function () {
          if (null !== b) {
            var e = t.unstable_now();
            E = e + x;
            try {
              b(!0, e) ? T.postMessage(null) : ((g = !1), (b = null));
            } catch (e) {
              throw (T.postMessage(null), e);
            }
          } else g = !1;
        }),
          (r = function (e) {
            (b = e), g || ((g = !0), T.postMessage(null));
          }),
          (i = function (e, n) {
            w = h(function () {
              e(t.unstable_now());
            }, n);
          }),
          (o = function () {
            m(w), (w = -1);
          });
      }

      function _(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            i = e[r];
          if (!(void 0 !== i && 0 < P(i, t))) break e;
          (e[r] = t), (e[n] = i), (n = r);
        }
      }

      function S(e) {
        return void 0 === (e = e[0]) ? null : e;
      }

      function C(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length; r < i; ) {
              var o = 2 * (r + 1) - 1,
                a = e[o],
                l = o + 1,
                u = e[l];
              if (void 0 !== a && 0 > P(a, n))
                void 0 !== u && 0 > P(u, a)
                  ? ((e[r] = u), (e[l] = n), (r = l))
                  : ((e[r] = a), (e[o] = n), (r = o));
              else {
                if (!(void 0 !== u && 0 > P(u, n))) break e;
                (e[r] = u), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        return null;
      }

      function P(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var O = [],
        R = [],
        M = 1,
        z = null,
        D = 3,
        N = !1,
        I = !1,
        L = !1;

      function F(e) {
        for (var t = S(R); null !== t; ) {
          if (null === t.callback) C(R);
          else {
            if (!(t.startTime <= e)) break;
            C(R), (t.sortIndex = t.expirationTime), _(O, t);
          }
          t = S(R);
        }
      }

      function A(e) {
        if (((L = !1), F(e), !I))
          if (null !== S(O)) (I = !0), r(j);
          else {
            var t = S(R);
            null !== t && i(A, t.startTime - e);
          }
      }

      function j(e, n) {
        (I = !1), L && ((L = !1), o()), (N = !0);
        var r = D;
        try {
          for (
            F(n), z = S(O);
            null !== z && (!(z.expirationTime > n) || (e && !a()));

          ) {
            var l = z.callback;
            if (null !== l) {
              (z.callback = null), (D = z.priorityLevel);
              var u = l(z.expirationTime <= n);
              (n = t.unstable_now()),
                "function" == typeof u ? (z.callback = u) : z === S(O) && C(O),
                F(n);
            } else C(O);
            z = S(O);
          }
          if (null !== z) var s = !0;
          else {
            var c = S(R);
            null !== c && i(A, c.startTime - n), (s = !1);
          }
          return s;
        } finally {
          (z = null), (D = r), (N = !1);
        }
      }

      function U(e) {
        switch (e) {
          case 1:
            return -1;
          case 2:
            return 250;
          case 5:
            return 1073741823;
          case 4:
            return 1e4;
          default:
            return 5e3;
        }
      }
      var B = l;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          I || N || ((I = !0), r(j));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return D;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return S(O);
        }),
        (t.unstable_next = function (e) {
          switch (D) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = D;
          }
          var n = D;
          D = t;
          try {
            return e();
          } finally {
            D = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = B),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = D;
          D = e;
          try {
            return t();
          } finally {
            D = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, a) {
          var l = t.unstable_now();
          if ("object" == typeof a && null !== a) {
            var u = a.delay;
            (u = "number" == typeof u && 0 < u ? l + u : l),
              (a = "number" == typeof a.timeout ? a.timeout : U(e));
          } else (a = U(e)), (u = l);
          return (
            (e = {
              id: M++,
              callback: n,
              priorityLevel: e,
              startTime: u,
              expirationTime: (a = u + a),
              sortIndex: -1,
            }),
            u > l
              ? ((e.sortIndex = u),
                _(R, e),
                null === S(O) &&
                  e === S(R) &&
                  (L ? o() : (L = !0), i(A, u - l)))
              : ((e.sortIndex = a), _(O, e), I || N || ((I = !0), r(j))),
            e
          );
        }),
        (t.unstable_shouldYield = function () {
          var e = t.unstable_now();
          F(e);
          var n = S(O);
          return (
            (n !== z &&
              null !== z &&
              null !== n &&
              null !== n.callback &&
              n.startTime <= e &&
              n.expirationTime < z.expirationTime) ||
            a()
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = D;
          return function () {
            var n = D;
            D = t;
            try {
              return e.apply(this, arguments);
            } finally {
              D = n;
            }
          };
        });
    },
    bJHr: function (e, t, n) {
      "use strict";
      var r = n("se3Y"),
        i = [ReferenceError, TypeError, RangeError],
        o = !1;

      function a() {
        (o = !1), (r._47 = null), (r._71 = null);
      }

      function l(e, t) {
        return t.some(function (t) {
          return e instanceof t;
        });
      }
      (t.disable = a),
        (t.enable = function (e) {
          (e = e || {}), o && a();
          o = !0;
          var t = 0,
            n = 0,
            u = {};

          function s(t) {
            (e.allRejections || l(u[t].error, e.whitelist || i)) &&
              ((u[t].displayId = n++),
              e.onUnhandled
                ? ((u[t].logged = !0),
                  e.onUnhandled(u[t].displayId, u[t].error))
                : ((u[t].logged = !0),
                  (function (e, t) {
                    console.warn(
                      "Possible Unhandled Promise Rejection (id: " + e + "):"
                    ),
                      ((t && (t.stack || t)) + "")
                        .split("\n")
                        .forEach(function (e) {
                          console.warn("  " + e);
                        });
                  })(u[t].displayId, u[t].error)));
          }
          (r._47 = function (t) {
            var n;
            2 === t._83 &&
              u[t._56] &&
              (u[t._56].logged
                ? ((n = t._56),
                  u[n].logged &&
                    (e.onHandled
                      ? e.onHandled(u[n].displayId, u[n].error)
                      : u[n].onUnhandled ||
                        (console.warn(
                          "Promise Rejection Handled (id: " +
                            u[n].displayId +
                            "):"
                        ),
                        console.warn(
                          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
                            u[n].displayId +
                            "."
                        ))))
                : clearTimeout(u[t._56].timeout),
              delete u[t._56]);
          }),
            (r._71 = function (e, n) {
              0 === e._75 &&
                ((e._56 = t++),
                (u[e._56] = {
                  displayId: null,
                  error: n,
                  timeout: setTimeout(s.bind(null, e._56), l(n, i) ? 100 : 2e3),
                  logged: !1,
                }));
            });
        });
    },
    ctQG: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r = n("GiK3"),
        i = n.n(r),
        o = n("O27J"),
        a = (n.n(o), n("lVK7")),
        l = n("hOtA"),
        u = n.n(l);

      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var c = (function (e) {
        function t() {
          var n, r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var i = arguments.length, o = Array(i), a = 0; a < i; a++)
            o[a] = arguments[a];
          return (
            (n = r = s(this, e.call.apply(e, [this].concat(o)))),
            (r.state = {
              color: "#ffc600",
              width: 400,
              height: 400,
              brushRadius: 10,
              lazyRadius: 12,
            }),
            s(r, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          (t.prototype.componentDidMount = function () {
            var e = this;
            window.setInterval(function () {
              e.setState({
                color: "#" + Math.floor(16777215 * Math.random()).toString(16),
              });
            }, 2e3);
          }),
          (t.prototype.render = function () {
            var e = this;
            return i.a.createElement(
              "div",
              null,
              i.a.createElement("h1", null, "React Canvas Draw"),
              i.a.createElement("iframe", {
                title: "GitHub link",
                src: "https://ghbtns.com/github-btn.html?user=embiem&repo=react-canvas-draw&type=star&count=true",
                frameBorder: "0",
                scrolling: "0",
                width: "160px",
                height: "30px",
              }),
              i.a.createElement("h2", null, "default"),
              i.a.createElement(
                "p",
                null,
                "This is a simple ",
                i.a.createElement("span", null, "<CanvasDraw />"),
                " component with default values."
              ),
              i.a.createElement(
                "p",
                null,
                "Try it out! Draw on this white canvas:"
              ),
              i.a.createElement(a.a, {
                onChange: function () {
                  return console.log("onChange");
                },
              }),
              i.a.createElement("h2", null, "Custom Brush-Color"),
              i.a.createElement(
                "p",
                null,
                "Let's spice things up by using custom brush colors",
                " ",
                i.a.createElement(
                  "span",
                  null,
                  "<CanvasDraw brushColor={this.state.color} />"
                ),
                ". We randomly change them every 2 seconds. But you could easily use a color-picker!"
              ),
              i.a.createElement(
                "div",
                null,
                "Current color:",
                " ",
                i.a.createElement("div", {
                  style: {
                    display: "inline-block",
                    width: "24px",
                    height: "24px",
                    backgroundColor: this.state.color,
                    border: "1px solid #272727",
                  },
                })
              ),
              i.a.createElement(a.a, {
                brushColor: this.state.color,
              }),
              i.a.createElement("h2", null, "Background Image"),
              i.a.createElement(
                "p",
                null,
                "You can also set the `imgSrc` prop to draw on a background-image."
              ),
              i.a.createElement(
                "p",
                null,
                "It will automatically resize to fit the canvas and centered vertically & horizontally."
              ),
              i.a.createElement(a.a, {
                brushColor: "rgba(155,12,60,0.3)",
                imgSrc:
                  "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
              }),
              i.a.createElement("h2", null, "Hide UI"),
              i.a.createElement(
                "p",
                null,
                "To hide the UI elements, set the `hideInterface` prop. You can also hide the grid with the `hideGrid` prop."
              ),
              i.a.createElement(a.a, {
                hideInterface: !0,
                hideGrid: !0,
              }),
              i.a.createElement("h2", null, "Save & Load"),
              i.a.createElement(
                "p",
                null,
                "This part got me most excited. Very easy to use saving and loading of drawings. It even comes with a customizable loading speed to control whether your drawing should load instantly (loadTimeOffset = 0) or appear after some time (loadTimeOffset > 0)",
                " ",
                i.a.createElement(
                  "span",
                  null,
                  "<CanvasDraw loadTimeOffset={10} />"
                )
              ),
              i.a.createElement(
                "p",
                null,
                'Try it out! Draw something, hit "Save" and then "Load".'
              ),
              i.a.createElement(
                "div",
                {
                  className: u.a.tools,
                },
                i.a.createElement(
                  "button",
                  {
                    onClick: function () {
                      localStorage.setItem(
                        "savedDrawing",
                        e.saveableCanvas.getSaveData()
                      );
                    },
                  },
                  "Save"
                ),
                i.a.createElement(
                  "button",
                  {
                    onClick: function () {
                      e.saveableCanvas.clear();
                    },
                  },
                  "Clear"
                ),
                i.a.createElement(
                  "button",
                  {
                    onClick: function () {
                      e.saveableCanvas.undo();
                    },
                  },
                  "Undo"
                ),
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement("label", null, "Width:"),
                  i.a.createElement("input", {
                    type: "number",
                    value: this.state.width,
                    onChange: function (t) {
                      return e.setState({
                        width: parseInt(t.target.value, 10),
                      });
                    },
                  })
                ),
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement("label", null, "Height:"),
                  i.a.createElement("input", {
                    type: "number",
                    value: this.state.height,
                    onChange: function (t) {
                      return e.setState({
                        height: parseInt(t.target.value, 10),
                      });
                    },
                  })
                ),
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement("label", null, "Brush-Radius:"),
                  i.a.createElement("input", {
                    type: "number",
                    value: this.state.brushRadius,
                    onChange: function (t) {
                      return e.setState({
                        brushRadius: parseInt(t.target.value, 10),
                      });
                    },
                  })
                ),
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement("label", null, "Lazy-Radius:"),
                  i.a.createElement("input", {
                    type: "number",
                    value: this.state.lazyRadius,
                    onChange: function (t) {
                      return e.setState({
                        lazyRadius: parseInt(t.target.value, 10),
                      });
                    },
                  })
                )
              ),
              i.a.createElement(a.a, {
                ref: function (t) {
                  return (e.saveableCanvas = t);
                },
                brushColor: this.state.color,
                brushRadius: this.state.brushRadius,
                lazyRadius: this.state.lazyRadius,
                canvasWidth: this.state.width,
                canvasHeight: this.state.height,
              }),
              i.a.createElement(
                "p",
                null,
                "The following is a disabled canvas with a hidden grid that we use to load & show your saved drawing."
              ),
              i.a.createElement(
                "button",
                {
                  onClick: function () {
                    e.loadableCanvas.loadSaveData(
                      localStorage.getItem("savedDrawing")
                    );
                  },
                },
                "Load what you saved previously into the following canvas. Either by calling `loadSaveData()` on the component's reference or passing it the `saveData` prop:"
              ),
              i.a.createElement(a.a, {
                disabled: !0,
                hideGrid: !0,
                ref: function (t) {
                  return (e.loadableCanvas = t);
                },
                saveData: localStorage.getItem("savedDrawing"),
              }),
              i.a.createElement(
                "p",
                null,
                "The saving & loading also takes different dimensions into account. Change the width & height, draw something and save it and then load it into the disabled canvas. It will load your previously saved masterpiece scaled to the current canvas dimensions."
              ),
              i.a.createElement(
                "p",
                null,
                "That's it for now! Take a look at the",
                " ",
                i.a.createElement(
                  "a",
                  {
                    href: "https://github.com/mBeierl/react-canvas-draw/tree/master/demo/src",
                  },
                  "source code of these examples"
                ),
                "."
              )
            );
          }),
          t
        );
      })(r.Component);
      Object(o.render)(
        i.a.createElement(c, null),
        document.querySelector("#demo")
      );
    },
    ef5b: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.LazyPoint = t.Point = t.LazyBrush = void 0);
      var r = a(n("00be")),
        i = a(n("gJOW")),
        o = a(n("g5E5"));

      function a(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      (t.LazyBrush = r.default),
        (t.Point = i.default),
        (t.LazyPoint = o.default);
    },
    g5E5: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r,
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n("gJOW"),
        a =
          (r = o) && r.__esModule
            ? r
            : {
                default: r,
              };
      var l = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, a.default),
          i(t, [
            {
              key: "update",
              value: function (e) {
                (this.x = e.x), (this.y = e.y);
              },
            },
            {
              key: "moveByAngle",
              value: function (e, t) {
                var n = e + Math.PI / 2;
                (this.x = this.x + Math.sin(n) * t),
                  (this.y = this.y - Math.cos(n) * t);
              },
            },
            {
              key: "equalsTo",
              value: function (e) {
                return this.x === e.x && this.y === e.y;
              },
            },
            {
              key: "getDifferenceTo",
              value: function (e) {
                return new a.default(this.x - e.x, this.y - e.y);
              },
            },
            {
              key: "getDistanceTo",
              value: function (e) {
                var t = this.getDifferenceTo(e);
                return Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2));
              },
            },
            {
              key: "getAngleTo",
              value: function (e) {
                var t = this.getDifferenceTo(e);
                return Math.atan2(t.y, t.x);
              },
            },
            {
              key: "toObject",
              value: function () {
                return {
                  x: this.x,
                  y: this.y,
                };
              },
            },
          ]),
          t
        );
      })();
      t.default = l;
    },
    gBnf: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r,
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n("FUgI"),
        a =
          (r = o) && r.__esModule
            ? r
            : {
                default: r,
              };
      var l = (function () {
        function e() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.segments,
            r = void 0 === n ? 50 : n,
            i = t.iterationLimit,
            o = void 0 === i ? 100 : i;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.p1 = new a.default()),
            (this.p2 = new a.default()),
            (this.segments = r),
            (this.iterationLimit = o);
        }
        return (
          i(e, [
            {
              key: "drawToCanvas",
              value: function (e, t, n, r) {
                this.p1.update(t), this.p2.update(n);
                var i = this.p1.x > this.p2.x,
                  o = i ? this.p2 : this.p1,
                  a = i ? this.p1 : this.p2,
                  l = [],
                  u = !0;
                if (o.getDistanceTo(a) < r)
                  if (a.x - o.x > 0.01) {
                    var s = a.x - o.x,
                      c = a.y - o.y,
                      f = -this.getCatenaryParameter(
                        s,
                        c,
                        r,
                        this.iterationLimit
                      ),
                      d = 0.5 * (f * Math.log((r + c) / (r - c)) - s),
                      p = f * Math.cosh(d / f),
                      h = o.x - d,
                      m = o.y - p;
                    (l = this.getCurve(f, o, a, h, m, this.segments)), (u = !1);
                  } else {
                    var v = 0.5 * (o.x + a.x),
                      y = 0.5 * (o.y + a.y + r);
                    l = [
                      [o.x, o.y],
                      [v, y],
                      [a.x, a.y],
                    ];
                  }
                else
                  l = [
                    [o.x, o.y],
                    [a.x, a.y],
                  ];
                return u ? this.drawLine(l, e) : this.drawCurve(l, e), l;
              },
            },
            {
              key: "getCatenaryParameter",
              value: function (e, t, n, r) {
                for (
                  var i = Math.sqrt(n * n - t * t) / e,
                    o = Math.acosh(i) + 1,
                    a = -1,
                    l = 0;
                  Math.abs(o - a) > 1e-6 && l < r;

                )
                  (a = o),
                    (o -= (Math.sinh(o) - i * o) / (Math.cosh(o) - i)),
                    l++;
                return e / (2 * o);
              },
            },
            {
              key: "getCurve",
              value: function (e, t, n, r, i, o) {
                for (
                  var a = [t.x, e * Math.cosh((t.x - r) / e) + i],
                    l = n.x - t.x,
                    u = o - 1,
                    s = 0;
                  s < u;
                  s++
                ) {
                  var c = t.x + (l * (s + 0.5)) / u,
                    f = e * Math.cosh((c - r) / e) + i;
                  a.push(c, f);
                }
                return a.push(n.x, e * Math.cosh((n.x - r) / e) + i), a;
              },
            },
            {
              key: "drawLine",
              value: function (e, t) {
                t.moveTo(e[0][0], e[0][1]), t.lineTo(e[1][0], e[1][1]);
              },
            },
            {
              key: "drawCurve",
              value: function (e, t) {
                var n = 0.5 * e.length - 1,
                  r = e[2],
                  i = e[3],
                  o = [];
                t.moveTo(e[0], e[1]);
                for (var a = 2; a < n; a++) {
                  var l = e[2 * a],
                    u = e[2 * a + 1],
                    s = 0.5 * (l + r),
                    c = 0.5 * (u + i);
                  o.push([r, i, s, c]),
                    t.quadraticCurveTo(r, i, s, c),
                    (r = l),
                    (i = u);
                }
                return (
                  (n = e.length),
                  t.quadraticCurveTo(e[n - 4], e[n - 3], e[n - 2], e[n - 1]),
                  o
                );
              },
            },
          ]),
          e
        );
      })();
      t.default = l;
    },
    gJOW: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      t.default = function e(t, n) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.x = t),
          (this.y = n);
      };
    },
    "gt/O": function (e, t, n) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    hOtA: function (e, t) {
      e.exports = {
        tools: "tools__1M_fu",
      };
    },
    lVK7: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      });
      var r,
        i,
        o = n("GiK3"),
        a = n.n(o),
        l = n("KSGD"),
        u = n.n(l),
        s = n("ef5b"),
        c = (n.n(s), n("TjXQ")),
        f = (n.n(c), n("z+gd")),
        d = n("TFEX"),
        p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };

      function h(e, t) {
        return {
          x: e.x + (t.x - e.x) / 2,
          y: e.y + (t.y - e.y) / 2,
        };
      }
      var m = {
          display: "block",
          position: "absolute",
        },
        v = [
          {
            name: "interface",
            zIndex: 15,
          },
          {
            name: "drawing",
            zIndex: 11,
          },
          {
            name: "temp",
            zIndex: 12,
          },
          {
            name: "grid",
            zIndex: 10,
          },
        ],
        y = u.a.oneOfType([u.a.number, u.a.string]),
        g =
          ((i = r =
            (function (e) {
              function t(n) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var r = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(this, e.call(this, n));
                return (
                  (r.componentWillUnmount = function () {
                    r.canvasObserver.unobserve(r.canvasContainer);
                  }),
                  (r.drawImage = function () {
                    r.props.imgSrc &&
                      ((r.image = new Image()),
                      (r.image.crossOrigin = "anonymous"),
                      (r.image.onload = function () {
                        return Object(d.a)({
                          ctx: r.ctx.grid,
                          img: r.image,
                        });
                      }),
                      (r.image.src = r.props.imgSrc));
                  }),
                  (r.undo = function () {
                    var e = r.lines.slice(0, -1);
                    r.clear(),
                      r.simulateDrawingLines({
                        lines: e,
                        immediate: !0,
                      }),
                      r.triggerOnChange();
                  }),
                  (r.getSaveData = function () {
                    return JSON.stringify({
                      lines: r.lines,
                      width: r.props.canvasWidth,
                      height: r.props.canvasHeight,
                    });
                  }),
                  (r.loadSaveData = function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : r.props.immediateLoading;
                    if ("string" != typeof e)
                      throw new Error("saveData needs to be of type string!");
                    var n = JSON.parse(e),
                      i = n.lines,
                      o = n.width,
                      a = n.height;
                    if (!i || "function" != typeof i.push)
                      throw new Error("saveData.lines needs to be an array!");
                    if (
                      (r.clear(),
                      o === r.props.canvasWidth && a === r.props.canvasHeight)
                    )
                      r.simulateDrawingLines({
                        lines: i,
                        immediate: t,
                      });
                    else {
                      var l = r.props.canvasWidth / o,
                        u = r.props.canvasHeight / a,
                        s = (l + u) / 2;
                      r.simulateDrawingLines({
                        lines: i.map(function (e) {
                          return p({}, e, {
                            points: e.points.map(function (e) {
                              return {
                                x: e.x * l,
                                y: e.y * u,
                              };
                            }),
                            brushRadius: e.brushRadius * s,
                          });
                        }),
                        immediate: t,
                      });
                    }
                  }),
                  (r.simulateDrawingLines = function (e) {
                    var t = e.lines,
                      n = e.immediate,
                      i = 0,
                      o = n ? 0 : r.props.loadTimeOffset;
                    t.forEach(function (e) {
                      var t = e.points,
                        a = e.brushColor,
                        l = e.brushRadius;
                      if (n)
                        return (
                          r.drawPoints({
                            points: t,
                            brushColor: a,
                            brushRadius: l,
                          }),
                          (r.points = t),
                          void r.saveLine({
                            brushColor: a,
                            brushRadius: l,
                          })
                        );
                      for (
                        var u = function (e) {
                            (i += o),
                              window.setTimeout(function () {
                                r.drawPoints({
                                  points: t.slice(0, e + 1),
                                  brushColor: a,
                                  brushRadius: l,
                                });
                              }, i);
                          },
                          s = 1;
                        s < t.length;
                        s++
                      )
                        u(s);
                      (i += o),
                        window.setTimeout(function () {
                          (r.points = t),
                            r.saveLine({
                              brushColor: a,
                              brushRadius: l,
                            });
                        }, i);
                    });
                  }),
                  (r.handleDrawStart = function (e) {
                    e.preventDefault(), (r.isPressing = !0);
                    var t = r.getPointerPos(e),
                      n = t.x,
                      i = t.y;
                    e.touches &&
                      e.touches.length > 0 &&
                      r.lazy.update(
                        {
                          x: n,
                          y: i,
                        },
                        {
                          both: !0,
                        }
                      ),
                      r.handlePointerMove(n, i);
                  }),
                  (r.handleDrawMove = function (e) {
                    e.preventDefault();
                    var t = r.getPointerPos(e),
                      n = t.x,
                      i = t.y;
                    r.handlePointerMove(n, i);
                  }),
                  (r.handleDrawEnd = function (e) {
                    e.preventDefault(),
                      r.handleDrawMove(e),
                      (r.isDrawing = !1),
                      (r.isPressing = !1),
                      r.saveLine();
                  }),
                  (r.handleCanvasResize = function (e, t) {
                    var n = r.getSaveData(),
                      i = e,
                      o = Array.isArray(i),
                      a = 0;
                    for (i = o ? i : i[Symbol.iterator](); ; ) {
                      var l;
                      if (o) {
                        if (a >= i.length) break;
                        l = i[a++];
                      } else {
                        if ((a = i.next()).done) break;
                        l = a.value;
                      }
                      var u = l.contentRect,
                        s = u.width,
                        c = u.height;
                      r.setCanvasSize(r.canvas.interface, s, c),
                        r.setCanvasSize(r.canvas.drawing, s, c),
                        r.setCanvasSize(r.canvas.temp, s, c),
                        r.setCanvasSize(r.canvas.grid, s, c),
                        r.drawGrid(r.ctx.grid),
                        r.drawImage(),
                        r.loop({
                          once: !0,
                        });
                    }
                    r.loadSaveData(n, !0);
                  }),
                  (r.setCanvasSize = function (e, t, n) {
                    (e.width = t),
                      (e.height = n),
                      (e.style.width = t),
                      (e.style.height = n);
                  }),
                  (r.getPointerPos = function (e) {
                    var t = r.canvas.interface.getBoundingClientRect(),
                      n = e.clientX,
                      i = e.clientY;
                    return (
                      e.changedTouches &&
                        e.changedTouches.length > 0 &&
                        ((n = e.changedTouches[0].clientX),
                        (i = e.changedTouches[0].clientY)),
                      {
                        x: n - t.left,
                        y: i - t.top,
                      }
                    );
                  }),
                  (r.handlePointerMove = function (e, t) {
                    if (!r.props.disabled) {
                      r.lazy.update({
                        x: e,
                        y: t,
                      });
                      var n = !r.lazy.isEnabled();
                      ((r.isPressing && !r.isDrawing) || (n && r.isPressing)) &&
                        ((r.isDrawing = !0),
                        r.points.push(r.lazy.brush.toObject())),
                        r.isDrawing &&
                          (r.points.push(r.lazy.brush.toObject()),
                          r.drawPoints({
                            points: r.points,
                            brushColor: r.props.brushColor,
                            brushRadius: r.props.brushRadius,
                          })),
                        (r.mouseHasMoved = !0);
                    }
                  }),
                  (r.drawPoints = function (e) {
                    var t = e.points,
                      n = e.brushColor,
                      i = e.brushRadius;
                    (r.ctx.temp.lineJoin = "round"),
                      (r.ctx.temp.lineCap = "round"),
                      (r.ctx.temp.strokeStyle = n),
                      r.ctx.temp.clearRect(
                        0,
                        0,
                        r.ctx.temp.canvas.width,
                        r.ctx.temp.canvas.height
                      ),
                      (r.ctx.temp.lineWidth = 2 * i);
                    var o = t[0],
                      a = t[1];
                    r.ctx.temp.moveTo(a.x, a.y), r.ctx.temp.beginPath();
                    for (var l = 1, u = t.length; l < u; l++) {
                      var s = h(o, a);
                      r.ctx.temp.quadraticCurveTo(o.x, o.y, s.x, s.y),
                        (o = t[l]),
                        (a = t[l + 1]);
                    }
                    r.ctx.temp.lineTo(o.x, o.y), r.ctx.temp.stroke();
                  }),
                  (r.saveLine = function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.brushColor,
                      n = e.brushRadius;
                    if (!(r.points.length < 2)) {
                      r.lines.push({
                        points: [].concat(r.points),
                        brushColor: t || r.props.brushColor,
                        brushRadius: n || r.props.brushRadius,
                      }),
                        (r.points.length = 0);
                      var i = r.canvas.temp.width,
                        o = r.canvas.temp.height;
                      r.ctx.drawing.drawImage(r.canvas.temp, 0, 0, i, o),
                        r.ctx.temp.clearRect(0, 0, i, o),
                        r.triggerOnChange();
                    }
                  }),
                  (r.triggerOnChange = function () {
                    r.props.onChange && r.props.onChange(r);
                  }),
                  (r.clear = function () {
                    (r.lines = []),
                      (r.valuesChanged = !0),
                      r.ctx.drawing.clearRect(
                        0,
                        0,
                        r.canvas.drawing.width,
                        r.canvas.drawing.height
                      ),
                      r.ctx.temp.clearRect(
                        0,
                        0,
                        r.canvas.temp.width,
                        r.canvas.temp.height
                      );
                  }),
                  (r.loop = function () {
                    var e = (
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {}
                      ).once,
                      t = void 0 !== e && e;
                    if (r.mouseHasMoved || r.valuesChanged) {
                      var n = r.lazy.getPointerCoordinates(),
                        i = r.lazy.getBrushCoordinates();
                      r.drawInterface(r.ctx.interface, n, i),
                        (r.mouseHasMoved = !1),
                        (r.valuesChanged = !1);
                    }
                    t ||
                      window.requestAnimationFrame(function () {
                        r.loop();
                      });
                  }),
                  (r.drawGrid = function (e) {
                    if (!r.props.hideGrid) {
                      e.clearRect(0, 0, e.canvas.width, e.canvas.height),
                        e.beginPath(),
                        e.setLineDash([5, 1]),
                        e.setLineDash([]),
                        (e.strokeStyle = r.props.gridColor),
                        (e.lineWidth = 0.5);
                      for (var t = 0; t < e.canvas.width; )
                        (t += 25), e.moveTo(t, 0), e.lineTo(t, e.canvas.height);
                      e.stroke();
                      for (var n = 0; n < e.canvas.height; )
                        (n += 25), e.moveTo(0, n), e.lineTo(e.canvas.width, n);
                      e.stroke();
                    }
                  }),
                  (r.drawInterface = function (e, t, n) {
                    r.props.hideInterface ||
                      (e.clearRect(0, 0, e.canvas.width, e.canvas.height),
                      e.beginPath(),
                      (e.fillStyle = r.props.brushColor),
                      e.arc(n.x, n.y, r.props.brushRadius, 0, 2 * Math.PI, !0),
                      e.fill(),
                      e.beginPath(),
                      (e.fillStyle = r.props.catenaryColor),
                      e.arc(t.x, t.y, 4, 0, 2 * Math.PI, !0),
                      e.fill(),
                      r.lazy.isEnabled() &&
                        (e.beginPath(),
                        (e.lineWidth = 2),
                        (e.lineCap = "round"),
                        e.setLineDash([2, 4]),
                        (e.strokeStyle = r.props.catenaryColor),
                        r.catenary.drawToCanvas(
                          r.ctx.interface,
                          n,
                          t,
                          r.chainLength
                        ),
                        e.stroke()),
                      e.beginPath(),
                      (e.fillStyle = r.props.catenaryColor),
                      e.arc(n.x, n.y, 2, 0, 2 * Math.PI, !0),
                      e.fill());
                  }),
                  (r.canvas = {}),
                  (r.ctx = {}),
                  (r.catenary = new c.Catenary()),
                  (r.points = []),
                  (r.lines = []),
                  (r.mouseHasMoved = !0),
                  (r.valuesChanged = !0),
                  (r.isDrawing = !1),
                  (r.isPressing = !1),
                  r
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                (t.prototype.componentDidMount = function () {
                  var e = this;
                  (this.lazy = new s.LazyBrush({
                    radius: this.props.lazyRadius * window.devicePixelRatio,
                    enabled: !0,
                    initialPoint: {
                      x: window.innerWidth / 2,
                      y: window.innerHeight / 2,
                    },
                  })),
                    (this.chainLength =
                      this.props.lazyRadius * window.devicePixelRatio),
                    (this.canvasObserver = new f.a(function (t, n) {
                      return e.handleCanvasResize(t, n);
                    })),
                    this.canvasObserver.observe(this.canvasContainer),
                    this.drawImage(),
                    this.loop(),
                    window.setTimeout(function () {
                      var t = window.innerWidth / 2,
                        n = window.innerHeight / 2;
                      e.lazy.update(
                        {
                          x: t - e.chainLength / 4,
                          y: n,
                        },
                        {
                          both: !0,
                        }
                      ),
                        e.lazy.update(
                          {
                            x: t + e.chainLength / 4,
                            y: n,
                          },
                          {
                            both: !1,
                          }
                        ),
                        (e.mouseHasMoved = !0),
                        (e.valuesChanged = !0),
                        e.clear(),
                        e.props.saveData && e.loadSaveData(e.props.saveData);
                    }, 100);
                }),
                (t.prototype.componentDidUpdate = function (e) {
                  e.lazyRadius !== this.props.lazyRadius &&
                    ((this.chainLength =
                      this.props.lazyRadius * window.devicePixelRatio),
                    this.lazy.setRadius(
                      this.props.lazyRadius * window.devicePixelRatio
                    )),
                    e.saveData !== this.props.saveData &&
                      this.loadSaveData(this.props.saveData),
                    JSON.stringify(e) !== JSON.stringify(this.props) &&
                      (this.valuesChanged = !0);
                }),
                (t.prototype.render = function () {
                  var e = this;
                  return a.a.createElement(
                    "div",
                    {
                      className: this.props.className,
                      style: p(
                        {
                          display: "block",
                          background: this.props.backgroundColor,
                          touchAction: "none",
                          width: this.props.canvasWidth,
                          height: this.props.canvasHeight,
                        },
                        this.props.style
                      ),
                      ref: function (t) {
                        t && (e.canvasContainer = t);
                      },
                    },
                    v.map(function (t) {
                      var n = t.name,
                        r = t.zIndex,
                        i = "interface" === n;
                      return a.a.createElement("canvas", {
                        key: n,
                        ref: function (t) {
                          t &&
                            ((e.canvas[n] = t),
                            (e.ctx[n] = t.getContext("2d")));
                        },
                        style: p({}, m, {
                          zIndex: r,
                        }),
                        onMouseDown: i ? e.handleDrawStart : void 0,
                        onMouseMove: i ? e.handleDrawMove : void 0,
                        onMouseUp: i ? e.handleDrawEnd : void 0,
                        onMouseOut: i ? e.handleDrawEnd : void 0,
                        onTouchStart: i ? e.handleDrawStart : void 0,
                        onTouchMove: i ? e.handleDrawMove : void 0,
                        onTouchEnd: i ? e.handleDrawEnd : void 0,
                        onTouchCancel: i ? e.handleDrawEnd : void 0,
                      });
                    })
                  );
                }),
                t
              );
            })(o.PureComponent)),
          (r.propTypes = {
            onChange: u.a.func,
            loadTimeOffset: u.a.number,
            lazyRadius: u.a.number,
            brushRadius: u.a.number,
            brushColor: u.a.string,
            catenaryColor: u.a.string,
            gridColor: u.a.string,
            backgroundColor: u.a.string,
            hideGrid: u.a.bool,
            canvasWidth: y,
            canvasHeight: y,
            disabled: u.a.bool,
            imgSrc: u.a.string,
            saveData: u.a.string,
            immediateLoading: u.a.bool,
            hideInterface: u.a.bool,
          }),
          (r.defaultProps = {
            onChange: null,
            loadTimeOffset: 5,
            lazyRadius: 12,
            brushRadius: 10,
            brushColor: "#444",
            catenaryColor: "#0a0302",
            gridColor: "rgba(150,150,150,0.17)",
            backgroundColor: "#FFF",
            hideGrid: !1,
            canvasWidth: 400,
            canvasHeight: 400,
            disabled: !1,
            imgSrc: "",
            saveData: "",
            immediateLoading: !1,
            hideInterface: !1,
          }),
          i);
    },
    rplX: function (e, t) {
      !(function (e) {
        "use strict";
        if (!e.fetch) {
          var t = {
            searchParams: "URLSearchParams" in e,
            iterable: "Symbol" in e && "iterator" in Symbol,
            blob:
              "FileReader" in e &&
              "Blob" in e &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            formData: "FormData" in e,
            arrayBuffer: "ArrayBuffer" in e,
          };
          if (t.arrayBuffer)
            var n = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              r = function (e) {
                return e && DataView.prototype.isPrototypeOf(e);
              },
              i =
                ArrayBuffer.isView ||
                function (e) {
                  return e && n.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          (c.prototype.append = function (e, t) {
            (e = l(e)), (t = u(t));
            var n = this.map[e];
            this.map[e] = n ? n + "," + t : t;
          }),
            (c.prototype.delete = function (e) {
              delete this.map[l(e)];
            }),
            (c.prototype.get = function (e) {
              return (e = l(e)), this.has(e) ? this.map[e] : null;
            }),
            (c.prototype.has = function (e) {
              return this.map.hasOwnProperty(l(e));
            }),
            (c.prototype.set = function (e, t) {
              this.map[l(e)] = u(t);
            }),
            (c.prototype.forEach = function (e, t) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
            }),
            (c.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                s(e)
              );
            }),
            (c.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                s(e)
              );
            }),
            (c.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                s(e)
              );
            }),
            t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
          var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          (v.prototype.clone = function () {
            return new v(this, {
              body: this._bodyInit,
            });
          }),
            m.call(v.prototype),
            m.call(g.prototype),
            (g.prototype.clone = function () {
              return new g(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new c(this.headers),
                url: this.url,
              });
            }),
            (g.error = function () {
              var e = new g(null, {
                status: 0,
                statusText: "",
              });
              return (e.type = "error"), e;
            });
          var a = [301, 302, 303, 307, 308];
          (g.redirect = function (e, t) {
            if (-1 === a.indexOf(t))
              throw new RangeError("Invalid status code");
            return new g(null, {
              status: t,
              headers: {
                location: e,
              },
            });
          }),
            (e.Headers = c),
            (e.Request = v),
            (e.Response = g),
            (e.fetch = function (e, n) {
              return new Promise(function (r, i) {
                var o = new v(e, n),
                  a = new XMLHttpRequest();
                (a.onload = function () {
                  var e,
                    t,
                    n = {
                      status: a.status,
                      statusText: a.statusText,
                      headers:
                        ((e = a.getAllResponseHeaders() || ""),
                        (t = new c()),
                        e.split(/\r?\n/).forEach(function (e) {
                          var n = e.split(":"),
                            r = n.shift().trim();
                          if (r) {
                            var i = n.join(":").trim();
                            t.append(r, i);
                          }
                        }),
                        t),
                    };
                  n.url =
                    "responseURL" in a
                      ? a.responseURL
                      : n.headers.get("X-Request-URL");
                  var i = "response" in a ? a.response : a.responseText;
                  r(new g(i, n));
                }),
                  (a.onerror = function () {
                    i(new TypeError("Network request failed"));
                  }),
                  (a.ontimeout = function () {
                    i(new TypeError("Network request failed"));
                  }),
                  a.open(o.method, o.url, !0),
                  "include" === o.credentials && (a.withCredentials = !0),
                  "responseType" in a && t.blob && (a.responseType = "blob"),
                  o.headers.forEach(function (e, t) {
                    a.setRequestHeader(t, e);
                  }),
                  a.send(void 0 === o._bodyInit ? null : o._bodyInit);
              });
            }),
            (e.fetch.polyfill = !0);
        }

        function l(e) {
          if (
            ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
          )
            throw new TypeError("Invalid character in header field name");
          return e.toLowerCase();
        }

        function u(e) {
          return "string" != typeof e && (e = String(e)), e;
        }

        function s(e) {
          var n = {
            next: function () {
              var t = e.shift();
              return {
                done: void 0 === t,
                value: t,
              };
            },
          };
          return (
            t.iterable &&
              (n[Symbol.iterator] = function () {
                return n;
              }),
            n
          );
        }

        function c(e) {
          (this.map = {}),
            e instanceof c
              ? e.forEach(function (e, t) {
                  this.append(t, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }

        function f(e) {
          if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
          e.bodyUsed = !0;
        }

        function d(e) {
          return new Promise(function (t, n) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                n(e.error);
              });
          });
        }

        function p(e) {
          var t = new FileReader(),
            n = d(t);
          return t.readAsArrayBuffer(e), n;
        }

        function h(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }

        function m() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              if (((this._bodyInit = e), e))
                if ("string" == typeof e) this._bodyText = e;
                else if (t.blob && Blob.prototype.isPrototypeOf(e))
                  this._bodyBlob = e;
                else if (t.formData && FormData.prototype.isPrototypeOf(e))
                  this._bodyFormData = e;
                else if (
                  t.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e)
                )
                  this._bodyText = e.toString();
                else if (t.arrayBuffer && t.blob && r(e))
                  (this._bodyArrayBuffer = h(e.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer]));
                else {
                  if (
                    !t.arrayBuffer ||
                    (!ArrayBuffer.prototype.isPrototypeOf(e) && !i(e))
                  )
                    throw new Error("unsupported BodyInit type");
                  this._bodyArrayBuffer = h(e);
                }
              else this._bodyText = "";
              this.headers.get("content-type") ||
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : t.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
            }),
            t.blob &&
              ((this.blob = function () {
                var e = f(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? f(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(p);
              })),
            (this.text = function () {
              var e,
                t,
                n,
                r = f(this);
              if (r) return r;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (t = new FileReader()),
                  (n = d(t)),
                  t.readAsText(e),
                  n
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                      r < t.length;
                      r++
                    )
                      n[r] = String.fromCharCode(t[r]);
                    return n.join("");
                  })(this._bodyArrayBuffer)
                );
              if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }),
            t.formData &&
              (this.formData = function () {
                return this.text().then(y);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }

        function v(e, t) {
          var n,
            r,
            i = (t = t || {}).body;
          if (e instanceof v) {
            if (e.bodyUsed) throw new TypeError("Already read");
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new c(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              i ||
                null == e._bodyInit ||
                ((i = e._bodyInit), (e.bodyUsed = !0));
          } else this.url = String(e);
          if (
            ((this.credentials = t.credentials || this.credentials || "omit"),
            (!t.headers && this.headers) || (this.headers = new c(t.headers)),
            (this.method =
              ((n = t.method || this.method || "GET"),
              (r = n.toUpperCase()),
              o.indexOf(r) > -1 ? r : n)),
            (this.mode = t.mode || this.mode || null),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && i)
          )
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(i);
        }

        function y(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split("&")
              .forEach(function (e) {
                if (e) {
                  var n = e.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    i = n.join("=").replace(/\+/g, " ");
                  t.append(decodeURIComponent(r), decodeURIComponent(i));
                }
              }),
            t
          );
        }

        function g(e, t) {
          t || (t = {}),
            (this.type = "default"),
            (this.status = "status" in t ? t.status : 200),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = "statusText" in t ? t.statusText : "OK"),
            (this.headers = new c(t.headers)),
            (this.url = t.url || ""),
            this._initBody(e);
        }
      })("undefined" != typeof self ? self : this);
    },
    se3Y: function (e, t, n) {
      "use strict";
      var r = n("3Cgm");

      function i() {}
      var o = null,
        a = {};

      function l(e) {
        if ("object" != typeof this)
          throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e)
          throw new TypeError(
            "Promise constructor's argument is not a function"
          );
        (this._75 = 0),
          (this._83 = 0),
          (this._18 = null),
          (this._38 = null),
          e !== i && p(e, this);
      }

      function u(e, t) {
        for (; 3 === e._83; ) e = e._18;
        if ((l._47 && l._47(e), 0 === e._83))
          return 0 === e._75
            ? ((e._75 = 1), void (e._38 = t))
            : 1 === e._75
            ? ((e._75 = 2), void (e._38 = [e._38, t]))
            : void e._38.push(t);
        !(function (e, t) {
          r(function () {
            var n = 1 === e._83 ? t.onFulfilled : t.onRejected;
            if (null !== n) {
              var r = (function (e, t) {
                try {
                  return e(t);
                } catch (e) {
                  return (o = e), a;
                }
              })(n, e._18);
              r === a ? c(t.promise, o) : s(t.promise, r);
            } else 1 === e._83 ? s(t.promise, e._18) : c(t.promise, e._18);
          });
        })(e, t);
      }

      function s(e, t) {
        if (t === e)
          return c(
            e,
            new TypeError("A promise cannot be resolved with itself.")
          );
        if (t && ("object" == typeof t || "function" == typeof t)) {
          var n = (function (e) {
            try {
              return e.then;
            } catch (e) {
              return (o = e), a;
            }
          })(t);
          if (n === a) return c(e, o);
          if (n === e.then && t instanceof l)
            return (e._83 = 3), (e._18 = t), void f(e);
          if ("function" == typeof n) return void p(n.bind(t), e);
        }
        (e._83 = 1), (e._18 = t), f(e);
      }

      function c(e, t) {
        (e._83 = 2), (e._18 = t), l._71 && l._71(e, t), f(e);
      }

      function f(e) {
        if ((1 === e._75 && (u(e, e._38), (e._38 = null)), 2 === e._75)) {
          for (var t = 0; t < e._38.length; t++) u(e, e._38[t]);
          e._38 = null;
        }
      }

      function d(e, t, n) {
        (this.onFulfilled = "function" == typeof e ? e : null),
          (this.onRejected = "function" == typeof t ? t : null),
          (this.promise = n);
      }

      function p(e, t) {
        var n = !1,
          r = (function (e, t, n) {
            try {
              e(t, n);
            } catch (e) {
              return (o = e), a;
            }
          })(
            e,
            function (e) {
              n || ((n = !0), s(t, e));
            },
            function (e) {
              n || ((n = !0), c(t, e));
            }
          );
        n || r !== a || ((n = !0), c(t, o));
      }
      (e.exports = l),
        (l._47 = null),
        (l._71 = null),
        (l._44 = i),
        (l.prototype.then = function (e, t) {
          if (this.constructor !== l)
            return (function (e, t, n) {
              return new e.constructor(function (r, o) {
                var a = new l(i);
                a.then(r, o), u(e, new d(t, n, a));
              });
            })(this, e, t);
          var n = new l(i);
          return u(this, new d(e, t, n)), n;
        });
    },
    vttU: function (e, t, n) {
      "use strict";
      var r = n("BEQ0"),
        i = "function" == typeof Symbol && Symbol.for,
        o = i ? Symbol.for("react.element") : 60103,
        a = i ? Symbol.for("react.portal") : 60106,
        l = i ? Symbol.for("react.fragment") : 60107,
        u = i ? Symbol.for("react.strict_mode") : 60108,
        s = i ? Symbol.for("react.profiler") : 60114,
        c = i ? Symbol.for("react.provider") : 60109,
        f = i ? Symbol.for("react.context") : 60110,
        d = i ? Symbol.for("react.forward_ref") : 60112,
        p = i ? Symbol.for("react.suspense") : 60113,
        h = i ? Symbol.for("react.memo") : 60115,
        m = i ? Symbol.for("react.lazy") : 60116,
        v = "function" == typeof Symbol && Symbol.iterator;

      function y(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var g = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        b = {};

      function w(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || g);
      }

      function x() {}

      function E(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || g);
      }
      (w.prototype.isReactComponent = {}),
        (w.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(y(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (w.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (x.prototype = w.prototype);
      var k = (E.prototype = new x());
      (k.constructor = E), r(k, w.prototype), (k.isPureReactComponent = !0);
      var T = {
          current: null,
        },
        _ = Object.prototype.hasOwnProperty,
        S = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0,
        };

      function C(e, t, n) {
        var r,
          i = {},
          a = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t))
            _.call(t, r) && !S.hasOwnProperty(r) && (i[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) i.children = n;
        else if (1 < u) {
          for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
        return {
          $$typeof: o,
          type: e,
          key: a,
          ref: l,
          props: i,
          _owner: T.current,
        };
      }

      function P(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o;
      }
      var O = /\/+/g,
        R = [];

      function M(e, t, n, r) {
        if (R.length) {
          var i = R.pop();
          return (
            (i.result = e),
            (i.keyPrefix = t),
            (i.func = n),
            (i.context = r),
            (i.count = 0),
            i
          );
        }
        return {
          result: e,
          keyPrefix: t,
          func: n,
          context: r,
          count: 0,
        };
      }

      function z(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > R.length && R.push(e);
      }

      function D(e, t, n) {
        return null == e
          ? 0
          : (function e(t, n, r, i) {
              var l = typeof t;
              ("undefined" !== l && "boolean" !== l) || (t = null);
              var u = !1;
              if (null === t) u = !0;
              else
                switch (l) {
                  case "string":
                  case "number":
                    u = !0;
                    break;
                  case "object":
                    switch (t.$$typeof) {
                      case o:
                      case a:
                        u = !0;
                    }
                }
              if (u) return r(i, t, "" === n ? "." + N(t, 0) : n), 1;
              if (((u = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                for (var s = 0; s < t.length; s++) {
                  var c = n + N((l = t[s]), s);
                  u += e(l, c, r, i);
                }
              else if (
                ((c =
                  null === t || "object" != typeof t
                    ? null
                    : "function" == typeof (c = (v && t[v]) || t["@@iterator"])
                    ? c
                    : null),
                "function" == typeof c)
              )
                for (t = c.call(t), s = 0; !(l = t.next()).done; )
                  u += e((l = l.value), (c = n + N(l, s++)), r, i);
              else if ("object" === l)
                throw (
                  ((r = "" + t),
                  Error(
                    y(
                      31,
                      "[object Object]" === r
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : r,
                      ""
                    )
                  ))
                );
              return u;
            })(e, "", t, n);
      }

      function N(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = {
                "=": "=0",
                ":": "=2",
              };
              return (
                "$" +
                ("" + e).replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })(e.key)
          : t.toString(36);
      }

      function I(e, t) {
        e.func.call(e.context, t, e.count++);
      }

      function L(e, t, n) {
        var r = e.result,
          i = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? F(e, r, n, function (e) {
                return e;
              })
            : null != e &&
              (P(e) &&
                (e = (function (e, t) {
                  return {
                    $$typeof: o,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  e,
                  i +
                    (!e.key || (t && t.key === e.key)
                      ? ""
                      : ("" + e.key).replace(O, "$&/") + "/") +
                    n
                )),
              r.push(e));
      }

      function F(e, t, n, r, i) {
        var o = "";
        null != n && (o = ("" + n).replace(O, "$&/") + "/"),
          D(e, L, (t = M(t, o, r, i))),
          z(t);
      }
      var A = {
        current: null,
      };

      function j() {
        var e = A.current;
        if (null === e) throw Error(y(321));
        return e;
      }
      var U = {
        ReactCurrentDispatcher: A,
        ReactCurrentBatchConfig: {
          suspense: null,
        },
        ReactCurrentOwner: T,
        IsSomeRendererActing: {
          current: !1,
        },
        assign: r,
      };
      (t.Children = {
        map: function (e, t, n) {
          if (null == e) return e;
          var r = [];
          return F(e, r, null, t, n), r;
        },
        forEach: function (e, t, n) {
          if (null == e) return e;
          D(e, I, (t = M(null, null, t, n))), z(t);
        },
        count: function (e) {
          return D(
            e,
            function () {
              return null;
            },
            null
          );
        },
        toArray: function (e) {
          var t = [];
          return (
            F(e, t, null, function (e) {
              return e;
            }),
            t
          );
        },
        only: function (e) {
          if (!P(e)) throw Error(y(143));
          return e;
        },
      }),
        (t.Component = w),
        (t.Fragment = l),
        (t.Profiler = s),
        (t.PureComponent = E),
        (t.StrictMode = u),
        (t.Suspense = p),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
        (t.cloneElement = function (e, t, n) {
          if (null === e || void 0 === e) throw Error(y(267, e));
          var i = r({}, e.props),
            a = e.key,
            l = e.ref,
            u = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((l = t.ref), (u = T.current)),
              void 0 !== t.key && (a = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps;
            for (c in t)
              _.call(t, c) &&
                !S.hasOwnProperty(c) &&
                (i[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) i.children = n;
          else if (1 < c) {
            s = Array(c);
            for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
            i.children = s;
          }
          return {
            $$typeof: o,
            type: e.type,
            key: a,
            ref: l,
            props: i,
            _owner: u,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: f,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = {
              $$typeof: c,
              _context: e,
            }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = C),
        (t.createFactory = function (e) {
          var t = C.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return {
            current: null,
          };
        }),
        (t.forwardRef = function (e) {
          return {
            $$typeof: d,
            render: e,
          };
        }),
        (t.isValidElement = P),
        (t.lazy = function (e) {
          return {
            $$typeof: m,
            _ctor: e,
            _status: -1,
            _result: null,
          };
        }),
        (t.memo = function (e, t) {
          return {
            $$typeof: h,
            type: e,
            compare: void 0 === t ? null : t,
          };
        }),
        (t.useCallback = function (e, t) {
          return j().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return j().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return j().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return j().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return j().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return j().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return j().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return j().useRef(e);
        }),
        (t.useState = function (e) {
          return j().useState(e);
        }),
        (t.version = "16.13.1");
    },
    xW1K: function (e, t, n) {
      "use strict";
      e.exports = n("WifJ");
    },
    "z+gd": function (e, t, n) {
      "use strict";
      (function (e) {
        var n = (function () {
            if ("undefined" != typeof Map) return Map;

            function e(e, t) {
              var n = -1;
              return (
                e.some(function (e, r) {
                  return e[0] === t && ((n = r), !0);
                }),
                n
              );
            }
            return (function () {
              function t() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(t.prototype, "size", {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.get = function (t) {
                  var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (t.prototype.set = function (t, n) {
                  var r = e(this.__entries__, t);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype.delete = function (t) {
                  var n = this.__entries__,
                    r = e(n, t);
                  ~r && n.splice(r, 1);
                }),
                (t.prototype.has = function (t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function (e, t) {
                  void 0 === t && (t = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var i = r[n];
                    e.call(t, i[1], i[0]);
                  }
                }),
                t
              );
            })();
          })(),
          r =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            window.document === document,
          i =
            void 0 !== e && e.Math === Math
              ? e
              : "undefined" != typeof self && self.Math === Math
              ? self
              : "undefined" != typeof window && window.Math === Math
              ? window
              : Function("return this")(),
          o =
            "function" == typeof requestAnimationFrame
              ? requestAnimationFrame.bind(i)
              : function (e) {
                  return setTimeout(function () {
                    return e(Date.now());
                  }, 1e3 / 60);
                },
          a = 2;
        var l = 20,
          u = [
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "size",
            "weight",
          ],
          s = "undefined" != typeof MutationObserver,
          c = (function () {
            function e() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function (e, t) {
                  var n = !1,
                    r = !1,
                    i = 0;

                  function l() {
                    n && ((n = !1), e()), r && s();
                  }

                  function u() {
                    o(l);
                  }

                  function s() {
                    var e = Date.now();
                    if (n) {
                      if (e - i < a) return;
                      r = !0;
                    } else (n = !0), (r = !1), setTimeout(u, t);
                    i = e;
                  }
                  return s;
                })(this.refresh.bind(this), l));
            }
            return (
              (e.prototype.addObserver = function (e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_();
              }),
              (e.prototype.removeObserver = function (e) {
                var t = this.observers_,
                  n = t.indexOf(e);
                ~n && t.splice(n, 1),
                  !t.length && this.connected_ && this.disconnect_();
              }),
              (e.prototype.refresh = function () {
                this.updateObservers_() && this.refresh();
              }),
              (e.prototype.updateObservers_ = function () {
                var e = this.observers_.filter(function (e) {
                  return e.gatherActive(), e.hasActive();
                });
                return (
                  e.forEach(function (e) {
                    return e.broadcastActive();
                  }),
                  e.length > 0
                );
              }),
              (e.prototype.connect_ = function () {
                r &&
                  !this.connected_ &&
                  (document.addEventListener(
                    "transitionend",
                    this.onTransitionEnd_
                  ),
                  window.addEventListener("resize", this.refresh),
                  s
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        "DOMSubtreeModified",
                        this.refresh
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (e.prototype.disconnect_ = function () {
                r &&
                  this.connected_ &&
                  (document.removeEventListener(
                    "transitionend",
                    this.onTransitionEnd_
                  ),
                  window.removeEventListener("resize", this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (e.prototype.onTransitionEnd_ = function (e) {
                var t = e.propertyName,
                  n = void 0 === t ? "" : t;
                u.some(function (e) {
                  return !!~n.indexOf(e);
                }) && this.refresh();
              }),
              (e.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new e()), this.instance_
                );
              }),
              (e.instance_ = null),
              e
            );
          })(),
          f = function (e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var i = r[n];
              Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          d = function (e) {
            return (e && e.ownerDocument && e.ownerDocument.defaultView) || i;
          },
          p = b(0, 0, 0, 0);

        function h(e) {
          return parseFloat(e) || 0;
        }

        function m(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return t.reduce(function (t, n) {
            return t + h(e["border-" + n + "-width"]);
          }, 0);
        }

        function v(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return p;
          var r = d(e).getComputedStyle(e),
            i = (function (e) {
              for (
                var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
                n < r.length;
                n++
              ) {
                var i = r[n],
                  o = e["padding-" + i];
                t[i] = h(o);
              }
              return t;
            })(r),
            o = i.left + i.right,
            a = i.top + i.bottom,
            l = h(r.width),
            u = h(r.height);
          if (
            ("border-box" === r.boxSizing &&
              (Math.round(l + o) !== t && (l -= m(r, "left", "right") + o),
              Math.round(u + a) !== n && (u -= m(r, "top", "bottom") + a)),
            !(function (e) {
              return e === d(e).document.documentElement;
            })(e))
          ) {
            var s = Math.round(l + o) - t,
              c = Math.round(u + a) - n;
            1 !== Math.abs(s) && (l -= s), 1 !== Math.abs(c) && (u -= c);
          }
          return b(i.left, i.top, l, u);
        }
        var y =
          "undefined" != typeof SVGGraphicsElement
            ? function (e) {
                return e instanceof d(e).SVGGraphicsElement;
              }
            : function (e) {
                return (
                  e instanceof d(e).SVGElement && "function" == typeof e.getBBox
                );
              };

        function g(e) {
          return r
            ? y(e)
              ? (function (e) {
                  var t = e.getBBox();
                  return b(0, 0, t.width, t.height);
                })(e)
              : v(e)
            : p;
        }

        function b(e, t, n, r) {
          return {
            x: e,
            y: t,
            width: n,
            height: r,
          };
        }
        var w = (function () {
            function e(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = b(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (e.prototype.isActive = function () {
                var e = g(this.target);
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth ||
                    e.height !== this.broadcastHeight
                );
              }),
              (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return (
                  (this.broadcastWidth = e.width),
                  (this.broadcastHeight = e.height),
                  e
                );
              }),
              e
            );
          })(),
          x = (function () {
            return function (e, t) {
              var n,
                r,
                i,
                o,
                a,
                l,
                u,
                s =
                  ((r = (n = t).x),
                  (i = n.y),
                  (o = n.width),
                  (a = n.height),
                  (l =
                    "undefined" != typeof DOMRectReadOnly
                      ? DOMRectReadOnly
                      : Object),
                  (u = Object.create(l.prototype)),
                  f(u, {
                    x: r,
                    y: i,
                    width: o,
                    height: a,
                    top: i,
                    right: r + o,
                    bottom: a + i,
                    left: r,
                  }),
                  u);
              f(this, {
                target: e,
                contentRect: s,
              });
            };
          })(),
          E = (function () {
            function e(e, t, r) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new n()),
                "function" != typeof e)
              )
                throw new TypeError(
                  "The callback provided as parameter 1 is not a function."
                );
              (this.callback_ = e),
                (this.controller_ = t),
                (this.callbackCtx_ = r);
            }
            return (
              (e.prototype.observe = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                if (
                  "undefined" != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof d(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var t = this.observations_;
                  t.has(e) ||
                    (t.set(e, new w(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (e.prototype.unobserve = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                if (
                  "undefined" != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof d(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var t = this.observations_;
                  t.has(e) &&
                    (t.delete(e),
                    t.size || this.controller_.removeObserver(this));
                }
              }),
              (e.prototype.disconnect = function () {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (e.prototype.gatherActive = function () {
                var e = this;
                this.clearActive(),
                  this.observations_.forEach(function (t) {
                    t.isActive() && e.activeObservations_.push(t);
                  });
              }),
              (e.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var e = this.callbackCtx_,
                    t = this.activeObservations_.map(function (e) {
                      return new x(e.target, e.broadcastRect());
                    });
                  this.callback_.call(e, t, e), this.clearActive();
                }
              }),
              (e.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (e.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
              }),
              e
            );
          })(),
          k = "undefined" != typeof WeakMap ? new WeakMap() : new n(),
          T = (function () {
            return function e(t) {
              if (!(this instanceof e))
                throw new TypeError("Cannot call a class as a function.");
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              var n = c.getInstance(),
                r = new E(t, n, this);
              k.set(this, r);
            };
          })();
        ["observe", "unobserve", "disconnect"].forEach(function (e) {
          T.prototype[e] = function () {
            var t;
            return (t = k.get(this))[e].apply(t, arguments);
          };
        });
        var _ = void 0 !== i.ResizeObserver ? i.ResizeObserver : T;
        t.a = _;
      }.call(t, n("DuR2")));
    },
  },
  [0]
);
