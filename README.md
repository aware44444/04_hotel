# yomoyomo stay

## 概要

yomoyomo stay は、静かな町家ステイをテーマにした学習用の宿泊施設サイトです。

HTML / CSS / JavaScript の基礎学習を目的として制作しました。  
トップページ、お部屋紹介ページ、お問い合わせページを持つ、小規模な複数ページサイトです。

## ページ構成

- `index.html`  
  トップページ。コンセプト、お部屋概要、宿泊プラン、設備・サービス、お知らせ、FAQ、アクセスを掲載。

- `rooms.html`  
  お部屋紹介ページ。各客室の特徴、定員、設備を掲載。

- `contact.html`  
  お問い合わせページ。見た目用のフォームと簡単な入力チェックを実装。

## 使用技術

- HTML
- CSS
- JavaScript

## 主な機能

- レスポンシブ対応
- 固定ヘッダー
- ハンバーガーメニュー
- FAQアコーディオン
- 宿泊プランのタブ切り替え
- スクロール時のフェードイン表示
- お問い合わせフォームの簡易バリデーション
- CSS変数による色管理
- 複数ページ構成

## ディレクトリ構成


```text
yomoyomo-stay/
├── index.html
├── rooms.html
├── contact.html
├── README.md
├── favicon.ico
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── screenshot/
    │   └── top.png
    ├── ogp.jpg
    ├── hero.jpg
    ├── room-standard.jpg
    ├── room-family.jpg
    └── room-work.jpg

    
## 今後差し替えるもの

- 仮画像を実際の客室写真に差し替える
- `images/hero.jpg` を実際のメインビジュアルに差し替える
- `images/ogp.jpg` をSNS共有用画像に差し替える
- `favicon.ico` を実際のサイトアイコンに差し替える
- OGPの `https://example.com/` を実際の公開URLに変更する
- お問い合わせフォームの送信機能を実装する