# Hack The Box Intelligence

## Scripts written to automate tasks while working through Intelligence htb

Node > v.15 
Must have exiftool, cut and grep available as commands on system

## intelligence.js
Use to enumerate links with 200 response code and download all pdfs
Usage:
node intelligence.js <2 digit year format>
```shell
node intelligence.js 21
```


## getUsernames.js
Uses exift tool to compile list of usernames in .txt format

Usage:
```shell
node getUsernames.js
```
