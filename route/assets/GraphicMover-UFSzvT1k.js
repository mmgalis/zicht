import{e as l,y as p,a as E,S as H,kq as O,kr as M,ks as G,aA as P,ev as D,i2 as $,B as w,bn as A,kt as _,a3 as U,dE as u,dC as T,f as S,ku as y}from"./index-A4fbUCXm.js";import{i as b}from"./drawUtils-Dm8PhJld.js";import{S as L}from"./GraphicManipulator-CIGmHwi5.js";let f=class extends H{constructor(i){super(i),this.view=null}add(i){const e=!i||Array.isArray(i)?i:[i];e!=null&&e.length&&e.forEach(s=>this._highlight(s))}remove(i){const e=!i||Array.isArray(i)?i:[i];e!=null&&e.length&&e.forEach(s=>this._removeHighlight(s))}removeAll(){this.removeAllHandles()}_highlight(i){const e=O(this.view,i.layer);M(e)&&this.addHandles(e.highlight(i),G(i))}_removeHighlight(i){i&&this.removeHandles(G(i))}};l([p()],f.prototype,"view",void 0),f=l([E("esri.views.draw.support.HighlightHelper")],f);const V=f;class I{constructor(i,e,s,h,r){this.graphic=i,this.index=e,this.x=s,this.y=h,this.viewEvent=r,this.type="graphic-click"}}class C{constructor(i,e,s,h,r){this.graphic=i,this.index=e,this.x=s,this.y=h,this.viewEvent=r,this.type="graphic-double-click"}}class z{constructor(i,e,s,h,r,a,o,d,v,g){this.graphic=i,this.allGraphics=e,this.index=s,this.x=h,this.y=r,this.dx=a,this.dy=o,this.totalDx=d,this.totalDy=v,this.viewEvent=g,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class j{constructor(i,e,s,h,r,a,o,d,v,g){this.graphic=i,this.allGraphics=e,this.index=s,this.x=h,this.y=r,this.dx=a,this.dy=o,this.totalDx=d,this.totalDy=v,this.viewEvent=g,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class q{constructor(i,e,s,h,r,a,o,d,v,g){this.graphic=i,this.allGraphics=e,this.index=s,this.x=h,this.y=r,this.dx=a,this.dy=o,this.totalDx=d,this.totalDy=v,this.viewEvent=g,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class N{constructor(i,e,s,h,r){this.graphic=i,this.index=e,this.x=s,this.y=h,this.viewEvent=r,this.type="graphic-pointer-over"}}class x{constructor(i,e,s,h,r){this.graphic=i,this.index=e,this.x=s,this.y=h,this.viewEvent=r,this.type="graphic-pointer-out"}}class B{constructor(i,e,s,h,r){this.graphic=i,this.index=e,this.x=s,this.y=h,this.viewEvent=r,this.type="graphic-pointer-down"}}class X{constructor(i,e,s,h,r){this.graphic=i,this.index=e,this.x=s,this.y=h,this.viewEvent=r,this.type="graphic-pointer-up"}}const k="indicator-symbols";let n=class extends P.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._dragEvent=null,this._hoverGraphic=null,this._indicators=[],this._initialDragGeometry=null,this._manipulators=[],this._layerViews=null,this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!1,this.layer=new D({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){$(this.view,this.layer),this._highlightHelper=new V({view:this.view}),this.refresh(),this.addHandles([w(()=>this.graphics.length,()=>this.refresh()),A(()=>{var t;return(t=this.view)==null?void 0:t.ready},()=>{this.addHandles([this.view.on("immediate-click",t=>this._clickHandler(t),y.TOOL),this.view.on("double-click",t=>this._doubleClickHandler(t),y.TOOL),this.view.on("pointer-down",t=>this._pointerDownHandler(t),y.TOOL),this.view.on("pointer-move",t=>this._pointerMoveHandler(t),y.TOOL),this.view.on("pointer-up",t=>this._pointerUpHandler(t),y.TOOL),this.view.on("drag",t=>this._dragHandler(t),y.TOOL),this.view.on("key-down",t=>this._keyDownHandler(t),y.TOOL)])},{once:!0,initial:!0}),w(()=>this.view,t=>{this._highlightHelper.removeAll(),this._highlightHelper.view=t})])}destroy(){var t;this._removeIndicators(),(t=this.view.map)==null||t.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach(i=>i.destroy()),this._manipulators=null}set highlightsEnabled(t){var i,e;(i=this._highlightHelper)==null||i.removeAll(),this._set("highlightsEnabled",t),t&&((e=this._highlightHelper)==null||e.add(this.graphics))}get state(){const t=this.view.ready,i=this.graphics.length>0,e=this._activeGraphic;return t&&i?e?"moving":"active":t?"ready":"disabled"}refresh(){this.reset(),this._setup()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null,this._highlightHelper.removeAll()}updateGeometry(t,i){const e=this.graphics[t];e&&(e.set("geometry",i),this._setUpIndicators())}_setup(){this._setUpHighlights(),this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}_clickHandler(t){const i=this._findTargetGraphic(_(t));if(i){const e=new I(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e)}}_doubleClickHandler(t){const i=this._findTargetGraphic(_(t));if(i){const e=new C(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-double-click",e),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(e)}}_pointerDownHandler(t){const i=this._findTargetGraphic(_(t));if(i){this._activeGraphic=i;const{x:e,y:s}=t,h=new B(i,this.graphics.indexOf(i),e,s,t);this.emit("graphic-pointer-down",h),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(h)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:i,y:e}=t,s=this.graphics.indexOf(this._activeGraphic),h=new X(this._activeGraphic,s,i,e,t);this.emit("graphic-pointer-up",h),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(h)}}_pointerMoveHandler(t){if(this._dragEvent)return;const i=this._findTargetGraphic(_(t));if(i){const{x:e,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===i)return;const a=this.graphics.indexOf(this._hoverGraphic),o=new x(this.graphics[a],a,e,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",o),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(o)}const h=this.graphics.indexOf(i),r=new N(i,h,e,s,t);return this._hoverGraphic=i,this.emit("graphic-pointer-over",r),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(r))}if(this._hoverGraphic){const{x:e,y:s}=t,h=this.graphics.indexOf(this._hoverGraphic),r=new x(this.graphics[h],h,e,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}}_dragHandler(t){var m;if(t.action!=="start"&&!this._dragEvent||!((m=this._activeGraphic)!=null&&m.geometry))return;t.action==="start"&&this._removeIndicators(),t.stopPropagation();const{action:i,x:e,y:s}=t,h=this.graphics.indexOf(this._activeGraphic),r=this._dragEvent?e-this._dragEvent.x:0,a=this._dragEvent?s-this._dragEvent.y:0,o=e-t.origin.x,d=s-t.origin.y,v=i==="start"?this._activeGraphic.geometry:this._initialDragGeometry,g=b(v,o,d,this.view);if(this._activeGraphic.geometry=g,this.enableMoveAllGraphics&&this.graphics.forEach(c=>{c!==this._activeGraphic&&(c.geometry=b(c.geometry,r,a,this.view))}),this._dragEvent=t,i==="start"){this._initialDragGeometry=U(v);const c=new z(this._activeGraphic,this.graphics,h,e,s,r,a,o,d,t);this.emit("graphic-move-start",c),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(c),c.defaultPrevented&&this._activeGraphic.set("geometry",v)}else if(i==="update"){const c=new j(this._activeGraphic,this.graphics,h,e,s,r,a,o,d,t);this.emit("graphic-move",c),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(c),c.defaultPrevented&&(this._activeGraphic.geometry=v)}else{const c=new q(this._activeGraphic,this.graphics,h,e,s,r,a,o,d,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",c),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(c),c.defaultPrevented&&(this.graphics[h].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){t.key!=="a"&&t.key!=="d"&&t.key!=="n"||this.state!=="moving"||t.stopPropagation()}_findTargetGraphic(t){const i=this.view.toMap(t),e=this.graphics;let s=null,h=Number.MAX_VALUE;this._syncLayerViews();const r=this._layerViews.flatMap(a=>"graphicsViews"in a?Array.from(a.graphicsViews(),o=>o.hitTest(i)).flat():a.graphicsView.hitTest(i)).filter(a=>e.includes(a)).sort((a,o)=>e.indexOf(a)-e.indexOf(o));return r.length?r[0]:(this._manipulators.forEach(a=>{const o=a.intersectionDistance(t);o!=null&&o<h&&(h=o,s=a.graphic)}),s)}_syncLayerViews(){this._layerViews=[];const t=new Set;for(const i of this.graphics){const e=O(this.view,i.layer);e&&t.add(e)}this._layerViews=[...t]}_setUpManipulators(){const{graphics:t,view:i}=this;this._manipulators.forEach(e=>e.destroy()),this._manipulators=t.length?t.map(e=>new L({graphic:e,view:i})):[]}_setUpHighlights(){this.highlightsEnabled&&this._highlightHelper.add(this.graphics)}_setUpIndicators(){if(this._removeIndicators(),this.indicatorsEnabled){for(const t of this.graphics){const i=t.clone();i.symbol=F(t),this._indicators.push(i),this.addHandles(w(()=>t.symbol,()=>this._setUpIndicators()),k)}this.layer.addMany(this._indicators)}}_removeIndicators(){this.removeHandles(k),this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach(t=>t.destroy()),this._indicators=[])}};function F(t){if(t.symbol==null)return null;switch(t.symbol.type){case"cim":return new u({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:e,yoffset:s,height:h,width:r}=t.symbol,a=h===r?r:Math.max(h,r);return new u({xoffset:e,yoffset:s,size:a,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:e,yoffset:s,size:h,style:r}=t.symbol;return new u({xoffset:e,yoffset:s,style:r==="circle"?"circle":"square",size:h+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new S({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new T({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:e,yoffset:s}=t.symbol;return new u({xoffset:e,yoffset:s,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}l([p()],n.prototype,"_activeGraphic",void 0),l([p({readOnly:!0})],n.prototype,"type",void 0),l([p()],n.prototype,"callbacks",void 0),l([p()],n.prototype,"enableMoveAllGraphics",void 0),l([p()],n.prototype,"graphics",void 0),l([p({value:!1})],n.prototype,"highlightsEnabled",null),l([p()],n.prototype,"indicatorsEnabled",void 0),l([p()],n.prototype,"layer",void 0),l([p({readOnly:!0})],n.prototype,"state",null),l([p()],n.prototype,"view",void 0),n=l([E("esri.views.draw.support.GraphicMover")],n);const J=n,Y=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{Y as G,J as U,V as h};