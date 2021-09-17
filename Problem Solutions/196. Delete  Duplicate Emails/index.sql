DELETE
FROM Person
WHERE Id IN (
    SELECT Id
    FROM (
        SELECT DISTINCT(Email) AS Email, Id
        FROM Person AS person_table_2
        WHERE EXISTS (SELECT * FROM Person WHERE Id != person_table_2.Id AND Id < person_table_2.Id AND Email = person_table_2.Email)
        ORDER BY Id DESC
    ) AS person_table_1
);
