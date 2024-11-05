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
-- Table structure for table `orden_trabajo`
--

DROP TABLE IF EXISTS `orden_trabajo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orden_trabajo` (
  `idorden_trabajo` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `id_sector` int NOT NULL,
  `id_edificio` smallint NOT NULL,
  `id_activo_tarea` int NOT NULL,
  `id_ubicacion_activo` smallint NOT NULL,
  `id_piso` smallint NOT NULL,
  `id_numero_tipo` int NOT NULL,
  PRIMARY KEY (`idorden_trabajo`),
  KEY `id_edificio_idx` (`id_edificio`),
  KEY `id_sector_idx` (`id_sector`),
  KEY `id_activo_idx` (`id_activo_tarea`),
  KEY `id_activo_tarea_idx` (`id_activo_tarea`),
  KEY `id_operario_idx` (`id_usuario`),
  KEY `id_piso_idx` (`id_piso`),
  KEY `id_ubicacion_activo_idx` (`id_ubicacion_activo`),
  KEY `id_numero_tipo_idx` (`id_numero_tipo`),
  CONSTRAINT `id_activo_tarea` FOREIGN KEY (`id_activo_tarea`) REFERENCES `activo_tarea` (`idactivo_tarea`),
  CONSTRAINT `id_edificio` FOREIGN KEY (`id_edificio`) REFERENCES `edificio` (`id_edificio`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_numero_tipo` FOREIGN KEY (`id_numero_tipo`) REFERENCES `numero_tipo` (`id_numero_tipo`),
  CONSTRAINT `id_piso` FOREIGN KEY (`id_piso`) REFERENCES `piso` (`id_piso`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_sector` FOREIGN KEY (`id_sector`) REFERENCES `sector` (`id_sector`),
  CONSTRAINT `id_ubicacion_activo` FOREIGN KEY (`id_ubicacion_activo`) REFERENCES `ubicacion_activo` (`idubicacion_activo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orden_trabajo`
--

LOCK TABLES `orden_trabajo` WRITE;
/*!40000 ALTER TABLE `orden_trabajo` DISABLE KEYS */;
INSERT INTO `orden_trabajo` VALUES (1,NULL,1,1,1,1,3,1),(2,NULL,1,1,1,1,3,1),(3,NULL,1,1,1,1,3,1),(4,NULL,1,1,1,1,3,1),(5,NULL,1,1,1,1,3,1),(6,NULL,1,1,1,1,3,1),(7,NULL,1,1,1,1,3,1),(8,NULL,1,1,1,1,3,1),(9,NULL,1,1,1,1,3,1),(10,NULL,1,1,1,1,3,1),(11,NULL,1,1,1,1,3,1),(12,NULL,1,1,1,1,3,1),(13,NULL,1,1,1,1,3,1),(14,NULL,1,1,1,1,3,1),(15,NULL,1,1,1,1,3,1),(16,NULL,1,1,1,1,3,1),(17,NULL,1,1,1,1,3,1),(18,NULL,1,1,1,1,3,1),(19,NULL,1,1,1,1,3,1),(20,NULL,1,1,1,1,3,1),(21,NULL,1,1,1,1,3,1),(22,NULL,1,1,1,1,3,1),(23,NULL,1,1,1,1,3,1);
/*!40000 ALTER TABLE `orden_trabajo` ENABLE KEYS */;
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
