SELECT id
FROM Weather AS WEATHER_TABLE_1
WHERE Temperature > (
    SELECT Temperature
    FROM Weather
    WHERE recordDate = DATE_SUB(WEATHER_TABLE_1.recordDate, INTERVAL 1 DAY)
);
