import React from 'react';


import "./index.less";


/* 
自定义的看似链接实是button的组件
1、{...props}：将接受的所有属性传递给子标签
2、children标签属性：
    字符串<LinkButton></LinkButton>
    标签对象：<LinkButton><span></span></LinkButton>
    标签对象的数组:<LinkButton><span></span><span></span></LinkButton>
*/
export default function LinkButton (props) {
    return <button className="link-button" {...props}></button>
}