# 必要な環境
Node.js 14以降(16系が望ましいです)

# cloneした後に必ず行うこと
`npm install`(sass・jsのコンパイルに必要なパッケージのインストール)

# コマンド
- `npm run watch`: 開発用コマンド。sassとjsの変更を監視しコンパイルの実行
- `npm run build`: jsの本番用トランスパイル
(_sでもともと設定されているコマンドについてはそちらのredmeを参照してください)

##　制作の進め方
固定ページ: page.php
ヘッダー: header.php
フッター: footer.php
投稿: single.php
この辺は[公式サイト](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E9%9A%8E%E5%B1%A4)に詳細あり。
js: src/js配下に記載
sass: src/sass配下に記載

このテンプレートは`_s`からフォークしています。
