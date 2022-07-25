# BDD
🍱 Url https://taufanfadhilah.github.io/react-gallery/

✔ Positif Criteria

🔥 Negatif Criteria

## 👉 Sebagai User dapat mengakses aplikasi gallery
✔ **GIVEN** User berada dihalaman browser
**WHEN** input url https://taufanfadhilah.github.io/react-gallery/
**THEN** sistem menampilkan halaman login **AND**
title "React Gallery"

🔥 **GIVEN** User tidak terhubung dengan internet
**WHEN** mengakses url aplikasi aplikasi gallery
**THEN** sistem tidak berhasil ditampilkan

## 👉 Sebagai User dapat melakukan login
✔ **GIVEN** User berada dihalaman login,
**WHEN** user menginputkan email dan password yang benar,
**THEN** sistem akan menampilkan alert "wllcome", 
**AND** menampilkan halaman dashboard dan terdapat form input url image

🔥 **GIVEN** User berada dihalaman login,
**WHEN** user tidak menginputkan email dan password atau mengiputkan data login yang salah,
**THEN** sistem akan menampilkan alert "login failed" dan tetap berada dihalaman login.

## 👉 Sebagai User dapat upload photo
✔ **GIVEN** User berada dihalaman dashboard,
**WHEN** user menginputkan url image, 
**AND** input caption,
**AND** klik button publish,
**THEN** sistem akan menampilkan alert "publish", 
**AND** menampilkan image dan jumlah photo

✔ **GIVEN** User berada dihalaman dashboard,
**WHEN** user menginputkan url image yang kedua atau < 1, 
**AND** input caption,
**AND** klik button publish,
**THEN** sistem akan menampilkan alert "publish", 
**AND** menampilkan image dan jumlah photo
**AND** photo akan tampil berurutan sesuai dengan yang terbaru

🔥 **GIVEN** User berada dihalaman dashboard,
**WHEN** user tidak menginputkan url image dan caption,
**AND** user klik button publish,
**THEN** sistem akan menampilkan validation "Please fill out this field"

🔥 **GIVEN** User berada dihalaman dashboard,
**WHEN** user menginputkan url website (bukan image),
**AND** menginputkan caption,
**AND** user klik button publish,
**THEN** sistem akan menampilkan alert "publish !" tetapi tidak menampilkan photo
