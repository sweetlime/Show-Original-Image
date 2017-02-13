// ==UserScript==
// @name            Show Original Images
// @description     Displays the original image instead of the resized image. (daum, tistory)
// @version         0.1
// @include         http://*blog.daum.net/*
// @include         http://*cafe.daum.net/*
// @include         http://*tistory.com/*
// @include         http://*all-idol.com/*
// @include         http://*hvstudio.net/*
// @include         http://*idol-grapher.com/*
// @include         http://*idoleemo.com/*
// @include         http://*9mworld.com/*
// @include         http://*thestudio.kr/*
// @include         http://*apinkstudio.com/*
// @include         http://*drighk.com/*
// @include         http://*harane.com/*
// @include         http://*karagrapher.com/*
// @include         http://aprilgirls.com/*
// @include			http://binnie.kr/*
// @include			http://yooamyangel.com/*
// @include			http://ohmygirl.kr/*
// ==/UserScript==

var tags = document.getElementsByTagName('img');
for (var i = 0; i < tags.length; i++) {
        if(tags[i].src.match('uf.tistory.com/image')||tags[i].src.match('uf.daum.net/image')){
                var link = document.createElement('img');
                link.src = tags[i].src.replace('image', 'original');
                link.style='width: 100%; height: auto;';
                var pimg=tags[i].parentNode;
                pimg.replaceChild(link, tags[i]);
        }
}
