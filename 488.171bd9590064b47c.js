"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[488],{4488:(zt,x,r)=>{r.r(x),r.d(x,{AssemblyConstituencyModule:()=>jt});var p=r(6895),b=r(3060),l=r(4006),I=r(5226),m=r.n(I),w=r(3561),d=r(5239),q=r(2340),t=r(4650),U=r(3761),S=r(5683),J=r(9366),k=r(4543),O=r(4222),g=r(9549),A=r(4144),f=r(4385),C=r(3238),y=r(6709),_=r(6257),Z=r(8255),T=r(7392),N=r(4859),v=r(6186);function Q(o,i){1&o&&t._uU(0,"Fill out your name")}function M(o,i){if(1&o&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function P(o,i){if(1&o&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.pollingStationId),t.xp6(1),t.Oqu(e.pollingNumber)}}function V(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSubmit())}),t._uU(1,"Submit"),t.qZA()}}function B(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onClickBackButton())}),t._UZ(1,"i",31),t.qZA()}}function Y(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Name"),t.qZA())}function G(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Age"),t.qZA())}function F(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Gender"),t.qZA())}function H(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Email"),t.qZA())}function E(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.personName)}}function R(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.age)}}function L(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.gender)}}function D(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.email)}}function $(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tbody")(1,"tr",38),t.NdJ("dblclick",function(){const c=t.CHM(e).$implicit,a=t.oxw(2);return t.KtG(a.editVoters(c))})("click",function(){const c=t.CHM(e).$implicit,a=t.oxw(2);return t.KtG(a.getBoothVolunteerByPollingMember(c))}),t.TgZ(2,"td",39),t._uU(3),t.qZA(),t.YNc(4,E,2,1,"td",40),t.TgZ(5,"td",39),t._uU(6),t.qZA(),t.YNc(7,R,2,1,"td",40),t.YNc(8,L,2,1,"td",40),t.TgZ(9,"td",39),t._uU(10),t.qZA(),t.YNc(11,D,2,1,"td",40),t.qZA()()}if(2&o){const e=i.$implicit,n=i.index,s=t.oxw(2);t.xp6(3),t.Oqu(n+1),t.xp6(1),t.Q6J("ngIf",1==s.showName),t.xp6(2),t.Oqu(e.email),t.xp6(1),t.Q6J("ngIf",1==s.showAge),t.xp6(1),t.Q6J("ngIf",1==s.showGender),t.xp6(2),t.Oqu(e.pollingNumber),t.xp6(1),t.Q6J("ngIf",1==s.showEmail)}}function K(o,i){if(1&o&&(t.TgZ(0,"div",32)(1,"h3"),t._uU(2,"Polling Volunteer List"),t.qZA(),t.TgZ(3,"div",33)(4,"table",34)(5,"thead")(6,"tr")(7,"th",35),t._uU(8,"#"),t.qZA(),t.YNc(9,Y,2,0,"th",36),t.TgZ(10,"th",35),t._uU(11,"Email"),t.qZA(),t.YNc(12,G,2,0,"th",36),t.YNc(13,F,2,0,"th",36),t.TgZ(14,"th",35),t._uU(15,"polling Number"),t.qZA(),t.YNc(16,H,2,0,"th",36),t.qZA()(),t.YNc(17,$,12,7,"tbody",37),t.qZA()()()),2&o){const e=t.oxw();t.xp6(9),t.Q6J("ngIf",1==e.showName),t.xp6(3),t.Q6J("ngIf",1==e.showAge),t.xp6(1),t.Q6J("ngIf",1==e.showGender),t.xp6(3),t.Q6J("ngIf",1==e.showEmail),t.xp6(1),t.Q6J("ngForOf",e.PolingAgentByAssembly)}}function j(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tbody")(1,"tr",41),t.NdJ("click",function(){const c=t.CHM(e).$implicit,a=t.oxw(2);return t.KtG(a.getVolunteerByBoothVolunteer(c))}),t.TgZ(2,"td",39),t._uU(3),t.qZA(),t.TgZ(4,"td",39),t._uU(5),t.qZA(),t.TgZ(6,"td",39),t._uU(7),t.qZA(),t.TgZ(8,"td",39),t._uU(9),t.qZA(),t.TgZ(10,"td",39),t._uU(11),t.qZA(),t.TgZ(12,"td",39),t._uU(13),t.qZA(),t.TgZ(14,"td",39),t._uU(15),t.qZA()()()}if(2&o){const e=i.$implicit,n=i.index;t.xp6(3),t.Oqu(n+1),t.xp6(2),t.Oqu(e.personName),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.memberCode),t.xp6(2),t.Oqu(e.age),t.xp6(2),t.Oqu(e.gender),t.xp6(2),t.Oqu(e.pollingNumber)}}function z(o,i){if(1&o&&(t.TgZ(0,"div",32)(1,"h3"),t._uU(2,"Booth Volunteer List"),t.qZA(),t.TgZ(3,"div",33)(4,"table",34)(5,"thead")(6,"tr")(7,"th",35),t._uU(8,"#"),t.qZA(),t.TgZ(9,"th",35),t._uU(10,"Name"),t.qZA(),t.TgZ(11,"th",35),t._uU(12,"Email"),t.qZA(),t.TgZ(13,"th",35),t._uU(14,"Member code"),t.qZA(),t.TgZ(15,"th",35),t._uU(16,"Age"),t.qZA(),t.TgZ(17,"th",35),t._uU(18,"Gender"),t.qZA(),t.TgZ(19,"th",35),t._uU(20,"pollingNumber"),t.qZA()()(),t.YNc(21,j,16,7,"tbody",37),t.qZA()()()),2&o){const e=t.oxw();t.xp6(21),t.Q6J("ngForOf",e.boothVolunteerByPolingAgent)}}function X(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tbody")(1,"tr",41),t.NdJ("click",function(){const c=t.CHM(e).$implicit,a=t.oxw(2);return t.KtG(a.getVotersByVolunteer(c))}),t.TgZ(2,"td",39),t._uU(3),t.qZA(),t.TgZ(4,"td",39),t._uU(5),t.qZA(),t.TgZ(6,"td",39),t._uU(7),t.qZA(),t.TgZ(8,"td",39),t._uU(9),t.qZA(),t.TgZ(10,"td",39),t._uU(11),t.qZA()()()}if(2&o){const e=i.$implicit,n=i.index;t.xp6(3),t.Oqu(n+1),t.xp6(2),t.Oqu(e.personName),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.age),t.xp6(2),t.Oqu(e.gender)}}function W(o,i){if(1&o&&(t.TgZ(0,"div",32)(1,"h3"),t._uU(2,"Volunteer List"),t.qZA(),t.TgZ(3,"div",33)(4,"table",34)(5,"thead")(6,"tr")(7,"th",35),t._uU(8,"#"),t.qZA(),t.TgZ(9,"th",35),t._uU(10,"Name"),t.qZA(),t.TgZ(11,"th",35),t._uU(12,"Email"),t.qZA(),t.TgZ(13,"th",35),t._uU(14,"Age"),t.qZA(),t.TgZ(15,"th",35),t._uU(16,"Gender"),t.qZA()()(),t.YNc(17,X,12,5,"tbody",37),t.qZA()()()),2&o){const e=t.oxw();t.xp6(17),t.Q6J("ngForOf",e.volunteer)}}function tt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",42)(1,"div",6)(2,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showName",s.checked))}),t._uU(3,"Name"),t.qZA(),t.TgZ(4,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showMemberCode",s.checked))}),t._uU(5,"Member code"),t.qZA(),t.TgZ(6,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showGuardianName",s.checked))}),t._uU(7,"Guardian Name"),t.qZA(),t.TgZ(8,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showAge",s.checked))}),t._uU(9,"Age"),t.qZA(),t.TgZ(10,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showGender",s.checked))}),t._uU(11,"Gender"),t.qZA(),t.TgZ(12,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showPoliceStation",s.checked))}),t._uU(13,"Police Station"),t.qZA(),t.TgZ(14,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showOcupation",s.checked))}),t._uU(15,"Occupation"),t.qZA(),t.TgZ(16,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showReligion",s.checked))}),t._uU(17,"Religion"),t.qZA(),t.TgZ(18,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showEmail",s.checked))}),t._uU(19,"Email"),t.qZA(),t.TgZ(20,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showMobileOne",s.checked))}),t._uU(21,"mobile1"),t.qZA(),t.TgZ(22,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showMobileTwo",s.checked))}),t._uU(23,"mobile2"),t.qZA()(),t.TgZ(24,"div",6)(25,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showVoterId",s.checked))}),t._uU(26,"voterId"),t.qZA(),t.TgZ(27,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showPollingNumber",s.checked))}),t._uU(28,"pollingNumber"),t.qZA(),t.TgZ(29,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showPinCode",s.checked))}),t._uU(30,"Pin Code"),t.qZA(),t.TgZ(31,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showRoadNo",s.checked))}),t._uU(32,"Road No."),t.qZA(),t.TgZ(33,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showHouseNo",s.checked))}),t._uU(34,"House No."),t.qZA(),t.TgZ(35,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showPostOffice",s.checked))}),t._uU(36,"Post Office"),t.qZA(),t.TgZ(37,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showCast",s.checked))}),t._uU(38,"Cast"),t.qZA(),t.TgZ(39,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showAadharId",s.checked))}),t._uU(40,"Aadhar Id"),t.qZA(),t.TgZ(41,"mat-checkbox",43),t.NdJ("change",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.changeShowStatus("showPhoto",s.checked))}),t._uU(42,"Aadhar Id"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("checked",e.showName),t.xp6(2),t.Q6J("checked",e.showMemberCode),t.xp6(2),t.Q6J("checked",e.showGuardianName),t.xp6(2),t.Q6J("checked",e.showAge),t.xp6(2),t.Q6J("checked",e.showGender),t.xp6(2),t.Q6J("checked",e.showPoliceStation),t.xp6(2),t.Q6J("checked",e.showOcupation),t.xp6(2),t.Q6J("checked",e.showReligion),t.xp6(2),t.Q6J("checked",e.showEmail),t.xp6(2),t.Q6J("checked",e.showMobileOne),t.xp6(2),t.Q6J("checked",e.showMobileTwo),t.xp6(3),t.Q6J("checked",e.showVoterId),t.xp6(2),t.Q6J("checked",e.showPollingNumber),t.xp6(2),t.Q6J("checked",e.showPinCode),t.xp6(2),t.Q6J("checked",e.showRoadNo),t.xp6(2),t.Q6J("checked",e.showHouseNo),t.xp6(2),t.Q6J("checked",e.showPostOffice),t.xp6(2),t.Q6J("checked",e.showCast),t.xp6(2),t.Q6J("checked",e.showAadharId),t.xp6(2),t.Q6J("checked",e.showPhoto)}}function et(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Name"),t.qZA())}function ot(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Member code"),t.qZA())}function nt(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Guardian Name"),t.qZA())}function it(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Age"),t.qZA())}function st(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Gender"),t.qZA())}function ct(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Police Station"),t.qZA())}function lt(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Occupation"),t.qZA())}function rt(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Religion"),t.qZA())}function at(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Email"),t.qZA())}function ut(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"mobile1"),t.qZA())}function ht(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"mobile2"),t.qZA())}function mt(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"voterId"),t.qZA())}function dt(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Adhaar Id"),t.qZA())}function _t(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Cast"),t.qZA())}function pt(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Post Office"),t.qZA())}function gt(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"House No."),t.qZA())}function ft(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Road Name"),t.qZA())}function xt(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Pin code"),t.qZA())}function bt(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"pollingNumber"),t.qZA())}function wt(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Picture"),t.qZA())}function At(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.personName)}}function Ct(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.memberCode)}}function yt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.guardianName)}}function Zt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.age)}}function Tt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.gender)}}function Nt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.police_station)}}function vt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.occupation)}}function It(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.religion)}}function qt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.email)}}function Ut(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.mobile1)}}function St(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.mobile2)}}function Jt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.voterId)}}function kt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.aadharId)}}function Ot(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.cast)}}function Qt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.postOffice)}}function Mt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.houseNo)}}function Pt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.roadName)}}function Vt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.pinCode)}}function Bt(o,i){if(1&o&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.pollingNumber)}}function Yt(o,i){if(1&o&&(t.TgZ(0,"td",45),t._UZ(1,"img",46),t.qZA()),2&o){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("src",n.imageSrcVoter+""+e.personId+".jpg",t.LSH)}}function Gt(o,i){if(1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",39),t._uU(3),t.qZA(),t.YNc(4,At,2,1,"td",40),t.YNc(5,Ct,2,1,"td",40),t.YNc(6,yt,2,1,"td",40),t.YNc(7,Zt,2,1,"td",40),t.YNc(8,Tt,2,1,"td",40),t.YNc(9,Nt,2,1,"td",40),t.YNc(10,vt,2,1,"td",40),t.YNc(11,It,2,1,"td",40),t.YNc(12,qt,2,1,"td",40),t.YNc(13,Ut,2,1,"td",40),t.YNc(14,St,2,1,"td",40),t.YNc(15,Jt,2,1,"td",40),t.YNc(16,kt,2,1,"td",40),t.YNc(17,Ot,2,1,"td",40),t.YNc(18,Qt,2,1,"td",40),t.YNc(19,Mt,2,1,"td",40),t.YNc(20,Pt,2,1,"td",40),t.YNc(21,Vt,2,1,"td",40),t.YNc(22,Bt,2,1,"td",40),t.YNc(23,Yt,2,1,"td",44),t.qZA()()),2&o){const e=i.index,n=t.oxw(2);t.xp6(3),t.Oqu(e+1),t.xp6(1),t.Q6J("ngIf",1==n.showName),t.xp6(1),t.Q6J("ngIf",1==n.showMemberCode),t.xp6(1),t.Q6J("ngIf",1==n.showGuardianName),t.xp6(1),t.Q6J("ngIf",1==n.showAge),t.xp6(1),t.Q6J("ngIf",1==n.showGender),t.xp6(1),t.Q6J("ngIf",1==n.showPoliceStation),t.xp6(1),t.Q6J("ngIf",1==n.showOcupation),t.xp6(1),t.Q6J("ngIf",1==n.showReligion),t.xp6(1),t.Q6J("ngIf",1==n.showEmail),t.xp6(1),t.Q6J("ngIf",1==n.showMobileOne),t.xp6(1),t.Q6J("ngIf",1==n.showMobileTwo),t.xp6(1),t.Q6J("ngIf",1==n.showVoterId),t.xp6(1),t.Q6J("ngIf",1==n.showAadharId),t.xp6(1),t.Q6J("ngIf",1==n.showCast),t.xp6(1),t.Q6J("ngIf",1==n.showPostOffice),t.xp6(1),t.Q6J("ngIf",1==n.showHouseNo),t.xp6(1),t.Q6J("ngIf",1==n.showRoadNo),t.xp6(1),t.Q6J("ngIf",1==n.showPinCode),t.xp6(1),t.Q6J("ngIf",1==n.showPollingNumber),t.xp6(1),t.Q6J("ngIf",1==n.showPhoto)}}function Ft(o,i){if(1&o&&(t.TgZ(0,"div",32)(1,"h3"),t._uU(2,"Voters List"),t.qZA(),t.TgZ(3,"div",33)(4,"table",34)(5,"thead")(6,"tr")(7,"th",35),t._uU(8,"#"),t.qZA(),t.YNc(9,et,2,0,"th",36),t.YNc(10,ot,2,0,"th",36),t.YNc(11,nt,2,0,"th",36),t.YNc(12,it,2,0,"th",36),t.YNc(13,st,2,0,"th",36),t.YNc(14,ct,2,0,"th",36),t.YNc(15,lt,2,0,"th",36),t.YNc(16,rt,2,0,"th",36),t.YNc(17,at,2,0,"th",36),t.YNc(18,ut,2,0,"th",36),t.YNc(19,ht,2,0,"th",36),t.YNc(20,mt,2,0,"th",36),t.YNc(21,dt,2,0,"th",36),t.YNc(22,_t,2,0,"th",36),t.YNc(23,pt,2,0,"th",36),t.YNc(24,gt,2,0,"th",36),t.YNc(25,ft,2,0,"th",36),t.YNc(26,xt,2,0,"th",36),t.YNc(27,bt,2,0,"th",36),t.YNc(28,wt,2,0,"th",36),t.qZA()(),t.YNc(29,Gt,24,21,"tbody",37),t.qZA()()()),2&o){const e=t.oxw();t.xp6(9),t.Q6J("ngIf",1==e.showName),t.xp6(1),t.Q6J("ngIf",1==e.showMemberCode),t.xp6(1),t.Q6J("ngIf",1==e.showGuardianName),t.xp6(1),t.Q6J("ngIf",1==e.showAge),t.xp6(1),t.Q6J("ngIf",1==e.showGender),t.xp6(1),t.Q6J("ngIf",1==e.showPoliceStation),t.xp6(1),t.Q6J("ngIf",1==e.showOcupation),t.xp6(1),t.Q6J("ngIf",1==e.showReligion),t.xp6(1),t.Q6J("ngIf",1==e.showEmail),t.xp6(1),t.Q6J("ngIf",1==e.showMobileOne),t.xp6(1),t.Q6J("ngIf",1==e.showMobileTwo),t.xp6(1),t.Q6J("ngIf",1==e.showVoterId),t.xp6(1),t.Q6J("ngIf",1==e.showAadharId),t.xp6(1),t.Q6J("ngIf",1==e.showCast),t.xp6(1),t.Q6J("ngIf",1==e.showPostOffice),t.xp6(1),t.Q6J("ngIf",1==e.showHouseNo),t.xp6(1),t.Q6J("ngIf",1==e.showRoadNo),t.xp6(1),t.Q6J("ngIf",1==e.showPinCode),t.xp6(1),t.Q6J("ngIf",1==e.showPollingNumber),t.xp6(1),t.Q6J("ngIf",1==e.showPhoto),t.xp6(1),t.Q6J("ngForOf",e.votersList)}}function Ht(o,i){if(1&o&&(t.TgZ(0,"div",47)(1,"div",48)(2,"div",49),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA(),t._UZ(6,"br"),t._uU(7),t._UZ(8,"br"),t._uU(9),t._UZ(10,"br"),t._uU(11),t.qZA(),t.TgZ(12,"div",50)(13,"div"),t._uU(14),t.qZA(),t._UZ(15,"img",51),t.qZA()()),2&o){const e=i.$implicit,n=i.index,s=t.oxw();t.xp6(3),t.Oqu(n+1),t.xp6(2),t.hij("Name: ",e.personName,""),t.xp6(2),t.hij(" Guardian's Name: ",e.guardianName,""),t.xp6(2),t.AsE(" Age: ",e.age," Gender: ",e.gender,""),t.xp6(2),t.hij(" House No: ",e.houseNo," "),t.xp6(3),t.Oqu(e.voterId),t.xp6(1),t.Q6J("src",s.imageSrcVoter+""+e.personId+".jpg",t.LSH)}}let Et=(()=>{class o{constructor(e,n,s,c,a){this.areaService=e,this.pollingStationService=n,this.authService=s,this.userRegistrationService=c,this.assemblyAdminService=a,this.showBill=!1,this.isLinear=!1,this.genderList=["MALE","FEMALE","OTHERS"],this.isUpdateAble=!1,this.imageSrc="",this.imageSrcVoter="",this.imageSrcTable="",this.defaultPicture="",this.userForm=new l.nJ({id:new l.p4(null),personId:new l.p4(null,[l.kI.required]),parentId:new l.p4(null,[l.kI.required]),areaId:new l.p4(null),remark:new l.p4(null,[l.kI.required]),areaDescription:new l.p4(null,[l.kI.required]),email:new l.p4(null,[l.kI.required]),password:new l.p4(null,[l.kI.required])}),this.confirmation=["YES","NO"],this.cast=["GENERAL","ST","SC","OBC"],this.religion=["HINDUISM","CHRISTIANITY","JUDAISM","BUDDHISM","SIKHISM","SHINTO","CATHOLICISM","BAHAI FAITH","ZOROASTRIANISM","JAINISM","CONFUCIANISM","LUTHERANISM","PROTESTANTISM","TAOISM","RASTAFARI","EASTERN ORTHODOX CHURCH","SUNNI ISLAM","CHINESE FOLK RELIGION","BABISM","MODERN PAGANISM","SHIA ISLAM","WICCA","TRADITIONAL AFRICAN RELIGIONS"],this.showPhoto=!0,this.showName=!0,this.showMemberCode=!1,this.showGuardianName=!0,this.showAge=!0,this.showGender=!0,this.showPoliceStation=!1,this.showOcupation=!0,this.showReligion=!0,this.showEmail=!1,this.showMobileOne=!0,this.showMobileTwo=!1,this.showVoterId=!0,this.showAadharId=!0,this.showCast=!1,this.showPostOffice=!1,this.showHouseNo=!0,this.showRoadNo=!0,this.showPinCode=!1,this.showPollingNumber=!1,this.personForm=new l.nJ({personTypeId:new l.p4(null,[l.kI.required]),personName:new l.p4(null,[l.kI.required]),email:new l.p4(""),age:new l.p4(""),gender:new l.p4(null,[l.kI.required]),pollingStationId:new l.p4("")}),this.pollingMembers=[],this.BASE_PUBLIC_URL=q.N.BASE_PUBLIC_URL,this.boothVolunteerByPolingAgent=[],this.volunteer=[],this.votersList=[],this.showAssemblyVolunteer=!1,this.showPollingVolunteer=!0,this.showBoothVolunteer=!1,this.showVolunteer=!1,this.showVoters=!1,this.PolingAgentByAssembly=[],this.printDivStyle={printBillDiv:{marginRight:"3px",marginLeft:"3px",marginTop:"5px"},table:{"border-collapse":"collapse",width:"100%"},label:{width:"100%"},div:{border:"1px  solid black"}},this.areaService.getStateListener().subscribe(u=>{this.states=u}),this.states=this.areaService.getstate(),this.defaultPicture=this.BASE_PUBLIC_URL+"/profile_pic/no_dp.png",this.imageSrcVoter=this.BASE_PUBLIC_URL+"/voter_pic/"}ngOnInit(){this.showBill=!1,this.loggedInUser=this.authService.userBehaviorSubject.value,this.pollingStationService.getPollingStationByAssemblyId(this.loggedInUser?.assemblyConstituencyId).subscribe(e=>{this.pollingStations=e.data}),this.userRegistrationService.getPolingAgentByAssembly(this.loggedInUser.uniqueId).subscribe(e=>{this.PolingAgentByAssembly=e.data})}exportexcel(){let e=document.getElementById("excel-table");const n=d.utils.table_to_sheet(e),s=d.utils.book_new();d.utils.book_append_sheet(s,n,"Sheet1"),d.writeFile(s,"test.xlsx")}clearForms(){this.personForm.reset(),this.userForm.reset(),this.file=File,this.isUpdateAble=!1}onSubmit(){m().fire({title:"Confirmation",text:"Do you sure to create user?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(e=>{if(e.isConfirmed){const n=this.personForm.value,a=(new w.V).appendStr("1234").end(),u=new FormData;u.append("personTypeId",7),u.append("personName",n.personName),u.append("age",n.age),u.append("gender",n.gender),u.append("email",n.email),u.append("password",a),u.append("pollingStationId",n.pollingStationId),u.append("parentId",this.loggedInUser?.uniqueId),this.userRegistrationService.saveNewPollingByAssembly(u).subscribe(h=>{h.status?(this.voters=h.data,this.personForm.reset(),this.userForm.reset(),this.file=File,this.imageSrc=null,m().fire({position:"top-end",icon:"success",title:"User created",showConfirmButton:!1,timer:1e3}),this.PolingAgentByAssembly.unshift(h.data)):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},h=>{console.log(h),console.log("data saving error",h)})}})}updateMember(){m().fire({title:"Confirmation",text:"Do you sure to create user?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(e=>{if(e.isConfirmed){const n=this.personForm.value,a=(new w.V).appendStr("1234").end();this.userRegistrationService.updateExistingUser({personId:n.id,personTypeId:6,personName:n.personName,age:n.age,gender:n.gender,religion:n.religion,occupation:n.occupation,policeStation:n.policeStation,cast:n.cast,partNo:n.partNo,postOffice:n.postOffice,houseNo:n.houseNo,guardianName:n.guardianName,aadharId:n.aadharId,state:n.state,district:n.district,pinCode:n.pinCode,preferableCandidate:n.preferableCandidate,satisfiedByPresentGov:n.satisfiedByPresentGov,suggestion:n.suggestion,previousVotingHistory:n.prevVotingHistory,email:n.email,password:a,mobile1:n.mobile1,mobile2:n.mobile2,voterId:n.voterId,pollingStationId:n.pollingStationId,parentId:this.loggedInUser?.uniqueId,remark:this.userForm.value.remark,roadName:n.roadName}).subscribe(h=>{})}})}editVoters(e){this.personForm.patchValue({id:e.id,personName:e.personName,age:e.age,gender:e.gender,email:e.email,pollingStationId:e.pollingNumber,remark:e.remark}),this.imageSrc=this.imageSrcVoter+""+e.id+".jpg",this.isUpdateAble=!0}onChange(e){if(e.target.files[0].size/1024e3>2)return m().fire({position:"top-end",icon:"error",title:"Photo must be less than 2 mb",showConfirmButton:!1,timer:3e3}),void(this.file=File);this.file=e.target.files[0];var n=new FileReader;n.readAsDataURL(this.file),n.onload=s=>{this.imageSrc=n.result}}viewBill(){this.showBill=!this.showBill}changeShowStatus(e,n){this.showName="showName"===e?n:this.showName,this.showAge="showAge"===e?n:this.showAge,this.showEmail="showEmail"===e?n:this.showEmail,this.showMemberCode="showMemberCode"===e?n:this.showMemberCode,this.showGuardianName="showGuardianName"===e?n:this.showGuardianName,this.showGender="showGender"===e?n:this.showGender,this.showPoliceStation="showPoliceStation"===e?n:this.showPoliceStation,this.showOcupation="showOcupation"===e?n:this.showOcupation,this.showReligion="showReligion"===e?n:this.showReligion,this.showMobileOne="showMobileOne"===e?n:this.showMobileOne,this.showMobileTwo="showMobileTwo"===e?n:this.showMobileTwo,this.showVoterId="showVoterId"===e?n:this.showVoterId,this.showAadharId="showAadharId"===e?n:this.showAadharId,this.showCast="showCast"===e?n:this.showCast,this.showPostOffice="showPostOffice"===e?n:this.showPostOffice,this.showHouseNo="showHouseNo"===e?n:this.showHouseNo,this.showRoadNo="showRoadNo"===e?n:this.showRoadNo,this.showPinCode="showPinCode"===e?n:this.showPinCode,this.showPollingNumber="showPollingNumber"===e?n:this.showPollingNumber,this.showPhoto="showPhoto"===e?n:this.showPhoto}getBoothVolunteerByPollingMember(e){this.showBoothVolunteer=!0,this.showPollingVolunteer=!1,this.assemblyAdminService.getBoothByPolingAgent(e.id).subscribe(n=>{this.boothVolunteerByPolingAgent=n.data})}getVolunteerByBoothVolunteer(e){this.showVolunteer=!0,this.showBoothVolunteer=!1,this.assemblyAdminService.getVolunteerByBoothMember(e.userId).subscribe(n=>{this.volunteer=n.data})}getVotersByVolunteer(e){this.showVoters=!0,this.showVolunteer=!1,this.assemblyAdminService.getAllvotersByUserId(e.userId).subscribe(n=>{this.votersList=n.data})}onClickBackButton(){1==this.showAssemblyVolunteer&&(this.showAssemblyVolunteer=!1,this.showPollingVolunteer=!1,this.showBoothVolunteer=!1,this.showVolunteer=!1,this.showVoters=!1),1==this.showPollingVolunteer&&(this.showAssemblyVolunteer=!0,this.showPollingVolunteer=!1,this.showBoothVolunteer=!1,this.showVolunteer=!1,this.showVoters=!1),1==this.showBoothVolunteer&&(this.showAssemblyVolunteer=!1,this.showPollingVolunteer=!0,this.showBoothVolunteer=!1,this.showVolunteer=!1,this.showVoters=!1),1==this.showVolunteer&&(this.showAssemblyVolunteer=!1,this.showPollingVolunteer=!1,this.showBoothVolunteer=!0,this.showVolunteer=!1,this.showVoters=!1),1==this.showVoters&&(this.showAssemblyVolunteer=!1,this.showPollingVolunteer=!1,this.showBoothVolunteer=!1,this.showVolunteer=!0,this.showVoters=!1)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(U.T),t.Y36(S.u),t.Y36(J.e),t.Y36(k.p),t.Y36(O.w))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-assembly-constituency"]],decls:61,vars:17,consts:[[1,"container","pt-1",2,"background-color","rgb(255, 255, 255)","color","black !important",3,"hidden"],[2,"background-color","rgb(31, 111, 180) !important","color","black !important","border-radius","10px",3,"linear"],["stepper",""],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],[1,"d-flex"],[1,"col-9"],["appearance","fill"],["matInput","","placeholder","Last name, First name","formControlName","personName","required",""],["matInput","","placeholder","Your age","formControlName","age","required",""],["matInput","","placeholder","Email","formControlName","email","required",""],["matNativeControl","","required","","formControlName","gender"],[3,"value",4,"ngFor","ngForOf"],["matNativeControl","","required","","formControlName","pollingStationId"],[1,"fluid",2,"background-color","white","max-height","100px","margin","2%","text-align","right"],["test1","matMenu"],["type","file","name","filename",3,"disabled","change"],[1,"mr-2","bg-warning","btn",3,"click"],["type","submit","class","btn btn-info",3,"click",4,"ngIf"],["type","button","class","btn btn-light",3,"click",4,"ngIf"],["class","card",4,"ngIf"],["style","border: 2px solid white; border-radius: 5px;  background-color: rgba(27, 109, 197, 0.524); max-width: 100vw; overflow: scroll;","class","p-3 mt-2 mb-2 scroll",4,"ngIf"],["mat-stroked-button","","printSectionId","printDiv","ngxPrint","",1,"btn-primary",3,"printStyle"],["mat-stroked-button","",1,"btn-primary",3,"click"],[3,"hidden"],["id","printDiv",2,"font-size","xx-small !important"],["class","printDiv","style","border: #000000 solid; min-width: 200px; float: left !important; padding: 4px;",4,"ngFor","ngForOf"],[3,"value"],["type","submit",1,"btn","btn-info",3,"click"],["type","button",1,"btn","btn-light",3,"click"],[1,"bi-arrow-left"],[1,"card"],[1,"card-body","scroll",2,"max-width","100vw","overflow","scroll","border-radius","5px","background-color","rgba(27, 109, 197, 0.524)"],["id","excel-table",1,"table"],["scope","col",1,"text-center"],["class","text-center","scope","col",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"dblclick","click"],["scope","row",1,"text-center","pt-3"],["class","text-center pt-3","scope","row",4,"ngIf"],[3,"click"],[1,"p-3","mt-2","mb-2","scroll",2,"border","2px solid white","border-radius","5px","background-color","rgba(27, 109, 197, 0.524)","max-width","100vw","overflow","scroll"],[1,"p-1","example-margin",3,"checked","change"],["class","text-center ","scope","row","style","",4,"ngIf"],["scope","row",1,"text-center"],["loading","lazy","decoding","async","alt","",2,"height","50px","border","#e8c50e solid",3,"src"],[1,"printDiv",2,"border","#000000 solid","min-width","200px","float","left !important","padding","4px"],[1,"printDiv",2,"min-width","100px","max-width","100px !important","float","left !important","font-size","xx-small !important"],[2,"border","#000000 solid","text-align","right"],[1,"printDiv",2,"border","1px solid black !important","min-width","100px","float","left !important","text-align","right"],["alt","",2,"height","65px","width","40px","border","#000000 solid",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h3")(2,"u"),t._uU(3,"Create Polling Volunteer"),t.qZA()(),t.TgZ(4,"div")(5,"mat-stepper",1,2)(7,"mat-step",3)(8,"form",4),t.YNc(9,Q,1,0,"ng-template",5),t.TgZ(10,"div",6)(11,"div",7)(12,"div")(13,"mat-form-field",8)(14,"mat-label"),t._uU(15,"NAME"),t.qZA(),t._UZ(16,"input",9),t.qZA(),t.TgZ(17,"mat-form-field",8)(18,"mat-label"),t._uU(19,"AGE"),t.qZA(),t._UZ(20,"input",10),t.qZA()(),t.TgZ(21,"div")(22,"mat-form-field",8)(23,"mat-label"),t._uU(24,"EMAIL"),t.qZA(),t._UZ(25,"input",11),t.qZA(),t.TgZ(26,"mat-form-field",8)(27,"mat-label"),t._uU(28,"GENDER"),t.qZA(),t.TgZ(29,"mat-select",12),t.YNc(30,M,2,2,"mat-option",13),t.qZA()()(),t.TgZ(31,"div")(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"POLLING NO."),t.qZA(),t.TgZ(35,"mat-select",14),t.YNc(36,P,2,2,"mat-option",13),t.qZA()()(),t._UZ(37,"div"),t.qZA(),t.TgZ(38,"div",15)(39,"mat-menu",null,16)(41,"input",17),t.NdJ("change",function(c){return n.onChange(c)}),t.qZA()()()(),t.TgZ(42,"div")(43,"button",18),t.NdJ("click",function(){return n.clearForms()}),t._uU(44,"Clear"),t.qZA(),t.YNc(45,V,2,0,"button",19),t.qZA()()()()(),t.YNc(46,B,2,0,"button",20),t.YNc(47,K,18,5,"div",21),t.YNc(48,z,22,1,"div",21),t.YNc(49,W,18,1,"div",21),t.YNc(50,tt,43,20,"div",22),t.YNc(51,Ft,30,21,"div",21),t.qZA(),t.TgZ(52,"div")(53,"button",23)(54,"mat-icon"),t._uU(55,"print"),t.qZA()(),t.TgZ(56,"button",24),t.NdJ("click",function(){return n.exportexcel()}),t._uU(57,"Export to Excel"),t.qZA()(),t.TgZ(58,"div",25)(59,"div",26),t.YNc(60,Ht,16,8,"div",27),t.qZA()()),2&e&&(t.Q6J("hidden",n.showBill),t.xp6(5),t.Q6J("linear",n.isLinear),t.xp6(2),t.Q6J("stepControl",n.personForm),t.xp6(1),t.Q6J("formGroup",n.personForm),t.xp6(22),t.Q6J("ngForOf",n.genderList),t.xp6(6),t.Q6J("ngForOf",n.pollingStations),t.xp6(5),t.Q6J("disabled",1==n.isUpdateAble),t.xp6(4),t.Q6J("ngIf",0==n.isUpdateAble),t.xp6(1),t.Q6J("ngIf",0==n.showPollingVolunteer),t.xp6(1),t.Q6J("ngIf",1==n.showPollingVolunteer),t.xp6(1),t.Q6J("ngIf",1==n.showBoothVolunteer),t.xp6(1),t.Q6J("ngIf",1==n.showVolunteer),t.xp6(1),t.Q6J("ngIf",1==n.showVoters),t.xp6(1),t.Q6J("ngIf",1==n.showVoters),t.xp6(2),t.Q6J("printStyle",n.printDivStyle),t.xp6(5),t.Q6J("hidden",!n.showBill),t.xp6(2),t.Q6J("ngForOf",n.PolingAgentByAssembly))},dependencies:[p.sg,p.O5,l._Y,l.Fj,l.JJ,l.JL,l.Q7,g.KE,g.hX,l.sg,l.u,A.Nt,f.gD,C.ey,y.oG,_.C0,_.VY,_.Vq,Z.VK,T.Hw,N.lW,v.I],styles:[".scroll[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.scroll[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.mat-stepper-horizontal[_ngcontent-%COMP%]{margin-top:8px}.mat-mdc-form-field[_ngcontent-%COMP%]{margin-top:16px}.mat-form-field[_ngcontent-%COMP%]{padding:5px}input[_ngcontent-%COMP%]{text-transform:uppercase}"]}),o})();const Lt=[{path:"",canActivate:[r(6300).c],component:Et}];let Dt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[b.Bz.forChild(Lt),b.Bz]}),o})();var $t=r(3546),Kt=r(8796);let jt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,Dt,l.u5,g.lN,l.UX,A.c,f.LD,$t.QW,Kt.A0,y.p9,_.T5,Z.Tx,f.LD,C.Ng,T.Ps,N.ot,v.K]}),o})()}}]);