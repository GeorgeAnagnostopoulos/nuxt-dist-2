(window.webpackJsonp=window.webpackJsonp||[]).push([[2,9],{245:function(t,e,n){"use strict";n.r(e);var l={name:"SeeNextIcon"},o=n(4),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("style",{attrs:{type:"text/css"}},[t._v("\n        .st0 {\n            fill: rgb(0, 0, 0);\n        }\n    ")]),t._v(" "),n("polygon",{staticClass:"st0",attrs:{points:"11.3,467.7 500,255.7 11.3,43.6 183.3,255.7 "}})])}),[],!1,null,"1f006a5e",null);e.default=component.exports},249:function(t,e,n){"use strict";n.r(e);var l=n(124),o=n.n(l),r=n(245),c={name:"BlogItem",mixins:[o.a.mixin],props:{blog:{type:Object,required:!0}},components:{SeeNextIcon:r.default}},x=n(4),component=Object(x.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"grid grid-cols-2 ml-2 my-5 bg-white px-2 py-4 text-gray-700 border-2 bg-main-secondary hover:shadow-xl",attrs:{to:"/blogs/"+t.blog.slug}},[n("div",{staticClass:"col-span-1 self-center"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"cols-span-1"},[n("h2",{staticClass:"font-semibold text-lg text-gray-700"},[t._v(t._s(t.blog.title))]),t._v(" "),n("div",{staticClass:"text-xs my-1"},[n("span",{staticClass:"font-semibold mx-1"},[t._v(t._s(t.blog.author))]),n("span",[t._v(t._s(t.blog.published_at.slice(0,10)))])]),t._v(" "),n("div",{staticClass:"min-h-32"},[n("p",[t._v(t._s(t._f("truncate")(t.blog.content,120))+" "),n("SeeNextIcon",{staticClass:"inline-block w-4"})],1)])])])}),[],!1,null,"988194f0",null);e.default=component.exports}}]);