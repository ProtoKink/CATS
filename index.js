"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // <define:BUNDLED_PUBLIC_ASSET_MAP>
  var define_BUNDLED_PUBLIC_ASSET_MAP_default = {};

  // <define:MOD_INFO>
  var define_MOD_INFO_default = { name: "CATS", fullName: "Chat Auto Translator System", repository: "https://github.com/ProtoKink/CATS" };

  // node_modules/.pnpm/bc-deeplib@6.0.0_sass-embedded@1.100.0/node_modules/bc-deeplib/dist/deeplib.js
  var ye = Object.create;
  var J = Object.defineProperty;
  var Ge = Object.getOwnPropertyDescriptor;
  var Ce = Object.getOwnPropertyNames;
  var Be = Object.getPrototypeOf;
  var we = Object.prototype.hasOwnProperty;
  var r = /* @__PURE__ */ __name((t8, e) => J(t8, "name", { value: e, configurable: true }), "r");
  var Te = /* @__PURE__ */ __name((t8, e) => () => (e || t8((e = { exports: {} }).exports, e), e.exports), "Te");
  var Le = /* @__PURE__ */ __name((t8, e, n, i) => {
    if (e && typeof e == "object" || typeof e == "function") for (let o of Ce(e)) !we.call(t8, o) && o !== n && J(t8, o, { get: /* @__PURE__ */ __name(() => e[o], "get"), enumerable: !(i = Ge(e, o)) || i.enumerable });
    return t8;
  }, "Le");
  var oe = /* @__PURE__ */ __name((t8, e, n) => (n = t8 != null ? ye(Be(t8)) : {}, Le(e || !t8 || !t8.__esModule ? J(n, "default", { value: t8, enumerable: true }) : n, t8)), "oe");
  var $ = Te((de, U) => {
    (function(t8) {
      "use strict";
      var e = {};
      e.VERSION = "1.6.1";
      var n, i = {}, o = r(function(l, h) {
        return function() {
          return h.apply(l, arguments);
        };
      }, "bind"), s = r(function() {
        var l = arguments, h = l[0], T, v;
        for (v = 1; v < l.length; v++) for (T in l[v]) !(T in h) && l[v].hasOwnProperty(T) && (h[T] = l[v][T]);
        return h;
      }, "merge"), a = r(function(l, h) {
        return { value: l, name: h };
      }, "defineLogLevel");
      e.TRACE = a(1, "TRACE"), e.DEBUG = a(2, "DEBUG"), e.INFO = a(3, "INFO"), e.TIME = a(4, "TIME"), e.WARN = a(5, "WARN"), e.ERROR = a(8, "ERROR"), e.OFF = a(99, "OFF");
      var c = r(function(l) {
        this.context = l, this.setLevel(l.filterLevel), this.log = this.info;
      }, "ContextualLogger");
      c.prototype = { setLevel: r(function(l) {
        l && "value" in l && (this.context.filterLevel = l);
      }, "setLevel"), getLevel: r(function() {
        return this.context.filterLevel;
      }, "getLevel"), enabledFor: r(function(l) {
        var h = this.context.filterLevel;
        return l.value >= h.value;
      }, "enabledFor"), trace: r(function() {
        this.invoke(e.TRACE, arguments);
      }, "trace"), debug: r(function() {
        this.invoke(e.DEBUG, arguments);
      }, "debug"), info: r(function() {
        this.invoke(e.INFO, arguments);
      }, "info"), warn: r(function() {
        this.invoke(e.WARN, arguments);
      }, "warn"), error: r(function() {
        this.invoke(e.ERROR, arguments);
      }, "error"), time: r(function(l) {
        typeof l == "string" && l.length > 0 && this.invoke(e.TIME, [l, "start"]);
      }, "time"), timeEnd: r(function(l) {
        typeof l == "string" && l.length > 0 && this.invoke(e.TIME, [l, "end"]);
      }, "timeEnd"), invoke: r(function(l, h) {
        n && this.enabledFor(l) && n(h, s({ level: l }, this.context));
      }, "invoke") };
      var d = new c({ filterLevel: e.OFF });
      (function() {
        var l = e;
        l.enabledFor = o(d, d.enabledFor), l.trace = o(d, d.trace), l.debug = o(d, d.debug), l.time = o(d, d.time), l.timeEnd = o(d, d.timeEnd), l.info = o(d, d.info), l.warn = o(d, d.warn), l.error = o(d, d.error), l.log = l.info;
      })(), e.setHandler = function(l) {
        n = l;
      }, e.setLevel = function(l) {
        d.setLevel(l);
        for (var h in i) i.hasOwnProperty(h) && i[h].setLevel(l);
      }, e.getLevel = function() {
        return d.getLevel();
      }, e.get = function(l) {
        return i[l] || (i[l] = new c(s({ name: l }, d.context)));
      }, e.createDefaultHandler = function(l) {
        l = l || {}, l.formatter = l.formatter || r(function(x, w) {
          w.name && x.unshift("[" + w.name + "]");
        }, "defaultMessageFormatter");
        var h = {}, T = r(function(v, x) {
          Function.prototype.apply.call(v, console, x);
        }, "invokeConsoleMethod");
        return typeof console > "u" ? function() {
        } : function(v, x) {
          v = Array.prototype.slice.call(v);
          var w = console.log, Z;
          x.level === e.TIME ? (Z = (x.name ? "[" + x.name + "] " : "") + v[0], v[1] === "start" ? console.time ? console.time(Z) : h[Z] = (/* @__PURE__ */ new Date()).getTime() : console.timeEnd ? console.timeEnd(Z) : T(w, [Z + ": " + ((/* @__PURE__ */ new Date()).getTime() - h[Z]) + "ms"])) : (x.level === e.WARN && console.warn ? w = console.warn : x.level === e.ERROR && console.error ? w = console.error : x.level === e.INFO && console.info ? w = console.info : x.level === e.DEBUG && console.debug ? w = console.debug : x.level === e.TRACE && console.trace && (w = console.trace), l.formatter(v, x), T(w, v));
        };
      }, e.useDefaults = function(l) {
        e.setLevel(l && l.defaultLevel || e.DEBUG), e.setHandler(e.createDefaultHandler(l));
      }, e.setDefaults = e.useDefaults, typeof define == "function" && define.amd ? define(e) : typeof U < "u" && U.exports ? U.exports = e : (e._prevLogger = t8.Logger, e.noConflict = function() {
        return t8.Logger = e._prevLogger, e;
      }, t8.Logger = e);
    })(de);
  });
  var L = class {
    static {
      __name(this, "L");
    }
    static {
      r(this, "BaseModule");
    }
    get settingsScreen() {
      return null;
    }
    get settingsStorage() {
      return this.constructor.name;
    }
    get settings() {
      return this.settingsStorage ? (p.playerStorage ? p.playerStorage[this.settingsStorage] || this.registerDefaultSettings(p.playerStorage) : this.registerDefaultSettings(p.playerStorage), p.playerStorage[this.settingsStorage]) : null;
    }
    set settings(e) {
      this.settingsStorage && (p.playerStorage ? p.playerStorage[this.settingsStorage] || this.registerDefaultSettings(p.playerStorage) : this.registerDefaultSettings(p.playerStorage), p.playerStorage[this.settingsStorage] = e);
    }
    init() {
    }
    registerDefaultSettings(e) {
      e ??= p.playerStorage ?? {};
      let n = this.settingsStorage, i = this.defaultSettings;
      !n || !i || Object.entries(this.defaultSettings).length !== 0 && (e[n] = f(this.defaultSettings, e[n], { concatArrays: false, matchingOnly: true }));
    }
    get defaultSettings() {
      return null;
    }
    load() {
    }
    run() {
    }
    unload() {
    }
  };
  async function E(t8) {
    if (!M.instance) throw new Error("Attempt to set subscreen before init");
    let e = typeof t8 == "string" ? t8 : t8?.options.name, n = `${define_MOD_INFO_default.name}_${e}`;
    await CommonSetScreen("DeepLibMod", `${n}`);
  }
  __name(E, "E");
  r(E, "setSubscreen");
  var I = class t {
    static {
      __name(this, "t");
    }
    static {
      r(this, "BaseSubscreen");
    }
    static currentElements = [];
    static currentPage = 1;
    options;
    module;
    static id = CommonGenerateUniqueID();
    static subscreenOptions = { drawCharacter: true, name: "UNKNOWN", background: "Sheet", doShowExitButton: true, doShowTitle: true, settingsWidth: 1e3, forceUpCharacter: false };
    static menu = null;
    constructor(e) {
      e && (this.module = e);
      let n = this.constructor;
      this.options = { ...t.subscreenOptions, ...n.subscreenOptions };
      let i = this.options.name, o = `${define_MOD_INFO_default.name}_${i}`;
      O(`${o}Load`, this.load.bind(this)), O(`${o}Run`, this.run.bind(this)), O(`${o}Click`, this.click.bind(this)), O(`${o}Exit`, this.exit.bind(this)), O(`${o}Unload`, this.unload.bind(this)), O(`${o}Resize`, this.resize.bind(this)), O(`${o}Background`, this.options.background), CommonCSVCache[ScreenFileGetTranslation("DeepLibMod", o)] = [];
    }
    async setSubscreen(e) {
      return await E(e);
    }
    get settings() {
      return this.module.settings;
    }
    set settings(e) {
      this.module.settings = e;
    }
    get pageStructure() {
      return [[]];
    }
    get currentPage() {
      return this.pageStructure[Math.min(t.currentPage - 1, this.pageStructure.length - 1)];
    }
    getPageLabel() {
      return g("settings.page.label", { $currentPage$: t.currentPage, $totalPages$: this.pageStructure.length });
    }
    changePage(e, n) {
      let i = this.pageStructure.length;
      e > i && (e = 1), e < 1 && (e = i), t.currentPage = e, this.managePageElementsVisibility(), n(this.getPageLabel());
    }
    managePageElementsVisibility() {
      this.pageStructure.forEach((e, n) => {
        e.forEach((i) => {
          let o = ElementWrap(`${i.id}-container`) ?? ElementWrap(`${i.id}`);
          n !== t.currentPage - 1 ? o && S.hide(o) : o && S.unhide(o);
        });
      });
    }
    load() {
      for (let i of y()) i.settingsScreen && (!i.settings || !Object.keys(i.settings).length) && i.registerDefaultSettings(p.playerStorage);
      t.currentPage = 1, b.getSubscreen();
      let e = b.getSettingsDiv();
      if (b.appendToSubscreen(e), t.menu = ElementMenu.Create("deeplib-nav-menu", []), b.appendToSubscreen(t.menu), this.pageStructure.length > 1) {
        let i = u.createBackNext({ id: "deeplib-page-back-next", next: r(({ setLabel: o }) => this.changePage(t.currentPage + 1, o), "next"), initialNextTooltip: g("settings.button.next_button_hint"), back: r(({ setLabel: o }) => this.changePage(t.currentPage - 1, o), "back"), initialPrevTooltip: g("settings.button.prev_button_hint"), initialLabel: this.getPageLabel() });
        t.menu.prepend(i);
      }
      if (this.options.help) {
        let i = this.options.help.onClick, o = r(() => {
        }, "action");
        typeof i == "string" || i instanceof URL ? o = r(() => window.open(i, "_blank"), "action") : typeof i == "function" ? o = i : i instanceof t && (o = r(async () => await this.setSubscreen(i), "action")), this.options.help.tooltip ??= g("settings.button.help_button_hint"), this.options.help.icon ??= `${"https://protokink.github.io/CATS/public"}/dl_images/bookmark.svg`;
        let s = u.createButton({ id: "deeplib-help", size: [90, 90], onClick: o, options: { image: this.options.help.icon, tooltip: this.options.help.tooltip } });
        t.menu.append(s);
      }
      if (this.options.doShowTitle) {
        let i = u.createLabel({ id: "deeplib-subscreen-title", label: g(`${this.options.name}.title`, { $ModVersion: "1.0.0" }) });
        b.appendToSubscreen(i);
      }
      if (this.options.doShowExitButton) {
        let i = u.createButton({ id: "deeplib-exit", size: [90, 90], onClick: r(() => {
          this.exit();
        }, "onClick"), options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/exit.svg`, tooltip: g("settings.button.back_button_hint") } });
        t.menu.append(i);
      }
      let n = u.createTooltip();
      b.appendToSubscreen(n), this.pageStructure.forEach((i) => i.forEach((o) => {
        let s;
        switch (o.type) {
          case "text":
          case "number":
          case "color":
            s = u.createInput(o);
            break;
          case "checkbox":
            s = u.createCheckbox(o);
            break;
          case "button":
            s = u.createButton(o);
            break;
          case "label":
            s = u.createLabel(o);
            break;
          case "custom":
            s = u.createCustom(o);
            break;
          case "dropdown":
            s = u.createDropdown(o);
            break;
        }
        s.parentElement && s.parentElement !== e || b.appendToSettingsDiv(s);
      })), this.managePageElementsVisibility(), this.options.drawCharacter && this.options.forceUpCharacter ? CharacterAppearanceForceUpCharacter = Player.MemberNumber : CharacterAppearanceForceUpCharacter = -1;
    }
    run() {
      this.options.drawCharacter && DrawCharacter(Player, 50, 50, 0.9, false);
    }
    click() {
    }
    exit() {
      CharacterAppearanceForceUpCharacter = -1, CharacterLoadCanvas(Player);
      let e = CommonUnwrapThunk(this.options.returnScreen);
      e instanceof t || !e ? E(e ?? "mainmenu").then(() => {
        p.save();
      }) : Array.isArray(e) && CommonSetScreen(...e).then(() => {
        p.save();
      });
    }
    resize(e = false) {
      let n = this.options.drawCharacter ? 0 : 380, i = b.getSubscreen(), o = b.getSettingsDiv();
      ElementSetPosition(i, 0, 0), ElementSetSize(i, 2e3, 1e3), ElementSetFontSize(i, "auto"), ElementSetPosition(o, 530 - n, 170), ElementSetSize(o, this.options.settingsWidth ?? 1e3 + n, 660), this.options.doShowTitle && (ElementSetPosition("deeplib-subscreen-title", 530 - n, 75), ElementSetSize("deeplib-subscreen-title", 800, 90)), ElementSetPosition("deeplib-nav-menu", 1905, 75, "top-right"), ElementSetSize("deeplib-nav-menu", null, 90), ElementSetSize(u.getTooltip() || "", 1500), t.currentElements.forEach((s) => {
        let a = s[0], c = s[1];
        S.autoSetPosition(c.id ?? a.id, c.position), S.autoSetSize(c.id ?? a.id, c.size);
      }), o && (S.hasOverflow(o)?.vertical ? o.classList.add("deeplib-overflow-box") : o.classList.remove("deeplib-overflow-box"));
    }
    unload() {
      t.currentElements = [], b.removeSubscreen();
    }
  };
  var re = `.deeplib-subscreen,
.deeplib-modal {
  --deeplib-background-color: var(--tmd-main, white);
  --deeplib-element-color: var(--tmd-element, white);
  --deeplib-element-hover-color: var(--tmd-element-hover, cyan);
  --deeplib-accent-color: var(--tmd-accent, #FFFF88);
  --deeplib-blocked-color: var(--tmd-blocked, red);
  --deeplib-text-color: var(--tmd-text, black);
  --deeplib-icon-color: var(--tmd-accent, black);
  --deeplib-icon-hover-color: var(--tmd-accent-hover, black);
  --deeplib-border-color: var(--tmd-accent, black);
  --deeplib-border-width: min(0.2vh, 0.1vw);
  --deeplib-border-width: min(0.2dvh, 0.1dvw);
  --deeplib-border-radius: min(1vh, 0.5vw);
  --deeplib-border-radius: min(1dvh, 0.5dvw);
}

.deeplib-button {
  color: var(--deeplib-text-color);
  width: 100%;
  height: 100%;
}
.deeplib-button.button-styling, .deeplib-button.button-styling::before {
  border-radius: min(1dvh, 0.5dvw);
}
.deeplib-button img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-position: left;
  background-color: var(--deeplib-icon-color);
  background-blend-mode: multiply;
  background-size: contain;
  mask-position: left;
  mask-size: contain;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  color: transparent;
  background-image: var(--image);
  mask-image: var(--image);
  pointer-events: none;
}
.deeplib-button:hover img {
  background-color: var(--deeplib-icon-hover-color);
}
.deeplib-button .button-label {
  background-color: transparent !important;
  color: var(--deeplib-text-color);
  font-size: 0.9em;
  display: contents;
}
.deeplib-button .button-tooltip {
  border-radius: min(1dvh, 0.5dvw);
  pointer-events: none;
}

#deeplib-page-label {
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

#deeplib-subscreen-title {
  text-align: left;
  color: var(--deeplib-text-color);
  user-select: none;
  pointer-events: none;
  display: flex;
  align-items: center;
}

.deeplib-text {
  color: var(--deeplib-text-color);
}

.deeplib-label {
  color: var(--deeplib-text-color);
  user-select: none;
  pointer-events: none;
}

.deeplib-subscreen {
  padding: 0;
  margin: 0;
  pointer-events: none;
}

.deeplib-subscreen * {
  box-sizing: border-box;
  pointer-events: all;
}

.deeplib-settings {
  display: grid;
  grid-auto-rows: min-content;
  padding: min(1dvh, 0.5dvw);
  gap: 0.3em;
}

.deeplib-misc {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: min(1vh, 0.5vw);
}

.deeplib-tooltip {
  background-color: var(--deeplib-element-color);
  color: var(--deeplib-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: min(1dvh, 0.5dvw);
  padding: min(1vh, 0.5vw);
  font-size: 0.8em;
  border: min(0.2vh, 0.1vw) solid var(--deeplib-border-color);
  z-index: 1;
}
.deeplib-tooltip.anchor-top {
  position: absolute;
  top: min(1vh, 0.5vw);
  left: 50%;
  transform: translateX(-50%);
}
.deeplib-tooltip.anchor-bottom {
  position: absolute;
  bottom: min(1vh, 0.5vw);
  left: 50%;
  transform: translateX(-50%);
}

.deeplib-overflow-box {
  border: var(--deeplib-border-color) solid var(--deeplib-border-width);
}

.deeplib-prev-next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: min(2dvh, 1dvw);
  background-color: var(--deeplib-element-color);
  color: var(--deeplib-text-color);
  border-radius: min(1dvh, 0.5dvw);
  border: min(0.2vh, 0.1vw) solid var(--deeplib-border-color);
}
.deeplib-prev-next .deeplib-prev-next-button:hover {
  background-color: var(--deeplib-element-hover-color);
  border-radius: var(--deeplib-border-radius);
}
.deeplib-prev-next .deeplib-prev-next-button {
  height: 100%;
  aspect-ratio: 1;
}
.deeplib-prev-next .deeplib-prev-next-label {
  white-space: nowrap;
  user-select: none;
}

#deeplib-nav-menu {
  display: flex;
  flex-direction: row;
  gap: min(2dvh, 1dvw);
  z-index: 1;
}
#deeplib-nav-menu > .deeplib-button {
  flex: 1 1 auto;
  height: 100%;
  aspect-ratio: 1;
}

#deeplib-storage-meter {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--deeplib-element-color);
  border: var(--deeplib-border-width) solid var(--deeplib-border-color);
  border-radius: var(--deeplib-border-radius);
  z-index: -1;
}
#deeplib-storage-meter #deeplib-storage-bar {
  height: 100%;
  width: 0%;
  background: var(--deeplib-accent-color);
}

.deeplib-checkbox-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3em;
  width: fit-content;
}
.deeplib-checkbox-container span {
  user-select: none;
}
.deeplib-checkbox-container .deeplib-input {
  width: min(5vh, 2.5vw);
  height: min(5vh, 2.5vw);
  width: min(5dvh, 2.5dvw);
  height: min(5dvh, 2.5dvw);
  border-radius: min(1vh, 0.5vw);
  border-radius: min(1dvh, 0.5dvw);
}
.deeplib-checkbox-container .deeplib-input[type=checkbox]:checked::before {
  width: 80%;
  height: 80%;
}

.deeplib-input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3em;
  width: fit-content;
}
.deeplib-input-container span {
  user-select: none;
}
.deeplib-input-container:has(.deeplib-text) {
  margin-top: min(1vh, 0.5vw);
  margin-top: min(1dvh, 0.5dvw);
}
.deeplib-input-container .deeplib-input {
  font-size: 0.9em;
  padding: min(1vh, 0.5vw);
  padding: min(1dvh, 0.5dvw);
  outline: none;
  min-height: min(5vh, 2.5vw);
  min-height: min(5dvh, 2.5dvw);
  border-radius: min(1vh, 0.5vw);
  border-radius: min(1dvh, 0.5dvw);
}
.deeplib-input-container .deeplib-input[type=color] {
  padding: 0px;
  width: min(5vh, 2.5vw);
  height: min(5vh, 2.5vw);
  width: min(5dvh, 2.5dvw);
  height: min(5dvh, 2.5dvw);
  border-radius: 0px;
}
.deeplib-input-container .deeplib-input[type=color]:disabled {
  border: var(--deeplib-blocked-color) solid var(--deeplib-border-width);
  cursor: not-allowed;
}

.deeplib-dropdown-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: min(2vh, 1vw);
  gap: min(2dvh, 1dvw);
  color: var(--deeplib-text-color);
  width: fit-content;
}
.deeplib-dropdown-container select {
  padding: 0 min(1vh, 0.5vw);
  padding: 0 min(1dvh, 0.5dvw);
  border-radius: min(1vh, 0.5vw);
  border-radius: min(1dvh, 0.5dvw);
}
.deeplib-dropdown-container span {
  user-select: none;
}

.deeplib-checkbox-container.row,
.deeplib-input-container.row,
.deeplib-dropdown-container.row {
  flex-direction: row;
}
.deeplib-checkbox-container.column,
.deeplib-input-container.column,
.deeplib-dropdown-container.column {
  flex-direction: column;
}
.deeplib-checkbox-container.rowReverse,
.deeplib-input-container.rowReverse,
.deeplib-dropdown-container.rowReverse {
  flex-direction: row-reverse;
}
.deeplib-checkbox-container.columnReverse,
.deeplib-input-container.columnReverse,
.deeplib-dropdown-container.columnReverse {
  flex-direction: column-reverse;
}

.deeplib-highlight-text {
  font-weight: bold;
  color: rgb(203, 185, 23);
}

#TextAreaChatLog[data-colortheme=dark] div.ChatMessage.deeplib-message,
#TextAreaChatLog[data-colortheme=dark2] div.ChatMessage.deeplib-message {
  background-color: var(--deeplib-element-color);
  border: min(0.2dvh, 0.1dvw) solid var(--deeplib-border-color);
  color: var(--deeplib-text-color);
}

#TextAreaChatLog div.ChatMessage.deeplib-message {
  background-color: #eee;
  border: min(0.2dvh, 0.1dvw) solid #440171;
  color: #111;
  padding-left: min(0.6dvh, 0.3dvw);
  display: block;
  white-space: normal;
}

#TextAreaChatLog[data-colortheme=dark] div.ChatMessage.deeplib-message a,
#TextAreaChatLog[data-colortheme=dark2] div.ChatMessage.deeplib-message a {
  color: var(--deeplib-text-color);
}

#TextAreaChatLog div.ChatMessage.deeplib-message a {
  cursor: pointer;
  font-weight: bold;
  color: #111;
}

.deeplib-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  min-width: max(50dvw, 25dvh);
  font-size: 1em;
  padding: min(2dvh, 1dvw);
  background-color: var(--deeplib-element-color);
  border-radius: min(1.2dvh, 0.6dvw);
  border: min(0.2dvh, 0.1dvw) solid var(--deeplib-border-color);
  color: var(--deeplib-text-color);
  max-width: max(90dvw, 45dvh);
}
.deeplib-modal .deeplib-modal-input {
  width: 100%;
  font-size: 1em;
  border-radius: min(1dvh, 0.5dvw);
  padding: min(1dvh, 0.5dvw);
}
.deeplib-modal input.deeplib-modal-input {
  max-width: max(50dvh, 25dvw);
}
.deeplib-modal .deeplib-modal-button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.5em;
  width: 100%;
}
.deeplib-modal .deeplib-modal-button-container .deeplib-button {
  font-size: 0.8em;
  display: flex;
  width: auto;
  padding: min(0.4vh, 0.2vw) min(2vh, 1vw);
}
.deeplib-modal .deeplib-modal-button-container .deeplib-button .button-label {
  display: contents;
}
.deeplib-modal .deeplib-modal-prompt-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.deeplib-modal-blocker {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
}

#deeplib-modal-import_export .deeplib-modal-checkbox-container {
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  gap: var(--half-gap);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcnMuc2NzcyIsImJ1dHRvbnMuc2NzcyIsImVsZW1lbnRzLnNjc3MiLCJpbnB1dHMuc2NzcyIsIm1lc3NhZ2VzLnNjc3MiLCJtb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FDZEY7RUFDRTtFQUNBO0VBQ0E7O0FBRUE7RUFFRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTs7O0FDNUNKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUlKO0VBQ0U7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdFO0VBQ0U7RUFDQTs7QUFISjtFQU1FO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOzs7QUFJSjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBOzs7QUFJSjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBOzs7QUN6SUo7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBOzs7QUFLTjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7O0FBT1I7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7OztBQU9GO0FBQUE7QUFBQTtFQUNFOztBQUdGO0FBQUE7QUFBQTtFQUNFOztBQUdGO0FBQUE7QUFBQTtFQUNFOztBQUdGO0FBQUE7QUFBQTtFQUNFOzs7QUMxR0o7RUFDRTtFQUNBOzs7QUFHRjtBQUFBO0VBRUU7RUFDQTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7QUFBQTtFQUVFOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7O0FDN0JGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOztBQUtOO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUlKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUlBO0VBQ0U7RUFDQTtFQUNBO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVlcGxpYi1zdWJzY3JlZW4sXG4uZGVlcGxpYi1tb2RhbCB7XG4gIC0tZGVlcGxpYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10bWQtbWFpbiwgd2hpdGUpO1xuICAtLWRlZXBsaWItZWxlbWVudC1jb2xvcjogdmFyKC0tdG1kLWVsZW1lbnQsIHdoaXRlKTtcbiAgLS1kZWVwbGliLWVsZW1lbnQtaG92ZXItY29sb3I6IHZhcigtLXRtZC1lbGVtZW50LWhvdmVyLCBjeWFuKTtcbiAgLS1kZWVwbGliLWFjY2VudC1jb2xvcjogdmFyKC0tdG1kLWFjY2VudCwgI0ZGRkY4OCk7XG4gIC0tZGVlcGxpYi1ibG9ja2VkLWNvbG9yOiB2YXIoLS10bWQtYmxvY2tlZCwgcmVkKTtcbiAgLS1kZWVwbGliLXRleHQtY29sb3I6IHZhcigtLXRtZC10ZXh0LCBibGFjayk7XG4gIC0tZGVlcGxpYi1pY29uLWNvbG9yOiB2YXIoLS10bWQtYWNjZW50LCBibGFjayk7XG4gIC0tZGVlcGxpYi1pY29uLWhvdmVyLWNvbG9yOiB2YXIoLS10bWQtYWNjZW50LWhvdmVyLCBibGFjayk7XG4gIC0tZGVlcGxpYi1ib3JkZXItY29sb3I6IHZhcigtLXRtZC1hY2NlbnQsIGJsYWNrKTtcbiAgLS1kZWVwbGliLWJvcmRlci13aWR0aDogbWluKDAuMnZoLCAwLjF2dyk7XG4gIC0tZGVlcGxpYi1ib3JkZXItd2lkdGg6IG1pbigwLjJkdmgsIDAuMWR2dyk7XG4gIC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzOiBtaW4oMXZoLCAwLjV2dyk7XG4gIC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzOiBtaW4oMWR2aCwgMC41ZHZ3KTtcbn1cbiIsIi5kZWVwbGliLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICYuYnV0dG9uLXN0eWxpbmcsXG4gICYuYnV0dG9uLXN0eWxpbmc6OmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcbiAgfVxuXG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMCU7XG4gICAgbGVmdDogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1pY29uLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBtYXNrLXBvc2l0aW9uOiBsZWZ0O1xuICAgIG1hc2stc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1hZ2UpO1xuICAgIG1hc2staW1hZ2U6IHZhcigtLWltYWdlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIgaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwbGliLWljb24taG92ZXItY29sb3IpO1xuICB9XG5cbiAgLmJ1dHRvbi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0tZGVlcGxpYi10ZXh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB9XG5cbiAgLmJ1dHRvbi10b29sdGlwIHtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMS4wZHZoLCAwLjVkdncpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59IiwiI2RlZXBsaWItcGFnZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI2RlZXBsaWItc3Vic2NyZWVuLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlZXBsaWItdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xufVxuXG4uZGVlcGxpYi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kZWVwbGliLXN1YnNjcmVlbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kZWVwbGliLXN1YnNjcmVlbiAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmRlZXBsaWItc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XG4gIHBhZGRpbmc6IG1pbigxLjBkdmgsIDAuNWR2dyk7XG4gIGdhcDogMC4zZW07XG59XG5cbi5kZWVwbGliLW1pc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGdhcDogbWluKDF2aCwgMC41dncpO1xufVxuXG4uZGVlcGxpYi10b29sdGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiBtaW4oMS4wZHZoLCAwLjVkdncpO1xuICBwYWRkaW5nOiBtaW4oMXZoLCAwLjV2dyk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJvcmRlcjogbWluKDAuMnZoLCAwLjF2dykgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItY29sb3IpO1xuICB6LWluZGV4OiAxO1xuXG4gICYuYW5jaG9yLXRvcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogbWluKDF2aCwgMC41dncpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cblxuICAmLmFuY2hvci1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IG1pbigxdmgsIDAuNXZ3KTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG59XG5cbi5kZWVwbGliLW92ZXJmbG93LWJveCB7XG4gIGJvcmRlcjogdmFyKC0tZGVlcGxpYi1ib3JkZXItY29sb3IpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLXdpZHRoKTtcbn1cblxuLmRlZXBsaWItcHJldi1uZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IG1pbigyZHZoLCAxZHZ3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IG1pbigxLjBkdmgsIDAuNWR2dyk7XG4gIGJvcmRlcjogbWluKDAuMnZoLCAwLjF2dykgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItY29sb3IpO1xuXG4gIC5kZWVwbGliLXByZXYtbmV4dC1idXR0b24ge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWhvdmVyLWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWRlZXBsaWItYm9yZGVyLXJhZGl1cyk7XG4gICAgfVxuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgfVxuXG4gIC5kZWVwbGliLXByZXYtbmV4dC1sYWJlbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxufVxuXG4jZGVlcGxpYi1uYXYtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogbWluKDJkdmgsIDFkdncpO1xuICB6LWluZGV4OiAxO1xuXG4gICY+LmRlZXBsaWItYnV0dG9uIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICB9XG59XG5cbiNkZWVwbGliLXN0b3JhZ2UtbWV0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItZWxlbWVudC1jb2xvcik7XG4gIGJvcmRlcjogdmFyKC0tZGVlcGxpYi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzKTtcbiAgei1pbmRleDogLTE7XG5cbiAgI2RlZXBsaWItc3RvcmFnZS1iYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGVlcGxpYi1hY2NlbnQtY29sb3IpO1xuICB9XG59IiwiLmRlZXBsaWItY2hlY2tib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gIHNwYW4ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLmRlZXBsaWItaW5wdXQge1xuICAgIHdpZHRoOiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgaGVpZ2h0OiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgd2lkdGg6IG1pbig1ZHZoLCAyLjVkdncpO1xuICAgIGhlaWdodDogbWluKDVkdmgsIDIuNWR2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMHZoLCAwLjV2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcblxuICAgICZbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgfVxuICB9XG59XG5cbi5kZWVwbGliLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zZW07XG4gIHdpZHRoOiBmaXQtY29udGVudDtcblxuICBzcGFuIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gICY6aGFzKC5kZWVwbGliLXRleHQpIHtcbiAgICBtYXJnaW4tdG9wOiBtaW4oMXZoLCAwLjV2dyk7XG4gICAgbWFyZ2luLXRvcDogbWluKDFkdmgsIDAuNWR2dyk7XG4gIH1cblxuICAuZGVlcGxpYi1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAwLjV2dyk7XG4gICAgcGFkZGluZzogbWluKDFkdmgsIDAuNWR2dyk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgbWluLWhlaWdodDogbWluKDVkdmgsIDIuNWR2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMHZoLCAwLjV2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcblxuICAgICZbdHlwZT1cImNvbG9yXCJdIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIHdpZHRoOiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgICBoZWlnaHQ6IG1pbig1dmgsIDIuNXZ3KTtcbiAgICAgIHdpZHRoOiBtaW4oNWR2aCwgMi41ZHZ3KTtcbiAgICAgIGhlaWdodDogbWluKDVkdmgsIDIuNWR2dyk7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBib3JkZXI6IHZhcigtLWRlZXBsaWItYmxvY2tlZC1jb2xvcikgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItd2lkdGgpO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5kZWVwbGliLWRyb3Bkb3duLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogbWluKDJ2aCwgMXZ3KTtcbiAgZ2FwOiBtaW4oMmR2aCwgMWR2dyk7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAwIG1pbigxdmgsIDAuNXZ3KTtcbiAgICBwYWRkaW5nOiAwIG1pbigxZHZoLCAwLjVkdncpO1xuICAgIGJvcmRlci1yYWRpdXM6IG1pbigxdmgsIDAuNXZ3KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMWR2aCwgMC41ZHZ3KTtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG59XG5cbi5kZWVwbGliLWNoZWNrYm94LWNvbnRhaW5lcixcbi5kZWVwbGliLWlucHV0LWNvbnRhaW5lcixcbi5kZWVwbGliLWRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICYucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgJi5jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAmLnJvd1JldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuXG4gICYuY29sdW1uUmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG59IiwiLmRlZXBsaWItaGlnaGxpZ2h0LXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigyMDMsIDE4NSwgMjMpO1xufVxuXG4jVGV4dEFyZWFDaGF0TG9nW2RhdGEtY29sb3J0aGVtZT0nZGFyayddIGRpdi5DaGF0TWVzc2FnZS5kZWVwbGliLW1lc3NhZ2UsXG4jVGV4dEFyZWFDaGF0TG9nW2RhdGEtY29sb3J0aGVtZT0nZGFyazInXSBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWNvbG9yKTtcbiAgYm9yZGVyOiBtaW4oMC4yZHZoLCAwLjFkdncpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG59XG5cbiNUZXh0QXJlYUNoYXRMb2cgZGl2LkNoYXRNZXNzYWdlLmRlZXBsaWItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbWluKDAuMmR2aCwgMC4xZHZ3KSBzb2xpZCAjNDQwMTcxO1xuICBjb2xvcjogIzExMTtcbiAgcGFkZGluZy1sZWZ0OiBtaW4oMC42ZHZoLCAwLjNkdncpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuI1RleHRBcmVhQ2hhdExvZ1tkYXRhLWNvbG9ydGhlbWU9J2RhcmsnXSBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIGEsXG4jVGV4dEFyZWFDaGF0TG9nW2RhdGEtY29sb3J0aGVtZT0nZGFyazInXSBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIGEge1xuICBjb2xvcjogdmFyKC0tZGVlcGxpYi10ZXh0LWNvbG9yKTtcbn1cblxuI1RleHRBcmVhQ2hhdExvZyBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzExMTtcbn1cbiIsIi5kZWVwbGliLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogMTAwMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41ZW07XG4gIG1pbi13aWR0aDogbWF4KDUwZHZ3LCAyNWR2aCk7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiBtaW4oMmR2aCwgMWR2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItZWxlbWVudC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IG1pbigxLjJkdmgsIDAuNmR2dyk7XG4gIGJvcmRlcjogbWluKDAuMmR2aCwgMC4xZHZ3KSBzb2xpZCB2YXIoLS1kZWVwbGliLWJvcmRlci1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICBtYXgtd2lkdGg6IG1heCg5MGR2dywgNDVkdmgpO1xuXG4gIC5kZWVwbGliLW1vZGFsLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMS4wZHZoLCAwLjVkdncpO1xuICAgIHBhZGRpbmc6IG1pbigxZHZoLCAwLjVkdncpO1xuICB9XG5cbiAgaW5wdXQuZGVlcGxpYi1tb2RhbC1pbnB1dCB7XG4gICAgbWF4LXdpZHRoOiBtYXgoNTBkdmgsIDI1ZHZ3KTtcbiAgfVxuXG4gIC5kZWVwbGliLW1vZGFsLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogMC41ZW07XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuZGVlcGxpYi1idXR0b24ge1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHBhZGRpbmc6IG1pbigwLjR2aCwgMC4ydncpIG1pbigydmgsIDF2dyk7XG5cbiAgICAgIC5idXR0b24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGVlcGxpYi1tb2RhbC1wcm9tcHQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4uZGVlcGxpYi1tb2RhbC1ibG9ja2VyIHtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDBkdnc7XG4gIGhlaWdodDogMTAwZHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNkZWVwbGliLW1vZGFsLWltcG9ydF9leHBvcnQge1xuICAuZGVlcGxpYi1tb2RhbC1jaGVja2JveC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLWhhbGYtZ2FwKTtcbiAgfVxufSJdfQ== */`;
  function se() {
    if (true) return;
    let t8 = `${"https://protokink.github.io/CATS/public"}/`;
    G.hookFunction("fetch", k.ModifyBehavior, (e, n) => {
      let [i] = e, o = typeof i == "string" ? i : i instanceof URL ? i.href : i.url;
      if (o.startsWith(t8)) {
        let s = o.slice(t8.length), a = define_BUNDLED_PUBLIC_ASSET_MAP_default[s];
        if (a !== void 0) return a.startsWith("data:") ? fetch(a) : Promise.resolve(new Response(a, { status: 200 }));
      }
      return n(e);
    });
  }
  __name(se, "se");
  r(se, "installBundledPublicAssetFetch");
  var D = class extends L {
    static {
      __name(this, "D");
    }
    static {
      r(this, "DebugModule");
    }
    debugSettings = { showRawTranslations: false, showFileNames: false, showIncomingServerTransactions: false, incomingMessageFilterMode: "exclude", incomingMessageTypes: "", showOutcomingServerTransactions: false, outcomingMessageFilterMode: "exclude", outcomingMessageTypes: "", showRawActivityNames: false, showRawAssetNames: false };
    load() {
      let e = p.getLocalStorage("debugOptions");
      e && (this.debugSettings = Object.assign(this.debugSettings, e)), Oe(), G.hookFunction("TextGet", k.ModifyBehavior, (n, i) => {
        if (!this.debugSettings.showRawTranslations) return i(n);
        let [o] = n, s = TextScreenCache?.fileName() ?? "[unknown]";
        return this.debugSettings.showFileNames ? `${s}::${o}` : o;
      }), G.hookFunction("TextGetInScope", k.ModifyBehavior, (n, i) => {
        if (!this.debugSettings.showRawTranslations) return i(n);
        let [o, s] = n, a = o.lastIndexOf("/");
        a === -1 ? a = 0 : a = a + 1;
        let c = o.substring(a);
        return this.debugSettings.showFileNames ? `${c}::${s}` : s;
      }), G.hookFunction("InterfaceTextGet", k.ModifyBehavior, (n, i) => {
        if (!this.debugSettings.showRawTranslations) return i(n);
        let [o] = n, s = InterfaceStringsPath.lastIndexOf("/");
        s === -1 ? s = 0 : s = s + 1;
        let a = InterfaceStringsPath.substring(s);
        return this.debugSettings.showFileNames ? `${a}::${o}` : o;
      }), G.hookFunction("ActivityDictionaryText", k.ModifyBehavior, (n, i) => {
        if (!this.debugSettings.showRawActivityNames) return i(n);
        let [o] = n;
        return o;
      }), G.hookFunction("ElementButton.CreateForAsset", k.ModifyBehavior, (n, i) => {
        if (!this.debugSettings.showRawAssetNames) return i(n);
        let [, o, , , s] = n;
        return o = ("Asset" in o ? o : { Asset: o }).Asset, s ??= {}, s.label = o.Name, n[4] = s, i(n);
      });
    }
    unload() {
      Se();
    }
    saveDebugSettings() {
      p.setLocalStorage("debugOptions", this.debugSettings);
    }
  };
  var V;
  function ae(...t8) {
    let e = Array.isArray(t8[0]) && typeof t8[0][0] == "string" ? t8[0][0] : "[unknown]", n = Array.isArray(t8[0]) ? t8[0].slice(1) : [], i = B("DebugModule");
    return i.debugSettings.showIncomingServerTransactions && ce(e, i.debugSettings.incomingMessageTypes, i.debugSettings.incomingMessageFilterMode) && m.debug("\u25BC Receive", e, ...n), V?.apply(this, t8);
  }
  __name(ae, "ae");
  r(ae, "processIncomingTransaction");
  var R;
  function le(...t8) {
    let e = typeof t8[0] == "string" ? t8[0] : "[unknown]", n = Array.isArray(t8[1]) ? t8[1] : [t8[1]], i = B("DebugModule");
    return i.debugSettings.showOutcomingServerTransactions && ce(e, i.debugSettings.outcomingMessageTypes, i.debugSettings.outcomingMessageFilterMode) && m.debug("\u25B2 Send", e, ...n), R?.apply(this, t8);
  }
  __name(le, "le");
  r(le, "processOutcomingTransaction");
  function ce(t8, e, n) {
    if (!e.trim()) return true;
    let o = e.split(",").map((s) => s.trim()).filter((s) => s.length > 0).some((s) => t8 === s);
    return n === "include" ? o : !o;
  }
  __name(ce, "ce");
  r(ce, "shouldLogMessage");
  function Oe() {
    V === void 0 && typeof ServerSocket?.__proto__?.emitEvent == "function" && (V = ServerSocket.__proto__.emitEvent, ServerSocket.__proto__.emitEvent = ae), R === void 0 && typeof ServerSocket?.__proto__?.emit == "function" && (R = ServerSocket.__proto__.emit, ServerSocket.__proto__.emit = le);
  }
  __name(Oe, "Oe");
  r(Oe, "loadServerTransactions");
  function Se() {
    V && ServerSocket.__proto__.emitEvent === ae && (ServerSocket.__proto__.emitEvent = V, V = void 0), R && ServerSocket.__proto__.emit === le && (ServerSocket.__proto__.emit = R, R = void 0);
  }
  __name(Se, "Se");
  r(Se, "unloadServerTransactions");
  var ue = oe($(), 1);
  var p;
  var G;
  var m;
  async function kt(t8) {
    G = new Y({ name: define_MOD_INFO_default.name, fullName: define_MOD_INFO_default.fullName, version: "1.0.0", repository: define_MOD_INFO_default.repository }), se(), p = new Q(define_MOD_INFO_default.name), m = ue.default.get(define_MOD_INFO_default.name), H.injectInline("deeplib-style-6.0.0", re), m.debug("Init wait"), (!CurrentScreen || CurrentScreen === "Login") && t8.beforeLogin?.(), await ServerIsLoggedInAsync(), await ke(t8);
  }
  __name(kt, "kt");
  r(kt, "initMod");
  async function ke(t8) {
    if (window[define_MOD_INFO_default.name + "Loaded"]) return;
    let e = X(() => {
      p.load();
    }, (s) => s);
    e.ok || m.error(e.error);
    let n = await pe(async () => {
      await F.init(t8.translationOptions);
    }, (s) => s);
    n.ok || m.error(n.error);
    let i = Object.entries(t8.modules ?? {}), o = [];
    if (i.some((s) => s[1] instanceof N) || o.push(["VersionModule", new N()]), false, o.push(...i), !Fe(o)) {
      Ze();
      return;
    }
    await t8.initFunction?.(), t8.mainMenuOptions && B("GUI") && A.setOptions({ ...t8.mainMenuOptions, repoLink: define_MOD_INFO_default.repository }), window[define_MOD_INFO_default.name + "Loaded"] = true, m.log(`Loaded! Version: ${"1.0.0"}`);
  }
  __name(ke, "ke");
  r(ke, "init");
  function Fe(t8) {
    for (let [e, n] of t8) ge(e, n);
    for (let e of y()) {
      let n = X(() => e.init(), (i) => i);
      n.ok || m.error(n.error);
    }
    for (let e of y()) {
      let n = X(() => e.load(), (i) => i);
      n.ok || m.error(n.error);
    }
    for (let e of y()) {
      let n = X(() => e.run(), (i) => i);
      n.ok || m.error(n.error);
    }
    for (let e of y()) e.registerDefaultSettings(p.playerStorage);
    return m.debug("Modules Loaded."), true;
  }
  __name(Fe, "Fe");
  r(Fe, "initModules");
  function Ze() {
    return Ee(), G.unload(), F.unload(), delete window[define_MOD_INFO_default.name + "Loaded"], m.debug("Unloaded."), true;
  }
  __name(Ze, "Ze");
  r(Ze, "unloadMod");
  function Ee() {
    for (let t8 of y()) t8.unload();
  }
  __name(Ee, "Ee");
  r(Ee, "unloadModules");
  var _ = /* @__PURE__ */ new Map();
  function y() {
    return [..._.values()];
  }
  __name(y, "y");
  r(y, "modules");
  function ge(t8, e) {
    return _.set(t8, e), e;
  }
  __name(ge, "ge");
  r(ge, "registerModule");
  function B(t8) {
    return _.get(t8);
  }
  __name(B, "B");
  r(B, "getModule");
  var be = class {
    static {
      __name(this, "be");
    }
    static {
      r(this, "BaseMigrator");
    }
  };
  var M = class t2 extends L {
    static {
      __name(this, "t");
    }
    static {
      r(this, "GUI");
    }
    static instance = null;
    _subscreens = [];
    _mainMenu = null;
    _modButtonOptions;
    get subscreens() {
      return this._subscreens;
    }
    get mainMenu() {
      return this._mainMenu;
    }
    constructor(e = null) {
      if (super(), t2.instance) throw new Error("Duplicate initialization");
      for (let n of y()) n.settingsScreen;
      this._modButtonOptions = e, t2.instance = this;
    }
    load() {
      if (!this._modButtonOptions) return;
      let e = this._modButtonOptions;
      this._mainMenu = e?.mainMenu ? new e.mainMenu(this) : new A(this), this._subscreens = [this._mainMenu];
      for (let n of y()) n.settingsScreen && this._subscreens.push(new n.settingsScreen(n));
      this._mainMenu.subscreens = this._subscreens, PreferenceRegisterExtensionSetting({ Identifier: this._modButtonOptions.identifier, ButtonText: this._modButtonOptions.buttonText, Image: this._modButtonOptions.image, load: r(async () => {
        this._mainMenu && await E(this._mainMenu);
      }, "load"), run: r(() => {
      }, "run"), click: r(() => {
      }, "click"), exit: r(() => {
      }, "exit") });
    }
  };
  var N = class t3 extends L {
    static {
      __name(this, "t");
    }
    static {
      r(this, "VersionModule");
    }
    static isItNewVersion = false;
    static version;
    static newVersionMessage;
    static showNewVersionMessage;
    static migrators = [];
    static beforeEach;
    static afterEach;
    static beforeAll;
    static afterAll;
    constructor(e) {
      super(), e ??= {}, t3.newVersionMessage = e.newVersionMessage, t3.showNewVersionMessage = e.showNewVersionMessage, e.migrators && (t3.migrators = e.migrators, t3.migrators.sort((n, i) => n.migrationVersion.localeCompare(i.migrationVersion, void 0, { numeric: true }))), t3.beforeEach = e.beforeEach, t3.afterEach = e.afterEach, t3.beforeAll = e.beforeAll, t3.afterAll = e.afterAll;
    }
    load() {
      t3.version = "1.0.0", t3.checkVersionUpdate(), CommonUnwrapThunk(t3.showNewVersionMessage) && t3.isItNewVersion && t3.sendNewVersionMessage();
    }
    static checkVersionUpdate() {
      let e = t3.loadVersion(), n = t3.version;
      t3.isNewVersion(e, n) && (t3.isItNewVersion = true, t3.checkVersionMigration(), t3.saveVersion()), p.save();
    }
    static checkVersionMigration() {
      let e = t3.loadVersion(), n = t3.migrators.filter((i) => t3.isNewVersion(e, i.migrationVersion));
      if (n.length) {
        t3.beforeAll?.();
        for (let i of n) t3.beforeEach?.(), i.migrate(), m.info(`Migrating from ${e} to ${i.migrationVersion} with ${i.constructor.name}`), t3.afterEach?.();
        t3.afterAll?.();
      }
    }
    static async sendNewVersionMessage() {
      if (!t3.newVersionMessage) return;
      let e = CommonUnwrapThunk(t3.newVersionMessage), n = e instanceof Promise ? await e : e, o = FriendListBeepLog.push({ MemberNumber: Player.MemberNumber, MemberName: define_MOD_INFO_default.name, ChatRoomName: g("module.version.version_update"), ChatRoomSpace: "X", Private: false, Sent: false, Time: /* @__PURE__ */ new Date(), Message: n }) - 1, s = g("module.version.new_version_toast_title", { $modName$: define_MOD_INFO_default.name, $modVersion$: t3.version }), a = FriendListBeepLog[o];
      ServerShowBeep(n, 1e4, { memberNumber: a.MemberNumber, memberName: a.MemberName, chatRoomName: a.ChatRoomName, ...a.Message && { onClick: r(() => {
        FriendListShowBeep(o);
      }, "onClick") } }, s);
    }
    static isNewVersion(e, n) {
      return e !== void 0 && e !== "" ? n.localeCompare(e, void 0, { numeric: true }) > 0 : true;
    }
    static saveVersion() {
      p.playerStorage && (p.playerStorage.Version = t3.version);
    }
    static loadVersion() {
      return p.playerStorage?.Version;
    }
  };
  var j = class extends I {
    static {
      __name(this, "j");
    }
    static {
      r(this, "GuiDebug");
    }
    static subscreenOptions = { name: "debug" };
    get pageStructure() {
      return [[{ type: "checkbox", id: "debug-show-incoming-server-transactions", label: "Show Incoming Server Transactions", setElementValue: r(() => this.module.debugSettings.showIncomingServerTransactions, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showIncomingServerTransactions = e;
      }, "setSettingValue") }, { type: "dropdown", id: "debug-incoming-filter-mode", label: "Filter Mode", description: ["Configure which incoming message types to show or hide.", ElementCreate({ tag: "br" }), "Include: only show these message types.", ElementCreate({ tag: "br" }), "Exclude: hide these message types."], optionsList: [{ attributes: { value: "include", label: "Include", selected: this.module.debugSettings.incomingMessageFilterMode === "include" } }, { attributes: { value: "exclude", label: "Exclude", selected: this.module.debugSettings.incomingMessageFilterMode === "exclude" } }], setSettingValue: r((e) => {
        this.module.debugSettings.incomingMessageFilterMode = e;
      }, "setSettingValue") }, { type: "text", id: "debug-incoming-message-types", label: "Message Types", description: 'Comma-separated list of message types (e.g., "ChatRoomChat, ChatRoomSync")', setElementValue: r(() => this.module.debugSettings.incomingMessageTypes, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.incomingMessageTypes = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-outcoming-server-transactions", label: "Show Outcoming Server Transactions", setElementValue: r(() => this.module.debugSettings.showOutcomingServerTransactions, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showOutcomingServerTransactions = e;
      }, "setSettingValue") }, { type: "dropdown", id: "debug-outcoming-filter-mode", label: "Filter Mode", description: ["Configure which outcoming message types to show or hide.", ElementCreate({ tag: "br" }), "Include: only show these message types.", ElementCreate({ tag: "br" }), "Exclude: hide these message types."], optionsList: [{ attributes: { value: "include", label: "Include", selected: this.module.debugSettings.outcomingMessageFilterMode === "include" } }, { attributes: { value: "exclude", label: "Exclude", selected: this.module.debugSettings.outcomingMessageFilterMode === "exclude" } }], setSettingValue: r((e) => {
        this.module.debugSettings.outcomingMessageFilterMode = e;
      }, "setSettingValue") }, { type: "text", id: "debug-outcoming-message-types", label: "Message Types", description: 'Comma-separated list of message types (e.g., "ChatRoomMessage, AccountUpdate")', setElementValue: r(() => this.module.debugSettings.outcomingMessageTypes, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.outcomingMessageTypes = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-raw-translations", label: "Show Raw Translations", setElementValue: r(() => this.module.debugSettings.showRawTranslations, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showRawTranslations = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-file-names", label: "Show File Names", description: "Show the file name of the translation in the translation string.", setElementValue: r(() => this.module.debugSettings.showFileNames, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showFileNames = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-raw-asset-names", label: "Show Raw Asset Names", setElementValue: r(() => this.module.debugSettings.showRawAssetNames, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showRawAssetNames = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-raw-activity-names", label: "Show Raw Activity Names", setElementValue: r(() => this.module.debugSettings.showRawActivityNames, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showRawActivityNames = e;
      }, "setSettingValue") }], [{ type: "button", id: "test-deeplib-big-button", options: { label: "Big Button", tooltip: "This is a big button", image: "Icons/Exit.png" }, size: [405, 80], onClick() {
        C.info("Big Button Clicked");
      } }, { type: "button", id: "test-deeplib-small-button", options: { tooltip: "This is a small button", image: "Icons/Exit.png" }, size: [90, 90], onClick() {
        C.info("Small Button Clicked");
      } }, { type: "checkbox", id: "test-deeplib-checkbox", label: "Checkbox", description: "This is a checkbox", setElementValue() {
        return true;
      }, setSettingValue(e) {
        C.info("Checkbox value:", e);
      } }, { type: "text", id: "test-deeplib-text-input", label: "Input", description: "This is a text input", setElementValue() {
        return "Input Value";
      }, setSettingValue(e) {
        C.info("Input value:", e);
      } }, { type: "number", id: "test-deeplib-number-input", label: "Input", description: "This is a number input", setElementValue() {
        return "123";
      }, setSettingValue(e) {
        C.info("Input value:", e);
      } }, { type: "label", id: "test-deeplib-label", label: "Label", description: "This is a label" }], [{ type: "button", id: "test-deeplib-big-button2", options: { label: "Big Button", tooltip: "This is a big button", image: "Icons/Exit.png" }, size: [405, 80], onClick() {
        C.info("Big Button Clicked");
      } }, { type: "button", id: "test-deeplib-small-button2", options: { tooltip: "This is a small button", image: "Icons/Next.png" }, size: [90, 90], onClick() {
        C.info("Small Button Clicked");
      } }, { type: "checkbox", id: "test-deeplib-checkbox2", label: "Checkbox", description: "This is a checkbox", setElementValue() {
        return true;
      }, setSettingValue(e) {
        C.info("Checkbox value:", e);
      } }, { type: "text", id: "test-deeplib-text-input2", label: "Input", description: "This is a text input", setElementValue() {
        return "Input Value";
      }, setSettingValue(e) {
        C.info("Input value:", e);
      } }, { type: "number", id: "test-deeplib-number-input2", label: "Input", description: "This is a number input", setElementValue() {
        return "123";
      }, setSettingValue(e) {
        C.info("Input value:", e);
      } }, { type: "label", id: "test-deeplib-label2", label: "Label", description: "This is a label" }, { type: "dropdown", id: "test-deeplib-dropdown", label: "Dropdown", description: "This is a dropdown", optionsList: ["Option 1", "Option 2", "Option 3"], setElementValue() {
        return "Option 2";
      }, setSettingValue(e) {
        C.info("Dropdown value:", e);
      } }]];
    }
    exit() {
      this.module.saveDebugSettings(), super.exit();
    }
  };
  function me(t8) {
    return t8 !== null && typeof t8 == "object" && Object.getPrototypeOf(t8) === Object.prototype && !Array.isArray(t8);
  }
  __name(me, "me");
  r(me, "isPlainObject");
  function f(t8, e, n = { concatArrays: true, matchingOnly: false }) {
    if (t8 === void 0) return e;
    if (e === void 0) return t8;
    if (Array.isArray(t8) && Array.isArray(e) && n.concatArrays) return [...t8, ...e];
    if (me(t8) && me(e)) {
      let i = { ...t8 }, o = Object.keys(t8).length === 0, s = n.matchingOnly && !o ? Object.keys(e).filter((a) => a in t8) : Object.keys(e);
      for (let a of s) a === "__proto__" || a === "constructor" || a === "prototype" || (i[a] = a in t8 ? f(t8[a], e[a], n) : e[a]);
      return i;
    }
    return e;
  }
  __name(f, "f");
  r(f, "deepMerge");
  function Kt(t8) {
    let e = JSON.parse(JSON.stringify(t8)), n = [];
    for (; e.length > 0; ) {
      let i = Math.floor(Math.random() * e.length);
      n.push(e[i]), e.splice(i, 1);
    }
    return n;
  }
  __name(Kt, "Kt");
  r(Kt, "shuffleArray");
  function O(t8, e) {
    let n = t8.split("."), i = globalThis;
    for (let o = 0; o < n.length - 1; o++) i[n[o]] || (i[n[o]] = {}), i = i[n[o]];
    i[n[n.length - 1]] = e;
  }
  __name(O, "O");
  r(O, "exportToGlobal");
  function q(t8, e) {
    for (; t8 && t8 !== Object.prototype; ) {
      if (Object.getOwnPropertyDescriptor(t8, e)?.get) return true;
      t8 = Object.getPrototypeOf(t8);
    }
    return false;
  }
  __name(q, "q");
  r(q, "hasGetter");
  function Jt(t8, e) {
    for (; t8 && t8 !== Object.prototype; ) {
      if (Object.getOwnPropertyDescriptor(t8, e)?.set) return true;
      t8 = Object.getPrototypeOf(t8);
    }
    return false;
  }
  __name(Jt, "Jt");
  r(Jt, "hasSetter");
  var he = r((t8) => Math.round(t8 / 100) / 10, "byteToKB");
  function X(t8, e) {
    try {
      return { ok: true, value: t8() };
    } catch (n) {
      return { ok: false, error: e ? e(n) : n };
    }
  }
  __name(X, "X");
  r(X, "tryCatch");
  async function pe(t8, e) {
    try {
      return { ok: true, value: await t8() };
    } catch (n) {
      return { ok: false, error: e ? e(n) : n };
    }
  }
  __name(pe, "pe");
  r(pe, "tryCatchAsync");
  var u = { createButton: Me, createCheckbox: Ve, createInput: Ae, createLabel: We, createCustom: Re, createDropdown: De, createTooltip: Xe, getTooltip: fe, setTooltip: ee, createBackNext: Ne };
  function Me(t8) {
    t8.id ??= ElementGenerateID();
    let e = document.getElementById(t8.id);
    if (e) return e;
    t8.type = "button";
    let n;
    t8.options?.image && (n = t8.options.image, t8.options.image = void 0);
    let i = typeof t8?.disabled == "function" ? t8?.disabled() : t8?.disabled, o = ElementButton.Create(t8.id, t8?.onClick ?? (() => {
    }), f({ labelPosition: "center" }, t8.options), f({ button: { classList: ["deeplib-button"], attributes: { disabled: i }, children: [n ? f({ tag: "img", attributes: { id: `${t8.id}-image`, alt: "", decoding: "async", loading: "lazy", src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }, style: { "--image": `url("${n}")` } }, t8.htmlOptions?.img) : void 0] } }, t8.htmlOptions ?? {}));
    return I.currentElements.push([o, t8]), o;
  }
  __name(Me, "Me");
  r(Me, "elementCreateButton");
  function Ve(t8) {
    t8.id ??= ElementGenerateID();
    let e = document.getElementById(t8.id);
    if (e) return e;
    t8.type = "checkbox";
    let n = typeof t8?.disabled == "function" ? t8?.disabled() : t8?.disabled, i = ElementCreate(f({ tag: "label", classList: ["deeplib-checkbox-container", t8?.options?.direction ?? "rowReverse"], attributes: { id: `${t8.id}-container`, for: t8.id }, children: [t8.label ? f({ tag: "span", classList: ["deeplib-text"], attributes: { id: `${t8.id}-label` }, children: [t8.label] }, t8.htmlOptions?.label) : void 0, f({ tag: "input", classList: ["checkbox", "deeplib-input"], attributes: { type: "checkbox", id: t8.id, disabled: n, checked: t8?.setElementValue?.() || void 0 }, eventListeners: { change: r(function() {
      t8?.setSettingValue?.(this.checked);
    }, "change") } }, t8.htmlOptions?.checkbox)] }, t8.htmlOptions?.container));
    return t8.description && (i.addEventListener("mouseover", function(o) {
      z.call(this, o, t8.description || null);
    }), i.addEventListener("mouseout", function(o) {
      P.call(this, o);
    })), I.currentElements.push([i, t8]), i;
  }
  __name(Ve, "Ve");
  r(Ve, "elementCreateCheckbox");
  function Re(t8) {
    t8.id ??= ElementGenerateID(), t8.htmlOptions.attributes ??= {}, t8.htmlOptions.attributes.id ??= t8.id;
    let e = document.getElementById(t8.htmlOptions.attributes.id);
    if (e) return e;
    t8.type = "custom";
    let n = ElementCreate(t8.htmlOptions);
    return I.currentElements.push([n, t8]), n;
  }
  __name(Re, "Re");
  r(Re, "elementCreateCustom");
  function Ae(t8) {
    t8.id ??= ElementGenerateID();
    let e = document.getElementById(t8.id);
    if (e) return e;
    let n = typeof t8?.disabled == "function" ? t8?.disabled() : t8?.disabled, i = ElementCreate(f({ tag: "label", classList: ["deeplib-input-container", t8?.options?.direction ?? void 0], attributes: { id: `${t8.id}-container`, for: t8.id }, children: [t8.label ? f({ tag: "span", classList: ["deeplib-text"], attributes: { id: `${t8.id}-label` }, children: [t8.label] }, t8.htmlOptions?.label) : void 0, f({ tag: "input", classList: ["deeplib-input"], attributes: { type: t8.type, id: t8.id, placeholder: " ", disabled: n, value: t8?.setElementValue?.() || void 0 }, eventListeners: { input: r(function() {
      t8?.setSettingValue?.(this.value);
    }, "input") } }, t8.htmlOptions?.input)] }, t8.htmlOptions?.container));
    return t8.description && (i.addEventListener("mouseover", function(o) {
      z.call(this, o, t8.description || null);
    }), i.addEventListener("mouseout", function(o) {
      P.call(this, o);
    })), I.currentElements.push([i, t8]), i;
  }
  __name(Ae, "Ae");
  r(Ae, "elementCreateInput");
  function We(t8) {
    t8.id ??= ElementGenerateID();
    let e = document.getElementById(t8.id);
    if (e) return e;
    t8.type = "label";
    let n = ElementCreate(f({ tag: "label", classList: ["deeplib-label", "deeplib-text"], attributes: { id: t8.id }, children: [t8.label] }, t8.htmlOptions));
    return t8.description && (n.addEventListener("mouseover", function(i) {
      z.call(this, i, t8.description || null);
    }), n.addEventListener("mouseout", function(i) {
      P.call(this, i);
    })), I.currentElements.push([n, t8]), n;
  }
  __name(We, "We");
  r(We, "elementCreateLabel");
  function De(t8) {
    t8.id ??= ElementGenerateID();
    let e = document.getElementById(`${t8.id}-container`);
    if (e) return e;
    t8.type = "dropdown";
    let n = ElementDropdown.CreateLabelled(t8.id, t8.optionsList, t8.label ?? "", t8.onChange ?? function() {
      return t8.setSettingValue?.(this.value);
    }, t8.options, f({ container: { classList: ["deeplib-dropdown-container", t8?.options?.direction ?? void 0], attributes: { id: `${t8.id}-container`, for: t8.id }, eventListeners: { mouseover: r(function(i) {
      z.call(this, i, t8.description || null);
    }, "mouseover"), mouseout: r(function(i) {
      P.call(this, i);
    }, "mouseout") } }, label: { classList: ["deeplib-text"], attributes: { id: `${t8.id}-label` } } }, t8.htmlOptions));
    return I.currentElements.push([n, t8]), n;
  }
  __name(De, "De");
  r(De, "elementCreateDropdown");
  function Xe() {
    return ElementCreate({ tag: "div", classList: ["deeplib-tooltip", "anchor-bottom"], attributes: { id: "deeplib-tooltip" }, style: { display: "none" } });
  }
  __name(Xe, "Xe");
  r(Xe, "elementCreateTooltip");
  function fe() {
    return document.getElementById("deeplib-tooltip") ?? void 0;
  }
  __name(fe, "fe");
  r(fe, "elementGetTooltip");
  function z(t8, e) {
    let n = this.getBoundingClientRect();
    ee(e, "bottom");
    let i = fe();
    if (i) {
      i.offsetHeight;
      let o = i.getBoundingClientRect();
      (S.doRectsOverlap(n, o) ? "top" : "bottom") === "top" && ve("top");
    }
  }
  __name(z, "z");
  r(z, "tooltipMouseOver");
  function P(t8) {
    ee(null);
  }
  __name(P, "P");
  r(P, "tooltipMouseOut");
  function ee(t8, e = "bottom") {
    let n = document.getElementById("deeplib-tooltip");
    if (!n) return false;
    ve(e);
    let i = t8 == null ? null : CommonIsObject(t8) && "tag" in t8 ? [ElementCreate(t8)] : CommonIsArray(t8) ? t8.map((o) => CommonIsObject(o) && "tag" in o ? ElementCreate(o) : typeof o == "string" || CommonIsObject(t8) && "tag" in t8 || o instanceof HTMLElement ? o : null).filter((o) => o !== null) : typeof t8 == "string" ? [t8] : null;
    return i === null ? (n.childNodes.forEach((o) => o.remove()), n.style.display = "none", true) : (n.replaceChildren(...i), n.style.display = "", true);
  }
  __name(ee, "ee");
  r(ee, "elementSetTooltip");
  function ve(t8) {
    let e = document.getElementById("deeplib-tooltip");
    if (!e) return false;
    e.classList.toggle("anchor-bottom", t8 === "bottom"), e.classList.toggle("anchor-top", t8 === "top");
  }
  __name(ve, "ve");
  r(ve, "elementSetTooltipPosition");
  function Ne(t8) {
    t8.id ??= ElementGenerateID();
    let e = document.getElementById(t8.id);
    if (e) return e;
    let n = r((a) => {
      let c = document.getElementById(`${t8.id}-label`);
      if (!c) return false;
      c.textContent = a;
    }, "setLabel"), i = r((a) => {
      let c = document.getElementById(`deeplib-prev-next-${t8.id}-prev-button-tooltip`);
      if (!c) return false;
      c.textContent = a;
    }, "setPrevTooltip"), o = r((a) => {
      let c = document.getElementById(`deeplib-prev-next-${t8.id}-next-button-tooltip`);
      if (!c) return false;
      c.textContent = a;
    }, "setNextTooltip");
    return ElementCreate({ tag: "div", classList: ["deeplib-prev-next"], attributes: { id: t8.id }, children: [u.createButton({ id: `deeplib-prev-next-${t8.id}-prev-button`, onClick: r(() => {
      t8.back({ setLabel: n, setBackTooltip: i, setNextTooltip: o });
    }, "onClick"), htmlOptions: { button: { classList: ["deeplib-prev-next-button"] } }, options: { noStyling: true, image: `${"https://protokink.github.io/CATS/public"}/dl_images/arrow_left.svg`, tooltip: t8.initialPrevTooltip } }), u.createLabel({ id: `${t8.id}-label`, label: t8.initialLabel, htmlOptions: { classList: ["deeplib-prev-next-label"] } }), u.createButton({ id: `deeplib-prev-next-${t8.id}-next-button`, onClick: r(() => {
      t8.next({ setLabel: n, setBackTooltip: i, setNextTooltip: o });
    }, "onClick"), htmlOptions: { button: { classList: ["deeplib-prev-next-button"] } }, options: { noStyling: true, image: `${"https://protokink.github.io/CATS/public"}/dl_images/arrow_right.svg`, tooltip: t8.initialNextTooltip } })] });
  }
  __name(Ne, "Ne");
  r(Ne, "elementPrevNext");
  var A = class t4 extends I {
    static {
      __name(this, "t");
    }
    static {
      r(this, "MainMenu");
    }
    subscreens = [];
    static options = {};
    static subscreenOptions = { name: "mainmenu", doShowExitButton: false, settingsWidth: 600 };
    constructor(e) {
      super(e), this.subscreens = e.subscreens;
    }
    load() {
      if (!M.instance || CurrentModule !== "DeepLibMod") {
        this.setSubscreen(this);
        return;
      }
      super.load();
      let e = u.createButton({ id: "exit", size: [90, 90], onClick: r(() => {
        this.exit();
      }, "onClick"), options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/exit.svg`, tooltip: g("settings.button.back_button_hint") } }), n = document.getElementById("deeplib-nav-menu");
      n && n.append(e);
      for (let o of this.subscreens) {
        if (o.options.name === "mainmenu") continue;
        let s = u.createButton({ id: `${o.options.name}-button`, onClick: r(() => {
          this.setSubscreen(o);
        }, "onClick"), size: [null, 90], options: { image: o.options.icon, label: g(`mainmenu.button.${o.options.name}`) } });
        b.appendToSettingsDiv(s);
      }
      let i = b.getMiscDiv();
      if (b.appendToSubscreen(i), t4.options.wikiLink) {
        let o = u.createButton({ id: "deeplib-wiki-button", onClick: r(() => {
          window.open(t4.options.wikiLink, "_blank");
        }, "onClick"), size: [null, 80], options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/notebook.svg`, label: g("mainmenu.button.wiki") } });
        b.appendToMiscDiv(o);
      }
      if (t4.options.repoLink) {
        let o = u.createButton({ id: "deeplib-repo-button", onClick: r(() => {
          window.open(t4.options.repoLink, "_blank");
        }, "onClick"), size: [null, 80], options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/git.svg`, label: g("mainmenu.button.repo") } });
        b.appendToMiscDiv(o);
      }
      if (t4.options.resetSubscreen) {
        let o = u.createButton({ id: "deeplib-reset-button", onClick: r(() => {
          this.setSubscreen(t4.options.resetSubscreen);
        }, "onClick"), size: [null, 80], options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/trash_bin.svg`, label: g("mainmenu.button.reset") } });
        b.appendToMiscDiv(o);
      }
      if (t4.options.importExportSubscreen) {
        let o = u.createButton({ id: "deeplib-import-export-button", onClick: r(() => {
          this.setSubscreen(t4.options.importExportSubscreen);
        }, "onClick"), size: [null, 80], options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/transfer.svg`, label: g("mainmenu.button.import_export") } });
        b.appendToMiscDiv(o);
      }
      if (t4.options.storageFullnessIndicator) {
        let s = he(p.storageSize()), a = (s / 180 * 100).toFixed(1), c = u.createButton({ id: CommonGenerateUniqueID(), size: [null, 80], options: { tooltipPosition: "left", noStyling: true, tooltip: g("mainmenu.meter.storage_hint", { $percentage$: a }), label: g("mainmenu.meter.storage_label", { $currentCapacity$: s, $maxCapacity$: 180 }) }, htmlOptions: { button: { children: [{ tag: "div", attributes: { id: "deeplib-storage-meter" }, children: [{ tag: "div", attributes: { id: "deeplib-storage-bar" }, style: { width: `${a}%` } }] }] } } });
        b.appendToMiscDiv(c);
      }
      if (B("DebugModule")) {
        let o = u.createButton({ id: "deeplib-debug-button", onClick: r(() => {
          this.setSubscreen(new j(B("DebugModule")));
        }, "onClick"), size: [90, 90], options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/bug.svg` } });
        n && n.prepend(o);
      }
    }
    run() {
      super.run();
    }
    click() {
    }
    exit() {
      CharacterAppearanceForceUpCharacter = -1, CharacterLoadCanvas(Player);
      let e = typeof this.options.returnScreen == "function" ? this.options.returnScreen() : this.options.returnScreen;
      e ? e instanceof I ? E(e).then(() => {
      }) : Array.isArray(e) && CommonSetScreen(...e) : PreferenceOpenSubscreen("Extensions").then(() => {
        PreferenceSubscreenExtensionsClear();
      });
    }
    resize() {
      super.resize(), ElementSetPosition("deeplib-misc", 1905, 930, "bottom-right"), ElementSetSize("deeplib-misc", 405, null);
    }
    static setOptions(e) {
      t4.options = e;
    }
  };
  var F = class t5 {
    static {
      __name(this, "t");
    }
    static {
      r(this, "Localization");
    }
    static LibTranslation = {};
    static ModTranslation = {};
    static PathToModTranslation;
    static PathToLibTranslation = `${"https://protokink.github.io/CATS/public"}/dl_translations/`;
    static DefaultLanguage = "en";
    static FetchFolder = false;
    static initialized = false;
    static async init(e) {
      if (t5.initialized) return;
      t5.initialized = true, t5.PathToModTranslation = (() => {
        if (e?.pathToTranslationsFolder) return e.pathToTranslationsFolder.endsWith("/") ? e.pathToTranslationsFolder : `${e.pathToTranslationsFolder}/`;
      })(), t5.DefaultLanguage = e?.defaultLanguage || t5.DefaultLanguage, t5.FetchFolder = e?.fetchFolder || t5.FetchFolder;
      let n = e?.fixedLanguage ? t5.DefaultLanguage : TranslationLanguage.toLowerCase(), i = await t5.fetchTranslation(t5.PathToLibTranslation, n);
      if (n === t5.DefaultLanguage) t5.LibTranslation = i;
      else {
        let s = await t5.fetchTranslation(t5.PathToLibTranslation, t5.DefaultLanguage);
        t5.LibTranslation = { ...s, ...i };
      }
      if (!t5.PathToModTranslation) return;
      let o = await t5.fetchTranslation(t5.PathToModTranslation, n, t5.FetchFolder);
      if (n === t5.DefaultLanguage) t5.ModTranslation = o;
      else {
        let s = await t5.fetchTranslation(t5.PathToModTranslation, t5.DefaultLanguage, t5.FetchFolder);
        t5.ModTranslation = { ...s, ...o };
      }
    }
    static unload() {
      t5.initialized = false, t5.LibTranslation = {}, t5.ModTranslation = {}, t5.PathToModTranslation = void 0, t5.PathToLibTranslation = `${"https://protokink.github.io/CATS/public"}/dl_translations/`, t5.DefaultLanguage = "en", t5.FetchFolder = false;
    }
    static getTextMod(e) {
      return t5.ModTranslation?.[e] || void 0;
    }
    static getTextLib(e) {
      return t5.LibTranslation?.[e] || void 0;
    }
    static async fetchTranslation(e, n, i = false) {
      if (i) {
        let a = `${e}${n}/`, c = await this.fetchLanguageFolder(a);
        if (Object.keys(c).length > 0) return c;
      }
      let o = `${e}${n}.lang`, s = await t5.fetchLanguageFile(o);
      if (n !== t5.DefaultLanguage && !s) {
        let a = `${e}${t5.DefaultLanguage}.lang`;
        return await this.fetchLanguageFile(a) || {};
      }
      return s || {};
    }
    static async fetchLanguageFile(e) {
      let n = await fetch(e).catch((o) => (m.error("Failed to fetch translation file:", o), new Response(null, { status: 500 })));
      if (!n.ok) return false;
      let i = await n.text();
      return this.parseTranslation(i);
    }
    static async fetchLanguageFolder(e) {
      let n = {}, i = "manifest.txt", o = null, s = await fetch(`${e}${i}`).catch((a) => (m.error("Failed to fetch language folder manifest:", a), new Response(null, { status: 500 })));
      if (s.ok && (o = (await s.text()).trim().split(`
`).map((c) => c.trim()).filter((c) => c && !c.startsWith("#"))), o && o.length > 0) {
        let a = o.map(async (d) => {
          try {
            let l = await t5.fetchLanguageFile(`${e}${d}`);
            if (l) return l;
          } catch {
          }
          return {};
        }), c = await Promise.all(a);
        for (let d of c) Object.assign(n, d);
        if (Object.keys(n).length > 0) return n;
      }
      return n;
    }
    static parseTranslation(e) {
      let n = {}, i = e.split(`
`);
      for (let o of i) {
        let s = o.trim();
        if (!s || s.startsWith("#")) continue;
        let [a, ...c] = s.split("=");
        n[a.trim()] = c.join("=").trim();
      }
      return n;
    }
  };
  var g = r((t8, e) => {
    let n = F.getTextMod(t8) || F.getTextLib(t8) || t8;
    if (e) {
      let i = Object.fromEntries(Object.entries(e).map(([o, s]) => [o, s.toString()]));
      return CommonStringPartitionReplace(n, i).join("");
    }
    return n;
  }, "getText");
  var W = class t6 {
    static {
      __name(this, "t");
    }
    constructor(e) {
      this.opts = e;
      e ??= {}, e.closeOnBackdrop ??= true, e.modalClassList ??= [];
      let n = `modal-prompt-${Date.now()}`, i = (CommonIsArray(e.prompt) ? e.prompt : [e.prompt]).filter((o) => o !== null) ?? [""];
      this.dialog = ElementCreate({ tag: "dialog", classList: ["deeplib-modal", ...e.modalClassList], attributes: { id: this.opts.modalId ?? `modal-${Date.now()}`, role: "dialog", "aria-modal": "true", "aria-labelledby": n }, children: [{ tag: "div", classList: ["deeplib-modal-prompt-container"], children: [...i] }, { tag: "div", classList: ["deeplib-modal-prompt"], attributes: { id: n }, children: [e.input ? this.renderInput(e.input) : void 0] }, this.renderButtons()] }), ElementSetFontSize(this.dialog, "auto"), this.blocker = this.createBlocker(), this.renderButtons(), document.body.append(this.createBlocker(), this.dialog), this.setupFocusTrap(), e.timeoutMs && (this.timeoutId = window.setTimeout(() => this.close("timeout"), e.timeoutMs)), e.onShow && e.onShow.call(this.dialog), this.updateIntervalId = window.setInterval(() => {
        ElementSetFontSize(this.dialog, "auto");
      }, 1e3);
    }
    opts;
    static {
      r(this, "Modal");
    }
    dialog;
    blocker;
    inputEl;
    timeoutId;
    updateIntervalId;
    static queue = [];
    static processing = false;
    show() {
      return t6.enqueue(this);
    }
    static async alert(e, n = {}) {
      await new t6({ prompt: e, buttons: [...n.buttons ?? [], { action: "close", text: g("modal.button.ok") }], timeoutMs: n.timeoutMs, escapeAction: "close", modalId: n.modalId, modalClassList: n.modalClassList, onShow: n.onShow }).show();
    }
    static async confirm(e, n = {}) {
      let [i] = await new t6({ prompt: e, buttons: [...n.buttons ?? [], { text: g("modal.button.decline"), action: "decline" }, { text: g("modal.button.confirm"), action: "confirm" }], escapeAction: "decline", enterAction: "confirm", modalId: n.modalId, modalClassList: n.modalClassList, onShow: n.onShow }).show();
      return i === "confirm";
    }
    static async prompt(e, n = {}) {
      let [i, o] = await new t6({ prompt: e, timeoutMs: 0, input: { type: "input", defaultValue: n.defaultValue }, buttons: [...n.buttons ?? [], { text: g("modal.button.cancel"), action: "cancel" }, { text: g("modal.button.submit"), action: "submit" }], escapeAction: "cancel", enterAction: "submit", modalId: n.modalId, modalClassList: n.modalClassList, onShow: n.onShow }).show();
      return i === "submit" ? o : null;
    }
    renderInput(e) {
      let n = document.createElement(e.type);
      return n.classList.add("deeplib-modal-input"), e.placeholder && (n.placeholder = e.placeholder), e.readOnly && (n.readOnly = true), e.defaultValue && (n.value = e.defaultValue), e.type === "textarea" && (n.rows = 5), n.addEventListener("input", () => {
        let i = e.validate?.(n.value);
        n.setCustomValidity(i || "");
      }), this.inputEl = n, n;
    }
    renderButtons() {
      let e = document.createElement("div");
      return e.classList.add("deeplib-modal-button-container"), (this.opts.buttons ? [...this.opts.buttons] : []).forEach((i) => {
        let o = u.createButton({ id: `deeplib-modal-${i.action}`, onClick: r(() => typeof i.action == "function" ? i.action() : this.close(i.action), "onClick"), options: { disabled: i.disabled, label: i.text } });
        e.append(o);
      }), e;
    }
    createBlocker() {
      let e = document.createElement("div");
      return e.classList.add("deeplib-modal-blocker"), e.title = "Click to close", this.opts.closeOnBackdrop !== false && e.addEventListener("click", () => this.close("close")), e;
    }
    setupFocusTrap() {
      let n = Array.from(this.dialog.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')), i = n[0], o = n[n.length - 1];
      this.dialog.addEventListener("keydown", (s) => {
        if (s.key === "Tab") {
          if (n.length === 0) {
            s.preventDefault();
            return;
          }
          s.shiftKey ? document.activeElement === i && (o.focus(), s.preventDefault()) : document.activeElement === o && (i.focus(), s.preventDefault());
        } else if (s.key === "Escape") s.stopPropagation(), this.close(this.opts.escapeAction ?? "close");
        else if (s.key === "Enter") {
          if (n.some((a) => a === document.activeElement) && document.activeElement !== this.inputEl) return;
          s.preventDefault(), s.stopPropagation(), this.close(this.opts.enterAction ?? "submit");
        }
      }), window.requestAnimationFrame(() => {
        (this.inputEl || i)?.focus();
      });
    }
    close(e) {
      this.timeoutId && clearTimeout(this.timeoutId), clearInterval(this.updateIntervalId), this.dialog.close(), this.dialog.remove(), this.blocker.remove(), document.body.querySelector(".deeplib-modal-blocker")?.remove();
      let n = this.inputEl?.value ?? "";
      this.resolve([e, n]), t6.dequeue();
    }
    resolve = r(() => {
    }, "resolve");
    static enqueue(e) {
      return t6.queue.push(e), t6.processing || t6.dequeue(), new Promise((n) => e.resolve = n);
    }
    static dequeue() {
      let e = t6.queue.shift();
      e ? (t6.processing = true, e.dialog.show()) : t6.processing = false;
    }
  };
  var Ie = class extends I {
    static {
      __name(this, "Ie");
    }
    static {
      r(this, "GuiImportExport");
    }
    importExportOptions;
    static subscreenOptions = { name: "import-export" };
    constructor(e) {
      super(), this.importExportOptions = e;
    }
    load() {
      super.load();
      let e = u.createButton({ id: "deeplib-import-file-button", size: [600, 90], onClick: r(() => {
        this.dataImport("file");
      }, "onClick"), options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/file_import.svg`, label: g("import-export.button.import_file") } });
      b.appendToSettingsDiv(e);
      let n = u.createButton({ id: "deeplib-export-file-button", size: [600, 90], onClick: r(() => {
        this.dataExport("file");
      }, "onClick"), options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/file_export.svg`, label: g("import-export.button.export_file") } });
      b.appendToSettingsDiv(n);
      let i = u.createButton({ id: "deeplib-import-clipboard-button", size: [600, 90], onClick: r(() => {
        this.dataImport("clipboard");
      }, "onClick"), options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/clipboard_import.svg`, label: g("import-export.button.import_clipboard") } });
      b.appendToSettingsDiv(i);
      let o = u.createButton({ id: "deeplib-export-clipboard-button", size: [600, 90], onClick: r(() => {
        this.dataExport("clipboard");
      }, "onClick"), options: { image: `${"https://protokink.github.io/CATS/public"}/dl_images/clipboard_export.svg`, label: g("import-export.button.export_clipboard") } });
      b.appendToSettingsDiv(o);
    }
    resize() {
      super.resize();
    }
    async dataExport(e) {
      try {
        let n = await this.getSelectedModules(y(), "export");
        if (!n) return;
        if (n.length === 0) {
          ToastManager.error("No modules selected for export.");
          return;
        }
        let i = this.buildExportPayload(n);
        if (e === "clipboard") await this.exportToClipboard(i);
        else if (e === "file" && !await this.exportToFile(i, "settings")) return;
        this.importExportOptions.onExport?.(), ToastManager.success("Data exported successfully.");
      } catch (n) {
        ToastManager.error("Data export failed."), m.error("Data export failed.", n);
      }
    }
    async dataImport(e) {
      try {
        let n = e === "clipboard" ? await this.importFromClipboard() : await this.importFromFile();
        if (n === null) return;
        if (!n) throw new Error("No data");
        if (!await this.applyImportPayload(n)) return;
        this.importExportOptions.onImport?.(), ToastManager.success("Data imported successfully.");
      } catch (n) {
        ToastManager.error("Data import failed."), m.error("Data import failed.", n);
      }
    }
    async exportToFile(e, n) {
      let i = this.importExportOptions.customFileExtension.startsWith(".") ? this.importExportOptions.customFileExtension : "." + this.importExportOptions.customFileExtension;
      if ("showSaveFilePicker" in window) try {
        let s = await (await window.showSaveFilePicker({ suggestedName: n + i, types: [{ description: "Custom Data Files", accept: { "text/plain": [i] } }] })).createWritable();
        return await s.write(e), await s.close(), true;
      } catch (o) {
        let s = o instanceof Error ? o.message : String(o);
        throw new Error(`File save cancelled or failed: ${s}`, { cause: o });
      }
      else {
        let o = await W.prompt("Enter file name", { defaultValue: n });
        if (o === null) return false;
        if (o === "") throw new Error("File name cannot be empty.");
        let s = new Blob([e], { type: "text/plain" }), a = ElementCreate({ tag: "a", attributes: { href: URL.createObjectURL(s), download: o + i } });
        return a.click(), URL.revokeObjectURL(a.href), true;
      }
    }
    async importFromFile() {
      let e = this.importExportOptions.customFileExtension.startsWith(".") ? this.importExportOptions.customFileExtension : "." + this.importExportOptions.customFileExtension;
      async function n(i) {
        if (!i.name.endsWith(e)) throw new Error(`Invalid file type. Expected a ${e} file.`);
        return new Promise((o, s) => {
          let a = new FileReader();
          a.onload = () => o(a.result), a.onerror = () => s(new Error("Failed to read file.")), a.readAsText(i);
        });
      }
      __name(n, "n");
      if (r(n, "importFromFileInternal"), "showOpenFilePicker" in window) try {
        let [i] = await window.showOpenFilePicker({ types: [{ description: "Custom Data Files", accept: { "text/plain": [e] } }], multiple: false }), o = await i.getFile();
        return await n(o);
      } catch (i) {
        let o = i instanceof Error ? i.message : String(i);
        throw new Error(`File selection cancelled or failed: ${o}`, { cause: i });
      }
      else return new Promise((i, o) => {
        let s = document.createElement("input");
        s.type = "file", s.accept = e, s.onchange = async (a) => {
          let c = a.target.files?.[0];
          if (c) try {
            let d = await n(c);
            i(d);
          } catch (d) {
            o(d);
          }
          else o(new Error("No file selected."));
        }, s.click();
      });
    }
    async exportToClipboard(e) {
      return navigator.clipboard.writeText(e).catch((n) => {
        let i = n instanceof Error ? n.message : String(n);
        throw new Error(`Failed to copy data to clipboard: ${i}`, { cause: n });
      });
    }
    async importFromClipboard() {
      return W.prompt("Enter data to import").catch((e) => {
        let n = e instanceof Error ? e.message : String(e);
        throw new Error(`Failed to read data from clipboard: ${n}`, { cause: e });
      });
    }
    async getSelectedModules(e, n) {
      let i = e.filter((l) => q(l, "settings") && !!l.settings), o = Object.fromEntries(i.map((l) => [l.constructor.name, true]));
      if (i.length === 0) throw new Error("No modules to choose from.");
      let s = i.map((l) => u.createCheckbox({ id: l.constructor.name, label: g(l.constructor.name), setElementValue: r(() => o[l.constructor.name], "setElementValue"), setSettingValue: r((h) => o[l.constructor.name] = h, "setSettingValue") })), a = n === "import" ? "import_export.import.select_modules" : "import_export.export.select_modules";
      if (!await W.confirm([g(a), ElementCreate({ tag: "br" }), g("import_export.text.not_sure"), { tag: "div", classList: ["deeplib-modal-checkbox-container"], children: s }], { modalId: "deeplib-modal-import_export" })) return null;
      let d = Object.entries(o).filter(([l, h]) => h).map(([l]) => B(l)).filter((l) => !!l);
      if (d.length === 0) throw new Error("No modules selected.");
      return d;
    }
    buildExportPayload(e) {
      let n = {};
      for (let i of e) !q(i, "settings") || i.settings === null || (n[i.constructor.name] = i.settings);
      return LZString.compressToBase64(JSON.stringify(n));
    }
    async applyImportPayload(e) {
      let n = JSON.parse(LZString.decompressFromBase64(e) ?? "");
      if (!n) throw new Error("Invalid import format.");
      let i = Object.keys(n).map((s) => B(s)).filter((s) => !!s), o = await this.getSelectedModules(i, "import");
      if (!o) return false;
      if (o.length === 0) throw new Error("No modules selected.");
      for (let s of o) {
        let a = n[s.constructor.name];
        if (!a) continue;
        let c = f(s.defaultSettings, a);
        c && (s.settings = c);
      }
      return true;
    }
  };
  var Q = class t7 {
    static {
      __name(this, "t");
    }
    static {
      r(this, "ModStorage");
    }
    static _instance = null;
    modName;
    constructor(e) {
      return t7._instance || (t7._instance = this, this.modName = e), this.modName ??= e, t7._instance;
    }
    get playerStorage() {
      return Player[this.modName];
    }
    set playerStorage(e) {
      Player[this.modName] = e;
    }
    get extensionStorage() {
      return Player.ExtensionSettings[this.modName];
    }
    set extensionStorage(e) {
      Player.ExtensionSettings[this.modName] = e;
    }
    setLocalStorage(e, n) {
      localStorage.setItem(`${this.modName}_${e}`, t7.dataCompress(n));
    }
    getLocalStorage(e) {
      let n = localStorage.getItem(`${this.modName}_${e}`);
      return n ? t7.dataDecompress(n) : null;
    }
    load() {
      if (this.extensionStorage) {
        let e = t7.dataDecompress(this.extensionStorage || "");
        e === null || !Object.hasOwn(e, "Version") ? this.playerStorage = { Version: "1.0.0" } : this.playerStorage = e;
      } else this.playerStorage = {};
    }
    save() {
      this.extensionStorage || (this.extensionStorage = ""), this.extensionStorage = t7.dataCompress(this.playerStorage), ServerPlayerExtensionSettingsSync(this.modName);
    }
    storageSize() {
      return t7.measureSize(this.extensionStorage);
    }
    static dataDecompress(e) {
      let n = LZString.decompressFromBase64(e), i = null;
      try {
        i = JSON.parse(n);
      } catch (o) {
        m.error(o);
      }
      return i;
    }
    static dataCompress(e) {
      return LZString.compressToBase64(JSON.stringify(e));
    }
    static measureSize(e) {
      try {
        if (typeof e != "string" && (e = JSON.stringify(e) || ""), typeof e == "string") return new TextEncoder().encode(e).byteLength;
        throw new Error();
      } catch {
        return NaN;
      }
    }
  };
  var S = { autoSetPosition: Ue, autoSetSize: Qe, hide: Ye, unhide: He, hasOverflow: je, doRectsOverlap: ze };
  function Ue(t8, e) {
    let n, i, o;
    if (Array.isArray(e)) n = e[0], i = e[1], o = e[2];
    else if (typeof e == "function") {
      let s = e();
      n = s[0], i = s[1], o = s[2];
    }
    n !== void 0 && i !== void 0 && ElementSetPosition(t8, n, i, o);
  }
  __name(Ue, "Ue");
  r(Ue, "autoSetPosition");
  function Qe(t8, e) {
    let n, i;
    if (Array.isArray(e)) n = e[0], i = e[1];
    else if (typeof e == "function") {
      let o = e();
      n = o[0], i = o[1];
    }
    n !== void 0 && i !== void 0 && ElementSetSize(t8, n, i);
  }
  __name(Qe, "Qe");
  r(Qe, "autoSetSize");
  function Ye(t8) {
    let e = ElementWrap(t8);
    e && (e.style.display = "none");
  }
  __name(Ye, "Ye");
  r(Ye, "hide");
  function He(t8) {
    let e = ElementWrap(t8);
    e && (e.style.display = "");
  }
  __name(He, "He");
  r(He, "unhide");
  function je(t8) {
    let e = ElementWrap(t8);
    if (!e) return null;
    let n = e.scrollHeight > e.clientHeight, i = e.scrollWidth > e.clientWidth;
    return { any: n || i, vertical: n, horizontal: i };
  }
  __name(je, "je");
  r(je, "hasOverflow");
  function ze(t8, e) {
    return !(t8.right < e.left || t8.left > e.right || t8.bottom < e.top || t8.top > e.bottom);
  }
  __name(ze, "ze");
  r(ze, "doRectsOverlap");
  var b = { getSubscreen: te, appendToSubscreen: Ke, removeSubscreen: Pe, getSettingsDiv: ne, appendToSettingsDiv: Je, removeSettingsDiv: $e, getMiscDiv: ie, appendToMiscDiv: _e, removeMiscDiv: qe };
  function te() {
    let t8 = ElementWrap("deeplib-subscreen");
    if (t8) return t8;
    let e = ElementCreate({ tag: "div", classList: ["deeplib-subscreen", "HideOnPopup"], attributes: { id: "deeplib-subscreen" } });
    return document.body.appendChild(e);
  }
  __name(te, "te");
  r(te, "elementGetSubscreenDiv");
  function Pe() {
    return te()?.remove();
  }
  __name(Pe, "Pe");
  r(Pe, "elementRemoveSubscreenDiv");
  function Ke(...t8) {
    return te()?.append(...t8);
  }
  __name(Ke, "Ke");
  r(Ke, "elementAppendToSubscreenDiv");
  function ne() {
    let t8 = ElementWrap("deeplib-settings");
    return t8 || ElementCreate({ tag: "div", classList: ["deeplib-settings", "scroll-box"], attributes: { id: "deeplib-settings" } });
  }
  __name(ne, "ne");
  r(ne, "elementGetSettingsDiv");
  function Je(...t8) {
    return ne()?.append(...t8);
  }
  __name(Je, "Je");
  r(Je, "elementAppendToSettingsDiv");
  function $e() {
    return ne()?.remove();
  }
  __name($e, "$e");
  r($e, "elementRemoveSettingsDiv");
  function ie() {
    let t8 = ElementWrap("deeplib-misc");
    return t8 || ElementCreate({ tag: "div", classList: ["deeplib-misc"], attributes: { id: "deeplib-misc" } });
  }
  __name(ie, "ie");
  r(ie, "elementGetMiscDiv");
  function _e(...t8) {
    return ie()?.append(...t8);
  }
  __name(_e, "_e");
  r(_e, "elementAppendToMiscDiv");
  function qe() {
    return ie()?.remove();
  }
  __name(qe, "qe");
  r(qe, "elementRemoveMiscDiv");
  var K = oe($(), 1);
  function et(t8) {
    let e = t8.name;
    return { INFO: "color: #32CCCC", TRACE: "color: #CCCC32", WARN: "color: #eec355", ERROR: "color: #750b0b", DEBUG: "color: #9E4BCF", TIME: "color: #CCCC32" }[e];
  }
  __name(et, "et");
  r(et, "colorizeLog");
  var C = K.default.get("DeepLib");
  K.default.useDefaults({ defaultLevel: K.default.DEBUG, formatter: r(function(t8, e) {
    let n = e.name || "DeepLib", i = navigator.userAgent.toLowerCase();
    if (i.includes("chrome") || i.includes("firefox")) {
      let o = et(e.level);
      t8.unshift(`%c${n}:`, o);
    } else t8.unshift(`${n}:`);
  }, "formatter") });
  function Rn(t8, e, n) {
    let i = ElementCreate({ tag: "div", classList: ["ChatMessage", "deeplib-message", "ChatMessageNonDialogue"], attributes: { id: t8 ?? `DEEPLIB_LOCAL_MESSAGE_${Date.now()}`, "data-time": ChatRoomCurrentTime(), "data-sender": Player.MemberNumber?.toString() }, children: [{ tag: "span", classList: ["deeplib-text"], innerHTML: e.replaceAll(`
	`, "") }, { tag: "br" }, { tag: "a", classList: ["deeplib-text"], attributes: { href: "#" }, innerHTML: "<b>Close (Click)</b>", eventListeners: { click: r(() => {
      i.remove();
    }, "click") } }] });
    ChatRoomAppendChat(i), n && setTimeout(() => i.remove(), n * 1e3);
  }
  __name(Rn, "Rn");
  r(Rn, "sendLocalMessage");
  function An(t8, e = void 0, n = []) {
    t8 && ServerSend("ChatRoomChat", { Content: "DEEPLIB_CUSTOM_ACTION", Type: "Action", Target: e ?? void 0, Dictionary: [{ Tag: 'MISSING TEXT IN "Interface.csv": DEEPLIB_CUSTOM_ACTION', Text: t8 }, ...n] });
  }
  __name(An, "An");
  r(An, "sendActionMessage");
  var k = { Observe: 0, AddBehavior: 1, ModifyBehavior: 5, OverrideBehavior: 10, Top: 100 };
  var Y = class {
    static {
      __name(this, "Y");
    }
    static {
      r(this, "ModSdkManager");
    }
    SDK;
    patchedFunctions = /* @__PURE__ */ new Map();
    constructor(e, n) {
      this.SDK = bcModSdk.registerMod(e, n);
    }
    hookFunction(e, n, i, o = null) {
      let s = this.initPatchableFunction(e), a = s.hooks.find((d) => d.hook === i);
      if (a) return console.warn(`Hook already exists for function ${e}:`, i.toString()), a.removeCallback;
      let c = this.SDK.hookFunction(e, n, i);
      return s.hooks.push({ hook: i, priority: n, module: o, removeCallback: c }), c;
    }
    patchFunction(e, n) {
      this.SDK.patchFunction(e, n);
    }
    unpatchFunction(e) {
      this.SDK.removePatches(e);
    }
    removeHookByModule(e, n) {
      let i = this.patchedFunctions.get(e);
      if (!i) return false;
      let o = false;
      for (let s = i.hooks.length - 1; s >= 0; s--) i.hooks[s].module === n && (i.hooks[s].removeCallback(), i.hooks.splice(s, 1), o = true);
      return i.hooks.length === 0 && this.patchedFunctions.delete(e), o;
    }
    removeAllHooksByModule(e) {
      let n = false;
      for (let i of this.patchedFunctions.values()) {
        for (let o = i.hooks.length - 1; o >= 0; o--) i.hooks[o].module === e && (i.hooks[o].removeCallback(), i.hooks.splice(o, 1), n = true);
        i.hooks.length === 0 && this.patchedFunctions.delete(i.name);
      }
      return n;
    }
    unload() {
      this.SDK.unload(), this.patchedFunctions.clear();
    }
    initPatchableFunction(e) {
      let n = this.patchedFunctions.get(e);
      return n || (n = { name: e, hooks: [] }, this.patchedFunctions.set(e, n)), n;
    }
  };
  var H = { injectInline(t8, e) {
    if (document.getElementById(t8)) return;
    let i = document.createElement("style");
    i.id = t8, i.appendChild(document.createTextNode(e)), document.head.appendChild(i);
  }, injectEmbed(t8, e) {
    if (document.getElementById(t8)) return;
    let i = document.createElement("link");
    i.id = t8, i.rel = "stylesheet", i.href = e, document.head.appendChild(i);
  }, eject(t8) {
    let e = document.getElementById(t8);
    e && e.remove();
  }, reload(t8, e) {
    H.eject(t8), H.injectInline(t8, e);
  }, async fetch(t8) {
    return fetch(t8).then((e) => e.text()).catch((e) => (m.error("Failed to fetch stylesheet:", e), ""));
  } };
  var xe = class {
    static {
      __name(this, "xe");
    }
    constructor(e) {
      this.channelName = e;
      this.removeHook = G.hookFunction("ChatRoomMessageProcessHidden", 0, (n, i) => {
        if (!this.isChannelMessage(n[0])) return i(n);
        let [o, s] = n, { type: a, data: c } = o.Dictionary[0], d = this.listeners[a];
        return d && d.forEach((l) => l(c, s)), i(n);
      }, `EventChannel-${e}`);
    }
    channelName;
    static {
      r(this, "EventChannel");
    }
    listeners = {};
    removeHook;
    unload() {
      Object.keys(this.listeners).forEach((e) => delete this.listeners[e]), this.removeHook();
    }
    sendEvent(e, n, i = null) {
      let o = { Type: "Hidden", Content: this.channelName, Sender: Player.MemberNumber, ...i ? { Target: i } : {}, Dictionary: [{ type: e, data: n }] };
      ServerSend("ChatRoomChat", o);
    }
    registerListener(e, n) {
      let i = this.listeners[e] ?? [];
      return i.push(n), this.listeners[e] = i, () => this.unregisterListener(e, n);
    }
    unregisterListener(e, n) {
      let i = this.listeners[e];
      if (i) {
        let o = i.indexOf(n);
        o !== -1 && i.splice(o, 1);
      }
    }
    isChannelMessage(e) {
      return e && e.Type === "Hidden" && e.Content === this.channelName && e.Sender && e.Sender !== Player.MemberNumber && e.Dictionary && e.Dictionary[0]?.data !== void 0 && e.Dictionary[0]?.type !== void 0 || false;
    }
  };

  // src/modules/commands.ts
  var CommandsModule = class extends L {
    static {
      __name(this, "CommandsModule");
    }
    get settings() {
      return B("GlobalModule").settings;
    }
    load() {
      CommandCombine({
        Tag: "cats",
        Description: "CATS commands",
        Subcommands: [
          {
            Tag: "toggle",
            Description: "Toggle CATS on or off",
            Action: /* @__PURE__ */ __name(() => {
              this.settings.modEnabled = !this.settings.modEnabled;
              const state = this.settings.modEnabled ? "ON" : "OFF";
              ChatRoomSendLocal(`Chat Translator is now ${state}`, 3e3);
              p.save();
            }, "Action")
          },
          {
            Tag: "status",
            Description: "Check the status of CATS",
            Action: /* @__PURE__ */ __name(() => {
              const state = this.settings.modEnabled ? "ON" : "OFF";
              const compose = this.settings.showComposeBar === true ? "ON" : "OFF";
              ChatRoomSendLocal(`Chat Translator is ${state}, compose bar ${compose}`, 4e3);
            }, "Action")
          },
          {
            Tag: "compose",
            Description: "Toggle the compose bar above chat input",
            Action: /* @__PURE__ */ __name(() => {
              this.settings.showComposeBar = this.settings.showComposeBar !== true;
              const compose = this.settings.showComposeBar === true ? "ON" : "OFF";
              ChatRoomSendLocal(`Compose bar is now ${compose}`, 3e3);
              p.save();
            }, "Action")
          },
          {
            Tag: "settings",
            Description: "Open the CATS settings",
            Action: /* @__PURE__ */ __name(async () => {
              ChatRoomOpenInformationScreen();
              await E("mainmenu");
            }, "Action")
          }
        ]
      });
    }
  };

  // src/utilities/languages.ts
  var googleSourceLanguages = {
    "auto": "Detect language",
    "af": "Afrikaans",
    "sq": "Albanian",
    "am": "Amharic",
    "ar": "Arabic",
    "hy": "Armenian",
    "as": "Assamese",
    "ay": "Aymara",
    "az": "Azerbaijani",
    "bm": "Bambara",
    "eu": "Basque",
    "be": "Belarusian",
    "bn": "Bengali",
    "bho": "Bhojpuri",
    "bs": "Bosnian",
    "bg": "Bulgarian",
    "ca": "Catalan",
    "ceb": "Cebuano",
    "ny": "Chichewa",
    "zh-CN": "Chinese (Simplified)",
    "zh-TW": "Chinese (Traditional)",
    "co": "Corsican",
    "hr": "Croatian",
    "cs": "Czech",
    "da": "Danish",
    "dv": "Dhivehi",
    "doi": "Dogri",
    "nl": "Dutch",
    "en": "English",
    "eo": "Esperanto",
    "et": "Estonian",
    "ee": "Ewe",
    "tl": "Filipino",
    "fi": "Finnish",
    "fr": "French",
    "fy": "Frisian",
    "gl": "Galician",
    "ka": "Georgian",
    "de": "German",
    "el": "Greek",
    "gn": "Guarani",
    "gu": "Gujarati",
    "ht": "Haitian Creole",
    "ha": "Hausa",
    "haw": "Hawaiian",
    "iw": "Hebrew",
    "hi": "Hindi",
    "hmn": "Hmong",
    "hu": "Hungarian",
    "is": "Icelandic",
    "ig": "Igbo",
    "ilo": "Ilocano",
    "id": "Indonesian",
    "ga": "Irish",
    "it": "Italian",
    "ja": "Japanese",
    "jw": "Javanese",
    "kn": "Kannada",
    "kk": "Kazakh",
    "km": "Khmer",
    "rw": "Kinyarwanda",
    "gom": "Konkani",
    "ko": "Korean",
    "kri": "Krio",
    "ku": "Kurdish (Kurmanji)",
    "ckb": "Kurdish (Sorani)",
    "ky": "Kyrgyz",
    "lo": "Lao",
    "la": "Latin",
    "lv": "Latvian",
    "ln": "Lingala",
    "lt": "Lithuanian",
    "lg": "Luganda",
    "lb": "Luxembourgish",
    "mk": "Macedonian",
    "mai": "Maithili",
    "mg": "Malagasy",
    "ms": "Malay",
    "ml": "Malayalam",
    "mt": "Maltese",
    "mi": "Maori",
    "mr": "Marathi",
    "mni-Mtei": "Meiteilon (Manipuri)",
    "lus": "Mizo",
    "mn": "Mongolian",
    "my": "Myanmar (Burmese)",
    "ne": "Nepali",
    "no": "Norwegian",
    "or": "Odia (Oriya)",
    "om": "Oromo",
    "ps": "Pashto",
    "fa": "Persian",
    "pl": "Polish",
    "pt": "Portuguese",
    "pa": "Punjabi",
    "qu": "Quechua",
    "ro": "Romanian",
    "ru": "Russian",
    "sm": "Samoan",
    "sa": "Sanskrit",
    "gd": "Scots Gaelic",
    "nso": "Sepedi",
    "sr": "Serbian",
    "st": "Sesotho",
    "sn": "Shona",
    "sd": "Sindhi",
    "si": "Sinhala",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somali",
    "es": "Spanish",
    "su": "Sundanese",
    "sw": "Swahili",
    "sv": "Swedish",
    "tg": "Tajik",
    "ta": "Tamil",
    "tt": "Tatar",
    "te": "Telugu",
    "th": "Thai",
    "ti": "Tigrinya",
    "ts": "Tsonga",
    "tr": "Turkish",
    "tk": "Turkmen",
    "ak": "Twi",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "ug": "Uyghur",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "cy": "Welsh",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "yo": "Yoruba",
    "zu": "Zulu"
  };
  function isGoogleSourceLanguage(value) {
    return Object.hasOwn(googleSourceLanguages, value);
  }
  __name(isGoogleSourceLanguage, "isGoogleSourceLanguage");
  function isGoogleTargetLanguage(value) {
    return value !== "auto" && Object.hasOwn(googleSourceLanguages, value);
  }
  __name(isGoogleTargetLanguage, "isGoogleTargetLanguage");
  var googleTargetLanguages = CommonOmit(googleSourceLanguages, ["auto"]);

  // src/screens/translator.ts
  var TranslatorSubscreen = class extends I {
    static {
      __name(this, "TranslatorSubscreen");
    }
    static subscreenOptions = {
      name: "translator",
      icon: `${"https://protokink.github.io/CATS/public"}/images/translator.svg`
    };
    get settings() {
      return super.settings;
    }
    load() {
      super.load();
      const settings = this.settings;
      u.createLabel({
        id: "cats-incoming-lang-label",
        label: g("translator.incomingLanguagesLabel"),
        htmlOptions: {
          parent: b.getSettingsDiv()
        }
      });
      const incomingSourceLangOptions = Object.entries(googleSourceLanguages).map(([key, value]) => ({
        attributes: {
          value: key,
          label: value,
          selected: key === this.settings.google.incomingSourceLang
        }
      }));
      u.createDropdown({
        id: "cats-incoming-source-lang",
        optionsList: incomingSourceLangOptions,
        label: g("translator.source"),
        onChange: /* @__PURE__ */ __name(function() {
          const sourceLang = this.value;
          if (!sourceLang) return;
          if (googleSourceLanguages[sourceLang]) {
            settings.google.incomingSourceLang = sourceLang;
          }
        }, "onChange"),
        htmlOptions: {
          container: {
            parent: b.getSettingsDiv()
          },
          select: {
            classList: ["cats-lang-select"]
          }
        }
      });
      const incomingTargetLangOptions = Object.entries(googleSourceLanguages).filter(([key]) => key !== "auto").map(([key, value]) => ({
        attributes: {
          value: key,
          label: value,
          selected: key === this.settings.google.incomingTargetLang
        }
      }));
      u.createDropdown({
        id: "cats-incoming-target-lang",
        optionsList: incomingTargetLangOptions,
        label: g("translator.target"),
        onChange: /* @__PURE__ */ __name(function() {
          const targetLang = this.value;
          if (!targetLang) return;
          if (googleSourceLanguages[targetLang]) {
            settings.google.incomingTargetLang = targetLang;
          }
        }, "onChange"),
        htmlOptions: {
          container: {
            parent: b.getSettingsDiv()
          },
          select: {
            classList: ["cats-lang-select"]
          }
        }
      });
      u.createLabel({
        id: "cats-compose-lang-label",
        label: g("translator.composeLanguagesLabel"),
        htmlOptions: {
          parent: b.getSettingsDiv()
        }
      });
      const composeSourceLangOptions = Object.entries(googleSourceLanguages).map(([key, value]) => ({
        attributes: {
          value: key,
          label: value,
          selected: key === this.settings.google.composeSourceLang
        }
      }));
      u.createDropdown({
        id: "cats-compose-source-lang",
        optionsList: composeSourceLangOptions,
        label: g("translator.source"),
        onChange: /* @__PURE__ */ __name(function() {
          const sourceLang = this.value;
          if (!sourceLang) return;
          if (googleSourceLanguages[sourceLang]) {
            settings.google.composeSourceLang = sourceLang;
          }
        }, "onChange"),
        htmlOptions: {
          container: {
            parent: b.getSettingsDiv()
          },
          select: {
            classList: ["cats-lang-select"]
          }
        }
      });
      const composeTargetLangOptions = Object.entries(googleSourceLanguages).filter(([key]) => key !== "auto").map(([key, value]) => ({
        attributes: {
          value: key,
          label: value,
          selected: key === this.settings.google.composeTargetLang
        }
      }));
      u.createDropdown({
        id: "cats-compose-target-lang",
        optionsList: composeTargetLangOptions,
        label: g("translator.target"),
        onChange: /* @__PURE__ */ __name(function() {
          const targetLang = this.value;
          if (!targetLang) return;
          if (googleSourceLanguages[targetLang]) {
            settings.google.composeTargetLang = targetLang;
          }
        }, "onChange"),
        htmlOptions: {
          container: {
            parent: b.getSettingsDiv()
          },
          select: {
            classList: ["cats-lang-select"]
          }
        }
      });
    }
  };

  // src/modules/translator.ts
  var TranslatorModule = class _TranslatorModule extends L {
    static {
      __name(this, "TranslatorModule");
    }
    static _instance;
    constructor() {
      super();
      _TranslatorModule._instance = this;
    }
    get settingsScreen() {
      return TranslatorSubscreen;
    }
    get settings() {
      return super.settings;
    }
    set settings(val) {
      super.settings = val;
    }
    get defaultSettings() {
      return {
        google: {
          incomingSourceLang: "auto",
          incomingTargetLang: "en",
          composeSourceLang: "auto",
          composeTargetLang: "en"
        }
      };
    }
    static async googleTranslate(text, sourceLang, targetLang) {
      const url = "https://translate-pa.googleapis.com/v1/translate?" + new URLSearchParams({
        "params.client": "gtx",
        "dataTypes": "TRANSLATION",
        "key": "AIzaSyDLEeFI5OtFBwYBIoK_jj5m32rZK5CkCXA",
        // some google API key
        "query.sourceLanguage": sourceLang,
        "query.targetLanguage": targetLang,
        "query.text": text
      });
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(
          `Failed to translate "${text}" (${sourceLang} -> ${targetLang})
${res.status} ${res.statusText}`
        );
      const { sourceLanguage, translation } = await res.json();
      return {
        sourceLanguage,
        translation
      };
    }
    static async translate(text, options) {
      const google = _TranslatorModule._instance?.settings?.google;
      if (!google) return void 0;
      const sourceLang = options?.sourceLang ?? (isGoogleSourceLanguage(google.incomingSourceLang) ? google.incomingSourceLang : "auto");
      const targetLang = options?.targetLang ?? (isGoogleTargetLanguage(google.incomingTargetLang) ? google.incomingTargetLang : "en");
      if (!isGoogleSourceLanguage(sourceLang) || !isGoogleTargetLanguage(targetLang)) return void 0;
      if (sourceLang !== "auto" && sourceLang === targetLang) {
        return { sourceLanguage: sourceLang, text };
      }
      const { sourceLanguage, translation } = await _TranslatorModule.googleTranslate(text, sourceLang, targetLang);
      return { sourceLanguage, text: translation };
    }
  };

  // src/screens/global.ts
  var GlobalSubscreen = class extends I {
    static {
      __name(this, "GlobalSubscreen");
    }
    static subscreenOptions = {
      name: "global",
      icon: `${"https://protokink.github.io/CATS/public"}/images/cog.svg`
    };
    get settings() {
      return super.settings;
    }
    load() {
      super.load();
      const modEnabledLabel = u.createCheckbox({
        id: "cats-mod-enabled",
        label: g("global.modEnabled"),
        setElementValue: /* @__PURE__ */ __name(() => this.settings.modEnabled, "setElementValue"),
        setSettingValue: /* @__PURE__ */ __name((val) => {
          this.settings.modEnabled = val;
        }, "setSettingValue")
      });
      b.getSettingsDiv().appendChild(modEnabledLabel);
      const doShowNewVersionMessageLabel = u.createCheckbox({
        id: "cats-do-show-new-version-message",
        label: g("global.showNewVersionMessage"),
        setElementValue: /* @__PURE__ */ __name(() => this.settings.doShowNewVersionMessage, "setElementValue"),
        setSettingValue: /* @__PURE__ */ __name((val) => {
          this.settings.doShowNewVersionMessage = val;
        }, "setSettingValue")
      });
      b.getSettingsDiv().appendChild(doShowNewVersionMessageLabel);
      const incomingAutoTranslateCheckbox = u.createCheckbox({
        id: "cats-incoming-auto-translate",
        label: g("global.incomingAutoTranslate"),
        setElementValue: /* @__PURE__ */ __name(() => this.settings.incomingAutoTranslate, "setElementValue"),
        setSettingValue: /* @__PURE__ */ __name((val) => {
          this.settings.incomingAutoTranslate = val;
        }, "setSettingValue")
      });
      b.appendToSettingsDiv(incomingAutoTranslateCheckbox);
      const showTranslateButtonCheckbox = u.createCheckbox({
        id: "cats-show-translate-button",
        label: g("global.showTranslateButton"),
        setElementValue: /* @__PURE__ */ __name(() => this.settings.showTranslateButton, "setElementValue"),
        setSettingValue: /* @__PURE__ */ __name((val) => {
          this.settings.showTranslateButton = val;
          syncTranslateButtonVisibility(val);
        }, "setSettingValue")
      });
      b.appendToSettingsDiv(showTranslateButtonCheckbox);
      const showComposeBarCheckbox = u.createCheckbox({
        id: "cats-show-compose-bar",
        label: g("global.showComposeBar"),
        setElementValue: /* @__PURE__ */ __name(() => this.settings.showComposeBar === true, "setElementValue"),
        setSettingValue: /* @__PURE__ */ __name((val) => {
          this.settings.showComposeBar = val;
        }, "setSettingValue")
      });
      b.appendToSettingsDiv(showComposeBarCheckbox);
      const prettifyOnTranslateCheckbox = u.createCheckbox({
        id: "cats-prettify-on-translate",
        label: g("global.prettifyOnTranslate"),
        setElementValue: /* @__PURE__ */ __name(() => this.settings.prettifyOnTranslate, "setElementValue"),
        setSettingValue: /* @__PURE__ */ __name((val) => {
          this.settings.prettifyOnTranslate = val;
          syncEmojiBackgroundVisibility(val);
        }, "setSettingValue")
      });
      b.appendToSettingsDiv(prettifyOnTranslateCheckbox);
    }
  };

  // src/utilities/pretty.ts
  function catsify(messageElement) {
    const emojiBackground = ElementCreate({
      tag: "div",
      classList: ["cats-emoji-background"]
    });
    messageElement.prepend(emojiBackground);
    let frameAttempts = 0;
    const maxFrameAttempts = 10;
    const renderEmojis = /* @__PURE__ */ __name(() => {
      const rect = emojiBackground.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (!width || !height) {
        frameAttempts += 1;
        if (frameAttempts <= maxFrameAttempts) {
          requestAnimationFrame(renderEmojis);
        }
        return;
      }
      emojiBackground.textContent = "";
      const minDim = Math.min(width, height);
      const sizeScale = Math.min(1, minDim / 80);
      const emojiSizePx = minDim * 0.18;
      const minDistancePx = emojiSizePx * (1.15 + 0.2 * (1 - sizeScale));
      const radiusPx = emojiSizePx / 2;
      const containerArea = width * height;
      const emojiArea = Math.PI * (radiusPx * radiusPx);
      const packingFactor = 0.35 * Math.max(0.55, sizeScale);
      const maxEmojis = 48;
      const maxByHeight = Math.min(48, Math.max(5, Math.round(height / 10)));
      const emojiCount = Math.min(
        maxEmojis,
        maxByHeight,
        Math.max(1, Math.floor(containerArea / emojiArea * packingFactor))
      );
      const placed = [];
      const isValid = /* @__PURE__ */ __name((x, y2) => {
        for (const neighbor of placed) {
          const dx = neighbor.x - x;
          const dy = neighbor.y - y2;
          if (Math.sqrt(dx * dx + dy * dy) < minDistancePx) {
            return false;
          }
        }
        return true;
      }, "isValid");
      const addPoint = /* @__PURE__ */ __name((x, y2) => {
        placed.push({ x, y: y2 });
      }, "addPoint");
      const placedCountTarget = Math.max(1, emojiCount);
      const maxAttempts = placedCountTarget * 120;
      let attempts = 0;
      while (placed.length < placedCountTarget && attempts < maxAttempts) {
        attempts += 1;
        const x = radiusPx + Math.random() * (width - 2 * radiusPx);
        const y2 = radiusPx + Math.random() * (height - 2 * radiusPx);
        if (!isValid(x, y2)) continue;
        addPoint(x, y2);
      }
      placed.forEach(({ x, y: y2 }) => {
        ElementCreate({
          tag: "span",
          classList: ["cats-emoji"],
          children: [Math.random() > 0.5 ? "\u{1F431}" : "\u{1F43E}"],
          style: {
            position: "absolute",
            top: `${y2}px`,
            left: `${x}px`,
            transform: "translate(-50%, -50%)"
          },
          parent: emojiBackground
        });
      });
    }, "renderEmojis");
    renderEmojis();
  }
  __name(catsify, "catsify");

  // src/modules/global.ts
  var GlobalModule = class extends L {
    static {
      __name(this, "GlobalModule");
    }
    get settingsScreen() {
      return GlobalSubscreen;
    }
    get settings() {
      return super.settings;
    }
    set settings(val) {
      super.settings = val;
    }
    get defaultSettings() {
      return {
        modEnabled: false,
        doShowNewVersionMessage: false,
        incomingAutoTranslate: false,
        // outcomingAutoTranslate: false,
        showTranslateButton: true,
        showComposeBar: false,
        prettifyOnTranslate: true,
        translationEngine: "google"
      };
    }
    load() {
      syncEmojiBackgroundVisibility(this.settings.prettifyOnTranslate);
      syncTranslateButtonVisibility(this.settings.showTranslateButton);
      G.hookFunction("ChatRoomMessageDisplay", 0, (args, next) => {
        const div = next(args);
        if (!this.settings.modEnabled) return div;
        const popupMenu = div?.querySelector(".chat-room-message-popup");
        const sourceMessage = div.querySelector(".chat-room-message-content")?.textContent;
        const messageId = div.querySelector(".chat-room-message-content")?.getAttribute("msgid") ?? CommonGenerateUniqueID();
        if (!sourceMessage) return div;
        if (popupMenu) {
          const translationButton = createPopupButton(sourceMessage, messageId, div);
          popupMenu.append(translationButton);
        }
        if (this.settings.incomingAutoTranslate) {
          TranslatorModule.translate(sourceMessage).then((translatedMessage) => {
            if (!translatedMessage) return;
            if (translatedMessage.text === sourceMessage) return;
            const element = createTranslatedMessage(translatedMessage, messageId);
            if (!element) return;
            div.appendChild(element);
          }).catch((error) => {
            console.warn("[CATS] incoming translate failed", error);
          });
        }
        ;
        return div;
      });
    }
  };
  function syncEmojiBackgroundVisibility(visible) {
    document.body.classList.toggle("cats-prettify", visible);
  }
  __name(syncEmojiBackgroundVisibility, "syncEmojiBackgroundVisibility");
  function syncTranslateButtonVisibility(visible) {
    document.body.classList.toggle("cats-show-translate-button", visible);
  }
  __name(syncTranslateButtonVisibility, "syncTranslateButtonVisibility");
  function createPopupButton(sourceMessage, messageId, messageElement) {
    return u.createButton({
      id: `cats-translation-button-${messageId}`,
      options: {
        image: `${"https://protokink.github.io/CATS/public"}/images/mod.svg`,
        imageColor: "gray",
        noStyling: true,
        tooltip: "Translate Message"
      },
      htmlOptions: {
        button: {
          classList: ["cats-translation-button"]
        }
      },
      onClick: /* @__PURE__ */ __name(() => {
        TranslatorModule.translate(sourceMessage).then((data) => {
          if (!data) return;
          if (data.text === sourceMessage) return;
          const element = createTranslatedMessage(data, messageId);
          if (!element) return;
          messageElement.appendChild(element);
        }).catch((error) => {
          console.warn("[CATS] incoming translate failed", error);
        });
      }, "onClick")
    });
  }
  __name(createPopupButton, "createPopupButton");
  function createTranslatedMessage(translatedMessage, messageId) {
    if (ElementWrap(`cats-translated-message-${messageId}`)) return;
    const element = ElementCreate({
      tag: "div",
      classList: ["ChatMessage", "deeplib-message", "translated-message"],
      attributes: {
        id: `cats-translated-message-${messageId}`,
        "data-time": ChatRoomCurrentTime(),
        "data-sender": Player.MemberNumber?.toString()
      },
      children: [
        {
          tag: "img",
          attributes: {
            src: `${"https://protokink.github.io/CATS/public"}/images/mod.svg`
          }
        },
        {
          tag: "span",
          children: CommonStringPartitionReplace(translatedMessage.text, {
            "\n": ElementCreate({
              tag: "br"
            })
          })
        },
        {
          tag: "div",
          classList: ["cats-message-meta"],
          children: [
            `(Translated from ${googleSourceLanguages[translatedMessage.sourceLanguage]} \u2014 `,
            {
              tag: "a",
              attributes: {
                href: "#"
              },
              children: ["Dismiss"],
              eventListeners: {
                click: /* @__PURE__ */ __name(() => {
                  element.remove();
                }, "click")
              }
            },
            ")"
          ]
        }
      ]
    });
    if (B("GlobalModule").settings.prettifyOnTranslate) {
      catsify(element);
    }
    return element;
  }
  __name(createTranslatedMessage, "createTranslatedMessage");

  // src/migrators/v1_migrator.ts
  var V1_Migrator = class extends be {
    static {
      __name(this, "V1_Migrator");
    }
    get migrationVersion() {
      return "1.0.0";
    }
    migrate() {
      const oldData = Player.OnlineSettings.CATS;
      if (!oldData) return;
      const globalSettings = B("GlobalModule").settings;
      const translatorSettings = B("TranslatorModule").settings;
      globalSettings.modEnabled = oldData.enabled;
      if (oldData.sourceLang in googleSourceLanguages)
        translatorSettings.google.incomingSourceLang = oldData.sourceLang;
      if (oldData.targetLang in googleTargetLanguages)
        translatorSettings.google.incomingTargetLang = oldData.targetLang;
      delete Player.OnlineSettings.CATS;
      ServerAccountUpdate.QueueData({
        OnlineSettings: Player.OnlineSettings
      }, true);
    }
  };

  // src/modules/compose.ts
  var COMPOSE_MAX_LENGTH = 1e4;
  var ids = Object.freeze({
    bar: "cats-compose-bar",
    sourceSelect: "cats-compose-source",
    targetSelect: "cats-compose-target",
    translateButton: "cats-compose-translate",
    dropButton: "cats-compose-drop",
    langsSettings: "cats-compose-langs-settings",
    toggleButton: "cats-compose-toggle"
  });
  function languageOptions(mode, selected) {
    return Object.entries(googleSourceLanguages).filter(([key]) => mode === "source" || key !== "auto").map(([key, value]) => ({
      attributes: {
        value: key,
        selected: key === selected
      },
      children: [value]
    }));
  }
  __name(languageOptions, "languageOptions");
  var ComposeModule = class _ComposeModule extends L {
    static {
      __name(this, "ComposeModule");
    }
    load() {
      G.hookFunction("ChatRoomCreateElement", k.Observe, (args, next) => {
        const ret = next(args);
        const globalSettings = B("GlobalModule").settings;
        const enabled = globalSettings.modEnabled && globalSettings.showComposeBar === true;
        const chatRoomButtons = ElementWrap("chat-room-buttons");
        const chatInput = ElementWrap("InputChat");
        const chatRoomDiv = ElementWrap("chat-room-div");
        const chatRoomBottom = ElementWrap("chat-room-bot");
        _ComposeModule.syncComposeSelects();
        if (!chatRoomButtons || !chatInput || !chatRoomDiv || !chatRoomBottom) return ret;
        const existing = ElementWrap(ids.bar);
        if (existing) {
          const hiddenChanged = existing.getAttribute("hidden") !== String(enabled);
          existing.toggleAttribute("hidden", !enabled);
          if (hiddenChanged) ChatRoomInputResize(chatInput);
          return ret;
        }
        const toggleButton = ElementButton.Create(
          ids.toggleButton,
          function() {
            globalSettings.showComposeBar = this.getAttribute("aria-checked") === "true";
            p.save();
          },
          {
            image: `${"https://protokink.github.io/CATS/public"}/images/mod.svg`,
            tooltip: g("compose.toggleBtn"),
            role: "checkbox",
            ariaChecked: globalSettings.showComposeBar === true,
            noStyling: true
          },
          {
            button: {
              classList: ["cats-compose-toggle", "chat-room-button"],
              attributes: {
                hidden: true
              }
            }
          }
        );
        chatRoomButtons.appendChild(toggleButton);
        const bar = _ComposeModule.createComposeBar();
        chatRoomDiv.insertBefore(bar, chatRoomBottom);
        return ret;
      });
    }
    static createComposeBar() {
      const googleSettings = B("TranslatorModule").settings.google;
      const sourceLang = googleSettings.composeSourceLang ?? "auto";
      const targetLang = googleSettings.composeTargetLang ?? "en";
      const sourceSelect = ElementDropdown.CreateLabelled(
        ids.sourceSelect,
        languageOptions("source", sourceLang),
        g("compose.sourceTitle"),
        function() {
          if (!isGoogleSourceLanguage(this.value)) return;
          googleSettings.composeSourceLang = this.value;
          p.save();
        }
      );
      const targetSelect = ElementDropdown.CreateLabelled(
        ids.targetSelect,
        languageOptions("target", targetLang),
        g("compose.targetTitle"),
        function() {
          if (!isGoogleTargetLanguage(this.value)) return;
          googleSettings.composeTargetLang = this.value;
          p.save();
        }
      );
      const box = ElementCreate({
        tag: "textarea",
        attributes: {
          placeholder: g("compose.placeholder"),
          maxlength: String(COMPOSE_MAX_LENGTH)
        },
        eventListeners: {
          keydown: /* @__PURE__ */ __name((event) => {
            if (!CommonKey.IsPressed(event, "Enter")) return;
            runComposeTranslate();
          }, "keydown")
        }
      });
      const button = ElementButton.Create(
        ids.translateButton,
        () => {
          runComposeTranslate();
        },
        {
          image: `${"https://protokink.github.io/CATS/public"}/images/mod.svg`,
          tooltip: g("compose.translateBtn")
        }
      );
      async function runComposeTranslate() {
        if (!button || !box) return;
        const text = box.value.trim();
        if (!text) {
          ToastManager.warning(g("compose.emptyText"), { duration: 3e3 });
          return;
        }
        button.disabled = true;
        try {
          const sourceLang2 = sourceSelect.querySelector("select")?.value;
          const targetLang2 = targetSelect.querySelector("select")?.value;
          if (!isGoogleSourceLanguage(sourceLang2) || !isGoogleTargetLanguage(targetLang2)) {
            ToastManager.warning(g("compose.emptyResult"), { duration: 3e3 });
            return;
          }
          const result = await TranslatorModule.translate(text.slice(0, COMPOSE_MAX_LENGTH), {
            sourceLang: sourceLang2,
            targetLang: targetLang2
          });
          if (!button) return;
          if (!result?.text) {
            ToastManager.warning(g("compose.emptyResult"), { duration: 3e3 });
            return;
          }
          if (!_ComposeModule.setChatInputValue(result.text)) {
            ToastManager.warning(g("compose.noInput"), { duration: 3e3 });
          }
        } catch (error) {
          console.warn("[CATS] compose translate failed", error);
          if (button) ToastManager.warning(g("compose.emptyResult"), { duration: 3e3 });
        } finally {
          if (button) {
            button.disabled = false;
          }
        }
      }
      __name(runComposeTranslate, "runComposeTranslate");
      const dropbutton = ElementButton.Create(
        ids.dropButton,
        function() {
          const langsSettings = ElementWrap(ids.langsSettings);
          const chatInput = ElementWrap("InputChat");
          if (!chatInput) return;
          const checked = this.getAttribute("aria-checked") === "true";
          if (langsSettings) langsSettings.toggleAttribute("hidden", !checked);
          const img = this.querySelector(".button-image");
          if (!img) return;
          const imgSrc = checked ? "Icons/CaretDown.svg" : "Icons/CaretUp.svg";
          if (img instanceof HTMLImageElement) {
            if (!img.src.endsWith(imgSrc)) {
              img.src = imgSrc;
            }
          } else if (img.style.backgroundImage !== imgSrc) {
            img.style.backgroundImage = `url("${imgSrc}")`;
            img.style.maskImage = `url("${imgSrc}")`;
          }
          ChatRoomInputResize(chatInput);
        },
        {
          image: "Icons/CaretUp.svg",
          role: "checkbox"
        }
      );
      return ElementCreate({
        tag: "div",
        attributes: {
          id: ids.bar
        },
        children: [
          {
            tag: "div",
            classList: ["cats-compose-row", "cats-compose-row-input"],
            children: [dropbutton, box, button]
          },
          {
            tag: "div",
            classList: ["cats-compose-row", "cats-compose-row-langs"],
            attributes: {
              id: ids.langsSettings,
              hidden: true
            },
            children: [
              sourceSelect,
              targetSelect
            ]
          }
        ]
      });
    }
    static syncComposeSelects() {
      const sourceSelect = ElementWrap(ids.sourceSelect);
      const targetSelect = ElementWrap(ids.targetSelect);
      if (!sourceSelect || !targetSelect) return;
      const googleSettings = B("TranslatorModule").settings.google;
      const sourceLang = googleSettings.composeSourceLang ?? "auto";
      const targetLang = googleSettings.composeTargetLang ?? "en";
      if (sourceSelect.value !== sourceLang) sourceSelect.value = sourceLang;
      if (targetSelect.value !== targetLang) targetSelect.value = targetLang;
    }
    static setChatInputValue(value) {
      const input = ElementWrap("InputChat");
      if (!input || !value) return false;
      const incoming = value;
      const current = input.value;
      let next = incoming;
      if (current.trim()) {
        if (!incoming) return true;
        const gap = /\s$/.test(current) ? "" : " ";
        next = current + gap + incoming;
      }
      const maxLength = CommonParseInt(input.getAttribute("maxlength") ?? "") ?? 1e4;
      if (next.length > maxLength) next = next.slice(0, maxLength);
      input.value = next;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.focus();
      return true;
    }
  };

  // src/index.ts
  kt({
    modules: {
      GUI: new M({
        buttonText: "CATS",
        identifier: "CATS",
        image: `${"https://protokink.github.io/CATS/public"}/images/mod.svg`
      }),
      GlobalModule: new GlobalModule(),
      ComposeModule: new ComposeModule(),
      CommandsModule: new CommandsModule(),
      TranslatorModule: new TranslatorModule(),
      VersionModule: new N({
        migrators: [
          new V1_Migrator()
        ]
      })
    },
    translationOptions: {
      pathToTranslationsFolder: `${"https://protokink.github.io/CATS/public"}/translations/`,
      fixedLanguage: true
    },
    mainMenuOptions: {
      importExportSubscreen: new Ie({
        customFileExtension: "cats"
      })
    },
    initFunction: /* @__PURE__ */ __name(() => {
      H.injectEmbed("cats-settings-style", `${"https://protokink.github.io/CATS/public"}/styles/settings.css`);
      H.injectEmbed("cats-chat-style", `${"https://protokink.github.io/CATS/public"}/styles/chat.css`);
    }, "initFunction")
  });
})();
/*! Bundled license information:

bc-deeplib/dist/deeplib.js:
  (*! Bundled license information:
  
  js-logger/src/logger.js:
    (*!
     * js-logger - http://github.com/jonnyreeves/js-logger
     * Jonny Reeves, http://jonnyreeves.co.uk/
     * js-logger may be freely distributed under the MIT license.
     *)
  *)
*/
//# sourceMappingURL=index.js.map
