import{fX as g,fY as j,fZ as G,de as z,d9 as d,bh as B,f_ as L,f$ as T,g0 as u,g1 as $,g2 as V,a4 as y,g3 as b}from"./index-u6TDeZ-R.js";import{$ as X,w as x,I as N,v as O,j as Z,y as k,P as q,l as J,d as C,c as I}from"./utils-CCGQdzXm.js";import{a as H,i as Q}from"./fetchService-Bs6Gn_76.js";const h="Feature Service",w="feature-layer-utils",W=`${w}-save`,aa=`${w}-save-as`,f=`${w}-saveall`,p=`${w}-saveall-as`;function v(a){return{isValid:V(a)&&(a.type!=="feature"||!a.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function M(a){const e=[],t=[];for(const{layer:r,layerJSON:o}of a)r.isTable?t.push(o):e.push(o);return{layers:e,tables:t}}function R(a){return M([a])}async function D(a,e){return/\/\d+\/?$/.test(a.url)?R(e[0]):F(e,a)}async function F(a,e){if(a.reverse(),!e)return M(a);const t=await ea(e,a);for(const r of a)U(r.layer,r.layerJSON,t);return na(t,a),t}async function ea(a,e){let t=await a.fetchData("json");if(ta(t))return t;t||(t={}),ra(t);const{layer:{url:r,customParameters:o,apiKey:s}}=e[0];return await sa(t,{url:r??"",customParameters:o,apiKey:s},e.map(n=>n.layer.layerId)),t}function ta(a){return!!(a&&Array.isArray(a.layers)&&Array.isArray(a.tables))}function ra(a){a.layers||(a.layers=[]),a.tables||(a.tables=[])}function na(a,e){const t=[],r=[];for(const{layer:o}of e){const{isTable:s,layerId:n}=o;s?r.push(n):t.push(n)}A(a.layers,t),A(a.tables,r)}function A(a,e){if(a.length<2)return;const t=[];for(const{id:r}of a)t.push(r);j(t.sort(P),e.slice().sort(P))&&a.sort((r,o)=>{const s=e.indexOf(r.id),n=e.indexOf(o.id);return s<n?-1:s>n?1:0})}function P(a,e){return a<e?-1:a>e?1:0}async function sa(a,e,t){const{url:r,customParameters:o,apiKey:s}=e,{serviceJSON:n,layersJSON:l}=await H(r,{customParameters:o,apiKey:s}),i=S(a.layers,n.layers,t),c=S(a.tables,n.tables,t);a.layers=i.itemResources,a.tables=c.itemResources;const m=[...i.added,...c.added],K=l?[...l.layers,...l.tables]:[];await oa(a,m,r,K)}function S(a,e,t){const r=G(a,e,(s,n)=>s.id===n.id);a=a.filter(s=>!r.removed.some(n=>n.id===s.id));const o=r.added;return o.forEach(({id:s})=>{a.push({id:s})}),{itemResources:a,added:o.filter(({id:s})=>!t.includes(s))}}async function oa(a,e,t,r){const o=await la(e),s=e.map(({id:n,type:l})=>new(o.get(l))({url:t,layerId:n,sourceJSON:r.find(({id:i})=>i===n)}));await Promise.allSettled(s.map(n=>n.load())),s.forEach(n=>{const{layerId:l,loaded:i,defaultPopupTemplate:c}=n;if(!i||c==null)return;const m={id:l,popupInfo:c.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(m.layerType=n.operationalLayerType),U(n,m,a)})}async function la(a){const e=[];a.forEach(({type:o})=>{const s=Q(o),n=z[s];e.push(n())});const t=await Promise.all(e),r=new Map;return a.forEach(({type:o},s)=>{r.set(o,t[s])}),r}function U(a,e,t){a.isTable?E(t.tables,e):E(t.layers,e)}function E(a,e){const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function Y(a,e){if(!a.length)throw new y(`${e}:missing-parameters`,"'layers' array should contain at least one feature layer")}function ia(a,e){const t=a.map(r=>r.portalItem.id);if(new Set(t).size>1)throw new y(`${e}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function _(a,e){const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new y(`${e}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function ca(a){Y(a,f),await Promise.all(a.map(e=>e.load()));for(const e of a)J(e,f,v),C({layer:e,itemType:h,errorNamePrefix:f});ia(a,f),_(a,f)}async function ua(a,e){const{url:t,layerId:r,title:o,fullExtent:s,isTable:n}=a,l=d(t);e.url=((l==null?void 0:l.serverType)==="FeatureServer"?t:`${t}/${r}`)??null,e.title||(e.title=o),e.extent=null,n||s==null||(e.extent=await L(s)),T(e,u.METADATA),T(e,u.MULTI_LAYER),b(e,u.SINGLE_LAYER),n&&b(e,u.TABLE)}function ya(a,e){for(const s of a){const n=s.parsedUrl.path,l=d(n);if(!(l==null?void 0:l.url.path))throw new y(`${e}:invalid-parameters`,I(s,`has unsupported url pattern: ${n}`),{layer:s});const c=l==null?void 0:l.serverType;if(c!=="FeatureServer"&&c!=="MapServer")throw new y(`${e}:invalid-parameters`,I(s,`has unsupported server type: ${c}`),{layer:s});if(c==="MapServer"&&a.length>1)throw new y(`${e}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const t=d(a[0].parsedUrl.path),r=t==null?void 0:t.url.path;if(!a.every(s=>{const n=d(s.parsedUrl.path);return(n==null?void 0:n.url.path)===r}))throw new y(`${e}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function fa(a){Y(a,p),await Promise.all(a.map(e=>e.load()));for(const e of a)J(e,p,v);ya(a,p),_(a,p)}async function pa(a,e){let t=0,r=0;for(const{isTable:n}of e)n?r++:t++;const o=e[0].parsedUrl.path,s=d(o);if(a.url=(s==null?void 0:s.serverType)==="FeatureServer"?s.url.path:o,a.title||(a.title=s.title),a.extent=null,t>0){const n=e.map(l=>l.fullExtent).filter(B).reduce((l,i)=>l.clone().union(i));n&&(a.extent=await L(n))}T(a,u.METADATA),$(a,u.MULTI_LAYER,e.length>1),$(a,u.SINGLE_LAYER,e.length===1),$(a,u.TABLE,r>0&&t===0),O(a)}async function wa(a,e){return X({layer:a,itemType:h,validateLayer:v,createItemData:(t,r)=>D(r,[t]),errorNamePrefix:W},e)}async function va(a,e){await ca(a);const t=a[0].portalItem,r=x(t),o=await Promise.all(a.map(n=>N(n,r,e))),s=await D(t,a.map((n,l)=>({layer:n,layerJSON:o[l]})));return O(t),await t.update({data:s}),await Promise.all(a.slice(1).map(n=>n.portalItem.reload())),g(r),t.clone()}async function $a(a,e,t){return Z({layer:a,itemType:h,validateLayer:v,createItemData:(r,o)=>Promise.resolve(R(r)),errorNamePrefix:aa,newItem:e,setItemProperties:ua},t)}async function Ta(a,e,t){await fa(a);const r=k({itemType:h,errorNamePrefix:p,newItem:e}),o=x(r),s=await Promise.all(a.map(l=>N(l,o,t))),n=await F(a.map((l,i)=>({layer:l,layerJSON:s[i]})));await pa(r,a),await q(r,n,t);for(const l of a)l.portalItem=r.clone();return g(o),r}export{wa as save,va as saveAll,Ta as saveAllAs,$a as saveAs};