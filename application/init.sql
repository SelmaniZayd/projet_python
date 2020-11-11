USE db;
/* CREATING THE TABLES */
CREATE TABLE `flights` (
  `flight_id` integer PRIMARY KEY auto_increment,
  `year` integer,
  `month` integer,
  `day` integer,
  `dep_time` integer,
  `sched_dep_time` integer,
  `dep_delay` integer,
  `arr_time` integer,
  `sched_arr_time` integer,
  `arr_delay` integer,
  `carrier` varchar(3),
  `flight` integer,
  `tailnum` varchar(10),
  `origin` varchar(5),
  `dest` varchar(5),
  `air_time` integer,
  `distance` integer,
  `hour` integer,
  `minute` integer,
  `time_hour` timestamp
);

CREATE TABLE `planes` (
  `tailnum` varchar(10) PRIMARY KEY,
  `year` integer NULL,
  `type` varchar(50),
  `manufacturer` varchar(50),
  `model` varchar(20),
  `engines` integer,
  `seats` integer,
  `speed` integer NULL,
  `engine` varchar(50)
);

CREATE TABLE `airlines` (
  `carrier` varchar(3) PRIMARY KEY,
  `name` varchar(50)
);

CREATE TABLE `airports` (
  `faa` varchar(5) PRIMARY KEY,
  `name` varchar(100),
  `lat` float,
  `lon` float,
  `alt` integer,
  `tz` integer,
  `dst` varchar(3),
  `tzone` varchar(50)
);

CREATE TABLE `weather` (
  `origin` varchar(5),
  `year` integer,
  `month` integer,
  `day` integer,
  `hour` integer,
  `temp` float,
  `dewp` float,
  `humid` float,
  `wind_dir` integer,
  `wind_speed` float,
  `wind_gust` float,
  `precip` float,
  `pressure` float null,
  `visib` float,
  `time_hour` timestamp,
  PRIMARY KEY (`year` ,`month` , `day`, `hour`, `origin`)
);
/* LOADING THE FILES IN THE DATABASE */
load data local infile '/var/lib/mysql-files/airlines.csv' 
into table db.airlines
columns terminated by ',' 
ignore 1 rows;

load data local infile '/var/lib/mysql-files/airports.csv' 
into table db.airports
columns terminated by ',' 
ignore 1 rows;

load data local infile '/var/lib/mysql-files/planes.csv' 
into table db.planes
columns terminated by ',' 
ignore 1 rows;

load data local infile '/var/lib/mysql-files/weather.csv' 
into table db.weather
columns terminated by ',' 
ignore 1 rows;

load data local infile '/var/lib/mysql-files/flights.csv' 
into table db.flights
columns terminated by ','
ignore 1 rows
(year,month,day,dep_time,sched_dep_time,dep_delay,arr_time,sched_arr_time,arr_delay,carrier,flight,tailnum,origin,dest,air_time,distance,hour,minute,time_hour)
;

/* CREATING INDEXES FOR OPTIMIZATION */
create index weather_index on weather (origin, year, month, day, hour);
create index temp_idx on weather (temp);
create index flight_idx1 on flights (origin, year, month, day, hour);
create index flight_idx2 on flights (flight_id);

/* INSERTING MISSING DATA FROM TABLE AIRPORTS */
insert into db.airports (`faa`,`name`,`lat`, `lon`, `alt`, `tz`, `dst`, `tzone`) VALUES ('BQN', 'Rafael Hernandez Airport', 18.495, -67.12944, 72, -4, 'N', 'America/Puerto_Rico');
insert into db.airports (`faa`,`name`,`lat`, `lon`, `alt`, `tz`, `dst`, `tzone`) VALUES ('PSE', 'Mercedita Airport', 18.00833, -66.56303, 9, -4, 'N', 'America/Puerto_Rico');
insert into db.airports (`faa`,`name`,`lat`, `lon`, `alt`, `tz`, `dst`, `tzone`) VALUES ('SJU', 'San Juan Luis Munoz Airport', 18.4380555556, -66.00444444, 3, -4, 'N', 'America/Puerto_Rico');
insert into db.airports (`faa`,`name`,`lat`, `lon`, `alt`, `tz`, `dst`, `tzone`) VALUES ('STT', 'Cyril E. King Airport', 18.3369444444, -64.9730555556, 7, -4, 'N', 'America/St_Thomas');

/* SOLVING THE FIRST PROBLEM BY REPLACING THE '' IN ALL TAILNIM COLUMN IN FLIGHTS BY NULL SO IT DOESN'T STOP THE FOREIGN KEY */
UPDATE flights SET tailnum = CASE tailnum WHEN '' THEN NULL ELSE tailnum END;

/* SOLVING THE SECOND PROBLEM BY INSERTING ALL THE TAILNUMs THAT ARE IN FLIGHTS BUT NOT IN PLANES ELSE NULL */
insert into planes (tailnum)
SELECT distinct f.tailnum
FROM flights AS f LEFT JOIN planes AS p ON f.tailnum = p.tailnum 
where p.tailnum is null and f.tailnum is not null;

/* SOLVING THE PROBLEM WITH THE MISSING DATA FROM WEATHER BUT PERSISTANT IN FLIGHTS BY ADDING THE MISSING ORIGIN,YEAR,MONTH,DAY,HOUR ELSE NULL*/
insert into weather (origin, year, month, day, hour)
select distinct f.origin, f.year, f.month, f.day, f.hour
from flights as f
left join weather as w 
on f.year=w.year and f.month=w.month and f.day=w.day and f.hour=w.hour and f.origin=w.origin
where w.origin is null
;
/* COMMITING THE FOREIGN KEYS */
ALTER TABLE `flights` ADD FOREIGN KEY (`carrier`) REFERENCES `airlines` (`carrier`);
ALTER TABLE `flights` ADD FOREIGN KEY (`origin`) REFERENCES `airports` (`faa`);
ALTER TABLE `flights` ADD FOREIGN KEY (`dest`) REFERENCES `airports` (`faa`);
ALTER TABLE `flights` ADD FOREIGN KEY (`tailnum`) REFERENCES `planes` (`tailnum`);
ALTER TABLE `flights` ADD FOREIGN KEY (`year` ,`month` , `day`, `hour`, `origin`) REFERENCES `weather` (`year` ,`month` , `day`, `hour`, `origin`)
