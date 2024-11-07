var user = JSON.parse($response.body);
user['hasPlan1'] = true;
$response.body = JSON.stringify(user);
$done($response);
