// ==UserScript==
// @name        屏蔽知乎的问题标题
// @namespace   undefined
// @description 看一些羞耻的问题时还是比较担心别别人瞄见的，用这个脚本屏蔽了下滑时弹出的问题标题
// @include     *://www.zhihu.com/question/*
// @version     0.01
// @connect-src       www.zhihu.com
// ==/UserScript==

(function() {
    'use strict';
var titleBlock=document.getElementsByClassName("QuestionHeader-title")[0];
    titleBlock.style.display="none";
})();
