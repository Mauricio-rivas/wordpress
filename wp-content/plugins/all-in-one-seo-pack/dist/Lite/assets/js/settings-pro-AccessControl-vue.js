(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["settings-pro-AccessControl-vue"],{"4d07":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-access-control"},[e("core-card",{attrs:{slug:"accessControl"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.accessControl)+" "),e("core-pro-badge")]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])},[t._l(t.roles,(function(s){return[t.canShowRole(s)?e("core-settings-row",{key:s,attrs:{name:t.strings[s]},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-access-control-options",{attrs:{role:s},scopedSlots:t._u([{key:"description",fn:function(){return[e("p",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(t.strings[s+"Description"])}})]},proxy:!0}],null,!0),model:{value:t.options.accessControl[s].useDefault,callback:function(e){t.$set(t.options.accessControl[s],"useDefault",e)},expression:"options.accessControl[role].useDefault"}})]},proxy:!0}],null,!0)}):t._e()]}))],2)],1)},i=[],n=e("5530"),r=e("9155"),a=e("2f62"),c={mixins:[r["a"]],computed:Object(n["a"])({},Object(a["e"])(["options"])),methods:{canShowRole:function(t){return"administrator"!==t||this.$aioseo.data.multisite}}},d=c,l=(e("7214"),e("2877")),u=Object(l["a"])(d,o,i,!1,null,null,null);s["default"]=u.exports},"5acb":function(t,s,e){},7214:function(t,s,e){"use strict";e("5acb")},9155:function(t,s,e){"use strict";e.d(s,"a",(function(){return n}));var o=e("5530"),i=e("2f62"),n={data:function(){return{roles:["administrator","editor","author","seoManager","seoEditor"],strings:{tooltip:this.$t.sprintf(this.$t.__("By default, only users with an Administrator role have permission to manage %1$s within your WordPress admin area. With Access Controls, though, you can easily extend specific access permissions to other user roles.",this.$td),"All in One SEO"),accessControl:this.$t.__("Access Control Settings",this.$td),administrator:this.$t.__("Administrator",this.$td),useDefaultSettings:this.$t.__("Use Default Settings",this.$td),editor:this.$t.__("Editor",this.$td),author:this.$t.__("Author",this.$td),seoManager:this.$t.__("SEO Manager",this.$td),seoEditor:this.$t.__("SEO Editor",this.$td),administratorDescription:this.$t.sprintf(this.$t.__("By default Admins have access to %1$sall SEO site settings%2$s",this.$td),"<strong>","</strong>"),editorDescription:this.$t.sprintf(this.$t.__("By default Editors have access to %1$sSEO settings for General Settings, Search Appearance and Social Networks, as well as all settings for individual pages and posts.%2$s",this.$td),"<strong>","</strong>"),authorDescription:this.$t.sprintf(this.$t.__("By default Authors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s",this.$td),"<strong>","</strong>"),seoManagerDescription:this.$t.sprintf(this.$t.__("By default SEO Managers have access to %1$sSEO settings for General Settings, Redirections, and individual pages and posts.%2$s",this.$td),"<strong>","</strong>"),seoEditorDescription:this.$t.sprintf(this.$t.__("By default SEO Editors have access to %1$sSEO settings for individual pages and posts.%2$s",this.$td),"<strong>","</strong>")}}},computed:Object(o["a"])({},Object(i["c"])(["settings"]))}}}]);