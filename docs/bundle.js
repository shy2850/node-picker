!function(){"use strict";var e={},t=[],n=[];function o(o,r){var i,a,l,s,c=n;for(s=arguments.length;s-- >2;)t.push(arguments[s]);for(r&&null!=r.children&&(t.length||t.push(r.children),delete r.children);t.length;)if((a=t.pop())&&void 0!==a.pop)for(s=a.length;s--;)t.push(a[s]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof o)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&i?c[c.length-1]+=a:c===n?c=[a]:c.push(a),i=l;var p=new function(){};return p.nodeName=o,p.children=c,p.attributes=null==r?void 0:r,p.key=null==r?void 0:r.key,void 0!==e.vnode&&e.vnode(p),p}function r(e,t){for(var n in t)e[n]=t[n];return e}var i="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,a=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,l=[];function s(t){!t._dirty&&(t._dirty=!0)&&1==l.push(t)&&(e.debounceRendering||i)(c)}function c(){var e,t=l;for(l=[];e=t.pop();)e._dirty&&P(e)}function p(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function d(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===a.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,h,l):e.removeEventListener(t,h,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var s=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function h(t){return this._listeners[t.type](e.event&&e.event(t)||t)}var v=[],m=0,_=!1,y=!1;function g(){for(var t;t=v.pop();)e.afterMount&&e.afterMount(t),t.componentDidMount&&t.componentDidMount()}function b(e,t,n,o,r,i){m++||(_=null!=r&&void 0!==r.ownerSVGElement,y=null!=e&&!("__preactattr_"in e));var a=C(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--m||(y=!1,i||g()),a}function C(e,t,n,o,r){var i=e,a=_;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),N(e,!0))),i.__preactattr_=!0,i;var l,s,c=t.nodeName;if("function"==typeof c)return function(e,t,n,o){var r=e&&e._component,i=r,a=e,l=r&&e._componentConstructor===t.nodeName,s=l,c=d(t);for(;r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;r&&s&&(!o||r._component)?(L(r,c,3,n,o),e=r.base):(i&&!l&&(U(i),e=a=null),r=w(t.nodeName,c,n),e&&!r.nextBase&&(r.nextBase=e,a=null),L(r,c,1,n,o),e=r.base,a&&e!==a&&(a._component=null,N(a,!1)));return e}(e,t,n,o);if(_="svg"===c||"foreignObject"!==c&&_,c=String(c),(!e||!p(e,c))&&(l=c,(s=_?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,i=s,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),N(e,!0)}var h=i.firstChild,v=i.__preactattr_,m=t.children;if(null==v){v=i.__preactattr_={};for(var g=i.attributes,b=g.length;b--;)v[g[b].name]=g[b].value}return!y&&m&&1===m.length&&"string"==typeof m[0]&&null!=h&&void 0!==h.splitText&&null==h.nextSibling?h.nodeValue!=m[0]&&(h.nodeValue=m[0]):(m&&m.length||null!=h)&&function(e,t,n,o,r){var i,a,l,s,c,d=e.childNodes,f=[],h={},v=0,m=0,_=d.length,y=0,g=t?t.length:0;if(0!==_)for(var b=0;b<_;b++){var x=d[b],k=x.__preactattr_,w=g&&k?x._component?x._component.__key:k.key:null;null!=w?(v++,h[w]=x):(k||(void 0!==x.splitText?!r||x.nodeValue.trim():r))&&(f[y++]=x)}if(0!==g)for(var b=0;b<g;b++){s=t[b],c=null;var w=s.key;if(null!=w)v&&void 0!==h[w]&&(c=h[w],h[w]=void 0,v--);else if(!c&&m<y)for(i=m;i<y;i++)if(void 0!==f[i]&&(S=a=f[i],P=r,"string"==typeof(L=s)||"number"==typeof L?void 0!==S.splitText:"string"==typeof L.nodeName?!S._componentConstructor&&p(S,L.nodeName):P||S._componentConstructor===L.nodeName)){c=a,f[i]=void 0,i===y-1&&y--,i===m&&m++;break}c=C(c,s,n,o),l=d[b],c&&c!==e&&c!==l&&(null==l?e.appendChild(c):c===l.nextSibling?u(l):e.insertBefore(c,l))}var S,L,P;if(v)for(var b in h)void 0!==h[b]&&N(h[b],!1);for(;m<=y;)void 0!==(c=f[y--])&&N(c,!1)}(i,m,n,o,y||null!=v.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||f(e,o,n[o],n[o]=void 0,_);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||f(e,o,n[o],n[o]=t[o],_)}(i,t.attributes,v),_=a,i}function N(e,t){var n=e._component;n?U(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||u(e),x(e))}function x(e){for(e=e.lastChild;e;){var t=e.previousSibling;N(e,!0),e=t}}var k={};function w(e,t,n){var o,r=k[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),B.call(o,t,n)):((o=new B(t,n)).constructor=e,o.render=S),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function S(e,t,n){return this.constructor(e,n)}function L(t,n,o,r,i){t._disable||(t._disable=!0,(t.__ref=n.ref)&&delete n.ref,(t.__key=n.key)&&delete n.key,!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=n,t._disable=!1,0!==o&&(1!==o&&!1===e.syncComponentUpdates&&t.base?s(t):P(t,1,i)),t.__ref&&t.__ref(t))}function P(t,n,o,i){if(!t._disable){var a,l,s,c=t.props,p=t.state,u=t.context,f=t.prevProps||c,h=t.prevState||p,_=t.prevContext||u,y=t.base,C=t.nextBase,x=y||C,k=t._component,S=!1;if(y&&(t.props=f,t.state=h,t.context=_,2!==n&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,p,u)?S=!0:t.componentWillUpdate&&t.componentWillUpdate(c,p,u),t.props=c,t.state=p,t.context=u),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!S){a=t.render(c,p,u),t.getChildContext&&(u=r(r({},u),t.getChildContext()));var B,T,M=a&&a.nodeName;if("function"==typeof M){var W=d(a);(l=k)&&l.constructor===M&&W.key==l.__key?L(l,W,1,u,!1):(B=l,t._component=l=w(M,W,u),l.nextBase=l.nextBase||C,l._parentComponent=t,L(l,W,0,u,!1),P(l,1,o,!0)),T=l.base}else s=x,(B=k)&&(s=t._component=null),(x||1===n)&&(s&&(s._component=null),T=b(s,a,u,o||!y,x&&x.parentNode,!0));if(x&&T!==x&&l!==k){var A=x.parentNode;A&&T!==A&&(A.replaceChild(T,x),B||(x._component=null,N(x,!1)))}if(B&&U(B),t.base=T,T&&!i){for(var E=t,I=t;I=I._parentComponent;)(E=I).base=T;T._component=E,T._componentConstructor=E.constructor}}if(!y||o?v.unshift(t):S||(t.componentDidUpdate&&t.componentDidUpdate(f,h,_),e.afterUpdate&&e.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);m||i||g()}}function U(t){e.beforeUnmount&&e.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;o?U(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),t.nextBase=n,u(n),function(e){var t=e.constructor.name;(k[t]||(k[t]=[])).push(e)}(t),x(n)),t.__ref&&t.__ref(null)}function B(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}r(B.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r({},n)),r(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),P(this,2)},render:function(){}});class T extends B{constructor(e){super(e),this.isLastParent=(e=>!e||!e.children||!e.children[0].children),this.init=((e=[])=>{const{isLastParent:t}=this,{tree:n=[]}=this.props;let o={id:-1,name:"__root__",children:n},r=0;for(;r<e.length;r++)o=o.children.find(({id:t})=>t===e[r]);for(;!t(o);)o=o.children.find(({id:t})=>t===e[r])||o.children[0],e.push(o.id),r++;this.setState({paths:e})}),this.changeParent=((e,t)=>{let{paths:n=[]}=this.state;this.init(n.slice(0,t).concat(0|e.value))}),this.toggleActive=(()=>{const{active:e}=this.state;this.setState({active:!e})}),this.onChange=(e=>{const{onChange:t}=this.props;t&&t(e),this.setState({node:e,active:!1})}),this.changeKeywords=(e=>{this.setState({keywords:e.target.value})}),e.isLastParent&&(this.isLastParent=e.isLastParent),this.state={active:!1},this.init()}componentWillReceiveProps(e){this.props=e,this.init()}render(){const{name:e,className:t="",title:n,placeholder:r,tree:i=[]}=this.props,{paths:a,node:l,active:s,keywords:c=""}=this.state,{changeParent:p,onChange:d,toggleActive:u,changeKeywords:f}=this;let h=i;return o("span",null,o("input",{type:"text",className:t,readOnly:!0,name:e,title:n,placeholder:r,value:l&&l.name,onClick:u}),o("div",{className:`node-selector ${s?"is-active":""}`},o("div",{className:"selector-inner"},o("div",{className:"buttons-panel"},a.map((e,t)=>o("select",{key:`${t}`,className:"inline-block",onChange:e=>p(e.target,t)},h.map(t=>{const n=t.id===e;return n&&(h=t.children),o("option",{value:t.id,selected:n},t.name)}))),o("input",{type:"text",className:"inline-block",placeholder:"quick search",onInput:f})),o("div",{className:"item-panel"},h.map(e=>e.name.indexOf(c)>-1&&o("a",{href:"javascript:;",onClick:()=>d(e)},e.name))),o("a",{href:"javascript:;",className:"button-close",onClick:u},"×"))))}}allUnivList.map(e=>(e.id=0|e.id,e.children=e.provs?e.provs.map(e=>(e.children=e.univs,e)):e.univs,e));const M=function e(t){return Object.keys(t).map(n=>{const[o,r]=n.split("_");return r?{id:parseInt(r,10)+1,name:o,children:e(t[n])}:{id:parseInt(t[n],10)+1,name:n}})}(Area["亚洲_1"]["中国_156"]);console.log(M),console.log(allUnivList);const W=document.getElementById("app");var A,E;A=o("div",null,o(T,{name:"node-area",placeholder:"点击选择地区",tree:M}),o(T,{name:"node-school",placeholder:"点击选择学校",tree:allUnivList})),b(E,A,{},!1,W,!1)}();
//# sourceMappingURL=bundle.js.map