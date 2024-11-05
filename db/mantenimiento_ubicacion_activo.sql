-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: mantenimiento
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `ubicacion_activo`
--

DROP TABLE IF EXISTS `ubicacion_activo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ubicacion_activo` (
  `idubicacion_activo` smallint NOT NULL AUTO_INCREMENT,
  `ubicacion` varchar(80) NOT NULL,
  `label_tag` varchar(45) NOT NULL,
  PRIMARY KEY (`idubicacion_activo`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ubicacion_activo`
--

LOCK TABLES `ubicacion_activo` WRITE;
/*!40000 ALTER TABLE `ubicacion_activo` DISABLE KEYS */;
INSERT INTO `ubicacion_activo` VALUES (1,'Interior','001'),(2,'Exterior Bajo Techo','002'),(3,'Exterior Sin Techo','003'),(4,'Interior','001'),(5,'Exterior Bajo Techo','002'),(6,'Exterior Sin Techo','003'),(7,'Interior','001'),(8,'Exterior Bajo Techo','002'),(9,'Exterior Sin Techo','003'),(10,'Interior','001'),(11,'Exterior Bajo Techo','002'),(12,'Exterior Sin Techo','003'),(13,'Interior','001'),(14,'Exterior Bajo Techo','002'),(15,'Exterior Sin Techo','003'),(16,'Interior','001'),(17,'Exterior Bajo Techo','002'),(18,'Exterior Sin Techo','003'),(19,'Interior','001'),(20,'Exterior Bajo Techo','002'),(21,'Exterior Sin Techo','003'),(22,'Interior','001'),(23,'Exterior Bajo Techo','002'),(24,'Exterior Sin Techo','003'),(25,'Interior','001'),(26,'Exterior Bajo Techo','002'),(27,'Exterior Sin Techo','003'),(28,'Interior','001'),(29,'Exterior Bajo Techo','002'),(30,'Exterior Sin Techo','003'),(31,'Interior','001'),(32,'Exterior Bajo Techo','002'),(33,'Exterior Sin Techo','003'),(34,'Interior','001'),(35,'Exterior Bajo Techo','002'),(36,'Exterior Sin Techo','003'),(37,'Interior','001'),(38,'Exterior Bajo Techo','002'),(39,'Exterior Sin Techo','003'),(40,'Interior','001'),(41,'Exterior Bajo Techo','002'),(42,'Exterior Sin Techo','003'),(43,'Interior','001'),(44,'Exterior Bajo Techo','002'),(45,'Exterior Sin Techo','003'),(46,'Interior','001'),(47,'Exterior Bajo Techo','002'),(48,'Exterior Sin Techo','003'),(49,'Interior','001'),(50,'Exterior Bajo Techo','002'),(51,'Exterior Sin Techo','003'),(52,'Interior','001'),(53,'Exterior Bajo Techo','002'),(54,'Exterior Sin Techo','003'),(55,'Interior','001'),(56,'Exterior Bajo Techo','002'),(57,'Exterior Sin Techo','003'),(58,'Interior','001'),(59,'Exterior Bajo Techo','002'),(60,'Exterior Sin Techo','003'),(61,'Interior','001'),(62,'Exterior Bajo Techo','002'),(63,'Exterior Sin Techo','003'),(64,'Interior','001'),(65,'Exterior Bajo Techo','002'),(66,'Exterior Sin Techo','003'),(67,'Interior','001'),(68,'Exterior Bajo Techo','002'),(69,'Exterior Sin Techo','003'),(70,'Interior','001'),(71,'Exterior Bajo Techo','002'),(72,'Exterior Sin Techo','003');
/*!40000 ALTER TABLE `ubicacion_activo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-20 17:33:48
