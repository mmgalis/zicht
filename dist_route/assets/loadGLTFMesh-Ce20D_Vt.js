import{mK as L,mL as P,mM as U,mN as v,fo as z,a4 as D,gp as G,dv as N,aZ as _,mO as V,mP as k,k as B,mQ as K,mR as Q,mS as Z,mT as q,mU as W,mV as X,jV as M,mW as Y,mX as H,m4 as J,mY as ee,mZ as te,m_ as h,m$ as ne,n0 as re,mg as O,n1 as R,mh as j,n2 as oe,mi as se,mk as S,mj as F,n3 as C,n4 as ae,ml as le,g$ as w,aR as ue,dU as ce,n5 as ie,mm as fe,n6 as me,d7 as pe,hI as E,n7 as de}from"./index-BSpFFQw2.js";function ge(e,t,n){const c=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,u=n?n.count:t.count;let s=((n==null?void 0:n.dstIndex)??0)*o,m=((n==null?void 0:n.srcIndex)??0)*i;for(let l=0;l<u;++l){for(let r=0;r<9;++r)c[s+r]=a[m+r];s+=o,m+=i}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function xe(e,t,n){const c=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,u=n?n.count:t.count;let s=((n==null?void 0:n.dstIndex)??0)*o,m=((n==null?void 0:n.srcIndex)??0)*i;for(let l=0;l<u;++l){for(let r=0;r<16;++r)c[s+r]=a[m+r];s+=o,m+=i}}Object.freeze(Object.defineProperty({__proto__:null,copy:xe},Symbol.toStringTag,{value:"Module"}));function $(e,t){return new e(new ArrayBuffer(t*e.ElementCount*L(e.ElementType)))}async function Ee(e,t,n){const c=new P($e(n)),o=(await U(c,t,n,!0)).model,a=o.lods.shift(),i=new Map,u=new Map;o.textures.forEach((x,y)=>i.set(y,he(x))),o.materials.forEach((x,y)=>u.set(y,we(x,i)));const s=ye(a);for(const x of s.parts)be(s,x,u);const{position:m,normal:l,tangent:r,color:f,texCoord0:p}=s.vertexAttributes,g=v(e,n),I=e.spatialReference.isGeographic?v(e):g,b=z({vertexAttributes:{position:m.typedBuffer,normal:l==null?void 0:l.typedBuffer,tangent:r==null?void 0:r.typedBuffer},vertexSpace:I,spatialReference:e.spatialReference},g,{allowBufferReuse:!0,sourceUnit:"meters"});if(!b)throw new D("loadGLTFMesh()","Failed to load mesh from glTF due to projection errors");return{transform:null,vertexSpace:g,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new G({...b,color:f==null?void 0:f.typedBuffer,uv:p==null?void 0:p.typedBuffer})}}function $e(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(n,c,o)=>{const a=(t==null?void 0:t(n))??n;return(await N(a,{responseType:c==="image"?"image":c==="binary"||c==="image+type"?"array-buffer":"json",signal:o==null?void 0:o.signal,timeout:0})).data}}:null}function T(e,t){if(e==null)return"-";const n=e.typedBuffer;return`${_(t,n.buffer,()=>t.size)}/${n.byteOffset}/${n.byteLength}`}function Te(e){return e!=null?e.toString():"-"}function ye(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},c=new Map,o=new Map,a=[];for(const i of e.parts){const{attributes:{position:u,normal:s,color:m,tangent:l,texCoord0:r}}=i,f=`
      ${T(u,c)}/
      ${T(s,c)}/
      ${T(m,c)}/
      ${T(l,c)}/
      ${T(r,c)}/
      ${Te(i.transform)}
    `;let p=!1;const g=_(o,f,()=>(p=!0,{start:t,length:u.count}));p&&(t+=u.count),s&&(n.normal=!0),m&&(n.color=!0),l&&(n.tangent=!0),r&&(n.texCoord0=!0),a.push({gltf:i,writeVertices:p,region:g})}return{vertexAttributes:{position:$(ie,t),normal:n.normal?$(F,t):null,tangent:n.tangent?$(O,t):null,color:n.color?$(j,t):null,texCoord0:n.texCoord0?$(fe,t):null},parts:a,components:[]}}function he(e){return new V({data:(k(e.data),e.data),wrap:Me(e.parameters.wrap)})}function we(e,t){const n=new B(Re(e.color,e.opacity)),c=e.emissiveFactor?new B(Se(e.emissiveFactor)):null,o=a=>a?new me({scale:a.scale?[a.scale[0],a.scale[1]]:[1,1],rotation:pe(a.rotation??0),offset:a.offset?[a.offset[0],a.offset[1]]:[0,0]}):null;return new K({color:n,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:c,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:Be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:o(e.colorTextureTransform),normalTextureTransform:o(e.normalTextureTransform),occlusionTextureTransform:o(e.occlusionTextureTransform),emissiveTextureTransform:o(e.emissiveTextureTransform),metallicRoughnessTextureTransform:o(e.metallicRoughnessTextureTransform)})}function be(e,t,n){t.writeVertices&&ve(e,t);const{indices:c,attributes:o,primitiveType:a,material:i}=t.gltf;let u=Q(c||o.position.count,a);const s=t.region.start;if(s){const m=new Uint32Array(u);for(let l=0;l<u.length;l++)m[l]+=s;u=m}e.components.push(new Z({name:t.gltf.name,faces:u,material:n.get(i),shading:o.normal?"source":"flat",trustSourceNormals:!0}))}function ve(e,t){const{position:n,normal:c,tangent:o,color:a,texCoord0:i}=e.vertexAttributes,u=t.region.start,{attributes:s,transform:m}=t.gltf,l=s.position.count;if(q(n.slice(u,l),s.position,m),s.normal!=null&&c!=null){const r=W(E(),m),f=c.slice(u,l);X(f,s.normal,r),M(r)&&Y(f,f)}else c!=null&&H(c,0,0,1,{dstIndex:u,count:l});if(s.tangent!=null&&o!=null){const r=J(E(),m),f=o.slice(u,l);ee(f,s.tangent,r),M(r)&&te(f,f)}else o!=null&&h(o,0,0,1,1,{dstIndex:u,count:l});if(s.texCoord0!=null&&i!=null?ne(i.slice(u,l),s.texCoord0):i!=null&&re(i,0,0,{dstIndex:u,count:l}),s.color!=null&&a!=null){const r=s.color,f=a.slice(u,l);if(r.elementCount===4)r instanceof O?R(f,r,255):r instanceof j?oe(f,r):r instanceof se&&R(f,r,1/256);else{h(f,255,255,255,255);const p=S.fromTypedArray(f.typedBuffer,f.typedBufferStride);r instanceof F?C(p,r,255):r instanceof S?ae(p,r):r instanceof le&&C(p,r,1/256)}}else a!=null&&h(a.slice(u,l),255,255,255,255)}function Be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Me(e){return{horizontal:A(e.s),vertical:A(e.t)}}function A(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(e){return e**(1/de)*255}function Re(e,t){return ue(d(e[0]),d(e[1]),d(e[2]),t)}function Se(e){return ce(d(e[0]),d(e[1]),d(e[2]))}export{Ee as loadGLTFMesh};