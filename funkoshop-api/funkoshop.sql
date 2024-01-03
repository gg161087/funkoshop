-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-01-2024 a las 14:34:34
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
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'funkos', 'Figuras coleccionables Funko Pop', '2023-12-13 13:28:50', '2023-12-13 13:28:50'),
(2, 'remeras', 'Remeras de anime, series, peliculas y más', '2023-12-13 13:28:50', '2023-12-13 13:28:50'),
(3, 'llaveros', 'Llaveros coleccionables', '2023-12-13 13:28:50', '2023-12-13 13:28:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `licences`
--

CREATE TABLE `licences` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `licences`
--

INSERT INTO `licences` (`id`, `name`, `description`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Pokemon', 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.', 'pokemon/vulpix-1.webp', '2023-12-27 14:44:16', '2023-12-27 14:44:16'),
(2, 'Star Wars', 'Disfruta de una saga que sigue agregando personajes a su colección.', 'star-wars/baby-yoda-1.webp', '2023-12-27 14:44:16', '2023-12-27 14:44:16'),
(3, 'Harry Potter', 'Revive los recuerdos de una saga llena de magia y encanto.', 'harry-potter/snape-patronus-1.webp', '2023-12-27 14:44:16', '2023-12-27 14:44:16'),
(4, 'Naruto', 'Disfruta de la historia de un ninja adolescente', 'naruto/naruto-kakashi-1.webp', '2023-12-27 14:44:16', '2023-12-27 14:44:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `stock` int(11) DEFAULT NULL,
  `discount` decimal(5,2) DEFAULT 0.00,
  `sku` varchar(50) NOT NULL,
  `dues` int(11) DEFAULT 0,
  `image_front` varchar(255) DEFAULT NULL,
  `image_back` varchar(255) DEFAULT NULL,
  `licence_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `stock`, `discount`, `sku`, `dues`, `image_front`, `image_back`, `licence_id`, `category_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Baby Yoda Blueball', 'Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.', 1799.99, 8, 10.00, 'STW001001', 3, 'star-wars/baby-yoda-1.webp', 'star-wars/baby-yoda-1-box.webp', 2, 1, '2023-12-27 14:44:16', '2024-01-02 10:47:35'),
(2, 'Luke Skylwalker & Grogu', 'Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.', 2399.99, 8, 10.00, 'STW001003', 3, 'star-wars/luke-1.webp', 'star-wars/luke-1-box.webp', 2, 1, '2023-12-27 14:44:16', '2024-01-02 10:47:44'),
(3, 'Stormtrooper Lightsaber', 'Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.', 1799.99, 8, 10.00, 'STW001004', 3, 'star-wars/trooper-1.webp', 'star-wars/trooper-1-box.webp', 2, 1, '2023-12-27 14:44:16', '2024-01-02 10:47:56'),
(4, 'Charmander Smiley', 'Figura coleccionable de Charmander - Pokemon Saga.', 1799.99, 8, 10.00, 'PKM001001', 3, 'pokemon/charmander-1.webp', 'pokemon/charmander-1-box.webp', 1, 1, '2023-12-27 14:44:16', '2024-01-02 10:48:04'),
(5, 'Dragonite Hi!', 'Figura coleccionable de Dragonite - Pokemon Saga.', 1799.99, 8, 10.00, 'PKM001002', 3, 'pokemon/dragonite-1.webp', 'pokemon/dragonite-1-box.webp', 1, 1, '2023-12-27 14:44:16', '2024-01-02 10:48:18'),
(6, 'Pidgeotto Flying', 'Figura coleccionable de Pidgeotto - Pokemon Saga.', 1799.99, 8, 10.00, 'PKM00103', 3, 'pokemon/pidgeotto-1.webp', 'pokemon/pidgeotto-1-box.webp', 1, 1, '2023-12-27 14:44:16', '2024-01-02 10:48:33'),
(7, 'Pikachu Smiley', 'Figura coleccionable de Pikachu - Pokemon Saga.', 1799.99, 8, 10.00, 'PKM001004', 3, 'pokemon/pikachu-1.webp', 'pokemon/pikachu-1-box.webp', 1, 1, '2023-12-27 14:44:16', '2024-01-02 10:48:42'),
(8, 'Vulpix Fancy', 'Figura coleccionable de Vulpix - Pokemon Saga.', 99.99, 8, 10.00, 'PKM001005', 3, 'pokemon/vulpix-1.webp', 'pokemon/vulpix-1-box.webp', 1, 1, '2023-12-27 14:44:16', '2024-01-02 10:48:48'),
(9, 'Harry Potter & Hegwid', 'Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.', 1799.99, 11, 10.00, 'HPT001001', 9, 'harry-potter/harry-1.webp', 'harry-potter/harry-1-box.webp', 3, 1, '2023-12-27 14:44:16', '2024-01-02 10:48:56'),
(10, 'Herminione Ball Dress', 'Figura coleccionable de Herminione - Harry Potter Saga.', 1799.99, 8, 10.00, 'HPT001002', 3, 'harry-potter/hermione-1.webp', 'harry-potter/hermione-1-box.webp', 3, 1, '2023-12-27 14:44:16', '2024-01-02 10:49:04'),
(11, 'Luna Lovegood Lion Mask', 'Figura coleccionable de Luna Lovegood - Harry Potter Saga.', 1799.99, 8, 10.00, 'HPT001003', 3, 'harry-potter/luna-1.webp', 'harry-potter/luna-1-box.webp', 3, 1, '2023-12-27 14:44:16', '2024-01-02 10:49:09'),
(12, 'Snape Patronus', 'Figura coleccionable de Snape Patronus - Harry Potter Saga.', 1799.99, 13, 10.00, 'HPT001004', 3, 'harry-potter/snape-patronus-1.webp', 'harry-potter/snape-patronus-1-box.webp', 3, 1, '2023-12-27 14:44:16', '2024-01-02 10:49:15'),
(13, 'Kakashi Hatake Shippuden', 'Kakashi Hatake Shippuden', 1999.99, 20, 10.00, 'NRT001001', 9, 'naruto/naruto-kakashi-1.webp', 'naruto/naruto-kakashi-1-box.webp', 4, 1, '2023-12-27 14:44:16', '2024-01-02 10:49:21'),
(14, 'Harry Potter', 'Remera coleccionable de Harry Potter.', 100.00, 999, 10.00, 'HPT003001', 6, 'harry-potter/harry-3.webp', 'harry-potter/harry-3-box.webp', 3, 2, '2024-01-02 10:41:29', '2024-01-02 11:57:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_specifications`
--

CREATE TABLE `product_specifications` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `value` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'administrator', '2023-12-04 19:12:02', '2023-12-04 19:12:02'),
(2, 'guest', '2023-12-04 19:12:02', '2023-12-12 10:48:16'),
(3, 'seller', '2023-12-04 19:12:02', '2023-12-12 10:48:21'),
(4, 'client', '2023-12-04 19:12:02', '2023-12-12 10:48:27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `telephone` varchar(13) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `telephone`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Administrador', 'Itechnology', '542215123478', 'admin@funkoshop.com', '$2b$10$DwS8ByBVKeeKmMj9vGVHb.bAazoDI9JklgZKOjGNL22NJbC8vX92a', '2023-12-12 14:11:34', '2023-12-27 13:26:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2023-12-12 14:11:34', '2023-12-13 10:54:11');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_name` (`name`);

--
-- Indices de la tabla `licences`
--
ALTER TABLE `licences`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_name` (`name`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_specifications`
--
ALTER TABLE `product_specifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_email` (`email`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product_specifications`
--
ALTER TABLE `product_specifications`
  ADD CONSTRAINT `product_specifications_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;