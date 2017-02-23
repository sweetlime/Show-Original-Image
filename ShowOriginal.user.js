
// ==UserScript==
// @name            Show Original Images
// @namespace       http://gallog.dcinside.com/sweetlime
// @description     Displays the original image instead of the resized image. (daum, tistory)
// @version         0.1
// @updateURL       https://github.com/sweetlime/Show-Original-Images/raw/master/ShowOriginal.user.js
// @author          sweetlime
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
// @include         http://*aprilgirls.com/*
// @include         http://*binnie.kr/*
// @include         http://*yooamyangel.com/*
// @include         http://*ohmygirl.kr/*
// @include         http://*20150421.com/*
// @include         http://*아린.com/*
// @include         http://*xn--sy2bt5s.com/*
// @include         http://*940728.com/*
// @include         http://*950917.net/*
// @include         http://*김지호.com/*
// @include         http://*xn--4k0bn53cvzi.com/*
// @include         http://*yooa.kr/*
// @include         http://*19950122.com/*
// @include         http://*1997-0909.net/*
// @include         http://*19950917.net/*
// @include         http://*dothome.co.kr/*
// @include         http://*kimmimi.kr/*
// ==/UserScript==

var tags = document.getElementsByTagName('img');
for (var i = 0; i < tags.length; i++) {
        if(tags[i].src.match('uf.tistory.com/image')||tags[i].src.match('uf.daum.net/image')){
                var link = document.createElement('img');
                link.src = tags[i].src.replace('image', 'original');
                link.style='width: 100%; height: auto; clear:both;';
                var pimg=tags[i].parentNode;
                pimg.replaceChild(link, tags[i]);
        }
}
