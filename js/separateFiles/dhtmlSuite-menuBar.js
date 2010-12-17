if(!window.DHTMLSuite)var DHTMLSuite=new Object();DHTMLSuite.menuBar=function(){var menuItemObj;var layoutCSS;var menuBarBackgroundImage;var menuItem_objects;var menuBarObj;var menuBarHeight;var menuItems;var highlightedItems;var menuBarState;var activeSubItemsOnMouseOver;var submenuGroups;var submenuIframes;var createIframesForOldIeBrowsers;var targetId;var menuItemCssPrefix;var cssPrefix;var menuItemLayoutCss;var objectIndex;this.cssPrefix='DHTMLSuite_';this.menuItemLayoutCss=false;this.layoutCSS='menu-bar.css';this.menuBarBackgroundImage='menu_strip_bg.jpg';this.menuItem_objects=new Object();DHTMLSuite.variableStorage.menuBar_highlightedItems=new Array();this.menuBarState=false;this.menuBarObj=false;this.menuBarHeight=26;this.submenuGroups=new Array();this.submenuIframes=new Array();this.targetId=false;this.activeSubItemsOnMouseOver=false;this.menuItemCssPrefix=false;this.createIframesForOldIeBrowsers=true;try{if(!standardObjectsCreated)DHTMLSuite.createStandardObjects()}catch(e){alert('Include the dhtmlSuite-common.js file')}
this.objectIndex=DHTMLSuite.variableStorage.arrayDSObjects.length;;DHTMLSuite.variableStorage.arrayDSObjects[this.objectIndex]=this}
DHTMLSuite.menuBar.prototype={init:function(){DHTMLSuite.commonObj.loadCSS(this.layoutCSS);this.__createMainMenuDiv();this.__createMenuItems();this.__setBasicEvents();window.refToThismenuBar=this},setTarget:function(idOfHTMLElement){this.targetId=idOfHTMLElement},setLayoutCss:function(nameOfNewCssFile){this.layoutCSS=nameOfNewCssFile},setMenuItemLayoutCss:function(nameOfNewCssFile){this.menuItemLayoutCss=nameOfNewCssFile},setCreateIframesForOldIeBrowsers:function(createIframesForOldIeBrowsers){this.createIframesForOldIeBrowsers=createIframesForOldIeBrowsers},addMenuItems:function(menuItemObj){this.menuItemObj=menuItemObj;this.menuItems=menuItemObj.getItems()},setActiveSubItemsOnMouseOver:function(activateSubOnMouseOver){this.activeSubItemsOnMouseOver=activateSubOnMouseOver},setMenuItemState:function(menuItemId,state){try{this.menuItem_objects[menuItemId].setState(state)}catch(e){alert('menu item with id '+menuItemId+' does not exists or you have called the setMenuItemState method before the menu has been initialized')}},setMenuItemCssPrefix:function(newCssPrefix){this.menuItemCssPrefix=newCssPrefix},setCssPrefix:function(newCssPrefix){this.cssPrefix=newCssPrefix},deleteAllMenuItems:function(){this.hideSubMenus();this.__deleteMenuItems(0,false);this.__clearAllMenuItems()},replaceMenuItems:function(idOfParentMenuItem,newMenuModel){this.hideSubMenus();this.__deleteMenuItems(idOfParentMenuItem);this.menuItemObj.__appendMenuModel(newMenuModel,idOfParentMenuItem);this.__clearAllMenuItems();this.__createMenuItems()},deleteMenuItems:function(idOfParentMenuItem,deleteParentElement){this.__deleteMenuItems(idOfParentMenuItem,deleteParentElement);this.__clearAllMenuItems();this.__createMenuItems()},appendMenuItems:function(idOfParentMenuItem,newMenuModel){this.hideSubMenus();this.menuItemObj.__appendMenuModel(newMenuModel,idOfParentMenuItem);this.__clearAllMenuItems();this.__createMenuItems()},hideMenuItem:function(menuItemId){this.menuItem_objects[menuItemId].hide()},showMenuItem:function(menuItemId){this.menuItem_objects[menuItemId].show()},setText:function(menuItemId,newText){this.menuItem_objects[menuItemId].setText(newText)},setIcon:function(menuItemId,newPath){this.menuItem_objects[menuItemId].setIcon(newPath)},__clearAllMenuItems:function(){for(var prop=0;prop<this.menuItemObj.menuItemsOrder.length;prop++){var id=this.menuItemObj.menuItemsOrder[prop];if(!id)continue;if(this.submenuGroups[id]){var div=document.getElementById(this.submenuGroups[id]);DHTMLSuite.discardElement(div);this.submenuGroups[id]=null}
if(this.submenuIframes[id]){var ref=document.getElementById(this.submenuIframes[id]);DHTMLSuite.discardElement(ref);this.submenuIframes[id]=null}}
this.submenuGroups=new Array();this.submenuIframes=new Array();this.menuBarObj.innerHTML=''},__deleteMenuItems:function(idOfParentMenuItem,includeParent){if(includeParent)this.menuItemObj.__deleteANode(idOfParentMenuItem);if(!this.submenuGroups[idOfParentMenuItem])return;this.menuItem_objects[idOfParentMenuItem].__setHasSub(false);this.menuItemObj.__deleteChildNodes(idOfParentMenuItem);var groupBox=document.getElementById(this.submenuGroups[idOfParentMenuItem]);DHTMLSuite.discardElement(groupBox);if(this.submenuIframes[idOfParentMenuItem]){DHTMLSuite.discardElement(this.submenuIframes[idOfParentMenuItem])}
this.submenuGroups.splice(idOfParentMenuItem,1);this.submenuIframes.splice(idOfParentMenuItem,1)},__changeMenuBarState:function(){var objectIndex=this.getAttribute('objectRef');var obj=DHTMLSuite.variableStorage.arrayDSObjects[objectIndex];var parentId=this.id.replace(/[^0-9]/gi,'');var state=obj.menuItem_objects[parentId].getState();if(state=='disabled')return;obj.menuBarState=!obj.menuBarState;if(!obj.menuBarState)obj.hideSubMenus();else{obj.hideSubMenus();setTimeout('DHTMLSuite.variableStorage.arrayDSObjects['+objectIndex+'].__expandGroup('+parentId+')',10)}},__createMainMenuDiv:function(){window.refTomenuBar=this;this.menuBarObj=document.createElement('DIV');this.menuBarObj.className=this.cssPrefix+'menuBar_'+this.menuItemObj.submenuType[1];if(!document.getElementById(this.targetId)){alert('No target defined for the menu object');return}
var target=document.getElementById(this.targetId);target.appendChild(this.menuBarObj)},hideSubMenus:function(e){if(this&&this.tagName){if(document.all)e=event;var srcEl=DHTMLSuite.commonObj.getSrcElement(e);if(srcEl.tagName.toLowerCase()=='img')srcEl=srcEl.parentNode;if(srcEl.className&&srcEl.className.indexOf('arrow')>=0){return}}
for(var no=0;no<DHTMLSuite.variableStorage.menuBar_highlightedItems.length;no++){if(DHTMLSuite.variableStorage.menuBar_highlightedItems[no].getState()!='disabled')DHTMLSuite.variableStorage.menuBar_highlightedItems[no].setState('regular');DHTMLSuite.variableStorage.menuBar_highlightedItems[no].__hideGroup()}
DHTMLSuite.variableStorage.menuBar_highlightedItems=new Array()},__hideSubMenusAfterSmallDelay:function(){var ind=this.objectIndex;setTimeout('DHTMLSuite.variableStorage.arrayDSObjects['+ind+'].hideSubMenus()',15)},__expandGroup:function(idOfParentMenuItem){var groupRef=document.getElementById(this.submenuGroups[idOfParentMenuItem]);var subDiv=groupRef.getElementsByTagName('DIV')[0];var numericId=subDiv.id.replace(/[^0-9]/g,'');groupRef.style.visibility='visible';if(this.submenuIframes[idOfParentMenuItem])document.getElementById(this.submenuIframes[idOfParentMenuItem]).style.visibility='visible';DHTMLSuite.variableStorage.menuBar_highlightedItems[DHTMLSuite.variableStorage.menuBar_highlightedItems.length]=this.menuItem_objects[numericId];this.__positionSubMenu(idOfParentMenuItem);if(DHTMLSuite.clientInfoObj.isOpera){var subDiv=groupRef.getElementsByTagName('DIV')[0];subDiv.className=subDiv.className.replace('_over','_over')}},__activateMenuElements:function(e,firstIteration,parentMenuItemObject){if(!parentMenuItemObject){if(document.all)e=event;parentMenuItemObject=DHTMLSuite.commonObj.getSrcElement(e);if(!parentMenuItemObject.getAttribute('DHTMLSuite_menuItem'))parentMenuItemObject=parentMenuItemObject.parentNode;if(!parentMenuItemObject.getAttribute('DHTMLSuite_menuItem'))parentMenuItemObject=parentMenuItemObject.parentNode}
var numericId=parentMenuItemObject.id.replace(/[^0-9]/g,'');var state=this.menuItem_objects[numericId].getState();if(state=='disabled')return;this.menuItem_objects[numericId].setState('over');if(!this.menuBarState&&!this.activeSubItemsOnMouseOver)return;if(firstIteration&&DHTMLSuite.variableStorage.menuBar_highlightedItems.length>0){this.hideSubMenus()}
var newState='over';if(!firstIteration)newState='active';this.menuItem_objects[numericId].setState(newState);if(this.submenuGroups[numericId]){this.__expandGroup(numericId)}
DHTMLSuite.variableStorage.menuBar_highlightedItems[DHTMLSuite.variableStorage.menuBar_highlightedItems.length]=this.menuItem_objects[numericId];if(this.menuItems[numericId].parentId){this.__activateMenuElements(false,false,document.getElementById(this.menuItem_objects[this.menuItems[numericId].parentId].divElement))}},__createMenuItems:function(){var index=this.objectIndex;var firstChild=false;var firstChilds=document.getElementsByTagName('DIV');if(firstChilds.length>0)firstChild=firstChilds[0]
for(var no=0;no<this.menuItemObj.menuItemsOrder.length;no++){var indexThis=this.menuItemObj.menuItemsOrder[no];if(!this.menuItems[indexThis].id)continue;try{this.menuItem_objects[this.menuItems[indexThis].id]=new DHTMLSuite.menuItem()}catch(e){alert('Error: Include dhtmlSuite-menuItem.js in your html file')}
if(this.menuItemCssPrefix)this.menuItem_objects[this.menuItems[indexThis].id].setCssPrefix(this.menuItemCssPrefix);if(this.menuItemLayoutCss)this.menuItem_objects[this.menuItems[indexThis].id].setLayoutCss(this.menuItemLayoutCss);var ref=this.menuItem_objects[this.menuItems[indexThis].id].createItem(this.menuItems[indexThis]);ref.setAttribute('DHTMLSuite_menuItem',1);if(!this.menuItems[indexThis].separator){ref.onmouseover=function(e){DHTMLSuite.variableStorage.arrayDSObjects[index].__activateMenuElements(e,true)}}
if(!this.menuItems[indexThis].jsFunction&&!this.menuItems[indexThis].url){ref.setAttribute('objectRef',index);ref.onclick=this.__changeMenuBarState}
DHTMLSuite.commonObj.__addEventEl(ref);if(this.menuItem_objects[this.menuItems[indexThis].id].expandElement&&1==2){try{var expandRef=document.getElementById(this.menuItem_objects[this.menuItems[indexThis].id].expandElement);var parentId=DHTMLSuite.variableStorage.arrayDSObjects[index].menuItems[indexThis].parentId+'';var tmpId=expandRef.id.replace(/[^0-9]/gi,'');expandRef.setAttribute('objectRef',index/1);expandRef.objectRef=index/1}catch(e){}}
var target=this.menuBarObj;if(this.menuItems[indexThis].depth==1&&this.menuItemObj.submenuType[this.menuItems[indexThis].depth]!='top'&&this.menuItemObj.mainMenuGroupWidth){var tmpWidth=this.menuItemObj.mainMenuGroupWidth+'';if(tmpWidth.indexOf('%')==-1)tmpWidth=tmpWidth+'px';target.style.width=tmpWidth}
if(this.menuItems[indexThis].depth=='1'){if(this.menuItemObj.submenuType[this.menuItems[indexThis].depth]=='top'){ref.style.styleFloat='left';ref.style.cssText='float:left'}}else{if(!this.menuItems[indexThis].depth){alert('Error in menu model(depth not defined for a menu item). Remember to call the init()method for the menuModel object.');return}
if(!this.submenuGroups[this.menuItems[indexThis].parentId]){this.submenuGroups[this.menuItems[indexThis].parentId]='DHTMLSuite_menuBarSubGroup'+this.menuItems[indexThis].parentId;var div=document.createElement('DIV');div.style.zIndex=30000;div.style.position='absolute';div.id=this.submenuGroups[this.menuItems[indexThis].parentId];div.style.visibility='hidden';div.className=this.cssPrefix+'menuBar_'+this.menuItemObj.submenuType[this.menuItems[indexThis].depth];if(firstChild){firstChild.parentNode.insertBefore(div,firstChild)}else{document.body.appendChild(div)}
if(DHTMLSuite.clientInfoObj.isMSIE&&this.createIframesForOldIeBrowsers){this.submenuIframes[this.menuItems[indexThis].parentId]='DHTMLSuite_menuBarIframe_'+this.menuItems[indexThis].parentId;var iframe=document.createElement('<IFRAME src="about:blank" frameborder=0>');iframe.id=this.submenuIframes[this.menuItems[indexThis].parentId];iframe.style.position='absolute';iframe.style.zIndex=9000;iframe.style.visibility='hidden';if(firstChild){firstChild.parentNode.insertBefore(iframe,firstChild)}else{document.body.appendChild(iframe)}}}
target=document.getElementById(this.submenuGroups[this.menuItems[indexThis].parentId])}
target.appendChild(ref);if(this.menuItems[indexThis].visible==false)this.hideMenuItem(this.menuItems[indexThis].id);if(this.menuItems[indexThis].state!='regular')this.menuItem_objects[this.menuItems[indexThis].id].setState(this.menuItems[indexThis].state)}
this.__setSizeOfAllSubMenus();this.__positionAllSubMenus();if(DHTMLSuite.clientInfoObj.isOpera)this.__fixMenuLayoutForOperaBrowser()},__fixMenuLayoutForOperaBrowser:function(){for(var no=0;no<this.menuItemObj.menuItemsOrder.length;no++){var id=this.menuItemObj.menuItemsOrder[no];if(!id)continue;document.getElementById(this.menuItem_objects[id].divElement).className=document.getElementById(this.menuItem_objects[id].divElement).className.replace('_regular','_regular')}},__setSizeOfAllSubMenus:function(){for(var no=0;no<this.menuItemObj.menuItemsOrder.length;no++){var prop=this.menuItemObj.menuItemsOrder[no];if(!prop)continue;this.__setSizeOfSubMenus(prop)}},__positionAllSubMenus:function(){for(var no=0;no<this.menuItemObj.menuItemsOrder.length;no++){var prop=this.menuItemObj.menuItemsOrder[no];if(!prop)continue;if(this.submenuGroups[prop])this.__positionSubMenu(prop)}},__positionSubMenu:function(parentId){try{var shortRef=document.getElementById(this.submenuGroups[parentId]);var depth=this.menuItems[parentId].depth;var dir=this.menuItemObj.submenuType[depth];var ref=document.getElementById(this.menuItem_objects[parentId].divElement);if(dir=='top'){shortRef.style.left=DHTMLSuite.commonObj.getLeftPos(ref)+'px';shortRef.style.top=(DHTMLSuite.commonObj.getTopPos(ref)+ref.offsetHeight)+'px'}else{shortRef.style.left=(DHTMLSuite.commonObj.getLeftPos(ref)+ref.offsetWidth)+'px';shortRef.style.top=(DHTMLSuite.commonObj.getTopPos(ref))+'px'}
if(DHTMLSuite.clientInfoObj.isMSIE){var iframeRef=document.getElementById(this.submenuIframes[parentId]);iframeRef.style.left=shortRef.style.left;iframeRef.style.top=shortRef.style.top;iframeRef.style.width=shortRef.clientWidth+'px';iframeRef.style.height=shortRef.clientHeight+'px'}}catch(e){}},__setSizeOfSubMenus:function(parentId){try{var shortRef=document.getElementById(this.submenuGroups[parentId]);var subWidth=Math.max(shortRef.offsetWidth,document.getElementById(this.menuItem_objects[parentId].divElement).offsetWidth);if(this.menuItems[parentId].submenuWidth)subWidth=this.menuItems[parentId].submenuWidth;if(subWidth>400)subWidth=150;subWidth=subWidth+'';if(subWidth.indexOf('%')==-1)subWidth=subWidth+'px';shortRef.style.width=subWidth;if(DHTMLSuite.clientInfoObj.isMSIE){var ref=document.getElementById(this.submenuIframes[parentId]);ref.style.width=shortRef.style.width;ref.style.height=shortRef.style.height}}catch(e){}},__repositionMenu:function(inputObj){inputObj.menuBarObj.style.top=document.documentElement.scrollTop+'px'},__menuItemRollOver:function(menuItemHTMLElementRef){var numericId=menuItemHTMLElementRef.id.replace(/[^0-9]/g,'');menuItemHTMLElementRef.className='DHTMLSuite_menuBar_menuItem_over_'+this.menuItems[numericId]['depth']},__menuItemRollOut:function(menuItemHTMLElementRef){var numericId=menuItemHTMLElementRef.id.replace(/[^0-9]/g,'');menuItemHTMLElementRef.className='DHTMLSuite_menuBar_menuItem_'+this.menuItems[numericId]['depth']},__menuNavigate:function(menuItemHTMLElementRef){var numericIndex=menuItemHTMLElementRef.id.replace(/[^0-9]/g,'');var url=this.menuItems[numericIndex]['url'];if(!url)return},__setBasicEvents:function(){var ind=this.objectIndex;DHTMLSuite.commonObj.addEvent(document.documentElement,"click",this.hideSubMenus);DHTMLSuite.commonObj.addEvent(document.documentElement,"mouseup",this.hideSubMenus)}}