# 概要
wpのテーマ開発のテンプレート<br>
git-cloneとwp-envで開発環境を整えられる。

## 必要な環境
- Node.js 14以降(16系が望ましいです)
- Docker
- wp-env


##ディレクトリ構成
```
.
├── 404.php
├── LICENSE
├── README.md
├── archive.php
├── comments.php
├── composer.json
├── dist (srcから生成されたcss+jsが入るディレクトリ)
├── footer.php
├── functions.php
├── header.php
├── inc
├── index.php
├── js
├── languages
├── node_modules
├── package-lock.json
├── package.json
├── page.php
├── phpcs.xml.dist
├── postcss.config.js
├── readme.txt
├── sass
├── screenshot.png
├── search.php
├── sidebar.php
├── single.php
├── src (基本的にscss+jsはこの中で記述)
├── style-rtl.css
├── style.css
├── template-parts
├── webpack.config.js
└── woocommerce.css

8 directories, 24 files
```
## 使い方
1. プロジェクトルートに`theme`ディレクトリと`.wp-env.json`ファイルを作成する。
2. `themes`直下に任意の名前でクローンする
3. `npm install`でsass・jsのコンパイルに必要なパッケージをインストール<br>※wp-envがグローバルインストールされていない場合は`npm install -g @wordpress/env`でグローバルに追加
4. .wp-env.jsonの中身を下記参照で編集
5. プロジェクトルートで`wp-env start`を実行。成功したらDoneの文言とともに起動しているlocalhostのポートが記入されているのでアクセス。
6. username: admin password: password でログイン可能

ディレクトリ構成は以下のようになっています。<br>
```
プロジェクト名  (このディレクティブでwp-env startを実行)
├── themes
│   └── ここに名前を指定してクローン
└── .wp-env.json
```

## .wp-env.jsonの内容
```
{
    "core": "https://ja.wordpress.org/latest-ja.zip",
    "config": {
        "WP_UPLOAD_MAX_FILESIZE": "1G"
    },
    "themes": ["./themes/${ここにクローンの際に指定した名前を記載}"],
    "plugins": [
        "https://downloads.wordpress.org/plugin/wordpress-seo.18.2.zip",
        "https://downloads.wordpress.org/plugin/all-in-one-wp-migration.7.56.zip"
    ]
}
```
とりあえずYoastSEOとマイグレーション用のプラグインは毎回使うと思うので指定

## コマンド
- `npm run watch`: 開発用コマンド。sassとjsの変更を監視しコンパイルの実行
- `npm run build`: jsの本番用トランスパイル
(_sでもともと設定されているコマンドについてはそちらのreadmeを参照してください)

## 制作の進め方
- 固定ページ: page.php
- ヘッダー: header.php
- フッター: footer.php
- 投稿: single.php
  - この辺は[公式サイト](https://wpdocs.osdn.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E9%9A%8E%E5%B1%A4)に詳細あり。
- js: src/js配下に記載
- sass: src/sass配下に記載

このテンプレートは`_s`からフォークしています。
