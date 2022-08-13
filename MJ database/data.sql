-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2022 a las 16:03:10
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `maryjane_db`
--
CREATE DATABASE IF NOT EXISTS `maryjane_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `maryjane_db`;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `imagen`, `categories_Id`, `families_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(2, 'CREAM CARAMEL', 2300, 'Indica - Lorem Ipsum', 'seeds2.png', 1, 1, '2022-07-20 01:47:53', NULL, NULL),
(3, 'PINK PLANT', 1100, 'Sativa - Lorem Ipsum', 'seeds3.png', 1, 1, '2022-07-20 01:47:53', NULL, NULL),
(4, 'GREEN POISON', 1550, 'Sativa - Lorem Ipsum', 'seeds4.png', 1, 1, '2022-07-20 01:47:53', NULL, NULL),
(5, 'GREEN POISON', 3400, 'Sativa - Lorem Ipsum', 'seeds5.png', 2, 1, '2022-07-20 01:47:53', NULL, NULL),
(6, 'Kit 1', 3500, 'Combo 1', 'kit1.png', 1, 4, '2022-07-20 01:47:53', NULL, NULL),
(7, 'Kit 2', 4000, 'Combo 2', 'kit2.jpg', 2, 4, '2022-07-20 01:47:53', NULL, NULL),
(8, 'Kit 3', 3750, 'Combo 3', 'kit3.png', 1, 4, '2022-07-20 01:47:53', NULL, NULL),
(9, 'Calcium 1kg ? Green House Powder Feeding', 800, 'Se suministra como aditivo en situaciones en las que la cantidad de calcio presente en el agua es inferior a los niveles recomendados. Muy soluble, f cil de usar, se asimila r pidamente.', 'fertilizante1.png', 1, 3, '2022-07-20 01:47:53', NULL, NULL),
(10, 'Myr Nitrogeno', 700, 'MYR NITROGENO es un nameo conteniendo amino cidos lev¢giros obtenidos de la hidr¢lisis enzim tica de sustancias proteicas de origen vegetal. La presencia combinada de Nitr¢geno, amino cidos y  cidos h£micos permite al nameo ofrecer energ¡a para el desarro', 'fertilizante2.png', 1, 3, '2022-07-20 01:47:53', NULL, NULL),
(11, 'Booster 125 Gr Magnesio Growshop', 650, 'Este aditivo est  especialmente formulado para proporcionar las cantidades adecuadas de f¢sforo, potasio, magnesio y micronutrientes para incrementar la floraci¢n y la producci¢n de aceites.', 'fertilizante3.png', 1, 3, '2022-07-20 01:47:53', NULL, NULL),
(12, 'Booster Soil Universal', 990, 'Adem s de bacterias acu ticas, contiene este booster tambi‚n micro nutrientes esenciales en forma quelada. Los micro nutrientes son componentes alimenticios indispensables para que la planta pueda desarrollarse plenamente, pero que ‚sta no puede producir ', 'fertilizante4.png', 1, 3, '2022-07-20 01:47:53', NULL, NULL),
(13, 'ATA AWA Leaves A', 1200, 'Nutrici¢n de crecimiento desarrollada para el cultivo en sistemas hidrop¢nicos de recirculaci¢n.', 'fertilizante5.png', 2, 3, '2022-07-20 01:47:53', NULL, NULL),
(14, 'ATA AWA Leaves B', 1500, 'Nutrici¢n de crecimiento desarrollada para el cultivo en sistemas hidrop¢nicos de recirculaci¢n.', 'fertilizante6.png', 1, 3, '2022-07-20 01:47:53', NULL, NULL),
(15, 'Grinder 1', 200, 'Small device that breaks down dried and cured cannabis buds and plant parts into small pieces..', 'picador1.png', 1, 2, '2022-07-20 01:47:53', NULL, NULL),
(16, 'Grinder 2', 300, 'Small device that breaks down dried and cured cannabis buds and plant parts into small pieces..', 'picador2.png', 1, 2, '2022-07-20 01:47:53', NULL, NULL),
(17, 'Oil', 4000, 'Cannabis Oil', 'oil2.jpg', 2, 2, '2022-07-20 01:47:53', NULL, NULL);

--
-- Volcado de datos para la tabla `product_catagories`
--

INSERT INTO `product_catagories` (`createdAt`, `updatedAt`, `deletedAt`, `id`, `name`) VALUES
('2022-07-17 01:46:20', NULL, NULL, 1, 'Normal'),
('2022-07-17 01:46:20', NULL, NULL, 2, 'Popular'),
('2022-07-17 01:46:20', NULL, NULL, 3, 'In Offer');

--
-- Volcado de datos para la tabla `product_families`
--

INSERT INTO `product_families` (`createdAt`, `updatedAt`, `deletedAt`, `id`, `name`) VALUES
('2022-07-20 01:26:27', NULL, NULL, 1, 'Semillas'),
('2022-07-20 01:26:27', NULL, NULL, 2, 'Consumo'),
('2022-07-20 01:26:27', NULL, NULL, 3, 'Fertilizantes'),
('2022-07-20 01:26:27', NULL, NULL, 4, 'Kits');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`createdAt`, `updatedAt`, `deletedAt`, `id`, `first_name`, `last_name`, `email`, `password`, `imagenPerfil`, `user_id`) VALUES
('2022-07-17 01:34:13', NULL, NULL, 1, 'Mufi', 'Swadlin', 'mswadlin0@cocolog-nifty.com', 'bKffvQcawRaD', 'img.png', 2),
('2022-07-17 01:34:13', NULL, NULL, 2, 'Essa', 'Isenor', 'eisenor1@twitpic.com', 'JyZRodrN3', 'img.png', 2),
('2022-07-17 01:34:13', NULL, NULL, 3, 'Lambert', 'Haggath', 'lhaggath2@t.co', 'r71kn4xEHH0', 'img.png', 2),
('2022-07-17 01:34:13', NULL, NULL, 4, 'Corrianne', 'Merrell', 'cmerrell3@infoseek.co.jp', 'voqcULlt1q', 'img.png', 2),
('2022-07-17 01:34:13', NULL, NULL, 5, 'Isabel', 'Sunley', 'isunley4@ameblo.jp', 'klcacHEXO0', 'img.png', 2),
('2022-07-17 01:34:13', NULL, NULL, 6, 'Elton', 'Lumbly', 'elumbly5@purevolume.com', 'wXHOyOuFw', 'img.png', 2),
('2022-07-17 01:34:13', NULL, NULL, 7, 'Lurette', 'Morefield', 'lmorefield6@adobe.com', 'nyZjjLge9vHE', 'img.png', 2),
('2022-07-17 01:34:13', NULL, NULL, 8, 'Hermon', 'Jedrzej', 'hjedrzej7@cbc.ca', '7yHZQiXa', 'img.png', 2),
('2022-07-17 01:34:13', NULL, NULL, 9, 'Jessalyn', 'Lawland', 'jlawland8@cnet.com', '3pT9MIbY', 'img.png', 2),
('2022-07-17 01:34:13', NULL, NULL, 10, 'Lacey', 'Depport', 'ldepport9@hp.com', 'JpRO5aXf', 'img.png', 2),
('2022-07-17 01:34:13', NULL, NULL, 30, 'Fede', 'Nilles', 'fede@maryjane.com', '12345678', 'img.png', 1),
('2022-07-17 01:34:13', NULL, NULL, 35, 'Martin', 'Ordoñez', 'martin@maryjane.com', '12345678', 'img.png', 1),
('2022-07-17 01:34:13', NULL, NULL, 36, 'Joaquin', 'Wolf', 'joaquin@maryjane.com', '12345678', 'img.png', 1),
('2022-08-01 01:43:32', '2022-08-01 01:43:32', NULL, 48, 'Joaco', 'Wolf', 'joacow88@gmail.com', '$2a$10$6b7sQwenn6c3gp9OHnGc7ON6hQBGTpoy88B/5K9d5Ef5q6MT5LC0S', '1659318212006.jpg', 2);

--
-- Volcado de datos para la tabla `user_permissions`
--

INSERT INTO `user_permissions` (`createdAt`, `updatedAt`, `deletedAt`, `id`, `name`) VALUES
('2022-07-17 01:38:34', NULL, NULL, 1, 'admin'),
('2022-07-17 01:38:34', NULL, NULL, 2, 'user');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
