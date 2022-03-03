# 概要
wpのテーマ開発のテンプレート<br>
git-cloneとdockerで開発環境を整えられる。

## 必要な環境
- Node.js 14以降(16系が望ましいです)
- Docker

## ディレクトリ構成
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
1. プロジェクトルートに`themes`ディレクトリと`docker-comopse.yaml`ファイルを作成する。
2. `themes`直下に任意の名前でクローンする
3. `npm install`でsass・jsのコンパイルに必要なパッケージをインストール
4. docker-compose.yamlの中身を下記参照で編集
5. プロジェクトルートで`docker-compose up -d`を実行。
8. localhost:8000/wp-adminにアクセス パスワードなどを設定してログイン

ディレクトリ構成は以下のようになっています。<br>
```
プロジェクト名  (このディレクティブでwp-env startを実行)
├── themes
│   └── ここに名前を指定してクローン
└── docker-compose.yaml
```

## .wp-env.jsonの内容
```version: '3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     image: wordpress:latest
     ports:
       - "8000:80"
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
     volumes:
      - ./themes/_s:/var/www/html/wp-content/themes/_s

volumes:
    db_data:
```
wordpressコンテナのvolumeの箇所の_sの部分はクローンした際に指定した名前に変更

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
