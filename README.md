
## getMacAddress
for android 6 7 8 9 ...

## how to install

install it via cordova cli

```
cordova plugin add https://github.com/zhujin001032/getMacAddress.git
or
ionic cordova plugin add com.jasonhe.macaddress
```


## usage
after import
declare let GetMacAddress;

```js
GetMacAddress.getMacAddress(res => {
    console.log('getMacAddress Mac address: ' + res);
    localStorage.setItem('kMacAddress', res);
  }, err => {
    console.log(err);
});
```
