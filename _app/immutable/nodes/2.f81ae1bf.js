import{s as V,n as K,r as A,o as L}from"../chunks/scheduler.e108d1fd.js";import{S as j,i as q,g as p,s as S,h as u,j as y,y as D,c as I,f as m,k as f,z as w,a as x,x as v,A as M}from"../chunks/index.d3117ae7.js";import{b as T}from"../chunks/paths.36933d47.js";function E(o){let e,n,r='Go to <span class="svelte-eaygal">About</span> page.',h,a,d,t,c,k="This is the about page.",_,l,C='Go back <span class="svelte-eaygal">Home</span>.',b,H;return{c(){e=p("div"),n=p("div"),n.innerHTML=r,h=S(),a=p("div"),d=S(),t=p("div"),c=p("div"),c.textContent=k,_=S(),l=p("div"),l.innerHTML=C,this.h()},l(i){e=u(i,"DIV",{id:!0,class:!0});var s=y(e);n=u(s,"DIV",{"data-svelte-h":!0}),D(n)!=="svelte-1q33hne"&&(n.innerHTML=r),h=I(s),a=u(s,"DIV",{id:!0,class:!0}),y(a).forEach(m),s.forEach(m),d=I(i),t=u(i,"DIV",{id:!0,class:!0});var g=y(t);c=u(g,"DIV",{"data-svelte-h":!0}),D(c)!=="svelte-k2jrq3"&&(c.textContent=k),_=I(g),l=u(g,"DIV",{"data-svelte-h":!0}),D(l)!=="svelte-1fzepcx"&&(l.innerHTML=C),g.forEach(m),this.h()},h(){f(a,"id","rgbKineticSlider"),f(a,"class","rgbKineticSlider"),f(e,"id","home"),f(e,"class","row svelte-eaygal"),w(e,"hidden",o[0]!=="home"),f(t,"id","about"),f(t,"class","row svelte-eaygal"),w(t,"hidden",o[0]!=="about")},m(i,s){x(i,e,s),v(e,n),v(e,h),v(e,a),x(i,d,s),x(i,t,s),v(t,c),v(t,_),v(t,l),b||(H=[M(n,"click",o[1]),M(l,"click",o[2])],b=!0)},p(i,[s]){s&1&&w(e,"hidden",i[0]!=="home"),s&1&&w(t,"hidden",i[0]!=="about")},i:K,o:K,d(i){i&&(m(e),m(d),m(t)),b=!1,A(H)}}}function G(o,e,n){L(()=>{function d(){if(window.images=[T+"img.png"],window.texts=[[""]],typeof window<"u"&&"rgbKineticSlider"in window)return new window.rgbKineticSlider({slideImages:window.images,itemsTitles:window.texts,backgroundDisplacementSprite:T+"map-1.jpg",cursorDisplacementSprite:T+"displace-circle.png",cursorScaleIntensity:.5,cursorMomentum:.14,swipe:!1,swipeDistance:window.innerWidth*.4,swipeScaleIntensity:2,slideTransitionDuration:.8,transitionScaleIntensity:30,transitionScaleAmplitude:160})}d()});let r="home";function h(){n(0,r="about")}function a(){n(0,r="home")}return[r,h,a]}class P extends j{constructor(e){super(),q(this,e,G,E,V,{})}}export{P as component};
