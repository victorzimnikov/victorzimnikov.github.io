"use strict";(self["webpackChunkfrrid"]=self["webpackChunkfrrid"]||[]).push([[371],{3747:function(e,t,o){o.d(t,{HW:function(){return u}});var s=o(8741);const r="dd.MM.yyyy";function a(e){return e instanceof Date?s.ou.fromJSDate(e).setLocale("ru"):"string"===typeof e?s.ou.fromISO(e).setLocale("ru"):e.setLocale("ru")}function u({date:e,format:t=r}){if(!e)return"";const o=a(e);return o.toFormat(t)}},7787:function(e,t,o){o.r(t),o.d(t,{default:function(){return D}});var s=o(3396),r=o(9242);function a(e,t,o,a,u,n){const i=(0,s.up)("FormsHeader"),c=(0,s.up)("VTabs"),h=(0,s.up)("GeneralForm"),m=(0,s.up)("AuthorsForm"),l=(0,s.up)("ResourcesForm"),d=(0,s.up)("DatesForm"),F=(0,s.up)("DisclosureForm"),p=(0,s.up)("OrganizationsForm"),S=(0,s.up)("TechnologyForm"),g=(0,s.up)("SourceCodeForm"),T=(0,s.up)("DescriptionForm"),y=(0,s.up)("AddedModal"),f=(0,s.up)("GeneralPositionModal"),w=(0,s.up)("CompleteModal"),b=(0,s.up)("ItemPageFooter"),C=(0,s.up)("AppLayout");return(0,s.wg)(),(0,s.j4)(C,{class:"item-page"},(0,s.Nv)({default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"item-page__forms-header","form-id":n.itemId},null,8,["form-id"]),(0,s.Wm)(c,{items:n.tabsItems,"current-tab":n.currentTab,onChange:n.changeCurrentTab},null,8,["items","current-tab","onChange"]),(0,s.Wm)(r.uT,{name:"item-page__forms",mode:"out-in"},{default:(0,s.w5)((()=>["general"===n.currentTab?((0,s.wg)(),(0,s.j4)(h,{key:0})):"authors"===n.currentTab?((0,s.wg)(),(0,s.j4)(m,{key:1,onSuccess:t[0]||(t[0]=e=>u.showSuccess=!0)})):"resources"===n.currentTab?((0,s.wg)(),(0,s.j4)(l,{key:2,onSuccess:t[1]||(t[1]=e=>u.showSuccess=!0)})):"keyDates"===n.currentTab?((0,s.wg)(),(0,s.j4)(d,{key:3})):"disclosure"===n.currentTab?((0,s.wg)(),(0,s.j4)(F,{key:4})):"organizations"===n.currentTab?((0,s.wg)(),(0,s.j4)(p,{key:5,onSuccess:t[2]||(t[2]=e=>u.showSuccess=!0)})):"technology"===n.currentTab&&n.isTechType?((0,s.wg)(),(0,s.j4)(S,{key:6})):"source-code"!==n.currentTab||n.isTechType?"description"!==n.currentTab||n.isTechType?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(T,{key:8})):((0,s.wg)(),(0,s.j4)(g,{key:7}))])),_:1}),(0,s.Wm)(y,{show:u.showSuccess},null,8,["show"]),(0,s.Wm)(f,{onSubmit:n.onSubmit,show:u.showGeneralPosition,onClose:t[3]||(t[3]=e=>u.showGeneralPosition=!1)},null,8,["onSubmit","show"]),(0,s.Wm)(w,{show:u.showComplete},null,8,["show"])])),_:2},[e.hasEditForms?{name:"footer",fn:(0,s.w5)((()=>[(0,s.Wm)(b,{complete:n.completed,onSend:t[4]||(t[4]=e=>u.showGeneralPosition=!0)},null,8,["complete"])]))}:void 0]),1024)}var u=o(6623),n=o(1086),i=o(7168),c=o(2026),h=o(7382),m=o(9879),l=o(5518),d=o(3833),F=o(4670),p=o(6875),S=o(9002),g=o(4455),T=o(5672),y=o(132),f=o(2383),w=o(3145),b=o(3017),C=o(1016),L={name:"ItemView",components:{SourceCodeForm:C.Z,DescriptionForm:b.Z,VTabs:n.Z,DatesForm:c.Z,AppLayout:i.Z,AddedModal:h.Z,AuthorsForm:d.Z,FormsHeader:l.Z,GeneralForm:m.Z,ResourcesForm:p.Z,CompleteModal:F.Z,DisclosureForm:g.Z,TechnologyForm:T.Z,ItemPageFooter:S.Z,OrganizationsForm:f.Z,GeneralPositionModal:y.Z},computed:{...(0,u.Se)("i18n",["localize"]),...(0,u.Se)("application",["getToken"]),...(0,u.Se)("formInfo",["getFormType","hasEditForms"]),...(0,u.Se)("general",{generalFormStatus:"getFormStatus"}),...(0,u.Se)("authors",{authorsFormStatus:"getFormStatus"}),...(0,u.Se)("dates",{datesFormStatus:"getFormStatus"}),...(0,u.Se)("technology",{technologyFormStatus:"getFormStatus"}),...(0,u.Se)("description",{descriptionFormStatus:"getFormStatus"}),...(0,u.Se)("organizations",{organizationsFormStatus:"getFormStatus"}),...(0,u.Se)("disclosure",{disclosureFormStatus:"getFormStatus"}),...(0,u.Se)("resources",{resourcesFormStatus:"getFormStatus"}),itemId(){const e=Number(this.$route.params.id);return Number.isNaN(e)||0===e?w.PX.Draft:e},currentTab(){return this.$route.query.tab||"general"},completed(){const e=this.generalFormStatus===w.f1.Filled,t=this.authorsFormStatus===w.f1.Filled,o=this.datesFormStatus===w.f1.Filled,s=this.technologyFormStatus===w.f1.Filled,r=this.organizationsFormStatus===w.f1.Filled,a=this.disclosureFormStatus===w.f1.Filled,u=this.resourcesFormStatus===w.f1.Filled,n=!!this.isTechType||this.descriptionFormStatus===w.f1.Filled;return o&&e&&t&&u&&a&&s&&r&&n},tabStatuses(){return{[w.hL.KeyDates]:this.datesFormStatus,[w.hL.General]:this.generalFormStatus,[w.hL.Authors]:this.authorsFormStatus,[w.hL.Resources]:this.resourcesFormStatus,[w.hL.Technology]:this.technologyFormStatus,[w.hL.Disclosure]:this.disclosureFormStatus,[w.hL.SourceCode]:this.technologyFormStatus,[w.hL.Description]:this.descriptionFormStatus,[w.hL.Organizations]:this.organizationsFormStatus}},isTechType(){return this.getFormType===w.hM.Tech},tabsItems(){let e=w.O8.map((e=>({...e,title:this.localize[e.title].text}))).slice();return this.isTechType?e.splice(w.O8.length-2,2):e.splice(w.O8.length-3,1),e.map((e=>({...e,status:this.tabStatuses[e.key]||w.f1.NotFilled})))}},data(){return{showSuccess:!1,showComplete:!1,showGeneralPosition:!1}},watch:{showSuccess(e,t){if(e!==t){const e=setTimeout((()=>{this.showSuccess=!1,clearTimeout(e)}),2e3)}},isTechType(e,t){e===t||this.currentTab!==w.hL.Description&&this.currentTab!==w.hL.SourceCode?e!==t&&this.currentTab===w.hL.Technology&&this.changeCurrentTab(w.hL.SourceCode):this.changeCurrentTab(w.hL.Technology)},showComplete(e,t){if(e&&!t){const e=setTimeout((()=>{this.showComplete=!1,clearTimeout(e)}),2e3)}}},methods:{...(0,u.nv)("authors",["getAuthors"]),changeCurrentTab(e){this.$router.replace({...this.$route,query:{tab:e}})},onSubmit(){this.showGeneralPosition=!1,this.showComplete=!0}},mounted(){this.getToken||this.$router.replace("/"),this.getAuthors()}},k=o(89);const Z=(0,k.Z)(L,[["render",a],["__scopeId","data-v-1daa1544"]]);var D=Z}}]);
//# sourceMappingURL=item-77a3c2a6.7302b9b3.js.map