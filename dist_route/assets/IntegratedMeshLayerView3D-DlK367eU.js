import{bl as p,bq as l,br as m,P as n,g as d,e,y as i,ap as u,a as c}from"./index-BSpFFQw2.js";import{A as h}from"./I3SMeshView3D-C8D6Rh1s.js";import{l as g}from"./LayerView3D-BbnMtDtB.js";import{y}from"./LayerView-DLLeRJhz.js";import"./Transform-Rdm95wc7.js";import"./RenderTexture-D6xb6BNJ.js";import"./I3SOverrides-gln5o5cM.js";import"./I3SNode-8vIse8QW.js";import"./meshFeatureSet-BR1vai-R.js";import"./FeatureLayerView3D-V88fqRgG.js";import"./FeatureLayerViewBase3D-DV2a_mKY.js";import"./HeatmapDensity.glsl-sZaKAHK4.js";import"./timeSupport-DEAZvl8z.js";import"./projectExtentUtils-MQQ0bsUk.js";import"./queryForSymbologySnapping-QOlPIYlp.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-C82S_fck.js";import"./optimizedFeatureQueryEngineAdapter-Z_az-PGS.js";import"./PooledRBush-DbrlSnlJ.js";import"./quickselect-Dsbvbp-O.js";import"./QueryEngine-CMmrb91I.js";import"./WhereClause-BmR72vas.js";import"./TimeOnly-J_rd5GCc.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-Bpi9RFbP.js";import"./utils-B9sDcAUI.js";import"./ClassBreaksDefinition-CjgtmC2z.js";import"./FeatureStore-BFgBIFd3.js";import"./BoundsStore-DSqV1Fl-.js";import"./EventedSet-Cf0qhUkk.js";import"./RefreshableLayerView-oWAOuap5.js";import"./SceneModification-r4VHHREo.js";import"./SceneLayerWorker-C5ZpMl-I.js";import"./makeScheduleFunction-CggzEh3c.js";const f=.2;let t=class extends h(g(y)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._needsNormals=!p("disable-feature:im-shading"),this.drapeTargetType=l.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var r;return((r=this._controller)==null?void 0:r.updatingProgress)??0}get lodFactor(){var r,o,a,s;return((s=(a=(o=(r=this.view)==null?void 0:r.qualitySettings)==null?void 0:o.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?f:1}get visibleAtCurrentScale(){return m(this.i3slayer.effectiveScaleRange,this.view.terrainScale)}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),n),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){return new d({layer:this.layer,sourceLayer:this.layer})}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const r=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>r,()=>this._modifications=r.toArray(),n),"modifications")}};e([i()],t.prototype,"layer",void 0),e([i()],t.prototype,"i3slayer",null),e([i(u)],t.prototype,"updatingProgress",void 0),e([i()],t.prototype,"updatingProgressValue",null),e([i()],t.prototype,"lodFactor",null),e([i({readOnly:!0})],t.prototype,"progressiveLoadFactor",null),e([i({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=e([c("esri.views.3d.layers.IntegratedMeshLayerView3D")],t);const Z=t;export{Z as default};