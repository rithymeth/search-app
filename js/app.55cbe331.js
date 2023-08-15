(function(){"use strict";var e={5430:function(e,t,r){var n=r(144),o=(r(2087),function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"search-bar mx-5"},[t("b-form-input",{attrs:{placeholder:"Search by Country Name"},on:{input:e.searchCountries},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}})],1),t("table",{staticClass:"table mx-5"},[t("thead",[t("tr",[t("th",[e._v("Flags")]),t("th",{on:{click:function(t){return e.sortCountries("name")}}},[e._v("Country Name")]),t("th",[e._v("Native Country Name")])])]),t("tbody",e._l(e.displayedCountries,(function(r){return t("tr",{key:r.cca2},[t("td",[t("img",{staticClass:"flag-image",attrs:{src:r.flags.png,alt:"Flag"}})]),t("td",{on:{click:function(t){return e.showModal(r)}}},[e._v(e._s(r.name.official))]),t("td",[e._v(e._s(r.name.nativeName.ara))])])})),0)]),t("b-pagination",{attrs:{"total-rows":e.filteredCountries.length,"per-page":e.perPage,align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),e.selectedCountry?t("b-modal",{staticClass:"country-modal",attrs:{title:"Country Details"},model:{value:e.selectedCountryModal,callback:function(t){e.selectedCountryModal=t},expression:"selectedCountryModal"}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"flag-container",attrs:{align:"center"}},[t("img",{staticClass:"flag-image-modal",attrs:{src:e.selectedCountry.flags.png,alt:"Flag"}})]),t("br"),t("div",{staticClass:"country-details mx-5"},[t("p",[t("strong",[e._v("Country Name:")]),e._v(" "+e._s(e.selectedCountry.name.official))]),t("p",[t("strong",[e._v("2 character Country Code:")]),e._v(" "+e._s(e.selectedCountry.cca2))]),t("p",[t("strong",[e._v("3 character Country Code:")]),e._v(" "+e._s(e.selectedCountry.cca3))]),t("p",[t("strong",[e._v("Native Country Name:")]),e._v(" "+e._s(e.selectedCountry.name.nativeName.ara))]),t("p",[t("strong",[e._v("Alternative Country Name:")]),e._v(" "+e._s(e.selectedCountry.altSpellings.join(", ")))]),t("p",[t("strong",[e._v("Country Calling Codes:")]),e._v(" "+e._s(e.selectedCountry.idd.root+e.selectedCountry.idd.suffixes))])])])]):e._e()],1)}),a=[],s=r(6154),i={data(){return{countries:[],searchTerm:"",currentPage:1,perPage:25,selectedCountry:null,selectedCountryModal:!1}},computed:{filteredCountries(){return this.countries.filter((e=>e.name.official.toLowerCase().includes(this.searchTerm.toLowerCase())))},pageCount(){return Math.ceil(this.filteredCountries.length/this.perPage)},displayedCountries(){const e=(this.currentPage-1)*this.perPage,t=e+this.perPage;return this.filteredCountries.slice(e,t)}},methods:{async fetchCountries(){try{const e=await s.Z.get("https://restcountries.com/v3.1/all");this.countries=e.data}catch(e){console.error("Error fetching countries:",e)}},searchCountries(){this.currentPage=1},sortCountries(e){this.filteredCountries.sort(((t,r)=>t[e].localeCompare(r[e])))},showModal(e){this.selectedCountry=e,this.selectedCountryModal=!0},goToPage(e){e>=1&&e<=this.pageCount&&(this.currentPage=e)}},mounted(){this.fetchCountries()}},c=i,l=r(1001),u=(0,l.Z)(c,o,a,!1,null,null,null),d=u.exports,f=r(9657),h=r(3017);r(7024);n["default"].use(f.XG7),n["default"].use(h.A7),n["default"].config.productionTip=!1,new n["default"]({render:e=>e(d)}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,s=n[0],i=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var u=c(r)}for(t&&t(n);l<s.length;l++)a=s[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunksearch_app"]=self["webpackChunksearch_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(5430)}));n=r.O(n)})();
//# sourceMappingURL=app.55cbe331.js.map