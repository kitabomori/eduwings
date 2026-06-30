---
layout: page
title_en: "Blogs"
title_ur: "بلاگز"
description_en: "Analytical, argument-driven writing on education and society."
description_ur: "تعلیم اور معاشرے پر مبنی تجزیاتی اور دلیل پر مبنی تحریریں۔"
permalink: /blogs/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">تعلیم اور معاشرے پر مبنی تجزیاتی اور دلیل پر مبنی تحریریں۔</p>
{% else %}
<p class="collection-intro">Analytical, argument-driven writing on education and society.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.blogs | sort: "date" | reverse %}
  {% for item in sorted_items %}
  <div class="content-card">
    <h2 class="card-title">
      <a href="{{ item.url }}">
        {% if site.lang == 'ur' %}{{ item.title_ur }}{% else %}{{ item.title_en }}{% endif %}
      </a>
    </h2>
    <p class="card-date">{{ item.date | date: "%d %B %Y" }}</p>
    <p class="card-excerpt">
      {% if site.lang == 'ur' %}
        {{ item.description_ur }}
      {% else %}
        {{ item.description_en }}
      {% endif %}
    </p>
    <a href="{{ item.url }}" class="card-read-more">
      {% if site.lang == 'ur' %}مزید پڑھیں &rarr;{% else %}Read more &rarr;{% endif %}
    </a>
  </div>
  {% endfor %}
</div>
