(function(a,d){var c=function(){};var b=null;c.getInstance=function(){if(b==null){b=new c()}return b};c.prototype.init=function(){if(!initedGTM){str_GTMTrackingKey="GTM-K74X66";productKey=str_GTMTrackingKey;initGTM()}};window.POINTCUTID={};POINTCUTID.GAMELAUNCH=0;POINTCUTID.LEVELSTART=1;POINTCUTID.LEVELCOMPLETION=2;POINTCUTID.LEVELPAIL=3;POINTCUTID.GAMERETENTION=4;POINTCUTID.FOOTERADS=5;POINTCUTID.MAINMENU=6;c.prototype.push=function(){if(arguments){var f=arguments[0];var e=0;switch(f){case POINTCUTID.GAMELAUNCH:break;case POINTCUTID.LEVELSTART:dataLayer.push({event:"ga_event",ga_category:"Gamepage",ga_action:"Start",ga_label:window.productTitle,ga_noninteraction:false});break;case POINTCUTID.LEVELCOMPLETION:dataLayer.push({event:"ga_event",ga_category:"Gamepage",ga_action:"Completion",ga_label:window.productTitle,ga_noninteraction:false});break;case POINTCUTID.LEVELPAIL:dataLayer.push({event:"ga_event",ga_category:"Gamepage",ga_action:"Completion",ga_label:window.productTitle,ga_noninteraction:false});break;case POINTCUTID.GAMERETENTION:dataLayer.push({event:"ga_event",ga_category:"Gamepage",ga_action:"Return",ga_label:window.productTitle,ga_noninteraction:true,days:""+arguments[++e]});break;case POINTCUTID.MAINMENU:dataLayer.push({event:"ga_event",ga_category:"Gamepage",ga_action:"Main Menu",ga_label:window.productTitle,ga_noninteraction:true});break;case POINTCUTID.FOOTERADS:break;default:Dbg("Eventid not found");break}}};LowAPI.extendObject(a,{GGTracking:c,},true)}(window));