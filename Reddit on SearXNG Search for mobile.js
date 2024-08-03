// ==UserScript==

// @name         Reddit on SearXNG Search

// @namespace    https://github.com/Kdroidwin/Reddit-on-SearXNG-Search

// @version      0.1

// @description  Add site:reddit.com to SearXNG search queries on button click

// @author       Kdroidwim

// @match        https://priv.au/*
// @match        https://search.inetol.net/*
// @match        https://searx.tiekoetter.com/*

// @grant        none

// ==/UserScript==

(function() {

    'use strict';

    // SearXNG の検索フォームと検索入力フィールドのセレクタを取得

    const searchForm = document.querySelector('form[action="/search"]');

    const searchInput = document.querySelector('input[name="q"]');

    // Reddit 検索用のボタンを作成

    const redditButton = document.createElement('button');

    redditButton.textContent = 'Search Reddit';

    redditButton.type = 'button';

    redditButton.style.marginLeft = '10px';

    // ボタンのクリックイベントを追加

    redditButton.addEventListener('click', function() {

        let query = searchInput.value;

        // クエリに site:reddit.com を追加

        if (!query.includes('site:reddit.com')) {

            searchInput.value = query + ' site:reddit.com';

        }

        // フォームを送信

        searchForm.submit();

    });

    // 検索フォームにボタンを追加

    if (searchForm) {

        searchForm.appendChild(redditButton);

    }

})();

