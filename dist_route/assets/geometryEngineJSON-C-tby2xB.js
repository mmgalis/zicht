import{xO as r}from"./index-BSpFFQw2.js";import{t as i}from"./json-Wa8cmqdu.js";function a(e){return r.extendedSpatialReferenceInfo(e)}function l(e,n,t){return r.clip(i,e,n,t)}function s(e,n,t){return r.cut(i,e,n,t)}function p(e,n,t){return r.contains(i,e,n,t)}function d(e,n,t){return r.crosses(i,e,n,t)}function g(e,n,t,o){return r.distance(i,e,n,t,o)}function m(e,n,t){return r.equals(i,e,n,t)}function h(e,n,t){return r.intersects(i,e,n,t)}function y(e,n,t){return r.touches(i,e,n,t)}function S(e,n,t){return r.within(i,e,n,t)}function x(e,n,t){return r.disjoint(i,e,n,t)}function D(e,n,t){return r.overlaps(i,e,n,t)}function R(e,n,t,o){return r.relate(i,e,n,t,o)}function T(e,n){return r.isSimple(i,e,n)}function b(e,n){return r.simplify(i,e,n)}function w(e,n,t=!1){return r.convexHull(i,e,n,t)}function A(e,n,t){return r.difference(i,e,n,t)}function L(e,n,t){return r.symmetricDifference(i,e,n,t)}function V(e,n,t){return r.intersect(i,e,n,t)}function v(e,n,t=null){return r.union(i,e,n,t)}function z(e,n,t,o,c,u,f){return r.offset(i,e,n,t,o,c,u,f)}function _(e,n,t,o,c=!1){return r.buffer(i,e,n,t,o,c)}function j(e,n,t,o,c,u,f){return r.geodesicBuffer(i,e,n,t,o,c,u,f)}function E(e,n,t,o=!0){return r.nearestCoordinate(i,e,n,t,o)}function H(e,n,t){return r.nearestVertex(i,e,n,t)}function I(e,n,t,o,c){return r.nearestVertices(i,e,n,t,o,c)}function O(e,n,t,o){if(n==null||o==null)throw new Error("Illegal Argument Exception");const c=r.rotate(n,t,o);return c.spatialReference=e,c}function P(e,n,t){if(n==null||t==null)throw new Error("Illegal Argument Exception");const o=r.flipHorizontal(n,t);return o.spatialReference=e,o}function q(e,n,t){if(n==null||t==null)throw new Error("Illegal Argument Exception");const o=r.flipVertical(n,t);return o.spatialReference=e,o}function B(e,n,t,o,c){return r.generalize(i,e,n,t,o,c)}function C(e,n,t,o){return r.densify(i,e,n,t,o)}function M(e,n,t,o,c=0){return r.geodesicDensify(i,e,n,t,o,c)}function $(e,n,t){return r.planarArea(i,e,n,t)}function G(e,n,t){return r.planarLength(i,e,n,t)}function J(e,n,t,o){return r.geodesicArea(i,e,n,t,o)}function N(e,n,t,o){return r.geodesicLength(i,e,n,t,o)}function k(e,n,t){return n==null||t==null?[]:r.intersectLinesToPoints(i,e,n,t)}function F(e,n){r.changeDefaultSpatialReferenceTolerance(e,n)}function K(e){r.clearDefaultSpatialReferenceTolerance(e)}const W=Object.freeze(Object.defineProperty({__proto__:null,buffer:_,changeDefaultSpatialReferenceTolerance:F,clearDefaultSpatialReferenceTolerance:K,clip:l,contains:p,convexHull:w,crosses:d,cut:s,densify:C,difference:A,disjoint:x,distance:g,equals:m,extendedSpatialReferenceInfo:a,flipHorizontal:P,flipVertical:q,generalize:B,geodesicArea:J,geodesicBuffer:j,geodesicDensify:M,geodesicLength:N,intersect:V,intersectLinesToPoints:k,intersects:h,isSimple:T,nearestCoordinate:E,nearestVertex:H,nearestVertices:I,offset:z,overlaps:D,planarArea:$,planarLength:G,relate:R,rotate:O,simplify:b,symmetricDifference:L,touches:y,union:v,within:S},Symbol.toStringTag,{value:"Module"})),X=Object.freeze(Object.defineProperty({__proto__:null,buffer:_,changeDefaultSpatialReferenceTolerance:F,clearDefaultSpatialReferenceTolerance:K,clip:l,contains:p,convexHull:w,crosses:d,cut:s,densify:C,difference:A,disjoint:x,distance:g,equals:m,extendedSpatialReferenceInfo:a,flipHorizontal:P,flipVertical:q,generalize:B,geodesicArea:J,geodesicBuffer:j,geodesicDensify:M,geodesicLength:N,intersect:V,intersectLinesToPoints:k,intersects:h,isSimple:T,nearestCoordinate:E,nearestVertex:H,nearestVertices:I,offset:z,overlaps:D,planarArea:$,planarLength:G,relate:R,rotate:O,simplify:b,symmetricDifference:L,touches:y,union:v,within:S},Symbol.toStringTag,{value:"Module"}));export{W as O,X as g};