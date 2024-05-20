(()=>{"use strict";const e={smartphones:[{title:"Apple",description:"Dynamic Island.For when things just pop up.",price:"$1600",src:"../img/product2.png"},{title:"Samsung",description:"Dynamic Island.For when things just pop up.",price:"$899",src:"../img/product3.png"},{title:"Google",description:"Dynamic Island.For when things just pop up.",price:"$899",src:"../img/product7.png"},{title:"Xiaomi",description:"Dynamic Island.For when things just pop up.",price:"$400",src:"../img/product8.png"},{title:"Asus",description:"Dynamic Island.For when things just pop up.",price:"$515",src:"../img/product6.png"},{title:"Motorola",description:"Dynamic Island.For when things just pop up.",price:"$600",src:"../img/product4.png"}],tablets:[{title:"Microsoft",description:"Dynamic Island.For when things just pop up.",price:"$360",src:"../img/product5.png"}],watches:[{title:"Garmin",description:"Dynamic Island.For when things just pop up.",price:"$1500",src:"../img/product1.png"}]},t=(e,t,n,i)=>{const o=document.createElement(e);return t&&t.split(" ").forEach((e=>o.classList.add(e))),n&&(o.innerText=n),i&&(o.dataset.action=i),o},n=(e,n,i)=>{const o=t("button",e,n);return i&&(o.dataset.action=i),o},i=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},o=document.querySelector(".shop"),p=document.querySelector(".container-products"),r=document.querySelector(".container-info"),c=document.querySelector(".order-info"),s=o=>{i(p),i(r),i(c),e[o].forEach((e=>{p.append((e=>{const i=t("div","product"),o=t("img"),p=t("p","description hide",e.description),r=t("p","title",e.title),c=t("p","price",e.price),s=n("btn","Info","info"),a=n("btn hide","Buy","buy");return o.src=e.src,i.appendChild(o),i.appendChild(r),i.appendChild(p),i.appendChild(c),i.appendChild(s),i.appendChild(a),i})(e))}))},a={"open-smartphones":()=>s("smartphones"),"open-tablets":()=>s("tablets"),"open-watches":()=>s("watches"),info:()=>(()=>{i(r);const e=event.target.closest(".product").cloneNode(!0);e.querySelectorAll(".hide").forEach((e=>{e.classList.remove("hide")})),e.querySelector('button[data-action="info"]').classList.add("hide"),e.classList.add("product-info"),r.appendChild(e)})(),buy:()=>(()=>{const e=document.createElement("form");e.innerHTML='\n    <input type="text" name="fullName" placeholder="ПІБ" required>\n    <select name="city" required>\n      <option value="">Куди відправляємо?</option>\n      <option value="Київ">Київ</option>\n      <option value="Харків">Харків</option>\n    </select>\n    <input type="text" name="postOffice" placeholder="Склад Нової пошти" required>\n    <select name="paymentMethod" required>\n      <option value="">Виберіть спосіб оплати</option>\n      <option value="card">Банківська картка</option>\n      <option value="cash">Післяплата</option>\n      <option value="fop">Реквізити ФОП</option>\n    </select>\n    <input type="number" name="quantity" min="1" placeholder="Кількість" required>\n    <textarea name="comment" placeholder="Коментар до замовлення"></textarea>\n    <button type="submit">Підтвердити замовлення</button>\n  ',e.addEventListener("submit",(t=>{t.preventDefault();const n=new FormData(e),o=`\n    <div class="order-container">\n      <p class="order-title-header">Інформація про замовлення</p>\n      <p class="order-title">ПІБ: ${n.get("fullName")}</p>\n      <p class="order-title">Місто: ${n.get("city")}</p>\n      <p class="order-title">Склад Нової пошти: ${n.get("postOffice")}</p>\n      <p class="order-title">Спосіб оплати: ${n.get("paymentMethod")}</p>\n      <p class="order-title">Кількість: ${n.get("quantity")}</p>\n      <p class="order-title">Коментар: ${n.get("comment")}</p>\n    </div>\n    `;c.innerHTML=o,i(r)})),c.appendChild(e)})()};o.addEventListener("click",(e=>{const t=e.target.dataset.action;"function"==typeof a[t]&&a[t]()}))})();