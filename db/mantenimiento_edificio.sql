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
-- Table structure for table `edificio`
--

DROP TABLE IF EXISTS `edificio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `edificio` (
  `id_edificio` smallint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `direccion` varchar(80) NOT NULL,
  `label_tag` varchar(3) NOT NULL,
  PRIMARY KEY (`id_edificio`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `edificio`
--

LOCK TABLES `edificio` WRITE;
/*!40000 ALTER TABLE `edificio` DISABLE KEYS */;
INSERT INTO `edificio` VALUES (1,'UTN FRVT','Laprida 651','001'),(2,'FAGDUT VT','Laprida 648','002'),(3,'ATEVEN','Laprida 652','003'),(4,'UTN // UCES','Castelli 501','004'),(5,'UTN FRVT','Laprida 651','001'),(6,'FAGDUT VT','Laprida 648','002'),(7,'ATEVEN','Laprida 652','003'),(8,'UTN // UCES','Castelli 501','004'),(9,'UTN FRVT','Laprida 651','001'),(10,'FAGDUT VT','Laprida 648','002'),(11,'ATEVEN','Laprida 652','003'),(12,'UTN // UCES','Castelli 501','004'),(13,'UTN FRVT','Laprida 651','001'),(14,'FAGDUT VT','Laprida 648','002'),(15,'ATEVEN','Laprida 652','003'),(16,'UTN // UCES','Castelli 501','004'),(17,'UTN FRVT','Laprida 651','001'),(18,'FAGDUT VT','Laprida 648','002'),(19,'ATEVEN','Laprida 652','003'),(20,'UTN // UCES','Castelli 501','004'),(21,'UTN FRVT','Laprida 651','001'),(22,'FAGDUT VT','Laprida 648','002'),(23,'ATEVEN','Laprida 652','003'),(24,'UTN // UCES','Castelli 501','004'),(25,'UTN FRVT','Laprida 651','001'),(26,'FAGDUT VT','Laprida 648','002'),(27,'ATEVEN','Laprida 652','003'),(28,'UTN // UCES','Castelli 501','004'),(29,'UTN FRVT','Laprida 651','001'),(30,'FAGDUT VT','Laprida 648','002'),(31,'ATEVEN','Laprida 652','003'),(32,'UTN // UCES','Castelli 501','004'),(33,'UTN FRVT','Laprida 651','001'),(34,'FAGDUT VT','Laprida 648','002'),(35,'ATEVEN','Laprida 652','003'),(36,'UTN // UCES','Castelli 501','004'),(37,'UTN FRVT','Laprida 651','001'),(38,'FAGDUT VT','Laprida 648','002'),(39,'ATEVEN','Laprida 652','003'),(40,'UTN // UCES','Castelli 501','004'),(41,'UTN FRVT','Laprida 651','001'),(42,'FAGDUT VT','Laprida 648','002'),(43,'ATEVEN','Laprida 652','003'),(44,'UTN // UCES','Castelli 501','004'),(45,'UTN FRVT','Laprida 651','001'),(46,'FAGDUT VT','Laprida 648','002'),(47,'ATEVEN','Laprida 652','003'),(48,'UTN // UCES','Castelli 501','004'),(49,'UTN FRVT','Laprida 651','001'),(50,'FAGDUT VT','Laprida 648','002'),(51,'ATEVEN','Laprida 652','003'),(52,'UTN // UCES','Castelli 501','004'),(53,'UTN FRVT','Laprida 651','001'),(54,'FAGDUT VT','Laprida 648','002'),(55,'ATEVEN','Laprida 652','003'),(56,'UTN // UCES','Castelli 501','004'),(57,'UTN FRVT','Laprida 651','001'),(58,'FAGDUT VT','Laprida 648','002'),(59,'ATEVEN','Laprida 652','003'),(60,'UTN // UCES','Castelli 501','004'),(61,'UTN FRVT','Laprida 651','001'),(62,'FAGDUT VT','Laprida 648','002'),(63,'ATEVEN','Laprida 652','003'),(64,'UTN // UCES','Castelli 501','004'),(65,'UTN FRVT','Laprida 651','001'),(66,'FAGDUT VT','Laprida 648','002'),(67,'ATEVEN','Laprida 652','003'),(68,'UTN // UCES','Castelli 501','004'),(69,'UTN FRVT','Laprida 651','001'),(70,'FAGDUT VT','Laprida 648','002'),(71,'ATEVEN','Laprida 652','003'),(72,'UTN // UCES','Castelli 501','004'),(73,'UTN FRVT','Laprida 651','001'),(74,'FAGDUT VT','Laprida 648','002'),(75,'ATEVEN','Laprida 652','003'),(76,'UTN // UCES','Castelli 501','004'),(77,'UTN FRVT','Laprida 651','001'),(78,'FAGDUT VT','Laprida 648','002'),(79,'ATEVEN','Laprida 652','003'),(80,'UTN // UCES','Castelli 501','004'),(81,'UTN FRVT','Laprida 651','001'),(82,'FAGDUT VT','Laprida 648','002'),(83,'ATEVEN','Laprida 652','003'),(84,'UTN // UCES','Castelli 501','004'),(85,'UTN FRVT','Laprida 651','001'),(86,'FAGDUT VT','Laprida 648','002'),(87,'ATEVEN','Laprida 652','003'),(88,'UTN // UCES','Castelli 501','004'),(89,'UTN FRVT','Laprida 651','001'),(90,'FAGDUT VT','Laprida 648','002'),(91,'ATEVEN','Laprida 652','003'),(92,'UTN // UCES','Castelli 501','004'),(93,'UTN FRVT','Laprida 651','001'),(94,'FAGDUT VT','Laprida 648','002'),(95,'ATEVEN','Laprida 652','003'),(96,'UTN // UCES','Castelli 501','004');
/*!40000 ALTER TABLE `edificio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-20 17:33:49
