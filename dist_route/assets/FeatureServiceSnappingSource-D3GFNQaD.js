const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WhereClause-BmR72vas.js","assets/TimeOnly-J_rd5GCc.js","assets/index-BSpFFQw2.js","assets/index-BCwB8mD8.css"])))=>i.map(i=>d[i]);
import{nz as L,p9 as q,pa as Z,bW as G,bX as B,e as a,y as r,a as m,S as O,pb as Q,B as _,D,gI as T,P as I,pc as K,J as X,j as Y,d4 as ee,h as J,dI as te,bt as ie,ht as ne,gj as se,bh as N,f2 as ae,fE as re,lJ as oe,eQ as le,aW as de,eR as ue,pd as pe,pe as he,gg as ce,an as V,gf as ye,hA as f,aB as fe,lq as A,M as ge,pf as _e,bs as we,bu as ve}from"./index-BSpFFQw2.js";import{i as Se,o as Ie}from"./queryEngineUtils-Ci5cezfC.js";import{d as me}from"./TileTreeDebugger-CJbPYPu3.js";import"./VertexSnappingCandidate-x5AnImb9.js";function H(e,t){return q(t.extent,U),Z(U,G(be,e.x,e.y,0))}const U=L(),be=B();let y=class extends O{get tiles(){const t=this.tilesCoveringView,n=this.pointOfInterest!=null?this.pointOfInterest:this.view.center;return t.sort((s,i)=>H(n,s)-H(n,i)),t}_scaleEnabled(){return Q(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||this.tileInfo==null)return[];if(!this._scaleEnabled)return[];const{spans:t,lodInfo:n}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:s}=n,i=[];for(const{row:o,colFrom:l,colTo:w}of t)for(let d=l;d<=w;d++){const u=n.normalizeCol(d),S=new T(null,s,o,u);this.tileInfo.updateTileInfo(S),i.push(S)}return i}get tileInfo(){var t;return((t=this.view.featuresTilingScheme)==null?void 0:t.tileInfo)??null}get tileSize(){return this.tileInfo!=null?this.tileInfo.size[0]:256}constructor(t){super(t),this.pointOfInterest=null}initialize(){this.addHandles(_(()=>{var t,n;return(n=(t=this.view)==null?void 0:t.state)==null?void 0:n.viewpoint},()=>this.notifyChange("tilesCoveringView"),D))}};a([r({readOnly:!0})],y.prototype,"tiles",null),a([r({readOnly:!0})],y.prototype,"_scaleEnabled",null),a([r({readOnly:!0})],y.prototype,"tilesCoveringView",null),a([r({readOnly:!0})],y.prototype,"tileInfo",null),a([r({readOnly:!0})],y.prototype,"tileSize",null),a([r({constructOnly:!0})],y.prototype,"view",void 0),a([r({constructOnly:!0})],y.prototype,"layer",void 0),a([r()],y.prototype,"pointOfInterest",void 0),y=a([m("esri.views.2d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],y);let g=class extends O{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(t!=null){const n=e.map(s=>H(t,s));for(let s=1;s<n.length;s++)if(n[s-1]>n[s])return e.sort((i,o)=>H(t,i)-H(t,o)),e.slice()}return e}get tilesCoveringView(){var e,t;return this._filterTiles((t=(e=this.view.featureTiles)==null?void 0:e.tiles)==null?void 0:t.toArray()).map(He)}get tileInfo(){var e,t;return((t=(e=this.view.featureTiles)==null?void 0:e.tilingScheme)==null?void 0:t.toTileInfo())??null}get tileSize(){var e;return((e=this.view.featureTiles)==null?void 0:e.tileSize)??256}get _effectivePointOfInterest(){var t;const e=this.pointOfInterest;return e??((t=this.view.pointsOfInterest)==null?void 0:t.focus.location)}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(_(()=>this.view.featureTiles,e=>{this.removeHandles(W),e&&this.addHandles(e.addClient(),W)},I))}_filterTiles(e){return e==null?[]:e.filter(t=>{const n=t.measures;if(n.visibility===K.VISIBLE_ON_SURFACE){const s=n.screenRect;return Math.abs(s[3]-s[1])>Oe}return!1})}};function He({lij:[e,t,n],extent:s}){return new T(`${e}/${t}/${n}`,e,t,n,s)}a([r({readOnly:!0})],g.prototype,"tiles",null),a([r({readOnly:!0})],g.prototype,"tilesCoveringView",null),a([r({readOnly:!0})],g.prototype,"tileInfo",null),a([r({readOnly:!0})],g.prototype,"tileSize",null),a([r({constructOnly:!0})],g.prototype,"view",void 0),a([r()],g.prototype,"pointOfInterest",void 0),a([r()],g.prototype,"_effectivePointOfInterest",null),g=a([m("esri.views.3d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],g);const Oe=50,W="feature-tiles";let k=class extends me{constructor(e){super(e)}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this.addHandles(X(()=>clearInterval(e)))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach(i=>{e.set(i.data.id,i.featureCount)}),this._debugInfo.pendingTiles.forEach(i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)});const n=i=>{const o=t.get(i),l=e.get(i)??"?";return o?`${o}:${l}
${i}`:`store:${l}
${i}`},s=new Map;return this._debugInfo.storedTiles.forEach(i=>{s.set(i.data.id,i.data)}),this._debugInfo.pendingTiles.forEach(i=>{s.set(i.data.id,i.data)}),Array.from(s.values()).map(i=>({lij:[i.level,i.row,i.col],geometry:Y.fromExtent(ee(i.extent,this.view.spatialReference)),label:n(i.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this._debugInfo=e,this.update()})}};a([r({constructOnly:!0})],k.prototype,"handle",void 0),k=a([m("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],k);let c=class extends O{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new J,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async t=>{const n=[];for(const{points:s}of t.pointsInFeatures)for(const{z:i}of s)n.push(i);return{elevations:n,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=te(async(t,n)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...t],n)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},n))})}destroy(){this._suspendController=ie(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new Te(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",({updating:e})=>this._workerHandleUpdating=e),this._workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){var i;const n=ke(e.layer);if(n==null)return;const s={configuration:j(e.configuration),serviceInfo:n,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:(i=e.layer.elevationInfo)==null?void 0:i.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",s,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const n=j(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",n,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:n,filter:s,coordinateHelper:i}=e,o={...e,point:ne(n[0],n[1],n[2],i.spatialReference.toJSON()),filter:s==null?void 0:s.toJSON()};return this._workerHandle.invoke(o,t)}async updateTiles(e,t){const n={tiles:e.tiles,tileInfo:e.tileInfo!=null?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",n,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var l,w,d;const n=this._editId++,s={id:n};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",s,t));const i=await this._updatingHandles.addPromise(se(e.result,t)),o={id:n,edits:{addedFeatures:((l=i.addedFeatures)==null?void 0:l.map(({objectId:u})=>u).filter(N))??[],deletedFeatures:((w=i.deletedFeatures)==null?void 0:w.map(({objectId:u,globalId:S})=>({objectId:u,globalId:S})))??[],updatedFeatures:((d=i.updatedFeatures)==null?void 0:d.map(({objectId:u})=>u).filter(N))??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){var t;(t=this._suspendController)==null||t.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}};function j(e){return{filter:e.filter!=null?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}function ke(e){var t,n;return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:((t=e.parsedUrl)==null?void 0:t.path)??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:ae.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:(n=e.timeInfo)==null?void 0:n.toJSON()}}a([r({constructOnly:!0})],c.prototype,"schedule",void 0),a([r({constructOnly:!0})],c.prototype,"hasZ",void 0),a([r({constructOnly:!0})],c.prototype,"elevationAlignPointsInFeatures",void 0),a([r({constructOnly:!0})],c.prototype,"queryForSymbologySnapping",void 0),a([r({readOnly:!0})],c.prototype,"updating",null),a([r({readOnly:!0})],c.prototype,"availability",void 0),a([r()],c.prototype,"_workerHandleUpdating",void 0),c=a([m("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],c);class Te extends re{constructor(t,n){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:n})}}let v=class extends O{get tiles(){return[new T("0/0/0",0,0,0,oe(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new le({origin:new de({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new ue({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};a([r({readOnly:!0})],v.prototype,"tiles",null),a([r({readOnly:!0})],v.prototype,"tileInfo",null),a([r({readOnly:!0})],v.prototype,"tileSize",null),a([r({constructOnly:!0})],v.prototype,"layer",void 0),a([r()],v.prototype,"pointOfInterest",void 0),v=a([m("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],v);let p=class extends O{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){var e;return(e=this.view)==null?void 0:e.allLayerViews.find(t=>t.layer===this._layer)}get _isSuspended(){var e;return pe(this._layer)&&!this.layerSource.sublayerSources.some(t=>t.enabled&&t.layer.visible)?!0:!!this.view&&(((e=this._layerView)==null?void 0:e.suspended)!==!1||!this.layerSource.enabled)}get updating(){var e;return((e=this._workerHandle)==null?void 0:e.updating)||this._updatingHandles.updating}get _outFields(){var S,F,$,C,P,E,M,z;const{view:e,_layerView:t,layerSource:n}=this,{layer:s}=n,{fieldsIndex:i,timeInfo:o,floorInfo:l,subtypeField:w}=s,d=t&&"filter"in t?t.filter:null,u=d!=null&&d.where&&d.where!=="1=1"?this._getOrLoadWhereFields(d.where,i):[];if(d!=null&&d.timeExtent&&o){const{startField:h,endField:b}=o,x=((S=i.get(h))==null?void 0:S.name)??h,R=((F=i.get(b))==null?void 0:F.name)??b;x&&u.push(x),R&&u.push(R)}if(e!=null&&e.map&&he(e.map)&&(($=e.map.utilityNetworks)!=null&&$.find(h=>h.isUtilityLayer(s)))){const h=(C=s.fieldsIndex.get("assetGroup"))==null?void 0:C.name,b=(P=s.fieldsIndex.get("assetType"))==null?void 0:P.name;h&&b&&(u.push(h),u.push(b))}if(s&&(l!=null&&l.floorField)&&((E=e==null?void 0:e.floors)!=null&&E.length)){const h=((M=i.get(l.floorField))==null?void 0:M.name)??l.floorField;h&&u.push(h)}if(w){const h=((z=i.get(w))==null?void 0:z.name)??w;h&&u.push(h)}return new Set(u)}get configuration(){const{view:e}=this,{apiKey:t,customParameters:n}=this._layer,s=e!=null?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:t?{...n,token:t}:n,viewType:s}}get availability(){var e;return((e=this._workerHandle)==null?void 0:e.availability)??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new J,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=ce(Se)}initialize(){let e;const t=this.view;if(t==null||t.destroyed)this._tilesOfInterest=new v({layer:this._layer}),e=this._workerHandle=new c;else switch(t.type){case"2d":this._tilesOfInterest=new y({view:t,layer:this._layer}),e=this._workerHandle=new c;break;case"3d":{const{resourceController:n}=t,s=this._layer;this._tilesOfInterest=new g({view:t}),e=this._workerHandle=new c({schedule:i=>n.immediate.schedule(i),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(i,o)=>{const l=await t.whenLayerView(s);return V(o),l.elevationAlignPointsInFeatures(i,o)},queryForSymbologySnapping:async(i,o)=>{const l=await t.whenLayerView(s);return V(o),l.queryForSymbologySnapping(i,o)}}),this.addHandles([t.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:o}=s;ye(i,o)&&f(e.notifyElevationSourceChange())}),_(()=>s.elevationInfo,()=>f(e.notifyElevationSourceChange()),I),_(()=>{var i,o;return(o=(i=this._layerView)==null?void 0:i.layer)==null?void 0:o.renderer},()=>f(e.notifySymbologyChange()),I),_(()=>{var i;return((i=this._layerView)==null?void 0:i.symbologySnappingSupported)??!1},i=>f(e.setSymbologySnappingSupported(i)),I),fe(()=>{var i;return(i=this._layerView)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>e.notifySymbologyChange())]);break}}this.addHandles([A(e)]),f(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add(()=>this._updateTilesParameters,()=>f(e.updateTiles(this._updateTilesParameters,null)),I),this.addHandles([_(()=>this.configuration,n=>f(e.configure(n,null)),D),_(()=>this._outFields,n=>f(e.updateOutFields(n)),I),_(()=>this._isSuspended,n=>f(e.setSuspended(n)),ge)]),t!=null&&this.addHandles(_(()=>_e.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,n=>{n&&!this._debug?(this._debug=new k({view:t,handle:e}),this.addHandles(A(this._debug),"debug")):!n&&this._debug&&this.removeHandles("debug")},I)),this.addHandles(this.layerSource.layer.on("apply-edits",n=>{f(e.applyEdits(n,null))}))}destroy(){this._updatingHandles.destroy()}refresh(){var e;(e=this._workerHandle)==null||e.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:n,point:s}=e;this._tilesOfInterest.pointOfInterest=n.arrayToPoint(s);const i=this._memoizedMakeGetGroundElevation(this.view,n.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map(o=>Ie(o,i))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:n}=this;if(!this._loadWhereModuleTask&&!n){const s=we(async()=>{const i=await ve(()=>import("./WhereClause-BmR72vas.js").then(o=>o.W),__vite__mapDeps([0,1,2,3]));return this._whereModule=i.WhereClause,this._whereModule});return this._loadWhereModuleTask=s,this._updatingHandles.addPromise(s.promise),[]}if(!n)return[];try{return n.create(e,t).fieldNames}catch{return[]}}};a([r({constructOnly:!0})],p.prototype,"spatialReference",void 0),a([r({constructOnly:!0})],p.prototype,"layerSource",void 0),a([r({constructOnly:!0})],p.prototype,"view",void 0),a([r()],p.prototype,"_tilesOfInterest",void 0),a([r({readOnly:!0})],p.prototype,"_updateTilesParameters",null),a([r()],p.prototype,"_layerView",null),a([r()],p.prototype,"_isSuspended",null),a([r({readOnly:!0})],p.prototype,"updating",null),a([r()],p.prototype,"_outFields",null),a([r({readOnly:!0})],p.prototype,"configuration",null),a([r({readOnly:!0})],p.prototype,"availability",null),a([r()],p.prototype,"_loadWhereModuleTask",void 0),a([r()],p.prototype,"_whereModule",void 0),p=a([m("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],p);export{p as FeatureServiceSnappingSource};