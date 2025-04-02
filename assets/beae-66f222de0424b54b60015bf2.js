(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "66f222de0424b54b60015bf2";
              window.beaePageSetting.pageTitle = "TEST"; 
              window.beaePageSetting.pageType = "product";

          let js_6K1DTK8D = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-j24t45l9section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-j24t45l9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-j24t45l9');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((r,n)=>{r.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),n.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-j24t45l9: ', ex)
      };
    

      try {
        let argid = 'beae-j24t45l9section-featured-product',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-j24t45l9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-j24t45l9');
        args.el = args.els[0];
        ((a) => { var w,C;const o=a.el.querySelector("#Product-json-"+a.id);let t=!1;const i=JSON.parse(o!=null&&o.innerHTML?o==null?void 0:o.innerHTML:"{}");let r=i!=null&&i.selected_or_first_available_variant?i==null?void 0:i.selected_or_first_available_variant:(w=i.variants)==null?void 0:w[0];window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(C=a.el.querySelector(".beae-money-format"))==null?void 0:C.innerHTML),r&&(r=i.variants.find(g=>g.id==r.id)),n(r);function s(g){const k=a.el.querySelector(".beae-product-single__price"),y=a.el.querySelector(".beae-product-single__price--regular");if(k){let S=window.BeaeFormatMoney(g.price);S&&typeof S=="string"&&(S=S.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),k.innerHTML=S}if(y)if(g.compare_at_price){y.style.display="block";let S=window.BeaeFormatMoney(g.compare_at_price);S&&typeof S=="string"&&(S=S.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),y.innerHTML=S}else y.style.display="none"}function m(g){const k=a.el.querySelector(".beae-product-single__price--badged");if(!k)return;const y=k.getAttribute("type"),S=k.getAttribute("data-sale")||"",V=k.getAttribute("data-sold-out");let B="";if(y=="percent")B=Math.floor((parseFloat(g.compare_at_price)-parseFloat(g.price))*100/parseFloat(g.compare_at_price));else if(y=="dollar")B=window.BeaeFormatMoney(parseFloat(g.compare_at_price)-parseFloat(g.price));else if(y=="none"){k.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),k.classList.add("beae-sale-hidden"),k.innerHTML="";return}const $=g.inventory_quantity,L=g.inventory_policy;if($>0||$<1&&L=="continue"||!g.inventory_management){const M=parseFloat(g.price),N=parseFloat(g.compare_at_price);if(N&&N>M){k.classList.remove("beae-sale-sold-out","beae-sale-hidden"),k.classList.add("beae-product-single__price--sale");let T=S.replace(new RegExp("{\\s*?sale\\s*?}","g"),B);T&&(T=T.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),k.innerHTML=T}else k.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),k.classList.add("beae-sale-hidden"),k.innerHTML=""}else k.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),k.classList.add("beae-sale-sold-out"),k.innerHTML=V}function c(g){const k=a.el.querySelector(".beae-badged-wrapper > span");if(!k)return;const y=k.getAttribute("type"),S=k.getAttribute("data-sale")||"",V=k.getAttribute("data-sold-out");let B="";if(y=="percent")B=Math.floor((parseFloat(g.compare_at_price)-parseFloat(g.price))*100/parseFloat(g.compare_at_price));else if(y=="dollar")B=window.BeaeFormatMoney(parseFloat(g.compare_at_price)-parseFloat(g.price));else if(y=="none"){k.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),k.classList.add("beae-sale-hidden"),k.innerHTML="";return}const $=g.inventory_quantity,L=g.inventory_policy;if($>0||$<1&&L=="continue"||!g.inventory_management){const M=parseFloat(g.price),N=parseFloat(g.compare_at_price);if(N&&N>M){k.classList.remove("beae-sale-sold-out","beae-sale-hidden"),k.classList.add("beae-product-single__price--sale");let T=S.replace(new RegExp("{\\s*?sale\\s*?}","g"),B);T&&(T=T.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),k.innerHTML=T}else k.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),k.classList.add("beae-sale-hidden"),k.innerHTML=""}else k.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),k.classList.add("beae-sale-sold-out"),k.innerHTML=V}function l(g){t=!0;const k=a.el.querySelector(".beae-x-product-gallery .beae-slider");k&&i&&g.featured_media&&k.dispatchEvent(new CustomEvent("activeSlide",{detail:{id:g.featured_media.id},bubbles:!0,cancelable:!0,composed:!1}))}function n(g){const k=a.el.querySelector(".beae-x-inventory");if(!k||!g)return;const y=k.children[0],S=k.getAttribute("data-in-stock-text"),V=k.getAttribute("data-out-stock-text");k.getAttribute("data-inventory-text");const B=k.getAttribute("data-pre-order-text"),$=k.getAttribute("data-very-low-stock-text"),L=k.getAttribute("data-low-stock-text"),M=k.getAttribute("data-incoming-date-text"),N=k.getAttribute("data-low-number")??20,T=k.getAttribute("data-very-low-number")??5,E=k.getAttribute("data-show-next-incoming-date"),j=k.getAttribute("data-max-number")??60,A=k.querySelector(".beae-inventory-label"),F=k.querySelector(".beae-inventory-process-body");function H(P){return P?P.replace("{quantity}",g.inventory_quantity).replace("{next_incoming_date}",g.next_incoming_date):""}!y||!A||(g.available?g.inventory_policy==="continue"&&g.inventory_quantity<1?(A.innerHTML=H(B),y.classList="",y.classList.add("beae-inventory-pre-order")):g.inventory_quantity<=T?(A.innerHTML=H($),y.classList="",y.classList.add("beae-inventory-very-low")):g.inventory_quantity<=N?(A.innerHTML=H(L),y.classList="",y.classList.add("beae-inventory-low")):(A.innerHTML=H(S),y.classList="",y.classList.add("beae-inventory-in-stock")):g.next_incoming_date&&E?(A.innerHTML=H(M),y.classList="",y.classList.add("beae-incoming-transfer")):(A.innerHTML=H(V),y.classList="",y.classList.add("beae-inventory-out-stock")),F&&(g.inventory_quantity<=j?F.style.width=g.inventory_quantity/j*100+"%":F.style.width="100%"))}function d(g){const k=a.el.querySelector(".beae-add-to-cart--submit");if(k){const S=k.querySelector(".beae-add-to-cart-text-content");g.available?k&&(k.removeAttribute("disabled"),S&&(S.innerHTML=k.getAttribute("data-add-to-cart-text"))):k&&(a.mode.value=="live"&&k.setAttribute("disabled","disabled"),S&&(S.innerHTML=k.getAttribute("data-sold-out-text")))}const y=a.el.querySelector(".shopify-payment-button__button");y&&(g.inventory_quantity>0?y.removeAttribute("disabled"):a.mode.value=="live"&&y.setAttribute("disabled","disabled"))}function p(g){const k=a.el.querySelector(".beae-quantity-input"),y=a.el.querySelectorAll(".beae-quantity-btn");if(y&&y.forEach(S=>{g&&g.available?S.removeAttribute("disabled"):a.mode.value=="live"&&S.setAttribute("disabled","disabled")}),k){if(g)g.available?k.removeAttribute("disabled"):a.mode.value=="live"&&k.setAttribute("disabled","disabled");else{k.value=1,a.mode.value=="live"&&k.setAttribute("disabled","disabled");return}const S=g.inventory_quantity,V=g.inventory_policy;let B=9999;g.inventory_management&&V==="deny"&&(B=S),S<1&&V=="continue"&&(B=999999);let $=parseInt(k.value);$>B&&($=B),$=isNaN($)||!$?1:$,k.value=$,k.setAttribute("max",B)}}function u(g){if(g){let k=a.el.querySelector(".beae-pa-container");if(k&&a.mode.value=="live"){const y=k.getAttribute("data-section-id-template");k.innerHTML="",window.fetch(window.location.origin+"/variants/"+g.id+"/?section_id="+y,{method:"GET",headers:{"Content-Type":"text/html"}}).then(S=>S.text()).then(S=>{let V=S.match(/<Beae-custom-liquid-pickup>(|[\s\S]+?)<\/Beae-custom-liquid-pickup>/g);V&&V[0]&&(k.innerHTML=V[0]);let B=k.querySelector(".beae-pa--btn"),$=k.querySelector(".beae-pa--detail");if(B){const L=k.closest("section.beae-section");L&&L.getAttribute("data-sectionid"),B.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup($,{layout:k.getAttribute("data-layout"),layoutMobile:"bottom",width:k.getAttribute("data-width"),id:a.id})})}}).catch(S=>{console.warn(S.message)})}}}const h=a.el.querySelector(".beae-variant-size-guide");if(h){const g=h.querySelector(".beae-variant-size-guide-btn"),k=h.querySelector(".beae-variant-size-guide-content"),y=a.el.querySelector(".beae-content-size-chart-preview");let S=window.isPreviewTemplate&&y||k;if(g&&S){const V=a.el.getAttribute("data-sectionid");g.addEventListener("click",()=>{window!=null&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(S,{layout:"center",layoutMobile:"bottom",width:"auto",sectionId:V})})}}const f=a.el.querySelectorAll(".beae-custom-select_wrp");f&&f.length&&a.mode.value=="live"&&f.forEach(g=>{const k=g.querySelector("button.beae-custom-select__btn"),y=g.closest("div.beae-block.beae-core");k.addEventListener("click",function(S){g.classList.toggle("active"),y.style.position="relative",y.style.zIndex="1"}),document.addEventListener("click",function(S){g.contains(S.target)||(g.classList.remove("active"),y.style={})})});function v(){const g=a.el.querySelector(".beae-custom-select_wrp.active");g&&g.classList.remove("active")}const b=a.el.querySelector(".beae-x-variant");let x=!1;if(b){let g=function(T,E){if(!T)return[];let j=T.options.filter((A,F)=>F!=E);return i.variants.filter(A=>j.every(F=>A.options.includes(F)))??[]},k=function(T,E,j){if(!T)return null;let A=T.options.filter((F,H)=>H!=E);return i.variants.find(F=>F.options.every(H=>[j,...A].includes(H)))},y=function(T){if(!T)return;const E=a.el.querySelector("form.beae-product-form-next");if(E){E.getAttribute("data-variant-id",T.id);const j=E.querySelector('input[type="hidden"][name="id"]');j&&j.setAttribute("value",T.id)}b.querySelectorAll(".beae-variant-label").forEach(j=>{const A=parseInt(j.getAttribute("data-option-position"))-1;j.innerHTML=T.options[A]}),L||b.querySelectorAll(".beae-product-images-list").forEach(j=>{const A=parseInt(j.getAttribute("data-option-position"))-1;let F=[];g(T,A).forEach(H=>{F.push(`
                  <span
                    class="beae-product-swatch-item-image"
                    variant-id=${H.id}
                  >
                    <img
                      src="${H.featured_image?H.featured_image.src:"//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif"}"
                      alt="${H.title}"
                      height="120"
                      width="120"
                      loading="lazy"
                    />
                  </span>
                `)}),j.querySelectorAll(".beae-product-variant-item-image").forEach((H,P)=>{H.innerHTML=F[P]})}),b.querySelectorAll(".beae-product-variant-item").forEach(j=>{const A=parseInt(j.getAttribute("data-option-position"))-1,F=j.getAttribute("data-value")?decodeURIComponent(j.getAttribute("data-value")):"",H=k(T,A,F);H&&(j.setAttribute("data-variant-id",H.id),H.inventory_management&&H.inventory_quantity<1&&H.inventory_policy!="continue"?j.classList.add("variant-item-disable"):j.classList.remove("variant-item-disable"))})},S=function(T){T.options.forEach((E,j)=>{let A=j+1;const F=b.querySelectorAll('.beae-variant-option-list[data-option-position="'+A+'"] > li');let H=null;const P=b.querySelector("select#"+N+"-option-"+j);if(P){for(let U=0;U<F.length;U++)F[U].classList.remove("beae-product-variant-item--selected"),decodeURIComponent(F[U].getAttribute("data-value"))==E&&(H=F[U]);H&&H.classList.add("beae-product-variant-item--selected"),P.value=E}const z=H&&H.closest(".beae-custom-select_wrp");if(z){const U=H&&H.getAttribute("data-color"),K=z.querySelector(".beae-selected-color");K&&(K.style="--beae-color-variant: "+U);const O=z.querySelector(".beae-text-selected");O&&(O.innerHTML=E)}})},V=function(T,E){$(T),T&&(r=T,n(T),p(T),d(T),m(T),c(T),y(T),s(T),l(T),u(T))},B=function(){const T=a.el.querySelector('.beae-product-option-cont[data-swatch-type="variant_image"]');if(!T)return;const E=T.getAttribute("data-option-position"),j="//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif",A=a.el.querySelectorAll('.beae-product-option-cont:not([data-swatch-type="variant_image"])'),F={};A&&A.length&&A.forEach(z=>{const U=z.querySelector(".beae-product-variant-item--selected");if(!U)return;const K=U.getAttribute("data-option-position"),O=decodeURIComponent(U.getAttribute("data-value"));F["option"+K]=O});const H=i.variants.filter(z=>Object.keys(F).every(U=>F[U]==z[U])),P=T.querySelectorAll(".beae-product-variant-item");P&&P.length&&P.forEach(z=>{const U=decodeURIComponent(z.getAttribute("data-value")),K=H.find(O=>O["option"+E]==U);z.innerHTML=`
                        <span class="beae-product-swatch-item-image">
                        <img
                        src="${K&&K.featured_image?K.featured_image.src:j}"
                        alt="${K&&K.title}"
                        height="100"
                        width="100"
                        loading="lazy"
                        />
                    </span>
                        `})},$=function(T){let E=i.variants,j=T&&T.option1,A=T&&T.option2;if(!T){const P=a.el.querySelector('.beae-variant-option-list[data-option-position="1"] .beae-product-variant-item--selected');P&&(j=decodeURIComponent(P.getAttribute("data-value")));const z=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected');z&&(A=decodeURIComponent(z.getAttribute("data-value")))}let F=[],H=[];if(j&&(E=i.variants.filter(P=>P.option1==j),E.forEach(P=>{P.option2&&!(F!=null&&F.includes(P.option2))&&F.push(P.option2)}),E.forEach(P=>{P.option2==A&&P.option3&&!(H!=null&&H.includes(P.option3))&&H.push(P.option3)})),[2,3].forEach(P=>{const z=a.el.querySelectorAll('.beae-variant-option-list[data-option-position="'+P+'"] .beae-product-variant-item');if(z){let U=P==2?F:H;z.forEach(K=>{const O=decodeURIComponent(K.getAttribute("data-value"));U.includes(O)?K.setAttribute("data-unavailable",!1):K.setAttribute("data-unavailable",!0)})}}),!T){if(F&&F.length){const P=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected[data-unavailable="false"]'),z=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item[data-unavailable="false"]');!P&&z&&z.click()}if(H&&H.length){a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item--selected[data-unavailable="false"]');const P=a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item[data-unavailable="false"]');P&&P.click()}}B()},L=!1,M=b.querySelector('select[name="id"]');a.el.addEventListener("activeVariant",function(T){if(t){t=!1;return}if(!i.variants||!T.detail.id)return;const E=i.variants.find(j=>!j||!j.featured_media||!j.featured_media.id||!T.detail.id?!1:j.featured_media.id==T.detail.id);!E||r.id==E.id||(S(E),$(E),r=E,n(E),p(E),d(E),y(E),s(E),m(E),c(E),u(E))});const N=M&&M.getAttribute("id");if(M&&window.Shopify&&window.Shopify.OptionSelectors){let T=function(E){var P;const j=parseInt(E.getAttribute("data-option-position"))-1,A=b.querySelector("select#"+N+"-option-"+j),F=decodeURIComponent(E.getAttribute("data-value")??E.value);if(A){const z=((P=E.parentElement)==null?void 0:P.children)??[];for(let U=0;U<z.length;U++)z[U].classList.remove("beae-product-variant-item--selected");E.classList.add("beae-product-variant-item--selected"),A.value=F,A.onchange()}const H=E.closest(".beae-custom-select_wrp");if(H){const z=E.getAttribute("data-color"),U=H.querySelector(".beae-selected-color");U&&(U.style="--beae-color-variant: "+z);const K=H.querySelector(".beae-text-selected");K&&(K.innerHTML=F)}};new window.Shopify.OptionSelectors(N,{product:i,onVariantSelected:V,enableHistoryState:a.mode.value=="live"}),b.querySelectorAll(".beae-product-variant-item").forEach(E=>{E.addEventListener("click",function(j){L=!1,T(E),v()})}),b.querySelectorAll(".beae-product-variant-item-image").forEach(E=>{E.addEventListener("click",function(j){L=!0,T(E)})})}}else x=!0;i.has_only_default_variant&&(x=!0),x&&_();function _(){r&&((r==null?void 0:r.title)=="Default Title"&&(r=i.variants[0]),n(r),p(r),d(r),m(r),c(r))} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-j24t45l9: ', ex)
      };
    

      try {
        let argid = 'beae-hboal4cnblock-gallery',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hboal4cn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hboal4cn');
        args.el = args.els[0];
        ((a) => { setTimeout(()=>{a.el.querySelector("button.beae-media-zoom")&&a.el.querySelectorAll("button.beae-media-zoom").forEach(o=>o.addEventListener("click",t=>{a.mode.value,o.closest(".beae-slider-items")&&(a.el.querySelectorAll(".beae-slider-items>*.active").forEach(b=>b.classList.remove("active")),o.parentNode.classList.add("active"));let i=document.createElement("div"),r=a.el.querySelectorAll("div.beae-slider-items > *"),s=a.el.querySelector("div.beae-slider-content").getBoundingClientRect();i.setAttribute("class","beae-sections beae-content-wrapper"),i.innerHTML=`
        <div class="${a.id}">
          <div class="beae-gallery-zoom">
            <div class="beae-gallery-zoom-content" style="transform-origin: ${s.left}px ${s.top+s.height/2}px;">
              <div class="beae-gallery-zoom-items">
                ${Array.from(r).map((b,x)=>{const _=b.getAttribute("type");return!_||(_==null?void 0:_.toLowerCase())!="image"?"":`
                    <div class="beae-gallery-zoom-item${b.classList.contains("active")?" active":""}" style="${b.classList.contains("active")?"order: -1;":""}">
                      ${b.innerHTML}
                    </div>
                  `}).join("")}
              </div>
            </div>
            <div class="beae-gallery-zoom-controls">
              <div class="beae-gallery-zoom-pagination">
                <button class="pagination_item prev">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
                <span class="pagination_item per">0 / 0</span>
                <button class="pagination_item next">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <button class="beae-gallery-zoom-close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </button>
          </div>
        </div>
      `,document.body.appendChild(i),document.body.style.overflow="hidden";let m=i.querySelector("button.beae-gallery-zoom-close"),c=i.querySelector(".beae-gallery-zoom"),l=i.querySelector(".beae-gallery-zoom-content"),n=i.querySelector(".beae-gallery-zoom-pagination .pagination_item.per"),d=i.querySelector(".pagination_item.prev"),p=i.querySelector(".pagination_item.next"),u=i.querySelectorAll(".beae-gallery-zoom-item"),h=i.querySelector(".beae-gallery-zoom-controls"),f=()=>{let b=i.querySelector(".beae-gallery-zoom-item.active"),x=0;Array.from(r).forEach(_=>{var w;((w=_.getAttribute("type"))==null?void 0:w.toLowerCase())=="image"&&x++}),x<2?h.style.display="none":h.style.display="flex",n.textContent=`${Array.from(i.querySelectorAll(".beae-gallery-zoom-item")).indexOf(b)+1} / ${x}`};f(),m.addEventListener("click",b=>{c.classList.remove("opened")}),i.querySelectorAll(".beae-gallery-zoom-item img").forEach(b=>{b.addEventListener("mousemove",x=>{b.parentNode.classList.contains("beae-gallery-zoom-more")?b.parentNode.classList.contains("beae-gallery-zoom-more")&&(b.style.objectFit==="cover"?b.style.objectPosition=100*(x.clientX/b.offsetWidth)+"% "+100*((x.clientY-b.offsetTop)/b.offsetHeight)+"%":b.style.objectPosition&&(b.style.objectPosition="")):(b.parentNode.classList.add("beae-gallery-zoom-more"),b.style.cursor="zoom-in",b.addEventListener("click",_=>{b.style.objectFit==="cover"?(b.style.objectFit="contain",_.target.style.transition="",b.style.cursor="zoom-in",b.style.objectPosition=""):(b.style.objectFit="cover",b.style.cursor="zoom-out",b.style.objectPosition=100*(_.clientX/b.offsetWidth)+"% "+100*((_.clientY-b.offsetTop)/b.offsetHeight)+"%")}))})}),c.addEventListener("transitionend",b=>{b.propertyName==="opacity"&&(c.classList.contains("opened")?(m.style.opacity=1,i.querySelectorAll(".beae-gallery-zoom-item img").forEach(x=>{x.removeAttribute("srcset"),x.removeAttribute("sizes")}),i.querySelector(".beae-gallery-zoom-item.active").style.order="",l.scrollTo({left:i.querySelector(".beae-gallery-zoom-item.active").offsetLeft})):(i.remove(),document.body.style.overflow=""))});let v=0;l.addEventListener("scroll",b=>{clearTimeout(v),v=setTimeout(()=>{u.forEach(x=>{Math.abs(b.target.scrollLeft-x.offsetLeft)<2?(x.classList.add("active"),f()):x.classList.remove("active")})},250)}),d.addEventListener("click",()=>{let b=i.querySelector(".beae-gallery-zoom-item.active");if(b.previousElementSibling)b.previousElementSibling.classList.add("active");else if(u[u.length-1]&&u.length>1)u[u.length-1].classList.add("active");else return;b.classList.remove("active"),l.scrollTo({behavior:"smooth",left:i.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),f()}),p.addEventListener("click",()=>{let b=i.querySelector(".beae-gallery-zoom-item.active");if(b&&b.nextElementSibling)b.nextElementSibling.classList.add("active");else if(u[0]&&u.length>1)u[0].classList.add("active");else return;b.classList.remove("active"),l.scrollTo({behavior:"smooth",left:i.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),f()}),setTimeout(()=>{c.classList.add("opened")},10)}))},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hboal4cn: ', ex)
      };
    

      try {
        let argid = 'beae-hboal4cnsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hboal4cn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hboal4cn');
        args.el = args.els[0];
        ((m) => { window.BeaeSlider&&!m.noRunJs&&window.BeaeSlider(m) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hboal4cn: ', ex)
      };
    

      try {
        let argid = 'beae-8wgc8ayfblock-collapsible-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8wgc8ayf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8wgc8ayf');
        args.el = args.els[0];
        ((data) => { const content=data.el.querySelector(".beae-collapsible--content");if(data.type=="collapsible_tab"){const m=data.el.querySelector(".beae-product-collapsible-wrp--collapsible_tab");m&&content&&m.addEventListener("click",()=>{content&&(m.classList.contains("active")?(m.classList.remove("active"),content.style.maxHeight="0"):(m.classList.add("active"),content.style.maxHeight=content.scrollHeight+"px",setTimeout(()=>content.style.maxHeight="auto",2)))})}else if(data.type=="show_with_popup"){const button=data.el.querySelector(".beae-product-collapsible-wrp--show_with_popup .beae-collapsible-title");if(button){const section=data.el.closest("section.beae-section"),header=data.el.querySelector(".beae-collapsible-title > span");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(m){extOptions={},console.error(m)}button.addEventListener("click",()=>{let m=document.createElement("div");m.innerHTML='<h3 class="beae-popup__content-title">'+header.innerHTML+'</h3><div class="beae-popup__content-body">'+content.innerHTML+"</div>",window.BeaePopupLibrary.createPopup(m,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})})}}else if(data.type=="less_more"){const m=data.el.querySelector(".btn-collap-action-les-more"),c=data.el.querySelector(".beae-collap-less-more"),l=c.getAttribute("data-height");c&&(c.style.height=l),m&&c&&m.addEventListener("click",()=>{m.getAttribute("data-type")=="more"?(c.classList.remove("beae-collap-show-more"),c.style.height=l,m.setAttribute("data-type","less"),m.innerHTML=m.getAttribute("data-show-more-text")):(c.classList.add("beae-collap-show-more"),c.style.height=c.scrollHeight+"px",setTimeout(()=>{c.style={}},100),m.setAttribute("data-type","more"),m.innerHTML=m.getAttribute("data-show-less-text"))})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8wgc8ayf: ', ex)
      };
    

      try {
        let argid = 'beae-uzk1ptv6block-collapsible-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uzk1ptv6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uzk1ptv6');
        args.el = args.els[0];
        ((data) => { const content=data.el.querySelector(".beae-collapsible--content");if(data.type=="collapsible_tab"){const m=data.el.querySelector(".beae-product-collapsible-wrp--collapsible_tab");m&&content&&m.addEventListener("click",()=>{content&&(m.classList.contains("active")?(m.classList.remove("active"),content.style.maxHeight="0"):(m.classList.add("active"),content.style.maxHeight=content.scrollHeight+"px",setTimeout(()=>content.style.maxHeight="auto",2)))})}else if(data.type=="show_with_popup"){const button=data.el.querySelector(".beae-product-collapsible-wrp--show_with_popup .beae-collapsible-title");if(button){const section=data.el.closest("section.beae-section"),header=data.el.querySelector(".beae-collapsible-title > span");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(m){extOptions={},console.error(m)}button.addEventListener("click",()=>{let m=document.createElement("div");m.innerHTML='<h3 class="beae-popup__content-title">'+header.innerHTML+'</h3><div class="beae-popup__content-body">'+content.innerHTML+"</div>",window.BeaePopupLibrary.createPopup(m,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})})}}else if(data.type=="less_more"){const m=data.el.querySelector(".btn-collap-action-les-more"),c=data.el.querySelector(".beae-collap-less-more"),l=c.getAttribute("data-height");c&&(c.style.height=l),m&&c&&m.addEventListener("click",()=>{m.getAttribute("data-type")=="more"?(c.classList.remove("beae-collap-show-more"),c.style.height=l,m.setAttribute("data-type","less"),m.innerHTML=m.getAttribute("data-show-more-text")):(c.classList.add("beae-collap-show-more"),c.style.height=c.scrollHeight+"px",setTimeout(()=>{c.style={}},100),m.setAttribute("data-type","more"),m.innerHTML=m.getAttribute("data-show-less-text"))})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uzk1ptv6: ', ex)
      };
    

      try {
        let argid = 'beae-9rxrdm3gblock-collapsible-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9rxrdm3g',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9rxrdm3g');
        args.el = args.els[0];
        ((data) => { const content=data.el.querySelector(".beae-collapsible--content");if(data.type=="collapsible_tab"){const m=data.el.querySelector(".beae-product-collapsible-wrp--collapsible_tab");m&&content&&m.addEventListener("click",()=>{content&&(m.classList.contains("active")?(m.classList.remove("active"),content.style.maxHeight="0"):(m.classList.add("active"),content.style.maxHeight=content.scrollHeight+"px",setTimeout(()=>content.style.maxHeight="auto",2)))})}else if(data.type=="show_with_popup"){const button=data.el.querySelector(".beae-product-collapsible-wrp--show_with_popup .beae-collapsible-title");if(button){const section=data.el.closest("section.beae-section"),header=data.el.querySelector(".beae-collapsible-title > span");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(m){extOptions={},console.error(m)}button.addEventListener("click",()=>{let m=document.createElement("div");m.innerHTML='<h3 class="beae-popup__content-title">'+header.innerHTML+'</h3><div class="beae-popup__content-body">'+content.innerHTML+"</div>",window.BeaePopupLibrary.createPopup(m,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})})}}else if(data.type=="less_more"){const m=data.el.querySelector(".btn-collap-action-les-more"),c=data.el.querySelector(".beae-collap-less-more"),l=c.getAttribute("data-height");c&&(c.style.height=l),m&&c&&m.addEventListener("click",()=>{m.getAttribute("data-type")=="more"?(c.classList.remove("beae-collap-show-more"),c.style.height=l,m.setAttribute("data-type","less"),m.innerHTML=m.getAttribute("data-show-more-text")):(c.classList.add("beae-collap-show-more"),c.style.height=c.scrollHeight+"px",setTimeout(()=>{c.style={}},100),m.setAttribute("data-type","more"),m.innerHTML=m.getAttribute("data-show-less-text"))})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9rxrdm3g: ', ex)
      };
    

      try {
        let argid = 'beae-f2q5w7y5block-collapsible-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f2q5w7y5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f2q5w7y5');
        args.el = args.els[0];
        ((data) => { const content=data.el.querySelector(".beae-collapsible--content");if(data.type=="collapsible_tab"){const m=data.el.querySelector(".beae-product-collapsible-wrp--collapsible_tab");m&&content&&m.addEventListener("click",()=>{content&&(m.classList.contains("active")?(m.classList.remove("active"),content.style.maxHeight="0"):(m.classList.add("active"),content.style.maxHeight=content.scrollHeight+"px",setTimeout(()=>content.style.maxHeight="auto",2)))})}else if(data.type=="show_with_popup"){const button=data.el.querySelector(".beae-product-collapsible-wrp--show_with_popup .beae-collapsible-title");if(button){const section=data.el.closest("section.beae-section"),header=data.el.querySelector(".beae-collapsible-title > span");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(m){extOptions={},console.error(m)}button.addEventListener("click",()=>{let m=document.createElement("div");m.innerHTML='<h3 class="beae-popup__content-title">'+header.innerHTML+'</h3><div class="beae-popup__content-body">'+content.innerHTML+"</div>",window.BeaePopupLibrary.createPopup(m,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})})}}else if(data.type=="less_more"){const m=data.el.querySelector(".btn-collap-action-les-more"),c=data.el.querySelector(".beae-collap-less-more"),l=c.getAttribute("data-height");c&&(c.style.height=l),m&&c&&m.addEventListener("click",()=>{m.getAttribute("data-type")=="more"?(c.classList.remove("beae-collap-show-more"),c.style.height=l,m.setAttribute("data-type","less"),m.innerHTML=m.getAttribute("data-show-more-text")):(c.classList.add("beae-collap-show-more"),c.style.height=c.scrollHeight+"px",setTimeout(()=>{c.style={}},100),m.setAttribute("data-type","more"),m.innerHTML=m.getAttribute("data-show-less-text"))})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f2q5w7y5: ', ex)
      };
    

      try {
        let argid = 'beae-a3ppfhzpcustom-badged',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a3ppfhzp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a3ppfhzp');
        args.el = args.els[0];
        ((u) => { u.els&&u.els.forEach(h=>{const f=h.querySelector(".beae-product-custom-badged-item");f&&f.innerText==""&&(f.style.display="none")}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a3ppfhzp: ', ex)
      };
    

      try {
        let argid = 'beae-yvulrbb7block-description',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yvulrbb7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yvulrbb7');
        args.el = args.els[0];
        ((data) => { if(data.hasDescription=="false"){data.mode.value=="live"&&(data.el.style.display="none");return}if(window.isPreviewTemplate){const n=data.el.closest("section.beae-section"),d=n==null?void 0:n.getAttribute("data-sectionid");if(d){const p=n.querySelector("#Product-json-"+d),u=JSON.parse(p!=null&&p.innerHTML?p==null?void 0:p.innerHTML:"{}");u&&!u.description&&(data.el.style.display="none")}}const content=data.el.querySelector(".beae-des-content");if(content){if(data.type=="collapsible_tab"){const n=data.el.querySelector(".beae-des-accordion");n&&content&&n.addEventListener("click",()=>{content&&(n.classList.contains("active")?(n.classList.remove("active"),content.style.maxHeight="0"):(n.classList.add("active"),content.style.maxHeight=content.scrollHeight+"px"))})}else if(data.type=="show_with_popup"){const header=data.el.querySelector(".beae-des-popup > span"),buttonLightbox=data.el.querySelector(".beae-des-popup");if(buttonLightbox&&content){const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}buttonLightbox.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup('<h3 class="beae-popup__content-title">'+header.innerHTML+'</h3><div class="beae-popup__content-body">'+content.innerHTML+"</div>",{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})})}}else if(data.type=="less_more"){const n=data.el.querySelector(".btn-action-les-more"),d=data.el.querySelector(".beae-less-more"),p=d.getAttribute("data-height");d&&(d.style.height=p),n&&d&&n.addEventListener("click",()=>{n.getAttribute("data-type")=="more"?(d.classList.remove("beae-show-more"),d.style.height=p,n.setAttribute("data-type","less"),n.innerHTML=n.getAttribute("data-show-more-text")):(d.classList.add("beae-show-more"),d.style.height=d.scrollHeight+"px",setTimeout(()=>{d.style={}},100),n.setAttribute("data-type","more"),n.innerHTML=n.getAttribute("data-show-less-text"))})}}else data.els.forEach(n=>{if(!n)return;const d=n.querySelector(".beae-x-product-short-des");if(d.getAttribute("data-type")=="text"&&d.getAttribute("data-show")=="false"){const p=d.textContent;d.innerHTML=convertStringWithDifferentWordCount(p,data.numberOfWords)}});function convertStringWithDifferentWordCount(n,d){const u=n.split(" ").slice(0,d);return n.split(" ").length>d?u.concat("...").join(" "):u.join(" ")} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yvulrbb7: ', ex)
      };
    

      try {
        let argid = 'beae-lmggpn4iblock-buy',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lmggpn4i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lmggpn4i');
        args.el = args.els[0];
        ((l) => { const n=l.el.querySelector('.beae-quantity-btn[name="plus"]'),d=l.el.querySelector('.beae-quantity-btn[name="minus"]'),p=l.el.querySelector(".beae-quantity-input");n&&d&&p&&(p.value===""&&(p.value="1"),n.addEventListener("click",function(){n.getAttribute("disabled")!="disabled"&&p.stepUp()}),d.addEventListener("click",function(){d.getAttribute("disabled")!="disabled"&&p.stepDown()})) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lmggpn4i: ', ex)
      };
    

      try {
        let argid = 'beae-f9sl6juj',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f9sl6juj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f9sl6juj');
        args.el = args.els[0];
        ((f) => { setTimeout(()=>{const v=f.el.querySelector(".shopify-payment-button__button","");v&&v.classList.add(f.buyItNowType)},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f9sl6juj: ', ex)
      };
    

      try {
        let argid = 'beae-hz1rqd6wblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hz1rqd6w',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hz1rqd6w');
        args.el = args.els[0];
        ((z) => { if(z.el){let W,J=z.autoHover;var U=z.el.querySelector(".beae-img-ratio-control"),K=z.el.querySelector(".beae-img-comp-container"),O=z.el.querySelector(".beae-img-comp-container--second");if(U&&O){let oe=function(ae){let ie=0,ce,te,pe;q(),J?z.el.onmouseover=function(le){I(le)}:ae.onmousedown=function(le){I(le)},z.el.onmouseup=function(){D()},ae.ontouchstart=function(le){I(le)},z.el.ontouchend=function(){D()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),ae.style.left&&(te=parseInt(ae.style.left))}function I(le){check=!1,le.preventDefault(),le.clientX?ce=le.clientX:ce=le.touches[0].clientX,ie=1,z.el.onmousemove=function(be){G(be)},z.el.ontouchmove=function(be){G(be)}}function D(){ie=0,isNaN(pe)||(te=pe),check=!0}function G(le){if(ie==0||J&&!(le.target==O||le.target==z.el.querySelector(".beae-image-secondary")))return!1;pe=X(le),pe<0&&(pe=0),pe>100&&(pe=100),de(pe)}function X(le){le=le.changedTouches?le.changedTouches[0]:le;let be;return J?be=Math.round(le.offsetX*100/W):be=Math.round(te-(ce-le.pageX)*100/W),be}function de(le){ae.style.left=le+"%",O.style.clipPath=`polygon(${le}% 0%, ${le}% 100%, 100% 100%, 100% 0)`,K.style.clipPath=`polygon(0% 100%, 0% 0%, ${le}% 0%, ${le}% 100%)`}};U&&O&&oe(U),window.addEventListener("resize",function(){U&&O&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),oe(U))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hz1rqd6w: ', ex)
      };
    

      try {
        let argid = 'beae-uuh6g533block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uuh6g533',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uuh6g533');
        args.el = args.els[0];
        ((z) => { if(z.el){let W,J=z.autoHover;var U=z.el.querySelector(".beae-img-ratio-control"),K=z.el.querySelector(".beae-img-comp-container"),O=z.el.querySelector(".beae-img-comp-container--second");if(U&&O){let oe=function(ae){let ie=0,ce,te,pe;q(),J?z.el.onmouseover=function(le){I(le)}:ae.onmousedown=function(le){I(le)},z.el.onmouseup=function(){D()},ae.ontouchstart=function(le){I(le)},z.el.ontouchend=function(){D()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),ae.style.left&&(te=parseInt(ae.style.left))}function I(le){check=!1,le.preventDefault(),le.clientX?ce=le.clientX:ce=le.touches[0].clientX,ie=1,z.el.onmousemove=function(be){G(be)},z.el.ontouchmove=function(be){G(be)}}function D(){ie=0,isNaN(pe)||(te=pe),check=!0}function G(le){if(ie==0||J&&!(le.target==O||le.target==z.el.querySelector(".beae-image-secondary")))return!1;pe=X(le),pe<0&&(pe=0),pe>100&&(pe=100),de(pe)}function X(le){le=le.changedTouches?le.changedTouches[0]:le;let be;return J?be=Math.round(le.offsetX*100/W):be=Math.round(te-(ce-le.pageX)*100/W),be}function de(le){ae.style.left=le+"%",O.style.clipPath=`polygon(${le}% 0%, ${le}% 100%, 100% 100%, 100% 0)`,K.style.clipPath=`polygon(0% 100%, 0% 0%, ${le}% 0%, ${le}% 100%)`}};U&&O&&oe(U),window.addEventListener("resize",function(){U&&O&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),oe(U))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uuh6g533: ', ex)
      };
    

      try {
        let argid = 'beae-4s9jezc5section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4s9jezc5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4s9jezc5');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((r,n)=>{r.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),n.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4s9jezc5: ', ex)
      };
    

      try {
        let argid = 'beae-06o0iwmeblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-06o0iwme',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-06o0iwme');
        args.el = args.els[0];
        ((v) => { let b=v.el.querySelectorAll(".beae-tab-item"),x=v.el.querySelectorAll(".beae-tab-content"),_=v.el.querySelectorAll(".beae-accordion-title--mobile");b.forEach((w,C)=>{w.addEventListener("click",()=>{b.forEach(g=>g.classList.remove("active")),x.forEach(g=>g.classList.remove("active")),_.forEach(g=>g.classList.remove("active")),w.classList.add("active"),x[C].classList.add("active"),_[C].classList.add("active")})}),_.forEach((w,C)=>{w.addEventListener("click",()=>{_.forEach(g=>g.classList.remove("active")),x.forEach(g=>g.classList.remove("active")),b.forEach(g=>g.classList.remove("active")),w.classList.add("active"),b[C].classList.add("active"),x[C].classList.add("active")})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-06o0iwme: ', ex)
      };
    

      try {
        let argid = 'beae-hnlwxzvvblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hnlwxzvv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hnlwxzvv');
        args.el = args.els[0];
        ((z) => { if(z.el){let W,J=z.autoHover;var U=z.el.querySelector(".beae-img-ratio-control"),K=z.el.querySelector(".beae-img-comp-container"),O=z.el.querySelector(".beae-img-comp-container--second");if(U&&O){let oe=function(ae){let ie=0,ce,te,pe;q(),J?z.el.onmouseover=function(le){I(le)}:ae.onmousedown=function(le){I(le)},z.el.onmouseup=function(){D()},ae.ontouchstart=function(le){I(le)},z.el.ontouchend=function(){D()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),ae.style.left&&(te=parseInt(ae.style.left))}function I(le){check=!1,le.preventDefault(),le.clientX?ce=le.clientX:ce=le.touches[0].clientX,ie=1,z.el.onmousemove=function(be){G(be)},z.el.ontouchmove=function(be){G(be)}}function D(){ie=0,isNaN(pe)||(te=pe),check=!0}function G(le){if(ie==0||J&&!(le.target==O||le.target==z.el.querySelector(".beae-image-secondary")))return!1;pe=X(le),pe<0&&(pe=0),pe>100&&(pe=100),de(pe)}function X(le){le=le.changedTouches?le.changedTouches[0]:le;let be;return J?be=Math.round(le.offsetX*100/W):be=Math.round(te-(ce-le.pageX)*100/W),be}function de(le){ae.style.left=le+"%",O.style.clipPath=`polygon(${le}% 0%, ${le}% 100%, 100% 100%, 100% 0)`,K.style.clipPath=`polygon(0% 100%, 0% 0%, ${le}% 0%, ${le}% 100%)`}};U&&O&&oe(U),window.addEventListener("resize",function(){U&&O&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),oe(U))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hnlwxzvv: ', ex)
      };
    

      try {
        let argid = 'beae-4f1ol4ghblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4f1ol4gh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4f1ol4gh');
        args.el = args.els[0];
        ((z) => { if(z.el){let W,J=z.autoHover;var U=z.el.querySelector(".beae-img-ratio-control"),K=z.el.querySelector(".beae-img-comp-container"),O=z.el.querySelector(".beae-img-comp-container--second");if(U&&O){let oe=function(ae){let ie=0,ce,te,pe;q(),J?z.el.onmouseover=function(le){I(le)}:ae.onmousedown=function(le){I(le)},z.el.onmouseup=function(){D()},ae.ontouchstart=function(le){I(le)},z.el.ontouchend=function(){D()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),ae.style.left&&(te=parseInt(ae.style.left))}function I(le){check=!1,le.preventDefault(),le.clientX?ce=le.clientX:ce=le.touches[0].clientX,ie=1,z.el.onmousemove=function(be){G(be)},z.el.ontouchmove=function(be){G(be)}}function D(){ie=0,isNaN(pe)||(te=pe),check=!0}function G(le){if(ie==0||J&&!(le.target==O||le.target==z.el.querySelector(".beae-image-secondary")))return!1;pe=X(le),pe<0&&(pe=0),pe>100&&(pe=100),de(pe)}function X(le){le=le.changedTouches?le.changedTouches[0]:le;let be;return J?be=Math.round(le.offsetX*100/W):be=Math.round(te-(ce-le.pageX)*100/W),be}function de(le){ae.style.left=le+"%",O.style.clipPath=`polygon(${le}% 0%, ${le}% 100%, 100% 100%, 100% 0)`,K.style.clipPath=`polygon(0% 100%, 0% 0%, ${le}% 0%, ${le}% 100%)`}};U&&O&&oe(U),window.addEventListener("resize",function(){U&&O&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),oe(U))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4f1ol4gh: ', ex)
      };
    

      try {
        let argid = 'beae-9ifijvebsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9ifijveb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9ifijveb');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((r,n)=>{r.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),n.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9ifijveb: ', ex)
      };
    

      try {
        let argid = 'beae-f936xp65section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f936xp65',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f936xp65');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((r,n)=>{r.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),n.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f936xp65: ', ex)
      };
    

      try {
        let argid = 'beae-w00tewmlblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-w00tewml',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-w00tewml');
        args.el = args.els[0];
        ((z) => { if(z.el){let W,J=z.autoHover;var U=z.el.querySelector(".beae-img-ratio-control"),K=z.el.querySelector(".beae-img-comp-container"),O=z.el.querySelector(".beae-img-comp-container--second");if(U&&O){let oe=function(ae){let ie=0,ce,te,pe;q(),J?z.el.onmouseover=function(le){I(le)}:ae.onmousedown=function(le){I(le)},z.el.onmouseup=function(){D()},ae.ontouchstart=function(le){I(le)},z.el.ontouchend=function(){D()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),ae.style.left&&(te=parseInt(ae.style.left))}function I(le){check=!1,le.preventDefault(),le.clientX?ce=le.clientX:ce=le.touches[0].clientX,ie=1,z.el.onmousemove=function(be){G(be)},z.el.ontouchmove=function(be){G(be)}}function D(){ie=0,isNaN(pe)||(te=pe),check=!0}function G(le){if(ie==0||J&&!(le.target==O||le.target==z.el.querySelector(".beae-image-secondary")))return!1;pe=X(le),pe<0&&(pe=0),pe>100&&(pe=100),de(pe)}function X(le){le=le.changedTouches?le.changedTouches[0]:le;let be;return J?be=Math.round(le.offsetX*100/W):be=Math.round(te-(ce-le.pageX)*100/W),be}function de(le){ae.style.left=le+"%",O.style.clipPath=`polygon(${le}% 0%, ${le}% 100%, 100% 100%, 100% 0)`,K.style.clipPath=`polygon(0% 100%, 0% 0%, ${le}% 0%, ${le}% 100%)`}};U&&O&&oe(U),window.addEventListener("resize",function(){U&&O&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),oe(U))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-w00tewml: ', ex)
      };
    

      try {
        let argid = 'beae-6j64v3vusection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6j64v3vu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6j64v3vu');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((r,n)=>{r.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),n.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6j64v3vu: ', ex)
      };
    

      try {
        let argid = 'beae-sfk2j7k3block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sfk2j7k3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sfk2j7k3');
        args.el = args.els[0];
        ((z) => { if(z.el){let W,J=z.autoHover;var U=z.el.querySelector(".beae-img-ratio-control"),K=z.el.querySelector(".beae-img-comp-container"),O=z.el.querySelector(".beae-img-comp-container--second");if(U&&O){let oe=function(ae){let ie=0,ce,te,pe;q(),J?z.el.onmouseover=function(le){I(le)}:ae.onmousedown=function(le){I(le)},z.el.onmouseup=function(){D()},ae.ontouchstart=function(le){I(le)},z.el.ontouchend=function(){D()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),ae.style.left&&(te=parseInt(ae.style.left))}function I(le){check=!1,le.preventDefault(),le.clientX?ce=le.clientX:ce=le.touches[0].clientX,ie=1,z.el.onmousemove=function(be){G(be)},z.el.ontouchmove=function(be){G(be)}}function D(){ie=0,isNaN(pe)||(te=pe),check=!0}function G(le){if(ie==0||J&&!(le.target==O||le.target==z.el.querySelector(".beae-image-secondary")))return!1;pe=X(le),pe<0&&(pe=0),pe>100&&(pe=100),de(pe)}function X(le){le=le.changedTouches?le.changedTouches[0]:le;let be;return J?be=Math.round(le.offsetX*100/W):be=Math.round(te-(ce-le.pageX)*100/W),be}function de(le){ae.style.left=le+"%",O.style.clipPath=`polygon(${le}% 0%, ${le}% 100%, 100% 100%, 100% 0)`,K.style.clipPath=`polygon(0% 100%, 0% 0%, ${le}% 0%, ${le}% 100%)`}};U&&O&&oe(U),window.addEventListener("resize",function(){U&&O&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),oe(U))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sfk2j7k3: ', ex)
      };
    

      try {
        let argid = 'beae-fwiwwks5section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fwiwwks5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fwiwwks5');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((r,n)=>{r.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),n.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fwiwwks5: ', ex)
      };
    

      try {
        let argid = 'beae-vxygo35xblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vxygo35x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vxygo35x');
        args.el = args.els[0];
        ((z) => { if(z.el){let W,J=z.autoHover;var U=z.el.querySelector(".beae-img-ratio-control"),K=z.el.querySelector(".beae-img-comp-container"),O=z.el.querySelector(".beae-img-comp-container--second");if(U&&O){let oe=function(ae){let ie=0,ce,te,pe;q(),J?z.el.onmouseover=function(le){I(le)}:ae.onmousedown=function(le){I(le)},z.el.onmouseup=function(){D()},ae.ontouchstart=function(le){I(le)},z.el.ontouchend=function(){D()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),ae.style.left&&(te=parseInt(ae.style.left))}function I(le){check=!1,le.preventDefault(),le.clientX?ce=le.clientX:ce=le.touches[0].clientX,ie=1,z.el.onmousemove=function(be){G(be)},z.el.ontouchmove=function(be){G(be)}}function D(){ie=0,isNaN(pe)||(te=pe),check=!0}function G(le){if(ie==0||J&&!(le.target==O||le.target==z.el.querySelector(".beae-image-secondary")))return!1;pe=X(le),pe<0&&(pe=0),pe>100&&(pe=100),de(pe)}function X(le){le=le.changedTouches?le.changedTouches[0]:le;let be;return J?be=Math.round(le.offsetX*100/W):be=Math.round(te-(ce-le.pageX)*100/W),be}function de(le){ae.style.left=le+"%",O.style.clipPath=`polygon(${le}% 0%, ${le}% 100%, 100% 100%, 100% 0)`,K.style.clipPath=`polygon(0% 100%, 0% 0%, ${le}% 0%, ${le}% 100%)`}};U&&O&&oe(U),window.addEventListener("resize",function(){U&&O&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),oe(U))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vxygo35x: ', ex)
      };
    

      try {
        let argid = 'beae-agxpazpsblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-agxpazps',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-agxpazps');
        args.el = args.els[0];
        ((z) => { if(z.el){let W,J=z.autoHover;var U=z.el.querySelector(".beae-img-ratio-control"),K=z.el.querySelector(".beae-img-comp-container"),O=z.el.querySelector(".beae-img-comp-container--second");if(U&&O){let oe=function(ae){let ie=0,ce,te,pe;q(),J?z.el.onmouseover=function(le){I(le)}:ae.onmousedown=function(le){I(le)},z.el.onmouseup=function(){D()},ae.ontouchstart=function(le){I(le)},z.el.ontouchend=function(){D()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),ae.style.left&&(te=parseInt(ae.style.left))}function I(le){check=!1,le.preventDefault(),le.clientX?ce=le.clientX:ce=le.touches[0].clientX,ie=1,z.el.onmousemove=function(be){G(be)},z.el.ontouchmove=function(be){G(be)}}function D(){ie=0,isNaN(pe)||(te=pe),check=!0}function G(le){if(ie==0||J&&!(le.target==O||le.target==z.el.querySelector(".beae-image-secondary")))return!1;pe=X(le),pe<0&&(pe=0),pe>100&&(pe=100),de(pe)}function X(le){le=le.changedTouches?le.changedTouches[0]:le;let be;return J?be=Math.round(le.offsetX*100/W):be=Math.round(te-(ce-le.pageX)*100/W),be}function de(le){ae.style.left=le+"%",O.style.clipPath=`polygon(${le}% 0%, ${le}% 100%, 100% 100%, 100% 0)`,K.style.clipPath=`polygon(0% 100%, 0% 0%, ${le}% 0%, ${le}% 100%)`}};U&&O&&oe(U),window.addEventListener("resize",function(){U&&O&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),oe(U))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-agxpazps: ', ex)
      };
    

      try {
        let argid = 'beae-ot2uzt1xsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ot2uzt1x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ot2uzt1x');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((r,n)=>{r.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),n.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ot2uzt1x: ', ex)
      };
    

      try {
        let argid = 'beae-6n84m4casection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6n84m4ca',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6n84m4ca');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((r,n)=>{r.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),n.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6n84m4ca: ', ex)
      };
    

      try {
        let argid = 'beae-6n84m4casection-related-products',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6n84m4ca',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6n84m4ca');
        args.el = args.els[0];
        ((a) => { var t;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(t=a.el.querySelector(".beae-money-format"))==null?void 0:t.innerHTML);const o=a.el.closest(".beae-body--preview");if(window.BeaeSlider&&window.BeaeSlider(a),a.mode.value=="live"){let i=a.el.querySelector(".beae-related-product-info");if(i){let r=i.getAttribute("section-id"),s=i.getAttribute("product-id");r&&s&&fetch(window.Shopify.routes.root+"recommendations/products?product_id="+s+"&section_id="+r+"&intent="+a.intent).then(m=>m.text()).then(m=>{const c=document.createElement("div");c.innerHTML=m;const l=c.querySelector("."+a.id);return new Promise(n=>{if(l){const d=l.querySelector(".beae-related-products-content"),p=a.el.querySelector(".beae-related-products-content");d&&p&&(p.innerHTML=d.innerHTML)}n()})}).then(()=>{typeof window.handleSwatchForCardForm=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a),window.BeaeSlider&&window.BeaeSlider(a))})}}else document.addEventListener("relatedReady",i=>{typeof window.handleSwatchForCardForm=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a))});o&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a))},100) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6n84m4ca: ', ex)
      };
    

      try {
        let argid = 'beae-6n84m4casection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6n84m4ca',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6n84m4ca');
        args.el = args.els[0];
        ((m) => { window.BeaeSlider&&!m.noRunJs&&window.BeaeSlider(m) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6n84m4ca: ', ex)
      };
    

      try {
        let argid = 'beae-dcojxpjpblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dcojxpjp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dcojxpjp');
        args.el = args.els[0];
        ((z) => { if(z.el){let W,J=z.autoHover;var U=z.el.querySelector(".beae-img-ratio-control"),K=z.el.querySelector(".beae-img-comp-container"),O=z.el.querySelector(".beae-img-comp-container--second");if(U&&O){let oe=function(ae){let ie=0,ce,te,pe;q(),J?z.el.onmouseover=function(le){I(le)}:ae.onmousedown=function(le){I(le)},z.el.onmouseup=function(){D()},ae.ontouchstart=function(le){I(le)},z.el.ontouchend=function(){D()};function q(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),ae.style.left&&(te=parseInt(ae.style.left))}function I(le){check=!1,le.preventDefault(),le.clientX?ce=le.clientX:ce=le.touches[0].clientX,ie=1,z.el.onmousemove=function(be){G(be)},z.el.ontouchmove=function(be){G(be)}}function D(){ie=0,isNaN(pe)||(te=pe),check=!0}function G(le){if(ie==0||J&&!(le.target==O||le.target==z.el.querySelector(".beae-image-secondary")))return!1;pe=X(le),pe<0&&(pe=0),pe>100&&(pe=100),de(pe)}function X(le){le=le.changedTouches?le.changedTouches[0]:le;let be;return J?be=Math.round(le.offsetX*100/W):be=Math.round(te-(ce-le.pageX)*100/W),be}function de(le){ae.style.left=le+"%",O.style.clipPath=`polygon(${le}% 0%, ${le}% 100%, 100% 100%, 100% 0)`,K.style.clipPath=`polygon(0% 100%, 0% 0%, ${le}% 0%, ${le}% 100%)`}};U&&O&&oe(U),window.addEventListener("resize",function(){U&&O&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{W=O.offsetWidth})}).observe(O),oe(U))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dcojxpjp: ', ex)
      };
    }; if (window.BEAEBASE) {js_6K1DTK8D()} else {window.BEAEPAGEJS.push(js_6K1DTK8D)}window.addEventListener("load", () => {let brd = document.createElement("div"),id = Math.random().toString(36).substr(2, 5);brd.setAttribute(`data-${id}`, "");brd.setAttribute("style","position:fixed;bottom: 10px;left:14px;z-index:99999999999999;display:flex;align-items:center;gap:10px");brd.innerHTML = `<a href="https://apps.shopify.com/beae/?utm_source=customersite&utm_medium=page&utm_campaign=traffic" target="_blank" style="box-shadow:rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px;background:#fafafa;border-radius: 6px;padding: 3px 8px;text-decoration: none;font-family: system-ui, arial;font-size: 12px;color: #292929;font-weight: 500;display: flex;align-items: center;letter-spacing: 0;white-space: nowrap;">Made in <img src="https://app.beae.com/dist/images/beae-next-logo-80.png" height="14" style="border-radius: 0px;margin-left:3px;height:14px !important" /></a> `;document.body.appendChild(brd);}); })(); 