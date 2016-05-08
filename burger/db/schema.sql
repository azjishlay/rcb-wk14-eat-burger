CREATE DATABASE IF NOT EXISTS `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burgerName` VARCHAR(255) NOT NULL,
	`devoured` TINYINT(1) NOT NULL DEFAULT 0,
	`date` TIMESTAMP,

	PRIMARY KEY ( `id` ) );