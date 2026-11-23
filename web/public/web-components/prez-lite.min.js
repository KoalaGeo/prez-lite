// \0rolldown/runtime.js
var e = Object.defineProperty, __name = (o, s) => e(o, "name", {
	value: s,
	configurable: !0
}), o = globalThis, s = o.ShadowRoot && (o.ShadyCSS === void 0 || o.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, l = Symbol(), u = /* @__PURE__ */ new WeakMap(), n$3 = class {
	static {
		__name(this, "n");
	}
	constructor(e, o, s) {
		if (this._$cssResult$ = !0, s !== l) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = o;
	}
	get styleSheet() {
		let e = this.o, o = this.t;
		if (s && e === void 0) {
			let s = o !== void 0 && o.length === 1;
			s && (e = u.get(o)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && u.set(o, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, f = /* @__PURE__ */ __name((e) => new n$3(typeof e == "string" ? e : e + "", void 0, l), "r"), p = /* @__PURE__ */ __name((e, ...o) => new n$3(e.length === 1 ? e[0] : o.reduce((o, s, l) => o + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(s) + e[l + 1], e[0]), e, l), "i"), m = /* @__PURE__ */ __name((e, l) => {
	if (s) e.adoptedStyleSheets = l.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let s of l) {
		let l = document.createElement("style"), u = o.litNonce;
		u !== void 0 && l.setAttribute("nonce", u), l.textContent = s.cssText, e.appendChild(l);
	}
}, "S"), h = s ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let o = "";
	for (let s of e.cssRules) o += s.cssText;
	return f(o);
})(e) : e, { is: g, defineProperty: _, getOwnPropertyDescriptor: v, getOwnPropertyNames: ee, getOwnPropertySymbols: te, getPrototypeOf: ne } = Object, y = globalThis, re = y.trustedTypes, ie = re ? re.emptyScript : "", ae = y.reactiveElementPolyfillSupport, b = /* @__PURE__ */ __name((e, o) => e, "d"), C = {
	toAttribute(e, o) {
		switch (o) {
			case Boolean:
				e = e ? ie : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, o) {
		let s = e;
		switch (o) {
			case Boolean:
				s = e !== null;
				break;
			case Number:
				s = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				s = JSON.parse(e);
			} catch {
				s = null;
			}
		}
		return s;
	}
}, w = /* @__PURE__ */ __name((e, o) => !g(e, o), "f"), oe = {
	attribute: !0,
	type: String,
	converter: C,
	reflect: !1,
	useDefault: !1,
	hasChanged: w
};
Symbol.metadata ??= Symbol("metadata"), y.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y$1 = class extends HTMLElement {
	static {
		__name(this, "y");
	}
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, o = oe) {
		if (o.state && (o.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((o = Object.create(o)).wrapped = !0), this.elementProperties.set(e, o), !o.noAccessor) {
			let s = Symbol(), l = this.getPropertyDescriptor(e, s, o);
			l !== void 0 && _(this.prototype, e, l);
		}
	}
	static getPropertyDescriptor(e, o, s) {
		let { get: l, set: u } = v(this.prototype, e) ?? {
			get() {
				return this[o];
			},
			set(e) {
				this[o] = e;
			}
		};
		return {
			get: l,
			set(o) {
				let f = l?.call(this);
				u?.call(this, o), this.requestUpdate(e, f, s);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? oe;
	}
	static _$Ei() {
		if (this.hasOwnProperty(b("elementProperties"))) return;
		let e = ne(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(b("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(b("properties"))) {
			let e = this.properties, o = [...ee(e), ...te(e)];
			for (let s of o) this.createProperty(s, e[s]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let o = litPropertyMetadata.get(e);
			if (o !== void 0) for (let [e, s] of o) this.elementProperties.set(e, s);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, o] of this.elementProperties) {
			let s = this._$Eu(e, o);
			s !== void 0 && this._$Eh.set(s, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let o = [];
		if (Array.isArray(e)) {
			let s = new Set(e.flat(1 / 0).reverse());
			for (let e of s) o.unshift(h(e));
		} else e !== void 0 && o.push(h(e));
		return o;
	}
	static _$Eu(e, o) {
		let s = o.attribute;
		return !1 === s ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), o = this.constructor.elementProperties;
		for (let s of o.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return m(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, o, s) {
		this._$AK(e, s);
	}
	_$ET(e, o) {
		let s = this.constructor.elementProperties.get(e), l = this.constructor._$Eu(e, s);
		if (l !== void 0 && !0 === s.reflect) {
			let u = (s.converter?.toAttribute === void 0 ? C : s.converter).toAttribute(o, s.type);
			this._$Em = e, u == null ? this.removeAttribute(l) : this.setAttribute(l, u), this._$Em = null;
		}
	}
	_$AK(e, o) {
		let s = this.constructor, l = s._$Eh.get(e);
		if (l !== void 0 && this._$Em !== l) {
			let e = s.getPropertyOptions(l), u = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? C : e.converter;
			this._$Em = l;
			let f = u.fromAttribute(o, e.type);
			this[l] = f ?? this._$Ej?.get(l) ?? f, this._$Em = null;
		}
	}
	requestUpdate(e, o, s, l = !1, u) {
		if (e !== void 0) {
			let f = this.constructor;
			if (!1 === l && (u = this[e]), s ??= f.getPropertyOptions(e), !((s.hasChanged ?? w)(u, o) || s.useDefault && s.reflect && u === this._$Ej?.get(e) && !this.hasAttribute(f._$Eu(e, s)))) return;
			this.C(e, o, s);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, o, { useDefault: s, reflect: l, wrapped: u }, f) {
		s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, f ?? o ?? this[e]), !0 !== u || f !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (o = void 0), this._$AL.set(e, o)), !0 === l && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, o] of this._$Ep) this[e] = o;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [o, s] of e) {
				let { wrapped: e } = s, l = this[o];
				!0 !== e || this._$AL.has(o) || l === void 0 || this.C(o, void 0, s, l);
			}
		}
		let e = !1, o = this._$AL;
		try {
			e = this.shouldUpdate(o), e ? (this.willUpdate(o), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(o)) : this._$EM();
		} catch (o) {
			throw e = !1, this._$EM(), o;
		}
		e && this._$AE(o);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[b("elementProperties")] = /* @__PURE__ */ new Map(), y$1[b("finalized")] = /* @__PURE__ */ new Map(), ae?.({ ReactiveElement: y$1 }), (y.reactiveElementVersions ??= []).push("2.1.2");
// ../../node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
var T = globalThis, se = /* @__PURE__ */ __name((e) => e, "i"), E = T.trustedTypes, O = E ? E.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, ce = "$lit$", A = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + A, ue = `<${le}>`, j = document, c = () => j.createComment(""), a = (e) => e === null || typeof e != "object" && typeof e != "function", P = Array.isArray, d = (e) => P(e) || typeof e?.[Symbol.iterator] == "function", F = "[ 	\n\f\r]", B = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, de = /-->/g, fe = />/g, U = RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), pe = /'/g, me = /"/g, he = /^(?:script|style|textarea|title)$/i, x = (e) => (o, ...s) => ({
	_$litType$: e,
	strings: o,
	values: s
}), W = x(1), G = Symbol.for("lit-noChange"), K = Symbol.for("lit-nothing"), ge = /* @__PURE__ */ new WeakMap(), q = j.createTreeWalker(j, 129);
function V(e, o) {
	if (!P(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return O === void 0 ? o : O.createHTML(o);
}
var N = (e, o) => {
	let s = e.length - 1, l = [], u, f = o === 2 ? "<svg>" : o === 3 ? "<math>" : "", p = B;
	for (let o = 0; o < s; o++) {
		let s = e[o], m, h, g = -1, _ = 0;
		for (; _ < s.length && (p.lastIndex = _, h = p.exec(s), h !== null);) _ = p.lastIndex, p === B ? h[1] === "!--" ? p = de : h[1] === void 0 ? h[2] === void 0 ? h[3] !== void 0 && (p = U) : (he.test(h[2]) && (u = RegExp("</" + h[2], "g")), p = U) : p = fe : p === U ? h[0] === ">" ? (p = u ?? B, g = -1) : h[1] === void 0 ? g = -2 : (g = p.lastIndex - h[2].length, m = h[1], p = h[3] === void 0 ? U : h[3] === "\"" ? me : pe) : p === me || p === pe ? p = U : p === de || p === fe ? p = B : (p = U, u = void 0);
		let v = p === U && e[o + 1].startsWith("/>") ? " " : "";
		f += p === B ? s + ue : g >= 0 ? (l.push(m), s.slice(0, g) + ce + s.slice(g) + A + v) : s + A + (g === -2 ? o : v);
	}
	return [V(e, f + (e[s] || "<?>") + (o === 2 ? "</svg>" : o === 3 ? "</math>" : "")), l];
}, J = class S {
	constructor({ strings: e, _$litType$: o }, s) {
		let l;
		this.parts = [];
		let u = 0, f = 0, p = e.length - 1, m = this.parts, [h, g] = N(e, o);
		if (this.el = S.createElement(h, s), q.currentNode = this.el.content, o === 2 || o === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (l = q.nextNode()) !== null && m.length < p;) {
			if (l.nodeType === 1) {
				if (l.hasAttributes()) for (let e of l.getAttributeNames()) if (e.endsWith(ce)) {
					let o = g[f++], s = l.getAttribute(e).split(A), p = /([.?@])?(.*)/.exec(o);
					m.push({
						type: 1,
						index: u,
						name: p[2],
						strings: s,
						ctor: p[1] === "." ? I : p[1] === "?" ? L : p[1] === "@" ? z : H
					}), l.removeAttribute(e);
				} else e.startsWith(A) && (m.push({
					type: 6,
					index: u
				}), l.removeAttribute(e));
				if (he.test(l.tagName)) {
					let e = l.textContent.split(A), o = e.length - 1;
					if (o > 0) {
						l.textContent = E ? E.emptyScript : "";
						for (let s = 0; s < o; s++) l.append(e[s], c()), q.nextNode(), m.push({
							type: 2,
							index: ++u
						});
						l.append(e[o], c());
					}
				}
			} else if (l.nodeType === 8) {
				if (l.data === le) m.push({
					type: 2,
					index: u
				});
				else {
					let e = -1;
					for (; (e = l.data.indexOf(A, e + 1)) !== -1;) m.push({
						type: 7,
						index: u
					}), e += A.length - 1;
				}
			}
			u++;
		}
	}
	static createElement(e, o) {
		let s = j.createElement("template");
		return s.innerHTML = e, s;
	}
};
function M(e, o, s = e, l) {
	if (o === G) return o;
	let u = l === void 0 ? s._$Cl : s._$Co?.[l], f = a(o) ? void 0 : o._$litDirective$;
	return u?.constructor !== f && (u?._$AO?.(!1), f === void 0 ? u = void 0 : (u = new f(e), u._$AT(e, s, l)), l === void 0 ? s._$Cl = u : (s._$Co ??= [])[l] = u), u !== void 0 && (o = M(e, u._$AS(e, o.values), u, l)), o;
}
var R = class {
	constructor(e, o) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = o;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: o }, parts: s } = this._$AD, l = (e?.creationScope ?? j).importNode(o, !0);
		q.currentNode = l;
		let u = q.nextNode(), f = 0, p = 0, m = s[0];
		for (; m !== void 0;) {
			if (f === m.index) {
				let o;
				m.type === 2 ? o = new Y(u, u.nextSibling, this, e) : m.type === 1 ? o = new m.ctor(u, m.name, m.strings, this, e) : m.type === 6 && (o = new Z(u, this, e)), this._$AV.push(o), m = s[++p];
			}
			f !== m?.index && (u = q.nextNode(), f++);
		}
		return q.currentNode = j, l;
	}
	p(e) {
		let o = 0;
		for (let s of this._$AV) s !== void 0 && (s.strings === void 0 ? s._$AI(e[o]) : (s._$AI(e, s, o), o += s.strings.length - 2)), o++;
	}
}, Y = class k {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, o, s, l) {
		this.type = 2, this._$AH = K, this._$AN = void 0, this._$AA = e, this._$AB = o, this._$AM = s, this.options = l, this._$Cv = l?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, o = this._$AM;
		return o !== void 0 && e?.nodeType === 11 && (e = o.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, o = this) {
		e = M(this, e, o), a(e) ? e === K || e == null || e === "" ? (this._$AH !== K && this._$AR(), this._$AH = K) : e !== this._$AH && e !== G && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? d(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== K && a(this._$AH) ? this._$AA.nextSibling.data = e : this.T(j.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: o, _$litType$: s } = e, l = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = J.createElement(V(s.h, s.h[0]), this.options)), s);
		if (this._$AH?._$AD === l) this._$AH.p(o);
		else {
			let e = new R(l, this), s = e.u(this.options);
			e.p(o), this.T(s), this._$AH = e;
		}
	}
	_$AC(e) {
		let o = ge.get(e.strings);
		return o === void 0 && ge.set(e.strings, o = new J(e)), o;
	}
	k(e) {
		P(this._$AH) || (this._$AH = [], this._$AR());
		let o = this._$AH, s, l = 0;
		for (let u of e) l === o.length ? o.push(s = new k(this.O(c()), this.O(c()), this, this.options)) : s = o[l], s._$AI(u), l++;
		l < o.length && (this._$AR(s && s._$AB.nextSibling, l), o.length = l);
	}
	_$AR(e = this._$AA.nextSibling, o) {
		for (this._$AP?.(!1, !0, o); e !== this._$AB;) {
			let o = se(e).nextSibling;
			se(e).remove(), e = o;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, H = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, o, s, l, u) {
		this.type = 1, this._$AH = K, this._$AN = void 0, this.element = e, this.name = o, this._$AM = l, this.options = u, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(/* @__PURE__ */ new String()), this.strings = s) : this._$AH = K;
	}
	_$AI(e, o = this, s, l) {
		let u = this.strings, f = !1;
		if (u === void 0) e = M(this, e, o, 0), f = !a(e) || e !== this._$AH && e !== G, f && (this._$AH = e);
		else {
			let l = e, p, m;
			for (e = u[0], p = 0; p < u.length - 1; p++) m = M(this, l[s + p], o, p), m === G && (m = this._$AH[p]), f ||= !a(m) || m !== this._$AH[p], m === K ? e = K : e !== K && (e += (m ?? "") + u[p + 1]), this._$AH[p] = m;
		}
		f && !l && this.j(e);
	}
	j(e) {
		e === K ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, I = class extends H {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === K ? void 0 : e;
	}
}, L = class extends H {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== K);
	}
}, z = class extends H {
	constructor(e, o, s, l, u) {
		super(e, o, s, l, u), this.type = 5;
	}
	_$AI(e, o = this) {
		if ((e = M(this, e, o, 0) ?? K) === G) return;
		let s = this._$AH, l = e === K && s !== K || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, u = e !== K && (s === K || l);
		l && this.element.removeEventListener(this.name, this, s), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Z = class {
	constructor(e, o, s) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = o, this.options = s;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		M(this, e);
	}
}, _e = T.litHtmlPolyfillSupport;
_e?.(J, Y), (T.litHtmlVersions ??= []).push("3.3.3");
var D = (e, o, s) => {
	let l = s?.renderBefore ?? o, u = l._$litPart$;
	if (u === void 0) {
		let e = s?.renderBefore ?? null;
		l._$litPart$ = u = new Y(o.insertBefore(c(), e), e, void 0, s ?? {});
	}
	return u._$AI(e), u;
}, X = globalThis, i = class extends y$1 {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let o = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = D(o, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return G;
	}
};
i._$litElement$ = !0, i.finalized = !0, X.litElementHydrateSupport?.({ LitElement: i });
var ve = X.litElementPolyfillSupport;
ve?.({ LitElement: i }), (X.litElementVersions ??= []).push("4.2.2");
// ../../node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js
var t = (e) => (o, s) => {
	s === void 0 ? customElements.define(e, o) : s.addInitializer(() => {
		customElements.define(e, o);
	});
}, ye = {
	attribute: !0,
	type: String,
	converter: C,
	reflect: !1,
	hasChanged: w
}, be = /* @__PURE__ */ __name((e = ye, o, s) => {
	let { kind: l, metadata: u } = s, f = globalThis.litPropertyMetadata.get(u);
	if (f === void 0 && globalThis.litPropertyMetadata.set(u, f = /* @__PURE__ */ new Map()), l === "setter" && ((e = Object.create(e)).wrapped = !0), f.set(s.name, e), l === "accessor") {
		let { name: l } = s;
		return {
			set(s) {
				let u = o.get.call(this);
				o.set.call(this, s), this.requestUpdate(l, u, e, !0, s);
			},
			init(o) {
				return o !== void 0 && this.C(l, void 0, e, o), o;
			}
		};
	}
	if (l === "setter") {
		let { name: l } = s;
		return function(s) {
			let u = this[l];
			o.call(this, s), this.requestUpdate(l, u, e, !0, s);
		};
	}
	throw Error("Unsupported decorator location: " + l);
}, "r");
function n(e) {
	return (o, s) => typeof s == "object" ? be(e, o, s) : ((e, o, s) => {
		let l = o.hasOwnProperty(s);
		return o.constructor.createProperty(s, e), l ? Object.getOwnPropertyDescriptor(o, s) : void 0;
	})(e, o, s);
}
// ../../node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js
function r(e) {
	return n({
		...e,
		state: !0,
		attribute: !1
	});
}
// src/utils/fetch-vocab.ts
var Q = /* @__PURE__ */ new Map(), xe = 3e5;
function buildTree(e) {
	let o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
	for (let l of e) if (o.set(l.iri, l), l.broader) for (let e of l.broader) {
		let o = s.get(e) || [];
		o.push(l.iri), s.set(e, o);
	}
	let l = e.filter((e) => !e.broader || e.broader.length === 0 || e.broader.every((e) => !o.has(e)));
	function buildNode(e) {
		let l = o.get(e);
		if (!l) return null;
		let u = (s.get(e) || []).map((e) => buildNode(e)).filter((e) => e !== null).sort((e, o) => e.label.localeCompare(o.label));
		return {
			iri: l.iri,
			label: l.label,
			notation: l.notation,
			description: l.description,
			children: u
		};
	}
	return l.map((e) => buildNode(e.iri)).filter((e) => e !== null).sort((e, o) => e.label.localeCompare(o.label));
}
function transformListJson(e, o) {
	let s = e["@graph"] || [], l = s[0], u = l?.scheme || o, f = l?.schemeLabel || "Vocabulary", p = /* @__PURE__ */ new Map();
	for (let e of s) if (e.broader) {
		let o = p.get(e.broader) || [];
		o.push(e.iri), p.set(e.broader, o);
	}
	let m = s.map((e) => ({
		iri: e.iri,
		label: e.prefLabel,
		notation: e.notation,
		description: e.definition,
		altLabels: e.altLabels,
		broader: e.broader ? [e.broader] : void 0,
		narrower: p.get(e.iri)
	}));
	return {
		iri: u,
		label: f,
		description: "",
		concepts: m,
		tree: buildTree(m)
	};
}
async function fetchVocab(e) {
	let o = Q.get(e);
	if (o && Date.now() - o.timestamp < xe) return o.data;
	let s = await fetch(e);
	if (!s.ok) throw Error(`Failed to fetch vocabulary: ${s.status} ${s.statusText}`);
	let l = await s.json(), u;
	if (l["@graph"]) u = transformListJson(l, e);
	else if (l.concepts && Array.isArray(l.concepts)) u = l;
	else throw Error("Invalid vocabulary format: unrecognized structure");
	return Q.set(e, {
		data: u,
		timestamp: Date.now()
	}), u;
}
function clearCache(e) {
	e ? Q.delete(e) : Q.clear();
}
// src/utils/base-url.ts
function detectBaseUrl() {
	let e = document.querySelectorAll("script[src*=\"prez-vocab\"], script[src*=\"prez-lite\"]");
	if (e.length > 0) {
		let o = e[e.length - 1].src, s = new URL(o), l = s.pathname.split("/");
		return l.pop(), l.pop(), s.pathname = l.join("/") || "/", s.origin + s.pathname.replace(/\/$/, "");
	}
	return null;
}
function resolveVocabUrl(e, o, s) {
	if (o) return o;
	if (!e) return null;
	let l = s || detectBaseUrl();
	return l ? `${l}/export/vocabs/${e}/${e}-concepts.json` : null;
}
// src/utils/sparql-fetch.ts
var Se = [
	"http://www.w3.org/2004/02/skos/core#prefLabel",
	"http://purl.org/dc/terms/title",
	"http://www.w3.org/2000/01/rdf-schema#label"
], Ce = ["http://www.w3.org/2004/02/skos/core#definition", "http://purl.org/dc/terms/description"], we = {
	"http://www.w3.org/2004/02/skos/core#": "skos:",
	"http://purl.org/dc/terms/": "dcterms:",
	"http://www.w3.org/2000/01/rdf-schema#": "rdfs:",
	"http://www.w3.org/1999/02/22-rdf-syntax-ns#": "rdf:"
};
function prefixed(e) {
	for (let [o, s] of Object.entries(we)) if (e.startsWith(o)) return s + e.slice(o.length);
	return `<${e}>`;
}
function prefixDeclarations(e) {
	let o = /* @__PURE__ */ new Set();
	for (let s of e) for (let [e, l] of Object.entries(we)) s.startsWith(e) && o.add(`PREFIX ${l.slice(0, -1)}: <${e}>`);
	return o.add("PREFIX skos: <http://www.w3.org/2004/02/skos/core#>"), [...o].join("\n");
}
function buildPredicateResolution(e, o, s, l) {
	let u = [], f = [];
	o.forEach((o, p) => {
		let m = `?_${s}${p + 1}`;
		f.push(m);
		let h = l ? ` . FILTER(LANG(${m}) = "" || LANG(${m}) = "en")` : "";
		u.push(`  OPTIONAL { ${e} ${prefixed(o)} ${m}${h} }`);
	});
	let p = `  BIND(COALESCE(${f.join(", ")}) AS ?${s})`;
	return [...u, p].join("\n");
}
function wrapGraph(e, o) {
	return o ? `  GRAPH <${o}> {\n${e}\n  }` : e;
}
async function executeSparql(e, o, s = 1e4) {
	let l = new AbortController(), u = setTimeout(() => l.abort(), s);
	try {
		let s = await fetch(e, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/sparql-results+json"
			},
			body: `query=${encodeURIComponent(o)}`,
			signal: l.signal
		});
		if (!s.ok) throw Error(`SPARQL query failed: ${s.status} ${s.statusText}`);
		return await s.json();
	} catch (e) {
		throw e instanceof DOMException && e.name === "AbortError" ? Error(`SPARQL query timed out after ${s}ms`) : e;
	} finally {
		clearTimeout(u);
	}
}
function getVal(e, o) {
	return e[o]?.value;
}
function getCount(e, o) {
	let s = e[o]?.value;
	return s ? parseInt(s, 10) : 0;
}
function bindingsToNodes(e) {
	return e.map((e) => ({
		iri: getVal(e, "concept"),
		label: getVal(e, "label") || getVal(e, "concept").split(/[#/]/).pop() || "",
		notation: getVal(e, "notation"),
		description: getVal(e, "definition"),
		children: [],
		hasChildren: getCount(e, "childCount") > 0,
		childrenLoaded: !1,
		loading: !1
	}));
}
function resolvePredicates(e) {
	return {
		labels: e.labelPredicates ?? Se,
		descriptions: e.descriptionPredicates ?? Ce
	};
}
async function fetchTopConcepts(e) {
	let { labels: o, descriptions: s } = resolvePredicates(e), l = [...o, ...s], u = [
		`    ?concept skos:topConceptOf <${e.schemeIri}> .`,
		buildPredicateResolution("?concept", o, "label", !0),
		"    OPTIONAL { ?concept skos:notation ?notation }",
		buildPredicateResolution("?concept", s, "definition", !1),
		"    OPTIONAL { ?child skos:broader ?concept }"
	].join("\n"), f = `${prefixDeclarations(l)}

SELECT ?concept ?label ?notation ?definition (COUNT(?child) AS ?childCount)
WHERE {
${wrapGraph(u, e.namedGraph)}
}
GROUP BY ?concept ?label ?notation ?definition
ORDER BY ?label`;
	return bindingsToNodes((await executeSparql(e.endpoint, f, e.timeout)).results.bindings);
}
async function fetchNarrowerConcepts(e, o) {
	let { labels: s, descriptions: l } = resolvePredicates(e), u = [...s, ...l], f = [
		`    ?concept skos:broader <${o}> .`,
		buildPredicateResolution("?concept", s, "label", !0),
		"    OPTIONAL { ?concept skos:notation ?notation }",
		buildPredicateResolution("?concept", l, "definition", !1),
		"    OPTIONAL { ?child skos:broader ?concept }"
	].join("\n"), p = `${prefixDeclarations(u)}

SELECT ?concept ?label ?notation ?definition (COUNT(?child) AS ?childCount)
WHERE {
${wrapGraph(f, e.namedGraph)}
}
GROUP BY ?concept ?label ?notation ?definition
ORDER BY ?label`;
	return bindingsToNodes((await executeSparql(e.endpoint, p, e.timeout)).results.bindings);
}
async function fetchSearchConcepts(e, o, s = 50) {
	let { labels: l, descriptions: u } = resolvePredicates(e), f = [...l, ...u], p = o.replace(/\\/g, "\\\\").replace(/"/g, "\\\""), m = [
		`    ?concept skos:inScheme <${e.schemeIri}> .`,
		buildPredicateResolution("?concept", l, "label", !0),
		`    FILTER(CONTAINS(LCASE(?label), LCASE("${p}")))`,
		"    OPTIONAL { ?concept skos:notation ?notation }",
		buildPredicateResolution("?concept", u, "definition", !1)
	].join("\n"), h = `${prefixDeclarations(f)}

SELECT ?concept ?label ?notation ?definition
WHERE {
${wrapGraph(m, e.namedGraph)}
}
ORDER BY ?label
LIMIT ${s}`;
	return (await executeSparql(e.endpoint, h, e.timeout)).results.bindings.map((e) => ({
		iri: getVal(e, "concept"),
		label: getVal(e, "label") || getVal(e, "concept").split(/[#/]/).pop() || "",
		notation: getVal(e, "notation"),
		description: getVal(e, "definition"),
		children: [],
		hasChildren: !1,
		childrenLoaded: !0,
		loading: !1
	}));
}
async function fetchSchemeMetadata(e) {
	let { labels: o, descriptions: s } = resolvePredicates(e), l = [...o, ...s], u = [
		`    BIND(<${e.schemeIri}> AS ?scheme)`,
		buildPredicateResolution("?scheme", o, "label", !0),
		buildPredicateResolution("?scheme", s, "description", !1)
	].join("\n"), f = `${prefixDeclarations(l)}

SELECT ?label ?description
WHERE {
${wrapGraph(u, e.namedGraph)}
}
LIMIT 1`, p = (await executeSparql(e.endpoint, f, e.timeout)).results.bindings[0];
	return {
		label: getVal(p, "label") || e.schemeIri.split(/[#/]/).pop() || "Vocabulary",
		description: getVal(p, "description") || ""
	};
}
// \0@oxc-project+runtime@0.156.0/helpers/esm/decorate.js
function __decorate(e, o, s, l) {
	var u = arguments.length, f = u < 3 ? o : l === null ? l = Object.getOwnPropertyDescriptor(o, s) : l, p;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") f = Reflect.decorate(e, o, s, l);
	else for (var m = e.length - 1; m >= 0; m--) (p = e[m]) && (f = (u < 3 ? p(f) : u > 3 ? p(o, s, f) : p(o, s)) || f);
	return u > 3 && f && Object.defineProperty(o, s, f), f;
}
// src/components/base-element.ts
function parsePredicates(e) {
	let o = {
		"skos:": "http://www.w3.org/2004/02/skos/core#",
		"dcterms:": "http://purl.org/dc/terms/",
		"rdfs:": "http://www.w3.org/2000/01/rdf-schema#",
		"rdf:": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	};
	return e.split(",").map((e) => {
		let s = e.trim();
		for (let [e, l] of Object.entries(o)) if (s.startsWith(e)) return l + s.slice(e.length);
		return s;
	});
}
var PrezVocabBase = class extends i {
	constructor(...e) {
		super(...e), this.vocab = null, this.vocabUrl = null, this.baseUrl = null, this.sparqlEndpoint = null, this.vocabIri = null, this.namedGraph = null, this.timeout = 1e4, this.labelPredicates = null, this.descriptionPredicates = null, this.disabled = !1, this.lang = "en", this.theme = "auto", this.loading = !1, this.error = null, this.vocabData = null, this.conceptMap = /* @__PURE__ */ new Map();
	}
	get sparqlMode() {
		return !!this.sparqlEndpoint;
	}
	get sparqlConfig() {
		return !this.sparqlEndpoint || !this.vocabIri ? null : {
			endpoint: this.sparqlEndpoint,
			schemeIri: this.vocabIri,
			namedGraph: this.namedGraph ?? void 0,
			timeout: this.timeout,
			labelPredicates: this.labelPredicates ? parsePredicates(this.labelPredicates) : void 0,
			descriptionPredicates: this.descriptionPredicates ? parsePredicates(this.descriptionPredicates) : void 0
		};
	}
	updated(e) {
		super.updated(e), (e.has("vocab") || e.has("vocabUrl") || e.has("baseUrl") || e.has("sparqlEndpoint") || e.has("vocabIri")) && this.loadVocab();
	}
	async loadVocab() {
		if (this.sparqlMode) return this.loadVocabFromSparql();
		let e = resolveVocabUrl(this.vocab, this.vocabUrl, this.baseUrl);
		if (!e) this.vocabData = null, this.conceptMap = /* @__PURE__ */ new Map();
		else {
			this.loading = !0, this.error = null;
			try {
				this.vocabData = await fetchVocab(e), this.conceptMap = new Map(this.vocabData.concepts.map((e) => [e.iri, e])), this.dispatchEvent(new CustomEvent("prez-load", {
					bubbles: !0,
					composed: !0,
					detail: {
						vocab: this.vocab,
						url: e,
						conceptCount: this.vocabData.concepts.length
					}
				}));
			} catch (o) {
				this.error = o instanceof Error ? o.message : "Failed to load vocabulary", this.vocabData = null, this.conceptMap = /* @__PURE__ */ new Map(), this.dispatchEvent(new CustomEvent("prez-error", {
					bubbles: !0,
					composed: !0,
					detail: {
						vocab: this.vocab,
						url: e,
						error: this.error
					}
				}));
			} finally {
				this.loading = !1;
			}
		}
	}
	async loadVocabFromSparql() {
		let e = this.sparqlConfig;
		if (!e) this.vocabData = null, this.conceptMap = /* @__PURE__ */ new Map();
		else {
			this.loading = !0, this.error = null;
			try {
				let [o, s] = await Promise.all([fetchSchemeMetadata(e), fetchTopConcepts(e)]), l = s.map((e) => ({
					iri: e.iri,
					label: e.label,
					notation: e.notation,
					description: e.description
				}));
				this.vocabData = {
					iri: e.schemeIri,
					label: o.label,
					description: o.description,
					concepts: l,
					tree: s
				}, this.conceptMap = new Map(l.map((e) => [e.iri, e])), this.dispatchEvent(new CustomEvent("prez-load", {
					bubbles: !0,
					composed: !0,
					detail: {
						vocab: this.vocabIri,
						url: e.endpoint,
						conceptCount: l.length
					}
				}));
			} catch (o) {
				this.error = o instanceof Error ? o.message : "Failed to query SPARQL endpoint", this.vocabData = null, this.conceptMap = /* @__PURE__ */ new Map(), this.dispatchEvent(new CustomEvent("prez-error", {
					bubbles: !0,
					composed: !0,
					detail: {
						vocab: this.vocabIri,
						url: e.endpoint,
						error: this.error
					}
				}));
			} finally {
				this.loading = !1;
			}
		}
	}
	async loadChildren(e) {
		let o = this.sparqlConfig;
		if (!o || !this.vocabData) return;
		let s = this.findTreeNode(e, this.vocabData.tree);
		if (!s) return;
		let l = s;
		if (!l.childrenLoaded) {
			l.loading = !0, this.requestUpdate();
			try {
				let s = await fetchNarrowerConcepts(o, e);
				l.children = s, l.childrenLoaded = !0;
				for (let o of s) if (!this.conceptMap.has(o.iri)) {
					let s = {
						iri: o.iri,
						label: o.label,
						notation: o.notation,
						description: o.description,
						broader: [e]
					};
					this.vocabData.concepts.push(s), this.conceptMap.set(o.iri, s);
				}
			} catch (o) {
				l.childrenLoaded = !1;
				let s = o instanceof Error ? o.message : "Failed to load children";
				this.dispatchEvent(new CustomEvent("prez-error", {
					bubbles: !0,
					composed: !0,
					detail: {
						iri: e,
						error: s
					}
				}));
			} finally {
				l.loading = !1, this.requestUpdate();
			}
		}
	}
	findTreeNode(e, o) {
		for (let s of o) {
			if (s.iri === e) return s;
			if (s.children.length > 0) {
				let o = this.findTreeNode(e, s.children);
				if (o) return o;
			}
		}
		return null;
	}
	emitChange(e) {
		this.dispatchEvent(new CustomEvent("prez-change", {
			bubbles: !0,
			composed: !0,
			detail: {
				value: e,
				vocab: this.vocab,
				concepts: Array.isArray(e) ? e.map((e) => this.conceptMap.get(e)).filter(Boolean) : this.conceptMap.get(e) || null
			}
		}));
	}
	emitExpand(e, o) {
		this.dispatchEvent(new CustomEvent("prez-expand", {
			bubbles: !0,
			composed: !0,
			detail: {
				iri: e,
				expanded: o,
				vocab: this.vocab
			}
		}));
	}
	emitFilter(e) {
		this.dispatchEvent(new CustomEvent("prez-filter", {
			bubbles: !0,
			composed: !0,
			detail: {
				text: e,
				vocab: this.vocab
			}
		}));
	}
	getConceptLabel(e) {
		return this.conceptMap.get(e)?.label || e.split(/[#/]/).pop() || e;
	}
};
__decorate([n({ type: String })], PrezVocabBase.prototype, "vocab", void 0), __decorate([n({
	type: String,
	attribute: "vocab-url"
})], PrezVocabBase.prototype, "vocabUrl", void 0), __decorate([n({
	type: String,
	attribute: "base-url"
})], PrezVocabBase.prototype, "baseUrl", void 0), __decorate([n({
	type: String,
	attribute: "sparql-endpoint"
})], PrezVocabBase.prototype, "sparqlEndpoint", void 0), __decorate([n({
	type: String,
	attribute: "vocab-iri"
})], PrezVocabBase.prototype, "vocabIri", void 0), __decorate([n({
	type: String,
	attribute: "named-graph"
})], PrezVocabBase.prototype, "namedGraph", void 0), __decorate([n({ type: Number })], PrezVocabBase.prototype, "timeout", void 0), __decorate([n({
	type: String,
	attribute: "label-predicates"
})], PrezVocabBase.prototype, "labelPredicates", void 0), __decorate([n({
	type: String,
	attribute: "description-predicates"
})], PrezVocabBase.prototype, "descriptionPredicates", void 0), __decorate([n({
	type: Boolean,
	reflect: !0
})], PrezVocabBase.prototype, "disabled", void 0), __decorate([n({ type: String })], PrezVocabBase.prototype, "lang", void 0), __decorate([n({
	type: String,
	reflect: !0
})], PrezVocabBase.prototype, "theme", void 0), __decorate([r()], PrezVocabBase.prototype, "loading", void 0), __decorate([r()], PrezVocabBase.prototype, "error", void 0), __decorate([r()], PrezVocabBase.prototype, "vocabData", void 0), __decorate([r()], PrezVocabBase.prototype, "conceptMap", void 0);
// src/components/list.ts
var $ = class PrezList extends PrezVocabBase {
	constructor(...e) {
		super(...e), this.type = "select", this.fields = "", this.multiple = !1, this.flat = !1, this.horizontal = !1, this.search = !1, this.maxLevel = 1, this.showSelected = !0, this.placeholder = "Select...", this.value = null, this.values = [], this.showCount = !1, this.showDescription = !1, this.showIri = !1, this.filterText = "", this.expandedNodes = /* @__PURE__ */ new Set(), this.dropdownOpen = !1, this.sparqlSearchResults = null, this.searchDebounceTimer = null, this.boundHandleClickOutside = this.handleClickOutside.bind(this);
	}
	static {
		this.styles = p`
    :host {
      display: block;
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 0.875rem;
      background: var(--prez-bg);
      color: var(--prez-text);
      padding: 0.5rem;
      border-radius: 0.375rem;

      /* Light mode colors (default) */
      --prez-bg: #ffffff;
      --prez-border: #d1d5db;
      --prez-border-hover: #9ca3af;
      --prez-border-focus: #3b82f6;
      --prez-focus-ring: rgba(59, 130, 246, 0.2);
      --prez-text: #374151;
      --prez-text-muted: #6b7280;
      --prez-text-placeholder: #9ca3af;
      --prez-text-error: #ef4444;
      --prez-hover-bg: #f3f4f6;
      --prez-selected-bg: #dbeafe;
      --prez-selected-hover-bg: #bfdbfe;
      --prez-table-header-bg: #f9fafb;
      --prez-divider: #e5e7eb;
      --prez-shadow: rgba(0, 0, 0, 0.1);
      --prez-shadow-sm: rgba(0, 0, 0, 0.06);
      --prez-primary: #3b82f6;
      --prez-primary-hover: #eff6ff;
    }

    /* Dark mode - system preference */
    @media (prefers-color-scheme: dark) {
      :host([theme="auto"]) {
        --prez-bg: #1f2937;
        --prez-border: #4b5563;
        --prez-border-hover: #6b7280;
        --prez-border-focus: #60a5fa;
        --prez-focus-ring: rgba(96, 165, 250, 0.3);
        --prez-text: #f3f4f6;
        --prez-text-muted: #9ca3af;
        --prez-text-placeholder: #6b7280;
        --prez-text-error: #f87171;
        --prez-hover-bg: #374151;
        --prez-selected-bg: #2563eb;
        --prez-selected-hover-bg: #3b82f6;
        --prez-table-header-bg: #111827;
        --prez-divider: #374151;
        --prez-shadow: rgba(0, 0, 0, 0.3);
        --prez-shadow-sm: rgba(0, 0, 0, 0.2);
        --prez-primary: #60a5fa;
        --prez-primary-hover: #1e3a5f;
      }
    }

    /* Dark mode - explicit override */
    :host([theme="dark"]) {
      --prez-bg: #1f2937;
      --prez-border: #4b5563;
      --prez-border-hover: #6b7280;
      --prez-border-focus: #60a5fa;
      --prez-focus-ring: rgba(96, 165, 250, 0.3);
      --prez-text: #f3f4f6;
      --prez-text-muted: #9ca3af;
      --prez-text-placeholder: #6b7280;
      --prez-text-error: #f87171;
      --prez-hover-bg: #374151;
      --prez-selected-bg: #2563eb;
      --prez-selected-hover-bg: #3b82f6;
      --prez-table-header-bg: #111827;
      --prez-divider: #374151;
      --prez-shadow: rgba(0, 0, 0, 0.3);
      --prez-shadow-sm: rgba(0, 0, 0, 0.2);
      --prez-primary: #60a5fa;
      --prez-primary-hover: #1e3a5f;
    }

    /* Light mode - explicit override (redundant but explicit for clarity) */
    :host([theme="light"]) {
      --prez-bg: #ffffff;
      --prez-border: #d1d5db;
      --prez-border-hover: #9ca3af;
      --prez-border-focus: #3b82f6;
      --prez-focus-ring: rgba(59, 130, 246, 0.2);
      --prez-text: #374151;
      --prez-text-muted: #6b7280;
      --prez-text-placeholder: #9ca3af;
      --prez-text-error: #ef4444;
      --prez-hover-bg: #f3f4f6;
      --prez-selected-bg: #dbeafe;
      --prez-selected-hover-bg: #bfdbfe;
      --prez-table-header-bg: #f9fafb;
      --prez-divider: #e5e7eb;
      --prez-shadow: rgba(0, 0, 0, 0.1);
      --prez-shadow-sm: rgba(0, 0, 0, 0.06);
      --prez-primary: #3b82f6;
      --prez-primary-hover: #eff6ff;
    }

    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
    }

    /* Dropdown container */
    .dropdown {
      position: relative;
    }

    .dropdown-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--prez-border);
      border-radius: 0.375rem;
      background: var(--prez-bg);
      font-size: 0.875rem;
      cursor: pointer;
      text-align: left;
      gap: 0.5rem;
    }

    .dropdown-trigger:hover {
      border-color: var(--prez-border-hover);
    }

    .dropdown-trigger:focus {
      outline: none;
      border-color: var(--prez-border-focus);
      box-shadow: 0 0 0 2px var(--prez-focus-ring);
    }

    .dropdown-trigger.open {
      border-color: var(--prez-border-focus);
      box-shadow: 0 0 0 2px var(--prez-focus-ring);
    }

    .dropdown-trigger-text {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--prez-text);
    }

    .dropdown-trigger-placeholder {
      color: var(--prez-text-placeholder);
    }

    .dropdown-trigger-icon {
      flex-shrink: 0;
      width: 1rem;
      height: 1rem;
      color: var(--prez-text-muted);
      transition: transform 0.15s;
    }

    .dropdown-trigger.open .dropdown-trigger-icon {
      transform: rotate(180deg);
    }

    .dropdown-search-input {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 0.875rem;
      padding: 0;
      outline: none;
      min-width: 0;
      color: var(--prez-text);
    }

    .dropdown-search-input::placeholder {
      color: var(--prez-text-muted);
    }

    .dropdown-trigger:has(.dropdown-search-input) {
      cursor: text;
    }

    .dropdown-popover {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      margin-top: 0.25rem;
      background: var(--prez-bg);
      border: 1px solid var(--prez-border);
      border-radius: 0.375rem;
      box-shadow: 0 4px 6px -1px var(--prez-shadow), 0 2px 4px -1px var(--prez-shadow-sm);
      z-index: 50;
      max-height: 300px;
      overflow-y: auto;
    }

    .dropdown-popover .tree {
      padding: 0.25rem;
    }

    .dropdown-popover .search {
      padding: 0.5rem;
      border-bottom: 1px solid var(--prez-divider);
      margin-bottom: 0;
    }

    .dropdown-popover .search input {
      margin-bottom: 0;
    }

    /* Search input */
    .search {
      margin-bottom: 0.5rem;
    }

    .search input {
      width: 100%;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--prez-border);
      border-radius: 0.375rem;
      font-size: 0.875rem;
      box-sizing: border-box;
      background: var(--prez-bg);
      color: var(--prez-text);
    }

    .search input::placeholder {
      color: var(--prez-text-placeholder);
    }

    .search input:focus {
      outline: none;
      border-color: var(--prez-border-focus);
      box-shadow: 0 0 0 2px var(--prez-focus-ring);
    }

    /* Tree and list styles */
    .tree, .flat-list {
      list-style: none;
      padding: 0;
      margin: 0;
      max-height: 300px;
      overflow-y: auto;
    }

    .flat-item {
      /* No special positioning needed for flat list */
    }

    .tree-item {
      position: relative;
    }

    /* Vertical connector line */
    .children {
      position: relative;
      list-style: none;
      padding-left: 1.5rem;
      margin: 0;
    }

    .children::before {
      content: '';
      position: absolute;
      left: 0.625rem;
      top: 0;
      bottom: 0.75rem;
      width: 1px;
      background: var(--prez-divider);
    }

    .tree-row {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      cursor: pointer;
    }

    .tree-row:hover {
      background-color: var(--prez-hover-bg);
    }

    .tree-row.selected {
      background-color: var(--prez-selected-bg);
    }

    .expand-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
      height: 1.25rem;
      border: none;
      border-radius: 0.25rem;
      background: transparent;
      cursor: pointer;
      color: var(--prez-text-muted);
      padding: 0;
      flex-shrink: 0;
      transition: background-color 0.15s, color 0.15s;
    }

    .expand-btn:hover {
      background: var(--prez-divider);
      color: var(--prez-text);
    }

    .expand-placeholder {
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
    }

    .checkbox {
      margin-right: 0.25rem;
    }

    .label {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .notation {
      color: var(--prez-text-muted);
      font-size: 0.75rem;
    }

    .count {
      color: var(--prez-text-muted);
      font-size: 0.75rem;
    }

    .children {
      list-style: none;
      padding-left: 1.25rem;
      margin: 0;
    }

    /* Status styles */
    .loading {
      color: var(--prez-text-muted);
      padding: 0.5rem;
    }

    .node-loading {
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
      border: 1.5px solid var(--prez-border);
      border-top-color: var(--prez-primary);
      border-radius: 50%;
      animation: prez-spin 0.6s linear infinite;
      flex-shrink: 0;
    }

    @keyframes prez-spin {
      to { transform: rotate(360deg); }
    }

    .error {
      color: var(--prez-text-error);
      font-size: 0.75rem;
      padding: 0.25rem;
    }

    .empty {
      color: var(--prez-text-muted);
      padding: 0.5rem;
    }

    .selection-count {
      font-size: 0.75rem;
      color: var(--prez-text-muted);
      margin-top: 0.25rem;
    }

    /* Radio mode styles */
    .radio-group {
      display: flex;
      flex-direction: column;
    }

    .radio-level {
      display: flex;
      flex-direction: column;
    }

    .radio-level.horizontal {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: baseline;
    }

    .radio-level.horizontal > .radio-node {
      margin-right: 1rem;
      margin-bottom: 0.5rem;
    }

    .radio-node {
      margin-bottom: 0.5rem;
    }

    .radio-node:last-child {
      margin-bottom: 0;
    }

    .radio-children {
      padding-left: 1.5rem;
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
    }

    .radio-children.horizontal {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: baseline;
    }

    .radio-children.horizontal > .radio-node {
      margin-right: 1rem;
    }

    .radio-children.with-separator {
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid var(--prez-divider);
    }

    .radio-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .radio-item:hover {
      color: var(--prez-primary);
    }

    .radio-item input[type="radio"] {
      margin: 0;
      cursor: pointer;
    }

    .radio-item .label {
      cursor: pointer;
    }

    /* Description styles */
    .description {
      font-size: 0.75rem;
      color: var(--prez-text-muted);
      margin-top: 0.125rem;
      line-height: 1.4;
    }

    .item-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }

    .item-content .label {
      flex: none;
    }

    /* Select all/deselect all controls */
    .select-controls {
      display: flex;
      gap: 0.5rem;
      padding: 0.25rem 0;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid var(--prez-divider);
    }

    .select-controls button {
      font-size: 0.75rem;
      color: var(--prez-primary);
      background: none;
      border: none;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      border-radius: 0.25rem;
    }

    .select-controls button:hover:not(:disabled) {
      background: var(--prez-primary-hover);
    }

    .select-controls button:disabled {
      opacity: 0.6;
      cursor: default;
    }

    /* Table styles */
    .vocab-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
    }

    .vocab-table th {
      text-align: left;
      padding: 0.5rem;
      border-bottom: 2px solid var(--prez-divider);
      font-weight: 600;
      color: var(--prez-text);
      background: var(--prez-table-header-bg);
    }

    .vocab-table td {
      padding: 0.5rem;
      border-bottom: 1px solid var(--prez-divider);
      vertical-align: top;
    }

    .vocab-table tr:hover {
      background: var(--prez-table-header-bg);
    }

    .vocab-table tr.selected {
      background: var(--prez-selected-bg);
    }

    .vocab-table tr.selected:hover {
      background: var(--prez-selected-hover-bg);
    }

    .vocab-table .cell-indent {
      display: flex;
      align-items: flex-start;
      gap: 0.25rem;
    }

    .vocab-table .indent-spacer {
      width: 1rem;
      flex-shrink: 0;
    }

    .vocab-table .cell-checkbox {
      width: 2rem;
      text-align: center;
    }

    .vocab-table .cell-iri {
      font-family: monospace;
      font-size: 0.75rem;
      color: var(--prez-text-muted);
      word-break: break-all;
    }

    .vocab-table .cell-description {
      color: var(--prez-text-muted);
      font-size: 0.8125rem;
    }
  `;
	}
	connectedCallback() {
		super.connectedCallback(), document.addEventListener("click", this.boundHandleClickOutside);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), document.removeEventListener("click", this.boundHandleClickOutside), this.searchDebounceTimer && clearTimeout(this.searchDebounceTimer);
	}
	handleClickOutside(e) {
		this.dropdownOpen && !this.contains(e.target) && (this.dropdownOpen = !1);
	}
	updated(e) {
		super.updated(e), e.has("vocabData") && this.vocabData && this.initializeExpanded();
	}
	initializeExpanded() {
		if (this.vocabData?.tree) {
			if (this.sparqlMode) this.expandedNodes = /* @__PURE__ */ new Set();
			else if (this.maxLevel === -1) {
				let e = /* @__PURE__ */ new Set(), collectIris = (o) => {
					for (let s of o) s.children.length > 0 && (e.add(s.iri), collectIris(s.children));
				};
				collectIris(this.vocabData.tree), this.expandedNodes = e;
			} else if (this.maxLevel > 0) {
				let e = /* @__PURE__ */ new Set(), expandToLevel = (o, s) => {
					if (!(s <= 0)) for (let l of o) l.children.length > 0 && (e.add(l.iri), expandToLevel(l.children, s - 1));
				};
				expandToLevel(this.vocabData.tree, this.maxLevel), this.expandedNodes = e;
			}
		}
	}
	handleFilter(e) {
		this.filterText = e.target.value, this.emitFilter(this.filterText), this.sparqlMode && this.debounceSparqlSearch(this.filterText);
	}
	debounceSparqlSearch(e) {
		this.searchDebounceTimer && clearTimeout(this.searchDebounceTimer), e ? this.searchDebounceTimer = setTimeout(async () => {
			let o = this.sparqlConfig;
			if (o) try {
				this.sparqlSearchResults = await fetchSearchConcepts(o, e);
			} catch {
				this.sparqlSearchResults = [];
			}
		}, 300) : this.sparqlSearchResults = null;
	}
	async toggleExpand(e, o) {
		o.stopPropagation();
		let s = new Set(this.expandedNodes), l = s.has(e);
		!l && this.sparqlMode && await this.loadChildren(e), l ? s.delete(e) : s.add(e), this.expandedNodes = s, this.emitExpand(e, !l);
	}
	toggleDropdown(e) {
		e.stopPropagation(), this.dropdownOpen = !this.dropdownOpen;
	}
	selectRadio(e) {
		this.value = e, this.emitChange(e);
	}
	selectAll() {
		if (!this.vocabData) return;
		let e = this.filteredConcepts.map((e) => e.iri);
		this.values = e, this.emitChange(e);
	}
	deselectAll() {
		this.values = [], this.emitChange([]);
	}
	selectNode(e) {
		if (this.multiple) {
			let o = this.values.includes(e) ? this.values.filter((o) => o !== e) : [...this.values, e];
			this.values = o, this.emitChange(o);
		} else this.value = e, this.emitChange(e), this.type === "dropdown" && (this.dropdownOpen = !1, this.filterText = "");
	}
	handleSelectChange(e) {
		let o = e.target;
		if (this.multiple) {
			let e = Array.from(o.selectedOptions).map((e) => e.value);
			this.values = e, this.emitChange(e);
		} else {
			let e = o.value || null;
			this.value = e, this.emitChange(e || "");
		}
	}
	countDescendants(e) {
		let o = e.children.length;
		for (let s of e.children) o += this.countDescendants(s);
		return o;
	}
	collectDescendantIris(e) {
		let o = [e.iri];
		for (let s of e.children) o.push(...this.collectDescendantIris(s));
		return o;
	}
	selectNodeWithDescendants(e, o) {
		o.stopPropagation(), o.preventDefault();
		let s = this.collectDescendantIris(e), l = this.values.includes(e.iri), u;
		if (l) u = this.values.filter((e) => !s.includes(e));
		else {
			let e = s.filter((e) => !this.values.includes(e));
			u = [...this.values, ...e];
		}
		this.values = u, this.emitChange(u);
	}
	get filteredConcepts() {
		if (!this.vocabData?.concepts) return [];
		let e = this.vocabData.concepts;
		if (this.filterText) {
			let o = this.filterText.toLowerCase();
			e = e.filter((e) => e.label.toLowerCase().includes(o) || e.notation?.toLowerCase().includes(o) || e.altLabels?.some((e) => e.toLowerCase().includes(o)));
		}
		return [...e].sort((e, o) => e.label.localeCompare(o.label));
	}
	filterTreeNodes(e) {
		if (!this.filterText) return e;
		let o = this.filterText.toLowerCase(), matchesFilter = (e) => e.label.toLowerCase().includes(o) || (e.notation?.toLowerCase().includes(o) ?? !1), filterNode = (e) => {
			let o = e.children.map(filterNode).filter((e) => e !== null);
			return matchesFilter(e) || o.length > 0 ? {
				...e,
				children: o
			} : null;
		};
		return e.map(filterNode).filter((e) => e !== null);
	}
	nodeHasChildren(e) {
		return e.children.length > 0 ? !0 : this.sparqlMode && "hasChildren" in e ? e.hasChildren : !1;
	}
	isNodeLoading(e) {
		return "loading" in e && e.loading;
	}
	renderTreeNode(e) {
		let o = this.nodeHasChildren(e), s = this.isNodeLoading(e), l = this.expandedNodes.has(e.iri) || this.filterText && o && !this.sparqlMode, u = this.multiple ? this.values.includes(e.iri) : this.value === e.iri;
		return W`
      <li class="tree-item">
        <div
          class="tree-row ${this.showSelected && u ? "selected" : ""}"
          @click=${() => this.selectNode(e.iri)}
        >
          ${s ? W`<span class="node-loading"></span>` : o ? W`
            <button
              class="expand-btn"
              @click=${(o) => this.toggleExpand(e.iri, o)}
              aria-expanded=${l}
              aria-label=${l ? "Collapse" : "Expand"}
            >
              ${l ? W`<svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3 L5 7 L9 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>` : W`<svg width="10" height="10" viewBox="0 0 10 10"><path d="M3 1 L7 5 L3 9" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
            </button>
          ` : W`<span class="expand-placeholder"></span>`}
          ${this.multiple ? W`
            <input
              type="checkbox"
              class="checkbox"
              .checked=${u}
              @click=${(o) => {
			o.stopPropagation(), this.selectNode(e.iri);
		}}
              @dblclick=${(o) => this.selectNodeWithDescendants(e, o)}
              title="Double-click to select/deselect with all children"
            >
          ` : K}
          ${e.notation ? W`<span class="notation">${e.notation}</span>` : K}
          <div class="item-content">
            <span class="label">${e.label}</span>
            ${this.showDescription && e.description ? W`
              <span class="description">${e.description}</span>
            ` : K}
          </div>
          ${this.showCount && o ? W`
            <span class="count">(${this.countDescendants(e)})</span>
          ` : K}
        </div>
        ${o && l && e.children.length > 0 ? W`
          <ul class="children">
            ${e.children.map((e) => this.renderTreeNode(e))}
          </ul>
        ` : K}
      </li>
    `;
	}
	findNodePath(e, o = this.vocabData?.tree || [], s = []) {
		for (let l of o) {
			let o = [...s, l.label];
			if (l.iri === e) return o;
			if (l.children.length > 0) {
				let s = this.findNodePath(e, l.children, o);
				if (s) return s;
			}
		}
		return null;
	}
	getSelectedLabels() {
		if (this.multiple) {
			if (this.values.length === 0) return "";
			let e = this.values.map((e) => {
				if (!this.flat) {
					let o = this.findNodePath(e);
					if (o) return o.join(" > ");
				}
				return this.vocabData?.concepts.find((o) => o.iri === e)?.label || e;
			}).slice(0, 2);
			return this.values.length > 2 ? `${e.join(", ")} +${this.values.length - 2} more` : e.join(", ");
		}
		if (!this.value) return "";
		if (!this.flat) {
			let e = this.findNodePath(this.value);
			if (e) return e.join(" > ");
		}
		return this.vocabData?.concepts.find((e) => e.iri === this.value)?.label || this.value;
	}
	renderDropdownContent() {
		if (this.flat) {
			let e = this.filteredConcepts;
			return e.length === 0 ? W`<div class="empty">${this.filterText ? "No matching concepts" : "No concepts available"}</div>` : W`
        ${this.renderSelectControls()}
        <ul class="flat-list" role="listbox" aria-label=${this.vocabData?.label || "Vocabulary list"}>
          ${e.map((e) => {
				let o = this.multiple ? this.values.includes(e.iri) : this.value === e.iri;
				return W`
              <li class="flat-item">
                <div
                  class="tree-row ${this.showSelected && o ? "selected" : ""}"
                  role="option"
                  aria-selected=${o}
                  @click=${() => this.selectNode(e.iri)}
                >
                  ${this.multiple ? W`
                    <input
                      type="checkbox"
                      class="checkbox"
                      .checked=${o}
                      @click=${(o) => {
					o.stopPropagation(), this.selectNode(e.iri);
				}}
                    >
                  ` : K}
                  ${e.notation ? W`<span class="notation">${e.notation}</span>` : K}
                  <div class="item-content">
                    <span class="label">${e.label}</span>
                    ${this.showDescription && e.description ? W`
                      <span class="description">${e.description}</span>
                    ` : K}
                  </div>
                </div>
              </li>
            `;
			})}
        </ul>
      `;
		}
		if (this.sparqlMode && this.filterText && this.sparqlSearchResults !== null) return this.sparqlSearchResults.length === 0 ? W`<div class="empty">No matching concepts</div>` : W`
        <ul class="tree" role="tree" aria-label=${this.vocabData?.label || "Search results"}>
          ${this.sparqlSearchResults.map((e) => this.renderTreeNode(e))}
        </ul>
      `;
		let e = this.sparqlMode ? this.vocabData?.tree || [] : this.filterTreeNodes(this.vocabData?.tree || []);
		return e.length === 0 ? W`<div class="empty">${this.filterText ? "No matching concepts" : "No hierarchy available"}</div>` : W`
      ${this.renderSelectControls()}
      <ul class="tree" role="tree" aria-label=${this.vocabData?.label || "Vocabulary tree"}>
        ${e.map((e) => this.renderTreeNode(e))}
      </ul>
    `;
	}
	handleSearchFocus() {
		this.dropdownOpen = !0;
	}
	handleSearchInput(e) {
		this.filterText = e.target.value, this.emitFilter(this.filterText), this.dropdownOpen ||= !0, this.sparqlMode && this.debounceSparqlSearch(this.filterText);
	}
	renderDropdown() {
		let e = this.getSelectedLabels(), o = this.multiple ? this.values.length > 0 : !!this.value;
		return this.search ? W`
        <div class="dropdown">
          <div class="dropdown-trigger ${this.dropdownOpen ? "open" : ""}">
            <input
              type="text"
              class="dropdown-search-input"
              .value=${this.filterText}
              placeholder=${o ? e : this.placeholder}
              @focus=${this.handleSearchFocus}
              @input=${this.handleSearchInput}
              @click=${(e) => e.stopPropagation()}
              aria-haspopup="listbox"
              aria-expanded=${this.dropdownOpen}
            />
            <svg class="dropdown-trigger-icon" viewBox="0 0 20 20" fill="currentColor" @click=${this.toggleDropdown}>
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>
          ${this.dropdownOpen ? W`
            <div class="dropdown-popover">
              ${this.renderDropdownContent()}
              ${this.multiple && this.values.length > 0 ? W`
                <div class="selection-count" style="padding: 0.25rem 0.5rem; border-top: 1px solid var(--prez-divider);">
                  ${this.values.length} selected
                </div>
              ` : K}
            </div>
          ` : K}
        </div>
      ` : W`
      <div class="dropdown">
        <button
          class="dropdown-trigger ${this.dropdownOpen ? "open" : ""}"
          @click=${this.toggleDropdown}
          aria-haspopup="listbox"
          aria-expanded=${this.dropdownOpen}
        >
          <span class="dropdown-trigger-text ${o ? "" : "dropdown-trigger-placeholder"}">
            ${o ? e : this.placeholder}
          </span>
          <svg class="dropdown-trigger-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
        ${this.dropdownOpen ? W`
          <div class="dropdown-popover">
            ${this.renderDropdownContent()}
            ${this.multiple && this.values.length > 0 ? W`
              <div class="selection-count" style="padding: 0.25rem 0.5rem; border-top: 1px solid var(--prez-divider);">
                ${this.values.length} selected
              </div>
            ` : K}
          </div>
        ` : K}
      </div>
    `;
	}
	renderSelectControls() {
		if (!this.multiple) return K;
		let e = this.filteredConcepts.length, o = this.values.length;
		return W`
      <div class="select-controls">
        <button @click=${this.selectAll} ?disabled=${o === e}>
          Select all${this.filterText ? " filtered" : ""} (${e})
        </button>
        <button @click=${this.deselectAll} ?disabled=${o === 0}>
          Deselect all
        </button>
      </div>
    `;
	}
	renderTree() {
		if (this.sparqlMode && this.filterText && this.sparqlSearchResults !== null) return this.sparqlSearchResults.length === 0 ? W`<div class="empty">No matching concepts</div>` : W`
        <ul class="tree" role="tree" aria-label=${this.vocabData?.label || "Search results"}>
          ${this.sparqlSearchResults.map((e) => this.renderTreeNode(e))}
        </ul>
      `;
		let e = this.sparqlMode ? this.vocabData?.tree || [] : this.filterTreeNodes(this.vocabData?.tree || []);
		return e.length === 0 ? W`<div class="empty">${this.filterText ? "No matching concepts" : "No hierarchy available"}</div>` : W`
      ${this.renderSelectControls()}
      <ul class="tree" role="tree" aria-label=${this.vocabData?.label || "Vocabulary tree"}>
        ${e.map((e) => this.renderTreeNode(e))}
      </ul>
      ${this.multiple && this.values.length > 0 ? W`
        <div class="selection-count">
          ${this.values.length} selected
        </div>
      ` : K}
    `;
	}
	renderRadioNode(e, o) {
		let s = e.children.length > 0, l = e.children.length > 1, u = this.value === e.iri, f = `radio-${this.vocab || "vocab"}`, p = this.horizontal && l && !o;
		return W`
      <div class="radio-node">
        <label class="radio-item">
          <input
            type="radio"
            name=${f}
            .checked=${u}
            @change=${() => this.selectRadio(e.iri)}
          />
          ${e.notation ? W`<span class="notation">${e.notation}</span>` : K}
          <div class="item-content">
            <span class="label">${e.label}</span>
            ${this.showDescription && e.description ? W`
              <span class="description">${e.description}</span>
            ` : K}
          </div>
        </label>
        ${s ? W`
          <div class="radio-children ${this.horizontal ? "horizontal" : ""} ${p ? "with-separator" : ""}">
            ${e.children.map((s, l) => {
			let u = o && l === e.children.length - 1;
			return this.renderRadioNode(s, u);
		})}
          </div>
        ` : K}
      </div>
    `;
	}
	renderRadio() {
		let e = this.filterTreeNodes(this.vocabData?.tree || []);
		return e.length === 0 ? W`<div class="empty">${this.filterText ? "No matching concepts" : "No concepts available"}</div>` : W`
      <div class="radio-group" role="radiogroup" aria-label=${this.vocabData?.label || "Vocabulary selection"}>
        <div class="radio-level ${this.horizontal ? "horizontal" : ""}">
          ${e.map((o, s) => this.renderRadioNode(o, s === e.length - 1))}
        </div>
      </div>
    `;
	}
	get tableFields() {
		return this.fields ? this.fields.split(",").map((e) => e.trim()) : [
			"iri",
			"label",
			"notation",
			"description"
		];
	}
	getFieldLabel(e) {
		return {
			iri: "IRI",
			label: "Label",
			notation: "Notation",
			description: "Description",
			altLabels: "Alt Labels",
			broader: "Broader",
			narrower: "Narrower"
		}[e] || e;
	}
	getFieldValue(e, o) {
		switch (o) {
			case "iri": return e.iri;
			case "label": return e.label;
			case "notation": return e.notation || "";
			case "description": return e.description || "";
			case "altLabels": return e.altLabels?.join(", ") || "";
			case "broader": return e.broader?.join(", ") || "";
			case "narrower": return e.narrower?.join(", ") || "";
			default: return "";
		}
	}
	renderTableRow(e, o = 0) {
		let s = this.multiple ? this.values.includes(e.iri) : this.value === e.iri, l = this.tableFields;
		return W`
      <tr
        class="${s ? "selected" : ""}"
        @click=${() => this.selectNode(e.iri)}
        style="cursor: pointer"
      >
        ${this.multiple ? W`
          <td class="cell-checkbox">
            <input
              type="checkbox"
              .checked=${s}
              @click=${(o) => {
			o.stopPropagation(), this.selectNode(e.iri);
		}}
            />
          </td>
        ` : K}
        ${l.map((s, l) => W`
          <td class="${s === "iri" ? "cell-iri" : s === "description" ? "cell-description" : ""}">
            ${l === 0 && !this.flat && o > 0 ? W`
              <div class="cell-indent">
                ${Array(o).fill(0).map(() => W`<span class="indent-spacer"></span>`)}
                <span>${this.getFieldValue(e, s)}</span>
              </div>
            ` : this.getFieldValue(e, s)}
          </td>
        `)}
      </tr>
    `;
	}
	renderTableTreeRows(e, o = 0) {
		let s = this.conceptMap.get(e.iri);
		if (!s) return [];
		let l = [this.renderTableRow(s, o)];
		for (let s of e.children) l.push(...this.renderTableTreeRows(s, o + 1));
		return l;
	}
	renderTable() {
		let e = this.tableFields;
		if (this.flat) {
			let o = this.filteredConcepts;
			return o.length === 0 ? W`<div class="empty">${this.filterText ? "No matching concepts" : "No concepts available"}</div>` : W`
        ${this.renderSelectControls()}
        <table class="vocab-table">
          <thead>
            <tr>
              ${this.multiple ? W`<th class="cell-checkbox"></th>` : K}
              ${e.map((e) => W`<th>${this.getFieldLabel(e)}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${o.map((e) => this.renderTableRow(e, 0))}
          </tbody>
        </table>
        ${this.multiple && this.values.length > 0 ? W`
          <div class="selection-count">
            ${this.values.length} selected
          </div>
        ` : K}
      `;
		}
		let o = this.filterTreeNodes(this.vocabData?.tree || []);
		return o.length === 0 ? W`<div class="empty">${this.filterText ? "No matching concepts" : "No hierarchy available"}</div>` : W`
      ${this.renderSelectControls()}
      <table class="vocab-table">
        <thead>
          <tr>
            ${this.multiple ? W`<th class="cell-checkbox"></th>` : K}
            ${e.map((e) => W`<th>${this.getFieldLabel(e)}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${o.flatMap((e) => this.renderTableTreeRows(e, 0))}
        </tbody>
      </table>
      ${this.multiple && this.values.length > 0 ? W`
        <div class="selection-count">
          ${this.values.length} selected
        </div>
      ` : K}
    `;
	}
	renderFlatItem(e) {
		let o = this.multiple ? this.values.includes(e.iri) : this.value === e.iri;
		return this.type === "radio" ? W`
        <div class="radio-node">
          <label class="radio-item">
            <input
              type="radio"
              name=${`radio-${this.vocab || "vocab"}`}
              .checked=${o}
              @change=${() => this.selectRadio(e.iri)}
            />
            ${e.notation ? W`<span class="notation">${e.notation}</span>` : K}
            <div class="item-content">
              <span class="label">${e.label}</span>
              ${this.showDescription && e.description ? W`
                <span class="description">${e.description}</span>
              ` : K}
            </div>
          </label>
        </div>
      ` : W`
      <li class="flat-item">
        <div
          class="tree-row ${this.showSelected && o ? "selected" : ""}"
          role="option"
          aria-selected=${o}
          @click=${() => this.selectNode(e.iri)}
        >
          ${this.multiple ? W`
            <input
              type="checkbox"
              class="checkbox"
              .checked=${o}
              @click=${(o) => {
			o.stopPropagation(), this.selectNode(e.iri);
		}}
            >
          ` : K}
          ${e.notation ? W`<span class="notation">${e.notation}</span>` : K}
          <div class="item-content">
            <span class="label">${e.label}</span>
            ${this.showDescription && e.description ? W`
              <span class="description">${e.description}</span>
            ` : K}
          </div>
        </div>
      </li>
    `;
	}
	renderFlatList() {
		let e = this.filteredConcepts;
		return e.length === 0 ? W`<div class="empty">${this.filterText ? "No matching concepts" : "No concepts available"}</div>` : this.type === "radio" ? W`
        <div class="radio-group" role="radiogroup" aria-label=${this.vocabData?.label || "Vocabulary selection"}>
          <div class="radio-level ${this.horizontal ? "horizontal" : ""}">
            ${e.map((e) => this.renderFlatItem(e))}
          </div>
        </div>
      ` : W`
      ${this.renderSelectControls()}
      <ul class="flat-list" role="listbox" aria-label=${this.vocabData?.label || "Vocabulary list"}>
        ${e.map((e) => this.renderFlatItem(e))}
      </ul>
      ${this.multiple && this.values.length > 0 ? W`
        <div class="selection-count">
          ${this.values.length} selected
        </div>
      ` : K}
    `;
	}
	render() {
		return this.loading ? W`<div class="loading">Loading vocabulary...</div>` : this.error ? W`<div class="error">${this.error}</div>` : this.vocabData ? this.type === "dropdown" ? this.renderDropdown() : this.type === "radio" ? W`
        ${this.search ? W`
          <div class="search">
            <input
              type="text"
              .value=${this.filterText}
              @input=${this.handleFilter}
              placeholder="Filter concepts..."
              aria-label="Filter concepts"
            />
          </div>
        ` : K}
        ${this.flat ? this.renderFlatList() : this.renderRadio()}
      ` : this.type === "table" ? W`
        ${this.search ? W`
          <div class="search">
            <input
              type="text"
              .value=${this.filterText}
              @input=${this.handleFilter}
              placeholder="Filter concepts..."
              aria-label="Filter concepts"
            />
          </div>
        ` : K}
        ${this.renderTable()}
      ` : W`
      ${this.search ? W`
        <div class="search">
          <input
            type="text"
            .value=${this.filterText}
            @input=${this.handleFilter}
            placeholder="Filter concepts..."
            aria-label="Filter concepts"
          />
        </div>
      ` : K}
      ${this.flat ? this.renderFlatList() : this.renderTree()}
    ` : W`<div class="loading">No vocabulary specified</div>`;
	}
};
__decorate([n({ type: String })], $.prototype, "type", void 0), __decorate([n({ type: String })], $.prototype, "fields", void 0), __decorate([n({ type: Boolean })], $.prototype, "multiple", void 0), __decorate([n({ type: Boolean })], $.prototype, "flat", void 0), __decorate([n({ type: Boolean })], $.prototype, "horizontal", void 0), __decorate([n({ type: Boolean })], $.prototype, "search", void 0), __decorate([n({
	type: Number,
	attribute: "max-level"
})], $.prototype, "maxLevel", void 0), __decorate([n({
	type: Boolean,
	attribute: "show-selected"
})], $.prototype, "showSelected", void 0), __decorate([n({ type: String })], $.prototype, "placeholder", void 0), __decorate([n({ type: String })], $.prototype, "value", void 0), __decorate([n({
	type: Array,
	attribute: "values"
})], $.prototype, "values", void 0), __decorate([n({
	type: Boolean,
	attribute: "show-count"
})], $.prototype, "showCount", void 0), __decorate([n({
	type: Boolean,
	attribute: "show-description"
})], $.prototype, "showDescription", void 0), __decorate([n({
	type: Boolean,
	attribute: "show-iri"
})], $.prototype, "showIri", void 0), __decorate([r()], $.prototype, "filterText", void 0), __decorate([r()], $.prototype, "expandedNodes", void 0), __decorate([r()], $.prototype, "dropdownOpen", void 0), __decorate([r()], $.prototype, "sparqlSearchResults", void 0), $ = __decorate([t("prez-list")], $);
export { $ as PrezList, PrezVocabBase, clearCache, detectBaseUrl, fetchNarrowerConcepts, fetchSearchConcepts, fetchTopConcepts, fetchVocab, resolveVocabUrl };
