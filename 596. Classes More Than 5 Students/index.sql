SELECT class FROM
(
    SELECT COUNT(DISTINCT(student)) AS student_count, class
    FROM courses
    GROUP BY class
) AS COURSE_TABLE_1
WHERE student_count >= 5;
