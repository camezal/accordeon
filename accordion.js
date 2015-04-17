window.onload=accordionAddBehivior;

function accordionTitleOnClick(){
    var accordion=this.parentNode;
    var childs=accordion.childNodes;
    var div=[];
    for(var i=0;i<childs.length;i++){
        if(childs[i].tagName=="DIV"){
            div[div.length]=childs[i];
        }
    }
    var currentTitle=null;
    var currentPane=null;
    var nextTitle=this;
    var nextPane=null;
    for(var i=0;i<div.length;i++){
        if(div[i]==nextTitle){
            nextPane=div[i+1];
        }
    }
    for (var i=0;i<div.length;i++){
        if(div[i].className=="accordionCurrentTitle"){
             currentTitle=div[i];
        }else if(div[i].className=="accordionCurrentPane"){
             currentPane=div[i];
        }
    }
    currentTitle.className="accordionOtherTitle";
    currentPane.className="accordionOtherPane";
    nextTitle.className="accordionCurrentTitle";
    nextPane.className="accordionCurrentPane";
    nextPane.style.height=calculatePaneHeight(accordion)+"px";
}

function accordionAddBehivior(){
    var accordion=document.getElementById("accordion1");
    accordion.className="accordionComponent";
    var childs=accordion.childNodes;
    var div=[];
    for(var i=0;i<childs.length;i++){
        if(childs[i].tagName=="DIV"){
            div[div.length]=childs[i];
        }
    }
    for (var i=0;i<div.length;i+=2){
        div[i].onclick=accordionTitleOnClick;
        if(i==0){
            div[i].className="accordionCurrentTitle";
            div[i+1].className="accordionCurrentPane";
        }else{
            div[i].className="accordionOtherTitle";
            div[i+1].className="accordionOtherPane";
        }
    }
}

function calculatePaneHeight(accordeon){
    var paneHeight=accordeon.clientHeight;
    for(var i=0;i<div.length;i+=2){
        paneheight-=div[i].offsetHeight;
    }
    return paneHeight;
}
/**
 * Created by Дима on 16.04.2015.
 */
