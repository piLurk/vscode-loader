!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.__icube_loader__=t():e.__icube_loader__=t()}(globalThis,(()=>(()=>{"use strict";var e={33:(e,t,r)=>{r.d(t,{ED:()=>i,VX:()=>o,qA:()=>d,z4:()=>s}),e=r.hmd(e);const i=()=>!("undefined"==typeof navigator||!navigator.userAgent||!globalThis.window)||"undefined"!=typeof process&&"win32"===process.platform,n=i()?{}:globalThis,o="object"==typeof global?global:{},s=n;class d{get isWindows(){return this._detect(),this._isWindows}get isNode(){return this._detect(),this._isNode}get isElectronRenderer(){return this._detect(),this._isElectronRenderer}get isWebWorker(){return this._detect(),this._isWebWorker}get isElectronNodeIntegrationWebWorker(){return this._detect(),this._isElectronNodeIntegrationWebWorker}constructor(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1,this._isElectronNodeIntegrationWebWorker=!1}_detect(){this._detected||(this._detected=!0,this._isWindows=d._isWindows(),this._isNode="exports"in e&&"undefined"!=typeof process&&process.versions&&!!process.versions.node,this._isElectronRenderer="undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.electron&&"renderer"===process.type,this._isWebWorker="function"==typeof s.importScripts,this._isElectronNodeIntegrationWebWorker=this._isWebWorker&&"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.electron&&"worker"===process.type)}static _isWindows=i}},145:(e,t,r)=>{r.d(t,{TT:()=>d,w7:()=>n,z7:()=>s});var i=r(853);let n=function(e){return e[e.LoaderAvailable=1]="LoaderAvailable",e[e.BeginLoadingScript=10]="BeginLoadingScript",e[e.EndLoadingScriptOK=11]="EndLoadingScriptOK",e[e.EndLoadingScriptError=12]="EndLoadingScriptError",e[e.BeginInvokeFactory=21]="BeginInvokeFactory",e[e.EndInvokeFactory=22]="EndInvokeFactory",e[e.NodeBeginEvaluatingScript=31]="NodeBeginEvaluatingScript",e[e.NodeEndEvaluatingScript=32]="NodeEndEvaluatingScript",e[e.NodeBeginNativeRequire=33]="NodeBeginNativeRequire",e[e.NodeEndNativeRequire=34]="NodeEndNativeRequire",e[e.CachedDataFound=60]="CachedDataFound",e[e.CachedDataMissed=61]="CachedDataMissed",e[e.CachedDataRejected=62]="CachedDataRejected",e[e.CachedDataCreated=63]="CachedDataCreated",e}({});class o{constructor(e,t,r){this.type=e,this.detail=t,this.timestamp=r}}class s{constructor(e){this._events=[new o(n.LoaderAvailable,"",e)]}record(e,t){this._events.push(new o(e,t,i.d.getHighPerformanceTimestamp()))}getEvents(){return this._events}}class d{static INSTANCE=new d;record(e,t){}getEvents(){return[]}}},340:(e,t,r)=>{r.r(t),r.d(t,{loader:()=>f});var i=r(33),n=r(696),o=r(853),s=r(347);const d=(0,i.ED)(),l=new i.qA;let a;const c=function(e,t,r){"string"!=typeof e&&(r=t,t=e,e=null),"object"==typeof t&&Array.isArray(t)||(r=t,t=null),t||(t=["require","exports","module"]),e?a.defineModule(e,t,r,null,null):a.enqueueDefineAnonymousModule(t,r)};c.amd={jQuery:!0};const u=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.configure(e,t)},h=function(){if(1===arguments.length){if(arguments[0]instanceof Object&&!Array.isArray(arguments[0]))return void u(arguments[0]);if("string"==typeof arguments[0])return a.synchronousRequire(arguments[0])}if(2!==arguments.length&&3!==arguments.length||!Array.isArray(arguments[0]))throw new Error("Unrecognized require call");a.defineModule(o.d.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null)};h.config=u,h.getConfig=function(){return a.getConfig().getOptionsLiteral()},h.reset=function(){a=a.reset()},h.getBuildInfo=function(){return a.getBuildInfo()},h.getStats=function(){return a.getLoaderEvents()},h.define=c;let p=!1;h.clearSideEffects=()=>{p&&(globalThis.define=void 0)},"function"==typeof i.z4.define&&i.z4.define.amd||(a=new n.xJ(l,(0,s.V)(l),c,h,o.d.getHighPerformanceTimestamp()),void 0!==i.z4.require&&"function"!=typeof i.z4.require&&h.config(i.z4.require),"undefined"==typeof doNotInitLoader&&function(){if(void 0!==i.z4.require||"undefined"!=typeof require){const e=i.z4.require||require;if("function"==typeof e&&"function"==typeof e.resolve){const t=(0,s.r)(a.getRecorder(),e);i.z4.nodeRequire=t,h.nodeRequire=t,h.__$__nodeRequire=t}}!l.isNode||l.isElectronRenderer||l.isElectronNodeIntegrationWebWorker?(l.isElectronRenderer||(i.z4.define=c),i.z4.require=h):(e.exports=h,i.z4.loader=h,i.z4.__need_loader_define__&&(i.z4.define=c,p=!0))}()),d&&(i.z4.setUniqueID=function(e){this.__uniqueID__=e},i.z4.getUniqueID=function(){return this.__uniqueID__},globalThis.define=i.z4.define),i.z4;const f=i.z4},696:(e,t,r)=>{r.d(t,{xJ:()=>_});var i=r(853);function n(e){if(e instanceof Error)return e;const t=new Error(e.message||String(e)||"Unknown Error");return e.stack&&(t.stack=e.stack),t}class o{static validateConfigurationOptions(e){if("string"!=typeof(e=e||{}).baseUrl&&(e.baseUrl=""),"boolean"!=typeof e.isBuild&&(e.isBuild=!1),"object"!=typeof e.paths&&(e.paths={}),"object"!=typeof e.config&&(e.config={}),void 0===e.catchError&&(e.catchError=!1),void 0===e.recordStats&&(e.recordStats=!1),"string"!=typeof e.urlArgs&&(e.urlArgs=""),"function"!=typeof e.onError&&(e.onError=function(e){return"loading"===e.phase?(console.error('Loading "'+e.moduleId+'" failed'),console.error(e),console.error("Here are the modules that depend on it:"),void console.error(e.neededBy)):"factory"===e.phase?(console.error('The factory function of "'+e.moduleId+'" has thrown an exception'),console.error(e),console.error("Here are the modules that depend on it:"),void console.error(e.neededBy)):void 0}),Array.isArray(e.ignoreDuplicateModules)||(e.ignoreDuplicateModules=[]),e.baseUrl.length>0&&(i.d.endsWith(e.baseUrl,"/")||(e.baseUrl+="/")),"string"!=typeof e.cspNonce&&(e.cspNonce=""),void 0===e.preferScriptTags&&(e.preferScriptTags=!1),e.nodeCachedData&&"object"==typeof e.nodeCachedData&&("string"!=typeof e.nodeCachedData.seed&&(e.nodeCachedData.seed="seed"),("number"!=typeof e.nodeCachedData.writeDelay||e.nodeCachedData.writeDelay<0)&&(e.nodeCachedData.writeDelay=7e3),!e.nodeCachedData.path||"string"!=typeof e.nodeCachedData.path)){const t=n(new Error("INVALID cached data configuration, 'path' MUST be set"));t.phase="configuration",e.onError(t),e.nodeCachedData=void 0}return e}static mergeConfigurationOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=i.d.recursiveClone(t||{});return i.d.forEachProperty(e,((e,t)=>{"ignoreDuplicateModules"===e&&void 0!==r.ignoreDuplicateModules?r.ignoreDuplicateModules=r.ignoreDuplicateModules.concat(t):"paths"===e&&void 0!==r.paths?i.d.forEachProperty(t,((e,t)=>r.paths[e]=t)):"config"===e&&void 0!==r.config?i.d.forEachProperty(t,((e,t)=>r.config[e]=t)):r[e]=i.d.recursiveClone(t)})),o.validateConfigurationOptions(r)}}class s{constructor(e,t){if(this._env=e,this.options=o.mergeConfigurationOptions(t),this._createIgnoreDuplicateModulesMap(),this._createSortedPathsRules(),""===this.options.baseUrl&&this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){let e=this.options.nodeRequire.main.filename,t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));this.options.baseUrl=e.substring(0,t+1)}}_createIgnoreDuplicateModulesMap(){this.ignoreDuplicateModulesMap={};for(let e=0;e<this.options.ignoreDuplicateModules.length;e++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]]=!0}_createSortedPathsRules(){this.sortedPathsRules=[],i.d.forEachProperty(this.options.paths,((e,t)=>{Array.isArray(t)?this.sortedPathsRules.push({from:e,to:t}):this.sortedPathsRules.push({from:e,to:[t]})})),this.sortedPathsRules.sort(((e,t)=>t.from.length-e.from.length))}cloneAndMerge(e){return new s(this._env,o.mergeConfigurationOptions(e,this.options))}getOptionsLiteral(){return this.options}_applyPaths(e){let t;for(let r=0,n=this.sortedPathsRules.length;r<n;r++)if(t=this.sortedPathsRules[r],i.d.startsWith(e,t.from)){let r=[];for(let i=0,n=t.to.length;i<n;i++)r.push(t.to[i]+e.substr(t.from.length));return r}return[e]}_addUrlArgsToUrl(e){return i.d.containsQueryString(e)?e+"&"+this.options.urlArgs:e+"?"+this.options.urlArgs}_addUrlArgsIfNecessaryToUrl(e){return this.options.urlArgs?this._addUrlArgsToUrl(e):e}_addUrlArgsIfNecessaryToUrls(e){if(this.options.urlArgs)for(let t=0,r=e.length;t<r;t++)e[t]=this._addUrlArgsToUrl(e[t]);return e}moduleIdToPaths(e){if(this._env.isNode&&this.options.amdModulesPattern instanceof RegExp&&!this.options.amdModulesPattern.test(e))return this.isBuild()?["empty:"]:["node|"+e];let t,r=e;if(i.d.endsWith(r,".js")||i.d.isAbsolutePath(r))i.d.endsWith(r,".js")||i.d.containsQueryString(r)||(r+=".js"),t=[r];else{t=this._applyPaths(r);for(let e=0,r=t.length;e<r;e++)this.isBuild()&&"empty:"===t[e]||(i.d.isAbsolutePath(t[e])||(t[e]=this.options.baseUrl+t[e]),i.d.endsWith(t[e],".js")||i.d.containsQueryString(t[e])||(t[e]=t[e]+".js"))}return this._addUrlArgsIfNecessaryToUrls(t)}requireToUrl(e){let t=e;return i.d.isAbsolutePath(t)||(t=this._applyPaths(t)[0],i.d.isAbsolutePath(t)||(t=this.options.baseUrl+t)),this._addUrlArgsIfNecessaryToUrl(t)}isBuild(){return this.options.isBuild}shouldInvokeFactory(e){return!this.options.isBuild||!!i.d.isAnonymousModule(e)||!(!this.options.buildForceInvokeFactory||!this.options.buildForceInvokeFactory[e])}isDuplicateMessageIgnoredFor(e){return this.ignoreDuplicateModulesMap.hasOwnProperty(e)}getConfigForModule(e){if(this.options.config)return this.options.config[e]}shouldCatchError(){return this.options.catchError}shouldRecordStats(){return this.options.recordStats}onError(e){this.options.onError(e)}}var d=r(145),l=r(33);class a{static ROOT=new a("");constructor(e){let t=e.lastIndexOf("/");this.fromModulePath=-1!==t?e.substr(0,t+1):""}static _normalizeModuleId(e){let t,r=e;for(t=/\/\.\//;t.test(r);)r=r.replace(t,"/");for(r=r.replace(/^\.\//g,""),t=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;t.test(r);)r=r.replace(t,"/");return r=r.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,""),r}resolveModule(e){let t=e;return i.d.isAbsolutePath(t)||(i.d.startsWith(t,"./")||i.d.startsWith(t,"../"))&&(t=a._normalizeModuleId(this.fromModulePath+t)),t}}class c{constructor(e,t,r,i,n,o){this.id=e,this.strId=t,this.dependencies=r,this._callback=i,this._errorback=n,this.moduleIdResolver=o,this.exports={},this.error=null,this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}static _safeInvokeFunction(e,t){try{return{returnedValue:e.apply(l.z4,t),producedError:null}}catch(e){return{returnedValue:null,producedError:e}}}static _invokeFactory(e,t,r,i){return e.shouldInvokeFactory(t)?e.shouldCatchError()?this._safeInvokeFunction(r,i):{returnedValue:r.apply(l.z4,i),producedError:null}:{returnedValue:null,producedError:null}}complete(e,t,r,o){this._isComplete=!0;let s=null;if(this._callback)if("function"==typeof this._callback){e.record(d.w7.BeginInvokeFactory,this.strId);let n=c._invokeFactory(t,this.strId,this._callback,r);s=n.producedError,e.record(d.w7.EndInvokeFactory,this.strId),s||void 0===n.returnedValue||this.exportsPassedIn&&!i.d.isEmpty(this.exports)||(this.exports=n.returnedValue)}else this.exports=this._callback;if(s){let e=n(s);e.phase="factory",e.moduleId=this.strId,e.neededBy=o(this.id),this.error=e,t.onError(e)}this.dependencies=null,this._callback=null,this._errorback=null,this.moduleIdResolver=null}onDependencyError(e){return this._isComplete=!0,this.error=e,!!this._errorback&&(this._errorback(e),!0)}isComplete(){return this._isComplete}}let u=function(e){return e[e.EXPORTS=0]="EXPORTS",e[e.MODULE=1]="MODULE",e[e.REQUIRE=2]="REQUIRE",e}({});class h{constructor(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}getMaxModuleId(){return this._nextId}getModuleId(e){let t=this._strModuleIdToIntModuleId.get(e);return void 0===t&&(t=this._nextId++,this._strModuleIdToIntModuleId.set(e,t),this._intModuleIdToStrModuleId[t]=e),t}getStrModuleId(e){return this._intModuleIdToStrModuleId[e]}}class p{static EXPORTS=new p(u.EXPORTS);static MODULE=new p(u.MODULE);static REQUIRE=new p(u.REQUIRE);constructor(e){this.id=e}}class f{constructor(e,t,r){this.id=e,this.pluginId=t,this.pluginParam=r}}class _{constructor(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this._env=e,this._scriptLoader=t,this._loaderAvailableTimestamp=n,this._defineFunc=r,this._requireFunc=i,this._moduleIdProvider=new h,this._config=new s(this._env),this._hasDependencyCycle=!1,this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[],this._requireFunc.moduleManager=this}reset(){return new _(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)}getGlobalAMDDefineFunc(){return this._defineFunc}getGlobalAMDRequireFunc(){return this._requireFunc}static _findRelevantLocationInStack(e,t){let r=e=>e.replace(/\\/g,"/"),i=r(e),n=t.split(/\n/);for(let e=0;e<n.length;e++){let t=n[e].match(/(.*):(\d+):(\d+)\)?$/);if(t){let e=t[1],n=t[2],o=t[3],s=Math.max(e.lastIndexOf(" ")+1,e.lastIndexOf("(")+1);if(e=e.substr(s),e=r(e),e===i){let e={line:parseInt(n,10),col:parseInt(o,10)};return 1===e.line&&(e.col-=53),e}}}throw new Error("Could not correlate define call site for needle "+e)}getBuildInfo(){if(!this._config.isBuild())return null;let e=[],t=0;for(let r=0,i=this._modules2.length;r<i;r++){let i=this._modules2[r];if(!i)continue;let n=this._buildInfoPath[i.id]||null,o=this._buildInfoDefineStack[i.id]||null,s=this._buildInfoDependencies[i.id];e[t++]={id:i.strId,path:n,defineLocation:n&&o?_._findRelevantLocationInStack(n,o):null,dependencies:s,shim:null,exports:i.exports}}return e}getRecorder(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new d.z7(this._loaderAvailableTimestamp):this._recorder=d.TT.INSTANCE),this._recorder}getLoaderEvents(){return this.getRecorder().getEvents()}enqueueDefineAnonymousModule(e,t){if(null!==this._currentAnonymousDefineCall)throw new Error("Can only have one anonymous define call per script file");let r=null;this._config.isBuild()&&(r=new Error("StackLocation").stack||null),this._currentAnonymousDefineCall={stack:r,dependencies:e,callback:t}}defineModule(e,t,r,i,n){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new a(e),s=this._moduleIdProvider.getModuleId(e);if(this._modules2[s])return void(this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'"));let d=new c(s,e,this._normalizeDependencies(t,o),r,i,o);this._modules2[s]=d,this._config.isBuild()&&(this._buildInfoDefineStack[s]=n,this._buildInfoDependencies[s]=(d.dependencies||[]).map((e=>this._moduleIdProvider.getStrModuleId(e.id)))),this._resolve(d)}_normalizeDependency(e,t){if("exports"===e)return p.EXPORTS;if("module"===e)return p.MODULE;if("require"===e)return p.REQUIRE;let r=e.indexOf("!");if(r>=0){let i=t.resolveModule(e.substr(0,r)),n=t.resolveModule(e.substr(r+1)),o=this._moduleIdProvider.getModuleId(i+"!"+n),s=this._moduleIdProvider.getModuleId(i);return new f(o,s,n)}return new p(this._moduleIdProvider.getModuleId(t.resolveModule(e)))}_normalizeDependencies(e,t){let r=[],i=0;for(let n=0,o=e.length;n<o;n++)r[i++]=this._normalizeDependency(e[n],t);return r}_relativeRequire(e,t,r,n){if("string"==typeof t)return this.synchronousRequire(t,e);this.defineModule(i.d.generateAnonymousModule(),t,r,n,null,e)}synchronousRequire(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new a(e),r=this._normalizeDependency(e,t),i=this._modules2[r.id];if(!i)throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This is the first mention of this module!");if(!i.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This module has not been resolved completely yet.");if(i.error)throw i.error;return i.exports}configure(e,t){let r=this._config.shouldRecordStats();this._config=t?new s(this._env,e):this._config.cloneAndMerge(e),this._config.shouldRecordStats()&&!r&&(this._recorder=null)}getConfig(){return this._config}_onLoad(e){if(null!==this._currentAnonymousDefineCall){let t=this._currentAnonymousDefineCall;this._currentAnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(e),t.dependencies,t.callback,null,t.stack)}}_createLoadError(e,t){let r=this._moduleIdProvider.getStrModuleId(e),i=(this._inverseDependencies2[e]||[]).map((e=>this._moduleIdProvider.getStrModuleId(e)));const o=n(t);return o.phase="loading",o.moduleId=r,o.neededBy=i,o}_onLoadError(e,t){const r=this._createLoadError(e,t);this._modules2[e]||(this._modules2[e]=new c(e,this._moduleIdProvider.getStrModuleId(e),[],(()=>{}),null,null));let i=[];for(let e=0,t=this._moduleIdProvider.getMaxModuleId();e<t;e++)i[e]=!1;let n=!1,o=[];for(o.push(e),i[e]=!0;o.length>0;){let e=o.shift(),t=this._modules2[e];t&&(n=t.onDependencyError(r)||n);let s=this._inverseDependencies2[e];if(s)for(let e=0,t=s.length;e<t;e++){let t=s[e];i[t]||(o.push(t),i[t]=!0)}}n||this._config.onError(r)}_hasDependencyPath(e,t){let r=this._modules2[e];if(!r)return!1;let i=[];for(let e=0,t=this._moduleIdProvider.getMaxModuleId();e<t;e++)i[e]=!1;let n=[];for(n.push(r),i[e]=!0;n.length>0;){let e=n.shift().dependencies;if(e)for(let r=0,o=e.length;r<o;r++){let o=e[r];if(o.id===t)return!0;let s=this._modules2[o.id];s&&!i[o.id]&&(i[o.id]=!0,n.push(s))}}return!1}_findCyclePath(e,t,r){if(e===t||50===r)return[e];let i=this._modules2[e];if(!i)return null;let n=i.dependencies;if(n)for(let i=0,o=n.length;i<o;i++){let o=this._findCyclePath(n[i].id,t,r+1);if(null!==o)return o.push(e),o}return null}_createRequire(e){var t=this;let r=(t,r,i)=>this._relativeRequire(e,t,r,i);return r.toUrl=t=>this._config.requireToUrl(e.resolveModule(t)),r.getStats=()=>this.getLoaderEvents(),r.hasDependencyCycle=()=>this._hasDependencyCycle,r.config=function(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.configure(e,r)},r.__$__nodeRequire=l.z4.nodeRequire,r}_loadModule(e){if(this._modules2[e]||this._knownModules2[e])return;this._knownModules2[e]=!0;let t=this._moduleIdProvider.getStrModuleId(e),r=this._config.moduleIdToPaths(t);this._env.isNode&&(-1===t.indexOf("/")||/^@[^\/]+\/[^\/]+$/.test(t))&&r.push("node|"+t);let i=-1,n=t=>{if(i++,i>=r.length)this._onLoadError(e,t);else{let t=r[i],o=this.getRecorder();if(this._config.isBuild()&&"empty:"===t)return this._buildInfoPath[e]=t,this.defineModule(this._moduleIdProvider.getStrModuleId(e),[],null,null,null),void this._onLoad(e);o.record(d.w7.BeginLoadingScript,t),this._scriptLoader.load(this,t,(()=>{this._config.isBuild()&&(this._buildInfoPath[e]=t),o.record(d.w7.EndLoadingScriptOK,t),this._onLoad(e)}),(e=>{o.record(d.w7.EndLoadingScriptError,t),n(e)}))}};n(null)}_loadPluginDependency(e,t){if(this._modules2[t.id]||this._knownModules2[t.id])return;this._knownModules2[t.id]=!0;let r=e=>{this.defineModule(this._moduleIdProvider.getStrModuleId(t.id),[],e,null,null)};r.error=e=>{this._config.onError(this._createLoadError(t.id,e))},e.load(t.pluginParam,this._createRequire(a.ROOT),r,this._config.getOptionsLiteral())}_resolve(e){let t=e.dependencies;if(t)for(let r=0,i=t.length;r<i;r++){let i=t[r];if(i===p.EXPORTS){e.exportsPassedIn=!0,e.unresolvedDependenciesCount--;continue}if(i===p.MODULE){e.unresolvedDependenciesCount--;continue}if(i===p.REQUIRE){e.unresolvedDependenciesCount--;continue}let n=this._modules2[i.id];if(n&&n.isComplete()){if(n.error)return void e.onDependencyError(n.error);e.unresolvedDependenciesCount--}else if(this._hasDependencyPath(i.id,e.id)){this._hasDependencyCycle=!0,console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(i.id)+"' and '"+this._moduleIdProvider.getStrModuleId(e.id)+"'. The cyclic path follows:");let t=this._findCyclePath(i.id,e.id,0)||[];t.reverse(),t.push(i.id),console.warn(t.map((e=>this._moduleIdProvider.getStrModuleId(e))).join(" => \n")),e.unresolvedDependenciesCount--}else if(this._inverseDependencies2[i.id]=this._inverseDependencies2[i.id]||[],this._inverseDependencies2[i.id].push(e.id),i instanceof f){let e=this._modules2[i.pluginId];if(e&&e.isComplete()){this._loadPluginDependency(e.exports,i);continue}let t=this._inversePluginDependencies2.get(i.pluginId);t||(t=[],this._inversePluginDependencies2.set(i.pluginId,t)),t.push(i),this._loadModule(i.pluginId)}else this._loadModule(i.id)}0===e.unresolvedDependenciesCount&&this._onModuleComplete(e)}_onModuleComplete(e){let t=this.getRecorder();if(e.isComplete())return;let r=e.dependencies,i=[];if(r)for(let t=0,n=r.length;t<n;t++){let n=r[t];if(n===p.EXPORTS){i[t]=e.exports;continue}if(n===p.MODULE){i[t]={id:e.strId,config:()=>this._config.getConfigForModule(e.strId)};continue}if(n===p.REQUIRE){i[t]=this._createRequire(e.moduleIdResolver);continue}let o=this._modules2[n.id];i[t]=o?o.exports:null}e.complete(t,this._config,i,(e=>(this._inverseDependencies2[e]||[]).map((e=>this._moduleIdProvider.getStrModuleId(e)))));let n=this._inverseDependencies2[e.id];if(this._inverseDependencies2[e.id]=null,n)for(let e=0,t=n.length;e<t;e++){let t=n[e],r=this._modules2[t];r.unresolvedDependenciesCount--,0===r.unresolvedDependenciesCount&&this._onModuleComplete(r)}let o=this._inversePluginDependencies2.get(e.id);if(o){this._inversePluginDependencies2.delete(e.id);for(let t=0,r=o.length;t<r;t++)this._loadPluginDependency(e.exports,o[t])}}}},347:(e,t,r)=>{r.d(t,{V:()=>p,r:()=>h});var i=r(33),n=r(145),o=r(853);const s=e=>/^((http:)|(https:)|(file:))/.test(e)&&e.substring(0,self.origin.length)!==self.origin;class d{constructor(e){this._env=e,this._scriptLoader=null,this._callbackMap={}}load(e,t,r,i){if(!this._scriptLoader)if(this._env.isWebWorker)this._scriptLoader=new c;else if(this._env.isElectronRenderer){const{preferScriptTags:t}=e.getConfig().getOptionsLiteral();this._scriptLoader=t?new l:new u(this._env)}else this._env.isNode?this._scriptLoader=new u(this._env):this._scriptLoader=new l;let n={callback:r,errorback:i};this._callbackMap.hasOwnProperty(t)?this._callbackMap[t].push(n):(this._callbackMap[t]=[n],this._scriptLoader.load(e,t,(()=>this.triggerCallback(t)),(e=>this.triggerErrorback(t,e))))}triggerCallback(e){let t=this._callbackMap[e];delete this._callbackMap[e];for(let e=0;e<t.length;e++)t[e].callback()}triggerErrorback(e,t){let r=this._callbackMap[e];delete this._callbackMap[e];for(let e=0;e<r.length;e++)r[e].errorback(t)}}class l{_cachedCanUseEval=null;_canUseEval(e){return null===this._cachedCanUseEval&&(this._cachedCanUseEval=a(e)),this._cachedCanUseEval}attachListeners(e,t,r){let i=()=>{e.removeEventListener("load",n),e.removeEventListener("error",o)},n=e=>{i(),t()},o=e=>{i(),r(e)};e.addEventListener("load",n),e.addEventListener("error",o)}async load(e,t,r,n){if(/^node\|/.test(t)){let o=e.getConfig().getOptionsLiteral(),s=h(e.getRecorder(),o.nodeRequire||i.z4.nodeRequire),d=t.split("|"),l=null;try{l=s(d[1])}catch(e){return void n(new Error(`${e.message} &-1 ${t} & ${d.join(",")}`))}e.enqueueDefineAnonymousModule([],(()=>l)),r()}else{s(t);const{trustedTypesPolicy:o}=e.getConfig().getOptionsLiteral();let d;const l=i.z4.getUniqueID();d=await fetch(t).then((e=>{if(200!==e.status)throw new Error(e.statusText);return e.text()})).then((e=>`(function(define) {${e}\n})(window["${l}"].define);\nwindow.__icubeResolveModule__({type:"__icube_module_loaded__", loaderID: "${l}", origin: "${t}"  });\n//# sourceURL=${t}`)).catch((e=>{throw e})).then(void 0,n);let a=document.createElement("script");a.setAttribute("async","async"),a.setAttribute("type","text/javascript");let c=t;d&&(a.text=d,window.__icubeResolveModule__=function(e){if("__icube_module_loaded__"===e?.type){const{loaderID:t,origin:n}=e;n===c&&t===i.z4.getUniqueID()&&r()}});const{cspNonce:u}=e.getConfig().getOptionsLiteral();u&&a.setAttribute("nonce",u),document.getElementsByTagName("head")[0].appendChild(a)}}}function a(e){const{trustedTypesPolicy:t}=e.getConfig().getOptionsLiteral();try{return(t?self.eval(t.createScript("","true")):new Function("true")).call(self),!0}catch(e){return!1}}class c{_cachedCanUseEval=null;_canUseEval(e){return null===this._cachedCanUseEval&&(this._cachedCanUseEval=a(e)),this._cachedCanUseEval}load(e,t,r,n){if(/^node\|/.test(t)){const o=e.getConfig().getOptionsLiteral(),s=h(e.getRecorder(),o.nodeRequire||i.z4.nodeRequire),d=t.split("|");let l=null;try{l=s(d[1])}catch(e){return void n(new Error(`${e.message} &-2 ${t} & ${d.join(",")}`))}e.enqueueDefineAnonymousModule([],(function(){return l})),r()}else{const{trustedTypesPolicy:i}=e.getConfig().getOptionsLiteral();if(!s(t)&&this._canUseEval(e))return void fetch(t).then((e=>{if(200!==e.status)throw new Error(e.statusText);return e.text()})).then((e=>{e=`${e}\n//# sourceURL=${t}`,(i?self.eval(i.createScript("",e)):new Function(e)).call(self),r()})).then(void 0,n);try{i&&(t=i.createScriptURL(t)),importScripts(t),r()}catch(e){n(e)}}}}class u{static _BOM=65279;static _PREFIX="(function (require, define, __filename, __dirname) { ";static _SUFFIX="\n});";constructor(e){this._env=e,this._didInitialize=!1,this._didPatchNodeRequire=!1}_init(e){this._didInitialize||(this._didInitialize=!0,this._fs=e("fs"),this._vm=e("vm"),this._path=e("path"),this._crypto=e("crypto"))}_initNodeRequire(e,t){const{nodeCachedData:r}=t.getConfig().getOptionsLiteral();if(!r)return;if(this._didPatchNodeRequire)return;this._didPatchNodeRequire=!0;const o=this,s=e("module");s.prototype._compile=function(e,d){const l=s.wrap(e.replace(/^#!.*/,"")),a=t.getRecorder(),c=o._getCachedDataPath(r,d),u={filename:d};let h;try{const e=o._fs.readFileSync(c);h=e.slice(0,16),u.cachedData=e.slice(16),a.record(n.w7.CachedDataFound,c)}catch(e){a.record(n.w7.CachedDataMissed,c)}const p=new o._vm.Script(l,u),f=p.runInThisContext(u),_=o._path.dirname(d),g=function(e){const t=e.constructor;let r=function(t){try{return e.require(t)}finally{}};return(r.resolve=function(r,i){return t._resolveFilename(r,e,!1,i)}).paths=function(r){return t._resolveLookupPaths(r,e)},r.main=process.mainModule,r.extensions=t._extensions,r.cache=t._cache,r}(this),v=[this.exports,g,this,d,_,process,i.VX,Buffer],m=f.apply(this.exports,v);return o._handleCachedData(p,l,c,!u.cachedData,t),o._verifyCachedData(p,l,c,h,t),m}}load(e,t,r,n){const s=e.getConfig().getOptionsLiteral(),d=h(e.getRecorder(),s.nodeRequire||i.z4.nodeRequire),l=s.nodeInstrumenter||function(e){return e};this._init(d),this._initNodeRequire(d,e);let a=e.getRecorder();if(/^node\|/.test(t)){let i=t.split("|"),o=null;try{o=d(i[1])}catch(e){const r=new Error(`${e.message} &-3  ${t} & ${i.join(",")}`);return void n(r)}e.enqueueDefineAnonymousModule([],(()=>o)),r()}else{t=o.d.fileUriToFilePath(this._env.isWindows,t);const i=this._path.normalize(t),d=this._getElectronRendererScriptPathOrUri(i),c=Boolean(s.nodeCachedData),h=c?this._getCachedDataPath(s.nodeCachedData,t):void 0;this._readSourceAndCachedData(i,h,a,((t,o,s,a)=>{if(t)return void n(t);let p;p=o.charCodeAt(0)===u._BOM?u._PREFIX+o.substring(1)+u._SUFFIX:u._PREFIX+o+u._SUFFIX,p=l(p,i);const f={filename:d,cachedData:s},_=this._createAndEvalScript(e,p,f,r,n);this._handleCachedData(_,p,h,c&&!s,e),this._verifyCachedData(_,p,h,a,e)}))}}_createAndEvalScript(e,t,r,o,s){const d=e.getRecorder();d.record(n.w7.NodeBeginEvaluatingScript,r.filename);const l=new this._vm.Script(t,r),a=l.runInThisContext(r),c=e.getGlobalAMDDefineFunc();let u=!1;const h=function(){return u=!0,c.apply(null,arguments)};return h.amd=c.amd,a.call(i.z4,e.getGlobalAMDRequireFunc(),h,r.filename,this._path.dirname(r.filename)),d.record(n.w7.NodeEndEvaluatingScript,r.filename),u?o():s(new Error(`Didn't receive define call in ${r.filename}!`)),l}_getElectronRendererScriptPathOrUri(e){if(!this._env.isElectronRenderer)return e;let t=e.match(/^([a-z])\:(.*)/i);return t?`file:///${(t[1].toUpperCase()+":"+t[2]).replace(/\\/g,"/")}`:`file://${e}`}_getCachedDataPath(e,t){const r=this._crypto.createHash("md5").update(t,"utf8").update(e.seed,"utf8").update(process.arch,"").digest("hex"),i=this._path.basename(t).replace(/\.js$/,"");return this._path.join(e.path,`${i}-${r}.code`)}_handleCachedData(e,t,r,i,o){e.cachedDataRejected?this._fs.unlink(r,(i=>{o.getRecorder().record(n.w7.CachedDataRejected,r),this._createAndWriteCachedData(e,t,r,o),i&&o.getConfig().onError(i)})):i&&this._createAndWriteCachedData(e,t,r,o)}_createAndWriteCachedData(e,t,r,i){let o,s=Math.ceil(i.getConfig().getOptionsLiteral().nodeCachedData.writeDelay*(1+Math.random())),d=-1,l=0;const a=()=>{setTimeout((()=>{o||(o=this._crypto.createHash("md5").update(t,"utf8").digest());const s=e.createCachedData();0===s.length||s.length===d||l>=5||(s.length<d?a():(d=s.length,this._fs.writeFile(r,Buffer.concat([o,s]),(e=>{e&&i.getConfig().onError(e),i.getRecorder().record(n.w7.CachedDataCreated,r),a()}))))}),s*4**l++)};a()}_readSourceAndCachedData(e,t,r,i){if(t){let o,s,d,l=2;const a=e=>{e?i(e):0==--l&&i(void 0,o,s,d)};this._fs.readFile(e,{encoding:"utf8"},((e,t)=>{o=t,a(e)})),this._fs.readFile(t,((e,i)=>{!e&&i&&i.length>0?(d=i.slice(0,16),s=i.slice(16),r.record(n.w7.CachedDataFound,t)):r.record(n.w7.CachedDataMissed,t),a()}))}else this._fs.readFile(e,{encoding:"utf8"},i)}_verifyCachedData(e,t,r,i,n){i&&(e.cachedDataRejected||setTimeout((()=>{const e=this._crypto.createHash("md5").update(t,"utf8").digest();i.equals(e)||(n.getConfig().onError(new Error(`FAILED TO VERIFY CACHED DATA, deleting stale '${r}' now, but a RESTART IS REQUIRED`)),this._fs.unlink(r,(e=>{e&&n.getConfig().onError(e)})))}),Math.ceil(5e3*(1+Math.random()))))}}function h(e,t){if(t.__$__isRecorded)return t;const r=function(r){e.record(n.w7.NodeBeginNativeRequire,r);try{return t(r)}catch(e){throw new Error(`${e.message} &-4 ${r}`)}finally{e.record(n.w7.NodeEndNativeRequire,r)}};return r.__$__isRecorded=!0,r}function p(e){return new d(e)}},853:(e,t,r)=>{r.d(t,{d:()=>n});var i=r(33);class n{static fileUriToFilePath(e,t){if(t=decodeURI(t).replace(/%23/g,"#"),e){if(/^file:\/\/\//.test(t))return t.substr(8);if(/^file:\/\//.test(t))return t.substr(5)}else if(/^file:\/\//.test(t))return t.substr(7);return t}static startsWith(e,t){return e.length>=t.length&&e.substr(0,t.length)===t}static endsWith(e,t){return e.length>=t.length&&e.substr(e.length-t.length)===t}static containsQueryString(e){return/^[^\#]*\?/gi.test(e)}static isAbsolutePath(e){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e)}static forEachProperty(e,t){if(e){let r;for(r in e)e.hasOwnProperty(r)&&t(r,e[r])}}static isEmpty(e){let t=!0;return n.forEachProperty(e,(()=>{t=!1})),t}static recursiveClone(e){if(!e||"object"!=typeof e||e instanceof RegExp)return e;if(!Array.isArray(e)&&Object.getPrototypeOf(e)!==Object.prototype)return e;let t=Array.isArray(e)?[]:{};return n.forEachProperty(e,((e,r)=>{t[e]=r&&"object"==typeof r?n.recursiveClone(r):r})),t}static NEXT_ANONYMOUS_ID=1;static generateAnonymousModule(){return"===anonymous"+n.NEXT_ANONYMOUS_ID+++"==="}static isAnonymousModule(e){return n.startsWith(e,"===anonymous")}static PERFORMANCE_NOW_PROBED=!1;static HAS_PERFORMANCE_NOW=!1;static getHighPerformanceTimestamp(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=i.z4.performance&&"function"==typeof i.z4.performance.now),this.HAS_PERFORMANCE_NOW?i.z4.performance.now():Date.now()}}}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={id:i,loaded:!1,exports:{}};return e[i](o,o.exports,r),o.loaded=!0,o.exports}return r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(340)})()));