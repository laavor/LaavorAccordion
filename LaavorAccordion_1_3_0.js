var lvAc1;var lvAc2;var lvAc3;var lvAc4;function LaavorAccordion(lvAc5,lvAc6){if(lvAc2===undefined||lvAc2===null)
{lvAc2=[];}
if(lvAc1===undefined||lvAc1===null)
{lvAc1=[];}
if(lvAc3===undefined||lvAc3===null)
{lvAc3=[];}
lvAc3.push(lvAc5);if(lvAc4===undefined||lvAc4===null)
{lvAc4=[];}
if(lvAc6!==undefined&&lvAc6!==null){lvAc4[lvAc5]=lvAc6;}
else{lvAc4[lvAc5]=lvAc63();}}
window.addEventListener('load',function(){var lvAc7=lvAc3.length;for(var lvAc8=0;lvAc8<lvAc7;lvAc8++)
{lvAc21(lvAc8,lvAc3[lvAc8]);}});function lvAc21(lvAc9,lvAc10){var lvAc11=document.getElementById(lvAc3[lvAc9]);lvAc2[lvAc10]=[];if(lvAc11!==undefined&&lvAc11!==null){var lvAc12=lvAc11.children;var lvAc13=lvAc12.length;lvAc22(lvAc4[lvAc10]);try{for(var lvAc14=0;lvAc14<lvAc13;lvAc14+=2){var lvAc15=lvAc49(lvAc12[lvAc14+1]);var lvAc16={lvAc18:lvAc12[lvAc14],lvAc19:lvAc12[lvAc14+1],lvAc20:lvAc15};lvAc12[lvAc14+1].style.display='none';lvAc2[lvAc10].push(lvAc16);var lvAc17=lvAc23(lvAc2[lvAc10].length-1);lvAc16.lvAc18.setAttribute("lvAc23",lvAc17);lvAc16.lvAc18.onclick=lvAc27;lvAc16.lvAc18.setAttribute("lvAc25",false);lvAc16.lvAc18.setAttribute("lvAc26",lvAc10);lvAc16.lvAc18.style.backgroundColor=lvAc4[lvAc10].backgroundColorTitle;lvAc16.lvAc18.style.border="solid 1px";lvAc16.lvAc18.style.borderColor=lvAc4[lvAc10].borderColorTitle;lvAc16.lvAc18.style.color=lvAc4[lvAc10].textColorTitle;lvAc16.lvAc18.style.fontSize=lvAc4[lvAc10].fontSizeTitle.replace("em","")+'em';lvAc16.lvAc19.style.border="solid 1px";lvAc16.lvAc19.style.borderColor=lvAc4[lvAc10].borderColorContent;lvAc16.lvAc18.style.cursor="pointer";lvAc16.lvAc18.style.marginBottom="0px";lvAc16.lvAc19.style.marginBottom="0px";lvAc16.lvAc18.style.marginTop="0px";lvAc16.lvAc19.style.marginTop="0x";lvAc16.lvAc18.onmouseover=lvAc28;lvAc16.lvAc18.onmouseleave=lvAc29;}
if(lvAc4[lvAc10].preSelectItem.toString()==="true"){lvAc2[lvAc10][0].lvAc18.setAttribute("lvAc25",true);lvAc24(lvAc2[lvAc10][0]);lvAc1[lvAc10]=lvAc2[lvAc10][0];}
else{lvAc1[lvAc10]=null;}}
catch(e){throw new Error("The Title and Content order can not be interrupted, if necessary contact Laavor support.");}}
else{throw new Error("Item with idFather informed was not found.");}}
function lvAc28(){if(this!==undefined&&this!==null){var lvAc30=this.getAttribute("lvAc26");if(lvAc30!==undefined&&lvAc30!==null)
{this.style.backgroundColor=lvAc4[lvAc30].backgroundColorTitleHover;this.style.borderColor=lvAc4[lvAc30].borderColorTitleHover;this.style.color=lvAc4[lvAc30].textColorTitleHover;}}}
function lvAc29(){if(this!==undefined&&this!==null){var lvAc31=this.getAttribute("lvAc25");var lvAc32=this.getAttribute("lvAc26");if(lvAc31==="false"){this.style.backgroundColor=lvAc4[lvAc32].backgroundColorTitle;this.style.borderColor=lvAc4[lvAc32].borderColorTitle;this.style.color=lvAc4[lvAc32].textColorTitle;}
else{this.style.backgroundColor=lvAc4[lvAc32].backgroundColorTitleSelected;this.style.borderColor=lvAc4[lvAc32].borderColorTitleSelected;this.style.color=lvAc4[lvAc32].textColorTitleSelected;}}}
function lvAc22(lvAc33){var lvAc34=lvAc63();if(lvAc33.viewMode===undefined||lvAc33.viewMode===null){lvAc33.viewMode=lvAc34.viewMode;}
if(lvAc33.preSelectItem===undefined||lvAc33.preSelectItem===null){lvAc33.preSelectItem=lvAc34.preSelectItem;}
if(lvAc33.backgroundColorTitle===undefined||lvAc33.backgroundColorTitle===null){lvAc33.backgroundColorTitle=lvAc34.backgroundColorTitle;}
if(lvAc33.backgroundColorTitleHover===undefined||lvAc33.backgroundColorTitleHover===null){lvAc33.backgroundColorTitleHover=lvAc34.backgroundColorTitleHover;}
if(lvAc33.borderColorTitle===undefined||lvAc33.borderColorTitle===null){lvAc33.borderColorTitle=lvAc34.borderColorTitle;}
if(lvAc33.borderColorTitleHover===undefined||lvAc33.borderColorTitleHover===null){lvAc33.borderColorTitleHover=lvAc34.borderColorTitleHover;}
if(lvAc33.textColorTitle===undefined||lvAc33.textColorTitle===null){lvAc33.textColorTitle=lvAc34.textColorTitle;}
if(lvAc33.textColorTitleHover===undefined||lvAc33.textColorTitleHover===null){lvAc33.textColorTitleHover=lvAc34.textColorTitleHover;}
if(lvAc33.borderSizeTitle===undefined||lvAc33.borderSizeTitle===null){lvAc33.borderSizeTitle=lvAc34.borderSizeTitle;}
if(lvAc33.borderTitleHasShadow===undefined||lvAc33.borderTitleHasShadow===null){lvAc33.borderTitleHasShadow=lvAc34.borderTitleHasShadow;}
if(lvAc33.borderContentHasShadow===undefined||lvAc33.borderContentHasShadow===null){lvAc33.borderContentHasShadow=lvAc34.borderContentHasShadow;}
if(lvAc33.fontSizeTitle===undefined||lvAc33.fontSizeTitle===null){lvAc33.fontSizeTitle=lvAc34.fontSizeTitle;}
if(lvAc33.borderColorContent===undefined||lvAc33.borderColorContent===null){lvAc33.borderColorContent=lvAc34.borderColorContent;}
if(lvAc33.backgroundColorTitleSelected===undefined||lvAc33.backgroundColorTitleSelected===null){lvAc33.backgroundColorTitleSelected=lvAc34.backgroundColorTitleSelected;}
if(lvAc33.textColorTitleSelected===undefined||lvAc33.textColorTitleSelected===null){lvAc33.textColorTitleSelected=lvAc34.textColorTitleSelected;}
if(lvAc33.borderColorTitleSelected===undefined||lvAc33.borderColorTitleSelected===null){lvAc33.borderColorTitleSelected=lvAc34.borderColorTitleSelected;}}
function lvAc23(lvAc41){"use strict";var lvAc42="";var lvAc43="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var lvAc44=0;lvAc44<15;lvAc44++){lvAc42+=lvAc43.charAt(Math.floor(Math.random()*lvAc43.length));}
lvAc42+='_'+lvAc41.toString();return lvAc42;}
function lvAc27(){try{var lvAc35=this.getAttribute("lvAc26");var lvAc36=this.getAttribute("lvAc23");var lvAc37=this.getAttribute("lvAc25");var lvAc38=lvAc36.split('_')[1].toString().lvAc65();var lvAc39=lvAc2[lvAc35][lvAc38];var lvAc40=false;if(lvAc39!==undefined&&lvAc39!==null){if(lvAc4[lvAc35].viewMode!==undefined&&lvAc4[lvAc35].viewMode!==null){if(lvAc37.toString()==='true'){lvAc45(lvAc39);lvAc40=true;}
else{lvAc24(lvAc39);}
if(lvAc4[lvAc35].viewMode==='single'){if(lvAc1[lvAc35]!==undefined&&lvAc1[lvAc35]!==null){var lvAc46=this.getAttribute("lvAc23");var lvAc47=lvAc1[lvAc35].lvAc18.getAttribute("lvAc23");if(lvAc46!==lvAc47){lvAc45(lvAc1[lvAc35]);}}}}
else if(lvAc1[lvAc35]!==undefined&&lvAc1[lvAc35]!==null){lvAc45(lvAc1[lvAc35]);}
lvAc1[lvAc35]=lvAc39;}
else{throw new Error("Error in count inside Accordion(Click Item) contact Laavor.com with example.");}}
catch(e){throw new Error("Error in count inside Accordion(Click Item) contact Laavor.com with example.");}}
String.prototype.lvAc65=function(){"use strict";var lvAc66=parseInt(this);return lvAc66;};function lvAc49(lvAc48){if(lvAc48.clientHeight!==undefined&&lvAc48.clientHeight!==null){return lvAc48.clientHeight.toString().lvAc65();}
if(lvAc48.height!==undefined&&lvAc48.style.height!==null){return lvAc48.height.toString().lvAc65();}
if(lvAc48.offsetHeight!==undefined&&lvAc48.offsetHeight!==null){return lvAc48.offsetHeight.toString().lvAc65()-2;}
else{throw new Error("Error in count inside Accordion(Height Item) contact Laavor.com with example.");}}
function lvAc64(lvAc52,lvAc53,lvAc60){setTimeout(function(){lvAc52.style.height=lvAc53.toString().replace("px","")+'px';},lvAc60);}
function lvAc45(lvAc50){if(lvAc50.lvAc19!==undefined&&lvAc50.lvAc19!==null&&lvAc50.lvAc20!==undefined&&lvAc50.lvAc20!==null){var lvAc51=lvAc50.lvAc20/10;var lvAc56=lvAc50.lvAc18.getAttribute("lvAc26");var lvAc54=0;var lvAc55=50;lvAc50.lvAc19.style.opacity="0";for(var lvAc68=lvAc50.lvAc20;lvAc68>0;lvAc68-=lvAc51){lvAc64(lvAc50.lvAc19,lvAc68,lvAc55);if(lvAc54>11){throw new Error("Error in count inside Accordion(Hide Item) contact Laavor.com with example.");}
lvAc55+=50;}
setTimeout(function(){lvAc50.lvAc19.style.height='0px';},lvAc55);lvAc55+=50;setTimeout(function(){lvAc50.lvAc19.style.display='none';},lvAc55);lvAc55+=50;setTimeout(function(){lvAc50.lvAc19.style.height=lvAc50.lvAc20.toString()+'px';lvAc50.lvAc18.style.backgroundColor=lvAc4[lvAc56].backgroundColorTitle;lvAc50.lvAc18.style.color=lvAc4[lvAc56].textColorTitle;lvAc50.lvAc18.style.borderColor=lvAc4[lvAc56].borderColorTitle;},lvAc55);lvAc50.lvAc18.setAttribute("lvAc25",false);}}
function lvAc24(lvAc58){if(lvAc58.lvAc19!==undefined&&lvAc58.lvAc19!==null&&lvAc58.lvAc20!==undefined&&lvAc58.lvAc20!==null){var lvAc57=lvAc58.lvAc20/10;var lvAc59=lvAc58.lvAc18.getAttribute("lvAc26");var lvAc61=0;var lvAc62=50;lvAc58.lvAc19.style.height=lvAc57.toString()+'px';lvAc58.lvAc19.style.display='block';for(var lvAc67=lvAc57;lvAc67<=lvAc58.lvAc20;lvAc67+=lvAc57){lvAc64(lvAc58.lvAc19,lvAc67,lvAc62);if(lvAc61>11){throw new Error("Error in count inside Accordion(Hide Item) contact Laavor.com with example.");}
lvAc62+=50;}
setTimeout(function(){lvAc58.lvAc19.style.height=lvAc58.lvAc20.toString()+'px';lvAc58.lvAc19.style.opacity="1";lvAc58.lvAc18.style.backgroundColor=lvAc4[lvAc59].backgroundColorTitleSelected;lvAc58.lvAc18.style.color=lvAc4[lvAc59].textColorTitleSelected;lvAc58.lvAc18.style.borderColor=lvAc4[lvAc59].borderColorTitleSelected;},lvAc62);lvAc62+=50;lvAc58.lvAc18.setAttribute("lvAc25",true);}}
function lvAc63(){return{viewMode:'single',preSelectItem:true,backgroundColorTitle:"orange",borderColorTitle:"black",borderSizeTitle:"8px",textColorTitle:"black",fontSizeTitle:"2em",backgroundColorTitleHover:"gray",borderColorTitleHover:"black",textColorTitleHover:"white",borderTitleHasShadow:true,borderColorContent:"black",backgroundColorTitleSelected:"#f0f0f0",textColorTitleSelected:"black",borderColorTitleSelected:"white"};}