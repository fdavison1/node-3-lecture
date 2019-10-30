UPDATE wlh12
SET address = $1
WHERE id = $2;

SELECT * FROM wlh12
ORDER BY id;