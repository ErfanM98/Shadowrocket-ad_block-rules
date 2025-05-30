var data = JSON.parse($response.body);
data.fontaCustomAdService.iosEnabled = false;
data.fontaCustomAdService.androidEnabled = false;
$response.body = JSON.stringify(data);
$done($response);
