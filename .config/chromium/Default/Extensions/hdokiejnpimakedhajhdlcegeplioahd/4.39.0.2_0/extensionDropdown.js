ExtensionDropdown=function(a){var c=$(a.body),n=a.getElementById("items"),s=a.getElementById("searchResults"),r=a.getElementById("recentSites"),i=a.getElementById("favoriteSites"),l=a.getElementById("identitiesMenuItem"),o=a.getElementById("matchingSitesTopLevel"),t=a.getElementById("matchingSites"),d=a.getElementById("addCustomItems"),u=$("#panelContainer"),p=$("#topLevelContainer"),g=$("#allMatchingSitesMenuItem"),e=a.getElementById("allMatchingSitesItems"),m=$("#vaultMenuItem"),f=$("#addOmariaItems"),b=$("#allItems"),v=$("#groupLabel"),h=$("#backButton"),P=$("#debugconsole"),I=$("#wifiExportMenuItem"),y=$("#matchingSitesMenuItem"),L=$("#recentSitesMenuItem"),E=$("#favoriteSitesMenuItem"),_=$(".new"),S=$("#container"),C=$("#innerWrapper"),T=$("#searchInput"),x=$("#applicationsMenuItem"),w=$("#logoContainer"),k=$("#logoPartner"),M=null,D=!1,A=null,F=null,O=null,B=null,N=null,R=365,V=function(){var e=u.is(":visible")&&u.outerHeight()>C.outerHeight()?u.outerHeight():C.outerHeight()<R?R:C.outerHeight(),t=u.is(":visible")?u.outerWidth()+C.outerWidth():C.outerWidth();LPPlatform.setDropdownPopoverSize(e,t)},H=null,z=null,U=null,K=null,G=null,W=null,Y=null,j=null,Z=null,X=null,q=null,Q=null,J=null,ee=!1,te=!1,ne=!1,ie=!1,oe=!1,ae={},se=null,re={},le=[],ce={},de=function(e){if(v.empty(),e){var t=e.getName(),n=(t=t.replace(/\\/g," \\ ")).indexOf("\\",t.length/2);if(-1===n&&(n=t.lastIndexOf("\\")),0<n){var i=LPTools.createElement("div","textOverflowContainer groupLabel");i.appendChild(LPTools.createElement("span",null,t.substring(0,n))),v.append(LPTools.createElement("span","textTail"," "+t.substring(n))),v.append(i),LPTools.setupMiddleEllipsis(v)}else v.append(LPTools.createElement("span","groupLabel",t));v.find(".groupLabel").attr("title",e.toString())}},ue,pe;ce.GroupState=function(t){var n=LPTools.getNavIndex();this.pop=function(e){t.rebuildItems(null,e),e&&LPTools.setNavIndex(n),de(t._model)}},ce.SearchState=function(){var e=new ce.CSSState("searchItem",{restoreKeyboardNav:!1});this.pop=function(){Ae(),e.pop()}},ce.TopLevelMatchingSitesState=function(e){var t=new ce.CSSState("matchingSites"),n=new ce.GroupState(e);this.pop=function(){n.pop(),t.pop()}},ce.CSSState=(ue=c.attr("class"),pe=function(e){c.removeClass(ue),c.addClass(e),ue=e},function(e,t){var n=ue;if(pe(e),LPTools.getOption(t,"applyKeyboardNav",!0)){var i=LPTools.getOption(t,"selectFirst",!1);LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible"),{selectFirst:i})}this.pop=function(){de(null),pe(n),LPTools.getOption(t,"restoreKeyboardNav",!0)&&LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible"),{displayItems:0===le.length&&J?J.getItems():null}),t&&"function"==typeof t.onPop&&t.onPop()}});var ge=function(){LPTools.parseUserSpecificMenu(a.getElementById("mainMenu"),LPProxy.getAccountClass()),LPProxy.isEnterpriseUser()&&$("#specialOfferMenuItem").hide(),$("#username, #optionsMenuUserName, #optionsViewUserName").text(bg.get("g_username"))},me=function(){$("#container").LP_show(),he();var t=bg.get("LPContentScriptFeatures").ziggy,n=bg.get("LPContentScriptFeatures").omaria,i=bg.get("LPContentScriptFeatures").site_feedback&&!(bg.get("g_isedge")||bg.get("g_issafari_appext")),o=bg.get("LPContentScriptFeatures").site_feedback_new_badge&&i,a=bg.get("LPContentScriptFeatures").secondary_onboarding_old_design_incentive||bg.get("LPContentScriptFeatures").secondary_onboarding_new_design_incentive;ExtensionLicenseExpiration.initialize(),"Enterprise Admin"!==(N=LPProxy.getAccountClass())&&"Teams Admin"!==N||c.addClass("admin"),A=bg.get("g_premium_trial_exp_days"),F=bg.get("g_company_trial_exp_days"),O=bg.get("g_company_license_exp_days"),B=bg.get("g_company_renewalstatus"),M={isZiggySet:t,isOmarSet:n,showHelpText:t};var e=function(){if(fe(),Te(),n||L.detach().insertBefore("#toolsMenuItem"),Me(M),ge(t),setTimeout(function(){Pe()}),et(),i?o&&!bg.Preferences.get("hasClickedSiteFeedback")&&(_.css("display","flex"),_.append(LPTools.createElement("div",{class:"badge newBadge"},Strings.translateString("NEW")))):$("#siteFeedbackMenuItem").detach(),a){var e=LPTools.createElement("div","badge premiumIncentiveBadge");e.appendChild(LPTools.createElement("img",{src:"images/vault_4.0/gift-box.png",class:"premiumIncentiveImage"})),e.appendChild(LPTools.createElement("div",{class:"premiumIncentiveBadgeText"},Strings.translateString("+30 day Premium"))),$("#vaultMenuItem").append(e)}t||($("#mainMenu").addClass("showIcons"),be()),bg.sendLpImprove("openicondropdown")},s=LPPlatform.getExtensionDropdownDelay();0<=s?setTimeout(e,s):e();var r=bg.getmatchingsites(!1,!0,!1);if(LPFeatures.allowGift()&&(void 0===r||r.length<3)){var l=$("#specialOfferMenuItem");l.show(),l.bind("click",function(){bg.sendLpImprove("lpgift_ad_clicked"),bg.openURL(LPProxy.getBaseURL()+"gift.php")})}},fe=function(){S.addClass("loading")},be=function(){ExtensionLicenseExpiration.expiredCompanyStatusCheckerForPanelSize()||ExtensionLicenseExpiration.expiredPremiumStatusCheckerForPanelSize()?ve():bg.get("g_show_original_language_changed_notification")?u.load("extensionLanguageUpdate.html",function(){ExtensionLanguageUpdate.initialize(),ve()}):0<bg.get("LPContentScriptFeatures").consumer_test_experiment?u.load("extensionPremiumUpgrade.html",function(){ExtensionPremiumUpgrade.initialize(bg.get("LPContentScriptFeatures").consumer_test_experiment),ve()}):ve()},ve=function(){S.addClass("initialized"),LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible"),{displayItems:J?J.getItems():null}),T.focus(),V()},he=function(){LPFeatures.updateFeatures({import:!0,noexport:!1,show_notes:!0,hideidentities:!1,show_formfills:!0})},Pe=function(){if(LPProxy.initializeModel(),xe(M),ye(M),V(),!te&&-1<bg.get("g_local_accts_version")){for(var e in te=!0,S.removeClass("loading"),re)re[e]();var t=T.val();t&&Fe(t)}else setTimeout(Pe,15)},Ie=function(e,t){var t=t||{};return LPProxy.getPreference("showAcctsInGroups",!0)&&(e=LPProxy.assignItemsToGroups(e,!1),t.separateFavorites=!0),new Container(e,t)},ye=function(e){e.isOmarSet?((U=new Container(LPProxy.getAllItems(),$.extend({},e,{omarItems:!0,trackAction:!0}))).setElement(n),q=new Container(LPProxy.getCustomNoteTemplates().map(function(e){return new AddCustomItemDisplay(e)}),$.extend({},e,{additionalItemClasses:"addOmariaItem",autoExpandSingleItem:!1,value:"Custom"})),_e(q.getItemCount()),Se()):((K=Ie(LPProxy.getSites(),e)).setElement(n),(W=Ie(LPProxy.getNotes(),e)).setElement(n),(Y=new Container(LPProxy.getFormFills(),e)).setElement(n),(j=new Container(LPProxy.getApplications(),e)).setElement(n)),ExtensionLicenseExpiration.premiumTrialExpiringStatusChecker()||ExtensionLicenseExpiration.premiumTrialExpiredStatusChecker()?ExtensionLicenseExpiration.showExpiration(N,"trial",A):ExtensionLicenseExpiration.companyTrialExpiringStatusChecker()||ExtensionLicenseExpiration.companyTrialExpiredStatusChecker()?ExtensionLicenseExpiration.showExpiration(N,"trial",F):(ExtensionLicenseExpiration.companyLicenseExpiredStatusChecker()||ExtensionLicenseExpiration.companyLicenseExpiringStatusChecker())&&ExtensionLicenseExpiration.showExpiration(N,"normal",O,B),X=new Container(LPProxy.getAllItems(),$.extend({},e,{moreOptionsState:ce.SearchState,moreOptionsCallback:V})),"Enterprise Admin"===N||"Enterprise Role User"===N||"Teams Admin"===N||"Teams Role User"===N?($(".feature-omaria #optionsViewLogoutMenuItem, .feature-omaria #optionsMenuItemEnt").show(),$(".feature-omaria #logoutMenuItem, .feature-omaria #optionsMenuItem").hide()):($(".feature-omaria #optionsViewLogoutMenuItem, .feature-omaria #optionsMenuItemEnt").hide(),$(".feature-omaria #logoutMenuItem, .feature-omaria #optionsMenuItem").show())},Le=function(e){var t=["extensionMenuItem","omariaMenuItem"];e&&e.attrs&&e.attrs.class&&(t=t.concat(e.attrs.class));var n=$.extend({},e.attrs,{class:t}),i=LPTools.createElement("li",n);return i.appendChild(LPTools.createElement("i",e.icon+" menuIcon")),i.appendChild(LPTools.createElement("span","name",e.name)),e.addMoreButton&&i.appendChild(LPTools.createElement("div","more")),n.childView&&$(i).bind("click",ot),e.onClick&&$(i).bind("click",e.onClick),i},Ee=function(e,t){switch(t&&U.applyFilter({showEmptyGroups:!1,func:function(e){return e instanceof GroupDisplay||e.getRecordType()===t}}),U.rebuildItems(n,!e.originalEvent.isTrusted),t){case"Account":Qe(U,"Empty_Site_Omaria",Strings.translateString("You can save and fill usernames and passwords for any website or app."),Strings.translateString("Add a password"),t);break;case"Generic":Qe(U,"Empty_Note_Omaria",Strings.translateString("Use a secure note to save important documents in your LastPass vault."),Strings.translateString("Add a secure note"),t);break;case"Address":Qe(U,"Empty_Address_Omaria",Strings.translateString("Add an address to auto-fill your email, phone number, and other contact info."),Strings.translateString("Add an address"),t);break;case"Credit Card":Qe(U,"Empty_Credit_Card_Omaria",Strings.translateString("Next time you go shopping, they'll be waiting!"),Strings.translateString("Add a payment card"),t);break;case"Bank Account":Qe(U,"Empty_Bank_Account_Omaria",Strings.translateString("Save and fill your bank accounts securely on any device with LastPass."),Strings.translateString("Add a bank account"),t)}},_e=function(s){var r=LPProxy.getRecordConfig(),l=LPProxy.getAllModelTypes();f.empty(),$("#addItem").addClass("divider"),b.empty(),r.viewConfig.forEach(function(e){if(e.forEach(function(e){if("all"!==e){var a=LPProxy.getConfigViewObject(e);a.types.forEach(function(e){var t=LPProxy.getConfigTypeObject(e),n=bg.get("g_prefoverrides").noformfill?bg.get("g_prefoverrides").noformfill:[],i=LPProxy.getAllModelTypes().includes(t.recordType);if("cloud-apps"!==e&&"CloudApps"!==e&&(i||"Password"===e||!n.includes("0")&&!n.includes(t.enterprisePolicyId))){(a.default||l.includes(t.recordType))&&b.append(Le({attrs:{class:"omariaItem",childView:"omariaItems"},name:Strings.translateString(a.name),icon:r.icons[t.id],addMoreButton:!0,onClick:function(e){Ee(e,t.recordType)}}));var n=bg.get("g_prefoverrides").noformfill?bg.get("g_prefoverrides").noformfill:[];if("Password"===t.id||!n.includes("0")&&!n.includes(t.enterprisePolicyId)){var o=null;t.recordType===r.TYPE.Custom?0<s&&(o=Le({attrs:{class:"addOmariaItem",childView:"addCustomItems"},name:Strings.translateString(t.name),icon:r.icons[t.id],addMoreButton:!0,onClick:function(e){q.rebuildItems(d,!e.originalEvent.isTrusted)}})):o=Le({attrs:{class:"addOmariaItem"},name:Strings.translateString(t.name),icon:r.icons[t.id],onClick:function(){Ce(t.recordType)}}),o&&f.append(o)}}})}}),e!==r.viewConfig[0]){if(!b[0].lastChild.classList.contains("omarSpacer")){var t=LPTools.createElement("li","omarSpacer");b.append(t)}var n=LPTools.createElement("li","omarSpacer");f.children().last().hasClass("omarSpacer")||f.append(n)}});var e=LPTools.createElement("li",{class:"extensionMenuItem addOmariaItem",value:"saveAll"},Strings.translateString("Save All Entered Data"));f.append(e),$('.addOmariaItem[value="saveAll"]').bind("click",function(){bg.lpevent("m_saed"),bg.get_selected_tab_data(null,function(e){bg.sendLpImprove("save_all_entered_data",{domain:bg.lp_gettld_url(e.url)})}),bg.saveall()})},Se=function(){var e=U.getItemChildren(),t=[];e.forEach(function(e){e._model.isFavorite()&&t.push(e._model.newDisplayObject())}),0<t.length?(E.show(),$("#omarFavoritesMenuItem").show(),c.removeClass("noFavorites")):($("#omarFavoritesMenuItem").hide(),c.addClass("noFavorites"),E.hide())},Ce=function(e){bg.lpevent("m_add"),"Account"===e?bg.get_selected_tab_data_no_extension(null,function(e){ze({defaultData:{url:e?e.url:""}})}):Ue({defaultData:{notetype:e}})},Te=function(){P.LP_removeAttr("style"),I.LP_removeAttr("style"),x.LP_removeAttr("style"),bg.is_user_debug_enabled()&&P.show(),bg.have_binary()&&bg.LPPlatform.isWin()&&I.show(),LPTools.hasProperties(bg.get("g_applications"))&&x.show(),LPFeatures.allowNotes()?$("#notesMenuItem").show():$("#notesMenuItem").hide()},xe=function(e){if(e.isOmarSet&&(l=a.getElementById("omarIdentitiesMenuItem")),z=LPProxy.getIdentities(),LPProxy.enableCurrentIdentity(z),0<z.length){Be(H);for(var t=[],n=0,i=z.length;n<i;++n)t.push(z[n].newDisplayObject());var o;new IdentityContainer(t,e).initialize(a.getElementById("identities"))}else $(l).hide()},we=function(e){return!0===ae[e]},ke=function(e,t){var n=function(e){var t=bg.lpmdec(e.extra,!0),n=/Language:(.+)/.exec(t);return n&&1<n.length?n[1].substr(0,2):"en"},i=[],o=[],a,s;for(a=0,s=se.length;a<s;++a){var r=LPProxy.getNoteModel(se[a].aid);if(r){var l=n(r._data);-1===o.indexOf(l)&&o.push(l)}}for(a=0,s=se.length;a<s;++a){var c=se[a].aid;if("account"===se[a].type)i.push(new MatchingAccountDisplay(LPProxy.getSiteModel(c)));else if("note"===se[a].type){var d=LPProxy.getNoteModel(c);i.push(new MatchingNoteDisplay(d,1<o.length?n(d._data):null))}}(J=new Container(i,t)).setElement(e),J.rebuildItems(),V()},Me=function(e){for(var t=0,n=(se=bg.getmatchingsites(!1,!0,!1)).length;t<n;++t)ae[se[t].aid]=!0;var i;e.isZiggySet||LPProxy.getPreference("toplevelmatchingsites",!1)?(c.addClass("matchingSitesIsVisible"),m.addClass("divider"),p.removeClass("hidden"),2<se.length?(m.addClass("topLevelMatchesShadow"),$("#allMatchingSiteCounter").text(se.length),g.removeClass("hidden")):(m.removeClass("topLevelMatchesShadow"),0===se.length&&(m.removeClass("divider"),c.removeClass("matchingSitesIsVisible"),p.addClass("hidden"),g.addClass("hidden"))),Ne("topLevelMatchingSites",function(){ke(o,$.extend({},e,{autoExpandSingleItem:!1,moreOptionsElement:a.getElementById("matchingSites"),moreOptionsState:ce.TopLevelMatchingSitesState,addLastClass:!1,trackAction:!0,sortFunction:VaultItemBaseDisplay.prototype.sortOmarMatchingItems})),be()})()):(0===se.length?y.LP_removeAttr("style"):(y.show(),$("#matchingSiteCounter").text(se.length)),m.removeClass("divider"),m.removeClass("topLevelMatchesShadow"),c.removeClass("matchingSitesIsVisible"),p.addClass("hidden"))},$e=function(){var e=bg.getClearRecentTime(),t=bg.Preferences.get("recentUsedCount"),n=null;(n=bg.get("LPContentScriptFeatures").omaria?U.getItemChildren():K.getItemChildren().concat(W.getItemChildren())).sort(VaultItemBaseDisplay.prototype.sortByMostRecent);for(var i=[],o=0,a=n.length;o<a&&o<t;++o){var s=n[o];s.getLastTouchValue()>=e&&i.push(s._model.newDisplayObject())}0<i.length?(Q=new Container(i,$.extend({},M,{sortFunction:VaultItemBaseDisplay.prototype.sortByMostRecent,separateFavorites:!1}))).initialize(r):Ge(r)},De=function(){var e=U.getItemChildren(),t;t=[],e.forEach(function(e){e._model.isFavorite()&&t.push(e._model.newDisplayObject())}),0<t.length?(G=new Container(t,M,{sortFunction:VaultItemBaseDisplay.prototype.sortByNameAsc})).initialize(i):Ge(i)},Ae=function(){LPTools.removeDOMChildren(s);for(var e=0,t=Z.length;e<t;++e){var n=Z[e],i=n.build(M);n.postBuild(i),s.appendChild(i)}if(0===Z.length){var o=LPTools.buildEmptyPlaceholder(Strings.translateString("No Matching Results"),"extensionSearchPlaceholder",s);s.appendChild(o)}LPTools.addKeyBoardNavigation(s.children,{rightArrowSelector:".moreItem",selectFirst:!0,displayItems:Z}),V()},Fe=(Oe=null,function(e){0<e.length?(te&&(Z&&Z.forEach(function(e){e.hideInContextOptions()}),Z=X.getSearchResultItems(e),Ae()),ee||(We("search",{applyKeyboardNav:!1,onPop:function(){T.val("")}}),ee=!0,bg.sendLpImprove("search",{source:"icon"}))):Oe&&0<Oe.length&&(Ye(),ee=!1),Oe=e,V()}),Oe,Be=function(e){var t=Strings.translateString("Identities")+" ("+e.getName()+")",n=l.firstChild;3!==n.nodeType?(n=a.createTextNode(t),l.insertBefore(n,l.firstChild)):n.textContent=t},Ne=function(i,o){return function(){var e=this,t=arguments,n=function(){o.apply(e,t)};te?n():re[i]=n}},Re=function(e){e&&(e.stopPropagation(),e.preventDefault())},Ve=function(e){for(var t=null;null!==e&&null===(t=e.getAttribute("childview"));)e=e.parentElement;return t},He=function(e){return(e=e||{}).saveOptions={source:"icon"},e},ze=function(e){bg.LPPlatform.openTabDialog("site",He(e))},Ue=function(e){bg.LPPlatform.openTabDialog("note",He(e))},Ke=function(e){bg.LPPlatform.openTabDialog("formFill",He(e))},Ge=function(e){e.appendChild(LPTools.createElement("li","extensionMenuItem none",bg.gs("None Available")))},We=function(e,t){le.push(new ce.CSSState(e,t)),V()},Ye=function(e){var t=le.pop();t&&t.pop(e),V()},je=dialogs.generatePassword,Ze=function(){je.getDialog().close(),h.unbind("click",Ze)},Xe=null,qe=function(){!0===bg.get("LPContentScriptFeatures").better_generate_password_enabled&&(je=dialogs.betterGeneratePassword),je.open({preSetup:function(e){if(null===Xe){var t=je.parentElementID,n=e.options.hideHeader,i=e.dynamicHeight;Xe=function(){je.parentElementID=t,e.options.hideHeader=n,e.useDynamicHeignt(i)}}je.parentElementID="extensionDropdownGeneratePassword",e.options.hideHeader=!0,e.useDynamicHeignt(!1)},postSetup:function(){V()},onClose:function(){Ye()},onCopy:function(){LPPlatform.closePopup(!0)},saveOptions:{source:"icon"}}),h.unbind("click",Ze),h.bind("click",Ze)},Qe=function(e,t,n,i,o){if(o=o||"Generic",e.isEmpty()){var a=LPTools.createElement("div","emptyView");a.appendChild(LPTools.createElement("img",{src:"images/vault_4.0/"+t+".png",class:"emptyViewIcon"})),a.appendChild(LPTools.createElement("h1","emptyViewText",n));var s=LPTools.createElement("input",{class:"addItem rbtn",type:"button",value:i,tabindex:-1});s.appendChild(LPTools.createElement("i","fa fa-trash")),a.appendChild(s),s.addEventListener("click",function(e){Ce(o)}),LPTools.addKeyBoardNavigation($(s),{selectFirst:!0}),document.getElementById("items").appendChild(a)}},Je=function(e,t,n){if(e.isEmpty()){var i=LPTools.createElement("div","emptyView");i.appendChild(LPTools.createElement("img",{src:"images/vault_4.0/"+t,class:"emptyViewIcon"})),i.appendChild(LPTools.createElement("h1","emptyViewText",n)),document.getElementById("items").appendChild(i)}},et=function(){bg.LPPartner&&bg.LPPartner.getPartnerInfo&&bg.LPPartner.getPartnerInfo(function(e){e&&($(s).addClass("partner-logo"),k.attr("src",e.logoUrl).removeClass(e.class).addClass(e.class),w.show(),c.addClass("partner"),V())})},tt=dialogs.siteFeedback,nt=function(){tt.getDialog().resetPage(),tt.getDialog().close(),h.unbind("click",nt),h.bind("click",Ye)},it=function(){tt.open({preSetup:function(e){tt.parentElementID="siteFeedback",e.options.hideHeader=!0,e.useDynamicHeignt(!1)},postSetup:function(){V()},onClose:function(){Ye()}}),h.unbind("click",Ye),h.bind("click",nt)};T.LP_addSearchHandlers("inputDialog",function(e){Fe(e)}),h.bind("click",Ye);var ot=function(e){We(Ve(e.target),{selectFirst:!e.originalEvent.isTrusted}),Re(e)};$("[childview]").bind("click",ot),$("#addSite").bind("click",function(e){bg.get_selected_tab_data_no_extension(null,function(e){bg.lpevent("m_add"),ze({defaultData:{url:e?e.url:""}}),LPPlatform.closePopup()}),e.stopPropagation()}),$("#saveAllEnteredData").bind("click",function(){bg.lpevent("m_saed"),bg.get_selected_tab_data(null,function(e){bg.sendLpImprove("save_all_entered_data")}),bg.saveall()}),$("#addNote").bind("click",function(){bg.lpevent("m_addn"),Ue()}),$("#addFormFill").bind("click",function(){bg.lpevent("m_af"),Ke()}),$("#addCreditCard").bind("click",function(){bg.lpevent("m_af"),Ke({defaultData:{profiletype:FormFill.prototype.FORM_FILL_TYPE_CREDIT_CARD}})}),$("#clearForms").bind("click",function(){bg.lpevent("m_clrf"),bg.clearforms("icon")}),$("#siteFeedbackMenuItem").bind("click",function(){bg.Preferences.set("hasClickedSiteFeedback",!0);var e=$.extend({Item:"Site Feedback"});bg.LPModule.callService("Segment","sendTypedEvent",["ExtensionMenuItemClicked",e],function(e){e&&console.error(e)})});var at=function(){var e=$.extend({Item:"Account Options"});bg.LPModule.callService("Segment","sendTypedEvent",["ExtensionMenuItemClicked",e],function(e){e&&console.error(e)})};$("#optionsMenuItem").bind("click",function(){at()}),$("#optionsMenuItemEnt").bind("click",function(){at()});var st=null,rt,lt,ct,dt;$("#chooseProfile").bind("click",function(){dialogs.chooseProfile.open({preSetup:function(e){if(null===st){var t=dialogs.chooseProfile.parentElementID,n=e.options.hideHeader;st=function(){dialogs.chooseProfile.parentElementID=t,e.options.hideHeader=n,e.$element.css("min-height","")}}e.$element.css("min-height",0),dialogs.chooseProfile.parentElementID="chooseProfileCreditCard",e.options.hideHeader=!0},onClose:function(){Ye()},saveOptions:{source:"icon"}})}),$("#vaultMenuItem").bind("click",function(){bg.lpevent("m_ov"),bg.openvault()}),$("#sitesMenuItem").bind("click",Ne("sites",function(e){K.rebuildItems(n,!e.originalEvent.isTrusted),Je(K,"Empty_Site.png",Strings.translateString("Remember every password"))})),$("#formFillsMenuItem").bind("click",Ne("formFills",function(e){Y.rebuildItems(n,!e.originalEvent.isTrusted),Je(Y,"Empty_Form.png",Strings.translateString("Fill Every Form"))})),$("#applicationsMenuItem").bind("click",Ne("applications",function(e){j.rebuildItems(n,!e.originalEvent.isTrusted),Je(j,"Empty_Site.png",Strings.translateString("Remember every password"))})),$("#generateMenuItem").bind("click",qe),$("#notesMenuItem").bind("click",Ne("notes",function(e){W.rebuildItems(n,!e.originalEvent.isTrusted),Je(W,"Empty_Note.png",Strings.translateString("Store Every Note"))})),$("#clearMostRecent").bind("click",function(){bg.clearrecent(),LPTools.removeDOMChildren(r),Ge(r)}),$("#siteFeedbackMenuItem").bind("click",it);var ut=Ne("mostRecent",function(e){ne||($e(),ne=!0),LPTools.addKeyBoardNavigation(r.children,{rightArrowSelector:".moreItem",selectFirst:!e.originalEvent.isTrusted,displayItems:Q?Q.getItems():null})});L.bind("click",ut);var pt=Ne("sites",function(e){bg.get("LPContentScriptFeatures").omaria&&!oe&&(De(),oe=!0,LPTools.addKeyBoardNavigation(i.children,{rightArrowSelector:".moreItem",selectFirst:!e.originalEvent.isTrusted,displayItems:G?G.getItems():null}))});E.bind("click",pt);var gt=Ne("matchingSites",function(e){ie||(ke(t,M),ie=!0),LPTools.addKeyBoardNavigation(a.getElementById("matchingSites").children,{rightArrowSelector:".moreItem",selectFirst:!e.originalEvent.isTrusted})});y.bind("click",gt),g.bind("click",gt),$("#prefMenuItem").bind("click",function(){bg.lpevent("m_op"),bg.openprefs()}),$("#helpMenuItem").bind("click",function(){bg.lpevent("m_oh"),bg.openhelp()}),$("#adminConsoleMenuItem").bind("click",function(){bg.lpevent("m_oec"),bg.openentconsole()}),$("#logoutMenuItem, #optionsViewLogoutMenuItem").bind("click",function(){bg.sendLpImprove("logout_clicked",{source:"icon"}),bg.lpevent("m_lo"),bg.loggedOut(!1,"menu")}),$("#challengeMenuItem").bind("click",function(){bg.lpevent("m_sec"),bg.openseccheck()}),$("#favoritesMenuItem").bind("click",function(){bg.lpevent("m_of"),bg.openfavorites(!1,"icon")}),$("#aboutMenuItem").bind("click",function(){bg.lpevent("m_abt"),bg.openabout()}),P.bind("click",function(){bg.lpevent("m_dbgcon"),bg.opendebugtab()}),$("#csvExportMenuItem").bind("click",function(){bg.lpevent("m_e"),bg.openexport()}),$("#formFillExportMenuItem").bind("click",function(){bg.lpevent("m_eff"),bg.formfillexport()}),$("#encryptedExportMenuItem").bind("click",function(){bg.lpevent("m_elp"),bg.openlastpassexport()}),I.bind("click",function(){bg.lpevent("m_ewlan"),bg.wlanexport()}),$("#printSitesMenuItem").bind("click",function(){bg.lpevent("m_p"),bg.openprint(!1)}),$("#printNotesMenuItem").bind("click",function(){bg.lpevent("m_pn"),bg.openprint(!0)}),$("#refreshMenuItem").bind("click",function(){bg.lpevent("m_ref"),LPProxy.refreshSites()}),$("#clearCachMenuItem").bind("click",function(){bg.lpevent("m_cl"),bg.clearCache(!1,!0,!1)}),$("#myAccountMenuItem").bind("click",function(){bg.lpevent("m_mya"),bg.openmyaccount()}),$("#sessionsMenuItem").bind("click",function(){bg.lpevent("m_ses"),bg.opensessions()}),$(".extensionMenuItem").bind("click",function(){V()}),LPPlatform.addEventListener(window,"unload",function(){bt()}),c.on("click",".extensionMenuItem, .footer, .contextOptionsDropdown",function(){LPPlatform.closePopup()}),$("#omarChallengeMenuItem").bind("click",function(){bg.lpevent("m_sec"),bg.openseccheck()}),$("#omarFavoritesMenuItem").bind("click",function(){bg.lpevent("m_of"),bg.openfavorites(!1,"icon")}),$("#omarPrefMenuItem").bind("click",function(){bg.lpevent("m_op"),bg.openprefs()}),$("#omarHelpMenuItem").bind("click",function(){bg.lpevent("m_oh"),bg.openhelp()}),$("#omarAboutMenuItem").bind("click",function(){bg.lpevent("m_abt"),bg.openabout()}),$("#omarRefreshMenuItem").bind("click",function(){bg.lpevent("m_ref"),LPProxy.refreshSites()}),$("#omarClearCachMenuItem").bind("click",function(){bg.lpevent("m_cl"),bg.clearCache(!1,!0,!1)}),$("#omarSessionsMenuItem").bind("click",function(){bg.lpevent("m_ses"),bg.opensessions()}),$("#safariMessageButton").bind("click",function(){bg.openURL("https://lastpass.com/safariAppExtension.php?source=dropdown"),LPPlatform.closePopup()}),Topics.get(Topics.REFRESH_DATA).subscribe(function(){Pe()}),Topics.get(Topics.PUSH_STATE).subscribe(function(e){le.push(e)}),Topics.get(Topics.EDIT_SITE).subscribe(function(e){e.vaultItem=e.vaultItem.getID(),ze(e)}),Topics.get(Topics.EDIT_NOTE).subscribe(function(e){e.vaultItem=e.vaultItem.getID(),Ue(e)}),Topics.get(Topics.EDIT_FORM_FILL).subscribe(function(e){e.vaultItem=e.vaultItem.getID(),Ke(e)}),Topics.get(Topics.EDIT_APPLICATION).subscribe(function(e){e.vaultItem=e.vaultItem.getID(),bg.LPPlatform.openTabDialog("application",e)}),Topics.get(Topics.IDENTITY_ENABLE).subscribe(function(e){LPProxy.enableIdentity(e),H=e}),Topics.get(Topics.CONFIRM).subscribe(function(e){mt("confirmation",e)}),Topics.get(Topics.ERROR).subscribe(function(e){e&&mt("alert",{title:Strings.Vault.ERROR,text:e})}),Topics.get(Topics.REPROMPT).subscribe(function(e){mt("reprompt",{successCallback:e})}),Topics.get(Topics.LEFT_ARROW).subscribe(function(){LPTools.disableMouse(),Ye(!0)}),Topics.get(Topics.CLEAR_DATA).subscribe(function(){for(var e=le.length-1;-1<e;--e)le[e].pop();le=[],LPTools.setNavIndex(0),T.val(""),oe=ie=ne=te=ee=!1,ae={},re={},se=null,Xe&&Xe(),st&&st(),S.removeClass("initialized"),b.empty(),f.empty(),Dialog.prototype.closeAllDialogs(!0)}),Topics.get(Topics.INITIALIZED).subscribe(function(){Strings.translate(a.body),LPPlatform.setupDropdownImportMenu(S)});var mt=function(e,t){$("#container").LP_hide(),LPTools.removeKeyBoardNavigation(),t=$.extend(t,{onResize:function(e,t){LPPlatform.setDropdownPopoverSize(e,t)},onClose:function(){LPPlatform.closePopup()}}),LPDialog.openDialog(e,t)},ft,bt=function(){Topics.get(Topics.CLEAR_DATA).publish()},vt,ht=(Pt=function(){bg.getData({context:"extensionDropdown",callback:function(){me()}})},It={},yt=function(e){LPPlatform.move(screenY-(e.screenY-It.y),e.screenX-It.x)},function(){D=!0,document.body.classList.add("quickSearch"),window.addEventListener("mousedown",function(e){e.target===document.getElementById("searchContainer")&&(It.x=e.clientX,It.y=e.clientY,window.addEventListener("mousemove",yt),e.preventDefault())}),window.addEventListener("mouseup",function(){window.removeEventListener("mousemove",yt)}),Topics.get(Topics.ESCAPE).subscribe(function(){LPPlatform.doClosePopup()}),Account.prototype.getDisplayClass=function(){return MatchingAccountDisplay},"undefined"!=typeof bg?Pt():(Topics.get(Topics.INITIALIZED).subscribe(function(){Pt()}),LPPlatform.initialize({context:"extensionDropdown",callback:Pt}))}),Pt,It,yt;return{setup:me,State:ce,isMatchingSite:we,setGroupLabel:de,open:function(){var e=bg.get("g_badgedata");if(e&&"notification"===e.cmd){switch(e.alerttype){case"duplicate":mt("duplicatePassword",{notification:e});break;case"weak":mt("weakPassword",{notification:e})}switch(e.type){case"error":mt("notification",{notification:bg.get("g_notification_data")});break;case"mpwchange":mt("securityNotice",{notification:bg.get("g_notification_data")});break;case"lpalert":mt("breachAlert",{notification:bg.get("g_notification_data")})}bg.clear_badge()}else e&&"migration"===e.cmd?(mt("migration",{notification:e}),bg.clear_badge()):me()},openDialog:mt,reset:bt,setBigIcons:function(e){bg.set("g_bigicons",e)},openQuickSearch:ht,setSize:V}}(document);
//# sourceMappingURL=sourcemaps/extensionDropdown.js.map
