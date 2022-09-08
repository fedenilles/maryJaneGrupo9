-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-08-2022 a las 03:30:18
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
  time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!40101 SET NAMES utf8mb4 */
;

--
-- Base de datos: `maryjane_db`
--
CREATE DATABASE IF NOT EXISTS `maryjane_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci;

USE `maryjane_db`;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `products`
--
DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `price` decimal(7, 2) UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8_spanish2_ci DEFAULT 'null',
  `imagen` varchar(255) COLLATE utf8_spanish2_ci DEFAULT 'img.png',
  `categories_id` int(10) UNSIGNED NOT NULL,
  `families_id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_spanish2_ci;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `product_categories`
--
DROP TABLE IF EXISTS `product_categories`;

CREATE TABLE `product_categories` (
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_spanish2_ci;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `product_families`
--
DROP TABLE IF EXISTS `product_families`;

CREATE TABLE `product_families` (
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_spanish2_ci;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `users`
--
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `imagenPerfil` varchar(255) COLLATE utf8_spanish2_ci NOT NULL DEFAULT 'img.png',
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_spanish2_ci;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `user_permissions`
--
DROP TABLE IF EXISTS `user_permissions`;

CREATE TABLE `user_permissions` (
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_spanish2_ci;

--
-- Índices para tablas volcadas
--
--
-- Indices de la tabla `products`
--
ALTER TABLE
  `products`
ADD
  PRIMARY KEY (`id`),
ADD
  KEY `productsFamily` (`families_id`),
ADD
  KEY `productsCategory` (`categories_id`);

--
-- Indices de la tabla `product_categories`
--
ALTER TABLE
  `product_categories`
ADD
  PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_families`
--
ALTER TABLE
  `product_families`
ADD
  PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE
  `users`
ADD
  PRIMARY KEY (`id`),
ADD
  KEY `fk_users_categories` (`user_id`);

--
-- Indices de la tabla `user_permissions`
--
ALTER TABLE
  `user_permissions`
ADD
  PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--
--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE
  `products`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_categories`
--
ALTER TABLE
  `product_categories`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_families`
--
ALTER TABLE
  `product_families`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE
  `users`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user_permissions`
--
ALTER TABLE
  `user_permissions`
MODIFY
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--
--
-- Filtros para la tabla `products`
--
ALTER TABLE
  `products`
ADD
  CONSTRAINT `productsCategory` FOREIGN KEY (`categories_id`) REFERENCES `product_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD
  CONSTRAINT `productsFamily` FOREIGN KEY (`families_id`) REFERENCES `product_families` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users`
--
ALTER TABLE
  `users`
ADD
  CONSTRAINT `fk_users_categories` FOREIGN KEY (`user_id`) REFERENCES `user_permissions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;