-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2021 at 06:05 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `igal_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cart_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `cart_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`cart_id`, `user_id`, `cart_date`) VALUES
(1, 123456789, '2021-10-03 21:03:06'),
(9, 222222222, '2021-10-19 14:43:39'),
(20, 0, '2021-10-24 13:42:14'),
(102, 123456777, '2021-11-05 16:14:32');

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `cart_item_id` int(10) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`cart_item_id`, `product_id`, `quantity`, `cart_id`) VALUES
(1, 18, 2, 1),
(2, 20, 1, 1),
(3, 28, 1, 1),
(4, 44, 1, 2),
(5, 48, 1, 2),
(6, 24, 1, 2),
(7, 26, 1, 2),
(8, 4, 1, 3),
(9, 9, 1, 3),
(10, 12, 1, 4),
(11, 26, 1, 4),
(12, 24, 1, 4),
(13, 5, 1, 4),
(14, 6, 1, 4),
(15, 5, 1, 5),
(16, 7, 1, 5),
(17, 4, 6, 5),
(18, 42, 1, 5),
(19, 41, 3, 5),
(20, 12, 1, 6),
(21, 33, 1, 6),
(22, 45, 1, 6),
(23, 4, 1, 7),
(32, 12, 1, 9),
(33, 28, 1, 9),
(34, 5, 1, 10),
(35, 12, 1, 10),
(36, 41, 2, 10),
(37, 4, 1, 11),
(45, 1, 1, 14),
(48, 4, 9, 17),
(49, 1, 2, 17),
(50, 4, 1, 18),
(51, 1, 1, 19),
(52, 5, 1, 19),
(53, 4, 1, 20),
(54, 12, 1, 21),
(55, 13, 1, 22),
(57, 21, 6, 23),
(58, 42, 1, 24),
(59, 1, 1, 23),
(60, 2, 1, 23),
(61, 6, 1, 23),
(62, 26, 1, 23),
(63, 1, 1, 25),
(64, 2, 1, 25),
(65, 4, 1, 26),
(66, 10, 1, 26),
(67, 4, 1, 27),
(68, 4, 1, 28),
(69, 4, 1, 29),
(70, 1, 1, 30),
(71, 2, 1, 30),
(72, 4, 1, 31),
(73, 5, 1, 32),
(74, 5, 1, 33),
(75, 12, 1, 34),
(76, 1, 1, 35),
(77, 9, 1, 36),
(78, 4, 1, 37),
(79, 12, 1, 38),
(80, 5, 1, 39),
(81, 6, 1, 39),
(82, 7, 1, 39),
(83, 1, 1, 39),
(84, 2, 1, 39),
(85, 3, 1, 39),
(86, 4, 1, 40),
(87, 10, 1, 40),
(88, 14, 1, 40),
(89, 18, 1, 40),
(90, 5, 2, 40),
(91, 6, 2, 40),
(92, 40, 1, 40),
(93, 41, 1, 40),
(94, 42, 1, 40),
(95, 43, 1, 40),
(96, 46, 1, 40),
(97, 45, 1, 40),
(98, 44, 1, 40),
(99, 34, 1, 40),
(100, 33, 1, 40),
(101, 32, 1, 40),
(102, 31, 1, 40),
(103, 35, 1, 40),
(104, 36, 1, 40),
(105, 37, 1, 40),
(106, 38, 1, 40),
(107, 39, 1, 40),
(108, 27, 1, 40),
(109, 26, 6, 40),
(110, 25, 1, 40),
(111, 24, 1, 40),
(112, 29, 1, 40),
(113, 28, 1, 40),
(114, 21, 1, 40),
(115, 13, 1, 40),
(116, 23, 1, 40),
(117, 12, 1, 40),
(118, 22, 1, 40),
(119, 11, 1, 40),
(120, 7, 1, 40),
(121, 8, 1, 40),
(122, 20, 1, 40),
(123, 9, 1, 40),
(124, 1, 1, 40),
(125, 2, 1, 40),
(126, 3, 1, 40),
(127, 15, 1, 40),
(128, 17, 1, 40),
(129, 16, 1, 40),
(130, 25, 1, 41),
(131, 4, 2, 41),
(132, 10, 1, 41),
(133, 5, 2, 41),
(134, 17, 6, 41),
(143, 5, 3, 43),
(144, 6, 2, 43),
(145, 7, 1, 43),
(147, 4, 1, 43),
(148, 12, 2, 43),
(149, 8, 1, 43),
(151, 25, 1, 43),
(152, 29, 1, 43),
(153, 5, 1, 44),
(154, 6, 1, 44),
(155, 5, 1, 45),
(156, 7, 1, 45),
(157, 5, 1, 46),
(158, 7, 1, 46),
(159, 12, 1, 47),
(160, 13, 1, 47),
(161, 4, 1, 48),
(162, 8, 1, 48),
(163, 10, 1, 48),
(164, 18, 1, 48),
(165, 2, 1, 49),
(166, 4, 1, 49),
(167, 19, 1, 49),
(168, 3, 1, 50),
(169, 16, 1, 50),
(170, 3, 1, 51),
(171, 17, 1, 51),
(172, 3, 1, 52),
(173, 17, 1, 52),
(174, 30, 1, 52),
(175, 3, 1, 53),
(176, 16, 1, 53),
(177, 1, 1, 53),
(178, 15, 1, 53),
(179, 17, 1, 53),
(180, 10, 1, 53),
(181, 3, 1, 54),
(182, 16, 1, 54),
(183, 5, 1, 54),
(184, 4, 1, 55),
(185, 6, 1, 56),
(186, 5, 1, 57),
(187, 1, 1, 58),
(188, 2, 1, 58),
(189, 5, 1, 59),
(190, 5, 1, 60),
(191, 10, 1, 61),
(192, 6, 1, 62),
(193, 12, 1, 63),
(194, 42, 1, 64),
(195, 4, 1, 65),
(196, 1, 1, 66),
(197, 10, 1, 67),
(198, 3, 1, 68),
(199, 3, 1, 69),
(200, 3, 1, 70),
(201, 3, 1, 71),
(202, 3, 1, 72),
(203, 3, 1, 73),
(204, 3, 1, 74),
(205, 3, 1, 75),
(206, 3, 1, 76),
(207, 3, 1, 77),
(208, 3, 1, 78),
(209, 3, 1, 79),
(210, 3, 1, 80),
(211, 3, 1, 81),
(212, 3, 1, 82),
(213, 3, 1, 83),
(214, 3, 1, 84),
(215, 3, 1, 85),
(216, 3, 1, 86),
(217, 3, 2, 87),
(218, 3, 1, 88),
(219, 3, 1, 89),
(220, 17, 1, 90),
(221, 3, 1, 91),
(226, 3, 1, 93),
(227, 16, 1, 93),
(228, 1, 1, 93),
(229, 10, 1, 93),
(230, 3, 1, 94),
(231, 7, 1, 94),
(232, 39, 1, 94),
(233, 3, 1, 95),
(234, 16, 1, 95),
(235, 16, 1, 96),
(236, 15, 1, 96),
(237, 1, 1, 97),
(238, 3, 1, 97),
(239, 3, 1, 98),
(240, 16, 1, 98),
(241, 1, 1, 99),
(242, 1, 1, 100),
(243, 1, 1, 101),
(244, 1, 1, 102);

-- --------------------------------------------------------

--
-- Table structure for table `categorys`
--

CREATE TABLE `categorys` (
  `category_id` int(10) NOT NULL,
  `category_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`category_id`, `category_name`) VALUES
(-1, 'All Products'),
(1, 'Vegetables'),
(2, 'Fruits'),
(3, 'Dairy'),
(4, 'Pastries'),
(5, 'Drinks'),
(6, 'Meat'),
(7, 'Fish');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `cart_id` int(10) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `received_city` varchar(20) NOT NULL,
  `received_adress` varchar(40) NOT NULL,
  `received_date` date NOT NULL,
  `order_date` datetime NOT NULL DEFAULT current_timestamp(),
  `credit_card` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `cart_id`, `total_price`, `received_city`, `received_adress`, `received_date`, `order_date`, `credit_card`) VALUES
(1, 123456777, 90, '2.00', 'ramat-zvi', 'qqq', '2021-11-07', '2021-10-31 20:46:56', 1111),
(2, 123456777, 91, '6.25', 'ramat-zvi', 'פולו 1', '2021-11-03', '2021-11-01 08:18:43', 1111),
(3, 123456777, 93, '16.35', 'ramat-zvi', 'פולו 1', '2021-11-03', '2021-11-01 10:23:08', 1111),
(4, 123456777, 94, '109.46', 'ramat-zvi', 'פולו 1', '2021-11-03', '2021-11-01 13:04:37', 1111),
(5, 123456777, 95, '9.24', 'ramat-zvi', 'פולו 1', '2021-11-04', '2021-11-02 14:39:40', 1111),
(6, 123456777, 96, '4.99', 'ramat-zvi', 'פולו 1', '2021-11-05', '2021-11-03 12:27:03', 560),
(7, 123456777, 97, '11.36', 'ramat-zvi', 'פולו 1', '0000-00-00', '2021-11-03 12:42:25', 560),
(8, 123456777, 98, '9.24', 'ramat-zvi', 'פולו 1', '2021-11-05', '2021-11-03 13:33:55', 560),
(9, 123456777, 99, '5.11', 'ramat-zvi', 'qqq', '0000-00-00', '2021-11-03 20:39:45', 4444),
(10, 123456777, 100, '5.11', 'ramat-zvi', 'פולו 1', '2021-11-05', '2021-11-03 22:13:40', 4444),
(11, 123456777, 101, '5.11', 'ramat-zvi', 'qqq', '2021-11-07', '2021-11-05 16:14:02', 4444);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(10) NOT NULL,
  `product_name` varchar(80) NOT NULL,
  `category_id` int(10) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `img` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `category_id`, `price`, `img`) VALUES
(1, 'Green cubage', 1, '5.11', 'img-cabbage.jpg'),
(2, 'Purple cubage', 1, '5.00', 'img-cabbage-purple.jpg'),
(3, 'Carrot', 1, '6.25', 'img-Carrot.jpg'),
(4, 'Banana', 2, '3.00', 'img-Banana.jpg'),
(5, 'Feta', 3, '2.55', 'img-Feta.jpg'),
(6, 'Gouda', 3, '10.88', 'img-Gouda.jpg'),
(7, 'mozzarella', 3, '4.44', 'img-mozzarella.jpg'),
(8, 'Riccota', 3, '5.55', 'img-ricotta.jpg'),
(9, 'Roquefort', 3, '6.99', 'img-roquefort.jpg'),
(10, 'Green apple', 2, '2.00', 'img-green-apple.jpg'),
(11, 'Ciabatta', 4, '2.22', 'img-Ciabatta.jpg'),
(12, 'Brioche', 4, '9.00', 'img-Brioche.jpg'),
(13, 'Focaccia', 4, '15.77', 'img-Focaccia.jpg'),
(14, 'red apple', 2, '2.00', 'img-red-apple.jpg'),
(15, 'Onion', 1, '2.00', 'img-onion.jpg'),
(16, 'Cucumber', 1, '2.99', 'img-cucamber.jpg'),
(17, 'Tomato', 1, '2.00', 'img-tomato.jpg'),
(18, 'Mango', 2, '9.99', 'img-Mango.jpg'),
(19, 'Strawberry', 2, '22.00', 'img-strawberry.jpg'),
(20, 'Cheddar', 3, '10.53', 'img-Cheddar.jpg'),
(21, 'Pita', 4, '1.10', 'img-Pita.jpg'),
(22, 'Rye', 4, '13.77', 'img-Rye.jpg'),
(23, 'Sourdough', 4, '19.21', 'img-sourdough.jpg'),
(24, 'Corona', 5, '9.99', 'img-Corona.jpg'),
(25, 'Diet Coke', 5, '9.44', 'img-Diet-Coke.jpg'),
(26, 'Evian', 5, '7.00', 'img-Evian.jpg'),
(27, 'Heineken', 5, '12.44', 'img-Heineken.jpg'),
(28, 'Spring water', 5, '6.66', 'img-spring-water.jpg'),
(29, 'Zero Coke', 5, '8.22', 'img-zero-coke.jpg'),
(30, 'Orange', 2, '4.00', 'img-Orange.jpg'),
(31, 'Brisket Flat', 6, '55.00', 'img-Brisket-Flat.JPG'),
(32, 'Flank Steak', 6, '44.00', 'img-Flank-Steak.JPG'),
(33, 'Porterhouse Steak', 6, '67.44', 'img-Porterhouse-Steak.JPG'),
(34, 'Ranch Steak', 6, '65.00', 'img-Ranch-Steak.JPG'),
(35, 'Ribeye Filet', 6, '43.00', 'img-Ribeye-Filet.JPG'),
(36, 'Ribeye Steak Boneless', 6, '76.00', 'img-Ribeye-Steak-Boneless.JPG'),
(37, 'Sirloin', 6, '78.00', 'img-Sirloin.JPG'),
(38, 'Stew Meat', 6, '49.00', 'img-Stew Meat.JPG'),
(39, 'T-Bone Steak', 6, '98.77', 'img-T-Bone-Steak.JPG'),
(40, 'Herring', 7, '35.00', 'img-Herring.jpg'),
(41, 'Mackerel', 7, '47.49', 'img-Mackerel.jpg'),
(42, 'Pacific halibut', 7, '55.00', 'img-Pacific-halibut.jpg'),
(43, 'Rainbow trout', 7, '65.00', 'img-Rainbow-trout.jpg'),
(44, 'Rock cod', 7, '56.00', 'img-Rock-cod.jpg'),
(45, 'Sardines', 7, '37.00', 'img-Sardines.jpg'),
(46, 'Tuna', 7, '87.00', 'img-Tuna.jpg'),
(47, 'Watermelon', 2, '7.77', 'img-Watermelon.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `i_d` int(9) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `mail` varchar(40) NOT NULL,
  `password_hach` varchar(100) NOT NULL,
  `city` varchar(20) NOT NULL,
  `adress` varchar(40) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`i_d`, `first_name`, `last_name`, `mail`, `password_hach`, `city`, `adress`, `admin`) VALUES
(111111111, 'פולו', 'קריגל', 'aa@aa.aa', '$2a$10$xdaxL9cPT.hbbX.xQdaNp.BKYIOMtHgzY2UAkGCuZCsGwt6JnUSPK', 'ramat-zvi', 'פולו 1', 0),
(111111112, 'Igal', 'Krigel', 'ikrigel@gmail.com', '$2a$10$TBb/7h419mX.KozGwueyy.Sp6v4JEi1iUnC9OnatBs2A87vJa30Ce', 'ramat-zvi', 'פולו 1', 0),
(111122222, 'Igal', 'Krigel', 'a@a.aw', '$2a$10$mE902i1OU99W13MHHP0.ZuAXSJf.xCwkWgXHcLJzLZRROq1HYPYai', 'ramat-zvi', 'פולו 1', 0),
(112233444, 'polo1', 'polo12', 'polo1@polo1.com', '$2a$10$q/UMziDIKIQ5uW1t5kt6B.xgS1mFGy4S7du7JRDM2Tlady4wAdx0e', 'ramat-zvi', 'polo 1', 0),
(123456666, 'qqqqq', 'qqqqq', 'qq@qq.qqq', '$2a$10$MuvU8RSWXqwO8kBZvLE.tOD64gC2CCjE2LE20XhULVGFzFKuvniMa', 'tel aviv', 'qqqqq', 0),
(123456777, 'igal', 'krigel', 'a@a.a', '$2a$10$gyCZ4wz4ZgzeoL.JD8o8Du7RkBvRcHe7fcEspMMp8ZrpPHbxi9Rfi', 'ramat-zvi', 'qqq', 0),
(123456788, 'igal', 'krigel', 'b@b.b', '$2a$10$iOO9OpmF9DS0tuyrE4DJBOou8SOgQWhTfysHdoaZJ3TqyuAdtl7B.', 'tel aviv', 'qqq', 1),
(123456789, 'aaaa', 'aaaa', 'a@b.c', '$2a$10$hPoUFV/iAcTagdlsv2OdceLCDsP5x8EHvId9sYrxtj2DWj0qbNBgq', 'ramat-zvi', '1111', 0),
(211111111, 'Polo', 'Krigel', 'p@p.p', '$2a$10$B7oEzf7PQLICtiVI7vejBOkiR7y2.I8xLHa3RIjqjsDutbSOuMHB6', 'ramat-zvi', 'polo 1', 0),
(222222222, 'polo', 'polo', 'polo@polo.com', '$2a$10$5pRW7gFuPgv86eNjifxn8u42NKgotvoS6XcfYhzG5RoXgjAZWak2.', 'ramat-zvi', 'polo 1', 0),
(888888888, 'Igal', 'Krigel', 'c@c.c', '$2a$10$zDSgEpa2PIjmxY2AQvK2L.tSuDSEw3FDbzdcPJPzz5h58aUdWGu/C', 'ramat-zvi', 'פולו 1', 0),
(992233444, 'polo1', 'polo12', 'polo1@polo1.com', '$2a$10$K6tGGKzxaMQ49C7bBdiOee6gxR5d8U2RofNvVuk15yCKNy2yXpRVK', 'ramat-zvi', 'polo 11', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`cart_item_id`);

--
-- Indexes for table `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`i_d`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `cart_item_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=245;

--
-- AUTO_INCREMENT for table `categorys`
--
ALTER TABLE `categorys`
  MODIFY `category_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `i_d` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=992233445;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
