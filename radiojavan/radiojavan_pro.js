/*
^https:\/\/rj-appcloud\.com\/api2\/?
URLs to modify :
https://rj-appcloud.com/api2/user_subscription
https://rj-appcloud.com/api2/app_config
https://rj-appcloud.com/api2/user_profile
 */

service = $request.url.split("/").slice(-1)[0].split("?")[0];
const s = ["user_profile", "user_subscription", "app_config"];
var bodystr = $response.body;

if (service == "login"){
    if ("Set-Cookie" in $response.headers){
        var coockie =  $response.headers["Set-Cookie"];
        $persistentStore.write(coockie, "RadioJavanCoockie");
    }
}else{
    if (!"headers" in $request) {
        $request.headers = {};
    }
    if (!"Cookie" in $request.headers) {
        $request.headers.Cookie = persistentStore.read("RadioJavanCoockie");
    }else {
        $request.headers.Cookie = $persistentStore.read("RadioJavanCoockie") + "; " + $request.headers.Cookie;
    }
}
if (s.includes(service)){
    try {
        var obj = JSON.parse(bodystr);

        if (service == "user_subscription") {
            obj['success'] = true;

obj['subscription'] = true;

        }
        if (service == "user_profile") {
            obj['subscription'] = true;
            obj.verify = true;
        }
        if (service == "app_config") {

            obj['config']["ads"] = {};

        }
        bodystr = JSON.stringify(obj);
    } catch (e) {
        console.log(e);
    }
}

$response.body = bodystr;
$done($response);
