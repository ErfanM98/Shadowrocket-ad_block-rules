service = $request.url.split("/").slice(-1)[0].split("?")[0];

if (!(service == "login")){
    if (!"headers" in $request) {
        $request.headers = {};
    }
    if (!"Cookie" in $request.headers) {
        $request.headers.Cookie = $persistentStore.read("RadioJavanCoockie");
    }else {
        $request.headers.Cookie = $persistentStore.read("RadioJavanCoockie") + "; " + $request.headers.Cookie;
    }
}
$done($request);
