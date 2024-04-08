!function(t){const e={radio:document.querySelectorAll('[data-setting="radio"]'),checkbox:document.querySelectorAll('[data-setting="checkbox"]'),attribute:document.querySelectorAll('[data-setting="attribute"]'),style:document.querySelectorAll('[data-setting="style"]'),input:document.querySelectorAll('[data-setting="input"]'),select:document.querySelectorAll('[data-setting="select"]'),color:document.querySelectorAll('[data-setting="color"]')},o=n();function n(){return{saveLocal:"",storeKey:"",setting:{app_name:{target:'[data-setting="app_name"]',type:"text",value:"Hope UI"},theme_scheme_direction:{target:"html",choices:["ltr","rtl"],value:"ltr"},theme_scheme:{target:"html",choices:["light","dark","auto"],value:"light"},theme_style_appearance:{target:"body",choices:["theme-default","theme-flat","theme-bordered","theme-sharp"],value:["theme-default"]},theme_color:{target:"html",choices:["default","color-1","color-2","color-3","color-4","color-5"],type:"variable",colors:{},value:"default"},theme_transition:{target:"body",choices:["theme-without-animation","theme-with-animation"],value:"theme-with-animation"},theme_font_size:{target:"html",choices:["theme-fs-sm","theme-fs-md","theme-fs-lg"],value:"theme-fs-md"},page_layout:{target:"#page_layout",choices:["container","container-fluid"],value:"container-fluid"},header_navbar_show:{target:".iq-navbar",choices:["iq-navbar-none"],value:[]},header_navbar:{target:".iq-navbar",choices:["default","fixed","navs-sticky","nav-glass","navs-transparent","boxed","hidden"],value:"default"},header_banner:{target:".iq-banner",choices:["default","navs-bg-color","hide"],value:"default"},card_color:{target:"body",choices:["card-default","card-glass","card-transparent"],value:"card-default"},sidebar_show:{target:'[data-toggle="main-sidebar"]',choices:["sidebar-none"],value:[]},sidebar_color:{target:'[data-toggle="main-sidebar"]',choices:["sidebar-white","sidebar-dark","sidebar-color","sidebar-transparent","sidebar-glass"],value:"sidebar-white"},sidebar_type:{target:'[data-toggle="main-sidebar"]',choices:["sidebar-hover","sidebar-mini","sidebar-boxed","sidebar-soft"],value:[]},sidebar_menu_style:{target:'[data-toggle="main-sidebar"]',choices:["sidebar-default navs-rounded","sidebar-default navs-rounded-all","sidebar-default navs-pill","sidebar-default navs-pill-all","left-bordered","sidebar-default navs-full-width"],value:"left-bordered"},footer:{target:".footer",choices:["sticky","default","glass"],value:"default"},body_font_family:{target:"body",type:"variable",value:"Inter"},heading_font_family:{target:"heading",type:"variable",value:"Inter"}},beforeInit:function(t){return t},afterInit:function(t){return t}}}this.IQSetting=function(t){return this.options={},this.arg=t,this.extend(o),this.getStorageValue(this.options.storeKey),this.updateOptionFromStorage(),_.isFunction(this.options.beforeInit)&&this.options.beforeInit(this),this.init(),_.isFunction(this.options.afterInit)&&this.options.afterInit(this),this.addListeners(),this},IQSetting.prototype.extend=function(t){this.arg&&_.isObject(this.arg)?this.options=IQUtils.mergeDeep(t,this.arg):this.options=t},IQSetting.prototype.fnCall=function(t,e=this.getSettingKey(t).value){_.isString(t)&&this.__proto__.hasOwnProperty(t)&&_.isFunction(this.__proto__[t])&&this.__proto__[t].call(this,e)},IQSetting.prototype.init=function(){const t=_.keys(this.options.setting);_.forEach(t,(t=>{this.fnCall(t)})),this.saveOption()},IQSetting.prototype.reInit=function(){this.destroy(),this.extend({saveLocal:"",storeKey:"",setting:{app_name:{target:'[data-setting="app_name"]',type:"text",value:"Hope UI"},theme_scheme_direction:{target:"html",choices:["ltr","rtl"],value:"ltr"},theme_scheme:{target:"html",choices:["light","dark","auto"],value:"light"},theme_style_appearance:{target:"body",choices:["theme-default","theme-flat","theme-bordered","theme-sharp"],value:["theme-default"]},theme_color:{target:"html",choices:["default","color-1","color-2","color-3","color-4","color-5"],type:"variable",colors:{},value:"default"},theme_transition:{target:"body",choices:["theme-without-animation","theme-with-animation"],value:"theme-with-animation"},theme_font_size:{target:"html",choices:["theme-fs-sm","theme-fs-md","theme-fs-lg"],value:"theme-fs-md"},page_layout:{target:"#page_layout",choices:["container","container-fluid"],value:"container-fluid"},header_navbar_show:{target:".iq-navbar",choices:["iq-navbar-none"],value:[]},header_navbar:{target:".iq-navbar",choices:["default","fixed","navs-sticky","nav-glass","navs-transparent","boxed","hidden"],value:"default"},header_banner:{target:".iq-banner",choices:["default","navs-bg-color","hide"],value:"default"},card_color:{target:"body",choices:["card-default","card-glass","card-transparent"],value:"card-default"},sidebar_show:{target:'[data-toggle="main-sidebar"]',choices:["sidebar-none"],value:[]},sidebar_color:{target:'[data-toggle="main-sidebar"]',choices:["sidebar-white","sidebar-dark","sidebar-color","sidebar-transparent","sidebar-glass"],value:"sidebar-white"},sidebar_type:{target:'[data-toggle="main-sidebar"]',choices:["sidebar-hover","sidebar-mini","sidebar-boxed","sidebar-soft"],value:[]},sidebar_menu_style:{target:'[data-toggle="main-sidebar"]',choices:["sidebar-default navs-rounded","sidebar-default navs-rounded-all","sidebar-default navs-pill","sidebar-default navs-pill-all","left-bordered","sidebar-default navs-full-width"],value:"left-bordered"},footer:{target:".footer",choices:["sticky","default","glass"],value:"default"},body_font_family:{target:"body",type:"variable",value:"Inter"},heading_font_family:{target:"heading",type:"variable",value:"Inter"}},beforeInit:function(t){return t},afterInit:function(t){return t}}),this.saveLocal(this.options.saveLocal),this.init(),this.afterUpdate("reinit",this.options),this.resetFontFamily()},IQSetting.prototype.afterUpdate=function(t,e,o=""){const n=new CustomEvent(t,{detail:{value:e,name:t,currentValue:o}});document.dispatchEvent(n),this.saveOption()},IQSetting.prototype.destroy=function(){this.removeListeners()},IQSetting.prototype.addListeners=function(t,e){this.addRadioListener(),this.addCheckboxListener(),this.addAttributeListener(),this.addStyleListener(),this.addInputListener(),this.addSelectListener(),this.addColorListner()},IQSetting.prototype.removeListeners=function(t,e){this.removeRadioListeners(),this.removeCheckboxListeners(),this.removeAttributeListeners(),this.removeStyleListeners(),this.removeInputListeners()},IQSetting.prototype.setMainOption=function(t,e){this.options[t]=e},IQSetting.prototype.getSettingOptions=function(){return this.options.settings},IQSetting.prototype.getSettingKey=function(t){return this.options.setting[t]},IQSetting.prototype.setSettingOption=function(t,e,o){o&&(this.options.setting[t].value=e)},this.IQSetting.prototype.setSettingColorChoice=function(t,e){this.options.setting[t].colors[e.key]=e.value},IQSetting.prototype.getSettingJson=function(){const t=this,e={};return Object.keys(t.options).forEach((function(o){"afterInit"!==o&&"beforeInit"!==o&&(e[o]=t.options[o],"setting"===o&&Object.keys(e[o]).forEach((function(t){delete e[o][t].target,delete e[o][t].type,delete e[o][t].choices})))})),this.options=IQUtils.mergeDeep(o,e),JSON.stringify(e,null,4)},IQSetting.getInstance=function(){return IQSetting.instance||(IQSetting.instance=new IQSetting),IQSetting.instance},IQSetting.prototype.saveOption=function(){const t=this.options.storeKey,e=this.options;if(void 0!==e&&void 0!==t)switch(this.options.saveLocal){case"localStorage":return sessionStorage.removeItem(t),IQUtils.saveLocalStorage(t,JSON.stringify(e));case"sessionStorage":return localStorage.removeItem(t),IQUtils.saveSessionStorage(t,JSON.stringify(e));case"cookieStorage":return IQUtils.setCookie(t,JSON.stringify(e))}localStorage.setItem(t,"none"),sessionStorage.setItem(t,"none")},IQSetting.prototype.getOption=function(t){if("none"===localStorage.getItem(t)||"none"===sessionStorage.getItem(t))return"none";if(null!==localStorage.getItem(t)&&""!==localStorage.getItem(t)||null!==sessionStorage.getItem(t)&&""!==sessionStorage.getItem(t)){let e=localStorage.getItem(t);if(null===e&&(e=sessionStorage.getItem(t)),null!==e)try{return JSON.parse(e)}catch(t){return e}}},IQSetting.prototype.updateOptionFromStorage=function(){const t=this.getOption(this.options.storeKey);return"none"===t?this.options.saveLocal="none":(void 0!==t&&(this.options=t),this.options)},IQSetting.prototype.getStorageValue=function(t){const e=IQUtils.checkStorageArray(t,["localStorage","sessionStorage","cookieStorage","none"]);let o=this.options.saveLocal;e.result&&(o=e.storage),IQUtils.getElems('input[name="saveLocal"]').forEach((function(t){t.checked=!1,t.value===o&&(t.checked=!0)}))},IQSetting.prototype.__radioInputChange__=function(t){const e=this.getSettingKey(t);IQUtils.getElems(`input[name="${t}"]`).forEach((function(t){t.checked=!1,t.value===e.value&&(t.checked=!0)}))},IQSetting.prototype.__checkboxInputChange__=function(t){const e=this.getSettingKey(t);IQUtils.getElems(`input[name="${t}"]`).forEach((function(t){t.checked=!1,-1!==e.value.indexOf(t.value)&&(t.checked=!0)}))},IQSetting.prototype.__inputChange__=function(t,e){IQUtils.getElems(`input[name="${t}"]`).forEach((function(t){t.value=e}))},IQSetting.prototype.__selectInputChange__=function(t){const e=this.getSettingKey(t);IQUtils.getElems(`select[name="${t}"]`).forEach((function(t){t.value=e.value})),"undefined"!=typeof $&&$(`[data-select="font"][name="${t}"]`).val(e.value).trigger("change")},IQSetting.prototype.__radioUpdate__=function(t,e,o){const n=this.getSettingKey(t);null!==e&&(n.value=e,this.setSettingOption(t,e)),null!==n.target&&(n.choices.forEach((t=>{IQUtils.removeClass(n.target,...t.split(" "))})),IQUtils.addClass(n.target,...e.split(" "))),this.__radioInputChange__(t),_.isFunction(o)&&o(t,e,n),this.afterUpdate(t,e)},IQSetting.prototype.__styleUpdate__=function(t,e={prop:"",value:"value"},o){const n=this.getSettingKey(t);null!==e.value&&(n.value=e.value,this.setSettingOption(t,e.value)),null!==n.target&&IQUtils.setStyle(n.target,e),this.__radioInputChange__(t),_.isFunction(o)&&o(t,e.value),this.afterUpdate(t,e)},IQSetting.prototype.__attributeUpdate__=function(t,e={prop:"color",value:"value"},o){const n=this.getSettingKey(t);null!==e.value&&(n.value=e.value,this.setSettingOption(t,e.value)),null!==n.target&&IQUtils.setAttr(n.target,e),this.__radioInputChange__(t),_.isFunction(o)&&o(t,e.value),this.afterUpdate(t,e)},IQSetting.prototype.__checkboxUpdate__=function(t,e,o,n){const i=this.getSettingKey(t);null!==e&&(i.value=e,this.setSettingOption(t,e)),null!==i.target&&(i.choices.forEach((t=>{IQUtils.removeClass(i.target,t)})),i.value.length&&i.value.forEach((t=>{IQUtils.addClass(i.target,t)}))),this.__checkboxInputChange__(t),_.isFunction(n)&&n(t,e),this.afterUpdate(t,e,o)},IQSetting.prototype.__inputUpdate__=function(t,e,o){const n=this.getSettingKey(t);null!==e&&(n.value=e,this.setSettingOption(t,e)),null!==n.target&&IQUtils.setContent(n.target,e.substr(0,10)),this.__inputChange__(t,e),_.isFunction(o)&&o(t,e),this.afterUpdate(t,e)},IQSetting.prototype.__updateThemeColor__=function(t,e){const o=this.getSettingKey(t);if(null!==e&&(o.value=e,this.setSettingOption(t,e)),null!==o.target&&(o.choices.forEach((t=>{IQUtils.removeClass(o.target,t)})),"custom"!==o.value&&this.resetColor(t),!_.isObject(o.value))){this.__attributeUpdate__("theme_color",{prop:"data-bs-theme-color",value:"custom"});let t=IQUtils.getRootVars("--prefix")||"bs-",e={};document.querySelectorAll(".custom-color").forEach((t=>{t&&t.remove()})),_.forEach(o.colors,((o,n)=>{n=n.replace("{{prefix}}",t),e={...e,...IQUtils.getColorShadeTint(n,o)}}))}this.__radioInputChange__(t),this.afterUpdate(t,e)},this.IQSetting.prototype.resetColor=function(t){void 0!==o.setting.theme_color.choices.find((t=>"custom"==t.name))&&_.forEach(o.setting.theme_color.colors,((e,o)=>{this.setSettingColorChoice(t,{key:o,value:e})}))},IQSetting.prototype.__selectUpdate__=function(t,e){const o=this.getSettingKey(t);null!==e&&(o.value=e,this.setSettingOption(t,e)),null!==o.target&&IQUtils.setFontFamily(e,o.target),this.__selectInputChange__(t),this.afterUpdate(t,e)},IQSetting.prototype.__updateOption__=function(t,e){this.setMainOption(t,e),this.saveOption(),this.updateOptionFromStorage()},IQSetting.prototype.addRadioListener=function(t){const o=this;e.radio.forEach((function(e){e.addEventListener("change",(function(e){const n=e.target.value,i=e.target.getAttribute("name");"theme_color"===i&&o.__attributeUpdate__("theme_color",{prop:"data-bs-theme-color",value:n}),o.__proto__[i].call(o,n),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addCheckboxListener=function(t){const o=this;e.checkbox.forEach((function(e){e.addEventListener("change",(e=>{const n=[],i=e.target.getAttribute("name");document.querySelectorAll(`[name="${i}"]`).forEach((function(t){t.checked&&n.push(t.value)})),o.__proto__[i].call(o,n,e.target.value),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addStyleListener=function(t){const o=this;e.style.forEach((function(e){e.addEventListener("change",(function(e){const n=e.target.value,i=e.target.getAttribute("name"),a={prop:e.target.getAttribute("data-prop"),value:n};o.__proto__[i].call(o,a.value),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addAttributeListener=function(t){const o=this;e.attribute.forEach((function(e){e.addEventListener("change",(function(e){const n=e.target.value,i=e.target.getAttribute("name"),a={prop:e.target.getAttribute("data-prop"),value:n};o.__proto__[i].call(o,a.value),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addInputListener=function(t){const o=this;e.input.forEach((function(e){e.addEventListener("input",(function(e){const n=e.target.value||"",i=e.target.getAttribute("name");o.__proto__[i].call(o,n),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addSelectListener=function(t){const o=this;e.select.forEach((function(e){"undefined"!=typeof $&&$(e).on("select2:select",(e=>{const n=e.params.data.id,i=e.target.getAttribute("name");o.__proto__[i].call(o,n),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addColorListner=function(){const t=this;e.color.forEach((e=>{const o=IQUtils.debounce((function(e,o){t.setSettingColorChoice(e,o),t.theme_color("custom")}),200,!1);e.addEventListener("input",(t=>{const e={key:`--{{prefix}}${t.target.dataset.extra}`,value:t.target.value};o(t.target.name,e)}),!1)}))},IQSetting.prototype.removeRadioListeners=function(){e.radio.forEach((function(t){t.removeEventListener("change",null)}))},IQSetting.prototype.removeCheckboxListeners=function(){e.checkbox.forEach((function(t){t.removeEventListener("change",null)}))},IQSetting.prototype.removeStyleListeners=function(){e.style.forEach((function(t){t.removeEventListener("change",null)}))},IQSetting.prototype.removeAttributeListeners=function(){e.attribute.forEach((function(t){t.removeEventListener("change",null)}))},IQSetting.prototype.removeInputListeners=function(){e.input.forEach((function(t){t.removeEventListener("change",null)}))},IQSetting.prototype.removeSelectListeners=function(){e.select.forEach((function(t){"undefined"!=typeof $&&$(t).off("select2:select",null)}))},IQSetting.prototype.resetFontFamily=function(){document.querySelectorAll('[data-font-body="google"]').forEach((t=>{t.remove()})),document.querySelectorAll('[data-font-heading="google"]').forEach((t=>{t.remove()}));let t=getComputedStyle(document.body).getPropertyValue("--prefix")||"bs-";t&&(t=t.trim());const e='"Inter", sans-serif',o='"Inter", sans-serif';"undefined"!=typeof $&&$('[data-select="font"]').select2("destroy").select2(),document.documentElement.style.setProperty(`--${t}body-font-family`,e),document.documentElement.style.setProperty(`--${t}heading-font-family`,o),this.setSettingOption("body_font_family","Inter",!0),this.setSettingOption("heading_font_family","Inter",!0),this.__selectInputChange__("body_font_family",e),this.__selectInputChange__("heading_font_family",o)},IQSetting.prototype.app_name=function(t){"object"!=typeof t&&this.__inputUpdate__("app_name",t)},IQSetting.prototype.theme_scheme=function(t){"object"!=typeof t&&this.__attributeUpdate__("theme_scheme",{prop:"data-bs-theme",value:t},(function(e,o){document.querySelector("html").setAttribute("data-bs-theme",t),"auto"==t&&(matchMedia("(prefers-color-scheme: light)").matches?document.querySelector("html").setAttribute("data-bs-theme","light"):document.querySelector("html").setAttribute("data-bs-theme","dark"))}))},IQSetting.prototype.theme_scheme_direction=function(t){if("object"!=typeof t){const e=this;this.__attributeUpdate__("theme_scheme_direction",{prop:"dir",value:t},(function(t,o){e.rtlChange("rtl"==o),"undefined"!=typeof $&&$('[data-select="font"]').data("select2")&&$('[data-select="font"]').select2("destroy").select2()}))}},IQSetting.prototype.theme_style_appearance=function(t,e){null!==t&&this.__checkboxUpdate__("theme_style_appearance",t,e)},IQSetting.prototype.theme_color=function(t){"object"!=typeof t&&("custom"==t?this.__updateThemeColor__("theme_color"):this.__attributeUpdate__("theme_color",{prop:"data-bs-theme-color",value:t}))},IQSetting.prototype.theme_transition=function(t){"object"!=typeof t&&this.__radioUpdate__("theme_transition",t)},IQSetting.prototype.theme_font_size=function(t){"object"!=typeof t&&this.__radioUpdate__("theme_font_size",t)},IQSetting.prototype.page_layout=function(t){"object"!=typeof t&&this.__radioUpdate__("page_layout",t)},IQSetting.prototype.header_navbar=function(t){"object"!=typeof t&&this.__radioUpdate__("header_navbar",t)},IQSetting.prototype.header_banner=function(t){"object"!=typeof t&&this.__radioUpdate__("header_banner",t)},IQSetting.prototype.sidebar_color=function(t){"object"!=typeof t&&this.__radioUpdate__("sidebar_color",t)},IQSetting.prototype.sidebar_type=function(t,e){null!==t&&this.__checkboxUpdate__("sidebar_type",t,e)},IQSetting.prototype.sidebar_menu_style=function(t){"object"!=typeof t&&this.__radioUpdate__("sidebar_menu_style",t)},IQSetting.prototype.footer=function(t){"object"!=typeof t&&this.__radioUpdate__("footer",t)},IQSetting.prototype.body_font_family=function(t=null){"object"!=typeof t&&""!=t&&"null"!=t&&this.__selectUpdate__("body_font_family",t)},IQSetting.prototype.heading_font_family=function(t=null){"object"!=typeof t&&""!=t&&"null"!=t&&this.__selectUpdate__("heading_font_family",t)},IQSetting.prototype.card_color=function(t){"object"!=typeof t&&this.__radioUpdate__("card_color",t)},IQSetting.prototype.sidebar_show=function(t,e){null!==t&&this.__checkboxUpdate__("sidebar_show",t,e)},IQSetting.prototype.header_navbar_show=function(t,e){null!==t&&this.__checkboxUpdate__("header_navbar_show",t,e)},IQSetting.prototype.saveLocal=function(t=null){null!==t&&this.__updateOption__("saveLocal",t)},IQSetting.prototype.rtlChange=function(t){IQUtils.addClass(".offcanvas-start","on-rtl","start"),IQUtils.addClass(".offcanvas-end","on-rtl","end"),t?(IQUtils.addClass(".on-rtl.start","offcanvas-end"),IQUtils.removeClass(".on-rtl.start","offcanvas-start"),IQUtils.addClass(".on-rtl.end","offcanvas-start"),IQUtils.removeClass(".on-rtl.end","offcanvas-end")):(IQUtils.addClass(".on-rtl.start","offcanvas-start"),IQUtils.removeClass(".on-rtl.start","offcanvas-end"),IQUtils.addClass(".on-rtl.end","offcanvas-end"),IQUtils.removeClass(".on-rtl.end","offcanvas-start"))},t.IQSetting=this.IQSetting;const i=document.querySelector('[data-reset="body-heading-font"]');null!==i&&i.addEventListener("click",(t=>{t.preventDefault(),this.IQSetting.setSettingOption("body_font_family","Inter",!0),this.IQSetting.setSettingOption("heading_font_family","Inter",!0),this.IQSetting.resetFontFamily()})),t.IQSetting}(window);