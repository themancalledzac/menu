(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1749:function(n,e,t){"use strict";var i=t(2949),r=t(2122),a=t(7294),o=(t(5697),t(6010)),s=t(7480),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(n);return"".concat(t/e).concat(String(n).replace(String(t),"")||"px")}var u=a.forwardRef((function(n,e){var t=n.alignContent,s=void 0===t?"stretch":t,c=n.alignItems,l=void 0===c?"stretch":c,f=n.classes,u=n.className,d=n.component,x=void 0===d?"div":d,g=n.container,m=void 0!==g&&g,p=n.direction,v=void 0===p?"row":p,h=n.item,w=void 0!==h&&h,y=n.justify,b=void 0===y?"flex-start":y,j=n.lg,S=void 0!==j&&j,C=n.md,_=void 0!==C&&C,W=n.sm,Z=void 0!==W&&W,k=n.spacing,E=void 0===k?0:k,M=n.wrap,N=void 0===M?"wrap":M,z=n.xl,I=void 0!==z&&z,B=n.xs,G=void 0!==B&&B,D=n.zeroMinWidth,A=void 0!==D&&D,O=(0,i.Z)(n,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=(0,o.Z)(f.root,u,m&&[f.container,0!==E&&f["spacing-xs-".concat(String(E))]],w&&f.item,A&&f.zeroMinWidth,"row"!==v&&f["direction-xs-".concat(String(v))],"wrap"!==N&&f["wrap-xs-".concat(String(N))],"stretch"!==l&&f["align-items-xs-".concat(String(l))],"stretch"!==s&&f["align-content-xs-".concat(String(s))],"flex-start"!==b&&f["justify-xs-".concat(String(b))],!1!==G&&f["grid-xs-".concat(String(G))],!1!==Z&&f["grid-sm-".concat(String(Z))],!1!==_&&f["grid-md-".concat(String(_))],!1!==S&&f["grid-lg-".concat(String(S))],!1!==I&&f["grid-xl-".concat(String(I))]);return a.createElement(x,(0,r.Z)({className:P,ref:e},O))})),d=(0,s.Z)((function(n){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(n,e){var t={};return c.forEach((function(i){var r=n.spacing(i);0!==r&&(t["spacing-".concat(e,"-").concat(i)]={margin:"-".concat(f(r,2)),width:"calc(100% + ".concat(f(r),")"),"& > $item":{padding:f(r,2)}})})),t}(n,"xs"),n.breakpoints.keys.reduce((function(e,t){return function(n,e,t){var i={};l.forEach((function(n){var e="grid-".concat(t,"-").concat(n);if(!0!==n)if("auto"!==n){var r="".concat(Math.round(n/12*1e8)/1e6,"%");i[e]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?(0,r.Z)(n,i):n[e.breakpoints.up(t)]=i}(e,n,t),e}),{}))}),{name:"MuiGrid"})(u);e.Z=d},6010:function(n,e,t){"use strict";function i(n){var e,t,r="";if("string"===typeof n||"number"===typeof n)r+=n;else if("object"===typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=i(n[e]))&&(r&&(r+=" "),r+=t);else for(e in n)n[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var n,e,t=0,r="";t<arguments.length;)(n=arguments[t++])&&(e=i(n))&&(r&&(r+=" "),r+=e);return r}t.d(e,{Z:function(){return r}})},8474:function(n,e,t){"use strict";t.r(e);var i=t(5893),r=t(1749);e.default=function(){return(0,i.jsx)("main",{children:(0,i.jsx)(r.Z,{children:(0,i.jsxs)("div",{id:"jumbotron-banner",children:[(0,i.jsx)("h2",{children:"Menu is a online restaurant management system."}),(0,i.jsx)("h3",{children:"Build your system and have customer build their own items with your ingredients or have them pick for your Menu."})]})})})}},8581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8474)}])}},function(n){n.O(0,[774,757],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);