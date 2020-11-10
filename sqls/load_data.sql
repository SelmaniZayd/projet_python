load data local infile '/var/lib/mysql-files/flights.csv' 
into table db.flights
columns terminated by ',' 
ignore 1 rows;