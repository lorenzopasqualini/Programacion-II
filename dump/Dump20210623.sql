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
  PRIMARY KEY (`id`),
  KEY `comentarios_ibfk_1` (`userId`),
  KEY `comentarios_ibfk_2` (`productsId`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (34,8,10,'Muy bueno','2021-06-23 21:06:05','2021-06-23 21:06:05'),(35,8,9,'Tremendo','2021-06-23 21:06:12','2021-06-23 21:06:12'),(36,9,11,'Muy copado','2021-06-23 21:09:33','2021-06-23 21:09:33'),(37,9,9,'Genial','2021-06-23 21:09:58','2021-06-23 21:09:58'),(38,10,13,'Cool','2021-06-23 21:23:13','2021-06-23 21:23:13'),(39,10,12,'Que buen viniloo','2021-06-23 21:23:34','2021-06-23 21:23:34'),(40,11,17,'Wow!','2021-06-23 21:26:53','2021-06-23 21:26:53');
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
  PRIMARY KEY (`id`),
  KEY `products_ibfk_1` (`userId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (9,'image-1624481715734.png','LOVE LETTER','FABIO MONESI',7,'2021-06-23 20:55:15','2021-06-23 20:55:15'),(10,'image-1624481794686.png','UNFOLD THE GOD MAN','PSYCHONAUT',7,'2021-06-23 20:56:34','2021-06-23 20:56:34'),(11,'image-1624481987289.png','THE DEATH OF GAIA','OFFICIUM TRISTE',8,'2021-06-23 20:59:47','2021-06-23 20:59:47'),(12,'image-1624482549358.png','SPEED','TURBOSLASH',9,'2021-06-23 21:09:09','2021-06-23 21:09:09'),(13,'image-1624482645964.png','HERMIT AMEN','GRIM',9,'2021-06-23 21:10:45','2021-06-23 21:10:45'),(16,'image-1624483311286.png','EAGLES OF DEATH METAL','PIGEONS OF SHIT METAL',10,'2021-06-23 21:21:51','2021-06-23 21:21:51'),(17,'image-1624483362827.png','BRITNEY','BRITNEY SPEARS',10,'2021-06-23 21:22:42','2021-06-23 21:22:42'),(18,'image-1624483593498.png','NUDE','DEAD OR ALIVE',11,'2021-06-23 21:26:33','2021-06-23 21:26:33');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'Martin','martin1900@gmail.com','$2a$10$Hh4/RkU2aEIKPGVW/Ef9aOC19BlleSSs5DM9Qs2xGsf1uIqTpDwea','2021-06-23 20:53:49','2021-06-23 20:53:49'),(8,'Lucas','lucasperez@gmail.com','$2a$10$FIeYaNtLY7X.6ZnlAjQLbO.4TW3m8kJDSuANt59Z91aaU6h47aRTm','2021-06-23 20:58:06','2021-06-23 20:58:06'),(9,'Mica','micamartinez@gmail.com','$2a$10$RHVbdJ7LzjKMChknaQkcLe9/D3gdgIMo2MPuMA4GspgN7.cVqmgg2','2021-06-23 21:07:55','2021-06-23 21:07:55'),(10,'Sofia','sofiwas@gmail.com','$2a$10$dhXvPOJZ36tvH5U7SWYp3.XCJM3QhAvF2FJJD/yg0438NZApWi1.m','2021-06-23 21:16:42','2021-06-23 21:16:42'),(11,'Tomas','tomas9@gmail.con','$2a$10$Pb816wx5fftziBWQ6Ohuq.90rOLPc5/./cgDQOsAEibpHwZWSfNGK','2021-06-23 21:25:27','2021-06-23 21:25:27');
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

-- Dump completed on 2021-06-23 18:33:44
