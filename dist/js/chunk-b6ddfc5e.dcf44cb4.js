(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6ddfc5e"],{"22ff":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=c("9c31"),a=c.n(o),l={class:"container mx-auto max-w-2xl"},s={class:"grid place-items-center px-4 md:px-8 lg:px-12"},r={class:"text-center"},i=Object(n["j"])("img",{class:"w-32 md:w-40 lg:w-48 mx-auto mb-8",src:a.a,alt:"Account Verification"},null,-1),b=Object(n["j"])("h2",{class:"block font-bold text-xl md:text-2xl lg:text-3xl leading-6 mb-4"},"One-Time Password Verification",-1),d={class:"block leading-5 my-3"},u=Object(n["l"])("To know you're real. Please confirm your account by entering the One-Time Code sent to "),j={class:"font-semibold"},f=Object(n["l"])("."),m={class:"mb-4 w-full"},p=Object(n["j"])("label",{class:"block text-sm font-semibold sr-only"},"Verify Account",-1),O=Object(n["j"])("p",{class:"block text-center leading-5 my-4"},[Object(n["l"])("Didn't received the code? "),Object(n["j"])("a",{href:"",class:"font-semibold text-blue-light hover:text-blue"},"Resend Code")],-1),x=Object(n["l"])("Verify"),g=Object(n["j"])("p",{class:"block text-center text-xs md:text-sm lg:text-base leading-4 my-3"},[Object(n["l"])("By continuing you agree and accept the "),Object(n["j"])("a",{href:"",class:"font-semibold text-blue-light hover:text-blue"},"Terms and Conditions"),Object(n["l"])(" and "),Object(n["j"])("a",{href:"",class:"font-semibold text-blue-light hover:text-blue"},"Privacy Policy"),Object(n["l"])(".")],-1);function h(e,t,c,o,a,h){var y=Object(n["K"])("Navigation"),v=Object(n["K"])("ButtonSolidBlue"),w=Object(n["K"])("Form");return Object(n["D"])(),Object(n["i"])(n["a"],null,[Object(n["m"])(y),Object(n["j"])("main",l,[Object(n["j"])("section",s,[Object(n["j"])("div",r,[i,b,Object(n["j"])("p",d,[u,Object(n["j"])("span",j,Object(n["N"])(a.phone_number),1),f]),Object(n["m"])(w,{onSubmit:h.verify},{default:Object(n["W"])((function(){return[Object(n["j"])("div",m,[p,Object(n["X"])(Object(n["j"])("input",{type:"number",name:"otp_code","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.state.otp_code=e}),class:"appearance-none rounded relative block w-full px-3 py-2 border border-grey placeholder-grey text-gray-800 focus:outline-none focus:ring-grey-dark focus:ring-0 focus:border-grey-dark focus:z-10 sm:text-sm"},null,512),[[n["R"],o.state.otp_code]])]),O,Object(n["m"])(v,{class:"w-full my-4 font-semibold"},{default:Object(n["W"])((function(){return[x]})),_:1})]})),_:1},8,["onSubmit"]),g])])])],64)}var y=c("f4dd"),v=c("5fb6"),w=c("7bb1"),k=c("bc3a"),_=c.n(k),B={components:{Navigation:y["a"],ButtonSolidBlue:v["a"],Form:w["c"]},data:function(e){return{phone_number:""}},setup:function(){var e=Object(n["F"])({otp_code:""});return{state:e}},methods:{verify:function(){var e=this,t=this;_.a.post("http://127.0.0.1:8000/api/verify",{otp_code:this.state.otp_code}).then((function(){e.$router.push("/dashboard")})).catch((function(e){e.response&&(t.invalidCredentials=e.response.data.message)}))}}},V=c("6b0d"),C=c.n(V);const P=C()(B,[["render",h]]);t["default"]=P},"9c31":function(e,t,c){e.exports=c.p+"img/verification.3f481c5a.svg"}}]);
//# sourceMappingURL=chunk-b6ddfc5e.dcf44cb4.js.map