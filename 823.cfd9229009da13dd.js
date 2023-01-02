"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[823],{5823:(P,d,e)=>{e.r(d),e.d(d,{LoginModule:()=>A});var h=e(6895),u=e(3060),i=e(4006),x=e(3561),t=e(4650),Z=e(9366),f=e(4859),p=e(7392),c=e(3546),m=e(9549),v=e(4144);function _(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Email is required "),t.qZA())}function y(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password is required "),t.qZA())}function C(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"form",2)(1,"div",3)(2,"mat-form-field",4)(3,"mat-label")(4,"mat-icon"),t._uU(5,"email"),t.qZA(),t._uU(6," Email"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,_,2,0,"mat-error",6),t.qZA()(),t.TgZ(9,"div")(10,"span")(11,"a",7),t._uU(12,"Forgot Password?"),t.qZA()(),t.TgZ(13,"mat-form-field",4)(14,"mat-label")(15,"mat-icon"),t._uU(16,"password"),t.qZA(),t._uU(17," Password"),t.qZA(),t._UZ(18,"input",8),t.TgZ(19,"button",9),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.hide=!r.hide)}),t.TgZ(20,"mat-icon"),t._uU(21),t.qZA()(),t.YNc(22,y,2,0,"mat-error",6),t.qZA()(),t.TgZ(23,"button",10),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.login())}),t._uU(24,"Login"),t.qZA()()}if(2&n){const o=t.oxw();t.Q6J("formGroup",o.loginForm),t.xp6(8),t.Q6J("ngIf",!o.loginForm.controls.loginId.valid),t.xp6(10),t.Q6J("type",o.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide Password")("aria-pressed",o.hide),t.xp6(2),t.hij(" ",o.hide?"visibility_off":"visibility"," "),t.xp6(1),t.Q6J("ngIf",!o.loginForm.controls.loginPassword.valid)}}function w(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password is required "),t.qZA())}function L(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"form",2)(1,"div")(2,"span")(3,"a",7),t._uU(4,"Forgot Password?"),t.qZA()(),t.TgZ(5,"mat-form-field",4)(6,"mat-label")(7,"mat-icon"),t._uU(8,"password"),t.qZA(),t._uU(9," Password"),t.qZA(),t._UZ(10,"input",8),t.TgZ(11,"button",9),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.hide=!r.hide)}),t.TgZ(12,"mat-icon"),t._uU(13),t.qZA()(),t.YNc(14,w,2,0,"mat-error",6),t.qZA()(),t.TgZ(15,"button",10),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.login())}),t._uU(16,"Login"),t.qZA()()}if(2&n){const o=t.oxw();t.Q6J("formGroup",o.loginForm),t.xp6(10),t.Q6J("type",o.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide Password")("aria-pressed",o.hide),t.xp6(2),t.hij(" ",o.hide?"visibility_off":"visibility"," "),t.xp6(1),t.Q6J("ngIf",!o.loginForm.controls.loginPassword.valid)}}const b=[{path:"",component:(()=>{class n{constructor(o,s,r){this.fb=o,this.authService=s,this.router=r,this.assemblyData="",this.hide=!0;const g=this.router.getCurrentNavigation();g?.extras.state&&(this.assemblyData=g.extras.state)}ngOnInit(){this.loginForm=new i.nJ({loginId:new i.p4("",[i.kI.required,i.kI.email]),loginPassword:new i.p4("",[i.kI.required,i.kI.minLength(6)])})}login(){console.log(this.assemblyData);let o="others";""!=this.assemblyData&&(console.log(this.assemblyData.assembly.assemblyId),this.loginForm.patchValue({loginId:this.assemblyData.assembly.assemblyId}),o="admin");const r=(new x.V).appendStr(this.loginForm.value.loginPassword).end();this.authService.login({loginId:this.loginForm.value.loginId,loginPassword:r,loginType:o}).subscribe(I=>{!0===I.status&&(this.authService.isOwner()&&this.router.navigate(["/owner"]).then(l=>{}),this.authService.isDeveloper()&&this.router.navigate(["/developer"]).then(l=>{}),this.authService.isLegislativeCandidate()&&this.router.navigate(["/mp"]).then(l=>{}),this.authService.isLegendPanel()&&this.router.navigate(["/legendVolunteer"]).then(l=>{}),this.authService.isDistrictAdminPanel()&&this.router.navigate(["/districtAdminPanel"]).then(l=>{}),this.authService.isAssemblyConstituency()&&this.router.navigate(["/assemblyConstituency"]).then(l=>{}),this.authService.isBoothVolunteer()&&this.router.navigate(["/boothVolunteer"]).then(l=>{}),this.authService.isVolunteer()&&this.router.navigate(["/volunteer"]).then(l=>{}),this.authService.isPollingStationVolunteer()&&this.router.navigate(["/pollingVolunteer"]).then(l=>{}))})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(i.QS),t.Y36(Z.e),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:7,vars:2,consts:[[1,"header"],["name","loginForm",3,"formGroup",4,"ngIf"],["name","loginForm",3,"formGroup"],[1,"emailInput"],["appearance","outline",1,"full-width"],["formControlName","loginId","matInput","","placeholder","Enter email address","required",""],[4,"ngIf"],["routerLink","/auth/forgot-password",1,"aLink"],["formControlName","loginPassword","matInput","","required","",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-flat-button","","color","primary",3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"mat-card")(1,"mat-card-content")(2,"div",0)(3,"h3"),t._uU(4,"Sign Into Your Account "),t.qZA()(),t.YNc(5,C,25,7,"form",1),t.YNc(6,L,17,6,"form",1),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("ngIf",!s.assemblyData),t.xp6(1),t.Q6J("ngIf",s.assemblyData))},dependencies:[h.O5,u.yS,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,f.lW,p.Hw,c.a8,c.dn,m.TO,m.KE,m.hX,m.R9,v.Nt],styles:[".mat-card[_ngcontent-%COMP%]{max-width:600px;margin:2em auto;text-align:center;max-height:600px}.header[_ngcontent-%COMP%]{text-align:center}.full-width[_ngcontent-%COMP%]{width:80%}.forgot-password[_ngcontent-%COMP%]{padding-left:0}.email-input[_ngcontent-%COMP%]{padding-top:10px}.aLink[_ngcontent-%COMP%]{float:right;padding-right:60px;text-decoration:none}"]}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(b),u.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.ez,T,i.UX,f.ot,p.Ps,c.QW,m.lN,v.c]}),n})()}}]);