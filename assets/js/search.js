/* ============================================================
   search.js – Client-side search for Kitabomori.
   Fetches search_index.json and filters by language + query.
   SITE_LANG and SITE_BASEURL are set inline in search.md.
   ============================================================ */

(function () {
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var index = null;

  // Fetch the search index once
  fetch(SITE_BASEURL + '/' + SITE_LANG + '/search_index.json')
    .then(function (r) { return r.json(); })
    .then(function (data) { index = data; })
    .catch(function () {
      results.innerHTML = '<p>Search index could not be loaded.</p>';
    });

  // Listen for input
  input.addEventListener('input', function () {
    var query = input.value.trim().toLowerCase();
    if (!index || query.length < 2) {
      results.innerHTML = '';
      return;
    }
    var filtered = index.filter(function (item) {
      var title = SITE_LANG === 'ur' ? item.title_ur : item.title_en;
      return title && title.toLowerCase().indexOf(query) !== -1;
    });

    if (filtered.length === 0) {
      results.innerHTML = '<p>' + (SITE_LANG === 'ur' ? 'کوئی نتیجہ نہیں ملا۔' : 'No results found.') + '</p>';
      return;
    }

    var html = filtered.map(function (item) {
      var title = SITE_LANG === 'ur' ? item.title_ur : item.title_en;
      var type  = SITE_LANG === 'ur' ? item.type_ur  : item.type_en;
      var url   = SITE_LANG === 'ur' ? item.url_ur   : item.url_en;
      return '<div class="search-result"><a href="' + url + '"><strong>' +
             type + '</strong> – ' + title + '</a></div>';
    }).join('');

    results.innerHTML = html;
  });
})();
