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
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `area` enum('administrativo','operario') DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contraseña` varchar(255) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'anibal','operario','animal@mil.com','$2a$10$lA/2HA/qeSGk.6pnCpLZs.OyRQCIqnj0/rxYl3LhbXzax6myTnkay',NULL),(2,'anibal','operario','animal@mil.com','$2a$10$dD9Wwy9hoEjDbDC3m.ZHyegOkw.n2RV71whrCVEOoOLumoQkVGzX6',NULL),(3,'anibal','operario','animal@mil.com','$2a$10$EOLnjtjkDAEdR/IdGP7UIeeLaUhwf/3ug79KaDtyQZeJnrSmIDtym',NULL),(4,'anibal','operario','animal@mil.com','$2a$10$xNZ/GYoSaT4o7b4FHqwIyOzgh6Rd6Rq4mceubWPBKYV8wuBuHVPAC',NULL),(5,'anibal','operario','animal@mil.com','$2a$10$SDhmmvpCVqdi7KpRsbUz.uUMVU9OYnrkmoA0pBCGVKBbQDFND3jlK',NULL),(6,'anibal','operario','animal@mil.com','$2a$10$yDB7jvYP/2hRQKMkO.JR8uiSG9gvalz2Pl6E/yeIUfvFma.Ya5M7m',NULL),(7,'anibal','operario','animal.com','$2a$10$lGVBPE/hdMzXPB/eSTd2jubhPs9tpUGbai.MHWqCozROB5vc.8uUu',NULL),(8,'anibal','operario','animal.com','$2a$10$HzMq41bO25jvWFgT1cMWmOQPXlF7jTDt8OJxJF61Are8olu4jLx6i',NULL),(9,'anibal','operario','animal.com','$2a$10$333iTCU1j7p7MHW.pQeXUOh1kIe14VPy8WjSQB5B3vM8MAHZyuTHu',NULL),(10,'anibal','operario','animal.com','$2a$10$DLOE04il5T9QC9e.R2V/j.sEC6bzzdxcBhJBrSHYHtu/m9z2sZ4d6',NULL),(11,'anibal','operario','animal.com','$2a$10$.AozVJIeRBviMf6OUeM/w.BbzdxyCi2lZUBAZYONSW0VQoJXl1sr2',NULL),(12,'anibal','operario','animal.com','$2a$10$MjV.yUCg7H7K9ASC9H6OB.R3TZEPq1sYt75DNn5jFrVVxWNlQ/CHC',NULL),(13,'anibal','operario','animal.com','$2a$10$Awqu88FFxUJcEU8NmgBAlOR.a9vAwREtXbz6n3a/b7fetF1r52g9K',NULL),(14,'anibal','operario','animal.com','$2a$10$6pnX0F4Q5rcsOtxfhMOBxu9m5WEyRPKeHvOTslTDDXNdbDt2mP9Hi',NULL),(15,'anibal','operario','animal.com','$2a$10$62gH9fzAxxUCXUwDD7J2tujot2NFHbQ9/PhVn5CeprhEdtT8ykiuW',NULL),(16,'anibal','operario','aniball.com','$2a$10$tRDqheLGxXgDxc5vAtYsJ.0avfMRZyEVej.DqKa3SR3VmG9FZVqOe',NULL),(17,'carla','operario','carlal.com','$2a$10$ClUn9QLCf/HZ4b4PROdPp.7pBjCNoIZsjwwzjmBd/ExZ/vbXQjNGO',NULL),(18,'carlITa','operario','carlal.com','$2a$10$wdYa0trxJeNE1DDAB7cD..JbrVi2BCs8Dq/uTyazzlnF9pw9cAGTy',NULL),(19,'juan','operario','juanl.com','$2a$10$Pvq4Dyg6dHttt35E6dYjMuPKevczEW1n3U3uLVlNOlac5jUyQ0uJ6',NULL),(20,'juan','operario','juanl.com','$2a$10$SCT0CELldiBVIvrdIF96Ku6WNcMKcQfgfO2HcvQYoN8YAMpl/yjgm',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-20 17:33:50
