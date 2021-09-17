SELECT 
    MAIN_TABLE.id AS id, 
    JAN_TABLE.revenue AS Jan_Revenue,
    FEB_TABLE.revenue AS Feb_Revenue,
    MAR_TABLE.revenue AS Mar_Revenue,
    APR_TABLE.revenue AS Apr_Revenue,
    MAY_TABLE.revenue AS May_Revenue,
    JUN_TABLE.revenue AS Jun_Revenue,
    JUL_TABLE.revenue AS Jul_Revenue,
    AUG_TABLE.revenue AS Aug_Revenue,
    SEP_TABLE.revenue AS Sep_Revenue,
    OCT_TABLE.revenue AS Oct_Revenue,
    NOV_TABLE.revenue AS Nov_Revenue,
    DEC_TABLE.revenue AS Dec_Revenue
FROM (
    SELECT DISTINCT(id) AS id
    FROM Department
) AS MAIN_TABLE
LEFT JOIN (
    SELECT *
    FROM Department
) AS JAN_TABLE ON JAN_TABLE.id = MAIN_TABLE.id AND JAN_TABLE.month = "Jan"
LEFT JOIN (
    SELECT *
    FROM Department
) AS FEB_TABLE ON FEB_TABLE.id = MAIN_TABLE.id AND FEB_TABLE.month = "Feb"
LEFT JOIN (
    SELECT *
    FROM Department
) AS MAR_TABLE ON MAR_TABLE.id = MAIN_TABLE.id AND MAR_TABLE.month = "Mar"
LEFT JOIN (
    SELECT *
    FROM Department
) AS APR_TABLE ON APR_TABLE.id = MAIN_TABLE.id AND APR_TABLE.month = "Apr"
LEFT JOIN (
    SELECT *
    FROM Department
) AS MAY_TABLE ON MAY_TABLE.id = MAIN_TABLE.id AND MAY_TABLE.month = "May"
LEFT JOIN (
    SELECT *
    FROM Department
) AS JUN_TABLE ON JUN_TABLE.id = MAIN_TABLE.id AND JUN_TABLE.month = "Jun"
LEFT JOIN (
    SELECT *
    FROM Department
) AS JUL_TABLE ON JUL_TABLE.id = MAIN_TABLE.id AND JUL_TABLE.month = "Jul"
LEFT JOIN (
    SELECT *
    FROM Department
) AS AUG_TABLE ON AUG_TABLE.id = MAIN_TABLE.id AND AUG_TABLE.month = "Aug"
LEFT JOIN (
    SELECT *
    FROM Department
) AS SEP_TABLE ON SEP_TABLE.id = MAIN_TABLE.id AND SEP_TABLE.month = "Sep"
LEFT JOIN (
    SELECT *
    FROM Department
) AS OCT_TABLE ON OCT_TABLE.id = MAIN_TABLE.id AND OCT_TABLE.month = "Oct"
LEFT JOIN (
    SELECT *
    FROM Department
) AS NOV_TABLE ON NOV_TABLE.id = MAIN_TABLE.id AND NOV_TABLE.month = "Nov"
LEFT JOIN (
    SELECT *
    FROM Department
) AS DEC_TABLE ON DEC_TABLE.id = MAIN_TABLE.id AND DEC_TABLE.month = "Dec"
