---
layout: page
title_en: "What I Saw"
title_ur: "میں نے دیکھا"
description_en: "Short field notes drawn from everyday observation."
description_ur: "روزمرہ زندگی کے مشاہدات پر مبنی مختصر فیلڈ نوٹس۔"
permalink: /creative-writing/what-i-saw/
---

{% if site.lang == 'ur' %}
<p class="collection-intro">روزمرہ زندگی کے مشاہدات پر مبنی مختصر فیلڈ نوٹس۔</p>
{% else %}
<p class="collection-intro">Short field notes drawn from everyday observation.</p>
{% endif %}

<div class="card-grid">
  {% assign sorted_items = site.what_i_saw | sort: "date" | reverse %}
  {% for item in sorted_items %}
  <div class="content-card">
    <h2 class="card-title">
      <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}">
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
    <a href="{{ site.baseurl }}/{{ site.lang }}{{ item.url }}" class="card-read-more">
      {% if site.lang == 'ur' %}مزید پڑھیں &rarr;{% else %}Read more &rarr;{% endif %}
    </a>
  </div>
  {% endfor %}
</div>
