


var disqus_href = window.location.href;
var disqus_date = new Date();
var disqus_hashIndex = disqus_href.indexOf('#');
if(disqus_hashIndex != -1) {
	disqus_href = disqus_href.substring(0, disqus_hashIndex);
}

var disqus_script = document.createElement('script');
var disqus_url, disqus_title, disqus_message, disqus_sort;
var disqus_container_id, disqus_category_id, disqus_developer;
var disqus_identifier;
var disqus_extra_qs = '';

if(typeof(disqus_url) == 'undefined') {
	disqus_url = disqus_href;
}
if(typeof(disqus_title) == 'undefined') {
	disqus_title = '';
}
if(typeof(disqus_message) == 'undefined') {
	disqus_message = '';
} else {
	var disqus_isUTF8 = false;
	if(/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) { // if IE
		for(var i=0; i<disqus_message.length; i++) {
			if(disqus_message.charCodeAt(i) > 256) {
				disqus_isUTF8 = true;
				break;
			}
		}
	}

	

	if(disqus_isUTF8) {
		disqus_message = '';
	} else {
		if(disqus_message.length > 400) {
			disqus_message = disqus_message.substring(0, disqus_message.indexOf(' ', 350));
		}
	}
}
if(typeof(disqus_sort) == 'undefined') {
	disqus_sort = '';
}
if(typeof(disqus_container_id) == 'undefined') {
	disqus_container_id = 'disqus_thread';
}
if(typeof(disqus_category_id) == 'undefined') {
	disqus_category_id = '';
}
if(typeof(disqus_developer) == 'undefined') {
	disqus_developer = '';
}
if(typeof(disqus_identifier) == 'undefined') {
	disqus_identifier = '';
}
if(typeof(disqus_require_moderation_s) != 'undefined') {
	disqus_extra_qs += '&require_mod_s=' + encodeURIComponent(disqus_require_moderation_s);
}
if(typeof(disqus_per_page) != 'undefined') {
	disqus_extra_qs += '&per_page=' + encodeURIComponent(disqus_per_page);
}

disqus_script.type = 'text/javascript';
disqus_script.src = 'http://disqus.com/forums/yogsototh/thread.js'
	+ '?url='			+ encodeURIComponent(disqus_url)
	+ '&message='		+ encodeURIComponent(disqus_message)
	+ '&title=' 		+ encodeURIComponent(disqus_title)
	+ '&sort='			+ encodeURIComponent(disqus_sort)
	+ '&category_id='	+ encodeURIComponent(disqus_category_id)
	+ '&developer='		+ ((disqus_developer == '0' || !disqus_developer) ? 0 : 1)
	+ '&identifier='	+ encodeURIComponent(disqus_identifier)
	+ disqus_extra_qs
	+ '&'				+ disqus_date.getTime();
disqus_script.charset = 'UTF-8';

var disqus_dataContainer = document.createElement('div');
disqus_dataContainer.id = 'dsq-content';
disqus_dataContainer.appendChild(disqus_script);

document.getElementById(disqus_container_id).appendChild(disqus_dataContainer);

if (!window.disqus_no_style) {
	$('head').append('<style type="text/css" media="screen">\
	 #disqus_thread {\
	 margin-bottom: 10px;\
	 }\
	 .dsq-brlink {\
	 font-size: 10px;\
	 }\
	 .logo-disqus {\
	 font-family: Arial, sans-serif;\
	 text-transform: uppercase;\
	 font-size: 9px;\
	 font-weight: bold;\
	 }\
	 #dsq-content iframe,\
	 #dsq-popup-alert iframe {\
	 border: 0;\
	 overflow-y: auto;\
	 overflow-x: hidden;\
	 *overflow-x: visible;\
	 width: 100%;\
	 background-color: transparent;\
	 height: 160px;\
	 <!--[if IE 7]>\
	 width: 0px;\
	 <![endif]-->\
	 }\
	 #dsq-content iframe.dsq-post-reply,\
	 #dsq-popup-alert iframe.dsq-post-reply {\
	 height: 300px;\
	 }\
	 #dsq-content iframe.dsq-post-reply-authenticated,\
	 #dsq-popup-alert iframe.dsq-post-reply-authenticated {\
	 height: 170px;\
	 }\
	 #dsq-content #dsq-comments .dsq-header-avatar .dsq-drop-profile {\
	 color: #333;\
	 font-size: 11px;\
	 font-family: Arial, Helvetica, sans-serif;\
	 float: left;\
	 left: 0px;\
	 position: relative;\
	 background: #f0f0f0;\
	 z-index: 2;\
	 border-left: 1px solid #888;\
	 border-right: 1px solid #888;\
	 border-bottom: 1px solid #888;\
	 -moz-border-radius: 0px 5px 5px 5px;\
	 -webkit-border-top-right-radius: 5px;\
	 -webkit-border-bottom-right-radius: 5px;\
	 -webkit-border-bottom-left-radius: 5px;\
	 display: none;\
	 min-width: 64px;\
	 /* IE6 */\
	 _position: absolute;\
	 _top: 32px;\
	 _z-index: 9000;\
	 }\
	 /**\
	 * Popup\
	 */\
	 .dsq-overlay {\
	 display: block;\
	 position:absolute;\
	 top:0;\
	 left:0;\
	 width:100%;\
	 height:100%;\
	 z-index:5000;\
	 background-color:#000;\
	 -moz-opacity: 0.8;\
	 opacity:.80;\
	 filter: alpha(opacity=80);\
	 }\
	 .dsq-overlay[id] {\
	 position:fixed;\
	 }\
	 .dsq-popup h4,\
	 .dsq-popup ul,\
	 .dsq-popup li,\
	 .dsq-popup ol,\
	 .dsq-popup div,\
	 .dsq-popup table,\
	 .dsq-popup td,\
	 .dsq-popup th,\
	 .dsq-popup p,\
	 .dsq-popup a,\
	 .dsq-popup cite,\
	 .dsq-popup img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 }\
	 .dsq-popup table {\
	 border-collapse: separate;\
	 border-spacing: 0;\
	 }\
	 .dsq-popup {\
	 color: #333;\
	 display: none;\
	 position: absolute;\
	 z-index: 9999;\
	 padding: 0;\
	 border: 0;\
	 text-align: left;\
	 width: 520px;\
	 _background: transparent url(http://media.disqus.com/images/embed/popup-body.png) repeat-y;\
	 }\
	 .dsq-popup[id] {\
	 position: fixed;\
	 }\
	 .dsq-popup img {\
	 max-width: none;\
	 }\
	 .dsq-popup ul,\
	 .dsq-popup li,\
	 .dsq-popup ol {\
	 list-style-type: none;\
	 list-style-image: none;\
	 background: none;\
	 display: block;\
	 }\
	 .dsq-popup li:before {\
	 content: "";\
	 }\
	 .dsq-popup p,\
	 .dsq-popup ul {\
	 padding: 10px;\
	 color: #222;\
	 line-height: 1.22em;\
	 }\
	 .dsq-popup .dsq-subscribe-submit {\
	 margin: 0 auto;\
	 padding: 0 10px;\
	 color: #222;\
	 }\
	 .dsq-popup .dsq-subscribe-submit input {\
	 font-size: 110%;\
	 width: 200px;\
	 }\
	 .dsq-popup p.dsq-verify-notice {\
	 padding: 5px;\
	 margin: 20px 0 0 0;\
	 background-color: #fdf1d0;\
	 border: 1px solid #fad163;\
	 }\
	 .dsq-popup a {\
	 color: #1C5392;\
	 }\
	 .dsq-popup a:hover {\
	 color: #869AAD;\
	 }\
	 .dsq-popup .dsq-popup-top {\
	 position: relative;\
	 text-align: right;\
	 width: 520px;\
	 height: 20px;\
	 background: transparent url(http://media.disqus.com/images/embed/popup-top.png) no-repeat;\
	 }\
	 .dsq-popup .dsq-popup-top img {\
	 margin: 12px 13px 0 0;\
	 *margin: 12px 13px 0 0;\
	 }\
	 .dsq-popup .dsq-popup-bottom {\
	 text-align: right;\
	 width: 520px;\
	 height: 20px;\
	 background: transparent url(http://media.disqus.com/images/embed/popup-bottom.png) no-repeat;\
	 }\
	 .dsq-popup .dsq-popup-body div.powered-by{\
	 font-size: 90%;\
	 text-align: right;\
	 padding-right: 15px;\
	 }\
	 .dsq-popup .dsq-popup-body div.powered-by a {\
	 color: #888;\
	 text-decoration:none;\
	 }\
	 .dsq-popup  .dsq-popup-body {\
	 width: 520px;\
	 background: transparent url(http://media.disqus.com/images/embed/popup-body.png) repeat-y;\
	 }\
	 .dsq-popup .dsq-popup-body .dsq-popup-header a.dsq-close-link {\
	 color:#7aa5d5;\
	 position: absolute;\
	 top:-8px;\
	 right: 5px;\
	 text-decoration:none;\
	 }\
	 .dsq-popup .dsq-popup-body .dsq-popup-header a.dsq-close-link img {\
	 width: 23px;\
	 height: 24px;\
	 border: 0;\
	 }\
	 /**\
	 * Popup : Blacklist\
	 */\
	 .dsq-popup .dsq-blacklist-option {\
	 padding: 5px 10px;\
	 border-bottom: 1px dotted #E5EBED;\
	 }\
	 /**\
	 * Popup : Help\
	 */\
	 .dsq-popup ul.dsq-popup-help {\
	 margin: 0 10px;\
	 }\
	 #dsq-popup-message.dsq-popup ul.dsq-popup-help li {\
	 margin: 0 0 15px 0;\
	 padding: 0 0 10px 0;\
	 border-bottom: 1px dotted #E5EBED;\
	 }\
	 .dsq-popup ul.dsq-popup-help li.dsq-help-otheraccts {\
	 font-weight: bold;\
	 font-size: 110%;\
	 border-bottom-width: 2px;\
	 border-bottom-style: solid;\
	 }\
	 #dsq-popup-message ul.dsq-list-tick li {\
	 list-style: none inside url(http://media.disqus.com/images/tick.png) !important;\
	 display: list-item;\
	 }\
	 #dsq-popup-message ul.dsq-list-bluebullet li {\
	 list-style: none inside url(http://media.disqus.com/images/bullet_blue.png);\
	 display: list-item;\
	 }\
	 #dsq-popup-message li {\
	 margin: 10px 0;\
	 padding: 0 10px;\
	 border-bottom: 1px dotted #E5EBED;\
	 }\
	 #dsq-popup-message li li {\
	 padding-left: 10px;\
	 }\
	 /*\
	 * Popup : Login\
	 */\
	 .dsq-popup iframe#dsq-popup-login {\
	 margin-top: 10px;\
	 height:310px;\
	 width: 100%;\
	 }\
	 /**\
	 * Popup : Lightbox : Authenticate\
	 */\
	 .dsq-lightbox .powered-by {\
	 display: none;\
	 }\
	 .dsq-lightbox img {\
	 border: 0 !important;\
	 height: auto !important;\
	 width: auto !important;\
	 }\
	 .dsq-lightbox .dsq-lightbox-register-reasons {\
	 padding: 0 10px !important;\
	 }\
	 .dsq-lightbox .dsq-lightbox-register-reasons li {\
	 background: url(http://media.disqus.com/images/small-tick.png) no-repeat;\
	 padding-left: 12px !important;\
	 margin: 0 0 0 6px !important;\
	 display: inline !important;\
	 font-size: 11px !important;\
	 color: #555;\
	 }\
	 .dsq-lightbox .dsq-lightbox-register-reasons li img {\
	 margin-bottom: -1px !important;\
	 }\
	 .dsq-lightbox .dsq-lightbox-auth-fields {\
	 }\
	 .dsq-lightbox .dsq-lightbox-submit {\
	 height: 1%;\
	 overflow: auto;\
	 padding: 0 5px;\
	 margin-top: 20px;\
	 }\
	 .dsq-lightbox .dsq-lightbox-auth-post {\
	 float: right;\
	 padding: 4px;\
	 background-color: #EAFFCD;\
	 -moz-border-radius: 4px;\
	 -webkit-border-radius: 4px;\
	 -webkit-border-radisu: 4px;\
	 }\
	 .dsq-lightbox .dsq-lightbox-auth-skip {\
	 float: left;\
	 margin-top: 5px;\
	 padding: 2px;\
	 }\
	 .dsq-lightbox .dsq-lightbox-switch-auth {\
	 width: 400px;\
	 font-size: 11px;\
	 text-align: right;\
	 margin: 0 auto;\
	 }\
	 .dsq-lightbox .dsq-lightbox-auth-fields table {\
	 padding: 8px;\
	 background-color: #EDFFC9;\
	 border: 1px solid #A5C469;\
	 -moz-border-radius: 4px;\
	 -webkit-border-radius: 4px;\
	 -webkit-border-radius: 4px;\
	 width: 400px;\
	 margin: 10px auto;\
	 }\
	 .dsq-lightbox .dsq-lightbox-auth-fields table td {\
	 padding: 4px;\
	 }\
	 .dsq-lightbox .errorlist {\
	 color: #c03000 !important;\
	 font-size: 11px;\
	 font-weight: bold;\
	 margin: 0;\
	 padding: 0;\
	 }\
	 .dsq-lightbox .errorlist li {\
	 margin: 5px 0 !important;\
	 padding: 0 !important;\
	 }\
	 .dsq-lightbox-errors p {\
	 color: #c03000 !important;\
	 font-size: 11px;\
	 font-weight: bold;\
	 }\
	 .dsq-lightbox .dsq-lightbox-auth-fields table td input {\
	 font-size: 13px;\
	 padding: 2px;\
	 }\
	 .dsq-lightbox-recognized table {\
	 width: 400px;\
	 margin: 10px auto;\
	 }\
	 .dsq-lightbox-recognized table td {\
	 padding: 4px;\
	 }\
	 /*\
	 * Popup : Profile\
	 */\
	 .dsq-popup .dsq-popup-body div.show-more{\
	 padding-left: 10px;\
	 font-size: 95%;\
	 color:#7aa5d5;\
	 }\
	 .dsq-popup .dsq-popup-body .dsq-popup-body-padding {\
	 padding: 0 10px;\
	 font-size: 13px;\
	 }\
	 .dsq-popup .dsq-popup-body .dsq-popup-header {\
	 background-color: #e5ebed;\
	 padding: 0 10px;\
	 position: relative;\
	 padding-bottom: 10px;\
	 border-bottom: 1px solid #445460;\
	 }\
	 .dsq-popup .dsq-popup-body .dsq-popup-header img {\
	 border: 1px solid #fff;\
	 width: 32px;\
	 height: 32px;\
	 vertical-align: middle;\
	 }\
	 .dsq-popup .dsq-popup-body .dsq-popup-body-padding cite {\
	 margin-left: 5px;\
	 /*  top: 8px;\
	 position: absolute;*/\
	 font-style: normal;\
	 vertical-align: middle;\
	 }\
	 .dsq-popup .dsq-popup .dsq-popup-body .dsq-popup-body-padding cite {\
	 position: static;\
	 margin: 0;\
	 }\
	 .dsq-popup .dsq-popup-body .dsq-popup-body-padding cite span {\
	 font-weight: bold;\
	 font-size: 150%;\
	 font-style: normal;\
	 margin-right: 10px;\
	 vertical-align: middle;\
	 }\
	 .dsq-popup .dsq-popup-body .dsq-popup-body-padding .dsq-popuplink {\
	 margin: 0 0 0 5px;\
	 font-size: 90%;\
	 }\
	 .dsq-popup .dsq-clout {\
	 float: left;\
	 width: 72px;\
	 height: 32px;\
	 line-height: 32px;\
	 background: url(\'http://media.disqus.com/images/embed/clout-background.png\') no-repeat top left;\
	 }\
	 .dsq-popup .dsq-clout.unverified {\
	 background: url(\'http://media.disqus.com/images/embed/unverified-background.png\') no-repeat top left;\
	 line-height: 24px;\
	 }\
	 .dsq-popup .dsq-clout a{\
	 float: left;\
	 width: 100%;\
	 text-align: center;\
	 color: #FFF;\
	 font-size: 16px;\
	 font-weight: bold;\
	 text-decoration: none;\
	 }\
	 .dsq-popup .dsq-clout.unverified a{\
	 font-size: 11px;\
	 font-weight: normal;\
	 }\
	 .dsq-popup .dsq-clout a:hover {\
	 color: #fff;\
	 }\
	 .dsq-popup .dsq-profile-services {\
	 padding: 10px;\
	 background-color: #f0f0f0;\
	 border-bottom: 1px solid #aaa;\
	 height: auto;\
	 overflow: hidden;\
	 }\
	 .dsq-popup .dsq-profile-services .dsq-profile-userlvl {\
	 padding-bottom: 10px;\
	 margin-bottom: 15px;\
	 border-bottom: 1px solid #ddd;\
	 }\
	 .dsq-popup .dsq-profile-services span.dsq-profile-ontheweb {\
	 float: left;\
	 font-family: Trebuchet MS, Trebuchet, Verdana, sans-serif;\
	 font-size: 95%;\
	 color: #aaa;\
	 }\
	 .dsq-popup .dsq-profile-services ul {\
	 margin-left: 15px;\
	 display: inline;\
	 }\
	 .dsq-popup .dsq-profile-services ul li{\
	 display: inline;\
	 margin-right: 15px;\
	 }\
	 .dsq-popup .dsq-profile-services ul li.dsq-service-labeltxt{\
	 margin: 0;\
	 }\
	 .dsq-popup .dsq-profile-services ul li.dsq-service-labeltxt{\
	 margin: 0;\
	 }\
	 .dsq-popup .dsq-profile-services span.dsq-services-description {\
	 font-size: 85%;\
	 color: #555;\
	 position: absolute;\
	 top: 25px;\
	 left: 5px;\
	 display: none;\
	 white-space: nowrap;\
	 }\
	 .dsq-popup .dsq-profile-services img {\
	 border:2px solid #fff;\
	 }\
	 .dsq-popup a.dsq-profile-follow {\
	 color:#7aa5d5;\
	 }\
	 .dsq-popup .dsq-profile-status,\
	 .dsq-popup .dsq-profile-recentcomments {\
	 clear: both;\
	 padding: 10px;\
	 }\
	 .dsq-popup .dsq-profile-status p,\
	 .dsq-popup .dsq-profile-recentcomments p{\
	 padding: 0;\
	 }\
	 .dsq-popup .dsq-profile-status h4,\
	 .dsq-popup .dsq-profile-recentcomments h4 {\
	 font-size: 110%;\
	 border-bottom: 2px solid #D7DBDD;\
	 margin-bottom: 10px;\
	 }\
	 .dsq-popup .dsq-profile-status h4 span,\
	 .dsq-popup .dsq-profile-recentcomments h4 span {\
	 background-color: #D7DBDD;\
	 padding: 2px 5px;\
	 color: #555;\
	 font-weight: bold;\
	 }\
	 .dsq-popup p.dsq-profile-label {\
	 font-family: Trebuchet MS, Trebuchet, Verdana, sans-serif;\
	 font-size: 95%;\
	 color: #aaa;\
	 }\
	 .dsq-popup ul.dsq-profile-commentlist {\
	 margin-top: 10px;\
	 }\
	 .dsq-popup .dsq-profile-commentlist li{\
	 padding: 5px 0;\
	 border-bottom: 2px solid #e9ebed;\
	 }\
	 .dsq-popup .dsq-profile-commentlist li img.avatar-small {\
	 width: 24px;\
	 height: 24px;\
	 border: 1px solid #DDD;\
	 float: left;\
	 }\
	 .dsq-popup .dsq-profile-commentlist li .comment-message {\
	 margin-left: 30px !important;\
	 *float: left !important;\
	 *margin-left: 5px !important;\
	 }\
	 .dsq-popup .dsq-profile-commentlist li span.comment-meta {\
	 clear: both !important;\
	 margin-left: 30px !important;\
	 display: block !important;\
	 font-size: 90% !important;\
	 background: none !important;\
	 float: none !important;\
	 width: auto !important;\
	 }\
	 .dsq-popup .dsq-profile-commentlist span{\
	 color: #666;\
	 font-size: 95%;\
	 }\
	 /**\
	 * Popup : Reblog\
	 */\
	 .dsq-popup .dsq-popup-content .dsq-reblog-form {\
	 padding: 10px;\
	 }\
	 .dsq-popup .dsq-popup-content .dsq-blogauth-form {\
	 margin: 10px 0;\
	 }\
	 .dsq-popup .dsq-popup-content .dsq-blogauth-form li {\
	 margin-bottom: 5px;\
	 }\
	 .dsq-popup .dsq-popup-content .dsq-blogauth-form li input {\
	 width: 250px;\
	 }\
	 .dsq-popup .dsq-popup-content .dsq-blogauth-form li label {\
	 width: 100px;\
	 display: block;\
	 float: left;\
	 }\
	 .dsq-popup .dsq-popup-content ul.dsq-reblog-input {\
	 margin: 10px 0;\
	 }\
	 .dsq-popup .dsq-popup-content ul.dsq-reblog-input li {\
	 margin-bottom: 10px;\
	 }\
	 .dsq-popup .dsq-popup-content ul.dsq-reblog-input li input {\
	 width: 450px;\
	 }\
	 .dsq-popup .dsq-popup-content ul.dsq-reblog-input li textarea {\
	 width: 450px;\
	 font-size: 12px;\
	 font-family: Arial, Helvetica, sans-serif;\
	 height: 175px;\
	 }\
	 .dsq-popup .dsq-popup-content ul.dsq-reblog-input li label {\
	 float: none;\
	 display: block;\
	 font-weight: bold;\
	 }\
	 .dsq-popup .dsq-popup-content .dsq-blogauth-toggle {\
	 font-weight: bold;\
	 }\
	 p.dsq-reblog-supported {\
	 font-size: 90%;\
	 color: #555;\
	 }\
	 /**\
	 * Menu\
	 */\
	 .dsq-menu{\
	 margin: 0 !important;\
	 left: 0px;\
	 position: absolute;\
	 _position: absolute;\
	 _left:;\
	 background: #f0f0f0 !important;\
	 z-index: 2 !important;\
	 border-width: 1px !important;\
	 border-color: #888 !important;\
	 border-style: solid !important;\
	 -moz-border-radius: 0px 0px 4px 4px;\
	 -webkit-border-bottom-right-radius: 4px;\
	 -webkit-border-bottom-left-radius: 4px;\
	 display: inline;\
	 padding: 5px 10px 5px 0 !important;\
	 list-style: none !important;\
	 }\
	 .dsq-menu li{\
	 margin: 0 !important;\
	 padding: 0 !important;\
	 clear: both;\
	 line-height: 1.3em !important;\
	 font-size: 12px !important;\
	 margin-bottom: 2px !important;\
	 margin-left: 4px !important;\
	 white-space: nowrap !important;\
	 list-style: none !important;\
	 float: none;\
	 background: none;\
	 text-align: left;\
	 }\
	 .dsq-menu li:before {\
	 content: "";\
	 }\
	 .dsq-menu li a.dsq-admin-toggle {\
	 font-weight: bold;\
	 }\
	 .dsq-menu li.dsq-admin-email,\
	 .dsq-menu li.dsq-admin-ip {\
	 color: #555;\
	 font-style: italic;\
	 cursor: default;\
	 }\
	 .dsq-menu li.dsq-menu-sep {\
	 border-bottom: 1px dotted #aaa;\
	 font-size: 1pt !important;\
	 }\
	 .dsq-menu li a{\
	 text-decoration: none;\
	 color: #333;\
	 }\
	 .dsq-menu li a:hover {\
	 color: #869AAD;\
	 }\
	 /**\
	 * Drop profile\
	 */\
	 #dsq-content #dsq-comments .dsq-header-avatar:hover .dsq-drop-profile {\
	 display: inline;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li{\
	 float: none;\
	 clear: both;\
	 line-height: 1.3em;\
	 padding: 2px 4px;\
	 white-space: nowrap;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li img {\
	 float: none;\
	 height: 12px;\
	 width: 12px;\
	 margin: 0px 4px 0px 0;\
	 vertical-align: middle;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li a {\
	 color: #1C5392;\
	 vertical-align: middle;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li a:hover {\
	 font-weight: bold;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-services {\
	 height: 16px;\
	 padding: 4px 4px;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-services:hover {\
	 background-color: #ddd;\
	 outline-top: 1px solid #ccc;\
	 outline-bottom: 1px solid #ccc;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-services a {\
	 display: block;\
	 width: 100%;\
	 height: 16px;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-sep {\
	 border-bottom: 1px dotted #aaa;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-showlnk {\
	 padding: 4px 2px;\
	 border-bottom: 1px solid #ccc;\
	 text-align: center;\
	 height: 16px;\
	 -moz-border-radius: 0px 5px 0px 0px;\
	 -webkit-border-top-right-radius: 5px;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-showlnk a {\
	 font-weight: bold;\
	 font-size: 95%;\
	 display: block;\
	 width: 100%;\
	 height: 16px;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-badge {\
	 padding: 6px 2px;\
	 text-align: center;\
	 font-size: 95%;\
	 cursor: help;\
	 border-bottom: 1px solid #ddd;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-badge span {\
	 padding: 1px 3px;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-more {\
	 height:16px;\
	 background: url(http://media.disqus.com/images/drop-more.gif);\
	 background-position: 0px 0px;\
	 background-repeat: repeat-x;\
	 background-color: #fff;\
	 text-align: center;\
	 border-top: 1px solid #ddd;\
	 -moz-border-radius: 0px 0px 5px 5px;\
	 -webkit-border-bottom-right-radius: 5px;\
	 -webkit-border-bottom-left-radius: 5px;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-more:hover {\
	 background-position: 0px -20px;\
	 border-top: 1px solid #ccc;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-more a {\
	 font-size: 95%;\
	 height: 16px;\
	 width: 100%;\
	 display: block;\
	 }\
	 #dsq-content #dsq-comments .dsq-drop-profile li.dsq-drop-hidden {\
	 display: none;\
	 padding: 0;\
	 }\
	 /*-----\
	 Classic Theme\
	 -----*/\
	 #disqus_thread #dsq-content iframe.dsq-post-video {\
	 height: 330px;\
	 overflow: hidden;\
	 }\
	 #dsq-content #dsq-comments .dsq-header-avatar img{\
	 float: left;\
	 margin: 4px;\
	 width: 32px;\
	 height: 32px;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-body{\
	 padding-top: 5px;\
	 }\
	 #dsq-content #dsq-comments .dsq-header-avatar {\
	 width: 32px;\
	 height: 34px;\
	 height: 43px;\
	 width: 40px;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment:hover .dsq-header-avatar{\
	 background: url(\'http://media.disqus.com/images/embed/avatar-frame-32.png\') no-repeat top left;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-header {\
	 background: url(\'http://media.disqus.com/images/embed/header-grey.png\') repeat-x;\
	 height: 30px;\
	 line-height: 30px;\
	 height: 38px;\
	 line-height: 38px;\
	 }\
	 #dsq-content {\
	 font-size: 13px;\
	 }\
	 img.dsq-record-img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 vertical-align: text-bottom;\
	 }\
	 a.dsq-brlink {\
	 font-size: 10px;\
	 color: #666;\
	 text-decoration: none;\
	 font-family: Trebuchet MS, Trebuchet, Verdana, Arial, sans-serif;\
	 }\
	 span.disqus {\
	 font-family: Trebuchet MS, Trebuchet, Verdana, Arial, sans-serif;\
	 font-size: 90%;\
	 text-transform: uppercase;\
	 color: #64747d;\
	 }\
	 span.logo-disqus {\
	 font-family: Trebuchet MS, Trebuchet, Verdana, Arial, sans-serif;\
	 font-size: 95%;\
	 text-transform: uppercase;\
	 font-weight: bold;\
	 }\
	 span.logo-disqus.color {\
	 color: #64747d;\
	 }\
	 span.logo-disq {\
	 font-family: Trebuchet MS, Trebuchet, Verdana, Arial, sans-serif;\
	 font-size: 95%;\
	 text-transform: uppercase;\
	 color: #64747d;\
	 font-weight: bold;\
	 }\
	 span.logo-us {\
	 font-family: Trebuchet MS, Trebuchet, Verdana, Arial, sans-serif;\
	 font-size: 95%;\
	 text-transform: uppercase;\
	 color: #ff9300;\
	 font-weight: bold;\
	 }\
	 span.dsq-downtri {\
	 font-size: 70%;\
	 }\
	 a.dsq-help {\
	 color: inherit;\
	 text-decoration: none !important;\
	 border-color: inherit !important;\
	 border-bottom-width: 1px !important;\
	 border-bottom-style: dotted !important;\
	 cursor: help !important;\
	 }\
	 #dsq-content #dsq-comments .dsq-editedtxt {\
	 margin-top: 15px;\
	 font-style: italic;\
	 font-size: 85%;\
	 opacity: .80;\
	 filter: alpha(opacity=80);\
	 }\
	 #dsq-content #dsq-comments .dsq-likedtxt {\
	 font-size: 85%;\
	 text-align: right;\
	 opacity: .80;\
	 filter: alpha(opacity=80);\
	 }\
	 #dsq-content small {\
	 font-size: .7em;\
	 }\
	 #disqus_thread #dsq-content iframe.dsq-post-reply,\
	 #dsq-popup-alert iframe.dsq-post-reply {\
	 height: 300px;\
	 }\
	 #disqus_thread #dsq-content iframe.dsq-post-reply-authenticated,\
	 #dsq-popup-alert iframe.dsq-post-reply-authenticated {\
	 height: 170px;\
	 }\
	 .clearfix:after {\
	 content:".";\
	 display: block;\
	 height: 0;\
	 clear: both;\
	 visibility: hidden;\
	 }\
	 #dsq-content #dsq-comments img.icon-adjust {\
	 margin-bottom: -3px;\
	 }\
	 #dsq-content #dsq-comments img.dsq-mod-star {\
	 vertical-align: middle;\
	 _float: left;\
	 _margin-top: 5px;\
	 }\
	 #disqus_thread #dsq-content ul,\
	 #disqus_thread #dsq-content li,\
	 #disqus_thread #dsq-content ol,\
	 #disqus_thread #dsq-content cite,\
	 #disqus_thread #dsq-content img, /* dsq-content */\
	 #dsq-content #dsq-comments ul,\
	 #dsq-content #dsq-comments li,\
	 #dsq-content #dsq-comments ol,\
	 #dsq-content #dsq-comments div,\
	 #dsq-content #dsq-comments p,\
	 #dsq-content #dsq-comments a,\
	 #dsq-content #dsq-comments cite,\
	 #dsq-content #dsq-comments img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 }\
	 #disqus_thread #dsq-content cite,\
	 #dsq-content #dsq-comments cite {\
	 font-style: normal;\
	 }\
	 #dsq-content #dsq-comments img {\
	 max-width: none;\
	 }\
	 #disqus_thread #dsq-content li,\
	 #disqus_thread #dsq-content ul,\
	 #disqus_thread #dsq-content ol,\
	 #dsq-content #dsq-extra-links li,\
	 #dsq-content #dsq-comments ul,\
	 #dsq-content #dsq-comments li,\
	 #dsq-content #dsq-comments ol {\
	 list-style-type: none;\
	 list-style-image: none;\
	 background: none;\
	 display: block;\
	 }\
	 #dsq-content #dsq-extra-links li:before,\
	 #dsq-content #dsq-comments li:before {\
	 content: "";\
	 }\
	 #dsq-content #dsq-comments {\
	 width: 100%;\
	 list-style-type: none;\
	 padding: 0;\
	 border: 0;\
	 }\
	 #dsq-content #dsq-comments .dsq-remove-message {\
	 color: #555;\
	 list-style-type: none;\
	 margin: 10px 0;\
	 padding: 5px;\
	 border: 1px solid #c03000;\
	 background-color: #FDDFD0;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-alert,\
	 #dsq-content #dsq-alerts p {\
	 font-weight: bold;\
	 color: #555;\
	 margin: 15px 0;\
	 padding: 5px;\
	 background-color: #fdf1d0;\
	 border: 1px solid #fad163;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-header .dsq-hl-up {\
	 background-color: #92C72A;\
	 color: #fff;\
	 margin:0pt 5px;\
	 padding:0 2px;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-header .dsq-hl-down {\
	 background-color: #c03000;\
	 color: #fff;\
	 margin:0pt 5px;\
	 padding:0 2px;\
	 }\
	 #dsq-content #dsq-comments .dsq-hl-anchor {\
	 background-color: #ffff99 !important;\
	 color: #000 !important;\
	 }\
	 #dsq-content #dsq-comments .dsq-hl-anchor p {\
	 color: #000 !important;\
	 }\
	 #dsq-content #dsq-comments .dsq-hl-anchor a {\
	 color: #000 !important;\
	 }\
	 #dsq-content h3#dsq-comments-count {\
	 width: 99%;\
	 }\
	 /**\
	 * Misc Items\
	 */\
	 #dsq-content .dsq-item-feed a {\
	 text-decoration: none;\
	 }\
	 /**\
	 * Auth Header\
	 */\
	 #dsq-content #dsq-auth .dsq-auth-header{\
	 margin-bottom: 10px;\
	 width: 99%;\
	 }\
	 #dsq-content #dsq-auth .dsq-authenticated {\
	 margin-bottom: 10px;\
	 display: none;\
	 height: auto;\
	 overflow: hidden;\
	 }\
	 #dsq-content #dsq-auth .dsq-authenticated-pic {\
	 float: left;\
	 }\
	 #dsq-content #dsq-auth .dsq-authenticated-pic img {\
	 height: 48px;\
	 width: 48px;\
	 }\
	 #dsq-content #dsq-auth .dsq-authenticated-info {\
	 float: left;\
	 }\
	 #dsq-content #dsq-auth .dsq-authenticated-info ul {\
	 padding: 0 0 0 5px;\
	 margin: 0;\
	 list-style-type:none;\
	 }\
	 #dsq-content #dsq-auth .dsq-authenticated-info ul li {\
	 margin-bottom: 5px;\
	 }\
	 #dsq-content #dsq-auth .dsq-authenticated-info ul li.logout {\
	 font-size: 0.8em;\
	 }\
	 #dsq-content #dsq-auth .dsq-authenticated-info ul li.logout a {\
	 text-decoration: none;\
	 }\
	 #dsq-content #dsq-auth .dsq-authenticated-info ul li.logout img {\
	 margin-bottom: -2px;\
	 }\
	 #dsq-content h3 { margin: 10px 0; }\
	 #disqus_thread #dsq-content h3 {\
	 font-weight: bold;\
	 }\
	 #dsq-content #dsq-auth.dsq-auth-bottom {\
	 margin-top: 20px;\
	 }\
	 #dsq-content .dsq-by {\
	 float: right;\
	 }\
	 #dsq-content #dsq-login {\
	 float: none;\
	 }\
	 #dsq-content #dsq-login .dsq-login-message {\
	 margin-bottom: 10px;\
	 }\
	 #dsq-content #dsq-comments .dsq-login-icon {\
	 margin-bottom: -2px;\
	 }\
	 #dsq-content .dsq-auth-header img,\
	 #dsq-content #dsq-options-toggle img {\
	 border: 0;\
	 margin: 0;\
	 padding: 0;\
	 max-width: none;\
	 float: none;\
	 }\
	 #dsq-content #dsq-options {\
	 margin-bottom: 20px;\
	 }\
	 #dsq-options .dsq-extra-meta {\
	 background: transparent url(\'http://media.disqus.com/images/embed/transp-line-10.png\') repeat-x top center;\
	 margin-top:10px;\
	 padding-top:10px;\
	 }\
	 #dsq-extra-links {\
	 margin-top: 15px;\
	 font-size: 90%;\
	 }\
	 #dsq-extra-links img {\
	 margin-bottom: -3px;\
	 }\
	 /**\
	 * Reply bar\
	 */\
	 #dsq-content #dsq-comments .dsq-reply-bar {\
	 margin: 15px 0;\
	 }\
	 #dsq-content #dsq-comments .dsq-reply-bar img {\
	 margin-bottom: -2px;\
	 }\
	 #dsq-content #dsq-comments a.dsq-reply-req-opt {\
	 font-size: 100%;\
	 margin-right: 5px;\
	 opacity: .80;\
	 filter: alpha(opacity=80);\
	 }\
	 #dsq-content #dsq-comments .dsq-reply-bar-items {\
	 float: right;\
	 }\
	 #dsq-content #dsq-comments .dsq-reply-bar-auth {\
	 font-size: .9em;\
	 }\
	 #dsq-content #dsq-comments .dsq-reply-bar-auth .dsq-no-anon-msg {\
	 margin: 5px 0 2px 0;\
	 }\
	 #dsq-content #dsq-comments .dsq-reply-bar-auth img.dsq-post-avatar {\
	 height: 24px;\
	 width: 24px;\
	 }\
	 #dsq-content #dsq-auth ul.dsq-media-items li,\
	 #dsq-content #dsq-comments ul.dsq-media-items li {\
	 display: inline;\
	 font-size: .90em;\
	 }\
	 /**\
	 * Pagination\
	 */\
	 #dsq-content #dsq-pagination {\
	 margin: 20px 0;\
	 }\
	 #dsq-content #dsq-pagination a {\
	 font-weight: bold;\
	 }\
	 #dsq-content #dsq-pagination a,\
	 #dsq-content #dsq-pagination span {\
	 margin-right: 5px;\
	 }\
	 #dsq-content #dsq-pagination span.dsq-paginate-ellipsis {\
	 font-size: 110%;\
	 }\
	 #dsq-content #dsq-pagination a.dsq-paginate-arrows span {\
	 margin: 0;\
	 padding: 0;\
	 font-family: Lucida Sans Unicode, sans-serif;\
	 }\
	 #dsq-content .dsq-paginate-append-text { display: inline; }\
	 #dsq-content .dsq-paginate-append-button { display: none; }\
	 /**\
	 * Badges\
	 */\
	 span.dsq-badge {\
	 font-family: Optima, Lucida Grande, Lucida Sans, Helvetica, Arial, sans-serif;\
	 padding: 2px 4px;\
	 -moz-border-radius: 0px 5px 0px 5px;\
	 -webkit-border-top-right-radius: 5px;\
	 -webkit-border-bottom-left-radius: 5px;\
	 vertical-align: middle;\
	 }\
	 span.dsq-badge.dsq-badge-verified {\
	 background-color: #92C72A;\
	 border: 1px solid #6ca300;\
	 color: #fff;\
	 }\
	 span.dsq-badge.dsq-badge-registered {\
	 background-color: #fffe98;\
	 border: 1px solid #eae800;\
	 color: #000;\
	 }\
	 span.dsq-badge-verified,\
	 span.dsq-badge-registered,\
	 span.dsq-badge-guest,\
	 span.dsq-badge-facebook,\
	 span.dsq-badge-twitter,\
	 span.dsq-badge-openid {\
	 font-family: Optima, Lucida Grande, Lucida Sans, Helvetica, Arial, sans-serif;\
	 padding: 2px 4px;\
	 -moz-border-radius: 0px 5px 0px 5px;\
	 -webkit-border-top-right-radius: 5px;\
	 -webkit-border-bottom-left-radius: 5px;\
	 vertical-align: middle;\
	 }\
	 span.dsq-badge-verified {\
	 background-color: #92C72A;\
	 border: 1px solid #6ca300;\
	 color: #fff;\
	 }\
	 span.dsq-badge-registered {\
	 background-color: #fffe98;\
	 border: 1px solid #eae800;\
	 color: #000;\
	 }\
	 span.dsq-badge-guest {\
	 background-color: #ddd;\
	 border: 1px solid #ccc;\
	 color: #333;\
	 }\
	 span.dsq-badge-facebook {\
	 background-color: #46639d;\
	 color: #fff;\
	 }\
	 span.dsq-badge-twitter {\
	 background-color: #31ceff;\
	 color: #fff;\
	 }\
	 span.dsq-badge-openid {\
	 background-color: #f9f9f9;\
	 border: 1px solid #aaa;\
	 color: #f7931e;\
	 }\
	 /**\
	 * OpenID\
	 */\
	 table.dsq-openid-form {\
	 margin-left: 10px;\
	 margin-bottom: 20px;\
	 }\
	 table.dsq-openid-form img {\
	 width: 50px;\
	 height: 50px;\
	 margin-right: 10px;\
	 }\
	 table.dsq-openid-form td.dsq-openid-submit {\
	 padding-top: 5px;\
	 text-align: right;\
	 }\
	 /**\
	 * Linkbacks\
	 */\
	 #dsq-content span.dsq-item-trackback {\
	 margin: 15px 0;\
	 }\
	 #dsq-content input.dsq-trackback-url {\
	 width: 150px;\
	 font-size: 10px;\
	 color: #666;\
	 }\
	 #disqus_thread #dsq-content ul#dsq-references li {\
	 margin-bottom: 20px;\
	 display: list-item;\
	 list-style: disc;\
	 margin-left: 15px;\
	 }\
	 #disqus_thread #dsq-content ul#dsq-references cite {\
	 margin-bottom: 0px;\
	 padding-bottom: 0px;\
	 font-weight: bold;\
	 }\
	 #disqus_thread #dsq-content ul#dsq-references p.dsq-meta {\
	 margin-top: 0px;\
	 padding-top: 0px;\
	 font-size: 95%;\
	 }\
	 /* Reactions */\
	 #disqus_thread #dsq-content li.dsq-reaction {\
	 padding: 0;\
	 margin: 0;\
	 border: 0;\
	 list-style-type: none;\
	 margin-left: 0px;\
	 color: #000;\
	 margin-bottom: 20px;\
	 }\
	 #disqus_thread #dsq-content li.dsq-reaction:before {\
	 content: "";\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction-header {\
	 background: url(\'http://media.disqus.com/images/embed/header-grey.png\') repeat-x;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction-header a {\
	 text-decoration: none;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction .dsq-header-avatar {\
	 position: relative;\
	 margin-top: 2px;\
	 float: left;\
	 height: 32px;\
	 width: 32px;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction .dsq-header-avatar img {\
	 float: left;\
	 width: 32px;\
	 height: 32px;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction .dsq-header-avatar img.dsq-service-icon {\
	 width: 12px;\
	 height: 12px;\
	 position: relative;\
	 margin-top: -12px;\
	 margin-left: 20px;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction-header cite {\
	 float: left;\
	 font-style: normal;\
	 font-weight: bold;\
	 margin: 0 5px;\
	 line-height: inherit;\
	 cursor: pointer;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction-header cite a {\
	 line-height: inherit;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction-header .dsq-header-meta {\
	 font-size: 90%;\
	 line-height: inherit;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction a.dsq-header-time {\
	 margin: 0 5px;\
	 color: inherit;\
	 line-height: inherit;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction-body {\
	 clear: left;\
	 padding-top: 5px;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction-footer {\
	 opacity: .35;\
	 filter: alpha(opacity=35);\
	 font-size: 90%;\
	 margin: 5px 0 0 0px;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction-footer a {\
	 color: inherit;\
	 text-decoration: none;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction-footer a:hover {\
	 text-decoration: underline;\
	 }\
	 #disqus_thread #dsq-content .dsq-reaction-retweets {\
	 border-left: solid 5px #666;\
	 margin-top: 10px;\
	 padding-left: 5px;\
	 }\
	 #disqus_thread #dsq-content .dsq-service-name {\
	 text-transform: capitalize;\
	 }\
	 #disqus_thread #dsq-content li#dsq-show-more-reactions {\
	 text-align: center;\
	 }\
	 /**\
	 * Introduced in Embed 2.0\
	 */\
	 #dsq-content #dsq-comments .dsq-comment-footer {\
	 height: auto;\
	 overflow: hidden;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-options {\
	 float: right;\
	 list-style: none;\
	 }\
	 #dsq-content #dsq-comments ul.dsq-list-style li {\
	 display: inline;\
	 background-image: url(http://media.disqus.com/images/middot.png);\
	 _background-image: url(http://media.disqus.com/images/middot.gif);\
	 background-repeat: no-repeat;\
	 background-position: 0 50%;\
	 padding-left: 1.6em;\
	 }\
	 #dsq-content #dsq-comments ul.dsq-list-style li.dsq-list-first {\
	 background: none;\
	 padding: 0;\
	 }\
	 /**\
	 * Reactions\
	 */\
	 #disqus_thread #dsq-content ul#dsq-reactions li.dsq-reaction {\
	 padding: 0;\
	 margin: 0;\
	 border: 0;\
	 list-style-type: none;\
	 margin-left: 0px;\
	 color: #000;\
	 margin-bottom: 20px;\
	 }\
	 #dsq-content ul#dsq-reactions .dsq-reaction-header {\
	 background: url(\'http://media.disqus.com/images/embed/header-grey.png\') repeat-x;\
	 height: 38px;\
	 line-height: 38px;\
	 *overflow-y: hidden;\
	 }\
	 #dsq-content ul#dsq-reactions .dsq-reaction-header a {\
	 text-decoration: none;\
	 }\
	 #dsq-content ul#dsq-reactions .dsq-header-avatar {\
	 position: relative;\
	 float: left;\
	 margin-top: 2px;\
	 height: 35px;\
	 width: 40px;\
	 }\
	 #dsq-content ul#dsq-reactions .dsq-header-avatar img {\
	 float: left;\
	 width: 32px;\
	 height: 32px;\
	 }\
	 #dsq-content ul#dsq-reactions .dsq-header-avatar img.dsq-service-icon {\
	 width: 12px;\
	 height: 12px;\
	 position: relative;\
	 margin-top: -12px;\
	 margin-left: 20px;\
	 }\
	 #dsq-content ul#dsq-reactions .dsq-reaction-header cite {\
	 float: left;\
	 font-style: normal;\
	 font-weight: bold;\
	 margin: 0 3px 0 5px;\
	 line-height: inherit;\
	 cursor: pointer;\
	 }\
	 #dsq-content ul#dsq-reactions .dsq-reaction-header cite a {\
	 line-height: inherit;\
	 }\
	 #dsq-content ul#dsq-reactions .dsq-reaction-header .dsq-header-meta {\
	 font-size: 90%;\
	 float: left;\
	 line-height: inherit;\
	 }\
	 #dsq-content ul#dsq-reactions a.dsq-header-time {\
	 margin: 0 5px;\
	 color: inherit;\
	 line-height: inherit;\
	 }\
	 #dsq-content ul#dsq-reactions .dsq-reaction-body {\
	 clear: both;\
	 padding-top: 5px;\
	 }\
	 #dsq-content ul#dsq-reactions .dsq-reaction-footer {\
	 font-size: 90%;\
	 margin: 5px 0 0 0px;\
	 }\
	 /*-----\
	 Comments (comments-1.css)\
	 -----*/\
	 #dsq-content #dsq-comments .dsq-comment {\
	 list-style-type: none;\
	 padding: 0;\
	 margin: 0;\
	 border: 0;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment {\
	 margin-bottom: 20px;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-rate {\
	 float: left;\
	 line-height: 1.22em;\
	 *margin-top: 15px;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-rate a,\
	 #dsq-content #dsq-comments .dsq-comment-rate img {\
	 border: 0;\
	 margin: 0;\
	 padding: 0;\
	 background-color: transparent;\
	 }\
	 #dsq-content #dsq-comments .dsq-arrows,\
	 #dsq-content #dsq-comments .not-votable .dsq-arrows:hover {\
	 opacity: .25;\
	 filter: alpha(opacity=25);\
	 _width: 16px;\
	 _height: 14px;\
	 }\\\
	 #dsq-content #dsq-comments .dsq-arrows.voted {\
	 opacity: .5;\
	 filter: alpha(opacity=50);\
	 }\
	 #dsq-content #dsq-comments .dsq-arrows:hover {\
	 opacity: 1;\
	 filter: alpha(opacity=100);\
	 }\
	 #dsq-content #dsq-comments .dsq-arrows img {\
	 _width: 16px;\
	 _height: 14px;\
	 }\
	 #disqus_thread #dsq-content #dsq-comments .dsq-header-avatar {\
	 position: relative;\
	 float: left;\
	 margin-top: -2px;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment.special .dsq-comment-header {\
	 background: url(\'http://media.disqus.com/images/embed/header-blue.png\') repeat-x;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-header a {\
	 text-decoration: none;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-header cite {\
	 float: left;\
	 font-style: normal;\
	 font-weight: bold;\
	 margin: 0 3px;\
	 line-height: inherit;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-header cite a {\
	 line-height: inherit;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-header .dsq-header-meta {\
	 font-size: 90%;\
	 line-height: inherit;\
	 }\
	 #dsq-content #dsq-comments a.dsq-header-time{\
	 margin: 0 5px;\
	 color: inherit;\
	 line-height: inherit;\
	 }\
	 #dsq-content #dsq-comments span.dsq-header-points{\
	 margin: 0 5px;\
	 color: inherit;\
	 line-height: inherit;\
	 }\
	 #dsq-content #dsq-comments .dsq-comment-footer {\
	 font-size: 90%;\
	 margin: 10px 0 0 0;\
	 }\
	 #dsq-content #dsq-comments .dsq-footer-alert {\
	 text-align: right;\
	 }\
	 </style>\
	');
}



var DsqLoader = new function() {
	this.initInterval = null;

	this.addLoadEvent = function(func) {
		var oldonload = window.onload;
		if(typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
				if (oldonload) {
					oldonload();
				}
				func();
			}
		}
	};

	this.init = function() {
		// For IE: Dsq may not be loaded even on window.onload.
		if(typeof Dsq == 'undefined') {
			if(!DsqLoader.initInterval) {
				DsqLoader.initInterval = window.setInterval(DsqLoader.init, 500);
			}
			return;
		}
		if(DsqLoader.initInterval) {
			window.clearInterval(DsqLoader.initInterval);
		}

		Dsq.Thread.highlightAnchor();
		if(Dsq.Utils.ie) { Dsq.Utils.fixIframesIE(); }
	};

	this.addLoadEvent(this.init);
};
