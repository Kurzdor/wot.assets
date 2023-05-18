(()=>{"use strict";var __webpack_modules__={521:(e,t,n)=>{let a,r;n.d(t,{n:()=>a}),function(e){e[e.ALT=164]="ALT",e[e.ENTER=13]="ENTER",e[e.ESCAPE=27]="ESCAPE",e[e.SPACE=32]="SPACE",e[e.END=35]="END",e[e.HOME=36]="HOME",e[e.ARROW_LEFT=37]="ARROW_LEFT",e[e.ARROW_UP=38]="ARROW_UP",e[e.ARROW_RIGHT=39]="ARROW_RIGHT",e[e.ARROW_DOWN=40]="ARROW_DOWN",e[e.NUM_PLUS=107]="NUM_PLUS",e[e.NUM_MINUS=109]="NUM_MINUS",e[e.PLUS=187]="PLUS",e[e.MINUS=189]="MINUS",e[e.PAGE_UP=33]="PAGE_UP",e[e.PAGE_DOWN=34]="PAGE_DOWN",e[e.BACKSPACE=8]="BACKSPACE",e[e.DELETE=46]="DELETE",e[e.TAB=9]="TAB",e[e.KEY_N=78]="KEY_N",e[e.KEY_1=49]="KEY_1",e[e.KEY_2=50]="KEY_2",e[e.KEY_3=51]="KEY_3",e[e.KEY_4=52]="KEY_4",e[e.KEY_5=53]="KEY_5",e[e.KEY_6=54]="KEY_6",e[e.KEY_7=55]="KEY_7",e[e.KEY_8=56]="KEY_8",e[e.KEY_9=57]="KEY_9"}(a||(a={})),function(e){e.ALT="Alt",e.ALT_GRAPH="AltGraph",e.CAPS_LOCK="CapsLock",e.CONTROL="Control",e.FN="Fn",e.FN_LOCK="FnLock",e.META="Meta",e.NUM_LOCK="NumLock",e.SCROLL_LOCK="ScrollLock",e.SHIFT="Shift",e.SYMBOL="Symbol",e.SYMBOL_LOCK="SymbolLock"}(r||(r={}))},358:(e,t,n)=>{n.d(t,{Z:()=>r});class a{constructor(){this._callbacks=void 0,this._updateHandler=void 0,this._views=void 0,this.clearViewCallbacks=e=>{this._views[e]&&(this._views[e].forEach((e=>{delete this._callbacks[e]})),delete this._views[e])},this._callbacks={},this._views={},this._updateHandler=void 0}static get instance(){return window.__dataTracker||(window.__dataTracker=new a),window.__dataTracker}clear(){void 0!==this._updateHandler&&(this._updateHandler.clear(),this._updateHandler=void 0),this._callbacks={}}addCallback(e,t,n=0,a=!0){void 0===this._updateHandler&&(this._updateHandler=engine.on("viewEnv.onDataChanged",this._emmitDataChanged,this));const r=viewEnv.addDataChangedCallback(e,n,a);return r>0?(this._callbacks[r]=t,n>0&&(this._views[n]?this._views[n].push(r):this._views[n]=[r])):console.error("Can't add callback for model:",e),r}removeCallback(e,t=0){let n=!1;return void 0!==e&&void 0!==this._callbacks[e]&&(n=viewEnv.removeDataChangedCallback(e,t),delete this._callbacks[e]),n||console.error("Can't remove callback by id:",e),n}_emmitDataChanged(e,t,n){n.forEach((n=>{const a=this._callbacks[n];void 0!==a&&a(e,t)}))}}a.__instance=void 0;const r=a},572:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _DataTracker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(358),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(364);class ViewModel{constructor(path,watchingFields=[]){this.dataTracker=void 0,this.modelPath=void 0,this.callbacks=void 0,this.data=void 0,this._notifyObservers=()=>{this.data=eval(this.modelPath),this.callbacks.forEach((e=>{e(this.data)}))},this.dataTracker=new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z,this.modelPath=path,this.callbacks=new Set,(0,_index__WEBPACK_IMPORTED_MODULE_1__.ry)().then((()=>{this._addCallback(path),watchingFields.forEach((e=>{this._addCallback(path+"."+e)})),this._notifyObservers()}))}subscribe(e){this.callbacks.add(e),null!==this.data&&void 0!==this.data&&e(this.data)}unsubscribe(e){this.callbacks.delete(e)}destroy(){this.dataTracker.clear(),this.callbacks.clear()}_addCallback(e){this.dataTracker.addCallback(e,this._notifyObservers)}}const __WEBPACK_DEFAULT_EXPORT__=ViewModel},364:(e,t,n)=>{n.d(t,{ry:()=>w,Sy:()=>f});class a{constructor(){this.entries=[],this._listenMouse=!1,this.onMouseDown=e=>{this.entries.forEach((({container:t,callback:n})=>{let a=e.target;do{if(a===t)return;a=a.parentNode}while(a);n()}))}}static get instance(){return a.__instance||(a.__instance=new a),a.__instance}register(e,t){this.addMouseListener(),this.entries.push({container:e,callback:t})}unregister(e,t){const n=e,a=t;this.entries=this.entries.filter((({container:e,callback:t})=>e!==n||t!==a)),this.removeMouseListener()}addMouseListener(){this._listenMouse||(document.addEventListener("mousedown",this.onMouseDown),this._listenMouse=!0)}removeMouseListener(){this._listenMouse&&0===this.entries.length&&(document.removeEventListener("mousedown",this.onMouseDown),this._listenMouse=!1)}}a.__instance=void 0;const r=a;var o=n(358);const s={getNumberFormat:(e,t)=>systemLocale.getNumberFormat(e,t),getRealFormat:(e,t)=>systemLocale.getRealFormat(e,t),getTimeFormat:(e,t)=>systemLocale.getTimeFormat(e,t),getDateFormat:(e,t)=>systemLocale.getDateFormat(e,t),toUpperCase:e=>systemLocale.toUpperCase(e),toLowerCase:e=>systemLocale.toUpperCase(e)},i={getNumberFormat:e=>userLocale.getNumberFormat(e),getTimeFormat:(e,t,n)=>userLocale.getTimeFormat(e,t,void 0===n||n),getTimeString:(e,t,n)=>userLocale.getTimeString(e,t,void 0===n||n)};let c;!function(e){e[e.UNDEFINED=0]="UNDEFINED",e[e.TOOLTIP=1]="TOOLTIP",e[e.POP_OVER=2]="POP_OVER",e[e.CONTEXT_MENU=4]="CONTEXT_MENU",e[e.DROP_DOWN=8]="DROP_DOWN",e[e.MOVE=16]="MOVE",e[e.CLOSE=32]="CLOSE",e[e.MINIMIZE=64]="MINIMIZE"}(c||(c={}));const l=Object.freeze({INTEGRAL:0,GOLD:1}),u=Object.freeze({FRACTIONAL:0,WO_ZERO_DIGITS:1}),_=Object.freeze({SHORT_FORMAT:0,LONG_FORMAT:1}),d=Object.freeze({SHORT_FORMAT:0,LONG_FORMAT:1,YEAR_MONTH:2});var m=n(521);const b=["args"];function v(e,t,n,a,r,o,s){try{var i=e[o](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(a,r)}const h=e=>({__Type:"GFBoundingBox",x:e.x,y:e.y,width:e.width,height:e.height}),w=function(){var e,t=(e=function*(){return!(!engine._BindingsReady||!engine._WindowLoaded)||new Promise((e=>{engine.on("Ready",e)}))},function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function s(e){v(o,a,r,s,i,"next",e)}function i(e){v(o,a,r,s,i,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}(),g=(e,t)=>{const n="GFViewEventProxy";if(void 0!==t){const r=t.args,o=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,b);void 0!==r?viewEnv.handleViewEvent(Object.assign({__Type:n,type:e},o,{arguments:(a=r,Object.entries(a).map((([e,t])=>{const n={__Type:"GFValueProxy",name:e};switch(typeof t){case"number":n.number=t;break;case"boolean":n.bool=t;break;default:n.string=t.toString()}return n})))})):viewEnv.handleViewEvent(Object.assign({__Type:n,type:e},o))}else viewEnv.handleViewEvent({__Type:n,type:e});var a},f=()=>g(c.CLOSE),E=(e,t)=>{e.keyCode===m.n.ESCAPE&&t()};var p=n(572);const y=r.instance,k={DataTracker:o.Z,ViewModel:p.Z,ViewEventType:c,NumberFormatType:l,RealFormatType:u,TimeFormatType:_,DateFormatType:d,makeGlobalBoundingBox:h,sendMoveEvent:e=>g(c.MOVE,{isMouseEvent:!0,on:e}),sendCloseEvent:f,sendClosePopOverEvent:()=>g(c.POP_OVER,{on:!1}),sendShowContextMenuEvent:(e,t,n=0)=>{g(c.CONTEXT_MENU,{isMouseEvent:!0,contentID:e,on:!0,decoratorID:n,args:t})},sendShowPopOverEvent:(e,t,n,a,r)=>{const o=viewEnv.getViewGlobalPosition(),s=n.getBoundingClientRect(),i=s.x,l=s.y,u=s.width,_=s.height,d={x:viewEnv.pxToRem(i+o.x),y:viewEnv.pxToRem(l+o.y),width:viewEnv.pxToRem(u),height:viewEnv.pxToRem(_)};g(c.POP_OVER,{isMouseEvent:!0,contentID:e,decoratorID:a||R.invalid("resId"),direction:t,bbox:h(d),on:!0,args:r})},addEscapeListener:e=>{const t=t=>E(t,e);return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},closeOnEsc:e=>{E(e,f)},handleViewEvent:g,onBindingsReady:w,onLayoutReady:()=>new Promise((e=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{e()}))}))})),onWindowLoaded:()=>new Promise((e=>{engine.on("windowLoaded",e)})),isTooltipShown:()=>viewEnv.isWindowShownByViewEvent(c.TOOLTIP),isContextMenuShown:()=>viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),isPopOverShown:()=>viewEnv.isWindowShownByViewEvent(c.POP_OVER),dumpViewModel:function e(t){const n={};if("object"!=typeof t)return t;for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)){const r=Object.prototype.toString.call(t[a]);if(r.startsWith("[object CoherentArrayProxy]")){const r=t[a];n[a]=[];for(let t=0;t<r.length;t++)n[a].push({value:e(r[t].value)})}else r.startsWith("[object class BW::WULF::ViewModel")?n[a]=e(t[a]):n[a]=t[a]}return n},ClickOutsideManager:y,SystemLocale:s,UserLocale:i};window.ViewEnvHelper=k},73:(e,t,n)=>{var a=n(179),r=n.n(a),o=n(493),s=n.n(o);let i,c,l,u;!function(e){e.Initialization="initialization",e.Loading="loading",e.ForceLoading="forceLoading",e.Loaded="loaded"}(i||(i={})),function(e){e.Initialization="initialization",e.Loading="loading",e.Loaded="loaded",e.Failed="failed"}(c||(c={})),function(e){e.Initialization="initialization",e.Loaded="loaded",e.Failed="failed"}(l||(l={})),function(e){e.Initialization="initialization",e.BrowserLoading="browserLoading",e.PageLoading="pageLoading",e.ForceLoading="forceLoading",e.PageFailed="pageFailed",e.TextureFailed="textureFailed",e.Loaded="loaded"}(u||(u={}));i.Initialization,c.Initialization;const _=e=>e>0,d=e=>!_(e);function m(e,t){var n;if(d(e))return void console.warn("Invalid id, should be greater than zero",e);const a=0===t.scale?1e-5:null!=(n=t.scale)?n:1;return viewEnv.getWebBrowserTexturePath(e,Math.max(t.width,1),Math.max(t.height,1),a)}function b(e,t={}){return"measured"===e.type?Object.assign({},e.size,t):t}function v(){}function h(){return!1}var w=n(174);function g(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const E=e=>0===e?window:window.children.get(e);var p=n(946);const y=((e,t)=>{const n=(0,a.createContext)({});return[function({mode:o="real",options:s,children:i,mocks:c}){const l=(0,a.useRef)([]),u=(n,a,r)=>{const o=function({initializer:e=!0,rootId:t=0,getRoot:n=E,context:a="model"}={}){const r=new Map;function o(e,t=0){viewEnv.removeDataChangedCallback(e,t)?r.delete(e):console.error("Can't remove callback by id:",e)}engine.whenReady.then((()=>{engine.on("viewEnv.onDataChanged",((e,t,n)=>{n.forEach((t=>{const n=r.get(t);void 0!==n&&n(e)}))}))}));const s=e=>{const r=n(t),o=a.split(".").reduce(((e,t)=>e[t]),r);return"string"!=typeof e||0===e.length?o:e.split(".").reduce(((e,t)=>{const n=e[t];return"function"==typeof n?n.bind(e):n}),o)};return{subscribe:(n,o)=>{const i="string"==typeof o?`${a}.${o}`:a,c=viewEnv.addDataChangedCallback(i,t,!0);return r.set(c,n),e&&n(s(o)),c},readByPath:s,createCallback:(e,t)=>{const n=s(t);return(...t)=>{n(e(...t))}},createCallbackNoArgs:e=>{const t=s(e);return()=>{t()}},dispose:function(){for(var e,n=g(r.keys());!(e=n()).done;)o(e.value,t)},unsubscribe:o}}(a),s=e=>"mocks"===n?null==r?void 0:r.getter(e):o.readByPath(e),i=e=>l.current.push(e),c=e({mode:n,readByPath:s,externalModel:o,observableModel:{array:(e,t)=>{const a=null!=t?t:s(e),r=w.LO.box(a,{equals:h});return"real"===n&&o.subscribe((0,w.aD)((e=>r.set(e))),e),r},object:(e,t)=>{const a=null!=t?t:s(e),r=w.LO.box(a,{equals:h});return"real"===n&&o.subscribe((0,w.aD)((e=>r.set(e))),e),r},primitives:(e,t)=>{const a="mocks"===n?null!=(i=null==r?void 0:r.getter(t))?i:{}:s(t);var i;if(Array.isArray(e)){const r=e.reduce(((e,t)=>(e[t]=w.LO.box(a[t],{}),e)),{});return"real"===n&&o.subscribe((0,w.aD)((t=>{e.forEach((e=>{r[e].set(t[e])}))})),t),r}{const r=e,s=Object.entries(r),i=s.reduce(((e,[t,n])=>(e[n]=w.LO.box(a[t],{}),e)),{});return"real"===n&&o.subscribe((0,w.aD)((e=>{s.forEach((([t,n])=>{i[n].set(e[t])}))})),t),i}}},cleanup:i});return{model:c,controls:"mocks"===n&&r?r.controls({mode:n,model:c,cleanup:i}):t({mode:n,model:c,externalModel:o,cleanup:i}),externalModel:o,mode:n}},_=(0,a.useRef)(!1),d=(0,a.useState)(o),m=d[0],b=d[1],v=(0,a.useState)((()=>u(o,s,c))),f=v[0],p=v[1];return(0,a.useEffect)((()=>{_.current?p(u(m,s,c)):_.current=!0}),[c,m,s]),(0,a.useEffect)((()=>{b(o)}),[o]),(0,a.useEffect)((()=>()=>{f.externalModel.dispose(),l.current.forEach((e=>e()))}),[f]),r().createElement(n.Provider,{value:f},i)},()=>(0,a.useContext)(n)]})((({observableModel:e})=>{const t=e.object(),n=(0,p.Om)((()=>function({pageState:e,browserState:t,texState:n}){return t===i.Initialization?u.Initialization:t===i.ForceLoading?u.ForceLoading:t===i.Loading?u.BrowserLoading:e===c.Loaded&&t===i.Loaded&&n===l.Loaded?u.Loaded:n===l.Failed?u.TextureFailed:e===c.Failed?u.PageFailed:u.PageLoading}(t.get())));return{root:t,getState:n}}),(({externalModel:e})=>({blur:e.createCallbackNoArgs("unfocus"),focus:e.createCallbackNoArgs("focus"),createWebView:e.createCallbackNoArgs("createWebView")}))),k=y[0],C=y[1],O=e=>{(0,a.useEffect)(e,[])};var L=n(403),M=n(483),N=n.n(M);function T(){const e=(0,a.useRef)(0);var t;return t=()=>{window.cancelAnimationFrame(e.current)},(0,a.useEffect)((()=>t),[]),(0,a.useMemo)((()=>({run:t=>{window.cancelAnimationFrame(e.current),e.current=window.requestAnimationFrame((()=>{t(),e.current=0}))},clear:()=>{window.cancelAnimationFrame(e.current),e.current=0},get isRunning(){return 0!==e.current}})),[])}const S="BrowserView_base_6b",P="BrowserView_texture_17",A="Spinner_base_87",x="Spinner_caption_cf",F="Spinner_gear_c4",D="Spinner_logo_bf",B=({message:e,className:t,classNames:n})=>r().createElement("div",{className:N()(A,t)},e&&r().createElement("div",{className:N()(x,null==n?void 0:n.caption)},e),r().createElement("div",{className:N()(F,null==n?void 0:n.gear)}),r().createElement("div",{className:N()(D,null==n?void 0:n.logo)}));function I(e){engine.call("PlaySound",e)}const W={base:"CButton_base_40",base__main:"CButton_base__main_42",base__primary:"CButton_base__primary_7f",base__primaryGreen:"CButton_base__primaryGreen_6f",base__primaryRed:"CButton_base__primaryRed_ec",base__secondary:"CButton_base__secondary_50",base__ghost:"CButton_base__ghost_ed",base__extraSmall:"CButton_base__extraSmall_27",base__small:"CButton_base__small_df",base__medium:"CButton_base__medium_74",base__disabled:"CButton_base__disabled_d9",back:"CButton_back_e5",texture:"CButton_texture_fe",state:"CButton_state_11",base__focus:"CButton_base__focus_83",stateHighlightHover:"CButton_stateHighlightHover_ff",stateHighlightActive:"CButton_stateHighlightActive_35",stateDisabled:"CButton_stateDisabled_54",base__firstHover:"CButton_base__firstHover_d5",base__highlightActive:"CButton_base__highlightActive_b2",content:"CButton_content_cc"};let U,j;!function(e){e.main="main",e.primary="primary",e.primaryGreen="primaryGreen",e.primaryRed="primaryRed",e.secondary="secondary",e.ghost="ghost"}(U||(U={})),function(e){e.extraSmall="extraSmall",e.small="small",e.medium="medium"}(j||(j={}));const H=({children:e,size:t,isFocused:n,type:o,disabled:s,mixClass:i,soundHover:c,soundClick:l,onMouseEnter:u,onMouseMove:_,onMouseDown:d,onMouseUp:m,onMouseLeave:b,onClick:v})=>{const h=(0,a.useRef)(null),w=(0,a.useState)(n),g=w[0],f=w[1],E=(0,a.useState)(!1),p=E[0],y=E[1],k=(0,a.useState)(!1),C=k[0],O=k[1],L=(0,a.useCallback)((()=>{s||h.current&&(h.current.focus(),f(!0))}),[s]),M=(0,a.useCallback)((e=>{g&&null!==h.current&&!h.current.contains(e.target)&&f(!1)}),[g]),T=(0,a.useCallback)((e=>{s||v&&v(e)}),[s,v]),S=(0,a.useCallback)((e=>{s||(null!==c&&I(c),u&&u(e),O(!0))}),[s,c,u]),P=(0,a.useCallback)((e=>{_&&_(e)}),[_]),A=(0,a.useCallback)((e=>{s||(m&&m(e),y(!1))}),[s,m]),x=(0,a.useCallback)((e=>{s||(null!==l&&I(l),d&&d(e),n&&L(),y(!0))}),[s,l,d,L,n]),F=(0,a.useCallback)((e=>{s||(b&&b(e),y(!1))}),[s,b]),D=N()(W.base,W[`base__${o}`],{[W.base__disabled]:s,[W[`base__${t}`]]:t,[W.base__focus]:g,[W.base__highlightActive]:p,[W.base__firstHover]:C},i),B=N()(W.state,W.state__default);return(0,a.useEffect)((()=>(document.addEventListener("mousedown",M),()=>{document.removeEventListener("mousedown",M)})),[M]),(0,a.useEffect)((()=>{f(n)}),[n]),r().createElement("div",{ref:h,className:D,onMouseEnter:S,onMouseMove:P,onMouseUp:A,onMouseDown:x,onMouseLeave:F,onClick:T},o!==U.ghost&&r().createElement(r().Fragment,null,r().createElement("div",{className:W.back}),r().createElement("span",{className:W.texture})),r().createElement("span",{className:B},r().createElement("span",{className:W.stateDisabled}),r().createElement("span",{className:W.stateHighlightHover}),r().createElement("span",{className:W.stateHighlightActive})),r().createElement("span",{className:W.content,lang:R.strings.settings.LANGUAGE_CODE()},e))};H.defaultProps={type:U.primary,isFocused:!1,soundHover:"highlight",soundClick:"play"};const q=(0,a.memo)(H),K="Error_base_46",V="Error_alertIcon_04",z="Error_errorCaption_f2",G="Error_button_cd",Y=({errorBtnLabel:e,errorBtnClickHandler:t,errorMessage:n})=>r().createElement("div",{className:K},r().createElement("div",{className:V}),r().createElement("div",{className:z},n),r().createElement(q,{size:j.medium,mixClass:G,onClick:t},e));Y.defaultProps={errorBtnLabel:"",errorMessage:""};const Z="Waiting_base_c5",X="Waiting_blackOverlay_55",$=({message:e,isError:t,errorMessage:n,errorBtnLabel:o,errorBtnClickHandler:s,overlayAlpha:i})=>{const c=r().createRef();return(0,a.useEffect)((()=>{const e=c.current;e&&i&&(e.style.opacity=i)}),[c,i]),r().createElement("div",{className:Z},r().createElement("div",{className:X,ref:c}),t?r().createElement(Y,{errorBtnLabel:o,errorMessage:n,errorBtnClickHandler:s}):r().createElement(B,{message:e}))};$.defaultProps={isError:!1,message:"",overlayAlpha:"0.8",errorBtnLabel:R.strings.dialogs.disconnected.cancel(),errorMessage:""};const J="DisplayBrowserState_base_e7",Q="DisplayBrowserState_error_4e",ee="DisplayBrowserState_alertIcon_c4",te="DisplayBrowserState_errorCaption_dd",ne=({waitingText:e,className:t})=>r().createElement("div",{className:N()(J,t)},r().createElement($,{errorBtnClickHandler:v,message:e})),ae=()=>r().createElement("div",{className:Q},r().createElement("div",{className:ee}),r().createElement("div",{className:te},R.strings.dialogs.messenger.userInfoNotAvailable.title())),re=()=>r().createElement("div",{className:Q},r().createElement("div",{className:ee}),r().createElement("div",{className:te},R.strings.dialogs.inGameBrowser.textureLoadingFailed.title()),r().createElement("div",{className:te},R.strings.dialogs.inGameBrowser.textureLoadingFailed.message()));function oe(e){const t=(0,a.useRef)(e);return function(e){return e!==u.BrowserLoading&&e!==u.PageLoading}(e)&&(t.current=e),t.current}function se(e){const t=function(e){const t=(0,a.useRef)(!1);return e!==u.Loaded&&e!==u.PageFailed&&e!==u.TextureFailed||(t.current=!0),t.current}(e),n=oe(e);return t?n:e}const ie=({viewState:e,waitingText:t,waitingClassName:n})=>{switch(se(e)){case u.BrowserLoading:case u.PageLoading:case u.ForceLoading:return r().createElement(ne,{waitingText:t,className:n});case u.PageFailed:return r().createElement(ae,null);case u.TextureFailed:return r().createElement(re,null);default:return null}},ce=e=>"width"in e&&"height"in e&&"number"==typeof e.width&&"number"==typeof e.height;function le(e){return null!=e?e:viewEnv.getScale()}function ue(e){const t=(0,a.useState)(le(e.scale)),n=t[0],r=t[1],o=function(e){return ce(e)?m(e.id,e):void 0}(Object.assign({},e,{scale:n})),s=(0,a.useState)(o),i=s[0],c=s[1],l=(0,a.useRef)(!1),u="width"in e?e.width:0,_="height"in e?e.height:0,d=T();return(0,a.useEffect)((()=>{const t=()=>{r(le(e.scale))};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[e.scale]),(0,a.useEffect)((()=>{if(void 0===o||0===u||0===_||o===i)return;const e=()=>{c(o)};if(!1===l.current)return l.current=!0,void e();const t=new Image,n=()=>{d.run(e)};return t.addEventListener("load",n),t.src=o,()=>{t.removeEventListener("load",n),t.src=""}}),[o,i]),i}const _e=r().memo((function(e){const t=e.id,n=e.className,a=e.classNameTexture,o=e.waitingClassName,s=e.onMouseEnter,i=e.onMouseLeave,c=e.onMouseWheel,l=e.onMouseMove,u=e.onMouseDown,_=e.onMouseUp,d=e.renderStateDisplay,m=e.viewState,b=e.statusCode,v=e.waitingText,h=e.scrollSpeed,w=void 0===h?20:h,g=ue(e);return r().createElement("div",{className:N()(S,n),onMouseEnter:s,onMouseLeave:i},g&&r().createElement("div",{onWheel:c,onMouseMove:l,onMouseDown:u,onMouseUp:_,className:N()(S,P,a),"data-browser-id":t,"data-browser-scroll-speed":w,style:{backgroundImage:`url(${g})`}}),"function"==typeof d?d({viewState:m,statusCode:b,waitingText:v,waitingClassName:o}):r().createElement(ie,{viewState:m,statusCode:b,waitingText:v,waitingClassName:o}))})),de="none-ref",me="measured",be={type:"measuring"};function ve(){const e=(0,a.useRef)(null),t=(0,a.useState)(be),n=t[0],r=t[1],o=((e,t=[])=>{const n=(0,a.useRef)(),r=(0,a.useCallback)(((...t)=>{n.current&&n.current(),n.current=e(...t)}),t);return(0,a.useEffect)((()=>()=>{n.current&&n.current()}),[r]),r})((()=>(r(be),(e=>{let t,n=null;return n=requestAnimationFrame((()=>{n=requestAnimationFrame((()=>{n=null,t=e()}))})),()=>{"function"==typeof t&&t(),null!==n&&cancelAnimationFrame(n)}})((()=>{e.current?r({type:me,size:{width:e.current.offsetWidth,height:e.current.offsetHeight}}):r({type:de})})))),[]);return(0,a.useEffect)((()=>(window.addEventListener("resize",o),o(),()=>window.removeEventListener("resize",o))),[o]),[e,n,o]}function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},he.apply(this,arguments)}const we=r().memo((function(e){const t=ve(),n=t[0],a=t[1];return r().createElement("div",{ref:n,className:S},r().createElement(_e,he({},e,b(a))))}));function ge(){return ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ge.apply(this,arguments)}const fe=(0,L.Pi)((function(e){const t=e.defaultWaitingText,n=e.className,o=e.waitingClassName,s=e.isLazy,i=void 0===s||s,c=e.displayContentWhenLoading,l=void 0===c||c,m=e.renderStateDisplay,b=e.onMouseEnter,v=e.onMouseLeave,h=e.onMouseMove,w=e.onMouseWheel,g=e.onMouseDown,f=e.onMouseUp,E=C(),p=E.model,y=E.controls,k=p.root.get(),L=k.id,M=k.httpStatusCode,N=k.waitingMessage,T=p.getState(),S=l||T===u.Loaded;O((()=>{i&&d(L)&&y.createWebView()})),(0,a.useEffect)((()=>{_(L)&&y.focus()}),[L,y]),O((()=>(engine.on("wrapperMouseOver",y.focus),engine.on("wrapperMouseOut",y.blur),()=>{engine.off("wrapperMouseOver",y.focus),engine.off("wrapperMouseOut",y.blur)})));const P=(0,a.useMemo)((()=>{const e={onMouseEnter:b,onMouseLeave:v,onMouseMove:h,onMouseWheel:w,onMouseDown:g,onMouseUp:f};return S?Object.assign({},e,{onMouseEnter:e=>{y.focus(),null==b||b(e)},onMouseLeave:e=>{y.blur(),null==v||v(e)}}):e}),[S,y,g,b,v,h,f,w]);if(d(L))return null;const A=ce(e)?function(e,t){const n={};return t.forEach((t=>{n[t]=e[t]})),n}(e,["width","height"]):{},R=N.length>0?N:t;return e.isFullSize?r().createElement(we,ge({},P,{id:L,className:n,waitingClassName:o,statusCode:M,viewState:T,waitingText:R,renderStateDisplay:m})):r().createElement(_e,ge({},P,A,{id:L,className:n,waitingClassName:o,statusCode:M,viewState:T,waitingText:R,renderStateDisplay:m}))})),Ee=["options","mocks","mode"];const pe=(0,a.memo)((function(e){let t=e.options,n=e.mocks,a=e.mode,o=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,Ee);return r().createElement(k,{options:t,mocks:n,mode:a},r().createElement(fe,o))}));var ye=n(521),ke=n(364);const Ce=e=>{console.error(e+": useKeydownListener hook :: Callback is not defined")},Oe=(e=ye.n.ESCAPE,t=Ce,n=!1)=>{const r=(0,a.useCallback)((a=>{a.keyCode===e&&(t(a),n&&a.stopPropagation())}),[t,e,n]);(0,a.useEffect)((()=>(window.addEventListener("keydown",r,n),()=>{window.removeEventListener("keydown",r,n)})),[r,n])},Le=()=>((e=ye.n.ESCAPE)=>Oe(e,(()=>(0,ke.Sy)())))(ye.n.ESCAPE),Me="BrowserApp_base_de",Ne={getter:e=>({id:1,httpStatusCode:200,pageState:c.Failed,browserState:i.Loaded,autoWaitingDisplay:!0,title:"Mocks"}),controls:()=>({focus:v,blur:v,createWebView:v})};function Te(){return Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Te.apply(this,arguments)}const Se=()=>{const e=ve(),t=e[0],n=e[1];return Le(),r().createElement("div",{className:Me,ref:t},r().createElement(pe,Te({},b(n),{displayContentWhenLoading:!1,mocks:Ne})))};engine.whenReady.then((()=>{s().render(r().createElement(Se,null),document.getElementById("root"))}))}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,t,n,a)=>{if(!t){var r=1/0;for(c=0;c<deferred.length;c++){for(var[t,n,a]=deferred[c],o=!0,s=0;s<t.length;s++)(!1&a||r>=a)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](t[s])))?t.splice(s--,1):(o=!1,a<r&&(r=a));if(o){deferred.splice(c--,1);var i=n();void 0!==i&&(e=i)}}return e}a=a||0;for(var c=deferred.length;c>0&&deferred[c-1][2]>a;c--)deferred[c]=deferred[c-1];deferred[c]=[t,n,a]},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.j=590,(()=>{var e={590:0};__webpack_require__.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[o,s,i]=n,c=0;if(o.some((t=>0!==e[t]))){for(a in s)__webpack_require__.o(s,a)&&(__webpack_require__.m[a]=s[a]);if(i)var l=i(__webpack_require__)}for(t&&t(n);c<o.length;c++)r=o[c],__webpack_require__.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return __webpack_require__.O(l)},n=self.webpackChunkgameface=self.webpackChunkgameface||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var __webpack_exports__=__webpack_require__.O(void 0,[490],(()=>__webpack_require__(73)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();