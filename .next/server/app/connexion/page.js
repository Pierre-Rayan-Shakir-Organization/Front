(()=>{var e={};e.id=640,e.ids=[640],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1825:()=>{},6475:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>d,pages:()=>u,routeModule:()=>p,tree:()=>c}),s(372),s(6868),s(5866);var r=s(3191),n=s(8716),o=s(7922),i=s.n(o),a=s(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);s.d(t,l);let c=["",{children:["connexion",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,372)),"C:\\Users\\pierr\\Documents\\nodejs\\fivemusics\\nextjs\\nextjs\\fivemusics-frontend\\src\\app\\connexion\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,6868)),"C:\\Users\\pierr\\Documents\\nodejs\\fivemusics\\nextjs\\nextjs\\fivemusics-frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Users\\pierr\\Documents\\nodejs\\fivemusics\\nextjs\\nextjs\\fivemusics-frontend\\src\\app\\connexion\\page.tsx"],d="/connexion/page",x={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/connexion/page",pathname:"/connexion",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9842:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},8183:(e,t,s)=>{Promise.resolve().then(s.bind(s,3433))},5385:(e,t,s)=>{Promise.resolve().then(s.bind(s,6318)),Promise.resolve().then(s.bind(s,5860))},61:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var r=s(326),n=s(7577),o=s(4099);function i(){let[e,t]=(0,n.useState)(""),[s,i]=(0,n.useState)(""),[a,l]=(0,n.useState)(""),[c,u]=(0,n.useState)(""),[d,x]=(0,n.useState)(""),p=async t=>{t.preventDefault();let r={prenom:e,nom:s,email:a,password:c,sexe:d.substring(0,1)};try{await o.Z.post("http://localhost:3000/signup",r),window.location.href="/connexion"}catch(e){console.log(e)}};return(0,r.jsxs)("form",{className:"flex flex-col gap-3 p-10 w-full max-w-sm",onSubmit:p,children:[(0,r.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:["Prenom",r.jsx("input",{type:"text",className:"grow",placeholder:"Le",value:e,onChange:e=>t(e.target.value)})]}),(0,r.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:["Nom",r.jsx("input",{type:"text",className:"grow",placeholder:"goat",value:s,onChange:e=>i(e.target.value)})]}),(0,r.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:["Email",r.jsx("input",{type:"text",className:"grow",placeholder:"daisy@site.com",value:a,onChange:e=>l(e.target.value)})]}),(0,r.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-4 w-4 opacity-70",children:r.jsx("path",{fillRule:"evenodd",d:"M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",clipRule:"evenodd"})}),r.jsx("input",{type:"password",className:"grow",placeholder:"password",value:c,onChange:e=>u(e.target.value)})]}),(0,r.jsxs)("select",{className:"select select-bordered w-full max-w-xs",value:d,onChange:e=>x(e.target.value),children:[r.jsx("option",{value:"",disabled:!0,children:"Sexe"}),r.jsx("option",{value:"Masculin",children:"Masculin"}),r.jsx("option",{value:"Feminin",children:"Feminin"})]}),r.jsx("div",{className:"w-full h-auto flex justify-center",children:r.jsx("button",{className:"w-full btn btn-outline btn-secondary",children:"Inscription"})})]})}},3433:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(326),n=s(7577),o=s(4099),i=s(5860);function a(){let e=(0,n.useRef)(null),t=(0,n.useRef)(null),[s,a]=(0,n.useState)(null),{login:l}=(0,i.a)(),c=async s=>{s.preventDefault();try{let s=await o.Z.post("http://localhost:3000/login",{email:e.current.value,password:t.current.value});console.log("R\xe9ponse compl\xe8te :",s.data),s.data&&s.data.token?(console.log("token : response.data.token"),console.log(s.data.token),l(s.data.token),200===s.status&&(console.log("Le token a bien \xe9t\xe9 enregistr\xe9 dans le localstorage"),window.location.href="/mesmusiques")):(a("Erreur : Le token n'a pas \xe9t\xe9 re\xe7u"),console.log("Erreur : Le token n'a pas \xe9t\xe9 re\xe7u"))}catch(e){a("Erreur connexion"),console.log("Erreur lors de la connexion :",e)}};return(0,r.jsxs)("form",{className:"flex flex-col gap-3 p-10 w-full max-w-sm",onSubmit:c,children:[(0,r.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:["Email",r.jsx("input",{type:"text",className:"grow",placeholder:"daisy@site.com",ref:e})]}),(0,r.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-4 w-4 opacity-70",children:r.jsx("path",{fillRule:"evenodd",d:"M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",clipRule:"evenodd"})}),r.jsx("input",{type:"password",className:"grow",placeholder:"password",ref:t})]}),r.jsx("div",{className:"w-full h-auto flex justify-center",children:r.jsx("button",{className:"w-full btn btn-outline btn-primary",type:"submit",children:"Connexion"})}),s&&(0,r.jsxs)("p",{children:["Erreur : ",s]})]})}var l=s(61);function c(){let[e,t]=(0,n.useState)(!0);return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full min-h-[calc(100vh-4.5rem)] flex flex-row justify-center items-center gap-10 flex-wrap",children:[(0,r.jsxs)("div",{className:"w-2/5 h-auto text-center",children:[r.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 bg-clip-text text-transparent mb-4",children:"Bienvenue sur FiveMusics"}),(0,r.jsxs)("p",{className:"text-lg",children:["D\xe9couvrez, partagez et connectez-vous \xe0 travers la musique que vous aimez. ",r.jsx("br",{}),r.jsx("span",{className:"text-pink-500 font-semibold",children:r.jsx("a",{onClick:()=>{e&&t(!1)},className:"cursor-pointer",children:"Cr\xe9ez un compte"})})," pour explorer un monde de d\xe9couvertes musicales et de nouvelles rencontres."]}),(0,r.jsxs)("p",{className:"text-lg mt-4",children:[r.jsx("span",{className:"text-purple-500 font-semibold",children:r.jsx("a",{onClick:()=>{e||t(!0)},className:"cursor-pointer",children:"D\xe9j\xe0 membre ?"})})," Connectez-vous pour acc\xe9der \xe0 vos playlists personnalis\xe9es et d\xe9couvrir ce que vos amis \xe9coutent."]})]}),e?r.jsx(a,{}):r.jsx(l.default,{})]})})}},6318:(e,t,s)=>{"use strict";s.d(t,{AudioProvider:()=>i,Q:()=>a});var r=s(326),n=s(7577);let o=(0,n.createContext)(void 0),i=({children:e})=>{let[t,s]=(0,n.useState)(null),i=(0,n.useCallback)(e=>{s(e)},[]);return r.jsx(o.Provider,{value:{activeAudioId:t,setActiveAudioId:i},children:e})},a=()=>{let e=(0,n.useContext)(o);if(void 0===e)throw Error("useAudio must be used within an AudioProvider");return e}},5860:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>i,a:()=>a});var r=s(326),n=s(7577);let o=(0,n.createContext)(void 0),i=({children:e})=>{let[t,s]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let e=localStorage.getItem("token");e&&s(e)},[]),(0,n.useEffect)(()=>{t?localStorage.setItem("token",t):localStorage.removeItem("token")},[t]),r.jsx(o.Provider,{value:{token:t,setToken:s,login:e=>{s(e)},logout:()=>{s(null),window.location.href="/"}},children:e})},a=()=>{let e=(0,n.useContext)(o);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}},372:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>o,default:()=>a});var r=s(8570);let n=(0,r.createProxy)(String.raw`C:\Users\pierr\Documents\nodejs\fivemusics\nextjs\nextjs\fivemusics-frontend\src\app\connexion\page.tsx`),{__esModule:o,$$typeof:i}=n;n.default;let a=(0,r.createProxy)(String.raw`C:\Users\pierr\Documents\nodejs\fivemusics\nextjs\nextjs\fivemusics-frontend\src\app\connexion\page.tsx#default`)},6868:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(9510);s(833);var n=s(8570);let o=(0,n.createProxy)(String.raw`C:\Users\pierr\Documents\nodejs\fivemusics\nextjs\nextjs\fivemusics-frontend\src\app\contexts\AudioContext.context.tsx`),{__esModule:i,$$typeof:a}=o;o.default;let l=(0,n.createProxy)(String.raw`C:\Users\pierr\Documents\nodejs\fivemusics\nextjs\nextjs\fivemusics-frontend\src\app\contexts\AudioContext.context.tsx#AudioProvider`);(0,n.createProxy)(String.raw`C:\Users\pierr\Documents\nodejs\fivemusics\nextjs\nextjs\fivemusics-frontend\src\app\contexts\AudioContext.context.tsx#useAudio`);let c=(0,n.createProxy)(String.raw`C:\Users\pierr\Documents\nodejs\fivemusics\nextjs\nextjs\fivemusics-frontend\src\app\contexts\AuthContext.context.tsx`),{__esModule:u,$$typeof:d}=c;c.default;let x=(0,n.createProxy)(String.raw`C:\Users\pierr\Documents\nodejs\fivemusics\nextjs\nextjs\fivemusics-frontend\src\app\contexts\AuthContext.context.tsx#AuthProvider`);function p({children:e}){return r.jsx("html",{lang:"fr",children:r.jsx("body",{children:r.jsx(x,{children:r.jsx(l,{children:e})})})})}(0,n.createProxy)(String.raw`C:\Users\pierr\Documents\nodejs\fivemusics\nextjs\nextjs\fivemusics-frontend\src\app\contexts\AuthContext.context.tsx#useAuth`)},833:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[819,99],()=>s(6475));module.exports=r})();