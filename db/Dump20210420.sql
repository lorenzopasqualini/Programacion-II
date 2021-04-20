CREATE DATABASE  IF NOT EXISTS `paginaTL` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `paginaTL`;
-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: paginaTL
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(10) unsigned NOT NULL,
  `productsId` int(10) unsigned NOT NULL,
  `texto` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productsId` (`productsId`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,1,'Muy bueno',NULL,NULL,NULL),(2,2,1,'Increible',NULL,NULL,NULL),(3,3,1,'Hay mejores',NULL,NULL,NULL),(4,4,1,'El mejor',NULL,NULL,NULL),(5,1,2,'Cool',NULL,NULL,NULL),(6,2,2,'Uff',NULL,NULL,NULL),(7,3,2,'Muy bueno',NULL,NULL,NULL),(8,5,2,'Este es mi favorito',NULL,NULL,NULL),(9,3,3,'Muy bueno',NULL,NULL,NULL),(10,4,3,'Excelente',NULL,NULL,NULL),(11,1,3,'Cool',NULL,NULL,NULL),(12,2,3,'Uff',NULL,NULL,NULL),(13,3,4,'Muy bueno',NULL,NULL,NULL),(14,4,4,'Excelente',NULL,NULL,NULL),(15,1,4,'Cool',NULL,NULL,NULL),(16,2,4,'Uff',NULL,NULL,NULL),(17,3,5,'Muy bueno',NULL,NULL,NULL),(18,4,5,'Excelente',NULL,NULL,NULL),(19,1,5,'Cool',NULL,NULL,NULL),(20,2,5,'Uff',NULL,NULL,NULL),(21,3,6,'Muy bueno',NULL,NULL,NULL),(22,4,6,'Excelente',NULL,NULL,NULL),(23,1,6,'Cool',NULL,NULL,NULL),(24,2,6,'Uff',NULL,NULL,NULL),(25,3,7,'Muy bueno',NULL,NULL,NULL),(26,4,7,'Excelente',NULL,NULL,NULL),(27,1,7,'Cool',NULL,NULL,NULL),(28,2,7,'Uff',NULL,NULL,NULL),(29,3,8,'Muy bueno',NULL,NULL,NULL),(30,4,8,'Excelente',NULL,NULL,NULL),(31,1,8,'Cool',NULL,NULL,NULL),(32,2,8,'Uff',NULL,NULL,NULL),(33,3,9,'Muy bueno',NULL,NULL,NULL),(34,4,9,'Excelente',NULL,NULL,NULL),(35,1,9,'Cool',NULL,NULL,NULL),(36,2,9,'Uff',NULL,NULL,NULL),(37,3,10,'Muy bueno',NULL,NULL,NULL),(38,4,10,'Excelente',NULL,NULL,NULL),(39,1,10,'Cool',NULL,NULL,NULL),(40,2,10,'Uff',NULL,NULL,NULL);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `artistName` varchar(100) DEFAULT NULL,
  `userId` int(10) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'imagen1.jpg','MEMORY','VIVIAN GIRLS',1,NULL,NULL,NULL),(2,'imagen2.jpg','DRAX','TRILOGY SPECIAL FINAL EDITION',2,NULL,NULL,NULL),(3,'imagen3.jpg','VARIOUS','SOMETHING NEW',3,NULL,NULL,NULL),(4,'imagen4.jpg','CHRISTINA AGUILERA','CHRISTINA AGUILERA',4,NULL,NULL,NULL),(5,'imagen5.jpg','NITZER EBB','1982-2010',5,NULL,NULL,NULL),(6,'imagen6.jpg','WOP','2567',3,NULL,NULL,NULL),(7,'imagen7.jpg','KOL','AQUA',5,NULL,NULL,NULL),(8,'imagen8.jpg','YES','LETS GO',4,NULL,NULL,NULL),(9,'imagen9.jpg','HELLO','JOJO',1,NULL,NULL,NULL),(10,'imagen10.jpg','WELL','SOSO',3,NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userName` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Martin Lopez','martinlopez@gmail.com','3901',NULL,NULL,NULL),(2,'Pedro Leon','pedroleon@gmail.com','bocapasion12',NULL,NULL,NULL),(3,'Sofia Perez','sofiperezn@gmail.com','218907lzv',NULL,NULL,NULL),(4,'Martina Zunino','martinazunino2012@gmail.com','4690uno',NULL,NULL,NULL),(5,'Jose Maria Caceres','josecaceres@gmail.com','Codjdj890',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-20 16:09:30
