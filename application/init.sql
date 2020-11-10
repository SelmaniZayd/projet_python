USE db;
CREATE TABLE `flights` (
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
  `time_hour` timestamp
);

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
ignore 1 rows;