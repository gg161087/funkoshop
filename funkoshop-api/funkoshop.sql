-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-12-2023 a las 17:56:26
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `funkoshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_description`) VALUES
(1, 'Funkos', 'Figuras coleccionables Funko Pop'),
(2, 'Remeras', 'Remeras de anime, series, peliculas y más'),
(3, 'LLaveros', 'Llaveros coleccionables');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `licence`
--

CREATE TABLE `licence` (
  `licence_id` int(11) NOT NULL,
  `licence_name` varchar(255) NOT NULL,
  `licence_description` varchar(255) NOT NULL,
  `licence_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `licence`
--

INSERT INTO `licence` (`licence_id`, `licence_name`, `licence_description`, `licence_image`) VALUES
(1, 'Pokemon', 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.', 'pokemon/vulpix-1.webp'),
(2, 'Star Wars', 'Disfruta de una saga que sigue agregando personajes a su colección.', 'star-wars/baby-yoda-1.webp'),
(3, 'Harry Potter', 'Revive los recuerdos de una saga llena de magia y encanto.', 'harry-potter/snape-patronus-1.webp'),
(4, 'Naruto', 'Disfruta de la historia de un ninja adolescente', 'naruto/naruto-kakashi-1.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `sku` varchar(30) NOT NULL,
  `dues` int(11) DEFAULT NULL,
  `image_front` varchar(200) DEFAULT NULL,
  `image_back` varchar(200) DEFAULT NULL,
  `create_time` datetime DEFAULT current_timestamp(),
  `licence_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_description`, `price`, `stock`, `discount`, `sku`, `dues`, `image_front`, `image_back`, `create_time`, `licence_id`, `category_id`) VALUES
(1, 'Baby Yoda Blueball', 'Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.', 1799.99, 8, 10, 'STW001001', 3, 'star-wars/baby-yoda-1.webp', 'star-wars/baby-yoda-box.webp', '2023-10-09 09:21:46', 2, 1),
(2, 'Luke Skylwalker & Grogu', 'Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.', 2399.99, 8, 10, 'STW001003', 3, 'star-wars/luke-1.webp', 'star-wars/luke-box.webp', '2023-10-09 09:21:46', 2, 1),
(3, 'Stormtrooper Lightsaber', 'Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.', 1799.99, 8, 10, 'STW001004', 3, 'star-wars/trooper-1.webp', 'star-wars/trooper-box.webp', '2023-10-09 09:21:46', 2, 1),
(4, 'Charmander Smiley', 'Figura coleccionable de Charmander - Pokemon Saga.', 1799.99, 8, 10, 'PKM001001', 3, 'pokemon/charmander-1.webp', 'pokemon/charmander-box.webp', '2023-10-09 09:21:46', 1, 1),
(5, 'Dragonite Hi!', 'Figura coleccionable de Dragonite - Pokemon Saga.', 1799.99, 8, 10, 'PKM001002', 3, 'pokemon/dragonite-1.webp', 'pokemon/dragonite-box.webp', '2023-10-09 09:21:46', 1, 1),
(6, 'Pidgeotto Flying', 'Figura coleccionable de Pidgeotto - Pokemon Saga.', 1799.99, 8, 10, 'PKM00103', 3, 'pokemon/pidgeotto-1.webp', 'pokemon/pidgeotto-box.webp', '2023-10-09 09:21:46', 1, 1),
(7, 'Pikachu Smiley', 'Figura coleccionable de Pikachu - Pokemon Saga.', 1799.99, 8, 10, 'PKM001004', 3, 'pokemon/pikachu-1.webp', 'pokemon/pikachu-box.webp', '2023-10-09 09:21:46', 1, 1),
(8, 'Vulpix Fancy', 'Figura coleccionable de Vulpix - Pokemon Saga.', 99.99, 8, 10, 'PKM001005', 3, 'pokemon/vulpix-1.webp', 'pokemon/vulpix-box.webp', '2023-10-09 09:21:46', 1, 1),
(9, 'Harry Potter & Hegwid', 'Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.', 1799.99, 11, 10, 'HPT001001', 9, 'harry-potter/harry-1.webp', 'harry-potter/harry-box.webp', '2023-10-09 09:21:46', 3, 1),
(10, 'Herminione Ball Dress', 'Figura coleccionable de Herminione - Harry Potter Saga.', 1799.99, 8, 10, 'HPT001002', 3, 'harry-potter/hermione-1.webp', 'harry-potter/hermione-box.webp', '2023-10-09 09:21:46', 3, 1),
(11, 'Luna Lovegood Lion Mask', 'Figura coleccionable de Luna Lovegood - Harry Potter Saga.', 1799.99, 8, 10, 'HPT001003', 3, 'harry-potter/luna-1.webp', 'harry-potter/luna-box.webp', '2023-10-09 09:21:46', 3, 1),
(12, 'Snape Patronus', 'Figura coleccionable de Snape Patronus - Harry Potter Saga.', 1799.99, 13, 10, 'HPT001004', 3, 'harry-potter/snape-patronus-1.webp', 'harry-potter/snape-patronus-box.webp', '2023-10-09 09:21:46', 3, 1),
(13, 'Kakashi Hatake Shippuden', 'Kakashi Hatake Shippuden', 1999.99, 20, 10, 'NRT001001', 9, 'naruto/naruto-kakashi-1.webp', 'naruto/naruto-kakashi-box.webp', '2023-10-09 09:21:46', 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'root'),
(2, 'admin'),
(3, 'guest');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(16) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `create_time` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`user_id`, `name`, `lastname`, `email`, `password`, `create_time`) VALUES
(1, 'Gonzalo', 'Gonzalez', 'gonzalo.gonzalez@sg.gba.gob.ar', '$2b$10$I2O8Qu8TUHtraxExvf7j4O.ZpPP7GWJJmJJeQ6fws.yBiJu1Po8U.', '2023-10-09 12:33:57'),
(2, 'test', 'tester', 'test5@email.com', '$2b$10$v9JKHCsTZeKgKGkS1rfGuOdoDY4AYgWqmK1uixQDyU1CIAPlgRG62', '2023-10-09 12:28:07'),
(3, 'admin', 'admin', 'admin@local.com', '$2b$10$S1uI41kzkdTjSUlA.HX1S.lF5kAV00hHNcZyE6BX.Um.lSJzu9jYi', '2023-10-09 12:35:25'),
(4, 'Test', 'Tester', 'test@tester.com', '$2b$10$L0TZraXDvSgVnzPhqyY9l./bhGMbbsnkPKHCCSKGQ8IYtZgHjCKS2', '2023-10-10 16:49:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_has_role`
--

CREATE TABLE `user_has_role` (
  `user_user_id` int(11) NOT NULL,
  `role_role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `user_has_role`
--

INSERT INTO `user_has_role` (`user_user_id`, `role_role_id`) VALUES
(1, 1),
(2, 3),
(3, 2),
(4, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indices de la tabla `licence`
--
ALTER TABLE `licence`
  ADD PRIMARY KEY (`licence_id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `licence_id` (`licence_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indices de la tabla `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD PRIMARY KEY (`user_user_id`,`role_role_id`),
  ADD UNIQUE KEY `user_has_role_role_role_id_user_user_id_unique` (`user_user_id`,`role_role_id`),
  ADD KEY `role_role_id` (`role_role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`licence_id`) REFERENCES `licence` (`licence_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD CONSTRAINT `user_has_role_ibfk_1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_has_role_ibfk_2` FOREIGN KEY (`role_role_id`) REFERENCES `role` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;