declare var module: {
  exports: any;
};
declare var process: {
  platform: string;
  type: string;
  mainModule: string;
  arch: string;
  argv: string[];
  versions: {
    node: string;
    electron: string;
  };
};
declare var require: {
  nodeRequire(module: string): any;
};

declare var doNotInitLoader;

declare var global: object;

declare var __globalVar__: any;
