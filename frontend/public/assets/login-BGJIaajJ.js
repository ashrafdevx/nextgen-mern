import{c as m,r as c,a as u,j as e}from"./index-CfsJ0GSq.js";import{u as x}from"./index.esm-DULyjJBF.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=m("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),p=()=>{const[t,a]=c.useState(!1),i=u(),{register:l,handleSubmit:o,formState:{errors:s}}=x(),d=async n=>{a(!0);try{await new Promise(r=>setTimeout(r,1500)),console.log("Login data:",n),i("/")}catch(r){console.error("Login error:",r)}finally{a(!1)}};return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Welcome back"}),e.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Please sign in to your account"})]}),e.jsxs("form",{className:"mt-8 space-y-6",onSubmit:o(d),children:[e.jsxs("div",{className:"rounded-md shadow-sm space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),e.jsx("input",{id:"email",type:"email",...l("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}}),className:"mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Enter your email"}),s.email&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:s.email.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsx("input",{id:"password",type:"password",...l("password",{required:"Password is required",minLength:{value:6,message:"Password must be at least 6 characters"}}),className:"mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Enter your password"}),s.password&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:s.password.message})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),e.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),e.jsx("div",{className:"text-sm",children:e.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",disabled:t,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",children:t?e.jsx(b,{className:"animate-spin h-5 w-5"}):"Sign in"})})]}),e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-gray-300"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"px-2 bg-white text-gray-500",children:"Or continue with"})})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[e.jsx("button",{className:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:"Google"}),e.jsx("button",{className:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:"GitHub"})]})]})]})})};export{p as default};
