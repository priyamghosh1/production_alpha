"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[592],{2124:(c,n,e)=>{e.d(n,{J:()=>v});var o=e(2340),l=e(7579),i=e(262),E=e(8505),t=e(5e3),a=e(520),A=e(4889);let v=(()=>{class s{constructor(r,_){this.http=r,this.errorService=_,this.BASE_API_URL=o.N.BASE_API_URL,this.pollingMemberSubject=new l.x}getAssemblyWithDistrict(){return this.http.get(this.BASE_API_URL+"/dev/assembly/allData")}getAllPersonByAssemblyId(r){return this.http.get(this.BASE_API_URL+"/person/assembly/"+r).pipe((0,i.K)(this.errorService.serverError),(0,E.b)(_=>{console.log("service ",_)}))}getAllPersonByAssemblyIdListener(){return this.pollingMemberSubject.asObservable()}}return s.\u0275fac=function(r){return new(r||s)(t.LFG(a.eN),t.LFG(A.T))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);