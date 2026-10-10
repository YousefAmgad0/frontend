\--------------------------------- Day 20 — DOM Searching ---------------------------------

getElementById



<div id="container">

&#x20; <h1>Hello</h1>

&#x20; <p>Welcome</p>

</div>



const container = document.getElementById("container");



\---------------------------------4. لو الـ ID مش موجود؟-------------------------------

null النتيجه



وده مهم جدًا في الشغل عشان ما تفترضش إن العنصر موجود دائمًا.

مثلاً:

const button = document.getElementById("buyBtn");

if (button) {

&#x20; button.addEventListener("click", () => {

&#x20;   // ...

&#x20; });

}

ده Pattern آمن لو وجود العنصر مش مضمون.





\-----------------------------------------------نقدر نناديها على document فقط 🔥----------------------------------------

document.getElementById("user");



const container = document.getElementById("container");

container.getElementById("user");     ❌ تماما

لأن getElementById() بتبحث في الـ document كله

والـ method  متاحة على document نفسه



وده عكس methods هنشوفها بعد شوية زي:

element.querySelector(...)

اللي تقدر تبحث من داخل Element معين.





\---------------------------------8. getElementById مش بترجع String 🔥------------------------

<button id="buyBtn">Buy</button>

const button = document.getElementById("buyBtn");



هي:

DOM Element Object

وبالتالي نقدر نتعامل معاه:



button.textContent

button.style

button.children

button.parentElement



✔️ ترجع Element واحد

✔️ البحث في document كله

✔️ id لازم يكون unique

✔️ لو مش موجود → null

✔️ بتتنادى على document

✔️ بترجع DOM Element Object

✔️ الأفضل استخدامها صراحة بدل ID global



\-------------------------------- querySelectorAll() ---------------------------------

ودي بتسمحلك تستخدم CSS Selector

عشان تختار عناصر من الـ DOM.



مثلاً:

<p class="text">Hello</p>

<p class="text">Welcome</p>

<p>Bye</p>



const paragraphs = document.querySelectorAll(".text"); 

هنا هتمسك كل العناصر اللي عندها class="text".



\-------------------------------------------------querySelectorAll() 🔥🔥🔥🔥-----------------------------------------------

1\. يعني إيه؟

const elements = document.querySelectorAll("CSS selector");



دي بتقول:

هاتلي كل الـ Elements

اللي بتطابق الـ CSS selector ده.



2\. ليه اسمها querySelectorAll؟



نفك الاسم:



query       → ابحث

selector    → باستخدام CSS Selector

all         → كل النتائج



Class

document.querySelectorAll(".card");

ID

document.querySelectorAll("#header");

Tag

document.querySelectorAll("p");

Nested

document.querySelectorAll(".container .card");

Direct child

document.querySelectorAll(".container > .card");

Attribute

document.querySelectorAll('input\[type="text"]');



وممكن تبدأ من Element معين:

const container = document.getElementById("container");

const cards = container.querySelectorAll(".card");



الفرق:

document.querySelectorAll()

&#x20;       ↓

يدور في الصفحة



container.querySelectorAll()

&#x20;       ↓

يدور داخل container



&#x09;									5. بتطلع إيه؟



دي نقطة مهمة جدًا.



const cards = document.querySelectorAll(".card");

cards مش Array.

بترجع:

NodeList



مثلاً:

console.log(cards);

هتلاقي حاجة شبه:

NodeList(3)

&#x20; 0: <div class="card">

&#x20; 1: <div class="card">

&#x20; 2: <div class="card">



6\. هل NodeList Iterable؟ 🔥

آه.



عشان كده:

for (const card of cards) {

&#x20; console.log(card);

}

✅ شغال.



7\. هل هي Array؟ ❌

لأ.



يعني متتعاملش معاها تلقائيًا كأنها Array.

لو محتاج Array حقيقية:

const cardsArray = Array.from(cards);

أو:

const cardsArray = \[...cards];



\---------------------------------8. أهم Trick: querySelectorAll ترجع Static Collection 🔥----------

دي مهمة جدًا.



لو عملت:

const divs = document.querySelectorAll("div");

في اللحظة دي مثلاً عندك:

2 divs

وبعدين ضفت div جديد

الـ divs القديمة مش هتتحدث تلقائيًا.

يعني:

querySelectorAll → Static

getElementsBy\*   → Live





\---------------------------------9. Pseudo-classes 🔥---------------------------------

document.querySelectorAll(":hover");

ده يجيب الـ Elements اللي الـ mouse موجود فوقها حاليًا.



وكمان:

document.querySelectorAll("li:last-child");

يجيب آخر <li> في كل مجموعة مناسبة



\--------------------------------- 10. مثال عملي Front-End 🔥---------------------------------



<div class="card">Product 1</div>

<div class="card">Product 2</div>

<div class="card">Product 3</div>



const cards = document.querySelectorAll(".card");



for (const card of cards) {

&#x20; card.classList.add("active");

}



\*\*\*\*\*\*\*\*\*\*\*\*\*\*Note\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Mental Model:

getElementById

Found→ Element 		,	Not Found → null

querySelector

Found → Element		,	Not Found → null

querySelectorAll	

Found → NodeList	,	Not Found → empty NodeList

🔥 دي لازم تكون ثابتة عندك.



\---------------------------------11. نقطة مهمة جدًا في الـ Naming---------------------------------

const cards = document.querySelectorAll(".card"); الاحسن

const card = document.querySelectorAll(".card");   دي كوليكشن فا غلط انه يبقي اسمها card



\-----------------------------🔥 أهم حاجة في الشغل-------------------------------

لو عندك:



<button class="buy-btn">Buy</button>

<button class="buy-btn">Buy</button>

<button class="buy-btn">Buy</button>

تقدر:

const buttons = document.querySelectorAll(".buy-btn");

for (const button of buttons) {

&#x20; // التعامل مع كل button

}



ده Pattern هتقابله كتير في DOM manipulation وEvents



\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

\---------------------------------querySelector() 🔥🔥🔥🔥-------------------------------

→ يرجع أول Element فقط يطابق الـ selector.



document.querySelectorAll(".card");    → يرجع كل العناصر المطابقة.



مثال



<div class="card">1</div>

<div class="card">2</div>

<div class="card">3</div>

const firstCard = document.querySelector(".card");

النتيجة:	<div class="card">1</div>		مش الثلاثة.



\*\*\*\*\*\*\*\*\*\*\*\*\*Preferred approach 👑\*\*\*\*\*\*\*\*\*\*

في الكود الحديث، غالبًا هتلاقي:



document.querySelector(...)

document.querySelectorAll(...)

أكتر من الاعتماد على getElementById وgetElementsBy...، خصوصًا لما تحتاج CSS selectors مرنة.



لكن لو عندك ID واضح ومحدد جدًا:

document.getElementById("user");





\--------------------------------------matches()--------------------------------------

🧠 الفرق اللي لازم يثبت



شوف الفرق ده:



querySelector

document.querySelector(".active");



معناها:



هاتلي عنصر .active.



matches

card.matches(".active");

معناها:

العنصر اللي أنا ماسكه ده , 	هل هو .active؟



\------------------------------طيب فين ممكن أستخدمها في الشغل ?-------------------------------------



هنا تبدأ تحس بقيمتها 👇



افترض عندك:



<button class="btn primary">Save</button>

<button class="btn danger">Delete</button>

<button class="btn secondary">Cancel</button>



ومسكنا كل الأزرار:

const buttons = document.querySelectorAll(".btn");



دلوقتي:

for (const button of buttons) {

&#x20; if (button.matches(".danger")) {

&#x20;   console.log("This is the delete button");

&#x20; }

}

هنا matches() منطقية جدًا:





\------------------------مثال أقرب للـ Front-End الحقيقي 🔥-------------------------

وده استخدام مهم جدًا مع Event Delegation.



مثلاً:



<div class="products">

&#x20; <button class="buy-btn">Buy</button>

&#x20; <button class="buy-btn">Buy</button>

&#x20; <button class="delete-btn">Delete</button>

</div>



وفي JavaScript:



products.addEventListener("click", function (event) {

&#x20; if (event.target.matches(".buy-btn")) {

&#x20;   console.log("Buy clicked");

&#x20; }

});



هنا:



event.target

هو العنصر اللي المستخدم ضغط عليه.



وبعدين:

event.target.matches(".buy-btn")

معناها:

هل العنصر اللي اتضغط عليه هو زر Buy؟

لو آه → نفذ الكود.



\*\*\*\*returns true or false.





\--------------------------------------closest()------------------------------------------------

بتسأل:

العنصر ده ?

أو أقرب parent فوقه مطابق ?



النتيجة:

Element / null



&#x09;			🔥 استخدام مهم جدًا في الشغل



وده هتشوفه كتير مع Event Delegation.

مثلاً:

<div class="card">

&#x20; <button class="buy-btn">

&#x20;   <span>Buy</span>

&#x20; </button>

</div>



المستخدم ضغط على النص:

<span>Buy</span>



فـ:



event.target



ممكن يكون:



<span>



لكن أنا مهتم بالـ button.

أقدر أقول:

const button = event.target.closest(".buy-btn");

فيطلعلي:

<button class="buy-btn">

وده استخدام حقيقي جدًا في Front-End.

\------------------------------------------5️⃣ getElementsBy\*-------------------------------------

1\. getElementsByClassName() >>>>	هنا هيجيب كل العناصر اللي عندها class card.

&#x20;بنكتب:

"card"

مش:

".card"

لأن الـ method , أصلًا عارفة إنك بتدور على class



2\. getElementsByTagName()		بتدور على HTML tag.

const paragraphs = document.getElementsByTagName("p"); >>>	هيجيب كل:	<p>...</p>

&#x09;



طيب إيه المختلف عن querySelectorAll() ?   مهمه اوي اوي 🔥🔥🔥🔥🔥🔥🔥

const cards = document.querySelectorAll(".card");

const cards = document.getElementsByClassName("card");

الاتنين يجيبوا الـ cards, لكن مش نفس نوع الـ collection.



querySelectorAll(): >>>>> NodeList

getElementsByClassName(): >>>> HTMLCollection



والفرق الأهم من ناحية الشغل:🔥

HTMLCollection غالبًا Live Collection , ودي نقطة لازم نفهمها كويس.



🧠 مثال يثبت الفرق

<div class="card">1</div>



querySelectorAll

const cards = document.querySelectorAll(".card");

console.log(cards.length); // 1

document.body.innerHTML += `<div class="card">2</div>`;

console.log(cards.length); // 1



الـ NodeList القديمة لسه شايفة الحالة اللي أخدتها وقت البحث.



getElementsByClassName

const cards = document.getElementsByClassName("card");

console.log(cards.length); // 1

document.body.innerHTML += `<div class="card">2</div>`;

console.log(cards.length); // 2

لأنها Live.



\---------🔥 طيب هل ده معناه إن getElementsByClassName() أحسن؟----------

لأ.

ودي نقطة مهمة جدًا بالنسبة لك.

وجود Live Collection مش معناه إنها أفضل.

في الـ Front-End الحديث، غالبًا:

querySelector()

querySelectorAll()

هما الـ preferred approach



⚡ مقارنة مهمة جدًا

| Method                     | Search       | Result                 |

| -------------------------- | ------------ | ---------------------- |

| `getElementById()`         | ID           | Element / `null`       |

| `getElementsByClassName()` | Class        | HTMLCollection         |

| `getElementsByTagName()`   | Tag          | HTMLCollection         |

| `querySelector()`          | CSS Selector | First Element / `null` |

| `querySelectorAll()`       | CSS Selector | NodeList               |



\-----------------------8️⃣ contains()------------------------

هل العنصر ده يحتوي على العنصر التاني جواه في الـ DOM tree؟



container.contains(button);

true or false

ومش شرط يبقي الابن المباشر



Method				بتعمل إيه؟				النتيجة

getElementById()		البحث بـ ID				Element / null

querySelector()			أول match بـ CSS selector		Element / null

querySelectorAll()		كل matches بـ CSS selector		NodeList

matches()			هل العنصر مطابق؟			true/false

closest()			أقرب ancestor مطابق		Element / null

getElementsByClassName()	البحث بـ class			HTMLCollection

getElementsByTagName()		البحث بـ tag			HTMLCollection

getElementsByName()		البحث بـ name			HTMLCollection

contains()			هل B داخل A؟			true/false





