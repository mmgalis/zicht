import{gR as u,hN as M,cz as O,cB as z,hO as d,hP as _,hQ as v,hx as g,bW as S,hR as p,hS as m,bX as G,hT as P}from"./index-u6TDeZ-R.js";function R(a,e,r,o,l){const t=u(3*a.length),h=u(t.length);a.forEach((s,c)=>{t[3*c]=s[0],t[3*c+1]=s[1],t[3*c+2]=s.length>2?s[2]:0});const n=M(t,e,0,h,0,t,0,t.length/3,r,o,l),i=n!=null;return{numVertices:a.length,position:t,mapPositions:h,projectionSuccess:i,sampledElevation:n}}class w extends O{constructor(e){super(e),this.view=null,this._renderOccluded=z.OccludeAndTransparent,this._vertices=null,this._spatialReference=null,this._color=d([1,127/255,0,1]),this._size=11,this._outlineColor=d([0,0,0,.5]),this._outlineSize=1,this._elevationInfo=null,this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial(),this._updateOutlineMaterial())}get vertices(){return this._vertices}set vertices(e){this._vertices=e,this.recreateGeometry()}get spatialReference(){return this._spatialReference}set spatialReference(e){this._spatialReference=e,this.recreateGeometry()}get color(){return this._color}set color(e){_(e,this._color)||(v(this._color,e),this._updateMaterial())}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){_(e,this._outlineColor)||(v(this._outlineColor,e),this._updateOutlineMaterial())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateOutlineMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}get _vertexMaterialParameters(){return{color:this._color,screenSizeScale:this.size,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}get _vertexOutlineMaterialParameters(){return{color:this._outlineColor,screenSizeScale:this.size+2*this.outlineSize,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){this.attached&&this._vertexMaterial.setParameters(this._vertexMaterialParameters)}_updateOutlineMaterial(){this.attached&&this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters)}_createRenderGeometries(){const e=this.vertices;if(e==null||e.length===0)return[];const r=.5,o=.5,l=R(e,this.spatialReference,this.view.elevationProvider,this.view.renderCoordsHelper,g.fromElevationInfo(this.elevationInfo)),t=[],h=l.numVertices,n=l.position;for(let i=0;i<h;++i){const s=S(y,n[3*i],n[3*i+1],n[3*i+2]),c=f(this._vertexMaterial,r,s),x=f(this._vertexOutlineMaterial,o,s);t.push({vertexGeometry:c,vertexOutlineGeometry:x})}return t}createGeometries(e){const r=this._createRenderGeometries();for(const{vertexGeometry:o,vertexOutlineGeometry:l}of r)e.addGeometry(o),e.addGeometry(l)}createExternalResources(){this._vertexMaterial=new p({...this._vertexMaterialParameters,writeDepth:!0,cullFace:m.Back,screenSizeEnabled:!0}),this._vertexOutlineMaterial=new p({...this._vertexOutlineMaterialParameters,forceTransparentMode:!0,writeDepth:!0,cullFace:m.Front,screenSizeEnabled:!0,shadingEnabled:!1})}destroyExternalResources(){this._vertexMaterial=null,this._vertexOutlineMaterial=null}forEachExternalMaterial(e){e(this._vertexMaterial),e(this._vertexOutlineMaterial)}}const y=G();function f(a,e,r){return P(a,e,16,16,{offset:r})}export{w as d};