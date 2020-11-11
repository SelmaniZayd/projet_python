select count(*) from flights where flights.tailnum = "";

SELECT distinct f.tailnum
FROM flights AS f LEFT JOIN planes AS p ON f.tailnum = p.tailnum 
where p.tailnum is null and f.tailnum is not null;

select distinct f.origin, f.year, f.month, f.day, f.hour
from flights as f
left join weather as w 
on f.year=w.year and f.month=w.month and f.day=w.day and f.hour=w.hour and f.origin=w.origin
where w.origin is null
;