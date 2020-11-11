ALTER TABLE `flights` ADD FOREIGN KEY (`carrier`) REFERENCES `airlines` (`carrier`);
ALTER TABLE `flights` ADD FOREIGN KEY (`origin`) REFERENCES `airports` (`faa`);
ALTER TABLE `flights` ADD FOREIGN KEY (`dest`) REFERENCES `airports` (`faa`);
ALTER TABLE `flights` ADD FOREIGN KEY (`tailnum`) REFERENCES `planes` (`tailnum`);
ALTER TABLE `flights` ADD FOREIGN KEY (`year` ,`month` , `day`, `hour`, `origin`) REFERENCES `weather` (`year` ,`month` , `day`, `hour`, `origin`)
