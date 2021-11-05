# Hack The Box - Intelligence - Software Tools

## Fetchs all Pdf files, compiles user text file, checks pdf files for key words
## Requirements:
- Python3
- Python3 venv
- Python3 pip
- node v15 or later

## Set-Up:
- Create Python venv
```shell
python3 -m venv ./intelligence-py-module
```
- Activate Python venv
```shell
source ./intelligence-py-module/bin/activate
```
- Install Python pdfminer
```shell
python3 -m pip install pdfminer.six
```

## Usage
- Fetch & Download all PDFs
```shell
npm run getPdfs
```
- Compile user list and check keywords
```shell
npm run checkPdfs <keyword>
```
 It is advised to check for relevant information. i.e user, username, password, default, etc. <br>
 Multiple use of the above command will result in a longer user file.
 
 # Deactivation
 - Python venv deactivation
 ```shell
 deactivate
 ```