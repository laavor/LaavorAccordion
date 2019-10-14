var lvAC01;var lvAC02;var lvAC03;var lvAC04;String.prototype.lvAC05=function(){"use strict";var lvAC06=parseInt(this);return lvAC06;};function LaavorAccordion(lvAC07,lvAC08){if(lvAC02===undefined||lvAC02===null)
{lvAC02=[];}
if(lvAC01===undefined||lvAC01===null)
{lvAC01=[];}
if(lvAC03===undefined||lvAC03===null)
{lvAC03=[];}
lvAC03.push(lvAC07);if(lvAC04===undefined||lvAC04===null)
{lvAC04=[];}
if(lvAC08!==undefined&&lvAC08!==null){lvAC04[lvAC07]=lvAC08;}
else{lvAC04[lvAC07]=lvAC11();}}
window.addEventListener('load',function(){var lvAC09=lvAC03.length;for(var lvAC10=0;lvAC10<lvAC09;lvAC10++)
{lvAC12(lvAC10,lvAC03[lvAC10]);}});function lvAC12(lvAC13,lvAC14){var lvAC15=document.getElementById(lvAC03[lvAC13]);lvAC02[lvAC14]=[];if(lvAC15!==undefined&&lvAC15!==null){var lvAC16=lvAC15.children;var lvAC17=lvAC16.length;lvAC18(lvAC04[lvAC14]);try{for(var lvAC19=0;lvAC19<lvAC17;lvAC19+=2){var lvAC21=lvAC20(lvAC16[lvAC19+1]);var lvAC22={lvAC25:lvAC16[lvAC19],lvAC26:lvAC16[lvAC19+1],lvAC23:lvAC21};lvAC16[lvAC19+1].style.display='none';lvAC02[lvAC14].push(lvAC22);var lvAC24=lvAC39(lvAC02[lvAC14].length-1);lvAC22.lvAC25.setAttribute("lvAC30",lvAC24);lvAC22.lvAC25.onclick=lvAC54;lvAC22.lvAC25.setAttribute("lvAC31",false);lvAC22.lvAC25.setAttribute("lvAC33",lvAC14);lvAC22.lvAC25.style.backgroundColor=lvAC04[lvAC14].backgroundColorTitle;lvAC22.lvAC25.style.border="solid 1px";lvAC22.lvAC25.style.borderColor=lvAC04[lvAC14].borderColorTitle;lvAC22.lvAC25.style.color=lvAC04[lvAC14].textColorTitle;lvAC22.lvAC25.style.fontSize=lvAC04[lvAC14].fontSizeTitle.replace("em","")+'em';lvAC22.lvAC26.style.border="solid 1px";lvAC22.lvAC26.style.borderColor=lvAC04[lvAC14].borderColorContent;lvAC22.lvAC25.style.cursor="pointer";lvAC22.lvAC25.style.marginBottom="0px";lvAC22.lvAC26.style.marginBottom="0px";lvAC22.lvAC25.style.marginTop="0px";lvAC22.lvAC26.style.marginTop="0x";lvAC22.lvAC25.onmouseover=lvAC27;lvAC22.lvAC25.onmouseleave=lvAC28;}
if(lvAC04[lvAC14].preSelectItem.toString()==="true"){lvAC02[lvAC14][0].lvAC25.setAttribute("lvAC31",true);lvAC29(lvAC02[lvAC14][0]);lvAC01[lvAC14]=lvAC02[lvAC14][0];}
else{lvAC01[lvAC14]=null;}}
catch(e){throw new Error("The Title and Content order can not be interrupted, if necessary contact Laavor support.");}}
else{throw new Error("Item with idFather informed was not found.");}}
function lvAC27(){if(this!==undefined&&this!==null){var lvAC34=this.getAttribute("lvAC33");if(lvAC34!==undefined&&lvAC34!==null)
{this.style.backgroundColor=lvAC04[lvAC34].backgroundColorTitleHover;this.style.borderColor=lvAC04[lvAC34].borderColorTitleHover;this.style.color=lvAC04[lvAC34].textColorTitleHover;}}}
function lvAC28(){if(this!==undefined&&this!==null){var lvAC36=this.getAttribute("lvAC31");var lvAC35=this.getAttribute("lvAC33");if(lvAC36==="false"){this.style.backgroundColor=lvAC04[lvAC35].backgroundColorTitle;this.style.borderColor=lvAC04[lvAC35].borderColorTitle;this.style.color=lvAC04[lvAC35].textColorTitle;}
else{this.style.backgroundColor=lvAC04[lvAC35].backgroundColorTitleSelected;this.style.borderColor=lvAC04[lvAC35].borderColorTitleSelected;this.style.color=lvAC04[lvAC35].textColorTitleSelected;}}}
function lvAC18(lvAC37){var lvAC38=lvAC11();if(lvAC37.viewMode===undefined||lvAC37.viewMode===null){lvAC37.viewMode=lvAC38.viewMode;}
if(lvAC37.preSelectItem===undefined||lvAC37.preSelectItem===null){lvAC37.preSelectItem=lvAC38.preSelectItem;}
if(lvAC37.backgroundColorTitle===undefined||lvAC37.backgroundColorTitle===null){lvAC37.backgroundColorTitle=lvAC38.backgroundColorTitle;}
if(lvAC37.backgroundColorTitleHover===undefined||lvAC37.backgroundColorTitleHover===null){lvAC37.backgroundColorTitleHover=lvAC38.backgroundColorTitleHover;}
if(lvAC37.borderColorTitle===undefined||lvAC37.borderColorTitle===null){lvAC37.borderColorTitle=lvAC38.borderColorTitle;}
if(lvAC37.borderColorTitleHover===undefined||lvAC37.borderColorTitleHover===null){lvAC37.borderColorTitleHover=lvAC38.borderColorTitleHover;}
if(lvAC37.textColorTitle===undefined||lvAC37.textColorTitle===null){lvAC37.textColorTitle=lvAC38.textColorTitle;}
if(lvAC37.textColorTitleHover===undefined||lvAC37.textColorTitleHover===null){lvAC37.textColorTitleHover=lvAC38.textColorTitleHover;}
if(lvAC37.borderSizeTitle===undefined||lvAC37.borderSizeTitle===null){lvAC37.borderSizeTitle=lvAC38.borderSizeTitle;}
if(lvAC37.borderTitleHasShadow===undefined||lvAC37.borderTitleHasShadow===null){lvAC37.borderTitleHasShadow=lvAC38.borderTitleHasShadow;}
if(lvAC37.borderContentHasShadow===undefined||lvAC37.borderContentHasShadow===null){lvAC37.borderContentHasShadow=lvAC38.borderContentHasShadow;}
if(lvAC37.fontSizeTitle===undefined||lvAC37.fontSizeTitle===null){lvAC37.fontSizeTitle=lvAC38.fontSizeTitle;}
if(lvAC37.borderColorContent===undefined||lvAC37.borderColorContent===null){lvAC37.borderColorContent=lvAC38.borderColorContent;}
if(lvAC37.backgroundColorTitleSelected===undefined||lvAC37.backgroundColorTitleSelected===null){lvAC37.backgroundColorTitleSelected=lvAC38.backgroundColorTitleSelected;}
if(lvAC37.textColorTitleSelected===undefined||lvAC37.textColorTitleSelected===null){lvAC37.textColorTitleSelected=lvAC38.textColorTitleSelected;}
if(lvAC37.borderColorTitleSelected===undefined||lvAC37.borderColorTitleSelected===null){lvAC37.borderColorTitleSelected=lvAC38.borderColorTitleSelected;}}
function lvAC39(lvAC41){"use strict";var lvAC40="";var lvAC42="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var lvAC43=0;lvAC43<15;lvAC43++){lvAC40+=lvAC42.charAt(Math.floor(Math.random()*lvAC42.length));}
lvAC40+='_'+lvAC41.toString();return lvAC40;}
function lvAC54(){try{var lvAC44=this.getAttribute("lvAC33");var lvAC45=this.getAttribute("lvAC30");var lvAC46=this.getAttribute("lvAC31");var lvAC47=lvAC45.split('_')[1].toString().lvAC05();var lvAC48=lvAC02[lvAC44][lvAC47];var lvAC49=false;if(lvAC48!==undefined&&lvAC48!==null){if(lvAC04[lvAC44].viewMode!==undefined&&lvAC04[lvAC44].viewMode!==null){if(lvAC46.toString()==='true'){lvAC50(lvAC48);lvAC49=true;}
else{lvAC29(lvAC48);}
if(lvAC04[lvAC44].viewMode==='single'){if(lvAC01[lvAC44]!==undefined&&lvAC01[lvAC44]!==null){var lvAC51=this.getAttribute("lvAC30");var lvAC52=lvAC01[lvAC44].lvAC25.getAttribute("lvAC30");if(lvAC51!==lvAC52){lvAC50(lvAC01[lvAC44]);}}}}
else if(lvAC01[lvAC44]!==undefined&&lvAC01[lvAC44]!==null){lvAC50(lvAC01[lvAC44]);}
lvAC01[lvAC44]=lvAC48;}
else{throw new Error("Error in count inside Accordion(Click Item) contact Laavor.com with example.");}}
catch(e){throw new Error("Error in count inside Accordion(Click Item) contact Laavor.com with example.");}}
function lvAC20(lvAC53){if(lvAC53.clientHeight!==undefined&&lvAC53.clientHeight!==null){return lvAC53.clientHeight.toString().lvAC05();}
if(lvAC53.height!==undefined&&lvAC53.style.height!==null){return lvAC53.height.toString().lvAC05();}
if(lvAC53.offsetHeight!==undefined&&lvAC53.offsetHeight!==null){return lvAC53.offsetHeight.toString().lvAC05()-2;}
else{throw new Error("Error in count inside Accordion(Height Item) contact Laavor.com with example.");}}
function lvAC55(lvAC56,lvAC57,lvAC58){setTimeout(function(){lvAC56.style.height=lvAC57.toString().replace("px","")+'px';},lvAC58);}
function lvAC50(lvAC59){if(lvAC59.lvAC26!==undefined&&lvAC59.lvAC26!==null&&lvAC59.lvAC23!==undefined&&lvAC59.lvAC23!==null){var lvAC60=lvAC59.lvAC23/10;var lvAC61=lvAC59.lvAC25.getAttribute("lvAC33");var lvAC62=0;var lvAC63=50;lvAC59.lvAC26.style.opacity="0";for(var lvAC67=lvAC59.lvAC23;lvAC67>0;lvAC67-=lvAC60){lvAC55(lvAC59.lvAC26,lvAC67,lvAC63);if(lvAC62>11){throw new Error("Error in count inside Accordion(Hide Item) contact Laavor.com with example.");}
lvAC63+=50;}
setTimeout(function(){lvAC59.lvAC26.style.height='0px';},lvAC63);lvAC63+=50;setTimeout(function(){lvAC59.lvAC26.style.display='none';},lvAC63);lvAC63+=50;setTimeout(function(){lvAC59.lvAC26.style.height=lvAC59.lvAC23.toString()+'px';lvAC59.lvAC25.style.backgroundColor=lvAC04[lvAC61].backgroundColorTitle;lvAC59.lvAC25.style.color=lvAC04[lvAC61].textColorTitle;lvAC59.lvAC25.style.borderColor=lvAC04[lvAC61].borderColorTitle;},lvAC63);lvAC59.lvAC25.setAttribute("lvAC31",false);}}
function lvAC29(lvAC64){if(lvAC64.lvAC26!==undefined&&lvAC64.lvAC26!==null&&lvAC64.lvAC23!==undefined&&lvAC64.lvAC23!==null){var lvAC65=lvAC64.lvAC23/10;var lvAC68=lvAC64.lvAC25.getAttribute("lvAC33");var lvAC69=0;var lvAC70=50;lvAC64.lvAC26.style.height=lvAC65.toString()+'px';lvAC64.lvAC26.style.display='block';for(var lvAC66=lvAC65;lvAC66<=lvAC64.lvAC23;lvAC66+=lvAC65){lvAC55(lvAC64.lvAC26,lvAC66,lvAC70);if(lvAC69>11){throw new Error("Error in count inside Accordion(Hide Item) contact Laavor.com with example.");}
lvAC70+=50;}
setTimeout(function(){lvAC64.lvAC26.style.height=lvAC64.lvAC23.toString()+'px';lvAC64.lvAC26.style.opacity="1";lvAC64.lvAC25.style.backgroundColor=lvAC04[lvAC68].backgroundColorTitleSelected;lvAC64.lvAC25.style.color=lvAC04[lvAC68].textColorTitleSelected;lvAC64.lvAC25.style.borderColor=lvAC04[lvAC68].borderColorTitleSelected;},lvAC70);lvAC70+=50;lvAC64.lvAC25.setAttribute("lvAC31",true);}}
function lvAC11(){return{viewMode:'single',preSelectItem:true,backgroundColorTitle:"orange",borderColorTitle:"black",borderSizeTitle:"8px",textColorTitle:"black",fontSizeTitle:"2em",backgroundColorTitleHover:"gray",borderColorTitleHover:"black",textColorTitleHover:"white",borderTitleHasShadow:true,borderColorContent:"black",backgroundColorTitleSelected:"#f0f0f0",textColorTitleSelected:"black",borderColorTitleSelected:"white"};}