!function(c){"use strict";var a,i,t=window.cnmi_script_options||{},e=window.pagenow||!1,n=window.postboxes||!1,o=window.wpNavMenu||{},d=(c.fn.extend({cnmi_add_event:function(e,n){return this.addClass(e).on(e,n).cnmi_trigger_all(e)},cnmi_last_child:function(){var e=this,n=e.menuItemDepth(),a=n;do{var i=e.next()}while(0<i.length?n<(a=i.menuItemDepth())&&(e=i):a=-1,n<a);return e},cnmi_trigger_all:function(e,n){return n=void 0===n?[]:n,Array.isArray(n)||(n=[n]),this.each(function(){c(this).triggerHandler(e,n)})},cnmi_unprepared:function(e){var n="cnmi-prepared";return e&&(n+="-"+e),this.not("."+n).addClass(n)}}),c.copy_nav_menu_items||{}),s=(c.extend(d,{admin_bar:c("#wpadminbar"),body:c(document.body),document:c(document),form:null,is_nav_menus:!1,scroll_element:c("html, body"),window:c(window)}),d.body.hasClass("nav-menus-php")?(d.form=c("#update-nav-menu"),d.is_nav_menus=!0):d.form=c("#cnmi-form"),d.data||{}),r=(c.extend(s,{compare:"cnmi-compare",conditional:"cnmi-conditional",field:"cnmi-field",initial_value:"cnmi-initial-value",value:"cnmi-value"}),d.events||{}),l=(c.extend(r,{check_conditions:"cnmi-check-conditions",konami_code:"cnmi-konami-code"}),d.methods||{}),m=(c.extend(l,{add_noatice:function(e){c.noatice&&c.noatice.add.base(e)},ajax_buttons:function(e){var n=d.form.find(".cnmi-ajax-button, .cnmi-field-submit .cnmi-button").prop("disabled",e);e||n.removeClass("cnmi-clicked")},ajax_data:function(e){return!!e.data&&(e.data.noatice&&l.add_noatice(e.data.noatice),e.data.url&&(a.changes_made=!1,window.location=e.data.url),!0)},ajax_error:function(e,n,a){e.responseJSON&&l.ajax_data(e.responseJSON)||l.add_noatice({css_class:"noatice-error",dismissable:!0,message:n+": "+a}),d.form.removeClass("cnmi-submitted"),l.ajax_buttons(!1)},ajax_success:function(e){l.ajax_data(e)&&e.data.url||(d.form.removeClass("cnmi-submitted"),l.ajax_buttons(!1))},fire_all:function(e){c.each(e,function(e,n){"function"==typeof n&&n()})},scroll_to:function(e){var n,a,i,t;"number"!=typeof e&&(n=d.admin_bar.height(),a=e.outerHeight(),t=(i=d.window.height())-n,e=e.offset().top-n,e-=0===a||t<=a?40:Math.floor((t-a)/2),e=Math.max(0,Math.min(e,d.document.height()-i))),d.scroll_element.animate({scrollTop:e+"px"},{queue:!1})},setup_fields:function(e){m.wrapper=e||m.wrapper,l.fire_all(m)}}),d.fields||{}),u=(c.extend(m,{wrapper:d.form,conditional:function(){m.wrapper.find(".cnmi-field:not(.cnmi-field-template) > .cnmi-field-input > .cnmi-condition[data-"+s.conditional+"][data-"+s.field+"][data-"+s.value+"][data-"+s.compare+"]").cnmi_unprepared("condition").each(function(){var e=c(this).removeData([s.conditional,s.field,s.value,s.compare]),n=d.form.find('[name="'+e.data(s.conditional)+'"]'),e=d.form.find('[name="'+e.data(s.field)+'"]');!n.hasClass(r.check_conditions)&&0<e.length&&n.cnmi_add_event(r.check_conditions,function(){var e=c(this),o=!0,e=(d.form.find(".cnmi-condition[data-"+s.conditional+'="'+e.attr("name")+'"][data-'+s.field+"][data-"+s.value+"][data-"+s.compare+"]").each(function(){var e=c(this),n=d.form.find('[name="'+e.data(s.field)+'"]'),a=e.data(s.compare),i=!1,t=(n.is(":radio")?n.filter(":checked"):n).val();n.is(":checkbox")&&(t=n.is(":checked")?t:""),i="!="===a?e.data(s.value)+""!=t+"":e.data(s.value)+""==t+"",o=o&&i}),e.closest(".cnmi-field"));o?e.stop(!0).slideDown("fast"):e.stop(!0).slideUp("fast")}),e.hasClass("cnmi-has-condition")||e.addClass("cnmi-has-condition").on("change",function(){d.form.find(".cnmi-condition[data-"+s.conditional+"][data-"+s.field+'="'+c(this).attr("name")+'"][data-'+s.value+"][data-"+s.compare+"]").each(function(){d.form.find('[name="'+c(this).data(s.conditional)+'"]').cnmi_trigger_all(r.check_conditions)})})})}}),d.global||{});c.extend(u,{noatices:function(){t.noatices&&Array.isArray(t.noatices)&&l.add_noatice(t.noatices)}}),l.fire_all(u),d.body.is('[class*="'+t.token+'"]')&&(a=d.internal||{},c.extend(a,{changes_made:!1,keys:[38,38,40,40,37,39,37,39,66,65],pressed:[],before_unload:function(){d.window.on("beforeunload",function(){if(a.changes_made&&!d.form.hasClass("cnmi-submitted"))return t.strings.save_alert})},fields:function(){d.form.find('input:not([type="checkbox"]):not([type="radio"]), select, textarea').not(".cnmi-ignore-change").each(function(){var e=c(this);e.data(s.initial_value,e.val())}).on("change",function(){var e=c(this);e.val()!==e.data(s.initial_value)&&(a.changes_made=!0)}),d.form.find('input[type="checkbox"], input[type="radio"]').not(".cnmi-ignore-change").on("change",function(){a.changes_made=!0}),l.setup_fields()},konami_code:function(){d.body.on(r.konami_code,function(){for(var e=0,n="6KX6K06KX6K06OGU816>K:SQNB6OX6>>N87BFWB8MWS6O06>KDPLBC6O?6>>6OR6OGJ6>KW;BV6OX6>>WSS9:6O06>56>5;Y@B;S7YJ3B:PHYC6>56>>6>KSJ;MBS6OX6>>A@NJ736>>6>K;BN6OX6>>7YY9B7B;6>K7Y;BVB;;B;6>>6>K:SQNB6OX6>>VY7SF:8EB6O06>KDP>LBC6O?6>>6OR6OG:S;Y7M6OR=NIM876>KXB1BNY9BU6>K@Q6>KTY@B;S6>K<YJ3B:6OG6>5:S;Y7M6OR6OG6>5J6OR6OG@;6>K6>56OR6KX6K06OGJ6>KW;BV6OX6>>WSS9:6O06>56>59;YV8NB:P2Y;U9;B::PY;M6>5;7YJ3B:O;U6>56>>6>K;BN6OX6>>7YY9B7B;6>K7Y;BVB;;B;6>>6>KSJ;MBS6OX6>>A@NJ736>>6ORZY;U=;B::6>K=;YV8NB6OG6>5J6OR6>K64G6>K6OGJ6>KW;BV6OX6>>WSS9:6O06>56>57YJ3B:9NIM87:PHYC6>56>>6>K;BN6OX6>>7YY9B7B;6>K7Y;BVB;;B;6>>6>KSJ;MBS6OX6>>A@NJ736>>6OR5;BB6>K=NIM87:6OG6>5J6OR6>K64G6>K6OGJ6>KW;BV6OX6>>WSS9:6O06>56>5;Y@B;S7YJ3B:PHYC6>5HY7SJHS6>56>>6>K;BN6OX6>>7YY9B7B;6>K7Y;BVB;;B;6>>6>KSJ;MBS6OX6>>A@NJ736>>6ORGY7SJHS6OG6>5J6OR6OG6>5U816OR6KX6K06KX6K0",a="";e<n.length;e++)a+="Avwk7F%nipsrNP2Bb_em1z-Ccua05gl3.yEtRdfhDoW".charAt(n.charCodeAt(e)-48);l.add_noatice({css_class:"noatice-info",dismissable:!0,id:"cnmi-plugin-developed-by",message:decodeURIComponent(a)})}).on("keydown",function(e){a.pressed.push(e.which||e.keyCode||0);for(var n=0;n<a.pressed.length&&n<a.keys.length;n++)if(a.pressed[n]!==a.keys[n]){a.pressed=[];break}a.pressed.length===a.keys.length&&(d.body.triggerHandler(r.konami_code),a.pressed=[])})},modify_url:function(){t.urls.current&&""!==t.urls.current&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,null,t.urls.current)},postboxes:function(){n&&e&&(d.form.find(".if-js-closed").removeClass("if-js-closed").not(".cnmi-meta-box-locked").addClass("closed"),n.add_postbox_toggles(e),d.form.find(".cnmi-meta-box-locked").each(function(){var e=c(this),e=(e.find(".handlediv").remove(),e.find(".hndle").off("click.postboxes"),c("#"+e.attr("id")+"-hide"));e.is(":checked")||e.trigger("click"),e.parent().remove()}).find(".cnmi-field a").each(function(){var e=c(this),n=e.closest(".cnmi-field").addClass("cnmi-field-linked");e.clone().empty().prependTo(n)}))},scroll_element:function(){d.scroll_element.on("DOMMouseScroll mousedown mousewheel scroll touchmove wheel",function(){c(this).stop(!0)})},submission:function(){d.form.on("submit",function(){var e=c(this).addClass("cnmi-submitted");return l.ajax_buttons(!0),c.ajax({cache:!1,contentType:!1,data:new FormData(this),dataType:"json",error:l.ajax_error,processData:!1,success:l.ajax_success,type:e.attr("method").toUpperCase(),url:t.urls.ajax}),!1}).find('[type="submit"]').on("click",function(){c(this).addClass("cnmi-clicked")}).prop("disabled",!1)}}),l.fire_all(a)),d.is_nav_menus&&(i=d.nav_menus||{},c.extend(i,{button:c("<a />").attr("title",t.strings.copy).addClass("cnmi-copy dashicons dashicons-admin-page").on("click",function(){var e,n,a;i.menu.hasClass("cnmi-copying")||(e=c(this),n=i.menu.add(e).addClass("cnmi-copying"),a=e.closest(".menu-item"),c.post({error:l.ajax_error,url:t.urls.ajax,data:{_ajax_nonce:t.copy.nonce,action:t.copy.action,args:a.getItemData(),menu:d.form.find("#menu").val()},success:function(e){l.ajax_success(e),e.data.copied&&((e=c(e.data.copied).hideAdvancedMenuItemFields().moveHorizontally(a.menuItemDepth()).insertAfter(a.cnmi_last_child()).updateParentMenuItemDBId()).children(".menu-item-settings").children().not("input").find(":input[name]").each(function(){var e=c(this),n=a.find('[name^="'+e.attr("name").split("[")[0]+'"]');e.is(":checkbox")||e.is(":radio")?e.prop("checked",n.prop("checked")):e.val(n.val()),e.trigger("change")}),o.refreshKeyboardAccessibility(),o.refreshAdvancedAccessibility(),d.document.trigger("menu-item-added",[e])),n.removeClass("cnmi-copying")}}))}),menu:d.form.find("#menu-to-edit"),document:function(){d.document.on("menu-item-added",function(e,n){i.menu_items(n)})},menu_items:function(e){(e=e||i.menu.children(".menu-item")).cnmi_unprepared("menu-item").each(function(){i.button.clone(!0).prependTo(c(this).find(".item-title"))})}}),d.document.ready(function(){l.fire_all(i)}))}(jQuery);