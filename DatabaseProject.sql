-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: May 04, 2016 at 02:05 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DatabaseProject`
--

-- --------------------------------------------------------

--
-- Table structure for table `Comments`
--

CREATE TABLE `Comments` (
  `PostId` char(20) NOT NULL,
  `Author` varchar(20) NOT NULL,
  `Recipient` varchar(20) NOT NULL,
  `Content` varchar(200) NOT NULL,
  `Sendtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Comments`
--

INSERT INTO `Comments` (`PostId`, `Author`, `Recipient`, `Content`, `Sendtime`) VALUES
('00013', 'Jeff0003', 'Vivin ', 'I agree! this movie is really goog', '2016-03-05 14:00:00'),
('00014', 'Jeff0003', 'Katty', 'I agree!', '2016-04-03 04:02:00'),
('00005', 'Joe', 'Jeff0003', 'Thank you for sharing with me', '2016-04-01 12:00:00'),
('00005', 'Joe', 'Jeff0003', 'No problem', '2016-04-02 00:00:00'),
('00014', 'Joe', 'Jeff0003', 'This is a really good cartoon', '2016-04-03 04:00:00'),
('00001', 'Joe', 'Jeff0003', 'It is a wonderful weekend right', '2016-05-03 20:22:31'),
('00003', 'Katty', 'Jeff0003', 'It is really good', '2016-01-01 13:00:00'),
('00013', 'Kobe', 'Jeff0003', 'I like it too', '2016-05-03 20:28:51'),
('00003', 'Tong', 'Jeff0003', 'It is new york right', '2016-04-03 12:00:00'),
('00001', 'Vivin', 'Jeff0003', 'The flower is really beautiful', '2016-05-03 20:22:37');

-- --------------------------------------------------------

--
-- Table structure for table `Invitation`
--

CREATE TABLE `Invitation` (
  `UserId` varchar(20) NOT NULL DEFAULT '',
  `Invitor` varchar(20) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Invitation`
--

INSERT INTO `Invitation` (`UserId`, `Invitor`) VALUES
('Jeff0003', 'Cheng'),
('Jeff0003', 'Du'),
('Jeff0003', 'James'),
('Jeff0003', 'Lena'),
('Jeff0003', 'Long'),
('Jeff0011', 'Jeff0012');

-- --------------------------------------------------------

--
-- Table structure for table `Location`
--

CREATE TABLE `Location` (
  `LocationId` varchar(20) NOT NULL DEFAULT '',
  `Longtitude` varchar(20) NOT NULL,
  `Latitude` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Location`
--

INSERT INTO `Location` (`LocationId`, `Longtitude`, `Latitude`) VALUES
('Central Park', '40.784294', '-73.967361'),
('China Town', '40.720993', '-74.004949'),
('Korea Town', '40.748236', '-73.988022'),
('NYU Bobst Library', '40.729389', '-73.997243'),
('NYU Bookstore', '40.729374', '-73.993320'),
('SOHO', '40.725645', '-74.005636'),
('Times Square', '40.758960', '-73.984992'),
('Union Square', '40.735389', '-73.989965'),
('Washington Square', '40.730465', '-73.997589');

-- --------------------------------------------------------

--
-- Table structure for table `News`
--

CREATE TABLE `News` (
  `PostId` varchar(20) NOT NULL,
  `UserId` varchar(20) NOT NULL,
  `Image` varchar(500) DEFAULT NULL,
  `Video` varchar(500) DEFAULT NULL,
  `Entry` varchar(255) DEFAULT NULL,
  `Posttime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `LocationId` varchar(100) DEFAULT NULL,
  `Longtitude` varchar(100) DEFAULT NULL,
  `Latitude` varchar(100) DEFAULT NULL,
  `Setting` varchar(10) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `Ilikeit` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `News`
--

INSERT INTO `News` (`PostId`, `UserId`, `Image`, `Video`, `Entry`, `Posttime`, `LocationId`, `Longtitude`, `Latitude`, `Setting`, `Ilikeit`) VALUES
('00001', 'Jeff0003', 'http://i.zeze.com/attachment/forum/201508/15/080733n717wga7nj7ded01.jpg', NULL, 'Went to see Sakura with my Sakura shoes', '2015-08-02 01:51:26', 'Central Park', '40.784294', '-73.967361', 'Public', 0),
('00002', 'Joe', NULL, 'https://www.youtube.com/embed/yGZhG_i5ahc', 'It is a nice game!', '2015-08-21 01:52:05', 'NYU Bobst Library', '40.729389', '73.997243', 'Private', 0),
('00003', 'Jeff0003', NULL, 'https://www.youtube.com/embed/7LOavq3RQI4', 'It is a wonderful video!', '2015-09-18 01:53:00', 'Washington Square', '40.730465', '-73.997589', 'Public', 0),
('00004', 'Joe', 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Ying06.jpg', NULL, 'I have a date with the spring~', '2015-10-01 01:54:03', 'Union Square', '40.735389', '-73.989965', 'Public', 0),
('00005', 'Jeff0003', NULL, 'https://www.youtube.com/embed/1htJb0ZSVOc', NULL, '2015-10-04 01:55:23', 'China Town', '40.720993', '-74.004949', 'Private', 0),
('00006', 'Vivin', NULL, 'https://www.youtube.com/embed/TSW4ef6A-lw', 'That''s my sister!', '2015-10-23 01:56:46', 'SOHO', '40.725645', '-74.005636', 'Private', 0),
('00007', 'Lena', 'http://wellnesscounselingmilwaukee.com/wp-content/uploads/2015/07/4-Nature-Wallpapers-2014-1.jpg', NULL, 'It is really beautiful', '2015-12-05 10:23:32', 'Korea Town ', '40.748236', '-73.988022', 'Public', 0),
('00008', 'Lena', NULL, 'https://www.youtube.com/embed/wmlck-TVrlg', 'It is very sad that we cannot see it in the future!', '2015-12-31 13:30:43', 'NYU Bookstore', '40.729374', '-73.993320', 'Private', 0),
('00009', 'Katty', 'http://www.wallcoo.com/cartoon/spring_art/wallpapers/1024x768/%5Bwallcoo%5D_spring_scene_0164591a.jpg', NULL, 'This picture is very nice!', '2016-01-01 12:36:13', 'Times Square', '40.758960', '-73.984992', 'Private', 0),
('00010', 'Kobe', 'http://static.vibe.com/files/2015/10/kobe-bryant-master-p-lamar-odom.jpg', 'https://www.youtube.com/embed/EzpsyFvz7W0', 'Kobe is so cool', '2016-01-05 16:21:38', 'NYU Bookstore', '40.729374', '-73.993320', 'Private', 0),
('00011', 'Kobe', NULL, NULL, 'I feel very tired after a hard match.', '2016-02-10 17:18:30', 'Times Square', '40.758960', '-73.984992', 'Public', 0),
('00012', 'Tong', 'http://www.freelargeimages.com/wp-content/uploads/2014/11/Happy_birthday.jpg', NULL, 'Happy birthday! Jeff', '2016-03-02 11:35:00', 'China Town', '40.720993', '-74.004949', 'Public', 0),
('00013', 'Jeff0003', 'https://i.ytimg.com/vi/jqmUoteadZI/maxresdefault.jpg', 'https://www.youtube.com/embed/5mkm22yO-bs', 'It is a wonderful movie, you''d better see it.', '2016-03-16 20:18:20', 'Washington Square', '40.730465', '-73.997589', 'Public', 0),
('00014', 'Jeff0003', 'http://content.internetvideoarchive.com/content/photos/9930/658596_028.jpg', NULL, 'I love the rabbit in zootopia!', '2016-04-02 20:00:00', 'Union Square', '40.735389', '-73.989965', 'Public', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Relationship`
--

CREATE TABLE `Relationship` (
  `UserId` varchar(20) NOT NULL DEFAULT '',
  `Friend` varchar(20) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Relationship`
--

INSERT INTO `Relationship` (`UserId`, `Friend`) VALUES
('Jeff', 'Cheng'),
('Jeff', 'Jie'),
('Jeff', 'Long'),
('Jeff0003', 'Jeff'),
('Jeff0003', 'Joe'),
('Jeff0003', 'Katty'),
('Jeff0003', 'Kobe'),
('Jeff0003', 'Patty'),
('Jeff0003', 'Tong'),
('Jeff0003', 'Vivin'),
('Joe', 'Du'),
('Joe', 'James'),
('Joe', 'Kobe'),
('Joe', 'Lena'),
('Tong ', 'Anshu'),
('Tong ', 'James'),
('Vivin ', 'Eric'),
('Vivin', 'Katty');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `UserId` varchar(20) NOT NULL,
  `Age` int(2) NOT NULL,
  `Image` varchar(500) DEFAULT NULL,
  `Zipcode` int(5) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Starttime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`UserId`, `Age`, `Image`, `Zipcode`, `Email`, `Password`, `Starttime`) VALUES
('Anshu', 24, 'http://www.kouhl.com/kouhl2014/wp-content/uploads/2014/11/smiling-woman.jpg', 11230, 'lijin@gmail.com', '123456', '2015-04-14'),
('Cheng', 22, 'http://www.mens-hairstylists.com/wp-content/uploads/2015/10/Classy-Mens-Hairstyles.jpg', 11218, 'chenggong@gmail.com', '1313131', '2015-02-02'),
('Du', 21, 'http://www.hairloveandmakeup.com/wp-content/uploads/2014/02/menscut.jpg', 11228, 'peishengdu@gmail.com', 'peishengdu', '2015-09-15'),
('Eric', 21, 'http://www.hairfinder.com/hairstyles6/jld-hairstyle13e.jpg', 11229, 'ericsong@gmail.com', '121212', '2014-08-19'),
('James', 22, 'http://www.mens-hairstyle.com/wp-content/uploads/2014/12/Best-Hairstyles-for-Men.jpg', 11209, 'Jamesking@gmail.com', '123456', '2015-10-12'),
('Jeff', 21, 'http://www.mens-hairstyle.com/wp-content/uploads/2015/01/Trendy-Mens-Haircuts-2015-2.jpg', 11201, 'llx0001@gmail.com', '123456', '2014-06-08'),
('Jeff0003', 22, 'http://artlook1.ru/wp-content/uploads/2015/12/morrismotley_longer-hair-with-short-sides.jpg', 11201, 'jeff0003@nyu.edu', '123456', '2016-01-05'),
('Jie', 26, 'http://fashionzhub.com/wp-content/uploads/2014/10/hairstyles-for-men-1.png', 11228, 'jieyang@gmail.com', 'yangjie', '2015-03-17'),
('Joe', 22, 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F03320dd554c75c700000158fce17209.jpg&imgrefurl=http%3A%2F%2Fwww.zcool.com.cn%2Ftosearch.do%3Fworld%3D%25E7%25B2%25BE%25E7%25BE%258E%25E5%259B%25BE%25E7%2589%2587%26page%3D4&docid=iPKumttXNa7JkM&tbnid=Cd8EV7dStPkPIM%3A&w=1680&h=1050&ved=0ahUKEwimgrKNxrrMAhVCkh4KHShJAkkQMwglKAEwAQ&iact=mrc&uact=8&biw=1440&bih=828', 11228, 'zhujingyuan@gmail.com', '123456', '2016-05-01'),
('Katty', 22, 'http://cache1.asset-cache.net/gc/162977688-natural-beauty-portrait-of-young-woman-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=4HDnuBtZ9eF6rsxsKg05tkG5wkBOfwtqO0xkLNz6j2ZV7yigO3H4LG9hNbE5CSro', 11213, 'Kattylady.qq.com', 'katty', '2016-01-17'),
('Kobe', 30, 'http://hdimagesnew.com/wp-content/uploads/2015/08/Dark-Short-Mens-Haircut-2015.jpg', 11220, 'kobe@gmail.com', '12121212', '2016-01-17'),
('Lena', 22, 'http://st.depositphotos.com/1001992/1987/i/950/depositphotos_19871785-Beautiful-woman-with-fresh-skin.jpg', 11258, 'lenanyu@nyu.edu', '123456', '2015-08-24'),
('Long', 28, 'http://www.menhairstylehub.com/wp-content/uploads/2014/05/best-hairstyles-for-men-with-round-faces.jpg', 10218, 'longzaitian@gmial.com', '14141414', '2014-08-28'),
('Patty', 21, 'https://pixabay.com/static/uploads/photo/2016/01/03/14/25/young-woman-1119478_960_720.jpg', 11240, 'patty@gmail.com', '123456', '2015-09-14'),
('Peter', 25, 'https://s-media-cache-ak0.pinimg.com/736x/cc/c4/71/ccc4713aa66766460a0954ca36bbce9a.jpg', 11216, 'peterzhang@gmail.com', '121314', '2015-03-24'),
('Tong', 50, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sakura_s.jpg/300px-Sakura_s.jpg', 11228, 'litongmaster@qq.com', '12121212', '2015-11-16'),
('Vivin', 22, 'http://www.ceors.com.br/site/wp-content/uploads/2015/03/bigstock-Happy-smiling-business-woman-w-38711809.jpg', 11159, 'vivin@gmail.com', '13121312', '2015-11-11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`Author`,`Sendtime`);

--
-- Indexes for table `Invitation`
--
ALTER TABLE `Invitation`
  ADD PRIMARY KEY (`UserId`,`Invitor`);

--
-- Indexes for table `Location`
--
ALTER TABLE `Location`
  ADD PRIMARY KEY (`LocationId`);

--
-- Indexes for table `News`
--
ALTER TABLE `News`
  ADD PRIMARY KEY (`PostId`);

--
-- Indexes for table `Relationship`
--
ALTER TABLE `Relationship`
  ADD PRIMARY KEY (`UserId`,`Friend`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`UserId`),
  ADD UNIQUE KEY `UseId` (`UserId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
