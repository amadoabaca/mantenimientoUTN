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
-- Table structure for table `piso`
--

DROP TABLE IF EXISTS `piso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `piso` (
  `id_piso` smallint NOT NULL AUTO_INCREMENT,
  `piso` varchar(80) NOT NULL,
  `label_tag` varchar(3) NOT NULL,
  PRIMARY KEY (`id_piso`)
) ENGINE=InnoDB AUTO_INCREMENT=251 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `piso`
--

LOCK TABLES `piso` WRITE;
/*!40000 ALTER TABLE `piso` DISABLE KEYS */;
INSERT INTO `piso` VALUES (1,'Planta Baja','001'),(2,'1er. Piso','002'),(3,'2do. Piso','003'),(4,'3er. Piso','004'),(5,'4to. Piso','005'),(6,'5to. Piso','006'),(7,'Nivel 0','007'),(8,'Nivel Bajo 0','008'),(9,'Techo','009'),(10,'Entrepiso','010'),(11,'Planta Baja','001'),(12,'1er. Piso','002'),(13,'2do. Piso','003'),(14,'3er. Piso','004'),(15,'4to. Piso','005'),(16,'5to. Piso','006'),(17,'Nivel 0','007'),(18,'Nivel Bajo 0','008'),(19,'Techo','009'),(20,'Entrepiso','010'),(21,'Planta Baja','001'),(22,'1er. Piso','002'),(23,'2do. Piso','003'),(24,'3er. Piso','004'),(25,'4to. Piso','005'),(26,'5to. Piso','006'),(27,'Nivel 0','007'),(28,'Nivel Bajo 0','008'),(29,'Techo','009'),(30,'Entrepiso','010'),(31,'Planta Baja','001'),(32,'1er. Piso','002'),(33,'2do. Piso','003'),(34,'3er. Piso','004'),(35,'4to. Piso','005'),(36,'5to. Piso','006'),(37,'Nivel 0','007'),(38,'Nivel Bajo 0','008'),(39,'Techo','009'),(40,'Entrepiso','010'),(41,'Planta Baja','001'),(42,'1er. Piso','002'),(43,'2do. Piso','003'),(44,'3er. Piso','004'),(45,'4to. Piso','005'),(46,'5to. Piso','006'),(47,'Nivel 0','007'),(48,'Nivel Bajo 0','008'),(49,'Techo','009'),(50,'Entrepiso','010'),(51,'Planta Baja','001'),(52,'1er. Piso','002'),(53,'2do. Piso','003'),(54,'3er. Piso','004'),(55,'4to. Piso','005'),(56,'5to. Piso','006'),(57,'Nivel 0','007'),(58,'Nivel Bajo 0','008'),(59,'Techo','009'),(60,'Entrepiso','010'),(61,'Planta Baja','001'),(62,'1er. Piso','002'),(63,'2do. Piso','003'),(64,'3er. Piso','004'),(65,'4to. Piso','005'),(66,'5to. Piso','006'),(67,'Nivel 0','007'),(68,'Nivel Bajo 0','008'),(69,'Techo','009'),(70,'Entrepiso','010'),(71,'Planta Baja','001'),(72,'1er. Piso','002'),(73,'2do. Piso','003'),(74,'3er. Piso','004'),(75,'4to. Piso','005'),(76,'5to. Piso','006'),(77,'Nivel 0','007'),(78,'Nivel Bajo 0','008'),(79,'Techo','009'),(80,'Entrepiso','010'),(81,'Planta Baja','001'),(82,'1er. Piso','002'),(83,'2do. Piso','003'),(84,'3er. Piso','004'),(85,'4to. Piso','005'),(86,'5to. Piso','006'),(87,'Nivel 0','007'),(88,'Nivel Bajo 0','008'),(89,'Techo','009'),(90,'Entrepiso','010'),(91,'Planta Baja','001'),(92,'1er. Piso','002'),(93,'2do. Piso','003'),(94,'3er. Piso','004'),(95,'4to. Piso','005'),(96,'5to. Piso','006'),(97,'Nivel 0','007'),(98,'Nivel Bajo 0','008'),(99,'Techo','009'),(100,'Entrepiso','010'),(101,'Planta Baja','001'),(102,'1er. Piso','002'),(103,'2do. Piso','003'),(104,'3er. Piso','004'),(105,'4to. Piso','005'),(106,'5to. Piso','006'),(107,'Nivel 0','007'),(108,'Nivel Bajo 0','008'),(109,'Techo','009'),(110,'Entrepiso','010'),(111,'Planta Baja','001'),(112,'1er. Piso','002'),(113,'2do. Piso','003'),(114,'3er. Piso','004'),(115,'4to. Piso','005'),(116,'5to. Piso','006'),(117,'Nivel 0','007'),(118,'Nivel Bajo 0','008'),(119,'Techo','009'),(120,'Entrepiso','010'),(121,'Planta Baja','001'),(122,'1er. Piso','002'),(123,'2do. Piso','003'),(124,'3er. Piso','004'),(125,'4to. Piso','005'),(126,'5to. Piso','006'),(127,'Nivel 0','007'),(128,'Nivel Bajo 0','008'),(129,'Techo','009'),(130,'Entrepiso','010'),(131,'Planta Baja','001'),(132,'1er. Piso','002'),(133,'2do. Piso','003'),(134,'3er. Piso','004'),(135,'4to. Piso','005'),(136,'5to. Piso','006'),(137,'Nivel 0','007'),(138,'Nivel Bajo 0','008'),(139,'Techo','009'),(140,'Entrepiso','010'),(141,'Planta Baja','001'),(142,'1er. Piso','002'),(143,'2do. Piso','003'),(144,'3er. Piso','004'),(145,'4to. Piso','005'),(146,'5to. Piso','006'),(147,'Nivel 0','007'),(148,'Nivel Bajo 0','008'),(149,'Techo','009'),(150,'Entrepiso','010'),(151,'Planta Baja','001'),(152,'1er. Piso','002'),(153,'2do. Piso','003'),(154,'3er. Piso','004'),(155,'4to. Piso','005'),(156,'5to. Piso','006'),(157,'Nivel 0','007'),(158,'Nivel Bajo 0','008'),(159,'Techo','009'),(160,'Entrepiso','010'),(161,'Planta Baja','001'),(162,'1er. Piso','002'),(163,'2do. Piso','003'),(164,'3er. Piso','004'),(165,'4to. Piso','005'),(166,'5to. Piso','006'),(167,'Nivel 0','007'),(168,'Nivel Bajo 0','008'),(169,'Techo','009'),(170,'Entrepiso','010'),(171,'Planta Baja','001'),(172,'1er. Piso','002'),(173,'2do. Piso','003'),(174,'3er. Piso','004'),(175,'4to. Piso','005'),(176,'5to. Piso','006'),(177,'Nivel 0','007'),(178,'Nivel Bajo 0','008'),(179,'Techo','009'),(180,'Entrepiso','010'),(181,'Planta Baja','001'),(182,'1er. Piso','002'),(183,'2do. Piso','003'),(184,'3er. Piso','004'),(185,'4to. Piso','005'),(186,'5to. Piso','006'),(187,'Nivel 0','007'),(188,'Nivel Bajo 0','008'),(189,'Techo','009'),(190,'Entrepiso','010'),(191,'Planta Baja','001'),(192,'1er. Piso','002'),(193,'2do. Piso','003'),(194,'3er. Piso','004'),(195,'4to. Piso','005'),(196,'5to. Piso','006'),(197,'Nivel 0','007'),(198,'Nivel Bajo 0','008'),(199,'Techo','009'),(200,'Entrepiso','010'),(201,'Planta Baja','001'),(202,'1er. Piso','002'),(203,'2do. Piso','003'),(204,'3er. Piso','004'),(205,'4to. Piso','005'),(206,'5to. Piso','006'),(207,'Nivel 0','007'),(208,'Nivel Bajo 0','008'),(209,'Techo','009'),(210,'Entrepiso','010'),(211,'Planta Baja','001'),(212,'1er. Piso','002'),(213,'2do. Piso','003'),(214,'3er. Piso','004'),(215,'4to. Piso','005'),(216,'5to. Piso','006'),(217,'Nivel 0','007'),(218,'Nivel Bajo 0','008'),(219,'Techo','009'),(220,'Entrepiso','010'),(221,'Planta Baja','001'),(222,'1er. Piso','002'),(223,'2do. Piso','003'),(224,'3er. Piso','004'),(225,'4to. Piso','005'),(226,'5to. Piso','006'),(227,'Nivel 0','007'),(228,'Nivel Bajo 0','008'),(229,'Techo','009'),(230,'Entrepiso','010'),(231,'Planta Baja','001'),(232,'1er. Piso','002'),(233,'2do. Piso','003'),(234,'3er. Piso','004'),(235,'4to. Piso','005'),(236,'5to. Piso','006'),(237,'Nivel 0','007'),(238,'Nivel Bajo 0','008'),(239,'Techo','009'),(240,'Entrepiso','010'),(241,'Planta Baja','001'),(242,'1er. Piso','002'),(243,'2do. Piso','003'),(244,'3er. Piso','004'),(245,'4to. Piso','005'),(246,'5to. Piso','006'),(247,'Nivel 0','007'),(248,'Nivel Bajo 0','008'),(249,'Techo','009'),(250,'Entrepiso','010');
/*!40000 ALTER TABLE `piso` ENABLE KEYS */;
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
