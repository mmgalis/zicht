import{e as r,S as P,f as x,g as S,k as d,w as L,l as O,m as j,n as k,V as A,z as $,q as T,y as g,a as E,r as z}from"./index-BSpFFQw2.js";const J=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let n=class extends P{constructor(s){super(s),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=J.map(s=>new x({color:[s[0],s[1],s[2],.6],outline:{color:"black",width:1}})),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(s){this._enabled!==s&&(this._enabled=s,this.update())}update(){if(!this._enabled)return void this.clear();const s=e=>{if(e.label!=null)return e.label;let l=e.lij.toString();return e.loadPriority!=null&&(l+=` (${e.loadPriority})`),l},h=this.getTiles(),y=new Array,p=new Set((this._labels.size,this._labels.keys()));h.forEach((e,l)=>{const t=e.lij.toString();p.delete(t);const M=e.lij[0],w=e.geometry;if(this.enablePolygons&&!this._polygons.has(t)){const i=new S({geometry:w,symbol:this._symbols[M%this._symbols.length]});this._polygons.set(t,i),y.push(i)}if(this.enableLabels){const i=s(e),u=l/(h.length-1),b=z(0,200,u),_=z(20,6,u)/.75,m=e.loadPriority!=null&&e.loadPriority>=h.length,f=new d([b,m?0:b,m?0:b]),v=this.view.type==="3d"?()=>new L({verticalOffset:new O({screenLength:40/.75}),callout:new j({color:new d("white"),border:new k({color:new d("black")})}),symbolLayers:new A([new $({text:i,halo:{color:"white",size:1/.75},material:{color:f},size:_})])}):()=>new T({text:i,haloColor:"white",haloSize:1/.75,color:f,size:_}),a=this._labels.get(t);if(a){const o=v();a.symbol!=null&&JSON.stringify(o)===JSON.stringify(a.symbol)||(a.symbol=o)}else{const o=new S({geometry:w.extent.center,symbol:v()});this._labels.set(t,o),y.push(o)}}});const c=new Array;p.forEach(e=>{const l=this._polygons.get(e);l!=null&&(c.push(l),this._polygons.delete(e));const t=this._labels.get(e);t!=null&&(c.push(t),this._labels.delete(e))}),this.view.graphics.removeMany(c),this.view.graphics.addMany(y)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};r([g({constructOnly:!0})],n.prototype,"view",void 0),r([g({readOnly:!0})],n.prototype,"updating",void 0),r([g()],n.prototype,"enabled",null),n=r([E("esri.views.support.TileTreeDebugger")],n);export{n as d};