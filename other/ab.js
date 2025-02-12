var data = JSON.parse($response.body);

data = {"code":0, "data": {"entitlements":[{"key":"","start_time":"","end_time":"","type":3,"grace_period_expires_date_ms":"0","expires_date_ms":"1739983554000","product_id":"airbrush.subs.mongth12.func00.lev00.standard.ver2","is_trial_period":true,"items":[],"originalPurchaseDateMs":"1739378755000","purchaseDateMs":"1739378754000","product_cate":1,"product_type":2,"original_transaction_id":"730001771093725","transaction_id":"730001771093725"}],"is_whitelist":0},"message": "success"}


data.data.entitlements[0].expires_date_ms = '2939983554000';
data.data.entitlements[0].originalPurchaseDateMs = '1729378754000';
$response.body = JSON.stringify(data);
$done($response);
