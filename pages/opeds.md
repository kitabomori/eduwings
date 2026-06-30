---
layout: page
title_en: "Op-Eds"
title_ur: "اوپ ایڈ"
description_en: "Opinion grounded in experience and research, with actionable recommendations."
description_ur: "تجربے اور تحقیق پر مبنی رائے جس میں عملی تجاویز شامل ہیں۔"
permalink: /opeds/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">تجربے اور تحقیق پر مبنی رائے جس میں عملی تجاویز شامل ہیں۔</p>
{% else %}
<p class="collection-intro">Opinion grounded in experience and research, with actionable recommendations.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.opeds | sort: "date" | reverse %}
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
