DROP DATABASE IF EXISTS AJAX;
CREATE DATABASE AJAX;
USE AJAX;

-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2015 at 11:57 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `AJAX`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo`
--

CREATE TABLE IF NOT EXISTS `todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `email`
--

CREATE TABLE IF NOT EXISTS `email` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE IF NOT EXISTS `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `todo_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;



-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE IF NOT EXISTS `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------
INSERT INTO todo (`id`, `name`,`status`) VALUES
	(1, 'Make the Ajax subject', 0),
	(2, 'Paul the only gecko trully missed, the only one that trully matters', 1),
	(3, 'Get an internship for Dylan', 0);

INSERT INTO email (`id`, `email`) VALUES
	(1, 'no_internet_for@oneWeek.com'),
	(2, 'Aalx@moulinette.info'),
	(3, '404@thomas.ch');


INSERT INTO notes (`id`, `name`, `description`) VALUES
	(1, 'peliculles de barbes', 'degoutants?'),
	(2, 'ne plus faire de groupes aleatoires', 'Tentative de putsch sur le prochain rush'),
	(3, 'Galerien ou bien bagnard?', 'Seul olivier sait');


INSERT INTO tag (`id`, `name`, `todo_id`) VALUES
	(1, 'lies', 1),
	(2, 'lies', 2),
	(3, 'Ok not this one', 3),
	(4, 'Ok maybe not', 2),
	(5, 'Welllll', 2);	

