# tradingview-scrap
Nano scraper in NodeJs to grab CCI info from a TradingView link. Using Puppeteer lib.

## How it works?

-> **It's veeery simple, just grabs a label info from inside the chart, the field is called 'CCI'. **<br>
-> It uses headless mode, but with small chaneg you can change it to view the browser screen (change line 5 from run.js):
```
    const browser = await puppeteer.launch({headless: false})
```

![image](https://user-images.githubusercontent.com/6570848/140618487-17b94228-b990-4350-8850-2051e184a3e1.png)<br><br>

## What this code wont do!

-> It`s just for a very specific scrap. It will not make investment predictions for you and make you rich. <br>
-> It onlys capture CCI valeu from the screen, there are other labels. If you want, make the change and send the pull request, i'll be greatful. \o/<br>

## Install instructions

    1. NodeJs (created with 16.10.0) and Yarn (package manager - 1.22.17)
    2. Install [pupeeteer](https://yarnpkg.com/package/puppeteer): yarn add puppeteer
    3. Install [config](https://yarnpkg.com/package/config): yarn add config

## Config instructions

    * Open the config/default.json file
    * url  - just pass the URL from the TradingView site. OBS: i only tested with one specific case that has the CCI value on the screen!!!
    * xpPath - the DOM path to the information. And i know this can be done in a several different ways (like CSS Selector), but xpaths for me was the faster and direct way.
    
## Be happy! I just made because some one asked, it`s straighfoward, but with small change can serve a higher purpose. :)
    EXECUTE: node run.js

[Blog - rodrigoreisf.com.br](http://rodrigoreisf.com.br)
