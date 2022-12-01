"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4856],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),h=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=h(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=h(o),f=n,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return o?r.createElement(d,s(s({ref:t},l),{},{components:o})):r.createElement(d,s({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var h=2;h<a;h++)s[h]=o[h];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6268:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a=o.p+"assets/images/zero_shot-1af9e1cb88412f9fdefa3b07b67c4193.png",s=o.p+"assets/images/zero_shot_example-89065990663d4ef044011844ff77f9af.png",i={sidebar_position:4},p="Zero Shot Chain of Thought",h={unversionedId:"basics/zero_shot_cot",id:"basics/zero_shot_cot",title:"Zero Shot Chain of Thought",description:"Zero Shot Chain of Thought (Zero-shot-CoT) prompting (@kojima2022large) is a",source:"@site/docs/basics/zero_shot_cot.md",sourceDirName:"basics",slug:"/basics/zero_shot_cot",permalink:"/docs/basics/zero_shot_cot",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v0.0.2/docs/basics/zero_shot_cot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Chain of Thought Prompting",permalink:"/docs/basics/chain_of_thought"},next:{title:"Generated Knowledge",permalink:"/docs/basics/generated_knowledge"}},l={},c=[{value:"Results",id:"results",level:2},{value:"Example",id:"example",level:2},{value:"Incorrect",id:"incorrect",level:4},{value:"Correct",id:"correct",level:4},{value:"Ablations of Interest",id:"ablations-of-interest",level:2},{value:"Notes",id:"notes",level:2}],m={toc:c};function f(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"zero-shot-chain-of-thought"},"Zero Shot Chain of Thought"),(0,n.kt)("p",null,"Zero Shot Chain of Thought (Zero-shot-CoT) prompting",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is a\nfollow up to CoT prompting",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),' which introduces an incredibly\nsimple zero shot prompt. They find that by appending the words "',(0,n.kt)("strong",{parentName:"p"},"Let's think step\nby step."),'" to the end of a question, LLMs are able to generate a chain of\nthought that answers the question. From this chain of thought, they are able to\nextract more accurate answers.'),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:a,style:{width:"500px"}})),(0,n.kt)("p",null,"The full Zero-shot-CoT process involves two separate prompts/completions.\nIn the below image, the top bubble on the left generates a chain of thought, while the top bubble on\nthe right takes in the output from the first prompt (including the first prompt itself),\nand extracts the answer from the chain of thought. This second prompt is a ",(0,n.kt)("em",{parentName:"p"},"self augmented")," prompt."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:s,style:{width:"500px"}})),(0,n.kt)("h2",{id:"results"},"Results"),(0,n.kt)("p",null,"Zero-shot-CoT was also effective in improving results on arithmetic, commonsense,\nand symbolic reasoning tasks. However, unsurprisingly, it was usually not as\neffective as CoT prompting. An important use case for Zero-shot-CoT is when obtaining\nfew shot examples for CoT prompting is difficult. "),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Here are a few demos provided courtesy of ",(0,n.kt)("a",{parentName:"p",href:"https://trydyno.com"},"Try Dyno"),". This first\ndemo shows GPT-3 failing a simple math question, while the second demo uses a\nZero-shot-CoT prompt and successfully solves the problem. Feel free to enter your\nOpenAI API key (Click Generate) and play around with the examples."),(0,n.kt)("h4",{id:"incorrect"},"Incorrect"),(0,n.kt)("iframe",{src:"https://embed.trydyno.com/embed?model=text-davinci-002&promptText=If%20John%20has%205%20pears%2C%20then%20eats%202%2C%20and%20buys%205%20more%2C%20then%20gives%203%20to%20his%20friend%2C%20how%20many%20pears%20does%20he%20have%3F&response=John%20has%208%20pears.&maxTokens=256&boxRows=3",frameBorder:"0",style:{overflow:"hidden",width:"100%"},width:"100%",onLoad:e=>{let t=e.currentTarget;window.addEventListener("message",(e=>{"frameheight"==e.data[0]&&(t.height=e.data[1]+"px")}),!1)}}),(0,n.kt)("h4",{id:"correct"},"Correct"),(0,n.kt)("iframe",{src:"https://embed.trydyno.com/embed?model=text-davinci-002&promptText=If%20John%20has%205%20pears%2C%20then%20eats%202%2C%20and%20buys%205%20more%2C%20then%20gives%203%20to%20his%20friend%2C%20how%20many%20pears%20does%20he%20have%3F%0A%0ALet's%20think%20step%20by%20step.&response=John%20starts%20with%205%20pears.%20He%20eats%202%20pears%2C%20leaving%20him%20with%203%20pears.%20He%20buys%205%20more%20pears%2C%20giving%20him%20a%20total%20of%208%20pears.%20He%20gives%203%20pears%20to%20his%20friend%2C%20leaving%20him%20with%20only%205%20pears.&maxTokens=256&boxRows=3",frameBorder:"0",style:{overflow:"hidden",width:"100%"},width:"100%",onLoad:e=>{let t=e.currentTarget;window.addEventListener("message",(e=>{"frameheight"==e.data[0]&&(t.height=e.data[1]+"px")}),!1)}}),(0,n.kt)("h2",{id:"ablations-of-interest"},"Ablations of Interest"),(0,n.kt)("p",null,'Kojima et al. experiment with a number of different Zero-shot-CoT prompts\n(e.g. "Let\u2019s solve this problem by splitting it into steps." or "Let\u2019s think about this logically."), but they find that "Let\'s think step by step" is most effective for their\nchosen tasks.'),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("p",null,"The extraction step often must be task specific, making Zero-Shot-CoT less\ngeneralizable than it appears at first."),(0,n.kt)("p",null,"Anecdotally, I've found that Zero-shot-CoT style prompts are sometimes effective\nin improving the length of completions for generative tasks. For example, consider\nthe standard prompt ",(0,n.kt)("inlineCode",{parentName:"p"},"Write a story about a frog and a mushroom who become friends."),"\nAppending the words ",(0,n.kt)("inlineCode",{parentName:"p"},"Let's think step by step.")," to the end of this prompt leads to\na much longer completion."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);