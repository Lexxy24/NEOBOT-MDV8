# NEOBOT-MDV8


## Heroku Buildpack

Click the deploy icon below !

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Lexxy24/NEOBOT-MDV8)

```bash
 > heroku/nodejs
 > https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
 > https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```

## TERMUX USER
```bash
$ pkg update && pkg upgrade
$ pkg install mc
$ pkg install git
$ pkg install yarn
$ pkg install nodejs
$ pkg install libwebp
$ pkg install ffmpeg
$ termux-setup-storage
$ git clone https://github.com/Lexxy24/NEOBOT-MDV8
$ cd NEOBOT-MDV8
$ yarn install
$ rm -r session.json
$ npm start
```

## RDP/VPS USER
```bash 
$ git clone https://github.com/Lexxy24/NEOBOT-MDV8
$ cd NEOBOT-MDV8
$ yarn install
$ rm -r session.json
$ npm start
```
