(function(A,h){window.s_keyState=null;window.s_keyStateRT=null;var z=-9999;var u;var b;window.s_game_keyJustPressed=-1;window.s_game_keyPressedTime=0;var e;var r;var f;var o;var y;var l;var j=-9999;var q=0;var i=null;var k=null;window.s_nbKey=GLKey.k_nbKey;GLLib.prototype.SetupDefaultKey=function(){this.Game_KeyClearKeyCode();for(var B=0;B<s_nbKey;B++){i.put(B,B)}};GLLib.prototype.keyPressed=function(D){if(GLLibConfig.useBugFixMultipleKeyPressed){if(j!=D&&j!=-9999){this.keyReleased(j)}j=D}if(GLLibConfig.useKeyAccumulation){z=D;var C=this.Game_TranslateKeyCode(D);if(s_keyStateRT==null){return}if(s_keyStateRT[C]>0){return}if(s_keyStateRT[C]<0){s_keyStateRT[C]=0}if(s_keyStateRT[C]<126){s_keyStateRT[C]++}}else{z=D;var B=1<<this.Game_TranslateKeyCode(D);y|=B;o|=B}};GLLib.prototype.keyReleased=function(D){if(GLLibConfig.useBugFixMultipleKeyPressed){if(D==j){j=-9999}}if(GLLibConfig.useKeyAccumulation){var C=this.Game_TranslateKeyCode(D);if(s_keyStateRT==null){return}if(s_keyStateRT[C]>0){s_keyStateRT[C]*=-1}}else{var B=(1<<this.Game_TranslateKeyCode(D));l|=B;o&=~B}};GLLib.prototype.UpdateKeypad=function(){if(GLLibConfig.useKeyAccumulation){b=-1;s_game_keyJustPressed=-1;for(var B=0;B<s_nbKey;B++){s_keyState[B]=s_keyStateRT[B];if(s_keyStateRT[B]!=0){b=B;if(s_keyStateRT[B]<0){s_keyStateRT[B]=0}else{if(s_keyStateRT[B]<126){if(s_keyStateRT[B]==1){s_game_keyJustPressed=B;s_game_keyPressedTime=s_game_timeWhenFrameStart}s_keyStateRT[B]++;if(!GLLibConfig.useSoftKeyAccumulation&&B>=GLKey.k_menuOK){s_keyStateRT[B]*=-1}}}}}}else{e=y;r=l;f=o;y=0;l=0;s_game_keyPressedTime=s_game_timeWhenFrameStart}if(q>0){if(GLLibConfig.useFrameDT&&(q!=Integer.MAX_VALUE)){q-=s_game_frameDT}m()}};GLLib.prototype.Game_KeyClearKeyCode=function(){k=new Hashtable(s_nbKey);i=new Hashtable(s_nbKey)};function v(E,G,D){var C=null;var F=G;if(E){C=k}else{C=i}var B=C.get(F);if(B!=null){C.remove(F)}C.put(F,D)}GLLib.prototype.Game_TranslateKeyCode=function(D){if((GLLibConfig.useAbsoluteValueOfKeyCode)&&(D<0)){D*=-1}var B=D;if(i==null){return 0}var C=i.get(B);if(C!=null){return C}C=k.get(B);if(C!=null){return C}return GLKey.k_dummy};function m(){if(GLLibConfig.useKeyAccumulation){if((s_keyState!=null)&&(s_keyStateRT!=null)){for(var B=0;B<s_nbKey;B++){s_keyState[B]=0;s_keyStateRT[B]=0}}}else{e=0;r=0;f=0;o=0;y=0;l=0}}function w(B){if(GLLibConfig.useKeyAccumulation){s_keyState[B]=0;s_keyStateRT[B]=0}else{if((f&(1<<B))!=0){e=0;r=0;f=0;o=0;y=0;l=0}}}function n(){if(GLLibConfig.useKeyAccumulation){for(var B=s_nbKey;--B>=0;){if(s_keyState[B]>0){return B}}return GLKey.k_invalid}else{for(var B=s_nbKey;--B>=0;){if((f&(1<<B))!=0){return B}}return GLKey.k_invalid}}function x(B){if(GLLibConfig.useKeyAccumulation){return(s_keyState[B]>0)}else{return(f&(1<<B))!=0}}function d(B){if(GLLibConfig.useKeyAccumulation){return(s_keyState[B]<=0)}else{return(f&(1<<B))==0}}function g(){if(GLLibConfig.useKeyAccumulation){for(var B=s_nbKey;--B>=0;){if(s_keyState[B]==1){return B}}return GLKey.k_invalid}else{if(e==0){return GLKey.k_invalid}for(var B=s_nbKey;--B>=0;){if((e&(1<<B))!=0){return B}}return GLKey.k_invalid}}function t(){if(GLLibConfig.useKeyAccumulation){for(var B=s_nbKey;--B>=0;){if(s_keyState[B]<0){return B}}return GLKey.k_invalid}else{if(r==0){return GLKey.k_invalid}for(var B=s_nbKey;--B>=0;){if((r&(1<<B))!=0){return B}}return GLKey.k_invalid}}function p(B){if(GLLibConfig.useKeyAccumulation){return(s_keyState[B]==1)}else{return(e&(1<<B))!=0}}function s(B){if(GLLibConfig.useKeyAccumulation){return(s_keyState[B]<0)}else{return(r&(1<<B))!=0}}function c(B){q=B}function c(){c(Integer.MAX_VALUE)}function a(){c(-1)}LowAPI.extendObject(A,{ResetKey:m,ResetAKey:w,IsAnyKeyDown:n,IsKeyDown:x,IsKeyUp:d,WasAnyKeyPressed:g,WasAnyKeyReleased:t,WasKeyPressed:p,WasKeyReleased:s,Game_KeySetKeyCode:v,},true)})(window);