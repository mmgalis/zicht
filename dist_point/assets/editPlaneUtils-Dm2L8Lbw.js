import{e as s,y as r,a as x,S as _t,V as st,h as Pt,am as rt,c9 as at,l6 as et,bW as At,qN as Ft,qD as zt,bX as Mt,oY as N,d8 as I,tB as Ht,tC as Nt,tD as Lt,oT as Zt,tE as Dt,tF as Yt,kv as jt,oQ as qt,tG as Bt,aA as Wt,qb as Jt,i1 as Ot,ev as Qt,bs as Xt,B as Kt,tH as lt,u as Q,g as te,J as Z,tI as ee,tJ as ct,tK as ie,tL as pt,tM as oe,tN as ne,tO as dt,tP as se,tQ as re,M as ae,nz as le,hE as R,nQ as F,tR as ht,tS as ce,tT as pe,qf as de,kb as X,kc as ut,tU as j,tV as he,tW as ue,tX as ye,tY as ge,dU as me,dW as ve,tZ as yt,cD as gt,kl as mt,t_ as vt}from"./index-u6TDeZ-R.js";import{r as S,h as fe,w as we}from"./Tooltip-Df0YnTEf.js";import{h as q,x as _e,F as Oe,b as kt,I as xt,M as ke,U as xe,R as $e,u as $t,B as be,G as Ue}from"./automaticAreaMeasurementUtils-DuFdolFn.js";import{c as Ie,m as B}from"./automaticLengthMeasurementUtils-3DXNAhC8.js";var g;(function(t){t[t.NeverApplied=0]="NeverApplied",t[t.Applied=1]="Applied",t[t.Undone=2]="Undone"})(g||(g={}));var _;(function(t){t.UndoRedoUpdating="UndoRedoUpdating",t.UndoInvalidError="UndoInvalidError",t.RedoInvalidError="RedoInvalidError",t.ApplyInvalidError="ApplyInvalidError"})(_||(_={}));const W={[_.UndoRedoUpdating]:"Cannot perform operation whilst undo redo is updating",[_.UndoInvalidError]:"There are no items to Undo",[_.RedoInvalidError]:"There are no items to Redo",[_.ApplyInvalidError]:"Cannot apply an item that is already applied"};let z=class extends Error{constructor(){super(W[_.UndoRedoUpdating]),this.type="undo-redo-updating-error"}},tt=class extends Error{constructor(){super(W[_.UndoInvalidError]),this.type="undo-redo-undo-error"}},Ve=class extends Error{constructor(){super(W[_.RedoInvalidError]),this.type="undo-redo-redo-error"}},Te=class extends Error{constructor(){super(W[_.ApplyInvalidError]),this.type="undo-redo-apply-error"}};var k;(function(t){t[t.Apply=0]="Apply",t[t.Undo=1]="Undo",t[t.Redo=2]="Redo"})(k||(k={}));let D=class extends _t{constructor(){super(...arguments),this.name="",this.tag=Symbol(),this.status=g.NeverApplied}get canUndo(){return this.status===g.Applied}get canRedo(){return this.status===g.Undone}async executeUndoRedoOperation(e){switch(e){case k.Apply:if(this.status!==g.NeverApplied)throw new Te;return await this.apply(),void(this.status=g.Applied);case k.Undo:if(this.status!==g.Applied)throw new tt;return await this.undo(),void(this.status=g.Undone);case k.Redo:if(this.status!==g.Undone)throw new tt;return await this.redo(),void(this.status=g.Applied)}}};s([r()],D.prototype,"name",void 0),s([r()],D.prototype,"tag",void 0),D=s([x("esri.undoredo.UndoableOperation")],D);let w=class extends _t{constructor(){super(...arguments),this._stack=new st,this._stackPosition=-1,this._updatingHandles=new Pt}get updating(){return this._updatingHandles.updating}get canUndo(){return this.hasUndo&&!this.updating}get hasUndo(){return this._stackPosition>=0}get canRedo(){return this.hasRedo&&!this.updating}get hasRedo(){return this._stackPosition<this._stack.length-1}_truncateForwardStack(){this._stack.splice(this._stackPosition+1,this._stack.length-this._stackPosition).forEach(t=>t.destroy())}_drainStack(){this._stack.drain(t=>t.destroy()),this._stackPosition=-1}async undo(){if(!this.hasUndo)throw new tt;if(this.updating)throw new z;const t=this._stack.getItemAt(this._stackPosition);await this._updatingHandles.addPromise((async()=>{await t.executeUndoRedoOperation(k.Undo),--this._stackPosition,t.canRedo||this._truncateForwardStack()})())}async redo(){if(!this.hasRedo)throw new Ve;if(this.updating)throw new z;const t=this._stack.getItemAt(this._stackPosition+1);await this._updatingHandles.addPromise((async()=>{await t.executeUndoRedoOperation(k.Redo),++this._stackPosition})())}peekUndo(){return this.canUndo?this._stack.getItemAt(this._stackPosition):null}peekRedo(){return this.canRedo?this._stack.getItemAt(this._stackPosition+1):null}async inject(t){if(this.updating)throw new z;await this._updatingHandles.addPromise((async()=>{t.status===g.NeverApplied&&await t.executeUndoRedoOperation(k.Apply),t.canUndo?(this._stack.splice(this._stackPosition+1,0,t),this._stackPosition++):this._stackPosition>-1&&(this._stack.splice(0,this._stackPosition+1).forEach(e=>e.destroy()),this._stackPosition=-1)})())}async add(t){if(this.updating)throw new z;await this._updatingHandles.addPromise((async()=>{t.status===g.NeverApplied&&await t.executeUndoRedoOperation(k.Apply),this._stackPosition>=-1&&this._truncateForwardStack(),t.canUndo?(this._stack.push(t),this._stackPosition=this._stack.length-1):this._drainStack()})())}async removeTagged(t,e=!1){if(this.updating&&!e)return;await rt(()=>!this.updating);const i=new st;for(let o=0;o<this._stack.length;o++){const n=this._stack.getItemAt(o);n.tag===t?(n.destroy(),o===this._stackPosition&&(this._stackPosition=i.length-1)):i.push(n)}this._stack=i,this._stackPosition>i.length-1&&(this._stackPosition=i.length-1)}async clear(t=!1){if(this.updating&&!t)throw new z;await rt(()=>!this.updating),this._drainStack()}};s([r()],w.prototype,"_stack",void 0),s([r()],w.prototype,"_stackPosition",void 0),s([r()],w.prototype,"updating",null),s([r({readOnly:!0})],w.prototype,"canUndo",null),s([r({readOnly:!0})],w.prototype,"hasUndo",null),s([r({readOnly:!0})],w.prototype,"canRedo",null),s([r({readOnly:!0})],w.prototype,"hasRedo",null),w=s([x("esri.UndoRedo")],w);class Re{constructor(){this.committedVertices=null,this.cursorVertex=null,this.full=null,this.outline=null,this.cursorEdge=null,this.circle=null,this.rectangle=null}}function it(t,e){switch(t){case"point":case"multipoint":return Ee();case"polyline":return Ge(e);case"polygon":return Se(e);default:return}}function Ee(t){return"point"}function Ge(t){return(t!=null&&t.type==="polyline"&&t.paths.length?t.paths[0].length:0)<2?"polylineZeroVertices":"polylineOneVertex"}function Se(t){const e=t!=null&&t.type==="polygon"&&t.rings.length?t.rings[0].length:0;return e<3?"polylineZeroVertices":e<4?"polygonOneVertex":"polygonTwoVertices"}function Ce(t,e){const i=t==null?void 0:t.geometry;if(!t||(i==null?void 0:i.type)!=="mesh"||!e)return;const{renderCoordsHelper:o,elevationProvider:n}=e,{camera:a}=e.state,{extent:l}=i,{center:u,spatialReference:h}=l,p=at(h),y=et(h),v=at(o.spatialReference),$=l.width*p,P=l.height*y,d=(l.zmax??0)*y,V=d-(l.zmin??0)*y,L=Math.max($,P,V)/v,{x:T,y:f}=u,U=u.z??0;At(Y,T,f,U),o.toRenderCoords(Y,h,Y);const A=L/a.computeScreenPixelSizeAt(Y);if(A>a.width*Ae)return"meshTooClose";if(A<Pe)return"meshTooFar";const St=Ft(t),{absoluteZ:Ct}=zt(T,f,d,h,e,St);return Ct<(n.getElevation(T,f,U,h,"ground")??0)*y+V*Fe?"meshUnderground":"mesh"}const Pe=20,Ae=1,Fe=.1,Y=Mt();let O=class extends S{constructor(e){super(e),this.type="draw-circle",this.radius=null,this.xSize=null,this.ySize=null,this.area=N}get allFields(){return[]}};s([r()],O.prototype,"type",void 0),s([r()],O.prototype,"radius",void 0),s([r()],O.prototype,"xSize",void 0),s([r()],O.prototype,"ySize",void 0),s([r()],O.prototype,"area",void 0),s([r()],O.prototype,"allFields",null),O=s([x("esri.views.interactive.tooltip.infos.DrawCircleTooltipInfo")],O);let M=class extends q(S){constructor(e){super(e),this.type="draw-mesh",this.orientation=_e({lockable:!1}),this.scale=Oe({lockable:!1})}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation,this.orientation,this.scale]}};s([r()],M.prototype,"helpMessage",void 0),s([r()],M.prototype,"allFields",null),M=s([x("esri.views.interactive.tooltip.infos.DrawMeshTooltipInfo")],M);let H=class extends q(S){constructor(t){super(t),this.type="draw-point"}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation]}};s([r()],H.prototype,"helpMessage",void 0),s([r()],H.prototype,"allFields",null),H=s([x("esri.views.interactive.tooltip.infos.DrawPointTooltipInfo")],H);let E=class extends q(S){constructor(e){super(e),this.type="draw-polygon",this.direction=kt(),this.distance=xt({title:i=>i.messages.sketch.distance}),this.area=ke(),this.xyMode="direction-distance"}get allFields(){return[this.direction,this.distance,this.longitude,this.latitude,this.x,this.y,this.elevation,this.area]}};s([r()],E.prototype,"xyMode",void 0),s([r()],E.prototype,"helpMessage",void 0),s([r()],E.prototype,"allFields",null),E=s([x("esri.views.interactive.tooltip.infos.DrawPolygonTooltipInfo")],E);let G=class extends q(S){constructor(t){super(t),this.type="draw-polyline",this.direction=kt(),this.distance=xt({title:e=>e.messages.sketch.distance}),this.totalLength=xe(),this.xyMode="direction-distance"}get allFields(){return[this.direction,this.distance,this.longitude,this.latitude,this.x,this.y,this.elevation,this.totalLength]}};s([r()],G.prototype,"helpMessage",void 0),s([r()],G.prototype,"xyMode",void 0),s([r()],G.prototype,"allFields",null),G=s([x("esri.views.interactive.tooltip.infos.DrawPolylineTooltipInfo")],G);let b=class extends S{constructor(t){super(t),this.type="draw-rectangle",this.xSize=I,this.ySize=I,this.area=N}get allFields(){return[]}};s([r()],b.prototype,"type",void 0),s([r()],b.prototype,"xSize",void 0),s([r()],b.prototype,"ySize",void 0),s([r()],b.prototype,"area",void 0),s([r()],b.prototype,"allFields",null),b=s([x("esri.views.interactive.tooltip.infos.DrawRectangleTooltipInfo")],b);function ze(t,e){return{point:new H({sketchOptions:e,viewType:t}),polyline:new G({sketchOptions:e,viewType:t}),polygon:new E({sketchOptions:e,viewType:t}),mesh:new M({sketchOptions:e,viewType:t}),rectangle:new b({sketchOptions:e}),circle:new O({sketchOptions:e})}}function ft(t){const{directionOptions:e,geometryType:i,sketchOptions:o,tooltipInfos:n}=t,a=u=>{const h=J(t).mode,p=n[u].elevation;h==="relative-to-ground"||h==="relative-to-scene"||h==="on-the-ground"?p.lock(nt(t)):p.unlock()},l=u=>{if(e){const h=n[u].direction;h.committed=e.angle,h.unlockOnVertexPlacement=!1,o.values.directionMode=e.mode}};switch(i){case"polygon":case"polyline":a(i),l(i);break;case"point":case"mesh":a(i)}}function Me(t,e){const{drawOperation:i,view:o}=e,n=ot(e),a=J(e);if(o.type==="2d"||!t||a.mode!=="absolute-height"||(i==null?void 0:i.numCommittedVertices)!==1||!n||n.type!=="draw-polyline"&&n.type!=="draw-polygon"||n.elevation.locked)return;const[l,u,h]=t,p=Qe(l,u,h,a,e);p!=null&&n.elevation.lock(p)}function wt(t){var e;(e=ot(t))==null||e.allFields.forEach(i=>{i.unlockOnVertexPlacement&&i.unlock()})}function ot({geometryType:t,graphic:e,tooltipInfos:i}){var o;return t==="multipoint"||((o=e==null?void 0:e.geometry)==null?void 0:o.type)!==He[t]?null:i[t]}const He={point:"point",mesh:"mesh",polyline:"polyline",polygon:"polygon",circle:"polygon",rectangle:"polygon"};function Ne(t,e){switch(t==null?void 0:t.type){case"draw-point":Le(t,e);break;case"draw-polyline":De(t,e);break;case"draw-polygon":Ye(t,e);break;case"draw-rectangle":qe(t,e);break;case"draw-circle":Be(t,e);break;case"draw-mesh":Ze(t,e)}}function Le(t,e){var o;const i=(o=e.graphic)==null?void 0:o.geometry;(i==null?void 0:i.type)==="point"&&(bt(t,i,e),t.helpMessage=it("point",i))}function Ze(t,e){const{graphic:i,view:o}=e,n=i==null?void 0:i.geometry;o.type==="3d"&&(n==null?void 0:n.type)==="mesh"&&(bt(t,n.origin,e),$e(t,n),t.helpMessage=Ce(i,o))}function bt(t,e,i){const{drawOperation:o,view:n,sketchOptions:a}=i,{cursorVertex:l}=o;if(t.sketchOptions=a,t.viewType=n.type,t.setLocationFromPoint(e,C(i)),It(t.elevation,i),!l)return void(o.constraints=void 0);const u=l;o.constraints={context:Et(u,i),x:t.x.committed,y:t.y.committed,longitude:t.longitude.committed,latitude:t.latitude.committed,elevation:t.elevation.committed,distance:null,direction:null}}function De(t,e){const{createOperationGeometry:i,drawOperation:o}=e,n=i!=null?i.full:null;(n==null?void 0:n.type)==="polyline"&&(Ut(t,e),t.totalLength.actual=o.lastVertex?Ie(n)??I:null,t.helpMessage=it("polyline",n))}function Ye(t,e){const{createOperationGeometry:i,drawOperation:o}=e,n=i!=null?i.full:null;(n==null?void 0:n.type)==="polygon"&&(Ut(t,e),t.area.actual=o.lastVertex?$t(n)??N:null,t.helpMessage=it("polygon",n))}function Ut(t,e){const{drawOperation:i,sketchOptions:o,view:n}=e,{cursorVertex:a,lastVertex:l,secondToLastVertex:u}=i,h=o.values.effectiveDirectionMode;t.sketchOptions=o,t.viewType=n.type;const p=l&&a?B(l,a)??I:null;if(t.distance.actual=p,t.distance.readOnly=l==null,t.direction.actual=null,t.direction.readOnly=!0,l&&a&&(h==="absolute"||u)){const $=Dt(u,l,a,h);t.direction.actual=$??Yt,t.direction.readOnly=!1}t.setLocationFromPoint(a,C(e)),It(t.elevation,e);const y=je(l,e);t.xyMode=y,t.direction.visible=y==="direction-distance",t.distance.visible=y==="direction-distance",t.effectiveX.visible=y==="coordinates",t.effectiveY.visible=y==="coordinates";const v=a??l;i.constraints=v?{context:Et(v,e),x:t.x.committed,y:t.y.committed,longitude:t.longitude.committed,latitude:t.latitude.committed,elevation:t.elevation.committed,distance:t.distance.committed,direction:t.direction.committed}:void 0}function je(t,{sketchOptions:e}){const i=e.tooltips.xyMode;return i==="auto"?t?"direction-distance":"coordinates":i}function qe(t,e){t.sketchOptions=e.sketchOptions,t.xSize=Tt(e),t.ySize=Rt(e),t.area=Vt(e)}function Be(t,e){const{forceUniformSize:i,sketchOptions:o}=e;t.sketchOptions=o,t.radius=i?We(e):null,t.xSize=i?null:Tt(e),t.ySize=i?null:Rt(e),t.area=Vt(e)}function It(t,e){const{drawOperation:i}=e,o=(i==null?void 0:i.cursorVertex)??(i==null?void 0:i.lastVertex);t.actual=jt(o)??nt(e),t.visible=i.hasZ,t.readOnly=!1,t.showAsZ=!0}function Vt(t){var i;const e=(i=t.createOperationGeometry)==null?void 0:i.full;return(e==null?void 0:e.type)!=="polygon"?N:$t(e)??N}function Tt(t){var i,o;const e=(o=(i=t.createOperationGeometry)==null?void 0:i.rectangle)==null?void 0:o.midpoints;return(e!=null?B(e.left,e.right):null)??I}function Rt(t){var i,o;const e=(o=(i=t.createOperationGeometry)==null?void 0:i.rectangle)==null?void 0:o.midpoints;return(e!=null?B(e.top,e.bottom):null)??I}function We({createOperationGeometry:t}){var e;return(((e=t==null?void 0:t.circle)==null?void 0:e.center)!=null&&t.circle.edge!=null?B(t.circle.center,t.circle.edge):null)??I}function Je(t){const{geometryType:e,tooltipInfos:i}=t;switch(e){case"point":case"mesh":case"polyline":case"polygon":{const o=i[e].elevation.committed;return o?qt(o,"meters")/et(C(t)):void 0}default:return}}function Qe(t,e,i,o,n){const{view:a,drawOperation:l}=n;if(a.type!=="3d"||!l)return;i??(i=0);const u=C(n),h=J(n),p=Ht(a,t,e,i,u,h,o);return Nt(p,u)??nt(n)}function J(t){return t.drawOperation.elevationInfo??Lt}function C(t){return t.drawOperation.coordinateHelper.spatialReference}function nt(t){const e=et(C(t));return Zt(t.defaultZ*e,"meters")}function Et(t,e){return Bt(t,e.view,C(e),J(e),e.drawOperation.coordinateHelper.hasZ(),e.sketchOptions.values.effectiveDirectionMode)}let c=class extends Wt.EventedMixin(Jt){constructor(e){super(e),this._graphic=null,this._coordinateFormatterLoadTask=null,this._createOperationGeometry=null,this.defaultZ=0,this.directionOptions=null,this.geometryType=null,this.hasZ=!0,this.geometryToPlace=null,this.snappingManager=null,this.snapToScene=!1,this.sketchOptions=new Ot}initialize(){const{view:e}=this;this.internalGraphicsLayer=new Qt({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer);const i=this.drawOperation=this.makeDrawOperation();this.tooltipInfos=ze(e.type,this.sketchOptions);const o=this.tooltip=new fe({view:e});ft(this._tooltipsContext),this._coordinateFormatterLoadTask=Xt(()=>we()),this.addHandles([i.on("vertex-add",n=>this.onVertexAdd(n)),i.on("vertex-remove",n=>this.onVertexRemove(n)),i.on("vertex-update",n=>this.onVertexUpdate(n)),i.on("cursor-update",n=>this.onCursorUpdate(n)),i.on("cursor-remove",()=>this._updateGraphic()),i.on("complete",n=>this.onComplete(n)),this._coordinateFormatterLoadTask,o.on("paste",n=>be(n,this.activeTooltipInfo)),Kt(()=>this.cursor,n=>{i.cursor=n},ae),lt(()=>{const{activeTooltipInfo:n,sketchOptions:a}=this;Ne(n,this._tooltipsContext),o.info=a.tooltips.effectiveEnabled?n:null}),lt(()=>{i.constraintZ=Je(this._tooltipsContext)})]),this.finishToolCreation()}destroy(){this.drawOperation=Q(this.drawOperation),this.tooltip=Q(this.tooltip),this._destroyAllVisualizations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=Q(this.internalGraphicsLayer),this._set("view",null)}get _drawSpatialReference(){return this.drawOperation.coordinateHelper.spatialReference}get _tooltipsContext(){return{createOperationGeometry:this._createOperationGeometry,defaultZ:this.defaultZ,directionOptions:this.directionOptions,drawOperation:this.drawOperation,forceUniformSize:this.forceUniformSize,geometryType:this.geometryType,graphic:this.graphic,sketchOptions:this.sketchOptions,tooltipInfos:this.tooltipInfos,view:this.view}}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(e){this._set("centered",e),this._updateGraphic()}get cursor(){return this._get("cursor")}set cursor(e){this._set("cursor",e)}set enabled(e){this.drawOperation.interactive=e,this._set("enabled",e)}set forceUniformSize(e){this._set("forceUniformSize",e),this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(e){this._set("graphicSymbol",e),this._graphic!=null&&(this._graphic.symbol=e)}set mode(e){const i=this.drawOperation;i&&(i.drawingMode=e),this._set("mode",e)}get updating(){var e;return((e=this.drawOperation)==null?void 0:e.updating)??!1}get undoRedo(){const{view:{type:e,map:i}}=this;return e==="2d"&&i&&"undoRedo"in i&&i.undoRedo instanceof w?i.undoRedo:null}set undoRedo(e){this._override("undoRedo",e)}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(e){this.destroyed||Ue(e,this.tooltip)||this.drawOperation.onInputEvent(e)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo(),this.drawOperation.numCommittedVertices===0&&ft(this._tooltipsContext)}_destroyAllVisualizations(){this.removeHandles(m.outline),this.removeHandles(m.regularVertices),this.removeHandles(m.activeVertex),this.removeHandles(m.activeEdge),this.removeHandles(K)}_createOrUpdateGraphic(e){if(this._graphic!=null)return this.updateGraphicGeometry(e),this._graphic;const i=new te({...this.graphicProperties,symbol:this.graphicSymbol});return this._graphic=i,this.updateGraphicGeometry(e),this.internalGraphicsLayer.add(i),this.addHandles(this.initializeGraphic(i)),this.notifyChange("graphic"),this.addHandles(Z(()=>{this.internalGraphicsLayer.remove(i),this._graphic===i&&(this._graphic=null)}),K),i}updateGraphicGeometry(e){this._graphic.geometry=e}_getCreateOperationGeometry(e={operationComplete:!1}){var L,T;if(this.drawOperation==null)return;const{coordinateHelper:i,view:o,visualizationCursorVertex:n,lastVertex:a,committedVertices:l,geometryIncludingUncommittedVertices:u,numCommittedVertices:h}=this.drawOperation;if(!(h>0||n!=null))return;const p=e.operationComplete?l:u,y=p.length,v=n!=null?i.pointToArray(n):null,$=this._drawSpatialReference,P=o.type==="3d"&&o.viewingMode==="global",d=new Re;d.committedVertices=l,d.cursorVertex=v;const{geometryType:V}=this;switch(V){case"point":case"mesh":d.full=i.arrayToPoint(p[0]);break;case"multipoint":d.full=y>0?re(p,$):null;break;case"polyline":case"polygon":y>0&&(d.full=V==="polygon"?ne([p],$,P,!0):dt([p],$,P),d.cursorEdge=v!=null&&a&&!se(n,a)?dt([[v,i.pointToArray(a)]],$,P):null,d.outline=y>1?d.full:null);break;case"circle":case"rectangle":{if(d.committedVertices=d.cursorVertex=null,!y)break;const f=ee(o,p[0]),U=p[0],A=f.makeMapPoint(U[0]+Xe*o.resolution,U[1]);V==="circle"?y===1&&e.operationComplete?d.circle=ct([U,A],f,!0):y===2&&(this.forceUniformSize?d.circle=ct(p,f,this.centered):d.rectangle=ie(p,f,this.centered)):y===1&&e.operationComplete?d.rectangle=pt([U,A],f,!0):y===2&&(d.rectangle=this.forceUniformSize?pt(p,f,this.centered):oe(p,f,this.centered)),d.full=d.circle!=null?d.circle.geometry:(L=d.rectangle)==null?void 0:L.geometry,d.outline=((T=d.full)==null?void 0:T.type)==="polygon"?d.full:null;break}default:return null}return d}initializeGraphic(e){return Z()}onComplete(e){if(!this.drawOperation)return;this._updateGraphic();let i=null;if(this.drawOperation.isCompleted){const o=this._getCreateOperationGeometry({operationComplete:!0});o!=null&&(i=this._createOrUpdateGraphic(o.full))}this._createOperationGeometry=null,this.emit("complete",{graphic:i,...e})}onCursorUpdate(e){this._updateGraphic(),this.emit("cursor-update",e)}onDeactivate(){const{drawOperation:e}=this;e&&(e.isCompleted||e.cancel())}onOutlineChanged(e){return Z()}onCursorEdgeChanged(e){return Z()}onVertexAdd(e){var i;wt(this._tooltipsContext),this._updateGraphic(),Me((i=e.vertices.at(0))==null?void 0:i.coordinates,this._tooltipsContext),this.emit("vertex-add",e)}onVertexRemove(e){wt(this._tooltipsContext),this._updateGraphic(),this.emit("vertex-remove",e)}onVertexUpdate(e){this._updateGraphic(),this.emit("vertex-update",e)}_updateGraphic(){const e=this._getCreateOperationGeometry();this._createOperationGeometry=e,e!=null?(e.cursorEdge!=null?this.addHandles(this.onCursorEdgeChanged(e.cursorEdge),m.activeEdge):this.removeHandles(m.activeEdge),e.outline!=null?this.addHandles(this.onOutlineChanged(e.outline),m.outline):this.removeHandles(m.outline),e.committedVertices!=null?this.addHandles(this.onRegularVerticesChanged(e.committedVertices),m.regularVertices):this.removeHandles(m.regularVertices),e.cursorVertex!=null?this.addHandles(this.onActiveVertexChanged(e.cursorVertex),m.activeVertex):this.removeHandles(m.activeVertex),e.full!=null?this._createOrUpdateGraphic(e.full):this.removeHandles(K)):this._destroyAllVisualizations()}get activeTooltipInfo(){var e;return(e=this._coordinateFormatterLoadTask)!=null&&e.finished?ot(this._tooltipsContext):null}};s([r()],c.prototype,"_coordinateFormatterLoadTask",void 0),s([r()],c.prototype,"_createOperationGeometry",void 0),s([r()],c.prototype,"_tooltipsContext",null),s([r({value:!0})],c.prototype,"centered",null),s([r()],c.prototype,"cursor",null),s([r({nonNullable:!0})],c.prototype,"defaultZ",void 0),s([r({constructOnly:!0})],c.prototype,"directionOptions",void 0),s([r()],c.prototype,"drawOperation",void 0),s([r({value:!0})],c.prototype,"enabled",null),s([r({value:!0})],c.prototype,"forceUniformSize",null),s([r({constructOnly:!0})],c.prototype,"geometryType",void 0),s([r()],c.prototype,"graphic",null),s([r({constructOnly:!0})],c.prototype,"graphicProperties",void 0),s([r()],c.prototype,"graphicSymbol",null),s([r({constructOnly:!0})],c.prototype,"hasZ",void 0),s([r({constructOnly:!0})],c.prototype,"geometryToPlace",void 0),s([r()],c.prototype,"mode",null),s([r()],c.prototype,"snappingManager",void 0),s([r()],c.prototype,"snapToScene",void 0),s([r()],c.prototype,"tooltip",void 0),s([r()],c.prototype,"tooltipInfos",void 0),s([r({constructOnly:!0,type:Ot})],c.prototype,"sketchOptions",void 0),s([r()],c.prototype,"updating",null),s([r({constructOnly:!0,nonNullable:!0})],c.prototype,"view",void 0),s([r({constructOnly:!0})],c.prototype,"undoRedo",null),s([r()],c.prototype,"activeTooltipInfo",null),c=s([x("esri.views.draw.DrawGraphicTool")],c);const K=Symbol("create-operation-graphic"),m={outline:Symbol("outline-visual"),regularVertices:Symbol("regular-vertices-visual"),activeVertex:Symbol("active-vertex-visual"),activeEdge:Symbol("active-edge-visual")};function gi(t){switch(t){case"point":case"polyline":case"polygon":case"multipoint":return t;case"circle":case"rectangle":return"segment";case"mesh":return"point"}}const Xe=48;function mi(t,e){return Gt(t,e,!1)}function vi(t,e){return Gt(t,e,!0)}function Gt(t,e,i){if(t instanceof he){if(t.operation instanceof ue)return Ke(t.operation,e,i),!0;if(t.operation instanceof ye)return ti(t.operation,e,i),!0;if(t.operation instanceof ge)return ei(t.operation,e,i),!0}return!1}function Ke(t,e,i=!1){const o=i?-1:1,n=me(o*t.dx,o*t.dy,o*t.dz);ve(e.origin,e.origin,n),j(e)}function ti(t,e,i=!1){const o=i?-t.angle:t.angle;yt(e.basis1,e.basis1,gt,o),yt(e.basis2,e.basis2,gt,o),j(e)}function ei(t,e,i=!1){const o=i?1/t.factor1:t.factor1,n=i?1/t.factor2:t.factor2;mt(e.basis1,e.basis1,o),mt(e.basis2,e.basis2,n),vt(e.origin,e.origin,t.origin,t.axis1,o),vt(e.origin,e.origin,t.origin,t.axis2,n),j(e)}function fi(t,e,i,o){o||(o=le());const n=R(F.get(),t[1],-t[0]),a=R(F.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),l=R(F.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),u=F.get();e.components.forEach(y=>y.vertices.forEach(({pos:v})=>{R(u,ht(t,v),ht(n,v)),ce(a,a,u),pe(l,l,u)}));const h=1e-6,p=R(F.get(),l[0]-a[0]<h?i/2:0,l[1]-a[1]<h?i/2:0);return de(a,a,p),X(l,l,p),ut(o.basis1,t,(l[0]-a[0])/2),ut(o.basis2,n,(l[1]-a[1])/2),R(o.origin,a[0]*t[0]+a[1]*n[0],a[0]*t[1]+a[1]*n[1]),X(o.origin,o.origin,o.basis1),X(o.origin,o.origin,o.basis2),j(o),o}export{c as E,gi as F,fi as a,vi as b,mi as d};