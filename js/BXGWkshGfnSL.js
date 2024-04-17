(function(){


var panda_translate_function = function($){
	
  var shop_name = Shopify.shop;
  var PATHTOAPP = 'https://pandaapps.in/apps/languagepanda';

  $.getScript(PATHTOAPP+"/getstoreinfo.php?shop="+shop_name, function( data, textStatus, jqxhr ) {

    if(language_onoff == 1){ //true

      if($(".panda_translate_element").length){
        $(".panda_translate_element").addClass(language_style +' flag-'+flagsize);
      }else if($("#google_translate_element").length || $("#desktopLanguage").length){
		  $('#google_translate_element, #desktopLanguage').append('<div class="panda_translate_element notranslate '+language_style+' flag-'+flagsize+'"></div>');
	  }else{
        $('body').append('<div class="panda_translate_element notranslate '+language_style+' position_'+language_position+' flag-'+flagsize+'"></div>');
      }

      $("head").append('<link rel="stylesheet" href="'+PATHTOAPP+'/dist/css/languagepanda-style.css" type="text/css" />');
      $("head").append('<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>');
	  
	  $(".panda_translate_element").empty();//Clear DIV to avoid multiple load.

      if(language_style == 'style_1'){

        if(translatelang == 0){ //all language
          var __function = function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: translate_from}, 'google_translate_element3');
          }
          }else{
            var __function = function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: translate_from, includedLanguages: specific_languages, multilanguagePage: true}, 'google_translate_element3');
            }
          }
		
        $('.panda_translate_element').append('<div class="pandaswitcher notranslate">'+htmlcode+'</div><div id="google_translate_element3"></div>');
		
		function PandaGetSelectedLang() {var keyValue = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)'); return keyValue ? keyValue[2].split('/')[1]+'|'+keyValue[2].split('/')[2] : null;}
		if(typeof PandaGetSelectedLang == 'function')if(PandaGetSelectedLang() != null)$("#langbox").val(PandaGetSelectedLang());

      }else if(language_style == 'style_2'){
		
		$('.panda_translate_element').append('<div id="pandaswitcher" class="notranslate"></div>');

        if(translatelang == 0){ //all language
			  var __function = function googleTranslateElementInit() {
				new google.translate.TranslateElement({pageLanguage: translate_from, layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'pandaswitcher');
			  }
          }else{
            var __function = function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: translate_from, includedLanguages: specific_languages, multilanguagePage: true, layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'pandaswitcher');
            }
          }
      }else if(language_style == 'style_3'){

        var __function = function googleTranslateElementInit() {
          new google.translate.TranslateElement({pageLanguage: translate_from}, 'google_translate_element3');
        };

		$('.panda_translate_element').append('<div class="pandaswitcher notranslate">'+htmlcode+'</div><div id="google_translate_element3"></div>');

        function GTranslateGetCurrentLang() {var keyValue = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');return keyValue ? keyValue[2].split('/')[2] : null;}
        function gt_loadScript(url,callback){var script=document.createElement("script");script.type="text/javascript";if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;callback()}}}else{script.onload=function(){callback()}}script.src=url;document.getElementsByTagName("head")[0].appendChild(script)}
        var gtSwitcherJS = function($){
          $('.pandaswitcher .selected').click(function() {$('.pandaswitcher .option a img').each(function() {if(!$(this)[0].hasAttribute('src'))$(this).attr('src', $(this).attr('data-gt-lazy-src'))});if(!($('.pandaswitcher .option').is(':visible'))) {$('.pandaswitcher .option').stop(true,true).delay(10).slideDown(100);$('.pandaswitcher .selected a').toggleClass('open')}});
          $('.pandaswitcher .option').bind('mousewheel', function(e) {var options = $('.pandaswitcher .option');if(options.is(':visible'))options.scrollTop(options.scrollTop() - e.originalEvent.wheelDelta);return false;});
          $('body').not('.pandaswitcher').bind('click', function(e) {if($('.pandaswitcher .option').is(':visible') && e.target != $('.pandaswitcher .option').get(0)) {$('.pandaswitcher .option').stop(true,true).delay(10).slideUp(100);$('.pandaswitcher .selected a').toggleClass('open')}});
          if(typeof GTranslateGetCurrentLang == 'function')if(GTranslateGetCurrentLang() != null)$(document).ready(function() {var lang_html = $('div.pandaswitcher div.option').find('img[alt="'+GTranslateGetCurrentLang()+'"]').parent().html();if(typeof lang_html != 'undefined')$('div.pandaswitcher div.selected a').html(lang_html.replace('data-gt-lazy-', ''));});
        };
        gt_loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js", function(){jQuery_gtranslate = jQuery.noConflict(true);gtSwitcherJS(jQuery_gtranslate);});


      }else if(language_style == 'style_4'){

        var __function = function googleTranslateElementInit() {
          new google.translate.TranslateElement({pageLanguage: translate_from}, 'google_translate_element3');
        }

		$('.panda_translate_element').append('<div class="pandaswitcher notranslate">'+htmlcode+'</div><div id="google_translate_element3"></div>');

        function GTranslateGetCurrentLang() {var keyValue = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');return keyValue ? keyValue[2].split('/')[2] : null;}
        function gt_loadScript(url,callback){var script=document.createElement("script");script.type="text/javascript";if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;callback()}}}else{script.onload=function(){callback()}}script.src=url;document.getElementsByTagName("head")[0].appendChild(script)}
        var gtSwitcherJS = function($){
          window.openGTPopup = function(a) {$('.gt_white_content a img').each(function() {if(!$(this)[0].hasAttribute('src'))$(this).attr('src', $(this).attr('data-gt-lazy-src'))});if(a === undefined){document.getElementById('gt_lightbox').style.display='block';document.getElementById('gt_fade').style.display='block';}else{$(a).parent().find('#gt_lightbox').css('display', 'block');$(a).parent().find('#gt_fade').css('display', 'block');}}
          window.closeGTPopup = function() {$('.gt_white_content').css('display', 'none');$('.gt_black_overlay').css('display', 'none');}
          window.changeGTLanguage = function(pair, a) {doPandaTranslate(pair);$('a.pandaswitcher-popup').html($(a).html()+'<span style="color:#666;font-size:8px;font-weight:bold;">▼</span>');closeGTPopup();}
          $('.gt_black_overlay').click(function(e) {if($('.gt_white_content').is(':visible')) {closeGTPopup()}});
          if(typeof GTranslateGetCurrentLang == "function")if(GTranslateGetCurrentLang() != null)$(document).ready(function() {var lang_html = $(".gt_languages a[onclick*='|"+GTranslateGetCurrentLang()+"']").html();if(typeof lang_html != "undefined")$('a.pandaswitcher-popup').html(lang_html.replace("data-gt-lazy-", "")+'<span style="color:#666;font-size:8px;font-weight:bold;">▼</span>');});
        };
        gt_loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js", function(){jQuery_gtranslate = jQuery.noConflict(true);gtSwitcherJS(jQuery_gtranslate);});


      }else{

        var __function = function googleTranslateElementInit() {
          new google.translate.TranslateElement({pageLanguage: translate_from}, 'google_translate_element3');
        };

		$('.panda_translate_element').append('<div class="pandaswitcher notranslate">'+htmlcode+'</div><div id="google_translate_element3"></div>');
      }

      var script = document.createElement("script");
      script.type="text/javascript";
      script.innerHTML= __function;
      document.getElementsByTagName('head')[0].appendChild(script);
	  
    }
  });
  
}

var loadScript = function(url, callback)
  {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState){ 
          script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete"){
              script.onreadystatechange = null;
              callback();
            }
          };
        } else {
          script.onload = function(){
            callback();
          };
        }
      script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
  };

if ((typeof jQuery === 'undefined') || (parseInt(jQuery.fn.jquery) === 1 && parseFloat(jQuery.fn.jquery.replace(/^1\./,"")) < 9.1)) {
      loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function(){
      jQuery191 = jQuery.noConflict(true);
      panda_translate_function(jQuery191);
    });
  } else {
     panda_translate_function(jQuery);
  }

})();

//Global Function
if(typeof GTranslateGetCurrentLang != 'function')function GTranslateGetCurrentLang() {var keyValue = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');return keyValue ? keyValue[2].split('/')[2] : null;}
function GTranslateFireEvent(element,event){try{if(document.createEventObject){var evt=document.createEventObject();element.fireEvent('on'+event,evt)}else{var evt=document.createEvent('HTMLEvents');evt.initEvent(event,true,true);element.dispatchEvent(evt)}}catch(e){}}
function doPandaTranslate(lang_pair){if(lang_pair.value)lang_pair=lang_pair.value;if(lang_pair=='')return;var lang=lang_pair.split('|')[1];if(GTranslateGetCurrentLang() == null && lang == lang_pair.split('|')[0])return;if(typeof ga!='undefined'){ga('send', 'event', 'GTranslate', lang, location.hostname+location.pathname+location.search);}else{if(typeof _gaq!='undefined')_gaq.push(['_trackEvent', 'GTranslate', lang, location.hostname+location.pathname+location.search]);}var teCombo;var sel=document.getElementsByTagName('select');for(var i=0;i<sel.length;i++)if(sel[i].className=='goog-te-combo')teCombo=sel[i];if(document.getElementById('google_translate_element3')==null||document.getElementById('google_translate_element3').innerHTML.length==0||teCombo.length==0||teCombo.innerHTML.length==0){setTimeout(function(){doPandaTranslate(lang_pair)},500)}else{teCombo.value=lang;GTranslateFireEvent(teCombo,'change');GTranslateFireEvent(teCombo,'change')}}