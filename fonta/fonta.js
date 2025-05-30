var data = JSON.parse($response.body);
//data.fontaCustomAdService.ads = [];
data.fontaCustomAdService.ads[0].skipAvailableAt = '0:00:00.000000';
data.fontaCustomAdService.frequencyCap = 1000;
data.adsFrequencyCap = 1000;

$response.body = JSON.stringify(data);
$done($response);
