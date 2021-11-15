interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly W6S_BASE_API: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly hot: any;
}
