import{bn as p,u as h,a4 as c,v as d,at as u,e as t,y as o,a as y}from"./index-BSpFFQw2.js";import{l as g}from"./LayerView3D-BbnMtDtB.js";import{m,r as b}from"./queryForSymbologySnapping-QOlPIYlp.js";import{O as f}from"./GraphicsProcessor-B3bEYNUn.js";import{l as v}from"./projectExtentUtils-MQQ0bsUk.js";import{y as S}from"./LayerView-DLLeRJhz.js";import"./Graphics3DObjectStates-C82S_fck.js";import"./optimizedFeatureQueryEngineAdapter-Z_az-PGS.js";import"./PooledRBush-DbrlSnlJ.js";import"./quickselect-Dsbvbp-O.js";let s=class extends g(S){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}initialize(){this._set("processor",new f({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",e=>this.processor.graphicsCore.graphicUpdateHandler(e))),this.addResolvingPromise(v(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.layer.internal?this.notifyChange("updating"):this.addHandles(p(()=>{var e,r;return(r=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:r.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",h(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}get visibleAtCurrentScale(){var e;return!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){var r;const e=super.getSuspendInfo();return e.outsideOfView=((r=this.processor)==null?void 0:r.frustumVisibilitySuspended)??!1,e}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,r){return this.processor.whenGraphicBounds(e,r)}computeAttachmentOrigin(e,r){var i;return(i=this.processor)==null?void 0:i.computeAttachmentOrigin(e,r)}getSymbolLayerSize(e,r){return this.processor.getSymbolLayerSize(e,r)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}async elevationAlignPointsInFeatures(e,r){const{processor:i}=this;if((i==null?void 0:i.graphics3DGraphics)==null)throw new c("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:n}=i,l=a=>typeof a=="number"?n.get(a):void 0;return m(this.view,this.layer,l,e,r)}async queryForSymbologySnapping(e,r){return b(this.processor,e,r)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||d.SYNC}isUpdating(){var e,r;return this.view&&this.layer&&!(!((e=this.processor)!=null&&e.updating)&&(this.layer.internal||(r=this.view.basemapTerrain)!=null&&r.ready))}get performanceInfo(){return new u(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){var e,r;return((r=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:r.usedMemory)??0}get unloadedMemory(){var e,r;return(r=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:r.unprocessedMemoryEstimate}get test(){return{graphics3DProcessor:this.processor,loadedGraphics:this.loadedGraphics}}};t([o()],s.prototype,"loadedGraphics",null),t([o({readOnly:!0})],s.prototype,"legendEnabled",null),t([o()],s.prototype,"layer",void 0),t([o({readOnly:!0})],s.prototype,"processor",void 0),t([o({readOnly:!0})],s.prototype,"visibleAtCurrentScale",null),t([o()],s.prototype,"_slicePlaneEnabled",void 0),t([o({type:Boolean})],s.prototype,"slicePlaneEnabled",null),s=t([y("esri.views.3d.layers.GraphicsLayerView3D")],s);const H=s;export{H as default};