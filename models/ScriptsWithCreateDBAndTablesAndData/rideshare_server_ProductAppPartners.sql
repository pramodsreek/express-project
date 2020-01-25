CREATE DATABASE  IF NOT EXISTS `rideshare_server` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rideshare_server`;
-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: rideshare_server
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `ProductAppPartners`
--

DROP TABLE IF EXISTS `ProductAppPartners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductAppPartners` (
  `productId` int NOT NULL,
  `appPartnerId` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`productId`,`appPartnerId`),
  KEY `appPartnerId` (`appPartnerId`),
  CONSTRAINT `productapppartners_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`),
  CONSTRAINT `productapppartners_ibfk_2` FOREIGN KEY (`appPartnerId`) REFERENCES `AppPartners` (`appPartnerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProductAppPartners`
--

LOCK TABLES `ProductAppPartners` WRITE;
/*!40000 ALTER TABLE `ProductAppPartners` DISABLE KEYS */;
INSERT INTO `ProductAppPartners` VALUES (1,1,'2020-01-22 04:45:38','2020-01-22 04:45:38'),(2,1,'2020-01-22 04:45:38','2020-01-22 04:45:38'),(3,1,'2020-01-22 04:45:38','2020-01-22 04:45:38'),(4,1,'2020-01-22 04:45:38','2020-01-22 04:45:38'),(5,1,'2020-01-22 04:45:38','2020-01-22 04:45:38'),(6,2,'2020-01-22 04:45:38','2020-01-22 04:45:38'),(7,1,'2020-01-22 07:15:33','2020-01-22 07:15:33'),(7,2,'2020-01-22 04:45:38','2020-01-22 04:45:38'),(8,2,'2020-01-22 04:45:38','2020-01-22 04:45:38'),(10,1,'2020-01-22 07:03:20','2020-01-22 07:03:20'),(11,1,'2020-01-22 07:11:56','2020-01-22 07:11:56');
/*!40000 ALTER TABLE `ProductAppPartners` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-25  9:38:39