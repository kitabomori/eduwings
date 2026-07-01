---
layout: base
title_en: "Home"
title_ur: "گھر"
description_en: "Kitabomori – Promoting reading and writing culture"
description_ur: "کتابومری – پڑھنے اور لکھنے کے کلچر کو فروغ دینا"
permalink: /
---

<!-- News ticker – Home page only -->
{% include ticker.html %}

<div class="page-container">

  {% if site.lang == 'ur' %}

  <section class="home-welcome">
    <h1 class="home-heading">کتابومری میں خوش آمدید</h1>
    <p class="home-tagline">پڑھنے اور لکھنے کے کلچر کو فروغ دینا</p>
    <p>
      کتابومری ایک رضاکارانہ تعلیمی اشاعتی پلیٹ فارم ہے جو محققین، طلباء، اساتذہ، پالیسی سازوں، صحافیوں اور عوام کے لیے بنایا گیا ہے۔
      ہمارا مقصد تعلیم، خواندگی اور مطالعے سے متعلق شواہد پر مبنی گفتگو کو فروغ دینا ہے۔
    </p>
    <p>
      آپ یہاں بلاگز، اوپ ایڈز، خطوط، کتابی جائزے اور ذاتی عکاسی پائیں گے۔
      اگر آپ اپنی تحریر شیئر کرنا چاہتے ہیں تو ہماری <a href="{{ site.baseurl }}/ur/guidelines/">ہدایات</a> پڑھیں اور <a href="{{ site.baseurl }}/ur/contact/">رابطہ</a> کریں۔
    </p>
  </section>

  <section class="home-sections">
    <div class="section-cards">

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/ur/blogs/">بلاگز</a></h2>
        <p>تعلیم اور معاشرے پر مبنی تجزیاتی اور دلیل پر مبنی تحریریں۔</p>
      </div>

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/ur/opeds/">اوپ ایڈ</a></h2>
        <p>تجربے اور تحقیق پر مبنی رائے جس میں عملی تجاویز شامل ہیں۔</p>
      </div>

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/ur/letters/">خطوط</a></h2>
        <p>اساتذہ، طلباء اور محققین کی طرف سے ذاتی خطوط۔</p>
      </div>

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/ur/reviews/">کتابی جائزے</a></h2>
        <p>تعلیم، خواندگی اور تحقیق سے متعلق کتابوں کے تنقیدی جائزے۔</p>
      </div>

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/ur/reflections/">عکاسی</a></h2>
        <p>مطالعے اور تعلیمی سفر پر ذاتی مشاہدات۔</p>
      </div>

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/ur/main-ne-kya-dekha/">میں نے کیا دیکھا</a></h2>
        <p>مطالعے اور سیکھنے کی جگہوں پر فیلڈ نوٹس۔</p>
      </div>

    </div>
  </section>

  {% else %}

  <section class="home-welcome">
    <h1 class="home-heading">Welcome to Kitabomori</h1>
    <p class="home-tagline">Promoting reading and writing culture</p>
    <p>
      Kitabomori is a volunteer educational publishing platform created for researchers, students, teachers, policymakers, and the general public.
      Our aim is to promote awareness through reading, writing and conversations about education, literacy, and the culture based on evidence.
    </p>
  
  <p>
  Here you will find blogs, op-eds, letters, reviews, and personal reflections.
  If you would like to contribute your writing, please read our <span class="highlight"><a href="{{ site.baseurl }}/en/guidelines/">Guidelines</a></span> and <span class="highlight"><a href="{{ site.baseurl }}/en/contact/">get in touch</a></span>.
</p>
</section>

  <section class="home-sections">
    <div class="section-cards">

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/en/blogs/">Blogs</a></h2>
        <p>Analytical, argument-driven writing on education and society.</p>
      </div>

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/en/opeds/">Op-Eds</a></h2>
        <p>Opinion grounded in experience and research, with actionable recommendations.</p>
      </div>

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/en/letters/">Letters</a></h2>
        <p>Personal letters from teachers, students, and researchers.</p>
      </div>

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/en/reviews/">Reviews</a></h2>
        <p>Critical reviews of books on education, literacy, and research.</p>
      </div>

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/en/reflections/">Reflections</a></h2>
        <p>Personal observations on reading and the educational journey.</p>
      </div>

      <div class="section-card">
        <h2><a href="{{ site.baseurl }}/en/main-ne-kya-dekha/">What I Saw</a></h2>
        <p>Field notes and visual observations on reading and learning spaces.</p>
      </div>

    </div>
  </section>

  {% endif %}

</div>
