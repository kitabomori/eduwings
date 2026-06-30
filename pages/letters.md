---
layout: page
title_en: "Letters"
title_ur: "خطوط"
description_en: "Personal letters from teachers, students, and researchers."
description_ur: "اساتذہ، طلباء اور محققین کی طرف سے ذاتی خطوط۔"
permalink: /letters/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">اساتذہ، طلباء اور محققین کی طرف سے ذاتی خطوط۔</p>
{% else %}
<p class="collection-intro">Personal letters from teachers, students, and researchers.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.letters | sort: "date" | reverse %}
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
