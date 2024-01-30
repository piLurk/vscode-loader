/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

"use strict";

// Limitation: To load jquery through the loader, always require 'jquery' and add a path for it in the loader configuration

import { Environment, globalVar, isWindows } from "./env";
import {
  IDefineFunc,
  IRequireFunc,
  IConfigurationOptions,
} from "./configuration";
import { ModuleManager, IBuildModuleInfo } from "./moduleManager";
import { Utilities } from "./utils";
import { LoaderEvent } from "./loaderEvents";
import { ensureRecordedNodeRequire, createScriptLoader } from "./scriptLoader";

var define;
const env = new Environment();

let moduleManager: ModuleManager;

const DefineFunc: IDefineFunc = <any>(
  function (id: any, dependencies: any, callback: any): void {
    if (typeof id !== "string") {
      callback = dependencies;
      dependencies = id;
      id = null;
    }
    if (typeof dependencies !== "object" || !Array.isArray(dependencies)) {
      callback = dependencies;
      dependencies = null;
    }
    if (!dependencies) {
      dependencies = ["require", "exports", "module"];
    }

    if (id) {
      moduleManager.defineModule(id, dependencies, callback, null, null);
    } else {
      moduleManager.enqueueDefineAnonymousModule(dependencies, callback);
    }
  }
);
DefineFunc.amd = {
  jQuery: true,
};

const _requireFunc_config = function (
  params: IConfigurationOptions,
  shouldOverwrite: boolean = false
): void {
  moduleManager.configure(params, shouldOverwrite);
};
const RequireFunc: IRequireFunc = <any>function () {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
      _requireFunc_config(arguments[0]);
      return;
    }
    if (typeof arguments[0] === "string") {
      return moduleManager.synchronousRequire(arguments[0]);
    }
  }
  if (arguments.length === 2 || arguments.length === 3) {
    if (Array.isArray(arguments[0])) {
      moduleManager.defineModule(
        Utilities.generateAnonymousModule(),
        arguments[0],
        arguments[1],
        arguments[2],
        null
      );
      return;
    }
  }
  throw new Error("Unrecognized require call");
};
RequireFunc.config = _requireFunc_config;
RequireFunc.getConfig = function (): IConfigurationOptions {
  return moduleManager.getConfig().getOptionsLiteral();
};
RequireFunc.reset = function (): void {
  moduleManager = moduleManager.reset();
};
RequireFunc.getBuildInfo = function (): IBuildModuleInfo[] | null {
  return moduleManager.getBuildInfo();
};
RequireFunc.getStats = function (): LoaderEvent[] {
  return moduleManager.getLoaderEvents();
};
RequireFunc.define = DefineFunc;

function init(): void {
  if (
    typeof globalThis.require !== "undefined" ||
    typeof __non_webpack_require__ !== "undefined"
  ) {
    // https://webpack.docschina.org/api/module-variables/#__non_webpack_require__-webpack-specific
    // 避免 require 被 webpack 解析
    const _nodeRequire = globalVar.require || __non_webpack_require__; // webpack-ignore
    if (
      typeof _nodeRequire === "function" &&
      typeof _nodeRequire.resolve === "function"
    ) {
      // re-expose node's require function
      const nodeRequire = ensureRecordedNodeRequire(
        moduleManager.getRecorder(),
        _nodeRequire
      );
      globalVar.nodeRequire = nodeRequire;
      (<any>RequireFunc).nodeRequire = nodeRequire;
      (<any>RequireFunc).__$__nodeRequire = nodeRequire;
    }
  }
  if (
    env.isNode &&
    !env.isElectronRenderer &&
    !env.isElectronNodeIntegrationWebWorker
  ) {
    // module.exports = RequireFunc;
    __webpack_module__.exports = RequireFunc;

    // exports.loader = RequireFunc;
    globalVar.loader = RequireFunc;
    // globalVar.require = RequireFunc;
  } else {
    if (!env.isElectronRenderer) {
      globalVar.define = DefineFunc;
    }
    globalVar.require = RequireFunc;
  }
}

export const initLoader = () => {
  globalVar.setUniqueID = function (id: string) {
    this.__uniqueID__ = id;
  };
  globalVar.getUniqueID = function () {
    return this.__uniqueID__;
  };
  if (typeof globalVar.define !== "function" || !globalVar.define.amd) {
    moduleManager = new ModuleManager(
      env,
      createScriptLoader(env),
      DefineFunc,
      RequireFunc,
      Utilities.getHighPerformanceTimestamp()
    );

    // The global variable require can configure the loader
    if (
      typeof globalVar.require !== "undefined" &&
      typeof globalVar.require !== "function"
    ) {
      RequireFunc.config(globalVar.require);
    }

    // This define is for the local closure defined in node in the case that the loader is concatenated
    define = function () {
      return DefineFunc.apply(null, arguments);
    };
    define.amd = DefineFunc.amd;

    if (typeof doNotInitLoader === "undefined") {
      init();
    }
  }
  return globalVar;
};

export { globalVar };
// 非 window 下，直接初始化。
if (!isWindows()) {
  initLoader();
}

globalThis.aaa = globalVar.loader;
