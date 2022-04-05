(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"62e4":function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"73cf":function(e,r,t){"use strict";t.r(r);var s=t("7a23"),o={class:"flex items-center min-h-screen"},a=Object(s["j"])("div",{class:"w-0 lg:w-1/3"},[Object(s["j"])("img",{class:"min-h-screen object-cover z-0",src:"img/login-image.png",alt:""})],-1),l={class:"w-full lg:w-2/3 px-4 md:px-8 lg:px-12"},n=Object(s["j"])("img",{src:"img/agrabah-logistics-logo.png",class:"w-48 mb-8",alt:"Agrabah Logistics"},null,-1),c=Object(s["j"])("h1",{class:"text-4xl text-blue font-bold py-4 border-b uppercase"},"Agrabah Logistics Registration",-1),d={class:"mt-10"},i={id:"alert-2",class:"flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200 dismissible",role:"alert"},u=Object(s["j"])("svg",{class:"flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[Object(s["j"])("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"})],-1),b={class:"ml-3 text-sm font-medium text-red-700 dark:text-red-800"},m=Object(s["j"])("span",{class:"sr-only"},"Close",-1),p=Object(s["j"])("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[Object(s["j"])("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),f=[m,p],g={class:"mb-4"},j=Object(s["j"])("label",{class:"block text-sm font-semibold"},"Phone Number",-1),h={class:"mb-4"},O=Object(s["j"])("label",{class:"block text-sm font-semibold"},"Password",-1),w={class:"mb-4"},v=Object(s["j"])("label",{class:"block text-sm font-semibold"},"Confirm Password",-1),x={class:"mb-4"},y=Object(s["j"])("label",{class:"block text-sm font-semibold"},"Register As",-1),k=Object(s["j"])("option",{value:"1"},"Driver",-1),_=Object(s["j"])("option",{value:"2"},"Customer",-1),P=Object(s["l"])("Sign Up"),V={class:"text-sm"},z=Object(s["l"])(" Already have an account? "),q=Object(s["l"])("Sign In");function A(e,r,t,m,p,A){var C=Object(s["K"])("router-link"),S=Object(s["K"])("Field"),B=Object(s["K"])("ErrorMessage"),L=Object(s["K"])("ButtonSolidBlue"),N=Object(s["K"])("Form");return Object(s["D"])(),Object(s["i"])("div",o,[a,Object(s["j"])("div",l,[Object(s["m"])(C,{to:"/"},{default:Object(s["W"])((function(){return[n]})),_:1}),c,Object(s["m"])(N,{onSubmit:A.register,"validation-schema":m.schema},{default:Object(s["W"])((function(e){var t=e.errors;return[Object(s["j"])("div",d,[Object(s["X"])(Object(s["j"])("div",i,[u,Object(s["j"])("div",b,Object(s["N"])(p.uniquePhoneNumber),1),Object(s["j"])("button",{onClick:r[0]||(r[0]=function(){return A.closeAlert&&A.closeAlert.apply(A,arguments)}),type:"button",class:"ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300","data-collapse-toggle":"alert-2","aria-label":"Close"},f)],512),[[s["S"],p.uniquePhoneNumber]]),Object(s["j"])("div",g,[j,Object(s["m"])(S,{modelValue:m.state.phone_number,"onUpdate:modelValue":r[1]||(r[1]=function(e){return m.state.phone_number=e}),type:"text",as:"input",id:"phone-number",name:"phone_number",label:"Phone number",class:Object(s["v"])(["appearance-none rounded relative block w-full px-3 py-2 placeholder-grey text-gray-600 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm",t["phone_number"]?"border border-purple":"border border-grey"])},null,8,["modelValue","class"]),Object(s["m"])(B,{class:"text-purple font-semibold text-sm block my-1",name:"phone_number"})]),Object(s["j"])("div",h,[O,Object(s["m"])(S,{modelValue:m.state.password,"onUpdate:modelValue":r[2]||(r[2]=function(e){return m.state.password=e}),type:"password",as:"input",id:"password",name:"password",label:"Password",class:Object(s["v"])(["appearance-none rounded relative block w-full px-3 py-2 placeholder-grey text-gray-600 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm",t["password"]?"border border-purple":"border border-grey"])},null,8,["modelValue","class"]),Object(s["m"])(B,{class:"text-purple font-semibold text-sm block my-1",name:"password"})]),Object(s["j"])("div",w,[v,Object(s["m"])(S,{modelValue:m.state.confirm_password,"onUpdate:modelValue":r[3]||(r[3]=function(e){return m.state.confirm_password=e}),type:"password",as:"input",id:"confirm-password",name:"confirm_password",label:"Re-type Password",class:Object(s["v"])(["appearance-none rounded relative block w-full px-3 py-2 placeholder-grey text-gray-600 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm",t["confirm_password"]?"border border-purple":"border border-grey"])},null,8,["modelValue","class"]),Object(s["m"])(B,{class:"text-purple font-semibold text-sm block my-1",name:"confirm_password"})]),Object(s["j"])("div",x,[y,Object(s["m"])(S,{as:"select",modelValue:m.state.register_as,"onUpdate:modelValue":r[4]||(r[4]=function(e){return m.state.register_as=e}),id:"register-as",name:"register_as",label:"Register As",class:"appearance-none rounded relative block w-full px-3 py-2 placeholder-grey border border-grey text-gray-600 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm"},{default:Object(s["W"])((function(){return[k,_]})),_:1},8,["modelValue"])]),Object(s["m"])(L,{class:"w-full mb-4"},{default:Object(s["W"])((function(){return[P]})),_:1})])]})),_:1},8,["onSubmit","validation-schema"]),Object(s["j"])("div",V,[z,Object(s["m"])(C,{to:"/login",class:"font-semibold text-blue-light hover:text-blue"},{default:Object(s["W"])((function(){return[q]})),_:1})])])])}var C=t("c24f"),S=t("506a"),B=t("7bb1"),L=t("5fb6"),N={setup:function(){var e=Object(s["F"])({phone_number:"",password:"",confirm_password:"",register_as:"1"}),r=S["a"]().shape({phone_number:S["c"]().required("Phone number is required").matches(/^(09|\+639)\d{9}$/,"Invalid phone number"),password:S["c"]().min(8,"Password must be at least 6 characters").required("Password is required"),confirm_password:S["c"]().oneOf([S["b"]("password"),null],"Password does not must match")});return{state:e,schema:r}},data:function(){return{uniquePhoneNumber:""}},methods:{register:function(){var e=this;C["a"].register({phone_number:this.state.phone_number,password:this.state.password,register_as:this.state.register_as}).then((function(){e.$router.push("/verification")})).catch((function(r){422===r.response.status&&(e.errors=r.response.data.errors)}))},closeAlert:function(){var e=this;e.uniquePhoneNumber=""}},components:{ButtonSolidBlue:L["a"],Form:B["c"],Field:B["b"],ErrorMessage:B["a"]}},F=t("6b0d"),K=t.n(F);const M=K()(N,[["render",A]]);r["default"]=M}}]);
//# sourceMappingURL=register.6cca1283.js.map