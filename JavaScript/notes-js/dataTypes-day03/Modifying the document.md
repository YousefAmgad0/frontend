Modifying the document

\-------------------------------------

2\. document.createElement()

الميثود دي بتنشيء عنصر HTML جديد

لكنها مش بتضيفه للصفحة تلقائيًا.



const card = document.createElement("div");

تخيّل إنك صنعت صندوق ولسه محطتوش في المكان المطلوب.

نقدر نضيف له Class ومحتوى:

card.className = "product-card";

card.textContent = "Headphones";





لسه العنصر مش ظاهر لأننا ما حطيناهوش في الـ DOM.

3\. append() — إضافة العنصر للصفحة

document.body.append(card);

دلوقتي العنصر بقى جزءًا من الصفحة وهيظهر فيه النص Headphones.



الخطوات الثلاثة:

1\. Create

document.createElement("div")

إنشاء عنصر جديد.



2\. Configure

card.className = "product-card"

تجهيز العنصر بالـ Class والمحتوى والخصائص.



3\. Insert

document.body.append(card)

إضافة العنصر للـ DOM ليظهر في الصفحة.



\---------------

remove() → يشيل العنصر.



replaceWith() → يشيل العنصر ويحط مكانه المحتوى أو العنصر الجديد.



const home = document.querySelector("#home");

const newItem = document.createElement("li");

newItem.textContent = "Dashboard";

home.replaceWith(newItem);

دلوقتي Dashboard هتحل محل Home في نفس المكان.



const home = document.querySelector("#home");

home.remove();   >>>>>>>	عنصر Home هيتشال من الصفحة

مهم تعرف إن المتغير home لسه بيشاور على كائن العنصر 

حتى بعد ما اتشال من الـ DOM

يعني الحذف من الصفحة مش معناه إن المتغير اختفى.





\--------------------------------------------cloneNode()--------------------------------------------

دي بتعمل نسخة من عنصر موجود بدل ما تنقله من مكانه.



<ul id="menu">

&#x20; <li id="home">Home</li>

</ul>



const home = document.querySelector("#home");

const copy = home.cloneNode(true);

document.querySelector("#menu").append(copy);

الناتج هيكون عنصرين Home.



الـ true معناها انسخ العنصر ومحتوياته وأبنائه

أما cloneNode(false) فبتنسخ العنصر نفسه من غير الأبناء.



خلي بالك: cloneNode() مش بتنسخ الـ Event Listeners اللي اتضافت باستخدام addEventListener()

وممكن تعمل IDs مكررة

لو نسخت عنصر عنده id من غير ما تغيّرها.



\---------DocumentFragment---------

الفكرة مرتبطة جدًا بإنشاء عناصر كتير وإضافتها للصفحة

زي لما تجيب مجموعة منتجات من API وتعرضها في الـ DOM.



1\. What is DocumentFragment?

هو حاوية مؤقتة بنجمع جواها عناصر الـ, DOM قبل ما نضيفها للصفحة



2\. How does it work?

const fragment = new DocumentFragment();



for (let i = 1; i <= 3; i++) {

&#x20; const li = document.createElement("li");

&#x20; li.textContent = `Product ${i}`;



&#x20; fragment.append(li);

}



document.querySelector("#products").append(fragment);





3\. هل دي أفضل طريقة في الشغل؟



هنا لازم نفرّق بين إن الطريقة صحيحة، وإنها الأفضل في كل حالة.



DocumentFragment نادرًا ما نحتاج نستخدمه بشكل صريح



لأن ممكن نرجّع Array

من العناصر ونضيفها باستخدام Spread Operator.





مثلًا:



const items = \[];



for (let i = 1; i <= 3; i++) {

&#x20; const li = document.createElement("li");

&#x20; li.textContent = `Product ${i}`;

&#x20; items.push(li);

}



document.querySelector("#products").append(...items);





\--------------------------------insertAdjacentHTML()-----------------------------------

method بتسمحلك تضيف HTML في مكان محدد بالنسبة لعنصر موجود بالفعل 

من غير ما تستبدل محتواه بالكامل



element.insertAdjacentHTML(position, html);



عندك جزئين:



position: المكان اللي عايز تضيف فيه الـ HTML.

html: كود الـ HTML اللي عايز تضيفه.





2\. الأماكن الأربعة



تخيّل عندك العنصر ده:

<div id="card">

&#x20; <p>Product</p>

</div>



1-beforebegin   >> قبل العنصر نفسه، كـ sibling.

2-afterbegin	>> داخل العنصر، في البداية.

3-beforeend 	>> داخل العنصر، في النهاية.

4-afterend	>> بعد العنصر نفسه، كـ sibling.





3\. مثال عملي



عايز تضيف زر داخل كارت المنتج في آخره:

const card = document.querySelector("#card");

card.insertAdjacentHTML(

&#x20; "beforeend",

&#x20; '<button class="buy-btn">Buy Now</button>'

);



\------------------------------- insertAdjacentText() **-------------------------------**

**بتضيف نص عادي في مكان محدد بالنسبة للعنصر.**



**const card = document.querySelector("#card");**

**card.insertAdjacentText("beforeend", "<b>Headphones</b>");**



**هنا المتصفح هيعرض النص حرفيًا:	<b>Headphones</b>**



**--------------------------------2. insertAdjacentElement()----------------------------**

بتضيف عنصر DOM , موجود بالفعل في المكان اللي تحدده.



\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

\------------------------------------------1. الطرق اللي لازم تستخدمها وتفهمها كويس---------------------------



document.createElement()	إنشاء عنصر HTML جديد باستخدام JavaScript.

const card = document.createElement("div");



textContent			إضافة أو تغيير النص داخل العنصر.

card.textContent = "Headphones";



append() وprepend()		إضافة عناصر داخل عنصر أب.

container.append(card);  // في النهاية

container.prepend(card); // في البداية



before() وafter()	إضافة عنصر قبل أو بعد عنصر موجود، لكن خارجه.

card.before(newCard);

card.after(newCard);



replaceWith() وremove()		استبدال عنصر أو حذفه من الـ DOM.

oldCard.replaceWith(newCard);

oldCard.remove();







insertAdjacentHTML()	عندك HTML string موثوق وعايز تضيفه في موضع محدد

cloneNode(true)		عايز تنسخ عنصر موجود مع الـ children بتوعه

cloneNode(false)	عايز تنسخ العنصر نفسه فقط

DocumentFragment	بتجهّز مجموعة عناصر قبل إدراجها

insertAdjacentText()	إضافة نص في موضع محدد بالنسبة لعنصر

insertAdjacentElement()	إضافة Node في موضع محدد بالنسبة لعنصر

createTextNode()	إنشاء Text Node صريحة



\------------------------3. مثال عملي يجمع أهم الطرق : ---------------------------------



<div id="products"></div>



const productsContainer = document.querySelector("#products");



const card = document.createElement("div");

card.className = "product-card";



const title = document.createElement("h3");

title.textContent = "Headphones";



const price = document.createElement("p");

price.textContent = "1000 EGP";



const button = document.createElement("button");

button.textContent = "Buy Now";



card.append(title, price, button);

productsContainer.append(card);



الكود ده بيطبّق workflow عملي جدًا:



Select — اخترنا الـ container باستخدام querySelector().

Create — أنشأنا العناصر باستخدام createElement().

Populate — أضفنا النصوص باستخدام textContent.

Assemble — جمعنا العناصر داخل الكارت باستخدام append().

Insert — أضفنا الكارت للصفحة.







