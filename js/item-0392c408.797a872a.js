"use strict";(self["webpackChunkfrrid"]=self["webpackChunkfrrid"]||[]).push([[530],{2285:function(e,t,o){o.d(t,{k:function(){return r}});var a=o(2756),l=o.n(a),i=o(9761),n=o.n(i);function s(e){return l()(e,n())}function r(e){const t=!e.date,o=!e.russianName,a=!e.englishName,l=!e.projectNumber,i=!e.contractNumber,n=!e.russianFullName,r=!e.englishFullName;return s({date:t?"Введите дату договора":void 0,projectNumber:l?"Введите номер проекта":void 0,contractNumber:i?"Введите номер контракта":void 0,russianName:o?"Введите название проекта на русском языке":void 0,englishName:a?"Введите название проекта на английском языке":void 0,englishFullName:r?"Введите полное наименование лица на английском языке":void 0,russianFullName:n?"Введите полное наименование лица на английском языке":void 0})}},3747:function(e,t,o){o.d(t,{HW:function(){return n}});var a=o(8741);const l="dd.MM.yyyy";function i(e){return e instanceof Date?a.ou.fromJSDate(e).setLocale("ru"):"string"===typeof e?a.ou.fromISO(e).setLocale("ru"):e.setLocale("ru")}function n({date:e,format:t=l}){if(!e)return"";const o=i(e);return o.toFormat(t)}},9294:function(e,t,o){function a(e=""){const t=e.trim();if("+"===t||"+7"===t||"+7 ("===t)return t;if("7"===t||"8"===t)return"+7";const o=t.replace(/\D/g,"").slice(0,12),a=o.replace(/\D/g,"").replace(/^\+?([78])?/,"").match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);if(a){if(a[1]&&!a[2])return`+7 (${a[1]}`;if(a[2]){const e=a.slice(2,5).filter(Boolean).join("-");return`+7 (${a[1]}) ${e}`}return""}return t}function l(e=""){const t=e.trim(),o=t.replace(/\D/g,"").match(/^(\d{0,3})(\d{0,3})$/);return o?[o[1],o[2]&&"-",o[2]].filter(Boolean).join(""):""}o.d(t,{X:function(){return l},Y:function(){return a}})},7130:function(e,t,o){o.d(t,{Z:function(){return M}});var a=o(3396),l=o(7139);const i={class:"row mb-5"},n={class:"col"},s={class:"col"},r={class:"row mb-5"},u={class:"col"},c={class:"col"},d={class:"row mb-5"},m={class:"col"},p={class:"container"},g={class:"row"},h={class:"col"},f={class:"row"},w={class:"col"},v={class:"col d-flex flex-column"},_={class:"container d-flex flex-column flex-fill"},y={class:"row"},k={class:"col"},b=(0,a.Uk)("Единицы "),D=(0,a.Uk)("Предоставьте, пожалуйста, активную ссылку или отдельный документ c исходным кодом Программы для ЭВМ в виде текста и, если возможно, со скриншотами., а также исполняемый файл Программы для ЭВМ. "),x={class:"row flex-fill d-flex"},z={class:"col d-flex align-items-center pt-3"},P={key:1,class:"row mb-5"},V={class:"col"},W={class:"col"},F={key:3,class:"row mb-5"},U={class:"col"},C={class:"col"},I={key:5,class:"row mb-5"},T={class:"col"},Z={class:"col"};function S(e,t,o,S,R,B){const $=(0,a.up)("VTypography"),N=(0,a.up)("PopoverContent"),j=(0,a.up)("TypographyWithInfo"),L=(0,a.up)("TextInput"),E=(0,a.up)("RadioGroup"),q=(0,a.up)("FormsContainer");return(0,a.wg)(),(0,a.j4)(q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(j,{"font-weight":"heavy","font-style":"header-1",class:"mb-5","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDesc.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDesc.text)+" ",1)])),_:1}),(0,a.Wm)(j,{"font-weight":"medium","font-style":"text-1",class:"mb-1","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescGeneral.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescGeneral.text)+" ",1)])),_:1}),(0,a._)("div",i,[(0,a._)("div",n,[(0,a.Wm)(L,{modelValue:B.russianDescriptionProgram,"onUpdate:modelValue":t[0]||(t[0]=e=>B.russianDescriptionProgram=e),placeholder:e.localize.commonFormPlaceholderRus.text},null,8,["modelValue","placeholder"])]),(0,a._)("div",s,[(0,a.Wm)(L,{modelValue:B.englishDescriptionProgram,"onUpdate:modelValue":t[1]||(t[1]=e=>B.englishDescriptionProgram=e),placeholder:e.localize.commonFormPlaceholderEng.text},null,8,["modelValue","placeholder"])])]),(0,a.Wm)(j,{"font-weight":"medium","font-style":"text-1",class:"mb-1","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescProgramLanguages.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescProgramLanguages.text)+" ",1)])),_:1}),(0,a._)("div",r,[(0,a._)("div",u,[(0,a.Wm)(L,{modelValue:B.russianProgramLanguage,"onUpdate:modelValue":t[2]||(t[2]=e=>B.russianProgramLanguage=e),placeholder:e.localize.commonFormPlaceholderRus.text},null,8,["modelValue","placeholder"])]),(0,a._)("div",c,[(0,a.Wm)(L,{modelValue:B.englishProgramLanguage,"onUpdate:modelValue":t[3]||(t[3]=e=>B.englishProgramLanguage=e),placeholder:e.localize.commonFormPlaceholderEng.text},null,8,["modelValue","placeholder"])])]),(0,a._)("div",d,[(0,a._)("div",m,[(0,a._)("div",p,[(0,a._)("div",g,[(0,a._)("div",h,[(0,a.Wm)(j,{"font-weight":"medium","font-style":"text-1",class:"mb-1","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescSize.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescSize.text)+" ",1)])),_:1})])]),(0,a._)("div",f,[(0,a._)("div",w,[(0,a.Wm)(L,{multiline:!1,modelValue:B.programSize,"onUpdate:modelValue":t[4]||(t[4]=e=>B.programSize=e),maxlength:10,type:"number"},null,8,["modelValue"])])])])]),(0,a._)("div",v,[(0,a._)("div",_,[(0,a._)("div",y,[(0,a._)("div",k,[(0,a.Wm)(j,{"font-weight":"medium","font-style":"text-1",class:"mb-1","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[D])),_:1})])),_:1})])),default:(0,a.w5)((()=>[b])),_:1})])]),(0,a._)("div",x,[(0,a._)("div",z,[(0,a.Wm)(E,{modelValue:B.programSizeUnit,"onUpdate:modelValue":t[5]||(t[5]=e=>B.programSizeUnit=e),items:[{key:"kb",title:"кБ"},{key:"mb",title:"МБ"}]},null,8,["modelValue"])])])])])]),(0,a.Wm)(j,{"font-weight":"medium","font-style":"text-1",class:"mb-1","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkOriginalQst.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkOriginalQst.text)+" ",1)])),_:1}),(0,a.Wm)(E,{modelValue:B.modifiedStatus,"onUpdate:modelValue":t[6]||(t[6]=e=>B.modifiedStatus=e),class:"mb-5",items:[{key:"original",title:e.localize.tabDescBlkOriginalQstOriginal.text},{key:"modified",title:e.localize.tabDescBlkOriginalQstModified.text}]},null,8,["modelValue","items"]),"modified"===B.modifiedStatus?((0,a.wg)(),(0,a.j4)(j,{key:0,"font-weight":"medium","font-style":"text-1",class:"mb-1","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkOriginalQstLastVersion.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkOriginalQstLastVersion.text)+" ",1)])),_:1})):(0,a.kq)("",!0),"modified"===B.modifiedStatus?((0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",V,[(0,a.Wm)(L,{modelValue:B.russianRegisterNumber,"onUpdate:modelValue":t[7]||(t[7]=e=>B.russianRegisterNumber=e),placeholder:e.localize.commonFormPlaceholderRus.text},null,8,["modelValue","placeholder"])]),(0,a._)("div",W,[(0,a.Wm)(L,{modelValue:B.englishRegisterNumber,"onUpdate:modelValue":t[8]||(t[8]=e=>B.englishRegisterNumber=e),placeholder:e.localize.commonFormPlaceholderEng.text},null,8,["modelValue","placeholder"])])])):(0,a.kq)("",!0),(0,a.Wm)(j,{"font-weight":"heavy",class:"mb-5"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:684},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkPersonalData.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkPersonalData.text)+" ",1)])),_:1}),(0,a.Wm)(j,{"font-weight":"medium","font-style":"text-1",class:"mb-1","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkPersonalDataQst.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkPersonalDataQst.text)+" ",1)])),_:1}),(0,a.Wm)(E,{modelValue:B.usesPersonalData,"onUpdate:modelValue":t[9]||(t[9]=e=>B.usesPersonalData=e),class:"mb-5",items:[{key:!0,title:e.localize.commonFormYes.text},{key:!1,title:e.localize.commonFormNo.text}]},null,8,["modelValue","items"]),B.usesPersonalData?((0,a.wg)(),(0,a.j4)(j,{key:2,"font-weight":"medium","font-style":"text-1",class:"mb-1","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkPersonalDataWhichData.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkPersonalDataWhichData.text)+" ",1)])),_:1})):(0,a.kq)("",!0),B.usesPersonalData?((0,a.wg)(),(0,a.iD)("div",F,[(0,a._)("div",U,[(0,a.Wm)(L,{modelValue:B.russianPersonalData,"onUpdate:modelValue":t[10]||(t[10]=e=>B.russianPersonalData=e),placeholder:e.localize.commonFormPlaceholderRus.text},null,8,["modelValue","placeholder"])]),(0,a._)("div",C,[(0,a.Wm)(L,{modelValue:B.englishPersonalData,"onUpdate:modelValue":t[11]||(t[11]=e=>B.englishPersonalData=e),placeholder:e.localize.commonFormPlaceholderEng.text},null,8,["modelValue","placeholder"])])])):(0,a.kq)("",!0),B.usesPersonalData?((0,a.wg)(),(0,a.j4)(j,{key:4,"font-weight":"medium","font-style":"text-1",class:"mb-1","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(N,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)($,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkPersonalDataForWhat.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescBlkPersonalDataForWhat.text)+" ",1)])),_:1})):(0,a.kq)("",!0),B.usesPersonalData?((0,a.wg)(),(0,a.iD)("div",I,[(0,a._)("div",T,[(0,a.Wm)(L,{modelValue:B.russianPersonalDataTarget,"onUpdate:modelValue":t[12]||(t[12]=e=>B.russianPersonalDataTarget=e),placeholder:e.localize.commonFormPlaceholderRus.text},null,8,["modelValue","placeholder"])]),(0,a._)("div",Z,[(0,a.Wm)(L,{modelValue:B.englishPersonalDataTarget,"onUpdate:modelValue":t[13]||(t[13]=e=>B.englishPersonalDataTarget=e),placeholder:e.localize.commonFormPlaceholderEng.text},null,8,["modelValue","placeholder"])])])):(0,a.kq)("",!0)])),_:1})}var R=o(6623),B=o(894),$=o(6903),N=o(4413),j=o(8110),L=o(8331),E=o(8141),q={name:"DescriptionForm",components:{TextInput:B.Z,RadioGroup:$.Z,VTypography:N.Z,PopoverContent:L.Z,FormsContainer:j.Z,TypographyWithInfo:E.Z},computed:{...(0,R.Se)("i18n",["localize"]),...(0,R.Se)("description",["getRussianDescriptionProgram","getEnglishDescriptionProgram","getRussianProgramLanguage","getEnglishProgramLanguage","getProgramSize","getProgramSizeUnit","getModifiedStatus","getRussianRegisterNumber","getEnglishRegisterNumber","getUsesPersonalData","getRussianPersonalData","getEnglishPersonalData","getRussianPersonalDataTarget","getEnglishPersonalDataTarget"]),russianDescriptionProgram:{get(){return this.getRussianDescriptionProgram},set(e){this.changeRussianDescriptionProgram(e)}},englishDescriptionProgram:{get(){return this.getEnglishDescriptionProgram},set(e){this.changeEnglishDescriptionProgram(e)}},russianProgramLanguage:{get(){return this.getRussianProgramLanguage},set(e){this.changeRussianProgramLanguage(e)}},englishProgramLanguage:{get(){return this.getEnglishProgramLanguage},set(e){this.changeEnglishProgramLanguage(e)}},russianRegisterNumber:{get(){return this.getRussianRegisterNumber},set(e){this.changeRussianRegisterNumber(e)}},englishRegisterNumber:{get(){return this.getEnglishRegisterNumber},set(e){this.changeEnglishRegisterNumber(e)}},russianPersonalData:{get(){return this.getRussianPersonalData},set(e){this.changeRussianPersonalData(e)}},englishPersonalData:{get(){return this.getEnglishPersonalData},set(e){this.changeEnglishPersonalData(e)}},russianPersonalDataTarget:{get(){return this.getRussianPersonalDataTarget},set(e){this.changeRussianPersonalDataTarget(e)}},englishPersonalDataTarget:{get(){return this.getEnglishPersonalDataTarget},set(e){this.changeEnglishPersonalDataTarget(e)}},programSize:{get(){return this.getProgramSize},set(e){this.changeProgramSize(e)}},programSizeUnit:{get(){return this.getProgramSizeUnit},set(e){this.changeProgramSizeUnit(e)}},modifiedStatus:{get(){return this.getModifiedStatus},set(e){this.changeModifiedStatus(e)}},usesPersonalData:{get(){return this.getUsesPersonalData},set(e){this.changeUsesPersonalData(e)}}},data(){return{loading:!1}},methods:{...(0,R.OI)("description",["changeRussianDescriptionProgram","changeEnglishDescriptionProgram","changeRussianProgramLanguage","changeEnglishProgramLanguage","changeProgramSize","changeProgramSizeUnit","changeModifiedStatus","changeRussianRegisterNumber","changeEnglishRegisterNumber","changeUsesPersonalData","changeRussianPersonalData","changeEnglishPersonalData","changeRussianPersonalDataTarget","changeEnglishPersonalDataTarget"])}},K=o(89);const O=(0,K.Z)(q,[["render",S],["__scopeId","data-v-03aa82ab"]]);var M=O},2134:function(e,t,o){o.d(t,{Z:function(){return w}});var a=o(3396),l=o(7139);const i={key:0,class:"d-flex flex-column mb-5"};function n(e,t,o,n,s,r){const u=(0,a.up)("VTypography"),c=(0,a.up)("PopoverContent"),d=(0,a.up)("TypographyWithInfo"),m=(0,a.up)("TechnologyFileItem"),p=(0,a.up)("FilePicker"),g=(0,a.up)("FormsContainer");return(0,a.wg)(),(0,a.j4)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{"font-weight":"heavy","font-style":"header-1",class:"mb-5","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(c,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabSourceTitle.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabSourceTitle.text)+" ",1)])),_:1}),(0,a.Wm)(d,{"font-weight":"heavy",class:"mb-5"},{popover:(0,a.w5)((()=>[(0,a.Wm)(c,{width:350},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabSourceFormDownloadFiles.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabSourceFormDownloadFiles.text)+" ",1)])),_:1}),e.files.length>0?((0,a.wg)(),(0,a.iD)("div",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.files,((e,t)=>((0,a.wg)(),(0,a.j4)(m,{file:e,key:e.name,onDelete:e=>r.onDeleteClick(t),class:"source-code-form__file-item"},null,8,["file","onDelete"])))),128))])):(0,a.kq)("",!0),(0,a.Wm)(u,{class:"mb-1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.commonFormDownloadFiles.text),1)])),_:1}),(0,a.Wm)(p,{"file-formats":["doc","docx","pdf"],"file-limits":"5 мб",loading:s.loading,onChange:r.onFilesSelected},null,8,["loading","onChange"])])),_:1})}var s=o(6623),r=o(3841),u=o(4413),c=o(8110),d=o(8331),m=o(8141),p=o(4036),g={name:"SourceCodeForm",components:{FilePicker:r.Z,VTypography:u.Z,PopoverContent:d.Z,FormsContainer:c.Z,TechnologyFileItem:p.Z,TypographyWithInfo:m.Z},computed:{...(0,s.Se)("i18n",["localize"]),...(0,s.Se)("technology",{files:"getFiles"})},data(){return{loading:!1}},methods:{...(0,s.OI)("technology",["removeFile"]),...(0,s.nv)("technology",["uploadFiles"]),onDeleteClick(e){this.removeFile(e)},onFilesSelected(e){this.loading=!0,this.uploadFiles(e).finally((()=>{this.loading=!1}))}}},h=o(89);const f=(0,h.Z)(g,[["render",n],["__scopeId","data-v-67558ca4"]]);var w=f},4036:function(e,t,o){o.d(t,{Z:function(){return g}});var a=o(3396),l=o(7139);const i={class:"d-flex align-items-center technology-file-item"},n={class:"d-flex flex-fill technology-file-item__title-container"};function s(e,t,o,s,r,u){const c=(0,a.up)("FileIcon"),d=(0,a.up)("VTypography"),m=(0,a.up)("DeleteButton");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(c),(0,a._)("div",n,[(0,a.Wm)(d,{"font-weight":"medium",class:(0,l.C_)(u.titleClasses)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(u.fileName.name),1)])),_:1},8,["class"]),u.fileName.ext?((0,a.wg)(),(0,a.j4)(d,{key:0,class:(0,l.C_)(["flex-fill technology-file-item__ext",u.titleClasses]),"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(u.fileName.ext),1)])),_:1},8,["class"])):(0,a.kq)("",!0)]),o.disabled?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:0,onMouseenter:t[0]||(t[0]=e=>r.focus=!0),onMouseleave:t[1]||(t[1]=e=>r.focus=!1),onClick:t[2]||(t[2]=t=>e.$emit("delete"))}))])}var r=o(7365),u=o(4413),c=o(8812),d={name:"TechnologyFileItem",components:{DeleteButton:c.Z,FileIcon:r.Z,VTypography:u.Z},emits:{delete:Function},props:{disabled:Boolean,file:{type:Object,require:!0}},data(){return{focus:!1}},computed:{titleClasses(){return{"technology-file-item__title--focus":this.focus}},fileName(){const e=this.file?.name.lastIndexOf(".");if(e>=0){const t=this.file?.name.length>24,o=this.file?.name.substring(e+1),a=this.file?.name.substring(0,Math.min(e,24));return{ext:o,name:[a,t&&"...",!!o&&"."].filter(Boolean).join("")}}return{name:"Без имени"}}}},m=o(89);const p=(0,m.Z)(d,[["render",s],["__scopeId","data-v-1bcf5396"]]);var g=p},6172:function(e,t,o){o.d(t,{Z:function(){return w}});var a=o(3396),l=o(7139);const i={key:0,class:"d-flex flex-column mb-5"};function n(e,t,o,n,s,r){const u=(0,a.up)("VTypography"),c=(0,a.up)("PopoverContent"),d=(0,a.up)("TypographyWithInfo"),m=(0,a.up)("TechnologyFileItem"),p=(0,a.up)("FilePicker"),g=(0,a.up)("FormsContainer");return(0,a.wg)(),(0,a.j4)(g,{class:"technology-form"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{"font-weight":"heavy","font-style":"header-1",class:"mb-5","popover-position":"bottom-right"},{popover:(0,a.w5)((()=>[(0,a.Wm)(c,{width:926},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescTechnologyTitle.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescTechnologyTitle.text)+" ",1)])),_:1}),(0,a.Wm)(d,{"font-weight":"heavy",class:"mb-5"},{popover:(0,a.w5)((()=>[(0,a.Wm)(c,{width:350},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescTechnologyFormDownloadFiles.prompt),1)])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.tabDescTechnologyFormDownloadFiles.text)+" ",1)])),_:1}),e.files.length>0?((0,a.wg)(),(0,a.iD)("div",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.files,((t,o)=>((0,a.wg)(),(0,a.j4)(m,{file:t,key:t.name,disabled:!e.isEditableStatus,onDelete:e=>r.onDeleteClick(o),class:"technology-form__file-item"},null,8,["file","disabled","onDelete"])))),128))])):(0,a.kq)("",!0),(0,a.Wm)(u,{class:"mb-1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.commonFormDownloadFiles.text),1)])),_:1}),(0,a.Wm)(p,{"file-formats":["doc","docx","pdf","xls","xlsx","zip","rar","jpg","png"],"file-limits":"100 мб",loading:s.loading,disabled:!e.isEditableStatus,onChange:r.onFilesSelected},null,8,["loading","disabled","onChange"])])),_:1})}var s=o(6623),r=o(3841),u=o(4413),c=o(8110),d=o(8331),m=o(8141),p=o(4036),g={name:"TechnologyForm",components:{FilePicker:r.Z,VTypography:u.Z,PopoverContent:d.Z,FormsContainer:c.Z,TechnologyFileItem:p.Z,TypographyWithInfo:m.Z},computed:{...(0,s.Se)("i18n",["localize"]),...(0,s.Se)("formInfo",["isEditableStatus"]),...(0,s.Se)("technology",{files:"getFiles"})},data(){return{loading:!1}},methods:{...(0,s.OI)("technology",["removeFile"]),...(0,s.nv)("technology",["uploadFiles"]),onDeleteClick(e){this.removeFile(e)},onFilesSelected(e){this.loading=!0,this.uploadFiles(e).finally((()=>{this.loading=!1}))}}},h=o(89);const f=(0,h.Z)(g,[["render",n],["__scopeId","data-v-3a001d1b"]]);var w=f},6604:function(e,t,o){o.d(t,{Z:function(){return p}});var a=o(3396),l=o(7139);const i={class:"d-flex align-items-center v-checkbox"},n={class:"v-checkbox__content"};function s(e,t,o,s,r,u){const c=(0,a.up)("CheckIcon"),d=(0,a.up)("VButton");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(d,{class:(0,l.C_)(["me-1 v-checkbox__square",{"v-checkbox__square--checked":o.modelValue}]),onClick:t[0]||(t[0]=t=>e.$emit("update:modelValue",!o.modelValue))},{default:(0,a.w5)((()=>[(0,a.Wm)(c)])),_:1},8,["class"]),(0,a._)("div",n,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])])}var r=o(8053),u=o(3039),c={name:"VCheckbox",components:{CheckIcon:u.Z,VButton:r.Z},props:{modelValue:Boolean}},d=o(89);const m=(0,d.Z)(c,[["render",s],["__scopeId","data-v-d703c532"]]);var p=m},1562:function(e,t,o){o.d(t,{Z:function(){return d}});var a=o(3396),l=o(9242);function i(e,t,o,i,n,s){const r=(0,a.up)("TextInput");return(0,a.wg)(),(0,a.j4)(r,{maxlength:7,multiline:!1,"show-counter":!1,onKeyup:(0,l.iM)(s.onKeyUp,["prevent"]),"input-type":"contrast",placeholder:"000-000"},{startAdornment:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"startAdornment")])),_:3},8,["onKeyup"])}var n=o(894),s=o(9294),r={name:"DivisionCodeInput",components:{TextInput:n.Z},methods:{onKeyUp(e){e.target.value=(0,s.X)(e.target.value)}}},u=o(89);const c=(0,u.Z)(r,[["render",i]]);var d=c},3841:function(e,t,o){o.d(t,{Z:function(){return f}});var a=o(3396),l=o(7139);const i={class:"d-flex"},n=["disabled","accept"],s={class:"d-flex ms-2 flex-column justify-content-between"};function r(e,t,o,r,u,c){const d=(0,a.up)("VLoader"),m=(0,a.up)("VTypography"),p=(0,a.up)("VButton");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(p,(0,a.dG)(e.$attrs,{class:[{"file-picker__button--disabled":o.disabled},"flex-fill position-relative me-2 file-picker__button"]}),{default:(0,a.w5)((()=>[(0,a._)("input",{type:"file",role:"button",multiple:!0,disabled:o.loading||o.disabled,onChange:t[0]||(t[0]=t=>e.$emit("change",t.target.files)),accept:o.fileFormats.join(",."),class:"position-absolute w-100 opacity-0 file-picker__file-input"},null,40,n),o.loading?((0,a.wg)(),(0,a.j4)(d,{key:0,size:16})):(0,a.kq)("",!0),o.loading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:1,"font-weight":"medium",class:"file-picker__title"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.localize.commonFormDownloadFiles.text),1)])),_:1}))])),_:1},16,["class"]),(0,a._)("div",s,[(0,a.Wm)(m,{"font-weight":"medium",class:"file-picker__info"},{default:(0,a.w5)((()=>[(0,a.Uk)("Ограничения по размеру: "+(0,l.zw)(o.fileLimits),1)])),_:1}),(0,a.Wm)(m,{"font-weight":"medium",class:"file-picker__info"},{default:(0,a.w5)((()=>[(0,a.Uk)("Форматы файла: "+(0,l.zw)(o.fileFormats.join(", ")),1)])),_:1})])])}var u=o(9877),c=o(8053),d=o(4413),m=o(6623),p={inheritAttrs:!1,name:"FilePicker",components:{VLoader:u.Z,VTypography:d.Z,VButton:c.Z},emits:{change:()=>!0},computed:{...(0,m.Se)("i18n",["localize"])},props:{loading:Boolean,fileFormats:{type:Array,require:!0,default:()=>[]},fileLimits:{type:String,require:!0},disabled:Boolean}},g=o(89);const h=(0,g.Z)(p,[["render",r],["__scopeId","data-v-674e5735"]]);var f=h},1940:function(e,t,o){o.d(t,{Z:function(){return p}});var a=o(3396),l=o(7139);const i=["value","onFocus","onKeydown","onChange"],n={key:0,class:"align-self-end inn-input__divider"};function s(e,t,o,s,r,u){const c=(0,a.up)("VTypography");return(0,a.wg)(),(0,a.iD)("div",{class:(0,l.C_)(["d-flex flex-column",o.rootClass])},[(0,a._)("div",{class:(0,l.C_)(["d-flex inn-input__container",{"inn-input__container--error":!!o.error}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.value,((t,o)=>((0,a.wg)(),(0,a.iD)("div",{key:o,class:"d-flex"},[(0,a._)("input",(0,a.dG)({value:t,maxlength:1,ref_for:!0,ref:"innInput",placeholder:"0"},e.$attrs,{onFocus:e=>u.onFocus(e,o),onKeydown:e=>u.onKeyDown(e,o),onChange:e=>t=e.target.value,class:"text-center align-self-center inn-input__field"}),null,16,i),o<11?((0,a.wg)(),(0,a.iD)("div",n)):(0,a.kq)("",!0)])))),128))],2),o.error?((0,a.wg)(),(0,a.j4)(c,{key:0,class:"mt-1 inn-input__error"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(o.error),1)])),_:1})):(0,a.kq)("",!0)],2)}var r=o(4413);const u="";var c={name:"InnInput",components:{VTypography:r.Z},inheritAttrs:!1,props:{error:String,rootClass:String},data(){const e={};for(let t=0;t<12;t++)e[t]=u[t]||"";return{value:e}},methods:{onFocus(e,t){const o=this.$refs.innInput[t],a=t>0?this.$refs.innInput[+t-1]:void 0,l=t>0?this.$refs.innInput[this.$refs.innInput.length-1]:void 0;if(this.$refs.innInput&&""===o?.value&&""===a?.value&&""===l?.value){const e=this.$refs.innInput.find((e=>""===e.value));e&&e.focus()}else this.$refs.innInput&&this.$refs.innInput.forEach(((e,o)=>{o>=+t&&(e.value="")}))},onKeyDown(e,t){if(e.preventDefault(),"Backspace"===e.key){const e=this.$refs.innInput[t],o=t>0?this.$refs.innInput[+t-1]:void 0;e&&(e.value=""),o&&(o.value="",o.focus())}else if(t<12&&0===e.code.indexOf("Digit")){const o=this.$refs.innInput[t],a=this.$refs.innInput[+t+1];o&&!o.value&&(o.value=e.key),a&&a.focus()}}}},d=o(89);const m=(0,d.Z)(c,[["render",s],["__scopeId","data-v-97e92bae"]]);var p=m},9877:function(e,t,o){o.d(t,{Z:function(){return c}});var a=o(3396),l=o(7139);function i(e,t,o,i,n,s){const r=(0,a.up)("RefreshIcon");return(0,a.wg)(),(0,a.j4)(r,{size:o.size,class:(0,l.C_)(["v-loader",{"v-loader--stopped":o.stopped}])},null,8,["size","class"])}var n=o(5029),s={name:"VLoader",components:{RefreshIcon:n.Z},props:{size:Number,stopped:Boolean}},r=o(89);const u=(0,r.Z)(s,[["render",i],["__scopeId","data-v-6d8defff"]]);var c=u},1578:function(e,t,o){o.d(t,{Z:function(){return d}});var a=o(3396),l=o(9242);function i(e,t,o,i,n,s){const r=(0,a.up)("TextInput");return(0,a.wg)(),(0,a.j4)(r,{type:"tel",maxlength:18,multiline:!1,"show-counter":!1,onKeyup:(0,l.iM)(s.onKeyUp,["prevent"]),class:"text-white"},null,8,["onKeyup"])}var n=o(894),s=o(9294),r={name:"PhoneInput",components:{TextInput:n.Z},methods:{onKeyUp(e){e.target.value=(0,s.Y)(e.target.value)}}},u=o(89);const c=(0,u.Z)(r,[["render",i]]);var d=c},6903:function(e,t,o){o.d(t,{Z:function(){return m}});var a=o(3396),l=o(7139);const i={class:"d-flex"};function n(e,t,o,n,s,r){const u=(0,a.up)("VTypography"),c=(0,a.up)("VButton");return(0,a.wg)(),(0,a.iD)("div",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.list,(t=>((0,a.wg)(),(0,a.j4)(c,{key:t.key,disabled:o.disabled,onClick:o=>e.$emit("update:modelValue",t.key),class:(0,l.C_)(["d-flex user-select-none align-items-center radio-group__item",{"radio-group__item--disabled":o.disabled,"radio-group__item--active":t.key===o.modelValue}])},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,l.C_)(["me-1 radio-group__item-dot",{"radio-group__item-dot--disabled":o.disabled,"radio-group__item-dot--contrast":"contrast"===o.type}])},null,2),(0,a.Wm)(u,{"font-weight":"medium",class:(0,l.C_)(["radio-group__item-title",{"radio-group__item-title--disabled":o.disabled,"radio-group__item-title--contrast":"contrast"===o.type}])},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.title),1)])),_:2},1032,["class"])])),_:2},1032,["disabled","onClick","class"])))),128))])}o(6699);var s=o(8053),r=o(4413),u={name:"RadioGroup",components:{VButton:s.Z,VTypography:r.Z},props:{items:Array,disabled:Boolean,modelValue:[String,Boolean,Number],type:{type:String,default:"default",validate(e){return["default","contrast"].includes(e)}}},computed:{list(){return this.disabled?this.items.filter((e=>e.key===this.modelValue)):this.items}}},c=o(89);const d=(0,c.Z)(u,[["render",n],["__scopeId","data-v-0a784985"]]);var m=d},5813:function(e,t,o){o.d(t,{Z:function(){return g}});var a=o(3396),l=o(7139);const i={class:"d-flex flex-fill"};function n(e,t,o,n,s,r){const u=(0,a.up)("VTypography"),c=(0,a.up)("VButton"),d=(0,a.up)("PopoverContent"),m=(0,a.up)("VPopover");return(0,a.wg)(),(0,a.iD)("div",{class:(0,l.C_)(["d-flex position-relative flex-column v-switch",{"v-switch--disabled":o.disabled}])},[o.modelValue?((0,a.wg)(),(0,a.iD)("div",{key:0,style:(0,l.j5)({width:s.width,transform:s.transform}),class:(0,l.C_)(["position-absolute v-switch__indicator",{"v-switch__indicator--disabled":o.disabled}])},null,6)):(0,a.kq)("",!0),(0,a._)("div",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.items,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:e.key,class:(0,l.C_)([{"v-switch__item--active":o.modelValue===e.key,"v-switch__item--disabled":o.disabled},"d-flex v-switch__item"])},[o.popoverText[e.key]?((0,a.wg)(),(0,a.j4)(m,{key:0,position:"top-left","trigger-type":"hover","left-offset":0===t?122.5:64},{content:(0,a.w5)((()=>[(0,a.Wm)(c,{ref_for:!0,ref:"buttons",disabled:o.disabled,class:"px-1 user-select-none align-items-center justify-content-center v-switch__item-button",onClick:t=>r.click(e.key)},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{"font-weight":"heavy",class:(0,l.C_)([{"v-switch__item-title--disabled":o.disabled},"text-uppercase v-switch__item-title"])},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.title),1)])),_:2},1032,["class"])])),_:2},1032,["disabled","onClick"])])),popover:(0,a.w5)((()=>[(0,a.Wm)(d,{width:729},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(o.popoverText[e.key]),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["left-offset"])):(0,a.kq)("",!0),o.popoverText[e.key]?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(c,{key:1,ref_for:!0,ref:"buttons",disabled:o.disabled,class:"px-1 user-select-none align-items-center justify-content-center",onClick:t=>r.click(e.key)},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{"font-weight":"heavy",class:(0,l.C_)([{"v-switch__item-title--disabled":o.disabled},"text-uppercase v-switch__item-title"])},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.title),1)])),_:2},1032,["class"])])),_:2},1032,["disabled","onClick"]))],2)))),128))])],2)}var s=o(8053),r=o(415),u=o(4413),c=o(8331),d={name:"VSwitch",components:{PopoverContent:c.Z,VPopover:r.Z,VButton:s.Z,VTypography:u.Z},props:{items:Array,disabled:Boolean,modelValue:String,popoverText:{type:Object,default:()=>({})}},data(){return{width:"0px",interval:void 0,transform:"translateX(0)",sizes:Array(this.items.length).fill(0)}},mounted(){this.checkSizes(),this.interval=setInterval(this.checkSizes,1e3),this.animate(0)},beforeUnmount(){this.interval&&clearInterval(this.interval)},watch:{modelValue(e){const t=this.items.findIndex((t=>t.key===e)),o=t>=0?t:0;this.animate(o)}},methods:{checkSizes(){this.$refs.buttons&&(this.sizes=this.$refs.buttons.map((e=>{if(e.$refs.vButton){const t=e.$refs.vButton;return t.clientWidth}return 0})))},animate(e){const t=e>0?e-1:-1;this.transform=t>=0?`translateX(${this.sizes[t]}px)`:"translateX(0)",this.width=`${this.sizes[e]+2}px`},click(e){this.$emit("update:modelValue",e)}}},m=o(89);const p=(0,m.Z)(d,[["render",n],["__scopeId","data-v-0c4b2ca5"]]);var g=p},1124:function(e,t,o){o.d(t,{Z:function(){return m}});var a=o(3396),l=o(7139);function i(e,t,o,i,n,s){const r=(0,a.up)("TextInput"),u=(0,a.up)("VTypography"),c=(0,a.up)("VButton"),d=(0,a.Q2)("click-outside");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{ref:"input-autocomplete",class:(0,l.C_)(["position-relative",e.$attrs["root-class"]])},[(0,a.Wm)(r,(0,a.dG)(e.$attrs,{onFocus:t[0]||(t[0]=e=>n.focus=!0),inputType:"contrast"}),(0,a.Nv)({_:2},[s.hasPopover?{name:"popover",fn:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"popover",{},void 0,!0)]))}:void 0]),1040),e.$attrs.modelValue&&s.items.length>0&&n.focus?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"position-absolute text-input-autocomplete__list",style:(0,l.j5)({top:`${n.top}px`})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.items,((e,t)=>((0,a.wg)(),(0,a.j4)(c,{key:t,onClick:t=>s.onSelect(e),class:"px-2 text-input-autocomplete__list-item"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{"font-weight":"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.russianName),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))],4)):(0,a.kq)("",!0)],2)),[[d,s.onCLickOutside]])}var n=o(894),s=o(8053),r=o(4413),u={inheritAttrs:!1,name:"TextInputAutocomplete",components:{VButton:s.Z,VTypography:r.Z,TextInput:n.Z},emits:{select:()=>!0},data(){return{top:0,focus:!1}},mounted(){const e=this.$refs["input-autocomplete"];e&&(this.top=e.clientHeight)},props:{list:{type:Array,default:()=>[]}},computed:{hasPopover(){return!!this.$slots.popover},items(){return this.list.slice().filter((e=>e.russianName.toLowerCase().indexOf(this.$attrs.modelValue.toLowerCase())>=0))}},methods:{onCLickOutside(){this.focus=!1},onSelect(e){this.$emit("select",e),this.focus=!1}}},c=o(89);const d=(0,c.Z)(u,[["render",i],["__scopeId","data-v-19d76d78"]]);var m=d}}]);
//# sourceMappingURL=item-0392c408.797a872a.js.map