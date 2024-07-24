SELECT price_today.stock_code
FROM price_today
LEFT JOIN price_tomorrow
ON price_today.stock_code = price_tomorrow.stock_code
WHERE price_today.price < price_tomorrow.price
ORDER BY stock_code ASC;