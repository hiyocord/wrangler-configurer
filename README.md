# wrangler-configurer

wranglerの設定ファイルの生成を行うコマンドラインユーティリティです。  
`wrangler.config.ts`を読み込み環境変数とマージして`wrangler.jsonc`を出力します。  

Service BindingのIDをVCSで管理したくない[hiyocord](https://github.com/hiyocord)プロジェクト用に開発されました。  
手を加えず利用者の環境にデプロイできるようにします。  

## インストール

```bash
npm install -D @hiyocord/wrangler-configurer
```

## 使い方
プロジェクトルートに`wrangler.config.ts`を配置します。

```ts
// wrangler.config.ts
import type { WranglerConfigGeneratorOptions } from '@hiyocord/wrangler-config-generator'

export default {
  params: {
    name: "my-worker",
    // 他の wrangler 設定...
  }
} satisfies WranglerConfigGeneratorOptions
```

`wrangler-configurer`コマンドで`wrangler.jsonc`を出力します。


## 環境変数

利用者側で自由にパラメータを変更するため、環境変数(`VITE_WRANGLER_ARGS`)に指定されたJSONを
プロジェクト推奨の`wrangler-configurer`で指定された値にマージします。  

## ライセンス

[MITライセンス](./LICENSE)で配布されています。  
ご自由にお使いください。
