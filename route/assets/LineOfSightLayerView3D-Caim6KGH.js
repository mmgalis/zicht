const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LineOfSightAnalysisView3D-BIB9bInN.js","assets/index-A4fbUCXm.js","assets/index-B5n_RJU8.css","assets/AnalysisView3D-D6hHkxJv.js","assets/projectionUtils-v2YcV5v2.js","assets/manipulatorUtils-TUU5iqyV.js","assets/LineVisualElement-B1pCxGNy.js","assets/analysisViewUtils-DBH0sgda.js"])))=>i.map(i=>d[i]);
import{B as w,M as h,a4 as r,bs as d,u as V,bt as _,aw as u,bu as c,e as a,y as n,a as p}from"./index-A4fbUCXm.js";import{l as A}from"./LayerView3D-DTBsyBa4.js";import{y as f}from"./LayerView-bOM6JnPY.js";const o="analysis-view-handles";let i=class extends A(f){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles(w(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},h),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new r("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async e=>(this.analysisView=await this._createAnalysisViewPromise(s,e),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=V(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let e=this._analysisModule;if(e==null){const y=await this._loadAnalysisModule();this._analysisModule=y,e=y}const l=new e.default({analysis:s,view:this.view,parent:this});if(await l.when(),u(t))throw l.destroy(),new r("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return c(()=>import("./LineOfSightAnalysisView3D-BIB9bInN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))}};a([n()],i.prototype,"type",void 0),a([n()],i.prototype,"layer",void 0),a([n()],i.prototype,"analysisView",void 0),a([n()],i.prototype,"_createAnalysisViewTask",void 0),i=a([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const k=i;export{k as default};