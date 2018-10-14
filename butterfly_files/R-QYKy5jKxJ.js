if (self.CavalryLogger) { CavalryLogger.start_js(["ZycPl"]); }

__d("ODSJSErrorLogger",["BanzaiODS","ErrorUtils"],(function(a,b,c,d,e,f){var g=!1;a={init:function(a){if(g)return;g=!0;b("ErrorUtils").addListener(function(){b("BanzaiODS").bumpEntityKey("web_speed.jserror","hrm."+a)})}};e.exports=a}),null);