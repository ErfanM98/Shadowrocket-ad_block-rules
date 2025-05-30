var data = JSON.parse($response.body);
data.fontaCustomAdService.ads = [];
$response.body = JSON.stringify(data);
$done($response);
