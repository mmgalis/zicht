import{aT as $,hr as O,hs as P,an as D,ht as q,hu as E,hv as G,hw as A,hx as B,hy as H,bX as J,b8 as N}from"./index-BqUMRVrI.js";async function U(t,d,l,p,o){const{elevationProvider:f,renderCoordsHelper:i}=t,{elevationInfo:u}=d,{pointsInFeatures:m,spatialReference:h}=p,g=$.fromJSON(h),y=O(u,!0),I=await P(y,g,o);D(o);const c=[],e=new Set,s=new Set,a=new B,n=q(0,0,0,$.WGS84),r=new H,R=J();n.spatialReference=g;const j=t.elevationProvider.spatialReference??t.spatialReference;for(const{objectId:w,points:S}of m){const b=l(w);if(b==null){for(const v of S)c.push(v.z??0);e.add(w);continue}b.isDraped&&s.add(w);const z=b.graphic.geometry;a.setFromElevationInfo(E(z,u)),a.updateFeatureExpressionInfoContext(I,b.graphic,d);for(const{x:v,y:C,z:F}of S)n.x=v,n.y=C,n.z=F??0,await G(n,R,j,0,{signal:o}),A(R,f,a,i,r),c.push(r.z)}return{elevations:c,drapedObjectIds:s,failedObjectIds:e}}async function W(t,d,l){if(t==null||d.candidates.length===0)return x;const p=t.graphics3DGraphicsByObjectID??t.graphics3DGraphics,o=[],f=[],{renderer:i}=t,u=i!=null&&"arcadeRequired"in i&&i.arcadeRequired?N():null,m=async(e,{graphic:s,graphics3DSymbol:a})=>{const n=await u,r=await t.getRenderingInfoAsync(s,i,n,{signal:l});return r==null?[]:a.queryForSnapping(e,g,r,l)},{candidates:h,spatialReference:g}=d;for(let e=0;e<h.length;++e){const s=h[e],{objectId:a}=s,n=typeof a=="number"?p==null?void 0:p.get(a):void 0;if(n==null)continue;const{graphics3DSymbol:r}=n;r.symbologySnappingSupported&&(o.push(m(s,n)),f.push(e))}if(o.length===0)return x;const y=await Promise.all(o);D(l);const I=[],c=[];for(let e=0;e<y.length;++e){const s=y[e],a=f[e];for(const n of s)I.push(n),c.push(a)}return{candidates:I,sourceCandidateIndices:c}}const x={candidates:[],sourceCandidateIndices:[]};export{U as m,W as r};