SELECT DISTINCT(Email)
FROM Person AS PERSON_1
WHERE Email = (SELECT Email FROM Person WHERE Id != PERSON_1.Id AND Email = PERSON_1.Email LIMIT 1)
